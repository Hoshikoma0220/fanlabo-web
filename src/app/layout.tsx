import './globals.css';
import { FC, ReactNode } from 'react';

export const metadata = {
  title: 'Team-FanLabo',
  description: 'Official website of Team-FanLabo',
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;