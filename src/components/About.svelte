<script>
  import Lazy from 'svelte-lazy'
</script>

<section class="container mx-auto my-[80px] text-center">
  <div class="w-[700px] mx-auto">
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
      <Lazy><img src="images/HTML-logo.svg" alt="HTML" /></Lazy>
    </div>
    <div class="card">
      <Lazy><img src="images/SASS-logo.svg" alt="SASS" /></Lazy>
    </div>
    <div class="card">
      <Lazy><img src="images/TypeScript-logo.svg" alt="SASS" /></Lazy>
    </div>
    <div class="card">
      <Lazy><img src="images/React-logo.svg" alt="React" /></Lazy>
    </div>
    <div class="card">
      <Lazy><img src="images/Vue-logo.svg" alt="Vue" /></Lazy>
    </div>
    <div class="card">
      <Lazy><img src="images/Svelte-logo.svg" alt="Svelte" /></Lazy>
    </div>
    <div class="card">
      <Lazy><img src="images/PHP-logo.svg" alt="PHP" /></Lazy>
    </div>
    <div class="card">
      <Lazy><img src="images/Tailwind-logo.svg" alt="Tailwind" /></Lazy>
    </div>
  </div>
</section>
