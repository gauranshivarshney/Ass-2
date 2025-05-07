import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaListUl, FaEdit, FaBars } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { TbFileHorizontal } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { MdOutlineLiveHelp } from "react-icons/md";
import './Navbar.css';

const Navbar = ({setSideOpen}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(prev => {
      setSideOpen(!prev)
      return !prev;
    })
  };

  return (
    <>
      {!isOpen && (
        <button className="hamburger" onClick={toggleNavbar}>
          <FaBars />
        </button>
      )}
      <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
        <div className="top-bar">
          <div className="logo">
            <NavLink to="/">CHART<span className="highlight">MAZE</span></NavLink>
          </div>
          {isOpen && (
            <button className="close-btn" onClick={toggleNavbar}>
              <FaBars />
            </button>
          )}
        </div>
        <nav className="nav-links">
          <NavItem to="/rulebook" icon={<FaListUl />} label="My Rule Book" />
          <NavItem to="/add-trades" icon={<IoMdAdd />} label="Add Trades" />
          <NavItem to="/manage-trades" icon={<FaEdit />} label="Manage Trades" />
          <NavItem to="/open-positions" icon={<TbFileHorizontal />} label="Open Positions" />
          <NavItem to="/" icon={<TiHome />} label="Dashboard" />
          <NavItem to="/trade-diary" icon={<FaListUl />} label="Trade Diary" />
          <NavItem to="/help" icon={<MdOutlineLiveHelp />} label="Help" />
        </nav>
      </div>
    </>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
  >
    <span className="icon">{icon}</span>
    <span className="label">{label}</span>
  </NavLink>
);

export default Navbar;