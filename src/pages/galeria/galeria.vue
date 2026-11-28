

<script setup lang="ts">
import { ref } from 'vue'

const categoriaSeleccionada = ref('Totes')

const categories = ['Totes', 'Platja', 'Viatges', 'Amics']

const fotografies = [

    {
    id: 1,
    titulo: 'provant la gastronomía ',
    categoria: 'Viatges',
    fecha: 'JUNY 2026',
    src: '/imagenesweb/IMG_9149 2.JPG',
  },
  {
    id: 2,
    titulo: 'Dies de sal',
    categoria: 'Platja',
    fecha: 'JULIOL 2026',
    src: '/imagenesweb/IMG_0097.jpg',
  },
      {
    id: 3,
    titulo: 'Exploradors',
    categoria: 'Platja',
    fecha: 'JULIOL 2026',
    src: '/imagenesweb/IMG_0325.HEIC',
  },
      {
    id: 4,
    titulo: 'tot el grup',
    categoria: 'Viatges',
    fecha: 'JUNY 2026',
    src: '/imagenesweb/IMG_54.jpg',
  },
    {
    id: 5,
    titulo: 'Disfrutona',
    categoria: 'Platja',
    fecha: 'JULIOL 2026',
    src: '/imagenesweb/img_67.jpg',
  },
  
  {
    id: 6,
    titulo: 'Última hora de solet',
    categoria: 'Viatges',
    fecha: 'JULIOL 2026',
    src: '/imagenesweb/IMG_0095.JPG',
  },

      {
    id: 7,
    titulo: 'Dies sense pressa',
    categoria: 'Amics',
    fecha: 'JULIOL 2026',
    src: '/imagenesweb/IMG_8175.jpg',
  },
   {
    id: 8,
    titulo: 'Una victòria única',
    categoria: 'Amics',
    fecha: 'JULIOL 2026',
    src: '/imagenesweb/IMG_2.JPG',
  },
 
    {
    id: 9,
    titulo: 'Un lloc nou',
    categoria: 'Viatges',
    fecha: 'AGOST 2026',
    src: '/imagenesweb/IMG_5.JPG',
  },

  
  {
    id: 10,
    titulo: 'Molta molta festeta',
    categoria: 'Viatges',
    fecha: 'AGOST 2026',
    src: '/imagenesweb/P1125411.JPG',
  },

    {
    id: 11,
    titulo: 'Una nit d´estiu',
    categoria: 'Amics',
    fecha: 'AGOST 2026',
    src: '/imagenesweb/IMG_0262.jpg',
  },
   {
    id: 12,
    titulo: 'Feliz hallowein grupo',
    categoria: 'Amics',
    fecha: 'OCTUBRE 2026',
    src: '/imagenesweb/IMG_3.jpg',
  },

]

const fotografiesFiltrades = () => {
  if (categoriaSeleccionada.value === 'Totes') {
    return fotografies
  }

  return fotografies.filter(
    foto => foto.categoria === categoriaSeleccionada.value
  )
}
</script>

<template>
  <main class="min-h-screen bg-[#F5F0E7] px-6 md:px-16 text-[#292820]">

    <header class="py-6 border-b border-black/20">
      <RouterLink to="/" class="text-xs tracking-widest hover:text-[#B65D42]">
        ← TORNAR A L'INICI
      </RouterLink>
    </header>

    <section class="py-16">
      <p class="text-xs tracking-[0.3em] text-[#B65D42] mb-4">
        EL MEU ARXIU PERSONAL
      </p>

      <h1 class="text-5xl md:text-7xl font-serif">
        Les meues fotografies.
      </h1>

      <p class="mt-5 text-gray-600">
        Un estiu i un poquet mes guardat en fotogrames.
      </p>
    </section>

    <section class="pb-20">

      <div class="flex flex-wrap gap-3 mb-10">
        <button
          v-for="categoria in categories"
          :key="categoria"
          @click="categoriaSeleccionada = categoria"
          class="px-5 py-2 border border-[#B65D42] text-xs tracking-widest transition"
          :class="categoriaSeleccionada === categoria
            ? 'bg-[#B65D42] text-white'
            : 'text-[#B65D42] hover:bg-[#B65D42]/10'">
          {{ categoria.toUpperCase() }}
        </button>
      </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="foto in fotografiesFiltrades()" :key="foto.id"
          class="bg-white p-3 pb-5 shadow-lg">
          <img :src="foto.src" :alt="foto.titulo" class="w-full block" />
          <p class="font-serif text-lg mt-3">{{ foto.titulo }}</p>
          <p class="text-xs tracking-widest text-[#B65D42]">
            {{ foto.categoria.toUpperCase() }} · {{ foto.fecha }}
          </p>
        </div>
      </div>
    
    </section>

  </main>
</template>
