// Copyright (c) 2017 Intel Corporation. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * @class - Class representing a common object in RCL.
 * @ignore
 */

class Entity {
  constructor(handle, typeClass, qos) {
    this._handle = handle;
    this._typeClass = typeClass;
    this._qos = qos;
  }

  get handle() {
    return this._handle;
  }

  get qos() {
    return this._qos;
  }

  get typeClass() {
    return this._typeClass;
  }
}

module.exports = Entity;
