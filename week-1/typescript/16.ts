/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */
type studType =  {
  name: string;
  mark: number;
}[]

const student:studType = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];

function averageCalc() {
  const length = student.length;
  let total = 0;
  let average = 0;
  let grade = "";
  for (let x = 0; x < length; x++) {
    total += student[x]?.mark;
  }
  average = total / length;

  if (average < 60) {
    return (grade = "F");
  } else if (average > 60 && average < 69) {
    return (grade = "D");
  } else if (average > 70 && average < 79) {
    return (grade = "C");
  } else if (average > 80 && average < 89) {
    return (grade = "B");
  } else {
    return (grade = "A");
  }
}

console.log(averageCalc());
