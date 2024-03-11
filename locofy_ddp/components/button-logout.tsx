import type { NextPage } from "next";

const ButtonLogout: NextPage = () => {
  return (
    <button className="cursor-pointer py-[25px] px-[38px] bg-bg h-[52px] w-[169px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
      <h3 className="m-0 h-[27px] flex-1 relative text-3xl font-normal font-inter text-border text-left inline-block whitespace-nowrap mq725:text-lg">
        로그아웃
      </h3>
    </button>
  );
};

export default ButtonLogout;
