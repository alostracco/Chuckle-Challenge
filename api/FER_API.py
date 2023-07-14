from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import numpy as np
import cv2
from PIL import Image
import io
import base64
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware

# Load trained CNN model
model = tf.keras.models.load_model('../chucklechallenge/src/pages/api/FER.h5')

class ImageData(BaseModel):
    image: str

def preprocess_image(base64_string):
    # Decode the base64 string
    image_data = base64.b64decode(base64_string)

    # Remove the WebP prefix
    image_data = base64_string.split(",")[1]
    
    # Decode the base64 data into binary
    binary_data = base64.b64decode(image_data)

    # Create a PIL Image from the binary data
    image = Image.open(io.BytesIO(binary_data))

    # Convert the PIL Image to a numpy array
    image_array = np.array(image)

    # Resize the image to match the input size expected by the CNN model
    image = cv2.resize(image_array, (48, 48))

    # Normalize image
    image = image / 255.0

    # Expand dimensions to match the input shape expected by the CNN model
    image = np.expand_dims(image, axis=0)

    return image

def predict_facial_expression(image):
    # Pass preprocessed image through the CNN model
    prediction = model.predict(image)
    # Get predicted facial expression
    EMOTIONS = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']
    facial_expression = EMOTIONS[np.argmax(prediction)]

    return facial_expression

# Create FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define route to receive POST requests
@app.post('/predict')
async def predict(request: Request, data: ImageData):
    # Get the base64 string from the request body
    base64_string = data.image

    # Preprocess image
    processed_image = preprocess_image(base64_string)

    # Predict facial expression
    facial_expression = predict_facial_expression(processed_image)

    # Return predicted facial expression as JSON response
    return JSONResponse(content={'facial_expression': facial_expression})

# Run the FastAPI app
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
