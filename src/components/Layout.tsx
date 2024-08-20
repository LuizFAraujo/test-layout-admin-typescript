import React, { useState } from 'react';
import Navbar from './partials/Navbar';
import SiderMenu from './partials/SiderMenu';
import SiderConfig from './partials/SiderConfig';
import Footer from './partials/Footer';

const Layout: React.FC = () => {
    const [isSiderMenuVisible, setSiderMenuVisible] = useState(true);
    const [isSiderConfigVisible, setSiderConfigVisible] = useState(false); // Começa oculto

    const toggleSiderMenu = () => {
        setSiderMenuVisible(!isSiderMenuVisible);
    };

    const toggleSiderConfig = () => {
        setSiderConfigVisible(!isSiderConfigVisible);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
            <Navbar
                onToggleSiderMenu={toggleSiderMenu}
                onToggleSiderConfig={toggleSiderConfig}
            />

            <div className="flex flex-1 relative overflow-hidden">
                <SiderMenu isVisible={isSiderMenuVisible} />
                <SiderConfig isVisible={isSiderConfigVisible} />

                <main
                    className={`flex-1 p-8 bg-white flex items-center justify-center transition-all duration-300 ease-in-out
                                ${isSiderMenuVisible ? 'ml-64' : 'ml-0'}
                                ${isSiderConfigVisible ? 'mr-64' : 'mr-0'}`}>
                    <h2 className="text-3xl font-bold text-gray-700">Conteúdo Principal</h2>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
