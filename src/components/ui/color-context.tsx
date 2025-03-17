import { createContext, useContext } from "react";

const ColorContext = createContext<string | undefined>("#00a3b4");

export const usePrimaryColor = () => useContext(ColorContext);

export default ColorContext;
