# Patient Management Dashboard

A simple full-stack web application to manage patients and diagnostic tests.

## Features

- Register new patients
- Add diagnostic tests for patients
- View test records
- Search tests by patient name
- Backend API deployed online

## Tech Stack

Frontend:
- React (Vite)
- Axios
- CSS

Backend:
- Node.js
- Express.js

Deployment:
- Frontend: Vercel
- Backend: Render

## Live Demo

Frontend:
https://patient-doctor.vercel.app

Backend API:
https://patient-doctor-koyy.onrender.com

Example API:
https://patient-doctor-koyy.onrender.com/patients

## Project Structure
patient-doctor
├── backend
│ ├── server.js
│ └── routes
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── App.jsx
│ │ └── styles.css



## Installation (Local Setup)

### Clone Repository


git clone https://github.com/imarani494/patient-doctor.git


### Backend Setup


cd backend
npm install
node server.js


Backend runs on:


http://localhost:5000


cd frontend
npm install
npm run dev


Frontend runs on:


http://localhost:5173


## API Endpoints

Get all patients


GET /patients


Add patient


POST /patients


Add test


POST /tests


Get tests


GET /tests


## Author

Imran  
GitHub: https://github.com/imarani494
