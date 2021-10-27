import checkLocalStorage from "./checkLocalStorage";

const addListenerChangeTheme = () => {
  const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
  toggleSwitch.addEventListener('change', switchTheme, false);
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

export default addListenerChangeTheme;