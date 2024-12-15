/** @format */
import Tooltip from '../Tooltip/Tooltip';
import agoFormat from '../../assets/tools/agoFormat';
import toMyanmarText from '../../assets/tools/ago-to-my';

const Footer = ({ data }) => {
  const { getText, language } = data;

  const link = (
    <div>
      {getText('author')} :{' '}
      <a
        style={{
          color: 'blue',
          fontWeight: 600,
        }}
        href='https://facebook.com/kothaunaing'
      >
        {getText('author-name')}
      </a>
    </div>
  );

  return (
    <div className='footer'>
      <Tooltip
        text={getText('authors-facebook')}
        bottom='-25px'
        children={link}
      />
      <div>
        {getText('last-updated')} -{' '}
        {toMyanmarText(language, agoFormat(1703406956274))}
      </div>
    </div>
  );
};

export default Footer;
