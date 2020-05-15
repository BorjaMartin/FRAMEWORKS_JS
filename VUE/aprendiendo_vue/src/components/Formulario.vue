<template>
  <div id="formulario">
    <h1 class="subheader">Formulario</h1>
    <div id="datosForm" v-if="user.nombre ">
      <p>
        <strong>Nombre :</strong>
        {{user.nombre}}
      </p>

      <p>
        <strong>Apellidos :</strong>
        {{user.apellidos}}
      </p>

      <p>
        <strong>Bio :</strong>
        <span style="white-space: pre-line;">{{user.bio}}</span>
      </p>

      <p>
        <strong>Genero :</strong>
        {{user.genero }}
      </p>
    </div>

    <form class="mid-form" @submit.prevent="checkForm">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" v-model="user.nombre" />
        <div v-if="submited && !$v.user.nombre.required">Este campo es obligatorio</div>
        <div v-if="submited && !$v.user.nombre.minLength">Este campo es debe ser mayor de 2 caracteres</div>
      </div>

      <div class="form-group">
        <label for="apellidos">Apellidos</label>
        <input type="text" name="apellidos" v-model="user.apellidos" />
        <div v-if="submited && !$v.user.apellidos.required">Este campo es obligatorio</div>
        <div v-if="submited && !$v.user.apellidos.minLength">Este campo es debe ser mayor de 2 caracteres</div>
      </div>

      <div class="form-group">
        <label for="bio">Biografia</label>
        <textarea name="bio" v-model="user.bio"></textarea>
        <div v-if="submited && !$v.user.bio.required">Este campo es obligatorio</div>
        <div v-if="submited && !$v.user.bio.minLength">Este campo es debe ser mayor de 10 caracteres</div>
      </div>

      <div class="form-group radibuttons">
        <input type="radio" name="genero" value="hombre" v-model="user.genero " /> Hombre
        <input type="radio" name="genero" value="mujer" v-model="user.genero " /> Mujer
        <input type="radio" name="genero" value="otro" v-model="user.genero " /> Otro
      </div>

      <div class="clearfix"></div>

      <input type="submit" value="Enviar" class="btn btn-success" />
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Formulario",
  data() {
    return {
      submited: false,
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: ""
      },
      errors: []
    };
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      bio: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    checkForm() {
      this.submited = true;
      this.$v.$touch();
      console.log(this.$v.$invalid);
      if (this.$v.$invalid) {
        return false;
      }
      alert("Validación correcta");
      
    }
  }
};
</script>