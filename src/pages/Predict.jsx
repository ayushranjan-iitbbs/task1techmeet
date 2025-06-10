import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, Send } from 'lucide-react';

export default function Predict() {
  const [textInput, setTextInput] = useState('');
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handlePredict = () => {
    if (!textInput.trim() && !fileName) {
      alert("Please enter some input or upload a file to proceed.");
      return;
    }
    navigate('/dashboard');
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-indigo-700 mb-4">
            Try Our Smart AI Predictor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your query or upload files to simulate an instant AI prediction using our mock ML engine.
          </p>
        </div>

        {/* Sample Prediction Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-gradient-to-br from-purple-100 via-indigo-100 to-white border border-indigo-200 rounded-2xl shadow-lg p-6 h-64 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-xl font-bold text-indigo-700 mb-2">Prediction #{id}</h4>
              <p className="text-base text-gray-600">
                Input: Sample {id === 4 ? 'PDF Document' : id === 3 ? 'Image Data' : id === 2 ? 'Text Prompt' : 'Mixed Media'}
                <br />Confidence score: {88 + id}%.<br />Output: Category {id}, Level {id + 1}
              </p>
              <div className="text-right text-sm text-gray-400">Model: AI-MockNet</div>
            </div>
          ))}
        </div>

        {/* Input Tab */}
        <div className="bg-white border shadow-xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <textarea
            placeholder="Type your input here..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="w-full md:w-2/3 h-20 p-2 border border-indigo-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 text-sm"
          />

           
          <div className="flex flex-col items-center gap-3">
            <label className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-200 transition">
              <UploadCloud className="w-5 h-5" />
              <span>Upload</span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files[0]?.name)}
              />
            </label>
            {fileName && <span className="text-sm text-gray-500">📁 {fileName}</span>}
          </div>

          {/* Submit Button */}
          <button
            onClick={handlePredict}
            className="mt-4 md:mt-0 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
