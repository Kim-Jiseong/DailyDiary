import React, { useEffect, useState, useCallback } from "react";
import * as S from "./style";
import Background from "assets/png/DESIGN.png";
import Component0 from "./components/0/index";

const Main = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <Component0></Component0>
        <S.Background src={Background}></S.Background>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Main;
