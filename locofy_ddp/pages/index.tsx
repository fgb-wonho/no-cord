import type { NextPage } from "next";
import SideBar from "../components/side-bar";
import FrameComponent from "../components/frame-component";

const UserPage: NextPage = () => {
  return (
    <div className="w-full relative bg-bg flex flex-row items-start justify-start p-5 box-border gap-[20px] tracking-[normal]">
      <SideBar />
      <main className="flex-1 bg-bg box-border flex flex-col items-end justify-start pt-[14.5px] pb-5 pr-[29px] pl-0.5 gap-[578px] max-w-[calc(100%_-_320px)] border-[1px] border-solid border-border mq725:gap-[144px] mq1000:max-w-full mq450:gap-[72px] mq1050:gap-[289px]">
        <FrameComponent />
        <footer className="w-[1019px] flex flex-row items-start justify-start gap-[50px] top-[0] z-[99] sticky max-w-full text-left text-xl text-border font-inter mq725:w-[313px] mq725:gap-[25px]">
          <div className="flex-1 flex flex-row items-center justify-end py-0 pr-[5px] pl-[324px] box-border gap-[20px] max-w-full mq725:hidden mq725:pl-[162px] mq725:box-border mq450:pl-5 mq450:box-border">
            <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="h-6 w-5 relative text-xl font-inter text-border text-left inline-block">
                ◀
              </div>
            </button>
            <div className="h-10 flex-1 bg-gray-100 overflow-hidden flex flex-row items-center justify-center p-2.5 box-border gap-[20px]">
              <div className="h-6 w-12 relative inline-block">Page</div>
              <div className="h-8 bg-bg-white overflow-hidden flex flex-row items-center justify-center py-4 px-[26px] box-border">
                <div className="h-6 w-[25px] relative inline-block">26</div>
              </div>
              <div className="h-6 w-[63px] relative inline-block whitespace-nowrap">
                of 999
              </div>
            </div>
            <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="h-6 w-5 relative text-xl font-inter text-border text-left inline-block">
                ▶
              </div>
            </button>
          </div>
          <button className="cursor-pointer py-2 px-2.5 bg-gray-100 w-[263px] box-border flex flex-row items-start justify-end whitespace-nowrap border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
            <div className="h-6 w-[188px] relative text-xl font-semibold font-inter text-border text-left inline-block">
              Total 100,000,000
            </div>
          </button>
        </footer>
      </main>
    </div>
  );
};

export default UserPage;
