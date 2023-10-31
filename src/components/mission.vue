<template>
  <div class="mission-container" v-bind:class="rootClassName">
    <div class="mission-banner">
      <h1 class="mission-text">Our Mission</h1>
      <span class="mission-text1">
        Our mission is to revolutionize the beauty industry by providing a
        cutting-edge online platform that empowers salon owners to expand their
        reach and connect with a diverse clientele. Simultaneously, we aim to
        offer individuals a seamless, convenient, and reliable way to discover,
        book, and review salon services.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mission',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.mission-container {
  width: 100%;
  height: 336px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.mission-banner {
  width: 100%;
  height: 489px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-self: flex-start;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.mission-text {
  font-size: 3rem;
  text-align: center;
}
.mission-text1 {
  font-size: 24px;
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}

@media(max-width: 991px) {
  .mission-text1 {
    max-width: 100%;
  }
}
@media(max-width: 767px) {
  .mission-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .mission-text1 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .mission-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>
