// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class odometryFrame {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.yaw = 0.0;
    this.speed = 0.0;
    this.yaw_rate = 0.0;
    this.time_stamp = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type odometryFrame
    // Serialize message field [x]
    bufferInfo = _serializer.float32(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float32(obj.y, bufferInfo);
    // Serialize message field [yaw]
    bufferInfo = _serializer.float32(obj.yaw, bufferInfo);
    // Serialize message field [speed]
    bufferInfo = _serializer.float32(obj.speed, bufferInfo);
    // Serialize message field [yaw_rate]
    bufferInfo = _serializer.float32(obj.yaw_rate, bufferInfo);
    // Serialize message field [time_stamp]
    bufferInfo = _serializer.int32(obj.time_stamp, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type odometryFrame
    let tmp;
    let len;
    let data = new odometryFrame();
    // Deserialize message field [x]
    tmp = _deserializer.float32(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float32(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [yaw]
    tmp = _deserializer.float32(buffer);
    data.yaw = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [speed]
    tmp = _deserializer.float32(buffer);
    data.speed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [yaw_rate]
    tmp = _deserializer.float32(buffer);
    data.yaw_rate = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_stamp]
    tmp = _deserializer.int32(buffer);
    data.time_stamp = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/odometryFrame';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5a95cc00626a88f4bbae5ae097e0829f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 x
    float32 y
    float32 yaw
    float32 speed
    float32 yaw_rate
    int32 time_stamp
    
    `;
  }

};

module.exports = odometryFrame;
