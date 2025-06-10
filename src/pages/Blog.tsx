import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog - SolKanea';
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: "solar-101",
      title: "Solar 101: Understanding the Basics of Solar Energy",
      excerpt: "A comprehensive guide to understanding how solar energy works, the different types of solar panels, and how they can benefit your home or business.",
      date: "April 15, 2023",
      author: "James Wilson",
      category: "Education",
      image: "https://images.pexels.com/photos/9875411/pexels-photo-9875411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      readTime: "6 min read"
    },
    {
      id: "financing-options",
      title: "Complete Guide to Solar Financing Options",
      excerpt: "Explore the various financing options available for solar installations, including loans, leases, PPAs, and incentives to help you make an informed decision.",
      date: "March 28, 2023",
      author: "Sarah Johnson",
      category: "Finance",
      image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      readTime: "8 min read"
    },
    {
      id: "battery-storage",
      title: "The Future of Solar Battery Storage Technology",
      excerpt: "Learn about the latest advancements in solar battery storage technology and how it's revolutionizing the way we use and store renewable energy.",
      date: "March 10, 2023",
      author: "Robert Chen",
      category: "Technology",
      image: "https://images.pexels.com/photos/9875364/pexels-photo-9875364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      readTime: "5 min read"
    },
    {
      id: "commercial-benefits",
      title: "Top 10 Benefits of Commercial Solar Installations",
      excerpt: "Discover how businesses are leveraging solar energy to reduce operating costs, achieve sustainability goals, and improve their bottom line.",
      date: "February 22, 2023",
      author: "Elena Rodriguez",
      category: "Business",
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      readTime: "7 min read"
    },
    {
      id: "maintenance-tips",
      title: "Essential Maintenance Tips for Your Solar System",
      excerpt: "Keep your solar system performing at its best with these essential maintenance tips and best practices for long-term efficiency.",
      date: "February 5, 2023",
      author: "James Wilson",
      category: "Maintenance",
      image: "https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      readTime: "4 min read"
    },
    {
      id: "solar-myths",
      title: "Debunking Common Solar Energy Myths",
      excerpt: "Separate fact from fiction as we address and debunk the most common misconceptions about solar energy and solar panel installations.",
      date: "January 18, 2023",
      author: "Sarah Johnson",
      category: "Education",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7108131/pexels-photo-7108131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
              Solar Energy Insights
            </motion.h1>
            <motion.p 
              className="text-xl text-primary-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay informed with the latest news, tips, and insights about solar energy, sustainability, and renewable technologies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-accent-400 text-primary-900 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="btn btn-secondary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p 
              className="text-lg text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Stay updated with the latest solar news, tips, and exclusive offers delivered straight to your inbox.
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                required
              />
              <button 
                type="submit" 
                className="btn bg-accent-400 hover:bg-accent-500 text-primary-900 font-semibold focus:ring-accent-400 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </motion.form>
            <motion.p 
              className="mt-4 text-sm text-primary-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;