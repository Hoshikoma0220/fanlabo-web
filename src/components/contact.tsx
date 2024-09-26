'use client';

import { FC } from 'react';
import Link from 'next/link';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* 問い合わせの見出し */}
        <h2 className="text-4xl font-bold text-blue-500 mb-4">お問い合わせ</h2>
        
        {/* 問い合わせの説明 */}
        <p className="text-lg mb-6">
          事業やサービスに関するお問い合わせや、お仕事に関することなどお気軽にお問い合わせください。
        </p>
        
        {/* 問い合わせページへのリンクボタン */}
        <Link href="/contact" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
          お問い合わせページへ
        </Link>
      </div>
    </section>
  );
};

export default Contact;