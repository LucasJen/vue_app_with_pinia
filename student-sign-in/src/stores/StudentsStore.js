import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


// arrow notation takes the output of the function and feeds it into the '()' of the object that calls it
export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        {name: 'A. Student', starID: 'aa1234aa', present: false}, //array of dicts to store each student and their status
        {name: 'B. Student', starID: 'bb1234bb', present: false}
    ])

    const mostRecentStudent = ref( {} ) // empty object

    return {
        studentList,
        mostRecentStudent,
    }
})