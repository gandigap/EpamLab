import { createContext } from 'react';

interface IContentContext {
  setViewState?: React.Dispatch<React.SetStateAction<string>>
  setAlbumId?: React.Dispatch<React.SetStateAction<string>>
}

const ContentContext = createContext<IContentContext>({});

export default ContentContext;