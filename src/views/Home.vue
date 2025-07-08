<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Profile } from "../interfaces/ProfileDto";
import useProfile from "../services/useProfile";
import logout from "../utils/logout";

const profile = ref<Profile>();

const fetchProfile = async () => {
  try {
    const result = await useProfile();
    console.log(result)
    profile.value = result;
  } catch (err) {
    console.error(err)
  //  throw Error("Erro ao carregar dados do usuário")
  }
};

onMounted(async () => {
  await fetchProfile();
});
</script>
<template>
  <div v-if="profile">

    <h1>fala {{ profile.username }} bom dia</h1>
  
    <v-btn color="primary" width="fit-content" @click="logout($router)"
      >deslogar</v-btn
    >
  </div>
</template>
