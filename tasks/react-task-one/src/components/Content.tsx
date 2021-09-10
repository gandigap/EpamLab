import React from 'react';
import styled from 'styled-components';

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
    </ContentContainer>
  );
};

export default Content
