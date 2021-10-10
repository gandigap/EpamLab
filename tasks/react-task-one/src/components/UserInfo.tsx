import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../styles/mixinsAndVars';

const UserInfoContainer = styled.div`
  grid-area: info;  
  background-color: ${colors.thirdColor};
`;

const UserInfoName = styled.h3`
  margin:20px 0;
  font-weigth:bold;
  font-size: 24px;
  color: ${colors.fifthСolor};
`;

const UserInfoUserName = styled.span`
  font-style:italic;
  color: ${colors.fifthСolor};
`;

const UserInfoUserAdditionalContainer = styled.p`
  color: ${colors.firstColor};
  margin:20px 0;
`;

interface UserInfoProps {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, username, email, phone }) => {
  return (
    <UserInfoContainer>
      <UserInfoName>{name}<UserInfoUserName>{` aka the "${username}"`}</UserInfoUserName></UserInfoName>
      <UserInfoUserAdditionalContainer className='userInfo-email'>
        <FontAwesomeIcon icon={faCoffee} /> {email}
      </UserInfoUserAdditionalContainer>
      <UserInfoUserAdditionalContainer className='userInfo-phone'>
        <FontAwesomeIcon icon={faPhone} /> {phone}
      </UserInfoUserAdditionalContainer>
    </UserInfoContainer>
  )
}

export default UserInfo;
