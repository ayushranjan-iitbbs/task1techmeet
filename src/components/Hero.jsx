import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-indigo-100 to-white py-30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Explore the Power of <span className="text-indigo-600">AI Predictions</span>
          </h1>

         
          <div className="mt-7 mb-4 p-7 md:hidden">
            <img 
              src="https://cdn.kodytechnolab.com/wp-content/uploads/2025/03/ai-and-ml-development-company-in-india.webp" 
              alt="AI Prediction" 
              className="w-full max-w-md mx-auto max-h-56"
            />
          </div>

          <p className="mt-5 text-lg text-gray-600">
            Upload text, images, or documents and simulate intelligent ML predictions instantly.
          </p>

          {/* Features */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
              ⚡ Instant Predictions
            </span>
            <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
              📊 Analytics Dashboard
            </span>
            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
              🧠 Smart Simulation
            </span>
          </div>

           
          <Link to="/predict" className="mt-8 inline-block bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            🚀 Predict Now!
          </Link>
        </div>

        
        <div className="hidden md:block">
          <img 
            src="https://cdn.kodytechnolab.com/wp-content/uploads/2025/03/ai-and-ml-development-company-in-india.webp" 
            alt="AI Prediction" 
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
}
