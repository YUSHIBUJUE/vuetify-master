<template>
  <div>
    <h1>Plan your event:</h1>
    <v-row
      align="center"
      justify="space-around"
    >
      <v-col style="width: 350px; flex: 0 1 auto;">
        <h2>Start:</h2>
        <v-time-picker
          v-model="start"
          :max="end"
        ></v-time-picker>
      </v-col>
      <v-col style="width: 350px; flex: 0 1 auto;">
        <h2>End:</h2>
        <v-time-picker
          v-model="end"
          :min="start"
        ></v-time-picker>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const start = ref(null)
  const end = ref(null)
</script>

<script>
  export default {
    data () {
      return {
        start: null,
        end: null,
      }
    },
  }
</script>
