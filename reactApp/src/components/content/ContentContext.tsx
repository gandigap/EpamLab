import { createContext } from 'react';
import { _contentTypes, _modalTypes } from '../../constants/constants';

interface IContentContext {
  viewStateContent: string,
  setViewStateContent: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal: string,
  setTypeModal: React.Dispatch<React.SetStateAction<string>>
}

const ContentContext = createContext<IContentContext>(
  {
    viewStateContent: _contentTypes.albums,
    setViewStateContent: () => { },
    isModalOpen: false,
    setShowModal: () => { },
    typeModal: _modalTypes.albumModal,
    setTypeModal: () => { },
  });

export default ContentContext;