import React from "react";
import styled, { ThemeContext } from "styled-components";
import { Container, defaultTheme, typeScale } from "../../theme";
import { SecondaryButton} from "../Button/Button"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ConfigContext } from "../../helper/config.context";
import { MODES } from "../../helper/constants";
import Fade from 'react-reveal/Fade';

const InfoSec = styled.div`
    transition: all 0.2s ease-out;
    padding: 160px 0;
    background: ${({ lightBg, theme }) => (lightBg ? theme.infoSectionLight : theme.infoSectionDark)};
`;

const InfoRow = styled.div`
    display: flex;
    margin: 0px -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

const TopLine = styled.div`
    color: ${({ theme }) => theme.primaryColor};
    font-size: ${typeScale.header4};
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: ${typeScale.header1};
    line-height: 1.1;
    color: ${({ theme }) => theme.textColor};
`;

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 24px;
    color: ${({ theme }) => theme.secondaryTextColor};
`;

const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

const LinkWrapper = styled.div`
    display: block;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const LinkWrapperRev = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`

const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    display: inline-block;
    max-height: 500px;
`;

const InfoSection = ({
    lightBg = false,
    imgStart = false,
    topLine = "This is topline",
    heading = "This is heading",
    description = "This is description",
    buttonLabel = "Click",
    lightTopLine = false,
    lightHeading = false,
    lightDesc = false,
    img = "",
    alt = "",
    start = true
}) => {
    const config = useContext(ConfigContext);
    const theme = useContext(ThemeContext);


    return (
        <>
            <InfoSec lightBg={lightBg} >
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            
                            <TextWrapper>
                                <TopLine light={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading light={lightHeading}>
                                    {heading}
                                </Heading>
                                <Subtitle light={lightDesc}>
                                    {description}
                                </Subtitle>
                                <LinkWrapper>
                                    <Link to="/sign-up">
                                        <SecondaryButton >
                                            {buttonLabel}
                                        </SecondaryButton>
                                    </Link>
                                </LinkWrapper>
                            </TextWrapper>
                            
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Fade>
                                    <Img src={img} alt={alt}/>
                                </Fade>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                    <LinkWrapperRev>
                        <Link to="/sign-up">
                            <SecondaryButton >
                                {buttonLabel}
                            </SecondaryButton>
                        </Link>
                    </LinkWrapperRev>
                </Container>
            </InfoSec>
        </>
    );
};

InfoSection.propTypes = {
    lightBg: PropTypes.bool,
    imgStart: PropTypes.bool,
    topLine: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    primary: PropTypes.bool,
    lightTopLine: PropTypes.bool,
    lightHeading: PropTypes.bool,
    lightDesc: PropTypes.bool,
    img: PropTypes.string,
    alt: PropTypes.string,
    start: PropTypes.bool
};

export default InfoSection;
