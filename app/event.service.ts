import { Injectable } from '@angular/core';

import { Event } from './event.model';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  getEvents():  Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }

}
