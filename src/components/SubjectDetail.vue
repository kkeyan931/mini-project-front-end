<template>
  <tr
    v-for="subjectDetails in allSubjectsDetails"
    :key="subjectDetails.subjectCode"
  >
    <td>{{ subjectDetails.subjectCode }}</td>
    <td>{{ subjectDetails.subjectTitle }}</td>
    <td>{{ subjectDetails.credits }}</td>
    <td>{{ subjectDetails.maxMarks }}</td>
    <td>{{ subjectDetails.semester }}</td>
    <td><i class="fas fa-edit" @click="toggleEditSubject(subjectDetails)"></i></td>
    <td><i class="fas fa-times" @click="deleteSubjectHelper(subjectDetails)"></i></td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SubjectDetail",

  methods: {
    ...mapActions(["fetchSubjectsDetails","toggleEditSubject","deleteSubject"]),
    async deleteSubjectHelper(subject){
        await this.deleteSubject(subject);
        await this.fetchSubjectsDetails();
    }
  },
  computed: mapGetters(["allSubjectsDetails"]),
  created() {
    this.fetchSubjectsDetails();
  },
};
</script>

<style scope>

table {
  text-align: left;
  position: relative;
  border-collapse: collapse;
  background-color: #f6f6f6;
} /* Spacing */
td,
th {
  border: 1px solid #999;
  padding: 20px;
}
th {
  background: lightcoral;
  color: white;
  border-radius: 0;
  position: sticky;
  top: 0;
  padding: 10px;
}
.primary {
  background-color: #000000;
}

tfoot > tr {
  background: black;
  color: white;
}
tbody > tr:hover {
  background-color: lightblue;
}
</style>
