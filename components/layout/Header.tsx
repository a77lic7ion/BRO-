import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 h-16 flex items-center justify-end px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-sm border-b border-border">
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">Thabo Moloi</p>
          <p className="text-xs text-muted-foreground">Acme Inc.</p>
        </div>
        <img
          className="h-10 w-10 rounded-full"
          src="https://i.pravatar.cc/40?u=user-profile"
          alt="User avatar"
        />
      </div>
    </header>
  );
};

export default Header;