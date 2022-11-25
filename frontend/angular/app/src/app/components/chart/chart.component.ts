import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  id: any;
  dataReceived = false;
  measurement: [] = [];
  currentCost = 0;
  currentConsumption = 0;
  currentDevice: any = new Object();

  view: [number, number] = [700, 600];
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

  constructor(private route: ActivatedRoute, public api: FirestoreService) {}

  ngOnInit(): void {
    var formData: any = new FormData();
    var formDevice: any = new FormData();
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('var');
      formData.append('idDevice', this.id);
      formDevice.append('id', this.id);
    });
    this.api.getMeasurementById(formData).subscribe((res) => {
      this.measurement = res['measurement'];
      this.dataReceived = true;
      this.measurement.forEach((element: any) => {
        this.currentConsumption += element.value;
      });
      this.currentConsumption = this.currentConsumption / 1000;
      this.currentCost = this.currentConsumption * 85;
    });
    this.api.getDeviceById(formDevice).subscribe((res) => {
      this.currentDevice = res;
      console.log(this.currentDevice);
    });
  }

  onSelect(event: Event) {
    console.log(event);
  }
}
