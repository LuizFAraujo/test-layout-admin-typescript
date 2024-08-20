import React from 'react';

interface SidebarProps {
    isVisible: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
    return (
        <aside
            className={`absolute top-0 left-0 h-full transition-transform duration-300 ease-in-out
                ${isVisible ? 'translate-x-0' : '-translate-x-full'} 
                w-64 bg-gray-100 text-gray-800 p-6 shadow-md flex items-center justify-center`}>
            <h2 className="text-xl font-semibold">Sidebar Esquerda</h2>
        </aside>
    );
};

export default Sidebar;
