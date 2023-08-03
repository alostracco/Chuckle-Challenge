# Chuckle Challenge

## Project Description

Chuckle Challenge is an online web application that takes a spin on the classic "Try Not To Laugh Challenge".
Inspired by the recent surge in AI, this project was created to capitalize on these emerging technologies.

Employing the FER-2013 dataset from Kaggle, Python and TensorFlow are used to configure a convolutional neural network (CNN) model for facial emotion recognition. Using data augmentation techniques during preprocessing, the CNN model achieves an 84% testing accuracy.

Deployed on AWS EC2, the backend relies on a Flask and Nginx reverse proxy server hosting the CNN model, and for cross-communication between the front-end deployed on Vercel, respectively.

Built on Next.js, the front-end utilizes modern languages & libraries such as React.js, TypeScript, Chakra UI, Tailwind CSS, and Framer Motion to leverage static rendering.

Go to https://www.chucklechallenge.com/ to play!

Note: Application does not work on mobile
