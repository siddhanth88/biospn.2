import { useState } from 'react';
import { products, categories } from '../data/products';
import Reveal from '../components/Reveal';
import LazyImage from '../components/LazyImage';

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
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12" direction="up">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Comprehensive range of high-purity water treatment systems designed for critical applications
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Reveal
                key={product.id}
                className={`rounded-xl overflow-hidden card-hover ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <LazyImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-200 ease-out hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 card-text-lift">{product.name}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`text-sm flex items-start ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-6 w-full py-3 btn-primary btn-shine">
                    Request Quote
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center" direction="up">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our engineering team can design and build tailored purification systems to meet your specific requirements
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 btn-primary btn-shine"
            >
              Contact Our Engineers
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
