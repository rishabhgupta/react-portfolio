import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Button } from "../../theme";
import { FaBars, FaClone, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ConfigContext } from "../../helper/config.context";
import { useContext } from "react";

const Nav = styled.nav`
    background: #101522;
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
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

const NavIcon = styled(FaClone)`
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

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

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

const Navbar = () => {
    const config = useContext(ConfigContext);
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
        showButton();
    }, []);

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon color="#4B59F7" />
                            OneCreate
                        </NavLogo>
                        {config.mode !== "construction" && (
                            <MenuIcon onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}
                            </MenuIcon>
                        )}
                        {config.mode !== "construction" && (
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavLink to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/services">Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/products">Products</NavLink>
                                </NavItem>
                                <NavItemBtn>
                                    {button ? (
                                        <NavBtnLink>
                                            <Button primary>SIGN UP</Button>
                                        </NavBtnLink>
                                    ) : (
                                        <NavBtnLink>
                                            <Button primary fontBig>
                                                SIGN UP
                                            </Button>
                                        </NavBtnLink>
                                    )}
                                </NavItemBtn>
                            </NavMenu>
                        )}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </React.Fragment>
    );
};

export default Navbar;
