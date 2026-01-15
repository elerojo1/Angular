import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04-interpolacion-html-angular';
  nombre = 'Lenin Moreno';
  edad = 57;
  ultimosTresSueldos: number[] = [4500, 4700, 5000];
  totalSueldos = 0;
  activo = true;
  link = 'https://www.google.com';
  
  Activo(): string {
    if(this.activo){
      return 'Empleado Activo';
    }else{
      return 'Empleado Inactivo';
    }
  }

  CalcularSueldos() : number {
    const numeroSueldos: number = 3;
    for(let i = 0; i < numeroSueldos; i++){
      this.totalSueldos += this.ultimosTresSueldos[i];
    }

    return this.totalSueldos;
  }
}
