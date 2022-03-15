import styled from "styled-components";
import { applyStyleModifiers} from "styled-components-modifiers"
import { defaultTheme } from "../../theme/themes";
import { PRIMARY_FONT, typeScale } from "./../../theme/typography";


const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 4px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    min-width: 100px;
    font-family: ${PRIMARY_FONT};
    transition: all 0.2s ease-out;

    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: white;
    }

    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        border-color: ${defaultTheme.primaryColorActive};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color:  ${defaultTheme.primaryColor};

    &:disabled {
        background-color: none;
        color: ${defaultTheme.disabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { Button, PrimaryButton, SecondaryButton}