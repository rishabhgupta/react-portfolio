import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const FooterLinksItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 150px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

const FooterLinkTitle = styled.h3`
    margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

const Links = () => {
    return (
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItem>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/signup">How it Works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Terms of Service</FooterLink>
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/signup">How it Works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Terms of Service</FooterLink>
                </FooterLinksItem>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItem>
                    <FooterLinkTitle>Totorials</FooterLinkTitle>
                    <FooterLink to="/signup">How it Works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Terms of Service</FooterLink>
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/signup">How it Works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Terms of Service</FooterLink>
                </FooterLinksItem>
            </FooterLinksWrapper>
        </FooterLinksContainer>
    );
};

export default Links;
