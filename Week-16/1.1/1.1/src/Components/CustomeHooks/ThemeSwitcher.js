import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  );
}

export default ThemeSwitcher;
