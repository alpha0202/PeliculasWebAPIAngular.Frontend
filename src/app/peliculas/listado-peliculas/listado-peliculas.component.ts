import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input({required:true})
  peliculas! : any[];


}
