import React, { useCallback } from 'react';
import styled from 'styled-components';
import { _buttonText } from '../../constants/constants';
import Button from '../button/Button';
import { colors } from '../../styles/mixinsAndVars';
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: 10px;
  display:flex; 
  border-bottom: 1px solid ${colors.fourthСolor}
`;

interface Props {
  authData: {
    isAuth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const Header = ({ authData }: Props) => {
  const history = useHistory();

  const logOut = useCallback(
    () => {
      authData.setAuth(false);
      localStorage.removeItem('user');
      history.push('/albums');
    },
    [authData, history]
  );

  const signIn = useCallback(
    () => {
      history.push('/login');
    },
    [history]
  );

  return (
    <HeaderContainer>
      {authData.isAuth
        ? <div>
          <h3>{JSON.parse(localStorage.getItem('user')!).username}</h3>
          <Button
            onClickHandler={logOut}
            renderSection={() => <p className='button-text'>{_buttonText.logOut}</p>} />
        </div>
        : <div>
          <Button
            onClickHandler={signIn}
            renderSection={() => <p className='button-text'>{_buttonText.signIn}</p>} />
        </div>}
    </HeaderContainer>
  );
}

export default Header;