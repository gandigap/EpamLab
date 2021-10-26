import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/mixinsAndVars';
import ContentContext from '../content/ContentContext';
import { _typesModal } from '../../constants/constants';
import FormAlbum from './FormAlbum';
import FormPhoto from './FormPhoto';
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
  onClickHandler: MouseEventHandler<HTMLDivElement>
}

let modalContent = <FormAlbum />;

const ModalOverlay: React.FC<Props> = ({ onClickHandler }) => {
  const value = useContext(ContentContext);

  useEffect(() => {
    switch (value.typeModal) {
      case _typesModal.albumModal:
        modalContent = <FormAlbum />
        break;
      case _typesModal.photoModal:
        modalContent = <FormPhoto />
        break;
    }
  }, [value.typeModal]);

  return (
    <ModalOverlayContainer id='modal__overlay' onClick={onClickHandler}>
      {modalContent}
    </ModalOverlayContainer>
  );
}

export default ModalOverlay;