import { FileManager } from "../FileManager/FileManager";

import moment from 'moment'
moment.locale('pt-br');

const fm = new FileManager("./teachers.json");

fm.setFilePath("students.json");
const students = fm.readFile()

const chooseStudentId = '1' //escolhendo o aluno por ID 

for (let i = 0; i < students.length; i++) {
  if (students[i].id === chooseStudentId) {
    const studentBirthDate = students[i].birthDate

    const birthDate = moment(studentBirthDate, 'DD/MM/YYYY')
    const age = moment().diff(birthDate, "years").toString()

    console.log(students[i].name +'. Nascido em', studentBirthDate)
    console.log( 'Tem ', age , ' anos.')
  }
}
//Para rodar o código acima, digite no terminal: npm run get-student-age