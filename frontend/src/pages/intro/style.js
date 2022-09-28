import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.darkgray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TitleBox = styled.div`
  padding-top: 10.8rem;
  text-align: center;
`

export const Title = styled.h1`
  color: white;
  font-family: 'CWDangamAsac-Bold';
  font-size: 4.8rem;
  line-height: 130%;
  white-space: pre-line;
  .point {
    font-family: inherit;
    color: ${colors.orange};
  }
`

export const MainImage = styled.img`
  width: 68%;
  object-fit: contain;
  margin: 0 auto;
`

export const ButtonBox = styled.div`
  padding-bottom: 6.1rem;
`
