const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGradesOnly = grades.filter(function(grade) {
  return (grade <= 70);
})

console.log("These are the passing:", passingGradesOnly);