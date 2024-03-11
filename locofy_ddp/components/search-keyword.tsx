import type { NextPage } from "next";
import { useState } from "react";

type SearchKeywordType = {
  value?: string;
};

const SearchKeyword: NextPage<SearchKeywordType> = ({ value }) => {
  const [text22Value, setText22Value] = useState("");
  return (
    <input
      className="[border:none] [outline:none] font-inter text-lg bg-[transparent] h-[22px] flex-1 relative text-border text-left inline-block min-w-[180px] whitespace-nowrap p-0"
      placeholder="검색어 입력"
      type="text"
      value={value}
      onChange={(event) => setText22Value(event.target.value)}
    />
  );
};

export default SearchKeyword;
