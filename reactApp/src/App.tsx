import React, { useState, useCallback, useEffect } from 'react'
import UserDetails from './components/userDetails/UserDetails';
import styled from 'styled-components';
import { colors } from './styles/mixinsAndVars';
import Modal from './components/modal/Modal';
import ModalOverlay from './components/modal/ModalOverlay';
import { _modalTypes } from './constants/constants';
import './global.scss';
import FormAlbum from './components/modal/FormAlbum';
import FormPhoto from './components/modal/FormPhoto';
import ModalContext from './components/modal/ModalContext';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PublicAlbumsPage from './pages/PublicAlbumsPage';
import PublicPhotosPage from './pages/PublicPhotosPage';
import LoginPage from './pages/LoginPage';

const AppContainer = styled.div`
  max-width: 1200px;
  background-color: ${colors.fourthСolor};
  margin:0 auto;
  min-height:100vh;
`;

const userDetails = {
  "id": 1,
  "name": "Ihar Berasneu",
  "username": "Gandigap",
  "avatarSrc": "/images/ava.jpg",
  "email": "igor.simatic@gmail.com",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "+375-44-7207433",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  },
};

export const App = () => {
  const [isModalOpen, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState(_modalTypes.albumModal);
  const [isAuth, setAuth] = useState(false);

  const changeStateModal = useCallback(
    (e) => {
      e.target.id === 'modal__overlay' && setShowModal(!isModalOpen);
    },
    [isModalOpen]
  );

  const valueModalContext = {
    isModalOpen, setShowModal,
    typeModal, setTypeModal
  };

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  useEffect(() => {
    if (localStorage.getItem('user') && isAuth !== true) {
      setAuth(!isAuth)
    }
  }, [isAuth, isModalOpen]);

  return (
    <Router>
      <ModalContext.Provider value={valueModalContext}>
        <Header authData={{ isAuth, setAuth }} />
        <Switch>
          <Route path="/about">
            <AppContainer>
              <UserDetails details={userDetails} />
            </AppContainer>
          </Route>
          <Route exact path="/albums">
            <PublicAlbumsPage />
          </Route>
          <Route exact path="/albums/:id">
            <PublicPhotosPage />
          </Route>
          <Route path="/login">
            <LoginPage authData={{ isAuth, setAuth }} />
          </Route>
          <Route path="/">
            <p>start</p>
          </Route>
        </Switch>
        <Modal isModalOpen={isModalOpen}>
          <ModalOverlay
            onClickHandler={changeStateModal}
            renderSection={() => {
              switch (valueModalContext.typeModal) {
                case _modalTypes.albumModal:
                  return <FormAlbum />
                case _modalTypes.photoModal:
                  return <FormPhoto />
              }
              return <FormAlbum />
            }} />
        </Modal>
      </ModalContext.Provider>
    </Router>
  )
}

export default App;
