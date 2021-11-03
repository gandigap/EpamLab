import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles/mixinsAndVars';

const UserInfoContainer = styled.div`
  grid-area: info;   
  margin: 10px;     
`;

const UserInfoName = styled.h3`
  margin:20px 0;
  font-weigth:bold;
  font-size: 24px;
  color: ${colors.firstColor};
`;

const UserInfoUserName = styled.span`
  font-style:italic;
  color: ${colors.fifthСolor};
  text-shadow: 0px 3px 7px ${colors.firstColor};
`;

const UserInfoUserAdditionalContainer = styled.p`
  color: ${colors.firstColor};
  margin:20px 0;
`;

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user')!);

  return (
    <UserInfoContainer>
      <UserInfoName>{user.name}<UserInfoUserName>{` aka the "${user.username}"`}</UserInfoUserName></UserInfoName>
      <UserInfoUserAdditionalContainer className='userInfo-email'>
        <FontAwesomeIcon icon={faEnvelope} /> {user.email}
      </UserInfoUserAdditionalContainer>
      <UserInfoUserAdditionalContainer className='userInfo-phone'>
        <FontAwesomeIcon icon={faPhone} /> {user.phone}
      </UserInfoUserAdditionalContainer>
      <UserInfoUserAdditionalContainer className='userInfo-adress'>
        <FontAwesomeIcon icon={faMapPin} /> {user.address.city}
      </UserInfoUserAdditionalContainer>
    </UserInfoContainer>
  )
}

export default UserInfo;
