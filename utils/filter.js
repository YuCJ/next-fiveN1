function passOption(rent) {
  switch (rent.optionType) {
    case '分租套房':
    case '雅房':
    case '車位':
      return false;
    default:
      return true;
  }
}

export function pickValidRents(rents) {
  return rents.filter(rent => {
    return passOption(rent);
  });
}
