<script lang="ts" setup>
import {useTasksStore} from '~/stores/tasks'
import {NuxtLink} from "#components";

const taskStore = useTasksStore()
</script>

<template>
  <div class="col-12 col-md-6 col-lg-4" v-for="task in taskStore.tasks" :key="task.id">
    <TaskCard v-bind="task"/>
  </div>
</template>
