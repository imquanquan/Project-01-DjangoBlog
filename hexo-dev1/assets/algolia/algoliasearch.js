! function (e) {
    var t;
    "undefined" != typeof window ? t = window : "undefined" != typeof self && (t = self), t.ALGOLIA_MIGRATION_LAYER = function e(t, r, o) {
        function n(s, a) {
            if (!r[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var l = r[s] = {
                    exports: {}
                };
                t[s][0].call(l.exports, function (e) {
                    var r = t[s][1][e];
                    return n(r || e)
                }, l, l.exports, e, t, r, o)
            }
            return r[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < o.length; s++) n(o[s]);
        return n
    }({
        1: [
            function (e, t, r) {
                t.exports = function (e, t, r) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        s = document.createElement("script");
                    "function" == typeof t && (r = t, t = {}), t = t || {}, r = r || function () {}, s.type = t.type || "text/javascript", s.charset = t.charset || "utf8", s.async = !("async" in t && !t.async), s.src = e, t.attrs && function (e, t) {
                        for (var r in t) e.setAttribute(r, t[r])
                    }(s, t.attrs), t.text && (s.text = "" + t.text);
                    var a = "onload" in s ? o : n;
                    a(s, r), s.onload || o(s, r), i.appendChild(s)
                };

                function o(e, t) {
                    e.onload = function () {
                        this.onerror = this.onload = null, t(null, e)
                    }, e.onerror = function () {
                        this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                    }
                }

                function n(e, t) {
                    e.onreadystatechange = function () {
                        "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                    }
                }
            }, {}
        ],
        2: [
            function (e, t, r) {
                "use strict";
                t.exports = function (e) {
                    for (var t = new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/" + e.replace(".", "\\.") + "(?:\\.min)?\\.js$"), r = document.getElementsByTagName("script"), o = !1, n = 0, i = r.length; n < i; n++)
                        if (r[n].src && t.test(r[n].src)) {
                            o = !0;
                            break
                        }
                    return o
                }
            }, {}
        ],
        3: [
            function (e, t, r) {
                "use strict";
                t.exports = function (t) {
                    var r = e(1),
                        n = "//cdn.jsdelivr.net/algoliasearch/2/" + t + ".min.js",
                        i = "-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";
                    window.console && (window.console.warn ? window.console.warn(i) : window.console.log && window.console.log(i));
                    try {
                        document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true<\/script>"), !0 === window.ALGOLIA_SUPPORTS_DOCWRITE ? (document.write('<script src="' + n + '"><\/script>'), o("document.write")()) : r(n, o("DOMElement"))
                    } catch (e) {
                        r(n, o("DOMElement"))
                    }
                };

                function o(e) {
                    return function () {
                        var t = "AlgoliaSearch: loaded V2 script using " + e;
                        window.console && window.console.log && window.console.log(t)
                    }
                }
            }, {
                1: 1
            }
        ],
        4: [
            function (e, t, r) {
                "use strict";
                t.exports = function () {
                    var e = "-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";
                    window.AlgoliaSearch = function () {
                        throw new Error(e)
                    }, window.AlgoliaSearchHelper = function () {
                        throw new Error(e)
                    }, window.AlgoliaExplainResults = function () {
                        throw new Error(e)
                    }
                }
            }, {}
        ],
        5: [
            function (e, t, r) {
                "use strict";
                ! function (t) {
                    var r = e(2),
                        o = e(3),
                        n = e(4);
                    r(t) ? o(t) : n()
                }("algoliasearch")
            }, {
                2: 2,
                3: 3,
                4: 4
            }
        ]
    }, {}, [5])(5)
}(),
function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).algoliasearch = e()
    }
}(function () {
    return function e(t, r, o) {
        function n(s, a) {
            if (!r[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var l = r[s] = {
                    exports: {}
                };
                t[s][0].call(l.exports, function (e) {
                    var r = t[s][1][e];
                    return n(r || e)
                }, l, l.exports, e, t, r, o)
            }
            return r[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < o.length; s++) n(o[s]);
        return n
    }({
        1: [
            function (e, t, r) {
                (function (o) {
                    (r = t.exports = e(2)).log = function () {
                        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                    }, r.formatArgs = function (e) {
                        var t = this.useColors;
                        if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + r.humanize(this.diff), !t) return;
                        var o = "color: " + this.color;
                        e.splice(1, 0, o, "color: inherit");
                        var n = 0,
                            i = 0;
                        e[0].replace(/%[a-zA-Z%]/g, function (e) {
                            "%%" !== e && "%c" === e && (i = ++n)
                        }), e.splice(i, 0, o)
                    }, r.save = function (e) {
                        try {
                            null == e ? r.storage.removeItem("debug") : r.storage.debug = e
                        } catch (e) {}
                    }, r.load = n, r.useColors = function () {
                        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                    }, r.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
                        try {
                            return window.localStorage
                        } catch (e) {}
                    }(), r.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
                    r.formatters.j = function (e) {
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return "[UnexpectedJSONParseError]: " + e.message
                        }
                    };

                    function n() {
                        var e;
                        try {
                            e = r.storage.debug
                        } catch (e) {}
                        return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e
                    }
                    r.enable(n())
                }).call(this, e(12))
            }, {
                12: 12,
                2: 2
            }
        ],
        2: [
            function (e, t, r) {
                (r = t.exports = n.debug = n.default = n).coerce = function (e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, r.disable = function () {
                    r.enable("")
                }, r.enable = function (e) {
                    r.save(e), r.names = [], r.skips = [];
                    for (var t = ("string" == typeof e ? e : "").split(/[\s,]+/), o = t.length, n = 0; n < o; n++) t[n] && ("-" === (e = t[n].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
                }, r.enabled = function (e) {
                    var t, o;
                    for (t = 0, o = r.skips.length; t < o; t++)
                        if (r.skips[t].test(e)) return !1;
                    for (t = 0, o = r.names.length; t < o; t++)
                        if (r.names[t].test(e)) return !0;
                    return !1
                }, r.humanize = e(9), r.names = [], r.skips = [], r.formatters = {};
                var o;

                function n(e) {
                    function t() {
                        if (t.enabled) {
                            var e = t,
                                n = +new Date,
                                i = n - (o || n);
                            e.diff = i, e.prev = o, e.curr = n, o = n;
                            for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                            s[0] = r.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                            var c = 0;
                            s[0] = s[0].replace(/%([a-zA-Z%])/g, function (t, o) {
                                if ("%%" === t) return t;
                                c++;
                                var n = r.formatters[o];
                                if ("function" == typeof n) {
                                    var i = s[c];
                                    t = n.call(e, i), s.splice(c, 1), c--
                                }
                                return t
                            }), r.formatArgs.call(e, s);
                            (t.log || r.log || console.log.bind(console)).apply(e, s)
                        }
                    }
                    return t.namespace = e, t.enabled = r.enabled(e), t.useColors = r.useColors(), t.color = function (e) {
                        var t, o = 0;
                        for (t in e) o = (o << 5) - o + e.charCodeAt(t), o |= 0;
                        return r.colors[Math.abs(o) % r.colors.length]
                    }(e), "function" == typeof r.init && r.init(t), t
                }
            }, {
                9: 9
            }
        ],
        3: [
            function (e, t, r) {
                (function (o, n) {
                    i = this, s = function () {
                        "use strict";

                        function t(e) {
                            return "function" == typeof e
                        }
                        var r = Array.isArray ? Array.isArray : function (e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            },
                            i = 0,
                            s = void 0,
                            a = void 0,
                            c = function (e, t) {
                                y[i] = e, y[i + 1] = t, 2 === (i += 2) && (a ? a(m) : v())
                            };
                        var u = "undefined" != typeof window ? window : void 0,
                            l = u || {},
                            p = l.MutationObserver || l.WebKitMutationObserver,
                            d = "undefined" == typeof self && void 0 !== o && "[object process]" === {}.toString.call(o),
                            h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                        function f() {
                            var e = setTimeout;
                            return function () {
                                return e(m, 1)
                            }
                        }
                        var y = new Array(1e3);

                        function m() {
                            for (var e = 0; e < i; e += 2) {
                                (0, y[e])(y[e + 1]), y[e] = void 0, y[e + 1] = void 0
                            }
                            i = 0
                        }
                        var v = void 0;
                        v = d ? function () {
                            return o.nextTick(m)
                        } : p ? function () {
                            var e = 0,
                                t = new p(m),
                                r = document.createTextNode("");
                            return t.observe(r, {
                                    characterData: !0
                                }),
                                function () {
                                    r.data = e = ++e % 2
                                }
                        }() : h ? function () {
                            var e = new MessageChannel;
                            return e.port1.onmessage = m,
                                function () {
                                    return e.port2.postMessage(0)
                                }
                        }() : void 0 === u && "function" == typeof e ? function () {
                            try {
                                var t = e("vertx");
                                return void 0 !== (s = t.runOnLoop || t.runOnContext) ? function () {
                                    s(m)
                                } : f()
                            } catch (e) {
                                return f()
                            }
                        }() : f();

                        function g(e, t) {
                            var r = arguments,
                                o = this,
                                n = new this.constructor(_);
                            void 0 === n[w] && L(n);
                            var i = o._state;
                            return i ? function () {
                                var e = r[i - 1];
                                c(function () {
                                    return N(i, n, e, o._result)
                                })
                            }() : E(o, n, e, t), n
                        }

                        function b(e) {
                            if (e && "object" == typeof e && e.constructor === this) return e;
                            var t = new this(_);
                            return I(t, e), t
                        }
                        var w = Math.random().toString(36).substring(16);

                        function _() {}
                        var x = void 0,
                            T = 1,
                            R = 2,
                            j = new q;

                        function A(e) {
                            try {
                                return e.then
                            } catch (e) {
                                return j.error = e, j
                            }
                        }

                        function S(e, r, o) {
                            r.constructor === e.constructor && o === g && r.constructor.resolve === b ? (s = e, (a = r)._state === T ? O(s, a._result) : a._state === R ? U(s, a._result) : E(a, void 0, function (e) {
                                return I(s, e)
                            }, function (e) {
                                return U(s, e)
                            })) : o === j ? (U(e, j.error), j.error = null) : void 0 === o ? O(e, r) : t(o) ? (n = r, i = o, c(function (e) {
                                var t = !1,
                                    r = function (e, t, r, o) {
                                        try {
                                            e.call(t, r, o)
                                        } catch (e) {
                                            return e
                                        }
                                    }(i, n, function (r) {
                                        t || (t = !0, n !== r ? I(e, r) : O(e, r))
                                    }, function (r) {
                                        t || (t = !0, U(e, r))
                                    }, e._label);
                                !t && r && (t = !0, U(e, r))
                            }, e)) : O(e, r);
                            var n, i, s, a
                        }

                        function I(e, t) {
                            e === t ? U(e, new TypeError("You cannot resolve a promise with itself")) : ! function (e) {
                                var t = typeof e;
                                return null !== e && ("object" === t || "function" === t)
                            }(t) ? O(e, t) : S(e, t, A(t))
                        }

                        function k(e) {
                            e._onerror && e._onerror(e._result), P(e)
                        }

                        function O(e, t) {
                            e._state === x && (e._result = t, e._state = T, 0 !== e._subscribers.length && c(P, e))
                        }

                        function U(e, t) {
                            e._state === x && (e._state = R, e._result = t, c(k, e))
                        }

                        function E(e, t, r, o) {
                            var n = e._subscribers,
                                i = n.length;
                            e._onerror = null, n[i] = t, n[i + T] = r, n[i + R] = o, 0 === i && e._state && c(P, e)
                        }

                        function P(e) {
                            var t = e._subscribers,
                                r = e._state;
                            if (0 !== t.length) {
                                for (var o = void 0, n = void 0, i = e._result, s = 0; s < t.length; s += 3) o = t[s], n = t[s + r], o ? N(r, o, n, i) : n(i);
                                e._subscribers.length = 0
                            }
                        }

                        function q() {
                            this.error = null
                        }
                        var C = new q;

                        function N(e, r, o, n) {
                            var i = t(o),
                                s = void 0,
                                a = void 0,
                                c = void 0,
                                u = void 0;
                            if (i) {
                                if ((s = function (e, t) {
                                    try {
                                        return e(t)
                                    } catch (e) {
                                        return C.error = e, C
                                    }
                                }(o, n)) === C ? (u = !0, a = s.error, s.error = null) : c = !0, r === s) return void U(r, new TypeError("A promises callback cannot return that same promise."))
                            } else s = n, c = !0;
                            r._state !== x || (i && c ? I(r, s) : u ? U(r, a) : e === T ? O(r, s) : e === R && U(r, s))
                        }
                        var D = 0;

                        function L(e) {
                            e[w] = D++, e._state = void 0, e._result = void 0, e._subscribers = []
                        }

                        function K(e, t) {
                            this._instanceConstructor = e, this.promise = new e(_), this.promise[w] || L(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && O(this.promise, this._result))) : U(this.promise, new Error("Array Methods must be provided an Array"))
                        }
                        K.prototype._enumerate = function (e) {
                            for (var t = 0; this._state === x && t < e.length; t++) this._eachEntry(e[t], t)
                        }, K.prototype._eachEntry = function (e, t) {
                            var r = this._instanceConstructor,
                                o = r.resolve;
                            if (o === b) {
                                var n = A(e);
                                if (n === g && e._state !== x) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof n) this._remaining--, this._result[t] = e;
                                else if (r === H) {
                                    var i = new r(_);
                                    S(i, e, n), this._willSettleAt(i, t)
                                } else this._willSettleAt(new r(function (t) {
                                    return t(e)
                                }), t)
                            } else this._willSettleAt(o(e), t)
                        }, K.prototype._settledAt = function (e, t, r) {
                            var o = this.promise;
                            o._state === x && (this._remaining--, e === R ? U(o, r) : this._result[t] = r), 0 === this._remaining && O(o, this._result)
                        }, K.prototype._willSettleAt = function (e, t) {
                            var r = this;
                            E(e, void 0, function (e) {
                                return r._settledAt(T, t, e)
                            }, function (e) {
                                return r._settledAt(R, t, e)
                            })
                        };

                        function H(e) {
                            this[w] = D++, this._result = this._state = void 0, this._subscribers = [], _ !== e && ("function" != typeof e && function () {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof H ? function (e, t) {
                                try {
                                    t(function (t) {
                                        I(e, t)
                                    }, function (t) {
                                        U(e, t)
                                    })
                                } catch (t) {
                                    U(e, t)
                                }
                            }(this, e) : function () {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }())
                        }
                        H.all = function (e) {
                            return new K(this, e).promise
                        }, H.race = function (e) {
                            var t = this;
                            return r(e) ? new t(function (r, o) {
                                for (var n = e.length, i = 0; i < n; i++) t.resolve(e[i]).then(r, o)
                            }) : new t(function (e, t) {
                                return t(new TypeError("You must pass an array to race."))
                            })
                        }, H.resolve = b, H.reject = function (e) {
                            var t = new this(_);
                            return U(t, e), t
                        }, H._setScheduler = function (e) {
                            a = e
                        }, H._setAsap = function (e) {
                            c = e
                        }, H._asap = c, H.prototype = {
                            constructor: H,
                            then: g,
                            catch: function (e) {
                                return this.then(null, e)
                            }
                        };
                        return H.polyfill = function () {
                            var e = void 0;
                            if (void 0 !== n) e = n;
                            else if ("undefined" != typeof self) e = self;
                            else try {
                                e = Function("return this")()
                            } catch (e) {
                                throw new Error("polyfill failed because global object is unavailable in this environment")
                            }
                            var t = e.Promise;
                            if (t) {
                                var r = null;
                                try {
                                    r = Object.prototype.toString.call(t.resolve())
                                } catch (e) {}
                                if ("[object Promise]" === r && !t.cast) return
                            }
                            e.Promise = H
                        }, H.Promise = H, H
                    }, "object" == typeof r && void 0 !== t ? t.exports = s() : i.ES6Promise = s();
                    var i, s
                }).call(this, e(12), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                12: 12
            }
        ],
        4: [
            function (e, t, r) {
                function o() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }
                t.exports = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._maxListeners = void 0, o.defaultMaxListeners = 10, o.prototype.setMaxListeners = function (e) {
                    if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                    return this._maxListeners = e, this
                }, o.prototype.emit = function (e) {
                    var t, r, o, a, c, u;
                    if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                        if ((t = arguments[1]) instanceof Error) throw t;
                        var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw l.context = t, l
                    }
                    if (s(r = this._events[e])) return !1;
                    if (n(r)) switch (arguments.length) {
                    case 1:
                        r.call(this);
                        break;
                    case 2:
                        r.call(this, arguments[1]);
                        break;
                    case 3:
                        r.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        a = Array.prototype.slice.call(arguments, 1), r.apply(this, a)
                    } else if (i(r))
                        for (a = Array.prototype.slice.call(arguments, 1), o = (u = r.slice()).length, c = 0; c < o; c++) u[c].apply(this, a);
                    return !0
                }, o.prototype.addListener = function (e, t) {
                    var r;
                    if (!n(t)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (r = s(this._maxListeners) ? o.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
                }, o.prototype.on = o.prototype.addListener, o.prototype.once = function (e, t) {
                    if (!n(t)) throw TypeError("listener must be a function");
                    var r = !1;

                    function o() {
                        this.removeListener(e, o), r || (r = !0, t.apply(this, arguments))
                    }
                    return o.listener = t, this.on(e, o), this
                }, o.prototype.removeListener = function (e, t) {
                    var r, o, s, a;
                    if (!n(t)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e]) return this;
                    if (s = (r = this._events[e]).length, o = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                    else if (i(r)) {
                        for (a = s; a-- > 0;)
                            if (r[a] === t || r[a].listener && r[a].listener === t) {
                                o = a;
                                break
                            }
                        if (o < 0) return this;
                        1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
                    }
                    return this
                }, o.prototype.removeAllListeners = function (e) {
                    var t, r;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                    if (0 === arguments.length) {
                        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (n(r = this._events[e])) this.removeListener(e, r);
                    else if (r)
                        for (; r.length;) this.removeListener(e, r[r.length - 1]);
                    return delete this._events[e], this
                }, o.prototype.listeners = function (e) {
                    return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                }, o.prototype.listenerCount = function (e) {
                    if (this._events) {
                        var t = this._events[e];
                        if (n(t)) return 1;
                        if (t) return t.length
                    }
                    return 0
                }, o.listenerCount = function (e, t) {
                    return e.listenerCount(t)
                };

                function n(e) {
                    return "function" == typeof e
                }

                function i(e) {
                    return "object" == typeof e && null !== e
                }

                function s(e) {
                    return void 0 === e
                }
            }, {}
        ],
        5: [
            function (e, t, r) {
                var o = Object.prototype.hasOwnProperty,
                    n = Object.prototype.toString;
                t.exports = function (e, t, r) {
                    if ("[object Function]" !== n.call(t)) throw new TypeError("iterator must be a function");
                    var i = e.length;
                    if (i === +i)
                        for (var s = 0; s < i; s++) t.call(r, e[s], s, e);
                    else
                        for (var a in e) o.call(e, a) && t.call(r, e[a], a, e)
                }
            }, {}
        ],
        6: [
            function (e, t, r) {
                (function (e) {
                    var r;
                    r = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = r
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}
        ],
        7: [
            function (e, t, r) {
                "function" == typeof Object.create ? t.exports = function (e, t) {
                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                } : t.exports = function (e, t) {
                    e.super_ = t;
                    var r = function () {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }, {}
        ],
        8: [
            function (e, t, r) {
                var o = {}.toString;
                t.exports = Array.isArray || function (e) {
                    return "[object Array]" == o.call(e)
                }
            }, {}
        ],
        9: [
            function (e, t, r) {
                var o = 1e3,
                    n = 60 * o,
                    i = 60 * n,
                    s = 24 * i,
                    a = 365.25 * s;
                t.exports = function (e, t) {
                    t = t || {};
                    var r = typeof e;
                    if ("string" === r && e.length > 0) return function (e) {
                        if ((e = String(e)).length > 100) return;
                        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                        if (!t) return;
                        var r = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return r * a;
                        case "days":
                        case "day":
                        case "d":
                            return r * s;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return r * i;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return r * n;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return r * o;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return r;
                        default:
                            return
                        }
                    }(e);
                    if ("number" === r && !1 === isNaN(e)) return t.long ? c(u = e, s, "day") || c(u, i, "hour") || c(u, n, "minute") || c(u, o, "second") || u + " ms" : function (e) {
                        if (e >= s) return Math.round(e / s) + "d";
                        if (e >= i) return Math.round(e / i) + "h";
                        if (e >= n) return Math.round(e / n) + "m";
                        if (e >= o) return Math.round(e / o) + "s";
                        return e + "ms"
                    }(e);
                    var u;
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                };

                function c(e, t, r) {
                    if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
                }
            }, {}
        ],
        10: [
            function (e, t, r) {
                "use strict";
                var o = Object.prototype.hasOwnProperty,
                    n = Object.prototype.toString,
                    i = Array.prototype.slice,
                    s = e(11),
                    a = Object.prototype.propertyIsEnumerable,
                    c = !a.call({
                        toString: null
                    }, "toString"),
                    u = a.call(function () {}, "prototype"),
                    l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    p = function (e) {
                        var t = e.constructor;
                        return t && t.prototype === e
                    },
                    d = {
                        $console: !0,
                        $external: !0,
                        $frame: !0,
                        $frameElement: !0,
                        $frames: !0,
                        $innerHeight: !0,
                        $innerWidth: !0,
                        $outerHeight: !0,
                        $outerWidth: !0,
                        $pageXOffset: !0,
                        $pageYOffset: !0,
                        $parent: !0,
                        $scrollLeft: !0,
                        $scrollTop: !0,
                        $scrollX: !0,
                        $scrollY: !0,
                        $self: !0,
                        $webkitIndexedDB: !0,
                        $webkitStorageInfo: !0,
                        $window: !0
                    },
                    h = function () {
                        if ("undefined" == typeof window) return !1;
                        for (var e in window) try {
                            if (!d["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                                p(window[e])
                            } catch (e) {
                                return !0
                            }
                        } catch (e) {
                            return !0
                        }
                        return !1
                    }(),
                    f = function (e) {
                        var t = null !== e && "object" == typeof e,
                            r = "[object Function]" === n.call(e),
                            i = s(e),
                            a = t && "[object String]" === n.call(e),
                            d = [];
                        if (!t && !r && !i) throw new TypeError("Object.keys called on a non-object");
                        var f = u && r;
                        if (a && e.length > 0 && !o.call(e, 0))
                            for (var y = 0; y < e.length; ++y) d.push(String(y));
                        if (i && e.length > 0)
                            for (var m = 0; m < e.length; ++m) d.push(String(m));
                        else
                            for (var v in e) f && "prototype" === v || !o.call(e, v) || d.push(String(v)); if (c)
                            for (var g = function (e) {
                                if ("undefined" == typeof window || !h) return p(e);
                                try {
                                    return p(e)
                                } catch (e) {
                                    return !1
                                }
                            }(e), b = 0; b < l.length; ++b) g && "constructor" === l[b] || !o.call(e, l[b]) || d.push(l[b]);
                        return d
                    };
                f.shim = function () {
                    if (Object.keys) {
                        if (! function () {
                            return 2 === (Object.keys(arguments) || "").length
                        }(1, 2)) {
                            var e = Object.keys;
                            Object.keys = function (t) {
                                return s(t) ? e(i.call(t)) : e(t)
                            }
                        }
                    } else Object.keys = f;
                    return Object.keys || f
                }, t.exports = f
            }, {
                11: 11
            }
        ],
        11: [
            function (e, t, r) {
                "use strict";
                var o = Object.prototype.toString;
                t.exports = function (e) {
                    var t = o.call(e),
                        r = "[object Arguments]" === t;
                    return r || (r = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === o.call(e.callee)), r
                }
            }, {}
        ],
        12: [
            function (e, t, r) {
                var o, n, i = t.exports = {};

                function s() {
                    throw new Error("setTimeout has not been defined")
                }

                function a() {
                    throw new Error("clearTimeout has not been defined")
                }! function () {
                    try {
                        o = "function" == typeof setTimeout ? setTimeout : s
                    } catch (e) {
                        o = s
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (e) {
                        n = a
                    }
                }();

                function c(e) {
                    if (o === setTimeout) return setTimeout(e, 0);
                    if ((o === s || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
                    try {
                        return o(e, 0)
                    } catch (t) {
                        try {
                            return o.call(null, e, 0)
                        } catch (t) {
                            return o.call(this, e, 0)
                        }
                    }
                }
                var u, l = [],
                    p = !1,
                    d = -1;

                function h() {
                    p && u && (p = !1, u.length ? l = u.concat(l) : d = -1, l.length && f())
                }

                function f() {
                    if (!p) {
                        var e = c(h);
                        p = !0;
                        for (var t = l.length; t;) {
                            for (u = l, l = []; ++d < t;) u && u[d].run();
                            d = -1, t = l.length
                        }
                        u = null, p = !1,
                            function (e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }
                i.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    l.push(new y(e, t)), 1 !== l.length || p || c(f)
                };

                function y(e, t) {
                    this.fun = e, this.array = t
                }
                y.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {};

                function m() {}
                i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.binding = function (e) {
                    throw new Error("process.binding is not supported")
                }, i.cwd = function () {
                    return "/"
                }, i.chdir = function (e) {
                    throw new Error("process.chdir is not supported")
                }, i.umask = function () {
                    return 0
                }
            }, {}
        ],
        13: [
            function (e, t, r) {
                "use strict";
                var o = function (e) {
                    switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                    }
                };
                t.exports = function (e, t, r, a) {
                    return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? i(s(e), function (s) {
                        var a = encodeURIComponent(o(s)) + r;
                        return n(e[s]) ? i(e[s], function (e) {
                            return a + encodeURIComponent(o(e))
                        }).join(t) : a + encodeURIComponent(o(e[s]))
                    }).join(t) : a ? encodeURIComponent(o(a)) + r + encodeURIComponent(o(e)) : ""
                };
                var n = Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };

                function i(e, t) {
                    if (e.map) return e.map(t);
                    for (var r = [], o = 0; o < e.length; o++) r.push(t(e[o], o));
                    return r
                }
                var s = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t
                }
            }, {}
        ],
        14: [
            function (e, t, r) {
                t.exports = u;
                var o = e(16),
                    n = e(26),
                    i = e(27),
                    s = e(15),
                    a = e(7),
                    c = e(28);

                function u() {
                    s.apply(this, arguments)
                }
                a(u, s), u.prototype.deleteIndex = function (e, t) {
                    return this._jsonRequest({
                        method: "DELETE",
                        url: "/1/indexes/" + encodeURIComponent(e),
                        hostType: "write",
                        callback: t
                    })
                }, u.prototype.moveIndex = function (e, t, r) {
                    var o = {
                        operation: "move",
                        destination: t
                    };
                    return this._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
                        body: o,
                        hostType: "write",
                        callback: r
                    })
                }, u.prototype.copyIndex = function (e, t, r, o) {
                    var n = {
                            operation: "copy",
                            destination: t
                        },
                        i = o;
                    if ("function" == typeof r) i = r;
                    else if (Array.isArray(r) && r.length > 0) n.scope = r;
                    else if (void 0 !== r) throw new Error("the scope given to `copyIndex` was not an array with settings, synonyms or rules");
                    return this._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
                        body: n,
                        hostType: "write",
                        callback: i
                    })
                }, u.prototype.getLogs = function (t, r, o) {
                    var n = e(25),
                        i = {};
                    return "object" == typeof t ? (i = n(t), o = r) : 0 === arguments.length || "function" == typeof t ? o = t : 1 === arguments.length || "function" == typeof r ? (o = r, i.offset = t) : (i.offset = t, i.length = r), void 0 === i.offset && (i.offset = 0), void 0 === i.length && (i.length = 10), this._jsonRequest({
                        method: "GET",
                        url: "/1/logs?" + this._getSearchParams(i, ""),
                        hostType: "read",
                        callback: o
                    })
                }, u.prototype.listIndexes = function (e, t) {
                    var r = "";
                    return void 0 === e || "function" == typeof e ? t = e : r = "?page=" + e, this._jsonRequest({
                        method: "GET",
                        url: "/1/indexes" + r,
                        hostType: "read",
                        callback: t
                    })
                }, u.prototype.initIndex = function (e) {
                    return new o(this, e)
                }, u.prototype.listUserKeys = n(function (e) {
                    return this.listApiKeys(e)
                }, i("client.listUserKeys()", "client.listApiKeys()")), u.prototype.listApiKeys = function (e) {
                    return this._jsonRequest({
                        method: "GET",
                        url: "/1/keys",
                        hostType: "read",
                        callback: e
                    })
                }, u.prototype.getUserKeyACL = n(function (e, t) {
                    return this.getApiKey(e, t)
                }, i("client.getUserKeyACL()", "client.getApiKey()")), u.prototype.getApiKey = function (e, t) {
                    return this._jsonRequest({
                        method: "GET",
                        url: "/1/keys/" + e,
                        hostType: "read",
                        callback: t
                    })
                }, u.prototype.deleteUserKey = n(function (e, t) {
                    return this.deleteApiKey(e, t)
                }, i("client.deleteUserKey()", "client.deleteApiKey()")), u.prototype.deleteApiKey = function (e, t) {
                    return this._jsonRequest({
                        method: "DELETE",
                        url: "/1/keys/" + e,
                        hostType: "write",
                        callback: t
                    })
                }, u.prototype.addUserKey = n(function (e, t, r) {
                    return this.addApiKey(e, t, r)
                }, i("client.addUserKey()", "client.addApiKey()")), u.prototype.addApiKey = function (t, r, o) {
                    if (!e(8)(t)) throw new Error("Usage: client.addApiKey(arrayOfAcls[, params, callback])");
                    1 !== arguments.length && "function" != typeof r || (o = r, r = null);
                    var n = {
                        acl: t
                    };
                    return r && (n.validity = r.validity, n.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour, n.maxHitsPerQuery = r.maxHitsPerQuery, n.indexes = r.indexes, n.description = r.description, r.queryParameters && (n.queryParameters = this._getSearchParams(r.queryParameters, "")), n.referers = r.referers), this._jsonRequest({
                        method: "POST",
                        url: "/1/keys",
                        body: n,
                        hostType: "write",
                        callback: o
                    })
                }, u.prototype.addUserKeyWithValidity = n(function (e, t, r) {
                    return this.addApiKey(e, t, r)
                }, i("client.addUserKeyWithValidity()", "client.addApiKey()")), u.prototype.updateUserKey = n(function (e, t, r, o) {
                    return this.updateApiKey(e, t, r, o)
                }, i("client.updateUserKey()", "client.updateApiKey()")), u.prototype.updateApiKey = function (t, r, o, n) {
                    if (!e(8)(r)) throw new Error("Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])");
                    2 !== arguments.length && "function" != typeof o || (n = o, o = null);
                    var i = {
                        acl: r
                    };
                    return o && (i.validity = o.validity, i.maxQueriesPerIPPerHour = o.maxQueriesPerIPPerHour, i.maxHitsPerQuery = o.maxHitsPerQuery, i.indexes = o.indexes, i.description = o.description, o.queryParameters && (i.queryParameters = this._getSearchParams(o.queryParameters, "")), i.referers = o.referers), this._jsonRequest({
                        method: "PUT",
                        url: "/1/keys/" + t,
                        body: i,
                        hostType: "write",
                        callback: n
                    })
                }, u.prototype.startQueriesBatch = n(function () {
                    this._batch = []
                }, i("client.startQueriesBatch()", "client.search()")), u.prototype.addQueryInBatch = n(function (e, t, r) {
                    this._batch.push({
                        indexName: e,
                        query: t,
                        params: r
                    })
                }, i("client.addQueryInBatch()", "client.search()")), u.prototype.sendQueriesBatch = n(function (e) {
                    return this.search(this._batch, e)
                }, i("client.sendQueriesBatch()", "client.search()")), u.prototype.batch = function (t, r) {
                    if (!e(8)(t)) throw new Error("Usage: client.batch(operations[, callback])");
                    return this._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/*/batch",
                        body: {
                            requests: t
                        },
                        hostType: "write",
                        callback: r
                    })
                }, u.prototype.assignUserID = function (e, t) {
                    if (!e.userID || !e.cluster) throw new c.AlgoliaSearchError("You have to provide both a userID and cluster", e);
                    return this._jsonRequest({
                        method: "POST",
                        url: "/1/clusters/mapping",
                        hostType: "write",
                        body: {
                            cluster: e.cluster
                        },
                        callback: t,
                        headers: {
                            "X-Algolia-User-ID": e.userID
                        }
                    })
                }, u.prototype.getTopUserID = function (e) {
                    return this._jsonRequest({
                        method: "GET",
                        url: "/1/clusters/mapping/top",
                        hostType: "read",
                        callback: e
                    })
                }, u.prototype.getUserID = function (e, t) {
                    if (!e.userID) throw new c.AlgoliaSearchError("You have to provide a userID", {
                        debugData: e
                    });
                    return this._jsonRequest({
                        method: "GET",
                        url: "/1/clusters/mapping/" + e.userID,
                        hostType: "read",
                        callback: t
                    })
                }, u.prototype.listClusters = function (e) {
                    return this._jsonRequest({
                        method: "GET",
                        url: "/1/clusters",
                        hostType: "read",
                        callback: e
                    })
                }, u.prototype.listUserIDs = function (e, t) {
                    return this._jsonRequest({
                        method: "GET",
                        url: "/1/clusters/mapping",
                        body: e,
                        hostType: "read",
                        callback: t
                    })
                }, u.prototype.removeUserID = function (e, t) {
                    if (!e.userID) throw new c.AlgoliaSearchError("You have to provide a userID", {
                        debugData: e
                    });
                    return this._jsonRequest({
                        method: "DELETE",
                        url: "/1/clusters/mapping",
                        hostType: "write",
                        callback: t,
                        headers: {
                            "X-Algolia-User-ID": e.userID
                        }
                    })
                }, u.prototype.searchUserIDs = function (e, t) {
                    return this._jsonRequest({
                        method: "POST",
                        url: "/1/clusters/mapping/search",
                        body: e,
                        hostType: "read",
                        callback: t
                    })
                }, u.prototype.destroy = l, u.prototype.enableRateLimitForward = l, u.prototype.disableRateLimitForward = l, u.prototype.useSecuredAPIKey = l, u.prototype.disableSecuredAPIKey = l, u.prototype.generateSecuredApiKey = l;

                function l() {
                    throw new c.AlgoliaSearchError("Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com")
                }
            }, {
                15: 15,
                16: 16,
                25: 25,
                26: 26,
                27: 27,
                28: 28,
                7: 7,
                8: 8
            }
        ],
        15: [
            function (e, t, r) {
                (function (r) {
                    t.exports = c;
                    var o = e(28),
                        n = e(29),
                        i = e(18),
                        s = e(34),
                        a = r.env.RESET_APP_DATA_TIMER && parseInt(r.env.RESET_APP_DATA_TIMER, 10) || 12e4;

                    function c(t, r, n) {
                        var i = e(1)("algoliasearch"),
                            s = e(25),
                            a = e(8),
                            c = e(30),
                            l = "Usage: algoliasearch(applicationID, apiKey, opts)";
                        if (!0 !== n._allowEmptyCredentials && !t) throw new o.AlgoliaSearchError("Please provide an application ID. " + l);
                        if (!0 !== n._allowEmptyCredentials && !r) throw new o.AlgoliaSearchError("Please provide an API key. " + l);
                        this.applicationID = t, this.apiKey = r, this.hosts = {
                            read: [],
                            write: []
                        };
                        var p = (n = n || {}).protocol || "https:";
                        if (this._timeouts = n.timeouts || {
                            connect: 1e3,
                            read: 2e3,
                            write: 3e4
                        }, n.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = n.timeout), /:$/.test(p) || (p += ":"), "http:" !== n.protocol && "https:" !== n.protocol) throw new o.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + n.protocol + "`)");
                        if (this._checkAppIdData(), n.hosts) a(n.hosts) ? (this.hosts.read = s(n.hosts), this.hosts.write = s(n.hosts)) : (this.hosts.read = s(n.hosts.read), this.hosts.write = s(n.hosts.write));
                        else {
                            var d = c(this._shuffleResult, function (e) {
                                return t + "-" + e + ".algolianet.com"
                            });
                            this.hosts.read = [this.applicationID + "-dsn.algolia.net"].concat(d), this.hosts.write = [this.applicationID + ".algolia.net"].concat(d)
                        }
                        this.hosts.read = c(this.hosts.read, u(p)), this.hosts.write = c(this.hosts.write, u(p)), this.extraHeaders = {}, this.cache = n._cache || {}, this._ua = n._ua, this._useCache = !(void 0 !== n._useCache && !n._cache) || n._useCache, this._useFallback = void 0 === n.useFallback || n.useFallback, this._setTimeout = n._setTimeout, i("init done, %j", this)
                    }
                    c.prototype.initIndex = function (e) {
                        return new i(this, e)
                    }, c.prototype.setExtraHeader = function (e, t) {
                        this.extraHeaders[e.toLowerCase()] = t
                    }, c.prototype.getExtraHeader = function (e) {
                        return this.extraHeaders[e.toLowerCase()]
                    }, c.prototype.unsetExtraHeader = function (e) {
                        delete this.extraHeaders[e.toLowerCase()]
                    }, c.prototype.addAlgoliaAgent = function (e) {
                        -1 === this._ua.indexOf(";" + e) && (this._ua += ";" + e)
                    }, c.prototype._jsonRequest = function (t) {
                        this._checkAppIdData();
                        var r, i, s = e(1)("algoliasearch:" + t.url),
                            a = t.additionalUA || "",
                            c = t.cache,
                            u = this,
                            d = 0,
                            h = !1,
                            f = u._useFallback && u._request.fallback && t.fallback;
                        this.apiKey.length > 500 && void 0 !== t.body && (void 0 !== t.body.params || void 0 !== t.body.requests) ? (t.body.apiKey = this.apiKey, i = this._computeRequestHeaders({
                            additionalUA: a,
                            withApiKey: !1,
                            headers: t.headers
                        })) : i = this._computeRequestHeaders({
                            additionalUA: a,
                            headers: t.headers
                        }), void 0 !== t.body && (r = l(t.body)), s("request start");
                        var y = [];
                        var m = function e(n, m) {
                            u._checkAppIdData();
                            var v, g = new Date;
                            if (u._useCache && (v = t.url), u._useCache && r && (v += "_body_" + m.body), u._useCache && c && void 0 !== c[v]) return s("serving response from cache"), u._promise.resolve(JSON.parse(c[v]));
                            if (d >= u.hosts[t.hostType].length) return !f || h ? (s("could not get any response"), u._promise.reject(new o.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + u.applicationID, {
                                debugData: y
                            }))) : (s("switching to fallback"), d = 0, m.method = t.fallback.method, m.url = t.fallback.url, m.jsonBody = t.fallback.body, m.jsonBody && (m.body = l(m.jsonBody)), i = u._computeRequestHeaders({
                                additionalUA: a,
                                headers: t.headers
                            }), m.timeouts = u._getTimeoutsForRequest(t.hostType), u._setHostIndexByType(0, t.hostType), h = !0, e(u._request.fallback, m));
                            var b = u._getHostByType(t.hostType),
                                w = b + m.url,
                                _ = {
                                    body: m.body,
                                    jsonBody: m.jsonBody,
                                    method: m.method,
                                    headers: i,
                                    timeouts: m.timeouts,
                                    debug: s
                                };
                            return s("method: %s, url: %s, headers: %j, timeouts: %d", _.method, w, _.headers, _.timeouts), n === u._request.fallback && s("using fallback"), n.call(u, w, _).then(function (e) {
                                var t = e && e.body && e.body.message && e.body.status || e.statusCode || e && e.body && 200;
                                s("received response: statusCode: %s, computed statusCode: %d, headers: %j", e.statusCode, t, e.headers);
                                var n = 2 === Math.floor(t / 100),
                                    a = new Date;
                                if (y.push({
                                    currentHost: b,
                                    headers: p(i),
                                    content: r || null,
                                    contentLength: void 0 !== r ? r.length : null,
                                    method: m.method,
                                    timeouts: m.timeouts,
                                    url: m.url,
                                    startTime: g,
                                    endTime: a,
                                    duration: a - g,
                                    statusCode: t
                                }), n) return u._useCache && c && (c[v] = e.responseText), e.body;
                                if (4 !== Math.floor(t / 100)) return d += 1, x();
                                s("unrecoverable error");
                                var l = new o.AlgoliaSearchError(e.body && e.body.message, {
                                    debugData: y,
                                    statusCode: t
                                });
                                return u._promise.reject(l)
                            }, function (a) {
                                s("error: %s, stack: %s", a.message, a.stack);
                                var c = new Date;
                                return y.push({
                                    currentHost: b,
                                    headers: p(i),
                                    content: r || null,
                                    contentLength: void 0 !== r ? r.length : null,
                                    method: m.method,
                                    timeouts: m.timeouts,
                                    url: m.url,
                                    startTime: g,
                                    endTime: c,
                                    duration: c - g
                                }), a instanceof o.AlgoliaSearchError || (a = new o.Unknown(a && a.message, a)), d += 1, a instanceof o.Unknown || a instanceof o.UnparsableJSON || d >= u.hosts[t.hostType].length && (h || !f) ? (a.debugData = y, u._promise.reject(a)) : a instanceof o.RequestTimeout ? (s("retrying request with higher timeout"), u._incrementHostIndex(t.hostType), u._incrementTimeoutMultipler(), m.timeouts = u._getTimeoutsForRequest(t.hostType), e(n, m)) : x()
                            });

                            function x() {
                                return s("retrying request"), u._incrementHostIndex(t.hostType), e(n, m)
                            }
                        }(u._request, {
                            url: t.url,
                            method: t.method,
                            body: r,
                            jsonBody: t.body,
                            timeouts: u._getTimeoutsForRequest(t.hostType)
                        });
                        if ("function" != typeof t.callback) return m;
                        m.then(function (e) {
                            n(function () {
                                t.callback(null, e)
                            }, u._setTimeout || setTimeout)
                        }, function (e) {
                            n(function () {
                                t.callback(e)
                            }, u._setTimeout || setTimeout)
                        })
                    }, c.prototype._getSearchParams = function (e, t) {
                        if (void 0 === e || null === e) return t;
                        for (var r in e) null !== r && void 0 !== e[r] && e.hasOwnProperty(r) && (t += "" === t ? "" : "&", t += r + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(e[r]) ? l(e[r]) : e[r]));
                        return t
                    }, c.prototype._computeRequestHeaders = function (t) {
                        var r = e(5),
                            o = {
                                "x-algolia-agent": t.additionalUA ? this._ua + ";" + t.additionalUA : this._ua,
                                "x-algolia-application-id": this.applicationID
                            };
                        return !1 !== t.withApiKey && (o["x-algolia-api-key"] = this.apiKey), this.userToken && (o["x-algolia-usertoken"] = this.userToken), this.securityTags && (o["x-algolia-tagfilters"] = this.securityTags), r(this.extraHeaders, function (e, t) {
                            o[t] = e
                        }), t.headers && r(t.headers, function (e, t) {
                            o[t] = e
                        }), o
                    }, c.prototype.search = function (t, r, o) {
                        var n = e(8),
                            i = e(30);
                        if (!n(t)) throw new Error("Usage: client.search(arrayOfQueries[, callback])");
                        "function" == typeof r ? (o = r, r = {}) : void 0 === r && (r = {});
                        var s = this,
                            a = {
                                requests: i(t, function (e) {
                                    var t = "";
                                    return void 0 !== e.query && (t += "query=" + encodeURIComponent(e.query)), {
                                        indexName: e.indexName,
                                        params: s._getSearchParams(e.params, t)
                                    }
                                })
                            },
                            c = i(a.requests, function (e, t) {
                                return t + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(e.indexName) + "?" + e.params)
                            }).join("&"),
                            u = "/1/indexes/*/queries";
                        return void 0 !== r.strategy && (u += "?strategy=" + r.strategy), this._jsonRequest({
                            cache: this.cache,
                            method: "POST",
                            url: u,
                            body: a,
                            hostType: "read",
                            fallback: {
                                method: "GET",
                                url: "/1/indexes/*",
                                body: {
                                    params: c
                                }
                            },
                            callback: o
                        })
                    }, c.prototype.setSecurityTags = function (e) {
                        if ("[object Array]" === Object.prototype.toString.call(e)) {
                            for (var t = [], r = 0; r < e.length; ++r)
                                if ("[object Array]" === Object.prototype.toString.call(e[r])) {
                                    for (var o = [], n = 0; n < e[r].length; ++n) o.push(e[r][n]);
                                    t.push("(" + o.join(",") + ")")
                                } else t.push(e[r]);
                            e = t.join(",")
                        }
                        this.securityTags = e
                    }, c.prototype.setUserToken = function (e) {
                        this.userToken = e
                    }, c.prototype.clearCache = function () {
                        this.cache = {}
                    }, c.prototype.setRequestTimeout = function (e) {
                        e && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e)
                    }, c.prototype.setTimeouts = function (e) {
                        this._timeouts = e
                    }, c.prototype.getTimeouts = function () {
                        return this._timeouts
                    }, c.prototype._getAppIdData = function () {
                        var e = s.get(this.applicationID);
                        return null !== e && this._cacheAppIdData(e), e
                    }, c.prototype._setAppIdData = function (e) {
                        return e.lastChange = (new Date).getTime(), this._cacheAppIdData(e), s.set(this.applicationID, e)
                    }, c.prototype._checkAppIdData = function () {
                        var e = this._getAppIdData(),
                            t = (new Date).getTime();
                        return null === e || t - e.lastChange > a ? this._resetInitialAppIdData(e) : e
                    }, c.prototype._resetInitialAppIdData = function (e) {
                        var t = e || {};
                        return t.hostIndexes = {
                            read: 0,
                            write: 0
                        }, t.timeoutMultiplier = 1, t.shuffleResult = t.shuffleResult || function (e) {
                            var t, r, o = e.length;
                            for (; 0 !== o;) r = Math.floor(Math.random() * o), t = e[o -= 1], e[o] = e[r], e[r] = t;
                            return e
                        }([1, 2, 3]), this._setAppIdData(t)
                    }, c.prototype._cacheAppIdData = function (e) {
                        this._hostIndexes = e.hostIndexes, this._timeoutMultiplier = e.timeoutMultiplier, this._shuffleResult = e.shuffleResult
                    }, c.prototype._partialAppIdDataUpdate = function (t) {
                        var r = e(5),
                            o = this._getAppIdData();
                        return r(t, function (e, t) {
                            o[t] = e
                        }), this._setAppIdData(o)
                    }, c.prototype._getHostByType = function (e) {
                        return this.hosts[e][this._getHostIndexByType(e)]
                    }, c.prototype._getTimeoutMultiplier = function () {
                        return this._timeoutMultiplier
                    }, c.prototype._getHostIndexByType = function (e) {
                        return this._hostIndexes[e]
                    }, c.prototype._setHostIndexByType = function (t, r) {
                        var o = e(25)(this._hostIndexes);
                        return o[r] = t, this._partialAppIdDataUpdate({
                            hostIndexes: o
                        }), t
                    }, c.prototype._incrementHostIndex = function (e) {
                        return this._setHostIndexByType((this._getHostIndexByType(e) + 1) % this.hosts[e].length, e)
                    }, c.prototype._incrementTimeoutMultipler = function () {
                        var e = Math.max(this._timeoutMultiplier + 1, 4);
                        return this._partialAppIdDataUpdate({
                            timeoutMultiplier: e
                        })
                    }, c.prototype._getTimeoutsForRequest = function (e) {
                        return {
                            connect: this._timeouts.connect * this._timeoutMultiplier,
                            complete: this._timeouts[e] * this._timeoutMultiplier
                        }
                    };

                    function u(e) {
                        return function (t) {
                            return e + "//" + t.toLowerCase()
                        }
                    }

                    function l(e) {
                        if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
                        var t = Array.prototype.toJSON;
                        delete Array.prototype.toJSON;
                        var r = JSON.stringify(e);
                        return Array.prototype.toJSON = t, r
                    }

                    function p(e) {
                        var t = {};
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var o;
                                o = "x-algolia-api-key" === r || "x-algolia-application-id" === r ? "**hidden for security purposes**" : e[r], t[r] = o
                            }
                        return t
                    }
                }).call(this, e(12))
            }, {
                1: 1,
                12: 12,
                18: 18,
                25: 25,
                28: 28,
                29: 29,
                30: 30,
                34: 34,
                5: 5,
                8: 8
            }
        ],
        16: [
            function (e, t, r) {
                var o = e(7),
                    n = e(18),
                    i = e(26),
                    s = e(27),
                    a = e(29),
                    c = e(28),
                    u = i(function () {}, s("forwardToSlaves", "forwardToReplicas"));
                t.exports = l;

                function l() {
                    n.apply(this, arguments)
                }
                o(l, n), l.prototype.addObject = function (e, t, r) {
                    return 1 !== arguments.length && "function" != typeof t || (r = t, t = void 0), this.as._jsonRequest({
                        method: void 0 !== t ? "PUT" : "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + (void 0 !== t ? "/" + encodeURIComponent(t) : ""),
                        body: e,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.addObjects = function (t, r) {
                    if (!e(8)(t)) throw new Error("Usage: index.addObjects(arrayOfObjects[, callback])");
                    for (var o = {
                        requests: []
                    }, n = 0; n < t.length; ++n) {
                        var i = {
                            action: "addObject",
                            body: t[n]
                        };
                        o.requests.push(i)
                    }
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                        body: o,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.partialUpdateObject = function (e, t, r) {
                    1 !== arguments.length && "function" != typeof t || (r = t, t = void 0);
                    var o = "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e.objectID) + "/partial";
                    return !1 === t && (o += "?createIfNotExists=false"), this.as._jsonRequest({
                        method: "POST",
                        url: o,
                        body: e,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.partialUpdateObjects = function (t, r, o) {
                    1 !== arguments.length && "function" != typeof r || (o = r, r = !0);
                    if (!e(8)(t)) throw new Error("Usage: index.partialUpdateObjects(arrayOfObjects[, callback])");
                    for (var n = {
                        requests: []
                    }, i = 0; i < t.length; ++i) {
                        var s = {
                            action: !0 === r ? "partialUpdateObject" : "partialUpdateObjectNoCreate",
                            objectID: t[i].objectID,
                            body: t[i]
                        };
                        n.requests.push(s)
                    }
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                        body: n,
                        hostType: "write",
                        callback: o
                    })
                }, l.prototype.saveObject = function (e, t) {
                    return this.as._jsonRequest({
                        method: "PUT",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e.objectID),
                        body: e,
                        hostType: "write",
                        callback: t
                    })
                }, l.prototype.saveObjects = function (t, r) {
                    if (!e(8)(t)) throw new Error("Usage: index.saveObjects(arrayOfObjects[, callback])");
                    for (var o = {
                        requests: []
                    }, n = 0; n < t.length; ++n) {
                        var i = {
                            action: "updateObject",
                            objectID: t[n].objectID,
                            body: t[n]
                        };
                        o.requests.push(i)
                    }
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                        body: o,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.deleteObject = function (e, t) {
                    if ("function" == typeof e || "string" != typeof e && "number" != typeof e) {
                        var r = new c.AlgoliaSearchError("Cannot delete an object without an objectID");
                        return "function" == typeof (t = e) ? t(r) : this.as._promise.reject(r)
                    }
                    return this.as._jsonRequest({
                        method: "DELETE",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e),
                        hostType: "write",
                        callback: t
                    })
                }, l.prototype.deleteObjects = function (t, r) {
                    var o = e(8),
                        n = e(30);
                    if (!o(t)) throw new Error("Usage: index.deleteObjects(arrayOfObjectIDs[, callback])");
                    var i = {
                        requests: n(t, function (e) {
                            return {
                                action: "deleteObject",
                                objectID: e,
                                body: {
                                    objectID: e
                                }
                            }
                        })
                    };
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                        body: i,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.deleteByQuery = i(function (t, r, o) {
                    var n = e(25),
                        i = e(30),
                        s = this,
                        c = s.as;
                    1 === arguments.length || "function" == typeof r ? (o = r, r = {}) : r = n(r), r.attributesToRetrieve = "objectID", r.hitsPerPage = 1e3, r.distinct = !1, this.clearCache();
                    var u = this.search(t, r).then(function (e) {
                        if (0 === e.nbHits) return e;
                        var t = i(e.hits, function (e) {
                            return e.objectID
                        });
                        return s.deleteObjects(t).then(l).then(p)
                    });

                    function l(e) {
                        return s.waitTask(e.taskID)
                    }

                    function p() {
                        return s.deleteByQuery(t, r)
                    }
                    if (!o) return u;
                    u.then(function () {
                        a(function () {
                            o(null)
                        }, c._setTimeout || setTimeout)
                    }, function (e) {
                        a(function () {
                            o(e)
                        }, c._setTimeout || setTimeout)
                    })
                }, s("index.deleteByQuery()", "index.deleteBy()")), l.prototype.deleteBy = function (e, t) {
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/deleteByQuery",
                        body: {
                            params: this.as._getSearchParams(e, "")
                        },
                        hostType: "write",
                        callback: t
                    })
                }, l.prototype.browseAll = function (t, r) {
                    "object" == typeof t && (r = t, t = void 0);
                    var o = e(31),
                        n = new(e(17)),
                        i = this.as,
                        s = this,
                        a = i._getSearchParams(o({}, r || {}, {
                            query: t
                        }), "");
                    c();

                    function c(e) {
                        if (!n._stopped) {
                            var t;
                            t = void 0 !== e ? {
                                cursor: e
                            } : {
                                params: a
                            }, i._jsonRequest({
                                method: "POST",
                                url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/browse",
                                hostType: "read",
                                body: t,
                                callback: u
                            })
                        }
                    }

                    function u(e, t) {
                        n._stopped || (e ? n._error(e) : (n._result(t), void 0 !== t.cursor ? c(t.cursor) : n._end()))
                    }
                    return n
                }, l.prototype.ttAdapter = i(function (e) {
                    var t = this;
                    return function (r, o, n) {
                        var i;
                        i = "function" == typeof n ? n : o, t.search(r, e, function (e, t) {
                            i(e || t.hits)
                        })
                    }
                }, "ttAdapter is not necessary anymore and will be removed in the next version,\nhave a look at autocomplete.js (https://github.com/algolia/autocomplete.js)"), l.prototype.waitTask = function (e, t) {
                    var r = 100,
                        o = 5e3,
                        n = 0,
                        i = this,
                        s = i.as,
                        c = function t() {
                            return s._jsonRequest({
                                method: "GET",
                                hostType: "read",
                                url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/task/" + e
                            }).then(function (e) {
                                var i = r * ++n * n;
                                return i > o && (i = o), "published" !== e.status ? s._promise.delay(i).then(t) : e
                            })
                        }();
                    if (!t) return c;
                    c.then(function (e) {
                        a(function () {
                            t(null, e)
                        }, s._setTimeout || setTimeout)
                    }, function (e) {
                        a(function () {
                            t(e)
                        }, s._setTimeout || setTimeout)
                    })
                }, l.prototype.clearIndex = function (e) {
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/clear",
                        hostType: "write",
                        callback: e
                    })
                }, l.prototype.getSettings = function (e) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/settings?getVersion=2",
                        hostType: "read",
                        callback: e
                    })
                }, l.prototype.searchSynonyms = function (e, t) {
                    return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/search",
                        body: e,
                        hostType: "read",
                        callback: t
                    })
                };

                function p(e, t, r) {
                    return function r(o, n) {
                        var i = {
                                page: o || 0,
                                hitsPerPage: t || 100
                            },
                            s = n || [];
                        return e(i).then(function (e) {
                            var t = e.hits,
                                o = e.nbHits,
                                n = t.map(function (e) {
                                    return delete e._highlightResult, e
                                }),
                                a = s.concat(n);
                            return a.length < o ? r(i.page + 1, a) : a
                        })
                    }().then(function (e) {
                        return "function" == typeof r && r(e), e
                    })
                }
                l.prototype.exportSynonyms = function (e, t) {
                    return p(this.searchSynonyms, e, t)
                }, l.prototype.saveSynonym = function (e, t, r) {
                    "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && u();
                    var o = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "PUT",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e.objectID) + "?forwardToReplicas=" + o,
                        body: e,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.getSynonym = function (e, t) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e),
                        hostType: "read",
                        callback: t
                    })
                }, l.prototype.deleteSynonym = function (e, t, r) {
                    "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && u();
                    var o = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "DELETE",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e) + "?forwardToReplicas=" + o,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.clearSynonyms = function (e, t) {
                    "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), void 0 !== e.forwardToSlaves && u();
                    var r = e.forwardToSlaves || e.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/clear?forwardToReplicas=" + r,
                        hostType: "write",
                        callback: t
                    })
                }, l.prototype.batchSynonyms = function (e, t, r) {
                    "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && u();
                    var o = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/batch?forwardToReplicas=" + o + "&replaceExistingSynonyms=" + (t.replaceExistingSynonyms ? "true" : "false"),
                        hostType: "write",
                        body: e,
                        callback: r
                    })
                }, l.prototype.searchRules = function (e, t) {
                    return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/search",
                        body: e,
                        hostType: "read",
                        callback: t
                    })
                }, l.prototype.exportRules = function (e, t) {
                    return p(this.searchRules, e, t)
                }, l.prototype.saveRule = function (e, t, r) {
                    "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {});
                    var o = !0 === t.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "PUT",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e.objectID) + "?forwardToReplicas=" + o,
                        body: e,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.getRule = function (e, t) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e),
                        hostType: "read",
                        callback: t
                    })
                }, l.prototype.deleteRule = function (e, t, r) {
                    "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {});
                    var o = !0 === t.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "DELETE",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e) + "?forwardToReplicas=" + o,
                        hostType: "write",
                        callback: r
                    })
                }, l.prototype.clearRules = function (e, t) {
                    "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {});
                    var r = !0 === e.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/clear?forwardToReplicas=" + r,
                        hostType: "write",
                        callback: t
                    })
                }, l.prototype.batchRules = function (e, t, r) {
                    "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {});
                    var o = !0 === t.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/batch?forwardToReplicas=" + o + "&clearExistingRules=" + (!0 === t.clearExistingRules ? "true" : "false"),
                        hostType: "write",
                        body: e,
                        callback: r
                    })
                }, l.prototype.setSettings = function (e, t, r) {
                    1 !== arguments.length && "function" != typeof t || (r = t, t = {}), void 0 !== t.forwardToSlaves && u();
                    var o = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
                    return this.as._jsonRequest({
                        method: "PUT",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/settings?forwardToReplicas=" + o,
                        hostType: "write",
                        body: e,
                        callback: r
                    })
                }, l.prototype.listUserKeys = i(function (e) {
                    return this.listApiKeys(e)
                }, s("index.listUserKeys()", "index.listApiKeys()")), l.prototype.listApiKeys = function (e) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
                        hostType: "read",
                        callback: e
                    })
                }, l.prototype.getUserKeyACL = i(function (e, t) {
                    return this.getApiKey(e, t)
                }, s("index.getUserKeyACL()", "index.getApiKey()")), l.prototype.getApiKey = function (e, t) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + e,
                        hostType: "read",
                        callback: t
                    })
                }, l.prototype.deleteUserKey = i(function (e, t) {
                    return this.deleteApiKey(e, t)
                }, s("index.deleteUserKey()", "index.deleteApiKey()")), l.prototype.deleteApiKey = function (e, t) {
                    return this.as._jsonRequest({
                        method: "DELETE",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + e,
                        hostType: "write",
                        callback: t
                    })
                }, l.prototype.addUserKey = i(function (e, t, r) {
                    return this.addApiKey(e, t, r)
                }, s("index.addUserKey()", "index.addApiKey()")), l.prototype.addApiKey = function (t, r, o) {
                    if (!e(8)(t)) throw new Error("Usage: index.addApiKey(arrayOfAcls[, params, callback])");
                    1 !== arguments.length && "function" != typeof r || (o = r, r = null);
                    var n = {
                        acl: t
                    };
                    return r && (n.validity = r.validity, n.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour, n.maxHitsPerQuery = r.maxHitsPerQuery, n.description = r.description, r.queryParameters && (n.queryParameters = this.as._getSearchParams(r.queryParameters, "")), n.referers = r.referers), this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
                        body: n,
                        hostType: "write",
                        callback: o
                    })
                }, l.prototype.addUserKeyWithValidity = i(function (e, t, r) {
                    return this.addApiKey(e, t, r)
                }, s("index.addUserKeyWithValidity()", "index.addApiKey()")), l.prototype.updateUserKey = i(function (e, t, r, o) {
                    return this.updateApiKey(e, t, r, o)
                }, s("index.updateUserKey()", "index.updateApiKey()")), l.prototype.updateApiKey = function (t, r, o, n) {
                    if (!e(8)(r)) throw new Error("Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])");
                    2 !== arguments.length && "function" != typeof o || (n = o, o = null);
                    var i = {
                        acl: r
                    };
                    return o && (i.validity = o.validity, i.maxQueriesPerIPPerHour = o.maxQueriesPerIPPerHour, i.maxHitsPerQuery = o.maxHitsPerQuery, i.description = o.description, o.queryParameters && (i.queryParameters = this.as._getSearchParams(o.queryParameters, "")), i.referers = o.referers), this.as._jsonRequest({
                        method: "PUT",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + t,
                        body: i,
                        hostType: "write",
                        callback: n
                    })
                }
            }, {
                17: 17,
                18: 18,
                25: 25,
                26: 26,
                27: 27,
                28: 28,
                29: 29,
                30: 30,
                31: 31,
                7: 7,
                8: 8
            }
        ],
        17: [
            function (e, t, r) {
                "use strict";
                t.exports = o;

                function o() {}
                e(7)(o, e(4).EventEmitter), o.prototype.stop = function () {
                    this._stopped = !0, this._clean()
                }, o.prototype._end = function () {
                    this.emit("end"), this._clean()
                }, o.prototype._error = function (e) {
                    this.emit("error", e), this._clean()
                }, o.prototype._result = function (e) {
                    this.emit("result", e)
                }, o.prototype._clean = function () {
                    this.removeAllListeners("stop"), this.removeAllListeners("end"), this.removeAllListeners("error"), this.removeAllListeners("result")
                }
            }, {
                4: 4,
                7: 7
            }
        ],
        18: [
            function (e, t, r) {
                var o = e(24),
                    n = e(26),
                    i = e(27);
                t.exports = s;

                function s(e, t) {
                    this.indexName = t, this.as = e, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}
                }
                s.prototype.clearCache = function () {
                    this.cache = {}
                }, s.prototype.search = o("query"), s.prototype.similarSearch = o("similarQuery"), s.prototype.browse = function (t, r, o) {
                    var n, i, s = e(31);
                    0 === arguments.length || 1 === arguments.length && "function" == typeof arguments[0] ? (n = 0, o = arguments[0], t = void 0) : "number" == typeof arguments[0] ? (n = arguments[0], "number" == typeof arguments[1] ? i = arguments[1] : "function" == typeof arguments[1] && (o = arguments[1], i = void 0), t = void 0, r = void 0) : "object" == typeof arguments[0] ? ("function" == typeof arguments[1] && (o = arguments[1]), r = arguments[0], t = void 0) : "string" == typeof arguments[0] && "function" == typeof arguments[1] && (o = arguments[1], r = void 0), r = s({}, r || {}, {
                        page: n,
                        hitsPerPage: i,
                        query: t
                    });
                    var a = this.as._getSearchParams(r, "");
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
                        body: {
                            params: a
                        },
                        hostType: "read",
                        callback: o
                    })
                }, s.prototype.browseFrom = function (e, t) {
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
                        body: {
                            cursor: e
                        },
                        hostType: "read",
                        callback: t
                    })
                }, s.prototype.searchForFacetValues = function (t, r) {
                    var o = e(25),
                        n = e(32);
                    if (void 0 === t.facetName || void 0 === t.facetQuery) throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");
                    var i = t.facetName,
                        s = n(o(t), function (e) {
                            return "facetName" === e
                        }),
                        a = this.as._getSearchParams(s, "");
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(i) + "/query",
                        hostType: "read",
                        body: {
                            params: a
                        },
                        callback: r
                    })
                }, s.prototype.searchFacet = n(function (e, t) {
                    return this.searchForFacetValues(e, t)
                }, i("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])")), s.prototype._search = function (e, t, r, o) {
                    return this.as._jsonRequest({
                        cache: this.cache,
                        method: "POST",
                        url: t || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                        body: {
                            params: e
                        },
                        hostType: "read",
                        fallback: {
                            method: "GET",
                            url: "/1/indexes/" + encodeURIComponent(this.indexName),
                            body: {
                                params: e
                            }
                        },
                        callback: r,
                        additionalUA: o
                    })
                }, s.prototype.getObject = function (e, t, r) {
                    1 !== arguments.length && "function" != typeof t || (r = t, t = void 0);
                    var o = "";
                    if (void 0 !== t) {
                        o = "?attributes=";
                        for (var n = 0; n < t.length; ++n) 0 !== n && (o += ","), o += t[n]
                    }
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e) + o,
                        hostType: "read",
                        callback: r
                    })
                }, s.prototype.getObjects = function (t, r, o) {
                    var n = e(8),
                        i = e(30);
                    if (!n(t)) throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");
                    var s = this;
                    1 !== arguments.length && "function" != typeof r || (o = r, r = void 0);
                    var a = {
                        requests: i(t, function (e) {
                            var t = {
                                indexName: s.indexName,
                                objectID: e
                            };
                            return r && (t.attributesToRetrieve = r.join(",")), t
                        })
                    };
                    return this.as._jsonRequest({
                        method: "POST",
                        url: "/1/indexes/*/objects",
                        hostType: "read",
                        body: a,
                        callback: o
                    })
                }, s.prototype.as = null, s.prototype.indexName = null, s.prototype.typeAheadArgs = null, s.prototype.typeAheadValueOption = null
            }, {
                24: 24,
                25: 25,
                26: 26,
                27: 27,
                30: 30,
                31: 31,
                32: 32,
                8: 8
            }
        ],
        19: [
            function (e, t, r) {
                "use strict";
                var o = e(14),
                    n = e(20);
                t.exports = n(o)
            }, {
                14: 14,
                20: 20
            }
        ],
        20: [
            function (e, t, r) {
                (function (r) {
                    "use strict";
                    var o = e(6),
                        n = o.Promise || e(3).Promise;
                    t.exports = function (t, i) {
                        var s = e(7),
                            a = e(28),
                            c = e(22),
                            u = e(23),
                            l = e(33);
                        i = i || "", "debug" === r.env.NODE_ENV && e(1).enable("algoliasearch*");

                        function p(t, r, o) {
                            var n = e(25),
                                i = e(21);
                            return void 0 === (o = n(o || {})).protocol && (o.protocol = i()), o._ua = o._ua || p.ua, new h(t, r, o)
                        }
                        p.version = e(35), p.ua = "Algolia for vanilla JavaScript " + i + p.version, p.initPlaces = l(p), o.__algolia = {
                            debug: e(1),
                            algoliasearch: p
                        };
                        var d = {
                            hasXMLHttpRequest: "XMLHttpRequest" in o,
                            hasXDomainRequest: "XDomainRequest" in o
                        };
                        d.hasXMLHttpRequest && (d.cors = "withCredentials" in new XMLHttpRequest);

                        function h() {
                            t.apply(this, arguments)
                        }
                        return s(h, t), h.prototype._request = function (e, t) {
                            return new n(function (r, o) {
                                if (d.cors || d.hasXDomainRequest) {
                                    e = c(e, t.headers);
                                    var n, i, s = t.body,
                                        u = d.cors ? new XMLHttpRequest : new XDomainRequest,
                                        l = !1;
                                    n = setTimeout(p, t.timeouts.connect), u.onprogress = function () {
                                        l || h()
                                    }, "onreadystatechange" in u && (u.onreadystatechange = function () {
                                        !l && u.readyState > 1 && h()
                                    }), u.onload = function () {
                                        if (i) return;
                                        clearTimeout(n);
                                        var e;
                                        try {
                                            e = {
                                                body: JSON.parse(u.responseText),
                                                responseText: u.responseText,
                                                statusCode: u.status,
                                                headers: u.getAllResponseHeaders && u.getAllResponseHeaders() || {}
                                            }
                                        } catch (t) {
                                            e = new a.UnparsableJSON({
                                                more: u.responseText
                                            })
                                        }
                                        e instanceof a.UnparsableJSON ? o(e) : r(e)
                                    }, u.onerror = function (e) {
                                        if (i) return;
                                        clearTimeout(n), o(new a.Network({
                                            more: e
                                        }))
                                    }, u instanceof XMLHttpRequest ? u.open(t.method, e, !0) : u.open(t.method, e), d.cors && (s && ("POST" === t.method ? u.setRequestHeader("content-type", "application/x-www-form-urlencoded") : u.setRequestHeader("content-type", "application/json")), u.setRequestHeader("accept", "application/json")), u.send(s)
                                } else o(new a.Network("CORS not supported"));

                                function p() {
                                    i = !0, u.abort(), o(new a.RequestTimeout)
                                }

                                function h() {
                                    l = !0, clearTimeout(n), n = setTimeout(p, t.timeouts.complete)
                                }
                            })
                        }, h.prototype._request.fallback = function (e, t) {
                            return e = c(e, t.headers), new n(function (r, o) {
                                u(e, t, function (e, t) {
                                    e ? o(e) : r(t)
                                })
                            })
                        }, h.prototype._promise = {
                            reject: function (e) {
                                return n.reject(e)
                            }, resolve: function (e) {
                                return n.resolve(e)
                            }, delay: function (e) {
                                return new n(function (t) {
                                    setTimeout(t, e)
                                })
                            }
                        }, p
                    }
                }).call(this, e(12))
            }, {
                1: 1,
                12: 12,
                21: 21,
                22: 22,
                23: 23,
                25: 25,
                28: 28,
                3: 3,
                33: 33,
                35: 35,
                6: 6,
                7: 7
            }
        ],
        21: [
            function (e, t, r) {
                "use strict";
                t.exports = function () {
                    var e = window.document.location.protocol;
                    "http:" !== e && "https:" !== e && (e = "http:");
                    return e
                }
            }, {}
        ],
        22: [
            function (e, t, r) {
                "use strict";
                t.exports = function (e, t) {
                    /\?/.test(e) ? e += "&" : e += "?";
                    return e + o(t)
                };
                var o = e(13)
            }, {
                13: 13
            }
        ],
        23: [
            function (e, t, r) {
                "use strict";
                t.exports = function (e, t, r) {
                    if ("GET" !== t.method) return void r(new Error("Method " + t.method + " " + e + " is not supported by JSONP."));
                    t.debug("JSONP: start");
                    var i = !1,
                        s = !1;
                    n += 1;
                    var a = document.getElementsByTagName("head")[0],
                        c = document.createElement("script"),
                        u = "algoliaJSONP_" + n,
                        l = !1;
                    window[u] = function (e) {
                        ! function () {
                            try {
                                delete window[u], delete window[u + "_loaded"]
                            } catch (e) {
                                window[u] = window[u + "_loaded"] = void 0
                            }
                        }(), s ? t.debug("JSONP: Late answer, ignoring") : (i = !0, h(), r(null, {
                            body: e
                        }))
                    }, e += "&callback=" + u, t.jsonBody && t.jsonBody.params && (e += "&" + t.jsonBody.params);
                    var p = setTimeout(function () {
                        t.debug("JSONP: Script timeout"), s = !0, h(), r(new o.RequestTimeout)
                    }, t.timeouts.complete);
                    c.onreadystatechange = function () {
                        "loaded" !== this.readyState && "complete" !== this.readyState || d()
                    }, c.onload = d, c.onerror = function () {
                        if (t.debug("JSONP: Script error"), l || s) return;
                        h(), r(new o.JSONPScriptError)
                    }, c.async = !0, c.defer = !0, c.src = e, a.appendChild(c);

                    function d() {
                        t.debug("JSONP: success"), l || s || (l = !0, i || (t.debug("JSONP: Fail. Script loaded but did not call the callback"), h(), r(new o.JSONPScriptFail)))
                    }

                    function h() {
                        clearTimeout(p), c.onload = null, c.onreadystatechange = null, c.onerror = null, a.removeChild(c)
                    }
                };
                var o = e(28),
                    n = 0
            }, {
                28: 28
            }
        ],
        24: [
            function (e, t, r) {
                t.exports = function (e, t) {
                    return function (r, n, i) {
                        if ("function" == typeof r && "object" == typeof n || "object" == typeof i) throw new o.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
                        0 === arguments.length || "function" == typeof r ? (i = r, r = "") : 1 !== arguments.length && "function" != typeof n || (i = n, n = void 0), "object" == typeof r && null !== r ? (n = r, r = void 0) : void 0 !== r && null !== r || (r = "");
                        var s = "";
                        void 0 !== r && (s += e + "=" + encodeURIComponent(r));
                        var a;
                        return void 0 !== n && (n.additionalUA && (a = n.additionalUA, delete n.additionalUA), s = this.as._getSearchParams(n, s)), this._search(s, t, i, a)
                    }
                };
                var o = e(28)
            }, {
                28: 28
            }
        ],
        25: [
            function (e, t, r) {
                t.exports = function (e) {
                    return JSON.parse(JSON.stringify(e))
                }
            }, {}
        ],
        26: [
            function (e, t, r) {
                t.exports = function (e, t) {
                    var r = !1;
                    return function () {
                        return r || (console.warn(t), r = !0), e.apply(this, arguments)
                    }
                }
            }, {}
        ],
        27: [
            function (e, t, r) {
                t.exports = function (e, t) {
                    return "algoliasearch: `" + e + "` was replaced by `" + t + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + e.toLowerCase().replace(/[\.\(\)]/g, "")
                }
            }, {}
        ],
        28: [
            function (e, t, r) {
                "use strict";
                var o = e(7);

                function n(t, r) {
                    var o = e(5),
                        n = this;
                    "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : n.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = t || "Unknown error", r && o(r, function (e, t) {
                        n[t] = e
                    })
                }
                o(n, Error);

                function i(e, t) {
                    function r() {
                        var r = Array.prototype.slice.call(arguments, 0);
                        "string" != typeof r[0] && r.unshift(t), n.apply(this, r), this.name = "AlgoliaSearch" + e + "Error"
                    }
                    return o(r, n), r
                }
                t.exports = {
                    AlgoliaSearchError: n,
                    UnparsableJSON: i("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
                    RequestTimeout: i("RequestTimeout", "Request timedout before getting a response"),
                    Network: i("Network", "Network issue, see err.more for details"),
                    JSONPScriptFail: i("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
                    JSONPScriptError: i("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
                    Unknown: i("Unknown", "Unknown error occured")
                }
            }, {
                5: 5,
                7: 7
            }
        ],
        29: [
            function (e, t, r) {
                t.exports = function (e, t) {
                    t(e, 0)
                }
            }, {}
        ],
        30: [
            function (e, t, r) {
                var o = e(5);
                t.exports = function (e, t) {
                    var r = [];
                    return o(e, function (o, n) {
                        r.push(t(o, n, e))
                    }), r
                }
            }, {
                5: 5
            }
        ],
        31: [
            function (e, t, r) {
                var o = e(5);
                t.exports = function e(t) {
                    var r = Array.prototype.slice.call(arguments);
                    return o(r, function (r) {
                        for (var o in r) r.hasOwnProperty(o) && ("object" == typeof t[o] && "object" == typeof r[o] ? t[o] = e({}, t[o], r[o]) : void 0 !== r[o] && (t[o] = r[o]))
                    }), t
                }
            }, {
                5: 5
            }
        ],
        32: [
            function (e, t, r) {
                t.exports = function (t, r) {
                    var o = e(10),
                        n = {};
                    return e(5)(o(t), function (e) {
                        !0 !== r(e) && (n[e] = t[e])
                    }), n
                }
            }, {
                10: 10,
                5: 5
            }
        ],
        33: [
            function (e, t, r) {
                t.exports = function (t) {
                    return function (r, n, i) {
                        var s = e(25);
                        (i = i && s(i) || {}).hosts = i.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" != typeof r && void 0 !== r || (r = "", n = "", i._allowEmptyCredentials = !0);
                        var a = t(r, n, i),
                            c = a.initIndex("places");
                        return c.search = o("query", "/1/places/query"), c.getObject = function (e, t) {
                            return this.as._jsonRequest({
                                method: "GET",
                                url: "/1/places/" + encodeURIComponent(e),
                                hostType: "read",
                                callback: t
                            })
                        }, c
                    }
                };
                var o = e(24)
            }, {
                24: 24,
                25: 25
            }
        ],
        34: [
            function (e, t, r) {
                (function (r) {
                    var o, n = e(1)("algoliasearch:src/hostIndexState.js"),
                        i = "algoliasearch-client-js",
                        s = {
                            state: {},
                            set: function (e, t) {
                                return this.state[e] = t, this.state[e]
                            }, get: function (e) {
                                return this.state[e] || null
                            }
                        },
                        a = {
                            set: function (e, t) {
                                s.set(e, t);
                                try {
                                    var o = JSON.parse(r.localStorage[i]);
                                    return o[e] = t, r.localStorage[i] = JSON.stringify(o), o[e]
                                } catch (t) {
                                    return c(e, t)
                                }
                            }, get: function (e) {
                                try {
                                    return JSON.parse(r.localStorage[i])[e] || null
                                } catch (t) {
                                    return c(e, t)
                                }
                            }
                        };

                    function c(e, t) {
                        return n("localStorage failed with", t),
                            function () {
                                try {
                                    r.localStorage.removeItem(i)
                                } catch (e) {}
                            }(), (o = s).get(e)
                    }
                    o = l() ? a : s, t.exports = {
                        get: u,
                        set: u,
                        supportsLocalStorage: l
                    };

                    function u(e, t) {
                        return 1 === arguments.length ? o.get(e) : o.set(e, t)
                    }

                    function l() {
                        try {
                            return "localStorage" in r && null !== r.localStorage && (r.localStorage[i] || r.localStorage.setItem(i, JSON.stringify({})), !0)
                        } catch (e) {
                            return !1
                        }
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                1: 1
            }
        ],
        35: [
            function (e, t, r) {
                "use strict";
                t.exports = "3.24.9"
            }, {}
        ]
    }, {}, [19])(19)
});