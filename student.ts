const studentName: string = "Anushka Shahane";
const subject1: number = 45;
const subject2: number = 38;
const subject3: number = 50;

// Step 2: Calculate the average marks
const totalMarks: number = subject1 + subject2 + subject3;
const averageMarks: number = totalMarks / 3;

const isPassed: boolean = averageMarks >= 40;

console.log(`Student Name: ${studentName}`);
console.log(`Average Marks: ${averageMarks}`);
console.log(`Result: ${isPassed ? "Passed" : "Failed"}`);
