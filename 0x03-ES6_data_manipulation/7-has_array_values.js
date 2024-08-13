export default function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);

  for (const value of arraySet.values()) {
    if (!set.has(value)) {
      return false;
    }
  }

  return true;
}
