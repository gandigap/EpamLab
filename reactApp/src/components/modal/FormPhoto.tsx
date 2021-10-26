import React from 'react';
import styled from 'styled-components';

const ModalFormContainer = styled.div`  
  minWidth: 400px;
  minHeight: 400px;  
  background-color: red;  
`;

interface Props {
  children?: any,
}
const FormPhoto: React.FC<Props> = ({ children }) => {
  return (
    <ModalFormContainer>
      <input type="text" />
      <div>Photo form</div>
    </ModalFormContainer>
  );
}

export default FormPhoto;