import addListenerChangeTheme from './components/changeTheme';
import './styles/index.scss';
import { renderHeader } from './components/renderData'
import { checkLocalStorage } from './components/checkLocalStorage';
class App {
  constructor() {
    renderHeader();
    checkLocalStorage();
    addListenerChangeTheme();
  }
}

export default App;