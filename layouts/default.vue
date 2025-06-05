<script setup lang="ts">
import {type TasksState, useTasksStore} from "~/stores/tasks";
import AdminTaskModal from "~/components/AdminTaskModal.vue";
import {NuxtLink} from "#components";

const taskStore = useTasksStore()

const articlesList = ref<{ id: number, title: string, excerpt: string, featured_image: string }[]>([])

onMounted(async () => {
  const answer = await $fetch('/api/tasks')
  if (answer.status === 'success') {
    const data = answer.data as TasksState["tasks"]
    taskStore.setTasks(data)
  }

  const articlesData = await $fetch('/api/articles/excerpts')
  if (articlesData.status === 'success') {
    articlesList.value = articlesData.data
  }
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer/>
    <SiteHeader />
    <main class="container py-5">
      <div class="py-4">
        <span class="me-2"><strong>Todo</strong></span>
        <button
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#createTaskModal"
            @click="taskStore.setOperationHandler(null,null)"
        >
          + Create Task
        </button>
      </div>
      <!-- task list-->
      <div class="container mb-4">
        <div class="row gy-3">
          <p v-if="taskStore.tasks.length === 0">Loading...</p>
          <slot/>
        </div>
      </div>
      <!-- articles list -->
      <div>
        <h3>Company news</h3>
        <p v-if="articlesList.length === 0">Loading articles data...</p>
        <div v-if="articlesList.length > 0" class="container-md">
          <div class="row gy-4">
            <div class="col-12 col-lg-6" v-for="article in articlesList" :key="article.id">
              <Article
                  :id="article.id"
                  :title="article.title"
                  :content="article.excerpt"
                  :featuredImage="article.featured_image"
                  :show-read-more="true"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <AdminTaskModal/>
    <CreateTaskModal/>
  </div>
</template>