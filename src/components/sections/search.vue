<template>
  <div class="searchAll">
    <div class="bigSearch">
      <button
        class="searchToggle dropdown-toggle"
        type="button"
        id="searchOptions"
        @click="toggle"
      >
        {{ Houses ? "Houses" : "Persons" }}
      </button>
      <ul id="searchOptionList" :class="{ hidden: !open }">
        <li><button type="button" @click="switchOff">Persons</button></li>
        <li><button type="button" @click="switchOn">Houses</button></li>
      </ul>
      <input
        type="text"
        class="form-control"
        list="datalistOptions"
        aria-label="Text input with dropdown button"
        id="searchAllInput"
        @input="
          Houses
            ? $emit('SelectHouse', $event.target.value)
            : $emit('SelectPerson', $event.target.value)
        "
      />
      <datalist id="datalistOptions">
        <template v-if="!Houses">
          <option v-for="person in persons" :value="person.slug" :key="person">
            {{ person.name }}
          </option>
        </template>
        <template v-else>
          <option v-for="house in houses" :value="house.slug" :key="house">
            {{ house.name }}
          </option>
        </template>
      </datalist>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAll",
  props: {
    selectedHouse: String,
  },
  data() {
    return {
      persons: [],
      houses: [],
      open: false,
      Houses: true,
      selectHouse: "",
      selectPerson: "",
    };
  },
  methods: {
    fetchingHouses() {
      fetch("https://api.gameofthronesquotes.xyz/v1/houses")
        .then((response) => response.json())
        .then((data) => {
          this.houses = data.map((hous) => ({
            name: hous.name,
            slug: hous.slug,
          }));
        });
    },
    fetchingPersons() {
      fetch("https://api.gameofthronesquotes.xyz/v1/characters")
        .then((response) => response.json())
        .then((data) => {
          this.persons = data.map((person) => ({
            name: person.name,
            slug: person.slug,
          }));
        });
    },

    toggle() {
      this.open = !this.open;
    },
    switchOn() {
      this.Houses = true;
      this.open = false;
    },
    switchOff() {
      this.Houses = false;
      this.open = false;
    },
  },
  mounted() {
    this.fetchingPersons();
    this.fetchingHouses();
  },
};
</script>

<style>
.searchAll {
  padding-top: 150px;
  padding-left: 12.5%;
}

.bigSearch {
  position: relative;
  width: fit-content;
}

#searchOptions {
  position: absolute;
  top: 33%;
  left: 30px;
  padding: 5px;
  border-radius: 15px 0 0 15px;
  border: none;
  background: rgba(8, 36, 65, 0.25);
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.1), 5px 5px 10px rgba(0, 0, 0, 0.1);
  font-family: "Lora", serif;
  font-size: 16px;
  cursor: pointer;
}

#searchOptionList {
  position: absolute;
  top: 70%;
  left: 30px;
  padding: 20px 0;
  background-color: rgba(245, 245, 245, 0.8);
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border: none;
}

#searchOptionList li {
  list-style: none;
}

#searchOptionList li button {
  border: none;
  background: transparent;
  font-size: 16px;
  font-family: "Lora", serif;
  padding: 0 40px;
  cursor: pointer;
}

#searchOptionList li:first-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 5px;
  margin-bottom: 5px;
}

#datalistOptions {
  list-style: none; /* Remove the default list style */
  padding: 0;
  margin: 0;
}

#datalistOptions option {
  padding: 8px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

#searchAllInput {
  margin: 30px;
  width: 350px;
  height: 30px;
  border-radius: 15px;
  border: none;
  padding: 5px;
  padding-left: 75px;
}

.hidden {
  display: none;
}
</style>
