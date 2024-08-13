export default function cleanSet(set, startString) {
  const strLength = startString.length;

  if (strLength === 0) {
    return '';
  }

  const answerString = [...set]
    .filter((value) => value.startsWith(startString))
    .map((eligibleValue) => eligibleValue.slice(strLength))
    .join('-');

  return answerString;
}
