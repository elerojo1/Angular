import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  id: string;
  articulo: string;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', articulo: 'Naranja', precio: 12.3},
  {id: '2', articulo: 'Pera', precio: 14.3},
  {id: '3', articulo: 'Manzana', precio: 10.0},
  {id: '4', articulo: 'Plátano', precio: 8.5},
  {id: '5', articulo: 'Mango', precio: 20.0},
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('05-sintaxis-switch-if-for');

  displayedColumns: string[] = ['id', 'articulo', 'precio'];
  dataSource = ELEMENT_DATA;

  nombre: string = 'Lenin Rojo';
  edad: number = 38;

  articulos = [
    {
      'id': 1,
      'articulo': 'Naranja',
      'precio': 12.3
    },
    {
      'id': 2,
      'articulo': 'Pera',
      'precio': 14.3
    }
  ];

  numeroAletorio()
  {
    return Math.floor(Math.random() * 3) + 1;
  }
}