import { Patient } from './patient.model';

export class Event {

  constructor(public name: string, public patient_name: string, public problem: string, public date_str: string, public isPaliative: boolean) {
    this.name = name;
    this.patient_name = patient_name;
    this.problem = problem;
    this.date_str = date_str;
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
