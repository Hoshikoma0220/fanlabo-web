import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-gray-900 text-white p-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team-FanLabo</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">Overview</a> {/* OverviewをHomeの次に移動 */}
          <a href="#members" className="hover:text-gray-300">Members</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#account" className="hover:text-gray-300">Account</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;