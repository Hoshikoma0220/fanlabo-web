"use client";

import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className="bg-gray-900 text-white p-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team-FanLabo</h1>
        <nav className="flex space-x-3"> {/* スペースを詰める */}
          <Link href="#home" className="relative group" style={{ width: '100px', textAlign: 'center' }}>
            {/* デフォルト表示 */}
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Home</span>
            {/* ホバー時に表示 */}
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">ホーム</span>
          </Link>
          <Link href="#about" className="relative group" style={{ width: '100px', textAlign: 'center' }}>
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Overview</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">概要</span>
          </Link>
          <Link href="#members" className="relative group" style={{ width: '100px', textAlign: 'center' }}>
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Members</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">メンバー</span>
          </Link>
          <Link href="#projects" className="relative group" style={{ width: '100px', textAlign: 'center' }}>
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Projects</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">プロジェクト</span>
          </Link>
          <Link href="#contact" className="relative group" style={{ width: '100px', textAlign: 'center' }}>
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Contact</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">お問い合わせ</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
