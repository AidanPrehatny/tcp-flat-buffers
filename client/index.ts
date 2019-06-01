import * as net from 'net';
import { flatbuffers } from 'flatbuffers';
import { Commander, Gucci, CommandType, Prada } from '../foo_generated';

const createCommander = (builder, cmdType, cmdOffset) => {
    Commander.startCommander(builder);
    Commander.addCmdType(builder, cmdType);
    Commander.addCmd(builder, cmdOffset);
    return Commander.endCommander(builder);
}

const createGucci = (builder) => {
    // store a string into the flat buffer builder
    const gucci = builder.createString('gucci');
    Gucci.startGucci(builder);
    Gucci.addGucci(builder, gucci);
    return Gucci.endGucci(builder);
}

const createPrada = (builder) => {
    Prada.startPrada(builder);
    Prada.addPrada(builder, 20);
    return Prada.endPrada(builder);
}

const client = net.createConnection({ port: 5060 }, () => {
    // 'connect' listener
    console.log('connected to server!');

    // create a new flat buffer builder and allocate 0 bytes
    const builder = new flatbuffers.Builder(0);
    // const gucciCmd = createGucci(builder);
    const pradaCmd = createPrada(builder);
    const cmd = createCommander(builder, CommandType.Prada, pradaCmd);
    Commander.finishCommanderBuffer(builder, cmd);
    // encode the flat buffer as a uInt8Array
    const gucciUint = builder.asUint8Array();
    // store our Uint8Array in a buffer to send across TCP
    client.write(Buffer.from(gucciUint));
});

client.on('data', (data) => {
    // server exit codes/ callback message
    console.log(data.toString());
    // client.end();
});