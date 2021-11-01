import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../components/button/Button';
import { ModalContentContainer, ModalHeader, ModalTitle, ModalInputListContainer, ModalInputContainer, ModalLabel, ModalInput, ModalWrapperButton } from '../components/modal/FormElements';
import { _modalTitle, _modalLabel, _errorMessage, _buttonText } from '../constants/constants';
import { useHistory } from 'react-router';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelectors';


const LoginPage = () => {
  const { usersList, loading } = useTypedSelector(state => state.users);
  const { fetchUsers } = useActions();
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    loginValue: '', loginError: false
  });
  const [passwordInfo, setPasswordInfo] = useState({
    passwordValue: '', passwordError: false
  });

  const inputLogin = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const messageSubmit = useRef<HTMLParagraphElement>(null);

  const addLogin = useCallback(
    () => {
      if (inputLogin && inputLogin.current) {
        const valueInputLogin = inputLogin.current.value;
        valueInputLogin.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
          ? setLoginInfo({ loginValue: inputLogin.current.value, loginError: false })
          : setLoginInfo({ loginValue: inputLogin.current.value, loginError: true });
      }
    }, []
  )

  useEffect(() => {
    if (Object.keys(usersList).length === 0 && !loading) {
      fetchUsers();
    }

  }, [fetchUsers, loading, usersList]);

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
      const user = usersList[`${loginInfo.loginValue}`];
      if (user.username === passwordInfo.passwordValue) {
        if (messageSubmit && messageSubmit.current)
          messageSubmit.current.textContent = '';
        localStorage.setItem('user', loginInfo.loginValue);
        history.push(`./user/${user.id}`)
      } else {
        if (messageSubmit && messageSubmit.current)
          messageSubmit.current.textContent = 'Fail';
      }

    }, [history, loginInfo.loginValue, passwordInfo.passwordValue, usersList]
  )



  return (
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
      <p ref={messageSubmit}></p>
      <ModalWrapperButton>
        <Button
          onClickHandler={goToPreviousPage}
          renderSection={() => <p className='button-text'>{_buttonText.back}</p>} />
        <Button
          onClickHandler={checkAuthData}
          disabled={(loginInfo.loginError || passwordInfo.passwordError) ? true : false}
          renderSection={() => <p className='button-text'>{_buttonText.submit}</p>} />

      </ModalWrapperButton>
    </ModalContentContainer>
  );
};

export default LoginPage;