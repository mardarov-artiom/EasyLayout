export const bgColors = [
  '#304ffe',
  '#2962ff',
  '#0091ea',
  '#00b8d4',
  '#00bfa5',
  '#00c853',
  '#64dd17',
  '#aeea00',
  '#ffd600',
  '#ffab00',
  '#ff6d00',
  '#dd2c00',
];

export const assignColor = (arrLength: number) => {
  const testArray = [...bgColors.keys()].map(v => v + 1);
  let resultArray = [];
  for (let i = 0; i <= arrLength; i++) {
    if (resultArray.length >= bgColors.length) {
      resultArray = [];
    }
    resultArray.push(testArray[i % testArray.length]);
  }
  return bgColors[resultArray.length - 1];
};
