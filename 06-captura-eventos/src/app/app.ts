import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('06-captura-eventos');
  numero = 0;

  incrementar(){
    this.numero++;
  }

  decrementar(){
    this.numero--;
  }
}
