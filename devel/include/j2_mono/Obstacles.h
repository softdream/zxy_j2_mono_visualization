// Generated by gencpp from file j2_mono/Obstacles.msg
// DO NOT EDIT!


#ifndef J2_MONO_MESSAGE_OBSTACLES_H
#define J2_MONO_MESSAGE_OBSTACLES_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <j2_mono/Obstacle.h>

namespace j2_mono
{
template <class ContainerAllocator>
struct Obstacles_
{
  typedef Obstacles_<ContainerAllocator> Type;

  Obstacles_()
    : cam_id(0)
    , obstacle()
    , conf_scale(0.0)  {
    }
  Obstacles_(const ContainerAllocator& _alloc)
    : cam_id(0)
    , obstacle(_alloc)
    , conf_scale(0.0)  {
  (void)_alloc;
    }



   typedef int32_t _cam_id_type;
  _cam_id_type cam_id;

   typedef std::vector< ::j2_mono::Obstacle_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::j2_mono::Obstacle_<ContainerAllocator> >::other >  _obstacle_type;
  _obstacle_type obstacle;

   typedef float _conf_scale_type;
  _conf_scale_type conf_scale;




  typedef boost::shared_ptr< ::j2_mono::Obstacles_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::j2_mono::Obstacles_<ContainerAllocator> const> ConstPtr;

}; // struct Obstacles_

typedef ::j2_mono::Obstacles_<std::allocator<void> > Obstacles;

typedef boost::shared_ptr< ::j2_mono::Obstacles > ObstaclesPtr;
typedef boost::shared_ptr< ::j2_mono::Obstacles const> ObstaclesConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::j2_mono::Obstacles_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::j2_mono::Obstacles_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace j2_mono

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': False}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'j2_mono': ['/home/riki/AdasWork/catkin_ws/src/j2_mono/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::j2_mono::Obstacles_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::j2_mono::Obstacles_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::j2_mono::Obstacles_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::j2_mono::Obstacles_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::j2_mono::Obstacles_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::j2_mono::Obstacles_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::j2_mono::Obstacles_<ContainerAllocator> >
{
  static const char* value()
  {
    return "b666125b67b55ba2c6622f953580c9ac";
  }

  static const char* value(const ::j2_mono::Obstacles_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xb666125b67b55ba2ULL;
  static const uint64_t static_value2 = 0xc6622f953580c9acULL;
};

template<class ContainerAllocator>
struct DataType< ::j2_mono::Obstacles_<ContainerAllocator> >
{
  static const char* value()
  {
    return "j2_mono/Obstacles";
  }

  static const char* value(const ::j2_mono::Obstacles_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::j2_mono::Obstacles_<ContainerAllocator> >
{
  static const char* value()
  {
    return "int32 cam_id\n\
Obstacle[] obstacle\n\
float32 conf_scale # default 0.1\n\
\n\
================================================================================\n\
MSG: j2_mono/Obstacle\n\
int32 id\n\
int32 type #ObstacleType_VehicleRear=0, ObstacleType_VehicleFull=1, ObstacleType_Pedestrian=2, ObstacleType_TrafficSign=3, ObstacleType_TrafficLight=4, ObstacleType_ParkingSlot=5, ObstacleType_RoadSign=6, ObstacleType_Cyclist=18\n\
int32 conf\n\
int32 life_time\n\
int32 age\n\
ImageSpaceInfo img_info\n\
WorldSpaceInfo world_info\n\
int32[] property #\n\
string[] property_name\n\
int32[] property_type\n\
float32[] property_conf\n\
int8[] tracking_fmap\n\
\n\
\n\
================================================================================\n\
MSG: j2_mono/ImageSpaceInfo\n\
Rect rect\n\
Box3D box\n\
Polygon poly\n\
float32 sigma_width\n\
float32 sigma_height\n\
float32 sigma_x\n\
float32 sigma_y\n\
\n\
================================================================================\n\
MSG: j2_mono/Rect\n\
float32 left\n\
float32 top\n\
float32 right\n\
float32 bottom\n\
\n\
================================================================================\n\
MSG: j2_mono/Box3D\n\
Point lower_lt\n\
Point lower_lb\n\
Point lower_rb\n\
Point lower_rt\n\
Point upper_lt\n\
Point upper_lb\n\
Point upper_rb\n\
Point upper_rt\n\
float32 conf\n\
\n\
================================================================================\n\
MSG: j2_mono/Point\n\
float32 x\n\
float32 y\n\
float32 z\n\
\n\
================================================================================\n\
MSG: j2_mono/Polygon\n\
Point[] pts\n\
\n\
================================================================================\n\
MSG: j2_mono/WorldSpaceInfo\n\
float32 yaw #rad\n\
Velocity vel #m/s relative velocity\n\
float32 length # real length of the obstacle in world coordinate\n\
float32 width # real width\n\
float32 height # real height\n\
Polygon poly # \n\
Point position # real position of the obstacle in world coordinate\n\
int32 traversable\n\
float32 hmw\n\
float32 ttc\n\
int32 curr_lane\n\
float32 sigma_yaw\n\
float32[] sigma_vel\n\
float32 sigma_width\n\
float32 sigma_height\n\
float32[] sigma_position\n\
\n\
\n\
================================================================================\n\
MSG: j2_mono/Velocity\n\
float32 vx\n\
float32 vy\n\
float32 vz\n\
";
  }

  static const char* value(const ::j2_mono::Obstacles_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::j2_mono::Obstacles_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.cam_id);
      stream.next(m.obstacle);
      stream.next(m.conf_scale);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct Obstacles_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::j2_mono::Obstacles_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::j2_mono::Obstacles_<ContainerAllocator>& v)
  {
    s << indent << "cam_id: ";
    Printer<int32_t>::stream(s, indent + "  ", v.cam_id);
    s << indent << "obstacle[]" << std::endl;
    for (size_t i = 0; i < v.obstacle.size(); ++i)
    {
      s << indent << "  obstacle[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::j2_mono::Obstacle_<ContainerAllocator> >::stream(s, indent + "    ", v.obstacle[i]);
    }
    s << indent << "conf_scale: ";
    Printer<float>::stream(s, indent + "  ", v.conf_scale);
  }
};

} // namespace message_operations
} // namespace ros

#endif // J2_MONO_MESSAGE_OBSTACLES_H
