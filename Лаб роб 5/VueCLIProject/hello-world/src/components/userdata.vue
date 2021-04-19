<template>
  <table>
    <tr>
      <td colspan="5">Поточні дані користувача</td>
    </tr>

    <tr>
      <td>Імя</td>
      <td>{{ firstname }}</td>
    </tr>
    <tr>
      <td>Прізвище</td>
      <td>{{ lastname }}</td>
    </tr>
    <tr>
      <td>Вік</td>
      <td>{{ age }}</td>
    </tr>
    <tr>
      <td>Місто</td>
      <td>{{ city }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "userdata",
  props: {
    firstname: String,
    lastname: String,
    age: String,
    city: String,
  },
};
</script>
