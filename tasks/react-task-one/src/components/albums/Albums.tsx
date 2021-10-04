import React, { Component } from 'react';
import styled from 'styled-components';
import Album from './Album';

const AlbumsContainer = styled.div`
  display:flex; 
  flex-wrap: wrap;
  justify-content: space-around;  
`;

const AlbumsButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;  
`;

interface AlbumsProps {
  dataAlbumsProps?: []
}

interface AlbumsState {
  dataAlbumsState?: []
}

interface AlbumsData {
  id: number;
  title: string;
  userId: number;
}

const defaultDataAlbumsState: [] = [];

export class Albums extends Component<AlbumsProps, AlbumsState> {
  constructor(props: AlbumsProps) {
    super(props)
    this.state = {
      dataAlbumsState: defaultDataAlbumsState
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => {
        this.setState({
          dataAlbumsState: json
        });
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  render() {
    const albums = this.state.dataAlbumsState;
    let listAlbums = null;
    if (albums !== undefined) {
      listAlbums = (albums === null) ? 'Albums is null' :
        listAlbums = albums.map((album: AlbumsData) =>
          <Album albumInfo={album} key={album.id} >hi</Album>
        );
    }

    return (
      <AlbumsContainer>
        {listAlbums}
        <AlbumsButton>Get</AlbumsButton >
      </AlbumsContainer>
    )
  }
}

export default Albums
