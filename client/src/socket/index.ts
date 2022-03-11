import { io, Socket } from 'socket.io-client'
import { ElMessage } from 'element-plus'

interface ServerToClientEvents {
    disconnected: () => void
    response: (data: string) => void
    broadcast: (data: string) => void
}

interface ClientToServerEvents {
    send: (data: { age: number }) => void
}

// 连接socket.io
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('ws://localhost:4000', {})

// 监听成功连接服务器事件
socket.on('connect', () => {
    ElMessage({
        message: '和服务器连接!',
        type: 'success',
    })
    console.log('和服务器连接')
})

export default socket
