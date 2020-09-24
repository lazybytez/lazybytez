<template>
  <div class="home">
    <Gamingpage/>
    <Emptyspace/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Gamingpage from "@/components/Gamingpage.vue"
import Emptyspace from "@/components/Emptyspace.vue"

export default Vue.extend({
  name: "Gaming",
  components: {
    Gamingpage,
    Emptyspace
  }
})
</script>
