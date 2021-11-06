import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { _buttonText } from '../../constants/constants';
import Button from '../common/button/Button';
import { colors } from '../../styles/mixinsAndVars';
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: 10px; 
  border-bottom: 1px solid ${colors.fourthСolor}
`;

const HeaderContentContainer = styled.header`  
  display: flex; 
  justify-content: space-between;
  align-items: center;
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

  const addButtonContent = useCallback(
    (value) => () => <p className='button-text'>{`${value}`}</p>,
    []
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')!);
    authData.isAuth && history.push(`/user/${user.id}`);
  }, [authData.isAuth, history])

  return (
    <HeaderContainer>
      {authData.isAuth
        ? <HeaderContentContainer>
          <h3>{JSON.parse(localStorage.getItem('user')!).username}</h3>
          <Button
            onClickHandler={logOut}
            renderSection={addButtonContent(_buttonText.logOut)} />
        </HeaderContentContainer>
        : <HeaderContentContainer>
          <Button
            onClickHandler={signIn}
            renderSection={addButtonContent(_buttonText.signIn)} />
        </HeaderContentContainer>}
    </HeaderContainer>
  );
}

export default Header;