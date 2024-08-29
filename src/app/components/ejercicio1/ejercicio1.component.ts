import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {

  title = 'ejercicio-clase01';

  //edades que recibo por el Forms Module por el bindeo    
  edadUno: number | null = null;
  edadDos: number | null = null;
  promedio: number | null = null;
  suma: number | null = null;

  calcular(): void {
    if (this.edadUno !== null && this.edadDos !== null) {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = this.suma / 2;
    }
  }

  limpiar(): void {
    this.edadUno = null;
    this.edadDos = null;
    this.promedio = null;
    this.suma = null;
  }

  clearDefault(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value === '0') {
      input.value = '';
    }
  }

}
