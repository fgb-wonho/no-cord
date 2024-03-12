import type { NextPage } from "next";
import { useState } from "react";
import { HeaderContext, HeaderType } from "../context/HeaderContext";

const MainHead: NextPage = () => {
  const [header, setHeader] = useState<HeaderType>([
    "유저리스트",
    "화이트리스트",
  ]);
  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
      <div className="self-stretch h-[108px] bg-bg flex flex-row items-center justify-between py-7 pr-0 pl-2.5 box-border gap-[20px] text-left text-3xl text-border font-inter">
        <h3 className="m-0 h-[27px] w-[102px] relative text-inherit font-normal font-inherit inline-block" />
        <button className="cursor-pointer py-[25px] px-[38px] bg-bg h-[52px] w-[169px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <div className="h-[27px] flex-1 relative text-3xl font-inter text-border text-left inline-block">
            로그아웃
          </div>
        </button>
      </div>
    </HeaderContext.Provider>
  );
};

export default MainHead;
