<script setup lang="ts">
import {NuxtLink} from "#components";

defineProps({
  id: Number,
  title: String,
  content: String,
  featuredImage: String,
  showReadMore: Boolean,
})

</script>

<template>
  <div class="py-5">
    <div class="text-center mb-5">
      <img :src="featuredImage" class="img-fluid" alt={{title}}>
    </div>
    <h2>{{ title }}</h2>

    <p>{{ content }}</p>

    <div v-if="showReadMore" class="text-end">
      <NuxtLink :to="{ name: 'articles-id', params: { id } }">Read more</NuxtLink>
    </div>
  </div>
</template>