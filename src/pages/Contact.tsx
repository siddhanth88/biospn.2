import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Get in touch with our team to discuss your purification system requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className={`p-8 rounded-xl text-center transition-all hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                info@biospnhipurity.com
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                sales@biospnhipurity.com
              </p>
            </div>

            <div className={`p-8 rounded-xl text-center transition-all hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                +91 XXX XXX XXXX
              </p>
              <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Mon-Fri: 9:00 AM - 6:00 PM IST
              </p>
            </div>

            <div className={`p-8 rounded-xl text-center transition-all hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                BIOSPN HiPurity Systems
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-96`}>
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2609283253696!2d73.85674631489408!3d18.52043098741841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06a9f0c3d3f%3A0xafd6bb1e0b2e6c9!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
