// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Velocity = require('./Velocity.js');
let Polygon = require('./Polygon.js');
let Point = require('./Point.js');

//-----------------------------------------------------------

class WorldSpaceInfo {
  constructor() {
    this.yaw = 0.0;
    this.vel = new Velocity();
    this.length = 0.0;
    this.width = 0.0;
    this.height = 0.0;
    this.poly = new Polygon();
    this.position = new Point();
    this.traversable = 0;
    this.hmw = 0.0;
    this.ttc = 0.0;
    this.curr_lane = 0;
    this.sigma_yaw = 0.0;
    this.sigma_vel = [];
    this.sigma_width = 0.0;
    this.sigma_height = 0.0;
    this.sigma_position = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WorldSpaceInfo
    // Serialize message field [yaw]
    bufferInfo = _serializer.float32(obj.yaw, bufferInfo);
    // Serialize message field [vel]
    bufferInfo = Velocity.serialize(obj.vel, bufferInfo);
    // Serialize message field [length]
    bufferInfo = _serializer.float32(obj.length, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.float32(obj.width, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.float32(obj.height, bufferInfo);
    // Serialize message field [poly]
    bufferInfo = Polygon.serialize(obj.poly, bufferInfo);
    // Serialize message field [position]
    bufferInfo = Point.serialize(obj.position, bufferInfo);
    // Serialize message field [traversable]
    bufferInfo = _serializer.int32(obj.traversable, bufferInfo);
    // Serialize message field [hmw]
    bufferInfo = _serializer.float32(obj.hmw, bufferInfo);
    // Serialize message field [ttc]
    bufferInfo = _serializer.float32(obj.ttc, bufferInfo);
    // Serialize message field [curr_lane]
    bufferInfo = _serializer.int32(obj.curr_lane, bufferInfo);
    // Serialize message field [sigma_yaw]
    bufferInfo = _serializer.float32(obj.sigma_yaw, bufferInfo);
    // Serialize the length for message field [sigma_vel]
    bufferInfo = _serializer.uint32(obj.sigma_vel.length, bufferInfo);
    // Serialize message field [sigma_vel]
    obj.sigma_vel.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize message field [sigma_width]
    bufferInfo = _serializer.float32(obj.sigma_width, bufferInfo);
    // Serialize message field [sigma_height]
    bufferInfo = _serializer.float32(obj.sigma_height, bufferInfo);
    // Serialize the length for message field [sigma_position]
    bufferInfo = _serializer.uint32(obj.sigma_position.length, bufferInfo);
    // Serialize message field [sigma_position]
    obj.sigma_position.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WorldSpaceInfo
    let tmp;
    let len;
    let data = new WorldSpaceInfo();
    // Deserialize message field [yaw]
    tmp = _deserializer.float32(buffer);
    data.yaw = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vel]
    tmp = Velocity.deserialize(buffer);
    data.vel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [length]
    tmp = _deserializer.float32(buffer);
    data.length = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.float32(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.float32(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [poly]
    tmp = Polygon.deserialize(buffer);
    data.poly = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = Point.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [traversable]
    tmp = _deserializer.int32(buffer);
    data.traversable = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hmw]
    tmp = _deserializer.float32(buffer);
    data.hmw = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ttc]
    tmp = _deserializer.float32(buffer);
    data.ttc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [curr_lane]
    tmp = _deserializer.int32(buffer);
    data.curr_lane = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_yaw]
    tmp = _deserializer.float32(buffer);
    data.sigma_yaw = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [sigma_vel]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_vel]
    data.sigma_vel = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.sigma_vel[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [sigma_width]
    tmp = _deserializer.float32(buffer);
    data.sigma_width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_height]
    tmp = _deserializer.float32(buffer);
    data.sigma_height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [sigma_position]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sigma_position]
    data.sigma_position = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.sigma_position[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/WorldSpaceInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '06b0dcae51474264c1f32cddd4cb2623';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 yaw #rad
    Velocity vel #m/s relative velocity
    float32 length # real length of the obstacle in world coordinate
    float32 width # real width
    float32 height # real height
    Polygon poly # 
    Point position # real position of the obstacle in world coordinate
    int32 traversable
    float32 hmw
    float32 ttc
    int32 curr_lane
    float32 sigma_yaw
    float32[] sigma_vel
    float32 sigma_width
    float32 sigma_height
    float32[] sigma_position
    
    
    ================================================================================
    MSG: j2_mono/Velocity
    float32 vx
    float32 vy
    float32 vz
    
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

module.exports = WorldSpaceInfo;
