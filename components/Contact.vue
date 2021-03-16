<template>
  <div class="font-sans">
    <div
      v-for="contactInfo in contactInfos"
      :key="contactInfo.id"
    >
      <h1 class="text-2xl underline">
        {{ contactInfo.header }}
      </h1>
      <a v-if="contactInfo.content.startsWith('mailto')" :href="contactInfo.content" class="hover:underline hover:text-blue-600 text-purple-600">
        elias.knodel@lazybytez.de
      </a>
      <p v-else>
        {{ contactInfo.content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      contactInfos: [
        {
          id: 1,
          header: 'Name:',
          content: 'Elias Knodel'
        },
        {
          id: 2,
          header: 'Contact:',
          content: 'mailto:elias.knodel@lazybytez.de?subject=%5BYour%20subject%20here%5D&body=%5BYour%20content%20here%5D%0D%0A%0D%0A%3D%20Leave%20this%20following%20part%20unchanged%20so%20we%20know%20this%20is%20not%20spam%20%3D%0D%0ASend%20from%20lazybytez.de'
        },
        {
          id: 3,
          header: 'Adress:',
          content: 'Eschenweg 6, 76707 Hambrücken'
        }
      ]
    }
  }
})
</script>

<style lang="less" scoped>

</style>
