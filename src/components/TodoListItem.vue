<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">
      X
    </button>

     <button @click="$emit('update', todo.id)">
     eidtor
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>