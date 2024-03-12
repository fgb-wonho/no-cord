import type { NextPage } from "next";
import { useState } from "react";
import { MenuContext, MenuType } from "../context/MenuContext";
import { UserDataContext, UserDataType } from "../context/UserDataContext";

const UserList: NextPage = () => {
  const [menu, setMenu] = useState<MenuType>([
    "sequence",
    "uuid",
    "nickname",
    "Lv",
    "EXP",
    "Create Date",
    "Login Date",
    "Logout Date",
  ]);
  const [userData, setUserData] = useState<UserDataType>([
    {
      sequence: 1,
      uuid: 123456789,
      nickname: "test1",
      Lv: 1,
      EXP: 1,
      CreateDate: "07-15 16:07",
      LoginDate: "07-15 16:07",
      LogoutDate: "07-15 16:07",
    },
    {
      sequence: 2,
      uuid: 123456789,
      nickname: "test2",
      Lv: 2,
      EXP: 2,
      CreateDate: "07-15 16:07",
      LoginDate: "07-15 16:07",
      LogoutDate: "07-15 16:07",
    },
  ]);
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <MenuContext.Provider value={{ menu, setMenu }}>
        <div className="bg-bg-white overflow-x-auto flex flex-row items-start justify-start py-0 px-0 text-center text-base text-border font-inter">
          <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center" />
              </button>
              <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center">
                  {" "}
                  Uuid(Puid)
                </b>
              </button>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block" />
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[1] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  123456789
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  2
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[2] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  123456789
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  3
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[3] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  123456789
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[1] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  4
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[4] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  123456789
                </div>
              </div>
            </div>
          </div>
          <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                <b className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  Nick Name
                </b>
              </div>
              <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center">
                  Lv
                </b>
              </button>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[3] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  test1
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[5] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  1
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[4] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  test2
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[6] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  10
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[5] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  test3
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[7] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  100
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[6] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  test4
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[8] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  99
                </div>
              </div>
            </div>
          </div>
          <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center">
                  EXP
                </b>
              </button>
              <div className="h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                <b className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  Create Date
                </b>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[7] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  1
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[9] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[8] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  15
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[10] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[9] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  23
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[11] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[10] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  57
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[12] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
          </div>
          <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                <b className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  Login Date
                </b>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                <b className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  Logout Date
                </b>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[11] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[13] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[12] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[14] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[13] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[15] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[14] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
              <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[16] border-[1px] border-solid border-gray">
                <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                  07-15 16:07
                </div>
              </div>
            </div>
          </div>
        </div>
      </MenuContext.Provider>
    </UserDataContext.Provider>
  );
};

export default UserList;
