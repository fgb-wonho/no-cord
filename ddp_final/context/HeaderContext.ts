import { createContext } from "react";

export type HeaderType = Array<string>;

export type HeaderContextType = {
  header: HeaderType;
  setHeader: (value: HeaderType) => void;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);
