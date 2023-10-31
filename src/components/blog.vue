<template>
  <div class="blog-container" v-bind:class="rootClassName">
    <div class="blog-hero">
      <div class="blog-container1">
        <img alt="image" src="/Images/blog-1500w.jpg" class="blog-image" />
      </div>
      <div class="blog-container2">
        <h1 class="blog-text">Blog</h1>
        <h2 class="blog-text1">
          Welcome to theFresh-Cut Blog, your go-to source for all things beauty,
          style, and salon industry insights. We&apos;re here to keep you
          informed, inspired, and up-to-date with the latest trends, tips, and
          news. Explore our blog categories and discover a wealth of valuable
          content:
        </h2>
      </div>
    </div>
    <div class="blog-gallery">
      <div class="blog-container3">
        <div class="blog-container4">
          <div class="blog-container5">
            <gallery-card2
              image_src="/Images/blog1-1500h.jpg"
              rootClassName="rootClassName2"
            ></gallery-card2>
          </div>
          <div class="blog-container6">
            <gallery-card2
              image_src="/Images/blog3-1500w.jpg"
              rootClassName="rootClassName3"
            ></gallery-card2>
          </div>
        </div>
        <div class="blog-container7">
          <gallery-card2
            image_src="/Images/blog4-1500h.jpg"
            rootClassName="rootClassName"
          ></gallery-card2>
        </div>
      </div>
      <div class="blog-container8">
        <gallery-card2
          image_src="/Images/blog2-1500h.jpg"
          rootClassName="rootClassName4"
        ></gallery-card2>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard2 from './gallery-card2'

export default {
  name: 'Blog',
  props: {
    rootClassName: String,
  },
  components: {
    GalleryCard2,
  },
}
</script>

<style scoped>
.blog-container {
  width: 100%;
  height: 1608px;
  display: flex;
  position: relative;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
}
.blog-hero {
  height: 903px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: stretch;
  min-height: 80vh;
  align-items: center;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: row;
  padding-bottom: 21px;
  justify-content: space-between;
}
.blog-container1 {
  flex: 0 0 auto;
  width: 25rem;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.blog-image {
  width: 25rem;
  align-self: center;
  object-fit: cover;
  margin-left: var(--dl-space-space-sixunits);
}
.blog-container2 {
  width: 382px;
  display: flex;
  align-self: center;
  align-items: stretch;
  margin-left: 0px;
  margin-right: var(--dl-space-space-sixunits);
  flex-direction: column;
}
.blog-text {
  font-size: 3rem;
  align-self: stretch;
}
.blog-text1 {
  margin-top: var(--dl-space-space-unit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.blog-gallery {
  width: 100%;
  height: 1000px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
}
.blog-container3 {
  flex: 3;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.blog-container4 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.blog-container5 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.blog-container6 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.blog-container7 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: column;
}
.blog-container8 {
  flex: 2;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

@media(max-width: 991px) {
  .blog-container {
    height: 2158px;
  }
  .blog-hero {
    height: 974px;
    padding: var(--dl-space-space-threeunits);
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .blog-image {
    order: 2;
  }
  .blog-container2 {
    align-self: stretch;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .blog-text {
    text-align: center;
  }
  .blog-text1 {
    text-align: center;
  }
  .blog-gallery {
    width: auto;
    height: 998px;
    align-self: stretch;
  }
  .blog-container8 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .blog-container {
    height: 1650px;
  }
  .blog-hero {
    padding-top: 38px;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .blog-image {
    width: 80%;
  }
  .blog-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .blog-container4 {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .blog-container {
    height: 1849px;
  }
  .blog-hero {
    height: 1152px;
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .blog-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .blog-gallery {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .blog-container3 {
    width: auto;
  }
}
</style>
