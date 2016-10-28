import { Component } from '@angular/core';
import { Event } from './event.model';
import { Patient } from './patient.model';
import { EventService } from './event.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>Grand Rounds Event Timeline</h1>

    <h2>Events</h2>

    <ul class="events">
      <li *ngFor="let event of events">
        {{event.patient.name}}, {{event.patient.problem}}, {{event.name}}, {{event.date.getMonth() + 1}}/{{event.date.getDate()}}/{{event.date.getFullYear()}}
      </li>
    </ul>

    <!--
        <form>
        <div class="row">
          <div class='col-sm-5'>
            <input [ngModel]="problem" class="input-sm" #problem>
          </div>
          <div class='col-sm-5'>
            <input [ngModel]="patient" class="input-sm" #patient>
          </div>
          <div class='col-sm-2'>
            <button (click)="fetch_data(public problem:string, public patient: string, public period_start?: date, public period_end?: date)">Submit</button>
          </div>
        </div>
        <div class="row">
          <div class='col-sm-5'>
            <input [ngModel]="period_start" class="input-sm" #period_start>
          </div>
          <div class='col-sm-5'>
            <input [ngModel]="period_end" class="input-sm" #period_end>
          </div>
      </form>
      -->
  `,
  providers: [EventService]
})

export class AppComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) { };

  getEvents(): void {
    this.events = this.eventService.getEvents(); // .then(events => this.events = events);
  }

  ngOnInit(): void {
    this.getEvents();
  }

}
