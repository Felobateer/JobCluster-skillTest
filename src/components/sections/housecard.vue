<template>
  <article v-if="houseInfo.name">
    <h1 v-if="houseInfo.name">
      {{ houseInfo.name }}
    </h1>
    <div v-if="houseInfo.members.length">
      <h2>Members</h2>
      <ul>
        <li v-for="member in houseInfo.members" :key="member">
          {{ member }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: "HouseCard",
  props: {
    selectHouse: String,
  },
  data() {
    return {
      house: {
        name: "",
        members: [],
      },
    };
  },
  methods: {
    async fetchingHouse(selectHouse) {
      const link =
        "https://api.gameofthronesquotes.xyz/v1/house/" + selectHouse;
      try {
        const response = await fetch(link);
        const data = await response.json();
        const houseInfo = data[0];

        this.house = {
          name: houseInfo.name,
          members: houseInfo.members.map((member) => member.name),
        };
      } catch (error) {
        console.error("Error fetching house:", error);
      }
    },
  },
  computed: {
    houseInfo() {
      return {
        name: this.house.name,
        members: this.house.members,
      };
    },
  },
  watch: {
    selectHouse(newSelectHouse) {
      this.fetchingHouse(newSelectHouse);
      console.log(newSelectHouse);
    },
  },
};
</script>

<style scoped>
article {
  margin: 15px auto;
  padding: 20px;
  padding-bottom: 40px;
  width: 75%;
  max-width: 700px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
}

h1 {
  font-size: 20px;
  font-family: "Nova Square", sans-serif;
  font-weight: 500;
  color: whitesmoke;
  margin: 10px;
}

li,
h2 {
  margin: 5px 20px;
  font-size: 16px;
  font-family: "Lora", serif;
  font-weight: 400;
  color: rgba(245, 245, 245, 0.9);
}

li {
  list-style: none;
  margin: 5px 30px;
}
</style>
