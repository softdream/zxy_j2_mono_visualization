// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point = require('./Point.js');

//-----------------------------------------------------------

class OBBox2D {
  constructor() {
    this.corner = new Point();
    this.axes_pts = new Point();
    this.size = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type OBBox2D
    // Serialize message field [corner]
    bufferInfo = Point.serialize(obj.corner, bufferInfo);
    // Serialize message field [axes_pts]
    bufferInfo = Point.serialize(obj.axes_pts, bufferInfo);
    // Serialize message field [size]
    bufferInfo = _serializer.float32(obj.size, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type OBBox2D
    let tmp;
    let len;
    let data = new OBBox2D();
    // Deserialize message field [corner]
    tmp = Point.deserialize(buffer);
    data.corner = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [axes_pts]
    tmp = Point.deserialize(buffer);
    data.axes_pts = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [size]
    tmp = _deserializer.float32(buffer);
    data.size = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/OBBox2D';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '20845fd799692f5fd377b5118d47def7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Point corner
    Point axes_pts
    float32 size
    
    ================================================================================
    MSG: j2_mono/Point
    float32 x
    float32 y
    float32 z
    
    `;
  }

};

module.exports = OBBox2D;
