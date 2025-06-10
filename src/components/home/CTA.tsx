import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 rounded-full bg-white"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="heading-lg text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Harness the Power of the Sun?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of satisfied customers who have made the switch to clean, renewable solar energy with SolKanea.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="btn bg-accent-400 hover:bg-accent-500 text-primary-900 font-semibold focus:ring-accent-400"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/services" 
              className="btn flex items-center justify-center text-white border-2 border-white hover:bg-white/10"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-8 text-primary-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              No obligation. Free assessment. Expert advice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;