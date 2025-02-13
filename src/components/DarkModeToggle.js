import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(mode);
    document.body.classList.toggle('dark-mode', mode);
  }, []);

  const toggleDarkMode = () => {
    const mode = !darkMode;
    setDarkMode(mode);
    localStorage.setItem('darkMode', mode);
    document.body.classList.toggle('dark-mode', mode);
  };

  return <button onClick={toggleDarkMode} className="dark-mode-toggle">{darkMode ? 'Light Mode' : 'Dark Mode'}</button>;
};

export default DarkModeToggle;