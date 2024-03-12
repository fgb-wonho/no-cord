import { createContext } from "react";

export type UserDataType = Array<{
  sequence: number;
  uuid: number;
  nickname: string;
  Lv: number;
  EXP: number;
  CreateDate: string;
  LoginDate: string;
  LogoutDate: string;
}>;

export type UserDataContextType = {
  userData: UserDataType;
  setUserData: (value: UserDataType) => void;
};

export const UserDataContext = createContext<UserDataContextType | null>(null);
