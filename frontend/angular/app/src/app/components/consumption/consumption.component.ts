import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css'],
})
export class ConsumptionComponent implements OnInit {
  devices: any[] = [
    {
      name: 'Fridge',
      category: 'Energy',
    },
    {
      name: 'Washing machine',
      category: 'Water',
    },
    {
      name: 'TV',
      category: 'Energy',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addDevice() {}

  detailsDevice() {}
}
