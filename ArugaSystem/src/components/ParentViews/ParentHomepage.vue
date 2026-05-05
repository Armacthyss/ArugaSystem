<template>
  <div class="w-full min-h-screen bg-[#FDFCF7] flex justify-center font-sans antialiased text-slate-900">
    <div class="w-full max-w-[1250px] px-6 py-6">

      <!-- 1. TOP HEADER (Identity & Account) -->
      <header class="flex justify-between items-center mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-[#5d6b52] rounded-xl flex items-center justify-center text-white font-black shadow-lg">A</div>
          <div>
            <h1 class="text-lg font-bold text-[#2d3a26] leading-none">Aruga</h1>
            <p class="text-[9px] font-black text-[#99ad7a] uppercase tracking-tighter">Pediatric Portal</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="hidden sm:flex flex-col items-end">
            <span class="text-xs font-bold text-slate-700">Maria Santos</span>
            <span class="text-[9px] font-black uppercase text-[#99ad7a]">Guardian Account</span>
          </div>
          <div class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
            <span class="text-sm">👤</span>
          </div>
        </div>
      </header>

      <!-- 2. MAIN NAVIGATION (With Scanner Tab) -->
      <nav class="flex items-center justify-between bg-white border border-slate-200/60 p-2 rounded-[24px] shadow-sm mb-10 sticky top-4 z-50 backdrop-blur-md">
        <div class="flex gap-1">
          <button v-for="tab in ['Overview', 'Check-in', 'Schedule', 'Records']" :key="tab"
            @click="activeNav = tab"
            :class="activeNav === tab ? 'bg-[#5d6b52] text-white shadow-md' : 'text-slate-400 hover:bg-slate-50'"
            class="px-6 py-2.5 rounded-[18px] text-[11px] font-black uppercase tracking-widest transition-all">
            {{ tab }}
          </button>
        </div>
        
        <!-- Quick QR Action -->
        <button @click="activeNav = 'Check-in'" class="flex items-center gap-2 px-6 py-2.5 bg-[#99ad7a] hover:bg-[#899c6d] text-white rounded-[18px] transition-all shadow-lg">
          <span class="text-xs">📸</span>
          <span class="text-[11px] font-black uppercase tracking-widest">Clinic Check-in</span>
        </button>
      </nav>

      <div class="grid grid-cols-12 gap-8">
        
        <!-- 3. SIDEBAR: CHILD SELECTOR -->
        <aside class="col-span-12 lg:col-span-3 space-y-4">
          <h3 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Family Profiles</h3>
          <div class="space-y-3">
            <button v-for="child in childProfiles" :key="child.id"
              @click="selectedChild = child.id" 
              :class="selectedChild === child.id ? 'border-[#5d6b52] bg-white ring-4 ring-[#5d6b52]/5' : 'border-transparent bg-white/50 hover:bg-white'"
              class="w-full p-4 rounded-[28px] border-2 transition-all text-left flex items-center gap-4 group">
              <span class="text-2xl">{{ child.emoji }}</span>
              <div>
                <p class="text-sm font-bold text-slate-800">{{ child.name }}</p>
                <p class="text-[10px] text-slate-400 font-medium">ID: {{ child.tag }}</p>
              </div>
            </button>
          </div>
        </aside>

        <!-- 4. MAIN CONTENT AREA -->
        <main class="col-span-12 lg:col-span-9">
          
          <!-- SCANNER VIEW -->
          <div v-if="activeNav === 'Check-in'" class="animate-in fade-in zoom-in-95 duration-500">
            <div class="bg-[#2d3a26] rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div class="relative z-10 max-w-md mx-auto">
                <div class="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <span class="text-4xl">📷</span>
                </div>
                <h2 class="text-3xl font-black mb-4">Arrived at Clinic?</h2>
                <p class="text-white/60 text-sm mb-10 leading-relaxed">
                  Please scan the QR code displayed at the reception desk to join the live queue for <strong>{{ selectedChild === 1 ? 'Liam Gabriel' : 'Sophia Rose' }}</strong>.
                </p>
                
                <!-- Mock Scanner Interface -->
                <div class="relative w-full aspect-square bg-black/40 rounded-3xl border-2 border-dashed border-[#99ad7a]/50 flex items-center justify-center mb-10 group cursor-pointer overflow-hidden">
                   <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   <p class="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#99ad7a]">Align QR Code within Frame</p>
                   <!-- Animated Scanner Line -->
                   <div class="absolute top-0 left-0 w-full h-1 bg-[#99ad7a] shadow-[0_0_15px_#99ad7a] animate-bounce"></div>
                </div>

                <button @click="activeNav = 'Overview'" class="w-full py-4 bg-[#99ad7a] hover:bg-white hover:text-[#2d3a26] text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl">
                  Allow Camera Access
                </button>
              </div>
            </div>
          </div>

          <!-- OVERVIEW / DASHBOARD (Referencing image_0e3a1f.png) -->
          <div v-else class="space-y-6 animate-in slide-in-from-bottom-4">
            <!-- Queue Status Card -->
            <div class="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div class="text-center md:text-left">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Today's Priority Ticket</p>
                <h2 class="text-4xl font-black text-[#2d3a26]">You are Queue <span class="text-[#99ad7a]">#015</span></h2>
                <p class="text-sm font-bold text-slate-500 mt-1">Active for {{ selectedChild === 1 ? 'Liam Gabriel' : 'Sophia Rose' }}</p>
              </div>
              <div class="bg-[#f0f2ed] p-8 rounded-[32px] border border-[#99ad7a]/20 text-center min-w-[200px]">
                <p class="text-[10px] font-black text-[#5d6b52] uppercase mb-1">Now Serving</p>
                <p class="text-5xl font-black text-[#2d3a26]">#012</p>
                <p class="text-[10px] font-bold text-[#5d6b52] mt-3 uppercase">3rd in line</p>
              </div>
            </div>

            <!-- Record Preview -->
            <div class="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
              <div class="flex justify-between items-center mb-8">
                <h3 class="text-lg font-bold">Upcoming Doses</h3>
                <button class="text-[10px] font-black text-[#99ad7a] uppercase tracking-widest">View Full Record →</button>
              </div>
              <div class="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-[#5d6b52] rounded-2xl flex items-center justify-center text-white text-xl">💉</div>
                  <div>
                    <p class="text-sm font-bold text-slate-800">Pentavalent Vaccine - Dose 2</p>
                    <p class="text-xs text-slate-400">Scheduled: May 16, 2026</p>
                  </div>
                </div>
                <span class="px-4 py-2 bg-white rounded-xl text-[10px] font-black text-[#5d6b52] border border-slate-200 uppercase">Upcoming</span>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeNav = ref('Overview')
const selectedChild = ref(1)

const childProfiles = [
  { id: 1, name: 'Liam Gabriel', emoji: '👶', tag: '#123-456' },
  { id: 2, name: 'Sophia Rose', emoji: '👧', tag: '#123-488' }
]
</script>