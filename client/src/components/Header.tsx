import React from 'react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="h-16 bg-black-light text-white border-b border-gray-primary mb-8">
      <div className="flex justify-center items-center h-full">
        <button type="button" className="border border-gray-primary px-2 py-2 rounded">
          Visualize
        </button>
      </div>
    </header>
  );
};
