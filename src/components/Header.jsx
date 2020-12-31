import { useState } from 'react';

const Header = () => {

  const [theme, setTheme] = useState(null);
  const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => {
    setDarkMode(!darkMode)
    setTheme(darkMode ? 'red' : 'green')
  }

  return (
    <div className="Header">
      <h1 style={{ color: theme }}>ReactHooks</h1>
      <button type="button" onClick={handleClick} >{darkMode ? 'Dark Mode' : 'Light Mode'} {
        darkMode
      } </button>
    </div>
  );

}

export default Header;