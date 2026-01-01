import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import profileImage from 'figma:asset/dea7f9e645c7f7bdfffc3befd74935e5b5e4e714.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { BirthdayModal } from './components/BirthdayModal';
import { BirthdayCake } from './components/BirthdayCake';
import { Bunting } from './components/Bunting';
import { Balloon } from './components/Balloon';
import { Sparkle } from './components/Sparkle';
import { PartyHat } from './components/PartyHat';
import { FloatingDecoration } from './components/FloatingDecoration';

export default function App() {
  const [lightsOn, setLightsOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCake, setShowCake] = useState(false);

  // If lights are off, show intro screen
  if (!lightsOn) {
    return (
      <motion.div 
        className="min-h-screen bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.button
          onClick={() => setLightsOn(true)}
          className="px-12 py-5 rounded-full text-white text-xl relative group"
          style={{
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
            fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
            fontWeight: '300',
            letterSpacing: '0.05em'
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
            borderColor: 'rgba(255, 255, 255, 0.5)'
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            className="relative z-10"
            animate={{ 
              textShadow: [
                '0 0 10px rgba(255, 255, 255, 0.3)',
                '0 0 20px rgba(255, 255, 255, 0.5)',
                '0 0 10px rgba(255, 255, 255, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Turn lights on
          </motion.span>
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-[#FFF0F3]"
      initial={{ opacity: 0, filter: 'brightness(0)' }}
      animate={{ opacity: 1, filter: 'brightness(1)' }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFB3C6 1px, transparent 1px),
            linear-gradient(to bottom, #FFB3C6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Triangle Bunting */}
        <Bunting />

        {/* Floating Decorations */}
        <FloatingDecoration 
          type="circle" 
          color="#FF85A1" 
          size={60}
          className="absolute top-40 left-12 hidden md:block"
          delay={0.5}
        />
        <FloatingDecoration 
          type="spiral" 
          color="#FF4D6D" 
          size={70}
          className="absolute top-60 right-24 hidden md:block"
          delay={0.8}
        />
        <FloatingDecoration 
          type="confetti" 
          color="#FFB3C6" 
          size={50}
          className="absolute top-1/3 left-32 hidden lg:block"
          delay={1}
        />
        <FloatingDecoration 
          type="star" 
          color="#FFD700" 
          size={55}
          className="absolute top-1/4 right-40 hidden lg:block"
          delay={0.3}
        />
        <FloatingDecoration 
          type="heart" 
          color="#FF4D6D" 
          size={50}
          className="absolute bottom-1/3 left-20 hidden lg:block"
          delay={1.2}
        />
        <FloatingDecoration 
          type="circle" 
          color="#FF4D6D" 
          size={45}
          className="absolute bottom-1/4 right-32 hidden md:block"
          delay={0.6}
        />
        <FloatingDecoration 
          type="confetti" 
          color="#FF85A1" 
          size={40}
          className="absolute top-1/2 left-1/4 hidden lg:block"
          delay={1.5}
        />
        <FloatingDecoration 
          type="spiral" 
          color="#FFB3C6" 
          size={55}
          className="absolute bottom-40 right-12 hidden md:block"
          delay={0.9}
        />

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-24 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Desktop / Top Section - Mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-20 text-center lg:text-left order-1"
            >
              {/* Floating Decorative Elements - Hidden on mobile or repositioned */}
              <motion.div
                className="absolute -top-8 -left-4 hidden lg:block"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="text-4xl md:text-6xl">🎂</div>
              </motion.div>

              <motion.div
                className="absolute -top-12 right-12 hidden lg:block"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <div className="text-4xl md:text-5xl">🎉</div>
              </motion.div>

              {/* Sparkles - Adjusted for mobile */}
              <Sparkle 
                className="absolute -top-6 left-1/4 hidden sm:block" 
                color="#FF4D6D" 
                size={24}
                delay={0}
              />
              <Sparkle 
                className="absolute top-12 right-8 hidden sm:block" 
                color="#FF85A1" 
                size={20}
                delay={0.3}
              />
              <Sparkle 
                className="absolute bottom-8 left-12 hidden sm:block" 
                color="#FF4D6D" 
                size={18}
                delay={0.6}
              />

              {/* Main Headline - Dropping from top */}
              <motion.div 
                className="relative"
                initial={{ y: -300, opacity: 0, rotate: -10 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3
                }}
              >
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 relative inline-block"
                  style={{
                    fontFamily: "'Silkscreen', 'Press Start 2P', monospace",
                    color: '#FF4D6D',
                    textShadow: `
                      4px 4px 0px rgba(0, 0, 0, 0.15)
                    `,
                    WebkitTextStroke: '2px #000000',
                    paintOrder: 'stroke fill',
                    letterSpacing: '0.05em',
                    filter: 'drop-shadow(0 6px 12px rgba(255, 77, 109, 0.3))'
                  }}
                >
                  Happy
                  <br />
                  Birthday
                </h1>

                {/* Floating hearts - Hidden on mobile */}
                <motion.div
                  className="absolute -right-8 top-1/4 text-3xl hidden lg:block"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  💖
                </motion.div>
              </motion.div>

              {/* Date */}
              <p 
                className="text-xl sm:text-2xl mb-6 sm:mb-8"
                style={{
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                  color: '#FF4D6D'
                }}
              >
                3 January 2026
              </p>

              {/* Profile Image - Visible on mobile only (below date) */}
              <div className="lg:hidden mb-8 order-2">
                <div className="relative flex justify-center items-center">
                  {/* Simplified balloons for mobile - fewer and repositioned */}
                  <motion.div
                    initial={{ y: 400, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 50,
                      damping: 15,
                      delay: 0.5
                    }}
                  >
                    <Balloon 
                      color="#FF4D6D" 
                      className="absolute -top-8 left-4"
                      delay={0}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 400, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 50,
                      damping: 15,
                      delay: 0.6
                    }}
                  >
                    <Balloon 
                      color="#FF85A1" 
                      className="absolute -top-12 right-4"
                      delay={0.2}
                    />
                  </motion.div>

                  {/* Profile Image Container - Rising from bottom */}
                  <motion.div
                    className="relative"
                    initial={{ y: 400, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 80,
                      damping: 12,
                      delay: 0.7
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Party Hat - Dropping from top */}
                    <PartyHat />

                    <div 
                      className="rounded-full overflow-hidden border-4 sm:border-6 border-white relative mx-auto"
                      style={{
                        width: 'min(280px, 70vw)',
                        height: 'min(280px, 70vw)',
                        maxWidth: '280px',
                        maxHeight: '280px',
                        boxShadow: '0 20px 60px rgba(255, 77, 109, 0.3)'
                      }}
                    >
                      <ImageWithFallback
                        src={profileImage}
                        alt="Birthday Person"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Mobile sparkles */}
                  <Sparkle 
                    className="absolute top-0 left-0" 
                    color="#FFB3C6" 
                    size={14}
                    delay={0.2}
                  />
                  <Sparkle 
                    className="absolute bottom-8 right-0" 
                    color="#FF4D6D" 
                    size={16}
                    delay={0.5}
                  />
                </div>
              </div>

              {/* CTA Buttons - Stacked on mobile, side by side on desktop */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start order-3">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-white text-base sm:text-lg relative overflow-hidden group touch-manipulation"
                  style={{
                    background: 'linear-gradient(135deg, #FF4D6D 0%, #FF85A1 100%)',
                    boxShadow: '0 8px 24px rgba(255, 77, 109, 0.4)',
                    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                    minHeight: '56px'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 12px 32px rgba(255, 77, 109, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">📧 Read the Letter</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  onClick={() => setShowCake(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-white text-base sm:text-lg relative overflow-hidden group touch-manipulation"
                  style={{
                    background: 'linear-gradient(135deg, #FF4D6D 0%, #FF85A1 100%)',
                    boxShadow: '0 8px 24px rgba(255, 77, 109, 0.4)',
                    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                    minHeight: '56px'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 12px 32px rgba(255, 77, 109, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">🎂 Bring the Cake</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Desktop only (hidden on mobile) */}
            <div className="hidden lg:flex relative justify-center items-center min-h-[400px] order-2">
              {/* Floating Balloons - Rising from bottom */}
              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 0.5
                }}
              >
                <Balloon 
                  color="#FF4D6D" 
                  className="absolute -top-12 left-8"
                  delay={0}
                />
              </motion.div>

              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 0.6
                }}
              >
                <Balloon 
                  color="#FF85A1" 
                  className="absolute -top-20 left-32"
                  delay={0.2}
                />
              </motion.div>

              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 0.7
                }}
              >
                <Balloon 
                  color="#FF4D6D" 
                  className="absolute -top-16 right-24"
                  delay={0.4}
                />
              </motion.div>

              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 0.8
                }}
              >
                <Balloon 
                  color="#FF85A1" 
                  className="absolute -top-8 right-8"
                  delay={0.6}
                />
              </motion.div>

              {/* Additional floating balloons */}
              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 0.9
                }}
              >
                <Balloon 
                  color="#FF4D6D" 
                  className="absolute bottom-12 -left-4"
                  delay={0.3}
                />
              </motion.div>

              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 1.0
                }}
              >
                <Balloon 
                  color="#FF85A1" 
                  className="absolute bottom-8 -right-8"
                  delay={0.5}
                />
              </motion.div>

              {/* More balloons for fuller look */}
              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 1.1
                }}
              >
                <Balloon 
                  color="#FFB3C6" 
                  className="absolute top-4 -left-8"
                  delay={0.7}
                />
              </motion.div>

              <motion.div
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 1.2
                }}
              >
                <Balloon 
                  color="#FF4D6D" 
                  className="absolute bottom-0 left-16"
                  delay={0.8}
                />
              </motion.div>

              {/* Profile Image Container - Rising from bottom */}
              <motion.div
                className="relative z-10"
                initial={{ y: 500, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 80,
                  damping: 12,
                  delay: 0.7
                }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Party Hat - Dropping from top */}
                <PartyHat />

                <div 
                  className="rounded-full overflow-hidden border-4 sm:border-8 border-white relative mx-auto"
                  style={{
                    width: 'min(320px, 80vw)',
                    height: 'min(320px, 80vw)',
                    maxWidth: '320px',
                    maxHeight: '320px',
                    boxShadow: '0 20px 60px rgba(255, 77, 109, 0.3)'
                  }}
                >
                  <ImageWithFallback
                    src={profileImage}
                    alt="Birthday Person"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* More sparkles */}
              <Sparkle 
                className="absolute top-4 left-4" 
                color="#FFB3C6" 
                size={16}
                delay={0.2}
              />
              <Sparkle 
                className="absolute bottom-16 right-4" 
                color="#FF4D6D" 
                size={20}
                delay={0.5}
              />
              <Sparkle 
                className="absolute top-1/2 left-0" 
                color="#FFD700" 
                size={22}
                delay={0.8}
              />
            </div>
          </div>
        </div>

        {/* More Decorative floating elements */}
        <motion.div
          className="absolute bottom-12 left-12 text-4xl hidden md:block"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
          }}
        >
          ⭐
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-12 text-3xl hidden md:block"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        >
          🎈
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-1/4 text-3xl hidden lg:block"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 20, -20, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        >
          🎊
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/4 text-4xl hidden lg:block"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8
          }}
        >
          🎁
        </motion.div>

        {/* Signature Text */}
        <motion.div
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p
            className="text-sm sm:text-base"
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
              color: '#D4A5B0',
              letterSpacing: '0.03em'
            }}
          >
            from nishant, with love ♡
          </p>
        </motion.div>
      </div>

      {/* Birthday Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <BirthdayModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>

      {/* Birthday Cake */}
      <AnimatePresence>
        {showCake && (
          <BirthdayCake onClose={() => setShowCake(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}