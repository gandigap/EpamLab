import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Album from './Album';
import { AlbumsData, AlbumsProps } from './AlbumInterfaces';

const AlbumsContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around;  
`;

const Albums = (props: AlbumsProps) => {
  const [albums, setAlbums] = useState<Array<AlbumsData>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(json => {
        setAlbums([...json]);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, [setAlbums]);

  return (
    <AlbumsContainer>
      {albums.length === 0 ? 'Not albums' : albums.map((album: AlbumsData) =>
        <Album albumInfo={album} key={album.id} />
      )}
    </AlbumsContainer>
  );
}

export default Albums;
