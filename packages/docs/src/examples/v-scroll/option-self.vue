<template>
  <v-card
    class="overflow-y-auto"
    max-height="400"
    v-scroll.self="onScroll"
  >
    <v-banner
      class="justify-center text-h5 font-weight-light"
      sticky
    >
      Scroll Me - Method invoked

      <span
        class="font-weight-bold"
        v-text="scrollInvoked"
      ></span>

      times
    </v-banner>

    <v-card-text>
      <div
        v-for="n in 12"
        :key="n"
        class="mb-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'

  const scrollInvoked = ref(0)
  function onScroll () {
    scrollInvoked.value++
  }
</script>

<script>
  export default {
    data: () => ({
      scrollInvoked: 0,
    }),

    methods: {
      onScroll () {
        this.scrollInvoked++
      },
    },
  }
</script>
