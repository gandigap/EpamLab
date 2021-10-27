import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/mixinsAndVars';
import { MouseEventHandler } from 'react';

const ModalOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondColor};
  z-index: 99;
`;

interface Props {
  onClickHandler: MouseEventHandler<HTMLDivElement>,
  renderSection?: () => JSX.Element
}

const ModalOverlay: React.FC<Props> = ({ onClickHandler, renderSection }) => {
  return (
    <ModalOverlayContainer id='modal__overlay' onClick={onClickHandler}>
      {renderSection && renderSection()}
    </ModalOverlayContainer>
  );
}

export default ModalOverlay;