/** @format */
import { useState, useEffect } from 'react';
import './Style/App.css';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Layers from './components/Layer/Layers';
import Footer from './components/Footer/Footer';
import Setting from './components/Setting/Setting';
import History from './components/History/History';
import enData from './assets/languages/en';
import myData from './assets/languages/my';
import Message from './components/Message/Message';

function App() {
  const [usedUnit, setUsedUnit] = useState(0);
  const [cost, setCost] = useState({});
  const [service, setService] = useState('home');
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState(getStorage('theme') || 'light');
  const [language, setLanguage] = useState(getStorage('language') || 'en');
  const [history, setHistory] = useState(getStorage('history') || []);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (theme === 'system') {
      if (isDark()) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, [theme]);

  const getText = (key) => {
    switch (language) {
      case 'en':
        return enData[key] || key;
      case 'my':
        return myData[key] || key;
    }
  };

  return (
    <div className={`App ${theme === 'dark' && 'dark-theme'}`}>
      {isAdded ? <Message data={{ getText }} text='Added to history' /> : null}
      {page === 'home' && (
        <div className='home'>
          <Title data={{ setPage, getText, theme, history, language }} />
          <Input
            data={{
              cost,
              usedUnit,
              setUsedUnit,
              setCost,
              service,
              setService,
              getText,
              history,
              setHistory,
              theme,
              setIsAdded,
            }}
          />
          <Layers
            data={{ language, usedUnit, cost, service, getText, setCost }}
          />
          <Footer data={{ getText, language }} />
        </div>
      )}
      {page === 'setting' && (
        <Setting
          data={{ setPage, theme, setTheme, language, setLanguage, getText }}
        />
      )}
      {page === 'history' && (
        <History
          data={{
            theme,
            getText,
            history,
            setHistory,
            language,
            setUsedUnit,
            setPage,
            setService,
          }}
        />
      )}
    </div>
  );
}

function getStorage(key) {
  const item = localStorage.getItem(key);

  if (item === null || item === undefined) {
    return null;
  }

  try {
    return JSON.parse(item);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}

function isDark() {
  return window.matchMedia('(prefers-color-scheme: dark)');
}

export default App;
