const students = require('./students')

var sum = 0;
var sumAbove40 = 0;
var countAbove40 = 0;
var sumBelow40 = 0;
var countBelow40 = 0;
var areThereStudentBelow30 = false
var allStudentsPassed = true

for(let i=0; i<students.length; i++) {
    sum = sum + students[i].marks
    if(students[i].marks > 40){
        sumAbove40 = sumAbove40 + students[i].marks
        countAbove40 = countAbove40 + 1
    }
    else {
        sumBelow40 = sumBelow40 + students[i].marks
        countBelow40 = countBelow40 + 1
    }

    if(students[i].marks <= 30) {
        areThereStudentBelow30 = true
    }

    if(students[i].marks <= 35) {
        areThereStudentBelow30 = false
    }
}

console.log(`Average marks in class: ${sum/students.length}`)
console.log(`Average marks in class above 40: ${sumAbove40/countAbove40}`)
console.log(`Average marks in class below 40: ${sumBelow40/countBelow40}`)

console.log(`There ${areThereStudentBelow30 ? "does not " : ""}exist a student below 30`)
console.log(`All students ${allStudentsPassed ? "passed" : "did not pass"}`)