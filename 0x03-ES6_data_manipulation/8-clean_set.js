export default function cleanSet(set, startString) {
  if (!set && !startString) {
    return '';
  }

  if (!(set instanceof Set) && !(startString instanceof String)) {
    return '';
  }

  const strLength = startString.length;
//   if (strLength === 0) {
//     return '';
//   }

  const answerString = [...set]
    .filter((value) => value.startsWith(startString))
    .map((eligibleValue) => eligibleValue.slice(strLength))
    .join('-');

  return answerString;
}
