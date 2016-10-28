import { Component } from '@angular/core';
import { Event } from './event.model';
import { Patient } from './patient.model';

var patient01 = new Patient(1, 'Joe Schmoe', 'AML with myelodysplasia');

var jan0116 = new Date(2016, 0, 1);
var jan0516 = new Date(2016, 0, 5);
var jan0616 = new Date(2016, 0, 6);
var jan1016 = new Date(2016, 0, 10);
var jan1216 = new Date(2016, 0, 12);
var jan1516 = new Date(2016, 0, 15);
var jan3116 = new Date(2016, 0, 31);

const EVENTS: Event[] = [
    {name: 'event01', patient: patient01, date: jan0116}
    , {name: 'event02', patient: patient01, date: jan0516}
    , {name: 'event03', patient: patient01, date: jan0516}
    , {name: 'event04', patient: patient01, date: jan0616}
    , {name: 'event05', patient: patient01, date: jan1016}
    , {name: 'event06', patient: patient01, date: jan1216}
    , {name: 'event07', patient: patient01, date: jan1216}
    , {name: 'event08', patient: patient01, date: jan1516}
    , {name: 'event09', patient: patient01, date: jan1516}
    , {name: 'event10', patient: patient01, date: jan1516}
    , {name: 'event11', patient: patient01, date: jan3116}
  ]


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

  `
})

export class AppComponent {
  events = EVENTS;
}
