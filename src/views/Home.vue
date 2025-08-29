<template>
  <div style="padding: 20px; max-width: 600px; margin: auto">
    <h2>Chat com NestJS + Socket.IO + Vue</h2>

    <div>
      <input v-model="username" placeholder="Seu nome" />
      <input v-model="room" placeholder="Sala" />
      <button @click="joinRoom">Entrar na Sala</button>
    </div>

    <div
      style="
        margin-top: 20px;
        height: 300px;
        overflow-y: auto;
        border: 1px solid #ccc;
        padding: 10px;
      "
    >
      <div
        v-for="msg in messages"
        :key="msg._id || msg.createdAt + msg.username"
        style="margin-bottom: 8px"
      >
        <b>{{ msg.username }}</b
        >: {{ msg.content }}
        <small style="color: grey">{{ formatDate(msg.createdAt) }}</small>
      </div>
    </div>

    <div style="margin-top: 10px">
      <input
        type="text"
        v-model="input"
        placeholder="Digite sua mensagem..."
        @keyup.enter="sendMessage"
        style="width: 80%"
      />
      <button @click="sendMessage" style="width: 18%">Enviar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from "vue";
import { socket } from "../config/socket";

const username = ref("");
const room = ref("");
const input = ref("");
const messages = ref([]);

const joinRoom = () => {
  if (!username.value || !room.value) {
    alert("Informe nome e sala para entrar");
    return;
  }
  socket.emit("joinRoom", room.value);
};

const sendMessage = () => {
  if (input.value.trim() && username.value && room.value) {
    socket.emit("sendMessage", {
      username: username.value,
      room: room.value,
      content: input.value.trim(),
    });
    input.value = "";
  }
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleTimeString();
};
onBeforeMount(() => {
  socket.connect();
});
onMounted(() => {
  socket.on("previousMessages", (msgs) => {
    messages.value = msgs;
  });

  socket.on("newMessage", (msg) => {
    messages.value.push(msg);
  });
});

onBeforeUnmount(() => {
  if (socket) {
    socket.disconnect();
  }
});
</script>

<style scoped>
input {
  margin-right: 8px;
  padding: 6px;
  font-size: 1em;
}
button {
  padding: 6px 12px;
  font-size: 1em;
}
</style>
