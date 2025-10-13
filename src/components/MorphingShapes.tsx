import { motion } from 'framer-motion';

interface MorphingShapesProps {
  darkMode: boolean;
}

export default function MorphingShapes({ darkMode }: MorphingShapesProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large morphing blob 1 */}
      <motion.div
        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
          darkMode 
            ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
            : 'bg-gradient-to-br from-blue-200/30 to-purple-200/30'
        }`}
        animate={{
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 90, 180, 360],
          borderRadius: ['50%', '60% 40% 30% 70%', '40% 60% 70% 30%', '50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large morphing blob 2 */}
      <motion.div
        className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          darkMode 
            ? 'bg-gradient-to-tr from-cyan-900/20 to-blue-900/20' 
            : 'bg-gradient-to-tr from-cyan-200/30 to-blue-200/30'
        }`}
        animate={{
          scale: [0.8, 1, 1.3, 0.8],
          rotate: [360, 270, 90, 0],
          borderRadius: ['50%', '30% 70% 60% 40%', '70% 30% 40% 60%', '50%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Medium morphing shape */}
      <motion.div
        className={`absolute top-1/3 right-1/4 w-64 h-64 blur-2xl ${
          darkMode 
            ? 'bg-gradient-to-bl from-indigo-900/15 to-pink-900/15' 
            : 'bg-gradient-to-bl from-indigo-200/25 to-pink-200/25'
        }`}
        animate={{
          scale: [1, 0.7, 1.1, 1],
          rotate: [0, 120, 240, 360],
          borderRadius: ['50%', '80% 20% 60% 40%', '20% 80% 40% 60%', '50%'],
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small floating shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-32 h-32 blur-xl ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-800/10 to-purple-800/10' 
              : 'bg-gradient-to-r from-blue-300/20 to-purple-300/20'
          }`}
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            scale: [0.5, 1, 0.7, 0.5],
            rotate: [0, 180, 360],
            borderRadius: [
              '50%',
              `${30 + i * 10}% ${70 - i * 10}% ${40 + i * 5}% ${60 - i * 5}%`,
              '50%',
            ],
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, 20 * (i % 3 === 0 ? 1 : -1), 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: darkMode
            ? [
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              ]
            : [
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
              ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}