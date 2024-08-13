export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }

  if (!(set instanceof Set) || !(startString instanceof String)) {
    return '';
  }

  const strLength = startString.length;
  if (strLength === 0) {
    return '';
  }

  const answerString = [...set]
    .filter((value) => String(value).startsWith(startString))
    .map((eligibleValue) => String(eligibleValue).substring(strLength))
    .join('-');

  return answerString;
}
