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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private service: FirestoreService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      Swal.fire('Intente nuevamente', 'Error al crear el usuario', 'error');
      return;
    } else {
      var formData: any = new FormData();
      formData.append('email', this.registerForm.value.email);
      formData.append('username', this.registerForm.value.username);
      formData.append('password', this.registerForm.value.password);
      this.service.registerUser(formData).subscribe((data) => {
        console.log(data);
        if (data != null) {
          Swal.fire(
            'Bienvenido a Smart Home',
            'Usuario creado con éxito',
            'success'
          );
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/register']);
        }
      });
    }
  }
}
