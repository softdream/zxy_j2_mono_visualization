// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Line = require('./Line.js');

//-----------------------------------------------------------

class Lines {
  constructor() {
    this.cam_id = 0;
    this.lines = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Lines
    // Serialize message field [cam_id]
    bufferInfo = _serializer.uint32(obj.cam_id, bufferInfo);
    // Serialize the length for message field [lines]
    bufferInfo = _serializer.uint32(obj.lines.length, bufferInfo);
    // Serialize message field [lines]
    obj.lines.forEach((val) => {
      bufferInfo = Line.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Lines
    let tmp;
    let len;
    let data = new Lines();
    // Deserialize message field [cam_id]
    tmp = _deserializer.uint32(buffer);
    data.cam_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [lines]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lines]
    data.lines = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Line.deserialize(buffer);
      data.lines[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Lines';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '81f65aa561ab98e1b11e8498fb81cb8c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 cam_id
    Line[] lines
    
    ================================================================================
    MSG: j2_mono/Line
    int32 id
    int32 life_time
    float32[] coeffs
    Point[] end_points
    int32 type #LINE_DOUBLE=512, LINE_DASH=1024, LINE_SOLID=2048
    int32 source #LINE_PERCEPTION=2097152, LINE_TRACKING=4194304
    float32 dist_to_front_wheel
    float32 width
    int32 type_sibling
    float32 conf
    float32[] sigma_coeffs
    
    
    ================================================================================
    MSG: j2_mono/Point
    float32 x
    float32 y
    float32 z
    
    `;
  }

};

module.exports = Lines;
