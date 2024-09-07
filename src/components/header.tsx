import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team-FanLabo</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;