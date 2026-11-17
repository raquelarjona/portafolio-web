

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

          <Button class="bg-[#B65D42] hover:bg-[#914832] text-white rounded-none px-8">
            OBRIR A L'ARXIU →
          </Button>
        </div>

        <div class="bg-white p-3 shadow-lg rotate-2">
          <div class="aspect-4/5 bg-[#E5D8C5] flex items-center justify-center">
            <p class="text-sm text-[#817563] tracking-widest">
              TU FOTOGRAFÍA AQUÍ
            </p>
          </div>
          <p class="text-center text-xs text-gray-500 mt-3 mb-1">
            Un estiu per recordar 
          </p>
        </div>

      </div>
    </section>
    <section class="py-16 border-t border-[#292820]/20">
      <p class="text-xs tracking-[0.3em] text-[#B65D42] mb-4">
        01 — ELS MEUS RECORDS
      </p>

      <h2 class="text-4xl font-serif mb-6">
        L' arxiu de l'estiu
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

