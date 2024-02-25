<template>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  background: #1B3764;
  scroll-behavior: smooth;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
button,
li,
ol,
ul,
a{
  font-family: 'Inter', sans-serif;
  color: #F6F8FC;
}

.custom-container {
  width: 70%;
  max-width: 1920px;

  @media (max-width: 1200px) {
    width: 90%;
  }
}

.white {
  color: #F6F8FC;
}

.yellow {
  color: #FFCA42;
}

.blue {
  color: #1B3764;
}
</style>
