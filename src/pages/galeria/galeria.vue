

<script setup lang="ts">
import { ref } from 'vue'

const categoriaSeleccionada = ref('Totes')

const categories = ['Totes', 'Platja', 'Viatges', 'Amics']

const fotografies = [
  {
    id: 1,
    titulo: 'Dies de sal',
    categoria: 'Platja',
    fecha: 'JULIOL 2026',
  },
  {
    id: 2,
    titulo: 'Un lloc nou',
    categoria: 'Viatges',
    fecha: 'AGOST 2026',
  },
  {
    id: 3,
    titulo: 'Dies sense pressa',
    categoria: 'Amics',
    fecha: 'AGOST 2026',
  }
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
        Un estiu guardat en fotogrames.
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
      </div>
    </section>

  </main>
</template>
