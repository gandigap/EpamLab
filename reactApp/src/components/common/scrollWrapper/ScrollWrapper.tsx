import React, { useRef, useCallback, ReactNode } from 'react'
import Button from '../button/Button';
import styled from 'styled-components';
import { colors } from '../../../styles/mixinsAndVars';

const ScrollWrapperContainer = styled.div`  
  margin: 10px auto;
  background-color: ${colors.fourthСolor};
`;

interface Props {
  children: ReactNode;
}

const ScrollWrapper = ({ children }: Props) => {
  const topRef = useRef<null | HTMLButtonElement>(null);
  const bottomRef = useRef<null | HTMLButtonElement>(null);
  const scrollContent = useCallback(
    (view) => () => {
      if (bottomRef && bottomRef.current && topRef && topRef.current) {
        view === 'top'
          ? topRef.current.scrollIntoView({ behavior: "smooth" })
          : bottomRef.current.scrollIntoView({ behavior: "smooth" })
      }
    },
    [],
  )
  return (
    <ScrollWrapperContainer>
      <Button onClickHandler={scrollContent('bottom')}
        ref={topRef}
        renderSection={() => {
          return (
            <div className='button-icon-container'>
              <span className='button-icon-container__icon'>▼</span>
            </div>
          )
        }} />
      {children}
      <Button onClickHandler={scrollContent('top')}
        ref={bottomRef}
        renderSection={() => {
          return (
            <div className='button-icon-container'>
              <span className='button-icon-container__icon'>▲</span>
            </div>
          )
        }} />
    </ScrollWrapperContainer>
  )
}

export default ScrollWrapper
