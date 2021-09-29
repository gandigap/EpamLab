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

export class Albums extends Component<AlbumsProps, AlbumsState> {
  constructor(props: AlbumsProps) {
    super(props)
    this.state = {
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
  }

  render() {
    const albums = this.state.dataAlbumsState;
    let listAlbums = null;
    if (albums !== undefined) {
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
