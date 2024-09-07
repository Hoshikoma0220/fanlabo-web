'use client';  // これを追加してクライアントコンポーネントにマーク

import { FC } from 'react';
import { motion } from 'framer-motion';

const Overview: FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Overview</h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          At Team-FanLabo, we are a group of passionate individuals dedicated to creating innovative solutions that drive the future of technology and creativity.
        </motion.p>
      </div>
    </section>
  );
};

export default Overview;