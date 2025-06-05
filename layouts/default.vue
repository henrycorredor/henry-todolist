<script setup lang="ts">
import {type TasksState, useTasksStore} from "~/stores/tasks";
import {TaskStatus} from "~/types/enums";
import AdminTaskModal from "~/components/AdminTaskModal.vue";

const taskStore = useTasksStore()

const countTasks = computed(() => {
  return {
    all: taskStore.tasks.length,
    inProgress: taskStore.tasks.filter(_ => _.state === TaskStatus.ON_PROGRESS).length,
    done: taskStore.tasks.filter(_ => _.state === TaskStatus.COMPLETED).length
  }
})

onMounted(async () => {
  const answer = await $fetch('/api/tasks')
  if(answer.status === 'success') {
    const data = answer.data as TasksState["tasks"]
    taskStore.setTasks(data)
  }
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer/>
    <header>
      <nav data-bs-theme="dark" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My Todolist</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#henryTodoListMainNavBar"
                  aria-controls="henryTodoListMainNavBar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="henryTodoListMainNavBar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">
                  Todo
                  <span class="badge rounded-pill text-bg-danger ms-3">{{ countTasks.all }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/in-progress" class="nav-link">
                  In Progress
                  <span class="badge rounded-pill text-bg-danger ms-3">{{ countTasks.inProgress }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/completed" class="nav-link">
                  Completed
                  <span class="badge rounded-pill text-bg-danger ms-3">{{ countTasks.done }}</span>
                </NuxtLink>
              </li>
            </ul>
            <div class="d-flex">
              <span class="navbar-text me-5">Henry Corredor</span>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
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
      <div class="container">
        <div class="row gy-3">
          <p v-if="taskStore.tasks.length === 0">Loading...</p>
          <slot/>
        </div>
      </div>
    </main>
    <AdminTaskModal/>
    <CreateTaskModal/>
  </div>
</template>