import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2c5530;
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    height: 40px; /* Adjust size as needed */
    margin-right: 10px;
  }

  span {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.3s;
  }

  &:hover span {
    color: #a8d5ba;
  }
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${({ active }) => (active ? '#a8d5ba' : 'white')};
  text-decoration: none;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s, background 0.3s;
  border-radius: 5px;

  &:hover {
    color: #2c5530;
    background: #a8d5ba;
  }
`;

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/plant-library', label: 'Plants' },
    { to: '/weather', label: 'Weather' },
    { to: '/journal', label: 'Journal' },
    { to: '/design', label: 'Design' },
    { to: '/help', label: 'Help' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src={require('../images/asd1.webp')} alt="Garden Fields Logo" />
          <span>Garden Fields</span>
        </Logo>

        <NavLinks>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} active={location.pathname === link.to}>
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
