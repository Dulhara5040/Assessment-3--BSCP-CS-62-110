<template>
  <div class="about-container" v-bind:class="rootClassName">
    <div class="about-hero">
      <div class="about-container1">
        <router-link to="/about" class="about-navlink">
          <h1 class="about-text">About Us</h1>
        </router-link>
        <span class="about-text1">
          At Fresh-Cut, we are passionate about transforming the salon industry
          and enhancing the beauty experience for both salon owners and clients.
          Our journey began with a vision to create a seamless online platform
          that simplifies the process of discovering, booking, and enjoying salon
          services. Here&apos;s what sets us apart:
        </span>
        <div class="about-btn-group">
          <router-link to="/blog" class="about-navlink1 button">
            Learn More
          </router-link>
        </div>
      </div>
      <img alt="image" src="/Images/about-1200w.jpg" class="about-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  height: 783px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.about-hero {
  width: 100%;
  height: 845px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: stretch;
  min-height: 80vh;
  align-items: center;
  flex-direction: row;
  padding-bottom: 54px;
  justify-content: space-between;
}
.about-container1 {
  display: flex;
  margin-left: var(--dl-space-space-threeunits);
  margin-right: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.about-navlink {
  display: contents;
}
.about-text {
  font-size: 3rem;
  max-width: 450px;
  text-decoration: none;
}
.about-text1 {
  font-size: 24px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.about-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.about-navlink1 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  border-color: transparent;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.about-navlink1:hover {
  border-color: var(--dl-color-gray-black);
}
.about-image {
  width: 400px;
  align-self: center;
  object-fit: cover;
}
.about-root-class-name {
  width: auto;
  align-self: stretch;
}

@media(max-width: 991px) {
  .about-container {
    height: 1076px;
  }
  .about-hero {
    width: 100%;
    height: 1001px;
    flex-direction: column;
  }
  .about-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .about-text {
    text-align: center;
  }
  .about-text1 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .about-root-class-name {
    width: auto;
    align-self: stretch;
  }
}
@media(max-width: 767px) {
  .about-container {
    height: 1364px;
  }
  .about-hero {
    height: 866px;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .about-text1 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .about-image {
    width: 80%;
  }
}
@media(max-width: 479px) {
  .about-container {
    height: 1119px;
  }
  .about-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .about-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .about-btn-group {
    flex-direction: column;
  }
  .about-navlink1 {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
}
</style>
