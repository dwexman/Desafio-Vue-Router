<template>
  <!-- cartas -->
  <section class="container" id="productos">
    <h1 class="text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- generar las tarjetas dinámicamente -->
      <div class="col-sm-4 col-12 px-5 mb-4" v-for="(producto, index) in productos" :key="index">
        <div class="card">
          <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
            <p class="card-text">{{ producto.descripcion }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: {{ producto.precio }}</li>
            <li class="list-group-item">Cantidad: {{ producto.cantidad }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    productos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  color: #4955A8;
}

.card-body {
  text-align: center;
}

.container {
  margin-top: 30px;
}

h1 {
  margin-bottom: 30px;
}
</style>
