/** @format */
import { AlertIcon } from '../Icons/icons';
import './Notification.css';

const Notification = ({ data }) => {
  const { text } = data;
  return (
    <div className='noti-container'>
      <img className='icons' src='icons/alert-icon.svg' />
      <div className='noti-text'>{text}</div>
    </div>
  );
};

export default Notification;
