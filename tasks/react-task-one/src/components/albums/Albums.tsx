import React, { Component } from 'react';
import styled from 'styled-components';
import Album from './Album';

const AlbumsContainer = styled.div`
  display:flex; 
  flex-wrap: wrap;
  justify-content: space-around;  
`;

interface AlbumsProps {
  dataAlbumsProps?: Array<AlbumsData>
}

interface AlbumsState {
  dataAlbumsState: Array<AlbumsData>
}

interface AlbumsData {
  id: number;
  title: string;
  userId: number;
}

const defaultDataAlbumsState: Array<AlbumsData> = [];

export class Albums extends Component<AlbumsProps, AlbumsState> {
  constructor(props: AlbumsProps) {
    super(props)
    this.state = {
      dataAlbumsState: defaultDataAlbumsState
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
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
    if (albums !== undefined && albums.length !== 0) {
      if (albums !== null) {
        listAlbums = albums.map((album: AlbumsData) =>
          <Album albumInfo={album} key={album.id} >hi</Album>
        );
      }
    }

    return (
      <AlbumsContainer>
        {listAlbums === null ? 'No albums' : listAlbums}
      </AlbumsContainer>
    )
  }
}

export default Albums
