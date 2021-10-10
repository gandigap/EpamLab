import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Photo from './Photo';
import { PhotosData, PhotosProps } from './PhotoInterfaces';

const PhotosContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around;  
`;

function Photos({ idAlbum }: PhotosProps) {

  const [photos, setPhotos] = useState<Array<PhotosData>>([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/albums/${idAlbum}/photos`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(json => {
        setPhotos([...json]);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, [idAlbum]);


  return (
    <PhotosContainer>
      {photos.length === 0 ? 'Not photos' : photos.map((photo: PhotosData) =>
        <Photo photoInfo={photo} key={photo.id} />
      )}
    </PhotosContainer>
  );
}

export default Photos;