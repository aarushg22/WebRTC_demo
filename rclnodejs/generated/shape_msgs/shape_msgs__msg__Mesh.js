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
const MeshTriangleWrapper = require('../../generated/shape_msgs/shape_msgs__msg__MeshTriangle.js');
const PointWrapper = require('../../generated/geometry_msgs/geometry_msgs__msg__Point.js');
const MeshRefStruct = StructType({
  triangles: MeshTriangleWrapper.refObjectArrayType,
  vertices: PointWrapper.refObjectArrayType,
});
const MeshRefArray = ArrayType(MeshRefStruct);
const MeshRefStructArray = StructType({
  data: MeshRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class MeshWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new MeshRefStruct(other._refObject.toObject());
      this._wrapperFields.triangles = MeshTriangleWrapper.createArray();
      this._wrapperFields.triangles.copy(other._wrapperFields.triangles);
      this._wrapperFields.vertices = PointWrapper.createArray();
      this._wrapperFields.vertices.copy(other._wrapperFields.vertices);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new MeshRefStruct();
    this._wrapperFields.triangles = MeshTriangleWrapper.createArray();
    this._wrapperFields.vertices = PointWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new MeshWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new MeshArrayWrapper;
  }
  static get ArrayType() {
    return MeshArrayWrapper;
  }
  static get refObjectArrayType() {
    return MeshRefStructArray
  }
  static get refObjectType() {
    return MeshRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.triangles.freeze(own, checkConsistency);
    this._refObject.triangles = this._wrapperFields.triangles.refObject;
    this._wrapperFields.vertices.freeze(own, checkConsistency);
    this._refObject.vertices = this._wrapperFields.vertices.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.triangles.copyRefObject(refObject.triangles);
    this._wrapperFields.vertices.copyRefObject(refObject.vertices);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.triangles.size != 0) {
      MeshTriangleWrapper.ArrayType.freeArray(refObject.triangles);
      if (MeshTriangleWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.triangles, MeshTriangleWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.triangles, MeshTriangleWrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.vertices.size != 0) {
      PointWrapper.ArrayType.freeArray(refObject.vertices);
      if (PointWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.vertices, PointWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.vertices, PointWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    MeshWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'shape_msgs', subFolder: 'msg', interfaceName: 'Mesh'};
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
  get triangles() {
    return this._wrapperFields.triangles;
  }
  set triangles(value) {
    this._wrapperFields.triangles.fill(value);
  }
  get vertices() {
    return this._wrapperFields.vertices;
  }
  set vertices(value) {
    this._wrapperFields.vertices.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new MeshRefStruct(refObject.toObject());
    this._wrapperFields.triangles.copyRefObject(this._refObject.triangles);
    this._wrapperFields.vertices.copyRefObject(this._refObject.vertices);
  }
  copy(other) {
    this._refObject = new MeshRefStruct(other._refObject.toObject());
    this._wrapperFields.triangles.copy(other._wrapperFields.triangles);
    this._wrapperFields.vertices.copy(other._wrapperFields.vertices);
  }
  static get classType() {
    return MeshWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"triangles","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"shape_msgs","type":"MeshTriangle","stringUpperBound":null,"isPrimitiveType":false}},{"name":"vertices","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"geometry_msgs","type":"Point","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"shape_msgs","type":"Mesh","stringUpperBound":null,"isPrimitiveType":false},"msgName":"Mesh"};
  }
  hasMember(name) {
    let memberNames = ["triangles","vertices"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class MeshArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to MeshArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to MeshArrayWrapper.capacity setter');
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
    this._refArray = new MeshRefArray(size);
    this._refObject = new MeshRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new MeshWrapper());
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
    if (! (other instanceof MeshArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "MeshArrayWrapper".');
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
      MeshWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return MeshWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return MeshArrayWrapper;
  }
}
module.exports = MeshWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "triangles",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "shape_msgs",
        "type": "MeshTriangle",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "vertices",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "geometry_msgs",
        "type": "Point",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "shape_msgs",
    "type": "Mesh",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "Mesh"
}
*/
