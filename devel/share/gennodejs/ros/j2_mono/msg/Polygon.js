// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point = require('./Point.js');

//-----------------------------------------------------------

class Polygon {
  constructor() {
    this.pts = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Polygon
    // Serialize the length for message field [pts]
    bufferInfo = _serializer.uint32(obj.pts.length, bufferInfo);
    // Serialize message field [pts]
    obj.pts.forEach((val) => {
      bufferInfo = Point.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Polygon
    let tmp;
    let len;
    let data = new Polygon();
    // Deserialize array length for message field [pts]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pts]
    data.pts = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Point.deserialize(buffer);
      data.pts[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Polygon';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c9d7e166d449653c48720f55c89cbced';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Point[] pts
    
    ================================================================================
    MSG: j2_mono/Point
    float32 x
    float32 y
    float32 z
    
    `;
  }

};

module.exports = Polygon;
