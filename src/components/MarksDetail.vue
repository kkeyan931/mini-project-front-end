<template>
  <tr
    v-for="studentDetails in allStudentsDetails"
    :key="studentDetails.rollNumber"
  >
    <td>{{ studentDetails.rollNumber }}</td>
    <td>{{ studentDetails.fullName }}</td>
    <td>
      <i class="fa fa-eye" @click="toggleEditMarks(studentDetails)"></i>
    </td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MarksDetail",

  methods: {
    ...mapActions(["toggleEditMarks"]),
  },
  computed: mapGetters(["allStudentsDetails"]),
  created() {
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
