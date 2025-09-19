var lib = function(exports) {
  "use strict";
  (function() {
    function market1() {
      console.log("market1");
    }
    exports.market1 = market1;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
  })();
  return exports;
}({});
