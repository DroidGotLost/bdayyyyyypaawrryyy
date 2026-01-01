import { motion } from 'motion/react';

interface FloatingDecorationProps {
  type: 'circle' | 'spiral' | 'confetti' | 'star' | 'heart';
  color: string;
  size?: number;
  className?: string;
  delay?: number;
}

export function FloatingDecoration({ 
  type, 
  color, 
  size = 40, 
  className = '', 
  delay = 0 
}: FloatingDecorationProps) {
  const renderShape = () => {
    switch (type) {
      case 'circle':
        return (
          <svg width={size} height={size} viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="18"
              fill={color}
              opacity="0.6"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(255, 77, 109, 0.2))'
              }}
            />
            <circle
              cx="20"
              cy="20"
              r="12"
              fill="transparent"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        );
      
      case 'spiral':
        return (
          <svg width={size} height={size} viewBox="0 0 40 40">
            <path
              d="M 20 20 Q 25 15 30 20 Q 25 25 20 20 Q 15 15 10 20 Q 15 25 20 30 Q 25 35 30 30"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
              style={{
                filter: 'drop-shadow(0 2px 6px rgba(255, 77, 109, 0.2))'
              }}
            />
          </svg>
        );
      
      case 'confetti':
        return (
          <svg width={size} height={size} viewBox="0 0 40 40">
            <rect
              x="12"
              y="8"
              width="16"
              height="24"
              rx="2"
              fill={color}
              opacity="0.8"
              transform="rotate(25 20 20)"
              style={{
                filter: 'drop-shadow(0 3px 6px rgba(255, 77, 109, 0.3))'
              }}
            />
          </svg>
        );
      
      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 40 40">
            <path
              d="M 20 5 L 23 15 L 33 15 L 25 22 L 28 32 L 20 26 L 12 32 L 15 22 L 7 15 L 17 15 Z"
              fill={color}
              opacity="0.7"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(255, 77, 109, 0.3))'
              }}
            />
            <path
              d="M 20 10 L 21.5 16 L 27 16 L 23 20 L 24.5 26 L 20 22 L 15.5 26 L 17 20 L 13 16 L 18.5 16 Z"
              fill="white"
              opacity="0.4"
            />
          </svg>
        );
      
      case 'heart':
        return (
          <svg width={size} height={size} viewBox="0 0 40 40">
            <path
              d="M 20 32 C 20 32 8 24 8 16 C 8 12 10 10 13 10 C 16 10 18 12 20 14 C 22 12 24 10 27 10 C 30 10 32 12 32 16 C 32 24 20 32 20 32 Z"
              fill={color}
              opacity="0.7"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(255, 77, 109, 0.3))'
              }}
            />
            <ellipse
              cx="15"
              cy="14"
              rx="3"
              ry="4"
              fill="white"
              opacity="0.3"
            />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ 
        opacity: [0, 0.8, 0.8],
        scale: [0, 1, 1],
        rotate: [0, 360],
        y: [0, -20, 0],
        x: [0, Math.random() * 20 - 10, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        rotate: { 
          duration: 8 + Math.random() * 4, 
          repeat: Infinity, 
          ease: 'linear',
          delay 
        },
        y: { 
          duration: 3 + Math.random() * 2, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay 
        },
        x: { 
          duration: 2 + Math.random(), 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: delay + 0.5 
        }
      }}
    >
      {renderShape()}
    </motion.div>
  );
}
