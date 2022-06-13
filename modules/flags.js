(function() {
  	'use strict'
    window['yt'] = window['yt'] || {};
    yt['config_'] = yt.config_ || {};
    yt.config_['EXPERIMENT_FLAGS'] = yt.config_.EXPERIMENT_FLAGS || {};

    var iv = setInterval(function() {
        yt.config_.EXPERIMENT_FLAGS.kevlar_updated_icons = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_system_icons = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_color_update = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_metadata_refresh = false;
     
    }, 1);

    var to = setTimeout(function() {
        clearInterval(iv);
    }, 1000)
})();
document.getElementsByTagName("html")[0].removeAttribute("system-icons");