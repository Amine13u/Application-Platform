<template>
  <div
    class="flex flex-col items-center justify-start min-h-screen bg-gray-100"
  >
    <div class="p-4 bg-white rounded shadow-md w-96 mt-40">
      <h2 class="mb-4 text-xl font-semibold text-gray-700">Login</h2>
      <div class="space-y-3">
        <label for="uname" class="block text-sm font-medium text-gray-700"
          >Username</label
        >
        <input
          v-model="user.username"
          type="text"
          id="uname"
          class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter Username"
          required
        />

        <label for="psw" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          v-model="user.password"
          type="password"
          id="psw"
          class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter Password"
          required
        />

        <button
          @click.prevent="login"
          class="w-full px-3 py-2 text-white bg-cyan-700 hover:bg-cyan-500 rounded-md"
        >
          Login
        </button>
        <p v-if="error" class="text-red-500">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { authenticateUser } = useAuthStore();

const { isAuthenticated } = storeToRefs(useAuthStore());

const user = ref({
  username: "pcumbes2r",
  password: "obhSsvCF8c0",
});
const error = ref<string>("");
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);

  if (isAuthenticated) {
    router.push("/");
    return;
  }

  error.value = "Bad credentials";
};
</script>
