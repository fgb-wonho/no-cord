import type { NextPage } from "next";
import { useState } from "react";
import ButtonLogout from "./button-logout";
import MainSearchBar from "./main-search-bar";

const Main: NextPage = () => {
  const [tableTitleValue, setTableTitleValue] = useState("");
  return (
    <main className="flex-1 bg-bg box-border flex flex-col items-start justify-start pt-[11px] px-0 pb-5 gap-[578px] max-w-[calc(100%_-_320px)] border-[1px] border-solid border-border mq1000:gap-[144px] mq450:max-w-full mq725:gap-[72px] mq1050:gap-[289px]">
      <section className="w-[1046px] flex flex-col items-end justify-start gap-[16px] max-w-full text-left text-3xl text-border font-inter">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[5px] max-w-full">
            <div className="self-stretch overflow-hidden flex flex-col items-end justify-center py-0 pr-0 pl-[22px]">
              <div className="self-stretch h-[108px] bg-bg flex flex-row items-center justify-between py-7 pr-0 pl-2.5 box-border gap-[20px] mq1050:hidden">
                <h3 className="m-0 h-[27px] w-[102px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap mq725:text-lg">
                  유저리스트
                </h3>
                <ButtonLogout />
              </div>
            </div>
            <div className="w-[794px] overflow-hidden flex flex-col items-end justify-center py-0 pr-0 pl-0.5 box-border max-w-full">
              <MainSearchBar />
            </div>
          </div>
        </div>
        <div className="w-[1016px] flex flex-col items-start justify-start max-w-full text-center text-base">
          <input
            className="[border:none] [outline:none] bg-gray-300 self-stretch h-[45px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 px-2.5 box-border font-inter font-semibold text-5xl text-bg-white min-w-[250px]"
            placeholder="User List"
            type="text"
            value={tableTitleValue}
            onChange={(event) => setTableTitleValue(event.target.value)}
          />
          <div className="bg-bg-white overflow-x-auto flex flex-row items-start justify-start border-[2px] border-solid border-border">
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center">
                    Sequence
                  </b>
                </button>
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center">
                    {" "}
                    Uuid(Puid)
                  </b>
                </button>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 border-[1px] border-solid border-gray">
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block">
                    1
                  </div>
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
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
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
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-[transparent] h-[31px] flex-1 [background:linear-gradient(#e5e5e5,_#e5e5e5),_#fff] box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
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
        </div>
      </section>
      <section className="self-stretch flex flex-row flex-wrap items-center justify-end py-0 px-[30px] box-border gap-[50px] max-w-full text-left text-xl text-border font-inter mq1000:gap-[25px]">
        <footer className="h-[50px] flex-1 flex flex-row items-center justify-end p-[5px] box-border gap-[20px] min-w-[337px] max-w-full text-left text-xl text-border font-inter mq1000:min-w-full">
          <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
            <div className="h-6 w-5 relative text-xl font-inter text-border text-left inline-block mq725:text-base">
              ◀
            </div>
          </button>
          <div className="h-10 w-[257px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2.5 box-border gap-[20px]">
            <div className="h-6 w-12 relative inline-block mq725:text-base">
              Page
            </div>
            <div className="h-8 bg-bg-white overflow-hidden flex flex-row items-center justify-center py-4 px-[26px] box-border">
              <div className="h-6 w-[25px] relative inline-block mq725:text-base">
                26
              </div>
            </div>
            <div className="h-6 w-[63px] relative inline-block mq725:text-base">
              of 999
            </div>
          </div>
          <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
            <div className="h-6 w-5 relative text-xl font-inter text-border text-left inline-block mq725:text-base">
              ▶
            </div>
          </button>
        </footer>
        <div className="w-[263px] bg-gray-100 box-border flex flex-row items-center justify-end py-[5px] px-2.5 whitespace-nowrap border-[1px] border-solid border-border">
          <div className="h-6 w-[188px] relative font-semibold inline-block">
            Total 100,000,000
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
