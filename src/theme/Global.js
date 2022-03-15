import styled, { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes";
import { PRIMARY_FONT } from "./typography";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
}
body {
    font-family: ${PRIMARY_FONT};
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
    transition: background 0.2s ease-in, color 0.2s ease-in;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) =>
        primary ? defaultTheme.primaryColor : defaultTheme.secondaryColor};
    border-radius: 4px;
    padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) =>
            primary ? defaultTheme.secondaryColor : defaultTheme.primaryColor};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;
