<template>
  <textarea @input="setText"></textarea>
  <button @click="addItem">Опублікувати</button>
  <ol>
    <li v-for="item in list" :key="item.id">
      {{ item.title + " " + item.time }}
    </li>
  </ol>
</template>

<script>
export default {
  name: "comment",
  props: {},
  data() {
    return {
      idForList: 1,
      itemText: "",
      list: [],
    };
  },
  methods: {
    addItem() {
      if (this.itemText.trim() == 0) {
        return;
      }
      let date = new Date();
      let time =
        " at " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      this.list.push({
        id: this.idForList,
        title: this.itemText,
        time: time,
      });

      this.itemText = "";
      this.idForList++;
    },
    setText(event) {
      this.itemText = event.target.value;
    },
  },
};
</script>
