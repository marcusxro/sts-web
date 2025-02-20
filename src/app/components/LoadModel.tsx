import * as tf from "@tensorflow/tfjs";

export const loadModel = async () => {
  try {

    
    await tf.setBackend("webgl"); // Use WebGL for better performance
    const model = await tf.loadLayersModel("/assets/model/model.json"); 
    console.log("Model loaded successfully");
    return model;
  } catch (error) {
    console.error("Error loading the model:", error);
    return null;
  }
};
