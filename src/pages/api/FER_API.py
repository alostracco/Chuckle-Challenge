from flask import Flask, request, jsonify
import numpy as np
import cv2
from PIL import Image
import base64
import tensorflow as tf
from flask_cors import CORS
import io

# Load trained CNN model
model = tf.keras.models.load_model('../chucklechallenge/src/pages/api/FER.h5')

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

    # Resize the image to match the input size expected by CNN model
    image = cv2.resize(image_array, (48, 48))

    # Normalize image
    image = image / 255.0

    # Expand dimensions to match the input shape expected by CNN model
    image = np.expand_dims(image, axis=0)

    return image

def predict_facial_expression(image):
    # Pass preprocessed image through CNN model
    prediction = model.predict(image)
    # Get predicted facial expression
    EMOTIONS = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']
    facial_expression = EMOTIONS[np.argmax(prediction)]

    return facial_expression

# Create Flask app
app = Flask(__name__)
CORS(app)

# Define route to receive POST requests
@app.route('/predict', methods=['POST'])
def predict():
    # Get the base64 string from the request body
    data = request.get_json()
    base64_string = data['image']

    # Preprocess image
    processed_image = preprocess_image(base64_string)

    # Predict facial expression
    facial_expression = predict_facial_expression(processed_image)

    # Return predicted facial expression as JSON response
    return jsonify({'facial_expression': facial_expression})

# Run Flask app
if __name__ == '__main__':
    app.run(port=5000)
