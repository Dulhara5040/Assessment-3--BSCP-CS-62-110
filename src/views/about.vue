<template>
  <div class="about-container">
    <navigation-bar
      rootClassName="navigation-bar-root-class-name1"
    ></navigation-bar>
    <app-about rootClassName="about-root-class-name"></app-about>
    <app-mission rootClassName="mission-root-class-name"></app-mission>
    <app-process rootClassName="process-root-class-name"></app-process>
    <our-story rootClassName="our-story-root-class-name"></our-story>
    <app-footer rootClassName="footer-root-class-name1"></app-footer>
  </div>
</template>

<script>
import NavigationBar from '../components/navigation-bar'
import AppAbout from '../components/about'
import AppMission from '../components/mission'
import AppProcess from '../components/process'
import OurStory from '../components/our-story'
import AppFooter from '../components/footer'

export default {
  name: 'About',
  components: {
    NavigationBar,
    AppAbout,
    AppMission,
    AppProcess,
    OurStory,
    AppFooter,
  },
  metaInfo: {
    title: 'About - Assessment 3',
    meta: [
      {
        property: 'og:title',
        content: 'About - Assessment 3',
      },
    ],
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
