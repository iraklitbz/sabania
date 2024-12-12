export function currencyFormat(
  amount: number,
  showSign: boolean = true,
  currency: string = "EUR",
  style: string = "currency",
) {
  interface FormatOptions {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;

    currency?: string;
    style?: string;
  }
  const formatOptions: FormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  if (showSign) {
    formatOptions.currency = currency;
    formatOptions.style = style;
  }
  return new Intl.NumberFormat("de-DE", formatOptions)
    .format(amount)
    .replace(/\s/g, " ");
}
