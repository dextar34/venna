import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Logo from '/logo.jpg';
import Pic from './layer/Pic';
import Container from './layer/Container';
import ListItem from './layer/ListItem';
import cn from '../lib/cn';
import { FaCartShopping } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const navData = [
    {
        item: "home",
        path: "/",
    },
    {
        item: "about us",
        path: "/about",
    },
    {
        item: "contact",
        path: "/contact",
    },
];

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
    const menuRef = useRef(); // Reference for the navigation menu
    const location = useLocation(); // Get the current path

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state
    };

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Close the menu if clicked outside
            }
        };

        // Attach the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="main pb-1">
            <Container>
                <div className="navMain py-2 px-2 flex justify-between items-center relative  border-b border-black p-10">
                    {/* Logo Section */}
                    <div className="logo">
                        <Pic className="w-16 h-16 rounded-lg" src={Logo} />
                    </div>

                    {/* Navigation Items */}
                    <div className="navItems flex items-center gap-8">
                        <div className="cartIcon text-2xl">
                            <Link to='/cart'>
                                <FaCartShopping />
                            </Link>
                        </div>

                        {/* Navigation Menu */}
                        <ul
                            ref={menuRef} // Attach ref to the nav menu
                            className={cn(
                                'absolute top-full left-0 right-0 transition-all duration-300',
                                menuOpen ? 'block' : 'hidden', // Show/Hide based on menu state
                                'md:flex md:static md:flex-row md:gap-5 md:items-center md:bg-transparent' // Flex row and visible for medium and larger screens
                            )}
                        >
                            <div className="bg-slate-300 w-full flex flex-col gap-5 items-center justify-center md:flex-row md:bg-transparent py-2">
                                {navData.map((data, index) => (
                                    <div className='!block' key={index}>
                                        <ListItem
                                            href={data.path}
                                            item={data.item}
                                            className={cn(
                                                'hover:bg-black rounded-md transition-all duration-100 hover:text-white',
                                                "capitalize text-center font-medium text-base py-1 px-2",
                                                'md:text-lg',
                                                location.pathname === data.path ? 'text-white bg-black  ' : 'text-black' // White text for active page
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        </ul>

                        {/* Bar and Cross Icons */}
                        <div className="icon text-2xl md:hidden" onClick={toggleMenu}>
                            {menuOpen ? <RxCross2 /> : <HiBars3BottomRight />}
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Nav;
