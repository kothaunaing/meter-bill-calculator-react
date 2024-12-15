/** @format */
import './Input.css';
import { useEffect } from 'react';
import { calCost } from '../../assets/tools/calculate-bill';
import Tooltip from '../Tooltip/Tooltip';
import CustomSelector from '../CustomSelector/CustomSelector';
import { DeleteIcon, BillIcon } from '../Icons/icons';

const Input = ({ data }) => {
  const {
    cost,
    history,
    setHistory,
    usedUnit,
    setUsedUnit,
    setCost,
    service,
    setService,
    getText,
    theme,
    setIsAdded,
  } = data;

  // Functions
  const handleUserInput = (e) => {
    const units = Number(e.target.value);
    setUsedUnit(units);
  };

  const handleDelete = () => {
    setUsedUnit(0);
    setCost({});
  };

  let timeOutId;
  const addToHistory = () => {
    const include = checkDuplicate(usedUnit, service, history);

    const newHistory = [
      ...history,
      {
        unit: usedUnit,
        cost: cost.totalCost + 500,
        service,
      },
    ];

    if (!include && usedUnit) {
      setHistory(newHistory);
      clearTimeout(timeOutId);
      setIsAdded(true);

      timeOutId = setTimeout(() => {
        setIsAdded(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setCost(calCost(usedUnit, service));
  }, [usedUnit]);

  useEffect(() => {
    setCost(calCost(usedUnit, service));
  }, [service]);

  useEffect(() => {
    saveStorage('history', history);
  }, [history]);

  // Elements

  const services = [
    {
      label: 'home',
      value: 'home',
    },
    {
      label: 'business',
      value: 'business',
    },
  ];

  return (
    <div className='input-section'>
      <div className='input-container'>
        <Tooltip
          text={getText('select-service')}
          children={
            <CustomSelector
              data={{
                getText,
                theme,
                options: services,
                defaultValue: service,
                setValue: setService,
              }}
              left='-5px'
            />
          }
        />
        <input
          className={`user-input ${theme === 'dark' && 'user-input-dark'}`}
          placeholder={getText('enter-units')}
          maxLength={service === 'home' ? '5' : '8'}
          onChange={(e) => {
            handleUserInput(e);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addToHistory();
              handleIsAdded();
            }
          }}
          value={usedUnit ? usedUnit : ''}
        />
        <Tooltip
          text={getText('clear')}
          children={
            <button className='buttons' onClick={handleDelete}>
              <img className='icons' src='icons/delete-icon.svg' />
            </button>
          }
        />
      </div>
    </div>
  );
};

function checkDuplicate(unit, service, history) {
  let include = false;

  history.forEach((object) => {
    if (unit === object.unit && service === object.service) {
      include = true;
    } else if (!unit) {
      include = true;
    }
  });

  return include;
}

function saveStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export default Input;
