import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
        <div className="text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-display font-black text-brand-600/20 mb-8"
          >
            404
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/" 
              className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:bg-brand-700 transition-all flex items-center justify-center gap-3"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold shadow-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
