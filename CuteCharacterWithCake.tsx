import { motion } from 'motion/react';

export function CuteCharacterWithCake() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative Background Scene */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Happy B'day Text in Background */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3
            className="text-7xl text-center whitespace-nowrap"
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
              color: '#FF85A1',
              textShadow: '2px 2px 4px rgba(255, 133, 161, 0.3)'
            }}
          >
            Happy B'day
          </h3>
        </motion.div>

        {/* Background Balloons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: [0, -15, 0],
              opacity: 0.4
            }}
            transition={{
              y: {
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              },
              opacity: { duration: 0.5, delay: i * 0.1 }
            }}
          >
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <ellipse
                cx="20"
                cy="20"
                rx="15"
                ry="18"
                fill={i % 2 === 0 ? '#FF85A1' : '#FFB3C6'}
                opacity="0.6"
              />
              <ellipse
                cx="14"
                cy="15"
                rx="5"
                ry="8"
                fill="white"
                opacity="0.3"
              />
              <path
                d="M 20 38 Q 22 40 20 42"
                stroke={i % 2 === 0 ? '#FF85A1' : '#FFB3C6'}
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main Character Scene */}
      <div className="relative z-10">
        <svg width="400" height="320" viewBox="0 0 400 320" fill="none">
          {/* Mini Birthday Cake next to character */}
          <g transform="translate(260, 180)">
            {/* Cake base */}
            <rect
              x="10"
              y="60"
              width="80"
              height="50"
              rx="8"
              fill="url(#miniCakeGradient1)"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(255, 77, 109, 0.2))'
              }}
            />
            {/* Cake top layer */}
            <rect
              x="20"
              y="30"
              width="60"
              height="35"
              rx="6"
              fill="url(#miniCakeGradient2)"
            />
            {/* Frosting */}
            <path
              d="M 25 30 Q 30 38 35 30 Q 40 38 45 30 Q 50 38 55 30 Q 60 38 65 30 Q 70 38 75 30"
              fill="#FFE5EC"
              opacity="0.6"
            />
            {/* Mini candle */}
            <rect x="47" y="18" width="6" height="12" rx="2" fill="#FFD1E3" />
            <motion.ellipse
              cx="50"
              cy="13"
              rx="4"
              ry="6"
              fill="#FFD700"
              animate={{ scale: [1, 1.15, 1], y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))'
              }}
            />
          </g>

          {/* Character Body - Sitting Pose */}
          <g transform="translate(80, 120)">
            {/* Legs (sitting) */}
            <ellipse
              cx="30"
              cy="130"
              rx="18"
              ry="35"
              fill="url(#bodyGradient)"
              transform="rotate(-10 30 130)"
            />
            <ellipse
              cx="90"
              cy="130"
              rx="18"
              ry="35"
              fill="url(#bodyGradient)"
              transform="rotate(10 90 130)"
            />
            
            {/* Feet */}
            <ellipse
              cx="25"
              cy="160"
              rx="20"
              ry="12"
              fill="#FFB3C6"
              style={{
                filter: 'drop-shadow(0 2px 6px rgba(255, 133, 161, 0.2))'
              }}
            />
            <ellipse
              cx="95"
              cy="160"
              rx="20"
              ry="12"
              fill="#FFB3C6"
              style={{
                filter: 'drop-shadow(0 2px 6px rgba(255, 133, 161, 0.2))'
              }}
            />

            {/* Main Body */}
            <motion.ellipse
              cx="60"
              cy="80"
              rx="55"
              ry="65"
              fill="url(#bodyGradient)"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                filter: 'drop-shadow(0 8px 20px rgba(255, 133, 161, 0.3))'
              }}
            />
            
            {/* Belly highlight */}
            <ellipse
              cx="60"
              cy="90"
              rx="30"
              ry="40"
              fill="white"
              opacity="0.2"
            />

            {/* Arms */}
            <motion.ellipse
              cx="15"
              cy="80"
              rx="18"
              ry="40"
              fill="#FFB3C6"
              transform="rotate(-25 15 80)"
              animate={{ rotate: [-25, -30, -25] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.ellipse
              cx="105"
              cy="80"
              rx="18"
              ry="40"
              fill="#FFB3C6"
              transform="rotate(25 105 80)"
              animate={{ rotate: [25, 30, 25] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />

            {/* Head */}
            <motion.circle
              cx="60"
              cy="30"
              r="40"
              fill="url(#headGradient)"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                filter: 'drop-shadow(0 6px 16px rgba(255, 133, 161, 0.3))'
              }}
            />

            {/* Ears */}
            <motion.ellipse
              cx="30"
              cy="10"
              rx="12"
              ry="28"
              fill="#FFB3C6"
              animate={{ rotate: [-8, -5, -8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            />
            <ellipse cx="30" cy="10" rx="7" ry="20" fill="#FF85A1" />
            
            <motion.ellipse
              cx="90"
              cy="10"
              rx="12"
              ry="28"
              fill="#FFB3C6"
              animate={{ rotate: [8, 5, 8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            />
            <ellipse cx="90" cy="10" rx="7" ry="20" fill="#FF85A1" />

            {/* Face - Very Cute Expression */}
            {/* Happy closed eyes */}
            <path
              d="M 45 28 Q 50 33 55 28"
              stroke="#4A4A4A"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 65 28 Q 70 33 75 28"
              stroke="#4A4A4A"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Cute blush */}
            <ellipse cx="35" cy="35" rx="12" ry="9" fill="#FF85A1" opacity="0.5" />
            <ellipse cx="85" cy="35" rx="12" ry="9" fill="#FF85A1" opacity="0.5" />

            {/* Big happy smile */}
            <path
              d="M 40 40 Q 60 52 80 40"
              stroke="#FF4D6D"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Nose */}
            <ellipse cx="60" cy="38" rx="4" ry="3" fill="#FF4D6D" opacity="0.8" />

            {/* Whiskers */}
            <line x1="20" y1="32" x2="35" y2="31" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="37" x2="35" y2="37" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="85" y1="31" x2="100" y2="32" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="85" y1="37" x2="100" y2="37" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />

            {/* Party hat */}
            <g transform="translate(60, -10)">
              <path
                d="M 0 0 L 25 30 L -25 30 Z"
                fill="#FF4D6D"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="0" cy="0" r="6" fill="#FFD700" />
              <circle cx="-10" cy="20" r="2.5" fill="white" opacity="0.7" />
              <circle cx="0" cy="15" r="2.5" fill="white" opacity="0.7" />
              <circle cx="10" cy="20" r="2.5" fill="white" opacity="0.7" />
            </g>
          </g>

          {/* Floating hearts and sparkles around character */}
          <motion.g
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M 50 80 C 50 75 45 72 42 75 C 39 72 34 75 34 80 C 34 85 42 92 42 92 C 42 92 50 85 50 80"
              fill="#FF85A1"
            />
          </motion.g>

          <motion.g
            animate={{ 
              y: [0, -12, 0],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <path
              d="M 340 100 L 342 108 L 350 108 L 344 113 L 346 121 L 340 116 L 334 121 L 336 113 L 330 108 L 338 108 Z"
              fill="#FFD700"
            />
          </motion.g>

          <motion.g
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <circle cx="360" cy="200" r="3" fill="#FF4D6D" />
            <circle cx="368" cy="205" r="2" fill="#FF85A1" />
            <circle cx="352" cy="208" r="2.5" fill="#FFB3C6" />
          </motion.g>

          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFD1E3" />
              <stop offset="50%" stopColor="#FFB3C6" />
              <stop offset="100%" stopColor="#FF85A1" />
            </linearGradient>
            
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE5EC" />
              <stop offset="50%" stopColor="#FFD1E3" />
              <stop offset="100%" stopColor="#FFB3C6" />
            </linearGradient>

            <linearGradient id="miniCakeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFD1E3" />
              <stop offset="100%" stopColor="#FFB3C6" />
            </linearGradient>

            <linearGradient id="miniCakeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB3C6" />
              <stop offset="100%" stopColor="#FF85A1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
