/*!
 * LMV v7.91.0
 *
 * Copyright 2023 Autodesk, Inc.
 * All rights reserved.
 *
 * This computer source code and related instructions and comments are the
 * unpublished confidential and proprietary information of Autodesk, Inc.
 * and are protected under Federal copyright and state trade secret law.
 * They may not be disclosed to, copied or used by any third party without
 * the prior written consent of Autodesk, Inc.
 *
 * Autodesk Viewer SDK Usage Limitations:
 *
 * The Autodesk Viewer SDK JavaScript must be delivered from an
 * Autodesk-hosted URL.
 */
(()=>{
        var e = {
            8891: e=>{
                "use strict";
                var t, r = {
                    DEBUG: !1,
                    LIB_VERSION: "2.45.0"
                };
                if ("undefined" == typeof window) {
                    var i = {
                        hostname: ""
                    };
                    t = {
                        navigator: {
                            userAgent: ""
                        },
                        document: {
                            location: i,
                            referrer: ""
                        },
                        screen: {
                            width: 0,
                            height: 0
                        },
                        location: i
                    }
                } else
                    t = window;
                var o, n, s, a, c, p, u, _, h, l, d, f = Array.prototype, g = Function.prototype, y = Object.prototype, m = f.slice, v = y.toString, b = y.hasOwnProperty, k = t.console, x = t.navigator, w = t.document, S = t.opera, q = t.screen, E = x.userAgent, O = g.bind, I = f.forEach, A = f.indexOf, T = f.map, D = Array.isArray, $ = {}, B = {
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                }, U = {
                    log: function() {
                        if (r.DEBUG && !B.isUndefined(k) && k)
                            try {
                                k.log.apply(k, arguments)
                            } catch (e) {
                                B.each(arguments, (function(e) {
                                        k.log(e)
                                    }
                                ))
                            }
                    },
                    warn: function() {
                        if (r.DEBUG && !B.isUndefined(k) && k) {
                            var e = ["Mixpanel warning:"].concat(B.toArray(arguments));
                            try {
                                k.warn.apply(k, e)
                            } catch (t) {
                                B.each(e, (function(e) {
                                        k.warn(e)
                                    }
                                ))
                            }
                        }
                    },
                    error: function() {
                        if (r.DEBUG && !B.isUndefined(k) && k) {
                            var e = ["Mixpanel error:"].concat(B.toArray(arguments));
                            try {
                                k.error.apply(k, e)
                            } catch (t) {
                                B.each(e, (function(e) {
                                        k.error(e)
                                    }
                                ))
                            }
                        }
                    },
                    critical: function() {
                        if (!B.isUndefined(k) && k) {
                            var e = ["Mixpanel error:"].concat(B.toArray(arguments));
                            try {
                                k.error.apply(k, e)
                            } catch (t) {
                                B.each(e, (function(e) {
                                        k.error(e)
                                    }
                                ))
                            }
                        }
                    }
                }, j = function(e, t) {
                    return function() {
                        return arguments[0] = "[" + t + "] " + arguments[0],
                            e.apply(U, arguments)
                    }
                }, M = function(e) {
                    return {
                        log: j(U.log, e),
                        error: j(U.error, e),
                        critical: j(U.critical, e)
                    }
                };
                B.bind = function(e, t) {
                    var r, i;
                    if (O && e.bind === O)
                        return O.apply(e, m.call(arguments, 1));
                    if (!B.isFunction(e))
                        throw new TypeError;
                    return r = m.call(arguments, 2),
                        i = function() {
                            if (!(this instanceof i))
                                return e.apply(t, r.concat(m.call(arguments)));
                            var o = {};
                            o.prototype = e.prototype;
                            var n = new o;
                            o.prototype = null;
                            var s = e.apply(n, r.concat(m.call(arguments)));
                            return Object(s) === s ? s : n
                        }
                        ,
                        i
                }
                    ,
                    B.each = function(e, t, r) {
                        if (null != e)
                            if (I && e.forEach === I)
                                e.forEach(t, r);
                            else if (e.length === +e.length) {
                                for (var i = 0, o = e.length; i < o; i++)
                                    if (i in e && t.call(r, e[i], i, e) === $)
                                        return
                            } else
                                for (var n in e)
                                    if (b.call(e, n) && t.call(r, e[n], n, e) === $)
                                        return
                    }
                    ,
                    B.extend = function(e) {
                        return B.each(m.call(arguments, 1), (function(t) {
                                for (var r in t)
                                    void 0 !== t[r] && (e[r] = t[r])
                            }
                        )),
                            e
                    }
                    ,
                    B.isArray = D || function(e) {
                        return "[object Array]" === v.call(e)
                    }
                    ,
                    B.isFunction = function(e) {
                        try {
                            return /^\s*\bfunction\b/.test(e)
                        } catch (e) {
                            return !1
                        }
                    }
                    ,
                    B.isArguments = function(e) {
                        return !(!e || !b.call(e, "callee"))
                    }
                    ,
                    B.toArray = function(e) {
                        return e ? e.toArray ? e.toArray() : B.isArray(e) || B.isArguments(e) ? m.call(e) : B.values(e) : []
                    }
                    ,
                    B.map = function(e, t, r) {
                        if (T && e.map === T)
                            return e.map(t, r);
                        var i = [];
                        return B.each(e, (function(e) {
                                i.push(t.call(r, e))
                            }
                        )),
                            i
                    }
                    ,
                    B.keys = function(e) {
                        var t = [];
                        return null === e || B.each(e, (function(e, r) {
                                t[t.length] = r
                            }
                        )),
                            t
                    }
                    ,
                    B.values = function(e) {
                        var t = [];
                        return null === e || B.each(e, (function(e) {
                                t[t.length] = e
                            }
                        )),
                            t
                    }
                    ,
                    B.include = function(e, t) {
                        var r = !1;
                        return null === e ? r : A && e.indexOf === A ? -1 != e.indexOf(t) : (B.each(e, (function(e) {
                                if (r || (r = e === t))
                                    return $
                            }
                        )),
                            r)
                    }
                    ,
                    B.includes = function(e, t) {
                        return -1 !== e.indexOf(t)
                    }
                    ,
                    B.inherit = function(e, t) {
                        return e.prototype = new t,
                            e.prototype.constructor = e,
                            e.superclass = t.prototype,
                            e
                    }
                    ,
                    B.isObject = function(e) {
                        return e === Object(e) && !B.isArray(e)
                    }
                    ,
                    B.isEmptyObject = function(e) {
                        if (B.isObject(e)) {
                            for (var t in e)
                                if (b.call(e, t))
                                    return !1;
                            return !0
                        }
                        return !1
                    }
                    ,
                    B.isUndefined = function(e) {
                        return void 0 === e
                    }
                    ,
                    B.isString = function(e) {
                        return "[object String]" == v.call(e)
                    }
                    ,
                    B.isDate = function(e) {
                        return "[object Date]" == v.call(e)
                    }
                    ,
                    B.isNumber = function(e) {
                        return "[object Number]" == v.call(e)
                    }
                    ,
                    B.isElement = function(e) {
                        return !(!e || 1 !== e.nodeType)
                    }
                    ,
                    B.encodeDates = function(e) {
                        return B.each(e, (function(t, r) {
                                B.isDate(t) ? e[r] = B.formatDate(t) : B.isObject(t) && (e[r] = B.encodeDates(t))
                            }
                        )),
                            e
                    }
                    ,
                    B.timestamp = function() {
                        return Date.now = Date.now || function() {
                            return +new Date
                        }
                            ,
                            Date.now()
                    }
                    ,
                    B.formatDate = function(e) {
                        function t(e) {
                            return e < 10 ? "0" + e : e
                        }
                        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
                    }
                    ,
                    B.strip_empty_properties = function(e) {
                        var t = {};
                        return B.each(e, (function(e, r) {
                                B.isString(e) && e.length > 0 && (t[r] = e)
                            }
                        )),
                            t
                    }
                    ,
                    B.truncate = function(e, t) {
                        var r;
                        return "string" == typeof e ? r = e.slice(0, t) : B.isArray(e) ? (r = [],
                            B.each(e, (function(e) {
                                    r.push(B.truncate(e, t))
                                }
                            ))) : B.isObject(e) ? (r = {},
                            B.each(e, (function(e, i) {
                                    r[i] = B.truncate(e, t)
                                }
                            ))) : r = e,
                            r
                    }
                    ,
                    B.JSONEncode = function(e) {
                        var t = function(e) {
                            var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
                                , r = {
                                "\b": "\\b",
                                "\t": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            };
                            return t.lastIndex = 0,
                                t.test(e) ? '"' + e.replace(t, (function(e) {
                                        var t = r[e];
                                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                                    }
                                )) + '"' : '"' + e + '"'
                        }
                            , r = function(e, i) {
                            var o = ""
                                , n = 0
                                , s = ""
                                , a = ""
                                , c = 0
                                , p = o
                                , u = []
                                , _ = i[e];
                            switch (_ && "object" == typeof _ && "function" == typeof _.toJSON && (_ = _.toJSON(e)),
                                typeof _) {
                                case "string":
                                    return t(_);
                                case "number":
                                    return isFinite(_) ? String(_) : "null";
                                case "boolean":
                                case "null":
                                    return String(_);
                                case "object":
                                    if (!_)
                                        return "null";
                                    if (o += "    ",
                                        u = [],
                                    "[object Array]" === v.apply(_)) {
                                        for (c = _.length,
                                                 n = 0; n < c; n += 1)
                                            u[n] = r(n, _) || "null";
                                        return a = 0 === u.length ? "[]" : o ? "[\n" + o + u.join(",\n" + o) + "\n" + p + "]" : "[" + u.join(",") + "]",
                                            o = p,
                                            a
                                    }
                                    for (s in _)
                                        b.call(_, s) && (a = r(s, _)) && u.push(t(s) + (o ? ": " : ":") + a);
                                    return a = 0 === u.length ? "{}" : o ? "{" + u.join(",") + p + "}" : "{" + u.join(",") + "}",
                                        o = p,
                                        a
                            }
                        };
                        return r("", {
                            "": e
                        })
                    }
                    ,
                    B.JSONDecode = (c = {
                            '"': '"',
                            "\\": "\\",
                            "/": "/",
                            b: "\b",
                            f: "\f",
                            n: "\n",
                            r: "\r",
                            t: "\t"
                        },
                            p = function(e) {
                                var t = new SyntaxError(e);
                                throw t.at = o,
                                    t.text = s,
                                    t
                            }
                            ,
                            u = function(e) {
                                return e && e !== n && p("Expected '" + e + "' instead of '" + n + "'"),
                                    n = s.charAt(o),
                                    o += 1,
                                    n
                            }
                            ,
                            _ = function() {
                                var e, t = "";
                                for ("-" === n && (t = "-",
                                    u("-")); n >= "0" && n <= "9"; )
                                    t += n,
                                        u();
                                if ("." === n)
                                    for (t += "."; u() && n >= "0" && n <= "9"; )
                                        t += n;
                                if ("e" === n || "E" === n)
                                    for (t += n,
                                             u(),
                                         "-" !== n && "+" !== n || (t += n,
                                             u()); n >= "0" && n <= "9"; )
                                        t += n,
                                            u();
                                if (e = +t,
                                    isFinite(e))
                                    return e;
                                p("Bad number")
                            }
                            ,
                            h = function() {
                                var e, t, r, i = "";
                                if ('"' === n)
                                    for (; u(); ) {
                                        if ('"' === n)
                                            return u(),
                                                i;
                                        if ("\\" === n)
                                            if (u(),
                                            "u" === n) {
                                                for (r = 0,
                                                         t = 0; t < 4 && (e = parseInt(u(), 16),
                                                    isFinite(e)); t += 1)
                                                    r = 16 * r + e;
                                                i += String.fromCharCode(r)
                                            } else {
                                                if ("string" != typeof c[n])
                                                    break;
                                                i += c[n]
                                            }
                                        else
                                            i += n
                                    }
                                p("Bad string")
                            }
                            ,
                            l = function() {
                                for (; n && n <= " "; )
                                    u()
                            }
                            ,
                            a = function() {
                                switch (l(),
                                    n) {
                                    case "{":
                                        return function() {
                                            var e, t = {};
                                            if ("{" === n) {
                                                if (u("{"),
                                                    l(),
                                                "}" === n)
                                                    return u("}"),
                                                        t;
                                                for (; n; ) {
                                                    if (e = h(),
                                                        l(),
                                                        u(":"),
                                                    Object.hasOwnProperty.call(t, e) && p('Duplicate key "' + e + '"'),
                                                        t[e] = a(),
                                                        l(),
                                                    "}" === n)
                                                        return u("}"),
                                                            t;
                                                    u(","),
                                                        l()
                                                }
                                            }
                                            p("Bad object")
                                        }();
                                    case "[":
                                        return function() {
                                            var e = [];
                                            if ("[" === n) {
                                                if (u("["),
                                                    l(),
                                                "]" === n)
                                                    return u("]"),
                                                        e;
                                                for (; n; ) {
                                                    if (e.push(a()),
                                                        l(),
                                                    "]" === n)
                                                        return u("]"),
                                                            e;
                                                    u(","),
                                                        l()
                                                }
                                            }
                                            p("Bad array")
                                        }();
                                    case '"':
                                        return h();
                                    case "-":
                                        return _();
                                    default:
                                        return n >= "0" && n <= "9" ? _() : function() {
                                            switch (n) {
                                                case "t":
                                                    return u("t"),
                                                        u("r"),
                                                        u("u"),
                                                        u("e"),
                                                        !0;
                                                case "f":
                                                    return u("f"),
                                                        u("a"),
                                                        u("l"),
                                                        u("s"),
                                                        u("e"),
                                                        !1;
                                                case "n":
                                                    return u("n"),
                                                        u("u"),
                                                        u("l"),
                                                        u("l"),
                                                        null
                                            }
                                            p('Unexpected "' + n + '"')
                                        }()
                                }
                            }
                            ,
                            function(e) {
                                var t;
                                return s = e,
                                    o = 0,
                                    n = " ",
                                    t = a(),
                                    l(),
                                n && p("Syntax error"),
                                    t
                            }
                    ),
                    B.base64Encode = function(e) {
                        var t, r, i, o, n, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, c = 0, p = "", u = [];
                        if (!e)
                            return e;
                        e = B.utf8Encode(e);
                        do {
                            t = (n = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63,
                                r = n >> 12 & 63,
                                i = n >> 6 & 63,
                                o = 63 & n,
                                u[c++] = s.charAt(t) + s.charAt(r) + s.charAt(i) + s.charAt(o)
                        } while (a < e.length);
                        switch (p = u.join(""),
                        e.length % 3) {
                            case 1:
                                p = p.slice(0, -2) + "==";
                                break;
                            case 2:
                                p = p.slice(0, -1) + "="
                        }
                        return p
                    }
                    ,
                    B.utf8Encode = function(e) {
                        var t, r, i, o, n = "";
                        for (t = r = 0,
                                 i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
                                 o = 0; o < i; o++) {
                            var s = e.charCodeAt(o)
                                , a = null;
                            s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128),
                            null !== a && (r > t && (n += e.substring(t, r)),
                                n += a,
                                t = r = o + 1)
                        }
                        return r > t && (n += e.substring(t, e.length)),
                            n
                    }
                    ,
                    B.UUID = (d = function() {
                            for (var e = 1 * new Date, t = 0; e == 1 * new Date; )
                                t++;
                            return e.toString(16) + t.toString(16)
                        }
                            ,
                            function() {
                                var e = (q.height * q.width).toString(16);
                                return d() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
                                    var e, t, r = E, i = [], o = 0;
                                    function n(e, t) {
                                        var r, o = 0;
                                        for (r = 0; r < t.length; r++)
                                            o |= i[r] << 8 * r;
                                        return e ^ o
                                    }
                                    for (e = 0; e < r.length; e++)
                                        t = r.charCodeAt(e),
                                            i.unshift(255 & t),
                                        i.length >= 4 && (o = n(o, i),
                                            i = []);
                                    return i.length > 0 && (o = n(o, i)),
                                        o.toString(16)
                                }() + "-" + e + "-" + d()
                            }
                    );
                var P = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
                B.isBlockedUA = function(e) {
                    var t;
                    for (e = e.toLowerCase(),
                             t = 0; t < P.length; t++)
                        if (-1 !== e.indexOf(P[t]))
                            return !0;
                    return !1
                }
                    ,
                    B.HTTPBuildQuery = function(e, t) {
                        var r, i, o = [];
                        return B.isUndefined(t) && (t = "&"),
                            B.each(e, (function(e, t) {
                                    r = encodeURIComponent(e.toString()),
                                        i = encodeURIComponent(t),
                                        o[o.length] = i + "=" + r
                                }
                            )),
                            o.join(t)
                    }
                    ,
                    B.getQueryParam = function(e, t) {
                        t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                        var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                        if (null === r || r && "string" != typeof r[1] && r[1].length)
                            return "";
                        var i = r[1];
                        try {
                            i = decodeURIComponent(i)
                        } catch (e) {
                            U.error("Skipping decoding for malformed query param: " + i)
                        }
                        return i.replace(/\+/g, " ")
                    }
                    ,
                    B.cookie = {
                        get: function(e) {
                            for (var t = e + "=", r = w.cookie.split(";"), i = 0; i < r.length; i++) {
                                for (var o = r[i]; " " == o.charAt(0); )
                                    o = o.substring(1, o.length);
                                if (0 === o.indexOf(t))
                                    return decodeURIComponent(o.substring(t.length, o.length))
                            }
                            return null
                        },
                        parse: function(e) {
                            var t;
                            try {
                                t = B.JSONDecode(B.cookie.get(e)) || {}
                            } catch (e) {}
                            return t
                        },
                        set_seconds: function(e, t, r, i, o, n, s) {
                            var a = ""
                                , c = ""
                                , p = "";
                            if (s)
                                a = "; domain=" + s;
                            else if (i) {
                                var u = J(w.location.hostname);
                                a = u ? "; domain=." + u : ""
                            }
                            if (r) {
                                var _ = new Date;
                                _.setTime(_.getTime() + 1e3 * r),
                                    c = "; expires=" + _.toGMTString()
                            }
                            n && (o = !0,
                                p = "; SameSite=None"),
                            o && (p += "; secure"),
                                w.cookie = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p
                        },
                        set: function(e, t, r, i, o, n, s) {
                            var a = ""
                                , c = ""
                                , p = "";
                            if (s)
                                a = "; domain=" + s;
                            else if (i) {
                                var u = J(w.location.hostname);
                                a = u ? "; domain=." + u : ""
                            }
                            if (r) {
                                var _ = new Date;
                                _.setTime(_.getTime() + 24 * r * 60 * 60 * 1e3),
                                    c = "; expires=" + _.toGMTString()
                            }
                            n && (o = !0,
                                p = "; SameSite=None"),
                            o && (p += "; secure");
                            var h = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p;
                            return w.cookie = h,
                                h
                        },
                        remove: function(e, t, r) {
                            B.cookie.set(e, "", -1, t, !1, !1, r)
                        }
                    };
                var C = null
                    , N = function(e, t) {
                    if (null !== C && !t)
                        return C;
                    var r = !0;
                    try {
                        e = e || window.localStorage;
                        var i = "__mplss_" + R(8);
                        e.setItem(i, "xyz"),
                        "xyz" !== e.getItem(i) && (r = !1),
                            e.removeItem(i)
                    } catch (e) {
                        r = !1
                    }
                    return C = r,
                        r
                };
                B.localStorage = {
                    is_supported: function(e) {
                        var t = N(null, e);
                        return t || U.error("localStorage unsupported; falling back to cookie store"),
                            t
                    },
                    error: function(e) {
                        U.error("localStorage error: " + e)
                    },
                    get: function(e) {
                        try {
                            return window.localStorage.getItem(e)
                        } catch (e) {
                            B.localStorage.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return B.JSONDecode(B.localStorage.get(e)) || {}
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            window.localStorage.setItem(e, t)
                        } catch (e) {
                            B.localStorage.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            window.localStorage.removeItem(e)
                        } catch (e) {
                            B.localStorage.error(e)
                        }
                    }
                },
                    B.register_event = function() {
                        function e(t) {
                            return t && (t.preventDefault = e.preventDefault,
                                t.stopPropagation = e.stopPropagation),
                                t
                        }
                        return e.preventDefault = function() {
                            this.returnValue = !1
                        }
                            ,
                            e.stopPropagation = function() {
                                this.cancelBubble = !0
                            }
                            ,
                            function(t, r, i, o, n) {
                                if (t)
                                    if (t.addEventListener && !o)
                                        t.addEventListener(r, i, !!n);
                                    else {
                                        var s = "on" + r
                                            , a = t[s];
                                        t[s] = function(t, r, i) {
                                            return function(o) {
                                                if (o = o || e(window.event)) {
                                                    var n, s, a = !0;
                                                    return B.isFunction(i) && (n = i(o)),
                                                        s = r.call(t, o),
                                                    !1 !== n && !1 !== s || (a = !1),
                                                        a
                                                }
                                            }
                                        }(t, i, a)
                                    }
                                else
                                    U.error("No valid element provided to register_event")
                            }
                    }();
                var F = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
                B.dom_query = function() {
                    function e(e) {
                        return e.all ? e.all : e.getElementsByTagName("*")
                    }
                    var t = /[\t\r\n]/g;
                    function r(e, r) {
                        var i = " " + r + " ";
                        return (" " + e.className + " ").replace(t, " ").indexOf(i) >= 0
                    }
                    function i(t) {
                        if (!w.getElementsByTagName)
                            return [];
                        var i, o, n, s, a, c, p, u, _, h, l = t.split(" "), d = [w];
                        for (c = 0; c < l.length; c++)
                            if ((i = l[c].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
                                n = (o = i.split("#"))[0];
                                var f = o[1]
                                    , g = w.getElementById(f);
                                if (!g || n && g.nodeName.toLowerCase() != n)
                                    return [];
                                d = [g]
                            } else if (i.indexOf(".") > -1) {
                                n = (o = i.split("."))[0];
                                var y = o[1];
                                for (n || (n = "*"),
                                         s = [],
                                         a = 0,
                                         p = 0; p < d.length; p++)
                                    for (_ = "*" == n ? e(d[p]) : d[p].getElementsByTagName(n),
                                             u = 0; u < _.length; u++)
                                        s[a++] = _[u];
                                for (d = [],
                                         h = 0,
                                         p = 0; p < s.length; p++)
                                    s[p].className && B.isString(s[p].className) && r(s[p], y) && (d[h++] = s[p])
                            } else {
                                var m = i.match(F);
                                if (m) {
                                    n = m[1];
                                    var v, b = m[2], k = m[3], x = m[4];
                                    for (n || (n = "*"),
                                             s = [],
                                             a = 0,
                                             p = 0; p < d.length; p++)
                                        for (_ = "*" == n ? e(d[p]) : d[p].getElementsByTagName(n),
                                                 u = 0; u < _.length; u++)
                                            s[a++] = _[u];
                                    switch (d = [],
                                        h = 0,
                                        k) {
                                        case "=":
                                            v = function(e) {
                                                return e.getAttribute(b) == x
                                            }
                                            ;
                                            break;
                                        case "~":
                                            v = function(e) {
                                                return e.getAttribute(b).match(new RegExp("\\b" + x + "\\b"))
                                            }
                                            ;
                                            break;
                                        case "|":
                                            v = function(e) {
                                                return e.getAttribute(b).match(new RegExp("^" + x + "-?"))
                                            }
                                            ;
                                            break;
                                        case "^":
                                            v = function(e) {
                                                return 0 === e.getAttribute(b).indexOf(x)
                                            }
                                            ;
                                            break;
                                        case "$":
                                            v = function(e) {
                                                return e.getAttribute(b).lastIndexOf(x) == e.getAttribute(b).length - x.length
                                            }
                                            ;
                                            break;
                                        case "*":
                                            v = function(e) {
                                                return e.getAttribute(b).indexOf(x) > -1
                                            }
                                            ;
                                            break;
                                        default:
                                            v = function(e) {
                                                return e.getAttribute(b)
                                            }
                                    }
                                    for (d = [],
                                             h = 0,
                                             p = 0; p < s.length; p++)
                                        v(s[p]) && (d[h++] = s[p])
                                } else {
                                    for (n = i,
                                             s = [],
                                             a = 0,
                                             p = 0; p < d.length; p++)
                                        for (_ = d[p].getElementsByTagName(n),
                                                 u = 0; u < _.length; u++)
                                            s[a++] = _[u];
                                    d = s
                                }
                            }
                        return d
                    }
                    return function(e) {
                        return B.isElement(e) ? [e] : B.isObject(e) && !B.isUndefined(e.length) ? e : i.call(this, e)
                    }
                }(),
                    B.info = {
                        campaignParams: function() {
                            var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ")
                                , t = ""
                                , r = {};
                            return B.each(e, (function(e) {
                                    (t = B.getQueryParam(w.URL, e)).length && (r[e] = t)
                                }
                            )),
                                r
                        },
                        searchEngine: function(e) {
                            return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
                        },
                        searchInfo: function(e) {
                            var t = B.info.searchEngine(e)
                                , r = "yahoo" != t ? "q" : "p"
                                , i = {};
                            if (null !== t) {
                                i.$search_engine = t;
                                var o = B.getQueryParam(e, r);
                                o.length && (i.mp_keyword = o)
                            }
                            return i
                        },
                        browser: function(e, t, r) {
                            return t = t || "",
                                r || B.includes(e, " OPR/") ? B.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : B.includes(e, "IEMobile") || B.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : B.includes(e, "SamsungBrowser/") ? "Samsung Internet" : B.includes(e, "Edge") || B.includes(e, "Edg/") ? "Microsoft Edge" : B.includes(e, "FBIOS") ? "Facebook Mobile" : B.includes(e, "Chrome") ? "Chrome" : B.includes(e, "CriOS") ? "Chrome iOS" : B.includes(e, "UCWEB") || B.includes(e, "UCBrowser") ? "UC Browser" : B.includes(e, "FxiOS") ? "Firefox iOS" : B.includes(t, "Apple") ? B.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : B.includes(e, "Android") ? "Android Mobile" : B.includes(e, "Konqueror") ? "Konqueror" : B.includes(e, "Firefox") ? "Firefox" : B.includes(e, "MSIE") || B.includes(e, "Trident/") ? "Internet Explorer" : B.includes(e, "Gecko") ? "Mozilla" : ""
                        },
                        browserVersion: function(e, t, r) {
                            var i = {
                                "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                                "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                                "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                                "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                                Safari: /Version\/(\d+(\.\d+)?)/,
                                "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                                "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                                "Android Mobile": /android\s(\d+(\.\d+)?)/,
                                "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                                "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                                Mozilla: /rv:(\d+(\.\d+)?)/
                            }[B.info.browser(e, t, r)];
                            if (void 0 === i)
                                return null;
                            var o = e.match(i);
                            return o ? parseFloat(o[o.length - 2]) : null
                        },
                        os: function() {
                            var e = E;
                            return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
                        },
                        device: function(e) {
                            return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : ""
                        },
                        referringDomain: function(e) {
                            var t = e.split("/");
                            return t.length >= 3 ? t[2] : ""
                        },
                        properties: function() {
                            return B.extend(B.strip_empty_properties({
                                $os: B.info.os(),
                                $browser: B.info.browser(E, x.vendor, S),
                                $referrer: w.referrer,
                                $referring_domain: B.info.referringDomain(w.referrer),
                                $device: B.info.device(E)
                            }), {
                                $current_url: t.location.href,
                                $browser_version: B.info.browserVersion(E, x.vendor, S),
                                $screen_height: q.height,
                                $screen_width: q.width,
                                mp_lib: "web",
                                $lib_version: r.LIB_VERSION,
                                $insert_id: R(),
                                time: B.timestamp() / 1e3
                            })
                        },
                        people_properties: function() {
                            return B.extend(B.strip_empty_properties({
                                $os: B.info.os(),
                                $browser: B.info.browser(E, x.vendor, S)
                            }), {
                                $browser_version: B.info.browserVersion(E, x.vendor, S)
                            })
                        },
                        pageviewInfo: function(e) {
                            return B.strip_empty_properties({
                                mp_page: e,
                                mp_referrer: w.referrer,
                                mp_browser: B.info.browser(E, x.vendor, S),
                                mp_platform: B.info.os()
                            })
                        }
                    };
                var R = function(e) {
                    var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
                    return e ? t.substring(0, e) : t
                }
                    , z = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i
                    , L = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i
                    , J = function(e) {
                    var t = L
                        , r = e.split(".")
                        , i = r[r.length - 1];
                    (i.length > 4 || "com" === i || "org" === i) && (t = z);
                    var o = e.match(t);
                    return o ? o[0] : ""
                }
                    , Q = null
                    , H = null;
                "undefined" != typeof JSON && (Q = JSON.stringify,
                    H = JSON.parse),
                    Q = Q || B.JSONEncode,
                    H = H || B.JSONDecode,
                    B.toArray = B.toArray,
                    B.isObject = B.isObject,
                    B.JSONEncode = B.JSONEncode,
                    B.JSONDecode = B.JSONDecode,
                    B.isBlockedUA = B.isBlockedUA,
                    B.isEmptyObject = B.isEmptyObject,
                    B.info = B.info,
                    B.info.device = B.info.device,
                    B.info.browser = B.info.browser,
                    B.info.browserVersion = B.info.browserVersion,
                    B.info.properties = B.info.properties;
                var K = function() {};
                K.prototype.create_properties = function() {}
                    ,
                    K.prototype.event_handler = function() {}
                    ,
                    K.prototype.after_track_handler = function() {}
                    ,
                    K.prototype.init = function(e) {
                        return this.mp = e,
                            this
                    }
                    ,
                    K.prototype.track = function(e, t, r, i) {
                        var o = this
                            , n = B.dom_query(e);
                        if (0 !== n.length)
                            return B.each(n, (function(e) {
                                    B.register_event(e, this.override_event, (function(e) {
                                            var n = {}
                                                , s = o.create_properties(r, this)
                                                , a = o.mp.get_config("track_links_timeout");
                                            o.event_handler(e, this, n),
                                                window.setTimeout(o.track_callback(i, s, n, !0), a),
                                                o.mp.track(t, s, o.track_callback(i, s, n))
                                        }
                                    ))
                                }
                            ), this),
                                !0;
                        U.error("The DOM query (" + e + ") returned 0 elements")
                    }
                    ,
                    K.prototype.track_callback = function(e, t, r, i) {
                        i = i || !1;
                        var o = this;
                        return function() {
                            r.callback_fired || (r.callback_fired = !0,
                            e && !1 === e(i, t) || o.after_track_handler(t, r, i))
                        }
                    }
                    ,
                    K.prototype.create_properties = function(e, t) {
                        return "function" == typeof e ? e(t) : B.extend({}, e)
                    }
                ;
                var V = function() {
                    this.override_event = "click"
                };
                B.inherit(V, K),
                    V.prototype.create_properties = function(e, t) {
                        var r = V.superclass.create_properties.apply(this, arguments);
                        return t.href && (r.url = t.href),
                            r
                    }
                    ,
                    V.prototype.event_handler = function(e, t, r) {
                        r.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target,
                            r.href = t.href,
                        r.new_tab || e.preventDefault()
                    }
                    ,
                    V.prototype.after_track_handler = function(e, t) {
                        t.new_tab || setTimeout((function() {
                                window.location = t.href
                            }
                        ), 0)
                    }
                ;
                var G = function() {
                    this.override_event = "submit"
                };
                B.inherit(G, K),
                    G.prototype.event_handler = function(e, t, r) {
                        r.element = t,
                            e.preventDefault()
                    }
                    ,
                    G.prototype.after_track_handler = function(e, t) {
                        setTimeout((function() {
                                t.element.submit()
                            }
                        ), 0)
                    }
                ;
                var W = M("lock")
                    , X = function(e, t) {
                    t = t || {},
                        this.storageKey = e,
                        this.storage = t.storage || window.localStorage,
                        this.pollIntervalMS = t.pollIntervalMS || 100,
                        this.timeoutMS = t.timeoutMS || 2e3
                };
                X.prototype.withLock = function(e, t, r) {
                    r || "function" == typeof t || (r = t,
                        t = null);
                    var i = r || (new Date).getTime() + "|" + Math.random()
                        , o = (new Date).getTime()
                        , n = this.storageKey
                        , s = this.pollIntervalMS
                        , a = this.timeoutMS
                        , c = this.storage
                        , p = n + ":X"
                        , u = n + ":Y"
                        , _ = n + ":Z"
                        , h = function(e) {
                        t && t(e)
                    }
                        , l = function(e) {
                        if ((new Date).getTime() - o > a)
                            return W.error("Timeout waiting for mutex on " + n + "; clearing lock. [" + i + "]"),
                                c.removeItem(_),
                                c.removeItem(u),
                                void g();
                        setTimeout((function() {
                                try {
                                    e()
                                } catch (e) {
                                    h(e)
                                }
                            }
                        ), s * (Math.random() + .1))
                    }
                        , d = function(e, t) {
                        e() ? t() : l((function() {
                                d(e, t)
                            }
                        ))
                    }
                        , f = function() {
                        var e = c.getItem(u);
                        if (e && e !== i)
                            return !1;
                        if (c.setItem(u, i),
                        c.getItem(u) === i)
                            return !0;
                        if (!N(c, !0))
                            throw new Error("localStorage support dropped while acquiring lock");
                        return !1
                    }
                        , g = function() {
                        c.setItem(p, i),
                            d(f, (function() {
                                    c.getItem(p) !== i ? l((function() {
                                            c.getItem(u) === i ? d((function() {
                                                    return !c.getItem(_)
                                                }
                                            ), y) : g()
                                        }
                                    )) : y()
                                }
                            ))
                    }
                        , y = function() {
                        c.setItem(_, "1");
                        try {
                            e()
                        } finally {
                            c.removeItem(_),
                            c.getItem(u) === i && c.removeItem(u),
                            c.getItem(p) === i && c.removeItem(p)
                        }
                    };
                    try {
                        if (!N(c, !0))
                            throw new Error("localStorage support check failed");
                        g()
                    } catch (e) {
                        h(e)
                    }
                }
                ;
                var Y = M("batch")
                    , Z = function(e, t) {
                    t = t || {},
                        this.storageKey = e,
                        this.storage = t.storage || window.localStorage,
                        this.reportError = t.errorReporter || B.bind(Y.error, Y),
                        this.lock = new X(e,{
                            storage: this.storage
                        }),
                        this.pid = t.pid || null,
                        this.memQueue = []
                };
                Z.prototype.enqueue = function(e, t, r) {
                    var i = {
                        id: R(),
                        flushAfter: (new Date).getTime() + 2 * t,
                        payload: e
                    };
                    this.lock.withLock(B.bind((function() {
                            var t;
                            try {
                                var o = this.readFromStorage();
                                o.push(i),
                                (t = this.saveToStorage(o)) && this.memQueue.push(i)
                            } catch (r) {
                                this.reportError("Error enqueueing item", e),
                                    t = !1
                            }
                            r && r(t)
                        }
                    ), this), B.bind((function(e) {
                            this.reportError("Error acquiring storage lock", e),
                            r && r(!1)
                        }
                    ), this), this.pid)
                }
                    ,
                    Z.prototype.fillBatch = function(e) {
                        var t = this.memQueue.slice(0, e);
                        if (t.length < e) {
                            var r = this.readFromStorage();
                            if (r.length) {
                                var i = {};
                                B.each(t, (function(e) {
                                        i[e.id] = !0
                                    }
                                ));
                                for (var o = 0; o < r.length; o++) {
                                    var n = r[o];
                                    if ((new Date).getTime() > n.flushAfter && !i[n.id] && (n.orphaned = !0,
                                        t.push(n),
                                    t.length >= e))
                                        break
                                }
                            }
                        }
                        return t
                    }
                ;
                var ee = function(e, t) {
                    var r = [];
                    return B.each(e, (function(e) {
                            e.id && !t[e.id] && r.push(e)
                        }
                    )),
                        r
                };
                Z.prototype.removeItemsByID = function(e, t) {
                    var r = {};
                    B.each(e, (function(e) {
                            r[e] = !0
                        }
                    )),
                        this.memQueue = ee(this.memQueue, r);
                    var i = B.bind((function() {
                            var t;
                            try {
                                var i = this.readFromStorage();
                                if (i = ee(i, r),
                                    t = this.saveToStorage(i)) {
                                    i = this.readFromStorage();
                                    for (var o = 0; o < i.length; o++) {
                                        var n = i[o];
                                        if (n.id && r[n.id])
                                            return this.reportError("Item not removed from storage"),
                                                !1
                                    }
                                }
                            } catch (r) {
                                this.reportError("Error removing items", e),
                                    t = !1
                            }
                            return t
                        }
                    ), this);
                    this.lock.withLock((function() {
                            var e = i();
                            t && t(e)
                        }
                    ), B.bind((function(e) {
                            var r = !1;
                            if (this.reportError("Error acquiring storage lock", e),
                            !N(this.storage, !0) && !(r = i()))
                                try {
                                    this.storage.removeItem(this.storageKey)
                                } catch (e) {
                                    this.reportError("Error clearing queue", e)
                                }
                            t && t(r)
                        }
                    ), this), this.pid)
                }
                ;
                var te = function(e, t) {
                    var r = [];
                    return B.each(e, (function(e) {
                            var i = e.id;
                            if (i in t) {
                                var o = t[i];
                                null !== o && (e.payload = o,
                                    r.push(e))
                            } else
                                r.push(e)
                        }
                    )),
                        r
                };
                Z.prototype.updatePayloads = function(e, t) {
                    this.memQueue = te(this.memQueue, e),
                        this.lock.withLock(B.bind((function() {
                                var r;
                                try {
                                    var i = this.readFromStorage();
                                    i = te(i, e),
                                        r = this.saveToStorage(i)
                                } catch (t) {
                                    this.reportError("Error updating items", e),
                                        r = !1
                                }
                                t && t(r)
                            }
                        ), this), B.bind((function(e) {
                                this.reportError("Error acquiring storage lock", e),
                                t && t(!1)
                            }
                        ), this), this.pid)
                }
                    ,
                    Z.prototype.readFromStorage = function() {
                        var e;
                        try {
                            (e = this.storage.getItem(this.storageKey)) && (e = H(e),
                            B.isArray(e) || (this.reportError("Invalid storage entry:", e),
                                e = null))
                        } catch (t) {
                            this.reportError("Error retrieving queue", t),
                                e = null
                        }
                        return e || []
                    }
                    ,
                    Z.prototype.saveToStorage = function(e) {
                        try {
                            return this.storage.setItem(this.storageKey, Q(e)),
                                !0
                        } catch (e) {
                            return this.reportError("Error saving queue", e),
                                !1
                        }
                    }
                    ,
                    Z.prototype.clear = function() {
                        this.memQueue = [],
                            this.storage.removeItem(this.storageKey)
                    }
                ;
                var re = M("batch")
                    , ie = function(e, t) {
                    this.errorReporter = t.errorReporter,
                        this.queue = new Z(e,{
                            errorReporter: B.bind(this.reportError, this),
                            storage: t.storage
                        }),
                        this.libConfig = t.libConfig,
                        this.sendRequest = t.sendRequestFunc,
                        this.beforeSendHook = t.beforeSendHook,
                        this.stopAllBatching = t.stopAllBatchingFunc,
                        this.batchSize = this.libConfig.batch_size,
                        this.flushInterval = this.libConfig.batch_flush_interval_ms,
                        this.stopped = !this.libConfig.batch_autostart,
                        this.consecutiveRemovalFailures = 0
                };
                ie.prototype.enqueue = function(e, t) {
                    this.queue.enqueue(e, this.flushInterval, t)
                }
                    ,
                    ie.prototype.start = function() {
                        this.stopped = !1,
                            this.consecutiveRemovalFailures = 0,
                            this.flush()
                    }
                    ,
                    ie.prototype.stop = function() {
                        this.stopped = !0,
                        this.timeoutID && (clearTimeout(this.timeoutID),
                            this.timeoutID = null)
                    }
                    ,
                    ie.prototype.clear = function() {
                        this.queue.clear()
                    }
                    ,
                    ie.prototype.resetBatchSize = function() {
                        this.batchSize = this.libConfig.batch_size
                    }
                    ,
                    ie.prototype.resetFlush = function() {
                        this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
                    }
                    ,
                    ie.prototype.scheduleFlush = function(e) {
                        this.flushInterval = e,
                        this.stopped || (this.timeoutID = setTimeout(B.bind(this.flush, this), this.flushInterval))
                    }
                    ,
                    ie.prototype.flush = function(e) {
                        try {
                            if (this.requestInProgress)
                                return void re.log("Flush: Request already in progress");
                            e = e || {};
                            var t = this.libConfig.batch_request_timeout_ms
                                , r = (new Date).getTime()
                                , i = this.batchSize
                                , o = this.queue.fillBatch(i)
                                , n = []
                                , s = {};
                            if (B.each(o, (function(e) {
                                    var t = e.payload;
                                    this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)),
                                    t && n.push(t),
                                        s[e.id] = t
                                }
                            ), this),
                            n.length < 1)
                                return void this.resetFlush();
                            this.requestInProgress = !0;
                            var a = B.bind((function(n) {
                                    this.requestInProgress = !1;
                                    try {
                                        var a = !1;
                                        if (e.unloading)
                                            this.queue.updatePayloads(s);
                                        else if (B.isObject(n) && "timeout" === n.error && (new Date).getTime() - r >= t)
                                            this.reportError("Network timeout; retrying"),
                                                this.flush();
                                        else if (B.isObject(n) && n.xhr_req && (n.xhr_req.status >= 500 || 429 === n.xhr_req.status || "timeout" === n.error)) {
                                            var c = 2 * this.flushInterval
                                                , p = n.xhr_req.responseHeaders;
                                            if (p) {
                                                var u = p["Retry-After"];
                                                u && (c = 1e3 * parseInt(u, 10) || c)
                                            }
                                            c = Math.min(6e5, c),
                                                this.reportError("Error; retry in " + c + " ms"),
                                                this.scheduleFlush(c)
                                        } else if (B.isObject(n) && n.xhr_req && 413 === n.xhr_req.status)
                                            if (o.length > 1) {
                                                var _ = Math.max(1, Math.floor(i / 2));
                                                this.batchSize = Math.min(this.batchSize, _, o.length - 1),
                                                    this.reportError("413 response; reducing batch size to " + this.batchSize),
                                                    this.resetFlush()
                                            } else
                                                this.reportError("Single-event request too large; dropping", o),
                                                    this.resetBatchSize(),
                                                    a = !0;
                                        else
                                            a = !0;
                                        a && this.queue.removeItemsByID(B.map(o, (function(e) {
                                                return e.id
                                            }
                                        )), B.bind((function(e) {
                                                e ? (this.consecutiveRemovalFailures = 0,
                                                    this.flush()) : (this.reportError("Failed to remove items from queue"),
                                                    ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."),
                                                        this.stopAllBatching()) : this.resetFlush())
                                            }
                                        ), this))
                                    } catch (e) {
                                        this.reportError("Error handling API response", e),
                                            this.resetFlush()
                                    }
                                }
                            ), this)
                                , c = {
                                method: "POST",
                                verbose: !0,
                                ignore_json_errors: !0,
                                timeout_ms: t
                            };
                            e.unloading && (c.transport = "sendBeacon"),
                                re.log("MIXPANEL REQUEST:", n),
                                this.sendRequest(n, c, a)
                        } catch (e) {
                            this.reportError("Error flushing request queue", e),
                                this.resetFlush()
                        }
                    }
                    ,
                    ie.prototype.reportError = function(e, t) {
                        if (re.error.apply(re.error, arguments),
                            this.errorReporter)
                            try {
                                t instanceof Error || (t = new Error(e)),
                                    this.errorReporter(e, t)
                            } catch (t) {
                                re.error(t)
                            }
                    }
                ;
                function oe(e, t) {
                    fe(!0, e, t)
                }
                function ne(e, t) {
                    fe(!1, e, t)
                }
                function se(e, t) {
                    return "1" === de(e, t)
                }
                function ae(e, r) {
                    if (function(e) {
                        if (e && e.ignoreDnt)
                            return !1;
                        var r = e && e.window || t
                            , i = r.navigator || {}
                            , o = !1;
                        return B.each([i.doNotTrack, i.msDoNotTrack, r.doNotTrack], (function(e) {
                                B.includes([!0, 1, "1", "yes"], e) && (o = !0)
                            }
                        )),
                            o
                    }(r))
                        return U.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'),
                            !0;
                    var i = "0" === de(e, r);
                    return i && U.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."),
                        i
                }
                function ce(e) {
                    return ge(e, (function(e) {
                            return this.get_config(e)
                        }
                    ))
                }
                function pe(e) {
                    return ge(e, (function(e) {
                            return this._get_config(e)
                        }
                    ))
                }
                function ue(e) {
                    return ge(e, (function(e) {
                            return this._get_config(e)
                        }
                    ))
                }
                function _e(e, t) {
                    he(t = t || {}).remove(le(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
                }
                function he(e) {
                    return "localStorage" === (e = e || {}).persistenceType ? B.localStorage : B.cookie
                }
                function le(e, t) {
                    return ((t = t || {}).persistencePrefix || "__mp_opt_in_out_") + e
                }
                function de(e, t) {
                    return he(t).get(le(e, t))
                }
                function fe(e, t, r) {
                    B.isString(t) && t.length ? (he(r = r || {}).set(le(t, r), e ? 1 : 0, B.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain),
                    r.track && e && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
                        send_immediately: !0
                    })) : U.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
                }
                function ge(e, t) {
                    return function() {
                        var r = !1;
                        try {
                            var i = t.call(this, "token")
                                , o = t.call(this, "ignore_dnt")
                                , n = t.call(this, "opt_out_tracking_persistence_type")
                                , s = t.call(this, "opt_out_tracking_cookie_prefix")
                                , a = t.call(this, "window");
                            i && (r = ae(i, {
                                ignoreDnt: o,
                                persistenceType: n,
                                persistencePrefix: s,
                                window: a
                            }))
                        } catch (e) {
                            U.error("Unexpected error when checking tracking opt-out status: " + e)
                        }
                        if (!r)
                            return e.apply(this, arguments);
                        var c = arguments[arguments.length - 1];
                        "function" == typeof c && c(0)
                    }
                }
                var ye = "$set"
                    , me = "$set_once"
                    , ve = "$unset"
                    , be = "$add"
                    , ke = "$append"
                    , xe = "$union"
                    , we = "$remove"
                    , Se = {
                    set_action: function(e, t) {
                        var r = {}
                            , i = {};
                        return B.isObject(e) ? B.each(e, (function(e, t) {
                                this._is_reserved_property(t) || (i[t] = e)
                            }
                        ), this) : i[e] = t,
                            r.$set = i,
                            r
                    },
                    unset_action: function(e) {
                        var t = {}
                            , r = [];
                        return B.isArray(e) || (e = [e]),
                            B.each(e, (function(e) {
                                    this._is_reserved_property(e) || r.push(e)
                                }
                            ), this),
                            t.$unset = r,
                            t
                    },
                    set_once_action: function(e, t) {
                        var r = {}
                            , i = {};
                        return B.isObject(e) ? B.each(e, (function(e, t) {
                                this._is_reserved_property(t) || (i[t] = e)
                            }
                        ), this) : i[e] = t,
                            r.$set_once = i,
                            r
                    },
                    union_action: function(e, t) {
                        var r = {}
                            , i = {};
                        return B.isObject(e) ? B.each(e, (function(e, t) {
                                this._is_reserved_property(t) || (i[t] = B.isArray(e) ? e : [e])
                            }
                        ), this) : i[e] = B.isArray(t) ? t : [t],
                            r.$union = i,
                            r
                    },
                    append_action: function(e, t) {
                        var r = {}
                            , i = {};
                        return B.isObject(e) ? B.each(e, (function(e, t) {
                                this._is_reserved_property(t) || (i[t] = e)
                            }
                        ), this) : i[e] = t,
                            r.$append = i,
                            r
                    },
                    remove_action: function(e, t) {
                        var r = {}
                            , i = {};
                        return B.isObject(e) ? B.each(e, (function(e, t) {
                                this._is_reserved_property(t) || (i[t] = e)
                            }
                        ), this) : i[e] = t,
                            r.$remove = i,
                            r
                    },
                    delete_action: function() {
                        var e = {
                            $delete: ""
                        };
                        return e
                    }
                }
                    , qe = function() {};
                B.extend(qe.prototype, Se),
                    qe.prototype._init = function(e, t, r) {
                        this._mixpanel = e,
                            this._group_key = t,
                            this._group_id = r
                    }
                    ,
                    qe.prototype.set = ue((function(e, t, r) {
                            var i = this.set_action(e, t);
                            return B.isObject(e) && (r = t),
                                this._send_request(i, r)
                        }
                    )),
                    qe.prototype.set_once = ue((function(e, t, r) {
                            var i = this.set_once_action(e, t);
                            return B.isObject(e) && (r = t),
                                this._send_request(i, r)
                        }
                    )),
                    qe.prototype.unset = ue((function(e, t) {
                            var r = this.unset_action(e);
                            return this._send_request(r, t)
                        }
                    )),
                    qe.prototype.union = ue((function(e, t, r) {
                            B.isObject(e) && (r = t);
                            var i = this.union_action(e, t);
                            return this._send_request(i, r)
                        }
                    )),
                    qe.prototype.delete = ue((function(e) {
                            var t = this.delete_action();
                            return this._send_request(t, e)
                        }
                    )),
                    qe.prototype.remove = ue((function(e, t, r) {
                            var i = this.remove_action(e, t);
                            return this._send_request(i, r)
                        }
                    )),
                    qe.prototype._send_request = function(e, t) {
                        e.$group_key = this._group_key,
                            e.$group_id = this._group_id,
                            e.$token = this._get_config("token");
                        var r = B.encodeDates(e);
                        return this._mixpanel._track_or_batch({
                            type: "groups",
                            data: r,
                            endpoint: this._get_config("api_host") + "/groups/",
                            batcher: this._mixpanel.request_batchers.groups
                        }, t)
                    }
                    ,
                    qe.prototype._is_reserved_property = function(e) {
                        return "$group_key" === e || "$group_id" === e
                    }
                    ,
                    qe.prototype._get_config = function(e) {
                        return this._mixpanel.get_config(e)
                    }
                    ,
                    qe.prototype.toString = function() {
                        return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
                    }
                    ,
                    qe.prototype.remove = qe.prototype.remove,
                    qe.prototype.set = qe.prototype.set,
                    qe.prototype.set_once = qe.prototype.set_once,
                    qe.prototype.union = qe.prototype.union,
                    qe.prototype.unset = qe.prototype.unset,
                    qe.prototype.toString = qe.prototype.toString;
                var Ee = function() {};
                B.extend(Ee.prototype, Se),
                    Ee.prototype._init = function(e) {
                        this._mixpanel = e
                    }
                    ,
                    Ee.prototype.set = pe((function(e, t, r) {
                            var i = this.set_action(e, t);
                            return B.isObject(e) && (r = t),
                            this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer),
                                i.$set = B.extend({}, B.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), i.$set),
                                this._send_request(i, r)
                        }
                    )),
                    Ee.prototype.set_once = pe((function(e, t, r) {
                            var i = this.set_once_action(e, t);
                            return B.isObject(e) && (r = t),
                                this._send_request(i, r)
                        }
                    )),
                    Ee.prototype.unset = pe((function(e, t) {
                            var r = this.unset_action(e);
                            return this._send_request(r, t)
                        }
                    )),
                    Ee.prototype.increment = pe((function(e, t, r) {
                            var i = {}
                                , o = {};
                            return B.isObject(e) ? (B.each(e, (function(e, t) {
                                    if (!this._is_reserved_property(t)) {
                                        if (isNaN(parseFloat(e)))
                                            return void U.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                                        o[t] = e
                                    }
                                }
                            ), this),
                                r = t) : (B.isUndefined(t) && (t = 1),
                                o[e] = t),
                                i.$add = o,
                                this._send_request(i, r)
                        }
                    )),
                    Ee.prototype.append = pe((function(e, t, r) {
                            B.isObject(e) && (r = t);
                            var i = this.append_action(e, t);
                            return this._send_request(i, r)
                        }
                    )),
                    Ee.prototype.remove = pe((function(e, t, r) {
                            B.isObject(e) && (r = t);
                            var i = this.remove_action(e, t);
                            return this._send_request(i, r)
                        }
                    )),
                    Ee.prototype.union = pe((function(e, t, r) {
                            B.isObject(e) && (r = t);
                            var i = this.union_action(e, t);
                            return this._send_request(i, r)
                        }
                    )),
                    Ee.prototype.track_charge = pe((function(e, t, r) {
                            if (B.isNumber(e) || (e = parseFloat(e),
                                !isNaN(e)))
                                return this.append("$transactions", B.extend({
                                    $amount: e
                                }, t), r);
                            U.error("Invalid value passed to mixpanel.people.track_charge - must be a number")
                        }
                    )),
                    Ee.prototype.clear_charges = function(e) {
                        return this.set("$transactions", [], e)
                    }
                    ,
                    Ee.prototype.delete_user = function() {
                        if (this._identify_called()) {
                            var e = {
                                $delete: this._mixpanel.get_distinct_id()
                            };
                            return this._send_request(e)
                        }
                        U.error("mixpanel.people.delete_user() requires you to call identify() first")
                    }
                    ,
                    Ee.prototype.toString = function() {
                        return this._mixpanel.toString() + ".people"
                    }
                    ,
                    Ee.prototype._send_request = function(e, t) {
                        e.$token = this._get_config("token"),
                            e.$distinct_id = this._mixpanel.get_distinct_id();
                        var r = this._mixpanel.get_property("$device_id")
                            , i = this._mixpanel.get_property("$user_id")
                            , o = this._mixpanel.get_property("$had_persisted_distinct_id");
                        r && (e.$device_id = r),
                        i && (e.$user_id = i),
                        o && (e.$had_persisted_distinct_id = o);
                        var n = B.encodeDates(e);
                        return this._identify_called() ? this._mixpanel._track_or_batch({
                            type: "people",
                            data: n,
                            endpoint: this._get_config("api_host") + "/engage/",
                            batcher: this._mixpanel.request_batchers.people
                        }, t) : (this._enqueue(e),
                        B.isUndefined(t) || (this._get_config("verbose") ? t({
                            status: -1,
                            error: null
                        }) : t(-1)),
                            B.truncate(n, 255))
                    }
                    ,
                    Ee.prototype._get_config = function(e) {
                        return this._mixpanel.get_config(e)
                    }
                    ,
                    Ee.prototype._identify_called = function() {
                        return !0 === this._mixpanel._flags.identify_called
                    }
                    ,
                    Ee.prototype._enqueue = function(e) {
                        ye in e ? this._mixpanel.persistence._add_to_people_queue(ye, e) : me in e ? this._mixpanel.persistence._add_to_people_queue(me, e) : ve in e ? this._mixpanel.persistence._add_to_people_queue(ve, e) : be in e ? this._mixpanel.persistence._add_to_people_queue(be, e) : ke in e ? this._mixpanel.persistence._add_to_people_queue(ke, e) : we in e ? this._mixpanel.persistence._add_to_people_queue(we, e) : xe in e ? this._mixpanel.persistence._add_to_people_queue(xe, e) : U.error("Invalid call to _enqueue():", e)
                    }
                    ,
                    Ee.prototype._flush_one_queue = function(e, t, r, i) {
                        var o = this
                            , n = B.extend({}, this._mixpanel.persistence._get_queue(e))
                            , s = n;
                        B.isUndefined(n) || !B.isObject(n) || B.isEmptyObject(n) || (o._mixpanel.persistence._pop_from_people_queue(e, n),
                        i && (s = i(n)),
                            t.call(o, s, (function(t, i) {
                                    0 === t && o._mixpanel.persistence._add_to_people_queue(e, n),
                                    B.isUndefined(r) || r(t, i)
                                }
                            )))
                    }
                    ,
                    Ee.prototype._flush = function(e, t, r, i, o, n, s) {
                        var a = this
                            , c = this._mixpanel.persistence._get_queue(ke)
                            , p = this._mixpanel.persistence._get_queue(we);
                        if (this._flush_one_queue(ye, this.set, e),
                            this._flush_one_queue(me, this.set_once, i),
                            this._flush_one_queue(ve, this.unset, n, (function(e) {
                                    return B.keys(e)
                                }
                            )),
                            this._flush_one_queue(be, this.increment, t),
                            this._flush_one_queue(xe, this.union, o),
                        !B.isUndefined(c) && B.isArray(c) && c.length) {
                            for (var u, _ = function(e, t) {
                                0 === e && a._mixpanel.persistence._add_to_people_queue(ke, u),
                                B.isUndefined(r) || r(e, t)
                            }, h = c.length - 1; h >= 0; h--)
                                u = c.pop(),
                                B.isEmptyObject(u) || a.append(u, _);
                            a._mixpanel.persistence.save()
                        }
                        if (!B.isUndefined(p) && B.isArray(p) && p.length) {
                            for (var l, d = function(e, t) {
                                0 === e && a._mixpanel.persistence._add_to_people_queue(we, l),
                                B.isUndefined(s) || s(e, t)
                            }, f = p.length - 1; f >= 0; f--)
                                l = p.pop(),
                                B.isEmptyObject(l) || a.remove(l, d);
                            a._mixpanel.persistence.save()
                        }
                    }
                    ,
                    Ee.prototype._is_reserved_property = function(e) {
                        return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
                    }
                    ,
                    Ee.prototype.set = Ee.prototype.set,
                    Ee.prototype.set_once = Ee.prototype.set_once,
                    Ee.prototype.unset = Ee.prototype.unset,
                    Ee.prototype.increment = Ee.prototype.increment,
                    Ee.prototype.append = Ee.prototype.append,
                    Ee.prototype.remove = Ee.prototype.remove,
                    Ee.prototype.union = Ee.prototype.union,
                    Ee.prototype.track_charge = Ee.prototype.track_charge,
                    Ee.prototype.clear_charges = Ee.prototype.clear_charges,
                    Ee.prototype.delete_user = Ee.prototype.delete_user,
                    Ee.prototype.toString = Ee.prototype.toString;
                var Oe, Ie, Ae = "__mps", Te = "__mpso", De = "__mpus", $e = "__mpa", Be = "__mpap", Ue = "__mpr", je = "__mpu", Me = "$people_distinct_id", Pe = "__alias", Ce = "__timers", Ne = [Ae, Te, De, $e, Be, Ue, je, Me, Pe, Ce], Fe = function(e) {
                    this.props = {},
                        this.campaign_params_saved = !1,
                        e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
                    var t = e.persistence;
                    "cookie" !== t && "localStorage" !== t && (U.critical("Unknown persistence type " + t + "; falling back to cookie"),
                        t = e.persistence = "cookie"),
                        "localStorage" === t && B.localStorage.is_supported() ? this.storage = B.localStorage : this.storage = B.cookie,
                        this.load(),
                        this.update_config(e),
                        this.upgrade(e),
                        this.save()
                };
                Fe.prototype.properties = function() {
                    var e = {};
                    return B.each(this.props, (function(t, r) {
                            B.include(Ne, r) || (e[r] = t)
                        }
                    )),
                        e
                }
                    ,
                    Fe.prototype.load = function() {
                        if (!this.disabled) {
                            var e = this.storage.parse(this.name);
                            e && (this.props = B.extend({}, e))
                        }
                    }
                    ,
                    Fe.prototype.upgrade = function(e) {
                        var t, r, i = e.upgrade;
                        i && (t = "mp_super_properties",
                        "string" == typeof i && (t = i),
                            r = this.storage.parse(t),
                            this.storage.remove(t),
                            this.storage.remove(t, !0),
                        r && (this.props = B.extend(this.props, r.all, r.events))),
                        e.cookie_name || "mixpanel" === e.name || (t = "mp_" + e.token + "_" + e.name,
                        (r = this.storage.parse(t)) && (this.storage.remove(t),
                            this.storage.remove(t, !0),
                            this.register_once(r))),
                        this.storage === B.localStorage && (r = B.cookie.parse(this.name),
                            B.cookie.remove(this.name),
                            B.cookie.remove(this.name, !0),
                        r && this.register_once(r))
                    }
                    ,
                    Fe.prototype.save = function() {
                        this.disabled || this.storage.set(this.name, B.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
                    }
                    ,
                    Fe.prototype.remove = function() {
                        this.storage.remove(this.name, !1, this.cookie_domain),
                            this.storage.remove(this.name, !0, this.cookie_domain)
                    }
                    ,
                    Fe.prototype.clear = function() {
                        this.remove(),
                            this.props = {}
                    }
                    ,
                    Fe.prototype.register_once = function(e, t, r) {
                        return !!B.isObject(e) && (void 0 === t && (t = "None"),
                            this.expire_days = void 0 === r ? this.default_expiry : r,
                            B.each(e, (function(e, r) {
                                    this.props.hasOwnProperty(r) && this.props[r] !== t || (this.props[r] = e)
                                }
                            ), this),
                            this.save(),
                            !0)
                    }
                    ,
                    Fe.prototype.register = function(e, t) {
                        return !!B.isObject(e) && (this.expire_days = void 0 === t ? this.default_expiry : t,
                            B.extend(this.props, e),
                            this.save(),
                            !0)
                    }
                    ,
                    Fe.prototype.unregister = function(e) {
                        e in this.props && (delete this.props[e],
                            this.save())
                    }
                    ,
                    Fe.prototype.update_campaign_params = function() {
                        this.campaign_params_saved || (this.register_once(B.info.campaignParams()),
                            this.campaign_params_saved = !0)
                    }
                    ,
                    Fe.prototype.update_search_keyword = function(e) {
                        this.register(B.info.searchInfo(e))
                    }
                    ,
                    Fe.prototype.update_referrer_info = function(e) {
                        this.register_once({
                            $initial_referrer: e || "$direct",
                            $initial_referring_domain: B.info.referringDomain(e) || "$direct"
                        }, "")
                    }
                    ,
                    Fe.prototype.get_referrer_info = function() {
                        return B.strip_empty_properties({
                            $initial_referrer: this.props.$initial_referrer,
                            $initial_referring_domain: this.props.$initial_referring_domain
                        })
                    }
                    ,
                    Fe.prototype.safe_merge = function(e) {
                        return B.each(this.props, (function(t, r) {
                                r in e || (e[r] = t)
                            }
                        )),
                            e
                    }
                    ,
                    Fe.prototype.update_config = function(e) {
                        this.default_expiry = this.expire_days = e.cookie_expiration,
                            this.set_disabled(e.disable_persistence),
                            this.set_cookie_domain(e.cookie_domain),
                            this.set_cross_site(e.cross_site_cookie),
                            this.set_cross_subdomain(e.cross_subdomain_cookie),
                            this.set_secure(e.secure_cookie)
                    }
                    ,
                    Fe.prototype.set_disabled = function(e) {
                        this.disabled = e,
                            this.disabled ? this.remove() : this.save()
                    }
                    ,
                    Fe.prototype.set_cookie_domain = function(e) {
                        e !== this.cookie_domain && (this.remove(),
                            this.cookie_domain = e,
                            this.save())
                    }
                    ,
                    Fe.prototype.set_cross_site = function(e) {
                        e !== this.cross_site && (this.cross_site = e,
                            this.remove(),
                            this.save())
                    }
                    ,
                    Fe.prototype.set_cross_subdomain = function(e) {
                        e !== this.cross_subdomain && (this.cross_subdomain = e,
                            this.remove(),
                            this.save())
                    }
                    ,
                    Fe.prototype.get_cross_subdomain = function() {
                        return this.cross_subdomain
                    }
                    ,
                    Fe.prototype.set_secure = function(e) {
                        e !== this.secure && (this.secure = !!e,
                            this.remove(),
                            this.save())
                    }
                    ,
                    Fe.prototype._add_to_people_queue = function(e, t) {
                        var r = this._get_queue_key(e)
                            , i = t[e]
                            , o = this._get_or_create_queue(ye)
                            , n = this._get_or_create_queue(me)
                            , s = this._get_or_create_queue(ve)
                            , a = this._get_or_create_queue(be)
                            , c = this._get_or_create_queue(xe)
                            , p = this._get_or_create_queue(we, [])
                            , u = this._get_or_create_queue(ke, []);
                        r === Ae ? (B.extend(o, i),
                            this._pop_from_people_queue(be, i),
                            this._pop_from_people_queue(xe, i),
                            this._pop_from_people_queue(ve, i)) : r === Te ? (B.each(i, (function(e, t) {
                                t in n || (n[t] = e)
                            }
                        )),
                            this._pop_from_people_queue(ve, i)) : r === De ? B.each(i, (function(e) {
                                B.each([o, n, a, c], (function(t) {
                                        e in t && delete t[e]
                                    }
                                )),
                                    B.each(u, (function(t) {
                                            e in t && delete t[e]
                                        }
                                    )),
                                    s[e] = !0
                            }
                        )) : r === $e ? (B.each(i, (function(e, t) {
                                t in o ? o[t] += e : (t in a || (a[t] = 0),
                                    a[t] += e)
                            }
                        ), this),
                            this._pop_from_people_queue(ve, i)) : r === je ? (B.each(i, (function(e, t) {
                                B.isArray(e) && (t in c || (c[t] = []),
                                    c[t] = c[t].concat(e))
                            }
                        )),
                            this._pop_from_people_queue(ve, i)) : r === Ue ? (p.push(i),
                            this._pop_from_people_queue(ke, i)) : r === Be && (u.push(i),
                            this._pop_from_people_queue(ve, i)),
                            U.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
                            U.log(t),
                            this.save()
                    }
                    ,
                    Fe.prototype._pop_from_people_queue = function(e, t) {
                        var r = this._get_queue(e);
                        B.isUndefined(r) || (B.each(t, (function(t, i) {
                                e === ke || e === we ? B.each(r, (function(e) {
                                        e[i] === t && delete e[i]
                                    }
                                )) : delete r[i]
                            }
                        ), this),
                            this.save())
                    }
                    ,
                    Fe.prototype._get_queue_key = function(e) {
                        return e === ye ? Ae : e === me ? Te : e === ve ? De : e === be ? $e : e === ke ? Be : e === we ? Ue : e === xe ? je : void U.error("Invalid queue:", e)
                    }
                    ,
                    Fe.prototype._get_queue = function(e) {
                        return this.props[this._get_queue_key(e)]
                    }
                    ,
                    Fe.prototype._get_or_create_queue = function(e, t) {
                        var r = this._get_queue_key(e);
                        return t = B.isUndefined(t) ? {} : t,
                        this.props[r] || (this.props[r] = t)
                    }
                    ,
                    Fe.prototype.set_event_timer = function(e, t) {
                        var r = this.props.__timers || {};
                        r[e] = t,
                            this.props.__timers = r,
                            this.save()
                    }
                    ,
                    Fe.prototype.remove_event_timer = function(e) {
                        var t = (this.props.__timers || {})[e];
                        return B.isUndefined(t) || (delete this.props.__timers[e],
                            this.save()),
                            t
                    }
                ;
                var Re = function(e) {
                    return e
                }
                    , ze = function() {}
                    , Le = "mixpanel"
                    , Je = "base64"
                    , Qe = t.XMLHttpRequest && "withCredentials"in new XMLHttpRequest
                    , He = !Qe && -1 === E.indexOf("MSIE") && -1 === E.indexOf("Mozilla")
                    , Ke = null;
                x.sendBeacon && (Ke = function() {
                        return x.sendBeacon.apply(x, arguments)
                    }
                );
                var Ve = {
                    api_host: "https://api-js.mixpanel.com",
                    api_method: "POST",
                    api_transport: "XHR",
                    api_payload_format: Je,
                    app_host: "https://mixpanel.com",
                    cdn: "https://cdn.mxpnl.com",
                    cross_site_cookie: !1,
                    cross_subdomain_cookie: !0,
                    error_reporter: ze,
                    persistence: "cookie",
                    persistence_name: "",
                    cookie_domain: "",
                    cookie_name: "",
                    loaded: ze,
                    store_google: !0,
                    save_referrer: !0,
                    test: !1,
                    verbose: !1,
                    img: !1,
                    debug: !1,
                    track_links_timeout: 300,
                    cookie_expiration: 365,
                    upgrade: !1,
                    disable_persistence: !1,
                    disable_cookie: !1,
                    secure_cookie: !1,
                    ip: !0,
                    opt_out_tracking_by_default: !1,
                    opt_out_persistence_by_default: !1,
                    opt_out_tracking_persistence_type: "localStorage",
                    opt_out_tracking_cookie_prefix: null,
                    property_blacklist: [],
                    xhr_headers: {},
                    ignore_dnt: !1,
                    batch_requests: !0,
                    batch_size: 50,
                    batch_flush_interval_ms: 5e3,
                    batch_request_timeout_ms: 9e4,
                    batch_autostart: !0,
                    hooks: {}
                }
                    , Ge = !1
                    , We = function() {}
                    , Xe = function(e, t, i) {
                    var o, n = i === Le ? Ie : Ie[i];
                    if (n && 0 === Oe)
                        o = n;
                    else {
                        if (n && !B.isArray(n))
                            return void U.error("You have already initialized " + i);
                        o = new We
                    }
                    return o._cached_groups = {},
                        o._init(e, t, i),
                        o.people = new Ee,
                        o.people._init(o),
                        r.DEBUG = r.DEBUG || o.get_config("debug"),
                    !B.isUndefined(n) && B.isArray(n) && (o._execute_array.call(o.people, n.people),
                        o._execute_array(n)),
                        o
                };
                We.prototype.init = function(e, t, r) {
                    if (B.isUndefined(r))
                        this.report_error("You must name your new library: init(token, config, name)");
                    else {
                        if (r !== Le) {
                            var i = Xe(e, t, r);
                            return Ie[r] = i,
                                i._loaded(),
                                i
                        }
                        this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet")
                    }
                }
                    ,
                    We.prototype._init = function(e, r, i) {
                        r = r || {},
                            this.__loaded = !0,
                            this.config = {};
                        var o = {};
                        "api_payload_format"in r || (r.api_host || Ve.api_host).match(/\.mixpanel\.com$/) && (o.api_payload_format = "json");
                        if (this.set_config(B.extend({}, Ve, o, r, {
                            name: i,
                            token: e,
                            callback_fn: (i === Le ? i : "mixpanel." + i) + "._jsc"
                        })),
                            this._jsc = ze,
                            this.__dom_loaded_queue = [],
                            this.__request_queue = [],
                            this.__disabled_events = [],
                            this._flags = {
                                disable_all_events: !1,
                                identify_called: !1
                            },
                            this.request_batchers = {},
                            this._batch_requests = this.get_config("batch_requests"),
                            this._batch_requests)
                            if (B.localStorage.is_supported(!0) && Qe) {
                                if (this.init_batchers(),
                                Ke && t.addEventListener) {
                                    var n = B.bind((function() {
                                            this.request_batchers.events.stopped || this.request_batchers.events.flush({
                                                unloading: !0
                                            })
                                        }
                                    ), this);
                                    t.addEventListener("pagehide", (function(e) {
                                            e.persisted && n()
                                        }
                                    )),
                                        t.addEventListener("visibilitychange", (function() {
                                                "hidden" === w.visibilityState && n()
                                            }
                                        ))
                                }
                            } else
                                this._batch_requests = !1,
                                    U.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
                        this.persistence = this.cookie = new Fe(this.config),
                            this.unpersisted_superprops = {},
                            this._gdpr_init();
                        var s = B.UUID();
                        this.get_distinct_id() || this.register_once({
                            distinct_id: s,
                            $device_id: s
                        }, "")
                    }
                    ,
                    We.prototype._loaded = function() {
                        this.get_config("loaded")(this),
                            this._set_default_superprops()
                    }
                    ,
                    We.prototype._set_default_superprops = function() {
                        this.persistence.update_search_keyword(w.referrer),
                        this.get_config("store_google") && this.persistence.update_campaign_params(),
                        this.get_config("save_referrer") && this.persistence.update_referrer_info(w.referrer)
                    }
                    ,
                    We.prototype._dom_loaded = function() {
                        B.each(this.__dom_loaded_queue, (function(e) {
                                this._track_dom.apply(this, e)
                            }
                        ), this),
                        this.has_opted_out_tracking() || B.each(this.__request_queue, (function(e) {
                                this._send_request.apply(this, e)
                            }
                        ), this),
                            delete this.__dom_loaded_queue,
                            delete this.__request_queue
                    }
                    ,
                    We.prototype._track_dom = function(e, t) {
                        if (this.get_config("img"))
                            return this.report_error("You can't use DOM tracking functions with img = true."),
                                !1;
                        if (!Ge)
                            return this.__dom_loaded_queue.push([e, t]),
                                !1;
                        var r = (new e).init(this);
                        return r.track.apply(r, t)
                    }
                    ,
                    We.prototype._prepare_callback = function(e, t) {
                        if (B.isUndefined(e))
                            return null;
                        if (Qe) {
                            return function(r) {
                                e(r, t)
                            }
                        }
                        var r = this._jsc
                            , i = "" + Math.floor(1e8 * Math.random())
                            , o = this.get_config("callback_fn") + "[" + i + "]";
                        return r[i] = function(o) {
                            delete r[i],
                                e(o, t)
                        }
                            ,
                            o
                    }
                    ,
                    We.prototype._send_request = function(e, t, r, i) {
                        var o = !0;
                        if (He)
                            return this.__request_queue.push(arguments),
                                o;
                        var n = {
                            method: this.get_config("api_method"),
                            transport: this.get_config("api_transport"),
                            verbose: this.get_config("verbose")
                        }
                            , s = null;
                        i || !B.isFunction(r) && "string" != typeof r || (i = r,
                            r = null),
                            r = B.extend(n, r || {}),
                        Qe || (r.method = "GET");
                        var a = "POST" === r.method
                            , c = Ke && a && "sendbeacon" === r.transport.toLowerCase()
                            , p = r.verbose;
                        t.verbose && (p = !0),
                        this.get_config("test") && (t.test = 1),
                        p && (t.verbose = 1),
                        this.get_config("img") && (t.img = 1),
                        Qe || (i ? t.callback = i : (p || this.get_config("test")) && (t.callback = "(function(){})")),
                            t.ip = this.get_config("ip") ? 1 : 0,
                            t._ = (new Date).getTime().toString(),
                        a && (s = "data=" + encodeURIComponent(t.data),
                            delete t.data),
                            e += "?" + B.HTTPBuildQuery(t);
                        var u = this;
                        if ("img"in t) {
                            var _ = w.createElement("img");
                            _.src = e,
                                w.body.appendChild(_)
                        } else if (c) {
                            try {
                                o = Ke(e, s)
                            } catch (e) {
                                u.report_error(e),
                                    o = !1
                            }
                            try {
                                i && i(o ? 1 : 0)
                            } catch (e) {
                                u.report_error(e)
                            }
                        } else if (Qe)
                            try {
                                var h = new XMLHttpRequest;
                                h.open(r.method, e, !0);
                                var l = this.get_config("xhr_headers");
                                if (a && (l["Content-Type"] = "application/x-www-form-urlencoded"),
                                    B.each(l, (function(e, t) {
                                            h.setRequestHeader(t, e)
                                        }
                                    )),
                                r.timeout_ms && void 0 !== h.timeout) {
                                    h.timeout = r.timeout_ms;
                                    var d = (new Date).getTime()
                                }
                                h.withCredentials = !0,
                                    h.onreadystatechange = function() {
                                        var e;
                                        if (4 === h.readyState)
                                            if (200 === h.status) {
                                                if (i)
                                                    if (p) {
                                                        var t;
                                                        try {
                                                            t = B.JSONDecode(h.responseText)
                                                        } catch (e) {
                                                            if (u.report_error(e),
                                                                !r.ignore_json_errors)
                                                                return;
                                                            t = h.responseText
                                                        }
                                                        i(t)
                                                    } else
                                                        i(Number(h.responseText))
                                            } else
                                                e = h.timeout && !h.status && (new Date).getTime() - d >= h.timeout ? "timeout" : "Bad HTTP status: " + h.status + " " + h.statusText,
                                                    u.report_error(e),
                                                i && i(p ? {
                                                    status: 0,
                                                    error: e,
                                                    xhr_req: h
                                                } : 0)
                                    }
                                    ,
                                    h.send(s)
                            } catch (e) {
                                u.report_error(e),
                                    o = !1
                            }
                        else {
                            var f = w.createElement("script");
                            f.type = "text/javascript",
                                f.async = !0,
                                f.defer = !0,
                                f.src = e;
                            var g = w.getElementsByTagName("script")[0];
                            g.parentNode.insertBefore(f, g)
                        }
                        return o
                    }
                    ,
                    We.prototype._execute_array = function(e) {
                        var t, r = [], i = [], o = [];
                        B.each(e, (function(e) {
                                e && (t = e[0],
                                    B.isArray(t) ? o.push(e) : "function" == typeof e ? e.call(this) : B.isArray(e) && "alias" === t ? r.push(e) : B.isArray(e) && -1 !== t.indexOf("track") && "function" == typeof this[t] ? o.push(e) : i.push(e))
                            }
                        ), this);
                        var n = function(e, t) {
                            B.each(e, (function(e) {
                                    if (B.isArray(e[0])) {
                                        var r = t;
                                        B.each(e, (function(e) {
                                                r = r[e[0]].apply(r, e.slice(1))
                                            }
                                        ))
                                    } else
                                        this[e[0]].apply(this, e.slice(1))
                                }
                            ), t)
                        };
                        n(r, this),
                            n(i, this),
                            n(o, this)
                    }
                    ,
                    We.prototype.are_batchers_initialized = function() {
                        return !!this.request_batchers.events
                    }
                    ,
                    We.prototype.init_batchers = function() {
                        var e = this.get_config("token");
                        if (!this.are_batchers_initialized()) {
                            var t = B.bind((function(t) {
                                    return new ie("__mpq_" + e + t.queue_suffix,{
                                        libConfig: this.config,
                                        sendRequestFunc: B.bind((function(e, r, i) {
                                                this._send_request(this.get_config("api_host") + t.endpoint, this._encode_data_for_request(e), r, this._prepare_callback(i, e))
                                            }
                                        ), this),
                                        beforeSendHook: B.bind((function(e) {
                                                return this._run_hook("before_send_" + t.type, e)
                                            }
                                        ), this),
                                        errorReporter: this.get_config("error_reporter"),
                                        stopAllBatchingFunc: B.bind(this.stop_batch_senders, this)
                                    })
                                }
                            ), this);
                            this.request_batchers = {
                                events: t({
                                    type: "events",
                                    endpoint: "/track/",
                                    queue_suffix: "_ev"
                                }),
                                people: t({
                                    type: "people",
                                    endpoint: "/engage/",
                                    queue_suffix: "_pp"
                                }),
                                groups: t({
                                    type: "groups",
                                    endpoint: "/groups/",
                                    queue_suffix: "_gr"
                                })
                            }
                        }
                        this.get_config("batch_autostart") && this.start_batch_senders()
                    }
                    ,
                    We.prototype.start_batch_senders = function() {
                        this.are_batchers_initialized() && (this._batch_requests = !0,
                            B.each(this.request_batchers, (function(e) {
                                    e.start()
                                }
                            )))
                    }
                    ,
                    We.prototype.stop_batch_senders = function() {
                        this._batch_requests = !1,
                            B.each(this.request_batchers, (function(e) {
                                    e.stop(),
                                        e.clear()
                                }
                            ))
                    }
                    ,
                    We.prototype.push = function(e) {
                        this._execute_array([e])
                    }
                    ,
                    We.prototype.disable = function(e) {
                        void 0 === e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
                    }
                    ,
                    We.prototype._encode_data_for_request = function(e) {
                        var t = B.JSONEncode(e);
                        return this.get_config("api_payload_format") === Je && (t = B.base64Encode(t)),
                            {
                                data: t
                            }
                    }
                    ,
                    We.prototype._track_or_batch = function(e, t) {
                        var r = B.truncate(e.data, 255)
                            , i = e.endpoint
                            , o = e.batcher
                            , n = e.should_send_immediately
                            , s = e.send_request_options || {};
                        t = t || ze;
                        var a = !0
                            , c = B.bind((function() {
                                return s.skip_hooks || (r = this._run_hook("before_send_" + e.type, r)),
                                    r ? (U.log("MIXPANEL REQUEST:"),
                                        U.log(r),
                                        this._send_request(i, this._encode_data_for_request(r), s, this._prepare_callback(t, r))) : null
                            }
                        ), this);
                        return this._batch_requests && !n ? o.enqueue(r, (function(e) {
                                e ? t(1, r) : c()
                            }
                        )) : a = c(),
                        a && r
                    }
                    ,
                    We.prototype.track = ce((function(e, t, r, i) {
                            i || "function" != typeof r || (i = r,
                                r = null);
                            var o = (r = r || {}).transport;
                            o && (r.transport = o);
                            var n = r.send_immediately;
                            if ("function" != typeof i && (i = ze),
                                B.isUndefined(e))
                                this.report_error("No event name provided to mixpanel.track");
                            else {
                                if (!this._event_is_disabled(e)) {
                                    (t = t || {}).token = this.get_config("token");
                                    var s = this.persistence.remove_event_timer(e);
                                    if (!B.isUndefined(s)) {
                                        var a = (new Date).getTime() - s;
                                        t.$duration = parseFloat((a / 1e3).toFixed(3))
                                    }
                                    this._set_default_superprops(),
                                        t = B.extend({}, B.info.properties(), this.persistence.properties(), this.unpersisted_superprops, t);
                                    var c = this.get_config("property_blacklist");
                                    B.isArray(c) ? B.each(c, (function(e) {
                                            delete t[e]
                                        }
                                    )) : this.report_error("Invalid value for property_blacklist config: " + c);
                                    var p = {
                                        event: e,
                                        properties: t
                                    };
                                    return this._track_or_batch({
                                        type: "events",
                                        data: p,
                                        endpoint: this.get_config("api_host") + "/track/",
                                        batcher: this.request_batchers.events,
                                        should_send_immediately: n,
                                        send_request_options: r
                                    }, i)
                                }
                                i(0)
                            }
                        }
                    )),
                    We.prototype.set_group = ce((function(e, t, r) {
                            B.isArray(t) || (t = [t]);
                            var i = {};
                            return i[e] = t,
                                this.register(i),
                                this.people.set(e, t, r)
                        }
                    )),
                    We.prototype.add_group = ce((function(e, t, r) {
                            var i = this.get_property(e);
                            if (void 0 === i) {
                                var o = {};
                                o[e] = [t],
                                    this.register(o)
                            } else
                                -1 === i.indexOf(t) && (i.push(t),
                                    this.register(o));
                            return this.people.union(e, t, r)
                        }
                    )),
                    We.prototype.remove_group = ce((function(e, t, r) {
                            var i = this.get_property(e);
                            if (void 0 !== i) {
                                var o = i.indexOf(t);
                                o > -1 && (i.splice(o, 1),
                                    this.register({
                                        group_key: i
                                    })),
                                0 === i.length && this.unregister(e)
                            }
                            return this.people.remove(e, t, r)
                        }
                    )),
                    We.prototype.track_with_groups = ce((function(e, t, r, i) {
                            var o = B.extend({}, t || {});
                            return B.each(r, (function(e, t) {
                                    null != e && (o[t] = e)
                                }
                            )),
                                this.track(e, o, i)
                        }
                    )),
                    We.prototype._create_map_key = function(e, t) {
                        return e + "_" + JSON.stringify(t)
                    }
                    ,
                    We.prototype._remove_group_from_cache = function(e, t) {
                        delete this._cached_groups[this._create_map_key(e, t)]
                    }
                    ,
                    We.prototype.get_group = function(e, t) {
                        var r = this._create_map_key(e, t)
                            , i = this._cached_groups[r];
                        return void 0 !== i && i._group_key === e && i._group_id === t || ((i = new qe)._init(this, e, t),
                            this._cached_groups[r] = i),
                            i
                    }
                    ,
                    We.prototype.track_pageview = function(e) {
                        B.isUndefined(e) && (e = w.location.href),
                            this.track("mp_page_view", B.info.pageviewInfo(e))
                    }
                    ,
                    We.prototype.track_links = function() {
                        return this._track_dom.call(this, V, arguments)
                    }
                    ,
                    We.prototype.track_forms = function() {
                        return this._track_dom.call(this, G, arguments)
                    }
                    ,
                    We.prototype.time_event = function(e) {
                        B.isUndefined(e) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e) || this.persistence.set_event_timer(e, (new Date).getTime())
                    }
                ;
                var Ye = {
                    persistent: !0
                }
                    , Ze = function(e) {
                    var t;
                    return t = B.isObject(e) ? e : B.isUndefined(e) ? {} : {
                        days: e
                    },
                        B.extend({}, Ye, t)
                };
                We.prototype.register = function(e, t) {
                    var r = Ze(t);
                    r.persistent ? this.persistence.register(e, r.days) : B.extend(this.unpersisted_superprops, e)
                }
                    ,
                    We.prototype.register_once = function(e, t, r) {
                        var i = Ze(r);
                        i.persistent ? this.persistence.register_once(e, t, i.days) : (void 0 === t && (t = "None"),
                            B.each(e, (function(e, r) {
                                    this.unpersisted_superprops.hasOwnProperty(r) && this.unpersisted_superprops[r] !== t || (this.unpersisted_superprops[r] = e)
                                }
                            ), this))
                    }
                    ,
                    We.prototype.unregister = function(e, t) {
                        (t = Ze(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
                    }
                    ,
                    We.prototype._register_single = function(e, t) {
                        var r = {};
                        r[e] = t,
                            this.register(r)
                    }
                    ,
                    We.prototype.identify = function(e, t, r, i, o, n, s, a) {
                        var c = this.get_distinct_id();
                        if (this.register({
                            $user_id: e
                        }),
                            !this.get_property("$device_id")) {
                            var p = c;
                            this.register_once({
                                $had_persisted_distinct_id: !0,
                                $device_id: p
                            }, "")
                        }
                        e !== c && e !== this.get_property(Pe) && (this.unregister(Pe),
                            this.register({
                                distinct_id: e
                            })),
                            this._flags.identify_called = !0,
                            this.people._flush(t, r, i, o, n, s, a),
                        e !== c && this.track("$identify", {
                            distinct_id: e,
                            $anon_distinct_id: c
                        }, {
                            skip_hooks: !0
                        })
                    }
                    ,
                    We.prototype.reset = function() {
                        this.persistence.clear(),
                            this._flags.identify_called = !1;
                        var e = B.UUID();
                        this.register_once({
                            distinct_id: e,
                            $device_id: e
                        }, "")
                    }
                    ,
                    We.prototype.get_distinct_id = function() {
                        return this.get_property("distinct_id")
                    }
                    ,
                    We.prototype.alias = function(e, t) {
                        if (e === this.get_property(Me))
                            return this.report_error("Attempting to create alias for existing People user - aborting."),
                                -2;
                        var r = this;
                        return B.isUndefined(t) && (t = this.get_distinct_id()),
                            e !== t ? (this._register_single(Pe, e),
                                this.track("$create_alias", {
                                    alias: e,
                                    distinct_id: t
                                }, {
                                    skip_hooks: !0
                                }, (function() {
                                        r.identify(e)
                                    }
                                ))) : (this.report_error("alias matches current distinct_id - skipping api call."),
                                this.identify(e),
                                -1)
                    }
                    ,
                    We.prototype.name_tag = function(e) {
                        this._register_single("mp_name_tag", e)
                    }
                    ,
                    We.prototype.set_config = function(e) {
                        B.isObject(e) && (B.extend(this.config, e),
                        e.batch_size && B.each(this.request_batchers, (function(e) {
                                e.resetBatchSize()
                            }
                        )),
                        this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
                        this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
                        this.persistence && this.persistence.update_config(this.config),
                            r.DEBUG = r.DEBUG || this.get_config("debug"))
                    }
                    ,
                    We.prototype.get_config = function(e) {
                        return this.config[e]
                    }
                    ,
                    We.prototype._run_hook = function(e) {
                        var t = (this.config.hooks[e] || Re).apply(this, m.call(arguments, 1));
                        return void 0 === t && (this.report_error(e + " hook did not return a value"),
                            t = null),
                            t
                    }
                    ,
                    We.prototype.get_property = function(e) {
                        return this.persistence.props[e]
                    }
                    ,
                    We.prototype.toString = function() {
                        var e = this.get_config("name");
                        return e !== Le && (e = "mixpanel." + e),
                            e
                    }
                    ,
                    We.prototype._event_is_disabled = function(e) {
                        return B.isBlockedUA(E) || this._flags.disable_all_events || B.include(this.__disabled_events, e)
                    }
                    ,
                    We.prototype._gdpr_init = function() {
                        "localStorage" === this.get_config("opt_out_tracking_persistence_type") && B.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
                            persistence_type: "cookie"
                        }) && this.opt_in_tracking({
                            enable_persistence: !1
                        }),
                        !this.has_opted_out_tracking() && this.has_opted_out_tracking({
                            persistence_type: "cookie"
                        }) && this.opt_out_tracking({
                            clear_persistence: !1
                        }),
                            this.clear_opt_in_out_tracking({
                                persistence_type: "cookie",
                                enable_persistence: !1
                            })),
                            this.has_opted_out_tracking() ? this._gdpr_update_persistence({
                                clear_persistence: !0
                            }) : this.has_opted_in_tracking() || !this.get_config("opt_out_tracking_by_default") && !B.cookie.get("mp_optout") || (B.cookie.remove("mp_optout"),
                                this.opt_out_tracking({
                                    clear_persistence: this.get_config("opt_out_persistence_by_default")
                                }))
                    }
                    ,
                    We.prototype._gdpr_update_persistence = function(e) {
                        var t;
                        if (e && e.clear_persistence)
                            t = !0;
                        else {
                            if (!e || !e.enable_persistence)
                                return;
                            t = !1
                        }
                        this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t),
                        t && B.each(this.request_batchers, (function(e) {
                                e.clear()
                            }
                        ))
                    }
                    ,
                    We.prototype._gdpr_call_func = function(e, t) {
                        return t = B.extend({
                            track: B.bind(this.track, this),
                            persistence_type: this.get_config("opt_out_tracking_persistence_type"),
                            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
                            cookie_expiration: this.get_config("cookie_expiration"),
                            cross_site_cookie: this.get_config("cross_site_cookie"),
                            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                            cookie_domain: this.get_config("cookie_domain"),
                            secure_cookie: this.get_config("secure_cookie"),
                            ignore_dnt: this.get_config("ignore_dnt")
                        }, t),
                        B.localStorage.is_supported() || (t.persistence_type = "cookie"),
                            e(this.get_config("token"), {
                                track: t.track,
                                trackEventName: t.track_event_name,
                                trackProperties: t.track_properties,
                                persistenceType: t.persistence_type,
                                persistencePrefix: t.cookie_prefix,
                                cookieDomain: t.cookie_domain,
                                cookieExpiration: t.cookie_expiration,
                                crossSiteCookie: t.cross_site_cookie,
                                crossSubdomainCookie: t.cross_subdomain_cookie,
                                secureCookie: t.secure_cookie,
                                ignoreDnt: t.ignore_dnt
                            })
                    }
                    ,
                    We.prototype.opt_in_tracking = function(e) {
                        e = B.extend({
                            enable_persistence: !0
                        }, e),
                            this._gdpr_call_func(oe, e),
                            this._gdpr_update_persistence(e)
                    }
                    ,
                    We.prototype.opt_out_tracking = function(e) {
                        (e = B.extend({
                            clear_persistence: !0,
                            delete_user: !0
                        }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(),
                            this.people.clear_charges()),
                            this._gdpr_call_func(ne, e),
                            this._gdpr_update_persistence(e)
                    }
                    ,
                    We.prototype.has_opted_in_tracking = function(e) {
                        return this._gdpr_call_func(se, e)
                    }
                    ,
                    We.prototype.has_opted_out_tracking = function(e) {
                        return this._gdpr_call_func(ae, e)
                    }
                    ,
                    We.prototype.clear_opt_in_out_tracking = function(e) {
                        e = B.extend({
                            enable_persistence: !0
                        }, e),
                            this._gdpr_call_func(_e, e),
                            this._gdpr_update_persistence(e)
                    }
                    ,
                    We.prototype.report_error = function(e, t) {
                        U.error.apply(U.error, arguments);
                        try {
                            t || e instanceof Error || (e = new Error(e)),
                                this.get_config("error_reporter")(e, t)
                        } catch (t) {
                            U.error(t)
                        }
                    }
                    ,
                    We.prototype.init = We.prototype.init,
                    We.prototype.reset = We.prototype.reset,
                    We.prototype.disable = We.prototype.disable,
                    We.prototype.time_event = We.prototype.time_event,
                    We.prototype.track = We.prototype.track,
                    We.prototype.track_links = We.prototype.track_links,
                    We.prototype.track_forms = We.prototype.track_forms,
                    We.prototype.track_pageview = We.prototype.track_pageview,
                    We.prototype.register = We.prototype.register,
                    We.prototype.register_once = We.prototype.register_once,
                    We.prototype.unregister = We.prototype.unregister,
                    We.prototype.identify = We.prototype.identify,
                    We.prototype.alias = We.prototype.alias,
                    We.prototype.name_tag = We.prototype.name_tag,
                    We.prototype.set_config = We.prototype.set_config,
                    We.prototype.get_config = We.prototype.get_config,
                    We.prototype.get_property = We.prototype.get_property,
                    We.prototype.get_distinct_id = We.prototype.get_distinct_id,
                    We.prototype.toString = We.prototype.toString,
                    We.prototype.opt_out_tracking = We.prototype.opt_out_tracking,
                    We.prototype.opt_in_tracking = We.prototype.opt_in_tracking,
                    We.prototype.has_opted_out_tracking = We.prototype.has_opted_out_tracking,
                    We.prototype.has_opted_in_tracking = We.prototype.has_opted_in_tracking,
                    We.prototype.clear_opt_in_out_tracking = We.prototype.clear_opt_in_out_tracking,
                    We.prototype.get_group = We.prototype.get_group,
                    We.prototype.set_group = We.prototype.set_group,
                    We.prototype.add_group = We.prototype.add_group,
                    We.prototype.remove_group = We.prototype.remove_group,
                    We.prototype.track_with_groups = We.prototype.track_with_groups,
                    We.prototype.start_batch_senders = We.prototype.start_batch_senders,
                    We.prototype.stop_batch_senders = We.prototype.stop_batch_senders,
                    Fe.prototype.properties = Fe.prototype.properties,
                    Fe.prototype.update_search_keyword = Fe.prototype.update_search_keyword,
                    Fe.prototype.update_referrer_info = Fe.prototype.update_referrer_info,
                    Fe.prototype.get_cross_subdomain = Fe.prototype.get_cross_subdomain,
                    Fe.prototype.clear = Fe.prototype.clear;
                var et = {}
                    , tt = function() {
                    Ie.init = function(e, r, i) {
                        if (i)
                            return Ie[i] || (Ie[i] = et[i] = Xe(e, r, i),
                                Ie[i]._loaded()),
                                Ie[i];
                        var o = Ie;
                        et.mixpanel ? o = et.mixpanel : e && ((o = Xe(e, r, Le))._loaded(),
                            et.mixpanel = o),
                            Ie = o,
                        1 === Oe && (t.mixpanel = Ie),
                            B.each(et, (function(e, t) {
                                    t !== Le && (Ie[t] = e)
                                }
                            )),
                            Ie._ = B
                    }
                };
                var rt = (Oe = 0,
                    Ie = new We,
                    tt(),
                    Ie.init(),
                    function() {
                        function e() {
                            e.done || (e.done = !0,
                                Ge = !0,
                                He = !1,
                                B.each(et, (function(e) {
                                        e._dom_loaded()
                                    }
                                )))
                        }
                        if (w.addEventListener)
                            "complete" === w.readyState ? e() : w.addEventListener("DOMContentLoaded", e, !1);
                        else if (w.attachEvent) {
                            w.attachEvent("onreadystatechange", e);
                            var r = !1;
                            try {
                                r = null === t.frameElement
                            } catch (e) {}
                            w.documentElement.doScroll && r && function t() {
                                try {
                                    w.documentElement.doScroll("left")
                                } catch (e) {
                                    return void setTimeout(t, 1)
                                }
                                e()
                            }()
                        }
                        B.register_event(t, "load", e, !0)
                    }(),
                    Ie);
                e.exports = rt
            }
        }
            , t = {};
        function r(i) {
            var o = t[i];
            if (void 0 !== o)
                return o.exports;
            var n = t[i] = {
                exports: {}
            };
            return e[i](n, n.exports, r),
                n.exports
        }
        r.n = e=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return r.d(t, {
                a: t
            }),
                t
        }
            ,
            r.d = (e,t)=>{
                for (var i in t)
                    r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: t[i]
                    })
            }
            ,
            r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
            r.r = e=>{
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
        ;
        var i = {};
        (()=>{
                "use strict";
                r.r(i);
                var e = r(8891)
                    , t = r.n(e);
                const o = Autodesk.Viewing.Private.logger;
                class n extends Autodesk.Viewing.Private.AnalyticsProviderInterface {
                    constructor(e) {
                        super(e),
                            this.initialized = !1
                    }
                    init() {
                        this.options.token || o.warn("Mixpanel token is not defined"),
                            t().init(this.options.token, this.options.config),
                            this.initialized = !0
                    }
                    register(e) {
                        t().register(e)
                    }
                    static get name() {
                        return "mixpanel"
                    }
                    static get defaultOptions() {
                        return {
                            token: "7cecb637d6468a8b61f388bbb82072ee",
                            config: {
                                persistence: "localStorage",
                                batch_requests: !0,
                                batch_size: 500,
                                batch_flush_interval_ms: 15e3,
                                autotrack: !1
                            }
                        }
                    }
                    hasOptedOut() {
                        return t().has_opted_out_tracking()
                    }
                    optOut(e) {
                        this.track("OptOutTracking"),
                            t().opt_out_tracking(e)
                    }
                    getDistinctId() {
                        return t().get_distinct_id()
                    }
                    optIn(e) {
                        t().opt_in_tracking(e),
                            this.track("OptInTracking")
                    }
                    track(e, r) {
                        t().track(e, r)
                    }
                    identify(e) {
                        t().identify(e)
                    }
                }
                const s = Autodesk.Viewing
                    , a = s.Private;
                class c extends Autodesk.Viewing.Extension {
                    constructor(e, t) {
                        super(e, t)
                    }
                    load() {
                        return !0
                    }
                    unload() {
                        return !0
                    }
                    activate() {
                        return !0
                    }
                    deactivate() {
                        return !1
                    }
                }
                s.theExtensionManager.registerExtension("Autodesk.Viewing.MixpanelExtension", c),
                    a.analytics.registerProvider(n)
            }
        )(),
            Autodesk.Extensions.MixpanelProvider = i
    }
)();
//# sourceMappingURL=MixpanelProvider.min.js.map
