<template>
  <article class="leftCard">
    <div class="profile">
      <img class="profileImg" :src="quote.img" alt="jon" />
    </div>

    <div class="famQuo">
      <div class="famQuoTitle">
        <h1 class="famQuoName">{{ quote.name }}</h1>
        <h1 class="famQuoHouse">
          {{ quote.house }}
        </h1>
      </div>
      <div class="famQuoText">
        <p class="famQuoQuote">
          {{ quote.sentence }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "LeftCards",
  props: {
    quote: {},
  },
};
</script>

<style>
.leftCard {
  margin-bottom: 30px;
  width: 700px;
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
}
</style>
