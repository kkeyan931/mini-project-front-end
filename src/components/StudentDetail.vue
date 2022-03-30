<template>
  <tr
    v-for="studentDetails in allStudentsDetails"
    :key="studentDetails.rollNumber"
  >
    <td>{{ studentDetails.rollNumber }}</td>
    <td>{{ studentDetails.fullName }}</td>
    <td>{{ studentDetails.email }}</td>
    <td>{{ studentDetails.phone }}</td>
    <td>{{ studentDetails.department }}</td>
    <td>
      <span
        v-for="subject in studentDetails.enrolledSubjects"
        :key="subject"
        class="subject-enrolled"
      >
        {{ subject }}
      </span>
    </td>
    <td>
      <i class="fas fa-edit" @click="toggleEditStudent(studentDetails)"></i>
    </td>
    <td>
      <i class="fas fa-times" @click="deleteStudentHelper(studentDetails)"></i>
    </td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StudentDetail",

  methods: {
    ...mapActions([
      "fetchStudentsDetails",
      "toggleEditStudent",
      "deleteStudent",
    ]),
    async deleteStudentHelper(student) {
      await this.deleteStudent(student);
      await this.fetchStudentsDetails();
    },
  },
  computed: mapGetters(["allStudentsDetails"]),
  created() {
    this.fetchStudentsDetails();
  },
};
</script>

<style scope>



.subject-enrolled {
  background-color: white;
  padding: all;
  display: inline-grid;
  margin: 5px 5px;
  border: 0px;
  box-shadow: 1px 1px 1px 1px gray;
  border-radius: 5px;
}
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
