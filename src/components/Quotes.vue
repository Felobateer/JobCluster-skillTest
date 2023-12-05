<template>
  <div class="quoteFrame">
    <div class="quoteCard" v-for="(quote, index) in quotes" :key="quote">
      <h1 class="quoteCardName">
        {{ quote.name }}
      </h1>
      <h1 class="quoteCardName">
        {{ quote.house }}
      </h1>
      <p class="quoteCardQuote">
        {{ quote.quote }}
      </p>
      <button type="button" @click="fetchQuote(index)">Change Quote</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuotesComponent",
  data() {
    return {
      quotes: [],
    };
  },
  methods: {
    fetchingQuotes() {
      fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
        .then((response) => response.json())
        .then((data) => {
          this.quotes = data.map((quote) => ({
            name: quote.character.name,
            house: quote.character.house.name,
            quote: quote.sentence,
          }));
        });
    },
    fetchQuote(index) {
      fetch("https://api.gameofthronesquotes.xyz/v1/random")
        .then((response) => response.json())
        .then((data) => {
          const newQuote = {
            name: data.character.name,
            house: data.character.house.name,
            quote: data.sentence,
          };
          // Update the quote at the specified index
          this.quotes[index] = newQuote;
        });
    },
  },
  mounted() {
    this.fetchingQuotes();
  },
};
</script>

<style>
.quoteFrame {
  padding: 100px 20px;
}

.quoteCard {
  margin: 15px auto;
  padding: 20px;
  padding-bottom: 40px;
  width: 75%;
  max-width: 700px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
}

.quoteCardName {
  font-size: 20px;
  font-family: "Nova Square", sans-serif;
  font-weight: 500;
  color: whitesmoke;
  margin: 10px;
}

.quoteCardQuote {
  margin: 5px 20px;
  font-size: 16px;
  font-family: "Lora", serif;
  font-weight: 400;
  color: rgba(245, 245, 245, 0.9);
}

.quoteCard button {
  float: right;
  background: rgb(15, 68, 114);
  padding: 5px;
  font-size: 16px;
  font-family: "Lora", serif;
  font-weight: 400;
  color: rgba(245, 245, 245, 0.9);
  border-radius: 15px;
  border: none;
}

.quoteCard button:hover {
  background: rgb(15, 68, 114, 0.5);
}
</style>
