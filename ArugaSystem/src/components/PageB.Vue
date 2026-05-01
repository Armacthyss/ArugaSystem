<template>
  <div style="background: #f0fdf4; min-height: 100vh; padding: 50px; text-align: center;">
    <h1 style="color: #166534; font-size: 3rem;">This is Page B</h1>
    <p style="color: #5d6b52; margin-bottom: 20px;">Staff Portal Area</p>

    <button 
      @click="$router.push('/')" 
      style="padding: 15px 30px; background: #166534; color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold;"
    >
      ← Back to Page A
    </button>
  </div>
</template>

<script setup>
// Navigation logic is handled by $router in the template
</script>