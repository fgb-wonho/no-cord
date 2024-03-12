import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import UserTable from "../components/user-table";

const UserPage: NextPage = () => {
  const router = useRouter();

  const onText2Click = useCallback(() => {
    router.push("/user-white-list");
  }, [router]);

  const onText4Click = useCallback(() => {
    router.push("/guild-list");
  }, [router]);

  return (
    <div className="w-full relative bg-bg flex flex-row items-start justify-start p-5 box-border gap-[20px] tracking-[normal] text-left text-base text-border font-inter">
      <div className="w-[300px] bg-bg box-border flex flex-col items-start justify-start pt-2.5 px-1 pb-96 gap-[10px] border-[1px] border-solid border-border mq1000:hidden mq1000:pt-5 mq1000:pb-[250px] mq1000:box-border mq725:pb-[162px] mq725:box-border">
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">유저</b>
          <div className="self-stretch h-[19px] relative font-semibold inline-block">
            ㄴ 조회
          </div>
          <div
            className="self-stretch h-[19px] relative inline-block cursor-pointer"
            onClick={onText2Click}
          >
            ㄴ 화이트리스트
          </div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">길드</b>
          <div
            className="self-stretch h-[19px] relative inline-block cursor-pointer"
            onClick={onText4Click}
          >
            ㄴ 조회
          </div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">알림</b>
          <div className="self-stretch h-[19px] relative inline-block">
            ㄴ 점검알림
          </div>
          <div className="w-[53px] h-[19px] relative inline-block">ㄴ 공지</div>
          <div className="w-[53px] h-[19px] relative inline-block">ㄴ 푸시</div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">쿠폰</b>
          <div className="self-stretch h-[19px] relative inline-block">
            ㄴ 등록
          </div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">제한</b>
          <div className="self-stretch h-[19px] relative inline-block">
            ㄴ Block 정책
          </div>
          <div className="self-stretch h-[19px] relative inline-block">{`ㄴ Block `}</div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">우편</b>
          <div className="self-stretch h-[19px] relative inline-block">
            ㄴ 우편조회 / 발송
          </div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">내 정보</b>
          <div className="self-stretch h-[19px] relative inline-block">
            ㄴ 정보관리
          </div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">
            운영툴 관리
          </b>
          <div className="self-stretch h-[19px] relative inline-block">
            ㄴ 로그
          </div>
        </div>
      </div>
      <main className="flex-1 bg-bg box-border flex flex-col items-start justify-start pt-[11px] px-0 pb-5 gap-[578px] max-w-[calc(100%_-_320px)] border-[1px] border-solid border-border mq1000:max-w-full mq450:gap-[72px] mq725:gap-[144px] mq1050:gap-[289px]">
        <section className="w-[1046px] flex flex-col items-end justify-start gap-[16px] max-w-full">
          <FrameComponent />
          <UserTable />
        </section>
        <footer className="self-stretch flex flex-row items-center justify-end py-0 px-[30px] box-border gap-[50px] top-[0] z-[99] sticky max-w-full text-left text-xl text-border font-inter mq725:gap-[25px]">
          <div className="h-[50px] flex-1 flex flex-row items-center justify-end p-[5px] box-border gap-[20px] max-w-full mq1000:hidden">
            <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="h-6 w-5 relative text-xl font-inter text-border text-left inline-block">
                ◀
              </div>
            </button>
            <div className="h-10 w-[257px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2.5 box-border gap-[20px]">
              <div className="h-6 w-12 relative inline-block">Page</div>
              <div className="h-8 flex-[0.3247] bg-bg-white overflow-hidden flex flex-row items-center justify-center py-4 px-[26px] box-border">
                <div className="h-6 w-[25px] relative inline-block">26</div>
              </div>
              <div className="h-6 flex-1 relative text-center inline-block whitespace-nowrap">
                of 999
              </div>
            </div>
            <button className="cursor-pointer py-2 px-[9px] bg-gray-100 w-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="h-6 w-5 relative text-xl font-inter text-border text-left inline-block">
                ▶
              </div>
            </button>
          </div>
          <button className="cursor-pointer p-2.5 bg-gray-100 h-11 w-[263px] box-border flex flex-row items-center justify-end whitespace-nowrap border-[1px] border-solid border-border hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
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
