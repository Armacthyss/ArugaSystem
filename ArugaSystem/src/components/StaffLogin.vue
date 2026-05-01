<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goParentLogin = () => {
  router.push('/login')
}

const goAdminLogin = () => {
  router.push('/admin-login')
}

const handleStaffLogin = () => {
  console.log('Staff logging in...')
}
</script>

<template>
  <div class="min-h-screen flex">

    <!-- LEFT SIDE -->
    <div
      class="w-1/2 relative bg-cover bg-center"
      style="background-image:url('https://images.unsplash.com/photo-1576091160550-2173dba999ef');"
    >

      <!-- Green Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/70 to-green-700/80"></div>

      <!-- Text -->
      <div class="relative z-10 h-full flex flex-col justify-between p-12 text-white">

        <!-- Logo -->
        <div>
          <h1 class="text-3xl font-bold tracking-wide">
            ARUGA
          </h1>

          <p class="text-sm text-white/70 mt-1">
            Staff Portal
          </p>
        </div>

        <!-- Main -->
        <div class="max-w-xl">
          <h2 class="text-5xl font-bold leading-tight mb-6">
            Healthcare Worker Portal
          </h2>

          <p class="text-lg text-white/90 leading-relaxed">
            Manage child immunization records, monitor vaccination schedules,
            and ensure DOH EPI compliance for Filipino children.
          </p>
        </div>

        <!-- Bottom -->
        <div class="flex gap-6 text-sm text-white/80">
          <span>● Secure & Encrypted</span>
          <span>● HIPAA Compliant</span>
        </div>

      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="w-1/2 bg-[#fff8ec] flex items-center justify-center">

      <div class="w-[420px] bg-white rounded-3xl shadow-xl p-10">

        <!-- Header -->
        <h2 class="text-3xl font-bold text-[#2d3a26] mb-2">
          Staff Login
        </h2>

        <p class="text-gray-500 mb-8">
          Access the healthcare worker portal
        </p>

        <!-- Email -->
        <div class="mb-5">
          <label class="block mb-2 text-sm text-gray-700">
            Work Email Address
          </label>

          <input
            type="email"
            placeholder="staff@hospital.com"
            class="w-full border-2 border-[#dcccac] rounded-xl px-4 py-3 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div class="mb-5">
          <label class="block mb-2 text-sm text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            class="w-full border-2 border-[#dcccac] rounded-xl px-4 py-3 focus:outline-none"
          />
        </div>

        <!-- Remember -->
        <div class="flex justify-between text-sm mb-6">
          <label class="flex gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" class="text-[#546b41]">
            Forgot password?
          </a>
        </div>

        <!-- Buttons -->
        <button
          @click="handleStaffLogin"
          class="w-full bg-[#546b41] text-white py-3 rounded-xl mb-4"
        >
          Sign In to Portal
        </button>

        <button
          class="w-full bg-[#99ad7a] text-white py-3 rounded-xl"
        >
          Request Employee Account
        </button>

        <!-- Footer Links -->
        <p class="text-center text-sm mt-6 text-gray-500">
          Parent or Guardian?

          <span
            @click="goParentLogin"
            class="text-[#546b41] font-bold cursor-pointer hover:underline ml-1"
          >
            Login here
          </span>
        </p>

        <p class="text-center text-sm mt-3 text-gray-500">
          Administrator?

          <span
            @click="goAdminLogin"
            class="text-[#546b41] font-bold cursor-pointer hover:underline ml-1"
          >
            Login here
          </span>
        </p>

      </div>

    </div>

  </div>
</template>