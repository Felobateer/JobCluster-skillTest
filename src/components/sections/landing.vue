<template>
  <section class="landing">
    <img class="wallpaper" src="../../assets/wallpaper.jpg" alt="" />
    <div class="shadow">
      <div class="intro">
        <div class="introContent">
          <h1>HOUSES THY SEEK</h1>

          <button class="search" type="button" @click="goSearch">
            Go Searching
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingSection",

  methods: {
    goSearch() {
      this.$router.push("/persons");
    },
  },
};
</script>

<style>
.landing {
  width: 100%;
}

.shadow {
  width: 100%;
  height: 70vh;
  z-index: 1;
  margin: 0;
  background: linear-gradient(90deg, #000927, #00092700);
}

.wallpaper {
  position: absolute;
  width: 100%;
  height: 70vh;
  z-index: -1;
  margin: 0;
}

.intro {
  width: 60%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.introContent {
  width: 300px;
  margin-top: 50%;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  color: whitesmoke;
  font-family: "Italiana", sans-serif;
}

.search {
  width: 100%;
  border-radius: 5px;
  border: none;
  height: 28px;
  padding: 4px;
  font-family: "Italiana", sans-serif;
  font-size: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.search:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
