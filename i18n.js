define(["exports", "i18n"], function(exports, i18n) {
  "use strict";

  exports.load = function(name, parentRequire, onload, config) {
    // Bail out early during build.
    if (config.isBuild) {
      return onload();
    }

    // require the namespace
    i18n.require(name).then(function loaded() {
        onload();
    });
  };

  exports.write = function(pluginName, moduleName, write) {
    write("");
  };
});
