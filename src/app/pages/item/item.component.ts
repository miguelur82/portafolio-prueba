import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  id:string = '';
 
  constructor( private route: ActivatedRoute, public _productoService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      console.log(parametros['id']);
      this.id = parametros['id'];
      this.cargarProductodetalle(this.id);
    });
  }

  cargarProductodetalle(id:string) {
    this._productoService.cargarDetProducto(id);
  }

}
