import type { NextPage } from "next";
import { useState } from "react";

import FRAMEMainSearch from "./f-r-a-m-e-main-search";

const MainFrame: NextPage = () => {
  const [tableTitleValue, setTableTitleValue] = useState("");

  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border max-w-full text-left text-3xl text-border font-inter">
      <div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full">
        <FRAMEMainSearch />
        <div className="w-[1016px] flex flex-col items-start justify-start max-w-full text-center text-base">
          <input
            className="[border:none] [outline:none] bg-gray-300 self-stretch h-[45px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 px-2.5 box-border font-inter font-semibold text-5xl text-bg-white min-w-[250px]"
            placeholder="User List"
            type="text"
            value={tableTitleValue}
            onChange={(event) => setTableTitleValue(event.target.value)}
          />
          <div className="bg-bg-white overflow-x-auto flex flex-row items-start justify-start border-[2px] border-solid border-border">
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <button className="cursor-pointer p-1.5 bg-gainsboro-100 flex-1 flex flex-row items-center justify-center border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative text-base leading-[18px] flex font-inter text-border text-center items-center justify-center shrink-0 z-[1]">
                    Sequence
                  </b>
                </button>
                <button className="cursor-pointer p-1.5 bg-gainsboro-100 flex-1 flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative text-base leading-[18px] flex font-inter text-border text-center items-center justify-center shrink-0 z-[1]">
                    {" "}
                    Uuid(Puid)
                  </b>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    1
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[2] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    123456789
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    2
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[3] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    123456789
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    3
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[4] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    123456789
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[2] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    4
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[5] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    123456789
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-gainsboro-100 flex flex-row items-center justify-center p-1.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    Nick Name
                  </b>
                </div>
                <button className="cursor-pointer p-1.5 bg-gainsboro-100 flex-1 flex flex-row items-center justify-center border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative text-base leading-[18px] flex font-inter text-border text-center items-center justify-center shrink-0 z-[1]">
                    Lv
                  </b>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[4] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    test1
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[6] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    1
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[5] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    test2
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[7] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    10
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[6] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    test3
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[8] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    100
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[7] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    test4
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[9] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    99
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <button className="cursor-pointer p-1.5 bg-gainsboro-100 flex-1 flex flex-row items-center justify-center border-[1px] border-solid border-gray hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative text-base leading-[18px] flex font-inter text-border text-center items-center justify-center shrink-0 z-[1]">
                    EXP
                  </b>
                </button>
                <div className="flex-1 bg-gainsboro-100 flex flex-row items-center justify-center p-1.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    Create Date
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[8] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    1
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[10] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[9] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    15
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[11] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[10] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    23
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[12] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 z-[11] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    57
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[13] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[254px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-gainsboro-100 flex flex-row items-center justify-center p-1.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    Login Date
                  </b>
                </div>
                <div className="flex-1 bg-gainsboro-100 flex flex-row items-center justify-center p-1.5 whitespace-nowrap border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-gainsboro-100 box-border hidden border-[1px] border-solid border-gray" />
                  <b className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    Logout Date
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[12] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[14] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[13] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[15] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[14] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[16] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[15] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
                    07-15 16:07
                  </div>
                </div>
                <div className="flex-1 bg-bg-white flex flex-row items-center justify-center p-1.5 whitespace-nowrap z-[17] border-[1px] border-solid border-gray">
                  <div className="h-[31px] w-32 relative bg-bg-white box-border hidden border-[1px] border-solid border-gray" />
                  <div className="h-[18px] w-[107px] relative leading-[18px] flex items-center justify-center shrink-0 z-[1]">
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

export default MainFrame;
