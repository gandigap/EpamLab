import { createContext } from 'react';

interface IContentContext {
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const ContentContext = createContext<IContentContext>({ setViewState: () => { } });

export default ContentContext;