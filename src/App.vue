<template>
  <div class="background"></div>
  <div class="bg-shadow"></div>
  <Navbar />
  <RouterView></RouterView>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg-shadow {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9;
  background-color: rgba(3, 3, 29, 0.5);
}

.background {
  width: 100%;
  height: 100%;
  z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(./assets/background.jpg);
  background-size: cover;
  background-repeat: repeat-y;
}
</style>
