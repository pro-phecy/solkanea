import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Battery, Plug, Wrench, LineChart } from 'lucide-react';
import CTA from '../components/home/CTA';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services - SolKanea';
  }, []);

  const services: Service[] = [
    {
      id: "residential",
      icon: <Home className="w-10 h-10 text-accent-400" />,
      title: "Residential Solar",
      description: "Power your home with clean, renewable energy and reduce or eliminate your electricity bills with our custom residential solar solutions.",
      features: [
        "Custom system design tailored to your home's energy needs",
        "Premium high-efficiency solar panels with 25-year warranty",
        "Professional installation by certified technicians",
        "Smart monitoring system to track production in real-time",
        "Battery storage options for energy independence",
        "Comprehensive support with permits and incentives"
      ],
      image: "https://images.pexels.com/photos/9875431/pexels-photo-9875431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: "commercial",
      icon: <Building2 className="w-10 h-10 text-accent-400" />,
      title: "Commercial Solar",
      description: "Reduce operating costs and achieve sustainability goals with our commercial solar solutions designed for businesses of all sizes.",
      features: [
        "Comprehensive energy assessment and ROI analysis",
        "Custom system design optimized for your facility",
        "High-capacity commercial-grade solar panels",
        "Roof, ground-mount, or carport installation options",
        "Advanced monitoring and management systems",
        "Assistance with tax incentives and depreciation benefits"
      ],
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: "battery",
      icon: <Battery className="w-10 h-10 text-accent-400" />,
      title: "Solar Battery Storage",
      description: "Store excess energy from your solar system for use during outages or peak rate hours with our advanced battery storage solutions.",
      features: [
        "Integration with new or existing solar systems",
        "Backup power during grid outages",
        "Peak shaving to reduce demand charges",
        "Time-of-use optimization to maximize savings",
        "Scalable capacity to meet your specific needs",
        "Smart energy management system"
      ],
      image: "https://images.pexels.com/photos/9875364/pexels-photo-9875364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: "ev-charging",
      icon: <Plug className="w-10 h-10 text-accent-400" />,
      title: "EV Charging Stations",
      description: "Power your electric vehicle with clean solar energy by installing an EV charging station integrated with your solar system.",
      features: [
        "Level 2 and DC fast charging options",
        "Integration with your solar system",
        "Smart scheduling for optimal charging times",
        "Compatible with all EV makes and models",
        "Weatherproof design for indoor or outdoor installation",
        "Mobile app control and monitoring"
      ],
      image: "https://images.pexels.com/photos/3894832/pexels-photo-3894832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: "maintenance",
      icon: <Wrench className="w-10 h-10 text-accent-400" />,
      title: "Solar Maintenance",
      description: "Maximize the performance and lifespan of your solar system with our comprehensive maintenance and monitoring services.",
      features: [
        "Regular system performance checkups",
        "Panel cleaning and efficiency optimization",
        "Inverter and electrical system inspection",
        "Monitoring system updates and maintenance",
        "Rapid response to performance alerts",
        "Extended warranty options"
      ],
      image: "https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: "consulting",
      icon: <LineChart className="w-10 h-10 text-accent-400" />,
      title: "Energy Consulting",
      description: "Get expert advice on energy efficiency, solar potential, and renewable energy strategies for your home or business.",
      features: [
        "Comprehensive energy usage analysis",
        "Solar feasibility assessment",
        "ROI and payback period calculations",
        "Available incentives and financing options",
        "Energy efficiency recommendations",
        "Long-term energy planning"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          }}
        >
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="heading-xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-primary-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From residential installations to commercial projects, we provide comprehensive solar solutions tailored to your unique needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-accent-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="btn btn-primary inline-flex items-center"
                  >
                    Get a Quote
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Process</span>
            <h2 className="heading-lg text-gray-900 mt-2 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">
              Our straightforward process makes going solar simple and hassle-free. Here's what to expect when you work with SolKanea.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Free Consultation",
                  description: "We start with a thorough assessment of your energy needs, property, and goals to design the perfect solar solution."
                },
                {
                  number: "02",
                  title: "Custom Design",
                  description: "Our engineers create a tailored system design optimized for your specific location, energy usage, and aesthetic preferences."
                },
                {
                  number: "03",
                  title: "Proposal & Financing",
                  description: "We provide a detailed proposal including system specifications, costs, savings, and financing options to choose from."
                },
                {
                  number: "04",
                  title: "Permits & Installation",
                  description: "We handle all necessary permits and paperwork, followed by professional installation by our certified technicians."
                },
                {
                  number: "05",
                  title: "System Activation",
                  description: "After final inspections, we activate your system and provide comprehensive training on monitoring and maintenance."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    <div className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'
                    }`}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-5xl font-bold text-primary-100">{step.number}</span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </motion.div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-full bg-primary-600 border-4 border-white flex items-center justify-center"
                      >
                        <span className="text-white font-bold">{step.number}</span>
                      </motion.div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Services;