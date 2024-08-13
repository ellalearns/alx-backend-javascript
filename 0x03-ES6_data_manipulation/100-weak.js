export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const oldCount = weakMap.get(endpoint);

  if (oldCount === undefined) {
    weakMap.set(endpoint, 1);
  } else if (oldCount >= 4) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, oldCount + 1);
  }
}
