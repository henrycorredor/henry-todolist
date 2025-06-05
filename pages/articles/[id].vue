<script setup lang="ts">
definePageMeta({
  layout: 'article'
})

type ArticleData = {
  id: number;
  title: string;
  excerpt: string;
  featured_image: string;
  content: string;
}

const articleData = ref<ArticleData | null>(null)
const articleLoadStatus = ref<'loading' | 'ready' | 'error'>('loading')

onMounted(async () => {
  const { id } = useRoute().params
  const response = await $fetch(`/api/articles/${id}`) as {
    status: string;
    message: string;
    data: {
      id: number;
      title: string;
      content: string;
      featured_image: string;
      excerpt: string;
      created_at: string;
    } | undefined;
  }
  if (response?.status === 'success' && response.data) {
    articleLoadStatus.value = 'ready'
    articleData.value = response.data
  } else {
    articleLoadStatus.value = 'error'
  }
})

</script>

<template>
  <p v-if="articleLoadStatus === 'loading'" class="p-5">
    Loading article data...
  </p>
  <p v-if="articleLoadStatus === 'error'" class="p-5">
    There was an error fetching data. Please try again later
  </p>
  <div v-if="articleLoadStatus==='ready' && articleData" class="container-md">
    <Article
      :id="articleData.id"
      :title="articleData.title"
      :content="articleData.content"
      :featuredImage="articleData.featured_image"
      :show-read-more="false"
    />
  </div>
</template>