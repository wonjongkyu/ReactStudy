"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.mul = mul;
// 외부에 공개할 함수를 정의합니다.
function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}