!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Clappr = e() : t.Clappr = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {i: n, l: !1, exports: {}};
            return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.d = function (t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
        }, e.n = function (t) {
            var i = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 93)
    }([function (t, e, i) {
        "use strict";
        e.__esModule = !0, e.default = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(32), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== (void 0 === e ? "undefined" : (0, r.default)(e)) && "function" != typeof e ? t : e
        }
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0;
        var r = i(125), a = n(r), o = i(72), s = n(o), l = i(32), u = n(l);
        e.default = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, u.default)(e)));
            t.prototype = (0, s.default)(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (a.default ? (0, a.default)(t, e) : t.__proto__ = e)
        }
    }, function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(71), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, r.default)(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }()
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(38), a = n(r), o = i(0), s = n(o), l = i(32), u = n(l), c = i(55), d = n(c), h = i(5),
            f = Array.prototype.slice, p = /\s+/, g = function (t, e, i, n) {
                if (!i) return !0;
                if ("object" === (void 0 === i ? "undefined" : (0, u.default)(i))) {
                    for (var r in i) t[e].apply(t, [r, i[r]].concat(n));
                    return !1
                }
                if (p.test(i)) {
                    for (var a = i.split(p), o = 0, s = a.length; o < s; o++) t[e].apply(t, [a[o]].concat(n));
                    return !1
                }
                return !0
            }, y = function (t, e, i, n) {
                function r() {
                    try {
                        switch (e.length) {
                            case 0:
                                for (; ++o < s;) (a = t[o]).callback.call(a.ctx);
                                return;
                            case 1:
                                for (; ++o < s;) (a = t[o]).callback.call(a.ctx, l);
                                return;
                            case 2:
                                for (; ++o < s;) (a = t[o]).callback.call(a.ctx, l, u);
                                return;
                            case 3:
                                for (; ++o < s;) (a = t[o]).callback.call(a.ctx, l, u, c);
                                return;
                            default:
                                for (; ++o < s;) (a = t[o]).callback.apply(a.ctx, e);
                                return
                        }
                    } catch (t) {
                        d.default.error.apply(d.default, [i, "error on event", n, "trigger", "-", t]), r()
                    }
                }

                var a = void 0, o = -1, s = t.length, l = e[0], u = e[1], c = e[2];
                r()
            }, m = function () {
                function t() {
                    (0, s.default)(this, t)
                }

                return t.prototype.on = function (t, e, i) {
                    return g(this, "on", t, [e, i]) && e ? (this._events || (this._events = {}), (this._events[t] || (this._events[t] = [])).push({
                        callback: e,
                        context: i,
                        ctx: i || this
                    }), this) : this
                }, t.prototype.once = function (t, e, i) {
                    var n = this, r = void 0;
                    if (!g(this, "once", t, [e, i]) || !e) return this;
                    var a = function () {
                        return n.off(t, r)
                    };
                    return r = function () {
                        a(), e.apply(this, arguments)
                    }, this.on(t, r, i)
                }, t.prototype.off = function (t, e, i) {
                    var n = void 0, r = void 0, o = void 0, s = void 0, l = void 0, u = void 0, c = void 0, d = void 0;
                    if (!this._events || !g(this, "off", t, [e, i])) return this;
                    if (!t && !e && !i) return this._events = void 0, this;
                    for (s = t ? [t] : (0, a.default)(this._events), l = 0, u = s.length; l < u; l++) if (t = s[l], o = this._events[t]) {
                        if (this._events[t] = n = [], e || i) for (c = 0, d = o.length; c < d; c++) r = o[c], (e && e !== r.callback && e !== r.callback._callback || i && i !== r.context) && n.push(r);
                        n.length || delete this._events[t]
                    }
                    return this
                }, t.prototype.trigger = function (t) {
                    var e = this.name || this.constructor.name;
                    if (d.default.debug.apply(d.default, [e].concat(Array.prototype.slice.call(arguments))), !this._events) return this;
                    var i = f.call(arguments, 1);
                    if (!g(this, "trigger", t, i)) return this;
                    var n = this._events[t], r = this._events.all;
                    return n && y(n, i, e, t), r && y(r, arguments, e, t), this
                }, t.prototype.stopListening = function (t, e, i) {
                    var n = this._listeningTo;
                    if (!n) return this;
                    var r = !e && !i;
                    i || "object" !== (void 0 === e ? "undefined" : (0, u.default)(e)) || (i = this), t && ((n = {})[t._listenId] = t);
                    for (var o in n) t = n[o], t.off(e, i, this), (r || 0 === (0, a.default)(t._events).length) && delete this._listeningTo[o];
                    return this
                }, t.register = function (e) {
                    t.Custom || (t.Custom = {});
                    var i = "string" == typeof e && e.toUpperCase().trim();
                    i && !t.Custom[i] ? t.Custom[i] = i.toLowerCase().split("_").map(function (t, e) {
                        return 0 === e ? t : t = t[0].toUpperCase() + t.slice(1)
                    }).join("") : d.default.error("Events", "Error when register event: " + e)
                }, t.listAvailableCustomEvents = function () {
                    return t.Custom || (t.Custom = {}), (0, a.default)(t.Custom).filter(function (e) {
                        return "string" == typeof t.Custom[e]
                    })
                }, t
            }();
        e.default = m;
        var v = {listenTo: "on", listenToOnce: "once"};
        (0, a.default)(v).forEach(function (t) {
            m.prototype[t] = function (e, i, n) {
                return (this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = (0, h.uniqueId)("l"))] = e, n || "object" !== (void 0 === i ? "undefined" : (0, u.default)(i)) || (n = this), e[v[t]](i, n, this), this
            }
        }), m.PLAYER_READY = "ready", m.PLAYER_RESIZE = "resize", m.PLAYER_FULLSCREEN = "fullscreen", m.PLAYER_PLAY = "play", m.PLAYER_PAUSE = "pause", m.PLAYER_STOP = "stop", m.PLAYER_ENDED = "ended", m.PLAYER_SEEK = "seek", m.PLAYER_ERROR = "error", m.PLAYER_TIMEUPDATE = "timeupdate", m.PLAYER_VOLUMEUPDATE = "volumeupdate", m.PLAYER_SUBTITLE_AVAILABLE = "subtitleavailable", m.PLAYBACK_PROGRESS = "playback:progress", m.PLAYBACK_TIMEUPDATE = "playback:timeupdate", m.PLAYBACK_READY = "playback:ready", m.PLAYBACK_BUFFERING = "playback:buffering", m.PLAYBACK_BUFFERFULL = "playback:bufferfull", m.PLAYBACK_SETTINGSUPDATE = "playback:settingsupdate", m.PLAYBACK_LOADEDMETADATA = "playback:loadedmetadata", m.PLAYBACK_HIGHDEFINITIONUPDATE = "playback:highdefinitionupdate", m.PLAYBACK_BITRATE = "playback:bitrate", m.PLAYBACK_LEVELS_AVAILABLE = "playback:levels:available", m.PLAYBACK_LEVEL_SWITCH_START = "playback:levels:switch:start", m.PLAYBACK_LEVEL_SWITCH_END = "playback:levels:switch:end", m.PLAYBACK_PLAYBACKSTATE = "playback:playbackstate", m.PLAYBACK_DVR = "playback:dvr", m.PLAYBACK_MEDIACONTROL_DISABLE = "playback:mediacontrol:disable", m.PLAYBACK_MEDIACONTROL_ENABLE = "playback:mediacontrol:enable", m.PLAYBACK_ENDED = "playback:ended", m.PLAYBACK_PLAY_INTENT = "playback:play:intent", m.PLAYBACK_PLAY = "playback:play", m.PLAYBACK_PAUSE = "playback:pause", m.PLAYBACK_SEEK = "playback:seek", m.PLAYBACK_SEEKED = "playback:seeked", m.PLAYBACK_STOP = "playback:stop", m.PLAYBACK_ERROR = "playback:error", m.PLAYBACK_STATS_ADD = "playback:stats:add", m.PLAYBACK_FRAGMENT_LOADED = "playback:fragment:loaded", m.PLAYBACK_LEVEL_SWITCH = "playback:level:switch", m.PLAYBACK_SUBTITLE_AVAILABLE = "playback:subtitle:available", m.PLAYBACK_SUBTITLE_CHANGED = "playback:subtitle:changed", m.CORE_CONTAINERS_CREATED = "core:containers:created", m.CORE_OPTIONS_CHANGE = "core:options:change", m.CORE_READY = "core:ready", m.CORE_FULLSCREEN = "core:fullscreen", m.CORE_SCREEN_ORIENTATION_CHANGED = "core:screen:orientation:changed", m.CONTAINER_PLAYBACKSTATE = "container:playbackstate", m.CONTAINER_PLAYBACKDVRSTATECHANGED = "container:dvr", m.CONTAINER_BITRATE = "container:bitrate", m.CONTAINER_STATS_REPORT = "container:stats:report", m.CONTAINER_DESTROYED = "container:destroyed", m.CONTAINER_READY = "container:ready", m.CONTAINER_ERROR = "container:error", m.CONTAINER_LOADEDMETADATA = "container:loadedmetadata", m.CONTAINER_SUBTITLE_AVAILABLE = "container:subtitle:available", m.CONTAINER_SUBTITLE_CHANGED = "container:subtitle:changed", m.CONTAINER_TIMEUPDATE = "container:timeupdate", m.CONTAINER_PROGRESS = "container:progress", m.CONTAINER_PLAY = "container:play", m.CONTAINER_STOP = "container:stop", m.CONTAINER_PAUSE = "container:pause", m.CONTAINER_ENDED = "container:ended", m.CONTAINER_CLICK = "container:click", m.CONTAINER_DBLCLICK = "container:dblclick", m.CONTAINER_CONTEXTMENU = "container:contextmenu", m.CONTAINER_MOUSE_ENTER = "container:mouseenter", m.CONTAINER_MOUSE_LEAVE = "container:mouseleave", m.CONTAINER_SEEK = "container:seek", m.CONTAINER_SEEKED = "container:seeked", m.CONTAINER_VOLUME = "container:volume", m.CONTAINER_FULLSCREEN = "container:fullscreen", m.CONTAINER_STATE_BUFFERING = "container:state:buffering", m.CONTAINER_STATE_BUFFERFULL = "container:state:bufferfull", m.CONTAINER_SETTINGSUPDATE = "container:settingsupdate", m.CONTAINER_HIGHDEFINITIONUPDATE = "container:highdefinitionupdate", m.CONTAINER_MEDIACONTROL_SHOW = "container:mediacontrol:show", m.CONTAINER_MEDIACONTROL_HIDE = "container:mediacontrol:hide", m.CONTAINER_MEDIACONTROL_DISABLE = "container:mediacontrol:disable", m.CONTAINER_MEDIACONTROL_ENABLE = "container:mediacontrol:enable", m.CONTAINER_STATS_ADD = "container:stats:add", m.CONTAINER_OPTIONS_CHANGE = "container:options:change", m.MEDIACONTROL_RENDERED = "mediacontrol:rendered", m.MEDIACONTROL_FULLSCREEN = "mediacontrol:fullscreen", m.MEDIACONTROL_SHOW = "mediacontrol:show", m.MEDIACONTROL_HIDE = "mediacontrol:hide", m.MEDIACONTROL_MOUSEMOVE_SEEKBAR = "mediacontrol:mousemove:seekbar", m.MEDIACONTROL_MOUSELEAVE_SEEKBAR = "mediacontrol:mouseleave:seekbar", m.MEDIACONTROL_PLAYING = "mediacontrol:playing", m.MEDIACONTROL_NOTPLAYING = "mediacontrol:notplaying", m.MEDIACONTROL_CONTAINERCHANGED = "mediacontrol:containerchanged", t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function r(t, e) {
            if (e) for (var i in e) {
                var n = (0, L.default)(e, i);
                n ? (0, A.default)(t, i, n) : t[i] = e[i]
            }
            return t
        }

        function a(t, e) {
            var i = function (t) {
                function i() {
                    (0, m.default)(this, i);
                    for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    var o = (0, b.default)(this, t.call.apply(t, [this].concat(r)));
                    return e.initialize && e.initialize.apply(o, r), o
                }

                return (0, E.default)(i, t), i
            }(t);
            return r(i.prototype, e), i
        }

        function o(t, e) {
            if (!isFinite(t)) return "--:--";
            t *= 1e3, t = parseInt(t / 1e3);
            var i = t % 60;
            t = parseInt(t / 60);
            var n = t % 60;
            t = parseInt(t / 60);
            var r = t % 24, a = parseInt(t / 24), o = "";
            return a && a > 0 && (o += a + ":", r < 1 && (o += "00:")), (r && r > 0 || e) && (o += ("0" + r).slice(-2) + ":"), o += ("0" + n).slice(-2) + ":", o += ("0" + i).slice(-2), o.trim()
        }

        function s() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "t", e = 0,
                i = O.params[t] || O.hashParams[t] || "", n = i.match(/[0-9]+[hms]+/g) || [];
            return n.length > 0 ? function () {
                var t = {h: 3600, m: 60, s: 1};
                n.forEach(function (i) {
                    if (i) {
                        var n = i[i.length - 1], r = parseInt(i.slice(0, i.length - 1), 10);
                        e += r * t[n]
                    }
                })
            }() : i && (e = parseInt(i, 10)), e
        }

        function l(t) {
            return P[t] || (P[t] = 0), t + ++P[t]
        }

        function u(t) {
            return t - parseFloat(t) + 1 >= 0
        }

        function c() {
            var t = document.getElementsByTagName("script");
            return t.length ? t[t.length - 1].src : ""
        }

        function d() {
            return window.navigator && window.navigator.language
        }

        function h() {
            return window.performance && window.performance.now ? performance.now() : Date.now()
        }

        function f(t, e) {
            var i = t.indexOf(e);
            i >= 0 && t.splice(i, 1)
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.DomRecycler = e.cancelAnimationFrame = e.requestAnimationFrame = e.QueryString = e.Config = e.Fullscreen = void 0;
        var p = i(3), g = n(p), y = i(0), m = n(y), v = i(1), b = n(v), _ = i(2), E = n(_), T = i(71), A = n(T),
            S = i(131), L = n(S);
        e.assign = r, e.extend = a, e.formatTime = o, e.seekStringToSeconds = s, e.uniqueId = l, e.isNumber = u, e.currentScriptUrl = c, e.getBrowserLanguage = d, e.now = h, e.removeArrayItem = f, i(134);
        var R = i(13), k = n(R), C = i(6), w = n(C), I = e.Fullscreen = {
                isFullscreen: function () {
                    return !!(document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement)
                }, requestFullscreen: function (t) {
                    t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.querySelector && t.querySelector("video") && t.querySelector("video").webkitEnterFullScreen ? t.querySelector("video").webkitEnterFullScreen() : t.webkitEnterFullScreen && t.webkitEnterFullScreen()
                }, cancelFullscreen: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                    t.exitFullscreen ? t.exitFullscreen() : t.webkitCancelFullScreen ? t.webkitCancelFullScreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.msExitFullscreen && t.msExitFullscreen()
                }, fullscreenEnabled: function () {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            }, D = e.Config = function () {
                function t() {
                    (0, m.default)(this, t)
                }

                return t._defaultConfig = function () {
                    return {volume: {value: 100, parse: parseInt}}
                }, t._defaultValueFor = function (t) {
                    try {
                        return this._defaultConfig()[t].parse(this._defaultConfig()[t].value)
                    } catch (t) {
                        return
                    }
                }, t._createKeyspace = function (t) {
                    return "clappr." + document.domain + "." + t
                }, t.restore = function (t) {
                    return k.default.hasLocalstorage && localStorage[this._createKeyspace(t)] ? this._defaultConfig()[t].parse(localStorage[this._createKeyspace(t)]) : this._defaultValueFor(t)
                }, t.persist = function (t, e) {
                    if (k.default.hasLocalstorage) try {
                        return localStorage[this._createKeyspace(t)] = e, !0
                    } catch (t) {
                        return !1
                    }
                }, t
            }(), O = e.QueryString = function () {
                function t() {
                    (0, m.default)(this, t)
                }

                return t.parse = function (t) {
                    for (var e = void 0, i = /\+/g, n = /([^&=]+)=?([^&]*)/g, r = function (t) {
                        return decodeURIComponent(t.replace(i, " "))
                    }, a = {}; e = n.exec(t);) a[r(e[1]).toLowerCase()] = r(e[2]);
                    return a
                }, (0, g.default)(t, null, [{
                    key: "params", get: function () {
                        var t = window.location.search.substring(1);
                        return t !== this.query && (this._urlParams = this.parse(t), this.query = t), this._urlParams
                    }
                }, {
                    key: "hashParams", get: function () {
                        var t = window.location.hash.substring(1);
                        return t !== this.hash && (this._hashParams = this.parse(t), this.hash = t), this._hashParams
                    }
                }]), t
            }(), P = {},
            x = e.requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                window.setTimeout(t, 1e3 / 60)
            }).bind(window),
            N = e.cancelAnimationFrame = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout).bind(window),
            M = [], F = e.DomRecycler = function () {
                function t() {
                    (0, m.default)(this, t)
                }

                return t.configure = function (t) {
                    this.options = w.default.extend(this.options, t)
                }, t.create = function (t) {
                    return this.options.recycleVideo && "video" === t && M.length > 0 ? M.shift() : (0, w.default)("<" + t + ">")
                }, t.garbage = function (t) {
                    this.options.recycleVideo && "VIDEO" === t[0].tagName.toUpperCase() && (t.children().remove(), M.push(t))
                }, t
            }();
        F.options = {recycleVideo: !1}, e.default = {
            Config: D,
            Fullscreen: I,
            QueryString: O,
            DomRecycler: F,
            extend: a,
            formatTime: o,
            seekStringToSeconds: s,
            uniqueId: l,
            currentScriptUrl: c,
            isNumber: u,
            requestAnimationFrame: x,
            cancelAnimationFrame: N,
            getBrowserLanguage: d,
            now: h,
            removeArrayItem: f
        }
    }, function (t, e) {
        var i = function () {
            function t(t) {
                return null == t ? String(t) : W[q.call(t)] || "object"
            }

            function e(e) {
                return "function" == t(e)
            }

            function i(t) {
                return null != t && t == t.window
            }

            function n(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE
            }

            function r(e) {
                return "object" == t(e)
            }

            function a(t) {
                return r(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype
            }

            function o(t) {
                var e = !!t && "length" in t && t.length, n = S.type(t);
                return "function" != n && !i(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }

            function s(t) {
                return I.call(t, function (t) {
                    return null != t
                })
            }

            function l(t) {
                return t.length > 0 ? S.fn.concat.apply([], t) : t
            }

            function u(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function c(t) {
                return t in x ? x[t] : x[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
            }

            function d(t, e) {
                return "number" != typeof e || N[u(t)] ? e : e + "px"
            }

            function h(t) {
                var e, i;
                return P[t] || (e = O.createElement(t), O.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), P[t] = i), P[t]
            }

            function f(t) {
                return "children" in t ? D.call(t.children) : S.map(t.childNodes, function (t) {
                    if (1 == t.nodeType) return t
                })
            }

            function p(t, e) {
                var i, n = t ? t.length : 0;
                for (i = 0; i < n; i++) this[i] = t[i];
                this.length = n, this.selector = e || ""
            }

            function g(t, e, i) {
                for (A in e) i && (a(e[A]) || Q(e[A])) ? (a(e[A]) && !a(t[A]) && (t[A] = {}), Q(e[A]) && !Q(t[A]) && (t[A] = []), g(t[A], e[A], i)) : e[A] !== T && (t[A] = e[A])
            }

            function y(t, e) {
                return null == e ? S(t) : S(t).filter(e)
            }

            function m(t, i, n, r) {
                return e(i) ? i.call(t, n, r) : i
            }

            function v(t, e, i) {
                null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
            }

            function b(t, e) {
                var i = t.className || "", n = i && i.baseVal !== T;
                if (e === T) return n ? i.baseVal : i;
                n ? i.baseVal = e : t.className = e
            }

            function _(t) {
                try {
                    return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? S.parseJSON(t) : t) : t
                } catch (e) {
                    return t
                }
            }

            function E(t, e) {
                e(t);
                for (var i = 0, n = t.childNodes.length; i < n; i++) E(t.childNodes[i], e)
            }

            var T, A, S, L, R, k, C = [], w = C.concat, I = C.filter, D = C.slice, O = window.document, P = {}, x = {},
                N = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                }, M = /^\s*<(\w+|!)[^>]*>/, F = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                B = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, U = /^(?:body|html)$/i,
                G = /([A-Z])/g, K = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                V = ["after", "prepend", "before", "append"], j = O.createElement("table"), Y = O.createElement("tr"),
                H = {
                    tr: O.createElement("tbody"),
                    tbody: j,
                    thead: j,
                    tfoot: j,
                    td: Y,
                    th: Y,
                    "*": O.createElement("div")
                }, $ = /complete|loaded|interactive/, z = /^[\w-]*$/, W = {}, q = W.toString, X = {},
                Z = O.createElement("div"), J = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                }, Q = Array.isArray || function (t) {
                    return t instanceof Array
                };
            return X.matches = function (t, e) {
                if (!e || !t || 1 !== t.nodeType) return !1;
                var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (i) return i.call(t, e);
                var n, r = t.parentNode, a = !r;
                return a && (r = Z).appendChild(t), n = ~X.qsa(r, e).indexOf(t), a && Z.removeChild(t), n
            }, R = function (t) {
                return t.replace(/-+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }, k = function (t) {
                return I.call(t, function (e, i) {
                    return t.indexOf(e) == i
                })
            }, X.fragment = function (t, e, i) {
                var n, r, o;
                return F.test(t) && (n = S(O.createElement(RegExp.$1))), n || (t.replace && (t = t.replace(B, "<$1></$2>")), e === T && (e = M.test(t) && RegExp.$1), e in H || (e = "*"), o = H[e], o.innerHTML = "" + t, n = S.each(D.call(o.childNodes), function () {
                    o.removeChild(this)
                })), a(i) && (r = S(n), S.each(i, function (t, e) {
                    K.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
                })), n
            }, X.Z = function (t, e) {
                return new p(t, e)
            }, X.isZ = function (t) {
                return t instanceof X.Z
            }, X.init = function (t, i) {
                var n;
                if (!t) return X.Z();
                if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && M.test(t)) n = X.fragment(t, RegExp.$1, i), t = null; else {
                    if (i !== T) return S(i).find(t);
                    n = X.qsa(O, t)
                } else {
                    if (e(t)) return S(O).ready(t);
                    if (X.isZ(t)) return t;
                    if (Q(t)) n = s(t); else if (r(t)) n = [t], t = null; else if (M.test(t)) n = X.fragment(t.trim(), RegExp.$1, i), t = null; else {
                        if (i !== T) return S(i).find(t);
                        n = X.qsa(O, t)
                    }
                }
                return X.Z(n, t)
            }, S = function (t, e) {
                return X.init(t, e)
            }, S.extend = function (t) {
                var e, i = D.call(arguments, 1);
                return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach(function (i) {
                    g(t, i, e)
                }), t
            }, X.qsa = function (t, e) {
                var i, n = "#" == e[0], r = !n && "." == e[0], a = n || r ? e.slice(1) : e, o = z.test(a);
                return t.getElementById && o && n ? (i = t.getElementById(a)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(o && !n && t.getElementsByClassName ? r ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
            }, S.contains = O.documentElement.contains ? function (t, e) {
                return t !== e && t.contains(e)
            } : function (t, e) {
                for (; e && (e = e.parentNode);) if (e === t) return !0;
                return !1
            }, S.type = t, S.isFunction = e, S.isWindow = i, S.isArray = Q, S.isPlainObject = a, S.isEmptyObject = function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, S.isNumeric = function (t) {
                var e = Number(t), i = typeof t;
                return null != t && "boolean" != i && ("string" != i || t.length) && !isNaN(e) && isFinite(e) || !1
            }, S.inArray = function (t, e, i) {
                return C.indexOf.call(e, t, i)
            }, S.camelCase = R, S.trim = function (t) {
                return null == t ? "" : String.prototype.trim.call(t)
            }, S.uuid = 0, S.support = {}, S.expr = {}, S.noop = function () {
            }, S.map = function (t, e) {
                var i, n, r, a = [];
                if (o(t)) for (n = 0; n < t.length; n++) null != (i = e(t[n], n)) && a.push(i); else for (r in t) null != (i = e(t[r], r)) && a.push(i);
                return l(a)
            }, S.each = function (t, e) {
                var i, n;
                if (o(t)) {
                    for (i = 0; i < t.length; i++) if (!1 === e.call(t[i], i, t[i])) return t
                } else for (n in t) if (!1 === e.call(t[n], n, t[n])) return t;
                return t
            }, S.grep = function (t, e) {
                return I.call(t, e)
            }, window.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                W["[object " + e + "]"] = e.toLowerCase()
            }), S.fn = {
                constructor: X.Z,
                length: 0,
                forEach: C.forEach,
                reduce: C.reduce,
                push: C.push,
                sort: C.sort,
                splice: C.splice,
                indexOf: C.indexOf,
                concat: function () {
                    var t, e, i = [];
                    for (t = 0; t < arguments.length; t++) e = arguments[t], i[t] = X.isZ(e) ? e.toArray() : e;
                    return w.apply(X.isZ(this) ? this.toArray() : this, i)
                },
                map: function (t) {
                    return S(S.map(this, function (e, i) {
                        return t.call(e, i, e)
                    }))
                },
                slice: function () {
                    return S(D.apply(this, arguments))
                },
                ready: function (t) {
                    return $.test(O.readyState) && O.body ? t(S) : O.addEventListener("DOMContentLoaded", function () {
                        t(S)
                    }, !1), this
                },
                get: function (t) {
                    return t === T ? D.call(this) : this[t >= 0 ? t : t + this.length]
                },
                toArray: function () {
                    return this.get()
                },
                size: function () {
                    return this.length
                },
                remove: function () {
                    return this.each(function () {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function (t) {
                    return C.every.call(this, function (e, i) {
                        return !1 !== t.call(e, i, e)
                    }), this
                },
                filter: function (t) {
                    return e(t) ? this.not(this.not(t)) : S(I.call(this, function (e) {
                        return X.matches(e, t)
                    }))
                },
                add: function (t, e) {
                    return S(k(this.concat(S(t, e))))
                },
                is: function (t) {
                    return this.length > 0 && X.matches(this[0], t)
                },
                not: function (t) {
                    var i = [];
                    if (e(t) && t.call !== T) this.each(function (e) {
                        t.call(this, e) || i.push(this)
                    }); else {
                        var n = "string" == typeof t ? this.filter(t) : o(t) && e(t.item) ? D.call(t) : S(t);
                        this.forEach(function (t) {
                            n.indexOf(t) < 0 && i.push(t)
                        })
                    }
                    return S(i)
                },
                has: function (t) {
                    return this.filter(function () {
                        return r(t) ? S.contains(this, t) : S(this).find(t).size()
                    })
                },
                eq: function (t) {
                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                },
                first: function () {
                    var t = this[0];
                    return t && !r(t) ? t : S(t)
                },
                last: function () {
                    var t = this[this.length - 1];
                    return t && !r(t) ? t : S(t)
                },
                find: function (t) {
                    var e = this;
                    return t ? "object" == typeof t ? S(t).filter(function () {
                        var t = this;
                        return C.some.call(e, function (e) {
                            return S.contains(e, t)
                        })
                    }) : 1 == this.length ? S(X.qsa(this[0], t)) : this.map(function () {
                        return X.qsa(this, t)
                    }) : S()
                },
                closest: function (t, e) {
                    var i = [], r = "object" == typeof t && S(t);
                    return this.each(function (a, o) {
                        for (; o && !(r ? r.indexOf(o) >= 0 : X.matches(o, t));) o = o !== e && !n(o) && o.parentNode;
                        o && i.indexOf(o) < 0 && i.push(o)
                    }), S(i)
                },
                parents: function (t) {
                    for (var e = [], i = this; i.length > 0;) i = S.map(i, function (t) {
                        if ((t = t.parentNode) && !n(t) && e.indexOf(t) < 0) return e.push(t), t
                    });
                    return y(e, t)
                },
                parent: function (t) {
                    return y(k(this.pluck("parentNode")), t)
                },
                children: function (t) {
                    return y(this.map(function () {
                        return f(this)
                    }), t)
                },
                contents: function () {
                    return this.map(function () {
                        return this.contentDocument || D.call(this.childNodes)
                    })
                },
                siblings: function (t) {
                    return y(this.map(function (t, e) {
                        return I.call(f(e.parentNode), function (t) {
                            return t !== e
                        })
                    }), t)
                },
                empty: function () {
                    return this.each(function () {
                        this.innerHTML = ""
                    })
                },
                pluck: function (t) {
                    return S.map(this, function (e) {
                        return e[t]
                    })
                },
                show: function () {
                    return this.each(function () {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                    })
                },
                replaceWith: function (t) {
                    return this.before(t).remove()
                },
                wrap: function (t) {
                    var i = e(t);
                    if (this[0] && !i) var n = S(t).get(0), r = n.parentNode || this.length > 1;
                    return this.each(function (e) {
                        S(this).wrapAll(i ? t.call(this, e) : r ? n.cloneNode(!0) : n)
                    })
                },
                wrapAll: function (t) {
                    if (this[0]) {
                        S(this[0]).before(t = S(t));
                        for (var e; (e = t.children()).length;) t = e.first();
                        S(t).append(this)
                    }
                    return this
                },
                wrapInner: function (t) {
                    var i = e(t);
                    return this.each(function (e) {
                        var n = S(this), r = n.contents(), a = i ? t.call(this, e) : t;
                        r.length ? r.wrapAll(a) : n.append(a)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        S(this).replaceWith(S(this).children())
                    }), this
                },
                clone: function () {
                    return this.map(function () {
                        return this.cloneNode(!0)
                    })
                },
                hide: function () {
                    return this.css("display", "none")
                },
                toggle: function (t) {
                    return this.each(function () {
                        var e = S(this);
                        (t === T ? "none" == e.css("display") : t) ? e.show() : e.hide()
                    })
                },
                prev: function (t) {
                    return S(this.pluck("previousElementSibling")).filter(t || "*")
                },
                next: function (t) {
                    return S(this.pluck("nextElementSibling")).filter(t || "*")
                },
                html: function (t) {
                    return 0 in arguments ? this.each(function (e) {
                        var i = this.innerHTML;
                        S(this).empty().append(m(this, t, e, i))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function (t) {
                    return 0 in arguments ? this.each(function (e) {
                        var i = m(this, t, e, this.textContent);
                        this.textContent = null == i ? "" : "" + i
                    }) : 0 in this ? this.pluck("textContent").join("") : null
                },
                attr: function (t, e) {
                    var i;
                    return "string" != typeof t || 1 in arguments ? this.each(function (i) {
                        if (1 === this.nodeType) if (r(t)) for (A in t) v(this, A, t[A]); else v(this, t, m(this, e, i, this.getAttribute(t)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(t)) ? i : T
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        1 === this.nodeType && t.split(" ").forEach(function (t) {
                            v(this, t)
                        }, this)
                    })
                },
                prop: function (t, e) {
                    return t = J[t] || t, 1 in arguments ? this.each(function (i) {
                        this[t] = m(this, e, i, this[t])
                    }) : this[0] && this[0][t]
                },
                removeProp: function (t) {
                    return t = J[t] || t, this.each(function () {
                        delete this[t]
                    })
                },
                data: function (t, e) {
                    var i = "data-" + t.replace(G, "-$1").toLowerCase(),
                        n = 1 in arguments ? this.attr(i, e) : this.attr(i);
                    return null !== n ? _(n) : T
                },
                val: function (t) {
                    return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
                        this.value = m(this, t, e, this.value)
                    })) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function () {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function (t) {
                    if (t) return this.each(function (e) {
                        var i = S(this), n = m(this, t, e, i.offset()), r = i.offsetParent().offset(),
                            a = {top: n.top - r.top, left: n.left - r.left};
                        "static" == i.css("position") && (a.position = "relative"), i.css(a)
                    });
                    if (!this.length) return null;
                    if (O.documentElement !== this[0] && !S.contains(O.documentElement, this[0])) return {
                        top: 0,
                        left: 0
                    };
                    var e = this[0].getBoundingClientRect();
                    return {
                        left: e.left + window.pageXOffset,
                        top: e.top + window.pageYOffset,
                        width: Math.round(e.width),
                        height: Math.round(e.height)
                    }
                },
                css: function (e, i) {
                    if (arguments.length < 2) {
                        var n = this[0];
                        if ("string" == typeof e) {
                            if (!n) return;
                            return n.style[R(e)] || getComputedStyle(n, "").getPropertyValue(e)
                        }
                        if (Q(e)) {
                            if (!n) return;
                            var r = {}, a = getComputedStyle(n, "");
                            return S.each(e, function (t, e) {
                                r[e] = n.style[R(e)] || a.getPropertyValue(e)
                            }), r
                        }
                    }
                    var o = "";
                    if ("string" == t(e)) i || 0 === i ? o = u(e) + ":" + d(e, i) : this.each(function () {
                        this.style.removeProperty(u(e))
                    }); else for (A in e) e[A] || 0 === e[A] ? o += u(A) + ":" + d(A, e[A]) + ";" : this.each(function () {
                        this.style.removeProperty(u(A))
                    });
                    return this.each(function () {
                        this.style.cssText += ";" + o
                    })
                },
                index: function (t) {
                    return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function (t) {
                    return !!t && C.some.call(this, function (t) {
                        return this.test(b(t))
                    }, c(t))
                },
                addClass: function (t) {
                    return t ? this.each(function (e) {
                        if ("className" in this) {
                            L = [];
                            var i = b(this);
                            m(this, t, e, i).split(/\s+/g).forEach(function (t) {
                                S(this).hasClass(t) || L.push(t)
                            }, this), L.length && b(this, i + (i ? " " : "") + L.join(" "))
                        }
                    }) : this
                },
                removeClass: function (t) {
                    return this.each(function (e) {
                        if ("className" in this) {
                            if (t === T) return b(this, "");
                            L = b(this), m(this, t, e, L).split(/\s+/g).forEach(function (t) {
                                L = L.replace(c(t), " ")
                            }), b(this, L.trim())
                        }
                    })
                },
                toggleClass: function (t, e) {
                    return t ? this.each(function (i) {
                        var n = S(this);
                        m(this, t, i, b(this)).split(/\s+/g).forEach(function (t) {
                            (e === T ? !n.hasClass(t) : e) ? n.addClass(t) : n.removeClass(t)
                        })
                    }) : this
                },
                scrollTop: function (t) {
                    if (this.length) {
                        var e = "scrollTop" in this[0];
                        return t === T ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                            this.scrollTop = t
                        } : function () {
                            this.scrollTo(this.scrollX, t)
                        })
                    }
                },
                scrollLeft: function (t) {
                    if (this.length) {
                        var e = "scrollLeft" in this[0];
                        return t === T ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                            this.scrollLeft = t
                        } : function () {
                            this.scrollTo(t, this.scrollY)
                        })
                    }
                },
                position: function () {
                    if (this.length) {
                        var t = this[0], e = this.offsetParent(), i = this.offset(),
                            n = U.test(e[0].nodeName) ? {top: 0, left: 0} : e.offset();
                        return i.top -= parseFloat(S(t).css("margin-top")) || 0, i.left -= parseFloat(S(t).css("margin-left")) || 0, n.top += parseFloat(S(e[0]).css("border-top-width")) || 0, n.left += parseFloat(S(e[0]).css("border-left-width")) || 0, {
                            top: i.top - n.top,
                            left: i.left - n.left
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || O.body; t && !U.test(t.nodeName) && "static" == S(t).css("position");) t = t.offsetParent;
                        return t
                    })
                }
            }, S.fn.detach = S.fn.remove, ["width", "height"].forEach(function (t) {
                var e = t.replace(/./, function (t) {
                    return t[0].toUpperCase()
                });
                S.fn[t] = function (r) {
                    var a, o = this[0];
                    return r === T ? i(o) ? o["inner" + e] : n(o) ? o.documentElement["scroll" + e] : (a = this.offset()) && a[t] : this.each(function (e) {
                        o = S(this), o.css(t, m(this, r, e, o[t]()))
                    })
                }
            }), V.forEach(function (e, i) {
                var n = i % 2;
                S.fn[e] = function () {
                    var e, r, a = S.map(arguments, function (i) {
                        var n = [];
                        return e = t(i), "array" == e ? (i.forEach(function (t) {
                            return t.nodeType !== T ? n.push(t) : S.zepto.isZ(t) ? n = n.concat(t.get()) : void(n = n.concat(X.fragment(t)))
                        }), n) : "object" == e || null == i ? i : X.fragment(i)
                    }), o = this.length > 1;
                    return a.length < 1 ? this : this.each(function (t, e) {
                        r = n ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null;
                        var s = S.contains(O.documentElement, r);
                        a.forEach(function (t) {
                            if (o) t = t.cloneNode(!0); else if (!r) return S(t).remove();
                            r.insertBefore(t, e), s && E(t, function (t) {
                                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                    var e = t.ownerDocument ? t.ownerDocument.defaultView : window;
                                    e.eval.call(e, t.innerHTML)
                                }
                            })
                        })
                    })
                }, S.fn[n ? e + "To" : "insert" + (i ? "Before" : "After")] = function (t) {
                    return S(t)[e](this), this
                }
            }), X.Z.prototype = p.prototype = S.fn, X.uniq = k, X.deserializeValue = _, S.zepto = X, S
        }();
        window.Zepto = i, void 0 === window.$ && (window.$ = i), function (t) {
            function e(e, i, n) {
                var r = t.Event(i);
                return t(e).trigger(r, n), !r.isDefaultPrevented()
            }

            function i(t, i, n, r) {
                if (t.global) return e(i || b, n, r)
            }

            function n(e) {
                e.global && 0 == t.active++ && i(e, null, "ajaxStart")
            }

            function r(e) {
                e.global && !--t.active && i(e, null, "ajaxStop")
            }

            function a(t, e) {
                var n = e.context;
                if (!1 === e.beforeSend.call(n, t, e) || !1 === i(e, n, "ajaxBeforeSend", [t, e])) return !1;
                i(e, n, "ajaxSend", [t, e])
            }

            function o(t, e, n, r) {
                var a = n.context;
                n.success.call(a, t, "success", e), r && r.resolveWith(a, [t, "success", e]), i(n, a, "ajaxSuccess", [e, n, t]), l("success", e, n)
            }

            function s(t, e, n, r, a) {
                var o = r.context;
                r.error.call(o, n, e, t), a && a.rejectWith(o, [n, e, t]), i(r, o, "ajaxError", [n, r, t || e]), l(e, n, r)
            }

            function l(t, e, n) {
                var a = n.context;
                n.complete.call(a, e, t), i(n, a, "ajaxComplete", [e, n]), r(n)
            }

            function u(t, e, i) {
                if (i.dataFilter == c) return t;
                var n = i.context;
                return i.dataFilter.call(n, t, e)
            }

            function c() {
            }

            function d(t) {
                return t && (t = t.split(";", 2)[0]), t && (t == S ? "html" : t == A ? "json" : E.test(t) ? "script" : T.test(t) && "xml") || "text"
            }

            function h(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }

            function f(e) {
                e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = h(e.url, e.data), e.data = void 0)
            }

            function p(e, i, n, r) {
                return t.isFunction(i) && (r = n, n = i, i = void 0), t.isFunction(n) || (r = n, n = void 0), {
                    url: e,
                    data: i,
                    success: n,
                    dataType: r
                }
            }

            function g(e, i, n, r) {
                var a, o = t.isArray(i), s = t.isPlainObject(i);
                t.each(i, function (i, l) {
                    a = t.type(l), r && (i = n ? r : r + "[" + (s || "object" == a || "array" == a ? i : "") + "]"), !r && o ? e.add(l.name, l.value) : "array" == a || !n && "object" == a ? g(e, l, n, i) : e.add(i, l)
                })
            }

            var y, m, v = +new Date, b = window.document, _ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                E = /^(?:text|application)\/javascript/i, T = /^(?:text|application)\/xml/i, A = "application/json",
                S = "text/html", L = /^\s*$/, R = b.createElement("a");
            R.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, i) {
                if (!("type" in e)) return t.ajax(e);
                var n, r, l = e.jsonpCallback, u = (t.isFunction(l) ? l() : l) || "Zepto" + v++,
                    c = b.createElement("script"), d = window[u], h = function (e) {
                        t(c).triggerHandler("error", e || "abort")
                    }, f = {abort: h};
                return i && i.promise(f), t(c).on("load error", function (a, l) {
                    clearTimeout(r), t(c).off().remove(), "error" != a.type && n ? o(n[0], f, e, i) : s(null, l || "error", f, e, i), window[u] = d, n && t.isFunction(d) && d(n[0]), d = n = void 0
                }), !1 === a(f, e) ? (h("abort"), f) : (window[u] = function () {
                    n = arguments
                }, c.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), b.head.appendChild(c), e.timeout > 0 && (r = setTimeout(function () {
                    h("timeout")
                }, e.timeout)), f)
            }, t.ajaxSettings = {
                type: "GET",
                beforeSend: c,
                success: c,
                error: c,
                complete: c,
                context: null,
                global: !0,
                xhr: function () {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: A,
                    xml: "application/xml, text/xml",
                    html: S,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: c
            }, t.ajax = function (e) {
                var i, r, l = t.extend({}, e || {}), p = t.Deferred && t.Deferred();
                for (y in t.ajaxSettings) void 0 === l[y] && (l[y] = t.ajaxSettings[y]);
                n(l), l.crossDomain || (i = b.createElement("a"), i.href = l.url, i.href = i.href, l.crossDomain = R.protocol + "//" + R.host != i.protocol + "//" + i.host), l.url || (l.url = window.location.toString()), (r = l.url.indexOf("#")) > -1 && (l.url = l.url.slice(0, r)), f(l);
                var g = l.dataType, v = /\?.+=\?/.test(l.url);
                if (v && (g = "jsonp"), !1 !== l.cache && (e && !0 === e.cache || "script" != g && "jsonp" != g) || (l.url = h(l.url, "_=" + Date.now())), "jsonp" == g) return v || (l.url = h(l.url, l.jsonp ? l.jsonp + "=?" : !1 === l.jsonp ? "" : "callback=?")), t.ajaxJSONP(l, p);
                var _, E = l.accepts[g], T = {}, A = function (t, e) {
                        T[t.toLowerCase()] = [t, e]
                    }, S = /^([\w-]+:)\/\//.test(l.url) ? RegExp.$1 : window.location.protocol, k = l.xhr(),
                    C = k.setRequestHeader;
                if (p && p.promise(k), l.crossDomain || A("X-Requested-With", "XMLHttpRequest"), A("Accept", E || "*/*"), (E = l.mimeType || E) && (E.indexOf(",") > -1 && (E = E.split(",", 2)[0]), k.overrideMimeType && k.overrideMimeType(E)), (l.contentType || !1 !== l.contentType && l.data && "GET" != l.type.toUpperCase()) && A("Content-Type", l.contentType || "application/x-www-form-urlencoded"), l.headers) for (m in l.headers) A(m, l.headers[m]);
                if (k.setRequestHeader = A, k.onreadystatechange = function () {
                        if (4 == k.readyState) {
                            k.onreadystatechange = c, clearTimeout(_);
                            var e, i = !1;
                            if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == S) {
                                if (g = g || d(l.mimeType || k.getResponseHeader("content-type")), "arraybuffer" == k.responseType || "blob" == k.responseType) e = k.response; else {
                                    e = k.responseText;
                                    try {
                                        e = u(e, g, l), "script" == g ? (0, eval)(e) : "xml" == g ? e = k.responseXML : "json" == g && (e = L.test(e) ? null : t.parseJSON(e))
                                    } catch (t) {
                                        i = t
                                    }
                                    if (i) return s(i, "parsererror", k, l, p)
                                }
                                o(e, k, l, p)
                            } else s(k.statusText || null, k.status ? "error" : "abort", k, l, p)
                        }
                    }, !1 === a(k, l)) return k.abort(), s(null, "abort", k, l, p), k;
                var w = !("async" in l) || l.async;
                if (k.open(l.type, l.url, w, l.username, l.password), l.xhrFields) for (m in l.xhrFields) k[m] = l.xhrFields[m];
                for (m in T) C.apply(k, T[m]);
                return l.timeout > 0 && (_ = setTimeout(function () {
                    k.onreadystatechange = c, k.abort(), s(null, "timeout", k, l, p)
                }, l.timeout)), k.send(l.data ? l.data : null), k
            }, t.get = function () {
                return t.ajax(p.apply(null, arguments))
            }, t.post = function () {
                var e = p.apply(null, arguments);
                return e.type = "POST", t.ajax(e)
            }, t.getJSON = function () {
                var e = p.apply(null, arguments);
                return e.dataType = "json", t.ajax(e)
            }, t.fn.load = function (e, i, n) {
                if (!this.length) return this;
                var r, a = this, o = e.split(/\s/), s = p(e, i, n), l = s.success;
                return o.length > 1 && (s.url = o[0], r = o[1]), s.success = function (e) {
                    a.html(r ? t("<div>").html(e.replace(_, "")).find(r) : e), l && l.apply(a, arguments)
                }, t.ajax(s), this
            };
            var k = encodeURIComponent;
            t.param = function (e, i) {
                var n = [];
                return n.add = function (e, i) {
                    t.isFunction(i) && (i = i()), null == i && (i = ""), this.push(k(e) + "=" + k(i))
                }, g(n, e, i), n.join("&").replace(/%20/g, "+")
            }
        }(i), function (t) {
            t.Callbacks = function (e) {
                e = t.extend({}, e);
                var i, n, r, a, o, s, l = [], u = !e.once && [], c = function (t) {
                    for (i = e.memory && t, n = !0, s = a || 0, a = 0, o = l.length, r = !0; l && s < o; ++s) if (!1 === l[s].apply(t[0], t[1]) && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                    r = !1, l && (u ? u.length && c(u.shift()) : i ? l.length = 0 : d.disable())
                }, d = {
                    add: function () {
                        if (l) {
                            var n = l.length, s = function (i) {
                                t.each(i, function (t, i) {
                                    "function" == typeof i ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" != typeof i && s(i)
                                })
                            };
                            s(arguments), r ? o = l.length : i && (a = n, c(i))
                        }
                        return this
                    }, remove: function () {
                        return l && t.each(arguments, function (e, i) {
                            for (var n; (n = t.inArray(i, l, n)) > -1;) l.splice(n, 1), r && (n <= o && --o, n <= s && --s)
                        }), this
                    }, has: function (e) {
                        return !(!l || !(e ? t.inArray(e, l) > -1 : l.length))
                    }, empty: function () {
                        return o = l.length = 0, this
                    }, disable: function () {
                        return l = u = i = void 0, this
                    }, disabled: function () {
                        return !l
                    }, lock: function () {
                        return u = void 0, i || d.disable(), this
                    }, locked: function () {
                        return !u
                    }, fireWith: function (t, e) {
                        return !l || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? u.push(e) : c(e)), this
                    }, fire: function () {
                        return d.fireWith(this, arguments)
                    }, fired: function () {
                        return !!n
                    }
                };
                return d
            }
        }(i), function (t) {
            function e(i) {
                var n = [["resolve", "done", t.Callbacks({
                    once: 1,
                    memory: 1
                }), "resolved"], ["reject", "fail", t.Callbacks({
                    once: 1,
                    memory: 1
                }), "rejected"], ["notify", "progress", t.Callbacks({memory: 1})]], r = "pending", a = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var i = arguments;
                        return e(function (e) {
                            t.each(n, function (n, r) {
                                var s = t.isFunction(i[n]) && i[n];
                                o[r[1]](function () {
                                    var i = s && s.apply(this, arguments);
                                    if (i && t.isFunction(i.promise)) i.promise().done(e.resolve).fail(e.reject).progress(e.notify); else {
                                        var n = this === a ? e.promise() : this, o = s ? [i] : arguments;
                                        e[r[0] + "With"](n, o)
                                    }
                                })
                            }), i = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? t.extend(e, a) : a
                    }
                }, o = {};
                return t.each(n, function (t, e) {
                    var i = e[2], s = e[3];
                    a[e[1]] = i.add, s && i.add(function () {
                        r = s
                    }, n[1 ^ t][2].disable, n[2][2].lock), o[e[0]] = function () {
                        return o[e[0] + "With"](this === o ? a : this, arguments), this
                    }, o[e[0] + "With"] = i.fireWith
                }), a.promise(o), i && i.call(o, o), o
            }

            var i = Array.prototype.slice;
            t.when = function (n) {
                var r, a, o, s = i.call(arguments), l = s.length, u = 0,
                    c = 1 !== l || n && t.isFunction(n.promise) ? l : 0, d = 1 === c ? n : e(), h = function (t, e, n) {
                        return function (a) {
                            e[t] = this, n[t] = arguments.length > 1 ? i.call(arguments) : a, n === r ? d.notifyWith(e, n) : --c || d.resolveWith(e, n)
                        }
                    };
                if (l > 1) for (r = new Array(l), a = new Array(l), o = new Array(l); u < l; ++u) s[u] && t.isFunction(s[u].promise) ? s[u].promise().done(h(u, o, s)).fail(d.reject).progress(h(u, a, r)) : --c;
                return c || d.resolveWith(o, s), d.promise()
            }, t.Deferred = e
        }(i), function (t) {
            function e(t) {
                return t._zid || (t._zid = h++)
            }

            function i(t, i, a, o) {
                if (i = n(i), i.ns) var s = r(i.ns);
                return (y[e(t)] || []).filter(function (t) {
                    return t && (!i.e || t.e == i.e) && (!i.ns || s.test(t.ns)) && (!a || e(t.fn) === e(a)) && (!o || t.sel == o)
                })
            }

            function n(t) {
                var e = ("" + t).split(".");
                return {e: e[0], ns: e.slice(1).sort().join(" ")}
            }

            function r(t) {
                return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
            }

            function a(t, e) {
                return t.del && !v && t.e in b || !!e
            }

            function o(t) {
                return _[t] || v && b[t] || t
            }

            function s(i, r, s, l, c, h, f) {
                var p = e(i), g = y[p] || (y[p] = []);
                r.split(/\s/).forEach(function (e) {
                    if ("ready" == e) return t(document).ready(s);
                    var r = n(e);
                    r.fn = s, r.sel = c, r.e in _ && (s = function (e) {
                        var i = e.relatedTarget;
                        if (!i || i !== this && !t.contains(this, i)) return r.fn.apply(this, arguments)
                    }), r.del = h;
                    var p = h || s;
                    r.proxy = function (t) {
                        if (t = u(t), !t.isImmediatePropagationStopped()) {
                            t.data = l;
                            var e = p.apply(i, t._args == d ? [t] : [t].concat(t._args));
                            return !1 === e && (t.preventDefault(), t.stopPropagation()), e
                        }
                    }, r.i = g.length, g.push(r), "addEventListener" in i && i.addEventListener(o(r.e), r.proxy, a(r, f))
                })
            }

            function l(t, n, r, s, l) {
                var u = e(t);
                (n || "").split(/\s/).forEach(function (e) {
                    i(t, e, r, s).forEach(function (e) {
                        delete y[u][e.i], "removeEventListener" in t && t.removeEventListener(o(e.e), e.proxy, a(e, l))
                    })
                })
            }

            function u(e, i) {
                return !i && e.isDefaultPrevented || (i || (i = e), t.each(S, function (t, n) {
                    var r = i[t];
                    e[t] = function () {
                        return this[n] = E, r && r.apply(i, arguments)
                    }, e[n] = T
                }), e.timeStamp || (e.timeStamp = Date.now()), (i.defaultPrevented !== d ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = E)), e
            }

            function c(t) {
                var e, i = {originalEvent: t};
                for (e in t) A.test(e) || t[e] === d || (i[e] = t[e]);
                return u(i, t)
            }

            var d, h = 1, f = Array.prototype.slice, p = t.isFunction, g = function (t) {
                    return "string" == typeof t
                }, y = {}, m = {}, v = "onfocusin" in window, b = {focus: "focusin", blur: "focusout"},
                _ = {mouseenter: "mouseover", mouseleave: "mouseout"};
            m.click = m.mousedown = m.mouseup = m.mousemove = "MouseEvents", t.event = {
                add: s,
                remove: l
            }, t.proxy = function (i, n) {
                var r = 2 in arguments && f.call(arguments, 2);
                if (p(i)) {
                    var a = function () {
                        return i.apply(n, r ? r.concat(f.call(arguments)) : arguments)
                    };
                    return a._zid = e(i), a
                }
                if (g(n)) return r ? (r.unshift(i[n], i), t.proxy.apply(null, r)) : t.proxy(i[n], i);
                throw new TypeError("expected function")
            }, t.fn.bind = function (t, e, i) {
                return this.on(t, e, i)
            }, t.fn.unbind = function (t, e) {
                return this.off(t, e)
            }, t.fn.one = function (t, e, i, n) {
                return this.on(t, e, i, n, 1)
            };
            var E = function () {
                return !0
            }, T = function () {
                return !1
            }, A = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, S = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            t.fn.delegate = function (t, e, i) {
                return this.on(e, t, i)
            }, t.fn.undelegate = function (t, e, i) {
                return this.off(e, t, i)
            }, t.fn.live = function (e, i) {
                return t(document.body).delegate(this.selector, e, i), this
            }, t.fn.die = function (e, i) {
                return t(document.body).undelegate(this.selector, e, i), this
            }, t.fn.on = function (e, i, n, r, a) {
                var o, u, h = this;
                return e && !g(e) ? (t.each(e, function (t, e) {
                    h.on(t, i, n, e, a)
                }), h) : (g(i) || p(r) || !1 === r || (r = n, n = i, i = d), r !== d && !1 !== n || (r = n, n = d), !1 === r && (r = T), h.each(function (d, h) {
                    a && (o = function (t) {
                        return l(h, t.type, r), r.apply(this, arguments)
                    }), i && (u = function (e) {
                        var n, a = t(e.target).closest(i, h).get(0);
                        if (a && a !== h) return n = t.extend(c(e), {
                            currentTarget: a,
                            liveFired: h
                        }), (o || r).apply(a, [n].concat(f.call(arguments, 1)))
                    }), s(h, e, r, n, i, u || o)
                }))
            }, t.fn.off = function (e, i, n) {
                var r = this;
                return e && !g(e) ? (t.each(e, function (t, e) {
                    r.off(t, i, e)
                }), r) : (g(i) || p(n) || !1 === n || (n = i, i = d), !1 === n && (n = T), r.each(function () {
                    l(this, e, n, i)
                }))
            }, t.fn.trigger = function (e, i) {
                return e = g(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = i, this.each(function () {
                    e.type in b && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i)
                })
            }, t.fn.triggerHandler = function (e, n) {
                var r, a;
                return this.each(function (o, s) {
                    r = c(g(e) ? t.Event(e) : e), r._args = n, r.target = s, t.each(i(s, e.type || e), function (t, e) {
                        if (a = e.proxy(r), r.isImmediatePropagationStopped()) return !1
                    })
                }), a
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
                t.fn[e] = function (t) {
                    return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                }
            }), t.Event = function (t, e) {
                g(t) || (e = t, t = e.type);
                var i = document.createEvent(m[t] || "Events"), n = !0;
                if (e) for (var r in e) "bubbles" == r ? n = !!e[r] : i[r] = e[r];
                return i.initEvent(t, n, !0), u(i)
            }
        }(i), function () {
            try {
                getComputedStyle(void 0)
            } catch (e) {
                var t = getComputedStyle;
                window.getComputedStyle = function (e, i) {
                    try {
                        return t(e, i)
                    } catch (t) {
                        return null
                    }
                }
            }
        }(), function (t) {
            function e(e) {
                return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
            }

            function i(t, e) {
                t = t.replace(/=#\]/g, '="#"]');
                var i, n, r = s.exec(t);
                if (r && r[2] in o && (i = o[r[2]], n = r[3], t = r[1], n)) {
                    var a = Number(n);
                    n = isNaN(a) ? n.replace(/^["']|["']$/g, "") : a
                }
                return e(t, i, n)
            }

            var n = t.zepto, r = n.qsa, a = n.matches, o = t.expr[":"] = {
                visible: function () {
                    if (e(this)) return this
                }, hidden: function () {
                    if (!e(this)) return this
                }, selected: function () {
                    if (this.selected) return this
                }, checked: function () {
                    if (this.checked) return this
                }, parent: function () {
                    return this.parentNode
                }, first: function (t) {
                    if (0 === t) return this
                }, last: function (t, e) {
                    if (t === e.length - 1) return this
                }, eq: function (t, e, i) {
                    if (t === i) return this
                }, contains: function (e, i, n) {
                    if (t(this).text().indexOf(n) > -1) return this
                }, has: function (t, e, i) {
                    if (n.qsa(this, i).length) return this
                }
            }, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), l = /^\s*>/, u = "Zepto" + +new Date;
            n.qsa = function (e, a) {
                return i(a, function (i, o, s) {
                    try {
                        var c;
                        !i && o ? i = "*" : l.test(i) && (c = t(e).addClass(u), i = "." + u + " " + i);
                        var d = r(e, i)
                    } catch (t) {
                        throw console.error("error performing selector: %o", a), t
                    } finally {
                        c && c.removeClass(u)
                    }
                    return o ? n.uniq(t.map(d, function (t, e) {
                        return o.call(t, e, d, s)
                    })) : d
                })
            }, n.matches = function (t, e) {
                return i(e, function (e, i, n) {
                    return (!e || a(t, e)) && (!i || i.call(t, null, n) === t)
                })
            }
        }(i), t.exports = i
    }, function (t, e) {
        function i(t, e) {
            var i = t[1] || "", r = t[3];
            if (!r) return i;
            if (e && "function" == typeof btoa) {
                var a = n(r);
                return [i].concat(r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */"
                })).concat([a]).join("\n")
            }
            return [i].join("\n")
        }

        function n(t) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
        }

        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map(function (e) {
                    var n = i(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function (t, i) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var n = {}, r = 0; r < this.length; r++) {
                    var a = this[r][0];
                    "number" == typeof a && (n[a] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var o = t[r];
                    "number" == typeof o[0] && n[o[0]] || (i && !o[2] ? o[2] = i : i && (o[2] = "(" + o[2] + ") and (" + i + ")"), e.push(o))
                }
            }, e
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g}, r = /(.)^/,
            a = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"},
            o = /\\|'|\r|\n|\t|\u2028|\u2029/g,
            s = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}, l = new RegExp("[&<>\"']", "g"),
            u = function (t) {
                return null === t ? "" : ("" + t).replace(l, function (t) {
                    return s[t]
                })
            }, c = 0, d = function (t, e) {
                var i,
                    s = new RegExp([(n.escape || r).source, (n.interpolate || r).source, (n.evaluate || r).source].join("|") + "|$", "g"),
                    l = 0, d = "__p+='";
                t.replace(s, function (e, i, n, r, s) {
                    return d += t.slice(l, s).replace(o, function (t) {
                        return "\\" + a[t]
                    }), i && (d += "'+\n((__t=(" + i + "))==null?'':escapeExpr(__t))+\n'"), n && (d += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), r && (d += "';\n" + r + "\n__p+='"), l = s + e.length, e
                }), d += "';\n", n.variable || (d = "with(obj||{}){\n" + d + "}\n"), d = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + d + "return __p;\n//# sourceURL=/microtemplates/source[" + c++ + "]";
                try {
                    i = new Function(n.variable || "obj", "escapeExpr", d)
                } catch (t) {
                    throw t.source = d, t
                }
                if (e) return i(e, u);
                var h = function (t) {
                    return i.call(this, t, u)
                };
                return h.source = "function(" + (n.variable || "obj") + "){\n" + d + "}", h
            };
        d.settings = n, e.default = d, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(5), f = i(21),
            p = n(f), g = function (t) {
                function e(i, n) {
                    (0, a.default)(this, e);
                    var r = (0, s.default)(this, t.call(this, i));
                    return r.settings = {}, r._i18n = n, r
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "isAudioOnly", get: function () {
                        return !1
                    }
                }, {
                    key: "isAdaptive", get: function () {
                        return !1
                    }
                }, {
                    key: "ended", get: function () {
                        return !1
                    }
                }, {
                    key: "i18n", get: function () {
                        return this._i18n
                    }
                }, {
                    key: "buffering", get: function () {
                        return !1
                    }
                }]), e.prototype.consent = function () {
                }, e.prototype.play = function () {
                }, e.prototype.pause = function () {
                }, e.prototype.stop = function () {
                }, e.prototype.seek = function (t) {
                }, e.prototype.seekPercentage = function (t) {
                }, e.prototype.getStartTimeOffset = function () {
                    return 0
                }, e.prototype.getDuration = function () {
                    return 0
                }, e.prototype.isPlaying = function () {
                    return !1
                }, e.prototype.getPlaybackType = function () {
                    return e.NO_OP
                }, e.prototype.isHighDefinitionInUse = function () {
                    return !1
                }, e.prototype.volume = function (t) {
                }, e.prototype.destroy = function () {
                    this.$el.remove()
                }, (0, u.default)(e, [{
                    key: "isReady", get: function () {
                        return !1
                    }
                }, {
                    key: "hasClosedCaptionsTracks", get: function () {
                        return this.closedCaptionsTracks.length > 0
                    }
                }, {
                    key: "closedCaptionsTracks", get: function () {
                        return []
                    }
                }, {
                    key: "closedCaptionsTrackId", get: function () {
                        return -1
                    }, set: function (t) {
                    }
                }]), e
            }(p.default);
        e.default = g, g.extend = function (t) {
            return (0, h.extend)(g, t)
        }, g.canPlay = function (t, e) {
            return !1
        }, g.VOD = "vod", g.AOD = "aod", g.LIVE = "live", g.NO_OP = "no_op", g.type = "playback", t.exports = e.default
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], r = p[n.id];
                if (r) {
                    r.refs++;
                    for (var a = 0; a < r.parts.length; a++) r.parts[a](n.parts[a]);
                    for (; a < n.parts.length; a++) r.parts.push(c(n.parts[a], e))
                } else {
                    for (var o = [], a = 0; a < n.parts.length; a++) o.push(c(n.parts[a], e));
                    p[n.id] = {id: n.id, refs: 1, parts: o}
                }
            }
        }

        function r(t, e) {
            for (var i = [], n = {}, r = 0; r < t.length; r++) {
                var a = t[r], o = e.base ? a[0] + e.base : a[0], s = a[1], l = a[2], u = a[3],
                    c = {css: s, media: l, sourceMap: u};
                n[o] ? n[o].parts.push(c) : i.push(n[o] = {id: o, parts: [c]})
            }
            return i
        }

        function a(t, e) {
            var i = y(t.insertInto);
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = b[b.length - 1];
            if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), b.push(e); else if ("bottom" === t.insertAt) i.appendChild(e); else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var r = y(t.insertInto + " " + t.insertAt.before);
                i.insertBefore(e, r)
            }
        }

        function o(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = b.indexOf(t);
            e >= 0 && b.splice(e, 1)
        }

        function s(t) {
            var e = document.createElement("style");
            return t.attrs.type = "text/css", u(e, t.attrs), a(t, e), e
        }

        function l(t) {
            var e = document.createElement("link");
            return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", u(e, t.attrs), a(t, e), e
        }

        function u(t, e) {
            Object.keys(e).forEach(function (i) {
                t.setAttribute(i, e[i])
            })
        }

        function c(t, e) {
            var i, n, r, a;
            if (e.transform && t.css) {
                if (!(a = e.transform(t.css))) return function () {
                };
                t.css = a
            }
            if (e.singleton) {
                var u = v++;
                i = m || (m = s(e)), n = d.bind(null, i, u, !1), r = d.bind(null, i, u, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = l(e), n = f.bind(null, i, e), r = function () {
                o(i), i.href && URL.revokeObjectURL(i.href)
            }) : (i = s(e), n = h.bind(null, i), r = function () {
                o(i)
            });
            return n(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else r()
            }
        }

        function d(t, e, i, n) {
            var r = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = E(e, r); else {
                var a = document.createTextNode(r), o = t.childNodes;
                o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
            }
        }

        function h(t, e) {
            var i = e.css, n = e.media;
            if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i))
            }
        }

        function f(t, e, i) {
            var n = i.css, r = i.sourceMap, a = void 0 === e.convertToAbsoluteUrls && r;
            (e.convertToAbsoluteUrls || a) && (n = _(n)), r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var o = new Blob([n], {type: "text/css"}), s = t.href;
            t.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
        }

        var p = {}, g = function (t) {
            var e;
            return function () {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }(function () {
            return window && document && document.all && !window.atob
        }), y = function (t) {
            var e = {};
            return function (i) {
                if (void 0 === e[i]) {
                    var n = t.call(this, i);
                    if (n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                    e[i] = n
                }
                return e[i]
            }
        }(function (t) {
            return document.querySelector(t)
        }), m = null, v = 0, b = [], _ = i(145);
        t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = g()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var i = r(t, e);
            return n(i, e), function (t) {
                for (var a = [], o = 0; o < i.length; o++) {
                    var s = i[o], l = p[s.id];
                    l.refs--, a.push(l)
                }
                if (t) {
                    n(r(t, e), e)
                }
                for (var o = 0; o < a.length; o++) {
                    var l = a[o];
                    if (0 === l.refs) {
                        for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                        delete p[l.id]
                    }
                }
            }
        };
        var E = function () {
            var t = [];
            return function (e, i) {
                return t[e] = i, t.filter(Boolean).join("\n")
            }
        }()
    }, function (t, e) {
        var i = t.exports = {version: "2.4.0"};
        "number" == typeof __e && (__e = i)
    }, function (t, e, i) {
        var n = i(44)("wks"), r = i(31), a = i(15).Symbol, o = "function" == typeof a;
        (t.exports = function (t) {
            return n[t] || (n[t] = o && a[t] || (o ? a : r)("Symbol." + t))
        }).store = n
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = {}, r = e.getBrowserInfo = function (t) {
            var e = t.match(/\b(playstation 4|nx|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
                i = void 0;
            if (/trident/i.test(e[1])) return i = /\brv[ :]+(\d+)/g.exec(t) || [], {
                name: "IE",
                version: parseInt(i[1] || "")
            };
            if ("Chrome" === e[1]) {
                if (null != (i = t.match(/\bOPR\/(\d+)/))) return {name: "Opera", version: parseInt(i[1])};
                if (null != (i = t.match(/\bEdge\/(\d+)/))) return {name: "Edge", version: parseInt(i[1])}
            } else /android/i.test(t) && (i = t.match(/version\/(\d+)/i)) && (e.splice(1, 1, "Android WebView"), e.splice(2, 1, i[1]));
            return e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"], {
                name: e[0],
                version: parseInt(e[1])
            }
        }, a = r(navigator.userAgent);
        n.isEdge = /edge/i.test(navigator.userAgent), n.isChrome = /chrome|CriOS/i.test(navigator.userAgent) && !n.isEdge, n.isSafari = /safari/i.test(navigator.userAgent) && !n.isChrome && !n.isEdge, n.isFirefox = /firefox/i.test(navigator.userAgent), n.isLegacyIE = !!window.ActiveXObject, n.isIE = n.isLegacyIE || /trident.*rv:1\d/i.test(navigator.userAgent), n.isIE11 = /trident.*rv:11/i.test(navigator.userAgent), n.isChromecast = n.isChrome && /CrKey/i.test(navigator.userAgent), n.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Mobile Safari|Opera Mini/i.test(navigator.userAgent), n.isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent), n.isAndroid = /Android/i.test(navigator.userAgent), n.isWindowsPhone = /Windows Phone/i.test(navigator.userAgent), n.isWin8App = /MSAppHost/i.test(navigator.userAgent), n.isWiiU = /WiiU/i.test(navigator.userAgent), n.isPS4 = /PlayStation 4/i.test(navigator.userAgent), n.hasLocalstorage = function () {
            try {
                return localStorage.setItem("clappr", "clappr"), localStorage.removeItem("clappr"), !0
            } catch (t) {
                return !1
            }
        }(), n.hasFlash = function () {
            try {
                return !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (t) {
                return !(!navigator.mimeTypes || void 0 === navigator.mimeTypes["application/x-shockwave-flash"] || !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
            }
        }(), n.name = a.name, n.version = a.version, e.default = n
    }, function (t, e, i) {
        var n = i(97), r = i(40);
        t.exports = function (t) {
            return n(r(t))
        }
    }, function (t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    }, function (t, e, i) {
        var n = i(23), r = i(64), a = i(47), o = Object.defineProperty;
        e.f = i(20) ? Object.defineProperty : function (t, e, i) {
            if (n(t), e = a(e, !0), n(i), r) try {
                return o(t, e, i)
            } catch (t) {
            }
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t
        }
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(5), f = i(4),
            p = n(f), g = function (t) {
                function e() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i));
                    return n._options = i, n.uniqueId = (0, h.uniqueId)("o"), n
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "options", get: function () {
                        return this._options
                    }
                }]), e
            }(p.default);
        e.default = g, t.exports = e.default
    }, function (t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return i.call(t, e)
        }
    }, function (t, e, i) {
        var n = i(15), r = i(11), a = i(46), o = i(22), s = function (t, e, i) {
            var l, u, c, d = t & s.F, h = t & s.G, f = t & s.S, p = t & s.P, g = t & s.B, y = t & s.W,
                m = h ? r : r[e] || (r[e] = {}), v = m.prototype, b = h ? n : f ? n[e] : (n[e] || {}).prototype;
            h && (i = e);
            for (l in i) (u = !d && b && void 0 !== b[l]) && l in m || (c = u ? b[l] : i[l], m[l] = h && "function" != typeof b[l] ? i[l] : g && u ? a(c, n) : y && b[l] == c ? function (t) {
                var e = function (e, i, n) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, i)
                        }
                        return new t(e, i, n)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(c) : p && "function" == typeof c ? a(Function.call, c) : c, p && ((m.virtual || (m.virtual = {}))[l] = c, t & s.R && v && !v[l] && o(v, l, c)))
        };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
    }, function (t, e, i) {
        t.exports = !i(27)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(6), f = n(h),
            p = i(5), g = i(17), y = n(g), m = /^(\S+)\s*(.*)$/, v = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i));
                    return n.cid = (0, p.uniqueId)("c"), n._ensureElement(), n.delegateEvents(), n
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "tagName", get: function () {
                        return "div"
                    }
                }, {
                    key: "events", get: function () {
                        return {}
                    }
                }, {
                    key: "attributes", get: function () {
                        return {}
                    }
                }]), e.prototype.$ = function (t) {
                    return this.$el.find(t)
                }, e.prototype.render = function () {
                    return this
                }, e.prototype.remove = function () {
                    return this.$el.remove(), this.stopListening(), this.undelegateEvents(), this
                }, e.prototype.setElement = function (t, e) {
                    return this.$el && this.undelegateEvents(), this.$el = f.default.zepto.isZ(t) ? t : (0, f.default)(t), this.el = this.$el[0], !1 !== e && this.delegateEvents(), this
                }, e.prototype.delegateEvents = function (t) {
                    if (!t && !(t = this.events)) return this;
                    this.undelegateEvents();
                    for (var e in t) {
                        var i = t[e];
                        if (i && i.constructor !== Function && (i = this[t[e]]), i) {
                            var n = e.match(m), r = n[1], a = n[2];
                            r += ".delegateEvents" + this.cid, "" === a ? this.$el.on(r, i.bind(this)) : this.$el.on(r, a, i.bind(this))
                        }
                    }
                    return this
                }, e.prototype.undelegateEvents = function () {
                    return this.$el.off(".delegateEvents" + this.cid), this
                }, e.prototype._ensureElement = function () {
                    if (this.el) this.setElement(this.el, !1); else {
                        var t = f.default.extend({}, this.attributes);
                        this.id && (t.id = this.id), this.className && (t.class = this.className);
                        var e = p.DomRecycler.create(this.tagName).attr(t);
                        this.setElement(e, !1)
                    }
                }, e
            }(y.default);
        e.default = v, t.exports = e.default
    }, function (t, e, i) {
        var n = i(16), r = i(28);
        t.exports = i(20) ? function (t, e, i) {
            return n.f(t, e, r(1, i))
        } : function (t, e, i) {
            return t[e] = i, t
        }
    }, function (t, e, i) {
        var n = i(26);
        t.exports = function (t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(4), s = n(o), l = new s.default, u = function t() {
            (0, a.default)(this, t)
        };
        e.default = u, u.on = function (t, e, i) {
            l.on(t, e, i)
        }, u.once = function (t, e, i) {
            l.once(t, e, i)
        }, u.off = function (t, e, i) {
            l.off(t, e, i)
        }, u.trigger = function (t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            l.trigger.apply(l, [t].concat(i))
        }, u.stopListening = function (t, e, i) {
            l.stopListening(t, e, i)
        }, t.exports = e.default
    }, function (t, e, i) {
        var n = i(61), r = i(45);
        t.exports = Object.keys || function (t) {
            return n(t, r)
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(2), u = n(l), c = i(5), d = i(17), h = n(d),
            f = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i.options));
                    return n.core = i, n.enabled = !0, n.bindEvents(), n
                }

                return (0, u.default)(e, t), e.prototype.bindEvents = function () {
                }, e.prototype.enable = function () {
                    this.enabled || (this.bindEvents(), this.enabled = !0)
                }, e.prototype.disable = function () {
                    this.enabled && (this.stopListening(), this.enabled = !1)
                }, e.prototype.getExternalInterface = function () {
                    return {}
                }, e.prototype.destroy = function () {
                    this.stopListening()
                }, e
            }(h.default);
        e.default = f, f.extend = function (t) {
            return (0, c.extend)(f, t)
        }, f.type = "core", t.exports = e.default
    }, function (t, e) {
        var i = 0, n = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0;
        var r = i(101), a = n(r), o = i(112), s = n(o),
            l = "function" == typeof s.default && "symbol" == typeof a.default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : typeof t
            };
        e.default = "function" == typeof s.default && "symbol" === l(a.default) ? function (t) {
            return void 0 === t ? "undefined" : l(t)
        } : function (t) {
            return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : void 0 === t ? "undefined" : l(t)
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n), a = function t() {
            (0, r.default)(this, t), this.options = {}, this.playbackPlugins = [], this.currentSize = {
                width: 0,
                height: 0
            }
        };
        a._players = {}, a.getInstance = function (t) {
            return a._players[t] || (a._players[t] = new a)
        }, e.default = a, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(171), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(2), u = n(l), c = i(5), d = i(21), h = n(d),
            f = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i.options));
                    return n.container = i, n.enabled = !0, n.bindEvents(), n
                }

                return (0, u.default)(e, t), e.prototype.enable = function () {
                    this.enabled || (this.bindEvents(), this.$el.show(), this.enabled = !0)
                }, e.prototype.disable = function () {
                    this.stopListening(), this.$el.hide(), this.enabled = !1
                }, e.prototype.bindEvents = function () {
                }, e.prototype.destroy = function () {
                    this.remove()
                }, e
            }(h.default);
        e.default = f, f.extend = function (t) {
            return (0, c.extend)(f, t)
        }, f.type = "container", t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(2), u = n(l), c = i(17), d = n(c), h = i(5),
            f = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i.options));
                    return n.container = i, n.enabled = !0, n.bindEvents(), n
                }

                return (0, u.default)(e, t), e.prototype.enable = function () {
                    this.enabled || (this.bindEvents(), this.enabled = !0)
                }, e.prototype.disable = function () {
                    this.enabled && (this.stopListening(), this.enabled = !1)
                }, e.prototype.bindEvents = function () {
                }, e.prototype.destroy = function () {
                    this.stopListening()
                }, e
            }(d.default);
        e.default = f, f.extend = function (t) {
            return (0, h.extend)(f, t)
        }, f.type = "container", t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(2), u = n(l), c = i(5), d = i(21), h = n(d),
            f = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i.options));
                    return n.core = i, n.enabled = !0, n.bindEvents(), n.render(), n
                }

                return (0, u.default)(e, t), e.prototype.bindEvents = function () {
                }, e.prototype.getExternalInterface = function () {
                    return {}
                }, e.prototype.enable = function () {
                    this.enabled || (this.bindEvents(), this.$el.show(), this.enabled = !0)
                }, e.prototype.disable = function () {
                    this.stopListening(), this.$el.hide(), this.enabled = !1
                }, e.prototype.destroy = function () {
                    this.remove()
                }, e.prototype.render = function () {
                    return this
                }, e
            }(h.default);
        e.default = f, f.extend = function (t) {
            return (0, c.extend)(f, t)
        }, f.type = "core", t.exports = e.default
    }, function (t, e, i) {
        t.exports = {default: i(95), __esModule: !0}
    }, function (t, e, i) {
        var n = i(40);
        t.exports = function (t) {
            return Object(n(t))
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e) {
        var i = {}.toString;
        t.exports = function (t) {
            return i.call(t).slice(8, -1)
        }
    }, function (t, e) {
        var i = Math.ceil, n = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    }, function (t, e, i) {
        var n = i(44)("keys"), r = i(31);
        t.exports = function (t) {
            return n[t] || (n[t] = r(t))
        }
    }, function (t, e, i) {
        var n = i(15), r = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
        t.exports = function (t) {
            return r[t] || (r[t] = {})
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, i) {
        var n = i(100);
        t.exports = function (t, e, i) {
            if (n(t), void 0 === e) return t;
            switch (i) {
                case 1:
                    return function (i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function (i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function (i, n, r) {
                        return t.call(e, i, n, r)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e, i) {
        var n = i(26);
        t.exports = function (t, e) {
            if (!n(t)) return t;
            var i, r;
            if (e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
            if ("function" == typeof(i = t.valueOf) && !n(r = i.call(t))) return r;
            if (!e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = !0
    }, function (t, e, i) {
        var n = i(23), r = i(105), a = i(45), o = i(43)("IE_PROTO"), s = function () {
        }, l = function () {
            var t, e = i(65)("iframe"), n = a.length;
            for (e.style.display = "none", i(106).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[a[n]];
            return l()
        };
        t.exports = Object.create || function (t, e) {
            var i;
            return null !== t ? (s.prototype = n(t), i = new s, s.prototype = null, i[o] = t) : i = l(), void 0 === e ? i : r(i, e)
        }
    }, function (t, e, i) {
        var n = i(16).f, r = i(18), a = i(12)("toStringTag");
        t.exports = function (t, e, i) {
            t && !r(t = i ? t : t.prototype, a) && n(t, a, {configurable: !0, value: e})
        }
    }, function (t, e, i) {
        e.f = i(12)
    }, function (t, e, i) {
        var n = i(15), r = i(11), a = i(48), o = i(51), s = i(16).f;
        t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = a ? {} : n.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {value: o.f(t)})
        }
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, i) {
        var n = i(53), r = i(28), a = i(14), o = i(47), s = i(18), l = i(64), u = Object.getOwnPropertyDescriptor;
        e.f = i(20) ? u : function (t, e) {
            if (t = a(t), e = o(e, !0), l) try {
                return u(t, e)
            } catch (t) {
            }
            if (s(t, e)) return r(!n.f.call(t, e), t[e])
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(135), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(136), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = {Kibo: r.default}, t.exports = e.default
    }, function (t, e) {
        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function n() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(t) {
            if (c === setTimeout) return setTimeout(t, 0);
            if ((c === i || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
            try {
                return c(t, 0)
            } catch (e) {
                try {
                    return c.call(null, t, 0)
                } catch (e) {
                    return c.call(this, t, 0)
                }
            }
        }

        function a(t) {
            if (d === clearTimeout) return clearTimeout(t);
            if ((d === n || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
            try {
                return d(t)
            } catch (e) {
                try {
                    return d.call(null, t)
                } catch (e) {
                    return d.call(this, t)
                }
            }
        }

        function o() {
            g && f && (g = !1, f.length ? p = f.concat(p) : y = -1, p.length && s())
        }

        function s() {
            if (!g) {
                var t = r(o);
                g = !0;
                for (var e = p.length; e;) {
                    for (f = p, p = []; ++y < e;) f && f[y].run();
                    y = -1, e = p.length
                }
                f = null, g = !1, a(t)
            }
        }

        function l(t, e) {
            this.fun = t, this.array = e
        }

        function u() {
        }

        var c, d, h = t.exports = {};
        !function () {
            try {
                c = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                c = i
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (t) {
                d = n
            }
        }();
        var f, p = [], g = !1, y = -1;
        h.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            p.push(new l(t, e)), 1 !== p.length || g || r(s)
        }, l.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, h.cwd = function () {
            return "/"
        }, h.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, h.umask = function () {
            return 0
        }
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M1.425.35L14.575 8l-13.15 7.65V.35z"></path></svg>'
    }, function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(80), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return (0, r.default)(t)
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = i(176), t.exports = e.default
    }, function (t, e, i) {
        var n = i(18), r = i(14), a = i(98)(!1), o = i(43)("IE_PROTO");
        t.exports = function (t, e) {
            var i, s = r(t), l = 0, u = [];
            for (i in s) i != o && n(s, i) && u.push(i);
            for (; e.length > l;) n(s, i = e[l++]) && (~a(u, i) || u.push(i));
            return u
        }
    }, function (t, e, i) {
        var n = i(42), r = Math.min;
        t.exports = function (t) {
            return t > 0 ? r(n(t), 9007199254740991) : 0
        }
    }, function (t, e, i) {
        var n = i(19), r = i(11), a = i(27);
        t.exports = function (t, e) {
            var i = (r.Object || {})[t] || Object[t], o = {};
            o[t] = e(i), n(n.S + n.F * a(function () {
                i(1)
            }), "Object", o)
        }
    }, function (t, e, i) {
        t.exports = !i(20) && !i(27)(function () {
            return 7 != Object.defineProperty(i(65)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, i) {
        var n = i(26), r = i(15).document, a = n(r) && n(r.createElement);
        t.exports = function (t) {
            return a ? r.createElement(t) : {}
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(103)(!0);
        i(67)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, i = this._i;
            return i >= e.length ? {value: void 0, done: !0} : (t = n(e, i), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(48), r = i(19), a = i(68), o = i(22), s = i(18), l = i(29), u = i(104), c = i(50), d = i(107),
            h = i(12)("iterator"), f = !([].keys && "next" in [].keys()), p = function () {
                return this
            };
        t.exports = function (t, e, i, g, y, m, v) {
            u(i, e, g);
            var b, _, E, T = function (t) {
                    if (!f && t in R) return R[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new i(this, t)
                            }
                    }
                    return function () {
                        return new i(this, t)
                    }
                }, A = e + " Iterator", S = "values" == y, L = !1, R = t.prototype,
                k = R[h] || R["@@iterator"] || y && R[y], C = k || T(y), w = y ? S ? T("entries") : C : void 0,
                I = "Array" == e ? R.entries || k : k;
            if (I && (E = d(I.call(new t))) !== Object.prototype && (c(E, A, !0), n || s(E, h) || o(E, h, p)), S && k && "values" !== k.name && (L = !0, C = function () {
                    return k.call(this)
                }), n && !v || !f && !L && R[h] || o(R, h, C), l[e] = C, l[A] = p, y) if (b = {
                    values: S ? C : T("values"),
                    keys: m ? C : T("keys"),
                    entries: w
                }, v) for (_ in b) _ in R || a(R, _, b[_]); else r(r.P + r.F * (f || L), e, b);
            return b
        }
    }, function (t, e, i) {
        t.exports = i(22)
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e, i) {
        var n = i(61), r = i(45).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return n(t, r)
        }
    }, function (t, e, i) {
        t.exports = {default: i(123), __esModule: !0}
    }, function (t, e, i) {
        t.exports = {default: i(129), __esModule: !0}
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(139), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(142), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(146), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e) {
        t.exports = "<%=baseUrl%>/a8c874b93b3d848f39a71260c57e3863.cur"
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 14.76H6.43V1.24H1.71v13.52zm7.86-13.52v13.52h4.716V1.24H9.573z"></path></svg>'
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(6), a = n(r), o = i(8), s = n(o), l = {
            getStyleFor: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {baseUrl: ""};
                return (0, a.default)('<style class="clappr-style"></style>').html((0, s.default)(t.toString())(e))
            }
        };
        e.default = l, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(162), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        t.exports = {default: i(163), __esModule: !0}
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(175), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(181), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(182), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(185), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(187), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(190), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(194), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(200), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(204), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(210), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(211), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(221), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(94), a = n(r), o = i(5), s = n(o), l = i(4), u = n(l), c = i(9), d = n(c), h = i(36), f = n(h),
            p = i(30), g = n(p), y = i(37), m = n(y), v = i(35), b = n(v), _ = i(17), E = n(_), T = i(21), A = n(T),
            S = i(13), L = n(S), R = i(74), k = n(R), C = i(73), w = n(C), I = i(79), D = n(I), O = i(24), P = n(O),
            x = i(75), N = n(x), M = i(33), F = n(M), B = i(60), U = n(B), G = i(81), K = n(G), V = i(83), j = n(V),
            Y = i(84), H = n(Y), $ = i(82), z = n($), W = i(34), q = n(W), X = i(85), Z = n(X), J = i(86), Q = n(J),
            tt = i(90), et = n(tt), it = i(91), nt = n(it), rt = i(92), at = n(rt), ot = i(55), st = n(ot), lt = i(89),
            ut = n(lt), ct = i(87), dt = n(ct), ht = i(88), ft = n(ht), pt = i(78), gt = n(pt), yt = i(56), mt = n(yt),
            vt = i(8), bt = n(vt), _t = i(6), Et = n(_t);
        e.default = {
            Player: a.default,
            Mediator: P.default,
            Events: u.default,
            Browser: L.default,
            PlayerInfo: F.default,
            MediaControl: N.default,
            ContainerPlugin: f.default,
            UIContainerPlugin: b.default,
            CorePlugin: g.default,
            UICorePlugin: m.default,
            Playback: d.default,
            Container: k.default,
            Core: w.default,
            Loader: D.default,
            BaseObject: E.default,
            UIObject: A.default,
            Utils: s.default,
            BaseFlashPlayback: U.default,
            Flash: K.default,
            FlasHLS: j.default,
            HLS: H.default,
            HTML5Audio: z.default,
            HTML5Video: q.default,
            HTMLImg: Z.default,
            NoOp: Q.default,
            ClickToPausePlugin: et.default,
            DVRControls: nt.default,
            Favicon: at.default,
            Log: st.default,
            Poster: ut.default,
            SpinnerThreeBouncePlugin: dt.default,
            WaterMarkPlugin: ft.default,
            Styler: gt.default,
            Vendor: mt.default,
            version: "0.2.87",
            template: bt.default,
            $: Et.default
        }, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(38), a = n(r), o = i(0), s = n(o), l = i(1), u = n(l), c = i(3), d = n(c), h = i(2), f = n(h),
            p = i(5), g = i(17), y = n(g), m = i(4), v = n(m), b = i(13), _ = n(b), E = i(137), T = n(E), A = i(79),
            S = n(A), L = i(33), R = n(L), k = i(6), C = n(k), w = (0, p.currentScriptUrl)().replace(/\/[^\/]+$/, ""),
            I = function (t) {
                function e(i) {
                    (0, s.default)(this, e);
                    var n = (0, u.default)(this, t.call(this, i)), r = {
                        playerId: (0, p.uniqueId)(""),
                        persistConfig: !0,
                        width: 640,
                        height: 360,
                        baseUrl: w,
                        allowUserInteraction: _.default.isMobile
                    };
                    return n._options = C.default.extend(r, i), n.options.sources = n._normalizeSources(i), n.options.chromeless || (n.options.allowUserInteraction = !0), n.options.allowUserInteraction || (n.options.disableKeyboardShortcuts = !0), n._registerOptionEventListeners(n.options.events), n._coreFactory = new T.default(n), n.playerInfo = R.default.getInstance(n.options.playerId), n.playerInfo.currentSize = {
                        width: i.width,
                        height: i.height
                    }, n.playerInfo.options = n.options, n.options.parentId ? n.setParentId(n.options.parentId) : n.options.parent && n.attachTo(n.options.parent), n
                }

                return (0, f.default)(e, t), (0, d.default)(e, [{
                    key: "loader", set: function (t) {
                        this._loader = t
                    }, get: function () {
                        return this._loader || (this._loader = new S.default(this.options.plugins || {}, this.options.playerId)), this._loader
                    }
                }, {
                    key: "ended", get: function () {
                        return this.core.mediaControl.container.ended
                    }
                }, {
                    key: "buffering", get: function () {
                        return this.core.mediaControl.container.buffering
                    }
                }, {
                    key: "isReady", get: function () {
                        return !!this._ready
                    }
                }, {
                    key: "eventsMapping", get: function () {
                        return {
                            onReady: v.default.PLAYER_READY,
                            onResize: v.default.PLAYER_RESIZE,
                            onPlay: v.default.PLAYER_PLAY,
                            onPause: v.default.PLAYER_PAUSE,
                            onStop: v.default.PLAYER_STOP,
                            onEnded: v.default.PLAYER_ENDED,
                            onSeek: v.default.PLAYER_SEEK,
                            onError: v.default.PLAYER_ERROR,
                            onTimeUpdate: v.default.PLAYER_TIMEUPDATE,
                            onVolumeUpdate: v.default.PLAYER_VOLUMEUPDATE,
                            onSubtitleAvailable: v.default.PLAYER_SUBTITLE_AVAILABLE
                        }
                    }
                }]), e.prototype.setParentId = function (t) {
                    var e = document.querySelector(t);
                    return e && this.attachTo(e), this
                }, e.prototype.attachTo = function (t) {
                    return this.options.parentElement = t, this.core = this._coreFactory.create(), this._addEventListeners(), this
                }, e.prototype._addEventListeners = function () {
                    return this.core.isReady ? this._onReady() : this.listenToOnce(this.core, v.default.CORE_READY, this._onReady), this.listenTo(this.core.mediaControl, v.default.MEDIACONTROL_CONTAINERCHANGED, this._containerChanged), this.listenTo(this.core, v.default.CORE_FULLSCREEN, this._onFullscreenChange), this
                }, e.prototype._addContainerEventListeners = function () {
                    var t = this.core.mediaControl.container;
                    return t && (this.listenTo(t, v.default.CONTAINER_PLAY, this._onPlay), this.listenTo(t, v.default.CONTAINER_PAUSE, this._onPause), this.listenTo(t, v.default.CONTAINER_STOP, this._onStop), this.listenTo(t, v.default.CONTAINER_ENDED, this._onEnded), this.listenTo(t, v.default.CONTAINER_SEEK, this._onSeek), this.listenTo(t, v.default.CONTAINER_ERROR, this._onError), this.listenTo(t, v.default.CONTAINER_TIMEUPDATE, this._onTimeUpdate), this.listenTo(t, v.default.CONTAINER_VOLUME, this._onVolumeUpdate), this.listenTo(t, v.default.CONTAINER_SUBTITLE_AVAILABLE, this._onSubtitleAvailable)), this
                }, e.prototype._registerOptionEventListeners = function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.default)(i).forEach(function (e) {
                        var i = t.eventsMapping[e];
                        i && t.off(i)
                    }), (0, a.default)(e).forEach(function (i) {
                        var n = t.eventsMapping[i];
                        if (n) {
                            var r = e[i];
                            r = "function" == typeof r && r, r && t.on(n, r)
                        }
                    }), this
                }, e.prototype._containerChanged = function () {
                    this.stopListening(), this._addEventListeners()
                }, e.prototype._onReady = function () {
                    this._ready = !0, this._addContainerEventListeners(), this.trigger(v.default.PLAYER_READY)
                }, e.prototype._onFullscreenChange = function (t) {
                    this.trigger(v.default.PLAYER_FULLSCREEN, t)
                }, e.prototype._onVolumeUpdate = function (t) {
                    this.trigger(v.default.PLAYER_VOLUMEUPDATE, t)
                }, e.prototype._onSubtitleAvailable = function () {
                    this.trigger(v.default.PLAYER_SUBTITLE_AVAILABLE)
                }, e.prototype._onPlay = function () {
                    this.trigger(v.default.PLAYER_PLAY)
                }, e.prototype._onPause = function () {
                    this.trigger(v.default.PLAYER_PAUSE)
                }, e.prototype._onStop = function () {
                    this.trigger(v.default.PLAYER_STOP, this.getCurrentTime())
                }, e.prototype._onEnded = function () {
                    this.trigger(v.default.PLAYER_ENDED)
                }, e.prototype._onSeek = function (t) {
                    this.trigger(v.default.PLAYER_SEEK, t)
                }, e.prototype._onTimeUpdate = function (t) {
                    this.trigger(v.default.PLAYER_TIMEUPDATE, t)
                }, e.prototype._onError = function (t) {
                    this.trigger(v.default.PLAYER_ERROR, t)
                }, e.prototype._normalizeSources = function (t) {
                    var e = t.sources || (void 0 !== t.source ? [t.source] : []);
                    return 0 === e.length ? [{source: "", mimeType: ""}] : e
                }, e.prototype.resize = function (t) {
                    return this.core.resize(t), this
                }, e.prototype.load = function (t, e, i) {
                    return void 0 !== i && this.configure({autoPlay: !!i}), this.core.load(t, e), this
                }, e.prototype.destroy = function () {
                    return this.core.destroy(), this
                }, e.prototype.consent = function () {
                    return this.core.getCurrentPlayback().consent(), this
                }, e.prototype.play = function () {
                    return this.core.mediaControl.container.play(), this
                }, e.prototype.pause = function () {
                    return this.core.mediaControl.container.pause(), this
                }, e.prototype.stop = function () {
                    return this.core.mediaControl.container.stop(), this
                }, e.prototype.seek = function (t) {
                    return this.core.mediaControl.container.seek(t), this
                }, e.prototype.seekPercentage = function (t) {
                    return this.core.mediaControl.container.seekPercentage(t), this
                }, e.prototype.setVolume = function (t) {
                    return this.core && this.core.mediaControl && this.core.mediaControl.setVolume(t), this
                }, e.prototype.getVolume = function () {
                    return this.core && this.core.mediaControl ? this.core.mediaControl.volume : 0
                }, e.prototype.mute = function () {
                    return this._mutedVolume = this.getVolume(), this.setVolume(0), this
                }, e.prototype.unmute = function () {
                    return this.setVolume("number" == typeof this._mutedVolume ? this._mutedVolume : 100), this._mutedVolume = null, this
                }, e.prototype.isPlaying = function () {
                    return this.core.mediaControl.container.isPlaying()
                }, e.prototype.isDvrEnabled = function () {
                    return this.core.mediaControl.container.isDvrEnabled()
                }, e.prototype.isDvrInUse = function () {
                    return this.core.mediaControl.container.isDvrInUse()
                }, e.prototype.configure = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this._registerOptionEventListeners(t.events, this.options.events), this.core.configure(t), this
                }, e.prototype.getPlugin = function (t) {
                    return this.core.plugins.concat(this.core.mediaControl.container.plugins).filter(function (e) {
                        return e.name === t
                    })[0]
                }, e.prototype.getCurrentTime = function () {
                    return this.core.mediaControl.container.getCurrentTime()
                }, e.prototype.getStartTimeOffset = function () {
                    return this.core.mediaControl.container.getStartTimeOffset()
                }, e.prototype.getDuration = function () {
                    return this.core.mediaControl.container.getDuration()
                }, e
            }(y.default);
        e.default = I, t.exports = e.default
    }, function (t, e, i) {
        i(96), t.exports = i(11).Object.keys
    }, function (t, e, i) {
        var n = i(39), r = i(25);
        i(63)("keys", function () {
            return function (t) {
                return r(n(t))
            }
        })
    }, function (t, e, i) {
        var n = i(41);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    }, function (t, e, i) {
        var n = i(14), r = i(62), a = i(99);
        t.exports = function (t) {
            return function (e, i, o) {
                var s, l = n(e), u = r(l.length), c = a(o, u);
                if (t && i != i) {
                    for (; u > c;) if ((s = l[c++]) != s) return !0
                } else for (; u > c; c++) if ((t || c in l) && l[c] === i) return t || c || 0;
                return !t && -1
            }
        }
    }, function (t, e, i) {
        var n = i(42), r = Math.max, a = Math.min;
        t.exports = function (t, e) {
            return t = n(t), t < 0 ? r(t + e, 0) : a(t, e)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, i) {
        t.exports = {default: i(102), __esModule: !0}
    }, function (t, e, i) {
        i(66), i(108), t.exports = i(51).f("iterator")
    }, function (t, e, i) {
        var n = i(42), r = i(40);
        t.exports = function (t) {
            return function (e, i) {
                var a, o, s = String(r(e)), l = n(i), u = s.length;
                return l < 0 || l >= u ? t ? "" : void 0 : (a = s.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? t ? s.charAt(l) : a : t ? s.slice(l, l + 2) : o - 56320 + (a - 55296 << 10) + 65536)
            }
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(49), r = i(28), a = i(50), o = {};
        i(22)(o, i(12)("iterator"), function () {
            return this
        }), t.exports = function (t, e, i) {
            t.prototype = n(o, {next: r(1, i)}), a(t, e + " Iterator")
        }
    }, function (t, e, i) {
        var n = i(16), r = i(23), a = i(25);
        t.exports = i(20) ? Object.defineProperties : function (t, e) {
            r(t);
            for (var i, o = a(e), s = o.length, l = 0; s > l;) n.f(t, i = o[l++], e[i]);
            return t
        }
    }, function (t, e, i) {
        t.exports = i(15).document && document.documentElement
    }, function (t, e, i) {
        var n = i(18), r = i(39), a = i(43)("IE_PROTO"), o = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = r(t), n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
        }
    }, function (t, e, i) {
        i(109);
        for (var n = i(15), r = i(22), a = i(29), o = i(12)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
            var u = s[l], c = n[u], d = c && c.prototype;
            d && !d[o] && r(d, o, u), a[u] = a.Array
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(110), r = i(111), a = i(29), o = i(14);
        t.exports = i(67)(Array, "Array", function (t, e) {
            this._t = o(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t, e = this._k, i = this._i++;
            return !t || i >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, i) : "values" == e ? r(0, t[i]) : r(0, [i, t[i]])
        }, "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
    }, function (t, e) {
        t.exports = function () {
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t}
        }
    }, function (t, e, i) {
        t.exports = {default: i(113), __esModule: !0}
    }, function (t, e, i) {
        i(114), i(120), i(121), i(122), t.exports = i(11).Symbol
    }, function (t, e, i) {
        "use strict";
        var n = i(15), r = i(18), a = i(20), o = i(19), s = i(68), l = i(115).KEY, u = i(27), c = i(44), d = i(50),
            h = i(31), f = i(12), p = i(51), g = i(52), y = i(116), m = i(117), v = i(118), b = i(23), _ = i(14),
            E = i(47), T = i(28), A = i(49), S = i(119), L = i(54), R = i(16), k = i(25), C = L.f, w = R.f, I = S.f,
            D = n.Symbol, O = n.JSON, P = O && O.stringify, x = f("_hidden"), N = f("toPrimitive"),
            M = {}.propertyIsEnumerable, F = c("symbol-registry"), B = c("symbols"), U = c("op-symbols"),
            G = Object.prototype, K = "function" == typeof D, V = n.QObject,
            j = !V || !V.prototype || !V.prototype.findChild, Y = a && u(function () {
                return 7 != A(w({}, "a", {
                    get: function () {
                        return w(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (t, e, i) {
                var n = C(G, e);
                n && delete G[e], w(t, e, i), n && t !== G && w(G, e, n)
            } : w, H = function (t) {
                var e = B[t] = A(D.prototype);
                return e._k = t, e
            }, $ = K && "symbol" == typeof D.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof D
            }, z = function (t, e, i) {
                return t === G && z(U, e, i), b(t), e = E(e, !0), b(i), r(B, e) ? (i.enumerable ? (r(t, x) && t[x][e] && (t[x][e] = !1), i = A(i, {enumerable: T(0, !1)})) : (r(t, x) || w(t, x, T(1, {})), t[x][e] = !0), Y(t, e, i)) : w(t, e, i)
            }, W = function (t, e) {
                b(t);
                for (var i, n = m(e = _(e)), r = 0, a = n.length; a > r;) z(t, i = n[r++], e[i]);
                return t
            }, q = function (t, e) {
                return void 0 === e ? A(t) : W(A(t), e)
            }, X = function (t) {
                var e = M.call(this, t = E(t, !0));
                return !(this === G && r(B, t) && !r(U, t)) && (!(e || !r(this, t) || !r(B, t) || r(this, x) && this[x][t]) || e)
            }, Z = function (t, e) {
                if (t = _(t), e = E(e, !0), t !== G || !r(B, e) || r(U, e)) {
                    var i = C(t, e);
                    return !i || !r(B, e) || r(t, x) && t[x][e] || (i.enumerable = !0), i
                }
            }, J = function (t) {
                for (var e, i = I(_(t)), n = [], a = 0; i.length > a;) r(B, e = i[a++]) || e == x || e == l || n.push(e);
                return n
            }, Q = function (t) {
                for (var e, i = t === G, n = I(i ? U : _(t)), a = [], o = 0; n.length > o;) !r(B, e = n[o++]) || i && !r(G, e) || a.push(B[e]);
                return a
            };
        K || (D = function () {
            if (this instanceof D) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0), e = function (i) {
                this === G && e.call(U, i), r(this, x) && r(this[x], t) && (this[x][t] = !1), Y(this, t, T(1, i))
            };
            return a && j && Y(G, t, {configurable: !0, set: e}), H(t)
        }, s(D.prototype, "toString", function () {
            return this._k
        }), L.f = Z, R.f = z, i(70).f = S.f = J, i(53).f = X, i(69).f = Q, a && !i(48) && s(G, "propertyIsEnumerable", X, !0), p.f = function (t) {
            return H(f(t))
        }), o(o.G + o.W + o.F * !K, {Symbol: D});
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) f(tt[et++]);
        for (var tt = k(f.store), et = 0; tt.length > et;) g(tt[et++]);
        o(o.S + o.F * !K, "Symbol", {
            for: function (t) {
                return r(F, t += "") ? F[t] : F[t] = D(t)
            }, keyFor: function (t) {
                if ($(t)) return y(F, t);
                throw TypeError(t + " is not a symbol!")
            }, useSetter: function () {
                j = !0
            }, useSimple: function () {
                j = !1
            }
        }), o(o.S + o.F * !K, "Object", {
            create: q,
            defineProperty: z,
            defineProperties: W,
            getOwnPropertyDescriptor: Z,
            getOwnPropertyNames: J,
            getOwnPropertySymbols: Q
        }), O && o(o.S + o.F * (!K || u(function () {
            var t = D();
            return "[null]" != P([t]) || "{}" != P({a: t}) || "{}" != P(Object(t))
        })), "JSON", {
            stringify: function (t) {
                if (void 0 !== t && !$(t)) {
                    for (var e, i, n = [t], r = 1; arguments.length > r;) n.push(arguments[r++]);
                    return e = n[1], "function" == typeof e && (i = e), !i && v(e) || (e = function (t, e) {
                        if (i && (e = i.call(this, t, e)), !$(e)) return e
                    }), n[1] = e, P.apply(O, n)
                }
            }
        }), D.prototype[N] || i(22)(D.prototype, N, D.prototype.valueOf), d(D, "Symbol"), d(Math, "Math", !0), d(n.JSON, "JSON", !0)
    }, function (t, e, i) {
        var n = i(31)("meta"), r = i(26), a = i(18), o = i(16).f, s = 0, l = Object.isExtensible || function () {
            return !0
        }, u = !i(27)(function () {
            return l(Object.preventExtensions({}))
        }), c = function (t) {
            o(t, n, {value: {i: "O" + ++s, w: {}}})
        }, d = function (t, e) {
            if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, n)) {
                if (!l(t)) return "F";
                if (!e) return "E";
                c(t)
            }
            return t[n].i
        }, h = function (t, e) {
            if (!a(t, n)) {
                if (!l(t)) return !0;
                if (!e) return !1;
                c(t)
            }
            return t[n].w
        }, f = function (t) {
            return u && p.NEED && l(t) && !a(t, n) && c(t), t
        }, p = t.exports = {KEY: n, NEED: !1, fastKey: d, getWeak: h, onFreeze: f}
    }, function (t, e, i) {
        var n = i(25), r = i(14);
        t.exports = function (t, e) {
            for (var i, a = r(t), o = n(a), s = o.length, l = 0; s > l;) if (a[i = o[l++]] === e) return i
        }
    }, function (t, e, i) {
        var n = i(25), r = i(69), a = i(53);
        t.exports = function (t) {
            var e = n(t), i = r.f;
            if (i) for (var o, s = i(t), l = a.f, u = 0; s.length > u;) l.call(t, o = s[u++]) && e.push(o);
            return e
        }
    }, function (t, e, i) {
        var n = i(41);
        t.exports = Array.isArray || function (t) {
            return "Array" == n(t)
        }
    }, function (t, e, i) {
        var n = i(14), r = i(70).f, a = {}.toString,
            o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function (t) {
                try {
                    return r(t)
                } catch (t) {
                    return o.slice()
                }
            };
        t.exports.f = function (t) {
            return o && "[object Window]" == a.call(t) ? s(t) : r(n(t))
        }
    }, function (t, e) {
    }, function (t, e, i) {
        i(52)("asyncIterator")
    }, function (t, e, i) {
        i(52)("observable")
    }, function (t, e, i) {
        i(124);
        var n = i(11).Object;
        t.exports = function (t, e, i) {
            return n.defineProperty(t, e, i)
        }
    }, function (t, e, i) {
        var n = i(19);
        n(n.S + n.F * !i(20), "Object", {defineProperty: i(16).f})
    }, function (t, e, i) {
        t.exports = {default: i(126), __esModule: !0}
    }, function (t, e, i) {
        i(127), t.exports = i(11).Object.setPrototypeOf
    }, function (t, e, i) {
        var n = i(19);
        n(n.S, "Object", {setPrototypeOf: i(128).set})
    }, function (t, e, i) {
        var n = i(26), r = i(23), a = function (t, e) {
            if (r(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
                try {
                    n = i(46)(Function.call, i(54).f(Object.prototype, "__proto__").set, 2), n(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function (t, i) {
                    return a(t, i), e ? t.__proto__ = i : n(t, i), t
                }
            }({}, !1) : void 0), check: a
        }
    }, function (t, e, i) {
        i(130);
        var n = i(11).Object;
        t.exports = function (t, e) {
            return n.create(t, e)
        }
    }, function (t, e, i) {
        var n = i(19);
        n(n.S, "Object", {create: i(49)})
    }, function (t, e, i) {
        t.exports = {default: i(132), __esModule: !0}
    }, function (t, e, i) {
        i(133);
        var n = i(11).Object;
        t.exports = function (t, e) {
            return n.getOwnPropertyDescriptor(t, e)
        }
    }, function (t, e, i) {
        var n = i(14), r = i(54).f;
        i(63)("getOwnPropertyDescriptor", function () {
            return function (t, e) {
                return r(n(t), e)
            }
        })
    }, function (t, e, i) {
        "use strict";
        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function (t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var e = Object(this), i = e.length >>> 0;
                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                for (var n = arguments[1], r = 0; r < i;) {
                    var a = e[r];
                    if (t.call(n, a, r, e)) return a;
                    r++
                }
            }
        })
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), r = function (t) {
                return t && t.__esModule ? t : {default: t}
            }(n), a = i(56), o = "font-weight: bold; font-size: 13px;", s = "color: #ff8000;" + o,
            l = "color: #ff0000;" + o, u = 1, c = 3,
            d = ["color: #0000ff;font-weight: bold; font-size: 13px;", "color: #006600;font-weight: bold; font-size: 13px;", s, l, l],
            h = ["debug", "info", "warn", "error", "disabled"], f = function () {
                function t() {
                    var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                    (0, r.default)(this, t), this.kibo = new a.Kibo, this.kibo.down(["ctrl shift d"], function () {
                        return e.onOff()
                    }), this.BLACKLIST = ["timeupdate", "playback:timeupdate", "playback:progress", "container:hover", "container:timeupdate", "container:progress"], this.level = i, this.offLevel = n
                }

                return t.prototype.debug = function (t) {
                    this.log(t, 0, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.info = function (t) {
                    this.log(t, u, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.warn = function (t) {
                    this.log(t, 2, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.error = function (t) {
                    this.log(t, 3, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.onOff = function () {
                    this.level === this.offLevel ? this.level = this.previousLevel : (this.previousLevel = this.level, this.level = this.offLevel), window.console && window.console.log && window.console.log("%c[Clappr.Log] set log level to " + h[this.level], s)
                }, t.prototype.level = function (t) {
                    this.level = t
                }, t.prototype.log = function (t, e, i) {
                    if (!(this.BLACKLIST.indexOf(i[0]) >= 0 || e < this.level)) {
                        i || (i = t, t = null);
                        var n = d[e], r = "";
                        t && (r = "[" + t + "]"), window.console && window.console.log && window.console.log.apply(console, ["%c[" + h[e] + "]" + r, n].concat(i))
                    }
                }, t
            }();
        e.default = f, f.LEVEL_DEBUG = 0, f.LEVEL_INFO = u, f.LEVEL_WARN = 2, f.LEVEL_ERROR = 3, f.getInstance = function () {
            return void 0 === this._instance && (this._instance = new this, this._instance.previousLevel = this._instance.level, this._instance.level = this._instance.offLevel), this._instance
        }, f.setLevel = function (t) {
            this.getInstance().level = t
        }, f.debug = function () {
            this.getInstance().debug.apply(this.getInstance(), arguments)
        }, f.info = function () {
            this.getInstance().info.apply(this.getInstance(), arguments)
        }, f.warn = function () {
            this.getInstance().warn.apply(this.getInstance(), arguments)
        }, f.error = function () {
            this.getInstance().error.apply(this.getInstance(), arguments)
        }, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function (t) {
            this.element = t || window.document, this.initialize()
        };
        n.KEY_NAMES_BY_CODE = {
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            20: "caps_lock",
            27: "esc",
            32: "space",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12"
        }, n.KEY_CODES_BY_NAME = {}, function () {
            for (var t in n.KEY_NAMES_BY_CODE) Object.prototype.hasOwnProperty.call(n.KEY_NAMES_BY_CODE, t) && (n.KEY_CODES_BY_NAME[n.KEY_NAMES_BY_CODE[t]] = +t)
        }(), n.MODIFIERS = ["shift", "ctrl", "alt"], n.registerEvent = function () {
            return document.addEventListener ? function (t, e, i) {
                t.addEventListener(e, i, !1)
            } : document.attachEvent ? function (t, e, i) {
                t.attachEvent("on" + e, i)
            } : void 0
        }(), n.unregisterEvent = function () {
            return document.removeEventListener ? function (t, e, i) {
                t.removeEventListener(e, i, !1)
            } : document.detachEvent ? function (t, e, i) {
                t.detachEvent("on" + e, i)
            } : void 0
        }(), n.stringContains = function (t, e) {
            return -1 !== t.indexOf(e)
        }, n.neatString = function (t) {
            return t.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")
        }, n.capitalize = function (t) {
            return t.toLowerCase().replace(/^./, function (t) {
                return t.toUpperCase()
            })
        }, n.isString = function (t) {
            return n.stringContains(Object.prototype.toString.call(t), "String")
        }, n.arrayIncludes = function () {
            return Array.prototype.indexOf ? function (t, e) {
                return -1 !== t.indexOf(e)
            } : function (t, e) {
                for (var i = 0; i < t.length; i++) if (t[i] === e) return !0;
                return !1
            }
        }(), n.extractModifiers = function (t) {
            var e, i;
            for (e = [], i = 0; i < n.MODIFIERS.length; i++) n.stringContains(t, n.MODIFIERS[i]) && e.push(n.MODIFIERS[i]);
            return e
        }, n.extractKey = function (t) {
            var e, i;
            for (e = n.neatString(t).split(" "), i = 0; i < e.length; i++) if (!n.arrayIncludes(n.MODIFIERS, e[i])) return e[i]
        }, n.modifiersAndKey = function (t) {
            var e, i;
            return n.stringContains(t, "any") ? n.neatString(t).split(" ").slice(0, 2).join(" ") : (e = n.extractModifiers(t), i = n.extractKey(t), i && !n.arrayIncludes(n.MODIFIERS, i) && e.push(i), e.join(" "))
        }, n.keyName = function (t) {
            return n.KEY_NAMES_BY_CODE[t + ""]
        }, n.keyCode = function (t) {
            return +n.KEY_CODES_BY_NAME[t]
        }, n.prototype.initialize = function () {
            var t, e = this;
            for (this.lastKeyCode = -1, this.lastModifiers = {}, t = 0; t < n.MODIFIERS.length; t++) this.lastModifiers[n.MODIFIERS[t]] = !1;
            this.keysDown = {any: []}, this.keysUp = {any: []}, this.downHandler = this.handler("down"), this.upHandler = this.handler("up"), n.registerEvent(this.element, "keydown", this.downHandler), n.registerEvent(this.element, "keyup", this.upHandler), n.registerEvent(window, "unload", function t() {
                n.unregisterEvent(e.element, "keydown", e.downHandler), n.unregisterEvent(e.element, "keyup", e.upHandler), n.unregisterEvent(window, "unload", t)
            })
        }, n.prototype.handler = function (t) {
            var e = this;
            return function (i) {
                var r, a, o;
                for (i = i || window.event, e.lastKeyCode = i.keyCode, r = 0; r < n.MODIFIERS.length; r++) e.lastModifiers[n.MODIFIERS[r]] = i[n.MODIFIERS[r] + "Key"];
                for (n.arrayIncludes(n.MODIFIERS, n.keyName(e.lastKeyCode)) && (e.lastModifiers[n.keyName(e.lastKeyCode)] = !0), a = e["keys" + n.capitalize(t)], r = 0; r < a.any.length; r++) !1 === a.any[r](i) && i.preventDefault && i.preventDefault();
                if (o = e.lastModifiersAndKey(), a[o]) for (r = 0; r < a[o].length; r++) !1 === a[o][r](i) && i.preventDefault && i.preventDefault()
            }
        }, n.prototype.registerKeys = function (t, e, i) {
            var r, a, o = this["keys" + n.capitalize(t)];
            for (n.isString(e) && (e = [e]), r = 0; r < e.length; r++) a = e[r], a = n.modifiersAndKey(a + ""), o[a] ? o[a].push(i) : o[a] = [i];
            return this
        }, n.prototype.unregisterKeys = function (t, e, i) {
            var r, a, o, s = this["keys" + n.capitalize(t)];
            for (n.isString(e) && (e = [e]), r = 0; r < e.length; r++) if (o = e[r], o = n.modifiersAndKey(o + ""), null === i) delete s[o]; else if (s[o]) for (a = 0; a < s[o].length; a++) if (String(s[o][a]) === String(i)) {
                s[o].splice(a, 1);
                break
            }
            return this
        }, n.prototype.off = function (t) {
            return this.unregisterKeys("down", t, null)
        }, n.prototype.delegate = function (t, e, i) {
            return null !== i || void 0 !== i ? this.registerKeys(t, e, i) : this.unregisterKeys(t, e, i)
        }, n.prototype.down = function (t, e) {
            return this.delegate("down", t, e)
        }, n.prototype.up = function (t, e) {
            return this.delegate("up", t, e)
        }, n.prototype.lastKey = function (t) {
            return t ? this.lastModifiers[t] : n.keyName(this.lastKeyCode)
        }, n.prototype.lastModifiersAndKey = function () {
            var t, e;
            for (t = [], e = 0; e < n.MODIFIERS.length; e++) this.lastKey(n.MODIFIERS[e]) && t.push(n.MODIFIERS[e]);
            return n.arrayIncludes(t, this.lastKey()) || t.push(this.lastKey()), t.join(" ")
        }, e.default = n, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(138), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(17), f = n(h),
            p = i(73), g = n(p), y = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this));
                    return n.player = i, n._options = i.options, n
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "loader", get: function () {
                        return this.player.loader
                    }
                }]), e.prototype.create = function () {
                    return this.options.loader = this.loader, this.core = new g.default(this.options), this.addCorePlugins(), this.core.createContainers(this.options), this.core
                }, e.prototype.addCorePlugins = function () {
                    var t = this;
                    return this.loader.corePlugins.forEach(function (e) {
                        var i = new e(t.core);
                        t.core.addPlugin(i), t.setupExternalInterface(i)
                    }), this.core
                }, e.prototype.setupExternalInterface = function (t) {
                    var e = t.getExternalInterface();
                    for (var i in e) this.player[i] = e[i].bind(t)
                }, e
            }(f.default);
        e.default = y, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(5), f = i(4),
            p = n(f), g = i(21), y = n(g), m = i(13), v = n(m), b = i(140), _ = n(b), E = i(75), T = n(E), A = i(24),
            S = n(A), L = i(33), R = n(L), k = i(78), C = n(k), w = i(6), I = n(w);
        i(158);
        var D = i(160), O = n(D), P = void 0, x = function (t) {
            function e(i) {
                (0, a.default)(this, e);
                var n = (0, s.default)(this, t.call(this, i));
                return n.configureDomRecycler(), n.playerInfo = R.default.getInstance(i.playerId), n.firstResize = !0, n.plugins = [], n.containers = [], n.setupMediaControl(null), n._boundFullscreenHandler = function () {
                    return n.handleFullscreenChange()
                }, (0, I.default)(document).bind("fullscreenchange", n._boundFullscreenHandler), (0, I.default)(document).bind("MSFullscreenChange", n._boundFullscreenHandler), (0, I.default)(document).bind("mozfullscreenchange", n._boundFullscreenHandler), v.default.isMobile && (0, I.default)(window).bind("resize", function (t) {
                    n.handleWindowResize(t)
                }), n
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "events", get: function () {
                    return {
                        webkitfullscreenchange: "handleFullscreenChange",
                        mousemove: "showMediaControl",
                        mouseleave: "hideMediaControl"
                    }
                }
            }, {
                key: "attributes", get: function () {
                    return {"data-player": "", tabindex: 9999}
                }
            }, {
                key: "isReady", get: function () {
                    return !!this.ready
                }
            }, {
                key: "i18n", get: function () {
                    return this.getPlugin("strings") || {
                        t: function (t) {
                            return t
                        }
                    }
                }
            }]), e.prototype.configureDomRecycler = function () {
                var t = !!(this.options && this.options.playback && this.options.playback.recycleVideo);
                h.DomRecycler.configure({recycleVideo: t})
            }, e.prototype.createContainers = function (t) {
                var e = this;
                this.defer = I.default.Deferred(), this.defer.promise(this), this.containerFactory = new _.default(t, t.loader, this.i18n), this.containerFactory.createContainers().then(function (t) {
                    return e.setupContainers(t)
                }).then(function (t) {
                    return e.resolveOnContainersReady(t)
                })
            }, e.prototype.updateSize = function () {
                h.Fullscreen.isFullscreen() ? this.setFullscreen() : this.setPlayerSize()
            }, e.prototype.setFullscreen = function () {
                v.default.isiOS || (this.$el.addClass("fullscreen"), this.$el.removeAttr("style"), this.playerInfo.previousSize = {
                    width: this.options.width,
                    height: this.options.height
                }, this.playerInfo.currentSize = {
                    width: (0, I.default)(window).width(),
                    height: (0, I.default)(window).height()
                })
            }, e.prototype.setPlayerSize = function () {
                this.$el.removeClass("fullscreen"), this.playerInfo.currentSize = this.playerInfo.previousSize, this.playerInfo.previousSize = {
                    width: (0, I.default)(window).width(),
                    height: (0, I.default)(window).height()
                }, this.resize(this.playerInfo.currentSize)
            }, e.prototype.resize = function (t) {
                (0, h.isNumber)(t.height) || (0, h.isNumber)(t.width) ? (this.el.style.height = t.height + "px", this.el.style.width = t.width + "px") : (this.el.style.height = "" + t.height, this.el.style.width = "" + t.width), this.playerInfo.previousSize = {
                    width: this.options.width,
                    height: this.options.height
                }, this.options.width = t.width, this.options.height = t.height, this.playerInfo.currentSize = t, this.triggerResize(this.playerInfo.currentSize)
            }, e.prototype.enableResizeObserver = function () {
                var t = this, e = function () {
                    t.playerInfo.computedSize.width === t.el.clientWidth && t.playerInfo.computedSize.height === t.el.clientHeight || (t.playerInfo.computedSize = {
                        width: t.el.clientWidth,
                        height: t.el.clientHeight
                    }, t.triggerResize(t.playerInfo.computedSize))
                };
                this.resizeObserverInterval = setInterval(e, 500)
            }, e.prototype.triggerResize = function (t) {
                (this.firstResize || this.oldHeight !== t.height || this.oldWidth !== t.width) && (S.default.trigger(this.options.playerId + ":" + p.default.PLAYER_RESIZE, t), this.oldHeight = t.height, this.oldWidth = t.width, this.firstResize = !1)
            }, e.prototype.disableResizeObserver = function () {
                this.resizeObserverInterval && clearInterval(this.resizeObserverInterval)
            }, e.prototype.resolveOnContainersReady = function (t) {
                var e = this;
                I.default.when.apply(I.default, t).done(function () {
                    e.defer.resolve(e), e.ready = !0, e.trigger(p.default.CORE_READY)
                })
            }, e.prototype.addPlugin = function (t) {
                this.plugins.push(t)
            }, e.prototype.hasPlugin = function (t) {
                return !!this.getPlugin(t)
            }, e.prototype.getPlugin = function (t) {
                return this.plugins.filter(function (e) {
                    return e.name === t
                })[0]
            }, e.prototype.load = function (t, e) {
                var i = this;
                this.options.mimeType = e, t = t && t.constructor === Array ? t : [t], this.containers.forEach(function (t) {
                    return t.destroy()
                }), this.mediaControl.container = null, this.containerFactory.options = I.default.extend(this.options, {sources: t}), this.containerFactory.createContainers().then(function (t) {
                    return i.setupContainers(t)
                }).then(function (t) {
                    return i.resolveOnContainersReady(t)
                })
            }, e.prototype.destroy = function () {
                this.disableResizeObserver(), this.containers.forEach(function (t) {
                    return t.destroy()
                }), this.plugins.forEach(function (t) {
                    return t.destroy()
                }), this.$el.remove(), this.mediaControl.destroy(), (0, I.default)(document).unbind("fullscreenchange", this._boundFullscreenHandler), (0, I.default)(document).unbind("MSFullscreenChange", this._boundFullscreenHandler), (0, I.default)(document).unbind("mozfullscreenchange", this._boundFullscreenHandler)
            }, e.prototype.handleFullscreenChange = function () {
                this.trigger(p.default.CORE_FULLSCREEN, h.Fullscreen.isFullscreen()), this.updateSize(), this.mediaControl.show()
            }, e.prototype.handleWindowResize = function (t) {
                var e = (0, I.default)(window).width() > (0, I.default)(window).height() ? "landscape" : "portrait";
                this._screenOrientation !== e && (this._screenOrientation = e, this.trigger(p.default.CORE_SCREEN_ORIENTATION_CHANGED, {
                    event: t,
                    orientation: this._screenOrientation
                }))
            }, e.prototype.setMediaControlContainer = function (t) {
                this.mediaControl.setContainer(t), this.mediaControl.render()
            }, e.prototype.disableMediaControl = function () {
                this.mediaControl.disable(), this.$el.removeClass("nocursor")
            }, e.prototype.enableMediaControl = function () {
                this.mediaControl.enable()
            }, e.prototype.removeContainer = function (t) {
                this.stopListening(t), this.containers = this.containers.filter(function (e) {
                    return e !== t
                })
            }, e.prototype.appendContainer = function (t) {
                this.listenTo(t, p.default.CONTAINER_DESTROYED, this.removeContainer), this.containers.push(t)
            }, e.prototype.setupContainers = function (t) {
                return t.map(this.appendContainer.bind(this)), this.trigger(p.default.CORE_CONTAINERS_CREATED), this.renderContainers(), this.setupMediaControl(this.getCurrentContainer()), this.render(), this.appendToParent(), this.containers
            }, e.prototype.renderContainers = function () {
                var t = this;
                this.containers.map(function (e) {
                    return t.el.appendChild(e.render().el)
                })
            }, e.prototype.createContainer = function (t, e) {
                var i = this.containerFactory.createContainer(t, e);
                return this.appendContainer(i), this.el.appendChild(i.render().el), i
            }, e.prototype.setupMediaControl = function (t) {
                this.mediaControl ? this.mediaControl.setContainer(t) : (this.mediaControl = this.createMediaControl(I.default.extend({
                    container: t,
                    focusElement: this.el
                }, this.options)), this.listenTo(this.mediaControl, p.default.MEDIACONTROL_FULLSCREEN, this.toggleFullscreen), this.listenTo(this.mediaControl, p.default.MEDIACONTROL_SHOW, this.onMediaControlShow.bind(this, !0)), this.listenTo(this.mediaControl, p.default.MEDIACONTROL_HIDE, this.onMediaControlShow.bind(this, !1)))
            }, e.prototype.createMediaControl = function (t) {
                return t.mediacontrol && t.mediacontrol.external ? new t.mediacontrol.external(t).render() : new T.default(t).render()
            }, e.prototype.getCurrentContainer = function () {
                return this.mediaControl && this.mediaControl.container ? this.mediaControl.container : this.containers[0]
            }, e.prototype.getCurrentPlayback = function () {
                var t = this.getCurrentContainer();
                return t && t.playback
            }, e.prototype.getPlaybackType = function () {
                var t = this.getCurrentContainer();
                return t && t.getPlaybackType()
            }, e.prototype.toggleFullscreen = function () {
                h.Fullscreen.isFullscreen() ? (h.Fullscreen.cancelFullscreen(), v.default.isiOS || this.$el.removeClass("fullscreen nocursor")) : (h.Fullscreen.requestFullscreen(this.el), v.default.isiOS || this.$el.addClass("fullscreen")), this.mediaControl.show()
            }, e.prototype.showMediaControl = function (t) {
                this.mediaControl.show(t)
            }, e.prototype.hideMediaControl = function () {
                this.mediaControl.hide(this.options.hideMediaControlDelay)
            }, e.prototype.onMediaControlShow = function (t) {
                this.getCurrentContainer().trigger(t ? p.default.CONTAINER_MEDIACONTROL_SHOW : p.default.CONTAINER_MEDIACONTROL_HIDE), t ? this.$el.removeClass("nocursor") : h.Fullscreen.isFullscreen() && this.$el.addClass("nocursor")
            }, e.prototype.configure = function (t) {
                var e = this;
                this._options = I.default.extend(this._options, t), this.configureDomRecycler();
                var i = t.source || t.sources;
                i && this.load(i, t.mimeType || this.options.mimeType), this.trigger(p.default.CORE_OPTIONS_CHANGE), this.containers.forEach(function (t) {
                    t.configure(e.options)
                })
            }, e.prototype.appendToParent = function () {
                !(this.$el.parent() && this.$el.parent().length) && this.$el.appendTo(this.options.parentElement)
            }, e.prototype.render = function () {
                this.$el.append(this.mediaControl.render().el), P || (P = C.default.getStyleFor(O.default, {baseUrl: this.options.baseUrl})), (0, I.default)("head").append(P), this.options.width = this.options.width || this.$el.width(), this.options.height = this.options.height || this.$el.height();
                var t = {width: this.options.width, height: this.options.height};
                return this.playerInfo.previousSize = this.playerInfo.currentSize = this.playerInfo.computedSize = t, this.updateSize(), this.previousSize = {
                    width: this.$el.width(),
                    height: this.$el.height()
                }, this.enableResizeObserver(), this
            }, e
        }(y.default);
        e.default = x, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(141), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(32), a = n(r), o = i(0), s = n(o), l = i(1), u = n(l), c = i(3), d = n(c), h = i(2), f = n(h),
            p = i(17), g = n(p), y = i(4), m = n(y), v = i(74), b = n(v), _ = i(6), E = n(_), T = function (t) {
                function e(i, n, r) {
                    (0, s.default)(this, e);
                    var a = (0, u.default)(this, t.call(this, i));
                    return a._i18n = r, a.loader = n, a
                }

                return (0, f.default)(e, t), (0, d.default)(e, [{
                    key: "options", get: function () {
                        return this._options
                    }, set: function (t) {
                        this._options = t
                    }
                }]), e.prototype.createContainers = function () {
                    var t = this;
                    return E.default.Deferred(function (e) {
                        e.resolve(t.options.sources.map(function (e) {
                            return t.createContainer(e)
                        }))
                    })
                }, e.prototype.findPlaybackPlugin = function (t, e) {
                    return this.loader.playbackPlugins.filter(function (i) {
                        return i.canPlay(t, e)
                    })[0]
                }, e.prototype.createContainer = function (t) {
                    var e = null, i = this.options.mimeType;
                    "object" === (void 0 === t ? "undefined" : (0, a.default)(t)) ? (e = t.source.toString(), t.mimeType && (i = t.mimeType)) : e = t.toString(), e.match(/^\/\//) && (e = window.location.protocol + e);
                    var n = E.default.extend({}, this.options, {src: e, mimeType: i}), r = this.findPlaybackPlugin(e, i),
                        o = new r(n, this._i18n);
                    n = E.default.extend({}, n, {playback: o});
                    var s = new b.default(n, this._i18n), l = E.default.Deferred();
                    return l.promise(s), this.addContainerPlugins(s), this.listenToOnce(s, m.default.CONTAINER_READY, function () {
                        return l.resolve(s)
                    }), s
                }, e.prototype.addContainerPlugins = function (t) {
                    this.loader.containerPlugins.forEach(function (e) {
                        t.addPlugin(new e(t))
                    })
                }, e
            }(g.default);
        e.default = T, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(4), f = n(h),
            p = i(21), g = n(p);
        i(143);
        var y = i(6), m = n(y), v = function (t) {
            function e(i, n) {
                (0, a.default)(this, e);
                var r = (0, s.default)(this, t.call(this, i));
                return r._i18n = n, r.currentTime = 0, r.volume = 100, r.playback = i.playback, r.settings = m.default.extend({}, r.playback.settings), r.isReady = !1, r.mediaControlDisabled = !1, r.plugins = [r.playback], r.bindEvents(), r
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "name", get: function () {
                    return "Container"
                }
            }, {
                key: "attributes", get: function () {
                    return {class: "container", "data-container": ""}
                }
            }, {
                key: "events", get: function () {
                    return {
                        click: "clicked",
                        dblclick: "dblClicked",
                        doubleTap: "dblClicked",
                        contextmenu: "onContextMenu",
                        mouseenter: "mouseEnter",
                        mouseleave: "mouseLeave"
                    }
                }
            }, {
                key: "ended", get: function () {
                    return this.playback.ended
                }
            }, {
                key: "buffering", get: function () {
                    return this.playback.buffering
                }
            }, {
                key: "i18n", get: function () {
                    return this._i18n
                }
            }, {
                key: "hasClosedCaptionsTracks", get: function () {
                    return this.playback.hasClosedCaptionsTracks
                }
            }, {
                key: "closedCaptionsTracks", get: function () {
                    return this.playback.closedCaptionsTracks
                }
            }, {
                key: "closedCaptionsTrackId", get: function () {
                    return this.playback.closedCaptionsTrackId
                }, set: function (t) {
                    this.playback.closedCaptionsTrackId = t
                }
            }]), e.prototype.bindEvents = function () {
                this.listenTo(this.playback, f.default.PLAYBACK_PROGRESS, this.progress), this.listenTo(this.playback, f.default.PLAYBACK_TIMEUPDATE, this.timeUpdated), this.listenTo(this.playback, f.default.PLAYBACK_READY, this.ready), this.listenTo(this.playback, f.default.PLAYBACK_BUFFERING, this.onBuffering), this.listenTo(this.playback, f.default.PLAYBACK_BUFFERFULL, this.bufferfull), this.listenTo(this.playback, f.default.PLAYBACK_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.playback, f.default.PLAYBACK_LOADEDMETADATA, this.loadedMetadata), this.listenTo(this.playback, f.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.playback, f.default.PLAYBACK_BITRATE, this.updateBitrate), this.listenTo(this.playback, f.default.PLAYBACK_PLAYBACKSTATE, this.playbackStateChanged), this.listenTo(this.playback, f.default.PLAYBACK_DVR, this.playbackDvrStateChanged), this.listenTo(this.playback, f.default.PLAYBACK_MEDIACONTROL_DISABLE, this.disableMediaControl), this.listenTo(this.playback, f.default.PLAYBACK_MEDIACONTROL_ENABLE, this.enableMediaControl), this.listenTo(this.playback, f.default.PLAYBACK_SEEKED, this.onSeeked), this.listenTo(this.playback, f.default.PLAYBACK_ENDED, this.onEnded), this.listenTo(this.playback, f.default.PLAYBACK_PLAY, this.playing), this.listenTo(this.playback, f.default.PLAYBACK_PAUSE, this.paused), this.listenTo(this.playback, f.default.PLAYBACK_STOP, this.stopped), this.listenTo(this.playback, f.default.PLAYBACK_ERROR, this.error), this.listenTo(this.playback, f.default.PLAYBACK_SUBTITLE_AVAILABLE, this.subtitleAvailable), this.listenTo(this.playback, f.default.PLAYBACK_SUBTITLE_CHANGED, this.subtitleChanged)
            }, e.prototype.subtitleAvailable = function () {
                this.trigger(f.default.CONTAINER_SUBTITLE_AVAILABLE)
            }, e.prototype.subtitleChanged = function (t) {
                this.trigger(f.default.CONTAINER_SUBTITLE_CHANGED, t)
            }, e.prototype.playbackStateChanged = function (t) {
                this.trigger(f.default.CONTAINER_PLAYBACKSTATE, t)
            }, e.prototype.playbackDvrStateChanged = function (t) {
                this.settings = this.playback.settings, this.dvrInUse = t, this.trigger(f.default.CONTAINER_PLAYBACKDVRSTATECHANGED, t)
            }, e.prototype.updateBitrate = function (t) {
                this.trigger(f.default.CONTAINER_BITRATE, t)
            }, e.prototype.statsReport = function (t) {
                this.trigger(f.default.CONTAINER_STATS_REPORT, t)
            }, e.prototype.getPlaybackType = function () {
                return this.playback.getPlaybackType()
            }, e.prototype.isDvrEnabled = function () {
                return !!this.playback.dvrEnabled
            }, e.prototype.isDvrInUse = function () {
                return !!this.dvrInUse
            }, e.prototype.destroy = function () {
                this.trigger(f.default.CONTAINER_DESTROYED, this, this.name), this.stopListening(), this.plugins.forEach(function (t) {
                    return t.destroy()
                }), this.$el.remove()
            }, e.prototype.setStyle = function (t) {
                this.$el.css(t)
            }, e.prototype.animate = function (t, e) {
                return this.$el.animate(t, e).promise()
            }, e.prototype.ready = function () {
                this.isReady = !0, this.trigger(f.default.CONTAINER_READY, this.name)
            }, e.prototype.isPlaying = function () {
                return this.playback.isPlaying()
            }, e.prototype.getStartTimeOffset = function () {
                return this.playback.getStartTimeOffset()
            }, e.prototype.getCurrentTime = function () {
                return this.currentTime
            }, e.prototype.getDuration = function () {
                return this.playback.getDuration()
            }, e.prototype.error = function (t) {
                this.isReady || this.ready(), this.trigger(f.default.CONTAINER_ERROR, {
                    error: t,
                    container: this
                }, this.name)
            }, e.prototype.loadedMetadata = function (t) {
                this.trigger(f.default.CONTAINER_LOADEDMETADATA, t)
            }, e.prototype.timeUpdated = function (t) {
                this.currentTime = t.current, this.trigger(f.default.CONTAINER_TIMEUPDATE, t, this.name)
            }, e.prototype.progress = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                this.trigger.apply(this, [f.default.CONTAINER_PROGRESS].concat(e, [this.name]))
            }, e.prototype.playing = function () {
                this.trigger(f.default.CONTAINER_PLAY, this.name)
            }, e.prototype.paused = function () {
                this.trigger(f.default.CONTAINER_PAUSE, this.name)
            }, e.prototype.play = function () {
                this.playback.play()
            }, e.prototype.stop = function () {
                this.playback.stop(), this.currentTime = 0
            }, e.prototype.pause = function () {
                this.playback.pause()
            }, e.prototype.onEnded = function () {
                this.trigger(f.default.CONTAINER_ENDED, this, this.name), this.currentTime = 0
            }, e.prototype.stopped = function () {
                this.trigger(f.default.CONTAINER_STOP)
            }, e.prototype.clicked = function () {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(f.default.CONTAINER_CLICK, this, this.name)
            }, e.prototype.dblClicked = function () {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(f.default.CONTAINER_DBLCLICK, this, this.name)
            }, e.prototype.onContextMenu = function (t) {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(f.default.CONTAINER_CONTEXTMENU, t, this.name)
            }, e.prototype.seek = function (t) {
                this.trigger(f.default.CONTAINER_SEEK, t, this.name), this.playback.seek(t)
            }, e.prototype.onSeeked = function () {
                this.trigger(f.default.CONTAINER_SEEKED, this.name)
            }, e.prototype.seekPercentage = function (t) {
                var e = this.getDuration();
                if (t >= 0 && t <= 100) {
                    var i = e * (t / 100);
                    this.seek(i)
                }
            }, e.prototype.setVolume = function (t) {
                this.volume = parseInt(t, 10), this.trigger(f.default.CONTAINER_VOLUME, t, this.name), this.playback.volume(t)
            }, e.prototype.fullscreen = function () {
                this.trigger(f.default.CONTAINER_FULLSCREEN, this.name)
            }, e.prototype.onBuffering = function () {
                this.trigger(f.default.CONTAINER_STATE_BUFFERING, this.name)
            }, e.prototype.bufferfull = function () {
                this.trigger(f.default.CONTAINER_STATE_BUFFERFULL, this.name)
            }, e.prototype.addPlugin = function (t) {
                this.plugins.push(t)
            }, e.prototype.hasPlugin = function (t) {
                return !!this.getPlugin(t)
            }, e.prototype.getPlugin = function (t) {
                return this.plugins.filter(function (e) {
                    return e.name === t
                })[0]
            }, e.prototype.mouseEnter = function () {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(f.default.CONTAINER_MOUSE_ENTER)
            }, e.prototype.mouseLeave = function () {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(f.default.CONTAINER_MOUSE_LEAVE)
            }, e.prototype.settingsUpdate = function () {
                this.settings = this.playback.settings, this.trigger(f.default.CONTAINER_SETTINGSUPDATE)
            }, e.prototype.highDefinitionUpdate = function (t) {
                this.trigger(f.default.CONTAINER_HIGHDEFINITIONUPDATE, t)
            }, e.prototype.isHighDefinitionInUse = function () {
                return this.playback.isHighDefinitionInUse()
            }, e.prototype.disableMediaControl = function () {
                this.mediaControlDisabled || (this.mediaControlDisabled = !0, this.trigger(f.default.CONTAINER_MEDIACONTROL_DISABLE))
            }, e.prototype.enableMediaControl = function () {
                this.mediaControlDisabled && (this.mediaControlDisabled = !1, this.trigger(f.default.CONTAINER_MEDIACONTROL_ENABLE))
            }, e.prototype.updateStyle = function () {
                !this.options.chromeless || this.options.allowUserInteraction ? this.$el.removeClass("chromeless") : this.$el.addClass("chromeless")
            }, e.prototype.configure = function (t) {
                this._options = m.default.extend(this._options, t), this.updateStyle(), this.trigger(f.default.CONTAINER_OPTIONS_CHANGE)
            }, e.prototype.render = function () {
                return this.$el.append(this.playback.render().el), this.updateStyle(), this
            }, e
        }(g.default);
        e.default = v, t.exports = e.default
    }, function (t, e, i) {
        var n = i(144);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, ".container[data-container]{position:absolute;background-color:#000;height:100%;width:100%}.container[data-container] .chromeless{cursor:default}[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled{cursor:pointer}", ""])
    }, function (t, e) {
        t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var i = e.protocol + "//" + e.host, n = i + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
                    return e
                }).replace(/^'(.*)'$/, function (t, e) {
                    return e
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
                var a;
                return a = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? i + r : n + r.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")"
            })
        }
    }, function (t, e, i) {
        "use strict";
        (function (n) {
            function r(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var a = i(147), o = r(a), s = i(0), l = r(s), u = i(1), c = r(u), d = i(3), h = r(d), f = i(2), p = r(f),
                g = i(5), y = i(56), m = i(4), v = r(m), b = i(21), _ = r(b), E = i(13), T = r(E), A = i(24), S = r(A),
                L = i(8), R = r(L), k = i(9), C = r(k), w = i(6), I = r(w);
            i(149);
            var D = i(151), O = r(D), P = i(58), x = r(P), N = i(77), M = r(N), F = i(152), B = r(F), U = i(153),
                G = r(U), K = i(154), V = r(K), j = i(155), Y = r(j), H = i(156), $ = r(H), z = i(157), W = r(z),
                q = function (t) {
                    function e(i) {
                        (0, l.default)(this, e);
                        var n = (0, c.default)(this, t.call(this, i));
                        return n.persistConfig = n.options.persistConfig, n.container = i.container, n.currentPositionValue = null, n.currentDurationValue = null, n.keepVisible = !1, n.fullScreenOnVideoTagSupported = null, n.setInitialVolume(), n.addEventListeners(), n.settings = {
                            left: ["play", "stop", "pause"],
                            right: ["volume"],
                            default: ["position", "seekbar", "duration"]
                        }, n.container ? I.default.isEmptyObject(n.container.settings) || (n.settings = I.default.extend({}, n.container.settings)) : n.settings = {}, n.userDisabled = !1, (n.container && n.container.mediaControlDisabled || n.options.chromeless) && n.disable(), n.stopDragHandler = function (t) {
                            return n.stopDrag(t)
                        }, n.updateDragHandler = function (t) {
                            return n.updateDrag(t)
                        }, (0, I.default)(document).bind("mouseup", n.stopDragHandler), (0, I.default)(document).bind("mousemove", n.updateDragHandler), n
                    }

                    return (0, p.default)(e, t), (0, h.default)(e, [{
                        key: "name", get: function () {
                            return "MediaControl"
                        }
                    }, {
                        key: "disabled", get: function () {
                            return this.userDisabled || this.container && this.container.getPlaybackType() === C.default.NO_OP
                        }
                    }, {
                        key: "attributes", get: function () {
                            return {class: "media-control", "data-media-control": ""}
                        }
                    }, {
                        key: "events", get: function () {
                            return {
                                "click [data-play]": "play",
                                "click [data-pause]": "pause",
                                "click [data-playpause]": "togglePlayPause",
                                "click [data-stop]": "stop",
                                "click [data-playstop]": "togglePlayStop",
                                "click [data-fullscreen]": "toggleFullscreen",
                                "click .bar-container[data-seekbar]": "seek",
                                "click .bar-container[data-volume]": "onVolumeClick",
                                "click .drawer-icon[data-volume]": "toggleMute",
                                "mouseenter .drawer-container[data-volume]": "showVolumeBar",
                                "mouseleave .drawer-container[data-volume]": "hideVolumeBar",
                                "mousedown .bar-container[data-volume]": "startVolumeDrag",
                                "mousemove .bar-container[data-volume]": "mousemoveOnVolumeBar",
                                "mousedown .bar-scrubber[data-seekbar]": "startSeekDrag",
                                "mousemove .bar-container[data-seekbar]": "mousemoveOnSeekBar",
                                "mouseleave .bar-container[data-seekbar]": "mouseleaveOnSeekBar",
                                "mouseenter .media-control-layer[data-controls]": "setUserKeepVisible",
                                "mouseleave .media-control-layer[data-controls]": "resetUserKeepVisible"
                            }
                        }
                    }, {
                        key: "template", get: function () {
                            return (0, R.default)(O.default)
                        }
                    }, {
                        key: "volume", get: function () {
                            return this.container && this.container.isReady ? this.container.volume : this.intendedVolume
                        }
                    }, {
                        key: "muted", get: function () {
                            return 0 === this.volume
                        }
                    }]), e.prototype.addEventListeners = function () {
                        this.container && (S.default.on(this.options.playerId + ":" + v.default.PLAYER_RESIZE, this.playerResize, this), this.listenTo(this.container, v.default.CONTAINER_PLAY, this.changeTogglePlay), this.listenTo(this.container, v.default.CONTAINER_PAUSE, this.changeTogglePlay), this.listenTo(this.container, v.default.CONTAINER_STOP, this.changeTogglePlay), this.listenTo(this.container, v.default.CONTAINER_DBLCLICK, this.toggleFullscreen), this.listenTo(this.container, v.default.CONTAINER_TIMEUPDATE, this.onTimeUpdate), this.listenTo(this.container, v.default.CONTAINER_PROGRESS, this.updateProgressBar), this.listenTo(this.container, v.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.container, v.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.settingsUpdate), this.listenTo(this.container, v.default.CONTAINER_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.container, v.default.CONTAINER_MEDIACONTROL_DISABLE, this.disable), this.listenTo(this.container, v.default.CONTAINER_MEDIACONTROL_ENABLE, this.enable), this.listenTo(this.container, v.default.CONTAINER_ENDED, this.ended), this.listenTo(this.container, v.default.CONTAINER_VOLUME, this.onVolumeChanged), this.listenTo(this.container, v.default.CONTAINER_OPTIONS_CHANGE, this.setInitialVolume), "video" === this.container.playback.el.nodeName.toLowerCase() && this.listenToOnce(this.container, v.default.CONTAINER_LOADEDMETADATA, this.onLoadedMetadataOnVideoTag))
                    }, e.prototype.disable = function () {
                        this.userDisabled = !0, this.hide(), this.$el.hide()
                    }, e.prototype.enable = function () {
                        this.options.chromeless || (this.userDisabled = !1, this.show())
                    }, e.prototype.play = function () {
                        this.container.play()
                    }, e.prototype.pause = function () {
                        this.container.pause()
                    }, e.prototype.stop = function () {
                        this.container.stop()
                    }, e.prototype.setInitialVolume = function () {
                        var t = this.persistConfig ? g.Config.restore("volume") : 100,
                            e = this.container && this.container.options || this.options;
                        this.setVolume(e.mute ? 0 : t, !0)
                    }, e.prototype.onVolumeChanged = function () {
                        this.updateVolumeUI()
                    }, e.prototype.onLoadedMetadataOnVideoTag = function () {
                        var t = this.container.playback.el;
                        !g.Fullscreen.fullscreenEnabled() && t.webkitSupportsFullscreen && (this.fullScreenOnVideoTagSupported = !0, this.settingsUpdate())
                    }, e.prototype.updateVolumeUI = function () {
                        if (this.rendered) {
                            this.$volumeBarContainer.find(".bar-fill-2").css({});
                            var t = this.$volumeBarContainer.width(), e = this.$volumeBarBackground.width(),
                                i = (t - e) / 2, n = e * this.volume / 100 + i;
                            this.$volumeBarFill.css({width: this.volume + "%"}), this.$volumeBarScrubber.css({left: n}), this.$volumeBarContainer.find(".segmented-bar-element").removeClass("fill");
                            var r = Math.ceil(this.volume / 10);
                            this.$volumeBarContainer.find(".segmented-bar-element").slice(0, r).addClass("fill"), this.$volumeIcon.html(""), this.$volumeIcon.removeClass("muted"), this.muted ? (this.$volumeIcon.append(V.default), this.$volumeIcon.addClass("muted")) : this.$volumeIcon.append(G.default), this.applyButtonStyle(this.$volumeIcon)
                        }
                    }, e.prototype.changeTogglePlay = function () {
                        this.$playPauseToggle.html(""), this.$playStopToggle.html(""), this.container && this.container.isPlaying() ? (this.$playPauseToggle.append(M.default), this.$playStopToggle.append(B.default), this.trigger(v.default.MEDIACONTROL_PLAYING)) : (this.$playPauseToggle.append(x.default), this.$playStopToggle.append(x.default), this.trigger(v.default.MEDIACONTROL_NOTPLAYING), T.default.isMobile && this.show()), this.applyButtonStyle(this.$playPauseToggle), this.applyButtonStyle(this.$playStopToggle)
                    }, e.prototype.mousemoveOnSeekBar = function (t) {
                        if (this.settings.seekEnabled) {
                            var e = t.pageX - this.$seekBarContainer.offset().left - this.$seekBarHover.width() / 2;
                            this.$seekBarHover.css({left: e})
                        }
                        this.trigger(v.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, t)
                    }, e.prototype.mouseleaveOnSeekBar = function (t) {
                        this.trigger(v.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, t)
                    }, e.prototype.onVolumeClick = function (t) {
                        this.setVolume(this.getVolumeFromUIEvent(t))
                    }, e.prototype.mousemoveOnVolumeBar = function (t) {
                        this.draggingVolumeBar && this.setVolume(this.getVolumeFromUIEvent(t))
                    }, e.prototype.playerResize = function (t) {
                        this.$fullscreenToggle.html(""), g.Fullscreen.isFullscreen() ? this.$fullscreenToggle.append($.default) : this.$fullscreenToggle.append(Y.default), this.applyButtonStyle(this.$fullscreenToggle), this.$el.removeClass("w320"), (t.width <= 320 || this.options.hideVolumeBar) && this.$el.addClass("w320")
                    }, e.prototype.togglePlayPause = function () {
                        return this.container.isPlaying() ? this.container.pause() : this.container.play(), !1
                    }, e.prototype.togglePlayStop = function () {
                        this.container.isPlaying() ? this.container.stop() : this.container.play()
                    }, e.prototype.startSeekDrag = function (t) {
                        this.settings.seekEnabled && (this.draggingSeekBar = !0, this.$el.addClass("dragging"), this.$seekBarLoaded.addClass("media-control-notransition"), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition"), t && t.preventDefault())
                    }, e.prototype.startVolumeDrag = function (t) {
                        this.draggingVolumeBar = !0, this.$el.addClass("dragging"), t && t.preventDefault()
                    }, e.prototype.stopDrag = function (t) {
                        this.draggingSeekBar && this.seek(t), this.$el.removeClass("dragging"), this.$seekBarLoaded.removeClass("media-control-notransition"), this.$seekBarPosition.removeClass("media-control-notransition"), this.$seekBarScrubber.removeClass("media-control-notransition dragging"), this.draggingSeekBar = !1, this.draggingVolumeBar = !1
                    }, e.prototype.updateDrag = function (t) {
                        if (this.draggingSeekBar) {
                            t.preventDefault();
                            var e = t.pageX - this.$seekBarContainer.offset().left,
                                i = e / this.$seekBarContainer.width() * 100;
                            i = Math.min(100, Math.max(i, 0)), this.setSeekPercentage(i)
                        } else this.draggingVolumeBar && (t.preventDefault(), this.setVolume(this.getVolumeFromUIEvent(t)))
                    }, e.prototype.getVolumeFromUIEvent = function (t) {
                        return (t.pageX - this.$volumeBarContainer.offset().left) / this.$volumeBarContainer.width() * 100
                    }, e.prototype.toggleMute = function () {
                        this.setVolume(this.muted ? 100 : 0)
                    }, e.prototype.setVolume = function (t) {
                        var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        t = Math.min(100, Math.max(t, 0)), this.intendedVolume = t, this.persistConfig && !i && g.Config.persist("volume", t);
                        var n = function () {
                            e.container.isReady ? e.container.setVolume(t) : e.listenToOnce(e.container, v.default.CONTAINER_READY, function () {
                                e.container.setVolume(t)
                            })
                        };
                        this.container ? n() : this.listenToOnce(this, v.default.MEDIACONTROL_CONTAINERCHANGED, function () {
                            n()
                        })
                    }, e.prototype.toggleFullscreen = function () {
                        this.trigger(v.default.MEDIACONTROL_FULLSCREEN, this.name), this.container.fullscreen(), this.resetUserKeepVisible()
                    }, e.prototype.setContainer = function (t) {
                        this.container && (this.stopListening(this.container), this.fullScreenOnVideoTagSupported = null), S.default.off(this.options.playerId + ":" + v.default.PLAYER_RESIZE, this.playerResize, this), this.container = t, this.setVolume(this.intendedVolume, !0), this.changeTogglePlay(), this.addEventListeners(), this.settingsUpdate(), this.container.trigger(v.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.container.isDvrInUse()), this.container.mediaControlDisabled && this.disable(), this.trigger(v.default.MEDIACONTROL_CONTAINERCHANGED)
                    }, e.prototype.showVolumeBar = function () {
                        this.hideVolumeId && clearTimeout(this.hideVolumeId), this.$volumeBarContainer.removeClass("volume-bar-hide")
                    }, e.prototype.hideVolumeBar = function () {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400;
                        this.$volumeBarContainer && (this.draggingVolumeBar ? this.hideVolumeId = setTimeout(function () {
                            return t.hideVolumeBar()
                        }, e) : (this.hideVolumeId && clearTimeout(this.hideVolumeId), this.hideVolumeId = setTimeout(function () {
                            return t.$volumeBarContainer.addClass("volume-bar-hide")
                        }, e)))
                    }, e.prototype.ended = function () {
                        this.changeTogglePlay()
                    }, e.prototype.updateProgressBar = function (t) {
                        var e = t.start / t.total * 100, i = t.current / t.total * 100;
                        this.$seekBarLoaded.css({left: e + "%", width: i - e + "%"})
                    }, e.prototype.onTimeUpdate = function (t) {
                        if (!this.draggingSeekBar) {
                            var e = t.current < 0 ? t.total : t.current;
                            this.currentPositionValue = e, this.currentDurationValue = t.total, this.renderSeekBar()
                        }
                    }, e.prototype.renderSeekBar = function () {
                        if (null !== this.currentPositionValue && null !== this.currentDurationValue) {
                            this.currentSeekBarPercentage = 100, (this.container.getPlaybackType() !== C.default.LIVE || this.container.isDvrInUse()) && (this.currentSeekBarPercentage = this.currentPositionValue / this.currentDurationValue * 100), this.setSeekPercentage(this.currentSeekBarPercentage);
                            var t = (0, g.formatTime)(this.currentPositionValue),
                                e = (0, g.formatTime)(this.currentDurationValue);
                            t !== this.displayedPosition && (this.$position.text(t), this.displayedPosition = t), e !== this.displayedDuration && (this.$duration.text(e), this.displayedDuration = e)
                        }
                    }, e.prototype.seek = function (t) {
                        if (this.settings.seekEnabled) {
                            var e = t.pageX - this.$seekBarContainer.offset().left,
                                i = e / this.$seekBarContainer.width() * 100;
                            return i = Math.min(100, Math.max(i, 0)), this.container.seekPercentage(i), this.setSeekPercentage(i), !1
                        }
                    }, e.prototype.setKeepVisible = function () {
                        this.keepVisible = !0
                    }, e.prototype.resetKeepVisible = function () {
                        this.keepVisible = !1
                    }, e.prototype.setUserKeepVisible = function () {
                        this.userKeepVisible = !0
                    }, e.prototype.resetUserKeepVisible = function () {
                        this.userKeepVisible = !1
                    }, e.prototype.isVisible = function () {
                        return !this.$el.hasClass("media-control-hide")
                    }, e.prototype.show = function (t) {
                        var e = this;
                        if (!this.disabled) {
                            (!t || t.clientX !== this.lastMouseX && t.clientY !== this.lastMouseY || navigator.userAgent.match(/firefox/i)) && (clearTimeout(this.hideId), this.$el.show(), this.trigger(v.default.MEDIACONTROL_SHOW, this.name), this.$el.removeClass("media-control-hide"), this.hideId = setTimeout(function () {
                                return e.hide()
                            }, 2e3), t && (this.lastMouseX = t.clientX, this.lastMouseY = t.clientY))
                        }
                    }, e.prototype.hide = function () {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (this.isVisible()) {
                            var i = e || 2e3;
                            clearTimeout(this.hideId), (this.disabled || !1 !== this.options.hideMediaControl) && (!this.disabled && (e || this.userKeepVisible || this.keepVisible || this.draggingSeekBar || this.draggingVolumeBar) ? this.hideId = setTimeout(function () {
                                return t.hide()
                            }, i) : (this.trigger(v.default.MEDIACONTROL_HIDE, this.name), this.$el.addClass("media-control-hide"), this.hideVolumeBar(0)))
                        }
                    }, e.prototype.settingsUpdate = function () {
                        var t = this.getSettings();
                        !t || this.fullScreenOnVideoTagSupported || g.Fullscreen.fullscreenEnabled() || (t.default && (0, g.removeArrayItem)(t.default, "fullscreen"), t.left && (0, g.removeArrayItem)(t.left, "fullscreen"), t.right && (0, g.removeArrayItem)(t.right, "fullscreen")), (0, o.default)(this.settings) !== (0, o.default)(t) && (this.settings = t, this.render())
                    }, e.prototype.getSettings = function () {
                        return I.default.extend(!0, {}, this.container.settings)
                    }, e.prototype.highDefinitionUpdate = function (t) {
                        this.isHD = t;
                        var e = t ? "addClass" : "removeClass";
                        this.$hdIndicator[e]("enabled")
                    }, e.prototype.createCachedElements = function () {
                        var t = this.$el.find(".media-control-layer");
                        this.$duration = t.find(".media-control-indicator[data-duration]"), this.$fullscreenToggle = t.find("button.media-control-button[data-fullscreen]"), this.$playPauseToggle = t.find("button.media-control-button[data-playpause]"), this.$playStopToggle = t.find("button.media-control-button[data-playstop]"), this.$position = t.find(".media-control-indicator[data-position]"), this.$seekBarContainer = t.find(".bar-container[data-seekbar]"), this.$seekBarHover = t.find(".bar-hover[data-seekbar]"), this.$seekBarLoaded = t.find(".bar-fill-1[data-seekbar]"), this.$seekBarPosition = t.find(".bar-fill-2[data-seekbar]"), this.$seekBarScrubber = t.find(".bar-scrubber[data-seekbar]"), this.$volumeBarContainer = t.find(".bar-container[data-volume]"), this.$volumeContainer = t.find(".drawer-container[data-volume]"), this.$volumeIcon = t.find(".drawer-icon[data-volume]"), this.$volumeBarBackground = this.$el.find(".bar-background[data-volume]"), this.$volumeBarFill = this.$el.find(".bar-fill-1[data-volume]"), this.$volumeBarScrubber = this.$el.find(".bar-scrubber[data-volume]"), this.$hdIndicator = this.$el.find("button.media-control-button[data-hd-indicator]"), this.resetIndicators(), this.initializeIcons()
                    }, e.prototype.resetIndicators = function () {
                        this.displayedPosition = this.$position.text(), this.displayedDuration = this.$duration.text()
                    }, e.prototype.initializeIcons = function () {
                        var t = this.$el.find(".media-control-layer");
                        t.find("button.media-control-button[data-play]").append(x.default), t.find("button.media-control-button[data-pause]").append(M.default), t.find("button.media-control-button[data-stop]").append(B.default), this.$playPauseToggle.append(x.default), this.$playStopToggle.append(x.default), this.$volumeIcon.append(G.default), this.$fullscreenToggle.append(Y.default), this.$hdIndicator.append(W.default)
                    }, e.prototype.setSeekPercentage = function (t) {
                        t = Math.max(Math.min(t, 100), 0), this.displayedSeekBarPercentage !== t && (this.displayedSeekBarPercentage = t, this.$seekBarPosition.removeClass("media-control-notransition"), this.$seekBarScrubber.removeClass("media-control-notransition"), this.$seekBarPosition.css({width: t + "%"}), this.$seekBarScrubber.css({left: t + "%"}))
                    }, e.prototype.seekRelative = function (t) {
                        if (this.settings.seekEnabled) {
                            var e = this.container.getCurrentTime(), i = this.container.getDuration(),
                                n = Math.min(Math.max(e + t, 0), i);
                            n = Math.min(100 * n / i, 100), this.container.seekPercentage(n)
                        }
                    }, e.prototype.bindKeyAndShow = function (t, e) {
                        var i = this;
                        this.kibo.down(t, function () {
                            return i.show(), e()
                        })
                    }, e.prototype.bindKeyEvents = function () {
                        var t = this;
                        this.unbindKeyEvents(), this.kibo = new y.Kibo(this.options.focusElement), this.bindKeyAndShow("space", function () {
                            return t.togglePlayPause()
                        }), this.bindKeyAndShow("left", function () {
                            return t.seekRelative(-5)
                        }), this.bindKeyAndShow("right", function () {
                            return t.seekRelative(5)
                        }), this.bindKeyAndShow("shift left", function () {
                            return t.seekRelative(-10)
                        }), this.bindKeyAndShow("shift right", function () {
                            return t.seekRelative(10)
                        }), this.bindKeyAndShow("shift ctrl left", function () {
                            return t.seekRelative(-15)
                        }), this.bindKeyAndShow("shift ctrl right", function () {
                            return t.seekRelative(15)
                        }), ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].forEach(function (e) {
                            t.bindKeyAndShow(e, function () {
                                return t.settings.seekEnabled && t.container.seekPercentage(10 * e)
                            })
                        })
                    }, e.prototype.unbindKeyEvents = function () {
                        this.kibo && (this.kibo.off("space"), this.kibo.off("left"), this.kibo.off("right"), this.kibo.off("shift left"), this.kibo.off("shift right"), this.kibo.off("shift ctrl left"), this.kibo.off("shift ctrl right"), this.kibo.off(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]))
                    }, e.prototype.parseColors = function () {
                        if (this.options.mediacontrol) {
                            this.buttonsColor = this.options.mediacontrol.buttons;
                            var t = this.options.mediacontrol.seekbar;
                            this.$el.find(".bar-fill-2[data-seekbar]").css("background-color", t), this.$el.find(".media-control-icon svg path").css("fill", this.buttonsColor), this.$el.find(".segmented-bar-element[data-volume]").css("boxShadow", "inset 2px 0 0 " + this.buttonsColor)
                        }
                    }, e.prototype.applyButtonStyle = function (t) {
                        this.buttonsColor && t && (0, I.default)(t).find("svg path").css("fill", this.buttonsColor)
                    }, e.prototype.destroy = function () {
                        this.remove(), (0, I.default)(document).unbind("mouseup", this.stopDragHandler), (0, I.default)(document).unbind("mousemove", this.updateDragHandler), this.unbindKeyEvents()
                    }, e.prototype.render = function () {
                        var t = this;
                        this.$el.html(this.template({settings: this.settings})), this.createCachedElements(), this.$playPauseToggle.addClass("paused"), this.$playStopToggle.addClass("stopped"), this.changeTogglePlay(), this.hideId = setTimeout(function () {
                            return t.hide()
                        }, 1e3), this.disabled && this.hide(), T.default.isSafari && T.default.isMobile && (T.default.version < 10 ? this.$volumeContainer.css("display", "none") : this.$volumeBarContainer.css("display", "none")), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition");
                        var e = 0;
                        return this.displayedSeekBarPercentage && (e = this.displayedSeekBarPercentage), this.displayedSeekBarPercentage = null, this.setSeekPercentage(e), n.nextTick(function () {
                            t.settings.seekEnabled || t.$seekBarContainer.addClass("seek-disabled"), T.default.isMobile || t.options.disableKeyboardShortcuts || t.bindKeyEvents(), t.playerResize({
                                width: t.options.width,
                                height: t.options.height
                            }), t.hideVolumeBar(0)
                        }), this.parseColors(), this.highDefinitionUpdate(this.isHD), this.rendered = !0, this.updateVolumeUI(), this.trigger(v.default.MEDIACONTROL_RENDERED), this
                    }, e
                }(_.default);
            e.default = q, q.extend = function (t) {
                return (0, g.extend)(q, t)
            }, t.exports = e.default
        }).call(e, i(57))
    }, function (t, e, i) {
        t.exports = {default: i(148), __esModule: !0}
    }, function (t, e, i) {
        var n = i(11), r = n.JSON || (n.JSON = {stringify: JSON.stringify});
        t.exports = function (t) {
            return r.stringify.apply(r, arguments)
        }
    }, function (t, e, i) {
        var n = i(150);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, ".media-control-notransition{transition:none!important}.media-control[data-media-control]{position:absolute;width:100%;height:100%;z-index:9999;pointer-events:none}.media-control[data-media-control].dragging{pointer-events:auto;cursor:-webkit-grabbing!important;cursor:grabbing!important;cursor:url(" + i(76) + "),move}.media-control[data-media-control].dragging *{cursor:-webkit-grabbing!important;cursor:grabbing!important;cursor:url(" + i(76) + '),move}.media-control[data-media-control] .media-control-background[data-background]{position:absolute;height:40%;width:100%;bottom:0;background:linear-gradient(transparent,rgba(0,0,0,.9));transition:opacity .6s ease-out}.media-control[data-media-control] .media-control-icon{line-height:0;letter-spacing:0;speak:none;color:#fff;opacity:.5;vertical-align:middle;text-align:left;transition:all .1s ease}.media-control[data-media-control] .media-control-icon:hover{color:#fff;opacity:.75;text-shadow:hsla(0,0%,100%,.8) 0 0 5px}.media-control[data-media-control].media-control-hide .media-control-background[data-background]{opacity:0}.media-control[data-media-control].media-control-hide .media-control-layer[data-controls]{bottom:-50px}.media-control[data-media-control].media-control-hide .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar]{opacity:0}.media-control[data-media-control] .media-control-layer[data-controls]{position:absolute;bottom:7px;width:100%;height:32px;font-size:0;vertical-align:middle;pointer-events:auto;transition:bottom .4s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .media-control-left-panel[data-media-control]{position:absolute;top:0;left:4px;height:100%}.media-control[data-media-control] .media-control-layer[data-controls] .media-control-center-panel[data-media-control]{height:100%;text-align:center;line-height:32px}.media-control[data-media-control] .media-control-layer[data-controls] .media-control-right-panel[data-media-control]{position:absolute;top:0;right:4px;height:100%}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button{background-color:transparent;border:0;margin:0 6px;padding:0;cursor:pointer;display:inline-block;width:32px;height:100%}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg{width:100%;height:22px}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path{fill:#fff}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button:focus{outline:none}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-pause],.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-play],.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-stop]{float:left;height:100%}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-fullscreen]{float:right;background-color:transparent;border:0;height:100%}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator]{background-color:transparent;border:0;cursor:default;display:none;float:right;height:100%}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled{display:block;opacity:1}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled:hover{opacity:1;text-shadow:none}.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playpause],.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playstop]{float:left}.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration],.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position]{display:inline-block;font-size:10px;color:#fff;cursor:default;line-height:32px;position:relative}.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position]{margin:0 6px 0 7px}.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]{color:hsla(0,0%,100%,.5);margin-right:6px}.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]:before{content:"|";margin-right:7px}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]{position:absolute;top:-20px;left:0;display:inline-block;vertical-align:middle;width:100%;height:25px;cursor:pointer}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar]{width:100%;height:1px;position:relative;top:12px;background-color:#666}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-1[data-seekbar]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#c2c2c2;transition:all .1s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#005aff;transition:all .1s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-hover[data-seekbar]{opacity:0;position:absolute;top:-3px;width:5px;height:7px;background-color:hsla(0,0%,100%,.5);transition:opacity .1s ease}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]:hover .bar-background[data-seekbar] .bar-hover[data-seekbar]{opacity:1}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled{cursor:default}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled:hover .bar-background[data-seekbar] .bar-hover[data-seekbar]{opacity:0}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar]{position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:2px;left:0;width:20px;height:20px;opacity:1;transition:all .1s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] .bar-scrubber-icon[data-seekbar]{position:absolute;left:6px;top:6px;width:8px;height:8px;border-radius:10px;box-shadow:0 0 0 6px hsla(0,0%,100%,.2);background-color:#fff}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume]{float:right;display:inline-block;height:32px;cursor:pointer;margin:0 6px;box-sizing:border-box}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume]{float:left;bottom:0}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]{background-color:transparent;border:0;box-sizing:content-box;width:32px;height:32px;opacity:.5}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]:hover{opacity:.75}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg{height:24px;position:relative;top:3px}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg path{fill:#fff}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume].muted svg{margin-left:2px}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume]{float:left;position:relative;overflow:hidden;top:6px;width:42px;height:18px;padding:3px 0;transition:width .2s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume]{height:1px;position:relative;top:7px;margin:0 3px;background-color:#666}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-1[data-volume]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#c2c2c2;transition:all .1s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-2[data-volume]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#005aff;transition:all .1s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-hover[data-volume]{opacity:0;position:absolute;top:-3px;width:5px;height:7px;background-color:hsla(0,0%,100%,.5);transition:opacity .1s ease}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume]{position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:0;left:0;width:20px;height:20px;opacity:1;transition:all .1s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] .bar-scrubber-icon[data-volume]{position:absolute;left:6px;top:6px;width:8px;height:8px;border-radius:10px;box-shadow:0 0 0 6px hsla(0,0%,100%,.2);background-color:#fff}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]{float:left;width:4px;padding-left:2px;height:12px;opacity:.5;box-shadow:inset 2px 0 0 #fff;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill{box-shadow:inset 2px 0 0 #fff;opacity:1}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:first-of-type{padding-left:0}.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:hover{-webkit-transform:scaleY(1.5);transform:scaleY(1.5)}.media-control[data-media-control].w320 .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume].volume-bar-hide{width:0;height:12px;top:9px;padding:0}', ""])
    }, function (t, e) {
        t.exports = '<div class="media-control-background" data-background></div>\n<div class="media-control-layer" data-controls>\n  <%  var renderBar = function(name) { %>\n      <div class="bar-container" data-<%= name %>>\n        <div class="bar-background" data-<%= name %>>\n          <div class="bar-fill-1" data-<%= name %>></div>\n          <div class="bar-fill-2" data-<%= name %>></div>\n          <div class="bar-hover" data-<%= name %>></div>\n        </div>\n        <div class="bar-scrubber" data-<%= name %>>\n          <div class="bar-scrubber-icon" data-<%= name %>></div>\n        </div>\n      </div>\n  <%  }; %>\n  <%  var renderSegmentedBar = function(name, segments) {\n      segments = segments || 10; %>\n    <div class="bar-container" data-<%= name %>>\n    <% for (var i = 0; i < segments; i++) { %>\n      <div class="segmented-bar-element" data-<%= name %>></div>\n    <% } %>\n    </div>\n  <% }; %>\n  <% var renderDrawer = function(name, renderContent) { %>\n      <div class="drawer-container" data-<%= name %>>\n        <div class="drawer-icon-container" data-<%= name %>>\n          <div class="drawer-icon media-control-icon" data-<%= name %>></div>\n          <span class="drawer-text" data-<%= name %>></span>\n        </div>\n        <% renderContent(name); %>\n      </div>\n  <% }; %>\n  <% var renderIndicator = function(name) { %>\n      <div class="media-control-indicator" data-<%= name %>></div>\n  <% }; %>\n  <% var renderButton = function(name) { %>\n    <button type="button" class="media-control-button media-control-icon" data-<%= name %> aria-label="<%= name %>"></button>\n  <% }; %>\n  <%  var templates = {\n        bar: renderBar,\n        segmentedBar: renderSegmentedBar,\n      };\n      var render = function(settingsList) {\n        settingsList.forEach(function(setting) {\n          if(setting === "seekbar") {\n            renderBar(setting);\n          } else if (setting === "volume") {\n            renderDrawer(setting, settings.volumeBarTemplate ? templates[settings.volumeBarTemplate] : function(name) { return renderSegmentedBar(name); });\n          } else if (setting === "duration" || setting === "position") {\n            renderIndicator(setting);\n          } else {\n            renderButton(setting);\n          }\n        });\n      }; %>\n  <% if (settings.default && settings.default.length) { %>\n  <div class="media-control-center-panel" data-media-control>\n    <% render(settings.default); %>\n  </div>\n  <% } %>\n  <% if (settings.left && settings.left.length) { %>\n  <div class="media-control-left-panel" data-media-control>\n    <% render(settings.left); %>\n  </div>\n  <% } %>\n  <% if (settings.right && settings.right.length) { %>\n  <div class="media-control-right-panel" data-media-control>\n    <% render(settings.right); %>\n  </div>\n  <% } %>\n</div>\n'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 1.24h12.6v13.52h-12.6z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M11.5 11h-.002v1.502L7.798 10H4.5V6h3.297l3.7-2.502V4.5h.003V11zM11 4.49L7.953 6.5H5v3h2.953L11 11.51V4.49z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M9.75 11.51L6.7 9.5H3.75v-3H6.7L9.75 4.49v.664l.497.498V3.498L6.547 6H3.248v4h3.296l3.7 2.502v-2.154l-.497.5v.662zm3-5.165L12.404 6l-1.655 1.653L9.093 6l-.346.345L10.402 8 8.747 9.654l.346.347 1.655-1.653L12.403 10l.348-.346L11.097 8l1.655-1.655z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M7.156 8L4 11.156V8.5H3V13h4.5v-1H4.844L8 8.844 7.156 8zM8.5 3v1h2.657L8 7.157 8.846 8 12 4.844V7.5h1V3H8.5z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M13.5 3.344l-.844-.844L9.5 5.656V3h-1v4.5H13v-1h-2.656L13.5 3.344zM3 9.5h2.656L2.5 12.656l.844.844L6.5 10.344V13h1V8.5H3v1z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M5.375 7.062H2.637V4.26H.502v7.488h2.135V8.9h2.738v2.848h2.133V4.26H5.375v2.802zm5.97-2.81h-2.84v7.496h2.798c2.65 0 4.195-1.607 4.195-3.77v-.022c0-2.162-1.523-3.704-4.154-3.704zm2.06 3.758c0 1.21-.81 1.896-2.03 1.896h-.83V6.093h.83c1.22 0 2.03.696 2.03 1.896v.02z"></path></svg>'
    }, function (t, e, i) {
        var n = i(159);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, '[data-player]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;margin:0;padding:0;border:0;font-style:normal;font-weight:400;text-align:center;overflow:hidden;font-size:100%;font-family:Roboto,Open Sans,Arial,sans-serif;text-shadow:0 0 0;box-sizing:border-box}[data-player] a,[data-player] abbr,[data-player] acronym,[data-player] address,[data-player] applet,[data-player] article,[data-player] aside,[data-player] audio,[data-player] b,[data-player] big,[data-player] blockquote,[data-player] canvas,[data-player] caption,[data-player] center,[data-player] cite,[data-player] code,[data-player] dd,[data-player] del,[data-player] details,[data-player] dfn,[data-player] div,[data-player] dl,[data-player] dt,[data-player] em,[data-player] embed,[data-player] fieldset,[data-player] figcaption,[data-player] figure,[data-player] footer,[data-player] form,[data-player] h1,[data-player] h2,[data-player] h3,[data-player] h4,[data-player] h5,[data-player] h6,[data-player] header,[data-player] hgroup,[data-player] i,[data-player] iframe,[data-player] img,[data-player] ins,[data-player] kbd,[data-player] label,[data-player] legend,[data-player] li,[data-player] mark,[data-player] menu,[data-player] nav,[data-player] object,[data-player] ol,[data-player] output,[data-player] p,[data-player] pre,[data-player] q,[data-player] ruby,[data-player] s,[data-player] samp,[data-player] section,[data-player] small,[data-player] span,[data-player] strike,[data-player] strong,[data-player] sub,[data-player] summary,[data-player] sup,[data-player] table,[data-player] tbody,[data-player] td,[data-player] tfoot,[data-player] th,[data-player] thead,[data-player] time,[data-player] tr,[data-player] tt,[data-player] u,[data-player] ul,[data-player] var,[data-player] video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}[data-player] table{border-collapse:collapse;border-spacing:0}[data-player] caption,[data-player] td,[data-player] th{text-align:left;font-weight:400;vertical-align:middle}[data-player] blockquote,[data-player] q{quotes:none}[data-player] blockquote:after,[data-player] blockquote:before,[data-player] q:after,[data-player] q:before{content:"";content:none}[data-player] a img{border:none}[data-player]:focus{outline:0}[data-player] *{max-width:none;box-sizing:inherit;float:none}[data-player] div{display:block}[data-player].fullscreen{width:100%!important;height:100%!important;top:0;left:0}[data-player].nocursor{cursor:none}.clappr-style{display:none!important}', ""])
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, '@font-face{font-family:Roboto;font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(' + i(161) + ') format("truetype")}', ""])
    }, function (t, e) {
        t.exports = "<%=baseUrl%>/38861cba61c66739c1452c3a71e39852.ttf"
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(72), a = n(r), o = i(59), s = n(o), l = i(0), u = n(l), c = i(1), d = n(c), h = i(2), f = n(h),
            p = i(17), g = n(p), y = i(33), m = n(y), v = i(34), b = n(v), _ = i(81), E = n(_), T = i(82), A = n(T),
            S = i(83), L = n(S), R = i(84), k = n(R), C = i(85), w = n(C), I = i(86), D = n(I), O = i(87), P = n(O),
            x = i(198), N = n(x), M = i(88), F = n(M), B = i(89), U = n(B), G = i(208), K = n(G), V = i(90), j = n(V),
            Y = i(91), H = n(Y), $ = i(215), z = n($), W = i(92), q = n(W), X = i(222), Z = n(X), J = i(227), Q = n(J),
            tt = i(228), et = n(tt), it = i(229), nt = n(it), rt = function (t) {
                function e() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, u.default)(this, e);
                    var a = (0, d.default)(this, t.call(this));
                    return a.playerId = n, a.playbackPlugins = [], r || (a.playbackPlugins = [].concat((0, s.default)(a.playbackPlugins), [k.default])), a.playbackPlugins = [].concat((0, s.default)(a.playbackPlugins), [b.default, A.default]), r || (a.playbackPlugins = [].concat((0, s.default)(a.playbackPlugins), [E.default, L.default])), a.playbackPlugins = [].concat((0, s.default)(a.playbackPlugins), [w.default, D.default]), a.containerPlugins = [P.default, F.default, U.default, N.default, K.default, j.default], a.corePlugins = [H.default, z.default, q.default, Z.default, Q.default, et.default, nt.default], Array.isArray(i) || a.validateExternalPluginsType(i), a.addExternalPlugins(i), a
                }

                return (0, f.default)(e, t), e.prototype.groupPluginsByType = function (t) {
                    return Array.isArray(t) && (t = t.reduce(function (t, e) {
                        return t[e.type] || (t[e.type] = []), t[e.type].push(e), t
                    }, {})), t
                }, e.prototype.removeDups = function (t) {
                    var e = function (t, e) {
                        return t[e.prototype.name] && delete t[e.prototype.name], t[e.prototype.name] = e, t
                    }, i = t.reduceRight(e, (0, a.default)(null)), n = [];
                    for (var r in i) n.unshift(i[r]);
                    return n
                }, e.prototype.addExternalPlugins = function (t) {
                    t = this.groupPluginsByType(t), t.playback && (this.playbackPlugins = this.removeDups(t.playback.concat(this.playbackPlugins))), t.container && (this.containerPlugins = this.removeDups(t.container.concat(this.containerPlugins))), t.core && (this.corePlugins = this.removeDups(t.core.concat(this.corePlugins))), m.default.getInstance(this.playerId).playbackPlugins = this.playbackPlugins
                }, e.prototype.validateExternalPluginsType = function (t) {
                    ["playback", "container", "core"].forEach(function (e) {
                        (t[e] || []).forEach(function (t) {
                            var i = "external " + t.type + " plugin on " + e + " array";
                            if (t.type !== e) throw new ReferenceError(i)
                        })
                    })
                }, e
            }(g.default);
        e.default = rt, t.exports = e.default
    }, function (t, e, i) {
        i(66), i(164), t.exports = i(11).Array.from
    }, function (t, e, i) {
        "use strict";
        var n = i(46), r = i(19), a = i(39), o = i(165), s = i(166), l = i(62), u = i(167), c = i(168);
        r(r.S + r.F * !i(170)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, i, r, d, h = a(t), f = "function" == typeof this ? this : Array, p = arguments.length,
                    g = p > 1 ? arguments[1] : void 0, y = void 0 !== g, m = 0, v = c(h);
                if (y && (g = n(g, p > 2 ? arguments[2] : void 0, 2)), void 0 == v || f == Array && s(v)) for (e = l(h.length), i = new f(e); e > m; m++) u(i, m, y ? g(h[m], m) : h[m]); else for (d = v.call(h), i = new f; !(r = d.next()).done; m++) u(i, m, y ? o(d, g, [r.value, m], !0) : r.value);
                return i.length = m, i
            }
        })
    }, function (t, e, i) {
        var n = i(23);
        t.exports = function (t, e, i, r) {
            try {
                return r ? e(n(i)[0], i[1]) : e(i)
            } catch (e) {
                var a = t.return;
                throw void 0 !== a && n(a.call(t)), e
            }
        }
    }, function (t, e, i) {
        var n = i(29), r = i(12)("iterator"), a = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (n.Array === t || a[r] === t)
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(16), r = i(28);
        t.exports = function (t, e, i) {
            e in t ? n.f(t, e, r(0, i)) : t[e] = i
        }
    }, function (t, e, i) {
        var n = i(169), r = i(12)("iterator"), a = i(29);
        t.exports = i(11).getIteratorMethod = function (t) {
            if (void 0 != t) return t[r] || t["@@iterator"] || a[n(t)]
        }
    }, function (t, e, i) {
        var n = i(41), r = i(12)("toStringTag"), a = "Arguments" == n(function () {
            return arguments
        }()), o = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        };
        t.exports = function (t) {
            var e, i, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = o(e = Object(t), r)) ? i : a ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    }, function (t, e, i) {
        var n = i(12)("iterator"), r = !1;
        try {
            var a = [7][n]();
            a.return = function () {
                r = !0
            }, Array.from(a, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !r) return !1;
            var i = !1;
            try {
                var a = [7], o = a[n]();
                o.next = function () {
                    return {done: i = !0}
                }, a[n] = function () {
                    return o
                }, t(a)
            } catch (t) {
            }
            return i
        }
    }, function (t, e, i) {
        "use strict";
        (function (n) {
            function r(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var a = i(80), o = r(a), s = i(0), l = r(s), u = i(1), c = r(u), d = i(3), h = r(d), f = i(2), p = r(f),
                g = i(59), y = r(g), m = i(38), v = r(m), b = i(5), _ = i(9), E = r(_), T = i(13), A = r(T), S = i(4),
                L = r(S), R = i(6), k = r(R), C = i(8), w = r(C), I = i(172), D = r(I);
            i(173);
            var O = {
                mp4: ["avc1.42E01E", "avc1.58A01E", "avc1.4D401E", "avc1.64001E", "mp4v.20.8", "mp4v.20.240", "mp4a.40.2"].map(function (t) {
                    return 'video/mp4; codecs="' + t + ', mp4a.40.2"'
                }),
                ogg: ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
                "3gpp": ['video/3gpp; codecs="mp4v.20.8, samr"'],
                webm: ['video/webm; codecs="vp8, vorbis"'],
                mkv: ['video/x-matroska; codecs="theora, vorbis"'],
                m3u8: ["application/x-mpegurl"]
            };
            O.ogv = O.ogg, O["3gp"] = O["3gpp"];
            var P = {
                wav: ["audio/wav"],
                mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
                aac: ['audio/mp4;codecs="mp4a.40.5"'],
                oga: ["audio/ogg"]
            }, x = (0, v.default)(P).reduce(function (t, e) {
                return [].concat((0, y.default)(t), (0, y.default)(P[e]))
            }, []), N = function (t) {
                function e() {
                    (0, l.default)(this, e);
                    for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    var o = (0, c.default)(this, t.call.apply(t, [this].concat(r)));
                    o._destroyed = !1, o._loadStarted = !1, o._isBuffering = !1, o._playheadMoving = !1, o._playheadMovingTimer = null, o._stopped = !1, o._ccTrackId = -1, o._setupSrc(o.options.src), o.options.playback || (o.options.playback = o.options || {}), o.options.playback.disableContextMenu = o.options.playback.disableContextMenu || o.options.disableVideoTagContextMenu;
                    var s = o.options.playback, u = s.preload || (A.default.isSafari ? "auto" : o.options.preload),
                        d = void 0;
                    return o.options.poster && ("string" == typeof o.options.poster ? d = o.options.poster : "string" == typeof o.options.poster.url && (d = o.options.poster.url)), k.default.extend(o.el, {
                        muted: o.options.mute,
                        defaultMuted: o.options.mute,
                        loop: o.options.loop,
                        poster: d,
                        preload: u || "metadata",
                        controls: (s.controls || o.options.useVideoTagDefaultControls) && "controls",
                        crossOrigin: s.crossOrigin,
                        "x-webkit-playsinline": s.playInline
                    }), s.playInline && o.$el.attr({playsinline: "playsinline"}), s.crossOrigin && o.$el.attr({crossorigin: s.crossOrigin}), o.settings = {default: ["seekbar"]}, o.settings.left = ["playpause", "position", "duration"], o.settings.right = ["fullscreen", "volume", "hd-indicator"], s.externalTracks && o._setupExternalTracks(s.externalTracks), o.options.autoPlay && n.nextTick(function () {
                        return !o._destroyed && o.play()
                    }), o
                }

                return (0, p.default)(e, t), (0, h.default)(e, [{
                    key: "name", get: function () {
                        return "html5_video"
                    }
                }, {
                    key: "tagName", get: function () {
                        return this.isAudioOnly ? "audio" : "video"
                    }
                }, {
                    key: "isAudioOnly", get: function () {
                        var t = this.options.src, i = e._mimeTypesForUrl(t, P, this.options.mimeType);
                        return this.options.playback && this.options.playback.audioOnly || this.options.audioOnly || x.indexOf(i[0]) >= 0
                    }
                }, {
                    key: "attributes", get: function () {
                        return {"data-html5-video": ""}
                    }
                }, {
                    key: "events", get: function () {
                        return {
                            canplay: "_onCanPlay",
                            canplaythrough: "_handleBufferingEvents",
                            durationchange: "_onDurationChange",
                            ended: "_onEnded",
                            error: "_onError",
                            loadeddata: "_onLoadedData",
                            loadedmetadata: "_onLoadedMetadata",
                            pause: "_onPause",
                            playing: "_onPlaying",
                            progress: "_onProgress",
                            seeking: "_onSeeking",
                            seeked: "_onSeeked",
                            stalled: "_handleBufferingEvents",
                            timeupdate: "_onTimeUpdate",
                            waiting: "_onWaiting"
                        }
                    }
                }, {
                    key: "ended", get: function () {
                        return this.el.ended
                    }
                }, {
                    key: "buffering", get: function () {
                        return this._isBuffering
                    }
                }]), e.prototype._setupExternalTracks = function (t) {
                    this._externalTracks = t.map(function (t) {
                        return {kind: t.kind || "subtitles", label: t.label, lang: t.lang, src: t.src}
                    })
                }, e.prototype._setupSrc = function (t) {
                    this.el.src !== t && (this._ccIsSetup = !1, this.el.src = t, this._src = this.el.src)
                }, e.prototype._onLoadedMetadata = function (t) {
                    this._handleBufferingEvents(), this.trigger(L.default.PLAYBACK_LOADEDMETADATA, {
                        duration: t.target.duration,
                        data: t
                    }), this._updateSettings();
                    var e = void 0 === this._options.autoSeekFromUrl || this._options.autoSeekFromUrl;
                    this.getPlaybackType() !== E.default.LIVE && e && this._checkInitialSeek()
                }, e.prototype._onDurationChange = function () {
                    this._updateSettings(), this._onTimeUpdate(), this._onProgress()
                }, e.prototype._updateSettings = function () {
                    this.getPlaybackType() === E.default.VOD || this.getPlaybackType() === E.default.AOD ? this.settings.left = ["playpause", "position", "duration"] : this.settings.left = ["playstop"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(L.default.PLAYBACK_SETTINGSUPDATE)
                }, e.prototype.isSeekEnabled = function () {
                    return isFinite(this.getDuration())
                }, e.prototype.getPlaybackType = function () {
                    var t = "audio" === this.tagName ? E.default.AOD : E.default.VOD;
                    return [0, void 0, 1 / 0].indexOf(this.el.duration) >= 0 ? E.default.LIVE : t
                }, e.prototype.isHighDefinitionInUse = function () {
                    return !1
                }, e.prototype.consent = function () {
                    !this.isPlaying() && this.el.load()
                }, e.prototype.play = function () {
                    this.trigger(L.default.PLAYBACK_PLAY_INTENT), this._stopped = !1, this._setupSrc(this._src), this._handleBufferingEvents();
                    var t = this.el.play();
                    t && t.catch && t.catch(function () {
                    })
                }, e.prototype.pause = function () {
                    this.el.pause()
                }, e.prototype.stop = function () {
                    this.pause(), this._stopped = !0, this.el.removeAttribute("src"), this._stopPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(L.default.PLAYBACK_STOP)
                }, e.prototype.volume = function (t) {
                    0 === t ? (this.$el.attr({muted: "true"}), this.el.muted = !0) : (this.$el.attr({muted: null}), this.el.muted = !1), this.el.volume = t / 100
                }, e.prototype.mute = function () {
                    this.el.muted = !0
                }, e.prototype.unmute = function () {
                    this.el.muted = !1
                }, e.prototype.isMuted = function () {
                    return !!this.el.volume
                }, e.prototype.isPlaying = function () {
                    return !this.el.paused && !this.el.ended
                }, e.prototype._startPlayheadMovingChecks = function () {
                    null === this._playheadMovingTimer && (this._playheadMovingTimeOnCheck = null, this._determineIfPlayheadMoving(), this._playheadMovingTimer = setInterval(this._determineIfPlayheadMoving.bind(this), 500))
                }, e.prototype._stopPlayheadMovingChecks = function () {
                    null !== this._playheadMovingTimer && (clearInterval(this._playheadMovingTimer), this._playheadMovingTimer = null, this._playheadMoving = !1)
                }, e.prototype._determineIfPlayheadMoving = function () {
                    var t = this._playheadMovingTimeOnCheck, e = this.el.currentTime;
                    this._playheadMoving = t !== e, this._playheadMovingTimeOnCheck = e, this._handleBufferingEvents()
                }, e.prototype._onWaiting = function () {
                    this._loadStarted = !0, this._handleBufferingEvents()
                }, e.prototype._onLoadedData = function () {
                    this._loadStarted = !0, this._handleBufferingEvents()
                }, e.prototype._onCanPlay = function () {
                    this._handleBufferingEvents()
                }, e.prototype._onPlaying = function () {
                    this._checkForClosedCaptions(), this._startPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(L.default.PLAYBACK_PLAY)
                }, e.prototype._onPause = function () {
                    this._stopPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(L.default.PLAYBACK_PAUSE)
                }, e.prototype._onSeeking = function () {
                    this._handleBufferingEvents(), this.trigger(L.default.PLAYBACK_SEEK)
                }, e.prototype._onSeeked = function () {
                    this._handleBufferingEvents(), this.trigger(L.default.PLAYBACK_SEEKED)
                }, e.prototype._onEnded = function () {
                    this._handleBufferingEvents(), this.trigger(L.default.PLAYBACK_ENDED, this.name)
                }, e.prototype._handleBufferingEvents = function () {
                    var t = !this.el.ended && !this.el.paused,
                        e = this._loadStarted && !this.el.ended && !this._stopped && (t && !this._playheadMoving || this.el.readyState < this.el.HAVE_FUTURE_DATA);
                    this._isBuffering !== e && (this._isBuffering = e, e ? this.trigger(L.default.PLAYBACK_BUFFERING, this.name) : this.trigger(L.default.PLAYBACK_BUFFERFULL, this.name))
                }, e.prototype._onError = function () {
                    this.trigger(L.default.PLAYBACK_ERROR, this.el.error, this.name)
                }, e.prototype.destroy = function () {
                    this._destroyed = !0, this.handleTextTrackChange && this.el.textTracks.removeEventListener("change", this.handleTextTrackChange), this.$el.remove(), this.el.src = "", this._src = null, b.DomRecycler.garbage(this.$el)
                }, e.prototype.seek = function (t) {
                    this.el.currentTime = t
                }, e.prototype.seekPercentage = function (t) {
                    var e = this.el.duration * (t / 100);
                    this.seek(e)
                }, e.prototype._checkInitialSeek = function () {
                    var t = (0, b.seekStringToSeconds)();
                    0 !== t && this.seek(t)
                }, e.prototype.getCurrentTime = function () {
                    return this.el.currentTime
                }, e.prototype.getDuration = function () {
                    return this.el.duration
                }, e.prototype._onTimeUpdate = function () {
                    this.getPlaybackType() === E.default.LIVE ? this.trigger(L.default.PLAYBACK_TIMEUPDATE, {
                        current: 1,
                        total: 1
                    }, this.name) : this.trigger(L.default.PLAYBACK_TIMEUPDATE, {
                        current: this.el.currentTime,
                        total: this.el.duration
                    }, this.name)
                }, e.prototype._onProgress = function () {
                    if (this.el.buffered.length) {
                        for (var t = [], e = 0, i = 0; i < this.el.buffered.length; i++) t = [].concat((0, y.default)(t), [{
                            start: this.el.buffered.start(i),
                            end: this.el.buffered.end(i)
                        }]), this.el.currentTime >= t[i].start && this.el.currentTime <= t[i].end && (e = i);
                        var n = {start: t[e].start, current: t[e].end, total: this.el.duration};
                        this.trigger(L.default.PLAYBACK_PROGRESS, n, t)
                    }
                }, e.prototype._typeFor = function (t) {
                    var i = e._mimeTypesForUrl(t, O, this.options.mimeType);
                    return 0 === i.length && (i = e._mimeTypesForUrl(t, P, this.options.mimeType)), (i[0] || "").split(";")[0]
                }, e.prototype._ready = function () {
                    this._isReadyState || (this._isReadyState = !0, this.trigger(L.default.PLAYBACK_READY, this.name))
                }, e.prototype._checkForClosedCaptions = function () {
                    if (this.isHTML5Video && !this._ccIsSetup) {
                        if (this.hasClosedCaptionsTracks) {
                            this.trigger(L.default.PLAYBACK_SUBTITLE_AVAILABLE);
                            var t = this.closedCaptionsTrackId;
                            this.closedCaptionsTrackId = t, this.handleTextTrackChange = this._handleTextTrackChange.bind(this), this.el.textTracks.addEventListener("change", this.handleTextTrackChange)
                        }
                        this._ccIsSetup = !0
                    }
                }, e.prototype._handleTextTrackChange = function () {
                    var t = this.closedCaptionsTracks, e = t.find(function (t) {
                        return "showing" === t.track.mode
                    }) || {id: -1};
                    this._ccTrackId !== e.id && (this._ccTrackId = e.id, this.trigger(L.default.PLAYBACK_SUBTITLE_CHANGED, {id: e.id}))
                }, e.prototype.render = function () {
                    return this.options.playback.disableContextMenu && this.$el.on("contextmenu", function () {
                        return !1
                    }), this._externalTracks && this._externalTracks.length > 0 && this.$el.html(this.template({tracks: this._externalTracks})), this._ready(), this
                }, (0, h.default)(e, [{
                    key: "isReady", get: function () {
                        return this._isReadyState
                    }
                }, {
                    key: "isHTML5Video", get: function () {
                        return this.name === e.prototype.name
                    }
                }, {
                    key: "closedCaptionsTracks", get: function () {
                        var t = 0, e = function () {
                            return t++
                        };
                        return (this.el.textTracks ? (0, o.default)(this.el.textTracks) : []).filter(function (t) {
                            return "subtitles" === t.kind || "captions" === t.kind
                        }).map(function (t) {
                            return {id: e(), name: t.label, track: t}
                        })
                    }
                }, {
                    key: "closedCaptionsTrackId", get: function () {
                        return this._ccTrackId
                    }, set: function (t) {
                        if ((0, b.isNumber)(t)) {
                            var e = this.closedCaptionsTracks, i = void 0;
                            if (-1 !== t) {
                                if (!(i = e.find(function (e) {
                                        return e.id === t
                                    }))) return;
                                if ("showing" === i.track.mode) return
                            }
                            e.filter(function (t) {
                                return "hidden" !== t.track.mode
                            }).forEach(function (t) {
                                return t.track.mode = "hidden"
                            }), i && (i.track.mode = "showing"), this._ccTrackId = t, this.trigger(L.default.PLAYBACK_SUBTITLE_CHANGED, {id: t})
                        }
                    }
                }, {
                    key: "template", get: function () {
                        return (0, w.default)(D.default)
                    }
                }]), e
            }(E.default);
            e.default = N, N._mimeTypesForUrl = function (t, e, i) {
                var n = (t.split("?")[0].match(/.*\.(.*)$/) || [])[1], r = i || n && e[n.toLowerCase()] || [];
                return r.constructor === Array ? r : [r]
            }, N._canPlay = function (t, e, i, n) {
                var r = N._mimeTypesForUrl(i, e, n), a = document.createElement(t);
                return !!r.filter(function (t) {
                    return !!a.canPlayType(t).replace(/no/, "")
                })[0]
            }, N.canPlay = function (t, e) {
                return N._canPlay("audio", P, t, e) || N._canPlay("video", O, t, e)
            }, t.exports = e.default
        }).call(e, i(57))
    }, function (t, e) {
        t.exports = '<% for (var i = 0; i < tracks.length; i++) { %>\n  <track data-html5-video-track="<%= i %>" kind="<%= tracks[i].kind %>" label="<%= tracks[i].label %>" srclang="<%= tracks[i].lang %>" src="<%= tracks[i].src %>" />\n<% }; %>\n'
    }, function (t, e, i) {
        var n = i(174);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, "[data-html5-video]{position:absolute;height:100%;width:100%;display:block}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(5), f = i(60),
            p = n(f), g = i(13), y = n(g), m = i(24), v = n(m), b = i(8), _ = n(b), E = i(6), T = n(E), A = i(4),
            S = n(A), L = i(9), R = n(L), k = i(180), C = n(k), w = function (t) {
                function e() {
                    (0, a.default)(this, e);
                    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    var o = (0, s.default)(this, t.call.apply(t, [this].concat(n)));
                    return o._src = o.options.src, o._baseUrl = o.options.baseUrl, o._autoPlay = o.options.autoPlay, o.settings = {default: ["seekbar"]}, o.settings.left = ["playpause", "position", "duration"], o.settings.right = ["fullscreen", "volume"], o.settings.seekEnabled = !0, o._isReadyState = !1, o._addListeners(), o
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "name", get: function () {
                        return "flash"
                    }
                }, {
                    key: "swfPath", get: function () {
                        return (0, _.default)(C.default)({baseUrl: this._baseUrl})
                    }
                }, {
                    key: "ended", get: function () {
                        return "ENDED" === this._currentState
                    }
                }, {
                    key: "buffering", get: function () {
                        return !!this._bufferingState && "ENDED" !== this._currentState
                    }
                }]), e.prototype._bootstrap = function () {
                    var t = this;
                    this.el.playerPlay ? (this.el.width = "100%", this.el.height = "100%", "PLAYING" === this._currentState ? this._firstPlay() : (this._currentState = "IDLE", this._autoPlay && this.play()), (0, T.default)('<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" />').insertAfter(this.$el), this.getDuration() > 0 ? this._metadataLoaded() : v.default.once(this.uniqueId + ":timeupdate", this._metadataLoaded, this)) : (this._attempts = this._attempts || 0, ++this._attempts <= 60 ? setTimeout(function () {
                        return t._bootstrap()
                    }, 50) : this.trigger(S.default.PLAYBACK_ERROR, {message: "Max number of attempts reached"}, this.name))
                }, e.prototype._metadataLoaded = function () {
                    this._isReadyState = !0, this.trigger(S.default.PLAYBACK_READY, this.name), this.trigger(S.default.PLAYBACK_SETTINGSUPDATE, this.name)
                }, e.prototype.getPlaybackType = function () {
                    return R.default.VOD
                }, e.prototype.isHighDefinitionInUse = function () {
                    return !1
                }, e.prototype._updateTime = function () {
                    this.trigger(S.default.PLAYBACK_TIMEUPDATE, {
                        current: this.el.getPosition(),
                        total: this.el.getDuration()
                    }, this.name)
                }, e.prototype._addListeners = function () {
                    v.default.on(this.uniqueId + ":progress", this._progress, this), v.default.on(this.uniqueId + ":timeupdate", this._updateTime, this), v.default.on(this.uniqueId + ":statechanged", this._checkState, this), v.default.on(this.uniqueId + ":flashready", this._bootstrap, this)
                }, e.prototype.stopListening = function () {
                    t.prototype.stopListening.call(this), v.default.off(this.uniqueId + ":progress"), v.default.off(this.uniqueId + ":timeupdate"), v.default.off(this.uniqueId + ":statechanged"), v.default.off(this.uniqueId + ":flashready")
                }, e.prototype._checkState = function () {
                    this._isIdle || "PAUSED" === this._currentState || ("PLAYING_BUFFERING" !== this._currentState && "PLAYING_BUFFERING" === this.el.getState() ? (this._bufferingState = !0, this.trigger(S.default.PLAYBACK_BUFFERING, this.name), this._currentState = "PLAYING_BUFFERING") : "PLAYING" === this.el.getState() ? (this._bufferingState = !1, this.trigger(S.default.PLAYBACK_BUFFERFULL, this.name), this._currentState = "PLAYING") : "IDLE" === this.el.getState() ? this._currentState = "IDLE" : "ENDED" === this.el.getState() && (this.trigger(S.default.PLAYBACK_ENDED, this.name), this.trigger(S.default.PLAYBACK_TIMEUPDATE, {
                        current: 0,
                        total: this.el.getDuration()
                    }, this.name), this._currentState = "ENDED", this._isIdle = !0))
                }, e.prototype._progress = function () {
                    "IDLE" !== this._currentState && "ENDED" !== this._currentState && this.trigger(S.default.PLAYBACK_PROGRESS, {
                        start: 0,
                        current: this.el.getBytesLoaded(),
                        total: this.el.getBytesTotal()
                    })
                }, e.prototype._firstPlay = function () {
                    var t = this;
                    this.el.playerPlay ? (this._isIdle = !1, this.el.playerPlay(this._src), this.listenToOnce(this, S.default.PLAYBACK_BUFFERFULL, function () {
                        return t._checkInitialSeek()
                    }), this._currentState = "PLAYING") : this.listenToOnce(this, S.default.PLAYBACK_READY, this._firstPlay)
                }, e.prototype._checkInitialSeek = function () {
                    var t = (0, h.seekStringToSeconds)(window.location.href);
                    0 !== t && this.seekSeconds(t)
                }, e.prototype.play = function () {
                    this.trigger(S.default.PLAYBACK_PLAY_INTENT), "PAUSED" === this._currentState || "PLAYING_BUFFERING" === this._currentState ? (this._currentState = "PLAYING", this.el.playerResume(), this.trigger(S.default.PLAYBACK_PLAY, this.name)) : "PLAYING" !== this._currentState && (this._firstPlay(), this.trigger(S.default.PLAYBACK_PLAY, this.name))
                }, e.prototype.volume = function (t) {
                    var e = this;
                    this.isReady ? this.el.playerVolume(t) : this.listenToOnce(this, S.default.PLAYBACK_BUFFERFULL, function () {
                        return e.volume(t)
                    })
                }, e.prototype.pause = function () {
                    this._currentState = "PAUSED", this.el.playerPause(), this.trigger(S.default.PLAYBACK_PAUSE, this.name)
                }, e.prototype.stop = function () {
                    this.el.playerStop(), this.trigger(S.default.PLAYBACK_STOP), this.trigger(S.default.PLAYBACK_TIMEUPDATE, {
                        current: 0,
                        total: 0
                    }, this.name)
                }, e.prototype.isPlaying = function () {
                    return !!(this.isReady && this._currentState.indexOf("PLAYING") > -1)
                }, e.prototype.getDuration = function () {
                    return this.el.getDuration()
                }, e.prototype.seekPercentage = function (t) {
                    var e = this;
                    if (this.el.getDuration() > 0) {
                        var i = this.el.getDuration() * (t / 100);
                        this.seek(i)
                    } else this.listenToOnce(this, S.default.PLAYBACK_BUFFERFULL, function () {
                        return e.seekPercentage(t)
                    })
                }, e.prototype.seek = function (t) {
                    var e = this;
                    this.isReady && this.el.playerSeek ? (this.el.playerSeek(t), this.trigger(S.default.PLAYBACK_TIMEUPDATE, {
                        current: t,
                        total: this.el.getDuration()
                    }, this.name), "PAUSED" === this._currentState && this.el.playerPause()) : this.listenToOnce(this, S.default.PLAYBACK_BUFFERFULL, function () {
                        return e.seek(t)
                    })
                }, e.prototype.destroy = function () {
                    clearInterval(this.bootstrapId), t.prototype.stopListening.call(this), this.$el.remove()
                }, (0, u.default)(e, [{
                    key: "isReady", get: function () {
                        return this._isReadyState
                    }
                }]), e
            }(p.default);
        e.default = w, w.canPlay = function (t) {
            if (y.default.hasFlash && t && t.constructor === String) {
                var e = t.split("?")[0].match(/.*\.(.*)$/) || [];
                return e.length > 1 && !y.default.isMobile && e[1].toLowerCase().match(/^(mp4|mov|f4v|3gpp|3gp)$/)
            }
            return !1
        }, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(3), s = n(o), l = i(1), u = n(l), c = i(2), d = n(c), h = i(9), f = n(h),
            p = i(8), g = n(p), y = i(13), m = n(y), v = i(177), b = n(v);
        i(178);
        var _ = function (t) {
            function e() {
                return (0, a.default)(this, e), (0, u.default)(this, t.apply(this, arguments))
            }

            return (0, d.default)(e, t), e.prototype.setElement = function (t) {
                this.$el = t, this.el = t[0]
            }, e.prototype.render = function () {
                return this.$el.attr("data", this.swfPath), this.$el.html(this.template({
                    cid: this.cid,
                    swfPath: this.swfPath,
                    baseUrl: this.baseUrl,
                    playbackId: this.uniqueId,
                    wmode: this.wmode,
                    callbackName: "window.Clappr.flashlsCallbacks." + this.cid
                })), m.default.isIE && (this.$("embed").remove(), m.default.isLegacyIE && this.$el.attr("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000")), this.el.id = this.cid, this
            }, (0, s.default)(e, [{
                key: "tagName", get: function () {
                    return "object"
                }
            }, {
                key: "swfPath", get: function () {
                    return ""
                }
            }, {
                key: "wmode", get: function () {
                    return "transparent"
                }
            }, {
                key: "template", get: function () {
                    return (0, g.default)(b.default)
                }
            }, {
                key: "attributes", get: function () {
                    var t = "application/x-shockwave-flash";
                    return m.default.isLegacyIE && (t = ""), {
                        class: "clappr-flash-playback",
                        type: t,
                        width: "100%",
                        height: "100%",
                        data: this.swfPath,
                        "data-flash-playback": this.name
                    }
                }
            }]), e
        }(f.default);
        e.default = _, t.exports = e.default
    }, function (t, e) {
        t.exports = '<param name="movie" value="<%= swfPath %>">\n<param name="quality" value="autohigh">\n<param name="swliveconnect" value="true">\n<param name="allowScriptAccess" value="always">\n<param name="bgcolor" value="#000000">\n<param name="allowFullScreen" value="false">\n<param name="wmode" value="<%= wmode %>">\n<param name="tabindex" value="1">\n<param name="FlashVars" value="playbackId=<%= playbackId %>&callback=<%= callbackName %>">\n<embed\n  name="<%= cid %>"\n  type="application/x-shockwave-flash"\n  disabled="disabled"\n  tabindex="-1"\n  enablecontextmenu="false"\n  allowScriptAccess="always"\n  quality="autohigh"\n  pluginspage="http://www.macromedia.com/go/getflashplayer"\n  wmode="<%= wmode %>"\n  swliveconnect="true"\n  allowfullscreen="false"\n  bgcolor="#000000"\n  FlashVars="playbackId=<%= playbackId %>&callback=<%= callbackName %>"\n  data="<%= swfPath %>"\n  src="<%= swfPath %>"\n  width="100%"\n  height="100%">\n</embed>\n'
    }, function (t, e, i) {
        var n = i(179);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, ".clappr-flash-playback[data-flash-playback]{display:block;position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none}", ""])
    }, function (t, e) {
        t.exports = "<%=baseUrl%>/4b76590b32dab62bc95c1b7951efae78.swf"
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(3), s = n(o), l = i(1), u = n(l), c = i(2), d = n(c), h = i(4), f = n(h),
            p = i(9), g = n(p), y = i(34), m = n(y), v = function (t) {
                function e() {
                    return (0, a.default)(this, e), (0, u.default)(this, t.apply(this, arguments))
                }

                return (0, d.default)(e, t), e.prototype.updateSettings = function () {
                    this.settings.left = ["playpause", "position", "duration"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(f.default.PLAYBACK_SETTINGSUPDATE)
                }, e.prototype.getPlaybackType = function () {
                    return g.default.AOD
                }, (0, s.default)(e, [{
                    key: "name", get: function () {
                        return "html5_audio"
                    }
                }, {
                    key: "tagName", get: function () {
                        return "audio"
                    }
                }, {
                    key: "isAudioOnly", get: function () {
                        return !0
                    }
                }]), e
            }(m.default);
        e.default = v, v.canPlay = function (t, e) {
            var i = {
                wav: ["audio/wav"],
                mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
                aac: ['audio/mp4;codecs="mp4a.40.5"'],
                oga: ["audio/ogg"]
            };
            return m.default._canPlay("audio", i, t, e)
        }, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(60), f = n(h),
            p = i(4), g = n(p), y = i(8), m = n(y), v = i(9), b = n(v), _ = i(24), E = n(_), T = i(13), A = n(T),
            S = i(183), L = n(S), R = i(184), k = n(R), C = i(6), w = n(C), I = function (t) {
                function e() {
                    (0, a.default)(this, e);
                    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    var o = (0, s.default)(this, t.call.apply(t, [this].concat(n)));
                    return o._src = o.options.src, o._baseUrl = o.options.baseUrl, o._initHlsParameters(o.options), o.highDefinition = !1, o._autoPlay = o.options.autoPlay, o._loop = o.options.loop, o._defaultSettings = {
                        left: ["playstop"],
                        default: ["seekbar"],
                        right: ["fullscreen", "volume", "hd-indicator"],
                        seekEnabled: !1
                    }, o.settings = w.default.extend({}, o._defaultSettings), o._playbackType = b.default.LIVE, o._hasEnded = !1, o._addListeners(), o
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "name", get: function () {
                        return "flashls"
                    }
                }, {
                    key: "swfPath", get: function () {
                        return (0, m.default)(k.default)({baseUrl: this._baseUrl})
                    }
                }, {
                    key: "levels", get: function () {
                        return this._levels || []
                    }
                }, {
                    key: "currentLevel", get: function () {
                        return null === this._currentLevel || void 0 === this._currentLevel ? -1 : this._currentLevel
                    }, set: function (t) {
                        this._currentLevel = t, this.trigger(g.default.PLAYBACK_LEVEL_SWITCH_START), this.el.playerSetCurrentLevel(t)
                    }
                }, {
                    key: "ended", get: function () {
                        return this._hasEnded
                    }
                }, {
                    key: "buffering", get: function () {
                        return !!this._bufferingState && !this._hasEnded
                    }
                }]), e.prototype._initHlsParameters = function (t) {
                    this._autoStartLoad = void 0 === t.autoStartLoad || t.autoStartLoad, this._capLevelToStage = void 0 !== t.capLevelToStage && t.capLevelToStage, this._maxLevelCappingMode = void 0 === t.maxLevelCappingMode ? "downscale" : t.maxLevelCappingMode, this._minBufferLength = void 0 === t.minBufferLength ? -1 : t.minBufferLength, this._minBufferLengthCapping = void 0 === t.minBufferLengthCapping ? -1 : t.minBufferLengthCapping, this._maxBufferLength = void 0 === t.maxBufferLength ? 120 : t.maxBufferLength, this._maxBackBufferLength = void 0 === t.maxBackBufferLength ? 30 : t.maxBackBufferLength, this._lowBufferLength = void 0 === t.lowBufferLength ? 3 : t.lowBufferLength, this._mediaTimePeriod = void 0 === t.mediaTimePeriod ? 100 : t.mediaTimePeriod, this._fpsDroppedMonitoringPeriod = void 0 === t.fpsDroppedMonitoringPeriod ? 5e3 : t.fpsDroppedMonitoringPeriod, this._fpsDroppedMonitoringThreshold = void 0 === t.fpsDroppedMonitoringThreshold ? .2 : t.fpsDroppedMonitoringThreshold, this._capLevelonFPSDrop = void 0 !== t.capLevelonFPSDrop && t.capLevelonFPSDrop, this._smoothAutoSwitchonFPSDrop = void 0 === t.smoothAutoSwitchonFPSDrop ? this.capLevelonFPSDrop : t.smoothAutoSwitchonFPSDrop, this._switchDownOnLevelError = void 0 === t.switchDownOnLevelError || t.switchDownOnLevelError, this._seekMode = void 0 === t.seekMode ? "ACCURATE" : t.seekMode, this._keyLoadMaxRetry = void 0 === t.keyLoadMaxRetry ? 3 : t.keyLoadMaxRetry, this._keyLoadMaxRetryTimeout = void 0 === t.keyLoadMaxRetryTimeout ? 64e3 : t.keyLoadMaxRetryTimeout, this._fragmentLoadMaxRetry = void 0 === t.fragmentLoadMaxRetry ? 3 : t.fragmentLoadMaxRetry, this._fragmentLoadMaxRetryTimeout = void 0 === t.fragmentLoadMaxRetryTimeout ? 4e3 : t.fragmentLoadMaxRetryTimeout, this._fragmentLoadSkipAfterMaxRetry = void 0 === t.fragmentLoadSkipAfterMaxRetry || t.fragmentLoadSkipAfterMaxRetry, this._maxSkippedFragments = void 0 === t.maxSkippedFragments ? 5 : t.maxSkippedFragments, this._flushLiveURLCache = void 0 !== t.flushLiveURLCache && t.flushLiveURLCache, this._initialLiveManifestSize = void 0 === t.initialLiveManifestSize ? 1 : t.initialLiveManifestSize, this._manifestLoadMaxRetry = void 0 === t.manifestLoadMaxRetry ? 3 : t.manifestLoadMaxRetry, this._manifestLoadMaxRetryTimeout = void 0 === t.manifestLoadMaxRetryTimeout ? 64e3 : t.manifestLoadMaxRetryTimeout, this._manifestRedundantLoadmaxRetry = void 0 === t.manifestRedundantLoadmaxRetry ? 3 : t.manifestRedundantLoadmaxRetry, this._startFromBitrate = void 0 === t.startFromBitrate ? -1 : t.startFromBitrate, this._startFromLevel = void 0 === t.startFromLevel ? -1 : t.startFromLevel, this._autoStartMaxDuration = void 0 === t.autoStartMaxDuration ? -1 : t.autoStartMaxDuration, this._seekFromLevel = void 0 === t.seekFromLevel ? -1 : t.seekFromLevel, this._useHardwareVideoDecoder = void 0 !== t.useHardwareVideoDecoder && t.useHardwareVideoDecoder, this._hlsLogEnabled = void 0 === t.hlsLogEnabled || t.hlsLogEnabled, this._logDebug = void 0 !== t.logDebug && t.logDebug, this._logDebug2 = void 0 !== t.logDebug2 && t.logDebug2, this._logWarn = void 0 === t.logWarn || t.logWarn, this._logError = void 0 === t.logError || t.logError, this._hlsMinimumDvrSize = void 0 === t.hlsMinimumDvrSize ? 60 : t.hlsMinimumDvrSize
                }, e.prototype._addListeners = function () {
                    var t = this;
                    E.default.on(this.cid + ":flashready", function () {
                        return t._bootstrap()
                    }), E.default.on(this.cid + ":timeupdate", function (e) {
                        return t._updateTime(e)
                    }), E.default.on(this.cid + ":playbackstate", function (e) {
                        return t._setPlaybackState(e)
                    }), E.default.on(this.cid + ":levelchanged", function (e) {
                        return t._levelChanged(e)
                    }), E.default.on(this.cid + ":error", function (e, i, n) {
                        return t._flashPlaybackError(e, i, n)
                    }), E.default.on(this.cid + ":fragmentloaded", function (e) {
                        return t._onFragmentLoaded(e)
                    }), E.default.on(this.cid + ":levelendlist", function (e) {
                        return t._onLevelEndlist(e)
                    })
                }, e.prototype.stopListening = function () {
                    t.prototype.stopListening.call(this), E.default.off(this.cid + ":flashready"), E.default.off(this.cid + ":timeupdate"), E.default.off(this.cid + ":playbackstate"), E.default.off(this.cid + ":levelchanged"), E.default.off(this.cid + ":playbackerror"), E.default.off(this.cid + ":fragmentloaded"), E.default.off(this.cid + ":manifestloaded"), E.default.off(this.cid + ":levelendlist")
                }, e.prototype._bootstrap = function () {
                    var t = this;
                    this.el.playerLoad ? (this.el.width = "100%", this.el.height = "100%", this._isReadyState = !0, this._srcLoaded = !1, this._currentState = "IDLE", this._setFlashSettings(), this._updatePlaybackType(), (this._autoPlay || this._shouldPlayOnManifestLoaded) && this.play(), this.trigger(g.default.PLAYBACK_READY, this.name)) : (this._bootstrapAttempts = this._bootstrapAttempts || 0, ++this._bootstrapAttempts <= 60 ? setTimeout(function () {
                        return t._bootstrap()
                    }, 50) : this.trigger(g.default.PLAYBACK_ERROR, {message: "Max number of attempts reached"}, this.name))
                }, e.prototype._setFlashSettings = function () {
                    this.el.playerSetAutoStartLoad(this._autoStartLoad), this.el.playerSetCapLevelToStage(this._capLevelToStage), this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode), this.el.playerSetMinBufferLength(this._minBufferLength), this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping), this.el.playerSetMaxBufferLength(this._maxBufferLength), this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength), this.el.playerSetLowBufferLength(this._lowBufferLength), this.el.playerSetMediaTimePeriod(this._mediaTimePeriod), this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod), this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold), this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop), this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop), this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError), this.el.playerSetSeekMode(this._seekMode), this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry), this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout), this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry), this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout), this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry), this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments), this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache), this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize), this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry), this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout), this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry), this.el.playerSetStartFromBitrate(this._startFromBitrate), this.el.playerSetStartFromLevel(this._startFromLevel), this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration), this.el.playerSetSeekFromLevel(this._seekFromLevel), this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder), this.el.playerSetLogInfo(this._hlsLogEnabled), this.el.playerSetLogDebug(this._logDebug), this.el.playerSetLogDebug2(this._logDebug2), this.el.playerSetLogWarn(this._logWarn), this.el.playerSetLogError(this._logError)
                }, e.prototype.setAutoStartLoad = function (t) {
                    this._autoStartLoad = t, this.el.playerSetAutoStartLoad(this._autoStartLoad)
                }, e.prototype.setCapLevelToStage = function (t) {
                    this._capLevelToStage = t, this.el.playerSetCapLevelToStage(this._capLevelToStage)
                }, e.prototype.setMaxLevelCappingMode = function (t) {
                    this._maxLevelCappingMode = t, this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode)
                }, e.prototype.setSetMinBufferLength = function (t) {
                    this._minBufferLength = t, this.el.playerSetMinBufferLength(this._minBufferLength)
                }, e.prototype.setMinBufferLengthCapping = function (t) {
                    this._minBufferLengthCapping = t, this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping)
                }, e.prototype.setMaxBufferLength = function (t) {
                    this._maxBufferLength = t, this.el.playerSetMaxBufferLength(this._maxBufferLength)
                }, e.prototype.setMaxBackBufferLength = function (t) {
                    this._maxBackBufferLength = t, this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength)
                }, e.prototype.setLowBufferLength = function (t) {
                    this._lowBufferLength = t, this.el.playerSetLowBufferLength(this._lowBufferLength)
                }, e.prototype.setMediaTimePeriod = function (t) {
                    this._mediaTimePeriod = t, this.el.playerSetMediaTimePeriod(this._mediaTimePeriod)
                }, e.prototype.setFpsDroppedMonitoringPeriod = function (t) {
                    this._fpsDroppedMonitoringPeriod = t, this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod)
                }, e.prototype.setFpsDroppedMonitoringThreshold = function (t) {
                    this._fpsDroppedMonitoringThreshold = t, this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold)
                }, e.prototype.setCapLevelonFPSDrop = function (t) {
                    this._capLevelonFPSDrop = t, this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop)
                }, e.prototype.setSmoothAutoSwitchonFPSDrop = function (t) {
                    this._smoothAutoSwitchonFPSDrop = t, this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop)
                }, e.prototype.setSwitchDownOnLevelError = function (t) {
                    this._switchDownOnLevelError = t, this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError)
                }, e.prototype.setSeekMode = function (t) {
                    this._seekMode = t, this.el.playerSetSeekMode(this._seekMode)
                }, e.prototype.setKeyLoadMaxRetry = function (t) {
                    this._keyLoadMaxRetry = t, this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry)
                }, e.prototype.setKeyLoadMaxRetryTimeout = function (t) {
                    this._keyLoadMaxRetryTimeout = t, this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout)
                }, e.prototype.setFragmentLoadMaxRetry = function (t) {
                    this._fragmentLoadMaxRetry = t, this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry)
                }, e.prototype.setFragmentLoadMaxRetryTimeout = function (t) {
                    this._fragmentLoadMaxRetryTimeout = t, this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout)
                }, e.prototype.setFragmentLoadSkipAfterMaxRetry = function (t) {
                    this._fragmentLoadSkipAfterMaxRetry = t, this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry)
                }, e.prototype.setMaxSkippedFragments = function (t) {
                    this._maxSkippedFragments = t, this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments)
                }, e.prototype.setFlushLiveURLCache = function (t) {
                    this._flushLiveURLCache = t, this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache)
                }, e.prototype.setInitialLiveManifestSize = function (t) {
                    this._initialLiveManifestSize = t, this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize)
                }, e.prototype.setManifestLoadMaxRetry = function (t) {
                    this._manifestLoadMaxRetry = t, this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry)
                }, e.prototype.setManifestLoadMaxRetryTimeout = function (t) {
                    this._manifestLoadMaxRetryTimeout = t, this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout)
                }, e.prototype.setManifestRedundantLoadmaxRetry = function (t) {
                    this._manifestRedundantLoadmaxRetry = t, this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry)
                }, e.prototype.setStartFromBitrate = function (t) {
                    this._startFromBitrate = t, this.el.playerSetStartFromBitrate(this._startFromBitrate)
                }, e.prototype.setStartFromLevel = function (t) {
                    this._startFromLevel = t, this.el.playerSetStartFromLevel(this._startFromLevel)
                }, e.prototype.setAutoStartMaxDuration = function (t) {
                    this._autoStartMaxDuration = t, this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration)
                }, e.prototype.setSeekFromLevel = function (t) {
                    this._seekFromLevel = t, this.el.playerSetSeekFromLevel(this._seekFromLevel)
                }, e.prototype.setUseHardwareVideoDecoder = function (t) {
                    this._useHardwareVideoDecoder = t, this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder)
                }, e.prototype.setSetLogInfo = function (t) {
                    this._hlsLogEnabled = t, this.el.playerSetLogInfo(this._hlsLogEnabled)
                }, e.prototype.setLogDebug = function (t) {
                    this._logDebug = t, this.el.playerSetLogDebug(this._logDebug)
                }, e.prototype.setLogDebug2 = function (t) {
                    this._logDebug2 = t, this.el.playerSetLogDebug2(this._logDebug2)
                }, e.prototype.setLogWarn = function (t) {
                    this._logWarn = t, this.el.playerSetLogWarn(this._logWarn)
                }, e.prototype.setLogError = function (t) {
                    this._logError = t, this.el.playerSetLogError(this._logError)
                }, e.prototype._levelChanged = function (t) {
                    var e = this.el.getLevels()[t];
                    e && (this.highDefinition = e.height >= 720 || e.bitrate / 1e3 >= 2e3, this.trigger(g.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition), this._levels && 0 !== this._levels.length || this._fillLevels(), this.trigger(g.default.PLAYBACK_BITRATE, {
                        height: e.height,
                        width: e.width,
                        bandwidth: e.bitrate,
                        bitrate: e.bitrate,
                        level: t
                    }), this.trigger(g.default.PLAYBACK_LEVEL_SWITCH_END))
                }, e.prototype._updateTime = function (t) {
                    if ("IDLE" !== this._currentState) {
                        var e = this._normalizeDuration(t.duration), i = Math.min(Math.max(t.position, 0), e),
                            n = this._dvrEnabled, r = this._playbackType === b.default.LIVE;
                        this._dvrEnabled = r && e > this._hlsMinimumDvrSize, 100 !== e && void 0 !== r && (this._dvrEnabled !== n && (this._updateSettings(), this.trigger(g.default.PLAYBACK_SETTINGSUPDATE, this.name)), !r || this._dvrEnabled && this._dvrInUse || (i = e), this.trigger(g.default.PLAYBACK_TIMEUPDATE, {
                            current: i,
                            total: e
                        }, this.name))
                    }
                }, e.prototype.play = function () {
                    this.trigger(g.default.PLAYBACK_PLAY_INTENT), "PAUSED" === this._currentState ? this.el.playerResume() : this._srcLoaded || "PLAYING" === this._currentState ? this.el.playerPlay() : this._firstPlay()
                }, e.prototype.getPlaybackType = function () {
                    return this._playbackType ? this._playbackType : null
                }, e.prototype.getCurrentTime = function () {
                    return this.el.getPosition()
                }, e.prototype.getCurrentLevelIndex = function () {
                    return this._currentLevel
                }, e.prototype.getCurrentLevel = function () {
                    return this.levels[this.currentLevel]
                }, e.prototype.getCurrentBitrate = function () {
                    return this.levels[this.currentLevel].bitrate
                }, e.prototype.setCurrentLevel = function (t) {
                    this.currentLevel = t
                }, e.prototype.isHighDefinitionInUse = function () {
                    return this.highDefinition
                }, e.prototype.getLevels = function () {
                    return this.levels
                }, e.prototype._setPlaybackState = function (t) {
                    ["PLAYING_BUFFERING", "PAUSED_BUFFERING"].indexOf(t) >= 0 ? (this._bufferingState = !0, this.trigger(g.default.PLAYBACK_BUFFERING, this.name), this._updateCurrentState(t)) : ["PLAYING", "PAUSED"].indexOf(t) >= 0 ? (["PLAYING_BUFFERING", "PAUSED_BUFFERING", "IDLE"].indexOf(this._currentState) >= 0 && (this._bufferingState = !1, this.trigger(g.default.PLAYBACK_BUFFERFULL, this.name)), this._updateCurrentState(t)) : "IDLE" === t && (this._srcLoaded = !1, this._loop && ["PLAYING_BUFFERING", "PLAYING"].indexOf(this._currentState) >= 0 ? (this.play(), this.seek(0)) : (this._updateCurrentState(t), this._hasEnded = !0, this.trigger(g.default.PLAYBACK_TIMEUPDATE, {
                        current: 0,
                        total: this.getDuration()
                    }, this.name), this.trigger(g.default.PLAYBACK_ENDED, this.name)))
                }, e.prototype._updateCurrentState = function (t) {
                    this._currentState = t, "IDLE" !== t && (this._hasEnded = !1), this._updatePlaybackType(), "PLAYING" === t ? this.trigger(g.default.PLAYBACK_PLAY, this.name) : "PAUSED" === t && this.trigger(g.default.PLAYBACK_PAUSE, this.name)
                }, e.prototype._updatePlaybackType = function () {
                    this._playbackType = this.el.getType(), this._playbackType && (this._playbackType = this._playbackType.toLowerCase(), this._playbackType === b.default.VOD ? this._startReportingProgress() : this._stopReportingProgress()), this.trigger(g.default.PLAYBACK_PLAYBACKSTATE, {type: this._playbackType})
                }, e.prototype._startReportingProgress = function () {
                    this._reportingProgress || (this._reportingProgress = !0)
                }, e.prototype._stopReportingProgress = function () {
                    this._reportingProgress = !1
                }, e.prototype._onFragmentLoaded = function (t) {
                    if (this.trigger(g.default.PLAYBACK_FRAGMENT_LOADED, t), this._reportingProgress && this.getCurrentTime()) {
                        var e = this.getCurrentTime() + this.el.getbufferLength();
                        this.trigger(g.default.PLAYBACK_PROGRESS, {
                            start: this.getCurrentTime(),
                            current: e,
                            total: this.el.getDuration()
                        })
                    }
                }, e.prototype._onLevelEndlist = function () {
                    this._updatePlaybackType()
                }, e.prototype._firstPlay = function () {
                    var t = this;
                    this._shouldPlayOnManifestLoaded = !0, this.el.playerLoad && (E.default.once(this.cid + ":manifestloaded", function (e, i) {
                        return t._manifestLoaded(e, i)
                    }), this._setFlashSettings(), this.el.playerLoad(this._src), this._srcLoaded = !0)
                }, e.prototype.volume = function (t) {
                    var e = this;
                    this.isReady ? this.el.playerVolume(t) : this.listenToOnce(this, g.default.PLAYBACK_BUFFERFULL, function () {
                        return e.volume(t)
                    })
                }, e.prototype.pause = function () {
                    (this._playbackType !== b.default.LIVE || this._dvrEnabled) && (this.el.playerPause(), this._playbackType === b.default.LIVE && this._dvrEnabled && this._updateDvr(!0))
                }, e.prototype.stop = function () {
                    this._srcLoaded = !1, this.el.playerStop(), this.trigger(g.default.PLAYBACK_STOP), this.trigger(g.default.PLAYBACK_TIMEUPDATE, {
                        current: 0,
                        total: 0
                    }, this.name)
                }, e.prototype.isPlaying = function () {
                    return !!this._currentState && !!this._currentState.match(/playing/i)
                }, e.prototype.getDuration = function () {
                    return this._normalizeDuration(this.el.getDuration())
                }, e.prototype._normalizeDuration = function (t) {
                    return this._playbackType === b.default.LIVE && (t = Math.max(0, t - 10)), t
                }, e.prototype.seekPercentage = function (t) {
                    var e = this.el.getDuration(), i = 0;
                    t > 0 && (i = e * t / 100), this.seek(i)
                }, e.prototype.seek = function (t) {
                    var e = this.getDuration();
                    if (this._playbackType === b.default.LIVE) {
                        var i = e - t > 3;
                        this._updateDvr(i)
                    }
                    this.el.playerSeek(t), this.trigger(g.default.PLAYBACK_TIMEUPDATE, {current: t, total: e}, this.name)
                }, e.prototype._updateDvr = function (t) {
                    var e = !!this._dvrInUse;
                    this._dvrInUse = t, this._dvrInUse !== e && (this._updateSettings(), this.trigger(g.default.PLAYBACK_DVR, this._dvrInUse), this.trigger(g.default.PLAYBACK_STATS_ADD, {dvr: this._dvrInUse}))
                }, e.prototype._flashPlaybackError = function (t, e, i) {
                    this.trigger(g.default.PLAYBACK_ERROR, {
                        code: t,
                        url: e,
                        message: i
                    }), this.trigger(g.default.PLAYBACK_STOP)
                }, e.prototype._manifestLoaded = function (t, e) {
                    this._shouldPlayOnManifestLoaded && (this._shouldPlayOnManifestLoaded = !1, this.el.playerPlay()), this._fillLevels(), this.trigger(g.default.PLAYBACK_LOADEDMETADATA, {
                        duration: t,
                        data: e
                    })
                }, e.prototype._fillLevels = function () {
                    var t = this.el.getLevels(), e = t.length;
                    this._levels = [];
                    for (var i = 0; i < e; i++) this._levels.push({id: i, label: t[i].height + "p", level: t[i]});
                    this.trigger(g.default.PLAYBACK_LEVELS_AVAILABLE, this._levels)
                }, e.prototype.destroy = function () {
                    this.stopListening(), this.$el.remove()
                }, e.prototype._updateSettings = function () {
                    this.settings = w.default.extend({}, this._defaultSettings), this._playbackType === b.default.VOD || this._dvrInUse ? (this.settings.left = ["playpause", "position", "duration"], this.settings.seekEnabled = !0) : this._dvrEnabled ? (this.settings.left = ["playpause"], this.settings.seekEnabled = !0) : this.settings.seekEnabled = !1
                }, e.prototype._createCallbacks = function () {
                    var t = this;
                    window.Clappr || (window.Clappr = {}), window.Clappr.flashlsCallbacks || (window.Clappr.flashlsCallbacks = {}), this.flashlsEvents = new L.default(this.cid), window.Clappr.flashlsCallbacks[this.cid] = function (e, i) {
                        t.flashlsEvents[e].apply(t.flashlsEvents, i)
                    }
                }, e.prototype.render = function () {
                    return t.prototype.render.call(this), this._createCallbacks(), this
                }, (0, u.default)(e, [{
                    key: "isReady", get: function () {
                        return this._isReadyState
                    }
                }, {
                    key: "dvrEnabled", get: function () {
                        return !!this._dvrEnabled
                    }
                }]), e
            }(f.default);
        e.default = I, I.canPlay = function (t, e) {
            var i = t.split("?")[0].match(/.*\.(.*)$/) || [];
            return A.default.hasFlash && (i.length > 1 && "m3u8" === i[1].toLowerCase() || "application/x-mpegURL" === e || "application/vnd.apple.mpegurl" === e)
        }, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(24), s = n(o), l = function () {
            function t(e) {
                (0, a.default)(this, t), this.instanceId = e
            }

            return t.prototype.ready = function () {
                s.default.trigger(this.instanceId + ":flashready")
            }, t.prototype.videoSize = function (t, e) {
                s.default.trigger(this.instanceId + ":videosizechanged", t, e)
            }, t.prototype.complete = function () {
                s.default.trigger(this.instanceId + ":complete")
            }, t.prototype.error = function (t, e, i) {
                s.default.trigger(this.instanceId + ":error", t, e, i)
            }, t.prototype.manifest = function (t, e) {
                s.default.trigger(this.instanceId + ":manifestloaded", t, e)
            }, t.prototype.audioLevelLoaded = function (t) {
                s.default.trigger(this.instanceId + ":audiolevelloaded", t)
            }, t.prototype.levelLoaded = function (t) {
                s.default.trigger(this.instanceId + ":levelloaded", t)
            }, t.prototype.levelEndlist = function (t) {
                s.default.trigger(this.instanceId + ":levelendlist", t)
            }, t.prototype.fragmentLoaded = function (t) {
                s.default.trigger(this.instanceId + ":fragmentloaded", t)
            }, t.prototype.fragmentPlaying = function (t) {
                s.default.trigger(this.instanceId + ":fragmentplaying", t)
            }, t.prototype.position = function (t) {
                s.default.trigger(this.instanceId + ":timeupdate", t)
            }, t.prototype.state = function (t) {
                s.default.trigger(this.instanceId + ":playbackstate", t)
            }, t.prototype.seekState = function (t) {
                s.default.trigger(this.instanceId + ":seekstate", t)
            }, t.prototype.switch = function (t) {
                s.default.trigger(this.instanceId + ":levelchanged", t)
            }, t.prototype.audioTracksListChange = function (t) {
                s.default.trigger(this.instanceId + ":audiotracklistchanged", t)
            }, t.prototype.audioTrackChange = function (t) {
                s.default.trigger(this.instanceId + ":audiotrackchanged", t)
            }, t
        }();
        e.default = l, t.exports = e.default
    }, function (t, e) {
        t.exports = "<%=baseUrl%>/8fa12a459188502b9f0d39b8a67d9e6c.swf"
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(59), a = n(r), o = i(0), s = n(o), l = i(1), u = n(l), c = i(3), d = n(c), h = i(2), f = n(h),
            p = i(34), g = n(p), y = i(186), m = n(y), v = i(4), b = n(v), _ = i(9), E = n(_), T = i(5), A = i(55),
            S = n(A), L = function (t) {
                function e() {
                    (0, s.default)(this, e);
                    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    var a = (0, u.default)(this, t.call.apply(t, [this].concat(n)));
                    return a.options.playback || (a.options.playback = a.options), a._minDvrSize = void 0 === a.options.hlsMinimumDvrSize ? 60 : a.options.hlsMinimumDvrSize, a._extrapolatedWindowNumSegments = a.options.playback && void 0 !== a.options.playback.extrapolatedWindowNumSegments ? a.options.playback.extrapolatedWindowNumSegments : 2, a._playbackType = E.default.VOD, a._lastTimeUpdate = {
                        current: 0,
                        total: 0
                    }, a._lastDuration = null, a._playableRegionStartTime = 0, a._localStartTimeCorrelation = null, a._localEndTimeCorrelation = null, a._playableRegionDuration = 0, a._durationExcludesAfterLiveSyncPoint = !1, a._segmentTargetDuration = null, a._playlistType = null, a._recoverAttemptsRemaining = a.options.hlsRecoverAttempts || 16, a
                }

                return (0, f.default)(e, t), (0, d.default)(e, [{
                    key: "name", get: function () {
                        return "hls"
                    }
                }, {
                    key: "levels", get: function () {
                        return this._levels || []
                    }
                }, {
                    key: "currentLevel", get: function () {
                        return null === this._currentLevel || void 0 === this._currentLevel ? -1 : this._currentLevel
                    }, set: function (t) {
                        this._currentLevel = t, this.trigger(b.default.PLAYBACK_LEVEL_SWITCH_START), this._hls.currentLevel = this._currentLevel
                    }
                }, {
                    key: "isReady", get: function () {
                        return this._isReadyState
                    }
                }, {
                    key: "_startTime", get: function () {
                        return this._playbackType === E.default.LIVE && "EVENT" !== this._playlistType ? this._extrapolatedStartTime : this._playableRegionStartTime
                    }
                }, {
                    key: "_now", get: function () {
                        return (0, T.now)()
                    }
                }, {
                    key: "_extrapolatedStartTime", get: function () {
                        if (!this._localStartTimeCorrelation) return this._playableRegionStartTime;
                        var t = this._localStartTimeCorrelation, e = this._now - t.local, i = (t.remote + e) / 1e3;
                        return Math.min(i, this._playableRegionStartTime + this._extrapolatedWindowDuration)
                    }
                }, {
                    key: "_extrapolatedEndTime", get: function () {
                        var t = this._playableRegionStartTime + this._playableRegionDuration;
                        if (!this._localEndTimeCorrelation) return t;
                        var e = this._localEndTimeCorrelation, i = this._now - e.local, n = (e.remote + i) / 1e3;
                        return Math.max(t - this._extrapolatedWindowDuration, Math.min(n, t))
                    }
                }, {
                    key: "_duration", get: function () {
                        return this._extrapolatedEndTime - this._startTime
                    }
                }, {
                    key: "_extrapolatedWindowDuration", get: function () {
                        return null === this._segmentTargetDuration ? 0 : this._extrapolatedWindowNumSegments * this._segmentTargetDuration
                    }
                }], [{
                    key: "HLSJS", get: function () {
                        return m.default
                    }
                }]), e.prototype._setup = function () {
                    var t = this;
                    this._ccIsSetup = !1, this._ccTracksUpdated = !1, this._hls = new m.default((0, T.assign)({}, this.options.playback.hlsjsConfig)), this._hls.on(m.default.Events.MEDIA_ATTACHED, function () {
                        return t._hls.loadSource(t.options.src)
                    }), this._hls.on(m.default.Events.LEVEL_LOADED, function (e, i) {
                        return t._updatePlaybackType(e, i)
                    }), this._hls.on(m.default.Events.LEVEL_UPDATED, function (e, i) {
                        return t._onLevelUpdated(e, i)
                    }), this._hls.on(m.default.Events.LEVEL_SWITCH, function (e, i) {
                        return t._onLevelSwitch(e, i)
                    }), this._hls.on(m.default.Events.FRAG_LOADED, function (e, i) {
                        return t._onFragmentLoaded(e, i)
                    }), this._hls.on(m.default.Events.ERROR, function (e, i) {
                        return t._onHLSJSError(e, i)
                    }), this._hls.on(m.default.Events.SUBTITLE_TRACK_LOADED, function (e, i) {
                        return t._onSubtitleLoaded(e, i)
                    }), this._hls.on(m.default.Events.SUBTITLE_TRACKS_UPDATED, function () {
                        return t._ccTracksUpdated = !0
                    }), this._hls.attachMedia(this.el)
                }, e.prototype.render = function () {
                    return this._ready(), t.prototype.render.call(this)
                }, e.prototype._ready = function () {
                    this._isReadyState = !0, this.trigger(b.default.PLAYBACK_READY, this.name)
                }, e.prototype._recover = function (t, e) {
                    this._recoveredDecodingError ? this._recoveredAudioCodecError ? (S.default.error("hlsjs: failed to recover"), this.trigger(b.default.PLAYBACK_ERROR, "hlsjs: could not recover from error, evt " + t + ", data " + e + " ", this.name)) : (this._recoveredAudioCodecError = !0, this._hls.swapAudioCodec(), this._hls.recoverMediaError()) : (this._recoveredDecodingError = !0, this._hls.recoverMediaError())
                }, e.prototype._setupSrc = function (t) {
                }, e.prototype._startTimeUpdateTimer = function () {
                    var t = this;
                    this._timeUpdateTimer = setInterval(function () {
                        t._onDurationChange(), t._onTimeUpdate()
                    }, 100)
                }, e.prototype._stopTimeUpdateTimer = function () {
                    clearInterval(this._timeUpdateTimer)
                }, e.prototype.getDuration = function () {
                    return this._duration
                }, e.prototype.getCurrentTime = function () {
                    return Math.max(0, this.el.currentTime - this._startTime)
                }, e.prototype.getStartTimeOffset = function () {
                    return this._startTime
                }, e.prototype.seekPercentage = function (t) {
                    var e = this._duration;
                    t > 0 && (e = this._duration * (t / 100)), this.seek(e)
                }, e.prototype.seek = function (e) {
                    e < 0 && (S.default.warn("Attempt to seek to a negative time. Resetting to live point. Use seekToLivePoint() to seek to the live point."), e = this.getDuration()), this.dvrEnabled && this._updateDvr(e < this.getDuration() - 3), e += this._startTime, t.prototype.seek.call(this, e)
                }, e.prototype.seekToLivePoint = function () {
                    this.seek(this.getDuration())
                }, e.prototype._updateDvr = function (t) {
                    this.trigger(b.default.PLAYBACK_DVR, t), this.trigger(b.default.PLAYBACK_STATS_ADD, {dvr: t})
                }, e.prototype._updateSettings = function () {
                    this._playbackType === E.default.VOD ? this.settings.left = ["playpause", "position", "duration"] : this.dvrEnabled ? this.settings.left = ["playpause"] : this.settings.left = ["playstop"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(b.default.PLAYBACK_SETTINGSUPDATE)
                }, e.prototype._onHLSJSError = function (t, e) {
                    if (e.fatal) if (this._recoverAttemptsRemaining > 0) switch (this._recoverAttemptsRemaining -= 1, e.type) {
                        case m.default.ErrorTypes.NETWORK_ERROR:
                            switch (e.details) {
                                case m.default.ErrorDetails.MANIFEST_LOAD_ERROR:
                                case m.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                                case m.default.ErrorDetails.MANIFEST_PARSING_ERROR:
                                case m.default.ErrorDetails.LEVEL_LOAD_ERROR:
                                case m.default.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                    S.default.error("hlsjs: unrecoverable network fatal error, evt " + t + ", data " + e + " "), this.trigger(b.default.PLAYBACK_ERROR, {
                                        evt: t,
                                        data: e
                                    }, this.name);
                                    break;
                                default:
                                    S.default.warn("hlsjs: trying to recover from network error, evt " + t + ", data " + e + " "), this._hls.startLoad()
                            }
                            break;
                        case m.default.ErrorTypes.MEDIA_ERROR:
                            S.default.warn("hlsjs: trying to recover from media error, evt " + t + ", data " + e + " "), this._recover(t, e);
                            break;
                        default:
                            S.default.error("hlsjs: trying to recover from error, evt " + t + ", data " + e + " "), this.trigger(b.default.PLAYBACK_ERROR, "hlsjs: could not recover from error, evt " + t + ", data " + e + " ", this.name)
                    } else S.default.error("hlsjs: could not recover from error after maximum number of attempts, evt " + t + ", data " + e + " "), this.trigger(b.default.PLAYBACK_ERROR, {
                        evt: t,
                        data: e
                    }, this.name); else S.default.warn("hlsjs: non-fatal error occurred, evt " + t + ", data " + e + " ")
                }, e.prototype._onTimeUpdate = function () {
                    var t = {current: this.getCurrentTime(), total: this.getDuration()};
                    this._lastTimeUpdate && t.current === this._lastTimeUpdate.current && t.total === this._lastTimeUpdate.total || (this._lastTimeUpdate = t, this.trigger(b.default.PLAYBACK_TIMEUPDATE, t, this.name))
                }, e.prototype._onDurationChange = function () {
                    var e = this.getDuration();
                    this._lastDuration !== e && (this._lastDuration = e, t.prototype._onDurationChange.call(this))
                }, e.prototype._onProgress = function () {
                    if (this.el.buffered.length) {
                        for (var t = [], e = 0, i = 0; i < this.el.buffered.length; i++) t = [].concat((0, a.default)(t), [{
                            start: Math.max(0, this.el.buffered.start(i) - this._playableRegionStartTime),
                            end: Math.max(0, this.el.buffered.end(i) - this._playableRegionStartTime)
                        }]), this.el.currentTime >= t[i].start && this.el.currentTime <= t[i].end && (e = i);
                        var n = {start: t[e].start, current: t[e].end, total: this.getDuration()};
                        this.trigger(b.default.PLAYBACK_PROGRESS, n, t)
                    }
                }, e.prototype.play = function () {
                    this._hls || this._setup(), t.prototype.play.call(this), this._startTimeUpdateTimer()
                }, e.prototype.pause = function () {
                    this._hls && (t.prototype.pause.call(this), this.dvrEnabled && this._updateDvr(!0))
                }, e.prototype.stop = function () {
                    this._hls && (t.prototype.stop.call(this), this._hls.destroy(), delete this._hls)
                }, e.prototype.destroy = function () {
                    this._stopTimeUpdateTimer(), this._hls && (this._hls.destroy(), delete this._hls), t.prototype.destroy.call(this)
                }, e.prototype._updatePlaybackType = function (t, e) {
                    this._playbackType = e.details.live ? E.default.LIVE : E.default.VOD, this._onLevelUpdated(t, e), this._ccTracksUpdated && this._playbackType === E.default.LIVE && this.hasClosedCaptionsTracks && this._onSubtitleLoaded()
                }, e.prototype._fillLevels = function () {
                    this._levels = this._hls.levels.map(function (t, e) {
                        return {id: e, level: t, label: t.bitrate / 1e3 + "Kbps"}
                    }), this.trigger(b.default.PLAYBACK_LEVELS_AVAILABLE, this._levels)
                }, e.prototype._onLevelUpdated = function (t, e) {
                    this._segmentTargetDuration = e.details.targetduration, this._playlistType = e.details.type || null;
                    var i = !1, n = !1, r = e.details.fragments, a = this._playableRegionStartTime,
                        o = this._playableRegionDuration;
                    if (0 !== r.length) {
                        if (this._playableRegionStartTime !== r[0].start && (i = !0, this._playableRegionStartTime = r[0].start), i) if (this._localStartTimeCorrelation) {
                            var s = this._localStartTimeCorrelation, l = this._now - s.local, u = (s.remote + l) / 1e3;
                            u < r[0].start ? this._localStartTimeCorrelation = {
                                local: this._now,
                                remote: 1e3 * r[0].start
                            } : u > a + this._extrapolatedWindowDuration && (this._localStartTimeCorrelation = {
                                local: this._now,
                                remote: 1e3 * Math.max(r[0].start, a + this._extrapolatedWindowDuration)
                            })
                        } else this._localStartTimeCorrelation = {
                            local: this._now,
                            remote: 1e3 * (r[0].start + this._extrapolatedWindowDuration / 2)
                        };
                        var c = e.details.totalduration;
                        if (this._playbackType === E.default.LIVE) {
                            var d = e.details.targetduration, h = this.options.playback.hlsjsConfig || {},
                                f = h.liveSyncDurationCount || m.default.DefaultConfig.liveSyncDurationCount, p = d * f;
                            p <= c ? (c -= p, this._durationExcludesAfterLiveSyncPoint = !0) : this._durationExcludesAfterLiveSyncPoint = !1
                        }
                        c !== this._playableRegionDuration && (n = !0, this._playableRegionDuration = c);
                        var g = r[0].start + c, y = a + o;
                        if (g !== y) if (this._localEndTimeCorrelation) {
                            var v = this._localEndTimeCorrelation, b = this._now - v.local, _ = (v.remote + b) / 1e3;
                            _ > g ? this._localEndTimeCorrelation = {
                                local: this._now,
                                remote: 1e3 * g
                            } : _ < g - this._extrapolatedWindowDuration ? this._localEndTimeCorrelation = {
                                local: this._now,
                                remote: 1e3 * (g - this._extrapolatedWindowDuration)
                            } : _ > y && (this._localEndTimeCorrelation = {local: this._now, remote: 1e3 * y})
                        } else this._localEndTimeCorrelation = {local: this._now, remote: 1e3 * g};
                        n && this._onDurationChange(), i && this._onProgress()
                    }
                }, e.prototype._onFragmentLoaded = function (t, e) {
                    this.trigger(b.default.PLAYBACK_FRAGMENT_LOADED, e)
                }, e.prototype._onSubtitleLoaded = function () {
                    if (!this._ccIsSetup) {
                        this.trigger(b.default.PLAYBACK_SUBTITLE_AVAILABLE);
                        var t = this._playbackType === E.default.LIVE ? -1 : this.closedCaptionsTrackId;
                        this.closedCaptionsTrackId = t, this._ccIsSetup = !0
                    }
                }, e.prototype._onLevelSwitch = function (t, e) {
                    this.levels.length || this._fillLevels(), this.trigger(b.default.PLAYBACK_LEVEL_SWITCH_END), this.trigger(b.default.PLAYBACK_LEVEL_SWITCH, e);
                    var i = this._hls.levels[e.level];
                    i && (this.highDefinition = i.height >= 720 || i.bitrate / 1e3 >= 2e3, this.trigger(b.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition), this.trigger(b.default.PLAYBACK_BITRATE, {
                        height: i.height,
                        width: i.width,
                        bandwidth: i.bitrate,
                        bitrate: i.bitrate,
                        level: e.level
                    }))
                }, e.prototype.getPlaybackType = function () {
                    return this._playbackType
                }, e.prototype.isSeekEnabled = function () {
                    return this._playbackType === E.default.VOD || this.dvrEnabled
                }, (0, d.default)(e, [{
                    key: "dvrEnabled", get: function () {
                        return this._durationExcludesAfterLiveSyncPoint && this._duration >= this._minDvrSize && this.getPlaybackType() === E.default.LIVE
                    }
                }]), e
            }(g.default);
        e.default = L, L.canPlay = function (t, e) {
            var i = t.split("?")[0].match(/.*\.(.*)$/) || [],
                n = i.length > 1 && "m3u8" === i[1].toLowerCase() || "application/x-mpegURL" === e || "application/vnd.apple.mpegurl" === e;
            return !(!m.default.isSupported() || !n)
        }, t.exports = e.default
    }, function (t, e, i) {
        !function (e, i) {
            t.exports = i()
        }(0, function () {
            return function (t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var r = i[n] = {i: n, l: !1, exports: {}};
                    return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
                }

                var i = {};
                return e.m = t, e.c = i, e.d = function (t, i, n) {
                    e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
                }, e.n = function (t) {
                    var i = t && t.__esModule ? function () {
                        return t.default
                    } : function () {
                        return t
                    };
                    return e.d(i, "a", i), i
                }, e.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "/dist/", e(e.s = 8)
            }([function (t, e, i) {
                "use strict";

                function n() {
                }

                function r(t, e) {
                    return e = "[" + t + "] > " + e
                }

                function a(t) {
                    var e = self.console[t];
                    return e ? function () {
                        for (var i = arguments.length, n = Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                        n[0] && (n[0] = r(t, n[0])), e.apply(self.console, n)
                    } : n
                }

                function o(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    i.forEach(function (e) {
                        u[e] = t[e] ? t[e].bind(t) : a(e)
                    })
                }

                i.d(e, "a", function () {
                    return c
                }), i.d(e, "b", function () {
                    return d
                });
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, l = {trace: n, debug: n, log: n, warn: n, info: n, error: n}, u = l, c = function (t) {
                    if (!0 === t || "object" === (void 0 === t ? "undefined" : s(t))) {
                        o(t, "debug", "log", "info", "warn", "error");
                        try {
                            u.log()
                        } catch (t) {
                            u = l
                        }
                    } else u = l
                }, d = u
            }, function (t, e, i) {
                "use strict";
                e.a = {
                    MEDIA_ATTACHING: "hlsMediaAttaching",
                    MEDIA_ATTACHED: "hlsMediaAttached",
                    MEDIA_DETACHING: "hlsMediaDetaching",
                    MEDIA_DETACHED: "hlsMediaDetached",
                    BUFFER_RESET: "hlsBufferReset",
                    BUFFER_CODECS: "hlsBufferCodecs",
                    BUFFER_CREATED: "hlsBufferCreated",
                    BUFFER_APPENDING: "hlsBufferAppending",
                    BUFFER_APPENDED: "hlsBufferAppended",
                    BUFFER_EOS: "hlsBufferEos",
                    BUFFER_FLUSHING: "hlsBufferFlushing",
                    BUFFER_FLUSHED: "hlsBufferFlushed",
                    MANIFEST_LOADING: "hlsManifestLoading",
                    MANIFEST_LOADED: "hlsManifestLoaded",
                    MANIFEST_PARSED: "hlsManifestParsed",
                    LEVEL_SWITCH: "hlsLevelSwitch",
                    LEVEL_SWITCHING: "hlsLevelSwitching",
                    LEVEL_SWITCHED: "hlsLevelSwitched",
                    LEVEL_LOADING: "hlsLevelLoading",
                    LEVEL_LOADED: "hlsLevelLoaded",
                    LEVEL_UPDATED: "hlsLevelUpdated",
                    LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                    AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                    AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
                    AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                    AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                    AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                    AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                    SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                    SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                    SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                    SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                    SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                    INIT_PTS_FOUND: "hlsInitPtsFound",
                    FRAG_LOADING: "hlsFragLoading",
                    FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                    FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                    FRAG_LOADED: "hlsFragLoaded",
                    FRAG_DECRYPTED: "hlsFragDecrypted",
                    FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                    FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                    FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                    FRAG_PARSING_DATA: "hlsFragParsingData",
                    FRAG_PARSED: "hlsFragParsed",
                    FRAG_BUFFERED: "hlsFragBuffered",
                    FRAG_CHANGED: "hlsFragChanged",
                    FPS_DROP: "hlsFpsDrop",
                    FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                    ERROR: "hlsError",
                    DESTROYING: "hlsDestroying",
                    KEY_LOADING: "hlsKeyLoading",
                    KEY_LOADED: "hlsKeyLoaded",
                    STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
                }
            }, function (t, e, i) {
                "use strict";
                i.d(e, "b", function () {
                    return n
                }), i.d(e, "a", function () {
                    return r
                });
                var n = {
                    NETWORK_ERROR: "networkError",
                    MEDIA_ERROR: "mediaError",
                    MUX_ERROR: "muxError",
                    OTHER_ERROR: "otherError"
                }, r = {
                    MANIFEST_LOAD_ERROR: "manifestLoadError",
                    MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                    MANIFEST_PARSING_ERROR: "manifestParsingError",
                    MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                    LEVEL_LOAD_ERROR: "levelLoadError",
                    LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                    LEVEL_SWITCH_ERROR: "levelSwitchError",
                    AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                    AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                    FRAG_LOAD_ERROR: "fragLoadError",
                    FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
                    FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                    FRAG_DECRYPT_ERROR: "fragDecryptError",
                    FRAG_PARSING_ERROR: "fragParsingError",
                    REMUX_ALLOC_ERROR: "remuxAllocError",
                    KEY_LOAD_ERROR: "keyLoadError",
                    KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                    BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                    BUFFER_APPEND_ERROR: "bufferAppendError",
                    BUFFER_APPENDING_ERROR: "bufferAppendingError",
                    BUFFER_STALLED_ERROR: "bufferStalledError",
                    BUFFER_FULL_ERROR: "bufferFullError",
                    BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                    BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
                    INTERNAL_EXCEPTION: "internalException"
                }
            }, function (t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                i.d(e, "b", function () {
                    return a
                });
                var r = function () {
                    function t() {
                        n(this, t)
                    }

                    return t.isHeader = function (t, e) {
                        return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                    }, t.isFooter = function (t, e) {
                        return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                    }, t.getID3Data = function (e, i) {
                        for (var n = i, r = 0; t.isHeader(e, i);) {
                            r += 10;
                            r += t._readSize(e, i + 6), t.isFooter(e, i + 10) && (r += 10), i += r
                        }
                        if (r > 0) return e.subarray(n, n + r)
                    }, t._readSize = function (t, e) {
                        var i = 0;
                        return i = (127 & t[e]) << 21, i |= (127 & t[e + 1]) << 14, i |= (127 & t[e + 2]) << 7, i |= 127 & t[e + 3]
                    }, t.getTimeStamp = function (e) {
                        for (var i = t.getID3Frames(e), n = 0; n < i.length; n++) {
                            var r = i[n];
                            if (t.isTimeStampFrame(r)) return t._readTimeStamp(r)
                        }
                    }, t.isTimeStampFrame = function (t) {
                        return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
                    }, t._getFrameData = function (e) {
                        var i = String.fromCharCode(e[0], e[1], e[2], e[3]), n = t._readSize(e, 4);
                        return {type: i, size: n, data: e.subarray(10, 10 + n)}
                    }, t.getID3Frames = function (e) {
                        for (var i = 0, n = []; t.isHeader(e, i);) {
                            var r = t._readSize(e, i + 6);
                            i += 10;
                            for (var a = i + r; i + 8 < a;) {
                                var o = t._getFrameData(e.subarray(i)), s = t._decodeFrame(o);
                                s && n.push(s), i += o.size + 10
                            }
                            t.isFooter(e, i) && (i += 10)
                        }
                        return n
                    }, t._decodeFrame = function (e) {
                        return "PRIV" === e.type ? t._decodePrivFrame(e) : "T" === e.type[0] ? t._decodeTextFrame(e) : "W" === e.type[0] ? t._decodeURLFrame(e) : void 0
                    }, t._readTimeStamp = function (t) {
                        if (8 === t.data.byteLength) {
                            var e = new Uint8Array(t.data), i = 1 & e[3],
                                n = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                            return n /= 45, i && (n += 47721858.84), Math.round(n)
                        }
                    }, t._decodePrivFrame = function (e) {
                        if (!(e.size < 2)) {
                            var i = t._utf8ArrayToStr(e.data, !0), n = new Uint8Array(e.data.subarray(i.length + 1));
                            return {key: e.type, info: i, data: n.buffer}
                        }
                    }, t._decodeTextFrame = function (e) {
                        if (!(e.size < 2)) {
                            if ("TXXX" === e.type) {
                                var i = 1, n = t._utf8ArrayToStr(e.data.subarray(i));
                                i += n.length + 1;
                                var r = t._utf8ArrayToStr(e.data.subarray(i));
                                return {key: e.type, info: n, data: r}
                            }
                            var a = t._utf8ArrayToStr(e.data.subarray(1));
                            return {key: e.type, data: a}
                        }
                    }, t._decodeURLFrame = function (e) {
                        if ("WXXX" === e.type) {
                            if (e.size < 2) return;
                            var i = 1, n = t._utf8ArrayToStr(e.data.subarray(i));
                            i += n.length + 1;
                            var r = t._utf8ArrayToStr(e.data.subarray(i));
                            return {key: e.type, info: n, data: r}
                        }
                        var a = t._utf8ArrayToStr(e.data);
                        return {key: e.type, data: a}
                    }, t._utf8ArrayToStr = function (t) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = t.length, n = void 0, r = void 0, a = void 0, o = "", s = 0; s < i;) {
                            if (0 === (n = t[s++]) && e) return o;
                            if (0 !== n && 3 !== n) switch (n >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    o += String.fromCharCode(n);
                                    break;
                                case 12:
                                case 13:
                                    r = t[s++], o += String.fromCharCode((31 & n) << 6 | 63 & r);
                                    break;
                                case 14:
                                    r = t[s++], a = t[s++], o += String.fromCharCode((15 & n) << 12 | (63 & r) << 6 | (63 & a) << 0)
                            }
                        }
                        return o
                    }, t
                }(), a = r._utf8ArrayToStr;
                e.a = r
            }, function (t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                var s = function () {
                    function t(e, i) {
                        n(this, t), this.subtle = e, this.aesIV = i
                    }

                    return t.prototype.decrypt = function (t, e) {
                        return this.subtle.decrypt({name: "AES-CBC", iv: this.aesIV}, e, t)
                    }, t
                }(), l = s, u = function () {
                    function t(e, i) {
                        r(this, t), this.subtle = e, this.key = i
                    }

                    return t.prototype.expandKey = function () {
                        return this.subtle.importKey("raw", this.key, {name: "AES-CBC"}, !1, ["encrypt", "decrypt"])
                    }, t
                }(), c = u, d = function () {
                    function t() {
                        a(this, t), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
                    }

                    return t.prototype.uint8ArrayToUint32Array_ = function (t) {
                        for (var e = new DataView(t), i = new Uint32Array(4), n = 0; n < 4; n++) i[n] = e.getUint32(4 * n);
                        return i
                    }, t.prototype.initTable = function () {
                        var t = this.sBox, e = this.invSBox, i = this.subMix, n = i[0], r = i[1], a = i[2], o = i[3],
                            s = this.invSubMix, l = s[0], u = s[1], c = s[2], d = s[3], h = new Uint32Array(256), f = 0,
                            p = 0, g = 0;
                        for (g = 0; g < 256; g++) h[g] = g < 128 ? g << 1 : g << 1 ^ 283;
                        for (g = 0; g < 256; g++) {
                            var y = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                            y = y >>> 8 ^ 255 & y ^ 99, t[f] = y, e[y] = f;
                            var m = h[f], v = h[m], b = h[v], _ = 257 * h[y] ^ 16843008 * y;
                            n[f] = _ << 24 | _ >>> 8, r[f] = _ << 16 | _ >>> 16, a[f] = _ << 8 | _ >>> 24, o[f] = _, _ = 16843009 * b ^ 65537 * v ^ 257 * m ^ 16843008 * f, l[y] = _ << 24 | _ >>> 8, u[y] = _ << 16 | _ >>> 16, c[y] = _ << 8 | _ >>> 24, d[y] = _, f ? (f = m ^ h[h[h[b ^ m]]], p ^= h[h[p]]) : f = p = 1
                        }
                    }, t.prototype.expandKey = function (t) {
                        for (var e = this.uint8ArrayToUint32Array_(t), i = !0, n = 0; n < e.length && i;) i = e[n] === this.key[n], n++;
                        if (!i) {
                            this.key = e;
                            var r = this.keySize = e.length;
                            if (4 !== r && 6 !== r && 8 !== r) throw new Error("Invalid aes key size=" + r);
                            var a = this.ksRows = 4 * (r + 6 + 1), o = void 0, s = void 0,
                                l = this.keySchedule = new Uint32Array(a), u = this.invKeySchedule = new Uint32Array(a),
                                c = this.sBox, d = this.rcon, h = this.invSubMix, f = h[0], p = h[1], g = h[2],
                                y = h[3], m = void 0, v = void 0;
                            for (o = 0; o < a; o++) o < r ? m = l[o] = e[o] : (v = m, o % r == 0 ? (v = v << 8 | v >>> 24, v = c[v >>> 24] << 24 | c[v >>> 16 & 255] << 16 | c[v >>> 8 & 255] << 8 | c[255 & v], v ^= d[o / r | 0] << 24) : r > 6 && o % r == 4 && (v = c[v >>> 24] << 24 | c[v >>> 16 & 255] << 16 | c[v >>> 8 & 255] << 8 | c[255 & v]), l[o] = m = (l[o - r] ^ v) >>> 0);
                            for (s = 0; s < a; s++) o = a - s, v = 3 & s ? l[o] : l[o - 4], u[s] = s < 4 || o <= 4 ? v : f[c[v >>> 24]] ^ p[c[v >>> 16 & 255]] ^ g[c[v >>> 8 & 255]] ^ y[c[255 & v]], u[s] = u[s] >>> 0
                        }
                    }, t.prototype.networkToHostOrderSwap = function (t) {
                        return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                    }, t.prototype.decrypt = function (t, e, i) {
                        for (var n, r, a = this.keySize + 6, o = this.invKeySchedule, s = this.invSBox, l = this.invSubMix, u = l[0], c = l[1], d = l[2], h = l[3], f = this.uint8ArrayToUint32Array_(i), p = f[0], g = f[1], y = f[2], m = f[3], v = new Int32Array(t), b = new Int32Array(v.length), _ = void 0, E = void 0, T = void 0, A = void 0, S = void 0, L = void 0, R = void 0, k = void 0, C = void 0, w = void 0, I = void 0, D = void 0, O = this.networkToHostOrderSwap; e < v.length;) {
                            for (C = O(v[e]), w = O(v[e + 1]), I = O(v[e + 2]), D = O(v[e + 3]), S = C ^ o[0], L = D ^ o[1], R = I ^ o[2], k = w ^ o[3], n = 4, r = 1; r < a; r++) _ = u[S >>> 24] ^ c[L >> 16 & 255] ^ d[R >> 8 & 255] ^ h[255 & k] ^ o[n], E = u[L >>> 24] ^ c[R >> 16 & 255] ^ d[k >> 8 & 255] ^ h[255 & S] ^ o[n + 1], T = u[R >>> 24] ^ c[k >> 16 & 255] ^ d[S >> 8 & 255] ^ h[255 & L] ^ o[n + 2], A = u[k >>> 24] ^ c[S >> 16 & 255] ^ d[L >> 8 & 255] ^ h[255 & R] ^ o[n + 3], S = _, L = E, R = T, k = A, n += 4;
                            _ = s[S >>> 24] << 24 ^ s[L >> 16 & 255] << 16 ^ s[R >> 8 & 255] << 8 ^ s[255 & k] ^ o[n], E = s[L >>> 24] << 24 ^ s[R >> 16 & 255] << 16 ^ s[k >> 8 & 255] << 8 ^ s[255 & S] ^ o[n + 1], T = s[R >>> 24] << 24 ^ s[k >> 16 & 255] << 16 ^ s[S >> 8 & 255] << 8 ^ s[255 & L] ^ o[n + 2], A = s[k >>> 24] << 24 ^ s[S >> 16 & 255] << 16 ^ s[L >> 8 & 255] << 8 ^ s[255 & R] ^ o[n + 3], n += 3, b[e] = O(_ ^ p), b[e + 1] = O(A ^ g), b[e + 2] = O(T ^ y), b[e + 3] = O(E ^ m), p = C, g = w, y = I, m = D, e += 4
                        }
                        return b.buffer
                    }, t.prototype.destroy = function () {
                        this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
                    }, t
                }(), h = d, f = i(2), p = i(0), g = function () {
                    function t(e, i) {
                        o(this, t), this.observer = e, this.config = i, this.logEnabled = !0;
                        try {
                            var n = crypto || self.crypto;
                            this.subtle = n.subtle || n.webkitSubtle
                        } catch (t) {
                        }
                        this.disableWebCrypto = !this.subtle
                    }

                    return t.prototype.isSync = function () {
                        return this.disableWebCrypto && this.config.enableSoftwareAES
                    }, t.prototype.decrypt = function (t, e, i, n) {
                        var r = this;
                        if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                            this.logEnabled && (p.b.log("JS AES decrypt"), this.logEnabled = !1);
                            var a = this.decryptor;
                            a || (this.decryptor = a = new h), a.expandKey(e), n(a.decrypt(t, 0, i))
                        } else {
                            this.logEnabled && (p.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                            var o = this.subtle;
                            this.key !== e && (this.key = e, this.fastAesKey = new c(o, e)), this.fastAesKey.expandKey().then(function (a) {
                                new l(o, i).decrypt(t, a).catch(function (a) {
                                    r.onWebCryptoError(a, t, e, i, n)
                                }).then(function (t) {
                                    n(t)
                                })
                            }).catch(function (a) {
                                r.onWebCryptoError(a, t, e, i, n)
                            })
                        }
                    }, t.prototype.onWebCryptoError = function (t, e, i, n, r) {
                        this.config.enableSoftwareAES ? (p.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(e, i, n, r)) : (p.b.error("decrypting error : " + t.message), this.observer.trigger(Event.ERROR, {
                            type: f.b.MEDIA_ERROR,
                            details: f.a.FRAG_DECRYPT_ERROR,
                            fatal: !0,
                            reason: t.message
                        }))
                    }, t.prototype.destroy = function () {
                        var t = this.decryptor;
                        t && (t.destroy(), this.decryptor = void 0)
                    }, t
                }();
                e.a = g
            }, function (t, e) {
                function i() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }

                function n(t) {
                    return "function" == typeof t
                }

                function r(t) {
                    return "number" == typeof t
                }

                function a(t) {
                    return "object" == typeof t && null !== t
                }

                function o(t) {
                    return void 0 === t
                }

                t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function (t) {
                    if (!r(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
                    return this._maxListeners = t, this
                }, i.prototype.emit = function (t) {
                    var e, i, r, s, l, u;
                    if (this._events || (this._events = {}), "error" === t && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
                        if ((e = arguments[1]) instanceof Error) throw e;
                        var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                        throw c.context = e, c
                    }
                    if (i = this._events[t], o(i)) return !1;
                    if (n(i)) switch (arguments.length) {
                        case 1:
                            i.call(this);
                            break;
                        case 2:
                            i.call(this, arguments[1]);
                            break;
                        case 3:
                            i.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            s = Array.prototype.slice.call(arguments, 1), i.apply(this, s)
                    } else if (a(i)) for (s = Array.prototype.slice.call(arguments, 1), u = i.slice(), r = u.length, l = 0; l < r; l++) u[l].apply(this, s);
                    return !0
                }, i.prototype.addListener = function (t, e) {
                    var r;
                    if (!n(e)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? a(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, a(this._events[t]) && !this._events[t].warned && (r = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[t].length > r && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
                }, i.prototype.on = i.prototype.addListener, i.prototype.once = function (t, e) {
                    function i() {
                        this.removeListener(t, i), r || (r = !0, e.apply(this, arguments))
                    }

                    if (!n(e)) throw TypeError("listener must be a function");
                    var r = !1;
                    return i.listener = e, this.on(t, i), this
                }, i.prototype.removeListener = function (t, e) {
                    var i, r, o, s;
                    if (!n(e)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[t]) return this;
                    if (i = this._events[t], o = i.length, r = -1, i === e || n(i.listener) && i.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (a(i)) {
                        for (s = o; s-- > 0;) if (i[s] === e || i[s].listener && i[s].listener === e) {
                            r = s;
                            break
                        }
                        if (r < 0) return this;
                        1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e)
                    }
                    return this
                }, i.prototype.removeAllListeners = function (t) {
                    var e, i;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
                    if (0 === arguments.length) {
                        for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (i = this._events[t], n(i)) this.removeListener(t, i); else if (i) for (; i.length;) this.removeListener(t, i[i.length - 1]);
                    return delete this._events[t], this
                }, i.prototype.listeners = function (t) {
                    return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
                }, i.prototype.listenerCount = function (t) {
                    if (this._events) {
                        var e = this._events[t];
                        if (n(e)) return 1;
                        if (e) return e.length
                    }
                    return 0
                }, i.listenerCount = function (t, e) {
                    return t.listenerCount(e)
                }
            }, function (t, e, i) {
                !function (e) {
                    var i = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                        n = /^([^\/;?#]*)(.*)$/, r = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
                        o = {
                            buildAbsoluteURL: function (t, e, i) {
                                if (i = i || {}, t = t.trim(), !(e = e.trim())) {
                                    if (!i.alwaysNormalize) return t;
                                    var r = this.parseURL(t);
                                    if (!s) throw new Error("Error trying to parse base URL.");
                                    return r.path = o.normalizePath(r.path), o.buildURLFromParts(r)
                                }
                                var a = this.parseURL(e);
                                if (!a) throw new Error("Error trying to parse relative URL.");
                                if (a.scheme) return i.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : e;
                                var s = this.parseURL(t);
                                if (!s) throw new Error("Error trying to parse base URL.");
                                if (!s.netLoc && s.path && "/" !== s.path[0]) {
                                    var l = n.exec(s.path);
                                    s.netLoc = l[1], s.path = l[2]
                                }
                                s.netLoc && !s.path && (s.path = "/");
                                var u = {
                                    scheme: s.scheme,
                                    netLoc: a.netLoc,
                                    path: null,
                                    params: a.params,
                                    query: a.query,
                                    fragment: a.fragment
                                };
                                if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0])) if (a.path) {
                                    var c = s.path, d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
                                    u.path = o.normalizePath(d)
                                } else u.path = s.path, a.params || (u.params = s.params, a.query || (u.query = s.query));
                                return null === u.path && (u.path = i.alwaysNormalize ? o.normalizePath(a.path) : a.path), o.buildURLFromParts(u)
                            }, parseURL: function (t) {
                                var e = i.exec(t);
                                return e ? {
                                    scheme: e[1] || "",
                                    netLoc: e[2] || "",
                                    path: e[3] || "",
                                    params: e[4] || "",
                                    query: e[5] || "",
                                    fragment: e[6] || ""
                                } : null
                            }, normalizePath: function (t) {
                                for (t = t.split("").reverse().join("").replace(r, ""); t.length !== (t = t.replace(a, "")).length;) ;
                                return t.split("").reverse().join("")
                            }, buildURLFromParts: function (t) {
                                return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                            }
                        };
                    t.exports = o
                }()
            }, function (t, e, i) {
                "use strict";

                function n(t, e, i, n) {
                    var r, a, o, s, l, u = navigator.userAgent.toLowerCase(), c = n,
                        d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    return r = 1 + ((192 & e[i + 2]) >>> 6), (a = (60 & e[i + 2]) >>> 2) > d.length - 1 ? void t.trigger(Event.ERROR, {
                        type: L.b.MEDIA_ERROR,
                        details: L.a.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + a
                    }) : (s = (1 & e[i + 2]) << 2, s |= (192 & e[i + 3]) >>> 6, k.b.log("manifest codec:" + n + ",ADTS data:type:" + r + ",sampleingIndex:" + a + "[" + d[a] + "Hz],channelConfig:" + s), /firefox/i.test(u) ? a >= 6 ? (r = 5, l = new Array(4), o = a - 3) : (r = 2, l = new Array(2), o = a) : -1 !== u.indexOf("android") ? (r = 2, l = new Array(2), o = a) : (r = 5, l = new Array(4), n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && a >= 6 ? o = a - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (a >= 6 && 1 === s || /vivaldi/i.test(u)) || !n && 1 === s) && (r = 2, l = new Array(2)), o = a)), l[0] = r << 3, l[0] |= (14 & a) >> 1, l[1] |= (1 & a) << 7, l[1] |= s << 3, 5 === r && (l[1] |= (14 & o) >> 1, l[2] = (1 & o) << 7, l[2] |= 8, l[3] = 0), {
                        config: l,
                        samplerate: d[a],
                        channelCount: s,
                        codec: "mp4a.40." + r,
                        manifestCodec: c
                    })
                }

                function r(t, e) {
                    return 255 === t[e] && 240 == (246 & t[e + 1])
                }

                function a(t, e) {
                    return 1 & t[e + 1] ? 7 : 9
                }

                function o(t, e) {
                    return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
                }

                function s(t, e) {
                    return !!(e + 1 < t.length && r(t, e))
                }

                function l(t, e) {
                    if (e + 1 < t.length && r(t, e)) {
                        var i = a(t, e), n = i;
                        e + 5 < t.length && (n = o(t, e));
                        var s = e + n;
                        if (s === t.length || s + 1 < t.length && r(t, s)) return !0
                    }
                    return !1
                }

                function u(t, e, i, r, a) {
                    if (!t.samplerate) {
                        var o = n(e, i, r, a);
                        t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, k.b.log("parsed codec:" + t.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)
                    }
                }

                function c(t) {
                    return 9216e4 / t
                }

                function d(t, e, i, n, r) {
                    var s, l, u, c = t.length;
                    if (s = a(t, e), l = o(t, e), (l -= s) > 0 && e + s + l <= c) return u = i + n * r, {
                        headerLength: s,
                        frameLength: l,
                        stamp: u
                    }
                }

                function h(t, e, i, n, r) {
                    var a = c(t.samplerate), o = d(e, i, n, r, a);
                    if (o) {
                        var s = o.stamp, l = o.headerLength, u = o.frameLength,
                            h = {unit: e.subarray(i + l, i + l + u), pts: s, dts: s};
                        return t.samples.push(h), t.len += u, {sample: h, length: u + l}
                    }
                }

                function f(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function p(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function g(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function y(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function m(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function v(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function b(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function _(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function E(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function T(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function A(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                var S = i(1), L = i(2), R = i(4), k = i(0), C = i(3), w = function () {
                    function t(e, i, n) {
                        f(this, t), this.observer = e, this.config = n, this.remuxer = i
                    }

                    return t.prototype.resetInitSegment = function (t, e, i, n) {
                        this._audioTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: 0,
                            sequenceNumber: 0,
                            isAAC: !0,
                            samples: [],
                            len: 0,
                            manifestCodec: e,
                            duration: n,
                            inputTimeScale: 9e4
                        }
                    }, t.prototype.resetTimeStamp = function () {
                    }, t.probe = function (t) {
                        if (!t) return !1;
                        for (var e = C.a.getID3Data(t, 0) || [], i = e.length, n = t.length; i < n; i++) if (l(t, i)) return k.b.log("ADTS sync word found !"), !0;
                        return !1
                    }, t.prototype.append = function (t, e, i, n) {
                        for (var r = this._audioTrack, a = C.a.getID3Data(t, 0) || [], o = C.a.getTimeStamp(a), l = o ? 90 * o : 9e4 * e, c = 0, d = l, f = t.length, p = a.length, g = [{
                            pts: d,
                            dts: d,
                            data: a
                        }]; p < f - 1;) if (s(t, p) && p + 5 < f) {
                            u(r, this.observer, t, p, r.manifestCodec);
                            var y = h(r, t, p, l, c);
                            if (!y) {
                                k.b.log("Unable to parse AAC frame");
                                break
                            }
                            p += y.length, d = y.sample.pts, c++
                        } else C.a.isHeader(t, p) ? (a = C.a.getID3Data(t, p), g.push({
                            pts: d,
                            dts: d,
                            data: a
                        }), p += a.length) : p++;
                        this.remuxer.remux(r, {samples: []}, {samples: g, inputTimeScale: 9e4}, {samples: []}, e, i, n)
                    }, t.prototype.destroy = function () {
                    }, t
                }(), I = w, D = Math.pow(2, 32) - 1, O = function () {
                    function t(e, i) {
                        p(this, t), this.observer = e, this.remuxer = i
                    }

                    return t.prototype.resetTimeStamp = function (t) {
                        this.initPTS = t
                    }, t.prototype.resetInitSegment = function (e, i, n, r) {
                        if (e && e.byteLength) {
                            var a = this.initData = t.parseInitSegment(e);
                            null == i && (i = "mp4a.40.5"), null == n && (n = "avc1.42e01e");
                            var o = {};
                            a.audio && a.video ? o.audiovideo = {
                                container: "video/mp4",
                                codec: i + "," + n,
                                initSegment: r ? e : null
                            } : (a.audio && (o.audio = {
                                container: "audio/mp4",
                                codec: i,
                                initSegment: r ? e : null
                            }), a.video && (o.video = {
                                container: "video/mp4",
                                codec: n,
                                initSegment: r ? e : null
                            })), this.observer.trigger(S.a.FRAG_PARSING_INIT_SEGMENT, {tracks: o})
                        } else i && (this.audioCodec = i), n && (this.videoCodec = n)
                    }, t.probe = function (e) {
                        return t.findBox({data: e, start: 0, end: Math.min(e.length, 16384)}, ["moof"]).length > 0
                    }, t.bin2str = function (t) {
                        return String.fromCharCode.apply(null, t)
                    }, t.readUint32 = function (t, e) {
                        t.data && (e += t.start, t = t.data);
                        var i = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
                        return i < 0 ? 4294967296 + i : i
                    }, t.writeUint32 = function (t, e, i) {
                        t.data && (e += t.start, t = t.data), t[e] = i >> 24, t[e + 1] = i >> 16 & 255, t[e + 2] = i >> 8 & 255, t[e + 3] = 255 & i
                    }, t.findBox = function (e, i) {
                        var n, r, a, o, s, l, u, c = [];
                        if (e.data ? (l = e.start, o = e.end, e = e.data) : (l = 0, o = e.byteLength), !i.length) return null;
                        for (n = l; n < o;) r = t.readUint32(e, n), a = t.bin2str(e.subarray(n + 4, n + 8)), u = r > 1 ? n + r : o, a === i[0] && (1 === i.length ? c.push({
                            data: e,
                            start: n + 8,
                            end: u
                        }) : (s = t.findBox({
                            data: e,
                            start: n + 8,
                            end: u
                        }, i.slice(1)), s.length && (c = c.concat(s)))), n = u;
                        return c
                    }, t.parseInitSegment = function (e) {
                        var i = [];
                        return t.findBox(e, ["moov", "trak"]).forEach(function (e) {
                            var n = t.findBox(e, ["tkhd"])[0];
                            if (n) {
                                var r = n.data[n.start], a = 0 === r ? 12 : 20, o = t.readUint32(n, a),
                                    s = t.findBox(e, ["mdia", "mdhd"])[0];
                                if (s) {
                                    r = s.data[s.start], a = 0 === r ? 12 : 20;
                                    var l = t.readUint32(s, a), u = t.findBox(e, ["mdia", "hdlr"])[0];
                                    if (u) {
                                        var c = t.bin2str(u.data.subarray(u.start + 8, u.start + 12)),
                                            d = {soun: "audio", vide: "video"}[c];
                                        if (d) {
                                            var h = t.findBox(e, ["mdia", "minf", "stbl", "stsd"]);
                                            if (h.length) {
                                                h = h[0];
                                                var f = t.bin2str(h.data.subarray(h.start + 12, h.start + 16));
                                                k.b.log("MP4Demuxer:" + d + ":" + f + " found")
                                            }
                                            i[o] = {timescale: l, type: d}, i[d] = {timescale: l, id: o}
                                        }
                                    }
                                }
                            }
                        }), i
                    }, t.getStartDTS = function (e, i) {
                        var n, r, a;
                        return n = t.findBox(i, ["moof", "traf"]), r = [].concat.apply([], n.map(function (i) {
                            return t.findBox(i, ["tfhd"]).map(function (n) {
                                var r, a;
                                return r = t.readUint32(n, 4), a = e[r].timescale || 9e4, t.findBox(i, ["tfdt"]).map(function (e) {
                                    var i, n;
                                    return i = e.data[e.start], n = t.readUint32(e, 4), 1 === i && (n *= Math.pow(2, 32), n += t.readUint32(e, 8)), n
                                })[0] / a
                            })
                        })), a = Math.min.apply(null, r), isFinite(a) ? a : 0
                    }, t.offsetStartDTS = function (e, i, n) {
                        t.findBox(i, ["moof", "traf"]).map(function (i) {
                            return t.findBox(i, ["tfhd"]).map(function (r) {
                                var a = t.readUint32(r, 4), o = e[a].timescale || 9e4;
                                t.findBox(i, ["tfdt"]).map(function (e) {
                                    var i = e.data[e.start], r = t.readUint32(e, 4);
                                    if (0 === i) t.writeUint32(e, 4, r - n * o); else {
                                        r *= Math.pow(2, 32), r += t.readUint32(e, 8), r -= n * o, r = Math.max(r, 0);
                                        var a = Math.floor(r / (D + 1)), s = Math.floor(r % (D + 1));
                                        t.writeUint32(e, 4, a), t.writeUint32(e, 8, s)
                                    }
                                })
                            })
                        })
                    }, t.prototype.append = function (e, i, n, r) {
                        var a = this.initData;
                        a || (this.resetInitSegment(e, this.audioCodec, this.videoCodec), a = this.initData);
                        var o = void 0, s = this.initPTS;
                        if (void 0 === s) {
                            var l = t.getStartDTS(a, e);
                            this.initPTS = s = l - i, this.observer.trigger(S.a.INIT_PTS_FOUND, {initPTS: s})
                        }
                        t.offsetStartDTS(a, e, s), o = t.getStartDTS(a, e), this.remuxer.remux(a.audio, a.video, null, null, o, n, r, e)
                    }, t.prototype.destroy = function () {
                    }, t
                }(), P = O, x = {
                    BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                    SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                    SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
                    BytesInSlot: [0, 1, 1, 4],
                    appendFrame: function (t, e, i, n, r) {
                        if (!(i + 24 > e.length)) {
                            var a = this.parseHeader(e, i);
                            if (a && i + a.frameLength <= e.length) {
                                var o = 9e4 * a.samplesPerFrame / a.sampleRate, s = n + r * o,
                                    l = {unit: e.subarray(i, i + a.frameLength), pts: s, dts: s};
                                return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(l), t.len += a.frameLength, {
                                    sample: l,
                                    length: a.frameLength
                                }
                            }
                        }
                    },
                    parseHeader: function (t, e) {
                        var i = t[e + 1] >> 3 & 3, n = t[e + 1] >> 1 & 3, r = t[e + 2] >> 4 & 15, a = t[e + 2] >> 2 & 3,
                            o = t[e + 2] >> 1 & 1;
                        if (1 !== i && 0 !== r && 15 !== r && 3 !== a) {
                            var s = 3 === i ? 3 - n : 3 === n ? 3 : 4, l = 1e3 * x.BitratesMap[14 * s + r - 1],
                                u = 3 === i ? 0 : 2 === i ? 1 : 2, c = x.SamplingRateMap[3 * u + a],
                                d = t[e + 3] >> 6 == 3 ? 1 : 2, h = x.SamplesCoefficients[i][n], f = x.BytesInSlot[n],
                                p = 8 * h * f;
                            return {
                                sampleRate: c,
                                channelCount: d,
                                frameLength: parseInt(h * l / c + o, 10) * f,
                                samplesPerFrame: p
                            }
                        }
                    },
                    isHeaderPattern: function (t, e) {
                        return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
                    },
                    isHeader: function (t, e) {
                        return !!(e + 1 < t.length && this.isHeaderPattern(t, e))
                    },
                    probe: function (t, e) {
                        if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
                            var i = this.parseHeader(t, e), n = 4;
                            i && i.frameLength && (n = i.frameLength);
                            var r = e + n;
                            if (r === t.length || r + 1 < t.length && this.isHeaderPattern(t, r)) return !0
                        }
                        return !1
                    }
                }, N = x, M = function () {
                    function t(e) {
                        g(this, t), this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                    }

                    return t.prototype.loadWord = function () {
                        var t = this.data, e = this.bytesAvailable, i = t.byteLength - e, n = new Uint8Array(4),
                            r = Math.min(4, e);
                        if (0 === r) throw new Error("no bytes available");
                        n.set(t.subarray(i, i + r)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = 8 * r, this.bytesAvailable -= r
                    }, t.prototype.skipBits = function (t) {
                        var e;
                        this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, e = t >> 3, t -= e >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                    }, t.prototype.readBits = function (t) {
                        var e = Math.min(this.bitsAvailable, t), i = this.word >>> 32 - e;
                        return t > 32 && k.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), e = t - e, e > 0 && this.bitsAvailable ? i << e | this.readBits(e) : i
                    }, t.prototype.skipLZ = function () {
                        var t;
                        for (t = 0; t < this.bitsAvailable; ++t) if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                        return this.loadWord(), t + this.skipLZ()
                    }, t.prototype.skipUEG = function () {
                        this.skipBits(1 + this.skipLZ())
                    }, t.prototype.skipEG = function () {
                        this.skipBits(1 + this.skipLZ())
                    }, t.prototype.readUEG = function () {
                        var t = this.skipLZ();
                        return this.readBits(t + 1) - 1
                    }, t.prototype.readEG = function () {
                        var t = this.readUEG();
                        return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                    }, t.prototype.readBoolean = function () {
                        return 1 === this.readBits(1)
                    }, t.prototype.readUByte = function () {
                        return this.readBits(8)
                    }, t.prototype.readUShort = function () {
                        return this.readBits(16)
                    }, t.prototype.readUInt = function () {
                        return this.readBits(32)
                    }, t.prototype.skipScalingList = function (t) {
                        var e, i, n = 8, r = 8;
                        for (e = 0; e < t; e++) 0 !== r && (i = this.readEG(), r = (n + i + 256) % 256), n = 0 === r ? n : r
                    }, t.prototype.readSPS = function () {
                        var t, e, i, n, r, a, o, s = 0, l = 0, u = 0, c = 0, d = this.readUByte.bind(this),
                            h = this.readBits.bind(this), f = this.readUEG.bind(this), p = this.readBoolean.bind(this),
                            g = this.skipBits.bind(this), y = this.skipEG.bind(this), m = this.skipUEG.bind(this),
                            v = this.skipScalingList.bind(this);
                        if (d(), t = d(), h(5), g(3), d(), m(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
                            var b = f();
                            if (3 === b && g(1), m(), m(), g(1), p()) for (a = 3 !== b ? 8 : 12, o = 0; o < a; o++) p() && v(o < 6 ? 16 : 64)
                        }
                        m();
                        var _ = f();
                        if (0 === _) f(); else if (1 === _) for (g(1), y(), y(), e = f(), o = 0; o < e; o++) y();
                        m(), g(1), i = f(), n = f(), r = h(1), 0 === r && g(1), g(1), p() && (s = f(), l = f(), u = f(), c = f());
                        var E = [1, 1];
                        if (p() && p()) {
                            switch (d()) {
                                case 1:
                                    E = [1, 1];
                                    break;
                                case 2:
                                    E = [12, 11];
                                    break;
                                case 3:
                                    E = [10, 11];
                                    break;
                                case 4:
                                    E = [16, 11];
                                    break;
                                case 5:
                                    E = [40, 33];
                                    break;
                                case 6:
                                    E = [24, 11];
                                    break;
                                case 7:
                                    E = [20, 11];
                                    break;
                                case 8:
                                    E = [32, 11];
                                    break;
                                case 9:
                                    E = [80, 33];
                                    break;
                                case 10:
                                    E = [18, 11];
                                    break;
                                case 11:
                                    E = [15, 11];
                                    break;
                                case 12:
                                    E = [64, 33];
                                    break;
                                case 13:
                                    E = [160, 99];
                                    break;
                                case 14:
                                    E = [4, 3];
                                    break;
                                case 15:
                                    E = [3, 2];
                                    break;
                                case 16:
                                    E = [2, 1];
                                    break;
                                case 255:
                                    E = [d() << 8 | d(), d() << 8 | d()]
                            }
                        }
                        return {
                            width: Math.ceil(16 * (i + 1) - 2 * s - 2 * l),
                            height: (2 - r) * (n + 1) * 16 - (r ? 2 : 4) * (u + c),
                            pixelRatio: E
                        }
                    }, t.prototype.readSliceType = function () {
                        return this.readUByte(), this.readUEG(), this.readUEG()
                    }, t
                }(), F = M, B = function () {
                    function t(e, i, n, r) {
                        y(this, t), this.decryptdata = n, this.discardEPB = r, this.decrypter = new R.a(e, i)
                    }

                    return t.prototype.decryptBuffer = function (t, e) {
                        this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e)
                    }, t.prototype.decryptAacSample = function (t, e, i, n) {
                        var r = t[e].unit, a = r.subarray(16, r.length - r.length % 16),
                            o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length), s = this;
                        this.decryptBuffer(o, function (a) {
                            a = new Uint8Array(a), r.set(a, 16), n || s.decryptAacSamples(t, e + 1, i)
                        })
                    }, t.prototype.decryptAacSamples = function (t, e, i) {
                        for (; ; e++) {
                            if (e >= t.length) return void i();
                            if (!(t[e].unit.length < 32)) {
                                var n = this.decrypter.isSync();
                                if (this.decryptAacSample(t, e, i, n), !n) return
                            }
                        }
                    }, t.prototype.getAvcEncryptedData = function (t) {
                        for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, i = new Int8Array(e), n = 0, r = 32; r <= t.length - 16; r += 160, n += 16) i.set(t.subarray(r, r + 16), n);
                        return i
                    }, t.prototype.getAvcDecryptedUnit = function (t, e) {
                        e = new Uint8Array(e);
                        for (var i = 0, n = 32; n <= t.length - 16; n += 160, i += 16) t.set(e.subarray(i, i + 16), n);
                        return t
                    }, t.prototype.decryptAvcSample = function (t, e, i, n, r, a) {
                        var o = this.discardEPB(r.data), s = this.getAvcEncryptedData(o), l = this;
                        this.decryptBuffer(s.buffer, function (s) {
                            r.data = l.getAvcDecryptedUnit(o, s), a || l.decryptAvcSamples(t, e, i + 1, n)
                        })
                    }, t.prototype.decryptAvcSamples = function (t, e, i, n) {
                        for (; ; e++, i = 0) {
                            if (e >= t.length) return void n();
                            for (var r = t[e].units; !(i >= r.length); i++) {
                                var a = r[i];
                                if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                                    var o = this.decrypter.isSync();
                                    if (this.decryptAvcSample(t, e, i, n, a, o), !o) return
                                }
                            }
                        }
                    }, t
                }(), U = B, G = {video: 0, audio: 1, id3: 2, text: 3}, K = function () {
                    function t(e, i, n, r) {
                        m(this, t), this.observer = e, this.config = n, this.typeSupported = r, this.remuxer = i, this.sampleAes = null
                    }

                    return t.prototype.setDecryptData = function (t) {
                        null != t && null != t.key && "SAMPLE-AES" === t.method ? this.sampleAes = new U(this.observer, this.config, t, this.discardEPB) : this.sampleAes = null
                    }, t.probe = function (e) {
                        var i = t._syncOffset(e);
                        return !(i < 0) && (i && k.b.warn("MPEG2-TS detected but first sync word found @ offset " + i + ", junk ahead ?"), !0)
                    }, t._syncOffset = function (t) {
                        for (var e = Math.min(1e3, t.length - 564), i = 0; i < e;) {
                            if (71 === t[i] && 71 === t[i + 188] && 71 === t[i + 376]) return i;
                            i++
                        }
                        return -1
                    }, t.createTrack = function (t, e) {
                        return {
                            container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                            type: t,
                            id: G[t],
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0,
                            dropped: "video" === t ? 0 : void 0,
                            isAAC: "audio" === t || void 0,
                            duration: "audio" === t ? e : void 0
                        }
                    }, t.prototype.resetInitSegment = function (e, i, n, r) {
                        this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video", r), this._audioTrack = t.createTrack("audio", r), this._id3Track = t.createTrack("id3", r), this._txtTrack = t.createTrack("text", r), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = i, this.videoCodec = n, this._duration = r
                    }, t.prototype.resetTimeStamp = function () {
                    }, t.prototype.append = function (e, i, n, r) {
                        var a, o, s, l, u, c = e.length, d = !1;
                        this.contiguous = n;
                        var h = this.pmtParsed, f = this._avcTrack, p = this._audioTrack, g = this._id3Track, y = f.pid,
                            m = p.pid, v = g.pid, b = this._pmtId, _ = f.pesData, E = p.pesData, T = g.pesData,
                            A = this._parsePAT, R = this._parsePMT, C = this._parsePES,
                            w = this._parseAVCPES.bind(this), I = this._parseAACPES.bind(this),
                            D = this._parseMPEGPES.bind(this), O = this._parseID3PES.bind(this), P = t._syncOffset(e);
                        for (c -= (c + P) % 188, a = P; a < c; a += 188) if (71 === e[a]) {
                            if (o = !!(64 & e[a + 1]), s = ((31 & e[a + 1]) << 8) + e[a + 2], (48 & e[a + 3]) >> 4 > 1) {
                                if ((l = a + 5 + e[a + 4]) === a + 188) continue
                            } else l = a + 4;
                            switch (s) {
                                case y:
                                    o && (_ && (u = C(_)) && w(u, !1), _ = {
                                        data: [],
                                        size: 0
                                    }), _ && (_.data.push(e.subarray(l, a + 188)), _.size += a + 188 - l);
                                    break;
                                case m:
                                    o && (E && (u = C(E)) && (p.isAAC ? I(u) : D(u)), E = {
                                        data: [],
                                        size: 0
                                    }), E && (E.data.push(e.subarray(l, a + 188)), E.size += a + 188 - l);
                                    break;
                                case v:
                                    o && (T && (u = C(T)) && O(u), T = {
                                        data: [],
                                        size: 0
                                    }), T && (T.data.push(e.subarray(l, a + 188)), T.size += a + 188 - l);
                                    break;
                                case 0:
                                    o && (l += e[l] + 1), b = this._pmtId = A(e, l);
                                    break;
                                case b:
                                    o && (l += e[l] + 1);
                                    var x = R(e, l, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                    y = x.avc, y > 0 && (f.pid = y), m = x.audio, m > 0 && (p.pid = m, p.isAAC = x.isAAC), v = x.id3, v > 0 && (g.pid = v), d && !h && (k.b.log("reparse from beginning"), d = !1, a = P - 188), h = this.pmtParsed = !0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    d = !0
                            }
                        } else this.observer.trigger(S.a.ERROR, {
                            type: L.b.MEDIA_ERROR,
                            details: L.a.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                        _ && (u = C(_)) ? (w(u, !0), f.pesData = null) : f.pesData = _, E && (u = C(E)) ? (p.isAAC ? I(u) : D(u), p.pesData = null) : (E && E.size && k.b.log("last AAC PES packet truncated,might overlap between fragments"), p.pesData = E), T && (u = C(T)) ? (O(u), g.pesData = null) : g.pesData = T, null == this.sampleAes ? this.remuxer.remux(p, f, g, this._txtTrack, i, n, r) : this.decryptAndRemux(p, f, g, this._txtTrack, i, n, r)
                    }, t.prototype.decryptAndRemux = function (t, e, i, n, r, a, o) {
                        if (t.samples && t.isAAC) {
                            var s = this;
                            this.sampleAes.decryptAacSamples(t.samples, 0, function () {
                                s.decryptAndRemuxAvc(t, e, i, n, r, a, o)
                            })
                        } else this.decryptAndRemuxAvc(t, e, i, n, r, a, o)
                    }, t.prototype.decryptAndRemuxAvc = function (t, e, i, n, r, a, o) {
                        if (e.samples) {
                            var s = this;
                            this.sampleAes.decryptAvcSamples(e.samples, 0, 0, function () {
                                s.remuxer.remux(t, e, i, n, r, a, o)
                            })
                        } else this.remuxer.remux(t, e, i, n, r, a, o)
                    }, t.prototype.destroy = function () {
                        this._initPTS = this._initDTS = void 0, this._duration = 0
                    }, t.prototype._parsePAT = function (t, e) {
                        return (31 & t[e + 10]) << 8 | t[e + 11]
                    }, t.prototype._parsePMT = function (t, e, i, n) {
                        var r, a, o, s, l = {audio: -1, avc: -1, id3: -1, isAAC: !0};
                        for (r = (15 & t[e + 1]) << 8 | t[e + 2], a = e + 3 + r - 4, o = (15 & t[e + 10]) << 8 | t[e + 11], e += 12 + o; e < a;) {
                            switch (s = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
                                case 207:
                                    if (!n) {
                                        k.b.log("unkown stream type:" + t[e]);
                                        break
                                    }
                                case 15:
                                    -1 === l.audio && (l.audio = s);
                                    break;
                                case 21:
                                    -1 === l.id3 && (l.id3 = s);
                                    break;
                                case 219:
                                    if (!n) {
                                        k.b.log("unkown stream type:" + t[e]);
                                        break
                                    }
                                case 27:
                                    -1 === l.avc && (l.avc = s);
                                    break;
                                case 3:
                                case 4:
                                    i ? -1 === l.audio && (l.audio = s, l.isAAC = !1) : k.b.log("MPEG audio found, not supported in this browser for now");
                                    break;
                                case 36:
                                    k.b.warn("HEVC stream type found, not supported for now");
                                    break;
                                default:
                                    k.b.log("unkown stream type:" + t[e])
                            }
                            e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
                        }
                        return l
                    }, t.prototype._parsePES = function (t) {
                        var e, i, n, r, a, o, s, l, u = 0, c = t.data;
                        if (!t || 0 === t.size) return null;
                        for (; c[0].length < 19 && c.length > 1;) {
                            var d = new Uint8Array(c[0].length + c[1].length);
                            d.set(c[0]), d.set(c[1], c[0].length), c[0] = d, c.splice(1, 1)
                        }
                        if (e = c[0], 1 === (e[0] << 16) + (e[1] << 8) + e[2]) {
                            if ((n = (e[4] << 8) + e[5]) && n > t.size - 6) return null;
                            i = e[7], 192 & i && (o = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, o > 4294967295 && (o -= 8589934592), 64 & i ? (s = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2, s > 4294967295 && (s -= 8589934592), o - s > 54e5 && (k.b.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them"), o = s)) : s = o), r = e[8], l = r + 9, t.size -= l, a = new Uint8Array(t.size);
                            for (var h = 0, f = c.length; h < f; h++) {
                                e = c[h];
                                var p = e.byteLength;
                                if (l) {
                                    if (l > p) {
                                        l -= p;
                                        continue
                                    }
                                    e = e.subarray(l), p -= l, l = 0
                                }
                                a.set(e, u), u += p
                            }
                            return n && (n -= r + 3), {data: a, pts: o, dts: s, len: n}
                        }
                        return null
                    }, t.prototype.pushAccesUnit = function (t, e) {
                        if (t.units.length && t.frame) {
                            var i = e.samples, n = i.length;
                            !this.config.forceKeyFrameOnDiscontinuity || !0 === t.key || e.sps && (n || this.contiguous) ? (t.id = n, i.push(t)) : e.dropped++
                        }
                        t.debug.length && k.b.log(t.pts + "/" + t.dts + ":" + t.debug)
                    }, t.prototype._parseAVCPES = function (t, e) {
                        var i, n, r, a = this, o = this._avcTrack, s = this._parseAVCNALu(t.data), l = this.avcSample,
                            u = !1, c = this.pushAccesUnit.bind(this), d = function (t, e, i, n) {
                                return {key: t, pts: e, dts: i, units: [], debug: n}
                            };
                        t.data = null, l && s.length && !o.audFound && (c(l, o), l = this.avcSample = d(!1, t.pts, t.dts, "")), s.forEach(function (e) {
                            switch (e.type) {
                                case 1:
                                    n = !0, l || (l = a.avcSample = d(!0, t.pts, t.dts, "")), l.frame = !0;
                                    var s = e.data;
                                    if (u && s.length > 4) {
                                        var h = new F(s).readSliceType();
                                        2 !== h && 4 !== h && 7 !== h && 9 !== h || (l.key = !0)
                                    }
                                    break;
                                case 5:
                                    n = !0, l || (l = a.avcSample = d(!0, t.pts, t.dts, "")), l.key = !0, l.frame = !0;
                                    break;
                                case 6:
                                    n = !0, i = new F(a.discardEPB(e.data)), i.readUByte();
                                    for (var f = 0, p = 0, g = !1, y = 0; !g && i.bytesAvailable > 1;) {
                                        f = 0;
                                        do {
                                            y = i.readUByte(), f += y
                                        } while (255 === y);
                                        p = 0;
                                        do {
                                            y = i.readUByte(), p += y
                                        } while (255 === y);
                                        if (4 === f && 0 !== i.bytesAvailable) {
                                            g = !0;
                                            if (181 === i.readUByte()) {
                                                if (49 === i.readUShort()) {
                                                    if (1195456820 === i.readUInt()) {
                                                        if (3 === i.readUByte()) {
                                                            var m = i.readUByte(), v = i.readUByte(), b = 31 & m,
                                                                _ = [m, v];
                                                            for (r = 0; r < b; r++) _.push(i.readUByte()), _.push(i.readUByte()), _.push(i.readUByte());
                                                            a._insertSampleInOrder(a._txtTrack.samples, {
                                                                type: 3,
                                                                pts: t.pts,
                                                                bytes: _
                                                            })
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (p < i.bytesAvailable) for (r = 0; r < p; r++) i.readUByte()
                                    }
                                    break;
                                case 7:
                                    if (n = !0, u = !0, !o.sps) {
                                        i = new F(e.data);
                                        var E = i.readSPS();
                                        o.width = E.width, o.height = E.height, o.pixelRatio = E.pixelRatio, o.sps = [e.data], o.duration = a._duration;
                                        var T = e.data.subarray(1, 4), A = "avc1.";
                                        for (r = 0; r < 3; r++) {
                                            var S = T[r].toString(16);
                                            S.length < 2 && (S = "0" + S), A += S
                                        }
                                        o.codec = A
                                    }
                                    break;
                                case 8:
                                    n = !0, o.pps || (o.pps = [e.data]);
                                    break;
                                case 9:
                                    n = !1, o.audFound = !0, l && c(l, o), l = a.avcSample = d(!1, t.pts, t.dts, "");
                                    break;
                                case 12:
                                    n = !1;
                                    break;
                                default:
                                    n = !1, l && (l.debug += "unknown NAL " + e.type + " ")
                            }
                            if (l && n) {
                                l.units.push(e)
                            }
                        }), e && l && (c(l, o), this.avcSample = null)
                    }, t.prototype._insertSampleInOrder = function (t, e) {
                        var i = t.length;
                        if (i > 0) {
                            if (e.pts >= t[i - 1].pts) t.push(e); else for (var n = i - 1; n >= 0; n--) if (e.pts < t[n].pts) {
                                t.splice(n, 0, e);
                                break
                            }
                        } else t.push(e)
                    }, t.prototype._getLastNalUnit = function () {
                        var t = this.avcSample, e = void 0;
                        if (!t || 0 === t.units.length) {
                            var i = this._avcTrack, n = i.samples;
                            t = n[n.length - 1]
                        }
                        if (t) {
                            var r = t.units;
                            e = r[r.length - 1]
                        }
                        return e
                    }, t.prototype._parseAVCNALu = function (t) {
                        var e, i, n, r, a, o = 0, s = t.byteLength, l = this._avcTrack, u = l.naluState || 0, c = u,
                            d = [], h = -1;
                        for (-1 === u && (h = 0, a = 31 & t[0], u = 0, o = 1); o < s;) if (e = t[o++], u) if (1 !== u) if (e) if (1 === e) {
                            if (h >= 0) n = {data: t.subarray(h, o - u - 1), type: a}, d.push(n); else {
                                var f = this._getLastNalUnit();
                                if (f && (c && o <= 4 - c && f.state && (f.data = f.data.subarray(0, f.data.byteLength - c)), (i = o - u - 1) > 0)) {
                                    var p = new Uint8Array(f.data.byteLength + i);
                                    p.set(f.data, 0), p.set(t.subarray(0, i), f.data.byteLength), f.data = p
                                }
                            }
                            o < s ? (r = 31 & t[o], h = o, a = r, u = 0) : u = -1
                        } else u = 0; else u = 3; else u = e ? 0 : 2; else u = e ? 0 : 1;
                        if (h >= 0 && u >= 0 && (n = {
                                data: t.subarray(h, s),
                                type: a,
                                state: u
                            }, d.push(n)), 0 === d.length) {
                            var g = this._getLastNalUnit();
                            if (g) {
                                var y = new Uint8Array(g.data.byteLength + t.byteLength);
                                y.set(g.data, 0), y.set(t, g.data.byteLength), g.data = y
                            }
                        }
                        return l.naluState = u, d
                    }, t.prototype.discardEPB = function (t) {
                        for (var e, i, n = t.byteLength, r = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2), a += 2) : a++;
                        if (0 === r.length) return t;
                        e = n - r.length, i = new Uint8Array(e);
                        var o = 0;
                        for (a = 0; a < e; o++, a++) o === r[0] && (o++, r.shift()), i[a] = t[o];
                        return i
                    }, t.prototype._parseAACPES = function (t) {
                        var e, i, n, r, a, o = this._audioTrack, l = t.data, d = t.pts, f = this.aacOverFlow,
                            p = this.aacLastPTS;
                        if (f) {
                            var g = new Uint8Array(f.byteLength + l.byteLength);
                            g.set(f, 0), g.set(l, f.byteLength), l = g
                        }
                        for (n = 0, a = l.length; n < a - 1 && !s(l, n); n++) ;
                        if (n) {
                            var y, m;
                            if (n < a - 1 ? (y = "AAC PES did not start with ADTS header,offset:" + n, m = !1) : (y = "no ADTS header found in AAC PES", m = !0), k.b.warn("parsing error:" + y), this.observer.trigger(S.a.ERROR, {
                                    type: L.b.MEDIA_ERROR,
                                    details: L.a.FRAG_PARSING_ERROR,
                                    fatal: m,
                                    reason: y
                                }), m) return
                        }
                        if (u(o, this.observer, l, n, this.audioCodec), i = 0, e = c(o.samplerate), f && p) {
                            var v = p + e;
                            Math.abs(v - d) > 1 && (k.b.log("AAC: align PTS for overlapping frames by " + Math.round((v - d) / 90)), d = v)
                        }
                        for (; n < a;) if (s(l, n) && n + 5 < a) {
                            var b = h(o, l, n, d, i);
                            if (!b) break;
                            n += b.length, r = b.sample.pts, i++
                        } else n++;
                        f = n < a ? l.subarray(n, a) : null, this.aacOverFlow = f, this.aacLastPTS = r
                    }, t.prototype._parseMPEGPES = function (t) {
                        for (var e = t.data, i = e.length, n = 0, r = 0, a = t.pts; r < i;) if (N.isHeader(e, r)) {
                            var o = N.appendFrame(this._audioTrack, e, r, a, n);
                            if (!o) break;
                            r += o.length, n++
                        } else r++
                    }, t.prototype._parseID3PES = function (t) {
                        this._id3Track.samples.push(t)
                    }, t
                }(), V = K, j = function () {
                    function t(e, i, n) {
                        v(this, t), this.observer = e, this.config = n, this.remuxer = i
                    }

                    return t.prototype.resetInitSegment = function (t, e, i, n) {
                        this._audioTrack = {
                            container: "audio/mpeg",
                            type: "audio",
                            id: -1,
                            sequenceNumber: 0,
                            isAAC: !1,
                            samples: [],
                            len: 0,
                            manifestCodec: e,
                            duration: n,
                            inputTimeScale: 9e4
                        }
                    }, t.prototype.resetTimeStamp = function () {
                    }, t.probe = function (t) {
                        var e, i, n = C.a.getID3Data(t, 0);
                        if (n && void 0 !== C.a.getTimeStamp(n)) for (e = n.length, i = Math.min(t.length - 1, e + 100); e < i; e++) if (N.probe(t, e)) return k.b.log("MPEG Audio sync word found !"), !0;
                        return !1
                    }, t.prototype.append = function (t, e, i, n) {
                        for (var r = C.a.getID3Data(t, 0), a = C.a.getTimeStamp(r), o = a ? 90 * a : 9e4 * e, s = r.length, l = t.length, u = 0, c = 0, d = this._audioTrack, h = [{
                            pts: o,
                            dts: o,
                            data: r
                        }]; s < l;) if (N.isHeader(t, s)) {
                            var f = N.appendFrame(d, t, s, o, u);
                            if (!f) break;
                            s += f.length, c = f.sample.pts, u++
                        } else C.a.isHeader(t, s) ? (r = C.a.getID3Data(t, s), h.push({
                            pts: c,
                            dts: c,
                            data: r
                        }), s += r.length) : s++;
                        this.remuxer.remux(d, {samples: []}, {samples: h, inputTimeScale: 9e4}, {samples: []}, e, i, n)
                    }, t.prototype.destroy = function () {
                    }, t
                }(), Y = j, H = function () {
                    function t() {
                        b(this, t)
                    }

                    return t.getSilentFrame = function (t, e) {
                        switch (t) {
                            case"mp4a.40.2":
                                if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                                break;
                            default:
                                if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                        }
                        return null
                    }, t
                }(), $ = H, z = Math.pow(2, 32) - 1, W = function () {
                    function t() {
                        _(this, t)
                    }

                    return t.init = function () {
                        t.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            ".mp3": [],
                            mvex: [],
                            mvhd: [],
                            pasp: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        };
                        var e;
                        for (e in t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                            n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                        t.HDLR_TYPES = {video: i, audio: n};
                        var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                            a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                        t.STTS = t.STSC = t.STCO = a, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                        var o = new Uint8Array([105, 115, 111, 109]), s = new Uint8Array([97, 118, 99, 49]),
                            l = new Uint8Array([0, 0, 0, 1]);
                        t.FTYP = t.box(t.types.ftyp, o, l, o, s), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, r))
                    }, t.box = function (t) {
                        for (var e, i = Array.prototype.slice.call(arguments, 1), n = 8, r = i.length, a = r; r--;) n += i[r].byteLength;
                        for (e = new Uint8Array(n), e[0] = n >> 24 & 255, e[1] = n >> 16 & 255, e[2] = n >> 8 & 255, e[3] = 255 & n, e.set(t, 4), r = 0, n = 8; r < a; r++) e.set(i[r], n), n += i[r].byteLength;
                        return e
                    }, t.hdlr = function (e) {
                        return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                    }, t.mdat = function (e) {
                        return t.box(t.types.mdat, e)
                    }, t.mdhd = function (e, i) {
                        i *= e;
                        var n = Math.floor(i / (z + 1)), r = Math.floor(i % (z + 1));
                        return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 85, 196, 0, 0]))
                    }, t.mdia = function (e) {
                        return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                    }, t.mfhd = function (e) {
                        return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                    }, t.minf = function (e) {
                        return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                    }, t.moof = function (e, i, n) {
                        return t.box(t.types.moof, t.mfhd(e), t.traf(n, i))
                    }, t.moov = function (e) {
                        for (var i = e.length, n = []; i--;) n[i] = t.trak(e[i]);
                        return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(n).concat(t.mvex(e)))
                    }, t.mvex = function (e) {
                        for (var i = e.length, n = []; i--;) n[i] = t.trex(e[i]);
                        return t.box.apply(null, [t.types.mvex].concat(n))
                    }, t.mvhd = function (e, i) {
                        i *= e;
                        var n = Math.floor(i / (z + 1)), r = Math.floor(i % (z + 1)),
                            a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                        return t.box(t.types.mvhd, a)
                    }, t.sdtp = function (e) {
                        var i, n, r = e.samples || [], a = new Uint8Array(4 + r.length);
                        for (n = 0; n < r.length; n++) i = r[n].flags, a[n + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                        return t.box(t.types.sdtp, a)
                    }, t.stbl = function (e) {
                        return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                    }, t.avc1 = function (e) {
                        var i, n, r, a = [], o = [];
                        for (i = 0; i < e.sps.length; i++) n = e.sps[i], r = n.byteLength, a.push(r >>> 8 & 255), a.push(255 & r), a = a.concat(Array.prototype.slice.call(n));
                        for (i = 0; i < e.pps.length; i++) n = e.pps[i], r = n.byteLength, o.push(r >>> 8 & 255), o.push(255 & r), o = o.concat(Array.prototype.slice.call(n));
                        var s = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(o))),
                            l = e.width, u = e.height, c = e.pixelRatio[0], d = e.pixelRatio[1];
                        return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
                    }, t.esds = function (t) {
                        var e = t.config.length;
                        return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                    }, t.mp4a = function (e) {
                        var i = e.samplerate;
                        return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]), t.box(t.types.esds, t.esds(e)))
                    }, t.mp3 = function (e) {
                        var i = e.samplerate;
                        return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
                    }, t.stsd = function (e) {
                        return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                    }, t.tkhd = function (e) {
                        var i = e.id, n = e.duration * e.timescale, r = e.width, a = e.height,
                            o = Math.floor(n / (z + 1)), s = Math.floor(n % (z + 1));
                        return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
                    }, t.traf = function (e, i) {
                        var n = t.sdtp(e), r = e.id, a = Math.floor(i / (z + 1)), o = Math.floor(i % (z + 1));
                        return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, n.length + 16 + 20 + 8 + 16 + 8 + 8), n)
                    }, t.trak = function (e) {
                        return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                    }, t.trex = function (e) {
                        var i = e.id;
                        return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                    }, t.trun = function (e, i) {
                        var n, r, a, o, s, l, u = e.samples || [], c = u.length, d = 12 + 16 * c, h = new Uint8Array(d);
                        for (i += 8 + d, h.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0), n = 0; n < c; n++) r = u[n], a = r.duration, o = r.size, s = r.flags, l = r.cts, h.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * n);
                        return t.box(t.types.trun, h)
                    }, t.initSegment = function (e) {
                        t.types || t.init();
                        var i, n = t.moov(e);
                        return i = new Uint8Array(t.FTYP.byteLength + n.byteLength), i.set(t.FTYP), i.set(n, t.FTYP.byteLength), i
                    }, t
                }(), q = W, X = function () {
                    function t(e, i, n, r) {
                        E(this, t), this.observer = e, this.config = i, this.typeSupported = n;
                        var a = navigator.userAgent;
                        this.isSafari = r && r.indexOf("Apple") > -1 && a && !a.match("CriOS"), this.ISGenerated = !1
                    }

                    return t.prototype.destroy = function () {
                    }, t.prototype.resetTimeStamp = function (t) {
                        this._initPTS = this._initDTS = t
                    }, t.prototype.resetInitSegment = function () {
                        this.ISGenerated = !1
                    }, t.prototype.remux = function (t, e, i, n, r, a, o) {
                        if (this.ISGenerated || this.generateIS(t, e, r), this.ISGenerated) {
                            var s = t.samples.length, l = e.samples.length, u = r, c = r;
                            if (s && l) {
                                var d = (t.samples[0].dts - e.samples[0].dts) / e.inputTimeScale;
                                u += Math.max(0, d), c += Math.max(0, -d)
                            }
                            if (s) {
                                t.timescale || (k.b.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, r));
                                var h = this.remuxAudio(t, u, a, o);
                                if (l) {
                                    var f = void 0;
                                    h && (f = h.endPTS - h.startPTS), e.timescale || (k.b.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, r)), this.remuxVideo(e, c, a, f, o)
                                }
                            } else {
                                var p = void 0;
                                l && (p = this.remuxVideo(e, c, a, o)), p && t.codec && this.remuxEmptyAudio(t, u, a, p)
                            }
                        }
                        i.samples.length && this.remuxID3(i, r), n.samples.length && this.remuxText(n, r), this.observer.trigger(S.a.FRAG_PARSED)
                    }, t.prototype.generateIS = function (t, e, i) {
                        var n, r, a = this.observer, o = t.samples, s = e.samples, l = this.typeSupported,
                            u = "audio/mp4", c = {}, d = {tracks: c}, h = void 0 === this._initPTS;
                        if (h && (n = r = 1 / 0), t.config && o.length && (t.timescale = t.samplerate, k.b.log("audio sampling rate : " + t.samplerate), t.isAAC || (l.mpeg ? (u = "audio/mpeg", t.codec = "") : l.mp3 && (t.codec = "mp3")), c.audio = {
                                container: u,
                                codec: t.codec,
                                initSegment: !t.isAAC && l.mpeg ? new Uint8Array : q.initSegment([t]),
                                metadata: {channelCount: t.channelCount}
                            }, h && (n = r = o[0].pts - t.inputTimeScale * i)), e.sps && e.pps && s.length) {
                            var f = e.inputTimeScale;
                            e.timescale = f, c.video = {
                                container: "video/mp4",
                                codec: e.codec,
                                initSegment: q.initSegment([e]),
                                metadata: {width: e.width, height: e.height}
                            }, h && (n = Math.min(n, s[0].pts - f * i), r = Math.min(r, s[0].dts - f * i), this.observer.trigger(S.a.INIT_PTS_FOUND, {initPTS: n}))
                        }
                        Object.keys(c).length ? (a.trigger(S.a.FRAG_PARSING_INIT_SEGMENT, d), this.ISGenerated = !0, h && (this._initPTS = n, this._initDTS = r)) : a.trigger(S.a.ERROR, {
                            type: L.b.MEDIA_ERROR,
                            details: L.a.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "no audio/video samples found"
                        })
                    }, t.prototype.remuxVideo = function (t, e, i, n, r) {
                        var a, o, s, l, u, c, d, h = 8, f = t.timescale, p = t.samples, g = [], y = p.length,
                            m = this._PTSNormalize, v = this._initDTS, b = this.nextAvcDts, _ = this.isSafari;
                        _ && (i |= p.length && b && (r && Math.abs(e - b / f) < .1 || Math.abs(p[0].pts - b - v) < f / 5)), i || (b = e * f), p.forEach(function (t) {
                            t.pts = m(t.pts - v, b), t.dts = m(t.dts - v, b)
                        }), p.sort(function (t, e) {
                            var i = t.dts - e.dts, n = t.pts - e.pts;
                            return i || (n || t.id - e.id)
                        });
                        var E = p.reduce(function (t, e) {
                            return Math.max(Math.min(t, e.pts - e.dts), -18e3)
                        }, 0);
                        if (E < 0) {
                            k.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(E / 90) + " ms to overcome this issue");
                            for (var T = 0; T < p.length; T++) p[T].dts += E
                        }
                        var A = p[0];
                        u = Math.max(A.dts, 0), l = Math.max(A.pts, 0);
                        var R = Math.round((u - b) / 90);
                        i && R && (R > 1 ? k.b.log("AVC:" + R + " ms hole between fragments detected,filling it") : R < -1 && k.b.log("AVC:" + -R + " ms overlapping between fragments detected"), u = b, p[0].dts = u, l = Math.max(l - R, b), p[0].pts = l, k.b.log("Video/PTS/DTS adjusted: " + Math.round(l / 90) + "/" + Math.round(u / 90) + ",delta:" + R + " ms")), A = p[p.length - 1], d = Math.max(A.dts, 0), c = Math.max(A.pts, 0, d), _ && (a = Math.round((d - u) / (p.length - 1)));
                        for (var C = 0, w = 0, I = 0; I < y; I++) {
                            for (var D = p[I], O = D.units, P = O.length, x = 0, N = 0; N < P; N++) x += O[N].data.length;
                            w += x, C += P, D.length = x, D.dts = _ ? u + I * a : Math.max(D.dts, u), D.pts = Math.max(D.pts, D.dts)
                        }
                        var M = w + 4 * C + 8;
                        try {
                            o = new Uint8Array(M)
                        } catch (t) {
                            return void this.observer.trigger(S.a.ERROR, {
                                type: L.b.MUX_ERROR,
                                details: L.a.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: M,
                                reason: "fail allocating video mdat " + M
                            })
                        }
                        var F = new DataView(o.buffer);
                        F.setUint32(0, M), o.set(q.types.mdat, 4);
                        for (var B = 0; B < y; B++) {
                            for (var U = p[B], G = U.units, K = 0, V = void 0, j = 0, Y = G.length; j < Y; j++) {
                                var H = G[j], $ = H.data, z = H.data.byteLength;
                                F.setUint32(h, z), h += 4, o.set($, h), h += z, K += 4 + z
                            }
                            if (_) V = Math.max(0, a * Math.round((U.pts - U.dts) / a)); else {
                                if (B < y - 1) a = p[B + 1].dts - U.dts; else {
                                    var W = this.config, X = U.dts - p[B > 0 ? B - 1 : B].dts;
                                    if (W.stretchShortVideoTrack) {
                                        var Z = W.maxBufferHole, J = W.maxSeekHole, Q = Math.floor(Math.min(Z, J) * f),
                                            tt = (n ? l + n * f : this.nextAudioPts) - U.pts;
                                        tt > Q ? (a = tt - X, a < 0 && (a = X), k.b.log("It is approximately " + tt / 90 + " ms to the next segment; using duration " + a / 90 + " ms for the last video frame.")) : a = X
                                    } else a = X
                                }
                                V = Math.round(U.pts - U.dts)
                            }
                            g.push({
                                size: K,
                                duration: a,
                                cts: V,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: U.key ? 2 : 1,
                                    isNonSync: U.key ? 0 : 1
                                }
                            })
                        }
                        this.nextAvcDts = d + a;
                        var et = t.dropped;
                        if (t.len = 0, t.nbNalu = 0, t.dropped = 0, g.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var it = g[0].flags;
                            it.dependsOn = 2, it.isNonSync = 0
                        }
                        t.samples = g, s = q.moof(t.sequenceNumber++, u, t), t.samples = [];
                        var nt = {
                            data1: s,
                            data2: o,
                            startPTS: l / f,
                            endPTS: (c + a) / f,
                            startDTS: u / f,
                            endDTS: this.nextAvcDts / f,
                            type: "video",
                            nb: g.length,
                            dropped: et
                        };
                        return this.observer.trigger(S.a.FRAG_PARSING_DATA, nt), nt
                    }, t.prototype.remuxAudio = function (t, e, i, n) {
                        var r, a, o, s, l, u, c, d = t.inputTimeScale, h = t.timescale, f = d / h,
                            p = t.isAAC ? 1024 : 1152, g = p * f, y = this._PTSNormalize, m = this._initDTS,
                            v = !t.isAAC && this.typeSupported.mpeg, b = t.samples, _ = [], E = this.nextAudioPts;
                        if (i |= b.length && E && (n && Math.abs(e - E / d) < .1 || Math.abs(b[0].pts - E - m) < 20 * g), b.forEach(function (t) {
                                t.pts = t.dts = y(t.pts - m, e * d)
                            }), b = b.filter(function (t) {
                                return t.pts >= 0
                            }), 0 !== b.length) {
                            if (i || (E = n ? e * d : b[0].pts), t.isAAC) for (var T = this.config.maxAudioFramesDrift, A = 0, R = E; A < b.length;) {
                                var C, w = b[A], I = w.pts;
                                C = I - R;
                                var D = Math.abs(1e3 * C / d);
                                if (C <= -T * g) k.b.warn("Dropping 1 audio frame @ " + (R / d).toFixed(3) + "s due to " + Math.round(D) + " ms overlap."), b.splice(A, 1), t.len -= w.unit.length; else if (C >= T * g && D < 1e4 && R) {
                                    var O = Math.round(C / g);
                                    k.b.warn("Injecting " + O + " audio frame @ " + (R / d).toFixed(3) + "s due to " + Math.round(1e3 * C / d) + " ms gap.");
                                    for (var P = 0; P < O; P++) {
                                        var x = Math.max(R, 0);
                                        o = $.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), o || (k.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), o = w.unit.subarray()), b.splice(A, 0, {
                                            unit: o,
                                            pts: x,
                                            dts: x
                                        }), t.len += o.length, R += g, A++
                                    }
                                    w.pts = w.dts = R, R += g, A++
                                } else Math.abs(C), w.pts = w.dts = R, R += g, A++
                            }
                            for (var N = 0, M = b.length; N < M; N++) {
                                var F = b[N], B = F.unit, U = F.pts;
                                if (void 0 !== c) a.duration = Math.round((U - c) / f); else {
                                    var G = Math.round(1e3 * (U - E) / d), K = 0;
                                    if (i && t.isAAC && G) {
                                        if (G > 0 && G < 1e4) K = Math.round((U - E) / g), k.b.log(G + " ms hole between AAC samples detected,filling it"), K > 0 && (o = $.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), o || (o = B.subarray()), t.len += K * o.length); else if (G < -12) {
                                            k.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (E / d).toFixed(3) + "s/" + (U / d).toFixed(3) + "s/" + -G + "ms"), t.len -= B.byteLength;
                                            continue
                                        }
                                        U = E
                                    }
                                    if (u = U, !(t.len > 0)) return;
                                    var V = v ? t.len : t.len + 8;
                                    r = v ? 0 : 8;
                                    try {
                                        s = new Uint8Array(V)
                                    } catch (t) {
                                        return void this.observer.trigger(S.a.ERROR, {
                                            type: L.b.MUX_ERROR,
                                            details: L.a.REMUX_ALLOC_ERROR,
                                            fatal: !1,
                                            bytes: V,
                                            reason: "fail allocating audio mdat " + V
                                        })
                                    }
                                    if (!v) {
                                        new DataView(s.buffer).setUint32(0, V), s.set(q.types.mdat, 4)
                                    }
                                    for (var j = 0; j < K; j++) o = $.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), o || (k.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), o = B.subarray()), s.set(o, r), r += o.byteLength, a = {
                                        size: o.byteLength,
                                        cts: 0,
                                        duration: 1024,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    }, _.push(a)
                                }
                                s.set(B, r);
                                var Y = B.byteLength;
                                r += Y, a = {
                                    size: Y,
                                    cts: 0,
                                    duration: 0,
                                    flags: {
                                        isLeading: 0,
                                        isDependedOn: 0,
                                        hasRedundancy: 0,
                                        degradPrio: 0,
                                        dependsOn: 1
                                    }
                                }, _.push(a), c = U
                            }
                            var H = 0, z = _.length;
                            if (z >= 2 && (H = _[z - 2].duration, a.duration = H), z) {
                                this.nextAudioPts = E = c + f * H, t.len = 0, t.samples = _, l = v ? new Uint8Array : q.moof(t.sequenceNumber++, u / f, t), t.samples = [];
                                var W = u / d, X = E / d, Z = {
                                    data1: l,
                                    data2: s,
                                    startPTS: W,
                                    endPTS: X,
                                    startDTS: W,
                                    endDTS: X,
                                    type: "audio",
                                    nb: z
                                };
                                return this.observer.trigger(S.a.FRAG_PARSING_DATA, Z), Z
                            }
                            return null
                        }
                    }, t.prototype.remuxEmptyAudio = function (t, e, i, n) {
                        var r = t.inputTimeScale, a = t.samplerate ? t.samplerate : r, o = r / a, s = this.nextAudioPts,
                            l = (void 0 !== s ? s : n.startDTS * r) + this._initDTS, u = n.endDTS * r + this._initDTS,
                            c = 1024 * o, d = Math.ceil((u - l) / c),
                            h = $.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                        if (k.b.warn("remux empty Audio"), !h) return void k.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                        for (var f = [], p = 0; p < d; p++) {
                            var g = l + p * c;
                            f.push({unit: h, pts: g, dts: g}), t.len += h.length
                        }
                        t.samples = f, this.remuxAudio(t, e, i)
                    }, t.prototype.remuxID3 = function (t, e) {
                        var i, n = t.samples.length, r = t.inputTimeScale, a = this._initPTS, o = this._initDTS;
                        if (n) {
                            for (var s = 0; s < n; s++) i = t.samples[s], i.pts = (i.pts - a) / r, i.dts = (i.dts - o) / r;
                            this.observer.trigger(S.a.FRAG_PARSING_METADATA, {samples: t.samples})
                        }
                        t.samples = [], e = e
                    }, t.prototype.remuxText = function (t, e) {
                        t.samples.sort(function (t, e) {
                            return t.pts - e.pts
                        });
                        var i, n = t.samples.length, r = t.inputTimeScale, a = this._initPTS;
                        if (n) {
                            for (var o = 0; o < n; o++) i = t.samples[o], i.pts = (i.pts - a) / r;
                            this.observer.trigger(S.a.FRAG_PARSING_USERDATA, {samples: t.samples})
                        }
                        t.samples = [], e = e
                    }, t.prototype._PTSNormalize = function (t, e) {
                        var i;
                        if (void 0 === e) return t;
                        for (i = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += i;
                        return t
                    }, t
                }(), Z = X, J = function () {
                    function t(e) {
                        T(this, t), this.observer = e
                    }

                    return t.prototype.destroy = function () {
                    }, t.prototype.resetTimeStamp = function () {
                    }, t.prototype.resetInitSegment = function () {
                    }, t.prototype.remux = function (t, e, i, n, r, a, o, s) {
                        var l = this.observer, u = "";
                        t && (u += "audio"), e && (u += "video"), l.trigger(S.a.FRAG_PARSING_DATA, {
                            data1: s,
                            startPTS: r,
                            startDTS: r,
                            type: u,
                            nb: 1,
                            dropped: 0
                        }), l.trigger(S.a.FRAG_PARSED)
                    }, t
                }(), Q = J, tt = function () {
                    function t(e, i, n, r) {
                        A(this, t), this.observer = e, this.typeSupported = i, this.config = n, this.vendor = r
                    }

                    return t.prototype.destroy = function () {
                        var t = this.demuxer;
                        t && t.destroy()
                    }, t.prototype.push = function (t, e, i, n, r, a, o, s, l, u, c, d) {
                        if (t.byteLength > 0 && null != e && null != e.key && "AES-128" === e.method) {
                            var h = this.decrypter;
                            null == h && (h = this.decrypter = new R.a(this.observer, this.config));
                            var f, p = this;
                            try {
                                f = performance.now()
                            } catch (t) {
                                f = Date.now()
                            }
                            h.decrypt(t, e.key.buffer, e.iv.buffer, function (t) {
                                var h;
                                try {
                                    h = performance.now()
                                } catch (t) {
                                    h = Date.now()
                                }
                                p.observer.trigger(S.a.FRAG_DECRYPTED, {
                                    stats: {
                                        tstart: f,
                                        tdecrypt: h
                                    }
                                }), p.pushDecrypted(new Uint8Array(t), e, new Uint8Array(i), n, r, a, o, s, l, u, c, d)
                            })
                        } else this.pushDecrypted(new Uint8Array(t), e, new Uint8Array(i), n, r, a, o, s, l, u, c, d)
                    }, t.prototype.pushDecrypted = function (t, e, i, n, r, a, o, s, l, u, c, d) {
                        var h = this.demuxer;
                        if (!h || o && !this.probe(t)) {
                            for (var f = this.observer, p = this.typeSupported, g = this.config, y = [{
                                demux: V,
                                remux: Z
                            }, {demux: P, remux: Q}, {demux: I, remux: Z}, {
                                demux: Y,
                                remux: Z
                            }], m = 0, v = y.length; m < v; m++) {
                                var b = y[m], _ = b.demux.probe;
                                if (_(t)) {
                                    var E = this.remuxer = new b.remux(f, g, p, this.vendor);
                                    h = new b.demux(f, E, g, p), this.probe = _;
                                    break
                                }
                            }
                            if (!h) return void f.trigger(S.a.ERROR, {
                                type: L.b.MEDIA_ERROR,
                                details: L.a.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: "no demux matching with content found"
                            });
                            this.demuxer = h
                        }
                        var T = this.remuxer;
                        (o || s) && (h.resetInitSegment(i, n, r, u), T.resetInitSegment()), o && (h.resetTimeStamp(d), T.resetTimeStamp(d)), "function" == typeof h.setDecryptData && h.setDecryptData(e), h.append(t, a, l, c)
                    }, t
                }();
                e.a = tt
            }, function (t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    var i = Kt[e];
                    return !!i && !0 === i[t.slice(0, 4)]
                }

                function o(t, e) {
                    return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
                }

                function s(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function l(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function u(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function c(t, e) {
                    if (!t) return null;
                    for (var i = null, n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.id === e && (i = r)
                    }
                    return i
                }

                function d(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function h(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function f(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function p(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function g(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function y(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function m() {
                    if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
                }

                function v(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function b(t, e, i) {
                    var n = t[e], r = t[i], a = r.startPTS;
                    isNaN(a) ? r.start = i > e ? n.start + n.duration : Math.max(n.start - r.duration, 0) : i > e ? (n.duration = a - n.start, n.duration < 0 && Pt.b.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (r.duration = n.start - a, r.duration < 0 && Pt.b.warn("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!"))
                }

                function _(t, e, i, n, r, a) {
                    var o = i;
                    if (!isNaN(e.startPTS)) {
                        var s = Math.abs(e.startPTS - i);
                        isNaN(e.deltaPTS) ? e.deltaPTS = s : e.deltaPTS = Math.max(s, e.deltaPTS), o = Math.max(i, e.startPTS), i = Math.min(i, e.startPTS), n = Math.max(n, e.endPTS), r = Math.min(r, e.startDTS), a = Math.max(a, e.endDTS)
                    }
                    var l = i - e.start;
                    e.start = e.startPTS = i, e.maxStartPTS = o, e.endPTS = n, e.startDTS = r, e.endDTS = a, e.duration = n - i;
                    var u = e.sn;
                    if (!t || u < t.startSN || u > t.endSN) return 0;
                    var c, d, h;
                    for (c = u - t.startSN, d = t.fragments, d[c] = e, h = c; h > 0; h--) b(d, h, h - 1);
                    for (h = c; h < d.length - 1; h++) b(d, h, h + 1);
                    return t.PTSKnown = !0, l
                }

                function E(t, e) {
                    var i, n = Math.max(t.startSN, e.startSN) - e.startSN, r = Math.min(t.endSN, e.endSN) - e.startSN,
                        a = e.startSN - t.startSN, o = t.fragments, s = e.fragments, l = 0;
                    if (r < n) return void(e.PTSKnown = !1);
                    for (var u = n; u <= r; u++) {
                        var c = o[a + u], d = s[u];
                        d && c && (l = c.cc - d.cc, isNaN(c.startPTS) || (d.start = d.startPTS = c.startPTS, d.endPTS = c.endPTS, d.duration = c.duration, d.backtracked = c.backtracked, d.dropped = c.dropped, i = d))
                    }
                    if (l) for (Pt.b.log("discontinuity sliding from playlist, take drift into account"), u = 0; u < s.length; u++) s[u].cc += l;
                    if (i) _(e, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS); else if (a >= 0 && a < o.length) {
                        var h = o[a].start;
                        for (u = 0; u < s.length; u++) s[u].start += h
                    }
                    e.PTSKnown = t.PTSKnown
                }

                function T(t, e) {
                    for (var i = null, n = 0; n < t.length; n += 1) {
                        var r = t[n];
                        if (r && r.cc === e) {
                            i = r;
                            break
                        }
                    }
                    return i
                }

                function A(t, e) {
                    return ie.search(t, function (t) {
                        return t.cc < e ? 1 : t.cc > e ? -1 : 0
                    })
                }

                function S(t, e, i) {
                    var n = !1;
                    return e && e.details && i && (i.endCC > i.startCC || t && t.cc < i.startCC) && (n = !0), n
                }

                function L(t, e) {
                    var i = t.fragments, n = e.fragments;
                    if (!n.length || !i.length) return void Pt.b.log("No fragments to align");
                    var r = T(i, n[0].cc);
                    return !r || r && !r.startPTS ? void Pt.b.log("No frag in previous level to align on") : r
                }

                function R(t, e) {
                    e.fragments.forEach(function (e) {
                        if (e) {
                            var i = e.start + t;
                            e.start = e.startPTS = i, e.endPTS = i + e.duration
                        }
                    }), e.PTSKnown = !0
                }

                function k(t, e, i) {
                    if (S(t, e, i)) {
                        var n = L(e.details, i);
                        n && (Pt.b.log("Adjusting PTS using last level due to CC increase within current level"), R(n.start, i))
                    }
                    if (!1 === i.PTSKnown && e && e.details) {
                        var r = e.details.programDateTime, a = i.programDateTime,
                            o = (a - r) / 1e3 + e.details.fragments[0].start;
                        isNaN(o) || (Pt.b.log("adjusting PTS using programDateTime delta, sliding:" + o.toFixed(3)), R(o, i))
                    }
                }

                function C(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function w(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function I(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function D(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function O(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function P(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function x(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function N(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function M(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function F() {
                    var t = m(), e = window.SourceBuffer || window.WebKitSourceBuffer,
                        i = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        n = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                    return !!i && !!n
                }

                function B(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function U(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function G(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function K(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function V(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function j(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function Y(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function H(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function $(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function z(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function W(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function q(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function X(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function Z(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function J(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function Q(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function tt(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function et(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function it(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function nt(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function rt(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function at() {
                    this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new Xe, this.regionList = []
                }

                function ot(t) {
                    function e(t, e, i, n) {
                        return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
                    }

                    var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
                }

                function st() {
                    this.values = Object.create(null)
                }

                function lt(t, e, i, n) {
                    var r = n ? t.split(n) : [t];
                    for (var a in r) if ("string" == typeof r[a]) {
                        var o = r[a].split(i);
                        if (2 === o.length) {
                            var s = o[0], l = o[1];
                            e(s, l)
                        }
                    }
                }

                function ut(t, e, i) {
                    function n() {
                        var e = ot(t);
                        if (null === e) throw new Error("Malformed timestamp: " + a);
                        return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                    }

                    function r() {
                        t = t.replace(/^\s+/, "")
                    }

                    var a = t;
                    if (r(), e.startTime = n(), r(), "--\x3e" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + a);
                    t = t.substr(3), r(), e.endTime = n(), r(), function (t, e) {
                        var n = new st;
                        lt(t, function (t, e) {
                            switch (t) {
                                case"region":
                                    for (var r = i.length - 1; r >= 0; r--) if (i[r].id === e) {
                                        n.set(t, i[r].region);
                                        break
                                    }
                                    break;
                                case"vertical":
                                    n.alt(t, e, ["rl", "lr"]);
                                    break;
                                case"line":
                                    var a = e.split(","), o = a[0];
                                    n.integer(t, o), n.percent(t, o) && n.set("snapToLines", !1), n.alt(t, o, ["auto"]), 2 === a.length && n.alt("lineAlign", a[1], ["start", Je, "end"]);
                                    break;
                                case"position":
                                    a = e.split(","), n.percent(t, a[0]), 2 === a.length && n.alt("positionAlign", a[1], ["start", Je, "end", "line-left", "line-right", "auto"]);
                                    break;
                                case"size":
                                    n.percent(t, e);
                                    break;
                                case"align":
                                    n.alt(t, e, ["start", Je, "end", "left", "right"])
                            }
                        }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", "");
                        var r = n.get("line", "auto");
                        "auto" === r && -1 === Ze.line && (r = -1), e.line = r, e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", Je);
                        var a = n.get("position", "auto");
                        "auto" === a && 50 === Ze.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = a
                    }(t, e)
                }

                function ct(t) {
                    return t.replace(/<br(?: \/)?>/gi, "\n")
                }

                function dt(t, e, i, n) {
                    for (var r, a, o, s, l, u = window.VTTCue || window.TextTrackCue, c = 0; c < n.rows.length; c++) if (r = n.rows[c], o = !0, s = 0, l = "", !r.isEmpty()) {
                        for (var d = 0; d < r.chars.length; d++) r.chars[d].uchar.match(/\s/) && o ? s++ : (l += r.chars[d].uchar, o = !1);
                        r.cueStartTime = e, e === i && (i += 1e-4), a = new u(e, i, ct(l.trim())), s >= 16 ? s-- : s++, navigator.userAgent.match(/Firefox\//) ? a.line = c + 1 : a.line = c > 7 ? c - 2 : c + 1, a.align = "left", a.position = Math.max(0, Math.min(100, s / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), t.addCue(a)
                    }
                }

                function ht(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function ft(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function pt(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function gt(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function yt(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function mt(t) {
                    if (t && t.cues) for (; t.cues.length > 0;) t.removeCue(t.cues[0])
                }

                function vt(t, e) {
                    return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
                }

                function bt(t, e, i, n) {
                    return Math.min(e, n) - Math.max(t, i)
                }

                function _t(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function Et(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function Tt(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function At(t) {
                    for (var e = [], i = 0; i < t.length; i++) "subtitles" === t[i].kind && e.push(t[i]);
                    return e
                }

                function St(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function Lt(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function Rt(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function kt(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(e, "__esModule", {value: !0});
                var Ct = {};
                i.d(Ct, "newCue", function () {
                    return dt
                });
                var wt = i(6), It = i.n(wt), Dt = i(1), Ot = i(2), Pt = i(0),
                    xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, Nt = function () {
                        function t(e) {
                            n(this, t), this.hls = e, this.onEvent = this.onEvent.bind(this);
                            for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
                            this.handledEvents = r, this.useGenericHandler = !0, this.registerListeners()
                        }

                        return t.prototype.destroy = function () {
                            this.unregisterListeners()
                        }, t.prototype.isEventHandler = function () {
                            return "object" === xt(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
                        }, t.prototype.registerListeners = function () {
                            this.isEventHandler() && this.handledEvents.forEach(function (t) {
                                if ("hlsEventGeneric" === t) throw new Error("Forbidden event name: " + t);
                                this.hls.on(t, this.onEvent)
                            }, this)
                        }, t.prototype.unregisterListeners = function () {
                            this.isEventHandler() && this.handledEvents.forEach(function (t) {
                                this.hls.off(t, this.onEvent)
                            }, this)
                        }, t.prototype.onEvent = function (t, e) {
                            this.onEventGeneric(t, e)
                        }, t.prototype.onEventGeneric = function (t, e) {
                            var i = function (t, e) {
                                var i = "on" + t.replace("hls", "");
                                if ("function" != typeof this[i]) throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + i + ")");
                                return this[i].bind(this, e)
                            };
                            try {
                                i.call(this, t, e).call()
                            } catch (e) {
                                Pt.b.error("internal error happened while processing " + t + ":" + e.message), this.hls.trigger(Dt.a.ERROR, {
                                    type: Ot.b.OTHER_ERROR,
                                    details: Ot.a.INTERNAL_EXCEPTION,
                                    fatal: !1,
                                    event: t,
                                    err: e
                                })
                            }
                        }, t
                    }(), Mt = Nt, Ft = /^(\d+)x(\d+)$/, Bt = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, Ut = function () {
                        function t(e) {
                            r(this, t), "string" == typeof e && (e = t.parseAttrList(e));
                            for (var i in e) e.hasOwnProperty(i) && (this[i] = e[i])
                        }

                        return t.prototype.decimalInteger = function (t) {
                            var e = parseInt(this[t], 10);
                            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                        }, t.prototype.hexadecimalInteger = function (t) {
                            if (this[t]) {
                                var e = (this[t] || "0x").slice(2);
                                e = (1 & e.length ? "0" : "") + e;
                                for (var i = new Uint8Array(e.length / 2), n = 0; n < e.length / 2; n++) i[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
                                return i
                            }
                            return null
                        }, t.prototype.hexadecimalIntegerAsNumber = function (t) {
                            var e = parseInt(this[t], 16);
                            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                        }, t.prototype.decimalFloatingPoint = function (t) {
                            return parseFloat(this[t])
                        }, t.prototype.enumeratedString = function (t) {
                            return this[t]
                        }, t.prototype.decimalResolution = function (t) {
                            var e = Ft.exec(this[t]);
                            if (null !== e) return {width: parseInt(e[1], 10), height: parseInt(e[2], 10)}
                        }, t.parseAttrList = function (t) {
                            var e, i = {};
                            for (Bt.lastIndex = 0; null !== (e = Bt.exec(t));) {
                                var n = e[2];
                                0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1 && (n = n.slice(1, -1)), i[e[1]] = n
                            }
                            return i
                        }, t
                    }(), Gt = Ut, Kt = {
                        audio: {
                            a3ds: !0,
                            "ac-3": !0,
                            "ac-4": !0,
                            alac: !0,
                            alaw: !0,
                            dra1: !0,
                            "dts+": !0,
                            "dts-": !0,
                            dtsc: !0,
                            dtse: !0,
                            dtsh: !0,
                            "ec-3": !0,
                            enca: !0,
                            g719: !0,
                            g726: !0,
                            m4ae: !0,
                            mha1: !0,
                            mha2: !0,
                            mhm1: !0,
                            mhm2: !0,
                            mlpa: !0,
                            mp4a: !0,
                            "raw ": !0,
                            Opus: !0,
                            samr: !0,
                            sawb: !0,
                            sawp: !0,
                            sevc: !0,
                            sqcp: !0,
                            ssmv: !0,
                            twos: !0,
                            ulaw: !0
                        },
                        video: {
                            avc1: !0,
                            avc2: !0,
                            avc3: !0,
                            avc4: !0,
                            avcp: !0,
                            drac: !0,
                            dvav: !0,
                            dvhe: !0,
                            encv: !0,
                            hev1: !0,
                            hvc1: !0,
                            mjp2: !0,
                            mp4v: !0,
                            mvc1: !0,
                            mvc2: !0,
                            mvc3: !0,
                            mvc4: !0,
                            resv: !0,
                            rv60: !0,
                            s263: !0,
                            svc1: !0,
                            svc2: !0,
                            "vc-1": !0,
                            vp08: !0,
                            vp09: !0
                        }
                    }, Vt = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), jt = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g, Yt = /#EXT-X-MEDIA:(.*)/g,
                    Ht = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                    $t = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                    zt = function () {
                        function t() {
                            u(this, t), this.method = null, this.key = null, this.iv = null, this._uri = null
                        }

                        return Vt(t, [{
                            key: "uri", get: function () {
                                return !this._uri && this.reluri && (this._uri = It.a.buildAbsoluteURL(this.baseuri, this.reluri, {alwaysNormalize: !0})), this._uri
                            }
                        }]), t
                    }(), Wt = function () {
                        function t() {
                            u(this, t), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = []
                        }

                        return t.prototype.createInitializationVector = function (t) {
                            for (var e = new Uint8Array(16), i = 12; i < 16; i++) e[i] = t >> 8 * (15 - i) & 255;
                            return e
                        }, t.prototype.fragmentDecryptdataFromLevelkey = function (t, e) {
                            var i = t;
                            return t && t.method && t.uri && !t.iv && (i = new zt, i.method = t.method, i.baseuri = t.baseuri, i.reluri = t.reluri, i.iv = this.createInitializationVector(e)), i
                        }, t.prototype.cloneObj = function (t) {
                            return JSON.parse(JSON.stringify(t))
                        }, Vt(t, [{
                            key: "url", get: function () {
                                return !this._url && this.relurl && (this._url = It.a.buildAbsoluteURL(this.baseurl, this.relurl, {alwaysNormalize: !0})), this._url
                            }, set: function (t) {
                                this._url = t
                            }
                        }, {
                            key: "programDateTime", get: function () {
                                return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime
                            }
                        }, {
                            key: "byteRange", get: function () {
                                if (!this._byteRange) {
                                    var t = this._byteRange = [];
                                    if (this.rawByteRange) {
                                        var e = this.rawByteRange.split("@", 2);
                                        if (1 === e.length) {
                                            var i = this.lastByteRangeEndOffset;
                                            t[0] = i || 0
                                        } else t[0] = parseInt(e[1]);
                                        t[1] = parseInt(e[0]) + t[0]
                                    }
                                }
                                return this._byteRange
                            }
                        }, {
                            key: "byteRangeStartOffset", get: function () {
                                return this.byteRange[0]
                            }
                        }, {
                            key: "byteRangeEndOffset", get: function () {
                                return this.byteRange[1]
                            }
                        }, {
                            key: "decryptdata", get: function () {
                                return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
                            }
                        }]), t
                    }(), qt = function (t) {
                        function e(i) {
                            u(this, e);
                            var n = s(this, t.call(this, i, Dt.a.MANIFEST_LOADING, Dt.a.LEVEL_LOADING, Dt.a.AUDIO_TRACK_LOADING, Dt.a.SUBTITLE_TRACK_LOADING));
                            return n.loaders = {}, n
                        }

                        return l(e, t), e.prototype.destroy = function () {
                            for (var t in this.loaders) {
                                var e = this.loaders[t];
                                e && e.destroy()
                            }
                            this.loaders = {}, Mt.prototype.destroy.call(this)
                        }, e.prototype.onManifestLoading = function (t) {
                            this.load(t.url, {type: "manifest"})
                        }, e.prototype.onLevelLoading = function (t) {
                            this.load(t.url, {type: "level", level: t.level, id: t.id})
                        }, e.prototype.onAudioTrackLoading = function (t) {
                            this.load(t.url, {type: "audioTrack", id: t.id})
                        }, e.prototype.onSubtitleTrackLoading = function (t) {
                            this.load(t.url, {type: "subtitleTrack", id: t.id})
                        }, e.prototype.load = function (t, e) {
                            var i = this.loaders[e.type];
                            if (void 0 !== i) {
                                var n = i.context;
                                if (n && n.url === t) return void Pt.b.trace("playlist request ongoing");
                                Pt.b.warn("abort previous loader for type:" + e.type), i.abort()
                            }
                            var r = this.hls.config, a = void 0, o = void 0, s = void 0, l = void 0;
                            "manifest" === e.type ? (a = r.manifestLoadingMaxRetry, o = r.manifestLoadingTimeOut, s = r.manifestLoadingRetryDelay, l = r.manifestLoadingMaxRetryTimeout) : "level" === e.type ? (a = 0, o = r.levelLoadingTimeOut) : (a = r.levelLoadingMaxRetry, o = r.levelLoadingTimeOut, s = r.levelLoadingRetryDelay, l = r.levelLoadingMaxRetryTimeout, Pt.b.log("loading playlist for " + e.type + " " + (e.level || e.id))), i = this.loaders[e.type] = e.loader = void 0 !== r.pLoader ? new r.pLoader(r) : new r.loader(r), e.url = t, e.responseType = "";
                            var u = void 0, c = void 0;
                            u = {
                                timeout: o,
                                maxRetry: a,
                                retryDelay: s,
                                maxRetryDelay: l
                            }, c = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this)
                            }, i.load(e, u, c)
                        }, e.prototype.resolve = function (t, e) {
                            return It.a.buildAbsoluteURL(e, t, {alwaysNormalize: !0})
                        }, e.prototype.parseMasterPlaylist = function (t, e) {
                            var i = [], n = void 0;
                            for (jt.lastIndex = 0; null != (n = jt.exec(t));) {
                                var r = {}, o = r.attrs = new Gt(n[1]);
                                r.url = this.resolve(n[2], e);
                                var s = o.decimalResolution("RESOLUTION");
                                s && (r.width = s.width, r.height = s.height), r.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"), r.name = o.NAME, function (t, e) {
                                    ["video", "audio"].forEach(function (i) {
                                        var n = t.filter(function (t) {
                                            return a(t, i)
                                        });
                                        if (n.length) {
                                            var r = n.filter(function (t) {
                                                return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                                            });
                                            e[i + "Codec"] = r.length > 0 ? r[0] : n[0], t = t.filter(function (t) {
                                                return -1 === n.indexOf(t)
                                            })
                                        }
                                    }), e.unknownCodecs = t
                                }([].concat((o.CODECS || "").split(/[ ,]+/)), r), r.videoCodec && -1 !== r.videoCodec.indexOf("avc1") && (r.videoCodec = this.avc1toavcoti(r.videoCodec)), i.push(r)
                            }
                            return i
                        }, e.prototype.parseMasterPlaylistMedia = function (t, e, i) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], r = void 0, a = [],
                                o = 0;
                            for (Yt.lastIndex = 0; null !== (r = Yt.exec(t));) {
                                var s = {}, l = new Gt(r[1]);
                                if (l.TYPE === i) {
                                    if (s.groupId = l["GROUP-ID"], s.name = l.NAME, s.type = i, s.default = "YES" === l.DEFAULT, s.autoselect = "YES" === l.AUTOSELECT, s.forced = "YES" === l.FORCED, l.URI && (s.url = this.resolve(l.URI, e)), s.lang = l.LANGUAGE, s.name || (s.name = s.lang), n.length) {
                                        var u = c(n, s.groupId);
                                        s.audioCodec = u ? u.codec : n[0].codec
                                    }
                                    s.id = o++, a.push(s)
                                }
                            }
                            return a
                        }, e.prototype.avc1toavcoti = function (t) {
                            var e, i = t.split(".");
                            return i.length > 2 ? (e = i.shift() + ".", e += parseInt(i.shift()).toString(16), e += ("000" + parseInt(i.shift()).toString(16)).substr(-4)) : e = t, e
                        }, e.prototype.parseLevelPlaylist = function (t, e, i, n) {
                            var r, a, o = 0, s = 0,
                                l = {type: null, version: null, url: e, fragments: [], live: !0, startSN: 0}, u = new zt,
                                c = 0, d = null, h = new Wt;
                            for (Ht.lastIndex = 0; null !== (r = Ht.exec(t));) {
                                var f = r[1];
                                if (f) {
                                    h.duration = parseFloat(f);
                                    var p = (" " + r[2]).slice(1);
                                    h.title = p || null, h.tagList.push(p ? ["INF", f, p] : ["INF", f])
                                } else if (r[3]) {
                                    if (!isNaN(h.duration)) {
                                        var g = o++;
                                        h.type = n, h.start = s, h.levelkey = u, h.sn = g, h.level = i, h.cc = c, h.baseurl = e, h.relurl = (" " + r[3]).slice(1), l.fragments.push(h), d = h, s += h.duration, h = new Wt
                                    }
                                } else if (r[4]) {
                                    if (h.rawByteRange = (" " + r[4]).slice(1), d) {
                                        var y = d.byteRangeEndOffset;
                                        y && (h.lastByteRangeEndOffset = y)
                                    }
                                } else if (r[5]) h.rawProgramDateTime = (" " + r[5]).slice(1), h.tagList.push(["PROGRAM-DATE-TIME", h.rawProgramDateTime]), void 0 === l.programDateTime && (l.programDateTime = new Date(new Date(Date.parse(r[5])) - 1e3 * s)); else {
                                    for (r = r[0].match($t), a = 1; a < r.length && void 0 === r[a]; a++) ;
                                    var m = (" " + r[a + 1]).slice(1), v = (" " + r[a + 2]).slice(1);
                                    switch (r[a]) {
                                        case"#":
                                            h.tagList.push(v ? [m, v] : [m]);
                                            break;
                                        case"PLAYLIST-TYPE":
                                            l.type = m.toUpperCase();
                                            break;
                                        case"MEDIA-SEQUENCE":
                                            o = l.startSN = parseInt(m);
                                            break;
                                        case"TARGETDURATION":
                                            l.targetduration = parseFloat(m);
                                            break;
                                        case"VERSION":
                                            l.version = parseInt(m);
                                            break;
                                        case"EXTM3U":
                                            break;
                                        case"ENDLIST":
                                            l.live = !1;
                                            break;
                                        case"DIS":
                                            c++, h.tagList.push(["DIS"]);
                                            break;
                                        case"DISCONTINUITY-SEQ":
                                            c = parseInt(m);
                                            break;
                                        case"KEY":
                                            var b = m, _ = new Gt(b), E = _.enumeratedString("METHOD"), T = _.URI,
                                                A = _.hexadecimalInteger("IV");
                                            E && (u = new zt, T && ["AES-128", "SAMPLE-AES"].indexOf(E) >= 0 && (u.method = E, u.baseuri = e, u.reluri = T, u.key = null, u.iv = A));
                                            break;
                                        case"START":
                                            var S = m, L = new Gt(S), R = L.decimalFloatingPoint("TIME-OFFSET");
                                            isNaN(R) || (l.startTimeOffset = R);
                                            break;
                                        case"MAP":
                                            var k = new Gt(m);
                                            h.relurl = k.URI, h.rawByteRange = k.BYTERANGE, h.baseurl = e, h.level = i, h.type = n, h.sn = "initSegment", l.initSegment = h, h = new Wt;
                                            break;
                                        default:
                                            Pt.b.warn("line parsed but not handled: " + r)
                                    }
                                }
                            }
                            return h = d, h && !h.relurl && (l.fragments.pop(), s -= h.duration), l.totalduration = s, l.averagetargetduration = s / l.fragments.length, l.endSN = o - 1, l.startCC = l.fragments[0] ? l.fragments[0].cc : 0, l.endCC = c, l
                        }, e.prototype.loadsuccess = function (t, e, i) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = t.data,
                                a = t.url, o = i.type, s = i.id, l = i.level, u = this.hls;
                            if (this.loaders[o] = void 0, void 0 !== a && 0 !== a.indexOf("data:") || (a = i.url), e.tload = performance.now(), 0 === r.indexOf("#EXTM3U")) if (r.indexOf("#EXTINF:") > 0) {
                                var c = "audioTrack" !== o && "subtitleTrack" !== o, d = isNaN(l) ? isNaN(s) ? 0 : s : l,
                                    h = this.parseLevelPlaylist(r, a, d, "audioTrack" === o ? "audio" : "subtitleTrack" === o ? "subtitle" : "main");
                                h.tload = e.tload, "manifest" === o && u.trigger(Dt.a.MANIFEST_LOADED, {
                                    levels: [{
                                        url: a,
                                        details: h
                                    }], audioTracks: [], url: a, stats: e, networkDetails: n
                                }), e.tparsed = performance.now(), h.targetduration ? c ? u.trigger(Dt.a.LEVEL_LOADED, {
                                    details: h,
                                    level: l || 0,
                                    id: s || 0,
                                    stats: e,
                                    networkDetails: n
                                }) : "audioTrack" === o ? u.trigger(Dt.a.AUDIO_TRACK_LOADED, {
                                    details: h,
                                    id: s,
                                    stats: e,
                                    networkDetails: n
                                }) : "subtitleTrack" === o && u.trigger(Dt.a.SUBTITLE_TRACK_LOADED, {
                                    details: h,
                                    id: s,
                                    stats: e,
                                    networkDetails: n
                                }) : u.trigger(Dt.a.ERROR, {
                                    type: Ot.b.NETWORK_ERROR,
                                    details: Ot.a.MANIFEST_PARSING_ERROR,
                                    fatal: !0,
                                    url: a,
                                    reason: "invalid targetduration",
                                    networkDetails: n
                                })
                            } else {
                                var f = this.parseMasterPlaylist(r, a);
                                if (f.length) {
                                    var p = f.map(function (t) {
                                            return {id: t.attrs.AUDIO, codec: t.audioCodec}
                                        }), g = this.parseMasterPlaylistMedia(r, a, "AUDIO", p),
                                        y = this.parseMasterPlaylistMedia(r, a, "SUBTITLES");
                                    if (g.length) {
                                        var m = !1;
                                        g.forEach(function (t) {
                                            t.url || (m = !0)
                                        }), !1 === m && f[0].audioCodec && !f[0].attrs.AUDIO && (Pt.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
                                            type: "main",
                                            name: "main"
                                        }))
                                    }
                                    u.trigger(Dt.a.MANIFEST_LOADED, {
                                        levels: f,
                                        audioTracks: g,
                                        subtitles: y,
                                        url: a,
                                        stats: e,
                                        networkDetails: n
                                    })
                                } else u.trigger(Dt.a.ERROR, {
                                    type: Ot.b.NETWORK_ERROR,
                                    details: Ot.a.MANIFEST_PARSING_ERROR,
                                    fatal: !0,
                                    url: a,
                                    reason: "no level found in manifest",
                                    networkDetails: n
                                })
                            } else u.trigger(Dt.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: Ot.a.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: a,
                                reason: "no EXTM3U delimiter",
                                networkDetails: n
                            })
                        }, e.prototype.loaderror = function (t, e) {
                            var i, n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                a = e.loader;
                            switch (e.type) {
                                case"manifest":
                                    i = Ot.a.MANIFEST_LOAD_ERROR, n = !0;
                                    break;
                                case"level":
                                    i = Ot.a.LEVEL_LOAD_ERROR, n = !1;
                                    break;
                                case"audioTrack":
                                    i = Ot.a.AUDIO_TRACK_LOAD_ERROR, n = !1
                            }
                            a && (a.abort(), this.loaders[e.type] = void 0), this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: i,
                                fatal: n,
                                url: a.url,
                                loader: a,
                                response: t,
                                context: e,
                                networkDetails: r
                            })
                        }, e.prototype.loadtimeout = function (t, e) {
                            var i, n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                a = e.loader;
                            switch (e.type) {
                                case"manifest":
                                    i = Ot.a.MANIFEST_LOAD_TIMEOUT, n = !0;
                                    break;
                                case"level":
                                    i = Ot.a.LEVEL_LOAD_TIMEOUT, n = !1;
                                    break;
                                case"audioTrack":
                                    i = Ot.a.AUDIO_TRACK_LOAD_TIMEOUT, n = !1
                            }
                            a && (a.abort(), this.loaders[e.type] = void 0), this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: i,
                                fatal: n,
                                url: a.url,
                                loader: a,
                                context: e,
                                networkDetails: r
                            })
                        }, e
                    }(Mt), Xt = qt, Zt = function (t) {
                        function e(i) {
                            d(this, e);
                            var n = h(this, t.call(this, i, Dt.a.FRAG_LOADING));
                            return n.loaders = {}, n
                        }

                        return f(e, t), e.prototype.destroy = function () {
                            var t = this.loaders;
                            for (var e in t) {
                                var i = t[e];
                                i && i.destroy()
                            }
                            this.loaders = {}, Mt.prototype.destroy.call(this)
                        }, e.prototype.onFragLoading = function (t) {
                            var e = t.frag, i = e.type, n = this.loaders[i], r = this.hls.config;
                            e.loaded = 0, n && (Pt.b.warn("abort previous fragment loader for type:" + i), n.abort()), n = this.loaders[i] = e.loader = void 0 !== r.fLoader ? new r.fLoader(r) : new r.loader(r);
                            var a = void 0, o = void 0, s = void 0;
                            a = {url: e.url, frag: e, responseType: "arraybuffer", progressData: !1};
                            var l = e.byteRangeStartOffset, u = e.byteRangeEndOffset;
                            isNaN(l) || isNaN(u) || (a.rangeStart = l, a.rangeEnd = u), o = {
                                timeout: r.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: r.fragLoadingMaxRetryTimeout
                            }, s = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this),
                                onProgress: this.loadprogress.bind(this)
                            }, n.load(a, o, s)
                        }, e.prototype.loadsuccess = function (t, e, i) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = t.data,
                                a = i.frag;
                            a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(Dt.a.FRAG_LOADED, {
                                payload: r,
                                frag: a,
                                stats: e,
                                networkDetails: n
                            })
                        }, e.prototype.loaderror = function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e.loader;
                            n && n.abort(), this.loaders[e.type] = void 0, this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: Ot.a.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: e.frag,
                                response: t,
                                networkDetails: i
                            })
                        }, e.prototype.loadtimeout = function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e.loader;
                            n && n.abort(), this.loaders[e.type] = void 0, this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: Ot.a.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: e.frag,
                                networkDetails: i
                            })
                        }, e.prototype.loadprogress = function (t, e, i) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = e.frag;
                            r.loaded = t.loaded, this.hls.trigger(Dt.a.FRAG_LOAD_PROGRESS, {
                                frag: r,
                                stats: t,
                                networkDetails: n
                            })
                        }, e
                    }(Mt), Jt = Zt, Qt = function (t) {
                        function e(i) {
                            p(this, e);
                            var n = g(this, t.call(this, i, Dt.a.KEY_LOADING));
                            return n.loaders = {}, n.decryptkey = null, n.decrypturl = null, n
                        }

                        return y(e, t), e.prototype.destroy = function () {
                            for (var t in this.loaders) {
                                var e = this.loaders[t];
                                e && e.destroy()
                            }
                            this.loaders = {}, Mt.prototype.destroy.call(this)
                        }, e.prototype.onKeyLoading = function (t) {
                            var e = t.frag, i = e.type, n = this.loaders[i], r = e.decryptdata, a = r.uri;
                            if (a !== this.decrypturl || null === this.decryptkey) {
                                var o = this.hls.config;
                                n && (Pt.b.warn("abort previous key loader for type:" + i), n.abort()), e.loader = this.loaders[i] = new o.loader(o), this.decrypturl = a, this.decryptkey = null;
                                var s = void 0, l = void 0, u = void 0;
                                s = {url: a, frag: e, responseType: "arraybuffer"}, l = {
                                    timeout: o.fragLoadingTimeOut,
                                    maxRetry: o.fragLoadingMaxRetry,
                                    retryDelay: o.fragLoadingRetryDelay,
                                    maxRetryDelay: o.fragLoadingMaxRetryTimeout
                                }, u = {
                                    onSuccess: this.loadsuccess.bind(this),
                                    onError: this.loaderror.bind(this),
                                    onTimeout: this.loadtimeout.bind(this)
                                }, e.loader.load(s, l, u)
                            } else this.decryptkey && (r.key = this.decryptkey, this.hls.trigger(Dt.a.KEY_LOADED, {frag: e}))
                        }, e.prototype.loadsuccess = function (t, e, i) {
                            var n = i.frag;
                            this.decryptkey = n.decryptdata.key = new Uint8Array(t.data), n.loader = void 0, this.loaders[n.type] = void 0, this.hls.trigger(Dt.a.KEY_LOADED, {frag: n})
                        }, e.prototype.loaderror = function (t, e) {
                            var i = e.frag, n = i.loader;
                            n && n.abort(), this.loaders[e.type] = void 0, this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: Ot.a.KEY_LOAD_ERROR,
                                fatal: !1,
                                frag: i,
                                response: t
                            })
                        }, e.prototype.loadtimeout = function (t, e) {
                            var i = e.frag, n = i.loader;
                            n && n.abort(), this.loaders[e.type] = void 0, this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: Ot.a.KEY_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: i
                            })
                        }, e
                    }(Mt), te = Qt, ee = {
                        search: function (t, e) {
                            for (var i = 0, n = t.length - 1, r = null, a = null; i <= n;) {
                                r = (i + n) / 2 | 0, a = t[r];
                                var o = e(a);
                                if (o > 0) i = r + 1; else {
                                    if (!(o < 0)) return a;
                                    n = r - 1
                                }
                            }
                            return null
                        }
                    }, ie = ee, ne = {
                        isBuffered: function (t, e) {
                            try {
                                if (t) for (var i = t.buffered, n = 0; n < i.length; n++) if (e >= i.start(n) && e <= i.end(n)) return !0
                            } catch (t) {
                            }
                            return !1
                        }, bufferInfo: function (t, e, i) {
                            try {
                                if (t) {
                                    var n, r = t.buffered, a = [];
                                    for (n = 0; n < r.length; n++) a.push({start: r.start(n), end: r.end(n)});
                                    return this.bufferedInfo(a, e, i)
                                }
                            } catch (t) {
                            }
                            return {len: 0, start: e, end: e, nextStart: void 0}
                        }, bufferedInfo: function (t, e, i) {
                            var n, r, a, o, s, l = [];
                            for (t.sort(function (t, e) {
                                var i = t.start - e.start;
                                return i || e.end - t.end
                            }), s = 0; s < t.length; s++) {
                                var u = l.length;
                                if (u) {
                                    var c = l[u - 1].end;
                                    t[s].start - c < i ? t[s].end > c && (l[u - 1].end = t[s].end) : l.push(t[s])
                                } else l.push(t[s])
                            }
                            for (s = 0, n = 0, r = a = e; s < l.length; s++) {
                                var d = l[s].start, h = l[s].end;
                                if (e + i >= d && e < h) r = d, a = h, n = a - e; else if (e + i < d) {
                                    o = d;
                                    break
                                }
                            }
                            return {len: n, start: r, end: a, nextStart: o}
                        }
                    }, re = ne, ae = i(7), oe = i(5), se = i.n(oe), le = i(9), ue = i.n(le), ce = m(), de = function () {
                        function t(e, i) {
                            v(this, t), this.hls = e, this.id = i;
                            var n = this.observer = new se.a, r = e.config;
                            n.trigger = function (t) {
                                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                                n.emit.apply(n, [t, t].concat(i))
                            }, n.off = function (t) {
                                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                                n.removeListener.apply(n, [t].concat(i))
                            };
                            var a = function (t, i) {
                                i = i || {}, i.frag = this.frag, i.id = this.id, e.trigger(t, i)
                            }.bind(this);
                            n.on(Dt.a.FRAG_DECRYPTED, a), n.on(Dt.a.FRAG_PARSING_INIT_SEGMENT, a), n.on(Dt.a.FRAG_PARSING_DATA, a), n.on(Dt.a.FRAG_PARSED, a), n.on(Dt.a.ERROR, a), n.on(Dt.a.FRAG_PARSING_METADATA, a), n.on(Dt.a.FRAG_PARSING_USERDATA, a), n.on(Dt.a.INIT_PTS_FOUND, a);
                            var o = {
                                mp4: ce.isTypeSupported("video/mp4"),
                                mpeg: ce.isTypeSupported("audio/mpeg"),
                                mp3: ce.isTypeSupported('audio/mp4; codecs="mp3"')
                            }, s = navigator.vendor;
                            if (r.enableWorker && "undefined" != typeof Worker) {
                                Pt.b.log("demuxing in webworker");
                                var l = void 0;
                                try {
                                    l = this.w = ue()(10), this.onwmsg = this.onWorkerMessage.bind(this), l.addEventListener("message", this.onwmsg), l.onerror = function (t) {
                                        e.trigger(Dt.a.ERROR, {
                                            type: Ot.b.OTHER_ERROR,
                                            details: Ot.a.INTERNAL_EXCEPTION,
                                            fatal: !0,
                                            event: "demuxerWorker",
                                            err: {message: t.message + " (" + t.filename + ":" + t.lineno + ")"}
                                        })
                                    }, l.postMessage({
                                        cmd: "init",
                                        typeSupported: o,
                                        vendor: s,
                                        id: i,
                                        config: JSON.stringify(r)
                                    })
                                } catch (t) {
                                    Pt.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), l && URL.revokeObjectURL(l.objectURL), this.demuxer = new ae.a(n, o, r, s), this.w = void 0
                                }
                            } else this.demuxer = new ae.a(n, o, r, s)
                        }

                        return t.prototype.destroy = function () {
                            var t = this.w;
                            if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.w = null; else {
                                var e = this.demuxer;
                                e && (e.destroy(), this.demuxer = null)
                            }
                            var i = this.observer;
                            i && (i.removeAllListeners(), this.observer = null)
                        }, t.prototype.push = function (t, e, i, n, r, a, o, s) {
                            var l = this.w, u = isNaN(r.startDTS) ? r.start : r.startDTS, c = r.decryptdata, d = this.frag,
                                h = !(d && r.cc === d.cc), f = !(d && r.level === d.level), p = d && r.sn === d.sn + 1,
                                g = !f && p;
                            if (h && Pt.b.log(this.id + ":discontinuity detected"), f && Pt.b.log(this.id + ":switch detected"), this.frag = r, l) l.postMessage({
                                cmd: "demux",
                                data: t,
                                decryptdata: c,
                                initSegment: e,
                                audioCodec: i,
                                videoCodec: n,
                                timeOffset: u,
                                discontinuity: h,
                                trackSwitch: f,
                                contiguous: g,
                                duration: a,
                                accurateTimeOffset: o,
                                defaultInitPTS: s
                            }, t instanceof ArrayBuffer ? [t] : []); else {
                                var y = this.demuxer;
                                y && y.push(t, c, e, i, n, u, h, f, g, a, o, s)
                            }
                        }, t.prototype.onWorkerMessage = function (t) {
                            var e = t.data, i = this.hls;
                            switch (e.event) {
                                case"init":
                                    URL.revokeObjectURL(this.w.objectURL);
                                    break;
                                case Dt.a.FRAG_PARSING_DATA:
                                    e.data.data1 = new Uint8Array(e.data1), e.data2 && (e.data.data2 = new Uint8Array(e.data2));
                                default:
                                    e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, i.trigger(e.event, e.data)
                            }
                        }, t
                    }(), he = de, fe = {
                        toString: function (t) {
                            for (var e = "", i = t.length, n = 0; n < i; n++) e += "[" + t.start(n).toFixed(3) + "," + t.end(n).toFixed(3) + "]";
                            return e
                        }
                    }, pe = fe, ge = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), ye = {
                        STOPPED: "STOPPED",
                        IDLE: "IDLE",
                        KEY_LOADING: "KEY_LOADING",
                        FRAG_LOADING: "FRAG_LOADING",
                        FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                        WAITING_LEVEL: "WAITING_LEVEL",
                        PARSING: "PARSING",
                        PARSED: "PARSED",
                        BUFFER_FLUSHING: "BUFFER_FLUSHING",
                        ENDED: "ENDED",
                        ERROR: "ERROR"
                    }, me = function (t) {
                        function e(i) {
                            C(this, e);
                            var n = w(this, t.call(this, i, Dt.a.MEDIA_ATTACHED, Dt.a.MEDIA_DETACHING, Dt.a.MANIFEST_LOADING, Dt.a.MANIFEST_PARSED, Dt.a.LEVEL_LOADED, Dt.a.KEY_LOADED, Dt.a.FRAG_LOADED, Dt.a.FRAG_LOAD_EMERGENCY_ABORTED, Dt.a.FRAG_PARSING_INIT_SEGMENT, Dt.a.FRAG_PARSING_DATA, Dt.a.FRAG_PARSED, Dt.a.ERROR, Dt.a.AUDIO_TRACK_SWITCHING, Dt.a.AUDIO_TRACK_SWITCHED, Dt.a.BUFFER_CREATED, Dt.a.BUFFER_APPENDED, Dt.a.BUFFER_FLUSHED));
                            return n.config = i.config, n.audioCodecSwap = !1, n.ticks = 0, n._state = ye.STOPPED, n.ontick = n.tick.bind(n), n
                        }

                        return I(e, t), e.prototype.destroy = function () {
                            this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), Mt.prototype.destroy.call(this), this.state = ye.STOPPED
                        }, e.prototype.startLoad = function (t) {
                            if (this.levels) {
                                var e = this.lastCurrentTime, i = this.hls;
                                if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                    var n = i.startLevel;
                                    -1 === n && (n = 0, this.bitrateTest = !0), this.level = i.nextLoadLevel = n, this.loadedmetadata = !1
                                }
                                e > 0 && -1 === t && (Pt.b.log("override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = ye.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                            } else this.forceStartLoad = !0, this.state = ye.STOPPED
                        }, e.prototype.stopLoad = function () {
                            var t = this.fragCurrent;
                            t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = ye.STOPPED, this.forceStartLoad = !1
                        }, e.prototype.tick = function () {
                            1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                        }, e.prototype.doTick = function () {
                            switch (this.state) {
                                case ye.ERROR:
                                    break;
                                case ye.BUFFER_FLUSHING:
                                    this.fragLoadError = 0;
                                    break;
                                case ye.IDLE:
                                    this._doTickIdle();
                                    break;
                                case ye.WAITING_LEVEL:
                                    var t = this.levels[this.level];
                                    t && t.details && (this.state = ye.IDLE);
                                    break;
                                case ye.FRAG_LOADING_WAITING_RETRY:
                                    var e = performance.now(), i = this.retryDate;
                                    (!i || e >= i || this.media && this.media.seeking) && (Pt.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = ye.IDLE);
                                    break;
                                case ye.ERROR:
                                case ye.STOPPED:
                                case ye.FRAG_LOADING:
                                case ye.PARSING:
                                case ye.PARSED:
                                case ye.ENDED:
                            }
                            this._checkBuffer(), this._checkFragmentChanged()
                        }, e.prototype._doTickIdle = function () {
                            var t = this.hls, e = t.config, i = this.media;
                            if (void 0 !== this.levelLastLoaded && (i || !this.startFragRequested && e.startFragPrefetch)) {
                                var n = void 0;
                                n = this.loadedmetadata ? i.currentTime : this.nextLoadPosition;
                                var r = t.nextLoadLevel, a = this.levels[r];
                                if (a) {
                                    var o = a.bitrate, s = void 0;
                                    s = o ? Math.max(8 * e.maxBufferSize / o, e.maxBufferLength) : e.maxBufferLength, s = Math.min(s, e.maxMaxBufferLength);
                                    var l = re.bufferInfo(this.mediaBuffer ? this.mediaBuffer : i, n, e.maxBufferHole),
                                        u = l.len;
                                    if (!(u >= s)) {
                                        Pt.b.trace("buffer length of " + u.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."), this.level = t.nextLoadLevel = r;
                                        var c = a.details;
                                        if (void 0 === c || !0 === c.live && this.levelLastLoaded !== r) return void(this.state = ye.WAITING_LEVEL);
                                        var d = this.fragPrevious;
                                        if (!c.live && d && !d.backtracked && d.sn === c.endSN && !l.nextStart) {
                                            if (Math.min(i.duration, d.start + d.duration) - Math.max(l.end, d.start) <= Math.max(.2, d.duration)) {
                                                var h = {};
                                                return this.altAudio && (h.type = "video"), this.hls.trigger(Dt.a.BUFFER_EOS, h), void(this.state = ye.ENDED)
                                            }
                                        }
                                        this._fetchPayloadOrEos(n, l, c)
                                    }
                                }
                            }
                        }, e.prototype._fetchPayloadOrEos = function (t, e, i) {
                            var n = this.fragPrevious, r = this.level, a = i.fragments, o = a.length;
                            if (0 !== o) {
                                var s = a[0].start, l = a[o - 1].start + a[o - 1].duration, u = e.end, c = void 0;
                                if (i.initSegment && !i.initSegment.data) c = i.initSegment; else if (i.live) {
                                    var d = this.config.initialLiveManifestSize;
                                    if (o < d) return void Pt.b.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + d);
                                    if (null === (c = this._ensureFragmentAtLivePoint(i, u, s, l, n, a, o))) return
                                } else u < s && (c = a[0]);
                                c || (c = this._findFragment(s, n, o, a, u, l, i)), c && this._loadFragmentOrKey(c, r, i, t, u)
                            }
                        }, e.prototype._ensureFragmentAtLivePoint = function (t, e, i, n, r, a, o) {
                            var s = this.hls.config, l = this.media, u = void 0,
                                c = void 0 !== s.liveMaxLatencyDuration ? s.liveMaxLatencyDuration : s.liveMaxLatencyDurationCount * t.targetduration;
                            if (e < Math.max(i - s.maxFragLookUpTolerance, n - c)) {
                                var d = this.liveSyncPosition = this.computeLivePosition(i, t);
                                Pt.b.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + d.toFixed(3)), e = d, l && l.readyState && l.duration > d && (l.currentTime = d), this.nextLoadPosition = d
                            }
                            if (t.PTSKnown && e > n && l && l.readyState) return null;
                            if (this.startFragRequested && !t.PTSKnown) {
                                if (r) {
                                    var h = r.sn + 1;
                                    if (h >= t.startSN && h <= t.endSN) {
                                        var f = a[h - t.startSN];
                                        r.cc === f.cc && (u = f, Pt.b.log("live playlist, switching playlist, load frag with next SN: " + u.sn))
                                    }
                                    u || (u = ie.search(a, function (t) {
                                        return r.cc - t.cc
                                    })) && Pt.b.log("live playlist, switching playlist, load frag with same CC: " + u.sn)
                                }
                                u || (u = a[Math.min(o - 1, Math.round(o / 2))], Pt.b.log("live playlist, switching playlist, unknown, load middle frag : " + u.sn))
                            }
                            return u
                        }, e.prototype._findFragment = function (t, e, i, n, r, a, o) {
                            var s = this.hls.config, l = void 0, u = void 0, c = s.maxFragLookUpTolerance,
                                d = e ? n[e.sn - n[0].sn + 1] : void 0, h = function (t) {
                                    var e = Math.min(c, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
                                    return t.start + t.duration - e <= r ? 1 : t.start - e > r && t.start ? -1 : 0
                                };
                            if (r < a ? (r > a - c && (c = 0), u = d && !h(d) ? d : ie.search(n, h)) : u = n[i - 1], u) {
                                l = u;
                                var f = l.sn - o.startSN, p = e && l.level === e.level, g = n[f - 1], y = n[f + 1];
                                if (e && l.sn === e.sn) if (p && !l.backtracked) if (l.sn < o.endSN) {
                                    var m = e.deltaPTS;
                                    m && m > s.maxBufferHole && e.dropped && f ? (l = g, Pt.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), e.loadCounter--) : (l = y, Pt.b.log("SN just loaded, load next one: " + l.sn))
                                } else l = null; else l.backtracked && (y && y.backtracked ? (Pt.b.warn("Already backtracked from fragment " + y.sn + ", will not backtrack to fragment " + l.sn + ". Loading fragment " + y.sn), l = y) : (Pt.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), l.dropped = 0, g ? (g.loadCounter && g.loadCounter--, l = g, l.backtracked = !0) : f && (l = null)))
                            }
                            return l
                        }, e.prototype._loadFragmentOrKey = function (t, e, i, n, r) {
                            var a = this.hls, o = a.config;
                            if (!t.decryptdata || null == t.decryptdata.uri || null != t.decryptdata.key) {
                                if (Pt.b.log("Loading " + t.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + e + ", currentTime:" + n.toFixed(3) + ",bufferEnd:" + r.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, t.loadCounter) {
                                    t.loadCounter++;
                                    var s = o.fragLoadingLoopThreshold;
                                    if (t.loadCounter > s && Math.abs(this.fragLoadIdx - t.loadIdx) < s) return void a.trigger(Dt.a.ERROR, {
                                        type: Ot.b.MEDIA_ERROR,
                                        details: Ot.a.FRAG_LOOP_LOADING_ERROR,
                                        fatal: !1,
                                        frag: t
                                    })
                                } else t.loadCounter = 1;
                                return t.loadIdx = this.fragLoadIdx, t.autoLevel = a.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.fragCurrent = t, this.startFragRequested = !0, isNaN(t.sn) || t.bitrateTest || (this.nextLoadPosition = t.start + t.duration), a.trigger(Dt.a.FRAG_LOADING, {frag: t}), this.demuxer || (this.demuxer = new he(a, "main")), void(this.state = ye.FRAG_LOADING)
                            }
                            Pt.b.log("Loading key for " + t.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + e), this.state = ye.KEY_LOADING, a.trigger(Dt.a.KEY_LOADING, {frag: t})
                        }, e.prototype.getBufferedFrag = function (t) {
                            return ie.search(this._bufferedFrags, function (e) {
                                return t < e.startPTS ? -1 : t > e.endPTS ? 1 : 0
                            })
                        }, e.prototype.followingBufferedFrag = function (t) {
                            return t ? this.getBufferedFrag(t.endPTS + .5) : null
                        }, e.prototype._checkFragmentChanged = function () {
                            var t, e, i = this.media;
                            if (i && i.readyState && !1 === i.seeking && (e = i.currentTime, e > i.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = e), re.isBuffered(i, e) ? t = this.getBufferedFrag(e) : re.isBuffered(i, e + .1) && (t = this.getBufferedFrag(e + .1)), t)) {
                                var n = t;
                                if (n !== this.fragPlaying) {
                                    this.hls.trigger(Dt.a.FRAG_CHANGED, {frag: n});
                                    var r = n.level;
                                    this.fragPlaying && this.fragPlaying.level === r || this.hls.trigger(Dt.a.LEVEL_SWITCHED, {level: r}), this.fragPlaying = n
                                }
                            }
                        }, e.prototype.immediateLevelSwitch = function () {
                            if (Pt.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
                                this.immediateSwitch = !0;
                                var t = this.media, e = void 0;
                                t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
                            }
                            var i = this.fragCurrent;
                            i && i.loader && i.loader.abort(), this.fragCurrent = null, void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                        }, e.prototype.immediateLevelSwitchEnd = function () {
                            var t = this.media;
                            t && t.buffered.length && (this.immediateSwitch = !1, re.isBuffered(t, t.currentTime) && (t.currentTime -= 1e-4), this.previouslyPaused || t.play())
                        }, e.prototype.nextLevelSwitch = function () {
                            var t = this.media;
                            if (t && t.readyState) {
                                var e = void 0, i = void 0, n = void 0;
                                if (void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), i = this.getBufferedFrag(t.currentTime), i && i.startPTS > 1 && this.flushMainBuffer(0, i.startPTS - 1), t.paused) e = 0; else {
                                    var r = this.hls.nextLoadLevel, a = this.levels[r], o = this.fragLastKbps;
                                    e = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
                                }
                                if ((n = this.getBufferedFrag(t.currentTime + e)) && (n = this.followingBufferedFrag(n))) {
                                    var s = this.fragCurrent;
                                    s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(n.maxStartPTS, Number.POSITIVE_INFINITY)
                                }
                            }
                        }, e.prototype.flushMainBuffer = function (t, e) {
                            this.state = ye.BUFFER_FLUSHING;
                            var i = {startOffset: t, endOffset: e};
                            this.altAudio && (i.type = "video"), this.hls.trigger(Dt.a.BUFFER_FLUSHING, i)
                        }, e.prototype.onMediaAttached = function (t) {
                            var e = this.media = this.mediaBuffer = t.media;
                            this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("seeked", this.onvseeked), e.addEventListener("ended", this.onvended);
                            var i = this.config;
                            this.levels && i.autoStartLoad && this.hls.startLoad(i.startPosition)
                        }, e.prototype.onMediaDetaching = function () {
                            var t = this.media;
                            t && t.ended && (Pt.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                            var e = this.levels;
                            e && e.forEach(function (t) {
                                t.details && t.details.fragments.forEach(function (t) {
                                    t.loadCounter = void 0, t.backtracked = void 0
                                })
                            }), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("seeked", this.onvseeked), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                        }, e.prototype.onMediaSeeking = function () {
                            var t = this.media, e = t ? t.currentTime : void 0, i = this.config;
                            isNaN(e) || Pt.b.log("media seeking to " + e.toFixed(3));
                            var n = this.mediaBuffer ? this.mediaBuffer : t,
                                r = re.bufferInfo(n, e, this.config.maxBufferHole);
                            if (this.state === ye.FRAG_LOADING) {
                                var a = this.fragCurrent;
                                if (0 === r.len && a) {
                                    var o = i.maxFragLookUpTolerance, s = a.start - o, l = a.start + a.duration + o;
                                    e < s || e > l ? (a.loader && (Pt.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), a.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = ye.IDLE) : Pt.b.log("seeking outside of buffer but within currently loaded fragment range")
                                }
                            } else this.state === ye.ENDED && (0 === r.len && (this.fragPrevious = 0), this.state = ye.IDLE);
                            t && (this.lastCurrentTime = e), this.state !== ye.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * i.fragLoadingLoopThreshold), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = e), this.tick()
                        }, e.prototype.onMediaSeeked = function () {
                            var t = this.media, e = t ? t.currentTime : void 0;
                            isNaN(e) || Pt.b.log("media seeked to " + e.toFixed(3)), this.tick()
                        }, e.prototype.onMediaEnded = function () {
                            Pt.b.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                        }, e.prototype.onManifestLoading = function () {
                            Pt.b.log("trigger BUFFER_RESET"), this.hls.trigger(Dt.a.BUFFER_RESET), this._bufferedFrags = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                        }, e.prototype.onManifestParsed = function (t) {
                            var e, i = !1, n = !1;
                            t.levels.forEach(function (t) {
                                (e = t.audioCodec) && (-1 !== e.indexOf("mp4a.40.2") && (i = !0), -1 !== e.indexOf("mp4a.40.5") && (n = !0))
                            }), this.audioCodecSwitch = i && n, this.audioCodecSwitch && Pt.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
                            var r = this.config;
                            (r.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(r.startPosition)
                        }, e.prototype.onLevelLoaded = function (t) {
                            var e = t.details, i = t.level, n = this.levels[this.levelLastLoaded], r = this.levels[i],
                                a = e.totalduration, o = 0;
                            if (Pt.b.log("level " + i + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + a), e.live) {
                                var s = r.details;
                                s && e.fragments.length > 0 ? (E(s, e), o = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, s), e.PTSKnown && !isNaN(o) ? Pt.b.log("live playlist sliding:" + o.toFixed(3)) : (Pt.b.log("live playlist - outdated PTS, unknown sliding"), k(this.fragPrevious, n, e))) : (Pt.b.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, k(this.fragPrevious, n, e))
                            } else e.PTSKnown = !1;
                            if (r.details = e, this.levelLastLoaded = i, this.hls.trigger(Dt.a.LEVEL_UPDATED, {
                                    details: e,
                                    level: i
                                }), !1 === this.startFragRequested) {
                                if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                    var l = e.startTimeOffset;
                                    isNaN(l) ? e.live ? (this.startPosition = this.computeLivePosition(o, e), Pt.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (l < 0 && (Pt.b.log("negative start time offset " + l + ", count from end of last fragment"), l = o + a + l), Pt.b.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l), this.lastCurrentTime = this.startPosition
                                }
                                this.nextLoadPosition = this.startPosition
                            }
                            this.state === ye.WAITING_LEVEL && (this.state = ye.IDLE), this.tick()
                        }, e.prototype.onKeyLoaded = function () {
                            this.state === ye.KEY_LOADING && (this.state = ye.IDLE, this.tick())
                        }, e.prototype.onFragLoaded = function (t) {
                            var e = this.fragCurrent, i = t.frag;
                            if (this.state === ye.FRAG_LOADING && e && "main" === i.type && i.level === e.level && i.sn === e.sn) {
                                var n = t.stats, r = this.levels[e.level], a = r.details;
                                if (Pt.b.log("Loaded  " + e.sn + " of [" + a.startSN + " ," + a.endSN + "],level " + e.level), this.bitrateTest = !1, this.stats = n, !0 === i.bitrateTest && this.hls.nextLoadLevel) this.state = ye.IDLE, this.startFragRequested = !1, n.tparsed = n.tbuffered = performance.now(), this.hls.trigger(Dt.a.FRAG_BUFFERED, {
                                    stats: n,
                                    frag: e,
                                    id: "main"
                                }), this.tick(); else if ("initSegment" === i.sn) this.state = ye.IDLE, n.tparsed = n.tbuffered = performance.now(), a.initSegment.data = t.payload, this.hls.trigger(Dt.a.FRAG_BUFFERED, {
                                    stats: n,
                                    frag: e,
                                    id: "main"
                                }), this.tick(); else {
                                    this.state = ye.PARSING;
                                    var o = a.totalduration, s = e.level, l = e.sn,
                                        u = this.config.defaultAudioCodec || r.audioCodec;
                                    this.audioCodecSwap && (Pt.b.log("swapping playlist audio codec"), void 0 === u && (u = this.lastAudioCodec), u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, Pt.b.log("Parsing " + l + " of [" + a.startSN + " ," + a.endSN + "],level " + s + ", cc " + e.cc);
                                    var c = this.demuxer;
                                    c || (c = this.demuxer = new he(this.hls, "main"));
                                    var d = this.media, h = d && d.seeking, f = !h && (a.PTSKnown || !a.live),
                                        p = a.initSegment ? a.initSegment.data : [];
                                    c.push(t.payload, p, u, r.videoCodec, e, o, f, void 0)
                                }
                            }
                            this.fragLoadError = 0
                        }, e.prototype.onFragParsingInitSegment = function (t) {
                            var e = this.fragCurrent, i = t.frag;
                            if (e && "main" === t.id && i.sn === e.sn && i.level === e.level && this.state === ye.PARSING) {
                                var n, r, a = t.tracks;
                                if (a.audio && this.altAudio && delete a.audio, r = a.audio) {
                                    var o = this.levels[this.level].audioCodec, s = navigator.userAgent.toLowerCase();
                                    o && this.audioCodecSwap && (Pt.b.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== r.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== r.container && (o = "mp4a.40.2", Pt.b.log("Android: force audio codec to " + o)), r.levelCodec = o, r.id = t.id
                                }
                                r = a.video, r && (r.levelCodec = this.levels[this.level].videoCodec, r.id = t.id), this.hls.trigger(Dt.a.BUFFER_CODECS, a);
                                for (n in a) {
                                    r = a[n], Pt.b.log("main track:" + n + ",container:" + r.container + ",codecs[level/parsed]=[" + r.levelCodec + "/" + r.codec + "]");
                                    var l = r.initSegment;
                                    l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(Dt.a.BUFFER_APPENDING, {
                                        type: n,
                                        data: l,
                                        parent: "main",
                                        content: "initSegment"
                                    }))
                                }
                                this.tick()
                            }
                        }, e.prototype.onFragParsingData = function (t) {
                            var e = this, i = this.fragCurrent, n = t.frag;
                            if (i && "main" === t.id && n.sn === i.sn && n.level === i.level && ("audio" !== t.type || !this.altAudio) && this.state === ye.PARSING) {
                                var r = this.levels[this.level], a = i;
                                if (isNaN(t.endPTS) && (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration), Pt.b.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type) if (a.dropped = t.dropped, a.dropped) if (a.backtracked) Pt.b.warn("Already backtracked on this fragment, appending with the gap"); else {
                                    var o = r.details;
                                    if (!o || a.sn !== o.startSN) return Pt.b.warn("missing video frame(s), backtracking fragment"), a.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = ye.IDLE, this.fragPrevious = a, void this.tick();
                                    Pt.b.warn("missing video frame(s) on first frag, appending with gap")
                                } else a.backtracked = !1;
                                var s = _(r.details, a, t.startPTS, t.endPTS, t.startDTS, t.endDTS), l = this.hls;
                                l.trigger(Dt.a.LEVEL_PTS_UPDATED, {
                                    details: r.details,
                                    level: this.level,
                                    drift: s,
                                    type: t.type,
                                    start: t.startPTS,
                                    end: t.endPTS
                                }), [t.data1, t.data2].forEach(function (i) {
                                    i && i.length && e.state === ye.PARSING && (e.appended = !0, e.pendingBuffering = !0, l.trigger(Dt.a.BUFFER_APPENDING, {
                                        type: t.type,
                                        data: i,
                                        parent: "main",
                                        content: "data"
                                    }))
                                }), this.tick()
                            }
                        }, e.prototype.onFragParsed = function (t) {
                            var e = this.fragCurrent, i = t.frag;
                            e && "main" === t.id && i.sn === e.sn && i.level === e.level && this.state === ye.PARSING && (this.stats.tparsed = performance.now(), this.state = ye.PARSED, this._checkAppendedParsed())
                        }, e.prototype.onAudioTrackSwitching = function (t) {
                            var e = !!t.url, i = t.id;
                            if (!e) {
                                if (this.mediaBuffer !== this.media) {
                                    Pt.b.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                    var n = this.fragCurrent;
                                    n.loader && (Pt.b.log("switching to main audio track, cancel main fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = ye.IDLE
                                }
                                var r = this.hls;
                                r.trigger(Dt.a.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                }), r.trigger(Dt.a.AUDIO_TRACK_SWITCHED, {id: i}), this.altAudio = !1
                            }
                        }, e.prototype.onAudioTrackSwitched = function (t) {
                            var e = t.id, i = !!this.hls.audioTracks[e].url;
                            if (i) {
                                var n = this.videoBuffer;
                                n && this.mediaBuffer !== n && (Pt.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                            }
                            this.altAudio = i, this.tick()
                        }, e.prototype.onBufferCreated = function (t) {
                            var e = t.tracks, i = void 0, n = void 0, r = !1;
                            for (var a in e) {
                                var o = e[a];
                                "main" === o.id ? (n = a, i = o, "video" === a && (this.videoBuffer = e[a].buffer)) : r = !0
                            }
                            r && i ? (Pt.b.log("alternate track found, use " + n + ".buffered to schedule main fragment loading"), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
                        }, e.prototype.onBufferAppended = function (t) {
                            if ("main" === t.parent) {
                                var e = this.state;
                                e !== ye.PARSING && e !== ye.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                            }
                        }, e.prototype._checkAppendedParsed = function () {
                            if (!(this.state !== ye.PARSED || this.appended && this.pendingBuffering)) {
                                var t = this.fragCurrent;
                                if (t) {
                                    var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                                    Pt.b.log("main buffered : " + pe.toString(e.buffered));
                                    var i = this._bufferedFrags.filter(function (t) {
                                        return re.isBuffered(e, (t.startPTS + t.endPTS) / 2)
                                    });
                                    i.push(t), this._bufferedFrags = i.sort(function (t, e) {
                                        return t.startPTS - e.startPTS
                                    }), this.fragPrevious = t;
                                    var n = this.stats;
                                    n.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * n.total / (n.tbuffered - n.tfirst)), this.hls.trigger(Dt.a.FRAG_BUFFERED, {
                                        stats: n,
                                        frag: t,
                                        id: "main"
                                    }), this.state = ye.IDLE
                                }
                                this.tick()
                            }
                        }, e.prototype.onError = function (t) {
                            var e = t.frag || this.fragCurrent;
                            if (!e || "main" === e.type) {
                                var i = !!this.media && re.isBuffered(this.media, this.media.currentTime) && re.isBuffered(this.media, this.media.currentTime + .5);
                                switch (t.details) {
                                    case Ot.a.FRAG_LOAD_ERROR:
                                    case Ot.a.FRAG_LOAD_TIMEOUT:
                                    case Ot.a.KEY_LOAD_ERROR:
                                    case Ot.a.KEY_LOAD_TIMEOUT:
                                        if (!t.fatal) if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                            var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                            e.loadCounter = 0, Pt.b.warn("mediaController: frag loading failed, retry in " + n + " ms"), this.retryDate = performance.now() + n, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = ye.FRAG_LOADING_WAITING_RETRY
                                        } else Pt.b.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = ye.ERROR;
                                        break;
                                    case Ot.a.FRAG_LOOP_LOADING_ERROR:
                                        t.fatal || (i ? (this._reduceMaxBufferLength(e.duration), this.state = ye.IDLE) : e.autoLevel && 0 !== e.level || (t.fatal = !0, this.state = ye.ERROR));
                                        break;
                                    case Ot.a.LEVEL_LOAD_ERROR:
                                    case Ot.a.LEVEL_LOAD_TIMEOUT:
                                        this.state !== ye.ERROR && (t.fatal ? (this.state = ye.ERROR, Pt.b.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== ye.WAITING_LEVEL || (this.state = ye.IDLE));
                                        break;
                                    case Ot.a.BUFFER_FULL_ERROR:
                                        "main" !== t.parent || this.state !== ye.PARSING && this.state !== ye.PARSED || (i ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = ye.IDLE) : (Pt.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                                }
                            }
                        }, e.prototype._reduceMaxBufferLength = function (t) {
                            var e = this.config;
                            e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, Pt.b.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * e.fragLoadingLoopThreshold))
                        }, e.prototype._checkBuffer = function () {
                            var t = this.media, e = this.config;
                            if (t && t.readyState) {
                                var i = t.currentTime, n = this.mediaBuffer ? this.mediaBuffer : t, r = n.buffered;
                                if (!this.loadedmetadata && r.length) {
                                    this.loadedmetadata = !0;
                                    var a = t.seeking ? i : this.startPosition, o = re.isBuffered(n, a), s = r.start(0),
                                        l = !o && Math.abs(a - s) < e.maxSeekHole;
                                    (i !== a || l) && (Pt.b.log("target start position:" + a), l && (a = s, Pt.b.log("target start position not buffered, seek to buffered.start(0) " + a)), Pt.b.log("adjust currentTime from " + i + " to " + a), t.currentTime = a)
                                } else if (this.immediateSwitch) this.immediateLevelSwitchEnd(); else {
                                    var u = re.bufferInfo(t, i, 0), c = !(t.paused || t.ended || 0 === t.buffered.length),
                                        d = i !== this.lastCurrentTime;
                                    if (d) this.stallReported && (Pt.b.warn("playback not stuck anymore @" + i + ", after " + Math.round(performance.now() - this.stalled) + "ms"), this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0; else if (c) {
                                        var h = performance.now(), f = this.hls;
                                        if (this.stalled) {
                                            var p = h - this.stalled, g = u.len, y = this.nudgeRetry || 0;
                                            if (g <= .5 && p > 1e3 * e.lowBufferWatchdogPeriod) {
                                                this.stallReported || (this.stallReported = !0, Pt.b.warn("playback stalling in low buffer @" + i), f.trigger(Dt.a.ERROR, {
                                                    type: Ot.b.MEDIA_ERROR,
                                                    details: Ot.a.BUFFER_STALLED_ERROR,
                                                    fatal: !1,
                                                    buffer: g
                                                }));
                                                var m = u.nextStart, v = m - i;
                                                if (m && v < e.maxSeekHole && v > 0) {
                                                    this.nudgeRetry = ++y;
                                                    var b = y * e.nudgeOffset;
                                                    Pt.b.log("adjust currentTime from " + t.currentTime + " to next buffered @ " + m + " + nudge " + b), t.currentTime = m + b, this.stalled = void 0, f.trigger(Dt.a.ERROR, {
                                                        type: Ot.b.MEDIA_ERROR,
                                                        details: Ot.a.BUFFER_SEEK_OVER_HOLE,
                                                        fatal: !1,
                                                        hole: m + b - i
                                                    })
                                                }
                                            } else if (g > .5 && p > 1e3 * e.highBufferWatchdogPeriod) if (this.stallReported || (this.stallReported = !0, Pt.b.warn("playback stalling in high buffer @" + i), f.trigger(Dt.a.ERROR, {
                                                    type: Ot.b.MEDIA_ERROR,
                                                    details: Ot.a.BUFFER_STALLED_ERROR,
                                                    fatal: !1,
                                                    buffer: g
                                                })), this.stalled = void 0, this.nudgeRetry = ++y, y < e.nudgeMaxRetry) {
                                                var _ = t.currentTime, E = _ + y * e.nudgeOffset;
                                                Pt.b.log("adjust currentTime from " + _ + " to " + E), t.currentTime = E, f.trigger(Dt.a.ERROR, {
                                                    type: Ot.b.MEDIA_ERROR,
                                                    details: Ot.a.BUFFER_NUDGE_ON_STALL,
                                                    fatal: !1
                                                })
                                            } else Pt.b.error("still stuck in high buffer @" + i + " after " + e.nudgeMaxRetry + ", raise fatal error"), f.trigger(Dt.a.ERROR, {
                                                type: Ot.b.MEDIA_ERROR,
                                                details: Ot.a.BUFFER_STALLED_ERROR,
                                                fatal: !0
                                            })
                                        } else this.stalled = h, this.stallReported = !1
                                    }
                                }
                            }
                        }, e.prototype.onFragLoadEmergencyAborted = function () {
                            this.state = ye.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
                        }, e.prototype.onBufferFlushed = function () {
                            var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                            this._bufferedFrags = this._bufferedFrags.filter(function (e) {
                                return re.isBuffered(t, (e.startPTS + e.endPTS) / 2)
                            }), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.state = ye.IDLE, this.fragPrevious = null
                        }, e.prototype.swapAudioCodec = function () {
                            this.audioCodecSwap = !this.audioCodecSwap
                        }, e.prototype.computeLivePosition = function (t, e) {
                            var i = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
                            return t + Math.max(0, e.totalduration - i)
                        }, ge(e, [{
                            key: "state", set: function (t) {
                                if (this.state !== t) {
                                    var e = this.state;
                                    this._state = t, Pt.b.log("main stream:" + e + "->" + t), this.hls.trigger(Dt.a.STREAM_STATE_TRANSITION, {
                                        previousState: e,
                                        nextState: t
                                    })
                                }
                            }, get: function () {
                                return this._state
                            }
                        }, {
                            key: "currentLevel", get: function () {
                                var t = this.media;
                                if (t) {
                                    var e = this.getBufferedFrag(t.currentTime);
                                    if (e) return e.level
                                }
                                return -1
                            }
                        }, {
                            key: "nextBufferedFrag", get: function () {
                                var t = this.media;
                                return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null
                            }
                        }, {
                            key: "nextLevel", get: function () {
                                var t = this.nextBufferedFrag;
                                return t ? t.level : -1
                            }
                        }, {
                            key: "liveSyncPosition", get: function () {
                                return this._liveSyncPosition
                            }, set: function (t) {
                                this._liveSyncPosition = t
                            }
                        }]), e
                    }(Mt), ve = me, be = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), _e = function (t) {
                        function e(i) {
                            D(this, e);
                            var n = O(this, t.call(this, i, Dt.a.MANIFEST_LOADED, Dt.a.LEVEL_LOADED, Dt.a.FRAG_LOADED, Dt.a.ERROR));
                            return n.canload = !1, n.currentLevelIndex = null, n.manualLevelIndex = -1, n.timer = null, n
                        }

                        return P(e, t), e.prototype.destroy = function () {
                            this.cleanTimer(), this.manualLevelIndex = -1
                        }, e.prototype.cleanTimer = function () {
                            null !== this.timer && (clearTimeout(this.timer), this.timer = null)
                        }, e.prototype.startLoad = function () {
                            var t = this._levels;
                            this.canload = !0, this.levelRetryCount = 0, t && t.forEach(function (t) {
                                t.loadError = 0;
                                var e = t.details;
                                e && e.live && (t.details = void 0)
                            }), null !== this.timer && this.loadLevel()
                        }, e.prototype.stopLoad = function () {
                            this.canload = !1
                        }, e.prototype.onManifestLoaded = function (t) {
                            var e = [], i = void 0, n = {}, r = null, a = !1, s = !1,
                                l = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), u = [];
                            if (t.levels.forEach(function (t) {
                                    t.loadError = 0, t.fragmentError = !1, a = a || !!t.videoCodec, s = s || !!t.audioCodec || !(!t.attrs || !t.attrs.AUDIO), !0 === l && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0), r = n[t.bitrate], void 0 === r ? (t.url = [t.url], t.urlId = 0, n[t.bitrate] = t, e.push(t)) : r.url.push(t.url)
                                }), !0 === a && !0 === s && (e = e.filter(function (t) {
                                    return !!t.videoCodec
                                })), e = e.filter(function (t) {
                                    var e = t.audioCodec, i = t.videoCodec;
                                    return (!e || o(e)) && (!i || o(i))
                                }), t.audioTracks && (u = t.audioTracks.filter(function (t) {
                                    return !t.audioCodec || o(t.audioCodec, "audio")
                                })), e.length > 0) {
                                i = e[0].bitrate, e.sort(function (t, e) {
                                    return t.bitrate - e.bitrate
                                }), this._levels = e;
                                for (var c = 0; c < e.length; c++) if (e[c].bitrate === i) {
                                    this._firstLevel = c, Pt.b.log("manifest loaded," + e.length + " level(s) found, first bitrate:" + i);
                                    break
                                }
                                this.hls.trigger(Dt.a.MANIFEST_PARSED, {
                                    levels: e,
                                    audioTracks: u,
                                    firstLevel: this._firstLevel,
                                    stats: t.stats,
                                    audio: s,
                                    video: a,
                                    altAudio: u.length > 0
                                })
                            } else this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.MEDIA_ERROR,
                                details: Ot.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                fatal: !0,
                                url: this.hls.url,
                                reason: "no level with compatible codecs found in manifest"
                            })
                        }, e.prototype.setLevelInternal = function (t) {
                            var e = this._levels, i = this.hls;
                            if (t >= 0 && t < e.length) {
                                if (this.cleanTimer(), this.currentLevelIndex !== t) {
                                    Pt.b.log("switching to level " + t), this.currentLevelIndex = t;
                                    var n = e[t];
                                    n.level = t, i.trigger(Dt.a.LEVEL_SWITCH, n), i.trigger(Dt.a.LEVEL_SWITCHING, n)
                                }
                                var r = e[t], a = r.details;
                                if (!a || !0 === a.live) {
                                    var o = r.urlId;
                                    i.trigger(Dt.a.LEVEL_LOADING, {url: r.url[o], level: t, id: o})
                                }
                            } else i.trigger(Dt.a.ERROR, {
                                type: Ot.b.OTHER_ERROR,
                                details: Ot.a.LEVEL_SWITCH_ERROR,
                                level: t,
                                fatal: !1,
                                reason: "invalid level idx"
                            })
                        }, e.prototype.onError = function (t) {
                            if (!0 === t.fatal) return void(t.type === Ot.b.NETWORK_ERROR && this.cleanTimer());
                            var e = !1, i = !1, n = void 0;
                            switch (t.details) {
                                case Ot.a.FRAG_LOAD_ERROR:
                                case Ot.a.FRAG_LOAD_TIMEOUT:
                                case Ot.a.FRAG_LOOP_LOADING_ERROR:
                                case Ot.a.KEY_LOAD_ERROR:
                                case Ot.a.KEY_LOAD_TIMEOUT:
                                    n = t.frag.level, i = !0;
                                    break;
                                case Ot.a.LEVEL_LOAD_ERROR:
                                case Ot.a.LEVEL_LOAD_TIMEOUT:
                                    n = t.context.level, e = !0;
                                    break;
                                case Ot.a.REMUX_ALLOC_ERROR:
                                    n = t.level, e = !0
                            }
                            void 0 !== n && this.recoverLevel(t, n, e, i)
                        }, e.prototype.recoverLevel = function (t, e, i, n) {
                            var r = this, a = this.hls.config, o = t.details, s = this._levels[e], l = void 0, u = void 0,
                                c = void 0;
                            if (s.loadError++, s.fragmentError = n, !0 === i) {
                                if (!(this.levelRetryCount + 1 <= a.levelLoadingMaxRetry)) return Pt.b.error("level controller, cannot recover from " + o + " error"), this.currentLevelIndex = null, this.cleanTimer(), void(t.fatal = !0);
                                u = Math.min(Math.pow(2, this.levelRetryCount) * a.levelLoadingRetryDelay, a.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function () {
                                    return r.loadLevel()
                                }, u), t.levelRetry = !0, this.levelRetryCount++, Pt.b.warn("level controller, " + o + ", retry in " + u + " ms, current retry count is " + this.levelRetryCount)
                            }
                            !0 !== i && !0 !== n || (l = s.url.length, l > 1 && s.loadError < l ? (Pt.b.warn("level controller, " + o + " for level " + e + ": switching to redundant stream id " + s.urlId), s.urlId = (s.urlId + 1) % l, s.details = void 0) : -1 === this.manualLevelIndex ? (c = 0 === e ? this._levels.length - 1 : e - 1, Pt.b.warn("level controller, " + o + ": switch to " + c), this.hls.nextAutoLevel = this.currentLevelIndex = c) : !0 === n && (Pt.b.warn("level controller, " + o + ": reload a fragment"), this.currentLevelIndex = null))
                        }, e.prototype.onFragLoaded = function (t) {
                            var e = t.frag;
                            if (void 0 !== e && "main" === e.type) {
                                var i = this._levels[e.level];
                                void 0 !== i && (i.fragmentError = !1, i.loadError = 0, this.levelRetryCount = 0)
                            }
                        }, e.prototype.onLevelLoaded = function (t) {
                            var e = this, i = t.level;
                            if (i === this.currentLevelIndex) {
                                var n = this._levels[i];
                                !1 === n.fragmentError && (n.loadError = 0, this.levelRetryCount = 0);
                                var r = t.details;
                                if (r.live) {
                                    var a = 1e3 * (r.averagetargetduration ? r.averagetargetduration : r.targetduration),
                                        o = n.details;
                                    o && r.endSN === o.endSN && (a /= 2, Pt.b.log("same live playlist, reload twice faster")), a -= performance.now() - t.stats.trequest, a = Math.max(1e3, Math.round(a)), Pt.b.log("live playlist, reload in " + a + " ms"), this.timer = setTimeout(function () {
                                        return e.loadLevel()
                                    }, a)
                                } else this.cleanTimer()
                            }
                        }, e.prototype.loadLevel = function () {
                            var t = void 0, e = void 0;
                            null !== this.currentLevelIndex && !0 === this.canload && void 0 !== (t = this._levels[this.currentLevelIndex]) && t.url.length > 0 && (e = t.urlId, this.hls.trigger(Dt.a.LEVEL_LOADING, {
                                url: t.url[e],
                                level: this.currentLevelIndex,
                                id: e
                            }))
                        }, be(e, [{
                            key: "levels", get: function () {
                                return this._levels
                            }
                        }, {
                            key: "level", get: function () {
                                return this.currentLevelIndex
                            }, set: function (t) {
                                var e = this._levels;
                                e && (t = Math.min(t, e.length - 1), this.currentLevelIndex === t && void 0 !== e[t].details || this.setLevelInternal(t))
                            }
                        }, {
                            key: "manualLevel", get: function () {
                                return this.manualLevelIndex
                            }, set: function (t) {
                                this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                            }
                        }, {
                            key: "firstLevel", get: function () {
                                return this._firstLevel
                            }, set: function (t) {
                                this._firstLevel = t
                            }
                        }, {
                            key: "startLevel", get: function () {
                                if (void 0 === this._startLevel) {
                                    var t = this.hls.config.startLevel;
                                    return void 0 !== t ? t : this._firstLevel
                                }
                                return this._startLevel
                            }, set: function (t) {
                                this._startLevel = t
                            }
                        }, {
                            key: "nextLoadLevel", get: function () {
                                return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                            }, set: function (t) {
                                this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                            }
                        }]), e
                    }(Mt), Ee = _e, Te = i(3), Ae = function (t) {
                        function e(i) {
                            x(this, e);
                            var n = N(this, t.call(this, i, Dt.a.MEDIA_ATTACHED, Dt.a.MEDIA_DETACHING, Dt.a.FRAG_PARSING_METADATA));
                            return n.id3Track = void 0, n.media = void 0, n
                        }

                        return M(e, t), e.prototype.destroy = function () {
                            Mt.prototype.destroy.call(this)
                        }, e.prototype.onMediaAttached = function (t) {
                            this.media = t.media, this.media
                        }, e.prototype.onMediaDetaching = function () {
                            this.media = void 0
                        }, e.prototype.onFragParsingMetadata = function (t) {
                            var e = t.frag, i = t.samples;
                            this.id3Track || (this.id3Track = this.media.addTextTrack("metadata", "id3"), this.id3Track.mode = "hidden");
                            for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, r = 0; r < i.length; r++) {
                                var a = Te.a.getID3Frames(i[r].data);
                                if (a) {
                                    var o = i[r].pts, s = r < i.length - 1 ? i[r + 1].pts : e.endPTS;
                                    o === s && (s += 1e-4);
                                    for (var l = 0; l < a.length; l++) {
                                        var u = a[l];
                                        if (!Te.a.isTimeStampFrame(u)) {
                                            var c = new n(o, s, "");
                                            c.value = u, this.id3Track.addCue(c)
                                        }
                                    }
                                }
                            }
                        }, e
                    }(Mt), Se = Ae, Le = function () {
                        function t(e) {
                            B(this, t), this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                        }

                        return t.prototype.sample = function (t, e) {
                            var i = Math.pow(this.alpha_, t);
                            this.estimate_ = e * (1 - i) + i * this.estimate_, this.totalWeight_ += t
                        }, t.prototype.getTotalWeight = function () {
                            return this.totalWeight_
                        }, t.prototype.getEstimate = function () {
                            if (this.alpha_) {
                                var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                return this.estimate_ / t
                            }
                            return this.estimate_
                        }, t
                    }(), Re = Le, ke = function () {
                        function t(e, i, n, r) {
                            U(this, t), this.hls = e, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Re(i), this.fast_ = new Re(n)
                        }

                        return t.prototype.sample = function (t, e) {
                            t = Math.max(t, this.minDelayMs_);
                            var i = 8e3 * e / t, n = t / 1e3;
                            this.fast_.sample(n, i), this.slow_.sample(n, i)
                        }, t.prototype.canEstimate = function () {
                            var t = this.fast_;
                            return t && t.getTotalWeight() >= this.minWeight_
                        }, t.prototype.getEstimate = function () {
                            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                        }, t.prototype.destroy = function () {
                        }, t
                    }(), Ce = ke, we = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), Ie = function (t) {
                        function e(i) {
                            G(this, e);
                            var n = K(this, t.call(this, i, Dt.a.FRAG_LOADING, Dt.a.FRAG_LOADED, Dt.a.FRAG_BUFFERED, Dt.a.ERROR));
                            return n.lastLoadedFragLevel = 0, n._nextAutoLevel = -1, n.hls = i, n.timer = null, n._bwEstimator = null, n.onCheck = n._abandonRulesCheck.bind(n), n
                        }

                        return V(e, t), e.prototype.destroy = function () {
                            this.clearTimer(), Mt.prototype.destroy.call(this)
                        }, e.prototype.onFragLoading = function (t) {
                            var e = t.frag;
                            if ("main" === e.type) {
                                if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {
                                    var i = this.hls, n = t.frag.level, r = i.levels[n].details.live, a = i.config,
                                        o = void 0, s = void 0;
                                    r ? (o = a.abrEwmaFastLive, s = a.abrEwmaSlowLive) : (o = a.abrEwmaFastVoD, s = a.abrEwmaSlowVoD), this._bwEstimator = new Ce(i, s, o, a.abrEwmaDefaultEstimate)
                                }
                                this.fragCurrent = e
                            }
                        }, e.prototype._abandonRulesCheck = function () {
                            var t = this.hls, e = t.media, i = this.fragCurrent, n = i.loader, r = t.minAutoLevel;
                            if (!n || n.stats && n.stats.aborted) return Pt.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                            var a = n.stats;
                            if (e && a && (!e.paused && 0 !== e.playbackRate || !e.readyState) && i.autoLevel && i.level) {
                                var o = performance.now() - a.trequest, s = Math.abs(e.playbackRate);
                                if (o > 500 * i.duration / s) {
                                    var l = t.levels, u = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / o), c = l[i.level],
                                        d = c.realBitrate ? Math.max(c.realBitrate, c.bitrate) : c.bitrate,
                                        h = a.total ? a.total : Math.max(a.loaded, Math.round(i.duration * d / 8)),
                                        f = e.currentTime, p = (h - a.loaded) / u,
                                        g = (re.bufferInfo(e, f, t.config.maxBufferHole).end - f) / s;
                                    if (g < 2 * i.duration / s && p > g) {
                                        var y = void 0, m = void 0;
                                        for (m = i.level - 1; m > r; m--) {
                                            var v = l[m].realBitrate ? Math.max(l[m].realBitrate, l[m].bitrate) : l[m].bitrate;
                                            if ((y = i.duration * v / (6.4 * u)) < g) break
                                        }
                                        y < p && (Pt.b.warn("loading too slow, abort fragment loading and switch to level " + m + ":fragLoadedDelay[" + m + "]<fragLoadedDelay[" + (i.level - 1) + "];bufferStarvationDelay:" + y.toFixed(1) + "<" + p.toFixed(1) + ":" + g.toFixed(1)), t.nextLoadLevel = m, this._bwEstimator.sample(o, a.loaded), n.abort(), this.clearTimer(), t.trigger(Dt.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                                            frag: i,
                                            stats: a
                                        }))
                                    }
                                }
                            }
                        }, e.prototype.onFragLoaded = function (t) {
                            var e = t.frag;
                            if ("main" === e.type && !isNaN(e.sn)) {
                                if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                    var i = this.hls.levels[e.level], n = (i.loaded ? i.loaded.bytes : 0) + t.stats.loaded,
                                        r = (i.loaded ? i.loaded.duration : 0) + t.frag.duration;
                                    i.loaded = {bytes: n, duration: r}, i.realBitrate = Math.round(8 * n / r)
                                }
                                if (t.frag.bitrateTest) {
                                    var a = t.stats;
                                    a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(t)
                                }
                            }
                        }, e.prototype.onFragBuffered = function (t) {
                            var e = t.stats, i = t.frag;
                            if (!(!0 === e.aborted || 1 !== i.loadCounter || "main" !== i.type || isNaN(i.sn) || i.bitrateTest && e.tload !== e.tbuffered)) {
                                var n = e.tparsed - e.trequest;
                                Pt.b.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest))), this._bwEstimator.sample(n, e.loaded), e.bwEstimate = this._bwEstimator.getEstimate(), i.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
                            }
                        }, e.prototype.onError = function (t) {
                            switch (t.details) {
                                case Ot.a.FRAG_LOAD_ERROR:
                                case Ot.a.FRAG_LOAD_TIMEOUT:
                                    this.clearTimer()
                            }
                        }, e.prototype.clearTimer = function () {
                            clearInterval(this.timer), this.timer = null
                        }, e.prototype._findBestLevel = function (t, e, i, n, r, a, o, s, l) {
                            for (var u = r; u >= n; u--) {
                                var c = l[u], d = c.details, h = d ? d.totalduration / d.fragments.length : e,
                                    f = !!d && d.live, p = void 0;
                                p = u <= t ? o * i : s * i;
                                var g = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
                                    y = g * h / p;
                                if (Pt.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(p) + "/" + g + "/" + h + "/" + a + "/" + y), p > g && (!y || f && !this.bitrateTestDelay || y < a)) return u
                            }
                            return -1
                        }, we(e, [{
                            key: "nextAutoLevel", get: function () {
                                var t = this._nextAutoLevel, e = this._bwEstimator;
                                if (!(-1 === t || e && e.canEstimate())) return t;
                                var i = this._nextABRAutoLevel;
                                return -1 !== t && (i = Math.min(t, i)), i
                            }, set: function (t) {
                                this._nextAutoLevel = t
                            }
                        }, {
                            key: "_nextABRAutoLevel", get: function () {
                                var t = this.hls, e = t.maxAutoLevel, i = t.levels, n = t.config, r = t.minAutoLevel,
                                    a = t.media, o = this.lastLoadedFragLevel,
                                    s = this.fragCurrent ? this.fragCurrent.duration : 0, l = a ? a.currentTime : 0,
                                    u = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
                                    c = this._bwEstimator ? this._bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                                    d = (re.bufferInfo(a, l, n.maxBufferHole).end - l) / u,
                                    h = this._findBestLevel(o, s, c, r, e, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor, i);
                                if (h >= 0) return h;
                                Pt.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                                var f = s ? Math.min(s, n.maxStarvationDelay) : n.maxStarvationDelay,
                                    p = n.abrBandWidthFactor, g = n.abrBandWidthUpFactor;
                                if (0 === d) {
                                    var y = this.bitrateTestDelay;
                                    if (y) {
                                        f = (s ? Math.min(s, n.maxLoadingDelay) : n.maxLoadingDelay) - y, Pt.b.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * f) + " ms"), p = g = 1
                                    }
                                }
                                return h = this._findBestLevel(o, s, c, r, e, d + f, p, g, i), Math.max(h, 0)
                            }
                        }]), e
                    }(Mt), De = Ie, Oe = m(), Pe = function (t) {
                        function e(i) {
                            j(this, e);
                            var n = Y(this, t.call(this, i, Dt.a.MEDIA_ATTACHING, Dt.a.MEDIA_DETACHING, Dt.a.MANIFEST_PARSED, Dt.a.BUFFER_RESET, Dt.a.BUFFER_APPENDING, Dt.a.BUFFER_CODECS, Dt.a.BUFFER_EOS, Dt.a.BUFFER_FLUSHING, Dt.a.LEVEL_PTS_UPDATED, Dt.a.LEVEL_UPDATED));
                            return n._msDuration = null, n._levelDuration = null, n._live = null, n._objectUrl = null, n.onsbue = n.onSBUpdateEnd.bind(n), n.onsbe = n.onSBUpdateError.bind(n), n.pendingTracks = {}, n.tracks = {}, n
                        }

                        return H(e, t), e.prototype.destroy = function () {
                            Mt.prototype.destroy.call(this)
                        }, e.prototype.onLevelPtsUpdated = function (t) {
                            var e = t.type, i = this.tracks.audio;
                            if ("audio" === e && i && "audio/mpeg" === i.container) {
                                var n = this.sourceBuffer.audio;
                                if (Math.abs(n.timestampOffset - t.start) > .1) {
                                    var r = n.updating;
                                    try {
                                        n.abort()
                                    } catch (t) {
                                        r = !0, Pt.b.warn("can not abort audio buffer: " + t)
                                    }
                                    r ? this.audioTimestampOffset = t.start : (Pt.b.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + t.start), n.timestampOffset = t.start)
                                }
                            }
                        }, e.prototype.onManifestParsed = function (t) {
                            var e = t.audio, i = t.video || t.levels.length && t.audio, n = 0;
                            t.altAudio && (e || i) && (n = (e ? 1 : 0) + (i ? 1 : 0), Pt.b.log(n + " sourceBuffer(s) expected")), this.sourceBufferNb = n
                        }, e.prototype.onMediaAttaching = function (t) {
                            var e = this.media = t.media;
                            if (e) {
                                var i = this.mediaSource = new Oe;
                                this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), i.addEventListener("sourceopen", this.onmso), i.addEventListener("sourceended", this.onmse), i.addEventListener("sourceclose", this.onmsc), e.src = URL.createObjectURL(i), this._objectUrl = e.src
                            }
                        }, e.prototype.onMediaDetaching = function () {
                            Pt.b.log("media source detaching");
                            var t = this.mediaSource;
                            if (t) {
                                if ("open" === t.readyState) try {
                                    t.endOfStream()
                                } catch (t) {
                                    Pt.b.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                                }
                                t.removeEventListener("sourceopen", this.onmso), t.removeEventListener("sourceended", this.onmse), t.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : Pt.b.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                            }
                            this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(Dt.a.MEDIA_DETACHED)
                        }, e.prototype.onMediaSourceOpen = function () {
                            Pt.b.log("media source opened"), this.hls.trigger(Dt.a.MEDIA_ATTACHED, {media: this.media});
                            var t = this.mediaSource;
                            t && t.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                        }, e.prototype.checkPendingTracks = function () {
                            var t = this.pendingTracks, e = Object.keys(t).length;
                            e && (this.sourceBufferNb <= e || 0 === this.sourceBufferNb) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
                        }, e.prototype.onMediaSourceClose = function () {
                            Pt.b.log("media source closed")
                        }, e.prototype.onMediaSourceEnded = function () {
                            Pt.b.log("media source ended")
                        }, e.prototype.onSBUpdateEnd = function () {
                            if (this.audioTimestampOffset) {
                                var t = this.sourceBuffer.audio;
                                Pt.b.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + this.audioTimestampOffset), t.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
                            }
                            this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
                            var e = this.parent, i = this.segments.reduce(function (t, i) {
                                return i.parent === e ? t + 1 : t
                            }, 0);
                            this.hls.trigger(Dt.a.BUFFER_APPENDED, {
                                parent: e,
                                pending: i
                            }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                        }, e.prototype.onSBUpdateError = function (t) {
                            Pt.b.error("sourceBuffer error:", t), this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.MEDIA_ERROR,
                                details: Ot.a.BUFFER_APPENDING_ERROR,
                                fatal: !1
                            })
                        }, e.prototype.onBufferReset = function () {
                            var t = this.sourceBuffer;
                            for (var e in t) {
                                var i = t[e];
                                try {
                                    this.mediaSource.removeSourceBuffer(i), i.removeEventListener("updateend", this.onsbue), i.removeEventListener("error", this.onsbe)
                                } catch (t) {
                                }
                            }
                            this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                        }, e.prototype.onBufferCodecs = function (t) {
                            if (0 === Object.keys(this.sourceBuffer).length) {
                                for (var e in t) this.pendingTracks[e] = t[e];
                                var i = this.mediaSource;
                                i && "open" === i.readyState && this.checkPendingTracks()
                            }
                        }, e.prototype.createSourceBuffers = function (t) {
                            var e = this.sourceBuffer, i = this.mediaSource;
                            for (var n in t) if (!e[n]) {
                                var r = t[n], a = r.levelCodec || r.codec, o = r.container + ";codecs=" + a;
                                Pt.b.log("creating sourceBuffer(" + o + ")");
                                try {
                                    var s = e[n] = i.addSourceBuffer(o);
                                    s.addEventListener("updateend", this.onsbue), s.addEventListener("error", this.onsbe), this.tracks[n] = {
                                        codec: a,
                                        container: r.container
                                    }, r.buffer = s
                                } catch (t) {
                                    Pt.b.error("error while trying to add sourceBuffer:" + t.message), this.hls.trigger(Dt.a.ERROR, {
                                        type: Ot.b.MEDIA_ERROR,
                                        details: Ot.a.BUFFER_ADD_CODEC_ERROR,
                                        fatal: !1,
                                        err: t,
                                        mimeType: o
                                    })
                                }
                            }
                            this.hls.trigger(Dt.a.BUFFER_CREATED, {tracks: t})
                        }, e.prototype.onBufferAppending = function (t) {
                            this._needsFlush || (this.segments ? this.segments.push(t) : this.segments = [t], this.doAppending())
                        }, e.prototype.onBufferAppendFail = function (t) {
                            Pt.b.error("sourceBuffer error:", t.event), this.hls.trigger(Dt.a.ERROR, {
                                type: Ot.b.MEDIA_ERROR,
                                details: Ot.a.BUFFER_APPENDING_ERROR,
                                fatal: !1
                            })
                        }, e.prototype.onBufferEos = function (t) {
                            var e = this.sourceBuffer, i = t.type;
                            for (var n in e) i && n !== i || e[n].ended || (e[n].ended = !0, Pt.b.log(n + " sourceBuffer now EOS"));
                            this.checkEos()
                        }, e.prototype.checkEos = function () {
                            var t = this.sourceBuffer, e = this.mediaSource;
                            if (!e || "open" !== e.readyState) return void(this._needsEos = !1);
                            for (var i in t) {
                                var n = t[i];
                                if (!n.ended) return;
                                if (n.updating) return void(this._needsEos = !0)
                            }
                            Pt.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                            try {
                                e.endOfStream()
                            } catch (t) {
                                Pt.b.warn("exception while calling mediaSource.endOfStream()")
                            }
                            this._needsEos = !1
                        }, e.prototype.onBufferFlushing = function (t) {
                            this.flushRange.push({
                                start: t.startOffset,
                                end: t.endOffset,
                                type: t.type
                            }), this.flushBufferCounter = 0, this.doFlush()
                        }, e.prototype.onLevelUpdated = function (t) {
                            var e = t.details;
                            e.fragments.length > 0 && (this._levelDuration = e.totalduration + e.fragments[0].start, this._live = e.live, this.updateMediaElementDuration())
                        }, e.prototype.updateMediaElementDuration = function () {
                            var t = this.hls.config, e = void 0;
                            if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                                for (var i in this.sourceBuffer) if (!0 === this.sourceBuffer[i].updating) return;
                                e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (Pt.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || e === 1 / 0 || isNaN(e)) && (Pt.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                            }
                        }, e.prototype.doFlush = function () {
                            for (; this.flushRange.length;) {
                                var t = this.flushRange[0];
                                if (!this.flushBuffer(t.start, t.end, t.type)) return void(this._needsFlush = !0);
                                this.flushRange.shift(), this.flushBufferCounter = 0
                            }
                            if (0 === this.flushRange.length) {
                                this._needsFlush = !1;
                                var e = 0, i = this.sourceBuffer;
                                try {
                                    for (var n in i) e += i[n].buffered.length
                                } catch (t) {
                                    Pt.b.error("error while accessing sourceBuffer.buffered")
                                }
                                this.appended = e, this.hls.trigger(Dt.a.BUFFER_FLUSHED)
                            }
                        }, e.prototype.doAppending = function () {
                            var t = this.hls, e = this.sourceBuffer, i = this.segments;
                            if (Object.keys(e).length) {
                                if (this.media.error) return this.segments = [], void Pt.b.error("trying to append although a media error occured, flush segment and abort");
                                if (this.appending) return;
                                if (i && i.length) {
                                    var n = i.shift();
                                    try {
                                        var r = n.type, a = e[r];
                                        a ? a.updating ? i.unshift(n) : (a.ended = !1, this.parent = n.parent, a.appendBuffer(n.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                                    } catch (e) {
                                        Pt.b.error("error while trying to append buffer:" + e.message), i.unshift(n);
                                        var o = {type: Ot.b.MEDIA_ERROR, parent: n.parent};
                                        if (22 === e.code) return this.segments = [], o.details = Ot.a.BUFFER_FULL_ERROR, o.fatal = !1, void t.trigger(Dt.a.ERROR, o);
                                        if (this.appendError ? this.appendError++ : this.appendError = 1, o.details = Ot.a.BUFFER_APPEND_ERROR, this.appendError > t.config.appendErrorMaxRetry) return Pt.b.log("fail " + t.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), i = [], o.fatal = !0, void t.trigger(Dt.a.ERROR, o);
                                        o.fatal = !1, t.trigger(Dt.a.ERROR, o)
                                    }
                                }
                            }
                        }, e.prototype.flushBuffer = function (t, e, i) {
                            var n, r, a, o, s, l, u = this.sourceBuffer;
                            if (Object.keys(u).length) {
                                if (Pt.b.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + e), this.flushBufferCounter < this.appended) {
                                    for (var c in u) if (!i || c === i) {
                                        if (n = u[c], n.ended = !1, n.updating) return Pt.b.warn("cannot flush, sb updating in progress"), !1;
                                        try {
                                            for (r = 0; r < n.buffered.length; r++) if (a = n.buffered.start(r), o = n.buffered.end(r), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && e === Number.POSITIVE_INFINITY ? (s = t, l = e) : (s = Math.max(a, t), l = Math.min(o, e)), Math.min(l, o) - s > .5) return this.flushBufferCounter++, Pt.b.log("flush " + c + " [" + s + "," + l + "], of [" + a + "," + o + "], pos:" + this.media.currentTime), n.remove(s, l), !1
                                        } catch (t) {
                                            Pt.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
                                        }
                                    }
                                } else Pt.b.warn("abort flushing too many retries");
                                Pt.b.log("buffer flushed")
                            }
                            return !0
                        }, e
                    }(Mt), xe = Pe, Ne = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), Me = function (t) {
                        function e(i) {
                            return $(this, e), z(this, t.call(this, i, Dt.a.FPS_DROP_LEVEL_CAPPING, Dt.a.MEDIA_ATTACHING, Dt.a.MANIFEST_PARSED))
                        }

                        return W(e, t), e.prototype.destroy = function () {
                            this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
                        }, e.prototype.onFpsDropLevelCapping = function (t) {
                            e.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
                        }, e.prototype.onMediaAttaching = function (t) {
                            this.media = t.media instanceof HTMLVideoElement ? t.media : null
                        }, e.prototype.onManifestParsed = function (t) {
                            var e = this.hls;
                            this.restrictedLevels = [], e.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = t.levels, e.firstLevel = this.getMaxLevel(t.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                        }, e.prototype.detectPlayerSize = function () {
                            if (this.media) {
                                var t = this.levels ? this.levels.length : 0;
                                if (t) {
                                    var e = this.hls;
                                    e.autoLevelCapping = this.getMaxLevel(t - 1), e.autoLevelCapping > this.autoLevelCapping && e.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                                }
                            }
                        }, e.prototype.getMaxLevel = function (t) {
                            var i = this;
                            if (!this.levels) return -1;
                            var n = this.levels.filter(function (n, r) {
                                return e.isLevelAllowed(r, i.restrictedLevels) && r <= t
                            });
                            return e.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                        }, e.isLevelAllowed = function (t) {
                            return -1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).indexOf(t)
                        }, e.getMaxLevelByMediaSize = function (t, e, i) {
                            if (!t || t && !t.length) return -1;
                            for (var n = t.length - 1, r = 0; r < t.length; r += 1) {
                                var a = t[r];
                                if ((a.width >= e || a.height >= i) && function (t, e) {
                                        return !e || (t.width !== e.width || t.height !== e.height)
                                    }(a, t[r + 1])) {
                                    n = r;
                                    break
                                }
                            }
                            return n
                        }, Ne(e, [{
                            key: "mediaWidth", get: function () {
                                var t = void 0, i = this.media;
                                return i && (t = i.width || i.clientWidth || i.offsetWidth, t *= e.contentScaleFactor), t
                            }
                        }, {
                            key: "mediaHeight", get: function () {
                                var t = void 0, i = this.media;
                                return i && (t = i.height || i.clientHeight || i.offsetHeight, t *= e.contentScaleFactor), t
                            }
                        }], [{
                            key: "contentScaleFactor", get: function () {
                                var t = 1;
                                try {
                                    t = window.devicePixelRatio
                                } catch (t) {
                                }
                                return t
                            }
                        }]), e
                    }(Mt), Fe = Me, Be = function (t) {
                        function e(i) {
                            return q(this, e), X(this, t.call(this, i, Dt.a.MEDIA_ATTACHING))
                        }

                        return Z(e, t), e.prototype.destroy = function () {
                            this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                        }, e.prototype.onMediaAttaching = function (t) {
                            var e = this.hls.config;
                            if (e.capLevelOnFPSDrop) {
                                "function" == typeof(this.video = t.media instanceof HTMLVideoElement ? t.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod)
                            }
                        }, e.prototype.checkFPS = function (t, e, i) {
                            var n = performance.now();
                            if (e) {
                                if (this.lastTime) {
                                    var r = n - this.lastTime, a = i - this.lastDroppedFrames,
                                        o = e - this.lastDecodedFrames, s = 1e3 * a / r, l = this.hls;
                                    if (l.trigger(Dt.a.FPS_DROP, {
                                            currentDropped: a,
                                            currentDecoded: o,
                                            totalDroppedFrames: i
                                        }), s > 0 && a > l.config.fpsDroppedMonitoringThreshold * o) {
                                        var u = l.currentLevel;
                                        Pt.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (u -= 1, l.trigger(Dt.a.FPS_DROP_LEVEL_CAPPING, {
                                            level: u,
                                            droppedLevel: l.currentLevel
                                        }), l.autoLevelCapping = u, l.streamController.nextLevelSwitch())
                                    }
                                }
                                this.lastTime = n, this.lastDroppedFrames = i, this.lastDecodedFrames = e
                            }
                        }, e.prototype.checkFPSInterval = function () {
                            var t = this.video;
                            if (t) if (this.isVideoPlaybackQualityAvailable) {
                                var e = t.getVideoPlaybackQuality();
                                this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                            } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                        }, e
                    }(Mt), Ue = Be, Ge = function () {
                        function t(e) {
                            J(this, t), e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                        }

                        return t.prototype.destroy = function () {
                            this.abort(), this.loader = null
                        }, t.prototype.abort = function () {
                            var t = this.loader;
                            t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                        }, t.prototype.load = function (t, e, i) {
                            this.context = t, this.config = e, this.callbacks = i, this.stats = {
                                trequest: performance.now(),
                                retry: 0
                            }, this.retryDelay = e.retryDelay, this.loadInternal()
                        }, t.prototype.loadInternal = function () {
                            var t, e = this.context;
                            t = this.loader = new XMLHttpRequest;
                            var i = this.stats;
                            i.tfirst = 0, i.loaded = 0;
                            var n = this.xhrSetup;
                            try {
                                if (n) try {
                                    n(t, e.url)
                                } catch (i) {
                                    t.open("GET", e.url, !0), n(t, e.url)
                                }
                                t.readyState || t.open("GET", e.url, !0)
                            } catch (i) {
                                return void this.callbacks.onError({code: t.status, text: i.message}, e, t)
                            }
                            e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), t.send()
                        }, t.prototype.readystatechange = function (t) {
                            var e = t.currentTarget, i = e.readyState, n = this.stats, r = this.context, a = this.config;
                            if (!n.aborted && i >= 2) if (window.clearTimeout(this.requestTimeout), 0 === n.tfirst && (n.tfirst = Math.max(performance.now(), n.trequest)), 4 === i) {
                                var o = e.status;
                                if (o >= 200 && o < 300) {
                                    n.tload = Math.max(n.tfirst, performance.now());
                                    var s = void 0, l = void 0;
                                    "arraybuffer" === r.responseType ? (s = e.response, l = s.byteLength) : (s = e.responseText, l = s.length), n.loaded = n.total = l;
                                    var u = {url: e.responseURL, data: s};
                                    this.callbacks.onSuccess(u, n, r, e)
                                } else n.retry >= a.maxRetry || o >= 400 && o < 499 ? (Pt.b.error(o + " while loading " + r.url), this.callbacks.onError({
                                    code: o,
                                    text: e.statusText
                                }, r, e)) : (Pt.b.warn(o + " while loading " + r.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), n.retry++)
                            } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                        }, t.prototype.loadtimeout = function () {
                            Pt.b.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                        }, t.prototype.loadprogress = function (t) {
                            var e = t.currentTarget, i = this.stats;
                            i.loaded = t.loaded, t.lengthComputable && (i.total = t.total);
                            var n = this.callbacks.onProgress;
                            n && n(i, this.context, null, e)
                        }, t
                    }(), Ke = Ge, Ve = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), je = function (t) {
                        function e(i) {
                            Q(this, e);
                            var n = tt(this, t.call(this, i, Dt.a.MANIFEST_LOADING, Dt.a.MANIFEST_PARSED, Dt.a.AUDIO_TRACK_LOADED, Dt.a.ERROR));
                            return n.ticks = 0, n.ontick = n.tick.bind(n), n
                        }

                        return et(e, t), e.prototype.destroy = function () {
                            this.cleanTimer(), Mt.prototype.destroy.call(this)
                        }, e.prototype.cleanTimer = function () {
                            this.timer && (clearTimeout(this.timer), this.timer = null)
                        }, e.prototype.tick = function () {
                            1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                        }, e.prototype.doTick = function () {
                            this.updateTrack(this.trackId)
                        }, e.prototype.onError = function (t) {
                            t.fatal && t.type === Ot.b.NETWORK_ERROR && this.cleanTimer()
                        }, e.prototype.onManifestLoading = function () {
                            this.tracks = [], this.trackId = -1
                        }, e.prototype.onManifestParsed = function (t) {
                            var e = this, i = t.audioTracks || [], n = !1;
                            this.tracks = i, this.hls.trigger(Dt.a.AUDIO_TRACKS_UPDATED, {audioTracks: i});
                            var r = 0;
                            i.forEach(function (t) {
                                if (t.default && !n) return e.audioTrack = r, void(n = !0);
                                r++
                            }), !1 === n && i.length && (Pt.b.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
                        }, e.prototype.onAudioTrackLoaded = function (t) {
                            t.id < this.tracks.length && (Pt.b.log("audioTrack " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * t.details.targetduration)), !t.details.live && this.timer && this.cleanTimer())
                        }, e.prototype.setAudioTrackInternal = function (t) {
                            if (t >= 0 && t < this.tracks.length) {
                                this.cleanTimer(), this.trackId = t, Pt.b.log("switching to audioTrack " + t);
                                var e = this.tracks[t], i = this.hls, n = e.type, r = e.url, a = {id: t, type: n, url: r};
                                i.trigger(Dt.a.AUDIO_TRACK_SWITCH, a), i.trigger(Dt.a.AUDIO_TRACK_SWITCHING, a);
                                var o = e.details;
                                !r || void 0 !== o && !0 !== o.live || (Pt.b.log("(re)loading playlist for audioTrack " + t), i.trigger(Dt.a.AUDIO_TRACK_LOADING, {
                                    url: r,
                                    id: t
                                }))
                            }
                        }, e.prototype.updateTrack = function (t) {
                            if (t >= 0 && t < this.tracks.length) {
                                this.cleanTimer(), this.trackId = t, Pt.b.log("updating audioTrack " + t);
                                var e = this.tracks[t], i = e.url, n = e.details;
                                !i || void 0 !== n && !0 !== n.live || (Pt.b.log("(re)loading playlist for audioTrack " + t), this.hls.trigger(Dt.a.AUDIO_TRACK_LOADING, {
                                    url: i,
                                    id: t
                                }))
                            }
                        }, Ve(e, [{
                            key: "audioTracks", get: function () {
                                return this.tracks
                            }
                        }, {
                            key: "audioTrack", get: function () {
                                return this.trackId
                            }, set: function (t) {
                                this.trackId === t && void 0 !== this.tracks[t].details || this.setAudioTrackInternal(t)
                            }
                        }]), e
                    }(Mt), Ye = je, He = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), $e = {
                        STOPPED: "STOPPED",
                        STARTING: "STARTING",
                        IDLE: "IDLE",
                        PAUSED: "PAUSED",
                        KEY_LOADING: "KEY_LOADING",
                        FRAG_LOADING: "FRAG_LOADING",
                        FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                        WAITING_TRACK: "WAITING_TRACK",
                        PARSING: "PARSING",
                        PARSED: "PARSED",
                        BUFFER_FLUSHING: "BUFFER_FLUSHING",
                        ENDED: "ENDED",
                        ERROR: "ERROR",
                        WAITING_INIT_PTS: "WAITING_INIT_PTS"
                    }, ze = function (t) {
                        function e(i) {
                            it(this, e);
                            var n = nt(this, t.call(this, i, Dt.a.MEDIA_ATTACHED, Dt.a.MEDIA_DETACHING, Dt.a.AUDIO_TRACKS_UPDATED, Dt.a.AUDIO_TRACK_SWITCHING, Dt.a.AUDIO_TRACK_LOADED, Dt.a.KEY_LOADED, Dt.a.FRAG_LOADED, Dt.a.FRAG_PARSING_INIT_SEGMENT, Dt.a.FRAG_PARSING_DATA, Dt.a.FRAG_PARSED, Dt.a.ERROR, Dt.a.BUFFER_RESET, Dt.a.BUFFER_CREATED, Dt.a.BUFFER_APPENDED, Dt.a.BUFFER_FLUSHED, Dt.a.INIT_PTS_FOUND));
                            return n.config = i.config, n.audioCodecSwap = !1, n.ticks = 0, n._state = $e.STOPPED, n.ontick = n.tick.bind(n), n.initPTS = [], n.waitingFragment = null, n.videoTrackCC = null, n
                        }

                        return rt(e, t), e.prototype.destroy = function () {
                            this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), Mt.prototype.destroy.call(this), this.state = $e.STOPPED
                        }, e.prototype.onInitPtsFound = function (t) {
                            var e = t.id, i = t.frag.cc, n = t.initPTS;
                            "main" === e && (this.initPTS[i] = n, this.videoTrackCC = i, Pt.b.log("InitPTS for cc:" + i + " found from video track:" + n), this.state === $e.WAITING_INIT_PTS && this.tick())
                        }, e.prototype.startLoad = function (t) {
                            if (this.tracks) {
                                var e = this.lastCurrentTime;
                                this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, e > 0 && -1 === t ? (Pt.b.log("audio:override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = $e.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.state = $e.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                            } else this.startPosition = t, this.state = $e.STOPPED
                        }, e.prototype.stopLoad = function () {
                            var t = this.fragCurrent;
                            t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = $e.STOPPED
                        }, e.prototype.tick = function () {
                            1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                        }, e.prototype.doTick = function () {
                            var t, e, i, n = this.hls, r = n.config;
                            switch (this.state) {
                                case $e.ERROR:
                                case $e.PAUSED:
                                case $e.BUFFER_FLUSHING:
                                    break;
                                case $e.STARTING:
                                    this.state = $e.WAITING_TRACK, this.loadedmetadata = !1;
                                    break;
                                case $e.IDLE:
                                    var a = this.tracks;
                                    if (!a) break;
                                    if (!this.media && (this.startFragRequested || !r.startFragPrefetch)) break;
                                    if (this.loadedmetadata) t = this.media.currentTime; else if (void 0 === (t = this.nextLoadPosition)) break;
                                    var o = this.mediaBuffer ? this.mediaBuffer : this.media,
                                        s = this.videoBuffer ? this.videoBuffer : this.media,
                                        l = re.bufferInfo(o, t, r.maxBufferHole), u = re.bufferInfo(s, t, r.maxBufferHole),
                                        c = l.len, d = l.end, h = this.fragPrevious, f = Math.max(r.maxBufferLength, u.len),
                                        p = this.audioSwitch, g = this.trackId;
                                    if ((c < f || p) && g < a.length) {
                                        if (void 0 === (i = a[g].details)) {
                                            this.state = $e.WAITING_TRACK;
                                            break
                                        }
                                        if (!p && !i.live && h && h.sn === i.endSN && !l.nextStart && (!this.media.seeking || this.media.duration - d < h.duration / 2)) {
                                            this.hls.trigger(Dt.a.BUFFER_EOS, {type: "audio"}), this.state = $e.ENDED;
                                            break
                                        }
                                        var y = i.fragments, m = y.length, v = y[0].start,
                                            b = y[m - 1].start + y[m - 1].duration, _ = void 0;
                                        if (p) if (i.live && !i.PTSKnown) Pt.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"), d = 0; else if (d = t, i.PTSKnown && t < v) {
                                            if (!(l.end > v || l.nextStart)) return;
                                            Pt.b.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = v + .05
                                        }
                                        if (i.initSegment && !i.initSegment.data) _ = i.initSegment; else if (d <= v) {
                                            if (_ = y[0], null !== this.videoTrackCC && _.cc !== this.videoTrackCC && (_ = A(y, this.videoTrackCC)), i.live && _.loadIdx && _.loadIdx === this.fragLoadIdx) {
                                                var E = l.nextStart ? l.nextStart : v;
                                                return Pt.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (E + .05)), void(this.media.currentTime = E + .05)
                                            }
                                        } else {
                                            var T = void 0, S = r.maxFragLookUpTolerance,
                                                L = h ? y[h.sn - y[0].sn + 1] : void 0, R = function (t) {
                                                    var e = Math.min(S, t.duration);
                                                    return t.start + t.duration - e <= d ? 1 : t.start - e > d && t.start ? -1 : 0
                                                };
                                            d < b ? (d > b - S && (S = 0), T = L && !R(L) ? L : ie.search(y, R)) : T = y[m - 1], T && (_ = T, v = T.start, h && _.level === h.level && _.sn === h.sn && (_.sn < i.endSN ? (_ = y[_.sn + 1 - i.startSN], Pt.b.log("SN just loaded, load next one: " + _.sn)) : _ = null))
                                        }
                                        if (_) if (_.decryptdata && null != _.decryptdata.uri && null == _.decryptdata.key) Pt.b.log("Loading key for " + _.sn + " of [" + i.startSN + " ," + i.endSN + "],track " + g), this.state = $e.KEY_LOADING, n.trigger(Dt.a.KEY_LOADING, {frag: _}); else {
                                            if (Pt.b.log("Loading " + _.sn + ", cc: " + _.cc + " of [" + i.startSN + " ," + i.endSN + "],track " + g + ", currentTime:" + t + ",bufferEnd:" + d.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, _.loadCounter) {
                                                _.loadCounter++;
                                                var k = r.fragLoadingLoopThreshold;
                                                if (_.loadCounter > k && Math.abs(this.fragLoadIdx - _.loadIdx) < k) return void n.trigger(Dt.a.ERROR, {
                                                    type: Ot.b.MEDIA_ERROR,
                                                    details: Ot.a.FRAG_LOOP_LOADING_ERROR,
                                                    fatal: !1,
                                                    frag: _
                                                })
                                            } else _.loadCounter = 1;
                                            _.loadIdx = this.fragLoadIdx, this.fragCurrent = _, this.startFragRequested = !0, isNaN(_.sn) || (this.nextLoadPosition = _.start + _.duration), n.trigger(Dt.a.FRAG_LOADING, {frag: _}), this.state = $e.FRAG_LOADING
                                        }
                                    }
                                    break;
                                case $e.WAITING_TRACK:
                                    e = this.tracks[this.trackId], e && e.details && (this.state = $e.IDLE);
                                    break;
                                case $e.FRAG_LOADING_WAITING_RETRY:
                                    var C = performance.now(), w = this.retryDate;
                                    o = this.media;
                                    var I = o && o.seeking;
                                    (!w || C >= w || I) && (Pt.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = $e.IDLE);
                                    break;
                                case $e.WAITING_INIT_PTS:
                                    var D = this.videoTrackCC;
                                    if (void 0 === this.initPTS[D]) break;
                                    var O = this.waitingFragment;
                                    if (O) {
                                        var P = O.frag.cc;
                                        D !== P ? (e = this.tracks[this.trackId], e.details && e.details.live && (Pt.b.warn("Waiting fragment CC (" + P + ") does not match video track CC (" + D + ")"), this.waitingFragment = null, this.state = $e.IDLE)) : (this.state = $e.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                                    } else this.state = $e.IDLE;
                                    break;
                                case $e.STOPPED:
                                case $e.FRAG_LOADING:
                                case $e.PARSING:
                                case $e.PARSED:
                                case $e.ENDED:
                            }
                        }, e.prototype.onMediaAttached = function (t) {
                            var e = this.media = this.mediaBuffer = t.media;
                            this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("ended", this.onvended);
                            var i = this.config;
                            this.tracks && i.autoStartLoad && this.startLoad(i.startPosition)
                        }, e.prototype.onMediaDetaching = function () {
                            var t = this.media;
                            t && t.ended && (Pt.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                            var e = this.tracks;
                            e && e.forEach(function (t) {
                                t.details && t.details.fragments.forEach(function (t) {
                                    t.loadCounter = void 0
                                })
                            }), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                        }, e.prototype.onMediaSeeking = function () {
                            this.state === $e.ENDED && (this.state = $e.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick()
                        }, e.prototype.onMediaEnded = function () {
                            this.startPosition = this.lastCurrentTime = 0
                        }, e.prototype.onAudioTracksUpdated = function (t) {
                            Pt.b.log("audio tracks updated"), this.tracks = t.audioTracks
                        }, e.prototype.onAudioTrackSwitching = function (t) {
                            var e = !!t.url;
                            this.trackId = t.id, this.fragCurrent = null, this.state = $e.PAUSED, this.waitingFragment = null, e ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), e && (this.audioSwitch = !0, this.state = $e.IDLE, void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold)), this.tick()
                        }, e.prototype.onAudioTrackLoaded = function (t) {
                            var e = t.details, i = t.id, n = this.tracks[i], r = e.totalduration, a = 0;
                            if (Pt.b.log("track " + i + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + r), e.live) {
                                var o = n.details;
                                o && e.fragments.length > 0 ? (E(o, e), a = e.fragments[0].start, e.PTSKnown ? Pt.b.log("live audio playlist sliding:" + a.toFixed(3)) : Pt.b.log("live audio playlist - outdated PTS, unknown sliding")) : (e.PTSKnown = !1, Pt.b.log("live audio playlist - first load, unknown sliding"))
                            } else e.PTSKnown = !1;
                            if (n.details = e, !this.startFragRequested) {
                                if (-1 === this.startPosition) {
                                    var s = e.startTimeOffset;
                                    isNaN(s) ? this.startPosition = 0 : (Pt.b.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s)
                                }
                                this.nextLoadPosition = this.startPosition
                            }
                            this.state === $e.WAITING_TRACK && (this.state = $e.IDLE), this.tick()
                        }, e.prototype.onKeyLoaded = function () {
                            this.state === $e.KEY_LOADING && (this.state = $e.IDLE, this.tick())
                        }, e.prototype.onFragLoaded = function (t) {
                            var e = this.fragCurrent, i = t.frag;
                            if (this.state === $e.FRAG_LOADING && e && "audio" === i.type && i.level === e.level && i.sn === e.sn) {
                                var n = this.tracks[this.trackId], r = n.details, a = r.totalduration, o = e.level,
                                    s = e.sn, l = e.cc, u = this.config.defaultAudioCodec || n.audioCodec || "mp4a.40.2",
                                    c = this.stats = t.stats;
                                if ("initSegment" === s) this.state = $e.IDLE, c.tparsed = c.tbuffered = performance.now(), r.initSegment.data = t.payload, this.hls.trigger(Dt.a.FRAG_BUFFERED, {
                                    stats: c,
                                    frag: e,
                                    id: "audio"
                                }), this.tick(); else {
                                    this.state = $e.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new he(this.hls, "audio"));
                                    var d = this.initPTS[l], h = r.initSegment ? r.initSegment.data : [];
                                    if (r.initSegment || void 0 !== d) {
                                        this.pendingBuffering = !0, Pt.b.log("Demuxing " + s + " of [" + r.startSN + " ," + r.endSN + "],track " + o);
                                        this.demuxer.push(t.payload, h, u, null, e, a, !1, d)
                                    } else Pt.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + s + " of [" + r.startSN + " ," + r.endSN + "],track " + o), this.waitingFragment = t, this.state = $e.WAITING_INIT_PTS
                                }
                            }
                            this.fragLoadError = 0
                        }, e.prototype.onFragParsingInitSegment = function (t) {
                            var e = this.fragCurrent, i = t.frag;
                            if (e && "audio" === t.id && i.sn === e.sn && i.level === e.level && this.state === $e.PARSING) {
                                var n = t.tracks, r = void 0;
                                if (n.video && delete n.video, r = n.audio) {
                                    r.levelCodec = r.codec, r.id = t.id, this.hls.trigger(Dt.a.BUFFER_CODECS, n), Pt.b.log("audio track:audio,container:" + r.container + ",codecs[level/parsed]=[" + r.levelCodec + "/" + r.codec + "]");
                                    var a = r.initSegment;
                                    if (a) {
                                        var o = {type: "audio", data: a, parent: "audio", content: "initSegment"};
                                        this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(Dt.a.BUFFER_APPENDING, o))
                                    }
                                    this.tick()
                                }
                            }
                        }, e.prototype.onFragParsingData = function (t) {
                            var e = this, i = this.fragCurrent, n = t.frag;
                            if (i && "audio" === t.id && "audio" === t.type && n.sn === i.sn && n.level === i.level && this.state === $e.PARSING) {
                                var r = this.trackId, a = this.tracks[r], o = this.hls;
                                isNaN(t.endPTS) && (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration), Pt.b.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), _(a.details, i, t.startPTS, t.endPTS);
                                var s = this.audioSwitch, l = this.media, u = !1;
                                if (s && l) if (l.readyState) {
                                    var c = l.currentTime;
                                    Pt.b.log("switching audio track : currentTime:" + c), c >= t.startPTS && (Pt.b.log("switching audio track : flushing all audio"), this.state = $e.BUFFER_FLUSHING, o.trigger(Dt.a.BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: Number.POSITIVE_INFINITY,
                                        type: "audio"
                                    }), u = !0, this.audioSwitch = !1, o.trigger(Dt.a.AUDIO_TRACK_SWITCHED, {id: r}))
                                } else this.audioSwitch = !1, o.trigger(Dt.a.AUDIO_TRACK_SWITCHED, {id: r});
                                var d = this.pendingData;
                                this.audioSwitch || ([t.data1, t.data2].forEach(function (e) {
                                    e && e.length && d.push({type: t.type, data: e, parent: "audio", content: "data"})
                                }), !u && d.length && (d.forEach(function (t) {
                                    e.state === $e.PARSING && (e.pendingBuffering = !0, e.hls.trigger(Dt.a.BUFFER_APPENDING, t))
                                }), this.pendingData = [], this.appended = !0)), this.tick()
                            }
                        }, e.prototype.onFragParsed = function (t) {
                            var e = this.fragCurrent, i = t.frag;
                            e && "audio" === t.id && i.sn === e.sn && i.level === e.level && this.state === $e.PARSING && (this.stats.tparsed = performance.now(), this.state = $e.PARSED, this._checkAppendedParsed())
                        }, e.prototype.onBufferReset = function () {
                            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                        }, e.prototype.onBufferCreated = function (t) {
                            var e = t.tracks.audio;
                            e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
                        }, e.prototype.onBufferAppended = function (t) {
                            if ("audio" === t.parent) {
                                var e = this.state;
                                e !== $e.PARSING && e !== $e.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                            }
                        }, e.prototype._checkAppendedParsed = function () {
                            if (!(this.state !== $e.PARSED || this.appended && this.pendingBuffering)) {
                                var t = this.fragCurrent, e = this.stats, i = this.hls;
                                if (t) {
                                    this.fragPrevious = t, e.tbuffered = performance.now(), i.trigger(Dt.a.FRAG_BUFFERED, {
                                        stats: e,
                                        frag: t,
                                        id: "audio"
                                    });
                                    var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                    Pt.b.log("audio buffered : " + pe.toString(n.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, i.trigger(Dt.a.AUDIO_TRACK_SWITCHED, {id: this.trackId})), this.state = $e.IDLE
                                }
                                this.tick()
                            }
                        }, e.prototype.onError = function (t) {
                            var e = t.frag;
                            if (!e || "audio" === e.type) switch (t.details) {
                                case Ot.a.FRAG_LOAD_ERROR:
                                case Ot.a.FRAG_LOAD_TIMEOUT:
                                    if (!t.fatal) {
                                        var i = this.fragLoadError;
                                        i ? i++ : i = 1;
                                        var n = this.config;
                                        if (i <= n.fragLoadingMaxRetry) {
                                            this.fragLoadError = i, e.loadCounter = 0;
                                            var r = Math.min(Math.pow(2, i - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                                            Pt.b.warn("audioStreamController: frag loading failed, retry in " + r + " ms"), this.retryDate = performance.now() + r, this.state = $e.FRAG_LOADING_WAITING_RETRY
                                        } else Pt.b.error("audioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = $e.ERROR
                                    }
                                    break;
                                case Ot.a.FRAG_LOOP_LOADING_ERROR:
                                case Ot.a.AUDIO_TRACK_LOAD_ERROR:
                                case Ot.a.AUDIO_TRACK_LOAD_TIMEOUT:
                                case Ot.a.KEY_LOAD_ERROR:
                                case Ot.a.KEY_LOAD_TIMEOUT:
                                    this.state !== $e.ERROR && (this.state = t.fatal ? $e.ERROR : $e.IDLE, Pt.b.warn("audioStreamController: " + t.details + " while loading frag,switch to " + this.state + " state ..."));
                                    break;
                                case Ot.a.BUFFER_FULL_ERROR:
                                    if ("audio" === t.parent && (this.state === $e.PARSING || this.state === $e.PARSED)) {
                                        var a = this.mediaBuffer, o = this.media.currentTime;
                                        if (a && re.isBuffered(a, o) && re.isBuffered(a, o + .5)) {
                                            var s = this.config;
                                            s.maxMaxBufferLength >= s.maxBufferLength && (s.maxMaxBufferLength /= 2, Pt.b.warn("audio:reduce max buffer length to " + s.maxMaxBufferLength + "s"), this.fragLoadIdx += 2 * s.fragLoadingLoopThreshold), this.state = $e.IDLE
                                        } else Pt.b.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = $e.BUFFER_FLUSHING, this.hls.trigger(Dt.a.BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: Number.POSITIVE_INFINITY,
                                            type: "audio"
                                        })
                                    }
                            }
                        }, e.prototype.onBufferFlushed = function () {
                            var t = this, e = this.pendingData;
                            e && e.length ? (Pt.b.log("appending pending audio data on Buffer Flushed"), e.forEach(function (e) {
                                t.hls.trigger(Dt.a.BUFFER_APPENDING, e)
                            }), this.appended = !0, this.pendingData = [], this.state = $e.PARSED) : (this.state = $e.IDLE, this.fragPrevious = null, this.tick())
                        }, He(e, [{
                            key: "state", set: function (t) {
                                if (this.state !== t) {
                                    var e = this.state;
                                    this._state = t, Pt.b.log("audio stream:" + e + "->" + t)
                                }
                            }, get: function () {
                                return this._state
                            }
                        }]), e
                    }(Mt), We = ze, qe = function () {
                        function t(t) {
                            return "string" == typeof t && (!!a[t.toLowerCase()] && t.toLowerCase())
                        }

                        function e(t) {
                            return "string" == typeof t && (!!o[t.toLowerCase()] && t.toLowerCase())
                        }

                        function i(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var n in i) t[n] = i[n]
                            }
                            return t
                        }

                        function n(n, a, o) {
                            var s = this, l = function () {
                                if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
                            }(), u = {};
                            l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1;
                            var c = "", d = !1, h = n, f = a, p = o, g = null, y = "", m = !0, v = "auto", b = "start",
                                _ = 50, E = "middle", T = 50, A = "middle";
                            if (Object.defineProperty(s, "id", i({}, u, {
                                    get: function () {
                                        return c
                                    }, set: function (t) {
                                        c = "" + t
                                    }
                                })), Object.defineProperty(s, "pauseOnExit", i({}, u, {
                                    get: function () {
                                        return d
                                    }, set: function (t) {
                                        d = !!t
                                    }
                                })), Object.defineProperty(s, "startTime", i({}, u, {
                                    get: function () {
                                        return h
                                    }, set: function (t) {
                                        if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                                        h = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "endTime", i({}, u, {
                                    get: function () {
                                        return f
                                    }, set: function (t) {
                                        if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                                        f = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "text", i({}, u, {
                                    get: function () {
                                        return p
                                    }, set: function (t) {
                                        p = "" + t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "region", i({}, u, {
                                    get: function () {
                                        return g
                                    }, set: function (t) {
                                        g = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "vertical", i({}, u, {
                                    get: function () {
                                        return y
                                    }, set: function (e) {
                                        var i = t(e);
                                        if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                                        y = i, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "snapToLines", i({}, u, {
                                    get: function () {
                                        return m
                                    }, set: function (t) {
                                        m = !!t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "line", i({}, u, {
                                    get: function () {
                                        return v
                                    }, set: function (t) {
                                        if ("number" != typeof t && t !== r) throw new SyntaxError("An invalid number or illegal string was specified.");
                                        v = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "lineAlign", i({}, u, {
                                    get: function () {
                                        return b
                                    }, set: function (t) {
                                        var i = e(t);
                                        if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
                                        b = i, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "position", i({}, u, {
                                    get: function () {
                                        return _
                                    }, set: function (t) {
                                        if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                                        _ = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "positionAlign", i({}, u, {
                                    get: function () {
                                        return E
                                    }, set: function (t) {
                                        var i = e(t);
                                        if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
                                        E = i, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "size", i({}, u, {
                                    get: function () {
                                        return T
                                    }, set: function (t) {
                                        if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                                        T = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(s, "align", i({}, u, {
                                    get: function () {
                                        return A
                                    }, set: function (t) {
                                        var i = e(t);
                                        if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
                                        A = i, this.hasBeenReset = !0
                                    }
                                })), s.displayState = void 0, l) return s
                        }

                        if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
                        var r = "auto", a = {"": !0, lr: !0, rl: !0},
                            o = {start: !0, middle: !0, end: !0, left: !0, right: !0};
                        return n.prototype.getCueAsHTML = function () {
                            return window.WebVTT.convertCueToDOMTree(window, this.text)
                        }, n
                    }(), Xe = function () {
                        return {
                            decode: function (t) {
                                if (!t) return "";
                                if ("string" != typeof t) throw new Error("Error - expected string data.");
                                return decodeURIComponent(encodeURIComponent(t))
                            }
                        }
                    };
                st.prototype = {
                    set: function (t, e) {
                        this.get(t) || "" === e || (this.values[t] = e)
                    }, get: function (t, e, i) {
                        return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
                    }, has: function (t) {
                        return t in this.values
                    }, alt: function (t, e, i) {
                        for (var n = 0; n < i.length; ++n) if (e === i[n]) {
                            this.set(t, e);
                            break
                        }
                    }, integer: function (t, e) {
                        /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                    }, percent: function (t, e) {
                        return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
                    }
                };
                var Ze = new qe(0, 0, 0), Je = "middle" === Ze.align ? "middle" : "center";
                at.prototype = {
                    parse: function (t) {
                        function e() {
                            var t = i.buffer, e = 0;
                            for (t = ct(t); e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                            var n = t.substr(0, e);
                            return "\r" === t[e] && ++e, "\n" === t[e] && ++e, i.buffer = t.substr(e), n
                        }

                        var i = this;
                        t && (i.buffer += i.decoder.decode(t, {stream: !0}));
                        try {
                            var n;
                            if ("INITIAL" === i.state) {
                                if (!/\r\n|\n/.test(i.buffer)) return this;
                                n = e();
                                var r = n.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                                if (!r || !r[0]) throw new Error("Malformed WebVTT signature.");
                                i.state = "HEADER"
                            }
                            for (var a = !1; i.buffer;) {
                                if (!/\r\n|\n/.test(i.buffer)) return this;
                                switch (a ? a = !1 : n = e(), i.state) {
                                    case"HEADER":
                                        /:/.test(n) ? function (t) {
                                            lt(t, function (t, e) {
                                                switch (t) {
                                                    case"Region":
                                                        console.log("parse region", e)
                                                }
                                            }, /:/)
                                        }(n) : n || (i.state = "ID");
                                        continue;
                                    case"NOTE":
                                        n || (i.state = "ID");
                                        continue;
                                    case"ID":
                                        if (/^NOTE($|[ \t])/.test(n)) {
                                            i.state = "NOTE";
                                            break
                                        }
                                        if (!n) continue;
                                        if (i.cue = new qe(0, 0, ""), i.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                            i.cue.id = n;
                                            continue
                                        }
                                    case"CUE":
                                        try {
                                            ut(n, i.cue, i.regionList)
                                        } catch (t) {
                                            i.cue = null, i.state = "BADCUE";
                                            continue
                                        }
                                        i.state = "CUETEXT";
                                        continue;
                                    case"CUETEXT":
                                        var o = -1 !== n.indexOf("--\x3e");
                                        if (!n || o && (a = !0)) {
                                            i.oncue && i.oncue(i.cue), i.cue = null, i.state = "ID";
                                            continue
                                        }
                                        i.cue.text && (i.cue.text += "\n"), i.cue.text += n;
                                        continue;
                                    case"BADCUE":
                                        n || (i.state = "ID");
                                        continue
                                }
                            }
                        } catch (t) {
                            "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue), i.cue = null, i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
                        }
                        return this
                    }, flush: function () {
                        var t = this;
                        try {
                            if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new Error("Malformed WebVTT signature.")
                        } catch (t) {
                            throw t
                        }
                        return t.onflush && t.onflush(), this
                    }
                };
                var Qe = at, ti = {
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        128: 174,
                        129: 176,
                        130: 189,
                        131: 191,
                        132: 8482,
                        133: 162,
                        134: 163,
                        135: 9834,
                        136: 224,
                        137: 32,
                        138: 232,
                        139: 226,
                        140: 234,
                        141: 238,
                        142: 244,
                        143: 251,
                        144: 193,
                        145: 201,
                        146: 211,
                        147: 218,
                        148: 220,
                        149: 252,
                        150: 8216,
                        151: 161,
                        152: 42,
                        153: 8217,
                        154: 9473,
                        155: 169,
                        156: 8480,
                        157: 8226,
                        158: 8220,
                        159: 8221,
                        160: 192,
                        161: 194,
                        162: 199,
                        163: 200,
                        164: 202,
                        165: 203,
                        166: 235,
                        167: 206,
                        168: 207,
                        169: 239,
                        170: 212,
                        171: 217,
                        172: 249,
                        173: 219,
                        174: 171,
                        175: 187,
                        176: 195,
                        177: 227,
                        178: 205,
                        179: 204,
                        180: 236,
                        181: 210,
                        182: 242,
                        183: 213,
                        184: 245,
                        185: 123,
                        186: 125,
                        187: 92,
                        188: 94,
                        189: 95,
                        190: 124,
                        191: 8764,
                        192: 196,
                        193: 228,
                        194: 214,
                        195: 246,
                        196: 223,
                        197: 165,
                        198: 164,
                        199: 9475,
                        200: 197,
                        201: 229,
                        202: 216,
                        203: 248,
                        204: 9487,
                        205: 9491,
                        206: 9495,
                        207: 9499
                    }, ei = function (t) {
                        var e = t;
                        return ti.hasOwnProperty(t) && (e = ti[t]), String.fromCharCode(e)
                    }, ii = 15, ni = 100, ri = {17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14},
                    ai = {17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15},
                    oi = {25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14},
                    si = {25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15},
                    li = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], ui = {
                        verboseFilter: {DATA: 3, DEBUG: 3, INFO: 2, WARNING: 2, TEXT: 1, ERROR: 0},
                        time: null,
                        verboseLevel: 0,
                        setTime: function (t) {
                            this.time = t
                        },
                        log: function (t, e) {
                            var i = this.verboseFilter[t];
                            this.verboseLevel >= i && console.log(this.time + " [" + t + "] " + e)
                        }
                    }, ci = function (t) {
                        for (var e = [], i = 0; i < t.length; i++) e.push(t[i].toString(16));
                        return e
                    }, di = function () {
                        function t(e, i, n, r, a) {
                            ht(this, t), this.foreground = e || "white", this.underline = i || !1, this.italics = n || !1, this.background = r || "black", this.flash = a || !1
                        }

                        return t.prototype.reset = function () {
                            this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                        }, t.prototype.setStyles = function (t) {
                            for (var e = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < e.length; i++) {
                                var n = e[i];
                                t.hasOwnProperty(n) && (this[n] = t[n])
                            }
                        }, t.prototype.isDefault = function () {
                            return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                        }, t.prototype.equals = function (t) {
                            return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                        }, t.prototype.copy = function (t) {
                            this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                        }, t.prototype.toString = function () {
                            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                        }, t
                    }(), hi = function () {
                        function t(e, i, n, r, a, o) {
                            ht(this, t), this.uchar = e || " ", this.penState = new di(i, n, r, a, o)
                        }

                        return t.prototype.reset = function () {
                            this.uchar = " ", this.penState.reset()
                        }, t.prototype.setChar = function (t, e) {
                            this.uchar = t, this.penState.copy(e)
                        }, t.prototype.setPenState = function (t) {
                            this.penState.copy(t)
                        }, t.prototype.equals = function (t) {
                            return this.uchar === t.uchar && this.penState.equals(t.penState)
                        }, t.prototype.copy = function (t) {
                            this.uchar = t.uchar, this.penState.copy(t.penState)
                        }, t.prototype.isEmpty = function () {
                            return " " === this.uchar && this.penState.isDefault()
                        }, t
                    }(), fi = function () {
                        function t() {
                            ht(this, t), this.chars = [];
                            for (var e = 0; e < ni; e++) this.chars.push(new hi);
                            this.pos = 0, this.currPenState = new di
                        }

                        return t.prototype.equals = function (t) {
                            for (var e = !0, i = 0; i < ni; i++) if (!this.chars[i].equals(t.chars[i])) {
                                e = !1;
                                break
                            }
                            return e
                        }, t.prototype.copy = function (t) {
                            for (var e = 0; e < ni; e++) this.chars[e].copy(t.chars[e])
                        }, t.prototype.isEmpty = function () {
                            for (var t = !0, e = 0; e < ni; e++) if (!this.chars[e].isEmpty()) {
                                t = !1;
                                break
                            }
                            return t
                        }, t.prototype.setCursor = function (t) {
                            this.pos !== t && (this.pos = t), this.pos < 0 ? (ui.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > ni && (ui.log("ERROR", "Too large cursor position " + this.pos), this.pos = ni)
                        }, t.prototype.moveCursor = function (t) {
                            var e = this.pos + t;
                            if (t > 1) for (var i = this.pos + 1; i < e + 1; i++) this.chars[i].setPenState(this.currPenState);
                            this.setCursor(e)
                        }, t.prototype.backSpace = function () {
                            this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                        }, t.prototype.insertChar = function (t) {
                            t >= 144 && this.backSpace();
                            var e = ei(t);
                            if (this.pos >= ni) return void ui.log("ERROR", "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!");
                            this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1)
                        }, t.prototype.clearFromPos = function (t) {
                            var e;
                            for (e = t; e < ni; e++) this.chars[e].reset()
                        }, t.prototype.clear = function () {
                            this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                        }, t.prototype.clearToEndOfRow = function () {
                            this.clearFromPos(this.pos)
                        }, t.prototype.getTextString = function () {
                            for (var t = [], e = !0, i = 0; i < ni; i++) {
                                var n = this.chars[i].uchar;
                                " " !== n && (e = !1), t.push(n)
                            }
                            return e ? "" : t.join("")
                        }, t.prototype.setPenStyles = function (t) {
                            this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                        }, t
                    }(), pi = function () {
                        function t() {
                            ht(this, t), this.rows = [];
                            for (var e = 0; e < ii; e++) this.rows.push(new fi);
                            this.currRow = ii - 1, this.nrRollUpRows = null, this.reset()
                        }

                        return t.prototype.reset = function () {
                            for (var t = 0; t < ii; t++) this.rows[t].clear();
                            this.currRow = ii - 1
                        }, t.prototype.equals = function (t) {
                            for (var e = !0, i = 0; i < ii; i++) if (!this.rows[i].equals(t.rows[i])) {
                                e = !1;
                                break
                            }
                            return e
                        }, t.prototype.copy = function (t) {
                            for (var e = 0; e < ii; e++) this.rows[e].copy(t.rows[e])
                        }, t.prototype.isEmpty = function () {
                            for (var t = !0, e = 0; e < ii; e++) if (!this.rows[e].isEmpty()) {
                                t = !1;
                                break
                            }
                            return t
                        }, t.prototype.backSpace = function () {
                            this.rows[this.currRow].backSpace()
                        }, t.prototype.clearToEndOfRow = function () {
                            this.rows[this.currRow].clearToEndOfRow()
                        }, t.prototype.insertChar = function (t) {
                            this.rows[this.currRow].insertChar(t)
                        }, t.prototype.setPen = function (t) {
                            this.rows[this.currRow].setPenStyles(t)
                        }, t.prototype.moveCursor = function (t) {
                            this.rows[this.currRow].moveCursor(t)
                        }, t.prototype.setCursor = function (t) {
                            ui.log("INFO", "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                        }, t.prototype.setPAC = function (t) {
                            ui.log("INFO", "pacData = " + JSON.stringify(t));
                            var e = t.row - 1;
                            if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                                for (var i = 0; i < ii; i++) this.rows[i].clear();
                                var n = this.currRow + 1 - this.nrRollUpRows, r = this.lastOutputScreen;
                                if (r) {
                                    var a = r.rows[n].cueStartTime;
                                    if (a && a < ui.time) for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(r.rows[n + o])
                                }
                            }
                            this.currRow = e;
                            var s = this.rows[this.currRow];
                            if (null !== t.indent) {
                                var l = t.indent, u = Math.max(l - 1, 0);
                                s.setCursor(t.indent), t.color = s.chars[u].penState.foreground
                            }
                            var c = {
                                foreground: t.color,
                                underline: t.underline,
                                italics: t.italics,
                                background: "black",
                                flash: !1
                            };
                            this.setPen(c)
                        }, t.prototype.setBkgData = function (t) {
                            ui.log("INFO", "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                        }, t.prototype.setRollUpRows = function (t) {
                            this.nrRollUpRows = t
                        }, t.prototype.rollUp = function () {
                            if (null === this.nrRollUpRows) return void ui.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                            ui.log("TEXT", this.getDisplayText());
                            var t = this.currRow + 1 - this.nrRollUpRows, e = this.rows.splice(t, 1)[0];
                            e.clear(), this.rows.splice(this.currRow, 0, e), ui.log("INFO", "Rolling up")
                        }, t.prototype.getDisplayText = function (t) {
                            t = t || !1;
                            for (var e = [], i = "", n = -1, r = 0; r < ii; r++) {
                                var a = this.rows[r].getTextString();
                                a && (n = r + 1, t ? e.push("Row " + n + ": '" + a + "'") : e.push(a.trim()))
                            }
                            return e.length > 0 && (i = t ? "[" + e.join(" | ") + "]" : e.join("\n")), i
                        }, t.prototype.getTextAndFormat = function () {
                            return this.rows
                        }, t
                    }(), gi = function () {
                        function t(e, i) {
                            ht(this, t), this.chNr = e, this.outputFilter = i, this.mode = null, this.verbose = 0, this.displayedMemory = new pi, this.nonDisplayedMemory = new pi, this.lastOutputScreen = new pi, this.currRollUpRow = this.displayedMemory.rows[ii - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                        }

                        return t.prototype.reset = function () {
                            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[ii - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                        }, t.prototype.getHandler = function () {
                            return this.outputFilter
                        }, t.prototype.setHandler = function (t) {
                            this.outputFilter = t
                        }, t.prototype.setPAC = function (t) {
                            this.writeScreen.setPAC(t)
                        }, t.prototype.setBkgData = function (t) {
                            this.writeScreen.setBkgData(t)
                        }, t.prototype.setMode = function (t) {
                            t !== this.mode && (this.mode = t, ui.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                        }, t.prototype.insertChars = function (t) {
                            for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                            var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                            ui.log("INFO", i + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (ui.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                        }, t.prototype.ccRCL = function () {
                            ui.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                        }, t.prototype.ccBS = function () {
                            ui.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                        }, t.prototype.ccAOF = function () {
                        }, t.prototype.ccAON = function () {
                        }, t.prototype.ccDER = function () {
                            ui.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                        }, t.prototype.ccRU = function (t) {
                            ui.log("INFO", "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                        }, t.prototype.ccFON = function () {
                            ui.log("INFO", "FON - Flash On"), this.writeScreen.setPen({flash: !0})
                        }, t.prototype.ccRDC = function () {
                            ui.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                        }, t.prototype.ccTR = function () {
                            ui.log("INFO", "TR"), this.setMode("MODE_TEXT")
                        }, t.prototype.ccRTD = function () {
                            ui.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                        }, t.prototype.ccEDM = function () {
                            ui.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                        }, t.prototype.ccCR = function () {
                            ui.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                        }, t.prototype.ccENM = function () {
                            ui.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                        }, t.prototype.ccEOC = function () {
                            if (ui.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                var t = this.displayedMemory;
                                this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, ui.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                            }
                            this.outputDataUpdate(!0)
                        }, t.prototype.ccTO = function (t) {
                            ui.log("INFO", "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                        }, t.prototype.ccMIDROW = function (t) {
                            var e = {flash: !1};
                            if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white"; else {
                                var i = Math.floor(t / 2) - 16,
                                    n = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                                e.foreground = n[i]
                            }
                            ui.log("INFO", "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                        }, t.prototype.outputDataUpdate = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = ui.time;
                            null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), !0 === t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                        }, t.prototype.cueSplitAtTime = function (t) {
                            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                        }, t
                    }(), yi = function () {
                        function t(e, i, n) {
                            ht(this, t), this.field = e || 1, this.outputs = [i, n], this.channels = [new gi(1, i), new gi(2, n)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                                padding: 0,
                                char: 0,
                                cmd: 0,
                                other: 0
                            }
                        }

                        return t.prototype.getHandler = function (t) {
                            return this.channels[t].getHandler()
                        }, t.prototype.setHandler = function (t, e) {
                            this.channels[t].setHandler(e)
                        }, t.prototype.addData = function (t, e) {
                            var i, n, r, a = !1;
                            this.lastTime = t, ui.setTime(t);
                            for (var o = 0; o < e.length; o += 2) if (n = 127 & e[o], r = 127 & e[o + 1], 0 !== n || 0 !== r) {
                                if (ui.log("DATA", "[" + ci([e[o], e[o + 1]]) + "] -> (" + ci([n, r]) + ")"), i = this.parseCmd(n, r), i || (i = this.parseMidrow(n, r)), i || (i = this.parsePAC(n, r)), i || (i = this.parseBackgroundAttributes(n, r)), !i && (a = this.parseChars(n, r))) if (this.currChNr && this.currChNr >= 0) {
                                    var s = this.channels[this.currChNr - 1];
                                    s.insertChars(a)
                                } else ui.log("WARNING", "No channel found yet. TEXT-MODE?");
                                i ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, ui.log("WARNING", "Couldn't parse cleaned data " + ci([n, r]) + " orig: " + ci([e[o], e[o + 1]])))
                            } else this.dataCounters.padding += 2
                        }, t.prototype.parseCmd = function (t, e) {
                            var i = null, n = (20 === t || 28 === t) && 32 <= e && e <= 47,
                                r = (23 === t || 31 === t) && 33 <= e && e <= 35;
                            if (!n && !r) return !1;
                            if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, ui.log("DEBUG", "Repeated command (" + ci([t, e]) + ") is dropped"), !0;
                            i = 20 === t || 23 === t ? 1 : 2;
                            var a = this.channels[i - 1];
                            return 20 === t || 28 === t ? 32 === e ? a.ccRCL() : 33 === e ? a.ccBS() : 34 === e ? a.ccAOF() : 35 === e ? a.ccAON() : 36 === e ? a.ccDER() : 37 === e ? a.ccRU(2) : 38 === e ? a.ccRU(3) : 39 === e ? a.ccRU(4) : 40 === e ? a.ccFON() : 41 === e ? a.ccRDC() : 42 === e ? a.ccTR() : 43 === e ? a.ccRTD() : 44 === e ? a.ccEDM() : 45 === e ? a.ccCR() : 46 === e ? a.ccENM() : 47 === e && a.ccEOC() : a.ccTO(e - 32), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = i, !0
                        }, t.prototype.parseMidrow = function (t, e) {
                            var i = null;
                            if ((17 === t || 25 === t) && 32 <= e && e <= 47) {
                                if ((i = 17 === t ? 1 : 2) !== this.currChNr) return ui.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                                return this.channels[i - 1].ccMIDROW(e), ui.log("DEBUG", "MIDROW (" + ci([t, e]) + ")"), !0
                            }
                            return !1
                        }, t.prototype.parsePAC = function (t, e) {
                            var i = null, n = null, r = (17 <= t && t <= 23 || 25 <= t && t <= 31) && 64 <= e && e <= 127,
                                a = (16 === t || 24 === t) && 64 <= e && e <= 95;
                            if (!r && !a) return !1;
                            if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                            i = t <= 23 ? 1 : 2, n = 64 <= e && e <= 95 ? 1 === i ? ri[t] : oi[t] : 1 === i ? ai[t] : si[t];
                            var o = this.interpretPAC(n, e);
                            return this.channels[i - 1].setPAC(o), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = i, !0
                        }, t.prototype.interpretPAC = function (t, e) {
                            var i = e, n = {color: null, italics: !1, indent: null, underline: !1, row: t};
                            return i = e > 95 ? e - 96 : e - 64, n.underline = 1 == (1 & i), i <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((i - 16) / 2), n
                        }, t.prototype.parseChars = function (t, e) {
                            var i = null, n = null, r = null;
                            if (t >= 25 ? (i = 2, r = t - 8) : (i = 1, r = t), 17 <= r && r <= 19) {
                                var a = e;
                                a = 17 === r ? e + 80 : 18 === r ? e + 112 : e + 144, ui.log("INFO", "Special char '" + ei(a) + "' in channel " + i), n = [a]
                            } else 32 <= t && t <= 127 && (n = 0 === e ? [t] : [t, e]);
                            if (n) {
                                var o = ci(n);
                                ui.log("DEBUG", "Char codes =  " + o.join(",")), this.lastCmdA = null, this.lastCmdB = null
                            }
                            return n
                        }, t.prototype.parseBackgroundAttributes = function (t, e) {
                            var i, n, r, a, o = (16 === t || 24 === t) && 32 <= e && e <= 47,
                                s = (23 === t || 31 === t) && 45 <= e && e <= 47;
                            return !(!o && !s) && (i = {}, 16 === t || 24 === t ? (n = Math.floor((e - 32) / 2), i.background = li[n], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0)), r = t < 24 ? 1 : 2, a = this.channels[r - 1], a.setBkgData(i), this.lastCmdA = null, this.lastCmdB = null, !0)
                        }, t.prototype.reset = function () {
                            for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].reset();
                            this.lastCmdA = null, this.lastCmdB = null
                        }, t.prototype.cueSplitAtTime = function (t) {
                            for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].cueSplitAtTime(t)
                        }, t
                    }(), mi = yi, vi = function () {
                        function t(e, i) {
                            ft(this, t), this.timelineController = e, this.track = i, this.startTime = null, this.endTime = null, this.screen = null
                        }

                        return t.prototype.dispatchCue = function () {
                            null !== this.startTime && (this.timelineController.addCues("textTrack" + this.track, this.startTime, this.endTime, this.screen), this.startTime = null)
                        }, t.prototype.newCue = function (t, e, i) {
                            (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = i, this.timelineController.createCaptionsTrack(this.track)
                        }, t
                    }(), bi = vi, _i = function (t, e, i) {
                        return t.substr(i || 0, e.length) === e
                    }, Ei = function (t) {
                        var e = parseInt(t.substr(-3)), i = parseInt(t.substr(-6, 2)), n = parseInt(t.substr(-9, 2)),
                            r = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                        return isNaN(e) || isNaN(i) || isNaN(n) || isNaN(r) ? -1 : (e += 1e3 * i, e += 6e4 * n, e += 36e5 * r)
                    }, Ti = function (t) {
                        for (var e = 5381, i = t.length; i;) e = 33 * e ^ t.charCodeAt(--i);
                        return (e >>> 0).toString()
                    }, Ai = function (t, e, i) {
                        var n = t[e], r = t[n.prevCC];
                        if (!r || !r.new && n.new) return t.ccOffset = t.presentationOffset = n.start, void(n.new = !1);
                        for (; r && r.new;) t.ccOffset += n.start - r.start, n.new = !1, n = r, r = t[n.prevCC];
                        t.presentationOffset = i
                    }, Si = {
                        parse: function (t, e, i, n, r, a) {
                            var o = /\r\n|\n\r|\n|\r/g,
                                s = Object(Te.b)(new Uint8Array(t)).trim().replace(o, "\n").split("\n"), l = "00:00.000",
                                u = 0, c = 0, d = 0, h = [], f = void 0, p = !0, g = new Qe;
                            g.oncue = function (t) {
                                var e = i[n], r = i.ccOffset;
                                e && e.new && (void 0 !== c ? r = i.ccOffset = e.start : Ai(i, n, d)), d && (r = d + i.ccOffset - i.presentationOffset), t.startTime += r - c, t.endTime += r - c, t.id = Ti(t.startTime.toString()) + Ti(t.endTime.toString()) + Ti(t.text), t.text = decodeURIComponent(encodeURIComponent(t.text)), t.endTime > 0 && h.push(t)
                            }, g.onparsingerror = function (t) {
                                f = t
                            }, g.onflush = function () {
                                if (f && a) return void a(f);
                                r(h)
                            }, s.forEach(function (t) {
                                if (p) {
                                    if (_i(t, "X-TIMESTAMP-MAP=")) {
                                        p = !1, t.substr(16).split(",").forEach(function (t) {
                                            _i(t, "LOCAL:") ? l = t.substr(6) : _i(t, "MPEGTS:") && (u = parseInt(t.substr(7)))
                                        });
                                        try {
                                            e = e < 0 ? e + 8589934592 : e, u -= e, c = Ei(l) / 1e3, d = u / 9e4, -1 === c && (f = new Error("Malformed X-TIMESTAMP-MAP: " + t))
                                        } catch (e) {
                                            f = new Error("Malformed X-TIMESTAMP-MAP: " + t)
                                        }
                                        return
                                    }
                                    "" === t && (p = !1)
                                }
                                g.parse(t + "\n")
                            }), g.flush()
                        }
                    }, Li = Si, Ri = function (t) {
                        function e(i) {
                            pt(this, e);
                            var n = gt(this, t.call(this, i, Dt.a.MEDIA_ATTACHING, Dt.a.MEDIA_DETACHING, Dt.a.FRAG_PARSING_USERDATA, Dt.a.FRAG_DECRYPTED, Dt.a.MANIFEST_LOADING, Dt.a.MANIFEST_LOADED, Dt.a.FRAG_LOADED, Dt.a.LEVEL_SWITCHING, Dt.a.INIT_PTS_FOUND));
                            if (n.hls = i, n.config = i.config, n.enabled = !0, n.Cues = i.config.cueHandler, n.textTracks = [], n.tracks = [], n.unparsedVttFrags = [], n.initPTS = void 0, n.cueRanges = [], n.config.enableCEA708Captions) {
                                var r = new bi(n, 1), a = new bi(n, 2);
                                n.cea608Parser = new mi(0, r, a)
                            }
                            return n
                        }

                        return yt(e, t), e.prototype.addCues = function (t, e, i, n) {
                            for (var r = this.cueRanges, a = !1, o = r.length; o--;) {
                                var s = r[o], l = bt(s[0], s[1], e, i);
                                if (l >= 0 && (s[0] = Math.min(s[0], e), s[1] = Math.max(s[1], i), a = !0, l / (i - e) > .5)) return
                            }
                            a || r.push([e, i]), this.Cues.newCue(this[t], e, i, n)
                        }, e.prototype.onInitPtsFound = function (t) {
                            var e = this;
                            void 0 === this.initPTS && (this.initPTS = t.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function (t) {
                                e.onFragLoaded(t)
                            }), this.unparsedVttFrags = [])
                        }, e.prototype.getExistingTrack = function (t) {
                            var e = this.media;
                            if (e) for (var i = 0; i < e.textTracks.length; i++) {
                                var n = e.textTracks[i], r = "textTrack" + t;
                                if (!0 === n[r]) return n
                            }
                            return null
                        }, e.prototype.sendAddTrackEvent = function (t, e) {
                            var i = null;
                            try {
                                i = new window.Event("addtrack")
                            } catch (t) {
                                i = document.createEvent("Event"), i.initEvent("addtrack", !1, !1)
                            }
                            i.track = t, e.dispatchEvent(i)
                        }, e.prototype.createCaptionsTrack = function (t) {
                            var e = "textTrack" + t;
                            if (!this[e]) {
                                var i = this.getExistingTrack(t);
                                if (i) this[e] = i, mt(this[e]), this.sendAddTrackEvent(this[e], this.media); else {
                                    var n = this.createTextTrack("captions", this.config["captionsTextTrack" + t + "Label"], this.config.captionsTextTrack1LanguageCode);
                                    n && (n[e] = !0, this[e] = n)
                                }
                            }
                        }, e.prototype.createTextTrack = function (t, e, i) {
                            var n = this.media;
                            if (n) return n.addTextTrack(t, e, i)
                        }, e.prototype.destroy = function () {
                            Mt.prototype.destroy.call(this)
                        }, e.prototype.onMediaAttaching = function (t) {
                            this.media = t.media, this._cleanTracks()
                        }, e.prototype.onMediaDetaching = function () {
                            mt(this.textTrack1), mt(this.textTrack2)
                        }, e.prototype.onManifestLoading = function () {
                            this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                                ccOffset: 0,
                                presentationOffset: 0
                            }, this._cleanTracks()
                        }, e.prototype._cleanTracks = function () {
                            var t = this.media;
                            if (t) {
                                var e = t.textTracks;
                                if (e) for (var i = 0; i < e.length; i++) mt(e[i])
                            }
                        }, e.prototype.onManifestLoaded = function (t) {
                            var e = this;
                            if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {
                                this.tracks = t.subtitles || [];
                                var i = this.media ? this.media.textTracks : [];
                                this.tracks.forEach(function (t, n) {
                                    var r = void 0;
                                    if (n < i.length) {
                                        var a = i[n];
                                        vt(a, t) && (r = a)
                                    }
                                    r || (r = e.createTextTrack("subtitles", t.name, t.lang)), r.mode = t.default ? "showing" : "hidden", e.textTracks.push(r)
                                })
                            }
                        }, e.prototype.onLevelSwitching = function () {
                            this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
                        }, e.prototype.onFragLoaded = function (t) {
                            var e = t.frag, i = t.payload;
                            if ("main" === e.type) {
                                var n = e.sn;
                                if (n !== this.lastSn + 1) {
                                    var r = this.cea608Parser;
                                    r && r.reset()
                                }
                                this.lastSn = n
                            } else if ("subtitle" === e.type) if (i.byteLength) {
                                if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                                var a = e.decryptdata;
                                null != a && null != a.key && "AES-128" === a.method || this._parseVTTs(e, i)
                            } else this.hls.trigger(Dt.a.SUBTITLE_FRAG_PROCESSED, {success: !1, frag: e})
                        }, e.prototype._parseVTTs = function (t, e) {
                            var i = this.vttCCs;
                            i[t.cc] || (i[t.cc] = {start: t.start, prevCC: this.prevCC, new: !0}, this.prevCC = t.cc);
                            var n = this.textTracks, r = this.hls;
                            Li.parse(e, this.initPTS, i, t.cc, function (e) {
                                var i = n[t.trackId];
                                e.forEach(function (t) {
                                    if (!i.cues.getCueById(t.id)) try {
                                        i.addCue(t)
                                    } catch (n) {
                                        var e = new window.TextTrackCue(t.startTime, t.endTime, t.text);
                                        e.id = t.id, i.addCue(e)
                                    }
                                }), r.trigger(Dt.a.SUBTITLE_FRAG_PROCESSED, {success: !0, frag: t})
                            }, function (e) {
                                Pt.b.log("Failed to parse VTT cue: " + e), r.trigger(Dt.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t
                                })
                            })
                        }, e.prototype.onFragDecrypted = function (t) {
                            var e = t.payload, i = t.frag;
                            if ("subtitle" === i.type) {
                                if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                                this._parseVTTs(i, e)
                            }
                        }, e.prototype.onFragParsingUserdata = function (t) {
                            if (this.enabled && this.config.enableCEA708Captions) for (var e = 0; e < t.samples.length; e++) {
                                var i = this.extractCea608Data(t.samples[e].bytes);
                                this.cea608Parser.addData(t.samples[e].pts, i)
                            }
                        }, e.prototype.extractCea608Data = function (t) {
                            for (var e, i, n, r, a, o = 31 & t[0], s = 2, l = [], u = 0; u < o; u++) e = t[s++], i = 127 & t[s++], n = 127 & t[s++], r = 0 != (4 & e), a = 3 & e, 0 === i && 0 === n || r && 0 === a && (l.push(i), l.push(n));
                            return l
                        }, e
                    }(Mt), ki = Ri, Ci = function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(), wi = function (t) {
                        function e(i) {
                            _t(this, e);
                            var n = Et(this, t.call(this, i, Dt.a.MEDIA_ATTACHED, Dt.a.MEDIA_DETACHING, Dt.a.MANIFEST_LOADING, Dt.a.MANIFEST_LOADED, Dt.a.SUBTITLE_TRACK_LOADED));
                            return n.tracks = [], n.trackId = -1, n.media = void 0, n.subtitleDisplay = !1, n
                        }

                        return Tt(e, t), e.prototype._onTextTracksChanged = function () {
                            if (this.media) {
                                for (var t = -1, e = At(this.media.textTracks), i = 0; i < e.length; i++) "showing" === e[i].mode && (t = i);
                                this.subtitleTrack = t
                            }
                        }, e.prototype.destroy = function () {
                            Mt.prototype.destroy.call(this)
                        }, e.prototype.onMediaAttached = function (t) {
                            var e = this;
                            this.media = t.media, this.media && (void 0 !== this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function () {
                                e.trackChangeListener()
                            }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                        }, e.prototype.onMediaDetaching = function () {
                            this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = void 0)
                        }, e.prototype.onManifestLoading = function () {
                            this.tracks = [], this.trackId = -1
                        }, e.prototype.onManifestLoaded = function (t) {
                            var e = this, i = t.subtitles || [];
                            this.tracks = i, this.trackId = -1, this.hls.trigger(Dt.a.SUBTITLE_TRACKS_UPDATED, {subtitleTracks: i}), i.forEach(function (t) {
                                t.default && (e.media ? e.subtitleTrack = t.id : e.queuedDefaultTrack = t.id)
                            })
                        }, e.prototype.onTick = function () {
                            var t = this.trackId, e = this.tracks[t];
                            if (e) {
                                var i = e.details;
                                void 0 !== i && !0 !== i.live || (Pt.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(Dt.a.SUBTITLE_TRACK_LOADING, {
                                    url: e.url,
                                    id: t
                                }))
                            }
                        }, e.prototype.onSubtitleTrackLoaded = function (t) {
                            var e = this;
                            t.id < this.tracks.length && (Pt.b.log("subtitle track " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(function () {
                                e.onTick()
                            }, 1e3 * t.details.targetduration, this)), !t.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
                        }, e.prototype.setSubtitleTrackInternal = function (t) {
                            if (!(t < -1 || t >= this.tracks.length)) {
                                this.timer && (clearInterval(this.timer), this.timer = null);
                                var e = At(this.media.textTracks);
                                if (-1 !== this.trackId && this.subtitleDisplay && (e[this.trackId].mode = "hidden"), this.trackId = t, Pt.b.log("switching to subtitle track " + t), this.hls.trigger(Dt.a.SUBTITLE_TRACK_SWITCH, {id: t}), -1 !== t) {
                                    var i = this.tracks[t];
                                    this.subtitleDisplay && (e[t].mode = "showing");
                                    var n = i.details;
                                    void 0 !== n && !0 !== n.live || (Pt.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(Dt.a.SUBTITLE_TRACK_LOADING, {
                                        url: i.url,
                                        id: t
                                    }))
                                }
                            }
                        }, Ci(e, [{
                            key: "subtitleTracks", get: function () {
                                return this.tracks
                            }
                        }, {
                            key: "subtitleTrack", get: function () {
                                return this.trackId
                            }, set: function (t) {
                                this.trackId !== t && this.setSubtitleTrackInternal(t)
                            }
                        }]), e
                    }(Mt), Ii = wi, Di = i(4),
                    Oi = {STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING"},
                    Pi = function (t) {
                        function e(i) {
                            St(this, e);
                            var n = Lt(this, t.call(this, i, Dt.a.MEDIA_ATTACHED, Dt.a.ERROR, Dt.a.KEY_LOADED, Dt.a.FRAG_LOADED, Dt.a.SUBTITLE_TRACKS_UPDATED, Dt.a.SUBTITLE_TRACK_SWITCH, Dt.a.SUBTITLE_TRACK_LOADED, Dt.a.SUBTITLE_FRAG_PROCESSED));
                            return n.config = i.config, n.vttFragSNsProcessed = {}, n.vttFragQueues = void 0, n.currentlyProcessing = null, n.state = Oi.STOPPED, n.currentTrackId = -1, n.ticks = 0, n.decrypter = new Di.a(i.observer, i.config), n
                        }

                        return Rt(e, t), e.prototype.destroy = function () {
                            Mt.prototype.destroy.call(this), this.state = Oi.STOPPED
                        }, e.prototype.clearVttFragQueues = function () {
                            var t = this;
                            this.vttFragQueues = {}, this.tracks.forEach(function (e) {
                                t.vttFragQueues[e.id] = []
                            })
                        }, e.prototype.nextFrag = function () {
                            if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                                var t = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                                this.fragCurrent = t, this.hls.trigger(Dt.a.FRAG_LOADING, {frag: t}), this.state = Oi.FRAG_LOADING
                            }
                        }, e.prototype.onSubtitleFragProcessed = function (t) {
                            t.success && this.vttFragSNsProcessed[t.frag.trackId].push(t.frag.sn), this.currentlyProcessing = null, this.state = Oi.IDLE, this.nextFrag()
                        }, e.prototype.onMediaAttached = function () {
                            this.state = Oi.IDLE
                        }, e.prototype.onError = function (t) {
                            var e = t.frag;
                            e && "subtitle" !== e.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
                        }, e.prototype.tick = function () {
                            var t = this;
                            1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(function () {
                                t.tick()
                            }, 1), this.ticks = 0)
                        }, e.prototype.doTick = function () {
                            var t = this;
                            switch (this.state) {
                                case Oi.IDLE:
                                    var e = this.tracks, i = this.currentTrackId, n = this.vttFragSNsProcessed[i],
                                        r = this.vttFragQueues[i],
                                        a = this.currentlyProcessing ? this.currentlyProcessing.sn : -1,
                                        o = function (t) {
                                            return n.indexOf(t.sn) > -1
                                        }, s = function (t) {
                                            return r.some(function (e) {
                                                return e.sn === t.sn
                                            })
                                        };
                                    if (!e) break;
                                    var l;
                                    if (i < e.length && (l = e[i].details), void 0 === l) break;
                                    l.fragments.forEach(function (e) {
                                        o(e) || e.sn === a || s(e) || (e.decryptdata && null != e.decryptdata.uri && null == e.decryptdata.key ? (Pt.b.log("Loading key for " + e.sn), t.state = Oi.KEY_LOADING, t.hls.trigger(Dt.a.KEY_LOADING, {frag: e})) : (e.trackId = i, r.push(e), t.nextFrag()))
                                    })
                            }
                        }, e.prototype.onSubtitleTracksUpdated = function (t) {
                            var e = this;
                            Pt.b.log("subtitle tracks updated"), this.tracks = t.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function (t) {
                                e.vttFragSNsProcessed[t.id] = []
                            })
                        }, e.prototype.onSubtitleTrackSwitch = function (t) {
                            this.currentTrackId = t.id, this.clearVttFragQueues()
                        }, e.prototype.onSubtitleTrackLoaded = function () {
                            this.tick()
                        }, e.prototype.onKeyLoaded = function () {
                            this.state === Oi.KEY_LOADING && (this.state = Oi.IDLE, this.tick())
                        }, e.prototype.onFragLoaded = function (t) {
                            var e = this.fragCurrent, i = t.frag.decryptdata, n = t.frag, r = this.hls;
                            if (this.state === Oi.FRAG_LOADING && e && "subtitle" === t.frag.type && e.sn === t.frag.sn && t.payload.byteLength > 0 && null != i && null != i.key && "AES-128" === i.method) {
                                var a;
                                try {
                                    a = performance.now()
                                } catch (t) {
                                    a = Date.now()
                                }
                                this.decrypter.decrypt(t.payload, i.key.buffer, i.iv.buffer, function (t) {
                                    var e;
                                    try {
                                        e = performance.now()
                                    } catch (t) {
                                        e = Date.now()
                                    }
                                    r.trigger(Dt.a.FRAG_DECRYPTED, {
                                        frag: n,
                                        payload: t,
                                        stats: {tstart: a, tdecrypt: e}
                                    })
                                })
                            }
                        }, e
                    }(Mt), xi = Pi, Ni = {
                        autoStartLoad: !0,
                        startPosition: -1,
                        defaultAudioCodec: void 0,
                        debug: !1,
                        capLevelOnFPSDrop: !1,
                        capLevelToPlayerSize: !1,
                        initialLiveManifestSize: 1,
                        maxBufferLength: 30,
                        maxBufferSize: 6e7,
                        maxBufferHole: .5,
                        maxSeekHole: 2,
                        lowBufferWatchdogPeriod: .5,
                        highBufferWatchdogPeriod: 3,
                        nudgeOffset: .1,
                        nudgeMaxRetry: 3,
                        maxFragLookUpTolerance: .25,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 1 / 0,
                        liveSyncDuration: void 0,
                        liveMaxLatencyDuration: void 0,
                        liveDurationInfinity: !1,
                        maxMaxBufferLength: 600,
                        enableWorker: !0,
                        enableSoftwareAES: !0,
                        manifestLoadingTimeOut: 1e4,
                        manifestLoadingMaxRetry: 1,
                        manifestLoadingRetryDelay: 1e3,
                        manifestLoadingMaxRetryTimeout: 64e3,
                        startLevel: void 0,
                        levelLoadingTimeOut: 1e4,
                        levelLoadingMaxRetry: 4,
                        levelLoadingRetryDelay: 1e3,
                        levelLoadingMaxRetryTimeout: 64e3,
                        fragLoadingTimeOut: 2e4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingRetryDelay: 1e3,
                        fragLoadingMaxRetryTimeout: 64e3,
                        fragLoadingLoopThreshold: 3,
                        startFragPrefetch: !1,
                        fpsDroppedMonitoringPeriod: 5e3,
                        fpsDroppedMonitoringThreshold: .2,
                        appendErrorMaxRetry: 3,
                        loader: Ke,
                        fLoader: void 0,
                        pLoader: void 0,
                        xhrSetup: void 0,
                        fetchSetup: void 0,
                        abrController: De,
                        bufferController: xe,
                        capLevelController: Fe,
                        fpsController: Ue,
                        stretchShortVideoTrack: !1,
                        maxAudioFramesDrift: 1,
                        forceKeyFrameOnDiscontinuity: !0,
                        abrEwmaFastLive: 3,
                        abrEwmaSlowLive: 9,
                        abrEwmaFastVoD: 3,
                        abrEwmaSlowVoD: 9,
                        abrEwmaDefaultEstimate: 5e5,
                        abrBandWidthFactor: .95,
                        abrBandWidthUpFactor: .7,
                        abrMaxWithRealBitrate: !1,
                        maxStarvationDelay: 4,
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0
                    };
                Ni.subtitleStreamController = xi, Ni.subtitleTrackController = Ii, Ni.timelineController = ki, Ni.cueHandler = Ct, Ni.enableCEA708Captions = !0, Ni.enableWebVTT = !0, Ni.captionsTextTrack1Label = "English", Ni.captionsTextTrack1LanguageCode = "en", Ni.captionsTextTrack2Label = "Spanish", Ni.captionsTextTrack2LanguageCode = "es", Ni.audioStreamController = We, Ni.audioTrackController = Ye;
                var Mi = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(), Fi = function () {
                    function t() {
                        var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        kt(this, t);
                        var n = t.DefaultConfig;
                        if ((i.liveSyncDurationCount || i.liveMaxLatencyDurationCount) && (i.liveSyncDuration || i.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                        for (var r in n) r in i || (i[r] = n[r]);
                        if (void 0 !== i.liveMaxLatencyDurationCount && i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                        if (void 0 !== i.liveMaxLatencyDuration && (i.liveMaxLatencyDuration <= i.liveSyncDuration || void 0 === i.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                        Object(Pt.a)(i.debug), this.config = i, this._autoLevelCapping = -1;
                        var a = this.observer = new se.a;
                        a.trigger = function (t) {
                            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                            a.emit.apply(a, [t, t].concat(i))
                        }, a.off = function (t) {
                            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                            a.removeListener.apply(a, [t].concat(i))
                        }, this.on = a.on.bind(a), this.off = a.off.bind(a), this.trigger = a.trigger.bind(a);
                        var o = this.abrController = new i.abrController(this), s = new i.bufferController(this),
                            l = new i.capLevelController(this), u = new i.fpsController(this), c = new Xt(this),
                            d = new Jt(this), h = new te(this), f = new Se(this),
                            p = this.levelController = new Ee(this), g = this.streamController = new ve(this),
                            y = [p, g], m = i.audioStreamController;
                        m && y.push(new m(this)), this.networkControllers = y;
                        var v = [c, d, h, o, s, l, u, f];
                        if (m = i.audioTrackController) {
                            var b = new m(this);
                            this.audioTrackController = b, v.push(b)
                        }
                        if (m = i.subtitleTrackController) {
                            var _ = new m(this);
                            this.subtitleTrackController = _, v.push(_)
                        }
                        [i.subtitleStreamController, i.timelineController].forEach(function (t) {
                            t && v.push(new t(e))
                        }), this.coreComponents = v
                    }

                    return t.isSupported = function () {
                        return F()
                    }, Mi(t, null, [{
                        key: "version", get: function () {
                            return "0.8.9"
                        }
                    }, {
                        key: "Events", get: function () {
                            return Dt.a
                        }
                    }, {
                        key: "ErrorTypes", get: function () {
                            return Ot.b
                        }
                    }, {
                        key: "ErrorDetails", get: function () {
                            return Ot.a
                        }
                    }, {
                        key: "DefaultConfig", get: function () {
                            return t.defaultConfig ? t.defaultConfig : Ni
                        }, set: function (e) {
                            t.defaultConfig = e
                        }
                    }]), t.prototype.destroy = function () {
                        Pt.b.log("destroy"), this.trigger(Dt.a.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function (t) {
                            t.destroy()
                        }), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1
                    }, t.prototype.attachMedia = function (t) {
                        Pt.b.log("attachMedia"), this.media = t, this.trigger(Dt.a.MEDIA_ATTACHING, {media: t})
                    }, t.prototype.detachMedia = function () {
                        Pt.b.log("detachMedia"), this.trigger(Dt.a.MEDIA_DETACHING), this.media = null
                    }, t.prototype.loadSource = function (t) {
                        t = It.a.buildAbsoluteURL(window.location.href, t, {alwaysNormalize: !0}), Pt.b.log("loadSource:" + t), this.url = t, this.trigger(Dt.a.MANIFEST_LOADING, {url: t})
                    }, t.prototype.startLoad = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                        Pt.b.log("startLoad(" + t + ")"), this.networkControllers.forEach(function (e) {
                            e.startLoad(t)
                        })
                    }, t.prototype.stopLoad = function () {
                        Pt.b.log("stopLoad"), this.networkControllers.forEach(function (t) {
                            t.stopLoad()
                        })
                    }, t.prototype.swapAudioCodec = function () {
                        Pt.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                    }, t.prototype.recoverMediaError = function () {
                        Pt.b.log("recoverMediaError");
                        var t = this.media;
                        this.detachMedia(), this.attachMedia(t)
                    }, Mi(t, [{
                        key: "levels", get: function () {
                            return this.levelController.levels
                        }
                    }, {
                        key: "currentLevel", get: function () {
                            return this.streamController.currentLevel
                        }, set: function (t) {
                            Pt.b.log("set currentLevel:" + t), this.loadLevel = t, this.streamController.immediateLevelSwitch()
                        }
                    }, {
                        key: "nextLevel", get: function () {
                            return this.streamController.nextLevel
                        }, set: function (t) {
                            Pt.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                        }
                    }, {
                        key: "loadLevel", get: function () {
                            return this.levelController.level
                        }, set: function (t) {
                            Pt.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
                        }
                    }, {
                        key: "nextLoadLevel", get: function () {
                            return this.levelController.nextLoadLevel
                        }, set: function (t) {
                            this.levelController.nextLoadLevel = t
                        }
                    }, {
                        key: "firstLevel", get: function () {
                            return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                        }, set: function (t) {
                            Pt.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
                        }
                    }, {
                        key: "startLevel", get: function () {
                            return this.levelController.startLevel
                        }, set: function (t) {
                            Pt.b.log("set startLevel:" + t);
                            var e = this;
                            -1 !== t && (t = Math.max(t, e.minAutoLevel)), e.levelController.startLevel = t
                        }
                    }, {
                        key: "autoLevelCapping", get: function () {
                            return this._autoLevelCapping
                        }, set: function (t) {
                            Pt.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t
                        }
                    }, {
                        key: "autoLevelEnabled", get: function () {
                            return -1 === this.levelController.manualLevel
                        }
                    }, {
                        key: "manualLevel", get: function () {
                            return this.levelController.manualLevel
                        }
                    }, {
                        key: "minAutoLevel", get: function () {
                            for (var t = this, e = t.levels, i = t.config.minAutoBitrate, n = e ? e.length : 0, r = 0; r < n; r++) {
                                if ((e[r].realBitrate ? Math.max(e[r].realBitrate, e[r].bitrate) : e[r].bitrate) > i) return r
                            }
                            return 0
                        }
                    }, {
                        key: "maxAutoLevel", get: function () {
                            var t = this, e = t.levels, i = t.autoLevelCapping;
                            return -1 === i && e && e.length ? e.length - 1 : i
                        }
                    }, {
                        key: "nextAutoLevel", get: function () {
                            var t = this;
                            return Math.min(Math.max(t.abrController.nextAutoLevel, t.minAutoLevel), t.maxAutoLevel)
                        }, set: function (t) {
                            var e = this;
                            e.abrController.nextAutoLevel = Math.max(e.minAutoLevel, t)
                        }
                    }, {
                        key: "audioTracks", get: function () {
                            var t = this.audioTrackController;
                            return t ? t.audioTracks : []
                        }
                    }, {
                        key: "audioTrack", get: function () {
                            var t = this.audioTrackController;
                            return t ? t.audioTrack : -1
                        }, set: function (t) {
                            var e = this.audioTrackController;
                            e && (e.audioTrack = t)
                        }
                    }, {
                        key: "liveSyncPosition", get: function () {
                            return this.streamController.liveSyncPosition
                        }
                    }, {
                        key: "subtitleTracks", get: function () {
                            var t = this.subtitleTrackController;
                            return t ? t.subtitleTracks : []
                        }
                    }, {
                        key: "subtitleTrack", get: function () {
                            var t = this.subtitleTrackController;
                            return t ? t.subtitleTrack : -1
                        }, set: function (t) {
                            var e = this.subtitleTrackController;
                            e && (e.subtitleTrack = t)
                        }
                    }, {
                        key: "subtitleDisplay", get: function () {
                            var t = this.subtitleTrackController;
                            return !!t && t.subtitleDisplay
                        }, set: function (t) {
                            var e = this.subtitleTrackController;
                            e && (e.subtitleDisplay = t)
                        }
                    }]), t
                }();
                e.default = Fi
            }, function (t, e, i) {
                function n(t) {
                    function e(n) {
                        if (i[n]) return i[n].exports;
                        var r = i[n] = {i: n, l: !1, exports: {}};
                        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
                    }

                    var i = {};
                    e.m = t, e.c = i, e.i = function (t) {
                        return t
                    }, e.d = function (t, i, n) {
                        e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
                    }, e.n = function (t) {
                        var i = t && t.__esModule ? function () {
                            return t.default
                        } : function () {
                            return t
                        };
                        return e.d(i, "a", i), i
                    }, e.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, e.p = "/", e.oe = function (t) {
                        throw console.error(t), t
                    };
                    var n = e(e.s = ENTRY_MODULE);
                    return n.default || n
                }

                function r(t) {
                    return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                }

                function a(t) {
                    var e = [], i = t.toString(), n = i.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
                    if (!n) return e;
                    for (var a, o = n[1], s = new RegExp("(\\\\n|\\W)" + r(o) + "\\((/\\*.*?\\*/)?s?.*?([\\.|\\-|\\w|/|@]+).*?\\)", "g"); a = s.exec(i);) e.push(a[3]);
                    return e
                }

                function o(t, e) {
                    for (var i = [e], n = [], r = {}; i.length;) {
                        var o = i.pop();
                        if (!r[o] && t[o]) {
                            r[o] = !0, n.push(o);
                            var s = a(t[o]);
                            i = i.concat(s)
                        }
                    }
                    return n
                }

                t.exports = function (t, e) {
                    e = e || {};
                    var r = i.m, a = e.all ? Object.keys(r) : o(r, t),
                        s = "(" + n.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a.map(function (t) {
                            return JSON.stringify(t) + ": " + r[t].toString()
                        }).join(",") + "})(self);", l = new window.Blob([s], {type: "text/javascript"});
                    if (e.bare) return l;
                    var u = window.URL || window.webkitURL || window.mozURL || window.msURL, c = u.createObjectURL(l),
                        d = new window.Worker(c);
                    return d.objectURL = c, d
                }
            }, function (t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {value: !0});
                var n = i(7), r = i(1), a = i(0), o = i(5), s = i.n(o), l = function (t) {
                    var e = new s.a;
                    e.trigger = function (t) {
                        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                        e.emit.apply(e, [t, t].concat(n))
                    }, e.off = function (t) {
                        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                        e.removeListener.apply(e, [t].concat(n))
                    };
                    var i = function (e, i) {
                        t.postMessage({event: e, data: i})
                    };
                    t.addEventListener("message", function (r) {
                        var o = r.data;
                        switch (o.cmd) {
                            case"init":
                                var s = JSON.parse(o.config);
                                t.demuxer = new n.a(e, o.typeSupported, s, o.vendor);
                                try {
                                    Object(a.a)(!0 === s.debug)
                                } catch (t) {
                                    console.warn("demuxerWorker: unable to enable logs")
                                }
                                i("init", null);
                                break;
                            case"demux":
                                t.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
                        }
                    }), e.on(r.a.FRAG_DECRYPTED, i), e.on(r.a.FRAG_PARSING_INIT_SEGMENT, i), e.on(r.a.FRAG_PARSED, i), e.on(r.a.ERROR, i), e.on(r.a.FRAG_PARSING_METADATA, i), e.on(r.a.FRAG_PARSING_USERDATA, i), e.on(r.a.INIT_PTS_FOUND, i), e.on(r.a.FRAG_PARSING_DATA, function (e, i) {
                        var n = [], r = {event: e, data: i};
                        i.data1 && (r.data1 = i.data1.buffer, n.push(i.data1.buffer), delete i.data1), i.data2 && (r.data2 = i.data2.buffer, n.push(i.data2.buffer), delete i.data2), t.postMessage(r, n)
                    })
                };
                e.default = l
            }]).default
        })
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(9), f = n(h),
            p = i(4), g = n(p);
        i(188);
        var y = function (t) {
            function e(i) {
                (0, a.default)(this, e);
                var n = (0, s.default)(this, t.call(this, i));
                return n.el.src = i.src, n
            }

            return (0, d.default)(e, t), e.prototype.getPlaybackType = function () {
                return f.default.NO_OP
            }, (0, u.default)(e, [{
                key: "name", get: function () {
                    return "html_img"
                }
            }, {
                key: "tagName", get: function () {
                    return "img"
                }
            }, {
                key: "attributes", get: function () {
                    return {"data-html-img": ""}
                }
            }, {
                key: "events", get: function () {
                    return {load: "_onLoad", abort: "_onError", error: "_onError"}
                }
            }]), e.prototype.render = function () {
                return this.trigger(g.default.PLAYBACK_READY, this.name), this
            }, e.prototype._onLoad = function () {
                this.trigger(g.default.PLAYBACK_ENDED, this.name)
            }, e.prototype._onError = function (t) {
                var e = "error" === t.type ? "load error" : "loading aborted";
                this.trigger(g.default.PLAYBACK_ERROR, {message: e}, this.name)
            }, e
        }(f.default);
        e.default = y, y.canPlay = function (t) {
            return /\.(png|jpg|jpeg|gif|bmp|tiff|pgm|pnm|webp)(|\?.*)$/i.test(t)
        }, t.exports = e.default
    }, function (t, e, i) {
        var n = i(189);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, "[data-html-img]{max-width:100%;max-height:100%}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(5), f = i(9),
            p = n(f), g = i(8), y = n(g), m = i(4), v = n(m), b = i(191), _ = n(b);
        i(192);
        var E = function (t) {
            function e() {
                (0, a.default)(this, e);
                for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                var o = (0, s.default)(this, t.call.apply(t, [this].concat(n)));
                return o._noiseFrameNum = -1, o
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "name", get: function () {
                    return "no_op"
                }
            }, {
                key: "template", get: function () {
                    return (0, y.default)(_.default)
                }
            }, {
                key: "attributes", get: function () {
                    return {"data-no-op": ""}
                }
            }]), e.prototype.render = function () {
                var t = this.options.playbackNotSupportedMessage || this.i18n.t("playback_not_supported");
                this.$el.html(this.template({message: t})), this.trigger(v.default.PLAYBACK_READY, this.name);
                var e = !(!this.options.poster || !this.options.poster.showForNoOp);
                return !this.options.autoPlay && e || this._animate(), this
            }, e.prototype._noise = function () {
                if (this._noiseFrameNum = (this._noiseFrameNum + 1) % 5, !this._noiseFrameNum) {
                    var t = this.context.createImageData(this.context.canvas.width, this.context.canvas.height),
                        e = void 0;
                    try {
                        e = new Uint32Array(t.data.buffer)
                    } catch (r) {
                        e = new Uint32Array(this.context.canvas.width * this.context.canvas.height * 4);
                        for (var i = t.data, n = 0; n < i.length; n++) e[n] = i[n]
                    }
                    for (var r = e.length, a = 6 * Math.random() + 4, o = 0, s = 0, l = 0; l < r;) {
                        if (o < 0) {
                            o = a * Math.random();
                            s = 255 * Math.pow(Math.random(), .4) << 24
                        }
                        o -= 1, e[l++] = s
                    }
                    this.context.putImageData(t, 0, 0)
                }
            }, e.prototype._loop = function () {
                var t = this;
                this._stop || (this._noise(), this._animationHandle = (0, h.requestAnimationFrame)(function () {
                    return t._loop()
                }))
            }, e.prototype.destroy = function () {
                this._animationHandle && ((0, h.cancelAnimationFrame)(this._animationHandle), this._stop = !0)
            }, e.prototype._animate = function () {
                this.canvas = this.$el.find("canvas[data-no-op-canvas]")[0], this.context = this.canvas.getContext("2d"), this._loop()
            }, e
        }(p.default);
        e.default = E, E.canPlay = function (t) {
            return !0
        }, t.exports = e.default
    }, function (t, e) {
        t.exports = "<canvas data-no-op-canvas></canvas>\n<p data-no-op-msg><%=message%><p>\n"
    }, function (t, e, i) {
        var n = i(193);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, "[data-no-op]{position:absolute;height:100%;width:100%;text-align:center}[data-no-op] p[data-no-op-msg]{position:absolute;text-align:center;font-size:25px;left:0;right:0;color:#fff;padding:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);max-height:100%;overflow:auto}[data-no-op] canvas[data-no-op-canvas]{background-color:#777;height:100%;width:100%}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(35), f = n(h),
            p = i(4), g = n(p), y = i(8), m = n(y), v = i(195), b = n(v);
        i(196);
        var _ = function (t) {
            function e(i) {
                (0, a.default)(this, e);
                var n = (0, s.default)(this, t.call(this, i));
                return n.template = (0, m.default)(b.default), n.showTimeout = null, n.listenTo(n.container, g.default.CONTAINER_STATE_BUFFERING, n.onBuffering), n.listenTo(n.container, g.default.CONTAINER_STATE_BUFFERFULL, n.onBufferFull), n.listenTo(n.container, g.default.CONTAINER_STOP, n.onStop), n.listenTo(n.container, g.default.CONTAINER_ENDED, n.onStop), n.listenTo(n.container, g.default.CONTAINER_ERROR, n.onStop), n.render(), n
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "name", get: function () {
                    return "spinner"
                }
            }, {
                key: "attributes", get: function () {
                    return {"data-spinner": "", class: "spinner-three-bounce"}
                }
            }]), e.prototype.onBuffering = function () {
                this.show()
            }, e.prototype.onBufferFull = function () {
                this.hide()
            }, e.prototype.onStop = function () {
                this.hide()
            }, e.prototype.show = function () {
                var t = this;
                null === this.showTimeout && (this.showTimeout = setTimeout(function () {
                    return t.$el.show()
                }, 300))
            }, e.prototype.hide = function () {
                null !== this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = null), this.$el.hide()
            }, e.prototype.render = function () {
                return this.$el.html(this.template()), this.container.$el.append(this.$el), this.$el.hide(), this.container.buffering && this.onBuffering(), this
            }, e
        }(f.default);
        e.default = _, t.exports = e.default
    }, function (t, e) {
        t.exports = "<div data-bounce1></div><div data-bounce2></div><div data-bounce3></div>\n"
    }, function (t, e, i) {
        var n = i(197);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, ".spinner-three-bounce[data-spinner]{position:absolute;margin:0 auto;width:70px;text-align:center;z-index:999;left:0;right:0;margin-left:auto;margin-right:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.spinner-three-bounce[data-spinner]>div{width:18px;height:18px;background-color:#fff;border-radius:100%;display:inline-block;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner-three-bounce[data-spinner] [data-bounce1]{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner-three-bounce[data-spinner] [data-bounce2]{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}", ""])
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(199), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(36), f = n(h),
            p = i(4), g = n(p), y = i(6), m = n(y), v = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i));
                    return n.setInitialAttrs(), n.reportInterval = n.options.reportInterval || 5e3, n.state = "IDLE", n
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "name", get: function () {
                        return "stats"
                    }
                }]), e.prototype.bindEvents = function () {
                    this.listenTo(this.container.playback, g.default.PLAYBACK_PLAY, this.onPlay), this.listenTo(this.container, g.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, g.default.CONTAINER_ENDED, this.onStop), this.listenTo(this.container, g.default.CONTAINER_DESTROYED, this.onStop), this.listenTo(this.container, g.default.CONTAINER_STATE_BUFFERING, this.onBuffering), this.listenTo(this.container, g.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull), this.listenTo(this.container, g.default.CONTAINER_STATS_ADD, this.onStatsAdd), this.listenTo(this.container, g.default.CONTAINER_BITRATE, this.onStatsAdd), this.listenTo(this.container.playback, g.default.PLAYBACK_STATS_ADD, this.onStatsAdd)
                }, e.prototype.setInitialAttrs = function () {
                    this.firstPlay = !0, this.startupTime = 0, this.rebufferingTime = 0, this.watchingTime = 0, this.rebuffers = 0, this.externalMetrics = {}
                }, e.prototype.onPlay = function () {
                    this.state = "PLAYING", this.watchingTimeInit = Date.now(), this.intervalId || (this.intervalId = setInterval(this.report.bind(this), this.reportInterval))
                }, e.prototype.onStop = function () {
                    clearInterval(this.intervalId), this.report(), this.intervalId = void 0, this.state = "STOPPED"
                }, e.prototype.onBuffering = function () {
                    this.firstPlay ? this.startupTimeInit = Date.now() : this.rebufferingTimeInit = Date.now(), this.state = "BUFFERING", this.rebuffers++
                }, e.prototype.onBufferFull = function () {
                    this.firstPlay && this.startupTimeInit ? (this.firstPlay = !1, this.startupTime = Date.now() - this.startupTimeInit, this.watchingTimeInit = Date.now()) : this.rebufferingTimeInit && (this.rebufferingTime += this.getRebufferingTime()), this.rebufferingTimeInit = void 0, this.state = "PLAYING"
                }, e.prototype.getRebufferingTime = function () {
                    return Date.now() - this.rebufferingTimeInit
                }, e.prototype.getWatchingTime = function () {
                    return Date.now() - this.watchingTimeInit - this.rebufferingTime
                }, e.prototype.isRebuffering = function () {
                    return !!this.rebufferingTimeInit
                }, e.prototype.onStatsAdd = function (t) {
                    m.default.extend(this.externalMetrics, t)
                }, e.prototype.getStats = function () {
                    var t = {
                        startupTime: this.startupTime,
                        rebuffers: this.rebuffers,
                        rebufferingTime: this.isRebuffering() ? this.rebufferingTime + this.getRebufferingTime() : this.rebufferingTime,
                        watchingTime: this.isRebuffering() ? this.getWatchingTime() - this.getRebufferingTime() : this.getWatchingTime()
                    };
                    return m.default.extend(t, this.externalMetrics), t
                }, e.prototype.report = function () {
                    this.container.statsReport(this.getStats())
                }, e
            }(f.default);
        e.default = v, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(35), f = n(h),
            p = i(4), g = n(p), y = i(8), m = n(y), v = i(201), b = n(v);
        i(202);
        var _ = function (t) {
            function e(i) {
                (0, a.default)(this, e);
                var n = (0, s.default)(this, t.call(this, i));
                return n.configure(), n
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "name", get: function () {
                    return "watermark"
                }
            }, {
                key: "template", get: function () {
                    return (0, m.default)(b.default)
                }
            }]), e.prototype.bindEvents = function () {
                this.listenTo(this.container, g.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, g.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, g.default.CONTAINER_OPTIONS_CHANGE, this.configure)
            }, e.prototype.configure = function () {
                this.position = this.options.position || "bottom-right", this.options.watermark ? (this.imageUrl = this.options.watermark, this.imageLink = this.options.watermarkLink, this.render()) : this.$el.remove()
            }, e.prototype.onPlay = function () {
                this.hidden || this.$el.show()
            }, e.prototype.onStop = function () {
                this.$el.hide()
            }, e.prototype.render = function () {
                this.$el.hide();
                var t = {position: this.position, imageUrl: this.imageUrl, imageLink: this.imageLink};
                return this.$el.html(this.template(t)), this.container.$el.append(this.$el), this
            }, e
        }(f.default);
        e.default = _, t.exports = e.default
    }, function (t, e) {
        t.exports = "<div data-watermark data-watermark-<%=position %>>\n<% if(typeof imageLink !== 'undefined') { %>\n<a target=_blank href=\"<%= imageLink %>\">\n<% } %>\n<img src=\"<%= imageUrl %>\">\n<% if(typeof imageLink !== 'undefined') { %>\n</a>\n<% } %>\n</div>\n"
    }, function (t, e, i) {
        var n = i(203);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, "[data-watermark]{position:absolute;min-width:70px;max-width:200px;width:12%;text-align:center;z-index:10}[data-watermark] a{outline:none;cursor:pointer}[data-watermark] img{max-width:100%}[data-watermark-bottom-left]{bottom:10px;left:10px}[data-watermark-bottom-right]{bottom:10px;right:42px}[data-watermark-top-left]{top:10px;left:10px}[data-watermark-top-right]{top:10px;right:37px}", ""])
    }, function (t, e, i) {
        "use strict";
        (function (n) {
            function r(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var a = i(0), o = r(a), s = i(1), l = r(s), u = i(3), c = r(u), d = i(2), h = r(d), f = i(35), p = r(f),
                g = i(4), y = r(g), m = i(8), v = r(m), b = i(9), _ = r(b), E = i(205), T = r(E), A = i(58), S = r(A);
            i(206);
            var L = function (t) {
                function e(i) {
                    (0, o.default)(this, e);
                    var r = (0, l.default)(this, t.call(this, i));
                    return r.hasStartedPlaying = !1, r.playRequested = !1, r.render(), n.nextTick(function () {
                        return r.update()
                    }), r
                }

                return (0, h.default)(e, t), (0, c.default)(e, [{
                    key: "name", get: function () {
                        return "poster"
                    }
                }, {
                    key: "template", get: function () {
                        return (0, v.default)(T.default)
                    }
                }, {
                    key: "shouldRender", get: function () {
                        var t = !(!this.options.poster || !this.options.poster.showForNoOp);
                        return "html_img" !== this.container.playback.name && (this.container.playback.getPlaybackType() !== _.default.NO_OP || t)
                    }
                }, {
                    key: "attributes", get: function () {
                        return {class: "player-poster", "data-poster": ""}
                    }
                }, {
                    key: "events", get: function () {
                        return {click: "clicked"}
                    }
                }, {
                    key: "showOnVideoEnd", get: function () {
                        return !this.options.poster || this.options.poster.showOnVideoEnd || void 0 === this.options.poster.showOnVideoEnd
                    }
                }]), e.prototype.bindEvents = function () {
                    this.listenTo(this.container, y.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, y.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, y.default.CONTAINER_STATE_BUFFERING, this.update), this.listenTo(this.container, y.default.CONTAINER_STATE_BUFFERFULL, this.update), this.listenTo(this.container, y.default.CONTAINER_OPTIONS_CHANGE, this.render), this.showOnVideoEnd && this.listenTo(this.container, y.default.CONTAINER_ENDED, this.onStop)
                }, e.prototype.stopListening = function () {
                    t.prototype.stopListening.call(this)
                }, e.prototype.onPlay = function () {
                    this.hasStartedPlaying = !0, this.update()
                }, e.prototype.onStop = function () {
                    this.hasStartedPlaying = !1, this.playRequested = !1, this.update()
                }, e.prototype.showPlayButton = function (t) {
                    !t || this.options.chromeless && !this.options.allowUserInteraction ? (this.$playButton.hide(), this.$el.removeClass("clickable")) : (this.$playButton.show(), this.$el.addClass("clickable"))
                }, e.prototype.clicked = function () {
                    return this.options.chromeless && !this.options.allowUserInteraction || (this.playRequested = !0, this.update(), this.container.play()), !1
                }, e.prototype.shouldHideOnPlay = function () {
                    return !this.container.playback.isAudioOnly
                }, e.prototype.update = function () {
                    if (this.shouldRender) {
                        var t = !this.playRequested && !this.hasStartedPlaying && !this.container.buffering;
                        this.showPlayButton(t), this.hasStartedPlaying ? (this.container.enableMediaControl(), this.shouldHideOnPlay() && this.$el.hide()) : (this.container.disableMediaControl(), this.$el.show())
                    }
                }, e.prototype.render = function () {
                    if (this.shouldRender) {
                        this.$el.html(this.template());
                        if (this.options.poster && void 0 === this.options.poster.custom) {
                            var t = this.options.poster.url || this.options.poster;
                            this.$el.css({"background-image": "url(" + t + ")"})
                        } else this.options.poster && this.$el.css({background: this.options.poster.custom});
                        this.container.$el.append(this.el), this.$playWrapper = this.$el.find(".play-wrapper"), this.$playWrapper.append(S.default), this.$playButton = this.$playWrapper.find("svg"), this.$playButton.addClass("poster-icon"), this.$playButton.attr("data-poster", "");
                        var e = this.options.mediacontrol && this.options.mediacontrol.buttons;
                        return e && this.$el.find("svg path").css("fill", e), this.options.mediacontrol && this.options.mediacontrol.buttons && (e = this.options.mediacontrol.buttons, this.$playButton.css("color", e)), this.update(), this
                    }
                }, e
            }(p.default);
            e.default = L, t.exports = e.default
        }).call(e, i(57))
    }, function (t, e) {
        t.exports = '<div class="play-wrapper" data-poster></div>\n'
    }, function (t, e, i) {
        var n = i(207);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, ".player-poster[data-poster]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;height:100%;width:100%;z-index:998;top:0;left:0;background-color:#000;background-size:cover;background-repeat:no-repeat;background-position:50% 50%}.player-poster[data-poster].clickable{cursor:pointer}.player-poster[data-poster]:hover .play-wrapper[data-poster]{opacity:1}.player-poster[data-poster] .play-wrapper[data-poster]{width:100%;height:25%;margin:0 auto;opacity:.75;transition:opacity .1s ease}.player-poster[data-poster] .play-wrapper[data-poster] svg{height:100%}.player-poster[data-poster] .play-wrapper[data-poster] svg path{fill:#fff}", ""])
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(209), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(36), f = n(h),
            p = i(4), g = n(p), y = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i));
                    return n.container.options.gaAccount && (n.account = n.container.options.gaAccount, n.trackerName = n.container.options.gaTrackerName ? n.container.options.gaTrackerName + "." : "Clappr.", n.domainName = n.container.options.gaDomainName, n.currentHDState = void 0, n.embedScript()), n
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "name", get: function () {
                        return "google_analytics"
                    }
                }]), e.prototype.embedScript = function () {
                    var t = this;
                    if (window._gat) this.addEventListeners(); else {
                        var e = document.createElement("script");
                        e.setAttribute("type", "text/javascript"), e.setAttribute("async", "async"), e.setAttribute("src", "//www.google-analytics.com/ga.js"), e.onload = function () {
                            return t.addEventListeners()
                        }, document.body.appendChild(e)
                    }
                }, e.prototype.addEventListeners = function () {
                    var t = this;
                    this.container && (this.listenTo(this.container, g.default.CONTAINER_READY, this.onReady), this.listenTo(this.container, g.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, g.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, g.default.CONTAINER_PAUSE, this.onPause), this.listenTo(this.container, g.default.CONTAINER_ENDED, this.onEnded), this.listenTo(this.container, g.default.CONTAINER_STATE_BUFFERING, this.onBuffering), this.listenTo(this.container, g.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull), this.listenTo(this.container, g.default.CONTAINER_ERROR, this.onError), this.listenTo(this.container, g.default.CONTAINER_PLAYBACKSTATE, this.onPlaybackChanged), this.listenTo(this.container, g.default.CONTAINER_VOLUME, function (e) {
                        return t.onVolumeChanged(e)
                    }), this.listenTo(this.container, g.default.CONTAINER_SEEK, function (e) {
                        return t.onSeek(e)
                    }), this.listenTo(this.container, g.default.CONTAINER_FULL_SCREEN, this.onFullscreen), this.listenTo(this.container, g.default.CONTAINER_HIGHDEFINITIONUPDATE, this.onHD), this.listenTo(this.container, g.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.onDVR)), _gaq.push([this.trackerName + "_setAccount", this.account]), this.domainName && _gaq.push([this.trackerName + "_setDomainName", this.domainName])
                }, e.prototype.onReady = function () {
                    this.push(["Video", "Playback", this.container.playback.name])
                }, e.prototype.onPlay = function () {
                    this.push(["Video", "Play", this.container.playback.src])
                }, e.prototype.onStop = function () {
                    this.push(["Video", "Stop", this.container.playback.src])
                }, e.prototype.onEnded = function () {
                    this.push(["Video", "Ended", this.container.playback.src])
                }, e.prototype.onBuffering = function () {
                    this.push(["Video", "Buffering", this.container.playback.src])
                }, e.prototype.onBufferFull = function () {
                    this.push(["Video", "Bufferfull", this.container.playback.src])
                }, e.prototype.onError = function () {
                    this.push(["Video", "Error", this.container.playback.src])
                }, e.prototype.onHD = function (t) {
                    var e = t ? "ON" : "OFF";
                    e !== this.currentHDState && (this.currentHDState = e, this.push(["Video", "HD - " + e, this.container.playback.src]))
                }, e.prototype.onPlaybackChanged = function (t) {
                    null !== t.type && this.push(["Video", "Playback Type - " + t.type, this.container.playback.src])
                }, e.prototype.onDVR = function (t) {
                    var e = t ? "ON" : "OFF";
                    this.push(["Interaction", "DVR - " + e, this.container.playback.src])
                }, e.prototype.onPause = function () {
                    this.push(["Video", "Pause", this.container.playback.src])
                }, e.prototype.onSeek = function () {
                    this.push(["Video", "Seek", this.container.playback.src])
                }, e.prototype.onVolumeChanged = function () {
                    this.push(["Interaction", "Volume", this.container.playback.src])
                }, e.prototype.onFullscreen = function () {
                    this.push(["Interaction", "Fullscreen", this.container.playback.src])
                }, e.prototype.push = function (t) {
                    var e = [this.trackerName + "_trackEvent"].concat(t);
                    _gaq.push(e)
                }, e
            }(f.default);
        e.default = y, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(36), f = n(h),
            p = i(4), g = n(p), y = i(9), m = n(y), v = function (t) {
                function e(i) {
                    return (0, a.default)(this, e), (0, s.default)(this, t.call(this, i))
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "name", get: function () {
                        return "click_to_pause"
                    }
                }]), e.prototype.bindEvents = function () {
                    this.listenTo(this.container, g.default.CONTAINER_CLICK, this.click), this.listenTo(this.container, g.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate)
                }, e.prototype.click = function () {
                    (this.container.getPlaybackType() !== m.default.LIVE || this.container.isDvrEnabled()) && (this.container.isPlaying() ? this.container.pause() : this.container.play())
                }, e.prototype.settingsUpdate = function () {
                    var t = this.container.getPlaybackType() !== m.default.LIVE || this.container.isDvrEnabled();
                    if (t !== this.pointerEnabled) {
                        var e = t ? "addClass" : "removeClass";
                        this.container.$el[e]("pointer-enabled"), this.pointerEnabled = t
                    }
                }, e
            }(f.default);
        e.default = v, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(37), f = n(h),
            p = i(8), g = n(p), y = i(9), m = n(y), v = i(4), b = n(v), _ = i(212), E = n(_);
        i(213);
        var T = function (t) {
            function e(i) {
                (0, a.default)(this, e);
                var n = (0, s.default)(this, t.call(this, i));
                return n.settingsUpdate(), n
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "template", get: function () {
                    return (0, g.default)(E.default)
                }
            }, {
                key: "name", get: function () {
                    return "dvr_controls"
                }
            }, {
                key: "events", get: function () {
                    return {"click .live-button": "click"}
                }
            }, {
                key: "attributes", get: function () {
                    return {class: "dvr-controls", "data-dvr-controls": ""}
                }
            }]), e.prototype.bindEvents = function () {
                this.listenTo(this.core.mediaControl, b.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged), this.listenTo(this.core.mediaControl, b.default.MEDIACONTROL_RENDERED, this.settingsUpdate), this.listenTo(this.core, b.default.CORE_OPTIONS_CHANGE, this.render), this.core.getCurrentContainer() && (this.listenToOnce(this.core.getCurrentContainer(), b.default.CONTAINER_TIMEUPDATE, this.render), this.listenTo(this.core.getCurrentContainer(), b.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.dvrChanged))
            }, e.prototype.containerChanged = function () {
                this.stopListening(), this.bindEvents()
            }, e.prototype.dvrChanged = function (t) {
                this.core.getPlaybackType() === m.default.LIVE && (this.settingsUpdate(), this.core.mediaControl.$el.addClass("live"), t ? (this.core.mediaControl.$el.addClass("dvr"), this.core.mediaControl.$el.find(".media-control-indicator[data-position], .media-control-indicator[data-duration]").hide()) : this.core.mediaControl.$el.removeClass("dvr"))
            }, e.prototype.click = function () {
                var t = this.core.mediaControl, e = t.container;
                e.isPlaying() || e.play(), t.$el.hasClass("dvr") && e.seek(e.getDuration())
            }, e.prototype.settingsUpdate = function () {
                var t = this;
                this.stopListening(), this.core.mediaControl.$el.removeClass("live"), this.shouldRender() && (this.render(), this.$el.click(function () {
                    return t.click()
                })), this.bindEvents()
            }, e.prototype.shouldRender = function () {
                return (void 0 === this.core.options.useDvrControls || !!this.core.options.useDvrControls) && this.core.getPlaybackType() === m.default.LIVE
            }, e.prototype.render = function () {
                return this.$el.html(this.template({
                    live: this.core.i18n.t("live"),
                    backToLive: this.core.i18n.t("back_to_live")
                })), this.shouldRender() && (this.core.mediaControl.$el.addClass("live"), this.core.mediaControl.$(".media-control-left-panel[data-media-control]").append(this.$el)), this
            }, e
        }(f.default);
        e.default = T, t.exports = e.default
    }, function (t, e) {
        t.exports = '<div class="live-info"><%= live %></div>\n<button type="button" class="live-button" aria-label="<%= backToLive %>"><%= backToLive %></button>\n'
    }, function (t, e, i) {
        var n = i(214);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, '.dvr-controls[data-dvr-controls]{display:inline-block;float:left;color:#fff;line-height:32px;font-size:10px;font-weight:700;margin-left:6px}.dvr-controls[data-dvr-controls] .live-info{cursor:default;font-family:Roboto,Open Sans,Arial,sans-serif;text-transform:uppercase}.dvr-controls[data-dvr-controls] .live-info:before{content:"";display:inline-block;position:relative;width:7px;height:7px;border-radius:3.5px;margin-right:3.5px;background-color:#ff0101}.dvr-controls[data-dvr-controls] .live-info.disabled{opacity:.3}.dvr-controls[data-dvr-controls] .live-info.disabled:before{background-color:#fff}.dvr-controls[data-dvr-controls] .live-button{cursor:pointer;outline:none;display:none;border:0;color:#fff;background-color:transparent;height:32px;padding:0;opacity:.7;font-family:Roboto,Open Sans,Arial,sans-serif;text-transform:uppercase;transition:all .1s ease}.dvr-controls[data-dvr-controls] .live-button:before{content:"";display:inline-block;position:relative;width:7px;height:7px;border-radius:3.5px;margin-right:3.5px;background-color:#fff}.dvr-controls[data-dvr-controls] .live-button:hover{opacity:1;text-shadow:hsla(0,0%,100%,.75) 0 0 5px}.dvr .dvr-controls[data-dvr-controls] .live-info{display:none}.dvr .dvr-controls[data-dvr-controls] .live-button{display:block}.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar]{background-color:#005aff}.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar]{background-color:#ff0101}', ""])
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(216), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(37), f = n(h),
            p = i(8), g = n(p), y = i(4), m = n(y), v = i(217), b = n(v), _ = i(218), E = n(_);
        i(219);
        var T = function (t) {
            function e(i) {
                (0, a.default)(this, e);
                var n = (0, s.default)(this, t.call(this, i)), r = i.options.closedCaptionsConfig;
                return n._title = r && r.title ? r.title : null, n._ariaLabel = r && r.ariaLabel ? r.ariaLabel : "cc-button", n._labelCb = r && r.labelCallback && "function" == typeof r.labelCallback ? r.labelCallback : function (t) {
                    return t.name
                }, n
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "name", get: function () {
                    return "closed_captions"
                }
            }, {
                key: "template", get: function () {
                    return (0, g.default)(E.default)
                }
            }, {
                key: "events", get: function () {
                    return {"click [data-cc-button]": "toggleContextMenu", "click [data-cc-select]": "onTrackSelect"}
                }
            }, {
                key: "attributes", get: function () {
                    return {class: "cc-controls", "data-cc-controls": ""}
                }
            }]), e.prototype.bindEvents = function () {
                this.listenTo(this.core.mediaControl, m.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged), this.listenTo(this.core.mediaControl, m.default.MEDIACONTROL_RENDERED, this.render), this.listenTo(this.core.mediaControl, m.default.MEDIACONTROL_HIDE, this.hideContextMenu), this.container = this.core.getCurrentContainer(), this.container && (this.listenTo(this.container, m.default.CONTAINER_SUBTITLE_AVAILABLE, this.onSubtitleAvailable), this.listenTo(this.container, m.default.CONTAINER_SUBTITLE_CHANGED, this.onSubtitleChanged), this.listenTo(this.container, m.default.CONTAINER_STOP, this.onContainerStop))
            }, e.prototype.onContainerStop = function () {
                this.ccAvailable(!1)
            }, e.prototype.containerChanged = function () {
                this.ccAvailable(!1), this.stopListening(), this.bindEvents()
            }, e.prototype.onSubtitleAvailable = function () {
                this.renderCcButton(), this.ccAvailable(!0)
            }, e.prototype.onSubtitleChanged = function (t) {
                this.setCurrentContextMenuElement(t.id)
            }, e.prototype.onTrackSelect = function (t) {
                var e = parseInt(t.target.dataset.ccSelect, 10);
                return this.container.closedCaptionsTrackId = e, this.hideContextMenu(), t.stopPropagation(), !1
            }, e.prototype.ccAvailable = function (t) {
                var e = t ? "addClass" : "removeClass";
                this.$el[e]("available")
            }, e.prototype.toggleContextMenu = function () {
                this.$el.find("ul").toggle()
            }, e.prototype.hideContextMenu = function () {
                this.$el.find("ul").hide()
            }, e.prototype.contextMenuElement = function (t) {
                return this.$el.find("ul a" + (isNaN(t) ? "" : '[data-cc-select="' + t + '"]')).parent()
            }, e.prototype.setCurrentContextMenuElement = function (t) {
                if (this._trackId !== t) {
                    this.contextMenuElement().removeClass("current"), this.contextMenuElement(t).addClass("current");
                    var e = t > -1 ? "addClass" : "removeClass";
                    this.$ccButton[e]("enabled"), this._trackId = t
                }
            }, e.prototype.renderCcButton = function () {
                for (var t = this.container ? this.container.closedCaptionsTracks : [], e = 0; e < t.length; e++) t[e].label = this._labelCb(t[e]);
                this.$el.html(this.template({
                    ariaLabel: this._ariaLabel,
                    disabledLabel: this.core.i18n.t("disabled"),
                    title: this._title,
                    tracks: t
                })), this.$ccButton = this.$el.find("button.cc-button[data-cc-button]"), this.$ccButton.append(b.default), this.$el.append(this.style)
            }, e.prototype.render = function () {
                this.renderCcButton();
                var t = this.core.mediaControl.$el.find("button[data-fullscreen]");
                return t[0] ? this.$el.insertAfter(t) : this.core.mediaControl.$el.find(".media-control-right-panel[data-media-control]").prepend(this.$el), this
            }, e
        }(f.default);
        e.default = T, t.exports = e.default
    }, function (t, e) {
        t.exports = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 41.8" style="enable-background:new 0 0 49 41.8;" xml:space="preserve"><path d="M47.1,0H3.2C1.6,0,0,1.2,0,2.8v31.5C0,35.9,1.6,37,3.2,37h11.9l3.2,1.9l4.7,2.7c0.9,0.5,2-0.1,2-1.1V37h22.1 c1.6,0,1.9-1.1,1.9-2.7V2.8C49,1.2,48.7,0,47.1,0z M7.2,18.6c0-4.8,3.5-9.3,9.9-9.3c4.8,0,7.1,2.7,7.1,2.7l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2c0,0-2.7,2.9-7.6,2.9 C10.8,27.9,7.2,23.5,7.2,18.6z M36.9,27.9c-6.4,0-9.9-4.4-9.9-9.3c0-4.8,3.5-9.3,9.9-9.3C41.7,9.3,44,12,44,12l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2C44.5,25,41.9,27.9,36.9,27.9z"></path></svg>'
    }, function (t, e) {
        t.exports = '<button type="button" class="cc-button media-control-button media-control-icon" data-cc-button aria-label="<%= ariaLabel %>"></button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href="#" data-cc-select="-1"><%= disabledLabel %></a></li>\n  <% for (var i = 0; i < tracks.length; i++) { %>\n    <li><a href="#" data-cc-select="<%= tracks[i].id %>"><%= tracks[i].label %></a></li>\n  <% }; %>\n</ul>\n'
    }, function (t, e, i) {
        var n = i(220);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, ".cc-controls[data-cc-controls]{float:right;position:relative;display:none}.cc-controls[data-cc-controls].available{display:block}.cc-controls[data-cc-controls] .cc-button{padding:6px!important}.cc-controls[data-cc-controls] .cc-button.enabled{display:block;opacity:1}.cc-controls[data-cc-controls] .cc-button.enabled:hover{opacity:1;text-shadow:none}.cc-controls[data-cc-controls]>ul{list-style-type:none;position:absolute;bottom:25px;border:1px solid #000;display:none;background-color:#e6e6e6}.cc-controls[data-cc-controls] li{font-size:10px}.cc-controls[data-cc-controls] li[data-title]{background-color:#c3c2c2;padding:5px}.cc-controls[data-cc-controls] li a{color:#444;padding:2px 10px;display:block;text-decoration:none}.cc-controls[data-cc-controls] li a:hover{background-color:#555;color:#fff}.cc-controls[data-cc-controls] li a:hover a{color:#fff;text-decoration:none}.cc-controls[data-cc-controls] li.current a{color:red}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(30), f = n(h),
            p = i(4), g = n(p), y = i(6), m = n(y), v = i(58), b = n(v), _ = i(77), E = n(_),
            T = (0, m.default)('link[rel="shortcut icon"]'), A = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i));
                    return n._container = null, n.configure(), n
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "name", get: function () {
                        return "favicon"
                    }
                }, {
                    key: "oldIcon", get: function () {
                        return T
                    }
                }]), e.prototype.configure = function () {
                    this.core.options.changeFavicon ? this.enabled || (this.stopListening(this.core, g.default.CORE_OPTIONS_CHANGE), this.enable()) : this.enabled && (this.disable(), this.listenTo(this.core, g.default.CORE_OPTIONS_CHANGE, this.configure))
                }, e.prototype.bindEvents = function () {
                    this.listenTo(this.core, g.default.CORE_OPTIONS_CHANGE, this.configure), this.listenTo(this.core.mediaControl, g.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged), this.core.mediaControl.container && this.containerChanged()
                }, e.prototype.containerChanged = function () {
                    this._container && this.stopListening(this._container), this._container = this.core.mediaControl.container, this.listenTo(this._container, g.default.CONTAINER_PLAY, this.setPlayIcon), this.listenTo(this._container, g.default.CONTAINER_PAUSE, this.setPauseIcon), this.listenTo(this._container, g.default.CONTAINER_STOP, this.resetIcon), this.listenTo(this._container, g.default.CONTAINER_ENDED, this.resetIcon), this.listenTo(this._container, g.default.CONTAINER_ERROR, this.resetIcon), this.resetIcon()
                }, e.prototype.disable = function () {
                    t.prototype.disable.call(this), this.resetIcon()
                }, e.prototype.destroy = function () {
                    t.prototype.destroy.call(this), this.resetIcon()
                }, e.prototype.createIcon = function (t) {
                    var e = (0, m.default)("<canvas/>");
                    e[0].width = 16, e[0].height = 16;
                    var i = e[0].getContext("2d");
                    i.fillStyle = "#000";
                    var n = (0, m.default)(t).find("path").attr("d"), r = new Path2D(n);
                    i.fill(r);
                    var a = (0, m.default)('<link rel="shortcut icon" type="image/png"/>');
                    return a.attr("href", e[0].toDataURL("image/png")), a
                }, e.prototype.setPlayIcon = function () {
                    this.playIcon || (this.playIcon = this.createIcon(b.default)), this.changeIcon(this.playIcon)
                }, e.prototype.setPauseIcon = function () {
                    this.pauseIcon || (this.pauseIcon = this.createIcon(E.default)), this.changeIcon(this.pauseIcon)
                }, e.prototype.resetIcon = function () {
                    (0, m.default)('link[rel="shortcut icon"]').remove(), (0, m.default)("head").append(this.oldIcon)
                }, e.prototype.changeIcon = function (t) {
                    t && ((0, m.default)('link[rel="shortcut icon"]').remove(), (0, m.default)("head").append(t))
                }, e
            }(f.default);
        e.default = A, t.exports = e.default
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(223), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = r.default, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(5), f = i(37),
            p = n(f), g = i(8), y = n(g), m = i(4), v = n(m), b = i(9), _ = n(b), E = i(224), T = n(E);
        i(225);
        var A = function (t) {
            function e(i) {
                (0, a.default)(this, e);
                var n = (0, s.default)(this, t.call(this, i));
                return n.hoveringOverSeekBar = !1, n.hoverPosition = null, n.duration = null, n.actualLiveTime = !!n.mediaControl.options.actualLiveTime, n.actualLiveTime && (n.mediaControl.options.actualLiveServerTime ? n.actualLiveServerTimeDiff = (new Date).getTime() - new Date(n.mediaControl.options.actualLiveServerTime).getTime() : n.actualLiveServerTimeDiff = 0), n
            }

            return (0, d.default)(e, t), (0, u.default)(e, [{
                key: "name", get: function () {
                    return "seek_time"
                }
            }, {
                key: "template", get: function () {
                    return (0, y.default)(T.default)
                }
            }, {
                key: "attributes", get: function () {
                    return {class: "seek-time", "data-seek-time": ""}
                }
            }, {
                key: "mediaControl", get: function () {
                    return this.core.mediaControl
                }
            }, {
                key: "mediaControlContainer", get: function () {
                    return this.mediaControl.container
                }
            }, {
                key: "isLiveStreamWithDvr", get: function () {
                    return this.mediaControlContainer && this.mediaControlContainer.getPlaybackType() === _.default.LIVE && this.mediaControlContainer.isDvrEnabled()
                }
            }, {
                key: "durationShown", get: function () {
                    return this.isLiveStreamWithDvr && !this.useActualLiveTime
                }
            }, {
                key: "useActualLiveTime", get: function () {
                    return this.actualLiveTime && this.isLiveStreamWithDvr
                }
            }]), e.prototype.bindEvents = function () {
                this.listenTo(this.mediaControl, v.default.MEDIACONTROL_RENDERED, this.render), this.listenTo(this.mediaControl, v.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, this.showTime), this.listenTo(this.mediaControl, v.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, this.hideTime), this.listenTo(this.mediaControl, v.default.MEDIACONTROL_CONTAINERCHANGED, this.onContainerChanged), this.mediaControlContainer && (this.listenTo(this.mediaControlContainer, v.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.update), this.listenTo(this.mediaControlContainer, v.default.CONTAINER_TIMEUPDATE, this.updateDuration))
            }, e.prototype.onContainerChanged = function () {
                this.stopListening(), this.bindEvents()
            }, e.prototype.updateDuration = function (t) {
                this.duration = t.total, this.update()
            }, e.prototype.showTime = function (t) {
                this.hoveringOverSeekBar = !0, this.calculateHoverPosition(t), this.update()
            }, e.prototype.hideTime = function () {
                this.hoveringOverSeekBar = !1, this.update()
            }, e.prototype.calculateHoverPosition = function (t) {
                var e = t.pageX - this.mediaControl.$seekBarContainer.offset().left;
                this.hoverPosition = Math.min(1, Math.max(e / this.mediaControl.$seekBarContainer.width(), 0))
            }, e.prototype.getSeekTime = function () {
                var t = void 0, e = void 0;
                if (this.useActualLiveTime) {
                    var i = new Date((new Date).getTime() - this.actualLiveServerTimeDiff);
                    e = (new Date(i) - i.setHours(0, 0, 0, 0)) / 1e3, t = e - this.duration + this.hoverPosition * this.duration, t < 0 && (t += 86400)
                } else t = this.hoverPosition * this.duration;
                return {seekTime: t, secondsSinceMidnight: e}
            }, e.prototype.update = function () {
                if (this.rendered) if (this.shouldBeVisible()) {
                    var t = this.getSeekTime(), e = (0, h.formatTime)(t.seekTime, this.useActualLiveTime);
                    if (e !== this.displayedSeekTime && (this.$seekTimeEl.text(e), this.displayedSeekTime = e), this.durationShown) {
                        this.$durationEl.show();
                        var i = (0, h.formatTime)(this.actualLiveTime ? t.secondsSinceMidnight : this.duration, this.actualLiveTime);
                        i !== this.displayedDuration && (this.$durationEl.text(i), this.displayedDuration = i)
                    } else this.$durationEl.hide();
                    this.$el.show();
                    var n = this.mediaControl.$seekBarContainer.width(), r = this.$el.width(),
                        a = this.hoverPosition * n;
                    a -= r / 2, a = Math.max(0, Math.min(a, n - r)), this.$el.css("left", a)
                } else this.$el.hide(), this.$el.css("left", "-100%")
            }, e.prototype.shouldBeVisible = function () {
                return this.mediaControlContainer && this.mediaControlContainer.settings.seekEnabled && this.hoveringOverSeekBar && null !== this.hoverPosition && null !== this.duration
            }, e.prototype.render = function () {
                this.rendered = !0, this.displayedDuration = null, this.displayedSeekTime = null, this.$el.html(this.template()), this.$el.hide(), this.mediaControl.$el.append(this.el), this.$seekTimeEl = this.$el.find("[data-seek-time]"), this.$durationEl = this.$el.find("[data-duration]"), this.$durationEl.hide(), this.update()
            }, e
        }(p.default);
        e.default = A, t.exports = e.default
    }, function (t, e) {
        t.exports = "<span data-seek-time></span>\n<span data-duration></span>\n"
    }, function (t, e, i) {
        var n = i(226);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var r = {singleton: !0, hmr: !0};
        r.transform = void 0;
        i(10)(n, r);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(7)(void 0), e.push([t.i, '.seek-time[data-seek-time]{position:absolute;white-space:nowrap;height:20px;line-height:20px;font-size:0;left:-100%;bottom:55px;background-color:rgba(2,2,2,.5);z-index:9999;transition:opacity .1s ease}.seek-time[data-seek-time].hidden[data-seek-time]{opacity:0}.seek-time[data-seek-time] [data-seek-time]{display:inline-block;color:#fff;font-size:10px;padding-left:7px;padding-right:7px;vertical-align:top}.seek-time[data-seek-time] [data-duration]{display:inline-block;color:hsla(0,0%,100%,.5);font-size:10px;padding-right:7px;vertical-align:top}.seek-time[data-seek-time] [data-duration]:before{content:"|";margin-right:7px}', ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(3), s = n(o), l = i(1), u = n(l), c = i(2), d = n(c), h = i(30), f = n(h),
            p = i(4), g = n(p), y = function (t) {
                function e() {
                    return (0, a.default)(this, e), (0, u.default)(this, t.apply(this, arguments))
                }

                return (0, d.default)(e, t), e.prototype.bindEvents = function () {
                    this.listenTo(this.core, g.default.CORE_CONTAINERS_CREATED, this.onContainersCreated)
                }, e.prototype.onContainersCreated = function () {
                    var t = this.core.containers.filter(function (t) {
                        return "no_op" !== t.playback.name
                    })[0] || this.core.containers[0];
                    t && this.core.containers.forEach(function (e) {
                        e !== t && e.destroy()
                    })
                }, (0, s.default)(e, [{
                    key: "name", get: function () {
                        return "sources"
                    }
                }]), e
            }(f.default);
        e.default = y, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(3), s = n(o), l = i(1), u = n(l), c = i(2), d = n(c), h = i(4), f = n(h),
            p = i(30), g = n(p), y = i(5), m = function (t) {
                function e() {
                    return (0, a.default)(this, e), (0, u.default)(this, t.apply(this, arguments))
                }

                return (0, d.default)(e, t), e.prototype.bindEvents = function () {
                    this.listenTo(this.core.mediaControl, f.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
                    var t = this.core.getCurrentContainer();
                    t && (this.listenTo(t, f.default.CONTAINER_ENDED, this.ended), this.listenTo(t, f.default.CONTAINER_STOP, this.ended))
                }, e.prototype.containerChanged = function () {
                    this.stopListening(), this.bindEvents()
                }, e.prototype.ended = function () {
                    (void 0 === this.core.options.exitFullscreenOnEnd || this.core.options.exitFullscreenOnEnd) && y.Fullscreen.isFullscreen() && this.core.toggleFullscreen()
                }, (0, s.default)(e, [{
                    key: "name", get: function () {
                        return "end_video"
                    }
                }]), e
            }(g.default);
        e.default = m, t.exports = e.default
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = n(r), o = i(1), s = n(o), l = i(3), u = n(l), c = i(2), d = n(c), h = i(5), f = i(6),
            p = n(f), g = i(30), y = n(g), m = function (t) {
                function e(i) {
                    (0, a.default)(this, e);
                    var n = (0, s.default)(this, t.call(this, i));
                    return n._initializeMessages(), n
                }

                return (0, d.default)(e, t), (0, u.default)(e, [{
                    key: "name", get: function () {
                        return "strings"
                    }
                }]), e.prototype.t = function (t) {
                    var e = this._language();
                    return (e && this._messages[e] || this._messages.en)[t] || t
                }, e.prototype._language = function () {
                    return this.core.options.language || (0, h.getBrowserLanguage)()
                }, e.prototype._initializeMessages = function () {
                    var t = {
                        en: {
                            live: "live",
                            back_to_live: "back to live",
                            disabled: "Disabled",
                            playback_not_supported: "Your browser does not support the playback of this video. Please try using a different browser."
                        },
                        pt: {
                            live: "ao vivo",
                            back_to_live: "voltar para o ao vivo",
                            disabled: "Desativado",
                            playback_not_supported: "Seu navegador não supporta a reprodução deste video. Por favor, tente usar um navegador diferente."
                        },
                        es: {
                            live: "vivo",
                            back_to_live: "volver en vivo",
                            disabled: "Discapacitado",
                            playback_not_supported: "Su navegador no soporta la reproducción de un video. Por favor, trate de usar un navegador diferente."
                        },
                        ru: {
                            live: "прямой эфир",
                            back_to_live: "к прямому эфиру",
                            disabled: "Отключено",
                            playback_not_supported: "Ваш браузер не поддерживает воспроизведение этого видео. Пожалуйста, попробуйте другой браузер."
                        },
                        fr: {
                            live: "en direct",
                            disabled: "Désactivé",
                            back_to_live: "retour au direct",
                            playback_not_supported: "Votre navigateur ne supporte pas la lecture de cette vidéo. Merci de tenter sur un autre navigateur."
                        },
                        tr: {
                            live: "canlı",
                            back_to_live: "canlı yayına dön",
                            disabled: "Engelli",
                            playback_not_supported: "Tarayıcınız bu videoyu oynatma desteğine sahip değil. Lütfen farklı bir tarayıcı ile deneyin."
                        },
                        et: {
                            live: "Otseülekanne",
                            back_to_live: "Tagasi otseülekande juurde",
                            disabled: "Keelatud",
                            playback_not_supported: "Teie brauser ei toeta selle video taasesitust. Proovige kasutada muud brauserit."
                        }
                    };
                    this._messages = p.default.extend(!0, t, this.core.options.strings || {}), this._messages["pt-BR"] = this._messages.pt, this._messages["en-US"] = this._messages.en, this._messages["es-419"] = this._messages.es, this._messages["fr-FR"] = this._messages.fr, this._messages["tr-TR"] = this._messages.tr, this._messages["et-EE"] = this._messages.et
                }, e
            }(y.default);
        e.default = m, t.exports = e.default
    }])
});
//# sourceMappingURL=clappr.min.js.map