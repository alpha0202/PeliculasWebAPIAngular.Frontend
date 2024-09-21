import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  private router = inject(Router);
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: [''],
  })

  guardarCambios(){
    // //...guardar los cambios
    // this.router.navigate(['/generos'])

    console.log(this.form.value);
  }
}
