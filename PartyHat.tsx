import { motion } from 'motion/react';

export function PartyHat() {
  return (
    <motion.div
      className="absolute -top-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      style={{ zIndex: 30 }}
      initial={{ y: -200, rotate: -45, opacity: 0 }}
      animate={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: 1.2
      }}
    >
      <motion.div
        animate={{ 
          rotate: [-2, 2, -2],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          {/* Hat shadow */}
          <ellipse
            cx="60"
            cy="90"
            rx="45"
            ry="8"
            fill="rgba(0, 0, 0, 0.15)"
          />
          
          {/* Main hat cone */}
          <path
            d="M 60 10 L 100 80 L 20 80 Z"
            fill="url(#hatGradient)"
            stroke="white"
            strokeWidth="3"
            style={{
              filter: 'drop-shadow(0 6px 16px rgba(255, 77, 109, 0.4))'
            }}
          />
          
          {/* Hat stripes/pattern */}
          <path
            d="M 45 60 L 60 30 L 75 60"
            stroke="#FF85A1"
            strokeWidth="4"
            fill="none"
            opacity="0.4"
          />
          
          {/* Polka dots */}
          <circle cx="50" cy="50" r="4" fill="white" opacity="0.7" />
          <circle cx="70" cy="45" r="4" fill="white" opacity="0.7" />
          <circle cx="60" cy="65" r="3" fill="white" opacity="0.6" />
          <circle cx="45" cy="70" r="3" fill="white" opacity="0.6" />
          <circle cx="75" cy="68" r="3" fill="white" opacity="0.6" />
          
          {/* Pom-pom at top */}
          <motion.g
            animate={{ 
              scale: [1, 1.15, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <circle
              cx="60"
              cy="10"
              r="10"
              fill="#FFD700"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(255, 215, 0, 0.4))'
              }}
            />
            <circle cx="60" cy="10" r="6" fill="#FFEB99" opacity="0.8" />
          </motion.g>
          
          {/* Hat brim/elastic */}
          <ellipse
            cx="60"
            cy="80"
            rx="40"
            ry="6"
            fill="#FF4D6D"
            stroke="white"
            strokeWidth="2"
          />

          <defs>
            <linearGradient id="hatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF4D6D" />
              <stop offset="100%" stopColor="#FF85A1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}