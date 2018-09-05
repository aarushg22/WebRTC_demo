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
const HeaderWrapper = require('../../generated/std_msgs/std_msgs__msg__Header.js');
const Vector3Wrapper = require('../../generated/geometry_msgs/geometry_msgs__msg__Vector3.js');
const Vector3StampedRefStruct = StructType({
  header: HeaderWrapper.refObjectType,
  vector: Vector3Wrapper.refObjectType,
});
const Vector3StampedRefArray = ArrayType(Vector3StampedRefStruct);
const Vector3StampedRefStructArray = StructType({
  data: Vector3StampedRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class Vector3StampedWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new Vector3StampedRefStruct(other._refObject.toObject());
      this._wrapperFields.header =  new HeaderWrapper(other._wrapperFields.header);
      this._wrapperFields.vector =  new Vector3Wrapper(other._wrapperFields.vector);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new Vector3StampedRefStruct();
    this._wrapperFields.header = new HeaderWrapper();
    this._wrapperFields.vector = new Vector3Wrapper();
  }
  static createFromRefObject(refObject) {
    let self = new Vector3StampedWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new Vector3StampedArrayWrapper;
  }
  static get ArrayType() {
    return Vector3StampedArrayWrapper;
  }
  static get refObjectArrayType() {
    return Vector3StampedRefStructArray
  }
  static get refObjectType() {
    return Vector3StampedRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.header.freeze(own, checkConsistency);
    this._refObject.header = this._wrapperFields.header.refObject;
    this._wrapperFields.vector.freeze(own, checkConsistency);
    this._refObject.vector = this._wrapperFields.vector.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.header.copyRefObject(refObject.header);
    this._wrapperFields.vector.copyRefObject(refObject.vector);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    HeaderWrapper.freeStruct(refObject.header);
    Vector3Wrapper.freeStruct(refObject.vector);
  }
  static destoryRawROS(msg) {
    Vector3StampedWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'geometry_msgs', subFolder: 'msg', interfaceName: 'Vector3Stamped'};
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
  get header() {
    return this._wrapperFields.header;
  }
  set header(value) {
    this._wrapperFields.header.copy(value);
  }
  get vector() {
    return this._wrapperFields.vector;
  }
  set vector(value) {
    this._wrapperFields.vector.copy(value);
  }
  copyRefObject(refObject) {
    this._refObject = new Vector3StampedRefStruct(refObject.toObject());
    this._wrapperFields.header.copyRefObject(this._refObject.header);
    this._wrapperFields.vector.copyRefObject(this._refObject.vector);
  }
  copy(other) {
    this._refObject = new Vector3StampedRefStruct(other._refObject.toObject());
    this._wrapperFields.header.copy(other._wrapperFields.header);
    this._wrapperFields.vector.copy(other._wrapperFields.vector);
  }
  static get classType() {
    return Vector3StampedWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"header","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"Header","stringUpperBound":null,"isPrimitiveType":false}},{"name":"vector","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"geometry_msgs","type":"Vector3","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"geometry_msgs","type":"Vector3Stamped","stringUpperBound":null,"isPrimitiveType":false},"msgName":"Vector3Stamped"};
  }
  hasMember(name) {
    let memberNames = ["header","vector"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class Vector3StampedArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to Vector3StampedArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to Vector3StampedArrayWrapper.capacity setter');
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
    this._refArray = new Vector3StampedRefArray(size);
    this._refObject = new Vector3StampedRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new Vector3StampedWrapper());
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
    if (! (other instanceof Vector3StampedArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "Vector3StampedArrayWrapper".');
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
      Vector3StampedWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return Vector3StampedWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return Vector3StampedArrayWrapper;
  }
}
module.exports = Vector3StampedWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "header",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "std_msgs",
        "type": "Header",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "vector",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "geometry_msgs",
        "type": "Vector3",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "geometry_msgs",
    "type": "Vector3Stamped",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "Vector3Stamped"
}
*/
