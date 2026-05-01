<template>
  <div class="flex h-screen bg-[#F8FAFC] p-4 gap-4 overflow-hidden font-sans antialiased text-slate-900">

    <!-- SIDEBAR (Consistent with your design) -->
    <aside class="w-64 bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm flex flex-col overflow-hidden">
      <div class="p-8 pb-4">
        <div class="flex items-center gap-3 px-2">
          <div class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
            <div class="grid grid-cols-2 gap-0.5">
              <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div class="w-1.5 h-1.5 bg-emerald-300 rounded-full"></div>
              <div class="w-1.5 h-1.5 bg-emerald-300 rounded-full"></div>
              <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
          <div>
            <h1 class="text-lg font-black tracking-tighter text-emerald-950 uppercase">Aruga</h1>
            <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600/60 -mt-1">Clinical Hub</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
        <button v-for="item in navigationItems" :key="item.id" @click="currentPage = item.id"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group"
          :class="currentPage === item.id ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-100' : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-600'">
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.label }}
        </button>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <div class="flex-1 flex flex-col min-w-0">
      
      <header class="h-20 flex items-center justify-between px-8">
        <div>
          <h2 class="text-2xl font-black text-slate-800 tracking-tight capitalize">{{ currentPage.replace('-', ' ') }}</h2>
          <p class="text-xs font-medium text-slate-400">Clinic Operations Overview • April 2026</p>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
        <div v-if="currentPage === 'dashboard'" class="space-y-8">
          
          <!-- Top Stats Row -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm">
              <p class="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-1">{{ stat.label }}</p>
              <h4 class="text-2xl font-black text-slate-800">{{ stat.value }}</h4>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <!-- MIDDLE: Live Queue List (The ones who have arrived) -->
            <div class="lg:col-span-2 space-y-6">
              <div class="flex items-center justify-between px-2">
                <div class="flex items-center gap-3">
                  <h3 class="text-xl font-black text-slate-800 tracking-tight">Active Queue</h3>
                  <span class="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full uppercase animate-pulse">Live</span>
                </div>
              </div>
              
              <div class="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                <table class="w-full text-left">
                  <thead class="bg-slate-50/50">
                    <tr class="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      <th class="px-8 py-5">No.</th>
                      <th>Patient Name</th>
                      <th>Vaccine</th>
                      <th>Status</th>
                      <th class="text-right px-8">Check-in</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-50">
                    <tr v-if="queueList.length === 0">
                      <td colspan="5" class="px-8 py-12 text-center text-slate-400 font-medium italic text-sm">
                        No patients in queue. Mark a patient as "Arrived" to begin.
                      </td>
                    </tr>
                    <tr v-for="(patient, index) in queueList" :key="patient.id" class="hover:bg-emerald-50/30 transition-colors group">
                      <td class="px-8 py-5">
                        <div class="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-xs font-black transition-colors">
                          {{ index + 1 }}
                        </div>
                      </td>
                      <td class="text-sm font-bold text-slate-800">{{ patient.name }}</td>
                      <td>
                        <span class="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase">{{ patient.type }}</span>
                      </td>
                      <td>
                        <div class="flex items-center gap-2">
                          <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span class="text-[11px] font-bold text-slate-600">Waiting</span>
                        </div>
                      </td>
                      <td class="text-right px-8 text-xs font-bold text-slate-400">{{ patient.arrivalTime }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SIDE: Today's Scheduled Patients (Expected list) -->
            <div class="space-y-6">
              <div class="flex items-center justify-between px-2">
                <h3 class="text-xl font-black text-slate-800 tracking-tight">Today's Schedule</h3>
                <span class="text-[10px] font-bold text-slate-400">{{ todaySchedule.length }} Expected</span>
              </div>

              <div class="bg-white rounded-[2.5rem] p-6 border border-slate-200 shadow-sm space-y-4">
                <div v-for="patient in todaySchedule" :key="patient.id" 
                     class="flex items-center justify-between p-4 rounded-3xl bg-slate-50/50 border border-transparent hover:border-emerald-100 hover:bg-emerald-50/20 transition-all group">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-emerald-600 shadow-sm shrink-0">
                      <User class="w-5 h-5" />
                    </div>
                    <div class="min-w-0">
                      <p class="text-sm font-bold text-slate-800 truncate">{{ patient.name }}</p>
                      <p class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{{ patient.type }} • {{ patient.scheduledTime }}</p>
                    </div>
                  </div>
                  
                  <button @click="markAsArrived(patient)" 
                    class="px-4 py-2 bg-emerald-600 text-white text-[10px] font-black rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all shrink-0">
                    ARRIVED
                  </button>
                </div>

                <div v-if="todaySchedule.length === 0" class="py-8 text-center">
                  <p class="text-xs font-bold text-slate-300 uppercase tracking-widest">Schedule Clear</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  LayoutDashboard, Users, Users2, Calendar, Syringe,
  BarChart3, CheckSquare, Stethoscope, Clock, Bell, Search, 
  LogOut, TrendingUp, Plus, User
} from 'lucide-vue-next'

const currentPage = ref('dashboard')

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'children-records', label: 'Children Records', icon: Users },
  { id: 'guardian-list', label: 'Guardian List', icon: Users2 },
  { id: 'medical-staff', label: 'Medical Staff', icon: Stethoscope },
  { id: 'inventory', label: 'Vaccine Inventory', icon: Syringe },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
]

const stats = ref([
  { label: 'In Queue', value: '0' },
  { label: 'Scheduled', value: '8' },
  { label: 'Completed', value: '24' },
  { label: 'Vials Left', value: '156' }
])

// 1. TODAY'S SCHEDULE (Expected Patients)
const todaySchedule = ref([
  { id: 101, name: "Angelo B. Canlas", type: "BCG", scheduledTime: "09:00 AM" },
  { id: 102, name: "Remalyn I. Abad", type: "Polio", scheduledTime: "09:30 AM" },
  { id: 103, name: "Trinthel Wayhe", type: "Hep B", scheduledTime: "10:00 AM" },
  { id: 104, name: "Jester Meredores", type: "Measles", scheduledTime: "10:30 AM" },
  { id: 105, name: "Kirk Talisaysay", type: "BCG", scheduledTime: "11:00 AM" },
  { id: 106, name: "Sarah Jenkins", type: "Polio", scheduledTime: "11:30 AM" },
])

// 2. LIVE QUEUE (Patients who have checked in)
const queueList = ref([])

// 3. ACTION: Move from Schedule to Queue
const markAsArrived = (patient) => {
  // Remove from schedule
  todaySchedule.value = todaySchedule.value.filter(p => p.id !== patient.id)
  
  // Add to queue with current time
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  queueList.value.push({
    ...patient,
    arrivalTime: timeString
  })

  // Update Stats for UI feedback
  stats.value[0].value = queueList.value.length.toString()
  stats.value[1].value = todaySchedule.value.length.toString()
}

</script>

<style>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }

body { background-color: #F8FAFC; overflow: hidden; }
</style>