import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  formulario: FormGroup;


  formularioIncorrecto = false;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      edad: new FormControl(),
      dni: new FormControl(),
      fecha: new FormControl(),
      hora: new FormControl(),
      sintomas: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);

  }
  // agregarCita() {
  //   if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
  //     this.formularioIncorrecto = true;
  //     return;
  //   }
  //   this.formularioIncorrecto = false;

  //Creó objeto para enviarselo al padre(app.component)
  //   const CITA = {
  //     nombre: this.nombre,
  //     fecha: this.fecha,
  //     hora: this.hora,
  //     sintomas: this.sintomas
  //   }
  //   console.log(CITA);
  //   this.resetCampos()
  // }

  // resetCampos() {
  //   this.nombre = '';
  //   this.fecha = '';
  //   this.hora = '';
  //   this.sintomas = '';
  // }

}
