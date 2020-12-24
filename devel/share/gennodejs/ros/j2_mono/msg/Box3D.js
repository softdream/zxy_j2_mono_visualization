// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point = require('./Point.js');

//-----------------------------------------------------------

class Box3D {
  constructor() {
    this.lower_lt = new Point();
    this.lower_lb = new Point();
    this.lower_rb = new Point();
    this.lower_rt = new Point();
    this.upper_lt = new Point();
    this.upper_lb = new Point();
    this.upper_rb = new Point();
    this.upper_rt = new Point();
    this.conf = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Box3D
    // Serialize message field [lower_lt]
    bufferInfo = Point.serialize(obj.lower_lt, bufferInfo);
    // Serialize message field [lower_lb]
    bufferInfo = Point.serialize(obj.lower_lb, bufferInfo);
    // Serialize message field [lower_rb]
    bufferInfo = Point.serialize(obj.lower_rb, bufferInfo);
    // Serialize message field [lower_rt]
    bufferInfo = Point.serialize(obj.lower_rt, bufferInfo);
    // Serialize message field [upper_lt]
    bufferInfo = Point.serialize(obj.upper_lt, bufferInfo);
    // Serialize message field [upper_lb]
    bufferInfo = Point.serialize(obj.upper_lb, bufferInfo);
    // Serialize message field [upper_rb]
    bufferInfo = Point.serialize(obj.upper_rb, bufferInfo);
    // Serialize message field [upper_rt]
    bufferInfo = Point.serialize(obj.upper_rt, bufferInfo);
    // Serialize message field [conf]
    bufferInfo = _serializer.float32(obj.conf, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Box3D
    let tmp;
    let len;
    let data = new Box3D();
    // Deserialize message field [lower_lt]
    tmp = Point.deserialize(buffer);
    data.lower_lt = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lower_lb]
    tmp = Point.deserialize(buffer);
    data.lower_lb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lower_rb]
    tmp = Point.deserialize(buffer);
    data.lower_rb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lower_rt]
    tmp = Point.deserialize(buffer);
    data.lower_rt = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [upper_lt]
    tmp = Point.deserialize(buffer);
    data.upper_lt = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [upper_lb]
    tmp = Point.deserialize(buffer);
    data.upper_lb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [upper_rb]
    tmp = Point.deserialize(buffer);
    data.upper_rb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [upper_rt]
    tmp = Point.deserialize(buffer);
    data.upper_rt = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [conf]
    tmp = _deserializer.float32(buffer);
    data.conf = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Box3D';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd2a4c3bc64f81e95d0c37d470dea3708';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Point lower_lt
    Point lower_lb
    Point lower_rb
    Point lower_rt
    Point upper_lt
    Point upper_lb
    Point upper_rb
    Point upper_rt
    float32 conf
    
    ================================================================================
    MSG: j2_mono/Point
    float32 x
    float32 y
    float32 z
    
    `;
  }

};

module.exports = Box3D;
