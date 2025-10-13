import { Routes } from '@angular/router';
import { ProductoListComponent } from './components/productos/producto-list/producto-list';

export const routes: Routes = [
  // Esta ruta (path: '') es la ruta base (localhost:4200/)
  { path: '', component: ProductoListComponent },
  // **Importante:** Incluya otras rutas si las tiene, como:
  // { path: 'crear', component: ProductoFormComponent },
  // { path: 'editar/:id', component: ProductoFormComponent }
];