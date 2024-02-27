<script>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import Projects from '@/components/Projects.vue';
import Technologies from '@/components/Technologies.vue';
import Contact from '@/components/Contact.vue'

export default {
  components: {
    NavBar,
    Hero,
    Projects,
    Technologies,
    Contact
  }
}
</script>

<template>
  <div class="home-content">
    <NavBar />
    <Hero />
    <Projects />
    <Technologies />
    <Contact />
  </div>
</template>

<style lang="scss">
  .home-content {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
</style>