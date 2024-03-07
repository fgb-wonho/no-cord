import { useState, EventHandler, ReactNode } from "react";

const MainKOR = () => {
  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#fcf4e7] overflow-hidden">
      <div className="absolute left-[866px] top-[126px] w-[554px] h-[370px] bg-[#cce6cd] rounded-[30px]"></div>
      <div className="absolute left-[979px] top-[288px] text-[30px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-black text-[#779678] whitespace-nowrap">
        팁 문화가 없는 나라입니다!
      </div>
      <div className="absolute left-[276px] top-[126px] w-[554px] h-[370px] bg-[#e0d4e2] rounded-[30px]"></div>
      <div className="absolute left-[309px] top-[153px] text-[30px] font-['Inter'] font-black text-[#cca7d2] whitespace-nowrap">
        환율
      </div>
      <div className="absolute left-[899px] top-[153px] text-[30px] font-['Inter'] font-black text-[#91c093] whitespace-nowrap">
        팁
      </div>
      <div className="absolute left-[277px] top-[528px] w-[554px] h-[370px] bg-[#deeafc] rounded-[30px]"></div>
      <div className="absolute left-[866px] top-[528px] w-[554px] h-[370px] bg-[#fee5dd] rounded-[30px]"></div>
      <div className="absolute left-[899px] top-[555px] text-[30px] font-['Inter'] font-black text-[#d0b7ae] whitespace-nowrap">
        할인율
      </div>
      <div className="absolute left-[310px] top-[555px] text-[30px] font-['Inter'] font-black text-[#abbad0] whitespace-nowrap">
        단위
      </div>
      <div className="absolute left-[301px] top-[229px] w-[360px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[899px] top-[607px] w-[246px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[1158px] top-[607px] w-[108px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[1218px] top-[622px] text-[20px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-bold text-[#000] whitespace-nowrap">
        %
      </div>
      <div className="absolute left-[308px] top-[676px] w-[437px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[308px] top-[758px] w-[231px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[574px] top-[758px] w-[232px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[898px] top-[694px] w-[491px] h-[124px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[694px] top-[229px] w-[112px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[721px] top-[244px] text-[20px] leading-[150%] tracking-[-0.02em] font-['Inter'] font-bold text-[#000] whitespace-nowrap">
        ₩ (원)
      </div>
      <img
        className="absolute left-[694px] top-[299px]"
        width="112"
        height="40"
        src="Rectangle 101_254.png"
      ></img>
      <div className="absolute left-[985px] top-[302px]"></div>
      <div className="absolute left-[694px] top-[349px] w-[112px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[301px] top-[349px] w-[360px] h-[60px] bg-[#fff] rounded-[30px]"></div>
      <div className="absolute left-[461px] top-[299px] w-[40px] h-[40px] bg-[#ea5130] rounded-[50px]"></div>
      <div className="absolute left-[760px] top-[676px] w-[40px] h-[60px] bg-[#ea5130] rounded-[50px]"></div>
      <img
        className="absolute left-[466px] top-[304px]"
        width="30"
        height="30"
        src="ri_exchange-line1_257.png"
      ></img>
      <img
        className="absolute left-[765px] top-[691px]"
        width="30"
        height="30"
        src="ri_exchange-line1_290.png"
      ></img>
      <div className="absolute left-[716px] top-[364px] text-[20px] leading-[150%] tracking-[-0.02em] font-['Inter'] font-bold text-[#000] whitespace-nowrap">
        $ (달러)
      </div>
      <div className="absolute left-[713px] top-[307px] text-[16px] leading-[150%] tracking-[-0.02em] font-['Inter'] font-bold text-[#fff] whitespace-nowrap">
        exchange
      </div>
      <div className="absolute left-[450px] top-[451px] text-[14px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-black text-[#a28ba6] whitespace-nowrap">
        실시간 환율이 아니니 주의 바랍니다.
      </div>
      <img
        className="absolute left-[515px] top-[688px]"
        width="23"
        height="36"
        src="-_1_292.png"
      ></img>
      <div className="absolute left-[548px] top-[768px] text-[24px] leading-[150%] tracking-[-0.02em] font-['Inter'] font-bold text-[#000] whitespace-nowrap">
        =
      </div>
      <img
        className="absolute left-[1277px] top-[607px]"
        width="112"
        height="60"
        src="Rectangle 331_302.png"
      ></img>
      <div className="absolute left-[1294px] top-[623px] text-[18px] leading-[150%] tracking-[-0.02em] font-['Inter'] font-bold text-[#fff] whitespace-nowrap">
        calculate
      </div>
      <div className="absolute left-0 top-[102px] w-[240px] h-[820px] bg-[#cbe5e5] rounded-tl-0 rounded-tr-[30px] rounded-br-[30px] rounded-bl-0"></div>
      <div className="absolute left-[16px] top-[433px] w-[208px] h-[70px] flex flex-row items-center justify-center">
        <div className="absolute left-[14px] top-[10px] w-[180px] h-[50px] shrink-0 flex flex-row items-center justify-center bg-[#cdc4e8] rounded-[30px]">
          <div className="text-[24px] font-['Inter'] font-black text-[#fff] whitespace-nowrap">
            환율
          </div>
        </div>
      </div>
      <div className="absolute left-[16px] top-[520px] w-[208px] h-[70px] flex flex-row items-center justify-center">
        <div className="absolute left-[14px] top-[10px] w-[180px] h-[50px] shrink-0 flex flex-row items-center justify-center bg-[#cce6cd] rounded-[30px]">
          <div className="text-[24px] font-['Inter'] font-black text-[#fff] whitespace-nowrap">
            팁
          </div>
        </div>
      </div>
      <div className="absolute left-[16px] top-[607px] w-[208px] h-[70px] flex flex-row items-center justify-center">
        <div className="absolute left-[14px] top-[10px] w-[180px] h-[50px] shrink-0 flex flex-row items-center justify-center bg-[#c9d9f0] rounded-[30px]">
          <div className="text-[24px] font-['Inter'] font-black text-[#fff] whitespace-nowrap">
            단위
          </div>
        </div>
      </div>
      <div className="absolute left-[16px] top-[694px] w-[208px] h-[70px] flex flex-row items-center justify-center">
        <div className="absolute left-[14px] top-[10px] w-[180px] h-[50px] shrink-0 flex flex-row items-center justify-center bg-[#efdad3] border-[3px] border-solid border-[#e1c9c1] rounded-[30px]">
          <div className="text-[24px] font-['Inter'] font-black text-[#fff] whitespace-nowrap">
            할인율
          </div>
        </div>
      </div>
      <div className="absolute left-[76px] top-[149px] font-['Inter'] font-black text-[#a8c5c5] text-center whitespace-nowrap">
        <span className="text-[28px]">
          COCO
          <br />
        </span>
        <span className="text-[25px]">trip</span>
      </div>
      <img
        className="absolute left-[75px] top-[278px]"
        width="90"
        height="90"
        src="Ellipse 51_226.png"
      ></img>
      <div className="absolute left-[308px] top-[607px] w-[493px] h-[45px]">
        <div className="absolute left-0 top-0 w-[493px] h-[45px] bg-[#fff] rounded-[30px]"></div>
        <img
          className="absolute left-[23px] top-[37px]"
          width="50"
          height="8"
          src="Rectangle 24I35_1311;35_1157.png"
        ></img>
        <div className="absolute left-[33px] top-[11px] text-[16px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-black text-[#000] text-center whitespace-nowrap">
          길이
        </div>
        <div className="absolute left-[132px] top-[11px] text-[16px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-black text-[#000] text-center whitespace-nowrap">
          넓이
        </div>
        <div className="absolute left-[429px] top-[11px] text-[16px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-black text-[#000] text-center whitespace-nowrap">
          온도
        </div>
        <div className="absolute left-[330px] top-[11px] text-[16px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-black text-[#000] text-center whitespace-nowrap">
          부피
        </div>
        <div className="absolute left-[231px] top-[11px] text-[16px] leading-[150%] tracking-[-0.01em] font-['Inter'] font-black text-[#000] text-center whitespace-nowrap">
          무게
        </div>
      </div>
    </div>
  );
};

export default MainKOR;
