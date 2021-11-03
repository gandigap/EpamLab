import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Button from '../components/common/button/Button';
import { ModalContentContainer, ModalHeader, ModalTitle, ModalInputListContainer, ModalInputContainer, ModalLabel, ModalInput, ModalWrapperButton, ModalOverlayContainer } from '../components/modal/FormElements';
import { _modalTitle, _modalLabel, _errorMessage, _buttonText } from '../constants/constants';
import { useHistory } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelectors';

const ErrorPragraph = styled.div`
  font-weight: bold;
  text-align: center;
  color: red;
`;

interface Props {
  authData: {
    isAuth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const LoginPage = ({ authData }: Props) => {
  const [loginInfo, setLoginInfo] = useState({
    loginValue: '', loginError: false
  });

  const [passwordInfo, setPasswordInfo] = useState({
    passwordValue: '', passwordError: false
  });

  const history = useHistory();

  const { fetchUsers } = useActions();

  const { usersList, loading } = useTypedSelector(state => state.users);

  const inputLogin = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const paragraph = useRef<HTMLInputElement>(null);

  const addLogin = useCallback(
    () => {
      if (inputLogin && inputLogin.current) {
        const valueInputLogin = inputLogin.current.value;
        valueInputLogin.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/)
          ? setLoginInfo({ loginValue: inputLogin.current.value, loginError: false })
          : setLoginInfo({ loginValue: inputLogin.current.value, loginError: true });
      }
    }, []
  )

  const addPassword = useCallback(
    () => {
      if (inputPassword && inputPassword.current) {
        const valueInputPassword = inputPassword.current.value;
        valueInputPassword.match(/^[\da-zA-Z.\-_]+$/)
          ? setPasswordInfo({ passwordValue: inputPassword.current.value, passwordError: false })
          : setPasswordInfo({ passwordValue: inputPassword.current.value, passwordError: true });
      }
    }, []
  )

  const goToPreviousPage = useCallback(
    () => {
      history.goBack();
    }, [history]
  )

  const checkAuthData = useCallback(
    () => {
      if (usersList[`${loginInfo.loginValue}`]) {
        const user = usersList[`${loginInfo.loginValue}`];
        if (user.username === passwordInfo.passwordValue) {
          localStorage.setItem('user', JSON.stringify(user));
          authData.setAuth(!authData.isAuth)
          history.push(`./user/${user.id}`)
        }
      } else {
        if (paragraph && paragraph.current) paragraph.current.textContent = _errorMessage.errorAuth;
      }
    }, [authData, history, loginInfo.loginValue, passwordInfo.passwordValue, usersList]
  )

  const addButtonContent = useCallback(
    (value) => () => <p className='button-text'>{`${value}`}</p>,
    []
  );

  useEffect(() => {
    if (Object.keys(usersList).length === 0 && !loading) {
      fetchUsers();
    }
  }, [fetchUsers, loading, usersList]);

  return (
    <ModalOverlayContainer>
      <ModalContentContainer>
        <ModalHeader>
          <ModalTitle>{_modalTitle.auth}</ModalTitle>
        </ModalHeader>
        <ModalInputListContainer>
          <ModalInputContainer>
            <ModalLabel>{_modalLabel.login}</ModalLabel>
            <ModalInput ref={inputLogin} type='email' defaultValue=''
              placeholder='Ex: test@mail.ru' onChange={addLogin} />
            {loginInfo.loginError ? <p style={{ color: 'red' }}>{_errorMessage.errorModalLogin}</p> : null}
          </ModalInputContainer>
          <ModalInputContainer>
            <ModalLabel>{_modalLabel.password}</ModalLabel>
            <ModalInput ref={inputPassword} type='text' defaultValue=''
              placeholder='Ex: Tom' onChange={addPassword} />
            {passwordInfo.passwordError ? <p style={{ color: 'red' }}>{_errorMessage.errorModalPassword}</p> : null}
          </ModalInputContainer>
        </ModalInputListContainer>
        <ErrorPragraph ref={paragraph}></ErrorPragraph>
        <ModalWrapperButton>
          <Button
            onClickHandler={goToPreviousPage}
            renderSection={addButtonContent(_buttonText.back)} />
          <Button
            onClickHandler={checkAuthData}
            disabled={(loginInfo.loginError || passwordInfo.passwordError) ? true : false}
            renderSection={addButtonContent(_buttonText.submit)} />
        </ModalWrapperButton>
      </ModalContentContainer>
    </ModalOverlayContainer>

  );
};

export default LoginPage;