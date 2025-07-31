import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navigationItems = [
    { 
      title: 'Home', 
      href: '#home' 
    },
    {
      title: 'About Us',
      href: '#about',
      dropdown: [
        { title: 'Our Story', href: '#story' },
        { title: 'Our Team', href: '#team' },
        { title: 'Mission & Vision', href: '#mission' }
      ]
    },
    {
      title: 'Services',
      href: '#services',
      dropdown: [
        { title: 'Corporate Law', href: '#corporate' },
        { title: 'Civil Litigation', href: '#litigation' },
        { title: 'Real Estate Law', href: '#realestate' },
        { title: 'Family Law', href: '#family' },
        { title: 'Criminal Defense', href: '#criminal' }
      ]
    },
    {
      title: 'Practice Areas',
      href: '#practice',
      dropdown: [
        { title: 'Business Law', href: '#business' },
        { title: 'Employment Law', href: '#employment' },
        { title: 'Intellectual Property', href: '#ip' },
        { title: 'Tax Law', href: '#tax' }
      ]
    },
    { 
      title: 'Contact', 
      href: '#contact' 
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span className="contact-item">
                <FaPhone className="icon" />
                +91 98765 43210
              </span>
              <span className="contact-item">
                <FaEnvelope className="icon" />
                info@saklegalassociates.com
              </span>
            </div>
            <div className="top-bar-right">
              <span>Experience. Excellence. Results.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <h1>SAK Legal & Associates</h1>
              <span className="tagline">Legal Excellence Since 1995</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-list">
                {navigationItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  >
                    <a href={item.href} className="nav-link">
                      {item.title}
                      {item.dropdown && <FaChevronDown className="dropdown-icon" />}
                    </a>
                    
                    {item.dropdown && (
                      <div className={`dropdown-menu ${activeDropdown === item.title ? 'active' : ''}`}>
                        <ul>
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a href={subItem.href} className="dropdown-link">
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="header-cta">
              <a href="#consultation" className="btn btn-primary">
                Free Consultation
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            {navigationItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <div className="mobile-nav-link-wrapper">
                  <a href={item.href} className="mobile-nav-link">
                    {item.title}
                  </a>
                  {item.dropdown && (
                    <button 
                      className="mobile-dropdown-toggle"
                      onClick={() => handleDropdownToggle(item.title)}
                    >
                      <FaChevronDown className={`dropdown-icon ${activeDropdown === item.title ? 'rotated' : ''}`} />
                    </button>
                  )}
                </div>
                
                {item.dropdown && (
                  <div className={`mobile-dropdown ${activeDropdown === item.title ? 'active' : ''}`}>
                    <ul>
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.href} className="mobile-dropdown-link">
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li className="mobile-nav-item">
              <a href="#consultation" className="btn btn-primary mobile-cta">
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;