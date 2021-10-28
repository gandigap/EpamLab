
import styled from 'styled-components';
import { colors } from '../../styles/mixinsAndVars';

export const ModalContentContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;  
  width: 400px;
  height: 400px;  
  background-color: ${colors.fifthСolor}; 
  box-shadow: 0px 0px 10px 5px ${colors.firstColor};
  -webkit-box-shadow: 0px 0px 10px 5px ${colors.firstColor};
  -moz-box-shadow: 0px 0px 10px 5px ${colors.firstColor}; 
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
  font-weight: bold;
  color: ${colors.fifthСolor};
`;

export const ModalInputListContainer = styled.div`  
  flex-grow: 1;
`;
export const ModalInputContainer = styled.div`  
  padding: 5px;
  margin: 5px;
`;

export const ModalInput = styled.input`  
  padding: 5px;
  font-size: 16px;
`;

export const ModalLabel = styled.label`  
  min-width: 150px;
  display: inline-block;
  font-size: 24px;
  color: ${colors.firstColor};
`;

export const ModalWrapperButton = styled.div`  
  display: flex;
  justify-content: end;  
`;