
export interface Proveedor {
    id: number;
    nombre: string;
    fechaAlta: string; // LocalDate se serializa como string en JSON
    clientId: number;
  }