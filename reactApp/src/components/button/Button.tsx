import React, { forwardRef } from 'react';
import { buttonStyle } from '../../styles/mixinsAndVars';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  ${buttonStyle};
`;

type Props = {
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void,
  renderSection?: () => JSX.Element
};

const Button = forwardRef((props: Props, ref) => {
  const { onClickHandler, renderSection } = props;
  return (
    <ButtonContainer onClick={onClickHandler} ref={ref as any}>
      {renderSection && renderSection()}
    </ButtonContainer>
  )
});

Button.displayName = 'Button';

export default Button;
