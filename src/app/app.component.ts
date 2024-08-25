import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,CurrencyPipe,NgFor],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas';

  peliculas = [
    {
      titulo:'deathpool and wolverine',
      fechaLanzamiento: new Date(),
      precio: 10000
    },
    {
      titulo:'Terminator 5',
      fechaLanzamiento: new Date("2026-04-08"),
      precio: 25000
    },
    {
      titulo:'Superman 9',
      fechaLanzamiento: new Date("2025-06-12"),
      precio: 35000
    },

  ];




  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
