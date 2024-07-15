<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main">
      <TopBar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1>Student Reports</h1>
          <button @click="exportData" class="btn btn-secondary">Download Report</button>

          <table class="table table-hover">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Registration Number</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.Class }}</td>
                <td>{{ student.RegNumber }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import { useWeeklyReportStore } from '@/stores/weeklyReport'
import Sidebar from '@/components/NavBar/SideBar.vue'
import TopBar from '@/components/NavBar/TopBar.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  components: {
    Sidebar,
    TopBar,
    FooterSection
  },
  setup() {
    const { fetchStudents, getAllStudents, exportToSpreadsheet } = useWeeklyReportStore();

    fetchStudents();

    const exportData = () => {
      exportToSpreadsheet();
    };

    return {
      students: getAllStudents,
      exportData
    };
  },
}
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
