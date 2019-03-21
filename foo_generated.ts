// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @constructor
 */
export class Bar {
    bb: flatbuffers.ByteBuffer|null = null;
  
    bb_pos:number = 0;
  /**
   * @param number i
   * @param flatbuffers.ByteBuffer bb
   * @returns Bar
   */
  __init(i:number, bb:flatbuffers.ByteBuffer):Bar {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  };
  
  /**
   * @param flatbuffers.ByteBuffer bb
   * @param Bar= obj
   * @returns Bar
   */
  static getRootAsBar(bb:flatbuffers.ByteBuffer, obj?:Bar):Bar {
    return (obj || new Bar).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  };
  
  /**
   * @param flatbuffers.Encoding= optionalEncoding
   * @returns string|Uint8Array|null
   */
  gucci():string|null
  gucci(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
  gucci(optionalEncoding?:any):string|Uint8Array|null {
    var offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  };
  
  /**
   * @param flatbuffers.Builder builder
   */
  static startBar(builder:flatbuffers.Builder) {
    builder.startObject(1);
  };
  
  /**
   * @param flatbuffers.Builder builder
   * @param flatbuffers.Offset gucciOffset
   */
  static addGucci(builder:flatbuffers.Builder, gucciOffset:flatbuffers.Offset) {
    builder.addFieldOffset(0, gucciOffset, 0);
  };
  
  /**
   * @param flatbuffers.Builder builder
   * @returns flatbuffers.Offset
   */
  static endBar(builder:flatbuffers.Builder):flatbuffers.Offset {
    var offset = builder.endObject();
    return offset;
  };
  
  /**
   * @param flatbuffers.Builder builder
   * @param flatbuffers.Offset offset
   */
  static finishBarBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
    builder.finish(offset);
  };
  
  static createBar(builder:flatbuffers.Builder, gucciOffset:flatbuffers.Offset):flatbuffers.Offset {
    Bar.startBar(builder);
    Bar.addGucci(builder, gucciOffset);
    return Bar.endBar(builder);
  }
  }
  