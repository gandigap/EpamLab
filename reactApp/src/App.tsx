import React, { useState, useCallback, useEffect } from 'react'
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
import PublicAlbumsPage from './pages/PublicAlbumsPage';
import PublicPhotosPage from './pages/PublicPhotosPage';
import LoginPage from './pages/LoginPage';
import PrivateUserAlbums from './pages/PrivateUserAlbums';
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

const AppContainer = styled.div`
  max-width: 1200px;
  background-color: ${colors.fourthСolor};
  margin:0 auto;
  min-height:100vh;
`;

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
  }, [isAuth]);

  return (
    <AppContainer>
      <Router>
        <ModalContext.Provider value={valueModalContext}>
          <Header authData={{ isAuth, setAuth }} />
          <Switch>
            <Route exact path="/albums" component={PublicAlbumsPage} />
            <Route exact path="/albums/:id" component={PublicPhotosPage} />
            <Route exact path="/user/:id" component={PrivateUserAlbums} />
            <Route path="/login">
              <LoginPage authData={{ isAuth, setAuth }} />
            </Route>
            <Route exact path={["/", "/home"]}>
              <Redirect to="/albums" />
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
    </AppContainer>

  )
}

export default App;
