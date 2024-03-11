import type { NextPage } from "next";
import SideBar from "../components/side-bar";
import Main from "../components/main";

const UserPage: NextPage = () => {
  return (
    <div className="w-full relative bg-bg flex flex-row items-start justify-start p-5 box-border gap-[20px] tracking-[normal]">
      <SideBar />
      <Main />
    </div>
  );
};

export default UserPage;
