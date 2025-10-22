import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
const logo = process.env.PUBLIC_URL + '/images/cocktail-svgrepo-com.svg';

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Navigation() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const location = useLocation();

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Profil', path: '/profil' },
    ];
    return (
        <>
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                {/* code de la navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div>
                            <Link to="/Home">
                                <img src={logo} alt="LogoPortfolio" className="w-20 inline-block mr-2 " />
                            </Link>
                            <Link to="/" className="text-xl font-bold">
                                Yoopla Events
                            </Link>
                        </div>
                        {/* Navigation desktop */}
                        <div className="hidden md:flex space-x-4">
                            {menuItems.map((item) =>
                                <Link
                                    key={item.path} // Ajout de la clé unique pour chaque élément du tableau
                                    to={item.path} // Utilisation de la propriété path de chaque élément du tableau
                                    className={`px-3 py-2 rounded-md ${location.pathname === item.path
                                        ? 'text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.label}
                                </Link>)}
                        </div>
                        {/* Navigation mobile */}
                        <button className="md:hidden" onClick={() => setIsDrawerOpen(true)}>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>
            {/* Drawer mobile */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsDrawerOpen(false)}>
                        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-lg font-bold">Menu</h2>
                                <button onClick={() => setIsDrawerOpen(false)}>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="p-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.text}
                                        to={item.path}
                                        onClick={() => setIsDrawerOpen(false)}
                                        className={`block py-2 px-4 rounded ${location.pathname === item.path ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}