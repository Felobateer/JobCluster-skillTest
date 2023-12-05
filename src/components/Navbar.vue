<template>
  <nav>
    <section>
      <div>
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="navMenu">
        <RouterLink
          :to="i === 0 ? '/' : link"
          v-for="(link, i) in links"
          :key="i"
          class="link"
        >
          {{ CFL(link) }}
        </RouterLink>
      </div>
    </section>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "AppNavbar",
  components: {
    RouterLink,
  },
  data() {
    return {
      links: ["houses", "persons", "quotes"],
    };
  },
  methods: {
    // CFL stands for capitalize the first letter
    CFL(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
  },
};
</script>

<style>
nav {
  width: 100%;
  position: absolute;
  height: 100px;
  z-index: 50;
}

section {
  width: 75%;
  height: 100%;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

img {
  width: 100px;
  height: 50px;
  margin: 25px 0;
}

div {
  height: 100%;
}

.navMenu {
  padding-top: 40px;
}

.link {
  margin: 0 15px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  color: whitesmoke;
  font-family: "Nova Square", sans-serif;
}

@media (max-width: 1000px) {
  section {
    width: 100%;
  }
}
</style>
