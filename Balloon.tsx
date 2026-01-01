import { motion } from 'motion/react';

interface BalloonProps {
  color: string;
  className?: string;
  delay?: number;
}

export function Balloon({ color, className = '', delay = 0 }: BalloonProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        y: [0, -20, 0],
        x: [0, 8, -8, 0],
        rotate: [0, 8, -8, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { 
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay 
        },
        x: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.5
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay
        }
      }}
    >
      <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
        {/* Balloon */}
        <ellipse
          cx="30"
          cy="35"
          rx="25"
          ry="30"
          fill={color}
          style={{
            filter: 'drop-shadow(0 8px 16px rgba(255, 77, 109, 0.4))'
          }}
        />
        
        {/* Highlight */}
        <ellipse
          cx="22"
          cy="25"
          rx="8"
          ry="12"
          fill="white"
          opacity="0.4"
        />
        
        {/* Balloon knot */}
        <path
          d="M 30 65 Q 28 68 30 70 Q 32 68 30 65"
          fill={color}
          opacity="0.8"
        />
        
        {/* String */}
        <path
          d="M 30 70 Q 32 75 30 80 Q 28 85 30 90"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
}