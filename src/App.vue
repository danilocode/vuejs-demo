<template>
  <v-app>

    <v-toolbar color="light-green lighten-1">
      
      <v-toolbar-title class="white--text">Veutify Launchbase Demo</v-toolbar-title>

      <v-spacer></v-spacer>
    
      <v-toolbar-items>
        <v-btn 
          dark 
          flat 
          v-for="route in routes" 
          :key="route.name"
          router
          :to="route.link">{{route.name}}</v-btn>
      </v-toolbar-items>
  
    </v-toolbar>
    
    <main>
      <router-view></router-view>

    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      routes: [
        {name:'Home', link:'/'},
        {name:'Data Table', link:'/datatables'},
        {name:'Json Editor', link:'/jsoneditor'}
      ]
    }
  },
  name: 'App'
}
</script>
