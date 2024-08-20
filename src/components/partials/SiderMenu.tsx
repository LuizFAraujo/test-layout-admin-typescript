import React from 'react';

interface SiderMenuProps {
    isVisible: boolean;
}

const SiderMenu: React.FC<SiderMenuProps> = ({ isVisible }) => {
    return (
        <aside
            className={`absolute top-0 left-0 h-full w-64 bg-gray-100 text-gray-800 p-6 shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center 
                ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
            <h2 className="text-xl font-semibold">SiderMenu</h2>
        </aside>
    );
};

export default SiderMenu;
