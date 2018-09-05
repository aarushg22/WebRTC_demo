cmd_Release/obj.target/rclnodejs/src/executor.o := g++ '-DNODE_GYP_MODULE_NAME=rclnodejs' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOS_LINUX' '-DBUILDING_NODE_EXTENSION' -I/home/m-a/.node-gyp/8.11.3/include/node -I/home/m-a/.node-gyp/8.11.3/src -I/home/m-a/.node-gyp/8.11.3/deps/uv/include -I/home/m-a/.node-gyp/8.11.3/deps/v8/include -I../. -I../src/third_party/spdlog/include -I../node_modules/nan -I/opt/ros/bouncy/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -fstack-protector-strong -fPIE -fPIC -O2 -D_FORTIFY_SOURCE=2 -Wformat -Wformat-security -O3 -fno-omit-frame-pointer -fno-rtti -std=gnu++0x -std=c++14 -MMD -MF ./Release/.deps/Release/obj.target/rclnodejs/src/executor.o.d.raw   -c -o Release/obj.target/rclnodejs/src/executor.o ../src/executor.cpp
Release/obj.target/rclnodejs/src/executor.o: ../src/executor.cpp \
 ../src/executor.hpp /home/m-a/.node-gyp/8.11.3/include/node/uv.h \
 /home/m-a/.node-gyp/8.11.3/include/node/uv-errno.h \
 /home/m-a/.node-gyp/8.11.3/include/node/uv-version.h \
 /home/m-a/.node-gyp/8.11.3/include/node/uv-unix.h \
 /home/m-a/.node-gyp/8.11.3/include/node/uv-threadpool.h \
 /home/m-a/.node-gyp/8.11.3/include/node/uv-linux.h \
 /opt/ros/bouncy/include/rcl/error_handling.h \
 /opt/ros/bouncy/include/rcutils/error_handling.h \
 /opt/ros/bouncy/include/rcutils/allocator.h \
 /opt/ros/bouncy/include/rcutils/macros.h \
 /opt/ros/bouncy/include/rcutils/types/rcutils_ret.h \
 /opt/ros/bouncy/include/rcutils/visibility_control.h \
 /opt/ros/bouncy/include/rcutils/format_string.h \
 /opt/ros/bouncy/include/rcl/wait.h /opt/ros/bouncy/include/rcl/client.h \
 /opt/ros/bouncy/include/rosidl_generator_c/service_type_support_struct.h \
 /opt/ros/bouncy/include/rosidl_generator_c/visibility_control.h \
 /opt/ros/bouncy/include/rosidl_typesupport_interface/macros.h \
 /opt/ros/bouncy/include/rcl/macros.h /opt/ros/bouncy/include/rcl/node.h \
 /opt/ros/bouncy/include/rcl/allocator.h \
 /opt/ros/bouncy/include/rcl/arguments.h \
 /opt/ros/bouncy/include/rcl/types.h /opt/ros/bouncy/include/rmw/types.h \
 /opt/ros/bouncy/include/rcutils/logging.h \
 /opt/ros/bouncy/include/rcutils/time.h \
 /opt/ros/bouncy/include/rcutils/types.h \
 /opt/ros/bouncy/include/rcutils/types/string_array.h \
 /opt/ros/bouncy/include/rcutils/types/string_map.h \
 /opt/ros/bouncy/include/rmw/visibility_control.h \
 /opt/ros/bouncy/include/rcl/visibility_control.h \
 /opt/ros/bouncy/include/rcl/guard_condition.h \
 /opt/ros/bouncy/include/rcl/service.h \
 /opt/ros/bouncy/include/rcl/subscription.h \
 /opt/ros/bouncy/include/rosidl_generator_c/message_type_support_struct.h \
 /opt/ros/bouncy/include/rcl/timer.h /opt/ros/bouncy/include/rcl/time.h \
 /opt/ros/bouncy/include/rmw/rmw.h /opt/ros/bouncy/include/rmw/macros.h \
 /opt/ros/bouncy/include/rmw/qos_profiles.h ../src/handle_manager.hpp \
 ../node_modules/nan/nan.h \
 /home/m-a/.node-gyp/8.11.3/include/node/node_version.h \
 /home/m-a/.node-gyp/8.11.3/include/node/node.h \
 /home/m-a/.node-gyp/8.11.3/include/node/v8.h \
 /home/m-a/.node-gyp/8.11.3/include/node/v8-version.h \
 /home/m-a/.node-gyp/8.11.3/include/node/v8config.h \
 /home/m-a/.node-gyp/8.11.3/include/node/node_version.h \
 /home/m-a/.node-gyp/8.11.3/include/node/node_buffer.h \
 /home/m-a/.node-gyp/8.11.3/include/node/node.h \
 /home/m-a/.node-gyp/8.11.3/include/node/node_object_wrap.h \
 ../node_modules/nan/nan_callbacks.h \
 ../node_modules/nan/nan_callbacks_12_inl.h \
 ../node_modules/nan/nan_maybe_43_inl.h \
 ../node_modules/nan/nan_converters.h \
 ../node_modules/nan/nan_converters_43_inl.h \
 ../node_modules/nan/nan_new.h \
 ../node_modules/nan/nan_implementation_12_inl.h \
 ../node_modules/nan/nan_persistent_12_inl.h \
 ../node_modules/nan/nan_weak.h ../node_modules/nan/nan_object_wrap.h \
 ../node_modules/nan/nan_private.h \
 ../node_modules/nan/nan_typedarray_contents.h \
 ../node_modules/nan/nan_json.h \
 ../src/third_party/spdlog/include/spdlog/spdlog.h \
 ../src/third_party/spdlog/include/spdlog/tweakme.h \
 ../src/third_party/spdlog/include/spdlog/common.h \
 ../src/third_party/spdlog/include/spdlog/details/null_mutex.h \
 ../src/third_party/spdlog/include/spdlog/fmt/fmt.h \
 ../src/third_party/spdlog/include/spdlog/fmt/bundled/format.h \
 ../src/third_party/spdlog/include/spdlog/logger.h \
 ../src/third_party/spdlog/include/spdlog/sinks/base_sink.h \
 ../src/third_party/spdlog/include/spdlog/sinks/sink.h \
 ../src/third_party/spdlog/include/spdlog/details/log_msg.h \
 ../src/third_party/spdlog/include/spdlog/details/os.h \
 ../src/third_party/spdlog/include/spdlog/formatter.h \
 ../src/third_party/spdlog/include/spdlog/details/pattern_formatter_impl.h \
 ../src/third_party/spdlog/include/spdlog/details/logger_impl.h \
 ../src/third_party/spdlog/include/spdlog/sinks/stdout_sinks.h \
 ../src/third_party/spdlog/include/spdlog/details/spdlog_impl.h \
 ../src/third_party/spdlog/include/spdlog/details/registry.h \
 ../src/third_party/spdlog/include/spdlog/async_logger.h \
 ../src/third_party/spdlog/include/spdlog/details/async_logger_impl.h \
 ../src/third_party/spdlog/include/spdlog/details/async_log_helper.h \
 ../src/third_party/spdlog/include/spdlog/details/mpmc_bounded_q.h \
 ../src/third_party/spdlog/include/spdlog/sinks/file_sinks.h \
 ../src/third_party/spdlog/include/spdlog/details/file_helper.h \
 ../src/third_party/spdlog/include/spdlog/sinks/ansicolor_sink.h
../src/executor.cpp:
../src/executor.hpp:
/home/m-a/.node-gyp/8.11.3/include/node/uv.h:
/home/m-a/.node-gyp/8.11.3/include/node/uv-errno.h:
/home/m-a/.node-gyp/8.11.3/include/node/uv-version.h:
/home/m-a/.node-gyp/8.11.3/include/node/uv-unix.h:
/home/m-a/.node-gyp/8.11.3/include/node/uv-threadpool.h:
/home/m-a/.node-gyp/8.11.3/include/node/uv-linux.h:
/opt/ros/bouncy/include/rcl/error_handling.h:
/opt/ros/bouncy/include/rcutils/error_handling.h:
/opt/ros/bouncy/include/rcutils/allocator.h:
/opt/ros/bouncy/include/rcutils/macros.h:
/opt/ros/bouncy/include/rcutils/types/rcutils_ret.h:
/opt/ros/bouncy/include/rcutils/visibility_control.h:
/opt/ros/bouncy/include/rcutils/format_string.h:
/opt/ros/bouncy/include/rcl/wait.h:
/opt/ros/bouncy/include/rcl/client.h:
/opt/ros/bouncy/include/rosidl_generator_c/service_type_support_struct.h:
/opt/ros/bouncy/include/rosidl_generator_c/visibility_control.h:
/opt/ros/bouncy/include/rosidl_typesupport_interface/macros.h:
/opt/ros/bouncy/include/rcl/macros.h:
/opt/ros/bouncy/include/rcl/node.h:
/opt/ros/bouncy/include/rcl/allocator.h:
/opt/ros/bouncy/include/rcl/arguments.h:
/opt/ros/bouncy/include/rcl/types.h:
/opt/ros/bouncy/include/rmw/types.h:
/opt/ros/bouncy/include/rcutils/logging.h:
/opt/ros/bouncy/include/rcutils/time.h:
/opt/ros/bouncy/include/rcutils/types.h:
/opt/ros/bouncy/include/rcutils/types/string_array.h:
/opt/ros/bouncy/include/rcutils/types/string_map.h:
/opt/ros/bouncy/include/rmw/visibility_control.h:
/opt/ros/bouncy/include/rcl/visibility_control.h:
/opt/ros/bouncy/include/rcl/guard_condition.h:
/opt/ros/bouncy/include/rcl/service.h:
/opt/ros/bouncy/include/rcl/subscription.h:
/opt/ros/bouncy/include/rosidl_generator_c/message_type_support_struct.h:
/opt/ros/bouncy/include/rcl/timer.h:
/opt/ros/bouncy/include/rcl/time.h:
/opt/ros/bouncy/include/rmw/rmw.h:
/opt/ros/bouncy/include/rmw/macros.h:
/opt/ros/bouncy/include/rmw/qos_profiles.h:
../src/handle_manager.hpp:
../node_modules/nan/nan.h:
/home/m-a/.node-gyp/8.11.3/include/node/node_version.h:
/home/m-a/.node-gyp/8.11.3/include/node/node.h:
/home/m-a/.node-gyp/8.11.3/include/node/v8.h:
/home/m-a/.node-gyp/8.11.3/include/node/v8-version.h:
/home/m-a/.node-gyp/8.11.3/include/node/v8config.h:
/home/m-a/.node-gyp/8.11.3/include/node/node_version.h:
/home/m-a/.node-gyp/8.11.3/include/node/node_buffer.h:
/home/m-a/.node-gyp/8.11.3/include/node/node.h:
/home/m-a/.node-gyp/8.11.3/include/node/node_object_wrap.h:
../node_modules/nan/nan_callbacks.h:
../node_modules/nan/nan_callbacks_12_inl.h:
../node_modules/nan/nan_maybe_43_inl.h:
../node_modules/nan/nan_converters.h:
../node_modules/nan/nan_converters_43_inl.h:
../node_modules/nan/nan_new.h:
../node_modules/nan/nan_implementation_12_inl.h:
../node_modules/nan/nan_persistent_12_inl.h:
../node_modules/nan/nan_weak.h:
../node_modules/nan/nan_object_wrap.h:
../node_modules/nan/nan_private.h:
../node_modules/nan/nan_typedarray_contents.h:
../node_modules/nan/nan_json.h:
../src/third_party/spdlog/include/spdlog/spdlog.h:
../src/third_party/spdlog/include/spdlog/tweakme.h:
../src/third_party/spdlog/include/spdlog/common.h:
../src/third_party/spdlog/include/spdlog/details/null_mutex.h:
../src/third_party/spdlog/include/spdlog/fmt/fmt.h:
../src/third_party/spdlog/include/spdlog/fmt/bundled/format.h:
../src/third_party/spdlog/include/spdlog/logger.h:
../src/third_party/spdlog/include/spdlog/sinks/base_sink.h:
../src/third_party/spdlog/include/spdlog/sinks/sink.h:
../src/third_party/spdlog/include/spdlog/details/log_msg.h:
../src/third_party/spdlog/include/spdlog/details/os.h:
../src/third_party/spdlog/include/spdlog/formatter.h:
../src/third_party/spdlog/include/spdlog/details/pattern_formatter_impl.h:
../src/third_party/spdlog/include/spdlog/details/logger_impl.h:
../src/third_party/spdlog/include/spdlog/sinks/stdout_sinks.h:
../src/third_party/spdlog/include/spdlog/details/spdlog_impl.h:
../src/third_party/spdlog/include/spdlog/details/registry.h:
../src/third_party/spdlog/include/spdlog/async_logger.h:
../src/third_party/spdlog/include/spdlog/details/async_logger_impl.h:
../src/third_party/spdlog/include/spdlog/details/async_log_helper.h:
../src/third_party/spdlog/include/spdlog/details/mpmc_bounded_q.h:
../src/third_party/spdlog/include/spdlog/sinks/file_sinks.h:
../src/third_party/spdlog/include/spdlog/details/file_helper.h:
../src/third_party/spdlog/include/spdlog/sinks/ansicolor_sink.h:
