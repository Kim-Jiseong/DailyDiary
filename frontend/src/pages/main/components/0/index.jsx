import React, { useEffect, useState, useCallback } from "react";
import * as S from "./style";
import Background from "assets/png/DESIGN.png";
import quizData from "../quizData";
const Main = () => {
  const [quizNumber, setQuizNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState([]);
  const [cycle, setCycle] = useState(false);

  const RandomQuiz = () => {
    const randomNumber = Math.floor(Math.random() * quizData.length);
    if (
      quizData.length > prevNumber.length &&
      prevNumber.includes(randomNumber)
    ) {
      RandomQuiz();
    } else if (
      quizData.length > prevNumber.length &&
      !prevNumber.includes(randomNumber)
    ) {
      console.log(randomNumber);
      setQuizNumber(randomNumber);
      setPrevNumber([...prevNumber, randomNumber]);
    } else if (quizData.length === prevNumber.length) {
      setPrevNumber([]);
      console.log("oneCycle");
      setCycle(!cycle);
    }
  };
  useEffect(() => {
    RandomQuiz();
  }, [cycle]);
  return (
    <S.Container>
      <S.ReloadBtn onClick={RandomQuiz}>
        다른 질문 <i className="bi bi-arrow-repeat"></i>
      </S.ReloadBtn>
      <S.Title className={quizData[quizNumber].icon}></S.Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <S.Quote className="bi bi-quote"></S.Quote>
        <S.Title
          style={{ marginRight: "1rem", marginLeft: "1rem" }}
          // onClick={RandomQuiz}
        >
          {quizData[quizNumber].quiz}
        </S.Title>
        <S.RQuote className="bi bi-quote"></S.RQuote>
      </div>
      <S.Input></S.Input>
    </S.Container>
  );
};

export default Main;
