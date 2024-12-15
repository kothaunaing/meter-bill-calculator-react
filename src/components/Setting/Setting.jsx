/** @format */
import './Setting.css';
import { useEffect } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import Topbar from '../Topbar/Topbar';
import CustomSelector from '../CustomSelector/CustomSelector';

const Setting = ({ data }) => {
  const { theme, setTheme, language, setLanguage, getText, setPage } = data;

  return (
    <div className='setting'>
      <Topbar data={{ getText, setPage, theme }} title={'setting'} />
      <SettingMain data={{ theme, setTheme, language, setLanguage, getText }} />
    </div>
  );
};

const SettingMain = ({ data }) => {
  const { theme, setTheme, language, setLanguage, getText } = data;

  useEffect(() => {
    saveToStorage('language', language);
  }, [language]);

  useEffect(() => {
    saveToStorage('theme', theme);
  }, [theme]);

  const languages = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Burmese',
      value: 'my',
    },
  ];
  const themes = [
    {
      label: 'light',
      value: 'light',
    },
    {
      label: 'dark',
      value: 'dark',
    },
    {
      label: 'system',
      value: 'system',
    },
  ];

  return (
    <div className='setting-main'>
      <div className='setting-item'>
        <div>{getText('theme')}</div>
        <Tooltip
          text={getText('select-theme')}
          children={
            <CustomSelector
              data={{
                getText,
                theme,
                options: themes,
                defaultValue: theme,
                setValue: setTheme,
              }}
            />
          }
          bottom='45px'
        />
      </div>
      <div className='setting-item'>
        <div>{getText('Language')}</div>
        <Tooltip
          text={getText('select-language')}
          children={
            <CustomSelector
              data={{
                getText,
                theme,
                options: languages,
                defaultValue: language,
                setValue: setLanguage,
              }}
            />
          }
        />
      </div>
    </div>
  );
};

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export default Setting;
