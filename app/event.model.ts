import { Patient } from './patient.model';

export class Event {

  constructor(public name: string, public patient: Patient, public date: Date, public isPaliative: boolean) {
    this.name = name;
    this.patient = patient;
    this.date = date;
    this.isPaliative = isPaliative;
  }

}

/*
export class Event {

  constructor(public name: string, public patient: Patient, public problem: string, public date: Date) {
    this.name = name;
    this.patient = patient;
    this.problem = problem;
    this.date = date;
  }
}
*/
