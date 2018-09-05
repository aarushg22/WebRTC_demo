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
const DurationRefStruct = StructType({
  sec: primitiveTypes.int32,
  nanosec: primitiveTypes.uint32,
});
const DurationRefArray = ArrayType(DurationRefStruct);
const DurationRefStructArray = StructType({
  data: DurationRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class DurationWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new DurationRefStruct(other._refObject.toObject());
      this._secIntialized = true;
      this._nanosecIntialized = true;
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new DurationRefStruct();
    this._secIntialized = false;
    this._nanosecIntialized = false;
  }
  static createFromRefObject(refObject) {
    let self = new DurationWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new DurationArrayWrapper;
  }
  static get ArrayType() {
    return DurationArrayWrapper;
  }
  static get refObjectArrayType() {
    return DurationRefStructArray
  }
  static get refObjectType() {
    return DurationRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._secIntialized) {
        throw new TypeError('Invalid argument: sec in Duration');
      }
      if (!this._nanosecIntialized) {
        throw new TypeError('Invalid argument: nanosec in Duration');
      }
    }
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._secIntialized = true;
    this._refObject.sec = refObject.sec;
    this._nanosecIntialized = true;
    this._refObject.nanosec = refObject.nanosec;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
  }
  static destoryRawROS(msg) {
    DurationWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'builtin_interfaces', subFolder: 'msg', interfaceName: 'Duration'};
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
  get sec() {
    if (!this._secIntialized) {
      return undefined;
    }
    return this._refObject.sec;
  }
  set sec(value) {
    this._secIntialized = true;
    this._refObject.sec = value;
  }
  get nanosec() {
    if (!this._nanosecIntialized) {
      return undefined;
    }
    return this._refObject.nanosec;
  }
  set nanosec(value) {
    this._nanosecIntialized = true;
    this._refObject.nanosec = value;
  }
  copyRefObject(refObject) {
    this._refObject = new DurationRefStruct(refObject.toObject());
    this._secIntialized = true;
    this._nanosecIntialized = true;
  }
  copy(other) {
    this._refObject = new DurationRefStruct(other._refObject.toObject());
    this._secIntialized = true;
    this._nanosecIntialized = true;
  }
  static get classType() {
    return DurationWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"sec","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"int32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"nanosec","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint32","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"builtin_interfaces","type":"Duration","stringUpperBound":null,"isPrimitiveType":false},"msgName":"Duration"};
  }
  hasMember(name) {
    let memberNames = ["sec","nanosec"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class DurationArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to DurationArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to DurationArrayWrapper.capacity setter');
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
    this._refArray = new DurationRefArray(size);
    this._refObject = new DurationRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new DurationWrapper());
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
    if (! (other instanceof DurationArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "DurationArrayWrapper".');
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
      DurationWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return DurationWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return DurationArrayWrapper;
  }
}
module.exports = DurationWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "sec",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "int32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "nanosec",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "uint32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "builtin_interfaces",
    "type": "Duration",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "Duration"
}
*/
