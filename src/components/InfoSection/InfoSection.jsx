import React from "react";
import styled, { ThemeContext } from "styled-components";
import { Button, Container } from "../../theme";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ConfigContext } from "../../helper/config.context";
import { MODES } from "../../helper/constants";
import Fade from 'react-reveal/Fade';

const InfoSec = styled.div`
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
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
    color: ${({ light }) => (light ? "#a9b3c1" : "#4B59F7")};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({ light }) => (light ? "#f7f8fa" : "#1c2237")};
`;

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 24px;
    color: ${({ light }) => (light ? "#a9b3c1" : "#1c2237")};
`;

const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

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
    primary = true,
    lightTopLine = false,
    lightHeading = false,
    lightDesc = false,
    img = "",
    alt = "",
    start = true
}) => {
    const config = useContext(ConfigContext);
    const theme = useContext(ThemeContext);

    console.log('theme', theme);

    return (
        <>
            <InfoSec lightBg={lightBg}>
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
                                {config.mode !== MODES.CONSTRUCTION && (
                                    <Link to="/sign-up">
                                        <Button big fontBuf primary={primary}>
                                            {buttonLabel}
                                        </Button>
                                    </Link>
                                )}
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
