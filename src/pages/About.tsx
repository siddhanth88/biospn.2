import { Award, Target, Eye, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
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
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16" direction="up">
            <h1 className="text-5xl font-bold mb-6">About BIOSPN HiPurity Systems</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Your trusted partner in advanced water purification and treatment solutions
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <Reveal>
              <LazyImage
                src="https://images.pexels.com/photos/3825574/pexels-photo-3825574.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Laboratory"
                className="rounded-xl shadow-2xl"
              />
            </Reveal>
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  BIOSPN HiPurity Systems is a leading manufacturer and supplier of advanced water purification systems
                  designed for critical applications in pharmaceutical, biotechnology, healthcare, and research industries.
                </p>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  With decades of combined expertise, our team delivers cutting-edge solutions that meet the most stringent
                  international standards and regulatory requirements. We specialize in designing, manufacturing, and
                  maintaining high-purity water systems that ensure reliability, efficiency, and compliance.
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  Our commitment to innovation and quality has made us the preferred choice for organizations seeking
                  dependable purification technology backed by comprehensive technical support and service excellence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                To provide innovative, reliable, and sustainable water purification solutions that enable our clients
                to achieve operational excellence while maintaining the highest standards of quality and safety.
              </p>
            </Reveal>

            <Reveal className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                To be the global leader in high-purity water systems, recognized for technological innovation,
                customer satisfaction, and our contribution to advancing healthcare and scientific research worldwide.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-4">Certifications & Standards</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Committed to excellence through certified quality systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Reveal
                key={index}
                className={`p-6 rounded-xl flex items-start space-x-4 transition-all hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
                }`}
              >
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <span className="font-medium">{cert}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose BIOSPN?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Experience', desc: 'Decades of industry expertise' },
              { title: 'Innovation', desc: 'Cutting-edge technology solutions' },
              { title: 'Quality', desc: 'Uncompromising standards' },
              { title: 'Support', desc: '24/7 technical assistance' }
            ].map((item, index) => (
              <Reveal key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {index === 0 ? '25+' : index === 1 ? '100+' : index === 2 ? '99.9%' : '24/7'}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
