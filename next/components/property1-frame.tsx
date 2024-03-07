import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Property1FrameType = {
  /** Style props */
  property1Frame57Position?: CSSProperties["position"];
  property1Frame57Top?: CSSProperties["top"];
  property1Frame57Left?: CSSProperties["left"];
};

const Property1Frame: NextPage<Property1FrameType> = ({
  property1Frame57Position,
  property1Frame57Top,
  property1Frame57Left,
}) => {
  const property1Frame57Style: CSSProperties = useMemo(() => {
    return {
      position: property1Frame57Position,
      top: property1Frame57Top,
      left: property1Frame57Left,
    };
  }, [property1Frame57Position, property1Frame57Top, property1Frame57Left]);

  return (
    <div
      className="w-[493px] h-[45px] text-center text-base text-black font-inter"
      style={property1Frame57Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[493px] h-[45px]" />
      <img
        className="absolute top-[37px] left-[23px] rounded-11xl w-[50px] h-2"
        alt=""
        src="/rectangle-24.svg"
      />
      <div className="absolute top-[11px] left-[33px] tracking-[-0.01em] leading-[150%] font-black">
        길이
      </div>
      <div className="absolute top-[11px] left-[132px] tracking-[-0.01em] leading-[150%] font-black">
        넓이
      </div>
      <div className="absolute top-[11px] left-[429px] tracking-[-0.01em] leading-[150%] font-black">
        온도
      </div>
      <div className="absolute top-[11px] left-[330px] tracking-[-0.01em] leading-[150%] font-black">
        부피
      </div>
      <div className="absolute top-[11px] left-[231px] tracking-[-0.01em] leading-[150%] font-black">
        무게
      </div>
    </div>
  );
};

export default Property1Frame;
