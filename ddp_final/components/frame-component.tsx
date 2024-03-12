import type { NextPage } from "next";
import MainHead from "./main-head";
import MainSearchBar from "./main-search-bar";

const FrameComponent: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full text-left text-3xl text-border font-inter">
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-center py-0 pr-0 pl-[22px]">
          <MainHead />
        </div>
        <div className="w-[794px] overflow-hidden flex flex-col items-end justify-center py-0 pr-0 pl-0.5 box-border max-w-full">
          <MainSearchBar />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
