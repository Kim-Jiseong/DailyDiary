import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
export const opacity = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  word-break: keep-all;
  text-align: center;
  margin-top: 2rem;
  color: ${colors.lightbrown};
`;
export const DateWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50vh;
  transform: translate(0, -50%);
  animation: ${opacity} 1s;
`;
export const WeatherWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50vh;
  transform: translate(0, -50%);
  animation: ${opacity} 1s;
`;
export const PhotoWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-self: center;
  align-self: center;
  animation: ${opacity} 1s;
`;
export const PhotoBox = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2rem;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  border: 5px solid white;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
`;
export const Date = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50vh;

  transform: translate(0, -50%);
  ${(props) =>
    props.pageIdx > 2 &&
    css`
      transition: 1s;
      margin-top: 30vh;
    `}
`;

export const Input = styled.input`
  width: 100%;
  color: ${colors.lightbrown};
  margin-top: 2.2rem;
  font-size: 3rem;
  font-weight: 700;
  border: none;
  background: transparent;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid ${colors.lightbrown};
`;
