# generated from genmsg/cmake/pkg-genmsg.cmake.em

message(STATUS "localizationSensor: 1 messages, 0 services")

set(MSG_I_FLAGS "-IlocalizationSensor:/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg;-Istd_msgs:/opt/ros/kinetic/share/std_msgs/cmake/../msg")

# Find all generators
find_package(gencpp REQUIRED)
find_package(geneus REQUIRED)
find_package(genlisp REQUIRED)
find_package(gennodejs REQUIRED)
find_package(genpy REQUIRED)

add_custom_target(localizationSensor_generate_messages ALL)

# verify that message/service dependencies have not changed since configure



get_filename_component(_filename "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg" NAME_WE)
add_custom_target(_localizationSensor_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "localizationSensor" "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg" ""
)

#
#  langs = gencpp;geneus;genlisp;gennodejs;genpy
#

### Section generating for lang: gencpp
### Generating Messages
_generate_msg_cpp(localizationSensor
  "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/localizationSensor
)

### Generating Services

### Generating Module File
_generate_module_cpp(localizationSensor
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/localizationSensor
  "${ALL_GEN_OUTPUT_FILES_cpp}"
)

add_custom_target(localizationSensor_generate_messages_cpp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_cpp}
)
add_dependencies(localizationSensor_generate_messages localizationSensor_generate_messages_cpp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg" NAME_WE)
add_dependencies(localizationSensor_generate_messages_cpp _localizationSensor_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(localizationSensor_gencpp)
add_dependencies(localizationSensor_gencpp localizationSensor_generate_messages_cpp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS localizationSensor_generate_messages_cpp)

### Section generating for lang: geneus
### Generating Messages
_generate_msg_eus(localizationSensor
  "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/localizationSensor
)

### Generating Services

### Generating Module File
_generate_module_eus(localizationSensor
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/localizationSensor
  "${ALL_GEN_OUTPUT_FILES_eus}"
)

add_custom_target(localizationSensor_generate_messages_eus
  DEPENDS ${ALL_GEN_OUTPUT_FILES_eus}
)
add_dependencies(localizationSensor_generate_messages localizationSensor_generate_messages_eus)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg" NAME_WE)
add_dependencies(localizationSensor_generate_messages_eus _localizationSensor_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(localizationSensor_geneus)
add_dependencies(localizationSensor_geneus localizationSensor_generate_messages_eus)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS localizationSensor_generate_messages_eus)

### Section generating for lang: genlisp
### Generating Messages
_generate_msg_lisp(localizationSensor
  "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/localizationSensor
)

### Generating Services

### Generating Module File
_generate_module_lisp(localizationSensor
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/localizationSensor
  "${ALL_GEN_OUTPUT_FILES_lisp}"
)

add_custom_target(localizationSensor_generate_messages_lisp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_lisp}
)
add_dependencies(localizationSensor_generate_messages localizationSensor_generate_messages_lisp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg" NAME_WE)
add_dependencies(localizationSensor_generate_messages_lisp _localizationSensor_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(localizationSensor_genlisp)
add_dependencies(localizationSensor_genlisp localizationSensor_generate_messages_lisp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS localizationSensor_generate_messages_lisp)

### Section generating for lang: gennodejs
### Generating Messages
_generate_msg_nodejs(localizationSensor
  "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/localizationSensor
)

### Generating Services

### Generating Module File
_generate_module_nodejs(localizationSensor
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/localizationSensor
  "${ALL_GEN_OUTPUT_FILES_nodejs}"
)

add_custom_target(localizationSensor_generate_messages_nodejs
  DEPENDS ${ALL_GEN_OUTPUT_FILES_nodejs}
)
add_dependencies(localizationSensor_generate_messages localizationSensor_generate_messages_nodejs)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg" NAME_WE)
add_dependencies(localizationSensor_generate_messages_nodejs _localizationSensor_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(localizationSensor_gennodejs)
add_dependencies(localizationSensor_gennodejs localizationSensor_generate_messages_nodejs)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS localizationSensor_generate_messages_nodejs)

### Section generating for lang: genpy
### Generating Messages
_generate_msg_py(localizationSensor
  "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/localizationSensor
)

### Generating Services

### Generating Module File
_generate_module_py(localizationSensor
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/localizationSensor
  "${ALL_GEN_OUTPUT_FILES_py}"
)

add_custom_target(localizationSensor_generate_messages_py
  DEPENDS ${ALL_GEN_OUTPUT_FILES_py}
)
add_dependencies(localizationSensor_generate_messages localizationSensor_generate_messages_py)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/riki/AdasWork/catkin_ws/src/localizationSensor/msg/gps.msg" NAME_WE)
add_dependencies(localizationSensor_generate_messages_py _localizationSensor_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(localizationSensor_genpy)
add_dependencies(localizationSensor_genpy localizationSensor_generate_messages_py)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS localizationSensor_generate_messages_py)



if(gencpp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/localizationSensor)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/localizationSensor
    DESTINATION ${gencpp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_cpp)
  add_dependencies(localizationSensor_generate_messages_cpp std_msgs_generate_messages_cpp)
endif()

if(geneus_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/localizationSensor)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/localizationSensor
    DESTINATION ${geneus_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_eus)
  add_dependencies(localizationSensor_generate_messages_eus std_msgs_generate_messages_eus)
endif()

if(genlisp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/localizationSensor)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/localizationSensor
    DESTINATION ${genlisp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_lisp)
  add_dependencies(localizationSensor_generate_messages_lisp std_msgs_generate_messages_lisp)
endif()

if(gennodejs_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/localizationSensor)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/localizationSensor
    DESTINATION ${gennodejs_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_nodejs)
  add_dependencies(localizationSensor_generate_messages_nodejs std_msgs_generate_messages_nodejs)
endif()

if(genpy_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/localizationSensor)
  install(CODE "execute_process(COMMAND \"/usr/bin/python\" -m compileall \"${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/localizationSensor\")")
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/localizationSensor
    DESTINATION ${genpy_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_py)
  add_dependencies(localizationSensor_generate_messages_py std_msgs_generate_messages_py)
endif()
