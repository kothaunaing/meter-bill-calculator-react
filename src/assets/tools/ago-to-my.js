const texts = {
  'a': '၁',
  '1': '၁',
  '2': '၂',
  '3': '၃',
  '4': '၄',
  '5': '၅',
  '6': '၆',
  '7': '၇',
  '8': '၈',
  '9': '၉',
  '10': '၁၀',
  '11': '၁၁',
  '12': '၁၂',
  '13': '၁၃',
  '14': '၁၄',
  '15': '၁၅',
  '16': '၁၆',
  '17': '၁၇',
  '18': '၁၈',
  '19': '၁၉',
  '20': '၂၀',
  '21': '၂၁',
  '22': '၂၂',
  '23': '23',
  '24': '၂၄',
  'second': 'စက္ကန့်',
  'seconds': 'စက္ကန့်',
  'minute': 'မိနစ်',
  'minutes': 'မိနစ်',
  'hour': 'နာရီ',
  'hours': 'နာရီ',
  'day': 'ရက်',
  'days': 'ရက်',
  'week': 'ပတ်',
  'weeks': 'ပတ်',
  'month': 'လ',
  'months': 'လ',
  'year': 'နှစ်',
  'years': 'နှစ်',
  'ago': 'အကြာက'
};

function toMyanmarText(language, text) {
  const splitText = text.split(' ');
  let convertedText = '';

  if (language === 'en') {
    return text;
  } else {
    splitText.forEach((w) => {
      convertedText += texts[w];
    })
    return convertedText;
  }
}

export default toMyanmarText;