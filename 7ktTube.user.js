// ==UserScript==
// @name			7ktTube | 2016 REDUX
// @namespace STILL_ALIVE
// @version 3.5.3
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

function removeEl() {
  const yt_lib_custom = {
    removeEl: selector => {
      let e = document.querySelector(selector);
      e && e.parentNode.removeChild(e);
    },
    getQueryURL: (query, url) => new URLSearchParams((url ? new URL(url) : location).search).get(query),
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

function restoreAppbarLinks() {
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


  if (yt.config_.LOGGED_IN) {
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
  }
}

function insertResultsEstimate() {
  waitForElement("#filter-menu #container").then(function (elm) {
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

async function getSAPISIDHash() {
  function getCookie(name) {
    const value = `; ${decodeURIComponent(document.cookie)}`;
    const parts = value.split(`; ${name}=`);
    return parts.pop().split(';').shift();
  }

  async function SHA1(str) {
    const buf = await crypto.subtle.digest("SHA-1", new TextEncoder("utf-8").encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
  }

  const time = (Math.round(new Date() / 1000));
  const hash = await SHA1(`${time} ${getCookie("SAPISID")} https://www.youtube.com`);
  return `SAPISIDHASH ${time}_${hash}`;
}

async function getShelvesHp() {
  // Request the current video page again and retrieve required data for loading comments.
  const itc = JSON.parse(JSON.stringify(yt.config_.INNERTUBE_CONTEXT));
  itc.client.clientVersion = "1.20210519.01.00";

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
      ...((yt.config_.LOGGED_IN) && { "Authorization": await getSAPISIDHash() }),
      ...((yt.config_.LOGGED_IN) && { "X-Goog-AuthUser": "0" }),
      ...((yt.config_.DELEGATED_SESSION_ID ? true : false) && { "X-Goog-PageId": yt.config_.DELEGATED_SESSION_ID }),
      'X-Goog-Visitor-Id': yt.config_.INNERTUBE_CONTEXT.client.visitorData,
      'X-YOUTUBE-CLIENT-NAME': '1',
      'X-YOUTUBE-CLIENT-VERSION': '1.20200101.01.01',
      'X-ORIGIN': "https://www.youtube.com"
    },
    redirect: 'follow',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: JSON.stringify(reqbody)
  });

  return response.json();
}

function parseHpData(hpdata) {
  var shelvesIndex = hpdata.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;

  for (const shelf of shelvesIndex) {
    const curShelfR = shelf.itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer;
    if (typeof curShelfR === 'undefined') continue;
    for (const vid of curShelfR.items) {
      const curVidR = vid.gridVideoRenderer;
      if (typeof curVidR === 'undefined') continue;

      if (typeof curVidR.thumbnailOverlays !== 'undefined') {
        curVidR.thumbnailOverlays = [
          {
            "thumbnailOverlayTimeStatusRenderer": {
              "text": {
                "simpleText": curVidR.lengthText.simpleText ?? ""
              },
              "style": "DEFAULT"
            }
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
  }

  return hpdata;
}

async function injectShelvesHp() {
  if (window.location.pathname != '/') return; // Have to do this so soft loading is supported, but it still only runs on homepage

  const shelvesHp = await getShelvesHp();
  if (typeof shelvesHp.contents === 'undefined') {
    console.log("Could not get homepage data.");
    return;
  }

  document.querySelector("ytd-app ytd-browse").data = parseHpData(shelvesHp);

  // For some reason, the first shelves loaded into view lack scrollers.
  // Resizing the window fixes this, however it would be preferable to avoid having to do this every time.
  // As such, here's a hack to go through each shelf and manually fix them.
  const homeContents = document.querySelector("ytd-app ytd-browse[page-subtype=home] ytd-section-list-renderer #contents");
  for (const elm of homeContents?.children) {
    elm.querySelector("yt-horizontal-list-renderer").removeAttribute("at-end");
  }
}

function gen_aspect_fix() {
  "use strict";
  var vidfix = {
    inject: function (is_user_script) {
      var modules;
      var vidfix_api;
      var user_settings;
      var default_language;
      var send_settings_to_page;
      var receive_settings_from_page;
      modules = [];
      vidfix_api = {
        initializeBypasses: function () {
          var ytd_watch;
          var sizeBypass;
          if (ytd_watch = document.querySelector("ytd-watch, ytd-watch-flexy")) {
            sizeBypass = function () {
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
        initializeSettings: function (new_settings) {
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
        initializeModulesUpdate: function () {
          var i;
          for (i = 0; i < modules.length; i++) {
            if (modules[i].onSettingsUpdated) {
              modules[i].onSettingsUpdated();
            }
          }
        },
        initializeModules: function () {
          var i;
          for (i = 0; i < modules.length; i++) {
            if (modules[i].ini) {
              modules[i].ini();
            }
          }
        },
        initializeOption: function () {
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
        initializeBroadcast: function (event) {
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
        ini: function () {
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
    isAllowedPage: function () {
      var current_page;
      if (current_page = window.location.pathname.match(/\/[a-z-]+/)) {
        current_page = current_page[0];
      }
      else {
        current_page = window.location.pathname;
      }
      return ["/tv", "/embed", "/live_chat", "/account", "/account_notifications", "/create_channel", "/dashboard", "/upload", "/webcam"].indexOf(current_page) < 0;
    },
    generateUUID: function () {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
        .replace(/[018]/g, function (point) {
          return (point ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> point / 4)
            .toString(16);
        });
    },
    saveSettings: function () {
      if (this.is_user_script) {
        this.GM.setValue(this.id, JSON.stringify(this.user_settings));
      }
      else {
        chrome.storage.local.set({
          vidfixSettings: this.user_settings
        });
      }
    },
    updateSettingsOnOpenWindows: function () {
      this.broadcast_channel.postMessage({
        type: "settings",
        payload: this.user_settings
      });
    },
    settingsUpdatedFromOtherWindow: function (event) {
      if (event.data && event.data.broadcast_id === this.broadcast_channel.name) {
        this.user_settings = event.data;
        this.saveSettings();
      }
    },
    contentScriptMessages: function (custom_event) {
      var updated_settings;
      if ((updated_settings = custom_event.detail.settings) !== undefined) {
        this.saveSettings();
      }
    },
    initializeScript: function (event) {
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
    main: function (event) {
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
            .then(function (value) {
              event = JSON.parse(value);
              context.initializeScript(event);
            });
        }
      }
      else {
        this.initializeScript(event);
      }
    },
    ini: function () {
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
              getValue: function () {
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

  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
      return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }
  addGlobalStyle('.html5-video-player { background-color: #000!important; }');

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

function subbutton() {
  function doMastheadFix() {
    if (!document.documentElement.hasAttribute("dark")) {
      document.querySelector("ytd-masthead").removeAttribute("dark");
    }
  }
  window.addEventListener("yt-set-theater-mode-enabled", doMastheadFix, false);
  waitForElement('tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]').then(function (elm) {
    var subhover = document.querySelector('tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]');

    subhover.addEventListener("mouseenter", function (event) {
      event.target.innerText = "Unsubscribe";
    }, false);
    subhover.addEventListener("mouseleave", function (event) {
      event.target.innerText = "Subscribed";
    }, false);
  });

  waitForElement('#primary #info #button.dropdown-trigger.style-scope.ytd-menu-renderer').then(function (elm) {
    var morebutton = document.querySelector('#primary #info #button.dropdown-trigger.style-scope.ytd-menu-renderer');
    document.querySelector('#top-level-buttons-computed').appendChild(morebutton);
  });
  waitForElement('ytd-app #info ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer').then(function (elm) {
    var likec = document.querySelector('#info ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer');
    likec.innerText.replace(likec.ariaLabel);
  });
}

function gen_history() {
  /*
   - Grey out watched video thumbnails info:
   - Use ALT+LeftClick or ALT+RightClick on a video list item to manually toggle the watched marker. The mouse button is defined in the script and can be changed.
   - For restoring/merging history, source file can also be a YouTube's history data JSON (downloadable from https://support.google.com/accounts/answer/3024190?hl=en). Or a list of YouTube video URLs (using current time as timestamps).
 */
  //=== config start ===
  var maxWatchedVideoAge = 5 * 365; //number of days. set to zero to disable (not recommended)
  var contentLoadMarkDelay = 600;     //number of milliseconds to wait before marking video items on content load phase (increase if slow network/browser)
  var markerMouseButtons = [0, 1];  //one or more mouse buttons to use for manual marker toggle. 0=left, 1=right, 2=middle. e.g.:
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
    for (i = items.length - 1; i >= 0; i--) {
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
        s = { entries: {}, index: [] };
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
    } catch (z) {
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
        s = { entries: {}, index: [] };
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
    } catch (a) {
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
    } else b = JSON.stringify(watchedVideos = { entries: {}, index: [] });
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
  XMLHttpRequest.prototype.open = function (method, url) {
    this.url_mwyv = url;
    return xhropen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (method, url) {
    if (rxListUrl.test(this.url_mwyv) && !this.listened_mwyv) {
      this.listened_mwyv = 1;
      this.addEventListener("load", delayedProcessPage);
    }
    return xhrsend.apply(this, arguments);
  };

  var fetch_ = unsafeWindow.fetch;
  unsafeWindow.fetch = function (opt) {
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
    Node.prototype.dispatchEvent = function (ev) {
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
    document.body.appendChild(a = document.createElement("A")).href = URL.createObjectURL(new Blob([JSON.stringify(watchedVideos)], { type: "application/json" }));
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
          o = { entries: {}, index: [] };
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
  if (!("shelves" in settings)) settings.shelves = true;
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

      setTimeout(function () {
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
      AddLine(MakeBoolElement("grey_watched"), MakeDesc("Make watched video thumbnails black & white and less visible"));
      AddLine(MakeBoolElement("blur_watched"), MakeDesc("Make watched video thumbnails black & white on home screen [FIX]"));
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
      AddLine(MakeBoolElement("trending"), MakeDesc("Replace explore with trending"));
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
      let e0 = document.createElement('input');
      e0.type = 'button';
      e0.className = 'ytfix_button';
      e0.value = 'Save settings';
      e0.addEventListener('click', function () {
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
      });
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
      AddLine(e0, e1, e2);
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
    (function () {
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
    waitForElement('#info path[d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"]').then(function (elm) {
      document.querySelector('#info path[d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"]').closest('ytd-button-renderer').style.display = 'none';
      document.querySelector('#info path[d*="M21.8,6.9c-0.2-0.7-0.5-1.4-1.1-2c-0.5-0.6-1.2-1.1-2-1.4C18,3.2,17.2,3,16.3,3c-0.8,0-1.7,0.2-2.4,0.6"]').closest('ytd-button-renderer').style.display = 'none';
    })
    waitForElement('#info path[d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"]').then(function (elm) {
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
      yt-notification-action-renderer{margin-left:20px;
      margin-top:30px
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
    styles.push(`
      .watched yt-img-shadow.ytd-thumbnail {
         transition: ease-in;
         transition-duration: 0.2s;
         filter: blur(2.2px) grayscale(1)!important;
         }
         .watched yt-img-shadow.ytd-thumbnail:hover {
         transition: ease-out;
         transition-duration: 0.7s;
         filter: blur(0px) grayscale(0)!important;
      }`);
  }
  if (settings.grey_watched) {
    styles.push(`
      .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {
         transition: ease-in;
         transition-duration: 0.2s;
         opacity: 0.4 !important;
         filter: grayscale(1);
      }

      .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail:hover {
         transition: ease-out;
         transition-duration: 0.7s;
         opacity: 1.0 !important;
         filter: grayscale(0);
      }`);
  }
  if (settings.thumbnail_size) {
    styles.push(`div#contents.style-scope.ytd-rich-grid-renderer {display:block!important}

          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer {display:inline!important}
          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div {display:inline!important;margin:0!important}
          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div > ytd-rich-item-renderer {display:inline-block!important; width: ${[0, 193, 240, 360, 480, settings.thumbnail_size_m][settings.thumbnail_size]}px !important; contain:none!important
       }`);
  }
  if (!(settings.rightside)) {
    waitForElement('#top-row.ytd-video-secondary-info-renderer').then(function (elm) {
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

      ytd-video-renderer[use-prominent-thumbs] #channel-info.ytd-video-renderer,
      ytd-playlist-renderer[use-prominent-thumbs] ytd-playlist-thumbnail.ytd-playlist-renderer, ytd-radio-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-radio-renderer {
         padding: 0!important;
         min-width: ${sz};
         max-width: ${sz};
         }
       ytd-video-renderer:not([use-prominent-thumbs]) ytd-thumbnail.ytd-video-renderer {
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

function counterstuff() {
  function getCounterText(x) {	// x is not wrapper
    try { return x.__data.data.viewCountText.simpleText; } catch (ex) { }
    try { return x.__data.data.content.videoRenderer.viewCountText.simpleText; } catch (ex) { }
  }
  function replaceCountersText(x) {
    x = x.wrappedJSObject || x;
    const par = x.parentNode.__ytfix_parent;
    if (!par)
      return;
    const tgt = getCounterText(par);
    if (tgt && x.textContent != tgt)
      x.textContent = tgt;
  }
  function replaceCountersCallback(mm) {
    for (let i = mm.length; --i >= 0;) {
      const m = mm[i];
      if (m.type == 'characterData')
        replaceCountersText(m.target);
    }
  }
  const m = new MutationObserver(replaceCountersCallback);
  const opt = { subtree: true, characterData: true };
  function replaceCountersEach(x) {
    x.setAttribute('ytfix', '');
    const ee = x.querySelectorAll('#metadata-line span');
    if (ee.length != 2)
      return;
    const e = ee[0];
    (e.wrappedJSObject || e).__ytfix_parent = x;
    replaceCountersText(e.firstChild);
    m.observe(e, opt);
  }
  setInterval(function () {
    document.querySelectorAll('ytd-compact-video-renderer:not([ytfix])').forEach(replaceCountersEach);
    document.querySelectorAll('ytd-grid-video-renderer:not([ytfix])').forEach(replaceCountersEach);
    document.querySelectorAll('ytd-rich-item-renderer:not([ytfix])').forEach(replaceCountersEach);
    document.querySelectorAll('ytd-video-renderer:not([ytfix])').forEach(replaceCountersEach);
  }, 1000);
  // this observer disables the like count updating while watching a live stream because it messes with a bunch of things and we can't get full like count from it either
  var likeObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      for (const node of mutation.addedNodes) {
        while (mutation.target.childNodes.length > 1) {
          mutation.target.removeChild(mutation.target.lastChild);
        }
      }
    });
  });

  waitForElement("#info ytd-toggle-button-renderer.style-text[is-icon-button]:first-child #text.ytd-toggle-button-renderer").then(function (elm) {
    likeObserver.observe(elm, {
      childList: true,
      subtree: true
    });
    document.querySelector('#info ytd-button-renderer:last-of-type yt-formatted-string').innerText = 'Add to';
  });

  // thanks objectful for a actual working one
}

function patch_css() {
  // patch css
  GM_addStyle(`
f:root {
  --dgyt-bg-color-dark: rgb(15, 15, 15);
  --dgyt-bg-color-medium: rgb(33, 33, 33);
  --dgyt-cell-bg-color: rgba(0, 0, 0, 0.2);
  --dgyt-menu-bg-color: rgba(21, 21, 21, 0.8);
  --dgyt-button-color: rgba(255, 255, 255, 0.1);
  --dgyt-button-color-hover: rgba(255, 255, 255, 0.22);
  --dgyt-border-color: rgba(0, 0, 0, 0.2);
  --dgyt-text-main: rgb(192, 192, 192);
  --dgyt-text-secondary: rgb(142, 142, 142);
  --dgyt-text-highlight: rgb(255, 255, 255);
  --dgyt-color-red: rgb(204, 24, 30);
  --dgyt-color-blue: rgb(22, 122, 198);
  --dgyt-color-yellow: rgb(245, 213, 98);
  --dgyt-color-orange: rgb(255, 85, 0);
  --dgyt-color-purple: rgb(156, 39, 176);
  --dgyt-color-green: rgb(76, 175, 80);
}

:root {
  --yt-link-letter-spacing: 0 !important;
  --ytd-user-comment_-_letter-spacing: 0 !important;
  --oldcolor: #cc181e;
}

html:not(.style-scope)[typography-spacing] {
  --yt-subheadline-letter-spacing: 0;
  --yt-thumbnail-attribution-letter-spacing: 0;
  --yt-user-comment-letter-spacing: 0;
  --yt-guide-highlight-letter-spacing: 0;
  --yt-caption-letter-spacing: 0;
  --yt-badge-letter-spacing: 0;
  --yt-tab-system-letter-spacing: 0;
  --yt-subheadline-link-letter-spacing: 0;
  --yt-link-letter-spacing: 0.25px;
}

.html5-video-player {
  background-color: #000 !important;
}

#avatar-link.ytd-rich-grid-media {
  height: 0 !important;
  margin-top: 0 !important;
  margin-right: 0 !important;
  visibility: hidden !important;
  position: fixed !important;
}

yt-live-chat-message-input-renderer {
  margin-bottom: -1px;
}

#chat.ytd-watch-flexy {
  margin-bottom: var(--ytd-margin-3x) !important;
  margin-left: -14px;
  margin-right: 14px;
}
html:not([dark]) #header.ytd-engagement-panel-title-header-renderer {
  background: #f1f1f1 ;
}
#action-buttons.ytd-tvfilm-offer-module-renderer ytd-button-renderer.ytd-tvfilm-offer-module-renderer:last-child {
  margin-bottom: 0;
  background: url("") !important;
  color: #000;
    height: 20px;
  width: min-content!important;
}

ytd-video-description-gaming-section-renderer {
  display: none!important;
}

#chat-container.ytd-watch-flexy:not([chat-collapsed]) {
  width: var(--ytd-watch-flexy-chat-max-width);
  margin-left: -14px;
  margin-right: 14px;
  margin-bottom: 10px;
}

ytd-watch-flexy[flexy] #chat-container.ytd-watch-flexy:not([chat-collapsed]).ytd-watch-flexy,
ytd-watch-flexy[flexy] #chat.ytd-watch-flexy:not([collapsed]).ytd-watch-flexy {
  min-height: 591px !important;
}

ytd-watch-flexy[flexy][theater] #columns.ytd-watch-flexy {
  min-width: 100% !important;
}

ytd-watch-flexy[is-two-columns_][theater] #columns.ytd-watch-flexy {
  min-width: 100%;
}

ytd-watch-flexy[flexy][is-two-columns_] #primary.ytd-watch-flexy,
ytd-watch-flexy[flexy][is-two-columns_][theater] #primary.ytd-watch-flexy {
  justify-content: flex-start;
  max-width: var(--ytd-watch-flexy-max-player-width);
  min-width: 80%;
}

ytd-watch-flexy[flexy][is-two-columns_][theater][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
  justify-content: flex-start;
  min-width: 70%;
}

yt-icon.style-scope.ytd-badge-supported-renderer,
ytd-author-comment-badge-renderer:not([m]) #icon.ytd-author-comment-badge-renderer {
  color: transparent;
  fill: transparent !important;
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflbdpYum.webp) -146px -556px;
  height: 9px;
  margin-bottom: 0;
}

yt-icon.style-scope.ytd-badge-supported-renderer:hover,
ytd-author-comment-badge-renderer #icon.ytd-author-comment-badge-renderer:hover {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflbdpYum.webp) -732px -646px;
}

a,
a:visited {
  color: #167ac6;
}

ytd-banner-promo-renderer.banner-promo-style-type-masthead-v2 .ytd-banner-promo-renderer-background.ytd-banner-promo-renderer {
  visibility: hidden;
  height: 0 !important;
}

.content.ytd-metadata-row-header-renderer,
ytd-action-companion-ad-renderer {
  display: none !important;
}

#buttons.ytd-masthead > .ytd-masthead:nth-last-child(2) {
  margin-right: 0 !important;
}

#search-input.ytd-searchbox-spt input {
  margin-left: 0 !important;
}

#search-input {
  top: 1px;
  right: 2px;
  position: relative;
}

html:not([dark]) #search-input.ytd-searchbox-spt input::placeholder {
  color: rgb(118, 118, 118);
}

#expander.ytd-comment-renderer > paper-button.ytd-expander {
  text-align: left;
}

.title.style-scope.ytd-video-primary-info-renderer yt-formatted-string.ytd-video-primary-info-renderer {
  font-size: 20px;
}

ytd-toggle-button-renderer {
  font-weight: normal;
}

author-text.yt-simple-endpoint.ytd-comment-renderer,
ytd-author-comment-badge-renderer {
  border-radius: 0 !important;
}

html:not([dark]) #name.ytd-author-comment-badge-renderer,
html:not([dark]) ytd-author-comment-badge-renderer {
  --ytd-author-comment-badge-name-color: #187ac6;

  color: #187ac6;
}

#name.ytd-author-comment-badge-renderer,
ytd-author-comment-badge-renderer {
  --ytd-author-comment-badge-name-color: #fff;

  color: #fff;
}

ytd-expander.ytd-video-secondary-info-renderer {
  font-size: 13px !important;
  --ytd-expander-collapsed-height: 66px !important;
}

html[dark] #vote-count-middle.ytd-comment-action-buttons-renderer {
  color: #3ea6ff !important;
}

ytd-comments-header-renderer.style-scope.ytd-item-section-renderer,
ytd-metadata-row-renderer {
  margin: 0 !important;
}

#title.ytd-metadata-row-renderer {
  font-size: 11px !important;
  margin: 0 !important;
}

.content.ytd-metadata-row-renderer {
  font-size: 11px !important;
  font-weight: normal !important;
}

ytd-playlist-renderer {
  background: var(--yt-spec-general-background-b) !important;
}

ytd-watch-flexy[flexy][fullscreen] #columns.ytd-watch-flexy {
  min-width: 100% !important;
}

div#contents.style-scope.ytd-rich-grid-renderer {
  display: block !important;
}

ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer {
  display: inline !important;
}

ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div {
  display: inline !important;
  margin: 0 !important;
}

ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div > ytd-rich-item-renderer {
  display: inline-block !important;
  width: 193px;
}

html {
  font-family: Roboto, arial, sans-serif !important;
}

html:not(.style-scope) {
  --yt-post-redemption-section-title_-_font-family: roboto;
  --paper-font-common-base_-_font-family: roboto, arial, sans-serif !important;
  --paper-font-body1_-_font-size: 13px !important;
  --paper-font-body2_-_font-size: 13px !important;
  --paper-font-caption_-_font-size: 12px !important;
  --paper-font-menu_-_font-size: 13px !important;
  --paper-font-button_-_font-size: 13px !important;
  --ytd-thumbnail-attribution_-_font-size: 11px !important;
  --ytd-user-comment_-_font-size: 13px !important;
  --ytd-caption_-_font-size: 11px !important;
  --ytd-tab-system_-_font-size: 13px !important;
  --ytd-comment-link_-_font-size: 13px !important;
  --ytd-subheadline_-_font-size: 13px !important;
  --ytd-grid-video-title_-_font-size: 13px !important;
  --paper-font-body1_-_font-weight: 500 !important;
  --ytd-thumbnail-attribution_-_font-weight: 400 !important;
  --ytd-user-comment_-_font-weight: 400 !important;
  --ytd-subheadline_-_font-weight: 400 !important;
  --ytd-thumbnail-attribution_-_line-height: 1.4em !important;
  --ytd-user-comment_-_line-height: 1.3em !important;
  --ytd-comment-link_-_line-height: 1.3em !important;
  --ytd-subheadline_-_line-height: 1.3em !important;
  --paper-font-button_-_text-transform: none !important;
  --yt-endpoint-hover_-_text-decoration: underline !important;
  --ytd-grid-video-title_-_letter-spacing: 0 !important;
  --ytd-masthead-height: 49px !important;
  --ytd-toolbar-height: 49px !important;
  --logo-2015-dark-header: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAeCAMAAABJ7/MSAAAAaVBMVEUAAADbKBv////hKB/////////////hKCD////////eKBzfOCD////////jJh7////////jKST////////aRiH////////RKxz////aNCX/b2L/xL7/sKn/iH7/2tfwSjv/9/b/o5v/6eebHW/LAAAAF3RSTlMA+VbUhb4+sdFx7CD2rokqDmTjjj4anxy61LcAAAHISURBVEjHvZaJboMwDIZNuWnKsbbLT4BwvP9DzuZQUbuNaJv2SSUxKp+MDSR0yC3P49j3/SzzGD0jsyzjk3Gc5zdy4OzrQ/zzscbTDniHolg7ER+lox05U6JUSRQpdaVXKv4LVlq90gEvnooC4ETL8ZXc1ZNTAbwThVDlF+UZxxaw42i+88RECd6IFC70CUvT6yWZ7zw+UQoUEZASlVH0lFS28/R9L4d69tSGA80Dj0JGdGdHANzppADFVToBkRSMPd7O06CRmRGPAQaxTlvdPJIbuyRIKMJM4eLBAIxa23nSrZ4ACgjoClUUPNl79Beevp446iVqYDVDRMWSRoiE6A0XF4/WLUcGkGoNi0culpaFCIkSd4/dPNg8F+D6Q4+108OTAqefeYQ/8ZieOfZ4x/Wp61r6/muPRHvPU9/fZ0/25Ok3j0Ti6fU49z17eAIgTfknnoADPL2nLQZjV89ohiW71kzzc+g/PHcFRpXLc5nMnnjnGQE0q4d96EQtmOW7sXmoCIGwoPkOo6U++eKxli/q7dTxzGhjbd0OjZS3swOfYHISypI+p9KOVH/1nf+Xdcd9HfyvdVlM1bxP2G8UZMy2fUJ1I+YDE+J/OoVjUQ0AAAAASUVORK5CYII=);
  --logo-2015-light-header: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAeCAMAAABJ7/MSAAAAbFBMVEUAAADbKBs4MjLhKB8yNjQyMDA6OjrhKCA0NDM0NjTeKBzfOCA3NjY1MzPjJh4MDAwSEhLjKSRmZmY4NzcxMzLaRiEUFBTRKxz///8zMzPaNCX/b2L/xL7/sKn/iH7/2tfwSjv/9/b/o5v/6efD6vgAAAAAF3RSTlMA+VbUhb4+sdFx7CD2rokqDmQF45U+Gst17Z4AAAHZSURBVEjHvZaLkqowDIaDyEWsXFy1DQVa4P3f8SStjBxdl87uzv4z0sSx36R/sC1s6lqWWRbHcVFEJOnEUVHQl1lWllcI0DGWm4qP25hIBijaBGUySNlWOTJQR8iFqAFSIS7wqoZ+ou7qlzmDUi+cBvaIO/DPV5WhnBIqRKokQVG/sWeaeqXMNOm3HG9Qjh9wFniCT+Sb3vpivuLEAAfEKkU8ANRp+lRUseJYa/nROk6rKZE0+FEWADdikD032AlEQS7tEFM2jDjRitOpjiPNHK3UyNR58S0CXtgpxxxSdKoCOERRapLSuGDwHJoiEPdwQVFVFKw58g3HtjNllrNOGUkCgMqXkVBN8IGnEI6UPWW0OnZr9ByeTC0jTgKQh3PMwlEL54R4+SbHmHnhuM7vvsdh/QpHW9I2J9r2p21b7vuPOZytOU99vzhO8cSxC4cz5lg5ub4XDw5VcDjQhzl7SvDpf9qrUZs7Z9Kjr67Xs3sP4wfnJpAkav9e5o6TrTgTdaa7cwzFA6NZmveNBweqBDGpwK0w9f6UnmMMTbJmHijSUhvT9mPH9g5mNNrvY6RzXZ/BBTzw+NhXA9X81j7/J+dO+Dn4V+cykxq+J/x3UeCxWO4JzRVI/wDdeYEehJSX4AAAAABJRU5ErkJggg==);
  --logo-2017-dark-header: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA8CAYAAAAjW/WRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDUgNzkuMTY0NTkwLCAyMDIwLzEyLzA5LTExOjU3OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTI4VDE1OjQzOjM2LTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMi0yOFQxNTo0Nzo1My0wODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0yOFQxNTo0Nzo1My0wODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWQyNmE1M2MtMmMxNC1kNzQyLTg3NmItNWJmZTJiMDA4YjMxIiB4bXBNTTpEb2N1bWVudElEPSJ4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);
  --logo-2017-light-header: url(https://www.youtube.com/yts/img/ringo/hitchhiker/logo_small_2x-vfl4_cFqn.png);
}

ytd-app #video-title[class*=renderer],
ytd-compact-video-renderer #video-title.ytd-compact-video-renderer,
ytd-two-column-search-results-renderer #channel-title .ytd-channel-name {
  font-size: 14px !important;
  line-height: 1.1 !important;
}

#author-text.yt-simple-endpoint.ytd-comment-renderer,
#content-text.ytd-backstage-post-renderer,
#content-text.ytd-comment-renderer,
#expander.ytd-comment-replies-renderer,
#video-title.ytd-rich-grid-video-renderer,
.title.ytd-guide-entry-renderer,
.title.ytd-mini-channel-renderer,
h3.ytd-rich-grid-media,
ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button-end.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer,
ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer,
ytd-grid-video-renderer #video-title.yt-simple-endpoint.ytd-grid-video-renderer,
ytd-guide-entry-renderer[active],
ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media {
  font-size: 13px !important;
}

#video-title,
ytd-two-column-search-results-renderer #channel-title .ytd-channel-name {
  font-weight: 500 !important;
}

.badge.ytd-badge-supported-renderer {
  font-weight: normal !important;
}

ytd-guide-entry-renderer[active],
ytd-playlist-renderer {
  background: 0 0 !important;
}

.title.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] .title.ytd-guide-entry-renderer {
  line-height: 20px !important;
}

#author-text.yt-simple-endpoint.ytd-comment-renderer:hover,
#video-title:hover,
yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover {
  text-decoration: underline !important;
}

@media (min-width: 900px) {
  ytd-rich-grid-renderer {
    --ytd-rich-grid-items-per-row: 4 !important;
  }
}

@media (min-width: 1200px) {
  ytd-rich-grid-renderer {
    --ytd-rich-grid-items-per-row: 5 !important;
  }
}

@media (min-width: 1800px) {
  ytd-rich-grid-renderer {
    --ytd-rich-grid-items-per-row: 6 !important;
  }
}

@media (min-width: 2500px) {
  ytd-rich-grid-renderer {
    --ytd-rich-grid-items-per-row: 9 !important;
  }
}

@media (min-width: 900px) {
  ytd-two-column-browse-results-renderer {
    max-width: 850px !important;
  }
}

@media (min-width: 1150px) {
  ytd-two-column-browse-results-renderer {
    max-width: 1056px !important;
  }
}

@media (min-width: 1600px) {
  ytd-two-column-browse-results-renderer {
    max-width: 1262px !important;
  }
}

@media (min-width: 2500px) {
  ytd-two-column-browse-results-renderer {
    max-width: 2200px !important;
  }
}

@media (min-width: 900px) {
  html:not(.style-scope) {
    --ytd-grid-video-item_-_width: 196px !important;
    --ytd-grid-thumbnail_-_width: 196px !important;
    --ytd-grid-thumbnail_-_height: 110px !important;
    --ytd-thumbnail-height: 110px !important;
  }
}

@media (min-width: 2500px) {
  html:not(.style-scope) {
    --ytd-grid-video-item_-_width: 210px !important;
    --ytd-grid-thumbnail_-_width: 210px !important;
    --ytd-grid-thumbnail_-_height: 118px !important;
    --ytd-thumbnail-height: 118px !important;
  }
}

ytd-thumbnail.ytd-grid-video-renderer,
ytd-thumbnail.ytd-rich-grid-media,
ytd-thumbnail.ytd-rich-grid-video-renderer {
  margin-bottom: 3px !important;
}

ytd-rich-grid-media[mini-mode] h3.ytd-rich-grid-media {
  margin-bottom: 1px !important;
  padding-right: 16px !important;
  margin-top: 3px !important;
}

#meta.ytd-grid-video-renderer,
#meta.ytd-rich-grid-media,
#meta.ytd-rich-grid-video-renderer {
  padding-right: 0 !important;
}

h3.ytd-rich-grid-media {
  margin: 0;
}

ytd-rich-item-renderer {
  margin-bottom: 12px !important;
}

.ytd-browse.grid .ytd-two-column-browse-results-renderer {
  margin-top: 10px;
}

h3.ytd-grid-video-renderer,
h3.ytd-rich-grid-video-renderer {
  margin: 0 10px 0 0 !important;
}

ytd-section-list-renderer[page-subtype=subscriptions] #items.ytd-grid-renderer > ytd-grid-video-renderer.ytd-grid-renderer {
  width: 196px;
  margin-right: 10px;
  margin-bottom: 12px;
}

ytd-section-list-renderer[page-subtype=subscriptions] ytd-thumbnail.ytd-grid-video-renderer {
  height: 110px;
  width: 196px;
}

ytd-section-list-renderer[page-subtype=channels] #items.ytd-grid-renderer,
ytd-section-list-renderer[page-subtype=subscriptions] #items.ytd-grid-renderer {
  margin-right: -15px !important;
}

ytd-browse[page-subtype=channels] app-header {
  transform: unset !important;
  position: static !important;
  margin-top: 0 !important;
}

#contentContainer.app-header-layout,
ytd-search-filter-renderer.ytd-search-filter-group-renderer {
  padding-top: 0 !important;
}

#chat.ytd-watch-flexy,
#donation-shelf.ytd-watch-flexy ytd-donation-shelf-renderer.ytd-watch-flexy,
#donation-shelf.ytd-watch-flexy ytd-donation-unavailable-renderer.ytd-watch-flexy,
#panels.ytd-watch-flexy ytd-engagement-panel-section-list-renderer.ytd-watch-flexy,
#playlist.ytd-watch-flexy {
  margin-bottom: 10px !important;
}
ytd-playlist-panel-renderer[js-panel-height] #container.ytd-playlist-panel-renderer {
   margin-left: 10px !important;
   margin-right: -10px !important;
}
ytd-engagement-panel-section-list-renderer {
  right: 14px !important;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  position: relative !important;
}

ytd-section-list-renderer {
  padding: 0 17px !important;
}

ytd-browse[page-subtype~=channels] ytd-two-column-browse-results-renderer.ytd-browse * > #items.ytd-grid-renderer > ytd-grid-video-renderer.ytd-grid-renderer {
  margin-right: 10px !important;
  margin-bottom: 20px !important;
}

#tabs-container.ytd-c4-tabbed-header-renderer,
#tabs-inner-container.ytd-c4-tabbed-header-renderer,
tp-yt-app-toolbar.ytd-c4-tabbed-header-renderer,
tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer {
  height: 32px !important;
}

.tab-content.tp-yt-paper-tab {
  letter-spacing: 0 !important;
  padding: 0 3px 3px !important;
  height: 29px;
  color: #666;
  font-size: 13px;
  font-weight: normal;
  font-family: roboto;
}

#selectionBar.tp-yt-paper-tabs,
#sign-in-button yt-icon {
  display: none;
}

tp-yt-paper-tab.iron-selected.ytd-c4-tabbed-header-renderer .tab-content.tp-yt-paper-tab {
  color: var(--yt-lightsource-primary-title-color);
  font-weight: 500;
}

yt-icon-button.ytd-expandable-tab-renderer {
  opacity: 0.33 !important;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfluKv9vH.png) 0 -738px;
  background-size: auto;
  width: 15px !important;
  height: 15px !important;
  color: transparent;
}

yt-icon-button.ytd-expandable-tab-renderer:hover {
  opacity: 1 !important;
}

.input-content.tp-yt-paper-input-container > iron-input,
.input-content.tp-yt-paper-input-container > label {
  height: 15px;
  padding-top: 5px;
  padding-bottom: 6px;
  margin-bottom: 3px;
}

paper-tab.ytd-c4-tabbed-header-renderer {
  padding: 0 12px !important;
}

paper-tabs.ytd-c4-tabbed-header-renderer {
  margin-left: 0 !important;
  padding-bottom: 0 !important;
}

#channel-header.ytd-c4-tabbed-header-renderer {
  padding: 15px !important;
}

html:not([dark]) ytd-c4-tabbed-header-renderer {
  --yt-lightsource-section1-color: #fff !important;
}

html:not([dark]) app-toolbar.ytd-c4-tabbed-header-renderer {
  background-color: #fff !important;
}

html:not([dark]) paper-tab.iron-selected.ytd-c4-tabbed-header-renderer > .tab-content.paper-tab,
html:not([dark]) paper-tab:not(.iron-selected) > .tab-content.paper-tab:hover {
  box-shadow: inset 0 -3px red;
}

html:not([dark]) paper-tab:not(.iron-selected) > .tab-content.paper-tab {
  opacity: 0.8 !important;
  font-weight: normal !important;
}

html[dark] ytd-c4-tabbed-header-renderer {
  --yt-lightsource-section1-color: #212121 !important;
}

html[dark] app-toolbar.ytd-c4-tabbed-header-renderer {
  background-color: #212121 !important;
}

html[dark] paper-tabs.ytd-c4-tabbed-header-renderer {
  --paper-tabs-selection-bar-color: #cd1821 !important;
}

html[dark] paper-tab.iron-selected.ytd-c4-tabbed-header-renderer > .tab-content.paper-tab,
html[dark] paper-tab:not(.iron-selected) > .tab-content.paper-tab:hover {
  box-shadow: inset 0 -3px #cd1821 !important;
}

#metadata-container.ytd-channel-video-player-renderer,
#title.ytd-channel-video-player-renderer {
  margin-bottom: 3px !important;
}

#items.ytd-watch-next-secondary-results-renderer {
  padding: 12px 0 15px 15px !important;
}

ytd-comments {
  padding: 15px 10px 15px 15px !important;
}

ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy,
ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy {
  padding-top: 0 !important;
}

#category-buttons.yt-emoji-picker-renderer {
  margin-top: 20px !important;
}

#categories-wrapper.yt-emoji-picker-renderer {
margin-top:0px!important
 }

ytd-watch-next-secondary-results-renderer {
  position: relative !important;
  right: 14px !important;
}

ytd-watch-flexy[fullscreen] #secondary.ytd-watch-flexy,
ytd-watch-flexy[theater] #secondary.ytd-watch-flexy {
  margin-top: 10px !important;
}

#meta ytd-expander.ytd-video-secondary-info-renderer {
  margin-left: 0;
}

#meta ytd-video-secondary-info-renderer {
  margin: 10px 0;
  padding: 0 15px;
  min-height: 60px;
}

#info ytd-video-primary-info-renderer {
  padding: 15px;
  padding-bottom: 12px;
  margin-top: 30px;
  --yt-button-icon-size: 30px;
  font-weight: normal;
  min-height: 24px;
}

#menu.ytd-video-primary-info-renderer {
  top: 13px !important;
}

#menu #return-youtube-dislike-bar-container,
#menu #ryd-bar-container {
  background: #ccc !important;
}

#like-bar.ytd-sentiment-bar-renderer,
#return-youtube-dislike-bar,
#ryd-bar {
  background: #1879c6 !important;
}

html:not([dark]) #guide-section-title.ytd-guide-section-renderer {
  color: red;
}

html:not([dark]) ytd-guide-entry-renderer[active] > #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer,
html:not([dark]) ytd-guide-entry-renderer[active] > #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
  background-color: var(--oldcolor);
}

html:not([dark]) #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
  background-color: #444;
}

html:not([dark]) .guide-icon.ytd-guide-entry-renderer {
  color: unset;
}

html:not([dark]) tp-yt-paper-item.ytd-guide-entry-renderer {
  color: #878787;
}

html:not([dark]) tp-yt-paper-item.ytd-guide-entry-renderer:hover,
html:not([dark]) ytd-app yt-formatted-string[has-link-only_]:not([force-default-style]).title.ytd-playlist-panel-renderer a.yt-simple-endpoint.yt-formatted-string {
  color: #fff;
}

app-drawer.ytd-app:not([persistent]).ytd-app,
ytd-guide-renderer.ytd-app {
  width: 230px !important;
}

#contentContainer.app-drawer,
#scrim,
iron-collapse {
  transition-duration: 0ms !important;
}

tp-yt-paper-item.ytd-guide-entry-renderer {
  height: 28px !important;
  padding: 0 8px !important;
}

#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer > paper-item {
  min-height: 28px !important;
}

.guide-icon.ytd-guide-entry-renderer {
  --iron-icon-height: 20px !important;
  --iron-icon-width: 20px !important;

  margin-right: 6px !important;
}

#sections.ytd-guide-renderer > .ytd-guide-renderer {
  padding: 13px 22px !important;
}

#sections.style-scope.ytd-guide-renderer:first-child #items > ytd-guide-entry-renderer > a:not([href]) {
  display: none;
}

#guide #guide-spacer.ytd-app {
  margin-top: 50px;
}

#guide yt-img-shadow.ytd-guide-entry-renderer {
  margin-right: 6px;
}

#guide #guide-section-title.ytd-guide-section-renderer {
  padding: 1px 0 6px;
  margin: 0 5px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 11px;
  height: 10px;
}

#container.ytd-masthead {
  max-height: 49px;
}

html:not([dark]) #container.ytd-masthead {
  border-bottom: 1px solid #e8e8e8;
}

ytd-masthead[dark] #container.ytd-masthead {
  border-bottom: 1px solid #111;
}

html[dark] #container.ytd-searchbox,
html[dark] #search-icon-legacy.ytd-searchbox {
  box-shadow: none !important;
  background-color: #1c1c1c !important;
  border: 1px solid rgba(110, 110, 110, 0.3) !important;
  border-radius: 0 !important;
}

#masthead #container.ytd-searchbox,
#masthead #search-icon-legacy.ytd-searchbox {
  border-radius: 0;
  border-color: #ccc;
}
ytd-searchbox[has-focus][desktop-sbox-icon="icon_20_ptext_purple"] #search-icon.ytd-searchbox, ytd-searchbox[has-focus][desktop-sbox-icon="icon_20_ptext_primary"] #search-icon.ytd-searchbox {
    display:none!important
}
.sbpqs_a::before, .sbqs_c::before {
    content:none!important
}
#masthead #search-form.ytd-searchbox {
  height: 29px;
}
ytd-searchbox[has-focus][desktop-sbox-icon="icon_20_ptext_purple"] #container.ytd-searchbox, ytd-searchbox[has-focus][desktop-sbox-icon="icon_20_ptext_primary"] #container.ytd-searchbox {
    padding-left:6px!important;
    margin-left:34px!important
}
ytd-searchbox.ytd-masthead {
  max-width: 650px;
}

#masthead [has-focus] #container.ytd-searchbox {
  border: 1px solid #1c62b9;
}

#masthead #search-icon-legacy.ytd-searchbox {
  background-color: #f8f8f8;
  height: 29px;
  width: 67px !important;
}

div.gstl_50
{
    min-width: 583px !important;
    margin-left: -2px;
}

ytd-searchbox[has-focus] #container.ytd-searchbox {
  transition: border-color 0.2s ease;
}

#masthead #search-icon-legacy.ytd-searchbox:hover {
  background-color: #f0f0f0;
}

#search-icon-legacy.ytd-searchbox:hover yt-icon.ytd-searchbox {
  opacity:1 !important;
}

#voice-search-button.ytd-masthead, .ytd-masthead [href^="https://accounts.google.com/ServiceLogin?"] yt-icon{
  display: none !important;
}

#masthead-container.ytd-app {
  transition: none !important;
}

#sign-in-button tp-yt-paper-button, .ytd-masthead [href^="https://accounts.google.com/ServiceLogin?"] tp-yt-paper-button{
  background: #167ac6 !important;
  max-height: 28px !important;
  height:auto!important;
  margin-top:5px
}

#sign-in-button:hover tp-yt-paper-button, .ytd-masthead [href^="https://accounts.google.com/ServiceLogin?"]:hover tp-yt-paper-button{
  background: #126db3 !important;
}

#sign-in-button tp-yt-paper-button #text, .ytd-masthead [href^="https://accounts.google.com/ServiceLogin?"] yt-formatted-string {
  color: #fff !important;
  font: 500 11px roboto !important;
  margin-left:0!important
}

html:not(.style-scope):not([dark]) {
  --yt-spec-brand-background-primary: #fff !important;
  --yt-spec-general-background-a: #f1f1f1 !important;
  --yt-lightsource-section1-color: #fff !important;
  --yt-spec-text-secondary: #767676 !important;
  --yt-spec-call-to-action: #167ac6 !important;
  --yt-spec-text-primary: #333 !important;
}

html[dark]:not(.style-scope) {
  --yt-spec-brand-background-primary: #212121 !important;
  --yt-spec-general-background-a: #0f0f0f !important;
  --yt-lightsource-section1-color: #212121 !important;
  --yt-spec-text-secondary: #8f8f8f !important;
  --yt-spec-call-to-action: #1879c6 !important;
}

html:not([dark]) #header.ytd-c4-tabbed-header-renderer,
html:not([dark]) #info.ytd-watch-flexy,
html:not([dark]) #items.ytd-watch-next-secondary-results-renderer,
html:not([dark]) #meta.ytd-watch-flexy,
html:not([dark]) #primary.ytd-two-column-browse-results-renderer,
html:not([dark]) #ticket-shelf.ytd-watch-flexy,
html:not([dark]) ytd-browse-secondary-contents-renderer.ytd-two-column-browse-results-renderer,
html:not([dark]) ytd-comments,
html:not([dark]) ytd-two-column-search-results-renderer[center-results] #primary.ytd-two-column-search-results-renderer {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
  background-color: #fff !important;
}

ytd-comments,
ytd-expander.ytd-video-secondary-info-renderer,
ytd-video-primary-info-renderer,
ytd-video-secondary-info-renderer {
  border: 0 !important;
}

html:not([dark]) #secondary #related #dismissible:hover #video-title,
html:not([dark]) #title.ytd-channel-video-player-renderer a,
html:not([dark]) #video-title,
html:not([dark]) #video-title:hover,
html:not([dark]) h3.ytd-rich-grid-media,
html:not([dark]) ytd-compact-video-renderer:hover #video-title,
ytd-two-column-search-results-renderer ytd-channel-name {
  color: #167ac6 !important;
}

html:not([dark]) #secondary #video-title,
html:not([dark]) #video-title.ytd-playlist-video-renderer {
  color: #333 !important;
}

#secondary #related #dismissible #video-title {
  text-decoration: none !important;
}

html:not([dark]) #video-title.ytd-child-video-renderer {
  color: #767676 !important;
  font: 11px roboto !important;
}

#list.ytd-playlist-renderer,
[page-subtype=history] #contents.ytd-browse-feed-actions-renderer > ytd-button-renderer.ytd-browse-feed-actions-renderer,
yt-copy-link-renderer.yt-third-party-network-section-renderer {
  margin: 0;
}

#video-title.ytd-grid-video-renderer,
ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media {
  line-height: 1.3em !important;
}

html[dark] #header.ytd-c4-tabbed-header-renderer,
html[dark] #info.ytd-watch-flexy,
html[dark] #items.ytd-watch-next-secondary-results-renderer,
html[dark] #meta.ytd-watch-flexy,
html[dark] #primary.ytd-two-column-browse-results-renderer,
html[dark] ytd-browse-secondary-contents-renderer.ytd-two-column-browse-results-renderer,
html[dark] ytd-comments,
html[dark] ytd-two-column-search-results-renderer[center-results] #primary.ytd-two-column-search-results-renderer {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
  background-color: #212121 !important;
}

html:not([dark]) ytd-guide-entry-renderer[active] .guide-icon.ytd-guide-entry-renderer,
html:not([dark]) ytd-guide-entry-renderer[active] .title.ytd-guide-entry-renderer,
html[dark] #title.ytd-channel-video-player-renderer a,
html[dark] #video-title,
html[dark] #video-title:hover,
html[dark] h3.ytd-rich-grid-media,
html[dark] yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover,
html[dark] ytd-compact-video-renderer:hover #video-title,
html[dark] ytd-two-column-search-results-renderer ytd-channel-name {
  color: #fff !important;
}

#secondary h4 #video-title.ytd-playlist-panel-video-renderer {
  color: #cacaca !important;
}

ytd-app .metadata.ytd-compact-video-renderer {
  padding-right: 14px;
}

body[style="overflow: hidden;"] {
  overflow-y: auto !important;
}

#details.ytd-rich-grid-video-renderer {
  cursor: auto;
  pointer-events: none;
}

#details.ytd-rich-grid-video-renderer * > a,
#details.ytd-rich-grid-video-renderer * > button.yt-icon-button {
  cursor: pointer;
  pointer-events: initial;
}

tp-yt-paper-button.ytd-expander {
  margin: 0 0 -15px;
}

html:not([dark]) paper-button.keyboard-focus.ytd-subscribe-button-renderer,
html:not([dark]) ytd-button-renderer.style-destructive[is-paper-button] {
  border-color: transparent !important;
  box-shadow: none !important;
}

yt-formatted-string.ytd-subscribe-button-renderer {
  position: relative;
}

#background.paper-ripple,
#waves.paper-ripple,
.wave-container.paper-ripple,
.wave.paper-ripple {
  display: none !important;
  visibility: hidden;
}

ytd-rich-grid-media {
  --yt-button-compact-background-color: transparent;
}

#avatar.ytd-rich-grid-media {
  background-color: transparent;
}

#guide #header yt-icon,
#home-page-skeleton,
#masthead-skeleton-icons,
.ghost-card.ytd-ghost-grid-renderer,
.watch-skeleton #primary-info,
.watch-skeleton #related .video-details,
yt-icon-button[touch-feedback] yt-interaction.yt-icon-button,
yt-interaction.extended {
  display: none;
}

#tooltip.tp-yt-paper-tooltip {
  opacity: 0.8 !important;
  background: #000 !important;
  padding: 4px !important;
  margin: 0 !important;
  border-radius: 0 !important;
}

body.lock-scrollbar {
  overflow: visible !important;
  overflow-y: visible !important;
  position: initial !important;
}

body:not(.style-scope)[standardized-themed-scrollbar]:not(.style-scope):not([no-y-overflow]):not(.style-scope)::-webkit-scrollbar-thumb,
ytd-app[standardized-themed-scrollbar] #guide-inner-content.ytd-app::-webkit-scrollbar-thumb {
  all: unset;
}

ytd-app[standardized-themed-scrollbar] #guide-inner-content.ytd-app::-webkit-scrollbar {
  width: 8px;
}

* {
  --ytd-tab-system_-_letter-spacing: 0 !important;
  --ytd-tab-system_-_text-transform: none;
  text-transform: none;
}

paper-toggle-button {
  left: 7px !important;
  visibility: hidden;
}

paper-toggle-button,
span.ytd-thumbnail-overlay-inline-unplayable-renderer {
  display: none !important;
}

.dropdown-content.paper-menu-button,
html:not([dark]) ytd-multi-page-menu-renderer {
  border: 1px solid #c5c5c5 !important;
  border-top: 1px solid #c5c5c5 !important;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.18) !important;
}

html:not([dark]) ytd-menu-popup-renderer {
  border: 1px solid #d3d3d3 !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
  border-radius: 0 !important;
}

ytd-radio-renderer.ytd-item-section-renderer ytd-thumbnail-overlay-side-panel-renderer,
ytd-search ytd-playlist-thumbnail #thumbnail.ytd-playlist-thumbnail ytd-thumbnail-overlay-side-panel-renderer {
  width: 70px !important;
}

ytd-search #channel-name.ytd-video-renderer {
  padding-left: 0;
}

.ytp-spinner-circle {
  left: -100%;
  right: 0;
  border-left-color: transparent;
  -webkit-animation: none !important;
  animation: none !important;
}

#spinnerContainer,
ytp-spinner-left,
ytp-spinner-right {
  transform: rotate(0deg) !important;
  -webkit-animation: none !important;
  animation: none !important;
}

.ytp-spinner-rotator {
  width: 50%;
  height: 50%;
  -webkit-animation: none !important;
  animation: none !important;
}

.ytp-spinner-container,
.ytp-spinner-rotator {
  animation: none !important;
  content: url(https://i.imgur.com/DLLjUig.png);
}

ytd-button-renderer.style-suggestive[is-paper-button] paper-button.ytd-button-renderer {
  height: 24px;
  font-size: 12px;
  outline: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
}
ytd-button-renderer.style-primary[is-paper-button]:hover {
  border-color: #333;
}

ytd-button-renderer.style-primary[is-paper-button]:active {
  box-shadow: inset 0 1px 0 rgb(0 0 0/50%);
}

ytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer {
  background-image: linear-gradient(#1c1c1c, #1c1c1c);
  height: 24px;
  outline: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
  text-transform: none !important;
  color: var(--yt-spec-text-secondary) !important;
  white-space: nowrap !important;
  font-size: 12px !important;
  font-weight: normal !important;
  letter-spacing: normal !important;
  border: 1px solid #333 !important;
}

html:not([dark]) ytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer {
  background-image: linear-gradient(to top, #f6f6f6 0, #fcfcfc 100%);
  border-color: #d3d3d3 !important;
  height: 24px;
  font-size: 12px !important;
  outline: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
  text-transform: none !important;
  color: var(--yt-spec-text-secondary) !important;
}




#guide-button.ytd-masthead {
  margin-right: 5px;
}

#guide-button.ytd-app,
#guide-icon.ytd-masthead {
  fill: transparent;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflEoWid_.png) -18px -202px;
}

#guide-button.ytd-app:hover,
#guide-icon.ytd-masthead:hover {
  background-position: -36px -370px;
}

#guide-button.ytd-app {
  padding: 0 !important;
  height: 23px !important;
  width: 22px !important;
  margin-left: 8px !important;
  margin-right: 8px !important;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer .guide-icon.ytd-guide-entry-renderer {
  width: 20px;
  height: 20px;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAAhoaGZmZmhoaGh4eHmYh3iYmJiIiIlpaPh4eHbXdth4eH6O0+XAAAAAx0Uk5TAJQFp/8Ptcwi3S/pAvLsZQAAAEJJREFUeJxjYCAGMArAWEwmzgpQZpiLSxKExVri4uIeAGZ2ugDBDBCLawuI6b0AyOR0AYMJIGEWFwYGFwcGCphEAwAS9g9mWUXrfQAAAABJRU5ErkJggg==);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"]:hover .guide-icon.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpQTFRFAAAA////ZmZm/f39/////f397u7u////////////////////////////f1ju7gAAAA50Uk5TAJAFqf+eD7QYxyTYMuQQcbMsAAAAQklEQVR4nGNgIAYwCsBYTCauClBmuotLGYTFMcXFxbMBzFztAgQ7QCyeKyCm7wEgk9cFDDaAhFlcGBhcHBgoYBINALEuEIz8W58TAAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/trending"] yt-icon,
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/explore"] yt-icon {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflNlthLq.webp) -674px 0;
  fill: none;
  color: transparent;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[active][href="/feed/trending"] yt-icon,
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/trending"]:hover yt-icon,
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/explore"]:hover yt-icon,
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[active][href="/feed/explore"] yt-icon {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflNlthLq.webp) -531px -233px;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/subscriptions"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpQTFRFAAAAgIOAiIiIp4BsnZ2dh4eHh4eHh4eHh4eHhoaGiIiIVVVVi4uLhoaGnxQEiwAAAA50Uk5TAE7/GidkoOyx0j4GfYeKF/N5AAAASklEQVR4nGNgIAIIKSkpCUCYhoKCggZgFksoEISAmWzlQFCGrqtzJgg0gJhKYKAAYaoVwZlae4rgTFu4qAZCLVxbEZhZQIxr4QAA2kYRqrDO3BAAAAAASUVORK5CYII=);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/subscriptions"]:hover .guide-icon.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/subscriptions"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5JREFUeJxjYBgFMPD//3+/v3///scD/Eg1UAWkCQ9WIcUwIyDOJAIbEWUg0KvzgIqfEMIgdSR5myoAaPMWID5LAt5CyECSAckGQsP0HdUMBAKjd+/e8QPpRmwGk2UgEEsA8QQg/kYNA7dgM4gSA/ECQgY+IdG8J3gNHAUkAwDMuiTgroDKPQAAAABJRU5ErkJggg==);
}

#guide-section-title.ytd-guide-section-renderer,
#guide #header .title {
  font-size: 11px !important;
  text-transform: uppercase;
  font-weight: var(--ytd-tab-system_-_font-weight) !important;
  letter-spacing: var(--ytd-tab-system_-_letter-spacing) !important;
}

#guide #header:hover .title {
  text-shadow: none !important;
}

#guide #header .title:hover {
  text-decoration: underline;
}

html:not([dark]) #guide #header .title {
  color: var(--oldcolor);
}

html[dark] #guide #header .title {
  color: #8f8f8f !important;
}

#guide #header #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer {
  background: 0 0 !important;
  min-height: 0 !important;
  height: 12px !important;
  padding-bottom: 6px;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/history"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKhJREFUeJxjYBgFINDe3v6fGEy0gW1tbcuBGl7iMewlSA1Jruzs7Nza0dFxBl0cJAaSI8kwEGhoaKgDuuLLzI5yfpgYiA0SA8mRbOC0af1KIK+BXANigzCIDRIDsUk2EMnQu0hhd5dsw2CgtbXRGWYgiE2RYdhcmFueq0+JYRhJBxQpZHkbFJO40iFZsQyNUawGkpwOQYEPSsC4DATJkRRBVM/Lo4AkAACcGemuiDZzGgAAAABJRU5ErkJggg==);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/history"]:hover .guide-icon.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/history"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJlJREFUeJxjYBgFIPCfSEC0gX///l0JVP8Oj1nvQGpIdeUWID6ORfw4SI4kw6AaG4H427t37/hhYiA21OWN5BgoAcRPoC5VgeItUDEJkg2EGgoy5AZS2IHYKmQZhmSoH5KBfpQapgL1IgyA2EbkGiaBZhg8yZAVhtBYxgXIiuV9eAwkLR1CI+IsHgNvkBRBeAxCAaT6ehQQBwBPdHJ7egtCiAAAAABJRU5ErkJggg==);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="https://studio.youtube.com/channel"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOFJREFUeJztlL0Ng0AMhWlSZ5QMkU0o6KjpIlLAHSNkgkyQLbICA6RPT/hEAk8WxwWJKoolS5Z/3vnZhiT5y0cuvtiXZXny3t/run6i2PiIrQKrqvPROdf22gW0JWcN2FhMV3mRH1BsjUVBoaKd9TQ7pYeNTztdpM98tAPmZnPwaQ41QUBLaaDl0mkcLrVxaoKA9nUtmnssxCIG2DZNc0PnNr8IqF0AwGZtDr43eJyyLOWRZdkulEeMnOhS9Gx0GVZkOctnMyRPh93P5wpFOkKx8X192AZ0m09P6W/2c/hteQFIL1T2NRIk0wAAAABJRU5ErkJggg==);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="https://studio.youtube.com/channel"]:hover .guide-icon.ytd-guide-entry-renderer,ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="https://studio.youtube.com/channel"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMhJREFUeJztVDEKwzAMzNK5a96RF/g1Bj/Dz+neOT/wngdk9ujNqFKREyNsBUOm0oODkJNPkqVkmv4oiDE+AcAjAzIx6dmTNmSGhwxyhz5IMyNmNVbkwlyFpptym7KyuUo2y0rV9vnOaqRGTBIxXjMMjftyle4aetAMZfbjUCdZs4srww35Zm6jhnUV3+k2YuS01ZbLUHZr7aMXRxqc29Afilgb14uDczj62nDwsdg55xe1SBVxVQu/KzCqmTC959MruPXn8Nv4ADy6IMvnpMUsAAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=WL"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKRJREFUeJxjYBgFyCC3PFe/ra1teXt7+0sg/QVKLweJk2RQWloaa0NDQx3QgP+4MEgepI4oAwkZhmwoUd7EphnkGmziBL0PDTMMjTM7yvmxiYPU4zUQFPCkGAhST8iFX3AZ2NnZuRWLC7+Q5UKQ16ZN61dqbW10RjOYoAuxhiHMNa2t7UnIEUcwDHHFMnq4ER3LIEDVdAgCVM8pyN6nSl4eBSQBALbqYVP/7ExDAAAAAElFTkSuQmCC) !important;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=WL"]:hover .guide-icon.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=WL"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJtJREFUeJxjYBgFyOD///9Gf//+XQmknwDxNxAN5RuRY1gjUPN/bAAq3kiSYVhNwgSEDYV6E0NnWloaKw6X4vc+NIwwwLt37/hxeH8lIRc+weE9CRziTwgZ+A2PC7dgkfpGlguhQQFypQMQ7yPahbjCEOZQIM4EYiNkiwi5EGssYzGYuFiGGkq9dAgC0DRHvZyC5n3q5OVRQDQAAOojKqlWPB/dAAAAAElFTkSuQmCC)!important;
}

#filter-menu #button.ytd-toggle-button-renderer yt-icon,
div#footer.style-scope.ytd-guide-renderer,
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"],
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UCtFRv9O2AHqOZjjynzrv-xg"],
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/clips"],
tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/premium"],
yt-img-shadow.ytd-video-renderer {
  display: none;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=LL"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKdJREFUeJxjYBgFhMDMjnL+9vb2/62tjc5UMbCtrW0KyMCGhoY6il0GNGw5yDCKDWxtbU8CGvISZhjQ4C+55bn6JBuUlpbGiuwqmGFEG4CsEcTv7OzciiyGhF+C5EDexutSdANxGPafaBeTaeByqhoIijCqGQjyLig5UdNA3N4lx0CC2Q/dQJCXcBnW0dFxBq9huAAojEAuAQU+KB+DDAJZhDcyRhYAAEDcPbd3sUY9AAAAAElFTkSuQmCC) !important;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=LL"]:hover .guide-icon.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=LL"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJFJREFUeJxjYBgFhMD///8l/kOAA7UMnAA1sJFil/39+3flfwQopcSwWCB+h2TYNyA2Itmgd+/e8QNdNe8/KvhGikvgAMrf8h87eAKVK8XrUiwGEgPeUdVAUERR24Wx1DTwGyjiqGYgKAXgNIxMFzqQauA3PIadxWsYLgAKI5BLgDjzPyQfH/8PyTV+ZBk4/AAAwhz1B8fVSG8AAAAASUVORK5CYII=)!important;
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="/playlist?list="] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEdJREFUeJxjYBgFVAXt7e3/ycH0M3Dwg9EwxAtaW9uTCCoixYsguqOj40xuea4+1QwE4pdEuZQY0NbWNmVmRzk/VQwbBbQFALwR1y4cnM8yAAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="/playlist?list="]:hover .guide-icon.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="/playlist?list="] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJxjYBgFVAX/yQT0M3Dwg9EwxAuADsskRhHRXoQyzwKxETUNfEeUS4kBf//+nQc0TIIqho0C2gIAaBNPMh5knQEAAAAASUVORK5CYII=);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/guide_builder"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAIZJREFUeJxjYBgFMDCzo5y/oaGhrqOj40xbW9sXEAaxQWIgOZIMa21tdG5vb78LxP9x4LsgNaQYhssgFEzQUJBXCLgMw6V4vQ8KH2waYfLY5EB6cBoICnRSDQTpwWkgKCaxGYQOkNWA9NDPQKp7meqRQvVkAwJUTdhohlIn6yF7n2qFw/AGAJRscqhLuHgXAAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/guide_builder"]:hover .guide-icon.ytd-guide-entry-renderer,
ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/guide_builder"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAHdJREFUeJxjYBgFMPDu3Tv+////NwLxWSD+BsUgdiNIjiTDgJocgPjJf9wAJOdAimHEAvyGQr2Jz2UYLsXrfWiYYQAkeWygEZ+BZ8kw8Cw+A79hMwiLOmTwja4GUt3L1I0UqicbqCuol7DRDKVO1kPzPnUKh+ENAC1USA8dMiWwAAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/storefront?bp=ogUCKAI%3D"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACjklEQVQ4EeWTzUuqQRSH370lhX0ohRJiZFDrvtXKiv5FFy0UAgtatojACIJoVRZlpShUVkbrovIXz4EZ7t3f3X1h3vk655nfOWcmyGazWlxc1OrqqjKZjLXl5WU/X1hY0MrKipaWlvwaPrlcztbcGB9sAiA4sOAW5+bmbBMDB8eROfaMOYg95qyzRguAodBtoHR+fl6bm5t/OaAIO+ydDb2D4o9N4FSwAGhjY8M2GKMCJ052QDd2gHw+b1C3bgpxXl9fN6dkMqnx8XGNjY1peHhYvb29CoVC6unpUX9/vyKRiEZGRswmlUr50D2Qk5gAnZqa0sHBgY6OjnRycqLLy0vd3d3p9vZWNzc3Nr64uNDZ2ZnZVSoVpdNpn1cfsisKCnDc3d3Vw8OD+LrdrvXu9/X1pefnZ+3t7Ql4LBazogBDnFWZxJKv0dFRXV9fa2trSy8vLx728/NjPNd3Oh0VCgU1Gg1LATAYFC0gXBRCHxgYsDBR12q1nCh9f3/7MYNms6nHx0dVq1UNDQ1ZygDCMoVUmhaNRi1fxWJRb29vHkLYhEpPe39/V6lU0v39vQYHB/09tByibG1tzSQD5NRyuWwKgfz5oZS1p6cn7ezs6Pz83BTCoBmQuMkfrwMglaWqr6+vxvr4+JDLnYNTlFqtpnq9bkDC9UXh4jKhpyicisJ2u63Pz0/H8D0qyTE2RMO9JHdAURlw/4ChlHxcXV1pe3vbwnIUlz/mqKXKALkRFAVfRFnIbjAzM6Pp6Wnt7+/r+PhYp6endicJH0cuOHeUA9njARweHmpyctKUUVSEBfxmZ2dtApxnx5NKJBLq6+uz58bTYxwOh20ej8fNbmJiwsKF4d693UNy8K/afwj8BRpqisFAXhQnAAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/gaming"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACi0lEQVQ4EeWUu0qrURCFdxOECFbpbFLYKCIYjMb7JXc7X0SQ+AJ2thLiAwT0GVJapEinICpeg4pGEJGAKEnUdfgGJnD6050fJntm7zVr1uxLQjqd1srKihYXF7W0tKTV1VWLM5lM319eXtba2poYwS0sLKhQKGh+ft7myPG8ACELAPBJnJmZEYRzc3MWUxAMSfl83kZIwSKCQhh+AAiIAAIUZLNZA0BKIoVYx5wYbC6XM3JXyBioghFQBXKA3hokrLt6cBSEGDwxHWDgAgkE3jqKvEVP8GRU+TrqwYGhOIYfUAOISl5tcnJS4+PjpnZkZMTmKTg1NWXYRCKh6enp/h57HuJMIZVpg4UQgsrlsj4+PsR3eHioaDRq83t7e3p5edHZ2Zl2d3c1ODjY31MKotgIfc+GhobUbDaNiJ+fnx/z397edHx8rIeHB93d3enx8dGIj46ONDY2plQqZWKsZXqH3YIQ9Pn5aST1el0HBwfqdrsWX11d6fb2Vs/Pz9re3jaV19fXisVidhjsqbXsJ4zcgYEBfX19Wbv7+/va2dkxJTCirNFoaGtrSycnJxafnp4aIaLYLhMFqxv79/39rV6vp3a7rdfXV1PHz83Nje7v721EaavV0sXFheLxuJ0wHP2WeSVI5vSKxaIBIeb7/f01oz0M4qenJ9VqNW1sbCiZTPa3zFpGKpK5a640EomoVCrp/f3dSDudjrVI2+fn59rc3NTw8LBdHfL9ZRkhewfh+vr6Xy9gdnbWrkq1WjXSy8tLVSoVm0MV7UFEPtZvmQp+aR2EWp4gBzY6OmpKSJqYmLCLzTWDACHk4DtxgNADKvqfAQqZZ92r40OAAPcpyhwj+OBk/2r8Dwn/AGeOOZSHuaPrAAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UC4R8DWoMoI7CAwX8_LjQHig"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACjklEQVQ4Ec2TP0v6URTGv1FzBArRZKg55JBCkGVmf63wBSSNhUtrUFME+hYk2poNtD1oDbLWliCwoT9DayiCPj8+B470Ahp+wvXcc+45z/Pcc+43WF5eVqFQUC6X08LCgnZ2dmy/urqqra0tbWxsaGVlxWw+n7dYNpsV56y1tTWznLEC/ihaX183YPaQ4C8tLRk4RcTIJba9vW3n5DigEwSbm5taXFy0BFSyJ+YEqEM1BdyEM24C8W+lQ0CYYQSM4t3dXbMkoAhgcnwBAii5tIQcB8MGSOYankSQYnySASAHlYB7T4lxjvVlgBSycSWwsvcCfAgzmYypIo46SB2IfK8JXAEB2OPxuGZmZkyZJ9JXJ6A1xFOplObn561Vv5UOpwxrOp1WvV7Xw8ODRkdHrSAUCmlvb0/7+/sKh8NGFASBms2marWaKUeUgwYAufTx8XG1223d3t7q6+tLZ2dnenx81M/Pj/i1Wi2Vy2Wzl5eXRhyJRIbXBTTwhwwLzL1eT9VqVf1+XycnJ+p0OgaGheTw8FDf3986PT3V8/OzpqamhjMwQBpO73BGRkbU7XZ1fn4+BBwMBnp/f9fLy4s+Pz91cHCgt7c3HR8fW2xyctKG5NMP2DBJpjYxMWHFd3d3en19VaVS0fX1tbXh4+NDjUZDR0dHenp60tXVle7v7xWNRg2QQZlC/zJ4Oslk0hIZytjYmA0gkUioVCrZUGKxmE2V1tzc3Oji4sIGBxD19g5B5i2isFgsam5uTtPT08YGGb1lcFgKyOPLmp2dtc+UmD8pA8ThbcFCMtcnRisgw2fPGZYzwPmu6T85xFh2ZXdAZ/nD9c8Rn5zfSvD9uWE5g8wAHeivbPBXQI7z/wP+A87yAxA1rz19AAAAAElFTkSuQmCC);
}

tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UCEgdi0XIXXZ-qJOFPf4JSKw"] .guide-icon.ytd-guide-entry-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC7klEQVQ4EW2TSyu9URTGdzIxdjcgddCh3Mv97hCKiW8gAxPfwQBlxBGDMyA+gomRDJTRGVA6yl0MFAZSDFyef79V63T8eWu391rvXs/+rWe/b+jq6lJvb6/6+vrU3d0tYtY9PT2W5x154oGBAcsxs6e/vz+9h32MMDg4mBaKxWK2yTczMxCkmJmitrY2W3vsYibY2dlpJztpe3u7hoaG1NLSYlQIcmhra2uaCtrh4eEfXbhogIoihBEdHR21mDUEZWVlamhosAPKy8uNjr0IZNqSFqQQUShIEtNSdna2ZmdndXJyopWVFW1sbCiVSml6elo5OTkm9mfLnEJ7ULLGq8rKSh0eHopncXFRVVVVKioq0tzcnOWSyaSgBcTJfA74hZAPPCwoKLDCz89PzczMqKmpyQqnpqYs//39bZ7+Seh+QMiorq62dj8+Pqx4Z2dHWVlZCiGIteexpba29jchZP7pNDY2an19XRDwfH192fz8/CwGz/v7uy4vL3V+fq6lpSXV1dXZjeM9cIHeOzo6rGUo3t7eRKs8CLs48dXVla6vr3V3d2eiZ2dnKi0tNUq3LPDVcxHMCL68vOj09FSRSESrq6t6fX3V4+Oj3TBUXAyt7u7uWq6wsNDI/K8JGOuE+fn5ur+/N+Hm5mYVFxdrbW1Nt7e3RsUBFRUVdiEcfnBwYDEaaUH880+GvwEP+URGRkZUUlKieDxuxA8PD1peXrZ37K+pqdH8/Hz6D8I62g7eu5sKwfb2tgli+sXFhRHiH54tLCxofHxcW1tbikajBoMYlCaId9wORLRJPDExoePjY93c3Jj53KqPp6cnHR0d2X4EvLsfhCT9F2TNx52bm6vNzU3t7+9rbGxMk5OT2tvbUyKRUF5entG4CDMgUAY3k9N44TEXxS+JV3jLIfX19TY43AWoyRzBkVHnBbHnsAJhYg4iRvj/Vn8JkmCTU7po5owgVN4BNZlrFzVCL/Qks1NxCC3Sged475SZNaz/AavpPaIP/0kIAAAAAElFTkSuQmCC);
}

#secondary #byline-container #text.ytd-channel-name,
ytd-app ytd-video-meta-block:not([rich-meta]) #metadata-line.ytd-video-meta-block,
ytd-video-meta-block.ytd-rich-grid-media #metadata-line.ytd-video-meta-block span.ytd-video-meta-block,
ytd-video-meta-block.ytd-rich-grid-media yt-formatted-string[ellipsis-truncate] a.yt-formatted-string {
  line-height: 1.3em;
  font-size: 11px;
}

#video-title.ytd-rich-grid-media {
  line-height: 1.3em;
}

.style-scope.ytd-guide-entry-renderer::before {
  content: none;
}

#guide-section-title.ytd-guide-section-renderer {
  font-size: 11px;
  letter-spacing: 0.2px;
}

#sections.ytd-guide-renderer > .ytd-guide-renderer:last-child,
[collapsed] ytd-metadata-row-container-renderer,
ytd-expander.ytd-video-secondary-info-renderer ytd-metadata-row-container-renderer ytd-metadata-row-header-renderer[has-divider-line],
ytd-expander.ytd-video-secondary-info-renderer ytd-metadata-row-renderer:last-child {
  display: none;
}

ytd-guide-section-renderer.ytd-guide-renderer:nth-of-type(3) {
  border-bottom: 0 !important;
}

ytd-guide-section-renderer.ytd-guide-renderer:nth-of-type(3) #guide-section-title.ytd-guide-section-renderer {
  height: 13px;
}

tp-yt-paper-item.ytd-guide-entry-renderer:hover .title.ytd-guide-entry-renderer,
ytd-search-filter-renderer yt-formatted-string.ytd-search-filter-renderer:hover {
  color: #fff !important;
}

yt-icon.yt-player-error-message-renderer {
  --iron-icon-fill-color: #ffe0;

  flex: var(--layout-flex-none_-_flex);
  height: 100px;
  width: 150px;
  background-size: 140px, 50px;
  background-repeat: no-repeat;
  background-image: url(https://s.ytimg.com/yts/img/meh7-vflGevej7.png);
  fill: transparent;
}

#reason.yt-player-error-message-renderer::after,
div#reason.style-scope.yt-player-error-message-renderer {
  font-size: 25px;
  text-shadow: 1px 1px 3px #7b7b7b;
}

yt-playability-error-supported-renderers {
  display: block;
  background: linear-gradient(#383838, #141518) !important;
  flex: var(--layout-flex_-_flex) !important;
  flex-basis: var(--layout-flex_-_flex-basis) !important;
  flex-direction: var(--layout-vertical_-_flex-direction) !important;
}

ytd-search-filter-renderer.selected #dismiss-x.ytd-search-filter-renderer {
  padding-bottom: 5px !important;
}

html:not([dark]) #metadata-line.ytd-video-meta-block span.ytd-video-meta-block,
html:not([dark]) ytd-search-filter-renderer yt-formatted-string.ytd-search-filter-renderer {
  color: #555 !important;
}

ytd-search-filter-renderer yt-formatted-string.ytd-search-filter-renderer {
  font-size: 11px !important;
  height: 21px !important;
  font-weight: normal !important;
  width: auto;
}

#filter-group-name.ytd-search-filter-group-renderer {
  color: #555 !important;
  padding: 0 !important;
  border-bottom: none !important;
  font-size: 11px !important;
  font-weight: 500 !important;
}

#button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer + yt-formatted-string.ytd-toggle-button-renderer {
  border: 1px solid #3c3c3c;
  background: 0 0 !important;
  color: var(--yt-button-color, inherit);
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  padding-top: 2px !important;
  padding-bottom: 3px;
  font-size: 11px !important;
  margin-left: 0 !important;
}

html:not([dark]) #button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer + yt-formatted-string.ytd-toggle-button-renderer {
  border: 1px solid #d3d3d3 !important;
  background: #f8f8f8 !important;
  color: #333;
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  padding-top: 2px !important;
  padding-bottom: 3px;
  font-size: 11px !important;
  margin-left: 0 !important;
  font-weight: normal !important;
}

#button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer + yt-formatted-string.ytd-toggle-button-renderer::after {
  content: "";
  margin-left: 5px;
  border: 1px solid transparent;
  border-top-color: #333;
  border-width: 4px 4px 0;
  top: 9px;
  width: 0;
  height: 0;
  position: relative;
}

#button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer + yt-formatted-string.ytd-toggle-button-renderer:hover {
  border-color: #333;
  background: #f0f0f0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

html:not([dark]) #button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer + yt-formatted-string.ytd-toggle-button-renderer:hover {
  border-color: #c6c6c6;
  background: #f0f0f0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

ytd-search-filter-group-renderer {
  all: unset !important;
  padding: 0 32px 0 0 !important;
}

#filter-menu.ytd-search-sub-menu-renderer,
ytd-backstage-post-thread-renderer,
ytd-item-section-renderer {
  border: 0 !important;
}

#country-code.ytd-topbar-logo-renderer,
ytd-topbar-logo-renderer[is-logo-updated] #country-code.ytd-topbar-logo-renderer {
  margin: 0 0 0 2px;
}

ytd-video-renderer[use-prominent-thumbs] #channel-info.ytd-video-renderer {
  padding: 5px 0;
}

ytd-horizontal-card-list-renderer.ytd-item-section-renderer:first-child {
  display: none;
}

#metadata-line.ytd-video-meta-block {
  position: relative;
}

#description-text.ytd-video-renderer {
  position: relative;
  bottom: 0;
}

#all.ytd-vertical-list-renderer,
#more.ytd-vertical-list-renderer {
  padding-top: 5px;
}

ytd-vertical-list-renderer {
  padding-bottom: 8px;
}

ytd-thumbnail-overlay-playback-status-renderer {
  top: 0;
}

ytd-thumbnail-overlay-toggle-button-renderer {
  box-shadow: 0 1px 0 rgb(0 0 0/10%) !important;
  position: absolute;
  top: calc(100% - 26px);
  margin: 2px;
  border-radius: 1px !important;
  border-color: #d3d3d3 !important;
  background: #f8f8f8 !important;
  color: #333 !important;
  width: 22px !important;
  height: 22px !important;
  transition: none !important;
}

ytd-thumbnail-overlay-toggle-button-renderer:hover {
  border-color: #d3d3d3 !important;
  background: #f0f0f0 !important;
}

ytd-thumbnail-overlay-toggle-button-renderer yt-icon {
  color: transparent !important;
  box-shadow: none !important;
  background: no-repeat url("https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflHFLZLR.webp") -239px -48px;
  background-size: auto;
  width: 13px;
  height: 13px;
  opacity: 0.5 !important;
}

ytd-thumbnail-overlay-toggle-button-renderer yt-icon:hover {
  color: #606060 !important;
}

ytd-thumbnail-overlay-toggle-button-renderer yt-icon:active {
  color: #000 !important;
}

ytd-app ytd-thumbnail-overlay-time-status-renderer {
  margin: 2px;
  padding: 0 4px;
  font-size: 11px !important;
  background-color: #000;
  height: 14px;
  line-height: 14px;
  opacity: 0.75;
  border-radius: 0;
  letter-spacing: 0 !important;
}

ytd-menu-popup-renderer tp-yt-paper-listbox tp-yt-paper-item yt-icon {
  display: inline-block !important;
}

ytd-menu-popup-renderer tp-yt-paper-listbox tp-yt-paper-item {
  min-height: 28px;
}

tp-yt-paper-item.ytd-menu-service-item-renderer {
  --paper-item-min-height: 24px !important;

  padding: 0 36px 0 16px !important;
}

tp-yt-paper-item.ytd-menu-service-item-renderer:hover {
  background: #444 !important;
}

tp-yt-paper-item.ytd-menu-service-item-renderer:hover yt-formatted-string {
  color: #fff;
  opacity: 1 !important;
}

html[dark] #info ytd-toggle-button-renderer.style-default-active a #text,
html[dark] #info ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer,
tp-yt-paper-item.ytd-menu-service-item-renderer:hover yt-icon {
  color: #fff;
}

tp-yt-paper-item.ytd-menu-service-item-renderer yt-icon {
  margin-right: 8px;
}

html[dark] #masthead-container #search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox,
html[dark] #play-button ytd-button-renderer yt-formatted-string.ytd-button-renderer,
html[dark] yt-icon-button.ytd-expandable-tab-renderer,
html[dark] yt-icon.ytd-menu-renderer,
html[dark] ytd-button-renderer.style-default[is-icon-button] #text.ytd-button-renderer,
html[dark] ytd-button-renderer[is-paper-button] yt-icon.ytd-button-renderer,
html[dark] ytd-notification-topbar-button-shape-renderer #button yt-icon {
  filter: invert(1);
}

yt-icon.ytd-menu-renderer {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAANCAYAAABsItTPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVBhXY2RgYPgPxGDABKXBAIWDG9DHAAYGADC6Aw1aLZAXAAAAAElFTkSuQmCC) no-repeat center center;
  opacity: 0.5;
}

yt-icon.ytd-menu-renderer:hover {
  opacity: 0.75;
}

yt-icon.ytd-menu-renderer:active {
  opacity: 1;
}

yt-icon.ytd-menu-renderer svg {
  fill: transparent;
}

yt-icon-button.dropdown-trigger {
  height: 16px !important;
}

ytd-rich-grid-media:not([three-dot-rework]) ytd-menu-renderer.ytd-rich-grid-media {
  margin-top: 5px;
}

ytd-menu-renderer.ytd-video-primary-info-renderer {
  padding-bottom: 6px;
}

#label.ytd-pinned-comment-badge-renderer {
  color: #fff !important;
}

html:not([dark]) #label.ytd-pinned-comment-badge-renderer {
  color: var(--yt-spec-text-secondary) !important;
}

html:not([dark]) ytd-pinned-comment-badge-renderer {
  padding-right: 6px !important;
  padding-left: 2px !important;
  padding-top: 2px !important;
  background: 0 0;
}

ytd-pinned-comment-badge-renderer {
  padding-right: 6px !important;
  padding-left: 2px !important;
  padding-top: 2px !important;
}

ytd-author-comment-badge-renderer[creator] {
  background-color: #3f4c57;
  border-radius: 0;
  padding-right: 6px !important;
  padding-left: 6px !important;
}

html:not([dark]) ytd-author-comment-badge-renderer[creator] {
  background-color: #dbe4eb;
  border-radius: 0;
  padding-right: 6px !important;
  padding-left: 6px !important;
}

ytd-comments-header-renderer {
  padding-bottom: 20px;
  border-bottom: 1px solid #5a5a5a;
}

html:not([dark]) ytd-comments-header-renderer {
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
}

ytd-comments-header-renderer .count-text.ytd-comments-header-renderer {
  display: flex;
  font-size: 13px;
  letter-spacing: 0;
  text-transform: uppercase !important;
}

html:not([dark]) ytd-comments-header-renderer .count-text.ytd-comments-header-renderer {
  display: flex;
  font-size: 13px;
  color: #555;
  letter-spacing: 0;
  text-transform: uppercase !important;
}

ytd-comments-header-renderer .count-text.ytd-comments-header-renderer span:nth-of-type(1) {
  order: 2;
}

ytd-comments-header-renderer .count-text.ytd-comments-header-renderer span:nth-of-type(2) {
  order: 1;
  font-weight: 500;
  text-transform: uppercase;
}

ytd-comments-header-renderer .count-text.ytd-comments-header-renderer span:nth-of-type(2)::after {
  content: "•";
  margin: 0 3px;
}

.ytd-comment-simplebox-renderer .underline.tp-yt-paper-input-container,
div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .underline.tp-yt-paper-input-container,
paper-ripple,
yt-interaction,
yt-sort-filter-sub-menu-renderer #label-icon.yt-dropdown-menu,
ytd-comment-thread-renderer tp-yt-paper-tooltip.ytd-toggle-button-renderer.ytd-toggle-button-renderer,
ytd-comment-thread-renderer yt-interaction {
  display: none !important;
}

tp-yt-paper-listbox.yt-dropdown-menu .iron-selected.yt-dropdown-menu {
  background-color: transparent !important;
}

#title.ytd-comments-header-renderer {
  margin-bottom: 10px;
}

#title.ytd-comments-header-renderer tp-yt-paper-listbox.yt-dropdown-menu,
#title.ytd-comments-header-renderer tp-yt-paper-listbox.yt-dropdown-menu .iron-selected.yt-dropdown-menu {
  --paper-item-min-height: 24px;
}

#title.ytd-comments-header-renderer tp-yt-paper-listbox.yt-dropdown-menu .item.yt-dropdown-menu {
  font-size: 12px !important;
  letter-spacing: 0;
}

#title.ytd-comments-header-renderer tp-yt-paper-menu-button[vertical-align=top] .dropdown-content.tp-yt-paper-menu-button {
  background-color: var(--yt-button-color, inherit);
  border: 1px solid #3c3c3c;
  min-width: max-content;
  top: 0;
}

html:not([dark]) #title.ytd-comments-header-renderer tp-yt-paper-menu-button[vertical-align=top] .dropdown-content.tp-yt-paper-menu-button {
  border: 1px solid #d3d3d3;
  min-width: max-content;
  top: 0;
}

html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button,
html:not([dark]) ytd-comments-header-renderer div#icon-label.style-scope.yt-dropdown-menu {
  color: #333;
  font-weight: 500 !important;
  font-size: 11px !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button,
html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu {
  background-color: #f8f8f8 !important;
  height: 28px;
  border: solid 1px #d3d3d3 !important;
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
}

html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:hover,
html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu:hover {
  border-color: #c6c6c6 !important;
  background: #f0f0f0 !important;
  box-shadow: 0 1px 0 rgb(0 0 0/10%) !important;
}

html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:active,
html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu:active {
  background-color: #e9e9e9 !important;
  box-shadow: inset 0 1px 0#ddd !important;
}

ytd-comments-header-renderer #label.yt-dropdown-menu::after {
  content: "";
  margin-left: 5px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #8f8f8f;
}

html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu::after {
  content: "";
  margin-left: 5px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #333;
}

ytd-comments-header-renderer #label.yt-dropdown-menu {
  color: var(--yt-button-color, inherit);
}

ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button,
ytd-comments-header-renderer #label.yt-dropdown-menu {
  background-color: #1c1c1c;
  height: 30px;
  border: solid 1px #333;
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
}

ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:hover,
ytd-comments-header-renderer #label.yt-dropdown-menu:hover {
  border-color: #3c3c3c !important;
  color: var(--yt-button-color, inherit);
  box-shadow: 0 1px 0 rgb(0 0 0/10%) !important;
  background-color: #444;
}

ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:active,
ytd-comments-header-renderer #label.yt-dropdown-menu:active {
  background-color: #212121 !important;
  box-shadow: inset 0 1px 0#333 !important;
  color: #8f8f8f;
}

ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button,
ytd-comments-header-renderer div#icon-label.style-scope.yt-dropdown-menu {
  color: var(--yt-button-color, inherit);
  font-weight: 500 !important;
  border-color: #333 !important;
  font-size: 11px !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button {
  background-color: #167ac6 !important;
  color: #fff !important;
  height: 28px !important;
  border: solid 1px #167ac6;
  padding: 0 10px !important;
  font-weight: 500 !important;
  font-size: 11px !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  border-radius: 2px !important;
  box-shadow: 0 1px 0 rgb(0 0 0/5%) !important;
}

ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button {
  background-color: var(--yt-spec-call-to-action);
  color: var(--yt-spec-text-primary-inverse);
  height: 28px !important;
  border: solid 1px var(--yt-spec-badge-chip-background);
  padding: 0 10px !important;
  font-weight: 500 !important;
  font-size: 11px !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  border-radius: 2px !important;
  box-shadow: 0 1px 0 rgb(0 0 0/5%) !important;
}

html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:hover {
  background: #126db3 !important;
}

ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:active,
ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:hover {
  background-color: var(--yt-spec-call-to-action);
  color: var(--yt-spec-text-primary-inverse);
}

html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:active {
  background: #095b99 !important;
  box-shadow: inset 0 1px 0 rgb(0 0 0/50%) !important;
}

html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button[disabled] {
  border-color: #7fb7e0 !important;
  background: #7fb7e0 !important;
}

ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button[disabled] {
  background-color: var(--yt-spec-badge-chip-background) !important;
  color: var(--yt-spec-text-disabled) !important;
}

#author-thumbnail.ytd-commentbox,
ytd-comment-simplebox-renderer #author-thumbnail.ytd-comment-simplebox-renderer,
ytd-comment-simplebox-renderer img#img.style-scope.yt-img-shadow,
ytd-commentbox[is-backstage-comment] #author-thumbnail.ytd-commentbox {
  height: min-content;
  width: 48px;
}

ytd-comment-action-buttons-renderer ytd-comment-reply-dialog-renderer.ytd-comment-action-buttons-renderer img#img.style-scope.yt-img-shadow,
ytd-commentbox[is-reply] #author-thumbnail.ytd-commentbox {
  height: 32px !important;
  width: 32px !important;
}

html:not([dark]) #placeholder-area.ytd-comment-simplebox-renderer,
html:not([dark]) .ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container,
html:not([dark]) div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
  border: 1px solid #ddd;
  border-top: 1px solid #d5d5d5;
  color: #b8b8b8;
  cursor: pointer;
  min-height: 35px;
  border-radius: 0 2px 2px;
  padding: 8px 10px 5px;
  width: 0;
  background-color: transparent!important;
}

#placeholder-area.ytd-comment-simplebox-renderer,
.ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container,
div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
  border: 1px solid #5a5a5a;
  border-top: 1px solid #5a5a5a;
  color: var(--paper-input-container-input-color, var(--primary-text-color));
  cursor: pointer;
  min-height: 35px;
  border-radius: 0 2px 2px;
  padding: 8px 10px 5px;
  width: 0;
  background-color: #1c1c1c;
}

html:not([dark]) #placeholder-area.ytd-comment-simplebox-renderer:focus,
html:not([dark]) .ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container,
html:not([dark]) div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
  border: 1px solid #699dd2;
  border-top: 1px solid #699dd2;
  border-radius: 0 2px 2px;
}

#placeholder-area.ytd-comment-simplebox-renderer:focus,
.ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container,
div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
  border: 1px solid #5a5a5a;
  border-top: 1px solid #5a5a5a;
  border-radius: 0 2px 2px;
}

#contenteditable-root.yt-formatted-string[aria-label].yt-formatted-string,
#simplebox-placeholder.ytd-comment-simplebox-renderer {
  font-size: 13px !important;
  letter-spacing: 0;
}

ytd-comments-header-renderer div#placeholder-area::before {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRF6urq1dXVAAAA////mznMegAAAAR0Uk5T//8A//4MuwsAAAAuSURBVHicDcMxDQBACATBc0D1elCBIoxQAib5nWT0IpR3Kraf1pgstmvXmCzOBx6TFq6sX+dfAAAAAElFTkSuQmCC);
  z-index: 1;
  float: left;
  margin-right: -11px;
  margin-left: -22px;
  margin-top: -9px;
  filter: invert(94.5%) grayscale(1) brightness(200%);
}

html:not([dark]) ytd-comments-header-renderer div#placeholder-area::before {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRF6urq1dXVAAAA////mznMegAAAAR0Uk5T//8A//4MuwsAAAAuSURBVHicDcMxDQBACATBc0D1elCBIoxQAib5nWT0IpR3Kraf1pgstmvXmCzOBx6TFq6sX+dfAAAAAElFTkSuQmCC);
  z-index: 1;
  float: left;
  margin-right: -11px;
  margin-left: -22px;
  margin-top: -9px;
  filter: none;
}

html[dark] #action-buttons.ytd-comment-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container::before,
html[dark] ytd-comments-header-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container::before {
  filter: invert(89.5%) grayscale(1) brightness(100%);
}

#action-buttons.ytd-comment-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container::before,
ytd-comments-header-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container::before {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFaZzSaZ3SAAAA////cFz/SQAAAAR0Uk5To/8A/3/XCxEAAAAtSURBVHicDcMxDQBACATBM/E1qtBDiQ66Cyb5nWT0MtV3GrpOG2wOXdoNNof+L3wXXNQlZQ4AAAAASUVORK5CYII=);
  z-index: 1;
  position: absolute;
  width: 11px;
  height: 11px;
  top: 0;
  right: 100%;
  filter: invert(0) grayscale(0) brightness(100%);
}

ytd-comments.style-scope div#contents.style-scope.ytd-item-section-renderer {
  margin-top: 36px !important;
}

ytd-comments.style-scope {
  border: 0;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 15px;
}

#author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer {
  margin-right: 10px !important;
  height: 48px !important;
  width: 48px !important;
}

ytd-comment-renderer:not([comment-style=backstage-comment])[is-reply] #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer,
ytd-comment-renderer[is-creator-reply] #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer {
  height: 32px !important;
  width: 32px !important;
}

ytd-author-comment-badge-renderer:not([creator]) #icon.ytd-author-comment-badge-renderer,
ytd-author-comment-badge-renderer[creator] #icon.ytd-author-comment-badge-renderer {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdQTFRFnJycmpqah4eHs7OziIiIz8/PyMjI5OTko6Oj8PDw/////f39jo6OcQxNSQAAAA10Uk5TVbSdubDh0eHD////wP+/OHAAAAA0SURBVHicY2AUFBRUFGAAkoKGgkBKRDQRRDmWCwKp9vSJIEpstQmIEgwTBFMHQRRIn6AAAOTgB5X8AsHIAAAAAElFTkSuQmCC);
  width: 12px !important;
  height: 9px !important;
}

ytd-author-comment-badge-renderer:not([creator]) #icon.ytd-author-comment-badge-renderer:hover,
ytd-author-comment-badge-renderer[creator] #icon.ytd-author-comment-badge-renderer:hover {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFQ5DaYqPnS6LfhrXsrdb1xd33yNPjQI/O5ebn////9vb2pbjU4GAmaAAAAAx0Uk5Tbv79////+v/+///363aeKQAAADtJREFUeJxjYBQUFFQUYACRhoIMSkpKKkZKDEqKSmFFQErFtF0JSBXPUgdR6puLQJRSOVAVAxOQUFIAAAsGCYbgx0ruAAAAAElFTkSuQmCC);
  width: 12px !important;
  height: 9px !important;
}

.ytd-sponsor-comment-badge-renderer {
  padding-left: 2px;
  margin-right: -2px;
}

#header.ytd-comment-renderer,
ytd-author-comment-badge-renderer {
  margin-top: -1px !important;
  margin-bottom: 1px !important;
}

#author-comment-badge.ytd-comment-renderer,
ytd-author-comment-badge-renderer:not([creator]) #icon.ytd-author-comment-badge-renderer {
  padding-right: 0 !important;
}

#channel-name.ytd-author-comment-badge-renderer,
html:not([dark]) #author-text.yt-simple-endpoint.ytd-comment-renderer {
  color: #128ee9 !important;
  margin-right: 0 !important;
  letter-spacing: 0 !important;
}

#channel-name.ytd-author-comment-badge-renderer:hover,
#content-text.ytd-comment-renderer a.yt-simple-endpoint.yt-formatted-string:hover,
#message.ytd-message-renderer a:hover,
html:not([dark]) #author-text.yt-simple-endpoint.ytd-comment-renderer:hover {
  text-decoration: underline !important;
  text-decoration-color: #128ee9 !important;
}

#author-text.yt-simple-endpoint.ytd-comment-renderer:hover,
#content-text.ytd-comment-renderer a.yt-simple-endpoint.yt-formatted-string:hover,
#message.ytd-message-renderer a:hover {
  text-decoration: underline !important;
  text-decoration-color: #fff !important;
}

.published-time-text.ytd-comment-renderer a {
  color: #767676 !important;
  font-size: 11px !important;
  margin-left: 6px !important;
  letter-spacing: 0 !important;
}

.published-time-text.ytd-comment-renderer a:hover {
  text-decoration: underline !important;
  text-decoration-color: #767676 !important;
}

#content-text.ytd-comment-renderer,
#expander.ytd-comment-replies-renderer #content.ytd-expander,
#message.ytd-message-renderer {
  font-size: 13px !important;
  line-height: 1.3em !important;
  letter-spacing: 0 !important;
}

#content-text.ytd-comment-renderer a.yt-simple-endpoint.yt-formatted-string {
  color: #128ee9 !important;
}

div#toolbar.style-scope.ytd-comment-action-buttons-renderer {
  margin-top: 6px;
  margin-bottom: 10px;
  margin-left: 0;
  height: 13px;
}

#vote-count-left.ytd-comment-action-buttons-renderer[hidden] + #like-button.ytd-comment-action-buttons-renderer {
  margin-left: -4px !important;
}

#toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer::after {
  content: "•";
  margin: 0 5px !important;
}

#toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer:hover {
  opacity: 1 !important;
  text-decoration: none !important;
}

#toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer {
  order: 1;
  text-transform: none !important;
  line-height: 1.3em !important;
  margin-left: -18px !important;
  padding-right: 0 !important;
  font-weight: normal !important;
  color: #848484 !important;
  opacity: 1 !important;
}

html:not([dark]) #toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer {
  order: 1;
  text-transform: none !important;
  line-height: 1.3em !important;
  margin-left: -18px !important;
  padding-right: 0 !important;
  font-weight: normal !important;
  color: #555 !important;
  opacity: 0.75 !important;
}

#vote-count-middle.ytd-comment-action-buttons-renderer {
  order: 2;
  color: #128ee9 !important;
  padding-right: 6px !important;
  font-size: 9pt !important;
}

html:not([dark]) #like-button.ytd-comment-action-buttons-renderer {
  order: 3;
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAGRkZMzMzAAAACgoKGhoaEhISMTExMDAwAAAAAAAAGhoaAAAAIiIiHBwcHh4eLi4uERERAAAAKysrHBwcAwMDAAAAAAoKKSkpLS0tIiIidpjREQAAABt0Uk5TAHv/KE4oV/fzCAGABqeJn+BcG9eRSQkay+asp6oxLwAAAFBJREFUeJxVzkkSgCAQQ9EQURREnKf7H9Sxi+q/ytsFkAwL5CxZZlWOdSPwhmQQtfFW5595DyT+9S9FTJqD5qg4QXHWXBTd+t3YbIj74U7gArqRAmr4tybqAAAAAElFTkSuQmCC);
  width: 14px;
  height: 14px;
  opacity: 0.54;
  margin-right: 9px;
  cursor: pointer;
}

#like-button.ytd-comment-action-buttons-renderer {
  order: 3;
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAGRkZMzMzAAAACgoKGhoaEhISMTExMDAwAAAAAAAAGhoaAAAAIiIiHBwcHh4eLi4uERERAAAAKysrHBwcAwMDAAAAAAoKKSkpLS0tIiIidpjREQAAABt0Uk5TAHv/KE4oV/fzCAGABqeJn+BcG9eRSQkay+asp6oxLwAAAFBJREFUeJxVzkkSgCAQQ9EQURREnKf7H9Sxi+q/ytsFkAwL5CxZZlWOdSPwhmQQtfFW5595DyT+9S9FTJqD5qg4QXHWXBTd+t3YbIj74U7gArqRAmr4tybqAAAAAElFTkSuQmCC);
  width: 14px;
  height: 14px;
  opacity: 1;
  margin-right: 9px;
  cursor: pointer;
  filter: brightness(2);
}

#like-button.ytd-comment-action-buttons-renderer:hover {
  opacity: 1;
  filter: brightness(3);
}

html:not([dark]) #like-button.ytd-comment-action-buttons-renderer:hover {
  opacity: 0.6;
}

#like-button.ytd-comment-action-buttons-renderer.style-default-active {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAAIUB3QYTzBhgrFCtLQYPxQoX0BwcOFyxSP4DsPn7pAAAAAAAAH0B2IkR6K1egJEWBKFKYOXPVEzFaAAoKN2/OJUyLFCVHAAAAFBQUIkN7NGnDO3jcLFqlDo2PIwAAAB50Uk5TAHz+Kk78/yRX+PMGAXuAp4if314a15FLCRqBzOas5Dk6uwAAAFNJREFUeJxVzkkSgCAQQ9EWMYqgiPN4/2sqahfVf5W3CxGXqZxSukCZVBnUluEaBbQs6wF0Ls5nUMBf/5KFIDlIjoITCc6Si6BZvxub3v1xmovoBlQiBENPyrYVAAAAAElFTkSuQmCC);
  width: 14px;
  height: 14px;
  opacity: 1;
  filter: brightness(1);
}

html:not([dark]) #like-button.ytd-comment-action-buttons-renderer.style-default-active {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAAIUB3QYTzBhgrFCtLQYPxQoX0BwcOFyxSP4DsPn7pAAAAAAAAH0B2IkR6K1egJEWBKFKYOXPVEzFaAAoKN2/OJUyLFCVHAAAAFBQUIkN7NGnDO3jcLFqlDo2PIwAAAB50Uk5TAHz+Kk78/yRX+PMGAXuAp4if314a15FLCRqBzOas5Dk6uwAAAFNJREFUeJxVzkkSgCAQQ9EWMYqgiPN4/2sqahfVf5W3CxGXqZxSukCZVBnUluEaBbQs6wF0Ls5nUMBf/5KFIDlIjoITCc6Si6BZvxub3v1xmovoBlQiBENPyrYVAAAAAElFTkSuQmCC);
  width: 14px;
  height: 14px;
  opacity: 1;
}

#dislike-button.ytd-comment-action-buttons-renderer {
  order: 4;
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAIiIiMTExLS0tKSkpIiIiGhoaCgoKAAoKAAAAMzMzAwMDHBwcKysrAAAAERERHh4eLi4uAAAAHBwcAAAAGRkZAAAAMDAwEhISGhoaAAAA6t4PpwAAABt0Uk5TAKz35sungE4aCf9JkdcbXJ/gAYkGewjzVygoDkXByQAAAFNJREFUeJxVzEkOgCAQRNESBbScEMXp/gcVBzD9k07qbRpAocpKG1vjqVF8w31oKdhJ9oIDBUdJJzklufcV4Oc49IIvExV80rpR7cgdpP2FkyHvC2y7BYuVtnTFAAAAAElFTkSuQmCC);
  width: 14px;
  height: 14px;
  opacity: 1;
  cursor: pointer;
  filter: brightness(2);
}

html:not([dark]) #dislike-button.ytd-comment-action-buttons-renderer {
  order: 4;
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAIiIiMTExLS0tKSkpIiIiGhoaCgoKAAoKAAAAMzMzAwMDHBwcKysrAAAAERERHh4eLi4uAAAAHBwcAAAAGRkZAAAAMDAwEhISGhoaAAAA6t4PpwAAABt0Uk5TAKz35sungE4aCf9JkdcbXJ/gAYkGewjzVygoDkXByQAAAFNJREFUeJxVzEkOgCAQRNESBbScEMXp/gcVBzD9k07qbRpAocpKG1vjqVF8w31oKdhJ9oIDBUdJJzklufcV4Oc49IIvExV80rpR7cgdpP2FkyHvC2y7BYuVtnTFAAAAAElFTkSuQmCC);
  width: 14px;
  height: 14px;
  opacity: 0.54;
  cursor: pointer;
}

html:not([dark]) #dislike-button.ytd-comment-action-buttons-renderer:hover {
  opacity: 0.6;
}

#dislike-button.ytd-comment-action-buttons-renderer:hover {
  opacity: 1;
  filter: brightness(3);
}

html:not([dark]) #dislike-button.ytd-comment-action-buttons-renderer.style-default-active {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAALFqlP4DsO3jcNGnDK1egIkN7FCtLFBQUAAAAQoX0FCVHJUyLN2/OAAoKEzFaKFKYOXPVAAAAJEWBAAAAIkR6QYTzH0B2Pn7pFyxSBwcOQYPxBhgrIUB3PiVdqQAAAB50Uk5TAKz45syngU4aCf9LkdcaXp/fAYgGgP5781ck/Cp82XTnmAAAAFVJREFUeJxVzNkOgCAMRNERRbQuICLu//+bLgimN2ky56UAMpEXslQV3mpBITyHhhhbzo6xJ0bNaTiHKBNeAXa8h3T4moj8bKPcQmJFaqNd/cLhz7QvdZIF0DY8ddEAAAAASUVORK5CYII=);
  width: 14px;
  height: 14px;
  opacity: 1;
}

#dislike-button.ytd-comment-action-buttons-renderer.style-default-active {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAALFqlP4DsO3jcNGnDK1egIkN7FCtLFBQUAAAAQoX0FCVHJUyLN2/OAAoKEzFaKFKYOXPVAAAAJEWBAAAAIkR6QYTzH0B2Pn7pFyxSBwcOQYPxBhgrIUB3PiVdqQAAAB50Uk5TAKz45syngU4aCf9LkdcaXp/fAYgGgP5781ck/Cp82XTnmAAAAFVJREFUeJxVzNkOgCAMRNERRbQuICLu//+bLgimN2ky56UAMpEXslQV3mpBITyHhhhbzo6xJ0bNaTiHKBNeAXa8h3T4moj8bKPcQmJFaqNd/cLhz7QvdZIF0DY8ddEAAAAASUVORK5CYII=);
  width: 14px;
  height: 14px;
  opacity: 1;
  filter: brightness(1);
}

#hearted-thumbnail.ytd-creator-heart-renderer,
.ytd-comment-action-buttons-renderer:nth-of-type(2) {
  order: 5;
}

.less-button.ytd-comment-renderer,
tp-yt-paper-button.ytd-expander .more-button.ytd-comment-renderer,
ytd-comment-replies-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer {
  letter-spacing: 0 !important;
  font-size: 13px !important;
  color: #2793e6 !important;
  text-transform: none !important;
}

html[lang=en] .less-button.ytd-comment-renderer,
html[lang=en] tp-yt-paper-button.ytd-expander .more-button.ytd-comment-renderer,
html[lang=en] ytd-comment-replies-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer span:nth-of-type(1)::after {
  content: " all ";
}

ytd-comment-replies-renderer #less-replies.ytd-comment-replies-renderer,
ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer {
  margin-top: -6px !important;
  margin-left: -6px !important;
  letter-spacing: 0 !important;
  color: #2793e6 !important;
  font-size: 13px !important;
}

ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer:hover {
  text-decoration: underline;
  text-decoration-color: #2793e6 !important;
}

ytd-comment-replies-renderer ytd-button-renderer[is-paper-button] yt-icon.ytd-button-renderer {
  order: 2;
  margin-left: 5px;
  margin-top: 2px;
}

ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
  fill: transparent;
  background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -20px/auto no-repeat;
  opacity: 0.7;
  filter: invert(1);
}

ytd-comment-replies-renderer #less-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
  fill: transparent;
  background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -72px/auto no-repeat;
  opacity: 0.7;
  filter: invert(1);
}

html:not([dark]) ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
  fill: transparent;
  background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -20px/auto no-repeat;
  opacity: 0.7;
  filter: invert(0);
}

html:not([dark]) ytd-comment-replies-renderer #less-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
  fill: transparent;
  background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -72px/auto no-repeat;
  opacity: 0.7;
  filter: invert(0);
}

#contents.ytd-comment-replies-renderer #body.ytd-comment-renderer {
  margin-bottom: -2px;
}

#body.ytd-comment-renderer:not(:hover) ytd-menu-renderer.ytd-comment-renderer:not([menu-active]).ytd-comment-renderer:not(:focus-within) {
  opacity: initial;
}

html:not([dark]) yt-icon.ytd-menu-renderer {
  opacity: 0.3;
}

html:not([dark]) tp-yt-paper-spinner.ytd-continuation-item-renderer,
tp-yt-paper-spinner.ytd-continuation-item-renderer {
  content: url(data:image/gif;base64,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);
  width: auto;
  height: auto;
  filter: invert(100%) contrast(75%);
}

html:not([dark]) tp-yt-paper-spinner.ytd-continuation-item-renderer {
  filter: none !important;
}

ytd-continuation-item-renderer.ytd-comment-replies-renderer {
  width: 84px;
  padding-top: 0;
  padding-bottom: 0;
  height: 0;
  margin: 0;
}

#button.ytd-continuation-item-renderer ytd-button-renderer.ytd-continuation-item-renderer yt-icon,
ytd-mealbar-promo-renderer {
  display: none;
}

#button.ytd-continuation-item-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer {
  font-size: 0 !important;
  text-decoration: none !important;
}

#button.ytd-continuation-item-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer::after {
  content: "View more comments";
  font-size: 13px !important;
  line-height: 13px;
}

ytd-comment-replies-renderer * > ytd-button-renderer yt-formatted-string.ytd-button-renderer:hover {
  text-decoration: none !important;
}

#button.ytd-continuation-item-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer:hover::after {
  text-decoration: underline !important;
}

.less-button.ytd-comment-renderer,
.more-button.ytd-comment-renderer {
  font-weight: normal !important;
}

ytd-comment-thread-renderer {
  padding-bottom: 5px;
}

#contents.ytd-comment-replies-renderer ytd-comment-renderer:last-of-type {
  padding-bottom: 11px;
}

#contents.ytd-comment-replies-renderer #button.ytd-continuation-item-renderer {
  margin-top: -11px;
}

#expander.ytd-comment-replies-renderer {
  margin-bottom: -4px;
}

#wrapper.tp-yt-app-header-layout > [slot=header] {
  position: unset !important;
  transform: none !important;
  margin: 0;
}

#background.tp-yt-app-header,
#backgroundFrontLayer.tp-yt-app-header,
#backgroundRearLayer.tp-yt-app-header {
  transform: none !important;
}

#contentContainer.tp-yt-app-header-layout,
ytd-thumbnail-overlay-toggle-button-renderer tp-yt-paper-tooltip {
  display: none;
}

#contenteditable-root.yt-formatted-string {
  cursor: auto;
}

#placeholder-area.ytd-comment-simplebox-renderer:focus,
.ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container {
  cursor: default;
}

.gsok_a {
  background: url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==)no-repeat center!important;
  display: inline-block !important;
  height: 11px !important;
  line-height: 0 !important;
  width: 19px !important;
}

.sbdd_b {
  background: #fff !important;
  border: 1px solid #ccc !important;
  border-top-color: #d9d9d9 !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
  cursor: default !important;
}

.sbdd_c {
  display: none !important;
}

.sbsb_b {
  list-style-type: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.sbsb_c,
.sbsb_c td {
  line-height: 20px !important;
}

.sbsb_c {
  padding: 0 6px !important;
}

.sbsb_d td {
  background: #eee !important;
}

.sbdd_a {
  margin-left: -6px;
  top: 38.5px !important;
}

.sbsb_a {
  padding-top: 0 !important;
}

ytd-thumbnail-overlay-toggle-button-renderer[toggled]:first-child {
  background-image: linear-gradient(to bottom, #74a446 0, #4d7730 100%) !important;
}

ytd-thumbnail-overlay-toggle-button-renderer:first-child yt-icon {
  color: transparent !important;
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflEXP50f.png) 0 -184px !important;
  width: 13px;
  height: 13px;
}

ytd-thumbnail-overlay-toggle-button-renderer[toggled]:first-child yt-icon {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflEXP50f.png) 0 -1060px !important;
  width: 13px;
  height: 13px;
}

tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer {
  letter-spacing: 0 !important;
}

#masthead-container #search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox {
  fill: none;
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflKclzgY.webp) -594px -48px;
  width: 15px !important;
  height: 15px !important;
  bottom: 1px;
}

.yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  border-radius: 2px !important;
  border: 0;
  font-size: 11px !important;
  position: absolute;
  left: 18px;
  z-index: 100;
  background: #cb4437 !important;
  color: #fff !important;
  line-height: 15px;
  text-align: center;
  opacity: 1;
}

html:not([dark]) .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
}

ytd-notification-topbar-button-shape-renderer #button yt-icon {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflEXP50f.png) -31px -248px;
  background-size: auto;
  width: 30px;
  fill: none;
  opacity: 0.55;
}

ytd-notification-topbar-button-shape-renderer #button:hover yt-icon {
  opacity: 0.65;
}

ytd-topbar-menu-button-renderer:nth-last-of-type(3) a:not([href]) yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -125px -314px;
  fill: none;
  opacity: 0.8;
  height: 28px;
}

ytd-topbar-menu-button-renderer:nth-last-of-type(2) yt-icon {
  background: url(https://archive.ph/AYJLT/e608df1cce5d6cc696c0825d0a0d1b290a219dc5.png) -433px -245px;
  fill: none;
  opacity: 0.8;
}

html[dark] ytd-topbar-menu-button-renderer:nth-last-of-type(2) yt-icon,
html[dark] ytd-topbar-menu-button-renderer:nth-last-of-type(3) yt-icon {
  filter: invert(1);
}

ytd-topbar-menu-button-renderer:not(:nth-last-child(1)) {
  opacity: 0.67;
}

ytd-topbar-menu-button-renderer:not(:nth-last-child(1)):hover {
  opacity: 0.8;
}

ytd-topbar-menu-button-renderer:not(:nth-last-child(1)):active {
  opacity: 1;
}

#info ytd-toggle-button-renderer:first-child yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) 0 -867px;
  fill: transparent;
  width: 20px !important;
  height: 20px;
}

#info ytd-toggle-button-renderer:nth-child(2) yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -174px -804px;
  fill: transparent;
  width: 20px;
}

#info ytd-toggle-button-renderer:first-child .style-default-active yt-icon,
#info ytd-toggle-button-renderer:first-child:active yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -79px -278px;
}

#info ytd-toggle-button-renderer.style-default-active a #text,
#info ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer {
  color: #000;
  font-weight: 500;
}

#info ytd-toggle-button-renderer.style-default-active:first-child #text,
#info ytd-toggle-button-renderer:first-child:active yt-formatted-string {
  font-size: 11px !important;
  color: #167ac6 !important;
}

[dark] #info ytd-toggle-button-renderer yt-icon,
[dark] #info ytd-toggle-button-renderer.style-default-active:nth-child(2) yt-icon,
html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item #label {
  filter: invert(1);
}

[dark] #info ytd-toggle-button-renderer.style-default-active:first-child yt-icon,
[dark] #info ytd-toggle-button-renderer:first-child:active yt-icon {
  filter: invert(0);
}

#info #top-level-buttons-computed ytd-button-renderer yt-formatted-string,
#info ytd-button-renderer yt-icon-button,
#info ytd-toggle-button-renderer a yt-formatted-string,
#info ytd-toggle-button-renderer a yt-icon-button {
  opacity: 0.5;
}

#info #menu yt-icon.ytd-menu-renderer:hover,
#info #top-level-buttons-computed ytd-button-renderer:hover yt-formatted-string,
#info ytd-button-renderer:hover yt-icon-button,
#info ytd-toggle-button-renderer a:hover yt-formatted-string,
#info ytd-toggle-button-renderer a:hover yt-icon-button {
  opacity: 0.6;
}

#info ytd-toggle-button-renderer a yt-formatted-string.style-default-active,
#info ytd-toggle-button-renderer a yt-icon-button.style-default-active,
#info ytd-toggle-button-renderer a:active yt-formatted-string,
#info ytd-toggle-button-renderer a:active yt-icon-button,
#info #top-level-buttons-computed ytd-button-renderer:active yt-formatted-string{
  opacity: 1;
}

#info ytd-button-renderer[is-icon-button][style-action-button] yt-icon {
  fill: none;
  width: 20px;
  height: 20px;
}

#info ytd-button-renderer[is-icon-button][style-action-button]:nth-child(3) yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -267px -824px;
}
#info ytd-button-renderer[is-icon-button][style-action-button]:nth-last-child(1) yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -151px -725px;
}

#info ytd-button-renderer[is-icon-button][style-action-button]:nth-of-type(2) yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -151px -725px;
}

#top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(3) yt-icon,
#top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(4) yt-icon,
#top-level-buttons-computed .ytd-menu-renderer:nth-child(5):nth-last-child(3) yt-icon {
  fill: #000 !important;
  background: 0 0 !important;
}

#top-level-buttons-computed .ytd-menu-renderer:nth-child(5):nth-last-child(2) yt-icon,
#top-level-buttons-computed .ytd-menu-renderer:nth-child(6):nth-last-child(2) button:not([aria-label*=Report]) yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -151px -725px;
}

#top-level-buttons-computed .ytd-menu-renderer:nth-child(6):nth-last-child(2) button[aria-label*=Report] yt-icon {
  fill: #000 !important;
}

#info #menu .dropdown-trigger {
  margin-top: 5px;
  width: 60px;
  order: 2 !important;
}

#info #menu .dropdown-trigger[hidden] {
  display: inline-block !important;
}

#info #menu .dropdown-trigger yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -154px -860px;
  width: 20px;
  height: 20px;
  padding-left: 42px;
  box-sizing: border-box;
}

#info #menu .dropdown-trigger yt-icon::after,
ytd-button-renderer.style-default[is-icon-button] #text.ytd-button-renderer {
  content: "More";
  font-weight: 500;
  font-family: Roboto;
  color: #000 !important;
  font-size: 11px !important;
}

ytd-video-primary-info-renderer ytd-toggle-button-renderer.style-default-active[is-icon-button]:first-child,
ytd-video-primary-info-renderer ytd-toggle-button-renderer.style-text[is-icon-button]:first-child {
  flex: 1;
  max-width: min-content;
  margin-left: auto !important;
}

#info.ytd-video-primary-info-renderer,
#menu-container.ytd-video-primary-info-renderer,
#meta ytd-expander.ytd-video-secondary-info-renderer,
.top-level-buttons.ytd-menu-renderer {
  width: 100%;
}

#info.ytd-video-primary-info-renderer #flex {
  display: none;
}

#info #menu yt-icon.ytd-menu-renderer,
#info ytd-button-renderer {
  opacity: 0.5;
  left: -623px;
  position: unset;
  top: 64px;
}

#info ytd-button-renderer {
  opacity: 1;
}

#info #menu yt-icon.ytd-menu-renderer:active,
#info ytd-button-renderer:active yt-formatted-string,
#info ytd-button-renderer:active yt-icon-button {
  opacity: 1;
}

ytd-button-renderer[is-icon-button][style-action-button]:nth-of-type(1) {
  margin-right: 4px !important;
}

#menu-container.ytd-video-primary-info-renderer {
  z-index: 2 !important;
}

ytd-video-primary-info-renderer ytd-toggle-button-renderer.style-text[is-icon-button] {
  position: unset;
  order: 3 !important;
}

.ytd-subscription-notification-toggle-button-renderer yt-icon {
  fill: none;
}

html:not([dark]) ytd-pinned-comment-badge-renderer yt-icon {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAUUlEQVQoz2NgoAUQYXBAgjzYFbkzPGf4D4W3GUxwmbUfrmg+bgupp+g+XNF+7Ao4GMrhSkAwmoEFU9F8FCUgWI/bynqGeMJBOhgVSeCKWmoAADLDMeolZoHfAAAAAElFTkSuQmCC);
  fill: none;
  background-size: cover;
  opacity: 0.8;
}

#guide[opened] #header.ytd-app,
#scrim.tp-yt-app-drawer {
  display: none;
}

tp-yt-app-drawer,
tp-yt-app-drawer[persistent] {
  width: 230px !important;
}

#contentContainer.tp-yt-app-drawer[style="transition-duration: 200ms;"][opened] {
  width: 230px;
  background: 0 0 !important;
  transition-duration: 0ms !important;
  padding-top: 0;
  padding-bottom: 0;
}

tp-yt-app-drawer#guide[style="transition-duration: 200ms; touch-action: pan-y;"] {
  top: 0;
  bottom: 0;
  margin-top: 50px;
  transition-duration: 0ms !important;
}

#primary ytd-merch-shelf-renderer,
.style-scope.ytd-page-manager[fullscreen],
.tp-yt-app-drawer[style="transition-duration: 200ms;"][opened] {
  margin-top: 0;
}

#guide-spacer.ytd-app {
  margin-top: 51px;
}

.tp-yt-app-drawer[style="transition-duration: 200ms;"][opened] #guide-wrapper {
  box-shadow: 5px 10px 15px 5px rgb(0 0 0/10%);
}

.lock-scrollbar {
  overflow: initial !important;
  position: static !important;
}

tp-yt-paper-item.ytd-compact-link-renderer::before,
tp-yt-paper-item::before {
  content: none !important;
}

#manage-account.ytd-active-account-header-renderer {
  background-color: #999;
  border-bottom: none;
  color: #fff;
  padding: 6px 15px 7px;
  text-transform: uppercase;
  order: -1;
  margin: 0 !important;
  justify-content: initial;
  cursor: pointer;
}

#channel-container.ytd-active-account-header-renderer {
  width: 100% !important;
  justify-content: initial;
  margin-top: -6px !important;
}

ytd-active-account-header-renderer {
  padding: 0 !important;
  border: 0 !important;
  min-height: 75px !important;
}

#manage-account.ytd-active-account-header-renderer a {
  all: unset;
  font: bold 11px roboto;
}

#manage-account.ytd-active-account-header-renderer a:hover,
.super-title.ytd-video-primary-info-renderer a.yt-simple-endpoint.yt-formatted-string:hover {
  text-decoration: underline;
}

#avatar.ytd-active-account-header-renderer {
  position: absolute;
  width: 64px !important;
  height: 64px !important;
  margin: 38px 0 0 15px !important;
}

#avatar.ytd-active-account-header-renderer img {
  margin: 0 !important;
  width: 64px !important;
  height: 64px !important;
}

#account-name.ytd-active-account-header-renderer,
#email.ytd-active-account-header-renderer {
  font: 500 13px roboto !important;
  margin-left: 90px;
}

#account-name.ytd-active-account-header-renderer {
  margin-top: 12px;
}

yt-formatted-string#email:not(.use-shadow):empty {
  display: block !important;
  min-height: 16px !important;
}

#playlist ytd-thumbnail-overlay-time-status-renderer,
[menu-style=multi-page-menu-style-type-system] #content-icon,
[menu-style=multi-page-menu-style-type-system] .content-icon,
ytd-thumbnail-overlay-resume-playback-renderer {
  display: none !important;
}

[menu-style=multi-page-menu-style-type-system] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer {
  padding: 0 15px;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:first-child {
  background: 0 0 !important;
  max-width: 80px;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:first-child #label {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  font: 500 9px roboto;
  line-height: 9px;
  padding: 5px 0;
  width: 64px;
  margin-bottom: 6px;
  text-align: center;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(4) {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) {
  position: absolute;
  top: 78px;
  left: 90px;
}

#container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) {
  position: absolute;
  top: 78px;
  left: 100px;
  margin-left: 95px !important;
}

ytd-multi-page-menu-renderer[menu-style=multi-page-menu-style-type-account] #spinner.ytd-multi-page-menu-renderer {
  height: 400px !important;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item {
  border: 1px solid #d3d3d3;
  background: #f8f8f8;
  color: #333;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
  padding: 0 10px;
  height: 22px !important;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item {
  border: 1px solid #d3d3d3;
  background: #f8f8f8;
  color: #333;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
  height: 22px !important;
  padding: 0 4px;
}

html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item,
html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item,
html[dark] [menu-style=multi-page-menu-style-type-system] yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer,
html[dark] [menu-style=multi-page-menu-style-type-system] yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer {
  border-color: #444;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer:hover,
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item:hover,
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer:hover,
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item:hover {
  border-color: #c6c6c6;
  background: #f0f0f0;
  box-shadow: 0 1px 0 rgb(0 0 0/10%);
}

html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item,
html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item,
html[dark] [menu-style=multi-page-menu-style-type-system] #submenu ytd-compact-link-renderer.yt-multi-page-menu-section-renderer {
  background: #292929 !important;
  color: #eee;
}

html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item:hover,
html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item:hover {
  border-color: rgba(255, 255, 255, 0.1);
  background: #2c2c2c;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item #label {
  font: normal 11px Roboto;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item #label {
  font: normal 0 roboto;
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflNlthLq.webp) -626px 0;
  background-size: auto;
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item #label:hover {
  opacity: 1;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item #primary-text-container,
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item #primary-text-container,
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4) tp-yt-paper-item #primary-text-container {
  display: inline-block;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(5),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(6),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(7),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(8),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(3) {
  display: none;
}

#sections.ytd-multi-page-menu-renderer > .ytd-multi-page-menu-renderer:not(:last-child) {
  border: 0 !important;
  padding-bottom: 0 !important;
}

#sections.ytd-multi-page-menu-renderer > .ytd-multi-page-menu-renderer:nth-child(2) {
  padding-top: 0;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

[menu-style=multi-page-menu-style-type-system] #container #sections {
  padding-bottom: 48px;
  background: #f5f5f5;
}

html[dark] [menu-style=multi-page-menu-style-type-system] #container #sections {
  background: #292929;
}

[menu-style=multi-page-menu-style-type-system] #container #sections yt-multi-page-menu-section-renderer {
  background: #fff;
}

html[dark] [menu-style=multi-page-menu-style-type-system] #container #sections yt-multi-page-menu-section-renderer {
  background: #212121;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) {
  position: absolute;
  bottom: 10px;
  right: 15px;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) {
  position: absolute;
  bottom: 10px;
  left: 15px;
}

[menu-style=multi-page-menu-style-type-system] yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer,
[menu-style=multi-page-menu-style-type-system] yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer {
  background: #f8f8f8;
  height: 28px !important;
  border: solid 1px #d3d3d3;
  padding: 0 10px;
  outline: 0;
  font-weight: 500;
  font-size: 11px;
  text-decoration: none;
  white-space: nowrap;
  word-wrap: normal;
  line-height: normal;
  vertical-align: middle;
  cursor: pointer;
  *overflow: visible;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer #label,
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer #label {
  color: #333;
  font: 500 11px Roboto;
}

html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer:hover,
html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer:hover {
  border-color: #333;
}

[menu-style=multi-page-menu-style-type-system] #submenu ytd-compact-link-renderer.yt-multi-page-menu-section-renderer {
  position: static !important;
  background: #f5f5f5 !important;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 28px;
}

[menu-style=multi-page-menu-style-type-system] #submenu yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:first-child {
  border: 0 !important;
}

[menu-style=multi-page-menu-style-type-system] #submenu tp-yt-paper-item {
  border: 0 !important;
  padding: 0 15px;
  box-shadow: none !important;
  border-radius: 0;
  margin: 0;
  height: 28px !important;
}

[menu-style=multi-page-menu-style-type-system] #submenu yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) tp-yt-paper-item {
  margin-left: 5px;
  height: 28px !important;
}

[menu-style=multi-page-menu-style-type-system] #submenu #label {
  font: 500 13px roboto !important;
  margin: 0 !important;
  line-height: 28px;
}

[menu-style=multi-page-menu-style-type-system] #submenu yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:first-child #label {
  all: unset;
  font: normal 13px roboto !important;
  padding-top: 10px;
  padding-bottom: 10px;
}

[menu-style=multi-page-menu-style-type-system] #submenu #sections {
  padding-bottom: 0;
  border: 0;
}

[menu-style=multi-page-menu-style-type-system] #submenu #sections.ytd-multi-page-menu-renderer > .ytd-multi-page-menu-renderer {
  padding: 0;
}

[menu-style=multi-page-menu-style-type-system] #submenu ytd-simple-menu-header-renderer {
  border: 0;
  min-height: 0;
  background-color: #999;
  border-bottom: none;
  color: #fff;
  order: -1;
  margin: 0;
  justify-content: initial;
}

[menu-style=multi-page-menu-style-type-system] #submenu ytd-simple-menu-header-renderer yt-formatted-string {
  text-transform: uppercase;
  font: bold 11px roboto;
  line-height: 24px;
}

[menu-style=multi-page-menu-style-type-system] #submenu ytd-simple-menu-header-renderer ytd-button-renderer #button.ytd-button-renderer {
  padding: 0;
  height: 20px;
  width: 20px;
  color: #fff;
}

h2.ytd-simple-menu-header-renderer {
  height: 26px;
}

ytd-toggle-theme-compact-link-renderer {
  height: 24px !important;
  min-height: 0 !important;
  padding: 0 15px !important;
}

.ytd-account-item-section-renderer .content-icon {
  display: inline-block;
}

.ytd-account-item-section-renderer ytd-account-item-renderer[enable-ring-for-active-account] yt-img-shadow.ytd-account-item-renderer {
  border-radius: 0;
  border: 0;
  width: 36px;
  height: 36px;
}

.ytd-account-item-section-renderer img {
  height: 36px;
  width: 36px;
}

.ytd-account-item-section-renderer #contentIcon {
  height: 36px;
  width: 36px;
  padding-right: 10px;
}

tp-yt-paper-icon-item.ytd-account-item-renderer {
  height: 50px;
  min-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

tp-yt-paper-icon-item.ytd-account-item-renderer::before,
ytd-playlist-sidebar-primary-info-renderer[responsive] ytd-playlist-thumbnail.ytd-playlist-sidebar-primary-info-renderer::before {
  content: none !important;
}

[menu-style=multi-page-menu-style-type-system] #submenu #footer tp-yt-paper-item {
  background: #f8f8f8;
}

[menu-style=multi-page-menu-style-type-system] #submenu #footer ytd-compact-link-renderer.yt-multi-page-menu-section-renderer,
ytd-unified-share-panel-renderer {
  max-width: none !important;
}

ytd-google-account-header-renderer.ytd-account-section-list-renderer {
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

#container.ytd-google-account-header-renderer,
html[dark] [page-subtype=playlist] ytd-playlist-video-renderer {
  border-bottom: none;
}

#footer.ytd-multi-page-menu-renderer > .ytd-multi-page-menu-renderer {
  padding-top: 0;
}

#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer,
tp-yt-paper-item {
  min-height: 20px !important;
  height: auto !important;
}

[menu-style=multi-page-menu-style-type-system] #header.ytd-multi-page-menu-renderer::after {
  content: "";
  display: inline-block;
  border: 12px solid transparent;
  border-top-width: 0 !important;
  border-bottom-color: #999;
  position: absolute;
  top: -8px;
  right: 18px;
}

#container.ytd-playlist-panel-renderer {
  position: relative !important;
  right: 24px !important;
  border: 0 !important;
}

.header.ytd-playlist-panel-renderer {
  background-color: #1a1a1a !important;
}

ytd-playlist-panel-video-renderer:hover:not(.dragging) {
  background-color: #525252 !important;
}

#expand-button.ytd-playlist-panel-renderer {
  display: none !important;
}

.title.ytd-playlist-panel-renderer a.yt-formatted-string {
  color: #fff !important;
  display: inline !important;
  font-size: 15px !important;
  font-weight: normal !important;
}

.title.ytd-playlist-panel-renderer a.yt-formatted-string:hover,
.ytd-watch-next-secondary-results-renderer [class*=ytd-compact-]:hover ytd-thumbnail-overlay-time-status-renderer span:not(.ytd-badge-supported-renderer),
yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover {
  color: #fff !important;
}

.index-message-wrapper.ytd-playlist-panel-renderer,
ytd-playlist-panel-renderer[collapsible] .publisher.ytd-playlist-panel-renderer {
  font-size: 11px !important;
  color: #b8b8b8 !important;
}

.publisher.ytd-playlist-panel-renderer .yt-simple-endpoint.style-scope.yt-formatted-string {
  color: #b8b8b8 !important;
}

ytd-playlist-panel-renderer[collapsible] #publisher-container.ytd-playlist-panel-renderer {
  margin-top: 0 !important;
}

#header-top-row.ytd-playlist-panel-renderer {
  border-bottom: 1px solid #3a3a3a !important;
  padding-bottom: 7px !important;
}

#secondary .top-level-buttons.ytd-menu-renderer button.yt-icon-button {
  width: 24px !important;
  height: 24px !important;
}

#top-level-buttons-computed.ytd-menu-renderer:not(:empty) + #button.ytd-menu-renderer,
.ytd-menu-renderer[button-renderer] + template.ytd-menu-renderer + #button.ytd-menu-renderer,
ytd-menu-renderer:not([condensed]) .ytd-menu-renderer[button-renderer] + .ytd-menu-renderer[button-renderer] {
  margin-left: 0 !important;
}

.index-message-wrapper.ytd-playlist-panel-renderer::after {
  content: " videos" !important;
}

#save-button.ytd-playlist-panel-renderer button.yt-icon-button {
  color: transparent !important;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflEoWid_.png) -151px -268px;
  background-size: auto;
  width: 24px;
  height: 24px;
  opacity: 0.5;
}

.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:first-child .yt-icon-button {
  color: transparent !important;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflEoWid_.png) -41px -559px;
  background-size: auto;
  width: 24px;
  height: 24px;
  opacity: 0.5;
}

.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:last-child .yt-icon-button {
  color: transparent !important;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflEoWid_.png) -171px -52px;
  background-size: auto;
  width: 24px;
  height: 24px;
  opacity: 0.5;
}

#save-button.ytd-playlist-panel-renderer button.yt-icon-button:hover,
.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:hover .yt-icon-button {
  opacity: 0.6;
}

#save-button.ytd-playlist-panel-renderer button.yt-icon-button:active,
.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer.style-default-active .yt-icon-button#button,
.ytd-playlist-panel-renderer .top-level-buttons ytd-toggle-button-renderer.ytd-menu-renderer:active .yt-icon-button {
  opacity: 0.8;
}

ytd-app #save-button {
  position: relative;
  top: -47px !important;
}

h4.ytd-playlist-panel-video-renderer #video-title {
  text-decoration: none !important;
}

#playlist-action-menu ytd-toggle-button-renderer.style-default-active[is-icon-button] {
  order: -1 !important;
}

ytd-app #playlist-actions #save-button {
  position: static !important;
  top: 0 !important;
}
ytd-grid-video-renderer[three-dot-rework] ytd-menu-renderer.ytd-grid-video-renderer {
  display: none !important;
}
#menu.ytd-playlist-panel-video-renderer {
  max-width:14px;
}
#playlist #thumbnail-container.ytd-playlist-panel-video-renderer,
#playlist img.yt-img-shadow,
#playlist ytd-thumbnail #thumbnail.ytd-thumbnail,
#playlist ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {
  width: 72px !important;
  height: 45px !important;
}

ytd-movie-renderer[use-prominent-thumbs] .thumbnail-container.ytd-movie-renderer {
  min-width: 156px !important;
  width: auto;
  flex: 0 !important;
}

#video-title.ytd-playlist-panel-video-renderer {
  color: #cacaca !important;
  font-size: 13px !important;
  font-weight: normal !important;
  line-height: normal !important;
  margin-bottom: 0 !important;
}

#byline.ytd-playlist-panel-video-renderer,
ytd-playlist-panel-video-renderer[watch-color-update] #byline.ytd-playlist-panel-video-renderer {
  color: #767676 !important;
  font-size: 11px !important;
}

.playlist-items.ytd-playlist-panel-renderer {
  background-color: #222 !important;
  padding: 0 !important;
}

ytd-playlist-panel-video-renderer[selected][watch-color-update] {
  background: #3a3a3a !important;
}

ytd-playlist-panel-video-renderer {
  padding: 10px 10px 10px 0 !important;
  height: 37px !important;
}

#index-container.ytd-playlist-panel-video-renderer,
#index.ytd-playlist-panel-video-renderer,
#reorder.ytd-playlist-panel-video-renderer {
  font-size: 10px !important;
  color: #b8b8b8 !important;
  margin: 0 2px !important;
  left: -1px !important;
  position: relative;
  top: -1px !important;
}

ytd-playlist-panel-video-renderer[selected] #index.ytd-playlist-panel-video-renderer {
  color: #c03636 !important;
}

#avatar.ytd-c4-tabbed-header-renderer,
#avatar.ytd-c4-tabbed-header-renderer img.yt-img-shadow {
  top: -96px !important;
  position: relative !important;
  overflow: visible !important;
  height: 100px !important;
  width: 100px !important;
}

@media (max-width: 1599px) {
  #avatar.ytd-c4-tabbed-header-renderer,
  #avatar.ytd-c4-tabbed-header-renderer img.yt-img-shadow {
    top: -79px !important;
  }

  ytd-app #banner-top-options,
  ytd-app #header.ytd-browse {
    width: 1056px !important;
  }

  ytd-app #subscriber-count.ytd-c4-tabbed-header-renderer {
    left: 975px !important;
  }

  ytd-app ytd-button-renderer.style-primary:nth-of-type(2) {
    left: -680px !important;
  }

  ytd-app #subscriber-count.ytd-c4-tabbed-header-renderer::before {
    left: -1000px !important;
  }
}

#meta.ytd-c4-tabbed-header-renderer {
  position: relative;
  left: -120px !important;
}

#buttons.ytd-c4-tabbed-header-renderer {
  position: relative;
  left: -39px !important;
}

.style-scope.ytd-page-manager {
  margin-top: 11px;
}

#primary-links.ytd-c4-tabbed-header-renderer yt-formatted-string.ytd-c4-tabbed-header-renderer {
  height: 16px !important;
  color: #fff !important;
  font-size: 11px !important;
  font-family: "YouTube Noto", Roboto, arial, sans-serif !important;
  line-height: 15.8px !important;
  letter-spacing: 0 !important;
}

#primary-links.ytd-c4-tabbed-header-renderer a.yt-simple-endpoint.ytd-c4-tabbed-header-renderer {
  float: right !important;
  padding: 10px !important;
}

#secondary-links.ytd-c4-tabbed-header-renderer {
  float: right !important;
  padding: 10px 0!important;
  height: 16px !important;
  margin-left: 2px !important;
}
ytd-app #secondary-links.ytd-c4-tabbed-header-renderer a.yt-simple-endpoint.ytd-c4-tabbed-header-renderer {
   padding:0
}
ytd-app #secondary-links.ytd-c4-tabbed-header-renderer a.ytd-c4-tabbed-header-renderer:first-child {
   padding-left:10px;
}
ytd-app #secondary-links.ytd-c4-tabbed-header-renderer a.ytd-c4-tabbed-header-renderer:nth-last-child(2) {
   padding-right:10px;
}

.ytp-larger-tap-buttons .ytp-chrome-controls .ytp-button.ytp-mute-button {
  padding: 0 !important;
}

.ytp-button[data-tooltip-target-id='ytp-autonav-toggle-button'] {
  display: none !important;
}

ytd-browse[page-subtype="channels"] #alerts {
  order:-1
}
#primary-links.ytd-c4-tabbed-header-renderer,
#secondary-links.ytd-c4-tabbed-header-renderer {
  background-color: rgba(102, 102, 102, 0.5) !important;
}

#links-holder.ytd-c4-tabbed-header-renderer {
  top: -36px !important;
}

#primary-links.ytd-c4-tabbed-header-renderer:hover yt-formatted-string.ytd-c4-tabbed-header-renderer {
  text-decoration: underline !important;
}

@media (min-width: 1500px) {
  #header.ytd-browse {
    width: 1260px !important;
  }
}

tp-yt-app-header-layout #text.ytd-channel-name {
  color: #333 !important;
  font-size: 20px !important;
  font-weight: 500 !important;
  text-shadow: none !important;
}

html[dark] tp-yt-app-header-layout #text.ytd-channel-name {
  color: #fff !important;
}

#text.ytd-channel-name:hover {
  text-decoration: underline !important;
  cursor: pointer !important;
}

#channel-header-container.ytd-c4-tabbed-header-renderer {
  height: 33px !important;
}

#channel-name.ytd-c4-tabbed-header-renderer,
#meta.ytd-c4-tabbed-header-renderer {
  overflow: visible !important;
}

#subscriber-count.ytd-c4-tabbed-header-renderer {
  position: absolute;
  font-size: 11px !important;
  letter-spacing: 0 !important;
  color: #737373;
  height: 22px !important;
  line-height: 24px !important;
  border: 1px solid #ccc;
  padding: 0 6px 0 11px !important;
  border-radius: 2px !important;
  text-align: center !important;
  left: 1180px !important;
  top: 3px !important;
  max-width: 28px;
  overflow: hidden;
}

#tabsContent.tp-yt-paper-tabs > :not(#selectionBar) {
  height: 29px !important;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin-left: 20px;
  text-transform: none;
}

#tabsContainer.tp-yt-paper-tabs,
#tabsContent.scrollable.tp-yt-paper-tabs,
ytd-c4-tabbed-header-renderer[guide-persistent-and-visible] tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer {
  height: 49px !important;
  margin-left: 0 !important;
}

#tabsContent.scrollable.tp-yt-paper-tabs {
  padding-top: 3px;
}

html[dark] #subscriber-count.ytd-c4-tabbed-header-renderer {
  border-color: #333 !important;
}

#sponsor-button.ytd-c4-tabbed-header-renderer,
.underline.style-scope.tp-yt-paper-input-container,
form.ytd-expandable-tab-renderer yt-icon-button.ytd-expandable-tab-renderer {
  display: none !important;
}

#inner-header-container.ytd-c4-tabbed-header-renderer {
  top: 8px !important;
  position: relative;
}

#tabsContent.tp-yt-paper-tabs:not(.iron-selected) {
  border-bottom: 3px solid transparent;
}

tp-yt-app-header-layout .badge-style-type-verified.ytd-badge-supported-renderer {
  top: -2px !important;
  position: relative;
}

tp-yt-paper-tab.iron-selected.ytd-c4-tabbed-header-renderer,
tp-yt-paper-tab.ytd-c4-tabbed-header-renderer:hover {
  border: 0 !important;
  box-shadow: #cc181e 0 -3px inset;
  height: 30px !important;
}

.badge-style-type-verified.ytd-badge-supported-renderer {
  padding-left: 0 !important;
}

#paper-input-label-1 {
  color: #666;
}

tp-yt-paper-input-container {
  top: -1px !important;
  position: relative;
}

.grid-subheader.ytd-shelf-renderer {
  margin-top: 0 !important;
}

#title.ytd-shelf-renderer {
  font-size: 15px !important;
  height: 29px !important;
}

#contents.ytd-shelf-renderer {
  margin-top: 10px !important;
}

[page-subtype=channels] ytd-thumbnail.ytd-grid-video-renderer {
  height: 110px !important;
  width: 196px !important;
  margin-right: 10px !important;
}

#scroll-container.yt-horizontal-list-renderer #thumbnail.ytd-thumbnail {
  overflow: visible !important;
  width: 196px !important;
}

#items.yt-horizontal-list-renderer > .yt-horizontal-list-renderer {
  padding-right: 0 !important;
}

ytd-grid-video-renderer .top-level-buttons.ytd-menu-renderer {
  display: none !important;
}

ytd-grid-video-renderer {
  width: 196px !important;
  margin-right: 10px !important;
}

#avatar.ytd-shelf-renderer,
#avatar.ytd-shelf-renderer img.yt-img-shadow {
  width: 20px !important;
  height: 20px !important;
  border-radius: initial !important;
}

yt-horizontal-list-renderer {
  height: 193px !important;
}

html .arrow.yt-horizontal-list-renderer {
  box-shadow: none;
  right: -12px !important;
  position: relative;
  border-radius: initial !important;
  box-shadow:none
}

.style-scope.ytd-item-section-renderer #button.size-default.style-default.ytd-button-renderer.style-scope {
  color: transparent;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -112px -42px !important;
  width: 7px !important;
  height: 10px !important;
  padding: 0 !important;
  opacity: 0.5 !important;
}

html[dark] #button.size-default.style-default.ytd-button-renderer.style-scope {
  filter: invert(1);
}

html[dark] ytd-button-renderer.ytd-searchbox yt-icon-button {
  filter: none !important;
}

.arrow.yt-horizontal-list-renderer,
yt-horizontal-list-renderer .style-scope.ytd-item-section-renderer a.yt-simple-endpoint.ytd-button-renderer {
  width: 7px !important;
  height: 10px !important;
}

yt-horizontal-list-renderer:hover .arrow.yt-horizontal-list-renderer {
  width: 40px !important;
  height: 60px !important;
  border: 1px solid #e3e3e3;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  left: 0px !important;
  opacity: 1 !important;
}

html[dark] ytd-item-section-renderer:hover .arrow.yt-horizontal-list-renderer {
  border: 1px solid #51515151 !important;
}

div#dismissible:hover ytd-button-renderer.style-text[is-paper-button] #button.ytd-button-renderer,
ytd-item-section-renderer:hover #button.size-default.style-default.ytd-button-renderer.style-scope {
  opacity: 1 !important;
}

.style-scope.ytd-item-section-renderer #left-arrow.yt-horizontal-list-renderer #button.size-default.style-default.ytd-button-renderer.style-scope {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -20px -918px !important;
}

#left-arrow.yt-horizontal-list-renderer .arrow.yt-horizontal-list-renderer {
  left: -7px !important;
}

ytd-item-section-renderer:hover #left-arrow.yt-horizontal-list-renderer .arrow.yt-horizontal-list-renderer {
  left: 4px !important;
}

#video-title.yt-simple-endpoint.ytd-grid-video-renderer {
  line-height: normal !important;
}

ytd-grid-video-renderer:not([rich-meta]) #metadata-line.ytd-grid-video-renderer {
  font-size: 11px !important;
  line-height: normal !important;
}

ytd-grid-video-renderer yt-formatted-string[ellipsis-truncate] a.yt-formatted-string {
  font-size: 11px !important;
  line-height: normal !important;
}

#metadata-container {
  margin-top: 3px !important;
}

#items.yt-horizontal-list-renderer {
  transition-duration: 0.3s !important;
  transition-timing-function: ease-in-out !important;
}

ytd-badge-supported-renderer.ytd-channel-name {
  margin-left: 3px !important;
}

#scroll-container.yt-horizontal-list-renderer ytd-thumbnail-overlay-time-status-renderer {
  margin-top: 0 !important;
  margin-right: 2px !important;
  padding: 0 4px;
  font-weight: 500;
  font-size: 11px;
  background-color: #000;
  color: #fff !important;
  height: 14px;
  line-height: 14px;
  opacity: 0.75;
  filter: alpha(opacity=75);
  vertical-align: top;
  display: inline-block;
  border-radius: 0 !important;
  top: 94px !important;
  z-index: 1 !important;
}

#hover-overlays #label-container,
#progress.ytd-thumbnail-overlay-resume-playback-renderer,
.style-scope.ytd-item-section-renderer tp-yt-paper-button.ytd-subscribe-button-renderer::before,
ytd-badge-supported-renderer.ytd-grid-video-renderer,
ytd-grid-video-renderer:hover ytd-thumbnail-overlay-time-status-renderer {
  display: none !important;
}

ytd-thumbnail-overlay-resume-playback-renderer {
  height: 110px;
  background: #fff !important;
  opacity: 0.4;
  transition: ease-in;
  transition-duration: 0.2s;
}

ytd-thumbnail-overlay-resume-playback-renderer:hover {
  height: 110px;
  background: #fff !important;
  opacity: 0;
}

ytd-playlist-thumbnail.ytd-grid-playlist-renderer {
  width: 196px !important;
  height: 110px !important;
}

ytd-grid-playlist-renderer {
  width: 200px !important;
}

html:not([dark]) #video-title.ytd-grid-playlist-renderer {
  font-size: 13px !important;
  line-height: normal !important;
  color: #167ac6 !important;
}

#video-title.ytd-grid-playlist-renderer {
  font-size: 13px !important;
  line-height: normal !important;
}

#video-title.ytd-grid-playlist-renderer:hover {
  text-decoration: underline !important;
}

#secondary-links.ytd-c4-tabbed-header-renderer:not(first-child) a.yt-simple-endpoint.ytd-c4-tabbed-header-renderer:not(:first-child) {
  margin-left: 5px !important;
}

ytd-thumbnail-overlay-hover-text-renderer {
  background: rgba(0, 0, 0, 0.7) !important;
}

.style-scope.ytd-thumbnail-overlay-hover-text-renderer {
  text-transform: uppercase !important;
  font-size: 13px !important;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6) !important;
  font-weight: normal !important;
}

ytd-thumbnail-overlay-hover-text-renderer.ytd-playlist-thumbnail yt-icon {
  color: transparent !important;
  margin-right: 6px !important;
  vertical-align: middle;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflHFLZLR.webp) -86px -122px;
  background-size: auto;
  width: 9px;
  height: 12px;
}

ytd-thumbnail-overlay-side-panel-renderer {
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;
  height: 100% !important;
  width: 43.75% !important;
  background: rgba(0, 0, 0, 0.8) !important;
}

yt-icon.ytd-thumbnail-overlay-side-panel-renderer {
  color: transparent !important;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflHFLZLR.webp) -217px -456px;
  background-size: auto;
  width: 24px;
  height: 24px;
}

yt-formatted-string.ytd-thumbnail-overlay-side-panel-renderer {
  color: #cfcfcf !important;
  display: block;
  margin: 0 0.75em;
  font-size: 18px;
  line-height: 22px;
  word-break: break-word;
  white-space: normal;
  text-transform: uppercase;
  top: -10px !important;
  position: relative;
  width: 50px !important;
}

yt-formatted-string.ytd-thumbnail-overlay-side-panel-renderer::before {
  content: "VIDEOS";
  position: absolute !important;
  font-size: 10px !important;
  width: 35px !important;
  top: 17px !important;
  left: 7px !important;
}

ytd-app #play-button ytd-button-renderer[is-paper-button] yt-icon.ytd-button-renderer {
  fill: transparent !important;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfliTgLqv.webp) -113px -474px !important;
  width: 16px !important;
  height: 16px !important;
  opacity: 0.5 !important;
  position: relative;
  left: -26px !important;
  top: -1px !important;
}

#play-button ytd-button-renderer yt-formatted-string.ytd-button-renderer {
  overflow: visible !important;
  color: #333 !important;
  font-size: 11px !important;
  letter-spacing: 0 !important;
  position: relative;
  top: -15px !important;
  left: -16px !important;
}

#title-container.ytd-shelf-renderer ytd-button-renderer #button.ytd-button-renderer {
  border: 1px solid #d3d3d3 !important;
  background: #f8f8f8 !important;
  padding: 0 38px !important;
  height: 18px !important;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  width: 0 !important;
  display: block;
  position: relative;
  top: 0 !important;
  left: 3px !important;
  opacity: 0 !important;
}

html[dark] #title-container.ytd-shelf-renderer ytd-button-renderer #button.ytd-button-renderer {
  background: 0 0 !important;
  border: 1px solid #51515151 !important;
}

ytd-channel-video-player-renderer {
  padding: 18px 0 24px !important;
}

#player-container.ytd-channel-video-player-renderer {
  width: 520px !important;
  height: 292.5px !important;
  margin-right: 12px !important;
}

.video-stream.html5-main-video {
  width: 520px;
  height: 292.5px;
}

.ytp-chrome-bottom {
  width: 500px;
}

ytd-app .ytp-larger-tap-buttons .ytp-chrome-controls .ytp-button,
ytd-app .ytp-larger-tap-buttons .ytp-replay-button {
  padding: 0 !important;
  width: 36px;
}

ytd-app .ytp-chrome-controls .ytp-play-button {
  width: 46px !important;
}

.ytp-big-mode .ytp-chrome-bottom,
.ytp-big-mode .ytp-chrome-controls {
  height: 54px !important;
  line-height: 54px !important;
}

.ytp-big-mode .ytp-progress-bar-container {
  bottom: 52.5px !important;
  height: 8px !important;
}

.ytp-big-mode .ytp-chrome-controls .ytp-button,
.ytp-big-mode .ytp-chrome-top .ytp-button {
  height: 54px !important;
  width: 54px !important;
}

.ytp-big-mode .ytp-chrome-controls .ytp-play-button {
  height: 54px !important;
  width: 69px !important;
  padding: 0 !important;
}

.ytp-big-mode .ytp-time-display.notranslate span {
  top: 0 !important;
  position: relative;
}

.ytp-watch-later-icon {
  display: none !important;
}

html:not([dark]) .content.ytd-channel-video-player-renderer {
  font-size: 13px !important;
  color: #555 !important;
  max-height: 13em !important;
}

.more-button.ytd-channel-video-player-renderer {
  font-weight: normal !important;
  color: #167ac6 !important;
  font-size: 13px !important;
}

#description.ytd-channel-video-player-renderer {
  width: 494px !important;
}

@media (min-width: 1600px) {
  .banner-visible-area.ytd-c4-tabbed-header-renderer,
  ytd-c4-tabbed-header-renderer .banner-visible-area.ytd-c4-tabbed-header-renderer,
  ytd-c4-tabbed-header-renderer[guide-persistent-and-visible] .banner-visible-area.ytd-c4-tabbed-header-renderer, #banner-editor {
    height: 209px !important;
  }
}

@media (max-width: 1599px) {
  ytd-c4-tabbed-header-renderer[has-channel-art] .banner-visible-area.ytd-c4-tabbed-header-renderer,
  ytd-c4-tabbed-header-renderer[has-channel-art][guide-persistent-and-visible] .banner-visible-area.ytd-c4-tabbed-header-renderer, #banner-editor {
    height: 175px !important;
  }
}


ytd-app .ytd-thumbnail[top-right-overlay] ~ .ytd-thumbnail[top-right-overlay] yt-icon {
  width: 20px !important;
  height: 20px !important;
  color: #fff !important;
  filter: invert(1) !important;
}

html[dark] ytd-app .ytd-thumbnail[top-right-overlay] ~ .ytd-thumbnail[top-right-overlay] yt-icon {
  filter: invert(0) !important;
}

ytd-item-section-renderer:nth-of-type(1) {
  border-bottom: 1px solid #e5e5e5 !important;
}

html[dark] ytd-item-section-renderer:nth-of-type(1) {
  border-bottom: 1px solid #51515151 !important;
}

html[dark] ytd-thumbnail-overlay-toggle-button-renderer {
  border-color: #51515151 !important;
  background: #212121 !important;
}

html[dark] #notification-preference-button button.yt-icon-button,
html[dark] ytd-thumbnail-overlay-toggle-button-renderer yt-icon {
  filter: invert(1);
}

.banner-visible-area.ytd-c4-tabbed-header-renderer {
  height: 175px !important;
}

#banner-editor {
  display: block;
  height: 209.199px;
  position: relative;
}

#subtitle.ytd-shelf-renderer {
  line-height: normal !important;
  font-size: 12px !important;
}

[page-subtype=playlist] ytd-section-list-renderer,
ytd-thumbnail #thumbnail.ytd-thumbnail {
  padding: 0 !important;
}

ytd-video-renderer:not([use-prominent-thumbs]) ytd-thumbnail.ytd-video-renderer {
  height: 110px !important;
  width: 196px !important;
  margin-right: 10px !important;
}

.text-wrapper.ytd-video-renderer {
  position: relative !important;
  top: -5px !important;
}

h3.ytd-grid-playlist-renderer {
  margin: 5px 0 1px !important;
}

#avatar.ytd-channel-renderer,
#avatar.ytd-channel-renderer img.yt-img-shadow,
yt-img-shadow.ytd-channel-renderer,
ytd-channel-renderer[use-prominent-thumbs] #avatar-section.ytd-channel-renderer,
ytd-channel-renderer[use-prominent-thumbs] #avatar-section.ytd-channel-renderer .channel-link.ytd-channel-renderer {
  height: 110px !important;
  width: 110px !important;
}

ytd-search ytd-channel-renderer[use-prominent-thumbs] #avatar-section.ytd-channel-renderer {
  max-width: 120px;
  min-width: 110px;
}

ytd-channel-renderer[use-prominent-thumbs] #info-section.ytd-channel-renderer {
  position: relative;
  left: -20px !important;
  top: -15px !important;
}
#metadata.ytd-channel-renderer,
ytd-backstage-post-thread-renderer {
  margin-bottom: 0 !important;
}
ytd-section-list-renderer:not([hide-bottom-separator]):not([page-subtype=history]):not([page-subtype=memberships-and-purchases]):not([page-subtype=ypc-offers]) #contents.ytd-section-list-renderer > .ytd-section-list-renderer:not(:last-child):not(ytd-page-introduction-renderer):not([item-dismissed]).ytd-section-list-renderer:not([has-destination-shelf-renderer]).ytd-section-list-renderer:not(ytd-minor-moment-header-renderer) {
  border-bottom: 1px solid var(--yt-spec-10-percent-layer) !important;
}
#channel-info.ytd-grid-channel-renderer yt-img-shadow.ytd-grid-channel-renderer,
ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer {
  border-radius: 0 !important;
}

#channel.ytd-grid-channel-renderer #subscribe.ytd-grid-channel-renderer {
  margin-top: 30px !important;
}

html[dark] #banner-top-options {
  height: 55px;
  width: 1260px;
  background: #212121;
  border: 1px solid #51515151;
}

#banner-top-options {
  height: 55px;
  width: 1262px;
  background: #fff;
  border: 1px solid #e5e5e5;
}

@media (max-width: 1800px) {
  #banner-top-options {
    width: 1262px !important;
  }

  #subscriber-count.ytd-c4-tabbed-header-renderer::before {
    left: -1210px !important;
  }
}

ytd-channel-avatar-editor {
  top: -191px !important;
}
@media (max-width:1600px) {
  ytd-channel-avatar-editor {
    top: -158px !important;
  }
}
yt-img-shadow.ytd-channel-avatar-editor,
yt-img-shadow.ytd-channel-avatar-editor img.yt-img-shadow,
ytd-channel-avatar-editor,
ytd-channel-avatar-editor .yt-simple-endpoint {
  width: 100px !important;
  height: 100px !important;
}

yt-icon.ytd-channel-avatar-editor,
yt-icon.ytd-channel-banner-editor-renderer {
  border-radius: 0 !important;
  height: 30px !important;
  width: 30px !important;
  padding: 0 !important;
  position: absolute;
  left: 68px !important;
  top: 0 !important;
  background: url(https://i.ibb.co/KqBb912/Untitled.png);
  fill: transparent;
  border: 1px solid #e5e5e5 !important;
}

html[dark] yt-icon.ytd-channel-avatar-editor,
html[dark] yt-icon.ytd-channel-banner-editor-renderer {
  background: url(https://i.ibb.co/KqBb912/Untitled.png);
  filter: invert(0.8);
}

yt-icon.ytd-channel-banner-editor-renderer {
  position: relative;
  left: auto !important;
  float: right !important;
  right:0!important
}

#subscriber-count.ytd-c4-tabbed-header-renderer::before {
  content: attr(aria-label);
  position: absolute;
  top: -280px;
  left: -1210px;
  width: 130px !important;
}

ytd-button-renderer.style-primary:nth-of-type(2) {
  top: -280px !important;
  left: -960px !important;
  position: relative;
  background-color: transparent !important;
}

ytd-comments ytd-button-renderer.style-primary:nth-of-type(2) {
  position: static;
}

#header.ytd-browse ytd-button-renderer #button.ytd-button-renderer yt-formatted-string.ytd-button-renderer {
  left: auto !important;
  top: auto !important;
  font-size: 0 !important;
  overflow: hidden !important;
  color: #737373 !important;
}

#info #menu ytd-button-renderer yt-formatted-string.ytd-button-renderer {
  color: #000;
}

#contentContainer.tp-yt-app-header ytd-button-renderer:nth-of-type(2) #button.ytd-button-renderer yt-formatted-string.ytd-button-renderer:hover {
  text-decoration: underline;
}

#contentContainer.tp-yt-app-header ytd-button-renderer:nth-of-type(2) #button.ytd-button-renderer yt-formatted-string.ytd-button-renderer::after {
  content: "Video Manager";
  font-size: 11px !important;
  margin-left: 5px !important;
}

#contentContainer.tp-yt-app-header ytd-button-renderer:nth-of-type(2) #button.ytd-button-renderer yt-formatted-string.ytd-button-renderer::before {
  content: "";
  background: url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png)no-repeat -253px -342px;
  width: 10px;
  height: 11px;
  top: 2px !important;
  position: relative;
  display: inline-block;
}

html[dark] #subscriber-count.ytd-c4-tabbed-header-renderer::before {
  filter: invert(1);
}

#header.ytd-browse ytd-button-renderer:nth-of-type(1) #button.ytd-button-renderer yt-formatted-string.ytd-button-renderer {
  font-size: 0 !important;
  color: #fff !important;
  filter: invert(0);
  position: absolute;
  left: 34px !important;
  top: -4px !important;
}

#header.ytd-browse ytd-button-renderer:nth-of-type(1) #button.ytd-button-renderer yt-formatted-string.ytd-button-renderer::after {
  font-size: 12px !important;
  color: #fff !important;
  content: "Subscribe";
  line-height: 24px !important;
  width: 63px !important;
  filter: invert(0);
  display: inline-block;
  background-color: #e99482 !important;
}

#header.ytd-browse ytd-button-renderer:nth-of-type(1) #button.ytd-button-renderer yt-formatted-string.ytd-button-renderer::before {
  content: url(https://i.ibb.co/vqvYKbQ/subscubrob.png);
  filter: brightness(1);
  top: 2px !important;
  left: 2px !important;
  position: relative;
  border-radius: 2px !important;
  background-color: #e99482 !important;
  line-height: 36px !important;
  height: 24px;
  width: 27px !important;
  display: inline-block;
}

#header.ytd-browse ytd-button-renderer:nth-of-type(1) #button.ytd-button-renderer,
ytd-button-renderer.style-primary:nth-of-type(1) {
  background: url(https://i.ibb.co/093TxVq/settoing-real.png)no-repeat!important;
  border: 0 !important;
  height: 20px;
  width: 20px !important;
}

#edit-buttons {
  position: relative;
  left: 27px;
}

.subheadline.ytd-channel-about-metadata-renderer {
  margin: 15px 0 5px !important;
  font-weight: 500 !important;
  font-size: 13px !important;
  color: #555 !important;
}

#bio.ytd-channel-about-metadata-renderer,
#description.ytd-channel-about-metadata-renderer {
  font-size: 13px !important;
  color: #555 !important;
  line-height: 1.3em !important;
}

#action-buttons.ytd-channel-about-metadata-renderer,
#primary-items.ytd-channel-sub-menu-renderer #label-icon.yt-dropdown-menu,
#right-column.ytd-channel-about-metadata-renderer .subheadline.ytd-channel-about-metadata-renderer {
  display: none !important;
}

#details-container.ytd-channel-about-metadata-renderer tr.ytd-channel-about-metadata-renderer:nth-of-type(1) {
  display: none !important;
}

#right-column.ytd-channel-about-metadata-renderer > yt-formatted-string.ytd-channel-about-metadata-renderer {
  border: 0 !important;
  padding: 0 !important;
}

#description-container .subheadline.ytd-channel-about-metadata-renderer {
  margin: 72px 0 24px !important;
}

#right-column.ytd-channel-about-metadata-renderer {
  display: flex;
  flex-direction: column;
  left: -850px !important;
  position: relative;
  max-height: 200px;
}

#right-column.ytd-channel-about-metadata-renderer .style-scope.ytd-channel-about-metadata-renderer:nth-of-type(2) {
  order: 2;
  font-size: 13px;
  color: #555;
}

#right-column.ytd-channel-about-metadata-renderer .style-scope.ytd-channel-about-metadata-renderer:nth-of-type(3) {
  font-size: 13px;
  color: #555;
  font-weight: 500 !important;
}

.deemphasize.yt-formatted-string {
  font-size: 13px;
  color: #555 !important;
  font-weight: 500 !important;
}

ytd-app #details-container.ytd-channel-about-metadata-renderer .subheadline.ytd-channel-about-metadata-renderer {
  margin: 15px 0 0 !important;
}

#details-container.ytd-channel-about-metadata-renderer tr.ytd-channel-about-metadata-renderer {
  height: 34px !important;
}

#details-container.ytd-channel-about-metadata-renderer table.ytd-channel-about-metadata-renderer {
  left: -2px !important;
  position: relative !important;
}

ytd-app #details-container.ytd-channel-about-metadata-renderer {
  padding-bottom: 10px !important;
}

ytd-browse[page-subtype~=channels] ytd-two-column-browse-results-renderer.ytd-browse {
  min-height: auto !important;
  overflow: hidden !important;
}

@media (max-width: 1599px) {
  #right-column.ytd-channel-about-metadata-renderer {
    left: -714px !important;
  }
}

#link-list-container.ytd-channel-about-metadata-renderer a.yt-simple-endpoint.ytd-channel-about-metadata-renderer {
  color: #167ac6 !important;
  cursor: pointer !important;
  font-weight: 500 !important;
  margin-bottom: 5px !important;
}

[page-subtype=channels] ytd-section-list-renderer #header-container {
  margin-bottom: 10px;
}

[page-subtype=channels] ytd-section-list-renderer #header-container ytd-channel-sub-menu-renderer {
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 2px;
}

html[dark] #meta .ytd-video-secondary-info-renderer tp-yt-paper-button.ytd-expander,
html[dark] [page-subtype=channels] ytd-section-list-renderer #header-container ytd-channel-sub-menu-renderer {
  border-color: var(--yt-spec-10-percent-layer);
}

ytd-channel-sub-menu-renderer {
  margin: 0 !important;
  height: 48px !important;
}

[page-subtype=channels] yt-dropdown-menu.has-items #label-text.yt-dropdown-menu,
[page-subtype=channels] ytd-channel-sub-menu-renderer #icon-label.yt-dropdown-menu {
  color: #333;
  font-size: 11px !important;
  font-weight: 500 !important;
  border: 1px solid #d3d3d3;
  background: #f8f8f8;
  line-height: 28px !important;
  padding: 0 10px !important;
  border-radius: 2px !important;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05) !important;
}

[page-subtype=channels] yt-dropdown-menu.has-items #label-text.yt-dropdown-menu::after,
[page-subtype=channels] ytd-channel-sub-menu-renderer #icon-label.yt-dropdown-menu::after {
  content: "";
  margin-top: -3px;
  margin-left: 5px;
  border: 1px solid transparent;
  border-top-color: #333;
  border-width: 4px 4px 0;
  width: 0;
  height: 0;
  top: 7px !important;
  position: relative;
}

[page-subtype=channels] ytd-channel-sub-menu-renderer #icon-label.yt-dropdown-menu {
  color: #333 !important;
}

html[dark] [page-subtype=channels] yt-dropdown-menu.has-items #icon-label.yt-dropdown-menu,
html[dark] [page-subtype=channels] yt-dropdown-menu.has-items #label-text.yt-dropdown-menu {
  color: #fff !important;
  background: #1c1c1c !important;
  border-color: #333 !important;
}

html[dark] [page-subtype=channels] yt-dropdown-menu.has-items #icon-label.yt-dropdown-menu:hover,
html[dark] [page-subtype=channels] yt-dropdown-menu.has-items #label-text.yt-dropdown-menu:hover {
  border-color: #3c3c3c !important;
  box-shadow: 0 1px 0 rgb(0 0 0/10%) !important;
  background-color: #444 !important;
}

html[dark] [page-subtype=channels] yt-dropdown-menu.has-items #icon-label.yt-dropdown-menu::after,
html[dark] [page-subtype=channels] yt-dropdown-menu.has-items #label-text.yt-dropdown-menu::after {
  border-top-color: #fff;
}

[page-subtype=channels] yt-dropdown-menu:not(.has-items) #label-text.yt-dropdown-menu {
  font-weight: 500 !important;
  color: #333 !important;
  font-size: 15px !important;
}

[page-subtype=playlist] {
  margin: 0;
  left: 0;
  padding: 0;
}

ytd-browse ytd-playlist-sidebar-renderer.ytd-browse {
  position: relative;
  left: 0 !important;
  right: 0;
  padding: 15px;
  height: auto;
  width: 100%;
  max-width: 1262px;
  background: #fff;
  margin: 40px auto 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  min-height: 144px;
  overflow: visible;
}

html[dark] ytd-browse ytd-playlist-sidebar-renderer.ytd-browse {
  background: #212121 !important;
}

ytd-playlist-sidebar-primary-info-renderer[responsive] ytd-playlist-thumbnail.ytd-playlist-sidebar-primary-info-renderer,
ytd-playlist-sidebar-primary-info-renderer[responsive] ytd-playlist-thumbnail.ytd-playlist-sidebar-primary-info-renderer img {
  width: 224px !important;
  height: 114px !important;
  margin: 0 !important;
  position: absolute !important;
}

ytd-playlist-sidebar-primary-info-renderer[responsive] ytd-playlist-thumbnail.ytd-playlist-sidebar-primary-info-renderer #overlays {
  display: none;
}

#menu.ytd-playlist-sidebar-primary-info-renderer,
#play-buttons.ytd-playlist-sidebar-primary-info-renderer,
#privacy-stats.ytd-playlist-sidebar-primary-info-renderer,
#stats.ytd-playlist-sidebar-primary-info-renderer,
#title.ytd-playlist-sidebar-primary-info-renderer,
ytd-expander.ytd-playlist-sidebar-primary-info-renderer,
ytd-inline-form-renderer#title-form.ytd-playlist-sidebar-primary-info-renderer {
  display: block !important;
  margin-left: 234px !important;
  margin-bottom: 0 !important;
}

#items.ytd-playlist-sidebar-renderer > .ytd-playlist-sidebar-renderer:not(:last-child) {
  border-bottom: 0 !important;
  width: 100%;
}

#title.ytd-playlist-sidebar-primary-info-renderer yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
  color: #333 !important;
  font-size: 20px;
  font-weight: 500;
  line-height: 33px;
}

html[dark] #title.ytd-playlist-sidebar-primary-info-renderer yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string,
html[dark] [page-subtype=playlist] #video-title.ytd-playlist-video-renderer {
  color: #fff !important;
}

#stats.ytd-playlist-sidebar-primary-info-renderer {
  color: #767676;
  margin-top: 0;
  font-size: 12px !important;
  line-height: 1;
}

ytd-expander.ytd-playlist-sidebar-primary-info-renderer #description {
  color: #767676;
  margin-top: 0;
  font-size: 12px !important;
  line-height: 1;
  margin-bottom: 0;
}

ytd-playlist-sidebar-secondary-info-renderer {
  padding: 0 !important;
  position: fixed;
  top: 50px;
  background: #fff;
  width: calc(100% - 232px);
  left: 231px;
  border-bottom: 1px solid #e8e8e8;
  z-index: 1024;
}

html[dark] ytd-playlist-sidebar-secondary-info-renderer {
  background: #212121 !important;
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

[mini-guide-visible=] ytd-playlist-sidebar-secondary-info-renderer {
  left: 73px;
  width: calc(100% - 73px);
}

#owner-container.ytd-playlist-sidebar-secondary-info-renderer {
  margin-bottom: 0 !important;
  margin-top: 2px;
  padding-right: 20px;
  padding-left: 10px;
}

#owner-container.ytd-playlist-sidebar-secondary-info-renderer #avatar.ytd-video-owner-renderer,
#owner-container.ytd-playlist-sidebar-secondary-info-renderer #avatar.ytd-video-owner-renderer img {
  width: 36px !important;
  height: 36px !important;
}

ytd-browse[page-subtype=show][has-sidebar_] ytd-two-column-browse-results-renderer.ytd-browse,
ytd-browse[responsive-playlist][page-subtype=playlist][has-sidebar_] ytd-two-column-browse-results-renderer.ytd-browse {
  padding: 0 !important;
  width: 1262px;
  margin: 0 auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 0 !important;
}

[page-subtype=playlist] ytd-playlist-video-renderer:hover:not(.dragging) {
  background: 0 0;
}

[page-subtype=playlist] ytd-playlist-video-renderer {
  border-bottom: 1px solid #e2e2e2;
}

[page-subtype=playlist] #content.ytd-playlist-video-renderer {
  border: 0;
  padding: 15px 0;
}

[page-subtype=playlist] ytd-thumbnail.ytd-playlist-video-renderer,
ytd-thumbnail.ytd-playlist-video-renderer img {
  height: 40.5px;
  width: 72px;
}

[page-subtype=channels] ytd-comments-header-renderer,
[page-subtype=playlist] #text.ytd-alert-with-button-renderer {
  display: none !important;
}

[page-subtype=playlist] #dismiss-button,
[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer button {
  display: none;
}

[page-subtype=playlist] #video-title.ytd-playlist-video-renderer {
  color: #333;
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.1;
}

[page-subtype=playlist] ytd-playlist-video-renderer:hover #content.ytd-playlist-video-renderer {
  border: 0;
}

[page-subtype=playlist] ytd-video-meta-block:not([rich-meta]) #byline-container.ytd-video-meta-block {
  font: 12px roboto;
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer a {
  display: inline-block;
  height: 28px;
  border: solid 1px #d3d3d3;
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  background: #f8f8f8;
  color: #333;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer a:hover,
ytd-playlist-sidebar-primary-info-renderer:hover #edit-button yt-icon-button:hover {
  border-color: #c6c6c6;
  background: #f0f0f0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer a:active,
ytd-playlist-sidebar-primary-info-renderer:hover #edit-button yt-icon-button:active {
  border-color: #c6c6c6;
  background: #e9e9e9;
  box-shadow: inset 0 1px 0#ddd;
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer #button.ytd-toggle-button-renderer,
[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer yt-icon-button.ytd-button-renderer {
  padding: 0;
  width: 13px;
  height: 13px;
  vertical-align: middle;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflKclzgY.webp) -812px -38px;
  opacity: 0.5;
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer.style-text yt-icon-button.ytd-button-renderer {
  background-position: -750px -19px;
  width: 13px;
  height: 17px;
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer:nth-child(3) yt-icon-button.ytd-button-renderer {
  background-position: -746px -109px;
  width: 10px;
  height: 17px;
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer.style-text a::after {
  content: "Shuffle";
}

[page-subtype=playlist] #top-level-buttons-computed ytd-toggle-button-renderer.ytd-menu-renderer a::after {
  content: "Save" !important;
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer:nth-child(3) a::after {
  content: "Share";
}

[page-subtype=playlist] #top-level-buttons-computed .ytd-menu-renderer a::after {
  display: inline-block;
  font: 500 11px roboto;
  color: #333;
  line-height: 28px;
  margin-left: 5px;
}

[page-subtype=playlist] #top-level-buttons-computed.ytd-menu-renderer:not(:empty) + #button.ytd-menu-renderer {
  margin-top: 12px;
}

.more-button.ytd-playlist-sidebar-primary-info-renderer {
  margin: 5px 0 0;
  color: #167ac6 !important;
  text-transform: none;
}

yt-img-shadow.ytd-playlist-video-thumbnail-renderer {
  transform: none !important;
  top: 0 !important;
}

ytd-playlist-sidebar-renderer[standardized-themed-scrollbar] {
  overflow-y: visible;
}

@media (max-width: 1600px) {
  ytd-browse ytd-playlist-sidebar-renderer.ytd-browse,
  ytd-browse[page-subtype=show][has-sidebar_] ytd-two-column-browse-results-renderer.ytd-browse,
  ytd-browse[responsive-playlist][page-subtype=playlist][has-sidebar_] ytd-two-column-browse-results-renderer.ytd-browse {
    width: 1056px !important;
  }
}

@media (max-width: 1160px) {
  ytd-browse ytd-playlist-sidebar-renderer.ytd-browse,
  ytd-browse[page-subtype=show][has-sidebar_] ytd-two-column-browse-results-renderer.ytd-browse,
  ytd-browse[responsive-playlist][page-subtype=playlist][has-sidebar_] ytd-two-column-browse-results-renderer.ytd-browse {
    width: 800px !important;
  }
}

#content-attachment.ytd-backstage-post-renderer,
#content-attachment.ytd-backstage-post-renderer img.yt-img-shadow {
  max-width: 75%;
  max-height: 420px !important;
  border-radius: 0 !important;
  float: left;
}

#author-thumbnail.ytd-backstage-post-renderer,
#author-thumbnail.ytd-backstage-post-renderer img.yt-img-shadow {
  height: 48px !important;
  width: 48px !important;
  left: -6px !important;
  overflow: visible;
  position: relative;
}

#author-thumbnail.ytd-backstage-post-renderer yt-img-shadow.ytd-backstage-post-renderer {
  height: 48px !important;
  width: 48px !important;
  left: -6px !important;
  position: relative;
  overflow: visible !important;
}

#author-text.yt-simple-endpoint.ytd-backstage-post-renderer {
  color: #128ee9 !important;
  font-weight: 500 !important;
  text-decoration: none !important;
}

html:not([dark]) ytd-app yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
  color: #767676;
}

#published-time-text.ytd-backstage-post-renderer {
  color: #767676 !important;
  font-size: 11px !important;
}

#published-time-text.ytd-backstage-post-renderer:hover {
  color: #767676 !important;
}

html:not([dark]) yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover,
html:not([dark]) ytd-app #metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
  color: #767676 !important;
}

#main.ytd-backstage-post-renderer {
  left: -4px !important;
  position: relative;
  top: -4px !important;
}

#content-text.ytd-backstage-post-renderer {
  color: #000 !important;
  line-height: normal !important;
}

.less-button.ytd-backstage-post-renderer,
.more-button.ytd-backstage-post-renderer {
  color: #167ac6 !important;
  font-weight: normal !important;
  font-size: 12px !important;
}

#reply-button-end #button.size-default.style-default.ytd-button-renderer.style-scope,
.badge-style-type-members-only.ytd-badge-supported-renderer {
  display: none !important;
}

[page-subtype=channels] ytd-button-renderer.style-default[is-icon-button] #text.ytd-button-renderer {
  font-size: 0 !important;
}

[page-subtype=channels] ytd-button-renderer.style-default[is-icon-button] #text.ytd-button-renderer::after {
  content: "Comment •";
  font-size: 13px !important;
  color: #555 !important;
  font-weight: normal !important;
  letter-spacing: 0 !important;
  opacity: 0.75 !important;
  top: 2px !important;
  position: relative;
}

#content-attachment.ytd-backstage-post-renderer ytd-playlist-renderer.ytd-backstage-post-renderer,
#content-attachment.ytd-backstage-post-renderer ytd-video-renderer.ytd-backstage-post-renderer {
  background: 0 0 !important;
  border: 1px solid #ddd !important;
}

ytd-app ytd-video-renderer[is-backstage-video] img.yt-img-shadow {
  max-width: 100% !important;
}

[page-subtype=channels] .text-wrapper.ytd-video-renderer {
  top: 0 !important;
}

#content-attachment #metadata.ytd-video-meta-block {
  flex-direction: column !important;
}

ytd-video-meta-block:not([rich-meta]) #metadata-line.ytd-video-meta-block {
  flex-direction: row !important;
}

#content-attachment #separator.ytd-video-meta-block,
[page-subtype=history] yt-icon-button.dropdown-trigger {
  display: none !important;
}

#content-attachment #description-text.ytd-video-renderer {
  padding-top: 0 !important;
}

ytd-video-renderer[is-backstage-video] #video-title.ytd-video-renderer {
  color: #333 !important;
}

tp-yt-paper-listbox tp-yt-paper-item yt-icon {
  display: block !important;
}

yt-icon.checked.ytd-backstage-poll-renderer {
  color: transparent !important;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-comments-vflVHNGhW.webp) -171px 1px;
  background-size: auto;
  width: 12px;
  height: 12px;
}

yt-icon.ytd-backstage-poll-renderer {
  padding: 0 !important;
}

.progress-bar.style-scope.ytd-backstage-poll-renderer {
  height: 24px !important;
}

.choice-info.style-scope.ytd-backstage-poll-renderer,
.vote-choice.ytd-backstage-poll-renderer {
  height: 24px !important;
}

.text-area.ytd-backstage-poll-renderer,
ytd-compact-link-renderer[compact-link-style=compact-link-style-type-history-my-activity-link] {
  margin: 0 !important;
}

ytd-backstage-poll-renderer:not([is-image-poll]) tp-yt-paper-item.ytd-backstage-poll-renderer[selected] .choice-info.ytd-backstage-poll-renderer,
ytd-backstage-poll-renderer:not([is-image-poll]) tp-yt-paper-item.ytd-backstage-poll-renderer[show-percentage] .choice-info.ytd-backstage-poll-renderer {
  border: 0 !important;
}

tp-yt-paper-item.ytd-backstage-poll-renderer[selected] .progress-bar.ytd-backstage-poll-renderer {
  background-color: #def0ff !important;
}

tp-yt-paper-item.ytd-backstage-poll-renderer:not([selected]) .progress-bar.ytd-backstage-poll-renderer {
  background-color: transparent !important;
}

.choice-text.ytd-backstage-poll-renderer {
  font-size: 11px !important;
  font-weight: 500 !important;
  line-height: 24px !important;
  margin: 0 0 0 32px !important;
}

.vote-percentage.ytd-backstage-poll-renderer {
  line-height: 24px !important;
  position: absolute !important;
}

tp-yt-paper-item.ytd-backstage-poll-renderer[selected] .choice-text.ytd-backstage-poll-renderer {
  color: #128ee9 !important;
}

.vote-choice.ytd-backstage-poll-renderer {
  width: 437px !important;
  left: 10px !important;
}

tp-yt-paper-item.ytd-backstage-poll-renderer[selected] .vote-percentage.ytd-backstage-poll-renderer {
  color: #128ee9 !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  left: -30px !important;
}

.check-icons.ytd-backstage-poll-renderer {
  height: 14px !important;
  min-width: 14px !important;
  background: #fff;
  left: 21px;
  z-index: 1;
  border-radius: 14px;
}

#poll-votes.ytd-backstage-poll-renderer {
  left: 25px !important;
  padding: 0 !important;
  position: relative;
}

tp-yt-paper-item.ytd-backstage-poll-renderer:not([selected]) .vote-percentage.ytd-backstage-poll-renderer {
  color: #000 !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  left: -30px !important;
}

tp-yt-paper-item.ytd-backstage-poll-renderer:not([selected]) yt-icon.ytd-backstage-poll-renderer {
  color: transparent !important;
  border-radius: 12px;
  border-color: #767676;
  border-style: solid;
  border-width: 1px;
  height: 12px !important;
  width: 12px !important;
}

#sign-in.yt-simple-endpoint.ytd-backstage-poll-renderer {
  padding-bottom: 3px !important;
  height: 24px !important;
}

ytd-backstage-poll-renderer:not([is-image-poll]) .choice-info.ytd-backstage-poll-renderer {
  border: 0 !important;
}

#vote-info.ytd-backstage-poll-renderer {
  display: none !important;
}

html:not([dark]) tp-yt-iron-overlay-backdrop {
  background: rgba(255, 255, 255, 0.8) !important;
}

ytd-app ytd-add-to-playlist-renderer[dialog] {
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
}

ytd-app #title.ytd-add-to-playlist-renderer {
  padding: 6px 8px;
  font-size: 13px;
  font-weight: 500;
}

ytd-app #checkbox.tp-yt-paper-checkbox {
  border: 1px solid #ddd;
  border-radius: 0;
  height: 18px;
  width: 18px;
}

#checkbox.tp-yt-paper-checkbox:active,
ytd-app #checkbox.checked.tp-yt-paper-checkbox {
  border: 1px solid #1c62b9;
  background: 0 0;
  color: #1c62b9;
  fill: #1c62b9;
}

ytd-app #checkbox.checked.tp-yt-paper-checkbox #checkmark.tp-yt-paper-checkbox {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflgGT3Hj.png) 0 -42px;
  background-size: auto;
  width: 14px;
  height: 14px;
  animation: none;
  rotate: none;
  border: 0;
}

ytd-app #checkboxLabel.tp-yt-paper-checkbox {
  padding-left: 5px;
}

ytd-app #playlists.ytd-add-to-playlist-renderer {
  padding: 6px 8px;
}

ytd-app ytd-add-to-playlist-renderer[increased-tap-target] #playlists.ytd-add-to-playlist-renderer > .ytd-add-to-playlist-renderer:not(:last-child) {
  margin-bottom: 5px;
}

ytd-app yt-share-target-renderer yt-icon.yt-share-target-renderer {
  --iron-icon-height: 32px;
  --iron-icon-width: 32px;

  margin: 0;
}

ytd-app #title.yt-share-target-renderer {
  width: 36px;
}

#bar.yt-copy-link-renderer {
  background-color: var(--ytd-searchbox-background);
  border: 1px solid var(--ytd-searchbox-legacy-border-color);
}

#edit-button yt-icon {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-watchedit-vflxUZcSA.png) 0 -113px;
  background-size: auto;
  width: 24px;
  height: 24px;
  fill: none;
  filter: invert(1);
  opacity: 0.5;
}

#edit-button yt-icon-button {
  height: 28px;
  padding: 0;
  width: 36px;
  border: 1px solid transparent;
}

ytd-playlist-sidebar-primary-info-renderer:hover #edit-button yt-icon-button {
  border: solid 1px #d3d3d3;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  background: #f8f8f8;
}

ytd-inline-form-renderer[component-style=INLINE_FORM_STYLE_BODY_TEXT_PLACEHOLDER] #edit-button.ytd-inline-form-renderer {
  margin-top: 0 !important;
}

.ytd-privacy-dropdown-item-renderer yt-icon {
  background: url(https://s.ytimg.com/yts/imgbin/www-videomanager-vflsrtxCf.webp) -28px -1264px;
  fill: none;
  width: 18px;
  height: 18px;
}

ytd-privacy-dropdown-item-renderer:nth-child(2) yt-icon {
  background-position: 0 -261px;
}

ytd-privacy-dropdown-item-renderer:nth-child(3) yt-icon {
  background-position: -28px -642px;
}

ytd-app ytd-playlist-sidebar-primary-info-renderer #save-button {
  position: static;
  background-color: #167ac6;
  border: solid 1px #167ac6;
  color: #fff;
  padding: 0;
  height: 26px;
  margin-left: 5px;
  border-radius: 2px;
  margin-right: 0 !important;
  box-shadow: 0 1px 0 rgb(0 0 0/5%) !important;
}

ytd-app ytd-playlist-sidebar-primary-info-renderer #save-button:hover {
  background: #126db3 !important;
}

ytd-app ytd-playlist-sidebar-primary-info-renderer #save-button:active {
  background: #095b99 !important;
  box-shadow: inset 0 1px 0 rgb(0 0 0/50%) !important;
}

ytd-app ytd-playlist-sidebar-primary-info-renderer #save-button tp-yt-paper-button {
  padding: 0;
  width: max-content;
  line-height: 26px;
}

ytd-app ytd-playlist-sidebar-primary-info-renderer #edit-buttons {
  left: 0;
}

.badge.ytd-badge-supported-renderer:not(.badge-style-type-verified):not(.badge-style-type-collection):not(.badge-style-type-verified-artist) {
  background: 0 0;
  border: 1px solid #ddd;
  padding: 0 4px;
  height: 13px;
}

html[dark] .badge.ytd-badge-supported-renderer:not(.badge-style-type-verified):not(.badge-style-type-collection):not(.badge-style-type-verified-artist) {
  border-color: #444;
}

.badge.ytd-badge-supported-renderer span {
  text-transform: uppercase;
  font: 11px roboto;
}

.badge-style-type-live-now.ytd-badge-supported-renderer:not(.badge-style-type-verified) {
  border-color: #b91f1f !important;
  color: #b91f1f;
}

ytd-expander.ytd-video-secondary-info-renderer ytd-metadata-row-container-renderer ytd-metadata-row-header-renderer {
  padding: 0;
}

.super-title.ytd-video-primary-info-renderer a.yt-simple-endpoint.yt-formatted-string {
  color: #000 !important;
  background-color: #f1f1f1;
  border-radius: 2px;
  padding: 0 4px;
  margin-right: 6px;
}

#info #menu ytd-button-renderer yt-formatted-string.ytd-button-renderer,
#info ytd-toggle-button-renderer.style-default-active a #text,
#info ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer {
  font-size: 11px !important;
}

ytd-button-renderer.ytd-item-section-renderer,
ytd-compact-movie-renderer.ytd-item-section-renderer,
ytd-compact-playlist-renderer.ytd-item-section-renderer,
ytd-compact-radio-renderer.ytd-item-section-renderer,
ytd-compact-video-renderer.ytd-item-section-renderer,
ytd-emergency-onebox-renderer.ytd-item-section-renderer,
ytd-movie-renderer.ytd-item-section-renderer,
ytd-playlist-renderer.ytd-item-section-renderer,
ytd-radio-renderer.ytd-item-section-renderer,
ytd-show-renderer.ytd-item-section-renderer {
  margin-top: 15px !important;
}

ytd-button-renderer.ytd-item-section-renderer:first-child,
ytd-compact-movie-renderer.ytd-item-section-renderer:first-child,
ytd-compact-playlist-renderer.ytd-item-section-renderer:first-child,
ytd-compact-radio-renderer.ytd-item-section-renderer:first-child,
ytd-compact-video-renderer.ytd-item-section-renderer:first-child,
ytd-emergency-onebox-renderer.ytd-item-section-renderer:first-child,
ytd-movie-renderer.ytd-item-section-renderer:first-child,
ytd-playlist-renderer.ytd-item-section-renderer:first-child,
ytd-radio-renderer.ytd-item-section-renderer:first-child,
ytd-show-renderer.ytd-item-section-renderer:first-child {
  margin-top: 0 !important;
}

ytd-playlist-panel-renderer[collapsible] .title.ytd-playlist-panel-renderer {
  color: #fff !important;
  font-size: 15px !important;
  font-weight: normal !important;
}

ytd-settings-sidebar-renderer #label {
  font: normal 13px roboto !important;
  line-height: 20px !important;
  color: #222;
}

ytd-settings-sidebar-renderer ytd-compact-link-renderer[compact-link-style] tp-yt-paper-item.ytd-compact-link-renderer {
  padding: 0 6px;
  height: 28px !important;
}

ytd-browse ytd-settings-sidebar-renderer,
ytd-settings-sidebar-renderer {
  width: 186px;
  background: #fff;
  padding: 0 22px;
  box-sizing: content-box;
  border-right: 1px solid #e8e8e8;
  margin-top: -14px;
}

ytd-browse #title.ytd-settings-sidebar-renderer {
  padding: 5px 0 12px;
  font-size: 16px;
  color: #222;
  text-transform: none;
}

html:not([dark]) #meta #top-row ytd-video-owner-renderer yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
  color: #111 !important;
}

#meta .ytd-video-secondary-info-renderer tp-yt-paper-button.ytd-expander {
  width: 100%;
  border-top: 1px solid #e2e2e2;
  padding-top: 2px;
  margin-bottom: 0 !important;
  border-radius: 0;
  margin-top: 15px !important;
  height: 28px;
}

#meta .ytd-video-secondary-info-renderer tp-yt-paper-button.ytd-expander:hover yt-formatted-string {
  color: #222;
}

[page-subtype=history] #header-container,
[page-subtype=history] #title.ytd-sub-feed-selector-renderer {
  display: none;
}

a.yt-simple-endpoint.ytd-sub-feed-option-renderer {
  flex: none;
}

ytd-sub-feed-option-renderer.ytd-sub-feed-selector-renderer {
  display: inline-block;
  padding: 0 !important;
  border: 0 !important;
}

ytd-app ytd-two-column-browse-results-renderer[page-subtype=history] #secondary.ytd-two-column-browse-results-renderer {
  background: 0 0;
  position: absolute;
  left: 0;
  max-height: 102px !important;
}

ytd-two-column-browse-results-renderer[page-subtype=history] {
  position: relative;
  margin-top: 0 !important;
}

ytd-two-column-browse-results-renderer[page-subtype=history][has-secondary-column-data] #primary.ytd-two-column-browse-results-renderer {
  padding: 80px 0 0 !important;
}

[page-subtype=history] ytd-browse-feed-actions-renderer.ytd-two-column-browse-results-renderer {
  padding: 0 !important;
  margin: 0;
  width: 100% !important;
}

[page-subtype=history] ytd-search-box-renderer {
  margin: 0;
  display: block;
  width: 200px;
  right: 0;
  left: auto;
  position: absolute;
}

[page-subtype=history] ytd-sub-feed-selector-renderer {
  padding: 10px 20px 0;
  border-bottom: 1px solid #e2e2e2;
  width: 100% !important;
  box-sizing: border-box;
}

[dark] [page-subtype=history] #contents.ytd-browse-feed-actions-renderer,
[dark] [page-subtype=history] ytd-sub-feed-selector-renderer {
  border-color: #333;
}

[dark] [page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button,
[dark] [page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer {
  border-color: #333;
  background: #1c1c1c;
}

[dark] [page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button:hover,
[dark] [page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer:hover {
  border-color: #3c3c3c !important;
  box-shadow: 0 1px 0 rgb(0 0 0/10%) !important;
  background-color: #444;
}

html[dark] .ytdl-link-btn {
  color: #fff;
  border-color: #333;
}

[page-subtype=history] tp-yt-paper-input.ytd-search-box-renderer {
  margin: 0;
  width: 200px !important;
}

[page-subtype=history] ytd-sub-feed-selector-renderer #radioLabel.tp-yt-paper-radio-button {
  font: 500 13px roboto;
  height: 28px;
  border-bottom: 3px solid transparent;
  padding: 0 3px;
}

[page-subtype=history] #contents.ytd-browse-feed-actions-renderer yt-icon,
[page-subtype=history] ytd-sub-feed-selector-renderer #radioContainer.tp-yt-paper-radio-button {
  display: none;
}

[page-subtype=history] ytd-sub-feed-selector-renderer #radioLabel.tp-yt-paper-radio-button:hover,
[page-subtype=history] ytd-sub-feed-selector-renderer [aria-checked=true] #radioLabel.tp-yt-paper-radio-button {
  border-bottom-color: red;
}

[page-subtype=history] ytd-sub-feed-option-renderer {
  padding-right: 23px !important;
}

[page-subtype=history] #contents.ytd-browse-feed-actions-renderer {
  display: inline-block !important;
  width: 100% !important;
  padding-bottom: 10px;
  border-bottom: 1px solid #e2e2e2;
}

[page-subtype=history] .text-wrapper.ytd-video-renderer,
[page-subtype=history] ytd-video-renderer:not([use-prominent-thumbs]) {
  max-width: none;
}

[page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button,
[page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer {
  background: #f8f8f8;
  color: #333;
  height: 28px !important;
  border: solid 1px #d3d3d3;
  padding: 0 10px !important;
  outline: 0;
  font: 500 11px roboto;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
  margin-left: 10px;
  vertical-align: middle;
  text-align: center;
  line-height: 24px;
}

ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer {
  height: 26px !important;
}

[page-subtype=history] ytd-compact-link-renderer[compact-link-style=compact-link-style-type-history-my-activity-link] #content-icon.ytd-compact-link-renderer[hidden] + #primary-text-container.ytd-compact-link-renderer > #label.ytd-compact-link-renderer {
  font: 500 11px roboto;
  color: #333;
  line-height: 28px;
}

[page-subtype=history] #contents.ytd-browse-feed-actions-renderer > ytd-button-renderer.ytd-browse-feed-actions-renderer:nth-child(3) {
  margin-left: 10px;
}

[page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button yt-formatted-string {
  margin-left: 0 !important;
}
.ytd-two-column-search-results-renderer ytd-playlist-renderer #title.ytd-child-video-renderer #length.ytd-child-video-renderer {
  color: #767676 !important;
  font: 11px roboto !important;
}

[page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button:hover,
[page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer:hover {
  border-color: #c6c6c6;
  background: #f0f0f0;
  box-shadow: 0 1px 0 rgb(0 0 0/10%);
}

[page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button:active,
[page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer:active {
  border-color: #c6c6c6;
  background: #e9e9e9;
  box-shadow: inset 0 1px 0#ddd;
}

#input-container yt-live-chat-author-chip,
[page-subtype=history] #subtitle.ytd-compact-link-renderer,
[page-subtype=history] ytd-search-box-renderer .prefix,
[page-subtype=history] ytd-search-box-renderer .suffix,
ytd-rich-metadata-renderer[component-style=RICH_METADATA_RENDERER_STYLE_BOX_ART] #call-to-action.ytd-rich-metadata-renderer yt-icon {
  display: none;
}

[page-subtype=history] #primary-text-container.ytd-compact-link-renderer,
[page-subtype=history] ytd-browse-feed-actions-renderer * {
  display: inline-block;
  flex: none;
}

ytd-item-section-header-renderer[title-style=ITEM_SECTION_HEADER_TITLE_STYLE_HISTORY] #title.ytd-item-section-header-renderer {
  font: bold 13px arial;
  padding-bottom: 0 !important;
}

[page-subtype=history] .input-content.tp-yt-paper-input-container {
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.05);
  border: 1px solid #d3d3d3;
  color: #333;
  padding: 5px 10px 6px;
}

[page-subtype=history] .input-content.tp-yt-paper-input-container.focused {
  border-color: #167ac6;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
}

[page-subtype=history] .input-content.tp-yt-paper-input-container #paper-input-label-1 {
  margin: 5px 10px;
  color: #333;
}

[page-subtype=history] .input-content.tp-yt-paper-input-container input {
  color: #333;
}

html[dark] [page-subtype=history] .input-content.tp-yt-paper-input-container {
  background: #1c1c1c;
  border-color: #333;
}

[page-subtype=history] ytd-item-section-renderer:nth-of-type(1) #title.ytd-item-section-header-renderer {
  margin-top: 8px !important;
}

[page-subtype=history] #title.ytd-item-section-header-renderer {
  font-size: 15px !important;
  font-weight: 500 !important;
}

[page-subtype=history] tp-yt-paper-radio-button.ytd-sub-feed-option-renderer[aria-checked=false] yt-formatted-string.ytd-sub-feed-option-renderer {
  color: #666 !important;
  font-weight: normal !important;
}

[page-subtype=history] .top-level-buttons.ytd-menu-renderer button.yt-icon-button {
  color: transparent !important;
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -76px -511px;
  background-size: auto;
  width: 20px;
  height: 20px;
  opacity: 0.25 !important;
}

[page-subtype=history] ytd-video-renderer:not(:hover) ytd-menu-renderer.ytd-video-renderer:not([menu-active]).ytd-video-renderer:not(:focus-within) {
  opacity: 1 !important;
}

[page-subtype=history] .top-level-buttons.ytd-menu-renderer button.yt-icon-button:hover {
  opacity: 0.5 !important;
}

#subscribe-button ytd-button-renderer,
[page-subtype=history] .top-level-buttons.ytd-menu-renderer button.yt-icon-button:active,
[page-subtype=history] .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {
  opacity: 1 !important;
}

[page-subtype=history] #icon,
[page-subtype=history] ytd-item-section-renderer #header {
  display: none !important;
}

ytd-message-renderer[component-style=RENDER_STYLE_EMPTY_STATE] #message-button.ytd-message-renderer:not(:empty),
ytd-message-renderer[component-style=RENDER_STYLE_EMPTY_STATE] #message.ytd-message-renderer:not([hidden]).ytd-message-renderer {
  display: none !important;
}

ytd-message-renderer[component-style=RENDER_STYLE_EMPTY_STATE] {
  padding-top: 10px !important;
}

#message.ytd-message-renderer:not([hidden]).ytd-message-renderer + #submessage.ytd-message-renderer {
  margin-top: 23px !important;
  margin-bottom: 10px !important;
}

#submessage.ytd-message-renderer {
  color: #767676 !important;
  font-size: 15px !important;
}

[page-subtype=history] ytd-video-renderer:first-child {
  margin-top: 25px !important;
  margin-bottom: 15px !important;
}

[page-subtype=history] ytd-video-renderer:not(:first-child) {
  padding-top: 15px !important;
  border-top: 1px solid #e6e6e6 !important;
}

html[dark] [page-subtype=history] ytd-video-renderer:not(:first-child) {
  border-color: var(--yt-spec-10-percent-layer) !important;
}

[page-subtype=history] #title-wrapper.ytd-video-renderer {
  height: 16px !important;
}

[page-subtype=history] .text-wrapper.ytd-video-renderer {
  top: 0 !important;
}

.toggle-container .toggle-bar.tp-yt-paper-toggle-button {
  background: #b8b8b8 !important;
  height: 13px;
  border-radius: 20px;
  border: 1px solid transparent;
  padding-left: 1px solid;
  padding-right: 1px solid;
  opacity: 1 !important;
}

.toggle-container .toggle-button.tp-yt-paper-toggle-button {
  width: 13px;
  height: 13px;
  border-radius: 13px;
  background: #fbfbfb;
  box-shadow: none;
  top: 1px;
  bottom: 0;
  left: 1px;
}

ytd-app tp-yt-paper-toggle-button[checked]:not([disabled]) .toggle-button.tp-yt-paper-toggle-button {
  background: #fbfbfb;
}

ytd-app tp-yt-paper-toggle-button[checked] .toggle-button.tp-yt-paper-toggle-button {
  transform: translate(24px, 0) !important;
}

ytd-app tp-yt-paper-toggle-button[checked]:not([disabled]) .toggle-container .toggle-bar.tp-yt-paper-toggle-button {
  background: #167ac6 !important;
  opacity: 1 !important;
}

ytd-thumbnail-overlay-bottom-panel-renderer.style-scope {
  height: 94px !important;
  width: 43.75% !important;
  left: 94.5px;
  background: rgba(0, 0, 0, 0.7) !important;
}

ytd-search ytd-thumbnail-overlay-bottom-panel-renderer {
  height: 108px !important;
  left: 109px !important;
}

.style-scope.ytd-thumbnail-overlay-bottom-panel-renderer {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl44vgwb.png) -714px -55px;
  width: 32px;
  height: 32px;
  color: transparent !important;
  background-size: auto;
  top: 15px !important;
}

.style-scope.ytd-thumbnail-overlay-bottom-panel-renderer::before {
  content: "50+";
  position: absolute;
  font-size: 18px !important;
  top: -33px !important;
  color: #cfcfcf;
  left: 3px;
}

.style-scope.ytd-thumbnail-overlay-bottom-panel-renderer::after {
  content: "VIDEOS";
  font-size: 10px !important;
  position: absolute;
  top: -15px;
  color: #cfcfcf !important;
  font-weight: 500;
}

#info-strings #dot::after {
  content: none !important;
}

#info-strings.ytd-video-primary-info-renderer {
  font-size: 13px !important;
  font-weight: 500 !important;
  color: #333 !important;
  margin-top: 13px !important;
}

ytd-video-owner-renderer yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
  font-weight: 500 !important;
  font-size: 13px !important;
}

html:not([dark]) ytd-video-owner-renderer yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
  color: #333 !important;
}

span.ytd-video-view-count-renderer,
ytd-video-primary-info-renderer[has-date-text] #info-text.ytd-video-primary-info-renderer {
  line-height: 24px !important;
  max-height: 24px !important;
  text-align: right !important;
  font-size: 19px !important;
  color: #666 !important;
  white-space: nowrap !important;
  margin-bottom: 2px !important;
}

html[dark] span.ytd-video-view-count-renderer {
  color: var(--yt-spec-text-secondary) !important;
  color: #b2aca2 !important;
}

#sentiment.ytd-video-primary-info-renderer {
  display: none !important;
}

ytd-app ytd-expander.ytd-video-secondary-info-renderer {
  line-height: 14px !important;
  --ytd-expander-collapsed-height: 42px !important;
}
/*subscribe*/
    /*base*/
html ytd-button-renderer.style-destructive[is-paper-button] {
    background:transparent
}
#subscribe-button ytd-button-renderer #button.ytd-button-renderer,
#subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer,
#owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer {
    display: inline-block;
    border: solid 1px transparent;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    border-radius: 2px 0 0 2px;
    box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
    padding: 0 6px 0 4.5px;
    height: 24px;
    text-align:initial;
    min-width:0;
    font-family:roboto;
    z-index:1;
    color:#fefefe;
    margin:0 0 0 4px
}
#subscribe-button ytd-button-renderer yt-formatted-string.ytd-button-renderer {
    display:inline-block;
    overflow:visible;
    margin-left:3px
}
#subscribe-button ytd-button-renderer #button.ytd-button-renderer:before,
#subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer:before,
#owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-right: 4px;
    background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfliTgLqv.webp) -48px -775px;
    background-size: auto;
    width: 16px;
    height: 14px;
}
#subscribe-button .ytd-c4-tabbed-header-renderer :before,
#owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer:before {
    margin-top:1px
}
#notification-preference-button {
    margin-left:-1px
}
    /*RED*/
#subscribe-button ytd-button-renderer #button.ytd-button-renderer, #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer {
    background:red
}
#subscribe-button ytd-button-renderer #button.ytd-button-renderer:hover, #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer:hover, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer:hover {
    background:#d90a17
}
#subscribe-button ytd-button-renderer #button.ytd-button-renderer:active, #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer:active, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer:active {
    background:#a60812
}
    /*SUBBED REDS LIGHT*/
#subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed], #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:hover, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:hover, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed] {
    border: 1px solid #ccc;
    background: #f8f8f8;
    color: #666;
    font-weight:400;
    padding-right:8px
}
#subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:active, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:active {
    background:#ededed
}
#subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:before, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:before {
    background-position: -99px -147px;
    margin-right:3px
}
#subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:hover:before, #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:hover:before {
    background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflEXP50f.png) -24px -696px;
}
    /*SUBBED REDS DARK*/
html[dark] #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed], html[dark] #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:hover, html[dark] #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:hover{
    color: #ccc ;
    background-color: #212121 ;
    border: 1px solid #51515151;
}
html[dark] #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:active, html[dark] #owner-container ytd-subscribe-button-renderer tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:active {
    background:#111
}
    /*BELL*/
html ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer {
  height: 24px;
  width: 28px;
  padding: 0;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
  border: 1px solid #d3d3d3;
  background-color: #f8f8f8;
}
html ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer:hover {
    border-color: #c6c6c6;
    background: #f0f0f0;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
}
html ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer:active {
    border-color: #c6c6c6;
    background: #e9e9e9;
    box-shadow: inset 0 1px 0 #ddd;
}
#notification-preference-button button.yt-icon-button {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflgGT3Hj.png) -106px -122px;
  width: 18px;
  height: 18px;
  left: 4px;
  position: relative;
  top: 2px;
  opacity: 0.5;
}
#notification-preference-button:hover button.yt-icon-button {
    opacity:.6
}
#notification-preference-button:active button.yt-icon-button {
    opacity:1
}
html[dark] #notification-preference-button #button.ytd-subscription-notification-toggle-button-renderer,
ytd-subscription-notification-toggle-button-renderer.style-text[is-icon-button] {
  background-image: linear-gradient(to top, #1c1c1c, #1c1c1c 100%);
  box-shadow: none;
  border-color: #333;
}
    /*MINI*/
.style-scope.ytd-item-section-renderer tp-yt-paper-button.ytd-subscribe-button-renderer {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  color: #333;
  height: 20px;
  border-radius: 2px;
  padding: 0 6px 0 8px;
  font-size: 11px;
  font-weight: 500;
}

.style-scope.ytd-item-section-renderer ytd-subscribe-button-renderer {
  position: relative;
  top: -25px;
  left: -4px;
}
#upload-info > #owner-sub-count {
  position: absolute !important;
  margin-left: 150px;
  top: 22px;
}
#owner-sub-count.ytd-video-owner-renderer {
  font-size: 11px !important;
  letter-spacing: 0 !important;
  color: #737373;
  height: 22px !important;
  line-height: 24px !important;
  border: 1px solid #ccc;
  border-left-width: 0 !important;
  padding: 0 6px 0 11px !important;
  border-radius: 2px !important;
  text-align: center !important;
  max-width: 28px !important;
  overflow: hidden !important;
  left: -7px;
  position: relative !important;
}
#channel-name.ytd-video-owner-renderer {
  top: 0 !important;
  position: relative;
}

ytd-app #subscribe-button.ytd-video-secondary-info-renderer {
  position: absolute;
  left: 54px;
  top: 14px;
  margin-bottom: 0;
  flex-direction: row;
}

#rsd-description-entry ytd-video-owner-renderer.ytd-video-secondary-info-renderer {
  max-width: 360px;
}

#top-row.ytd-video-secondary-info-renderer,
.ytd-video-primary-info-renderer {
  position: relative;
}

#info ytd-video-owner-renderer {
  top: -24px !important;
  position: relative;
  padding-bottom: 7px !important;
  border-bottom: 1px solid #e5e5e5 !important;
}

#info {
  top: 4px !important;
}

html[dark] #info ytd-video-owner-renderer {
  border-bottom: 1px solid var(--yt-spec-10-percent-layer) !important;
}

html[dark] #owner-sub-count.ytd-video-owner-renderer {
  border: 1px solid #333;
}

ytd-video-primary-info-renderer[has-date-text] #info-text.ytd-video-primary-info-renderer {
  overflow: visible !important;
}

#info.ytd-video-primary-info-renderer {
  height: 24px !important;
  position: relative;
  bottom: 0;
  z-index: 99;
}

#info ytd-video-primary-info-renderer[has-date-text] #info-text.ytd-video-primary-info-renderer {
  right: 0;
  position: absolute;
  top: -30px;
}

ytd-toggle-button-renderer.force-icon-button a.ytd-toggle-button-renderer {
  margin-left: 8px;
  padding-right: 1px !important;
}

#analytics-button.ytd-video-owner-renderer,
#purchase-button.ytd-video-owner-renderer,
#sponsor-button.ytd-video-owner-renderer {
  display: none !important;
}

#info ytd-toggle-button-renderer.style-text[is-icon-button] {
  position: absolute !important;
  top: -40px;
  left: 0;
}

#info ytd-toggle-button-renderer.style-text[is-icon-button]:last-of-type {
  left: 80px;
}

.style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default:nth-of-type(2) {
  order: 1 !important;
}
.style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default:nth-of-type(1) {
  order: 2 !important;
}
[lang*=en] #info #menu ytd-button-renderer:nth-of-type(2) yt-formatted-string.ytd-button-renderer {
  font-size: 0 !important;
}
[lang*=en] #info #menu ytd-button-renderer:nth-of-type(2) yt-formatted-string.ytd-button-renderer::after {
  content: "Add to";
  font-size: 11px !important;
  margin-right: 6px !important;
}
#info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(3) yt-formatted-string.ytd-button-renderer,
#info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(4) yt-formatted-string.ytd-button-renderer {
  font-size: 11px !important;
}
#info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(3) yt-formatted-string::after,
#top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(4) yt-formatted-string.ytd-button-renderer::after {
  content: none !important;
}
[lang*=en] #info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(5):nth-last-child(2) yt-formatted-string.ytd-button-renderer,
[lang*=en] #info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(6):nth-last-child(2) yt-formatted-string.ytd-button-renderer.ytd-button-renderer {
  font-size: 0 !important;
}
[lang*=en] #top-level-buttons-computed .ytd-menu-renderer:nth-child(5):nth-last-child(2) yt-formatted-string.ytd-button-renderer::after,
[lang*=en] #top-level-buttons-computed .ytd-menu-renderer:nth-child(6):nth-last-child(2) yt-formatted-string.ytd-button-renderer::after {
  content: "Add to";
  font-size: 11px !important;
}
#info #menu ytd-button-renderer.ytd-menu-renderer[has-no-text] {
  order: 2 !important;
  margin-right: 5px !important;
}
#info #top-row.ytd-video-secondary-info-renderer {
  margin-bottom: 0 !important;
  bottom: 3px;
}
#info ytd-menu-renderer.ytd-video-primary-info-renderer {
  padding-bottom: 14px;
}
#info #sentiment.ytd-video-primary-info-renderer,
#info .ryd-tooltip {
  min-width: 160px;
  top: -34px !important;
}

#info .top-level-buttons.ytd-menu-renderer {
  border: 1px solid #ccc;
}

#info #return-youtube-dislike-bar-container,
#info #ryd-bar-container {
  min-width: 160px;
}

#info .ryd-tooltip-bar-container {
  padding-bottom: 0 !important;
}

#info #top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(2) yt-icon-button {
  padding-left: 0 !important;
  width: 24px !important;
}

ytd-toggle-button-renderer.style-default-active[is-icon-button] {
  order: 3 !important;
  position: unset !important;
}

.super-title.ytd-video-primary-info-renderer {
  font-size: 11px !important;
}

#search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox {
  color: transparent !important;
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vfl44vgwb.png) -647px -24px;
  background-size: auto;
  width: 15px !important;
  height: 15px !important;
  opacity: 0.6 !important;
}

#playlist[playlist-type=RDMM] #index-container.ytd-playlist-panel-video-renderer {
  display: none !important;
}

#playlist[playlist-type=RDMM] #thumbnail-container.ytd-playlist-panel-video-renderer {
  margin-left: 16px !important;
}

#playlist[playlist-type=RDMM] #header-contents.ytd-playlist-panel-renderer,
#playlist[playlist-type=RDMM] #header-top-row.ytd-playlist-panel-renderer {
  margin-bottom: 3px !important;
  border: 0 !important;
}

#playlist[playlist-type=RDMM] #header-description.ytd-playlist-panel-renderer::before {
  float: left;
  margin-right: 10px;
  margin-top: 4px;
  overflow: hidden;
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl-Nn88d.png) -200px -134px;
  background-size: auto;
  width: 24px;
  height: 24px;
  content: "";
}

ytd-settings-sidebar-renderer ytd-compact-link-renderer[compact-link-style]:hover {
  background: #444;
}

html[dark] ytd-app yt-chip-cloud-chip-renderer[chip-style=STYLE_DEFAULT][selected],
html[dark] ytd-app yt-chip-cloud-chip-renderer[chip-style=STYLE_HOME_FILTER][selected],
ytd-compact-link-renderer[compact-link-style][active] #label,
ytd-settings-sidebar-renderer ytd-compact-link-renderer[compact-link-style]:hover #label {
  color: #fff;
}

ytd-compact-link-renderer[compact-link-style][active]:hover,
ytd-settings-sidebar-renderer ytd-compact-link-renderer[compact-link-style][active] {
  background: var(--oldcolor);
}

#title.ytd-settings-sidebar-renderer {
  padding: 5px 0 12px;
  font-size: 16px;
  color: #222;
  text-transform: none;
}

#upload-info.ytd-video-owner-renderer {
  flex-basis: 0;
  justify-content: initial;
}

.ytd-video-secondary-info-renderer #avatar.ytd-video-owner-renderer {
  margin-right: 10px;
}

#meta .ytd-video-secondary-info-renderer tp-yt-paper-button.ytd-expander yt-formatted-string {
  font: 500 11px roboto !important;
  color: #767676;
  margin-top: 4px;
}

html:not([dark]) .title.ytd-video-primary-info-renderer {
    color: black;
}

.title.ytd-video-primary-info-renderer,
.super-title.ytd-video-primary-info-renderer {
    line-height: normal !important;
    top: 2px;
}

html[dark] #info-strings.ytd-video-primary-info-renderer,
html[dark] #meta .ytd-video-secondary-info-renderer tp-yt-paper-button.ytd-expander:hover yt-formatted-string {
  color: #ddd !important;
}


html:not([dark]) .ytd-watch-next-secondary-results-renderer [class*=ytd-compact-]:hover span:not(.ytd-badge-supported-renderer),
ytd-video-secondary-info-renderer:hover a.yt-simple-endpoint.yt-formatted-string {
  color: #167ac6;
}
#header.ytd-browse ytd-button-renderer:nth-of-type(1) #button.ytd-button-renderer, ytd-button-renderer.style-primary:nth-of-type(1)
{

}
#input-panel yt-live-chat-message-input-renderer {
  padding: 4px 12px;
}

iron-pages#panel-pages.yt-live-chat-renderer {
  overflow: hidden;
}

ytd-expander.ytd-video-secondary-info-renderer:not([collapsed]) ytd-metadata-row-container-renderer {
  display: inline-block;
  width: 25.2%;
}

ytd-expander.ytd-video-secondary-info-renderer:not([collapsed]) #content {
  display: inline-block;
  width: 74.4%;
  vertical-align: top;
}

ytd-expander.ytd-video-secondary-info-renderer:not([collapsed]) {
  display: inline-block;
}

ytd-expander.ytd-video-secondary-info-renderer ytd-metadata-row-container-renderer ytd-metadata-row-header-renderer ytd-expander.ytd-video-secondary-info-renderer #content {
  width: 80% !important;
}

ytd-expander.ytd-video-secondary-info-renderer ytd-metadata-row-container-renderer #title.ytd-metadata-row-renderer {
  width: 50px;
}

#meta #contents.ytd-rich-metadata-row-renderer .ytd-rich-metadata-row-renderer:last-child {
  visibility: hidden !important;
  height: 0;
}

#meta #contents.ytd-rich-metadata-row-renderer .ytd-rich-metadata-row-renderer {
  margin: 0;
}

ytd-expander.ytd-video-secondary-info-renderer ytd-rich-metadata-renderer {
  background: 0 0;
  max-width: 100%;
  min-width: 100px;
  flex: initial;
}

ytd-expander.ytd-video-secondary-info-renderer a.ytd-rich-metadata-renderer #title.ytd-rich-metadata-renderer {
  font: 500 12px roboto;
}

#meta #contents.ytd-rich-metadata-row-renderer {
  margin-right: 0;
}

ytd-rich-metadata-renderer[component-style=RICH_METADATA_RENDERER_STYLE_BOX_ART] #thumbnail.ytd-rich-metadata-renderer {
  margin-right: 10px;
}

ytd-rich-metadata-renderer[component-style=RICH_METADATA_RENDERER_STYLE_BOX_ART] #text-container.ytd-rich-metadata-renderer {
  display: block;
}

ytd-rich-metadata-renderer[component-style=RICH_METADATA_RENDERER_STYLE_BOX_ART] #call-to-action.ytd-rich-metadata-renderer {
  font-size: 11px;
  color: #999;
}

ytd-expander:hover ytd-rich-metadata-renderer[component-style=RICH_METADATA_RENDERER_STYLE_BOX_ART] #call-to-action.ytd-rich-metadata-renderer {
  color: #167ac6;
}

ytd-expander.ytd-video-secondary-info-renderer:not([collapsed]) ytd-rich-metadata-row-renderer {
  margin-top: 0;
}

ytd-topbar-menu-button-renderer:nth-last-child(3) {
  display: none !important;
}

#share yt-button-renderer #button.yt-button-renderer.style-primary[aria-disabled=true] {
  opacity: 0.5;
}

#share yt-button-renderer #button.yt-button-renderer.style-primary,
#sync-container #sync-button.ytd-macro-markers-list-renderer,
yt-button-renderer #button.yt-button-renderer.style-blue-text,
ytcp-button[type=filled],
ytd-button-renderer #button.ytd-button-renderer.style-blue-text {
  background: #1b7fcc;
  border-radius: 0;
  height: 28px;
  padding: 0 10px;
  border: 1px solid #1b7fcc;
  color: #fff;
  font: bold 11px roboto;
}

yt-button-renderer #button.yt-button-renderer.style-blue-text yt-formatted-string,
ytd-button-renderer #button.ytd-button-renderer.style-blue-text yt-formatted-string {
  color: #fff;
  font: bold 11px roboto;
}

#share yt-button-renderer #button.yt-button-renderer.style-primary:hover,
#sync-container #sync-button.ytd-macro-markers-list-renderer:hover,
yt-button-renderer #button.yt-button-renderer.style-blue-text:hover,
ytd-button-renderer #button.ytd-button-renderer.style-blue-text:hover {
  background: #126db3;
}

#share yt-button-renderer #button.yt-button-renderer.style-primary:active,
#sync-container #sync-button.ytd-macro-markers-list-renderer:active,
yt-button-renderer #button.yt-button-renderer.style-blue-text:active,
ytd-button-renderer #button.ytd-button-renderer.style-blue-text:active {
  background: #095b99;
  box-shadow: inset 0 1px 0 rgb(0 0 0/50%);
}

#cancel yt-button-renderer #button.yt-button-renderer.style-blue-text,
yt-button-renderer#cancel-button #button.yt-button-renderer.style-text,
ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text {
  background: #f8f8f8;
  border: 1px solid #d3d3d3;
  box-shadow: 0 1px 0 rgb(0 0 0/5%);
  padding: 0 10px;
  height: 28px;
  font: 500 11px roboto;
  color: #333;
}

#cancel yt-button-renderer #button.yt-button-renderer.style-blue-text yt-formatted-string {
  color: #333;
  font-weight: 500;
}

#cancel yt-button-renderer #button.yt-button-renderer.style-blue-text:hover,
yt-button-renderer#cancel-button #button.yt-button-renderer.style-text:hover,
ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text:hover {
  border-color: #c6c6c6;
  background: #f0f0f0;
  box-shadow: 0 1px 0 rgb(0 0 0/10%);
}

#cancel yt-button-renderer #button.yt-button-renderer.style-blue-text:active,
yt-button-renderer#cancel-button #button.yt-button-renderer.style-text:active,
ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text:active {
  border-color: #c6c6c6;
  background: #e9e9e9;
  box-shadow: inset 0 1px 0#ddd;
}

html[dark] #cancel yt-button-renderer #button.yt-button-renderer.style-blue-text,
html[dark] yt-button-renderer#cancel-button #button.yt-button-renderer.style-text,
html[dark] ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text {
  background: rgba(0, 0, 0, 0.2);
  border-color: #444;
  color: #999;
}

html[dark] #cancel yt-button-renderer #button.yt-button-renderer.style-blue-text:active,
html[dark] #cancel yt-button-renderer #button.yt-button-renderer.style-blue-text:hover,
html[dark] yt-button-renderer#cancel-button #button.yt-button-renderer.style-text:active,
html[dark] yt-button-renderer#cancel-button #button.yt-button-renderer.style-text:hover,
html[dark] ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text:active,
html[dark] ytd-button-renderer #cancel-button #button.ytd-button-renderer.style-text:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: #444;
}

.badge-style-type-collection.ytd-badge-supported-renderer {
  padding: 0;
}

#hover-overlays #play,
ytd-thumbnail-overlay-inline-unplayable-renderer {
  display: none;
}

html #subscribe-button [href*="https://studio.youtube.com"] #button.ytd-button-renderer {
  border: 1px solid #d3d3d3;
  background: #f8f8f8;

  font: 500 11px roboto;


  width: auto;
}

html #subscribe-button [href*="https://studio.youtube.com"] #button.ytd-button-renderer:hover {
  border-color: #c6c6c6;
  background: #f0f0f0;
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
}
html #subscribe-button [href*="https://studio.youtube.com"] #button.ytd-button-renderer:active {
  border-color: #c6c6c6;
    background: #e9e9e9;
    box-shadow: inset 0 1px 0 #ddd;
}
#subscribe-button ytd-button-renderer.style-primary:nth-of-type(1) {
  width: unset !important;
  background: 0 0 !important;
}

html #subscribe-button [href*="https://studio.youtube.com"] #button.ytd-button-renderer yt-formatted-string {
  color: #333;
  line-height: 2em;
  width: auto;
  height: 22px;
}

html #subscribe-button ytd-button-renderer [href*="https://studio.youtube.com"] #button.ytd-button-renderer::before {
  content: "";
  display: inline-block;

  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflEXP50f.png) 0 -852px;
  background-size: auto;
  width: 16px;
  height: 16px;

}

.ytfix_line::after {
  content: "";
  position: absolute;
  display: inline-block;
  left: 560px;
  top: 300px;
  width: 390px;
  height: 190px;
  background-size: 100%;
}

.ytfix_line:nth-child(5):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940082994146848848/opt1.png);
}

.ytfix_line:nth-child(6):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940082994755018802/opt3.png);
}

.ytfix_line:nth-child(7):hover::after {
  background: url(https://cdn.discordapp.com/attachments/833495457111867423/945334500001460244/Screenshot_20220221_065934.png);
}

.ytfix_line:nth-child(8):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940082994973139006/opt4.png);
}

.ytfix_line:nth-child(9):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940082995195412540/opt5.png);
}

.ytfix_line:nth-child(10):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940082995388370984/opt6.png);
  width: 290px;
}

.ytfix_line:nth-child(11):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083055509512192/opt8.png);
}

.ytfix_line:nth-child(12):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083055845081138/opt9.png);
}

.ytfix_line:nth-child(13):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083056067366942/opt10.png);
}

.ytfix_line:nth-child(14):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083056319021087/opt11.png);
}

.ytfix_line:nth-child(15):hover::after,
.ytfix_line:nth-child(16):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083056579084388/opt12.png);
}

.ytfix_line:nth-child(17):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083056813936711/opt13.png);
  background-size: 100%;
}

.ytfix_line:nth-child(18):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083055006208011/opt14.png);
}

.ytfix_line:nth-child(19):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083070621614130/opt15.png);
}

.ytfix_line:nth-child(20):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083070957125712/opt16.png);
}

.ytfix_line:nth-child(21):hover::after {
  background: url(https://cdn.discordapp.com/attachments/336628093483614210/940083070156042281/opt17.png);
}

.ytfix_line:nth-child(23):hover::after {
  background: url(https://i.imgur.com/jdXHWX5.png);
  background-size: 100%;
}

.ytfix_line:nth-child(26):hover::after {
  background: url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAC+CAIAAAC+vD/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDUgNzkuMTY0NTkwLCAyMDIwLzEyLzA5LTExOjU3OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTI4VDE3OjQyOjUzLTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMi0yOFQxNzo1MDozMi0wODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0yOFQxNzo1MDozMi0wODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NmE5NjE2MGYtNDZkNi00ZTQxLWI3MWItZTBjNTA2ODczOTJhIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZhOTYxNjBmLTQ2ZDYtNGU0MS1iNzFiLWUwYzUwNjg3MzkyYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZhOTYxNjBmLTQ2ZDYtNGU0MS1iNzFiLWUwYzUwNjg3MzkyYSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmE5NjE2MGYtNDZkNi00ZTQxLWI3MWItZTBjNTA2ODczOTJhIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTI4VDE3OjQyOjUzLTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RjYYgQAAcJhJREFUeJztvVl7G0mSJWrusSOw7yC4k6L2VGZl15LV3TW37rz07cf7Q+833zzMw0w9TE13V1dVpipT+0ZS3AFiXwKI3f0+GBCEQIqiRIqksuJUfioJCHh4BOAnzMzNjhHOOYQIESLE9QC96gmECBEixBFCSgoRIsQ1QkhJIUKEuEYIKSlEiBDXCCElhQgR4hpBvOoJhAgRIgQAgO/7AEDCJIAQXyY4uC53XPA84ByAAwfgnDMGzAcOx17hAByAAAAQwAM448AZ5xwmVwHnJy4KMjor/vkp64YAAAEy+v+j0Y4dQ4CQo1fwn4QSSicmPwalQPGt8cCEjF6hZDQkpSAKRJZBlD560pcIvKchJYX40sBc3+ixTps1m6zZ4n0DHA84B8657zHL5JYNvg+cA2fc97hlc8firgucjdYnIcA5MJ+7LnMd7nnA2Whs5nPf5z4bvTJBDUfn55wB9/gRdZ1w0ASCYyghAiGUEHr8EzgSIQCEiAKlwoiAAIBSIkpUkokojSbP2Ph4SmSZKCqRFSIKIz4SRaKoVFWJKAIAUAKyTBIxIZMm6TRNpgU9BkT4+Pt+SQgdtxBfAjyXNRr+YdWrHbqtuttper2O32mzdpcPTeKNjCDu+dyxuO1wNJQ4A9/njsNdm3sesGOU5Hncc5nvAWfIHJwz7jPOTqCkwK7hnDMAnzM+QTen4IiSACihlEBgBR2ZA2NKIkBAoJQKo0MIIYQQUSSiTARxPHkGjAOM2IrIMpFlwI8QIIJIZIUoMhHGlCSJoEdoMikkk2I8KacyUjov5AtCoUQzGaDXK6AcWkkhrjE4567L2k13d9t98dx5/tTeWLfrVdvo+cxjzOc+I+8QAgfOR17b+IXRi4DLfuJw/OlP//75Cd7U8XkFf3w0TrK7TjgKpokO2epo8sFhI9sKJsmTTHiHZHSlRBAopaIgKfGkmi/JN9bkO/elW7fE2TkaTxJJ+hC1XhJCSgpxXeF7XvXAefPKevyT/fKZs7Xp1muu0fcsy/c8oMAJGUVSjpY5ATK56oPwChwtWn705ujQ4yzxId44z9r90Ho7iRP5iGjfnfxxwj06fvKfnDPwOXBOGCMAgiSLiirG43K+KC+tKHfuqfceyDfWhFwByNVbTCElhbh+8Dw+GPjVA/vF0+EPfx48/N7a2nD7XUYpRCIgiEDOZmuEOIaRYeg6YFoC51Iyra2uRb79VeQffi2v3RHyBRKJgHCVkaYwlhTi2oG12+6bV86TR+azx+b6S6t64LgOEyUuUEIIAQ6M8yNT5TwP1SNL6Ywe1Zkw8gjHu3NHJyNTu2mXD9yv45RySeSMcduC3R1gwLs9dliT730lrtygqdQVzjCkpBDXC9y13cbh8PXz4d/+Yr546tRrnu9y3FdCJ8V1ueNwz7sAAx/9PkEggkhEkVA6ivV+yg4/GTERY8z3wfe574Hvg+8fHSKKRJaJJBEqjj2vK/BRCCEgiEQVOAHGuN3r+JbpGj3XtXVN0dIpKRYlV5cuEFLSlcH3fdu2TdO0bdv3fc45ISM/WhAEWZY1TdM0TXiPFc185nqubduWZbmui2lmlBBCqSAIoiQpsizLsiRJ9JptqbwXnIPv+82GU9kz97cHlV2reegbPRBESilQTgglkkTjCRqJEFW7AO/N98HzuOMwx2aOzVwXGOPAyccaTZxzzgkAoVSQZTraBVNAlkE6WtvMsthwwEyTuw73GcFY2FUAc50IblI6lm+bvkD4QVrY2xFn54RYXEhlQBCuxKALKenKYFnW5ubmq1cvNzc2G82GYzuMMdd1OUA8Hl+Yn79z9+7NmzeLxeJxTnFct9vpVCqVzc3Nzc3NysFBv98nhKiaFo1G05lMsVCYm5+fn5vL5/Oqql7JBX40bJt3Ov72rr+94x8esoHBfZ8TQijhrsN9n8qymEprd7/Sv/mlevM21SLnOp3vg9GD+qG/t2tubQy2Ns3DQ29gcM6oII6Ses4GzhhjPqVUkKRIPKEXS+rcPF1YgtlFKM4g73DOrVfPhz9+P3zyyDnYZaZFJYkoytX6cQAAhHAA7rl+r+dVKt7Wtq/FKFCSSIAsX/50Qkq6Mvi+PxwODw9r6xvrb7e22q32cDAYDoeM82wmc/v2bca5HomoqhqLxURRDIwCz/d7/d5B5eD16zePHz168uTJ1tu3zVaLEppIJorF4tLSEmcsmUx6nne11/hR4I7DWi1WrbDDGu/2wPWIIBJJIpSC53Lb5pQSVZXm5iO/+i76i19dxCkZbG/y50+J7zutptVocN/nzOeEfhRPcM458zkhhBBJ0yKZbHRhGe5/DXe+gkIpOEyIxb1m3dp4A4xx1+GEEEW5gKs4DwhB8iWCSFyXdzv+4SFLZ1ksLmiRkJL+viDLcj6fX11ddT2XiuLW5tuq5w1NkzPm+f5gMDg8PNze3lYVpTw7m0gmxfFz27btZqOxs7u7vb1VPawag4GHxUGEyLKcSiYX5uZWVlYW5udTqZQkXesagklwx/GNvt9p+Z0WNwzuugBAMDmQ0KPEZdsBo88tk6jaeU/ZaUGvywcG2Bb4HnA+Cj9/iuVyFG3njDHfo64Dtv3OBbrOKK189Imrto9wDpQSzER3HNbvs3bL77SFgUE990rmF1LSlQEpiTFGCPE8b2gMOp2uIPQxqGTZdqPR2Nvf16NRTde1SGSSktqtdvXgYH9vv1lvWJZFCJFkWRLEaDSaz+cXFxdXV1fn5+fV94eiriG44zCjz9pt1m4zw+COc8QRVADMXXZdaNZh4zWRJYglgRLAtGxBAFmBiA7ROET1o2IuxsB1wLLAHMJwCJY5oh7OwPOg14HDCtnZgloVBgNgPlAKBM4T4uGcc8a474PnAXKQIIxed10eUNJ14CMI6ukIcM4dm/X7frvl4/13nZCS/r5AKdV1vVAo+J7fbrcrB5WDg4NeTwYAztlgMKgdHmqRiB6NZjKZXC4XiYxCJ77n9Xu9+mHtsFJpNBrmcEgJiWiaHonkstlSqVSamSnk89FY7Eqv7+PhONzo++2232mzgQGuCwCABWGiQIgCgsAty93dHnLOtzZpRAdKwbHBdYkkkXhSmJunKzeFxWUSG1OS78PAgEadVQ/8g32vVmGGAZ7LgRPOuWlCv+u1W2arZXfavutyQjhQHpSAvkscE2VtI4wO+NR9M+SvIF9gFHUm5KyRe845AGeMB4XH44SGUQ7oWYYapXqPHwmdNuu0eXD/Lx0hJV0xdF0vFAtzc3OVykG9Xnccp9frcs6NvuG5LgBEo9GZUml+bi6ZTOJHLMvqdLv1RqNWq7VaLcaYqqrxeDyXyy0sLMzOzmazWV3Xr/KqPgGcc9dhhsG6bdZts4HBPRcAgFJcp1wQCYBvW8P9Pbt2SCWREwqEENcF2xIkScoV1K++iYiSli8KsfhoWOaDOYRG3X27Pnj+1Fh/ZdUOmWUCECJJBDj4Pvc85vu+7wPnI6NyvKKn5kjwnWM79/xjzQnMruaMcE6m/MQgOeB0KhnP4YQR3j1uIuH7hGMIAFA6SqNy7BElddtsaPArCkSGlHTFIIToup7P5xcXlwzDoJTs7++32x3DMAYDg1KazeWQehLJpCIrlm212+12u93t9XqGMRgORUGIRqOJRKJUKs3OzhYKhXgi8b4QEufccRzP8zjnlFJRFCVJuha50Jxzz2XW0De6vtHl1hB8D8RRKSkQilzAfd9zHMf3gTHGfAAgnge2JYqi7LpkpiwPDO57k8OC74NtsUHfaTfNWnWwv+8NDEKpqGqiJEqCIFKKt4BgJiahjBCPgw/cZZxxzjinAAKASEACECilhODrHoAP4AA/S20c59z3mec6nmWxgUk9V5ZlORqVVU0QBfCZZ5mu4zie7wL4AJxMm0wj840x7nnE9wUCkiQrEU3WIoKigCCA73PPZY7j27Zr267jOr7vAwGBEkEkwlhgYJJVcXjGue9xc8CMLjP63DJDSvr7BaU0nU6vrKwwxgihnucPh2an07Ft2xgMer1eo9HYPzjQIhFd13u93t7+frPZHA6HmI5EKRUlKZ5IlGZm5ubnSzMzsVhMGAeefN93bHs4HBqDgWEYg8HANE3XdRljVBBkSdJUVdf1aCym63okEpFl+Xj4iTPmM+a5ruu6juvieQNSk2VZURRJkjDaxTn3fd8dw/M83/cZYwAgiqKiKKqqKopyPLOBM5/Zlm8OfXPIbItTAiAcrcegVl4QBEHgnBP0rTwPCKGiSBWVygo5nk2DEVxBpJJMZYXKMnFkKghSNBpJJCKJhBaLj9YzIcABmO/bttXvD3s9v9f1TJMxJsiyFI1FUiktkVSjOiWUcebZjjscOIZh9jp23/A5g5Ocu6MvmnOJElVRSCIF8biczUVmZvV0Wo3GJVkC13OMvtVqDFvNYafjDAae53IOEKgCcE6YTzlQSokeEbWIGE9oqUwknY4kEmIkCpIAns9tyzdNd2DYRt/s9S2j5wwGrmUxx+G+z32fEDLaNMCbw0d+G/c95jPPHPrWkNk2Z/6JV/G5EVLS1YNSGo/HMafRtu1Go3FwcDDat/F9y7La7fb+wQGlVNXUbre3vb1da9SHwyHyAgDIspzJZOYXFm6srS0tLmqaRgjxfb/f6x0eHu7u7r7d2trb3W02m8Zg4Ps+BiAIpZQQgdJoNJrNZGbn5pYWF2fn5nK5XCwWEyfsLNu2u91utVrd3dl5u7W1f3DQbDZd19V1fWZmZmlpaXV1dXFxMZvNUkodx2m1WvsH+7s7u3sH+/VardVsGYZBKc3n8zdv3vzqq6/W1tZix0JdnPnMdXzb9m2beS4XRz7U9P0ah0mQpMhYw2y8N3eSxTfeRyOUAufguUAp1TSpPKfdvK3fuElnZiGWAFEE34d+jx3swfor59ULalvQaVPHEZWMUp7Vvv4H/cEvlLl5TGrlva6/tcnWX5nrL43dXdPo+wDc99n4ewF4x8NSJElIJqPLq2x2HkplevuetLgiKoogy0ApMKa6jri3K798qjx9bG2+sZoNx3FdYD4hACBwLnGuiJKSSspzC/LaHXHttjg7JyZSgqyAJAKlwDjxPep5ouvKlhlpNbyDPWf77WBzc7C7ZTUbvmUSIFSWSfDgGd8x5jOf+b5t+47NPPfvgpJc17Vt27Zt13WD8OHn8xqC5xUmQ6uqKsvy9UxlFkUxFosVi8VarZbJZGKxmKZpjDFKqeu63W63Wqm4tk0E2uv3q9VqvVYzzSEAyLKkaVosFsvlsjOlUnlmBpf6cDA4qFTebmy8fP16482bt1tb1cPDXrc7NE3GWEBJBEAQBD0SicfjxWJxcXFxdfXGzZtry8vLxVLpKKCOSQnV6utXr3589OjFy5d7e3umaaZSqVu3bhmGoWlaLpfLZDIA4Hle3zAOKpUXL1+8ePly6+3b/b39VqsliuLi4qJpmrlcbnFx8YS7wPErY5yfYmqcG4yB7wGXQBRJIinMzgu375MbtyAxLuzqd8n6S8EySbUCokhcFxybEhCTKXF5VfyH39DyHGAUxraEWBwch7bqXqPhDgcs+NUdUdJIHA4IEYsz4i9/A7fugBaB8gLMn3ATxKVVIZ2RFFWRJHFrw2g03OHAtyzOgWiamExHSuXoyg3l7lfS/QewdAPS2ROvkgCIAKLnKrVqZGtDefJIefzjcOONXTt0LdPnnKNE1Dskzkf3fxQvvxpcKiWZptloNJrNZr/fd12XUioIwuejJN/30a9RVTWdTudyuVQqdT0pCRGNRtPpdLFYKJVKhmE0m01KqWVZrWaTALRbTZ8xwzBa7Xan0xkOh6IoJhKJVCpdLs+Uy+VcLheN6gBgmubm27ePHj366aefXrx4Ua1WB4MBIURWFEVVKaWUUnzOM8YYY5zzbq/X6XZ39/Y2377dP9jvdLv3PW9ubg4NLjrylgQqCKIgSJIkSZLv++isCQJGV0bfYxAAEQRBFEX07NAflCTps37jZ8XYD4Lxhj2ZDD/5Hvd83AibDDNzzrnPYDLC4rng+8B85KCTFzE7oiTIFSCRBN8DxoAKMByAJIMgwmRiZkQn5XlpOAQgriQKQMneDpgmJURMJqWlG8o//Fr5xS+l1TUoFEFSJk80kqkjAKI0MoJECWbmSDSuxRJKKh3L5QdvXvX2dobtlmNbnHMqiGTaT79iaZBLpSTf903T7PV6nU7HcRyMRHy+HyhGMXCvXVGURCJxzZVYRFGMx+PFmZmFpYZt21Sg/b5hmuZhrWb0+5Is+Z5v2dZgMLRsGwAkSUokEuXyzNLy8uzcXDqdBoBur1c5OHj+4sWzZ89ev3mzv7/f6XaB8VQqWS6Xy7NzMzOlbDaraZppmrVabXd3d3d3d39/v9ftDYdDIKBpmh6NqpomiGKhUIhoGh2TiyiKkozMpgIAGp7HiSbgI0mSFEXB4wVBwJDT+1iJce5z5jLmct/jjHNOP7eqGGPg++C54DjgOiDJo7+PuGaCTUYHe9x1jj7uOOC64PunmRWTj8Bu29/b8Xe33P1dt9NmhJJsXlpaVVZuSDOzo1RpKkA8AaUZ6Hd5s8YrVSoICgFJErVEMjo7p63dEu/ch3xxPGYHqvuwv+vubZu1mu04XI/KpRl1cUWZWyCZLMgKxBNk9aagR6kedSVJcF0YGDAcgO8DoUhJfGQjMcKYy5nPr8xQulRKkiQpFov5vq9pmud5weP6M50OYzGUUuQjTdOus4kEAISQeDxeLpeHg6Fru47r2LbT7/UGg4EhSZIkMc59z7Ns2/M8SZIikUgmm11YXMRQTiKR8H3Wbrffvn27sbFxUKkMBwNBEDRVpYQkksm5+flvv/3266+/Xlxc1HV9MBi8efPmhx9+8Fy3025bpimIIqV0MBwcVqs7qRT6j4oso4n0ua0bDtzn3OPM48znnFz14/piMPGT8/Z37f/4o/mnP5pPfrKbDRaLy2u3I//wa8FzJFmGbB5EESgFSQJF4bLMqMApoYIgaZoei0VzeTWXkxJJEjnK8GDNBnv2yP/+z4NHD3s7W6br02xOX7slfPMPijmElRuQLYCqghaBmVnfsvxGjW9vgSiBz95JJQfgAAwYGd//q7r7l0pJmqYVCoV0Os3GT5XP+isP7iqaY+hifL7TnR+U0kQiMcc5MG7bdrvdrtcb3U7Hsizf933GCJoSPvN9XxRFVVXzudzS0vLajbX5uXlFUWzbHvT7zUajUau1m63BYMAYkyRJUeRkMpnNZkul4uzsLAZ9VFU1TXNvby+bzSYSCdM0GWPMZ8PBsN1qtRqNXqdj4X6TKH7WqN8k+JV7DheMI7/PsW2j2zFqtUG95rUd6jNoNdXKPt/ZglQaRAGSaZAVEAWUqUN/kFAqaRElldZyOSmVJro+qS7gDfrDysFwc33wdsOqHfqirEoSOayS7bcQT0IkAqoGWHetapDOQDwJqgoY5g8kxidw5ff/UikJH7bKlZcaXmOIoogpkd1ud393d3d3t91qOc7IWeDoE1HCKZVlORaN5nK5uXIZgz4AQCn1PM+xbddxPNfxPQ8AJFHUNE3XdV3XVUUVJ2rckdciekTXdVVTHdsBAN/zPMdxHcdzXfbug/QSQK6JBPRngA/gEbApdUTJVx1JVbkgEM8jwwH0e2CaEPOBcxBEUDVQVJAUoAJQCoJAJZkqCsG9uckxHdvu9wat1qDTdgdANYfbDgwM6LSh1YBuF2zr6GhZAUlCvnsf81z5/b9USpqMp17mefEJj37iZZ7304CslM1m8/l8LpvtdjqMMd/z8O6hxacoSiqdzhcKxWIxl8sFid1BHcFRkBmNREGURFFC5+udm89HiT6iIAgC7sEFH/2sbvXfIfCmju8sjPKDKB3xTqDtj5QU0UHVQJKx2JgzdhRxn/gGqaJJ6YxanuODvpPqUFVV0lkpX6CFEqQz8K5JBZQCoSfnSVwbXPaOW7fb7fV6pmkGsaTPdzqkP4oGRSyWSCRisdg1990QuDGfSqXyuVyn3XZddzAYOK7reR7aNfFEolwuz8/PF0uleDx+fISpIgNyxFDvqK1PpmK8wz6X5ab9HWL6zh5pD0y8fMRTE5miARlNKFWKhaL+7W+UQslv1JltgSgJakSKRsVkkqSzkM2BHj0a9npv7yAulZIwPnJ4eNjpdC4zCSASieRyOVEUI5HIF0FJnHNFVTOZTGlmptfvW47jep5l27hNqapqLpdbmJ9fXFoqFYuRiXI2zqZDA8GA41yfE36UR2+GuCZArYKpNrxH7x59y0I2J6Qyyv2vJ5RVkM5OqmjTdaJqIEojWd5r+Y1fKiVN1h+giYQpLZ/pdEESAO49f0FuCKU0ommpdLpQLLY7I/i+j1ckS1IqkSgWCjPFYiad1iNH4oohrfzdgVAQ6cRCHj908OH07u+Bdzt8OAB3QvXl+uFSKQkf77quO46DRU+f1XELnvySJKmqquv6F2EiIaggIHcriiKO9bODm4bMrsrytc1H/2Tw8X/XcblcE7yT69SBWhVqVWg3+WDguw5DwZOg5obzYGPbHRje9hbb3gTbBkkmgjjqiDsGv9IdN9SPv1RKwgWWutKWLF8KsHgVMZUzEZS/eb7v+1eYQXLBIAAEiECIAORD2hx/35hoAMkbdf/x3/hPP7gbb9xW3XccnxDO2KiYljFgjAAnhAAHz/ds33ddl3s+wczMyYAjAB3ff3IVTwS0GMKy2xDXBYRQkRKJUI8KQAkjFN5tNB1ihAkecYeGWT0w19/Yr5457RYDAEWhhI629bDShTO0mBgHn1KPEE6OghhHd5gQgVCJCBKlIiX0ih4Kl0pJjuOYpmlZFjpuJ2z0XCjQmiCE4K65pmmqqv7M3JwzYnLH7ZR3L/50HzMmWkmUAOWEArkmth8flVqwz7UDMJZzeyfeHGiNf+gG+p5nOfZgOBwOhq5pEUWRJEWJxuR4Qk5nSDoDySTX9FFJo+O41QO+u81qVW70gXEiikFvW7SSKCGUw5VYSYjLTgKo1+uNRqPX613mjpumael0ulAofElNzT4V/F1Mvgijn/rRHRiF/DkcP/js23BBEhMa3lNVuB+PS18OUyufc+CjPCDOGHCfMEYZp5xj86NPP9G4ypf7HvOBM58zxkcToBNb/hyYD54HbFxnN77Fx0mKECIQKghUAO4xHzgXRUlLpeJLq5Fbt8mte7ByA/KjLil+t2P8+T/4H//gdTu81eSeR1X1WNntFeuCXyolMcYcxxkOh4ZhXGbZLWMsEol4F9If9UsAx58+4wDAAXzGPM9zPdf1PMb5JCURQjnnnud5rud7Hgat0Cxgn8RHMN6ywP1Bz/Nw0Z0FhBIqilSSqCRSQWRjAVY8zcfdgrOecmKFT2o3+gzDddxnAoAkCposR2RJFkWBfvoOCecoK+kx12UeMM9nhHBJ5IoCqgaKAphY73owNGBggDkEz8GakpEgJJ1OdBQFUZMVrqogy1ygHgEQBKJFxExGLJahPA+zCyCP6iWoqorJJMWCEoYFJUemGSZwCpJEJYkKIiFX8/C+VEqSZRnL8WOx2GWW3cqyHI/Hr3/Z7fkx8lJVVYtE1IgmGbLrea7rGoNBu9NtNJv1ev2wVhNEURAE3/fr9Xqz2ex0OoZhmKbFOSeKIsuyFolEIhFV01AGdzLtfjK7EvAx4zrD4bDT7aqaxjlrt9pvt7bW36xvb23Xa/XhYIAJqx+0iAkVqKQIiiYomi8NCQRk9nn231AD13PBdcB1wfNHCTuKRuJJMRbXojGaTHLC5YiuLd9QH3wrLi7T2ERi6pnI9uggMaJr+SJfWJSNHmu2BD2iJpNqJifkC5ArgB4dURLzwbHB8wjz8da7lmX2e2KnoxiG4LqTa0aI6EqhQBeXRaMnK7LLQEillGyeFEo8lye6Dq4bUJLfqLNel9sWMHa8PRS2Scb7TyWZXNFiueyyW1mWsew2ePGzxpKCUwhjfKZzXRNQUYzF44VSabbbGVqW4zhollqmKQjC20hElmXLskulEtbc7u/vv379ev/goNPpmKYlSiKWs8yUy3Pz84ViMRqLUUGYLpPmPHicWJbVarY2325arhNd123bbtTrOzu7W1tb1UrFMAzP8xhjI7mlU37lhBBBElRNiMaEaIwOh8S1AaXmCAA5Dysd073FogrOwXXANGEwgMEA4jaoKggCxOJkdkHrd2VzyGMxYIwWi3T1Nl1Zg0LxSOntjJj4ESr5gvTV17GIxheWeK1KgJNCUbh5ly7fgJkyKNpoK83zwHUJY5QQAoR53rDXcy3L0XS9NBtZXtOGQ6KMOhiTdFpcuy1IspzNRQ92uWlBPE4XV+it++TGGuSKII3XeL+HuQIwHILvAyUgCAAEOMPaSSJKVNGEaEzQo1RVp/IDLg2XnSpJKf2Cmh1+cRAEIZPJ3OCcCpQzZvT7zWbTdRzHdWmvt7+3Zw6HOzs7qKvrOE6v12u3261WyxgMbMcmBERRzGazKysrt2/fnp+fxxIcTogkSYqqyooiiCLaSIIgMM4Nw9ja3mo0GtLjx8C54ziWZVmW5di267r4DPBR7/n0Zw8hRJJIRBdiSSGWpIZBBgyYB/xjyIgQLFKdvCNH/015PZwTnxHPI647au4GAEBAECGdobfv03wRBgZ4HigKxBKQSEJEh8nG3Cd5UkeBISrAu0LgNJWmN25Bvgh3H4A5ACAQ0SGZgmwetHEKPucwHEC7JTTrQrdDLIv5vut5ru/xVks42Fd3t0ipDJRCIgkAkMqAqpF8SbhxW+i1wbZBliGZhlwB0tmjs3fbsPFaePZYePmMHFbAdUdzC2oeKSWSRCNRIZ4UYgmiRT6qBfkFIkwCuKYIko9QHdiyLNM0h8MhGiaO4wSa/JOfooREo1FUVhOAMJ8JlMai0U6367vucDjs9XobGxvB8RgGkkRR1/VkIpFKJucXF+/fu3fnzp3l5eWgmhcojeh6JptFGRNVVQVKGWOWaTY8r91uiaIoSSNpN12PpFMpQRQ9z+v3+p1Op9vt9vt9URSHw6HjOO/NpZJkEo3RZIomU6TXAccC2wPOONAzGklYJ0bfKSvm4HvgedR1CaqyIW0RCp7HBn3WarLaoZDJQSoN8fjITiEEMjlIJMEcQq3KalVWrYAs03yRludHXDA6HwFKKVYso7Q+Y4T5lPlHwekAgwFrt1i/S4DQQolkcpBMT7ex7HX47hZ78dR58dR5u+63G8AYUVVOiO+5TmXffPSQWqa8elOYX6L5Aug6yAoUSpOdvo/gOGBb0KzzNy/9pz85L55Zu1teo8EdG0QJ+ymMqowogCyTaIwkUySZInoUrsh0EC8hizrEOUHG9f2TO+unWB2iKBbyBUVRMtns2o0bW9vb29vbB3t7h7Vas9k0HMd2HOb7giAosqxFo5lMppDPl2dnFxYWFhYXFxcXZ0qlRCIxOaaqaYVisdvp1Gu1drvt2naj2UTVFEII9gWYn18ol8upVEoQaLffr1aqu7u7lm3jDsMHFSCIrNBYXEinhVSathpk0APHApSIFt4vMDmiGALAwbah14NmHaI6KCqYJrSbUD2A6gE0GtDvgesSSkFWiChw2/YOqzZjomXKriMifeQKIEpg29DrQuMQdnfs18/Nt+tOv0eSGeXWXe2BKd24BXoUbAtaDTD6gNIxgsApBc8HzwVzAN0OtJpQP4RIBFJZEARoNeyXz4fPfnJ3tgjjSnkucvuuuHYb8kXQIgAAzIdmg79dN5/8ZD76m/nmpVU7dEyTc061CABw3x/u7zmdlrH+JlIq64vLkcUlYXYOimXI5iGVBkk+ui2WBY0aVPZgb4dtvx1uvja23pr1mm30PddjQcU759z3gHEghCgKjceFVEZIpWk0RiZHuxSM2th8KWVff2+QZTmVSs3NzQmCkE6nV1dXsY2SoiiZdHpmZmZhYSFfLOq6LpxkYAuikMlkksnk3Nzcrdu3KwcHlUqlUa93ul3TskZNkyiVJEnTtGQikcvlSjMzpWIxk81Go9HjQTe0tuYXFghANper3L/fbrcdx+EAkiQmEomZmZnZ2blisajruud5zXarWqlWq9V6vd5qNrFDCbqEc3NzJ2pmEVmiuk4TSZpIUl0n+JRmHMjJtcQjUAqixCn1Hceq7MPf/uo26jSbA0UBy4JeF7odaNbdWs1sHHrmECgVFIVSwhhz+j3DsZ2BIXU7wt4uffITZLIgSWBZ0OlAowp7e/bellk7dF0XkhmlWjH3duTZBdB1sC3otqHZgMOKe1g1TdNjjDHmWNagUWeE0L4B228hk4N4AqjA2y377Ya5/tLb3wXfVzJZ69ljaWkF8kWIxkAUwXOh3WIHe9b2W3N322nUPNPkAESUBEkCAM6YZ5nu0HCaTbuy57zdsAoFMV+EXB5SGYjFQNNBFIGQUY/fThtqVajs+YdVs9UcGIbtuj5nBC26cSUAMIYxeCLJo/sfT9DIRBPzywKyJGFBOUyI6wQsKPE8Dx03dNOCravJ1mkf3LUcbfN7XtBSbTLwTykVBUEURZTXPn2oUSHLxFB4PEr9ixMjjA7Dgpixp4YkiEeecKLBgNVqzuaG+eKJ8eTHwevn9uEBM01CKVHU0zaAsIyLEBAEIopEEEcpPIFwos9GSUCTlhofNanFLXYQRSKKo6ZpnAPzwfe563Hf5b6P/dSIJFJJJihHyxmWa4y0t30ftyNHdqwgECqAMNYYwTbZrstdh3seACdUoJJEUFAtuDTf557HPY/7Hk6VvLspNpJMAk4AvzmRjMJkwiiwBQBAAPh4bh54Hvd9frRDAZMWNvd9blscQIhE1NKcfuuefv8b7dZdaWmZZnOgqaf8GD4TwljSNQVu56M60vGWZx87FBLB+Wd19g2KkYLoR42uKDSXEzxH6LfJwTYoMi7jIOpxyrSAA2OMuw6MlrR/9BalQAUiCESghAqTixx7HIHnccsC3+MYbMIqefwgdogVBEIJMJ8NbM/r8MmYFBUADxAE5CKGxGdZnPng++CjmCwnhIIoEuwdQgjzXA87yiJ3jGdLBJGIAgSdad+V3COCABj/YYz5vuc63GejoNWIrYJDx5F+vHZsdXf8McA5933OfM40UFWSzQpzs8LcLElnQL6iWNKVnDVEiBMgihCNCqWS2G0ru2U3lWW1mmc7LHAxyHsyu4NUKVE6k7sRGInoH6ChAR/iT0EgggAfkmlGEwk+lG5CKP2oqU79c9RK8xzr98hSpoIgSJIeVzI5eaYszc4JhSKZULy5ZISUFOJ6geoxuTDDl9ZosyP53Nrbsftdz3O45wEBEMLo5wUAPU0gQIkgxRJKIq3OL2q37qlLq1KudFV8NApvX8m5Q4R4LwgR01ly7ysxoouZNP3pB3j+lFf3PXPIJQkiES5Kn7FW++cOrBYC1+GmSX1fiESVXFG/+1Xk62+Vu19JC0s0mbwq5QUMb4eUFOL6QY8IkSWSTkE6CbEoUTXhle7Uqr5l+gDMcTnW7xEAGDU+GP8d3llOZOL/PrDKjr2NYeALuZyzgeMfk47adBuRE0Vvx/839ebIL+Pj/3HgQIBzDpRSSijVo6Kmy6UZ7c497R9+rT74hTi/TKNRuGqEO24hri+4Zfqthruz7a6/cl6+sN+8cvZ27XbTNYcMRpUmINBxxHqUsPUuvRzjqRNx4jEf+uBHrZkz1MOdKIx+hncD9nnn2BENYdYt+BwIUM4FIsiaLqez8vy8snZbvnVbWrkhlueEdIbI16KbWUhJIb4AsFbD23rrrb9xdracRs0xep5jM9tipgWui/9xz+WeB67Lg95znANj3PfA97g/3pA6Kv2H8X45B8Y48/jkphWqKXB+xAXHd6uwuH/859QhwSvoZp6siDapn0YJGXU0GkuUjBWyCaWEikApUAIwoeSPoXRRJNiabZxDC6JIJImIEkgSEUUuCiAIRJaoLEuKpiQzcnFGWlyWVteE+QUaJKNfD4SUFOILgedxx+aOw2yLmwN/MGDdLmu3ebfLDIMPh9wcMsvkgyGz7ZEiGvKRZXHb4q4DjAGQo9Ydo8XPuc+45zDX4a4DbKQ9zRljns+ZxyfW/+hzADDSqOY+B38i2ek4JVHM5yCUEiCjHPPJg8bMQimhAsVsplFt81E6ApFkKslUlEdZ7JyNVBIoJbJMVA1klYjCEX+pKo3oJBIhWoRGdKIqJKJBTKPRKI0lxXiSRhNEVYmsfHBn8PIRUlKILxauC8MhN01u29xxOHKK4zDPG/ksnAPzueuB5xyZTscFkhjjzOe+B5PFdyPNKTa9DT8BDsBQnOr9cxyV3U2lPB4HJYTQd0Ta+ISVJAhEEMk463LCSqJEFECUiYT5lkh7lEgikWUiKSDLRJaJJIEsgSIRRQHxWnhnpyCkpBAhQlwjhNW2IUKEuEZ4px1ziBAhQlwtQispRIgQ1wghJYUIEeIaIaSkECFCXCcwdqo+VogQIUJcIkSYkCkIESJEiKtFWHYbIsSXiuPGxM8gwTCkpM+Dyf7uME4Uvv4/l6A0LEh0/lJm/ncGHjQXOQlfNDGFlPQZgEt6qjbqi/iVBFMNfusfOe1TggCnrJMPdC656lt3+vr/KATdZa7JONcQISVdHCYtiy/9t3KSSPPJr79zyBHeHexIc+34KjrlU3AN1t7k3M7JShd4LajuP9WHCps74J/nP8VVgQRNJkJcJDwPHOw074HrjqTaUfsdW9GjpDzWgqKWu+OMDvD9o8JLeNcHxO3RYJP0lL9MfiQYQRRBlt9pwYoq0dhpJ+gKK4ogSaAoEIlANAqa9sUz7M8LjDHbtk3TtG3b87ygN7ooioqiRCIRRVG+3EUdWkkXAazYDuD70GzCwQEcHECzCb0eDAZg22CaYJpgWeA4YFngeUfE5LowHIJtj/hripLgPVwz9ZfJt3CEgI84B0pBUUBRQFWB0tGcJWnEPqoKsjyiIVWFWAxSKSiVYH4eSiXIZmFSj3nqes9780YGSPDAD9YYTDTUvKjTfezcgj5RaJJMTRJOMp0mX8HGR5xz7HYliqIkSYIgnOeKbNve29t78+bN7u6uYRjB7YpGowsLC2tra7Ozs7J82Y0hLwohJV0E8OdlmtBqwd4erK/DxgZUKlCrQbsNhgGWBbYNtg2OM/rP82CkocGn291c2oQBRjYR/idJoz+RpHQd4nFIJGB+Hm7fhjt3YHER8nmQ5aOPT3CT53n9fr/b7RqG4TgOrmTssKTreiwWi0QimqYdb7hkmmav1+v1eoPBwLZtbM8tCIKqqvjBWCymaRp2u5zsQPf5bxP4vt/v99vtdqfT6ff7lmUFyhnHvbnjlBp0dgMARVFisVg6nc7n84lE4pyUtLW19cc//vGHH36o1+t4IkJIPp//9a9/rWlaPp8PKenvEpPGguvC9jb89a/wpz/BDz/AxgaY5ohu4F3n6zpkgQVzQGY8HYoCd+/Cr34F330Hv/wlLC2Bohy3klzXPTw83NjY2NnZabValmXZtk0pjUaj+Xy+XC7Pzc3Nzs4mk8nJSIfv+4eHhy9evNjY2KjVauiJMMZwXS0uLi4uLiI9XeTlnxl4Ua9evdrc3Dw8POz1eugoBYbbJEPhRyZzj5GSML6jaVqhULh58+aDBw+i0eh5wj2MscFgUK/Xd3d3q9UqpRSn5Ps+3vkvOv85pKRzg3Po92FnB/7t3+APf4AffoC9PfiSfxPTsG149QrqdWi1gDGQJFhYAEnio36JI3ie1+v3d3Z2nj9/vre31+l0TNNESioWi2tra47jRKPReDw+uRo9z6tUKg8fPvz+++8PDw8ZY+gfxePx1dVVVVXz+fxUBPezZvZO+owA4Lpuu93e2tp6+vTpzs5Op9PBtsOneF6TthL6fUhJkUhkbm5OluXFxcXzh8llWY5Go6lUynGcwEpKJpPRaFSSpC86vB1S0jmAP8rBAN6+hT//Gf7wB/j3f4dabfSuOJZDDkyk97QJPPmfnwlTC+n4uppMWcCZ+z4MBjAYAOeg66No9+zsVJNFURQ1TYtEIpTSbreLrEQpjcVivV4PABKJxNRqZIx1u91KpbKxsfH69etarSaKIgAQQlzXXVpaikajmUwGx5yY4KUq6riuOxgM2u12tVptNBq2bXPORVEUJhD0QA9iTwjsVI7HJBKJVCqFnumlTf5LREhJ50azCS9fwuPHsLkJhjF6Ecko8NqmcOKKupxl9r6zTMq/TiYlTfaAtm3Y2oLHjyEeh0iElEoAwMeC04qilEql27dvD4fDbrfb7/cdxxEEQVEUALAsazgc2rY96VPYtt1sNnu9nu/7iqIET3hJksrl8tLS0o0bNxYWFlRVnTJJPl8gaYrvBEGIxWKlUmlpaQkA0um053mEEEEQGGOO46DRFGzG4wa8KIqyLMuyjIdh1/JEIrG0tLSwsBCPx7+I7bAz8v6FX0tISecD59BowOvX8OwZ7O6C44xeRz463qb903hn8lv/TMx1Yqhr6tdmGLC/D5ubsLQEN27Au33GKKXJRGJubq5er29sbOA+NK7bbrdbq9Xq9Tp6c0hSnuf1er1ardZoNAaDAS5sAFAUJR6PFwqFYrGYSqU0TcPxAy57X2ZTEN858YCpv0xc4jsfmcqQEkWxUCg8ePCgVCq1223LspA0Hcdpt9u7u7sYzWm32+ilqqoai8WCKFg2m9U0DW+CoiiJRCKfz+dyueBE8G7S1vEJBJP8qG3HycDW5KUdH/OUESZneOLgp+SanQchJZ0PngeWBd3uaGctsMmnCkqCFz8BxxMvL9PFmzyX60K/D+029Hpg26OjJj4himIqlcrlcplMJh6Pa5qG4WrTNGVZrtfrtVqt0+ngfhOu6sPDw0ajMRwO/bEUP4aB5+fni8Vi5KRO0OdZACd+dvLFKYaSZblQKGSzWc/z0OFSFIVSahjG9vb2kydP8O/tdtu2bXRddV0vl8v379//9ttvV1ZWdF33fd9xHDqGMG4K8r7JXFRuN4z7x55yulNGuCpTLqSk88GyoNeDVgva7WCVXjCOs9slGE0nju/70O1CqwXdLpgmMAbjX/yk+4a2QD6f73a7nU4H6ca2bVy6zWYzn89HIhHP8waDQafT6fV6juMEz2RVVTOZTLFYTKfTgYkE766uKRxfP1OP949djZN/x0hQsKeOI8uyLEkSemeiKAZzQ69NmgAmNExeyEUhiF7BOPvpwk9xIqZ2Gy58/JCSzofhEPr9UebRFNBN+2RnDUEpCONWOUG29+T4lwnOYTiETgd6PTBN8H04RhOEEAy+LCwsGIaBJhIGfYfDYbPZrNfrc3NziqLYtt3pdA4PD2u1GjpuuK50XS+VSouLi+VyOTruB42+z3A4tCwLk54wfINkJEkSZi1rmhYEyCdmzX3fd13XcRzMMAjewtxFRVFkWcaPeJ5n23aQFR1kOWJ4SFEUHP94VBve9cVwZNyY45xbloUzn8whQPJSVRUtLwDwfd+yLNM08RqDAXGSmKgV3Ofj3w9mS2AKGACgEYpPBcdxRFGMx+PpdDqdTsfjcbyQ98H3/Waz2Wq1er2eaZoYrQ/OomlaPB5PJpPJZDKY0kUhpKRzwPdhOATTHKU+TuFE3+2jQAik0zAzA8kkOA7U63BwAKZ5ND5MuHXnP90UOD+ZUm17lIDueSBJEIRyxvSkqmoqlcrn8wcHB7VaLVi0rusahtHv903T9DzPdd1+v99oNFqtFlpSMP65p9PpYrGYy+WCdKRer1epVPb29iqVSqvVchwHY0/Bdng2m52dnZ2dnc1kMlMmCZpjrVYLg1n2hDGL5yqVSoVCAf2pwWCwv79frVYNw0CWZIyJohiJRDKZTKFQyOVyiqLgVprruhjenoxV+RNwXZdS2m63cUwMpeGAgiDgmLOzs6VSKdgE2Nvb297ebjQajuMAgO/7mJaNuV0LCwuyLKP3NxmJD/gRczv39vYcx1lfX3/x4sX+/n6327VtW5blTCYzNze3uLi4sLAwMzOTSCSmiMnzPMdxWq3W/v7+1tbW3t5evV4fDAZ4mfhVSpIU3Lf5+fm5ublisYgPgwsxmj4jJZ0SU3zfi6e8fuKYgX9+rol+Mmwb+n3o98E0P5xw+GlIpeD+fbh3D6JRaLVgawu2t2FnB5pNMAxw3fe6dRdIT1OsZNswGEC/D4MBqOpxnYNIJFIsFhcWFg4PD3d3d4MkZsdxOp1Os9nsdrvJZNKyLAx7YywJAHDTLZvNzszMzMzMoImEwfLnz5+/ffu2Uql0Oh1cIWgooTGC5gOut+Xl5Vu3bi0sLMRisfF87Vqt9vr166dPn25vb3e7XYy7+74fj8fv3Lnz3XffZbNZpKRGo/Hw4cOHDx9WKhXP8yRJwt1AzHK8f/8+JqAHruJkrHdyQeLPknNumma1Wn3+/Pnz58+3t7c7nQ6mNWFawI0bN37961+n02mkpMFg8OrVq3/7t39bX18fDod4dkEQMpnMrVu3vvnmG3SK0SVENkGbC//JOT88PPzrX//69OnTdru9ubm5v78/GAzQ4MKTRiKRUql09+7dX//611999VUqlZr8qhuNxvPnz588efLmzZuDg4Ner4dPi8AmBYDADk0kEgsLC19//fWDBw8WFxczmcw5U8Y9BiL9bJTk+363222322iTT6WWTfLOR3ETvoi/J1EUY7FYJpNJJBLC5fcRZgxME/r9kRcTUNKk2XJO34pzEEXI5eD+fXjwABQFmk14/Rq+/x6+/x5evID9fZhKcpmMhZ+flaZylBC+D7YNwyEMh5BO4xknH46qqqbT6ZmZmXw+H41Gg1CL4zi9Xq/RaDSbzWQyaRhGUEfiuq6maZgYOTMzUywWY7EY57zRaPzwww///u///vDhw52dHcuycF1NMgICHaJkMnnz5s1//Md//M1vfnPz5k1d1wkhuLW3vb39008/PX36tNlsBluBGLdeXl4OvJJut7uxsfGXv/xlY2PD931Zln3f1zRtaWlJFMWZmRnLsnBxBl4bnBS0IuNyfNu22+323t7ey5cvX7x4UavVAkrKZDKc8+XlZdd18VOO41QqlWfPnj169KjX6ymKglRSLBYFQSiXy8jdx31GHNA0zY2Njb29PcaYYRjdbnc4HKItifOxbdt13c3NzU6nI0lSLBaTZRlzLDAp9NGjR//+7//+17/+dXt7u9/vI7EGDIhWGFq7tm1LkrS7u1uv15vN5j/8wz/cv3+/VCqdx1DiwAHIZ6SkXq+3t7fXbDY9z5sMAb53QmdeQrj9IUlSPp/H0qEroCSAUZU/lvt/vnRtQQBdh2wWVBVyOZibg+Vl+PZbeP0aNjdhext2d+HgANptgPdIxyHOSY6TmOTcdzfdENFotFQqlUqlbDYbjUYty8ItNjSL9vf3VVU1DAMdGdd1OeeSJKVSqXK5vLi4iCtwb2/v4cOH//Zv//bkyZP9/f1gdQWrMYi2BKzU7/d3dnY0TcN/3rhxI51OYwQaJuLBOAjGcTB7KJg5pVSWZeRH13UFQUBSCHIjg7OfvjEf5CXgiTBcpSiKoij400VG0HU9CGPh2VVVjcfjiUQCADCtCZ1ZVVWxXhcvPIimwTg/03VdvAN4MyORSDqdTqVSw+EQw3no7qHpNxwOK5XK5uZmPB6fmZkRRbHVar18+fLx48fr6+utVsvzPFVV8byRSCQej0ejUUJIv99vtVqCIGC1kOu6W1tbOO1sNpvNZs9jKEmUwJU4bu/7Fj+4QTv1Ov5KJh9Wlw1KR/+9b+Wf307xPBgMRroC5fKoGvbePbh3DwYDODiAly/hb3+DH3+E58/h4AAc5x01knPifYYen9Coe0+cNZVKFQqFcrm8t7eHoWUMHtVqte3tbZTXaDabmDxJCFEUpVgsrqysLC8vZzIZ0zTfvHnzH//xH//5n/9ZrVYBAN0lzPoJKld7vV6z2URn0DRNAGi1Ws+ePcPQCSZMIxHg7hj+JfCqdF2fqgQO9D2CQl90i9BM+IQKfmSlSVLDs+CGXeB/BQcLghC8hefCj+Ocj+crINBIlCQpGo3mcjl0YNEU3draWl9fr9fr+GAAAMaYaZq1Wq1SqczPz2ezWd/36/X669evX7x4sbe31+v1LMtCj7hcLq+srNy4caNcLvu+v7W19dNPP718+bLdbmMwHnO1ZmZmKpUKxvJOD5x/EJ+LkgRBiMfj5XI5mUwi009lfEzhg/u1U34fjomV4lcTS2IMXHdU3P9ZSwQmPcFJ6DqsrEA6DTduwD//M2xuwps3sL4Ob97A1hb0+xc8h+OOm2mC62JZCZ+YXrCQYrFYNpvN5/O9Xg9jKFic0Wg0RFHEHTcMVONSTCaTpVIpl8vJsoxc02g0cHngbjohJBKJ3Llz57e//e2tW7dEUdzc3Pzxxx9/+OGHXq+HRo3v++12OwhRBbFkXM+B8hmMQ9GTURIEhgUCJQO0dwKL7CyUdNyAmjLo2ASmxpx8Nzh7sPV2/BTBRiHnPBaLrays/OpXv/ruu+/u3r0biUR2d3e///57AHBdt16v40Ye3gfbtgeDgWVZaF5hxUy9XjeD/RMAWZbL5fK333773XffLS8vO47z448/GoaB4X+8jWigGYaBzwZ01T/qxzWFz0hJaDdOvnjK13llls4nw/fBsmAwgOEQHOedvfkL3J7Hko4pWwxVljA5IJOBTAZu3YLf/Q52d0elLa9fw8YGVKvQ7x9xx0W5lpOUZNuTlW6csWDfDSmmXC7XajUMamAAotvt7u7uYv0qlowBAKVU07Risbi0tFQoFAghjUajUqlgCiJ6OgAgy3IymVxcXHzw4MHq6ioAzMzM2La9vb29tbUVLGbLstrtdqvVarfbhmFgRAlZCS43hedjcfbYBSK4EPygoii5XG5tbe3u3bvo+mUyGXwqVCoVJHe8S57nYYkPUhIAYI5YkEcGAOhyoqBKOp0GAAw8xWKxZDLZbreRjGDMSkH6gqZp57ESPqPjdoqn/XMA5+A4I1U23PlCXGB0ORgn2O9HoADbFAQBZmYglYIHD6Dfh2oV1tfh6VN49AjW16Fefydz6mNJc/L4QHPOdUd5UuOvmU8seEqpruu5XA6dLFEUcV8cJceazSa6DxhnxL22TCaTy+Wi0Sg+ctvtNho+GIhE3aVoNCrLcpBbhE4WhoSCZRBYAf1+v9fr4T+POz7v3uPTdoff95HjxssH3wpmOHXwGU96CtDB1HU9kUgE+VyYjhSLxeLxuKqqvV4voKRAlxJpxTRNwzBQsiqIiON+Pwa8AAA3OmVZRsfWNM3J7dThcIhm1ydLr3zeHbfgyk+Xbpn6Mk7ZZTv+ChknpF1UQsTHgfOj8PZkBuMlIHDlsIwOYKRdi6KRySQAwM2bMDsLggDNJlSr0Gpd2Nk5H7ESGmvvzOtovw/jPnNzc51OZ2trC7eusCwe10Bg1Oi6nkwmi8ViPp+Px+OCIDiOMxgMkLBgYgFPVt4ff4WMNTqCDbXhcDgcDjHafXo0+gtFsBAmtyAxcofJWZPBdWT2wHN0x8CbHMT7sK4Y79hU7iUOFaREBcF1rJjBuz1VWf1xl/O5d9xarVaj0ej3+6foy7zv+TD5+vFj0NVH1yCfz6fT6avZcSPXQPn/3c2vETiHWg12d6Feh37/Ir02GF/18bj+OFgYvKAoCm7qI9fIshxUigVhHVEUdV2fmZmZn5/H3Ej8fU+lICKQwiYziXHAyUJ8GC9RZMBgnJ8fH00hCF1jzC6gpMk88uBgPhZRwVsKAEF6ZxD5xe8oyLmXJAl9bdR4CLTrkJ6C/Hi0pD7tEj7vjhtmRmBRpeu6Fysrhbmz+OCNRqPJZPIKKIkQkCSQZZDlkTQS4j2bUOc60VR4G/fUphgBADod2N0dpVNubsLuLlQqUK1CowHjzJejSX4UphILgpYBk50FTgJGf3K5XC6XazQagUcQ/OLRv8tms1j3L8syHydAT+5zw0nFseOpcTj23AoIaOovPz9iCqyVKYGU48dMeoh4DJqWU/cHxv4HIcSyLMzzdBwnHo8bhrG7u1upVPr9PtpWWGoT8N0HPdaz4HNREhlvZ6Klh/M+/fgzDgtjRse8kqvx2gBG6vqRCEQi03LU47l+Rm+OkJHmv+eBbYNhQKUCb97A48fw00/w4gXs7HyufUBBGF24psEZklCw5G1xcREDGYPBIHANcK8Nd2YXFhYKhYKqqoEldX78LDnoLDjnJQds1e/3X716dXh4+P3336uq6jgOKpHjfoXjOOim2WMERXznOfvnoiRKKRovhUIhCC6+7+D33cGp14N/omWICVrnlDH+dEyuTEn6XO4b5+D7R70DEMH1miZsbcGzZ/D0KTx/Dm/fjsr0e72L4aMTdw+DC8emJlPHjx+VwZeCOZDFYvHw8BCzh/B5HlCPruv5fL5UKqXTafQOJlMig+f2GX/o73tQT1oKPyeSOm4PTmLyPpz9qY/2BIxrcer1+uT4+M3KY3DOo9GopmmYdHr+xfgZkwASiQTuRP48QcioLZokHS+IvzBQCqIIqgrRKGANquOM5JkqFdjchJcv4elTePEC3r49eZIBLjYvIWj69iEE1Z71eh0zX1A8CABEUcTUvtnZ2XK5HJTLTgaGQpwHU5FveH/0NkAQ/0anDMWLgz3NKf8Onx9YN1coFJLJZJBi+skIlQDOgeP2C1xojRsACAJEIpBIQDo9euXgAB4+hB9+gCdPYGsLajUYDsF1j8416UKe8+zv+3ggmDkhmTSJSTbBAHYymYzH41i05bpuoMuRTCYzmQxKvr1nCh+nB/Q+Z+3nGks6EZ/sOgVhKcYY5oIvLS2trKzMzMzouj6VRYGJqZgWgPXSQcLHeSb/GZMAHMeZFIh532GnjPC+YwLXAGNVV9PbkxCQZdC0UUhl8slwURFuDBj1+7C1NUpQ3NuDN2/g6VN4/Rp2d08WafocmPwKJoNo76kBmvIXgn3oYBMaxlpFaPwH1Vvjs53gbnzUMgse9cGO0kd98OzHn4gTuY+/i8mDpw77qHMFrujk4McveYqRp2YSfGpyBHyWLC8v/+M//uPa2losFiPjKq7J4phJd3jS1/5kfN4kgGq1iq2vjgehz0JG73sX9y+DIEU2mz0nMX8KCAFNGzVfjEQgqJO62Bq34RA2N0fZ4eipHR5Ct3tCXCkoOrtAnBhLUlXQdYjFIBr9NAYk7wLGj+UTDzv+4unHBMuMjAUhPyq6cZlm1HHD7fR8zrMMiCMEywFzA49nVCC5BKqYnHNxDLxdQYpGLBYrFApLS0vBrAzDaLVa/X4fE+sxpBuJRIKI0jWlJMzNbbfbnykJAIUjKKWpVOr8j7VPhCyDroOug6Kc4L+cP42bc2g24dEjePUKfH+kzTQVtw4Gv/CbcDz5AF9UVdA0UBQ41rd2PJHTZjIV13hfNPr4OMF6m2SZyfq1yTEBQBCESSHaU04EE0wXbGmfh5smTzRpROAlTGVCTH7wRA495X5ORXbIuD9KQEkoMYzFsUHGEB6DMpUYJOKc498VRQnKCTnnWCndarVarVYmk/E8D1VWnj17trm5iVXTkiTlcrnl5eXbt28vLy+jsMx5wkmfMQkA09vRd5sUJzn9mz7Lu0ESAAq+XFl0gFLQdYhGz7gd/inABmpTIJ9NSfKDUFVIJLBpEnyMZXp8XQW1r1OvB6L6qqpOUgkmZOOTOfjGp6Qdg9cDMVYspMDVNbk/HQwbqJQEH5x89+NuzkkImGLyV4rJ0yini/V9k2cP/E3y/n1G/i5gwtIUJpTCJUmyLAs5BSVKyERbJyQgtJJkWdZ1Xdd13N2HdyvXgq8GABqNxsbGxsuXLxuNhmEYAJDP503T1HUdq+HOed8+b9mtoijlcpmf2tBmEpPvnnIkfg14688f4T8XNO2IlaaAX8yFe1JwuUw0+S1QCtHoyGU7qQf3Jw0/vccvyzIWdmLCN4ydCNd1sQ7LMAxUMgMA1MlFETjkFwQWzcXj8eChNZnkHQD9GiyGwJqJbrcbqFbCh36upyMw1lDbZDJ/mnOOquRYhddsNovFIgAcHBwEAgbvs6SOnyL4OypS7e/v7+zs5HI5QsjBwcHOzg7KlgWqScjCkUgkFouhQC3nPBqNIqGYptnr9bCDJore7uzsFAoFAPB9f29vD/WLDcMIgsX9fh+7fl9IdddnzEtC0v1M418XqCrEYpBOQyYDtRqY5sWnSl6VDYhB+smzyzLE45BOQyIBY7Pi6MgxTny2B8bCJI7XrMG4OA7l33CXB19Hi6nb7T5//pxz/vz5c1EUK5XK+vp6tVpFlVE0RhRFSaVSWH2KSvuRSAT3QNC+xv0+5IWDg4O//OUv9XpdVdXhcLi+vv78+fNJ7UeY8Kem5hl4kcEBwRWRcQoPBonxwYkxUByQEIIakn/961+bzaau65Zl7ezsvH79ent7G+WKcHlPFvEFDB5UigTHMMYGg8GLFy8Mw3j8+HEmk5EkqdPpvH37dnt7G6udYVySRgjRdT2VSqEVyRiLx+O5XC6bzWILADyF4zgHBwcPHz6s1+vYfu7w8PDNmzeVSgX1c8lYow5T8FFH9JwhmjAJ4HygFCIRSKchn4dqFTxv1F0Sk3fet9fzUVR1OQbRKRlMAbdGIpDPQ7kMudw0JcGHqfM4K5F3qzeDI2VZRnn/hYWFRqNBCHFdF1djv9/HQAYaUI7jYOcPdOTRXysWizdv3lxYWEgkErg8sDMHklS/38fgLgB4nodKKX/9618JIUEfEcyqY2OpxknrZtL1myqvCy4nKB9DNgkqMSORiCRJ6KwRQjzPq1ar/X7/8ePHlFLLstAt5ZwHZ0d7LRg2ODubaPNNKQ2i1Gg2Pnv2DLkYRUjQhEFORxMyk8ksLCwsLy9jdwPGWKFQuH37tmma6KnheU3TRMPt1atXOGBgqOJd0jQtmUyurq7eu3dvZWUFta4+7od3DCElnQ+EQC4Ht29DowGt1lHBfaBnhJhy4o6HjU/HVID5AhGMNjXsiclNsgyLi/DgAdy8CZnM+4acMpH4uFLcNM3BYIAKGIIgoF6Ppmndbhd1fCY/FYlEVlZWUP5ZFMWNjY1ut4tR2OFwSCeUp3ENoxMRiURQMOiXv/zlvXv38MEOACiTUiwWM5kMumZ4Rkqpbdu9Xi/YqIrFYjMzM4qimKZZr9dRZgiV51BdCMUtAqWBfr+PVzQcDtFaQV8MxaFwkolEolQq5fP5ZDJZq9VwqshfnucNh8NASTIajSYSCU3T0GM6PDw0DIMQkkgkJoVE8Oz9fh8VjrCsCmNDuOfFOUdtFux3xMeSh5xzURQTicTMzMzy8vLi4mIqlcJrx44Drutiywa8KKQzURQHgwEdq01hgAl1O5PJ5Nra2rfffvvNN9/Mzs4qE+JZn4yQks6NTAbu3AHHgV4P2m14+3ak2oE1aMczGN+HUxjqEny3gDQnY+dBA3FMRHrwAL77Dn71K1hefsdK+tD00LbHRO1yuazreuDmZLNZjBkd33sql8uyLKfT6Xw+/+jRo/39fRSWDopyJyMjuKSRj1CaHpkFRxNFcXZ29ttvvxVFsVgsHhwcBP2L8FyRSAQTSmZnZ1H5u1arbW5u6rrebrcjkcjc3Fwul9N1HR0lQggK6RYKBcMwUEocZU6xL2YikZiMMc/Ozv7iF78ghODZsbAGK1cFQcA7g31ZstkspbTdbu/s7GxtbR0eHhJCSqVSuVzGsmQYK3bOzs6ura2l02lVVROJBGqt5XK5WCzmeV6tVtvZ2anVaoG+LQaw8/n88vLynTt3vvrqq0KhEOzNoZL9/fv3FUUplUpv377FeaJBhESMnItBcWz6sLCwcPfu3Zs3b5bL5cAmPSdCSjoHcAHLMszMgCCM0rgVBV69+uzqtxeF4zx4IjPOzsIvfgH/9E/w3XcwP3+kJHk83nRS6hAGdxYWFmzbTqfT/X4/CPpmMpnV1dWpzDI+bgSELFAsFu/evbu3t7e3t9doNIL1jPFU7K+LrZbm5+eRU4LQeIBcLvfNN9+gvPf6+vrOzk7QKy0ajc7MzNy4cWN1dRX7WQ4Gg52dnWKxWC6X+/0+rtKFhQXsCY72FOpbUkrz+Xy73TZNM9jmy+fzc3Nzk9VUiUTiwYMH6BxtbGxsbW3VajU0o/Dsa2tra2trMzMzqqr2+/39/f2ZmZmFhYVWq4WZLrOzs3NzcxicRWL9xS9+EY/Hu91uoNyGjctRSzsIS3W7XaRvTdPy+fzS0tLq6iqS5vF9oVwul0qlbt26ValUsI9bs9lEFSR0YPFc6IoWi8WZmZlCoYAqV5Pf3Qd+daeCIPmdZ4i/X0xlaR8cwLNn8PAhPHwIGxvQ7YLjjPqXBHZT8N+kDXLJe/mTJBJ008X/UHVEEECSQFFA0yAahbk5uHcPfvELuHkT5uZOCWy/D7i7hP24UdciiNpqmoai/dgAYzzq9M8aP46BEsMwLMsK4sQocphMJrPZbCaTOX1HBTN46/V6rVbr9/sYosKW34VCAaUI8Mh2u40l77ZtC2OVd+wpIkkSuk6DwQBdtmA7Hx0o7CuHeQxTe/9B2yhMIcYwEK7wyUBMt9vFdlJo46B4ZiwWi0ajGJgfDAb9fh+lizA0hiXoQT3HcDhsNBqdTidwitFQTaVSyWRSek9OWQDXdbvdLrL/pJWEoSi8wGg0imbjB38AH4WQki4OrgumCZ0O7O/Dzs6ol1GjAb0eDIdgWaMmsbYNrguOM2oYi3yEnQWmVI0uHJI0quBHnSNCQJJGBf2KArI8SoPEtIZMBkolmJuDublRx11FGX3w4ytmppJoAqCp/76t7uNhqRMHn8ovCQ4Lf9iXgyDAfyGjhZR0ETi+RAcDaDTe4aOAgwJtXHTu0FzC1wOSwtHQGD5eOxLglFem4tacA6UjAlLVkfwbUhKKsWGZXiBKh9oDWO4bi01f3UUV8X0I5/cCQnxxCCnp4jC1oXaW4zFLAD8YOHTBgj9xnFMqV055ESnpuBDl2XHGIP17P32ylXTGhMDJD04eP/nWWdJxg+Mnzxi8Au+aWiee9MQDJi9q8rCpmZw422CE9w0+OWwQP57KCTg+yalzwYQtc/a7FAw7NcjksKd/d5+AkJJCXBLe53bBGWz+42vvxLfO8ks+7tadOMLx2Z7FtTzLNE50c47bgx+cwCec+mNxJVZqSEmfAXyiGSyMw8nHdqauI77cmYf4uSBMAvgMONHt+iJWNTmmRvJFTDvEzwghJX0efNEr+YuefIgvHFchpB8iRIgQ70FISSFChLhGCCkpRIgQ1wghJYUIEeIaIaSkECFCXCOctYloiBAhQlwCQispRIgQ1wghJYUIEeIaIaSkECFCXCOElBQiRIhrhJCSQoQIcY0QUlKIECGuET6i7BbbWl7UiV3Xxe69FwIUQr6o0WzbDvqpnh+TLYzPD1R6vqjRBoMBSuJfCAzDcC9OqxdVui9qtF6v519cgwbU2L+o0TqdzgXm4rTb7YsaijHW7XYvajTf93u93gcPI2dXacIuV+ee2AgoTn5Ro2FDmIsaDdXXL2o0VVW14+25PxWapqmTgvzng67r5+8FGADF6i9qtFgsdoFS85NdNM6Pi2oQhEgmkxeoWZZKpS5qKEJIMpm8qNEEQYjH4x8+aZgqGSJEiOuDMJYUIkSIa4SQkkKECHGNEFJSiBAhrhFCSgoRIsQ1QkhJIUKEuEYIKSlEiBDXCGGHkmuPoKta8OfxvI1T3joPgu5P72uoS8i5OuiGCHEMISVde3S7UK9Duw2uC44DlgWOA553xAicg2nCYADDIXjeOy28PxmMASEgSaAooGmgqiBJIAijFuG+D6IIsRgkEhCLgSBAJAKxGESjJ/QHD/GpYIy5ruu67mR7bkqpKIqiKP5cO8KGlHRd4bowHEKtBhsb8PYt7O6CZYFpQq8HwyE4zsg8EUVgDHo9aLWg0wHHAd8Hxs5LDVgtoWmg65BIQDQKmjY6F2PguqAokM1CqQSZDIgi5PNw4wYsL8Opyb5Bp/nj3e7ft8A451OlG6cff+HgY3zCZ885Vdd1Dw4OKpWKZVmSJEmSRCnVdT2bzabT6QtMlL9WCCnp+sHzYDiEjQ149gwePYKNDeh0oN0GxwHHAdME2562kmwbLAsuriLsHVAKqgqKAoIAnANjIyspkYBkEqJRIAQyGZibgxs34JtvYGUFisXjw3DOTdMcDAb9ft+2bdd1Pc8TBCEWi6VSqanyEaQA0zQ7nU632zVNkxAiy7Isy5qmxWKxSCRyOWvSsqxGo9Futz3PO6NtghQmCIKiKLquR6NRTdM+YbaDweDx48f/8R//0Wg0dF3H6p9yufzgwQNd13+GlDTs/n8PKyElXT+0WvD6Nfzv/w3/5//Aw4fQaoEgjPpiB/9dJhiD4RCO1yF3OrC7OzoAnbtyGX7/e/i//2/47W8hlZoKM3HOh8Ph4eHh9vZ2rVZrtVqmaWqaNjs7u7KysrS0FIvFgoI73/dt265Wq+vr61tbW41Gg1KaSCSy2Wy5XJ6bm5Nl+XLWZL/ff/r06dOnT23b1nU9oKTTzTrP8zRNS6fTpVJpYWEhn89/wmxN03z58uX/+l//a2trK5VKJRKJSCRy+/btdDp948aNCywRvVYIKen6YX0d/sf/gP/xP2B7G7By+uJK2C8S6MQhBgMYDKDZBABAMYD792FhYSqk5fv+YDDY3t5++vTp5uZmr9dLJBI3b960LEtVVUppQEmu67ZarY2NjYcPHz59+nRvbw8AyuXyzZs3FUUpFAoXWIh/Ovr9/pMnT/7n//yfhmEkk0lKKUZ2BEGglBJyVCWKZMQ59zzPtu14PD4/P3/nzp1IJBKPxz+hZN33/X6/X6vVOp2ObdvIiaVSyTTNn3FpakhJ1wYYk67X4ckT+N//Gx49uuoJfRK2tsBxgBBQVZifn3pTURRN0xzH2d3dffToUbfbzeVyjDFN0/L5fCwWC2ribduu1+vr6+svXrx4/vz51tYWrs98Pi+KYiQSucBC/NNhWValUnn16lW3281kMoGcwClWkud5lmVhRX42mx0MBp+mskIIkSRJVVVCiKZpKAIhy/IFCiRcQ/ycr+0Lg+9DvQ4vXsCrV3BxkjeXjV4Pej2Ix+HBA3AcmFBlIYTEYrFisZhKpRhjnU7HsizDMFqtVrVardVqCwsLwcFoJVUqlXq93u/3+/0+Y2w4HGqaVigUstnsBSqNnA5CiCiK8hiCIBBC0K+0bdv3/SCGLQgCBqEFQWCMSZIkiiIe/2kRbkJIsL8W4DwDfhEIKenawPNgfx+ePIFXr+AMSlfXGpUK1GrQ6UxRkiAI+Xx+dnY2m81Go1G0jzzPazabh4eHk5J+juO0Wi18URCEaDTqOE4qlSqVShhIurRLiUajN2/e/N3vfjccDmOxGJJOr9fb3t7e2dkxDAMJi1Iai8UKhUI+n9d13bIsTdNmZmZWVlYymYyiKJc24S8dISVdGzAGzSZsbcHBAVycCuXVwPeh04FqFbJZoBTetWgw6FsqldCsMAyjUqkcHBxMSg7atl2r1fb29prNpu/70WhUEISZmZl8Pn8WGbALRCqV+u677xYWFlzXlWVZVdVIJLK9vf2HP/zh8PAQ4+7ISoVC4dtvv/3mm29mZ2cty+Kc67qeTCbT6fQFKgL+7HF5lOR5nud5jLGLtTkxzicIAtq0FzjyZQMzHns9MAy4OLnYq4HvQ68HjQZ0u6Ncygnouj47O7u0tAQAw+EQcwKq1eqkleS6brPZrFarzWYTd/1TqdT8/Hw6nb60KBIiFovdvXv37t27uLWPZ5+dnX3z5o0gCKZpyrKMQZ9kMrm2tvbb3/52ZmbmMmf4M8MlURLnvNvtNpvN4XCIWxUXNbLv+5zzWCyWzWYv+fl58XAcGA7BNK/pFtvZwflRCtUxAWJd1+fn51dXV4fD4c7OzmAwGAwGrVbLMAzHcdDHwYykVqvV7/clScKdptnZ2RM1YR3HQQVx9Ko+U6hlcljca5t6Vxjjwk99CjzPcxzH931MgzrL2Rljg8EA7ThJkhRFuVYh88ujpH6/v7+/3263MUp3USM7jsM5LxQKuNV6UcNeATgH1x0t4wvZ4VYUSKUgGgXGwDRHZHdx4v+nAVOZMNE8kZh6MxKJzM3NLS8vHxwc7O7uIptYljUYDAzDQEoyDAMbH9i27XmeruvlcnlxcTGbzeLzDI/3PG84HDabzXa77TgOCrrruo6bd9FodCrq5LoungWrNHzfZ4wpipJIJAI5bdd1u91ut9t1XTdgGUx6jEQi71vzjDEcLXjFNE3DMJBn0YySJEnTtEgkgurp2HXCNE3HcXA+sixHIhHMroR3SRDGrEcpZYwZhqGq6t7eXqVSGQ6HuHWQzWZzuZyu68fV2fFisTMFmp+tVstxHFVV8dpTqVQ8HldVFbMxriZ8Hkn8v/+cuFTHzXEcTI2/wF4RSEmu615aosrnAjpunQ70+xfjuEWjcOsWrK1BMgnDIbx9C8+ewdbWBYz8QXjeKJbUakE2O/WmpmmYQPj8+XNKKT7hPc8zDKNer8disX6/3263LcuC8VqKRqMLCws3btyYmZkRRbHb7b558+b169eHh4eYdWlZluM4giBomiaKYiqVunfv3ldffbW2tjbJSr1e7/Hjx48fP65Wq47jGIZhmubc3Nw///M//+53v8OIT6/X++Mf/ziZM60oytzc3Ndff33v3r3TExQppchrjLHNzc2ffvrp6dOn1WqVUprNZovF4srKyt27d+fn5wkh1Wr12bNn6+vrlUql0Wh4nlcoFO7evYsnomMEgxNCVFXlnB8eHv7tb39zHOf58+ebm5uWZWEDi2QyiR+/c+fOZGYmmkX1ev3169fr6+vr6+utVgu5XhRFTdNkWc7lcisrK6urq6urq8lk8gqDX5dESYQQrM1B2/ICjVvP8zjn6XT6i9/U4BwGA2i34aJ6IqkqzMzAN9/A6ipQCjs7sLQEP/wAh4fQ70OvB553MebYcTAGhgHtNvT7x51QRVHy+XypVELDhHMuiiL25zk4OBBFcTAYNJtN27bxd8I5j0Qis7Oz8/PzmqbZtr2xsfGnP/3pT3/60/7+frPZNAyDEOJ5HrIbACSTya2trVqtNhwOJ22r4XC4vr7+xz/+8c2bN6ZpNhqNfr9///79XC73m9/8BtfhYDB49OjRf/tv/217ezudTieTSV3Xv/rqq1Qqtba2dvp1ByRi23alUnn48OEf/vCHV69eiaK4sLCASaHFYrFcLlNK2+32ixcv/vznP798+XJ7e9u27ZWVlcFgkMvlVldXMfcKR5s0lwzDePXq1dbWVr1ef/Xq1e7uru/7uq6Loqgoyv7+PgBkMpnZ2dlgVqZpvn379tGjR//5n//56tWrt2/f4r3FxE58KqRSqeXl5bt37/7TP/3TV199NX8sp+zScHlWUiKRkCTJdd2LdfXROLrYNkdXA3R2LjwjKRKBUgkKBfjqK/jmG/jNb+DNG3j5Ep48gb29z5htgNVwJyUZ4w8AE5QURcF9CUxE2tnZQVO6Wq0OBgPMCRJFMZFIlMtlTD588+bNn//85z/96U8PHz7s9/vIaJFIRBRF0zTx4e953k8//YRpTb///e9/+9vf4s+Dc+44DsbUTdPEdCfDMGzbDvKhGWOWZeFbvV5PEAQshUHf6sxXP3KU0HFzHKff7w8GA0xlwmMwuWk4HKJ/BwCGYViWhU/ZqTuGxDEYDDAsi5GQdruN3qJpmviXjY2NZ8+elUolSZKwNJdzvrOz8+c///mPf/zjjz/+2Ov1bNtWFAUzMF3Xxek1Go1er7e3t+d5XiKR+PlTEiEkEol88azxueF5YFkXNhpjYFmjyFQkApEIZLOwugpbW/D4MczOwuvX8Po1tFowGIzSDi6wTAH3/t+/j6HreiqVymazyWQSXe9Op1OpVGzbNk2zUqkYhkEpjcfjmUwmn89nMhkAqFQqP/30048//rixsdFsNl3XTaVS6HFEIpFOp1OtVhuNRrfbrdfrBwcHjLFMJoM1dAAgiqKqqrqux+NxSZI8z+v1ehhDmQxda5qWSCQ6nU4ymcTKMixzPfujFMlU0zQcXBTFeDwejUbx7ziOIAiqqkaj0Xg8Ho/HsQYFy4nROAqICUkce7syxqLRaDablSQJzcl2u93tdvv9vu/7w+Fwe3v7+fPnmUwGr/Hw8PDFixd/+9vfHj9+vL29Lcsy+o/z8/OqqvZ6vVqthp5jrVZrt9uFQuH+/fv379/H7+Xyg0rXJcwe4rPgeJmupsHyMqTTcOcO1Grw7Bk8ewZPn8Lm5kjb5LKAaZMrKyutVqvZbDqO0+l0Dg8Pe73ecDg8ODjodrt4zPLy8sLCQjKZZIxhfdz6+nqv1+OcW5ZFCLlx48a//uu/zs3N1Wq1R48e/e1vf3vy5IlhGJ7noeW1vr6OGyAYNCATCEK5x3fQjuNjr3HqLMEIU0v9g6cIFF1c19U07e7du7/5zW+y2Wyr1Xr+/PmjR4+ePXuGoTTHcQ4PD7e2tu7cucMYcxxna2vryZMn29vbuBuA9cBff/3173//+0wmc3h4+OOPP/7lL3+p1+sY58Us0PX19dXV1Wg0evk7cZd3Ptu20Si9WMcNs0VkWca9zIsa9mcLSkHTQNOgVAIAuHkT7tyBpSV49gz29mBnZyQFZ1nvc7suCoIg5HK5paUl1AMaDAa9Xq/RaEiSZJpmu90eDAYYFV5aWpqbm0skErZt7+/vv379en9/H2PeAIBW0rfffjs3N4ceDZakAQBuHrXb7e3t7eXl5ZWVlYtNQLk0YEEvhpaSyeStW7d+97vfFQoFrKTrdDqvXr1yXRdD2sPhsNPpYAd5x3Gq1er29nav18M8z8FgIAjC7Ozsr371q1gsZpomRuKRN1HqoNls7uzsJJNJ3Cu45Iu9vCQAfAZifcCFh7eTyWSxWAwp6aMxMwOJBCwtwT//M+zvw48/wvPn8Pw5VKtg2581PUoQhEwms7Cw8Pbt24ODg3a73el0VFXFgGO/38eNJDxmdnZW13X0MnZ3d6vVKu6FaZpWLpez2Sxue2uahhtkZCzA6Ps+enOtVmtxcfHLpSSMQ6uqGo/HA6ZQVfXmzZs//PADpRQrezFYZpqm67oA4Pu+YRidTmcwGCCpBeYYjoA1g0juaLuhe4ikdiV6A5dHSYZh4C8DyxEvauQgCQBzKy5q2L8XoBJbIgGrq9DvQzoNAFCpQKv1uZ04SmkqlZqdnS0UCoqi2Lbd7XYxZ49zPhgMhsOhLMvpdHpxcXFubg4AfN9HEbjhcIhxcdz5xnITGFcIYPyYUoqbSv1+v16vdzodz/OuLOPm3EBKwszGyeWDJE7e1UiZVO/0fR/V8tCZSCaTqVRKm6g9jMfjuFuNO0X4ESy0+DlTEowd5imn+kKGhWNJZSE+GqgViRJIl/JDRCvJtu1SqaTrOtJNr9cjY3ES27ZFUSwUCisrK+l0GgBwqRwXyT1xfEws9H2/2+2i5JDrulOZPl8czh7VwsMYY7hdYFkWYwy3mEqlUjweDwY5PuB5tH3Pj8vbcYtGo3gv8PF1USOjvZpIJCaJP8RZ4bpgGFCpQKUC+/vw00/w8uVIVPcz/yKRGnK5XC6Xi8fjsiyj+j1WQfq+TymNRCLpdDqfz+NHgnrGQDvteM50YB3gSgscGdu20XP5rBf1ucHGOOWY4NmPfqthGL1ebzAYYLwVHVvTNA8PD1ENptFoYOAJA/8wzq66qnt1eZSErPE5wtsAgHliFzXm3wsYg709eP4cfvgBnj6FvT3Y2wPTvMiilg8Bo0WFQiGTyRiGgT44eijJZDKfz096GVf46P7igKyExTGNRmMwGGDw23Xder3+8uVLzvnGxgZj7PXr19VqFevd8LNXe5Mvz3FTFCVkjasHJiu1WlCtwuEhPH06imdvbUGvd5lJAAHi8fjMzMzs7CzmIqEoGsZx5+bmJoUcPxa4tIJn/mTA5WcPfPAH0TeMdmNS5e7u7nA4fP36ta7rnPNms7m9vT0cDj3PwxJoy7Jc173Aqq+PQpiX9LMGdjGZtEkHA9jchEeP4Icf4M0beP0aOp3Rrv8VIRKJzMzMlMtlXA+Y349FJ3Nzc+l0+svWnLkeCNxYtJsGg8HBwQG6Zlh8GqQxa5qGEfSfueOGKfmDwcBxnIvd9QgKSjA19qKGvQJgK8cLjIgFzY4IAcOAXg/29uDJE3jzBl69gmfP4OAA+v0LO90UfB88D3z/gzEpLMRPJpP49WFsSBRF1EjSdf2T1wb+zPgEvvRY0kchaFsQ5Ivj3r+u64lEIh6Pi6KIMTtUKUDLKJ/PY9ZFLBa7kofB5VlJ3W53f3+/3+9fbF4SWqTpdLpcLn/xlBSJQCoFOzsXNibnYBiwvw8HB7C9DT/8AD/8ALUaDAYnFsReJAQBRHHU7ulUoCojSlbD2NvCxRO8+GkIhgrw9+O4Bb3kUAZzMBgAACFEluXZ2dn79+/funUrkUhgsxNckrjrH4lEEolEPp+/Kvv0Uq2kZrPZbDY/R14SISR7TATjC0NASaoKjnMB0WXThL09+OEHeP0ahkPY2oIXL2Bv7yLm+iEIAkSjkEpBLAZn+K5P3PF434b3VJD79N2SydSTj7mALx64MYcVy5lMBntzogUai8Vu3rz5X/7LfymVSlhyHCi+AoAkSdi/U1GUKzEqL89KwopHrNi+QErCzLoz6uldayAlJZMQi0GvdwESJYYBr17B7u5Iws00Ly9gJAiQTEKxCKkUfOYGkMcZCv/E1zEshappuCl+JYbSZAEtHCugO/s4Z/kIXjiaPFjui0UnrutiJoRt2yiQJIpiMplE3YVGo2HbNqZiapqGqRhn7O57sbi8JIB4PD47O5vJZC425SEQutWPCap+YSAERBFUFWT5lAL6j4DjQK12AeN8ArCSLh4HXT/LtZy4u39iwl6QcYP/DPJ08DB8wuMDL6gLCzK8RVE8rvtxaQhmjhJRAIBNBHDZn3FWxy2+IE0pCJwFuVrIyOgXo0ie67qWZXW7XVS5xREMw3j69OnDhw87nQ7KM+RyucXFxcXFxSsxlC6VknRd/3ztAL54KwkAZBkiEdA0+NKvhRBQFNA0UJSLoVcAAMB2uGjyYGgW63UDtSNccihshIURWKdaKpUymQyqeQTL9X1nmaS5IBr1sVOdjKnD2GoLyAL/iZPHvOqzuJZBdchknL5arfZ6vSALNIhn43IgY8EpURSxrATlmSb1oQzDePTo0X//7/99d3c3mUwuLi7evHmTUoqaMJfT5XwSl+q4XR/J8esIdNwSCYjFRp2sv1wIAsTjkMtBMvnB8PbZQSmNRqOo9AjjLgCNRqPRaLRarUgksrOzs7u72+l0cNljUVsqlZqZmUFhSbQUcGsp2JBCHdhqtZpIJAaDwZs3b2q1mj12nD/tCYq1L8FZkINs2zYMo9vtYkPt9fX1V69eVSoV13WRMt43GhlLuPX7fQzItlotTdMqlcqTJ08qlYrv+7i4BEGIxWKZTCYajSIfJZPJQqGAKp0YMMJywmq1ury8bBjGixcv1tfXt7e3cWRFURYWFrCP5pUE4EKOuDagFDIZWFyEchlqtS+44S0AiCIkk1AonMXcC6wJdgxTtowoiqVSaW1trd/vIw0Nh8NGo7G+vv7jjz/u7Ozs7Ow8evRob2/Ptm1cw5Ik5XK5hYWFQqGA50JlNUmSsA0BcsHu7u7333+/tbXV6XRevnxZq9WwuwSy2ImG1YkTDg5D2UYMdKJjhXJx+/v7z549syzLsqwnT57s7Ox0Oh3sFxAEgCbd1eBFGBcVN5vNjY2Nv/3tb2/evNnd3X38+PHW1hbm1uCfhUJhdXW1UChg5c3CwsLdu3c7nU6z2fQ8DzWVdnZ2/vKXv2xsbLTb7WfPnlUqFbSGFEVJpVKLi4urq6v5fP7nvOMW4sMQRZidhQcPYGcHNjZgf/+qJ3QOlEqQz0MyeZZjcdWh4iqKagEANu0ItoEQsiyvrKz8+te/Hg6HDx8+3Nvbc13XMIxnz57Ztq1pWrvdRnFbVONGk2FmZmZ5eRkrB7COd3FxEVW3LctCedznz593Oh1RFLGpnCRJa2tr1WoV9XaxMmMyNM459zwPVWsty0Ip68kJo3hjLBbD7ESUOmi1WoyxZrP5l7/8BRNWUqmUaZoHBwdBq5KpXoeYx4gOKSYQOY7z7Nmzw8NDSmmn00GBWsdxMDObc14ul+/duzc3N4fu2/LycqvV2traevr0KQa2MXjU6XQURcEWDJVKhXOO3VOCvgDxePxK4m4hJV0bCAIUCiCK8OYN/PWvVz2bT0UyCXNz8N13sLR0xr02jL+i/mwsFrMsC+VfI5HI1EaqJEkLCwuCIGDjI4wiCYJweHjYbDZhvNfBGNN1PZ1Oa5p2586dlZUVNJEAQFGU5eXlTqeDctf9fh87Eezv79dqNcwYRM5KpVI7OzvYpADX6qQjgxt5sVgMjalYLIbHoFmEx8zMzCwuLs7Pz7fbbaxoRWntarUqCMLCwsK333771VdfbWxsILGiW4q21eRZ8FZEo1EMPGMv8s3NTWz9FDRBQB2lcrm8trZ28+bNXC6Hg+i6jq+8fv0az0IpxW5LMDZRfd9PJpPZbDaVSt2+fXtxcRH7j4WO29838OvPZODePfi//i8wzZH47JfVDGp1Ff7rf4V/+Re4efOMUSRZllHtfzgcoqUjy3KpVMLOIpqmBaFc7Ik0Pz//3XffxWKxubm5vb29g4MDDJRgLAalrAuFwvz8fKlUunv37u3bt4NFrmna4uIiISRoGYRKp67rqqqKreJWVlZKpRJu1aECXDQaRZIKxkFr686dO9hzDQW2FxYW0ul0cIyqqnfu3PmXf/mXfD5frVZRvxA1nrLZ7Ndff/1P//RP5XIZxSEjkYjnefPz86ifiZcsSVKxWLx7924ymYzFYsiV6XQaeW1vbw9FVzzPw13FTCbz7bfffv311wEFI7LZ7C9/+UtK6dLSUqPRqFQqrVbLNE3P8/Dmo0oHVhpebXsSCCnpOmJlBf71X0HX4f/8n1GytSwfqWhflp7RhyEIo+Rs34dIBBQFZmfhv/5X+H/+H/jtb8+ejoTChnfu3Emn0zdu3BgOh5jgl81mcX1ORTQURVlbWyuXy6urqy9evHj58mW9Xkc3KpDKn5ubW1tbm5ubK5fLU6QmCMLS0hKKMeXz+Xa7jf5OKpW6devWvXv3Zmdn0b3SNC2dTg+HQ1VVZ2ZmZmZmgu0ndCF/97vfNZtNVVVR5hHPG9SWi6J469atdDq9sLDw8uXLjY2NbrerqmqpVFpdXf3qq69u3ryJu4ee5y0tLXHOs9ns4uJiLpfDS1YUZXV19fe//z1GnXO53Pz8fD6fF0Wx1+ttbW1hOMk0zWg0Ojc3t7q6evv27VKpNFXGIIoivn779u2NjY319fVGo4FcrChKMplMJpOzs7PLy8tzc3NXrs76d5Ri/8UA+5S8fQsvXsCTJ7C+Dq0WNBrgOKMO3bYNnjeqp6UUOAfbBtMEz7vgmVAKogiSBKIIogiEjGjR90dylOk0xGIAALkczM3B2hp88w0sL0Mmc/aTuK6LjWGDlke42R/4LO/LjjFNE8M9hmEwxjAKg/5UOp3OZDKxWOxE8QnOebfbbbVaGFHCOHc0Gi0WizMzM7quB7Wp2IxIEITAQQvkK1utFjZoRMczUKGNxWKTO8uMMQzW1Go10zRRJ7NYLOZyOax0xXgQNk1SVTUWi2EvE9wxxM01y7JwDmguYT1aq9WqVqvYSWFS4+WUTioYOarValjejOF/1HVDUdZoNHr5u/5TCCnpusL3wTShXoeNDXj7FnZ3wbLANKHXG/XRpnSUXckY9HrQbI5ajKAZdc4oAFJePA7pNKRSIMujDkg4uOuCokA2C8UiZDIgCJDPw40bsLw8YqiPxOk/wlMiGpPZQ5PHnzHNZyp16Hhu9PGRPzjnEytggnmeWOBy9rNMvXX6sGe5asSFa72eByElXXt0u9BsQrsNngeOA5YFrjttJVnWqBeb540MmXP+vDCApaqg6xCJjPgosJIYG1WxxeMQjYIogqZBNHrGXO0QIU5BSElfDvCbOvH7mmrWdoFAajuR4KaUmEKEuAiElBQiRIhrhNDMDhEixDVCSEkhQoS4RggpKUSIENcIISWFCBHiGiGkpBAhQlwjhJQUIkSIa4SQkkKECHGNEFJSiBAhrhFCSgoRIsQ1QkhJIUKEuEYIKSlEiBDXCCElhQgR4hpBRLGVv8/i208QiOn1+vgXSin222GcwzHJHgQHAM6PBJsBgIMIhHFGZDESiQDwceUzx/dPnRjnAISPjhif4X2XcMpbABwYZ4QQ4JxQalmWaZqEUJzyux887RSEkJiuEyAcjqQICCWmadmuRyiBkUoKAQBKCQHgvs84V1VVUZSJoTnnQICZlm27PqVE0TRFkjgHH7hACACYnHsAFMjUhMi7MxbGf4oEOIoKAWEAHMAHrgAI795bH8BinJ10wzmABlwixDAGruvoqiTLMicUvx/fdUzT5oRwxkWBiAKhlHAOBECUFU4CFTdOOGOea9muzxkhJBpPvvd7CQHw/wMe9PDld7ugBQAAAABJRU5ErkJggg==);
}

ytd-app yt-chip-cloud-chip-renderer.yt-chip-cloud-renderer,
ytd-app yt-chip-cloud-chip-renderer.ytd-feed-filter-chip-bar-renderer {
  background: 0 0 !important;
  border-width: 0 0 3px;
  border-radius: 0;
  box-shadow: none;
  border-bottom-color: transparent;
  font: normal 13px roboto;
  color: #666;
  margin-bottom: 0;
  margin-top: 0;
}

ytd-app yt-chip-cloud-chip-renderer.ytd-feed-filter-chip-bar-renderer:hover {
  border-bottom-color: var(--oldcolor);
}

ytd-app yt-chip-cloud-chip-renderer[chip-style=STYLE_DEFAULT][selected],
ytd-app yt-chip-cloud-chip-renderer[chip-style=STYLE_HOME_FILTER][selected] {
  border-bottom-color: var(--oldcolor);
  background: 0 0;
  color: #333;
  font-weight: 500;
}

ytd-app ytd-feed-filter-chip-bar-renderer {
  height: auto;
  margin-top: 10px;
}

ytd-app ytd-button-renderer.yt-chip-cloud-renderer {
  width: unset;
}

ytd-app ytd-feed-filter-chip-bar-renderer #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  border-top: 0;
}

#left-arrow-button.ytd-feed-filter-chip-bar-renderer,
#right-arrow-button.ytd-feed-filter-chip-bar-renderer {
  background: 0 0;
}

ytd-app #left-arrow.yt-chip-cloud-renderer::after,
ytd-app #right-arrow.yt-chip-cloud-renderer::before {
  content: none;
}

ytd-app ytd-button-renderer.ytd-feed-filter-chip-bar-renderer {
  margin: 0;
  background: 0 0;
  cursor: pointer;
}

ytd-app .yt-chip-cloud-renderer ytd-button-renderer #button.ytd-button-renderer,
ytd-app ytd-button-renderer.ytd-feed-filter-chip-bar-renderer #button.ytd-button-renderer {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -112px -42px;
  width: 7px;
  height: 10px;
  padding: 0;
  opacity: 0.5;
}

#left-arrow .yt-chip-cloud-renderer ytd-button-renderer #button.ytd-button-renderer,
ytd-app #left-arrow ytd-button-renderer.ytd-feed-filter-chip-bar-renderer #button.ytd-button-renderer {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -20px -918px;
}

#info-contents > div {
  z-index: 999;
  margin-top: 10px;
}

[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer:hover,
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer:hover,
[menu-style=multi-page-menu-style-type-system] yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer,
[menu-style=multi-page-menu-style-type-system] yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer {
  background: 0 0;
}

html[dark] [menu-style=multi-page-menu-style-type-system] #submenu #footer tp-yt-paper-item,
html[dark] [page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button,
html[dark] [page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer,
html[dark] ytd-google-account-header-renderer.ytd-account-section-list-renderer {
  background-color: #1c1c1c;
  border: solid 1px #333;
  color: var(--yt-button-color, inherit);
}

html[dark] [menu-style=multi-page-menu-style-type-system] #submenu #footer tp-yt-paper-item:hover,
html[dark] [page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button:hover,
html[dark] [page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer:hover,
html[dark] ytd-google-account-header-renderer.ytd-account-section-list-renderer:hover {
  background-color: #444;
  border-color: #3c3c3c;
}

html[dark] #bio.ytd-channel-about-metadata-renderer,
html[dark] #content-text.ytd-backstage-post-renderer,
html[dark] #description.ytd-channel-about-metadata-renderer,
html[dark] #right-column.ytd-channel-about-metadata-renderer .style-scope.ytd-channel-about-metadata-renderer,
html[dark] .subheadline.ytd-channel-about-metadata-renderer,
html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(2) tp-yt-paper-item.ytd-compact-link-renderer #label,
html[dark] [menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(5) tp-yt-paper-item.ytd-compact-link-renderer #label,
html[dark] [page-subtype=channels] yt-dropdown-menu:not(.has-items) #label-text.yt-dropdown-menu,
html[dark] [page-subtype=history] #contents.ytd-browse-feed-actions-renderer tp-yt-paper-button,
html[dark] [page-subtype=history] .input-content.tp-yt-paper-input-container input,
html[dark] [page-subtype=history] ytd-compact-link-renderer:not([has-secondary]) tp-yt-paper-item.ytd-compact-link-renderer,
html[dark] [page-subtype=history] ytd-compact-link-renderer[compact-link-style=compact-link-style-type-history-my-activity-link] #content-icon.ytd-compact-link-renderer[hidden] + #primary-text-container.ytd-compact-link-renderer > #label.ytd-compact-link-renderer,
html[dark] ytd-video-renderer[is-backstage-video] #video-title.ytd-video-renderer {
  color: #fff !important;
}

html[dark] [page-subtype=history] .input-content.tp-yt-paper-input-container #paper-input-label-1 {
  color: #666;
}

html[dark] ytd-app #checkbox.checked.tp-yt-paper-checkbox #checkmark.tp-yt-paper-checkbox {
  filter: invert(1);
}

.sbsb_c.gsfs:last-child {
  display: none;
}

html #share-url.yt-copy-link-renderer {
  font-size: 23px;
  color: #666;
  margin-left: 2px;
  max-width: 315px;
}

#title.yt-share-panel-header-renderer {
  border-bottom: 3px solid var(--oldcolor);
}

#contents.yt-third-party-share-target-section-renderer yt-share-target-renderer.yt-third-party-share-target-section-renderer {
  margin-right: 3px;
}

.yt-third-party-network-section-renderer .input-content.tp-yt-paper-input-container,
html #bar.yt-copy-link-renderer {
  background: 0 0;
  border: 1px solid #d3d3d3;
  box-shadow: inset 0 0 1px rgb(0 0 0/5%);
}

html:not([dark]) #bar.yt-copy-link-renderer:hover,
html:not([dark]) .yt-third-party-network-section-renderer .input-content.tp-yt-paper-input-container:hover {
  border-color: #b9b9b9;
}

html:not([dark]) #bar.yt-copy-link-renderer:focus-within,
html:not([dark]) .yt-third-party-network-section-renderer .input-content.tp-yt-paper-input-container:focus-within {
  box-shadow: inset 0 0 1px rgb(0 0 0/10%);
  border-color: #1b7fcc;
}

html[dark] #bar.yt-copy-link-renderer,
html[dark] .yt-third-party-network-section-renderer .input-content.tp-yt-paper-input-container {
  border-color: #333;
}

.ytd-unified-share-panel-renderer yt-start-at-renderer.yt-third-party-network-section-renderer {
  padding: 0;
  margin: 0;
  border: 0;
  display: inline-block;
}

.yt-third-party-network-section-renderer .input-content.tp-yt-paper-input-container {
  padding-top: 1px;
  padding-bottom: 2px;
  padding-left: 3px;
}

yt-copy-link-renderer.yt-third-party-network-section-renderer {
  max-width: none;
}

#copy-link.yt-third-party-network-section-renderer,
#start-at.yt-third-party-network-section-renderer {
  display: inline-block;
}

#start-at.yt-third-party-network-section-renderer {
  vertical-align: super;
  margin-left: 20px;
}

.yt-third-party-network-section-renderer tp-yt-paper-button.yt-button-renderer {
  padding: 0;
  width: max-content;
  min-width: 0;
}

.scroll-button {
  border-radius: 0 !important;
}

yt-third-party-network-section-renderer .scroll-button {
  display: none;
}

yt-share-target-renderer:first-child,
yt-share-target-renderer:nth-child(5) {
  position: absolute;
  top: -35px;
  left: 60px;
}

yt-share-target-renderer:nth-child(5) {
  left: 130px;
}

yt-share-target-renderer:nth-child(5) yt-icon.yt-share-target-renderer {
  display: none;
}

#title.yt-share-panel-title-v15-renderer,
yt-share-target-renderer:first-child #title,
yt-share-target-renderer:nth-child(5) #title {
  font: 500 13px roboto;
  width: auto;
}

.yt-third-party-share-target-section-renderer yt-share-target-renderer:first-child yt-icon {
  display: none;
}

yt-share-target-renderer:not(:first-child):not(:nth-child(5)) #title {
  display: none;
}

yt-share-target-renderer:nth-child(2) yt-icon.yt-share-target-renderer {
  background: #25d366;
}

yt-share-target-renderer:nth-child(3) yt-icon.yt-share-target-renderer {
  background: #3b5998;
}

yt-share-target-renderer:nth-child(4) yt-icon.yt-share-target-renderer {
  background: #1da1f2;
}

yt-share-target-renderer:nth-child(6) yt-icon.yt-share-target-renderer {
  background: #ffe812;
}

yt-share-target-renderer:nth-child(7) yt-icon.yt-share-target-renderer {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-sharing-vflsuIoGD.png) 0 -1238px;
  background-size: auto;
  width: 32px;
  height: 32px;
}

yt-share-target-renderer:nth-child(8) yt-icon.yt-share-target-renderer {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-sharing-vflsuIoGD.png) 0 -284px;
  background-size: auto;
  width: 32px;
  height: 32px;
}

yt-share-target-renderer:nth-child(9) yt-icon.yt-share-target-renderer {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-sharing-vflsuIoGD.png) 0 -1013px;
  background-size: auto;
  width: 32px;
  height: 32px;
}

yt-share-target-renderer:nth-child(10) yt-icon.yt-share-target-renderer {
  background: no-repeat url(//s.ytimg.com/yts/imgbin/www-sharing-vflsuIoGD.png) 0 -1562px;
  background-size: auto;
  width: 32px;
  height: 32px;
}

yt-share-target-renderer:nth-child(11) yt-icon.yt-share-target-renderer {
  background: #f57d00;
}

yt-share-target-renderer:nth-child(12) yt-icon.yt-share-target-renderer {
  background: #35465c;
}

yt-share-target-renderer:nth-child(13) yt-icon.yt-share-target-renderer {
  background: #0077b5;
}

yt-share-target-renderer:nth-child(14) yt-icon.yt-share-target-renderer {
  background: #051b0d;
}

yt-share-target-renderer:nth-child(15) yt-icon.yt-share-target-renderer {
  background: #ff8226;
}

yt-share-target-renderer:nth-child(16) yt-icon.yt-share-target-renderer {
  background: #ce2e2d;
}

yt-share-target-renderer:nth-child(10) svg,
yt-share-target-renderer:nth-child(7) svg,
yt-share-target-renderer:nth-child(8) svg,
yt-share-target-renderer:nth-child(9) svg {
  display: none !important;
}

.ytp-right-controls > button:first-child {
    display:none;
}
.ytp-right-controls > button:first-child[aria-label="Autoplay is on"] {
    display:inline-block
}
yt-related-chip-cloud-renderer.style-scope {
    display:none;
}

#upnext.ytd-compact-autoplay-renderer {
    font-size: 13px !important;
    line-height: 1.3em !important;
    font-weight: 500 !important;
}

html:not([dark]) #upnext.ytd-compact-autoplay-renderer {
    color: #222;
}

#autoplay.ytd-compact-autoplay-renderer {
    font-size: 13px !important;
    text-transform: none !important;
}

#toggle.ytd-compact-autoplay-renderer[checked] .toggle-label {
    background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -53px -563px;
}

#toggle.ytd-compact-autoplay-renderer .toggle-label {
    height: 7px;
    width: 10px;
    right: 31px;
    top: 1px;
}

#head.ytd-compact-autoplay-renderer {
    margin-bottom: 0 !important;
    width: 402px;
}

ytd-compact-autoplay-renderer ytd-compact-video-renderer.ytd-item-section-renderer {
    margin-top: 7px !important;
}

ytd-compact-autoplay-renderer {
    margin-bottom: 0 !important;
    padding-bottom: 7px !important;
    width: 381px;
}

.toggle-container.tp-yt-paper-toggle-button {
    width: 37px !important;
    height: 15px !important;
}

html[dark] ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer ytd-compact-autoplay-renderer {
    border-bottom-color: var(--yt-spec-10-percent-layer) !important;
}

#secondary-inner.ytd-watch-flexy {
    width: 417px !important;
}

html ytd-playlist-thumbnail.ytd-playlist-sidebar-primary-info-renderer {
    max-width: 220px;
    position: absolute;
    width: 220px;
}

html .ytd-playlist-sidebar-primary-info-renderer #overlays {
    visibility: hidden;
}

html .ytd-playlist-sidebar-primary-info-renderer:hover #overlays {
    visibility: visible;
}

html .ytd-playlist-sidebar-primary-info-renderer ytd-thumbnail-overlay-side-panel-renderer {
    width: 100% !important;
}

html ytd-browse[page-subtype="playlist"][has-sidebar_] ytd-two-column-browse-results-renderer.ytd-browse {
    padding: 0;
    margin: 0 auto;
}

html[dark] div.ytd-simple-menu-header-renderer ytd-button-renderer {
    filter: invert(1);
}

html[dark] [page-subtype="playlist"] #top-level-buttons-computed .ytd-menu-renderer a {
    background-color: #1c1c1c;
    border: solid 1px #333;
}

html[dark] [page-subtype="playlist"] #top-level-buttons-computed .ytd-menu-renderer a::after {
   color: #fff;
}

html[dark] [page-subtype="playlist"] #top-level-buttons-computed .ytd-menu-renderer a:hover {
    background-color: #444;
    border-color: #3c3c3c;
}

html[dark] [page-subtype='playlist'] #top-level-buttons-computed .ytd-menu-renderer.style-text yt-icon-button {
    filter: invert(1);
}
/*toast*/
tp-yt-paper-toast.paper-toast-open {
    background: #2793e6;
    border:1px solid #3a78ab;
    text-shadow: 0 0 1px rgb(0 0 0 / 45%);
    color:#fff;
    text-shadow: 0 0 1px rgb(0 0 0 / 45%);
    width:auto;
    max-width:none;
    padding:3px 6px!important;
    max-height:27px;
    min-height:0!important;
    font-weight:bold
}

ytd-app tp-yt-paper-toast.yt-notification-action-renderer {
    font-weight:bold
}

tp-yt-paper-toast.paper-toast-open #text-container yt-formatted-string:before {
    background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflEXP50f.png) -51px -1294px;
    background-size: auto;
    width: 19px;
    height: 19px;
    margin-right:5px;
    content:"";
    display:inline-block;
    transform:scale(.8)
}
tp-yt-paper-toast tp-yt-paper-button#button {
    padding:2px 5px!important
}
yt-notification-action-renderer {
    width:100%!important;
    height:auto!important;
    padding:0!important;
    max-height:27px;
}

ytd-search #sub-menu {
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 2px;
}

html[dark] ytd-search #sub-menu {
    border-bottom: 1px solid var(--yt-spec-10-percent-layer);
}

.num-results {
    white-space: nowrap;
    color: #555;
    font-size: 11px;
    margin-top: 3px;
}

html[dark] .num-results {
    color: white;
}

.html5-video-player .ytp-live-badge {
    width: auto !important;
}

#items > ytd-guide-entry-renderer:nth-child(2) .guide-icon {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOFJREFUeJztlL0Ng0AMhWlSZ5QMkU0o6KjpIlLAHSNkgkyQLbICA6RPT/hEAk8WxwWJKoolS5Z/3vnZhiT5y0cuvtiXZXny3t/run6i2PiIrQKrqvPROdf22gW0JWcN2FhMV3mRH1BsjUVBoaKd9TQ7pYeNTztdpM98tAPmZnPwaQ41QUBLaaDl0mkcLrVxaoKA9nUtmnssxCIG2DZNc0PnNr8IqF0AwGZtDr43eJyyLOWRZdkulEeMnOhS9Gx0GVZkOctnMyRPh93P5wpFOkKx8X192AZ0m09P6W/2c/hteQFIL1T2NRIk0wAAAABJRU5ErkJggg==);
}

#items > ytd-guide-entry-renderer:nth-child(2):hover .guide-icon,
#items > ytd-guide-entry-renderer:nth-child(2) tp-yt-paper-item[aria-selected="true"] .guide-icon {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMhJREFUeJztVDEKwzAMzNK5a96RF/g1Bj/Dz+neOT/wngdk9ujNqFKREyNsBUOm0oODkJNPkqVkmv4oiDE+AcAjAzIx6dmTNmSGhwxyhz5IMyNmNVbkwlyFpptym7KyuUo2y0rV9vnOaqRGTBIxXjMMjftyle4aetAMZfbjUCdZs4srww35Zm6jhnUV3+k2YuS01ZbLUHZr7aMXRxqc29Afilgb14uDczj62nDwsdg55xe1SBVxVQu/KzCqmTC959MruPXn8Nv4ADy6IMvnpMUsAAAAAElFTkSuQmCC)
}
`);
}
waitForElement('ytd-compact-link-renderer').then(function (elm) {
  document.querySelector('#container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(4)').style.left = document.querySelector('[menu-style="multi-page-menu-style-type-system"] #container yt-multi-page-menu-section-renderer:first-child ytd-compact-link-renderer:nth-child(3) a').offsetWidth + "px";
});

function getLikes() {
  const topLevelButtons = document.querySelector("ytd-app").data.response.contents.twoColumnWatchNextResults.results.results.contents.find(e => e.hasOwnProperty("videoPrimaryInfoRenderer")).videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0];
  const buttonText = topLevelButtons.isToggled ? topLevelButtons.toggleButtonRenderer.toggledText : topLevelButtons.toggleButtonRenderer.defaultText;
  const likes = parseInt(buttonText.accessibility.accessibilityData.label.match(/\d/g).join(""));
  const likesText = document.querySelector("#info ytd-toggle-button-renderer.style-text[is-icon-button]:first-child #text.ytd-toggle-button-renderer");
  likesText.innerHTML = likes.toLocaleString();

  document.querySelector("ytd-toggle-button-renderer.style-scope:first-child").addEventListener("click", function () {
    const liked = likesText.classList.contains("style-default-active");
    likesText.innerHTML = liked ? (likes + 1).toLocaleString() : likes.toLocaleString();
  }, false);
}

async function getDislikes() {
  await new Promise(resolve => setTimeout(resolve, 500)); // this is necessary because otherwise RYD will *sometimes* update the value after this does. would like to do a better way than this though
  const videoId = document.querySelector("ytd-app").data.endpoint.watchEndpoint.videoId;
  let response = await fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`).then((response) => response.json()).catch();
  if (response === undefined || "traceId" in response) return;

  const dislikesText = document.querySelector("#info ytd-toggle-button-renderer.style-text[is-icon-button]:nth-child(2) #text.ytd-toggle-button-renderer");
  const likesText = document.querySelector("#info ytd-toggle-button-renderer.style-text[is-icon-button]:first-child #text.ytd-toggle-button-renderer");
  if (response.dislikes == 0 && response.likes == 0 && response.viewCount == 0) { // no ratings
    dislikesText.innerHTML = "";
    likesText.innerHTML = "";
  } else { // we have ratings!
    dislikesText.innerHTML = response.dislikes.toLocaleString();
    document.querySelector("ytd-toggle-button-renderer.style-scope:nth-child(2)").addEventListener("click", function () {
      const disliked = dislikesText.classList.contains("style-default-active");
      dislikesText.innerHTML = disliked ? (response.dislikes + 1).toLocaleString() : response.dislikes.toLocaleString();
    }, false);
  }
}

function restoreDropdown(iconLabel, firstChild, dropdownChildren) {
  const iconLabelSel = document.querySelector(iconLabel);
  if (!window.location.search.includes("sort")) // channel sort dropdown fix
    iconLabelSel.innerHTML = document.querySelector(firstChild).innerHTML;

  for (const x of document.querySelectorAll(dropdownChildren)) {
    x.addEventListener("click", function () {
      iconLabelSel.innerHTML = this.innerHTML;
    }, false);
  }
}

function restoreOldAutoplay() {
  if (!document.querySelector("ytd-playlist-panel-renderer").hidden)
    return;

  let autoplayTemplate = `<ytd-compact-autoplay-renderer is-two-columns="" queue-is-empty="" style="border-bottom-color:rgba(0, 0, 0, 0.1);border-bottom-style:solid;border-bottom-width:1px;display:block;margin-bottom:16px;padding-bottom:8px;"><div id="head" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;align-items:center;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:flex;flex-direction:row;margin-bottom:12px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">
	  <div id="autoplay" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(96, 96, 96);font-size:13px;font-weight:500;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;display:block;letter-spacing:0.007px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-transform:uppercase;">Autoplay</div>
	  <paper-toggle-button active="" aria-disabled="false" aria-label="Autoplay" aria-pressed="true" checked="" id="toggle" noink="" role="button" tabindex="0" toggles="" style="font-family:Roboto, Noto, sans-serif;-webkit-font-smoothing:antialiased;align-items:center;display:flex;flex-direction:row;margin-left:8px;touch-action:pan-y;"><div style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:inline-block;height:14px;margin-bottom:4px;margin-left:1px;margin-right:1px;margin-top:4px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;position:relative;width:36px;"><div id="toggleBar" style="min-height:13.9985px;background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgb(204, 204, 204);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-left-radius:8px;border-top-right-radius:8px;border-top-style:none;border-top-width:0px;display:block;height:100%;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;opacity:0.5;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;pointer-events:none;position:absolute;width:100%;"></div><div id="toggleButton" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgb(6, 95, 212);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-left-radius:50%;border-bottom-right-radius:50%;border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-left-radius:50%;border-top-right-radius:50%;border-top-style:none;border-top-width:0px;box-shadow:rgba(0, 0, 0, 0.6) 0px 1px 5px 0px;display:block;height:20px;left:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;position:absolute;right:15.9916px;top:-3px;transform:matrix(1, 0, 0, 1, 16, 0);width:20px;will-change:transform;"></div></div><div style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(33, 33, 33);background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(33, 33, 33);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(33, 33, 33);border-left-style:none;border-left-width:0px;border-right-color:rgb(33, 33, 33);border-right-style:none;border-right-width:0px;border-top-color:rgb(33, 33, 33);border-top-style:none;border-top-width:0px;display:inline-block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:8px;padding-right:0px;padding-top:0px;pointer-events:none;position:relative;vertical-align:middle;">
	  </div></paper-toggle-button>
	  <paper-tooltip for="toggle" id="tooltip" role="tooltip" tabindex="-1" style="z-index:1002;font-size:14px;font-weight:400;cursor:default;display:block;letter-spacing:normal;line-height:21px;outline-color:rgb(0, 0, 0);outline-style:none;outline-width:0px;position:absolute;user-select:none;">


		<div id="tooltip" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(255, 255, 255);font-family:Roboto, Noto, sans-serif;font-size:13px;font-weight:400;-webkit-font-smoothing:antialiased;background-attachment:scroll;background-clip:border-box;background-color:rgb(97, 97, 97);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(255, 255, 255);border-bottom-left-radius:2px;border-bottom-right-radius:2px;border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(255, 255, 255);border-left-style:none;border-left-width:0px;border-right-color:rgb(255, 255, 255);border-right-style:none;border-right-width:0px;border-top-color:rgb(255, 255, 255);border-top-left-radius:2px;border-top-right-radius:2px;border-top-style:none;border-top-width:0px;display:none;letter-spacing:normal;line-height:18px;margin-bottom:8px;margin-left:8px;margin-right:8px;margin-top:8px;outline-color:rgb(255, 255, 255);outline-style:none;outline-width:0px;padding-bottom:8px;padding-left:8px;padding-right:8px;padding-top:8px;text-transform:none;">
		  When autoplay is enabled, a suggested video will automatically play next.
		</div>
	</paper-tooltip>
	</div>
	<div id="contents" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"><ytd-compact-video-renderer lockup="" thumbnail-width="168" style="display:flex;flex-direction:row;padding-bottom:8px;position:relative;"><div id="dismissable" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:flex;flex-direction:row;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;width:100%;">
	  <ytd-thumbnail use-hovered-property="" style="display:block;flex-basis:auto;flex-grow:0;flex-shrink:0;height:94px;margin-right:8px;position:relative;width:168px;"><a aria-hidden="true" href="https://archive.ph/o/sSEF9/https://www.youtube.com/watch?v=T8LiGZhK-bg" id="thumbnail" rel="nofollow" tabindex="-1" target="_blank" style="min-height:93.9874px;color:rgb(3, 3, 3);bottom:0px;cursor:pointer;display:block;height:100%;left:0px;margin-left:auto;margin-right:auto;overflow-x:hidden;overflow-y:hidden;position:absolute;right:0px;text-decoration-color:rgb(3, 3, 3);text-decoration-line:none;text-decoration-style:solid;top:0px;">
	  <yt-img-shadow ftl-eligible="" loaded="" style="background-color:rgba(0, 0, 0, 0);display:block;flex-basis:auto;flex-grow:0;flex-shrink:0;left:0px;opacity:1;position:absolute;top:46.9937px;transform:matrix(1, 0, 0, 1, 0, -46.838);width:100%;"><img alt="" id="img" loading="lazy" src="/sSEF9/66b00c60fd9c689e15292b71dd448b0875be298a.webp" style="min-height:93.9874px;min-width:167.997px;background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-left-radius:0px;border-top-right-radius:0px;border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;max-height:none;max-width:100%;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;width:168px;" width="168"></yt-img-shadow>

	  <div id="overlays" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"></div>
	  <div id="mouseover-overlay" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"></div>
	  <div id="hover-overlays" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"></div>
	</a>
	</ytd-thumbnail>
	  <div style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;min-width:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;width:100%;">
		<div style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;box-sizing:border-box;display:flex;flex-direction:column;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;min-width:0px;padding-bottom:0px;padding-left:0px;padding-right:24px;padding-top:0px;width:100%;">
		  <a href="https://archive.ph/o/sSEF9/https://www.youtube.com/watch?v=T8LiGZhK-bg" rel="nofollow" target="_blank" style="color:rgb(3, 3, 3);cursor:pointer;display:inline-block;min-width:0px;text-decoration-color:rgb(3, 3, 3);text-decoration-line:none;text-decoration-style:solid;">
			<h3 style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(3, 3, 3);font-size:11.7px;font-weight:700;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:block;margin-block-end:0px;margin-block-start:0px;margin-bottom:0px;margin-inline-end:0px;margin-inline-start:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">
			  <ytd-badge-supported-renderer disable-upgrade="" style="align-items:center;display:none;flex-direction:row;" hidden="">
			  </ytd-badge-supported-renderer>
			  <span aria-label="Watch again: Trump's legal team holds press conference about the election by The Independent 4 days ago 1 hour, 31 minutes 2,289,823 views" id="video-title" title="Watch again: Trump's legal team holds press conference about the election" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;font-size:14px;font-weight:500;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:-webkit-box;letter-spacing:normal;line-height:16px;margin-bottom:4px;margin-left:0px;margin-right:0px;margin-top:0px;max-height:32px;overflow-x:hidden;overflow-y:hidden;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;">
				Watch again: Trump's legal team holds press conference about the election
			  </span>
			</h3>
			<div style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">
			  <ytd-video-meta-block no-endpoints="" style="display:flex;flex-direction:column;">
	<div id="metadata" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:flex;flex-direction:column;flex-wrap:wrap;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">
	  <div id="byline-container" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;font-size:13px;font-weight:400;align-items:center;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:flex;flex-direction:row;flex-wrap:wrap;letter-spacing:normal;line-height:18px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;max-height:18px;max-width:100%;overflow-x:hidden;overflow-y:hidden;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-transform:none;">
		<ytd-channel-name id="channel-name" style="z-index:300;color:rgb(96, 96, 96);align-items:center;align-self:flex-start;display:flex;flex-direction:row;max-width:100%;"><div id="container" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;overflow-x:hidden;overflow-y:hidden;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">
	  <div id="text-container" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">
		<yt-formatted-string ellipsis-truncate="" id="text" title="" style="font-size:13px;font-weight:400;display:block;line-height:18px;overflow-x:hidden;overflow-y:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:none;white-space:nowrap;">The Independent</yt-formatted-string>
	  </div>
	  <paper-tooltip fit-to-visible-bounds="" offset="10" role="tooltip" tabindex="-1" style="z-index:1002;cursor:default;display:block;outline-color:rgb(96, 96, 96);outline-style:none;outline-width:0px;position:absolute;user-select:none;">


		<div id="tooltip" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(255, 255, 255);font-family:Roboto, Noto, sans-serif;font-size:13px;font-weight:400;-webkit-font-smoothing:antialiased;background-attachment:scroll;background-clip:border-box;background-color:rgb(97, 97, 97);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(255, 255, 255);border-bottom-left-radius:2px;border-bottom-right-radius:2px;border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(255, 255, 255);border-left-style:none;border-left-width:0px;border-right-color:rgb(255, 255, 255);border-right-style:none;border-right-width:0px;border-top-color:rgb(255, 255, 255);border-top-left-radius:2px;border-top-right-radius:2px;border-top-style:none;border-top-width:0px;display:none;letter-spacing:normal;line-height:18px;margin-bottom:8px;margin-left:8px;margin-right:8px;margin-top:8px;outline-color:rgb(255, 255, 255);outline-style:none;outline-width:0px;padding-bottom:8px;padding-left:8px;padding-right:8px;padding-top:8px;text-transform:none;">

		The Independent

		</div>
	</paper-tooltip>
	</div>
	<ytd-badge-supported-renderer style="align-items:center;display:flex;flex-direction:row;margin-right:8px;">
	  <div style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;font-size:12px;font-weight:500;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-left-radius:2px;border-bottom-right-radius:2px;border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-left-radius:2px;border-top-right-radius:2px;border-top-style:none;border-top-width:0px;display:block;flex-basis:auto;flex-grow:0;flex-shrink:0;line-height:12px;margin-bottom:1px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:4px;padding-right:0px;padding-top:0px;white-space:normal;">
		<yt-icon style="color:rgb(96, 96, 96);align-items:center;display:inline-flex;fill:rgb(96, 96, 96);height:12.9863px;justify-content:center;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;position:relative;stroke:none;vertical-align:middle;width:12.9863px;"><svg focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="min-height:12.9863px;min-width:12.9863px;display:block;height:12.9863px;overflow-x:hidden;overflow-y:hidden;pointer-events:none;width:12.9863px;"><g style="transform-origin:0px 0px;"><path clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z" fill-rule="evenodd" style="clip-rule:evenodd;fill-rule:evenodd;transform-origin:0px 0px;"></path></g></svg></yt-icon>
		<span style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"></span>
	  </div>
	<dom-repeat as="badge" id="repeat" style="display:none;"><template style="display:none;"></template></dom-repeat>
	</ytd-badge-supported-renderer>
	</ytd-channel-name>
		<div id="separator" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:none;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">•</div>
	  </div>
	  <div id="metadata-line" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(96, 96, 96);font-size:13px;font-weight:400;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;display:flex;flex-wrap:wrap;letter-spacing:normal;line-height:18px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;max-height:36px;max-width:100%;overflow-x:hidden;overflow-y:hidden;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-transform:none;">

		  <span style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;display:inline-block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">2.2M views<span style="margin-bottom:0px;margin-left:4px;margin-right:4px;margin-top:0px;">•</span></span>

		  <span style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;display:inline-block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">4 days ago</span>
		<dom-repeat strip-whitespace="" style="display:none;"><template style="display:none;"></template></dom-repeat>
	  </div>
	</div>
	<div id="additional-metadata-line" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;font-size:13px;font-weight:400;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(3, 3, 3);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(3, 3, 3);border-left-style:none;border-left-width:0px;border-right-color:rgb(3, 3, 3);border-right-style:none;border-right-width:0px;border-top-color:rgb(3, 3, 3);border-top-style:none;border-top-width:0px;display:block;letter-spacing:normal;line-height:18px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;max-height:18px;overflow-x:hidden;overflow-y:hidden;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-transform:none;">
	  <dom-repeat style="display:none;"><template style="display:none;"></template></dom-repeat>
	</div>

	</ytd-video-meta-block>
			  <ytd-badge-supported-renderer style="align-items:center;display:flex;flex-direction:row;">
	  <div style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(96, 96, 96);font-size:12px;font-weight:500;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0.05);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-left-radius:2px;border-bottom-right-radius:2px;border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-left-radius:2px;border-top-right-radius:2px;border-top-style:none;border-top-width:0px;display:block;line-height:12px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:3px;padding-left:4px;padding-right:4px;padding-top:3px;white-space:normal;">
		<yt-icon disable-upgrade="" style="color:rgb(96, 96, 96);align-items:center;display:none;fill:rgb(96, 96, 96);height:13px;justify-content:center;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;position:relative;stroke:none;vertical-align:middle;width:13px;" hidden="">
		</yt-icon>
		<span style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(96, 96, 96);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(96, 96, 96);border-left-style:none;border-left-width:0px;border-right-color:rgb(96, 96, 96);border-right-style:none;border-right-width:0px;border-top-color:rgb(96, 96, 96);border-top-style:none;border-top-width:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;">New</span>
	  </div>
	<dom-repeat as="badge" id="repeat" style="display:none;"><template style="display:none;"></template></dom-repeat>
	</ytd-badge-supported-renderer>
			</div>
		  </a>
		  <div id="buttons" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"></div>
		</div>
		<div id="menu" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"><ytd-menu-renderer style="display:flex;flex-direction:row;opacity:0;position:absolute;right:0px;top:0px;"><div id="top-level-buttons" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:flex;flex-direction:row;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"></div>
	<yt-icon-button id="button" style="font-size:0px;box-sizing:border-box;display:inline-block;height:23.9951px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;position:relative;width:23.9951px;"><button aria-label="Action menu" id="button" style="min-height:23.9951px;background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;color:rgb(0, 0, 0);font-family:Arial;font-size:13.3333px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;text-rendering:auto;-webkit-writing-mode:horizontal-tb;align-items:flex-start;appearance:none;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;box-sizing:border-box;cursor:pointer;display:inline-block;height:100%;letter-spacing:normal;line-height:0;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;outline-color:rgb(0, 0, 0);outline-style:none;outline-width:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;text-indent:0px;text-shadow:none;text-transform:none;vertical-align:middle;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);width:100%;word-spacing:0px;">
	  <yt-icon style="color:rgb(144, 144, 144);align-items:center;display:inline-flex;fill:rgb(144, 144, 144);height:23.9951px;justify-content:center;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;position:relative;stroke:none;vertical-align:middle;width:23.9951px;"><svg focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="min-height:23.9951px;min-width:23.9951px;display:block;height:23.9951px;overflow-x:hidden;overflow-y:hidden;pointer-events:none;width:23.9951px;"><g style="transform-origin:0px 0px;"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" style="transform-origin:0px 0px;"></path></g></svg></yt-icon>
	</button></yt-icon-button>
	</ytd-menu-renderer></div>
		<div id="queue-button" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgb(0, 0, 0);border-bottom-style:none;border-bottom-width:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-top-color:rgb(0, 0, 0);border-top-style:none;border-top-width:0px;display:block;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;opacity:0;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;"></div>
	  </div>
	</div>
	<div id="dismissed" style="background-position:initial;background-repeat:initial;-alias-webkit-background-clip:border-box;background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-color:rgba(0, 0, 0, 0.1);border-bottom-style:solid;border-bottom-width:1px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-left-color:rgba(0, 0, 0, 0.1);border-left-style:solid;border-left-width:1px;border-right-color:rgba(0, 0, 0, 0.1);border-right-style:solid;border-right-width:1px;border-top-color:rgba(0, 0, 0, 0.1);border-top-style:solid;border-top-width:1px;display:none;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;padding-bottom:8px;padding-left:8px;padding-right:8px;padding-top:8px;width:100%;"></div>
	</ytd-compact-video-renderer></div>
	</ytd-compact-autoplay-renderer>`;
  var firstvid = document.querySelector("#items.ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer.style-scope:first-child");
  firstvid.insertAdjacentHTML("beforebegin", autoplayTemplate);
  document.querySelector("ytd-compact-autoplay-renderer #upnext").innerHTML = "Up next";
  document.querySelector("ytd-compact-autoplay-renderer #autoplay").innerHTML = "Autoplay";
  document.querySelector("ytd-compact-autoplay-renderer").removeAttribute("hide-autonav-headline");
  document.querySelector("ytd-compact-autoplay-renderer").removeAttribute("player-move-autonav-toggle");
  document.querySelector("ytd-compact-autoplay-renderer").appendChild(firstvid);
}

function setupSecondaryInfoRenderer() {
  if (window.location.href.indexOf("/watch?") == -1) return;

  const uploadDate = document.querySelector('#info-strings.ytd-video-primary-info-renderer');
  document.querySelector('ytd-video-secondary-info-renderer > #container').prepend(uploadDate);

  if (!document.querySelector("ytd-app").data.response.responseContext.mainAppWebResponseContext.loggedOut) {
    const subCountRenderer = document.querySelector('#owner-sub-count.ytd-video-owner-renderer');
    const subBtnRenderer = document.querySelector("ytd-subscribe-button-renderer");
    subBtnRenderer.appendChild(subCountRenderer);
  }

  getLikes();
}

function setUploadedText(elm) {
  const isNormalUpload = document.querySelector("#chat") == null;
  if (!elm.innerHTML.startsWith("Published on ") && isNormalUpload) {
    elm.insertAdjacentText("afterbegin", "Published on ");
  }
}

async function setupUpdateDependentElements() {
  if (window.location.pathname == "/watch") {
    waitForElement('.ryd-tooltip-bar-container').then(() => getDislikes());
    waitForElement('#items.ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer.style-scope:first-child').then(() => restoreOldAutoplay());
    waitForElement('#top-row.ytd-video-secondary-info-renderer').then(() => setupSecondaryInfoRenderer());
    waitForElement('#info-strings.ytd-video-primary-info-renderer yt-formatted-string').then((elm) => setUploadedText(elm));

    // classic description
    var description;
    waitForElement('tp-yt-paper-button[id="more"]').then((elm) => elm.addEventListener("click", () => description.removeAttribute("collapsed")));
    waitForElement('ytd-expander.ytd-video-secondary-info-renderer').then((elm) => { description = elm });
    waitForElement('ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-structured-description"]').then((elm) => elm?.remove());
  }

  waitForElement("ytd-comments-header-renderer yt-dropdown-menu:last-of-type").then(function () {
    restoreDropdown("ytd-comments-header-renderer #icon-label.yt-dropdown-menu",
      "ytd-comments-header-renderer a.yt-dropdown-menu:first-child > tp-yt-paper-item:first-child > tp-yt-paper-item-body:first-child > div:first-child",
      "ytd-comments-header-renderer a.yt-dropdown-menu > tp-yt-paper-item:first-child > tp-yt-paper-item-body:first-child > div:first-child");
  });

  waitForElement("yt-sort-filter-sub-menu-renderer yt-dropdown-menu:last-of-type").then(function () {
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