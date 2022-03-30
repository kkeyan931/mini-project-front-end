<template>
  <div class="home">
    <ButtonComp v-show="!showEditSubject" @click="toggleAddSubject()" :text="!showAddSubject ? 'Add subject' : 'Show Subjects'" color="green"/>
    <AddSubjectForm v-show="showAddSubject" @submit-complete="toggleAddSubject"/>
    <SubjectsDetails v-show="!showAddSubject && !showEditSubject"/>
    <SubjectDetailsExpanded v-show="showEditSubject"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddSubjectForm from '@/components/AddSubjectForm.vue'
import ButtonComp from '@/components/ButtonComp.vue'
import SubjectsDetails from '@/components/SubjectsDetails.vue'
import SubjectDetailsExpanded from '@/components/SubjectDetailsExpanded.vue'

import { mapGetters } from "vuex";

export default {
  name: 'SubjectsView',
  components: {
    ButtonComp,
    AddSubjectForm,
    SubjectsDetails,
    SubjectDetailsExpanded
  },
  data(){
    return {
      showAddSubject : false,
    }
  },
  computed: mapGetters(["showEditSubject"]),
  methods: {
    toggleAddSubject(){
      this.showAddSubject = !this.showAddSubject;
    }
  },
}
</script>
