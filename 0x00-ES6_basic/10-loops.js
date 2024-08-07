export default function appendToEachArrayValue(array, appendString) {
  for (let arr of array) {
    arr = appendString + arr;
  }

  return array;
}
