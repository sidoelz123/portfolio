<template>
  <div class="flex justify-evenly text-yellow-300 font-bold">
    <RouterLink class="group relative inline-block text-sm focus:outline-none" to="/">
      <span
        class="absolute inset-0 border border-dashed border-yellow-300 group-active:border-yellow-300 rounded"></span>
      <span
        class="block border hover:text-neutral-800 border-yellow-300 hover:bg-yellow-300 px-12 py-2 transition-transform active:border-yellow-300 active:hover:bg-yellow-300 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded">
        About Me
      </span>
    </RouterLink>
    <RouterLink class="group relative inline-block text-sm focus:outline-none " to="/experience">
      <span
        class="absolute inset-0 border border-dashed border-yellow-300 group-active:border-yellow-300 rounded"></span>
      <span
        class="block border hover:text-neutral-800 border-yellow-300 hover:bg-yellow-300 px-12 py-2 transition-transform active:border-yellow-300 active:hover:bg-yellow-300 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded">
        Work Experience
      </span>
    </RouterLink>
    <RouterLink class="group relative inline-block text-sm focus:outline-none" to="/projects">
      <span
        class="absolute inset-0 border border-dashed border-yellow-300 group-active:border-yellow-300 rounded"></span>
      <span
        class="block border hover:text-neutral-800 border-yellow-300 hover:bg-yellow-300 px-12 py-2 transition-transform active:border-yellow-300 active:hover:bg-yellow-300 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded">
        Projects
      </span>

    </RouterLink>
    <!-- <RouterLink class="group relative inline-block text-sm focus:outline-none" to="/contact"> -->
    <!--   <span -->
    <!--     class="absolute inset-0 border border-dashed border-yellow-300 group-active:border-yellow-300 rounded"></span> -->
    <!--   <span -->
    <!--     class="block border border-yellow-300 hover:bg-yellow-300 px-12 py-2 transition-transform active:border-yellow-300 active:hover:bg-yellow-300 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded"> -->
    <!--     Contact -->
    <!--   </span> -->
    <!-- </RouterLink> -->
    <!-- <RouterLink to="/certificate">Certificate</RouterLink> -->
  </div>
</template>
