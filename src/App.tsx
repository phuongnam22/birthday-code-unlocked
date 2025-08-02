import React, { useState } from 'react';
import CodeUnlock from './components/CodeUnlock';
import BirthdayCarousel from './components/BirthdayCarousel';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="min-h-screen bg-[#f2f2f6] overflow-x-hidden flex flex-col items-center">

      <AnimatePresence mode="wait">
        {showCarousel ? (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            <BirthdayCarousel onBack={() => setShowCarousel(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="unlock"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            <CodeUnlock onUnlock={() => setShowCarousel(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
