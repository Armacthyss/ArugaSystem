<template>
  <div class="w-full min-h-screen bg-[#fff8ec] flex justify-center">
    <div class="w-full max-w-[1108px] px-8 py-8 relative">

      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 bg-[#5d6b52] rounded-2xl flex items-center justify-center text-white text-xl font-bold">
            A
          </div>
          <div>
            <h1 class="text-xl font-semibold text-black">Aruga</h1>
            <p class="text-xs text-black leading-4">
              Pediatric Immunization Tracker
            </p>
          </div>
        </div>

        <button class="w-10 h-10 rounded-full hover:bg-white flex items-center justify-center">
          ☰
        </button>
      </div>

      <!-- Navigation -->
      <div class="flex gap-4 mb-6">
        <button class="px-6 h-12 rounded-2xl bg-[#546b41] text-white">
          Home
        </button>
        <button class="px-6 h-12 rounded-2xl bg-white border text-[#5d6b52]">
          Schedule
        </button>
        <button class="px-6 h-12 rounded-2xl bg-white border text-[#5d6b52]">
          Appointment
        </button>
        <button class="px-6 h-12 rounded-2xl bg-white border text-[#5d6b52]">
          Child Info
        </button>
      </div>

      <!-- Parent Card -->
      <div class="bg-white rounded-2xl shadow p-4 mb-4 flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-[#546b41] text-white flex items-center justify-center">
          👤
        </div>
        <div>
          <h2 class="font-semibold text-[#2d3a26]">Maria Claria Santos</h2>
          <p class="text-sm text-[#5d6b52]">Parent / Guardian Account</p>
        </div>
      </div>

      <!-- Add Child -->
      <button class="w-full h-12 bg-[#99ad7a] text-white rounded-2xl mb-6 font-medium">
        + Add Child
      </button>

      <!-- Main Dashboard -->
      <div class="grid grid-cols-12 gap-6 mb-6">

        <!-- Child Card -->
        <div class="col-span-4 bg-white rounded-2xl shadow p-6 text-center">
          <div class="w-28 h-28 mx-auto rounded-full bg-gray-100 mb-4 flex items-center justify-center text-4xl">
            👶
          </div>

          <h2 class="text-xl font-semibold text-[#2d3a26]">
            Liam Gabriel Santos
          </h2>

          <p class="text-sm text-[#5d6b52] mt-1">
            Patient ID: #123456
          </p>

          <p class="text-xs text-[#5d6b52] mt-1">
            Born: March 15, 2024
          </p>

          <button class="w-full mt-5 h-10 bg-[#546b41] text-white rounded-lg">
            View Details
          </button>
        </div>

        <!-- Right Side -->
        <div class="col-span-8">

          <div class="mb-5">
            <h2 class="text-3xl font-semibold text-[#2d3a26]">Dashboard</h2>
            <p class="text-[#5d6b52]">
              Overview of Liam's vaccination records
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-4">
            <StatCard title="Total Vaccines" number="5" color="bg-[#546b41]" />
            <StatCard title="Upcoming Vaccines" number="2" color="bg-[#99ad7a]" />
            <StatCard title="Overdue Vaccines" number="1" color="bg-[#dc6b6b]" />
            <StatCard title="Completed Vaccines" number="0" color="bg-[#028b59]" />
          </div>

        </div>
      </div>

      <!-- Schedule -->
      <div class="bg-white rounded-2xl shadow p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-[#2d3a26]">
            Vaccine Dose Schedule for Liam
          </h2>
          <button class="text-[#546b41] underline text-sm">
            See more
          </button>
        </div>

        <p class="text-sm text-[#5d6b52] mb-5">
          Pentavalent Vaccine (28-day minimum interval)
        </p>

        <div class="space-y-4">
          <ScheduleCard
            title="Dose 1"
            date="April 18, 2026"
            status="Completed"
            bg="bg-[#028b59]"
          />

          <ScheduleCard
            title="Dose 2"
            date="May 16, 2026"
            status="Scheduled"
            bg="bg-[#99ad7a]"
          />

          <ScheduleCard
            title="Dose 3"
            date="June 13, 2026"
            status="Upcoming"
            bg="bg-[#546b41]"
          />
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-semibold text-[#2d3a26] mb-4">
          Recent Activity
        </h2>

        <div class="space-y-3">
          <ActivityItem title="Pentavalent Vaccine - 1st Dose" date="Completed on April 18, 2026" />
          <ActivityItem title="Pentavalent Vaccine - 2nd Dose" date="Scheduled for May 16, 2026" />
          <ActivityItem title="Hepatitis B Vaccine" date="Overdue since March 10, 2026" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>