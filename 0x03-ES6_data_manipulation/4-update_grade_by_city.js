export default function updateStudentGradeByCity(students, city, newGrades) {
  const newGradeList = students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find(
        ({ studentId }) => studentId === student.id,
      );

      const newStudent = { ...student, grade: grade ? grade.grade : 'N/A' };

      return newStudent;
    });

  return newGradeList;
}
