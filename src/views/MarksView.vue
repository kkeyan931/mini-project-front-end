<template>
  <div class="home">

    <MarksDetails v-show="!showEditMarks"/>
    <MarksDetailsExpanded v-show="showEditMarks"/>

  </div>
</template>

<script>
import ButtonComp from "@/components/ButtonComp.vue";
import MarksDetails from "@/components/MarksDetails.vue";
import MarksDetailsExpanded from "@/components/MarksDetailsExpanded.vue";

import { mapGetters,mapActions } from "vuex";
export default {
  name: "MarksView",
  components: {
    ButtonComp,
    MarksDetails,
    MarksDetailsExpanded
  },
  data() {
    return {};
  },
  computed: mapGetters(["showEditMarks"]),
  methods: {
      ...mapActions(["fetchStudentsDetails"]),
  },
  async created(){
      await this.fetchStudentsDetails();
  }
};
</script>
