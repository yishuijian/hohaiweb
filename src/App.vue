<template>
  <div id="app">
    <icon/>
    <maintabbar/>
    <router-view/>
  </div>
</template>

<script>
import Home from "@/views/Home";
import Maintabbar from "@/components/maintabbar"
import icon from "@/components/icon";

export default {
  name: 'App',
  components: {
    Home,
    Maintabbar,
    icon,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
