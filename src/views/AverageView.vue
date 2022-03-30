<template>
  <div class="home">
      <AverageDetails/>
  </div>
</template>

<script>
import AverageDetails from '@/components/AverageDetails.vue'
import { mapGetters } from "vuex";

export default {
  name: "AverageView",
  components: {
      AverageDetails
  },
  data() {
    return {};
  },
  computed: mapGetters([]),
  methods: {},
};
</script>
