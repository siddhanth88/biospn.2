import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  floatIntensity?: number;
}

export default function FloatingCard({ 
  children, 
  className = '',
  glowColor = 'blue',
  floatIntensity = 1
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const getGlowColor = () => {
    switch (glowColor) {
      case 'blue':
        return 'rgba(59, 130, 246, 0.3)';
      case 'purple':
        return 'rgba(147, 51, 234, 0.3)';
      case 'green':
        return 'rgba(34, 197, 94, 0.3)';
      case 'orange':
        return 'rgba(251, 146, 60, 0.3)';
      default:
        return 'rgba(59, 130, 246, 0.3)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        y: isHovered ? -10 * floatIntensity : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Floating animation */}
      <motion.div
        animate={{
          y: [0, -5 * floatIntensity, 0],
          rotateX: [0, 1, 0],
          rotateY: [0, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Main card */}
        <motion.div
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            boxShadow: isHovered
              ? `0 25px 50px -12px ${getGlowColor()}, 0 0 0 1px ${getGlowColor()}`
              : '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            animate={{
              translateX: isHovered ? '200%' : '-100%',
            }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10"
            style={{
              transform: 'translateZ(50px)',
            }}
          >
            {children}
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-${glowColor}-400 rounded-full opacity-60`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Background glow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl blur-xl"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1,
          background: `radial-gradient(circle, ${getGlowColor()}, transparent 70%)`,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}