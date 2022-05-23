<template>
  <div>
        <h1>Formulario con Vue</h1>

    <h3></h3>
    <label for="name">Nombre completo:</label>
    <input type="text" v-model="nombre">
    <p class="red">{{msg.nombres}}</p>
  
    <label for="edad">Edad</label>
    <input type="select" v-model="edad">
    <p class="red">{{msg.nombres}}</p>

    <label for="name">E-mail:</label>
    <input type="text" v-model="email" @keyup="validateEmail" required >
    <span :class="msg.alert && 'red'">{{msg.email}}</span>

    <label for="texto">Mensaje</label>
    <input type="text" v-model="mensaje">
    <p class="red">{{msg.nombres}}</p>


    <br><br>
    <h3>Usando watch</h3>

  </div>
</template>

<script>
export default {
  name: 'formulario',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
