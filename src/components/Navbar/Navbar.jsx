import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Container, typeScale } from "../../theme";
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import { FaBars, FaClone, FaCode, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ConfigContext } from "../../helper/config.context";
import { useContext } from "react";

const Nav = styled.nav`
    transition: all 0.2s ease-out;
    background: ${({theme}) => theme.infoSectionLight};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

const NavLogo = styled(Link)`
    transition: all 0.2s ease-out;
    color: ${({theme}) => theme.textColor};
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: ${typeScale.header2};
    display: flex;
    align-items: center;
`;

const NavIcon = styled(FaCode)`
    margin-right: 0.5em;
    font-size: ${typeScale.header2};
`;

const DarkThemeIcon = styled(FaMoon)`
    margin-right: 0.5em;
`;

const LightThemeIcon = styled(FaSun)`
    margin-right: 0.5em;
`;

const MenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101;
    }
`;

const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s linear;

    &:hover {
        border-bottom: 2px solid #1E9E80;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

const NavLink = styled(Link)`
    transition: all 0.2s ease-out;
    color: ${({theme}) => theme.textColor};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: ${typeScale.header5};

    &:hover {
        color: ${({theme}) => theme.primaryColor};
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;

const Navbar = ({ setTheme }) => {
    const config = useContext(ConfigContext);
    const theme = useContext(ThemeContext);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        console.log('nabar', theme)
        showButton();
    }, []);

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav theme={theme}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon color="#1E9E80" />
                            Rishabh Gupta
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MenuIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">Work</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">Blog</NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink>
                                        <PrimaryButton>Resume</PrimaryButton>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink>
                                        <PrimaryButton>
                                            Resume
                                        </PrimaryButton>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                            <NavBtnLink>
                                
                                    {theme.mode === "dark" ? (
                                        <LightThemeIcon color={theme.textColor} onClick={() => setTheme('light')}/>
                                    ) : (
                                        <DarkThemeIcon color={theme.textColor}  onClick={() => setTheme('dark')} />
                                    )}
                                
                            </NavBtnLink>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </React.Fragment>
    );
};

export default Navbar;
