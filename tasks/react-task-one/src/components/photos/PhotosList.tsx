import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import Photo from './Photo';
import { useActions } from '../../hooks/useActions';
import styled from 'styled-components';

const PhotosListContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around;  
`;

const PhotosList: React.FC = (props: any) => {
  const { photosList, error, loading, page, limit, albumID } = useTypedSelector(state => state.photos);
  const { fetchPhotos, setPhotosPage } = useActions();

  /* useEffect(() => {
    fetchPhotos(page, limit, albumID);
  }, [page, limit, albumID]); */


  if (loading) {
    return <h1> Идет загрузка</h1>
  }

  if (error) {
    return <h1> Произошла ошибка</h1>
  }

  console.log(photosList[`${albumID}`], 'info')
  return (

    <PhotosListContainer>
      <div>Album {albumID}</div>
      {photosList[`${albumID}`].map((photo: any) => {
        return <Photo photoInfo={photo} key={photo.id} />
      })}
      {/* <div style={{ display: "flex", width: '100%' }}>
        {pages.map((p, index) =>
          <div key={index}
            onClick={() => setPhotosPage(p)}
            style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
          >
            {p}
          </div>
        )}
      </div> */}

    </PhotosListContainer>
  )
}

export default PhotosList;