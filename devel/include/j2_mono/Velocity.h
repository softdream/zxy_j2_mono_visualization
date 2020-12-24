// Generated by gencpp from file j2_mono/Velocity.msg
// DO NOT EDIT!


#ifndef J2_MONO_MESSAGE_VELOCITY_H
#define J2_MONO_MESSAGE_VELOCITY_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace j2_mono
{
template <class ContainerAllocator>
struct Velocity_
{
  typedef Velocity_<ContainerAllocator> Type;

  Velocity_()
    : vx(0.0)
    , vy(0.0)
    , vz(0.0)  {
    }
  Velocity_(const ContainerAllocator& _alloc)
    : vx(0.0)
    , vy(0.0)
    , vz(0.0)  {
  (void)_alloc;
    }



   typedef float _vx_type;
  _vx_type vx;

   typedef float _vy_type;
  _vy_type vy;

   typedef float _vz_type;
  _vz_type vz;




  typedef boost::shared_ptr< ::j2_mono::Velocity_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::j2_mono::Velocity_<ContainerAllocator> const> ConstPtr;

}; // struct Velocity_

typedef ::j2_mono::Velocity_<std::allocator<void> > Velocity;

typedef boost::shared_ptr< ::j2_mono::Velocity > VelocityPtr;
typedef boost::shared_ptr< ::j2_mono::Velocity const> VelocityConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::j2_mono::Velocity_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::j2_mono::Velocity_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace j2_mono

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'j2_mono': ['/home/riki/AdasWork/catkin_ws/src/j2_mono/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::j2_mono::Velocity_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::j2_mono::Velocity_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::j2_mono::Velocity_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::j2_mono::Velocity_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::j2_mono::Velocity_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::j2_mono::Velocity_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::j2_mono::Velocity_<ContainerAllocator> >
{
  static const char* value()
  {
    return "ac272c003bd99cf28cdbf4d88ce75837";
  }

  static const char* value(const ::j2_mono::Velocity_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xac272c003bd99cf2ULL;
  static const uint64_t static_value2 = 0x8cdbf4d88ce75837ULL;
};

template<class ContainerAllocator>
struct DataType< ::j2_mono::Velocity_<ContainerAllocator> >
{
  static const char* value()
  {
    return "j2_mono/Velocity";
  }

  static const char* value(const ::j2_mono::Velocity_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::j2_mono::Velocity_<ContainerAllocator> >
{
  static const char* value()
  {
    return "float32 vx\n\
float32 vy\n\
float32 vz\n\
";
  }

  static const char* value(const ::j2_mono::Velocity_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::j2_mono::Velocity_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.vx);
      stream.next(m.vy);
      stream.next(m.vz);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct Velocity_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::j2_mono::Velocity_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::j2_mono::Velocity_<ContainerAllocator>& v)
  {
    s << indent << "vx: ";
    Printer<float>::stream(s, indent + "  ", v.vx);
    s << indent << "vy: ";
    Printer<float>::stream(s, indent + "  ", v.vy);
    s << indent << "vz: ";
    Printer<float>::stream(s, indent + "  ", v.vz);
  }
};

} // namespace message_operations
} // namespace ros

#endif // J2_MONO_MESSAGE_VELOCITY_H
