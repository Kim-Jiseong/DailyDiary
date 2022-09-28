import * as S from "./style";
import Background from "assets/png/DESIGN.png";

const Main = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Title>2022.09.20</S.Title>
        <S.Background src={Background}></S.Background>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Main;
