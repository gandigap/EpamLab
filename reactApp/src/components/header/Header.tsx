import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { _buttonText } from '../../constants/constants';
import Button from '../button/Button';
import { colors } from '../../styles/mixinsAndVars';
import { useHistory } from 'react-router';

const HeaderContainer = styled.header`
  padding: 10px;
  display:flex; 
  border-bottom: 1px solid ${colors.fourthСolor}
`;

const Header = () => {
  const history = useHistory();
  const [isAuth, setAuth] = useState(false);
  const logOut = useCallback(
    () => {
      setAuth(!isAuth);
      console.log(localStorage.getItem('name'))
    },
    [isAuth]
  );

  const signIn = useCallback(
    () => {
      history.push('/login');
    },
    [history]
  );


  const checkAuth = useCallback(
    () => {
      const user = localStorage.getItem('user');
      user ? setAuth(true)
        : setAuth(false);
    },
    []
  );

  useEffect(() => { checkAuth() }, [checkAuth]);

  return (
    <HeaderContainer>
      {isAuth
        ? <div>
          <h3>{localStorage.getItem('user')}</h3>
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