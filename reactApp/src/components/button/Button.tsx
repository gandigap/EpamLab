import React, { forwardRef } from 'react';
import { buttonStyle } from '../../styles/mixinsAndVars';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  ${buttonStyle};
`;

type Props = {
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void,
  renderSection?: () => JSX.Element,
  disabled?: boolean
};

const Button = forwardRef((props: Props, ref) => {
  const { onClickHandler, renderSection, disabled } = props;
  return (
    <ButtonContainer onClick={onClickHandler} ref={ref as any} disabled={disabled}>
      {renderSection && renderSection()}
    </ButtonContainer>
  )
});

Button.displayName = 'Button';

export default Button;
