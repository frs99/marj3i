<template>
  <Navbar />
  <Footer />
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components:{
    Navbar,
    Footer,
  }
}
</script>

<style>
  @import './assets/css/style.css';

  @import './assets/css/header.css';
  @import './assets/css/footer.css';

  /* HOME */
  @import './assets/css/home/stylehome.css';
  @import './assets/css/home/mediahome.css';
  
  /* BLOG */
  @import './assets/css/blog/style.blog.css';
  @import './assets/css/blog/text.blog.css';
  @import './assets/css/blog/media.blog.css';

</style>