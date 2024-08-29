import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ejercicio-clase01';

  //edades que recibo por el Forms Module por el bindeo    
  edadUno: number = 0;
  edadDos: number = 0;

  suma: number = 0;
  promedio: number = 0;

  calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }


}
