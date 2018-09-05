// This file is automatically generated by Intel rclnodejs
//
// *** DO NOT EDIT directly
//
'use strict';
const StructType = require('ref-struct');
const ref = require('ref');
const ArrayType = require('ref-array');
const primitiveTypes = require('../../rosidl_gen/generator_primitive.js');
const deallocator = require('../../rosidl_gen/deallocator.js');
const translator = require('../../rosidl_gen/message_translator.js');
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const InteractiveMarkerWrapper = require('../../generated/visualization_msgs/visualization_msgs__msg__InteractiveMarker.js');
const InteractiveMarkerInitRefStruct = StructType({
  server_id: primitiveTypes.string,
  seq_num: primitiveTypes.uint64,
  markers: InteractiveMarkerWrapper.refObjectArrayType,
});
const InteractiveMarkerInitRefArray = ArrayType(InteractiveMarkerInitRefStruct);
const InteractiveMarkerInitRefStructArray = StructType({
  data: InteractiveMarkerInitRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class InteractiveMarkerInitWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new InteractiveMarkerInitRefStruct(other._refObject.toObject());
      this._server_idIntialized = true;
      this._wrapperFields.server_id =  new StringWrapper(other._wrapperFields.server_id);
      this._seq_numIntialized = true;
      this._wrapperFields.markers = InteractiveMarkerWrapper.createArray();
      this._wrapperFields.markers.copy(other._wrapperFields.markers);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new InteractiveMarkerInitRefStruct();
    this._server_idIntialized = false;
    this._wrapperFields.server_id = new StringWrapper();
    this._seq_numIntialized = false;
    this._wrapperFields.markers = InteractiveMarkerWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new InteractiveMarkerInitWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new InteractiveMarkerInitArrayWrapper;
  }
  static get ArrayType() {
    return InteractiveMarkerInitArrayWrapper;
  }
  static get refObjectArrayType() {
    return InteractiveMarkerInitRefStructArray
  }
  static get refObjectType() {
    return InteractiveMarkerInitRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._server_idIntialized) {
        throw new TypeError('Invalid argument: server_id in InteractiveMarkerInit');
      }
      if (!this._seq_numIntialized) {
        throw new TypeError('Invalid argument: seq_num in InteractiveMarkerInit');
      }
    }
    if (own) {
      this._wrapperFields.server_id.freeze(own, checkConsistency);
    }
    this._refObject.server_id = this._wrapperFields.server_id.refObject;
    this._wrapperFields.markers.freeze(own, checkConsistency);
    this._refObject.markers = this._wrapperFields.markers.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._server_idIntialized = true;
    this._wrapperFields.server_id.data = refObject.server_id.data;
    this._seq_numIntialized = true;
    this._refObject.seq_num = refObject.seq_num;
    this._wrapperFields.markers.copyRefObject(refObject.markers);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    StringWrapper.freeStruct(refObject.server_id);
    if (refObject.markers.size != 0) {
      InteractiveMarkerWrapper.ArrayType.freeArray(refObject.markers);
      if (InteractiveMarkerWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.markers, InteractiveMarkerWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.markers, InteractiveMarkerWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    InteractiveMarkerInitWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'visualization_msgs', subFolder: 'msg', interfaceName: 'InteractiveMarkerInit'};
  }
  static isPrimitive() {
    return false;
  }
  static get isROSArray() {
    return false;
  }
  get refObject() {
    return this._refObject;
  }
  get server_id() {
    if (!this._server_idIntialized) {
      return undefined;
    }
    return this._wrapperFields.server_id.data;
  }
  set server_id(value) {
    this._server_idIntialized = true;
    this._wrapperFields.server_id.data = value;
  }
  get seq_num() {
    if (!this._seq_numIntialized) {
      return undefined;
    }
    return this._refObject.seq_num;
  }
  set seq_num(value) {
    this._seq_numIntialized = true;
    this._refObject.seq_num = value;
  }
  get markers() {
    return this._wrapperFields.markers;
  }
  set markers(value) {
    this._wrapperFields.markers.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new InteractiveMarkerInitRefStruct(refObject.toObject());
    this._server_idIntialized = true;
    this._wrapperFields.server_id.copyRefObject(this._refObject.server_id);
    this._seq_numIntialized = true;
    this._wrapperFields.markers.copyRefObject(this._refObject.markers);
  }
  copy(other) {
    this._refObject = new InteractiveMarkerInitRefStruct(other._refObject.toObject());
    this._server_idIntialized = true;
    this._wrapperFields.server_id.copy(other._wrapperFields.server_id);
    this._seq_numIntialized = true;
    this._wrapperFields.markers.copy(other._wrapperFields.markers);
  }
  static get classType() {
    return InteractiveMarkerInitWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"server_id","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"seq_num","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint64","stringUpperBound":null,"isPrimitiveType":true}},{"name":"markers","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"visualization_msgs","type":"InteractiveMarker","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"visualization_msgs","type":"InteractiveMarkerInit","stringUpperBound":null,"isPrimitiveType":false},"msgName":"InteractiveMarkerInit"};
  }
  hasMember(name) {
    let memberNames = ["server_id","seq_num","markers"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class InteractiveMarkerInitArrayWrapper {
  constructor(size = 0) {
    this._resize(size);
  }
  toRawROS() {
    return this._refObject.ref();
  }
  fill(values) {
    const length = values.length;
    this._resize(length);
    values.forEach((value, index) => {
      this._wrappers[index].copy(value);
    });
  }
  // Put all data currently stored in `this._wrappers` into `this._refObject`
  freeze(own) {
    this._wrappers.forEach((wrapper, index) => {
      wrapper.freeze(own);
      this._refArray[index] = wrapper.refObject;
    });
    this._refObject.size = this._wrappers.length;
    this._refObject.capacity = this._wrappers.length;
    this._refObject.data = this._refArray.buffer;
  }
  get refObject() {
    return this._refObject;
  }
  get data() {
    return this._wrappers;
  }
  get size() {
    return this._wrappers.length;
  }
  set size(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to InteractiveMarkerInitArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to InteractiveMarkerInitArrayWrapper.capacity setter');
    }
    return this._resize(value);
  }
  get refObject() {
    return this._refObject;
  }
  _resize(size) {
    if (size < 0) {
      throw new RangeError('Invalid argument: should provide a positive number');
      return;
    }
    this._refArray = new InteractiveMarkerInitRefArray(size);
    this._refObject = new InteractiveMarkerInitRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new InteractiveMarkerInitWrapper());
    }
  }
  // Copy all data from `this._refObject` into `this._wrappers`
  copyRefObject(refObject) {
    this._refObject = refObject;
    let refObjectArray = this._refObject.data;
    refObjectArray.length = this._refObject.size;
    this._resize(this._refObject.size);
    for (let index = 0; index < this._refObject.size; index++) {
      this._wrappers[index].copyRefObject(refObjectArray[index]);
    }
  }
  copy(other) {
    if (! (other instanceof InteractiveMarkerInitArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "InteractiveMarkerInitArrayWrapper".');
    }
    this._resize(other.size);
    // Array deep copy
    other._wrappers.forEach((wrapper, index) => {
      this._wrappers[index].copy(wrapper);
    });
  }
  static freeArray(refObject) {
    let refObjectArray = refObject.data;
    refObjectArray.length = refObject.size;
    for (let index = 0; index < refObject.size; index++) {
      InteractiveMarkerInitWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return InteractiveMarkerInitWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return InteractiveMarkerInitArrayWrapper;
  }
}
module.exports = InteractiveMarkerInitWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "server_id",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "string",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "seq_num",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "uint64",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "markers",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "visualization_msgs",
        "type": "InteractiveMarker",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "visualization_msgs",
    "type": "InteractiveMarkerInit",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "InteractiveMarkerInit"
}
*/
