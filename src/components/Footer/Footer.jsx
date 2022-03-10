import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { Button } from "../../theme";
import { ConfigContext } from "../../helper/config.context";
import { MODES } from "../../helper/constants";
import Links from "./Links";
import SocialMedia from "./SocialMedia";

const FooterContainer = styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    mg-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`;

const FooterSubHeading = styled.p`
    font-family: "Trebuchet MS", "Lucida Sans Unicode", Arial, sans-serif;
    margin-bottom: 15px;
    font-size: 24px;
`;

const FooterSubmg = styled.div`
    margin-bottom: 24px;
    font-size: 20px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

const FormInput = styled.input`
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;
    width: 300px;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

const getMessage = (mode) => {
    const msg = {
        heading: "Subscribe to our Newsletter",
        subHeading: "To be updated with all the latest trends and products."
    };

    if (mode === MODES.CONSTRUCTION) {
        msg.heading = "We Will Launch Soon!";
        msg.subHeading = "Subscribe to get notified.";
    }

    if (mode === MODES.BETA) {
        msg.heading = "OneCreate is currently in beta";
        msg.subHeading = "Sign up to get your invitation.";
    }

    return msg;
};

const Footer = () => {
    const config = useContext(ConfigContext);

    const msg = getMessage(config.mode);

    const handleSubmit = () => {
        throw new Error("Not able to connect");
    };

    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>{msg.heading}</FooterSubHeading>
                <FooterSubmg>{msg.subHeading}</FooterSubmg>
                <Form>
                    <FormInput
                        name="email"
                        type="email"
                        placeholder="Your Email"
                    />
                    <Button primary onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </Form>
            </FooterSubscription>
            {config.mode !== MODES.CONSTRUCTION && (
                <>
                    <Links />
                </>
            )}
            <SocialMedia />
        </FooterContainer>
    );
};

export { Footer };
