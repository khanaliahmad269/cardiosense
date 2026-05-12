# CardioSense

CardioSense is an AI-powered application designed to predict heart disease risk based on patient data.

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Features

- AI-powered heart disease prediction
- User-friendly prediction form
- Admin dashboard for patient data
- Contact form for user inquiries
- Responsive design

## Technologies Used

- **Frontend**: React, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, TensorFlow.js