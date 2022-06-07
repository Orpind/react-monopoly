export const moneyFormat = (value: number) => {
  if (value >= 1000) return `${value / 1000}B`;
  return '$' + value + 'M';
};
