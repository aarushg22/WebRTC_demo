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
const SetMap_ResponseRefStruct = StructType({
  success: primitiveTypes.bool,
});
const SetMap_ResponseRefArray = ArrayType(SetMap_ResponseRefStruct);
const SetMap_ResponseRefStructArray = StructType({
  data: SetMap_ResponseRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class SetMap_ResponseWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new SetMap_ResponseRefStruct(other._refObject.toObject());
      this._successIntialized = true;
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new SetMap_ResponseRefStruct();
    this._successIntialized = false;
  }
  static createFromRefObject(refObject) {
    let self = new SetMap_ResponseWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new SetMap_ResponseArrayWrapper;
  }
  static get ArrayType() {
    return SetMap_ResponseArrayWrapper;
  }
  static get refObjectArrayType() {
    return SetMap_ResponseRefStructArray
  }
  static get refObjectType() {
    return SetMap_ResponseRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._successIntialized) {
        throw new TypeError('Invalid argument: success in SetMap_Response');
      }
    }
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._successIntialized = true;
    this._refObject.success = refObject.success;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
  }
  static destoryRawROS(msg) {
    SetMap_ResponseWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'nav_msgs', subFolder: 'srv', interfaceName: 'SetMap_Response'};
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
  get success() {
    if (!this._successIntialized) {
      return undefined;
    }
    return this._refObject.success;
  }
  set success(value) {
    this._successIntialized = true;
    this._refObject.success = value;
  }
  copyRefObject(refObject) {
    this._refObject = new SetMap_ResponseRefStruct(refObject.toObject());
    this._successIntialized = true;
  }
  copy(other) {
    this._refObject = new SetMap_ResponseRefStruct(other._refObject.toObject());
    this._successIntialized = true;
  }
  static get classType() {
    return SetMap_ResponseWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"success","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"bool","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"nav_msgs","type":"SetMap_Response","stringUpperBound":null,"isPrimitiveType":false},"msgName":"SetMap_Response"};
  }
  hasMember(name) {
    let memberNames = ["success"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class SetMap_ResponseArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to SetMap_ResponseArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to SetMap_ResponseArrayWrapper.capacity setter');
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
    this._refArray = new SetMap_ResponseRefArray(size);
    this._refObject = new SetMap_ResponseRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new SetMap_ResponseWrapper());
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
    if (! (other instanceof SetMap_ResponseArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "SetMap_ResponseArrayWrapper".');
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
      SetMap_ResponseWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return SetMap_ResponseWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return SetMap_ResponseArrayWrapper;
  }
}
module.exports = SetMap_ResponseWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "success",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "bool",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "nav_msgs",
    "type": "SetMap_Response",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "SetMap_Response"
}
*/
