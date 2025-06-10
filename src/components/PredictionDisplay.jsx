import { useState, useEffect } from "react";
import { mockPrediction } from "../data/mockdata";

const PredictionDisplay = ({ input }) => {
  const [loading, setLoading] = useState(true);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPrediction(mockPrediction);
      setLoading(false);
    }, 1500);
  }, [input]);

  if (loading) return <p className="p-4 text-blue-500">Loading prediction...</p>;

  return (
    <div className="p-4 border-t mt-4">
      <h3 className="font-semibold">Prediction Result:</h3>
      <p>Input: <strong>{input}</strong></p>
      <p>Result: <strong>{prediction.result}</strong></p>
      <p>Confidence: <strong>{prediction.confidence}%</strong></p>
    </div>
  );
};

export default PredictionDisplay;
