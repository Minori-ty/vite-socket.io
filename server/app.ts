import { Server } from 'socket.io'

let a = 1

const io = new Server({ cors: { origin: '*' } })

io.on('connection', socket => {
    console.log(`connect ${socket.id}`)

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
    })

    socket.on('disconnect', () => {
        console.log(`disconnect ${socket.id}`)
    })
})

io.listen(4000)
