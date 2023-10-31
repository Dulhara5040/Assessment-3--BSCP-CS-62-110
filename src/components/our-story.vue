<template>
  <div class="our-story-container" v-bind:class="rootClassName">
    <div class="our-story-hero">
      <div class="our-story-container1">
        <h1 class="our-story-text">Our Story</h1>
        <span class="our-story-text1">
          <span class="our-story-text2">
            We are committed to empowering salon owners, helping them expand their
            businesses and embrace the digital age. At the same time, we
            prioritize the needs of clients, ensuring that they have a convenient,
            transparent, and enriching experience when booking salon services.
          </span>
          <span></span>
        </span>
      </div>
      <img alt="image" src="/Images/story-1500w.jpg" class="our-story-image" />
    </div>
    <div class="our-story-features">
      <h1 class="our-story-text4">All these impressive features</h1>
      <div class="our-story-container2">
        <feature-card2
          title="Innovation and Uniqueness:"
          description="We pride ourselves on our innovative features, including our salon match algorithm, virtual salon tours, and loyalty rewards program, all designed to make the beauty journey more exciting and efficient."
          rootClassName="rootClassName"
        ></feature-card2>
        <feature-card2
          title="Transparency and Trust:"
          description="We believe that transparency is key to building trust in the beauty industry. Our verified reviews and ratings, along with our interactive stylist profiles, help clients make informed decisions, while also promoting the growth of salon businesses."
          rootClassName="rootClassName3"
        ></feature-card2>
        <feature-card2
          title="Community Building:"
          description="We're not just a platform; we're a community. Our blog section keeps you updated with the latest beauty tips and trends, and our social integration features enable you to share your experiences with friends and family."
          rootClassName="rootClassName2"
        ></feature-card2>
        <feature-card2
          title="Join Our Journey:"
          description="Whether you're a salon owner, an independent stylist, or a beauty enthusiast, we invite you to join us in our mission to revolutionize the salon experience. Together, we're redefining beauty, one appointment at a time."
          rootClassName="rootClassName1"
        ></feature-card2>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard2 from './feature-card2'

export default {
  name: 'OurStory',
  props: {
    rootClassName: String,
  },
  components: {
    FeatureCard2,
  },
}
</script>

<style scoped>
.our-story-container {
  width: 100%;
  height: 1356px;
  display: flex;
  position: relative;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
}
.our-story-hero {
  height: 695px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-self: stretch;
  min-height: 80vh;
  align-items: center;
  padding-top: 48px;
  flex-direction: column;
  justify-content: center;
}
.our-story-container1 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.our-story-text {
  font-size: 3rem;
}
.our-story-text1 {
  font-size: 24px;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  padding-left: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-threeunits);
}
.our-story-image {
  width: 45rem;
  height: 438px;
  margin-top: var(--dl-space-space-twounits);
}
.our-story-features {
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: stretch;
  flex-direction: column;
}
.our-story-text4 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: var(--dl-space-space-threeunits);
}
.our-story-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-twounits);
  grid-template-columns: 1fr 1fr;
}

@media(max-width: 991px) {
  .our-story-container {
    height: 1449px;
  }
  .our-story-hero {
    flex-direction: column;
  }
  .our-story-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .our-story-text {
    text-align: center;
  }
  .our-story-text1 {
    text-align: center;
  }
  .our-story-text2 {
    text-align: center;
  }
  .our-story-image {
    width: 80%;
  }
}
@media(max-width: 767px) {
  .our-story-container {
    height: 1682px;
  }
  .our-story-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .our-story-text1 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .our-story-text2 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .our-story-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .our-story-container2 {
    grid-template-columns: 1fr;
  }
}
@media(max-width: 479px) {
  .our-story-container {
    height: 1872px;
  }
  .our-story-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .our-story-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .our-story-text1 {
    align-self: stretch;
  }
  .our-story-features {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>
