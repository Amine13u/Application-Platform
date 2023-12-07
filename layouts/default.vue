<template>
  <nav
    class="p-6 flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500"
  >
    <NuxtLink to="/" class="text-2xl text-white">Application Platform</NuxtLink>

    <div class="flex items-center space-x-4">
      <NuxtLink to="/" class="text-white hover:text-cyan-300">Home</NuxtLink>
      <NuxtLink to="/get-started" class="text-white hover:text-cyan-300"
        >Get Started</NuxtLink
      >
      <NuxtLink
        v-if="!isAuthenticated"
        to="/sign-in"
        class="text-white hover:text-cyan-300"
      >
        Sign In
      </NuxtLink>
      <NuxtLink
        v-if="isAuthenticated"
        @click="logout"
        class="text-white hover:text-cyan-300"
      >
        Sign Out
      </NuxtLink>
    </div>
  </nav>

  <slot />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const router = useRouter();

const { logUserOut } = useAuthStore();
const { isAuthenticated } = storeToRefs(useAuthStore());

const logout = () => {
  logUserOut();
  router.push("/sign-in");
};
</script>
