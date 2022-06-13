function restoreAppbarLinks() {
    if (yt.config_.HL == "en") {
        var trendingData = {
            "navigationEndpoint": {
                "clickTrackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
                "commandMetadata": {
                    "webCommandMetadata": {
                        "url": "/feed/trending",
                        "webPageType": "WEB_PAGE_TYPE_BROWSE",
                        "rootVe": 6827,
                        "apiUrl": "/youtubei/v1/browse"
                    }
                },
                "browseEndpoint": {
                    "browseId": "FEtrending"
                }
            },
            "icon": {
                "iconType": "TRENDING"
            },
            "trackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
            "formattedTitle": {
                "simpleText": "Trending"
            },
            "accessibility": {
                "accessibilityData": {
                    "label": "Trending"
                }
            },
            "isPrimary": true
        };

        var guidetemplate = `<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
        document.querySelector(`#items > ytd-guide-entry-renderer:first-child`).insertAdjacentHTML("afterend", guidetemplate);
        document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(2)`).data = trendingData;
        document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(3)`).remove();
        document.querySelector("ytd-guide-section-renderer.style-scope:first-child").data.items[1].guideEntryRenderer = trendingData;
    }
    
      
    if (!document.querySelector("ytd-app").data.response.responseContext.mainAppWebResponseContext.loggedOut) {
        const yourVideos = document.querySelector("ytd-guide-entry-renderer a[href*='/videos']");
        const channelId = yourVideos.href.split("/")[4];
        var channelData = {
            "navigationEndpoint": {
                "clickTrackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
                "commandMetadata": {
                    "webCommandMetadata": {
                        "url": "/channel/" + channelId,
                        "webPageType": "WEB_PAGE_TYPE_CHANNEL",
                        "rootVe": 6827,
                        "apiUrl": "/youtubei/v1/browse"
                    }
                },
                "browseEndpoint": {
                    "browseId": channelId
                }
            },
            "icon": {
                "iconType": "ACCOUNT_BOX"
            },
            "trackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
            "formattedTitle": {
                "simpleText": "My channel"
            },
            "accessibility": {
                "accessibilityData": {
                    "label": "My channel"
                }
            },
            "isPrimary": true
        };

        var guidetemplate = `<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
        document.querySelector(`#items > ytd-guide-entry-renderer:first-child`).insertAdjacentHTML("afterend", guidetemplate);
        document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(2)`).data = channelData;
        document.querySelector("ytd-guide-section-renderer.style-scope:nth-child(1)").data.items[1].guideEntryRenderer = channelData;
        yourVideos.remove();
        
        GM_addStyle(`#items > ytd-guide-entry-renderer:nth-child(2) .guide-icon {
            content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOFJREFUeJztlL0Ng0AMhWlSZ5QMkU0o6KjpIlLAHSNkgkyQLbICA6RPT/hEAk8WxwWJKoolS5Z/3vnZhiT5y0cuvtiXZXny3t/run6i2PiIrQKrqvPROdf22gW0JWcN2FhMV3mRH1BsjUVBoaKd9TQ7pYeNTztdpM98tAPmZnPwaQ41QUBLaaDl0mkcLrVxaoKA9nUtmnssxCIG2DZNc0PnNr8IqF0AwGZtDr43eJyyLOWRZdkulEeMnOhS9Gx0GVZkOctnMyRPh93P5wpFOkKx8X192AZ0m09P6W/2c/hteQFIL1T2NRIk0wAAAABJRU5ErkJggg==);
        }

        #items > ytd-guide-entry-renderer:nth-child(2):hover .guide-icon,
        #items > ytd-guide-entry-renderer:nth-child(2) tp-yt-paper-item[aria-selected="true"] .guide-icon {
            content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMhJREFUeJztVDEKwzAMzNK5a96RF/g1Bj/Dz+neOT/wngdk9ujNqFKREyNsBUOm0oODkJNPkqVkmv4oiDE+AcAjAzIx6dmTNmSGhwxyhz5IMyNmNVbkwlyFpptym7KyuUo2y0rV9vnOaqRGTBIxXjMMjftyle4aetAMZfbjUCdZs4srww35Zm6jhnUV3+k2YuS01ZbLUHZr7aMXRxqc29Afilgb14uDczj62nDwsdg55xe1SBVxVQu/KzCqmTC959MruPXn8Nv4ADy6IMvnpMUsAAAAAElFTkSuQmCC)
        }`);
    }
}

function insertResultsEstimate() {
    waitForElement("#filter-menu #container").then(function(elm) {
        const estimatedResults = parseInt(document.querySelector("ytd-search").data.estimatedResults).toLocaleString();

        if (elm.querySelector(".num-results") !== null) {
            elm.querySelector(".num-results").innerHTML = `About ${estimatedResults} results`;
            return;
        }

        let numResults = document.createElement("p");
        numResults.className = "num-results first-focus";
        numResults.setAttribute("tabindex", "0");
        numResults.innerHTML = `About ${estimatedResults} results`;
        elm.appendChild(numResults);
    });
}

function gen_setting_page() {
    let fix_version = '3.1.3';	// as close to header as possible: in hopes to not forget
    if (window.YTEngine2) return; // in-development kill-switch
    if (document.location.pathname == '/error') return;


    // Test storage for saving user-settings

    let settings = {}, ls;

    try {
        function lsTest(st, v) {
            st.setItem('__storage_test__', v);
            return st.getItem('__storage_test__') == v;

        };
        let _s = window.localStorage;
        if (lsTest(_s, 'qwe') && lsTest(_s, 'rty')) {
            ls = _s;
            settings = JSON.parse(ls.getItem('__storage__settings__')) || {};
        }
    }
    catch (e) { }
    // delete old settings
    if ("default_player_640" in settings) {
        settings.default_player = settings.default_player_640 ? 3 : 0;
        delete settings.default_player_640;
    }
    if ("reduce_thumbnail" in settings) {
        settings.thumbnail_size = settings.reduce_thumbnail ? 2 : 0;
        delete settings.reduce_thumbnail;
    }
    // set script default values
    if (!("inst_ver" in settings)) settings.inst_ver = fix_version;
    if (!("old_player" in settings)) settings.old_player = true;
    if (!("search_left" in settings)) settings.search_left = true;
    if (!("no_apps" in settings)) settings.no_apps = true;
    if (!("thumb_preview" in settings)) settings.thumb_preview = false;
    if (!("hideclip" in settings)) settings.hideclip = true;
    if (!("profile_picture" in settings)) settings.profile_picture = true;
    if (!("grey_watched" in settings)) settings.grey_watched = true;
    if (!("blur_watched" in settings)) settings.blur_watched = true;
    if (!("hide_filters" in settings)) settings.hide_filters = true;
    if (!("hide_queue" in settings)) settings.hide_queue = false;
    if (!("small_recc" in settings)) settings.small_recc = true;
    if (!("olderhh" in settings)) settings.olderhh = false;
    if (!("hide_dis" in settings)) settings.hide_dis = true;
    if (!("channel_list" in settings)) settings.channel_list = false;
    if (!("rightside" in settings)) settings.rightside = false;
    if (!("trending" in settings)) settings.trending = true;
    if (!("shelves" in settings)) settings.shelves = false;
    if (!("search_estimate" in settings)) settings.search_estimate = true;
    if (!("default_player" in settings)) settings.default_player = 2;
    if (!("hide_guide" in settings)) settings.hide_guide = false;
    if (!("hide_yt_suggested_blocks" in settings)) settings.hide_yt_suggested_blocks = true;
    if (!("logo_target" in settings)) settings.logo_target = "";
    if (!("thumbnail_size" in settings)) settings.thumbnail_size = 1;
    if (!("thumbnail_size_m" in settings)) settings.thumbnail_size_m = 720;
    if (!("search_thumbnail" in settings)) settings.search_thumbnail = 1;
    if (!("clear_search" in settings)) settings.clear_search = true;
    if (!("logo_style" in settings)) settings.logo_style = 0;
    if (!("channel_top" in settings)) settings.channel_top = 0;
    if (!("video_quality" in settings)) settings.video_quality = 0;
    // catch "settings" page
    console.log('fix settings:', settings);
    if (document.location.pathname == '/7kttube-settings') {

        let back = document.createElement('div');
        back.className = 'ytfixback';
        let e1, e2, e3, e4, plane = document.createElement('div');
        plane.className = 'ytfix';
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = [
            'ytfix_line2 {background: #575757;color: white;padding: 5px;}.ytfix_line span, .ytfix_line checkbox {text-transform: full-size-kana; border-bottom: 1px dotted;}.ytfix{font-size: 13px;position:absolute;left:0;top:0;right:0;padding:3em;background: #eee url(https://i.ibb.co/jgXjyZn/7kttube.png) no-repeat;background-size:570px;background-repeat-y: no-repeat;background-position-x: 300px;background-position-y: 20px;}', '.ytfix_line{margin-bottom: 9px;text-shadow: 1px 0px 0px #b0b0b0;}', '.ytfix_line span,.ytfix_line input,.ytfix_line select{margin-right:0.3em}', 'form{padding-left: 10px;}', '.ytfix_field{font-size:13px; padding:0.2em;border:1px solid #888}', '.ytfix_button{color: #fff;font-weight: bold;background: #ec2828;padding:0.6em;border:1px solid #fff;margin-bottom: 10px;}', '.ytfix_button:hover {background: #525252;cursor: pointer}', '.ytfix_hide{display:none}', '.ytfixback{position:absolute;left:0;top:0;right:0;height:100%;background:#eee}', '.ytfix donate{padding:0;border:1px solid #888}', 'h2{text-decoration: underline; font-variant: all-petite-caps; font-family: YouTube Noto, Roboto, arial, sans-serif !important; font-size:24px;}', 'h5{font-style: italic}', 'paypal{padding-left: 60px; font-size: 13px; font-weight: bold;}'
        ].join('');
        plane.appendChild(style);
        e4 = document.createElement('br')
        e4 = document.createElement('ytfix_line2')
        e4.appendChild(document.createTextNode('7ktTube Video Downloader & 7ktTube old icons script now available!'));
        AddLine(e4);
        e4 = document.createElement('br')
        e4 = document.createElement('span')
        e2 = document.createElement('input');
        e2.type = 'button';
        e2.className = 'ytfix_button';
        e2.value = 'DOWNLOAD PAGE';
        e2.addEventListener('click', () => location.href = 'https://7kttube.tk/downloads');
        e3 = document.createElement('input');
        AddLine(e2);
        e1 = document.createElement('h2');
        e1.appendChild(document.createTextNode('7ktTube²⁰¹⁶ REDUX settings'));
        AddLine(e1);

        if (!ls) {
            e1 = document.createElement('span');
            e1.style = 'color:red';
            e1.appendChild(document.createTextNode('Cannot edit settings: no access to local storage.'));
            AddLine(e1);
            e1 = document.createElement('span');
            e1.appendChild(document.createTextNode('If you are using Firefox, allow cookies for this site.'));
            AddLine(e1);
        }

        else {
            let ess = {};

            function MakeDesc(desc) {
                let e = document.createElement('span');
                e.appendChild(document.createTextNode(desc));
                return e;
            }

            function MakeBoolElement(nm) {
                let e = document.createElement('input');
                e.type = 'checkbox';
                e.checked = settings[nm];
                ess[nm] = e;
                return e;
            }

            function MakeListElement(nm, opts) {
                let e = document.createElement('select');
                e.className = 'ytfix_field';
                ess[nm] = e;
                for (let i = 0, L = opts.length; i < L; ++i) {
                    let o = document.createElement('option');
                    o.appendChild(document.createTextNode(opts[i]));
                    e.appendChild(o);
                }
                e.selectedIndex = settings[nm];
                return e;
            }
            var delayInMilliseconds = 25; //1 second

            setTimeout(function() {
                window.parent.document.title = "𝟳𝗸𝘁𝗧𝘂𝗯𝗲 𝗥𝗘𝗗𝗨𝗫 : sᴇᴛᴛɪɴɢs";
            }, delayInMilliseconds);
            function MakeTextElement(nm) {
                let e = document.createElement('input');
                e.className = 'ytfix_field';
                e.value = settings[nm];
                ess[nm] = e;
                return e;
            }
            AddLine(MakeBoolElement("old_player"), MakeDesc("YouTube old player style(smaller buttons and menu)"));
            AddLine(MakeBoolElement("search_left"), MakeDesc('Align searchbar to the left'));
            AddLine(MakeBoolElement("no_apps"), MakeDesc("Hide apps button"));
            AddLine(MakeBoolElement("hide_guide"), MakeDesc('Auto-close side-bar to compact'));
            AddLine(MakeBoolElement("profile_picture"), MakeDesc("Square profile-pictures"));
            AddLine(MakeBoolElement("thumb_preview"), MakeDesc("Disable video previews on :hover"));
            AddLine(MakeBoolElement("hideclip"), MakeDesc("Hide clip and thanks buttons"));
            AddLine(MakeBoolElement("hide_queue"), MakeDesc("Hide queue button on thumbnails"));
            AddLine(MakeBoolElement("hide_filters"), MakeDesc('Hide all filter by category bars'));
            AddLine(MakeBoolElement("hide_yt_suggested_blocks"), MakeDesc('Hide suggestion blocks on main page (recommended playlists, latest posts, etc)'));
            AddLine(MakeBoolElement("grey_watched"), MakeDesc("Add greyscale filter + 60% transparency on watched video thumbnails"));
            AddLine(MakeBoolElement("blur_watched"), MakeDesc("Add blur on watched video thumbnails"));
            AddLine(MakeBoolElement("channel_list"), MakeDesc("Use list view on channels"));
            AddLine(MakeBoolElement("small_recc"), MakeDesc("Use smaller thumbnails on watch page recommended"));
            AddLine(MakeBoolElement("olderhh"), MakeDesc("Use older button styles and colors"));
            AddLine(MakeBoolElement("hide_dis"), MakeDesc("Hide 'DISLIKE' string"));
            let tsm = MakeTextElement("thumbnail_size_m");
            tsm.className = settings.thumbnail_size == 5 ? 'ytfix_field' : 'ytfix_hide';
            let tsi = MakeListElement("thumbnail_size", ['default', '193px', '240px', '360px', '480px', 'manual']);
            tsi.addEventListener('change', function () {
                ess.thumbnail_size_m.className = ess.thumbnail_size.selectedIndex == 5 ? 'ytfix_field' : 'ytfix_hide';
            });
            AddLine(MakeBoolElement("clear_search"), MakeDesc("Hide suggestion blocks on search page (for you, people also watched, etc)"));
            AddLine(MakeBoolElement("trending"), MakeDesc(`Restore "Trending" and "My channel" guide entries`));
            AddLine(MakeBoolElement("shelves"), MakeDesc("Use shelves homepage style"));
            AddLine(MakeBoolElement("search_estimate"), MakeDesc("Show estimates in search results"));
            AddLine(MakeBoolElement("rightside"), MakeDesc("CHECK this if you use the Right Side Description extension"));
            AddLine(MakeDesc('Logo '), MakeListElement("logo_style", ["2015-2017 (Default)", "2017-2020", "Current"]));
            AddLine(MakeDesc('Home screen thumbnail size '), tsi, tsm);
            AddLine(MakeDesc('Search video thumbnail size '), MakeListElement("search_thumbnail", ['TOO BIG', 'Small', 'Medium']));
            AddLine(MakeDesc('Watch page video player size:'), MakeListElement("default_player", ['Flexible', '640x360px', '853x480px', '1280x720px']));
            AddLine(MakeDesc('Force video quality'), MakeListElement('video_quality', ['Auto (default)', '144p', '240p', '360p', '480p', '720p', '1080p (HD)', '1440p (HD)', '2160p (4K)']));
            AddLine(MakeDesc("Modify channels' pages behaviour"), MakeListElement('channel_top', ['default', 'hide banner with scrolling', 'hide banner on load']));
            AddLine(MakeDesc("Change YouTube logo link to https://www.youtube.com/..."), MakeTextElement("logo_target"));

            e1 = document.createElement('input');
            e1.type = 'button';
            e1.className = 'ytfix_button';
            e1.value = 'Save & return to YouTube';
            e1.addEventListener('click', function () {
                settings.old_player = ess.old_player.checked;
                settings.search_left = ess.search_left.checked;
                settings.no_apps = ess.no_apps.checked;
                settings.thumb_preview = ess.thumb_preview.checked;
                settings.hideclip = ess.hideclip.checked;
                settings.profile_picture = ess.profile_picture.checked;
                settings.grey_watched = ess.grey_watched.checked;
                settings.blur_watched = ess.blur_watched.checked;
                settings.hide_filters = ess.hide_filters.checked;
                settings.small_recc = ess.small_recc.checked;
                settings.olderhh = ess.olderhh.checked;
                settings.hide_dis = ess.hide_dis.checked;
                settings.hide_queue = ess.hide_queue.checked;
                settings.channel_list = ess.channel_list.checked;
                settings.hide_guide = ess.hide_guide.checked;
                settings.rightside = ess.rightside.checked;
                settings.trending = ess.trending.checked;
                settings.shelves = ess.shelves.checked;
                settings.search_estimate = ess.search_estimate.checked;
                settings.thumbnail_size = ess.thumbnail_size.selectedIndex;
                if (settings.thumbnail_size == 5) {
                    let v = ess.thumbnail_size_m.value;
                    if (!/^\d+$/.test(v)) return alert('Error: invalid value for thumbnails size');
                    settings.thumbnail_size_m = parseInt(v);
                }
                settings.search_thumbnail = ess.search_thumbnail.selectedIndex;
                settings.default_player = ess.default_player.selectedIndex;
                settings.hide_yt_suggested_blocks = ess.hide_yt_suggested_blocks.checked;
                settings.logo_style = ess.logo_style.selectedIndex;
                settings.channel_top = ess.channel_top.selectedIndex;
                settings.logo_target = ess.logo_target.value;
                settings.clear_search = ess.clear_search.checked;
                settings.video_quality = ess.video_quality.selectedIndex;
                ls.setItem('__storage__settings__', JSON.stringify(settings));
                alert('Settings saved');
                history.back();
            });
            e2 = document.createElement('input');
            e2.type = 'button';
            e2.className = 'ytfix_button';
            e2.value = 'Cancel';
            e2.addEventListener('click', () => history.back());
            e3 = document.createElement('input');
            e3.type = 'button';
            e3.className = 'ytfix_button';
            e3.value = 'DONATE PayPal';
            e3.addEventListener('click', () => location.href = 'https://www.paypal.com/donate?hosted_button_id=2EJR4DLTR4Y7Q');
            AddLine(e1, e2);
            e4 = document.createElement('b');
            e4.appendChild(document.createElement("br"));
            e4.appendChild(document.createTextNode('Do you like this script?'));
            AddLine(e4);
            e4 = document.createElement('h5');
            e4.appendChild(document.createTextNode('Please donate to support this project & the developer!'));

            AddLine(e4);
            e4 = document.createElement('paypal');
            e4.appendChild(document.createTextNode('PayPal'));
            AddLine(e4);
            e4.innerHTML += "<form action='https://www.paypal.com/donate' method='post' target='_top'><input type='hidden' name='hosted_button_id' value='2EJR4DLTR4Y7Q' /><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' /><img alt='' border='0' src='https://www.paypal.com/en_US/i/scr/pixel.gif' width='1' height='1' /></form>";
        }

        let int = setInterval(function () {
            if (!document.body) return;
            clearInterval(int);
            document.body.appendChild(back);
            document.body.appendChild(plane);
        }, 1);

        function AddLine() {
            let q = document.createElement('div');
            q.className = 'ytfix_line';
            for (let i = 0, L = arguments.length; i < L; ++i) q.appendChild(arguments[i]);
            plane.appendChild(q);

            return q;
        }
    }
    // apply settings
    let styles = [], intervals = [];
    function addInterval(period, func, params) {
        if (!period) period = 1;

        intervals.push({
            cnt: period,
            period: period,
            call: func,
            params: params || []
        });
    }
    if (settings.hide_guide)
        addInterval(1, function (info) {
            if (info.act == 0) { // observe location change
                let url = document.location.toString();
                if (url != info.url) info.act = 1;
            }
            if (info.act == 1) { // wait for sorp page load completion
                let Q = document.querySelector('yt-page-navigation-progress');
                if (!Q) return;
                if (Q.hasAttribute('hidden')) info.act = 2;
            }
            if (info.act == 2) { // wait for button and press it if necessary
                let guide_button = document.getElementById('guide-button');
                if (!guide_button) return;

                let tmp = guide_button.querySelector('button');
                if (!tmp || !tmp.hasAttribute('aria-pressed')) return;

                if (tmp.attributes['aria-pressed'].value == 'true') guide_button.click();
                else {
                    info.url = document.location.toString();
                    info.act = 0;
                }
            }
        }, [{ act: 2 }]);
    /*player*/

    if (settings.old_player) {
        styles.push(`
      .ytp-volume-slider {
          height: 100%;
          min-height: 40px;
          margin-top: -3px;
          }
      .ytp-larger-tap-buttons .ytp-chrome-controls .ytp-button.ytp-mute-button {
          padding: 2px !important;
      }

      .ytp-larger-tap-buttons .ytp-chrome-controls .ytp-button[aria-pressed="true"]::after {
          width: 20px !important;
          left: 8px !important;
          bottom: 6px !important;
      }
      .ytp-big-mode .ytp-chrome-controls .ytp-button[aria-pressed="true"]::after {
          width: 27px !important;
          left: 14px !important;
          bottom: 10px !important;
      }
      .ytp-chrome-bottom {
          height:36px!important
      }
      .ytp-big-mode .ytp-chrome-bottom {
          height:48px!important
      }
      .ytp-progress-bar-container, .ytp-exp-bigger-button-like-mobile.ytp-small-mode .ytp-progress-bar-container {
          bottom:35px!important
      }
      .ytp-big-mode .ytp-progress-bar-container {
          bottom:44px!important
      }

      .ytp-chrome-controls {
      height:40px!important
      }

      .ytp-chrome-bottom .ytp-chrome-controls .ytp-button {
          height:36px!important;
          width:36px
      }
      .ytp-big-mode .ytp-chrome-bottom .ytp-chrome-controls .ytp-button {
          height:54px!important
      }
      .ytp-chrome-bottom .ytp-chrome-controls .ytp-chapter-title.ytp-button {
          width:auto
      }
      .ytp-time-display, .ytp-exp-bigger-button-like-mobile.ytp-small-mode .ytp-time-display {
      line-height:36px!important
      }
      .ytp-big-mode .ytp-time-display {
          line-height:54px!important
      }
          /*volume*/
      .ytp-volume-slider-handle {
          width: 4px!important;
          height: 13px!important;
          background: #fff;
          border-radius:0!important;
          margin-top:-5px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle {
          width:6px!important;
          height:20px!important;
          margin-top:-10px!important
      }
      .ytp-volume-slider-handle::before {
          background:#f12b24!important
      }
      .ytp-volume-slider-handle::before, .ytp-volume-slider-handle::after {
          width:58px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle::before, .ytp-big-mode .ytp-volume-slider-handle::after {
          height:5px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle::before {
          width:86px!important
      }
      .ytp-volume-slider-active .ytp-volume-panel {
          width:44px!important
      }
      .ytp-big-mode .ytp-volume-slider-active .ytp-volume-panel {
          width:66px!important
      }
      /*settings*/
      .ytp-popup {
          background: rgba(28,28,28,0.8)!important;
          text-shadow: 0 0 2px rgb(0 0 0 / 50%)!important;
          border-radius: 0!important
      }
      .ytp-settings-menu {
          bottom:40px!important
      }
      .ytp-big-mode .ytp-settings-menu {
          bottom:50px!important
      }
      .ytp-panel-menu {
          padding:0!important;
          font-weight:normal!important
      }
      .ytp-settings-menu, .ytp-panel-menu {
          color:#bbb!important
      }
      .ytp-menuitem-icon {
          display:none
      }
      .ytp-panel-header {
          padding:0!important
      }
      .ytp-menuitem-label {
          padding:0 10px!Important;
          font-size:100%!important
      }
      .ytp-menuitem, .ytp-panel-header {
          height:27px!important
      }
      .ytp-big-mode .ytp-menuitem, .ytp-big-mode .ytp-panel-header {
          height:37px!important
      }
      .ytp-menuitem[aria-haspopup=true] .ytp-menuitem-content {
          padding-left:0!important
      }
      .ytp-menuitem[role=menuitemradio] .ytp-menuitem-label {
          padding-left:35px!important
      }
      .ytp-big-mode .ytp-menuitem[role=menuitemradio] .ytp-menuitem-label {
          padding-left:45px!important
      }
      .ytp-menuitem-icon {
      display:none!important
      }
      .ytp-panel {
          min-width:100px!important
      }
      .ytp-big-mode .ytp-panel {
          min-width:115px!important
      }
          /*slider handle*/
      .ytp-slider-handle {
          border-radius:0!important;
          width:6px!important
      }
      .ytp-slider-handle:before {
          width:150px!important
      }
      .ytp-slider-handle:before {
          left:-150px!important;
          background-color:#f12b24!important
      }
      .ytp-slider-handle:after {
          left:0!important
      }
      .ytp-chapter-container {
          float: right!important;
          padding: 2px 5px 0 0;
          line-height:40px!important
      }`);
        (function() {
            'use strict';
            waitForElement(".ytp-exp-bigger-button-like-mobile").then((elm) => elm.setAttribute("class", "html5-video-player ytp-transparent ytp-hide-info-bar")); // fix player
        })();
    }
    if (settings.thumb_preview) {
        styles.push(`
      #avatar-link.ytd-rich-grid-media, #avatar-link.ytd-rich-grid-video-renderer, #masthead-ad, #offer-module, #play.fade-in.ytd-moving-thumbnail-renderer, #play.show.ytd-moving-thumbnail-renderer, #selectionBar.paper-tabs, #thumbnail.ytd-moving-thumbnail-renderer, .not-visible.paper-tabs, .ytp-miniplayer-button, [id*=skeleton], paper-ripple, ytd-compact-movie-renderer.ytd-watch-next-secondary-results-renderer, ytd-compact-promoted-item-renderer, ytd-search ytd-video-renderer[use-prominent-thumbs] #channel-info.ytd-video-renderer>a>yt-img-shadow.ytd-video-renderer {
         display: none!important
      }

      #details.ytd-rich-grid-video-renderer {
         cursor: auto!important;
         pointer-events: none!important
      }

      #details.ytd-rich-grid-video-renderer *>a, #details.ytd-rich-grid-video-renderer *>button.yt-icon-button {
         cursor: pointer!important;
         pointer-events: initial!important
      }`);
    }
    if (settings.hideclip && window.location.href.includes('watch')) {
        waitForElement('#info path[d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"]').then(function(elm) {
            document.querySelector('#info path[d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"]').closest('ytd-button-renderer').style.display = 'none';
            document.querySelector('#info path[d*="M21.8,6.9c-0.2-0.7-0.5-1.4-1.1-2c-0.5-0.6-1.2-1.1-2-1.4C18,3.2,17.2,3,16.3,3c-0.8,0-1.7,0.2-2.4,0.6"]').closest('ytd-button-renderer').style.display = 'none';
        })
        waitForElement('#info path[d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"]').then(function(elm) {
            document.querySelector('#info path[d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"]').closest('ytd-button-renderer').style.display = 'none';
            document.querySelector('#info path[d="M16.5,3C19.02,3,21,5.19,21,7.99c0,3.7-3.28,6.94-8.25,11.86L12,20.59l-0.74-0.73l-0.04-0.04C6.27,14.92,3,11.69,3,7.99 C3,5.19,4.98,3,7.5,3c1.4,0,2.79,0.71,3.71,1.89L12,5.9l0.79-1.01C13.71,3.71,15.1,3,16.5,3 M16.5,2c-1.74,0-3.41,0.88-4.5,2.28 C10.91,2.88,9.24,2,7.5,2C4.42,2,2,4.64,2,7.99c0,4.12,3.4,7.48,8.55,12.58L12,22l1.45-1.44C18.6,15.47,22,12.11,22,7.99 C22,4.64,19.58,2,16.5,2L16.5,2z M11.33,10.86c0.2,0.14,0.53,0.26,1,0.36c0.47,0.1,0.86,0.22,1.18,0.35 c0.99,0.4,1.49,1.09,1.49,2.07c0,0.7-0.28,1.27-0.83,1.71c-0.33,0.26-0.73,0.43-1.17,0.54V17h-2v-1.16 c-0.18-0.05-0.37-0.1-0.53-0.19c-0.46-0.23-0.92-0.55-1.18-0.95C9.15,14.48,9.06,14.24,9,14h2c0.05,0.09,0.07,0.18,0.15,0.25 c0.23,0.19,0.54,0.29,0.92,0.29c0.36,0,0.63-0.07,0.82-0.22s0.28-0.35,0.28-0.59c0-0.25-0.11-0.45-0.34-0.6s-0.59-0.27-1.1-0.39 c-1.67-0.39-2.51-1.16-2.51-2.34c0-0.68,0.26-1.26,0.78-1.71c0.28-0.25,0.62-0.43,1-0.54V7h2v1.12c0.46,0.11,0.85,0.29,1.18,0.57 C14.59,9.05,14.9,9.48,15,10h-2c-0.04-0.09-0.1-0.17-0.16-0.24c-0.17-0.19-0.44-0.29-0.81-0.29c-0.32,0-0.56,0.08-0.74,0.24 c-0.17,0.16-0.26,0.36-0.26,0.6C11.03,10.53,11.13,10.72,11.33,10.86z"]').closest('ytd-button-renderer').style.display = 'none';
        })
    }
    if (settings.logo_style == 0) {
        styles.push(`
      ytd-masthead #logo-icon-container, #contentContainer #logo-icon-container, ytd-topbar-logo-renderer>#logo {
         content:var(--logo-2015-light-header) !important;
         width: 71px !important;
         height: 30px !important;
         padding: 0 !important;
      }

      ytd-masthead[dark] #logo-icon-container, html[dark] #contentContainer #logo-icon-container, ytd-masthead[dark] ytd-topbar-logo-renderer>#logo, html[dark] ytd-topbar-logo-renderer>#logo {
         content:var(--logo-2015-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      #start>#masthead-logo, #masthead>#masthead-logo {
         content:var(--logo-2015-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      html[dark] #start>#masthead-logo, html[dark] #masthead>#masthead-logo {
         content:var(--logo-2015-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      #guide-button.ytd-masthead {
         margin-right: 8px !important;
         top: 1px;
         padding: 0 10px;
      }

      #start.ytd-masthead {
         position: relative;
         left: 2px;
      }

      ytd-searchbox.ytd-masthead {
         padding: 0 !important;
         margin: 0 0 0 38px !important;
      }

      html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
         background-color: var(--oldcolor) !important
      }
      [page-subtype="history"] ytd-sub-feed-selector-renderer [aria-checked="true"] #radioLabel.tp-yt-paper-radio-button, [page-subtype="history"] ytd-sub-feed-selector-renderer #radioLabel.tp-yt-paper-radio-button:hover {
          border-bottom-color:var(--oldcolor)!important
      }
      #country-code.ytd-topbar-logo-renderer {
         padding: 0 !important;
         margin: -1px 2px 0 !important;
         font-size: 11px;
      }

      html:not([dark]) #guide-section-title.ytd-guide-section-renderer,
      html:not([dark]) #guide #header .title {
         color: var(--oldcolor)!important;
      }
      ytd-mini-guide-entry-renderer[is-active] .guide-icon.ytd-mini-guide-entry-renderer {
      color: var(--oldcolor)!important;
      }
      html:not([dark]) ytd-guide-collapsible-section-entry-renderer.ytd-guide-section-renderer:not(:first-child):before {
          color: var(--oldcolor)important;
      }
    /*OLD RED*/
html #subscribe-button ytd-button-renderer #button.ytd-button-renderer,html #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer {
    background:#e62117
}
html #subscribe-button ytd-button-renderer #button.ytd-button-renderer:hover,html #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer:hover {
    background:#cc181e
}
html #subscribe-button ytd-button-renderer #button.ytd-button-renderer:active,html #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer:active {
    background:#b31217
}
      `);
    }
    if (settings.logo_style == 1) {
        styles.push(`
      ytd-masthead #logo-icon-container, #contentContainer #logo-icon-container, ytd-topbar-logo-renderer>#logo {
         content:var(--logo-2017-light-header) !important;
         width: 100px !important;
         height: 30px !important;
         padding: 0 !important;
      }

      ytd-masthead[dark] #logo-icon-container, html[dark] #contentContainer #logo-icon-container, ytd-masthead[dark] ytd-topbar-logo-renderer>#logo, html[dark] ytd-topbar-logo-renderer>#logo {
         content:var(--logo-2017-dark-header) !important;
         width: 100px !important;
         height: 30px !important;
      }

      ytd-topbar-logo-renderer>#logo {
         margin-left: -1px;
      }

      #start>#masthead-logo, #masthead>#masthead-logo {
         content:var(--logo-2017-dark-header) !important;
         width: 100px !important;
         height: 30px !important;
      }

      html[dark] #start>#masthead-logo, html[dark] #masthead>#masthead-logo {
         content:var(--logo-2017-dark-header) !important;
         width: 100px !important;
         height: 30px !important;
      }

      #guide-button.ytd-masthead {
         margin-right: 7px !important;
         top: 1px;
         padding: 0 10px;
      }

      #start.ytd-masthead {
         position: relative;
         left: 2px;
      }

      ytd-searchbox.ytd-masthead {
         padding: 0 !important;
         margin: 0 0 0 38px !important;
      }

      html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
         background-color: #f00 !important
      }
      [page-subtype="history"] ytd-sub-feed-selector-renderer [aria-checked="true"] #radioLabel.tp-yt-paper-radio-button, [page-subtype="history"] ytd-sub-feed-selector-renderer #radioLabel.tp-yt-paper-radio-button:hover {
          border-bottom-color:#f00 !important
      }
      #country-code.ytd-topbar-logo-renderer {
         padding: 0 !important;
         margin: 1px 0 0 0.3px !important;
         font-size: 11px;
      }

      html:not([dark]) #guide-section-title.ytd-guide-section-renderer,
      html:not([dark]) #guide #header .title {
         color: #f00 !important;
      }
      ytd-mini-guide-entry-renderer[is-active] .guide-icon.ytd-mini-guide-entry-renderer {
      color: #f00 !important;
      }
      html:not([dark]) ytd-guide-collapsible-section-entry-renderer.ytd-guide-section-renderer:not(:first-child):before {
          color: #f00 important;
      }

      `);
    }
    if (settings.profile_picture) {
        styles.push(`
      #thumbnail.ytd-profile-column-user-info-renderer,
      yt-img-shadow.ytd-channel-renderer,
      #avatar.ytd-active-account-header-renderer,
      #avatar.ytd-video-owner-renderer,
      #avatar.ytd-c4-tabbed-header-renderer,
      yt-img-shadow.ytd-channel-avatar-editor,
      yt-img-shadow.ytd-guide-entry-renderer,
      #author-thumbnail.ytd-commentbox,
      #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer,
      #author-thumbnail.ytd-comment-simplebox-renderer,
      #avatar.ytd-video-owner-renderer, .ytd-comment-action-buttons-renderer:nth-of-type(2),
      #hearted-thumbnail.ytd-creator-heart-renderer,
      .thumbnail.ytd-notification-renderer,
      ytd-commentbox[is-reply][is-backstage-comment] #author-thumbnail.ytd-commentbox, #author-thumbnail.ytd-backstage-post-renderer yt-img-shadow.ytd-backstage-post-renderer {
         border-radius: 0%!important;
      }`);
    }
    if (settings.hide_filters) {
        styles.push(`
      #header.ytd-rich-grid-renderer {
         display: none!important
      }

      yt-related-chip-cloud-renderer {
         display: none!important
      }`);
    }
    if (settings.hide_queue) {
        styles.push(`
      .ytd-thumbnail[top-right-overlay] ~ .ytd-thumbnail[top-right-overlay] {
         display:none;
      } `);
    }
    if (settings.search_left) {
        styles.push(`
      #center.ytd-masthead {
         margin-right: auto;
      }
      tp-yt-paper-toast.paper-toast-open{position:static!important;}
      yt-notification-action-renderer {
        margin-left:20px;
        margin-top:30px;
      }
      `);
    }
    if (settings.no_apps) {
        styles.push(`
      ytd-topbar-menu-button-renderer.style-scope:nth-child(4) {
         display: none !important;
      } `);
    }
    if (settings.blur_watched) {
      if (settings.grey_watched) {
        styles.push(`
        .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail,
        .watched yt-img-shadow.ytd-thumbnail {
           transition: ease-in;
           transition-duration: 0.2s;
           opacity: 0.4 !important;
           filter: blur(2.2px) grayscale(1)!important;
        }
        .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail:hover,
        .watched yt-img-shadow.ytd-thumbnail:hover {
           transition: ease-out;
           transition-duration: 0.7s;
           opacity: 1.0 !important;
           filter:  blur(0px) grayscale(0) !important;
        }`);
      } else {
        styles.push(`
        .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail,
        .watched yt-img-shadow.ytd-thumbnail {
           transition: ease-in;
           transition-duration: 0.2s;
           filter: blur(2.2px) !important;
        }
        .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail:hover,
        .watched yt-img-shadow.ytd-thumbnail:hover {
           transition: ease-out;
           transition-duration: 0.7s;
           filter:  blur(0px) !important;
        }`);
      }
    } else {
      if (settings.grey_watched) {
        styles.push(`
        .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail,
        .watched yt-img-shadow.ytd-thumbnail {
           transition: ease-in;
           transition-duration: 0.2s;
           opacity: 0.4 !important;
           filter: grayscale(1)!important;
        }
        .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail:hover,
        .watched yt-img-shadow.ytd-thumbnail:hover {
           transition: ease-out;
           transition-duration: 0.7s;
           opacity: 1.0 !important;
           filter:  grayscale(0) !important;
        }`);
      }
    }
    if (settings.thumbnail_size) {
        styles.push(`div#contents.style-scope.ytd-rich-grid-renderer {display:block!important}

          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer {display:inline!important}
          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div {display:inline!important;margin:0!important}
          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div > ytd-rich-item-renderer {display:inline-block!important; width: ${[0, 193, 240, 360, 480, settings.thumbnail_size_m][settings.thumbnail_size]}px !important; contain:none!important
       }`);
    }
    if (!(settings.rightside)) {
        waitForElement('#top-row.ytd-video-secondary-info-renderer').then(function(elm) {
            var watchfrag = document.querySelector('#top-row.ytd-video-secondary-info-renderer');
            document.querySelector('ytd-video-primary-info-renderer > #container').appendChild(watchfrag);
        });
        styles.push(`
        ytd-app #channel-name.ytd-video-owner-renderer {
          top:-16px!important
      }
      ytd-app ytd-playlist-sidebar-secondary-info-renderer #channel-name.ytd-video-owner-renderer {
        top:0!important
      }
      ytd-app #info ytd-video-primary-info-renderer {
         margin-top:10px;
      }
      ytd-app #info .ryd-tooltip, #info #sentiment.ytd-video-primary-info-renderer {
         float:right;
         top:-38px!important
      }
      ytd-app #info .top-level-buttons.ytd-menu-renderer {
         border:none
      }
      ytd-app #info {
         top:75px!important
      }
      ytd-app #info ytd-toggle-button-renderer.style-text[is-icon-button] {
    position:unset!important;
      }
    ytd-app #info ytd-toggle-button-renderer.style-text[is-icon-button]:last-of-type {
    left:0
       }
      `);
    }
    if (settings.trending) {
        waitForElement('#items > ytd-guide-entry-renderer').then(() => restoreAppbarLinks());
    }
    if (settings.shelves) {
        window.addEventListener("yt-page-data-updated", injectShelvesHp, false);
        styles.push(`
        ytd-browse[page-subtype='home'] ytd-rich-grid-renderer {
            display: none !important;
        }
        ytd-browse[page-subtype='home'] #contents.ytd-item-section-renderer > ytd-shelf-renderer.ytd-item-section-renderer:first-child {
            margin-top: 17px;
            padding-bottom: 3px;
        }

        ytd-browse[page-subtype='home'] #contents.ytd-shelf-renderer {
            margin-top: 5px !important;
        }

        ytd-browse[page-subtype='home'] ytd-thumbnail #thumbnail.ytd-thumbnail {
            margin-left: 0;
        }

        ytd-browse[page-subtype='home'] ytd-section-list-renderer {
            padding: 0 !important;
        }

        ytd-browse[page-subtype='home'] #contents.ytd-item-section-renderer {
            padding: 0 16px;
        }
        
        ytd-browse[page-subtype='home'] #scroll-container.yt-horizontal-list-renderer ytd-thumbnail-overlay-time-status-renderer {
            margin-top: 5px !important;
        }
        
        ytd-browse[page-subtype='home'] ytd-shelf-renderer img.yt-img-shadow {
            max-height: var(--ytd-grid-thumbnail_-_height);
        }`);
    }
    if (settings.search_estimate) {
        window.addEventListener("yt-page-data-updated", insertResultsEstimate, false);
    }
    if (settings.small_recc) {
        styles.push(`#secondary :not([watch-feed-big-thumbs]) ytd-thumbnail, #secondary :not([watch-feed-big-thumbs]) ytd-playlist-thumbnail {
        width:120px;
        height:67.5px
    }
        ytd-app #secondary #video-title[class*="renderer"], ytd-app #secondary #movie-title[class*="renderer"] {
        font-weight:500;
        font-size:13px!important;
        line-height:1.1!important;
        margin-bottom:0
    }
        ytd-app #secondary #byline-container #text.ytd-channel-name, html ytd-app #secondary #metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
        line-height:15.4px;
    }
    ytd-app #secondary #byline-container #text.ytd-channel-name, html:not([dark]) ytd-app #secondary #metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
        color:#999!important
    }
        #secondary #contents .ytd-item-section-renderer:not(:first-child) {
        margin-top:15px!important
    }
        #dismissible ytd-badge-supported-renderer.badges .badge.ytd-badge-supported-renderer {
        position:absolute;
        right:10px;
        margin-top:-16px
    }
    #secondary ytd-thumbnail ytd-thumbnail-overlay-bottom-panel-renderer.style-scope {
        top:0!important;
        position:relative;
        left:70px!important
    }
    #secondary ytd-thumbnail-overlay-bottom-panel-renderer.style-scope::before {
        top:-25px!important
    }
    #secondary ytd-thumbnail-overlay-bottom-panel-renderer.style-scope::after {
        top:-10px!important
    }
    yt-icon.style-scope.ytd-thumbnail-overlay-bottom-panel-renderer {
       top:2px!important
    }
    `);
    }
    if (settings.olderhh) {
        styles.push(`
.ytd-yoodle-renderer, html ytd-yoodle-renderer {
    display:none!important
}
html:not([dark]) #owner-sub-count.ytd-video-owner-renderer {
    margin-left:12px!important;
    border-left-width:1px!important;
    padding-left:4px!important;
    clip-path:inset(0 0 0 -10px);
    overflow:visible!important
}
html:not([dark]) #owner-sub-count.ytd-video-owner-renderer:before {
    content: '';
    position: absolute;
    top: 3px;
    left: -6px;
    border-width: 6px 6px 6px 0;
    border-style: solid;
    margin-top: 2px;
    border-color: transparent #ccc;
}
html:not([dark]) #owner-sub-count.ytd-video-owner-renderer:after {
    margin-top: 2px;
    content: '';
    position: absolute;
    top: 4px;
    left: -5px;
    border-width: 5px 5px 5px 0;
    border-style: solid;
    border-color: transparent #fafafa;
}
#tabsContent.tp-yt-paper-tabs > :not(#selectionBar):first-of-type .tab-content.tp-yt-paper-tab {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-channels-c4-vflMaOr5z.png) 0 -19px;
    background-size: auto;
    width:20px;
    height: 15px;
    color:transparent;
    margin-left:3px
}
#tabsContent.tp-yt-paper-tabs > :not(#selectionBar):first-of-type:hover .tab-content.tp-yt-paper-tab, #tabsContent.tp-yt-paper-tabs > :not(#selectionBar):first-of-type.iron-selected .tab-content.tp-yt-paper-tab {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-channels-c4-vflMaOr5z.png) -64px 0;
}
#tabsContent.tp-yt-paper-tabs > :not(#selectionBar):first-of-type .tab-content.tp-yt-paper-tab:after {
    content:"w.";
    display:inline-block;
    height: 13px;
    width: 13px;
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflyNVipo.png) -85px -1018px;
    left:-2px;
    position:relative
}
#tabsContent.tp-yt-paper-tabs > :not(#selectionBar):first-of-type:hover .tab-content.tp-yt-paper-tab:after {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflyNVipo.png) 0 -168px;
}
html[dark] #tabsContent.tp-yt-paper-tabs > :not(#selectionBar):first-of-type:hover .tab-content.tp-yt-paper-tab:after {
    filter:invert(1)
}
#tabsContent.tp-yt-paper-tabs > :not(#selectionBar):first-of-type {
    padding-right:9px
}
        [lang="en"] tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"] yt-formatted-string {
            font-size:0!important
        }
        [lang="en"] tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"] yt-formatted-string:before {
            content:"What to Watch";
            font-size:13px!important;
            line-height:32px!important
        }
        .style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default:nth-of-type(1) yt-icon{
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflY-jC_p.png) -32px -2211px!important;
  color:transparent;
  fill:transparent
}
        #info #menu ytd-toggle-button-renderer:first-child yt-icon {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflRdOrH4.png) 0 -520px;
}
#info #menu ytd-toggle-button-renderer:first-child:hover yt-icon {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflRdOrH4.png) 0 -380px;
}
#info #menu ytd-toggle-button-renderer:nth-child(2) yt-icon {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflRdOrH4.png) 0 -946px
}
#info #menu ytd-toggle-button-renderer:nth-child(2):hover yt-icon {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflRdOrH4.png) 0 -946px
}
#info #menu ytd-toggle-button-renderer a {
    opacity:.75
}
html #info ytd-toggle-button-renderer a yt-formatted-string, html #info ytd-toggle-button-renderer a yt-icon-button {
    opacity:1!important
}
#info #menu ytd-toggle-button-renderer:nth-child(2):hover a {
    opacity:1
}
#info #ryd-bar, #info #return-youtube-dislike-bar, #info #like-bar.ytd-sentiment-bar-renderer {
    background:#590!important
}
html:not([dark]) #info #menu ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer {
    color:#333;
    font-weight:400
}
ytd-video-view-count-renderer span.ytd-video-view-count-renderer {
    color:#333!Important
}
html ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer {
    width:22px!important;
}
#notification-preference-button button.yt-icon-button {
    left:1px!important
}
#notification-preference-button {
    box-shadow: 0 1px 0 rgb(0 0 0 / 15%);
}
html ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer {
    box-shadow:none!important
}
html #subscribe-button ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer, paper-button.keyboard-focus.ytd-subscribe-button-renderer {
    background-image: linear-gradient(to top,#c7231a 0,#e62c22 100%);
    box-shadow: 0 1px 0 rgb(0 0 0 / 15%);
}
html #subscribe-button ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer:hover {
    box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
    background-image: linear-gradient(to top,#dc2f2c 0,#fa362a 100%);
}
html #subscribe-button ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer:active {
    background-image: linear-gradient(to top,#b01d13 0,#c6282c 100%);
    box-shadow: inset 0 1px 0 rgb(0 0 0 / 30%);
}
ytd-subscribe-button-renderer #notification-preference-button button.yt-icon-button {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflRdOrH4.png) -12px -1083px;
    width:15px;
    height:15px;
}
.ytd-two-column-search-results-renderer #subscribe-button ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer {
    background-image:linear-gradient(#f8f8f8,#f7f7f7)!important
}
ytd-subscribe-button-renderer #notification-preference-button:hover button.yt-icon-button {
    background-position: -12px -902px;
}
ytd-subscribe-button-renderer #notification-preference-button button.yt-icon-button {
    opacity:1!important
}
yt-formatted-string#subscriber-count.ytd-c4-tabbed-header-renderer {
    background:#fafafa
}
html[dark] yt-formatted-string#subscriber-count.ytd-c4-tabbed-header-renderer {
   background:transparent
}
#masthead-container #masthead #search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflRdOrH4.png) -44px -1053px;
    opacity:.6
}
#masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3) yt-icon {
    background-image: linear-gradient(to bottom,#fcfcfc 0,#f8f8f8 100%);
    text-shadow: 0 1px 0 rgb(255 255 255 / 50%);
    border:1px solid #d3d3d3;
    width:auto;
    padding:0 10px;
    opacity:1;
    height:28px;
}
html[dark] #masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3) yt-icon {
    background:rgb(28,28,28) !important;
    border:1px solid rgba(110,110,110,.3) !important;
    text-shadow:none
}
html[dark][style] ytd-topbar-menu-button-renderer:nth-last-of-type(3) yt-icon {
    filter:invert(0)!important
}
#masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3):hover yt-icon {
    border-color: #c6c6c6;
    background:#f0f0f0;
    box-shadow:none
}
#masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3):active yt-icon {
    border-color: #c6c6c6;
    background-color: #e9e9e9;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 20%);
}
#masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3) yt-icon-button {
    padding-top:5px
}
#masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3),ytd-topbar-menu-button-renderer:nth-last-of-type(3) a.yt-simple-endpoint.ytd-topbar-menu-button-renderer {
    width:70px;
    opacity:1
}
#masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3) yt-icon:before {
    content:"Upload";
    display:inline-block;
    font:bold 11px arial;
    color:#333;
    letter-spacing:0
}
html[dark] #masthead ytd-topbar-menu-button-renderer:nth-last-of-type(3) yt-icon:before {
    color:#fff
}
#guide-button.ytd-app, #guide-icon.ytd-masthead {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflVm19yS.png) -20px -697px!important;
    background-size: auto;
    width: 16px;
    height: 16px;
}
#guide-button.ytd-masthead {
    padding:0 14px 0 6px;
    width:44px;
    height:26px;
    border:1px solid transparent;
    order:2;
    margin-right:12px;
    margin-left:4px
}
#logo.ytd-masthead {
    width:110px
}
#masthead:hover #guide-button.ytd-masthead {
    border-color: #d3d3d3;
    background: #f8f8f8;
    box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
}
html[dark] #masthead:hover #guide-button.ytd-masthead {
    background:rgb(28,28,28);
    border:1px solid rgba(110,110,110,.3)
}
#guide-button.ytd-app, #guide-icon.ytd-masthead:after {
    content:"";
    display:inline-block;
    border:1px solid transparent;
    margin-left: 26px;
    border-width: 3px 3px 0;
    border-top-color: #e63127;
}
html:not([dark]) .buttons.yt-confirm-dialog-renderer {
    background:#f1f1f1
}
yt-img-shadow.ytd-topbar-menu-button-renderer {
    border-radius:0!important
}
#menu-container.ytd-video-primary-info-renderer {
    margin-right:0!important
}
ytd-app #logo.ytd-topbar-logo-renderer,ytd-app ytd-yoodle-renderer.ytd-topbar-logo-renderer, ytd-masthead[dark][style] ytd-topbar-logo-renderer > #logo, html[dark][style] ytd-topbar-logo-renderer > #logo {
    background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vflbKBZkj.png) 0 -1492px;
    background-size: auto;
    width: 72px;
    height: 30px;
    width: 77px!important;
    height: 36px!important;
    padding:0!important;
    content:none!important;
    fill:none!Important;
    margin-left:20px
}
yt-icon.ytd-logo {
    display:none
}
ytd-app #logo.ytd-masthead {
    width:auto
}
ytd-app #start.ytd-masthead {
    width:176px
}
html[dark] ytd-app #logo.ytd-topbar-logo-renderer,html[dark] ytd-app ytd-yoodle-renderer.ytd-topbar-logo-renderer {
    background: url(https://s.ytimg.com/yt/img/doodles/earth_hour_sprite-vflQCGwng.png);
    background-position:0 -40px
}
ytd-app #country-code.ytd-topbar-logo-renderer {
    margin:0!important
}
/*button*/
#share yt-button-renderer #button.yt-button-renderer.style-primary[aria-disabled="true"] {
    opacity:.5
}
html:not([dark]) yt-button-renderer #button.yt-button-renderer.style-blue-text,html:not([dark]) ytd-button-renderer #button.ytd-button-renderer.style-blue-text,html:not([dark]) #share yt-button-renderer #button.yt-button-renderer.style-primary {
    background-image: linear-gradient(to bottom,#5384be 0,#3f76b7 100%);
    border:1px solid #3f76b7;
    color:#fff;
    font:bold 11px arial;
    text-shadow: 0 1px 0 rgb(0 0 0 / 25%);
}
yt-button-renderer #button.yt-button-renderer.style-blue-text yt-formatted-string, ytd-button-renderer #button.ytd-button-renderer.style-blue-text yt-formatted-string {
    font:bold 11px arial
}
html:not([dark]) yt-button-renderer #button.yt-button-renderer.style-blue-text:hover,html:not([dark])  ytd-button-renderer #button.ytd-button-renderer.style-blue-text:hover,html:not([dark])  #share yt-button-renderer #button.yt-button-renderer.style-primary:hover {
    background-image: linear-gradient(to bottom,#3f76b7 0,#3d71b0 100%);
    border-color: #325e92;
}
html:not([dark]) yt-button-renderer #button.yt-button-renderer.style-blue-text:active,html:not([dark])  ytd-button-renderer #button.ytd-button-renderer.style-blue-text:active,html:not([dark])  #share yt-button-renderer #button.yt-button-renderer.style-primary:active {
    border-color: #325e92;
    background: #3b6fac;
    box-shadow:none
}
html:not([dark]) yt-button-renderer#cancel-button #button.yt-button-renderer.style-text,html:not([dark])  ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text,html:not([dark])  #cancel yt-button-renderer #button.yt-button-renderer.style-blue-text{
    background-image: linear-gradient(to bottom,#fcfcfc 0,#f8f8f8 100%);
    text-shadow: 0 1px 0 rgb(255 255 255 / 50%);
    border:1px solid #d3d3d3;
    color:#333
}
#cancel yt-button-renderer #button.yt-button-renderer.style-blue-text yt-formatted-string {
    color:#333;
    font-weight:700;
}
html:not([dark]) yt-button-renderer#cancel-button #button.yt-button-renderer.style-text:hover,html:not([dark])  ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text:hover,html:not([dark])  #cancel yt-button-renderer #button.yt-button-renderer.style-blue-text:hover {
    border-color: #c6c6c6;
    background-image: linear-gradient(to bottom,#f8f8f8 0,#eee 100%);
    box-shadow:none
}
html:not([dark]) yt-button-renderer#cancel-button #button.yt-button-renderer.style-text:active,html:not([dark])  ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text:active,html:not([dark])  #cancel yt-button-renderer #button.yt-button-renderer.style-blue-text:active {
    border-color: #c6c6c6;
    background-color: #e9e9e9;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 20%);
}
html:not([dark]) #guide #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
    background-image: linear-gradient(to bottom,#444 0,#333 100%);
}
html:not([dark]) #guide ytd-guide-entry-renderer[active] > #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, html:not([dark]) #guide ytd-guide-entry-renderer[active] > #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
    background-image: linear-gradient(to bottom,#af2b26 0,#942422 100%);
    text-shadow: -1px -1px 0 rgb(0 0 0 / 25%);
}
html:not([dark]) #guide #guide-section-title.ytd-guide-section-renderer, html:not([dark]) #guide #header ytd-guide-entry-renderer .title {
    color:#999!important;
    font:700 11px arial;
}
.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:first-child .yt-icon-button {
    background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vfl_va3g5.png) -31px -963px!important;
}
.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:last-child .yt-icon-button {
    background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vfl_va3g5.png) -24px -544px!important;
}
.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:hover .yt-icon-button, .ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:active .yt-icon-button {
    opacity:.5!Important
}
.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer.style-default-active .yt-icon-button#button {
    opacity:.8!important
}
ytd-playlist-panel-video-renderer {
    border:1px solid transparent;
    border-width:1px 0;
    border-top: 1px solid #393939;
    border-bottom: 1px solid #1d1d1d;
    text-shadow: 0 1px 0 #000;
}
ytd-playlist-panel-video-renderer[selected] {
    border-color:#4f4f4f;
    background:#4f4f4f
}
ytd-app .playlist-items.ytd-playlist-panel-renderer {
    background-color:#2b2b2b!important
}
ytd-app ytd-playlist-panel-video-renderer:hover:not(.dragging) {
    border-color:#353535;
    background-color:#353535!important
}
ytd-app ytd-playlist-panel-video-renderer[selected] #index.ytd-playlist-panel-video-renderer, ytd-app #secondary h4 #video-title.ytd-playlist-panel-video-renderer {
    color:#fff!Important
}
ytd-app #byline.ytd-playlist-panel-video-renderer {
    color:#666
}
ytd-app ytd-playlist-panel-video-renderer[selected] #byline.ytd-playlist-panel-video-renderer {
    color:#fff!important
}
`);
    }
    if (settings.hide_dis) {
        styles.push(`ytd-toggle-button-renderer.style-text[is-icon-button]:nth-of-type(2) #text {
    display: none !important;
}`);
    }
    if (settings.hide_yt_suggested_blocks) {
        styles.push(`div#contents.ytd-rich-grid-renderer ytd-rich-section-renderer {
         display: none!important;
         }
         ytd-thumbnail-overlay-endorsement-renderer {
         display: none !important; }
         ytd-rich-section-renderer[align-within-rich-grid]{display: none!important;
      }`);
    }
    if (settings.search_thumbnail) {
        let sz = [0, 193, 240][settings.search_thumbnail] + 'px !important';
        // min-width defaults to 240px, max-width defaults to 360px
        // sizes for: videos, playlists, channels, mixes
       styles.push(`ytd-video-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-video-renderer,
       ytd-video-renderer[is-search] ytd-thumbnail.ytd-video-renderer, 
       ytd-video-renderer[use-prominent-thumbs] #channel-info.ytd-video-renderer,
       ytd-playlist-renderer[use-prominent-thumbs] ytd-playlist-thumbnail.ytd-playlist-renderer, ytd-radio-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-radio-renderer {
         padding: 0!important;
         min-width: ${sz};
         max-width: ${sz};
         }
       ytd-video-renderer:not([use-prominent-thumbs]) ytd-thumbnail.ytd-video-renderer,
       ytd-video-renderer[is-search] ytd-thumbnail.ytd-video-renderer {
            min-height: 108.55px !important;
            max-height: 138.55px;
      }`);
    }
    if (settings.channel_list) {
        styles.push(`
[page-subtype="channels"] ytd-section-list-renderer #header-container ytd-channel-sub-menu-renderer {
    border-bottom:0!important;
    padding-bottom:0!important;
    margin-bottom:0!important
}
html[dark] [page-subtype="channels"] ytd-section-list-renderer #header-container ytd-channel-sub-menu-renderer {
   border-color:var(--yt-spec-10-percent-layer)
}
#items.ytd-grid-renderer > ytd-grid-video-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-downloaded-video-grid-video-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-grid-radio-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-grid-channel-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-grid-playlist-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-grid-movie-playlist-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-grid-movie-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-grid-show-renderer.ytd-grid-renderer, #items.ytd-grid-renderer > ytd-game-card-renderer.ytd-grid-renderer{
  display:inline-block!important;
}
#items.ytd-grid-renderer{
  flex-direction:column!important;
}
[page-subtype="channels"] #contents > ytd-item-section-renderer > #contents > ytd-grid-renderer > #items > ytd-grid-video-renderer #details.ytd-grid-video-renderer{
  display:inline-block!important;
  position: absolute;
  left: 18%!important;
  top: 10%;
  width: 1018px !important;
}
ytd-app ytd-section-list-renderer[page-subtype="channels"] #items.ytd-grid-renderer > ytd-grid-video-renderer.ytd-grid-renderer {
    width: 1245px !important;
}
.style-scope.ytd-grid-renderer.watched #details.ytd-grid-video-renderer{
  top: 10%!important;
}
ytd-grid-video-renderer #video-title.yt-simple-endpoint.ytd-grid-video-renderer{
  font-size:14px!important;
}
#scroll-container.yt-horizontal-list-renderer ytd-grid-video-renderer #video-title.yt-simple-endpoint.ytd-grid-video-renderer{
  font-size:13px!important;
}
#metadata-line.ytd-grid-video-renderer span.ytd-grid-video-renderer{
  font-size:12px!important;
}
#scroll-container.yt-horizontal-list-renderer #metadata-line.ytd-grid-video-renderer span.ytd-grid-video-renderer{
  font-size:11px!important;
}
ytd-browse[page-subtype~="channels"] ytd-two-column-browse-results-renderer.ytd-browse * > #items.ytd-grid-renderer > ytd-grid-video-renderer.ytd-grid-renderer{
  margin-bottom:10px!important;
}
ytd-browse[page-subtype~="channels"] ytd-two-column-browse-results-renderer.ytd-browse * > #items.ytd-grid-renderer > ytd-grid-video-renderer.ytd-grid-renderer{
  padding-top:15px!Important;
  border-top:1px solid #e2e2e2!important;
  margin-left: -17px;
  padding-left: 17px !important;
}`);
    }
    if (settings.clear_search) {
        styles.push(`
      ytd-two-column-search-results-renderer ytd-shelf-renderer.style-scope.ytd-item-section-renderer, ytd-two-column-search-results-renderer ytd-horizontal-card-list-renderer.style-scope.ytd-item-section-renderer {
         display: none!important
      }`);
    }

    const sizes = [undefined, { w: 640, h: 360 }, { w: 854, h: 480 }, { w: 1280, h: 720 }];
    let size_norm = sizes[settings.default_player];
    if (size_norm) {
        styles.push(`
      #primary.ytd-watch-flexy, #player-container-outer {
         --ytd-watch-flexy-min-player-width: ${size_norm.h}px !important;
         min-width: --ytd-watch-flexy-min-player-width: 100% !important;
         max-width: ${size_norm.w}px !important
      }

      ytd-watch-flexy[flexy_][is-two-columns_][is-extra-wide-video_] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy_][is-two-columns_][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
         min-width: ${size_norm.w}px!important
      }

      ytd-watch-flexy[flexy_][flexy-large-window_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][transcript-opened_][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][playlist][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][should-stamp-chat][is-two-columns_]:not([is-extra-wide-video_]) {
         --ytd-watch-flexy-min-player-height: ${size_norm.h}px !important;`);

        addInterval(1, function (sn, st) {
            let eq = document.getElementsByTagName("ytd-watch-flexy");
            if (!eq.length) return;
            let s = eq[0].hasAttribute('size_norm') ? st : sn;
            if (!s) return;
            let ep = document.getElementById("movie_player");
            if (ep && ep.setInternalSize && ep.isFullscreen && ep.getPlayerSize && !ep.isFullscreen() && ep.getPlayerSize().width != s[0])
                ep.setInternalSize(s[0], s[1]);
        }, [size_norm]);
    }
    if (settings.logo_target) {
        let X = settings.logo_target;
        if (X[0] != '/') X = '/' + X;
        X = document.location.origin + X;
        addInterval(1, function (url) {
            let l = document.querySelectorAll('a#logo');
            for (let i = l.length; --i >= 0;) {
                let Q = l[i];
                let D = Q.data;
                if (D && D.commandMetadata && Q.href != url) {
                    Q.href = url;
                    D.commandMetadata.webCommandMetadata.url = url;
                }
            }
        }, [X]);
    }
    if (settings.channel_top)
        styles.push('app-header#header.style-scope.ytd-c4-tabbed-header-renderer{transform:none!important;position:absolute;left:0px!important;top:0px;margin-top:0px}');
    if (settings.channel_top > 1) {
        styles.push('div#contentContainer.style-scope.app-header-layout{padding-top:148px!important}');
        styles.push('div#contentContainer.style-scope.app-header{height:148px!important}');
        styles.push('div.banner-visible-area.style-scope.ytd-c4-tabbed-header-renderer{display:none!important}');
    }
    if (settings.video_quality) {
        const qv = ['', 'tiny', 'small', 'medium', 'large', 'hd720', 'hd1080', 'hd1440', 'hd2160'];
        function IsQualityAvailable(qq, q) {
            for (let i = qq.length; --i >= 0;) if (q == qq[i]) return true;
            return false;
        }
        function UpdateVideoQuality(st) {
            let ep = document.getElementById("movie_player");
            if (!ep || !ep.getPreferredQuality || !ep.getAvailableQualityLevels || !ep.setPlaybackQualityRange || !ep.getVideoData || ep.getPreferredQuality() != 'auto') return;
            let vid = ep.getVideoData().video_id;
            if (st.fail == vid) return;	// last time on this video we've issues

            let qq = ep.getAvailableQualityLevels();
            if (!qq || !qq.length) return;
            let det = settings.video_quality;
            while (det < qv.length && !IsQualityAvailable(qq, qv[det])) ++det;
            if (det == qv.length) {
                console.log('Unknown video qualities in list: ', qq);
                st.fail = vid;
                return;
            }
            ep.setPlaybackQualityRange(qv[det], qv[det]);
        };
        addInterval(1, UpdateVideoQuality, [{}]);
    }

    // "settings" button

    let settingsButtonMark;

    function createSettingsButton() {
        if (settingsButtonMark && settingsButtonMark.parentNode) return;
        let toolBar = document.getElementsByTagName('ytd-topbar-menu-button-renderer');
        let _1st = toolBar[0];
        if (!_1st) return;
        toolBar = _1st.parentNode;
        let sb = document.createElement('ytd-topbar-menu-button-renderer');
        sb.className = 'style-scope ytd-masthead style-default';
        sb.setAttribute('use-keyboard-focused', '');
        sb.setAttribute('is-icon-button', '');
        sb.setAttribute('has-no-text', '');
        toolBar.insertBefore(sb, toolBar.childNodes[0]);
        let mark = document.createElement('fix-settings-mark');
        mark.style = 'display:none';
        toolBar.insertBefore(mark, sb); // must be added to parent node of buttons in order to Polymer dropped it on soft reload
        let icb = document.createElement('yt-icon-button');
        icb.id = 'button';
        icb.className = 'style-scope ytd-topbar-menu-button-renderer style-default';
        let aa = document.createElement('a');
        aa.className = 'yt-simple-endpoint style-scope ytd-topbar-menu-button-renderer';
        aa.setAttribute('tabindex', '-1');
        aa.href = '/7kttube-settings';
        aa.appendChild(icb);
        sb.getElementsByTagName('div')[0].appendChild(aa); // created by YT scripts
        let bb = icb.getElementsByTagName('button')[0]; // created by YT scripts
        bb.setAttribute('aria-label', 'fixes settings');
        let ic = document.createElement('yt-icon');
        ic.className = 'style-scope ytd-topbar-menu-button-renderer';
        bb.appendChild(ic);
        let gpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        gpath.className.baseVal = 'style-scope yt-icon';
        gpath.setAttribute('d', 'M1 20l6-6h2l11-11v-1l2-1 1 1-1 2h-1l-11 11v2l-6 6h-1l-2-2zM13 15l2-2 8 8v1l-1 1h-1zM9 11l2-2-2-2 1.5-3-3-3h-2l3 3-1.5 3-3 1.5-3-3v2l3 3 3-1.5z');
        let svgg = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svgg.className.baseVal = 'style-scope yt-icon';
        svgg.appendChild(gpath);
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.className.baseVal = 'style-scope yt-icon';
        svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
        svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false');
        svg.setAttribute('style', 'pointer-events: none; display: block; width: 100%; height: 100%;');
        svg.appendChild(svgg);
        ic.appendChild(svg); // YT clears *ic
        settingsButtonMark = mark;
    }
    addInterval(1, createSettingsButton, []);

    GM_addStyle(styles.join(''));
    // intervals
    setInterval(function () {
        for (let i = intervals.length; --i >= 0;) {
            let Q = intervals[i];
            if (--Q.cnt > 0) continue;
            Q.call.apply(this, Q.params);
            Q.cnt = Q.period;
        }
    }, 1000);
    console.log('Fixed loaded');
}
