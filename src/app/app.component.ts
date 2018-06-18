import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { AyudaService } from './servicios/ayuda.service';

declare var swal:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number;
  lng: number;

  init=false;
  apoyo:any;

  public policias: Policias[]=[];
  siguiendo: string=null;
  siguiendoNombre :string=null;

  ImgUrl="assets/police_car.png";


  constructor(db: AngularFirestore,
             private toastr: ToastrService,
             private ayuda:AyudaService
  ) {

   db.collection('usuarios').valueChanges()
      .subscribe((data:Policias[])=>{
        this.policias=data;

        if( !this.init ){
           this.lat=data[0].lat;
           this.lng=data[0].lng;
           this.init=true;
        }

        if(this.siguiendo){
          this.ponerSeguimiento();
        }

      })

      db.collection('ayuda').valueChanges()
       .subscribe(data=>{
         this.apoyo=data;
         this.alerta(data[0]);
     
      });
  }


   


  seguir(policia:any){
        this.siguiendo=policia.clave;
        this.siguiendoNombre=policia.nombre;
        this.ponerSeguimiento();
  }

  ponerSeguimiento(){

      this.policias.forEach( policia=>{

        if(policia.clave === this.siguiendo){

          this.lat = policia.lat;
          this.lng = policia.lng;
          
        }

       });

  }


  dejarSeguir(){
    this.siguiendo=null;
    this.siguiendoNombre=null;
  }


  alerta(data){
   
      
    this.toastr.warning('Hello world!', 'Toastr fun!',{
      disableTimeOut:true,
      tapToDismiss:true
    });

    swal({
      title: 'Opoyo Grado: ' + data.gravedad,
      text:'El oficial ' + data.nombre + " está solicitando apoyo",
      type:"error",
      width: 600,
      padding: '3em',
      background: '#fff',
      backdrop: `
        rgba(240,24,24,0.35)
        center left
        no-repeat
      `
    }).then((result) => {
             this.seguir(data);
    })

  }





}

interface Policias{
   nombre:string;
   clave:string;
   lat:number;
   lng:number;
}
