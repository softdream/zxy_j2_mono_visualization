// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Rect {
  constructor() {
    this.left = 0.0;
    this.top = 0.0;
    this.right = 0.0;
    this.bottom = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Rect
    // Serialize message field [left]
    bufferInfo = _serializer.float32(obj.left, bufferInfo);
    // Serialize message field [top]
    bufferInfo = _serializer.float32(obj.top, bufferInfo);
    // Serialize message field [right]
    bufferInfo = _serializer.float32(obj.right, bufferInfo);
    // Serialize message field [bottom]
    bufferInfo = _serializer.float32(obj.bottom, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Rect
    let tmp;
    let len;
    let data = new Rect();
    // Deserialize message field [left]
    tmp = _deserializer.float32(buffer);
    data.left = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [top]
    tmp = _deserializer.float32(buffer);
    data.top = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [right]
    tmp = _deserializer.float32(buffer);
    data.right = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [bottom]
    tmp = _deserializer.float32(buffer);
    data.bottom = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Rect';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7aad971742c7cc38deb20cfb704affa1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 left
    float32 top
    float32 right
    float32 bottom
    
    `;
  }

};

module.exports = Rect;
