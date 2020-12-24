// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ImageSpaceInfo = require('./ImageSpaceInfo.js');
let WorldSpaceInfo = require('./WorldSpaceInfo.js');

//-----------------------------------------------------------

class Obstacle {
  constructor() {
    this.id = 0;
    this.type = 0;
    this.conf = 0;
    this.life_time = 0;
    this.age = 0;
    this.img_info = new ImageSpaceInfo();
    this.world_info = new WorldSpaceInfo();
    this.property = [];
    this.property_name = [];
    this.property_type = [];
    this.property_conf = [];
    this.tracking_fmap = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Obstacle
    // Serialize message field [id]
    bufferInfo = _serializer.int32(obj.id, bufferInfo);
    // Serialize message field [type]
    bufferInfo = _serializer.int32(obj.type, bufferInfo);
    // Serialize message field [conf]
    bufferInfo = _serializer.int32(obj.conf, bufferInfo);
    // Serialize message field [life_time]
    bufferInfo = _serializer.int32(obj.life_time, bufferInfo);
    // Serialize message field [age]
    bufferInfo = _serializer.int32(obj.age, bufferInfo);
    // Serialize message field [img_info]
    bufferInfo = ImageSpaceInfo.serialize(obj.img_info, bufferInfo);
    // Serialize message field [world_info]
    bufferInfo = WorldSpaceInfo.serialize(obj.world_info, bufferInfo);
    // Serialize the length for message field [property]
    bufferInfo = _serializer.uint32(obj.property.length, bufferInfo);
    // Serialize message field [property]
    obj.property.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [property_name]
    bufferInfo = _serializer.uint32(obj.property_name.length, bufferInfo);
    // Serialize message field [property_name]
    obj.property_name.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [property_type]
    bufferInfo = _serializer.uint32(obj.property_type.length, bufferInfo);
    // Serialize message field [property_type]
    obj.property_type.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [property_conf]
    bufferInfo = _serializer.uint32(obj.property_conf.length, bufferInfo);
    // Serialize message field [property_conf]
    obj.property_conf.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [tracking_fmap]
    bufferInfo = _serializer.uint32(obj.tracking_fmap.length, bufferInfo);
    // Serialize message field [tracking_fmap]
    obj.tracking_fmap.forEach((val) => {
      bufferInfo = _serializer.int8(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Obstacle
    let tmp;
    let len;
    let data = new Obstacle();
    // Deserialize message field [id]
    tmp = _deserializer.int32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = _deserializer.int32(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [conf]
    tmp = _deserializer.int32(buffer);
    data.conf = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [life_time]
    tmp = _deserializer.int32(buffer);
    data.life_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [age]
    tmp = _deserializer.int32(buffer);
    data.age = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [img_info]
    tmp = ImageSpaceInfo.deserialize(buffer);
    data.img_info = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [world_info]
    tmp = WorldSpaceInfo.deserialize(buffer);
    data.world_info = tmp.data;
    buffer = tmp.buffer;
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
    // Deserialize array length for message field [property_name]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [property_name]
    data.property_name = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.property_name[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [property_type]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [property_type]
    data.property_type = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.property_type[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [property_conf]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [property_conf]
    data.property_conf = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.property_conf[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [tracking_fmap]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tracking_fmap]
    data.tracking_fmap = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int8(buffer);
      data.tracking_fmap[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Obstacle';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'aa36fd0875dc274867576399a8c05785';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 id
    int32 type #ObstacleType_VehicleRear=0, ObstacleType_VehicleFull=1, ObstacleType_Pedestrian=2, ObstacleType_TrafficSign=3, ObstacleType_TrafficLight=4, ObstacleType_ParkingSlot=5, ObstacleType_RoadSign=6, ObstacleType_Cyclist=18
    int32 conf
    int32 life_time
    int32 age
    ImageSpaceInfo img_info
    WorldSpaceInfo world_info
    int32[] property #
    string[] property_name
    int32[] property_type
    float32[] property_conf
    int8[] tracking_fmap
    
    
    ================================================================================
    MSG: j2_mono/ImageSpaceInfo
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
    
    ================================================================================
    MSG: j2_mono/WorldSpaceInfo
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
    
    `;
  }

};

module.exports = Obstacle;
