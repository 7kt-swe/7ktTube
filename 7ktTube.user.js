// ==UserScript==
// @name			7ktTube | 2016 REDUX
// @namespace STILL_ALIVE
// @version 3.5.9
// @description Old YouTube 2016 Layout | Old watchpage | Change thumbnail & video player size | grayscale seen video thumbnails | Hide suggestion blocks, category/filter bars | Square profile-pictures | Disable hover thumbnail previews | and much more!
// @author 7KT-SWE
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACnVBMVEUAAAD////////94+PX19f+8fH/////////+fn83Nz////////////////////////////////////////////////////////////829vS0tL////////////////////////////////////////////////y8vLp6en95+f////////////sKCgAAADpCQnqDg7pBgbqCwvsHh7sICDsIyPtKirsJibrGhr1kZHyaGjrGBjnAAD81tbrHBz3oqLsJSXxX1/qEBDp6enxZGSysrIVFRX2k5PxWVnqEhK0tLT1gYHtLCzqFBTybW3wUlLtMDDtMjLz8/PuOzvqFxcHBwf95eX0iIjxYGDvQEDpAQF/f3/wU1PuNTX+7e394+PuODgfHx///f3+9PT6xMT4qKilpaX1i4v82dnvR0f/+vr+8vLj5OT2nJzzcnLzcHDwS0vvRETrFRXx8fH7z8/5urrsk5N2dnbxVlbwT08iIiL83d380dH7ycmqqqr1jo70fHx0dHT7JSX6+vr39/f/9vb+8/P+6ur83Nz71NTR0dH5tLT3paX2mZn1iIj1hYXxXFwFBQXNzc33r6/3n5+JiYmFhYV6enrzeHhJSUkiPDzpDw8LDAz95+f7zc36vr68vLyUlJTzdXVra2vyamo0NDTrJib8ICD5Hh4dHR0RERHf39/Y2Nj7zs7Gxsb6v7+2trbvra2Xl5eQkJDybGxeXl5XV1dMTExHR0c7OzsdNjYuLi4SLS38KiopKSn9/Pzv+vr839+8yMj5wMDxuLi4uLj4qqruqqqgoKB8fHwGICDyFxfsFhbV4uL7y8vyx8f6wMCvvb3tt7e3t7eur6+Yr6+OpaXuoKA2U1NRUVE0UVEYMTETMDDyKSkMJye13jY6AAAALHRSTlMAavLy8vJi9PLy4vru2L6UhGs1JRAI5VEb8vLo3qyqfHpIRUA/Eg/y8vJTHBug3AoAAAhOSURBVGjevZqF39JAGIDt7u5uD7fBSoeIM1GwwADBDmzB7u7u7u7u7u7Ov8WLsaAUnD4/f+x27rvnu727947vlkOlTL6qRYvkzxWjQaU8eirVz/WH5C9StFq+ejniKVsiPzDQu8ma7hpNmnQAmZC/RFlj+6UKgTg2NTHSBmRG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
// @icon64 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACNFBMVEUAAAD////////4rKyYmJj////3pqb7zMz4trb////////////////////////819f5wMD////////////83d36xMT5urqOjo7/////////////+Pj+8vL96+v95+f95eX84+O6urr4r6+qqqr3qKj////////////////sKCgAAADsJCTsKSnrICDpCgrrHh7qERHsIiLpBQX+8PDrGxvrGBjqDg7pBwfrFRURERH/+fn82Nh7e3vtLS3809PwXFztLi7pAADs7e381tb7zs7uMzPqDAz96urvR0f82trtMDD+8/PwUVHwS0v95+f3o6P4qan3oKDyamr/+/v+7u7zbW3xV1fvQ0M5OTnqCgrmAADn5+f7yMj6wcH6vLz2mZn2kZHzdHRhYWFaWlruPj7uOzvuODguLi7+9/f/9fXx8fH95ub95eX84OD7y8vExMT7w8O6urr3nJz0gIDwVFT/NDQJCwv94uL83t7V1dX70NC+vr62trb4rq6ZmZn2lZWKiopqampoaGjyZGTxXFxPT0//QUHuQEDtFhbe3t73trb1s7Nzi4v1iYmIiIj0g4N5eXmjc3PzcnJCQkL/OTkpKSkdHR39///t///u7u7q6urf39/IyMj6vr7NpaWkpKSQkJCBgYHzd3ewcnJubm7xZWWiZGTxYWFXV1cAGRkYGBjd+fn19fXh4eGsrKzQl5fHlpatgoKkfHy0dnaqa2tiYmJdXV3/RkYjPDwXMzP/MDD+KSmHIHNsAAAAKHRSTlMAv/Dw8Ljw8PDj05JnMQbw8NxdR/Dw8PC5Q0Lw8PDw8PDw8PDw3V5JgcnJaAAABWxJREFUWMOl14dX00AcB3D33nvvcZdc1tE0EUQboQXBKqVIbQUBBVRERMC999577733+uf8XdKkDa/aoN/3SJMr9+nl7jKum5khg3r372Fl+theVsbO7PGX9O89aEg3JyOHIyeXODsv0d8zfKRdf0R68REHWIuyZYRVfzD6VwANNoEBrrIdu3ft2rXpIAArsgMDWP0JKEMeA3AAZc94AAaiDLkCwF4PwEAAemcoX8lBdqADzw80odtrjmw+sWa1meebkDvjAOieAdgM9eeha7BtQis47sRuLpn7yJ3ufwD2m334eh4oizjuCLpnA/c8Amvgfw+iRQx4wHG30Y0dtw5Aya0dTR6BtawPGXBl5dXkcJ7luLPwkRVI9eEmBlw6y3ZY5nPcfM8A68OtNxhw9SqchXfA3YcMgHhvgbsPvzjAg64Da9mIO8ClLgMrt0K1XRaw4gq3tckj4O7DmxZwAi6r3V0F9ls3A2si7eW4896BVB9+tYE3cBregVQf7k8CUfSS4256BlLzcHMSaGLteds1wLx2VyaBRawTDsLBeegLj8BpqP8dQa6/4F5cR6+2cj+umaWnswLrSis2bNx+9+OHC+9bq6vvnHr09NGpVXc+Pf18srr63YULdxcUbN/YXJSzLjNwanm4viEYIPjyt6NHt6i6qh/fcnnLcdnc6vqvo0d/SgomgWBjQ/GhSG5nYHGYUllXVZ9PkgRBYeHTYhYIgiRJPlXVZc0IrnIDO30GT7DnEBynZelAEdas6t4JXWxJAx4aAcUv2/HrhKR+S/bL9rFLoMUpoIhX+WC42E74GI/t8KQ4bB+7w8dbHWBPHPuXoFRadAUnowZLEcqTBJyhCeccoEbD/nAasCAdgAHbngnAYrkD1Go43pEGNKcDOQgVZAYOOUC7htX6SKT2JFSuaKtZdk7iPQChSge4qOF8RdMSMdZ8w9BkNnEwUSAWIEi6jmEkoEyX1eSMkcMOsFy02rQQgDxBwsQH883a6gzIo7S+URRgMDW1IRb0+wkj9FjUBp7EXYAi7NlZWB2Qy3YWVmEegNZAWXR9rczztLwwF1WcjGkmUL/OBg6HXIDgK4KdErqNbSUAlkYR5KFGLyIz0ZgIgtqYYwOV/k7AAoRyAmIhQrn5Qo4zuEYJgmyAvwJZYf1bYQNLsgDrKw/DbNhmtMP3dWIZsmr4Soq8AgsSWjNc8XQZjLKUYHN2Of0rILkBaDG/AQANfnsjb3QwQCNdBJaaLQBATMSyA74/A6Vlbav+B7Bzkf4zUMqSWy66gErvwIbG/CDPJ6+zitRM9AxsUzUfD4J7Jh4SPQPNxKhcX7qOnYLeUGoD5RmAihJa5Uwkv9KcmgeVbD5SAI7l2kBdJ0AqgBaEEgU2kJegRQDQCPShkmBAOXXdD9q1TkAe7OwrQzYQPVOL2LVQB9tIfRVsYzLG/g4HqHUDvGY9txzASpXB24/VVRoMRPxZ+l2ZhZYjuPIkiYTCCHJmO2wCEiurQpCOkNhhPVN3KjpJ3ZV7w3NBtAa2uGZfzTk2RuKzlpYnRl2kbR/h97VF6uT2wqpDcUK0+pqWgtYzkpzPngvt1oJjIMwOxceAfIlSKhKCCQmpqohlSjVMNEplicIxgchUlWTqg/qYF+FEByYXXcsNknwSWp/sjpzccx8TrAi8tacdi8KiK7nsWyqFAO1KiEqrYdnnLDxbZQq658C5GG1s4Zla+hY2GJpuv57wfwh7S5EkeFyIBr8HKs1xLb4jhxtK8jEvwPc6e0lgCZkxd6FI11WfBF0QaFxSCzNz9lyrdmr5P3Hy1FFDh/btO3rYmH79ZvSEzOrD0pOlX78xw4aN7tt36KhpUyalLf9/A5nj/LZRV7kLAAAAAElFTkSuQmCC
// @license      GPL-3.0-only
// @homepageURL     https://7kttube.tk/
// @downloadURL	    https://7kttube.tk/install/7ktTube.user.js
// @updateURL	    https://7kttube.tk/install/7ktTube.user.js
// @supportURL      https://discord.gg/7WRjXHMfXJ
// @contributionURL https://www.paypal.com/donate/?hosted_button_id=2EJR4DLTR4Y7Q
// BEGIN MODULES
// @require https://raw.github.com/7kt-swe/7ktTube/main/modules/flags.js
// @require https://raw.github.com/7kt-swe/7ktTube/main/modules/home.js
// @require https://raw.github.com/7kt-swe/7ktTube/main/modules/settings.js
// @require https://raw.github.com/7kt-swe/7ktTube/main/modules/styles.js
// @require https://raw.github.com/7kt-swe/7ktTube/main/modules/watch.js
// END MODULES
// @require https://unpkg.com/vue@2.6.12/dist/vue.js
// @require https://unpkg.com/xfetch-js@0.5.0/dist/xfetch.min.js
// @match *://*.youtube.com/*
// @match *://*.youtu.be/*
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM.getValue
// @grant GM.setValue
// @grant GM_setValue
// @grant GM_registerMenuCommand
// @grant unsafeWindow
// @run-at document-start
// @compatible Chrome >=55 + Tampermonkey + Violentmonkey
// @compatible Firefox >=56 + Tampermonkey + Violentmonkey
// @compatible Opera + Tampermonkey + Violentmonkey
// @compatible Edge + Tampermonkey + Violentmonkey
// ==/UserScript==
/*jshint esversion: 6 */
// fix GM_addStyle

if (typeof GM_addStyle !== "function") {
    function GM_addStyle(css) {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        const head = document.getElementsByTagName('head')[0];
        if (head) head.appendChild(style);
        else document.documentElement.appendChild(style);
    }
}

function removeEl (){
    const yt_lib_custom = {
        removeEl: selector => {
            let e = document.querySelector(selector);
            e && e.parentNode.removeChild(e);
        },
        getQueryURL: (query, url) => new URLSearchParams((url ? new URL(url) : location).search).get(query)
    }

    // remove el
    window.addEventListener('load', () => {
        document.querySelectorAll("#masthead-ad,#root").forEach(e => e.remove()); // ad
        document.body.addEventListener("yt-navigate-finish", () => {
            yt_lib_custom.removeEl('ytd-miniplayer');
            yt_lib_custom.removeEl('ytd-miniplayer-ui');
            yt_lib_custom.removeEl('.ytp-miniplayer-button');

            /* Remove autoplay button in player
            yt_lib_custom.removeEl('div.ytp-autonav-toggle-button-container');
            yt_lib_custom.removeEl('div.ytp-autonav-toggle-button');
            */
            if (window.location.pathname != "/watch") yt_lib_custom.removeEl('#movie_player video');
        });
    });
}

function gen_aspect_fix() {
    "use strict";
    var vidfix = {
        inject: function(is_user_script) {
            var modules;
            var vidfix_api;
            var user_settings;
            var default_language;
            var send_settings_to_page;
            var receive_settings_from_page;
            modules = [];
            vidfix_api = {
                initializeBypasses: function() {
                    var ytd_watch;
                    var sizeBypass;
                    if (ytd_watch = document.querySelector("ytd-watch, ytd-watch-flexy")) {
                        sizeBypass = function() {
                            var width;
                            var height;
                            var movie_player;
                            if (!ytd_watch.theater && !document.querySelector(".iri-full-browser") && (movie_player = document.querySelector("#movie_player"))) {
                                width = movie_player.offsetWidth;
                                height = Math.round(movie_player.offsetWidth / (16 / 9));
                                if (ytd_watch.updateStyles) {
                                    ytd_watch.updateStyles({
                                        "--ytd-watch-flexy-width-ratio": 1,
                                        "--ytd-watch-flexy-height-ratio": 0.5625
                                    });
                                    ytd_watch.updateStyles({
                                        "--ytd-watch-width-ratio": 1,
                                        "--ytd-watch-height-ratio": 0.5625
                                    });
                                }
                            }
                            else {
                                width = window.NaN;
                                height = window.NaN;
                            }
                            return {
                                width: width,
                                height: height
                            };
                        };
                        if (ytd_watch.calculateCurrentPlayerSize_) {
                            if (!ytd_watch.calculateCurrentPlayerSize_.bypassed) {
                                ytd_watch.calculateCurrentPlayerSize_ = sizeBypass;
                                ytd_watch.calculateCurrentPlayerSize_.bypassed = true;
                            }
                            if (!ytd_watch.calculateNormalPlayerSize_.bypassed) {
                                ytd_watch.calculateNormalPlayerSize_ = sizeBypass;
                                ytd_watch.calculateNormalPlayerSize_.bypassed = true;
                            }
                        }
                    }
                },
                initializeSettings: function(new_settings) {
                    var i;
                    var j;
                    var option;
                    var options;
                    var loaded_settings;
                    var vidfix_settings;
                    if (vidfix_settings = document.getElementById("vidfix-settings")) {
                        loaded_settings = JSON.parse(vidfix_settings.textContent || "null");
                        receive_settings_from_page = vidfix_settings.getAttribute("settings-beacon-from");
                        send_settings_to_page = vidfix_settings.getAttribute("settings-beacon-to");
                        vidfix_settings.remove();
                    }
                    user_settings = new_settings || loaded_settings || user_settings || {};
                    for (i = 0; i < modules.length; i++) {
                        for (options in modules[i].options) {
                            if (modules[i].options.hasOwnProperty(options)) {
                                option = modules[i].options[options];
                                if (!(option.id in user_settings) && "value" in option) {
                                    user_settings[option.id] = option.value;
                                }
                            }
                        }
                    }
                },
                initializeModulesUpdate: function() {
                    var i;
                    for (i = 0; i < modules.length; i++) {
                        if (modules[i].onSettingsUpdated) {
                            modules[i].onSettingsUpdated();
                        }
                    }
                },
                initializeModules: function() {
                    var i;
                    for (i = 0; i < modules.length; i++) {
                        if (modules[i].ini) {
                            modules[i].ini();
                        }
                    }
                },
                initializeOption: function() {
                    var key;
                    if (this.started) {
                        return true;
                    }
                    this.started = true;
                    for (key in this.options) {
                        if (this.options.hasOwnProperty(key)) {
                            if (!(key in user_settings) && this.options[key].value) {
                                user_settings[key] = this.options[key].value;
                            }
                        }
                    }
                    return false;
                },
                initializeBroadcast: function(event) {
                    if (event.data) {
                        if (event.data.type === "settings") {
                            if (event.data.payload) {
                                if (event.data.payload.broadcast_id === this.broadcast_channel.name) {
                                    this.initializeSettings(event.data.payload);
                                    this.initializeModulesUpdate();
                                }
                            }
                        }
                    }
                },
                ini: function() {
                    this.initializeSettings();
                    this.broadcast_channel = new BroadcastChannel(user_settings.broadcast_id);
                    this.broadcast_channel.addEventListener("message", this.initializeBroadcast.bind(this));
                    document.documentElement.addEventListener("load", this.initializeSettingsButton, true);
                    document.documentElement.addEventListener("load", this.initializeBypasses, true);
                    if (this.isSettingsPage) {
                        this.initializeModules();
                    }
                }
            };
            vidfix_api.ini();
        },
        isAllowedPage: function() {
            var current_page;
            if (current_page = window.location.pathname.match(/\/[a-z-]+/)) {
                current_page = current_page[0];
            }
            else {
                current_page = window.location.pathname;
            }
            return ["/tv", "/embed", "/live_chat", "/account", "/account_notifications", "/create_channel", "/dashboard", "/upload", "/webcam"].indexOf(current_page) < 0;
        },
        generateUUID: function() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
                .replace(/[018]/g, function(point) {
                return (point ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> point / 4)
                    .toString(16);
            });
        },
        saveSettings: function() {
            if (this.is_user_script) {
                this.GM.setValue(this.id, JSON.stringify(this.user_settings));
            }
            else {
                chrome.storage.local.set({
                    vidfixSettings: this.user_settings
                });
            }
        },
        updateSettingsOnOpenWindows: function() {
            this.broadcast_channel.postMessage({
                type: "settings",
                payload: this.user_settings
            });
        },
        settingsUpdatedFromOtherWindow: function(event) {
            if (event.data && event.data.broadcast_id === this.broadcast_channel.name) {
                this.user_settings = event.data;
                this.saveSettings();
            }
        },
        contentScriptMessages: function(custom_event) {
            var updated_settings;
            if ((updated_settings = custom_event.detail.settings) !== undefined) {
                this.saveSettings();
            }
        },
        initializeScript: function(event) {
            var holder;
            this.user_settings = event[this.id] || event;
            if (!this.user_settings.broadcast_id) {
                this.user_settings.broadcast_id = this.generateUUID();
                this.saveSettings();
            }
            this.broadcast_channel = new BroadcastChannel(this.user_settings.broadcast_id);
            this.broadcast_channel.addEventListener("message", this.settingsUpdatedFromOtherWindow.bind(this));
            event = JSON.stringify(this.user_settings);
            holder = document.createElement("vidfix-settings");
            holder.id = "vidfix-settings";
            holder.textContent = event;
            holder.setAttribute("style", "display: none");
            holder.setAttribute("settings-beacon-from", this.receive_settings_from_page);
            holder.setAttribute("settings-beacon-to", this.send_settings_to_page);
            document.documentElement.appendChild(holder);
            holder = document.createElement("script");
            holder.textContent = "(" + this.inject + "(" + this.is_user_script.toString() + "))";
            document.documentElement.appendChild(holder);
            holder.remove();
            this.inject = null;
            delete this.inject;
        },
        main: function(event) {
            var now;
            var context;
            now = Date.now();
            this.receive_settings_from_page = now + "-" + this.generateUUID();
            this.send_settings_to_page = now + 1 + "-" + this.generateUUID();
            window.addEventListener(this.receive_settings_from_page, this.contentScriptMessages.bind(this), false);
            if (!event) {
                if (this.is_user_script) {
                    context = this;
                    // javascript promises are horrible
                    this.GM.getValue(this.id, "{}")
                        .then(function(value) {
                        event = JSON.parse(value);
                        context.initializeScript(event);
                    });
                }
            }
            else {
                this.initializeScript(event);
            }
        },
        ini: function() {
            if (this.isAllowedPage()) {
                this.is_settings_page = window.location.pathname === "/vidfix-settings";
                this.id = "vidfixSettings";
                if (typeof GM === "object" || typeof GM_info === "object") {
                    this.is_user_script = true;
                    // GreaseMonkey 4 polly fill
                    // https://arantius.com/misc/greasemonkey/imports/greasemonkey4-polyfill.js
                    if (typeof GM === "undefined") {
                        this.GM = {
                            setValue: GM_setValue,
                            info: GM_info,
                            getValue: function() {
                                return new Promise((resolve, reject) => {
                                    try {
                                        resolve(GM_getValue.apply(this, arguments));
                                    }
                                    catch (e) {
                                        reject(e);
                                    }
                                });
                            }
                        };
                    }
                    else {
                        this.GM = GM;
                    }
                    this.main();
                }
                else {
                    this.is_user_script = false;
                    chrome.storage.local.get(this.id, this.main.bind(this));
                }
            }
        }
    };

    vidfix.ini();
}

function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    });
}

function gen_history() {
    /*
     - Grey out watched video thumbnails info:
     - Use ALT+LeftClick or ALT+RightClick on a video list item to manually toggle the watched marker. The mouse button is defined in the script and can be changed.
     - For restoring/merging history, source file can also be a YouTube's history data JSON (downloadable from https://support.google.com/accounts/answer/3024190?hl=en). Or a list of YouTube video URLs (using current time as timestamps).
   */
    //=== config start ===
    var maxWatchedVideoAge   = 5 * 365; //number of days. set to zero to disable (not recommended)
    var contentLoadMarkDelay = 600;     //number of milliseconds to wait before marking video items on content load phase (increase if slow network/browser)
    var markerMouseButtons   = [0, 1];  //one or more mouse buttons to use for manual marker toggle. 0=left, 1=right, 2=middle. e.g.:
    //if `[0]`, only left button is used, which is ALT+LeftClick.
    //if `[1]`, only right button is used, which is ALT+RightClick.
    //if `[0,1]`, any left or right button can be used, which is: ALT+LeftClick or ALT+RightClick.
    //=== config end ===

    var watchedVideos, ageMultiplier = 24 * 60 * 60 * 1000, xu = /\/watch(?:\?|.*?&)v=([^&]+)|\/shorts\/([^\/\?]+)/;

    function getVideoId(url) {
        var vid = url.match(xu);
        if (vid) vid = vid[1] || vid[2];
        return vid;
    }

    function watched(vid) {
        return !!watchedVideos.entries[vid];
    }

    function processVideoItems(selector) {
        var items = document.querySelectorAll(selector), i, link;
        for (i = items.length-1; i >= 0; i--) {
            if (link = items[i].querySelector("A")) {
                if (watched(getVideoId(link.href))) {
                    items[i].classList.add("watched");
                } else items[i].classList.remove("watched");
            }
        }
    }

    function processAllVideoItems() {
        //home page
        processVideoItems(".yt-uix-shelfslider-list>.yt-shelf-grid-ite,ytd-thumbnail.ytd-rich-grid-media");
        processVideoItems("#contents.ytd-rich-grid-renderer>ytd-rich-item-renderer,#contents.ytd-rich-shelf-renderer ytd-rich-item-renderer.ytd-rich-shelf-renderer");
        //subscriptions page
        processVideoItems(".multirow-shelf>.shelf-content>.yt-shelf-grid-item");
        //history:watch page
        processVideoItems('ytd-section-list-renderer[page-subtype="history"] .ytd-item-section-renderer>ytd-video-renderer');
        //channel/user home page
        processVideoItems("#contents>.ytd-item-section-renderer>.ytd-newspaper-renderer,#items>.yt-horizontal-list-renderer"); //old
        processVideoItems("#contents>.ytd-channel-featured-content-renderer,#contents>.ytd-shelf-renderer>#grid-container>.ytd-expanded-shelf-contents-renderer"); //new
        //channel/user video page
        processVideoItems(".yt-uix-slider-list>.featured-content-item,.channels-browse-content-grid>.channels-content-item,#items>.ytd-grid-renderer");
        //channel/user playlist page
        processVideoItems(".expanded-shelf>.expanded-shelf-content-list>.expanded-shelf-content-item-wrapper,.ytd-playlist-video-renderer");
        //channel/user playlist item page
        processVideoItems(".pl-video-list .pl-video-table .pl-video,ytd-playlist-panel-video-renderer");
        //channel/user search page
        if (/^\/(?:c|channel|user)\/.*?\/search/.test(location.pathname)) {
            processVideoItems(".ytd-browse #contents>.ytd-item-section-renderer"); //new
        }
        //search page
        processVideoItems("#results>.section-list .item-section>li,#browse-items-primary>.browse-list-item-container"); //old
        processVideoItems(".ytd-search #contents>ytd-video-renderer,.ytd-search #contents>ytd-playlist-renderer,.ytd-search #items>ytd-video-renderer"); //new
        //video page
        processVideoItems(".watch-sidebar-body>.video-list>.video-list-item,.playlist-videos-container>.playlist-videos-list>li"); //old
        processVideoItems(".ytd-compact-video-renderer,.ytd-compact-radio-renderer"); //new
    }

    function addHistory(vid, time, noSave, i) {
        if (!watchedVideos.entries[vid]) {
            watchedVideos.index.push(vid);
        } else {
            i = watchedVideos.index.indexOf(vid);
            if (i >= 0) watchedVideos.index.push(watchedVideos.index.splice(i, 1)[0])
        }
        watchedVideos.entries[vid] = time;
        if (!noSave) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
    }

    function delHistory(index, noSave) {
        delete watchedVideos.entries[watchedVideos.index[index]];
        watchedVideos.index.splice(index, 1);
        if (!noSave) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
    }

    var dc, ut;
    function parseData(s, a, i, j, z) {
        try {
            dc = false;
            s = JSON.parse(s);
            //convert to new format if old format.
            //old: [{id:<strVID>, timestamp:<numDate>}, ...]
            //new: {entries:{<stdVID>:<numDate>, ...}, index:[<strVID>, ...]}
            if (Array.isArray(s) && (!s.length || (("object" === typeof s[0]) && s[0].id && s[0].timestamp))) {
                a = s;
                s = {entries: {}, index: []};
                a.forEach(o => {
                    s.entries[o.id] = o.timestamp;
                    s.index.push(o.id);
                });
            } else if (("object" !== typeof s) || ("object" !== typeof s.entries) || !Array.isArray(s.index)) return null;
            //reconstruct index if broken
            if (s.index.length !== (a = Object.keys(s.entries)).length) {
                s.index = a.map(k => [k, s.entries[k]]).sort((x, y) => x[1] - y[1]).map(v => v[0]);
                dc = true;
            }
            return s;
        } catch(z) {
            return null;
        }
    }

    function parseYouTubeData(s, a) {
        try {
            s = JSON.parse(s);
            //convert to native format if YouTube format.
            //old: [{titleUrl:<strUrl>, time:<strIsoDate>}, ...] (excludes irrelevant properties)
            //new: {entries:{<stdVID>:<numDate>, ...}, index:[<strVID>, ...]}
            if (Array.isArray(s) && (!s.length || (("object" === typeof s[0]) && s[0].titleUrl && s[0].time))) {
                a = s;
                s = {entries: {}, index: []};
                a.forEach((o, m, t) => {
                    if (o.titleUrl && (m = o.titleUrl.match(xu))) {
                        if (isNaN(t = (new Date(o.time)).getTime())) t = (new Date()).getTime();
                        s.entries[m[1] || m[2]] = t;
                        s.index.push(m[1] || m[2]);
                    }
                });
                s.index.reverse();
                return s;
            } else return null;
        } catch(a) {
            return null;
        }
    }

    function mergeData(o, a) {
        o.index.forEach(i => {
            if (watchedVideos.entries[i]) {
                if (watchedVideos.entries[i] < o.entries[i]) watchedVideos.entries[i] = o.entries[i];
            } else watchedVideos.entries[i] = o.entries[i];
        });
        a = Object.keys(watchedVideos.entries);
        watchedVideos.index = a.map(k => [k, watchedVideos.entries[k]]).sort((x, y) => x[1] - y[1]).map(v => v[0]);
    }

    function getHistory(a, b) {
        a = GM_getValue("watchedVideos");
        if (a === undefined) {
            a = '{"entries": {}, "index": []}';
        } else if ("object" === typeof a) a = JSON.stringify(a);
        if (b = parseData(a)) {
            watchedVideos = b;
            if (dc) b = JSON.stringify(b);
        } else b = JSON.stringify(watchedVideos = {entries: {}, index: []});
        GM_setValue("watchedVideos", b);
    }

    function doProcessPage() {
        //get list of watched videos
        getHistory();

        //remove old watched video history
        var now = (new Date()).valueOf(), changed, vid;
        if (maxWatchedVideoAge > 0) {
            while (watchedVideos.index.length) {
                if (((now - watchedVideos.entries[watchedVideos.index[0]]) / ageMultiplier) > maxWatchedVideoAge) {
                    delHistory(0, false);
                    changed = true;
                } else break;
            }
            if (changed) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
        }

        //check and remember current video
        if ((vid = getVideoId(location.href)) && !watched(vid)) addHistory(vid, now);

        //mark watched videos
        processAllVideoItems();
    }
    function processPage() {
        setTimeout(doProcessPage, Math.floor(contentLoadMarkDelay / 2));
    }

    function delayedProcessPage() {
        setTimeout(doProcessPage, contentLoadMarkDelay);
    }

    function toggleMarker(ele, i) {
        if (ele) {
            if (ele.href) {
                i = getVideoId(ele.href);
            } else {
                ele = ele.parentNode;
                while (ele) {
                    if (ele.tagName === "A") {
                        i = getVideoId(ele.href);
                        break;
                    }
                    ele = ele.parentNode;
                }
            }
            if (i) {
                if ((ele = watchedVideos.index.indexOf(i)) >= 0) {
                    delHistory(ele);
                } else addHistory(i, (new Date()).valueOf());
                processAllVideoItems();
            }
        }
    }


    var rxListUrl = /\/\w+_ajax\?|\/results\?search_query|\/v1\/v1\/(browse|next|search)\?/;
    var xhropen = XMLHttpRequest.prototype.open, xhrsend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(method, url) {
        this.url_mwyv = url;
        return xhropen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function(method, url) {
        if (rxListUrl.test(this.url_mwyv) && !this.listened_mwyv) {
            this.listened_mwyv = 1;
            this.addEventListener("load", delayedProcessPage);
        }
        return xhrsend.apply(this, arguments);
    };

    var fetch_ = unsafeWindow.fetch;
    unsafeWindow.fetch = function(opt) {
        let url = opt.url || opt;
        if (rxListUrl.test(opt.url || opt)) {
            return fetch_.apply(this, arguments).finally(delayedProcessPage);
        } else return fetch_.apply(this, arguments);
    };

    addEventListener("DOMContentLoaded", sty => {
        sty = document.createElement("STYLE");
        sty.innerHTML = `

`;
        document.head.appendChild(sty);
        var nde = Node.prototype.dispatchEvent;
        Node.prototype.dispatchEvent = function(ev) {
            if (ev.type === "yt-service-request-completed") {
                clearTimeout(ut);
                ut = setTimeout(doProcessPage, contentLoadMarkDelay / 2)
            }
            return nde.apply(this, arguments)
        };
    });

    var lastFocusState = document.hasFocus();
    addEventListener("blur", () => {
        lastFocusState = false;
    });
    addEventListener("focus", () => {
        if (!lastFocusState) processPage();
        lastFocusState = true;
    });
    addEventListener("click", (ev) => {
        if ((markerMouseButtons.indexOf(ev.button) >= 0) && ev.altKey) toggleMarker(ev.target);
    });

    if (markerMouseButtons.indexOf(1) >= 0) {
        addEventListener("contextmenu", (ev) => {
            if (ev.altKey) toggleMarker(ev.target);
        });
    }
    if (window["body-container"]) { //old
        addEventListener("spfdone", processPage);
        processPage();
    } else { //new
        var t = 0;
        function pl() {
            clearTimeout(t);
            t = setTimeout(processPage, 300);
        }
        (function init(vm) {
            if (vm = document.getElementById("visibility-monitor")) {
                vm.addEventListener("viewport-load", pl);
            } else setTimeout(init, 100);
        })();
        (function init2(mh) {
            if (mh = document.getElementById("masthead")) {
                mh.addEventListener("yt-rendererstamper-finished", pl);
            } else setTimeout(init2, 100);
        })();
        addEventListener("load", delayedProcessPage);
        addEventListener("spfprocess", delayedProcessPage);
    }

    GM_registerMenuCommand("Display History Statistics", () => {
        function sum(r, v) {
            return r + v;
        }
        function avg(arr) {
            return arr && arr.length ? Math.round(arr.reduce(sum, 0) / arr.length) : "(n/a)";
        }
        var pd, pm, py, ld = [], lm = [], ly = [];
        getHistory();
        Object.keys(watchedVideos.entries).forEach((k, t) => {
            t = new Date(watchedVideos.entries[k]);
            if (!pd || (pd !== t.getDate())) {
                ld.push(1);
                pd = t.getDate();
            } else ld[ld.length - 1]++;
            if (!pm || (pm !== (t.getMonth() + 1))) {
                lm.push(1);
                pm = t.getMonth() + 1;
            } else lm[lm.length - 1]++;
            if (!py || (py !== t.getFullYear())) {
                ly.push(1);
                py = t.getFullYear();
            } else ly[ly.length - 1]++;
        });
        if (watchedVideos.index.length) {
            pd = (new Date(watchedVideos.entries[watchedVideos.index[0]])).toLocaleString();
            pm = (new Date(watchedVideos.entries[watchedVideos.index[watchedVideos.index.length - 1]])).toLocaleString();
        } else {
            pd = "(n/a)";
            pm = "(n/a)";
        }
        alert(`\
Number of entries: ${watchedVideos.index.length}
Oldest entry: ${pd}
Newest entry: ${pm}

Average viewed videos per day: ${avg(ld)}
Average viewed videos per month: ${avg(lm)}
Average viewed videos per year: ${avg(ly)}\
`);
    });

    GM_registerMenuCommand("Backup History Data", (a, b) => {
        document.body.appendChild(a = document.createElement("A")).href = URL.createObjectURL(new Blob([JSON.stringify(watchedVideos)], {type: "application/json"}));
        a.download = `MarkWatchedYouTubeVideos_${(new Date()).toISOString()}.json`;
        a.click();
        a.remove();
        URL.revokeObjectURL(a.href);
    });

    GM_registerMenuCommand("Restore History Data", (a, b) => {
        function askRestore(o) {
            if (confirm(`Selected history data file contains ${o.index.length} entries.\n\nRestore from this data?`)) {
                if (mwyvrhm_ujs.checked) {
                    mergeData(o);
                } else watchedVideos = o;
                GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
                a.remove();
                doProcessPage();
            }
        }
        if (window.mwyvrh_ujs) return;
        (a = document.createElement("DIV")).id = "mwyvrh_ujs";
        a.innerHTML = `<style>
       #mwyvrh_ujs {display:flex;position:fixed;z-index:99999;left:0;top:0;right:0;bottom:0;margin:0;border:none;padding:0;background:rgb(0,0,0,0.5);color:#000;font-family:sans-serif;font-size:12pt;line-height:12pt;font-weight:normal;cursor:pointer}
       #mwyvrhb_ujs {margin:auto;border:.3rem solid #007;border-radius:.3rem;padding:.5rem .5em;background-color:#fff;cursor:auto}
       #mwyvrht_ujs {margin-bottom:1rem;font-size:14pt;line-height:14pt;font-weight:bold}
       #mwyvrhmc_ujs {margin:.5em 0 1em 0;text-align:center}
       #mwyvrhi_ujs {display:block;margin:1rem auto .5rem auto;overflow:hidden}
       </style>
<div id="mwyvrhb_ujs">
  <div id="mwyvrht_ujs">Mark Watched YouTube Videos</div>
  Please select a file to restore history data from.
  <div id="mwyvrhmc_ujs"><label><input id="mwyvrhm_ujs" type="checkbox" checked /> Merge history data instead of replace.</label></div>
  <input id="mwyvrhi_ujs" type="file" multiple />
</div>`;
        a.onclick = e => {
            (e.target === a) && a.remove();
        };
        (b = a.querySelector("#mwyvrhi_ujs")).onchange = r => {
            r = new FileReader();
            r.onload = (o, t) => {
                if (o = parseData(r = r.result)) { //parse as native format
                    if (o.index.length) {
                        askRestore(o);
                    } else alert("File doesn't contain any history entry.");
                } else if (o = parseYouTubeData(r)) { //parse as YouTube format
                    if (o.index.length) {
                        askRestore(o);
                    } else alert("File doesn't contain any history entry.");
                } else { //parse as URL list
                    o = {entries: {}, index: []};
                    t = (new Date()).getTime();
                    r = r.replace(/\r/g, "").split("\n");
                    while (r.length && !r[0].trim()) r.shift();
                    if (r.length && xu.test(r[0])) {
                        r.forEach(s => {
                            if (s = s.match(xu)) {
                                o.entries[s[1] || s[2]] = t;
                                o.index.push(s[1] || s[2]);
                            }
                        });
                        if (o.index.length) {
                            askRestore(o);
                        } else alert("File doesn't contain any history entry.");
                    } else alert("Invalid history data file.");
                }
            };
            r.readAsText(b.files[0]);
        };
        document.documentElement.appendChild(a);
        b.click();
    });
}

function counterstuff() {
    function getCounterText (x) {	// x is not wrapper
        try { return x.__data.data.viewCountText.simpleText; } catch (ex) { }
        try { return x.__data.data.content.videoRenderer.viewCountText.simpleText; } catch (ex) { }
    }
    function replaceCountersText (x) {
        x = x.wrappedJSObject || x;
        const par = x.parentNode.__ytfix_parent;
        if (!par)
            return;
        const tgt = getCounterText (par);
        if (tgt && x.textContent != tgt)
            x.textContent = tgt;
    }
    function replaceCountersCallback (mm) {
        for (let i = mm.length; --i >= 0; ) {
            const m = mm [i];
            if (m.type == 'characterData')
                replaceCountersText (m.target);
        }
    }
    const m = new MutationObserver (replaceCountersCallback);
    const opt = { subtree: true, characterData: true };
    function replaceCountersEach (x) {
        x.setAttribute ('ytfix', '');
        const ee = x.querySelectorAll ('#metadata-line span');
        if (ee.length != 2)
            return;
        const e = ee [0];
        (e.wrappedJSObject || e).__ytfix_parent = x;
        replaceCountersText (e.firstChild);
        m.observe (e, opt);
    }
    setInterval (function () {
        document.querySelectorAll ('ytd-compact-video-renderer:not([ytfix])').forEach (replaceCountersEach);
        document.querySelectorAll ('ytd-grid-video-renderer:not([ytfix])').forEach (replaceCountersEach);
        document.querySelectorAll ('ytd-rich-item-renderer:not([ytfix])').forEach (replaceCountersEach);
        document.querySelectorAll ('ytd-video-renderer:not([ytfix])').forEach (replaceCountersEach);
    }, 1000);
    // this observer disables the like count updating while watching a live stream because it messes with a bunch of things and we can't get full like count from it either
    var likeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            for (const node of mutation.addedNodes) {
                while (mutation.target.childNodes.length > 1) {
                    mutation.target.removeChild(mutation.target.lastChild);
                }
            }
        });
    });

    waitForElement("#info ytd-toggle-button-renderer.style-text[is-icon-button]:first-child #text.ytd-toggle-button-renderer").then(function(elm) {
        likeObserver.observe(elm, {
            childList: true,
            subtree: true
        });
    });

    // thanks objectful for a actual working one
}

waitForElement('ytd-compact-link-renderer').then(function(elm) {
    document.querySelector('#container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4)').style.left = document.querySelector('[menu-style="multi-page-menu-style-type-system"] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) a').offsetWidth+"px";
});

function restoreDropdown(iconLabel, firstChild, dropdownChildren) {
    const iconLabelSel = document.querySelector(iconLabel);
    if (!window.location.search.includes("sort")) // channel sort dropdown fix
        iconLabelSel.innerHTML = document.querySelector(firstChild).innerHTML;

    for (const x of document.querySelectorAll(dropdownChildren)) {
        x.addEventListener("click", function() {
            iconLabelSel.innerHTML = this.innerHTML;
        }, false);
    }
}

var topLevelObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (const node of mutation.addedNodes) {
            if (document.documentElement.lang == "en" && node.nodeName == "#text" && node.textContent == "Save")
                node.textContent = "Add to";
            document.querySelector(".addto-btn")?.classList?.remove("addto-btn");
            const saveIcon = document.querySelector(`#info.style-scope.ytd-watch-flexy yt-icon path[d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"]`) 
                ?? document.querySelector(`#info.style-scope.ytd-watch-flexy yt-icon path[d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"]`);
            const saveBtn = saveIcon.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            saveBtn.classList.add("addto-btn");
        }
    });
});

async function setupUpdateDependentElements() {
    if (window.location.pathname == "/watch") {
        waitForElement('.ryd-tooltip-bar-container').then(() => getDislikes());
        // Autoplay disabled for now. YouTube removed functionality
        // waitForElement('#items.ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer').then(() => restoreOldAutoplay());
        waitForElement('#top-row.ytd-video-secondary-info-renderer').then(() => setupSecondaryInfoRenderer());
        waitForElement('#info-strings.ytd-video-primary-info-renderer yt-formatted-string').then((elm) => setUploadedText(elm));

        // classic description
        var description;
        waitForElement('tp-yt-paper-button[id="more"]').then((elm) => elm.addEventListener("click", () => description.removeAttribute("collapsed")));
        waitForElement('ytd-expander.ytd-video-secondary-info-renderer').then((elm) => { description = elm });
        waitForElement('ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-structured-description"]').then((elm) => elm?.remove());
        
        waitForElement(`#info.style-scope.ytd-watch-flexy yt-icon path[d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"]`).then(function(elm) {
            const saveBtn = elm.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            saveBtn.classList.add("addto-btn");
            topLevelObserver.observe(document.querySelector("#info.style-scope.ytd-watch-flexy #top-level-buttons-computed"), {
                childList: true,
                subtree: true
            });
        });
      
        waitForElement(`#info.style-scope.ytd-watch-flexy yt-icon path[d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"]`).then(function(elm) {
            const saveBtn = elm.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            saveBtn.classList.add("addto-btn");
            topLevelObserver.observe(document.querySelector("#info.style-scope.ytd-watch-flexy #top-level-buttons-computed"), {
                childList: true,
                subtree: true
            });
        });
    }

    waitForElement("ytd-comments-header-renderer yt-dropdown-menu:last-of-type").then(function() {
        restoreDropdown("ytd-comments-header-renderer #icon-label.yt-dropdown-menu",
                        "ytd-comments-header-renderer a.yt-dropdown-menu:first-child > tp-yt-paper-item:first-child > tp-yt-paper-item-body:first-child > div:first-child",
                        "ytd-comments-header-renderer a.yt-dropdown-menu > tp-yt-paper-item:first-child > tp-yt-paper-item-body:first-child > div:first-child");
    });

    waitForElement("yt-sort-filter-sub-menu-renderer yt-dropdown-menu:last-of-type").then(function() {
        restoreDropdown("yt-sort-filter-sub-menu-renderer #icon-label.yt-dropdown-menu",
                        "yt-sort-filter-sub-menu-renderer a.yt-dropdown-menu:nth-child(3) > tp-yt-paper-item:first-child > tp-yt-paper-item-body:first-child > div:first-child",
                        "yt-sort-filter-sub-menu-renderer a.yt-dropdown-menu > tp-yt-paper-item:first-child > tp-yt-paper-item-body:first-child > div:first-child");
    });
}

window.addEventListener("yt-page-data-updated", setupUpdateDependentElements, false);
// init functions
removeEl();
gen_setting_page();
patch_css();
gen_history();
gen_aspect_fix();
subbutton();
counterstuff();
