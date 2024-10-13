import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Logo from "/logo.jpg";
import Pic from "./layer/Pic";
import Container from "./layer/Container";
import ListItem from "./layer/ListItem";
import cn from "../lib/cn";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

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
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  return (
    <nav className="main bg-[#F7EFED]  pb-1 fixed top-0 w-full z-50">
      <Container>
        <div className="navMain py-2 px-2 flex justify-between items-center relative ">
          {/* Logo Section */}
          <div className="logo flex items-center gap-5">
            <Pic className="w-10 h-10 rounded-full" src={Logo} />
            <Link to={"/"}>
              <p className="txt-lg md:text-2xl">Vienna Apparel</p>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="navItems flex items-center gap-8">
            <div className="cartIcon text-2xl relative ">
              <Link to="/cart">
                <FaCartShopping />
                
                {totalItems >0 && <span className="text-base px-1 absolute left-full -translate-x-1/2 top-1/2  bg-white rounded-full">{totalItems}</span>}
              </Link>
            </div>

            {/* Navigation Menu */}
            <ul
              ref={menuRef} // Attach ref to the nav menu
              className={cn(
                "absolute top-full left-0 right-0 transition-all duration-300",
                menuOpen ? "block" : "hidden", // Show/Hide based on menu state
                "md:flex md:static md:flex-row md:gap-5 md:items-center md:bg-transparent" // Flex row and visible for medium and larger screens
              )}
            >
              <div className="bg-slate-300 w-full flex flex-col gap-5 items-center justify-center md:flex-row md:bg-transparent py-2">
                {navData.map((data, index) => (
                  <div className="!block" key={index}>
                    <ListItem
                      href={data.path}
                      item={data.item}
                      className={cn(
                        "hover:bg-black rounded-md transition-all duration-100 hover:text-white",
                        "capitalize text-center font-medium text-base py-1 px-2",
                        "md:text-lg",
                        location.pathname === data.path
                          ? "text-white bg-black  "
                          : "text-black" // White text for active page
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
