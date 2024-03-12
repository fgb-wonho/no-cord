import { createContext } from "react";

export type MenuType = Array<string>;

export type MenuContextType = {
  menu: MenuType;
  setMenu: (value: MenuType) => void;
};

export const MenuContext = createContext<MenuContextType | null>(null);
