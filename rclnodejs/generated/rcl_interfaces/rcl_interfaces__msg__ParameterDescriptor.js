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
const ParameterDescriptorRefStruct = StructType({
  name: primitiveTypes.string,
  type: primitiveTypes.uint8,
});
const ParameterDescriptorRefArray = ArrayType(ParameterDescriptorRefStruct);
const ParameterDescriptorRefStructArray = StructType({
  data: ParameterDescriptorRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class ParameterDescriptorWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new ParameterDescriptorRefStruct(other._refObject.toObject());
      this._nameIntialized = true;
      this._wrapperFields.name =  new StringWrapper(other._wrapperFields.name);
      this._typeIntialized = true;
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new ParameterDescriptorRefStruct();
    this._nameIntialized = false;
    this._wrapperFields.name = new StringWrapper();
    this._typeIntialized = false;
  }
  static createFromRefObject(refObject) {
    let self = new ParameterDescriptorWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new ParameterDescriptorArrayWrapper;
  }
  static get ArrayType() {
    return ParameterDescriptorArrayWrapper;
  }
  static get refObjectArrayType() {
    return ParameterDescriptorRefStructArray
  }
  static get refObjectType() {
    return ParameterDescriptorRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._nameIntialized) {
        throw new TypeError('Invalid argument: name in ParameterDescriptor');
      }
      if (!this._typeIntialized) {
        throw new TypeError('Invalid argument: type in ParameterDescriptor');
      }
    }
    if (own) {
      this._wrapperFields.name.freeze(own, checkConsistency);
    }
    this._refObject.name = this._wrapperFields.name.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._nameIntialized = true;
    this._wrapperFields.name.data = refObject.name.data;
    this._typeIntialized = true;
    this._refObject.type = refObject.type;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    StringWrapper.freeStruct(refObject.name);
  }
  static destoryRawROS(msg) {
    ParameterDescriptorWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'rcl_interfaces', subFolder: 'msg', interfaceName: 'ParameterDescriptor'};
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
  get name() {
    if (!this._nameIntialized) {
      return undefined;
    }
    return this._wrapperFields.name.data;
  }
  set name(value) {
    this._nameIntialized = true;
    this._wrapperFields.name.data = value;
  }
  get type() {
    if (!this._typeIntialized) {
      return undefined;
    }
    return this._refObject.type;
  }
  set type(value) {
    this._typeIntialized = true;
    this._refObject.type = value;
  }
  copyRefObject(refObject) {
    this._refObject = new ParameterDescriptorRefStruct(refObject.toObject());
    this._nameIntialized = true;
    this._wrapperFields.name.copyRefObject(this._refObject.name);
    this._typeIntialized = true;
  }
  copy(other) {
    this._refObject = new ParameterDescriptorRefStruct(other._refObject.toObject());
    this._nameIntialized = true;
    this._wrapperFields.name.copy(other._wrapperFields.name);
    this._typeIntialized = true;
  }
  static get classType() {
    return ParameterDescriptorWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"name","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"type","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint8","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"rcl_interfaces","type":"ParameterDescriptor","stringUpperBound":null,"isPrimitiveType":false},"msgName":"ParameterDescriptor"};
  }
  hasMember(name) {
    let memberNames = ["name","type"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class ParameterDescriptorArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to ParameterDescriptorArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to ParameterDescriptorArrayWrapper.capacity setter');
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
    this._refArray = new ParameterDescriptorRefArray(size);
    this._refObject = new ParameterDescriptorRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new ParameterDescriptorWrapper());
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
    if (! (other instanceof ParameterDescriptorArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "ParameterDescriptorArrayWrapper".');
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
      ParameterDescriptorWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return ParameterDescriptorWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return ParameterDescriptorArrayWrapper;
  }
}
module.exports = ParameterDescriptorWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "name",
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
      "name": "type",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "uint8",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "rcl_interfaces",
    "type": "ParameterDescriptor",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "ParameterDescriptor"
}
*/
