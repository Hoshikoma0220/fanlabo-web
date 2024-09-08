import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className="bg-gray-900 text-white p-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team-FanLabo</h1>
        <nav className="space-x-6">
          {/* Next.js の Link コンポーネントを使用してページ内リンクを設定 */}
          <Link href="#home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            Overview
          </Link>
          <Link href="#members" className="hover:text-gray-300">
            Members
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="/account" className="hover:text-gray-300">
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;