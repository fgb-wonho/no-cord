import type { NextPage } from "next";

const FRAMEMainSearch: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full text-left text-3xl text-border font-inter">
      <div className="flex-1 flex flex-row items-start justify-start gap-[0px_70px] max-w-full mq725:gap-[0px_17px] mq1050:gap-[0px_35px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px_0px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <h3 className="m-0 w-[102px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap mq450:text-lg">
                유저리스트
              </h3>
            </div>
            <header className="self-stretch flex flex-row items-center justify-start py-2.5 px-8 box-border gap-[0px_10px] max-w-full text-left text-lg text-border font-inter mq1000:hidden">
              <div className="h-10 w-[215px] bg-bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 px-2.5 gap-[110px_106px] border-[1px] border-solid border-border">
                <div className="w-[54px] relative inline-block shrink-0">
                  닉네임
                </div>
                <button className="cursor-pointer py-2 px-[11px] bg-bg w-[45px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                  <div className="relative text-xl font-inter text-border text-left whitespace-nowrap">
                    ▼
                  </div>
                </button>
              </div>
              <div className="h-10 flex-1 bg-bg-white box-border overflow-hidden flex flex-row items-center justify-start py-5 pr-[31px] pl-[29px] max-w-full border-[1px] border-solid border-border">
                <input
                  className="w-full [border:none] [outline:none] font-inter text-lg bg-[transparent] h-[22px] flex-1 relative text-border text-left inline-block min-w-[180px] whitespace-nowrap"
                  placeholder="검색어 입력"
                  type="text"
                />
              </div>
              <div className="h-[35px] w-[133px] rounded-3xs bg-border box-border flex flex-row items-center justify-center py-[33px] px-[47px] text-bg-white border-[1px] border-solid border-border">
                <div className="relative">검색</div>
              </div>
            </header>
          </div>
        </div>
        <button className="cursor-pointer pt-3 px-3 pb-[13px] bg-bg w-[169px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <div className="w-[91px] relative text-3xl font-inter text-border text-left inline-block shrink-0 whitespace-nowrap">
            로그아웃
          </div>
        </button>
      </div>
    </div>
  );
};

export default FRAMEMainSearch;
