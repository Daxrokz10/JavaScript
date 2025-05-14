

document.getElementById('marks-calc').addEventListener('click', () => {
let nameInput = document.getElementById('name');
let name = nameInput.value;
let mathsInput = document.getElementById('marks1');
let maths = mathsInput.value;
let englishInput = document.getElementById('marks2');
let english = englishInput.value;
let scienceInput = document.getElementById('marks3');
let science = scienceInput.value;

let avgMarks = (maths + english + science) / 3;
let grade = '';

if(avgMarks >= 90){
    grade = 'A+';
}
else if(avgMarks >= 80){
    grade = 'A';
}
else if(avgMarks >= 70){
    grade = 'B+';
}
else if(avgMarks >= 60){
    grade = 'B';
}
else if(avgMarks >= 50){
    grade = 'C+';
}
else if(avgMarks >= 40){
    grade = 'C';
}
else if(avgMarks >= 33){
    grade = 'D';
}
    document.getElementById('marks-disp').innerText = grade;
});