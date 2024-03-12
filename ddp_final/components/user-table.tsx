import type { NextPage } from "next";
import { useState } from "react";
import UserList from "./user-list";

const UserTable: NextPage = () => {
  const [tableTitleValue, setTableTitleValue] = useState("");
  return (
    <div className="w-[1015px] bg-bg box-border flex flex-col items-start justify-start max-w-full text-center text-base text-border font-inter border-[1px] border-solid border-border">
      <input
        className="[border:none] [outline:none] bg-gray-300 self-stretch h-[45px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 px-2.5 box-border font-inter font-semibold text-5xl text-bg-white min-w-[250px]"
        placeholder="User List"
        type="text"
        value={tableTitleValue}
        onChange={(event) => setTableTitleValue(event.target.value)}
      />
      <UserList />
    </div>
  );
};

export default UserTable;
