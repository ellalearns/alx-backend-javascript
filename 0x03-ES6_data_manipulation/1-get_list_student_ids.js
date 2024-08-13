export default function getListStudentIds(idArray) {
  if (!idArray.isArray()) {
    return [];
  }

  const idList = idArray.map((element) => element.id);

  return idList;
}
