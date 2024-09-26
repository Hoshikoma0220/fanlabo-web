'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
}

const News: FC = () => {
  // 空のニュースリストを設定
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>('ニュースがありません');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-blue-500">News <span className="text-gray-500 text-2xl">ニュース</span></h2>
          <Link href="/news/all" className="flex items-center text-gray-600 hover:text-black">
            <span className="mr-2">View All</span>
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
              <span>&rarr;</span>
            </div>
          </Link>
        </div>

        {/* エラーメッセージがある場合に表示 */}
        {error ? (
          <p className="mt-6 text-red-500">{error}</p>
        ) : (
          <div className="space-y-6 mt-6">
            {newsItems.length > 0 ? (
              newsItems.map((news) => (
                <Link key={news.id} href={`/news/${news.id}`} className="block">
                  <div className="cursor-pointer flex flex-col space-y-2 md:flex-row md:justify-between items-center border-b pb-4 hover:bg-gray-100 transition duration-300">
                    {/* 日付とカテゴリーを横並びに */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{news.date}</span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{news.category}</span>
                    </div>
                    {/* タイトルを中央寄せして縦に並べる */}
                    <div className="text-gray-900 text-md text-center md:text-left">{news.title}</div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="mt-6">ニュースがありません</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default News;