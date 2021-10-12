<template>
  <h1 class="logo">
    <!-- <a href="/"><span>🍿</span><em>POPCORN</em></a> -->
    <a href="/"
      ><img src="../../assets/logo.png" alt="로고" class="logo__img"
    /></a>
  </h1>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.logo {
  a {
    // text-decoration: none;
    display: flex;
    justify-content: center;
    gap: 12px;
    font-size: 56px;
    font-family: 'Roboto';
    font-weight: bold;
  }
  &__img {
    width: 40%;
  }
}
</style>
