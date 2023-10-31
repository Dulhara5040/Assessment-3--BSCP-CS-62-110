<template>
  <div class="blog-post-card2-blog-post-card" v-bind:class="rootClassName">
    <img
      :alt="image_alt"
      :src="image_src"
      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
      class="blog-post-card2-image"
    />
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard2',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    profile_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
    },
    rootClassName: String,
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
    },
    author: {
      type: String,
      default: 'Jane Doe',
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    when: {
      type: String,
      default: '3 days ago',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
    },
    label: {
      type: String,
      default: 'ENTERPRISE',
    },
    profile_alt: {
      type: String,
      default: 'profile',
    },
  },
}
</script>

<style scoped>
.blog-post-card2-blog-post-card {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card2-blog-post-card:hover {
  transform: scale(1.02);
}
.blog-post-card2-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}



@media(max-width: 991px) {
  .blog-post-card2-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .blog-post-card2-blog-post-card {
    flex-direction: column;
  }
  .blog-post-card2-image {
    width: 100%;
  }
}
</style>
