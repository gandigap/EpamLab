import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import Content from '../content/Content';
import { colors } from '../../styles/mixinsAndVars';

const UserDetailContainer = styled.div`  
  margin: 0 auto;  
  display: grid;    
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "avatar info"
    "content content"; 
    background-color: ${colors.secondColor};
    border-bottom: 3px solid ${colors.fourthСolor};
`;

const UserDetails = () => {

  return (
    <>
      <UserDetailContainer >
        <Avatar />
        <UserInfo />
      </UserDetailContainer>
      <Content />
    </>
  );
};

export default UserDetails;
