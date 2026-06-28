let students = JSON.parse(localStorage.getItem("studentsList")) || [];
const currentYear = new Date().getFullYear();

//html elements
let name_input = document.getElementById("student_name");
let grade_input = document.getElementById("student_grade");
let gpa_input = document.getElementById("student_gpa");
let graduation_input = document.getElementById("student_graduation");
let submit_btn = document.getElementById("submit_btn");
let show_btn = document.getElementById("show_btn");
let student_table = document.getElementById("student_table");
console.log(students);

const generateID = () => {
  let currentID = students?.at(-1)?.id ?? 0;
  let generatedID = currentID + 1;
  return generatedID;
};

const addStudent = (name, grade, gpa, gradution) => {
  if (gradution > currentYear) {
    // for (item of students) {
    //   if (item.id == id) {
    //     console.log(`Student with ID:${id} already exists!`);

    //     return;
    //   }
    // }
    if (grade > 0 && grade < 12) {
      students = [
        ...students,
        { id: generateID(), name, grade, gpa, gradution },
      ];
      localStorage.setItem("studentsList", JSON.stringify(students));

      console.log("Saved successfully");
    //   name_input.textContent = "";
    //   gpa_input.innerHTML = "";
    //   grade_input.innerHTML = "";
    //   graduation_input.innerHTML = "";
    } else {
      console.log(`${grade} can't be saved`);
    }
  } else {
    console.log(`Graduation year must be higher than ${currentYear}`);
  }
};

const showStudents = () => {
  let students = JSON.parse(localStorage.getItem("studentsList")) || [];

  for (item of students) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    student_table.appendChild(tr);
    tr.appendChild(td);
    td.textContent = item.id;
    td.textContent = item.name;
    td.textContent = item.grade;
    td.textContent = item.gpa;
    td.textContent = item.graduation;
  }
};

//eventListeners
submit_btn.addEventListener("click", () => {
  addStudent(
    name_input.value,
    Number(grade_input.value),
    Number(gpa_input.value),
    Number(graduation_input.value)
  );
  console.log(students);
});

show_btn.addEventListener("click", showStudents);
