<template>
  <table>
    <thead>
      <tr>
        <th scope="col">Roll Number</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Department</th>
        <th scope="col">Subjects enrolled</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
    <StudentDetail/>
    </tbody>
  </table>
</template>

<script>
import StudentDetail from './StudentDetail.vue'
export default {
    name: "StudentDetails",
    components:{
        StudentDetail,
    },
};
</script> 

<style scope>
table {
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
  margin: 5% auto;
  background-color: #ffffff;
  overflow: hidden;
}
</style>