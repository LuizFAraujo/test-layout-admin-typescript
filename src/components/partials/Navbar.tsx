import React from 'react';

interface NavbarProps {
    onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
    return (
        <nav className="bg-sky-700 text-white p-3">
            <div className="container mx-auto flex items-center">
                <button onClick={onToggleSidebar}
                    className="bg-sky-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
                    Menu
                </button>

                <div className="text-2xl font-semibold ml-4">
                    ArjSYS
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
