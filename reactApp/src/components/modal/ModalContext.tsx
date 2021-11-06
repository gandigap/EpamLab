import { createContext } from 'react';
import { _modalTypes } from '../../constants/constants';

interface IContentContext {
  isModalOpen: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal: string,
  setTypeModal: React.Dispatch<React.SetStateAction<string>>
}

const ModalContext = createContext<IContentContext>(
  {
    isModalOpen: false,
    setShowModal: () => { },
    typeModal: _modalTypes.albumModal,
    setTypeModal: () => { },
  });

export default ModalContext;