import { Event } from './event.model';

export class Patient {

  constructor (public id: number, public name: string, public problem?: string, public events?: Event[]) {
    this.id = id;
    this.name = name;
    this.problem = problem;
    this.events = events
  };
}
