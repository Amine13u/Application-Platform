<template>
  <div class="py-20 px-6 bg-gray-100 text-center">
    <h1 class="mb-12 text-5xl text-black">Find a job anywhere now !</h1>

    <NuxtLink
      to="/get-started"
      class="inline-block py-4 px-8 bg-cyan-700 hover:bg-cyan-500 text-white rounded-md"
      >Get Started</NuxtLink
    >
  </div>

  <div class="py-10 px-6">
    <h2 class="mb-8 text-2xl text-center">Newest jobs</h2>

    <div class="space-y-4">
      <Job />
      <Job />
      <Job />
    </div>
  </div>
</template>
