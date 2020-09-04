//As instâncias abaixo estão também saparadas em suas devidas pastas. Não tive tempo de testar todas separadamente mas aqui no indice
//basta digitar o código a seguir para popular os arquivos conforme pede o anunciado do projeto: npm start
import { 
  Teacher, 
  TEACHER_SPECIALTY 
} from "./Teacher/Teacher";
import { User } from "./User/User";
import { Student } from "./Student/Student";
import { Mission } from "./Missions/Mission";
import { FullTimeMission } from "./FulltimeMission/FulltimeMission";
import { NightMission } from "./NightMission/NightMission";

import { FileManager } from "./FileManager/FileManager";

import moment from 'moment'
moment.locale('pt-br');

const fm = new FileManager("./teachers.json");
///////// Professor
console.log('Professores antes', fm.readFile());
const teachers = fm.readFile()

let newIdTeacher = teachers.length + 1

const newTeacher1: User = new Teacher (newIdTeacher, 'Caio', 'caio@gmail.com', [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.OOP])
teachers.push(newTeacher1)
newIdTeacher += 1;
const newTeacher2: User = new Teacher (newIdTeacher, 'Mateus', 'mateus@gmail.com', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.OOP])
teachers.push(newTeacher2)
newIdTeacher += 1;
const newTeacher3: User = new Teacher (newIdTeacher, 'Amanda', 'amanda@gmail.com', [TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.TESTES])
teachers.push(newTeacher3)
newIdTeacher += 1;
const newTeacher4: User = new Teacher (newIdTeacher, 'Soter', 'soter@gmail.com', [TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.REACT])
teachers.push(newTeacher4)

fm.writeFile(teachers)
console.log('Professores depois', fm.readFile(), '\n');
/////////

///////// Estudante
fm.setFilePath("students.json");
console.log('Estudantes antes', fm.readFile());
const students = fm.readFile()

let newIdStudent = students.length + 1

const newStudent1: User = new Student (
  newIdStudent, 'Jay', 
  'jay@gmail.com', 
  moment('16-05-1984', 'DD/MM/YYYY').format('DD/MM/YYYY'),
  ['estudar', 'chorar depois de estudar']
)
students.push(newStudent1)
newIdStudent += 1;

const newStudent2: User = new Student (
  newIdStudent, 'Rapha', 
  'rapha@gmail.com', 
  moment('04-07-1993', 'DD/MM/YYYY').format('DD/MM/YYYY'),
  ['skate', 'correr', 'jogar no ps4']
)
students.push(newStudent2)

fm.writeFile(students);
console.log('Estudantes depois', fm.readFile(), '\n');
/////////

///////// Pegar idade do estudante
fm.setFilePath("students.json");
const allStudents = fm.readFile()
if(allStudents.length > 0){
  const chooseStudentId = 1 //escolhendo o aluno por ID 

  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i].id === chooseStudentId) {
      const studentBirthDate = allStudents[i].birthDate
  
      const birthDate = moment(studentBirthDate, 'DD/MM/YYYY')
      const age = moment().diff(birthDate, "years").toString()
  
      console.log(allStudents[i].name +'. Nascido em', studentBirthDate)
      console.log( 'Tem ', age , ' anos.', '\n')
    }
  }
}
/////////

///////// Turma Full time
fm.setFilePath("teachers.json");
const getTeachers = fm.readFile()

const chooseTeacherId = 2 //escolhendo aqui qual professor adicionar a turma, 1 a 1

let chosenTeacher = []
for (let i = 0; i < getTeachers.length; i++) {
  if (getTeachers[i].id === chooseTeacherId) {
    chosenTeacher.push(getTeachers[i])
  }
}

fm.setFilePath("students.json");
const getStudents = fm.readFile()

const chooseStudentId = 1 //escolhendo aqui qual aluno adicionar a turma, 1 a 1

let chosenStudent = []
for (let i = 0; i < getStudents.length; i++) {
  if (getStudents[i].id === chooseStudentId) {
    chosenStudent.push(getStudents[i])
  }
}

fm.setFilePath("missions.json");
console.log('Turmas antes', fm.readFile());
const missions = fm.readFile()

const missionsArraySize = missions.length + 1
const newIdMission: string = missionsArraySize.toString()

const newMissionFt: Mission = new FullTimeMission  (
  newIdMission, 
  moment('18-05-2020', 'DD/MM/YYYY').format('DD/MM/YYYY'), 
  moment('18-11-2020', 'DD/MM/YYYY').format('DD/MM/YYYY'),
  chosenTeacher, 
  chosenStudent,
  4,
)
newMissionFt.setName('Turing')
missions.push(newMissionFt)

fm.writeFile(missions);
console.log('Turmas', fm.readFile(), '\n');

///////// Turma Night time
fm.setFilePath("teachers.json");
const getTeachersNight = fm.readFile()
console.log('Turmas antes', fm.readFile());

const chooseTeacherIdNight = 1 //escolhendo aqui qual professor adicionar a turma, 1 a 1

let chosenTeacherNight = []
for (let i = 0; i < getTeachersNight.length; i++) {
  if (getTeachersNight[i].id === chooseTeacherIdNight) {
    chosenTeacherNight.push(getTeachersNight[i])
  }
}

fm.setFilePath("students.json");
const getStudentsNight = fm.readFile()

const chooseStudentIdNight = 2 //escolhendo aqui qual aluno adicionar a turma, 1 a 1

let chosenStudentNight = []
for (let i = 0; i < getStudentsNight.length; i++) {
  if (getStudentsNight[i].id === chooseStudentIdNight) {
    chosenStudentNight.push(getStudentsNight[i])
  }
}

fm.setFilePath("missions.json");
console.log('Turmas night antes', fm.readFile());
const allMissions = fm.readFile()

const allMissionsArraySize = allMissions.length + 1
const newIdMissionNight: string = allMissionsArraySize.toString()

const newMissionNt: Mission = new NightMission  (
  newIdMissionNight, 
  moment('18-08-2020', 'DD/MM/YYYY').format('DD/MM/YYYY'), 
  moment('18-02-2021', 'DD/MM/YYYY').format('DD/MM/YYYY'),
  chosenTeacherNight, 
  chosenStudentNight,
  1,
)
newMissionNt.setName('Tang')
missions.push(newMissionNt)

fm.writeFile(missions);
console.log('Turmas depois', fm.readFile());
/////////
