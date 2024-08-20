import React from 'react';

interface SiderConfigProps {
    isVisible: boolean;
}

const SiderConfig: React.FC<SiderConfigProps> = ({ isVisible }) => {
    return (
        <aside
            className={`absolute top-0 right-0 h-full w-64 bg-gray-100 text-gray-800 p-6 shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center
                ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <h2 className="text-xl font-semibold">SiderConfig</h2>

        </aside>
    );
};

export default SiderConfig;
