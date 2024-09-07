'use client'; // これを追加してクライアントコンポーネントとしてマークします

import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center text-white">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Team-FanLabo
        </motion.h1>
        <p className="mt-4 text-xl">
          The next level of innovation and creativity.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;