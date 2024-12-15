/** @format */

import './Message.css';

const Message = ({ data, text }) => {
  const { getText } = data;
  return (
    <div className='Message'>
      <div className='message-text'>{getText('added-to-history')}</div>
    </div>
  );
};

export default Message;
