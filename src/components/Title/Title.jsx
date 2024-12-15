/** @format */
import Tooltip from '../Tooltip/Tooltip';
import './Title.css';
import { HistoryIcon, SettingIcon } from '../Icons/icons';
import convertMyNumber from '../../assets/tools/myNumber';

const Title = ({ data }) => {
  const { setPage, getText, theme, history, language } = data;

  const goToPage = (name) => {
    setPage(name);
  };

  return (
    <div className='title'>
      <div className='project-name'>{getText('project-name')}</div>
      <div className='title-right-section'>
        <Tooltip
          text={getText('history')}
          children={
            <button
              className={`buttons ${theme === 'dark' && 'buttons-dark'}`}
              onClick={() => goToPage('history')}
            >
              <img className='icons' src='icons/history-icon.svg' />
              <div className='history-counter'>
                <div>{convertMyNumber(language, history.length)}</div>
              </div>
            </button>
          }
        />
        <Tooltip
          text={getText('setting')}
          right='10px'
          children={
            <button
              className={`buttons ${theme === 'dark' && 'buttons-dark'}`}
              onClick={() => goToPage('setting')}
            >
              <img className='icons' src='icons/setting-icon.svg' />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Title;
