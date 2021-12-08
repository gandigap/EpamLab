import React, { useState, useCallback, useEffect } from 'react'
import './global.scss';
import styled from 'styled-components';
import { colors } from './styles/mixinsAndVars';

import Modal from './components/modal/Modal';
import ModalOverlay from './components/modal/ModalOverlay';
import FormAlbum from './components/modal/FormAlbum';
import FormPhoto from './components/modal/FormPhoto';
import ModalContext from './components/modal/ModalContext';
import Header from './components/header/Header';
import PublicAlbumsPage from './pages/PublicAlbumsPage';
import PublicPhotosPage from './pages/PublicPhotosPage';
import LoginPage from './pages/LoginPage';
import PrivateUserAlbums from './pages/PrivateUserAlbums';
import PrivateUserPhotos from './pages/PrivateUserPhotos';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import { _modalTypes } from './constants/constants';

import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

const AppContainer = styled.div`
  max-width: 1200px;
  background-color: ${colors.secondColor};
  margin:0 auto;
  min-height:100vh;
`;

const Wrapper = styled.div`  
  margin:0 10px;
`;

export const App = () => {
  const [isModalOpen, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState(_modalTypes.albumModal);
  const [isAuth, setAuth] = useState(false);

  const valueModalContext = {
    isModalOpen, setShowModal,
    typeModal, setTypeModal
  };

  const changeStateModal = useCallback(
    (e) => {
      e.target.id === 'modal__overlay' && setShowModal(!isModalOpen);
    },
    [isModalOpen]
  );

  const changeContentModal = useCallback(
    () => valueModalContext.typeModal === _modalTypes.albumModal 
      ? <FormAlbum />
      :<FormPhoto />     
    ,
    [valueModalContext.typeModal]
  );

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
    <ErrorBoundary>
      <AppContainer>
        <Wrapper>
          <Router>
            <ModalContext.Provider value={valueModalContext}>
              <Header authData={{ isAuth, setAuth }} />
              <Switch>
                <Route exact path="/albums" component={PublicAlbumsPage} />
                <Route exact path="/albums/:albumId" component={PublicPhotosPage} />
                <Route exact path="/user/:userId" component={PrivateUserAlbums} />
                <Route exact path="/user/:userId/albums/:albumId" component={PrivateUserPhotos} />
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
                  renderSection={changeContentModal} />
              </Modal>
            </ModalContext.Provider>
          </Router>
        </Wrapper>
      </AppContainer>
    </ErrorBoundary>
  )
}

export default App;
