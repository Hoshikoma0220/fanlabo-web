'use client';  // これを追加してクライアントコンポーネントにマーク

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';  // ボタンでリンク移動するために使用

const About: FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* サムネイル画像を左側に表示 */}
        <div className="w-1/2">
          <Image
            src="/path-to-your-thumbnail.jpg"  // サムネイル画像のパスを指定
            alt="Thumbnail"
            width={400}  // サムネイルの幅
            height={300}  // サムネイルの高さ
            className="rounded-lg"  // 画像に角丸効果を追加
          />
        </div>

        {/* テキストをサムネイルの横で左寄せに表示 */}
        <div className="w-1/2 text-left pl-8">  {/* pl-8で画像とテキストの間に余白を追加 */}
          <h2 className="text-4xl font-bold mb-8">About/事業展開</h2>

          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Team-FanLaboはVtuber事業、ゲーム制作などを初め、さまざまな事業を展開しています。
            <br />
            世界中のファンが求めるものを提供していくために日々努力をしております。
            <br />
            詳細は以下を御覧ください。
          </motion.p>

          {/* おしゃれなボタンを追加 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6"
          >
            <Link href="/details-page" className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:from-purple-500 hover:to-pink-500 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
              詳細ページへ
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;