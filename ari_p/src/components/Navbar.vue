<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <nav class="navbar navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo-spin" href="#">
            <img class="logo-spin" src="/vite.svg" />
          </a>
        </div>
      </nav>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/apple" class="nav-link" active-class="active" aria-current="page"
              >Apple</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/tesla" class="nav-link" active-class="active">Tesla</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/negocios" class="nav-link" active-class="active">Negocios</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style>

</style>
