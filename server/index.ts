import * as net from 'net';
import { Bar } from '../foo_generated';
import  { flatbuffers } from 'flatbuffers';

const tcpServer = net.createServer((socket) => {
    socket.on('data', (data) => {
        const buf = new flatbuffers.ByteBuffer(data);
        const str = Bar.getRootAsBar(buf);
        console.log(str.gucci());
    });
}).listen(5060, '127.0.0.1');

