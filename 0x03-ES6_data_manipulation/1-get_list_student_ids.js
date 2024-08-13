export default function getListStudentIds(idArray) {
  if (idArray.isArray() === false) {
    return [];
  }

  const idList = idArray.map((element) => element.id);

  return idList;
}
