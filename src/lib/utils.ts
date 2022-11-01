export const Format = {
  toProperCase: (str: string) =>
    str
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' '),
  dollar: (str: string | number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
      +str
    ),
}
