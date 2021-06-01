import React from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink

} from './NavbarElements'


const Navbar = ({toggle}) => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick= {toggleHome}>
                    Classroom
                </NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars></FaBars>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In </NavBtnLink>

                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
