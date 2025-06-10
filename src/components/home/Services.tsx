import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Service {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      image: "https://images.pexels.com/photos/2884866/pexels-photo-2884866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Residential Solar",
      description: "Custom solar solutions for homes of all sizes. Reduce your energy bills and increase your property value.",
      link: "/services#residential"
    },
    {
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Commercial Solar",
      description: "Comprehensive solar systems for businesses, warehouses, and commercial properties to reduce operating costs.",
      link: "/services#commercial"
    },
    {
      image: "https://images.pexels.com/photos/9875431/pexels-photo-9875431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Solar Battery Storage",
      description: "Store excess energy for use during peak hours or outages with our advanced battery solutions.",
      link: "/services#battery"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Services</span>
            <h2 className="heading-lg text-gray-900 mt-2 mb-4">Comprehensive Solar Solutions</h2>
            <p className="text-lg text-gray-600">
              From initial consultation to installation and maintenance, we provide end-to-end solar energy solutions for residential and commercial needs.
            </p>
          </div>
          <Link 
            to="/services" 
            className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group rounded-lg overflow-hidden shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;