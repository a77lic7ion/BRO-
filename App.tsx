import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import BillingPage from './pages/BillingPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

// A layout component for protected routes that includes the sidebar and header.
// It also handles the authentication check, redirecting to login if not authenticated.
const ProtectedLayout: React.FC<{ isAuthenticated: boolean; onLogout: () => void }> = ({ isAuthenticated, onLogout }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-background text-foreground">
            <Sidebar onLogout={onLogout} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-4 sm:p-6 lg:p-8">
                    {/* Nested routes will be rendered here */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};


const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = useCallback(() => {
        setIsAuthenticated(true);
    }, []);

    const handleLogout = useCallback(() => {
        setIsAuthenticated(false);
    }, []);

    return (
        <HashRouter>
            <Routes>
                {/* Public route for login */}
                <Route path="/login" element={
                    isAuthenticated ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />
                } />

                {/* Protected routes are nested within the ProtectedLayout */}
                <Route element={<ProtectedLayout isAuthenticated={isAuthenticated} onLogout={handleLogout} />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/billing" element={<BillingPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
                
                {/* Fallback route to redirect any unknown paths to the main page */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </HashRouter>
    );
};

export default App;