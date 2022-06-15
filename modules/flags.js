function setFlags(event) {
    if (event.target.src.search("desktop_polymer") <= -1)
        return;

    // icons
    yt.config_.EXPERIMENT_FLAGS.kevlar_system_icons = false;
    // watch
    yt.config_.EXPERIMENT_FLAGS.kevlar_watch_color_update = false;
    // misc
    yt.config_.EXPERIMENT_FLAGS.render_unicode_emojis_as_small_images = true;
    yt.config_.EXPERIMENT_FLAGS.kevlar_unavailable_video_error_ui_client = false;
    // player
    yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false;
}

(function() {
    document.addEventListener("beforescriptexecute", setFlags);
    document.documentElement.removeAttribute("system-icons");
})();
