/** @format */
import { useEffect } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import './History.css';
import convertMyNumber from '../../assets/tools/myNumber';
import Topbar from '../Topbar/Topbar';
import Notification from '../notification/Notification';
import { RemoveIcon } from '../Icons/icons';

const History = ({ data }) => {
  const {
    theme,
    setPage,
    getText,
    history,
    setHistory,
    language,
    setUsedUnit,
    setService,
  } = data;

  return (
    <div className='history'>
      <Topbar data={{ getText, setPage, theme }} title={'history'} />
      {history.length ? (
        <HistoryMain
          data={{
            history,
            setHistory,
            getText,
            language,
            setUsedUnit,
            setPage,
            setService,
          }}
        />
      ) : (
        <Notification data={{ text: getText('noti') }} />
      )}
    </div>
  );
};

const HistoryMain = ({ data }) => {
  const {
    history,
    setHistory,
    getText,
    language,
    setUsedUnit,
    setPage,
    setService,
  } = data;

  const setAndGo = (unit, service) => {
    setUsedUnit(unit);
    setPage('home');
    setService(service);
  };

  const deleteHistory = (unit, service) => {
    const newHistory = history.filter((h) => {
      return unit !== h.unit || service !== h.service;
    });
    setHistory(newHistory);
  };

  useEffect(() => {
    saveStorage('history', history);
  }, [history]);

  return (
    <div className='history-main'>
      <div className='history-item-container'>
        {history.map((h, i) => {
          const { unit, cost, service } = h;

          return (
            <div className='history-items' key={i + 1}>
              <div
                className='history-item'
                onClick={() => setAndGo(unit, service)}
              >
                <div className='item-number'>
                  {convertMyNumber(language, i + 1)}
                </div>
                <div>
                  {convertMyNumber(language, unit)} {getText('unit')}
                </div>
                <div>
                  {convertMyNumber(language, cost)} {getText('kyat')}
                </div>
                <div className='service'>({getText(service)})</div>
              </div>
              <div>
                <Tooltip
                  text={getText('remove')}
                  children={
                    <button
                      className='buttons'
                      onClick={() => deleteHistory(unit, service)}
                    >
                      <img
                        className='remove-icon'
                        src='icons/remove-icon.svg'
                      />
                    </button>
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function saveStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export default History;
