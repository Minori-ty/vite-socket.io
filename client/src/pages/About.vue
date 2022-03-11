<template>
    <h1>about组件</h1>
    <h2>{{ message }}</h2>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import socket from '../socket'
import { ElMessage } from 'element-plus'

// 连接socket.io
socket.connect()

//设置数据
let message = ref([])

// 监听后端的response事件并处理数据
socket.on('broadcast', (data: string) => {
    console.log(data)
    ElMessage({
        message: data,
        type: 'success',
    })
    ;(message.value as string[]).push(data)
})
</script>
<style scoped></style>
