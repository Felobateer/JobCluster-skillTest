<template>
  <article v-if="personInfo.name">
    <h1 v-if="personInfo.name">
      {{ personInfo.name }}
    </h1>
    <h1 v-if="personInfo.house">
      {{ personInfo.house }}
    </h1>
    <div v-if="personInfo.quotes.length">
      <h2>Quotes</h2>
      <ul>
        <li v-for="quote in personInfo.quotes" :key="quote">
          {{ quote }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    selectPerson: String,
  },
  data() {
    return {
      person: {
        name: "",
        house: "",
        quotes: [],
      },
    };
  },
  methods: {
    fetchPerson() {
      let link =
        "https://api.gameofthronesquotes.xyz/v1/character/" + this.selectPerson;
      fetch(link)
        .then((response) => response.json())
        .then((data) => {
          const personInfo = data[0];

          this.person = {
            name: personInfo.name,
            house: personInfo.house.name,
            quotes: personInfo.quotes.map((quote) => quote),
          };
        });
    },
  },
  computed: {
    personInfo() {
      return {
        name: this.person.name,
        house: this.person.house,
        quotes: this.person.quotes,
      };
    },
  },
  watch: {
    selectPerson(newSelectPerson) {
      this.fetchPerson(newSelectPerson);
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
  margin: 5px 30px;
}
</style>
