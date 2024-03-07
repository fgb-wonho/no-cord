import type { NextPage } from "next";
import SideBar from "../components/side-bar";
import MainFrame from "../components/main-frame";

const UserPage: NextPage = () => {
  return (
    <div className="w-full relative bg-bg flex flex-row items-start justify-start p-5 box-border gap-[0px_20px] tracking-[normal]">
      <SideBar />
      <main className="flex-1 bg-bg box-border flex flex-col items-center justify-start pt-[15px] pb-5 pr-[29px] pl-0.5 gap-[578px_0px] max-w-[calc(100%_-_320px)] border-[1px] border-solid border-border mq725:gap-[144px_0px] mq1000:max-w-full mq450:gap-[72px_0px] mq1050:gap-[289px_0px]">
        <MainFrame />
        <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-7 box-border max-w-full text-left text-xl text-border font-inter">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[0px_50px] max-w-full mq725:gap-[0px_25px]">
            <div className="h-10 flex-1 flex flex-row items-center justify-end p-[5px] box-border gap-[0px_20px] min-w-[337px] max-w-full mq725:min-w-full">
              <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                <div className="relative text-xl font-inter text-border text-left mq450:text-base">
                  ◀
                </div>
              </button>
              <div className="h-10 w-[257px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2.5 box-border gap-[0px_20px]">
                <div className="relative mq450:text-base">Page</div>
                <div className="h-8 bg-bg-white overflow-hidden flex flex-row items-center justify-center py-4 px-[26px] box-border">
                  <div className="relative mq450:text-base">26</div>
                </div>
                <div className="relative mq450:text-base">of 999</div>
              </div>
              <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                <div className="relative text-xl font-inter text-border text-left mq450:text-base">
                  ▶
                </div>
              </button>
            </div>
            <button className="cursor-pointer py-2 px-2.5 bg-gray-100 w-[263px] box-border flex flex-row items-center justify-end whitespace-nowrap border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="relative text-xl font-semibold font-inter text-border text-left">
                Total 100,000,000
              </div>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default UserPage;
