export const formatValueInLocale = (locale: string, value: number) =>
  new Intl.NumberFormat(locale, {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
