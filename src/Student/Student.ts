import moment from 'moment';
moment.locale('pt-br');

import { User } from "../User/User";

export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: string,
    public hobbies: string[]
  ) {}
}
