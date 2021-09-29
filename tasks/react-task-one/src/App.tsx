import React from 'react'
import UserDetails from './components/UserDetails';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: yellow;
}`;

const AppContainer = styled.div`
  width: 100%;
  background-color: #20264a;
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
  "content": "I`m a person without bad habits and with a good sense of humor. My main goal is to become a part of EPAM"
};

export const App = () => {
  return (
    <>
      <Global />
      <AppContainer>
        <UserDetails details={userDetails} />
      </AppContainer>
    </>

  )
}

export default App;
