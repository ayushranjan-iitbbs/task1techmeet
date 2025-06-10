import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Category A', value: 45 },
  { name: 'Category B', value: 30 },
  { name: 'Category C', value: 25 },
];

const barData = [
  { name: 'Accuracy', value: 92 },
  { name: 'Precision', value: 88 },
  { name: 'Recall', value: 85 },
];

const COLORS = ['#6366F1', '#A78BFA', '#C084FC'];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 flex flex-col lg:flex-row">
       
      <aside className="bg-white border-r w-full lg:w-72 p-6 space-y-6">
        <h2 className="text-xl font-bold text-indigo-700">Previous Predictions</h2>
        <ul className="text-gray-600 space-y-3 text-sm">
          <li className="hover:text-indigo-600 cursor-pointer">Text Prompt - Sentiment</li>
          <li className="hover:text-indigo-600 cursor-pointer">Image - Object Detection</li>
          <li className="hover:text-indigo-600 cursor-pointer">PDF - Document Classification</li>
          <li className="hover:text-indigo-600 cursor-pointer">Speech - Emotion Analysis</li>
        </ul>
        <Link
          to="/predict"
          className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 transition"
        >
          + New Prediction
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Prediction Dashboard</h1>

        {/* Enhanced Prediction Summary */}
        <div className="mb-8 p-6 rounded-xl bg-white shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">📄 Prediction Summary (Detailed)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 text-sm">
            <div className="space-y-1">
              <p><strong>📁 Input Type:</strong> Document (PDF)</p>
              <p><strong>🎯 Prediction:</strong> Environmental Category</p>
              <p><strong>🔒 Confidence Score:</strong> 91%</p>
              <p><strong>🧠 Model Used:</strong> AI-MockNet v2.1</p>
            </div>
            <div className="space-y-1">
              <p><strong>⏰ Submission Time:</strong> 2025-06-10 18:12</p>
              <p><strong>⚡ Processing Time:</strong> 2.3 seconds</p>
              <p><strong>🆔 User ID:</strong> user_129384</p>
              <p><strong>📊 Token Usage:</strong> 120</p>
            </div>
            <div className="space-y-1">
              <p><strong>📝 Input Summary:</strong> 843 words, 3 images</p>
              <p><strong>📌 Top Keywords:</strong> climate, emissions, sustainability</p>
              <p><strong>🌍 Language:</strong> English</p>
              <p><strong>🧪 Data Integrity:</strong> High</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Prediction Categories</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Model Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366F1" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-10 bg-gradient-to-br from-purple-100 via-indigo-100 to-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">🧾 Latest Prediction Summary</h3>
          <p className="text-gray-700 text-sm">Input: Sample document discussing climate change and global emissions policies.</p>
          <p className="text-gray-700 text-sm">Predicted Class: 🌱 Environmental</p>
          <p className="text-gray-700 text-sm">Confidence Score: 91% | Model: AI-MockNet v2.1</p>
          <p className="text-gray-500 text-xs mt-2">Prediction Time: 2025-06-10 18:12 | Duration: 2.3s | User: user_129384</p>
        </div>
      </main>
    </div>
  );
}
