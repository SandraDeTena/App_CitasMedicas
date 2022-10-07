import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),
      edad: new FormControl('', [
        Validators.required,
        this.edadValidator
      ]),
      dni: new FormControl('', [
        Validators.required,
        this.dniValidator,
      ]),
      fecha: new FormControl('', [
        Validators.required,
      ]),
      hora: new FormControl('', [
        Validators.required,
      ]),
      sintomas: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  // Validación personalizada del DNI:
  dniValidator(formControl: FormControl) {
    const value = formControl.value;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^8\d{8}[a-zA-Z]$/.test(value)) {
      const num = value.substr(0, value.length - 1);
      const letra = value.charAt(value.length - 1);

      const calculo = num % 23;

      const letraseleccionada = letras.charAt(calculo);
      if (letra.toUpperCase() == letraseleccionada) {
        return null;
      } else {
        return { dniValidator: 'La letra no coincide con el número' }
      }

    } else {
      return { dniValidator: 'El DNI no tiene un formato correcto' }
    }

  }

  // Validador personalizado de la EDAD:
  edadValidator(formControl: FormControl) {
    const value = formControl.value;
    console.log(value);

    const edadMax = 100;
    const edadMin = 15;

    if (value >= 15 && value <= 100) {
      return null;
    } else {
      return { edadValidator: { edadMax, edadMin } };
    }
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
