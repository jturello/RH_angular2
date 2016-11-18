import { Patient } from './patient.model';

export class Event {

  constructor(public PatientID: number, public EventType: number, public EventDate: string, public Problem: string, public ClinicalEvent: string) {

    this.PatientID = PatientID;
    this.EventType = EventType;
    this.EventDate = EventDate;
    this.Problem = Problem;
    this.ClinicalEvent = ClinicalEvent;
  }

}


// this.name = name;
// this.patient_name = patient_name;
// this.problem = problem;
// this.date_str = date_str;
// this.eventType = eventType;
