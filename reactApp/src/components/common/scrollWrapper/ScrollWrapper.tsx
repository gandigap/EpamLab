import React, { useRef, useCallback, ReactNode } from 'react'
import styled from 'styled-components';
import { colors } from '../../../styles/mixinsAndVars';

import Button from '../button/Button';

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

  const addButtonIcon = useCallback(
    (icon) => () => {
      return <div className='button-icon-container'>
        <span className='button-icon-container__icon'>{`${icon}`}</span>
      </div>
    },
    [],
  )
  return (
    <ScrollWrapperContainer>
      <Button onClickHandler={scrollContent('bottom')}
        ref={topRef}
        renderSection={addButtonIcon('▼')} />
      {children}
      <Button onClickHandler={scrollContent('top')}
        ref={bottomRef}
        renderSection={addButtonIcon('▲')} />
    </ScrollWrapperContainer>
  )
}

export default ScrollWrapper
