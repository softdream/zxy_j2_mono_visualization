// Auto-generated. Do not edit!

// (in-package j2_mono.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class canFrame {
  constructor() {
    this.vehSpeed = 0;
    this.vehSpeed_time_stamp = 0;
    this.wheelAngle = 0;
    this.wheelAngle_time_stamp = 0;
    this.gearType = 0;
    this.gearType_time_stamp = 0;
    this.turnSignal = 0;
    this.turnSignal_time_stamp = 0;
    this.acc = 0.0;
    this.yaw = 0.0;
    this.yaw_rate = 0.0;
    this.imu_time_stamp = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type canFrame
    // Serialize message field [vehSpeed]
    bufferInfo = _serializer.int64(obj.vehSpeed, bufferInfo);
    // Serialize message field [vehSpeed_time_stamp]
    bufferInfo = _serializer.int64(obj.vehSpeed_time_stamp, bufferInfo);
    // Serialize message field [wheelAngle]
    bufferInfo = _serializer.int64(obj.wheelAngle, bufferInfo);
    // Serialize message field [wheelAngle_time_stamp]
    bufferInfo = _serializer.int64(obj.wheelAngle_time_stamp, bufferInfo);
    // Serialize message field [gearType]
    bufferInfo = _serializer.int64(obj.gearType, bufferInfo);
    // Serialize message field [gearType_time_stamp]
    bufferInfo = _serializer.int64(obj.gearType_time_stamp, bufferInfo);
    // Serialize message field [turnSignal]
    bufferInfo = _serializer.int64(obj.turnSignal, bufferInfo);
    // Serialize message field [turnSignal_time_stamp]
    bufferInfo = _serializer.int64(obj.turnSignal_time_stamp, bufferInfo);
    // Serialize message field [acc]
    bufferInfo = _serializer.float32(obj.acc, bufferInfo);
    // Serialize message field [yaw]
    bufferInfo = _serializer.float32(obj.yaw, bufferInfo);
    // Serialize message field [yaw_rate]
    bufferInfo = _serializer.float32(obj.yaw_rate, bufferInfo);
    // Serialize message field [imu_time_stamp]
    bufferInfo = _serializer.int64(obj.imu_time_stamp, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type canFrame
    let tmp;
    let len;
    let data = new canFrame();
    // Deserialize message field [vehSpeed]
    tmp = _deserializer.int64(buffer);
    data.vehSpeed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vehSpeed_time_stamp]
    tmp = _deserializer.int64(buffer);
    data.vehSpeed_time_stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [wheelAngle]
    tmp = _deserializer.int64(buffer);
    data.wheelAngle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [wheelAngle_time_stamp]
    tmp = _deserializer.int64(buffer);
    data.wheelAngle_time_stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gearType]
    tmp = _deserializer.int64(buffer);
    data.gearType = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gearType_time_stamp]
    tmp = _deserializer.int64(buffer);
    data.gearType_time_stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [turnSignal]
    tmp = _deserializer.int64(buffer);
    data.turnSignal = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [turnSignal_time_stamp]
    tmp = _deserializer.int64(buffer);
    data.turnSignal_time_stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [acc]
    tmp = _deserializer.float32(buffer);
    data.acc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [yaw]
    tmp = _deserializer.float32(buffer);
    data.yaw = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [yaw_rate]
    tmp = _deserializer.float32(buffer);
    data.yaw_rate = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [imu_time_stamp]
    tmp = _deserializer.int64(buffer);
    data.imu_time_stamp = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'j2_mono/canFrame';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2ba765f4fa3356008013509c4cc271e6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int64 vehSpeed # km/h 
    int64 vehSpeed_time_stamp
    int64 wheelAngle # rad
    int64 wheelAngle_time_stamp
    int64 gearType  # GEAR_TYPE_N = 0, GEAR_TYPE_P = 1, GEAR_TYPE_R = 2, GEAR_TYPE_D = 3
    int64 gearType_time_stamp
    int64 turnSignal # TURN_SIGNAL_NONE = 0, TURN_SIGNAL_LEFT = 1, TURN_SIGNAL_RIGHT = 2, TURN_SIGNAL_DOUBLE = 3
    int64 turnSignal_time_stamp
    float32 acc # m/s^2
    float32 yaw
    float32 yaw_rate # rad/s
    int64 imu_time_stamp
    
    `;
  }

};

module.exports = canFrame;
