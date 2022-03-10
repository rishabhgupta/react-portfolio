import { createContext } from "react";
import { MODES } from "./constants";

const config = {
    mode: MODES.PROD
};

export const ConfigContext = createContext(config);
