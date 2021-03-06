import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // let events = [
    //   {name: 'event01', patient_name: 'joe schmoe', problem: 'problem01', date_str: '01/01/2016', isPaliative: false}
    //   , {name: 'event02', patient_name: 'joe schmoe', problem: 'problem02', date_str: '01/05/2016', isPaliative: false}
    //   , {name: 'event03', patient_name: 'joe schmoe', problem: 'problem03', date_str: '01/05/2016', isPaliative: false}
    //   , {name: 'event04', patient_name: 'joe schmoe', problem: 'problem04', date_str: '01/06/2016', isPaliative: false}
    //   , {name: 'event05', patient_name: 'joe schmoe', problem: 'problem05', date_str: '01/10/2016', isPaliative: false}
    //   , {name: 'event06', patient_name: 'joe schmoe', problem: 'problem06', date_str: '01/12/2016', isPaliative: true}
    //   , {name: 'event07', patient_name: 'joe schmoe', problem: 'problem07', date_str: '01/12/2016', isPaliative: false}
    //   , {name: 'event08', patient_name: 'joe schmoe', problem: 'problem08', date_str: '01/15/2016', isPaliative: false}
    //   , {name: 'event09', patient_name: 'joe schmoe', problem: 'problem09', date_str: '01/15/2016', isPaliative: false}
    //   , {name: 'event10', patient_name: 'joe schmoe', problem: 'problem10', date_str: '01/15/2016', isPaliative: true}
    //   , {name: 'event11', patient_name: 'joe schmoe', problem: 'problem11', date_str: '01/31/2016', isPaliative: false}
    // ];

    let events = [
        {       PatientID: 1,
                EventType: 1,
                EventDate: "2010-02-01",
                Problem: "Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                ClinicalEvent: "Diagnosis"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-02-01",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Staging"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-03-18",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Aloxi"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-03-18",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Taxotere"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-05-20",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Tarceva"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-06-16",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Tarceva"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-06-17",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Gemzar"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-06-17",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Navelbine"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-06-27",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Aloxi"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-06-27",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Gemzar"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-06-27",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Navelbine"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-07-11",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Emend"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-07-11",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Gemzar"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-07-11",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Navelbine"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-07-21",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Emend"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-07-21",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Gemzar"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-07-21",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Navelbine"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-07",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Emend"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-07",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Gemzar"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-07",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Navelbine"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-14",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Emend"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-14",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Gemzar"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-14",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Navelbine"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-28",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Emend"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-28",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Gemzar"},
        {       "PatientID":1,
                "EventType":1,
                "EventDate":"2010-08-28",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Navelbine"},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-03-18",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Dexamethasone p.o."},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-03-19",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Neulasta"},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-06-27",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Dexamethasone i.v."},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-07-04",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Neupogen"},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-07-11",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Zofran"},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-07-21",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Zofran"},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-08-07",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Zofran"},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-08-14",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Zofran"},
        {       "PatientID":1,
                "EventType":0,
                "EventDate":"2010-08-28",
                "Problem":"Non-Small-Cell Lung Cancer, EGRF Mutation Positive, Stage IIIb",
                "ClinicalEvent":"Zofran"}
]
    return {events};
  }
}
