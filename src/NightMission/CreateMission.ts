import { Mission } from "../Missions/Mission";

import { NightMission } from "../NightMission/NightMission";

import { FileManager } from "../FileManager/FileManager";
import moment from 'moment'
moment.locale('pt-br');

const fm = new FileManager("./teachers.json");

fm.setFilePath("teachers.json");
const teachers = fm.readFile()

const chooseTeacherId = '1' //escolhendo aqui qual professor adicionar a turma, 1 a 1

let chosenTeacher = []
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].id === chooseTeacherId) {
    chosenTeacher.push(teachers[i])
  }
}

fm.setFilePath("students.json");
const students = fm.readFile()

const chooseStudentId = '3' //escolhendo aqui qual aluno adicionar a turma, 1 a 1

let chosenStudent = []
for (let i = 0; i < students.length; i++) {
  if (students[i].id === chooseStudentId) {
    chosenStudent.push(students[i])
  }
}

fm.setFilePath("missions.json");
console.log('Antes', fm.readFile());
const missions = fm.readFile()

const missionsArraySize = missions.length + 1
const newIdMission: string = missionsArraySize.toString()

const newMission: Mission = new NightMission  (
  newIdMission, 
  moment('18-08-2020', 'DD/MM/YYYY').format('DD/MM/YYYY'), 
  moment('18-02-2021', 'DD/MM/YYYY').format('DD/MM/YYYY'),
  chosenTeacher, 
  chosenStudent,
  1,
)

newMission.setName('Tang')
missions.push(newMission)

fm.writeFile(missions);
console.log('Depois', fm.readFile());