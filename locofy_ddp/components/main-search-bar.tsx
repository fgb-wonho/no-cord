import type { NextPage } from "next";
import SearchOption from "./search-option";
import SearchKeyword from "./search-keyword";

const MainSearchBar: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-start py-2.5 px-8 box-border gap-[10px] max-w-full">
      <SearchOption />
      <div className="h-10 flex-1 bg-bg-white box-border overflow-hidden flex flex-row items-center justify-start py-5 px-[29px] max-w-full border-[1px] border-solid border-border">
        <SearchKeyword value="test" />
      </div>
      <button className="cursor-pointer py-[17px] px-[47px] bg-border h-[89px] w-[162px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
        <div className="h-[22px] w-9 relative text-lg font-inter text-bg-white text-left inline-block">
          검색
        </div>
      </button>
    </header>
  );
};

export default MainSearchBar;
