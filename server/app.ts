import { Server } from 'socket.io'

interface ServerToClientEvents {
    disconnected: () => void
    response: (data: SocketData) => void
    broadcast: (data: number) => void
}

interface ClientToServerEvents {
    send: (data: { age: number }) => void
}

interface InterServerEvents {
    ping: () => void
}

interface SocketData {
    data: number
}

let a = 1
const userId = []
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>({
    cors: { origin: '*' },
})

io.on('connection', socket => {
    console.log(`connect ${socket.id}`)
    userId.push(socket.id)
    //监听disconnect事件
    socket.on('disconnect', () => {
        socket.emit('disconnected')
        console.log('客户端离开页面')
    })

    socket.on('send', (data: { age: number }) => {
        console.log('接收到客户端的消息', data.age)
        setTimeout(() => {
            socket.emit('response', { data: a })
            a++
        }, 0)
        socket.broadcast.emit('broadcast', 333)
    })

    socket.on('disconnect', () => {
        console.log(`disconnect ${socket.id}`)
    })
})
io.on('ping', () => {
    console.log('有人ping了')
})
io.listen(4000)
