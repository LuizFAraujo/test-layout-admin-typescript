import React, { useState } from 'react';
import Navbar from './partials/Navbar';
import Sidebar from './partials/Sidebar';
import Footer from './partials/Footer';

const Layout: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <Navbar onToggleSidebar={toggleSidebar} />

            <div className="flex flex-1 relative">
                <Sidebar isVisible={isSidebarVisible} />

                <main className={`flex-1 p-8 bg-white flex items-center justify-center
                    transition-all duration-300 ease-in-out ${isSidebarVisible ? 'ml-64' : 'ml-0'}`}>
                    <h2 className="text-3xl font-bold text-gray-700">Conteúdo Principal</h2>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
