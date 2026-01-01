import { motion } from 'motion/react';

interface SparkleProps {
  color: string;
  size?: number;
  className?: string;
  delay?: number;
}

export function Sparkle({ color, size = 20, className = '', delay = 0 }: SparkleProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <path
          d="M 10 0 L 11 9 L 20 10 L 11 11 L 10 20 L 9 11 L 0 10 L 9 9 Z"
          fill={color}
          opacity="0.8"
        />
        <circle cx="10" cy="10" r="2" fill="white" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
