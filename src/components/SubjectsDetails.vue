<template>
  <table>
    <thead>
      <tr>
        <th scope="col">Subject Code</th>
        <th scope="col">Subject Title</th>
        <th scope="col">Credits</th>
        <th scope="col">Max Marks</th>
        <th scope="col">Semester</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
    <SubjectDetail/>
    </tbody>
  </table>
</template>

<script>
import SubjectDetail from './SubjectDetail.vue'
export default {
    name: "SubjectDetails",
    components:{
        SubjectDetail,
    }
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