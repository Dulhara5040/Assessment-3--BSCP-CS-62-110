<template>
  <div class="salon-container">
    <navigation-bar
      rootClassName="navigation-bar-root-class-name3"
    ></navigation-bar>
    <app-salons rootClassName="salons-root-class-name"></app-salons>
    <app-footer rootClassName="footer-root-class-name2"></app-footer>
  </div>
</template>

<script>
import NavigationBar from '../components/navigation-bar'
import AppSalons from '../components/salons'
import AppFooter from '../components/footer'

export default {
  name: 'Salon',
  components: {
    NavigationBar,
    AppSalons,
    AppFooter,
  },
  metaInfo: {
    title: 'Salon - Assessment 3',
    meta: [
      {
        property: 'og:title',
        content: 'Salon - Assessment 3',
      },
    ],
  },
}
</script>

<style scoped>
.salon-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
