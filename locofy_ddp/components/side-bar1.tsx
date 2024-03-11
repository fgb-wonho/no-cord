import type { NextPage } from "next";

const SideBar1: NextPage = () => {
  return (
    <div className="rounded-[5px] box-border w-[688px] overflow-hidden flex flex-row flex-wrap items-start justify-start py-0.5 px-5 gap-[48px] text-left text-base text-border font-inter border-[1px] border-dashed border-blueviolet">
      <div className="relative bg-bg box-border w-[300px] h-[984px] border-[1px] border-solid border-border">
        <div className="absolute top-[10px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">유저</b>
          <div className="self-stretch relative">ㄴ 조회</div>
          <div className="self-stretch relative">ㄴ 화이트리스트</div>
        </div>
        <div className="absolute top-[97px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">길드</b>
          <div className="self-stretch relative">ㄴ 조회</div>
        </div>
        <div className="absolute top-[160px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">알림</b>
          <div className="self-stretch relative">ㄴ 점검알림</div>
          <div className="relative">ㄴ 공지</div>
          <div className="relative">ㄴ 푸시</div>
        </div>
        <div className="absolute top-[271px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">쿠폰</b>
          <div className="self-stretch relative">ㄴ 등록</div>
        </div>
        <div className="absolute top-[334px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">제한</b>
          <div className="self-stretch relative">ㄴ Block 정책</div>
          <div className="self-stretch relative">{`ㄴ Block `}</div>
        </div>
        <div className="absolute top-[421px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">우편</b>
          <div className="self-stretch relative">ㄴ 우편조회 / 발송</div>
        </div>
        <div className="absolute top-[484px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">내 정보</b>
          <div className="self-stretch relative">ㄴ 정보관리</div>
        </div>
        <div className="absolute top-[547px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">운영툴 관리</b>
          <div className="self-stretch relative">ㄴ 로그</div>
        </div>
      </div>
      <div className="relative bg-bg box-border w-[300px] h-[984px] border-[1px] border-solid border-border">
        <div className="absolute top-[10px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">유저</b>
          <div className="self-stretch relative font-semibold">ㄴ 조회</div>
          <div className="self-stretch relative">ㄴ 화이트리스트</div>
        </div>
        <div className="absolute top-[97px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">길드</b>
          <div className="self-stretch relative">ㄴ 조회</div>
        </div>
        <div className="absolute top-[160px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">알림</b>
          <div className="self-stretch relative">ㄴ 점검알림</div>
          <div className="relative">ㄴ 공지</div>
          <div className="relative">ㄴ 푸시</div>
        </div>
        <div className="absolute top-[271px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">쿠폰</b>
          <div className="self-stretch relative">ㄴ 등록</div>
        </div>
        <div className="absolute top-[334px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">제한</b>
          <div className="self-stretch relative">ㄴ Block 정책</div>
          <div className="self-stretch relative">{`ㄴ Block `}</div>
        </div>
        <div className="absolute top-[421px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">우편</b>
          <div className="self-stretch relative">ㄴ 우편조회 / 발송</div>
        </div>
        <div className="absolute top-[484px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">내 정보</b>
          <div className="self-stretch relative">ㄴ 정보관리</div>
        </div>
        <div className="absolute top-[547px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">운영툴 관리</b>
          <div className="self-stretch relative">ㄴ 로그</div>
        </div>
      </div>
      <div className="relative bg-bg box-border w-[300px] h-[984px] border-[1px] border-solid border-border">
        <div className="absolute top-[10px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">유저</b>
          <div className="self-stretch relative">ㄴ 조회</div>
          <div className="self-stretch relative font-semibold">
            ㄴ 화이트리스트
          </div>
        </div>
        <div className="absolute top-[97px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">길드</b>
          <div className="self-stretch relative">ㄴ 조회</div>
        </div>
        <div className="absolute top-[160px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">알림</b>
          <div className="self-stretch relative">ㄴ 점검알림</div>
          <div className="relative">ㄴ 공지</div>
          <div className="relative">ㄴ 푸시</div>
        </div>
        <div className="absolute top-[271px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">쿠폰</b>
          <div className="self-stretch relative">ㄴ 등록</div>
        </div>
        <div className="absolute top-[334px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">제한</b>
          <div className="self-stretch relative">ㄴ Block 정책</div>
          <div className="self-stretch relative">{`ㄴ Block `}</div>
        </div>
        <div className="absolute top-[421px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">우편</b>
          <div className="self-stretch relative">ㄴ 우편조회 / 발송</div>
        </div>
        <div className="absolute top-[484px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">내 정보</b>
          <div className="self-stretch relative">ㄴ 정보관리</div>
        </div>
        <div className="absolute top-[547px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">운영툴 관리</b>
          <div className="self-stretch relative">ㄴ 로그</div>
        </div>
      </div>
      <div className="relative bg-bg box-border w-[300px] h-[984px] border-[1px] border-solid border-border">
        <div className="absolute top-[10px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">유저</b>
          <div className="self-stretch relative">ㄴ 조회</div>
          <div className="self-stretch relative">ㄴ 화이트리스트</div>
        </div>
        <div className="absolute top-[97px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">길드</b>
          <div className="self-stretch relative font-semibold">ㄴ 조회</div>
        </div>
        <div className="absolute top-[160px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">알림</b>
          <div className="self-stretch relative">ㄴ 점검알림</div>
          <div className="relative">ㄴ 공지</div>
          <div className="relative">ㄴ 푸시</div>
        </div>
        <div className="absolute top-[271px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">쿠폰</b>
          <div className="self-stretch relative">ㄴ 등록</div>
        </div>
        <div className="absolute top-[334px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">제한</b>
          <div className="self-stretch relative">ㄴ Block 정책</div>
          <div className="self-stretch relative">{`ㄴ Block `}</div>
        </div>
        <div className="absolute top-[421px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">우편</b>
          <div className="self-stretch relative">ㄴ 우편조회 / 발송</div>
        </div>
        <div className="absolute top-[484px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">내 정보</b>
          <div className="self-stretch relative">ㄴ 정보관리</div>
        </div>
        <div className="absolute top-[547px] left-[5px] bg-bg w-[290px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-[26px] box-border gap-[5px]">
          <b className="self-stretch relative">운영툴 관리</b>
          <div className="self-stretch relative">ㄴ 로그</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar1;
