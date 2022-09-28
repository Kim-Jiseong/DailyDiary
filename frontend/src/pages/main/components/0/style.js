import styled from "styled-components";
import { colors } from "styles/theme";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
`;
export const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
`;
export const Input = styled.input`
  width: 100%;
  color: ${colors.lightbrown};
  /* height: 2.4rem; */
  margin-top: 2.2rem;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
  border: none;
  background: transparent;
  border-bottom: 1px solid ${colors.lightbrown};
`;
export const Quote = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
`;
export const RQuote = styled(Quote)`
  transform: rotate(180deg);
`;
export const ReloadBtn = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  position: absolute;
  right: 0;
`;
