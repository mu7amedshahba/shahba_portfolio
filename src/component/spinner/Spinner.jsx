import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="w-20 h-20 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white font-bold text-xl">MS</span>
        </motion.div>
        
        {/* Loading Text */}
        <motion.p
          className="text-gray-600 dark:text-gray-400 font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio...
        </motion.p>
        
        {/* Progress Bar */}
        <motion.div
          className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-4 mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-linear-to-r from-orange-500 to-amber-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Spinner;