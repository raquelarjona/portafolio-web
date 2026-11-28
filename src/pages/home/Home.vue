

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="min-h-screen bg-[#F5F0E7] text-[#292820] px-6 md:px-16">

    <header class="flex justify-between items-center py-6 border-b border-[#292820]/20">
      <p class="text-xs tracking-[0.25em]">
        ARXIU FOTOGRÀFIC
      </p>
      <p class="text-xs tracking-widest">
        ESTIU 2026
      </p>
    </header>

    <section class="py-20">
      <p class="text-sm tracking-[0.3em] text-[#B65D42] mb-6">
        RECORDS EN 35 MM
      </p>

      <h1 class="text-5xl md:text-8xl font-serif leading-tight">
        L'ESTIU
        <br />
        que <span class="italic text-[#B65D42]">
        VAIG GUARDAR.</span>
      </h1>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <p class="text-lg leading-relaxed max-w-md">
            Un xicotet arxiu de moments, llocs i persones 
            que van fer especial el meu estiu
          </p>

          <p class="text-sm text-gray-500 mt-5 mb-8">
            Fotografies analógiques
          </p>

          <RouterLink to="/galeria">
           <Button class="bg-[#B65D42] hover:bg-[#914832] text-white rounded-none px-8">
            OBRIR L'ARXIU →
            </Button>
          </RouterLink>
        </div>

       <div class="bg-white p-3 w-4/5 shadow-x1 rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md justify-self-center md:justify-self-end">
        <img src="/imagenesweb/IMG_0097.jpg"
        alt="Un record de l'estiu a la platja"
        class="w-full h-auto object-cover block"/>

  <p class="text-center text-xs text-gray-500 mt-3 mb-1">
    Un estiu per recordar
  </p>
</div> 
  <div class="bg-white p-3 pb-5 w-4/5 shadow-x1 -rotate-6 hover:-rotate-2 transition-transform duration-500 justify-self-center md:justify-self-end">
<img
  src="/imagenesweb/IMG_4.jpg"
  alt="Un altre record de l'estiu"
  class="w-full h-auto object-cover block"/>
    <p class="text-center text-xs text-gray-500 mt-3 mb-1">
      Un altre moment
    </p>
  </div>
</div>

    </section>
    <section class="py-16 border-t border-[#292820]/20">
      <p class="text-xs tracking-[0.3em] text-[#B65D42] mb-4">
        01 — ELS MEUS RECORDS
    <section class="py-16 text-center">
      <p class="text-3xl md:text-5xl font-serif italic text-[#B65D42]">
        "Cada foto, un record."
      </p>
    </section>
      </p>

      <h2 class="text-4xl font-serif mb-6">
        L' arxiu del meu coret plasmat en fotografíes
      </h2>

      <p class="text-gray-600">
        Cada fotografia guarda una xicoteta història. 
        Esta és la meua.
      </p>
    </section>

    <footer class="py-8 border-t border-[#292820]/20 text-center">
      <p class="text-xs tracking-widest text-gray-500">
        FET DE RECORDS · ESTIU 2026
      </p>
    </footer>

  </main>
</template>

