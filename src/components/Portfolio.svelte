<script>
  import Lazy from 'svelte-lazy'
  import { Splide, SplideSlide } from '@splidejs/svelte-splide'
  import { scrollRef } from 'svelte-scrolling'

  import '@splidejs/svelte-splide/css'
  import '@splidejs/svelte-splide/css/skyblue'
  import '@splidejs/svelte-splide/css/sea-green'
  import '@splidejs/svelte-splide/css/core'
</script>

<div class="container mx-auto mt-[80px] mb-[40px]" use:scrollRef={'work'}>
  <h2 class="text-4xl text-white font-semibold text-center">
    Projects <span class="text-indigo-500">I've worked on</span>
  </h2>

  <h4 class="text-2xl text-white font-normal text-center mt-[24px]">
    Some of the big names I've helped.
  </h4>
</div>

<Splide
  aria-label="My projects"
  class="portfolio"
  options={{
    rewind: true,
    gap: '40px',
    perPage: 3,
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1.5,
      },
    },
    pagination: false,
  }}
>
  <!-- <SplideSlide>
    <div class="slide">
      <img src="images/byner-plugin.png" alt="Byner plugin" />
      <p>
        <b>Byner plugin</b><br />
        <i class="text-green-500">By order of Eastlane.</i><br />
        Plugin for one of the most popular CRM systems for jobs in the Netherlands.
      </p>
    </div>
  </SplideSlide> -->
  <SplideSlide>
    <div class="slide">
      <Lazy
        ><img src="images/dosvolleybal-website.png" alt="DOS Volleybal" /></Lazy
      >
      <p>
        <b>DOS Volleybal</b><br />
        <i class="text-sky-500">At my company H1 Media.</i><br />
        Volleybal website built with Roots Sage and implemented API integrations
        with Nevobo.
      </p>
    </div>
  </SplideSlide>
  <SplideSlide>
    <div class="slide">
      <Lazy><img src="images/aryza-website.png" alt="Aryza website" /></Lazy>
      <p>
        <b>Aryza</b><br />
        <i class="text-orange-500">During my career at Social Brothers.</i><br
        />
        International company website built with a custom theme and 10+ languages.
      </p>
    </div>
  </SplideSlide>
  <SplideSlide>
    <div class="slide">
      <Lazy
        ><img src="images/abnetten-website.png" alt="ABnetten website" /></Lazy
      >
      <p>
        <b>ABnetten</b><br />
        <i class="text-sky-500">During my career at MD Webbureau.</i><br />
        Big webshop built with Magento. Almost completely customised the theme for
        this website.
      </p>
    </div>
  </SplideSlide>
</Splide>

<style lang="scss">
  .slide {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;

    p {
      padding: 24px;

      i {
        line-height: 40px;
      }
    }
  }
</style>
