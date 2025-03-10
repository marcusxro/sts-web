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
import detectorModel from './assets/model/detector';

export default function FingerspellingDetection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [letter, setLetter] = useState<string>('');
  const [model, setModel] = useState<tf.LayersModel | any>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    if (!isModelLoaded || !canvasRef.current) return;

    const handsfree = new window.Handsfree({
      hands: {
        enabled: true,
        maxNumHands: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.5
      },
      weboji: false,
      facemesh: false,
      pose: false
    });

    const gestures = detectorModel;

    gestures.forEach((gesture: any) => {
      handsfree.useGesture(gesture);
    });



    handsfree.start();
    handsfree.enablePlugins('browser');
    handsfree.use('gestureModel', (data: any) => {

      if (!data.hands?.gesture || data.hands.gesture.length === 0) {
        setLetter(''); 
        return;
      }

      const detectedGesture = data.hands.gesture[0]; 
      if (detectedGesture?.name) {
        setLetter(detectedGesture.name);

      } else {
        setLetter('');
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
