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

interface AlbumsState {
}

class Album extends Component<AlbumProps, AlbumsState> {
  constructor(props: AlbumProps) {
    super(props)
    this.state = {
    }
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