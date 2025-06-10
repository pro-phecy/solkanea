import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Home, DollarSign, Leaf, Zap } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Sun className="w-10 h-10 text-accent-400" />,
      title: "High Efficiency Panels",
      description: "Our premium solar panels convert more sunlight into electricity, maximizing your energy production and savings."
    },
    {
      icon: <Battery className="w-10 h-10 text-accent-400" />,
      title: "Battery Storage",
      description: "Store excess energy for use during peak hours or outages with our advanced battery storage solutions."
    },
    {
      icon: <Home className="w-10 h-10 text-accent-400" />,
      title: "Custom Installations",
      description: "Tailored solar system designs that perfectly match your home's architecture and energy requirements."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-accent-400" />,
      title: "Cost Savings",
      description: "Reduce or eliminate your electricity bills while increasing your property value with solar energy."
    },
    {
      icon: <Leaf className="w-10 h-10 text-accent-400" />,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint and contribute to a cleaner environment for future generations."
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-400" />,
      title: "Smart Monitoring",
      description: "Track your system's performance in real-time with our intuitive mobile and web applications."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Why Choose Us</span>
          <h2 className="heading-lg text-gray-900 mt-2 mb-4">Power Your Life With Solar Energy</h2>
          <p className="text-lg text-gray-600">
            Discover the advantages of choosing SolKanea for your renewable energy needs. We provide comprehensive solar solutions that save money and protect our planet.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-card hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;