// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Image {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.channel = 0;
    this.time_stamp = 0;
    this.send_mode = 0;
    this.format = 0;
    this.index = 0;
    this.count = 0;
    this.depth = 0;
    this.align = 0;
    this.image_counter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Image
    // Serialize message field [width]
    bufferInfo = _serializer.int32(obj.width, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.int32(obj.height, bufferInfo);
    // Serialize message field [channel]
    bufferInfo = _serializer.int32(obj.channel, bufferInfo);
    // Serialize message field [time_stamp]
    bufferInfo = _serializer.int64(obj.time_stamp, bufferInfo);
    // Serialize message field [send_mode]
    bufferInfo = _serializer.int32(obj.send_mode, bufferInfo);
    // Serialize message field [format]
    bufferInfo = _serializer.int32(obj.format, bufferInfo);
    // Serialize message field [index]
    bufferInfo = _serializer.int32(obj.index, bufferInfo);
    // Serialize message field [count]
    bufferInfo = _serializer.int32(obj.count, bufferInfo);
    // Serialize message field [depth]
    bufferInfo = _serializer.int32(obj.depth, bufferInfo);
    // Serialize message field [align]
    bufferInfo = _serializer.int32(obj.align, bufferInfo);
    // Serialize message field [image_counter]
    bufferInfo = _serializer.int32(obj.image_counter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Image
    let tmp;
    let len;
    let data = new Image();
    // Deserialize message field [width]
    tmp = _deserializer.int32(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.int32(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [channel]
    tmp = _deserializer.int32(buffer);
    data.channel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_stamp]
    tmp = _deserializer.int64(buffer);
    data.time_stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [send_mode]
    tmp = _deserializer.int32(buffer);
    data.send_mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [format]
    tmp = _deserializer.int32(buffer);
    data.format = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [index]
    tmp = _deserializer.int32(buffer);
    data.index = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [count]
    tmp = _deserializer.int32(buffer);
    data.count = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [depth]
    tmp = _deserializer.int32(buffer);
    data.depth = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [align]
    tmp = _deserializer.int32(buffer);
    data.align = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [image_counter]
    tmp = _deserializer.int32(buffer);
    data.image_counter = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Image';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5423f0f8301d9093d1931c3f216d2abd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 width
    int32 height
    int32 channel
    int64 time_stamp
    int32 send_mode
    int32 format
    int32 index
    int32 count
    int32 depth
    int32 align
    int32 image_counter
    
    `;
  }

};

module.exports = Image;
