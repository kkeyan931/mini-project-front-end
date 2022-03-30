<template>
  <tr
    v-for="(value,key) in averageDetails"
    :key="value+key"
  >
    <td>{{ key }}</td>
    <td>{{ value }}</td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AverageDetail",

  methods: {
    ...mapActions(["getAverageDetails"]),
  },
  computed: mapGetters(["averageDetails"]),
  async created() {
      await this.getAverageDetails();
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
