import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-list.html',
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.listar().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }

  eliminarProducto(id: number): void {
    if (confirm('Seguro que deseas eliminar este producto?')) {
      this.productoService.eliminar(id).subscribe(() => {
        this.cargarProductos(); // recarga la lista tras eliminar
      });
    }
  }
}
