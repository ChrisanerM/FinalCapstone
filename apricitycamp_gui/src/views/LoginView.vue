<template>
  <ul>
    <li class="nav-item">
      <router-link to="/register"> Register </router-link> |
    </li>
    <li class="nav-item"><router-link to="/login"> Login </router-link> |</li>
  </ul>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("createUser");
    const users = computed(() => store.state.users);
    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped></style>
