<script setup lang="ts">
import { reactive, ref } from "vue";
interface LoginDto {
  email: string;
  senha: string;
}
const form = ref();
const formData = reactive({ email: "", senha: "" });

const loading = ref(false);

function onSubmit() {
  if (!form.value) return;

  console.log(formData);
}
function required(v: any) {
  return !!v || "Campo obrigatório";
}
</script>
<template>
  <!-- <v-container fluid class="container">
        <v-row no-gutters>
            <v-col cols="6" v-for="n in 2" :key="n">
                <span>fala zeze loga ai</span>
            </v-col>
            <v-col cols="2" v-for="n in 6" :key="n">
                <span>fala zeze loga ai</span>
            </v-col>
        </v-row>
    </v-container> -->

  <!-- <v-form id="form" class="bg-primary">
        <h1>Login</h1>
        <v-text-field :counter="10" label="First name" required></v-text-field>
        <v-text-field :counter="10" label="First name" required></v-text-field>

        <v-btn>logar</v-btn>
    </v-form> -->

  <v-container id="container">
    <v-row no-gutters>
      <v-col cols="4" style="margin: auto">
        <v-card>
          <v-form id="form" v-model="form" @submit.prevent="onSubmit">
            <h1>Login</h1>

            <!-- <Input label="Email" value="email" required/>
            <Input label="Senha" value="senha" required/> -->

            <v-text-field
              v-model="formData.email"
              label="Email"
              name="email"
              :readonly="loading"
              :rules="[required]"
              required
            ></v-text-field>
            <v-text-field
              v-model="formData.senha"
              label="Senha"
              name="senha"
              :readonly="loading"
              :rules="[required]"
              required
            ></v-text-field>

            <v-btn type="submit" class="bg">acessar</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
#container {
  margin: auto;
  display: flex;
  width: 100%;
  /* min-height: 100vh; */
}
#form {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  min-width: 300px;
  /* width: 340px; */
  padding: 0.5rem;
  background-color: #eceff1;
  /* background-color: gray;  */
}

#form button {
  width: fit-content;
  margin: auto;
}
</style>
