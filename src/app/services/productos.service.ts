import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Producto } from '../interfaces/producto.interface';
import { Detproducto } from '../interfaces/detproducto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  listaproducto: Producto[]=[];
  productoFiltrado: Producto[]=[];
  detproducto: Detproducto[]=[];
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
        // console.log(this.listaproducto);
        //  setTimeout(() => {
          this.cargando = false;
        // }, 2000);
      });
  }

  public cargarDetProducto(id: string){
    
    this.detproducto = [];
    this.firestore.list('productos/'+id).snapshotChanges().subscribe((res:any[])=>{
      res.forEach(element => {
        let x = element.payload.toJSON();
        this.detproducto.push(x as Detproducto);
      });
      
      // console.log(this.detproducto[0]);
      //  setTimeout(() => {
        this.cargando = false;
      // }, 2000);
      // return this.detproducto;
    });
  }

  buscarProducto(termino:string){

    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.listaproducto.forEach( (prod:any) =>{

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria?.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productoFiltrado.push(prod);
      }
      // console.log(this.productoFiltrado);
    });
  }

}
