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

      {/* 背景画像に大きく表示してから小さくなるエフェクトを追加 */}
      <motion.div
        initial={{ scale: 1.5 }}  // 初期状態は大きく表示
        animate={{ scale: 1 }}  // 徐々に小さくして通常サイズへ
        transition={{ duration: 1.5, ease: "easeInOut" }}  // 1.5秒かけてスムーズに縮小
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/background.png"  // 画像のパスを指定
          alt="Hero Background"
          fill  // 背景画像を全体に表示
          className="object-cover opacity-60"  // 背景画像を少し透明にしてテキストを際立たせる
          priority
        />
      </motion.div>

      {/* キャッチコピー部分 */}
      <div className="absolute z-10 flex justify-center items-center w-full">
        <div className="flex justify-between w-full max-w-[1200px] px-8">
          {/* 日本語キャッチコピー 左側に固定 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1.0 } }
            }}
            className="text-white font-bold text-left text-[36px] md:text-[44px] leading-tight font-['Merriweather'] -ml-16"  // 左にずらす
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-pink-400 text-[50px] md:text-[60px]"
            >
              ファン
            </motion.span>と共に、
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-green-400 text-[50px] md:text-[60px] ml-16"
            >
              ミライ
            </motion.span>を作る。  {/* 右にずらす */}
          </motion.div>

          {/* 英語キャッチコピー 右側に固定しつつズレを強調 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}  // 右から少しずらして表示
            animate={{ opacity: 1, x: 0 }}  // 徐々に正しい位置へ移動
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
            className="text-gray-300 font-semibold text-right text-[28px] md:text-[36px] leading-tight font-['Poppins']"
          >
            {/* Creating the Future, 一行で表示 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Creating the <span className="text-green-400 text-[44px] md:text-[52px]">Future</span>,
            </motion.div>

            {/* Together with Fans. 一行で表示 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Together with <span className="text-pink-400 text-[44px] md:text-[52px]">Fans</span>.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;