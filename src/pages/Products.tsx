import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import { AnimatedSection } from '../components/AnimatedSection';
import LazyImage from '../components/LazyImage';
import FloatingCard from '../components/FloatingCard';
import MagneticButton from '../components/MagneticButton';
import MorphingShapes from '../components/MorphingShapes';

interface ProductsProps {
  darkMode: boolean;
}

export default function Products({ darkMode }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-20">
      <AnimatedSection className={`relative py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} overflow-hidden`}>
        <MorphingShapes darkMode={darkMode} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Comprehensive range of high-purity water treatment systems designed for critical applications
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              All Products
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProducts.map((product, index) => (
                <FloatingCard
                  key={product.id}
                  glowColor={index % 4 === 0 ? 'blue' : index % 4 === 1 ? 'purple' : index % 4 === 2 ? 'green' : 'orange'}
                  floatIntensity={0.6}
                  className="h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <LazyImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {product.category}
                      </span>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      {product.name}
                    </motion.h3>
                    <motion.p
                      className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      {product.description}
                    </motion.p>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className={`text-sm flex items-start ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                          >
                            <span className="text-blue-600 mr-2 font-bold">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="mt-6"
                    >
                      <MagneticButton variant="primary" size="md" className="w-full">
                        Request Quote
                      </MagneticButton>
                    </motion.div>
                  </div>
                </FloatingCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Need a Custom Solution?
            </motion.h2>
            <motion.p
              className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our engineering team can design and build tailored purification systems to meet your specific requirements
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="/contact">
                <MagneticButton variant="primary" size="lg">
                  Contact Our Engineers
                </MagneticButton>
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
