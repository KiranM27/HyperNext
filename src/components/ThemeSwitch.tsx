import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LightModeIcon from '@/public/icons/LightModeIcon';
import DarkModeIcon from '@/public/icons/DarkModeIcon';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    // check if the local storage has a theme set
    const localTheme = window?.localStorage?.getItem('@theme') || 'light';
    setTheme(localTheme);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')} className="text-white rounded-full outline-none focus:outline-none">
          <span className="sr-only">Light Mode</span>
          <LightModeIcon />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          className="text-black rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20"
        >
          <span className="sr-only">Dark Mode</span>
          <DarkModeIcon />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
