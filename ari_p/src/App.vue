<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
    
    <div class="back">
      <Navbar></Navbar>
      <router-view ></router-view>
    </div>
    
</template>

<style>
.back{
  height: 100%;
  width: 100%;
}
.back:before {
  content: "";
  position: fixed;
  inset: 0;
  background:linear-gradient(90deg,rgb(57, 55, 55),rgb(175, 174, 175),rgb(161, 125, 154)) left/400% 100%;
  animation:f 2s infinite alternate linear;
}

@keyframes f {
  100% {background-position:right}
}
</style>



