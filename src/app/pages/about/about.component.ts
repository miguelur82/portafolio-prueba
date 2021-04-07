import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { AboutModel } from '../../models/about.model';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  personaList: AboutModel[]=[] ;

  constructor(
    private _infoservice:InfoPaginaService
  ) { }

  ngOnInit(): void {
    this.mostrarAbout();
  }

  mostrarAbout(){
    
    this.personaList = [];

    this._infoservice.cargarEquipo().snapshotChanges().subscribe(res=>{
      res.forEach(element => {
        let x = element.payload.toJSON();
        this.personaList.push(x as AboutModel);
        // console.log(this.personaList);
      });
    });
  }

}
