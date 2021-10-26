import React from 'react';
import styled from 'styled-components';

const ModalOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  z-index: 99;
`;
interface Props {
  children: any,
}
const ModalOverlay: React.FC<Props> = ({ children }) => {
  return (
    <ModalOverlayContainer>
      {children}
    </ModalOverlayContainer>
  );
}

export default ModalOverlay;