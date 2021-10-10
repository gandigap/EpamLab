export interface AlbumsData {
  id: number;
  title: string;
  userId: number;
}

export interface AlbumsProps {
  changeView?: React.Dispatch<React.SetStateAction<string>>
}

export interface AlbumProps {
  albumInfo: AlbumsData;
}