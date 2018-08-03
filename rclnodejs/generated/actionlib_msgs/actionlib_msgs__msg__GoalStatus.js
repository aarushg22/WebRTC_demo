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
const GoalIDWrapper = require('../../generated/actionlib_msgs/actionlib_msgs__msg__GoalID.js');
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const GoalStatusRefStruct = StructType({
  goal_id: GoalIDWrapper.refObjectType,
  status: primitiveTypes.uint8,
  text: primitiveTypes.string,
});
const GoalStatusRefArray = ArrayType(GoalStatusRefStruct);
const GoalStatusRefStructArray = StructType({
  data: GoalStatusRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class GoalStatusWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new GoalStatusRefStruct(other._refObject.toObject());
      this._wrapperFields.goal_id =  new GoalIDWrapper(other._wrapperFields.goal_id);
      this._statusIntialized = true;
      this._textIntialized = true;
      this._wrapperFields.text =  new StringWrapper(other._wrapperFields.text);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new GoalStatusRefStruct();
    this._wrapperFields.goal_id = new GoalIDWrapper();
    this._statusIntialized = false;
    this._textIntialized = false;
    this._wrapperFields.text = new StringWrapper();
  }
  static createFromRefObject(refObject) {
    let self = new GoalStatusWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new GoalStatusArrayWrapper;
  }
  static get ArrayType() {
    return GoalStatusArrayWrapper;
  }
  static get refObjectArrayType() {
    return GoalStatusRefStructArray
  }
  static get refObjectType() {
    return GoalStatusRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._statusIntialized) {
        throw new TypeError('Invalid argument: status in GoalStatus');
      }
      if (!this._textIntialized) {
        throw new TypeError('Invalid argument: text in GoalStatus');
      }
    }
    this._wrapperFields.goal_id.freeze(own, checkConsistency);
    this._refObject.goal_id = this._wrapperFields.goal_id.refObject;
    if (own) {
      this._wrapperFields.text.freeze(own, checkConsistency);
    }
    this._refObject.text = this._wrapperFields.text.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.goal_id.copyRefObject(refObject.goal_id);
    this._statusIntialized = true;
    this._refObject.status = refObject.status;
    this._textIntialized = true;
    this._wrapperFields.text.data = refObject.text.data;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    GoalIDWrapper.freeStruct(refObject.goal_id);
    StringWrapper.freeStruct(refObject.text);
  }
  static destoryRawROS(msg) {
    GoalStatusWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'actionlib_msgs', subFolder: 'msg', interfaceName: 'GoalStatus'};
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
  get goal_id() {
    return this._wrapperFields.goal_id;
  }
  set goal_id(value) {
    this._wrapperFields.goal_id.copy(value);
  }
  get status() {
    if (!this._statusIntialized) {
      return undefined;
    }
    return this._refObject.status;
  }
  set status(value) {
    this._statusIntialized = true;
    this._refObject.status = value;
  }
  get text() {
    if (!this._textIntialized) {
      return undefined;
    }
    return this._wrapperFields.text.data;
  }
  set text(value) {
    this._textIntialized = true;
    this._wrapperFields.text.data = value;
  }
  copyRefObject(refObject) {
    this._refObject = new GoalStatusRefStruct(refObject.toObject());
    this._wrapperFields.goal_id.copyRefObject(this._refObject.goal_id);
    this._statusIntialized = true;
    this._textIntialized = true;
    this._wrapperFields.text.copyRefObject(this._refObject.text);
  }
  copy(other) {
    this._refObject = new GoalStatusRefStruct(other._refObject.toObject());
    this._wrapperFields.goal_id.copy(other._wrapperFields.goal_id);
    this._statusIntialized = true;
    this._textIntialized = true;
    this._wrapperFields.text.copy(other._wrapperFields.text);
  }
  static get classType() {
    return GoalStatusWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[{"type":"uint8","name":"PENDING","value":0},{"type":"uint8","name":"ACTIVE","value":1},{"type":"uint8","name":"PREEMPTED","value":2},{"type":"uint8","name":"SUCCEEDED","value":3},{"type":"uint8","name":"ABORTED","value":4},{"type":"uint8","name":"REJECTED","value":5},{"type":"uint8","name":"PREEMPTING","value":6},{"type":"uint8","name":"RECALLING","value":7},{"type":"uint8","name":"RECALLED","value":8},{"type":"uint8","name":"LOST","value":9}],"fields":[{"name":"goal_id","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"actionlib_msgs","type":"GoalID","stringUpperBound":null,"isPrimitiveType":false}},{"name":"status","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint8","stringUpperBound":null,"isPrimitiveType":true}},{"name":"text","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"actionlib_msgs","type":"GoalStatus","stringUpperBound":null,"isPrimitiveType":false},"msgName":"GoalStatus"};
  }
  hasMember(name) {
    let memberNames = ["goal_id","status","text"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class GoalStatusArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to GoalStatusArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to GoalStatusArrayWrapper.capacity setter');
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
    this._refArray = new GoalStatusRefArray(size);
    this._refObject = new GoalStatusRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new GoalStatusWrapper());
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
    if (! (other instanceof GoalStatusArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "GoalStatusArrayWrapper".');
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
      GoalStatusWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return GoalStatusWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return GoalStatusArrayWrapper;
  }
}
// Define constants (10 in total)
Object.defineProperty(GoalStatusWrapper, "PENDING", {value: 0, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "ACTIVE", {value: 1, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "PREEMPTED", {value: 2, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "SUCCEEDED", {value: 3, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "ABORTED", {value: 4, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "REJECTED", {value: 5, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "PREEMPTING", {value: 6, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "RECALLING", {value: 7, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "RECALLED", {value: 8, writable: false, enumerable: true, configurable: true});
Object.defineProperty(GoalStatusWrapper, "LOST", {value: 9, writable: false, enumerable: true, configurable: true});
module.exports = GoalStatusWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [
    {
      "type": "uint8",
      "name": "PENDING",
      "value": 0
    },
    {
      "type": "uint8",
      "name": "ACTIVE",
      "value": 1
    },
    {
      "type": "uint8",
      "name": "PREEMPTED",
      "value": 2
    },
    {
      "type": "uint8",
      "name": "SUCCEEDED",
      "value": 3
    },
    {
      "type": "uint8",
      "name": "ABORTED",
      "value": 4
    },
    {
      "type": "uint8",
      "name": "REJECTED",
      "value": 5
    },
    {
      "type": "uint8",
      "name": "PREEMPTING",
      "value": 6
    },
    {
      "type": "uint8",
      "name": "RECALLING",
      "value": 7
    },
    {
      "type": "uint8",
      "name": "RECALLED",
      "value": 8
    },
    {
      "type": "uint8",
      "name": "LOST",
      "value": 9
    }
  ],
  "fields": [
    {
      "name": "goal_id",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "actionlib_msgs",
        "type": "GoalID",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "status",
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
    },
    {
      "name": "text",
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
    "pkgName": "actionlib_msgs",
    "type": "GoalStatus",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "GoalStatus"
}
*/