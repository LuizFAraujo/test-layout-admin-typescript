import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-gray-300 to-blue-500">
            <div className="text-center p-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default Layout;
