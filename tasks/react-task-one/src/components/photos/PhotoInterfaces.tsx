export interface PhotosData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotosProps {
  idAlbum?: string
}

export interface PhotoProps {
  photoInfo: PhotosData;
}