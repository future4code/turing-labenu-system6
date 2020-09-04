import { Teacher } from "../Teacher/Teacher";
import { Student } from "../Student/Student";

import moment from 'moment';
moment.locale('pt-br');

export abstract class Mission {
  private name: string = "";
  // não colocamos no construtor,
  // porque o nome da turma de noite tem restrição
  // então é melhor controlar isso com um set

  constructor(
    private id: string,
    private startDate: string,
    private endDate: string,
    private teachers: Teacher[] = [],
    private students: Student[] = [],
    private currentModule: number
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(name: string): string {
    return this.name;
  }

  public getStartDate(): string {
    return this.startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }

  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public setName(name: string) {
    this.name = name;
  }
}