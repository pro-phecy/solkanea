import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found - SolKanea';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 bg-primary-50 rounded-full flex items-center justify-center"
          >
            <span className="text-6xl font-bold text-primary-600">404</span>
          </motion.div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn btn-primary flex items-center justify-center"
          >
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn flex items-center justify-center text-primary-700 bg-primary-50 hover:bg-primary-100"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-600 mb-2">Looking for something specific?</p>
          <ul className="flex flex-wrap gap-4 justify-center">
            {['Services', 'About', 'Contact', 'Blog'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="text-primary-600 hover:text-primary-800 hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;