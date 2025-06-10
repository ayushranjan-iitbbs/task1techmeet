export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-100 to-purple-200 text-gray-700  border-t border-indigo-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-700">AI Predictor</h2>
          <p className="mt-2 text-sm text-gray-600">
            Simulated AI predictions, made fast and intuitive.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-indigo-700">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-700">Developer</a></li>
            <li><a href="/login" className="hover:text-indigo-700">Login</a></li>
            <li><a href="/predict" className="hover:text-indigo-700">Predict</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Contact</h3>
          <p className="text-sm">Built with ❤️ by Ayush</p>
          <p className="text-sm">© {new Date().getFullYear()} AI Predictor</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-indigo-200">
        Built with React + Tailwind | Simulated AI Predictions
      </div>
    </footer>
  );
}
