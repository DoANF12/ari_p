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
  const title = ref('Top business headlines in the US right now')
  const dPaginados = ref('')
  
  onMounted(async () => {
      await getRequests();
  });
  
  const tpaginas = () => {
      total.value = Math.ceil(datos.value.length / epp.value)
      
  }
  
  const getRequests = async () => {
      const resdatos = await getApple.getBussines("");
      datos.value = resdatos.articles;
      console.log('sss',datos.value)
      tpaginas()
  };
  </script>