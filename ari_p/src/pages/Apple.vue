<template>
   <div class="">
    <div class="">
      <h1 class="">{{title}}</h1>

        <Cards :datos="datos" :total="total" :title="title" :epp="epp"></Cards>
    </div>           
  </div>   
</template>

<script setup>
import Cards from '../components/Cards.vue';
import getApple from "@/api/request.js";
import { ref, onMounted } from "vue";


const datos = ref([]);
const epp = ref('9')
const total = ref('')
const title = ref('All articles mentioning Apple from yesterday, sorted by popular publishers first')
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
    const resdatos = await getApple.getApple("");
    datos.value = resdatos.articles;
    tpaginas()
};
</script>

<style>

</style>

