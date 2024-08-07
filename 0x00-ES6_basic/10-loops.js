export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];
  for (const arr of array) {
    const idx = array.indexOf(arr);
    appendArray[idx] = appendString + arr;
  }

  return appendArray;
}
