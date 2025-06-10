 import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Predict from './pages/Predict';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import { LogIn } from 'lucide-react';
import LoginSignup from './pages/Login';
 

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/predict" element={<Predict/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
         <Footer />
      </main>
       
    </div>
  );
}
