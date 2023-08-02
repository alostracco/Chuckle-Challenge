from flask import Flask, request, jsonify
import numpy as np
import cv2
from PIL import Image
import base64
import tensorflow as tf
from flask_cors import CORS
import io

# Load trained CNN model
model = tf.keras.models.load_model('smile_classifier.h5')

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

    # Detect face using Casecade Classifier
    face_classifier = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    faces = face_classifier.detectMultiScale(image_array, scaleFactor=1.1, minNeighbors=5, minSize=(40, 40))

    # Crop image to detected face region
    if len(faces) > 0:
        (x, y, w, h) = faces[0]
        image_array = image_array[y:y + h, x:x + w]

    # Convert the BGR image to RGB for further processing
    image_array = cv2.cvtColor(image_array, cv2.COLOR_BGR2RGB)

    # Resize the image to match the input size expected by CNN model
    image_array = cv2.resize(image_array, (48, 48))

    # Normalize image
    image_array = image_array / 255.0

    # Expand dimensions to match the input shape expected by CNN model
    image_array = np.expand_dims(image_array, axis=0)

    return image_array


def predict_facial_expression(image):
    # Pass preprocessed image through CNN model
    print(model.predict(image))
    prediction = (model.predict(image) > 0.5).astype("int32")
    # Get predicted facial expression
    if (prediction == 1):
        return 'Smiling'
    return 'Not Smiling'

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
    app.run(host='0.0.0.0')
