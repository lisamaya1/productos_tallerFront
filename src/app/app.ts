// src/app/app.ts (o app.component.ts)

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
// Asegúrate de que esta ruta es correcta
import { ProductoListComponent } from './components/productos/producto-list/producto-list'; 
// Si renombraste el archivo, usa: './components/productos/producto-list/producto-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  // ¡Asegúrate de que se importa aquí!
  imports: [RouterOutlet, ProductoListComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  // Ya no necesitas 'title()' si borraste el HTML de bienvenida.
}