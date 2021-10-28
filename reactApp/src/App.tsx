import React from 'react'
import UserDetails from './components/userDetails/UserDetails';
import styled from 'styled-components';
import { colors } from './styles/mixinsAndVars';
import './global.scss';

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
  return (
    <AppContainer>
      <UserDetails details={userDetails} />
    </AppContainer>
  )
}

export default App;
