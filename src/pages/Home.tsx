import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Shield } from 'lucide-react';

interface HomeProps {
  darkMode: boolean;
}

export default function Home({ darkMode }: HomeProps) {
  return (
    <div className="pt-20">
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced HiPurity Systems
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Leading the way in water purification technology for pharmaceutical, biotech, and research industries
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors space-x-2 text-lg"
          >
            <span>Explore Our Products</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'ISO Certified', description: 'Quality management systems certified to international standards' },
              { icon: Users, title: 'Expert Team', description: 'Highly skilled professionals with decades of experience' },
              { icon: Globe, title: 'Global Reach', description: 'Serving clients across multiple continents' },
              { icon: Shield, title: 'Reliable Solutions', description: 'Proven technology backed by comprehensive support' }
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all hover:scale-105 ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Delivering specialized solutions across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Pharmaceutical', image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { title: 'Biotechnology', image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { title: 'Healthcare', image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800' }
            ].map((industry, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-2xl font-bold p-6">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/industries"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors space-x-2"
            >
              <span>View All Industries</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Contact us today to discuss your purification system requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
