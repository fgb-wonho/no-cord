import type { NextPage } from "next";
import { useState } from "react";
import SearchOption from "./search-option";

const MainSearchBar: NextPage = () => {
  const [text22Value, setText22Value] = useState("");
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-2.5 px-8 box-border gap-[10px] max-w-full">
      <SearchOption />
      <div className="h-10 flex-1 bg-bg-white box-border overflow-hidden flex flex-row items-center justify-start py-5 px-[29px] min-w-[234px] max-w-full border-[1px] border-solid border-border">
        <input
          className="[border:none] [outline:none] font-inter text-lg bg-[transparent] h-[22px] flex-1 relative text-border text-left inline-block min-w-[180px] whitespace-nowrap p-0"
          placeholder="검색어 입력"
          type="text"
          value={text22Value}
          onChange={(event) => setText22Value(event.target.value)}
        />
      </div>
      <button className="cursor-pointer py-2.5 px-10 bg-border h-[43px] w-[150px] rounded-3xs box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
        <div className="h-[22px] w-[50px] relative text-lg font-inter text-bg-white text-center inline-block shrink-0">
          검 색
        </div>
      </button>
    </div>
  );
};

export default MainSearchBar;
