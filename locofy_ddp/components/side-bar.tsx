import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const SideBar: NextPage = () => {
  const router = useRouter();

  const onText2Click = useCallback(() => {
    router.push("/user-white-list");
  }, [router]);

  const onText4Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-[300px] bg-bg box-border flex flex-col items-start justify-start pt-2.5 px-1 pb-96 gap-[10px] text-left text-base text-border font-inter border-[1px] border-solid border-border mq1000:pb-[162px] mq1000:box-border mq450:hidden mq450:pt-5 mq450:pb-[250px] mq450:box-border">
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
          길드
        </div>
        <div className="self-stretch h-[19px] relative inline-block">
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
  );
};

export default SideBar;
