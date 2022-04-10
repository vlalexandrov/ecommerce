const formatNumber = (number: number, currencySymbol?: string): string => {
  return currencySymbol + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { formatNumber };
