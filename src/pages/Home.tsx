import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import LazyImage from '../components/LazyImage';
import ParallaxHero from '../components/ParallaxHero';
import FloatingCard from '../components/FloatingCard';
import MagneticButton from '../components/MagneticButton';
import MorphingShapes from '../components/MorphingShapes';

interface HomeProps {
  darkMode: boolean;
}

export default function Home({ darkMode }: HomeProps) {
  return (
    <div className="pt-20">
      {/* Replace the old hero with the new parallax hero */}
      <ParallaxHero darkMode={darkMode} />

      <AnimatedSection className={`relative py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
        <MorphingShapes darkMode={darkMode} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'ISO Certified', description: 'Quality management systems certified to international standards', color: 'blue' },
              { icon: Users, title: 'Expert Team', description: 'Highly skilled professionals with decades of experience', color: 'purple' },
              { icon: Globe, title: 'Global Reach', description: 'Serving clients across multiple continents', color: 'green' },
              { icon: Shield, title: 'Reliable Solutions', description: 'Proven technology backed by comprehensive support', color: 'orange' }
            ].map((item, index) => (
              <FloatingCard
                key={index}
                glowColor={item.color}
                floatIntensity={0.8}
                className="h-full"
              >
                <div className="text-center p-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6 shadow-2xl"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="text-white" size={36} />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Delivering specialized solutions across diverse sectors
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Pharmaceutical', image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { title: 'Biotechnology', image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { title: 'Healthcare', image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <LazyImage
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <motion.h3
                    className="text-white text-2xl font-bold p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {industry.title}
                  </motion.h3>
                </div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/industries">
              <MagneticButton variant="primary" size="lg">
                <span>View All Industries</span>
                <ArrowRight size={20} />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us today to discuss your purification system requirements
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <MagneticButton variant="primary" size="lg">
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
