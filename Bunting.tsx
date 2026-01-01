import { motion } from 'motion/react';

export function Bunting() {
  const flags = Array.from({ length: 30 });
  const colors = ['#FF4D6D', '#FF85A1', '#FF4D6D', '#FF85A1'];

  return (
    <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
      {/* String/line */}
      <svg className="absolute top-8 w-full h-2" preserveAspectRatio="none">
        <line 
          x1="0" 
          y1="1" 
          x2="100%" 
          y2="1" 
          stroke="#FF4D6D" 
          strokeWidth="2"
        />
      </svg>

      {/* Flags */}
      <div className="absolute top-8 left-0 right-0 flex">
        {flags.map((_, index) => (
          <motion.div
            key={index}
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.05,
              duration: 0.5,
              ease: 'easeOut'
            }}
          >
            <motion.svg
              width="60"
              height="70"
              viewBox="0 0 60 70"
              animate={{
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 2 + (index % 3) * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.1
              }}
            >
              {/* Triangle flag */}
              <path
                d="M 5 0 L 55 0 L 30 60 Z"
                fill={colors[index % colors.length]}
                stroke="white"
                strokeWidth="2"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(255, 77, 109, 0.3))'
                }}
              />
              {/* Decorative pattern */}
              <circle 
                cx="30" 
                cy="20" 
                r="4" 
                fill="white" 
                opacity="0.6"
              />
              <circle 
                cx="22" 
                cy="30" 
                r="3" 
                fill="white" 
                opacity="0.5"
              />
              <circle 
                cx="38" 
                cy="30" 
                r="3" 
                fill="white" 
                opacity="0.5"
              />
            </motion.svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}