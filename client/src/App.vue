<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>调试socket</h1>
    <el-button @click="connect">主动连接</el-button>
    <el-button @click="send">发送消息</el-button>
    <el-button @click="end">断开连接</el-button>
    <h1>{{ message }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import socket from './socket'
import { ElMessage } from 'element-plus'
socket.connect()
let message = ref([])
socket.on('response', (data: string) => {
    console.log(data)
    ;(message.value as string[]).push(data)
})

function send() {
    socket.emit('send', { age: 17 })
}
const end = () => {
    socket.disconnect()
    console.log('断开连接')
    ElMessage({
        message: '断开连接',
        type: 'error',
    })
}
const connect = () => {
    socket.open()
    console.log('重新连接服务器')
    ElMessage({
        message: '重新连接服务器',
        type: 'success',
    })
}
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
