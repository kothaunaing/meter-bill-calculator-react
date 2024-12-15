/** @format */

import { useState } from 'react';
import './CustomSelector.css';
import { DownIcon } from '../Icons/icons';

const CustomSelector = ({ data, top = '50px', left = 'auto' }) => {
  const { options, defaultValue, setValue, getText, theme } = data;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(getText(defaultValue));

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeOption = () => {
    setIsOpen(false);
  };

  const selectOption = (e, value) => {
    setSelectedLabel(e.target.innerText);
    setValue(value);
  };

  return (
    <div className='custom-selector'>
      <div
        className={`default-value ${
          theme === 'dark' ? 'default-value-dark' : null
        }`}
        style={{
          border: isOpen && '1px solid rgb(206, 206, 206)',
        }}
        onClick={handleIsOpen}
      >
        <div>{selectedLabel}</div>
        <img className='icons' src='icons/down-arrow.svg' />
      </div>
      {isOpen && (
        <div
          className={`option-container ${
            theme === 'dark' && 'option-container-dark'
          }`}
          style={{
            top,
            left,
          }}
        >
          {options.map((o) => {
            const { label, value } = o;

            return (
              <div
                key={value}
                style={{
                  fontWeight: value === defaultValue && 'bold',
                }}
                className='option'
                onClick={(e) => {
                  closeOption();
                  selectOption(e, value);
                }}
              >
                {getText(label)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSelector;
