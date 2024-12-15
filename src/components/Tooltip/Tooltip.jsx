/** @format */
import './Tooltip.css';
import { useState } from 'react';

const Tooltip = ({
  text,
  children,
  bottom = '-35px',
  left = 'auto',
  right = 'auto',
}) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      className='tooltip-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {open && (
        <div style={{ bottom, right, left }} className='tooltip'>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
