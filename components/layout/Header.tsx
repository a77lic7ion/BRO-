import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-md border-b border-border z-10">
      <div className="flex items-center">
        <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-1 rounded tracking-wide uppercase">
          Pro Workspace
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-foreground leading-none">Thabo Moloi</p>
          <p className="text-[11px] text-muted-foreground mt-1">Acme Inc. • Johannesburg</p>
        </div>
        <div className="relative">
          <img
            className="h-9 w-9 rounded-full ring-2 ring-border"
            src="https://i.pravatar.cc/100?u=thabo-moloi"
            alt="User profile"
          />
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-card" title="Online"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;