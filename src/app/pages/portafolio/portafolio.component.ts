import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: [
  ]
})
export class PortafolioComponent implements OnInit {

  constructor( public _productoService: ProductosService ) { }

  ngOnInit(): void {
  }

}
