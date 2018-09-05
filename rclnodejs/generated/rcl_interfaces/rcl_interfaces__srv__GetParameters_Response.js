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
const ParameterValueWrapper = require('../../generated/rcl_interfaces/rcl_interfaces__msg__ParameterValue.js');
const GetParameters_ResponseRefStruct = StructType({
  values: ParameterValueWrapper.refObjectArrayType,
});
const GetParameters_ResponseRefArray = ArrayType(GetParameters_ResponseRefStruct);
const GetParameters_ResponseRefStructArray = StructType({
  data: GetParameters_ResponseRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class GetParameters_ResponseWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new GetParameters_ResponseRefStruct(other._refObject.toObject());
      this._wrapperFields.values = ParameterValueWrapper.createArray();
      this._wrapperFields.values.copy(other._wrapperFields.values);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new GetParameters_ResponseRefStruct();
    this._wrapperFields.values = ParameterValueWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new GetParameters_ResponseWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new GetParameters_ResponseArrayWrapper;
  }
  static get ArrayType() {
    return GetParameters_ResponseArrayWrapper;
  }
  static get refObjectArrayType() {
    return GetParameters_ResponseRefStructArray
  }
  static get refObjectType() {
    return GetParameters_ResponseRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.values.freeze(own, checkConsistency);
    this._refObject.values = this._wrapperFields.values.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.values.copyRefObject(refObject.values);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.values.size != 0) {
      ParameterValueWrapper.ArrayType.freeArray(refObject.values);
      if (ParameterValueWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.values, ParameterValueWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.values, ParameterValueWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    GetParameters_ResponseWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'rcl_interfaces', subFolder: 'srv', interfaceName: 'GetParameters_Response'};
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
  get values() {
    return this._wrapperFields.values;
  }
  set values(value) {
    this._wrapperFields.values.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new GetParameters_ResponseRefStruct(refObject.toObject());
    this._wrapperFields.values.copyRefObject(this._refObject.values);
  }
  copy(other) {
    this._refObject = new GetParameters_ResponseRefStruct(other._refObject.toObject());
    this._wrapperFields.values.copy(other._wrapperFields.values);
  }
  static get classType() {
    return GetParameters_ResponseWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"values","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"rcl_interfaces","type":"ParameterValue","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"rcl_interfaces","type":"GetParameters_Response","stringUpperBound":null,"isPrimitiveType":false},"msgName":"GetParameters_Response"};
  }
  hasMember(name) {
    let memberNames = ["values"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class GetParameters_ResponseArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to GetParameters_ResponseArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to GetParameters_ResponseArrayWrapper.capacity setter');
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
    this._refArray = new GetParameters_ResponseRefArray(size);
    this._refObject = new GetParameters_ResponseRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new GetParameters_ResponseWrapper());
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
    if (! (other instanceof GetParameters_ResponseArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "GetParameters_ResponseArrayWrapper".');
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
      GetParameters_ResponseWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return GetParameters_ResponseWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return GetParameters_ResponseArrayWrapper;
  }
}
module.exports = GetParameters_ResponseWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "values",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "rcl_interfaces",
        "type": "ParameterValue",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "rcl_interfaces",
    "type": "GetParameters_Response",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "GetParameters_Response"
}
*/
