import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItems,
    MobileIcons,
    NavLinks
} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Capacity Planning Tool</NavLogo>
                {/* <MobileIcons onClick={toggle}>
                    <FaBars/>
                </MobileIcons> */}
                <NavMenu>
                    <NavItems>
                        <NavLinks to="home">Double click to assign task</NavLinks>
                    </NavItems>
                    {/* <NavItems>
                        <NavLinks to="calculator">Calculator</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="scheduler">Scheduler</NavLinks>
                    </NavItems> */}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
};

export default Navbar;