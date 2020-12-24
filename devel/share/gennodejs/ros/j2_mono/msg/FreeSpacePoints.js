// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point = require('./Point.js');

//-----------------------------------------------------------

class FreeSpacePoints {
  constructor() {
    this.property = [];
    this.cam_id = 0;
    this.pts_vcs = [];
    this.pts_img = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FreeSpacePoints
    // Serialize the length for message field [property]
    bufferInfo = _serializer.uint32(obj.property.length, bufferInfo);
    // Serialize message field [property]
    obj.property.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize message field [cam_id]
    bufferInfo = _serializer.int32(obj.cam_id, bufferInfo);
    // Serialize the length for message field [pts_vcs]
    bufferInfo = _serializer.uint32(obj.pts_vcs.length, bufferInfo);
    // Serialize message field [pts_vcs]
    obj.pts_vcs.forEach((val) => {
      bufferInfo = Point.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [pts_img]
    bufferInfo = _serializer.uint32(obj.pts_img.length, bufferInfo);
    // Serialize message field [pts_img]
    obj.pts_img.forEach((val) => {
      bufferInfo = Point.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FreeSpacePoints
    let tmp;
    let len;
    let data = new FreeSpacePoints();
    // Deserialize array length for message field [property]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [property]
    data.property = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.property[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [cam_id]
    tmp = _deserializer.int32(buffer);
    data.cam_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [pts_vcs]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pts_vcs]
    data.pts_vcs = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Point.deserialize(buffer);
      data.pts_vcs[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [pts_img]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pts_img]
    data.pts_img = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Point.deserialize(buffer);
      data.pts_img[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/FreeSpacePoints';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6fb2b5ce0fd42050cf9b73089f67f90e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32[] property
    int32 cam_id
    Point[] pts_vcs
    Point[] pts_img
    
    ================================================================================
    MSG: j2_mono/Point
    float32 x
    float32 y
    float32 z
    
    `;
  }

};

module.exports = FreeSpacePoints;
