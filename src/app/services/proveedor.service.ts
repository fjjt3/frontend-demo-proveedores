// src/app/services/proveedor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseUrl = 'http://localhost:8080/proveedores';

  constructor(private http: HttpClient) { }

  getAllProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.baseUrl + '/');
  }

  getProveedoresPorCliente(clientId: number): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.baseUrl}/cliente/${clientId}`); // URL corregida
  }
}