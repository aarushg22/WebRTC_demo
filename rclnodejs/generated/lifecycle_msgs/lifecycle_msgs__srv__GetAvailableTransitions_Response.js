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
const TransitionDescriptionWrapper = require('../../generated/lifecycle_msgs/lifecycle_msgs__msg__TransitionDescription.js');
const GetAvailableTransitions_ResponseRefStruct = StructType({
  available_transitions: TransitionDescriptionWrapper.refObjectArrayType,
});
const GetAvailableTransitions_ResponseRefArray = ArrayType(GetAvailableTransitions_ResponseRefStruct);
const GetAvailableTransitions_ResponseRefStructArray = StructType({
  data: GetAvailableTransitions_ResponseRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class GetAvailableTransitions_ResponseWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new GetAvailableTransitions_ResponseRefStruct(other._refObject.toObject());
      this._wrapperFields.available_transitions = TransitionDescriptionWrapper.createArray();
      this._wrapperFields.available_transitions.copy(other._wrapperFields.available_transitions);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new GetAvailableTransitions_ResponseRefStruct();
    this._wrapperFields.available_transitions = TransitionDescriptionWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new GetAvailableTransitions_ResponseWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new GetAvailableTransitions_ResponseArrayWrapper;
  }
  static get ArrayType() {
    return GetAvailableTransitions_ResponseArrayWrapper;
  }
  static get refObjectArrayType() {
    return GetAvailableTransitions_ResponseRefStructArray
  }
  static get refObjectType() {
    return GetAvailableTransitions_ResponseRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.available_transitions.freeze(own, checkConsistency);
    this._refObject.available_transitions = this._wrapperFields.available_transitions.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.available_transitions.copyRefObject(refObject.available_transitions);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.available_transitions.size != 0) {
      TransitionDescriptionWrapper.ArrayType.freeArray(refObject.available_transitions);
      if (TransitionDescriptionWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.available_transitions, TransitionDescriptionWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.available_transitions, TransitionDescriptionWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    GetAvailableTransitions_ResponseWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'lifecycle_msgs', subFolder: 'srv', interfaceName: 'GetAvailableTransitions_Response'};
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
  get available_transitions() {
    return this._wrapperFields.available_transitions;
  }
  set available_transitions(value) {
    this._wrapperFields.available_transitions.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new GetAvailableTransitions_ResponseRefStruct(refObject.toObject());
    this._wrapperFields.available_transitions.copyRefObject(this._refObject.available_transitions);
  }
  copy(other) {
    this._refObject = new GetAvailableTransitions_ResponseRefStruct(other._refObject.toObject());
    this._wrapperFields.available_transitions.copy(other._wrapperFields.available_transitions);
  }
  static get classType() {
    return GetAvailableTransitions_ResponseWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"available_transitions","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"lifecycle_msgs","type":"TransitionDescription","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"lifecycle_msgs","type":"GetAvailableTransitions_Response","stringUpperBound":null,"isPrimitiveType":false},"msgName":"GetAvailableTransitions_Response"};
  }
  hasMember(name) {
    let memberNames = ["available_transitions"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class GetAvailableTransitions_ResponseArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to GetAvailableTransitions_ResponseArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to GetAvailableTransitions_ResponseArrayWrapper.capacity setter');
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
    this._refArray = new GetAvailableTransitions_ResponseRefArray(size);
    this._refObject = new GetAvailableTransitions_ResponseRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new GetAvailableTransitions_ResponseWrapper());
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
    if (! (other instanceof GetAvailableTransitions_ResponseArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "GetAvailableTransitions_ResponseArrayWrapper".');
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
      GetAvailableTransitions_ResponseWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return GetAvailableTransitions_ResponseWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return GetAvailableTransitions_ResponseArrayWrapper;
  }
}
module.exports = GetAvailableTransitions_ResponseWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "available_transitions",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "lifecycle_msgs",
        "type": "TransitionDescription",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "lifecycle_msgs",
    "type": "GetAvailableTransitions_Response",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "GetAvailableTransitions_Response"
}
*/