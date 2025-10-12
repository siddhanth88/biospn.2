import { Award, Target, Eye, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import LazyImage from '../components/LazyImage';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const certifications = [
    'ISO 9001:2015 - Quality Management',
    'ISO 14001:2015 - Environmental Management',
    'ISO 45001:2018 - Occupational Health & Safety',
    'CE Certification',
    'cGMP Compliance',
    'FDA Guidelines Adherence'
  ];

  return (
    <div className="pt-20">
      <AnimatedSection className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">About BIOSPN HiPurity Systems</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Your trusted partner in advanced water purification and treatment solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <LazyImage
                src="https://images.pexels.com/photos/3825574/pexels-photo-3825574.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Laboratory"
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <motion.p
                className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                BIOSPN HiPurity Systems is a leading manufacturer and supplier of advanced water purification systems
                designed for critical applications in pharmaceutical, biotechnology, healthcare, and research industries.
              </motion.p>
              <motion.p
                className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With decades of combined expertise, our team delivers cutting-edge solutions that meet the most stringent
                international standards and regulatory requirements. We specialize in designing, manufacturing, and
                maintaining high-purity water systems that ensure reliability, efficiency, and compliance.
              </motion.p>
              <motion.p
                className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Our commitment to innovation and quality has made us the preferred choice for organizations seeking
                dependable purification technology backed by comprehensive technical support and service excellence.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg mr-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                To provide innovative, reliable, and sustainable water purification solutions that enable our clients
                to achieve operational excellence while maintaining the highest standards of quality and safety.
              </p>
            </motion.div>

            <motion.div
              className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg mr-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                To be the global leader in high-purity water systems, recognized for technological innovation,
                customer satisfaction, and our contribution to advancing healthcare and scientific research worldwide.
              </p>
            </motion.div>
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
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-4 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="text-white" size={32} />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Certifications & Standards</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Committed to excellence through certified quality systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl flex items-start space-x-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 group-hover:text-green-400 transition-colors" size={24} />
                </motion.div>
                <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose BIOSPN?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Experience', desc: 'Decades of industry expertise' },
              { title: 'Innovation', desc: 'Cutting-edge technology solutions' },
              { title: 'Quality', desc: 'Uncompromising standards' },
              { title: 'Support', desc: '24/7 technical assistance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-5xl font-bold text-blue-600 mb-2 group-hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {index === 0 ? '25+' : index === 1 ? '100+' : index === 2 ? '99.9%' : '24/7'}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
