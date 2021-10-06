import React from 'react';
import styled from 'styled-components';
import Albums from './albums/Albums';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;
  padding:20px 0;  
`;


const Content = () => {
  return (
    <ContentContainer>
      <Albums />
    </ContentContainer>
  );
};

export default Content
