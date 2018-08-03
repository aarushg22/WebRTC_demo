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
const OccupancyGridWrapper = require('../../generated/nav_msgs/nav_msgs__msg__OccupancyGrid.js');
const GetMapROI_ResponseRefStruct = StructType({
  sub_map: OccupancyGridWrapper.refObjectType,
});
const GetMapROI_ResponseRefArray = ArrayType(GetMapROI_ResponseRefStruct);
const GetMapROI_ResponseRefStructArray = StructType({
  data: GetMapROI_ResponseRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class GetMapROI_ResponseWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new GetMapROI_ResponseRefStruct(other._refObject.toObject());
      this._wrapperFields.sub_map =  new OccupancyGridWrapper(other._wrapperFields.sub_map);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new GetMapROI_ResponseRefStruct();
    this._wrapperFields.sub_map = new OccupancyGridWrapper();
  }
  static createFromRefObject(refObject) {
    let self = new GetMapROI_ResponseWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new GetMapROI_ResponseArrayWrapper;
  }
  static get ArrayType() {
    return GetMapROI_ResponseArrayWrapper;
  }
  static get refObjectArrayType() {
    return GetMapROI_ResponseRefStructArray
  }
  static get refObjectType() {
    return GetMapROI_ResponseRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.sub_map.freeze(own, checkConsistency);
    this._refObject.sub_map = this._wrapperFields.sub_map.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.sub_map.copyRefObject(refObject.sub_map);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    OccupancyGridWrapper.freeStruct(refObject.sub_map);
  }
  static destoryRawROS(msg) {
    GetMapROI_ResponseWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'map_msgs', subFolder: 'srv', interfaceName: 'GetMapROI_Response'};
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
  get sub_map() {
    return this._wrapperFields.sub_map;
  }
  set sub_map(value) {
    this._wrapperFields.sub_map.copy(value);
  }
  copyRefObject(refObject) {
    this._refObject = new GetMapROI_ResponseRefStruct(refObject.toObject());
    this._wrapperFields.sub_map.copyRefObject(this._refObject.sub_map);
  }
  copy(other) {
    this._refObject = new GetMapROI_ResponseRefStruct(other._refObject.toObject());
    this._wrapperFields.sub_map.copy(other._wrapperFields.sub_map);
  }
  static get classType() {
    return GetMapROI_ResponseWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"sub_map","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"nav_msgs","type":"OccupancyGrid","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"map_msgs","type":"GetMapROI_Response","stringUpperBound":null,"isPrimitiveType":false},"msgName":"GetMapROI_Response"};
  }
  hasMember(name) {
    let memberNames = ["sub_map"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class GetMapROI_ResponseArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to GetMapROI_ResponseArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to GetMapROI_ResponseArrayWrapper.capacity setter');
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
    this._refArray = new GetMapROI_ResponseRefArray(size);
    this._refObject = new GetMapROI_ResponseRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new GetMapROI_ResponseWrapper());
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
    if (! (other instanceof GetMapROI_ResponseArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "GetMapROI_ResponseArrayWrapper".');
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
      GetMapROI_ResponseWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return GetMapROI_ResponseWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return GetMapROI_ResponseArrayWrapper;
  }
}
module.exports = GetMapROI_ResponseWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "sub_map",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "nav_msgs",
        "type": "OccupancyGrid",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "map_msgs",
    "type": "GetMapROI_Response",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "GetMapROI_Response"
}
*/