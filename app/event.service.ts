import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from './event.model';
// import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private eventsUrl = 'app/events'; //URL to web api

  constructor(private http: Http) { }

  getEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
               .toPromise()
               .then(response => response.json().data as Event[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  // getEvents():  Promise<Event[]> {
  //   return Promise.resolve(EVENTS);
  // }
  //
  //   getEventsSlowly(): Promise<Event[]> {
  //     return new Promise<Event[]>(resolve =>
  //       setTimeout(resolve, 2000)) // 2 second delay
  //       .then(() => this.getEvents());
  //   }
}
