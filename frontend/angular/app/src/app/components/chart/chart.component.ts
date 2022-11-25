import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Day';
  showYAxisLabel = true;
  yAxisLabel = 'Consumption';

  colorScheme: Color = {
    domain: ['#99CCE5', '#FF7F7F'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  single = [
    {
      name: 'Sunday',
      value: 8940000,
    },
    {
      name: 'Monday',
      value: 5000000,
    },
    {
      name: 'Wednesday',
      value: 7200000,
    },
    {
      name: 'Thursday',
      value: 6200000,
    },
    {
      name: 'Friday',
      value: 6200000,
    },
    {
      name: 'Saturday',
      value: 6200000,
    },
  ];

  constructor() {}
  ngOnInit(): void {}

  onSelect(event: Event) {
    console.log(event);
  }
}
