import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css'],
})
export class ConsumptionComponent implements OnInit {
  formDevice!: FormGroup;
  submitted = false;
  devices: any;

  constructor(
    private api: FirestoreService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formDevice = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
    });
    this.getDevices();
  }

  detailsDevice(id: any) {
    console.log(id);
    this.router.navigate(['/chart']);
  }

  onSubmit() {
    this.submitted = true;
    if (this.formDevice.invalid) {
      Swal.fire('Petición Incompleta', 'Verifique los campos', 'error');
      return;
    } else {
      var formData: any = new FormData();
      formData.append('name', this.formDevice.value.name);
      formData.append('category', this.formDevice.value.category);
      formData.append('user', localStorage.getItem('localUser'));
      this.api.addDevice(formData).subscribe((data) => {
        Swal.fire('Petición Completada', 'Dispositivo agregado', 'success');
        this.router.navigate(['/consumption']);
      });
    }
  }

  getDevices() {
    var formData: any = new FormData();
    formData.append('user', localStorage.getItem('localUser'));
    this.api.getUserDevices(formData).subscribe((data) => {
      this.devices = data;
      console.log(this.devices);
    });
  }
}
