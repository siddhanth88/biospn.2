import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function MagneticButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  size = 'md'
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Magnetic effect - stronger pull when closer
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 100;
    const strength = Math.max(0, 1 - distance / maxDistance);
    
    setPosition({
      x: deltaX * strength * 0.3,
      y: deltaY * strength * 0.3,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25';
      case 'secondary':
        return 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl';
      case 'ghost':
        return 'border-2 border-blue-500/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return '';
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`
        relative font-semibold rounded-xl transition-all duration-300 overflow-hidden
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.5,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          background: variant === 'primary' 
            ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8))'
            : 'linear-gradient(45deg, rgba(156, 163, 175, 0.2), rgba(75, 85, 99, 0.2))',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: isHovered
            ? variant === 'primary'
              ? '0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)'
              : '0 0 20px rgba(156, 163, 175, 0.3)'
            : '0 0 0px rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{
          translateX: isHovered ? '200%' : '-100%',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}