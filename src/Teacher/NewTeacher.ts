import { 
  Teacher, 
  TEACHER_SPECIALTY 
} from "../Teacher/Teacher";
import { User } from "../User/User";

import { FileManager } from "../FileManager/FileManager";

import moment from 'moment'
moment.locale('pt-br');

const fm = new FileManager("./teachers.json");

console.log('Antes', fm.readFile());
const teachers = fm.readFile()

const TeachersArraySize = teachers.length + 1
const newIdTeacher: string = TeachersArraySize.toString()

const newTeacher: User = new Teacher (newIdTeacher, 'Caio', 'caio@gmail.com', [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.OOP])
// const newTeacher: User = new Teacher (newIdTeacher, process.argv[2], process.argv[3], [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.CSS])
teachers.push(newTeacher)

fm.writeFile(teachers)
console.log('Depois', fm.readFile());