<script setup>
import {TaskStatus} from "~/types/enums.js";

const props = defineProps({
  id: Number,
  title: String,
  desc: String,
  state: TaskStatus,
  pic: String || undefined,
  createdAt: String
})

const taskStore = useTasksStore()

const hasPic = !!props.pic
const createDate = ref('')

onMounted(() => {
  createDate.value = new Date(props.createdAt).toLocaleDateString()
})

</script>

<template>
  <div class="card h-100">
    <span v-if="props.state === TaskStatus.COMPLETED"
          class="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill bg-success">
     Done
    </span>
    <span v-if="props.state === TaskStatus.ON_PROGRESS"
          class="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill bg-primary">
     On progress...
    </span>
    <img v-if="hasPic" :src="pic" class="card-img-top" :alt="title">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ desc }}
      </p>
      <p class="card-text"><small class="text-body-secondary">Created At: {{ createDate }}</small></p>

      <div class="d-flex gap-2 mt-auto">
        <button
            v-if="props.state === TaskStatus.CREATED"
            class="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#updateTaskStateModal"
            @click="taskStore.setOperationHandler(id, 'set-on-progress')"
        >
          Start
        </button>
        <button
            v-if="props.state === TaskStatus.CREATED"
            class="btn btn-danger"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#updateTaskStateModal"
            @click="taskStore.setOperationHandler(id, 'remove')"
        >
          Remove
        </button>
        <button
            v-if="props.state === TaskStatus.ON_PROGRESS"
            class="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#updateTaskStateModal"
            @click="taskStore.setOperationHandler(id, 'set-done')"
        >
          Done
        </button>
        <button
            v-if="props.state === TaskStatus.ON_PROGRESS"
            class="btn btn-secondary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#updateTaskStateModal"
            @click="taskStore.setOperationHandler(id, 'cancel-on-progress')"
        >
          Cancel
        </button>
        <button
            v-if="props.state === TaskStatus.COMPLETED"
            class="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#updateTaskStateModal"
            @click="taskStore.setOperationHandler(id, 'reopen')"
        >
          Reopen
        </button>
        <button
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#createTaskModal"
            @click="taskStore.setOperationHandler(id,null)"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>