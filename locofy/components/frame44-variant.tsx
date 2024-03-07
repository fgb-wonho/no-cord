import type { NextPage } from "next";
import { useCallback } from "react";

interface Frame44VariantProps {
  onClose: () => void; // Explicitly define the prop type
}

const Frame44Variant: NextPage<Frame44VariantProps> = ({ onClose }) => {
  const onTextClick = useCallback(() => {
    // Please sync "Main - USA" to the project
    onClose(); // Call `onClose` without arguments
  }, []);

  const onText1Click = useCallback(() => {
    // Please sync "Main - JPN" to the project
    onClose(); // Call `onClose` without arguments
  }, []);

  return (
    <div className="relative rounded-11xl bg-white overflow-y-auto flex flex-col items-center justify-start py-5 px-0 box-border gap-[19px_0px] max-w-full max-h-full overflow-auto text-left text-11xl text-black font-inter">
      <div className="relative tracking-[-0.01em] leading-[150%] font-black">
        대한민국
      </div>
      <div className="rounded-11xl bg-white h-[163px] overflow-y-auto shrink-0 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[10px_0px] text-center">
        <div
          className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black cursor-pointer"
          onClick={onTextClick}
        >
          미국
        </div>
        <div
          className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black cursor-pointer"
          onClick={onText1Click}
        >
          일본
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          중국
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          필리핀
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          베트남
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          태국
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          싱가포르
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          인도네시아
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          캐나다
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          대만
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          말레이시아
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          미얀마
        </div>
        <div className="relative tracking-[-0.01em] leading-[150%] font-black">
          오스트레일리아
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          독일
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-black">
          인도
        </div>
      </div>
    </div>
  );
};

export default Frame44Variant;
