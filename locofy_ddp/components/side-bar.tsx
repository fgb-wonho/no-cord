import type { NextPage } from "next";

const SideBar: NextPage = () => {
  return (
    <div className="w-[300px] bg-bg box-border flex flex-col items-center justify-start pt-[15px] px-[15px] pb-[389px] gap-[20px_0px] text-left text-base text-border font-inter border-[1px] border-solid border-border mq725:pb-[164px] mq725:box-border mq1000:hidden mq1000:pt-5 mq1000:pb-[253px] mq1000:box-border">
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">유저</b>
        <div className="self-stretch relative">ㄴ 조회</div>
        <div className="self-stretch relative">ㄴ 화이트리스트</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">길드</b>
        <div className="self-stretch relative">ㄴ 조회</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">알림</b>
        <div className="self-stretch relative">ㄴ 점검알림</div>
        <div className="w-[53px] relative inline-block">ㄴ 공지</div>
        <div className="w-[53px] relative inline-block">ㄴ 푸시</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">쿠폰</b>
        <div className="self-stretch relative">ㄴ 등록</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">제한</b>
        <div className="self-stretch relative">ㄴ Block 정책</div>
        <div className="self-stretch relative">{`ㄴ Block `}</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">우편</b>
        <div className="self-stretch relative">ㄴ 우편조회 / 발송</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">내 정보</b>
        <div className="self-stretch relative">ㄴ 정보관리</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[15px] gap-[5px_0px]">
        <b className="self-stretch relative">운영툴 관리</b>
        <div className="self-stretch relative">ㄴ 로그</div>
      </div>
    </div>
  );
};

export default SideBar;
