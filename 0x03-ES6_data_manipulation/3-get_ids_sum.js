export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  const counter = 0;
  const idSum = students.reduce(
    (accumulator, student) => accumulator + student.id, counter,
  );

  return idSum;
}
