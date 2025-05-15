document.getElementById('marks-calc').addEventListener('click', () => {
    let nameInput = document.getElementById('name');
    let name = nameInput.value;
    let maths = parseFloat(document.getElementById('marks1').value);
    let english = parseFloat(document.getElementById('marks2').value);
    let science = parseFloat(document.getElementById('marks3').value);

    let totalMarks = maths + english + science;
    let avgMarks = totalMarks / 3;
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
    } else {
        grade = 'F';
    }
    document.getElementById('marks-disp').innerText = grade;
});