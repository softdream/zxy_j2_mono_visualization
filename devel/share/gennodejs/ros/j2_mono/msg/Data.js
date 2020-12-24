// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Image = require('./Image.js');
let odometryFrame = require('./odometryFrame.js');
let StructurePerception = require('./StructurePerception.js');

//-----------------------------------------------------------

class Data {
  constructor() {
    this.version = 0;
    this.frame_id = 0;
    this.image = [];
    this.data_descriptor = 0;
    this.odometry = new odometryFrame();
    this.structure_perception = new StructurePerception();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Data
    // Serialize message field [version]
    bufferInfo = _serializer.int32(obj.version, bufferInfo);
    // Serialize message field [frame_id]
    bufferInfo = _serializer.int32(obj.frame_id, bufferInfo);
    // Serialize the length for message field [image]
    bufferInfo = _serializer.uint32(obj.image.length, bufferInfo);
    // Serialize message field [image]
    obj.image.forEach((val) => {
      bufferInfo = Image.serialize(val, bufferInfo);
    });
    // Serialize message field [data_descriptor]
    bufferInfo = _serializer.int32(obj.data_descriptor, bufferInfo);
    // Serialize message field [odometry]
    bufferInfo = odometryFrame.serialize(obj.odometry, bufferInfo);
    // Serialize message field [structure_perception]
    bufferInfo = StructurePerception.serialize(obj.structure_perception, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Data
    let tmp;
    let len;
    let data = new Data();
    // Deserialize message field [version]
    tmp = _deserializer.int32(buffer);
    data.version = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frame_id]
    tmp = _deserializer.int32(buffer);
    data.frame_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [image]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [image]
    data.image = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Image.deserialize(buffer);
      data.image[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [data_descriptor]
    tmp = _deserializer.int32(buffer);
    data.data_descriptor = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [odometry]
    tmp = odometryFrame.deserialize(buffer);
    data.odometry = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [structure_perception]
    tmp = StructurePerception.deserialize(buffer);
    data.structure_perception = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/Data';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e14d20a277709c9126477d5d06db7a45';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 version
    int32 frame_id
    Image[] image
    int32 data_descriptor
    #CameraParam camera
    #CameraParam camera_default
    #CameraMatrix camera_matrix
    #SensorFrame sensor
    #MotionFrame montion
    odometryFrame odometry
    StructurePerception structure_perception
    
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
    MSG: j2_mono/odometryFrame
    float32 x
    float32 y
    float32 yaw
    float32 speed
    float32 yaw_rate
    int32 time_stamp
    
    ================================================================================
    MSG: j2_mono/StructurePerception
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
    MSG: j2_mono/FreeSpacePoints
    int32[] property
    int32 cam_id
    Point[] pts_vcs
    Point[] pts_img
    
    `;
  }

};

module.exports = Data;
