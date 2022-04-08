<template>
  <table>
    <thead>
      <tr>
        <th scope="col">Average Title</th>
        <th scope="col">Average</th>
      </tr>
    </thead>
    <tbody>
    <AverageDetail/>
    </tbody>
  </table>
</template>

<script>
import AverageDetail from './AverageDetail.vue'
export default {
    name: "AverageDetails",
    components:{
        AverageDetail,
    },
};
</script> 

<style scope>
table {
  border-radius: 5px;
  /* max-width: 700px; */
  width: 100%;
  margin: 5% auto;
  background-color: #ffffff;
  overflow: hidden;
}
</style>