<script setup lang="ts">
import { reactive, ref } from "vue";
import useLogin from "../services/useLogin";
import type { LoginDto } from "../interfaces/LoginDto";
import { useRouter } from "vue-router";

const form = ref();
const router = useRouter();
const formData = reactive<LoginDto>({ username: "", senha: "" });

const loading = ref(false);
const hideSenha = ref(false);

async function onSubmit() {
  if (!form.value) return;

  try {
    await useLogin(formData);

    alert("login feito com sucesso");
    router.push("/home");
  } catch (e: any) {
    alert(e.response.data.message);
  }
}
function required(v: any) {
  return !!v || "Campo obrigatório";
}
</script>
<template>
  <v-container id="container">
    <v-row no-gutters>
      <v-col cols="4" style="margin: auto">
        <v-card>
          <v-form id="form" v-model="form" @submit.prevent="onSubmit">
            <h1>Login</h1>
            <v-text-field
              v-model="formData.username"
              label="Email/username"
              name="username"
              :readonly="loading"
              :rules="[required]"
              required
            ></v-text-field>
            <v-text-field
              v-model="formData.senha"
              label="Senha"
              name="senha"
              :type="hideSenha ? 'text' : 'password'"
              :readonly="loading"
              :rules="[required]"
              required
              style="padding: 0"
            >
              <template #append-inner>
                <v-icon
                  @click="hideSenha = !hideSenha"
                  class="cursor-pointer"
                  :icon="hideSenha ? 'mdi-eye-off' : 'mdi-eye'"
                  style="padding: 0 0.25rem"
                />
              </template>
            </v-text-field>

            <v-btn type="submit">acessar</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
h1 {
  text-align: center;
  margin: 1rem 0;
}
#container {
  margin: auto;
  display: flex;
  width: 100%;
}
#form {
  display: flex;
  flex-direction: column;
  margin: auto;
  min-width: 300px;
  /* width: 340px; */
  padding: 0.5rem;
  background-color: #eceff1;
  /* background-color: gray;  */
}

#form button {
  width: fit-content;
  margin: auto;
  margin-top: 0.5rem;
}
</style>
