<template>
  <div>
    <div v-for="name in names" :key="name.id">
      {{ name.title }}
      <input
        v-bind:id="name.id"
        v-bind:value="name.title"
        v-model="checkedNames"
        type="checkbox"
      />
    </div>
  </div>
  <div>
    <h1>Обрані учасики: {{ checkedNames }}</h1>
  </div>
</template>

<script>
export default {
  name: "Participants",
  props: {
    names: Array,
  },
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>
