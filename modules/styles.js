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
html[dark] .style-scope.ytd-video-primary-info-renderer{
color: #fff;
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
  --logo-2017-dark-header: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA8CAYAAAAjW/WRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDUgNzkuMTY0NTkwLCAyMDIwLzEyLzA5LTExOjU3OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTI4VDE1OjQzOjM2LTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMi0yOFQxNTo0Nzo1My0wODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0yOFQxNTo0Nzo1My0wODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWQyNmE1M2MtMmMxNC1kNzQyLTg3NmItNWJmZTJiMDA4YjMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFkMjZhNTNjLTJjMTQtZDc0Mi04NzZiLTViZmUyYjAwOGIzMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFkMjZhNTNjLTJjMTQtZDc0Mi04NzZiLTViZmUyYjAwOGIzMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWQyNmE1M2MtMmMxNC1kNzQyLTg3NmItNWJmZTJiMDA4YjMxIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTI4VDE1OjQzOjM2LTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1M5mUQAAB3pJREFUeJztnf91ozgQx7/cu/9DB3EHYSuItoLLVRBvBeurIKSC81UQu4IlFaxSwZIOcAe4At0fgrVQNEJgG2FnPu/xDMNIM5YZ9AMhJ0opMAzj5o/YDjDMnOEAYRgPHCAM44EDhGE8cIAwjAcOEIbxwAHCMB7+DNJKkhRABqD9hLUPQ3Z3tFdhvDlk8sO+UtKhxzBBJOSDwiRZAMgBCAC3Uzl0Jt4BFADWUKqO6wpDkA+UT4I7QJIkB/A0tTMTsAewhFJFbEeYD1BTOpJJvbD42AdJkg2uMzgA4AbADyTJMkA3h/7R7K3uSbcm0lXD3T0LAm7/xmz5pJ5HoBsgSfIA4DGKJ9OybpqQPiQhvwHgS5sNzI+ZMXYNso7hRARu0H/3k9BNMheZJ909IS967DEz5BAguva49M74EB6b0TkfkpCLgXJfXsyMMWuQLJYTERE95yUhzwbK39Hfd2FmiPkcRMRyIiIZ/E2fAsC/DjnVjBKefOZCCeArce4nIf+nSWdTHe/OvDEDJIvlRESynvMVgB3cTc8MHy8aKr8i2KPzU2N4c68ckeYqMJtYN9G8iEcaoFMQcuHIyxVIe7jvvswFoAMkSbK4bkSDaiqZSEKeWceC0CvCXGHmSNvESs9uSQigqvR2WUhCnvUc96Vv06Q4PFepjI35SApdZgK6XCsMLyvhkJUgBlHCJiueAiGApyfg+RlYr4Ha6c/0JEnaMz+rhp4Yadc2d9A/WJtWEOmldZwCWDUb1azdQT+n2RDnl83mwvbDtt+y8eTfxxruG0IJ/b1ObT+FLo/vhqyd7fEKXRa1J/2iSe97CP7W6MiOVCkFBeQKUGfd8lz9pq6VWi7Pay98E0op9GyG8x3MtC5KK5+0kYUiB/qjHLoU+QBdu4zkAH9D7VOElBlVTlBKLZVSdU96k6WZPs77IDc3wMsLIKWuWeZPQchF85kR56XjeMjrAPf4PLMbKAr0l9k93DX4Arr8hgxAvcCYShT3han7e+DnT2CzARaLqK70UMI97SSzPm0KY3+Fce/KfId/7te1EzKQAribnGuMG53N2515vFH4+AiUJZDnsT3xUThkwvo02aNbg6w8eT/D/QJYS+459xnYob+MHqzjBYC/CN1n6IelW+L8777KPAIE0M2upyc9yvXwMKXlNFBPOmTtzN5Fj34Gep7b3zi8mEb9YKLHt2tmh0MnW4Auoxt0f0tB6L3j0Blfgp6QKoBDgFCZTc/tLfDjh+6fZNkUFkONSEK+gLsZYOoLIu0e3ZppQ+jd4vM2s1bWsfToZsa+IHSKnuOWBTCnGsTm/h749Uv3T9I0tjeAHm9/d8hXhH5h7C8IndI6lh77VB7XTmEdV4HpFoS8DMxvAcw5QFoeH3Wza7WK7QngvoAzh2yHbsG7dIZyijyugcpzThj7GaFTDzE2/wCZF4VD5upbuPSOJT1DnpdIFah37NzCDJjySfpYtltde8zjybs8sR4zX1JgzjXI2xvw5QuwXM4lOFpeA3SKczvBTENbg0iEP5A5L7udrjGKYiqL5UB9CXp8HfCP1TPxWaPbD1n4lOfTxNrv9STG6R8W1gP1C7jfMjTPM/Nl0GyGeQTIdqsD4zKmwleg3zIEuP9xVcTtg7y9AV+/6n7GZQRHiyTkO/Dbg1dFnBpkv9f9jM0mivkTUA2UM/OBWoDCpga6nfQnSvOkzO2FKb7jfzZKDGgGT1eDSKlrjLk1pXi1d8ZDGyD12S1JeXYTI6Bmcs6ROrYDMyHznKuM/T3CnqZnOLyUVhl5SABSB4hSJZKoq8zHopzIToXjnzOVx7txFaSec5WxX8Jd5nb61NCz9aU5inVJd9NTUU9kpyLkC+s4G5HHnEgnsJF5ztXGfhWYPvUZMwOk9CleKeVEdiQhv0X3B3sg9PYID5CQ/I6lJOTtSi8tyxPYsvPw5VkS+yYPPcctFdANEOkxfK2UE9mRnnO/oN8p2YAeSSwG5FdAX0RrjF/Wp4/ac04a9l9OYOsF+nvk0Bct9STcnuJTEHp30L4JaF+ppYBKoDuKVdI+Xi1yQltb0D+Gb+oK8PFCrzy6tzjNhemj9Jy7O4N933pWLYV1XMG9nhmgF8L47pC3vKP5jocaRP9v3y7AkWthO/EQb45x/bxXfAzkCuGTIp9H2vVRDMjz2xF2doF29nDXlquRdn+ns6eajM3w0thj+pVCKuhqfcjF+g66zZ0HpN82euUAm6GE2P8PxzXzJMLKbAl3s6/E8AD9BuOG1A0QXYtQq0ZcEysoVUWwW0J3ovvKuF3mJgPd3pfQP6br4tk36ZeG3VOzbmy42EGv1rJqjse+AiChfRdwt2720GVQePLYQC/x0+fDK4AvsAKa/wY6LgKHBZkBfUHUGH5Bi2Zr05aYbgg7xWFB6da+PJOtDN1RsqF2UiOPzEhP5uMOEADNv8Dm0F+cmtp9KbxD32XWPLWEGQIdIB2tJEU38lqEpZli3PKaY7CrzBrdO68EACglp3CGuU7CAoRhPinzXbSBYWYABwjDeOAAYRgPHCAM44EDhGE8cIAwjAcOEIbx8D8NRzVRyTmESgAAAABJRU5ErkJggg==);
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
  padding: 15px 15px;
  min-height: 60px;
}

#info ytd-video-primary-info-renderer {
  padding: 15px;
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
  padding: 0 9px !important;
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
    display: none !important;
}
.sbpqs_a::before, .sbqs_c::before {
    content: none !important;
}

#masthead #search-form.ytd-searchbox {
  height: 29px;
}

ytd-searchbox[has-focus][desktop-sbox-icon="icon_20_ptext_purple"] #container.ytd-searchbox, ytd-searchbox[has-focus][desktop-sbox-icon="icon_20_ptext_primary"] #container.ytd-searchbox {
    padding-left: 6px !important;
    margin-left: 34px !important
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
    margin-left: 0;
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
html[dark] ytd-button-renderer.style-visibly-disabled[is-icon-button] #text.ytd-button-renderer,
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
  content: url(data:image/gif;base64,R0lGODlhUAAUAPcAAAD/AGFleWFzmWJjjGNjZGNja2NlcmNtlWNuiWRma2Rtf2VleGZjamZkZGdmamdsdGd2jWd7m2h9pGtmaG1iXm1lYG1qaW2Jo25jY25mZG5ta25xem6Ptm9vc3CDnXF9kXJ6h3R4fHeJn3iVuXllXnlnZXmEnXmMpHmRrHpuZXpxbHqBknx7en18fn2Ah358fn5+fn6JlX99gICjx4JiYIKBgoKZuoR6dYSBf4SWrYVnZoWEhYWfvIZvYoZxaIat1YlqXolwW4l4bImAd4qKioqNkoqUnoqmxIyguI6qxZGPkJGftZGz1ZK405N1aZOowJO845WHfZaQjpavx5eWmJedp5iEdJiVk5lwYZl4apt3X5yCaZyvyJ2cm52kp5+dn6DI7qGrt6KNfqOEa6OFcaOWh6SjpaS706bB36izwqjK4qqpqqu9zavG3KvS8K6Thq+Fca+urq+wtrCckLC8w7GMdrGOb7Kbh7KwsrKxsrPM6rPZ7rSztLWZfLXd/re1uLfe9biwqri5urmolrnG1bq6u7vS6ry8vb2ajr7FzL7P3MCfhMC+vsDb7MHk+MKbc8LBw8Tq/sW0qcXExcatlMbDv8fGx8i8rsmph8nIycrKysrMy8vJy8vKy8vW4syulc2yn83Mzc3d6c3m+M6yms7Nzs/p8NDu+NHQ0dHt/tKwldK+rdPHvtPT09S+otTU1dfV1ti/m9jk8Nmzk9n5/trOrtrZ29zq893w9d7e3t/h4uC8luDPveDf4OHXy+Lh4uPNsOP1/uTi5OXFn+XVwOXk4uXs9ebl5efh3Of8/ujn6Oj0+unJp+ne0enfxOrz9uvp6uvr7uzr6uzs7e7dyu/mw/Dq4fDu8PD3+PHXvPHn2PHx8fLly/L6/vPy8/P19vP9/vTVsPX09ff19Pjw6Pj3+Pnfvvnr2Pr5+vvlwfv6+/v8+fv8/Pv8/vzy2/z16Pz65fz78v37/f386/39/P39/f7xzf762/778v77+/78+f78/v7+/gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/iNSZXNpemVkIG9uIGh0dHBzOi8vZXpnaWYuY29tL3Jlc2l6ZQAh+QQFCgAAACwAAAAAUAAUAAAI/wD3CRxIsKDBgwgTKlzIUCC/hxAf1psYsaLFixgzatyY8aA6W4x6yWtIsqRJk/JsdZFhptfJlzBPylMGC9ohGS9qZJombFu9mAzr+fJUL586oAUlKoPEx1KmLzXWvILVyda2i9bMPOOokZ6kJ+1YhWHHlaNAebDy5OFjK5elX786aeqk7KC2DreQegWLzFY7pAMn1oM2Kc9Owdeo2vImuPFdXI3rrUMGSxe7ifmswbKFDXMxWMe+trOmi14xYdIqX65Xzhasa7meRZ498ZqwXLamRb52TFjP2XdvNY43yMUXHGG65VtVwwwRI9jysWKhhMiNJ+wuLWFHyUWRKyrYtP8bV8bFFSIqRNFuvC9x1W0G5bm3WvBxYF4rjLGzNkTRuECy1EPODZ4MqAg748yBnXbcnfAMO6ys0E2ExuSjTQqiMCSMXHQZVE9cc9VFkH0C1TPIFPXwow8l2I2DyiF/qOBJMyA8s89e2W3HYjv10IjNIE+kOI4QGS40nzfxHUlQPcEFNggXP+1FnhetoEKgLyssc+NXOXIHVo8g/AjlPkMWqVA9vPnmU2C2CXMMY0sG99M+9awiQmfkREGINiEIR84QnljDgnrxKNjljmBiw8qd9Vjjg3rl8KhOOfXQI06KJc7nU22KrRmnBV7EIWqBZRghiBRVYJNnEWso0YEi61y14sIaXaiwoI5f0rgMOWIY0aoForxThiL0rLKdNUQEKNGGndBl2zZxdRKKMilWRE4lkGQLiXouQvIKpQJqMskxqOgiGSyQ2GILUci8wk4zRDXKSTf1bCOuLUTqU4ox9SDjyXiZYMPPQPMJo5jBVSEJGFLkJFJOPr6EwO+cCsl3DLQcKsObNyMtHFM978xBxBUtEHKZSWgqprDHC6NTTC7RTLTQRWi+WW1ZOOesc0QIUczyzyUFBAAh+QQFCgAAACwAAAEAUAATAAAI0QABCBxIsKDBgwgTKlzIMKE8ZbCmNZxIsaLFfcog8bE0TZ48iyBDVrwmbNurPHj42LLFqNdHkTBjDrwGq5OtXJP4ZMrUpYaZX/sOfgEQVCY7mQfrCeukqdMxaLamFZLxooamhLiQAjjqSStBmja9CZSX64sMM8K8Jjx6UJ1MYcfEDmSH85XCrArpAXChtm9fUQK7Wnzpt7BhpEVDNvtwuCHhu4kbSy4YGWGOglI0TE54rOKkmJ8FthNYr2CmzahRd06tsDKA0axjy55d0TXtmAEBACH5BAUKAAAALAAAAQBMABEAAAiZAAEIHCiQH8GDCBMqXMiwocOB14Rte0ixokWK12B1srVt38WPIC3+6qSp0zFlsKbVC8myJUFhGm3lgsTH0jSDCM243NlQ2bVj217lwcMn10qeSC/WgzaJT6ZpSaNalAfNViZGv9hJ3erQVpcaZn5xDXl06iEZL2p0GssWYa4uMtYIa6sU5C9Uk+bS3duyCt+/gAMLHky4cMiAACH5BAUKAAAALAgAAgBHABAAAAidAAEIHEiwoMGDCBMqXKhwH8OHECNCVHZN2DaJGDNKFAark62LGkOKFAjyVydNnZQ5HMlS47WOtry1nImx3rVjuWBNq0ezIIueB5VB4pNp2kxPDEX0fJUnD59eEXkCFalsElGjNFdMPajOFiOPWLeKBSDPVhcZZn6NXXutkAwYNTrxKyh1LUtYqL7IWCPMbkR5GHNN6ut3rby6hWcGBAAh+QQFCgAAACwAAAEAUAATAAAI6QABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsSLFYxYd0ivILyPBfRW/AOjoUWC7kgivOWwmsB7KlzBjyjwoTNg2ivkGRiEYYqbDetdgdbJ18yDJhfIKKkp4AiG7gSAr7vvVSVMnZQ+jLjzqU2HQod4O4pLoi6JLgVolylMGK9exsAg7kowRc1nEtAXl1VMGKY+laXgpdgCgr2vBXwRtMerVKk8ePrnOQvym0BekgWefTtScsFQXGWZCTeKTSaVhh5wBBFZ4SMaLGpmg2TJ9+i5Eebm+gBZWb9/q2gXXZaSXy5KwpMCT19ObfGZAACH5BAUKAAAALAAAAQBQABMAAAjdAAEIHEiwoMGDCBMqXMiwocOHECNKnEixIkVlFh3WE9hOHoB9GUMSBCkSALuSFetpQzlwI8uXMGNm1DeQCEEWCm0KPCnzoMuPDX/2FMkvJMmITiJugyhU4oeKSR+WYtTL48BrwoQtFCoC4jqW5QjKs9VFhpleADZeg9XJljeDTYdSZHdIBowalpTZkvarU6dQyoo+nAQgrNyB7VoKlJfri9lQkPJYysXW7eGGVoE2zDXp16s8ePjkunbM29HLLOt5hDaJT6Zpp1H7RAfAlsDYQaHZuhZXdsx9wH2/DAgAIfkEBQoAAAAsAAADAE8AEQAACJ0AAQgcSLCgwYMIEypcyLChw4cL80GcSLGixYsYM2o0KG+jR4/sbDFC9XHijYNFLtaz1UWGmV4lY0KUd0jGixqZZOpkKC/XF5e/dgpNyC7XpE6wptUbqnMdQmWQ8liaxrSqwHqw+OThk+uasG1Whe6DNilPplywOtkSFvYhu4nQbE371UlTJ2Vtd+7bV+9aWlve8jK9diyw4MOILQYEACH5BAUKAAAALAAAAgBQABEAAAi2AAEIHEiwoMGDCBMqXMjQoLyHDSNKnEgRgDpbjHpV3MixYj1bXWSYadWx5MB2JgnKOyTjRY1MKUuijCkw1xcZa4TR5FiPZj1lsDJNEiZvZ0MlLBbOpAgNEh9L0nrGLLrQE0cVDWHlwcMnl1GGy74S3AdtUp5M08QmXKFWJTRbuYRta0tXYb1rsDrZmlsXQL6+A391GnwModSdsCYtJGcSr16dgCMLvHaMr+TLmCmuA+A1s2eFAQEAOw==);
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
  fill: #000;
  width: 20px;
  height: 20px;
}

#info ytd-button-renderer[is-icon-button][style-action-button]:nth-child(3) yt-icon {
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -267px -824px;
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
  background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -154px -860px !important;
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

ytd-multi-page-menu-renderer[menu-style="multi-page-menu-style-type-account"] {

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
/*
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(5),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(6),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(7),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(2) ytd-compact-link-renderer:nth-child(8),
[menu-style=multi-page-menu-style-type-system] #container yt-multi-page-menu-section-renderer:nth-child(3) {
  display: none;
}
*/
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

html[dark] #button.size-default.style-default.ytd-button-renderer.style-scope,
html[dark] #button.size-default.style-visibly-disabled.ytd-button-renderer.style-scope {
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
  max-width: 246px !important;
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
  text-transform: none;
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

html[dark] ytd-settings-sidebar-renderer #label,
html[dark] ytd-browse #title.ytd-settings-sidebar-renderer {
  color: var(--yt-spec-text-primary);
}

ytd-settings-sidebar-renderer ytd-compact-link-renderer[compact-link-style] tp-yt-paper-item.ytd-compact-link-renderer {
  padding: 0 6px;
  height: 28px !important;
}

ytd-browse ytd-settings-sidebar-renderer,
ytd-settings-sidebar-renderer {
  width: 186px;
  background: var(--yt-spec-brand-background-solid);
  padding: 0 22px;
  box-sizing: content-box;
  border-right: 1px solid #e8e8e8;
  margin-top: -14px;
}

html[dark] ytd-browse ytd-settings-sidebar-renderer, 
html[dark] ytd-settings-sidebar-renderer {
  border-right: none;
}

ytd-browse #title.ytd-settings-sidebar-renderer {
  padding: 5px 0 12px;
  font-size: 16px;
  color: #222;
  text-transform: none;
}

ytd-compact-link-renderer[compact-link-style="compact-link-style-type-settings-sidebar"][active] #label.ytd-compact-link-renderer {
  font-weight: 500 !important;
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
ytd-subscribe-button-renderer {
  --yt-formatted-string-deemphasize-color: var(--yt-spec-static-brand-white);
  display: flex;
  flex-direction: row;
  bottom: 40px !important;
  left: 52px!important;
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

html[dark] .style-scope.ytd-video-primary-info-renderer{
color: #fff;
}

ytd-app #channel-name.ytd-video-owner-renderer {
    right: 5px;
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
  top: -4px !important;
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
#info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(3) yt-formatted-string.ytd-button-renderer,
#info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(4) yt-formatted-string.ytd-button-renderer {
  font-size: 11px !important;
}
#info #menu #top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(3) yt-formatted-string::after,
#top-level-buttons-computed .ytd-menu-renderer:nth-child(4):nth-last-child(4) yt-formatted-string.ytd-button-renderer::after {
  content: none !important;
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
  padding-bottom: 0px;
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

html[dark] ytd-settings-sidebar-renderer ytd-compact-link-renderer[compact-link-style][active] {
  background: none;
}

html[dark] ytd-compact-link-renderer[compact-link-style][active]:hover {
  background: #444;
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
  background: url(https://7kt.se/resources/images/old-player.png);
}

.ytfix_line:nth-child(6):hover::after {
  background: url(https://7kt.se/resources/images/searchbar.png);
}

.ytfix_line:nth-child(7):hover::after {
  background: url(https://7kt.se/resources/images/app-button.png);
}

.ytfix_line:nth-child(8):hover::after {
  background: url(https://7kt.se/resources/images/auto-close-menu.png);
}

.ytfix_line:nth-child(9):hover::after {
  background: url(https://7kt.se/resources/images/square-avatars.png);
}

.ytfix_line:nth-child(10):hover::after {
 background: url();                    /*disable preview add image later*/
}

.ytfix_line:nth-child(11):hover::after {
  background: url(https://7kt.se/resources/images/clip-thank-button.png);
}

.ytfix_line:nth-child(12):hover::after {
  background: url(https://7kt.se/resources/images/hide-queue-button.png);
}

.ytfix_line:nth-child(13):hover::after {
    background: url(https://7kt.se/resources/images/hide-filters.png);
}

.ytfix_line:nth-child(14):hover::after {
  background: url();                    /*blurred thumbnails add image later*/
}

.ytfix_line:nth-child(15):hover::after {
  background: url(https://7kt.se/resources/images/recommended-home.png);
}

.ytfix_line:nth-child(16):hover::after { 
  background: url(https://7kt.se/resources/images/grey-watched.png);
}

.ytfix_line:nth-child(17):hover::after {
  background: url(https://7kt.se/resources/images/grey-watched.png);
}

.ytfix_line:nth-child(18):hover::after {
  background: url(https://7kt.se/resources/images/listview-channel.png);
    background-size: 100%;
}

.ytfix_line:nth-child(19):hover::after {
  background: url(https://7kt.se/resources/images/small-recommended.png);
}

.ytfix_line:nth-child(20):hover::after {
  background: url(https://7kt.se/resources/images/old-buttonstyle.png);
}

.ytfix_line:nth-child(21):hover::after {
  background: url(https://7kt.se/resources/images/hide-dislike.png);
}

.ytfix_line:nth-child(22):hover::after {
  background: url(https://7kt.se/resources/images/recommended-search.png);
}

.ytfix_line:nth-child(23):hover::after {
  background: url(https://7kt.se/resources/images/replace-explore.png);
  background-size: 100%;
}

.ytfix_line:nth-child(26):hover::after {
  background: url(https://7kt.se/resources/images/logo-style.png);
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
    padding: 2px 5px !important;
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

.title.ytd-guide-entry-renderer {
    margin-left: 3.5px;
}

#header-entry #endpoint[href="/feed/library"] tp-yt-paper-item.ytd-guide-entry-renderer {
    padding: 0 !important
}

html[dark] tp-yt-paper-item path[d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"],
html[dark] yt-icon path[d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"] {
    filter: contrast(0.3);
}

html[dark] tp-yt-paper-item:hover path[d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"],
html[dark] tp-yt-paper-item[aria-selected="true"] path[d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"] {
    filter: none;
}

ytd-thumbnail.ytd-reel-item-renderer {
    height: var(--ytd-grid-thumbnail_-_height);
    width: var(--ytd-grid-thumbnail_-_width);
    margin-bottom: 3px !important;
}

ytd-reel-item-renderer {
    width: var(--ytd-grid-thumbnail_-_width);
    margin-right: 10px;
}

yt-horizontal-list-renderer[override-arrow-position-for-reel-items] #left-arrow.yt-horizontal-list-renderer, 
yt-horizontal-list-renderer[override-arrow-position-for-reel-items] #right-arrow.yt-horizontal-list-renderer {
    height: 118px !important;
}

ytd-thumbnail.ytd-reel-item-renderer::before {
    background-color: transparent !important;
}

ytd-reel-item-renderer #video-title {
    font-size: 13px !important;
    line-height: normal !important;
}

h3.ytd-reel-item-renderer {
    margin: 0 10px 0 0 !important;
    padding: 0;
}

ytd-video-meta-block.ytd-reel-item-renderer {
    margin-top: 3px;
}

#contents.ytd-reel-shelf-renderer {
    margin-top: 10px !important;
}

#title-container.ytd-reel-shelf-renderer {
    margin-top: 17px !important;
}

ytd-browse:not([page-subtype="channels"]) #header {
    display: none;
}

ytd-video-renderer[use-prominent-thumbs] #title-wrapper.ytd-video-renderer,
[page-subtype="trending"] #title-wrapper.ytd-video-renderer {
    margin-top: 8px;
}

#title-container a.yt-simple-endpoint[href^="/feed/storefront"] {
    margin-top: 17px;
    margin-bottom: 10px;
}

html #video-title.ytd-grid-movie-renderer {
    font-size: 13px !important;
    line-height: normal !important;
}

ytd-grid-movie-renderer {
    margin-right: 10px;
    width: var(--ytd-grid-thumbnail_-_width) !important;
}

ytd-thumbnail.ytd-grid-movie-renderer,
ytd-thumbnail.ytd-grid-movie-renderer img.yt-img-shadow {
    width: calc(var(--ytd-grid-thumbnail_-_width) / 2) !important;
    height: var(--ytd-grid-thumbnail_-_height) !important;
}

.sbpqs_a {
    color: #52188c !important;
}

html[dark] .sbpqs_a {
    color: #9328ff !important;
}

html[dark] .sbdd_b,
html[dark] .sbsb_a {
    background: hsl(0, 0%, 10%) !important;
}

html[dark] .gsfs {
    color: #fff;
}

html[dark] .sbsb_d  {
    background: hsla(0, 0%, 100%, 0.08) !important;
}

html[dark] .sbdd_b {
    border: 1px solid hsla(0, 0%, 53.3%, 0.4) !important;
    border-top-style: none !important;
}

yt-icon path[d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"] {
    filter: brightness(40);
}

yt-icon:hover path[d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"] {
    filter: brightness(20);
}

#subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed] {
    text-transform: none;
}

.badge-style-type-featured.ytd-badge-supported-renderer {
    color: var(--yt-spec-text-primary) !important;
}

[page-subtype="trending"] #channel-name.ytd-video-renderer {
    padding-left: 0;
}

ytd-video-meta-block:not([rich-meta]) #byline-container.ytd-video-meta-block {
    line-height: 1.4rem !important;
}

[page-subtype="trending"] #description-text.ytd-video-renderer {
    line-height: 1.3em !important;
    padding-top: 20px !important;
}

[page-subtype="trending"] #title-wrapper.ytd-video-renderer {
    height: 18px !important;
}

[page-subtype="trending"] #metadata-line.ytd-video-meta-block {
    position: absolute !important;
    top: 42px !important;
    line-height: 1.5rem !important;
    font-size: 1.2rem !important;
}

[lang*=en] #info #menu .addto-btn yt-formatted-string {
    font-size: 0 !important;
}

[lang*=en] .addto-btn yt-formatted-string::after {
    content: "Add to";
    font-size: 11px !important;
}

.addto-btn yt-icon {
    background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vfllYIUv0.png) -151px -725px;
    fill: none !important;
}

.yt-spec-icon-badge-shape__icon {
    fill: none;
    left: 0;
    opacity: .85;
    margin-top: -2px;
    margin-left: 1px;
    background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflNlthLq.webp) -698px -257px;
    background-size: auto;
    width: 30px !important;
    height: 30px !important;
    filter: invert(0.60);
}

yt-icon-button.ytd-notification-topbar-button-renderer:hover{
    filter: contrast(0.3);
}

html[dark] yt-icon-button.ytd-notification-topbar-button-renderer:hover{
    filter: contrast(2);
}

yt-icon-button.ytd-notification-topbar-button-renderer:active {
    filter: contrast(1);
}

html[dark] yt-icon-button.ytd-notification-topbar-button-renderer:active {
    filter: contrast(3);
}

.yt-spec-icon-badge-shape--type-notification.yt-spec-icon-badge-shape > .yt-spec-icon-badge-shape__icon > yt-icon {
    display: none;
}

yt-interaction {
    display: none;
}

.yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
    background: no-repeat url(//i.imgur.com/LIkBxJb.png) !important;
    height: 29px;
    width: 31px;
    left: 4px;
    padding-left: 8px;
    padding-top: 2px;
    top: -5px;
    min-width: unset !important;
    max-width: unset !important;
    border-bottom: unset !important;
    border-left: unset !important;
}

ytd-watch-metadata {
    display: none !important;
}

ytd-watch-flexy #info-contents, 
ytd-watch-flexy #meta-contents {
    display: block !important;
}

#info-contents[hidden] #upload-info > #owner-sub-count {
    margin-left: 181px;
}

ytd-promoted-sparkles-web-renderer.ytd-item-section-renderer {
    margin-top: 15px;
}

ytd-promoted-sparkles-web-renderer.ytd-item-section-renderer #action-button {
    display: none;
}

ytd-badge-supported-renderer.ytd-promoted-sparkles-web-renderer span {
    color: var(--yt-spec-text-secondary);
}

.ytp-heat-map-container {
    display: none !important;
}

.ytp-progress-bar-hover.ytp-progress-bar-decoration .ytp-tooltip-title {
    display: none !important;
}

.ytp-progress-bar-hover.ytp-progress-bar-decoration .ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text {
    top: 33px;
}

.ytp-chrome-controls .ytp-button.ytp-mute-button svg,
.ytp-right-controls .ytp-button svg {
    width: 36px;
    height: 36px;
}

.ytp-chrome-controls .ytp-button.ytp-mute-button {
    padding: 0 2px !important;
}

ytd-download-button-renderer {
    display: none !important;
}`);
}
