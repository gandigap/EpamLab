import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/mixinsAndVars';

const AlbumContainer = styled.div`
  width 200px;
  min-height: 100px;
  padding:5px;
  margin: 5px;
  background-color: ${colors.fourthСolor};
  border-radius: 10px;
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

const defaultDataAlbumState = {}

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