// Auto-generated. Do not edit!

// (in-package novatel_gps_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let NovatelMessageHeader = require('./NovatelMessageHeader.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class NovatelVelocity {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.novatel_msg_header = null;
      this.solution_status = null;
      this.velocity_type = null;
      this.latency = null;
      this.age = null;
      this.horizontal_speed = null;
      this.track_ground = null;
      this.vertical_speed = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('novatel_msg_header')) {
        this.novatel_msg_header = initObj.novatel_msg_header
      }
      else {
        this.novatel_msg_header = new NovatelMessageHeader();
      }
      if (initObj.hasOwnProperty('solution_status')) {
        this.solution_status = initObj.solution_status
      }
      else {
        this.solution_status = '';
      }
      if (initObj.hasOwnProperty('velocity_type')) {
        this.velocity_type = initObj.velocity_type
      }
      else {
        this.velocity_type = '';
      }
      if (initObj.hasOwnProperty('latency')) {
        this.latency = initObj.latency
      }
      else {
        this.latency = 0.0;
      }
      if (initObj.hasOwnProperty('age')) {
        this.age = initObj.age
      }
      else {
        this.age = 0.0;
      }
      if (initObj.hasOwnProperty('horizontal_speed')) {
        this.horizontal_speed = initObj.horizontal_speed
      }
      else {
        this.horizontal_speed = 0.0;
      }
      if (initObj.hasOwnProperty('track_ground')) {
        this.track_ground = initObj.track_ground
      }
      else {
        this.track_ground = 0.0;
      }
      if (initObj.hasOwnProperty('vertical_speed')) {
        this.vertical_speed = initObj.vertical_speed
      }
      else {
        this.vertical_speed = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type NovatelVelocity
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [novatel_msg_header]
    bufferOffset = NovatelMessageHeader.serialize(obj.novatel_msg_header, buffer, bufferOffset);
    // Serialize message field [solution_status]
    bufferOffset = _serializer.string(obj.solution_status, buffer, bufferOffset);
    // Serialize message field [velocity_type]
    bufferOffset = _serializer.string(obj.velocity_type, buffer, bufferOffset);
    // Serialize message field [latency]
    bufferOffset = _serializer.float32(obj.latency, buffer, bufferOffset);
    // Serialize message field [age]
    bufferOffset = _serializer.float32(obj.age, buffer, bufferOffset);
    // Serialize message field [horizontal_speed]
    bufferOffset = _serializer.float64(obj.horizontal_speed, buffer, bufferOffset);
    // Serialize message field [track_ground]
    bufferOffset = _serializer.float64(obj.track_ground, buffer, bufferOffset);
    // Serialize message field [vertical_speed]
    bufferOffset = _serializer.float64(obj.vertical_speed, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type NovatelVelocity
    let len;
    let data = new NovatelVelocity(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [novatel_msg_header]
    data.novatel_msg_header = NovatelMessageHeader.deserialize(buffer, bufferOffset);
    // Deserialize message field [solution_status]
    data.solution_status = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [velocity_type]
    data.velocity_type = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [latency]
    data.latency = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [age]
    data.age = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [horizontal_speed]
    data.horizontal_speed = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [track_ground]
    data.track_ground = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vertical_speed]
    data.vertical_speed = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += NovatelMessageHeader.getMessageSize(object.novatel_msg_header);
    length += object.solution_status.length;
    length += object.velocity_type.length;
    return length + 40;
  }

  static datatype() {
    // Returns string type for a message object
    return 'novatel_gps_msgs/NovatelVelocity';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a8fb7d9232aaf68f98caa2b4cda2597b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Parsed Best Position or Omnistar XP or HP pos data from Novatel OEM6 receiver
    Header header
    
    NovatelMessageHeader novatel_msg_header
    
    string solution_status
    string velocity_type
    
    # A measure of the latency in the velocity time tag in seconds.
    float32 latency
    
    # Differential age in seconds
    float32 age
    
    # Horizontal speed over ground, meters/second
    float64 horizontal_speed
    
    # Direction of motion over ground with respect to true North, degrees
    float64 track_ground
    
    # Vertical speed, where positive values correspond to increasing altitude, meters/second
    float64 vertical_speed
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: novatel_gps_msgs/NovatelMessageHeader
    # Novatel Message Header
    
    string message_name
    string port
    uint32 sequence_num
    float32 percent_idle_time
    string gps_time_status
    uint32 gps_week_num
    float64 gps_seconds
    
    # Bit       Mask      Description
    #  0     0x00000001   Error flag (Bit = 0: No Error, Bit = 1: Error)
    #  1     0x00000002   Temperature Status (0: Within Spec, 1: Warning)
    #  2     0x00000004   Voltage Supply Status (0: OK, 1: Warning)
    #  3     0x00000008   Antenna Power Status (0: Powered, 1: Not Powered)
    #  4     0x00000010   <Reserved>
    #  5     0x00000020   Antenna open flag (0: OK, 1: Open)
    #  6     0x00000040   Antenna shorted flag (0: OK, 1: Shorted)
    #  7     0x00000080   CPU overload flag
    #  8     0x00000100   COM1 buffer overrun flag (0: No overrun, 1: Overrun)
    #  9     0x00000200   COM2 buffer overrun flag (0: No overrun, 1: Overrun)
    #  10    0x00000400   COM3 buffer overrun flag (0: No overrun, 1: Overrun)
    #  11    0x00000800   USB buffer overrun flag (0: No overrun, 1: Overrun)
    #  12    0x00001000   <Reserved>
    #  13    0x00002000   <Reserved>
    #  14    0x00004000   <Reserved>
    #  15    0x00008000   RF1 AGC Status (0: OK, 1: Bad)
    #  16    0x00010000   <Reserverd>
    #  17    0x00020000   RF2 AGC status (0: OK, 1: Bad)
    #  18    0x00040000   Almanac flag/UTC known (0: Valid, 1: Invalid)
    #  19    0x00080000   Position solution flag (0: Valid, 1: Invalid)
    #  20    0x00100000   Position fixed flag (0: Not fixed, 1: Fixed)
    #  21    0x00200000   Clock steering status (0: Enabled, 1: Disabled)
    #  22    0x00400000   Clock model flag (0: Valid, 1: Invalid)
    #  23    0x00800000   OEMV external oscillator flag (0: Disabled, 1: Enabled)
    #  24    0x01000000   Software resource (0: OK, 1: Warning)
    #  25    0x02000000   <Reserved>
    #  26    0x04000000   <Reserved>
    #  27    0x08000000   <Reserved>
    #  28    0x10000000   <Reserved>
    #  29    0x20000000   Auxiliary 3 status event flag (0: No event, 1: Event)
    #  30    0x40000000   Auxiliary 2 status event flag (0: No event, 1: Event)
    #  31    0x80000000   Auxiliary 1 status event flag (0: No event, 1: Event)
    NovatelReceiverStatus receiver_status
    
    # Receiver build number (0-65535)
    uint32 receiver_software_version
    ================================================================================
    MSG: novatel_gps_msgs/NovatelReceiverStatus
    # From the original Novatel receiver status message bitfield
    #  0     0x00000001   Error flag (Bit = 0: No Error, Bit = 1: Error)
    #  1     0x00000002   Temperature Status (0: Within Spec, 1: Warning)
    #  2     0x00000004   Voltage Supply Status (0: OK, 1: Warning)
    #  3     0x00000008   Antenna Power Status (0: Powered, 1: Not Powered)
    #  4     0x00000010   <Reserved>
    #  5     0x00000020   Antenna open flag (0: OK, 1: Open)
    #  6     0x00000040   Antenna shorted flag (0: OK, 1: Shorted)
    #  7     0x00000080   CPU overload flag
    #  8     0x00000100   COM1 buffer overrun flag (0: No overrun, 1: Overrun)
    #  9     0x00000200   COM2 buffer overrun flag (0: No overrun, 1: Overrun)
    #  10    0x00000400   COM3 buffer overrun flag (0: No overrun, 1: Overrun)
    #  11    0x00000800   USB buffer overrun flag (0: No overrun, 1: Overrun)
    #  12    0x00001000   <Reserved>
    #  13    0x00002000   <Reserved>
    #  14    0x00004000   <Reserved>
    #  15    0x00008000   RF1 AGC Status (0: OK, 1: Bad)
    #  16    0x00010000   <Reserverd>
    #  17    0x00020000   RF2 AGC status (0: OK, 1: Bad)
    #  18    0x00040000   Almanac flag/UTC known (0: Valid, 1: Invalid)
    #  19    0x00080000   Position solution flag (0: Valid, 1: Invalid)
    #  20    0x00100000   Position fixed flag (0: Not fixed, 1: Fixed)
    #  21    0x00200000   Clock steering status (0: Enabled, 1: Disabled)
    #  22    0x00400000   Clock model flag (0: Valid, 1: Invalid)
    #  23    0x00800000   OEMV external oscillator flag (0: Disabled, 1: Enabled)
    #  24    0x01000000   Software resource (0: OK, 1: Warning)
    #  25    0x02000000   <Reserved>
    #  26    0x04000000   <Reserved>
    #  27    0x08000000   <Reserved>
    #  28    0x10000000   <Reserved>
    #  29    0x20000000   Auxiliary 3 status event flag (0: No event, 1: Event)
    #  30    0x40000000   Auxiliary 2 status event flag (0: No event, 1: Event)
    #  31    0x80000000   Auxiliary 1 status event flag (0: No event, 1: Event)
    uint32 original_status_code
    bool error_flag
    bool temperature_flag
    bool voltage_supply_flag
    bool antenna_powered
    bool antenna_is_open
    bool antenna_is_shorted
    bool cpu_overload_flag
    bool com1_buffer_overrun
    bool com2_buffer_overrun
    bool com3_buffer_overrun
    bool usb_buffer_overrun
    bool rf1_agc_flag
    bool rf2_agc_flag
    bool almanac_flag
    bool position_solution_flag
    bool position_fixed_flag
    bool clock_steering_status_enabled
    bool clock_model_flag
    bool oemv_external_oscillator_flag
    bool software_resource_flag
    bool aux1_status_event_flag
    bool aux2_status_event_flag
    bool aux3_status_event_flag
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new NovatelVelocity(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.novatel_msg_header !== undefined) {
      resolved.novatel_msg_header = NovatelMessageHeader.Resolve(msg.novatel_msg_header)
    }
    else {
      resolved.novatel_msg_header = new NovatelMessageHeader()
    }

    if (msg.solution_status !== undefined) {
      resolved.solution_status = msg.solution_status;
    }
    else {
      resolved.solution_status = ''
    }

    if (msg.velocity_type !== undefined) {
      resolved.velocity_type = msg.velocity_type;
    }
    else {
      resolved.velocity_type = ''
    }

    if (msg.latency !== undefined) {
      resolved.latency = msg.latency;
    }
    else {
      resolved.latency = 0.0
    }

    if (msg.age !== undefined) {
      resolved.age = msg.age;
    }
    else {
      resolved.age = 0.0
    }

    if (msg.horizontal_speed !== undefined) {
      resolved.horizontal_speed = msg.horizontal_speed;
    }
    else {
      resolved.horizontal_speed = 0.0
    }

    if (msg.track_ground !== undefined) {
      resolved.track_ground = msg.track_ground;
    }
    else {
      resolved.track_ground = 0.0
    }

    if (msg.vertical_speed !== undefined) {
      resolved.vertical_speed = msg.vertical_speed;
    }
    else {
      resolved.vertical_speed = 0.0
    }

    return resolved;
    }
};

module.exports = NovatelVelocity;
