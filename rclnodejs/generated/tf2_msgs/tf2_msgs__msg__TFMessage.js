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
const TransformStampedWrapper = require('../../generated/geometry_msgs/geometry_msgs__msg__TransformStamped.js');
const TFMessageRefStruct = StructType({
  transforms: TransformStampedWrapper.refObjectArrayType,
});
const TFMessageRefArray = ArrayType(TFMessageRefStruct);
const TFMessageRefStructArray = StructType({
  data: TFMessageRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class TFMessageWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new TFMessageRefStruct(other._refObject.toObject());
      this._wrapperFields.transforms = TransformStampedWrapper.createArray();
      this._wrapperFields.transforms.copy(other._wrapperFields.transforms);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new TFMessageRefStruct();
    this._wrapperFields.transforms = TransformStampedWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new TFMessageWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new TFMessageArrayWrapper;
  }
  static get ArrayType() {
    return TFMessageArrayWrapper;
  }
  static get refObjectArrayType() {
    return TFMessageRefStructArray
  }
  static get refObjectType() {
    return TFMessageRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.transforms.freeze(own, checkConsistency);
    this._refObject.transforms = this._wrapperFields.transforms.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.transforms.copyRefObject(refObject.transforms);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.transforms.size != 0) {
      TransformStampedWrapper.ArrayType.freeArray(refObject.transforms);
      if (TransformStampedWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.transforms, TransformStampedWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.transforms, TransformStampedWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    TFMessageWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'tf2_msgs', subFolder: 'msg', interfaceName: 'TFMessage'};
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
  get transforms() {
    return this._wrapperFields.transforms;
  }
  set transforms(value) {
    this._wrapperFields.transforms.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new TFMessageRefStruct(refObject.toObject());
    this._wrapperFields.transforms.copyRefObject(this._refObject.transforms);
  }
  copy(other) {
    this._refObject = new TFMessageRefStruct(other._refObject.toObject());
    this._wrapperFields.transforms.copy(other._wrapperFields.transforms);
  }
  static get classType() {
    return TFMessageWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"transforms","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"geometry_msgs","type":"TransformStamped","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"tf2_msgs","type":"TFMessage","stringUpperBound":null,"isPrimitiveType":false},"msgName":"TFMessage"};
  }
  hasMember(name) {
    let memberNames = ["transforms"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class TFMessageArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to TFMessageArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to TFMessageArrayWrapper.capacity setter');
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
    this._refArray = new TFMessageRefArray(size);
    this._refObject = new TFMessageRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new TFMessageWrapper());
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
    if (! (other instanceof TFMessageArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "TFMessageArrayWrapper".');
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
      TFMessageWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return TFMessageWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return TFMessageArrayWrapper;
  }
}
module.exports = TFMessageWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "transforms",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "geometry_msgs",
        "type": "TransformStamped",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "tf2_msgs",
    "type": "TFMessage",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "TFMessage"
}
*/