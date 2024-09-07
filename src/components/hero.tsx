'use client';  // これを追加してクライアントコンポーネントとしてマーク

import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Creativity
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Team-FanLabo is here to support your creative journey with innovative solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;