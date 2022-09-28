import React, { forwardRef } from 'react'
import * as S from './style'

const Button = forwardRef(({ disabled = false, css, children, type = 'button', isClicked = false, ...rests }, ref) => {
  return (
    <S.Container type={type} ref={ref} disabled={disabled} css={css} isClicked={isClicked} {...rests}>
      {children}
    </S.Container>
  )
})

export default React.memo(Button)
