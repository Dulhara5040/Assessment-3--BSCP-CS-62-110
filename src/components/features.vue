<template>
  <div class="features-features" v-bind:class="rootClassName">
    <h1 class="features-text">
      <span>Discover our</span>
      <br />
      <span>unique features</span>
    </h1>
    <div class="features-separator"></div>
    <div class="features-container">
      <div class="features-container1">
        <feature-card4 rootClassName="rootClassName1"></feature-card4>
        <feature-card4
          title="Virtual Salon Tours"
          description="Experience a salon virtually before your appointment. We provide 360-degree virtual tours of partner salons, allowing users to explore the salon's ambiance, decor, and facilities, helping them make more informed choices."
          rootClassName="rootClassName4"
        ></feature-card4>
        <feature-card4
          title="Verified Reviews and Ratings"
          description="To maintain trust and authenticity, our platform verifies reviews, ensuring that all feedback is from genuine clients. Users can filter reviews by hair type, skin type, or specific services, making it easier to find relevant information."
          rootClassName="rootClassName3"
        ></feature-card4>
        <feature-card4
          title="Beauty Tips and Trends"
          description="Stay up-to-date with the latest beauty trends and tips through our blog section. We provide insights on haircare, skincare, and styling, keeping both salon professionals and clients informed and inspired."
          rootClassName="rootClassName2"
        ></feature-card4>
      </div>
      <img alt="image" src="/Images/img-1-500h.jpg" class="features-image" />
    </div>
  </div>
</template>

<script>
import FeatureCard4 from './feature-card4'

export default {
  name: 'Features',
  props: {
    rootClassName: String,
  },
  components: {
    FeatureCard4,
  },
}
</script>

<style scoped>
.features-features {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  flex-direction: column;
}
.features-text {
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.features-separator {
  width: 100px;
  height: 2px;
  background-color: var(--dl-color-gray-500);
}
.features-container {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.features-container1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.features-image {
  width: 450px;
  height: 450px;
  object-fit: cover;
  flex-shrink: 0;
  margin-left: var(--dl-space-space-fourunits);
  border-radius: var(--dl-radius-radius-round);
  object-position: left;
}

@media(max-width: 991px) {
  .features-features {
    align-items: center;
  }
  .features-container {
    flex-direction: column;
  }
  .features-image {
    width: 300px;
    height: 300px;
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
  }
}
@media(max-width: 767px) {
  .features-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .features-text {
    text-align: center;
  }
  .features-container {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .features-features {
    align-items: stretch;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .features-container1 {
    grid-template-columns: 1fr;
  }
  .features-image {
    width: 250px;
    height: 250px;
  }
}
</style>
