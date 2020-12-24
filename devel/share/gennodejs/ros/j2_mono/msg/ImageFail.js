// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Polygon = require('./Polygon.js');

//-----------------------------------------------------------

class ImageFail {
  constructor() {
    this.cam_id = 0;
    this.frame_id = 0;
    this.fail_type = 0;
    this.level = 0;
    this.regions = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ImageFail
    // Serialize message field [cam_id]
    bufferInfo = _serializer.int32(obj.cam_id, bufferInfo);
    // Serialize message field [frame_id]
    bufferInfo = _serializer.int32(obj.frame_id, bufferInfo);
    // Serialize message field [fail_type]
    bufferInfo = _serializer.int32(obj.fail_type, bufferInfo);
    // Serialize message field [level]
    bufferInfo = _serializer.int32(obj.level, bufferInfo);
    // Serialize the length for message field [regions]
    bufferInfo = _serializer.uint32(obj.regions.length, bufferInfo);
    // Serialize message field [regions]
    obj.regions.forEach((val) => {
      bufferInfo = Polygon.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ImageFail
    let tmp;
    let len;
    let data = new ImageFail();
    // Deserialize message field [cam_id]
    tmp = _deserializer.int32(buffer);
    data.cam_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frame_id]
    tmp = _deserializer.int32(buffer);
    data.frame_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fail_type]
    tmp = _deserializer.int32(buffer);
    data.fail_type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [level]
    tmp = _deserializer.int32(buffer);
    data.level = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [regions]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [regions]
    data.regions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Polygon.deserialize(buffer);
      data.regions[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/ImageFail';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b75b6afa1e707dc499267f7da2b60b6c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 cam_id
    int32 frame_id
    int32 fail_type #IMG_NORMAL=0, IMG_BLUR=1, IMG_SHELTER=2, IMG_FREEZE=4, IMG_GLARE=8
    int32 level #FAIL_NONE=0, FAIL_MILD=1, FAIL_MODERATE=2, FAIL_SEVERE=3
    Polygon[] regions
    
    ================================================================================
    MSG: j2_mono/Polygon
    Point[] pts
    
    ================================================================================
    MSG: j2_mono/Point
    float32 x
    float32 y
    float32 z
    
    `;
  }

};

module.exports = ImageFail;
