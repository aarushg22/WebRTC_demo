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
const StringRefStruct = primitiveTypes.string;
const StringRefArray = ArrayType(StringRefStruct);
const StringRefStructArray = StructType({
  data: StringRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class StringWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new StringRefStruct(other._refObject.toObject());
      this._dataIntialized = true;
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new StringRefStruct();
    this._dataIntialized = false;
    primitiveTypes.initString(this._refObject);
  }
  static createFromRefObject(refObject) {
    let self = new StringWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new StringArrayWrapper;
  }
  static get ArrayType() {
    return StringArrayWrapper;
  }
  static get refObjectArrayType() {
    return StringRefStructArray
  }
  static get refObjectType() {
    return StringRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._dataIntialized) {
        throw new TypeError('Invalid argument: data in String');
      }
    }
    if (own) {
      primitiveTypes.initString(this._refObject.ref(), own);
    }
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._dataIntialized = true;
    this._refObject.data = refObject.data;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    deallocator.freeStructMember(refObject, StringWrapper.refObjectType, 'data');
  }
  static destoryRawROS(msg) {
    StringWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'std_msgs', subFolder: 'msg', interfaceName: 'String'};
  }
  static isPrimitive() {
    return true;
  }
  static get isROSArray() {
    return false;
  }
  get refObject() {
    return this._refObject;
  }
  get data() {
    if (!this._dataIntialized) {
      return undefined;
    }
    return this._refObject.data;
  }
  set data(value) {
    this._dataIntialized = true;
    this._refObject.size = value.length;
    this._refObject.capacity = value.length + 1;
    this._refObject.data = value;
  }
  copyRefObject(refObject) {
    this._refObject = new StringRefStruct(refObject.toObject());
    this._dataIntialized = true;
  }
  copy(other) {
    this._refObject = new StringRefStruct(other._refObject.toObject());
    this._dataIntialized = true;
  }
  static get classType() {
    return StringWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"data","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"std_msgs","type":"String","stringUpperBound":null,"isPrimitiveType":false},"msgName":"String"};
  }
  hasMember(name) {
    let memberNames = ["data"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class StringArrayWrapper {
  constructor(size = 0) {
    this._resize(size);
  }
  toRawROS() {
    return this._refObject.ref();
  }
  fill(values) {
    // Now for primitive arrays, only string/bool/int64/uint64 array drops here.
    const length = values.length;
    this._resize(length);
    for (let i = 0; i < length; ++i) {
      let wrapper = new StringWrapper();
      wrapper.data = values[i];
      this._wrappers[i] = wrapper;
    }
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
      throw new TypeError('Invalid argument: should provide a number to StringArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to StringArrayWrapper.capacity setter');
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
    this._refArray = new StringRefArray(size);
    this._refObject = new StringRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new StringWrapper());
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
    if (! (other instanceof StringArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "StringArrayWrapper".');
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
      StringWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return StringWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return StringArrayWrapper;
  }
}
module.exports = StringWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "data",
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
    }
  ],
  "baseType": {
    "pkgName": "std_msgs",
    "type": "String",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "String"
}
*/