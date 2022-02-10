// import io from 'socket.io-client'

// const socket = io()
import { io } from 'socket.io-client'
// io is not working here at all
const socket = io('ws://localhost:4000/', {})
import { ElMessage } from 'element-plus'
socket.on('connect', () => {
    ElMessage({
        message: '和服务器连接!',
        type: 'success',
    })
    console.log('和服务器连接')
})

export default socket
