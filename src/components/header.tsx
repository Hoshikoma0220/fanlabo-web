'use client';

import { FC } from 'react';

const Header: FC = () => {

  // セクションにスクロールする関数
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-900 text-white p-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team-FanLabo</h1>
        <nav className="flex space-x-3"> {/* スペースを詰める */}
          
          <button 
            onClick={() => scrollToSection('#home')} 
            className="relative group" 
            style={{ width: '100px', textAlign: 'center' }}
          >
            {/* デフォルト表示 */}
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Home</span>
            {/* ホバー時に表示 */}
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">ホーム</span>
          </button>

          {/* OverviewをAboutに変更し、ホバー時に事業展開 */}
          <button 
            onClick={() => scrollToSection('#about')} 
            className="relative group" 
            style={{ width: '100px', textAlign: 'center' }}
          >
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">About</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">事業展開</span>
          </button>

          {/* ProjectsをNewsに変更し、ホバー時のみニュースと表示 */}
          <button 
            onClick={() => scrollToSection('#news')} 
            className="relative group" 
            style={{ width: '100px', textAlign: 'center' }}
          >
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">News</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">ニュース</span>
          </button>

          {/* Membersをそのまま */}
          <button 
            onClick={() => scrollToSection('#members')} 
            className="relative group" 
            style={{ width: '100px', textAlign: 'center' }}
          >
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Members</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">メンバー</span>
          </button>

          {/* Contactセクション */}
          <button 
            onClick={() => scrollToSection('#contact')} 
            className="relative group" 
            style={{ width: '100px', textAlign: 'center' }}
          >
            <span className="block group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Contact</span>
            <span className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">お問い合わせ</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;