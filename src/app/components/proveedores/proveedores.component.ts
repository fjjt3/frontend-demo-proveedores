// src/app/components/proveedores/proveedores.component.ts
import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../models/model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[] = [];
  clientId: number | null = null;

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    // No cargar proveedores al inicio automáticamente
  }

  cargarProveedores(): void {
    if (this.clientId !== null) { // Verifica si clientId no es null
      const idCliente: number = +this.clientId; // Convierte clientId a número usando el operador +
      this.proveedorService.getProveedoresPorCliente(idCliente).subscribe(proveedores => {
        this.proveedores = proveedores;
      });
    } else {
      this.proveedorService.getAllProveedores().subscribe(proveedores => {
        this.proveedores = proveedores;
      });
    }
  }
}