// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Obstacle = require('./Obstacle.js');

//-----------------------------------------------------------

class Obstacles {
  constructor() {
    this.cam_id = 0;
    this.obstacle = [];
    this.conf_scale = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Obstacles
    // Serialize message field [cam_id]
    bufferInfo = _serializer.int32(obj.cam_id, bufferInfo);
    // Serialize the length for message field [obstacle]
    bufferInfo = _serializer.uint32(obj.obstacle.length, bufferInfo);
    // Serialize message field [obstacle]
    obj.obstacle.forEach((val) => {
      bufferInfo = Obstacle.serialize(val, bufferInfo);
    });
    // Serialize message field [conf_scale]
    bufferInfo = _serializer.float32(obj.conf_scale, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Obstacles
    let tmp;
    let len;
    let data = new Obstacles();
    // Deserialize message field [cam_id]
    tmp = _deserializer.int32(buffer);
    data.cam_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [obstacle]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [obstacle]
    data.obstacle = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Obstacle.deserialize(buffer);
      data.obstacle[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [conf_scale]
    tmp = _deserializer.float32(buffer);
    data.conf_scale = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Obstacles';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b666125b67b55ba2c6622f953580c9ac';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 cam_id
    Obstacle[] obstacle
    float32 conf_scale # default 0.1
    
    ================================================================================
    MSG: j2_mono/Obstacle
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

module.exports = Obstacles;
