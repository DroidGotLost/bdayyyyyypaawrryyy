import { motion } from 'motion/react';

interface BirthdayCakeProps {
  onClose?: () => void;
}

export function BirthdayCake({ onClose }: BirthdayCakeProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Blur Backdrop */}
      <motion.div 
        className="absolute inset-0 backdrop-blur-md bg-white/30"
        initial={{ backdropFilter: 'blur(0px)' }}
        animate={{ backdropFilter: 'blur(12px)' }}
        exit={{ backdropFilter: 'blur(0px)' }}
      />

      <motion.div
        className="relative pointer-events-auto cursor-pointer"
        initial={{ y: -600, scale: 0.5, opacity: 0, rotate: -15 }}
        animate={{ 
          y: 0, 
          scale: 1, 
          opacity: 1,
          rotate: 0
        }}
        exit={{ 
          y: -600, 
          scale: 0.5, 
          opacity: 0,
          rotate: 15
        }}
        transition={{ 
          type: 'spring',
          stiffness: 80,
          damping: 15,
          duration: 1.2
        }}
        onClick={onClose}
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg width="320" height="380" viewBox="0 0 320 380" fill="none">
            {/* Cake Plate/Base */}
            <ellipse
              cx="160"
              cy="350"
              rx="130"
              ry="25"
              fill="url(#plateGradient)"
              style={{
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))'
              }}
            />

            {/* Bottom Cake Layer */}
            <rect
              x="50"
              y="220"
              width="220"
              height="130"
              rx="15"
              fill="url(#cakeGradient1)"
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(255, 77, 109, 0.3))'
              }}
            />
            {/* Bottom layer highlight */}
            <rect
              x="60"
              y="230"
              width="60"
              height="80"
              rx="8"
              fill="white"
              opacity="0.15"
            />
            {/* Bottom layer frosting drips */}
            <path
              d="M 60 220 Q 70 235 80 220 Q 90 235 100 220 Q 110 235 120 220 Q 130 235 140 220 Q 150 235 160 220 Q 170 235 180 220 Q 190 235 200 220 Q 210 235 220 220 Q 230 235 240 220 Q 250 235 260 220"
              fill="#FFD1E3"
              opacity="0.7"
            />

            {/* Middle Cake Layer */}
            <rect
              x="80"
              y="125"
              width="160"
              height="100"
              rx="12"
              fill="url(#cakeGradient2)"
              style={{
                filter: 'drop-shadow(0 6px 20px rgba(255, 133, 161, 0.3))'
              }}
            />
            {/* Middle layer highlight */}
            <rect
              x="90"
              y="135"
              width="50"
              height="60"
              rx="6"
              fill="white"
              opacity="0.15"
            />
            {/* Middle layer frosting drips */}
            <path
              d="M 85 125 Q 95 138 105 125 Q 115 138 125 125 Q 135 138 145 125 Q 155 138 165 125 Q 175 138 185 125 Q 195 138 205 125 Q 215 138 225 125 Q 235 138 235 125"
              fill="#FFB3C6"
              opacity="0.6"
            />

            {/* Top Cake Layer */}
            <rect
              x="110"
              y="50"
              width="100"
              height="80"
              rx="10"
              fill="url(#cakeGradient3)"
              style={{
                filter: 'drop-shadow(0 4px 16px rgba(255, 77, 109, 0.25))'
              }}
            />
            {/* Top layer highlight */}
            <rect
              x="120"
              y="60"
              width="35"
              height="45"
              rx="5"
              fill="white"
              opacity="0.2"
            />

            {/* Decorative dots/sprinkles on layers */}
            <circle cx="100" cy="280" r="5" fill="#FF4D6D" />
            <circle cx="140" cy="295" r="4" fill="#FFD700" />
            <circle cx="180" cy="270" r="5" fill="#FF4D6D" />
            <circle cx="220" cy="300" r="4" fill="#FFD700" />
            <circle cx="130" cy="175" r="4" fill="#FFD700" />
            <circle cx="170" cy="165" r="5" fill="#FF4D6D" />
            <circle cx="210" cy="185" r="4" fill="#FFD700" />
            <circle cx="140" cy="90" r="4" fill="#FFD700" />
            <circle cx="175" cy="105" r="4" fill="#FF4D6D" />

            {/* Heart decorations */}
            <path
              d="M 90 260 C 90 255 85 252 82 255 C 79 252 74 255 74 260 C 74 265 82 272 82 272 C 82 272 90 265 90 260"
              fill="#FF85A1"
              opacity="0.8"
            />
            <path
              d="M 240 270 C 240 265 235 262 232 265 C 229 262 224 265 224 270 C 224 275 232 282 232 282 C 232 282 240 275 240 270"
              fill="#FF85A1"
              opacity="0.8"
            />

            {/* Candles */}
            {[0, 1, 2, 3].map((i) => {
              const x = 125 + i * 23;
              return (
                <g key={i}>
                  {/* Candle body */}
                  <rect
                    x={x - 5}
                    y="20"
                    width="10"
                    height="30"
                    rx="3"
                    fill="url(#candleGradient)"
                    style={{
                      filter: 'drop-shadow(0 2px 6px rgba(255, 133, 161, 0.3))'
                    }}
                  />
                  {/* Candle stripes */}
                  <rect
                    x={x - 5}
                    y="28"
                    width="10"
                    height="4"
                    fill="white"
                    opacity="0.3"
                  />
                  {/* Candle wick */}
                  <line
                    x1={x}
                    y1="20"
                    x2={x}
                    y2="8"
                    stroke="#4A4A4A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* Flame */}
                  <motion.g
                    animate={{ 
                      scale: [1, 1.2, 1],
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 1.5 + i * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2
                    }}
                  >
                    <ellipse
                      cx={x}
                      cy="4"
                      rx="7"
                      ry="12"
                      fill="url(#flameGradient)"
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))'
                      }}
                    />
                    <ellipse
                      cx={x}
                      cy="6"
                      rx="4"
                      ry="7"
                      fill="#FFEB99"
                    />
                  </motion.g>
                </g>
              );
            })}

            {/* Gradients */}
            <defs>
              <linearGradient id="plateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F0F0F0" />
                <stop offset="100%" stopColor="#D0D0D0" />
              </linearGradient>
              
              <linearGradient id="cakeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFE5EC" />
                <stop offset="50%" stopColor="#FFD1E3" />
                <stop offset="100%" stopColor="#FFB3C6" />
              </linearGradient>
              
              <linearGradient id="cakeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD1E3" />
                <stop offset="50%" stopColor="#FFB3C6" />
                <stop offset="100%" stopColor="#FF85A1" />
              </linearGradient>
              
              <linearGradient id="cakeGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB3C6" />
                <stop offset="50%" stopColor="#FF85A1" />
                <stop offset="100%" stopColor="#FF4D6D" />
              </linearGradient>
              
              <linearGradient id="candleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FFE5EC" />
                <stop offset="100%" stopColor="#FFD1E3" />
              </linearGradient>
              
              <radialGradient id="flameGradient">
                <stop offset="0%" stopColor="#FFFACD" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
              </radialGradient>
            </defs>
          </svg>

          {/* Floating sparkles around cake */}
          <motion.div
            className="absolute top-16 left-4 text-3xl"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            ✨
          </motion.div>

          <motion.div
            className="absolute top-12 right-8 text-2xl"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -180, -360],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}
          >
            ⭐
          </motion.div>

          <motion.div
            className="absolute bottom-32 -left-8 text-2xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3
            }}
          >
            💫
          </motion.div>

          <motion.div
            className="absolute bottom-28 right-4 text-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7
            }}
          >
            🌟
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-12 text-2xl"
            animate={{ 
              x: [0, -10, 0],
              rotate: [0, 20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2
            }}
          >
            💖
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-12 text-2xl"
            animate={{ 
              x: [0, 10, 0],
              rotate: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4
            }}
          >
            💕
          </motion.div>
        </motion.div>

        {/* Click instruction */}
        <motion.p
          className="text-center mt-6 text-white px-6 py-3 rounded-full bg-pink-500/90 backdrop-blur-sm mx-auto w-fit shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive"
          }}
        >
          Click the cake to dismiss 🎂
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
