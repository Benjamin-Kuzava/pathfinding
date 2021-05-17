import React from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
