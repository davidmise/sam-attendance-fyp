import { defineStore } from 'pinia'
import { ref, onValue } from 'firebase/database'
import { database, firestore } from '@/firebase/init'
import { collection, setDoc, doc } from 'firebase/firestore'
import * as XLSX from 'xlsx'

export const useWeeklyReportStore = defineStore('reports', {
  state: () => ({
    students: [],
  }),

  actions: {
    async fetchStudents() {
      const studentsRef = ref(database, 'student')

      onValue(studentsRef, async (snapshot) => {
        const data = snapshot.val()
        if (data) {
          this.students = Object.keys(data)
            .map(key => ({
              id: key,
              ...data[key],
            }))
            .filter(student => student.attendance === true ) // Filter only present students

          // Save to Firestore
          for (const student of this.students) {
            const studentDoc = doc(collection(firestore, 'students'), student.id)
            await setDoc(studentDoc, student)
          }
        } else {
          this.students = []
        }
      }, (error) => {
        console.error('Error fetching students:', error)
      })
    },

    exportToSpreadsheet() {
      const ws = XLSX.utils.json_to_sheet(this.students)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Students')
      XLSX.writeFile(wb, 'students_report.xlsx')
    }
  },

  getters: {
    getAllStudents() {
      return this.students
    },
    getStudentById: (state) => (id) => {
      return state.students.find(student => student.id === id)
    },
  },
})
