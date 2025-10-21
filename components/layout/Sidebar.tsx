import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, ServicesIcon, BillingIcon, SettingsIcon, LogoutIcon } from '../icons';

const navItems = [
  { href: '/', label: 'Dashboard', icon: DashboardIcon },
  { href: '/services', label: 'Services', icon: ServicesIcon },
  { href: '/billing', label: 'Billing', icon: BillingIcon },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
];

interface SidebarProps {
    onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const baseClasses = "flex items-center px-4 py-2.5 text-sm font-medium rounded-lg";
  const inactiveClasses = "text-muted-foreground hover:bg-white/5 hover:text-foreground";
  const activeClasses = "bg-primary text-primary-foreground";

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border">
      <div className="flex items-center h-16 px-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">ZA-BPO</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-border">
        <button
          onClick={onLogout}
          className={`${baseClasses} ${inactiveClasses} w-full`}
        >
          <LogoutIcon className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;