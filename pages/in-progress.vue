<script lang="ts" setup>
import {useTasksStore} from '~/stores/tasks'
import {TaskStatus} from "~/types/enums";

const taskStore = useTasksStore()
const filteredList = computed(() => {
  return taskStore.tasks.filter(task => task.state === TaskStatus.ON_PROGRESS)
})
</script>

<template>
  <div class="col-12 col-md-6 col-lg-4" v-for="task in filteredList" :key="task.id">
    <TaskCard v-bind="task"/>
  </div>
</template>