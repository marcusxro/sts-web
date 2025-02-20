"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as Hands from '@mediapipe/hands';
import * as cameraUtils from '@mediapipe/camera_utils';
import * as drawingUtils from '@mediapipe/drawing_utils';
import * as tf from '@tensorflow/tfjs';

export default function FingerspellingDetection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [letter, setLetter] = useState<string>('');
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // Load the trained model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel('/model/model.json');
        setModel(loadedModel);
        setIsModelLoaded(true);
        console.log("✅ Model loaded successfully");
      } catch (error) {
        console.error("❌ Error loading model:", error);
      }
    };

    loadModel();
  }, []);

  const distance2 = (p1: number, p2: number, landmarks: Array<{ x: number; y: number; z: number }>) => {
    const x1 = landmarks[p1].x * 400;
    const y1 = landmarks[p1].y * 400;
    const x2 = landmarks[p2].x * 400;
    const y2 = landmarks[p2].y * 400;
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };


  const classifyHandSign = async (landmarks: Array<{ x: number; y: number; z: number }>) => {
  if (!model || !canvasRef.current) return;

  try {
    // ... (canvas setup code remains the same)

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Convert MediaPipe normalized coordinates to pixel coordinates
    const pts = landmarks.map(lm => {
      // Convert from normalized (0-1) to pixel coordinates
      const x = Math.floor(lm.x * canvas.width);
      const y = Math.floor(lm.y * canvas.height);
      return [x, y];
    });

    // Calculate bounding box
    const x_coords = pts.map(pt => pt[0]);
    const y_coords = pts.map(pt => pt[1]);
    const x = Math.min(...x_coords);
    const y = Math.min(...y_coords);
    const w = Math.max(...x_coords) - x;
    const h = Math.max(...y_coords) - y;

    // Calculate offsets like in Python
    const offset = 15;
    const os = ((canvas.width - w) / 2) - offset;
    const os1 = ((canvas.height - h) / 2) - offset;

    // Adjust points with offset
    const adjustedPts = pts.map(pt => [
      pt[0] + os,
      pt[1] + os1
    ]);

    // Create a new canvas for the processed image
    const processCanvas = document.createElement('canvas');
    processCanvas.width = 400;
    processCanvas.height = 400;
    const processCtx = processCanvas.getContext('2d');
    if (!processCtx) return;

    // Set white background
    processCtx.fillStyle = 'white';
    processCtx.fillRect(0, 0, 400, 400);

    // Draw lines and points exactly like Python
    processCtx.strokeStyle = '#00FF00';
    processCtx.lineWidth = 3;

    // Draw connections like in Python
    for (let t = 0; t < 4; t++) {
      processCtx.beginPath();
      processCtx.moveTo(adjustedPts[t][0], adjustedPts[t][1]);
      processCtx.lineTo(adjustedPts[t + 1][0], adjustedPts[t + 1][1]);
      processCtx.stroke();
    }
    // ... (rest of the drawing code)

    // Get predictions using the processed canvas
    const tensor = tf.tidy(() => {
      return tf.browser.fromPixels(processCanvas, 3)
        .resizeNearestNeighbor([400, 400])
        .expandDims(0)
        .cast('float32')
        .div(255.0);
    })

    const predictions = await model.predict(tensor) as tf.Tensor;
    const probabilities = await predictions.data();
    tensor.dispose();
    predictions.dispose();

    const prob = Array.from(probabilities);
    let ch1 = prob.indexOf(Math.max(...prob));
    prob[ch1] = 0;
    const ch2 = prob.indexOf(Math.max(...prob));
    prob[ch2] = 0;
    const ch3 = prob.indexOf(Math.max(...prob));

    let pl = [ch1, ch2];
    let predicted = '?';

    function distance(pt1: number[], pt2: number[]): number {
      return Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
    }

    // All conditions for ch1 calculations
    // [Aemnst] group
    if ([[5,2],[5,3],[3,5],[3,6],[3,0],[3,2],[6,4],[6,1],[6,2],[6,6],[6,7],[6,0],[6,5],[4,1],
         [1,0],[1,1],[6,3],[1,6],[5,6],[5,1],[4,5],[1,4],[1,5],[2,0],[2,6],[4,6],[1,0],[5,7],
         [1,6],[6,1],[7,6],[2,5],[7,1],[5,4],[7,0],[7,5],[7,2]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (pts[6][1] < pts[8][1] && pts[10][1] < pts[12][1] && pts[14][1] < pts[16][1] && pts[18][1] < pts[20][1]) {
        ch1 = 0;
      }
    }

    // [o][s]
    if ([[2,2],[2,1]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (pts[5][0] < pts[4][0]) {
        ch1 = 0;
        console.log("++++++++++++++++++");
      }
    }

    // [c0][aemnst]
    if ([[0,0],[0,6],[0,2],[0,5],[0,1],[0,7],[5,2],[7,6],[7,1]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if ((pts[0][0] > pts[8][0] && pts[0][0] > pts[4][0] && pts[0][0] > pts[12][0] && 
           pts[0][0] > pts[16][0] && pts[0][0] > pts[20][0]) && pts[5][0] > pts[4][0]) {
        ch1 = 2;
      }
    }

    // [c0][aemnst] second condition
    if ([[6,0],[6,6],[6,2]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (distance(pts[8], pts[16]) < 52) {
        ch1 = 2;
      }
    }

    // [gh][bdfikruvw]
    if ([[1,4],[1,5],[1,6],[1,3],[1,0]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (pts[6][1] > pts[8][1] && pts[14][1] < pts[16][1] && pts[18][1] < pts[20][1] && 
          pts[0][0] < pts[8][0] && pts[0][0] < pts[12][0] && pts[0][0] < pts[16][0] && 
          pts[0][0] < pts[20][0]) {
        ch1 = 3;
        console.log("33333c");
      }
    }

    // [gh][l]
    if ([[4,6],[4,1],[4,5],[4,3],[4,7]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (pts[4][0] > pts[0][0]) {
        ch1 = 3;
        console.log("33333b");
      }
    }

    // [gh][pqz]
    if ([[5,3],[5,0],[5,7],[5,4],[5,2],[5,1],[5,5]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (pts[2][1] + 15 < pts[16][1]) {
        ch1 = 3;
        console.log("33333a");
      }
    }

    // [l][x]
    if ([[6,4],[6,1],[6,2]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (distance(pts[4], pts[11]) > 55) {
        ch1 = 4;
      }
    }

    // [l][d]
    if ([[1,4],[1,6],[1,1]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (distance(pts[4], pts[11]) > 50 && pts[6][1] > pts[8][1] && 
          pts[10][1] < pts[12][1] && pts[14][1] < pts[16][1] && pts[18][1] < pts[20][1]) {
        ch1 = 4;
      }
    }

    // [l][gh]
    if ([[3,6],[3,4]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (pts[4][0] < pts[0][0]) {
        ch1 = 4;
      }
    }

    // [l][c0]
    if ([[2,2],[2,5],[2,4]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (pts[4][0] > pts[0][0]) {
        ch1 = 4;
      }
    }

    // [d][pqz]
    const fg = 19;
    if ([[5,0],[3,4],[3,0],[3,1],[3,5],[5,5],[5,4],[5,1],[7,6]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if ((pts[6][1] > pts[8][1] && pts[10][1] < pts[12][1] && pts[14][1] < pts[16][1] && 
           pts[18][1] < pts[20][1]) && (pts[2][0] < pts[0][0]) && pts[4][1] > pts[14][1]) {
        ch1 = 1;
        console.log("111113");
      }
    }

    // Additional conditions
    if ([[4,1],[4,2],[4,4]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if (distance(pts[4], pts[11]) < 50 && pts[6][1] > pts[8][1] && 
          pts[10][1] < pts[12][1] && pts[14][1] < pts[16][1] && pts[18][1] < pts[20][1]) {
        ch1 = 1;
        console.log("1111993");
      }
    }

    if ([[3,4],[3,0],[3,1],[3,5],[3,6]].some(([a, b]) => a === pl[0] && b === pl[1])) {
      if ((pts[6][1] > pts[8][1] && pts[10][1] < pts[12][1] && pts[14][1] < pts[16][1] && 
           pts[18][1] < pts[20][1]) && (pts[2][0] < pts[0][0]) && pts[14][1] < pts[4][1]) {
        ch1 = 1;
        console.log("1111mmm3");
      }
    }

    // Character classification based on ch1 value
    if (ch1 === 0) {  // [aemnst] group
      predicted = 'S';
      if (pts[4][0] < pts[6][0] && pts[4][0] < pts[10][0] && pts[4][0] < pts[14][0] && pts[4][0] < pts[18][0]) {
        predicted = 'A';
      }
      if (pts[4][0] > pts[6][0] && pts[4][0] < pts[10][0] && pts[4][0] < pts[14][0] && 
          pts[4][0] < pts[18][0] && pts[4][1] < pts[14][1] && pts[4][1] < pts[18][1]) {
        predicted = 'T';
      }
      if (pts[4][1] > pts[8][1] && pts[4][1] > pts[12][1] && pts[4][1] > pts[16][1] && pts[4][1] > pts[20][1]) {
        predicted = 'E';
      }
      if (pts[4][0] > pts[6][0] && pts[4][0] > pts[10][0] && pts[4][0] > pts[14][0] && pts[4][1] < pts[18][1]) {
        predicted = 'M';
      }
      if (pts[4][0] > pts[6][0] && pts[4][0] > pts[10][0] && pts[4][1] < pts[18][1] && pts[4][1] < pts[14][1]) {
        predicted = 'N';
      }
    } else if (ch1 === 2) {  // [co] group
      if (distance(pts[12], pts[4]) > 42) {
        predicted = 'C';
      } else {
        predicted = 'O';
      }
    } else if (ch1 === 3) {  // [gh] group
      if (distance(pts[8], pts[12]) > 72) {
        predicted = 'G';
      } else {
        predicted = 'H';
      }
    } else if (ch1 === 7) {  // [yj] group
      if (distance(pts[8], pts[4]) > 42) {
        predicted = 'Y';
      } else {
        predicted = 'J';
      }
    } else if (ch1 === 4) {
      predicted = 'L';
    } else if (ch1 === 6) {
      predicted = 'X';
    } else if (ch1 === 5) {  // [pqz] group
      if (pts[4][0] > pts[12][0] && pts[4][0] > pts[16][0] && pts[4][0] > pts[20][0]) {
        if (pts[8][1] < pts[5][1]) {
          predicted = 'Z';
        } else {
          predicted = 'Q';
        }
      } else {
        predicted = 'P';
      }
    } else if (ch1 === 1) {  // [bfdiuvwkr] group
      if (pts[6][1] > pts[8][1] && pts[10][1] > pts[12][1] && pts[14][1] > pts[16][1] && pts[18][1] > pts[20][1]) {
        predicted = 'B';
      }
      if (pts[6][1] > pts[8][1] && pts[10][1] < pts[12][1] && pts[14][1] < pts[16][1] && pts[18][1] < pts[20][1]) {
        predicted = 'D';
      }
      if (pts[6][1] < pts[8][1] && pts[10][1] > pts[12][1] && pts[14][1] > pts[16][1] && pts[18][1] > pts[20][1]) {
        predicted = 'F';
      }
      if (pts[6][1] < pts[8][1] && pts[10][1] < pts[12][1] && pts[14][1] < pts[16][1] && pts[18][1] > pts[20][1]) {
        predicted = 'I';
      }
      if (pts[6][1] > pts[8][1] && pts[10][1] > pts[12][1] && pts[14][1] > pts[16][1] && pts[18][1] < pts[20][1]) {
        predicted = 'W';
      }
      if (pts[6][1] > pts[8][1] && pts[10][1] > pts[12][1] && pts[14][1] < pts[16][1] && 
          pts[18][1] < pts[20][1] && pts[4][1] < pts[9][1]) {
        predicted = 'K';
      }
      if ((distance(pts[8], pts[12]) - distance(pts[6], pts[10])) < 8 && 
          pts[6][1] > pts[8][1] && pts[10][1] > pts[12][1] && pts[14][1] < pts[16][1] && pts[18][1] < pts[20][1]) {
        predicted = 'U';
      }
      if ((distance(pts[8], pts[12]) - distance(pts[6], pts[10])) >= 8 && 
          pts[6][1] > pts[8][1] && pts[10][1] > pts[12][1] && pts[14][1] < pts[16][1] && 
          pts[18][1] < pts[20][1] && pts[4][1] > pts[9][1]) {
        predicted = 'V';
      }
      if (pts[8][0] > pts[12][0] && pts[6][1] > pts[8][1] && pts[10][1] > pts[12][1] && 
          pts[14][1] < pts[16][1] && pts[18][1] < pts[20][1]) {
        predicted = 'R';
      }
    }

    // Special cases
    if (predicted === '1' || predicted === 'E' || predicted === 'S' || 
        predicted === 'X' || predicted === 'Y' || predicted === 'B') {
      if (pts[6][1] > pts[8][1] && pts[10][1] < pts[12][1] && 
          pts[14][1] < pts[16][1] && pts[18][1] > pts[20][1]) {
        predicted = 'Space';
      }
    }

    if (predicted === 'E' || predicted === 'Y' || predicted === 'B') {
      if (pts[4][0] < pts[5][0]) {
        predicted = 'Next';
      }
    }

    if (predicted === 'Next' || predicted === 'B' || predicted === 'C' || 
        predicted === 'H' || predicted === 'F') {
      if (pts[0][0] > pts[8][0] && pts[0][0] > pts[12][0] && 
          pts[0][0] > pts[16][0] && pts[0][0] > pts[20][0] && 
          pts[4][1] < pts[8][1] && pts[4][1] < pts[12][1] && 
          pts[4][1] < pts[16][1] && pts[4][1] < pts[20][1]) {
        predicted = 'Backspace';
      }
    }

    console.log("ch1=", ch1, " ch2=", ch2, " ch3=", ch3);
    console.log("Final prediction:", predicted);
    setLetter(predicted);
    return predicted;

  } catch (error) {
    console.error("Error classifying hand sign:", error);
    return '?';
  }
};
 
  useEffect(() => {
    if (!videoRef.current || !isModelLoaded) return;

    const hands = new Hands.Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    hands.onResults(async (results) => {
      if (!canvasRef.current || !videoRef.current) return;
      const canvasCtx = canvasRef.current.getContext('2d');
      if (!canvasCtx) return;

      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        for (const landmarks of results.multiHandLandmarks) {
          drawingUtils.drawConnectors(canvasCtx, landmarks, Hands.HAND_CONNECTIONS, {
            color: '#00FF00',
            lineWidth: 5,
          });
          drawingUtils.drawLandmarks(canvasCtx, landmarks, {
            color: '#FF0000',
            lineWidth: 2,
          });

          if (isModelLoaded) {
            await classifyHandSign(landmarks);
          }
        }
      } else {
        setLetter('');
      }
      canvasCtx.restore();
    });

    const camera = new cameraUtils.Camera(videoRef.current, {
      onFrame: async () => {
        if (videoRef.current) {
          await hands.send({ image: videoRef.current });
        }
      },
      width: 640,
      height: 480,
    });

    camera.start();

    return () => {
      hands.close();
    };
  }, [isModelLoaded]);

  return (
    <div>
      <h1>Hand Sign Fingerspelling Detection</h1>
      <div style={{ position: 'relative', width: 640, height: 480 }}>
        <video
          ref={videoRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 640,
            height: 480,
            visibility: 'hidden',
          }}
          autoPlay
          playsInline
        ></video>
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      <div>
        <h2>Detected Letter: {letter}</h2>
      </div>
    </div>
  );
}