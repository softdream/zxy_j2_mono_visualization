// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PointI {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PointI
    // Serialize message field [x]
    bufferInfo = _serializer.int32(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.int32(obj.y, bufferInfo);
    // Serialize message field [z]
    bufferInfo = _serializer.int32(obj.z, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PointI
    let tmp;
    let len;
    let data = new PointI();
    // Deserialize message field [x]
    tmp = _deserializer.int32(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.int32(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [z]
    tmp = _deserializer.int32(buffer);
    data.z = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/PointI';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3cb41a2c4416de195dbb95b7777a06fb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 x
    int32 y
    int32 z
    
    
    `;
  }

};

module.exports = PointI;
