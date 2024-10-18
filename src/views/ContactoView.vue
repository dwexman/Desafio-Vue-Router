<template>
  <div class="contacto">
    <h1>Contáctanos</h1>
    <p>Por favor, llena el siguiente formulario para contactarnos.</p>
    <form @submit.prevent="alert(`Formulario enviado por: ${nombre}, correo: ${email}, mensaje: ${mensaje}`)">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          v-model="nombre" 
          class="form-control" 
          placeholder="Ingresa tu nombre" 
          required 
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          class="form-control" 
          placeholder="Ingresa tu correo electrónico" 
          required 
        />
      </div>

      <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea 
          id="mensaje" 
          v-model="mensaje" 
          class="form-control" 
          rows="5" 
          placeholder="Escribe tu mensaje" 
          required
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <router-link to="/" class="d-block mt-3">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      email: '',
      mensaje: ''
    };
  }
}
</script>

<style scoped>
.contacto {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-label {
  font-weight: bold;
}

.btn {
  background-color: #4955A8;
  border: none;
}
</style>