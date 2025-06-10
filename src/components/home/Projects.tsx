import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/9875384/pexels-photo-9875384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Modern Home Solar System",
      location: "San Diego, CA",
      description: "10kW system with battery backup, powering a 3,200 sq ft home with zero net energy consumption."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Commercial Office Building",
      location: "Austin, TX",
      description: "45kW commercial installation providing 70% of energy needs for a 4-story office building."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Community Solar Farm",
      location: "Boulder, CO",
      description: "250kW community solar project providing clean energy to over 60 local homes and businesses."
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Sustainable Farm Installation",
      location: "Portland, OR",
      description: "35kW ground-mounted system powering an organic farm operation with complete energy independence."
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Completed Projects</span>
          <h2 className="heading-lg text-gray-900 mt-2 mb-4">Our Solar Installations</h2>
          <p className="text-lg text-gray-600">
            Browse through our portfolio of successfully completed residential and commercial solar projects across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group overflow-hidden rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {project.location}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;