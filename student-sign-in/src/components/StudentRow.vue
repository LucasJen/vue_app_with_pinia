<script setup>

import { ref } from 'vue'

// creates a prop using the student object
const props = defineProps({
    student: Object
})

// creates emit events for the parent to see if a student has arrived or left or has been deleted
const emit = defineEmits(['arrived-or-left', 'delete-student'])
const isStudentPresent = ref( props.student.present )


const notifyArrivedOrLeft = () => {
    // tell parent if the student has arrive or left
    // uses emit to pass the message to parent.
    emit('arrived-or-left', props.student, isStudentPresent.value)
}

const confirmThenDeleteStudent = () => {
    emit('delete-student', props.student)
    }

</script>

<template>

<tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }">
    <td>{{ student.name }}</td>
    <td>{{ student.starID }}</td>
    <td>
        <!-- todo v-model checkbox -->
        <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
        <span class="mx-3" v-if="student.present">Here!</span>
        <span class="mx-3" v-else>Not present</span>
    </td>
    <td>
        <!-- button will have a danger button appearance and when clicked will call the confirmThenDeleteStudent function -->
        <button class="btn btn-danger" v-on:click="confirmThenDeleteStudent">
            <i class="bi bi-trash-fill"></i> Delete
        </button>
    </td>
</tr>

</template>

<style scoped>


.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}


</style>
