// Generated by gencpp from file novatel_gps_msgs/Trackstat.msg
// DO NOT EDIT!


#ifndef NOVATEL_GPS_MSGS_MESSAGE_TRACKSTAT_H
#define NOVATEL_GPS_MSGS_MESSAGE_TRACKSTAT_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>
#include <novatel_gps_msgs/TrackstatChannel.h>

namespace novatel_gps_msgs
{
template <class ContainerAllocator>
struct Trackstat_
{
  typedef Trackstat_<ContainerAllocator> Type;

  Trackstat_()
    : header()
    , solution_status()
    , position_type()
    , cutoff(0.0)
    , channels()  {
    }
  Trackstat_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , solution_status(_alloc)
    , position_type(_alloc)
    , cutoff(0.0)
    , channels(_alloc)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _solution_status_type;
  _solution_status_type solution_status;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _position_type_type;
  _position_type_type position_type;

   typedef float _cutoff_type;
  _cutoff_type cutoff;

   typedef std::vector< ::novatel_gps_msgs::TrackstatChannel_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::novatel_gps_msgs::TrackstatChannel_<ContainerAllocator> >::other >  _channels_type;
  _channels_type channels;





  typedef boost::shared_ptr< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> const> ConstPtr;

}; // struct Trackstat_

typedef ::novatel_gps_msgs::Trackstat_<std::allocator<void> > Trackstat;

typedef boost::shared_ptr< ::novatel_gps_msgs::Trackstat > TrackstatPtr;
typedef boost::shared_ptr< ::novatel_gps_msgs::Trackstat const> TrackstatConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::novatel_gps_msgs::Trackstat_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace novatel_gps_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': True}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'novatel_gps_msgs': ['/home/turtle1/turtle_drive/src/novatel_gps_driver/novatel_gps_msgs/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
{
  static const char* value()
  {
    return "10e52c1ea54daca4de3c8cdda3a79817";
  }

  static const char* value(const ::novatel_gps_msgs::Trackstat_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x10e52c1ea54daca4ULL;
  static const uint64_t static_value2 = 0xde3c8cdda3a79817ULL;
};

template<class ContainerAllocator>
struct DataType< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
{
  static const char* value()
  {
    return "novatel_gps_msgs/Trackstat";
  }

  static const char* value(const ::novatel_gps_msgs::Trackstat_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
{
  static const char* value()
  {
    return "# Channel tracking status information for each of the receiver parallel channels\n\
\n\
Header header\n\
\n\
string solution_status\n\
string position_type\n\
\n\
# Tracking elevation cutff-off angle\n\
float32 cutoff\n\
\n\
TrackstatChannel[] channels\n\
================================================================================\n\
MSG: std_msgs/Header\n\
# Standard metadata for higher-level stamped data types.\n\
# This is generally used to communicate timestamped data \n\
# in a particular coordinate frame.\n\
# \n\
# sequence ID: consecutively increasing ID \n\
uint32 seq\n\
#Two-integer timestamp that is expressed as:\n\
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')\n\
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')\n\
# time-handling sugar is provided by the client library\n\
time stamp\n\
#Frame this data is associated with\n\
# 0: no frame\n\
# 1: global frame\n\
string frame_id\n\
\n\
================================================================================\n\
MSG: novatel_gps_msgs/TrackstatChannel\n\
# A submessage of Trackstat that contains all of the data about a single hardware channel\n\
\n\
# Satellite PRN number\n\
int16 prn\n\
\n\
# GLONASS Frequency +7\n\
int16 glofreq\n\
\n\
# Channel tracking status\n\
uint32 ch_tr_status\n\
\n\
# Pseudorange (m)\n\
float64 psr\n\
\n\
# Doppler frequency (Hz)\n\
float32 doppler\n\
\n\
# Carrier to noise density ratio (dB-Hz)\n\
float32 c_no\n\
\n\
# Number of seconds of continuous tracking (no cycle slips)\n\
float32 locktime\n\
\n\
# Pseudorange residual from pseudorange filter (m)\n\
float32 psr_res\n\
\n\
# Range reject code from pseudorange filter\n\
string reject\n\
\n\
# Pseudorange filter weighting\n\
float32 psr_weight\n\
";
  }

  static const char* value(const ::novatel_gps_msgs::Trackstat_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.solution_status);
      stream.next(m.position_type);
      stream.next(m.cutoff);
      stream.next(m.channels);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct Trackstat_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::novatel_gps_msgs::Trackstat_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::novatel_gps_msgs::Trackstat_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "solution_status: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.solution_status);
    s << indent << "position_type: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.position_type);
    s << indent << "cutoff: ";
    Printer<float>::stream(s, indent + "  ", v.cutoff);
    s << indent << "channels[]" << std::endl;
    for (size_t i = 0; i < v.channels.size(); ++i)
    {
      s << indent << "  channels[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::novatel_gps_msgs::TrackstatChannel_<ContainerAllocator> >::stream(s, indent + "    ", v.channels[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // NOVATEL_GPS_MSGS_MESSAGE_TRACKSTAT_H
