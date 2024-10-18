import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue'),
    props: route => ({
      productos: [
        {
          nombre: 'Bebidas',
          descripcion: 'Disfruta de nuestras deliciosas y refrescantes bebidas.',
          precio: '$1500',
          cantidad: 'Para dos personas',
          imagen: require('../assets/img/bebidas.jpg')
        },
        {
          nombre: 'Colaciones',
          descripcion: 'Colaciones deliciosas para toda ocasión.',
          precio: '$2500',
          cantidad: 'Para dos personas',
          imagen: require('../assets/img/colaciones.jpg')
        },
        {
          nombre: 'Desayunos',
          descripcion: 'Contamos con desayunos nutritivos y deliciosos.',
          precio: '$2000',
          cantidad: 'Para dos personas',
          imagen: require('../assets/img/desayunos.jpg')
        },
        {
          nombre: 'Dulces',
          descripcion: 'Dulces para todos los gustos.',
          precio: '$1000',
          cantidad: '12 unidades',
          imagen: require('../assets/img/dulces.jpg')
        },
        {
          nombre: 'Empanadas',
          descripcion: 'Empanadas deliciosas y crujientes.',
          precio: '$3000',
          cantidad: '6 unidades',
          imagen: require('../assets/img/empanadas.jpg')
        },
        {
          nombre: 'Verduras',
          descripcion: 'Verduras frescas y seleccionadas.',
          precio: '$1200',
          cantidad: '1kg',
          imagen: require('../assets/img/verduras.jpg')
        }
      ]
    })
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
