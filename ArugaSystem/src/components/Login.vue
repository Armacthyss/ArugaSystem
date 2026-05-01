<template>
  <div class="min-h-screen flex">

    <!-- Left Side Full Image -->
    <div
      class="w-1/2 relative bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1584515933487-779824d29309');"
    >

      <!-- Green Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/70 to-green-700/80"></div>

      <!-- Text Content -->
      <div class="relative z-10 h-full flex flex-col justify-between p-12 text-white">

        <!-- Logo -->
        <div>
          <h1 class="text-3xl font-bold tracking-wide">
            ARUGA
          </h1>
        </div>

        <!-- Main Text -->
        <div class="max-w-xl">
          <h2 class="text-5xl font-bold leading-tight mb-6">
            Pediatric Immunization Tracker
          </h2>

          <p class="text-lg text-white/90 leading-relaxed">
            Digitizing the traditional Baby Book for Filipino children.
            Track vaccinations from birth through 18 years old with
            automatic scheduling and DOH EPI compliance.
          </p>
        </div>

        <!-- Bottom Tags -->
        <div class="flex gap-6 text-sm text-white/80">
          <span>● Secure & Encrypted</span>
          <span>● HIPAA Compliant</span>
        </div>

      </div>
    </div>

    <!-- Right Side Login -->
    <div class="w-1/2 bg-[#fff8ec] flex items-center justify-center">

      <div class="w-[420px] bg-white rounded-3xl shadow-xl p-10">

        <h2 class="text-3xl font-bold text-[#2d3a26] mb-2">
          Parent Login
        </h2>

        <p class="text-gray-500 mb-8">
          Access your child's immunization records
        </p>

        <!-- Email -->
        <div class="mb-5">
          <label class="block mb-2 text-sm text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="parent@example.com"
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
          class="w-full bg-[#546b41] text-white py-3 rounded-xl mb-4"
        >
          Sign In
        </button>

        <button
          class="w-full bg-[#99ad7a] text-white py-3 rounded-xl"
        >
          Create New Account
        </button>
        <p class="text-center text-sm mt-6 text-gray-500">
  Healthcare Provider?
  <span 
    @click="$router.push('/StaffLogin')" 
    class="text-[#546b41] font-bold cursor-pointer hover:underline"
  >
    Login here
  </span>
</p>
      </div>

    </div>

  </div>
</template>

<script setup>
</script>