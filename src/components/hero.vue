<template>
  <div class="hero-container" v-bind:class="rootClassName">
    <div class="hero-hero">
      <div class="hero-container1">
        <h1 class="hero-text">Discover Your Perfect Look, Hassle-Free</h1>
        <span class="hero-text1">
          Are you a salon owner eager to expand your customer base? Or a beauty
          enthusiast in search of top-notch services? Look no further! Our
          innovative online salon appointment website is here to transform your
          salon experience.
        </span>
        <router-link to="/salon" class="hero-navlink button">
          Get Started
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 804px;
  display: flex;
  position: relative;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
}
.hero-hero {
  width: 100%;
  height: 905px;
  display: flex;
  align-self: center;
  min-height: 80vh;
  align-items: stretch;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 0px;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-color: #D9D9D9;
  background-image: url("/Images/hero-img-1500h.jpg");
  background-position: center;
}
.hero-container1 {
  width: 1122px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: stretch;
  align-items: flex-start;
  margin-left: var(--dl-space-space-fourunits);
  flex-direction: column;
  justify-content: center;
}
.hero-text {
  color: rgb(255, 255, 255);
  width: 718px;
  height: 137px;
  font-size: 3rem;
  max-width: auto;
  align-self: flex-start;
  text-align: left;
}
.hero-text1 {
  color: rgb(255, 255, 255);
  font-size: 1.15rem;
  max-width: 60%;
  margin-top: var(--dl-space-space-threeunits);
  text-align: justify;
  margin-bottom: var(--dl-space-space-threeunits);
}
.hero-navlink {
  color: #080808;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-weight: 400;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  margin-right: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.hero-navlink:hover {
  transform: scale(1.02);
}

@media(max-width: 991px) {
  .hero-container1 {
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
  }
  .hero-text {
    align-self: flex-start;
    text-align: left;
  }
}
@media(max-width: 767px) {
  .hero-hero {
    align-items: center;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .hero-container1 {
    align-items: center;
    margin-left: var(--dl-space-space-halfunit);
  }
  .hero-text {
    text-align: center;
  }
  .hero-text1 {
    max-width: 100%;
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 479px) {
  .hero-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .hero-container1 {
    height: 391px;
    align-self: stretch;
    align-items: center;
    margin-left: 0px;
  }
  .hero-text {
    width: 478px;
    height: 172px;
  }
  .hero-text1 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .hero-navlink {
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
