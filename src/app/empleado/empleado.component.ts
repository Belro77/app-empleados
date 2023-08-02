import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
nombre="Juan";
Apellido="Diaz";
Empresa="Macdonals";
Edad= 24

//llamaEmpresa(value:String){}

habilitacionCuadro= false;

UsuarioRegistrado=false;

textoRegistro="No hay nadie registrado"




getRegistroUsuario ()
{
  this.UsuarioRegistrado=false;
}

//función que abre ventana emergente  event binding

setusuarioRegistrado(event:Event){

 // Ventana emergente al tocar checkbox
 //  alert("El usuario se acaba de registrar");

 //this.textoRegistro=" El usuario se acaba de registrar"

 //Otra manera de ver que hay un objeto event.
 //alert(event.target) nos dice que de tipo html input 
 if((<HTMLInputElement>event.target).value=="si"){
  this.textoRegistro=" El usuario se acaba de registrar";
 }else{
  
  this.textoRegistro="No hay nadie registrado";

 }

}

constructor() {}

ngOnInit(): void {
  
}
}
