-<template>
  <div class="p-8 font-sans antialiased max-w-6xl mx-auto">
    <!-- Header Section -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-3xl font-black text-slate-800 tracking-tight">Student Directory</h2>
        <p class="text-sm font-medium text-slate-400">Manage and Register Students</p>
      </div>
      
      <div class="flex gap-3">
        <button @click="fetchData" :disabled="loading" 
          class="p-4 bg-white border border-slate-200 text-slate-600 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
          <RefreshCw :class="{ 'animate-spin': loading }" class="w-5 h-5" />
        </button>
        
        <button @click="showModal = true" 
          class="flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black text-sm shadow-lg hover:bg-emerald-700 transition-all">
          <Plus class="w-5 h-5" />
          Add New Student
        </button>
      </div>
    </div>

    <!-- Data Table Container -->
    <div class="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
      <table class="w-full text-left border-collapse table-fixed">
        <thead>
          <tr class="bg-slate-50/50 border-b border-slate-100">
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-1/2">Full Name</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-1/3">Contact Number</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right w-24">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
          <tr v-for="student in students" :key="student.id" class="hover:bg-emerald-50/30 transition-colors group">
            <td class="px-8 py-5">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shadow-sm uppercase">
                  {{ student.fullName ? student.fullName.charAt(0) : '?' }}
                </div>
                <span class="text-sm font-bold text-slate-700 truncate">{{ student.fullName }}</span>
              </div>
            </td>
            <td class="px-8 py-5 text-sm font-semibold text-slate-500 font-mono">
              {{ student.contactNo || 'N/A' }}
            </td>
            <td class="px-8 py-5 text-right">
              <button @click="deleteStudent(student.id)" class="p-2 text-slate-300 hover:text-rose-500 transition-all">
                <Trash2 class="w-5 h-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MODAL -->
    <Transition name="modal-fade">
      <div v-if="showModal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-md" @click="closeModal"></div>
        
        <div class="relative bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl border border-white/20">
          <div class="mb-8 text-center">
            <h3 class="text-2xl font-black text-slate-800 tracking-tight">Register Student</h3>
            <p class="text-sm font-medium text-slate-400">Fill out all fields</p>
          </div>

          <form @submit.prevent="saveStudent" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Given Name</label>
                <input v-model="formData.givenName" type="text" required class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 outline-none transition-all font-bold text-slate-700 shadow-inner" />
              </div>
              <div class="space-y-1">
                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Middle Name</label>
                <input v-model="formData.middleName" type="text" class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 outline-none transition-all font-bold text-slate-700 shadow-inner" />
              </div>
            </div>

            <div class="space-y-1">
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Last Name</label>
              <input v-model="formData.lastName" type="text" required class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 outline-none transition-all font-bold text-slate-700 shadow-inner" />
            </div>
            
            <div class="space-y-1">
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Contact Number</label>
              <input v-model="formData.contactNo" type="text" required class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 outline-none transition-all font-bold text-slate-700 shadow-inner" />
            </div>

            <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p class="text-[10px] font-black text-emerald-600 uppercase mb-1">Preview Full Name:</p>
              <p class="text-sm font-bold text-emerald-800">{{ combinedFullName || '---' }}</p>
            </div>

            <button type="submit" :disabled="saving" class="w-full py-5 bg-emerald-600 text-white rounded-[1.5rem] font-black text-sm shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
              <span v-if="saving"><RefreshCw class="w-4 h-4 animate-spin" /> Saving...</span>
              <span v-else>Register Student</span>
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RefreshCw, Plus, Trash2 } from 'lucide-vue-next'

const API_BASE = 'http://localhost:57147/api'
const students = ref([])
const loading = ref(false)
const saving = ref(false)
const showModal = ref(false)

const formData = ref({
  givenName: '',
  middleName: '',
  lastName: '',
  contactNo: ''
})

const combinedFullName = computed(() => {
  const g = formData.value.givenName || ''
  const m = formData.value.middleName || ''
  const l = formData.value.lastName || ''
  return `${g} ${m ? m + ' ' : ''}${l}`.trim()
})

const closeModal = () => {
  showModal.value = false
  formData.value = { givenName: '', middleName: '', lastName: '', contactNo: '' }
}

const fetchData = async () => {
  loading.value = true
  try {
    const response = await fetch(`${API_BASE}/Students`)
    students.value = await response.json()
  } catch (err) { console.error(err) }
  finally { loading.value = false }
}

const saveStudent = async () => {
  saving.value = true
  try {
    const response = await fetch(`${API_BASE}/SaveStudents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Id: "00000000-0000-0000-0000-000000000000",
        FullName: combinedFullName.value,
        GivenName: formData.value.givenName,
        MiddleName: formData.value.middleName,
        LastName: formData.value.lastName,
        ContactNo: formData.value.contactNo
      })
    })
    const result = await response.json()
    if (result.success) {
      closeModal()
      await fetchData()
    }
  } catch (err) { alert(err.message) }
  finally { saving.value = false }
}

const deleteStudent = async (id) => {
  if (!confirm("Delete?")) return
  try {
    await fetch(`${API_BASE}/Students/${id}`, { method: 'DELETE' })
    await fetchData()
  } catch (err) { console.error(err) }
}

onMounted(fetchData)
</script>

<style scoped>
.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.98); }
</style>