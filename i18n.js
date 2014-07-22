define(["exports"], function(exports) {
    "use strict";

    exports.load = function(name, parentRequire, onload, config) {
        // Bail out early during build.
        if (config.isBuild) {
            return onload();
        }

        // require the namespace
        require(['i18n'], function loading(i18n) {
            i18n.require(name).then(function loaded() {
                onload();
            });
        });
    };

    exports.write = function(pluginName, moduleName, write) {
        write("");
    };
});
