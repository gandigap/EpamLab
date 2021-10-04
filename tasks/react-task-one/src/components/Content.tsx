import React from 'react';
import styled from 'styled-components';
import Albums from './albums/Albums';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;  
`;

interface ContentProps {
  content: string;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <ContentContainer>
      {content}
      <Albums />
    </ContentContainer>
  );
};

export default Content
