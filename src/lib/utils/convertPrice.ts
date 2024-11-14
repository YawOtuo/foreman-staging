// this is a function for the currency convertor price

export const convertPrice = (
  price: number,
  fromCurrency: string,
  toCurrency: string,
  exchangeRates: Record<string, number>
): number => {
  price = Number(price)
  if (fromCurrency === toCurrency) return price;
  const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  return price * rate;
};
 
