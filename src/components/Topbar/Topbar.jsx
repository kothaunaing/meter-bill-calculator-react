/** @format */
import Tooltip from '../Tooltip/Tooltip';
import './Topbar.css';
import { BackIcon } from '../Icons/icons';

const Topbar = ({ data, title }) => {
  const { getText, setPage, theme } = data;

  const goHome = () => {
    setPage('home');
  };

  return (
    <div className='topbar'>
      <Tooltip
        text={getText('navigate-up')}
        left='5px'
        children={
          <button
            className={`back-button ${theme === 'dark' && 'back-button-dark'}`}
            onClick={goHome}
          >
            <img className='icons' src='icons/back-icon.svg' />
          </button>
        }
      />
      <div className='page-title'>{getText(title)}</div>
    </div>
  );
};

export default Topbar;
