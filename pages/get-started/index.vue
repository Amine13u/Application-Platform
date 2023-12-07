<template>
  <div
    class="flex flex-col items-center justify-start min-h-screen bg-gray-100"
  >
    <div class="p-4 bg-white rounded shadow-md w-96 mt-20">
      <h2 class="mb-4 text-xl font-semibold text-gray-700">CV Form</h2>
      <div class="space-y-3">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          v-model="cvData.name"
          type="text"
          id="name"
          class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          placeholder="Enter your name"
          required
        />

        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="cvData.email"
          type="email"
          id="email"
          class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          placeholder="Enter your email"
          required
        />

        <label for="skills" class="block text-sm font-medium text-gray-700"
          >Skills</label
        >
        <textarea
          v-model="cvData.skills"
          id="skills"
          class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          placeholder="Enter your skills"
          required
        />

        <button
          @click.prevent="update"
          class="w-full px-3 py-2 text-white bg-cyan-700 hover:bg-cyan-500 rounded-md"
        >
          Generate CV !
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCvStore } from "~/store/cv";

const { updateCv } = useCvStore();

const { cv } = storeToRefs(useCvStore());

const cvData = ref({
  name: "",
  email: "",
  skills: "",
});

const update = () => {
  updateCv(cvData.value);
};
</script>
