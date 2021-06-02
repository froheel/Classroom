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
                <NavLogo to="/" onClick= {toggleHome} style={{ textDecoration: 'none' , color:'white'}}>
                    Classroom
                </NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars></FaBars>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth = {true} duration={500} spy={true} exact = 'true'
                        style={{ textDecoration: 'none' , color:'white'}}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                         smooth = {true} duration={500} spy={true} exact = 'true'
                         style={{ textDecoration: 'none' , color:'white'}}
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                         smooth = {true} duration={500} spy={true} exact = 'true'
                         style={{ textDecoration: 'none' , color:'white'}}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                         smooth = {true} duration={500} spy={true} exact = 'true'
                         style={{ textDecoration: 'none' , color:'white'}}
                        >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin" style={{ textDecoration: 'none' , color:'white'}}>Sign In </NavBtnLink>

                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
