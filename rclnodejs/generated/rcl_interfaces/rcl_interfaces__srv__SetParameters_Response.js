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
const SetParametersResultWrapper = require('../../generated/rcl_interfaces/rcl_interfaces__msg__SetParametersResult.js');
const SetParameters_ResponseRefStruct = StructType({
  results: SetParametersResultWrapper.refObjectArrayType,
});
const SetParameters_ResponseRefArray = ArrayType(SetParameters_ResponseRefStruct);
const SetParameters_ResponseRefStructArray = StructType({
  data: SetParameters_ResponseRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class SetParameters_ResponseWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new SetParameters_ResponseRefStruct(other._refObject.toObject());
      this._wrapperFields.results = SetParametersResultWrapper.createArray();
      this._wrapperFields.results.copy(other._wrapperFields.results);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new SetParameters_ResponseRefStruct();
    this._wrapperFields.results = SetParametersResultWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new SetParameters_ResponseWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new SetParameters_ResponseArrayWrapper;
  }
  static get ArrayType() {
    return SetParameters_ResponseArrayWrapper;
  }
  static get refObjectArrayType() {
    return SetParameters_ResponseRefStructArray
  }
  static get refObjectType() {
    return SetParameters_ResponseRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.results.freeze(own, checkConsistency);
    this._refObject.results = this._wrapperFields.results.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.results.copyRefObject(refObject.results);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.results.size != 0) {
      SetParametersResultWrapper.ArrayType.freeArray(refObject.results);
      if (SetParametersResultWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.results, SetParametersResultWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.results, SetParametersResultWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    SetParameters_ResponseWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'rcl_interfaces', subFolder: 'srv', interfaceName: 'SetParameters_Response'};
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
  get results() {
    return this._wrapperFields.results;
  }
  set results(value) {
    this._wrapperFields.results.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new SetParameters_ResponseRefStruct(refObject.toObject());
    this._wrapperFields.results.copyRefObject(this._refObject.results);
  }
  copy(other) {
    this._refObject = new SetParameters_ResponseRefStruct(other._refObject.toObject());
    this._wrapperFields.results.copy(other._wrapperFields.results);
  }
  static get classType() {
    return SetParameters_ResponseWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"results","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"rcl_interfaces","type":"SetParametersResult","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"rcl_interfaces","type":"SetParameters_Response","stringUpperBound":null,"isPrimitiveType":false},"msgName":"SetParameters_Response"};
  }
  hasMember(name) {
    let memberNames = ["results"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class SetParameters_ResponseArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to SetParameters_ResponseArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to SetParameters_ResponseArrayWrapper.capacity setter');
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
    this._refArray = new SetParameters_ResponseRefArray(size);
    this._refObject = new SetParameters_ResponseRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new SetParameters_ResponseWrapper());
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
    if (! (other instanceof SetParameters_ResponseArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "SetParameters_ResponseArrayWrapper".');
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
      SetParameters_ResponseWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return SetParameters_ResponseWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return SetParameters_ResponseArrayWrapper;
  }
}
module.exports = SetParameters_ResponseWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "results",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "rcl_interfaces",
        "type": "SetParametersResult",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "rcl_interfaces",
    "type": "SetParameters_Response",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "SetParameters_Response"
}
*/