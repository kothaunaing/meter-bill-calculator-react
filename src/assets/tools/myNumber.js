const numbers = {
  '0': "၀",
  "1": '၁',
  "2": '၂',
  '3': '၃',
  "4": '၄',
  '5': '၅',
  "6": '၆',
  "7": '၇',
  '8': '၈',
  "9": '၉'
}

function convertMyNumber(language, number) {
  let myNumber = '';
  let numberString = String(number);

  if (language === 'en') {
    return number;
  } else {
    for (let i = 0; i < numberString.length; i++) {
      myNumber += numbers[numberString[i]];
    }
    return myNumber;
  }
}

export default convertMyNumber;