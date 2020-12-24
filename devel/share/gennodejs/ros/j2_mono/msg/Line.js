// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point = require('./Point.js');

//-----------------------------------------------------------

class Line {
  constructor() {
    this.id = 0;
    this.life_time = 0;
    this.coeffs = [];
    this.end_points = [];
    this.type = 0;
    this.source = 0;
    this.dist_to_front_wheel = 0.0;
    this.width = 0.0;
    this.type_sibling = 0;
    this.conf = 0.0;
    this.sigma_coeffs = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Line
    // Serialize message field [id]
    bufferInfo = _serializer.int32(obj.id, bufferInfo);
    // Serialize message field [life_time]
    bufferInfo = _serializer.int32(obj.life_time, bufferInfo);
    // Serialize the length for message field [coeffs]
    bufferInfo = _serializer.uint32(obj.coeffs.length, bufferInfo);
    // Serialize message field [coeffs]
    obj.coeffs.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [end_points]
    bufferInfo = _serializer.uint32(obj.end_points.length, bufferInfo);
    // Serialize message field [end_points]
    obj.end_points.forEach((val) => {
      bufferInfo = Point.serialize(val, bufferInfo);
    });
    // Serialize message field [type]
    bufferInfo = _serializer.int32(obj.type, bufferInfo);
    // Serialize message field [source]
    bufferInfo = _serializer.int32(obj.source, bufferInfo);
    // Serialize message field [dist_to_front_wheel]
    bufferInfo = _serializer.float32(obj.dist_to_front_wheel, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.float32(obj.width, bufferInfo);
    // Serialize message field [type_sibling]
    bufferInfo = _serializer.int32(obj.type_sibling, bufferInfo);
    // Serialize message field [conf]
    bufferInfo = _serializer.float32(obj.conf, bufferInfo);
    // Serialize the length for message field [sigma_coeffs]
    bufferInfo = _serializer.uint32(obj.sigma_coeffs.length, bufferInfo);
    // Serialize message field [sigma_coeffs]
    obj.sigma_coeffs.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Line
    let tmp;
    let len;
    let data = new Line();
    // Deserialize message field [id]
    tmp = _deserializer.int32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [life_time]
    tmp = _deserializer.int32(buffer);
    data.life_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [coeffs]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [coeffs]
    data.coeffs = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.coeffs[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [end_points]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [end_points]
    data.end_points = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Point.deserialize(buffer);
      data.end_points[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [type]
    tmp = _deserializer.int32(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [source]
    tmp = _deserializer.int32(buffer);
    data.source = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dist_to_front_wheel]
    tmp = _deserializer.float32(buffer);
    data.dist_to_front_wheel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.float32(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type_sibling]
    tmp = _deserializer.int32(buffer);
    data.type_sibling = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [conf]
    tmp = _deserializer.float32(buffer);
    data.conf = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [sigma_coeffs]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_coeffs]
    data.sigma_coeffs = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.sigma_coeffs[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Line';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5f428496e74b1f87cdeb56e87ec4d4bf';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = Line;
