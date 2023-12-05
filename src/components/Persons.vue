<template>
  <main class="PersonMain">
    <SearchAll
      :selectedHouse="selectHouse"
      @SelectHouse="updateHouse"
      @SelectPerson="updatePerson"
    />

    <HouseCard :selectHouse="selectHouse" />
    <PersonCard :selectPerson="selectPerson" />
  </main>
</template>

<script>
import { ref } from "vue";
import SearchAll from "./sections/search.vue";
import HouseCard from "./sections/housecard.vue";
import PersonCard from "./sections/personcard.vue";

export default {
  name: "PersonsComponent",
  components: {
    SearchAll,
    HouseCard,
    PersonCard,
  },
  setup() {
    const selectPerson = ref("");
    const selectHouse = ref("");

    function updateHouse(update) {
      selectHouse.value = update;
    }

    function updatePerson(update) {
      selectPerson.value = update;
    }

    return {
      selectPerson,
      selectHouse,
      updateHouse,
      updatePerson,
    };
  },
  mounted() {
    console.log(this.selectHouse);
  },
};
</script>

<style>
.PersonMain {
  min-height: 76.8vh;
}
</style>
