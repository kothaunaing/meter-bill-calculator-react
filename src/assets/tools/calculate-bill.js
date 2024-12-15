export function calCost(usedUnit, service) {
  let cost;
  let leftUnit;
  let layer;

  if (service === 'home') {
    if (usedUnit >= 0 && usedUnit <= 30) // between 1 and 30 --> 35 MMk/unit
    {
      layer = 1;
      leftUnit = usedUnit;
      cost = leftUnit * 35;
    }
    else if (usedUnit >= 31 && usedUnit <= 50) // between 31 and 50 --> 50 MMk/unit
    {
      layer = 2;
      leftUnit = usedUnit - 30;
      cost = 1050 + leftUnit * 50;
    }
    else if (usedUnit >= 51 && usedUnit <= 75) // between 51 and 75 --> 70 MMk/unit
    {
      layer = 3;
      leftUnit = usedUnit - 50;
      cost = 2050 + leftUnit * 70;
    }
    else if (usedUnit >= 76 && usedUnit <= 100) // between 76 and 100 --> 90 MMk/unit
    {
      layer = 4;
      leftUnit = usedUnit - 75;
      cost = 3800 + leftUnit * 90;
    }
    else if (usedUnit >= 101 && usedUnit <= 150) // between 101 and 150 --> 110 MMk/unit
    {
      layer = 5;
      leftUnit = usedUnit - 100;
      cost = 6050 + leftUnit * 110;
    }
    else if (usedUnit >= 151 && usedUnit <= 200) // between 151 and 200 --> 120 MMk/unit
    {
      layer = 6;
      leftUnit = usedUnit - 150;
      cost = 11550 + leftUnit * 120;
    }
    else // above 200 --> 125 MMk/unit
    {
      layer = 7;
      leftUnit = usedUnit - 200;
      cost = 17550 + leftUnit * 125;
    }
  } else {
    if (usedUnit >= 0 && usedUnit <= 500) {
      layer = 1;
      leftUnit = usedUnit;
      cost = leftUnit * 125;
    }
    else if (usedUnit >= 501 && usedUnit <= 5000) {
      layer = 2;
      leftUnit = usedUnit - 500;
      cost = 62500 + leftUnit * 135;
    }
    else if (usedUnit >= 5001 && usedUnit <= 10000) {
      layer = 3;
      leftUnit = usedUnit - 5000;
      cost = 670000 + leftUnit * 145;
    }
    else if (usedUnit >= 10001 && usedUnit <= 20000) {
      layer = 4;
      leftUnit = usedUnit - 10000;
      cost = 1395000 + leftUnit * 155;
    }
    else if (usedUnit >= 20001 && usedUnit <= 50000) {
      layer = 5;
      leftUnit = usedUnit - 20000;
      cost = 2945000 + leftUnit * 165;
    }
    else if (usedUnit >= 50001 && usedUnit <= 100000) {
      layer = 6;
      leftUnit = usedUnit - 50000;
      cost = 7895000 + leftUnit * 175;
    }
    else {
      layer = 7;
      leftUnit = usedUnit - 100000;
      cost = 16645000 + leftUnit * 180;
    }
  }

  return {
    layer,
    leftUnit,
    totalCost: cost
  };
}