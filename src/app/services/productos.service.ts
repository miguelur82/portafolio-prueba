import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  listaproducto: Producto[]=[];
  cargando= true;

  constructor( private firestore: AngularFireDatabase) {
    this.cargarProductos();
   }

  public cargarProductos(){
    this.firestore.list('productos_idx').snapshotChanges().subscribe((res:any[])=>{
      res.forEach(element => {
        let x = element.payload.toJSON();
        this.listaproducto.push(x as Producto);
      });
      //console.log(this.listaproducto);
      //  setTimeout(() => {
        this.cargando = false;
      // }, 2000);
      
    });

  }
}
