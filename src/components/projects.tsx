'use client';  // クライアントコンポーネントとしてマーク

import { FC } from 'react';
import { motion } from 'framer-motion';

const Projects: FC = () => {
  const projects = [
    { title: 'Project A', description: 'A revolutionary project to enhance creativity.' },
    { title: 'Project B', description: 'A project that empowers developers.' },
    { title: 'Project C', description: 'A unique approach to problem-solving.' },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;