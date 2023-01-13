<template>
    <div class="main mt-3">
      <div class="title">
        <h1>{{title}}</h1>
      </div>
        
        <ul class="cards">
            <li class="cards_item" v-for="(data, j) in dPaginados" :key="data.title">
            <div class="card">
                <div class="card_image">
                    <img :src="data.urlToImage">
                </div>
                <div class="card_content">
                <h2 class="card_title">{{ data.author }}</h2>
                <p class="card_text">{{ data.description }}</p>
                <button class="btn card_btn"><a target="_blank" :href="data.url" class="nav-link">Mas Info</a></button>
                </div>
            </div>
            </li>
        </ul>
    </div>  
    <div class="pag">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" @click="pPage()"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item" v-for="pagina in total" @click="getDataP(pagina)"><a class="page-link" href="#">{{pagina}}</a></li>
                <li class="page-item" @click="nPage()"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>   
    </div>
    
</template>

<script setup>
import  { toRef, defineProps, onMounted, ref, watch } from 'vue'

const props = defineProps({
    datos: Object,
    total: String,
    title: String, 
    epp: String
})
const datos = toRef(props, 'datos')
const total = toRef(props, 'total')
const title = toRef(props, 'title')
const epp = toRef(props, 'epp')

const dPaginados = ref([])
const pActual = ref('1')


onMounted(() => {
    getDataP(1)
})

const getDataP = (npagina) => {
    console.log(npagina)
    dPaginados.value = []
    pActual.value = npagina
    let ini = (npagina * epp.value) - epp.value;
    let fin = (npagina * epp.value);
    console.log('d',datos.value)
    console.log('fin',fin)

    dPaginados.value = datos.value.slice(ini,fin)
}

const pPage = (npagina) => {
    if(pActual.value > 1){
        pActual.value--;
    }
    getDataP(pActual.value)
}

const nPage = () => {
    if(pActual.value < total.value){
        pActual.value++;
    }
    getDataP(pActual.value)
}

watch(datos, (newDatos) => {
  getDataP(1)
})

</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 0;
}

.main{
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}





.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  /* display: flex; */
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card:hover{
  /* transform: translateY(-10%); */
  scale: 110%;
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
}

.card {
  border: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.2s;
}

.title {
  border: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
  color: #ecf9ff;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #3a3838 40%, #c6bcb6 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;
}
.made_by{
  font-weight: 400;
  font-size: 13px;
  margin-top: 35px;
  text-align: center;
}

.pag{
    display: flex;
    justify-content: center;
}

</style>