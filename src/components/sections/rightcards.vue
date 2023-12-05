<template>
  <article class="rightCard">
    <div class="profile">
      <img class="profileImg" :src="quote.img" alt="jon" />
    </div>

    <div class="famQuo">
      <div class="famQuoTitle">
        <h1 class="famQuoName">
          {{ quote.name }}
        </h1>
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
  name: "RightCard",
  props: {
    quote: {},
  },
};
</script>

<style>
.rightCard {
  float: right;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 700px;
  display: flex;
  flex-direction: row-reverse;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
}

.profileImg {
  margin: 15px;
  width: fit-content;
  height: 140px;
}

.famQuo {
  padding: 20px;
  height: 150px;
}

.famQuoName,
.famQuoHouse {
  font-size: 20px;
  font-family: "Nova Square", sans-serif;
  font-weight: 500;
  color: whitesmoke;
}

.famQuoText {
  margin-bottom: 15px;
}

.famQuoText {
  font-size: 16px;
  font-family: "Lora", serif;
  font-weight: 400;
  color: rgba(245, 245, 245, 0.9);
}
</style>
