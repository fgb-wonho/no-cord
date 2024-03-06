"use client";
import * as React from "react";
import { useState } from "react";
import { NextPage } from "next";

const TestPage: NextPage = () => {
  const [user, setUser] = useState(() => null);

  return (
    <div className="box-border flex relative flex-row shrink-0 p-2.5 w-screen h-screen bg-white">
      <div
        className="box-border flex relative flex-col shrink-0 p-5 h-full text-center border border-black border-solid min-h-[100px] w-[18%]"
        maxWidth={1200}
        lazyLoad={false}
      >
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto text-center border border-black border-solid max-w-[1200px] min-h-[100px] size-full">
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <font color="#000000">
                  <strong>
                    <span className="text-left">유저</span>
                  </strong>
                </font>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;조회</font>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <font color="#000000">└ 화이트리스트</font>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <span className="text-black">
                  <b>길드</b>
                </span>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;조회</font>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <span className="text-black">
                  <b>알림</b>
                </span>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;점검 알림</font>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;공지</font>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;푸시</font>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <span className="text-black">
                  <b>쿠폰</b>
                </span>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;등록</font>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <span className="text-black">
                  <b>제한</b>
                </span>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;Block 정책</font>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;Block</font>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <strong className="text-black">우편</strong>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;우편 조회 / 발송</font>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <span className="text-black">
                  <b>내 정보</b>
                </span>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;정보 관리</font>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 pb-1.5 mt-2.5 h-auto">
            <div className="box-border relative shrink-0 mr-auto h-auto text-left">
              <p>
                <span className="text-black">
                  <b>운영물 관리</b>
                </span>
              </p>
            </div>
            <div className="box-border relative shrink-0 pl-1.5 h-auto text-left">
              <span className="text-black">└</span>
              <font color="#000000">&nbsp;로그</font>
            </div>
          </div>
        </section>
      </div>
      <div
        className="box-border flex relative flex-col grow shrink-0 p-5 ml-5 w-auto border border-black border-solid min-h-[100px]"
        maxWidth={1200}
        lazyLoad={false}
      >
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full border border-black border-solid max-w-[1200px] min-h-[100px]">
          <div
            className="box-border flex relative flex-row max-md:flex max-sm:flex"
            maxWidth={1400}
            lazyLoad={false}
          >
            <section className="box-border flex relative flex-col grow self-stretch mx-auto w-full max-w-[1400px] max-md:flex max-sm:flex">
              <div className="box-border flex relative flex-row shrink-0 w-full h-auto">
                <div className="box-border relative shrink-0 my-auto mr-auto h-auto text-xl text-center text-black grow-0">
                  유저리스트
                </div>
                <button
                  className="box-border relative shrink-0 px-8 py-1.5 ml-auto w-auto text-lg text-center text-black bg-white rounded-lg border border-black border-solid appearance-none cursor-pointer grow-0"
                  openLinkInNewTab={false}
                >
                  로그아웃
                </button>
              </div>
              <div className="box-border flex relative flex-row shrink-0 mt-2.5 mr-auto w-auto grow-0">
                <FormSelect
                  name="condition"
                  defaultValue="닉네임"
                  className="box-border flex relative flex-col shrink-0 self-stretch p-2.5 text-center text-black bg-white border border-black border-solid w-[30%]"
                  options={[
                    {
                      value: "닉네임",
                      name: "닉네임",
                    },
                    {
                      value: "고유번호",
                      name: "고유번호",
                    },
                  ]}
                  required={false}
                />
                <FormInput
                  type="text"
                  placeholder="검색어 입력"
                  name="search"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mx-5 w-4/5 bg-white border border-black border-solid max-md:text-black max-md:bg-white"
                  required={false}
                />
                <button
                  className="box-border relative shrink-0 px-8 py-1.5 my-auto ml-auto w-auto text-center text-white bg-black rounded-lg border border-black border-solid appearance-none cursor-pointer grow-0"
                  openLinkInNewTab={false}
                >
                  검색
                </button>
              </div>
            </section>
          </div>
          <div
            className="box-border flex relative flex-col shrink-0 my-2.5 border border-black border-solid"
            maxWidth={1200}
            lazyLoad={false}
          >
            <section className="box-border flex relative flex-col grow shrink-0 self-stretch mx-auto my-2.5 w-full border border-black border-solid max-w-[1200px]">
              <div className="box-border relative shrink-0 py-1.5 pl-2.5 text-3xl font-semibold bg-neutral-600 grow-0">
                <p>User List</p>
              </div>
            </section>
          </div>
          <table className="table h-auto border-collapse grow-0">
            <tr className="border border-red-700 border-solid">
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Uuid(Puid)</font>
                </span>
              </th>
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            <tr className="border border-red-700 border-solid">
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Sequence</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <font color="#000000" className="font-[normal]">
                  123456789
                </font>
              </th>
              <th className="p-2 text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Nick Name</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Lv</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Exp</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Create Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Login Date</font>
                </span>
              </th>
              <th className="p-2 font-medium text-black border border border-black border-solid bg-neutral-400 border-[black]">
                <span className="font-[normal]">
                  <font color="#000000">Logout Date</font>
                </span>
              </th>
            </tr>
            {props.data?.map((item, $index) => (
              <tr>
                <td className="p-2 border border-solid border-[black]">
                  {item.name}
                </td>
                <td className="p-2 border border-solid border-[black]">
                  {item.age}
                </td>
              </tr>
            ))}
          </table>
          <div className="box-border flex relative flex-row grow shrink-0 mx-auto w-auto h-auto max-md:flex max-md:flex-row max-md:justify-center max-md:items-center max-md:w-full max-md:h-auto max-md:grow-0">
            <div className="box-border flex relative flex-col shrink-0 pb-2.5 mt-2.5 mr-20 w-auto h-auto grow-0 max-md:flex max-md:flex-row max-md:justify-center max-md:items-center max-md:mx-auto">
              <div className="flex flex-row">
                <button
                  className="box-border relative shrink-0 py-1.5 pr-2 pl-1.5 text-center text-black border border-black border-solid appearance-none cursor-pointer bg-neutral-400"
                  openLinkInNewTab={false}
                >
                  ◀
                </button>
                <div className="box-border flex relative flex-row shrink-0 self-center p-1.5 mx-4 my-auto border border-black border-solid w-[200px] max-md:bg-neutral-400">
                  <div className="box-border relative shrink-0 ml-2.5 h-auto text-black">
                    Page
                  </div>
                  <FormInput
                    type="number"
                    placeholder="1"
                    name="pagination"
                    defaultValue="1"
                    className="box-border flex relative flex-col shrink-0 mx-auto text-center text-black bg-white rounded border border-black border-solid grow-0 w-[50px]"
                    required={false}
                  />
                  <div className="box-border relative shrink-0 mr-2.5 h-auto text-black">
                    of 999
                  </div>
                </div>
                <button
                  className="box-border relative shrink-0 py-1.5 pr-1.5 pl-2 text-center text-black border border-black border-solid appearance-none cursor-pointer bg-neutral-400"
                  openLinkInNewTab={false}
                >
                  ▶
                </button>
              </div>
            </div>
            <div className="box-border relative p-2.5 h-auto w-[200px] max-md:fixed max-md:pl-16 max-md:bg-neutral-400 max-md:right-[3%]">
              <font color="#000000">Total 100,000</font>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestPage;
