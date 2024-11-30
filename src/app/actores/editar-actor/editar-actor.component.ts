
import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO,ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id!:number;

  actor: ActorDTO =  {id: 1, nombre: 'tom cruise', fechaNacimiento: new Date('1998-02-25')}

  guardarCambios(actor: ActorCreacionDTO){
    console.log('editando el actor',actor);
  }

}
