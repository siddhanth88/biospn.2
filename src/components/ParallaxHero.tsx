import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Droplets, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ParallaxHeroProps {
  darkMode: boolean;
}

export default function ParallaxHero({ darkMode }: ParallaxHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 800], [0, 400]);
  const textY = useTransform(scrollY, [0, 800], [0, 200]);
  const floatingElementsY = useTransform(scrollY, [0, 800], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Droplets, x: '10%', y: '20%', delay: 0, scale: 1.2 },
    { icon: Zap, x: '85%', y: '15%', delay: 0.5, scale: 1 },
    { icon: Shield, x: '15%', y: '70%', delay: 1, scale: 0.8 },
    { icon: Award, x: '80%', y: '75%', delay: 1.5, scale: 1.1 },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </motion.div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{
            left: element.x,
            top: element.y,
            y: floatingElementsY,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: element.scale,
            x: mousePosition.x * (index % 2 === 0 ? 1 : -1),
            y: mousePosition.y * (index % 2 === 0 ? 1 : -1),
          }}
          transition={{ 
            delay: element.delay,
            duration: 1,
            x: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
          whileHover={{ scale: element.scale * 1.2, opacity: 1 }}
        >
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <element.icon size={32} className="text-white" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex items-center justify-center h-full px-4"
        style={{ y: textY }}
      >
        <div className="text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <motion.span
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 40px rgba(59, 130, 246, 0.8)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                HiPurity
              </motion.span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Revolutionary water purification technology that transforms industries through 
            <span className="text-cyan-300 font-semibold"> innovation</span> and 
            <span className="text-blue-300 font-semibold"> precision</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Link
              to="/products"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
              <span className="relative flex items-center gap-3">
                Explore Products
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </span>
            </Link>

            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}