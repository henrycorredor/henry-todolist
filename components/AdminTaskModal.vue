<script setup>

const tasksStore = useTasksStore()

</script>
<template>
  <div class="modal fade" id="updateTaskStateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="updateTaskStateModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="updateTaskStateModalLabel">Confirm operation</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p v-if="tasksStore.operationHandler.action==='set-on-progress'">Confirm to set task to "on progress"?</p>
          <p v-if="tasksStore.operationHandler.action==='set-done'">Confirm to set task to "done"?</p>
          <p v-if="tasksStore.operationHandler.action==='reopen'">Confirm to cancel "done" state and reopen it?</p>
          <p v-if="tasksStore.operationHandler.action==='remove'">Confirm to delete the task?</p>
          <p v-if="tasksStore.operationHandler.action==='cancel-on-progress'">Confirm to cancel the state "on progress"
            and set it to waiting state?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="tasksStore.confirmOperation()">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>