import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {

    // array of each student object
    const studentList = ref([
        { name: "A. Student", starID: "aa1234aa", present: false },
        { name: "B. Student", starID: "bb1234bb", present: false }
    ])

    const mostRecentStudent = ref( {} )

    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        })
    }

    // function to handle if the student has arrived or is not present.
    // will return -1 if the student is not found
    function arrivedOrLeft(student) {
        const studentToModifyIndex = studentList.value.findIndex(s => s.starID == student.starID)
        if (studentToModifyIndex != -1) {
            mostRecentStudent.value = student
            studentList.value[studentToModifyIndex] = student
        }
    }

    // create computed value to sort student list alphabetically
    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })

    // computed value to show total student count
    const studentCount = computed( () => {
        return studentList.value.length
    })

    return {
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed
        sortedStudents,
        studentCount
    }

})
