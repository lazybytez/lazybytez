<template>
  <div class="home">
    <Gamingpage/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Gamingpage from "@/components/Gamingpage.vue"

export default Vue.extend({
  name: "Gaming",
  components: {
    Gamingpage
  }
})
</script>
