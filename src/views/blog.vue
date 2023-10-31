<template>
  <div class="blog-container">
    <navigation-bar
      rootClassName="navigation-bar-root-class-name2"
    ></navigation-bar>
    <app-blog rootClassName="blog-root-class-name"></app-blog>
    <app-footer rootClassName="footer-root-class-name3"></app-footer>
  </div>
</template>

<script>
import NavigationBar from '../components/navigation-bar'
import AppBlog from '../components/blog'
import AppFooter from '../components/footer'

export default {
  name: 'Blog',
  components: {
    NavigationBar,
    AppBlog,
    AppFooter,
  },
  metaInfo: {
    title: 'Blog - Assessment 3',
    meta: [
      {
        property: 'og:title',
        content: 'Blog - Assessment 3',
      },
    ],
  },
}
</script>

<style scoped>
.blog-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
