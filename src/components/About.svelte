<script>
  import { scrollRef } from 'svelte-scrolling'
</script>

<section
  class="container mx-auto my-[80px] text-center"
  use:scrollRef={'about'}
>
  <div class="w-full md:w-[700px] mx-auto">
    <h2 class="text-white text-4xl font-semibold">
      My name is <span class="text-indigo-500">Tim de Gier</span>
    </h2>
    <p class="mt-[24px] text-white leading-8">
      I am a 21 year old Frontend Developer from the Netherlands. I currently
      have more than 5 years of experience as a Frontend Developer. This
      includes making, improving or rebuilding entire websites. I loving working
      on exciting new projects and continuously learning new and complex
      technologies.
    </p>
  </div>

  <div class="cards">
    <div class="card">
      <img src="images/HTML-logo.svg" alt="HTML" />
    </div>
    <div class="card">
      <img src="images/SASS-logo.svg" alt="SASS" />
    </div>
    <div class="card">
      <img src="images/TypeScript-logo.svg" alt="SASS" />
    </div>
    <div class="card">
      <img src="images/React-logo.svg" alt="React" />
    </div>
    <div class="card">
      <img src="images/Vue-logo.svg" alt="Vue" />
    </div>
    <div class="card">
      <img src="images/Svelte-logo.svg" alt="Svelte" />
    </div>
    <div class="card">
      <img src="images/PHP-logo.svg" alt="PHP" />
    </div>
    <div class="card">
      <img src="images/Tailwind-logo.svg" alt="Tailwind" />
    </div>
  </div>
</section>
