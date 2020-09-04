import { User } from "../User/User";
import { Student } from "../Student/Student";

import { FileManager } from "../FileManager/FileManager";

import moment from 'moment'
moment.locale('pt-br');

const fm = new FileManager("./teachers.json");

fm.setFilePath("students.json");
console.log('Antes', fm.readFile());
const students = fm.readFile()

const StudentsArraySize = students.length + 1
const newIdStudent: string = StudentsArraySize.toString()

const newStudent: User = new Student (newIdStudent, 'Nogueira', 'nogueira@gmail.com', moment('01-10-1991', 'DD/MM/YYYY').format('DD/MM/YYYY'),['fazer nada', 'pescar'])

students.push(newStudent)

fm.writeFile(students);
console.log('Depois', fm.readFile());