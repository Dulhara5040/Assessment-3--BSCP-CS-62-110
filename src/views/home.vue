<template>
  <div class="home-container">
    <navigation-bar
      rootClassName="navigation-bar-root-class-name"
    ></navigation-bar>
    <app-hero rootClassName="hero-root-class-name"></app-hero>
    <app-features rootClassName="features-root-class-name"></app-features>
    <app-about rootClassName="about-root-class-name1"></app-about>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import NavigationBar from '../components/navigation-bar'
import AppHero from '../components/hero'
import AppFeatures from '../components/features'
import AppAbout from '../components/about'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    NavigationBar,
    AppHero,
    AppFeatures,
    AppAbout,
    AppFooter,
  },
  metaInfo: {
    title: 'Assessment 3',
    meta: [
      {
        property: 'og:title',
        content: 'Assessment 3',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
