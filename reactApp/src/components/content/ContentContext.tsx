import { createContext } from 'react';

interface IContentContext {
  viewState: string,
  setViewState: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContentContext = createContext<IContentContext>({ viewState: 'albums', setViewState: () => { }, setShowModal: () => { }, isModalOpen: false });

export default ContentContext;