import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const GuildList: NextPage = () => {
  const router = useRouter();

  const onText5Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onText6Click = useCallback(() => {
    router.push("/user-white-list");
  }, [router]);

  return (
    <div className="w-full relative bg-bg flex flex-row items-start justify-start p-5 box-border gap-[20px] tracking-[normal] text-left text-base text-border font-inter">
      <div className="w-[300px] bg-bg box-border flex flex-col items-start justify-start pt-2.5 px-1 pb-96 gap-[10px] border-[1px] border-solid border-border mq1000:hidden mq1000:pt-5 mq1000:pb-[250px] mq1000:box-border mq725:pb-[162px] mq725:box-border">
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">유저</b>
          <div
            className="self-stretch h-[19px] relative inline-block cursor-pointer"
            onClick={onText5Click}
          >
            ㄴ 조회
          </div>
          <div
            className="self-stretch h-[19px] relative inline-block cursor-pointer"
            onClick={onText6Click}
          >
            ㄴ 화이트리스트
          </div>
        </div>
        <div className="self-stretch bg-bg overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] gap-[5px]">
          <b className="self-stretch h-[19px] relative inline-block">길드</b>
          <div className="self-stretch h-[19px] relative font-semibold inline-block">
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
      <main className="flex-1 bg-bg box-border flex flex-col items-start justify-start pt-[27px] pb-5 pr-[29px] pl-[30px] gap-[870px] max-w-[calc(100%_-_320px)] text-left text-3xl text-border font-inter border-[1px] border-solid border-border mq1000:pt-5 mq1000:box-border mq1000:max-w-full mq450:gap-[109px] mq725:gap-[217px] mq1050:gap-[435px]">
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <h3 className="m-0 h-[27px] w-[108px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap mq450:text-lg">
            길드 리스트
          </h3>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-start gap-[50px] top-[0] z-[99] sticky max-w-full text-left text-xl text-border font-inter mq725:gap-[25px]">
          <div className="flex-1 flex flex-row items-center justify-end py-0 pr-[5px] pl-[324px] box-border gap-[20px] max-w-full mq450:pl-5 mq450:box-border mq725:hidden mq725:pl-[162px] mq725:box-border">
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

export default GuildList;
