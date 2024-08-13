export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }

  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer, 0, length);
  const intViewBuffer = new Int8Array(arrayBuffer);

  intViewBuffer[position] = value;

  return dataView;
}
