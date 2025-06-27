<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
<template>
    <h1>fala zeze bom dia</h1>
    <v-btn color="primary" @click="count++">Hello, world! {{ count }}</v-btn>
</template>