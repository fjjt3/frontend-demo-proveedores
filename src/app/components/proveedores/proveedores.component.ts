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
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    if (this.clientId) {
      this.proveedorService.getProveedoresPorCliente(this.clientId).subscribe(proveedores => {
        this.proveedores = proveedores;
      });
    } else {
      this.proveedorService.getAllProveedores().subscribe(proveedores => {
        this.proveedores = proveedores;
      });
    }
  }
}