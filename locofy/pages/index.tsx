import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Frame44Variant from "../components/frame44-variant";
import PortalPopup from "../components/portal-popup";
import Property1Frame from "../components/property1-frame";

const MainKOR: NextPage = () => {
  const [isFrame44Variant4Open, setFrame44Variant4Open] = useState(false);

  const openFrame44Variant4 = useCallback(() => {
    setFrame44Variant4Open(true);
  }, []);

  const closeFrame44Variant4 = useCallback(() => {
    setFrame44Variant4Open(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-oldlace h-[1024px] overflow-hidden text-left text-5xl text-white font-inter">
        <div className="absolute top-[126px] left-[866px] rounded-11xl bg-beige shadow-[2px_2px_10px_rgba(0,_0,_0,_0.2)] w-[554px] h-[370px]" />
        <div className="absolute top-[288px] left-[979px] text-11xl tracking-[-0.01em] leading-[150%] font-black text-darkseagreen-200">
          팁 문화가 없는 나라입니다!
        </div>
        <div className="absolute top-[126px] left-[276px] rounded-11xl bg-lavender-200 shadow-[2px_2px_10px_rgba(0,_0,_0,_0.2)] w-[554px] h-[370px]" />
        <div className="absolute top-[153px] left-[309px] text-11xl font-black text-thistle-200">
          환율
        </div>
        <div className="absolute top-[153px] left-[899px] text-11xl font-black text-darkseagreen-100">
          팁
        </div>
        <div className="absolute top-[528px] left-[277px] rounded-11xl bg-lavender-100 shadow-[2px_2px_10px_rgba(0,_0,_0,_0.2)] w-[554px] h-[370px]" />
        <div className="absolute top-[528px] left-[866px] rounded-11xl bg-mistyrose-100 shadow-[2px_2px_10px_rgba(0,_0,_0,_0.2)] w-[554px] h-[370px]" />
        <div className="absolute top-[555px] left-[899px] text-11xl font-black text-silver-100">
          할인율
        </div>
        <div className="absolute top-[555px] left-[310px] text-11xl font-black text-lightsteelblue">
          단위
        </div>
        <div className="absolute top-[229px] left-[301px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[360px] h-[60px]" />
        <div className="absolute top-[607px] left-[899px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[246px] h-[60px]" />
        <div className="absolute top-[607px] left-[1158px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[108px] h-[60px]" />
        <b className="absolute top-[622px] left-[1218px] text-xl tracking-[-0.01em] leading-[150%] text-black">
          %
        </b>
        <div className="absolute top-[676px] left-[308px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[437px] h-[60px]" />
        <div className="absolute top-[758px] left-[308px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[231px] h-[60px]" />
        <div className="absolute top-[758px] left-[574px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[232px] h-[60px]" />
        <div className="absolute top-[694px] left-[898px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[491px] h-[124px]" />
        <div className="absolute top-[229px] left-[694px] rounded-11xl bg-white shadow-[1px_1px_5px_rgba(0,_0,_0,_0.2)] w-28 h-[60px]" />
        <b className="absolute top-[244px] left-[721px] text-xl tracking-[-0.02em] leading-[150%] text-black">
          ₩ (원)
        </b>
        <img
          className="absolute top-[299px] left-[694px] rounded-81xl w-28 h-10"
          alt=""
          src="/rectangle-10.svg"
        />
        <div className="absolute top-[302px] left-[985px] w-[69px] h-9" />
        <div className="absolute top-[349px] left-[694px] rounded-11xl bg-white shadow-[1px_1px_5px_rgba(0,_0,_0,_0.2)] w-28 h-[60px]" />
        <div className="absolute top-[349px] left-[301px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[360px] h-[60px]" />
        <div className="absolute top-[299px] left-[461px] rounded-31xl bg-tomato shadow-[2px_2px_10px_rgba(0,_0,_0,_0.4)_inset] w-10 h-10" />
        <div className="absolute top-[676px] left-[760px] rounded-31xl bg-tomato shadow-[2px_2px_10px_rgba(0,_0,_0,_0.4)_inset] w-10 h-[60px]" />
        <img
          className="absolute top-[304px] left-[466px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/riexchangeline.svg"
        />
        <img
          className="absolute top-[691px] left-[765px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/riexchangeline.svg"
        />
        <b className="absolute top-[364px] left-[716px] text-xl tracking-[-0.02em] leading-[150%] text-black">
          $ (달러)
        </b>
        <b className="absolute top-[307px] left-[713px] text-base tracking-[-0.02em] leading-[150%]">
          exchange
        </b>
        <div className="absolute top-[451px] left-[450px] text-[14px] tracking-[-0.01em] leading-[150%] font-black text-lightslategray">
          실시간 환율이 아니니 주의 바랍니다.
        </div>
        <b className="absolute top-[688px] left-[515px] tracking-[-0.02em] leading-[150%] text-black">{`->`}</b>
        <b className="absolute top-[768px] left-[548px] tracking-[-0.02em] leading-[150%] text-black">
          =
        </b>
        <img
          className="absolute top-[607px] left-[1277px] rounded-81xl w-28 h-[60px]"
          alt=""
          src="/rectangle-33.svg"
        />
        <b className="absolute top-[623px] left-[1294px] text-[18px] tracking-[-0.02em] leading-[150%]">
          calculate
        </b>
        <div className="absolute top-[102px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-powderblue shadow-[4px_6px_10px_rgba(0,_0,_0,_0.15)] w-60 h-[820px]" />
        <div className="absolute top-[433px] left-[16px] w-52 h-[70px] flex flex-row items-center justify-center">
          <div className="w-[180px] !m-[0] absolute top-[10px] left-[14px] rounded-11xl bg-thistle-100 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] h-[50px] flex flex-row items-center justify-center z-[0]">
            <div className="relative font-black">환율</div>
          </div>
        </div>
        <div className="absolute top-[520px] left-[16px] w-52 h-[70px] flex flex-row items-center justify-center">
          <div className="w-[180px] !m-[0] absolute top-[10px] left-[14px] rounded-11xl bg-beige shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] h-[50px] flex flex-row items-center justify-center z-[0]">
            <div className="relative font-black">팁</div>
          </div>
        </div>
        <div className="absolute top-[607px] left-[16px] w-52 h-[70px] flex flex-row items-center justify-center">
          <div className="w-[180px] !m-[0] absolute top-[10px] left-[14px] rounded-11xl bg-lavender-300 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] h-[50px] flex flex-row items-center justify-center z-[0]">
            <div className="relative font-black">단위</div>
          </div>
        </div>
        <div className="absolute top-[694px] left-[16px] w-52 h-[70px] flex flex-row items-center justify-center">
          <div className="w-[186px] !m-[0] absolute top-[7px] left-[11px] rounded-11xl bg-mistyrose-200 box-border h-14 flex flex-row items-center justify-center z-[0] border-[3px] border-solid border-lightgray">
            <div className="relative font-black">할인율</div>
          </div>
        </div>
        <div className="absolute top-[149px] left-[76px] font-black text-silver-200 text-center text-[28px]">
          <p className="m-0">COCO</p>
          <p className="m-0 text-[25px]">trip</p>
        </div>
        <img
          className="absolute top-[278px] left-[75px] w-[90px] h-[90px] object-cover cursor-pointer"
          alt=""
          src="/ellipse-5@2x.png"
          onClick={openFrame44Variant4}
        />
        <Property1Frame
          property1Frame57Position="absolute"
          property1Frame57Top="607px"
          property1Frame57Left="308px"
        />
      </div>
      {isFrame44Variant4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame44Variant4}
        >
          <Frame44Variant onClose={closeFrame44Variant4} />
        </PortalPopup>
      )}
    </>
  );
};

export default MainKOR;
