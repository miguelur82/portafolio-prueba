import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  personaList: AngularFireList<any> | undefined;

  constructor( private http: HttpClient, private firestore: AngularFireDatabase) {
    
    // console.log('Servico de info pagina listo')
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
              .subscribe( (resp: InfoPagina) => {
                this.cargada = true;
                this.info= resp;
              })
   }

   public cargarEquipo(){
    return this.personaList = this.firestore.list('equipo');
   }
}
