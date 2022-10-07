
function writeOrdinalSuffix(number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `st`;
  } else if (lastDigit === 2 && lastTwoDigits !== 12) {
    return `nd`;
  } else if (lastDigit === 3 && lastTwoDigits !== 13) {
    return `rd`;
  } else {
    return `th`;
  }
}

export default writeOrdinalSuffix;