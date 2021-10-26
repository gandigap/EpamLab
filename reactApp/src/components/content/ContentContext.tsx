import { createContext } from 'react';
import { _typesContent, _typesModal } from '../../constants/constants';


interface IContentContext {
  viewState: string,
  setViewState: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal: string,
  setTypeModal: React.Dispatch<React.SetStateAction<string>>
}

const ContentContext = createContext<IContentContext>(
  {
    viewState: _typesContent.albums,
    setViewState: () => { },
    isModalOpen: false,
    setShowModal: () => { },
    typeModal: _typesModal.albumModal,
    setTypeModal: () => { },
  });

export default ContentContext;