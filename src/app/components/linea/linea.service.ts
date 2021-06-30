import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LineaService {

  total:number = 0;

  private datosParaGrafico:Dato[] = [
    { mes:"Enero",
      movil:100,
      trayectoria:120,
      salud:800,
      comercio:400
    },
    { mes:"Febrero",
      movil:360,
      trayectoria:220,
      salud:550,
      comercio:410
    },
    { mes:"Marzo",
      movil:30,
      trayectoria:400,
      salud:700,
      comercio:400
    }
  ];


  private datosParaTabla:DatoComercio[] = [
    { dia: 15, 
      mes: "Enero",
      nombre: "Fava",
      importe: 500,
      descuento: 100,
      cupon: 1808
    },
    { dia: 20, 
      mes: "Enero",
      nombre: "Carrefour",
      importe: 1000,
      descuento: 200,
      cupon: 1910
    },
    { dia: 25, 
      mes: "Enero",
      nombre: "Toledo",
      importe: 1500,
      descuento: 250,
      cupon: 2025
    },
    { dia: 5, 
      mes: "Febrero",
      nombre: "Toledo",
      importe: 800,
      descuento: 120,
      cupon: 3965
    },
    { dia: 21, 
      mes: "Febrero",
      nombre: "Fava",
      importe: 1800,
      descuento: 240,
      cupon: 4010
    },
    { dia: 2, 
      mes: "Marzo",
      nombre: "Toledo",
      importe: 900,
      descuento: 150,
      cupon: 4025
    },
    { dia: 12, 
      mes: "Marzo",
      nombre: "Carrefour",
      importe: 650,
      descuento: 170,
      cupon: 4074
    },
    { dia: 24, 
      mes: "Marzo",
      nombre: "Fava",
      importe: 1200,
      descuento: 350,
      cupon: 4163
    },
    { dia: 30, 
      mes: "Marzo",
      nombre: "Fava",
      importe: 200,
      descuento: 50,
      cupon: 4358
    }
  ]

  constructor() {
    console.log("Servicio listo !!")
  }

  // Retorna arreglo de objeto Dato
  getDatos() {
    return this.datosParaGrafico;
  }

  // Retorna arreglo de objeto DatoComercio
  getDatosTabla() {
    return this.datosParaTabla;
  }

}


export interface Dato {
  mes:string,
  movil:number,
  trayectoria:number,
  salud:number,
  comercio:number
}

export interface DatoComercio {
  dia: number,
  mes: string,
  nombre: string,
  importe: number,
  descuento: number,
  cupon: number
}
