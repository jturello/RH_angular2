import { Component } from '@angular/core';

// export class Patient {
//   id: number;
//   name: string;
// }



export class Event {
  name: string;
  patient: string;
  problem: string;
  date: Date;
  // start_data: Date;
  // end_date: Date;
}


var jan0116 = new Date(2016,1,1);
var jan0516 = new Date(2016,1,5);
var jan0616 = new Date(2016,1,6);
var jan1016 = new Date(2016,1,10);
var jan1216 = new Date(2016,1,12);
var jan1516 = new Date(2016,1,15);
var jan3116 = new Date(2016,1,31)

const EVENTS: Event[] = [
    {name: 'event01', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan0116}
    , {name: 'event02', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan0516}
    , {name: 'event03', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan0516}
    , {name: 'event04', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan0616}
    , {name: 'event05', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan1016}
    , {name: 'event06', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan1216}
    , {name: 'event07', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan1216}
    , {name: 'event08', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan1516}
    , {name: 'event09', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan1516}
    , {name: 'event10', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan1516}
    , {name: 'event11', patient: 'joe schmoe', problem: 'AML with myelodysplasia', date: jan3116}
    //, {name: 'event01b', patient: 'jane doe', problem: 'diatetes myallitus'}
    // , {name: 'event02b', patient: 'jane doe', problem: 'diatetes myallitus'}
    // , {name: 'event03b', patient: 'jane doe', problem: 'diatetes myallitus'}
    // , {name: 'event04b', patient: 'jane doe', problem: 'diatetes myallitus'}
    // , {name: 'event05b', patient: 'jane doe', problem: 'diatetes myallitus'}
  ]
    // constructor(public patient_id: number, public patient_name: string, public problem: string, public event: string, public period_start?: Date, public period_end?: Date ) {
  //   this.patient_id = patient_id;
  //   this.patient_name = patient_name;
  //   this.problem = problem;
  //   this.event = event;
  //   if (period_start && period_end) {
  //     this.period_start = period_start;
  //     this.period_end = period_end;
  //   } else {
  //     period_start = period_end = null;
  //   }
  // }
// }

@Component({
  selector: 'my-app',
  template: `
    <h1>Grand Rounds Event Timeline</h1>
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
      <h2>Events</h2>
      <ul class="events">
        <li *ngFor="let event of events" style="list-style-type: none;">
          {{event.patient}}, {{event.problem}}, {{event.name}}, {{event.date}}
        </li>
      </ul>
  `
})

export class AppComponent {
  events = EVENTS;
}
