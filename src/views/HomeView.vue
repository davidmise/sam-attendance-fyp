<template>
  <div class="wrapper">
    <!-- Sidebar component -->
    <Sidebar />

    <div class="main">
      <!-- TopBar component -->
      <TopBar />

      <!-- Main content -->
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

          <!-- Cards section -->
          <div class="row">
            <!-- Total Students Card -->
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col mt-0">
                      <h5 class="card-title">Total Students</h5>
                    </div>
                    <div class="col-auto">
                      <div class="stat text-primary">
                        <i class="align-middle" data-feather="users"></i>
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-1 mb-3">{{ summaryStore.getTotalStudents }}</h1>
                </div>
              </div>
            </div>

            <!-- Total Absent Card -->
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col mt-0">
                      <h5 class="card-title">Total Absent</h5>
                    </div>
                    <div class="col-auto">
                      <div class="stat text-primary">
                        <i class="align-middle" data-feather="user-x"></i>
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-1 mb-3">{{ summaryStore.getTotalAbsent }}</h1>
                </div>
              </div>
            </div>

            <!-- Total Present Card -->
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col mt-0">
                      <h5 class="card-title">Total Present</h5>
                    </div>
                    <div class="col-auto">
                      <div class="stat text-primary">
                        <i class="align-middle" data-feather="user-check"></i>
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-1 mb-3">{{ summaryStore.getTotalPresent }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer section -->
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Sidebar from '@/components/NavBar/SideBar.vue'
import TopBar from '@/components/NavBar/TopBar.vue'
import FooterSection from '@/components/FooterSection.vue'
import { useSummaryStore } from '@/stores/counter'

// Create an instance of the summary store
const summaryStore = useSummaryStore()

// Fetch summary data when the component is mounted
onMounted(() => {
  summaryStore.fetchStudents()
})

</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
