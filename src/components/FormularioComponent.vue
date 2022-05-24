<template>
  <div >
    <h1>Formulario con Vue</h1>
    <form name="form" id="form" v-on:submit.prevent="envio();">
      <p>Nombre 
        <input type="text" name="nombre" placeholder="Nombre" class="form-control" v-model="formulario.nombre">
      </p>
      <div v-if="onsubmit && !$v.formulario.nombre.required" class="alert alert-danger" role="alert" autocomplete="off"> Nombre es obligatorio </div>
      <div v-if="onsubmit && !$v.formulario.nombre.minLength" class="alert alert-danger" role="alert"> El campo debe contener mas caracteres </div>

      <p>Email
      <input type="text" name="email" placeholder="Email" class="form-control" v-model="formulario.email">
      </p>
      <div v-if="onsubmit && !$v.formulario.email.required" class="alert alert-danger" role="alert"> Email es obligatorio </div>
      <div v-if="onsubmit && !$v.formulario.email.minLength" class="alert alert-danger" role="alert"> El campo debe contener mas caracteres </div>

      <p>Telefono
      <input type="number" id="telefono" placeholder="Telefono" class="form-control" v-model="formulario.telefono">
      </p>
      <div v-if="onsubmit && !$v.formulario.telefono.required" class="alert alert-danger" role="alert"> Telefono es obligatorio </div>

      <p>Deje su mensaje
      <textarea name="mensaje" id="mensaje" cols="20" rows="10" placeholder="Mensaje" class="form-control" v-model="formulario.mensaje"></textarea>
      </p> 
        <div v-if="onsubmit && !$v.formulario.mensaje.maxLength" class="alert alert-warning" role="alert"> 250 caracteres máximo </div>

      <input type="submit" value="Enviar" title="Enviar" class="btn btn-secondary">
    </form>

  </div>
</template>

<script>
import {required, minLength, maxLength, email} from 'vuelidate/lib/validators';
export default {
  name: 'FormularioComponent',
  data(){
    return{
      onsubmit: false,
      formulario: {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      }
    }
  },
  methods: {
    envio(){
      this.onsubmit = true;

      if(this.$v.invalid) {
        return false;
      }
    }
  },
  validations:{
    formulario: {
      nombre:{
        required,
        minLength: minLength(2)
      },
      email:{
        required,
        minLength: minLength(12),
        email
      },
      telefono:{
        required,

      },
      mensaje:{
        maxLength: maxLength(250)
      }
    }
  }
}
</script>


<style scoped>

</style>