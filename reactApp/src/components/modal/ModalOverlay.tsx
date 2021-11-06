import React from 'react';
import { MouseEventHandler } from 'react';
import { ModalOverlayContainer } from './FormElements';

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