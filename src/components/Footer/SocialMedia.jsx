import React from "react";
import { useContext } from "react";
import {
    FaClone,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";
import styled from "styled-components";
import { ConfigContext } from "../../helper/config.context";
import { MODES } from "../../helper/constants";

const SocialMediaContainer = styled.section`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: ${({ mode }) =>
        mode === MODES.CONSTRUCTION ? "center" : "space-between"};
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

const SocialIcon = styled(FaClone)`
    margin-right: 16px;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

const SocialIconsLink = styled.a`
    color: #fff;
    font-size: 24px;
`;

const SocialMedia = () => {
    const config = useContext(ConfigContext);

    return (
        <SocialMediaContainer>
            <SocialMediaWrap mode={config.mode}>
                {config.mode !== MODES.CONSTRUCTION && (
                    <SocialLogo to="/">
                        <SocialIcon />
                        OneCreate
                    </SocialLogo>
                )}
                <WebsiteRights>OneCreate © 2020.</WebsiteRights>
                {config.mode !== MODES.CONSTRUCTION && (
                    <SocialIcons>
                        <SocialIconsLink
                            href="/"
                            target="_blank"
                            aria-label="facebook"
                        >
                            <FaFacebook />
                        </SocialIconsLink>
                        <SocialIconsLink
                            href="/"
                            target="_blank"
                            aria-label="instagram"
                        >
                            <FaInstagram />
                        </SocialIconsLink>
                        <SocialIconsLink
                            href="/"
                            target="_blank"
                            aria-label="twitter"
                        >
                            <FaTwitter />
                        </SocialIconsLink>
                        <SocialIconsLink
                            href="/"
                            target="_blank"
                            aria-label="linkedin"
                        >
                            <FaLinkedin />
                        </SocialIconsLink>
                        <SocialIconsLink
                            href="/"
                            target="_blank"
                            aria-label="github"
                        >
                            <FaGithub />
                        </SocialIconsLink>
                    </SocialIcons>
                )}
            </SocialMediaWrap>
        </SocialMediaContainer>
    );
};

export default SocialMedia;
