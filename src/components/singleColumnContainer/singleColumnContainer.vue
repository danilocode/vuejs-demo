<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'single-column-container'
}
</script>
