function GPA() {
  let totalQP = 0;
  let totalHrs = 0;

  // loop to get course grades and credit hours
  while (true) {
    const grade = prompt("Enter your course grade:");
    if (grade === null) {
      break; // user clicked Cancel, exit the loop
    }

    const hrs = parseFloat(prompt("Enter the number of credit hours for this course:"));
    totalHrs += hrs; // add hours to total

    // calculate quality points based on grade and add to total quality points
    if (grade >= 90) {
      totalQP += 4 * hrs;
    } else if (grade >= 80) {
      totalQP += 3 * hrs;
    } else if (grade >= 70) {
      totalQP += 2 * hrs;
    } else if (grade >= 60) {
      totalQP += hrs;
    }
  }

  // calculate and output GPA
  const gpa = totalQP / totalHrs;
  alert("Your GPA for the semester is: " + gpa.toFixed(2));
}
