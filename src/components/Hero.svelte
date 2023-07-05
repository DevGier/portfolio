<script lang="ts">
  import { Application } from '@splinetool/runtime'
  import { onMount } from 'svelte'
  import { scrollRef, scrollTo } from 'svelte-scrolling'

  onMount(() => {
    const canvas = document.getElementById('herocanvas') as HTMLCanvasElement
    const app = new Application(canvas)
    app.load('https://prod.spline.design/Fd9aaCsHqFe-U2Du/scene.splinecode')
  })
</script>

<section class="hero" use:scrollRef={'home'}>
  <a
    href="#about"
    class="absolute bottom-16 z-50 w-full text-center"
    use:scrollTo={'about'}
  >
    <div id="mouse-scroll">
      <div class="mouse">
        <div class="mouse-in" />
      </div>
      <div>
        <span class="down-arrow-1" />
        <span class="down-arrow-2" />
        <span class="down-arrow-3" />
      </div>
    </div>
  </a>

  <div class="flex w-full z-10 relative h-full text-white">
    <div class="w-full container mx-auto my-auto relative flex gap-8">
      <div
        class="flex-col justify-center items-center mt-[-56px] relative hidden md:flex"
      >
        <div class="w-5 h-5 relative z-10 rounded-full bg-indigo-500" />
        <div
          class="absolute top-[50%] w-1 h-[200px] bg-gradient-to-b from-indigo-500 to-transparent ..."
        />
      </div>

      <div>
        <h1 class="text-7xl relative z-10 font-bold">
          Hi, I'm <span class="text-indigo-500">Tim</span>
        </h1>
        <p class="text-white relative z-10 pt-[24px] text-2xl">
          I'm a Frontend Developer
        </p>

        <canvas id="herocanvas" class="relative z-0 hidden md:block" />
      </div>
    </div>
  </div>
</section>
