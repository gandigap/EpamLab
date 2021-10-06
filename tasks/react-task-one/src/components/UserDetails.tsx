import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import Content from './Content';
import { colors } from '../styles/mixinsAndVars';

const UserDetailContainer = styled.div`
  max-width:800px;
  margin: 0 auto;  
  display: grid;    
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "avatar info"
    "content content";
  background-color: ${colors.thirdColor};
`;

interface UserDetailsProps {
  details: {
    id: number,
    name: string,
    username: string,
    avatarSrc: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    },
  }
}

const UserDetails: React.FC<UserDetailsProps> = ({ details }) => {
  return (
    <UserDetailContainer id={`userDetails-${details.id}`}>
      <Avatar avatarSrc={details.avatarSrc} />
      <UserInfo
        name={details.name}
        username={details.username}
        email={details.email}
        phone={details.phone}
      />
      <Content />
    </UserDetailContainer>
  );
};

export default UserDetails;
