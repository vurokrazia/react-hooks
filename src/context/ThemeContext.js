import React, {useState} from 'react'
const ThemeContext = React.createContext({});
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState({});
  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}; 