<template>
  <footer>
    <div>
      <img class="footerImg" src="../assets/logo.png" alt="logo" />

      <p class="copyrights">&copy; felobateer saadalla 2023</p>
    </div>

    <div>
      <ul class="contactInfo">
        <li>Email: felobateersaadalla@gmail.com</li>
        <li>Phone: +49 151 101 70902</li>
        <li>Address: Ulm, Baden-Wüttemburg</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
footer {
  background-color: rgba(8, 36, 65, 0.25);
  width: 100%;
  margin: 0;
  margin-top: 30px;
  padding: 30px 12.5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.footerImg {
  width: 300;
  height: 200;
}

.copyrights {
  font-size: 16px;
  font-family: "Lora", serif;
  color: whitesmoke;
}

.contactInfo li {
  list-style: none;
  font-size: 16px;
  font-family: "Lora", serif;
  color: whitesmoke;
  margin: 15px 10px;
}
</style>
