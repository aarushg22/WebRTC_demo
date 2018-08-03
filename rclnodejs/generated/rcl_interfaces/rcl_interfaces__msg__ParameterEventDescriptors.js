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
const ParameterDescriptorWrapper = require('../../generated/rcl_interfaces/rcl_interfaces__msg__ParameterDescriptor.js');
const ParameterEventDescriptorsRefStruct = StructType({
  new_parameters: ParameterDescriptorWrapper.refObjectArrayType,
  changed_parameters: ParameterDescriptorWrapper.refObjectArrayType,
  deleted_parameters: ParameterDescriptorWrapper.refObjectArrayType,
});
const ParameterEventDescriptorsRefArray = ArrayType(ParameterEventDescriptorsRefStruct);
const ParameterEventDescriptorsRefStructArray = StructType({
  data: ParameterEventDescriptorsRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class ParameterEventDescriptorsWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new ParameterEventDescriptorsRefStruct(other._refObject.toObject());
      this._wrapperFields.new_parameters = ParameterDescriptorWrapper.createArray();
      this._wrapperFields.new_parameters.copy(other._wrapperFields.new_parameters);
      this._wrapperFields.changed_parameters = ParameterDescriptorWrapper.createArray();
      this._wrapperFields.changed_parameters.copy(other._wrapperFields.changed_parameters);
      this._wrapperFields.deleted_parameters = ParameterDescriptorWrapper.createArray();
      this._wrapperFields.deleted_parameters.copy(other._wrapperFields.deleted_parameters);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new ParameterEventDescriptorsRefStruct();
    this._wrapperFields.new_parameters = ParameterDescriptorWrapper.createArray();
    this._wrapperFields.changed_parameters = ParameterDescriptorWrapper.createArray();
    this._wrapperFields.deleted_parameters = ParameterDescriptorWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new ParameterEventDescriptorsWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new ParameterEventDescriptorsArrayWrapper;
  }
  static get ArrayType() {
    return ParameterEventDescriptorsArrayWrapper;
  }
  static get refObjectArrayType() {
    return ParameterEventDescriptorsRefStructArray
  }
  static get refObjectType() {
    return ParameterEventDescriptorsRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.new_parameters.freeze(own, checkConsistency);
    this._refObject.new_parameters = this._wrapperFields.new_parameters.refObject;
    this._wrapperFields.changed_parameters.freeze(own, checkConsistency);
    this._refObject.changed_parameters = this._wrapperFields.changed_parameters.refObject;
    this._wrapperFields.deleted_parameters.freeze(own, checkConsistency);
    this._refObject.deleted_parameters = this._wrapperFields.deleted_parameters.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.new_parameters.copyRefObject(refObject.new_parameters);
    this._wrapperFields.changed_parameters.copyRefObject(refObject.changed_parameters);
    this._wrapperFields.deleted_parameters.copyRefObject(refObject.deleted_parameters);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.new_parameters.size != 0) {
      ParameterDescriptorWrapper.ArrayType.freeArray(refObject.new_parameters);
      if (ParameterDescriptorWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.new_parameters, ParameterDescriptorWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.new_parameters, ParameterDescriptorWrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.changed_parameters.size != 0) {
      ParameterDescriptorWrapper.ArrayType.freeArray(refObject.changed_parameters);
      if (ParameterDescriptorWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.changed_parameters, ParameterDescriptorWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.changed_parameters, ParameterDescriptorWrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.deleted_parameters.size != 0) {
      ParameterDescriptorWrapper.ArrayType.freeArray(refObject.deleted_parameters);
      if (ParameterDescriptorWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.deleted_parameters, ParameterDescriptorWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.deleted_parameters, ParameterDescriptorWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    ParameterEventDescriptorsWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'rcl_interfaces', subFolder: 'msg', interfaceName: 'ParameterEventDescriptors'};
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
  get new_parameters() {
    return this._wrapperFields.new_parameters;
  }
  set new_parameters(value) {
    this._wrapperFields.new_parameters.fill(value);
  }
  get changed_parameters() {
    return this._wrapperFields.changed_parameters;
  }
  set changed_parameters(value) {
    this._wrapperFields.changed_parameters.fill(value);
  }
  get deleted_parameters() {
    return this._wrapperFields.deleted_parameters;
  }
  set deleted_parameters(value) {
    this._wrapperFields.deleted_parameters.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new ParameterEventDescriptorsRefStruct(refObject.toObject());
    this._wrapperFields.new_parameters.copyRefObject(this._refObject.new_parameters);
    this._wrapperFields.changed_parameters.copyRefObject(this._refObject.changed_parameters);
    this._wrapperFields.deleted_parameters.copyRefObject(this._refObject.deleted_parameters);
  }
  copy(other) {
    this._refObject = new ParameterEventDescriptorsRefStruct(other._refObject.toObject());
    this._wrapperFields.new_parameters.copy(other._wrapperFields.new_parameters);
    this._wrapperFields.changed_parameters.copy(other._wrapperFields.changed_parameters);
    this._wrapperFields.deleted_parameters.copy(other._wrapperFields.deleted_parameters);
  }
  static get classType() {
    return ParameterEventDescriptorsWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"new_parameters","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"rcl_interfaces","type":"ParameterDescriptor","stringUpperBound":null,"isPrimitiveType":false}},{"name":"changed_parameters","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"rcl_interfaces","type":"ParameterDescriptor","stringUpperBound":null,"isPrimitiveType":false}},{"name":"deleted_parameters","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"rcl_interfaces","type":"ParameterDescriptor","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"rcl_interfaces","type":"ParameterEventDescriptors","stringUpperBound":null,"isPrimitiveType":false},"msgName":"ParameterEventDescriptors"};
  }
  hasMember(name) {
    let memberNames = ["new_parameters","changed_parameters","deleted_parameters"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class ParameterEventDescriptorsArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to ParameterEventDescriptorsArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to ParameterEventDescriptorsArrayWrapper.capacity setter');
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
    this._refArray = new ParameterEventDescriptorsRefArray(size);
    this._refObject = new ParameterEventDescriptorsRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new ParameterEventDescriptorsWrapper());
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
    if (! (other instanceof ParameterEventDescriptorsArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "ParameterEventDescriptorsArrayWrapper".');
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
      ParameterEventDescriptorsWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return ParameterEventDescriptorsWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return ParameterEventDescriptorsArrayWrapper;
  }
}
module.exports = ParameterEventDescriptorsWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "new_parameters",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "rcl_interfaces",
        "type": "ParameterDescriptor",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "changed_parameters",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "rcl_interfaces",
        "type": "ParameterDescriptor",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "deleted_parameters",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "rcl_interfaces",
        "type": "ParameterDescriptor",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "rcl_interfaces",
    "type": "ParameterEventDescriptors",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "ParameterEventDescriptors"
}
*/