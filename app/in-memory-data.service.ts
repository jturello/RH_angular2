import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let events = [
      {name: 'event01', patient_name: 'joe schmoe', problem: 'problem01', date_str: '01/01/2016', isPaliative: false}
      , {name: 'event02', patient_name: 'joe schmoe', problem: 'problem02', date_str: '01/05/2016', isPaliative: false}
      , {name: 'event03', patient_name: 'joe schmoe', problem: 'problem03', date_str: '01/05/2016', isPaliative: false}
      , {name: 'event04', patient_name: 'joe schmoe', problem: 'problem04', date_str: '01/06/2016', isPaliative: false}
      , {name: 'event05', patient_name: 'joe schmoe', problem: 'problem05', date_str: '01/10/2016', isPaliative: false}
      , {name: 'event06', patient_name: 'joe schmoe', problem: 'problem06', date_str: '01/12/2016', isPaliative: true}
      , {name: 'event07', patient_name: 'joe schmoe', problem: 'problem07', date_str: '01/12/2016', isPaliative: false}
      , {name: 'event08', patient_name: 'joe schmoe', problem: 'problem08', date_str: '01/15/2016', isPaliative: false}
      , {name: 'event09', patient_name: 'joe schmoe', problem: 'problem09', date_str: '01/15/2016', isPaliative: false}
      , {name: 'event10', patient_name: 'joe schmoe', problem: 'problem10', date_str: '01/15/2016', isPaliative: true}
      , {name: 'event11', patient_name: 'joe schmoe', problem: 'problem11', date_str: '01/31/2016', isPaliative: false}
    ];
    return {events};
  }
}
