import * as net from 'net';
import * as CommanderFbs from '../foo_generated';
import  { flatbuffers } from 'flatbuffers';

const tcpServer = net.createServer((socket) => {
    socket.on('data', (data) => {
        const buf = new flatbuffers.ByteBuffer(data);
        const commander = CommanderFbs.Commander.getRootAsCommander(buf);
        
        const unionType = commander.cmdType();

        if (unionType == CommanderFbs.CommandType.Gucci) {
            console.log('gucci');
            const cmdGucci = commander.cmd(new CommanderFbs.Gucci()).gucci();
            console.log(cmdGucci);
        }
        if (unionType == CommanderFbs.CommandType.Prada) {
            console.log('prada');
            const cmdPrada = commander.cmd(new CommanderFbs.Prada()).prada();
            console.log(cmdPrada);
        }
    });
}).listen(5060, '127.0.0.1');

