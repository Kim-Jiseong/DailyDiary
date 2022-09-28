import styled from "styled-components";
import { colors } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* text-align: center; */
  /* background-color: ${colors.darkgray}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const Title = styled.div`
  position: absolute;
`;
export const Background = styled.img`
  width: 100%;
  /* background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: auto; */
  object-fit: cover;
  display: block;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
