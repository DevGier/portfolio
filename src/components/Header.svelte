<script>
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
</script>

<header class="header absolute top-0 left-0 right-0 z-50">
  <div class="container mx-auto flex items-center py-8">
    <div class="logo">
      <h2 class="text-white text-2xl font-semibold">
        <img src="images/logo-light.svg" alt="Logo" />
      </h2>
    </div>

    <div class="items-center gap-12 ml-auto hidden md:flex">
      <a
        use:scrollTo={'home'}
        href="#home"
        class="font-semibold text-indigo-500 hover:text-indigo-300">Home</a
      >
      <a
        use:scrollTo={'about'}
        href="#about"
        class="text-white font-semibold hover:text-indigo-300">About</a
      >
      <a
        use:scrollTo={'experience'}
        href="#experience"
        class="text-white font-semibold hover:text-indigo-300">Experience</a
      >
      <a
        use:scrollTo={'work'}
        href="#work"
        class="text-white font-semibold hover:text-indigo-300">Work</a
      >
      <a
        use:scrollTo={'hobbies'}
        href="#hobbies"
        class="text-white font-semibold hover:text-indigo-300">Hobbies</a
      >
      <a
        use:scrollTo={'contact'}
        href="#contact"
        class="text-white font-semibold hover:text-indigo-300">Contact</a
      >
      <a
        href="/cv.pdf"
        download
        class="bg-indigo-600 text-white py-4 px-5 rounded-[8px] hover:bg-indigo-700 transition uppercase font-semibold"
        >Download CV</a
      >
    </div>
  </div>
</header>
