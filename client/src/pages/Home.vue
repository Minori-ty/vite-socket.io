<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>调试socket</h1>
    <el-button @click="reconnect">主动连接</el-button>
    <el-button @click="send">发送消息</el-button>
    <el-button @click="end">断开连接</el-button>
    <h1>{{ message }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import socket from '../socket'
import { ElMessage } from 'element-plus'

// 连接socket.io
socket.connect()

//设置数据
let message = ref<string[]>([])

// 监听后端的response事件并处理数据
socket.on('response', (data: string) => {
    console.log(data)
    message.value.push(data)
})
socket.on('broadcast', (data: string) => {
    console.log(data)
    message.value.push(data)
})
//点击按钮，向后端发送数据
function send() {
    socket.emit('send', { age: 17 })
}

// 点击按钮，断开连接socket.io
const end = () => {
    socket.disconnect()
    console.log('断开连接')
    ElMessage({
        message: '断开连接',
        type: 'error',
    })
}

// 点击按钮，重新连接socket.io
const reconnect = () => {
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
