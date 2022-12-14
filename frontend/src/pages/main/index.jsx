import React, { useEffect, useState, useCallback, useRef } from "react";
import * as S from "./style";
import Background from "assets/png/DESIGN.png";
import Component0 from "./components/0/index";
import Component1 from "./components/1/index";
import { useRecoilState } from "recoil";
import pageIdxAtom from "atoms/pageIdxAtom";
import HTMLFlipBook from "react-pageflip";
const Main = (props) => {
  const [pageIdx, setPageIdx] = useRecoilState(pageIdxAtom);
  const [animation, setAnimation] = useState(false);
  const book = useRef();
  const nextButtonClick = () => {
    setPageIdx(pageIdx + 1);
  };

  const prevButtonClick = () => {
    setPageIdx(pageIdx - 1);
  };

  return (
    <S.Container>
      {/* <S.Btn
        onClick={() => {
          localStorage.removeItem("imageSrc");
          localStorage.removeItem("quizNumber");
          localStorage.removeItem("input");
          localStorage.removeItem("date");
          localStorage.removeItem("diary");
        }}
      >
        로컬스토리지 초기화
      </S.Btn> */}
      {pageIdx < 2 && <Component0></Component0>}
      {pageIdx >= 2 && <Component1></Component1>}
      {pageIdx !== 0 && (
        <S.PrevBtn onClick={prevButtonClick}>
          <i className="bi bi-arrow-left"></i> 이전
        </S.PrevBtn>
      )}
      {pageIdx !== 8 && (
        <S.NextBtn onClick={nextButtonClick}>
          다음 <i className="bi bi-arrow-right"></i>
        </S.NextBtn>
      )}
    </S.Container>
  );
};

export default Main;
