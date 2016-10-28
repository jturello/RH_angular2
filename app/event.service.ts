import { Injectable } from '@angular/core';

import { Event } from './event.model';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  getEvents():  Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }

    getEventsSlowly(): Promise<Event[]> {
      return new Promise<Event[]>(resolve =>
        setTimeout(resolve, 2000)) // 2 second delay
        .then(() => this.getEvents());
    }
}
