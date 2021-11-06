import { createContext } from 'react';
import { _contentTypes } from '../../constants/constants';

interface IContentContext {
  viewStateContent: string,
  setViewStateContent: React.Dispatch<React.SetStateAction<string>>;
}

const ContentContext = createContext<IContentContext>(
  {
    viewStateContent: _contentTypes.albums,
    setViewStateContent: () => { },
  });

export default ContentContext;