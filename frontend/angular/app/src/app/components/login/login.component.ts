import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import Swal from 'sweetalert2';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formlogin!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: FirestoreService
  ) {}

  ngOnInit(): void {
    this.formlogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  goRegister() {
    this.router.navigate(['register']);
  }
  onSubmit() {
    this.submitted = true;
    var formData: any = new FormData();

    if (this.formlogin.invalid) {
      Swal.fire('Intente nuevamente', 'Formulario Incompleto', 'error');
      return;
    } else {
      formData.append('username', this.formlogin.value.user);
      formData.append('password', this.formlogin.value.password);
      this.service.getUserLogin(formData).subscribe((data) => {
        if (data != null) {
          localStorage.setItem('localUser', data.username);
          this.router.navigate(['home']);
        } else {
          Swal.fire(
            'Intente nuevamente',
            'Nombre de usuario o contraseña incorrectos',
            'error'
          );
        }
      });
    }
  }
}
