<template>
  <div class="text-center d-flex align-center justify-space-around">
    <v-tooltip color="primary" bottom>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          primary
        </v-btn>
      </template>
      <span>Primary tooltip</span>
    </v-tooltip>

    <v-tooltip color="success" bottom>
      <template v-slot:activator="{ props }">
        <v-btn
          color="success"
          dark
          v-bind="props"
        >
          success
        </v-btn>
      </template>
      <span>Success tooltip</span>
    </v-tooltip>

    <v-tooltip color="warning" bottom>
      <template v-slot:activator="{ props }">
        <v-btn
          color="warning"
          dark
          v-bind="props"
        >
          warning
        </v-btn>
      </template>
      <span>Warning tooltip</span>
    </v-tooltip>

    <v-tooltip color="error" bottom>
      <template v-slot:activator="{ props }">
        <v-btn
          color="error"
          dark
          v-bind="props"
        >
          error
        </v-btn>
      </template>
      <span>Error tooltip</span>
    </v-tooltip>
  </div>
</template>
