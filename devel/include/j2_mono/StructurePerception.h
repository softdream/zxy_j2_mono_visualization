// Generated by gencpp from file j2_mono/StructurePerception.msg
// DO NOT EDIT!


#ifndef J2_MONO_MESSAGE_STRUCTUREPERCEPTION_H
#define J2_MONO_MESSAGE_STRUCTUREPERCEPTION_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <j2_mono/Obstacles.h>
#include <j2_mono/Lines.h>
#include <j2_mono/Image.h>
#include <j2_mono/Image.h>
#include <j2_mono/FreeSpacePoints.h>

namespace j2_mono
{
template <class ContainerAllocator>
struct StructurePerception_
{
  typedef StructurePerception_<ContainerAllocator> Type;

  StructurePerception_()
    : obstacles()
    , lines()
    , parsing()
    , depth()
    , scan_pts()  {
    }
  StructurePerception_(const ContainerAllocator& _alloc)
    : obstacles(_alloc)
    , lines(_alloc)
    , parsing(_alloc)
    , depth(_alloc)
    , scan_pts(_alloc)  {
  (void)_alloc;
    }



   typedef std::vector< ::j2_mono::Obstacles_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::j2_mono::Obstacles_<ContainerAllocator> >::other >  _obstacles_type;
  _obstacles_type obstacles;

   typedef std::vector< ::j2_mono::Lines_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::j2_mono::Lines_<ContainerAllocator> >::other >  _lines_type;
  _lines_type lines;

   typedef std::vector< ::j2_mono::Image_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::j2_mono::Image_<ContainerAllocator> >::other >  _parsing_type;
  _parsing_type parsing;

   typedef std::vector< ::j2_mono::Image_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::j2_mono::Image_<ContainerAllocator> >::other >  _depth_type;
  _depth_type depth;

   typedef std::vector< ::j2_mono::FreeSpacePoints_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::j2_mono::FreeSpacePoints_<ContainerAllocator> >::other >  _scan_pts_type;
  _scan_pts_type scan_pts;




  typedef boost::shared_ptr< ::j2_mono::StructurePerception_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::j2_mono::StructurePerception_<ContainerAllocator> const> ConstPtr;

}; // struct StructurePerception_

typedef ::j2_mono::StructurePerception_<std::allocator<void> > StructurePerception;

typedef boost::shared_ptr< ::j2_mono::StructurePerception > StructurePerceptionPtr;
typedef boost::shared_ptr< ::j2_mono::StructurePerception const> StructurePerceptionConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::j2_mono::StructurePerception_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::j2_mono::StructurePerception_<ContainerAllocator> >::stream(s, "", v);
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
struct IsFixedSize< ::j2_mono::StructurePerception_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::j2_mono::StructurePerception_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::j2_mono::StructurePerception_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::j2_mono::StructurePerception_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::j2_mono::StructurePerception_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::j2_mono::StructurePerception_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::j2_mono::StructurePerception_<ContainerAllocator> >
{
  static const char* value()
  {
    return "3d9b9bfdc995a7d79a16758bb8437266";
  }

  static const char* value(const ::j2_mono::StructurePerception_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x3d9b9bfdc995a7d7ULL;
  static const uint64_t static_value2 = 0x9a16758bb8437266ULL;
};

template<class ContainerAllocator>
struct DataType< ::j2_mono::StructurePerception_<ContainerAllocator> >
{
  static const char* value()
  {
    return "j2_mono/StructurePerception";
  }

  static const char* value(const ::j2_mono::StructurePerception_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::j2_mono::StructurePerception_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Obstacles[] obstacles\n\
Lines[] lines\n\
Image[] parsing\n\
Image[] depth\n\
FreeSpacePoints[] scan_pts\n\
#ParsingSetting[] parsing_settingsObstacles obstacles\n\
\n\
================================================================================\n\
MSG: j2_mono/Obstacles\n\
int32 cam_id\n\
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
\n\
================================================================================\n\
MSG: j2_mono/Lines\n\
uint32 cam_id\n\
Line[] lines\n\
\n\
================================================================================\n\
MSG: j2_mono/Line\n\
int32 id\n\
int32 life_time\n\
float32[] coeffs\n\
Point[] end_points\n\
int32 type #LINE_DOUBLE=512, LINE_DASH=1024, LINE_SOLID=2048\n\
int32 source #LINE_PERCEPTION=2097152, LINE_TRACKING=4194304\n\
float32 dist_to_front_wheel\n\
float32 width\n\
int32 type_sibling\n\
float32 conf\n\
float32[] sigma_coeffs\n\
\n\
\n\
================================================================================\n\
MSG: j2_mono/Image\n\
int32 width\n\
int32 height\n\
int32 channel\n\
int64 time_stamp\n\
int32 send_mode\n\
int32 format\n\
int32 index\n\
int32 count\n\
int32 depth\n\
int32 align\n\
int32 image_counter\n\
\n\
================================================================================\n\
MSG: j2_mono/FreeSpacePoints\n\
int32[] property\n\
int32 cam_id\n\
Point[] pts_vcs\n\
Point[] pts_img\n\
";
  }

  static const char* value(const ::j2_mono::StructurePerception_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::j2_mono::StructurePerception_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.obstacles);
      stream.next(m.lines);
      stream.next(m.parsing);
      stream.next(m.depth);
      stream.next(m.scan_pts);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct StructurePerception_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::j2_mono::StructurePerception_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::j2_mono::StructurePerception_<ContainerAllocator>& v)
  {
    s << indent << "obstacles[]" << std::endl;
    for (size_t i = 0; i < v.obstacles.size(); ++i)
    {
      s << indent << "  obstacles[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::j2_mono::Obstacles_<ContainerAllocator> >::stream(s, indent + "    ", v.obstacles[i]);
    }
    s << indent << "lines[]" << std::endl;
    for (size_t i = 0; i < v.lines.size(); ++i)
    {
      s << indent << "  lines[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::j2_mono::Lines_<ContainerAllocator> >::stream(s, indent + "    ", v.lines[i]);
    }
    s << indent << "parsing[]" << std::endl;
    for (size_t i = 0; i < v.parsing.size(); ++i)
    {
      s << indent << "  parsing[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::j2_mono::Image_<ContainerAllocator> >::stream(s, indent + "    ", v.parsing[i]);
    }
    s << indent << "depth[]" << std::endl;
    for (size_t i = 0; i < v.depth.size(); ++i)
    {
      s << indent << "  depth[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::j2_mono::Image_<ContainerAllocator> >::stream(s, indent + "    ", v.depth[i]);
    }
    s << indent << "scan_pts[]" << std::endl;
    for (size_t i = 0; i < v.scan_pts.size(); ++i)
    {
      s << indent << "  scan_pts[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::j2_mono::FreeSpacePoints_<ContainerAllocator> >::stream(s, indent + "    ", v.scan_pts[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // J2_MONO_MESSAGE_STRUCTUREPERCEPTION_H
