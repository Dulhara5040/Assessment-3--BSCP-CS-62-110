<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <router-link to="/about" class="navigation-links-text">
      {{ text1 }}
    </router-link>
    <router-link to="/salon" class="navigation-links-text1">
      {{ text2 }}
    </router-link>
    <router-link to="/blog" class="navigation-links-navlink">
      {{ text3 }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    rootClassName: String,
    text1: {
      type: String,
      default: 'About',
    },
    text3: {
      type: String,
      default: 'Blog',
    },
    text2: {
      type: String,
      default: 'Salon',
    },
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-text {
  font-size: 24px;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.navigation-links-text1 {
  font-size: 24px;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.navigation-links-navlink {
  font-size: 24px;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}








@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-text {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-navlink {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
