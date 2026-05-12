import React from 'react';

function PredictionResult({ result }) {
  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Prediction Result</h2>
      <p><strong>Prediction:</strong> {result.prediction}</p>
      <p><strong>Confidence:</strong> {result.confidence}%</p>
    </div>
  );
}

export default PredictionResult;