<script lang="ts">
  import { Application } from '@splinetool/runtime'
  import { onMount } from 'svelte'
  import { scrollRef, scrollTo } from 'svelte-scrolling'

  onMount(() => {
    const canvas = document.getElementById('hobbiescanvas') as HTMLCanvasElement
    const app = new Application(canvas)
    app.load('https://prod.spline.design/wrlJLxE3bL30HinT/scene.splinecode')
  })
</script>

<section class="hobbies my-[80px] md:my-[240px]" use:scrollRef={'hobbies'}>
  <div class="flex w-full z-10 relative h-full text-white">
    <div class="w-full container mx-auto my-auto relative flex gap-8">
      <div class="sm:w-full md:w-[40%] ml-auto">
        <h2 class="text-4xl relative z-10 font-bold">
          What I love to do in my <span class="text-indigo-500">free time</span>
        </h2>
        <p class="text-white relative z-10 pt-[24px]">
          I love to watch Formula 1 and to play racing games on my simulator. I
          also love working on projects of my own and to meet up with friends.
          Not to forget, I love traveling to places I have and/or have not been
          before.
        </p>
      </div>

      <canvas id="hobbiescanvas" class="relative z-0 hidden md:block" />
    </div>
  </div>
</section>
