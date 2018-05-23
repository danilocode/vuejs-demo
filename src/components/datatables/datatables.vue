<template>
  <single-column-container>
    <div>
      <h1 v-if="loading">Loading...</h1>
      <h1>{{name}}</h1>
    </div>
  </single-column-container>
</template>

<script>
import {getName} from './nameService.js'
export default {
  data ()  {
    return {
      name,
      loading: false
    }
  },
  async created() {
    this.loading = true
    this.name = await getName()
    this.loading = false
  }
}
</script>
