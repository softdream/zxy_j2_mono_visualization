// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Velocity {
  constructor() {
    this.vx = 0.0;
    this.vy = 0.0;
    this.vz = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Velocity
    // Serialize message field [vx]
    bufferInfo = _serializer.float32(obj.vx, bufferInfo);
    // Serialize message field [vy]
    bufferInfo = _serializer.float32(obj.vy, bufferInfo);
    // Serialize message field [vz]
    bufferInfo = _serializer.float32(obj.vz, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Velocity
    let tmp;
    let len;
    let data = new Velocity();
    // Deserialize message field [vx]
    tmp = _deserializer.float32(buffer);
    data.vx = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vy]
    tmp = _deserializer.float32(buffer);
    data.vy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vz]
    tmp = _deserializer.float32(buffer);
    data.vz = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Velocity';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ac272c003bd99cf28cdbf4d88ce75837';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 vx
    float32 vy
    float32 vz
    
    `;
  }

};

module.exports = Velocity;
