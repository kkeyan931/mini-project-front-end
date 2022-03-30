<template>
  <table>
    <thead>
      <tr>
        <th scope="col">Roll Number</th>
        <th scope="col">Name</th>
        <th scope="col">Show Marks</th>
      </tr>
    </thead>
    <tbody>
    <MarksDetail/>
    </tbody>
  </table>
</template>

<script>
import MarksDetail from './MarksDetail.vue'
export default {
    name: "MarksDetails",
    components:{
        MarksDetail,
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