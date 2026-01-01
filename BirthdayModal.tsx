import { motion } from 'motion/react';
import { CuteCharacterWithCake } from './CuteCharacterWithCake';
import { X } from 'lucide-react';

interface BirthdayModalProps {
  onClose: () => void;
}

export function BirthdayModal({ onClose }: BirthdayModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal Card */}
      <motion.div
        className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full"
        style={{
          boxShadow: '0 25px 50px rgba(255, 77, 109, 0.25)'
        }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ 
          type: 'spring',
          stiffness: 300,
          damping: 25
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Card Content */}
        <div className="grid md:grid-cols-2">
          {/* Left Side - Kawaii Character */}
          <div 
            className="p-12 flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FFE5EC 0%, #FFF0F3 100%)'
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/40" />
            <div className="absolute bottom-12 right-8 w-24 h-24 rounded-full bg-white/30" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-pink-200/20" />

            <CuteCharacterWithCake />

            {/* Floating hearts */}
            <motion.div
              className="absolute top-12 right-12 text-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              💕
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-12 text-xl"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            >
              ✨
            </motion.div>
          </div>

          {/* Right Side - Birthday Message */}
          <div className="p-12 flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 
                className="text-4xl mb-6"
                style={{
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                  color: '#FF4D6D'
                }}
              >
                A Special Wish 🎂
              </h2>

              <div 
                className="space-y-4 text-gray-700"
                style={{
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                  lineHeight: '1.8'
                }}
              >
                <p>
                  Happy Birthday to someone incredibly special! 🎉
                </p>
                
                <p>
                  On this beautiful day, I want you to know how much joy and happiness you bring into the lives of everyone around you. Your smile lights up the room, and your kindness touches hearts in ways you may never fully realize.
                </p>
                
                <p>
                  May this year be filled with wonderful moments, exciting adventures, and dreams coming true. You deserve all the happiness in the world and so much more! ✨
                </p>
                
                <p>
                  Here's to celebrating YOU today and always. May your day be as sweet as cake, as bright as candles, and as fun as unwrapping presents!
                </p>
                
                <p className="text-xl" style={{ color: '#FF4D6D' }}>
                  With love and best wishes,
                  <br />
                  💖 Always thinking of you! 💖
                </p>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 text-5xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                🎁
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div 
          className="h-3"
          style={{
            background: 'linear-gradient(90deg, #FF4D6D 0%, #FF85A1 50%, #FF4D6D 100%)'
          }}
        />
      </motion.div>
    </motion.div>
  );
}