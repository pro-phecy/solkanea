import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock } from 'lucide-react';
import CTA from '../components/home/CTA';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - SolKanea';
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "James Wilson",
      position: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "SolKanea was founded with a vision to make renewable energy accessible to everyone. With over 15 years in the energy sector, he leads our mission for a sustainable future."
    },
    {
      name: "Elena Rodriguez",
      position: "Chief Technical Officer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "Elena brings 12 years of engineering expertise to SolKanea. She oversees all technical operations and ensures our solar solutions meet the highest standards of efficiency and reliability."
    },
    {
      name: "Robert Chen",
      position: "Installation Director",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "With a background in construction management and renewable energy, Robert leads our installation teams, ensuring perfect execution on every project, large or small."
    },
    {
      name: "Sarah Johnson",
      position: "Customer Success Manager",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "Sarah is dedicated to creating exceptional experiences for our customers. She ensures smooth communication from initial consultation through installation and beyond."
    }
  ];

  const values: Value[] = [
    {
      icon: <Shield className="w-12 h-12 text-accent-400" />,
      title: "Quality & Reliability",
      description: "We use only premium components and rigorous installation standards to ensure your solar system performs optimally for decades."
    },
    {
      icon: <Users className="w-12 h-12 text-accent-400" />,
      title: "Customer Focus",
      description: "Your needs and satisfaction drive everything we do. We listen, educate, and provide transparent recommendations for your specific situation."
    },
    {
      icon: <Award className="w-12 h-12 text-accent-400" />,
      title: "Environmental Stewardship",
      description: "We're committed to reducing carbon footprints and promoting sustainable energy solutions for a cleaner planet."
    },
    {
      icon: <Clock className="w-12 h-12 text-accent-400" />,
      title: "Long-term Vision",
      description: "We build lasting relationships with our customers, providing ongoing support and maintenance to maximize your solar investment."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7240027/pexels-photo-7240027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
              About SolKanea
            </motion.h1>
            <motion.p 
              className="text-xl text-primary-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're on a mission to accelerate the world's transition to sustainable energy through high-quality solar solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Story</span>
              <h2 className="heading-lg text-gray-900 mt-2 mb-6">Powering a Sustainable Future Since 2010</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  SolKanea was founded with a simple but powerful vision: to make clean, renewable solar energy accessible to everyone. What began as a small team of passionate engineers and environmentalists has grown into a leading solar provider serving thousands of customers across the country.
                </p>
                <p>
                  Our journey started in 2010 when our founder, James Wilson, installed his first residential solar system. Seeing the immediate impact on both his energy bills and carbon footprint, he knew this technology needed to reach more homes and businesses.
                </p>
                <p>
                  Today, we're proud to have installed over 15,000 solar systems, prevented 100,000 tons of CO₂ emissions, and helped our customers save millions on their energy bills. But we're just getting started. As technology advances and awareness grows, we remain committed to our mission of accelerating the world's transition to sustainable energy.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/9875426/pexels-photo-9875426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="SolKanea installation team" 
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Values</span>
            <h2 className="heading-lg text-gray-900 mt-2 mb-4">The Principles That Guide Us</h2>
            <p className="text-lg text-gray-600">
              At SolKanea, our core values shape everything we do, from how we design our systems to how we interact with our customers and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-card hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-5">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Team</span>
            <h2 className="heading-lg text-gray-900 mt-2 mb-4">Meet the Experts Behind SolKanea</h2>
            <p className="text-lg text-gray-600">
              Our diverse team brings together decades of experience in renewable energy, engineering, and customer service to deliver exceptional solar solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '15,000+', label: 'Installations Completed' },
              { value: '30,000+', label: 'Happy Customers' },
              { value: '100,000+', label: 'Tons of CO₂ Saved' },
              { value: '15+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-accent-400 mb-2">{stat.value}</div>
                <div className="text-xl text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default About;