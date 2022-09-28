import { css } from 'styled-components'
import { colors } from 'styles/theme'

export const startButtonStyle = css`
  background-color: ${colors.orange};
  width: 33.7rem;
  height: 6.1rem;
  font-size: 2.1rem;
`
export const defaultOptionButtonStyle = css`
  background-color: ${colors.orange};
  width: 37.5rem;
  height: 5.5rem;
  font-size: 1.8rem;
  margin: 0.8rem 0;
`
export const clickedOptionButtonStyle = css`
  box-shadow: 0.3rem 0.3rem ${colors.black};
  background-color: ${colors.orange};
  width: 37.5rem;
  height: 5.5rem;
  font-size: 1.8rem;
  margin: 0.8rem 0;
`
export const adminStartButtonStyle = css`
  background-color: ${colors.purple};
  width: 12rem;
  height: 5.5rem;
  font-size: 1.6rem;
  margin-left: 0.8rem;
`

export const adminEndButtonStyle = css`
  background-color: ${colors.orange};
  width: 13.3rem;
  height: 5.5rem;
  font-size: 1.8rem;
  margin: 0 0.8rem;
`
