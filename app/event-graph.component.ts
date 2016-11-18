import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { Patient } from './patient.model';
import { EventService } from './event.service';
import * as d3 from 'd3';



@Component({
  selector: 'event-graph',
  template: `

    <ul class="events">
      <li *ngFor="let event of events">
        {{event.PatientID}}, {{event.Problem}}, {{event.ClinicalEvent}}, {{event.EventDate}}, {{ event.EventType }}
      </li>
    </ul>
  `
})

export class EventGraph implements OnInit {
  events: Event[];
  public svg;
  graph;
  yScale():void { return null;};
  yAxis;
  xAxis;
  margin = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  }
  svgH = 400;
  svgW = "100%";

  constructor(private eventService: EventService) { };

  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events).then(events => this.drawGraph(events));
  }
  drawGraph(data: any[]): void {
    this.svg = d3.select("body").append("svg")
      .attr("height", this.svgH)
      .attr("width", this.svgW);

    this.graph = this.svg.append("g")
      .attr("transform", "translate("+this.margin.left+", "+this.margin.top+")")

    // Define scales
    let xScale = d3.scaleTime()
      .domain([
        d3.min(data, function(d) { return new Date(d.EventDate)}),
        d3.max(data, function(d) { return new Date(d.EventDate)})
      ])
      .range([0, parseInt(this.svg.style("width")) - this.margin.left - this.margin.right ])
      .nice();

    this.yAxis = d3.axisBottom(xScale);
    let horizGuide = this.graph.append('g').attr("transform", "translate(0, 150)")
    this.yAxis(horizGuide);

    var pointHeight = function(d, i, h) {
      if(d.EventType == 1) {
        return h * (1/5) + i * 20;
      }
      else {
        return h * (4/5) - i * 20;
      }
    }
    this.svg.selectAll("circle")
      .data(data)
      .enter()
      .append("g").classed("datapoint", true)
      .append("circle")
      .attr("cx", function(d) {
        return xScale(new Date(d.EventDate))
      })
      .attr("cy", function(d, i) {return pointHeight(d, i, 400)})
      .attr("r", 5)
      .attr("fill", "black")
      .exit();

      this.svg.selectAll(".datapoint")
        .data(data)
        .append("text")
        .text(function(d) { return d.ClinicalEvent })
        .attr("x", function(d) {
          return xScale(new Date(d.EventDate)) + 7;
        })
        .attr("y", function(d, i) { return pointHeight(d, i, 400 ) + 3})
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
  }
  updateGraph(data): void {

  }
  ngOnInit(): void {
    this.getEvents();
  }

}
