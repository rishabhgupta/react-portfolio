import { blue, neutral, purple, teal } from "./colors";
import { PRIMARY_FONT } from "./typography";

export const defaultTheme = {
    mode: "dark",
    primaryColor: teal[100],
    primaryColorHover: teal[50],
    primaryColorActive: teal[200],
    secondaryColor: blue[100],
    textColor: neutral[100],
    secondaryTextColor: neutral[500],
    primaryFont: PRIMARY_FONT,
    disabled: neutral[400],
    textDisabled: neutral[300],
    infoSectionLight: blue[100],
    infoSectionDark: blue[200],
    bodyColor: '#f1f1f1',
};

export const whiteTheme = {
    mode: "light",
    primaryColor: teal[100],
    primaryColorHover: teal[50],
    primaryColorActive: teal[200],
    secondaryColor: blue[100],
    textColor: neutral[550],
    secondaryTextColor: neutral[525],
    primaryFont: PRIMARY_FONT,
    disabled: neutral[400],
    textDisabled: neutral[300],
    infoSectionLight: neutral[200],
    infoSectionDark: neutral[100],
    bodyColor: 'white',
}
