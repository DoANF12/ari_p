<template>
    <div class="container">
      <div >
          <Cards :datos="datos" :total="total" :title="title" :epp="epp"></Cards>
      </div>           
    </div>
  </template>
  
  <script setup>
  import Cards from '../components/Cards.vue';
  import getApple from "@/api/request.js";
  import { ref, onMounted } from "vue";
  
  
  const datos = ref([]);
  const epp = ref('12')
  const total = ref('')
  const title = ref('All articles about Tesla from the last month, sorted by recent first')
  const dPaginados = ref('')
  
  onMounted(async () => {
      await getRequests();
  });
  
  const tpaginas = () => {
      total.value = Math.ceil(datos.value.length / epp.value)
      console.log('datos',datos.value.length)
      console.log('epp',epp.value)
      console.log('total',total.value)
  }
  
  const getRequests = async () => {
      const resdatos = await getApple.getTesla("");
      datos.value = resdatos.articles;
      console.log(datos.value.lenght)
      tpaginas()

  };
  </script>