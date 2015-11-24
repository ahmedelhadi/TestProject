;
(function(window, document, undefined) {
    var aa = aa || {},
        ba = this;
    ba.Pb = true;

    function ca(a) {
        return a.call.apply(a.t, arguments)
    }

    function da(a, b) {
        if (!a) throw new Error;
        if (arguments.length > 2) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, c);
                return a.apply(b, d)
            }
        } else return function() {
            return a.apply(b, arguments)
        }
    }

    function D() {
        D = Function.prototype.t && Function.prototype.t.toString().indexOf("native code") != -1 ? ca : da;
        return D.apply(null, arguments)
    }
    var ea = aa.Wb && Date.now || function() {
        return +new Date
    };

    function G(a) {
        a.call(ba)
    };
    mti = {};
    mti.t = function(a, b) {
        var c = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [];
        return function() {
            c.push.apply(c, arguments);
            return b.apply(a, c)
        }
    };
    var fa = {};

    function H(a, b) {
        this.la = a;
        this.Ab = b || a;
        this.m = this.Ab.document;
        this.qa = undefined
    }
    G(function() {
        H.prototype.createElement = function(a, b, c) {
            a = this.m.createElement(a);
            if (b)
                for (var d in b)
                    if (b.hasOwnProperty(d)) d == "style" ? this.Ma(a, b[d]) : a.setAttribute(d, b[d]);
            c && a.appendChild(this.m.createTextNode(c));
            return a
        };
        H.prototype.v = function(a, b) {
            a = this.m.getElementsByTagName(a)[0];
            if (!a) a = document.documentElement;
            if (a && a.lastChild) {
                a.insertBefore(b, a.lastChild);
                return true
            }
            return false
        };
        H.prototype.Pa = function(a) {
            var b = this;

            function c() {
                b.m.body ? a() : setTimeout(c, 0)
            }
            c()
        };
        H.prototype.La = function(a) {
            if (a.parentNode) {
                a.parentNode.removeChild(a);
                return true
            }
            return false
        };
        H.prototype.A = function(a, b) {
            for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
                if (c[d] == b) return;
            c.push(b);
            a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        };
        H.prototype.N = function(a, b) {
            for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
            a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        };
        H.prototype.za = function(a, b) {
            a = a.className.split(/\s+/);
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return true;
            return false
        };
        H.prototype.Ma = function(a, b) {
            if (this.mb()) a.setAttribute("style", b);
            else a.style.cssText = b
        };
        H.prototype.mb = function() {
            if (this.qa === undefined) {
                var a = this.m.createElement("p");
                a.innerHTML = '<a style="top:1px;">w</a>';
                this.qa = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))
            }
            return this.qa
        };
        H.prototype.getComputedStyle = function(a) {
            if (typeof a != "undefined")
                if (a != null) {
                    var b = {};
                    if (typeof a.currentStyle != "undefined") {
                        b.fontFamily = a.currentStyle.fontFamily;
                        b.fontWeight = a.currentStyle.fontWeight;
                        b.fontStyle = a.currentStyle.fontStyle;
                        return b
                    } else if (a = this.m.defaultView.getComputedStyle(a, null)) {
                        b.fontFamily = a.getPropertyValue("font-family");
                        b.fontWeight = a.getPropertyValue("font-weight");
                        b.fontStyle = a.getPropertyValue("font-style");
                        return b
                    } else return ""
                }
            return ""
        };
        H.prototype.u = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontFamily;
                    else return (a = this.m.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("font-family") : "";
            return ""
        };
        H.prototype.ha = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontWeight;
                    else if (a = this.m.defaultView.getComputedStyle(a, null)) {
                var b = a.getPropertyValue("font-weight");
                return b.toLowerCase() == "bold" ? 700 : b.toLowerCase() == "normal" ? 400 : a.getPropertyValue("font-weight")
            } else return "";
            return ""
        };
        H.prototype.ga = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontStyle;
                    else return (a =
                        this.m.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("font-style") : "";
            return ""
        };
        H.prototype.ia = function(a) {
            var b = "";
            if (a.tagName == "INPUT") b += a.value;
            a = a.childNodes || a;
            for (var c = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(","), d = 0; d < a.length; d++)
                if (a[d].nodeType != 8)
                    if (this.indexOf(c, a[d].tagName ? a[d].tagName.toLowerCase() : "") < 0)
                        if (this.hb(a[d].parentNode) != "none") {
                            var e = a[d].nodeType != 1 ? a[d].nodeValue.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,
                                "").replace(/\s+/g, " ") : this.ia(a[d].childNodes);
                            b += e.toLowerCase() + e.toUpperCase()
                        } else b += a[d].nodeType != 1 ? a[d].nodeValue.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ") : this.ia(a[d].childNodes);
            return b
        };
        H.prototype.getElementById = function(a) {
            return this.m.getElementById(a)
        };
        H.prototype.Y = function(a, b, c, d, e) {
            var f = [],
                l = this.u(a).split(","),
                g = "",
                i = "";
            if (c instanceof Array)
                for (g = 0; g < l.length; g++)
                    if (this.X(l[g]) != b)
                        if (this.X(l[g]).indexOf(b) > -1)
                            for (i = 0; i < c.length; i++) {
                                if (c[i] != "")
                                    if (d)
                                        if (e) {
                                            var j =
                                                this.ga(a),
                                                h = this.ha(a),
                                                p = b + "_" + j.charAt(0) + h / 100;
                                            f.push(p)
                                        } else f.push(c[i]);
                                else f.push(c[i])
                            } else f.push(l[g]);
                        else if (c instanceof Array)
                for (i = 0; i < c.length; i++) {
                    if (c[i] != "")
                        if (d)
                            if (e) {
                                j = this.ga(a);
                                h = this.ha(a);
                                p = b + "_" + j.charAt(0) + h / 100;
                                f.push(p)
                            } else f.push(c[i]);
                    else f.push(c[i])
                } else f.push(c);
            else if (d)
                if (e) {
                    j = this.ga(a);
                    h = this.ha(a);
                    e = this.X(this.u(a));
                    p = b + "_" + j.charAt(0) + h / 100;
                    this.X(c);
                    c = p.length;
                    c = p.slice(c - 2, c);
                    g = c.charAt(1) * 100;
                    i = c.charAt(0);
                    b == e && j.charAt(0) == i && h == g && f.push(p)
                } else f.push(c);
            else f.push(c);
            for (j = 0; j < l.length; j++) l[j] != "" && f.push(l[j]);
            f = this.lb(f);
            if (f.length > 1 && f[0] != b) {
                a.style.fontFamily = "" + f;
                a.setAttribute("data-mtiFont", b);
                if (d) {
                    a.style.fontWeight = "";
                    a.style.fontStyle = ""
                }
                return a.style.fontFamily
            } else return null
        };
        H.prototype.pb = function(a, b) {
            for (b = b.parentNode; b != null;) {
                if (b == a) return true;
                b = b.parentNode
            }
            return false
        };
        H.prototype.Oa = function(a, b) {
            b(a);
            for (a = a.firstChild; a;) {
                this.Oa(a, b);
                a = a.nextSibling
            }
        };
        H.prototype.hb = function(a) {
            if (a)
                if (typeof a.currentStyle !=
                    "undefined") return a.currentStyle.textTransform;
                else return (a = this.m.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("text-transform") : ""
        };
        H.prototype.indexOf = function(a, b) {
            if (a.indexOf) return a.indexOf(b);
            else {
                for (var c = 0; c < a.length; c++)
                    if (a[c] == b) return c;
                return -1
            }
        };
        H.prototype.X = function(a) {
            return a.replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|")
        };
        H.prototype.lb = function(a) {
            for (var b = {}, c = [], d = 0, e = a.length; d < e; ++d)
                if (!b.hasOwnProperty(a[d])) {
                    c.push(a[d]);
                    b[a[d]] = 1
                }
            return c
        };
        H.prototype.X = function(a) {
            return a.replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|")
        }
    });

    function I(a, b, c) {
        this.Nb = a;
        this.Mb = b;
        this.gc = c
    }
    G(function() {});

    function J(a, b, c, d) {
        this.f = a != null ? a : null;
        this.s = b != null ? b : null;
        this.Ha = c != null ? c : null;
        this.h = d != null ? d : null
    }
    var ga, L;
    G(function() {
        ga = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        J.prototype.ka = function() {
            return this.f !== null
        };
        J.prototype.toString = function() {
            return [this.f, this.s || "", this.Ha || "", this.h || ""].join("")
        };
        L = function(a) {
            a = ga.exec(a);
            var b = null,
                c = null,
                d = null,
                e = null;
            if (a) {
                if (a[1] !== null && a[1]) b = parseInt(a[1], 10);
                if (a[2] !== null && a[2]) c = parseInt(a[2], 10);
                if (a[3] !== null && a[3]) d = parseInt(a[3], 10);
                if (a[4] !== null && a[4]) e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]
            }
            return new J(b, c, d, e)
        }
    });

    function M(a, b, c, d, e, f, l, g, i, j, h) {
        this.w = a;
        this.fc = b;
        this.z = c;
        this.db = d;
        this.Zb = e;
        this.R = f;
        this.Ja = l;
        this.Ia = g;
        this.bc = i;
        this.Yb = j;
        this.G = h
    }
    G(function() {
        M.prototype.getName = function() {
            return this.w
        }
    });

    function N(a, b) {
        this.b = a;
        this.p = b
    }
    var ha = new M("Unknown", new J, "Unknown", "Unknown", new J, "Unknown", "Unknown", new J, "Unknown", undefined, new I(false, false, false));
    G(function() {
        N.prototype.parse = function() {
            return this.sb() ? this.Fb() : this.vb() ? this.Gb() : this.wb() ? this.Ga() : this.xb() ? this.Ga() : this.rb() ? this.Eb() : ha
        };
        N.prototype.C = function() {
            var a = this.e(this.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            if (a != "") {
                if (/BB\d{2}/.test(a)) a = "BlackBerry";
                return a
            }
            a = this.e(this.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
            if (a != "") {
                if (a == "Mac_PowerPC") a = "Macintosh";
                return a
            }
            return "Unknown"
        };
        N.prototype.ba = function() {
            var a = this.e(this.b, /(OS X|Windows NT|Android) ([^;)]+)/,
                2);
            if (a) return a;
            if (a = this.e(this.b, /Windows Phone( OS)? ([^;)]+)/, 2)) return a;
            if (a = this.e(this.b, /(iPhone )?OS ([\d_]+)/, 2)) return a;
            if (a = this.e(this.b, /(?:Linux|CrOS) ([^;)]+)/, 1)) {
                a = a.split(/\s/);
                for (var b = 0; b < a.length; b += 1)
                    if (/^[\d\._]+$/.test(a[b])) return a[b]
            }
            if (a = this.e(this.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) return a;
            return "Unknown"
        };
        N.prototype.sb = function() {
            return this.b.indexOf("MSIE") != -1
        };
        N.prototype.Fb = function() {
            var a = this.C(),
                b = this.ba(),
                c = L(b),
                d = this.e(this.b, /MSIE ([\d\w\.]+)/,
                    1),
                e = L(d),
                f = a == "Windows" && e.f >= 6 || a == "Windows Phone" && c.f >= 8;
            return new M("MSIE", e, d, "MSIE", e, d, a, c, b, this.aa(this.p), new I(f, false, false))
        };
        N.prototype.vb = function() {
            return this.b.indexOf("Opera") != -1
        };
        N.prototype.wb = function() {
            return /OPR\/[\d.]+/.test(this.b)
        };
        N.prototype.Gb = function() {
            var a = "Unknown",
                b = this.e(this.b, /Presto\/([\d\w\.]+)/, 1),
                c = L(b),
                d = this.ba(),
                e = L(d),
                f = this.aa(this.p);
            if (c.ka()) a = "Presto";
            else {
                if (this.b.indexOf("Gecko") != -1) a = "Gecko";
                b = this.e(this.b, /rv:([^\)]+)/, 1);
                c = L(b)
            }
            if (this.b.indexOf("Opera Mini/") !=
                -1) {
                var l = this.e(this.b, /Opera Mini\/([\d\.]+)/, 1),
                    g = L(l);
                return new M("OperaMini", g, l, a, c, b, this.C(), e, d, f, new I(false, false, false))
            }
            if (this.b.indexOf("Version/") != -1) {
                l = this.e(this.b, /Version\/([\d\.]+)/, 1);
                g = L(l);
                if (g.ka()) return new M("Opera", g, l, a, c, b, this.C(), e, d, f, new I(g.f >= 10, false, false))
            }
            l = this.e(this.b, /Opera[\/ ]([\d\.]+)/, 1);
            g = L(l);
            if (g.ka()) return new M("Opera", g, l, a, c, b, this.C(), e, d, f, new I(g.f >= 10, false, false));
            return new M("Opera", new J, "Unknown", a, c, b, this.C(), e, d, f, new I(false,
                false, false))
        };
        N.prototype.xb = function() {
            return /AppleWeb(K|k)it/.test(this.b)
        };
        N.prototype.Ga = function() {
            var a = this.C(),
                b = this.ba(),
                c = L(b),
                d = this.e(this.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                e = L(d),
                f = "Unknown",
                l = new J,
                g = "Unknown",
                i = false;
            if (/OPR\/[\d.]+/.test(this.b)) f = "Opera";
            else if (this.b.indexOf("Chrome") != -1 || this.b.indexOf("CrMo") != -1 || this.b.indexOf("CriOS") != -1) f = "Chrome";
            else if (/Silk\/\d/.test(this.b)) f = "Silk";
            else if (a == "BlackBerry" || a == "Android") f = "BuiltinBrowser";
            else if (this.b.indexOf("PhantomJS") !=
                -1) f = "PhantomJS";
            else if (this.b.indexOf("Safari") != -1) f = "Safari";
            else if (this.b.indexOf("AdobeAIR") != -1) f = "AdobeAIR";
            else if (this.b.indexOf("FBAN") != -1) f = "FBWebUI";
            if (f == "BuiltinBrowser") g = "Unknown";
            else if (f == "Silk") g = this.e(this.b, /Silk\/([\d\._]+)/, 1);
            else if (f == "Chrome") g = this.e(this.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2);
            else if (this.b.indexOf("Version/") != -1) g = this.e(this.b, /Version\/([\d\.\w]+)/, 1);
            else if (f == "AdobeAIR") g = this.e(this.b, /AdobeAIR\/([\d\.]+)/, 1);
            else if (f == "Opera") g = this.e(this.b,
                /OPR\/([\d.]+)/, 1);
            else if (f == "PhantomJS") g = this.e(this.b, /PhantomJS\/([\d.]+)/, 1);
            else if (f == "FBWebUI") g = this.e(this.b, /FBSV\/([\d.]+)/, 1);
            l = L(g);
            i = f == "AdobeAIR" ? l.f > 2 || l.f == 2 && l.s >= 5 : a == "BlackBerry" ? c.f >= 10 : a == "Android" ? c.f > 2 || c.f == 2 && c.s > 1 : e.f >= 526 || e.f >= 525 && e.s >= 13;
            var j = e.f < 536 || e.f == 536 && e.s < 11,
                h = a == "iPhone" || a == "iPad" || a == "iPod" || a == "Macintosh";
            return new M(f, l, g, "AppleWebKit", e, d, a, c, b, this.aa(this.p), new I(i, j, h))
        };
        N.prototype.rb = function() {
            return this.b.indexOf("Gecko") != -1
        };
        N.prototype.Eb =
            function() {
                var a = "Unknown",
                    b = new J,
                    c = "Unknown",
                    d = this.ba(),
                    e = L(d),
                    f = false;
                if (this.b.indexOf("Firefox") != -1) {
                    a = "Firefox";
                    c = this.e(this.b, /Firefox\/([\d\w\.]+)/, 1);
                    b = L(c);
                    f = b.f >= 3 && b.s >= 5
                } else if (this.b.indexOf("Mozilla") != -1) a = "Mozilla";
                var l = this.e(this.b, /rv:([^\)]+)/, 1),
                    g = L(l);
                f || (f = g.f > 1 || g.f == 1 && g.s > 9 || g.f == 1 && g.s == 9 && g.Ha >= 2 || l.match(/1\.9\.1b[123]/) != null || l.match(/1\.9\.1\.[\d\.]+/) != null);
                return new M(a, b, c, "Gecko", g, l, this.C(), e, d, this.aa(this.p), new I(f, false, false))
            };
        N.prototype.e = function(a,
            b, c) {
            if ((a = a.match(b)) && a[c]) return a[c];
            return ""
        };
        N.prototype.aa = function(a) {
            if (a.documentMode) return a.documentMode
        }
    });

    function ia(a) {
        this.yb = a || ja
    }
    var ja = "-";
    G(function() {
        ia.prototype.Ib = function(a) {
            return a.replace(/[\W_]+/g, "").toLowerCase()
        };
        ia.prototype.h = function() {
            for (var a = [], b = 0; b < arguments.length; b++) a.push(this.Ib(arguments[b]));
            return a.join(this.yb)
        }
    });

    function O(a, b, c, d) {
        this.a = a;
        this.k = b;
        this.ea = c;
        this.l = d || ka;
        this.j = new ia("-")
    }
    var ka = "mti";
    G(function() {
        O.prototype.xa = function() {
            this.a.A(this.k, this.j.h(this.l, "loading"));
            this.I("loading")
        };
        O.prototype.cb = function(a) {
            this.a.A(this.k, this.j.h(this.l, a.getName(), a.o().toString(), "loading"));
            this.I("fontloading", a)
        };
        O.prototype.ab = function(a) {
            this.a.N(this.k, this.j.h(this.l, a.getName(), a.o().toString(), "loading"));
            this.a.N(this.k, this.j.h(this.l, a.getName(), a.o().toString(), "inactive"));
            this.a.A(this.k, this.j.h(this.l, a.getName(), a.o().toString(), "active"));
            this.I("fontactive", a)
        };
        O.prototype.bb =
            function(a) {
                this.a.N(this.k, this.j.h(this.l, a.getName(), a.o().toString(), "loading"));
                this.a.za(this.k, this.j.h(this.l, a.getName(), a.o().toString(), "active")) || this.a.A(this.k, this.j.h(this.l, a.getName(), a.o().toString(), "inactive"));
                this.I("fontinactive", a)
            };
        O.prototype.$ = function() {
            this.a.N(this.k, this.j.h(this.l, "loading"));
            this.a.za(this.k, this.j.h(this.l, "active")) || this.a.A(this.k, this.j.h(this.l, "inactive"));
            this.I("inactive")
        };
        O.prototype.$a = function() {
            this.a.N(this.k, this.j.h(this.l, "loading"));
            this.a.N(this.k, this.j.h(this.l, "inactive"));
            this.a.A(this.k, this.j.h(this.l, "active"));
            this.I("active")
        };
        O.prototype.I = function(a, b) {
            if (this.ea[a]) b ? this.ea[a](b.getName(), b.o()) : this.ea[a]()
        }
    });

    function la() {
        this.Ea = {}
    }
    G(function() {
        la.prototype.Xa = function(a, b) {
            this.Ea[a] = b
        };
        la.prototype.kb = function(a, b) {
            var c = [];
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    var e = this.Ea[d];
                    e && c.push(e(a[d], b))
                }
            return c
        }
    });

    function P(a, b) {
        this.w = a;
        this.P = 4;
        this.F = "n";
        if (a = (b || "n4").match(/^([nio])([1-9])$/i)) {
            this.F = a[1];
            this.P = parseInt(a[2], 10)
        }
    }
    G(function() {
        P.prototype.getName = function() {
            return this.w
        };
        P.prototype.ib = function() {
            return this.Ka(this.w)
        };
        P.prototype.Ka = function(a) {
            var b = [];
            a = a.split(/,\s*/);
            for (var c = 0; c < a.length; c++) {
                var d = a[c].replace(/['"]/g, "");
                d.indexOf(" ") == -1 ? b.push(d) : b.push("'" + d + "'")
            }
            return b.join(",")
        };
        P.prototype.o = function() {
            return this.F + this.P
        };
        P.prototype.jb = function() {
            var a = "normal",
                b = this.P + "00";
            if (this.F === "o") a = "oblique";
            else if (this.F === "i") a = "italic";
            return "font-style:" + a + ";font-weight:" + b + ";"
        }
    });

    function Q(a, b) {
        this.a = a;
        this.V = b;
        this.J = this.a.createElement("span", {
            "aria-hidden": "true"
        }, this.V)
    }
    G(function() {
        Q.prototype.pa = function(a) {
            this.a.Ma(this.J, this.Za(a))
        };
        Q.prototype.ja = function() {
            this.a.v("body", this.J)
        };
        Q.prototype.Za = function(a) {
            return "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.ib() + ";" + a.jb()
        };
        Q.prototype.remove = function() {
            this.a.La(this.J)
        }
    });

    function R(a, b, c, d, e, f, l, g) {
        this.ta = a;
        this.ob = b;
        this.a = c;
        this.B = d;
        this.V = g || ma;
        this.G = e;
        this.Ba = {};
        this.ra = f || 5E4;
        this.Da = l || null;
        this.U = this.T = null;
        this.Jb()
    }
    var S = {
            Vb: "serif",
            Ub: "sans-serif",
            Sb: "monospace"
        },
        ma = "BESb\uc5d0swy";
    G(function() {
        R.prototype.Jb = function() {
            var a = new Q(this.a, this.V);
            a.ja();
            for (var b in S)
                if (S.hasOwnProperty(b)) {
                    a.pa(new P(S[b], this.B.o()));
                    this.Ba[S[b]] = a.J.offsetWidth
                }
            a.remove()
        };
        R.prototype.start = function() {
            this.T = new Q(this.a, this.V);
            this.T.ja();
            this.U = new Q(this.a, this.V);
            this.U.ja();
            this.Kb = ea();
            this.T.pa(new P(this.B.getName() + ",serif", this.B.o()));
            this.U.pa(new P(this.B.getName() + ",sans-serif", this.B.o()));
            this.ua()
        };
        R.prototype.da = function(a, b) {
            return a === this.Ba[b]
        };
        R.prototype.Ob = function(a,
            b) {
            for (var c in S)
                if (S.hasOwnProperty(c))
                    if (this.da(a, S[c]) && this.da(b, S[c])) return true;
            return false
        };
        R.prototype.nb = function() {
            return ea() - this.Kb >= this.ra
        };
        R.prototype.qb = function(a, b) {
            return this.da(a, "serif") && this.da(b, "sans-serif")
        };
        R.prototype.Aa = function(a, b) {
            return this.G.Mb && this.Ob(a, b)
        };
        R.prototype.tb = function() {
            return this.Da === null || this.Da.hasOwnProperty(this.B.getName())
        };
        R.prototype.ua = function() {
            var a = this.T.J.offsetWidth,
                b = this.U.J.offsetWidth;
            if (this.qb(a, b) || this.Aa(a, b))
                if (this.nb()) this.Aa(a,
                    b) && this.tb() ? this.fa(this.ta) : this.fa(this.ob);
                else this.Ya();
            else this.fa(this.ta)
        };
        R.prototype.Ya = function() {
            setTimeout(D(function() {
                this.ua()
            }, this), 25)
        };
        R.prototype.fa = function(a) {
            this.T.remove();
            this.U.remove();
            a(this.B)
        }
    });

    function T(a, b, c, d) {
        this.a = b;
        this.L = c;
        this.va = 0;
        this.Na = this.Ca = false;
        this.ra = d;
        this.G = a.G
    }
    G(function() {
        T.prototype.Z = function(a, b, c, d) {
            if (a.length === 0 && d) this.L.$();
            else {
                this.va += a.length;
                if (d) this.Ca = d;
                for (d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = b[e.getName()];
                    this.L.cb(e);
                    (new R(D(this.eb, this), D(this.fb, this), this.a, e, this.G, this.ra, c, f)).start()
                }
            }
        };
        T.prototype.eb = function(a) {
            this.L.ab(a);
            this.Na = true;
            this.wa()
        };
        T.prototype.fb = function(a) {
            this.L.bb(a);
            this.wa()
        };
        T.prototype.wa = function() {
            if (--this.va == 0 && this.Ca) this.Na ? this.L.$a() : this.L.$()
        }
    });
    mti.Qb = function() {
        this.Ka = '"'
    };
    mti.Q = function() {
        this.cc = mti.Q.Ta;
        this.Lb = mti.Q.Va
    };
    mti.Q.Ta = ["font-style", "font-weight"];
    mti.Q.Va = {
        "font-style": [
            ["n", "normal"]
        ],
        "font-weight": [
            ["4", "normal"]
        ]
    };
    mti.Q.Rb = function(a, b, c) {
        this.$b = a;
        this.dc = b;
        this.Lb = c
    };

    function V(a, b, c) {
        this.la = a;
        this.ya = b;
        this.b = c;
        this.ma = this.na = 0
    }
    G(function() {
        V.prototype.Wa = function(a, b) {
            this.ya.Xa(a, b)
        };
        V.prototype.load = function(a) {
            var b = a.context || this.la;
            this.a = new H(this.la, b);
            b = new O(this.a, b.document.documentElement, a);
            this.b.G.Nb ? this.Bb(b, a) : b.$()
        };
        V.prototype.ub = function(a, b, c, d) {
            var e = this;
            if (d) a.load(function(f, l, g) {
                e.Db(b, c, f, l, g)
            });
            else {
                a = --this.na == 0;
                this.ma--;
                if (a) this.ma == 0 ? b.$() : b.xa();
                c.Z([], {}, null, a)
            }
        };
        V.prototype.Db = function(a, b, c, d, e) {
            var f = --this.na == 0;
            f && a.xa();
            setTimeout(function() {
                b.Z(c, d || {}, e || null, f)
            }, 0)
        };
        V.prototype.Bb =
            function(a, b) {
                var c = this.ya.kb(b, this.a);
                b = b.timeout;
                this.ma = this.na = c.length;
                b = new T(this.b, this.a, a, b);
                for (var d = 0, e = c.length; d < e; d++) {
                    var f = c[d];
                    na(f, this.b, D(this.ub, this, f, a, b))
                }
            }
    });
    var oa = window.MonoTypeWebFonts = function() {
        var a = (new N(navigator.userAgent, document)).parse();
        return new V(window, new la, a)
    }();
    window.MonoTypeWebFonts.load = oa.load;
    var W = window.MTIConfig || {
        isAsync: false,
        EnableCustomFOUTHandler: false,
        RemoveMTIClass: false
    };
    mti.r = function(a, b, c) {
        this.O = a;
        this.a = b;
        this.Hb = c;
        this.W = {};
        this.q = [];
        this.g = []
    };
    mti.r.prototype.indexOf = function(a, b) {
        if (a.indexOf) return a.indexOf(b);
        else {
            for (var c = 0; c < a.length; c++)
                if (a[c] == b) return c;
            return -1
        }
    };

    function X(a, b, c) {
        var d = a.Hb,
            e = a.a.getComputedStyle(b),
            f = e.fontFamily,
            l = "",
            g = e.fontStyle,
            i = 0,
            j = 0,
            h = "";
        f = (f || "").replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|");
        if (f != "") {
            var p = f.split("|"),
                w = "";
            for (i = 0; i < p.length; i++) {
                var u = new RegExp("^(" + p[i] + ")$", "ig");
                for (j = 0; j < d.length; j++) {
                    var n = d[j];
                    w = n.fontfamily;
                    var t, s, q = w;
                    if (n.fontWeight != undefined && n.fontStyle != undefined) {
                        t = n.fontWeight;
                        s = n.fontStyle;
                        h = s.charAt(0) + t / 100;
                        l = e.fontWeight == "normal" ? 400 : e.fontWeight == "bold" ? 700 : e.fontWeight
                    } else {
                        var k =
                            "h1,h2,h3,h4,h5,h6,strong,b".split(",");
                        if (b.nodeType == 1) l = a.indexOf(k, b.tagName.toLowerCase()) >= 0 ? 400 : e.fontWeight == "normal" ? 400 : e.fontWeight == "bold" ? 700 : 400
                    }
                    if (t != undefined || s != undefined) q += "_" + h;
                    k = w.replace(/^\s|\s$/g, "");
                    var m = q.replace(/^\s|\s$/g, ""),
                        E = u.test(k);
                    m = u.test(m);
                    if (E || m) {
                        if (t != undefined || s != undefined)
                            if (l == t && g == s) a.g.push(new P(k, h));
                            else q == f && a.g.push(new P(k, h));
                        else {
                            h = g.charAt(0) + l / 100;
                            a.g.push(new P(k))
                        }
                        if (W.EnableCustomFOUTHandler == true) a.a.A(b, c ? "mti_font_element" + c : "mti_font_element");
                        a.q.push(b);
                        w = w;
                        q = b.getAttribute("style");
                        q = q != null ? typeof q == "string" ? q : "cssText" in q ? q.cssText : "" : "";
                        w += q && q.indexOf("font-weight") > -1 && q.indexOf("font-style") > -1 ? "_" + g.charAt(0) + l / 100 : h.length > 1 ? "_" + h : "";
                        if (n.enableSubsetting || W.EnableDSForAllFonts) {
                            n = "";
                            n = a.S(a.a.ia(b));
                            if (a.W[w.replace(/^\s|\s$/g, "")]) n += a.S(a.W[w.replace(/^\s|\s$/g, "")]);
                            a.W[w.replace(/^\s|\s$/g, "")] = n
                        }
                    }
                }
            }
        }
    }

    function Y(a, b, c) {
        b = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(",");
        var d = a.O,
            e = null;
        do
            if (d) {
                e = d.firstChild;
                if (e == null) {
                    if (d.nodeType == 1)
                        if (a.indexOf(b, d.tagName.toLowerCase()) < 0) c ? X(a, d, c) : X(a, d);
                    e = d.nextSibling
                }
                if (e == null) {
                    d = d;
                    do {
                        e = d.parentNode;
                        if (e == a.O) {
                            if (e.tagName.toLowerCase() != "body")
                                if (a.indexOf(b, e.tagName.toLowerCase()) < 0) c ? X(a, e, c) : X(a, e);
                            break
                        }
                        if (e != null) {
                            if (e.nodeType == 1)
                                if (a.indexOf(b, e.tagName.toLowerCase()) < 0) c ? X(a, e, c) : X(a, e);
                            d = e;
                            e = e.nextSibling
                        }
                    } while (e == null)
                }
                d = e
            }
        while (d != a.O);
        c = false;
        for (var f in a.W) {
            c = true;
            break
        }
        if (c) return a.W;
        return null
    }
    mti.r.prototype.D = function() {
        var a = this.g,
            b = a == null ? 0 : a.length,
            c = {},
            d, e = [];
        for (d = 0; d < b; d += 1) {
            var f = a[d].w + "||" + a[d].P + "||" + a[d].F;
            c[f] = f
        }
        for (d in c) {
            b = c[d].split("||");
            a = b[0];
            (b = b[2] + b[1]) ? e.push(new P(a, b)): e.push(new P(a))
        }
        return this.g = e
    };
    mti.r.prototype.Y = function(a, b, c) {
        var d = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(","),
            e = this.O,
            f = null;
        do {
            f = e.firstChild;
            if (f == null) {
                e.nodeType == 1 && this.indexOf(d, e.tagName.toLowerCase()) < 0 && X(this, e);
                f = e.nextSibling
            }
            if (f == null) {
                e = e;
                do {
                    f = e.parentNode;
                    if (f == this.O) break;
                    f.nodeType == 1 && this.indexOf(d, f.tagName.toLowerCase()) < 0 && this.a.u(f).indexOf(a) > -1 && this.a.Y(f, a, b, c);
                    e = f;
                    f = f.nextSibling
                } while (f == null)
            }
            e = f
        } while (e != this.O);
        return null
    };
    mti.r.prototype.S = function(a) {
        if (a && typeof a == "string") {
            a = a.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, "");
            for (var b = "", c = a.length, d = null, e = 0; e < c; e++) {
                d = a.charAt(e);
                if (b.indexOf(d) == -1) b += d
            }
            return b
        }
        return ""
    };
    mti.Qa = 4E4;
    mti.d = function(a, b, c, d, e) {
        this.M = a;
        this.b = b;
        this.a = c;
        this.c = d;
        this.gb = {};
        this.i = e;
        this.g = [];
        this.K = false
    };
    mti.d.Sa = "monotype";

    function na(a, b, c) {
        b = a.c.projectId;
        var d;
        if (b) {
            a.M.mti_element_cache = [];
            pa(a);
            var e = a.b.getName();
            e = e.toLowerCase();
            var f = e == "opera" ? true : false,
                l = a.b.z,
                g = e == "msie" && l <= 8 ? true : false,
                i = function() {
                    if (W.UseHybrid) {
                        window.MonoTypeWebFonts.addEvent("active", function() {
                            qa(a, a.ca, d)
                        });
                        window.MonoTypeWebFonts.addEvent("inactive", function() {
                            qa(a, a.ca, d)
                        })
                    }

                    function y() {
                        v = new mti.r(document.body, a.a, a.c.pfL);
                        F = Y(v);
                        f && ra(a);
                        a.M.mti_element_cache = v.q;
                        d = v.D();
                        Z(a, d, F);
                        var x = v.q;
                        a.i != null && mti.t(a.i, a.i.load, x)();
                        for (var C = 0; C < x.length; C++)
                            for (var r in a.n) a.a.u(x[C]).indexOf(r) > -1 && a.a.Y(x[C], r, a.n[r], g, a.K)
                    }
                    var A = a.c.reqSub || W.EnableDSForAllFonts,
                        v = null,
                        F = null;
                    if (f && A) {
                        ua(a);
                        va(a, function() {
                            y()
                        })
                    } else if (!f && A) y();
                    else {
                        v = new mti.r(document.body, a.a, a.c.pfL);
                        F = Y(v);
                        Z(a, v.D);
                        d = v.D();
                        a.M.mti_element_cache = v.q;
                        a.i != null && mti.t(a.i, a.i.load, v.q)()
                    }
                    c(true)
                };
            if (W.isAsync === true) W.onReady = i;
            else {
                setTimeout(function() {
                    document.documentElement.style.visibility = ""
                }, 750);
                if (a.c.reqSub || W.EnableDSForAllFonts)
                    if (W.CheckFontWatcher &&
                        W.UseHybrid) {
                        var j = {},
                            h = 0,
                            p = a.c.pfL.length;
                        b = a.c.projectId;
                        e = a.c.ec;
                        l = a.c.fcURL;
                        for (var w = a.c.ck, u = 0; u < a.c.pfL.length; u++) {
                            var n = a.c.pfL[u],
                                t = n.fontfamily,
                                s = n.contentIds,
                                q = n.enableOtf;
                            if (n.enableSubsetting || W.EnableDSForAllFonts) {
                                getCookieFlag = false;
                                var k = wa(a, s),
                                    m, E;
                                if (n.fontWeight != undefined && n.fontStyle != undefined) {
                                    m = n.fontWeight;
                                    E = n.fontStyle
                                }
                                fontURL = $(a, s, b, false, e, l, "", w, t, m, E, null, k, q);
                                n = k != null && k.toUpperCase() == "EOT" || k.toUpperCase() == "MTX";
                                _cssText = '@font-face{\nfont-family:"' + t + '_fw";';
                                _cssText += '\nsrc:url("' + fontURL + '")';
                                s = {
                                    TTF: "truetype",
                                    WOFF: "woff",
                                    SVG: "svg",
                                    MTX: "truetype",
                                    OTF: "opentype",
                                    WOFF2: "woff2"
                                };
                                n || (_cssText += ' format("' + s[k.toUpperCase()] + '")');
                                _cssText += ";}\n";
                                k = document.getElementById("mti_stylesheet_cache" + a.c.projectId);
                                var B;
                                if (k == null) B = a.a.createElement("style", {
                                    type: "text/css",
                                    id: "mti_stylesheet_cache" + a.c.projectId
                                });
                                if (_cssText != "") {
                                    k == null && a.a.v("head", B);
                                    if (B.styleSheet) B.styleSheet.cssText += _cssText;
                                    else B.innerHTML += _cssText
                                }
                                xa(a, t + "_fw", function(y, A) {
                                    j[y] =
                                        A;
                                    h++;
                                    if (h == p) {
                                        for (A = y = 0; A < a.c.pfL.length; A++)
                                            if (j[a.c.pfL[A].fontfamily + "_fw"] == true) {
                                                a.c.pfL[A].enableSubsetting = false;
                                                y++
                                            }
                                        if (y == h) Z(a, a.c.pfL);
                                        else {
                                            y = document.getElementById("mti_stylesheet_cache" + a.c.projectId);
                                            y.parentNode.removeChild(y);
                                            ya(a, i)
                                        }
                                    }
                                })
                            } else p--
                        }
                    } else ya(a, i);
                else a.Pa(function() {
                    var y = new mti.r(document.body, a.a, a.c.pfL);
                    Y(y);
                    d = y.D();
                    Z(a, d);
                    a.M.mti_element_cache = y.q;
                    a.i != null && mti.t(a.i, a.i.load, y.q)();
                    c(true)
                });
                if (W.EnableCustomFOUTHandler == true) document.documentElement.style.visibility =
                    "hidden"
            }
            var o = [];
            if (d) o = d;
            if (a.c.reqSub && (d == null ? 0 : d.length) == 0 || f)
                for (m = 0; m < a.c.pfL.length; m++) o.push(new P(a.c.pfL[m].fontfamily));
            a.M["__mti_fntLst" + b] = function() {
                for (var y = [], A = {}, v = [], F = 0; F < o.length; F++)
                    if (!A.hasOwnProperty(o[F])) {
                        y.push({
                            fontfamily: o[F].w
                        });
                        v.push(o[F]);
                        A[o[F]] = 1
                    }
                return y
            }
        } else c(true)
    }

    function za(a, b) {
        if (document.getElementsByClassName) return document.getElementsByClassName(b);
        else {
            var c = [];
            a.a.Oa(document.body, function(d) {
                var e;
                e = d.className;
                var f;
                if (e) {
                    e = e.split(" ");
                    for (f = 0; f < e.length; f++)
                        if (e[f] === b) {
                            c.push(d);
                            break
                        }
                }
            });
            return c
        }
    }

    function ua(a, b) {
        var c = document.createElement("STYLE");
        c.setAttribute("type", "text/css");
        c.id = "monotype_fake_fontface_" + a.c.projectId;
        var d = "";
        a = a.c.pfL;
        if (a != null) {
            d += "@font-face{font-family:opera_testfont;src:url(data:font/opentype;base64,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)}";
            for (var e =
                    0; e < a.length; e++) d += "@font-face{font-family:'" + a[e].fontfamily + (b ? b : "") + "';src:url(data:font/opentype;base64,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);}"
        }
        c.textContent =
            d;
        b = document.getElementsByTagName("HEAD");
        b.length > 0 && b[0].appendChild(c)
    }

    function ra(a) {
        (a = document.getElementById("monotype_fake_fontface_" + a.c.projectId)) && a.parentNode.removeChild(a)
    }

    function va(a, b) {
        var c = document.createElement("SPAN");
        c.innerHTML = "MMMWWW";
        c.style.position = "absolute";
        c.style.left = "-32768px";
        c.style.fontFamily = "opera_testfont";
        document.documentElement.appendChild(c);
        var d = 0,
            e = (new Date).getTime();
        d = window.setInterval(function() {
            if (a.a.u(c) === "opera_testfont" || (new Date).getTime() - e > 200) {
                try {
                    document.documentElement.removeChild(c)
                } catch (f) {}
                b();
                window.clearInterval(d)
            }
        }, 60)
    }

    function wa(a, b) {
        var c = a.c.ffArray,
            d = a.b.getName();
        d = d.toLowerCase();
        var e = a.b.z;
        if (d == "firefox") d = "mozilla";
        if (/ipad|ipod|iphone/.test(a.b.Ja.toLowerCase())) d = "msafari";
        if (d.toLowerCase() == "mozilla" && e == "Unknown") {
            e = a.b.R;
            d = "msie"
        }
        if (d == "msafari" && e.toLowerCase() == "unknown") e = a.b.Ia.f + "." + a.b.Ia.s;
        a = c[d];
        c = "";
        for (var f in a)
            if (parseFloat(e) >= parseFloat(f))
                if (b[a[f].toUpperCase()]) c = a[f];
        return c
    }

    function Aa(a, b, c, d, e) {
        a = "";
        c = c;
        c += d != undefined && e != undefined ? "_" + e.charAt(0) + d / 100 : "_n4";
        if (b && b[c]) a = b[c];
        return a.length > 0 ? a : null
    }
    mti.d.prototype.n = {};

    function Z(a, b, c, d) {
        var e = "TTF",
            f = a.c.projectId,
            l = a.c.ec,
            g = a.c.fcURL,
            i = a.c.dfcURL,
            j = a.a.createElement("style", {
                type: "text/css",
                id: "mti_fontface_" + (d ? "Aj_" : "") + a.c.projectId
            }),
            h = "",
            p = false,
            w = {},
            u = {};
        a.n = {};
        var n = {
                TTF: "truetype",
                WOFF: "woff",
                SVG: "svg",
                MTX: "truetype",
                OTF: "opentype",
                WOFF2: "woff2"
            },
            t = a.b.getName();
        t = t.toLowerCase();
        var s = a.b.z;
        if (t.toLowerCase() == "mozilla" && s == "Unknown") {
            s = a.b.R;
            t = "msie"
        }
        var q = t == "msie" && s < 8 ? true : false;
        s = t == "msie" && s <= 8 ? true : false;
        t = t == "opera" ? true : false;
        var k = null,
            m = null;
        b || (b = []);
        for (var E = 0; E < a.c.pfL.length; E++) {
            var B = a.c.pfL[E],
                o = B.fontfamily,
                y = B.contentIds,
                A = B.enableOtf,
                v = B.enableSubsetting,
                F = null;
            if (B.fontWeight != undefined && B.fontStyle != undefined) {
                k = B.fontWeight;
                m = B.fontStyle;
                F = m.charAt(0) + k / 100;
                a.K = true
            }
            e = wa(a, y);
            var x = true,
                C = "";
            if (b.length > 0 || t || !v) {
                x = t || !v ? true : false;
                for (v = 0; v < b.length; v++) {
                    C = k != undefined || m != undefined ? o + "_" + m.charAt(0) + k / 100 : o + "_n4";
                    if (b[v].w == o && (k ? b[v].P == k / 100 : true) && (m ? b[v].F == m.charAt(0) : true)) {
                        F == null ? a.g.push(new P(o)) : a.g.push(new P(o,
                            F));
                        x = true;
                        break
                    }
                }
                if (t) F == null ? a.g.push(new P(o)) : a.g.push(new P(o, F));
                if (x) {
                    F = e != null && e.toUpperCase() == "EOT" || e.toUpperCase() == "MTX";
                    B = W.EnableDSForAllFonts == true ? true : B.enableSubsetting;
                    x = i;
                    var r = a.c.ck;
                    v = o;
                    u = k;
                    var z = m,
                        K = e,
                        U = y[K.toUpperCase()];
                    x = (window.location.protocol == "https:" ? "https://" : "http://") + x.replace("http://", "").replace("https://", "");
                    x = x + "?";
                    if (l) x += r + "&";
                    x += "fctypeId=" + a.c.fctypeArray[K] + "&fcId=" + y.TTF + "&origId=" + U;
                    x += "&projectId=" + f;
                    x += "&content=";
                    r = "";
                    a.b.getName().toLowerCase();
                    if (c) {
                        K = null;
                        u = a.S(Aa(a, c, v, u, z)).split("::");
                        v = u[0];
                        u = u[1];
                        z = v.split("").sort().join("");
                        K = "";
                        if (v) K = z.replace('"', "").replace("?", "").replace(";", "").replace("#", "").replace("&", "");
                        if (K && K.length > 0 || u && u.length > 0) {
                            r += (K || "") + ma + "Mm";
                            if (u != "") r += u
                        }
                    }
                    v = x + r;
                    z = a.c.bsmcArray;
                    r = a.b.getName();
                    r = r.toLowerCase();
                    if (r == "firefox") r = "mozilla";
                    if (/ipad|ipod|iphone/.test(a.b.Ja.toLowerCase())) r = "msafari";
                    u = a.b.z;
                    if (r.toLowerCase() == "mozilla" && u == "Unknown") {
                        u = a.b.R;
                        r = "msie"
                    }
                    z = z[r];
                    r = "";
                    for (var sa in z)
                        if (parseFloat(u) >=
                            parseFloat(sa)) r = z[sa];
                    u = r;
                    if (v.length > u) {
                        x = u - x.length;
                        x = {
                            Fa: Math.ceil(v.length / x),
                            ac: x
                        }
                    } else x = {
                        Fa: 1
                    };
                    v = x.Fa;
                    u = false;
                    if (q && v > 1) {
                        v = 1;
                        u = true;
                        B = false
                    }
                    x = "";
                    if (v > 1 || d) {
                        if (c !== null) {
                            p = true;
                            w[C] || (w[C] = []);
                            if (c) var ta = c[C];
                            if (ta) {
                                u = [];
                                z = "";
                                r = z = (d ? o.length > 25 ? o.substring(0, 20) : o : o) + (d ? d : "");
                                r += s && m != undefined && k != undefined ? "_" + m.charAt(0) + k / 100 : m != undefined && k != undefined ? "_" + m.charAt(0) + k / 100 : "_n4";
                                w[C].push(r);
                                c[r] = ta;
                                x = v > 1 ? $(a, y, f, false, l, g, i, a.c.ck, z, k, m, c, e, A) : $(a, y, f, B, l, g, i, a.c.ck, z, k, m, c, e, A);
                                if (x !=
                                    "") {
                                    h += '@font-face{\nfont-family:"' + (s && m != undefined && k != undefined ? r : z) + '";';
                                    if (s == false && k != undefined && m != undefined) {
                                        h += "\nfont-style:" + m + ";";
                                        h += "\nfont-weight:" + k + ";"
                                    }
                                    h += '\nsrc:url("' + x + '")';
                                    F || (h += ' format("' + n[e.toUpperCase()] + '")');
                                    h += ";}\n";
                                    u.push("'" + z + "'")
                                }
                                a.n[o] = u
                            } else if (s && !B) {
                                if (s && k != undefined && m != undefined) o += "_" + m.charAt(0) + k / 100;
                                x = $(a, y, f, B, l, g, i, a.c.ck, o + (d ? d : ""), k, m, u ? null : c, e, A);
                                if (x != "") {
                                    h += '@font-face{\nfont-family:"' + o + (d ? d : "") + '";';
                                    if (s == false && k != undefined && m != undefined) {
                                        h +=
                                            "\nfont-style:" + m + ";";
                                        h += "\nfont-weight:" + k + ";"
                                    }
                                    h += '\nsrc:url("' + x + '")';
                                    if (!F) {
                                        o = y[e.toUpperCase()];
                                        e = n[e.toUpperCase()];
                                        o || (e = n.TTF);
                                        h += " format('" + e + "')"
                                    }
                                    h += ";}\n"
                                }
                            }
                        }
                    } else {
                        x = $(a, y, f, B, l, g, i, a.c.ck, o + (d ? d : ""), k, m, u ? null : c, e, A);
                        if (x != "") {
                            A = "";
                            if (s && k != undefined && m != undefined) {
                                A = "_" + m.charAt(0) + k / 100;
                                a.n[o] = o + A
                            }
                            h += '@font-face{\nfont-family:"' + o + (d ? d : "") + A + '";';
                            if (s == false && k != undefined && m != undefined) {
                                h += "\nfont-style:" + m + ";";
                                h += "\nfont-weight:" + k + ";"
                            }
                            h += '\nsrc:url("' + x + '")';
                            if (!F) {
                                o = y[e.toUpperCase()];
                                e = n[e.toUpperCase()];
                                o || (e = n.TTF);
                                h += " format('" + (B == true && e == "woff2" ? "woff" : e) + "')"
                            }
                            h += ";}\n"
                        }
                    }
                }
            }
        }
        if (p === true || d) {
            a.a.La(a.a.getElementById("mti_stylesheet_" + (d ? "Aj_" : "") + a.c.projectId) || {});
            d ? pa(a, w, d) : pa(a, w)
        }
        h != "" && a.a.v("head", j);
        if (j.styleSheet) j.styleSheet.cssText = h;
        else {
            a = document.createTextNode(h);
            j.appendChild(a)
        }
    }

    function pa(a, b, c) {
        var d = new ia("-"),
            e = a.a.createElement("style", {
                type: "text/css",
                id: "mti_stylesheet_" + (c ? "Aj_" : "") + a.c.projectId
            }),
            f = "",
            l = "";
        l = W.UseTextIndent == true ? "text-align:left;text-indent:-9999px;font-size:0px" : "visibility:hidden;";
        if (W.EnableCustomFOUTHandler == true) {
            var g = a.c.pfL;
            f += "." + ka + "-loading .mti_font_element" + (c ? "_Aj" : "") + "{" + l + "}\n";
            for (var i = 0; i < g.length; i++) {
                var j = g[i].fontfamily,
                    h = "4",
                    p = "n";
                if (g[i].fontWeight != undefined && g[i].fontStyle != undefined) {
                    h = g[i].fontWeight / 100;
                    p = g[i].fontStyle.charAt(0)
                }
                if (c) j +=
                    c;
                if (j) f += "." + d.h(ka, j, p + h, "loading") + " .mti_font_element" + (c ? c : "") + "{" + l + "}\n"
            }
        }
        d = (new N(navigator.userAgent, document)).parse().getName();
        d = d.toLowerCase();
        h = a.b.z;
        if (d.toLowerCase() == "mozilla" && h == "Unknown") {
            h = a.b.R;
            d = "msie"
        }
        d = d == "msie" && h <= 8 ? true : false;
        for (i in a.c.selectorFontMap) {
            g = a.c.selectorFontMap[i];
            j = g.familyName;
            p = g.fontStyle;
            h = g.fontWeight;
            j = j;
            if (b && b[j] && b[j].length > 0) j = b[j].join("','");
            if (!c) {
                if (d && p != undefined && h != undefined) j += "_" + p.charAt(0) + h / 100;
                f += i + "{font-family:'" + j + "';";
                if (d ==
                    false && p != undefined && h != undefined) {
                    f += "\n font-style:" + p + ";";
                    f += "\n font-weight:" + h + ";"
                }
                if (a.i != null) {
                    h = g.otf;
                    p = g.vrnt;
                    if (h && h != null && h != "") f += a.i.Xb(h, p)
                }
                f += "}\n"
            }
            if (W.EnableCustomFOUTHandler == true) {
                f += "/*fout specific code:*/\n";
                h = i.split(",");
                for (var w in h) f += "." + ka + "-loading " + h[w] + "{" + l + "}\n"
            }
        }
        f != "" && a.a.v("head", e);
        if (e.styleSheet) e.styleSheet.cssText = f;
        else {
            a = document.createTextNode(f);
            e.appendChild(a)
        }
    }
    mti.d.prototype.S = function(a) {
        if (a && typeof a == "string") {
            a = a.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, "");
            for (var b = "", c = a.length, d = null, e = 0; e < c; e++) {
                d = a.charAt(e);
                if (b.indexOf(d) == -1) b += d
            }
            return b
        }
        return ""
    };

    function Ba(a, b, c) {
        if (b.toString().length < c) {
            a = (new Array(1 + c)).join("0");
            return (a + b).slice(-a.length)
        } else return b
    }

    function $(a, b, c, d, e, f, l, g, i, j, h, p, w, u, n) {
        var t = b[w.toUpperCase()],
            s = "http://",
            q = "";
        if (W.UseHybrid) {
            q = i + "_f";
            if (j != undefined && h != undefined) {
                fontVariation = h.charAt(0) + j / 100;
                q = (i.length > 25 ? i.substring(0, 20) : i) + "_" + fontVariation + "_f"
            }
            if (d == true && Ca(a, q) && !n) return $(a, b, c, false, e, f, l, g, i, j, h, p, w, u, true)
        }
        n = a.c.fontdataversion;
        var k = a.c.env;
        if (window.location.protocol == "https:") s = "https://";
        f = f.replace("http://", "").replace("https://", "");
        l = l.replace("http://", "").replace("https://", "");
        f = s + f + (u ? "ot/" :
            "");
        l = s + l;
        if (d) {
            q = l + "?";
            if (e) q += g + "&";
            e = a.c.fctypeArray[w];
            q += "fctypeId=" + (typeof e === "undefined" ? "3" : e) + "&fcId=" + b.TTF + "&origId=" + t;
            if (n == "v2") {
                q += "&fontdataversion=v2";
                if (k != "undefined" && k != "") q += "&env=" + k
            }
        } else if (e)
            if (t) {
                if (n == "v2") f += w.toUpperCase() == "EOT" ? "2/" : w.toUpperCase() == "WOFF" ? "3/" : w.toUpperCase() == "SVG" ? "11/" : w.toUpperCase() == "OTF" ? "13/" : w.toUpperCase() == "WOFF2" ? "14/" : "1/";
                q = f + t + "." + w.toLowerCase() + "?" + g
            } else q = f + "3/" + b.WOFF + ".woff?" + g;
        else q = f + "?fctypeId=" + a.c.fctypeArray[w] + "&fcId=" +
            t;
        q += "&projectId=" + c;
        a.b.getName().toLowerCase();
        b = null;
        if (p)
            if (d || W.EnableDSForAllFonts) {
                d = "";
                p = Aa(a, p, i, j, h);
                if (p == null) return q = "";
                p = a.S(p).split("").sort().join("");
                i = i;
                if (a.K) i += "_" + h.charAt(0) + j / 100;
                var m;
                b: {
                    j = i;
                    if (typeof Storage !== "undefined") {
                        c: {
                            try {
                                m = window.localStorage.getItem(j)
                            } catch (E) {
                                console && console.log("MTI_webfont_service::localStorage.getItem error::" + E.message);
                                m = false;
                                break c
                            }
                            m = m == null ? false : m.length > p.length ? Da(a, m, p) ? m : false : false
                        }
                        if (m == false && p) try {
                            window.localStorage.setItem(j,
                                p)
                        } catch (B) {
                            console && console.log("MTI_webfont_service::localStorage.setItem error::" + B.message)
                        } else if (m.length > 0) {
                            m = m;
                            break b
                        }
                    }
                    m = p
                }
                j = a.c.specialChar;
                h = j.length.toString().length;
                if (m && typeof m == "string") {
                    m = m.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, "");
                    i = "";
                    p = m.length;
                    d = null;
                    c = "";
                    e = [];
                    for (f = 0; f < p; f++) {
                        d = m.charAt(f);
                        if (mti.d.indexOf(j, escape(d)) > -1) {
                            if (mti.d.indexOf(e, d) == -1) {
                                e.push(d);
                                c += Ba(a, mti.d.indexOf(j, escape(d)), h)
                            }
                        } else if (i.indexOf(d) == -1) i += d
                    }
                    a = i + "::" + c
                } else a = "";
                a = a.split("::");
                normalChar = a[0];
                d = a[1].replace(":", "");
                if (normalChar) b = normalChar.replace('"', "").replace("?", "").replace(";", "").replace("#", "").replace("&", "");
                if (b && b.length > 0 || d && d.length > 0) {
                    q += "&content=" + (b || "") + ma + "Mm";
                    if (d != "") q += d
                } else q = ""
            }
        if (w != null && w.toUpperCase() == "SVG") q += "#" + t;
        return q
    }
    mti.d.indexOf = function(a, b) {
        if (Array.prototype.indexOf) return a.indexOf(b);
        else {
            var c = a.length >>> 0,
                d = Number(b) || 0;
            d = d < 0 ? Math.ceil(d) : Math.floor(d);
            if (d < 0) d += c;
            for (; d < c; d++)
                if (d in a && a[d] === b) return d;
            return -1
        }
    };

    function Ea(a, b) {
        var c = false;
        c = document.getElementById(b) === null ? false : true;
        if (!c) return false;
        var d = true;
        a.g = [];
        var e = a.c.projectId,
            f = a.c.ec,
            l = a.c.fcURL,
            g = a.c.ck;
        c = "";
        var i, j;
        d = a.b.z;
        var h = a.b.getName().toLowerCase(),
            p = h == "msie" && d <= 8 ? true : false,
            w = h == "opera" ? true : false,
            u = {
                TTF: "truetype",
                WOFF: "woff",
                SVG: "svg",
                MTX: "truetype",
                OTF: "opentype",
                WOFF2: "woff2"
            };
        d = true;
        if (W.UseHybrid) {
            d = false;
            var n = document.getElementById(b);
            [].push(n);
            h = a.a.getElementById("mti_fontface_" + e);
            if (h == null) {
                h = a.a.createElement("style", {
                    type: "text/css",
                    id: "mti_fontface_" + e
                });
                a.a.v("head", h)
            }
            var t = n.getAttribute("data-mtiFont"),
                s = a.a.getComputedStyle(n);
            if (t == null) t = s.fontFamily.replace(/^\s|\s$/g, "").replace(/'|"/g, "");
            for (var q = [], k = 0; k < a.c.pfL.length; k++) q.push(a.c.pfL[k].fontfamily);
            if (n.hasChildNodes && mti.d.indexOf(q, t) < 0) {
                k = n.childNodes;
                for (n = 0; n < k.length; n++)
                    if (k[n].nodeType == 1) {
                        t = a.a.u(k[n]).replace(/^\s|\s$/g, "").replace(/'|"/g, "");
                        if (mti.d.indexOf(q, t) > -1) break
                    }
            }
            q = s.fontWeight;
            s = s.fontStyle;
            k = s.charAt(0) + q / 100;
            var m = t.split(",");
            for (n = 0; n < m.length; n++) {
                d = m[n] + "_f";
                var E, B = false;
                for (k = 0; k < a.c.pfL.length; k++) {
                    E = a.c.pfL[k];
                    var o = E.fontfamily;
                    if (m[n] == o && E.enableSubsetting)
                        if (E.fontWeight != undefined && E.fontStyle != undefined) {
                            i = E.fontWeight;
                            j = E.fontStyle;
                            if (s == E.fontStyle && q == E.fontWeight) {
                                B = true;
                                k = j.charAt(0) + i / 100;
                                d = (o.length > 25 ? o.substring(0, 20) : o) + "_" + k + "_f";
                                a.g.push(new P(o, k));
                                break
                            }
                        } else {
                            a.g.push(new P(o));
                            B = true;
                            break
                        }
                }
                if (Ca(a, d) && B) {
                    d = false;
                    contentIdArray = E.contentIds;
                    enableOtf = E.enableOtf;
                    fFormat = wa(a, contentIdArray);
                    E = o;
                    if (p && j != undefined && i != undefined) E += "_" + j.charAt(0) + i / 100;
                    fontURL = $(a, contentIdArray, e, false, f, l, "", g, E, i, j, null, fFormat, enableOtf);
                    if (fontURL != "") {
                        c += '@font-face{\nfont-family:"' + o + '";';
                        if (p == false && i != undefined && j != undefined) {
                            c += "\nfont-style:" + j + ";";
                            c += "\nfont-weight:" + i + ";"
                        }
                        c += '\nsrc:url("' + fontURL + '")';
                        if (!(fFormat != null && fFormat.toUpperCase() == "EOT" || fFormat.toUpperCase() == "MTX")) {
                            i = contentIdArray[fFormat.toUpperCase()];
                            j = u[fFormat.toUpperCase()];
                            i || (j = u.TTF);
                            c += " format('" + j + "')"
                        }
                        c += ";}\n"
                    }
                    if (h.styleSheet) {
                        i =
                            h.styleSheet.cssText;
                        i = i.replace(o, "xxx");
                        h.styleSheet.cssText = i;
                        h.styleSheet.cssText += c
                    } else h.innerHTML += c;
                    document.getElementById(b).style.fontFamily = "" + t;
                    document.getElementById(b).removeAttribute("data-mtiFont");
                    o = "";
                    if (document.getElementById(b).hasChildNodes()) {
                        o = document.getElementById(b).childNodes;
                        for (c = 0; c < o.length; c++)
                            if (o[c].nodeType == 1 && o[c].getAttribute("data-mtiFont")) {
                                o[c].style.fontFamily = o[c].getAttribute("data-mtiFont");
                                o[c].removeAttribute("data-mtiFont")
                            }
                    }
                    if (a.i != null) {
                        var y =
                            new mti.r(document.getElementById(b).parentElement, a.a, a.c.pfL);
                        Y(y, {}, A);
                        mti.t(a.i, a.i.zb, y.q)()
                    }
                    break
                } else d = true
            }
        }
        if (d) {
            var A = Fa(a);
            var v = y = null,
                F = [],
                x = function() {
                    y = new mti.r(document.getElementById(b).parentElement, a.a, a.c.pfL);
                    v = Y(y, {}, A);
                    w && ra(a);
                    var C = [];
                    if (v != undefined)
                        for (var r in v) {
                            r += A;
                            C.push(new P(z))
                        }
                    a.M.mti_element_cache = y.q;
                    Z(a, y.D(), v, A);
                    C = y.q;
                    a.i != null && mti.t(a.i, a.i.zb, C)();
                    for (r = 0; r < C.length; r++)
                        for (var z in a.n)
                            if (a.a.u(C[r]).indexOf(z) > -1)
                                if (C[r].getAttribute("id") == b) a.a.Y(C[r],
                                    z, a.n[z], p, a.K);
                                else a.a.pb(a.a.getElementById(b), C[r]) && a.a.u(C[r]).replace(/'|"/g, "").indexOf(z) > -1 && a.a.Y(C[r], z, a.n[z], p, a.K);
                    C = a.n[z] == null ? 0 : a.n[z].length;
                    for (r = 0; r < C; r++) F.push(new P(a.n[z][r]))
                };
            if (w) {
                ua(a, A);
                va(a, function() {
                    x()
                })
            } else x();
            W.RemoveMTIClass == true && setTimeout(function() {
                var C = "mti_font_element" + A,
                    r = (new N(navigator.userAgent, document)).parse(),
                    z = za(a, C),
                    K = r.getName();
                K = K.toLowerCase();
                r = r.z;
                K = K == "msie" && r < 8 ? true : false;
                for (r = new RegExp(C, "ig"); z.length > 0;) {
                    for (var U = 0; U < z.length; U++)
                        if (z[U].className.split(" ").length ==
                            1 && !K) z[U].removeAttribute("class");
                        else z[U].className = z[U].className.replace(r, " ").replace(/^\s+|\s+$/g, "");
                    z = za(a, C)
                }
            }, fa.Qa);
            o = {};
            if (W.UseHybrid) {
                o.fontactive = function() {
                    qa(a, a.ca, F)
                };
                o.fontinactive = function() {
                    qa(a, a.ca, F)
                }
            }(new T(a.b, a.a, new O(a.a, document.documentElement, o), 6E5)).Z(F, {}, {}, false)
        }
    }
    mti.d.prototype.load = function(a) {
        a(this.D(), this.gb)
    };
    mti.Ra = function(a) {
        this.p = a
    };
    mti.Ra.prototype.protocol = function() {
        var a = ["http:", "https:"],
            b = a[0];
        if (this.p && this.p.location && this.p.location.protocol) {
            var c = 0;
            for (c = 0; c < a.length; c++)
                if (this.p.location.protocol == a[c]) return this.p.location.protocol
        }
        return b
    };
    mti.sa = function(a, b) {
        this.a = a;
        this.c = b
    };
    mti.sa.prototype.appendBannerScript = function() {
        var a;
        a = new RegExp(escape("WFS_MTI_SS") + "=([^;]+)");
        if (a.test(document.cookie + ";")) {
            a.exec(document.cookie + ";");
            a = unescape(RegExp.$1)
        } else a = false;
        var b = this.c.bannerHandlerURL;
        if (b) {
            b += "?projectId=" + this.c.projectId;
            if (a !== false) b += "&WFS_MTI_SS=" + a;
            b += "&" + escape((new Date).getTime());
            this.a.v("head", this.a.createElement("Script", {
                type: "text/javascript",
                src: b
            }))
        }
    };
    mti.Ua = function(a) {
        this.Cb = a
    };
    MonoTypeWebFonts.Wa(mti.d.Sa, function(a) {
        var b = (new N(navigator.userAgent, document)).parse(),
            c = new H(window),
            d = null;
        if (a.enableOtf) d = new mti.Tb(c, b, a);
        window.MonoTypeWebFonts.BannerHandler = new mti.sa(c, a);
        a = new mti.d(window, b, c, a, d);
        var e = new mti.Ua(a);
        window.MonoTypeWebFonts.renderPartial = function(f) {
            Ea(e.Cb, f)
        };
        return a
    });

    function Fa() {
        for (var a = "", b = 0; b < 5; b++) a += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
        return a
    }
    mti.d.prototype.D = function() {
        return this.g
    };
    mti.d.H = false;

    function ya(a, b) {
        if (mti.d.H === true) b();
        else {
            var c = a.a.m;
            if (a.b.getName() == "MSIE") {
                var d = false,
                    e = function() {
                        if (!d) {
                            d = true;
                            b();
                            mti.d.H = true
                        }
                    };
                (function() {
                    try {
                        c.documentElement.doScroll("left");
                        if (c.readyState != "complete") {
                            setTimeout(arguments.callee, 50);
                            return
                        }
                    } catch (f) {
                        setTimeout(arguments.callee, 50);
                        return
                    }
                    e()
                })();
                c.onreadystatechange = function() {
                    if (c.readyState == "complete") {
                        c.onreadystatechange = null;
                        e()
                    }
                }
            } else if (a.b.db == "AppleWebKit" && a.b.R < 525)(function() {
                if (["loaded", "complete"].indexOf(c.readyState) >
                    -1) {
                    b();
                    mti.d.H = true
                } else setTimeout(arguments.callee, 50)
            })();
            else if (c.addEventListener)
                if (c.readyState == "loading") c.addEventListener("DOMContentLoaded", function() {
                    b();
                    mti.d.H = true
                }, false);
                else window.onload = function() {
                    b();
                    mti.d.H = true
                };
            else window.onload = function() {
                b();
                mti.d.H = true
            }
        }
    }
    mti.d.prototype.Pa = function(a) {
        function b() {
            document.body ? a() : setTimeout(b, 0)
        }
        b()
    };
    mti.d.prototype.ca = function(a, b) {
        var c = this;
        if (!(a != null && a.length < 1)) {
            var d = c.c.projectId,
                e = c.c.ec,
                f = c.c.fcURL,
                l = c.c.ck;
            a = "";
            var g, i, j = c.b.z,
                h = c.b.getName();
            h = h.toLowerCase();
            var p = h == "msie" && j <= 8 ? true : false;
            h = false;
            var w = {
                TTF: "truetype",
                WOFF: "woff",
                SVG: "svg",
                MTX: "truetype",
                OTF: "opentype",
                WOFF2: "woff2"
            };
            j = [];
            for (var u = 0; u < c.c.pfL.length; u++) {
                for (var n = c.c.pfL[u], t = false, s = n.fontfamily, q = 0; q < c.g.length; q++)
                    if (c.g[q].w == s && (n.enableSubsetting || W.EnableDSForAllFonts)) {
                        var k = s + "_f";
                        t = true;
                        if (c.K) {
                            t =
                                false;
                            if (c.g[q].P == n.fontWeight / 100 && c.g[q].F == n.fontStyle.charAt(0)) {
                                t = true;
                                g = n.fontWeight;
                                i = n.fontStyle;
                                fontVariation = i.charAt(0) + g / 100;
                                k = (s.length > 25 ? s.substring(0, 20) : s) + "_" + fontVariation + "_f"
                            }
                        }
                        break
                    }
                if (t) {
                    k = s + "_f";
                    if (n.enableSubsetting || W.EnableDSForAllFonts) {
                        if (n.fontWeight != undefined && n.fontStyle != undefined) {
                            g = n.fontWeight;
                            i = n.fontStyle;
                            fontVariation = i.charAt(0) + g / 100;
                            k = (s.length > 25 ? s.substring(0, 20) : s) + "_" + fontVariation + "_f"
                        }
                        j.push(k);
                        contentIdArray = n.contentIds;
                        enableOtf = n.enableOtf;
                        if (!Ca(c,
                                k)) {
                            h = true;
                            fFormat = wa(c, contentIdArray);
                            fontURL = $(c, contentIdArray, d, false, e, f, "", l, s, g, i, null, fFormat, enableOtf);
                            if (fontURL != "") {
                                if (p && i != undefined && g != undefined) s += "_" + i.charAt(0) + g / 100;
                                a += '@font-face{\nfont-family:"' + k + '";';
                                if (p == false && g != undefined && i != undefined) {
                                    a += "\nfont-style:" + i + ";";
                                    a += "\nfont-weight:" + g + ";"
                                }
                                a += '\nsrc:url("' + fontURL + '")';
                                if (!(fFormat != null && fFormat.toUpperCase() == "EOT" || fFormat.toUpperCase() == "MTX")) {
                                    n = contentIdArray[fFormat.toUpperCase()];
                                    t = w[fFormat.toUpperCase()];
                                    n || (t =
                                        w.TTF);
                                    a += " format('" + t + "')"
                                }
                                a += ";}\n"
                            }
                        }
                    }
                }
            }
            g = c.a.getElementById("mti_fontface_" + d);
            if (g == null) {
                g = c.a.createElement("style", {
                    type: "text/css",
                    id: "mti_fontface_" + (b ? "Aj_" : "") + c.c.projectId
                });
                a != "" && c.a.v("head", g)
            }
            if (g.styleSheet)
                if (g.styleSheet.cssText != "") {
                    g = c.a.getElementById("mti_fontface_" + (b ? "hybridAjaxIE_" : "hybridIE_") + c.c.projectId);
                    if (g == null) {
                        g = c.a.createElement("style", {
                            type: "text/css",
                            id: "mti_fontface_" + (b ? "hybridAjaxIE_" : "hybridIE_") + c.c.projectId
                        });
                        a != "" && c.a.v("head", g)
                    }
                    g.styleSheet.cssText =
                        a
                } else g.styleSheet.cssText = a;
            else g.innerHTML += a;
            if (h) {
                b = [];
                for (a = 0; a < j.length; a++) b.push(new P(j[a]));
                a = {};
                a.fontactive = function(m) {
                    m.substr(m.length - 2) == "_f" && !Ca(c, m) && Ga(c, m)
                };
                (new T(this.b, this.a, new O(c.a, document.documentElement, a), 6E5)).Z(b, {}, {}, false)
            }
        }
    };

    function qa(a, b, c) {
        document.readyState == "complete" ? setTimeout(function() {
            b.apply(a, c)
        }, 500) : document.addEventListener("readystatechange", function() {
            document.readyState == "complete" && setTimeout(function() {
                b.apply(a, c)
            }, 500)
        });
        if (document.addEventListener) document.addEventListener("keydown", function(d) {
            a.oa.apply(a, [d])
        });
        else window.attachEvent ? window.attachEvent("onkeydown", function(d) {
            a.oa.apply(a, [d])
        }) : document.addEventListener("keydown", function(d) {
            a.oa.apply(a, [d])
        })
    }
    mti.d.prototype.oa = function(a) {
        if ((a.ctrlKey || a.metaKey) && a.keyCode == 116) {
            a.preventDefault();
            a = document.cookie.split(";");
            for (var b = "", c = 1; c <= a.length; c++) {
                var d = a[c - 1].split("="),
                    e = d[0].substr(d[0].length - 2);
                if (d[1] == "1" && e == "_f") {
                    b += a[c - 1];
                    document.cookie = d[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
                }
            }
            document.location.reload(true)
        }
    };

    function xa(a, b, c) {
        var d = {};
        d.fontactive = function() {
            c(b, true)
        };
        d.fontinactive = function() {
            c(b, false)
        };
        var e = W.timeout == null ? 100 : W.timeout;
        a = new T(a.b, a.a, new O(a.a, document.documentElement, d), e);
        d = [];
        d.push(new P(b));
        a.Z(d, {}, {}, false)
    }

    function Ga(a, b) {
        a = new Date;
        a.setDate(a.getDate() + 1);
        document.cookie = b + "=" + ("1; expires=" + a.toUTCString())
    }

    function Ca(a, b) {
        a = document.cookie.split(b + "=");
        b = null;
        if (a.length == 2) b = a.pop().split(";").shift();
        return b == 1 ? true : false
    }

    function Da(a, b, c) {
        var d = a = 0,
            e = false;
        for (a = 0; a < c.length; a++) {
            e = false;
            for (d = 0; d < b.length; d++)
                if (c[a] == b[d]) e = true;
            if (e == false)
                if (d == b.length) return 0
        }
        return 1
    };
})(this, document);
if (window.addEventListener) {
    window.addEventListener('load', function() {
        MonoTypeWebFonts.cleanup();
    }, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', function() {
        MonoTypeWebFonts.cleanup();
    });
}
MonoTypeWebFonts.cleanupExecuted = false;
MonoTypeWebFonts.cleanup = function() {
    if (MonoTypeWebFonts.cleanupExecuted === true) {
        return;
    }
    MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);
    var className = document.documentElement.className;
    var MTIConfig = window['MTIConfig'] || {
        'RemoveMTIClass': false
    };
    if (MTIConfig['RemoveMTIClass'] == true) {
        function walkTheDOM(node, func) {
            func(node);
            node = node.firstChild;
            while (node) {
                walkTheDOM(node, func);
                node = node.nextSibling;
            }
        }

        function getElementsByClassName(className) {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName(className);
            } else {
                var results = [];
                walkTheDOM(document.body, function(node) {
                    var a, c = node.className,
                        i;
                    if (c) {
                        a = c.split(' ');
                        for (i = 0; i < a.length; i++) {
                            if (a[i] === className) {
                                results.push(node);
                                break;
                            }
                        }
                    }
                });
                return results;
            }
        }
        setTimeout(function() {
            var mti_elements = getElementsByClassName('mti_font_element');
            var u = navigator.userAgent;
            var ua = u.toLowerCase(),
                is = function(t) {
                    return ua.indexOf(t) > -1
                },
                b = (!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)),
                c = false;
            if ((RegExp.$1 == 6) || (RegExp.$1 == 7)) {
                c = true;
            }
            while (mti_elements.length > 0) {
                for (var i = 0; i < mti_elements.length; i++) {
                    var classList = mti_elements[i].className.split(' ');
                    if (classList.length == 1 && !c) {
                        mti_elements[i].removeAttribute('class');
                    } else {
                        mti_elements[i].className = mti_elements[i].className.replace(/mti_font_element/ig, ' ').replace(/^\s+|\s+$/g, '');
                    }
                }
                mti_elements = getElementsByClassName('mti_font_element');
            }
        }, 40000);
    }
    className = className;
    if (!document.getElementById('MonoTypeFontApiFontTracker')) {
        var fontTrackingUrl = "http://fast.fonts.net/t/1.css";
        if (window.location.protocol == 'https:') {
            fontTrackingUrl = fontTrackingUrl.replace(/http:/, 'https:');
        }
        var head = document.getElementsByTagName('HEAD')[0];
        var cssEle = document.createElement('LINK');
        if (cssEle) {
            cssEle.setAttribute('id', 'MonoTypeFontApiFontTracker');
            cssEle.setAttribute('type', 'text/css');
            cssEle.setAttribute('rel', 'stylesheet');
            cssEle.setAttribute('href', fontTrackingUrl + "?apiType=js&projectid=5c06d217-83c1-4c98-ab9e-5f2a297d1351");
            head.appendChild(cssEle);
        }
    }
    window['mti_element_cache'] = [];
};
MonoTypeWebFonts._fontActiveEventList = [];
MonoTypeWebFonts._fontLoadingEventList = [];
MonoTypeWebFonts._activeEventList = [];
MonoTypeWebFonts._inActiveEventList = [];
MonoTypeWebFonts.addEvent = function(eventName, callbackFunction) {
    if (eventName.toLowerCase() == 'fontactive') {
        MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'fontloading') {
        MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'inactive') {
        MonoTypeWebFonts._inActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'active') {
        MonoTypeWebFonts._activeEventList.push(callbackFunction);
    }
};
MonoTypeWebFonts.loadFonts = function() {
    MonoTypeWebFonts.load({
        monotype: {
            reqSub: false,
            enableOtf: false,
            otfJsParentUrl: '//fast.fonts.net/jsapi/otjs/',
            pfL: [{
                'fontfamily': "DIN Next W01",
                'fontWeight': "700",
                'fontStyle': "normal",
                contentIds: {
                    EOT: 'b32ab78b-6c51-4bd3-bc37-4edcec0331f8',
                    WOFF: '9949035f-6226-4080-a14a-bf7d94ffb1e1',
                    WOFF2: '121784c1-863c-4e49-b682-625ea7de55b0',
                    TTF: '6241bd09-15c2-485e-9796-9db8d0aa6974',
                    SVG: 'af94da3e-4232-416a-b6bc-f39f85dd5db6'
                },
                enableSubsetting: false,
                enableOtf: false
            }, {
                'fontfamily': "DIN Next W01",
                'fontWeight': "200",
                'fontStyle': "normal",
                contentIds: {
                    EOT: '3e0b2cd7-9657-438b-b4af-e04122e8f1f7',
                    WOFF: 'bc176270-17fa-4c78-a343-9fe52824e501',
                    WOFF2: 'de1216be-00c2-43c0-9c45-3e7f925eb519',
                    TTF: '3516f91d-ac48-42cd-acfe-1be691152cc4',
                    SVG: 'd1b1e866-a411-42ba-8f75-72bf28e23694'
                },
                enableSubsetting: false,
                enableOtf: false
            }, {
                'fontfamily': "DIN Next W01",
                'fontWeight': "500",
                'fontStyle': "normal",
                contentIds: {
                    EOT: '324dee78-6585-4c13-8ca3-5817cc600d84',
                    WOFF: '4bf0ead4-e61b-4992-832b-6ff05828d99f',
                    WOFF2: 'be607c9f-3c81-41b4-b7ad-17af005c80bb',
                    TTF: '73713a0b-8f6a-4c4e-b8a8-7cf238e632f6',
                    SVG: 'b90b6bdf-15e2-4544-9fe0-92c79fff0ecd'
                },
                enableSubsetting: false,
                enableOtf: false
            }, {
                'fontfamily': "DIN Next W01",
                'fontWeight': "400",
                'fontStyle': "normal",
                contentIds: {
                    EOT: 'da088ecc-a53c-4831-a95b-6fd81b5b338a',
                    WOFF: 'c5a7f89e-15b6-49a9-8259-5ea665e72191',
                    WOFF2: '44e7b0fa-6c8d-43c2-b19e-f1e3ce9ea57c',
                    TTF: '868c94b5-ca49-46b7-b62b-297f8d861125',
                    SVG: 'e3145f65-29b5-4f7f-8c6e-2dc135021b6a'
                },
                enableSubsetting: false,
                enableOtf: false
            }],
            selectorFontMap: {},
            ck: 'd44f19a684109620e4841579ae90e818937f0df4d514ffe0d3e3e57723a4125208f710b15d5bd87a20be5922b56a3a06b0f26ae7d930583a24007f936f67fa2e334cce5083319f44d675d16606c72b99e6b6d1373945ea2c508697bbb8ef9d89a2195ff0ca793919997a138d38',
            ec: 'true',
            fcURL: 'http://fast.fonts.net/dv2/',
            dfcURL: 'http://api2.fonts.com/FontSubsetter.ashx',
            pURL: 'http://api2.fonts.com/FontSubsetter.ashx',
            fontdataversion: 'v2',
            sO: 'True',
            ffArray: {
                safari: {
                    '3.1': 'ttf',
                    '5.1': 'woff'
                },
                msafari: {
                    '1': 'svg',
                    '4.2': 'ttf',
                    '5.1': 'woff'
                },
                chrome: {
                    '3': 'svg',
                    '4': 'ttf',
                    '5': 'woff',
                    '36': 'woff2'
                },
                opera: {
                    '10': 'ttf',
                    '11.10': 'woff',
                    '26': 'woff2'
                },
                msie: {
                    '4': 'eot',
                    '9': 'woff',
                    '10': 'otf'
                },
                mozilla: {
                    '3.5': 'ttf',
                    '3.6': 'woff'
                }
            },
            bsmcArray: {
                safari: {
                    '3.1': '2000',
                    '5.0': '1650',
                    '5.1': '8190'
                },
                msafari: {
                    '1': '8190'
                },
                chrome: {
                    '3': '8190'
                },
                opera: {
                    '10': '8190'
                },
                msie: {
                    '4': '1000',
                    '9': '2067'
                },
                mozilla: {
                    '3.5': '8190'
                }
            },
            fctypeArray: {
                'ttf': '1',
                'eot': '2',
                'woff': '3',
                'svg': '11',
                'otf': '13'
            },
            projectId: '5c06d217-83c1-4c98-ab9e-5f2a297d1351',
            specialChar: ['%u201C', '%u201D', '%u2200', '%u2202', '%u2203', '%u2205', '%u2207', '%u2208', '%u2209', '%u220B', '%u220F', '%u2211', '%u2018', '%u2019', '%B0', '%u2026', '%u2122', '%A9', '%AE', '%u2014', '%u2013', '%A7', '%B1', '%B7', '%u2032', '%u2033', '%u20AC', '%u2248', '%u2260', '%u2264', '%u2265', '%u221A', '%u221D', '%u2220', '%u2225', '%u2227', '%u2228', '%u2229', '%u222A', '%u222B', '%u222E', '%u2234', '%u2235', '%u2236', '%u2237', '%u223D', '%u224C', '%u2261', '%u226E', '%u226F', '%u2299', '%u22A5', '%u0391', '%u0392', '%u0393', '%u0394', '%u0395', '%u0396', '%u0397', '%u0398', '%u0399', '%u039A', '%u039B', '%u039C', '%u039D', '%u039E', '%u039F', '%u03A0', '%u03A1', '%u03A3', '%u03A4', '%u03A5', '%u03A6', '%u03A7', '%u03A8', '%u03A9', '%u221E', '%u2190', '%u2191', '%u2192', '%u2193', '%u2640', '%u2642', '+', '%22', '%5C', '%23', '%26', '%3F', '%B7', '%3B', '%3A'],
            EOD: null
        },
        fontloading: function(fontFamily, fontDescription) {
            for (var i = 0; i < MonoTypeWebFonts._fontLoadingEventList.length; i++) {
                MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
            }
        },
        fontactive: function(fontFamily, fontDescription) {
            for (var i = 0; i < MonoTypeWebFonts._fontActiveEventList.length; i++) {
                MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
            }
        },
        inactive: function() {
            MonoTypeWebFonts.cleanup();
            for (var i = 0; i < MonoTypeWebFonts._inActiveEventList.length; i++) {
                MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);
            }
        },
        active: function() {
            MonoTypeWebFonts.cleanup();
            for (var i = 0; i < MonoTypeWebFonts._activeEventList.length; i++) {
                MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);
            }
        }
    });
};
MonoTypeWebFonts.loadFonts();
MonoTypeWebFonts.RefreshFonts = function() {
    MonoTypeWebFonts.cleanupExecuted = false;
    if (document.getElementById('mti_stylesheet_5c06d217-83c1-4c98-ab9e-5f2a297d1351') != null) {
        var nodeToRemove1 = document.getElementById('mti_stylesheet_5c06d217-83c1-4c98-ab9e-5f2a297d1351');
        var parentNode1 = nodeToRemove1.parentNode;
        parentNode1.removeChild(nodeToRemove1);
    }
    if (document.getElementById('mti_fontface_5c06d217-83c1-4c98-ab9e-5f2a297d1351') != null) {
        var nodeToRemove2 = document.getElementById('mti_fontface_5c06d217-83c1-4c98-ab9e-5f2a297d1351');
        var parentNode2 = nodeToRemove2.parentNode;
        parentNode2.removeChild(nodeToRemove2);
    }
    MonoTypeWebFonts.loadFonts();
};
MonoTypeWebFonts.loadColo = function() {};
setTimeout(function() {
    MonoTypeWebFonts.cleanup();
}, 40000);