import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-8">👨‍💻 Developer Info</h1>
        <div className="bg-white rounded-2xl shadow-lg p-8 text-left text-gray-700">
          <p className="text-lg mb-4">
            Hey there! I'm <span className="text-indigo-600 font-semibold">Ayush Ranjan</span>, an upcoming 2nd-year B.Tech student at <span className="text-indigo-600 font-semibold">IIT Bhubaneswar</span>. This project is proudly developed as <strong>Task 1</strong> of the <strong>Inter IIT Tech Meet</strong>.
          </p>
          <p className="text-md mb-2">
            The goal was to create a smart, responsive prediction interface simulating AI/ML functionality with beautiful analytics and interactive UI.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">🛠️ Technologies Used</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li><span className="font-medium text-indigo-600">React.js</span>: A JavaScript library for building user interfaces, enabling reusable and dynamic UI components.</li>
              <li><span className="font-medium text-indigo-600">Tailwind CSS</span>: A utility-first CSS framework that allows for rapid, custom UI styling directly in the markup.</li>
              <li><span className="font-medium text-indigo-600">Recharts</span>: A composable charting library built on React for beautiful, responsive data visualizations.</li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 italic">
              "Thanks for visiting! Hope you enjoy exploring this AI simulation interface."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
