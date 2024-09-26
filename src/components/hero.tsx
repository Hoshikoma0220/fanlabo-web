'use client';  // これを追加してクライアントコンポーネントとしてマーク

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

const Hero: FC = () => {
  return (
    <section id="home" className="relative h-screen bg-black flex items-center justify-center">
      {/* Google Fontsのリンク */}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Merriweather:wght@900&display=swap" rel="stylesheet" />
      </Head>

      {/* 背景画像を追加 */}
      <Image
        src="/images/background.png"  // 画像のパスを指定
        alt="Hero Background"
        fill  // 背景画像を全体に表示
        className="z-0 object-cover opacity-60"  // 背景画像を少し透明にしてテキストを際立たせる
        priority
      />

      {/* キャッチコピー部分 */}
      <div className="absolute z-10 flex justify-center items-center w-full">
        <div className="flex justify-between w-full max-w-[1200px] px-8">
          {/* 日本語キャッチコピー 左側に固定 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="text-white font-bold text-left text-[40px] md:text-[48px] leading-tight font-['Merriweather']"
          >
            <span className="text-pink-400 text-[50px] md:text-[60px]">ファン</span>と共に、
            <br />
            <span className="text-green-400 text-[50px] md:text-[60px]">ミライ</span>を作る。
          </motion.div>

          {/* 英語キャッチコピー 右側に固定 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            className="text-gray-300 font-semibold text-right text-[32px] md:text-[40px] leading-tight font-['Poppins']"
          >
            Creating the <span className="text-green-400 text-[40px] md:text-[48px]">Future</span>,
            <br />
            Together with <span className="text-pink-400 text-[40px] md:text-[48px]">Fans</span>.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
