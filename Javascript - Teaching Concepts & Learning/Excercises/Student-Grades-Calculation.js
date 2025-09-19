//  COMPUTE THE AVG GRADE OF THE STUDENTS AND GRADE

let students = [['Dave', 77] , ['Me', 53], ['Him', 89], ['Ast', 99]];
let avgMark = 0;

for (let i = 0; i < students.length; i++) {
    avgMark += students[i][1];
    var StdGrade = avgMark / students.length;
}


switch (Grade) {
    case (StdGrade >= 90)  :
        console.log('A');
        break;
    case StdGrade >= 80 :
        console.log('B');
        break;
    case StdGrade >= 70 :
        console.log('C');
        break;
    case StdGrade >= 60 :
        console.log('D');
        break;
    default:
        console.log("F");
}

console.log(StdGrade);