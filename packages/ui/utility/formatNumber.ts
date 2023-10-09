import { CHAR_COMMA, CHAR_NO_BREAK_SPACE } from '@tok/ui/consts';

export function formatNumber(
  value: number,
  decimalSeparator = CHAR_COMMA,
  thousandSeparator: string = CHAR_NO_BREAK_SPACE
): string {
  const integerPartString = `${Math.floor(Math.abs(value))}`;
  const fractionPartString = `${value}`.split('.')[1] || '';
  const sign = value < 0 ? '-' : '';
  const remainder = integerPartString.length % 3;

  let result = sign + integerPartString.charAt(0);

  for (let i = 1; i < integerPartString.length; i++) {
    if (i % 3 === remainder && integerPartString.length > 3) {
      result += thousandSeparator;
    }

    result += integerPartString.charAt(i);
  }

  return fractionPartString
    ? result + decimalSeparator + fractionPartString
    : result;
}
