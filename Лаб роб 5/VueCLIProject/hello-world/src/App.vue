<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <userdata firstname="Yaroslva" lastname="Petrenko" age="20" city="Kiev" />
  <comment />
  <Participants :names="arr" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import userdata from "./components/userdata.vue";
import comment from "./components/comment.vue";
import Participants from "./components/Participants.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    userdata,
    comment,
    Participants,
  },
  data() {
    return {
      arr: [
        { id: "1", title: "Ivan" },
        { id: "2", title: "Petro" },
        { id: "3", title: "Kolya" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
