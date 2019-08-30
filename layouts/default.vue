<template>
  <div>
    <Header />
    <div class="page">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/public/Header.vue'
import Footer from '~/components/public/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
html {
  min-width: 1200px;
}
.page {
  min-height: 600px;
}
</style>
