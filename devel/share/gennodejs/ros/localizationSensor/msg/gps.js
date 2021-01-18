// Auto-generated. Do not edit!

// (in-package localizationSensor.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class gps {
  constructor() {
    this.sensorSerial = '';
    this.timeSec = 0;
    this.timeUsec = 0;
    this.oritention = 0;
    this.longitude = 0;
    this.latitude = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type gps
    // Serialize message field [sensorSerial]
    bufferInfo = _serializer.string(obj.sensorSerial, bufferInfo);
    // Serialize message field [timeSec]
    bufferInfo = _serializer.int64(obj.timeSec, bufferInfo);
    // Serialize message field [timeUsec]
    bufferInfo = _serializer.int64(obj.timeUsec, bufferInfo);
    // Serialize message field [oritention]
    bufferInfo = _serializer.int64(obj.oritention, bufferInfo);
    // Serialize message field [longitude]
    bufferInfo = _serializer.int64(obj.longitude, bufferInfo);
    // Serialize message field [latitude]
    bufferInfo = _serializer.int64(obj.latitude, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type gps
    let tmp;
    let len;
    let data = new gps();
    // Deserialize message field [sensorSerial]
    tmp = _deserializer.string(buffer);
    data.sensorSerial = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timeSec]
    tmp = _deserializer.int64(buffer);
    data.timeSec = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timeUsec]
    tmp = _deserializer.int64(buffer);
    data.timeUsec = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [oritention]
    tmp = _deserializer.int64(buffer);
    data.oritention = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [longitude]
    tmp = _deserializer.int64(buffer);
    data.longitude = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [latitude]
    tmp = _deserializer.int64(buffer);
    data.latitude = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'localizationSensor/gps';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b2d375cb43251e9d31a674ffc6746d6f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #Header header
    string sensorSerial
    int64 timeSec
    int64 timeUsec
    int64 oritention
    int64 longitude
    int64 latitude
    
    `;
  }

};

module.exports = gps;
