import { Beaker, Building2, Heart, Microscope, FlaskConical } from 'lucide-react';
import Reveal from '../components/Reveal';
import LazyImage from '../components/LazyImage';

interface IndustriesProps {
  darkMode: boolean;
}

export default function Industries({ darkMode }: IndustriesProps) {
  const industries = [
    {
      icon: Beaker,
      title: 'Pharmaceutical',
      description: 'High-purity water systems for drug manufacturing, formulation, and quality control processes.',
      applications: [
        'Active Pharmaceutical Ingredient (API) production',
        'Formulation and manufacturing',
        'Cleaning and sterilization',
        'Laboratory testing and analysis',
        'WFI (Water For Injection) generation'
      ],
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: FlaskConical,
      title: 'Biotechnology',
      description: 'Ultra-pure water for cell culture, fermentation, and biopharmaceutical production.',
      applications: [
        'Cell culture media preparation',
        'Fermentation processes',
        'Downstream processing',
        'Protein purification',
        'Bioreactor operations'
      ],
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Building2,
      title: 'Food & Beverage',
      description: 'Purified water systems ensuring product quality, taste, and safety in food processing.',
      applications: [
        'Beverage production',
        'Food processing and cleaning',
        'Product ingredient water',
        'CIP (Clean-in-Place) systems',
        'Steam generation'
      ],
      image: 'https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Medical-grade water systems for hospitals, clinics, and diagnostic facilities.',
      applications: [
        'Dialysis water systems',
        'Surgical instrument cleaning',
        'Laboratory testing',
        'Sterilization processes',
        'Medical device manufacturing'
      ],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Microscope,
      title: 'Research Labs',
      description: 'Type I, II, and III water for analytical, clinical, and research applications.',
      applications: [
        'HPLC and chromatography',
        'Spectroscopy and analytical testing',
        'Cell culture and microbiology',
        'General laboratory use',
        'Quality control testing'
      ],
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-20">
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16" direction="up">
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Delivering specialized purification solutions tailored to the unique requirements of diverse sectors
            </p>
          </Reveal>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <Reveal
                key={index}
                className={`rounded-2xl overflow-hidden shadow-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <LazyImage
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-600 p-4 rounded-xl mr-4">
                        <industry.icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold">{industry.title}</h2>
                    </div>
                    <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {industry.description}
                    </p>
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Key Applications:</h3>
                      <ul className="space-y-3">
                        {industry.applications.map((app, appIndex) => (
                          <li
                            key={appIndex}
                            className={`flex items-start ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <span className="text-blue-600 font-bold mr-3 mt-1">→</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Industry-Specific Solutions</h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Our team understands the unique challenges and regulatory requirements of each industry.
              We provide customized solutions with full compliance documentation and validation support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { title: 'Compliance', desc: 'Meeting FDA, USP, EP, and other regulatory standards' },
                { title: 'Validation', desc: 'Complete IQ/OQ/PQ documentation and support' },
                { title: 'Service', desc: 'Preventive maintenance and 24/7 technical support' }
              ].map((item, index) => (
                <Reveal
                  key={index}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
                </Reveal>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-block mt-10 px-8 py-4 btn-primary btn-shine"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
