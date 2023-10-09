<template>
  <div id="app">
    <header>
      <h1>My lifestyle</h1>
      <nav>
        <ul>
          <li><router-link to="/">Tops</router-link></li>
          <li><router-link to="/products">Pants</router-link></li>
          <li><router-link to="/cart">skirts</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* Header styles */
header {
  background-color: rgb(236, 17, 13);
  color: #31cce8;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #fff;
}

/* Main content styles */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>