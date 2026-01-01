import { motion } from 'motion/react';

export function KawaiiCharacter() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
    >
      <svg width="200" height="220" viewBox="0 0 200 220" fill="none">
        {/* Bunny Body */}
        <motion.ellipse
          cx="100"
          cy="140"
          rx="50"
          ry="60"
          fill="#FFB3C6"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Bunny Head */}
        <motion.circle
          cx="100"
          cy="70"
          r="45"
          fill="#FFB3C6"
          animate={{ 
            y: [0, -2, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Left Ear */}
        <motion.ellipse
          cx="75"
          cy="25"
          rx="12"
          ry="35"
          fill="#FFB3C6"
          animate={{ 
            rotate: [-5, 0, -5],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.1
          }}
        />
        <ellipse
          cx="75"
          cy="25"
          rx="7"
          ry="25"
          fill="#FF85A1"
        />

        {/* Right Ear */}
        <motion.ellipse
          cx="125"
          cy="25"
          rx="12"
          ry="35"
          fill="#FFB3C6"
          animate={{ 
            rotate: [5, 0, 5],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.1
          }}
        />
        <ellipse
          cx="125"
          cy="25"
          rx="7"
          ry="25"
          fill="#FF85A1"
        />

        {/* Face Details */}
        {/* Left Eye */}
        <motion.g
          animate={{ 
            scaleY: [1, 0.1, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <circle cx="85" cy="65" r="5" fill="#4A4A4A" />
        </motion.g>

        {/* Right Eye */}
        <motion.g
          animate={{ 
            scaleY: [1, 0.1, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <circle cx="115" cy="65" r="5" fill="#4A4A4A" />
        </motion.g>

        {/* Nose */}
        <ellipse cx="100" cy="78" rx="4" ry="3" fill="#FF4D6D" />

        {/* Mouth - Happy smile */}
        <path
          d="M 90 85 Q 100 92 110 85"
          stroke="#FF4D6D"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cheeks */}
        <ellipse cx="70" cy="75" rx="10" ry="8" fill="#FF85A1" opacity="0.4" />
        <ellipse cx="130" cy="75" rx="10" ry="8" fill="#FF85A1" opacity="0.4" />

        {/* Whiskers */}
        <line x1="50" y1="73" x2="70" y2="72" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="50" y1="78" x2="70" y2="78" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="130" y1="72" x2="150" y2="73" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="130" y1="78" x2="150" y2="78" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />

        {/* Arms */}
        <ellipse cx="60" cy="140" rx="15" ry="35" fill="#FFB3C6" transform="rotate(-20 60 140)" />
        <ellipse cx="140" cy="140" rx="15" ry="35" fill="#FFB3C6" transform="rotate(20 140 140)" />

        {/* Feet */}
        <ellipse cx="80" cy="195" rx="20" ry="12" fill="#FFB3C6" />
        <ellipse cx="120" cy="195" rx="20" ry="12" fill="#FFB3C6" />

        {/* Belly highlight */}
        <ellipse cx="100" cy="145" rx="25" ry="35" fill="white" opacity="0.2" />

        {/* Party Hat */}
        <g>
          <path
            d="M 100 15 L 130 50 L 70 50 Z"
            fill="#FF4D6D"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="100" cy="15" r="6" fill="#FFD700" />
          <circle cx="85" cy="40" r="3" fill="white" opacity="0.8" />
          <circle cx="100" cy="35" r="3" fill="white" opacity="0.8" />
          <circle cx="115" cy="40" r="3" fill="white" opacity="0.8" />
        </g>
      </svg>

      {/* Floating stars around character */}
      <motion.div
        className="absolute -top-4 -left-4 text-xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-8 -right-8 text-2xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          rotate: { duration: 5, repeat: Infinity, ease: 'linear' },
          scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
        }}
      >
        🌟
      </motion.div>

      <motion.div
        className="absolute bottom-4 -left-6 text-lg"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3
        }}
      >
        💫
      </motion.div>
    </motion.div>
  );
}
