import * as net from 'net';
import { flatbuffers } from 'flatbuffers';
import { Bar } from '../foo_generated';

const client = net.createConnection({ port: 5060 }, () => {
    // 'connect' listener
    console.log('connected to server!');

    // create a new flat buffer builder and allocate 0 bytes
    const builder = new flatbuffers.Builder(0);
    // store a string into the flat buffer builder
    const foo = builder.createString('foo');
    // run our creator function for our Bar table
    const bars = Bar.createBar(builder, foo);
    // finish our build process
    builder.finish(bars);
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