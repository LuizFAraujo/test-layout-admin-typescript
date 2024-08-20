import React from 'react';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-sky-700 text-white p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-center h-full">
                    <h1 className="text-2xl font-semibold">Navbar</h1>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="flex flex-1">
                {/* Sidebar Esquerda */}
                <aside className="w-64 bg-gray-100 text-gray-800 p-6 shadow-md flex items-center justify-center">
                    <h2 className="text-xl font-semibold mb-4">Sidebar Esquerda</h2>
                    {/* Adicione aqui o conteúdo da Sidebar Esquerda */}
                </aside>

                {/* Área de Conteúdo */}
                <main className="flex-1 p-8 bg-white flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-gray-700">Conteúdo Principal</h2>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-sky-700 text-white p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-center h-full">
                    <p className="text-sm">&copy; 2024 Footer</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
