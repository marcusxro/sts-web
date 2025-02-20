"use client";

import React, { useRef, useEffect, useState } from 'react';
// import * as Hands from '@mediapipe/hands';
// import * as cameraUtils from '@mediapipe/camera_utils';
// import * as drawingUtils from '@mediapipe/drawing_utils';

declare global {
  interface Window {
    Handsfree: any;
  }
}

import * as tf from '@tensorflow/tfjs';

export default function FingerspellingDetection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [letter, setLetter] = useState<string>('');
  const [model, setModel] = useState<tf.LayersModel | any>(null);
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


  useEffect(() => {
    if (!isModelLoaded || !canvasRef.current) return;

    const handsfree = new window.Handsfree({
      hands: {
        enabled: true,
        maxNumHands: 2,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.5
      },
      weboji: false,
      facemesh: false,
      pose: false
    });

    // Define the custom gesture for 'A'
    handsfree.useGesture({
      name: "A",
      algorithm: "fingerpose",
      models: "hands",
      confidence: 7.5,
      description: [
        ["addCurl", "Thumb", "NoCurl", 1],
        ["addDirection", "Thumb", "VerticalUp", 0.875],
        ["addDirection", "Thumb", "DiagonalUpLeft", 1],
        ["addCurl", "Index", "FullCurl", 1],
        ["addDirection", "Index", "VerticalUp", 1],
        ["addCurl", "Middle", "FullCurl", 1],
        ["addDirection", "Middle", "VerticalUp", 1],
        ["addDirection", "Middle", "DiagonalUpLeft", 0.07142857142857142],
        ["addCurl", "Ring", "FullCurl", 1],
        ["addDirection", "Ring", "VerticalUp", 1],
        ["addCurl", "Pinky", "FullCurl", 1],
        ["addDirection", "Pinky", "DiagonalUpRight", 1],
        ["addDirection", "Pinky", "VerticalUp", 0.5789473684210527],
        ["setWeight", "Thumb", 2],
        ["setWeight", "Index", 2],
        ["setWeight", "Middle", 2],
        ["setWeight", "Ring", 2],
        ["setWeight", "Pinky", 2]
      ],
      enabled: true
    }
    );

    handsfree.useGesture({
      "name": "B",
      "algorithm": "fingerpose",
      "models": "hands",
      "confidence": 7.5,
      "description": [
        [
          "addCurl",
          "Thumb",
          "HalfCurl",
          1
        ],
        [
          "addDirection",
          "Thumb",
          "VerticalUp",
          1
        ],
        [
          "addCurl",
          "Index",
          "NoCurl",
          1
        ],
        [
          "addDirection",
          "Index",
          "VerticalUp",
          1
        ],
        [
          "addCurl",
          "Middle",
          "NoCurl",
          1
        ],
        [
          "addDirection",
          "Middle",
          "VerticalUp",
          1
        ],
        [
          "addCurl",
          "Ring",
          "NoCurl",
          1
        ],
        [
          "addDirection",
          "Ring",
          "VerticalUp",
          1
        ],
        [
          "addCurl",
          "Pinky",
          "NoCurl",
          1
        ],
        [
          "addDirection",
          "Pinky",
          "VerticalUp",
          1
        ],
        [
          "setWeight",
          "Thumb",
          2
        ]
      ],
      "enabled": true
    })


    console.log('Handsfree initialized:', handsfree.gesture);

    handsfree.start();

    handsfree.enablePlugins('browser');
  
    handsfree.use('gestureModel', (data: any) => {
      console.log(data)
      if (!data.hands?.gesture || data.hands.gesture.length === 0) {
        setLetter(''); // Reset when no gesture is detected
        return;
      }
  
      const detectedGesture = data.hands.gesture[0]; // Take the first detected gesture
      if (detectedGesture?.name) {
        console.log('Detected Gesture:', detectedGesture.name);
        setLetter(detectedGesture.name);
      }
    });

    handsfree.on('gesture', (data: any) => {
      try {
        if (data?.hands?.gesture) {
          const gestures = data.hands.gesture;
          gestures.forEach((gesture: any) => {
            if (gesture) {
              console.log('Detected gesture:', gesture);
              setLetter(gesture.name);
            } else {
              setLetter('');
            }
          });
        }
      } catch (error) {
        console.error('Error processing gesture:', error);
      }
    });

    handsfree.use('handProcessor', (data: any) => {
      try {
        if (!data?.hands?.multiHandLandmarks?.[0]) {
          setLetter('');
          return;
        }

        const landmarks = data.hands.multiHandLandmarks[0];
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, 640, 480);

        const processCanvas = document.createElement('canvas');
        processCanvas.width = 400;
        processCanvas.height = 400;
        const processCtx = processCanvas.getContext('2d');
        if (!processCtx) return;

        processCtx.fillStyle = 'white';
        processCtx.fillRect(0, 0, 400, 400);

        const pts = landmarks.map((lm: any) => [
          Math.floor(lm.x * 400),
          Math.floor(lm.y * 400)
        ]);

        processCtx.strokeStyle = '#00FF00';
        processCtx.lineWidth = 3;

        const fingerConnections = [
          [0, 1, 2, 3, 4],
          [0, 5, 6, 7, 8],
          [0, 9, 10, 11, 12],
          [0, 13, 14, 15, 16],
          [0, 17, 18, 19, 20]
        ];

        fingerConnections.forEach(finger => {
          for (let i = 1; i < finger.length; i++) {
            processCtx.beginPath();
            processCtx.moveTo(pts[finger[i - 1]][0], pts[finger[i - 1]][1]);
            processCtx.lineTo(pts[finger[i]][0], pts[finger[i]][1]);
            processCtx.stroke();
          }
        });

        const palmConnections = [
          [0, 5], [5, 9], [9, 13], [13, 17], [0, 17]
        ];

        palmConnections.forEach(([start, end]) => {
          processCtx.beginPath();
          processCtx.moveTo(pts[start][0], pts[start][1]);
          processCtx.lineTo(pts[end][0], pts[end][1]);
          processCtx.stroke();
        });

        processCtx.fillStyle = '#FF0000';
        pts.forEach((pt: any) => {
          processCtx.beginPath();
          processCtx.arc(pt[0], pt[1], 2, 0, 2 * Math.PI);
          processCtx.fill();
        });

        if (model) {
          const tensor = tf.tidy(() => {
            return tf.browser.fromPixels(processCanvas)
              .expandDims(0)
              .div(255.0);
          });
        }

        ctx.drawImage(processCanvas, 0, 0, 640, 480);

      } catch (error) {
        console.error('Error processing hand data:', error);
      }
    });

    return () => {
      handsfree.stop();
    };
  }, [isModelLoaded]);



  return (
    <div>
      <h1>Hand Sign Fingerspelling Detection</h1>
      <div style={{ position: 'relative', width: 640, height: 480 }}>
        <video
          ref={videoRef}
          style={{
            width: 640,
            height: 480,
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