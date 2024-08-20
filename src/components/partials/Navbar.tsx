import React from 'react';

interface NavbarProps {
    onToggleSiderMenu: () => void;
    onToggleSiderConfig: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSiderMenu, onToggleSiderConfig }) => {
    return (
        <nav className="bg-sky-700 text-white p-4">
            <div className="container mx-auto flex items-center">
                <button onClick={onToggleSiderMenu}
                    className="bg-sky-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
                    Menu
                </button>

                <div className="text-2xl font-semibold ml-4">
                    ArjSYS
                </div>

                <button onClick={onToggleSiderConfig}
                    className="ml-auto bg-sky-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
                    Config
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
