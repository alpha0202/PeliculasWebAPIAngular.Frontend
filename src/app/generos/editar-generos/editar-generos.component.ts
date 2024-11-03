import { Component, Input, input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-generos',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent {
  @Input({transform:numberAttribute})
  id!: number;

  genero: GeneroDTO = {id: 1, nombre: 'Acción'};


guardarCambios(genero: GeneroCreacionDTO) {
console.log('editando el género',genero);
}

}
