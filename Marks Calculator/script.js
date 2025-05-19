document.getElementById("marks-calc").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const maths = parseFloat(document.getElementById("marks1").value);
  const english = parseFloat(document.getElementById("marks2").value);
  const science = parseFloat(document.getElementById("marks3").value);
  const disp = document.getElementById("marks-disp");

  if (!name || isNaN(maths) || isNaN(english) || isNaN(science)) {
    disp.innerText = "Please fill all fields correctly.";
    return;
  }

  let avgMarks = (maths + english + science) / 3;
  let grade = "";
  if (avgMarks >= 90) {
    grade = "A+";
  } else if (avgMarks >= 80) {
    grade = "A";
  } else if (avgMarks >= 70) {
    grade = "B+";
  } else if (avgMarks >= 60) {
    grade = "B";
  } else if (avgMarks >= 50) {
    grade = "C+";
  } else if (avgMarks >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }

  if(grade == "A+" || grade == "A" || grade == "B+" || grade == "B") {
    disp.innerText = `${name}, your grade is ${grade} (Average: ${avgMarks.toFixed(2)})`;
    disp.style.color = "green";
  }else if(grade == "C+" || grade == "C") {
    disp.innerText = `${name}, your grade is ${grade} (Average: ${avgMarks.toFixed(2)})`;
    disp.style.color = "orange";
  } else {
    disp.innerText = `${name}, your grade is ${grade},You aren't elligible (Average: ${avgMarks.toFixed(2)})`;
    disp.style.color = "red";
  }
  
});

document.getElementById("marks-clear").addEventListener("click", () => {
    document.getElementById("name").value = "";
    document.getElementById("marks1").value = "";
    document.getElementById("marks2").value = "";
    document.getElementById("marks3").value = "";
    document.getElementById("marks-disp").innerText = "";
});