import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { _buttonText } from '../../constants/constants';
import Button from '../button/Button';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { useActions } from '../../hooks/useActions';
import Spinner from '../spinner/Spinner';
import { _errorMessage } from '../../constants/constants';

const HeaderContainer = styled.header`
  padding: 10px;
  display:flex; 
`;

const Header = () => {
  const { usersList, error, loading } = useTypedSelector(state => state.users);
  const { fetchUsers } = useActions();
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
      fetchUsers();
      console.log(usersList, 'userlist')
      setAuth(!isAuth);
    },
    [fetchUsers, isAuth, usersList]
  );

  const checkAuth = useCallback(
    () => {
      localStorage.getItem('name')
        ? console.log('in')
        : console.log('out')
    },
    []
  );

  useEffect(() => { checkAuth() }, [checkAuth]);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1>{_errorMessage.errorAlbumsFetch}</h1>
  }

  return (
    <HeaderContainer>
      {isAuth
        ? <div>
          <h3>username</h3>
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