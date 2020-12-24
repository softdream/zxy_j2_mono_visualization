// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Rect = require('./Rect.js');
let Box3D = require('./Box3D.js');
let Polygon = require('./Polygon.js');

//-----------------------------------------------------------

class ImageSpaceInfo {
  constructor() {
    this.rect = new Rect();
    this.box = new Box3D();
    this.poly = new Polygon();
    this.sigma_width = 0.0;
    this.sigma_height = 0.0;
    this.sigma_x = 0.0;
    this.sigma_y = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ImageSpaceInfo
    // Serialize message field [rect]
    bufferInfo = Rect.serialize(obj.rect, bufferInfo);
    // Serialize message field [box]
    bufferInfo = Box3D.serialize(obj.box, bufferInfo);
    // Serialize message field [poly]
    bufferInfo = Polygon.serialize(obj.poly, bufferInfo);
    // Serialize message field [sigma_width]
    bufferInfo = _serializer.float32(obj.sigma_width, bufferInfo);
    // Serialize message field [sigma_height]
    bufferInfo = _serializer.float32(obj.sigma_height, bufferInfo);
    // Serialize message field [sigma_x]
    bufferInfo = _serializer.float32(obj.sigma_x, bufferInfo);
    // Serialize message field [sigma_y]
    bufferInfo = _serializer.float32(obj.sigma_y, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ImageSpaceInfo
    let tmp;
    let len;
    let data = new ImageSpaceInfo();
    // Deserialize message field [rect]
    tmp = Rect.deserialize(buffer);
    data.rect = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [box]
    tmp = Box3D.deserialize(buffer);
    data.box = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [poly]
    tmp = Polygon.deserialize(buffer);
    data.poly = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_width]
    tmp = _deserializer.float32(buffer);
    data.sigma_width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_height]
    tmp = _deserializer.float32(buffer);
    data.sigma_height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_x]
    tmp = _deserializer.float32(buffer);
    data.sigma_x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_y]
    tmp = _deserializer.float32(buffer);
    data.sigma_y = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/ImageSpaceInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1fb215e492dbe974ebabb86f0056d4f6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Rect rect
    Box3D box
    Polygon poly
    float32 sigma_width
    float32 sigma_height
    float32 sigma_x
    float32 sigma_y
    
    ================================================================================
    MSG: j2_mono/Rect
    float32 left
    float32 top
    float32 right
    float32 bottom
    
    ================================================================================
    MSG: j2_mono/Box3D
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
    
    ================================================================================
    MSG: j2_mono/Polygon
    Point[] pts
    
    `;
  }

};

module.exports = ImageSpaceInfo;
