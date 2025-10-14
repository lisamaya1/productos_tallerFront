// src/app/app.ts (o app.component.ts)

import { Component } from '@angular/core';
import { ProductoListComponent } from './components/productos/producto-list/producto-list';

@Component({
  selector: 'app-root',
  standalone: true,
  // ¡Asegúrate de que se importa aquí!
  imports: [ProductoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  // Ya no necesitas 'title()' si borraste el HTML de bienvenida.
}

// Export alias para mantener compatibilidad con pruebas existentes.
export { AppComponent as App };
