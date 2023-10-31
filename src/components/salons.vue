<template>
  <div class="salons-container" v-bind:class="rootClassName">
    <div class="salons-container1">
      <h1 class="salons-text">{{ heading }}</h1>
    </div>
    <div class="salons-gallery">
      <gallery-card1
        title="Elysian Tresses"
        subtitle="Transform your hair into a heavenly masterpiece at Elysian Tresses, where expert stylists make your beauty dreams come true."
        image_src="/Images/salon/1-1500h.jpg"
        subtitle1="Phone: (555) 123-4567"
        subtitle11="Email: info@elysiantresses.com"
        rootClassName="rootClassName"
      ></gallery-card1>
      <gallery-card1
        title="Lumina Glamour Lounge"
        subtitle="At Lumina Glamour Lounge, we enhance your natural radiance, ensuring you leave with a newfound sparkle that lights up any room."
        image_src="/Images/salon/4-1500h.jpg"
        subtitle1="Phone: (555) 987-6543"
        subtitle11="Email: contact@luminaglamour.com"
        rootClassName="rootClassName1"
      ></gallery-card1>
      <gallery-card1
        title="Velvet &amp; Grace Hair Studio"
        subtitle="Velvet &amp; Grace Hair Studio offers a haven of elegance where you can experience the luxury and softness of your own beauty."
        image_src="/Images/salon/5-1500h.jpg"
        subtitle1="Phone: (555) 321-7890"
        subtitle11="Email: velvetandgrace@gmail.com"
        rootClassName="rootClassName2"
      ></gallery-card1>
      <gallery-card1
        title=" Enchanted Mirror Salon &amp; Spa"
        subtitle="At Enchanted Mirror, our goal is to help you find and embrace your true self through our rejuvenating salon and spa services."
        image_src="/Images/salon/3-1500h.jpg"
        subtitle1="Phone: (555) 876-5432"
        subtitle11="Email: contact@enchantedmirrorspa.com"
        rootClassName="rootClassName3"
      ></gallery-card1>
      <gallery-card1
        title="The Radiance Haven"
        subtitle="The Radiance Haven specializes in revealing your inner glow with an array of treatments that leave you feeling luminous."
        image_src="/Images/salon/2-1500h.jpg"
        subtitle1="Phone: (555) 234-5678"
        subtitle11="Email: info@radiancesalon.com"
        rootClassName="rootClassName4"
      ></gallery-card1>
      <gallery-card1
        title="Opulent Curls &amp; Coils"
        subtitle="Opulent Curls &amp; Coils is your destination for celebrating the opulence and perfection of naturally beautiful curly and coily hair."
        image_src="/Images/salon/6-1500h.jpg"
        subtitle1="Phone: (555) 567-8901"
        subtitle11="Email: opulentcurls@email.com"
        rootClassName="rootClassName5"
      ></gallery-card1>
    </div>
  </div>
</template>

<script>
import GalleryCard1 from './gallery-card1'

export default {
  name: 'Salons',
  props: {
    heading: {
      type: String,
      default: 'Salons',
    },
    rootClassName: String,
  },
  components: {
    GalleryCard1,
  },
}
</script>

<style scoped>
.salons-container {
  width: 100%;
  height: 1069px;
  display: flex;
  position: relative;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  justify-content: center;
}
.salons-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
}
.salons-text {
  font-size: 3em;
  align-self: center;
}
.salons-gallery {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  grid-template-columns: 1fr 1fr 1fr;
}

@media(max-width: 991px) {
  .salons-container {
    height: 1587px;
  }
  .salons-gallery {
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 767px) {
  .salons-container {
    height: 1432px;
  }
  .salons-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .salons-gallery {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>
