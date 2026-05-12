import React from 'react';
import PredictionForm from '../components/PredictionForm';
import PredictionResult from '../components/PredictionResult';

function Prediction() {
  const [result, setResult] = React.useState(null);

  return (
    <div className="container mx-auto p-4">
      <PredictionForm setResult={setResult} />
      {result && <PredictionResult result={result} />}
    </div>
  );
}

export default Prediction;