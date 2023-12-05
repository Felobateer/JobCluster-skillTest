<template>
  <LandingSection />
  <div class="bodySection" v-for="(quo, i) in famousQuotes" :key="i">
    <template v-if="i % 2 === 0">
      <RightCard :quote="quo" />
    </template>
    <template v-else>
      <LeftCard :quote="quo" />
    </template>
  </div>
</template>

<script>
import LandingSection from "./sections/landing.vue";
import RightCard from "./sections/rightcards.vue";
import LeftCard from "./sections/leftcards.vue";

export default {
  name: "HousesComponent",
  components: {
    LandingSection,
    RightCard,
    LeftCard,
  },
  data() {
    return {
      famousQuotes: [
        {
          name: "Jon Snow",
          house: "House Stark",
          sentence: "Winter is comming",
          img: require("../assets/Jon.png"),
        },
        {
          name: "Daenerys Targaryen",
          house: "House Targaryen",
          sentence: "Fire Cannot Kill a Dragon",
          img: require("../assets/Daen.png"),
        },
        {
          name: "Ned Stark",
          house: "House Stark",
          sentence: "The man who passes the sentence should swing the sword.",
          img: require("../assets/Ned.png"),
        },
        {
          name: "Arya Stark",
          house: "House Stark",
          sentence:
            "Tell them the North remembers. Tell them winter came for House Frey.",
          img: require("../assets/Arya.png"),
        },
        {
          name: "Tyrion Lannister",
          house: "House Lannister",
          sentence: "That's what I do: I drink and I know things",
          img: require("../assets/Tyrion.png"),
        },
      ],
    };
  },
};
</script>

<style>
.bodySection {
  margin: 30px 12.5%;
}
</style>
