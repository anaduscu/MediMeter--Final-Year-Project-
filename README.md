# Medimeter -  medication management for the elderly

This project is a combination of an Expo mobile app frontend and a Django backend server.

## PREREQUISITES
Installing 
1. git
2. npm
3. Node.js
4. Python
5. Django
6. Expo Go app from the App store/ Google Play

## SET UP:
open the command line/terminal into the desired directory, run the following commands:

git clone https://github.com/anaduscu/MediMeter--Final-Year-Project-.git

npm install -g expo-cli

### Install Expo CLI globally
pip install -r requirements.txt 

## RUNNING THE APPLICATION:
cd into MediMeter/frontend and run:

cd frontend

### Install the necessary Node modules for the Expo app.
npm install

npm install -g expo-cli

npm install react-native-fs  

npm install expo-image-picker  

nmp install expo-notifications

### In a separate terminal window, cd into MediMeter/backend
pip install -r requirements.txt

python manage.py runserver 0.0.0.0:8000

### Run Expo Metro and use Device camera to scan QR code, which opens the project in the Expo App
npx expo start

## Access the Django backend API at http://localhost:8000 or http://<your-ip-address>:8000.
