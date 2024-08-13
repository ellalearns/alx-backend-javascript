export default function getListStudentIds(idArray) {
  if (!Array.isArray(idArray)) {
    return [];
  }

  const idList = idArray.map((element) => element.id);

  return idList;
}
