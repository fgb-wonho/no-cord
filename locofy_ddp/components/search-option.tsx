import type { NextPage } from "next";

const SearchOption: NextPage = () => {
  return (
    <select className="h-10 w-[215px] bg-bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-7 px-[19px] gap-[110px] font-inter text-xl text-border border-[1px] border-solid border-border">
      <option value="nickname">nickname</option>
      <option value="sequence">sequence</option>
    </select>
  );
};

export default SearchOption;
