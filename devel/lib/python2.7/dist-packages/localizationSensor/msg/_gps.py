# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from localizationSensor/gps.msg. Do not edit."""
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct


class gps(genpy.Message):
  _md5sum = "b2d375cb43251e9d31a674ffc6746d6f"
  _type = "localizationSensor/gps"
  _has_header = False #flag to mark the presence of a Header object
  _full_text = """#Header header
string sensorSerial
int64 timeSec
int64 timeUsec
int64 oritention
int64 longitude
int64 latitude
"""
  __slots__ = ['sensorSerial','timeSec','timeUsec','oritention','longitude','latitude']
  _slot_types = ['string','int64','int64','int64','int64','int64']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       sensorSerial,timeSec,timeUsec,oritention,longitude,latitude

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(gps, self).__init__(*args, **kwds)
      #message fields cannot be None, assign default values for those that are
      if self.sensorSerial is None:
        self.sensorSerial = ''
      if self.timeSec is None:
        self.timeSec = 0
      if self.timeUsec is None:
        self.timeUsec = 0
      if self.oritention is None:
        self.oritention = 0
      if self.longitude is None:
        self.longitude = 0
      if self.latitude is None:
        self.latitude = 0
    else:
      self.sensorSerial = ''
      self.timeSec = 0
      self.timeUsec = 0
      self.oritention = 0
      self.longitude = 0
      self.latitude = 0

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self.sensorSerial
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.pack('<I%ss'%length, length, _x))
      _x = self
      buff.write(_get_struct_5q().pack(_x.timeSec, _x.timeUsec, _x.oritention, _x.longitude, _x.latitude))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    try:
      end = 0
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.sensorSerial = str[start:end].decode('utf-8')
      else:
        self.sensorSerial = str[start:end]
      _x = self
      start = end
      end += 40
      (_x.timeSec, _x.timeUsec, _x.oritention, _x.longitude, _x.latitude,) = _get_struct_5q().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self.sensorSerial
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.pack('<I%ss'%length, length, _x))
      _x = self
      buff.write(_get_struct_5q().pack(_x.timeSec, _x.timeUsec, _x.oritention, _x.longitude, _x.latitude))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    try:
      end = 0
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.sensorSerial = str[start:end].decode('utf-8')
      else:
        self.sensorSerial = str[start:end]
      _x = self
      start = end
      end += 40
      (_x.timeSec, _x.timeUsec, _x.oritention, _x.longitude, _x.latitude,) = _get_struct_5q().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_5q = None
def _get_struct_5q():
    global _struct_5q
    if _struct_5q is None:
        _struct_5q = struct.Struct("<5q")
    return _struct_5q
