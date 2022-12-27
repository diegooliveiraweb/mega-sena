<template>
    <div class="h-[85vh] lg:h-[90vh] xl:h-screen w-full flex justify-center items-center bg-gray-900">
        <div class="p-5 max-w-lg flex flex-col gap-10 justify-center">
            <img src="@/static/logo-mega-sena.svg" class="max-w-[300px] mx-auto mb-10 pointer-events-none">
            <div class="grid grid-cols-3 sm:flex gap-6 justify-center">
                <span class="bg-white text-gray-800 text-4xl p-2 rounded-lg w-16 h-16 flex justify-center items-center" v-for="n in numeros">
                    {{ n }}
                </span>
            </div>
            <button class="bg-gray-600 px-10 py-2 text-xl text-white mx-auto rounded-lg hover:bg-blue-gray-700 uppercase" @click="gerarNumeros">Gerar números</button>
        </div>
        <small class="text-gray-600 absolute bottom-2 right-1/2 translate-x-1/2 text-xs">Desenvolvido por <a href="https://www.instagram.com/diegooliveira2504" class="underline" target="_blank"> Diego Oliveira </a></small>
    </div>
</template>
<script setup>
import startParticles from '@/ultis/particles'
const numeros = ref([
    0,
    0,
    0,
    0,
    0,
    0
]);
const count = ref(0);
function gerarNumeros() {
  const numbers = new Set();
  while (numbers.size < 6) {
    let n = Math.floor(Math.random() * 60) + 1;
    numbers.add(n < 10 ? `0${n}` : n);
  }
  numeros.value = Array.from(numbers); 

  if(count.value == 0){
    startParticles();
    count.value = 1;
  }
  
}

</script>
