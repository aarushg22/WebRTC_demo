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
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const PointWrapper = require('../../generated/geometry_msgs/geometry_msgs__msg__Point.js');
const ColorRGBAWrapper = require('../../generated/std_msgs/std_msgs__msg__ColorRGBA.js');
const DurationWrapper = require('../../generated/builtin_interfaces/builtin_interfaces__msg__Duration.js');
const ImageMarkerRefStruct = StructType({
  header: HeaderWrapper.refObjectType,
  ns: primitiveTypes.string,
  id: primitiveTypes.int32,
  type: primitiveTypes.int32,
  action: primitiveTypes.int32,
  position: PointWrapper.refObjectType,
  scale: primitiveTypes.float32,
  outline_color: ColorRGBAWrapper.refObjectType,
  filled: primitiveTypes.uint8,
  fill_color: ColorRGBAWrapper.refObjectType,
  lifetime: DurationWrapper.refObjectType,
  points: PointWrapper.refObjectArrayType,
  outline_colors: ColorRGBAWrapper.refObjectArrayType,
});
const ImageMarkerRefArray = ArrayType(ImageMarkerRefStruct);
const ImageMarkerRefStructArray = StructType({
  data: ImageMarkerRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class ImageMarkerWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new ImageMarkerRefStruct(other._refObject.toObject());
      this._wrapperFields.header =  new HeaderWrapper(other._wrapperFields.header);
      this._nsIntialized = true;
      this._wrapperFields.ns =  new StringWrapper(other._wrapperFields.ns);
      this._idIntialized = true;
      this._typeIntialized = true;
      this._actionIntialized = true;
      this._wrapperFields.position =  new PointWrapper(other._wrapperFields.position);
      this._scaleIntialized = true;
      this._wrapperFields.outline_color =  new ColorRGBAWrapper(other._wrapperFields.outline_color);
      this._filledIntialized = true;
      this._wrapperFields.fill_color =  new ColorRGBAWrapper(other._wrapperFields.fill_color);
      this._wrapperFields.lifetime =  new DurationWrapper(other._wrapperFields.lifetime);
      this._wrapperFields.points = PointWrapper.createArray();
      this._wrapperFields.points.copy(other._wrapperFields.points);
      this._wrapperFields.outline_colors = ColorRGBAWrapper.createArray();
      this._wrapperFields.outline_colors.copy(other._wrapperFields.outline_colors);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new ImageMarkerRefStruct();
    this._wrapperFields.header = new HeaderWrapper();
    this._nsIntialized = false;
    this._wrapperFields.ns = new StringWrapper();
    this._idIntialized = false;
    this._typeIntialized = false;
    this._actionIntialized = false;
    this._wrapperFields.position = new PointWrapper();
    this._scaleIntialized = false;
    this._wrapperFields.outline_color = new ColorRGBAWrapper();
    this._filledIntialized = false;
    this._wrapperFields.fill_color = new ColorRGBAWrapper();
    this._wrapperFields.lifetime = new DurationWrapper();
    this._wrapperFields.points = PointWrapper.createArray();
    this._wrapperFields.outline_colors = ColorRGBAWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new ImageMarkerWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new ImageMarkerArrayWrapper;
  }
  static get ArrayType() {
    return ImageMarkerArrayWrapper;
  }
  static get refObjectArrayType() {
    return ImageMarkerRefStructArray
  }
  static get refObjectType() {
    return ImageMarkerRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._nsIntialized) {
        throw new TypeError('Invalid argument: ns in ImageMarker');
      }
      if (!this._idIntialized) {
        throw new TypeError('Invalid argument: id in ImageMarker');
      }
      if (!this._typeIntialized) {
        throw new TypeError('Invalid argument: type in ImageMarker');
      }
      if (!this._actionIntialized) {
        throw new TypeError('Invalid argument: action in ImageMarker');
      }
      if (!this._scaleIntialized) {
        throw new TypeError('Invalid argument: scale in ImageMarker');
      }
      if (!this._filledIntialized) {
        throw new TypeError('Invalid argument: filled in ImageMarker');
      }
    }
    this._wrapperFields.header.freeze(own, checkConsistency);
    this._refObject.header = this._wrapperFields.header.refObject;
    if (own) {
      this._wrapperFields.ns.freeze(own, checkConsistency);
    }
    this._refObject.ns = this._wrapperFields.ns.refObject;
    this._wrapperFields.position.freeze(own, checkConsistency);
    this._refObject.position = this._wrapperFields.position.refObject;
    this._wrapperFields.outline_color.freeze(own, checkConsistency);
    this._refObject.outline_color = this._wrapperFields.outline_color.refObject;
    this._wrapperFields.fill_color.freeze(own, checkConsistency);
    this._refObject.fill_color = this._wrapperFields.fill_color.refObject;
    this._wrapperFields.lifetime.freeze(own, checkConsistency);
    this._refObject.lifetime = this._wrapperFields.lifetime.refObject;
    this._wrapperFields.points.freeze(own, checkConsistency);
    this._refObject.points = this._wrapperFields.points.refObject;
    this._wrapperFields.outline_colors.freeze(own, checkConsistency);
    this._refObject.outline_colors = this._wrapperFields.outline_colors.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.header.copyRefObject(refObject.header);
    this._nsIntialized = true;
    this._wrapperFields.ns.data = refObject.ns.data;
    this._idIntialized = true;
    this._refObject.id = refObject.id;
    this._typeIntialized = true;
    this._refObject.type = refObject.type;
    this._actionIntialized = true;
    this._refObject.action = refObject.action;
    this._wrapperFields.position.copyRefObject(refObject.position);
    this._scaleIntialized = true;
    this._refObject.scale = refObject.scale;
    this._wrapperFields.outline_color.copyRefObject(refObject.outline_color);
    this._filledIntialized = true;
    this._refObject.filled = refObject.filled;
    this._wrapperFields.fill_color.copyRefObject(refObject.fill_color);
    this._wrapperFields.lifetime.copyRefObject(refObject.lifetime);
    this._wrapperFields.points.copyRefObject(refObject.points);
    this._wrapperFields.outline_colors.copyRefObject(refObject.outline_colors);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    HeaderWrapper.freeStruct(refObject.header);
    StringWrapper.freeStruct(refObject.ns);
    PointWrapper.freeStruct(refObject.position);
    ColorRGBAWrapper.freeStruct(refObject.outline_color);
    ColorRGBAWrapper.freeStruct(refObject.fill_color);
    DurationWrapper.freeStruct(refObject.lifetime);
    if (refObject.points.size != 0) {
      PointWrapper.ArrayType.freeArray(refObject.points);
      if (PointWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.points, PointWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.points, PointWrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.outline_colors.size != 0) {
      ColorRGBAWrapper.ArrayType.freeArray(refObject.outline_colors);
      if (ColorRGBAWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.outline_colors, ColorRGBAWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.outline_colors, ColorRGBAWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    ImageMarkerWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'visualization_msgs', subFolder: 'msg', interfaceName: 'ImageMarker'};
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
  get ns() {
    if (!this._nsIntialized) {
      return undefined;
    }
    return this._wrapperFields.ns.data;
  }
  set ns(value) {
    this._nsIntialized = true;
    this._wrapperFields.ns.data = value;
  }
  get id() {
    if (!this._idIntialized) {
      return undefined;
    }
    return this._refObject.id;
  }
  set id(value) {
    this._idIntialized = true;
    this._refObject.id = value;
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
  get action() {
    if (!this._actionIntialized) {
      return undefined;
    }
    return this._refObject.action;
  }
  set action(value) {
    this._actionIntialized = true;
    this._refObject.action = value;
  }
  get position() {
    return this._wrapperFields.position;
  }
  set position(value) {
    this._wrapperFields.position.copy(value);
  }
  get scale() {
    if (!this._scaleIntialized) {
      return undefined;
    }
    return this._refObject.scale;
  }
  set scale(value) {
    this._scaleIntialized = true;
    this._refObject.scale = value;
  }
  get outline_color() {
    return this._wrapperFields.outline_color;
  }
  set outline_color(value) {
    this._wrapperFields.outline_color.copy(value);
  }
  get filled() {
    if (!this._filledIntialized) {
      return undefined;
    }
    return this._refObject.filled;
  }
  set filled(value) {
    this._filledIntialized = true;
    this._refObject.filled = value;
  }
  get fill_color() {
    return this._wrapperFields.fill_color;
  }
  set fill_color(value) {
    this._wrapperFields.fill_color.copy(value);
  }
  get lifetime() {
    return this._wrapperFields.lifetime;
  }
  set lifetime(value) {
    this._wrapperFields.lifetime.copy(value);
  }
  get points() {
    return this._wrapperFields.points;
  }
  set points(value) {
    this._wrapperFields.points.fill(value);
  }
  get outline_colors() {
    return this._wrapperFields.outline_colors;
  }
  set outline_colors(value) {
    this._wrapperFields.outline_colors.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new ImageMarkerRefStruct(refObject.toObject());
    this._wrapperFields.header.copyRefObject(this._refObject.header);
    this._nsIntialized = true;
    this._wrapperFields.ns.copyRefObject(this._refObject.ns);
    this._idIntialized = true;
    this._typeIntialized = true;
    this._actionIntialized = true;
    this._wrapperFields.position.copyRefObject(this._refObject.position);
    this._scaleIntialized = true;
    this._wrapperFields.outline_color.copyRefObject(this._refObject.outline_color);
    this._filledIntialized = true;
    this._wrapperFields.fill_color.copyRefObject(this._refObject.fill_color);
    this._wrapperFields.lifetime.copyRefObject(this._refObject.lifetime);
    this._wrapperFields.points.copyRefObject(this._refObject.points);
    this._wrapperFields.outline_colors.copyRefObject(this._refObject.outline_colors);
  }
  copy(other) {
    this._refObject = new ImageMarkerRefStruct(other._refObject.toObject());
    this._wrapperFields.header.copy(other._wrapperFields.header);
    this._nsIntialized = true;
    this._wrapperFields.ns.copy(other._wrapperFields.ns);
    this._idIntialized = true;
    this._typeIntialized = true;
    this._actionIntialized = true;
    this._wrapperFields.position.copy(other._wrapperFields.position);
    this._scaleIntialized = true;
    this._wrapperFields.outline_color.copy(other._wrapperFields.outline_color);
    this._filledIntialized = true;
    this._wrapperFields.fill_color.copy(other._wrapperFields.fill_color);
    this._wrapperFields.lifetime.copy(other._wrapperFields.lifetime);
    this._wrapperFields.points.copy(other._wrapperFields.points);
    this._wrapperFields.outline_colors.copy(other._wrapperFields.outline_colors);
  }
  static get classType() {
    return ImageMarkerWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[{"type":"uint8","name":"CIRCLE","value":0},{"type":"uint8","name":"LINE_STRIP","value":1},{"type":"uint8","name":"LINE_LIST","value":2},{"type":"uint8","name":"POLYGON","value":3},{"type":"uint8","name":"POINTS","value":4},{"type":"uint8","name":"ADD","value":0},{"type":"uint8","name":"REMOVE","value":1}],"fields":[{"name":"header","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"Header","stringUpperBound":null,"isPrimitiveType":false}},{"name":"ns","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"id","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"int32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"type","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"int32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"action","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"int32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"position","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"geometry_msgs","type":"Point","stringUpperBound":null,"isPrimitiveType":false}},{"name":"scale","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"float32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"outline_color","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"ColorRGBA","stringUpperBound":null,"isPrimitiveType":false}},{"name":"filled","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint8","stringUpperBound":null,"isPrimitiveType":true}},{"name":"fill_color","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"ColorRGBA","stringUpperBound":null,"isPrimitiveType":false}},{"name":"lifetime","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"builtin_interfaces","type":"Duration","stringUpperBound":null,"isPrimitiveType":false}},{"name":"points","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"geometry_msgs","type":"Point","stringUpperBound":null,"isPrimitiveType":false}},{"name":"outline_colors","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"std_msgs","type":"ColorRGBA","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"visualization_msgs","type":"ImageMarker","stringUpperBound":null,"isPrimitiveType":false},"msgName":"ImageMarker"};
  }
  hasMember(name) {
    let memberNames = ["header","ns","id","type","action","position","scale","outline_color","filled","fill_color","lifetime","points","outline_colors"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class ImageMarkerArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to ImageMarkerArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to ImageMarkerArrayWrapper.capacity setter');
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
    this._refArray = new ImageMarkerRefArray(size);
    this._refObject = new ImageMarkerRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new ImageMarkerWrapper());
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
    if (! (other instanceof ImageMarkerArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "ImageMarkerArrayWrapper".');
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
      ImageMarkerWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return ImageMarkerWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return ImageMarkerArrayWrapper;
  }
}
// Define constants (7 in total)
Object.defineProperty(ImageMarkerWrapper, "CIRCLE", {value: 0, writable: false, enumerable: true, configurable: true});
Object.defineProperty(ImageMarkerWrapper, "LINE_STRIP", {value: 1, writable: false, enumerable: true, configurable: true});
Object.defineProperty(ImageMarkerWrapper, "LINE_LIST", {value: 2, writable: false, enumerable: true, configurable: true});
Object.defineProperty(ImageMarkerWrapper, "POLYGON", {value: 3, writable: false, enumerable: true, configurable: true});
Object.defineProperty(ImageMarkerWrapper, "POINTS", {value: 4, writable: false, enumerable: true, configurable: true});
Object.defineProperty(ImageMarkerWrapper, "ADD", {value: 0, writable: false, enumerable: true, configurable: true});
Object.defineProperty(ImageMarkerWrapper, "REMOVE", {value: 1, writable: false, enumerable: true, configurable: true});
module.exports = ImageMarkerWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [
    {
      "type": "uint8",
      "name": "CIRCLE",
      "value": 0
    },
    {
      "type": "uint8",
      "name": "LINE_STRIP",
      "value": 1
    },
    {
      "type": "uint8",
      "name": "LINE_LIST",
      "value": 2
    },
    {
      "type": "uint8",
      "name": "POLYGON",
      "value": 3
    },
    {
      "type": "uint8",
      "name": "POINTS",
      "value": 4
    },
    {
      "type": "uint8",
      "name": "ADD",
      "value": 0
    },
    {
      "type": "uint8",
      "name": "REMOVE",
      "value": 1
    }
  ],
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
      "name": "ns",
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
      "name": "id",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "int32",
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
        "type": "int32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "action",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "int32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "position",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "geometry_msgs",
        "type": "Point",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "scale",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "float32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "outline_color",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "std_msgs",
        "type": "ColorRGBA",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "filled",
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
      "name": "fill_color",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "std_msgs",
        "type": "ColorRGBA",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "lifetime",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "builtin_interfaces",
        "type": "Duration",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "points",
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
    },
    {
      "name": "outline_colors",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "std_msgs",
        "type": "ColorRGBA",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "visualization_msgs",
    "type": "ImageMarker",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "ImageMarker"
}
*/