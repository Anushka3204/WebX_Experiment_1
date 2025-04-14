const studentName = "Anushka Shahane";
const subject1 = 45;
const subject2 = 38;
const subject3 = 50;

// Step 2: Calculate the average marks
const totalMarks = subject1 + subject2 + subject3;
const averageMarks = totalMarks / 3;

const isPassed = averageMarks >= 40;

console.log(`Student Name: ${studentName}`);
console.log(`Average Marks: ${averageMarks}`);
console.log(`Result: ${isPassed ? "Passed" : "Failed"}`);
