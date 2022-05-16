async function getSAPISIDHash() {
    function getCookie(name) {
        const value = `; ${decodeURIComponent(document.cookie)}`;
        const parts = value.split(`; ${name}=`);
        return parts.pop().split(';').shift();
    }

    async function SHA1(str) {
        const buf = await crypto.subtle.digest("SHA-1", new TextEncoder("utf-8").encode(str));
        return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
    }

    const time = (Math.round(new Date() / 1000));
    const hash = await SHA1(`${time} ${getCookie("SAPISID")} https://www.youtube.com`);
    return `SAPISIDHASH ${time}_${hash}`;
}

async function getShelvesHp() {
    // Request the current video page again and retrieve required data for loading comments.
    const itc = JSON.parse(JSON.stringify(yt.config_.INNERTUBE_CONTEXT));
    itc.client.clientName = "ANDROID";
    itc.client.clientVersion = "15.14.33";

    const reqbody = {
        "context": itc,
        "browseId": "FEwhat_to_watch"
    }

    const response = await fetch(("https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"), {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credientials: 'same-origin',
        headers:
        {
            ...((yt.config_.LOGGED_IN) && {"Authorization": await getSAPISIDHash()}),
            ...((yt.config_.LOGGED_IN) && {"X-Goog-AuthUser": "0"}),
            ...((yt.config_.DELEGATED_SESSION_ID ? true: false) && {"X-Goog-PageId": yt.config_.DELEGATED_SESSION_ID}),
            'X-Goog-Visitor-Id': yt.config_.INNERTUBE_CONTEXT.client.visitorData,
            'X-YOUTUBE-CLIENT-NAME': 'ANDROID',
            'X-YOUTUBE-CLIENT-VERSION': '15.14.33',
            'X-ORIGIN': "https://www.youtube.com"
        },
        redirect: 'follow',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify(reqbody)
    });

    return response.json();
}

function parseHpData(hpdata) {
    var shelvesIndex = hpdata.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;

    // Emulate WEB v1 shelves wrapper
    var emulatedWebV1 = {
        "contents": {
            "twoColumnBrowseResultsRenderer": {
                "tabs": [
                    {
                        "tabRenderer": {
                            "tabIdentifier": "FEwhat_to_watch",
                            "selected": true,
                            "content": {
                                "sectionListRenderer": {
                                    "contents": []
                                }
                            }
                       }
                    }
                ]
            }
        }
    };

    var emuContentsIndex = emulatedWebV1.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;

    for (const shelf of shelvesIndex) {
        const curShelfR = shelf.shelfRenderer?.content?.horizontalListRenderer;
        if (typeof curShelfR === 'undefined') continue;
        for (const vid of curShelfR.items) {
            const curVidR = vid.gridVideoRenderer;
            if (typeof curVidR === 'undefined') continue;
            
            // Full view counts
            curVidR.shortViewCountText.accessibility.accessibilityData.label = curVidR.viewCountText.runs[0].text;
            curVidR.shortViewCountText.runs = curVidR.viewCountText.runs;

            // Fix crash
            if (curVidR.lengthText == null)
                curVidR.lengthText = {simpleText: ""};
            else if (curVidR.lengthText.simpleText == null)
                curVidR.lengthText.simpleText = curVidR.lengthText.runs[0].text ?? "";

            if (typeof curVidR.thumbnailOverlays !== 'undefined') {
                var timeStatusRenderer;
                if (typeof curVidR.badges === 'undefined') {
                    timeStatusRenderer = {
                        "text": {
                            "simpleText": curVidR.lengthText.simpleText ?? ""
                        },
                        "style": "DEFAULT"
                    };
                }
                else {
                    timeStatusRenderer = null;
                }

                curVidR.thumbnailOverlays = [
                    {
                        "thumbnailOverlayTimeStatusRenderer": timeStatusRenderer
                    },
                    {
                        "thumbnailOverlayToggleButtonRenderer": {
                            "isToggled": false,
                            "untoggledIcon": {
                                "iconType": "WATCH_LATER"
                            },
                            "toggledIcon": {
                                "iconType": "CHECK"
                            },
                            "untoggledTooltip": "Watch later",
                            "toggledTooltip": "Added",
                            "untoggledServiceEndpoint": {
                                "clickTrackingParams": "CKUEEPnnAxgCIhMI47nlgbGF8QIVoCmtBh3pggtN",
                                "commandMetadata": {
                                    "webCommandMetadata": {
                                        "sendPost": true,
                                        "apiUrl": "/youtubei/v1/browse/edit_playlist"
                                    }
                                },
                                "playlistEditEndpoint": {
                                    "playlistId": "WL",
                                    "actions": [
                                        {
                                            "addedVideoId": curVidR.videoId,
                                            "action": "ACTION_ADD_VIDEO"
                                        }
                                    ]
                                }
                            },
                            "toggledServiceEndpoint": {
                                "clickTrackingParams": "CKUEEPnnAxgCIhMI47nlgbGF8QIVoCmtBh3pggtN",
                                "commandMetadata": {
                                    "webCommandMetadata": {
                                        "sendPost": true,
                                        "apiUrl": "/youtubei/v1/browse/edit_playlist"
                                    }
                                },
                                "playlistEditEndpoint": {
                                    "playlistId": "WL",
                                    "actions": [
                                        {
                                            "action": "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",
                                            "removedVideoId": curVidR.videoId
                                        }
                                    ]
                                }
                            },
                            "untoggledAccessibility": {
                                "accessibilityData": {
                                    "label": "Watch later"
                                }
                            },
                            "toggledAccessibility": {
                                "accessibilityData": {
                                    "label": "Added"
                                }
                            },
                            "trackingParams": "CKUEEPnnAxgCIhMI47nlgbGF8QIVoCmtBh3pggtN"
                        }
                    },
                    {
                        "thumbnailOverlayToggleButtonRenderer": {
                            "untoggledIcon": {
                                "iconType": "ADD_TO_QUEUE_TAIL"
                            },
                            "toggledIcon": {
                                "iconType": "PLAYLIST_ADD_CHECK"
                            },
                            "untoggledTooltip": "Add to queue",
                            "toggledTooltip": "Added",
                            "untoggledServiceEndpoint": {
                                "clickTrackingParams": "CKQEEMfsBBgDIhMI47nlgbGF8QIVoCmtBh3pggtN",
                                "commandMetadata": {
                                    "webCommandMetadata": {
                                        "sendPost": true
                                    }
                                },
                                "signalServiceEndpoint": {
                                    "signal": "CLIENT_SIGNAL",
                                    "actions": [
                                        {
                                            "clickTrackingParams": "CKQEEMfsBBgDIhMI47nlgbGF8QIVoCmtBh3pggtN",
                                            "addToPlaylistCommand": {
                                                "openMiniplayer": true,
                                                "videoId": curVidR.videoId,
                                                "listType": "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                "onCreateListCommand": {
                                                    "clickTrackingParams": "CKQEEMfsBBgDIhMI47nlgbGF8QIVoCmtBh3pggtN",
                                                    "commandMetadata": {
                                                        "webCommandMetadata": {
                                                            "sendPost": true,
                                                            "apiUrl": "/youtubei/v1/playlist/create"
                                                        }
                                                    },
                                                    "createPlaylistServiceEndpoint": {
                                                        "videoIds": [
                                                            curVidR.videoId
                                                        ],
                                                        "params": "CAQ%3D"
                                                    }
                                                },
                                                "videoIds": [
                                                    curVidR.videoId
                                                ]
                                            }
                                        }
                                    ]
                                }
                            },
                            "untoggledAccessibility": {
                                "accessibilityData": {
                                    "label": "Add to queue"
                                }
                            },
                            "toggledAccessibility": {
                                "accessibilityData": {
                                    "label": "Added"
                                }
                            },
                            "trackingParams": "CKQEEMfsBBgDIhMI47nlgbGF8QIVoCmtBh3pggtN",
                            "isToggled": false
                        }
                    },
                    {
                        "thumbnailOverlayNowPlayingRenderer": {
                            "text": {
                                "runs": [
                                    {
                                        "text": "Now playing"
                                    }
                                ]
                            }
                        }
                    }
                ];
            }

            // Along with this, ANDROID response thumbnails array is slighty less perfect.
            // In order to fix this, I formed this.
            var thumbnailConfig;
            if (curVidR.thumbnail.thumbnails[1] != null)
            {
                thumbnailConfig = curVidR.thumbnail.thumbnails[1];
            }
            else
            {
                // Synthesise as a last resort
                thumbnailConfig = {
                    "url": "//i.ytimg.com/vi/" + curVidR.videoId + "/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                };
            }

            curVidR.thumbnail.thumbnails = [thumbnailConfig];

            curVidR.navigationEndpoint.commandMetadata = {
                "webCommandMetadata": {
                    "url": ("/watch?v=" + curVidR.videoId),
                    "webPageType": "WEB_PAGE_TYPE_WATCH",
                    "rootVe": 3832
                }
            };

            curVidR.shortBylineText.runs[0].navigationEndpoint.commandMetadata = {
                "webCommandMetadata": {
                    "url": curVidR.longBylineText.runs[0].navigationEndpoint.browseEndpoint.canonicalBaseUrl,
                    "webPageType": "WEB_PAGE_TYPE_CHANNEL",
                    "rootVe": 3611
                }
            };

            if (typeof curVidR.ownerBadges?.[0].verifiedBadge !== 'undefined') {
                curVidR.ownerBadges[0] = {
                    "metadataBadgeRenderer": {
                        "icon": {
                            "iconType": "CHECK_CIRCLE_THICK"
                        },
                        "style": "BADGE_STYLE_TYPE_VERIFIED",
                        "tooltip": "Verified",
                        "trackingParams": "CKMEEJQ1GAAiEwjjueWBsYXxAhWgKa0GHemCC00="
                    }
                }
            }
        }

        curShelfR.nextButton = {
            "buttonRenderer": {
                "style": "STYLE_DEFAULT",
                "size": "SIZE_DEFAULT",
                "isDisabled": false,
                "icon": {
                    "iconType": "CHEVRON_RIGHT"
                },
                "accessibility": {
                    "label": "Next"
                },
                "trackingParams": "CNICEPBbIhMIte6S3biF8QIVUrDECh1UFgYy"
            }
        };

        curShelfR.previousButton = {
            "buttonRenderer": {
                "style": "STYLE_DEFAULT",
                "size": "SIZE_DEFAULT",
                "isDisabled": false,
                "icon": {
                    "iconType": "CHEVRON_LEFT"
                },
                "accessibility": {
                    "label": "Previous"
                },
                "trackingParams": "CNECEPBbIhMIte6S3biF8QIVUrDECh1UFgYy"
            }
        };

        // Shelves are wrapped in an itemSectionRenderer on WEB
        // so the emulator must follow
        emuContentsIndex.push({
            "itemSectionRenderer": {
                "contents": [
                    {
                        "shelfRenderer": shelf.shelfRenderer
                    }
                ]
            }
        });
    }

    return emulatedWebV1;
}

async function injectShelvesHp() {
    if (window.location.pathname != '/') return; // Have to do this so soft loading is supported, but it still only runs on homepage

    const shelvesHp = await getShelvesHp();
    if (typeof shelvesHp.contents === 'undefined') {
        console.log("Could not get homepage data.");
        return;
    }

    document.querySelector("ytd-app ytd-browse").data = parseHpData(shelvesHp);

    const homeContents = document.querySelector("ytd-app ytd-browse[page-subtype=home] ytd-section-list-renderer #contents");
    if (homeContents === null) {
        GM_addStyle(`
        ytd-browse[page-subtype='home'] ytd-rich-grid-renderer {
            display: flex !important;
        }`);
        return;
    }
    
    // For some reason, the first shelves loaded into view lack scrollers.
    // Resizing the window fixes this, however it would be preferable to avoid having to do this every time.
    // As such, here's a hack to go through each shelf and manually fix them.
    for (const elm of homeContents.children) {
        elm.querySelector("yt-horizontal-list-renderer")?.removeAttribute("at-end");
    }
}
