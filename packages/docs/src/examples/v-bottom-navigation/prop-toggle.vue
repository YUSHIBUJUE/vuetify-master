<template>
  <v-layout class="border rounded" style="height: 128px;">
    <div class="mx-auto my-4">
      <v-btn
        color="deep-purple"
        variant="outlined"
        @click="active = !active"
      >
        Toggle Navigation
      </v-btn>
    </div>

    <v-bottom-navigation
      :active="active"
      color="indigo"
    >
      <v-btn>
        <v-icon>mdi-history</v-icon>

        Recents
      </v-btn>

      <v-btn>
        <v-icon>mdi-heart</v-icon>

        Favorites
      </v-btn>

      <v-btn>
        <v-icon>mdi-map-marker</v-icon>

        Nearby
      </v-btn>
    </v-bottom-navigation>

  </v-layout>
</template>

<script setup>
  import { ref } from 'vue'

  const active = ref(true)
</script>

<script>
  export default {
    data: () => ({ active: true }),
  }
</script>
