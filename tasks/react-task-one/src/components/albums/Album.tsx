import React, { Component } from 'react';
import styled from 'styled-components';

const AlbumContainer = styled.div`
  width 300px;
  min-height: 100px;
  padding:5px;
  margin: 5px;
  background-color: yellow;
  color: #000;  
`;

const AlbumContainerTitle = styled.h3`
  color:  #20264a;
  font-size: 22px;
`;

interface AlbumProps {
  albumInfo: {
    id: number;
    title: string;
    userId: number;
  }
}

const defaultDataAlbumState = {
  id: -1,
  title: 'default',
  userId: -1,
}

class Album extends Component<AlbumProps> {
  constructor(props: AlbumProps) {
    super(props)
    this.state = defaultDataAlbumState;
  }

  render() {
    return (
      <AlbumContainer id={`${this.props.albumInfo.id}`}>
        <AlbumContainerTitle >{this.props.albumInfo.title}</AlbumContainerTitle>
      </AlbumContainer>
    );
  }
}

export default Album;