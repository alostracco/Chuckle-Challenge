import tensorflow as tf
import base64
import io
import numpy as np
from tensorflow import keras
from flask import Flask, request, jsonify
from PIL import Image

app = Flask(__name__)

# Turn base64 encoded image into numpy array and feed it to facial emotion detection model
EMOTIONS = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']

def facial_emotion_recognition(image_base64):
    base64_decoded = base64.b64decode(image_base64)
    image = Image.open(io.BytesIO(base64_decoded))
    image_array = np.array(image)
    
    model = tf.keras.models.load_model('FER.h5')
    image_array = image_array.reshape((1, ) + image_array.shape)
    prediction = model.predict(image_array)
    
    emotion_index = np.argmax(prediction)
    emotion = EMOTIONS[emotion_index]
    
    return emotion

@app.route('/api/emotion', methods=['POST'])
def recognize_emotion():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file found.'}), 400
    image = request.files['image']
    
    # Process the image here using facial emotion recognition model
    predicted_emotion = facial_emotion_recognition(image)
    
    return jsonify({'emotion': predicted_emotion})

if __name__ == '__main__':
    app.run(debug=True)
