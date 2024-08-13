export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const nearbyStudents = students.filter((student) => student.location === city);

  return nearbyStudents;
}
