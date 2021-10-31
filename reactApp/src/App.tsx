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
  Route,
  Link
} from "react-router-dom";

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
  const changeStateModal = useCallback(
    (e) => {
      e.target.id === 'modal__overlay' && setShowModal(!isModalOpen);
    },
    [isModalOpen]
  );

  const checkAuth = useCallback(
    () => {
      console.log(localStorage.getItem('name'), localStorage.getItem('name'), 'log pass');
    },
    []
  );

  const valueModalContext = {
    isModalOpen, setShowModal,
    typeModal, setTypeModal
  };

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <Router>
      <ModalContext.Provider value={valueModalContext}>
        <Switch>
          <Route path="/about">
            <AppContainer>
              <Header />
              <UserDetails details={userDetails} />
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
            </AppContainer>
          </Route>
          <Route path="/users">
            <p>users</p>
          </Route>
          <Route path="/login">
            <Modal isModalOpen={true}>
              <ModalOverlay
                onClickHandler={changeStateModal}
                renderSection={() => { return <FormAlbum /> }} />
            </Modal>
          </Route>
          <Route path="/">
            <p>Other</p>
          </Route>
        </Switch>
      </ModalContext.Provider>
    </Router>
  )
}

export default App;
