import React, { useState } from 'react';

const Layout: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-sky-700 text-white p-4 ">
                <div className="container mx-auto flex items-center">
                    {/* Menu Button */}
                    <button
                        onClick={toggleSidebar}
                        className="bg-sky-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-sky-500 transition duration-300"
                    >
                        Menu
                    </button>

                    {/* Logo */}
                    <div className="text-2xl font-semibold ml-4">
                        ArjSYS
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="flex flex-1 relative">
                {/* Sidebar Esquerda */}
                <aside
                    className={`absolute top-0 left-0 h-full transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-100 text-gray-800 p-6 shadow-md flex items-center justify-center`}
                >
                    <h2 className="text-xl font-semibold">SiderMenu</h2>
                </aside>

                {/* Área de Conteúdo */}
                <main
                    className={`flex-1 p-8 bg-white flex items-center justify-center transition-all duration-300 ease-in-out ${isSidebarVisible ? 'ml-64' : 'ml-0'}`}
                >
                    <h2 className="text-3xl font-bold text-gray-700">Conteúdo Principal</h2>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-sky-700 text-white p-4">
                <div className="container mx-auto flex items-center justify-center">
                    <p className="text-sm">&copy; 2024 Footer</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
