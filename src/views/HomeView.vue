<template>
  <div class="home">
    <ButtonComp v-show="!showEditStudent" @click="toggleAddStudent()" :text="!showAddStudent ? 'Add student' : 'Show students'" color="green"/>
    <AddStudentForm v-show="showAddStudent" @submit-complete="toggleAddStudent"/>
    <StudentDetails v-show="!showAddStudent && !showEditStudent"/>
    <StudentDetailsExpanded v-show="showEditStudent"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddStudentForm from '@/components/AddStudentForm.vue'
import ButtonComp from '@/components/ButtonComp.vue'
import StudentDetails from '@/components/StudentDetails.vue'
import StudentDetailsExpanded from '@/components/StudentDetailsExpanded.vue'
import { mapGetters } from "vuex";
export default {
  name: 'HomeView',
  components: {
    ButtonComp,
    AddStudentForm,
    StudentDetails,
    StudentDetailsExpanded
  },
  data(){
    return {
      showAddStudent : false,
    }
  },
  computed: mapGetters(["showEditStudent"]),
  methods: {
    toggleAddStudent(){
      this.showAddStudent = !this.showAddStudent;
    },
  }
}
</script>
