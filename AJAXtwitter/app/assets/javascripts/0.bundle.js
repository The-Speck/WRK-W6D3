(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class FollowToggle {
  constructor($el) {
    debugger
    this.userId = $el.data("");
    this.followState = $el.data("");
    
    $el.on("click",(event) => {
      event.preventDefault();
    });
  }
}

module.exports = FollowToggle;

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map