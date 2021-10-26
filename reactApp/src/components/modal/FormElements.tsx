
import styled from 'styled-components';
import { colors } from '../../styles/mixinsAndVars';

export const ModalFormContainer = styled.div`  
  width: 400px;
  height: 400px;  
  background-color: ${colors.thirdColor}; 
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75); 
`;

export const ModalHeader = styled.div`  
  display: flex;
  justify-content: space-between;
  padding: 5px;    
  background-color: ${colors.firstColor};
`;

export const ModalTitle = styled.div`  
  font-size: 24px;
  font-style: italic;
  color: ${colors.fifthСolor};
`;

export const ModalInputContainer = styled.div`  
  padding: 5px;
`;

export const ModalInput = styled.input`  
 
`;

export const ModalLabel = styled.label`  
  font-size: 24px;
  font-style: italic;
  color: ${colors.fifthСolor};
`;