import type { NextPage } from "next";
import { useState } from "react";

const FrameComponent: NextPage = () => {
  const [text5Value, setText5Value] = useState("");
  const [tableTitleValue, setTableTitleValue] = useState("");
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border max-w-full text-center text-base text-border font-inter">
      <div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[70px] max-w-full mq725:gap-[17px] mq1050:gap-[35px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border max-w-full mq725:min-w-full">
              <header className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-left text-3xl text-border font-inter">
                <div className="flex flex-row items-start justify-start py-0 px-[30px]">
                  <h3 className="m-0 h-[27px] w-[102px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap">
                    유저리스트
                  </h3>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-8 box-border gap-[10px] max-w-full text-lg mq725:flex-wrap">
                  <div className="h-10 w-[215px] bg-bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 px-2.5 gap-[106px] border-[1px] border-solid border-border">
                    <div className="h-[22px] w-[54px] relative inline-block shrink-0">
                      닉네임
                    </div>
                    <button className="cursor-pointer py-2 px-[11px] bg-bg w-[45px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                      <div className="h-6 w-[21px] relative text-xl font-inter text-border text-left inline-block">
                        ▼
                      </div>
                    </button>
                  </div>
                  <div className="h-10 flex-1 bg-bg-white box-border overflow-hidden flex flex-row items-center justify-start py-5 px-[29px] min-w-[234px] max-w-full border-[1px] border-solid border-border">
                    <input
                      className="[border:none] [outline:none] font-inter text-lg bg-[transparent] h-[22px] flex-1 relative text-border text-left inline-block min-w-[180px] whitespace-nowrap p-0"
                      placeholder="검색어 입력"
                      type="text"
                      value={text5Value}
                      onChange={(event) => setText5Value(event.target.value)}
                    />
                  </div>
                  <button className="cursor-pointer py-[17px] px-[47px] bg-border h-[89px] w-[162px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                    <div className="h-[22px] w-9 relative text-lg font-inter text-bg-white text-left inline-block">
                      검색
                    </div>
                  </button>
                </div>
              </header>
            </div>
            <button className="cursor-pointer py-[12.5px] px-[38px] bg-bg w-[169px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-border hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="h-[27px] flex-1 relative text-3xl font-inter text-border text-left inline-block mq450:text-lg">
                로그아웃
              </div>
            </button>
          </div>
        </div>
        <div className="w-[1016px] flex flex-col items-start justify-start max-w-full">
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
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-gainsboro-100 h-[31px] flex-1 box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center z-[1]">
                    Sequence
                  </b>
                </button>
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-gainsboro-100 h-[31px] flex-1 box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center z-[1]">
                    {" "}
                    Uuid(Puid)
                  </b>
                </button>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    1
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[2] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    123456789
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    2
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[3] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    123456789
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    3
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[4] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    123456789
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[2] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    4
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[5] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    123456789
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-gainsboro-100 box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    Nick Name
                  </b>
                </div>
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-gainsboro-100 h-[31px] flex-1 box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center z-[1]">
                    Lv
                  </b>
                </button>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[4] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    test1
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[6] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    1
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[5] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    test2
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[7] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    10
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[6] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    test3
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[8] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    100
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[7] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    test4
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[9] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    99
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <button className="cursor-pointer py-1.5 pr-[9px] pl-2.5 bg-gainsboro-100 h-[31px] flex-1 box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative text-base leading-[18px] inline-block font-inter text-border text-center z-[1]">
                    EXP
                  </b>
                </button>
                <div className="h-[31px] flex-1 bg-gainsboro-100 box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    Create Date
                  </b>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[8] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    1
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[10] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[9] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    15
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[11] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[10] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    23
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[12] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 z-[11] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    57
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[13] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-gainsboro-100 box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    Login Date
                  </b>
                </div>
                <div className="h-[31px] flex-1 bg-gainsboro-100 box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    Logout Date
                  </b>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[12] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[14] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[13] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[15] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[14] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[16] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex flex-row items-start justify-start">
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[15] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="h-[31px] flex-1 bg-bg-white box-border flex flex-row items-start justify-start py-1.5 pr-[9px] pl-2.5 whitespace-nowrap z-[17] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] flex-1 relative leading-[18px] inline-block z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
