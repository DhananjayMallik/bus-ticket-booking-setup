import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaUser } from 'react-icons/fa6';
import Theme from '../theme/Theme';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Default: false

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/bus", label: "Bus" },
        { href: "/services", label: "Services" },
        { href: "/AddBus", label: "AddBus" },
    ];

    // Simulate login/logout (replace with actual auth logic)
    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    // Scroll effect (unchanged)
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    return (
        <header className={`w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
            {/* Logo */}
            <Link to={"/"} className='mr-16'>
                <img src={Logo} alt="logo" className="w-28 h-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-between items-center">
                <ul className="list-none flex items-center gap-x-8 text-base text-neutral-600 dark:text-neutral-400 font-medium">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.href}
                                className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-x-6">
                    {!isLoggedIn ? (
                        <div className="flex items-center gap-x-3">
                            <Link 
                                to="/login" 
                                className="px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-neutral-800 rounded-md transition-colors duration-300 flex items-center gap-x-1"
                                onClick={handleLogin} // Simulate login (remove in real app)
                            >
                                <FaUser className="text-xs" />
                                Sign In
                            </Link>
                            <Link 
                                to="/register" 
                                className="px-4 py-2 text-sm font-medium text-neutral-50 bg-violet-600 hover:bg-violet-700 rounded-md transition-colors duration-300"
                            >
                                Register
                            </Link>
                        </div>
                    ) : (
                        <button 
                            onClick={handleLogout} // Simulate logout (replace with actual logout)
                            className="px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-neutral-800 rounded-md transition-colors duration-300 flex items-center gap-x-1"
                        >
                            <FaSignOutAlt className="text-xs" />
                            Logout
                        </button>
                    )}
                    <Theme />
                </div>
            </nav>

            {/* Mobile Menu Button (unchanged) */}
            <button onClick={handleClick} className="lg:hidden text-neutral-600 dark:text-neutral-300 transition-all duration-300" aria-label="Toggle menu">
                {open ? <LiaTimesSolid className='text-2xl' /> : <FaBars className='text-xl' />}
            </button>

            {/* Mobile Navigation */}
            {open && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 mt-[8ch]" onClick={handleClose}></div>
            )}
            <nav className={`lg:hidden fixed top-[8ch] left-0 w-full bg-neutral-100 dark:bg-neutral-900 shadow-lg z-50 transition-all duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="list-none flex flex-col p-4 text-base text-neutral-600 dark:text-neutral-400 font-medium">
                    {navLinks.map((link, index) => (
                        <li key={index} className="border-b border-neutral-200 dark:border-neutral-700 last:border-b-0">
                            <Link
                                to={link.href}
                                onClick={handleClose}
                                className="block py-4 px-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex flex-col gap-3">
                        {!isLoggedIn ? (
                            <>
                                <Link 
                                    to="/login" 
                                    onClick={() => { handleClose(); handleLogin(); }} // Simulate login
                                    className="w-full px-4 py-2 text-sm font-medium text-center text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-neutral-800 rounded-md transition-colors duration-300 flex items-center justify-center gap-x-1"
                                >
                                    <FaUser className="text-xs" />
                                    Sign In
                                </Link>
                                <Link 
                                    to="/register" 
                                    onClick={handleClose}
                                    className="w-full px-4 py-2 text-sm font-medium text-center text-neutral-50 bg-violet-600 hover:bg-violet-700 rounded-md transition-colors duration-300"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <button 
                                onClick={() => { handleClose(); handleLogout(); }} // Simulate logout
                                className="w-full px-4 py-2 text-sm font-medium text-center text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-neutral-800 rounded-md transition-colors duration-300 flex items-center justify-center gap-x-1"
                            >
                                <FaSignOutAlt className="text-xs" />
                                Logout
                            </button>
                        )}
                        <div className="flex justify-end">
                            <Theme />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;