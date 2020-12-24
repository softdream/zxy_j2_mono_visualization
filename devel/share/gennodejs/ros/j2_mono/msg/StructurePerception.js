// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Obstacles = require('./Obstacles.js');
let Lines = require('./Lines.js');
let Image = require('./Image.js');
let FreeSpacePoints = require('./FreeSpacePoints.js');

//-----------------------------------------------------------

class StructurePerception {
  constructor() {
    this.obstacles = [];
    this.lines = [];
    this.parsing = [];
    this.depth = [];
    this.scan_pts = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type StructurePerception
    // Serialize the length for message field [obstacles]
    bufferInfo = _serializer.uint32(obj.obstacles.length, bufferInfo);
    // Serialize message field [obstacles]
    obj.obstacles.forEach((val) => {
      bufferInfo = Obstacles.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [lines]
    bufferInfo = _serializer.uint32(obj.lines.length, bufferInfo);
    // Serialize message field [lines]
    obj.lines.forEach((val) => {
      bufferInfo = Lines.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [parsing]
    bufferInfo = _serializer.uint32(obj.parsing.length, bufferInfo);
    // Serialize message field [parsing]
    obj.parsing.forEach((val) => {
      bufferInfo = Image.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [depth]
    bufferInfo = _serializer.uint32(obj.depth.length, bufferInfo);
    // Serialize message field [depth]
    obj.depth.forEach((val) => {
      bufferInfo = Image.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [scan_pts]
    bufferInfo = _serializer.uint32(obj.scan_pts.length, bufferInfo);
    // Serialize message field [scan_pts]
    obj.scan_pts.forEach((val) => {
      bufferInfo = FreeSpacePoints.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type StructurePerception
    let tmp;
    let len;
    let data = new StructurePerception();
    // Deserialize array length for message field [obstacles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [obstacles]
    data.obstacles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Obstacles.deserialize(buffer);
      data.obstacles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [lines]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lines]
    data.lines = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Lines.deserialize(buffer);
      data.lines[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [parsing]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parsing]
    data.parsing = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Image.deserialize(buffer);
      data.parsing[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [depth]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [depth]
    data.depth = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Image.deserialize(buffer);
      data.depth[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [scan_pts]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scan_pts]
    data.scan_pts = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = FreeSpacePoints.deserialize(buffer);
      data.scan_pts[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/StructurePerception';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3d9b9bfdc995a7d79a16758bb8437266';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Obstacles[] obstacles
    Lines[] lines
    Image[] parsing
    Image[] depth
    FreeSpacePoints[] scan_pts
    #ParsingSetting[] parsing_settingsObstacles obstacles
    
    ================================================================================
    MSG: j2_mono/Obstacles
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
    
    ================================================================================
    MSG: j2_mono/Lines
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
    MSG: j2_mono/Image
    int32 width
    int32 height
    int32 channel
    int64 time_stamp
    int32 send_mode
    int32 format
    int32 index
    int32 count
    int32 depth
    int32 align
    int32 image_counter
    
    ================================================================================
    MSG: j2_mono/FreeSpacePoints
    int32[] property
    int32 cam_id
    Point[] pts_vcs
    Point[] pts_img
    
    `;
  }

};

module.exports = StructurePerception;
