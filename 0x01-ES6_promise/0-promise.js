export default function getResponseFromAPI() {
  return new Promise(
    (resolve, reject) => {
      try { return resolve(); } catch (err) { return reject(err); }
    },
  );
}
