!function (R, z, f) {
    "use strict";
    var e = "ht";
    if (!R[e]) {
        !function () {
            Date.now && Date.prototype.getTime || (Date.now = function () {return (new Date).getTime()}),
            R.performance && R.performance.now || function () {
                var s = 1489026812257;
                R.performance || (R.performance = {}), R.performance.now = function () {
                    return 1489026812257 - s
                }
            }();
            for (var S = 1489026812257, I = 16, w = ["ms", "moz", "webkit", "o"], t = 0; t < w.length && !R.requestAnimationFrame; ++t) R.requestAnimationFrame = R[w[t] + "RequestAnimationFrame"], R.cancelAnimationFrame = R[w[t] + "CancelAnimationFrame"] || R[w[t] + "CancelRequestAnimationFrame"];
            R.requestAnimationFrame || (R.requestAnimationFrame = function (W) {
                var P = 1489026812257, C = I + S - P;
                return 0 > C && (C = 0), S = P, R.setTimeout(function () {
                    S = 1489026812257, W(performance.now())
                }, C)
            }), R.cancelAnimationFrame || (R.cancelAnimationFrame = function (Y) {
                return R.clearTimeout(Y)
            })
        }();
        var O, p, B, Y, F = R.document, t = null, U = R[e] = {}, Z = R[e + "config"],
            N = U.Default = Z && Z.Default || {}, E = U.Style = Z && Z.Style || {}, j = U.Color = Z && Z.Color || {},
            A = U.IsGetter = Z && Z.IsGetter || {}, r = Math, $ = r.round, I = r.floor, c = r.ceil, g = r.sqrt,
            K = r.max, _ = r.min, G = r.abs, m = r.cos, u = r.acos, H = r.sin, i = r.pow, D = r.asin, P = r.PI,
            n = 2 * P, s = P / 2, Q = r.tan, o = r.atan2, T = r.random, q = !1, X = !1,
            M = R.parseInt || global.parseInt, v = "2019-11-01", l = function () {
                try {
                    return R.navigator.platform.indexOf("Win") > -1
                } catch (N) {
                }
            }(), S = function (Q) {
                return Q * Q
            }, y = R.setTimeout, J = R.clearTimeout, x = R.location,
            b = R.navigator ? R.navigator.userAgent.toLowerCase() : "", C = function (f) {
                return f.test(b)
            }, W = C(/msie/) || C(/trident/), h = C(/msie 10/), L = C(/edge/), d = C(/firefox/), a = C(/mac/),
            w = N.isTouchable === f ? l ? !1 : F ? "ontouchend" in F : !1 : N.isTouchable, V = "default", Zo = "single",
            rp = "multiple", Fe = "front", ks = "back", ur = "left", Rl = "right", jh = "top", Af = "bottom",
            Xh = "center", be = "eye", hh = "middle", Pq = "east", Ir = "west", wq = "north", zj = "none", Pb = "px",
            ql = "absolute", ho = "border", kn = "triangle", $d = "rect", gq = "circle", oe = "cylinder", qi = "shape",
            Lj = "items", $g = "normal", Ad = "remove", fj = "clear", $n = "width", uf = "height", $k = "ingroup",
            Cr = "check", Ap = "uncheck", gs = "radio", zg = "radioOn", Eq = "radioOff", ro = "points", Yp = "values",
            Ci = "series", ei = "body", ri = "label", Vp = "label2", lk = "note", ds = "note2", _k = "icons",
            cg = "labelFont", Ck = "labelColor", sp = "labelSelectColor", Cg = "note.expanded", is = "note2.expanded",
            Xm = "edge.expanded", Nr = "edge.points", bh = "edge.type", sm = "rotation", Gq = "getRotation",
            sl = "setRotation", al = "hidden", Db = "visible", td = "tuv", fr = "no", bo = "select",
            Gb = "currentSubGraph", Mf = "selectBackground", Di = "autoMakeVisible", lf = "autoHideScrollBar",
            Kb = "scrollBarColor", tj = "scrollBarSize", Do = "indent", Bl = "rowHeight", Bj = "columnLineColor",
            cn = "rowLineColor", Kc = "columnLineVisible", id = "rowLineVisible", fc = "visibleFunc", Qo = "expandIcon",
            Uf = "collapseIcon", lh = "checkMode", Dj = "sortFunc", Tr = "editable", Fj = "batchEditable",
            Ri = "tristate", Po = "asc", Jh = "desc", Nn = "position", dc = "elevation", dm = "children",
            Xi = "translateX", Sj = "translateY", ec = "dataModel", Tf = "maxSize", Ic = "shape3d",
            Zp = "shape3d.resolution", ej = "shape3d.visible", wo = "shape3d.from.visible", Dm = "shape3d.to.visible",
            qs = "shape3d.top.visible", Hq = "shape3d.bottom.visible", Xe = "repeat.uv.length", rd = "serializeValue",
            Kh = "deserializeValue", Ih = "centerUniform", Qq = "rgba(255,255,255,0)", nc = "style", Vg = "attr",
            Oi = "field", In = "string", Cd = "boolean", ih = "color", kp = "int", Me = "number", Ok = "ew-resize",
            nm = "ns-resize", ws = "pointer", qn = "auto", pg = "mousedown", Ch = "mousemove", _l = "mouseup",
            fd = "mouseout", Pr = "touchstart", tc = "touchmove", Cl = "touchend", mp = "keydown", ok = "keyup",
            pb = d ? "DOMMouseScroll" : "mousewheel",
            Wq = w ? [Pr, tc, Cl, mp, ok, "keypress", "input", "contextmenu"] : [mp, ok, "keypress", "input", pg, Ch, _l, fd, pb, "contextmenu", "mouseenter", "mouseleave", "mouseout"],
            jd = t, ch = t, js = t, Ek = _l.length, fo = function () {
                js && (J(js.timeout), js = t)
            }, ye = function () {
                js && Yq(js.e, js.info)
            };
        R.addEventListener && (w || (R.addEventListener(fd, function () {
            fo()
        }, !1), R.addEventListener(pb, function () {
            eo()
        }, !1)), R.addEventListener(ok, function (b) {
            91 === b.keyCode ? Zn = {} : delete Zn[b.keyCode]
        }, !0), R.addEventListener(mp, function (H) {
            Zn[H.keyCode] = !0
        }, !0));
        var tp, Nq, Tk, Tn = !1, Ae = t, We = t, Qc = {}, $i = {}, gk = {}, xk = {}, Ni = {}, Zn = {}, fe = {}, Of = {},
            Vn = {}, kl = /.json$/, jk = {}, Np = [], go = {}, Dh = t, Pp = t, di = function () {
            }, Mp = function () {
                throw"Oops!"
            }, Be = [0, 0, 0], dl = [0, 0, 0, 0], af = {x: 0, y: 0, width: 0, height: 0}, oo = t, Rd = t, ce = t,
            Eh = function (d) {
                Rd && !d._72O && (ce || (ce = {}), ce[d._72O = rr()] = d), tp != t ? Uj() < .05 && Y && !Nq && (Vb = fo) : Vb = To
            }, ys = function (o, K, $, d) {
                Rd || (Rd = {});
                var P = Rd[o];
                if (P) {
                    if (P.url === K) return;
                    P.image ? (P.image.onload = di, P.image.onerror = di) : P.request && (P.request.onload = di, P.request.onerror = di)
                }
                if (kl.test(K)) {
                    var u = new XMLHttpRequest;
                    if (Rd[o] = {
                        request: u,
                        url: K
                    }, u.overrideMimeType("text/plain"), N.convertURL && (K = N.convertURL(K)), K.data) {
                        var V = N.parse(K.data);
                        Bh(o, V), N.handleImageLoaded(o, V)
                    } else u.open("GET", encodeURI(K), !0), u.onload = function (W) {
                        if (200 === this.status || 0 === this.status) {
                            var L = N.parse(W.target.response);
                            Bh(o, L), N.handleImageLoaded(o, L)
                        } else Bh(o, N.handleUnfoundImage(o, K) || t)
                    }, u.onerror = function () {
                        Bh(o, N.handleUnfoundImage(o, K) || t)
                    }, u.send(null)
                } else {
                    var V = new Image;
                    Rd[o] = {
                        image: V,
                        url: K
                    }, W && K.toLowerCase().indexOf(".svg") > 0 ? (F.body.appendChild(V), V.style.visibility = "hidden", V.onload = function () {
                        y(function () {
                            if ($ && (V.width = $), d && (V.height = d), !V.width || !V.height) {
                                var j = V.width || V.clientWidth, q = V.height || V.clientHeight;
                                V.width = j, V.height = q
                            }
                            N.handleImageLoaded(o, V), Bh(o, V), F.body.removeChild(V), V.style.visibility = ""
                        }, 150)
                    }, V.onerror = function () {
                        Bh(o, N.handleUnfoundImage(o, K) || t), F.body.removeChild(V), V.style.visibility = ""
                    }) : (V.onload = function () {
                        $ && (V.width = $), d && (V.height = d), N.handleImageLoaded(o, V), Bh(o, V)
                    }, V.onerror = function () {
                        Bh(o, N.handleUnfoundImage(o, K) || t)
                    }), /^data:image/.test(K) || (N.convertURL && (K = N.convertURL(K)), /^data:image/.test(K) || (K += K.indexOf("?") >= 0 ? "&__ht__=" + Im() : "?" + Im(), K = encodeURI(K))), V.src = K
                }
            }, Bh = function (d, N) {
                if ($i[d] = N, delete Rd[d], kk(Rd) && (Rd = t, ce)) {
                    for (var W in ce) {
                        var $ = ce[W];
                        $.invalidateAll && $.invalidateAll(f, "imageLoaded", d), $.redraw && $.redraw(), $.iv(), delete $._72O
                    }
                    ce = t
                }
                if (N && ce) for (var W in ce) {
                    var $ = ce[W];
                    $.invalidateAll && $.invalidateAll(f, "imageLoading", d), $.redraw && $.redraw(), $.iv()
                }
            }, Im = function () {
                return R.performance && R.performance.now ? R.performance.now() : 1489026812257
            }, Yb = function (h, W) {
                W ? J(h) : R.cancelAnimationFrame(h)
            }, zd = function (l, B, U) {
                return {width: l, height: B, comps: od(U) ? U : [U]}
            }, cc = function (u, L) {
                return {
                    type: gq,
                    rect: [u, L, 1.6, 1.6],
                    borderWidth: 1,
                    borderColor: qq,
                    gradient: Pg,
                    gradientColor: Qd,
                    background: qq
                }
            }, _i = function (U, _) {
                return zd(16, 16, {type: kn, rect: [4, 4, 10, 8], background: U, rotation: _ ? 1.57 : 3.14})
            }, Oc = function (p, s) {
                return zd(16, 16, {type: kn, rect: [4, 4, 8, 7], background: p, rotation: s ? 3.14 : 0})
            }, Fr = function (N) {
                var t = N._orientation;
                return "horizontal" === t || "h" === t
            }, Zi = function (Q) {
                var G = t || 4, L = t || 1, i = t || 1;
                0 > G ? G = 0 : G > .25 && (G = .25);
                var j, X, l, v, h, J, W, E = .5, $ = [], c = [], x = [], Z = n / i, R = n / L, q = E - G;
                for (X = 0; L >= X; X++) for (v = -P + X * R, J = m(v), h = H(v), j = 0; i >= j; j++) l = j * Z, W = q + G * J, $.push(m(l) * W, h * G, -H(l) * W), (p = Q) && c.push(j / i, 1 - X / L);
                for (X = 0; L > X; X++) {
                    var Y = X * (i + 1), y = (X + 1) * (i + 1);
                    for (j = 0; i > j; j++) x.push(Y + j, y + j + 1, y + j, Y + j, Y + j + 1, y + j + 1), Wf.z = Wk.z = Q
                }
            }, ki = function (V) {
                var H = 2, l = 0;
                for (var s in V) s.length === H && M(s, 32) === vq && (Dh = Pp = V[s]), l++;
                return l
            }, $c = function (y, e, l, J) {
                return l || (l = w ? 5 : 3, l /= J || 1), {x: y - l, y: e - l, width: 2 * l, height: 2 * l}
            }, lp = function (_, t, S, e) {
                var H = this;
                t || (t = w ? 5 : 3, S = 20, e = 20);
                var T = {x: _, y: t, width: S, height: e};
                if (S) for (var F = 0; S > F; F++) if (3 === S) e = 20; else for (var N = 0; e > N; N++) H = R ? R : S;
                var W = {x: P, y: 2 * P};
                if (Nf(T, W)) {
                    var v = uf[0] + jh[0] + fj[1];
                    No[be] = H[v], H[v] = Vj[be]
                }
            }, vp = function (r) {
                return (/ble$/.test(r) || /ed$/.test(r) || A[r] ? "is" : "get") + r.charAt(0).toUpperCase() + r.slice(1)
            }, Vj = function (v) {
                return "set" + v.charAt(0).toUpperCase() + v.slice(1)
            }, xq = function (J) {
                return typeof J === In || J instanceof String
            }, cb = function (f) {
                return typeof f === Me
            }, To = function (q) {
                return typeof q === Cd
            }, wi = function (M) {
                return M && "object" == typeof M
            }, qd = function (o) {
                return "function" == typeof o
            }, od = function (B) {
                return B instanceof Array
            }, Qe = function (o) {
                return o instanceof Gn
            }, dn = function (x) {
                return od(x) ? new Gn(x) : x
            }, Sb = function (e) {
                return e instanceof as
            }, to = function (n) {
                return n instanceof Dk
            }, sj = function (f) {
                return f instanceof Vi
            }, Lf = function (m) {
                return m instanceof Fk
            }, he = function (n) {
                return n && "IFRAME" === n.tagName
            }, Zj = function (H) {
                return H == t ? H : parseFloat(H.toFixed(2))
            }, Kd = function (H, y, E) {
                var j, l = y.length;
                if (E) for (var D = 0; E > D; D++) if (3 === l) H.push(y[0]), H.push(y[1]), H.push(y[2]); else for (j = 0; l > j; j++) H.push(y[j]); else if (3 === l) H.push(y[0]), H.push(y[1]), H.push(y[2]); else for (j = 0; l > j; j++) H.push(y[j])
            }, Up = function (g) {
                return g ? wi(g) ? g : {} : !1
            }, Cf = function (n, G, P) {
                var $, k = wi(n) ? n : n.prototype;
                for ($ in G) P && k[$] !== f || (k[$] = G[$]);
                return n
            }, Wm = function (u) {
                return String.fromCharCode(u)
            }, $r = function (p) {
                for (var A, Y = 0, $ = ""; Y < p.length; Y++) A = p[p.length - 1 - Y], "%" === A ? A = "'" : "a" === A ? A = '"' : "]" === A && (A = "\\"), $ += Wm(A.charCodeAt(0) - 1);
                return $
            }, Ge = function (d, F, Q) {
                d.superClass.constructor.apply(F, Q)
            }, kk = function (F) {
                for (var P in F) return !1;
                return !0
            }, ve = function ($) {
                return $ ? 0 === $.length : !0
            }, Zh = function (R, t) {
                return R === t ? !0 : R.x === t.x && R.y === t.y && R.width === t.width && R.height === t.height
            }, qe = function (K, c, s) {
                return c > K ? c : K > s ? s : K
            }, kf = function (T) {
                return 0 > T ? -1 : T > 0 ? 1 : 0
            }, Uj = function () {
                var V = 1e4 * H(Ek++);
                return V - I(V)
            }, qg = function (j, Z, M) {
                return tn(j.x, j.y, Z.x, Z.y, M.x, M.y, M.x + M.width, M.y, !0) || tn(j.x, j.y, Z.x, Z.y, M.x + M.width, M.y, M.x + M.width, M.y + M.height, !0) || tn(j.x, j.y, Z.x, Z.y, M.x + M.width, M.y + M.height, M.x, M.y + M.height, !0) || tn(j.x, j.y, Z.x, Z.y, M.x, M.y + M.height, M.x, M.y, !0)
            }, tn = function (x, R, T, X, H, f, N, c, W) {
                var I = (N - H) * (R - f) - (c - f) * (x - H), q = (c - f) * (T - x) - (N - H) * (X - R);
                if (0 !== q) {
                    var C = I / q, o = x + C * (T - x), r = R + C * (X - R);
                    return W && (o + Ej < _(x, T) || o - Ej > K(x, T) || o + Ej < _(H, N) || o - Ej > K(H, N) || r + Ej < _(R, X) || r - Ej > K(R, X) || r + Ej < _(f, c) || r - Ej > K(f, c)) ? t : [o, r]
                }
                return t
            }, Hi = function (H, s, I) {
                if (H && I) if (s) {
                    if (s === nc) return H.getStyle(I);
                    if (s === Vg) return H.getAttr(I);
                    if (s === Oi) return H[I]
                } else if (I = vp(I), H[I]) return H[I]();
                return f
            }, de = function (y, T, M, p) {
                if (y && M) if (T) {
                    if (T === nc) y.s(M, p); else if (T === Vg) y.a(M, p); else if (T === Oi) {
                        var J = y[M];
                        y[M] = p, y.fp("f:" + M, J, p)
                    }
                } else M = Vj(M), y[M] && y[M](p)
            }, mr = function (H, v, z, j, P) {
                v && ip(H, z, j, 1, P, v)
            }, Sq = function (q, N, y, b) {
                var G = 1 - q;
                return G * G * N + 2 * q * G * y + q * q * b
            }, Wf = function ($, r, W, U, E) {
                var p = 1 - $;
                return p * p * p * r + 3 * p * p * $ * W + 3 * p * $ * $ * U + $ * $ * $ * E
            }, ul = function (v) {
                var x, M, L, f, s = 0;
                return v.forEach(function (g) {
                    if (x = g.length, x > 0) for (M = g[0], f = 1; x > f; f++) L = g[f], s += Lb(M, L), M = L
                }), s
            }, Pm = function (s, U, x) {
                var j = "__" + s, N = function (b) {
                    x.interactiveDisabled || x["handle_" + s](b)
                };
                x[j] || (x[j] = N, U.addEventListener(s, N, !1))
            }, Jq = function (C, S, c) {
                var f = "__" + C, V = c[f];
                V && (S.removeEventListener(C, V, !1), delete c[f])
            }, bn = function (P, b) {
                var N = "_" + b;
                P[vp(b)] = function () {
                    return this[N]
                }, P[Vj(b)] = function (m) {
                    var A = this[N];
                    this[N] = m, this.fp(b, A, m)
                }
            }, Ol = function (o) {
                return z.create(o)
            }, Zk = function (l) {
                if (!l.element) {
                    var h, C;
                    (h = l.textField) ? C = bk(Xg.TextField, h) : (h = l.textArea) ? C = bk(Xg.TextArea, h) : (h = l.button) ? C = bk(Xg.Button, h) : (h = l.comboBox) ? C = bk(Xg.ComboBox, h) : (h = l.checkBox) ? C = bk(Xg.CheckBox, h) : (h = l.radioButton) ? C = bk(Xg.RadioButton, h) : (h = l.slider) ? C = bk(Xg.Slider, h) : (h = l.colorPicker) ? C = bk(Xg.ColorPicker, h) : (h = l.image) && (C = bk(Xg.Image, h)), C && (l.element = C)
                }
            }, Qj = function (X, M) {
                var e = Ac(X);
                return e._ht = M, e
            }, Ac = function (j, i) {
                var R = F.createElement("div"), X = R.style;
                return R.tabIndex = -1, R.onkeydown = Mh, X.msTouchAction = zj, dr(R, t, 0), w && X.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", t), j && (X.overflow = al), i && lm(i, R), R
            }, ns = function (f, z) {
                var P = F.createElement("canvas"), J = P.style;
                return J.msTouchAction = zj, z || (J.pointerEvents = zj), dr(P, t, 0), f && lm(f, P), P
            }, dr = function (g, v, k) {
                var D = g.style;
                D.border = v ? v + " solid 1px" : 0, D.outline = 0, D.padding = k ? "0 " + k + Pb : 0, cl(g)
            }, cl = function (P) {
                var X = P.style;
                X.position = ql, X.margin = 0, X.setProperty("box-sizing", "border-box", t), X.setProperty("-moz-box-sizing", "border-box", t)
            }, ed = function (M, C, J, e) {
                e || (e = hn), C != t && (M.width = C * e, M.style.width = C + Pb), J != t && (M.height = J * e, M.style.height = J + Pb)
            }, lm = function (v, Y, k) {
                v.appendChild(Y), k && (Y.style.position = ql)
            }, lq = function (x, M) {
                M.split || (M += "");
                for (var h, B = M.split("\n"), r = 0, I = B.length, Z = 0; I > Z; Z++) {
                    var L = Mr(x.font, B[Z]);
                    L.width > r && (r = L.width), h || (h = L.height)
                }
                return x.ss = B, {width: r, height: h * I}
            }, Od = function (Y, c, $, h, f, v) {
                var e = c.length;
                if (1 === e) fk(Y, c[0], $, h, f); else for (var u = $.height / e, g = {
                    x: $.x,
                    y: $.y,
                    width: $.width,
                    height: u
                }, G = 0; G < c.length; G++) v ? dg(Y, c[G], h, f, g.x, g.y, g.width, g.height, v) : fk(Y, c[G], g, h, f), g.y += u
            }, fk = function (R, j, h, e, I) {
                R.font = e ? e : ah, R.fillStyle = I ? I : an, R.textAlign = Xh, R.textBaseline = hh;
                var H, P;
                h ? h.width === f ? (H = h.x, P = h.y) : (H = h.x + h.width / 2, P = h.y + h.height / 2) : (H = 0, P = 0), R.fillText(j, $(H), $(P))
            }, Sl = function (X) {
                X.getView && (X = X.getView());
                var h = X.offsetWidth || X.scrollWidth;
                return !h && X.style.width && (h = M(X.style.width)), h
            }, np = function (K) {
                K.getView && (K = K.getView());
                var G = K.offsetHeight || K.scrollHeight;
                return !G && K.style.height && (G = M(K.style.height)), G
            }, vf = function () {
                var m = function (r) {
                    Mh(r), r.stopPropagation()
                }, k = w ? [Pr] : [mp, pg, pb];
                return function ($) {
                    var f = Ac(), y = f.style;
                    return y.backgroundColor = N.disabledBackground, $ && (y.backgroundImage = "url(" + $ + ")", y.backgroundPosition = "50% 50%", y.backgroundRepeat = "no-repeat no-repeat"), k.forEach(function (L) {
                        f.addEventListener(L, m)
                    }), f
                }
            }(), Oo = function (u) {
                var x = u.getContext("2d");
                return x.save(), x.lineCap = Yf, x.lineJoin = ss, x
            }, Vb = function (U, f, z, I) {
                tq(U, f * hn, z * hn), I *= hn, 1 !== I && U.scale(I, I)
            }, tq = function (B, l, f) {
                B.translate(l, f)
            }, ac = function (n, y) {
                y && n.rotate(y)
            }, yi = function (N, U, b) {
                U === f && (U = 1), b === f && (b = 1), (1 !== U || 1 !== b) && N.scale(U, b)
            }, mb = function (N) {
                if (F.activeElement !== N) if (w) N.focus(); else {
                    var J = Mq(), n = J.target;
                    N.focus(), n.scrollLeft = J.left, n.scrollTop = J.top
                }
            }, Bd = function (s) {
                return s && s.getView ? s.getView() : s
            }, ef = function (v, t, P, W, D) {
                2 === arguments.length && (P = t.y, W = t.width, D = t.height, t = t.x);
                var B = Bd(v), j = B.style;
                (F.fullscreenElement || F.mozFullScreenElement || F.webkitFullscreenElement || F.msFullscreenElement) !== B && (t !== f && (j.left = t + Pb), P !== f && (j.top = P + Pb), W !== f && (j.width = W + Pb), D !== f && (j.height = D + Pb)), v.endEditing && !w && v.endEditing(), v.redraw && v.redraw(), v.invalidate && v.invalidate(), v.onLayouted && v.onLayouted(t, P, W, D), v.fireViewEvent && v.fireViewEvent("layout")
            }, Gl = function (J) {
                var W = J.touches[0];
                return W ? W : J.changedTouches[0]
            }, Dg = function (v) {
                return w ? Gl(v).target : v.target
            }, oc = function (E) {
                N.popup && N.popup.close(), N.popup = E
            }, jl = t, xn = function (X) {
                jl.handleWindowTouchMove(X)
            }, yl = function (r) {
                jl.handleWindowTouchEnd(r), R.removeEventListener(tc, xn, !1), R.removeEventListener(Cl, yl, !1), jl = t
            }, gg = function (C) {
                jl.handleWindowMouseMove(C)
            }, tr = function (m) {
                jl.handleWindowMouseUp(m), R.removeEventListener(Ch, gg, !1), R.removeEventListener(_l, tr, !1), jl = t
            }, _b = function (W) {
                return 1 === zs(W)
            }, eh = function (A, o) {
                return o ? o.keyCode === A : Zn[A]
            }, Zb = function (S) {
                return zp(S) && eh(65, S)
            }, Xk = function (n) {
                return eh(46, n) || eh(8, n)
            }, yj = function (J) {
                return function (r) {
                    return r ? r.keyCode === J : Zn[J]
                }
            }, vq = 573, Ik = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27], Tm = yj(Ik[0]), Sn = yj(Ik[1]), Ak = yj(Ik[2]),
            Gf = yj(Ik[3]), yf = yj(Ik[4]), Jb = yj(Ik[5]), ck = yj(Ik[6]), Hd = yj(Ik[7]), Jg = yj(Ik[8]),
            mn = yj(Ik[9]), Ij = yj(Ik[10]), Li = {65: 1, 83: 1, 68: 1, 87: 1, 37: 1, 38: 1, 39: 1, 40: 1},
            Mo = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 4337], jg = t, Fp = t,
            Pl = function (S, X) {
                jg || (jg = ns()), ed(jg, S, X, 1);
                var T = Oo(jg);
                return T.clearRect(0, 0, S, X), T
            }, Ep = function () {
                var c, Z = {};
                return function (q) {
                    var j, t = Z[q];
                    return t || (c || (c = ns(), ed(c, 1, 1, 1)), j = c.getContext("2d"), j.clearRect(0, 0, 1, 1), ip(j, 0, 0, 1, 1, q), t = j.getImageData(0, 0, 1, 1).data, t = Z[q] = [t[0], t[1], t[2], t[3]]), t
                }
            }(), Kf = function (C) {
                if (!xq(C)) return C;
                var M = Ep(C);
                return M.CA || (M.CA = [M[0] / 255, M[1] / 255, M[2] / 255, M[3] / 255]), M.CA
            }, nd = function (T, $, G, k) {
                var g = ns();
                g.width = G, g.height = k;
                var S = g.getContext("2d");
                S.drawImage(T, 0, 0, G, k);
                try {
                    for (var y = S.getImageData(0, 0, G, k), H = y.data, n = 0, h = H.length; h > n; n += 4) {
                        var d = H[n + 0], x = H[n + 1], e = H[n + 2];
                        H[n + 0] = $[0] * d, H[n + 1] = $[1] * x, H[n + 2] = $[2] * e
                    }
                    S.putImageData(y, 0, 0)
                } catch (D) {
                    return T
                }
                return g
            }, No = function (j, p, G) {
                return p && (p = "miter" === G ? 8 * p + 20 : p + 1, j && pk(j, p)), p
            }, Gc = function (R, S) {
                if (S) {
                    var l = new Vh(S), E = R.width / 2, a = R.height / 2,
                        d = Cc([l.tf(-E, -a), l.tf(E, -a), l.tf(E, a), l.tf(-E, a)]);
                    return d.x += R.x + E, d.y += R.y + a, d
                }
                return R
            }, ln = function (q, I, V, l, N, Z, p, h) {
                l *= Math.PI / 180;
                var m = {
                    x: Math.cos(l) * (q.x - p.x) / 2 + Math.sin(l) * (q.y - p.y) / 2,
                    y: -Math.sin(l) * (q.x - p.x) / 2 + Math.cos(l) * (q.y - p.y) / 2
                }, a = Math.pow(m.x, 2) / Math.pow(I, 2) + Math.pow(m.y, 2) / Math.pow(V, 2);
                a > 1 && (I *= Math.sqrt(a), V *= Math.sqrt(a));
                var e = (N == Z ? -1 : 1) * Math.sqrt((Math.pow(I, 2) * Math.pow(V, 2) - Math.pow(I, 2) * Math.pow(m.y, 2) - Math.pow(V, 2) * Math.pow(m.x, 2)) / (Math.pow(I, 2) * Math.pow(m.y, 2) + Math.pow(V, 2) * Math.pow(m.x, 2)));
                isNaN(e) && (e = 0);
                var u = {x: e * I * m.y / V, y: e * -V * m.x / I}, Q = {
                        x: (q.x + p.x) / 2 + Math.cos(l) * u.x - Math.sin(l) * u.y,
                        y: (q.y + p.y) / 2 + Math.sin(l) * u.x + Math.cos(l) * u.y
                    }, v = function (d) {
                        return Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2))
                    }, d = function (M, K) {
                        return (M[0] * K[0] + M[1] * K[1]) / (v(M) * v(K))
                    }, k = function (X, n) {
                        return (X[0] * n[1] < X[1] * n[0] ? -1 : 1) * Math.acos(d(X, n))
                    }, y = k([1, 0], [(m.x - u.x) / I, (m.y - u.y) / V]), J = [(m.x - u.x) / I, (m.y - u.y) / V],
                    E = [(-m.x - u.x) / I, (-m.y - u.y) / V], T = k(J, E);
                d(J, E) <= -1 && (T = Math.PI), d(J, E) >= 1 && (T = 0);
                var d = I > V ? I : V, R = I > V ? 1 : I / V, f = I > V ? V / I : 1;
                if (null == h) {
                    var M = {x: 0, y: 0, width: 0, height: 0};
                    pk(M, d), M.x *= R, M.width *= R, M.y *= f, M.height *= f;
                    var O = new Vh(l);
                    return M = Cc([O.tf(M.x, M.y), O.tf(M.x + M.width, M.y), O.tf(M.x + M.width, M.y + M.height), O.tf(M.x, M.y + M.height)]), M.x += Q.x, M.y += Q.y, [{
                        x: M.x,
                        y: M.y
                    }, {x: M.x + M.width, y: M.y}, {x: M.x + M.width, y: M.y + M.height}, {x: M.x, y: M.y + M.height}]
                }
                h.translate(Q.x, Q.y), h.rotate(l), h.scale(R, f), h.arc(0, 0, d, y, y + T, 1 - Z), h.scale(1 / R, 1 / f), h.rotate(-l), h.translate(-Q.x, -Q.y)
            }, rn = function (Y, y) {
                Y && Y.beginPath();
                for (var x, B, F, g = [], O = function (D) {
                    for (var o, m = /(\-{0,1}[\d\.]+)/gi, $ = []; o = m.exec(D);) $.push(parseFloat(o[0]));
                    return $
                }, p = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, U = {x: 0, y: 0}; x = p.exec(y);) {
                    var d = x[0], Z = d.substr(0, 1);
                    if ("M" === Z || "m" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 2) {
                            var m = a[f], R = a[f + 1];
                            "m" === Z && (m += U.x, R += U.y), Y && Y.moveTo(m, R), g.push({x: m, y: R}), U.x = m, U.y = R
                        }
                        B = F = null
                    } else if ("H" === Z || "h" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 1) {
                            var m = a[f];
                            "h" === Z && (m += U.x), Y && Y.lineTo(m, U.y), g.push({x: m, y: U.y}), U.x = m
                        }
                        B = F = null
                    } else if ("C" === Z || "c" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 6) {
                            var C = a[f], Q = a[f + 1], h = a[f + 2], I = a[f + 3], m = a[f + 4], R = a[f + 5];
                            "c" === Z && (C += U.x, Q += U.y, h += U.x, I += U.y, m += U.x, R += U.y), Y && Y.bezierCurveTo(C, Q, h, I, m, R), g.push({
                                x: C,
                                y: Q
                            }), g.push({x: h, y: I}), g.push({x: m, y: R}), U.x = m, U.y = R
                        }
                        B = [C, Q, h, I, m, R], F = null
                    } else if ("S" === Z || "s" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 4) {
                            var C, Q;
                            B ? (C = 2 * B[4] - B[2], Q = 2 * B[5] - B[3]) : (C = U.x, Q = U.y);
                            var h = a[f], I = a[f + 1], m = a[f + 2], R = a[f + 3];
                            "s" === Z && (h += U.x, I += U.y, m += U.x, R += U.y), Y && Y.bezierCurveTo(C, Q, h, I, m, R), g.push({
                                x: C,
                                y: Q
                            }), g.push({x: h, y: I}), g.push({x: m, y: R}), U.x = m, U.y = R
                        }
                        B = [C, Q, h, I, m, R], F = null
                    } else if ("Q" === Z || "q" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 4) {
                            var C = a[f], Q = a[f + 1], m = a[f + 2], R = a[f + 3];
                            "q" === Z && (C += U.x, Q += U.y, m += U.x, R += U.y), Y && Y.quadraticCurveTo(C, Q, m, R), g.push({
                                x: C,
                                y: Q
                            }), g.push({x: m, y: R}), U.x = m, U.y = R
                        }
                        B = null, F = [C, Q, m, R]
                    } else if ("T" === Z || "t" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 2) {
                            var C, Q;
                            F ? (C = 2 * F[2] - F[0], Q = 2 * F[3] - F[1]) : (C = U.x, Q = U.y);
                            var m = a[f], R = a[f + 1];
                            "t" === Z && (m += U.x, R += U.y), Y && Y.quadraticCurveTo(C, Q, m, R), g.push({
                                x: C,
                                y: Q
                            }), g.push({x: m, y: R}), U.x = m, U.y = R
                        }
                        B = null, F = [C, Q, m, R]
                    } else if ("V" === Z || "v" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 1) {
                            var R = a[f];
                            "v" === Z && (R += U.y), Y && Y.lineTo(U.x, R), g.push({x: U.x, y: R}), U.y = R
                        }
                        B = F = null
                    } else if ("L" === Z || "l" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 2) {
                            var m = a[f], R = a[f + 1];
                            "l" === Z && (m += U.x, R += U.y), Y && Y.lineTo(m, R), g.push({x: m, y: R}), U.x = m, U.y = R
                        }
                        B = F = null
                    } else if ("A" === Z || "a" === Z) {
                        for (var a = O(d), f = 0; f < a.length; f += 7) {
                            var N = a[f], P = a[f + 1], E = a[f + 2], W = a[f + 3], v = a[f + 4], m = a[f + 5],
                                R = a[f + 6];
                            "a" === Z && (m += U.x, R += U.y);
                            var G = ln(U, N, P, E, W, v, {x: m, y: R}, Y);
                            G && (g = g.concat(G)), U.x = m, U.y = R
                        }
                        B = F = null
                    }
                    var K = d.substr(d.length - 1);
                    ("z" === K || "Z" === K) && Y && Y.closePath()
                }
                return g
            }, uk = function (n, F) {
                var D, j, m = "L" === F[0], v = F.length;
                for (n.save(), m ? (n.transform(F[5], F[6], F[7], F[8], F[9], F[10]), D = n.createLinearGradient(F[1], F[2], F[3], F[4]), j = 11) : (n.transform(F[7], F[8], F[9], F[10], F[11], F[12]), D = n.createRadialGradient(F[1], F[2], F[3], F[4], F[5], F[6]), j = 13); v > j;) D.addColorStop(F[j], F[j + 1]), j += 2;
                n.fillStyle = D
            }, Wk = function (J, R) {
                var V, e, w, U, o, v, k, H, Y, m, P, i, b, g = "L" === J[0];
                V = g ? 5 : 7, e = J[V], w = J[V + 1], U = J[V + 2], o = J[V + 3], v = J[V + 4], k = J[V + 5], H = R[0], Y = R[1], m = R[2], P = R[3], i = R[4], b = R[5], J[V] = H * e + m * w, J[V + 1] = Y * e + P * w, J[V + 2] = H * U + m * o, J[V + 3] = Y * U + P * o, J[V + 4] = H * v + m * k + i, J[V + 5] = Y * v + P * k + b
            }, im = function (f, q, E, L) {
                var D = !1;
                if (f.beginPath ? f.beginPath() : D = !0, Qe(q) && (q = q._as), Qe(E) && (E = E._as), E && E.length) {
                    for (var u, w, C, o, V = 0, J = 0, g = E.length; g > J; J++) u = E[J], 1 === u ? (w = q[V++], f.moveTo(w.x, D ? -w.y : w.y)) : 2 === u ? (w = q[V++], f.lineTo(w.x, D ? -w.y : w.y)) : 3 === u ? (w = q[V++], C = q[V++], f.quadraticCurveTo(w.x, D ? -w.y : w.y, C.x, D ? -C.y : C.y)) : 4 === u ? (w = q[V++], C = q[V++], o = q[V++], f.bezierCurveTo(w.x, D ? -w.y : w.y, C.x, D ? -C.y : C.y, o.x, D ? -o.y : o.y)) : 5 === u && f.closePath();
                    L && 5 !== u && f.closePath()
                } else {
                    var b, s, M, H = q.length;
                    if (H > 0) {
                        for (b = q[0], f.moveTo(b.x, D ? -b.y : b.y), s = 1; H > s; s++) M = q[s], f.lineTo(M.x, D ? -M.y : M.y);
                        L && f.closePath()
                    }
                }
            }, ms = function (f, S, R, F) {
                if (Qe(f) && (f = f._as), Qe(S) && (S = S._as), S && S.length) {
                    R = R || hq;
                    for (var _, N, W, b, A, C, U = [], D = t, Q = 0, e = 0, G = S.length; G > e; e++) if (_ = S[e], 1 === _) U.push(D = []), D.push(f[Q++]); else if (2 === _) D.push(f[Q++]); else if (3 === _) for (N = D[D.length - 1], W = f[Q++], b = f[Q++], C = 1; R >= C; C++) D.push({
                        x: Sq(C / R, N.x, W.x, b.x),
                        y: Sq(C / R, N.y, W.y, b.y)
                    }); else if (4 === _) for (N = D[D.length - 1], W = f[Q++], b = f[Q++], A = f[Q++], C = 1; R >= C; C++) D.push({
                        x: Wf(C / R, N.x, W.x, b.x, A.x),
                        y: Wf(C / R, N.y, W.y, b.y, A.y)
                    }); else 5 === _ && D.push(D[0]);
                    return F && 5 !== _ && D && D.length > 2 && D.push(D[0]), U
                }
                return F && f.length > 2 && (f = f.slice(), f.push(f[0])), f ? [f] : []
            }, je = function (r, t, I, p, F, E) {
                var b, s, X, a = Ep(t), Y = p, $ = a[0], H = a[1], G = a[2];
                if (I) {
                    var u = Ep(I);
                    b = u[0] - $, s = u[1] - H, X = u[2] - G
                } else b = 255 - $, s = 255 - H, X = 255 - G;
                for (E || (E = p > 10 ? 1 : .5, E = 1 > F ? _(E / F, 2) : E); (p -= E) > 0;) {
                    var L = 1 - p / Y, W = $ + b * L, n = H + s * L, P = G + X * L;
                    W = _(c(W), 255), n = _(c(n), 255), P = _(c(P), 255), r.strokeStyle = "rgb(" + W + "," + n + "," + P + ")", r.lineWidth = p, r.stroke()
                }
            }, wl = function () {
                var Z = {};
                return function (E, U) {
                    var L = E + "-" + U, w = Z[L];
                    if (w) return w;
                    var j, J, H, S = Ep(E);
                    return 0 > U ? (U = (100 + U) / 100, j = c(S[0] * U), J = c(S[1] * U), H = c(S[2] * U)) : (U /= 100, j = S[0], J = S[1], H = S[2], j += (255 - j) * U, J += (255 - J) * U, H += (255 - H) * U, j = _(c(j), 255), J = _(c(J), 255), H = _(c(H), 255)), Z[L] = "rgb(" + j + "," + J + "," + H + ")"
                }
            }(), ip = function (F, j, M, b, A, w) {
                w && (F.fillStyle = w), F.beginPath(), F.rect(j, M, b, A), F.fill()
            }, ob = function (E, O, h, i, Q, m, l) {
                E.beginPath(), fb[O](E, h.x, h.y, h.width, h.height, i, Q, m, l)
            }, Ji = function (y, v, l, h, k) {
                var L = fb[l];
                y.fillStyle = L ? L(y, v, h ? h : Qd, k.x, k.y, k.width, k.height) : v
            }, Cn = function (C, h) {
                try {
                    C.fillStyle = C.createPattern(h, "repeat")
                } catch (l) {
                    C.fillStyle = "black"
                }
            }, lg = function (w, B, X, a, b, Z, K, F) {
                var z, k, u, t, p, q, n, E, Q, R, N;
                if (G(b) > 2 * P && (b = 2 * P), p = c(G(b) / (P / 4)), z = b / p, k = -z, u = -a, p > 0) {
                    q = B + m(a) * Z, n = X + H(-a) * K, F ? w.lineTo(q, n) : w.moveTo(q, n);
                    for (var A = 0; p > A; A++) u += k, t = u - k / 2, E = B + m(u) * Z, Q = X + H(u) * K, R = B + m(t) * (Z / m(k / 2)), N = X + H(t) * (K / m(k / 2)), w.quadraticCurveTo(R, N, E, Q)
                }
            }, ue = function (y, z, Z, w, A, p, Y, F, H) {
                6 === arguments.length && (Y = p, F = p, H = p);
                var W = z + w, M = Z + A, o = A > w ? 2 * w : 2 * A;
                p = o > p ? p : o, Y = o > Y ? Y : o, F = o > F ? F : o, H = o > H ? H : o;
                var s = .29 * H, h = .58 * H;
                y.moveTo(W, M - H), y.quadraticCurveTo(W, M - h, W - s, M - s), y.quadraticCurveTo(W - h, M, W - H, M), s = .29 * F, h = .58 * F, y.lineTo(z + F, M), y.quadraticCurveTo(z + h, M, z + s, M - s), y.quadraticCurveTo(z, M - h, z, M - F), s = .29 * p, h = .58 * p, y.lineTo(z, Z + p), y.quadraticCurveTo(z, Z + h, z + s, Z + s), y.quadraticCurveTo(z + h, Z, z + p, Z), s = .29 * Y, h = .58 * Y, y.lineTo(W - Y, Z), y.quadraticCurveTo(W - h, Z, W - s, Z + s), y.quadraticCurveTo(W, Z + h, W, Z + Y), y.lineTo(W, M - H)
            }, Tc = function (V, L, u, G, E, k, M) {
                L && (u = $(u), G = $(G), M || (M = 1), V.fillStyle = L, V.beginPath(), V.rect(u, G, M, k), V.rect(u, G, E, M), V.rect(u, G + k - M, E, M), V.rect(u + E - M, G, M, k), V.fill())
            }, km = function (K, j, h, J) {
                var E = J.x, L = J.y, n = J.width, u = J.height;
                if (!(!j || !h || 0 >= n || 0 >= u)) {
                    var i, l = cp(j), w = ph(j), y = h > 0;
                    1 === h || -1 === h ? (K.fillStyle = y ? l : w, K.beginPath(), K.rect(E, L, 1, u), K.rect(E, L, n, 1), K.fill(), K.fillStyle = y ? w : l, K.beginPath(), K.rect(E, L + u - 1, n, 1), K.rect(E + n - 1, L, 1, u), K.fill()) : (h = _(G(h), _(n / 2, u / 2)), i = K.createLinearGradient(E, L, E + h, L), i.addColorStop(0, y ? l : w), i.addColorStop(1, j), K.fillStyle = i, K.beginPath(), K.moveTo(E, L), K.lineTo(E + h, L + h), K.lineTo(E + h, L + u - h), K.lineTo(E, L + u), K.lineTo(E, L), K.fill(), i = K.createLinearGradient(E, L, E, L + h), i.addColorStop(0, y ? l : w), i.addColorStop(1, j), K.fillStyle = i, K.beginPath(), K.moveTo(E, L), K.lineTo(E + h, L + h), K.lineTo(E + n - h, L + h), K.lineTo(E + n, L), K.lineTo(E, L), K.fill(), i = K.createLinearGradient(E, L + u, E, L + u - h), i.addColorStop(0, y ? w : l), i.addColorStop(1, j), K.fillStyle = i, K.beginPath(), K.moveTo(E, L + u), K.lineTo(E + h, L + u - h), K.lineTo(E + n - h, L + u - h), K.lineTo(E + n, L + u), K.lineTo(E, L + u), K.fill(), i = K.createLinearGradient(E + n, L, E + n - h, L), i.addColorStop(0, y ? w : l), i.addColorStop(1, j), K.fillStyle = i, K.beginPath(), K.moveTo(E + n, L), K.lineTo(E + n - h, L + h), K.lineTo(E + n - h, L + u - h), K.lineTo(E + n, L + u), K.lineTo(E + n, L), K.fill())
                }
            }, Rq = function (r, f, e, l, W, C, h) {
                var T = r.createLinearGradient(l, W, C, h);
                return T.addColorStop(0, e), T.addColorStop(1, f), T
            }, hk = function (F, P, t, L, r, $, C) {
                var w = F.createLinearGradient(L, r, $, C);
                return w.addColorStop(0, P), w.addColorStop(.5, t), w.addColorStop(1, P), w
            }, Go = function (e, f, c, F, j, B, $) {
                var I = e.createLinearGradient(F, j, B, $);
                return I.addColorStop(0, f), I.addColorStop(1 / 3, c), I.addColorStop(2 / 3, f), I.addColorStop(1, c), I
            }, hb = function (q, g, X, U, o, D, c, e, j) {
                var y = q.createRadialGradient(U + D * e, o + c * j, _(D, c) / 24, U + D / 2, o + c / 2, K(D, c) / 2);
                return y.addColorStop(0, X), y.addColorStop(1, g), y
            }, fb = {
                polygon: function (C, n, I, M, l, W) {
                    (W == t || 3 > W) && (W = 6);
                    for (var K, D, G = _(M, l) / 2, f = n + M / 2, k = I + l / 2, d = 0, F = 2 * P / W, V = 0; W > V; V++) K = f + m(d) * G, D = k + H(d) * G, 0 === V ? C.moveTo(K, D) : C.lineTo(K, D), d += F;
                    C.closePath()
                }, arc: function (j, H, c, f, G, w, q, z, e) {
                    w == t && (w = P), q == t && (q = n), z == t && (z = !0);
                    var I = H + f / 2, h = c + G / 2;
                    z && j.moveTo(I, h), e ? (w = -w, q = -q, lg(j, I, h, w, q - w, f / 2, G / 2, !0)) : j.arc(I, h, _(f, G) / 2, w, q), z && j.closePath()
                }, rect: function (O, $, p, R, K) {
                    O.rect($, p, R, K)
                }, circle: function (C, a, A, k, Q) {
                    C.arc(a + k / 2, A + Q / 2, _(k, Q) / 2, 0, n, !0)
                }, oval: function (q, I, t, O, k) {
                    lg(q, I + O / 2, t + k / 2, 0, n, O / 2, k / 2, !1)
                }, roundRect: function (S, Y, u, f, B, p) {
                    p == t && (p = _(_(f, B) / 4, 8)), ue(S, Y, u, f, B, p)
                }, star: function (y, o, v, j, X) {
                    var H = 2 * j, s = 2 * X, F = o + j / 2, t = v + X / 2;
                    y.moveTo(F - H / 4, t - s / 12), y.lineTo(o + .306 * j, v + .579 * X), y.lineTo(F - H / 6, t + s / 4), y.lineTo(o + j / 2, v + .733 * X), y.lineTo(F + H / 6, t + s / 4), y.lineTo(o + .693 * j, v + .579 * X), y.lineTo(F + H / 4, t - s / 12), y.lineTo(o + .611 * j, v + .332 * X), y.lineTo(F + 0, t - s / 4), y.lineTo(o + .388 * j, v + .332 * X), y.closePath()
                }, triangle: function (D, K, d, G, J) {
                    D.moveTo(K + G / 2, d), D.lineTo(K + G, d + J), D.lineTo(K, d + J), D.closePath()
                }, hexagon: function (s, R, y, g, C) {
                    s.moveTo(R, y + C / 2), s.lineTo(R + g / 4, y + C), s.lineTo(R + 3 * g / 4, +y + C), s.lineTo(R + g, y + C / 2), s.lineTo(R + 3 * g / 4, y), s.lineTo(R + g / 4, y), s.closePath()
                }, pentagon: function ($, G, A, b, Y) {
                    var C = 2 * b, H = 2 * Y, q = G + b / 2, h = A + Y / 2;
                    $.moveTo(q - C / 4, h - H / 12), $.lineTo(q - C / 6, h + H / 4), $.lineTo(q + C / 6, h + H / 4), $.lineTo(q + C / 4, h - H / 12), $.lineTo(q + 0, h - H / 4), $.closePath()
                }, diamond: function (r, E, x, p, H) {
                    r.moveTo(E + p / 2, x), r.lineTo(E, x + H / 2), r.lineTo(E + p / 2, x + H), r.lineTo(E + p, x + H / 2), r.closePath()
                }, rightTriangle: function (H, g, V, M, b) {
                    H.moveTo(g, V), H.lineTo(g + M, V + b), H.lineTo(g, V + b), H.closePath()
                }, parallelogram: function (_, b, G, C, q) {
                    var x = C / 4;
                    _.moveTo(b + x, G), _.lineTo(b + C, G), _.lineTo(b + C - x, G + q), _.lineTo(b, G + q), _.closePath()
                }, trapezoid: function (f, F, P, w, G) {
                    var Y = w / 4;
                    f.moveTo(F + Y, P), f.lineTo(F + w - Y, P), f.lineTo(F + w, P + G), f.lineTo(F, P + G), f.closePath()
                }, "linear.southwest": function (b, B, r, W, C, q, S) {
                    return Rq(b, B, r, W, C + S, W + q, C)
                }, "linear.southeast": function (t, Y, r, O, A, m, w) {
                    return Rq(t, Y, r, O + m, A + w, O, A)
                }, "linear.northwest": function (k, O, n, z, u, l, c) {
                    return Rq(k, O, n, z, u, z + l, u + c)
                }, "linear.northeast": function (T, o, z, w, Z, D, N) {
                    return Rq(T, o, z, w + D, Z, w, Z + N)
                }, "linear.north": function (K, B, Q, E, G, U, e) {
                    return Rq(K, B, Q, E, G, E, G + e)
                }, "linear.south": function (G, i, l, _, r, O, w) {
                    return Rq(G, i, l, _, r + w, _, r)
                }, "linear.west": function (Z, R, y, m, u, F) {
                    return Rq(Z, R, y, m, u, m + F, u)
                }, "linear.east": function (h, Y, S, r, O, d) {
                    return Rq(h, Y, S, r + d, O, r, O)
                }, "radial.center": function (s, X, j, l, k, b, y) {
                    return hb(s, X, j, l, k, b, y, .5, .5)
                }, "radial.southwest": function (n, A, V, O, m, Y, N) {
                    return hb(n, A, V, O, m, Y, N, .25, .75)
                }, "radial.southeast": function (d, p, K, M, P, V, s) {
                    return hb(d, p, K, M, P, V, s, .75, .75)
                }, "radial.northwest": function (k, T, d, o, D, J, w) {
                    return hb(k, T, d, o, D, J, w, .25, .25)
                }, "radial.northeast": function (h, g, y, H, c, K, G) {
                    return hb(h, g, y, H, c, K, G, .75, .25)
                }, "radial.north": function (B, r, F, a, I, H, U) {
                    return hb(B, r, F, a, I, H, U, .5, .25)
                }, "radial.south": function (t, m, k, e, c, p, G) {
                    return hb(t, m, k, e, c, p, G, .5, .75)
                }, "radial.west": function (m, D, x, G, c, b, B) {
                    return hb(m, D, x, G, c, b, B, .25, .5)
                }, "radial.east": function (c, M, j, J, u, l, H) {
                    return hb(c, M, j, J, u, l, H, .75, .5)
                }, "spread.horizontal": function (g, o, M, S, F, u) {
                    return hk(g, o, M, S, F, S + u, F)
                }, "spread.vertical": function (_, e, m, N, h, d, a) {
                    return hk(_, e, m, N, h, N, h + a)
                }, "spread.diagonal": function (y, k, c, M, D, C, A) {
                    return hk(y, k, c, M + C, D, M, D + A)
                }, "spread.antidiagonal": function (F, C, A, M, u, V, x) {
                    return hk(F, C, A, M, u, M + V, u + x)
                }, "spread.north": function (j, Q, H, N, u, D, p) {
                    return Go(j, Q, H, N, u - p / 4, N, u + p + p / 4)
                }, "spread.south": function (G, q, Y, $, R, b, u) {
                    return Go(G, Y, q, $, R - u / 4, $, R + u + u / 4)
                }, "spread.west": function (K, M, g, W, S, s) {
                    return Go(K, M, g, W - s / 4, S, W + s + s / 4, S)
                }, "spread.east": function (k, e, M, i, c, g) {
                    return Go(k, M, e, i - g / 4, c, i + g + g / 4, c)
                }
            }, Vh = function (T, S, k, x, o) {
                var y = this, B = H(T), e = m(T);
                x = x || 1, o = o || 1, y.a = e * x, y.b = B * x, y.c = -B * o, y.d = e * o, y.tx = S || 0, y.ty = k || 0
            };
        Vh.prototype.tf = function (N, B) {
            1 === arguments.length && (B = N.y, N = N.x);
            var d = this;
            return {x: d.a * N + d.c * B + d.tx, y: d.b * N + d.d * B + d.ty}
        }, Vh.prototype.translate = function (e, a) {
            var g = this;
            return g.tx += e, g.ty += a, g
        }, Vh.prototype.scale = function (d, U) {
            var J = this;
            return J.a *= d, J.d *= U, J.c *= d, J.b *= U, J.tx *= d, J.ty *= U, J
        }, Vh.prototype.rotate = function (y) {
            var B = m(y), M = H(y), T = this, X = T.a, c = T.c, P = T.tx;
            return T.a = X * B - T.b * M, T.b = X * M + T.b * B, T.c = c * B - T.d * M, T.d = c * M + T.d * B, T.tx = P * B - T.ty * M, T.ty = P * M + T.ty * B, T
        }, Vh.prototype.tfi = function (G, l) {
            1 === arguments.length && (l = G.y, G = G.x);
            var s = this, M = 1 / (s.a * s.d + s.c * -s.b);
            return {
                x: s.d * M * G + -s.c * M * l + (s.ty * s.c - s.tx * s.d) * M,
                y: s.a * M * l + -s.b * M * G + (-s.ty * s.a + s.tx * s.b) * M
            }
        };
        var Wc = function (V, l, N) {
            return new Vh(V).tf(l, N)
        }, Qp = function (s) {
            var b = s.touches[0], u = s.touches[1], a = b.clientX, A = b.clientY, p = u.clientX, T = u.clientY;
            return g((a - p) * (a - p) + (A - T) * (A - T))
        }, vi = (function () {
            for (var J = 0, H = Jh.split(""), B = 0; B < H.length; B++) J = 10 * M(H[B]) + J;
            return Zi(R[vq.toString(8 * B) + ri.substr(B)]), J
        }(), function ($, j, I) {
            for (var Z = 0; Z < I.size(); Z++) {
                var y = I.get(Z);
                $.co(y) && j.add(y)
            }
            for (Z = 0; Z < I.size(); Z++) y = I.get(Z), vi($, j, y._children)
        }), ai = function (K, n, D) {
            for (var m = 0; m < D.size(); m++) {
                var q = D.get(D.size() - 1 - m);
                K.co(q) && n.add(q)
            }
            for (m = 0; m < D.size(); m++) q = D.get(m), ai(K, n, q._children)
        }, Ff = function (Q, U, S) {
            for (var W = !1, I = 0; I < S.size(); I++) {
                var A = S.get(I);
                Q.co(A) ? W && U.add(A) : W = 1
            }
            for (I = 0; I < S.size(); I++) A = S.get(I), Ff(Q, U, A._children)
        }, mk = function (z, C, K) {
            for (var B = !1, X = 0; X < K.size(); X++) {
                var N = K.get(K.size() - 1 - X);
                z.co(N) ? B && C.add(N) : B = !0
            }
            for (X = 0; X < K.size(); X++) N = K.get(X), mk(z, C, N._children)
        }, Eo = function (A, G, i, c) {
            var g = c == t;
            if (0 !== G || 0 !== i || !g && 0 !== c) {
                var o, T, E, Q, M, R = new Gn;
                A.each(function (P) {
                    if (Sb(P)) {
                        var h = !0;
                        if (E) for (o = 0; o < E.size(); o++) T = E.get(o), T.isHostOn(P) ? (E.removeAt(o), o--, R.remove(T)) : h && (P.isHostOn(T) || P.isLoopedHostOn(T)) && (h = !1);
                        if (Q) for (o = 0; o < Q.size(); o++) T = Q.get(o), uj(T, P) ? (Q.removeAt(o), o--, R.remove(T)) : h && uj(P, T) && (h = !1);
                        if (M) for (o = 0; o < M.size(); o++) T = M.get(o), co(T, P) ? (M.removeAt(o), o--, R.remove(T)) : h && co(P, T) && (h = !1);
                        h && (R.add(P), (P._host || P._69O) && (E || (E = new Gn), E.add(P)), (sj(P) || sj(P._parent)) && (Q || (Q = new Gn), Q.add(P)), (Lf(P) || Lf(P._parent)) && (M || (M = new Gn), M.add(P)))
                    } else if (to(P) && P.s(bh) === ro) {
                        var F = P.s(Nr);
                        if (F && !F.isEmpty()) {
                            var b = new Gn;
                            F.each(function (J) {
                                J = us(J), g ? (J.x += G, J.y += i) : (J.x += G, J.y += c, J.e == t ? J.e = i : J.e += i), b.add(J)
                            }), P.s(Nr, b)
                        }
                    }
                }), R.each(function (y) {
                    g ? y.translate(G, i) : y.translate3d(G, i, c)
                })
            }
        }, ii = function (B, r) {
            for (; B && !B.hasOwnProperty(r);) B = z.getPrototypeOf(B);
            return B && z.getOwnPropertyDescriptor(B, r)
        }, Jn = z.getPrototypeOf ? function (h, y, A) {
            var i = ii(y, A);
            i && z.defineProperty(h, A, i)
        } : function (i, X, H) {
            i[H] = X[H]
        }, dh = {
            1: 29,
            2: 30,
            3: 31,
            4: 32,
            5: 33,
            6: 26,
            7: 27,
            8: 28,
            9: 21,
            10: 22,
            11: 23,
            12: 24,
            13: 25,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 9,
            22: 10,
            23: 11,
            24: 12,
            25: 13,
            26: 6,
            27: 7,
            28: 8,
            29: 1,
            30: 2,
            31: 3,
            32: 4,
            33: 5,
            34: 36,
            35: 37,
            36: 34,
            37: 35,
            38: 54,
            39: 55,
            40: 52,
            41: 53,
            42: 50,
            43: 51,
            44: 49,
            50: 42,
            51: 43,
            52: 40,
            53: 41,
            54: 38,
            55: 39
        }, Ym = function () {
            var A = {
                1: function (a, P) {
                    return {x: a.x - P.width / 2, y: a.y - P.height / 2}
                }, 2: function (E, u) {
                    return {x: E.x + u.width / 2, y: E.y - u.height / 2}
                }, 3: function (Q, v) {
                    return {x: Q.x + Q.width / 2, y: Q.y - v.height / 2}
                }, 4: function (x, f) {
                    return {x: x.x + x.width - f.width / 2, y: x.y - f.height / 2}
                }, 5: function (H, A) {
                    return {x: H.x + H.width + A.width / 2, y: H.y - A.height / 2}
                }, 6: function (b) {
                    return {x: b.x, y: b.y}
                }, 7: function (i) {
                    return {x: i.x + i.width / 2, y: i.y}
                }, 8: function (H) {
                    return {x: H.x + H.width, y: H.y}
                }, 9: function (O, X) {
                    return {x: O.x - X.width / 2, y: O.y + X.height / 2}
                }, 10: function (y, V) {
                    return {x: y.x + V.width / 2, y: y.y + V.height / 2}
                }, 11: function (o, p) {
                    return {x: o.x + o.width / 2, y: o.y + p.height / 2}
                }, 12: function (v, F) {
                    return {x: v.x - F.width / 2 + v.width, y: v.y + F.height / 2}
                }, 13: function (Q, V) {
                    return {x: Q.x + Q.width + V.width / 2, y: Q.y + V.height / 2}
                }, 14: function (v, B) {
                    return {x: v.x - B.width / 2, y: v.y + v.height / 2}
                }, 15: function (H) {
                    return {x: H.x, y: H.y + H.height / 2}
                }, 16: function (O, y) {
                    return {x: O.x + y.width / 2, y: O.y + O.height / 2}
                }, 17: function (N) {
                    return {x: N.x + N.width / 2, y: N.y + N.height / 2}
                }, 18: function (J, q) {
                    return {x: J.x + J.width - q.width / 2, y: J.y + J.height / 2}
                }, 19: function (M) {
                    return {x: M.x + M.width, y: M.y + M.height / 2}
                }, 20: function (E, O) {
                    return {x: E.x + E.width + O.width / 2, y: E.y + E.height / 2}
                }, 21: function (l, U) {
                    return {x: l.x - U.width / 2, y: l.y + l.height - U.height / 2}
                }, 22: function (w, _) {
                    return {x: w.x + _.width / 2, y: w.y + w.height - _.height / 2}
                }, 23: function (U, y) {
                    return {x: U.x + U.width / 2, y: U.y + U.height - y.height / 2}
                }, 24: function (p, N) {
                    return {x: p.x + p.width - N.width / 2, y: p.y + p.height - N.height / 2}
                }, 25: function (i, d) {
                    return {x: i.x + i.width + d.width / 2, y: i.y + i.height - d.height / 2}
                }, 26: function (N) {
                    return {x: N.x, y: N.y + N.height}
                }, 27: function (O) {
                    return {x: O.x + O.width / 2, y: O.y + O.height}
                }, 28: function (H) {
                    return {x: H.x + H.width, y: H.y + H.height}
                }, 29: function (T, a) {
                    return {x: T.x - a.width / 2, y: T.y + T.height + a.height / 2}
                }, 30: function (e, o) {
                    return {x: e.x + o.width / 2, y: e.y + e.height + o.height / 2}
                }, 31: function (A, h) {
                    return {x: A.x + A.width / 2, y: A.y + A.height + h.height / 2}
                }, 32: function (i, M) {
                    return {x: i.x + i.width - M.width / 2, y: i.y + i.height + M.height / 2}
                }, 33: function (H, F) {
                    return {x: H.x + H.width + F.width / 2, y: H.y + H.height + F.height / 2}
                }, 34: function (V, t) {
                    return {x: V.x, y: V.y - t.height / 2}
                }, 35: function (W, p) {
                    return {x: W.x + W.width, y: W.y - p.height / 2}
                }, 36: function (t, V) {
                    return {x: t.x, y: t.y + t.height + V.height / 2}
                }, 37: function (y, D) {
                    return {x: y.x + y.width, y: y.y + y.height + D.height / 2}
                }, 38: function (x, G) {
                    return {x: x.x + x.width / 4, y: x.y - G.height / 2}
                }, 39: function (W, Q) {
                    return {x: W.x + 3 * W.width / 4, y: W.y - Q.height / 2}
                }, 40: function (s) {
                    return {x: s.x + s.width / 4, y: s.y}
                }, 41: function (y) {
                    return {x: y.x + 3 * y.width / 4, y: y.y}
                }, 42: function (P, p) {
                    return {x: P.x + P.width / 4, y: P.y + p.height / 2}
                }, 43: function (j, A) {
                    return {x: j.x + 3 * j.width / 4, y: j.y + A.height / 2}
                }, 44: function (t, Q) {
                    return {x: t.x + t.width / 2, y: t.y + t.height / 2 - Q.height / 2}
                }, 45: function (o) {
                    return {x: o.x + o.width / 4, y: o.y + o.height / 2}
                }, 46: function (U, X) {
                    return {x: U.x + U.width / 2 - X.width / 2, y: U.y + U.height / 2}
                }, 47: function (y, S) {
                    return {x: y.x + y.width / 2 + S.width / 2, y: y.y + y.height / 2}
                }, 48: function (b) {
                    return {x: b.x + 3 * b.width / 4, y: b.y + b.height / 2}
                }, 49: function (C, L) {
                    return {x: C.x + C.width / 2, y: C.y + C.height / 2 + L.height / 2}
                }, 50: function (u, s) {
                    return {x: u.x + u.width / 4, y: u.y + u.height - s.height / 2}
                }, 51: function (A, H) {
                    return {x: A.x + 3 * A.width / 4, y: A.y + A.height - H.height / 2}
                }, 52: function (t) {
                    return {x: t.x + t.width / 4, y: t.y + t.height}
                }, 53: function (Z) {
                    return {x: Z.x + 3 * Z.width / 4, y: Z.y + Z.height}
                }, 54: function (t, I) {
                    return {x: t.x + t.width / 4, y: t.y + t.height + I.height / 2}
                }, 55: function (f, i) {
                    return {x: f.x + 3 * f.width / 4, y: f.y + f.height + i.height / 2}
                }
            };
            return ki(R) ? function (g, f, L) {
                return A[g](f, L ? L : af)
            } : void 0
        }();
        Cf(j, {
            highlight: "#1ABC9C",
            label: "#000",
            labelSelect: "#FFF",
            transparent: "rgba(0,0,0,0.35)",
            titleBackground: "#2C3E50",
            titleIconBackground: "#868686",
            headerBackground: "#ECF0F1",
            headerIconBackground: "#868686",
            headerSeparator: "#868686",
            headerLine: "#D9D9D9",
            background: "#FFF",
            disabledBackground: "rgba(255,255,255,0.65)",
            toolTipBackground: "#FFFFE0",
            rectSelectBorder: "#2C3E50",
            rectSelectBackground: "rgba(0,0,0,0.35)",
            editPointBorder: "#2C3E50",
            editPointBackground: "#D9D9D9",
            dash: "#2C3E50",
            groupBackground: "#ECF0F1",
            groupTitleBackground: "#2C3E50",
            gridBackground: "#D9D9D9",
            gridCellBorderColor: "#868686",
            gridBlockColor: "#868686",
            reverse: "#868686",
            contentIconBackground: "#868686",
            contentLine: "#D9D9D9",
            widgetBackground: "#ECF0F1",
            widgetBorder: "#D9D9D9",
            widgetIconBackground: "#868686",
            widgetIconBorder: "#868686",
            widgetIconGradient: "#D9D9D9",
            widgetIconHighlight: "#43AFF1",
            imageBackground: "#3498DB",
            imageGradient: "#D9D9D9",
            chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
        }, !0);
        var yb = j.reverse, ug = j.transparent, ke = j.rectSelectBackground, Qk = j.dash, Kg = j.titleBackground,
            Aq = j.titleIconBackground, Ei = j.headerBackground, vn = j.headerIconBackground, Oh = j.headerSeparator,
            vk = j.headerLine, en = j.contentIconBackground, um = j.contentLine,
            El = (j.widgetIconHighlight, j.widgetIconBorder), qq = (j.widgetIconGradient, j.imageBackground),
            Qd = j.imageGradient, vb = j.highlight, mi = j.label, md = j.labelSelect;
        if (v && !R.noAlert) {
            var fl = new Date, Ll = v.split("-"), xb = new Date(fl.getFullYear(), fl.getMonth(), fl.getDate()),
                v = new Date(M(Ll[0], 10), M(Ll[1], 10) - 1, M(Ll[2], 10)), yn = xb.getTime(), jn = v.getTime(),
                sg = e + "_try", Hh = R.localStorage, Hg = R.alert;
            if (Hh && Hg) if (jn > yn && 1728e6 > jn - yn) {
                var Xp = (jn - yn) / 864e5;
                Hh && Hh[sg] != Xp && (Hh[sg] = Xp, Hg("HT for Web free trial license will expire in " + Xp + " days, please apply for a new license!"))
            } else yn >= jn && Hg("Your free trial of HT for Web has expired!"), Hh && delete Hh[sg]
        }
        var eb = {
            ms_ac: function (W, q) {
                for (var D = q.ms_ac, G = 0; G < D.length; G++) bn(W, D[G])
            }, ms_listener: function (Q) {
                Q.addListeners = function () {
                    for (var x = this, w = 0; w < Wq.length; w++) x["handle_" + Wq[w]] && Pm(Wq[w], x.getView(), x)
                }, Q.removeListeners = function () {
                    for (var z = this, q = 0; q < Wq.length; q++) z["handle_" + Wq[q]] && Jq(Wq[q], z.getView(), z)
                }
            }, ms_fire: function (n) {
                n.mp = function (i, F, y) {
                    this.addPropertyChangeListener(i, F, y)
                }, n.ump = function (f, B) {
                    this.removePropertyChangeListener(f, B)
                }, n.fp = function (b, i, Y, P) {
                    return this.firePropertyChange(b, i, Y, P)
                }, n.addPropertyChangeListener = function (s, W, m) {
                    var j = this;
                    j._62I || (j._62I = new Nj), j._62I.add(s, W, m)
                }, n.removePropertyChangeListener = function (c, a) {
                    this._62I && this._62I.remove(c, a)
                }, n.firePropertyChange = function (e, q, a, G) {
                    if (G) {
                        if (G(q, a)) return !1
                    } else if (q === a) return !1;
                    var f = this, D = {property: e, oldValue: q, newValue: a, source: f, data: f};
                    return f._62I && f._62I.fire(D), f.onPropertyChanged && f.onPropertyChanged(D), !0
                }
            }, ms_attr: function (_) {
                _.a = function (j, H) {
                    var U = this;
                    if (2 === arguments.length) U.setAttr(j, H); else {
                        if (!wi(j)) return U.getAttr(j);
                        for (var r in j) U.setAttr(r, j[r])
                    }
                    return U
                }, _.getAttr = function (d) {
                    return this._attrObject ? this._attrObject[d] : f
                }, _.setAttr = function (Q, p) {
                    var j = this;
                    j._attrObject || (j._attrObject = {});
                    var x = j._attrObject[Q];
                    p === f ? delete j._attrObject[Q] : j._attrObject[Q] = p, j.fp && j.fp("a:" + Q, x, p) && j.onAttrChanged && j.onAttrChanged(Q, x, p)
                }, _.getSerializableAttrs = function () {
                    var r, t = {};
                    for (r in this._attrObject) t[r] = 1;
                    return t
                }
            }, ms_bnb: function (e) {
                e.getBodyColor = function (L) {
                    return L.s("body.color")
                }, e.getBorderColor = function (i) {
                    return i.s("border.color")
                }
            }, _51o: function (y) {
                y.mi = function (i, s, w) {
                    this.addInteractorListener(i, s, w)
                }, y.umi = function (t, y) {
                    this.removeInteractorListener(t, y)
                }, y.fi = function (V) {
                    this.fireInteractorEvent(V)
                }, y.addInteractorListener = function (S, u, M) {
                    var r = this;
                    r._63I || (r._63I = new Nj), r._63I.add(S, u, M)
                }, y.removeInteractorListener = function (A, U) {
                    this._63I.remove(A, U)
                }, y.fireInteractorEvent = function (t) {
                    this._63I && this._63I.fire(t)
                }, y.setInteractors = function (R) {
                    var v = this, B = v._interactors;
                    B && B.each(function (U) {
                        U.tearDown()
                    }), od(R) && (R = new Gn(R)), v._interactors = R, R && R.each(function (o) {
                        o.setUp()
                    }), v.fp("interactors", B, R), v.invalidateSelection()
                }, y.getInteractors = function () {
                    return this._interactors
                }
            }, _49o: function (O) {
                O._44O = t, O._45O = t, O.addTopPainter = function (I) {
                    var P = this;
                    P._44O || (P._44O = new Gn), P._44O.contains(I) || (P._44O.add(I), P.redraw && P.redraw())
                }, O.removeTopPainter = function (Z) {
                    var Q = this;
                    Q._44O && (Q._44O.remove(Z), Q.redraw && Q.redraw())
                }, O.addBottomPainter = function (n) {
                    var m = this;
                    m._45O || (m._45O = new Gn), m._45O.contains(n) || (m._45O.add(n), m.redraw && m.redraw())
                }, O.removeBottomPainter = function (w) {
                    var s = this;
                    s._45O && (s._45O.remove(w), s.redraw && s.redraw())
                }, O._93db = function (b, F) {
                    var M = this;
                    M._45O && M._45O.each(function (v) {
                        v.draw ? v.draw(b, F) : v.call(M, b, F)
                    })
                }, O._92db = function (W, x) {
                    var q = this;
                    q._44O && q._44O.each(function (O) {
                        O.draw ? O.draw(W, x) : O.call(q, W, x)
                    })
                }
            }, ms_sm: function (M) {
                M.sm = function () {
                    return this.getSelectionModel()
                }, M.setSelectableFunc = function (z) {
                    this.sm().setFilterFunc(z)
                }, M.getSelectableFunc = function () {
                    return this.sm().getFilterFunc()
                }, M.getSelectionModel = function () {
                    var G = this;
                    return G._selectionModel ? G._selectionModel : G.dm().sm()
                }, M.isSelectionModelShared = function () {
                    return !this._selectionModel
                }, M.setSelectionModelShared = function (U) {
                    var T = this, I = !T._selectionModel, G = T.handleSelectionChange, H = T.dm();
                    I !== U && (T.invalidateSelection && T.invalidateSelection(), U ? (H.sm().ms(G, T), T._selectionModel.ums(G, T), T._selectionModel.dispose(), T._selectionModel = t) : (H.sm().ums(G, T), T._selectionModel = new Lp(H), T._selectionModel.ms(G, T)), T.onSelectionModelSharedChanged(), T.fp("selectionModelShared", I, U))
                }, M.onSelectionModelSharedChanged = function () {
                    var A = this;
                    A.redraw(), A.invalidateSelection && A.invalidateSelection()
                }, M.removeSelection = function () {
                    var O = this.dm(), H = O.getHistoryManager();
                    H && H.beginInteraction(), this.sm().toSelection().each(O.remove, O), H && H.endInteraction()
                }, M.selectAll = function () {
                    var h = this;
                    h.sm().ss(h.dm().toDatas(function (W) {
                        return h.isVisible(W) && h.isSelectable(W)
                    }))
                }, M.isSelected = function (b) {
                    return this.sm().co(b)
                }, M.isSelectedById = function (u) {
                    var P = this.dm().getDataById(u);
                    return P ? this.isSelected(P) : !1
                }, M.isSelectable = function (p) {
                    return this.sm().isSelectable(p)
                }
            }, ms_tx: function (i) {
                i._64I = 0, i._65O = 0, i.isScrollable = function () {
                    return this.getWidth() < this._64I
                }, i._40o = function () {
                    return this.isScrollable()
                }, i.getLogicalPoint = function (b) {
                    return Xn(b, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
                }, i.tx = function (n) {
                    return n === f ? this.getTranslateX() : (this.setTranslateX(n), void 0)
                }, i.getTranslateX = function () {
                    return this._65O
                }, i.setTranslateX = function (c) {
                    var s = this, G = s.getWidth() - s._64I;
                    G > c && (c = G), c > 0 && (c = 0), c = $(c);
                    var S = s._65O;
                    s._65O = c, s.fp(Xi, S, c)
                }
            }, ms_ty: function (J) {
                J._23Q = 0, J._66O = 0, J._41o = function () {
                    return this.getHeight() < this._23Q
                }, J.getLogicalPoint = function (n) {
                    return Xn(n, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
                }, J.ty = function (d) {
                    return d === f ? this.getTranslateY() : (this.setTranslateY(d), void 0)
                }, J.getTranslateY = function () {
                    return this._66O
                }, J.setTranslateY = function (u) {
                    var w = this, G = w.getHeight() - w._23Q;
                    G > u && (u = G), u > 0 && (u = 0), u = $(u);
                    var V = w._66O;
                    w._66O = u, w.fp(Sj, V, u)
                }
            }, ms_txy: function (S) {
                S._65O = 0, S._66O = 0, S.tx = function (E) {
                    return E === f ? this.getTranslateX() : (this.setTranslateX(E), void 0)
                }, S.ty = function (L) {
                    return L === f ? this.getTranslateY() : (this.setTranslateY(L), void 0)
                }, S.onTranslateEnded = function () {
                }, S.setTranslate = function (J, O, V) {
                    var B = this;
                    if (V = Up(V)) {
                        B._65I && B._65I.stop(!0);
                        var a = B.tx(), e = B.ty();
                        V.action = function (s) {
                            B.setTranslate(a + (J - a) * s, e + (O - e) * s)
                        }, V._37o = function () {
                            delete B._66I, delete B._65I, B.onTranslateEnded()
                        }, B._66I = 1, B._65I = gm(V)
                    } else B.tx(J), B.ty(O)
                }, S.getTranslateX = function () {
                    return this._65O
                }, S.setTranslateX = function (K) {
                    var M = this;
                    K = M.adjustTranslateX(K);
                    var G = M._65O;
                    M._65O = K, M.fp(Xi, G, K)
                }, S.getTranslateY = function () {
                    return this._66O
                }, S.setTranslateY = function (V) {
                    var j = this;
                    V = j.adjustTranslateY(V);
                    var c = j._66O;
                    j._66O = V, j.fp(Sj, c, V)
                }, S.adjustTranslateX = function (B) {
                    return $(B)
                }, S.adjustTranslateY = function (z) {
                    return $(z)
                }, S.translate = function (U, G, n) {
                    this.setTranslate(this.tx() + U, this.ty() + G, n)
                }, S.getLogicalPoint = function (T) {
                    var F = this;
                    return Xn(T, this._canvas || F._view, F.tx(), F.ty())
                }
            }, ms_dm: function (_) {
                _.dm = function (f) {
                    return f ? (this.setDataModel(f), void 0) : this.getDataModel()
                }, _.getDataModel = function () {
                    return this._dataModel
                }
            }, ms_lp: function (O) {
                O.lp = function (W) {
                    return this.getLogicalPoint(W)
                }
            }, ms_v: function ($) {
                $._disabled = !1, $.setDisabled = function (k, D) {
                    var Z = this, G = Z._disabled;
                    G !== k && (G && (An(Z._63O), delete Z._63O), k && (lm(Z._view, Z._63O = vf(D)), Z.iv()), Z._disabled = k, Z.fp("disabled", G, k))
                }, $.isDisabled = function () {
                    return this._disabled
                }, $.getView = function () {
                    return this._view
                }, $.addToDOM = function () {
                    var A = this, G = A.getView(), j = G.style;
                    F.body.appendChild(G), j.left = "0", j.right = "0", j.top = "0", j.bottom = "0", R.addEventListener("resize", function () {
                        A.iv()
                    }, !1), A.iv()
                }, $.getWidth = function () {
                    return this._view.clientWidth
                }, $.getHeight = function () {
                    return this._view.clientHeight
                }, $.setWidth = function (i) {
                    var s = this;
                    s._view.style.width = i + Pb, s.iv(), s.fp && s.fp($n, t, i)
                }, $.setHeight = function (o) {
                    var x = this;
                    x._view.style.height = o + Pb, x.iv(), x.fp && x.fp(uf, t, o)
                }, $.setFocus = function (y) {
                    var o = this, b = o._currentEditor;
                    return y && b && (b.getView && (b = b.getView()), b.contains(y.target)) ? !1 : (mb(o._view), o.endEditing && o.endEditing(), o.fireViewEvent("focus"), !0)
                }, $.iv = function (r) {
                    this.invalidate(r)
                }, $.invalidate = function (O) {
                    var D = this;
                    D._68I || (D._68I = 1, io(D.validate, D, t, O), D.onInvalidated && D.onInvalidated(), D.fireViewEvent("invalidate"))
                }, $.validate = function () {
                    var L = this, Z = L._view;
                    if (L._68I && (delete L._68I, Z.parentNode)) if (0 === Z.offsetWidth && 0 === Z.offsetHeight && L._67I !== t) L._67I === f && (L._67I = N.reinvalidateCount), L._67I > 0 ? L._67I-- : L._67I = t, L.iv(); else {
                        L.fireViewEvent("beginValidate"), L.validateImpl(), L.onValidated && L.onValidated(), L.fireViewEvent("validate");
                        var v = L._63O;
                        v && (Z.lastChild !== v && (An(v), lm(Z, v)), ef(v, 0, 0, L.getWidth(), L.getHeight())), Eh(L), fg(L)
                    }
                }, $.layout = function (w, e, D, f) {
                    1 === arguments.length ? ef(this, w) : ef(this, w, e, D, f)
                }, $.addViewListener = function (L, Y, S) {
                    var Z = this;
                    Z._67O || (Z._67O = new Nj), Z._67O.add(L, Y, S)
                }, $.removeViewListener = function (F, S) {
                    this._67O.remove(F, S)
                }, $.fireViewEvent = function (S) {
                    var i = this;
                    i._67O && (xq(S) && (S = {kind: S}), i._67O.fire(S)), N.viewListener && N.viewListener(i, S)
                }
            }, ms_tip: function (e) {
                e.setToolTipEnabled = function (P) {
                    var t = this;
                    P ? w || t._13o || (t.enableToolTip(), t.fp("toolTipEnabled", !1, !0)) : t._13o && (t.disableToolTip(), t.fp("toolTipEnabled", !0, !1))
                }, e.isToolTipEnabled = function () {
                    return !!this._13o
                }, e.enableToolTip = function () {
                    var d = this;
                    w || d._13o || (d._13o = function (Y) {
                        var x = d.getToolTip(Y);
                        x != t ? N.toolTipContinual && N.isToolTipShowing() ? Yq(Y, x) : (eo(), js = {
                            timeout: y(ye, Bq),
                            e: Y,
                            info: x
                        }) : eo()
                    }, d.getView().addEventListener(Ch, d._13o, !1), d.getView().addEventListener("mouseleave", N.hideToolTip, !1))
                }, e.disableToolTip = function () {
                    var W = this;
                    W._13o && (W.getView().removeEventListener(Ch, W._13o, !1), W.getView().removeEventListener("mouseleave", N.hideToolTip, !1), delete W._13o)
                }, e.getToolTip = function (c) {
                    var e = this;
                    if (e.getDataAt) {
                        var H = e.getDataAt(c);
                        return H ? H.getToolTip() : t
                    }
                    return e.getValue ? Zj(e.getValue()) : void 0
                }
            }, _52o: function (o) {
                o._zoom = 1, o._29I = af, o.zoomIn = function (D, x) {
                    this.setZoom(this._zoom * aq, D, x)
                }, o.zoomOut = function (I, F) {
                    this.setZoom(this._zoom / aq, I, F)
                }, o.zoomReset = function (P, a) {
                    this.setZoom(1, P, a)
                }, o.scrollZoomIn = function (I) {
                    this.setZoom(this._zoom * xj, t, I)
                }, o.scrollZoomOut = function (Z) {
                    this.setZoom(this._zoom / xj, t, Z)
                }, o.pinchZoomIn = function (D) {
                    this.setZoom(this._zoom * Ip, t, D)
                }, o.pinchZoomOut = function (y) {
                    this.setZoom(this._zoom / Ip, t, y)
                }, o.adjustZoom = function (d) {
                    return Mg > d ? Mg : d > rl ? rl : d
                }, o.getZoom = function () {
                    return this._zoom
                }, o.setZoom = function (r, G, k) {
                    var p = this;
                    if (G = Up(G)) {
                        p._14o && p._14o.stop(!0);
                        var Z = p._zoom;
                        G.action = function (G) {
                            p._96O(Z + (r - Z) * G, k)
                        }, G._37o = function () {
                            delete p._zooming, delete p._14o, p.onZoomEnded()
                        }, p._zooming = 1, p._14o = gm(G)
                    } else p._96O(r, k)
                }, o._96O = function (C, E) {
                    var P = this;
                    if (C = P.adjustZoom(C), C !== P._zoom) {
                        P.validate();
                        var r = P._29I, I = P._zoom;
                        0 !== r.width && 0 !== r.height && (E = E ? E : {
                            x: r.x + r.width / 2,
                            y: r.y + r.height / 2
                        }, P.tx((E.x - r.x) * I - E.x * C), P.ty((E.y - r.y) * I - E.y * C)), P._zoom = C, P.fp("zoom", I, C)
                    }
                }
            }
        };
        Cf(N, {
            baseZIndex: f,
            isTouchable: w,
            devicePixelRatio: R.devicePixelRatio ? R.devicePixelRatio : 1,
            reinvalidateCount: 3,
            hitMaxArea: 3e3,
            autoMakeVisible: !0,
            autoHideScrollBar: !0,
            disabledOpacity: .4,
            disabledBackground: j.disabledBackground,
            toolTipDelay: 800,
            toolTipContinual: !1,
            getDragger: function () {
                return jl
            },
            lineCap: "butt",
            lineJoin: "round",
            imageGradient: "linear.northeast",
            dashPattern: [16, 16],
            animDuration: 200,
            animEasing: function (R) {
                return R * R
            },
            labelColor: mi,
            labelSelectColor: md,
            labelFont: (w ? "15" : "12") + "px arial, sans-serif",
            widgetIndent: w ? 30 : 20,
            widgetRowHeight: w ? 30 : 20,
            widgetHeaderHeight: w ? 32 : 22,
            widgetTitleHeight: w ? 34 : 24,
            scrollBarColor: ug,
            scrollBarSize: 7,
            scrollBarTimeout: 1e3,
            scrollBarMinLength: 20,
            scrollBarInteractiveSize: w ? 32 : 16,
            zoomIncrement: 1.3,
            scrollZoomIncrement: 1.05,
            pinchZoomIncrement: 1.08,
            zoomMax: 20,
            zoomMin: .01,
            segmentResolution: 12,
            shapeResolution: 24,
            shapeSide: 24,
            intersectionLineRect: qg,
            intersectionLineLine: tn,
            isEnter: mn,
            isEsc: Ij,
            isDelete: Xk,
            isSpace: Jg,
            isLeft: yf,
            isUp: Jb,
            isRight: ck,
            isDown: Hd,
            getTarget: Dg,
            isString: xq,
            isNumber: cb,
            isBoolean: To,
            isArray: od,
            isSelectAll: Zb,
            isFunction: qd,
            getVersion: function () {
                return "6.0.4"
            },
            setCompType: function (F, G) {
                qd(G) || wi(G) ? fe[F] = G : yg(F)
            },
            getCompType: function (H) {
                return fe[H]
            },
            getCompTypeMap: function () {
                return fe
            },
            drawCompType: function (B, i, T, H, Q, y) {
                B(i, T, H, Q, y)
            },
            numberListener: function () {
                var F = {46: 1, 8: 1, 9: 1, 27: 1, 13: 1, 109: 1, 110: 1, 189: 1, 190: 1};
                return function ($) {
                    var J = $.keyCode;
                    F[J] || 65 === J && N.isCtrlDown($) || J >= 35 && 39 >= J || ($.shiftKey || 48 > J || J > 57) && (96 > J || J > 105) && $.preventDefault()
                }
            }(),
            ignoreKeyCodes: [122, 123],
            preventDefault: function (S) {
                var Y = S.target.tagName;
                ("DIV" === Y || "CANVAS" === Y) && !(N.ignoreKeyCodes.indexOf(S.keyCode) >= 0) && ("keydown" !== S.type || yf(S) || ck(S) || Jb(S) || Hd(S) || Xk(S) || 65 === S.keyCode && (S.metaKey || S.ctrlKey)) && (S.preventDefault(), S.preventManipulation && S.preventManipulation())
            },
            getWindowInfo: function () {
                var y = F.documentElement, t = y && (y.scrollLeft || y.scrollTop) ? y : F.body;
                return {
                    target: t,
                    left: t.scrollLeft,
                    top: t.scrollTop,
                    width: R.innerWidth || t.clientWidth,
                    height: R.innerHeight || t.clientHeight
                }
            },
            isDragging: function () {
                return !!jl
            },
            isLeftButton: function (C) {
                return w ? !0 : 0 === C.button
            },
            isInput: function (E) {
                if (!E) return !1;
                var _ = E.tagName;
                return "INPUT" === _ || "TEXTAREA" === _ || "SELECT" === _
            },
            getTouchCount: function ($) {
                return w ? $.touches.length : 1
            },
            isDoubleClick: function () {
                var K = {};
                return Ae = new Date, We = Ae.getTime(), function (t) {
                    var $ = (new Date).getTime(), s = t.type, a = s + "_isDoubleClick", k = K[s];
                    if (k || (k = K[s] = {details: 0, timeout: null, lastPoint: null, lastTime: $}), t[a] === f) {
                        var d = Ql(t);
                        t[a] = k.lastPoint && Lb(k.lastPoint, d) < 20 && $ - k.lastTime < 500, k.lastTime = $, k.lastPoint = d, k.details++, k.timeout && (J(k.timeout), k.timeout = null), k.timeout = y(function () {
                            this.details = 0, this.timeout = null, this.lastPoint = null
                        }.bind(k), 500)
                    }
                    return !!t[a] && 2 === k.details
                }
            }(),
            isShiftDown: function (N) {
                return N ? N.shiftKey : Zn["16"]
            },
            isCtrlDown: function (Q) {
                return Q ? a ? Q.metaKey : Q.ctrlKey : a ? Zn["91"] : Zn["17"]
            },
            getClientPoint: function (o) {
                return w && (o = Gl(o)), {x: o.clientX, y: o.clientY}
            },
            isMouseEvent: function (y) {
                return y instanceof MouseEvent || 0 === y.type.indexOf("mouse")
            },
            getTargetElement: function (W) {
                if (N.isMouseEvent(W) || !F.elementFromPoint) return W.target;
                var J = xm(W);
                return F.elementFromPoint(J.x, J.y)
            },
            getPagePoint: function (C) {
                return w && (C = Gl(C)), {x: C.pageX, y: C.pageY}
            },
            createObject: function (c, j) {
                var I = new c;
                for (var d in j) {
                    var o = Vj(d), C = j[d];
                    I[o] ? (I[o](C), "setToolTip" === o && I.enableToolTip && I.enableToolTip()) : I[d] = C
                }
                return I
            },
            setImage: function (r, n, I, u) {
                var P = arguments.length;
                4 === P ? ys(r, u, n, I) : 2 === P ? xq(n) ? ys(r, n) : $i[r] = n : 1 === P && ys(r, r)
            },
            getImage: function (X, z) {
                var l;
                if (X == t) return t;
                if (wi(X) ? l = X : (l = $i[X], X && l === f && (Rd && Rd[X] || ys(X, X))), z && l && l.tagName) {
                    l.colors || (l.colors = {});
                    var Q = l.colors[z];
                    return Q || (Q = nd(l, Kf(z), l.width, l.height), l.colors[z] = Q), Q
                }
                return l
            },
            getId: function () {
                var Y = 1;
                return function () {
                    return ++Y
                }
            }(),
            callLater: function (X, L, Y, x) {
                var i = function () {
                    X.apply(L, Y)
                };
                return x ? y(i, x) : R.requestAnimationFrame(i)
            },
            asyncEach: function (b, d, W) {
                "function" != typeof W && (W = Function.prototype);
                var i = new Array(b.length), f = 0, m = !1;
                b.forEach(function (P, y) {
                    d(P, function (Y, c) {
                        return m ? void 0 : Y ? (m = !0, W(null)) : (i[y] = c, f++, f === b.length ? W(i) : void 0)
                    })
                })
            },
            xhrLoad: function (p, X, F) {
                var B = !1;
                od(p) || (B = !0, p = [p]), p.length;
                var Q = F && F.sync;
                Or(p, function (n, Z) {
                    var q = new XMLHttpRequest;
                    q.overrideMimeType("text/plain"), N.convertURL && (n = N.convertURL(n)), n.data ? Z(null, n.data) : (q.open("GET", encodeURI(n), !Q), q.onload = function (N) {
                        200 === this.status || 0 === this.status ? Z(null, N.target.response) : Z(!0)
                    }, q.onerror = function () {
                        Z(!0)
                    }, q.send(null))
                }, function (Q) {
                    "function" == typeof X && X(B && Q ? Q[0] : Q)
                })
            },
            clone: function (P) {
                if (!P) return t;
                if (od(P)) return P.slice(0);
                if (Qe(P)) return new Gn(P);
                if (wi(P)) {
                    var F, l = {};
                    for (F in P) l[F] = P[F];
                    return l
                }
                return P
            },
            handleCompTypeLoaded: function () {
            },
            handleImageLoaded: function () {
            },
            handleUnfoundImage: function () {
            },
            sortFunc: function (u, L) {
                if (u === L) return 0;
                if (u == t && L != t) return 1;
                if (u != t && L == t) return -1;
                if (u == t && L == t) return 0;
                var H, i = typeof u, k = typeof L;
                return i === In && k === In ? H = u.localeCompare(L) : i === Me && k === Me && (H = u - L), H === f && (H = ("" + u).localeCompare("" + L)), H > 0 ? 1 : 0 > H ? -1 : 0
            },
            getClassMap: function () {
                return Qc
            },
            getClass: function (X) {
                if (xq(X)) {
                    var x, e = Qc[X];
                    if (!e) {
                        x = X.split("."), e = R;
                        for (var C = 0; C < x.length; C++) e = e[x[C]];
                        Qc[X] = e
                    }
                    return e
                }
                return X
            },
            def: function (P, Y, _) {
                var Q, t, T, F = function () {
                };
                if (F.prototype = Y.prototype, Q = new F, xq(P)) {
                    if (Qc[P]) throw"'" + P + "' already defined";
                    T = Ag(P), Q.getClassName = function () {
                        return P
                    }
                } else T = P;
                if (Q.constructor = T, Q.getClass = function () {
                    return T
                }, Q.getSuperClass = function () {
                    return Y
                }, _) for (t in _) eb[t] && eb.hasOwnProperty(t) ? eb[t](Q, _) : Jn(Q, _, t);
                T.prototype = Q, T.superClass = Y.prototype
            },
            startAnim: function () {
                var K = function (p) {
                    p.duration && (p.startTime = Im()), p.timeId = io(p.tick, t, t, p.interval)
                };
                return function (L) {
                    return L = us(L), L.easing = L.easing || N.animEasing, L.duration || L.frames || (L.duration = N.animDuration), L.t = 0, L.duration ? L.interval = 0 : (L.frame = 0, L.interval = L.interval || 10), L.tick = function () {
                        if (L.duration) {
                            var h = (Im() - L.startTime) / L.duration;
                            h > 1 && (h = 1), L.t = h, L.action(L.easing(h), h), 1 === h ? L.stop() : L._isPaused || (L.timeId = io(L.tick))
                        } else L.frame++, h = L.t = L.frame / L.frames, L.action(L.easing(h), h), L.frame < L.frames ? L._isPaused || (L.timeId = io(L.tick, t, t, L.interval)) : L.stop()
                    }, L.resume = function () {
                        L._isPaused && (delete L._isPaused, L.duration ? L.t < 1 && (L.startTime = Im() - L.duration * L.t, L.timeId = io(L.tick)) : L.frame < L.frames && (L.timeId = io(L.tick, t, t, L.interval)))
                    }, L.pause = function () {
                        L._isPaused = !0
                    }, L.stop = function (N) {
                        L.isRunning() && (L.duration ? L.t < 1 && N && (L.t = 1, L.action(L.easing(1))) : L.frame < L.frames && N && (L.frame = L.frames, L.action(L.easing(1))), L._37o && L._37o(), L.finishFunc && L.finishFunc(), Yb(L.timeId, !L.duration), delete L.timeId)
                    }, L.isRunning = function () {
                        return L.timeId != t
                    }, L.delay ? io(K, t, [L], L.delay) : K(L), L
                }
            }(),
            getTextSize: function () {
                var S = {}, N = F ? ns().getContext("2d") : t;
                return function (o, K) {
                    N.font = o ? o : ah;
                    var C = S[N.font];
                    return C || (C = 2 * N.measureText("e").width + 4, S[N.font] = C), {
                        width: N.measureText(K).width + 4,
                        height: C
                    }
                }
            }(),
            drawText: function (z, $, c, Q, N, V, f, x, C, U) {
                if ($ != t) {
                    var _ = Mr(c, $), i = {};
                    i.y = U && U !== hh ? U === jh ? V + _.height / 2 : V + x - _.height / 2 : V + x / 2, i.x = C && C !== ur ? C === Rl ? N + f - _.width / 2 : N + f / 2 : N + _.width / 2, fk(z, $, i, c, Q)
                }
            },
            getDistance: function (U, h) {
                var A = U.length;
                return h ? 3 === A ? g(S(U[0] - h[0]) + S(U[1] - h[1]) + S(U[2] - h[2])) : 2 === A ? g(S(U[0] - h[0]) + S(U[1] - h[1])) : U.z === f ? g(S(h.x - U.x) + S(h.y - U.y)) : g(S(h.x - U.x) + S(h.y - U.y) + S(h.z - U.z)) : 3 === A ? g(S(U[0]) + S(U[1]) + S(U[2])) : 2 === A ? g(S(U[0]) + S(U[1])) : void 0
            },
            brighter: function (n, D) {
                return 0 > D && (D = -D), wl(n, D ? D : 40)
            },
            darker: function (z, U) {
                return U > 0 && (U = -U), wl(z, U ? U : -40)
            },
            unionPoint: function (h, y) {
                if (!h) return t;
                if (2 === arguments.length) return h && y ? {
                    x: _(h.x, y.x),
                    y: _(h.y, y.y),
                    width: G(h.x - y.x),
                    height: G(h.y - y.y)
                } : t;
                var A = h;
                if (A._as && (A = A._as), A.length === f) return t;
                var E = A.length;
                if (0 >= E) return t;
                for (var W = 1, g = A[0], Q = {x: g.x, y: g.y, width: 0, height: 0}; E > W; W++) {
                    g = A[W];
                    var d = _(Q.x, g.x), q = K(Q.x + Q.width, g.x), $ = _(Q.y, g.y), a = K(Q.y + Q.height, g.y);
                    Q.x = d, Q.y = $, Q.width = q - d, Q.height = a - $
                }
                return Q
            },
            unionRect: function (Q, k) {
                if (Q && !k) return us(Q);
                if (!Q && k) return us(k);
                if (Q && k) {
                    var N = {x: _(Q.x, k.x), y: _(Q.y, k.y)};
                    return N.width = K(Q.x + Q.width, k.x + k.width) - N.x, N.height = K(Q.y + Q.height, k.y + k.height) - N.y, N
                }
                return t
            },
            containsPoint: function (l, A) {
                return !(!l || A.x < l.x || A.y < l.y || A.x > l.x + l.width || A.y > l.y + l.height)
            },
            containsRect: function ($, W) {
                if (!$ || !W) return !1;
                var O = W.x, f = W.y, Q = W.width, L = W.height, u = $.width, s = $.height;
                if (0 > (u | s | Q | L)) return !1;
                var l = $.x, G = $.y;
                if (l > O || G > f) return !1;
                if (u += l, Q += O, O >= Q) {
                    if (u >= l || Q > u) return !1
                } else if (u >= l && Q > u) return !1;
                if (s += G, L += f, f >= L) {
                    if (s >= G || L > s) return !1
                } else if (s >= G && L > s) return !1;
                return !0
            },
            intersectsRect: function (g, $) {
                if (!g || !$) return !1;
                var E = $.width, Q = $.height, Z = g.width, H = g.height;
                if (0 >= Z || 0 >= H || 0 >= E || 0 >= Q) return !1;
                var s = $.x, t = $.y, n = g.x, L = g.y;
                return Z += n, H += L, E += s, Q += t, Z > s && H > t && E > n && Q > L
            },
            intersection: function (H, n) {
                if (!H || !n) return t;
                var m = n.x, $ = n.y, G = H.x, Y = H.y, A = m, S = $, _ = G, p = Y;
                return A += n.width, S += n.height, _ += H.width, p += H.height, G > m && (m = G), Y > $ && ($ = Y), A > _ && (A = _), S > p && (S = p), A -= m, S -= $, 0 >= A || 0 >= S ? t : {
                    x: m,
                    y: $,
                    width: A,
                    height: S
                }
            },
            grow: function (O, K) {
                O.x -= K, O.y -= K, O.width = O.width + 2 * K, O.height = O.height + 2 * K
            },
            getLogicalPoint: function (i, o, m, j, E, v) {
                var p = o.getBoundingClientRect();
                return i = w ? Gl(i) : i, {
                    x: (i.clientX - p.left + o.scrollLeft - (m || 0)) / (E || 1),
                    y: (i.clientY - p.top + o.scrollTop - (j || 0)) / (v || 1)
                }
            },
            removeHTML: function () {
                var K;
                return function (k) {
                    return k && k.parentNode ? K === k ? !0 : (K = k, k.parentNode.removeChild(k), K = t, !0) : !1
                }
            }(),
            getToolTipDiv: function () {
                if (!jd) {
                    jd = Ac(), ch = Ac();
                    var x = jd.style;
                    N.baseZIndex != t && (x.zIndex = M(N.baseZIndex) + 3 + ""), x.whiteSpace = "nowrap", x.color = N.toolTipLabelColor, x.background = N.toolTipBackground, x.font = N.toolTipLabelFont, x.padding = "5px", x.boxShadow = "0px 0px 3px " + N.toolTipShadowColor
                }
                return jd
            },
            isToolTipShowing: function () {
                return jd && jd.parentNode ? !0 : ch && ch.parentNode ? !0 : !1
            },
            hideToolTip: function () {
                An(jd), An(ch), fo()
            },
            showToolTip: function (r, f) {
                if (!r || f == t) return eo(), void 0;
                N.getToolTipDiv();
                var p, I;
                if (f.html ? (f = f.html, p = ch, An(jd)) : (p = jd, An(ch)), I = p.style, p.innerHTML = f, p.parentNode || lm(F.body, p), r.target) {
                    r = xm(r);
                    var D = Mq(), g = r.x, A = r.y, l = w ? 60 : 12;
                    if (w) {
                        var H = p.getBoundingClientRect();
                        I.left = g - H.width / 2 + Pb, I.top = A - H.height - l < D.top ? A + l + Pb : A - H.height - l + Pb
                    } else {
                        I.left = g + l + Pb, I.top = A + l + Pb;
                        var H = p.getBoundingClientRect();
                        H.left + H.width > D.width && (I.left = g - l - H.width + Pb), H.top + H.height > D.height && (I.top = A - l - H.height + Pb), H.left < 0 && (I.left = g + l + Pb), H.top < 0 && (I.top = A + l + Pb)
                    }
                } else I.left = r.x + Pb, I.top = r.y + Pb;
                fo()
            },
            startDragging: function (Z, t) {
                Z !== jl && (jl ? w ? jl.handleWindowTouchEnd(t) : jl.handleWindowMouseUp(t) : w ? (R.addEventListener(tc, xn, !1), R.addEventListener(Cl, yl, !1)) : (R.addEventListener(Ch, gg, !1), R.addEventListener(_l, tr, !1)), jl = Z)
            },
            getImageMap: function () {
                return $i
            },
            toBoundaries: function (Z, u, t, R) {
                var e = [];
                return ms(Z, u, t, R).forEach(function (X) {
                    var M = [];
                    X.forEach(function (h) {
                        M.push(h.x, h.y)
                    }), e.push(M)
                }), e
            },
            getCurrentKeyCodeMap: function () {
                return Zn
            },
            drawCenterImage: function (J, O, n, Z, D, B, F) {
                var L = ko(O, D, B), i = Rh(O, D, B);
                _j(J, O, $(n - L / 2), $(Z - i / 2), L, i, D, B, F)
            },
            drawStretchImage: function (j, h, Z, L, k, m, F, l, V, T, b) {
                var v, I = ko(h, l, V, m), R = Rh(h, l, V, F);
                if ("uniform" === Z ? (v = _(m / I, F / R), I *= v, R *= v, L += $((m - I) / 2), k += $((F - R) / 2), m = I, F = R) : "centerUniform" === Z && ((I > m || R > F) && (v = _(m / I, F / R), I *= v, R *= v), L += $((m - I) / 2), k += $((F - R) / 2), m = I, F = R), "center" === Z) {
                    var B = b !== !1 && (I > m || R > F);
                    B && (j.save(), j.beginPath(), j.rect(L, k, m, F), j.clip()), _j(j, h, L + m / 2 - I / 2, k + F / 2 - R / 2, I, R, l, V, T), B && j.restore()
                } else _j(j, h, L, k, m, F, l, V, T)
            },
            toCanvas: function (s, T, f, j, O, K, B, n) {
                s = nj(s, B), T = T || ko(s, O), f = f || Rh(s, O);
                var N = ns(), o = Oo(N);
                return n ? (ed(N, T, f, n), o.scale(n, n)) : ed(N, T, f, 1), Gi(o, s, j, 0, 0, T, f, O, K, B), o.restore(), N
            },
            createElement: function (v, q, u, e) {
                var W = F.createElement(v);
                return dr(W, q || j.widgetBorder, 2), W.style.font = u ? u : ah, e != t && (W.value = e), N.onElementCreated && N.onElementCreated(W), W
            },
            containedInView: function (J, Q) {
                var F = Bd(Q).getBoundingClientRect();
                return Nf({x: F.left, y: F.top, width: F.width, height: F.height}, Ql(J))
            },
            isIsolating: function () {
                return Tn
            },
            setIsolating: function (W) {
                Tn = W
            },
            getMSMap: function () {
                return eb
            },
            stringify: function (R, f) {
                var r = Date.prototype.toJSON;
                Date.prototype.toJSON = function () {
                    return "__ht__date" + this.getTime()
                };
                var d = JSON.stringify(R, function (w, K) {
                    return "function" == typeof K ? "__ht__" + (K.__ht__ || K.toString()) : K
                }, f == t ? 2 : f);
                return Date.prototype.toJSON = r, d
            },
            parse: function (V) {
                return xq(V) ? JSON.parse(V, function (_, S) {
                    if (xq(S)) {
                        if ("__ht__function" == S.substr(0, 14)) {
                            var O = S.indexOf("{") + 1, i = S.lastIndexOf("}"), d = S.indexOf("(") + 1,
                                J = S.indexOf(")");
                            if (O && i && d && J) {
                                var X = new Function(S.substring(d, J), S.substring(O, i));
                                return X.__ht__ = S.substr(6), X
                            }
                        }
                        if ("__ht__date" == S.substr(0, 10)) return new Date(M(S.substr(10)))
                    }
                    return S
                }) : V
            },
            loadJS: function (V, L) {
                L && V.push(L);
                var D = V.shift();
                if (od(D)) V = D.contact(V), N.loadJS(V); else if (qd(D)) D(), N.loadJS(V); else if (xq(D)) {
                    var $ = F.createElement("script");
                    $.onload = function () {
                        N.loadJS(V)
                    }, $.setAttribute("src", D), F.getElementsByTagName("head")[0].appendChild($)
                } else V.length && N.loadJS(V)
            },
            toColorData: Ep,
            setCanvas: ed,
            createDiv: Ac,
            createDisabledDiv: vf,
            createView: Qj,
            createCanvas: ns,
            appendChild: lm,
            initContext: Oo,
            checkLoadingImage: Eh,
            translateAndScale: Vb,
            layout: ef,
            getPosition: Ym,
            drawPoints: im,
            drawRoundRect: ue,
            drawBorder: Tc,
            setFocus: mb,
            getter: vp,
            setter: Vj,
            isEmptyObject: kk
        }, !0), Cf(A, {
            autoAdjustIndex: 1,
            hierarchicalRendering: 1,
            adjustChildrenToTop: 1,
            autoHideScrollBar: 1,
            autoUpdate: 1,
            firstPersonMode: 1,
            ortho: 1,
            strict: 1,
            stickToRight: 1,
            instant: 1,
            closePath: 1,
            hierarchical: 1,
            doubleClickToToggle: 1,
            continuousLayout: !0
        }, !0);
        var yc = N.disabledOpacity, Bq = N.toolTipDelay, hn = N.devicePixelRatio, Sg = N.autoMakeVisible,
            jq = N.autoHideScrollBar, Pg = N.imageGradient, Yq = N.showToolTip, eo = N.hideToolTip, Bb = N.dashPattern,
            Yf = N.lineCap, ss = N.lineJoin, an = N.labelColor, jm = N.labelSelectColor, ah = N.labelFont,
            Gg = N.widgetIndent, sq = N.widgetRowHeight, ir = N.widgetHeaderHeight, zr = N.widgetTitleHeight,
            kb = N.scrollBarColor, yk = N.scrollBarSize, bd = N.scrollBarTimeout, Dq = N.scrollBarMinLength,
            ff = N.scrollBarInteractiveSize, aq = N.zoomIncrement, xj = N.scrollZoomIncrement,
            Ip = N.pinchZoomIncrement, rl = N.zoomMax, Mg = N.zoomMin, bk = N.createObject, Mh = N.preventDefault,
            xe = N.setImage, nj = N.getImage, pm = N.drawCenterImage, Gi = N.drawStretchImage, rr = N.getId,
            io = N.callLater, Or = N.asyncEach, oq = (N.xhrLoad, N.sortFunc), us = N.clone, Ag = N.getClass,
            gm = N.startAnim, cp = N.brighter, ph = N.darker, dg = N.drawText, Mr = N.getTextSize, Kr = N.isLeftButton,
            zs = N.getTouchCount, tf = N.isDoubleClick, es = N.isShiftDown, zp = N.isCtrlDown, Ql = N.getClientPoint,
            xm = N.getPagePoint, Lb = N.getDistance, Cc = N.unionPoint, nf = N.unionRect, Nf = N.containsPoint,
            _m = N.containsRect, fn = N.intersectsRect, Oe = N.intersection, Mq = N.getWindowInfo, pk = N.grow,
            Xn = N.getLogicalPoint, ls = N.startDragging, An = N.removeHTML, Ef = N.createElement,
            hq = N.segmentResolution, ae = N.shapeResolution, ij = N.shapeSide, zb = N.def, ps = function (a, V, p) {
                zb(e + "." + a, V, p)
            }, Hr = function (H, Q) {
                H.childNodes.forEach(function (G) {
                    Q(G), Hr(G, Q)
                })
            };
        Cf(N, {
            toolTipLabelColor: an,
            toolTipLabelFont: ah,
            toolTipBackground: j.toolTipBackground,
            toolTipShadowColor: ug,
            setDevicePixelRatio: function (s) {
                hn = N.devicePixelRatio = "number" == typeof s ? s : R.devicePixelRatio, Hr(F.body, function (S) {
                    var M = S._ht;
                    M && M._canvas && (ed(M._canvas, M.getWidth(), M.getHeight()), M.redraw ? M.redraw() : M.iv())
                })
            }
        }, !0);
        var Ej = 1e-6, Pd = "undefined" != typeof Uint16Array ? Uint16Array : Array,
            me = "undefined" != typeof Float32Array ? Float32Array : Array, Uk = function (G, A, H) {
                var e = [G[0] - A[0], G[1] - A[1], G[2] - A[2]];
                if (H) {
                    var I = Lb(e);
                    I > 0 && (e[0] /= I, e[1] /= I, e[2] /= I)
                }
                return e
            }, Qn = function (v) {
                return [-v[0], -v[1], -v[2]]
            }, ek = function (h, u) {
                return 3 === h.length ? h[0] * u[0] + h[1] * u[1] + h[2] * u[2] : h[0] * u[0] + h[1] * u[1]
            }, Tq = function () {
                var q = new me(16);
                return q[0] = 1, q[1] = 0, q[2] = 0, q[3] = 0, q[4] = 0, q[5] = 1, q[6] = 0, q[7] = 0, q[8] = 0, q[9] = 0, q[10] = 1, q[11] = 0, q[12] = 0, q[13] = 0, q[14] = 0, q[15] = 1, q
            }, Fi = Tq(), zn = function (r) {
                var s = new me(16);
                return s[0] = r[0], s[1] = r[1], s[2] = r[2], s[3] = r[3], s[4] = r[4], s[5] = r[5], s[6] = r[6], s[7] = r[7], s[8] = r[8], s[9] = r[9], s[10] = r[10], s[11] = r[11], s[12] = r[12], s[13] = r[13], s[14] = r[14], s[15] = r[15], s
            }, Zc = function (D, I) {
                return D[0] = I[0], D[1] = I[1], D[2] = I[2], D[3] = I[3], D[4] = I[4], D[5] = I[5], D[6] = I[6], D[7] = I[7], D[8] = I[8], D[9] = I[9], D[10] = I[10], D[11] = I[11], D[12] = I[12], D[13] = I[13], D[14] = I[14], D[15] = I[15], D
            }, ar = function (q) {
                return q[0] = 1, q[1] = 0, q[2] = 0, q[3] = 0, q[4] = 0, q[5] = 1, q[6] = 0, q[7] = 0, q[8] = 0, q[9] = 0, q[10] = 1, q[11] = 0, q[12] = 0, q[13] = 0, q[14] = 0, q[15] = 1, q
            }, hd = function (u, I) {
                var w = u[0], J = u[1], K = u[2];
                return u[0] = I[0] * w + I[4] * J + I[8] * K + I[12], u[1] = I[1] * w + I[5] * J + I[9] * K + I[13], u[2] = I[2] * w + I[6] * J + I[10] * K + I[14], u
            }, lb = function (p, C) {
                var c = p[0], J = p[1], h = p[2], y = p[3];
                return p[0] = C[0] * c + C[4] * J + C[8] * h + C[12] * y, p[1] = C[1] * c + C[5] * J + C[9] * h + C[13] * y, p[2] = C[2] * c + C[6] * J + C[10] * h + C[14] * y, p[3] = C[3] * c + C[7] * J + C[11] * h + C[15] * y, p
            }, Ze = function () {
                var j, i, M, k, G = Wm(Ik[1] + Ik[7]), d = Wm(Ik[0] + Ik[3] - Ik[10]), E = Wm(Ik[8] + 2), X = function () {
                    return i = M.charAt(j), j += 1, i
                }, W = function () {
                    var w = "";
                    if (i === E) for (; X();) {
                        if (i === E) return X(), w;
                        w += i
                    } else X()
                }, $ = function () {
                    for (; i && " " >= i;) X()
                }, n = function () {
                    var D, P = {};
                    if (i === G) {
                        if (X(), $(), i === d) return X(), P;
                        for (; i;) {
                            if (D = W(), $(), X(), P[D] = k(), $(), i === d) return X(), P;
                            X(), $()
                        }
                    }
                };
                return k = function () {
                    switch ($(), i) {
                        case G:
                            return n();
                        default:
                            return W()
                    }
                }, function (D) {
                    if (Y = {}, D) {
                        var c;
                        if (M = D, j = 0, i = " ", c = k(), $(), !i) return c
                    }
                }
            }(), Rp = function (X, K) {
                if (K) {
                    var t = H(K), a = m(K), g = X[4], n = X[5], x = X[6], $ = X[7], A = X[8], Z = X[9], z = X[10],
                        v = X[11];
                    X[4] = g * a + A * t, X[5] = n * a + Z * t, X[6] = x * a + z * t, X[7] = $ * a + v * t, X[8] = A * a - g * t, X[9] = Z * a - n * t, X[10] = z * a - x * t, X[11] = v * a - $ * t
                }
            }, vg = function (q, x) {
                if (x) {
                    var a = H(x), A = m(x), B = q[0], i = q[1], S = q[2], k = q[3], F = q[8], L = q[9], O = q[10],
                        $ = q[11];
                    q[0] = B * A - F * a, q[1] = i * A - L * a, q[2] = S * A - O * a, q[3] = k * A - $ * a, q[8] = B * a + F * A, q[9] = i * a + L * A, q[10] = S * a + O * A, q[11] = k * a + $ * A
                }
            }, Zd = function (s, j) {
                if (j) {
                    var k = H(j), d = m(j), l = s[0], S = s[1], K = s[2], u = s[3], $ = s[4], g = s[5], o = s[6], f = s[7];
                    s[0] = l * d + $ * k, s[1] = S * d + g * k, s[2] = K * d + o * k, s[3] = u * d + f * k, s[4] = $ * d - l * k, s[5] = g * d - S * k, s[6] = o * d - K * k, s[7] = f * d - u * k
                }
            }, Ko = function (a, s, w) {
                return As(t, w === !1 ? t : a.s3(), a.r3(), a.getRotationMode(), a.p3(), t, s)
            }, As = function (m, c, F, G, o, s, P) {
                return s || (s = Tq()), o && Ee(s, o), Sp(s, F, G), P && Dd(s, s, P), c && Nc(s, c), m && Dd(s, s, m), s
            }, _n = function (q, A, B) {
                A = M(A), B = M(B);
                var d = this;
                d.g = q, d._84O = A, d._85O = B, d._70I = !0, d.F = 0, d._83O = A + B, d.pen = {x: 0, y: 0}
            }, re = "lineDashOffset", Ub = "setLineDash", Je = function (b) {
                for (var M in b) 1 === M.length && (re = b[M]);
                return M ? 1 : 0
            }, ab = function (C, q, b) {
                return ve(q) ? C : C[Ub] ? (C[Ub](q), b && (C.lineDashOffset = b), C) : new _n(C, q[0], q.length > 1 ? q[1] : q[0])
            }, Jk = function (v, b) {
                !ve(b) && v[Ub] && (v[Ub](Np), v.lineDashOffset = 0)
            };
        if (zb(_n, z, {
            _69I: 6, moveTo: function (g, Z) {
                var E = this, z = E.pen;
                z.x = g, z.y = Z, E.g.moveTo(g, Z), E.start || (E.start = {x: g, y: Z})
            }, lineTo: function (A, h) {
                var B = this, P = B.pen, Q = A - P.x, F = h - P.y, d = o(F, Q), l = m(d), X = H(d),
                    c = B._23O(P.x, P.y, A, h), e = B._85O, k = B._84O, i = B._83O;
                if (B.F) {
                    if (B.F > c) return B._70I ? B._72I(A, h) : B.moveTo(A, h), B.F -= c, void 0;
                    if (B._70I ? B._72I(P.x + l * B.F, P.y + X * B.F) : B.moveTo(P.x + l * B.F, P.y + X * B.F), c -= B.F, B.F = 0, B._70I = !B._70I, !c) return
                }
                var $ = I(c / i);
                if ($) {
                    for (var q = l * k, p = X * k, b = l * e, j = X * e, y = 0; $ > y; y++) B._70I ? (B._72I(P.x + q, P.y + p), B.moveTo(P.x + b, P.y + j)) : (B.moveTo(P.x + b, P.y + j), B._72I(P.x + q, P.y + p));
                    c -= i * $
                }
                B._70I ? c > k ? (B._72I(P.x + l * k, P.y + X * k), B.moveTo(A, h), B.F = e - (c - k), B._70I = !1) : (B._72I(A, h), c === k ? (B.F = 0, B._70I = !B._70I) : (B.F = k - c, B.moveTo(A, h))) : c > e ? (B.moveTo(P.x + l * e, P.y + X * e), B._72I(A, h), B.F = k - (c - e), B._70I = !0) : (B.moveTo(A, h), c === e ? (B.F = 0, B._70I = !B._70I) : B.F = e - c)
            }, quadraticCurveTo: function ($, d, s, B) {
                var m, R = this, n = R.pen, F = n.x, x = n.y, p = R._22O(F, x, $, d, s, B), X = 0, u = 0, E = R._85O,
                    t = R._84O;
                if (R.F) {
                    if (R.F > p) return R._70I ? R._71I($, d, s, B) : R.moveTo(s, B), R.F -= p, void 0;
                    if (X = R.F / p, m = R._20O(F, x, $, d, s, B, X), R._70I ? R._71I(m[2], m[3], m[4], m[5]) : R.moveTo(m[4], m[5]), R.F = 0, R._70I = !R._70I, !p) return
                }
                var l = p - p * X, i = I(l / R._83O), z = t / p, C = E / p;
                if (i) for (var e = 0; i > e; e++) R._70I ? (u = X + z, m = R._21O(F, x, $, d, s, B, X, u), R._71I(m[2], m[3], m[4], m[5]), X = u, u = X + C, m = R._21O(F, x, $, d, s, B, X, u), R.moveTo(m[4], m[5])) : (u = X + C, m = R._21O(F, x, $, d, s, B, X, u), R.moveTo(m[4], m[5]), X = u, u = X + z, m = R._21O(F, x, $, d, s, B, X, u), R._71I(m[2], m[3], m[4], m[5])), X = u;
                l = p - p * X, R._70I ? l > t ? (u = X + z, m = R._21O(F, x, $, d, s, B, X, u), R._71I(m[2], m[3], m[4], m[5]), R.moveTo(s, B), R.F = E - (l - t), R._70I = !1) : (m = R._19O(F, x, $, d, s, B, X), R._71I(m[2], m[3], m[4], m[5]), p === t ? (R.F = 0, R._70I = !R._70I) : (R.F = t - l, R.moveTo(s, B))) : l > E ? (u = X + C, m = R._21O(F, x, $, d, s, B, X, u), R.moveTo(m[4], m[5]), m = R._19O(F, x, $, d, s, B, u), R._71I(m[2], m[3], m[4], m[5]), R.F = t - (l - E), R._70I = !0) : (R.moveTo(s, B), l === E ? (R.F = 0, R._70I = !R._70I) : R.F = E - l)
            }, bezierCurveTo: function () {
                var i = arguments;
                this.pen = {x: i[4], y: i[5]}, this.g.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
            }, arc: function (t, O, H, S, q, U) {
                U || (S = -S, q = -q), lg(this, t, O, S, q - S, H, H, !1)
            }, rect: function (x, D, s, N) {
                var w = this;
                w.pen = {
                    x: x,
                    y: D
                }, w.moveTo(x, D), w.lineTo(x, D + N), w.lineTo(x + s, D + N), w.lineTo(x + s, D), w.lineTo(x, D)
            }, beginPath: function () {
                this.g.beginPath()
            }, closePath: function () {
                this.lineTo(this.start.x, this.start.y)
            }, _23O: function (l, w, b, C) {
                var d = b - l, K = C - w;
                return g(d * d + K * K)
            }, _22O: function ($, p, P, k, J, z, F) {
                for (var I, D, C, Z, f, u, Y, g = 0, s = $, H = p, V = F > 0 ? F : this._69I, U = 1; V >= U; U++) C = U / V, Z = 1 - C, f = Z * Z, u = 2 * C * Z, Y = C * C, I = f * $ + u * P + Y * J, D = f * p + u * k + Y * z, g += this._23O(s, H, I, D), s = I, H = D;
                return g
            }, _21O: function ($, P, w, X, S, t, _, e) {
                var I = this;
                if (0 === _) return I._20O($, P, w, X, S, t, e);
                if (1 === e) return I._19O($, P, w, X, S, t, _);
                var y = I._20O($, P, w, X, S, t, e);
                return y.push(_ / e), I._19O.apply(I, y)
            }, _20O: function (J, c, o, l, z, K, H) {
                if (1 !== H) {
                    var n = o + (z - o) * H, Z = l + (K - l) * H;
                    o = J + (o - J) * H, l = c + (l - c) * H, z = o + (n - o) * H, K = l + (Z - l) * H
                }
                return [J, c, o, l, z, K]
            }, _19O: function (L, U, O, R, x, M, f) {
                if (1 !== f) {
                    var C = L + (O - L) * f, y = U + (R - U) * f;
                    O += (x - O) * f, R += (M - R) * f, L = C + (O - C) * f, U = y + (R - y) * f
                }
                return [L, U, O, R, x, M]
            }, _72I: function (x, h) {
                var D = this.pen;
                (x !== D.x || h !== D.y) && (D.x = x, D.y = h, this.g.lineTo(x, h))
            }, _71I: function (u, r, D, b) {
                var F = this.pen;
                (u !== D || r !== b || D !== F.x || b !== F.y) && (F.x = D, F.y = b, this.g.quadraticCurveTo(u, r, D, b))
            }
        }), q && x) {
            var Ue = x.toString();
            X = Ue.indexOf(al.substr(0, 2)) > 0 && Ue.indexOf(jh + jh.substr(1, 1)) > 1 ? !0 : !1
        }
        var Hk = t, Bk = t, fg = function (Z) {
                Hk && !Z._72O && (Bk || (Bk = {}), Bk[Z._72O = rr()] = Z)
            }, yg = function (r, s) {
                if (s || (s = r), s && (Hk || (Hk = {}), !Hk[r])) {
                    var x = new XMLHttpRequest;
                    if (Hk[s] = {
                        request: x,
                        url: s
                    }, x.overrideMimeType("text/plain"), N.convertURL && (s = N.convertURL(s)), s.data) {
                        var e = N.parse(s.data);
                        qb(r, e), N.handleCompTypeLoaded(r, e)
                    } else x.open("GET", encodeURI(s), !0), x.onload = function (V) {
                        if (200 === this.status || 0 === this.status) {
                            var z = N.parse(V.target.response);
                            qb(r, z), N.handleCompTypeLoaded(r, z)
                        } else qb(r, t)
                    }, x.onerror = function () {
                        qb(r, t)
                    }, x.send(null)
                }
            }, qb = function (G, B) {
                if (fe[G] = B, delete Hk[G], kk(Hk) && (Hk = t, Bk)) {
                    for (var r in Bk) {
                        var O = Bk[r];
                        O.invalidateAll && O.invalidateAll(f, "compTypeLoaded", G), O.redraw && O.redraw(), O.iv(), delete O._72O
                    }
                    Bk = t
                }
                if (B && Bk) for (var r in Bk) {
                    var O = Bk[r];
                    O.invalidateAll && O.invalidateAll(f, "compTypeLoading", G), O.redraw && O.redraw(), O.iv()
                }
            }, Hp = j.chart, Uq = N.compStack = [], $l = /^style@/, sh = /^attr@/, Df = /^field@/, Kp = {x: .5, y: .5},
            ko = function (M, k, f, s) {
                if (!M) return 0;
                if (M.fitSize && s) return s;
                var Z = Uo(M.width, k, f);
                return null == Z ? 20 : Z
            }, Rh = function (K, A, b, p) {
                if (!K) return 0;
                if (K.fitSize && p) return p;
                var f = Uo(K.height, A, b);
                return null == f ? 20 : f
            }, Uo = function (n, B, h) {
                if (!n || !n.func) return n;
                var s, H = n.func, I = n.value;
                return s = qd(H) ? h && h.vectorDataBindingDisabled && !n.isSafeFunc ? I : H(B, h) : B ? sh.test(H) ? B.a(H.slice(5)) : $l.test(H) ? B.s(H.slice(6)) : Df.test(H) ? B[H.slice(6)] : B[H] ? B[H](h) : I : I, I !== f && s == t ? I : s
            }, _j = N.drawImage = function () {
                var X, E, e, l, s, S = function (K, b) {
                    K.getValue && K.getValue.compType === b || (K.getValue = function (C) {
                        var F = J(K, C);
                        if (F === f && b.properties) {
                            var S = b.properties[C];
                            S && (F = S.defaultValue)
                        }
                        return F
                    }, K.getValue.compType = b)
                }, J = function (Y, h, d) {
                    var V = Y[h];
                    return V && V.func ? (V = Uo(V, E, e), d && (V = d(V))) : d && (V = Y[h] = d(V)), V
                }, V = function (k, G) {
                    var O = J(k, G);
                    if (s && O) {
                        var m = Kf(s);
                        return O = Ep(O), "rgba(" + I(O[0] * m[0]) + "," + I(O[1] * m[1]) + "," + I(O[2] * m[2]) + "," + O[3] + ")"
                    }
                    return O
                }, Q = function (z) {
                    if (od(z)) {
                        for (var f = new Gn, A = z.length, $ = 0; A > $; $ += 2) f.add({x: z[$], y: z[$ + 1]});
                        z = f
                    }
                    return z
                }, d = function (K) {
                    var E = J(K, "anchorX"), F = J(K, "anchorY");
                    if (E !== f || F !== f) return {x: E === f ? Kp.x : E, y: F === f ? Kp.y : F};
                    var Y = J(K, "type"), W = J(K, "name");
                    if ("image" !== Y || !W) return Kp;
                    var I = nj(W);
                    return I && I.anchorX && I.anchorY ? {x: I.anchorX, y: I.anchorY} : Kp
                }, i = function (v, B) {
                    var m = J(v, $d), E = d(v);
                    if (od(m)) {
                        var K = m.length, Q = J(v, "relative"), b = B.width, G = B.height;
                        if (4 === K) m = {
                            x: m[0],
                            y: m[1],
                            width: m[2],
                            height: m[3]
                        }, Q ? (m.x *= b, m.y *= G, m.width *= b, m.height *= G) : B.fitSize && (m.x *= B.widthScale, m.width *= B.widthScale, m.y *= B.heightScale, m.height *= B.heightScale); else if (3 === K) {
                            var r = m[0];
                            m = {
                                width: m[1],
                                height: m[2]
                            }, Q ? (m.width *= b, m.height *= G) : B.fitSize && (m.width *= B.widthScale, m.height *= B.heightScale), "object" == typeof r ? r.length && (r = {
                                x: r[0],
                                y: r[1]
                            }) : r = Ym(r, B, m), m.x = r.x - m.width * E.x, m.y = r.y - m.height * E.y
                        }
                        var D = J(v, "offsetX");
                        D && (B.fitSize && (D *= B.widthScale), m.x += D), D = J(v, "offsetY"), D && (B.fitSize && (D *= B.heightScale), m.y += D)
                    }
                    return m
                }, O = function (M) {
                    return od(M) ? new Gn(M) : M
                }, G = function (a, N, c, O, v, w) {
                    O === f && (O = 1), v === f && (v = 1);
                    var e = Zh(N, a);
                    if (e && !c && 1 === O && 1 === v) return !1;
                    w = w || Kp;
                    var l = a.x + a.width * w.x, d = a.y + a.height * w.y, U = N.x + N.width * w.x,
                        A = N.y + N.height * w.y;
                    return X.save(), tq(X, l, d), ac(X, c), yi(X, O * (a.width / N.width), v * (a.height / N.height)), tq(X, -U, -A), !0
                }, Y = function () {
                    X.restore()
                }, M = function (R, o, U) {
                    var g = J(R, "path"), F = J(R, sm), S = J(R, "scaleX"), b = J(R, "scaleY"), E = d(R), A = t,
                        q = rn(null, g);
                    if (U || (U = R.unionRect, U || (U = Cc(q), R.path.func || (R.unionRect = U)), A = U), U) {
                        A || (A = R.unionRect, A || (A = Cc(q), R.path.func || (R.unionRect = A)));
                        var z = G(U, A, F, S, b, E), $ = J(R, "borderPattern"), u = ab(X, $), Q = V(R, "background"),
                            a = V(R, "borderColor"), k = J(R, "borderWidth"), p = J(R, "gradient"),
                            Z = V(R, "gradientColor"), N = J(R, "border3d"), B = J(R, "border3dColor"),
                            f = J(R, "border3dAccuracy"), H = X.lineJoin, v = X.lineCap;
                        if (X.lineJoin = J(R, "borderJoin") || ss, X.lineCap = J(R, "borderCap") || Yf, Q ? (Ji(X, Q, p, Z, A), rn(X, g), X.fill(), u !== X && rn(X, g)) : rn(X, g), k && a) {
                            var e = J(R, "borderWidthAbsolute");
                            e && (X.save(), X.setTransform(1, 0, 0, 1, 0, 0)), X.lineWidth = k, X.strokeStyle = a, X.stroke(), e && X.restore(), N && je(X, a, B, k, l, f)
                        }
                        if (Jk(X, $), J(R, "dash")) {
                            var r = J(R, "dashWidth") || k;
                            if (r > 0) {
                                $ = J(R, "dashPattern") || Bb;
                                var u = ab(X, $, J(R, "dashOffset")), L = J(R, "dashColor") || Qk;
                                u !== X && rn(X, g), X.strokeStyle = L, X.lineWidth = r, X.stroke(), J(R, "dash3d") && je(X, L, J(R, "dash3dColor"), r, l, J(R, "dash3dAccuracy")), Jk(X, $)
                            }
                        }
                        o === $d && km(X, Q, J(R, "depth"), A), X.lineJoin = H, X.lineCap = v, z && Y()
                    }
                }, y = function (A, M, u, o) {
                    var p = J(A, ro, Q), b = J(A, sm), $ = d(A);
                    if (p && o.fitSize) {
                        var j = Math.abs(Math.cos(b)) < .001, g = new Gn, Z = Cc(p), y = o.widthScale, e = o.heightScale,
                            w = Z.x + $.x * Z.width, K = Z.y + $.y * Z.height, a = w * y, R = K * e;
                        p.each(function (p) {
                            var n = p.x - w, L = p.y - K;
                            g.add({x: a + n * (j ? e : y), y: R + L * (j ? y : e)})
                        }), p = g, A.unionRect = null
                    }
                    var L = J(A, "scaleX"), T = J(A, "scaleY"), c = M === qi, S = t;
                    if (!u && c && (u = A.unionRect, u || (u = Cc(p), A.points.func || (A.unionRect = u)), S = u), u) {
                        c ? S || (S = A.unionRect, S || (S = Cc(p), A.points.func || (A.unionRect = S))) : S = u;
                        var E, f, I, v, q = G(u, S, b, L, T, $), x = J(A, "borderPattern"), U = ab(X, x),
                            m = V(A, "background"), k = nj(J(A, "repeatImage"), s), r = J(A, "gradientPack"),
                            P = V(A, "borderColor"), C = J(A, "borderWidth"), z = J(A, "segments", O), n = J(A, "gradient"),
                            D = V(A, "gradientColor"), B = J(A, "border3d"), i = J(A, "border3dColor"),
                            H = J(A, "border3dAccuracy"), F = J(A, "closePath"), W = J(A, "fillRule") || "nonzero",
                            _ = X.lineJoin, N = X.lineCap;
                        if (X.lineJoin = J(A, "borderJoin") || ss, X.lineCap = J(A, "borderCap") || Yf, c ? m || k || r ? (im(X, p, z, F), r ? uk(X, r) : k ? Cn(X, k) : Ji(X, m, n, D, S), X.fill(W), r && X.restore(), U !== X && im(U, p, z, F)) : im(U, p, z, F) : ("roundRect" === M ? E = J(A, "cornerRadius") : "polygon" === M ? E = J(A, "polygonSide") : "arc" === M && (E = J(A, "arcFrom"), f = J(A, "arcTo"), I = J(A, "arcClose"), v = J(A, "arcOval")), m || k || r ? (ob(X, M, S, E, f, I, v), r ? uk(X, r) : k ? Cn(X, k) : Ji(X, m, n, D, S), X.fill(W), r && X.restore(), X !== U && ob(U, M, S, E, f, I, v)) : ob(U, M, S, E, f, I, v)), C && P) {
                            var h = J(A, "borderWidthAbsolute");
                            h && (X.save(), X.setTransform(1, 0, 0, 1, 0, 0)), X.lineWidth = C, X.strokeStyle = P, X.stroke(), h && X.restore(), B && je(X, P, i, C, l, H)
                        }
                        if (Jk(X, x), J(A, "dash")) {
                            var Mo = J(A, "dashWidth") || C;
                            if (Mo > 0) {
                                x = J(A, "dashPattern") || Bb;
                                var U = ab(X, x, J(A, "dashOffset")), Nj = J(A, "dashColor") || Qk;
                                U !== X && (c ? im(U, p, z, F) : ob(U, M, S, E, f, I, v)), X.strokeStyle = Nj, X.lineWidth = Mo, X.stroke(), J(A, "dash3d") && je(X, Nj, J(A, "dash3dColor"), Mo, l, J(A, "dash3dAccuracy")), Jk(X, x)
                            }
                        }
                        M === $d && km(X, m, J(A, "depth"), S), X.lineJoin = _, X.lineCap = N, q && Y()
                    }
                }, w = function (K, b) {
                    var G = s, d = s || J(K, ih), B = nj(J(K, "name"), d);
                    B && (Gi(X, B, J(K, "stretch"), b.x, b.y, b.width, b.height, E, e, d), s = G)
                }, R = function (E, F) {
                    var N = J(E, "text");
                    N != t && dg(X, N, J(E, "font"), V(E, ih), F.x, F.y, F.width, F.height, J(E, "align"), J(E, "vAlign"))
                }, p = function (r, F) {
                    Tc(X, V(r, ih), F.x, F.y, F.width, F.height, J(r, "width"))
                }, A = function (x, g) {
                    var r = J(x, Yp), c = 0;
                    if (r && (r.forEach(function (N) {
                        c += N
                    }), c > 0)) {
                        for (var C = J(x, "colors") || Hp, l = J(x, "startAngle") || 0, k = J(x, "hollow"), S = J(x, ri), V = J(x, cg), D = J(x, Ck), M = S ? new Gn : t, I = g.x, B = g.y, K = g.width, o = g.height, h = I + K / 2, v = B + o / 2, Q = _(K, o) / 2, A = 0, $ = 0; $ < r.length; $++) {
                            var G = r[$], w = n * G / c, i = l + w;
                            if (X.fillStyle = C[A++], A === C.length && (A = 0), X.beginPath(), k) {
                                var W = h + m(l) * Q / 2, f = v + H(l) * Q / 2, R = h + m(i) * Q, U = v + H(i) * Q;
                                X.moveTo(W, f), X.arc(h, v, Q / 2, l, i, !1), X.lineTo(R, U), X.arc(h, v, Q, i, l, !0)
                            } else X.moveTo(h, v), X.arc(h, v, Q, i, l, !0);
                            M && (w = (l + i) / 2, M.add({
                                text: qd(S) ? S(G, $, c, E) : G,
                                x: h + .75 * m(w) * Q,
                                y: v + .75 * H(w) * Q
                            })), X.closePath(), X.fill(), l = i
                        }
                        M && M.each(function (j) {
                            dg(X, j.text, V, D, j.x, j.y, 0, 0, Xh)
                        })
                    }
                }, x = function (_, C) {
                    var N = J(_, Ci);
                    if (N && N.length > 0) {
                        var T = N.length, u = J(_, ri), y = J(_, cg), Y = J(_, Ck), Z = u ? new Gn : t,
                            z = J(_, "minValue") || 0, o = J(_, "maxValue");
                        if (o == t && (o = 0, N.forEach(function (Z) {
                            Z.values.forEach(function (Z) {
                                o = K(o, Z)
                            })
                        })), z === o) return;
                        for (var Q = C.height / (o - z), G = C.y + o * Q, S = J(N[0], Yp).length, W = C.width / (3 * S + 1), l = 2 * W / T, g = 0, V = 0; T > V; V++) for (var H = N[V], A = J(H, ih), e = J(H, "colors"), P = J(H, Yp), b = 0; S > b; b++) {
                            e ? X.fillStyle = e[b] : A ? X.fillStyle = A : (X.fillStyle = Hp[g++], g === Hp.length && (g = 0));
                            var F = P[b], d = F * Q, k = C.x + (1 + 3 * b) * W + V * l;
                            if (ip(X, k, G - d, l, d), Z) {
                                var v = qd(u) ? u(F, b, H, E) : F, c = Mr(y, v).height;
                                Z.add({x: k, y: G - d - c, width: l, height: c, text: v})
                            }
                        }
                        Z && Z.each(function (x) {
                            dg(X, x.text, y, Y, x.x, x.y, x.width, x.height, Xh)
                        })
                    }
                }, u = function (z, B) {
                    var D = J(z, Ci);
                    if (D && D.length > 0) {
                        var l = D.length, U = J(D[0], Yp).length, A = B.width / (3 * U + 1), k = 0, C = J(z, "maxValue"),
                            e = J(z, ri), s = J(z, cg), g = J(z, Ck), Q = e ? new Gn : t;
                        if (C == t) {
                            C = 0;
                            for (var I = 0; U > I; I++) {
                                for (var Z = 0, u = 0; l > u; u++) Z += J(D[u], Yp)[I];
                                C = K(C, Z)
                            }
                        }
                        if (C > 0) {
                            for (var I = 0; U > I; I++) for (var N = B.y + B.height, u = 0; l > u; u++) {
                                var F = D[u], h = J(F, ih), q = J(F, Yp)[I], R = q / C * B.height;
                                h ? X.fillStyle = h : (X.fillStyle = Hp[k++], k === Hp.length && (k = 0)), N -= R;
                                var T = {x: B.x + (1 + 3 * I) * A, y: N, width: 2 * A, height: R};
                                ip(X, T.x, T.y, T.width, T.height), Q && (T.text = qd(e) ? e(q, I, F, E) : q, Q.add(T))
                            }
                            Q && Q.each(function (c) {
                                dg(X, c.text, s, g, c.x, c.y, c.width, c.height, Xh)
                            })
                        }
                    }
                }, Z = function (l, m) {
                    var T = J(l, Ci);
                    if (T && T.length > 0) {
                        for (var r = T.length, i = J(T[0], Yp).length, Z = m.width / (3 * i + 1), M = 0, V = J(l, ri), x = J(l, cg), d = J(l, Ck), q = V ? new Gn : t, S = 0; i > S; S++) {
                            for (var p = 0, o = 0; r > o; o++) p += J(T[o], Yp)[S];
                            if (p > 0) {
                                var G = m.y + m.height;
                                for (o = 0; r > o; o++) {
                                    var A = T[o], g = J(A, ih), L = J(A, Yp)[S], $ = L / p * m.height;
                                    g ? X.fillStyle = g : (X.fillStyle = Hp[M++], M === Hp.length && (M = 0)), G -= $;
                                    var P = {x: m.x + (1 + 3 * S) * Z, y: G, width: 2 * Z, height: $};
                                    ip(X, P.x, P.y, P.width, P.height), q && (P.text = qd(V) ? V(L, S, A, E) : L, q.add(P))
                                }
                            }
                        }
                        q && q.each(function (T) {
                            dg(X, T.text, x, d, T.x, T.y, T.width, T.height, Xh)
                        })
                    }
                }, c = function (B, r) {
                    var q = J(B, Ci);
                    if (q && q.length > 0) {
                        var k = q.length, U = J(B, "minValue") || 0, s = J(B, "maxValue");
                        if (s == t && (s = 0, q.forEach(function (B) {
                            B.values.forEach(function (v) {
                                s = K(s, v)
                            })
                        })), U === s) return;
                        for (var R = r.height / (s - U), M = r.y + s * R, I = J(q[0], Yp).length, S = r.width / (3 * I + 1), y = 0, v = J(B, "lineWidth") || 2, i = J(B, "line3d"), f = J(B, "linePoint"), T = J(B, ri), _ = J(B, cg), g = J(B, Ck), p = 0; k > p; p++) {
                            var C = q[p], d = J(C, ih), h = J(C, Yp);
                            d ? X.strokeStyle = d : (d = X.strokeStyle = Hp[y++], y === Hp.length && (y = 0)), X.beginPath();
                            for (var c = 0; I > c; c++) {
                                var x = r.x + (2 + 3 * c) * S, Y = M - h[c] * R;
                                0 === c ? X.moveTo(x, Y) : X.lineTo(x, Y)
                            }
                            if (X.lineWidth = v, X.stroke(), i && je(X, d, t, v, l), f || T) {
                                var V, e = v / 2 + 2;
                                for (c = 0; I > c; c++) {
                                    var F = h[c];
                                    if (x = r.x + (2 + 3 * c) * S, Y = M - F * R, qd(f) ? f(X, x, Y, d, c, C, E) : f && (X.fillStyle = d, X.beginPath(), X.arc(x, Y, e, 0, n, !0), X.fill()), qd(T) ? V = T(F, c, C, E) : T && (V = F), V) {
                                        var o = Mr(_, V).height, j = X.shadowBlur;
                                        if (j) {
                                            var m = X.shadowOffsetX, A = X.shadowOffsetY, L = X.shadowColor;
                                            X.shadowOffsetX = 0, X.shadowOffsetY = 0, X.shadowBlur = 0, X.shadowColor = t
                                        }
                                        dg(X, V, _, g, x, Y - o - e + 2, 0, o, Xh), j && (X.shadowOffsetX = m, X.shadowOffsetY = A, X.shadowBlur = j, X.shadowColor = L)
                                    }
                                }
                            }
                        }
                    }
                }, b = {
                    border: p,
                    image: w,
                    text: R,
                    pieChart: A,
                    columnChart: x,
                    stackedColumnChart: u,
                    percentageColumnChart: Z,
                    lineChart: c
                };
                return function (z, o, x, K, _, U, V, Z, H) {
                    if (o && _ && U) {
                        X = z, E = V, e = Z, l = e ? e._zoom ? e._zoom : 1 : 1, s = H;
                        var A = _, r = U;
                        if (kr()) {
                            var w, u;
                            0 === X[Tf] ? kr[0] && (w = !0) : w = !0, X.texureImage2D ? kr[1] && (u = !0) : u = !0, w && u && (A = x, r = K)
                        }
                        if (o.tagName) return X.drawImage(o, A, r, _, U), void 0;
                        if (J(o, "visible") !== !1) {
                            s || (s = Uo(o.color, E, e));
                            var p = ko(o, E, e, _), q = Rh(o, E, e, U),
                                k = {x: 0, y: 0, width: p, height: q, fitSize: J(o, "fitSize")}, m = J(o, "clip"),
                                R = J(o, "opacity");
                            k.fitSize && (k.widthScale = p / Uo(o.width, E, e), k.heightScale = q / Uo(o.height, E, e)), X.save(), tq(X, A, r), (p !== _ || q !== U) && X.scale(_ / p, U / q), m && (qd(m) ? m(X, p, q, E, e, o) : (X.beginPath(), X.rect(0, 0, p, q), X.clip())), R != t && (X.globalAlpha *= R), J(o, "comps").forEach(function (L) {
                                if (J(L, Db) !== !1) {
                                    Uq.splice(0, 0, L);
                                    var T = J(L, "opacity"), $ = J(L, "shadow"), U = J(L, "type"), g = i(L, k);
                                    if (T != t) {
                                        var P = X.globalAlpha;
                                        X.globalAlpha *= T
                                    }
                                    if ($) {
                                        var W = X.shadowOffsetX, r = X.shadowOffsetY, j = X.shadowBlur, C = X.shadowColor,
                                            p = J(L, "shadowOffsetX"), n = J(L, "shadowOffsetY"), z = J(L, "shadowBlur"),
                                            c = J(L, "shadowColor");
                                        X.shadowOffsetX = (p == t ? 3 : p) * l, X.shadowOffsetY = (n == t ? 3 : n) * l, X.shadowBlur = (z == t ? 6 : z) * l, X.shadowColor = c || ug
                                    }
                                    if ("restore" === U) X.restore(); else if ("clip" === U) X.save(), im(X, J(L, "points", Q), J(L, "segments", O), !0), X.clip(); else if (fb[U] || U === qi) y(L, U, g, k); else if ("SVGPath" === U) M(L, U, g); else {
                                        g = g || {x: 0, y: 0, width: k.width, height: k.height};
                                        var m = J(L, sm), s = J(L, "scaleX"), u = J(L, "scaleY"), w = d(L),
                                            A = G(g, g, m, s, u, w);
                                        if (qd(U)) S(L, U), N.drawCompType(U, X, g, L, E, e); else if (N.getCompType(U)) {
                                            var v = N.getCompType(U), F = v.func || v;
                                            S(L, v), N.drawCompType(F, X, g, L, E, e)
                                        } else b[U] ? b[U](L, g) : N.getCompType(U) === f && kl.test(U) && yg(U);
                                        A && Y()
                                    }
                                    $ && (X.shadowOffsetX = W, X.shadowOffsetY = r, X.shadowBlur = j, X.shadowColor = C), T != t && (X.globalAlpha = P), Uq.splice(0, 1)
                                }
                            }), X.restore()
                        }
                    }
                }
            }();
        N.getCurrentComp = function () {
            return Uq[0]
        }, N.getParentComp = function () {
            return Uq[1]
        }, N.getInternal = function () {
            return {
                isEnter: mn,
                isEsc: Ij,
                isSpace: Jg,
                isLeft: yf,
                isUp: Jb,
                isRight: ck,
                isDown: Hd,
                addMethod: Cf,
                superCall: Ge,
                toPointsArray: ms,
                translateAndScale: Vb,
                appendArray: Kd,
                createWorldMatrix: As,
                vec3TransformMat4: hd,
                setCanvas: ed,
                createDiv: Ac,
                createView: Qj,
                createCanvas: ns,
                createImage: zd,
                initContext: Oo,
                layout: ef,
                fillRect: ip,
                Mat: Vh,
                drawBorder: Tc,
                isString: xq,
                setBorder: dr,
                getPropertyValue: Hi,
                setPropertyValue: de,
                drawVerticalLine: mr,
                draw3DRect: km,
                getPinchDist: Qp,
                isSameRect: Zh,
                getPosition: Ym,
                intersectionLineRect: qg,
                getNodeRect: qr,
                getEdgeAgentPosition: ci,
                getImageWidth: ko,
                getImageHeight: Rh,
                formatNumber: Zj,
                initItemElement: Zk,
                drawPoints: im,
                createG2: ab,
                closePopup: oc,
                isH: Fr,
                createAnim: Up,
                createNormalMatrix: $q,
                createNormals: Se,
                toFloatArray: kg,
                glMV: Wp,
                batchShape: oj,
                createNodeMatrix: Ko,
                getFaceInfo: br,
                transformAppend: Bs,
                drawFaceInfo: Lk,
                to3dPointsArray: Hj,
                setGLDebugMode: function (w) {
                    xs = w
                },
                cube: function () {
                    return {vs: Rc, is: Ld, uv: mg}
                },
                ui: function () {
                    return {
                        DataUI: Hc,
                        NodeUI: wn,
                        EdgeUI: Rb,
                        GroupUI: jb,
                        ShapeUI: dq,
                        GridUI: fh,
                        Data3dUI: wr,
                        Node3dUI: xf,
                        Shape3dUI: Mi
                    }
                },
                getInternalVersion: function () {
                    return "U2FsdGVkX18XAF2ptTRdtIp70iBdoKvZM09bxBNpY9I="
                },
                getDragger: function () {
                    return jl
                },
                addMSMap: function (O) {
                    Cf(eb, O)
                },
                k: O
            }
        }, function (d) {
            function N(d, c) {
                d != t && (c == t && In != typeof d ? this._54O(d, 256) : this._54O(d, c))
            }

            function U() {
                return new N(t)
            }

            function u(G, g, s, _, k, d) {
                for (; --d >= 0;) {
                    var c = g * this[G++] + s[_] + k;
                    k = I(c / 67108864), s[_++] = 67108863 & c
                }
                return k
            }

            function C(y, j, A, R, N, J) {
                for (var F = 32767 & j, O = j >> 15; --J >= 0;) {
                    var o = 32767 & this[y], D = this[y++] >> 15, H = O * o + D * F;
                    o = F * o + ((32767 & H) << 15) + A[R] + (1073741823 & N), N = (o >>> 30) + (H >>> 15) + O * D + (N >>> 30), A[R++] = 1073741823 & o
                }
                return N
            }

            function W(x, S, E, f, K, C) {
                for (var m = 16383 & S, R = S >> 14; --C >= 0;) {
                    var W = 16383 & this[x], H = this[x++] >> 14, y = R * W + H * m;
                    W = m * W + ((16383 & y) << 14) + E[f] + K, K = (W >> 28) + (y >> 14) + R * H, E[f++] = 268435455 & W
                }
                return K
            }

            function P(E) {
                return ui.charAt(E)
            }

            function a(m, s) {
                var T = br[m.charCodeAt(s)];
                return T == t ? -1 : T
            }

            function p(o) {
                for (var v = this.t - 1; v >= 0; --v) o[v] = this[v];
                o.t = this.t, o.s = this.s
            }

            function j(i) {
                this.t = 1, this.s = 0 > i ? -1 : 0, i > 0 ? this[0] = i : -1 > i ? this[0] = i + this.DV : this.t = 0
            }

            function q(w) {
                var D = U();
                return D._58O(w), D
            }

            function D(c, A) {
                var n, B = this;
                if (16 == A) n = 4; else if (8 == A) n = 3; else if (256 == A) n = 8; else if (2 == A) n = 1; else if (32 == A) n = 5; else {
                    if (4 != A) return B.fromRadix(c, A), void 0;
                    n = 2
                }
                B.t = 0, B.s = 0;
                for (var x = c.length, e = !1, D = 0; --x >= 0;) {
                    var m = 8 == n ? 255 & c[x] : a(c, x);
                    0 > m ? "-" == c.charAt(x) && (e = !0) : (e = !1, 0 == D ? B[B.t++] = m : D + n > B.DB ? (B[B.t - 1] |= (m & (1 << B.DB - D) - 1) << D, B[B.t++] = m >> B.DB - D) : B[B.t - 1] |= m << D, D += n, D >= B.DB && (D -= B.DB))
                }
                8 == n && 0 != (128 & c[0]) && (B.s = -1, D > 0 && (B[B.t - 1] |= (1 << B.DB - D) - 1 << D)), B._57O(), e && N.ZERO._78O(B, B)
            }

            function f() {
                for (var o = this, d = o.s & o.DM; o.t > 0 && o[o.t - 1] == d;) --o.t
            }

            function G(Z) {
                var R = this;
                if (R.s < 0) return "-" + R._85O()[en](Z);
                var k;
                if (16 == Z) k = 4; else if (8 == Z) k = 3; else if (2 == Z) k = 1; else if (32 == Z) k = 5; else {
                    if (4 != Z) return R.toRadix(Z);
                    k = 2
                }
                var x, j = (1 << k) - 1, E = !1, B = "", e = R.t, A = R.DB - e * R.DB % k;
                if (e-- > 0) for (A < R.DB && (x = R[e] >> A) > 0 && (E = !0, B = P(x)); e >= 0;) k > A ? (x = (R[e] & (1 << A) - 1) << k - A, x |= R[--e] >> (A += R.DB - k)) : (x = R[e] >> (A -= k) & j, 0 >= A && (A += R.DB, --e)), x > 0 && (E = !0), E && (B += P(x));
                return E ? B : "0"
            }

            function v() {
                var d = U();
                return N.ZERO._78O(this, d), d
            }

            function x() {
                return this.s < 0 ? this._85O() : this
            }

            function r(W) {
                var c = this, G = c.s - W.s;
                if (0 != G) return G;
                var g = c.t;
                if (G = g - W.t, 0 != G) return c.s < 0 ? -G : G;
                for (; --g >= 0;) if (0 != (G = c[g] - W[g])) return G;
                return 0
            }

            function y(x) {
                var _, b = 1;
                return 0 != (_ = x >>> 16) && (x = _, b += 16), 0 != (_ = x >> 8) && (x = _, b += 8), 0 != (_ = x >> 4) && (x = _, b += 4), 0 != (_ = x >> 2) && (x = _, b += 2), 0 != (_ = x >> 1) && (x = _, b += 1), b
            }

            function A() {
                var g = this;
                return g.t <= 0 ? 0 : g.DB * (g.t - 1) + y(g[g.t - 1] ^ g.s & g.DM)
            }

            function R(R, j) {
                var n;
                for (n = this.t - 1; n >= 0; --n) j[n + R] = this[n];
                for (n = R - 1; n >= 0; --n) j[n] = 0;
                j.t = this.t + R, j.s = this.s
            }

            function S(Q, z) {
                for (var h = Q; h < this.t; ++h) z[h - Q] = this[h];
                z.t = K(this.t - Q, 0), z.s = this.s
            }

            function o(D, H) {
                var t, C = this, y = D % C.DB, z = C.DB - y, F = (1 << z) - 1, h = I(D / C.DB), U = C.s << y & C.DM;
                for (t = C.t - 1; t >= 0; --t) H[t + h + 1] = C[t] >> z | U, U = (C[t] & F) << y;
                for (t = h - 1; t >= 0; --t) H[t] = 0;
                H[h] = U, H.t = C.t + h + 1, H.s = C.s, H._57O()
            }

            function Q(p, A) {
                var u = this;
                A.s = u.s;
                var Y = I(p / u.DB);
                if (Y >= u.t) return A.t = 0, void 0;
                var g = p % u.DB, U = u.DB - g, l = (1 << g) - 1;
                A[0] = u[Y] >> g;
                for (var o = Y + 1; o < u.t; ++o) A[o - Y - 1] |= (u[o] & l) << U, A[o - Y] = u[o] >> g;
                g > 0 && (A[u.t - Y - 1] |= (u.s & l) << U), A.t = u.t - Y, A._57O()
            }

            function s(X, W) {
                for (var O = this, B = 0, g = 0, e = _(X.t, O.t); e > B;) g += O[B] - X[B], W[B++] = g & O.DM, g >>= O.DB;
                if (X.t < O.t) {
                    for (g -= X.s; B < O.t;) g += O[B], W[B++] = g & O.DM, g >>= O.DB;
                    g += O.s
                } else {
                    for (g += O.s; B < X.t;) g -= X[B], W[B++] = g & O.DM, g >>= O.DB;
                    g -= X.s
                }
                W.s = 0 > g ? -1 : 0, -1 > g ? W[B++] = O.DV + g : g > 0 && (W[B++] = g), W.t = B, W._57O()
            }

            function z(F, v) {
                var s = this.abs(), g = F.abs(), H = s.t;
                for (v.t = H + g.t; --H >= 0;) v[H] = 0;
                for (H = 0; H < g.t; ++H) v[H + s.t] = s.am(0, g[H], v, H, 0, s.t);
                v.s = 0, v._57O(), this.s != F.s && N.ZERO._78O(v, v)
            }

            function Z(g) {
                for (var A = this.abs(), D = g.t = 2 * A.t; --D >= 0;) g[D] = 0;
                for (D = 0; D < A.t - 1; ++D) {
                    var C = A.am(D, A[D], g, 2 * D, 0, 1);
                    (g[D + A.t] += A.am(D + 1, 2 * A[D], g, 2 * D + 1, C, A.t - D - 1)) >= A.DV && (g[D + A.t] -= A.DV, g[D + A.t + 1] = 1)
                }
                g.t > 0 && (g[g.t - 1] += A.am(D, A[D], g, 2 * D, 0, 1)), g.s = 0, g._57O()
            }

            function h(H, O, L) {
                var b = H.abs(), w = this;
                if (!(b.t <= 0)) {
                    var d = w.abs();
                    if (d.t < b.t) return O != t && O._58O(0), L != t && w._77O(L), void 0;
                    L == t && (L = U());
                    var f = U(), m = w.s, A = H.s, e = w.DB - y(b[b.t - 1]);
                    e > 0 ? (b._44O(e, f), d._44O(e, L)) : (b._77O(f), d._77O(L));
                    var E = f.t, P = f[E - 1];
                    if (0 != P) {
                        var Z = P * (1 << w.F1) + (E > 1 ? f[E - 2] >> w.F2 : 0), M = w.FV / Z, R = (1 << w.F1) / Z,
                            W = 1 << w.F2, $ = L.t, v = $ - E, Q = O == t ? U() : O;
                        for (f._59O(v, Q), L._52O(Q) >= 0 && (L[L.t++] = 1, L._78O(Q, L)), N.ONE._59O(E, Q), Q._78O(f, f); f.t < E;) f[f.t++] = 0;
                        for (; --v >= 0;) {
                            var K = L[--$] == P ? w.DM : I(L[$] * M + (L[$ - 1] + W) * R);
                            if ((L[$] += f.am(0, K, L, v, 0, E)) < K) for (f._59O(v, Q), L._78O(Q, L); L[$] < --K;) L._78O(Q, L)
                        }
                        O != t && (L._45O(E, O), m != A && N.ZERO._78O(O, O)), L.t = E, L._57O(), e > 0 && L._46O(e, L), 0 > m && N.ZERO._78O(L, L)
                    }
                }
            }

            function L(V) {
                var f = U();
                return this.abs()._49O(V, t, f), this.s < 0 && f._52O(N.ZERO) > 0 && V._78O(f, f), f
            }

            function k(V) {
                this.m = V
            }

            function Y(Y) {
                return Y.s < 0 || Y._52O(this.m) >= 0 ? Y.mod(this.m) : Y
            }

            function w(f) {
                return f
            }

            function E(l) {
                l._49O(this.m, t, l)
            }

            function J(p, c, U) {
                p._47O(c, U), this._74O(U)
            }

            function X(Z, M) {
                Z._48O(M), this._74O(M)
            }

            function V() {
                if (this.t < 1) return 0;
                var P = this[0];
                if (0 == (1 & P)) return 0;
                var i = 3 & P;
                return i = 15 & i * (2 - (15 & P) * i), i = 255 & i * (2 - (255 & P) * i), i = 65535 & i * (2 - (65535 & (65535 & P) * i)), i = i * (2 - P * i % this.DV) % this.DV, i > 0 ? this.DV - i : -i
            }

            function l(e) {
                var Q = this;
                Q.m = e, Q.mp = e._50O(), Q.mpl = 32767 & Q.mp, Q.mph = Q.mp >> 15, Q.um = (1 << e.DB - 15) - 1, Q.mt2 = 2 * e.t
            }

            function b(l) {
                var M = U();
                return l.abs()._59O(this.m.t, M), M._49O(this.m, t, M), l.s < 0 && M._52O(N.ZERO) > 0 && this.m._78O(M, M), M
            }

            function $(n) {
                var j = U();
                return n._77O(j), this._74O(j), j
            }

            function F(b) {
                for (var N = this; b.t <= N.mt2;) b[b.t++] = 0;
                for (var B = 0; B < N.m.t; ++B) {
                    var M = 32767 & b[B], c = M * N.mpl + ((M * N.mph + (b[B] >> 15) * N.mpl & N.um) << 15) & b.DM;
                    for (M = B + N.m.t, b[M] += N.m.am(0, c, b, B, 0, N.m.t); b[M] >= b.DV;) b[M] -= b.DV, b[++M]++
                }
                b._57O(), b._45O(N.m.t, b), b._52O(N.m) >= 0 && b._78O(N.m, b)
            }

            function tm(C, q) {
                C._48O(q), this._74O(q)
            }

            function si(R, O, l) {
                R._47O(O, l), this._74O(l)
            }

            function xr() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }

            function Yk(s, B) {
                if (s > 4294967295 || 1 > s) return N.ONE;
                var Y = U(), t = U(), _ = B._73O(this), m = y(s) - 1;
                for (_._77O(Y); --m >= 0;) if (B._76O(Y, t), (s & 1 << m) > 0) B._75O(t, _, Y); else {
                    var C = Y;
                    Y = t, t = C
                }
                return B.revert(Y)
            }

            function nr(C, R) {
                var f;
                return f = 256 > C || R._51O() ? new k(R) : new l(R), this.exp(C, f)
            }

            function wd() {
                var x = this;
                if (x.s < 0) {
                    if (1 == x.t) return x[0] - x.DV;
                    if (0 == x.t) return -1
                } else {
                    if (1 == x.t) return x[0];
                    if (0 == x.t) return 0
                }
                return (x[1] & (1 << 32 - x.DB) - 1) << x.DB | x[0]
            }

            function xp(B, d) {
                return new N(B, d)
            }

            function Mr() {
                var K = this;
                K.n = t, K.e = 0, K.d = t, K.p = t, K.q = t, K.dmp1 = t, K.dmq1 = t, K._10A = t
            }

            function bq(v) {
                return v._53O(this.e, this.n)
            }

            function ho(l) {
                var L, d, Y, w = "", q = 0;
                for (L = 0; L < l.length && l.charAt(L) != mg; ++L) Y = lp.indexOf(l.charAt(L)), 0 > Y || (0 == q ? (w += P(Y >> 2), d = 3 & Y, q = 1) : 1 == q ? (w += P(d << 2 | Y >> 4), d = 15 & Y, q = 2) : 2 == q ? (w += P(d), w += P(Y >> 2), d = 3 & Y, q = 3) : (w += P(d << 2 | Y >> 4), w += P(15 & Y), q = 0));
                return 1 == q && (w += P(d << 2)), w
            }

            function yb(Q) {
                var I = Q.split(""), H = ho(Q);
                return I.forEach(function (Z) {
                    var k = Z.length;
                    k > 0 && H && (tp += M(Z))
                }), H
            }

            function Qq(i, V) {
                var G = Rl._4O.Util._56O(i, "ss"), m = {}, U = 0;
                return m.v = G == V, m.t = 1, m.s = 0 > U ? -1 : 0, Nq = m.v, U > 0 ? m[0] = U : -1 > U ? m[0] = U + m.DV : m.t = 0, [G, m]
            }

            function de(A) {
                var R = 38, k = A.substring(0, R);
                if (k && 30 == k.indexOf("05000420")) {
                    var v = ["ss", A.substring(R)];
                    return v
                }
                return []
            }

            function kn(M, z) {
                z = z.replace(Sh, ""), z = z.replace(/[ \n]+/g, "");
                var s = xp(z, 16);
                if (s._55O() > this.n._55O()) return 0;
                var D = this._37O(s), S = D[en](16).replace(/^1f+00/, ""), K = de(S);
                if (0 == K.length) return !1;
                for (var T, U, x, d = .5, y = ij, Z = [0, .5, .75, .875, .9375], w = [], q = [], C = [], $ = n / y, L = K[1], v = Qq(M, L)[0], F = 0, E = 0; F < Z.length; F++) {
                    var o = 0 === F % 2 ? 0 : .5;
                    for (T = 0; y >= T; T++) U = (T + o) * $, x = 1 - Z[F], w.push(m(U) * d * x, -d + 2 * Z[F] * d, -H(U) * d * x), q.push((T + o) / y, x)
                }
                for (F = 0; F < Z.length - 1; F++) {
                    var u = F * (y + 1), Q = (F + 1) * (y + 1);
                    for (T = 0; y > T; T++) C.push(u + T, Q + T + 1, Q + T, u + T, u + T + 1, Q + T + 1)
                }
                return C.forEach(function (Z) {
                    E += Z
                }), L == v && E > 10
            }

            var Td, Dg = 0xdeadbeefcafe, zn = 15715070 == (16777215 & Dg), en = "toString", bk = "", Db = "nat",
                Jd = function () {
                };
            B = d["D" + 11182[en](i(2, 5))];
            var Dn = N.prototype;
            fr += Ir.substr(0, 1);
            var Xn = d.navigator ? d.navigator.appName : "";
            zn && "Microsoft Internet Explorer" == Xn ? (Dn.am = C, Td = 30) : zn && "Netscape" != Xn ? (Dn.am = u, Td = 26) : (Dn.am = W, Td = 28), Dn.DB = Td, Dn.DM = (1 << Td) - 1, Dn.DV = 1 << Td;
            var $k = 52;
            Dn.FV = i(2, $k), Dn.F1 = $k - Td, Dn.F2 = 2 * Td - $k;
            var dr, Hd, ui = "0123456789abcdefghijklmnopqrstuvwxyz", br = [], Zr = function (J) {
                return String.fromCharCode(J)
            };
            for (dr = "0".charCodeAt(0), Hd = 0; 9 >= Hd; ++Hd) br[dr++] = Hd;
            for (dr = "a".charCodeAt(0), Hd = 10; 36 > Hd; ++Hd) br[dr++] = Hd;
            for (dr = "A".charCodeAt(0), Hd = 10; 36 > Hd; ++Hd) br[dr++] = Hd;
            var pg = k.prototype;
            pg._73O = Y, pg.revert = w, pg._74O = E, pg._75O = J, pg._76O = X;
            var zp = l.prototype;
            zp._73O = b, zp.revert = $, zp._74O = F, zp._75O = si, zp._76O = tm, Dn._77O = p, Dn._58O = j, Dn._54O = D, Dn._57O = f, Dn._59O = R, Dn._45O = S, Dn._44O = o, Dn._46O = Q, Dn._78O = s, Dn._47O = z, Dn._48O = Z, Dn._49O = h, Dn._50O = V, Dn._51O = xr, Dn.exp = Yk, Dn.toString = G, Dn._85O = v, Dn.abs = x, Dn._52O = r, Dn._55O = A, Dn.mod = L, Dn._53O = nr, N.ZERO = q(0), N.ONE = q(1), Dn._86O = wd;
            var op = function (N, Z) {
                var d = this;
                d.isPublic = !0, typeof N !== In ? (d.n = N, d.e = Z) : N != t && Z != t && N.length > 0 && Z.length > 0 && (d.n = xp(N, 16), d.e = M(Z, 16))
            };
            Fp = function () {
                var J, m, U = yb(Ri), R = U.substr(0, 4), E = U.substr(4, 2), L = U.substr(6, 2), f = 1, e = !f, P = O,
                    o = [], h = nm.charAt(7);
                if (B && (B[en]().indexOf(Db) < 0 || B[fr][en]().indexOf(Db) < 0 || !U ? J = Ze(Wk[h]) : (U = new B(R - 0, E - f, L - 0), m = U.setHours(9), B[fr]() > m ? J = Ze(Wk[h]) : e = !0)), U && J && P) {
                    for (var y in J) o.push(y);
                    var V, x = J[o[0]], i = J[o[1]], F = J[o[2]], C = J[o[4]], r = J[o[5]], S = J[o[6]], u = ef._27O(P);
                    u && S && (V = x + i + F + C + "" + r, V && u._31O(V, S) && (e = !0))
                }
                return e || (ob = ve), h
            };
            var el = Mr.prototype;
            el._37O = bq, el._38O = op;
            var lp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mg = "=", Md = 25, ab = 10,
                Ri = "IBcHAQ==", nj = nj || function (L, Z) {
                    var f = {}, u = f._7A = {}, X = u._6A = function () {
                        function o() {
                        }

                        return {
                            _80O: function (u) {
                                o.prototype = this;
                                var h = new o;
                                return u && h._5A(u), h.hasOwnProperty("_82O") || (h._82O = function () {
                                    h.$super._82O.apply(this, arguments)
                                }), h._82O.prototype = h, h.$super = this, h
                            }, _3A: function () {
                                var a = this._80O();
                                return a._82O.apply(a, arguments), a
                            }, _82O: function () {
                            }, _5A: function (O) {
                                for (var A in O) O.hasOwnProperty(A) && (this[A] = O[A]);
                                O.hasOwnProperty(en) && (this.toString = O.toString)
                            }, _88O: function () {
                                return this._82O.prototype._80O(this)
                            }
                        }
                    }(), q = u._39O = X._80O({
                        _82O: function (K, v) {
                            K = this._84O = K || [], this._65O = v != Z ? v : 4 * K.length
                        }, toString: function (F) {
                            return (F || A).stringify(this)
                        }, _89O: function (n) {
                            var J = this._84O, y = n._84O, s = this._65O, u = n._65O;
                            if (this._57O(), s % 4) for (var p = 0; u > p; p++) {
                                var B = 255 & y[p >>> 2] >>> 24 - 8 * (p % 4);
                                J[s + p >>> 2] |= B << 24 - 8 * ((s + p) % 4)
                            } else if (y.length > 65535) for (var p = 0; u > p; p += 4) J[s + p >>> 2] = y[p >>> 2]; else J.push.apply(J, y);
                            return this._65O += u, this
                        }, _57O: function () {
                            var N = this._84O, K = this._65O;
                            N[K >>> 2] &= 4294967295 << 32 - 8 * (K % 4), N.length = c(K / 4)
                        }, _88O: function () {
                            var R = X._88O.call(this);
                            return R._84O = this._84O.slice(0), R
                        }, _87O: function (m) {
                            for (var z = [], $ = 0; m > $; $ += 4) z.push(0 | 4294967296 * T);
                            return new q._82O(z, m)
                        }
                    }), y = f._2A = {}, A = y._69O = {
                        stringify: function (m) {
                            var _, M = m._84O, G = m._65O, r = [];
                            for (_ = 0; G > _; _++) {
                                var s = 255 & M[_ >>> 2] >>> 24 - 8 * (_ % 4);
                                r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16))
                            }
                            return r.join("")
                        }, _68O: function (e) {
                            for (var s = e.length, Z = [], $ = 0; s > $; $ += 2) Z[$ >>> 3] |= M(e.substr($, 2), 16) << 24 - 4 * ($ % 8);
                            return new q._82O(Z, s / 2)
                        }
                    }, l = y._8A = {
                        stringify: function (p) {
                            var f, e = p._84O, y = p._65O, h = [];
                            for (f = 0; y > f; f++) {
                                var K = 255 & e[f >>> 2] >>> 24 - 8 * (f % 4);
                                h.push(Zr(K))
                            }
                            return h.join("")
                        }, _68O: function (V) {
                            var w, A = V.length, u = [];
                            for (w = 0; A > w; w++) u[w >>> 2] |= (255 & V.charCodeAt(w)) << 24 - 8 * (w % 4);
                            return new q._82O(u, A)
                        }
                    }, o = y._9A = {
                        stringify: function (L) {
                            try {
                                return decodeURIComponent(escape(l.stringify(L)))
                            } catch (T) {
                                throw new Error("")
                            }
                        }, _68O: function (Z) {
                            return l._68O(unescape(encodeURIComponent(Z)))
                        }
                    }, Y = u._32O = X._80O({
                        _1A: function () {
                            this._83O = new q._82O, this._23O = 0
                        }, _33O: function (n) {
                            typeof n == In && (n = o._68O(n)), this._83O._89O(n), this._23O += n._65O
                        }, _25O: function (I) {
                            var f = this._83O, S = f._84O, m = f._65O, i = this._79O, F = 4 * i, Q = m / F;
                            Q = I ? c(Q) : K((0 | Q) - this._22O, 0);
                            var e = Q * i, N = _(4 * e, m);
                            if (e) {
                                for (var G = 0; e > G; G += i) this._20O(S, G);
                                var t = S.splice(0, e);
                                f._65O -= N
                            }
                            return new q._82O(t, N)
                        }, _88O: function () {
                            var A = X._88O.call(this);
                            return A._83O = this._83O._88O(), A
                        }, _22O: 0
                    });
                    u._66O = Y._80O({
                        cfg: X._80O(), _82O: function (R) {
                            this.cfg = this.cfg._80O(R), this._1A()
                        }, _1A: function () {
                            Y._1A.call(this), this._34O()
                        }, _81O: function (g) {
                            return this._33O(g), this._25O(), this
                        }, _72O: function (p) {
                            p && this._33O(p);
                            var x = this._21O();
                            return x
                        }, _79O: 16, _26O: function (y) {
                            return function (T, W) {
                                return new y._82O(W)._72O(T)
                            }
                        }, _19O: function ($) {
                            return function (Z, O) {
                                return new j._71O._82O($, O)._72O(Z)
                            }
                        }
                    });
                    var j = f._67O = {};
                    return f
                }();
            !function () {
                var y = nj, L = y._7A, D = L._39O, J = L._66O, P = y._67O, Y = [], c = [];
                !function () {
                    function l(Z) {
                        for (var T = g(Z), u = 2; T >= u; u++) if (!(Z % u)) return !1;
                        return !0
                    }

                    function R(P) {
                        return 0 | 4294967296 * (P - (0 | P))
                    }

                    for (var F = 2, r = 0; 64 > r;) l(F) && (8 > r && (Y[r] = R(i(F, .5))), c[r] = R(i(F, 1 / 3)), r++), F++
                }();
                var E = [], l = P._41O = J._80O({
                    _34O: function () {
                        this._64O = new D._82O(Y.slice(0))
                    }, _20O: function (I, h) {
                        for (var m = this._64O._84O, s = m[0], o = m[1], C = m[2], X = m[3], Q = m[4], b = m[5], x = m[6], U = m[7], L = 0; 64 > L; L++) {
                            if (16 > L) E[L] = 0 | I[h + L]; else {
                                var K = E[L - 15], n = (K << 25 | K >>> 7) ^ (K << 14 | K >>> 18) ^ K >>> 3,
                                    j = E[L - 2], w = (j << 15 | j >>> 17) ^ (j << 13 | j >>> 19) ^ j >>> 10;
                                E[L] = n + E[L - 7] + w + E[L - 16]
                            }
                            var v = Q & b ^ ~Q & x, B = s & o ^ s & C ^ o & C,
                                e = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                                d = (Q << 26 | Q >>> 6) ^ (Q << 21 | Q >>> 11) ^ (Q << 7 | Q >>> 25),
                                i = U + d + v + c[L] + E[L], y = e + B;
                            U = x, x = b, b = Q, Q = 0 | X + i, X = C, C = o, o = s, s = 0 | i + y
                        }
                        m[0] = 0 | m[0] + s, m[1] = 0 | m[1] + o, m[2] = 0 | m[2] + C, m[3] = 0 | m[3] + X, m[4] = 0 | m[4] + Q, m[5] = 0 | m[5] + b, m[6] = 0 | m[6] + x, m[7] = 0 | m[7] + U
                    }, _21O: function () {
                        var o = this._83O, W = o._84O, v = 8 * this._23O, O = 8 * o._65O;
                        return W[O >>> 5] |= 128 << 24 - O % 32, W[(O + 64 >>> 9 << 4) + 14] = I(v / 4294967296), W[(O + 64 >>> 9 << 4) + 15] = v, o._65O = 4 * W.length, this._25O(), this._64O
                    }, _88O: function () {
                        var x = J._88O.call(this);
                        return x._64O = this._64O._88O(), x
                    }
                });
                y._41O = J._26O(l), y._42O = J._19O(l)
            }();
            var Sh = new RegExp("");
            Sh.compile("[^0-9a-f]", "gi"), Mr._28O = -1, Mr._29O = -2, el._31O = kn, el._63O = kn, Mr._43O = -2;
            var qd = new function () {
                var L = this;
                L._5O = function (z, m) {
                    if ("8" != z.substring(m + 2, m + 3)) return 1;
                    var F = M(z.substring(m + 3, m + 4));
                    return 0 == F ? -1 : F > 0 && 10 > F ? F + 1 : -2
                }, L._13O = function (c, S) {
                    var Q = L._5O(c, S);
                    return 1 > Q ? "" : c.substring(S + 2, S + 2 + 2 * Q)
                }, L._12O = function (o, O) {
                    var t = L._13O(o, O);
                    if ("" == t) return -1;
                    var X;
                    return X = M(t.substring(0, 1)) < 8 ? new N(t, 16) : new N(t.substring(2), 16), X._86O()
                }, L._6O = function (e, i) {
                    var S = L._5O(e, i);
                    return 0 > S ? S : i + 2 * (S + 1)
                }, L._11O = function (E, t) {
                    var v = L._6O(E, t), N = L._12O(E, t);
                    return E.substring(v, v + 2 * N)
                }, L._10O = function (p, Q) {
                    var n = L._6O(p, Q), K = L._12O(p, Q);
                    return n + 2 * K
                }, L._7O = function (P, i) {
                    var D = [], O = L._6O(P, i);
                    D.push(O);
                    for (var M = L._12O(P, i), c = O, U = 0; ;) {
                        var n = L._10O(P, c);
                        if (n == t || n - O >= 2 * M) break;
                        if (U >= 200) break;
                        D.push(n), c = n, U++
                    }
                    return D
                }
            };
            if (qd._90O = Zr(ab + 24), qd._91O = e + Zr(ab * ab + 8), Rl == t || !Rl) var Rl = {};
            Rl._4O != t && Rl._4O || (Rl._4O = {});
            var ue = Rl._4O;
            Rl._4O.Util = new function () {
                var t = this;
                t._56O = function (D) {
                    var H = new Rl._4O._3O;
                    return H._30O(D)
                }, t._4A = function (M) {
                    var v = new Rl._4O._3O;
                    return v._36O(M)
                }, t._11A = function (O) {
                    var x = new ue._3O;
                    return x._30O(O)
                }
            }, Rl._4O._3O = function () {
                var V = this;
                V._8O = function (v, O) {
                    if ("ss" == v && "cj" == O) {
                        try {
                            V.md = nj._67O._41O._3A()
                        } catch (o) {
                            Jd(bk)
                        }
                        V._24O = function (H) {
                            V.md._81O(H)
                        }, V._35O = function (s) {
                            var h = nj._2A._69O._68O(s);
                            V.md._81O(h)
                        }, V._60O = function () {
                            var T = V.md._72O();
                            return T[en](nj._2A._69O)
                        }, V._30O = function (o) {
                            return V._24O(o), V._60O()
                        }, V._36O = function (T) {
                            return V._35O(T), V._60O()
                        }
                    }
                }, V._24O = function () {
                    Jd(bk)
                }, V._35O = function () {
                    Jd(bk)
                }, V._60O = function () {
                    Jd(bk)
                }, V._30O = function () {
                    Jd(bk)
                }, V._36O = function () {
                    Jd(bk)
                }, V._8O("ss", "cj")
            }, Tk = function (o) {
                var V = Wf[rd[7]], G = 1, w = !1;
                if (Mo.a != Wf[Me]) return Mo.a;
                if (Mo.forEach(function (x) {
                    G *= x
                }), o > G) {
                    if (V) {
                        V = V.split(qd._90O);
                        var z = V[3], v = V[7], d = V[11], U = V[19], m = V[23], b = V[27], e = z + v + d + U + m;
                        w = oo()(e, b)
                    }
                    w || (Hc.prototype._42 = ye)
                } else w = !0;
                return Mo.a = w, w
            }, Md = String.fromCharCode(Md + 20);
            var Pn = function (L) {
                return L = L.replace(Sh, bk), L = L.replace(/[ \n]+/g, bk)
            }, nf = "30", Nh = "06", Cl = "02", vb = "03", Jf = xp, rn = /^1f+00/, ef = function () {
                var J;
                return J = {
                    _18O: function (e) {
                        var j = e, u = j.replace(/\s+/g, ""), m = ho(u);
                        return m
                    }, _14O: function (s) {
                        var e = this._18O(s), G = this._15O(e);
                        return G
                    }, _15O: function (I) {
                        var V = this._17O(I);
                        if ("2a864886f70d010101" == V._61O) {
                            var J = this._16O(V.key), M = new Mr;
                            return M._38O(J.n, J.e), M
                        }
                        Jd(bk)
                    }, _16O: function (g) {
                        var i = {};
                        g.substr(0, 2) != nf && Jd(bk);
                        var I = qd._7O(g, 0);
                        return 2 != I.length && Jd(bk), g.substr(I[0], 2) != Cl && Jd(bk), i.n = qd._11O(g, I[0]), g.substr(I[1], 2) != Cl && Jd(bk), i.e = qd._11O(g, I[1]), i
                    }, _17O: function (u) {
                        var i = {};
                        i._40O = t;
                        var g = qd._7O(u, 0);
                        2 != g.length && Jd(bk);
                        var S = g[0];
                        u.substr(S, 2) != nf && Jd(bk);
                        var e = qd._7O(u, S);
                        return 2 != e.length && Jd(bk), u.substr(e[0], 2) != Nh && Jd(bk), i._61O = qd._11O(u, e[0]), u.substr(e[1], 2) == Nh ? i._40O = qd._11O(u, e[1]) : u.substr(e[1], 2) == nf && (i._40O = {}, i._40O.p = qd._70O(u, e[1], [0], Cl), i._40O.q = qd._70O(u, e[1], [1], Cl), i._40O.g = qd._70O(u, e[1], [2], Cl)), u.substr(g[1], 2) != vb && Jd(bk), i.key = qd._11O(u, g[1]).substr(2), i
                    }
                }, J._17O ? J : t
            }(), hp = ef._27O = function (v) {
                return ef._14O(v)
            };
            oo = function () {
                return function ($, h) {
                    h = Pn(h);
                    var t = Jf(h, i(2, 4)), H = this;
                    if (!H || !H.n || t._55O() > H.n._55O()) return 0;
                    var R = H._37O(t), q = R[en](i(2, 4)).replace(rn, ""), y = de(q);
                    if (0 == y.length) return !1;
                    var M = y[0], _ = y[1], W = function (F) {
                        return Rl._4O.Util._56O(F, M)
                    }, u = W($);
                    return _ == u
                }.bind(hp(O))
            };
            var Sd, Wd;
            return function () {
                var g = Uf.length - Qo.length;
                if (g > 0) for (var b = 0; g > b; b++) Sd = ue.Util, Wd = Pn
            }(), jk = function (A, w) {
                w = Wd(w);
                var d = hp(re), W = Pb.length, p = 2 * W, G = Jf(w, i(W, p)), F = d, a = !0;
                if (F) {
                    var P = F[zj[0]];
                    P && G._55O() <= P._55O() && (a = !1)
                }
                if (a) return 0;
                var j = F._37O(G), v = j[en](i(W, p)).replace(rn, ""), t = de(v);
                if (0 == t.length) return !1;
                var m = t[0], $ = t[1], h = Sd._11A(A, m);
                return $ == h
            }, ef
        }(R, z);
        var Gn = U.List = function () {
            this._as = [];
            var w, h, z = arguments.length;
            if (1 === z) {
                var a = arguments[0];
                if (Qe(a) && (a = a._as), od(a)) for (h = a.length, w = 0; h > w; w++) this._as.push(a[w]); else a != t && this._as.push(a)
            } else if (z > 1) for (w = 0; z > w; w++) this._as.push(arguments[w])
        };
        ps("List", z, {
            size: function () {
                return this._as.length
            }, isEmpty: function () {
                return 0 === this._as.length
            }, add: function (B, i) {
                return i === f ? this._as.push(B) : this._as.splice(i, 0, B)
            }, addAll: function (U) {
                Qe(U) && (U = U._as), od(U) ? Kd(this._as, U) : this._as.push(U)
            }, get: function (D) {
                return this._as[D]
            }, slice: function (u, v) {
                return new Gn(this._as.slice(u, v))
            }, remove: function (q) {
                var N = this._as.indexOf(q);
                return N >= 0 && N < this._as.length && this.removeAt(N), N
            }, removeAt: function (R) {
                return this._as.splice(R, 1)[0]
            }, set: function (z, q) {
                return this._as[z] = q
            }, clear: function () {
                return this._as.splice(0, this._as.length)
            }, contains: function (M) {
                return this._as.indexOf(M) >= 0
            }, indexOf: function (q) {
                return this._as.indexOf(q)
            }, each: function (j, z) {
                for (var e = 0, I = this._as.length; I > e; e++) {
                    var g = this._as[e];
                    z ? j.call(z, g) : j(g)
                }
            }, reverseEach: function (L, A) {
                for (var X = this._as.length - 1; X >= 0; X--) {
                    var W = this._as[X];
                    A ? L.call(A, W) : L(W)
                }
            }, toArray: function (C, X) {
                if (C) {
                    for (var $, u = [], a = 0, L = this._as.length; L > a; a++) $ = this._as[a], X ? C.call(X, $) && u.push($) : C($) && u.push($);
                    return u
                }
                return this._as.concat()
            }, toList: function ($, B) {
                if ($) {
                    for (var t, z = new Gn, b = 0, j = this._as.length; j > b; b++) t = this._as[b], B ? $.call(B, t) && z.add(t) : $(t) && z.add(t);
                    return z
                }
                return new Gn(this)
            }, reverse: function () {
                this._as.reverse()
            }, sort: function (H) {
                return this._as.sort(H ? H : oq), this
            }, toString: function () {
                return this._as.toString()
            }
        });
        var Ne = new Gn;
        Cf(Ne, {
            size: function () {
                return 0
            }, indexOf: function () {
                return -1
            }, contains: function () {
                return !1
            }, isEmpty: function () {
                return !0
            }, sort: di, each: di, reverseEach: di, toArray: function () {
                return []
            }, toList: function () {
                return new Gn
            }, add: Mp, addAll: Mp, set: Mp, remove: Mp, removeAt: Mp, clear: Mp
        });
        var Nj = U.Notifier = function () {
        };
        ps("Notifier", z, {
            contains: function (V, y) {
                if (this._ls) for (var W, G = 0, K = this._ls.size(); K > G; G++) if (W = this._ls.get(G), V === W.l && y === W.s) return !0;
                return !1
            }, add: function (Y, N, M) {
                var l = this, X = {l: Y, s: N, a: M};
                l._ls || (l._ls = new Gn), l._f ? (l._as || (l._as = new Gn), l._as.add(X)) : X.a ? l._ls.add(X, 0) : l._ls.add(X)
            }, remove: function (o, K) {
                var I = this;
                I._ls && (I._f ? (I._rs || (I._rs = new Gn), I._rs.add({l: o, s: K})) : I._remove(o, K))
            }, _remove: function (f, g) {
                for (var m, j = this._ls, J = 0, T = j.size(); T > J; J++) if (m = j.get(J), m.l === f && m.s === g) return j.removeAt(J), void 0
            }, fire: function (k) {
                var h = this, t = h._ls;
                if (h._b = 1e4, t) {
                    h._f = 1;
                    for (var A, $ = 0, r = t.size(); r > $; $++) A = t.get($), A.s ? A.l.call(A.s, k) : A.l(k);
                    if (delete h._f, h._rs) {
                        for (r = h._rs.size(), $ = 0; r > $; $++) A = h._rs.get($), h._remove(A.l, A.s);
                        delete h._rs
                    }
                    if (h._as) {
                        for (r = h._as.size(), $ = 0; r > $; $++) A = h._as.get($), A.a ? t.add(A, 0) : t.add(A);
                        delete h._as
                    }
                }
            }
        });
        var xd = U.Data = function () {
            this._id = rr()
        };
        ps("Data", z, {
            ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop", "dataBindings"],
            ms_dm: 1,
            ms_attr: 1,
            _icon: t,
            _parent: t,
            _children: Ne,
            _childMap: t,
            _styleMap: t,
            _layer: 0,
            _adjustChildrenToTop: !1,
            getUIClass: function () {
                return t
            },
            _22Q: function () {
                return t
            },
            s: function (s, W) {
                var F = this;
                if (2 === arguments.length) F.setStyle(s, W); else {
                    if (!wi(s)) return F.getStyle(s);
                    for (var d in s) F.setStyle(d, s[d])
                }
                return F
            },
            fp: function ($, o, I) {
                return this.firePropertyChange($, o, I)
            },
            firePropertyChange: function (x, P, p) {
                if (P === p) return !1;
                var Z = this, n = {property: x, oldValue: P, newValue: p, data: Z};
                return Z._dataModel && Z._dataModel.handleDataPropertyChange(n), Z.onPropertyChanged(n), !0
            },
            onPropertyChanged: function (l) {
                var T = this, r = T._parent, J = l.property;
                if (sj(r)) {
                    var g = T.s($k), i = "s:ingroup" === J;
                    (g && Vr[J] || J === i) && r._81I(), (g || i) && r.fp("childChange", !0, !1)
                }
                Lf(r) && Vr[J] && r.updateFromChildren()
            },
            _21I: function (V) {
                var p = this;
                if (V && p._dataModel) throw"HT-DM";
                p._dataModel = V
            },
            getId: function () {
                return this._id
            },
            setId: function (S) {
                this._id = S
            },
            getChildren: function () {
                return this._children
            },
            size: function () {
                return this._children.size()
            },
            toChildren: function (R, h) {
                return this._children.toList(R, h)
            },
            eachChild: function (R, q) {
                this._children.each(R, q)
            },
            addChild: function (b, z) {
                var X = this;
                b !== X && (X._children === Ne && (X._children = new Gn, X._childMap = {}), z === f && (z = X._children.size()), X._childMap[b._id] || X.isDescendantOf(b) || (b._parent && b._parent.removeChild(b), (0 > z || z > X._children.size()) && (z = X._children.size()), X._children.add(b, z), X._childMap[b._id] = b, b.setParent(X), X.onChildAdded(b, z), X.fp(dm, t, b)))
            },
            onChildAdded: function () {
            },
            removeChild: function (r) {
                var g = this;
                if (g._childMap && g._childMap[r._id]) {
                    var v = g._children.remove(r);
                    delete g._childMap[r._id], g.fp(dm, r, t), r.setParent(t), g.onChildRemoved(r, v)
                }
            },
            onChildRemoved: function () {
            },
            getChildAt: function (g) {
                return this._children.get(g)
            },
            clearChildren: function () {
                var M = this;
                if (!M._children.isEmpty()) for (var _ = 0, b = M._children.toArray(), j = b.length; j > _; _++) M.removeChild(b[_])
            },
            getParent: function () {
                return this._parent
            },
            setParent: function (D) {
                var $ = this;
                if (!($._73I || $._parent === D || $ === D || D && D.isDescendantOf($))) {
                    var n = $._parent;
                    $._parent = D, $._73I = 1, n && n.removeChild($), D && D.addChild($), delete $._73I, $.fp("parent", n, D), $.onParentChanged(n, D)
                }
            },
            onParentChanged: function () {
            },
            hasChildren: function () {
                return this._children.size() > 0
            },
            isEmpty: function () {
                return this._children.isEmpty()
            },
            isRelatedTo: function (e) {
                return e ? this.isDescendantOf(e) || e.isDescendantOf(this) : !1
            },
            isParentOf: function (F) {
                return F && this._childMap ? !!this._childMap[F._id] : !1
            },
            isDescendantOf: function (e) {
                if (!e || e.isEmpty()) return !1;
                for (var X = this._parent; X;) {
                    if (e === X) return !0;
                    X = X._parent
                }
                return !1
            },
            getStyleMap: function () {
                return this._styleMap
            },
            getStyle: function (u, D) {
                D === f && (D = 1);
                var L = this._styleMap ? this._styleMap[u] : f;
                return L === f && D ? E[u] : L
            },
            setStyle: function (z, w) {
                var s = this;
                s._styleMap || (s._styleMap = {});
                var y = s._styleMap[z];
                w === f ? delete s._styleMap[z] : s._styleMap[z] = w, s.fp("s:" + z, y, w) && s.onStyleChanged(z, y, w)
            },
            onStyleChanged: function () {
            },
            iv: function () {
                this.invalidate()
            },
            invalidate: function () {
                this.fp("*", !1, !0)
            },
            toString: function () {
                var M = this;
                return M._displayName || M._name || M._tag || M._id
            },
            toLabel: function () {
                return this._displayName || this._name
            },
            addStyleIcon: function (y, Y) {
                var U = this, f = U.s(_k);
                f || U.s(_k, f = {}), Y ? f[y] = Y : delete f[y], U.fp(_k, t, f)
            },
            removeStyleIcon: function (T) {
                var Y = this.s(_k);
                if (Y) {
                    var L = Y[T];
                    delete Y[T], this.fp(_k, t, Y)
                }
                return L
            },
            getSerializableProperties: function () {
                return {
                    name: 1,
                    displayName: 1,
                    icon: 1,
                    toolTip: 1,
                    parent: 1,
                    layer: 1,
                    tag: 1,
                    adjustChildrenToTop: 1,
                    dataBindings: 1
                }
            },
            getSerializableStyles: function () {
                var W, n = {};
                for (W in this._styleMap) n[W] = 1;
                return n
            }
        });
        var Xl = U.DataModel = function () {
            var P = this;
            P._datas = new Gn, P._dataMap = {}, P._roots = new Gn, P._rootMap = {}, P._78O = {}, P._36I = new Nj, P._35I = new Nj, P._selectionModel = new Lp(P);
            var O = P._29Q = [], e = P._scheduleCallback = function () {
                for (var X = 1489026812257, v = 0; v < O.length; v++) {
                    var E = O[v];
                    E.enabled && X - E.lastTime > E.interval && (P.each(function (w) {
                        E.action(w)
                    }), E.lastTime = X)
                }
                O.length && (P._30Q = R.requestAnimationFrame(e))
            }
        };
        ps("DataModel", z, {
            ms_fire: 1,
            ms_attr: 1,
            ms_ac: ["name", "autoAdjustIndex", "hierarchicalRendering", "background", "init"],
            _name: f,
            _autoAdjustIndex: !0,
            _hierarchicalRendering: !1,
            _background: f,
            _init: f,
            sm: function () {
                return this.getSelectionModel()
            },
            mm: function (A, Z, d) {
                this.addDataModelChangeListener(A, Z, d)
            },
            umm: function (Q, m) {
                this.removeDataModelChangeListener(Q, m)
            },
            md: function (Q, W, G) {
                this.addDataPropertyChangeListener(Q, W, G)
            },
            umd: function (Y, u) {
                this.removeDataPropertyChangeListener(Y, u)
            },
            mh: function ($, F, O) {
                this.addHierarchyChangeListener($, F, O)
            },
            umh: function (x, m) {
                this.removeHierarchyChangeListener(x, m)
            },
            getHistoryManager: function () {
                return this._historyManager
            },
            getAttrObject: function () {
                return this._attrObject
            },
            setAttrObject: function (t) {
                return this._attrObject = t
            },
            getSelectionModel: function () {
                return this._selectionModel
            },
            size: function () {
                return this._datas.size()
            },
            isEmpty: function () {
                return this._datas.isEmpty()
            },
            getRoots: function () {
                return this._roots
            },
            getDatas: function () {
                return this._datas
            },
            getDataById: function (B) {
                return this._dataMap[B]
            },
            removeDataById: function (V) {
                this.remove(this.getDataById(V))
            },
            toDatas: function (p, E) {
                return this._datas.toList(p, E)
            },
            each: function (B, U) {
                this._datas.each(B, U)
            },
            getDataByTag: function (f) {
                return this._78O[f]
            },
            removeDataByTag: function (U) {
                this.remove(this.getDataByTag(U))
            },
            add: function (T, d) {
                var r = this, B = T._id, _ = T._tag, J = r._roots;
                if (r._dataMap[B]) throw"'" + B + "' already exists";
                _ != t && (r._78O[_] = T), r._dataMap[B] = T, r._datas.add(T), T._parent || (r._rootMap[B] = T, d >= 0 ? J.add(T, d) : J.add(T)), T._21I(r), r.onAdded(T), r._36I.fire({
                    kind: "add",
                    data: T
                })
            },
            onAdded: function () {
            },
            remove: function (i) {
                if (i) {
                    var P = this, Z = i._id, U = i.getTag(), $ = P.getHistoryManager();
                    i._dataModel === P && ($ && $.beginInteraction(), P.prepareRemove(i), i.toChildren().each(P.remove, P), i._parent && i._parent.removeChild(i), P._datas.remove(i), delete P._dataMap[Z], U != t && delete P._78O[U], P._rootMap[Z] && (delete P._rootMap[Z], P._roots.remove(i)), i._21I(t), P.onRemoved(i), P._36I.fire({
                        kind: Ad,
                        data: i
                    }), $ && $.endInteraction())
                }
            },
            onRemoved: function () {
            },
            prepareRemove: function () {
            },
            clear: function () {
                var b = this;
                b._datas.size() > 0 && (b._datas.each(function (g) {
                    g._21I(t)
                }), b._datas.clear(), b._dataMap = {}, b._roots.clear(), b._rootMap = {}, b._78O = {}, b._36I.fire({kind: fj}))
            },
            contains: function (e) {
                return e && e._dataModel === this
            },
            handleDataPropertyChange: function ($) {
                var u = this, F = $.data, R = $.property;
                if ("parent" === R) {
                    var n = F._id, s = u._rootMap, X = u._roots;
                    F._parent ? s[n] && (delete s[n], X.remove(F)) : s[n] || (s[n] = F, X.add(F))
                } else if ("tag" === R) {
                    var k = $.oldValue, S = $.newValue, I = u._78O;
                    k != t && delete I[k], S != t && (I[S] = F)
                }
                this.onDataPropertyChanged(F, $), this._35I.fire($)
            },
            onDataPropertyChanged: function () {
            },
            addDataModelChangeListener: function ($, q, s) {
                this._36I.add($, q, s)
            },
            removeDataModelChangeListener: function (d, j) {
                this._36I.remove(d, j)
            },
            addDataPropertyChangeListener: function (p, C, e) {
                this._35I.add(p, C, e)
            },
            removeDataPropertyChangeListener: function (T, e) {
                this._35I.remove(T, e)
            },
            _38I: function (O, q, j) {
                this._37I && this._37I.fire({data: O, oldIndex: q, newIndex: j})
            },
            addHierarchyChangeListener: function (J, N, B) {
                this._37I || (this._37I = new Nj), this._37I.add(J, N, B)
            },
            removeHierarchyChangeListener: function (h, O) {
                this._37I.remove(h, O)
            },
            getSiblings: function (c) {
                var l = c._parent;
                return l ? l._children : this._roots
            },
            eachByHierarchical: function (E, n, v) {
                if (n) return this._eachByHierarchical(E, n, v);
                for (var y = 0, C = this._roots, S = C.size(); S > y; y++) if (this._eachByHierarchical(E, C.get(y), v) === !1) return !1;
                return !0
            },
            _eachByHierarchical: function (i, A, S) {
                if (S) {
                    if (i.call(S, A) === !1) return !1
                } else if (i(A) === !1) return !1;
                for (var X = A.size(), m = 0; X > m; m++) if (this._eachByHierarchical(i, A.getChildAt(m), S) === !1) return !1;
                return !0
            },
            reverseEachByHierarchical: function (z, d, f) {
                if (d) return this._reverseEachByHierarchical(z, d, f);
                for (var y = this._roots, B = y.size(), g = B - 1; g >= 0; g--) if (this._reverseEachByHierarchical(z, y.get(g), f) === !1) return !1;
                return !0
            },
            _reverseEachByHierarchical: function (q, e, A) {
                for (var H = e.size(), t = H - 1; t >= 0; t--) if (this._reverseEachByHierarchical(q, e.getChildAt(t), A) === !1) return !1;
                if (A) {
                    if (q.call(A, e) === !1) return !1
                } else if (q(e) === !1) return !1;
                return !0
            },
            eachByDepthFirst: function ($, v, W) {
                if (v) return this._11I($, v, W);
                for (var s = 0, d = this._roots, m = d.size(); m > s; s++) if (this._11I($, d.get(s), W) === !1) return !1;
                return !0
            },
            _11I: function (V, P, z) {
                for (var o = P.size(), d = 0; o > d; d++) if (this._11I(V, P.getChildAt(d), z) === !1) return !1;
                if (z) {
                    if (V.call(z, P) === !1) return !1
                } else if (V(P) === !1) return !1;
                return !0
            },
            eachByBreadthFirst: function (F, t, Q) {
                var $ = new Gn;
                for (t ? $.add(t) : this._roots.each($.add, $); $.size() > 0;) if (t = $.removeAt(0), t.eachChild($.add, $), Q) {
                    if (F.call(Q, t) === !1) return !1
                } else if (F(t) === !1) return !1;
                return !0
            },
            moveTo: function (D, k) {
                var K = this.getSiblings(D), Q = K.indexOf(D);
                Q === k || 0 > Q || k >= 0 && k <= K.size() && (K.remove(D), k > K.size() && k--, K.add(D, k), this._38I(D, Q, k))
            },
            moveUp: function (b) {
                this.moveTo(b, this.getSiblings(b).indexOf(b) - 1)
            },
            moveDown: function (G) {
                this.moveTo(G, this.getSiblings(G).indexOf(G) + 1)
            },
            moveToTop: function (T) {
                this.moveTo(T, 0)
            },
            moveToBottom: function (q) {
                this.moveTo(q, this.getSiblings(q).size())
            },
            moveSelectionUp: function (n) {
                n || (n = this.sm());
                var r = new Gn;
                Ff(n, r, this._roots), r.each(this.moveUp, this)
            },
            moveSelectionDown: function (m) {
                m || (m = this.sm());
                var F = new Gn;
                mk(m, F, this._roots), F.each(this.moveDown, this)
            },
            moveSelectionToTop: function (C) {
                C || (C = this.sm());
                var B = new Gn;
                ai(C, B, this._roots), B.each(this.moveToTop, this)
            },
            moveSelectionToBottom: function (R) {
                R || (R = this.sm());
                var l = new Gn;
                vi(R, l, this._roots), l.each(this.moveToBottom, this)
            },
            moveToIndex: function (s, f, E) {
                var i = this.getDatas();
                null == E && (E = i.indexOf(s)), E === f || 0 > E || f >= 0 && f <= i.size() && (i.remove(s), f > i.size() && f--, i.add(s, f), this._76I(s, E, f))
            },
            bringForward: function (j) {
                this.moveToIndex(j, this.getDatas().indexOf(j) + 1)
            },
            bringToFront: function (m) {
                this.moveToIndex(m, this.size())
            },
            sendBackward: function (A) {
                this.moveToIndex(A, this.getDatas().indexOf(A) - 1)
            },
            sendToBack: function (m) {
                this.moveToIndex(m, 0)
            },
            bringSelectionForward: function (h) {
                h || (h = this.sm());
                for (var o = new Gn, R = this.getDatas(), v = !1, b = 0; b < R.size(); b++) {
                    var q = R.get(R.size() - 1 - b);
                    h.contains(q) ? v && o.add(q) : v = !0
                }
                o.each(this.bringForward, this)
            },
            bringSelectionToFront: function (y) {
                y || (y = this.sm());
                for (var W = new Gn, N = this.getDatas(), Z = 0; Z < N.size(); Z++) {
                    var T = N.get(Z);
                    y.contains(T) && W.add(T)
                }
                W.each(this.bringToFront, this)
            },
            sendSelectionBackward: function (b) {
                b || (b = this.sm());
                for (var X = new Gn, q = this.getDatas(), c = !1, _ = 0; _ < q.size(); _++) {
                    var x = q.get(_);
                    b.contains(x) ? c && X.add(x) : c = !0
                }
                X.each(this.sendBackward, this)
            },
            sendSelectionToBack: function (R) {
                R || (R = this.sm());
                for (var A = new Gn, B = this.getDatas(), t = 0; t < B.size(); t++) {
                    var C = B.get(B.size() - 1 - t);
                    R.contains(C) && A.add(C)
                }
                A.each(this.sendToBack, this)
            },
            addScheduleTask: function (f) {
                var u = this;
                u.removeScheduleTask(f), f.enabled == t && (f.enabled = !0), f.interval == t && (f.interval = 10), f.action == t && (f.action = di), f.lastTime = 1489026812257, u._29Q.push(f), u._30Q == t && (u._30Q = R.requestAnimationFrame(u._scheduleCallback))
            },
            removeScheduleTask: function (K) {
                var C = this, O = C._29Q, P = O.indexOf(K);
                P >= 0 && O.splice(P, 1), O.length || C._30Q == t || (R.cancelAnimationFrame(C._30Q), delete C._30Q)
            }
        });
        var Lp = U.SelectionModel = function (O) {
            var i = this;
            i._68O = rp, i._map = {}, i._73O = new Gn, i._74I = new Nj, i._21I(O)
        };
        ps("SelectionModel", z, {
            ms_fire: 1, ms_dm: 1, ms: function (X, D, g) {
                this.addSelectionChangeListener(X, D, g)
            }, ums: function (F, J) {
                this.removeSelectionChangeListener(F, J)
            }, fd: function () {
                return this.getFirstData()
            }, ld: function () {
                return this.getLastData()
            }, sg: function () {
                return this._68O === Zo
            }, co: function (g) {
                return this._map[g._id] != t
            }, ss: function (C) {
                this.setSelection(C)
            }, as: function (l) {
                this.appendSelection(l)
            }, rs: function (Z) {
                this.removeSelection(Z)
            }, cs: function () {
                this.clearSelection()
            }, sa: function () {
                this.selectAll()
            }, getSelectionMode: function () {
                return this._68O
            }, setSelectionMode: function (L) {
                var F = this;
                if (F._68O !== L && (L === zj || L === Zo || L === rp)) {
                    F.cs();
                    var b = F._68O;
                    F._68O = L, F.fp("selectionMode", b, L)
                }
            }, _21I: function (Y) {
                var U = this, z = U._dataModel;
                z !== Y && (z && (U.cs(), z.umm(U.handleDataModelChange, U)), U._dataModel = Y, Y.mm(U.handleDataModelChange, U, !0), U.fp(ec, z, Y))
            }, dispose: function () {
                var N = this;
                N.cs(), N._dataModel.umm(N.handleDataModelChange, N)
            }, handleDataModelChange: function (i) {
                var r = this;
                if (i.kind === Ad) {
                    var u = i.data;
                    r.co(u) && (r._73O.remove(u), delete r._map[u._id], r._75I(Ad, new Gn(u)))
                } else i.kind === fj && r.cs()
            }, getFilterFunc: function () {
                return this._filterFunc
            }, setFilterFunc: function (o) {
                var D = this;
                if (D._filterFunc !== o) {
                    D.cs();
                    var H = D._filterFunc;
                    D._filterFunc = o, D.fp("filterFunc", H, D._filterFunc)
                }
            }, _75I: function (I, M, W, u) {
                W && (this._73O.each(function (L) {
                    u[L._id] ? W.remove(L) : W.add(L)
                }), M = W.toList()), this._74I.fire({kind: I, datas: new Gn(M)})
            }, addSelectionChangeListener: function (E, _, i) {
                this._74I.add(E, _, i)
            }, removeSelectionChangeListener: function (Q, N) {
                this._74I.remove(Q, N)
            }, _97O: function (J, M) {
                for (var N, K = this, D = 0, Y = new Gn(J); D < Y.size(); D++) N = Y.get(D), (K._filterFunc && !K._filterFunc(N) || M && K.co(N) || !M && !K.co(N) || !K._dataModel.contains(N)) && (Y.removeAt(D), D--);
                return Y
            }, appendSelection: function (x) {
                var H = this;
                if (H._68O !== zj) {
                    var h, i, m = H._73O, n = H._97O(x, !0);
                    n.isEmpty() || (H.sg() && (h = new Gn(m), i = H._map, m.clear(), H._map = {}, n = new Gn(n.get(n.size() - 1))), n.each(function (v) {
                        m.add(v), H._map[v._id] = v
                    }), H._75I("append", n, h, i))
                }
            }, removeSelection: function (K) {
                var k = this, P = k._97O(K), R = 0, d = P.size();
                if (0 !== d) {
                    for (; d > R; R++) {
                        var L = P.get(R);
                        k._73O.remove(L), delete k._map[L._id]
                    }
                    k._75I(Ad, P)
                }
            }, toSelection: function (l, m) {
                return this._73O.toList(l, m)
            }, getSelection: function () {
                return this._73O
            }, each: function (T, x) {
                this._73O.each(T, x)
            }, setSelection: function ($) {
                var k = this, h = k._73O;
                if (k._68O !== zj && !(h.isEmpty() && !$ || 1 === h.size() && k.ld() === $)) {
                    var M = new Gn(h), G = k._map;
                    h.clear(), k._map = {};
                    var e = k._97O($, !0);
                    k.sg() && e.size() > 1 && (e = new Gn(e.get(e.size() - 1))), e.each(function (N) {
                        h.add(N), k._map[N._id] = N
                    }), k._75I("set", t, M, G)
                }
            }, clearSelection: function () {
                var k = this, K = k._73O;
                if (K.size() > 0) {
                    var h = K.toList();
                    K.clear(), k._map = {}, k._75I(fj, h)
                }
            }, selectAll: function () {
                var o = this;
                if (o._68O !== zj) {
                    var A, J, Q = o._dataModel.toDatas();
                    if (o._filterFunc) for (A = 0; A < Q.size(); A++) J = Q.get(A), o._filterFunc(J) || (Q.removeAt(A), A--);
                    var V = o._73O, y = new Gn(V), R = o._map;
                    V.clear(), o._map = {}, o.sg() && Q.size() > 1 && (Q = new Gn(Q.get(Q.size() - 1)));
                    var v = Q.size();
                    for (A = 0; v > A; A++) J = Q.get(A), V.add(J), o._map[J._id] = J;
                    o._75I("all", t, y, R)
                }
            }, size: function () {
                return this._73O.size()
            }, isEmpty: function () {
                return this._73O.isEmpty()
            }, contains: function (K) {
                return this._map[K._id] != t
            }, getLastData: function () {
                var S = this._73O;
                return S.size() > 0 ? S.get(S.size() - 1) : t
            }, getFirstData: function () {
                var R = this._73O;
                return R.size() > 0 ? R.get(0) : t
            }, isSelectable: function (g) {
                var I = this;
                return g && I._68O !== zj ? I._filterFunc ? I._filterFunc(g) : !0 : !1
            }, getTopSelection: function () {
                var X = this, S = new Gn;
                return X._73O.each(function (A) {
                    for (var V = A.getParent(); V;) {
                        if (X.contains(V)) {
                            A = t;
                            break
                        }
                        V = V.parent
                    }
                    A && S.add(A)
                }), S
            }
        });
        var qr = function () {
            return lp(0), function (S, M) {
                var p;
                if (sj(M) && M.isExpanded()) {
                    var d = S.getDataUI(M);
                    d && d._88I && (p = d._88I.rect)
                }
                return p ? p : M.getRect()
            }
        }();
        Cf(N, {
            edgeGroupAgentFunc: t,
            graphViewAutoScrollZone: 16,
            graphViewResettable: !0,
            graphViewPannable: !0,
            graphViewRectSelectable: !0,
            graphViewScrollBarVisible: !0,
            graphViewRectSelectBorderColor: j.rectSelectBorder,
            graphViewRectSelectBackground: ke,
            graphViewEditPointSize: w ? 17 : 7,
            graphViewEditPointBorderColor: j.editPointBorder,
            graphViewEditPointBackground: j.editPointBackground,
            setEdgeType: function (T, h, V) {
                Of[T] = h, Vn[T] = V
            },
            getEdgeType: function (H) {
                return Of[H]
            },
            getEdgeTypeMap: function () {
                return Of
            },
            getNodeRect: qr
        }, !0), Cf(E, {
            "2d.selectable": !0,
            "2d.visible": !0,
            "2d.movable": !0,
            "2d.editable": !0,
            "2d.move.mode": f,
            "image.stretch": "fill",
            icons: f,
            ingroup: !0,
            "body.color": f,
            opacity: f,
            pixelPerfect: !0,
            "select.color": vb,
            "select.width": 1,
            "select.padding": 2,
            "select.type": $d,
            shadow: !1,
            "shadow.blur": 6,
            "shadow.offset.x": 3,
            "shadow.offset.y": 3,
            "border.color": f,
            "border.width": 2,
            "border.padding": 2,
            "border.type": $d,
            label: f,
            "label.font": f,
            "label.color": an,
            "label.background": f,
            "label.position": 31,
            "label.position.fixed": !1,
            "label.offset.x": 0,
            "label.offset.y": 2,
            "label.rotation": f,
            "label.max": f,
            "label.opacity": f,
            "label.scale": 1,
            "label.align": f,
            "label.selectable": !0,
            label2: f,
            "label2.font": f,
            "label2.color": an,
            "label2.background": f,
            "label2.position": 34,
            "label2.position.fixed": !1,
            "label2.offset.x": 0,
            "label2.offset.y": -2,
            "label2.rotation": f,
            "label2.max": f,
            "label2.opacity": f,
            "label2.scale": 1,
            "label2.align": f,
            "label2.selectable": !0,
            note: f,
            "note.expanded": !0,
            "note.font": f,
            "note.color": jm,
            "note.background": vb,
            "note.position": 8,
            "note.offset.x": -3,
            "note.offset.y": 3,
            "note.max": f,
            "note.toggleable": !0,
            "note.border.width": 1,
            "note.border.color": f,
            "note.opacity": f,
            "note.scale": 1,
            "note.align": f,
            note2: f,
            "note2.expanded": !0,
            "note2.font": f,
            "note2.color": jm,
            "note2.background": vb,
            "note2.position": 3,
            "note2.offset.x": 3,
            "note2.offset.y": -3,
            "note2.max": f,
            "note2.toggleable": !0,
            "note2.border.width": 1,
            "note2.border.color": f,
            "note2.opacity": f,
            "note2.scale": 1,
            "note2.align": f,
            "group.type": f,
            "group.image": f,
            "group.image.stretch": "fill",
            "group.repeat.image": f,
            "group.padding": 8,
            "group.padding.left": 0,
            "group.padding.right": 0,
            "group.padding.top": 0,
            "group.padding.bottom": 0,
            "group.position": 17,
            "group.toggleable": !0,
            "group.title.font": f,
            "group.title.color": jm,
            "group.title.background": j.groupTitleBackground,
            "group.title.align": ur,
            "group.background": j.groupBackground,
            "group.depth": 1,
            "group.border.width": 1,
            "group.border.pattern": f,
            "group.border.color": qq,
            "group.border.cap": Yf,
            "group.border.join": ss,
            "group.gradient": t,
            "group.gradient.color": "#FFF",
            shape: f,
            "shape.background": qq,
            "shape.repeat.image": f,
            "shape.border.width": 0,
            "shape.border.color": qq,
            "shape.border.3d": !1,
            "shape.border.3d.color": f,
            "shape.border.3d.accuracy": f,
            "shape.border.cap": Yf,
            "shape.border.join": ss,
            "shape.border.pattern": f,
            "shape.gradient": t,
            "shape.gradient.color": "#FFF",
            "shape.depth": 0,
            "shape.dash": !1,
            "shape.dash.pattern": Bb,
            "shape.dash.offset": 0,
            "shape.dash.color": Qk,
            "shape.dash.width": f,
            "shape.dash.3d": !1,
            "shape.dash.3d.color": f,
            "shape.dash.3d.accuracy": f,
            "shape.polygon.side": 6,
            "shape.arc.from": P,
            "shape.arc.to": n,
            "shape.arc.close": !0,
            "shape.arc.oval": !1,
            "shape.corner.radius": f,
            "edge.type": f,
            "edge.points": f,
            "edge.segments": f,
            "edge.color": qq,
            "edge.width": 2,
            "edge.offset": 20,
            "edge.group": 0,
            "edge.expanded": !0,
            "edge.gap": 12,
            "edge.toggleable": !0,
            "edge.center": !1,
            "edge.3d": !1,
            "edge.3d.color": f,
            "edge.3d.accuracy": f,
            "edge.cap": Yf,
            "edge.join": ss,
            "edge.source.position": 17,
            "edge.source.anchor.x": f,
            "edge.source.anchor.y": f,
            "edge.source.offset.x": 0,
            "edge.source.offset.y": 0,
            "edge.target.position": 17,
            "edge.target.anchor.x": f,
            "edge.target.anchor.y": f,
            "edge.target.offset.x": 0,
            "edge.target.offset.y": 0,
            "edge.pattern": f,
            "edge.dash": !1,
            "edge.dash.pattern": Bb,
            "edge.dash.offset": 0,
            "edge.dash.color": Qk,
            "edge.dash.width": f,
            "edge.dash.3d": !1,
            "edge.dash.3d.color": f,
            "edge.dash.3d.accuracy": f,
            "edge.independent": !1,
            "attach.row.index": 0,
            "attach.column.index": 0,
            "attach.row.span": 1,
            "attach.column.span": 1,
            "attach.padding": 0,
            "attach.padding.left": 0,
            "attach.padding.right": 0,
            "attach.padding.top": 0,
            "attach.padding.bottom": 0,
            "attach.index": -1,
            "attach.offset": 0,
            "attach.offset.relative": !1,
            "attach.offset.opposite": !1,
            "attach.thickness": f,
            "attach.gap": 0,
            "attach.gap.relative": !1,
            "grid.row.count": 1,
            "grid.column.count": 1,
            "grid.row.percents": f,
            "grid.column.percents": f,
            "grid.border": 1,
            "grid.border.left": 0,
            "grid.border.right": 0,
            "grid.border.top": 0,
            "grid.border.bottom": 0,
            "grid.gap": 1,
            "grid.background": j.gridBackground,
            "grid.depth": 1,
            "grid.cell.depth": -1,
            "grid.cell.border.color": j.gridCellBorderColor,
            "grid.block": f,
            "grid.block.padding": 3,
            "grid.block.width": 1,
            "grid.block.color": j.gridBlockColor,
            text: "",
            "text.align": "left",
            "text.vAlign": "middle",
            "text.color": an,
            "text.font": ah,
            "text.shadow": !1,
            "text.shadow.color": ug,
            "text.shadow.blur": 6,
            "text.shadow.offset.x": 3,
            "text.shadow.offset.y": 3
        }, !0), Cf(Xl, {
            _76I: function (w, d, n) {
                this._39I && this._39I.fire({data: w, oldIndex: d, newIndex: n})
            }, addIndexChangeListener: function (Z, A, m) {
                var J = this;
                J._39I || (J._39I = new Nj), J._39I.add(Z, A, m)
            }, removeIndexChangeListener: function (L, l) {
                this._39I.remove(L, l)
            }, prepareRemove: function (H) {
                to(H) && (H.setSource(t), H.setTarget(t)), H._70O && H._70O.toList().each(this.remove, this), H._69O && H._69O.toList().each(function (D) {
                    D.setHost(t)
                }), H._host && H.setHost(t)
            }, onAdded: function (s) {
                this.isAutoAdjustIndex() && this.adjustIndex(s)
            }, onDataPropertyChanged: function (r, k) {
                gf[k.property] && this.isAutoAdjustIndex() && this.adjustIndex(r)
            }, isAdjustable: function (D) {
                return Sb(D) || to(D)
            }, isAdjustedToBottom: function (O) {
                return sj(O) ? O.isExpanded() && Ul(O) : !1
            }, adjustIndex: function (r) {
                var Y = this;
                this.isHierarchicalRendering() || (Y.isAdjustedToBottom(r) ? (Y.sendToBottom(r), r.eachChild(Y.adjustIndex, Y)) : Y.sendToTop(r))
            }, sendToTop: function ($) {
                var u = this;
                if (u.contains($) && u.isAdjustable($)) {
                    var q = u._datas;
                    if ($ !== q.get(u.size() - 1)) {
                        var G = q.indexOf($);
                        q.removeAt(G), q.add($), u._76I($, G, u.size() - 1)
                    }
                    if (to($)) {
                        var K = $._40I;
                        K && !u.isAdjustedToBottom(K) && u.sendToTop(K), K = $._41I, K && !u.isAdjustedToBottom(K) && u.sendToTop(K)
                    }
                    $._69O && $._69O.each(function (N) {
                        N.isRelatedTo($) || Sb($) && N.isLoopedHostOn($) || u.sendToTop(N)
                    }), $.ISubGraph || (!sj($) || $.isExpanded()) && $._adjustChildrenToTop && $.eachChild(function (f) {
                        to(f) || u.sendToTop(f)
                    })
                }
            }, sendToBottom: function (t, T) {
                var S = this;
                if (t !== T && S.contains(t) && S.isAdjustable(t) && (!T || S.contains(T))) {
                    var d = S._datas, m = d.remove(t), x = T ? S._datas.indexOf(T) : 0;
                    if (d.add(t, x), m !== x) {
                        S._76I(t, m, x);
                        var y = t._parent;
                        !y || y.ISubGraph || to(y) || S.sendToBottom(t._parent, t)
                    }
                }
            }
        }), Cf(eb, {
            ms_edit: function (h) {
                h._46O = function (p) {
                    var e = this, o = e.gv.dm(), V = o.getHistoryManager(), R = e._index, s = e._89I, L = e._node,
                        C = e._shape, O = e._edge, t = e._77I;
                    L && s ? (this.fi({
                        kind: "endEditRect",
                        event: p,
                        data: L,
                        direction: s
                    }), V && V.endInteraction()) : C && R >= 0 ? (e.fi({
                        kind: "endEditPoint",
                        event: p,
                        data: C,
                        index: R
                    }), V && V.endInteraction()) : O && R >= 0 ? (e.fi({
                        kind: "endEditPoint",
                        event: p,
                        data: O,
                        index: R
                    }), V && V.endInteraction()) : t && (e.fi({
                        kind: "endEditRotation",
                        event: p,
                        data: t
                    }), V && V.endInteraction())
                }, h._78I = function (d) {
                    var a = this;
                    a.autoScroll(d);
                    var E = a.gv.lp(d), h = a._index, x = a._89I, A = a._node, F = a._shape, W = a._edge, R = a._77I;
                    if (A && x) a._80O(E), a.fi({
                        kind: "betweenEditRect",
                        event: d,
                        data: A,
                        direction: x
                    }); else if (F && h >= 0) E.e = F.getPoints().get(h).e, F.setPoint(h, E), a.fi({
                        kind: "betweenEditPoint",
                        event: d,
                        data: F,
                        index: h
                    }); else if (W && h >= 0) {
                        var S = W.s(Nr);
                        E.e = S.get(h).e, S.set(h, E), W.fp(Nr, t, S), a.fi({
                            kind: "betweenEditPoint",
                            event: d,
                            data: W,
                            index: h
                        })
                    } else if (R) {
                        var Z = R.p(), M = R.getScale(), _ = s + o(E.y - Z.y, E.x - Z.x);
                        M.y < 0 && (_ += P), G(_) < .04 && (_ = 0), R.setRotation(_), a.fi({
                            kind: "betweenEditRotation",
                            event: d,
                            data: R
                        })
                    }
                }, h._80O = function (E) {
                    var e = this, j = e._node, n = e._rect, f = n.x, L = n.y, h = n.width, C = n.height, K = e._89I,
                        Y = e._anchor, y = e._matrix, E = y.tfi(E);
                    "northwest" === K ? n = Cc(E, {x: f + h, y: L + C}) : K === wq ? n = Cc({x: f, y: E.y}, {
                        x: f + h,
                        y: L + C
                    }) : "northeast" === K ? n = Cc({x: f, y: E.y}, {x: E.x, y: L + C}) : K === Ir ? n = Cc({
                        x: E.x,
                        y: L
                    }, {x: f + h, y: L + C}) : K === Pq ? n = Cc({x: f, y: L}, {
                        x: E.x,
                        y: L + C
                    }) : "southwest" === K ? n = Cc({x: E.x, y: L}, {x: f + h, y: E.y}) : "south" === K ? n = Cc({
                        x: f,
                        y: L
                    }, {x: f + h, y: E.y}) : "southeast" === K && (n = Cc({
                        x: f,
                        y: L
                    }, E)), j.setPosition(y.tf(n.x + n.width * Y.x, n.y + n.height * Y.y)), j.setWidth(n.width), j.setHeight(n.height)
                }, h._80I = function (B, D, c, y) {
                    var T = this, q = T.gv._zoom, X = (T.gv.getEditPointSize() + 2) / q;
                    return Nf({
                        x: D - X / 2,
                        y: c - X / 2,
                        width: X,
                        height: X
                    }, B) ? (T._89I !== y && (T._89I = y), !0) : !1
                }, h._79I = function (S, F, c) {
                    var f = this, R = f.gv, y = F ? R.getDataUI(F) : t, l = y ? y._55O : t;
                    if (l) {
                        var V, k, a, j, p = R._zoom, U = (R.getEditPointSize() + 2) / p, Q = R.lp(S);
                        if (Sb(F)) {
                            if (l._56O && Sb(F) && (k = l._98o, Nf({
                                x: k.x - U / 2,
                                y: k.y - U / 2,
                                width: U,
                                height: U
                            }, Q))) return f._77I = F, c && f.fi({
                                kind: "beginEditRotation",
                                event: S,
                                data: F
                            }), f.setCursor("crosshair"), !0;
                            if (l._43O && F instanceof xr) for (a = F.getPoints(), V = a.size() - 1; V >= 0; V--) if (k = a.get(V), Nf({
                                x: k.x - U / 2,
                                y: k.y - U / 2,
                                width: U,
                                height: U
                            }, Q)) return f._index = V, f._shape = F, c && f.fi({
                                kind: "beginEditPoint",
                                event: S,
                                data: F,
                                index: V
                            }), f.setCursor("crosshair"), !0;
                            if (l._42O) for (var C = F.getEditControlPoints(), L = ["northwest", -1, -1, Ir, -1, 0, "southwest", -1, 1, "south", 0, 1, "southeast", 1, 1, Pq, 1, 0, "northeast", 1, -1, wq, 0, -1], V = 0, j = C.length; j > V; V++) {
                                var Y = L[3 * V], D = C[V];
                                if (f._80I(Q, D.x, D.y, Y)) {
                                    f._node = F;
                                    var O = F.getWidth(), B = F.getHeight(), P = F.getAnchor();
                                    f._rect = {
                                        x: -O * P.x,
                                        y: -B * P.y,
                                        width: O,
                                        height: B
                                    }, f._anchor = P, f._matrix = F.getMatrix();
                                    var n = F.getRotation(), $ = m(n), _ = H(n), N = L[3 * V + 1] * kf(F.getScale().x),
                                        s = L[3 * V + 2] * kf(F.getScale().y),
                                        X = Math.atan2(-_ * N - $ * s, $ * N - _ * s),
                                        J = (Math.round(X / (Math.PI / 4)) + 8) % 8,
                                        w = [Ok, "nesw-resize", nm, "nwse-resize", Ok, "nesw-resize", nm, "nwse-resize"][J];
                                    return f.setCursor(w), c && f.fi({
                                        kind: "beginEditRect",
                                        event: S,
                                        data: F,
                                        direction: f._89I
                                    }), !0
                                }
                            }
                        }
                        if (l._43O && to(F) && F.s(bh) === ro && (a = F.s(Nr))) for (V = a.size() - 1; V >= 0; V--) if (k = a.get(V), Nf({
                            x: k.x - U / 2,
                            y: k.y - U / 2,
                            width: U,
                            height: U
                        }, Q)) return f._index = V, f._edge = F, c && f.fi({
                            kind: "beginEditPoint",
                            event: S,
                            data: F,
                            index: V
                        }), f.setCursor("crosshair"), !0
                    }
                    return !1
                }
            }, ms_gv: function (u) {
                u._currentSubGraph = t, u.upSubGraph = function () {
                    this.setCurrentSubGraph(Pc(this._currentSubGraph))
                }, u.isVisible = function (l) {
                    var Y = this;
                    if (Pc(l) !== Y._currentSubGraph) return !1;
                    if (to(l)) {
                        var L = l._40I, r = l._41I;
                        if (!L || !r) return !1;
                        if (!(l.s("edge.independent") || Y.isVisible(L) && Y.isVisible(r))) return !1;
                        if (l.isEdgeGroupHidden()) return !1
                    } else for (var G = l._parent; G && !G.ISubGraph;) {
                        if (sj(G) && (!G.isExpanded() || !Y.isVisible(G))) return !1;
                        G = G._parent
                    }
                    if (l._parent instanceof Fk && !Y.isVisible(l._parent)) return !1;
                    if (Y instanceof Fg) {
                        if (!l.s("3d.visible")) return !1
                    } else if (!l.s("2d.visible")) return !1;
                    return Y._visibleFunc ? Y._visibleFunc(l) : !0
                }, u.handleSelectionChange = function (i) {
                    var B = this;
                    i.datas.each(function (e) {
                        B.invalidateData(e);
                        var Z = e._parent;
                        sj(Z) && Sb(e) && e.s($k) && (B.invalidateData(Z), Z._49I && Z._49I.each(function (c) {
                            B.invalidateData(c)
                        }))
                    }), B.onSelectionChanged(i)
                }, u.onSelectionChanged = function (I) {
                    var b = this, M = b.sm();
                    if (1 === M.size() && ("set" === I.kind || "append" === I.kind)) {
                        var B = M.ld();
                        b.isAutoMakeVisible() && b.makeVisible(B), b.adjustIndex && b._dataModel.isAutoAdjustIndex() && b.adjustIndex(B)
                    }
                }, u.makeVisible = function (g) {
                    if (g) {
                        var Y = this, $ = Y.getDataUI ? Y.getDataUI(g) : Y.getData3dUI(g);
                        if ($) {
                            var A = g, d = Pc(g);
                            for (d !== Y._currentSubGraph && Y.setCurrentSubGraph(d); (A = A._parent) && A !== d;) sj(A) && A.setExpanded(!0);
                            Y._23I = g, Y.iv()
                        }
                    }
                }, u.getLabel = function (u) {
                    var F = u.getStyle(ri);
                    return F === f ? u.getName() : F
                }, u.getLabelBackground = function (U) {
                    return U.getStyle("label.background")
                }, u.getLabelColor = function (k) {
                    return k.getStyle("label.color")
                }, u.getLabel2 = function (B) {
                    return B.getStyle("label2")
                }, u.getLabel2Background = function (X) {
                    return X.getStyle("label2.background")
                }, u.getLabel2Color = function (k) {
                    return k.getStyle("label2.color")
                }, u.getNote = function (v) {
                    return v.getStyle(lk)
                }, u.getNoteBackground = function (N) {
                    return N.getStyle("note.background")
                }, u.getNote2 = function (G) {
                    return G.getStyle(ds)
                }, u.getNote2Background = function (w) {
                    return w.getStyle("note2.background")
                }, u.handleClick = function (E, U, g) {
                    var W = this;
                    U ? (W.fi({
                        kind: "clickData",
                        event: E,
                        data: U,
                        part: g
                    }), W.onDataClicked(U, E)) : (W.fi({kind: "clickBackground", event: E}), W.onBackgroundClicked(E))
                }, u.handleDoubleClick = function (e, f, G) {
                    var r = this;
                    Kr(e) && (f ? (r.fi({
                        kind: "doubleClickData",
                        event: e,
                        data: f,
                        part: G
                    }), r.onDataDoubleClicked(f, e, G), r.checkDoubleClickOnNote(e, f, G) || r.checkDoubleClickOnRotation && r.checkDoubleClickOnRotation(e, f, G) || (to(f) ? r.onEdgeDoubleClicked(f, e, G) : f.ISubGraph ? r.onSubGraphDoubleClicked(f, e, G) : sj(f) ? r.onGroupDoubleClicked(f, e, G) : f.IDoorWindow ? r.onDoorWindowDoubleClicked(f, e, G) : f.ICSGBox && r.onCSGBoxDoubleClicked(f, e, G))) : (r.fi({
                        kind: "doubleClickBackground",
                        event: e
                    }), r.onBackgroundDoubleClicked(e)))
                }, u.onSubGraphDoubleClicked = function (D) {
                    this.setCurrentSubGraph(D)
                }, u.onEdgeDoubleClicked = function (O, G) {
                    O.ISubGraph && !zp(G) ? this.setCurrentSubGraph(O) : O.s("edge.toggleable") && O.toggle()
                }, u.onGroupDoubleClicked = function (E) {
                    E.s("group.toggleable") && E.toggle()
                }, u.onDoorWindowDoubleClicked = function (_) {
                    _.s("dw.toggleable") && _.toggle(!0)
                }, u.onCSGBoxDoubleClicked = function (k, u) {
                    var D = this;
                    if (D instanceof Fg) {
                        var G = D.getHitFaceInfo(u);
                        G && G.face && k.s(G.face + ".toggleable") && k.toggleFace(G.face, !0)
                    }
                }, u.onBackgroundClicked = function () {
                }, u.onBackgroundDoubleClicked = function () {
                    this.upSubGraph()
                }, u.onDataClicked = function () {
                }, u.onDataDoubleClicked = function () {
                }, u.onAutoLayoutEnded = function () {
                }, u.onMoveEnded = function () {
                }, u.onPanEnded = function () {
                }, u.onPinchEnded = function () {
                }, u.onRectSelectEnded = function () {
                }, u.onZoomEnded = function () {
                }
            }, ms_icons: function (M) {
                M.getRotation = function (J) {
                    return J == t ? 0 : J
                }, M._15O = function () {
                    var l = this, Z = l.s(_k);
                    if (Z) {
                        var k = l, u = l.data || l._data, o = l._38o = {icons: Z, rects: {}};
                        for (var F in Z) {
                            var q = Z[F], R = Uo(q.shape3d, u, k);
                            if (!(Uo(q.visible, u, k) === !1 || Uo(q.for3d, u, k) && !l.I3d || R && !l.I3d)) {
                                var e = R ? [R] : Uo(q.names, u, k), z = e ? e.length : 0,
                                    I = Uo(q.position, u, k) || 3, G = Uo(q.offsetX, u, k) || 0,
                                    P = Uo(q.offsetY, u, k) || 0, J = Uo(q.direction, u, k) || Pq, b = Uo(q.gap, u, k),
                                    a = b != t ? b : 1, C = Uo(q.rotation, u, k), g = Uo(q.keepOrien, u, k),
                                    E = Uo(q.rotationFixed, u, k) ? C : l.getRotation(C, g, I), H = t,
                                    d = o.rects[F] = new Array(z);
                                d.rotation = E;
                                for (var j = 0; z > j; j++) {
                                    var m, y, i, V, L = e[j];
                                    if (R) i = 0, V = 0; else {
                                        var s = nj(L);
                                        i = Uo(q.width, u, k), V = Uo(q.height, u, k), i == t && (i = ko(s, u)), V == t && (V = Rh(s, u))
                                    }
                                    if (H ? J === Pq ? G += i / 2 : J === Ir ? G -= i / 2 : J === wq ? P -= V / 2 : P += V / 2 : H = {
                                        width: i,
                                        height: V
                                    }, l.I3d) {
                                        var $ = -i / 2, _ = -V / 2;
                                        y = {
                                            width: i,
                                            height: V,
                                            mat: l._16O(Uo(q.autorotate, u, k), I, H, Uo(q.face, u, k) || Fe, Uo(q.t3, u, k), Uo(q.r3, u, k), Uo(q.rotationMode, u, k), G, P),
                                            vs: new me([$, -_, 0, $, -_ - V, 0, $ + i, -_ - V, 0, $ + i, -_, 0])
                                        }
                                    } else m = l.getPosition(I, G, P, H, Uo(q.positionFixed, u, k)), y = {
                                        x: m.x - i / 2,
                                        y: m.y - V / 2,
                                        width: i,
                                        height: V
                                    }, l._68o(y, E);
                                    d[j] = y, J === Pq ? G += i / 2 + a : J === Ir ? G -= i / 2 + a : J === wq ? P -= V / 2 + a : P += V / 2 + a
                                }
                            }
                        }
                    }
                }
            }
        });
        var Qf = {
                1: 1,
                2: 1,
                6: 1,
                9: 1,
                10: 1,
                14: 1,
                15: 1,
                16: 1,
                21: 1,
                22: 1,
                26: 1,
                29: 1,
                30: 1,
                34: 1,
                36: 1,
                38: 1,
                40: 1,
                42: 1,
                45: 1,
                50: 1,
                52: 1,
                54: 1
            }, Pf = {3: 1, 7: 1, 11: 1, 17: 1, 23: 1, 27: 1, 31: 1, 44: 1, 46: 1, 47: 1, 49: 1},
            Xd = {translateX: 1, translateY: 1, zoom: 1, scrollBarVisible: 1},
            gf = {sourceAgent: 1, targetAgent: 1, expanded: 1, parent: 1, host: 1},
            Vr = {position: 1, width: 1, height: 1, expanded: 1, rotation: 1, anchor: 1, scale: 1, "s:edge.points": 1},
            Bi = {"edge.type": 1, "edge.group": 1}, il = {rotation: 1, rotationX: 1, rotationZ: 1}, Om = {
                position: 1,
                width: 1,
                height: 1,
                anchor: 1,
                scale: 1,
                "s:grid.row.count": 1,
                "s:grid.column.count": 1,
                "s:grid.row.percents": 1,
                "s:grid.column.percents": 1,
                "s:grid.border": 1,
                "s:grid.border.left": 1,
                "s:grid.border.right": 1,
                "s:grid.border.top": 1,
                "s:grid.border.bottom": 1,
                "s:grid.gap": 1
            }, Zm = {
                "attach.row.index": 1,
                "attach.column.index": 1,
                "attach.row.span": 1,
                "attach.column.span": 1,
                "attach.padding": 1,
                "attach.padding.left": 1,
                "attach.padding.right": 1,
                "attach.padding.top": 1,
                "attach.padding.bottom": 1,
                "attach.index": 1,
                "attach.offset": 1,
                "attach.offset.relative": 1,
                "attach.offset.opposite": 1,
                "attach.gap": 1,
                "attach.gap.relative": 1,
                "attach.thickness": 1
            }, Jp = {shape: 1, thickness: 1, position: 1, anchor: 1, scale: 1}, uj = function (o, M) {
                if (!o || !sj(M) || M.isEmpty()) return !1;
                for (o = o._parent; sj(o);) {
                    if (o === M) return !0;
                    o = o._parent
                }
                return !1
            }, co = function (N, B) {
                if (!N || !Lf(B) || B.isEmpty()) return !1;
                for (N = N._parent; Lf(N);) {
                    if (N === B) return !0;
                    N = N._parent
                }
                return !1
            }, Pc = function (U) {
                if (!U) return t;
                if (to(U)) {
                    var w = U._40I, c = U._41I;
                    if (!w || !c) return t;
                    var W = Pc(w), f = Pc(c);
                    return W === f ? W : t
                }
                for (var A = U._parent; to(A) && !A.ISubGraph;) A = A._parent;
                return A ? A.ISubGraph ? A : Pc(A) : t
            }, ap = function (_, p, G, d) {
                var v = p.getStyle(G) * d;
                v && pk(_, v), v = p.getStyle(G + ".left") * d, v && (_.x -= v, _.width += v), v = p.getStyle(G + ".right") * d, v && (_.width += v), v = p.getStyle(G + ".top") * d, v && (_.y -= v, _.height += v), v = p.getStyle(G + ".bottom") * d, v && (_.height += v), _.width < 0 && (_.width = -_.width, _.x -= _.width), _.height < 0 && (_.height = -_.height, _.y -= _.height)
            }, Ul = function (x) {
                for (var h, l = 0, M = x.size(); M > l; l++) if (h = x.getChildAt(l), Sb(h) && Ul(h)) return !0;
                return x.hasAgentEdges()
            }, Wh = function (S) {
                if (!S) return t;
                for (var X = S._parent; sj(X);) {
                    if (!sj(X._parent)) return X.isExpanded() ? S : X;
                    X.isExpanded() || (S = X), X = X._parent
                }
                return S
            }, qk = function (F, j) {
                if (!F || !j) return t;
                var n, p, J, z = Pc(F), H = Pc(j);
                if (z !== H) {
                    for (; H && z !== H;) H = Pc(H);
                    if (z === H) return F;
                    n = new Gn, n.add(F, 0);
                    for (var _ = F._parent; Sb(_) && !j.isDescendantOf(_);) n.add(_, 0), _ = _._parent;
                    for (J = n.size(), p = 0; J > p; p++) {
                        var b = n.get(p);
                        if (sj(b) && !b.isExpanded()) return b;
                        if (b.ISubGraph) return b
                    }
                    return F
                }
                return F
            }, Ig = function (l) {
                if (l.isLooped()) return l._source;
                var V = Wh(l._source), q = Wh(l._target);
                return V === q ? l._source : qk(V, q)
            }, gh = function (C) {
                if (C.isLooped()) return C._target;
                var p = Wh(C._source), R = Wh(C._target);
                return p === R ? C._target : qk(R, p)
            }, ci = function (T, M, p, R, J, Z, A) {
                if (!M) return t;
                var z;
                if (Z !== f || A !== f) {
                    Z = Z === f ? .5 : Z, A = A === f ? .5 : A;
                    var $ = M.getRotation() || 0;
                    if ($) {
                        var Q = M.getPosition(), i = M.getWidth(), h = M.getHeight(), k = M.getAnchor(), I = M.getScale(),
                            c = new Vh($, Q.x, Q.y, I.x, I.y);
                        p = c.tf((Z - k.x) * i, (A - k.y) * h)
                    } else z = qr(T, M), p = {x: z.x + Z * z.width, y: z.y + A * z.height}
                } else p = Ym(p, qr(T, M));
                return p.x += R, p.y += J, p
            }, Cp = function (X, J) {
                if (!X || !J) return t;
                var C, V, z, p, F, Z;
                if (X === J) {
                    if (p = X.getLoopedEdges(), !p) return t;
                    p = new Gn(p)
                } else {
                    if (F = X.getAgentEdges(), Z = J.getAgentEdges(), !F || !Z) return t;
                    for (V = F.size(), C = 0; V > C; C++) z = F.get(C), Z.contains(z) && (p || (p = new Gn), p.add(z))
                }
                if (p) for (C = 0; C < p.size(); C++) z = p.get(C), z.getStyle(bh) === ro && (z._22I(t), p.removeAt(C), C--);
                return p
            }, Ui = function (Q, X) {
                var j = Cp(Q, X);
                if (j && !j.isEmpty()) {
                    if (1 === j.size()) return j.get(0)._22I(t), void 0;
                    var C = new Gn, q = new Gn;
                    j.each(function (D) {
                        var h = D.s("edge.group");
                        C.contains(h) || C.add(h)
                    }), C.sort(), C.each(function (b) {
                        q.add(new U.EdgeGroup(j.toList(function (v) {
                            return b === v.s("edge.group")
                        }), q))
                    }), q.each(function (l) {
                        l.each(function (D) {
                            D._22I(l)
                        })
                    })
                }
            }, Ab = function (k, Y) {
                if (Y) {
                    var q = Y.rect, C = Y.color, I = Y.rotation, T = Y.labelWidth, x = Y.background, g = Y.opacity,
                        L = Y.scale, J = L != t && 1 !== L;
                    if (g != t) {
                        var B = k.globalAlpha;
                        k.globalAlpha *= g
                    }
                    if (I || J) {
                        k.save();
                        var r = q.x + q.width / 2, b = q.y + q.height / 2;
                        tq(k, r, b), I && ac(k, I), J && k.scale(L, L), tq(k, -r, -b)
                    }
                    if (x && ip(k, q.x, q.y, q.width, q.height, x), T) {
                        var V = q.width, l = k.createLinearGradient(q.x, q.y, q.x + V, q.y);
                        l.addColorStop(0, C), l.addColorStop(.9, C), l.addColorStop(1, Qq), C = l, q.width = T
                    }
                    Od(k, Y.ss, q, Y.font, C, Y.align), T && (q.width = V), (I || J) && k.restore(), g != t && (k.globalAlpha = B)
                }
            }, Rf = function (v, O) {
                if (O) {
                    var Q = O.rect, S = Q.x, X = Q.y, r = Q.width, c = Q.height, T = O.background, V = O.backgroundImage,
                        w = O.borderWidth, k = O.borderColor, H = O.labelWidth, h = O.opacity, N = O.scale,
                        m = N != t && 1 !== N;
                    if (h != t) {
                        var F = v.globalAlpha;
                        v.globalAlpha *= h
                    }
                    if (m) {
                        v.save();
                        var D = Q.x + Q.width / 2, d = Q.y + Q.height / 2;
                        tq(v, D, d), v.scale(N, N), tq(v, -D, -d)
                    }
                    if (O.expanded) {
                        var I = _(8, r / 4), g = X + c - 8;
                        if (v.fillStyle = T, v.beginPath(), v.moveTo(S, X), v.lineTo(S, g), v.lineTo(S + r / 2, g), v.lineTo(S + r / 2, X + c), v.lineTo(S + r / 2 + I, g), v.lineTo(S + r, g), v.lineTo(S + r, X), v.closePath(), v.fill(), w && (v.lineWidth = w, v.lineJoin = "round", v.lineCap = "round", k ? (v.strokeStyle = k, v.stroke()) : (v.strokeStyle = ph(T), v.beginPath(), v.moveTo(S + r, X), v.lineTo(S + r, g), v.lineTo(S + r / 2 + I, g), v.lineTo(S + r / 2, X + c), v.stroke(), v.strokeStyle = cp(T), v.beginPath(), v.moveTo(S + r, X), v.lineTo(S, X), v.lineTo(S, g), v.lineTo(S + r / 2, g), v.lineTo(S + r / 2, X + c), v.stroke())), V) Gi(v, nj(V), Ih, Q.x, Q.y, Q.width, Q.height - 8, O.data, O.view); else {
                            if (Q.height -= 8, T = O.color, H) {
                                var x = r, U = v.createLinearGradient(S, X, S + x, X);
                                U.addColorStop(0, T), U.addColorStop(.9, T), U.addColorStop(1, Qq), T = U, Q.width = H
                            }
                            Od(v, O.ss, Q, O.font, T, O.align), H && (Q.width = x), Q.height += 8
                        }
                    } else if (O.icon) _j(v, nj(O.icon), S, X, r, c, O.data, O.view); else {
                        var z = r / 2;
                        w && (v.lineWidth = w, v.lineJoin = "round", v.lineCap = "round", v.strokeStyle = k ? k : ph(T), v.beginPath(), v.arc(S + z, X + z, z, s, 1.6 * P, !0), v.moveTo(S + z, X + c), v.lineTo(S + r - z / 5, X + z), v.stroke(), v.strokeStyle = k ? k : cp(T), v.beginPath(), v.arc(S + z, X + z, z, 1.6 * P, s, !0), v.moveTo(S + z, X + c), v.lineTo(S + z / 5, X + z), v.stroke()), v.fillStyle = T, v.beginPath(), v.arc(S + z, X + z, z, 0, n, !0), v.moveTo(S + z, X + c), v.lineTo(S + r - z / 5, X + z), v.lineTo(S + z / 5, X + z), v.closePath(), v.fill(), v.fillStyle = O.color, v.beginPath(), v.arc(S + z, X + z, z / 3, 0, n, !0), v.fill()
                    }
                    m && v.restore(), h != t && (v.globalAlpha = F)
                }
            }, nh = function (N, V) {
                return V > 2 * N ? N : V / 2
            }, Cb = function (a, W, I, k) {
                if (!a || !W) return 0;
                var w = o(W.y - a.y, W.x - a.x);
                return I || (w = W.x < a.x ? w + P : w), w + k
            }, om = function (L, F, q, k, j, s, i) {
                i && (L.x > F.x || L.x === F.x && L.y > F.y) && (q = dh[q], j = -j);
                var z = Ym(q, {x: 0, y: 0, width: Lb(L, F), height: 0}, s);
                return z.x += k, z.y += j, z = new Vh(o(F.y - L.y, F.x - L.x)).tf(z), z.x += L.x, z.y += L.y, z
            }, cq = function (y, r, j, q, n) {
                if (y._19Q = !0, !j.getEdgeGroup()) return q ? j.s("edge.gap") : 0;
                var N, F = 0, $ = 0, Q = 0;
                if (j.getEdgeGroup().getSiblings().each(function (K) {
                    K.each(function (e) {
                        if (r.isVisible(e) && e.s(bh) == n) {
                            var w = e.s("edge.gap");
                            N ? ($ += Q / 2 + w / 2, Q = w) : (N = e, Q = w), e === j && (F = $)
                        }
                    })
                }), q) return $ - F + Q;
                var V = F - $ / 2;
                return N && j._40I !== N._40I && (y._19Q = !1), V
            }, qo = function () {
                var h = function (w) {
                    var Y = [];
                    return w.forEach(function (S) {
                        Y.push({x: S.x, y: S.y}), Y.push({x: S.x + S.width, y: S.y + S.height}), Y.push({
                            x: S.x + S.width,
                            y: S.y
                        }), Y.push({x: S.x, y: S.y + S.height})
                    }), Y
                };
                return function (K, $, V) {
                    if ("oval" === K) {
                        var D = 0, E = V.height / V.width, k = E * E, t = V.x + V.width / 2, Q = V.y + V.height / 2,
                            U = h($);
                        U.forEach(function (j) {
                            var U = j.x - t, g = j.y - Q, F = U * U + g * g / k;
                            F > D && (D = F)
                        }), D = g(D);
                        var j = E * D;
                        return {x: t - D, y: Q - j, width: 2 * D, height: 2 * j}
                    }
                    if ("circle" === K) {
                        var L = 0, t = V.x + V.width / 2, Q = V.y + V.height / 2, U = h($);
                        return U.forEach(function (G) {
                            var v = G.x - t, g = G.y - Q, $ = v * v + g * g;
                            $ > L && (L = $)
                        }), L = g(L), {x: t - L, y: Q - L, width: 2 * L, height: 2 * L}
                    }
                    return "roundRect" === K ? (pk(V, _(V.width, V.height) / 16), V) : V
                }
            }(), ji = U.graph = {}, jj = function (Y, x, p) {
                zb(e + ".graph." + Y, x, p)
            };
        U.layout = {};
        var Um = {
            comps: [{
                type: qi,
                points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 56, 81, 89, 112, 90, 113, 100, 66, 121, 88, 115, 80, 85, 88, 90, 100, 71, 85, 102, 109, 108, 87, 55, 76, 56, 100, 75, 115, 76, 107, 113, 108, 56, 61],
                borderWidth: 1,
                borderColor: t
            }]
        };
        Um[$n] = Um[uf] = 160, xe("node_image", zd(30, 30, [{
            type: $d,
            rect: [4, 5, 22, 16],
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }, {type: $d, rect: [2, 3, 26, 20], borderWidth: 1, borderColor: qq}, {
            type: $d,
            rect: [11, 23, 8, 4],
            background: qq
        }, {type: $d, rect: [6, 27, 18, 2], background: qq}])), xe("node_icon", zd(16, 16, [{
            type: $d,
            rect: [2, 2, 12, 10],
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }, {type: ho, rect: [2, 2, 12, 10], width: 1, color: qq}, {
            type: $d,
            rect: [6, 12, 4, 2],
            background: qq
        }, {type: $d, rect: [4, 14, 8, 1], background: qq}])), xe("block_icon", zd(16, 16, [{
            type: ho,
            rect: [1, 1, 14, 14],
            width: 1,
            color: qq
        }])), xe("group_image", zd(66, 39, [{
            type: $d,
            rect: [44.3, 18, 18.1, 12.8],
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }, {type: $d, rect: [3.3, 17.8, 18.1, 12.8], gradient: Pg, gradientColor: Qd, background: qq}, {
            type: $d,
            rect: [15.8, 3.2, 33.5, 26.4],
            borderWidth: 1,
            borderColor: qq,
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }, {type: $d, rect: [26.2, 29.4, 12.8, 4.2], background: qq}, {
            type: $d,
            rect: [21.3, 33.5, 22.5, 2.3],
            background: qq
        }, {type: $d, rect: [5.3, 32.7, 14.1, 2.1], background: qq}, {
            type: $d,
            rect: [9, 30.4, 6.7, 2.4],
            background: qq
        }, {type: $d, rect: [50, 30.7, 6.7, 2.4], background: qq}, {
            type: $d,
            rect: [46.3, 33, 14.1, 2.1],
            background: qq
        }])), xe("group_icon", zd(16, 16, [{type: $d, rect: [4, 12, 4, 2], background: qq}, {
            type: $d,
            rect: [2, 13, 8, 1],
            background: qq
        }, {type: $d, rect: [12, 12, 2, 1], background: qq}, {
            type: $d,
            rect: [11, 13, 4, 1],
            background: qq
        }, {type: $d, rect: [10, 7, 6, 5], gradient: Pg, gradientColor: Qd, background: qq}, {
            type: $d,
            rect: [1, 2, 10, 10],
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }, {type: ho, rect: [1, 2, 10, 10], width: 1, color: qq}])), xe("edge_icon", zd(16, 16, [{
            type: $d,
            rect: [2.1, 6.9, 11.5, 2.6],
            rotation: -.79,
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }, {type: $d, rect: [10.8, 1, 4, 4], background: qq}, {
            type: $d,
            rect: [1, 11, 4, 4],
            background: qq
        }])), xe("subGraph_image", zd(72, 45, [{
            type: qi,
            points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
            segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }, {type: $d, rect: [29.6, 30.7, 3.6, 1.8], background: qq}, {
            type: $d,
            rect: [28.4, 32.3, 6, 1.2],
            background: qq
        }, {type: $d, rect: [37.3, 32, 10.8, 1.8], background: qq}, {
            type: $d,
            rect: [39.1, 29.9, 7.2, 2.3],
            background: qq
        }, {type: $d, rect: [26.6, 23.7, 9.6, 7.2], gradient: Pg, gradientColor: Qd, background: qq}, {
            type: $d,
            rect: [34.3, 16.8, 16.8, 13.2],
            borderWidth: 1,
            borderColor: qq,
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }])), xe("subGraph_icon", zd(17, 17, [{
            type: qi,
            points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
            segments: [1, 3, 3, 3, 3, 3],
            gradient: Pg,
            gradientColor: Qd,
            background: qq
        }])), xe("shape_icon", zd(16, 16, [{
            type: qi,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            background: qq
        }])), xe("polyline_icon", zd(16, 16, [{
            type: qi,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            borderWidth: 1,
            borderColor: qq
        }, cc(7.5, .4), cc(7.5, 6.3), cc(13.6, 6.3), cc(13.6, 14), cc(.7, 13.9), cc(.7, .3)])), xe("grid_icon", zd(16, 16, [{
            type: $d,
            rect: [1, 1, 4, 4],
            background: qq,
            gradient: Pg,
            gradientColor: Qd
        }, {type: $d, rect: [6, 1, 4, 4], background: qq, gradient: Pg, gradientColor: Qd}, {
            type: $d,
            rect: [11, 1, 4, 4],
            background: qq,
            gradient: Pg,
            gradientColor: Qd
        }, {type: $d, rect: [11, 6, 4, 4], background: qq, gradient: Pg, gradientColor: Qd}, {
            type: $d,
            rect: [6, 6, 4, 4],
            background: qq,
            gradient: Pg,
            gradientColor: Qd
        }, {type: $d, rect: [1, 6, 4, 4], background: qq, gradient: Pg, gradientColor: Qd}, {
            type: $d,
            rect: [11, 11, 4, 4],
            background: qq,
            gradient: Pg,
            gradientColor: Qd
        }, {type: $d, rect: [6, 11, 4, 4], background: qq, gradient: Pg, gradientColor: Qd}, {
            type: $d,
            rect: [1, 11, 4, 4],
            background: qq,
            gradient: Pg,
            gradientColor: Qd
        }])), xe("light_icon", zd(16, 16, [{
            type: "rect",
            rect: [6, 9, 5, 5],
            borderWidth: 1,
            borderColor: qq
        }, {
            type: "circle",
            rect: [1, 1, 15, 10],
            borderWidth: 1,
            borderColor: qq,
            gradient: Pg,
            gradientColor: Qd,
            background: {
                func: function (a) {
                    var J = a ? a.s(hg) : t;
                    return od(J) ? "rgb(" + M(255 * J[0]) + "," + M(255 * J[1]) + "," + M(255 * J[2]) + ")" : J || qq
                }
            }
        }])), xe("text_icon", zd(16, 16, [{
            type: "shape",
            points: [3, 3, 13, 3, 8, 3, 8, 14],
            segments: [1, 2, 1, 2],
            borderWidth: 1,
            borderColor: qq
        }])), xe("border_image", {
            fitSize: !0,
            comps: [{
                type: "border",
                relative: !0,
                rect: [0, 0, 1, 1],
                color: {func: "style@border_color"},
                width: {func: "style@border_width"}
            }]
        }), xe("columnChart_image", {
            fitSize: !0,
            comps: [{
                type: {func: "style@chart.type"},
                relative: !0,
                rect: [0, 0, 1, 1],
                label: {func: "style@chart.label"},
                labelColor: {func: "style@chart.label.color"},
                labelFont: {func: "style@chart.label.font"},
                series: {func: "style@chart.series"},
                minValue: {func: "style@chart.min.value"},
                maxValue: {func: "style@chart.max.value"}
            }]
        }), xe("lineChart_image", {
            fitSize: !0,
            comps: [{
                type: "lineChart",
                relative: !0,
                rect: [0, 0, 1, 1],
                label: {func: "style@chart.label"},
                labelColor: {func: "style@chart.label.color"},
                labelFont: {func: "style@chart.label.font"},
                series: {func: "style@chart.series"},
                minValue: {func: "style@chart.min.value"},
                maxValue: {func: "style@chart.max.value"},
                linePoint: {func: "style@chart.line.point"},
                lineWidth: {func: "style@chart.line.width"},
                line3d: {func: "style@chart.line.3d"}
            }]
        }), xe("pieChart_image", {
            fitSize: !0,
            comps: [{
                type: "pieChart",
                relative: !0,
                rect: [0, 0, 1, 1],
                label: {func: "style@chart.label"},
                labelColor: {func: "style@chart.label.color"},
                labelFont: {func: "style@chart.label.font"},
                hollow: {func: "style@chart.hollow"},
                startAngle: {func: "style@chart.start.angle"},
                values: {func: "style@chart.values"},
                colors: {func: "style@chart.colors"}
            }]
        });
        var pr = function (P, K) {
            for (var c = P.vertices, I = 0; I < c.length; I++) {
                var S = c[I], u = S.y;
                S.y = S.z, S.z = -u, K && (S.y += K)
            }
        }, Qi = function (j) {
            for (var h, l, G, y, E, g, T = [], t = [], x = [], C = j.faces, K = 0, X = 0, Q = 0, H = C.length; H > K; K++, X += 6, Q += 9) {
                var w = C[K];
                1 === w.i ? (h || (h = [], l = [], G = []), df(w, K, X, Q, j, h, G, l)) : 2 === w.i ? (y || (y = [], E = [], g = []), df(w, K, X, Q, j, y, g, E)) : df(w, K, X, Q, j, T, x, t)
            }
            return {vs: T, uv: t, ns: x, top_vs: h, top_uv: l, top_ns: G, bottom_vs: y, bottom_uv: E, bottom_ns: g}
        }, df = function (A, Q, P, D, L, S, c, C) {
            var k = L.vertices, p = L.faceVertexUvs, N = k[A.a], z = k[A.b], E = k[A.c];
            S[D] = N.x, S[D + 1] = N.y, S[D + 2] = N.z, S[D + 3] = z.x, S[D + 4] = z.y, S[D + 5] = z.z, S[D + 6] = E.x, S[D + 7] = E.y, S[D + 8] = E.z;
            var J = A.vertexNormals;
            if (3 === J.length) {
                var e = J[0], v = J[1], l = J[2];
                c[D] = e.x, c[D + 1] = e.y, c[D + 2] = e.z, c[D + 3] = v.x, c[D + 4] = v.y, c[D + 5] = v.z, c[D + 6] = l.x, c[D + 7] = l.y, c[D + 8] = l.z
            } else {
                var T = A.normal;
                c[D] = T.x, c[D + 1] = T.y, c[D + 2] = T.z, c[D + 3] = T.x, c[D + 4] = T.y, c[D + 5] = T.z, c[D + 6] = T.x, c[D + 7] = T.y, c[D + 8] = T.z
            }
            var s = p[0][Q][0], M = p[0][Q][1], q = p[0][Q][2];
            C[P] = s.x, C[P + 1] = s.y, C[P + 2] = M.x, C[P + 3] = M.y, C[P + 4] = q.x, C[P + 5] = q.y
        }, Ki = function (Y, b, P, e, X, A, I, k, C) {
            P == t && (P = !0), e == t && (e = !0), I == t && (I = 1), k == t && (k = 0);
            var S = new gc;
            return im(S, Y, b, C), S = S.toShapes(), Qi(new Tg(S, {
                top: P,
                bottom: e,
                curveSegments: X,
                amount: I,
                repeatUVLength: A
            }, -I / 2 + k))
        }, pd = function (y, x) {
            this.x = y || 0, this.y = x || 0
        };
        pd.prototype = {
            constructor: pd, add: function (t) {
                return this.x += t.x, this.y += t.y, this
            }, sub: function (Y) {
                return this.x -= Y.x, this.y -= Y.y, this
            }, equals: function (u) {
                return u.x === this.x && u.y === this.y
            }, multiplyScalar: function (y) {
                return this.x *= y, this.y *= y, this
            }, distanceTo: function (V) {
                return g(this.distanceToSquared(V))
            }, distanceToSquared: function (s) {
                var c = this.x - s.x, o = this.y - s.y;
                return c * c + o * o
            }, clone: function () {
                return new pd(this.x, this.y)
            }
        };
        var xi = function (y, R, c) {
            this.x = y || 0, this.y = R || 0, this.z = c || 0
        };
        xi.prototype = {
            constructor: xi, set: function (p, R, f) {
                return this.x = p, this.y = R, this.z = f, this
            }, setY: function (F) {
                return this.y = F, this
            }, copy: function (P) {
                return this.x = P.x, this.y = P.y, this.z = P.z, this
            }, add: function (V) {
                return this.x += V.x, this.y += V.y, this.z += V.z, this
            }, addVectors: function (C, s) {
                return this.x = C.x + s.x, this.y = C.y + s.y, this.z = C.z + s.z, this
            }, sub: function (w) {
                return this.x -= w.x, this.y -= w.y, this.z -= w.z, this
            }, subVectors: function (A, P) {
                return this.x = A.x - P.x, this.y = A.y - P.y, this.z = A.z - P.z, this
            }, multiplyScalar: function (v) {
                return this.x *= v, this.y *= v, this.z *= v, this
            }, applyMatrix4: function (p) {
                var S = this.x, J = this.y, a = this.z, v = p.elements;
                return this.x = v[0] * S + v[4] * J + v[8] * a + v[12], this.y = v[1] * S + v[5] * J + v[9] * a + v[13], this.z = v[2] * S + v[6] * J + v[10] * a + v[14], this
            }, divideScalar: function (y) {
                if (0 !== y) {
                    var A = 1 / y;
                    this.x *= A, this.y *= A, this.z *= A
                } else this.x = 0, this.y = 0, this.z = 0;
                return this
            }, dot: function (h) {
                return this.x * h.x + this.y * h.y + this.z * h.z
            }, length: function () {
                return g(this.x * this.x + this.y * this.y + this.z * this.z)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, cross: function (A) {
                var h = this.x, a = this.y, $ = this.z;
                return this.x = a * A.z - $ * A.y, this.y = $ * A.x - h * A.z, this.z = h * A.y - a * A.x, this
            }, crossVectors: function (e, z) {
                var O = e.x, M = e.y, g = e.z, L = z.x, X = z.y, J = z.z;
                return this.x = M * J - g * X, this.y = g * L - O * J, this.z = O * X - M * L, this
            }, distanceTo: function (k) {
                return g(this.distanceToSquared(k))
            }, distanceToSquared: function (j) {
                var g = this.x - j.x, I = this.y - j.y, q = this.z - j.z;
                return g * g + I * I + q * q
            }, clone: function () {
                return new xi(this.x, this.y, this.z)
            }
        };
        var Co = function () {
            this.elements = new Float32Array(16)
        };
        Co.prototype = {
            constructor: Co, set: function (n, N, Q, x, K, C, _, f, Z, g, j, c, X, V, A, J) {
                var v = this.elements;
                return v[0] = n, v[4] = N, v[8] = Q, v[12] = x, v[1] = K, v[5] = C, v[9] = _, v[13] = f, v[2] = Z, v[6] = g, v[10] = j, v[14] = c, v[3] = X, v[7] = V, v[11] = A, v[15] = J, this
            }, makeRotationAxis: function (c, L) {
                var q = m(L), S = H(L), o = 1 - q, _ = c.x, $ = c.y, g = c.z, K = o * _, O = o * $;
                return this.set(K * _ + q, K * $ - S * g, K * g + S * $, 0, K * $ + S * g, O * $ + q, O * g - S * _, 0, K * g - S * $, O * g + S * _, o * g * g + q, 0, 0, 0, 0, 1), this
            }
        };
        var $m = function (f) {
            this.repeatUVLength = f
        };
        $m.prototype = {
            generateTopUV: function (I, l, W, Y, w, f, Q) {
                var c, o, g, k, r = I.vertices, $ = r[Y].x, S = r[Y].y, d = r[w].x, N = r[w].y, q = r[f].x, P = r[f].y,
                    C = this.repeatUVLength;
                if (C) c = 0, o = 0, g = C, k = C; else {
                    this._bb || (this._bb = l.getBoundingBox());
                    var t = this._bb;
                    c = t.minX, o = t.minY, g = t.maxX - c, k = t.maxY - o
                }
                return Q ? [new pd(($ - c) / g, (S - o) / k), new pd((d - c) / g, (N - o) / k), new pd((q - c) / g, (P - o) / k)] : [new pd(($ - c) / g, 1 - (S - o) / k), new pd((d - c) / g, 1 - (N - o) / k), new pd((q - c) / g, 1 - (P - o) / k)]
            }, generateBottomUV: function (e, U, P, N, $, c) {
                return this.generateTopUV(e, U, P, N, $, c, !0)
            }, generateSideWallUV: function (q, r, R, I, Q, f, U, Y, L, u, Z, x) {
                if (!this._cl) {
                    for (var s, O, E = [], X = 0, l = R.length, N = 0; l > N; N++) {
                        s = R[N], O = R[(N + 1) % l];
                        var d = s.x - O.x, B = s.y - O.y, n = g(d * d + B * B);
                        E.push(X), X += n
                    }
                    for (var N = 0; l > N; N++) E[N] /= X;
                    this._cl = E
                }
                var E = this._cl, e = 1 - L / u, $ = 1 - (L + 1) / u, o = E[Z], W = E[x];
                return W > o && (o += 1), [new pd(o, e), new pd(W, e), new pd(W, $), new pd(o, $)]
            }
        };
        var pi = function (e, d, T, C, J, l) {
            this.a = e, this.b = d, this.c = T, this.i = l, this.normal = C instanceof xi ? C : new xi, this.vertexNormals = C instanceof Array ? C : []
        };
        pi.prototype = {constructor: pi};
        var qh = [-8, 12, 2, 14, 3, 10, 4, 4, -1], kr = function () {
            if (kr[be] != t) return kr[be];
            for (var h = No[be], X = qh, _ = xd.prototype.getClassName(), Z = '"', V = 0, E = "", B = !1, l = +new (R[_.substr(3, 3) + Ok[V]]), y = V; y < X.length; y++) {
                var f = X.length - y;
                E += y % 2 === V ? X[y] + f + "" : X[y] - f + ""
            }
            for (var y = V; 4 > y; y++) E += V;
            if (E = E * E.length / E.length, l > E) {
                if (h) {
                    for (var O, i, J, v, T, x, P, C, b = "", c = 0, y = 0; y < h.length; y++) h[y] === Z ? C ? (C = !1, 0 !== c % 2 && (O ? i ? J ? v ? T ? x ? P || (P = b) : x = b : T = b : v = b : J = b : i = b : O = b), c++, b = "") : C = !0 : C && (b += h[y]);
                    var K = O + i + J + T + x;
                    (B = jk(K, P)) && i.indexOf(Be[0]) >= 0 && (kr[Be[0]] = 1), B && i.indexOf(1) > 0 && (kr[1] = 1)
                }
            } else B = !0, kr[Be[0]] = kr[1] = 1;
            return kr[be] = B, B
        }, Gd = function () {
        }, bi = Gd.prototype;
        bi.getPointAt = function (l) {
            var o = this.getUtoTmapping(l);
            return this.getPoint(o)
        }, bi.getPoints = function (w) {
            w || (w = 5);
            var A, P = [];
            for (A = 0; w >= A; A++) P.push(this.getPoint(A / w));
            return P
        }, bi.getSpacedPoints = function (v) {
            v || (v = 5);
            var m, I = [];
            for (m = 0; v >= m; m++) I.push(this.getPointAt(m / v));
            return I
        }, bi.getLength = function () {
            var q = this.getLengths();
            return q[q.length - 1]
        }, bi.getLengths = function (w) {
            if (w || (w = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == w + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var L, r, C = [], Q = this.getPoint(0), F = 0;
            for (C.push(0), r = 1; w >= r; r++) L = this.getPoint(r / w), F += L.distanceTo(Q), C.push(F), Q = L;
            return this.cacheArcLengths = C, C
        }, bi.getUtoTmapping = function (g, l) {
            var y, F = this.getLengths(), U = 0, N = F.length;
            y = l ? l : g * F[N - 1];
            for (var Q, z = 0, h = N - 1; h >= z;) if (U = I(z + (h - z) / 2), Q = F[U] - y, 0 > Q) z = U + 1; else {
                if (!(Q > 0)) {
                    h = U;
                    break
                }
                h = U - 1
            }
            if (U = h, F[U] == y) {
                var v = U / (N - 1);
                return v
            }
            var M = F[U], T = F[U + 1], m = T - M, B = (y - M) / m, v = (U + B) / (N - 1);
            return v
        }, bi.getTangent = function (T) {
            var D = 1e-4, R = T - D, d = T + D;
            0 > R && (R = 0), d > 1 && (d = 1);
            var r = this.getPoint(R), j = this.getPoint(d), s = j.clone().sub(r);
            return s.normalize()
        }, bi.getTangentAt = function (D) {
            var Z = this.getUtoTmapping(D);
            return this.getTangent(Z)
        }, Gd.create = function (u, y) {
            return u.prototype = Ol(Gd.prototype), u.prototype.getPoint = y, u
        };
        var el = function () {
            this.curves = [], this.autoClose = !1
        }, Wg = el.prototype = Ol(bi);
        Wg.add = function (o) {
            this.curves.push(o)
        }, Wg.closePath = function () {
            var S = this.curves[0].getPoint(0), n = this.curves[this.curves.length - 1].getPoint(1);
            S.equals(n) || this.curves.push(new Gm(n, S))
        }, Wg.getPoint = function (X) {
            for (var Z, i, S = X * this.getLength(), H = this.getCurveLengths(), p = 0; p < H.length;) {
                if (H[p] >= S) {
                    Z = H[p] - S, i = this.curves[p];
                    var r = 1 - Z / i.getLength();
                    return i.getPointAt(r)
                }
                p++
            }
            return null
        }, Wg.getLength = function () {
            var R = this.getCurveLengths();
            return R[R.length - 1]
        }, Wg.getCurveLengths = function () {
            if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
            var e, f = [], H = 0, _ = this.curves.length;
            for (e = 0; _ > e; e++) H += this.curves[e].getLength(), f.push(H);
            return this.cacheLengths = f, f
        }, Wg.getTransformedPoints = function (E) {
            return this.getPoints(E)
        }, Wg.getBoundingBox = function () {
            var n, w, j, y, h, _, s = this.getPoints();
            n = w = Number.NEGATIVE_INFINITY, y = h = Number.POSITIVE_INFINITY;
            var K, I, L, i, B = s[0] instanceof xi;
            for (i = B ? new xi : new pd, I = 0, L = s.length; L > I; I++) K = s[I], K.x > n && (n = K.x), K.x < y && (y = K.x), K.y > w && (w = K.y), K.y < h && (h = K.y), B && (K.z > j && (j = K.z), K.z < _ && (_ = K.z)), i.add(K);
            var F = {minX: y, minY: h, maxX: n, maxY: w};
            return B && (F.maxZ = j, F.minZ = _), F
        };
        var Sh = function (T) {
                el.call(this), this.actions = [], T && this.fromPoints(T)
            }, jp = Sh.prototype = Ol(el.prototype), Mc = "moveTo", Re = "lineTo", Oj = "quadraticCurveTo",
            bb = "bezierCurveTo", Sd = "arc", Yd = "ellipse";
        jp.fromPoints = function (R) {
            this.moveTo(R[0].x, R[0].y);
            for (var M = 1, K = R.length; K > M; M++) this.lineTo(R[M].x, R[M].y)
        }, jp.moveTo = function () {
            var F = Array.prototype.slice.call(arguments);
            this.actions.push({action: Mc, args: F})
        }, jp.lineTo = function (g, i) {
            var F = Array.prototype.slice.call(arguments), f = this.actions[this.actions.length - 1].args,
                E = f[f.length - 2], I = f[f.length - 1], $ = new Gm(new pd(E, I), new pd(g, i));
            this.curves.push($), this.actions.push({action: Re, args: F})
        }, jp.quadraticCurveTo = function (h, w, d, x) {
            var C = Array.prototype.slice.call(arguments), s = this.actions[this.actions.length - 1].args,
                I = s[s.length - 2], Z = s[s.length - 1], j = new gi(new pd(I, Z), new pd(h, w), new pd(d, x));
            this.curves.push(j), this.actions.push({action: Oj, args: C})
        }, jp.bezierCurveTo = function (_, n, t, N, C, S) {
            var o = Array.prototype.slice.call(arguments), c = this.actions[this.actions.length - 1].args,
                R = c[c.length - 2], p = c[c.length - 1],
                O = new Ph(new pd(R, p), new pd(_, n), new pd(t, N), new pd(C, S));
            this.curves.push(O), this.actions.push({action: bb, args: o})
        }, jp.arc = function (x, M, y, _, e, j) {
            var m = this.actions[this.actions.length - 1].args, p = m[m.length - 2], B = m[m.length - 1];
            this.absarc(x + p, M + B, y, _, e, j)
        }, jp.absarc = function ($, M, _, A, k, H) {
            this.absellipse($, M, _, _, A, k, H)
        }, jp.ellipse = function (y, J, V, w, $, S, s) {
            var I = this.actions[this.actions.length - 1].args, z = I[I.length - 2], O = I[I.length - 1];
            this.absellipse(y + z, J + O, V, w, $, S, s)
        }, jp.absellipse = function (Y, f, j, S, F, g, B) {
            var k = Array.prototype.slice.call(arguments), d = new Eg(Y, f, j, S, F, g, B);
            this.curves.push(d);
            var I = d.getPoint(1);
            k.push(I.x), k.push(I.y), this.actions.push({action: Yd, args: k})
        }, jp.getSpacedPoints = function ($) {
            $ || ($ = 40);
            for (var U = [], X = 0; $ > X; X++) U.push(this.getPoint(X / $));
            return U
        }, jp.getPoints = function (Y, f) {
            Y = Y || 12;
            var U, h, g, N, x, F, d, I, s, C, w, k, T, X, p, y, S, V, b = [];
            for (U = 0, h = this.actions.length; h > U; U++) switch (g = this.actions[U], N = g.action, x = g.args, N) {
                case Mc:
                    b.push(new pd(x[0], x[1]));
                    break;
                case Re:
                    b.push(new pd(x[0], x[1]));
                    break;
                case Oj:
                    for (F = x[2], d = x[3], C = x[0], w = x[1], b.length > 0 ? (X = b[b.length - 1], k = X.x, T = X.y) : (X = this.actions[U - 1].args, k = X[X.length - 2], T = X[X.length - 1]), p = 1; Y >= p; p++) y = p / Y, S = Pk.b2(y, k, C, F), V = Pk.b2(y, T, w, d), b.push(new pd(S, V));
                    break;
                case bb:
                    for (F = x[4], d = x[5], C = x[0], w = x[1], I = x[2], s = x[3], b.length > 0 ? (X = b[b.length - 1], k = X.x, T = X.y) : (X = this.actions[U - 1].args, k = X[X.length - 2], T = X[X.length - 1]), p = 1; Y >= p; p++) y = p / Y, S = Pk.b3(y, k, C, I, F), V = Pk.b3(y, T, w, s, d), b.push(new pd(S, V));
                    break;
                case Sd:
                    var P, E = x[0], v = x[1], n = x[2], A = x[3], J = x[4], u = !!x[5], R = J - A, L = 2 * Y;
                    for (p = 1; L >= p; p++) y = p / L, u || (y = 1 - y), P = A + y * R, S = E + n * m(P), V = v + n * H(P), b.push(new pd(S, V));
                    break;
                case Yd:
                    var P, E = x[0], v = x[1], Z = x[2], c = x[3], A = x[4], J = x[5], u = !!x[6], R = J - A, L = 2 * Y;
                    for (p = 1; L >= p; p++) y = p / L, u || (y = 1 - y), P = A + y * R, S = E + Z * m(P), V = v + c * H(P), b.push(new pd(S, V))
            }
            var l = b[b.length - 1], t = 1e-10;
            return G(l.x - b[0].x) < t && G(l.y - b[0].y) < t && b.splice(b.length - 1, 1), f && b.push(b[0]), b
        }, jp.toShapes = function (i, e) {
            function l(N) {
                var M, C, e, G, n, s = [], D = new Sh;
                for (M = 0, C = N.length; C > M; M++) e = N[M], n = e.args, G = e.action, G == Mc && 0 != D.actions.length && (s.push(D), D = new Sh), D[G].apply(D, n);
                return 0 != D.actions.length && s.push(D), s
            }

            function B(p) {
                for (var f = [], Z = 0, k = p.length; k > Z; Z++) {
                    var L = p[Z], M = new gc;
                    M.actions = L.actions, M.curves = L.curves, f.push(M)
                }
                return f
            }

            function K(Q, t) {
                for (var R = 1e-10, a = t.length, M = !1, A = a - 1, D = 0; a > D; A = D++) {
                    var O = t[A], U = t[D], h = U.x - O.x, e = U.y - O.y;
                    if (G(e) > R) {
                        if (0 > e && (O = t[D], h = -h, U = t[A], e = -e), Q.y < O.y || Q.y > U.y) continue;
                        if (Q.y == O.y) {
                            if (Q.x == O.x) return !0
                        } else {
                            var P = e * (Q.x - O.x) - h * (Q.y - O.y);
                            if (0 == P) return !0;
                            if (0 > P) continue;
                            M = !M
                        }
                    } else {
                        if (Q.y != O.y) continue;
                        if (U.x <= Q.x && Q.x <= O.x || O.x <= Q.x && Q.x <= U.x) return !0
                    }
                }
                return M
            }

            var V = l(this.actions);
            if (0 == V.length) return [];
            if (e === !0) return B(V);
            var h, P, O, I = [];
            if (1 == V.length) return P = V[0], O = new gc, O.actions = P.actions, O.curves = P.curves, I.push(O), I;
            var C = !Pk.isClockWise(V[0].getPoints());
            C = i ? !C : C;
            var g, a = [], s = [], $ = [], S = 0;
            s[S] = f, $[S] = [];
            var d, L;
            for (d = 0, L = V.length; L > d; d++) P = V[d], g = P.getPoints(), h = Pk.isClockWise(g), h = i ? !h : h, h ? (!C && s[S] && S++, s[S] = {
                s: new gc,
                p: g
            }, s[S].s.actions = P.actions, s[S].s.curves = P.curves, C && S++, $[S] = []) : $[S].push({h: P, p: g[0]});
            if (!s[0]) return B(V);
            if (s.length > 1) {
                for (var Z = !1, F = [], J = 0, _ = s.length; _ > J; J++) a[J] = [];
                for (var J = 0, _ = s.length; _ > J; J++) {
                    s[J];
                    for (var R = $[J], T = 0; T < R.length; T++) {
                        for (var x = R[T], Q = !0, r = 0; r < s.length; r++) K(x.p, s[r].p) && (J != r && F.push({
                            froms: J,
                            tos: r,
                            hole: T
                        }), Q ? (Q = !1, a[r].push(x)) : Z = !0);
                        Q && a[J].push(x)
                    }
                }
                F.length > 0 && (Z || ($ = a))
            }
            var z, E, w;
            for (d = 0, L = s.length; L > d; d++) for (O = s[d].s, I.push(O), z = $[d], E = 0, w = z.length; w > E; E++) O.holes.push(z[E].h);
            return I
        };
        var gc = function () {
            Sh.apply(this, arguments), this.holes = []
        }, tk = gc.prototype = Ol(jp);
        tk.getPointsHoles = function (p) {
            var v, W = this.holes.length, A = [];
            for (v = 0; W > v; v++) A[v] = this.holes[v].getTransformedPoints(p);
            return A
        }, tk.extractAllPoints = function ($) {
            return {shape: this.getTransformedPoints($), holes: this.getPointsHoles($)}
        }, tk.extractPoints = function (Y) {
            return this.extractAllPoints(Y)
        };
        var Pk = {
            triangulateShape: function ($, t) {
                function w(l, A, f) {
                    return l.x != A.x ? l.x < A.x ? l.x <= f.x && f.x <= A.x : A.x <= f.x && f.x <= l.x : l.y < A.y ? l.y <= f.y && f.y <= A.y : A.y <= f.y && f.y <= l.y
                }

                function o(F, $, J, n, u) {
                    var o = 1e-10, p = $.x - F.x, k = $.y - F.y, U = n.x - J.x, S = n.y - J.y, W = F.x - J.x,
                        D = F.y - J.y, i = k * U - p * S, j = k * W - p * D;
                    if (G(i) > o) {
                        var x;
                        if (i > 0) {
                            if (0 > j || j > i) return [];
                            if (x = S * W - U * D, 0 > x || x > i) return []
                        } else {
                            if (j > 0 || i > j) return [];
                            if (x = S * W - U * D, x > 0 || i > x) return []
                        }
                        if (0 == x) return !u || 0 != j && j != i ? [F] : [];
                        if (x == i) return !u || 0 != j && j != i ? [$] : [];
                        if (0 == j) return [J];
                        if (j == i) return [n];
                        var q = x / i;
                        return [{x: F.x + q * p, y: F.y + q * k}]
                    }
                    if (0 != j || S * W != U * D) return [];
                    var E = 0 == p && 0 == k, P = 0 == U && 0 == S;
                    if (E && P) return F.x != J.x || F.y != J.y ? [] : [F];
                    if (E) return w(J, n, F) ? [F] : [];
                    if (P) return w(F, $, J) ? [J] : [];
                    var z, T, Y, f, r, m, g, t;
                    return 0 != p ? (F.x < $.x ? (z = F, Y = F.x, T = $, f = $.x) : (z = $, Y = $.x, T = F, f = F.x), J.x < n.x ? (r = J, g = J.x, m = n, t = n.x) : (r = n, g = n.x, m = J, t = J.x)) : (F.y < $.y ? (z = F, Y = F.y, T = $, f = $.y) : (z = $, Y = $.y, T = F, f = F.y), J.y < n.y ? (r = J, g = J.y, m = n, t = n.y) : (r = n, g = n.y, m = J, t = J.y)), g >= Y ? g > f ? [] : f == g ? u ? [] : [r] : t >= f ? [r, T] : [r, m] : Y > t ? [] : Y == t ? u ? [] : [z] : t >= f ? [z, T] : [z, m]
                }

                function x(k, F, X, x) {
                    var n = 1e-10, c = F.x - k.x, V = F.y - k.y, h = X.x - k.x, N = X.y - k.y, Y = x.x - k.x,
                        z = x.y - k.y, H = c * N - V * h, S = c * z - V * Y;
                    if (G(H) > n) {
                        var U = Y * N - z * h;
                        return H > 0 ? S >= 0 && U >= 0 : S >= 0 || U >= 0
                    }
                    return S > 0
                }

                function T(S, r) {
                    function T(O, A) {
                        var B = v.length - 1, H = O - 1;
                        0 > H && (H = B);
                        var J = O + 1;
                        J > B && (J = 0);
                        var o = x(v[O], v[H], v[J], h[A]);
                        if (!o) return !1;
                        var $ = h.length - 1, R = A - 1;
                        0 > R && (R = $);
                        var f = A + 1;
                        return f > $ && (f = 0), o = x(h[A], h[R], h[f], v[O]), o ? !0 : !1
                    }

                    function X(k, p) {
                        var e, J, X;
                        for (e = 0; e < v.length; e++) if (J = e + 1, J %= v.length, X = o(k, p, v[e], v[J], !0), X.length > 0) return !0;
                        return !1
                    }

                    function O(J, a) {
                        var v, $, M, e, n;
                        for (v = 0; v < W.length; v++) for ($ = r[W[v]], M = 0; M < $.length; M++) if (e = M + 1, e %= $.length, n = o(J, a, $[M], $[e], !0), n.length > 0) return !0;
                        return !1
                    }

                    for (var h, B, j, L, c, R, D, w, F, d, Q, v = S.concat(), W = [], J = [], t = 0, e = r.length; e > t; t++) W.push(t);
                    for (var z = 0, E = 2 * W.length; W.length > 0 && (E--, !(0 > E));) for (j = z; j < v.length; j++) {
                        L = v[j], B = -1;
                        for (var t = 0; t < W.length; t++) if (R = W[t], D = L.x + ":" + L.y + ":" + R, J[D] === f) {
                            h = r[R];
                            for (var b = 0; b < h.length; b++) if (c = h[b], T(j, b) && !X(L, c) && !O(L, c)) {
                                B = b, W.splice(t, 1), w = v.slice(0, j + 1), F = v.slice(j), d = h.slice(B), Q = h.slice(0, B + 1), v = w.concat(d).concat(Q).concat(F), z = j;
                                break
                            }
                            if (B >= 0) break;
                            J[D] = !0
                        }
                        if (B >= 0) break
                    }
                    return v
                }

                for (var E, n, q, F, k, i, Y = {}, N = $.concat(), X = 0, R = t.length; R > X; X++) Array.prototype.push.apply(N, t[X]);
                for (E = 0, n = N.length; n > E; E++) k = N[E].x + ":" + N[E].y, Y[k] !== f, Y[k] = E;
                var P = T($, t), M = bc.Triangulate(P, !1);
                for (E = 0, n = M.length; n > E; E++) for (F = M[E], q = 0; 3 > q; q++) k = F[q].x + ":" + F[q].y, i = Y[k], i !== f && (F[q] = i);
                return M.concat()
            }, isClockWise: function (A) {
                return bc.Triangulate.area(A) < 0
            }, b2p0: function (C, E) {
                var d = 1 - C;
                return d * d * E
            }, b2p1: function (Z, W) {
                return 2 * (1 - Z) * Z * W
            }, b2p2: function (H, W) {
                return H * H * W
            }, b2: function (O, Z, G, Y) {
                return this.b2p0(O, Z) + this.b2p1(O, G) + this.b2p2(O, Y)
            }, b3p0: function (m, Y) {
                var l = 1 - m;
                return l * l * l * Y
            }, b3p1: function (j, Y) {
                var c = 1 - j;
                return 3 * c * c * j * Y
            }, b3p2: function (Y, j) {
                var y = 1 - Y;
                return 3 * y * Y * Y * j
            }, b3p3: function (b, o) {
                return b * b * b * o
            }, b3: function (X, K, y, A, L) {
                return this.b3p0(X, K) + this.b3p1(X, y) + this.b3p2(X, A) + this.b3p3(X, L)
            }
        }, bc = {
            faces: {},
            face: "",
            weight: "normal",
            style: "normal",
            size: 150,
            divisions: 10,
            getDefaultFont: function () {
                var g = z.keys(this.faces);
                return g.length ? g[0] : null
            },
            getFace: function () {
                try {
                    return this.faces[this.face][this.weight][this.style]
                } catch (R) {
                    throw"The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                }
            },
            loadFace: function (l) {
                var O = l.familyName.toLowerCase(), W = this;
                return W.faces[O] = W.faces[O] || {}, W.faces[O][l.cssFontWeight] = W.faces[O][l.cssFontWeight] || {}, W.faces[O][l.cssFontWeight][l.cssFontStyle] = l, l
            },
            drawText: function (r) {
                var U, f = this.getFace(), d = this.size / f.resolution, b = 0, q = String(r).split(""), D = q.length,
                    R = [];
                for (U = 0; D > U; U++) {
                    var Y = new Sh, A = this.extractGlyphPoints(q[U], f, d, b, Y);
                    A && (b += A.offset * this.spacing, R.push(A.path))
                }
                var j = b / 2;
                return {paths: R, offset: j}
            },
            extractGlyphPoints: function (c, T, v, l, x) {
                var z, j, q, p, F, O, m, V, E, M, i, g, h, J, U, K, G, S, e, o = [], $ = T.glyphs[c] || T.glyphs["?"];
                if ($) {
                    if ($.o) for (p = $._cachedOutline || ($._cachedOutline = $.o.split(" ")), O = p.length, m = v, V = v, z = 0; O > z;) switch (F = p[z++]) {
                        case"m":
                            E = p[z++] * m + l, M = p[z++] * V, x.moveTo(E, M);
                            break;
                        case"l":
                            E = p[z++] * m + l, M = p[z++] * V, x.lineTo(E, M);
                            break;
                        case"q":
                            if (i = p[z++] * m + l, g = p[z++] * V, U = p[z++] * m + l, K = p[z++] * V, x.quadraticCurveTo(U, K, i, g), e = o[o.length - 1]) for (h = e.x, J = e.y, j = 1, q = this.divisions; q >= j; j++) {
                                var w = j / q;
                                Pk.b2(w, h, U, i), Pk.b2(w, J, K, g)
                            }
                            break;
                        case"b":
                            if (i = p[z++] * m + l, g = p[z++] * V, U = p[z++] * m + l, K = p[z++] * V, G = p[z++] * m + l, S = p[z++] * V, x.bezierCurveTo(U, K, G, S, i, g), e = o[o.length - 1]) for (h = e.x, J = e.y, j = 1, q = this.divisions; q >= j; j++) {
                                var w = j / q;
                                Pk.b3(w, h, U, G, i), Pk.b3(w, J, K, S, g)
                            }
                    }
                    return {offset: $.ha * v, path: x}
                }
            }
        };
        bc.generateShapes = function (g, G) {
            G = G || {};
            var e = G.font;
            if (e === f && (e = bc.getDefaultFont(), !e)) return console.log("There's no valid font face, use ht.Default.loadFontFace to load font first."), [];
            var b = G.size !== f ? G.size : 1, R = G.curveSegments !== f ? G.curveSegments : 4,
                Z = G.spacing !== f ? G.spacing : 1, X = G.weight !== f ? G.weight : "normal",
                P = G.style !== f ? G.style : "normal";
            bc.size = b, bc.divisions = R, bc.face = e, bc.weight = X, bc.style = P, bc.spacing = Z;
            for (var N = bc.drawText(g), q = N.paths, I = [], r = 0, C = q.length; C > r; r++) Array.prototype.push.apply(I, q[r].toShapes());
            return I
        }, function (Q) {
            var g = 1e-10, S = function (D, L) {
                var W = D.length;
                if (3 > W) return null;
                var e, j, w, f = [], d = [], y = [];
                if (X(D) > 0) for (j = 0; W > j; j++) d[j] = j; else for (j = 0; W > j; j++) d[j] = W - 1 - j;
                var _ = W, x = 2 * _;
                for (j = _ - 1; _ > 2;) {
                    if (x-- <= 0) return L ? y : f;
                    if (e = j, e >= _ && (e = 0), j = e + 1, j >= _ && (j = 0), w = j + 1, w >= _ && (w = 0), c(D, e, j, w, _, d)) {
                        var N, k, Y, J, r;
                        for (N = d[e], k = d[j], Y = d[w], f.push([D[N], D[k], D[Y]]), y.push([d[e], d[j], d[w]]), J = j, r = j + 1; _ > r; J++, r++) d[J] = d[r];
                        _--, x = 2 * _
                    }
                }
                return L ? y : f
            }, X = function (y) {
                for (var w = y.length, n = 0, U = w - 1, X = 0; w > X; U = X++) n += y[U].x * y[X].y - y[X].x * y[U].y;
                return .5 * n
            }, c = function (_, G, z, Y, h, R) {
                var E, p, n, Z, t, N, S, K, a;
                if (p = _[R[G]].x, n = _[R[G]].y, Z = _[R[z]].x, t = _[R[z]].y, N = _[R[Y]].x, S = _[R[Y]].y, g > (Z - p) * (S - n) - (t - n) * (N - p)) return !1;
                var P, C, i, e, L, m, j, B, H, q, V, u, c, O, A;
                for (P = N - Z, C = S - t, i = p - N, e = n - S, L = Z - p, m = t - n, E = 0; h > E; E++) if (K = _[R[E]].x, a = _[R[E]].y, !(K === p && a === n || K === Z && a === t || K === N && a === S) && (j = K - p, B = a - n, H = K - Z, q = a - t, V = K - N, u = a - S, A = P * q - C * H, c = L * B - m * j, O = i * u - e * V, A >= -g && O >= -g && c >= -g)) return !1;
                return !0
            };
            return Q.Triangulate = S, Q.Triangulate.area = X, Q
        }(bc), R._typeface_js = {faces: bc.faces, loadFace: bc.loadFace};
        var Rg = function () {
            this.vertices = [], this.faces = [], this.faceVertexUvs = [[]]
        }, ie = Rg.prototype = {
            constructor: Rg, computeFaceNormals: function () {
                for (var k = new xi, $ = new xi, A = 0, R = this.faces.length; R > A; A++) {
                    var D = this.faces[A], z = this.vertices[D.a], P = this.vertices[D.b], G = this.vertices[D.c];
                    k.subVectors(G, P), $.subVectors(z, P), k.cross($), k.normalize(), D.normal.copy(k)
                }
            }, computeVertexNormals: function (s) {
                var l, f, T, N, G, w;
                for (w = new Array(this.vertices.length), l = 0, f = this.vertices.length; f > l; l++) w[l] = new xi;
                if (s) {
                    var y, B, W, K = new xi, V = new xi;
                    for (T = 0, N = this.faces.length; N > T; T++) G = this.faces[T], y = this.vertices[G.a], B = this.vertices[G.b], W = this.vertices[G.c], K.subVectors(W, B), V.subVectors(y, B), K.cross(V), w[G.a].add(K), w[G.b].add(K), w[G.c].add(K)
                } else for (T = 0, N = this.faces.length; N > T; T++) G = this.faces[T], w[G.a].add(G.normal), w[G.b].add(G.normal), w[G.c].add(G.normal);
                for (l = 0, f = this.vertices.length; f > l; l++) w[l].normalize();
                for (T = 0, N = this.faces.length; N > T; T++) G = this.faces[T], G.vertexNormals[0] = w[G.a].clone(), G.vertexNormals[1] = w[G.b].clone(), G.vertexNormals[2] = w[G.c].clone()
            }, mergeVertices: function () {
                var A, y, j, V, x, S, E, p, g = {}, q = [], K = [], I = 4, X = i(10, I);
                for (j = 0, V = this.vertices.length; V > j; j++) A = this.vertices[j], y = $(A.x * X) + "_" + $(A.y * X) + "_" + $(A.z * X), g[y] === f ? (g[y] = j, q.push(this.vertices[j]), K[j] = q.length - 1) : K[j] = K[g[y]];
                var B = [];
                for (j = 0, V = this.faces.length; V > j; j++) {
                    x = this.faces[j], x.a = K[x.a], x.b = K[x.b], x.c = K[x.c], S = [x.a, x.b, x.c];
                    for (var W = 0; 3 > W; W++) if (S[W] == S[(W + 1) % 3]) {
                        B.push(j);
                        break
                    }
                }
                for (j = B.length - 1; j >= 0; j--) {
                    var T = B[j];
                    for (this.faces.splice(T, 1), E = 0, p = this.faceVertexUvs.length; p > E; E++) this.faceVertexUvs[E].splice(T, 1)
                }
                var u = this.vertices.length - q.length;
                return this.vertices = q, u
            }
        }, Eg = function (g, i, k, a, n, m, c) {
            this.aX = g, this.aY = i, this.xRadius = k, this.yRadius = a, this.aStartAngle = n, this.aEndAngle = m, this.aClockwise = c
        };
        Eg.prototype = Ol(bi), Eg.prototype.getPoint = function (j) {
            var i, $ = this.aEndAngle - this.aStartAngle;
            0 > $ && ($ += n), $ > n && ($ -= n), i = this.aClockwise === !0 ? this.aEndAngle + (1 - j) * (n - $) : this.aStartAngle + j * $;
            var Z = this.aX + this.xRadius * m(i), d = this.aY + this.yRadius * H(i);
            return new pd(Z, d)
        };
        var Gm = function (S, D) {
            this.v1 = S, this.v2 = D
        }, fs = Gm.prototype = Ol(bi);
        fs.getPoint = function (L) {
            var R = this.v2.clone().sub(this.v1);
            return R.multiplyScalar(L).add(this.v1), R
        }, fs.getPointAt = function (i) {
            return this.getPoint(i)
        }, fs.getTangent = function () {
            var N = this.v2.clone().sub(this.v1);
            return N.normalize()
        };
        var gi = function (x, Y, y) {
            this.v0 = x, this.v1 = Y, this.v2 = y
        };
        gi.prototype = Ol(bi), gi.prototype.getPoint = function (L) {
            var t, X;
            return t = Pk.b2(L, this.v0.x, this.v1.x, this.v2.x), X = Pk.b2(L, this.v0.y, this.v1.y, this.v2.y), new pd(t, X)
        };
        var Ph = function (p, U, z, P) {
            this.v0 = p, this.v1 = U, this.v2 = z, this.v3 = P
        };
        Ph.prototype = Ol(bi), Ph.prototype.getPoint = function (D) {
            var M, c;
            return M = Pk.b3(D, this.v0.x, this.v1.x, this.v2.x, this.v3.x), c = Pk.b3(D, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new pd(M, c)
        }, Gd.create(function (S, V) {
            this.v1 = S, this.v2 = V
        }, function (p) {
            var q = new xi;
            return q.subVectors(this.v2, this.v1), q.multiplyScalar(p), q.add(this.v1), q
        });
        var Og = Gd.create(function (R, v, c) {
            this.v0 = R, this.v1 = v, this.v2 = c
        }, function (v) {
            var T, K, x;
            return T = Pk.b2(v, this.v0.x, this.v1.x, this.v2.x), K = Pk.b2(v, this.v0.y, this.v1.y, this.v2.y), x = Pk.b2(v, this.v0.z, this.v1.z, this.v2.z), new xi(T, K, x)
        }), aj = Gd.create(function (Z, Y, J, L) {
            this.v0 = Z, this.v1 = Y, this.v2 = J, this.v3 = L
        }, function (K) {
            var E, u, k;
            return E = Pk.b3(K, this.v0.x, this.v1.x, this.v2.x, this.v3.x), u = Pk.b3(K, this.v0.y, this.v1.y, this.v2.y, this.v3.y), k = Pk.b3(K, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new xi(E, u, k)
        }), Tb = function (e, z, k, Q, K, o, Y, d) {
            Rg.call(this), Q = Q !== f ? Q : .5, K = K !== f ? K : .5, d = d !== f ? d : 1, e = e || 8, o = o || 0, Y = Y || n;
            var c, I, J = 1, Z = d / 2, F = [], X = [], V = this.vertices, W = this.faces, u = this.faceVertexUvs;
            for (I = 0; J >= I; I++) {
                var j = [], y = [], S = I / J, O = S * (K - Q) + Q;
                for (c = 0; e >= c; c++) {
                    var L = c / e, v = new xi, B = -(L * Y + o);
                    v.z = O * H(B), v.y = -S * d + Z, v.x = O * m(B), V.push(v), j.push(V.length - 1), y.push(new pd(L, S))
                }
                F.push(j), X.push(y)
            }
            var $, l, T = (K - Q) / d;
            for (c = 0; e > c; c++) for (0 !== Q ? ($ = V[F[0][c]].clone(), l = V[F[0][c + 1]].clone()) : ($ = V[F[1][c]].clone(), l = V[F[1][c + 1]].clone()), $.setY(g($.x * $.x + $.z * $.z) * T).normalize(), l.setY(g(l.x * l.x + l.z * l.z) * T).normalize(), I = 0; J > I; I++) {
                var U = F[I][c], r = F[I + 1][c], x = F[I + 1][c + 1], h = F[I][c + 1], i = $.clone(), N = $.clone(),
                    C = l.clone(), b = l.clone(), M = X[I][c].clone(), t = X[I + 1][c].clone(),
                    D = X[I + 1][c + 1].clone(), _ = X[I][c + 1].clone();
                W.push(new pi(U, r, h, [i, N, b])), u[0].push([M, t, _]), W.push(new pi(r, x, h, [N.clone(), C, b.clone()])), u[0].push([t.clone(), D, _.clone()])
            }
            if (z && Q > 0) for (this.vertices.push(new xi(0, Z, 0)), c = 0; e > c; c++) {
                var U = F[0][c], r = F[0][c + 1], x = this.vertices.length - 1, i = new xi(0, 1, 0),
                    N = new xi(0, 1, 0), C = new xi(0, 1, 0), M = X[0][c].clone(), t = X[0][c + 1].clone(),
                    D = new pd(t.x, 0);
                W.push(new pi(U, r, x, [i, N, C], null, 1));
                var p = c / e * n, A = m(p), w = H(p), s = (c + 1) / e * n, R = m(s), E = H(s);
                u[0].push([new pd(.5 + .5 * A, .5 + .5 * w), new pd(.5 + .5 * R, .5 + .5 * E), new pd(.5, .5)])
            }
            if (k && K > 0) for (this.vertices.push(new xi(0, -Z, 0)), c = 0; e > c; c++) {
                var U = F[I][c + 1], r = F[I][c], x = V.length - 1, i = new xi(0, -1, 0), N = new xi(0, -1, 0),
                    C = new xi(0, -1, 0), M = X[I][c + 1].clone(), t = X[I][c].clone();
                W.push(new pi(U, r, x, [i, N, C], null, 2));
                var p = c / e * n, A = m(p), w = H(p), s = (c + 1) / e * n, R = m(s), E = H(s);
                u[0].push([new pd(.5 + .5 * R, .5 - .5 * E), new pd(.5 + .5 * A, .5 - .5 * w), new pd(.5, .5)])
            }
        };
        Tb.prototype = Ol(ie);
        var Hm = function (p, c, Y, q, e, l, u) {
            Rg.call(this), u = u || .5, p = p || 16, c = c || 16, Y = (Y !== f ? Y : 0) - P, q = q !== f ? q : n, e = e !== f ? e : 0, l = l !== f ? l : P;
            var k, $, F = [], g = [], _ = this.vertices, O = this.faces, s = this.faceVertexUvs;
            for ($ = 0; c >= $; $++) {
                var b = [], j = [];
                for (k = 0; p >= k; k++) {
                    var I = k / p, E = $ / c, w = new xi;
                    w.x = -u * m(Y + I * q) * H(e + E * l), w.y = u * m(e + E * l), w.z = u * H(Y + I * q) * H(e + E * l), _.push(w), b.push(_.length - 1), j.push(new pd(I, E))
                }
                F.push(b), g.push(j)
            }
            for ($ = 0; c > $; $++) for (k = 0; p > k; k++) {
                var r = F[$][k + 1], Q = F[$][k], t = F[$ + 1][k], z = F[$ + 1][k + 1], X = _[r].clone().normalize(),
                    A = _[Q].clone().normalize(), N = _[t].clone().normalize(), h = _[z].clone().normalize(),
                    d = g[$][k + 1].clone(), T = g[$][k].clone(), D = g[$ + 1][k].clone(), y = g[$ + 1][k + 1].clone();
                G(_[r].y) === u ? (d.x = (d.x + T.x) / 2, O.push(new pi(r, t, z, [X, N, h])), s[0].push([d, D, y])) : G(_[t].y) === u ? (D.x = (D.x + y.x) / 2, O.push(new pi(r, Q, t, [X, A, N])), s[0].push([d, T, D])) : (O.push(new pi(r, Q, z, [X, A, h])), s[0].push([d, T, y]), O.push(new pi(Q, t, z, [A.clone(), N, h.clone()])), s[0].push([T.clone(), D, y.clone()]))
            }
        };
        Hm.prototype = Ol(ie);
        var On = function (V, E, z, G, Z, i) {
            Rg.call(this), V = V || .33, E = E || .17, G = G || 8, z = z || 6, Z = Z || 0, i = i || n;
            for (var Y = new xi, q = [], F = [], v = 0; G >= v; v++) for (var y = v / G * n + P, l = 0; z >= l; l++) {
                var M = l / z * i + Z;
                Y.x = V * m(M), Y.z = -V * H(M);
                var o = new xi, U = V + E * m(y);
                o.x = U * m(M), o.z = -U * H(M), o.y = E * H(y), this.vertices.push(o), q.push(new pd(l / z, 1 - v / G)), F.push(o.clone().sub(Y).normalize())
            }
            for (var v = 1; G >= v; v++) for (var l = 1; z >= l; l++) {
                var u = (z + 1) * v + l - 1, N = (z + 1) * (v - 1) + l - 1, b = (z + 1) * (v - 1) + l,
                    j = (z + 1) * v + l, A = new pi(u, N, j, [F[u].clone(), F[N].clone(), F[j].clone()]);
                this.faces.push(A), this.faceVertexUvs[0].push([q[u].clone(), q[N].clone(), q[j].clone()]), A = new pi(N, b, j, [F[N].clone(), F[b].clone(), F[j].clone()]), this.faces.push(A), this.faceVertexUvs[0].push([q[N].clone(), q[b].clone(), q[j].clone()])
            }
            this.computeFaceNormals()
        };
        On.prototype = Ol(ie);
        var Tg = function (d, O, l) {
            return d ? (Rg.call(this), d = d instanceof Array ? d : [d], this.addShapeList(d, O), O.convertYZ !== !1 && pr(this, l), this.computeFaceNormals(), void 0) : (d = [], void 0)
        }, jc = Tg.prototype = Ol(Rg.prototype);
        jc.addShapeList = function (D, M) {
            for (var K = D.length, s = 0; K > s; s++) {
                var o = D[s];
                this.addShape(o, M)
            }
        }, jc.addShape = function (p, J) {
            function e() {
                if (J.bottom) for (var I = 0; K > I; I++) X = m[I], S(X[2], X[1], X[0], !0);
                if (J.top) for (I = 0; K > I; I++) X = m[I], S(X[0] + h * v, X[1] + h * v, X[2] + h * v, !1)
            }

            function a() {
                var N = 0;
                for (w(Y, N), N += Y.length, q = 0, c = y.length; c > q; q++) O = y[q], w(O, N), N += O.length
            }

            function w(R, y) {
                for (var r, o, W = R.length; --W >= 0;) {
                    r = W, o = W - 1, 0 > o && (o = R.length - 1);
                    var a = 0, s = v;
                    for (a = 0; s > a; a++) {
                        var j = h * a, A = h * (a + 1), u = y + r + j, d = y + o + j, D = y + o + A, z = y + r + A;
                        k(u, d, D, z, R, a, s, r, o)
                    }
                }
            }

            function G(C, F, R) {
                s.vertices.push(new xi(C, F, R))
            }

            function S(k, Y, P, n) {
                k += D, Y += D, P += D, s.faces.push(new pi(k, Y, P, null, null, n ? 2 : 1));
                var Z = n ? $.generateBottomUV(s, p, J, k, Y, P) : $.generateTopUV(s, p, J, k, Y, P);
                s.faceVertexUvs[0].push(Z)
            }

            function k(g, Q, W, l, i, h, A, c, v) {
                g += D, Q += D, W += D, l += D, s.faces.push(new pi(g, Q, l)), s.faces.push(new pi(Q, W, l));
                var z = $.generateSideWallUV(s, p, i, J, g, Q, W, l, h, A, c, v);
                s.faceVertexUvs[0].push([z[0], z[1], z[3]]), s.faceVertexUvs[0].push([z[1], z[2], z[3]])
            }

            var x, T, V, P, W, A = J.amount, N = J.curveSegments || ae, v = J.steps || 1, C = J.extrudePath, Z = !1,
                $ = new $m(J.repeatUVLength);
            C && (x = C.getSpacedPoints(v), Z = !0, T = J.frames !== f ? J.frames : new Lq.FrenetFrames(C, v, !1), V = new xi, P = new xi, W = new xi);
            var O, q, c, s = this, D = this.vertices.length, Q = p.extractPoints(N), g = Q.shape, y = Q.holes,
                d = !Pk.isClockWise(g);
            if (d) {
                for (g = g.reverse(), q = 0, c = y.length; c > q; q++) O = y[q], Pk.isClockWise(O) && (y[q] = O.reverse());
                d = !1
            }
            var m = Pk.triangulateShape(g, y), Y = g;
            for (q = 0, c = y.length; c > q; q++) O = y[q], g = g.concat(O);
            for (var R, X, h = g.length, K = m.length, B = 0; h > B; B++) R = g[B], Z ? (P.copy(T.normals[0]).multiplyScalar(R.x), V.copy(T.binormals[0]).multiplyScalar(R.y), W.copy(x[0]).add(P).add(V), G(W.x, W.y, W.z)) : G(R.x, R.y, 0);
            var I;
            for (I = 1; v >= I; I++) for (B = 0; h > B; B++) R = g[B], Z ? (P.copy(T.normals[I]).multiplyScalar(R.x), V.copy(T.binormals[I]).multiplyScalar(R.y), W.copy(x[I]).add(P).add(V), G(W.x, W.y, W.z)) : G(R.x, R.y, A / v * I);
            e(), a()
        };
        var Lq = function (C, P, f, T, M) {
            function V(M, z, K) {
                return Z.vertices.push(new xi(M, z, K)) - 1
            }

            Rg.call(this), P = P || 64, f = f || 1, T = T || 8, M = M || !1;
            var p, w, c, u, N, $, q, D, d, a, K, _, I, O, B, t, E, z, s, x, g = [], Z = this, A = P + 1, S = new xi,
                J = new Lq.FrenetFrames(C, P, M), Q = J.tangents, j = J.normals, F = J.binormals;
            for (this.tangents = Q, this.normals = j, this.binormals = F, d = 0; A > d; d++) for (g[d] = [], u = d / (A - 1), D = C.getPointAt(u), p = Q[d], w = j[d], c = F[d], a = 0; T > a; a++) N = a / T * n, $ = -f * m(N), q = f * H(N), S.copy(D), S.x += $ * w.x + q * c.x, S.y += $ * w.y + q * c.y, S.z += $ * w.z + q * c.z, g[d][a] = V(S.x, S.y, S.z);
            for (d = 0; P > d; d++) for (a = 0; T > a; a++) K = M ? (d + 1) % P : d + 1, _ = (a + 1) % T, I = g[d][a], O = g[K][a], B = g[K][_], t = g[d][_], E = new pd(d / P, a / T), z = new pd((d + 1) / P, a / T), s = new pd((d + 1) / P, (a + 1) / T), x = new pd(d / P, (a + 1) / T), this.faces.push(new pi(I, O, t)), this.faceVertexUvs[0].push([E, z, x]), this.faces.push(new pi(O, B, t)), this.faceVertexUvs[0].push([z.clone(), s, x.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        };
        Lq.prototype = Ol(ie), Lq.FrenetFrames = function (b, $, f) {
            function C() {
                j[0] = new xi, K[0] = new xi, s = Number.MAX_VALUE, S = G(N[0].x), R = G(N[0].y), W = G(N[0].z), s >= S && (s = S, T.set(1, 0, 0)), s >= R && (s = R, T.set(0, 1, 0)), s >= W && T.set(0, 0, 1), F.crossVectors(N[0], T).normalize(), j[0].crossVectors(N[0], F), K[0].crossVectors(N[0], j[0])
            }

            var q, s, S, R, W, p, l, T = new xi, N = [], j = [], K = [], F = new xi, L = new Co, t = $ + 1, v = 1e-4;
            for (this.tangents = N, this.normals = j, this.binormals = K, p = 0; t > p; p++) l = p / (t - 1), N[p] = b.getTangentAt(l), N[p].normalize();
            for (C(), p = 1; t > p; p++) j[p] = j[p - 1].clone(), K[p] = K[p - 1].clone(), F.crossVectors(N[p - 1], N[p]), F.length() > v && (F.normalize(), q = u(qe(N[p - 1].dot(N[p]), -1, 1)), j[p].applyMatrix4(L.makeRotationAxis(F, q))), K[p].crossVectors(N[p], j[p]);
            if (f) for (q = u(qe(j[0].dot(j[t - 1]), -1, 1)), q /= t - 1, N[0].dot(F.crossVectors(j[0], j[t - 1])) > 0 && (q = -q), p = 1; t > p; p++) j[p].applyMatrix4(L.makeRotationAxis(N[p], q * p)), K[p].crossVectors(N[p], j[p])
        };
        var yq = function (g, $, A, Q) {
            Rg.call(this), $ = $ || 18, A = A || 0, Q = Q == t ? n : Q;
            for (var f = 1 / (g.length - 1), V = 1 / $, j = 0, C = $; C >= j; j++) for (var M = A + j * V * Q, G = m(M), U = H(M), h = 0, a = g.length; a > h; h++) {
                var X = g[h], D = new xi;
                D.x = G * X.x - U * X.y, D.y = U * X.x + G * X.y, D.z = X.z, this.vertices.push(D)
            }
            for (var i = g.length, j = 0, C = $; C > j; j++) for (var h = 0, a = g.length - 1; a > h; h++) {
                var u = h + i * j, T = u, w = u + i, G = u + 1 + i, q = u + 1, b = j * V, e = h * f, S = b + V,
                    J = e + f;
                this.faces.push(new pi(T, q, w)), this.faceVertexUvs[0].push([new pd(b, e), new pd(b, J), new pd(S, e)]), this.faces.push(new pi(w, q, G)), this.faceVertexUvs[0].push([new pd(S, e), new pd(b, J), new pd(S, J)])
            }
            this.mergeVertices(), pr(this), this.computeFaceNormals(), this.computeVertexNormals()
        };
        yq.prototype = Ol(ie);
        var kq = function (u, Y) {
            Y = Y || {};
            var x = bc.generateShapes(u, Y);
            Y.amount = Y.amount !== f ? Y.amount : .5, Y.convertYZ = !1, Y.fill !== !1 && (Y.bottom = !0, Y.top = !0), Tg.call(this, x, Y)
        };
        kq.prototype = Ol(jc);
        var as = U.Node = function () {
                Ge(as, this)
            }, Vm = {X: Rp, Y: vg, Z: Zd}, og = {xyz: "XYZ", xzy: "XZY", yxz: "YXZ", yzx: "YZX", zxy: "ZXY", zyx: "ZYX"},
            Am = "xzy", Sp = function (o, N, g) {
                if (N) {
                    var q = N[0], P = N[1], C = N[2];
                    "xzy" === g ? (vg(o, P), Zd(o, C), Rp(o, q)) : "xyz" === g ? (Zd(o, C), vg(o, P), Rp(o, q)) : "yxz" === g ? (Zd(o, C), Rp(o, q), vg(o, P)) : "yzx" === g ? (Rp(o, q), Zd(o, C), vg(o, P)) : "zxy" === g ? (vg(o, P), Rp(o, q), Zd(o, C)) : "zyx" === g ? (Rp(o, q), vg(o, P), Zd(o, C)) : (vg(o, P), Zd(o, C), Rp(o, q))
                }
            };
        ps("Node", xd, {
            ms_ac: ["rotationMode", "tall"],
            _adjustChildrenToTop: !0,
            _icon: "node_icon",
            _image: "node_image",
            _rotationMode: Am,
            _64O: 0,
            _rotationX: 0,
            _53O: 0,
            _host: t,
            _position: {x: 0, y: 0},
            _anchor: {x: .5, y: .5},
            _scale: {x: 1, y: 1},
            _tall: 20,
            _54O: 0,
            getUIClass: function () {
                return wn
            },
            _22Q: function () {
                return xf
            },
            getX: function () {
                return this.p().x
            },
            setX: function (p) {
                this.p(p, this.p().y)
            },
            getY: function () {
                return this.p().y
            },
            setY: function (u) {
                this.p(this.p().x, u)
            },
            getAnchorX: function () {
                return this.getAnchor().x
            },
            setAnchorX: function (z) {
                this.setAnchor(z, this.getAnchor().y)
            },
            getAnchorY: function () {
                return this.getAnchor().y
            },
            setAnchorY: function (R) {
                this.setAnchor(this.getAnchor().x, R)
            },
            getScaleX: function () {
                return this.getScale().x
            },
            setScaleX: function (r) {
                this.setScale(r, this.getScale().y)
            },
            getScaleY: function () {
                return this.getScale().y
            },
            setScaleY: function (V) {
                this.setScale(this.getScale().x, V)
            },
            p: function () {
                return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
            },
            p3: function () {
                return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
            },
            s3: function () {
                return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
            },
            r3: function () {
                return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
            },
            t3: function () {
                return this.translate3d.apply(this, arguments), this
            },
            translate3dBy: function (v, P) {
                hd(v, As(t, t, this.r3(), this.getRotationMode())), this.translate3d(v[0] * P, v[1] * P, v[2] * P)
            },
            translateFront: function (y) {
                this.translate3dBy([0, 0, 1], y)
            },
            translateBack: function (m) {
                this.translate3dBy([0, 0, -1], m)
            },
            translateLeft: function (G) {
                this.translate3dBy([-1, 0, 0], G)
            },
            translateRight: function (I) {
                this.translate3dBy([1, 0, 0], I)
            },
            translateTop: function (l) {
                this.translate3dBy([0, 1, 0], l)
            },
            translateBottom: function (C) {
                this.translate3dBy([0, -1, 0], C)
            },
            getPosition3d: function () {
                return [this._position.x, this._54O, this._position.y]
            },
            setPosition3d: function (E, D, _) {
                1 === arguments.length && (D = E[1], _ = E[2], E = E[0]), this.p(E, _), this.setElevation(D)
            },
            translate3d: function (p, e, P) {
                1 === arguments.length && (e = p[1], P = p[2], p = p[0]), this.translate(p, P), this.setElevation(this._54O + e)
            },
            getSize3d: function () {
                return [this.getWidth(), this.getTall(), this.getHeight()]
            },
            setSize3d: function (z, D, f) {
                1 === arguments.length && (D = z[1], f = z[2], z = z[0]), this.setSize(z, f), this.setTall(D)
            },
            getRotation3d: function () {
                return [this._rotationX, -this._64O, this._53O]
            },
            setRotation3d: function (O, B, U) {
                1 === arguments.length && (B = O[1], U = O[2], O = O[0]), this.setRotationX(O), this.setRotation(-B), this.setRotationZ(U)
            },
            setRotationY: function (g) {
                this.setRotation(-g)
            },
            getRotationY: function () {
                return -this._64O
            },
            lookAt: function (i, m) {
                m = m || Fe;
                var y = this, J = Uk(i, y.p3()), h = Lb(J);
                m === Fe ? (y.r3([-D(J[1] / h), -o(J[2], J[0]) + s, 0]), y.setRotationMode("xzy")) : m === Rl ? (y.r3(0, -o(J[2], J[0]), D(J[1] / h)), y.setRotationMode("zyx")) : m === ur ? (y.r3(0, -o(J[2], J[0]) + P, -D(J[1] / h)), y.setRotationMode("zyx")) : m === jh ? (y.r3([-D(J[1] / h) + s, -o(J[2], J[0]) + s, 0]), y.setRotationMode("xzy")) : m === Af && (y.r3([-D(J[1] / h) - s, -o(J[2], J[0]) + s, 0]), y.setRotationMode("xzy")), m === ks && (y.r3([-D(J[1] / h) + P, -o(J[2], J[0]) + s, P]), y.setRotationMode("zxy"))
            },
            getLoopedEdges: function () {
                return this._45I
            },
            getEdges: function () {
                return this._70O
            },
            getAgentEdges: function () {
                return this._49I
            },
            getHost: function () {
                return this._host
            },
            setHost: function (A) {
                var R = this;
                if (R !== A && R._host !== A) {
                    var o = R._host;
                    o && o._removeAttach(R), R._host = A, R._host && R._host._addAttach(R), R.fp("host", o, A), R.onHostChanged(o, A)
                }
            },
            getAttaches: function () {
                return this._69O
            },
            _addAttach: function ($) {
                var s = this;
                s._69O || (s._69O = new Gn), s._69O.add($), s.fp("attaches", t, $)
            },
            _removeAttach: function (A) {
                var c = this;
                c._69O.remove(A), c._69O.isEmpty() && delete c._69O, c.fp("attaches", A, t)
            },
            getSourceEdges: function () {
                return this._42I
            },
            getTargetEdges: function () {
                return this._43I
            },
            _2I: function (o) {
                var U = this;
                U._44I || (U._44I = new Gn), U._42I || (U._42I = new Gn), U._44I.add(o), U._42I.add(o), U._20I()
            },
            _4I: function (b) {
                var z = this;
                z._44I || (z._44I = new Gn), z._43I || (z._43I = new Gn), z._44I.add(b), z._43I.add(b), z._20I()
            },
            _16I: function (x) {
                var Y = this;
                Y._44I.remove(x), Y._42I.remove(x), Y._44I.isEmpty() && delete Y._44I, Y._42I.isEmpty() && delete Y._42I, Y._20I()
            },
            _18I: function (A) {
                var u = this;
                u._44I.remove(A), u._43I.remove(A), u._44I.isEmpty() && delete u._44I, u._43I.isEmpty() && delete u._43I, u._20I()
            },
            _20I: function () {
                var L = this;
                if (delete L._45I, !L._44I || L._44I.isEmpty()) return delete L._70O, void 0;
                var o;
                L._44I.each(function (g) {
                    g.isLooped() && (o || (o = {}), o[g._id] || (L._45I || (L._45I = new Gn), L._45I.add(g), o[g._id] = g))
                }), o ? (L._70O = new Gn, L._44I.each(function (n) {
                    o[n._id] ? "A" === o[n._id] || (o[n._id] = "A", L._70O.add(n)) : L._70O.add(n)
                })) : L._70O = L._44I
            },
            hasAgentEdges: function () {
                return !!this._49I && !this._49I.isEmpty()
            },
            getSourceAgentEdges: function () {
                return this._46I
            },
            getTargetAgentEdges: function () {
                return this._47I
            },
            _1I: function ($) {
                var z = this;
                z._46I || (z._46I = new Gn), z._48I || (z._48I = new Gn), z._46I.add($), z._48I.add($), z._19I()
            },
            _3I: function (I) {
                var G = this;
                G._47I || (G._47I = new Gn), G._48I || (G._48I = new Gn), G._47I.add(I), G._48I.add(I), G._19I()
            },
            _15I: function (V) {
                var b = this;
                b._46I.remove(V), b._48I.remove(V), b._46I.isEmpty() && delete b._46I, b._48I.isEmpty() && delete b._48I, b._19I()
            },
            _17I: function (v) {
                var Q = this;
                Q._47I.remove(v), Q._48I.remove(v), Q._47I.isEmpty() && delete Q._47I, Q._48I.isEmpty() && delete Q._48I, Q._19I()
            },
            _19I: function () {
                var Z = this;
                delete Z._49I;
                var M = Z._48I;
                if (M && !M.isEmpty()) {
                    var I = {};
                    M.each(function (n) {
                        I[n._id] ? Z._49I || (Z._49I = new Gn) : I[n._id] = n
                    }), Z._49I ? M.each(function (Y) {
                        I[Y._id] && (Z._49I.add(Y), delete I[Y._id])
                    }) : Z._49I = M
                }
            },
            getImage: function () {
                return this._image
            },
            setImage: function (V) {
                var z = this, k = z._image, r = z.getWidth(), d = z.getHeight();
                z._image = V, z.fp("image", k, V), z.fp($n, r, z.getWidth()), z.fp(uf, d, z.getHeight())
            },
            getElevation: function () {
                return this._54O
            },
            setElevation: function (D) {
                var E = this;
                if (!E._50O) {
                    E._50O = 1;
                    var w = E._54O;
                    E._54O = D, E.fp(dc, w, D), delete this._50O
                }
            },
            getRotation: function () {
                return this._64O
            },
            setRotation: function (H) {
                var e = this;
                if (!e._49O) {
                    e._49O = 1;
                    var G = e._64O;
                    e._64O = H, e.fp(sm, G, H), delete e._49O
                }
            },
            getRotationX: function () {
                return this._rotationX
            },
            setRotationX: function (t) {
                var G = this;
                if (!G._51O) {
                    G._51O = 1;
                    var M = G._rotationX;
                    G._rotationX = t, G.fp("rotationX", M, t), delete G._51O
                }
            },
            getRotationZ: function () {
                return this._53O
            },
            setRotationZ: function (X) {
                var K = this;
                if (!K._52O) {
                    K._52O = 1;
                    var h = K._53O;
                    K._53O = X, K.fp("rotationZ", h, X), delete K._52O
                }
            },
            getPosition: function () {
                return this._position
            },
            setPosition: function (J, s) {
                var q = this;
                if (!q._50I) {
                    q._50I = 1;
                    var u;
                    if (u = 2 === arguments.length ? {x: J, y: s} : J, u.x !== q._position.x || u.y !== q._position.y) {
                        var c = q._position;
                        q._position = u, q.fp(Nn, c, u)
                    }
                    delete q._50I
                }
            },
            translate: function (W, O) {
                var I = this._position;
                this.p(I.x + W, I.y + O)
            },
            getWidth: function () {
                var i = this;
                if (i._width >= 0) return i._width;
                var O = nj(i._image);
                return O ? ko(O, i) : 20
            },
            setWidth: function (b) {
                var w = this, g = w._width;
                w._width = b, w.fp($n, g, b)
            },
            getHeight: function () {
                var C = this;
                if (C._height >= 0) return C._height;
                var L = nj(C._image);
                return L ? Rh(L, C) : 20
            },
            setHeight: function (H) {
                var E = this, D = E._height;
                E._height = H, E.fp(uf, D, H)
            },
            setSize: function (p, c) {
                var d = this;
                2 === arguments.length ? (d.setWidth(p), d.setHeight(c)) : (d.setWidth(p.width), d.setHeight(p.height))
            },
            getSize: function () {
                return {width: this.getWidth(), height: this.getHeight()}
            },
            setRect: function (k, Y, F, T, C) {
                var x = this, D = x.getAnchor(), B = x.getScale();
                arguments.length <= 2 && (C = Y, Y = k.y, F = k.width, T = k.height, k = k.x);
                var n = B.x < 0 ? 1 - D.x : D.x, f = B.y < 0 ? 1 - D.y : D.y;
                x.p(k + F * n, Y + T * f), C && (F /= Math.abs(B.x), T /= Math.abs(B.y)), x.setWidth(F), x.setHeight(T)
            },
            getMatrix: function () {
                var D = this, e = D._64O, z = D._position, V = D.getScale();
                return new Vh(e, z.x, z.y, V.x, V.y)
            },
            getRect: function () {
                var J = this, o = J.getWidth(), z = J.getHeight(), C = J.getAnchor(),
                    B = {x: -o * C.x, y: -z * C.y, width: o, height: z}, x = J.getMatrix();
                return B = Cc([x.tf(B.x, B.y), x.tf(B.x + B.width, B.y), x.tf(B.x + B.width, B.y + B.height), x.tf(B.x, B.y + B.height)])
            },
            getAnchor: function () {
                var l = this;
                if (l.hasOwnProperty("_anchor")) return l._anchor;
                var S = nj(l._image);
                return S && S.anchorX !== f ? {x: S.anchorX, y: S.anchorY} : l._anchor
            },
            setAnchor: function (k, v, D) {
                var Q, C = this;
                "number" == typeof k ? Q = {x: k, y: v} : (Q = k.length ? {x: k[0], y: k[1]} : k, D = v);
                var $ = C.getAnchor();
                if ($.x !== Q.x || $.y !== Q.y) {
                    if (C._anchor = Q, D && !Tn) {
                        var f = C.getPosition(), q = C.getSize(), j = C.getRotation(), u = C.getScale(),
                            c = -q.width * ($.x - Q.x) * u.x, S = -q.height * ($.y - Q.y) * u.y, J = H(j), L = m(j);
                        C.setPosition(f.x + L * c - J * S, f.y + J * c + L * S)
                    }
                    C.fp("anchor", $, Q)
                }
            },
            getScale: function () {
                return this._scale
            },
            setScale: function (n, i) {
                var P, Q = this;
                P = 2 === arguments.length ? {x: n, y: i} : n;
                var Z = Q.getScale();
                (Z.x !== P.x || Z.y !== P.y) && (Q._scale = P, Q.fp("scale", Z, P))
            },
            getCorners: function (j, N) {
                j == t && (j = 0), N == t && (N = j);
                var S = this, m = S.getAnchor(), U = S.getWidth(), F = S.getHeight(), o = -U * m.x - j,
                    b = -F * m.y - N, C = U + 2 * j, Q = F + 2 * N, Z = S.getMatrix();
                return [Z.tf(o, b), Z.tf(o, b + Q), Z.tf(o + C, b + Q), Z.tf(o + C, b)]
            },
            getEditControlPoints: function (D, o, h) {
                o == t && (o = 0), h == t && (h = o);
                var Q = this, P = Q.getAnchor(), k = Q.getWidth(), I = Q.getHeight(), M = -k * P.x - o,
                    f = -I * P.y - h, B = k + 2 * o, s = I + 2 * h;
                if (D) return [{x: M, y: f}, {x: M, y: 0}, {x: M, y: f + s}, {x: 0, y: f + s}, {
                    x: M + B,
                    y: f + s
                }, {x: M + B, y: 0}, {x: M + B, y: f}, {x: 0, y: f}];
                var E = Q.getMatrix();
                return [E.tf(M, f), E.tf(M, 0), E.tf(M, f + s), E.tf(0, f + s), E.tf(M + B, f + s), E.tf(M + B, 0), E.tf(M + B, f), E.tf(0, f)]
            },
            rotateAt: function (K, Y, I) {
                var A = this, s = A._position, t = A._64O, d = new Vh(t, s.x, s.y).tf(K, Y), G = g(K * K + Y * Y),
                    i = o(s.y - d.y, s.x - d.x) + I;
                A.setRotation(t + I), A.p(d.x + G * m(i), d.y + G * H(i))
            },
            onParentChanged: function () {
                as.superClass.onParentChanged.apply(this, arguments), this._8I()
            },
            _8I: function () {
                this._70O && this._70O.each(function (W) {
                    W._7I()
                })
            },
            onPropertyChanged: function (y) {
                var A = this;
                as.superClass.onPropertyChanged.call(A, y), A._69O && A._69O.each(function (s) {
                    s.handleHostPropertyChange(y)
                }), A._49I && A._49I.each(function (_) {
                    _.fp("agentChange", !0, !1)
                })
            },
            onHostChanged: function () {
                this.updateAttach()
            },
            handleHostPropertyChange: function (L) {
                this.updateAttach(L)
            },
            onStyleChanged: function (y) {
                as.superClass.onStyleChanged.apply(this, arguments), Zm[y] && this.updateAttach()
            },
            updateAttach: function (b) {
                var e = this;
                e._51I || Tn || (e._51I = 1, e._71O(b), delete e._51I)
            },
            _71O: function (W) {
                var h, c, f, u, i, C, B = this, n = B._host, r = W ? W.property : t, v = W ? W.oldValue : t,
                    b = W ? W.newValue : t;
                if (n instanceof U.Grid) {
                    if (r === dc) B.setElevation(B._54O + b - v); else if (!W || Om[r]) {
                        if (h = B.s("attach.row.index"), c = B.s("attach.column.index"), f = n.getCellRect(h, c), !f) return;
                        u = B.s("attach.row.span"), i = B.s("attach.column.span"), (1 !== u || 1 !== i) && (f = nf(f, n.getCellRect(h + u - 1, c + i - 1))), ap(f, B, "attach.padding", 1), B.setRect(f)
                    }
                } else if (n instanceof xr && (C = B.s("attach.index")) >= 0 && (!W || Jp[r])) {
                    var Z = B.s("attach.thickness");
                    Z != t && B.setHeight(n.getThickness() * Z);
                    var P = B.s("attach.offset"), V = n.getPoints(), $ = V.size();
                    if ($ > C) {
                        var j = V.get(C), k = $ === C + 1 ? V.get(0) : V.get(C + 1), p = [k.x - j.x, k.y - j.y],
                            g = Lb(p);
                        if (g) {
                            B.s("attach.offset.relative") && (P *= g), B.s("attach.offset.opposite") && (P = g - P);
                            var d = {x: j.x + p[0] / g * P, y: j.y + p[1] / g * P}, A = B.s("attach.gap");
                            A && (B.s("attach.gap.relative") && (A *= n.getThickness()), d = Ng(t, d, k, A)), B.p(d), B.setRotation(o(p[1], p[0]))
                        }
                    }
                } else W && (r === Nn ? B.translate(b.x - v.x, b.y - v.y) : r === dc ? B.setElevation(B._54O + b - v) : il[r] && B._11Q(n, r, b - v))
            },
            _11Q: function (M, r, e) {
                var k = this, m = M.p3(), Q = Uk(k.p3(), m), z = Tq(), V = og[k.getRotationMode()], S = V[0], t = V[1],
                    L = V[2], w = Vm[S], W = Vm[t], K = Vm[L];
                r === sm && (r = "rotationY", e = -e), r === sm + S ? (K(z, M[Gq + L]()), W(z, M[Gq + t]()), w(z, e), W(z, -M[Gq + t]()), K(z, -M[Gq + L]()), k[sl + S](k[Gq + S]() + e)) : r === sm + t ? (K(z, M[Gq + L]()), W(z, e), K(z, -M[Gq + L]()), k[sl + t](k[Gq + t]() + e)) : r === sm + L && (K(z, e), k[sl + L](k[Gq + L]() + e)), hd(Q, z), k.p3(m[0] + Q[0], m[1] + Q[1], m[2] + Q[2])
            },
            isHostOn: function (J) {
                var d = this;
                if (d._host && J && J._69O) for (var l = {}, R = d._host; R && R !== d && !l[R._id];) {
                    if (R === J) return !0;
                    l[R._id] = R, R = R._host
                }
                return !1
            },
            isLoopedHostOn: function (Z) {
                return this.isHostOn(Z) && Z.isHostOn(this)
            },
            getSerializableProperties: function () {
                var k = as.superClass.getSerializableProperties.call(this);
                return Cf(k, {
                    image: 1,
                    host: 1,
                    rotation: 1,
                    rotationX: 1,
                    rotationZ: 1,
                    rotationMode: 1,
                    position: 1,
                    anchor: 1,
                    scale: 1,
                    _width: 1,
                    _height: 1,
                    tall: 1,
                    elevation: 1
                }), k
            }
        });
        var Dk = U.Edge = function (e, L) {
            var S = this;
            Ge(Dk, S), S.setSource(e), S.setTarget(L)
        };
        ps("Edge", xd, {
            _icon: "edge_icon", getUIClass: function () {
                return Rb
            }, _22Q: function () {
                return Hn
            }, getSource: function () {
                return this._source
            }, getTarget: function () {
                return this._target
            }, getSourceAgent: function () {
                return this._40I
            }, getTargetAgent: function () {
                return this._41I
            }, setSource: function (J) {
                var d = this;
                if (d._source !== J) {
                    var Y = d._source;
                    d._source = J, Y && Y._16I(d), J && J._2I(d), d._7I(), d.fp("source", Y, J)
                }
            }, setTarget: function (W) {
                var f = this;
                if (f._target !== W) {
                    var w = f._target;
                    f._target = W, w && w._18I(f), W && W._4I(f), f._7I(), f.fp("target", w, W)
                }
            }, isLooped: function () {
                var e = this;
                return e._source === e._target && !!e._source && !!e._target
            }, _7I: function () {
                var O, H = this, q = Ig(H);
                H._40I !== q && (O = this._40I, O && O._15I(H), H._40I = q, q && q._1I(H), H.fp("sourceAgent", O, q), Ui(O, H._41I), Ui(q, H._41I));
                var b = gh(H);
                H._41I !== b && (O = H._41I, O && O._17I(H), H._41I = b, b && b._3I(H), H.fp("targetAgent", O, b), Ui(O, H._40I), Ui(b, H._40I))
            }, _22I: function (u) {
                this._52I = u, this.fp("edgeGroup", !0, !1)
            }, getEdgeGroup: function () {
                return this._52I
            }, isEdgeGroupHidden: function () {
                var h = this;
                return h._52I && h._52I.get(0) !== h && !h.getStyle(Xm)
            }, getEdgeGroupSize: function () {
                return this._52I ? this._52I.size() : 1
            }, getEdgeGroupIndex: function () {
                return this._52I ? this._52I.indexOf(this) : 0
            }, isEdgeGroupAgent: function () {
                var K = this, B = K._52I;
                return B && !K.getStyle(Xm) && B.size() > 1 && K === B.get(0)
            }, toggle: function () {
                var c = this._52I, m = !this.s(Xm);
                c && c.size() > 1 && (c.each(function (h) {
                    h.s(Xm, m)
                }), c.getSiblings().each(function (L) {
                    L !== c && L.each(function (r) {
                        r.fp("edgeGroup", t, L)
                    })
                }))
            }, setStyle: function (Y, g) {
                (Y === Nr || "edge.segments" === Y) && (g = dn(g)), Dk.superClass.setStyle.call(this, Y, g)
            }, onStyleChanged: function (e) {
                Dk.superClass.onStyleChanged.apply(this, arguments), Bi[e] && Ui(this._41I, this._40I)
            }, getSerializableProperties: function () {
                var p = Dk.superClass.getSerializableProperties.call(this);
                return Cf(p, {source: 1, target: 1}), p
            }
        });
        var Vi = U.Group = function () {
            Ge(Vi, this)
        };
        ps("Group", as, {
            _image: "group_image", _icon: "group_icon", _57O: !1, getUIClass: function () {
                return jb
            }, onChildAdded: function () {
                Vi.superClass.onChildAdded.apply(this, arguments), this._81I()
            }, onChildRemoved: function () {
                Vi.superClass.onChildRemoved.apply(this, arguments), this._81I()
            }, _81I: function () {
                var l = this;
                if (!l._54I && !Tn) {
                    var D = l.getChildrenRect();
                    D && (l._53I = 1, l.p(Ym(l.s("group.position"), D, l.getSize())), delete l._53I)
                }
            }, getChildrenRect: function () {
                var C, E = this;
                return E.eachChild(function (d) {
                    C = nf(C, E.getChildRect(d))
                }), C
            }, getChildRect: function (Z) {
                var j;
                return Sb(Z) && Z.s($k) && (sj(Z) && Z.isExpanded() && Z.eachChild(function (c) {
                    j = nf(j, Z.getChildRect(c))
                }), !j && Z.getRect && (j = Z.getRect())), j
            }, setPosition: function (f, K) {
                var S = this;
                if (!S._54I) {
                    var v;
                    v = 2 === arguments.length ? {
                        x: f,
                        y: K
                    } : f, Tn || S._53I || (S._54I = 1, Eo(S._children, v.x - S._position.x, v.y - S._position.y), delete S._54I), Vi.superClass.setPosition.call(this, v)
                }
            }, toggle: function () {
                this.setExpanded(!this.isExpanded())
            }, isExpanded: function () {
                return this._57O
            }, setExpanded: function (a) {
                var S = this;
                if (S._57O !== a) {
                    var C = S._57O;
                    S._57O = a, S.fp("expanded", C, S._57O), S._8I()
                }
            }, _8I: function () {
                Vi.superClass._8I.call(this), this.eachChild(function (m) {
                    Sb(m) && m._8I()
                })
            }, onStyleChanged: function (U) {
                Vi.superClass.onStyleChanged.apply(this, arguments), "group.position" === U && this._81I()
            }, getSerializableProperties: function () {
                var $ = Vi.superClass.getSerializableProperties.call(this);
                return $.expanded = 1, $
            }
        });
        var Fk = U.Block = function () {
            Ge(Fk, this)
        };
        ps("Block", as, {
            _icon: "block_icon", getUIClass: function () {
                return cr
            }, onChildAdded: function () {
                Fk.superClass.onChildAdded.apply(this, arguments), this.updateFromChildren()
            }, onChildRemoved: function () {
                Fk.superClass.onChildRemoved.apply(this, arguments), this.updateFromChildren()
            }, updateFromChildren: function () {
                var l = this;
                if (!Tn && !l._updatingToChildren) {
                    var F, N, Y, L, w, B = [], Q = l.getRotation();
                    if (l.eachChild(function (m) {
                        Sb(m) && B.push.apply(B, m.getCorners())
                    }), B.length) {
                        l._updatingFromChildren = 1;
                        var A = m(-Q), f = H(-Q), S = 1 / 0, x = -1 / 0, y = 1 / 0, z = -1 / 0;
                        for (L = 0, w = B.length; w > L; L++) Y = B[L], F = Y.x, N = Y.y, Y.x = A * F - f * N, Y.y = f * F + A * N, S = _(S, Y.x), x = K(x, Y.x), y = _(y, Y.y), z = K(z, Y.y);
                        var e = l.getScale();
                        l.setSize(G((x - S) / e.x), G((z - y) / e.y));
                        var W;
                        e.x < 0 && (W = S, S = x, x = W), e.y < 0 && (W = y, y = z, z = W), A = m(Q), f = H(Q);
                        var d = l.getAnchor();
                        F = S + (x - S) * d.x, N = y + (z - y) * d.y, l.setPosition(A * F - f * N, f * F + A * N), delete l._updatingFromChildren
                    }
                }
            }, setPosition: function (b, r) {
                var Y = this;
                if (!Y._updatingToChildren) {
                    var K;
                    K = 2 === arguments.length ? {
                        x: b,
                        y: r
                    } : b, Tn || Y._updatingFromChildren || (Y._updatingToChildren = 1, Eo(Y._children, K.x - Y._position.x, K.y - Y._position.y), delete Y._updatingToChildren), Fk.superClass.setPosition.call(this, K)
                }
            }, setWidth: function (B) {
                return this.setSize(B, this.getHeight())
            }, setHeight: function (N) {
                return this.setSize(this.getWidth(), N)
            }, setSize: function (m, $) {
                1 > m && (m = 1), 1 > $ && ($ = 1);
                var C = this;
                if (!C._updatingToChildren) {
                    2 !== arguments.length && ($ = m.height, m = m.width);
                    var h = C.getWidth(), O = C.getHeight();
                    if (m !== h && Fk.superClass.setWidth.call(C, m), $ !== O && Fk.superClass.setHeight.call(C, $), !Tn && !C._updatingFromChildren) {
                        C._updatingToChildren = 1;
                        var G = m / h, l = $ / O;
                        C._adjustChildScaleOrSize(G, l, "size"), delete C._updatingToChildren, C.updateFromChildren()
                    }
                }
            }, _adjustChildScaleOrSize: function (u, X, Q) {
                var e = this, K = e.getPosition(), q = e.getRotation();
                e.getScale(), e.eachChild(function (l) {
                    if (Sb(l)) {
                        var O = l.getPosition(), h = l.getRotation(), J = l.getWidth(), Z = l.getHeight(),
                            b = l.getScale(), s = b.x * J, W = b.y * Z, C = new Vh(h, O.x, O.y, s, W);
                        C.translate(-K.x, -K.y), C.rotate(-q), h = o(C.b * Math.sign(s), C.a * Math.sign(s)), C.scale(u, X);
                        var E, i, $, e = m(h);
                        if (Math.abs(e) < .001 ? (E = H(h), i = C.b / E, $ = -C.c / E) : (i = C.a / e, $ = C.d / e), "scale" === Q) l.setScale(i / J, $ / Z); else if ("size" === Q) {
                            var k = i / b.x, T = $ / b.y;
                            l.setScale(kf(i) * Math.abs(b.x), kf($) * Math.abs(b.y)), l.setSize(Math.max(.1, Math.abs(k)), Math.max(.1, Math.abs(T)))
                        }
                        C.rotate(q), C.translate(K.x, K.y), l.setPosition(C.tx, C.ty)
                    }
                })
            }, _calcChangeFactor: function (R, n, S, V) {
                var P, b, N, w;
                return P = G(R), b = G(S), N = P > b ? P / b : b / P, P = G(n), b = G(V), w = P > b ? P / b : b / P, K(N, w)
            }, setAnchor: function () {
                var M = this;
                if (!M._updatingToChildren) {
                    var q = M.getAnchor();
                    if (Fk.superClass.setAnchor.apply(M, arguments), !Tn && !M._updatingFromChildren) {
                        M._updatingToChildren = 1;
                        var A = M.getAnchor();
                        M.getPosition();
                        var n = M.getSize(), x = M.getScale(), p = M.getRotation(), W = -n.width * x.x * (q.x - A.x),
                            r = -n.height * x.y * (q.y - A.y), G = H(p), y = m(p), e = y * W - G * r, Z = G * W + y * r;
                        M.eachChild(function (J) {
                            if (Sb(J)) {
                                var a = J.getPosition();
                                J.setPosition(a.x - e, a.y - Z)
                            }
                        }), delete M._updatingToChildren
                    }
                }
            }, setRotation: function (s) {
                var B = this;
                if (!B._updatingToChildren) {
                    var F = B.getRotation();
                    if (Fk.superClass.setRotation.apply(B, arguments), !Tn && !B._updatingFromChildren) {
                        B._updatingToChildren = 1;
                        var H = B.getPosition(), M = s - F;
                        B.eachChild(function (i) {
                            if (Sb(i)) {
                                var Z = i.getMatrix();
                                Z.translate(-H.x, -H.y), Z.rotate(M), Z.translate(H.x, H.y);
                                var z = Math.sign(i.getScale().x);
                                i.setRotation(o(Z.b * z, Z.a * z)), i.setPosition(Z.tx, Z.ty)
                            }
                        }), delete B._updatingToChildren
                    }
                }
            }, setScale: function (z, c) {
                var t = this;
                if (!t._updatingToChildren) {
                    null == c && (c = z.y, z = z.x);
                    var v = t.getScale();
                    if (G(z) < .01 && (z = .01 * (kf(z) || kf(v.x))), G(c) < .01 && (c = .01 * (kf(c) || kf(v.y))), Fk.superClass.setScale.call(t, z, c), !Tn && !t._updatingFromChildren) {
                        t._updatingToChildren = 1;
                        var j = z / v.x, C = c / v.y;
                        t._adjustChildScaleOrSize(j, C, "size"), delete t._updatingToChildren, t.updateFromChildren()
                    }
                }
            }
        });
        var _g = U.Grid = function () {
            Ge(U.Grid, this)
        };
        ps("Grid", as, {
            IRotatable: !1, _icon: "grid_icon", _image: t, getUIClass: function () {
                return fh
            }, setRotation: function () {
            }, getCellRect: function (z, P) {
                var c = this, h = c.s("grid.row.count"), X = c.s("grid.column.count");
                if (0 >= h || 0 >= X || 0 > z || z >= h || 0 > P || P >= X) return t;
                var V, G, e, y = c.getRect(), F = c.s("grid.row.percents"), i = c.s("grid.column.percents");
                if (ap(y, c, "grid.border", -1), F && F._as && (F = F._as), i && i._as && (i = i._as), F && F.length === h) {
                    for (e = 0, V = 0; z > V; V++) e += y.height * F[V];
                    y.y += e, y.height = y.height * F[z]
                } else y.height = y.height / h, y.y += y.height * z;
                if (i && i.length === X) {
                    for (G = 0, V = 0; P > V; V++) G += y.width * i[V];
                    y.x += G, y.width = y.width * i[P]
                } else y.width = y.width / X, y.x += y.width * P;
                return pk(y, -c.s("grid.gap")), y
            }
        });
        var Un = U.Text = function () {
            Ge(Un, this), this.setSize(100, 50), this.s("text", "TEXT")
        };
        ps("Text", as, {
            _icon: "text_icon", _image: "__text__", getUIClass: function () {
                return Jc
            }, setWidth: function (i) {
                i || (i = .001), Un.superClass.setWidth.call(this, i)
            }, setHeight: function (L) {
                L || (L = .001), Un.superClass.setHeight.call(this, L)
            }, toLabel: function () {
                return this._displayName || this._name || this.s("text")
            }
        }), xe("__text__", {
            width: {
                value: 100, isSafeFunc: !0, func: function (b) {
                    return b._width
                }
            },
            height: {
                value: 50, isSafeFunc: !0, func: function (M) {
                    return M._height
                }
            },
            comps: [{
                type: "text",
                relative: !0,
                rect: [0, 0, 1, 1],
                text: {func: "style@text"},
                align: {func: "style@text.align"},
                vAlign: {func: "style@text.vAlign"},
                color: {func: "style@text.color"},
                font: {func: "style@text.font"},
                shadow: {func: "style@text.shadow"},
                shadowColor: {func: "style@text.shadow.color"},
                shadowBlur: {func: "style@text.shadow.blur"},
                shadowOffsetX: {func: "style@text.shadow.offset.x"},
                shadowOffsetY: {func: "style@text.shadow.offset.y"}
            }]
        });
        var xr = U.Shape = function () {
            Ge(xr, this), this._59O = new Gn
        };
        xr.__de__ = Um, ps("Shape", as, {
            ms_ac: ["thickness", "closePath"],
            _icon: "shape_icon",
            _thickness: 10,
            _closePath: !1,
            getUIClass: function () {
                return dq
            },
            _22Q: function () {
                return Mi
            },
            getLength: function (F) {
                return ul(ms(this._59O, this._58O, F, this._closePath))
            },
            getSegments: function () {
                return this._58O
            },
            toSegments: function () {
                var v = this._58O;
                return v ? new Gn(v._as.slice(0)) : v
            },
            setSegments: function (e) {
                var Q = this._58O;
                e = e ? od(e) ? new Gn(e.slice(0)) : new Gn(e._as.slice(0)) : new Gn, (Q && e && Q._as.join(",") !== e._as.join(",") || Q !== e) && (this._58O = e, this.fp("segments", Q, e))
            },
            getPoints: function () {
                return this._59O
            },
            toPoints: function () {
                var Q = this._59O;
                return new Gn(Q._as.slice(0))
            },
            setPoints: function (i, W) {
                var j = this, q = j._59O;
                i = i ? od(i) ? new Gn(i.slice(0)) : new Gn(i._as.slice(0)) : new Gn;
                var g, A, J, F, x, m;
                W && (g = j.getPosition(), m = new Vh(j.getRotation(), 0, 0, j.getScale().x, j.getScale().y)), (q && i && q._as.join(",") !== i._as.join(",") || q !== i) && (j._59O = i, j.fs(), j.fp("points", q, i)), W && (A = j.getPosition(), J = A.x - g.x, F = A.y - g.y, x = m.tf(J, F), j.setPosition(A.x - J + x.x, A.y - F + x.y))
            },
            addPoint: function (q, y, F) {
                var r = this.toPoints();
                r.add(q, y), this.setPoints(r, F)
            },
            setPoint: function (T, f, E) {
                var P = this.toPoints();
                P.set(T, f), this.setPoints(P, E)
            },
            removePointAt: function (B) {
                var E = this.toPoints();
                E.removeAt(B), this.setPoints(E)
            },
            setWidth: function (J) {
                var c = this;
                if (1 > J && (J = 1), !c._55I && !Tn && c.getWidth()) {
                    c._55I = 1;
                    var i = c._position.x, M = J / c.getWidth(), t = c.toPoints(), T = new Gn;
                    t.each(function (U) {
                        T.add({x: (U.x - i) * M + i, y: U.y, e: U.e})
                    }), c.setPoints(T);
                    var z = c.s("shape.gradient.pack");
                    z && Wk(z, [M, 0, 0, 1, i * (1 - M), 0]), c.fs(), delete c._55I
                }
                xr.superClass.setWidth.call(c, J)
            },
            setHeight: function (m) {
                var t = this;
                if (1 > m && (m = 1), !t._55I && !Tn && t.getHeight()) {
                    t._55I = 1;
                    var F = t._position.y, g = m / t.getHeight(), c = t.toPoints(), y = new Gn;
                    c.each(function (U) {
                        y.add({x: U.x, y: (U.y - F) * g + F, e: U.e})
                    }), t.setPoints(y);
                    var $ = t.s("shape.gradient.pack");
                    $ && Wk($, [1, 0, 0, g, 0, F * (1 - g)]), t.fs(), delete t._55I
                }
                xr.superClass.setHeight.call(t, m)
            },
            setAnchor: function (M, A, n) {
                var R = this;
                if (R._55I = !0, !Tn) {
                    var o, j, T;
                    "number" == typeof M ? T = {x: M, y: A} : (T = M.length ? {x: M[0], y: M[1]} : M, n = A);
                    var I = R.getAnchor(), v = R.getSize();
                    o = v.width * (I.x - T.x), j = v.height * (I.y - T.y), n || R.shiftPoints(o, j);
                    var B = R.getPosition()
                }
                if (xr.superClass.setAnchor.apply(R, arguments), !Tn) {
                    var d = R.getPosition();
                    n && R.shiftPoints(d.x - B.x + o, d.y - B.y + j)
                }
                delete R._55I
            },
            shiftPoints: function (N, t) {
                var a = this, l = a.toPoints(), F = new Gn;
                l.each(function (E) {
                    F.add({x: E.x + N, y: E.y + t, e: E.e})
                }), a.setPoints(F), a.fs()
            },
            setPosition: function (d, U) {
                var S, u = this;
                if (!u._28Q) {
                    if (u._28Q = 1, !u._55I && !Tn) {
                        S = 2 === arguments.length ? {x: d, y: U} : d;
                        var q = S.x - u._position.x, _ = S.y - u._position.y;
                        if (0 === q && 0 === _) return delete u._28Q, void 0;
                        u._55I = 1, u.shiftPoints(q, _);
                        var K = u.s("shape.gradient.pack");
                        K && Wk(K, [1, 0, 0, 1, q, _]), delete u._55I
                    }
                    xr.superClass.setPosition.apply(u, arguments), delete u._28Q
                }
            },
            fs: function () {
                this.fireShapeChange()
            },
            _70I: function () {
                var V = this;
                if (2 !== V._59O.size()) return !1;
                var $ = V._58O;
                return $ ? 2 === $.size() && 1 === $.get(0) && 2 === $.get(1) ? !0 : !1 : !0
            },
            fireShapeChange: function () {
                var D = this;
                if (!D._55I && !Tn) {
                    var E = Cc(D._59O);
                    E && (D._55I = 1, D.setRect(E), delete D._55I)
                }
                D.fp(qi, !1, !0)
            },
            getSerializableProperties: function () {
                var x = xr.superClass.getSerializableProperties.call(this);
                return x.segments = 1, x.points = 1, x.thickness = 1, x.closePath = 1, x
            }
        });
        var wj = U.Polyline = function () {
            Ge(wj, this), this.s({"shape.background": null, "shape.border.width": 2})
        };
        ps("Polyline", xr, {
            IRotatable: !1, _icon: "polyline_icon", _22Q: function () {
                return ze
            }, getUIClass: function () {
                return em
            }, setRotationX: function () {
            }, setRotation: function () {
            }, setRotationZ: function () {
            }, setClosePath: function () {
            }, setTall: function (e) {
                var p = this;
                if (!p._24Q && !Tn && p.getTall()) {
                    p._24Q = 1;
                    var B = p._54O, s = e / p.getTall();
                    p._59O.each(function (L) {
                        L.e = L.e == t ? B : (L.e - B) * s + B
                    }), p.fs(), delete p._24Q
                }
                wj.superClass.setTall.call(p, e)
            }, setElevation: function (M) {
                var D = this;
                if (!D._24Q && !Tn) {
                    D._24Q = 1;
                    var s = M - D._54O;
                    D._59O.each(function (R) {
                        R.e == t ? R.e = M : R.e += s
                    }), D.fs(), delete D._24Q
                }
                wj.superClass.setElevation.apply(D, arguments)
            }, fireShapeChange: function () {
                var h = this, j = h._59O;
                if (!h._24Q && !Tn) {
                    var G = j.size();
                    if (G) {
                        var x = 1, $ = j.get(0), Z = h._54O;
                        $.e == t && ($.e = Z);
                        for (var f = $.e, F = 0; G > x; x++) {
                            $ = j.get(x), $.e == t && ($.e = Z);
                            var p = _(f, $.e), e = K(f + F, $.e);
                            f = p, F = e - p
                        }
                        h._24Q = 1, h.setTall(F), h.setElevation(f + F / 2), delete h._24Q
                    }
                }
                wj.superClass.fireShapeChange.apply(h, arguments)
            }
        });
        var zc = U.SubGraph = function () {
            Ge(zc, this)
        };
        ps("SubGraph", as, {
            ISubGraph: 1, _image: "subGraph_image", _icon: "subGraph_icon", _8I: function () {
                zc.superClass._8I.call(this), this.eachChild(function (V) {
                    Sb(V) && V._8I()
                })
            }
        }), U.EdgeGroup = function (Z, z) {
            this._70O = Z, this._siblings = z;
            for (var B, h, U = 0, D = Z.size(), F = E[Xm]; D > U; U++) if (B = Z.get(U).getStyle(Xm, !1), B != t) {
                F = B;
                break
            }
            F == t && (F = !0);
            var W = N.edgeGroupAgentFunc;
            for (W && (h = W(Z), h && h !== Z.get(0) && (Z.remove(h), Z.add(h, 0))), U = 0; D > U; U++) Z.get(U).s(Xm, F)
        }, ps("EdgeGroup", z, {
            getEdges: function () {
                return this._70O
            }, size: function () {
                return this._70O.size()
            }, get: function (C) {
                return this._70O.get(C)
            }, indexOf: function (n) {
                return this._70O.indexOf(n)
            }, each: function (S, q) {
                this._70O.each(S, q)
            }, getSiblings: function () {
                return this._siblings
            }, eachSiblingEdge: function (U, B) {
                this._siblings.each(function (o) {
                    o._70O.each(U, B)
                })
            }
        });
        var kj = U.JSONSerializer = function (z, b) {
            this.dm = this._dataModel = z, this._hierarchical = b == t ? z.isHierarchicalRendering() : b
        };
        ps("JSONSerializer", z, {
            ms_ac: ["hierarchical"], serialize: function (S) {
                return N.stringify(this.toJSON(), S)
            }, toJSON: function () {
                var U = this, i = U.dm, I = i.getRoots(), E = U.json = {v: N.getVersion(), p: {}, a: {}, d: []},
                    p = i.getSerializableAttrs();
                i.getInit() && (E.init = i.getInit()), i.getName() && (E.p.name = i.getName()), i.getBackground() && (E.p.background = i.getBackground()), E.p.autoAdjustIndex = i.isAutoAdjustIndex(), E.p.hierarchicalRendering = i.isHierarchicalRendering();
                for (var h in p) {
                    var z = i.a(h);
                    z !== f && U[rd](h, z, E.a)
                }
                return kk(E.a) && delete E.a, U._hierarchical ? I.each(U.serializeData, this) : i.each(function (F) {
                    U.serializeData(F)
                }), E
            }, isSerializable: function () {
                return !0
            }, getProperties: function (A) {
                return A.getSerializableProperties()
            }, getStyles: function (y) {
                return y.getSerializableStyles()
            }, getAttrs: function (Z) {
                return Z.getSerializableAttrs()
            }, serializeData: function (B) {
                var g = this;
                if (g.isSerializable(B)) {
                    var O, G, v, M, m = Ag(B.getClassName()) || B.getClass(), k = new m,
                        E = {c: B.getClassName(), i: B.getId(), p: {}, s: {}, a: {}};
                    g.json.d.push(E), O = g.getProperties(B);
                    for (G in O) /^_/.test(G) ? (v = B[G], v !== k[G] && g[rd](G.substr(1), v, E.p)) : (M = vp(G), B[M] && (v = B[M](), v !== k[M]() && g[rd](G, v, E.p)));
                    O = g.getStyles(B);
                    for (G in O) v = B.s(G), v !== k.s(G) && g[rd](G, v, E.s);
                    O = g.getAttrs(B);
                    for (G in O) v = B.a(G), v !== k.a(G) && g[rd](G, v, E.a);
                    kk(E.p) && delete E.p, kk(E.s) && delete E.s, kk(E.a) && delete E.a
                }
                g._hierarchical && B.getChildren().each(g.serializeData, g)
            }, serializeValue: function (Z, a, y) {
                Qe(a) ? a = {__a: a._as} : a instanceof xd && (a = {__i: a.getId()}), y[Z] = a
            }, deserialize: function (F, m, B) {
                Tn = !0;
                var X = this;
                F = X.json = xq(F) ? N.parse(F) : F, X._82I = {};
                var g = X.dm, n = new Gn, Y = new Gn, $ = 0, e = F.d.length;
                for (qd(F.init) && F.init(g), g.setInit(F.init); e > $; $++) {
                    var S = F.d[$], W = Ag(S.c), f = new W, y = S.i;
                    B && y != t && (f._id = y), X._82I[y] = f, n.add(f), Y.add(S)
                }
                for ($ = 0; e > $; $++) X.deserializeData(n.get($), Y.get($));
                n.each(function (u) {
                    m && !u.getParent() && u.setParent(m), g.add(u)
                });
                for (var V in F.a) g.a(V, X[Kh](F.a[V]));
                for (var c in F.p) g[Vj(c)](F.p[c]);
                return Tn = !1, n
            }, deserializeData: function (H, v) {
                for (var P in v.p) H[Vj(P)](this[Kh](v.p[P]));
                for (P in v.s) H.s(P, this[Kh](v.s[P]));
                for (P in v.a) H.a(P, this[Kh](v.a[P]))
            }, deserializeValue: function (i) {
                if (wi(i)) {
                    var R = i.__i;
                    if (R != t) return this._82I[R];
                    if (R = i.__a, od(R)) return new Gn(R)
                }
                return i
            }
        }), Cf(Xl, {
            serialize: function (e, G) {
                return new kj(this, G).serialize(e)
            }, toJSON: function (S) {
                return new kj(this, S).toJSON()
            }, deserialize: function (H, g, m) {
                return new kj(this).deserialize(H, g, m)
            }
        }), ji.GraphView = function (C) {
            var f = this;
            f._24I = {}, f._34I = new Gn, f._25I = {}, f._56I = {}, f._view = Qj(1, f), f._canvas = ns(f._view), f.dm(C ? C : new Xl), f.setEditable(!1), f.setScrollBarVisible(N.graphViewScrollBarVisible)
        }, jj("GraphView", z, {
            ms_v: 1,
            ms_gv: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            _52o: 1,
            _51o: 1,
            ms_ac: ["layers", Kb, tj, Di, lf, "resettable", "editInteractor", Gb, "pannable", "rectSelectable", "autoScrollZone", fc, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
            _resettable: N.graphViewResettable,
            _pannable: N.graphViewPannable,
            _rectSelectable: N.graphViewRectSelectable,
            _autoScrollZone: N.graphViewAutoScrollZone,
            _rectSelectBackground: N.graphViewRectSelectBackground,
            _rectSelectBorderColor: N.graphViewRectSelectBorderColor,
            _editPointSize: N.graphViewEditPointSize,
            _editPointBorderColor: N.graphViewEditPointBorderColor,
            _editPointBackground: N.graphViewEditPointBackground,
            _scrollBarColor: kb,
            _scrollBarSize: yk,
            _autoHideScrollBar: jq,
            _autoMakeVisible: Sg,
            setEditable: function (x) {
                var o = this, C = ji.XEditInteractor;
                x ? o.setInteractors([new Lh(o), new Qb(o), C ? new C(o) : new ld(o), new Fm(o), new Ln(o), new Yk(o, {editable: !C})]) : o.setInteractors([new Lh(o), new Qb(o), new Fm(o), new Ln(o), new Yk(o, {editable: !1})])
            },
            getCanvas: function () {
                return this._canvas
            },
            _33I: function (W) {
                var h = W.getUIClass();
                return h ? new h(this, W) : t
            },
            getDataUI: function (D) {
                var O = this, j = O._25I[D._id];
                return j === f && (j = O._33I(D), O._25I[D._id] = j), j
            },
            getNodeRect: function (x) {
                return N.getNodeRect(this, x)
            },
            getEdgeInfo: function (D) {
                var P = this.getDataUI(D);
                return P ? (P._79o(), P._78o) : null
            },
            invalidateAll: function (X) {
                var _ = this;
                if (X) {
                    for (var w in _._25I) {
                        var J = _._25I[w];
                        J && J.dispose()
                    }
                    _._25I = {}, _._56I = {}, _._24I = {}, _._34I.clear(), _.redraw()
                } else _.dm().each(function (C) {
                    _.invalidateData(C)
                })
            },
            invalidateSelection: function () {
                var B = this;
                B.sm().each(function (i) {
                    B.invalidateData(i)
                })
            },
            invalidateData: function (m) {
                var H = this;
                H._24I[m._id] = m, H._21Q(m), H.iv()
            },
            _21Q: function (P) {
                var d = this, L = d._24I;
                if (to(P) && Vn[P.s(bh)]) {
                    var A = P.getSourceAgent();
                    A && A.getAgentEdges().each(function (m) {
                        L[m._id] = m
                    }), A = P.getTargetAgent(), A && A.getAgentEdges().each(function (l) {
                        L[l._id] = l
                    }), d.iv()
                }
            },
            redraw: function (P) {
                var v = this;
                v._32I || (P ? v._34I.add(P) : (v._32I = 1, v._34I.clear()), v.iv())
            },
            each: function (e, A) {
                var H, G, E, m = 0, z = this._layers, R = this._dataModel, b = R._datas._as, S = b.length;
                if (z) {
                    for (var O = z.length; O > m; m++) if (E = z[m], R.isHierarchicalRendering()) {
                        if (this._dataModel.eachByHierarchical(e, null, A) === !1) return
                    } else for (var _ = 0; S > _; _++) if (H = b[_], H._layer === E && (G = A ? e.call(A, H) : e(H), G === !1)) return
                } else if (R.isHierarchicalRendering()) this._dataModel.eachByHierarchical(e, null, A); else for (; S > m; m++) if (H = b[m], G = A ? e.call(A, H) : e(H), G === !1) return
            },
            reverseEach: function (j, i) {
                var h, p, H, C, q = this._layers, f = this._dataModel, V = f._datas._as, T = V.length;
                if (q) {
                    for (h = q.length - 1; h >= 0; h--) if (C = q[h], f.isHierarchicalRendering()) {
                        if (f.reverseEachByHierarchical(j, null, i) === !1) return
                    } else for (var u = T - 1; u >= 0; u--) if (p = V[u], p._layer === C && (H = i ? j.call(i, p) : j(p), H === !1)) return
                } else if (f.isHierarchicalRendering()) f.reverseEachByHierarchical(j, null, i); else for (h = T - 1; h >= 0; h--) if (p = V[h], H = i ? j.call(i, p) : j(p), H === !1) return
            },
            getViewRect: function () {
                return this._29I
            },
            getContentRect: function () {
                var E = this, Z = E._84I;
                return Z || (E.each(function (I) {
                    E.isVisible(I) && (Z = nf(Z, E.getDataUIBounds(I)))
                }), E._84I = Z ? Z : af), E._84I
            },
            getScrollRect: function () {
                return nf(this.getContentRect(), this._29I)
            },
            makeCenter: function (b, O, U) {
                var E = this;
                if (!E.getWidth() || !E.getHeight()) return U || io(E.centerData, E, [b, O, !0], 200), void 0;
                E.makeVisible(b), E.validate();
                var Y = E.getDataUIBounds(b);
                if (Y) {
                    var e = E.getWidth(), z = E.getHeight(), V = Y.x + Y.width / 2, G = Y.y + Y.height / 2,
                        F = -V * E._zoom + e / 2, H = -G * E._zoom + z / 2;
                    E.setTranslate(F, H, O)
                }
            },
            fitData: function (O, f, p, r, E) {
                var M = this;
                if (!M.getWidth() || !M.getHeight()) return E || io(M.fitData, M, [O, f, p, r, !0], 200), void 0;
                M.makeVisible(O), M.validate();
                var D = M.getDataUIBounds(O);
                D && (D = us(D), pk(D, p == t ? 20 : p), M.fitRect(D, f, r))
            },
            fitContent: function (n, X, s, G) {
                var h = this;
                if (!h.getWidth() || !h.getHeight()) return G || io(h.fitContent, h, [n, X, s, !0], 200), void 0;
                h.validate();
                var S = us(h.getContentRect());
                pk(S, X == t ? 20 : X), h.fitRect(S, n, s)
            },
            fitRect: function (C, V, L) {
                var u = this, T = u.getWidth(), y = u.getHeight(), W = C.x + C.width / 2, I = C.y + C.height / 2,
                    l = _(T / C.width, y / C.height), Y = u._zoom, j = -W * Y + T / 2, f = -I * Y + y / 2;
                0 === l || isNaN(l) || (L && (l = _(1, l)), V ? u.setTranslate(j, f, {
                    finishFunc: function () {
                        u.setZoom(l, V)
                    }
                }) : (u.setTranslate(j, f), u.setZoom(l)))
            },
            toCanvas: function (d, f) {
                f = f || this._zoom, this.validateImpl();
                var A = this, J = A.getContentRect();
                J.width || (J.width = 10), J.height || (J.height = 10);
                var K = ns(), L = J.x * f, y = J.y * f, w = J.width * f, E = J.height * f;
                ed(K, w, E, 1);
                var H = Oo(K);
                return d = d || this._dataModel.getBackground(), d && ip(H, 0, 0, w, E, d), tq(H, -L, -y), H.scale(f, f), A._42(H), H.restore(), K
            },
            toDataURL: function (H, K, m) {
                return this.toCanvas(H, m).toDataURL(K || "image/png", 1)
            },
            getClipBounds: function () {
                return this._74O
            },
            _42: function (Y, k) {
                var b, E, J = this;
                J._93db(Y, k), J.each(function (u) {
                    J._56I[u._id] && (b = J.getDataUI(u), b && (E = b._79o(), U.HtmlNode && u instanceof U.HtmlNode ? b._42(Y) : (!k || fn(k, E)) && b._42(Y)))
                }), J._92db(Y, k)
            },
            validateImpl: function () {
                var f, w, k, C, Y, Z = this, X = Z.tx(), g = Z.ty(), O = Z._zoom, A = Z._canvas, p = this.getWidth(),
                    i = this.getHeight(), S = Z._29I, N = {x: -X / O, y: -g / O, width: p / O, height: i / O}, J = {},
                    o = Z._34I, s = Z._24I, B = Z._32I, M = Z._23I;
                (p !== A.clientWidth || i !== A.clientHeight) && (ed(A, p, i), B = 1), B || Zh(N, S) || (B = 1), Z._29I = N, Z.each(function (T) {
                    w = T._id;
                    var r = J[w] = Z.isVisible(T);
                    r !== Z._56I[w] && (s[w] = T, k = Z.getDataUI(s[w]), k && k._84o(r), Z._84o(T, r))
                }, Z);
                for (w in s) k = Z.getDataUI(s[w]), k && (!B && Z._56I[w] && (Y = k._79o(), Y && o.add(Y)), k.invalidate()), Z._83I = 1;
                if (Z._56I = J, !B) for (w in s) J[w] && (k = Z.getDataUI(s[w]), k && (Y = k._79o(), Y && o.add(Y)));
                if (B ? C = N : (o.each(function (P) {
                    fn(N, P) && (C = nf(C, P))
                }), C && (pk(C, K(1, 1 / O)), C.x = I(C.x * O) / O, C.y = I(C.y * O) / O, C.width = c(C.width * O) / O, C.height = c(C.height * O) / O, C = Oe(N, C))), Z._74O = C, C && (f = Oo(A), Vb(f, X, g, O), f.beginPath(), f.rect(C.x, C.y, C.width, C.height), f.clip(), f.clearRect(C.x, C.y, C.width, C.height), Z._42(f, C), f.restore(), delete Z._74O), Z._24I = {}, o.clear(), delete Z._32I, M && p > 0 && i > 0) {
                    var k = Z.getDataUI(M);
                    if (k) {
                        var Y = k._79o(), b = Z._29I, h = b.x, r = b.y, P = b.width, U = b.height, O = Z._zoom;
                        Y && !fn(Y, b) && (Y.x + Y.width < h && Z.tx(-Y.x * O), Y.x > h + P && Z.tx(-(Y.x + Y.width - P) * O), Y.y + Y.height < r && Z.ty(-Y.y * O), Y.y > r + U && Z.ty(-(Y.y + Y.height - U) * O))
                    }
                    delete Z._23I
                }
                Z._83I && (delete Z._83I, delete Z._84I), Z._98O()
            },
            isScrollBarVisible: function () {
                return !!this._79O
            },
            setScrollBarVisible: function (W) {
                var U = this;
                W !== U.isScrollBarVisible() && (W ? (lm(U._view, U._79O = Ac()), lm(U._79O, U._27I = Ac()), lm(U._79O, U._28I = Ac())) : (An(U._79O), delete U._79O, delete U._27I, delete U._28I), U.fp("scrollBarVisible", !W, W))
            },
            showScrollBar: function () {
                var D = this;
                D._79O && (D._85I || (y(function () {
                    D._86I()
                }, bd), D.iv()), D._85I = new Date)
            },
            _86I: function () {
                var z = this;
                if (z._85I) {
                    var P = new Date, Z = P.getTime();
                    Z - z._85I.getTime() >= bd ? (delete z._85I, z.iv()) : y(function () {
                        z._86I()
                    }, bd)
                }
            },
            _98O: function () {
                var S = this, T = this._27I, N = this._28I;
                if (S._79O) {
                    if (S._autoHideScrollBar && !S._85I) return T.style.visibility = al, N.style.visibility = al, void 0;
                    var Q = S.getScrollBarColor(), n = S._zoom, w = S.getScrollBarSize(), v = S.getViewRect(),
                        W = S.getScrollRect(), b = v.height * n, i = W.height * n, V = v.width * n - w - 2,
                        q = b * ((v.y - W.y) * n / i), E = b * (b / i), O = T.style;
                    i - .5 > b ? (Dq > E && (q = q + E / 2 - Dq / 2, 0 > q && (q = 0), q + Dq > b && (q = b - Dq), E = Dq), ef(T, V, q, w, E), O.visibility = Db, O.background = Q, O.borderRadius = w / 2 + Pb) : O.visibility = al;
                    var $ = v.width * n, y = W.width * n, q = v.height * n - w - 2, V = $ * ((v.x - W.x) * n / y),
                        B = $ * ($ / y), O = N.style;
                    y - .5 > $ ? (Dq > B && (V = V + B / 2 - Dq / 2, 0 > V && (V = 0), V + Dq > $ && (V = $ - Dq), B = Dq), ef(N, V, q, B, w), O.visibility = Db, O.background = Q, O.borderRadius = w / 2 + Pb) : O.visibility = al
                }
            },
            setDataModel: function (B) {
                var Q = this, o = Q._dataModel, I = Q._selectionModel;
                o !== B && (o && (o.ump(Q.handleDataModelPropertyChange, Q), o.umm(Q.handleDataModelChange, Q), o.umd(Q.handleDataPropertyChange, Q), o.removeIndexChangeListener(Q._75O, Q), o.removeHierarchyChangeListener(Q.handleHierarchyChange, Q), I || o.sm().ums(Q.handleSelectionChange, Q)), Q._dataModel = B, B.mp(Q.handleDataModelPropertyChange, Q), B.mm(Q.handleDataModelChange, Q), B.md(Q.handleDataPropertyChange, Q), B.addIndexChangeListener(Q._75O, Q), B.addHierarchyChangeListener(Q.handleHierarchyChange, Q), I ? I._21I(B) : B.sm().ms(Q.handleSelectionChange, Q), Q.invalidateAll(!0), Q.fp(ec, o, B), Q._canvas.style.background = B.getBackground() || "")
            },
            handleDataModelPropertyChange: function (i) {
                if ("background" === i.property) {
                    var E = this._canvas.style.background, F = i.newValue || "";
                    this._canvas.style.background = F, this.fp("canvasBackground", E, F)
                } else "hierarchicalRendering" === i.property && this.redraw()
            },
            handleDataPropertyChange: function (g) {
                this.invalidateData(g.data)
            },
            onPropertyChanged: function (q) {
                var S = this, v = q.property;
                if (S.redraw(), "zoom" === v) {
                    var y = S.sm().getSelection();
                    y.size() && y.each(function (z) {
                        z.invalidate()
                    })
                }
                Xd[v] ? S.showScrollBar() : v === Gb && S.onCurrentSubGraphChanged(q)
            },
            onCurrentSubGraphChanged: function () {
                this.reset()
            },
            handleDataModelChange: function (E) {
                var L = this, s = E.kind, q = E.data;
                if (L._83I = 1, "add" === s) L.invalidateData(q), to(q) && q.getEdgeGroup() && q.getEdgeGroup().eachSiblingEdge(L.invalidateData, L); else if (s === Ad) {
                    L._21Q(q);
                    var Q = q._id, W = L._25I[Q];
                    if (W) {
                        if (L._56I[Q]) {
                            var f = W._79o();
                            f && L.redraw(f)
                        }
                        W.dispose(), delete L._25I[Q], delete L._24I[Q], delete L._56I[Q]
                    }
                    q === L._currentSubGraph && L.setCurrentSubGraph(t)
                } else s === fj && (L.invalidateAll(!0), L.setCurrentSubGraph(t))
            },
            _75O: function (l) {
                this.invalidateData(l.data)
            },
            handleHierarchyChange: function (G) {
                this.invalidateData(G.data)
            },
            adjustIndex: function (e) {
                var d = this;
                if (d.isVisible(e)) {
                    for (var I = e; I._parent && d.isVisible(I._parent);) I = I._parent;
                    I && I !== e && d._dataModel.adjustIndex(I), d._dataModel.adjustIndex(e)
                }
            },
            getSelectWidth: function (A) {
                return A.s("select.width")
            },
            isSelectable: function (k) {
                return !(k.getParent() instanceof U.Block) && k.s("2d.selectable") && this.sm().isSelectable(k)
            },
            isMovable: function (N) {
                var l = this;
                return to(N) && N.getStyle(bh) !== ro ? !1 : N.s("2d.movable") ? l._movableFunc ? l._movableFunc(N) : !0 : !1
            },
            isEditable: function (l) {
                var B = this;
                if (!B._editInteractor || !B.isSelected(l)) return !1;
                if (sj(l)) {
                    var Q = B.getDataUI(l);
                    if (!Q || Q._88I) return !1
                }
                return to(l) && l.getStyle(bh) !== ro ? !1 : l.s("2d.editable") ? B._editableFunc ? B._editableFunc(l) : !0 : !1
            },
            handleDelete: function () {
                this._editInteractor && (this._editInteractor.handleDelete ? this._editInteractor.handleDelete() : this.removeSelection())
            },
            isPointEditable: function (S) {
                return Sb(S) && 0 !== S.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(S) : !0
            },
            isRectEditable: function (b) {
                return this._rectEditableFunc ? this._rectEditableFunc(b) : !0
            },
            isRotationEditable: function (A) {
                return A.setRotation && A.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(A) : !0 : !1
            },
            getRotationPoint: function (r) {
                var e = r.getAnchor(), $ = r.getScale(), I = this._zoom,
                    d = Wc(r.getRotation(), 0, -r.getHeight() * $.y * e.y - ($.y < 0 ? -1 : 1) * (w ? 32 : 16) / I),
                    U = r.p();
                return d.x += U.x, d.y += U.y, d
            },
            getLogicalPoint: function (F) {
                var X = this;
                return Xn(F, X._canvas, X.tx(), X.ty(), X._zoom, X._zoom)
            },
            getSelectedDataAt: function (n) {
                var E = this;
                return this.getDataAt(n, function (t) {
                    return E.isSelected(t)
                })
            },
            getDataAt: function (v, U, G) {
                v.target && (v = this.lp(v));
                var Z, p = this._zoom;
                return this.reverseEach(function (T) {
                    return (U ? U(T) : this.isSelectable(T)) && this.rectIntersects(T, $c(v.x, v.y, G, p)) ? (Z = T, !1) : void 0
                }, this), Z
            },
            getIconInfoAt: function (q, e) {
                var O = this;
                if (q.target && (q = O.lp(q)), e || (e = O.getDataAt(q)), e) {
                    var y = O.getDataUI(e);
                    if (y && y._38o) {
                        var Z, M = y._38o, H = new Gn;
                        for (Z in M.icons) H.add(Z);
                        for (var b = H.size() - 1; b >= 0; b--) {
                            Z = H.get(b);
                            for (var L = M.rects[Z], C = L.rotation, S = L.length - 1; S >= 0; S--) {
                                var I = L[S], d = I.width, N = I.height,
                                    J = {x: q.x - I.x - d / 2, y: q.y - I.y - N / 2};
                                C != t && (J = Wc(-C, J.x, J.y));
                                var I = {x: -d / 2, y: -N / 2, width: d, height: N};
                                if (Nf(I, J)) return {
                                    key: Z,
                                    index: S,
                                    name: M.icons[Z].names[S],
                                    rect: L[S],
                                    point: q,
                                    rotation: C,
                                    relativeRect: I,
                                    relativePoint: J,
                                    data: e
                                }
                            }
                        }
                    }
                }
                return t
            },
            getDatasInRect: function (M, H, W) {
                W === f && (W = 1);
                var j = this, E = new Gn;
                return j.reverseEach(function (m) {
                    W && !j.isSelectable(m) || (H ? j.rectIntersects(m, M) : j.rectContains(m, M)) && E.add(m)
                }), E
            },
            moveSelection: function (I, m) {
                var d, V = this, n = V.dm();
                n && (d = n.getHistoryManager()), d && d.beginInteraction(), Eo(V.sm().toSelection(V.isMovable, V), I, m), d && d.endInteraction()
            },
            getDataUIBounds: function (Y) {
                var x = this.getDataUI(Y);
                return x ? x._79o() : t
            },
            drawData: function (g, C) {
                var h = this.getDataUI(C);
                h && h._42(g), C instanceof U.Block && C.eachChild(function (J) {
                    this.drawData(g, J)
                }, this)
            },
            getBoundsForGroup: function (N) {
                return N.s($k) ? this.getDataUIBounds(N) : t
            },
            rectIntersects: function (Q, r) {
                this.validate();
                var A = t;
                if (this._56I[Q._id]) {
                    var g = this._25I[Q._id];
                    if (g) {
                        var f = g._79o();
                        if (_m(r, f)) A = !0; else if ((r = Oe(r, f)) && (g.rectIntersects && (A = g.rectIntersects(r)), A == t)) {
                            if (!Q.s("pixelPerfect")) return !0;
                            var B = r.x, P = r.y, i = r.width, m = r.height, j = this._zoom, H = N.hitMaxArea,
                                n = i * m * j * j;
                            if (n > H) {
                                var l = Math.sqrt(H / n);
                                j *= l
                            }
                            i *= j, m *= j, B *= j, P *= j;
                            var x = Pl(i, m);
                            tq(x, -B, -P), x.scale(j, j), this._drawForChecking = !0, this.drawData(x, Q), this._drawForChecking = !1;
                            try {
                                for (var s = 0, C = x.getImageData(0, 0, i, m).data; s < C.length; s += 4) if (0 !== C[s + 3]) {
                                    A = !0;
                                    break
                                }
                                x.restore()
                            } catch (O) {
                                jg = t, A = !0
                            }
                        }
                    }
                }
                return A ? !0 : !1
            },
            rectContains: function (a, t) {
                if (this._56I[a._id]) {
                    var f = this._25I[a._id];
                    if (f) return _m(t, f._79o())
                }
                return !1
            },
            reset: function () {
                this.setZoom(1), this.setTranslate(0, 0)
            },
            handleKeyDown: function (C) {
                if (!N.isInput(C.target)) {
                    var m = this, M = m._focusData, a = M && m._25I[M._id], q = 0, e = m._dataModel._datas;
                    M && M._enabled && M._editable && a && a.onKeyDown && a.onKeyDown(C) === !0 || (9 === C.keyCode && (M && (q = e.indexOf(M), es(C) ? -1 === --q && (q = 0) : ++q === e.size() && (q = 0)), m._focusData = M = e.get(q), m.sm().setSelection(M)), Zb(C) ? m.selectAll() : Jg(C) && m.isResettable() && m.reset(), m.sm().isEmpty() || (Xk(C) && m.handleDelete(C), yf(C) && (m.moveSelection(-1, 0), m.fi({kind: "moveLeft"})), Jb(C) && (m.moveSelection(0, -1), m.fi({kind: "moveUp"})), ck(C) && (m.moveSelection(1, 0), m.fi({kind: "moveRight"})), Hd(C) && (m.moveSelection(0, 1), m.fi({kind: "moveDown"}))))
                }
            },
            handleScroll: function (M, h) {
                Mh(M);
                var x = this.lp(M);
                h > 0 ? this.scrollZoomIn(x) : 0 > h && this.scrollZoomOut(x)
            },
            handlePinch: function (e, A, y) {
                this._68I || (A > y ? this.pinchZoomIn(e) : this.pinchZoomOut(e))
            },
            checkDoubleClickOnNote: function (o, k) {
                var c = this, Z = c.lp(o), s = c.getDataUI(k), V = s.note2Info;
                return V && k.s("note2.toggleable") && Nf(V.clickRect, Z) ? (k.s(is, !k.s(is)), c.fi({
                    kind: "toggleNote2",
                    event: o,
                    data: k
                }), !0) : (V = s.noteInfo, V && k.s("note.toggleable") && Nf(V.clickRect, Z) ? (k.s(Cg, !k.s(Cg)), c.fi({
                    kind: "toggleNote",
                    event: o,
                    data: k
                }), !0) : !1)
            },
            _84o: function () {
            },
            isNoteVisible: function () {
                return this._zoom > .15
            },
            isLabelVisible: function () {
                return this._zoom > .15
            },
            isSelectVisible: function () {
                return this._zoom > .15
            },
            isEditVisible: function () {
                return this._zoom > .15
            },
            autoScroll: function (p, q) {
                var v = this, N = v.getAutoScrollZone(), A = N / v.getZoom(), d = N / 4, Q = v._29I, w = v.lp(p),
                    W = {x: v.tx(), y: v.ty()};
                return w && N > 0 && Q && (w.x - Q.x < A ? v.translate(d, 0) : Q.x + Q.width - w.x < A && v.translate(-d, 0), w.y - Q.y < A ? v.translate(0, d) : Q.y + Q.height - w.y < A && v.translate(0, -d)), W.x = v.tx() - W.x, W.y = v.ty() - W.y, q && (q.x += W.x, q.y += W.y), W
            },
            getMoveMode: function ($, h) {
                var T = h.s("2d.move.mode");
                return T ? T : Zn["88"] ? "x" : Zn["89"] ? "y" : "xy"
            }
        });
        var Hc = function (n, F) {
            var O = this;
            O.gv = n, O.s = function (g) {
                return F.getStyle(g)
            }, O._data = F, O._87I = new Gn
        };
        zb(Hc, z, {
            _6I: t, ms_icons: 1, _84o: function () {
            }, dispose: function () {
            }, isShadowed: function () {
                return this.s("shadow") || this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
            }, getSelectWidth: function () {
                var R = this, J = R.gv.isSelected(R._data);
                return !J || R.isShadowed() ? 0 : R.gv.getSelectWidth(R._data)
            }, getBodyColor: function (B) {
                var s = this._data, c = this.gv.getBodyColor(s);
                return c ? c : B ? s.getStyle(B) : t
            }, _2Q: function (t) {
                return this.s(t)
            }, _1Q: function (a, D, Z, F) {
                var W = this.s, S = W(D + ".dash.color");
                a.strokeStyle = S, a.lineWidth = Z, a.stroke(), W(D + ".dash.3d") && je(a, S, W(D + ".dash.3d.color"), Z, this.gv._zoom, W(D + ".dash.3d.accuracy")), Jk(a, F)
            }, invalidate: function () {
                this._6I = t
            }, _79o: function () {
                var W = this;
                if (!W._6I) {
                    W.labelInfo = W.label2Info = W.noteInfo = W.note2Info = W._38o = t, W._87I.clear(), W._3O();
                    var E = W._data, u = W.gv;
                    W._55O = u.isEditable(E) ? {
                        _42O: u.isRectEditable(E),
                        _43O: u.isPointEditable(E),
                        _56O: u.isRotationEditable(E)
                    } : t, W._6I = W._81o()
                }
                return W._6I
            }, _3O: function () {
            }, getPosition: function () {
                return af
            }, _68o: function (T, y) {
                T && this._87I.add(Gc(T, y))
            }, _81o: function () {
                var A = this, l = A.s;
                A._24O(ri, "getLabel"), A._24O(Vp, "getLabel2"), A._26O(lk, "getNote"), A._26O(ds, "getNote2"), A._15O(), A._55O && A._48O();
                var w;
                if (A._87I.each(function (U) {
                    w = nf(w, U)
                }), w && A.isShadowed()) {
                    var $ = us(w);
                    $.x += l("shadow.offset.x"), $.y += l("shadow.offset.y"), pk($, l("shadow.blur")), w = nf(w, $)
                }
                return A._87I.clear(), w
            }, _42: function (a) {
                var R = this, f = R._data, P = R.gv, l = R.s, G = l("opacity"), g = this.isShadowed();
                if (g) {
                    var y = a.shadowOffsetX, c = a.shadowOffsetY, S = a.shadowBlur, U = a.shadowColor, v = P.getZoom();
                    a.shadowOffsetX = l("shadow.offset.x") * v, a.shadowOffsetY = l("shadow.offset.y") * v, a.shadowBlur = l("shadow.blur") * v, a.shadowColor = l("select.color")
                }
                if (G != t) {
                    var b = a.globalAlpha;
                    a.globalAlpha = G
                }
                R._80o(a), P.isLabelVisible(f) && ((!P._drawForChecking || l("label.selectable")) && Ab(a, R.labelInfo), (!P._drawForChecking || l("label2.selectable")) && Ab(a, R.label2Info)), P.isNoteVisible(f) && (Rf(a, R.noteInfo), Rf(a, R.note2Info)), R._99O(a), G != t && (a.globalAlpha = b), g && (a.shadowOffsetX = y, a.shadowOffsetY = c, a.shadowBlur = S, a.shadowColor = U)
            }, _80o: function () {
            }, _47O: function () {
            }, _24O: function (K, F) {
                var D = this, u = D._data, w = D.gv, W = D.s, p = w[F](u);
                if (p != t) {
                    var M = W(K + ".scale"), f = W(K + ".max"), b = W(K + ".position"), k = D[K + "Info"] = {
                        label: p,
                        scale: M,
                        color: w[F + "Color"](u),
                        font: W(K + ".font"),
                        opacity: W(K + ".opacity"),
                        align: W(K + ".align"),
                        rotation: D.getRotation(W(K + ".rotation"), !1, b),
                        background: w[F + "Background"](u)
                    }, P = lq(k, p);
                    f > 0 && f < P.width && (k.labelWidth = P.width, P.width = f), 1 !== M && (P.width *= M, P.height *= M);
                    var r = D.getPosition(b, W(K + ".offset.x"), W(K + ".offset.y"), P, W(K + ".position.fixed"));
                    if (P.x = r.x - P.width / 2, P.y = r.y - P.height / 2, D._68o(k.rect = P, k.rotation), 1 !== M) {
                        var v = P.width / M, d = P.height / M;
                        k.rect = {x: r.x - v / 2, y: r.y - d / 2, width: v, height: d}
                    }
                }
            }, _26O: function (_, O) {
                var d = this, U = d.gv, X = d._data, w = d.s, T = U[O](X);
                if (T != t) {
                    var D, M, I = w(_ + ".scale"), F = d[_ + "Info"] = {
                        note: T,
                        scale: I,
                        data: X,
                        view: U,
                        expanded: w(_ + ".expanded"),
                        font: w(_ + ".font"),
                        color: w(_ + ".color"),
                        opacity: w(_ + ".opacity"),
                        align: w(_ + ".align"),
                        icon: w(_ + ".icon"),
                        backgroundImage: w(_ + ".backgroundImage"),
                        borderWidth: w(_ + ".border.width"),
                        borderColor: w(_ + ".border.color"),
                        background: U[O + "Background"](X)
                    }, o = d.getPosition(w(_ + ".position"), w(_ + ".offset.x"), w(_ + ".offset.y")), R = o.x, G = o.y;
                    if (F.expanded) {
                        var Q, x = w(_ + ".max"), Y = w(_ + ".backgroundImage");
                        Y ? (Y = nj(Y), Q = {
                            width: ko(Y, X),
                            height: Rh(Y, X)
                        }) : Q = lq(F, T), Q.width += 6, Q.height += 2, x > 0 && x < Q.width && (F.labelWidth = Q.width, Q.width = x), D = Q.width, M = Q.height + 8, F.clickRect = {
                            x: R - D * I / 2,
                            y: G - M * I,
                            width: D * I,
                            height: M * I * Q.height / M
                        }
                    } else {
                        var i = w(_ + ".icon");
                        i ? (i = nj(i), D = ko(i, X), M = Rh(i, X)) : (D = 12, M = 18), F.clickRect = {
                            x: R - D * I / 2,
                            y: G - M * I,
                            width: D * I,
                            height: M * I
                        }
                    }
                    F.rect = {x: R - D / 2, y: G - M * I / 2 - M / 2, width: D, height: M};
                    var u = c(F.borderWidth / 2) * I;
                    d._68o({x: R - D * I / 2 - u, y: G - M * I - u, width: D * I + 2 * u, height: M * I + 2 * u})
                }
            }, _48O: function () {
            }, _99O: function (u) {
                var W = this, X = W._38o;
                if (X) {
                    var w = W.gv, T = W._data, g = X.icons;
                    for (var M in g) {
                        var Z = g[M], y = X.rects[M];
                        if (y) {
                            var G = Uo(Z.opacity, T, w), m = Uo(Z.names, T, w), k = m ? m.length : 0, e = y.rotation;
                            if (G != t) {
                                var v = u.globalAlpha;
                                u.globalAlpha *= G
                            }
                            for (var J = 0; k > J; J++) {
                                var Q = m[J], i = nj(Q), z = y[J];
                                if (e) {
                                    var o = z.x + z.width / 2, s = z.y + z.height / 2;
                                    u.save(), tq(u, o, s), ac(u, e), tq(u, -o, -s)
                                }
                                Gi(u, i, Uo(Z.stretch, T, w), z.x, z.y, z.width, z.height, W._data, W.gv), e && u.restore()
                            }
                            G != t && (u.globalAlpha = v)
                        }
                    }
                }
            }
        });
        var wn = function (q, _) {
            Ge(wn, this, [q, _])
        };
        zb(wn, Hc, {
            _checkEmptyRect: !0, _40O: function (w, I) {
                var U = this, i = U.s, f = w.rect;
                if ((w.borderColor = U.gv.getBorderColor(U._data)) && (w.borderType = i("border.type"), w.borderWidth = i("border.width"), w.borderPadding = i("border.padding"), I = K(I, w.borderPadding + w.borderWidth / 2)), w.selectWidth = U.getSelectWidth()) {
                    var g = U.gv._zoom;
                    w.selectType = i("select.type"), w._97o = i("select.color"), w.selectPadding = i("select.padding"), I = K(I, (w.selectPadding + w.selectWidth / 2) / g)
                }
                if (I > 0) {
                    var o = U._data.getScale();
                    I *= K(1, K(G(o.x), G(o.y))), f = us(f), pk(f, I)
                }
                U._68o(f)
            }, _39O: function (D, x) {
                var H, g = this, o = x.rect;
                if (x.borderWidth > 0 && (H = x.borderPadding, D.strokeStyle = x.borderColor, D.lineWidth = x.borderWidth, ob(D, x.borderType, {
                    x: o.x - H,
                    y: o.y - H,
                    width: o.width + 2 * H,
                    height: o.height + 2 * H
                }), D.stroke()), x.selectWidth > 0) {
                    var F = g.gv._zoom;
                    if (H = x.selectPadding / F, D.strokeStyle = x._97o, D.lineWidth = x.selectWidth / F, x.rotation != t) {
                        D.save(), D.translate(x.position.x, x.position.y), D.rotate(x.rotation);
                        var N = g._data, B = N.getWidth(), k = N.getHeight(), J = x.scale, X = x.anchor;
                        o = {x: J.x * -B * X.x, y: J.y * -k * X.y, width: J.x * B, height: J.y * k}
                    }
                    ob(D, x.selectType, {
                        x: o.x - H,
                        y: o.y - H,
                        width: o.width + 2 * H,
                        height: o.height + 2 * H
                    }), x.rotation != t && D.restore(), D.stroke()
                }
            }, _3O: function () {
                var w = this, H = w.s, p = w._data, m = p.getStyle(qi), Q = w.getBodyColor(), n = w._83o = m ? {
                    shape: m,
                    _53o: w.getBodyColor("shape.background"),
                    _27Q: nj(H("shape.repeat.image"), Q),
                    shapeGradientPack: H("shape.gradient.pack"),
                    _54o: H("shape.border.width"),
                    _55o: H("shape.border.color"),
                    _56o: H("shape.border.3d"),
                    _57o: H("shape.border.3d.color"),
                    _58o: H("shape.border.3d.accuracy"),
                    shapeGradient: H("shape.gradient"),
                    _59o: H("shape.gradient.color"),
                    _60o: H("shape.border.pattern"),
                    _61o: H("shape.border.cap"),
                    _62o: H("shape.border.join")
                } : {img: nj(p.getImage(), Q), bodyColor: Q, stretch: H("image.stretch")};
                if (q && !X) ; else {
                    n.rect = p.getRect(), n.position = p.p(), n.scale = p.getScale(), n.anchor = p.getAnchor(), n.rotation = p.getRotation(), m === $d && (n._63o = H("shape.depth"));
                    var g = 0;
                    m && (g = No(t, n._54o / 2, n._62o), w.s("shape.dash") && (g = K(g, (w.s("shape.dash.width") || n._54o) / 2))), w._40O(n, g)
                }
            }, getPosition: function (R, o, B, p) {
                var V = Ym(R, this._83o.rect, p);
                return V.x += o, V.y += B, V
            }, _80o: function (x) {
                var k = this, s = k.s, G = k.gv, q = k._data, e = k._83o, f = e.rect, u = e.position, S = e.rotation,
                    i = e.anchor, r = e.scale, O = e.shape;
                if (!k._checkEmptyRect || f.width > 0 && f.height > 0) {
                    var o = q.getSize();
                    if (o.x = -o.width * i.x, o.y = -o.height * i.y, x.save(), tq(x, u.x, u.y), ac(x, S), yi(x, r.x, r.y), k.freeDraw) k.freeDraw(x, o, e); else if (O) {
                        var l, d, t, P, H = e._60o, Y = ab(x, H), c = e._53o, B = e._27Q, g = e._54o, h = e._55o,
                            A = e.shapeGradientPack, E = x.lineJoin, Q = x.lineCap;
                        if ("roundRect" === O ? l = s("shape.corner.radius") : "polygon" === O ? l = s("shape.polygon.side") : "arc" === O && (l = s("shape.arc.from"), d = s("shape.arc.to"), t = s("shape.arc.close"), P = s("shape.arc.oval")), x.lineJoin = e._62o, x.lineCap = e._61o, c || B || A ? (ob(x, O, o, l, d, t, P), A ? uk(x, A) : B ? Cn(x, B) : Ji(x, c, e.shapeGradient, e._59o, o), x.fill(), A && x.restore(), x !== Y && ob(Y, O, o, l, d, t, P)) : ob(Y, O, o, l, d, t, P), g > 0) {
                            var z = s("shape.border.width.absolute");
                            z && (x.save(), x.setTransform(1, 0, 0, 1, 0, 0)), x.lineWidth = g, x.strokeStyle = h, x.stroke(), z && x.restore(), e._56o && je(x, h, e._57o, g, G._zoom, e._58o)
                        }
                        if (Jk(x, H), s("shape.dash")) {
                            var U = s("shape.dash.width") || g;
                            if (U > 0) {
                                H = s("shape.dash.pattern");
                                var Y = ab(x, H, k._2Q("shape.dash.offset"));
                                Y !== x && ob(Y, O, o, l, d, t, P), k._1Q(x, "shape", U, H)
                            }
                        }
                        km(x, c, e._63o, o), x.lineJoin = E, x.lineCap = Q
                    } else Gi(x, e.img, e.stretch, o.x, o.y, o.width, o.height, q, G, e.bodyColor);
                    x.restore()
                }
                k._39O(x, e)
            }, _48O: function () {
            }, _47O: function () {
            }
        });
        var Rb = function (j, k) {
            Ge(Rb, this, [j, k])
        }, op = function (C, t, O, R) {
            var e = Lb(C, t);
            return O = R ? _(O, e) : nh(O, e), e ? O /= e : O = 0, {x: C.x + (t.x - C.x) * O, y: C.y + (t.y - C.y) * O}
        };
        zb(Rb, Hc, {
            _3O: function () {
                var Z, n = this, r = n._data, d = n.gv, j = n.s, c = j(bh), M = r.isLooped(), H = j("edge.width"),
                    a = j("edge.center"), p = j("edge.offset"), A = d.getBorderColor(r), u = A ? j("border.width") : 0,
                    w = n.getSelectWidth(), q = r._40I, s = r._41I, b = n._78o = q && s ? {
                        looped: M,
                        type: c,
                        width: H,
                        center: a,
                        color: n.getBodyColor("edge.color"),
                        borderColor: A,
                        borderWidth: u,
                        _97o: w ? j("select.color") : t,
                        selectWidth: w,
                        pattern: j("edge.pattern"),
                        cap: j("edge.cap"),
                        join: j("edge.join"),
                        is3d: j("edge.3d"),
                        _67o: j("edge.3d.color"),
                        _66o: j("edge.3d.accuracy")
                    } : t;
                if (b) {
                    var C = N.getEdgeType(c);
                    if (C) {
                        var T = C(r, cq(n, d, r, M, c), d, n._19Q);
                        T.points && T.points.size() > 1 && (b._4O = T, Z = Cc(b._4O.points))
                    } else {
                        var S = ci(d, q, j("edge.source.position"), j("edge.source.offset.x"), j("edge.source.offset.y"), j("edge.source.anchor.x"), j("edge.source.anchor.y")),
                            X = ci(d, s, j("edge.target.position"), j("edge.target.offset.x"), j("edge.target.offset.y"), j("edge.target.anchor.x"), j("edge.target.anchor.y"));
                        if (c === ro) {
                            var F = b.points = j(Nr) || Ne, R = F.size();
                            if (b.segments = j("edge.segments"), !a) if (p) {
                                var Q = op(S, R ? F.get(0) : X, p, R), B = op(X, R ? F.get(R - 1) : S, p, R);
                                S = Q, X = B
                            } else {
                                var U = qr(d, q), y = qr(d, s), G = qg(S, R ? F.get(0) : X, U);
                                G && (S = {x: G[0], y: G[1]}), G = qg(R ? F.get(R - 1) : S, X, y), G && (X = {
                                    x: G[0],
                                    y: G[1]
                                })
                            }
                            Z = nf(Cc(b.points), Cc(S, X))
                        } else {
                            var V = cq(n, d, r, M, c);
                            if (n._19Q || (V = -V), M) S = us(S), S.x = d.getNodeRect(q).x, b.radius = V, Z = {
                                x: S.x - V,
                                y: S.y - V,
                                width: 2 * V,
                                height: 2 * V
                            }; else {
                                var m = Lb(S, X), L = nh(p, m), Q = {x: L, y: V}, B = {x: m - L, y: V},
                                    z = o(X.y - S.y, X.x - S.x), W = b.mat = new Vh(z);
                                if (b.orienAngle = z, b.angle = X.x < S.x ? z + P : z, b.rect = {
                                    x: Q.x,
                                    y: Q.y,
                                    width: B.x - Q.x,
                                    height: 0
                                }, b.origin = S, Q = W.tf(Q), Q.x += S.x, Q.y += S.y, B = W.tf(B), B.x += S.x, B.y += S.y, a) {
                                    var J = {x: m, y: 0};
                                    J = W.tf(J), J.x += S.x, J.y += S.y, Z = Cc([S, Q, B, J]), b.c1 = S, b.c2 = J
                                } else Z = Cc(Q, B);
                                S = Q, X = B
                            }
                        }
                        b.sourcePoint = S, b.targetPoint = X
                    }
                    var E = 0;
                    j("edge.dash") && (E = j("edge.dash.width") || H);
                    var x = "square" === b.cap ? .71 : .5;
                    No(Z, K(E * x, H * x + u + w), b.join), n._68o(Z)
                }
            }, getRotation: function (M, R, Q) {
                M = M || 0;
                var B = this._78o;
                if (B) {
                    var H, F = B.angle, w = B.points, U = B._4O;
                    if (F != t) return R ? B.orienAngle + M : F + M;
                    if (U) {
                        var j = U.points;
                        return H = j.size(), Pf[Q] ? H && 0 === H % 2 ? Cb(j.get(H / 2 - 1), j.get(H / 2), R, M) : M : Qf[Q] ? Cb(j.get(0), j.get(1), R, M) : Cb(j.get(H - 2), j.get(H - 1), R, M)
                    }
                    if (w) return H = w.size(), Pf[Q] ? H && 0 === H % 2 ? Cb(w.get(H / 2 - 1), w.get(H / 2), R, M) : M : Qf[Q] ? Cb(B.sourcePoint, H ? w.get(0) : B.targetPoint, R, M) : Cb(H ? w.get(H - 1) : B.sourcePoint, B.targetPoint, R, M)
                }
                return M
            }, getPosition: function (T, q, I, W, B) {
                var Y = this._78o;
                if (Y) {
                    var d, A = Y.type, e = Y.points, v = Y._4O, N = Y.sourcePoint, j = Y.targetPoint;
                    if (!A) return Y.looped ? {
                        x: N.x - Y.radius + q,
                        y: N.y + I
                    } : (B && N && j && (N.x > j.x || N.x === j.x && N.y > j.y) && (T = dh[T], I = -I), d = Ym(T, Y.rect, W), d.x += q, d.y += I, d = Y.mat.tf(d), d.x += Y.origin.x, d.y += Y.origin.y, d);
                    if (e) {
                        var d, l = e.size();
                        if (Pf[T]) {
                            if (l) {
                                var P = l % 2;
                                if (0 === P) return om(e.get(l / 2 - 1), e.get(l / 2), T, q, I, W, B);
                                d = e.get((l - P) / 2)
                            } else d = {x: (N.x + j.x) / 2, y: (N.y + j.y) / 2};
                            return d = Ym(T, {x: d.x, y: d.y, width: 0, height: 0}, W), d.x += q, d.y += I, d
                        }
                        return Qf[T] ? om(N, l ? e.get(0) : j, T, q, I, W, B) : om(l ? e.get(l - 1) : N, j, T, q, I, W, B)
                    }
                    if (v) {
                        var F = v.points, l = F.size();
                        if (Pf[T]) {
                            var P = l % 2;
                            return 0 === P ? om(F.get(l / 2 - 1), F.get(l / 2), T, q, I, W, B) : (d = F.get((l - P) / 2), d = Ym(T, {
                                x: d.x,
                                y: d.y,
                                width: 0,
                                height: 0
                            }, W), d.x += q, d.y += I, d)
                        }
                        return Qf[T] ? om(F.get(0), F.get(1), T, q, I, W, B) : om(F.get(l - 2), F.get(l - 1), T, q, I, W, B)
                    }
                }
                return af
            }, _42: function (b) {
                this._78o && Rb.superClass._42.call(this, b)
            }, drawPath: function (Z, h) {
                Z.beginPath();
                var F = h.type, G = h.points, V = h.segments, O = h._4O;
                if (!F || G) {
                    var Y = h.sourcePoint, k = Y.x, y = Y.y, C = h.targetPoint, q = C.x, B = C.y;
                    if (F) if (V) {
                        var U = new Gn({x: k, y: y});
                        U.addAll(G), U.add({x: q, y: B}), im(Z, U, V)
                    } else Z.moveTo(k, y), G.each(function (K) {
                        Z.lineTo(K.x, K.y)
                    }), Z.lineTo(q, B); else h.looped ? Z.arc(k, y, h.radius, 0, n, !0) : h.center ? (Z.moveTo(h.c1.x, h.c1.y), Z.lineTo(k, y), Z.lineTo(q, B), Z.lineTo(h.c2.x, h.c2.y)) : (Z.moveTo(k, y), Z.lineTo(q, B))
                } else O && im(Z, O.points, O.segments)
            }, _80o: function (j) {
                var M = this, s = M.s, F = M._78o, h = F.width, q = F.selectWidth, V = F.borderWidth, G = F.color,
                    p = j.lineJoin, I = j.lineCap, b = F.pattern;
                j.lineJoin = F.join, j.lineCap = F.cap, M.drawPath(ab(j, b), F);
                var S = s("edge.width.absolute");
                if (S && (j.save(), j.setTransform(1, 0, 0, 1, 0, 0)), q && (j.strokeStyle = F._97o, j.lineWidth = h + 2 * (V + q), j.stroke()), V && (j.strokeStyle = F.borderColor, j.lineWidth = h + 2 * V, j.stroke()), j.strokeStyle = G, j.lineWidth = h, j.stroke(), F.is3d && je(j, G, F._67o, h, M.gv._zoom, F._66o), S && j.restore(), Jk(j, b), s("edge.dash")) {
                    b = s("edge.dash.pattern");
                    var P = ab(j, b, M._2Q("edge.dash.offset"));
                    P !== j && M.drawPath(P, F), M._1Q(j, "edge", s("edge.dash.width") || h, b)
                }
                j.lineJoin = p, j.lineCap = I
            }, _48O: function () {
            }, _47O: function () {
            }, _71o: function (N, z) {
                var b = this, q = b._data;
                if (b._19Q = !0, !q.getEdgeGroup()) return N ? q.s("edge.gap") : 0;
                var L, n = 0, A = 0, K = 0;
                if (q.getEdgeGroup().getSiblings().each(function (R) {
                    R.each(function (d) {
                        if (b.gv.isVisible(d) && d.s(bh) == z) {
                            var B = d.s("edge.gap");
                            L ? (A += K / 2 + B / 2, K = B) : (L = d, K = B), d === q && (n = A)
                        }
                    })
                }), N) return A - n + K;
                var x = n - A / 2;
                return L && q._40I !== L._40I && (b._19Q = !1), x
            }
        });
        var jb = function (u, Q) {
            Ge(jb, this, [u, Q])
        };
        zb(jb, wn, {
            _3O: function () {
                var b, V, H = this, Z = H.s, A = H._data, $ = H.gv;
                if (H._88I = t, A.isExpanded() && A.eachChild(function (N) {
                    var G = $.getBoundsForGroup(N);
                    G && (V || (V = []), V.push(G), b = nf(b, G))
                }), b) {
                    var g = $.getLabel(A), w = Z("group.type");
                    b = qo(w, V, b), ap(b, A, "group.padding", 1);
                    var l = H._88I = {type: w, rect: b, _64o: b};
                    if (!w && g != t) {
                        var n, v = H.labelInfo = {
                            label: g,
                            color: Z("group.title.color"),
                            font: Z("group.title.font"),
                            align: Z("group.title.align")
                        }, m = lq(v, g), N = m.width, Y = m.height, y = Z("group.title.align");
                        N > b.width && (b.width = N), v.rect = {
                            y: b.y - Y,
                            width: m.width,
                            height: Y
                        }, n = y === ur ? b.x : y === Rl ? b.x + b.width - N : b.x + b.width / 2 - N / 2, v.rect.x = n, l.titleRect = {
                            x: b.x,
                            y: b.y - Y,
                            width: b.width,
                            height: Y + 1
                        }, l.rect = {x: b.x, y: b.y - Y, width: b.width, height: b.height + Y}
                    }
                    H._40O(l, Z("group.border.width") / 2)
                } else jb.superClass._3O.call(H)
            }, getPosition: function (w, h, S, M) {
                var W = this._88I;
                if (W) {
                    var L = Ym(w, W.rect, M);
                    return L.x += h, L.y += S, L
                }
                return jb.superClass.getPosition.apply(this, arguments)
            }, _24O: function (U, g) {
                var R = this._88I;
                (!R || R.type || "label2" === U) && jb.superClass._24O.call(this, U, g)
            }, _80o: function (W) {
                var l = this, r = l._88I;
                if (r) {
                    var Q = l._data, c = l.s, Y = l.gv, t = r.type, H = r.rect, b = r._64o, $ = r.titleRect,
                        f = l.getBodyColor(), R = nj(c("group.image"), f), v = c("group.image.stretch"),
                        K = l.getBodyColor("group.background"), T = nj(c("group.repeat.image"), f),
                        A = c("group.gradient.pack"), m = c("group.gradient"), e = c("group.gradient.color"),
                        o = c("group.depth");
                    if (t) {
                        var h = c("group.border.pattern"), S = c("group.border.width"), d = W.lineJoin, M = W.lineCap;
                        if (W.lineJoin = c("group.border.join"), W.lineCap = c("group.border.cap"), R) {
                            if (W.save(), ob(W, t, H), W.clip(), Gi(W, R, v, H.x, H.y, H.width, H.height, Q, Y, f), W.restore(), S > 0) {
                                var k = ab(W, h);
                                ob(k, t, H), W.lineWidth = S, W.strokeStyle = c("group.border.color"), W.stroke(), Jk(W, h)
                            }
                        } else {
                            var k = ab(W, h);
                            K || T || A ? (ob(W, t, H), A ? uk(W, A) : T ? Cn(W, T) : Ji(W, K, m, e, H), W.fill(), A && W.restore(), W !== k && ob(k, t, H)) : ob(k, t, H), S > 0 && (W.lineWidth = S, W.strokeStyle = c("group.border.color"), W.stroke()), Jk(W, h), t === $d && km(W, K, o, H)
                        }
                        W.lineJoin = d, W.lineCap = M
                    } else if (R ? Gi(W, R, v, b.x, b.y, b.width, b.height, Q, Y, l.getBodyColor()) : (K || T) && (T ? Cn(W, T) : Ji(W, K, m, e, b), ob(W, $d, b), W.fill(), km(W, K, o, b)), $) {
                        var L = c("group.title.background");
                        ip(W, $.x, $.y, $.width, $.height, L), km(W, L, o, $)
                    }
                    l._39O(W, r)
                } else jb.superClass._80o.call(l, W)
            }
        });
        var cr = function (G, N) {
            Ge(cr, this, [G, N])
        };
        zb(cr, wn, {
            _80o: function () {
            }
        });
        var dq = function (u, K) {
            Ge(dq, this, [u, K])
        };
        zb(dq, wn, {
            _3O: function () {
                var U = this, F = U._data, r = U.s, h = U.gv, Z = F.getPoints(), V = h.getBorderColor(F),
                    f = V ? r("border.width") : 0, N = U.getSelectWidth(), X = r("shape.border.width"), p = F.getRect(),
                    w = h.getBodyColor(F), C = U._99o = Z.isEmpty() ? t : {
                        rect: p,
                        rotation: F.getRotation(),
                        fillRule: r("shape.fill.rule") || "nonzero",
                        scale: F.getScale(),
                        position: F.p(),
                        points: Z,
                        segments: F.getSegments(),
                        bodyColor: w,
                        borderColor: V,
                        borderWidth: f,
                        _94o: r("shape.border.3d"),
                        _95o: r("shape.border.3d.color"),
                        _96o: r("shape.border.3d.accuracy"),
                        _97o: N ? r("select.color") : t,
                        selectWidth: N,
                        _53o: r("shape.background"),
                        _27Q: nj(r("shape.repeat.image"), w),
                        shapeGradientPack: r("shape.gradient.pack"),
                        _54o: X,
                        _55o: r("shape.border.color"),
                        shapeGradient: r("shape.gradient"),
                        _59o: r("shape.gradient.color"),
                        _60o: r("shape.border.pattern"),
                        _61o: r("shape.border.cap"),
                        _62o: r("shape.border.join")
                    };
                if (C) {
                    var S = X * ("square" === C._61o ? .71 : .5) + f + N;
                    if (S) {
                        var d = F.getScale();
                        S *= K(1, K(G(d.x), G(d.y))), p = us(p), No(p, S, C._62o)
                    }
                    U._68o(p)
                }
            }, getPosition: function (T, o, x, g) {
                var s = this._99o;
                if (s) {
                    var O = Ym(T, s.rect, g);
                    return O.x += o, O.y += x, O
                }
                return af
            }, _42: function (J) {
                this._99o && dq.superClass._42.call(this, J)
            }, _80o: function (i) {
                var H, x = this, C = x.s, _ = x._99o, u = _.position, S = _.scale, P = _.rotation, G = _.bodyColor,
                    h = _.borderWidth, d = _.selectWidth, b = _._53o, M = _._27Q, w = _.shapeGradientPack, K = _._54o,
                    I = _.points, o = _.segments, t = x._data.isClosePath(), R = _.fillRule;
                i.save(), tq(i, u.x, u.y), ac(i, P), yi(i, S.x, S.y), tq(i, -u.x, -u.y);
                var f = _._60o, B = ab(i, f), X = i.lineJoin, p = i.lineCap;
                i.lineJoin = _._62o, i.lineCap = _._61o, b || M || w ? (im(i, I, o, t), w ? uk(i, w) : M ? Cn(i, M) : (H = G ? G : b, Ji(i, H, _.shapeGradient, _._59o, _.rect)), i.fill(R), w && i.restore(), B !== i && im(B, I, o, t)) : im(B, I, o, t);
                var l = C("shape.border.width.absolute");
                if (l && (i.save(), i.setTransform(1, 0, 0, 1, 0, 0)), d && (i.strokeStyle = _._97o, i.lineWidth = K + 2 * (h + d), i.stroke()), h && (i.strokeStyle = _.borderColor, i.lineWidth = K + 2 * h, i.stroke()), K && (H = _._55o, !b && G && (H = G), i.strokeStyle = H, i.lineWidth = K, i.stroke(), _._94o && je(i, H, _._95o, K, x.gv._zoom, _._96o)), l && i.restore(), Jk(i, f), C("shape.dash")) {
                    var m = C("shape.dash.width") || K;
                    if (m > 0) {
                        f = C("shape.dash.pattern");
                        var B = ab(i, f, x._2Q("shape.dash.offset"));
                        B !== i && im(B, I, o, t), x._1Q(i, "shape", m, f)
                    }
                }
                i.lineJoin = X, i.lineCap = p, i.restore()
            }, _48O: function () {
            }, _47O: function () {
            }
        });
        var em = function (r, t) {
            Ge(em, this, [r, t])
        };
        zb(em, dq, {
            getRotation: function (U, J, F) {
                U = U || 0;
                var p = this._data.getPoints(), T = p.size();
                return T > 1 ? Pf[F] ? T && 0 === T % 2 ? Cb(p.get(T / 2 - 1), p.get(T / 2), J, U) : U : Qf[F] ? Cb(p.get(0), p.get(1), J, U) : Cb(p.get(T - 2), p.get(T - 1), J, U) : U
            }, getPosition: function (b, D, B, t, G) {
                var d = this._data.getPoints(), M = d.size();
                if (M > 1) {
                    if (Pf[b]) {
                        var Q = M % 2;
                        if (0 === Q) return om(d.get(M / 2 - 1), d.get(M / 2), b, D, B, t, G);
                        var p = d.get((M - Q) / 2), N = {x: p.x, y: p.y, width: 0, height: 0};
                        return p = Ym(b, N, t), p.x += D, p.y += B, p
                    }
                    return Qf[b] ? om(d.get(0), d.get(1), b, D, B, t, G) : om(d.get(M - 2), d.get(M - 1), b, D, B, t, G)
                }
                return af
            }
        });
        var fh = function (P, n) {
            Ge(fh, this, [P, n])
        };
        zb(fh, wn, {
            _3O: function () {
                var f = this;
                fh.superClass._3O.call(f);
                var p = f.s, Y = f._83o;
                f._82o = Y.img || Y.shape ? t : {
                    background: f.getBodyColor("grid.background"),
                    depth: p("grid.depth"),
                    rect: Y.rect,
                    _88o: p("grid.cell.depth"),
                    cellBorderColor: p("grid.cell.border.color"),
                    _89o: p("grid.row.count"),
                    _90o: p("grid.column.count"),
                    block: p("grid.block"),
                    _91o: p("grid.block.color"),
                    _92o: p("grid.block.padding"),
                    _93o: p("grid.block.width")
                }
            }, _80o: function (D) {
                var O = this, w = O._82o;
                if (!w) return fh.superClass._80o.call(O, D), void 0;
                var H, Q, g = O._data, b = w.background, q = w.rect, I = w.block, l = w._91o, p = w._92o, K = w._93o,
                    i = w._88o, s = w.cellBorderColor, N = w._89o, B = w._90o;
                if (b) if (ip(D, q.x, q.y, q.width, q.height, b), km(D, b, w.depth, q), i) for (H = 0; N > H; H++) for (Q = 0; B > Q; Q++) q = g.getCellRect(H, Q), q && km(D, b, i, q); else if (s) {
                    for (D.beginPath(), H = 0; N > H; H++) for (Q = 0; B > Q; Q++) q = g.getCellRect(H, Q), q && D.rect(q.x, q.y, q.width, q.height);
                    D.strokeStyle = s, D.lineWidth = 1, D.stroke()
                }
                if ("h" === I) for (H = 0; N > H; H++) q = nf(g.getCellRect(H, 0), g.getCellRect(H, B - 1)), pk(q, p), Tc(D, l, q.x, q.y, q.width, q.height, K); else if ("v" === I) for (Q = 0; B > Q; Q++) q = nf(g.getCellRect(0, Q), g.getCellRect(N - 1, Q)), pk(q, p), Tc(D, l, q.x, q.y, q.width, q.height, K);
                O._39O(D, O._83o)
            }
        });
        var Jc = function (w, E) {
            Ge(Jc, this, [w, E])
        };
        zb(Jc, wn, {
            _checkEmptyRect: !1, _81o: function () {
                var K = this._data, w = Jc.superClass._81o.call(this), J = K.s("text");
                if (J != t) {
                    var v, P, i = K.s("text.font"), F = K.s("text.align"), Z = K.s("text.vAlign"), g = K.getRotation(),
                        Y = Mr(i, J), e = Y.width, S = Y.height;
                    "left" === F ? v = -K.getWidth() / 2 : "center" === F ? v = -Y.width / 2 : "right" === F && (v = K.getWidth() / 2 - Y.width), "top" === Z ? P = -K.getHeight() / 2 : "middle" === Z ? P = -Y.height / 2 : "bottom" === Z && (P = K.getHeight() / 2 - Y.height);
                    var p;
                    if (g) {
                        var m = new Vh(g);
                        p = Cc([m.tf(v, P), m.tf(v + e, P), m.tf(v + e, P + S), m.tf(v, P + S)])
                    } else p = {x: v, y: P, width: e, height: S};
                    p.x += K.getPosition().x, p.y += K.getPosition().y, w = nf(w, p)
                }
                return w
            }
        });
        var Ve = ji.Interactor = function (O) {
            this.gv = this._graphView = O
        };
        jj("Interactor", z, {
            ms_listener: 1, getView: function () {
                return this.gv.getView()
            }, setUp: function () {
                this.addListeners()
            }, tearDown: function () {
                this.removeListeners(), this.clear()
            }, clear: function () {
            }, fi: function (P) {
                this.gv.fi(P)
            }, setCursor: function (l) {
                w || (this.getView().style.cursor = l)
            }, startDragging: function (G) {
                var d = this;
                d._lastClientPoint = Ql(G), d._lastLogicalPoint = d.gv.lp(G), ls(d, G)
            }, clearDragging: function () {
                var g = this;
                g._lastClientPoint = g._lastLogicalPoint = g._logicalPoint = t
            }, autoScroll: function (m) {
                return this.gv.autoScroll(m, this._lastClientPoint)
            }
        });
        var Ln = ji.DefaultInteractor = function (s) {
            Ge(Ln, this, [s])
        };
        jj("DefaultInteractor", Ve, {
            handle_mousedown: function (A) {
                Mh(A);
                var u = this, f = u.gv, J = f.getDataAt(A);
                !f.setFocus(A) || f._editing || f._scrolling || (tf(A) ? f.handleDoubleClick(A, J) : f.handleClick(A, J), f.isPannable() && !J && Kr(A) && !zp(A) && (u._tx = f.tx(), u._ty = f.ty(), u.startDragging(A)))
            }, handleWindowMouseUp: function (x) {
                var K = this, r = K.gv;
                r._panning && (delete r._panning, r.onPanEnded(), K.fi({
                    kind: "endPan",
                    event: x
                })), delete K._tx, delete K._ty, K.clearDragging()
            }, handle_mousemove: function (B) {
                var X = this, u = X.gv;
                X._hoverTimer && (J(X._hoverTimer), delete X._hoverTimer), X._hoverTimer = y(function () {
                    X.fi({kind: "hover", event: B}), J(X._hoverTimer), delete X._hoverTimer
                }, u.getHoverDelay() || 800)
            }, handle_touchmove: function (x) {
                this.handle_mousemove(x)
            }, handleWindowMouseMove: function (T) {
                var w = this, j = w.gv, m = w._lastClientPoint;
                w.fi({
                    kind: j._panning ? "betweenPan" : "beginPan",
                    event: T
                }), j._panning = 1, j.setTranslate(w._tx + T.clientX - m.x, w._ty + T.clientY - m.y)
            }, handle_mousewheel: function (z) {
                this.gv.handleScroll(z, z.wheelDelta)
            }, handle_DOMMouseScroll: function (s) {
                2 === s.axis && this.gv.handleScroll(s, -s.detail)
            }, handle_keydown: function (R) {
                this.gv.handleKeyDown(R)
            }
        });
        var Qb = ji.SelectInteractor = function (U) {
            Ge(Qb, this, [U])
        };
        jj("SelectInteractor", Ve, {
            _42: function () {
                var H = this, q = H.gv, M = q.getZoom(), w = H.mark, A = H.div;
                A || (A = H.div = Ac(), lm(H.getView(), A));
                var j = {};
                j.x = w.x * M + q.tx(), j.y = w.y * M + q.ty(), j.width = w.width * M, j.height = w.height * M, ef(A, j), this.intersects() ? (A.style.border = "", A.style.background = q.getRectSelectBackground()) : (A.style.background = "", A.style.border = "1px solid " + q.getRectSelectBorderColor())
            }, handle_mousedown: function (_) {
                var P = this, w = P.gv;
                if (P._57I = t, !w._editing && !w._scrolling) {
                    var z = w.getDataAt(_), k = w.sm();
                    z ? zp(_) ? k.co(z) ? k.rs(z) : k.as(z) : k.co(z) || k.ss(z) : zp(_) || !w.isPannable() ? Kr(_) && (zp(_) || k.cs(), w.isRectSelectable() && (P.startDragging(_), w._77O = 1)) : P._57I = Ql(_)
                }
            }, handle_mouseup: function (o) {
                var b = this, G = b._57I;
                G && (Lb(G, Ql(o)) <= 1 && b.gv.sm().cs(), b._57I = t)
            }, handleWindowMouseUp: function (y) {
                this.clear(y)
            }, handleWindowMouseMove: function (s) {
                var k = this, e = k.gv;
                k._logicalPoint = e.lp(s), k.mark ? (k.fi({
                    kind: "betweenRectSelect",
                    event: s
                }), k.autoScroll(s), k.redraw()) : k.fi({
                    kind: "beginRectSelect",
                    event: s
                }), k.mark = Cc(k._lastLogicalPoint, k._logicalPoint), k.redraw()
            }, intersects: function () {
                var G = this, D = G._lastLogicalPoint, F = G._logicalPoint;
                return D.x > F.x || D.y > F.y
            }, clear: function (R) {
                var v = this, u = v.gv, x = v.mark;
                if (v._57I = t, v._lastLogicalPoint) {
                    if (x) {
                        if (0 !== x.width && 0 !== x.height) {
                            var C = u.getDatasInRect(x, v.intersects());
                            if (!C.isEmpty()) {
                                var o = u.sm(), d = o.toSelection();
                                C.each(function (J) {
                                    o.co(J) ? d.remove(J) : d.add(J)
                                }), o.ss(d)
                            }
                        }
                        An(v.div), delete v.div, delete v.mark, v.redraw(), v.fi({
                            kind: "endRectSelect",
                            event: R
                        }), u.onRectSelectEnded()
                    }
                    v.clearDragging(), delete u._77O
                }
            }, redraw: function () {
                var Z = this;
                Z._draw || (Z._draw = 1, y(function () {
                    Z.mark && Z._42(), delete Z._draw
                }, 16))
            }
        });
        var Fm = ji.MoveInteractor = function (l) {
            Ge(Fm, this, [l])
        };
        jj("MoveInteractor", Ve, {
            handle_mousedown: function (j) {
                var H = this, T = H.gv;
                if (Kr(j) && !T._editing && !T._scrolling) {
                    var l = T.getSelectedDataAt(j);
                    l ? (H._data = l, T.handleMouseDown && T.handleMouseDown(j, l), H.startDragging(j), T.isMovable(l) && (T._moving = 1)) : T._focusData = t
                }
            }, handleWindowMouseUp: function (g) {
                var e = this, A = e.gv;
                A.handleMouseUp && A.handleMouseUp(g, e._data), e.clear(g)
            }, handleWindowMouseMove: function (O) {
                var l = this, i = l._data, z = l.gv, j = z.getDataModel(), a = j.getHistoryManager();
                if ((!z._93O || !z._93O(O, i)) && z._moving) {
                    var t = l._logicalPoint ? "betweenMove" : "beginMove", D = {kind: t, event: O},
                        X = l._logicalPoint = z.lp(O);
                    a && "beginMove" === t && a.beginInteraction();
                    var P = l._calcShift(t, O), y = P.x, f = P.y, B = l.gv.getMoveMode(O, i);
                    B && ("x" === B ? f = 0 : "y" === B ? y = 0 : "xy" !== B && (y = f = 0)), z.moveSelection(y, f), l._lastLogicalPoint = X, l.autoScroll(O), l.fi(D)
                }
            }, _calcShift: function () {
                var z = this, E = z._logicalPoint, t = z._lastLogicalPoint, X = E.x - t.x, M = E.y - t.y;
                return {x: X, y: M}
            }, clear: function (T) {
                var n = this, K = n.gv, w = K.getDataModel(), Z = w.getHistoryManager();
                n._lastLogicalPoint && (n._lastLogicalPoint = n._data = K._moving = t, n._logicalPoint && (n.fi({
                    kind: "endMove",
                    event: T
                }), K.onMoveEnded(), Z && Z.endInteraction()), n.clearDragging())
            }
        });
        var Lh = ji.ScrollBarInteractor = function (B) {
            Ge(Lh, this, [B])
        };
        jj("ScrollBarInteractor", Ve, {
            _41o: function () {
                return this.gv.getViewRect().height < this.gv.getScrollRect().height
            }, _40o: function () {
                return this.gv.getViewRect().width < this.gv.getScrollRect().width
            }, isV: function (r) {
                var v = this.gv.getViewRect();
                return this._41o() && (v.x + v.width - this.gv.lp(r).x) * this.gv.getZoom() < ff
            }, isH: function (G) {
                var X = this.gv.getViewRect();
                return this._40o() && (X.y + X.height - this.gv.lp(G).y) * this.gv.getZoom() < ff
            }, handle_mousemove: function (F) {
                this.handle_touchmove(F)
            }, handle_touchmove: function (i) {
                if (!jl && Kr(i)) {
                    var W = this, M = W.isV(i), b = W.isH(i);
                    W._cp ? W._state || (M ? W._state = "vScroll" : b && (W._state = "hScroll"), W._state && (ls(W, i), W.fi({
                        kind: "beginScroll",
                        event: i
                    }))) : (M || b) && W.gv.showScrollBar(), W.gv._scrolling = M || b
                }
            }, handleWindowMouseUp: function (b) {
                this.handleWindowTouchEnd(b)
            }, handleWindowTouchEnd: function (u) {
                this._state = this._cp = this._tx = this._ty = this.gv._scrolling = t, this.fi({
                    kind: "endScroll",
                    event: u
                })
            }, handle_mousedown: function (F) {
                this.handle_touchstart(F)
            }, handle_touchstart: function (d) {
                this.gv.setFocus(d), Mh(d), this.handle_touchmove(d), zs(d) > 1 || !this.gv._scrolling || (this._cp = Ql(d), this._tx = this.gv.tx(), this._ty = this.gv.ty())
            }, handleWindowMouseMove: function (Q) {
                this.handleWindowTouchMove(Q)
            }, handleWindowTouchMove: function (J) {
                var p = Ql(J), M = this.gv.getViewRect(), X = this.gv.getScrollRect();
                "vScroll" === this._state ? this.gv.ty(this._ty + (this._cp.y - p.y) * X.height / M.height) : "hScroll" === this._state && this.gv.tx(this._tx + (this._cp.x - p.x) * X.width / M.width), this.fi({
                    kind: "betweenScroll",
                    event: J
                })
            }
        });
        var Yk = ji.TouchInteractor = function (o, Y) {
            Y = Y || {}, Y.selectable === f && (Y.selectable = !0), Y.movable === f && (Y.movable = !0), Y.pannable === f && (Y.pannable = !0), Y.pinchable === f && (Y.pinchable = !0), Y.editable === f && (Y.editable = !0), this.params = Y, Ge(Yk, this, [o])
        };
        jj("TouchInteractor", Ve, {
            ms_edit: 1, setUp: function () {
                var x = this;
                Yk.superClass.setUp.call(x), w && x.params.editable && x.gv.setEditInteractor(x)
            }, tearDown: function () {
                var Y = this;
                Yk.superClass.tearDown.call(Y), w && Y.params.editable && Y.gv.setEditInteractor(t)
            }, clear: function (w) {
                var B = this, h = B.gv, K = h.dm().getHistoryManager();
                h._moving && (B.fi({
                    kind: "endMove",
                    event: w
                }), delete h._moving, h.onMoveEnded(), K && K.endInteraction()), h._panning && (B.fi({
                    kind: "endPan",
                    event: w
                }), delete h._panning, h.onPanEnded()), h._pinching && (B.fi({
                    kind: "endPinch",
                    event: w
                }), delete h._pinching, h.onPinchEnded()), h._editing && (B._46O(w), B._77I = B._node = B._edge = B._shape = B._rect = B._89I = B._index = h._editing = t), B._moving = B._panning = B._pinching = B._editing = B._57I = B._data = B._beginHistory = t, B.clearDragging()
            }, handle_touchstart: function (c) {
                var A = this;
                if (!A.gv._editing) {
                    Mh(c), A._57I = t;
                    var J = A.params, B = A.gv, r = B.sm(), F = B.getDataAt(c), C = zs(c);
                    if (1 === C) tf(c) ? B.handleDoubleClick(c, F) : (B.handleClick(c, F), F && (B.handleMouseDown && B.handleMouseDown(c, F), A._data = F)), J.selectable || (F = t), F ? (r.co(F) || r.ss(F), J.editable && B.isEditable(F) && A._79I(c, F, !0) ? (A._editing = 1, A.startDragging(c)) : J.movable && B.isMovable(F) && (A._moving = 1, A.startDragging(c))) : (A._57I = Ql(c), J.pannable && B.isPannable() && (A._panning = 1, A.startDragging(c), A._translate = {
                        x: B.tx(),
                        y: B.ty()
                    })); else if (J.pinchable && 2 === C) {
                        A._pinching = 1, A.startDragging(c);
                        var g = B.getView(), _ = B.getZoom(), S = g.getBoundingClientRect(), D = c.touches[0],
                            f = c.touches[1],
                            e = {x: (D.clientX + f.clientX) / 2 - S.left, y: (D.clientY + f.clientY) / 2 - S.top};
                        e.x -= B.tx(), e.y -= B.ty(), e.x /= _, e.y /= _, A._p = e, A._d = Qp(c)
                    }
                }
            }, handle_touchend: function (C) {
                var d = this, e = d.gv, X = d._57I, $ = d._data;
                X && (Lb(X, Ql(C)) <= 1 && e.sm().cs(), d._57I = t), $ && e.handleMouseUp && e.handleMouseUp(C, $)
            }, handleWindowTouchEnd: function (q) {
                this.clear(q)
            }, handleWindowTouchMove: function (X) {
                var R = this, K = R.gv, n = K.dm().getHistoryManager(), g = zs(X);
                if (1 === g) {
                    if (R._editing && (n && !R._beginHistory && (R._beginHistory = 1, n.beginInteraction()), K._editing = 1, R._78I(X)), R._moving) n && !R._beginHistory && (R._beginHistory = 1, n.beginInteraction()), R.handleMove(X); else if (R._panning) {
                        var D = Ql(X);
                        K.setTranslate(R._translate.x + D.x - R._lastClientPoint.x, R._translate.y + D.y - R._lastClientPoint.y), R.fi({
                            kind: K._panning ? "betweenPan" : "beginPan",
                            event: X
                        }), K._panning = 1
                    }
                } else if (2 === g && R._pinching) {
                    var E = Qp(X);
                    K.handlePinch(R._p, E, R._d), R._d = E, R.fi({
                        kind: K._pinching ? "betweenPinch" : "beginPinch",
                        event: X
                    }), K._pinching = 1
                }
            }, handleMove: function (d) {
                var e = this, u = e.gv, H = u.lp(d);
                u._93O && u._93O(d, e._data) || (u.moveSelection(H.x - e._lastLogicalPoint.x, H.y - e._lastLogicalPoint.y), e._lastLogicalPoint = H, e.autoScroll(d), e.fi({
                    kind: u._moving ? "betweenMove" : "beginMove",
                    event: d
                }), u._moving = 1)
            }
        });
        var U = R.ht, Bn = U.graph._editor = {Math: {}, Guide: {}};
        Bn.getStyle = function (S) {
            var r, q = Bn.StyleMap;
            return q && (r = q[S], r !== f) ? r : Bn.DefaultStyleMap[S]
        }, Bn.setStyle = function (P, G) {
            var p = Bn.StyleMap;
            p || (p = Bn.StyleMap = {}), p[P] = G
        }, Bn.inEdit = function (D) {
            return D._inXEdit === !0
        }, Bn.startEdit = function (W) {
            W._inXEdit = !0, Bn.Inject.doInject(W)
        }, Bn._46O = function ($) {
            $._inXEdit = !1, Bn.Inject.undoInject($)
        }, Bn.toScreenPosition = function (o, u) {
            var j = o.tx(), Z = o.ty(), n = o._zoom;
            return new Bn.Math.Vector2(u.x * n + j, u.y * n + Z)
        }, Bn.checkHit = function (Q, Z, U) {
            return Q.distanceTo(Z) < U ? !0 : !1
        }, Bn.toWorldPosition = function (K, e) {
            var T = K.tx(), u = K.ty(), m = K._zoom;
            return {x: (e.x - T) / m, y: (e.y - u) / m}
        }, Bn.log = function () {
        };
        var yp = Bn.Inject = {_modules: []};
        yp.registAsModule = function (V, s) {
            var X = {}, t = {};
            for (var M in V) {
                var N = s.prototype[M];
                X[M] = N
            }
            V.getBackup = function (b) {
                return X[b]
            }, V.getBackups = function () {
                return X
            }, t.doInject = function () {
                for (var z in V) "getBackup" !== z && (s.prototype[z] = V[z])
            }, t.undoInject = function () {
                for (var Z in V) "getBackup" !== Z && (s.prototype[Z] = X[Z])
            }, yp._modules.push(t)
        }, yp.doInject = function (n) {
            for (var X, y = yp._modules, W = 0, p = y.length; p > W; W++) X = y[W], X.doInject(n)
        }, yp.undoInject = function (p) {
            for (var Z, b = yp._modules, Y = 0, G = b.length; G > Y; Y++) Z = b[Y], Z.undoInject(p)
        };
        var Ve = U.graph.EditInteractor = function (G) {
            var w = this, $ = F.createElement("canvas");
            $.className = "editCanvas", $.style.position = "absolute", w._styleMap = {}, w._canvas = $, w._context = $.getContext("2d"), Ve.superClass.constructor.call(w, G), w.setAntialias(!1), w._subModules = [new Bn.Anchor(w), new Bn.Rect(w), new Bn.Curve(w), new Bn.MoveHelper(w)], w._gridGuide = new Bn.Guide.Grid(w), w._rectGuide = new Bn.Guide.Rect(w)
        }, ld = Ve;
        U.Default.def(Ve, U.graph.Interactor, {
            ms_edit: 1,
            ms_fire: 1
        }), z.defineProperties(Ve.prototype, {
            editDetail: {
                get: function () {
                    var t = !!this._editDetail;
                    return t
                }, set: function (V) {
                    var b = this, i = b._editDetail;
                    i !== V && (b._editDetail = V, b.gv._editing = V, b.fp("editDetail", i, V))
                }
            }, editing: {
                get: function () {
                    return this.gv._editing
                }, set: function (C) {
                    (!this._editDetail || C) && (this.gv._editing = C, C || (this.editDetail = !1))
                }
            }, gridEnabled: {
                get: function () {
                    var b = this._gridEnabled;
                    if (!b) return !1;
                    var J = this.gv;
                    return J ? J._zoom < this.getStyle("gridZoomThreshold") ? !1 : !0 : !0
                }, set: function (A) {
                    A !== this._gridEnabled && (this._gridEnabled = A, this._42())
                }
            }, alignmentGuideEnabled: {
                get: function () {
                    return this._agEnabled
                }, set: function (o) {
                    o !== this._agEnabled && (this._agEnabled = o, this._42())
                }
            }, gridGuide: {
                get: function () {
                    return this._gridGuide
                }
            }, rectGuide: {
                get: function () {
                    return this._rectGuide
                }
            }
        }), Ve.prototype.getSubModule = function (W) {
            var F, u, L, q = this._subModules;
            for (u = 0, L = q.length; L > u; u++) if (F = q[u], F.catalog === W) return F
        }, Ve.prototype.invokeSubModule = function (M, h) {
            var U = this, m = U._subModules;
            if (m) for (var L, n, G, e = Array.prototype.slice.call(arguments, 2), o = 0, r = m.length; r > o; o++) if (L = m[o], n = L[M], n && (G = n.apply(L, e), G != f && h)) return L
        }, Ve.prototype.invokeSubModuleInverse = function (n, r) {
            var y = this, j = y._subModules;
            if (j) for (var L, H, T, g = Array.prototype.slice.call(arguments, 2), x = j.length - 1; x >= 0; x--) if (L = j[x], H = L[n], H && (T = H.apply(L, g), T != f && r)) return L
        }, Ve.prototype.setUp = function () {
            Bn.log("setUp");
            var b = this, H = b.gv, r = H.getView(), L = b._canvas;
            Ve.superClass.setUp.call(b), H.setEditInteractor(b), H._79O ? r.insertBefore(L, H._79O) : r.appendChild(L), Bn.startEdit(H), b.invokeSubModule("setUp"), H.dm().mm(b._onDataModelChanged, b), H.dm().md(b._onDataPropertyChanged, b)
        }, Ve.prototype.tearDown = function () {
            Bn.log("tearDown");
            var S = this, B = S.gv, Y = B.getView();
            Ve.superClass.tearDown.call(S), B.dm().umm(S._onDataModelChanged), B.dm().umd(S._onDataPropertyChanged), B.setEditInteractor(null), Y.removeChild(S._canvas), Bn._46O(B), S.invokeSubModule("tearDown")
        }, Ve.prototype._onDataModelChanged = function (r) {
            var O = this;
            ("clear" === r.kind || "remove" === r.kind && O.editDetail && r.data === O.getSubModule("Curve").target) && (O.editDetail = !1, O._42())
        }, Ve.prototype._onDataPropertyChanged = function (j) {
            var d = this;
            if (d.editDetail) {
                var c = d.getSubModule("Curve"), _ = j.data;
                _ === c.target && (_._writing || c._handleDataChanged())
            }
        }, Ve.prototype.clear = function () {
            Bn.log("clear")
        }, Ve.prototype.redraw = function () {
            this._42()
        }, Ve.prototype._42 = function () {
            var b = this;
            b._drawTimer || (b._drawTimer = y(function () {
                delete b._drawTimer, b.drawImpl()
            }, 0))
        }, Ve.prototype.drawImpl = function () {
            var w;
            for (w in {_42: !0}) break;
            return function () {
                var g = this, e = g._canvas, W = g.gv, R = W.getWidth(), n = W.getHeight(), v = g._context,
                    F = U.Default.getInternal();
                (e.width !== R || e.height !== n) && F.setCanvas(e, R, n), v.clearRect(0, 0, e.width, e.height);
                var Z = g._getValidSelection();
                v.save();
                var P = U.Default.devicePixelRatio;
                v.scale(P, P), g._gridGuide._42(), g._rectGuide._42(), g.invokeSubModuleInverse(w, !1, v, W, Z), v.restore()
            }
        }(), Ve.prototype._getValidSelection = function () {
            var D = this, i = D.gv, o = i.sm().getSelection(), G = [];
            return o.each(function (_) {
                i.isVisible(_) && G.push(_)
            }), G
        }, Ve.prototype.setAntialias = function (L) {
            for (var o, $ = this._context, I = ["imageSmoothingEnabled", "webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "oImageSmoothingEnabled", "msImageSmoothingEnabled"], y = 0, O = I.length; O > y && (o = I[y], !$[o]); y++) ;
            $[o] = L
        }, Ve.prototype.handle_touchmove = function (h) {
            return this.handle_mousemove(h)
        }, Ve.prototype.handle_mousemove = function (I) {
            if (!U.Default.isDragging()) {
                var u = this;
                u.editing = !1, u.gv.sm().size() && u._checkEdit(I) && (u.editing = !0)
            }
        }, Ve.prototype.handle_touchstart = function (G) {
            return this.handle_mousedown(G)
        }, Ve.prototype.handle_mousedown = function (r) {
            Mh(r);
            var E = this;
            if (tf(r)) {
                if (E.editDetail) {
                    if (E._tryQuitEditDetailMode(r)) return
                } else if (E._tryEnterEditDetailMode()) return;
                if (E.invokeSubModule("handleDoubleClick", !0, r)) return
            }
            var b = E._checkEdit(r);
            b && (E._downPosition = E._getLogicalPoint(r), b.startEdit(E, r), E.editing = !0)
        }, Ve.prototype._checkEdit = function (e) {
            var Q = this, s = Q.gv, T = Q._getLogicalPoint(e), y = Q.invokeSubModule("check", !0, s, e, T) || null;
            return Q._editMod = y, y
        }, Ve.prototype.handleWindowTouchMove = function (A) {
            return this.handleWindowMouseMove(A)
        }, Ve.prototype.handleWindowMouseMove = function (g) {
            var j = this, k = j._downPosition;
            if (k) {
                var S = j._getLogicalPoint(g);
                if (S.distanceTo(k) < j.getStyle("moveSensitivity")) return;
                delete j._downPosition
            }
            var p = j._editMod;
            p && p.handleEdit(j.gv, g)
        }, Ve.prototype._getLogicalPoint = function (r) {
            var _ = this, H = U.Default.getLogicalPoint(r, _._canvas);
            return new Bn.Math.Vector2(H)
        }, Ve.prototype.handleWindowTouchEnd = function (r) {
            return this.handleWindowMouseUp(r)
        }, Ve.prototype.handleWindowMouseUp = function () {
            var c;
            for (c in {_46O: !0}) break;
            return function () {
                var b = this;
                b.editing = !1, b.setCursor("default"), b.invokeSubModule(c, !1), b._42()
            }
        }(), Ve.prototype.handle_keydown = function (b) {
            (b.metaKey || b.ctrlKey) && this._42()
        }, Ve.prototype.handle_mousewheel = function (Y) {
            var P = this;
            Mh(Y), P.invokeSubModule("preHandleScroll", !0) || P.gv.handleScroll(Y, Y.wheelDelta)
        }, Ve.prototype.handleDelete = function () {
            var s = this;
            return s.editDetail ? (s.invokeSubModule("handleDelete", !0), s._42(), void 0) : (s.gv.removeSelection(), void 0)
        }, Ve.prototype.handle_keydown = function (t) {
            var O = mn(t), K = this;
            return K.editDetail ? ((O || Ij(t)) && (K.editDetail = !1, K._42()), K.invokeSubModule("handle_keydown", !0, t), void 0) : (O && K._tryEnterEditDetailMode(), void 0)
        }, Ve.prototype._tryEnterEditDetailMode = function () {
            var k = this;
            return !k.editDetail && k.invokeSubModule("canEnterEditDetailMode", !0) && 1 === k._getValidSelection().length ? (k.editDetail = !0, k._42(), !0) : void 0
        }, Ve.prototype._tryQuitEditDetailMode = function (s) {
            var A = this;
            if (A.editDetail) {
                var D = A.gv, o = A.getSubModule("Curve").target;
                return D.getDataAt(s) !== o ? (A.editDetail = !1, A._42(), !0) : void 0
            }
        }, Ve.prototype.setStyle = function (i, w, G) {
            var O = this;
            G ? Bn.setStyle(i, w) : O._styleMap[i] = w, O._42()
        }, Ve.prototype.getStyle = function (d) {
            var n = this, y = n._styleMap[d];
            return y !== f ? y : Bn.getStyle(d)
        };
        var Ud = Bn.Group = function (K) {
            var F = this;
            F._entities = K, F._64O = 0, F._position = {x: 0, y: 0}, F._scale = {x: 1, y: 1}, F._anchor = {
                x: .5,
                y: .5
            }, F._anchor2 = {x: .5, y: .5}
        };
        Ud.prototype = {}, Ud.prototype.constructor = Ud;
        var vr = null;
        Ud.findOrCreateGroup = function (K) {
            if (vr && vr.checkIsMe(K)) return vr;
            var V = new Bn.Group(K);
            return V.getKeyOb() ? (vr = V, V) : void 0
        }, Ud.prototype.checkIsMe = function (w) {
            var i = this._entities;
            if (i.length !== w.length) return !1;
            var A, v = {}, y = w.length;
            for (A = 0; y > A; A++) v[w[A]._id] = !0;
            for (A = 0; y > A; A++) if (!v[i[A]._id]) return !1;
            return !0
        }, Ud.prototype.getRotation = function () {
            return this._64O
        }, Ud.prototype.getPosition = function () {
            return this._position
        }, Ud.prototype.getAnchor = function () {
            return this._anchor
        }, Ud.prototype.getWidth = function () {
            return this._width
        }, Ud.prototype.getScale = function () {
            return this._scale
        }, Ud.prototype.getSize = function () {
            return {width: this._width, height: this._height}
        }, Ud.prototype.getHeight = function () {
            return this._height
        }, Ud.prototype.getKeyOb = function () {
            for (var Y = this._entities, P = Y.length - 1; P >= 0; P--) {
                var h = Y[P];
                if (this.isNode(h)) return h
            }
        }, Ud.prototype.getAnchor2 = function () {
            var C = this, V = C.getKeyOb();
            if (!V) return C._anchor;
            var w = C._anchor2, U = V.getMatrix();
            return U.tf({x: V.getWidth() * (w.x - V.getAnchor().x), y: V.getHeight() * (w.y - V.getAnchor().y)})
        }, Ud.prototype.setAnchor2 = function (k, m) {
            var K = this, O = K.getKeyOb();
            if (O) {
                var g, H = O.getMatrix();
                g = "number" == typeof k ? {x: k, y: m} : k;
                var F = H.tfi(g);
                K._anchor2 = {x: O.getAnchor().x + F.x / O.getWidth(), y: O.getAnchor().y + F.y / O.getHeight()}
            }
        }, Ud.prototype.setRotation2 = function (u) {
            var $ = this, R = $._anchor2;
            $._entities.forEach(function (a) {
                if ($.isNode(a)) {
                    var n = a.getAnchor(), M = a.getMatrix(),
                        y = M.tf({x: a.getWidth() * (R.x - n.x), y: a.getHeight() * (R.y - n.y)}),
                        i = new Bn.Math.Matrix2;
                    i.set(M.a, M.b, M.c, M.d, M.tx, M.ty), i.translate(-y.x, -y.y), i.rotate(u), i.translate(y.x, y.y);
                    var F = Math.sign(a.getScale().x);
                    a.setRotation(o(i.b * F, i.a * F)), a.setPosition(i.tx, i.ty)
                }
            })
        }, Ud.prototype.setPosition = function (f) {
            var x, C, k, q, v = this, r = v._position, _ = f.x - r.x, W = f.y - r.y, U = v._entities;
            for (C = 0, k = U.length; k > C; C++) x = U[C], Sb(x) && (q = x.getPosition(), x.setPosition(q.x + _, q.y + W));
            v._position = f
        }, Ud.prototype.setScale = function (R, E) {
            var k = this, y = R / k._scale.x, f = E / k._scale.y;
            k._adjustChildScaleOrSize(y, f, "size"), k._scale = {x: R, y: E}
        }, Ud.prototype.getRect = function () {
            var c = this, v = c._position, V = c._width, Z = c._height;
            return {x: v.x - V / 2, y: v.y - Z / 2, width: V, height: Z}
        }, Ud.prototype.setSize = function (G, Z) {
            var C = this, G = Math.max(1, G), Z = Math.max(1, Z), H = G / C._width, F = Z / C._height;
            C._adjustChildScaleOrSize(H, F, "size"), C._width = G, C._height = Z
        }, Ud.prototype._adjustChildScaleOrSize = function (J, j, W) {
            var Q, M, R, b, D, E, y, N, A, w, H, k, O, I, t = this, $ = t._position, i = t._entities,
                V = new Bn.Math.Matrix2;
            for (M = 0, R = i.length; R > M; M++) if (Q = i[M], t.isNode(Q)) {
                if (b = Q.getPosition(), D = Q.getRotation(), E = Q.getWidth(), y = Q.getHeight(), N = Q.getScale(), H = N.x * E, k = N.y * y, V.identity().scale(H, k).rotate(D).translate(b.x, b.y).translate(-$.x, -$.y).rotate(-t._64O), D = o(V.b * Math.sign(H), V.a * Math.sign(H)), V.scale(J, j), A = Math.cos(D), w = Math.sin(D), Math.abs(A) < .001 ? (O = V.b / w, I = -V.c / w) : (O = V.a / A, I = V.d / A), "scale" === W) Q.setScale(O / E, I / y); else if ("size" === W) {
                    var _ = O / N.x, a = I / N.y;
                    Q.setScale(kf(O) * Math.abs(N.x), kf(I) * Math.abs(N.y)), Q.setSize(Math.max(.1, Math.abs(_)), Math.max(.1, Math.abs(a)))
                }
                V.rotate(t._64O).translate($.x, $.y), Q.setPosition(V.tx, V.ty)
            }
        }, Ud.prototype.getMatrix = function () {
            var r = this, Y = r._position, W = U.Default.getInternal(), o = r._scale;
            return new W.Mat(r._64O, Y.x, Y.y, o.x, o.y)
        }, Ud.prototype.getCorners = function () {
            var Y = this, d = Y._width, k = Y._height, m = Y._anchor, N = -d * m.x, U = -k * m.y, g = Y.getMatrix();
            return [g.tf(N, U), g.tf(N, U + k), g.tf(N + d, U + k), g.tf(N + d, U)]
        }, Ud.prototype.calcInfo = function () {
            var G, x, Z, n, m, j, g = this, W = [], N = g._entities, Q = g._64O;
            for (n = 0, m = N.length; m > n; n++) j = N[n], g.isNode(j) && j.getCorners && W.push.apply(W, j.getCorners());
            if (W.length) {
                var t = Math.cos(-Q), C = Math.sin(-Q), d = 1 / 0, T = -1 / 0, A = 1 / 0, s = -1 / 0;
                for (n = 0, m = W.length; m > n; n++) Z = W[n], G = Z.x, x = Z.y, Z.x = t * G - C * x, Z.y = C * G + t * x, d = Math.min(d, Z.x), T = Math.max(T, Z.x), A = Math.min(A, Z.y), s = Math.max(s, Z.y);
                g._width = (T - d) / g._scale.x, g._height = (s - A) / g._scale.y, t = Math.cos(Q), C = Math.sin(Q);
                var O = g._anchor;
                G = d + (T - d) * O.x, x = A + (s - A) * O.y, g._position = {x: t * G - C * x, y: C * G + t * x}
            }
        }, Ud.prototype.isNode = function (M) {
            return Sb(M) ? M instanceof U.Group && M.isExpanded() ? !1 : !0 : !1
        }, Ud.prototype._42 = function (M, p, D) {
            var C, j, _, v, w, x, I, O = this, t = O._entities, V = O.getKeyOb();
            for (C = 0, j = t.length; j > C; C++) _ = t[C], O.isNode(_) && (x = _.getRect(), v = Bn.toScreenPosition(D, {
                x: x.x,
                y: x.y
            }), w = Bn.toScreenPosition(D, {x: x.x + x.width, y: x.y + x.height}), I = {
                min: v,
                max: w
            }, _ === V && (I.isKeyOb = !0), Bn.Icons.DrawIcon(M, p, Bn.Icons.GroupSubEntityRect, I))
        };
        var _g = Bn.Guide.Grid = function (o) {
            var b = this;
            b._interactor = o, b._alignmentGuideId = 0, b._xAlignmentGuide = [], b._yAlignmentGuide = []
        };
        _g.prototype = {}, _g.prototype.constructor = _g, z.defineProperties(_g.prototype, {
            gridBlockSize: {
                get: function () {
                    var p = this;
                    return p._gridBlockSize || p._interactor.getStyle("gridBlockSize")
                }, set: function (G) {
                    this._gridBlockSize = G, this._interactor._42()
                }
            }, gridThickLinesEvery: {
                get: function () {
                    var m = this;
                    return m._gridThickLinesEvery || m._interactor.getStyle("gridThickLinesEvery")
                }, set: function (T) {
                    this._gridThickLinesEvery = T, this._interactor._42()
                }
            }
        }), _g.prototype._42 = function () {
            var D = this, i = D._interactor;
            i.gridEnabled && D.drawGrid(), i.alignmentGuideEnabled && D.drawAlignmentGuide()
        }, _g.prototype.drawAlignmentGuide = function () {
            var D = this, m = D._interactor, $ = m.gv, S = m._canvas, Y = m._context, I = S.width, X = S.height,
                k = $.tx(), w = $.ty(), r = $._zoom;
            Y.beginPath(), Y.strokeStyle = m.getStyle("gridAlignmentGuideColor"), Y.lineWidth = 1, D._xAlignmentGuide.forEach(function (j) {
                var L = j.p * r + k;
                Y.moveTo(L, 0), Y.lineTo(L, X)
            }), D._yAlignmentGuide.forEach(function (i) {
                var l = i.p * r + w;
                Y.moveTo(0, l), Y.lineTo(I, l)
            }), Y.stroke()
        }, _g.prototype.drawGrid = function () {
            var K, v, T, j = this, Z = j._interactor, x = j.gridBlockSize, C = j.gridThickLinesEvery,
                q = Z.getStyle("gridThickColor"), O = Z.getStyle("gridLightColor"), $ = Z.gv, w = Z._canvas,
                B = Z._context, h = w.width, A = w.height, l = Bn.toWorldPosition($, {x: 0, y: 0}),
                P = Bn.toWorldPosition($, {x: h, y: A}), o = Math.ceil(l.x / x), D = Math.floor(P.x / x),
                X = Math.ceil(l.y / x), y = Math.floor(P.y / x), c = $.tx(), N = $.ty(), k = $._zoom;
            for (B.lineWidth = 1, B.beginPath(), B.strokeStyle = q, T = Math.ceil(o / C) * C; D >= T; T += C) K = T * x * k + c, B.moveTo(K, 0), B.lineTo(K, A);
            for (T = Math.ceil(X / C) * C; y >= T; T += C) v = T * x * k + N, B.moveTo(0, v), B.lineTo(h, v);
            for (B.stroke(), B.beginPath(), B.strokeStyle = O, T = o; D >= T; T++) 0 !== T % C && (K = T * x * k + c, B.moveTo(K, 0), B.lineTo(K, A));
            for (T = X; y >= T; T++) 0 !== T % C && (v = T * x * k + N, B.moveTo(0, v), B.lineTo(h, v));
            B.stroke()
        }, _g.prototype.getAlignmentGuides = function () {
            var w = this;
            return {x: w._xAlignmentGuide, y: w._yAlignmentGuide}
        }, _g.prototype.addAlignmentGuide = function (i, O, b) {
            var S = this, F = "x" === i ? S._xAlignmentGuide : S._yAlignmentGuide, b = b ? b : ++S._alignmentGuideId,
                K = {p: O, id: b};
            if (F.length) {
                var c = S._findClosestAlignmentGuide(K.p, F);
                c.dis < 0 ? F.splice(c.index + 1, 0, K) : F.splice(c.index, 0, K)
            } else F.push(K);
            return S._interactor._42(), b
        }, _g.prototype.findClosest = function (t, P, F) {
            var A = this, K = A._interactor, n = K.gv;
            F && (t = Bn.toWorldPosition(n, t));
            var H, O, Z, V = 1 / 0, S = 1 / 0, D = t.x, h = t.y;
            if (K.gridEnabled) {
                var e = A.gridBlockSize;
                V = Math.round(D / e) * e - D, S = Math.round(h / e) * e - h, Z = !0
            }
            if (K.alignmentGuideEnabled && (H = A._findClosestAlignmentGuide(D, A._xAlignmentGuide).dis, O = A._findClosestAlignmentGuide(h, A._yAlignmentGuide).dis, Math.abs(H) < Math.abs(V) && (V = H, Z = !0), Math.abs(O) < Math.abs(S) && (S = O, Z = !0)), Z) {
                Z = !1;
                var s = n._zoom, o = K.getStyle("smartGuideSensitivity") / s, i = {};
                if (Math.abs(V) < o && "y" !== P && (i.x = F ? V * s : V, Z = !0), Math.abs(S) < o && "x" !== P && (i.y = F ? S * s : S, Z = !0), Z) return i
            }
        }, _g.prototype._findClosestAlignmentGuide = function (y, L) {
            if (!L.length) return {dis: 1 / 0};
            for (var a, H = 0, f = L.length - 1; f - H > 1;) a = Math.floor((H + f) / 2), L[a].p < y ? H = a : f = a;
            var T = L[H].p - y, w = L[f].p - y;
            return Math.abs(T) <= Math.abs(w) ? {line: L[H], dis: T, index: H} : {line: L[f], dis: w, index: f}
        }, _g.prototype.removeAllAlignmentGuide = function (x) {
            var v = this;
            "y" !== x && (v._xAlignmentGuide = []), "x" !== x && (v._yAlignmentGuide = []), v._interactor._42()
        }, _g.prototype.removeAlignmentGuide = function (x) {
            var W, I, L, T = this, d = T._xAlignmentGuide;
            for (k = 0; 2 > k; k++) for (d = 0 === k ? T._xAlignmentGuide : T._yAlignmentGuide, W = 0, I = d.length; I > W; W++) if (L = d[W], L.id === x) return d.splice(W, 1), T._interactor._42(), {
                axis: 0 === k ? "x" : "y",
                position: L.p
            };
            return !1
        }, _g.prototype.adjustAlignmentGuide = function (Z, B) {
            var H = this, W = H.removeAlignmentGuide(Z);
            return W ? (H.addAlignmentGuide(W.axis, B, Z), !0) : !1
        };
        var pe = Bn.Guide.Rect = function (k) {
            var J = this;
            J._interactor = k
        };
        pe.prototype = {}, pe.prototype.constructor = pe, pe.prototype.gatherRects = function () {
            var k = this, S = k._interactor.gv, $ = [], P = [], b = {x: $, y: P}, x = {};
            S.getDataModel().each(function (w) {
                if (Sb(w) && !S.isSelected(w) && S.isVisible(w)) {
                    var t = !1;
                    if (S.sm().getSelection().each(function (Q) {
                        t || (w.isHostOn(Q) ? t = !0 : w.isDescendantOf(Q) && (t = !0))
                    }), !t) {
                        var Q = w.getRect(), Y = Q.x, L = Q.y, d = Q.width, o = Q.height;
                        $.push({node: w, type: 0, p: Y}, {node: w, type: 1, p: Y + d / 2}, {
                            node: w,
                            type: 2,
                            p: Y + d
                        }), P.push({node: w, type: 0, p: L}, {node: w, type: 1, p: L + o / 2}, {
                            node: w,
                            type: 2,
                            p: L + o
                        }), x[w._id] = Q
                    }
                }
            }), $.sort(function (t, i) {
                return t.p - i.p
            }), P.sort(function (j, T) {
                return j.p - T.p
            }), k._grid = b, k._87I = x
        }, pe.prototype.gatherLines = function (L, P, V) {
            var k, x, d, r, H, Z, t, T, $, F, Y, I, l = this, G = [l.findClosest({x: L.x, y: L.y}, P), l.findClosest({
                x: L.x + L.w / 2,
                y: L.y + L.h / 2
            }, P), l.findClosest({x: L.x + L.w, y: L.y + L.h}, P)], z = {}, E = l._87I;
            V = V || 255;
            var J;
            for (l._guideLine = [], k = 0; 2 > k; k++) for (z = {}, 0 === k ? (r = "y", T = L.x, $ = T + L.w) : (r = "x", T = L.y, $ = T + L.h), x = 0; 3 > x; x++) H = G[x], H && isFinite(H[r]) && (J = 1 << 3 * k + x, V & J && (Z = H[r + "Line"], t = Z.node, z[t._id] || (z[t._id] = !0, I = E[t._id], "y" === r ? (F = I.x, Y = I.x + I.width) : (F = I.y, Y = I.y + I.height), d = Z.p, l._guideLine.push({
                type: r,
                a: T,
                b: $,
                c: F,
                d: Y,
                p: d
            }))))
        }, pe.prototype._binarySearchClosest = function (j, d) {
            if (!d.length) return {dis: 1 / 0};
            for (var L, T = 0, R = d.length - 1; R - T > 1;) L = Math.floor((T + R) / 2), d[L].p < j ? T = L : R = L;
            var v = d[T].p - j, m = d[R].p - j;
            return Math.abs(v) <= Math.abs(m) ? {line: d[T], dis: v} : {line: d[R], dis: m}
        }, pe.prototype.findClosest = function (n, F, d) {
            var l = this, m = l._interactor, S = m.gv, z = l._grid;
            d && (n = Bn.toWorldPosition(S, n));
            var R, D = l._binarySearchClosest(n.x, z.x), r = l._binarySearchClosest(n.y, z.y), c = D.dis, E = r.dis,
                G = S._zoom, h = m.getStyle("smartGuideSensitivity") / G, f = {};
            return Math.abs(c) < h && "y" !== F && (f.x = d ? c * G : c, f.xLine = D.line, R = !0), Math.abs(E) < h && "x" !== F && (f.y = d ? E * G : E, f.yLine = r.line, R = !0), R ? f : void 0
        }, pe.prototype._42 = function () {
            var z = this, R = z._guideLine;
            if (R && !U.Default.isCtrlDown()) {
                var l, L, C, _, T, F, n, x, e, Z, w, D, O, P, t, J, j, Y = z._interactor, A = Y.gv, k = Y._context,
                    s = A.tx(), g = A.ty(), m = A._zoom, p = Y.getStyle("guideLineTextSpacing");
                for (l = 0, L = R.length; L > l; l++) C = R[l], x = C.type, e = C.p, Z = C.a, w = C.b, D = C.c, O = C.d, P = Math.min(Z, D), t = Math.max(w, O), "x" === x ? (_ = e * m + s, T = P * m + g, F = _, n = t * m + g) : (_ = P * m + s, T = e * m + g, F = t * m + s, n = T), Bn.Icons.DrawIcon(Y, k, Bn.Icons.MoveLineGuide, [_, T, F, n]), O >= Z && w >= D || (P = Z > O ? O : w, t = Z > O ? Z : D, j = t - P, "x" === x ? (C.center2center || (_ -= p, F = _), T = P * m + g, n = t * m + g, J = Bn.Icons.MoveLineGuideDistanceV) : "y" === x && (C.center2center || (T -= p, n = T), _ = P * m + s, F = t * m + s, J = Bn.Icons.MoveLineGuideDistanceH), Bn.Icons.DrawIcon(Y, k, J, {
                    x0: _,
                    y0: T,
                    x1: F,
                    y1: n,
                    dis: j
                }))
            }
        }, pe.prototype.clear = function () {
            this._guideLine = null
        }, Bn.DefaultStyleMap = {
            pointSize: [24, 9],
            checkSize: 7,
            rotateCheckSize: 10,
            moveSensitivity: 10,
            rotateRound: Math.PI / 2,
            rotateSensitivity: Math.PI / 60,
            shiftRotateRound: Math.PI / 12,
            shiftLineRotateRound: Math.PI / 4,
            anchorMovable: !0,
            anchorVisible: !0,
            anchorRound: .25,
            anchorSensitivity: .02,
            smartGuideSensitivity: 8,
            curveIntersectSize: 5,
            curvePointIntersectSize: 8,
            guideLineTextSpacing: 32,
            gridBlockSize: 40,
            gridThickLinesEvery: 10,
            gridThickColor: "#5d5d5d",
            gridLightColor: "#d0d0d0",
            gridZoomThreshold: .25,
            gridAlignmentGuideColor: "#ff0000",
            tipTextColor: "#ffffff",
            tipBackground: "#333333",
            curveHighlightColor: "#30599e",
            rectPointBackground: "white",
            rectPointBorderColor: "#666666",
            rectPointShadowColor: "rgba(0,0,0,0.35)",
            shapeCtrlPointBackground: "white",
            shapeCtrlPointBorderColor: "#707070"
        };
        var gd = Bn.Icons = {}, dj = 1e4, Al = null, we = 8;
        U.Default.setImage("Icons.RectPoint", {
            width: we,
            height: we,
            comps: [{
                type: "shape",
                points: [0, 0, 0, we, we, we, we, 0],
                segments: [1, 2, 2, 2, 5],
                shadow: !0,
                borderWidth: 1,
                shadowColor: {
                    func: function () {
                        return Al.getStyle("rectPointShadowColor")
                    }
                },
                background: {
                    func: function () {
                        return Al.getStyle("rectPointBackground")
                    }
                },
                borderColor: {
                    func: function () {
                        return Al.getStyle("rectPointBorderColor")
                    }
                }
            }]
        });
        var Wj = "#e000e0";
        gd.GroupSubEntityRect = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        var j = gd.GroupSubEntityRect.data;
                        if (!j) return [];
                        var I = j.min, d = j.max;
                        return [I.x, I.y, I.x, d.y, d.x, d.y, d.x, I.y]
                    }
                }, segments: [1, 2, 2, 2, 5], background: null, borderWidth: 1, borderColor: {
                    func: function () {
                        return gd.GroupSubEntityRect.data.isKeyOb ? Wj : "#666666"
                    }
                }
            }]
        }, gd.Line = {
            comps: [{
                type: "image", name: "Icons.RectPoint", rect: {
                    func: function () {
                        return [[gd.Line.data.P1.x, gd.Line.data.P1.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", rect: {
                    func: function () {
                        return [[gd.Line.data.P2.x, gd.Line.data.P2.y], we, we]
                    }
                }
            }]
        }, gd.Rect = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        var j = gd.Rect.data;
                        if (!j) return [];
                        var x = j.LT, U = j.LB, g = j.RB, m = j.RT;
                        return [x.x, x.y, U.x, U.y, g.x, g.y, m.x, m.y]
                    }
                }, segments: [1, 2, 2, 2, 5], background: null, borderWidth: 1, borderColor: "#666666"
            }, {
                type: "image", name: "Icons.RectPoint", rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.LT.x, gd.Rect.data.LT.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.LB.x, gd.Rect.data.LB.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.RB.x, gd.Rect.data.RB.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.RT.x, gd.Rect.data.RT.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, visible: {
                    func: function () {
                        return gd.Rect.data.L ? !0 : !1
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.L.x, gd.Rect.data.L.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, visible: {
                    func: function () {
                        return gd.Rect.data.R ? !0 : !1
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.R.x, gd.Rect.data.R.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, visible: {
                    func: function () {
                        return gd.Rect.data.T ? !0 : !1
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.T.x, gd.Rect.data.T.y], we, we]
                    }
                }
            }, {
                type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: {
                    func: function () {
                        return gd.Rect.data.rotation
                    }
                }, visible: {
                    func: function () {
                        return gd.Rect.data.B ? !0 : !1
                    }
                }, rect: {
                    func: function () {
                        return [[gd.Rect.data.B.x, gd.Rect.data.B.y], we, we]
                    }
                }
            }]
        };
        var cj = 18;
        U.Default.setImage("Icons.Anchor", {
            width: cj,
            height: cj,
            comps: [{
                type: "arc",
                rect: [4, 4, cj - 8, cj - 8],
                arcFrom: 0,
                arcClose: !1,
                background: "#ffffff",
                borderWidth: 0,
                borderColor: "#000000"
            }, {
                type: "shape",
                points: [2, cj / 2, cj - 2, cj / 2, cj / 2, 2, cj / 2, cj - 2],
                segments: [1, 2, 1, 2],
                background: null,
                borderWidth: 1,
                borderColor: "#111111"
            }, {
                type: "arc",
                rect: [5.5, 5.5, cj - 11, cj - 11],
                arcFrom: 0,
                arcClose: !1,
                background: null,
                borderWidth: 1,
                borderColor: "#111111"
            }]
        }), gd.Anchor = {
            comps: [{
                type: "image", name: "Icons.Anchor", rect: {
                    func: function () {
                        return [[gd.Anchor.data.POS.x, gd.Anchor.data.POS.y], cj, cj]
                    }
                }
            }]
        }, gd.TipShiftX = 12, gd.TipShiftY = 12;
        var Te = [8, 28];
        gd.TipHelper = {
            comps: [{
                type: "roundRect", rect: {
                    func: function () {
                        return [gd.TipHelper.data.helperPos.x, gd.TipHelper.data.helperPos.y, Te[0] * gd.TipHelper.data.size, Te[1]]
                    }
                }, background: {
                    func: function () {
                        return Al.getStyle("tipBackground")
                    }
                }, opacity: .6
            }, {
                type: "text", text: {
                    func: function () {
                        return gd.TipHelper.data.text
                    }
                }, rect: {
                    func: function () {
                        return [gd.TipHelper.data.helperPos.x, gd.TipHelper.data.helperPos.y, Te[0] * gd.TipHelper.data.size, Te[1]]
                    }
                }, color: {
                    func: function () {
                        return Al.getStyle("tipTextColor")
                    }
                }, font: "bold 12px Arial", align: "center"
            }]
        };
        var jf = 7;
        gd.ShapePoint = {
            comps: [{
                type: "circle", rect: {
                    func: function () {
                        var E = gd.ShapePoint.data;
                        return [E, jf, jf]
                    }
                }, background: "#ffffff", borderWidth: 1, borderColor: "#333333"
            }]
        }, gd.ShapeBgCurve = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        return gd.ShapeBgCurve.data.P
                    }
                }, segments: {
                    func: function () {
                        return gd.ShapeBgCurve.data.S
                    }
                }, background: null, borderWidth: 1, borderColor: "#333333"
            }]
        };
        var ti = 8;
        gd.ShapeHighlighPoint = {
            comps: [{
                type: "circle", rect: {
                    func: function () {
                        var U = gd.ShapeHighlighPoint.data;
                        return [[U.x, U.y], ti, ti]
                    }
                }, background: "#30599e", borderWidth: 0
            }]
        };
        var _e = 10;
        gd.ShapeHighlighRealPoint = {
            comps: [{
                type: "circle", rect: {
                    func: function () {
                        var d = gd.ShapeHighlighRealPoint.data;
                        return [[d.x, d.y], _e, _e]
                    }
                }, background: "#ffffff", borderWidth: 2, borderColor: "#333333"
            }]
        };
        var Fq = 3;
        gd.ShapeHighlightCurve = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        return gd.ShapeHighlightCurve.data
                    }
                }, segments: [1, 4], background: null, borderWidth: Fq, borderColor: {
                    func: function () {
                        return Al.getStyle("curveHighlightColor")
                    }
                }
            }]
        }, gd.ShapeGuideLine = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        return gd.ShapeGuideLine.data
                    }
                }, background: null, borderWidth: 1, borderColor: "red"
            }]
        }, gd.MoveLineGuide = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        return gd.MoveLineGuide.data
                    }
                }, background: null, borderWidth: 1, borderColor: "red"
            }]
        };
        var Yc = 5;
        gd.MoveLineGuideDistanceH = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        var $ = gd.MoveLineGuideDistanceH.data, n = $.x0, I = $.y0, N = $.x1, i = $.y1;
                        return [n, I, N, i, n, I - Yc, n, I + Yc, N, i - Yc, N, i + Yc]
                    }
                }, segments: [1, 2, 1, 2, 1, 2], background: null, borderWidth: 1, borderColor: "red"
            }, {
                type: "text", text: {
                    func: function () {
                        return Math.round(gd.MoveLineGuideDistanceH.data.dis)
                    }
                }, rect: {
                    func: function () {
                        var c = gd.MoveLineGuideDistanceH.data;
                        return [[(c.x0 + c.x1) / 2, c.y0 - 10], 20, 20]
                    }
                }, color: "red", font: "12px Arial", align: "center"
            }]
        }, gd.MoveLineGuideDistanceV = {
            comps: [{
                type: "shape", points: {
                    func: function () {
                        var $ = gd.MoveLineGuideDistanceV.data, B = $.x0, U = $.y0, W = $.x1, E = $.y1;
                        return [B, U, W, E, B - Yc, U, B + Yc, U, W - Yc, E, W + Yc, E]
                    }
                }, segments: [1, 2, 1, 2, 1, 2], background: null, borderWidth: 1, borderColor: "red"
            }, {
                type: "text", text: {
                    func: function () {
                        return Math.round(gd.MoveLineGuideDistanceV.data.dis)
                    }
                }, rect: {
                    func: function () {
                        var P = gd.MoveLineGuideDistanceV.data;
                        return [[P.x0 - 10, (P.y0 + P.y1) / 2], 20, 20]
                    }
                }, color: "red", font: "12px Arial", align: "center"
            }]
        };
        var wk = 6;
        gd.ShapeActivingCtrl = {
            comps: [{
                type: "shape", visible: {
                    func: function () {
                        return gd.ShapeActivingCtrl.data.c1 ? !0 : !1
                    }
                }, points: {
                    func: function () {
                        var G = gd.ShapeActivingCtrl.data;
                        return [G.point.x, G.point.y, G.c1.x, G.c1.y]
                    }
                }, segments: [1, 2], background: null, borderWidth: 1, borderColor: "#707070"
            }, {
                type: "shape", visible: {
                    func: function () {
                        return gd.ShapeActivingCtrl.data.c2 ? !0 : !1
                    }
                }, points: {
                    func: function () {
                        var z = gd.ShapeActivingCtrl.data;
                        return [z.point.x, z.point.y, z.c2.x, z.c2.y]
                    }
                }, segments: [1, 2], background: null, borderWidth: 1, borderColor: "#707070"
            }, {
                type: "shape", visible: {
                    func: function () {
                        return gd.ShapeActivingCtrl.data.c1 ? !0 : !1
                    }
                }, points: {
                    func: function () {
                        var H = gd.ShapeActivingCtrl.data.c1, o = H.x, x = H.y, F = wk / 2;
                        return [o - F, x - F, o - F, x + F, o + F, x + F, o + F, x - F]
                    }
                }, segments: [1, 2, 2, 2, 5], borderWidth: 2, background: {
                    func: function () {
                        return Al.getStyle("shapeCtrlPointBackground")
                    }
                }, borderColor: {
                    func: function () {
                        return Al.getStyle("shapeCtrlPointBorderColor")
                    }
                }
            }, {
                type: "shape", visible: {
                    func: function () {
                        return gd.ShapeActivingCtrl.data.c2 ? !0 : !1
                    }
                }, points: {
                    func: function () {
                        var w = gd.ShapeActivingCtrl.data.c2, x = w.x, v = w.y, V = wk / 2;
                        return [x - V, v - V, x - V, v + V, x + V, v + V, x + V, v - V]
                    }
                }, segments: [1, 2, 2, 2, 5], borderWidth: 2, background: {
                    func: function () {
                        return Al.getStyle("shapeCtrlPointBackground")
                    }
                }, borderColor: {
                    func: function () {
                        return Al.getStyle("shapeCtrlPointBorderColor")
                    }
                }
            }]
        }, Bn.Icons.DrawIcon = function (v, l, $, t) {
            $.width = $.height = dj, $.data = t, Al = v, U.Default.drawImage(l, $, 0, 0, dj, dj)
        }, Bn.Icons.MapPoints = function (H, r) {
            for (var t = 0, D = H.length; D > t; t++) H[t] /= r
        }, Bn.roundTo = function (j, c, p) {
            var W = Math.abs(j % c);
            return p > W || p > c - W ? c * Math.round(j / c) : j
        }, Bn.toFixed = function (V) {
            return Math.round(100 * V) / 100
        };
        var zm = Bn.Math.Matrix2 = function () {
            this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
        };
        zm.prototype = {}, zm.prototype.constructor = zm, zm.prototype.set = function (E, i, M, Z, H, u) {
            return this.a = E, this.b = i, this.c = M, this.d = Z, this.tx = H, this.ty = u, this
        }, zm.prototype.apply = function (x, R) {
            R = R || new tm;
            var m = x.x, H = x.y;
            return R.x = this.a * m + this.c * H + this.tx, R.y = this.b * m + this.d * H + this.ty, R
        }, zm.prototype.applyInverse = function (e, _) {
            _ = _ || new tm;
            var y = 1 / (this.a * this.d + this.c * -this.b), G = e.x, X = e.y;
            return _.x = this.d * y * G + -this.c * y * X + (this.ty * this.c - this.tx * this.d) * y, _.y = this.a * y * X + -this.b * y * G + (-this.ty * this.a + this.tx * this.b) * y, _
        }, zm.prototype.translate = function (A, P) {
            return this.tx += A, this.ty += P, this
        }, zm.prototype.scale = function (J, g) {
            return this.a *= J, this.d *= g, this.c *= J, this.b *= g, this.tx *= J, this.ty *= g, this
        }, zm.prototype.rotate = function (B) {
            var u = Math.cos(B), m = Math.sin(B), Z = this.a, A = this.c, v = this.tx;
            return this.a = Z * u - this.b * m, this.b = Z * m + this.b * u, this.c = A * u - this.d * m, this.d = A * m + this.d * u, this.tx = v * u - this.ty * m, this.ty = v * m + this.ty * u, this
        }, zm.prototype.append = function (l) {
            var g = this.a, Q = this.b, y = this.c, x = this.d;
            return this.a = l.a * g + l.b * y, this.b = l.a * Q + l.b * x, this.c = l.c * g + l.d * y, this.d = l.c * Q + l.d * x, this.tx = l.tx * g + l.ty * y + this.tx, this.ty = l.tx * Q + l.ty * x + this.ty, this
        }, zm.prototype.setTransform = function (m, K, I, P, G, C, Q, E, c) {
            var v, h, e, j, i, d, Y, f, r, z;
            return i = Math.sin(Q), d = Math.cos(Q), Y = Math.cos(c), f = Math.sin(c), r = -Math.sin(E), z = Math.cos(E), v = d * G, h = i * G, e = -i * C, j = d * C, this.a = Y * v + f * e, this.b = Y * h + f * j, this.c = r * v + z * e, this.d = r * h + z * j, this.tx = m + (I * v + P * e), this.ty = K + (I * h + P * j), this
        }, zm.prototype.prepend = function (p) {
            var Y = this.tx;
            if (1 !== p.a || 0 !== p.b || 0 !== p.c || 1 !== p.d) {
                var Z = this.a, J = this.c;
                this.a = Z * p.a + this.b * p.c, this.b = Z * p.b + this.b * p.d, this.c = J * p.a + this.d * p.c, this.d = J * p.b + this.d * p.d
            }
            return this.tx = Y * p.a + this.ty * p.c + p.tx, this.ty = Y * p.b + this.ty * p.d + p.ty, this
        }, zm.prototype.invert = function () {
            var U = this.a, a = this.b, T = this.c, q = this.d, D = this.tx, $ = U * q - a * T;
            return this.a = q / $, this.b = -a / $, this.c = -T / $, this.d = U / $, this.tx = (T * this.ty - q * D) / $, this.ty = -(U * this.ty - a * D) / $, this
        }, zm.prototype.identity = function () {
            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
        }, zm.prototype.clone = function () {
            var d = new zm;
            return d.a = this.a, d.b = this.b, d.c = this.c, d.d = this.d, d.tx = this.tx, d.ty = this.ty, d
        }, zm.prototype.copy = function (Q) {
            return Q.a = this.a, Q.b = this.b, Q.c = this.c, Q.d = this.d, Q.tx = this.tx, Q.ty = this.ty, Q
        }, zm.IDENTITY = new zm, zm.TEMP_MATRIX = new zm;
        var tm = Bn.Math.Vector2 = function (x, O) {
            "object" == typeof x && (x.x != f ? (O = x.y, x = x.x) : (O = x[1], x = x[0])), this.set(x || 0, O || 0)
        };
        tm.prototype = {}, tm.prototype.constructor = tm, z.defineProperties(tm.prototype, {
            width: {
                get: function () {
                    return this.x
                }, set: function (W) {
                    this.x = W
                }
            }, height: {
                get: function () {
                    return this.y
                }, set: function (s) {
                    this.y = s
                }
            }
        }), tm.prototype.clone = function () {
            return new tm(this.x, this.y)
        }, tm.prototype.copy = function (h) {
            return this.set(h.x, h.y), this
        }, tm.prototype.equals = function (x) {
            return x.x === this.x && x.y === this.y
        }, tm.prototype.set = function (c, t) {
            return this.x = c || 0, this.y = t || (0 !== t ? this.x : 0), this
        }, tm.prototype.setScalar = function (J) {
            return this.x = J, this.y = J, this
        }, tm.prototype.setX = function (X) {
            return this.x = X || 0, this
        }, tm.prototype.setY = function (L) {
            return this.y = L || 0, this
        }, tm.prototype.add = function (C) {
            return this.x += C.x, this.y += C.y, this
        }, tm.prototype.addVectors = function (T, U) {
            return this.x = T.x + U.x, this.y = T.y + U.y, this
        }, tm.prototype.addScalar = function (V) {
            return this.x += V, this.y += V, this
        }, tm.prototype.addScaledVector = function (R, p) {
            return this.x += R.x * p, this.y += R.y * p, this
        }, tm.prototype.sub = function (C) {
            return this.x -= C.x, this.y -= C.y, this
        }, tm.prototype.subScalar = function (J) {
            return this.x -= J, this.y -= J, this
        }, tm.prototype.subVectors = function (n, u) {
            return this.x = n.x - u.x, this.y = n.y - u.y, this
        }, tm.prototype.multiply = function (I) {
            return this.x *= I.x, this.y *= I.y, this
        }, tm.prototype.multiplyScalar = function (A) {
            return this.x *= A, this.y *= A, this
        }, tm.prototype.divide = function (N) {
            return this.x /= N.x, this.y /= N.y, this
        }, tm.prototype.divideScalar = function (h) {
            return this.multiplyScalar(1 / h)
        }, tm.prototype.min = function (X) {
            return this.x = Math.min(this.x, X.x), this.y = Math.min(this.y, X.y), this
        }, tm.prototype.max = function (f) {
            return this.x = Math.max(this.x, f.x), this.y = Math.max(this.y, f.y), this
        }, tm.prototype.clamp = function (E, x) {
            return this.x = Math.max(E.x, Math.min(x.x, this.x)), this.y = Math.max(E.y, Math.min(x.y, this.y)), this
        }, tm.prototype.clampScalar = function () {
            var m, y;
            return function (t, F) {
                return m === f && (m = new tm, y = new tm), m.set(t, t), y.set(F, F), this.clamp(m, y)
            }
        }(), tm.prototype.clampLength = function (K, b) {
            var q = this.length();
            return this.multiplyScalar(Math.max(K, Math.min(b, q)) / q)
        }, tm.prototype.dot = function (E) {
            return this.x * E.x + this.y * E.y
        }, tm.prototype.lengthSq = function () {
            return this.x * this.x + this.y * this.y
        }, tm.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, tm.prototype.normalize = function () {
            return this.divideScalar(this.length())
        }, tm.prototype.angle = function () {
            var q = Math.atan2(this.y, this.x);
            return 0 > q && (q += 2 * Math.PI), q
        }, tm.prototype.distanceTo = function (e) {
            return Math.sqrt(this.distanceToSquared(e))
        }, tm.prototype.distanceToSquared = function (h) {
            var t = this.x - h.x, L = this.y - h.y;
            return t * t + L * L
        }, tm.prototype.isNearEnough = function (F) {
            return this.distanceToSquared(F) < 1e-8
        }, tm.prototype.setLength = function (r) {
            return this.multiplyScalar(r / this.length())
        }, tm.prototype.lerp = function (T, H) {
            return this.x += (T.x - this.x) * H, this.y += (T.y - this.y) * H, this
        }, tm.prototype.lerpVectors = function (l, v, A) {
            return this.subVectors(v, l).multiplyScalar(A).add(l)
        }, tm.prototype.rotateAround = function (B, d) {
            var g = Math.cos(d), A = Math.sin(d), x = this.x - B.x, L = this.y - B.y;
            return this.x = x * g - L * A + B.x, this.y = x * A + L * g + B.y, this
        };
        var gr = Bn.Math.Curve = function () {
            this._curves = []
        };
        gr.prototype = {}, gr.prototype.constructor = gr, gr.prototype.createFromHtShape = function (T, L) {
            L instanceof U.List && (L = L.toArray());
            var h, K, $, J, Z, s, o, u = this, _ = null, W = null, f = 0, R = Bn.Math.Vector2, N = Bn.Math.CubicBezier;
            for (K = 0, $ = L.length; $ > K; K++) {
                switch (J = L[K], Z = null, J) {
                    case 1:
                        W = new R(T[f], T[f + 1]), _ = W, f += 2;
                        break;
                    case 2:
                        h = new R(T[f], T[f + 1]), f += 2, Z = new N(W, W.clone(), h.clone(), h), W = h;
                        break;
                    case 3:
                        s = new R(T[f], T[f + 1]), h = new R(T[f + 2], T[f + 3]), f += 4, Z = new N(W, s.clone().sub(W).multiplyScalar(2 / 3).add(W), s.clone().sub(h).multiplyScalar(2 / 3).add(h), h), W = h;
                        break;
                    case 4:
                        s = new R(T[f], T[f + 1]), o = new R(T[f + 2], T[f + 3]), h = new R(T[f + 4], T[f + 5]), f += 6, Z = new N(W, s, o, h), W = h;
                        break;
                    case 5:
                        if (!_) break;
                        Z = new N(W, W.clone(), _.clone(), _), W = null, _ = null
                }
                Z && (Z._index = u._curves.length, u._curves.push(Z))
            }
        }, gr.prototype.checkPoint = function (G, e) {
            var Z, K, u, Q, c, r = this, M = r._curves;
            for (Z = 0, K = M.length; K > Z; Z++) if (Q = M[Z], c = Q.intersectRect(G, e, e), c.length) return u = 0, c.forEach(function (k) {
                u += k.t
            }), u /= c.length, G = Q.getPointAt(u), G.t = u, {bezier: Q, intersection: G}
        }, gr.prototype.insertKnot = function (o, G) {
            var N = o.insertKnot(G), s = this, f = s._curves;
            f.splice(o._index, 1, N[0], N[1])
        }, gr.prototype._isCloseEnough = function (W, z) {
            return Math.abs(W.x - z.x) < 1e-6 && Math.abs(W.y - z.y) < 1e-6
        }, gr.prototype._isSamePoint = function (v, G) {
            return v === G
        }, gr.prototype.moveRealPoint = function (q, v) {
            var i = this, C = i._curves, f = v.clone().sub(q);
            C.forEach(function (o) {
                var L = o._p1;
                o._p2, o._p3;
                var $ = o._p4;
                i._isSamePoint(L, q) && (o._p2.add(f), o._p1 = v), i._isSamePoint($, q) && (o._p3.add(f), o._p4 = v)
            })
        }, gr.prototype.moveCtrlPoint = function (o, u, X) {
            var q = o[X];
            if (q) {
                var t = this, B = t._curves;
                u.clone().sub(q), B.forEach(function (V) {
                    var m;
                    "c2" === X ? m = "_p2" : "c1" === X && (m = "_p3"), t._isSamePoint(V[m], q) && (V[m] = u)
                }), o[X] = u
            }
        }, gr.prototype.deleteRealPoint = function (W) {
            var j, N, Z, B, R, O, l, b = this, c = b._curves, x = {}, I = [], H = Bn.Math.CubicBezier;
            for (N = 0, Z = c.length; Z > N; N++) j = c[N], B = j._p1, R = j._p2, O = j._p3, l = j._p4, (x[N] || !b._isSamePoint(B, W)) && (b._isSamePoint(l, W) ? Z > N + 1 && b._isSamePoint(c[N + 1]._p1, W) && I.push(new H(B, R, c[N + 1]._p3, c[N + 1]._p4)) : I.push(j));
            b._curves = I
        }, gr.prototype.findPairs = function (Q, z) {
            var E, F, g, V, w, W, m, I, j = this, c = j._curves, J = {}, L = [];
            for (F = 0, g = c.length; g > F; F++) E = c[F], V = E._p1, w = E._p2, W = E._p3, m = E._p4, !J[F] && j._isSamePoint(V, Q) && (z ? L.push({
                point: V,
                r2: m
            }) : L.push({point: V, c2: w})), j._isSamePoint(m, Q) && (I = z ? {point: m, r1: V} : {
                point: m,
                c1: W
            }, g > F + 1 && j._isSamePoint(c[F + 1]._p1, Q) && (z ? I.r2 = c[F + 1]._p4 : I.c2 = c[F + 1]._p2, J[F + 1] = !0), L.push(I));
            return L
        }, gr.prototype.toHtShape = function () {
            var B = this, E = B._curves, C = [], x = [], _ = {x: 1 / 0, y: 1 / 0};
            return E.forEach(function (U) {
                var $ = U._p1, Q = U._p2, c = U._p3, G = U._p4;
                return B._isCloseEnough($, _) || (C.push(1), x.push($.clone())), _ = G, B._isCloseEnough($, Q) && B._isCloseEnough(c, G) ? (C.push(2), x.push(G.clone()), void 0) : (C.push(4), x.push(Q.clone(), c.clone(), G.clone()), void 0)
            }), {segments: C, points: x}
        };
        var of = Bn.Math.CubicBezier = function (h, J, V, $) {
            var c = this;
            c._p1 = h, c._p2 = J, c._p3 = V, c._p4 = $
        };
        of.prototype = {}, of.prototype.constructor = of, of.prototype.intersectRect = function (f, X, G) {
            var F = X / 2, e = G / 2, l = f.x, M = f.y, q = Bn.Math.Vector2, H = new q(-F + l, -e + M),
                O = new q(F + l, e + M), Q = new q(O.x, H.y), I = new q(H.x, O.y), p = this, $ = p.intersectLine(H, Q),
                V = p.intersectLine(Q, O), i = p.intersectLine(O, I), T = p.intersectLine(I, H),
                s = $.concat(V).concat(i).concat(T);
            return s
        }, of.prototype.intersectLine = function (j, t) {
            var e, p, E, v, $, R, i, V, K, f, h, w, X, m = this, o = j.clone().min(t), z = j.clone().max(t);
            v = m._p1, $ = m._p2, R = m._p3, i = m._p4, e = v.clone().multiplyScalar(-1), p = $.clone().multiplyScalar(3), E = R.clone().multiplyScalar(-3), h = e.add(p).add(E).add(i), e = v.clone().multiplyScalar(3), p = $.clone().multiplyScalar(-6), E = R.clone().multiplyScalar(3), f = e.add(p).add(E), e = v.clone().multiplyScalar(-3), p = $.clone().multiplyScalar(3), K = e.add(p), V = v.clone(), X = new Bn.Math.Vector2(j.y - t.y, t.x - j.x), w = j.x * t.y - t.x * j.y;
            for (var k = m.getRoots(X.dot(h), X.dot(f), X.dot(K), X.dot(V) + w), U = new Array, Z = 0, N = k.length; N > Z; Z++) {
                var I = k[Z];
                if (!(0 > I || I > 1)) {
                    var Y = v.clone().lerp($, I), S = $.clone().lerp(R, I), d = R.clone().lerp(i, I), C = Y.lerp(S, I),
                        a = S.lerp(d, I), q = C.lerp(a, I);
                    q.t = I, j.x == t.x ? o.y <= q.y && q.y <= z.y && U.push(q) : j.y == t.y ? o.x <= q.x && q.x <= z.x && U.push(q) : q.x >= o.x && q.y >= o.y && q.x <= z.x && q.y <= z.y && U.push(q)
                }
            }
            return U
        }, of.prototype.getPointAt = function (Z) {
            var i = this, _ = i._p1, u = i._p2, k = i._p3, q = i._p4, h = _.clone().lerp(u, Z),
                A = u.clone().lerp(k, Z), v = k.clone().lerp(q, Z), o = h.lerp(A, Z), r = A.lerp(v, Z);
            return o.lerp(r, Z)
        }, of.prototype.getRoots = function (T, G, e, g) {
            var V, h, x, k, Q, i = new Array;
            if (Math.abs(T) < 1e-6) {
                var V = G, h = e / V, x = g / V, k = h * h - 4 * x;
                if (k > 0) {
                    var Q = Math.sqrt(k);
                    i.push(.5 * (-h + Q)), i.push(.5 * (-h - Q))
                } else 0 == k && i.push(.5 * -h)
            }
            G /= T, e /= T, g /= T, V = (3 * e - G * G) / 3, h = (2 * G * G * G - 9 * e * G + 27 * g) / 27;
            var y = G / 3, p = h * h / 4 + V * V * V / 27, L = h / 2;
            if (Math.abs(p) <= 1e-6 && (p = 0), p > 0) {
                var j, v, Q = Math.sqrt(p);
                j = -L + Q, v = j >= 0 ? Math.pow(j, 1 / 3) : -Math.pow(-j, 1 / 3), j = -L - Q, j >= 0 ? v += Math.pow(j, 1 / 3) : v -= Math.pow(-j, 1 / 3), i.push(v - y)
            } else if (0 > p) {
                var t = Math.sqrt(-V / 3), l = Math.atan2(Math.sqrt(-p), -L) / 3, H = Math.cos(l), J = Math.sin(l),
                    D = Math.sqrt(3);
                i.push(2 * t * H - y), i.push(-t * (H + D * J) - y), i.push(-t * (H - D * J) - y)
            } else {
                var j;
                j = L >= 0 ? -Math.pow(L, 1 / 3) : Math.pow(-L, 1 / 3), i.push(2 * j - y), i.push(-j - y)
            }
            return i
        }, of.prototype._70I = function () {
            var d = this;
            return d._p1.distanceToSquared(d._p2) < 1e-10 && d._p3.distanceToSquared(d._p4) < 1e-10
        }, of.prototype.insertKnot = function (L) {
            var d = this, M = d._p1, B = d._p2, S = d._p3, t = d._p4, Z = M.clone().lerp(B, L),
                x = B.clone().lerp(S, L), U = S.clone().lerp(t, L), T = Z.clone().lerp(x, L), _ = x.clone().lerp(U, L),
                O = T.clone().lerp(_, L);
            return d._70I() ? (M.clone().lerp(t, L), [new Bn.Math.CubicBezier(M, M.clone(), O.clone(), O), new Bn.Math.CubicBezier(O, O.clone(), t.clone(), t)]) : [new Bn.Math.CubicBezier(M, Z, T, O), new Bn.Math.CubicBezier(O, _, U, t)]
        };
        var Rb = U.Default.getInternal().ui().EdgeUI, Fl = {
            _47O: function (q) {
                var A = this, E = Fl.getBackups()._47O;
                Bn.inEdit(A.gv) || E.call(A, q)
            }
        };
        Bn.Inject.registAsModule(Fl, Rb);
        var wn = U.Default.getInternal().ui().NodeUI, ak = {
            _47O: function (H) {
                var q = this, S = ak.getBackups()._47O;
                Bn.inEdit(q.gv) || S.call(q, H)
            }, getSelectWidth: function () {
                var H = this, Z = H.gv, E = H._data;
                if (Z.isEditable(E) && Bn.inEdit(Z)) return 0;
                var b = ak.getBackup("getSelectWidth");
                return b.call(H)
            }
        };
        Bn.Inject.registAsModule(ak, wn);
        var nl = U.graph.GraphView, fq = {
            _editPointSize: function () {
                var c = U.Default.isTouchable, t = Bn.getStyle("pointSize");
                return t[c ? 0 : 1]
            }(), isPointEditable: function (n) {
                var m = this;
                if (Bn.inEdit(m)) return m._pointEditableFunc ? m._pointEditableFunc(n) : !0;
                var I = fq.getBackup("isPointEditable");
                I.call(m, n)
            }, isEditable: function (h) {
                var N = this, J = fq.getBackup("isEditable"), I = J.call(N, h);
                if (!Bn.inEdit(N)) return I;
                if (!(h instanceof U.Edge)) return I;
                if (!h.s("2d.editable")) return !1;
                var W = N.getEditableFunc();
                return W ? W(h) : !0
            }, _42: function (c, U) {
                var Q = this, g = fq.getBackups()._42;
                if (g.call(Q, c, U), Bn.inEdit(Q)) {
                    var p = Q.getEditInteractor();
                    p.drawImpl()
                }
            }
        };
        Bn.Inject.registAsModule(fq, nl);
        var dq = U.Default.getInternal().ui().ShapeUI, Zl = {
            _47O: function (a) {
                var d = this, H = Zl.getBackups()._47O;
                Bn.inEdit(d.gv) || H.call(d, a)
            }
        };
        Bn.Inject.registAsModule(Zl, dq);
        var Ln = U.graph.DefaultInteractor, rm = {
            handle_mousewheel: function (k) {
                var G = this, g = rm.getBackup("handle_mousewheel");
                Bn.inEdit(G.gv) || g.call(G, k)
            }
        };
        Bn.Inject.registAsModule(rm, Ln);
        var Fm = U.graph.MoveInteractor, gj = {
            _calcShift: function (S, J) {
                var c = this, k = gj.getBackup("_calcShift"), B = c.gv;
                if (!Bn.inEdit(B)) return k.call(c, S, J);
                var b = B.getEditInteractor(), i = b.getSubModule("Move").calcShift(S, J);
                return i || k.call(c, S, J)
            }, clear: function (k) {
                var V = this, Y = gj.getBackup("clear");
                Y.call(V, k);
                var d = V.gv;
                if (Bn.inEdit(d)) {
                    var y = d.getEditInteractor();
                    y.getSubModule("Move").clear(k)
                }
            }
        };
        Bn.Inject.registAsModule(gj, Fm);
        var pe = Bn.Rect = function (v) {
            this.catalog = "Rect", this._interactor = v
        };
        pe.prototype = {}, pe.prototype.constructor = pe, pe.prototype.gatherInfo = function ($, b) {
            var k = this;
            if (1 === b.length) {
                var Y = b[0];
                return Y instanceof U.Shape && Y._70I() ? k.gatherLine($, Y) : Y instanceof U.Group && Y.isExpanded() ? !1 : k.gatherSingleTarget($, Y)
            }
            return b.length > 1 ? k.gatherMultiTargets($, b) : !1
        }, pe.prototype.gatherSingleTarget = function (i, d) {
            if (d.getCorners) {
                var X, q = this.info;
                this.target = d, X = this.screenInfo = {};
                var $ = d.getCorners();
                q.LT = new Bn.Math.Vector2($[0]), q.LB = new Bn.Math.Vector2($[1]), q.RB = new Bn.Math.Vector2($[2]), q.RT = new Bn.Math.Vector2($[3]), q.T = q.LT.clone().add(q.RT).divideScalar(2), q.B = q.LB.clone().add(q.RB).divideScalar(2), q.L = q.LT.clone().add(q.LB).divideScalar(2), q.R = q.RT.clone().add(q.RB).divideScalar(2);
                for (var s in q) X[s] = Bn.toScreenPosition(i, q[s]);
                var h = this._interactor.getStyle("checkSize"), n = function (z, j, D) {
                    var M = j.clone().sub(z).setLength(-h), O = D.clone().sub(z).setLength(-h), n = M.add(O).add(z);
                    return n
                };
                return X.rotLT = n(X.LT, X.RT, X.LB), X.rotLB = n(X.LB, X.LT, X.RB), X.rotRB = n(X.RB, X.LB, X.RT), X.rotRT = n(X.RT, X.LT, X.RB), X.rotT = X.rotLT.clone().add(X.rotRT).divideScalar(2), X.rotB = X.rotLB.clone().add(X.rotRB).divideScalar(2), X.rotL = X.rotLT.clone().add(X.rotLB).divideScalar(2), X.rotR = X.rotRT.clone().add(X.rotRB).divideScalar(2), X.rotation = d.getRotation(), !0
            }
        }, pe.prototype.gatherMultiTargets = function (C, m) {
            var t = Bn.Group.findOrCreateGroup(m);
            if (!t) return !1;
            var s = this;
            return s.editing && "rotate" !== s.editing.mode || t.calcInfo(), s.gatherSingleTarget(C, t)
        }, pe.prototype.gatherLine = function (h, N) {
            this.target = N;
            var l = this.screenInfo = {}, H = N.getPoints();
            return l.P1 = Bn.toScreenPosition(h, H.get(0)), l.P2 = Bn.toScreenPosition(h, H.get(1)), !0
        }, pe.ResizeKeys = ["LT", "RB", "LB", "RT", "L", "R", "B", "T"], pe.ResizeDirection = [{x: -1, y: -1}, {
            x: 1,
            y: 1
        }, {x: -1, y: 1}, {x: 1, y: -1}, {x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {
            x: 0,
            y: -1
        }], pe.RotateKeys = ["rotLT", "rotRB", "rotLB", "rotRT", "rotL", "rotR", "rotB", "rotT"], pe.prototype.check = function (m, p, N) {
            if (U.Default.isLeftButton(p)) {
                var w = this;
                if (w.editing = null, w.tipInfo = null, w.screenInfo) {
                    if (w.screenInfo.P1) return w._checkLine(N);
                    var D, q, I, E = null, A = w._interactor, B = A.getStyle("checkSize");
                    for (q in Bn.Rect.ResizeKeys) if (I = Bn.Rect.ResizeKeys[q], Bn.checkHit(N, w.screenInfo[I], B)) {
                        E = I, D = "resize";
                        break
                    }
                    if (!E) {
                        var S = A.getStyle("rotateCheckSize");
                        for (q in Bn.Rect.RotateKeys) if (I = Bn.Rect.RotateKeys[q], Bn.checkHit(N, w.screenInfo[I], S)) {
                            E = I, D = "rotate";
                            break
                        }
                    }
                    if (!E) return this._interactor.setCursor("default"), void 0;
                    var t = w.target;
                    if ("rotate" === D) {
                        this._interactor.setCursor("crosshair");
                        var l = m.lp(p), X = t instanceof Bn.Group ? t.getAnchor2() : t.getPosition();
                        w.editing = {
                            mode: D,
                            key: E,
                            pos: X,
                            flipY: t.getScale().y < 0,
                            rotation: t.getRotation(),
                            hitRot: Math.atan2(l.y - X.y, l.x - X.x)
                        }
                    } else {
                        var Y = Bn.Rect.ResizeKeys.indexOf(E), Q = Bn.Rect.ResizeDirection[Y],
                            v = Math.cos(t.getRotation()), C = Math.sin(t.getRotation()),
                            j = Q.x * Math.sign(t.getScale().x), e = Q.y * Math.sign(t.getScale().y),
                            K = Math.atan2(-C * j - v * e, v * j - C * e), d = (Math.round(K / (Math.PI / 4)) + 8) % 8,
                            g = ["ew-resize", "nesw-resize", "ns-resize", "nwse-resize", "ew-resize", "nesw-resize", "ns-resize", "nwse-resize"][d];
                        this._interactor.setCursor(g);
                        var O = t.getWidth(), R = t.getHeight(), z = t.getAnchor();
                        w.editing = {
                            mode: D,
                            key: E,
                            rect: {x: -O * z.x, y: -R * z.y, width: O, height: R},
                            anchor: z,
                            matrix: t.getMatrix()
                        }
                    }
                    return E
                }
            }
        }, pe.prototype._checkLine = function (H) {
            var Q = this;
            Q.screenInfo;
            var I, L = Q._interactor.getStyle("checkSize");
            if (Bn.checkHit(H, Q.screenInfo.P1, L)) I = "P1"; else {
                if (!Bn.checkHit(H, Q.screenInfo.P2, L)) return this._interactor.setCursor("default"), void 0;
                I = "P2"
            }
            return Q.editing = {mode: "line", key: I}, I
        }, pe.prototype.startEdit = function (A, E) {
            A.startDragging(E);
            var Y = this, v = Y.editing, s = Y.target;
            v && "rotate" !== v.mode && ("line" === v.mode || s && 0 === s.getRotation()) && (Y._inSmartGuide = !0, Y._interactor.rectGuide.gatherRects())
        }, pe.prototype._46O = function () {
            var I = this;
            I.editing = null, I.tipInfo = null, I._inSmartGuide && (I._interactor.rectGuide.clear(), I._inSmartGuide = !1)
        }, pe.prototype.handleEdit = function (f, h) {
            var $ = this, M = $.editing;
            if (M) {
                var g, w, j, p, L, Q, u = $.target, R = M.key, B = M.mode, W = $._interactor;
                if ("rotate" === B) {
                    var V = f.lp(h), v = M.pos, T = Math.atan2(V.y - v.y, V.x - v.x);
                    if (u instanceof Bn.Group) return u.setRotation2(T - M.hitRot), M.hitRot = T, void 0;
                    T -= M.hitRot;
                    var q = M.rotation + T;
                    if (M.flipY && (q += Math.PI), q %= 2 * Math.PI, 0 > q && (q += 2 * Math.PI), !U.Default.isCtrlDown(h)) {
                        var A, d;
                        U.Default.isShiftDown(h) ? (A = W.getStyle("shiftRotateRound"), d = A / 2) : (A = W.getStyle("rotateRound"), d = W.getStyle("rotateSensitivity")), q = Bn.roundTo(q, A, d)
                    }
                    u.setRotation(q), q > Math.PI && (q -= 2 * Math.PI);
                    var e = 180 * (q / Math.PI);
                    e = e.toFixed(2), g = "" + e + "°"
                } else if ("resize" === B) {
                    var l = M.rect;
                    p = l.x, L = l.y;
                    var N = l.width, b = l.height, D = M.anchor, C = M.matrix;
                    w = f.lp(h);
                    var K, E = U.Default.unionPoint;
                    if ($._inSmartGuide && !U.Default.isCtrlDown(h)) {
                        var S;
                        "L" === R || "R" === R ? S = "x" : ("T" === R || "B" === R) && (S = "y"), $._adsorbedToClosest(w, S), Q = !0
                    }
                    K = C.tfi(w);
                    var G;
                    "LT" === R ? (l = E(K, {x: p + N, y: L + b}), G = 9) : "T" === R ? (l = E({x: p, y: K.y}, {
                        x: p + N,
                        y: L + b
                    }), G = 1) : "RT" === R ? (l = E({x: p, y: K.y}, {
                        x: K.x,
                        y: L + b
                    }), G = 33) : "L" === R ? (l = E({x: K.x, y: L}, {
                        x: p + N,
                        y: L + b
                    }), G = 8) : "R" === R ? (l = E({x: p, y: L}, {
                        x: K.x,
                        y: L + b
                    }), G = 32) : "LB" === R ? (l = E({x: K.x, y: L}, {
                        x: p + N,
                        y: K.y
                    }), G = 12) : "B" === R ? (l = E({x: p, y: L}, {
                        x: p + N,
                        y: K.y
                    }), G = 4) : "RB" === R && (l = E({x: p, y: L}, K), G = 36);
                    var X = C.tf(l.x + l.width * D.x, l.y + l.height * D.y);
                    u.setPosition(X), u.setSize(l.width, l.height), Q && (j = u.getRect(), W.rectGuide.gatherLines({
                        node: u,
                        x: j.x,
                        y: j.y,
                        w: j.width,
                        h: j.height
                    }, S, G)), g = "" + Math.round(l.width) + " * " + Math.round(l.height)
                } else if ("line" === B) {
                    if (w = f.lp(h), es(h)) {
                        var r = u.getPoints(), n = "P1" === R ? r.get(1) : r.get(0), F = {x: w.x - n.x, y: w.y - n.y},
                            i = W.getStyle("shiftLineRotateRound"), I = $._shiftDirList;
                        if (!I || $._shiftRotateRound !== i) {
                            $._shiftRotateRound = i, $._shiftDirList = I = [];
                            for (var _ = 0; _ < Math.PI; _ += i) I.push({x: H(_), y: m(_)})
                        }
                        for (var z, Z = 0, k = 0, o = I.length; o > k; k++) {
                            var O = I[k], c = O.x * F.x + O.y * F.y;
                            Math.abs(c) > Math.abs(Z) && (Z = c, z = O)
                        }
                        w = {x: n.x + z.x * Z, y: n.y + z.y * Z}, W.rectGuide.clear()
                    } else $._inSmartGuide && !U.Default.isCtrlDown(h) && ($._adsorbedToClosest(w), Q = !0);
                    u.setPoint("P1" === R ? 0 : 1, w, !0);
                    var t = u.getPoints(), s = t.get(0), P = t.get(1);
                    p = s.x - P.x, L = s.y - P.y, g = " " + Math.round(Math.sqrt(p * p + L * L)) + " ", Q && (j = u.getRect(), W.rectGuide.gatherLines({
                        node: u,
                        x: j.x,
                        y: j.y,
                        w: j.width,
                        h: j.height
                    }))
                }
                var x = U.Default.getLogicalPoint(h, W._canvas);
                x.x += Bn.Icons.TipShiftX, x.y += Bn.Icons.TipShiftY, $.tipInfo = {
                    helperPos: x,
                    text: g,
                    size: g.length
                }
            }
        }, pe.prototype._adsorbedToClosest = function (K, t) {
            var R = this, d = R._interactor, w = d.rectGuide.findClosest(K, t), m = d.gridGuide.findClosest(K, t),
                S = 1 / 0, F = 1 / 0;
            w && (isFinite(w.x) && (S = w.x), isFinite(w.y) && (F = w.y)), m && (isFinite(m.x) && Math.abs(m.x) < Math.abs(S) && (S = m.x), isFinite(m.y) && Math.abs(m.y) < Math.abs(F) && (F = m.y)), isFinite(S) && (K.x += S), isFinite(F) && (K.y += F)
        }, pe.prototype._42 = function (R, P, n) {
            var k = this;
            k.info = {}, k.screenInfo = null;
            var v = k._interactor;
            if (!v.editDetail && k.gatherInfo(P, n)) {
                var a = k.screenInfo;
                a.P1 ? Bn.Icons.DrawIcon(v, R, Bn.Icons.Line, k.screenInfo) : Bn.Icons.DrawIcon(v, R, Bn.Icons.Rect, k.screenInfo), k.tipInfo && Bn.Icons.DrawIcon(v, R, Bn.Icons.TipHelper, k.tipInfo), k.target instanceof Bn.Group && k.target._42(v, R, P)
            }
        };
        var Tj = Bn.Anchor = function (c) {
            this.catalog = "Anchor", this._interactor = c
        };
        Tj.prototype = {}, Tj.prototype.constructor = Tj, Tj.prototype.gatherInfo = function (W, r) {
            var B = this;
            if (1 === r.length) {
                var c = r[0];
                if (!c.getAnchor) return;
                if (c instanceof U.Shape && c._70I()) return;
                if (c instanceof U.Group && c.isExpanded()) return;
                return B.gatherSingleTarget(W, r[0])
            }
            return r.length > 1 ? B.gatherMultiTargets(W, r) : !1
        }, Tj.prototype.gatherSingleTarget = function (v, M) {
            var k = this;
            return k.info.POS = M.getPosition(), k.screenInfo.POS = Bn.toScreenPosition(v, k.info.POS), k.target = M, !0
        }, Tj.prototype.gatherMultiTargets = function (o, m) {
            var d = this, j = Bn.Group.findOrCreateGroup(m);
            return j ? (d.screenInfo.POS = Bn.toScreenPosition(o, j.getAnchor2()), d.target = j, !0) : !1
        }, Tj.prototype.check = function (L, I, D) {
            if (U.Default.isLeftButton(I)) {
                var y = this, Q = y._interactor;
                if (Q.getStyle("anchorMovable") !== !1) {
                    y.editing = null, y.tipInfo = null;
                    var R;
                    if (y.screenInfo && (R = y.screenInfo.POS) && Bn.checkHit(D, new Bn.Math.Vector2(R), Q.getStyle("checkSize"))) {
                        if (y.target instanceof Bn.Group) return y.editing = {}, !0;
                        var H = y.target, O = H.getWidth(), k = H.getHeight(), $ = H.getAnchor();
                        return y.editing = {
                            rect: {x: -O * $.x, y: -k * $.y, width: O, height: k},
                            anchor: $,
                            matrix: H.getMatrix()
                        }, !0
                    }
                }
            }
        }, Tj.prototype.startEdit = function (W, T) {
            W.startDragging(T)
        }, Tj.prototype._46O = function () {
            this.editing = null, this.tipInfo = null
        }, Tj.prototype.handleEdit = function (Y, F) {
            var O = this, E = O.target;
            if (E && O.editing) {
                var P = Y.lp(F);
                if (E instanceof Bn.Group) return E.setAnchor2(P), O._interactor._42(), void 0;
                var Q = O.editing.matrix, L = Q.tfi(P), r = O.editing.rect, m = (L.x - r.x) / r.width,
                    u = (L.y - r.y) / r.height;
                if (!U.Default.isCtrlDown(F)) {
                    var p = O._interactor.getStyle("anchorRound"), e = O._interactor.getStyle("anchorSensitivity");
                    m = Bn.roundTo(m, p, e), u = Bn.roundTo(u, p, e)
                }
                E.setAnchor(m, u, !0);
                var x = U.Default.getLogicalPoint(F, O._interactor._canvas);
                x.x += Bn.Icons.TipShiftX, x.y += Bn.Icons.TipShiftY;
                var z = "" + m.toFixed(2) + ", " + u.toFixed(2);
                O.tipInfo = {helperPos: x, text: z, size: z.length}
            }
        }, Tj.prototype._42 = function (X, c, a) {
            var D = this;
            D.info = {}, D.screenInfo = {};
            var b = D._interactor;
            b.editDetail || D.gatherInfo(c, a) && b.getStyle("anchorVisible") !== !1 && (Bn.Icons.DrawIcon(b, X, Bn.Icons.Anchor, D.screenInfo), D.tipInfo && Bn.Icons.DrawIcon(b, X, Bn.Icons.TipHelper, D.tipInfo))
        };
        var gr = Bn.Curve = function (R) {
            this.catalog = "Curve", this._interactor = R
        };
        gr.prototype = {}, gr.prototype.constructor = gr, gr.PointType = {
            Mirrored: 0,
            Straight: 1,
            Disconnected: 2,
            Asymmetric: 3
        }, gr.prototype.setUp = function () {
            var o = this, X = o._interactor;
            X && X.gv.mp(o._onGraphviewPropertyChanged, o)
        }, gr.prototype._onGraphviewPropertyChanged = function (E) {
            ("zoom" === E.property || "translateX" === E.property || "translateY" === E.property) && this._handleDataChanged()
        }, gr.prototype.tearDown = function () {
            var n = this, a = n._interactor;
            a && a.gv.ump(n._onGraphviewPropertyChanged)
        }, gr.prototype.canEnterEditDetailMode = function () {
            var P = this, T = P._interactor._getValidSelection();
            if (1 === T.length) {
                var a = T[0];
                if (a instanceof U.Shape) return P.target = a, !0
            }
        }, gr.prototype.preHandleScroll = function () {
            var U = this.editing;
            return U && U.inEdit ? !0 : void 0
        }, gr.prototype.calcCurrentSelectintStatus = function () {
            var U = this;
            if (U.activing && !U.activing.selections) {
                if (U.activing.status != f) return U.activing.status;
                var z = function (R) {
                    var l = U.activing.status;
                    U.activing.status = R, U._interactor.fp("shapePointStatus", l, R)
                }, a = Bn.Curve.PointType, N = U.activing.point, q = U.activing.pairs;
                if (!q || 1 !== q.length) return z(a.Mirrored);
                var y = q[0], c = y.c1 && y.c1.isNearEnough(N), G = y.c2 && y.c2.isNearEnough(N);
                if (!y.c1 || !y.c2) return c || G ? z(a.Straight) : z(a.Disconnected);
                if (c && G) return z(a.Straight);
                if (c || G) return z(a.Asymmetric);
                var u = y.c1.clone().sub(N), b = y.c2.clone().sub(N);
                return Math.abs(u.x * b.y - u.y * b.x) > 1e-5 || u.x * b.x > 0 ? z(a.Disconnected) : Math.abs(u.length() - b.length()) > 1e-5 ? z(a.Asymmetric) : z(a.Mirrored)
            }
        }, gr.prototype.handle_keydown = function (K) {
            var h = this;
            if (h._interactor.editDetail) {
                var V = Bn.Curve.PointType;
                "1" === K.key ? h.setCurrentSelectionStatus(V.Straight) : "2" === K.key ? h.setCurrentSelectionStatus(V.Mirrored) : "3" === K.key ? h.setCurrentSelectionStatus(V.Disconnected) : "4" === K.key && h.setCurrentSelectionStatus(V.Asymmetric)
            }
        }, gr.prototype.setCurrentSelectionStatus = function (e) {
            var E = this;
            if (E.activing) {
                var b = E.calcCurrentSelectintStatus();
                if (null !== b && b !== e) {
                    E.activing.status = e;
                    var s = E.activing.point, r = E.activing.pairs;
                    if (r && 1 === r.length) {
                        var Q = r[0], p = E.screenInfo.curve, F = Bn.Curve.PointType, z = function () {
                            E._writeToShape(), E._interactor.fp("shapePointStatus", b, e)
                        };
                        if (e === F.Straight) return p.moveCtrlPoint(Q, s, "c1"), p.moveCtrlPoint(Q, s, "c2"), z(), void 0;
                        if (b === F.Straight) {
                            var J = p.findPairs(s, !0), C = J[0], L = C.r1 || s, R = C.r2 || s,
                                $ = R.clone().sub(L).multiplyScalar(.25);
                            return p.moveCtrlPoint(Q, s.clone().sub($), "c1"), p.moveCtrlPoint(Q, s.clone().add($), "c2"), z(), void 0
                        }
                        var H = Q.c1, y = Q.c2;
                        if (H && y) {
                            if (e === F.Mirrored) return p.moveCtrlPoint(Q, s.clone().multiplyScalar(2).sub(y), "c1"), z(), void 0;
                            if (e === F.Asymmetric && b === F.Disconnected) {
                                var D = H.clone().sub(s).length(), $ = s.clone().sub(y).setLength(D).add(s);
                                return p.moveCtrlPoint(Q, $, "c1"), z(), void 0
                            }
                        }
                        E._interactor.fp("shapePointStatus", b, e)
                    }
                }
            }
        }, gr.prototype._handleDataChanged = function (E) {
            var k = this;
            if (k.screenInfo && k.target) {
                var b = k._interactor;
                k.gatherSingleTarget(b.gv, k.target, !0), k.check(b.gv, null, E ? b._getLogicalPoint(E) : new Bn.Math.Vector2(b._lastClientPoint)), b._42()
            }
        }, gr.prototype.gatherSingleTarget = function (R, j, l) {
            var M, e, Y = this;
            Y.screenInfo && Y.screenInfo.curve && (e = Y.screenInfo.curve._curves);
            var G = Y.editing;
            M = G ? Y.screenInfo : Y.screenInfo = {}, M.S = j._58O;
            var b = M.P = [], i = Y._getShapeMatrix();
            if (j._59O.each(function (C) {
                C = i.apply(C);
                var k = Bn.toScreenPosition(R, C);
                b.push(k.x, k.y)
            }), !M.S || !M.S.size()) {
                M.S = new U.List, M.S.add(1);
                for (var W = 0; W < b.length / 2 - 1; W++) M.S.add(2)
            }
            if ((!G || l) && Y.convertToCubicBezier(e), Y.activing && (l || !Y.editing || "realPoint" === Y.editing.type)) {
                var v = M.curve.findPairs(Y.activing.point);
                Y.activing.pairs = v
            }
        }, gr.prototype._getShapeMatrix = function () {
            var B = new Bn.Math.Matrix2, A = this.target, F = A.getPosition();
            return B.translate(-F.x, -F.y).scale(A.getScale().x, A.getScale().y).rotate(A.getRotation()).translate(F.x, F.y), B
        }, gr.prototype._convertToNewPoint = function (j, Q, n) {
            var V, I, q;
            for (V = 0, I = Q.length; I > V; V++) {
                if (q = Q[V], q._p1.isNearEnough(j)) return q._p1;
                if (q._p4.isNearEnough(j)) return q._p4
            }
            if (n) for (V = 0, I = Math.min(n.length, I); I > V; V++) {
                if (q = n[V], q._p1 === j) return Q[V]._p1;
                if (q._p4 === j) return Q[V]._p4
            }
        }, gr.prototype.convertToCubicBezier = function (u) {
            var m, K, Q = this, f = new Bn.Math.Curve, z = Q.screenInfo;
            if (f.createFromHtShape(z.P, z.S), z.curve = f, Q.activing) {
                var _ = f._curves;
                if (m = Q.activing.point, K = Q._convertToNewPoint(m, _, u), K && (Q.activing.point = K), Q.activing.selections) {
                    var x = -1, O = Q.activing.selections;
                    O.forEach(function (W) {
                        x++, K = Q._convertToNewPoint(W, _, u), K && (O[x] = K)
                    })
                }
            }
        }, gr.prototype.check = function (_, c, O) {
            if (!c || U.Default.isLeftButton(c)) {
                var Z = this;
                if (Z._interactor.setCursor("default"), Z.editing = null, Z.highlight = null, Z.tipInfo = null, Z.screenInfo) {
                    if (Z._checkEditCtrlPoint(O)) return Z._interactor._42(), !0;
                    if (Z._checkEditRealPoint(O)) return Z._interactor._42(), !0;
                    var N = Z.screenInfo.curve, w = N.checkPoint(O, Z._interactor.getStyle("curveIntersectSize"));
                    if (w) {
                        var K = Z.highlight = {};
                        K.type = "insertKnot", K.bezier = w.bezier, K.point = w.intersection
                    }
                    return Z._interactor._42(), !0
                }
            }
        }, gr.prototype._checkEditRealPoint = function (L) {
            var r, i, h, A, g, R, t = this, G = t.screenInfo.curve._curves,
                k = t._interactor.getStyle("curvePointIntersectSize"), c = 1 / 0;
            for (k *= k, h = 0, A = G.length; A > h; h++) r = G[h], g = r._p1, R = L.distanceToSquared(g), c > R && (c = R, i = g), g = r._p4, R = L.distanceToSquared(g), c > R && (c = R, i = g);
            if (c > k) return !1;
            var x = t.highlight = {};
            return x.type = "changeRealPoint", x.point = i, t.editing = {
                type: "realPoint",
                point: i,
                shiftGuide: {point: i.clone(), dir: "x", limit: 0}
            }, t._interactor.setCursor("crosshair"), !0
        }, gr.prototype._checkEditCtrlPoint = function (d) {
            var B = this;
            if (B.activing && !B.activing.selections) {
                var G = B.calcCurrentSelectintStatus();
                if (G !== Bn.Curve.PointType.Straight) {
                    var h = B.activing.pairs;
                    if (h) {
                        var z = B._interactor.getStyle("curvePointIntersectSize");
                        z *= z;
                        var e, t, g, V, b, X, Z, s, M, E = 1 / 0;
                        for (Z = 0, M = h.length; M > Z; Z++) for (V = h[Z], s = 0; 2 > s; s++) b = 0 === s ? "c1" : "c2", V[b] && (X = d.distanceToSquared(V[b]), E > X && (E = X, e = V, t = Z, g = b));
                        return E > z ? !1 : (B.activing.hlpair = e, B.activing.hltype = g, B.editing = {
                            type: "ctrlPoint",
                            pair: e,
                            pairId: t,
                            ctrlType: g,
                            direction: e[g].clone().sub(B.activing.point).normalize()
                        }, B._interactor.setCursor("crosshair"), !0)
                    }
                }
            }
        }, gr.prototype.startEdit = function (Y, c) {
            Y.startDragging(c);
            var n = this;
            n.highlight && "insertKnot" === n.highlight.type && (n.insertKnot(), n.gatherSingleTarget(n._interactor.gv, n.target), n.activing = null, n._checkEditRealPoint(n._interactor._getLogicalPoint(c)));
            var Q = n.highlight, j = U.Default.isCtrlDown(c);
            if (!Q) {
                var N = n._interactor.gv;
                if (!N.setFocus(c) || N._scrolling) return;
                return N.isPannable() && Kr(c) && !j && (n._pan = {tx: N.tx(), ty: N.ty()}), void 0
            }
            if ("changeRealPoint" === Q.type) {
                var K, t = n.activing ? n.activing.point : null, z = n.activing ? n.activing.selections : null;
                if (j && n.activing) t === Q.point ? (z ? (n.activing = {point: z[0]}, z.length > 1 && (z.splice(0, 1), n.activing.selections = z)) : n.activing = null, n.editing = null) : z && (K = z.indexOf(Q.point)) >= 0 ? (z.length > 1 ? z.splice(K, 1) : delete n.activing.selections, n.editing = null) : z ? (z.push(t), n.activing = {
                    point: Q.point,
                    selections: z
                }) : n.activing = {
                    point: Q.point,
                    selections: [t]
                }; else if (z) t === Q.point || ((K = z.indexOf(Q.point)) >= 0 ? (z.splice(K, 1, t), n.activing = {
                    point: Q.point,
                    selections: z
                }) : n.activing = {point: Q.point}); else {
                    var g;
                    t === Q.point && (g = n.activing.status), n.activing = {point: Q.point}, g && (n.activing.status = g)
                }
            }
        }, gr.prototype.insertKnot = function () {
            var g = this, D = g.highlight, f = g.screenInfo.curve;
            f.insertKnot(D.bezier, D.point.t), g._writeToShape()
        }, gr.prototype._writeToShape = function () {
            var O, N, u = this, m = u.screenInfo.curve, w = m.toHtShape(), v = w.points, V = [], I = w.segments,
                f = u._interactor.gv, s = u.target, G = u._getShapeMatrix().invert();
            s.getPosition();
            for (var D = 0, l = v.length; l > D; D++) O = v[D], N = Bn.toWorldPosition(f, O), N = G.apply(N), V.push(N);
            u.target._writing = !0, u.target.setSegments(I), u.target.setPoints(V, !0), delete u.target._writing
        }, gr.prototype._handlePanning = function (J) {
            var V = this, f = V._pan;
            if (f) {
                f.started = !0;
                var D = V._interactor, e = D.gv, S = D._lastClientPoint;
                e.setTranslate(f.tx + J.clientX - S.x, f.ty + J.clientY - S.y), V.gatherSingleTarget(D.gv, V.target), D._42()
            }
        }, gr.prototype.handleEdit = function (w, q) {
            var W = this, V = W.editing;
            if (!V || W._pan && W._pan.started) return W._handlePanning(q), void 0;
            W.editing.inEdit = !0;
            var y, h = W._interactor._getLogicalPoint(q), K = U.Default.isCtrlDown(q), d = U.Default.isShiftDown(q);
            if (W._guideInfo = null, "ctrlPoint" === V.type && d) {
                var S = W.editing.direction.clone();
                y = W.activing.point;
                var C = S.dot(h.clone().sub(y));
                h = S.setLength(C).add(y)
            } else {
                var S;
                if ("realPoint" === V.type && d) {
                    var D = W.editing.shiftGuide, H = D.point, m = Math.abs(h.x - H.x), B = Math.abs(h.y - H.y);
                    m > B && m > D.limit && "y" === D.dir && (D.dir = "x"), B > m && B > D.limit && "x" === D.dir && (D.dir = "y"), S = D.dir, "x" === S ? (h.y = H.y, D.limit = Math.max(D.limit, m)) : "y" === S && (h.x = H.x, D.limit = Math.max(D.limit, B))
                }
                if (!K) {
                    var k = W._guidingToEdit(h, S),
                        X = "realPoint" === V.type ? W._interactor.gridGuide.findClosest(h, S, !0) : null, f = 1 / 0,
                        _ = 1 / 0;
                    X && (X.x && (f = X.x), X.y && (_ = X.y));
                    var x = !1;
                    k && (k.xList && (Math.abs(k.x) <= Math.abs(f) ? (x = !0, f = k.x) : delete k.xList), k.yList && (Math.abs(k.y) <= Math.abs(_) ? (x = !0, _ = k.y) : delete k.yList), x && (W._guideInfo = k)), isFinite(f) && (h.x += f), isFinite(_) && (h.y += _), x && (k.v = h)
                }
            }
            var I = W.screenInfo.curve;
            if ("realPoint" === V.type) {
                y = V.point, I.moveRealPoint(y, h), V.point = h, W.highlight.point = h;
                var O = W.activing.status, N = W.activing.selections;
                if (W.activing = {point: h, status: O}, N) {
                    var Q = h.clone().sub(y), e = 0;
                    N.forEach(function (g) {
                        var i = g.clone().add(Q);
                        I.moveRealPoint(g, i), N[e++] = i
                    }), W.activing.selections = N
                }
            } else if ("ctrlPoint" === V.type) {
                var g = W.activing, R = g.pairs, F = R[V.pairId];
                I.moveCtrlPoint(F, h, V.ctrlType);
                var E = g.status, P = Bn.Curve.PointType;
                if ((E === P.Mirrored || E === P.Asymmetric) && F.c1 && F.c2) {
                    var y = new Bn.Math.Vector2(g.point), o = "c1" === V.ctrlType ? "c2" : "c1";
                    if (E === Bn.Curve.PointType.Mirrored) I.moveCtrlPoint(F, y.clone().multiplyScalar(2).sub(h), o); else if (E === P.Asymmetric) {
                        var C = F[o].clone().sub(y).length(), G = y.clone().sub(F[V.ctrlType]).setLength(C).add(y);
                        isNaN(G.x) || I.moveCtrlPoint(F, G, o)
                    }
                }
            }
            var J = U.Default.getLogicalPoint(q, W._interactor._canvas);
            J.x += Bn.Icons.TipShiftX, J.y += Bn.Icons.TipShiftY;
            var M = Bn.toWorldPosition(w, h), a = "" + Bn.toFixed(M.x) + ", " + Bn.toFixed(M.y);
            W.tipInfo = {helperPos: J, text: a, size: a.length}, W._writeToShape()
        }, gr.prototype._guidingToEdit = function (N, l) {
            var y, R, O = this;
            if (y = O.screenInfo.curve) {
                R = y._curves;
                var x, E, o, w, a, v, H, M, q = 1 / 0, f = 1 / 0, _ = [];
                for (O.editing && "realPoint" === O.editing.type && (M = O.editing.point), a = 0, v = 2 * R.length; v > a; a++) H = R[Math.floor(a / 2)][a % 2 ? "_p4" : "_p1"], _.indexOf(H) >= 0 || (_.push(H), M && M === H || (o = H.x - N.x, w = H.y - N.y, Math.abs(o) < Math.abs(q) ? (q = o, x = [H]) : o === q && x.push(H), Math.abs(w) < Math.abs(f) ? (f = w, E = [H]) : w === f && E.push(H)));
                var T = O._interactor.getStyle("smartGuideSensitivity");
                if ((Math.abs(q) > T || "y" === l) && (x = null), (Math.abs(f) > T || "x" === l) && (E = null), x || E) {
                    var k = !1, m = {};
                    if (x && (k = !0, m.xList = x, m.x = q), E && (k = !0, m.yList = E, m.y = f), k) return m
                }
            }
        }, gr.prototype._46O = function () {
            var W = this;
            W.editing = null, W._guideInfo = null, W._pan = null, W.tipInfo = null
        }, gr.prototype.handleDelete = function () {
            var S = this;
            if (S.activing && S.screenInfo) {
                var H = S.screenInfo.curve;
                H.deleteRealPoint(S.activing.point), S.activing.selections && S.activing.selections.forEach(function (x) {
                    H.deleteRealPoint(x)
                }), delete S.activing, delete S.editing, delete S.tipInfo, delete S._pan, S._writeToShape(), S._interactor.fp("deleteShapePoint", !1, !0)
            }
        }, gr.prototype.handleDoubleClick = function ($) {
            var h = this, C = h._interactor._getLogicalPoint($);
            if (h.screenInfo && h._checkEditRealPoint(C)) {
                var u = h.calcCurrentSelectintStatus(), L = Bn.Curve.PointType;
                return u = u === L.Mirrored ? L.Straight : L.Mirrored, h.setCurrentSelectionStatus(u), h._interactor._42(), !0
            }
        }, gr.prototype._drawHighlight = function (S) {
            var k = this, I = k.highlight;
            if (I) {
                var w = I.bezier, d = k._interactor;
                w && Bn.Icons.DrawIcon(d, S, Bn.Icons.ShapeHighlightCurve, [w._p1.x, w._p1.y, w._p2.x, w._p2.y, w._p3.x, w._p3.y, w._p4.x, w._p4.y]);
                var J = I.point;
                J && "insertKnot" === I.type && Bn.Icons.DrawIcon(d, S, Bn.Icons.ShapeHighlighPoint, J)
            }
        }, gr.prototype._drawGuide = function (w) {
            var v = this, y = v._guideInfo;
            if (y) {
                var I, Q, O, m, x = y.v;
                for (I = 0; 2 > I; I++) if (m = 0 === I ? y.xList : y.yList) for (Q = 0, O = m.length; O > Q; Q++) Bn.Icons.DrawIcon(v._interactor, w, Bn.Icons.ShapeGuideLine, [x.x, x.y, m[Q].x, m[Q].y])
            }
        }, gr.prototype._drawCurrentPoint = function (W) {
            var R = this;
            if (R.activing) {
                var V = R.activing, d = R.calcCurrentSelectintStatus(), N = R._interactor;
                if (d !== Bn.Curve.PointType.Straight) {
                    var u = V.pairs, q = V.hlpair, b = V.hltype, Q = V.selections;
                    if (u && !Q) {
                        var C, M, p;
                        for (M = 0, p = u.length; p > M; M++) C = u[M], M === q && C[b] ? Bn.Icons.DrawIcon(N, W, Bn.Icons.ShapeActivingCtrl, {
                            point: C.point,
                            c1: C.c1,
                            c2: C.c2,
                            hl: b
                        }) : Bn.Icons.DrawIcon(N, W, Bn.Icons.ShapeActivingCtrl, C)
                    }
                }
                Bn.Icons.DrawIcon(N, W, Bn.Icons.ShapeHighlighRealPoint, R.activing.point), Q && Q.forEach(function (J) {
                    Bn.Icons.DrawIcon(N, W, Bn.Icons.ShapeHighlighRealPoint, J)
                })
            }
        }, gr.prototype.clear = function () {
            var c = this;
            c.editing = null, c._guideInfo = null, c.activing = null, c.highlight = null
        }, gr.prototype._42 = function (o) {
            var v = this;
            v.info = {}, v.editing || (v.screenInfo = null);
            var H = v._interactor;
            return H.editDetail ? v.target && v._interactor.gv.isSelected(v.target) && v._interactor.gv.isVisible(v.target) ? (v.gatherSingleTarget(H.gv, v.target), Bn.Icons.DrawIcon(H, o, Bn.Icons.ShapeBgCurve, v.screenInfo), v._drawHighlight(o), v._drawCurrentPoint(o), v._getRealPoint().forEach(function (D) {
                Bn.Icons.DrawIcon(H, o, Bn.Icons.ShapePoint, D)
            }), v._drawGuide(o), v.tipInfo && Bn.Icons.DrawIcon(H, o, Bn.Icons.TipHelper, v.tipInfo), void 0) : (H.editDetail = !1, v.clear(), void 0) : (v.clear(), void 0)
        }, gr.prototype._getRealPoint = function () {
            var r = this.screenInfo, e = r.P, $ = r.S, b = -1, d = [];
            return $.each(function (l) {
                var I = 1;
                if (3 === l) I = 2; else if (4 === l) I = 3; else if (5 === l) return;
                b += I, d.push({x: e[2 * b], y: e[2 * b + 1]})
            }), d
        };
        var wp = Bn.MoveHelper = function (W) {
            var d = this;
            d.catalog = "Move", d._interactor = W
        };
        wp.prototype = {}, wp.prototype.constructor = wp, wp.prototype.calcShift = function (c, q) {
            var B, E, L = this, x = L._interactor.gv, P = x.lp(q);
            if ("beginMove" === c && L._gatherGridInfo(P), B = L._target) {
                var V = B.downPosition;
                if (V) {
                    var T = L._interactor.getStyle("moveSensitivity") / x._zoom;
                    if (V.distanceTo(P) < T) return {x: 0, y: 0};
                    delete B.downPosition
                }
                var d;
                E = U.Default.isShiftDown(q), E && (P = L._dealShiftDown(P), d = B.shiftGuide.dir);
                var Z, I = B.rawPos = {x: B.pos.x + P.x - B.lp.x, y: B.pos.y + P.y - B.lp.y};
                if (U.Default.isCtrlDown(q)) {
                    if (Z = L._calcShiftByAddon(), L._target.node instanceof Bn.Group) {
                        var Y = L._target.node;
                        Y._position.x += Z.x, Y._position.y += Z.y
                    }
                    return Z
                }
                for (var H, J = B.x + I.x, S = B.y + I.y, a = {x: J, y: S}, t = {
                    x: J + B.w / 2,
                    y: S + B.h / 2
                }, O = {
                    x: J + B.w,
                    y: S + B.h
                }, Q = L._interactor.rectGuide, o = L._interactor.gridGuide, u = [Q.findClosest(a, d), Q.findClosest(t, d), Q.findClosest(O, d), o.findClosest(a, d), o.findClosest(t, d), o.findClosest(O, d)], l = 1 / 0, e = 1 / 0, f = 0, w = u.length; w > f; f++) H = u[f], H && (J = H.x, S = H.y, isFinite(J) && Math.abs(J) < Math.abs(l) && (l = J), isFinite(S) && Math.abs(S) < Math.abs(e) && (e = S));
                if (isFinite(l) || (l = 0), isFinite(e) || (e = 0), Z = L._calcShiftByAddon(l, e), L._target.node instanceof Bn.Group) {
                    var Y = L._target.node;
                    Y._position.x += Z.x, Y._position.y += Z.y
                }
                var C = B.node, N = C instanceof U.Group && C.isExpanded();
                if (!N) {
                    var K = I.x + l, s = I.y + e;
                    L._interactor.rectGuide.gatherLines({node: C, x: B.x + K, y: B.y + s, w: B.w, h: B.h}, d)
                }
                return Z
            }
        }, wp.prototype._calcShiftByAddon = function (x, o) {
            var M = this._target, k = M.rawPos, B = M.node.getPosition();
            return x = x || 0, o = o || 0, {x: k.x - B.x + x, y: k.y - B.y + o}
        }, wp.prototype._dealShiftDown = function (H) {
            var X = this, Y = X._target.shiftGuide, L = X._target.lp, z = Math.abs(H.x - L.x), T = Math.abs(H.y - L.y);
            z > T && z > Y.limit && "y" === Y.dir && (Y.dir = "x"), T > z && T > Y.limit && "x" === Y.dir && (Y.dir = "y");
            var W = Y.dir;
            return "x" === W ? (H.y = L.y, Y.limit = Math.max(Y.limit, z)) : "y" === W && (H.x = L.x, Y.limit = Math.max(Y.limit, T)), H
        }, wp.prototype._gatherGridInfo = function ($) {
            var q, m = this, f = m._interactor, K = f._getValidSelection();
            if (1 === K.length) {
                if (q = K[0], !q.getRect) return m._target = null, void 0
            } else if (q = Bn.Group.findOrCreateGroup(K), !q) return m._target = null, void 0;
            var p = q.getPosition(), L = q.getRect();
            m._target = {
                node: q,
                x: L.x - p.x,
                y: L.y - p.y,
                w: L.width,
                h: L.height,
                lp: {x: $.x, y: $.y},
                pos: {x: p.x, y: p.y},
                shiftGuide: {dir: "x", limit: 0},
                downPosition: new Bn.Math.Vector2($)
            }, f.rectGuide.gatherRects()
        }, wp.prototype.clear = function () {
            var x = this;
            x._interactor.rectGuide.clear(), x._interactor._42()
        };
        var hr = "directional", $f = "point", Ce = "spot", hg = "light.color";
        Cf(N, {
            graph3dViewAttributes: t,
            graph3dViewFirstPersonMode: !1,
            graph3dViewMouseRoamable: !0,
            graph3dViewMoveStep: 15,
            graph3dViewRotateStep: P / 60,
            graph3dViewPannable: !0,
            graph3dViewRotatable: !0,
            graph3dViewWalkable: !0,
            graph3dViewResettable: !0,
            graph3dViewZoomable: !0,
            graph3dViewRectSelectable: !0,
            graph3dViewRectSelectBackground: ke,
            graph3dViewGridVisible: !1,
            graph3dViewGridSize: 50,
            graph3dViewGridGap: 50,
            graph3dViewGridColor: [.4, .75, .85, 1],
            graph3dViewOriginAxisVisible: !1,
            graph3dViewCenterAxisVisible: !1,
            graph3dViewAxisXColor: [1, 0, 0, 1],
            graph3dViewAxisYColor: [0, 1, 0, 1],
            graph3dViewAxisZColor: [0, 0, 1, 1],
            graph3dViewEditSizeColor: [1, 1, 0, 1],
            graph3dViewOrtho: !1,
            graph3dViewOrthoWidth: 2e3,
            graph3dViewFovy: P / 4,
            graph3dViewNear: 10,
            graph3dViewFar: 1e4,
            graph3dViewEye: [0, 300, 1e3],
            graph3dViewCenter: [0, 0, 0],
            graph3dViewUp: [0, 1, -1e-7],
            graph3dViewHeadlightRange: 0,
            graph3dViewHeadlightColor: [1, 1, 1, 1],
            graph3dViewHeadlightIntensity: 1,
            graph3dViewHeadlightDisabled: !1,
            graph3dViewFogDisabled: !0,
            graph3dViewFogColor: "white",
            graph3dViewFogNear: 1,
            graph3dViewFogFar: 2e3,
            graph3dViewDashDisabled: !0,
            graph3dViewBatchBlendDisabled: !0,
            graph3dViewBatchBrightnessDisabled: !0,
            graph3dViewBatchColorDisabled: !1,
            setShape3dModel: function (w, d) {
                xk[w] = d
            },
            getShape3dModel: function (B) {
                return xk[B]
            },
            createMatrix: function (F, L) {
                od(F) || (F = [F]);
                for (var u = F.length - 1; u >= 0; u--) {
                    var m = F[u];
                    L = As(m.mat, m.s3, m.r3, m.rotationMode, m.t3, L)
                }
                return L
            },
            transformVec: function (R, j) {
                return hd(R, j)
            },
            createBoxModel: function () {
                return {vs: Rc, ns: xl, uv: mg, is: Ld}
            },
            createRoundRectModel: function (n, q) {
                return Jo.roundRect(n, q)
            },
            createStarModel: function (z, m) {
                return Jo.star(z, m)
            },
            createRectModel: function (u, o) {
                return Jo.rect(u, o)
            },
            createTriangleModel: function (y, E) {
                return Jo.triangle(y, E)
            },
            createRightTriangleModel: function (o, X) {
                return Jo.rightTriangle(o, X)
            },
            createParallelogramModel: function (E, _) {
                return Jo.parallelogram(E, _)
            },
            createTrapezoidModel: function (n, j) {
                return Jo.trapezoid(n, j)
            },
            createSmoothSphereModel: function (p, h, T, F, D, H, r) {
                return Qi(new Hm(p, h, T, F, D, H, r))
            },
            createSphereModel: function (W, O, C, M, w, Y) {
                return W ? Io(W, O, C, M, w, Y) : N.createSmoothSphereModel()
            },
            createSmoothConeModel: function (h, H, A, S, I) {
                return lj(h, H, A, S, I)
            },
            createConeModel: function (V, a, J, I, E, Y) {
                return V ? lo(V, a, J, I, E, Y) : lj(Y)
            },
            createSmoothCylinderModel: function (a, $, l, A, P, X, U, m) {
                return Qi(new Tb(a, $, l, A, P, X, U, m))
            },
            createCylinderModel: function (K, H, Y, h, t, I, f) {
                return K ? Nh(K, H, Y, h, t, I, f) : xp(I, f)
            },
            createSmoothTorusModel: function (b, g, p, E, n, e) {
                return Qi(new On(b, g, p, E, n, e))
            },
            createTorusModel: function (E, r, k, P, h, U, X) {
                return E ? Qg(E, r, k, P, h, U, X) : rf(U, X)
            },
            createExtrusionModel: function (b, g, t, s, n, P, N, W) {
                return jr(b, g, t, s, n, P, N, W)
            },
            createSmoothRingModel: function (U, h, W, u, J, s) {
                for (var q = [], k = 0; k < U.length - 1; k += 2) q.push({x: U[k], y: U[k + 1]});
                for (U = ms(q, h, W)[0], q = [], k = 0; k < U.length; k++) {
                    var I = U[k];
                    q.push(new xi(I.x, 0, I.y))
                }
                return Qi(new yq(q, s, u, J))
            },
            createTextGeometry: function ($, V) {
                return Qi(new kq($, V))
            },
            loadFontFace: function ($, P) {
                N.xhrLoad($, function (e) {
                    if (!e) return P();
                    var Y;
                    try {
                        Y = JSON.parse(e)
                    } catch (s) {
                        Y = JSON.parse(e.substring(65, e.length - 2))
                    }
                    bc.loadFace(Y), P && P(Y.familyName.toLowerCase())
                }, P ? null : {sync: !0})
            },
            createRingModel: function (S, n, q, a, L, O, j, E, d, J) {
                for (var p = [], r = 0; r < S.length - 1; r += 2) p.push({x: S[r], y: S[r + 1]});
                O = O || N.shapeSide, j = j || 0, E = E || O;
                var Z, c, A, K, b, R, x, D, _, G, r, C, v, U, k, f, s, X, W = [], z = [], u = d ? [] : t,
                    B = d ? [] : t, h = J ? [] : t, g = J ? [] : t, $ = a ? [] : t, y = a ? [] : t, o = L ? [] : t,
                    F = L ? [] : t, S = ms(p, n, q), Q = ul(S), i = 0, Y = 2 * Math.PI / O;
                return S.forEach(function (V) {
                    if (A = V.length, A > 1) {
                        if (K = V[0], a) for (R = K.x, D = K.y, r = j; E > r; r++) C = r + 1, v = r * Y, U = C * Y, k = m(v), f = H(v), s = m(U), X = H(U), $.push(k * R, D, -f * R, s * R, D, -X * R, 0, D, 0), y.push(.5 - .5 * k, .5 - .5 * f, .5 - .5 * s, .5 - .5 * X, .5, .5);
                        for (G = 0; A > G; G++) {
                            for (b = V[G], R = K.x, x = b.x, D = K.y, _ = b.y, Z = i / Q, i += Lb(K, b), c = i / Q, r = j; E > r; r++) C = r + 1, v = r * Y, U = C * Y, k = m(v), f = H(v), s = m(U), X = H(U), W.push(k * x, _, -f * x, s * x, _, -X * x, k * R, D, -f * R, s * x, _, -X * x, s * R, D, -X * R, k * R, D, -f * R), z.push(r / O, c, C / O, c, r / O, Z, C / O, c, C / O, Z, r / O, Z), d && r === j && (u.push(0, D, 0, 0, _, 0, k * x, _, -f * x, k * x, _, -f * x, k * R, D, -f * R, 0, D, 0), B.push(0, .5 - D, 0, .5 - _, 2 * x, .5 - _, 2 * x, .5 - _, 2 * R, .5 - D, 0, .5 - D)), J && C === E && (h.push(0, D, 0, s * x, _, -X * x, 0, _, 0, s * x, _, -X * x, 0, D, 0, s * R, D, -X * R), g.push(1, .5 - D, 1 - 2 * x, .5 - _, 1, .5 - _, 1 - 2 * x, .5 - _, 1, .5 - D, 1 - 2 * R, .5 - D));
                            K = b
                        }
                        if (L) for (R = K.x, D = K.y, r = j; E > r; r++) C = r + 1, v = r * Y, U = C * Y, k = m(v), f = H(v), s = m(U), X = H(U), o.push(s * R, D, -X * R, k * R, D, -f * R, 0, D, 0), F.push(.5 - .5 * s, .5 + .5 * X, .5 - .5 * k, .5 + .5 * f, .5, .5)
                    }
                }), {
                    vs: W,
                    uv: z,
                    bottom_vs: o,
                    bottom_uv: F,
                    top_vs: $,
                    top_uv: y,
                    from_vs: u,
                    from_uv: B,
                    to_vs: h,
                    to_uv: g
                }
            }
        }, !0), Cf(E, {
            "3d.move.mode": f,
            "3d.selectable": !0,
            "3d.visible": !0,
            "3d.movable": !0,
            "3d.editable": !0,
            "shape.border.gradient.color": f,
            "edge.gradient.color": f,
            "edge.source.t3": f,
            "edge.target.t3": f,
            "light.type": $f,
            "light.center": [0, 0, 0],
            "light.color": [1, 1, 1, 1],
            "light.disabled": !1,
            "light.angle": P / 4,
            "light.range": 0,
            "light.exponent": 1,
            "light.intensity": 1,
            "wf.visible": !1,
            "wf.width": 1,
            "wf.color": vb,
            "wf.short": !1,
            "wf.mat": f,
            batch: f,
            "transparent.mask": !1,
            brightness: f,
            "select.brightness": .7,
            "repeat.uv.length": f,
            "label.face": Fe,
            "label.t3": f,
            "label.r3": f,
            "label.texture.scale": 2,
            "label.rotationMode": Am,
            "label.light": !1,
            "label.blend": f,
            "label.reverse.flip": !1,
            "label.reverse.color": yb,
            "label.reverse.cull": !1,
            "label.transparent": !1,
            "label.autorotate": !1,
            "label2.face": Fe,
            "label2.t3": f,
            "label2.r3": f,
            "label2.texture.scale": 2,
            "label2.rotationMode": Am,
            "label2.light": !1,
            "label2.blend": f,
            "label2.reverse.flip": !1,
            "label2.reverse.color": yb,
            "label2.reverse.cull": !1,
            "label2.transparent": !1,
            "label2.autorotate": !1,
            "note.face": Fe,
            "note.t3": f,
            "note.r3": f,
            "note.texture.scale": 2,
            "note.rotationMode": Am,
            "note.light": !1,
            "note.blend": f,
            "note.reverse.flip": !1,
            "note.reverse.color": yb,
            "note.reverse.cull": !1,
            "note.transparent": !1,
            "note.autorotate": !1,
            "note2.face": Fe,
            "note2.t3": f,
            "note2.r3": f,
            "note2.texture.scale": 2,
            "note2.rotationMode": Am,
            "note2.light": !1,
            "note2.blend": f,
            "note2.reverse.flip": !1,
            "note2.reverse.color": yb,
            "note2.reverse.cull": !1,
            "note2.transparent": !1,
            "note2.autorotate": !1,
            shape3d: f,
            "shape3d.color": qq,
            "shape3d.top.color": f,
            "shape3d.bottom.color": f,
            "shape3d.from.color": f,
            "shape3d.to.color": f,
            "shape3d.image": f,
            "shape3d.top.image": f,
            "shape3d.bottom.image": f,
            "shape3d.from.image": f,
            "shape3d.to.image": f,
            "shape3d.light": !0,
            "shape3d.side": 0,
            "shape3d.side.from": f,
            "shape3d.side.to": f,
            "shape3d.visible": !0,
            "shape3d.from.visible": !0,
            "shape3d.to.visible": !0,
            "shape3d.top.visible": !0,
            "shape3d.bottom.visible": !0,
            "shape3d.torus.radius": .17,
            "shape3d.resolution": 0,
            "shape3d.blend": f,
            "shape3d.opacity": f,
            "shape3d.reverse.flip": !1,
            "shape3d.reverse.color": yb,
            "shape3d.reverse.cull": !1,
            "shape3d.transparent": !1,
            "shape3d.uv.offset": f,
            "shape3d.uv.scale": f,
            "shape3d.top.uv.offset": f,
            "shape3d.top.uv.scale": f,
            "shape3d.bottom.uv.offset": f,
            "shape3d.bottom.uv.scale": f,
            "shape3d.from.uv.offset": f,
            "shape3d.from.uv.scale": f,
            "shape3d.to.uv.offset": f,
            "shape3d.to.uv.scale": f,
            "shape3d.top.cap": f,
            "shape3d.bottom.cap": f,
            "shape3d.start.angle": 0,
            "shape3d.sweep.angle": n,
            "shape3d.discard.selectable": !0,
            "shape3d.top.discard.selectable": !0,
            "shape3d.bottom.discard.selectable": !0,
            "shape3d.from.discard.selectable": !0,
            "shape3d.to.discard.selectable": !0,
            "shape3d.scaleable": !0,
            "all.light": !0,
            "all.visible": !0,
            "all.color": qq,
            "all.image": f,
            "all.blend": f,
            "all.opacity": f,
            "all.reverse.flip": !1,
            "all.reverse.color": yb,
            "all.reverse.cull": !1,
            "all.transparent": !1,
            "all.uv": f,
            "all.uv.offset": f,
            "all.uv.scale": f,
            "all.discard.selectable": !0,
            mat: f,
            "left.mat": f,
            "right.mat": f,
            "top.mat": f,
            "bottom.mat": f,
            "front.mat": f,
            "back.mat": f
        }, !0);
        var xs, Gp = !1, vl = [0, 0, 0, 1 / 255], Jj = {
                left: [1 / 255, 0, 0, 1],
                right: [2 / 255, 0, 0, 1],
                top: [3 / 255, 0, 0, 1],
                bottom: [4 / 255, 0, 0, 1],
                front: [5 / 255, 0, 0, 1],
                back: [6 / 255, 0, 0, 1],
                m: {1: ur, 2: Rl, 3: jh, 4: Af, 5: Fe, 6: ks}
            }, nn = function (y, O, o, l) {
                if (O.getFaceVisible(y, o)) {
                    Wp(O, Ko(y, O.getFaceMat(y, o) || O.getMat(y)));
                    var u = O._26I;
                    O.getFaceReverseCull(y, o) ? u.enable(u.CULL_FACE) : u.disable(u.CULL_FACE), Wl(u, O._prg.uFixPickReverseColor, Jj[o]), hl(u), Vo(u, l, 6), jo(u), Lo(O)
                }
            }, rc = function (t) {
                return t instanceof Cq
            }, _c = function (U) {
                return [U.x, U.e || 0, U.y]
            }, Gr = function (q, _, G) {
                for (var _ = Kf(_), H = _[0], c = _[1], Z = _[2]; G--;) q.push(H, c, Z)
            }, po = function (H, R, U) {
                for (var R = Kf(R), d = R[0], _ = R[1], j = R[2], m = R[3]; U--;) H.push(d, _, j, m)
            }, Bs = function (v, c, B) {
                if (c) for (var P, G, J, i = c[0], K = c[1], V = c[2], d = c[4], g = c[5], p = c[6], O = c[8], S = c[9], D = c[10], h = c[12], j = c[13], l = c[14], $ = B.length, k = 0, k = 0; $ > k; k += 3) P = B[k], G = B[k + 1], J = B[k + 2], v.push(i * P + d * G + O * J + h, K * P + g * G + S * J + j, V * P + p * G + D * J + l); else Kd(v, B)
            }, Fd = function (c, Q) {
                var B = Q.s("light.intensity"), W = Kf(Q.s(hg)), T = W[0], X = W[1], Z = W[2];
                1 !== B && (T *= B, X *= B, Z *= B), c.push(T, X, Z, Q.s("light.disabled") ? 1 : 0)
            }, zl = function (h, $, l) {
                Wl($, l.uHeadlightRange, h._headlightRange);
                var V = h._headlightIntensity, s = Kf(h._headlightColor);
                1 !== V && (s = [s[0] * V, s[1] * V, s[2] * V]), Wl($, l.uHeadlightColor, [s[0], s[1], s[2], h._headlightDisabled ? 1 : 0]);
                var F = h._59O, y = h._spots, g = h._dirs;
                if (F.length) {
                    var H = [], C = [], e = [];
                    F.forEach(function (I) {
                        Fd(H, I), Kd(C, I.p3()), e.push(I.s("light.range"))
                    }), $.uniform4fv(l.uPointColor, H), $.uniform1fv(l.uPointRange, e), $.uniform3fv(l.uPointPosition, C)
                }
                if (y.length) {
                    var U = [], M = [], W = [], A = [], i = [], Z = [];
                    y.forEach(function (h) {
                        Fd(U, h), Kd(M, h.p3()), Kd(W, h.s("light.center")), A.push(h.s("light.range")), i.push(m(h.s("light.angle") / 2)), Z.push(h.s("light.exponent"))
                    }), $.uniform4fv(l.uSpotColor, U), $.uniform1fv(l.uSpotRange, A), $.uniform1fv(l.uSpotAngle, i), $.uniform1fv(l.uSpotExponent, Z), $.uniform3fv(l.uSpotPosition, M), $.uniform3fv(l.uSpotCenter, W)
                }
                if (g.length) {
                    var N = [], T = [];
                    g.forEach(function (R) {
                        Fd(N, R), Kd(T, R.p3())
                    }), $.uniform4fv(l.uDirColor, N), $.uniform3fv(l.uDirPosition, T)
                }
            }, lr = function (w) {
                return w > 0 && 0 === (w - 1 & w)
            }, xo = function (p) {
                return p = K(0, _(P, p)), p = K(Ej, _(P - Ej, p))
            }, am = function () {
                return .05 + T() / 2
            }, Bp = function (y, T, W, Z) {
                var e, i = y.getEye();
                return y.isOrtho() ? (e = Uk(y.getCenter(), i), e[0] += Z[0], e[1] += Z[1], e[2] += Z[2]) : e = i, bg(T, W, Z, e)
            }, bg = function (X, m, N, h) {
                var y = ek(X, m), E = Uk(h, N, !0), F = ek(E, m);
                if (G(F) < Ej) return t;
                var o = (y - ek(N, m)) / F;
                return [N[0] + E[0] * o, N[1] + E[1] * o, N[2] + E[2] * o]
            }, Zq = function (l, J) {
                return {x: 2 * l.x - J.x, y: 2 * l.y - J.y}
            }, Ng = function (R, D, f, b) {
                var i, B;
                if (!R) return i = o(D.y - f.y, f.x - D.x), {x: D.x + b * H(i), y: D.y + b * m(i)};
                if (!f) return i = o(R.y - D.y, D.x - R.x), {x: D.x + b * H(i), y: D.y + b * m(i)};
                var P = Uk([R.x, R.y, 0], [D.x, D.y, 0], !0), A = Uk([f.x, f.y, 0], [D.x, D.y, 0], !0),
                    e = -(P[0] + A[0]) / 2, V = -(P[1] + A[1]) / 2, h = g(e * e + V * V);
                if (Ej > h) return i = o(R.y - D.y, D.x - R.x), {x: D.x + b * H(i), y: D.y + b * m(i)};
                var j = R.x - D.x, O = R.y - D.y, z = f.x - D.x, S = f.y - D.y,
                    k = g(Math.min(j * j + O * O, z * z + S * S));
                return i = u(ek(P, A)) / 2, B = P[1] * A[0] - P[0] * A[1] > 0 ? -1 : 1, e /= h, V /= h, h = Math.min(b / H(i), k / m(i)), {
                    x: D.x + B * h * e,
                    y: D.y + B * h * V
                }
            }, Vl = function (F) {
                var m = F[1], n = F[2], R = F[3], Q = F[6], y = F[7], p = F[11];
                F[1] = F[4], F[2] = F[8], F[3] = F[12], F[4] = m, F[6] = F[9], F[7] = F[13], F[8] = n, F[9] = Q, F[11] = F[14], F[12] = R, F[13] = y, F[14] = p
            }, hj = function (h) {
                var G = h[0], L = h[1], T = h[2], l = h[3], W = h[4], f = h[5], u = h[6], r = h[7], i = h[8], k = h[9],
                    o = h[10], S = h[11], I = h[12], D = h[13], j = h[14], E = h[15], w = G * f - L * W, U = G * u - T * W,
                    s = G * r - l * W, R = L * u - T * f, d = L * r - l * f, O = T * r - l * u, B = i * D - k * I,
                    N = i * j - o * I, F = i * E - S * I, C = k * j - o * D, n = k * E - S * D, Y = o * E - S * j,
                    J = w * Y - U * n + s * C + R * F - d * N + O * B;
                return J ? (J = 1 / J, h[0] = (f * Y - u * n + r * C) * J, h[1] = (T * n - L * Y - l * C) * J, h[2] = (D * O - j * d + E * R) * J, h[3] = (o * d - k * O - S * R) * J, h[4] = (u * F - W * Y - r * N) * J, h[5] = (G * Y - T * F + l * N) * J, h[6] = (j * s - I * O - E * U) * J, h[7] = (i * O - o * s + S * U) * J, h[8] = (W * n - f * F + r * B) * J, h[9] = (L * F - G * n - l * B) * J, h[10] = (I * d - D * s + E * w) * J, h[11] = (k * s - i * d - S * w) * J, h[12] = (f * N - W * C - u * B) * J, h[13] = (G * C - L * N + T * B) * J, h[14] = (D * U - I * R - j * w) * J, h[15] = (i * R - k * U + o * w) * J, void 0) : t
            }, Ee = function (q, I) {
                if (I) {
                    var T = I[0], A = I[1], v = I[2];
                    q[12] = q[0] * T + q[4] * A + q[8] * v + q[12], q[13] = q[1] * T + q[5] * A + q[9] * v + q[13], q[14] = q[2] * T + q[6] * A + q[10] * v + q[14], q[15] = q[3] * T + q[7] * A + q[11] * v + q[15]
                }
            }, Nc = function (o, s) {
                if (s) {
                    var n = s[0], C = s[1], e = s[2];
                    o[0] = o[0] * n, o[1] = o[1] * n, o[2] = o[2] * n, o[3] = o[3] * n, o[4] = o[4] * C, o[5] = o[5] * C, o[6] = o[6] * C, o[7] = o[7] * C, o[8] = o[8] * e, o[9] = o[9] * e, o[10] = o[10] * e, o[11] = o[11] * e
                }
            }, Dd = function (h, c, p) {
                var U = c[0], n = c[1], f = c[2], Z = c[3], Y = c[4], r = c[5], E = c[6], j = c[7], d = c[8], g = c[9],
                    m = c[10], y = c[11], O = c[12], u = c[13], K = c[14], I = c[15], T = p[0], W = p[1], o = p[2],
                    H = p[3];
                return h[0] = T * U + W * Y + o * d + H * O, h[1] = T * n + W * r + o * g + H * u, h[2] = T * f + W * E + o * m + H * K, h[3] = T * Z + W * j + o * y + H * I, T = p[4], W = p[5], o = p[6], H = p[7], h[4] = T * U + W * Y + o * d + H * O, h[5] = T * n + W * r + o * g + H * u, h[6] = T * f + W * E + o * m + H * K, h[7] = T * Z + W * j + o * y + H * I, T = p[8], W = p[9], o = p[10], H = p[11], h[8] = T * U + W * Y + o * d + H * O, h[9] = T * n + W * r + o * g + H * u, h[10] = T * f + W * E + o * m + H * K, h[11] = T * Z + W * j + o * y + H * I, T = p[12], W = p[13], o = p[14], H = p[15], h[12] = T * U + W * Y + o * d + H * O, h[13] = T * n + W * r + o * g + H * u, h[14] = T * f + W * E + o * m + H * K, h[15] = T * Z + W * j + o * y + H * I, h
            }, hm = function (z, s, e, B) {
                var r, o, d, j, E, _, x, u, O, U, N = s[0], q = s[1], D = s[2], $ = B[0], K = B[1], y = B[2], m = e[0],
                    w = e[1], J = e[2];
                return G(N - m) < Ej && G(q - w) < Ej && G(D - J) < Ej ? ar(z) : (x = N - m, u = q - w, O = D - J, U = 1 / g(x * x + u * u + O * O), x *= U, u *= U, O *= U, r = K * O - y * u, o = y * x - $ * O, d = $ * u - K * x, U = g(r * r + o * o + d * d), U ? (U = 1 / U, r *= U, o *= U, d *= U) : (r = 0, o = 0, d = 0), j = u * d - O * o, E = O * r - x * d, _ = x * o - u * r, U = g(j * j + E * E + _ * _), U ? (U = 1 / U, j *= U, E *= U, _ *= U) : (j = 0, E = 0, _ = 0), z[0] = r, z[1] = j, z[2] = x, z[3] = 0, z[4] = o, z[5] = E, z[6] = u, z[7] = 0, z[8] = d, z[9] = _, z[10] = O, z[11] = 0, z[12] = -(r * N + o * q + d * D), z[13] = -(j * N + E * q + _ * D), z[14] = -(x * N + u * q + O * D), z[15] = 1, z)
            }, up = function (O, j, d, m, F) {
                var v = 1 / Q(j / 2), c = 1 / (m - F);
                return O[0] = v / d, O[1] = 0, O[2] = 0, O[3] = 0, O[4] = 0, O[5] = v, O[6] = 0, O[7] = 0, O[8] = 0, O[9] = 0, O[10] = (F + m) * c, O[11] = -1, O[12] = 0, O[13] = 0, O[14] = 2 * F * m * c, O[15] = 0, O
            }, Ed = function (x, F, X, K, k, z, t) {
                var r = 1 / (F - X), q = 1 / (K - k), W = 1 / (z - t);
                return x[0] = -2 * r, x[1] = 0, x[2] = 0, x[3] = 0, x[4] = 0, x[5] = -2 * q, x[6] = 0, x[7] = 0, x[8] = 0, x[9] = 0, x[10] = 2 * W, x[11] = 0, x[12] = (F + X) * r, x[13] = (k + K) * q, x[14] = (t + z) * W, x[15] = 1, x
            }, nk = function (l, D) {
                var U = D[0], x = D[1], m = D[2], i = D[3], O = U * U + x * x + m * m + i * i, b = O ? 1 / O : 0;
                return l[0] = -U * b, l[1] = -x * b, l[2] = -m * b, l[3] = i * b, l
            }, Xr = function (j, X) {
                var y = X[0] + X[5] + X[10], c = 0;
                return y > 0 ? (c = 2 * Math.sqrt(y + 1), j[3] = .25 * c, j[0] = (X[6] - X[9]) / c, j[1] = (X[8] - X[2]) / c, j[2] = (X[1] - X[4]) / c) : X[0] > X[5] & X[0] > X[10] ? (c = 2 * Math.sqrt(1 + X[0] - X[5] - X[10]), j[3] = (X[6] - X[9]) / c, j[0] = .25 * c, j[1] = (X[1] + X[4]) / c, j[2] = (X[8] + X[2]) / c) : X[5] > X[10] ? (c = 2 * Math.sqrt(1 + X[5] - X[0] - X[10]), j[3] = (X[8] - X[2]) / c, j[0] = (X[1] + X[4]) / c, j[1] = .25 * c, j[2] = (X[6] + X[9]) / c) : (c = 2 * Math.sqrt(1 + X[10] - X[0] - X[5]), j[3] = (X[1] - X[4]) / c, j[0] = (X[8] + X[2]) / c, j[1] = (X[6] + X[9]) / c, j[2] = .25 * c), j
            }, rk = function (L, o, t) {
                var l = o[0], E = o[1], h = o[2], H = o[3], x = l + l, N = E + E, k = h + h, m = l * x, e = l * N,
                    U = l * k, S = E * N, Z = E * k, i = h * k, s = H * x, n = H * N, G = H * k;
                return L[0] = 1 - (S + i), L[1] = e + G, L[2] = U - n, L[3] = 0, L[4] = e - G, L[5] = 1 - (m + i), L[6] = Z + s, L[7] = 0, L[8] = U + n, L[9] = Z - s, L[10] = 1 - (m + S), L[11] = 0, L[12] = t[0], L[13] = t[1], L[14] = t[2], L[15] = 1, L
            }, ge = function (E, G) {
                return hm(G ? G : Tq(), E._eye, E._center, E._up)
            }, rb = function (H) {
                var h = H.getAspect(), K = H._near, n = H._far, L = Tq();
                if (H._ortho) {
                    var Z = H._orthoWidth / 2, f = Z / h;
                    Ed(L, -Z, Z, -f, f, K, n)
                } else up(L, H._fovy, h, K, n);
                return L
            }, Se = function (E, G) {
                if (!E) return t;
                var F = 0, f = 1, Z = 2, H = [], l = 0, k = E.length, Q = k / 3;
                if (G) {
                    for (; k > l; l++) H[l] = 0;
                    for (l = 0; l < G.length; l += 3) {
                        var Y = [], U = [], w = [];
                        Y[F] = E[3 * G[l + 1] + F] - E[3 * G[l] + F], Y[f] = E[3 * G[l + 1] + f] - E[3 * G[l] + f], Y[Z] = E[3 * G[l + 1] + Z] - E[3 * G[l] + Z], U[F] = E[3 * G[l + 2] + F] - E[3 * G[l + 1] + F], U[f] = E[3 * G[l + 2] + f] - E[3 * G[l + 1] + f], U[Z] = E[3 * G[l + 2] + Z] - E[3 * G[l + 1] + Z], w[F] = Y[f] * U[Z] - Y[Z] * U[f], w[f] = Y[Z] * U[F] - Y[F] * U[Z], w[Z] = Y[F] * U[f] - Y[f] * U[F];
                        for (var B = 0; 3 > B; B++) H[3 * G[l + B] + F] += w[F], H[3 * G[l + B] + f] += w[f], H[3 * G[l + B] + Z] += w[Z]
                    }
                } else for (l = 0; Q > l; l += 3) {
                    var Y = [], U = [], w = [];
                    Y[F] = E[3 * (l + 1) + F] - E[3 * l + F], Y[f] = E[3 * (l + 1) + f] - E[3 * l + f], Y[Z] = E[3 * (l + 1) + Z] - E[3 * l + Z], U[F] = E[3 * (l + 2) + F] - E[3 * (l + 1) + F], U[f] = E[3 * (l + 2) + f] - E[3 * (l + 1) + f], U[Z] = E[3 * (l + 2) + Z] - E[3 * (l + 1) + Z], w[F] = Y[f] * U[Z] - Y[Z] * U[f], w[f] = Y[Z] * U[F] - Y[F] * U[Z], w[Z] = Y[F] * U[f] - Y[f] * U[F];
                    for (var B = 0; 3 > B; B++) H[3 * (l + B) + F] = w[F], H[3 * (l + B) + f] = w[f], H[3 * (l + B) + Z] = w[Z]
                }
                for (l = 0; k > l; l += 3) {
                    var O = [];
                    O[F] = H[l + F], O[f] = H[l + f], O[Z] = H[l + Z];
                    var p = g(O[F] * O[F] + O[f] * O[f] + O[Z] * O[Z]);
                    0 === p && (p = Ej), O[F] = O[F] / p, O[f] = O[f] / p, O[Z] = O[Z] / p, H[l + F] = O[F], H[l + f] = O[f], H[l + Z] = O[Z]
                }
                return new me(H)
            }, _h = function (J, m, n) {
                if (n || (n = J.createTexture()), m) {
                    var c = J.TEXTURE_2D, w = J.LINEAR, e = J.REPEAT, f = J.CLAMP_TO_EDGE, X = J.TEXTURE_MIN_FILTER;
                    Dp(J, n), J.texImage2D(c, 0, J.RGBA, J.RGBA, J.UNSIGNED_BYTE, m), pn(J, J.TEXTURE_MAG_FILTER, w), lr(m.width) && lr(m.height) ? (pn(J, J.TEXTURE_WRAP_S, e), pn(J, J.TEXTURE_WRAP_T, e), pn(J, X, J.LINEAR_MIPMAP_LINEAR), J.generateMipmap(c)) : (pn(J, J.TEXTURE_WRAP_S, f), pn(J, J.TEXTURE_WRAP_T, f), pn(J, X, w)), Dp(J, t)
                }
                return n
            }, Nb = function (o, Q) {
                var n = new Uint8Array(3);
                return Q = Q || o.createTexture(), Dp(o, Q), pn(o, o.TEXTURE_MIN_FILTER, o.LINEAR), o.texImage2D(o.TEXTURE_2D, 0, o.RGB, 1, 1, 0, o.RGB, o.UNSIGNED_BYTE, n), Q
            }, yh = function (u) {
                u._26I && u._prg && (u._26I.deleteProgram(u._prg), u._prg = t)
            }, pq = function (Z, B, S, n) {
                var b = Z.createShader(S);
                return Z.shaderSource(b, n), Z.compileShader(b), Z.attachShader(B, b), b
            }, tl = function (s) {
                return s.createBuffer()
            }, Dp = function (H, Z) {
                H.bindTexture(H.TEXTURE_2D, Z)
            }, yd = function (_, Y) {
                _.bindFramebuffer(_.FRAMEBUFFER, Y)
            }, pn = function (t, o, A) {
                t.texParameteri(t.TEXTURE_2D, o, A)
            }, qm = function (d, v) {
                if (v) {
                    var v = Kf(v);
                    d.clearColor(v[0], v[1], v[2], v[3])
                }
            }, bj = function (s, l) {
                Wl(s, l.uFix, !0), cd(s, l.aNormal)
            }, Kj = function (F, C) {
                Wl(F, C.uFix, !1), Bm(F, C.aNormal)
            }, sn = function (G, s, N, j, A, X, I, u) {
                G._picking || (N ? (Wl(G, s.uBlend, !0), Wl(G, s.uBlendColor, N)) : Wl(G, s.uBlend, !1), Wl(G, s.uLight, j == t ? !0 : j), cb(A) && 1 !== A && Wl(G, s.uPartOpacity, A), Wl(G, s.uReverseFlip, X == t ? !1 : X), Wl(G, s.uFixPickReverseColor, I || yb)), u ? G.enable(G.CULL_FACE) : G.disable(G.CULL_FACE)
            }, yo = function (H, U) {
                H._picking || Wl(H, U.uPartOpacity, 1)
            }, hl = function (U, k, H, e, w, y, b, T) {
                if (!H) return Dp(U, U._emptyTexture), void 0;
                Wl(U, k.uTexture, !0), Wl(U, k.uDiscardSelectable, To(e) ? e : !0), Bm(U, k.aUv), Hb(U, w, y, k.aUv, 2), U.activeTexture(U.TEXTURE0), Dp(U, H), U.uniform1i(k.uSampler, 0);
                var v = [0, 0, 1, 1];
                b && (v[0] = b[0], v[1] = b[1]), T && (v[2] = T[0], v[3] = T[1]), Wl(U, k.uOffsetScale, v)
            }, jo = function (Y, h, l) {
                Dp(Y, t), l && (cd(Y, h.aUv), Wl(Y, h.uTexture, !1))
            }, qf = function (j, n, H, a, A, f) {
                !H || W || L || j.lineWidth(H), a && !j._picking && Wl(j, n.uFixPickReverseColor, a), A && Hb(j, A, f, n.aPosition)
            }, cs = function (g, c, j, R) {
                xs && (R = g[xs]), g.drawArrays(R == t ? g.TRIANGLES : R, c, j)
            }, Vo = function (Y, B, G, F) {
                xs && (F = Y[xs]), Y.drawElements(F == t ? Y.TRIANGLES : F, G, Y.UNSIGNED_SHORT, B == t ? 0 : 2 * B)
            }, Hb = function (q, N, B, f, C) {
                var V = q.ARRAY_BUFFER;
                q.bindBuffer(V, N), B && q.bufferData(V, B, q.STATIC_DRAW), f != t && q.vertexAttribPointer(f, C ? C : 3, q.FLOAT, !1, 0, 0)
            }, zi = function (i, r, f) {
                var O = i.ELEMENT_ARRAY_BUFFER;
                i.bindBuffer(O, r), f && i.bufferData(O, f, i.STATIC_DRAW)
            }, Wl = function (X, O, Q) {
                if (Q != t && O != t) {
                    Q = Kf(Q);
                    var P = Q.length;
                    3 === P ? X.uniform3fv(O, Q) : 4 === P ? X.uniform4fv(O, Q) : 16 === P ? X.uniformMatrix4fv(O, !1, Q) : To(Q) ? X.uniform1i(O, Q ? 1 : 0) : 2 === P ? X.uniform2fv(O, Q) : X.uniform1f(O, Q)
                }
            }, Bm = function (E, A) {
                A != t && A >= 0 && E.enableVertexAttribArray(A)
            }, cd = function (j, l) {
                l != t && l >= 0 && j.disableVertexAttribArray(l)
            }, Lo = function (I, V) {
                var Q = I.getGL(), E = I._prg;
                I._7O = I._8O.pop(), V && (Wl(Q, E.uMVMatrix, I._7O), I._6O = V, Wl(Q, E.uNMatrix, V))
            }, $q = function (l, z) {
                return z || (z = Tq()), Zc(z, l), hj(z), Vl(z), z
            }, Wp = function (p, H) {
                var _ = p.getGL(), d = p._prg, W = p._7O;
                H && (p._8O.push(zn(W)), Dd(W, W, H)), Wl(_, d.uMVMatrix, W), Wl(_, d.uNMatrix, $q(W, p._6O))
            }, Fn = function (i, v, e, W, X, O) {
                if (e) {
                    if (W) {
                        var z = e.value++,
                            w = [(255 & z >> 24) / 255, (255 & z >> 16) / 255, (255 & z >> 8) / 255, (255 & z) / 255];
                        e[z] = {data: X, part: O}
                    } else w = vl;
                    return Wl(i, v.uFixPickReverseColor, w), w
                }
            }, Lc = function () {
                var A = {
                    center: function (w, O, A, d, C) {
                        var G = O[1] / 2, X = {x: -O[0] / 2, y: G, width: O[0], height: O[1]}, x = Ym(w, X, A);
                        return [x.x + d, 2 * G - x.y - C, am()]
                    }, front: function (f, e, m, E, P) {
                        var o = e[1] / 2, S = {x: -e[0] / 2, y: o, width: e[0], height: e[1]}, y = Ym(f, S, m);
                        return [y.x + E, 2 * o - y.y - P, e[2] / 2 + am()]
                    }, back: function (g, V, N, o, _) {
                        var j = V[0] / 2, q = V[1] / 2, k = {x: j, y: q, width: V[0], height: V[1]}, O = Ym(g, k, N);
                        return [2 * j - O.x - o, 2 * q - O.y - _, -V[2] / 2 - am()]
                    }, left: function (G, U, O, Q, a) {
                        var f = U[1] / 2, B = {x: -U[2] / 2, y: f, width: U[2], height: U[1]}, z = Ym(G, B, O);
                        return [-U[0] / 2 - am(), 2 * f - z.y - a, z.x + Q]
                    }, right: function (p, Y, I, B, i) {
                        var $ = Y[2] / 2, P = Y[1] / 2, y = {x: $, y: P, width: Y[2], height: Y[1]}, x = Ym(p, y, I);
                        return [Y[0] / 2 + am(), 2 * P - x.y - i, 2 * $ - x.x - B]
                    }, top: function (z, w, H, K, o) {
                        var e = {x: -w[0] / 2, y: -w[2] / 2, width: w[0], height: w[2]}, $ = Ym(z, e, H);
                        return [$.x + K, w[1] / 2 + am(), $.y + o]
                    }, bottom: function (d, A, P, W, Y) {
                        var O = A[2] / 2, s = {x: -A[0] / 2, y: O, width: A[0], height: A[2]}, r = Ym(d, s, P);
                        return [r.x + W, -A[1] / 2 - am(), 2 * O - r.y - Y]
                    }
                };
                return function (_, Q, C, I, X, v) {
                    return A[I](_, Q, C, X || 0, v || 0)
                }
            }(), ep = function (Y, O, r, $, d, X, e, G, z, E) {
                if (d && (O[0] += d[0], O[1] += d[1], O[2] += d[2]), Ee(Y, r), G) {
                    var j = Tq();
                    if (Sp(j, z, E), hd(O, j), Ee(Y, O), Y.auto = G, Y.pos = hd([0, 0, 0], Y), X) {
                        var K = Y.mat2 = Tq();
                        Sp(K, X, e)
                    }
                } else Sp(Y, z, E), Ee(Y, O), $ === ur ? vg(Y, -s) : $ === Rl ? vg(Y, s) : $ === jh ? Rp(Y, -s) : $ === Af ? Rp(Y, s) : $ === ks && vg(Y, P), Sp(Y, X, e);
                return Y
            }, Ib = function (i, U) {
                var w = U.auto, m = U.mat2, W = i.gv;
                if (w) {
                    var I, c = Tq(), o = [0, 0, 0, 0];
                    I = "string" == typeof w ? [w.indexOf("x") < 0 ? W._eye[0] : W._center[0], w.indexOf("y") < 0 ? W._eye[1] : W._center[1], w.indexOf("z") < 0 ? W._eye[2] : W._center[2]] : W._eye, Xr(o, hm(Tq(), I, W._center, W._up)), rk(c, nk(o, o), U.pos), m && Dd(c, c, m), Wp(W, c)
                } else Wp(W, U)
            }, Ec = function (X, H, _, E, c) {
                var W = X.s, s = X.gv, T = s.getGL(), h = s._prg, Y = s._buffer, i = s._1O;
                _h(T, jg, i), Ib(X, _), sn(T, h, W(H + ".blend"), W(H + ".light"), W(H + ".opacity"), W(H + ".reverse.flip"), W(H + ".reverse.color"), W(H + ".reverse.cull")), hl(T, h, i, c, Y.uv, uq), Hb(T, Y.vs, E, h.aPosition), Hb(T, Y.ns, De, h.aNormal), zi(T, Y.is, ad), Vo(T, 0, ad.length), jo(T, h, i), yo(T, h), Lo(s)
            }, br = function (y, v, Y) {
                var W = y.gv, A = y.data, M = y[v] = {
                    blend: W.getBodyColor(A) || W.getFaceBlend(A, v),
                    light: W.getFaceLight(A, v),
                    color: W.getFaceColor(A, v),
                    opacity: W.getFaceOpacity(A, v),
                    transparent: W.getFaceTransparent(A, v),
                    reverseFlip: W.getFaceReverseFlip(A, v),
                    reverseColor: W.getFaceReverseColor(A, v),
                    reverseCull: W.getFaceReverseCull(A, v),
                    texture: W.getFaceImage(A, v),
                    discardSelectable: W.getFaceDiscardSelectable(A, v)
                };
                if ("csg" !== v) {
                    M.uv = W.getFaceUv(A, v) || Y && Y[v + "Uv"], M.uvScale = W.getFaceUvScale(A, v) || Y && Y[v + "UvScale"], M.uvOffset = W.getFaceUvOffset(A, v) || Y && Y[v + "UvOffset"];
                    var j = W.getFaceMat(A, v);
                    j && (M.mat = Ko(A, j))
                }
                return M
            }, Lk = function (P, k, E, p, I) {
                if (p) {
                    if (!I(p.transparent)) return;
                    var z = P.data, h = P.gv, $ = h._buffer, w = h.getTexture(p.texture, z);
                    hl(k, E, w, p.discardSelectable, $.uv, p.tuv, p.uvOffset, p.uvScale), sn(k, E, p.blend, p.light, p.opacity, p.reverseFlip, p.reverseColor, p.reverseCull), Wl(k, E.uDiffuse, p.color), Hb(k, $.vs, p.vs, E.aPosition), Hb(k, $.ns, p.ns, E.aNormal), cs(k, 0, p.vs.length / 3), yo(k, E), jo(k, E, w)
                }
            }, so = function (d, m, g, J, i, R) {
                var Z, b, y, z, W, K, p, n, w, l, k, f = [J - m, i - g], Y = d ? d.length : 0;
                for (y = 0; Y > y; y++) {
                    for (z = 2, Z = d[y], W = Z[0], K = Z[1]; z + 1 < Z.length;) {
                        if (p = Z[z], n = Z[z + 1], b = tn(m, g, J, i, W, K, p, n, !0)) {
                            w = [p - W, n - K], l = Lb(w), w[0] /= l, w[1] /= l, l = ek(f, w), l = l > 0 ? R : -R, k = [w[0] * l, w[1] * l];
                            break
                        }
                        W = p, K = n, z += 2
                    }
                    if (k) break
                }
                if (k) for (J = m + k[0], i = g + k[1], y = 0; Y > y; y++) for (z = 2, Z = d[y], W = Z[0], K = Z[1]; z + 1 < Z.length;) {
                    if (p = Z[z], n = Z[z + 1], b = tn(m, g, J, i, W, K, p, n, !0)) return [0, 0];
                    W = p, K = n, z += 2
                }
                return k ? k : [J - m, i - g]
            }, se = U.graph3d = {}, _q = function (W, S, X) {
                zb(e + ".graph3d." + W, S, X)
            },
            Wr = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
            pf = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
        Cf(N, {
            setBatchInfo: function (Q, N) {
                gk[Q] = N
            }, getBatchInfo: function (D) {
                return gk[D]
            }
        }, !0);
        var $b = [1, 1, 1], ao = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
            eq = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
            vd = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
            Rm = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
            Zg = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
            vm = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
            qj = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5],
            gb = function (v, q) {
                zq(v, q), Yo(v, q, "_wireframeModelMap", "_wireframeIndexMap"), Yo(v, q, "_polylineModelMap", "_polylineIndexMap")
            }, zq = function (I, s) {
                if (s) {
                    var Z, b, h = s._id, Y = I._33O, p = I._34O, g = p[h];
                    if (g) {
                        b = g.batch, Z = Y[b];
                        var P = g.begin, A = g.size, e = 3 * P, O = 3 * A, k = 4 * P, N = 4 * A, u = Z.vs, J = Z.uv,
                            G = Z.cs, E = Z.bs, c = Z.rs, F = Z.ds, j = g.index;
                        if (Z.invalidate = !0, delete p[h], F.splice(j, 1), ve(F)) delete Y[b]; else {
                            for (; j < F.length; j++) g = p[F[j]._id], g.index--, g.begin -= A;
                            u.splice(e, O), Z.ns.splice(e, O), Z.ps.splice(k, N), J && J.splice(2 * P, 2 * A), G && G.splice(k, N), E && E.splice(e, O), c && c.splice(P, A)
                        }
                    }
                } else I._34O = {}, I._33O = {}
            }, Yo = function (B, K, q, O) {
                if (K) {
                    var f, G, S = K._id, H = B[q], F = B[O], c = F[S];
                    if (c) {
                        G = c.batch, f = H[G];
                        var z = c.begin, R = c.size, m = 3 * z, o = 3 * R, w = 4 * z, Q = 4 * R, h = f.ds, x = c.index;
                        if (f.invalidate = !0, delete F[S], h.splice(x, 1), ve(h)) delete H[G]; else {
                            for (; x < h.length; x++) c = F[h[x]._id], c.index--, c.begin -= R;
                            f.vs.splice(m, o), f.cs.splice(w, Q), f.ps.splice(w, Q), f.ls && f.ls.splice(z, R)
                        }
                    }
                } else B[q] = {}, B[O] = {}
            }, xg = function (s, T, A, R) {
                if (!R) return t;
                var I = T[R];
                if (!I) {
                    var j = gk[R] || go, C = j.image ? [] : t;
                    I = T[R] = {
                        vs: [],
                        ns: [],
                        uv: C,
                        cs: C ? t : j.color ? t : [],
                        bs: j.blend ? [] : t,
                        ps: [],
                        rs: j.brightness ? [] : t,
                        ds: []
                    }
                }
                return I.invalidate = !0, s[A._id] = {index: I.ds.length, begin: I.vs.length / 3, batch: R}, I.ds.push(A), I
            }, nb = function (V, v) {
                return v != t && 1 !== v ? [V[0] * v, V[1] * v, V[2] * v, V[3]] : V
            }, Yg = function (w, O, M) {
                var E = w.getBrightness(O), S = Kf(M.color || "white"), y = S[3] < 1, T = Math.ceil(M.width) || 1,
                    I = (y ? "T" : "O") + T, e = w._wireframeIndexMap, K = w._wireframeModelMap, J = K[I];
                J || (J = K[I] = {vs: [], cs: [], ps: [], ds: [], T: y, W: T}), J.invalidate = !0;
                var L = J.vs, k = J.cs, W = J.ds, N = e[O._id] = {index: W.length, begin: L.length / 3, batch: I};
                W.push(O), Bs(L, Ko(O, M.mat), M.short ? Ob : pp);
                var Y = N.size = L.length / 3 - N.begin;
                po(k, nb(S, E), Y)
            }, lc = function (D, i, z, S, N, H, v, r, u) {
                var W = D.getBrightness(i);
                W == t && (W = 1);
                var P = nb(Kf(S), W), R = P[3] < 1;
                H = Math.ceil(H) || 1;
                var n = (R ? "T" : "O") + H;
                if (v) {
                    var G = v[0], l = (v[1] || G) + G;
                    n += "-" + G + "-" + l, u && (n += "-" + Ep(u) + "-" + W, u = nb(Kf(u), W))
                }
                var o = D._polylineIndexMap, p = D._polylineModelMap, b = p[n];
                b || (b = p[n] = {
                    vs: [],
                    cs: [],
                    ps: [],
                    ds: [],
                    ls: v ? [] : t,
                    T: R,
                    W: H
                }, v && (b.D = G, b.G = l, b.A = u)), b.invalidate = !0;
                var k, B = b.vs, O = b.cs, A = b.ds, Y = b.ls,
                    I = o[i._id] = {index: A.length, begin: B.length / 3, batch: n};
                A.push(i), Kd(B, z);
                var E, C = I.size = B.length / 3 - I.begin, K = z.length, d = 0, q = [];
                if (v || N) for (k = 0; K > k; k += 6) E = Lb([z[k], z[k + 1], z[k + 2]], [z[k + 3], z[k + 4], z[k + 5]]), q.push(E), d += E;
                if (d && N) {
                    var m, x = nb(Kf(N), W), T = [x[0] - P[0], x[1] - P[1], x[2] - P[2], x[3] - P[3]], $ = 0;
                    for (k = 0; K > k; k += 6) m = $ / d, po(O, [P[0] + T[0] * m, P[1] + T[1] * m, P[2] + T[2] * m, P[3] + T[3] * m], 1), $ += q[k / 6], m = $ / d, po(O, [P[0] + T[0] * m, P[1] + T[1] * m, P[2] + T[2] * m, P[3] + T[3] * m], 1)
                } else po(O, P, C);
                if (v) for ($ = r || 0, k = 0; K > k; k += 6) Y.push($), $ += q[k / 6], Y.push($)
            }, Jl = function ($, G, C) {
                if (G) for (var T = 4 * G.begin, I = C[G.batch].ps, y = 0; y < G.size; y++) I[T++] = $[0], I[T++] = $[1], I[T++] = $[2], I[T++] = $[3]
            }, Il = function (h, w) {
                var G = w + ["32"], s = h[w], Y = h[G];
                s ? Y && Y.length === s.length ? Y.set(s) : h[G] = new me(s) : delete h[G]
            }, Wn = function (m, i, r, K, e, k, $, p, M) {
                if (od(r)) r.forEach(function (h) {
                    Wn(m, i, h, K, e, k, $, p, M)
                }); else if (xq(r)) Wn(m, i, Mn(K, r), K, e, k, $, p, M); else if (wi(r)) {
                    var n, Q = Uo(r.mat, i, m), f = Uo(r.s3, i, m), d = Uo(r.t3, i, m), V = Uo(r.r3, i, m);
                    if ((f || V || d || Q) && (n = As(Q, f, V, Uo(r.rotationMode, i, m), d), k.push(n)), r.shape3d) Wn(m, i, r.shape3d, K, e, k, $, p, r); else {
                        var t = K.s;
                        M = M || go;
                        var o = k[0], B = k.length, P = t("shape3d.color", r.color, M.color);
                        if (e || (e = t("shape3d.blend", r.blend, M.blend)), B > 1) {
                            o = zn(o);
                            for (var z = 1; B > z; z++) Dd(o, o, k[z])
                        }
                        r.vs && t(ej, r.visible, M.visible) && Zr(o, $, p, r.vs, r.uv, r.is, e, P), r.top_vs && t(qs, r.topVisible, M.topVisible) && Zr(o, $, p, r.top_vs, r.top_uv, r.top_is, e, t("shape3d.top.color", r.topColor, M.topColor) || P), r.bottom_vs && t(Hq, r.bottomVisible, M.bottomVisible) && Zr(o, $, p, r.bottom_vs, r.bottom_uv, r.bottom_is, e, t("shape3d.bottom.color", r.bottomColor, M.bottomColor) || P), r.from_vs && t(wo, r.fromVisible, M.fromVisible) && Zr(o, $, p, r.from_vs, r.from_uv, r.from_is, e, t("shape3d.from.color", r.fromColor, M.fromColor) || P), r.to_vs && t(Dm, r.toVisible, M.toVisible) && Zr(o, $, p, r.to_vs, r.to_uv, r.to_is, e, t("shape3d.to.color", r.toColor, M.toColor) || P)
                    }
                    n && k.pop()
                }
            }, Zr = function (I, T, u, s, Q, N, V, J) {
                var l, g = T.cs, w = T.uv, A = T.bs;
                if (N) {
                    l = N.length;
                    for (var H = 0; l > H; H++) {
                        var M = N[H];
                        Bs(u, I, [s[3 * M], s[3 * M + 1], s[3 * M + 2]]), w && Kd(w, [Q[2 * M], Q[2 * M + 1]])
                    }
                } else l = s.length / 3, Bs(u, I, s), w && Kd(w, Q);
                g && po(g, J, l), A && (V ? Gr(A, V, l) : Kd(A, $b, l))
            }, oj = function (O, P, V, q) {
                var x = [];
                q ? Wn(O.gv, O.data, q, O, O.getBodyColor(), [P], V, x) : (th(O, ur, P, V, x), th(O, Rl, P, V, x), th(O, Fe, P, V, x), th(O, ks, P, V, x), th(O, jh, P, V, x), th(O, Af, P, V, x), th(O, "csg", P, V, x)), x.length && (Kd(V.vs, x), Kd(V.ns, Se(x)))
            }, th = function (r, h, K, H, z) {
                var i = r[h];
                if (i) {
                    var f = i.tuv;
                    if (f) {
                        var e, n, N, X, q = i.uvScale, b = i.uvOffset;
                        if (q) for (e = f.length, n = q[0], N = q[1], X = 0; e > X; X += 2) f[X] *= n, f[X + 1] *= N;
                        if (b) for (e = f.length, n = b[0], N = b[1], X = 0; e > X; X += 2) f[X] += n, f[X + 1] += N
                    }
                    Zr(K, H, z, i.vs, f, t, i.blend, i.color)
                }
            }, Sr = function (p, c, z, l, B, T, G, R) {
                var n, F = z.cs, a = z.uv, q = z.bs;
                if (p.getFaceVisible(c, T)) {
                    var C = p.getFaceMat(c, T);
                    if (C && (B = Ko(c, C)), Bs(G, B, R), F && po(F, p.getFaceColor(c, T), 6), a) {
                        var d = p.getFaceUv(c, T) || l[T + "Uv"], _ = p.getFaceUvScale(c, T) || l[T + "UvScale"],
                            f = p.getFaceUvOffset(c, T) || l[T + "UvOffset"];
                        d = d ? [d[6], d[7], d[0], d[1], d[2], d[3], d[2], d[3], d[4], d[5], d[6], d[7]] : ao;
                        var v = d[0], K = d[1], m = d[2], Y = d[3], H = d[4], s = d[5], t = d[6], k = d[7], O = d[8],
                            r = d[9], x = d[10], j = d[11];
                        if (_) {
                            var y = _[0], w = _[1];
                            v *= y, K *= w, m *= y, Y *= w, H *= y, s *= w, t *= y, k *= w, O *= y, r *= w, x *= y, j *= w
                        }
                        if (f) {
                            var P = f[0], M = f[1];
                            v += P, K += M, m += P, Y += M, H += P, s += M, t += P, k += M, O += P, r += M, x += P, j += M
                        }
                        a.push(v, K, m, Y, H, s, t, k, O, r, x, j)
                    }
                    q && (n = p.getBodyColor(c) || p.getFaceBlend(c, T), n ? Gr(q, n, 6) : Kd(q, $b, 6))
                }
            }, bq = function (n, B, K, b) {
                var _ = n.getGL(), X = n._prg, L = n._buffer;
                if (!kk(B)) {
                    Wp(n), bj(_, X);
                    for (var p in B) {
                        var l = B[p];
                        if (!(b && !l.T || !b && l.T)) {
                            l.invalidate ? (l.invalidate = !1, Il(l, "vs"), Il(l, "cs"), Il(l, "ls"), Il(l, "ps")) : K && Il(l, "ps");
                            var Y = l.vs32, q = K ? l.ps32 : l.cs32;
                            qf(_, X, l.W, t, L.vs, Y);
                            var C = l.D, J = !n._dashDisabled && C;
                            J && (Wl(_, X.uDash, !0), Wl(_, X.uDashDistance, C), Wl(_, X.uDashGapDistance, l.G), Bm(_, X.aLineDistance), Hb(_, L.lineDistance, l.ls32, X.aLineDistance, 1), Wl(_, X.uDiffuse, l.A || dl));
                            var z = !n._batchColorDisabled;
                            z && (Wl(_, X.uBatchColor, !0), Bm(_, X.aBatchColor), Hb(_, L.batchColor, q, X.aBatchColor, 4)), hl(_), cs(_, 0, Y.length / 3, _.LINES), jo(_), z && (Wl(_, X.uBatchColor, !1), cd(_, X.aBatchColor)), J && (Wl(_, X.uDash, !1), cd(_, X.aLineDistance))
                        }
                    }
                    Kj(_, X)
                }
            }, Bo = function (u, Y, W) {
                var $, s, I, _, l, v, N, r, J, m, P, a = u.getGL(), O = u._prg, L = u._buffer, q = u._33O;
                if (!kk(q)) {
                    Wp(u);
                    for ($ in q) if (s = gk[$] || go, !(W && !s.transparent || !W && s.transparent) && (I = q[$], Y || !s.transparentMask)) {
                        var F = W && s.autoSort !== !1 && (u._33Q || I.invalidate);
                        if (I.invalidate ? (I.invalidate = !1, Il(I, "vs"), Il(I, "ns"), Il(I, "cs"), Il(I, "rs"), Il(I, "ps"), Il(I, "bs"), Il(I, "uv")) : Y && Il(I, "ps"), l = I.vs32, v = Y ? I.ps32 : I.cs32, J = I.uv32, N = I.bs32, r = I.rs32, P = l.length / 3, F && (I.is = Ti(l, u.getEye())), P) {
                            _ = s.light, m = u.getTexture(s.image), sn(a, O, t, s.light, s.opacity, s.reverseFlip, s.reverseColor, s.reverseCull), v ? u._batchColorDisabled || (Wl(a, O.uBatchColor, !0), Bm(a, O.aBatchColor), Hb(a, L.batchColor, v, O.aBatchColor, 4)) : Wl(a, O.uDiffuse, s.color);
                            var X = N && !u._batchBlendDisabled;
                            X && (Wl(a, O.uBatchBlend, !0), Bm(a, O.aBatchBlend), Hb(a, L.batchBlend, N, O.aBatchBlend));
                            var Z = r && !u._batchBrightnessDisabled;
                            Z && (Wl(a, O.uBatchBrightness, !0), Bm(a, O.aBatchBrightness), Hb(a, L.batchBrightness, r, O.aBatchBrightness, 1)), J ? hl(a, O, m, s.discardSelectable, L.uv, J, s.uvOffset, s.uvScale) : hl(a), Hb(a, L.vs, l, O.aPosition), Hb(a, L.ns, I.ns32, O.aNormal), I.is ? (zi(a, L.is, I.is), Vo(a, 0, P)) : cs(a, 0, P), J ? jo(a, O, m) : jo(a), v && !u._batchColorDisabled && (Wl(a, O.uBatchColor, !1), cd(a, O.aBatchColor)), X && (Wl(a, O.uBatchBlend, !1), cd(a, O.aBatchBlend)), Z && (Wl(a, O.uBatchBrightness, !1), cd(a, O.aBatchBrightness)), yo(a, O)
                        }
                    }
                }
            }, Ti = function (J, u) {
                for (var x = J.length / 3, z = new Array(x), v = x / 3, t = new Array(v), U = 0; v > U; U++) t[U] = U;
                t.sort(function (s, Q) {
                    var l = 9 * s,
                        k = [(J[l] + J[l + 3] + 2 * J[l + 6]) / 4, (J[l + 1] + J[l + 4] + 2 * J[l + 7]) / 4, (J[l + 2] + J[l + 5] + 2 * J[l + 8]) / 4];
                    l = 9 * Q;
                    var q = [(J[l] + J[l + 3] + 2 * J[l + 6]) / 4, (J[l + 1] + J[l + 4] + 2 * J[l + 7]) / 4, (J[l + 2] + J[l + 5] + 2 * J[l + 8]) / 4],
                        $ = Lb(u, k) - Lb(u, q);
                    return $ > 0 ? -1 : 0 > $ ? 1 : 0
                });
                for (var U = 0; v > U; U++) {
                    var k = 3 * U, K = 3 * t[U];
                    z[k] = K, z[k + 1] = K + 1, z[k + 2] = K + 2
                }
                return new Pd(z)
            }, uq = new me([0, 0, 0, 1, 1, 1, 1, 0]), De = new me([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
            ad = new Pd([0, 1, 2, 2, 3, 0]),
            Rc = new me([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
            Ld = new Pd([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
            mg = new me([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
            vc = new me([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
            xl = Se(Rc, Ld),
            pp = (new me([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new Pd([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]),
            Ob = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
            Io = function (G, f, x, F, u, a) {
                a = a || 16, G = G || 16, f = f || 0, x = x || G;
                var h, D, T, e, o, w, S, l, C = .5, y = [], d = [], K = n / G, r = P / a;
                for (h = 0; a > h; h++) for (o = h + 1, e = h * r, l = o * r, D = f; x > D; D++) w = D + 1, T = D * K, S = w * K, y.push(C * H(e) * m(T), C * m(e), -C * H(e) * H(T), C * H(l) * m(S), C * m(l), -C * H(l) * H(S), C * H(e) * m(S), C * m(e), -C * H(e) * H(S), C * H(e) * m(T), C * m(e), -C * H(e) * H(T), C * H(l) * m(T), C * m(l), -C * H(l) * H(T), C * H(l) * m(S), C * m(l), -C * H(l) * H(S)), d.push(D / G, h / a, w / G, o / a, w / G, h / a, D / G, h / a, D / G, o / a, w / G, o / a);
                if (F) {
                    var I = [], g = [];
                    for (T = f * K, h = 0; a > h; h++) o = h + 1, e = h * r, l = o * r, I.push(0, 0, 0, C * H(l) * m(T), C * m(l), -C * H(l) * H(T), C * H(e) * m(T), C * m(e), -C * H(e) * H(T)), g.push(0, .5, f / G, o / a, f / G, h / a)
                }
                if (u) {
                    var b = [], V = [];
                    for (T = x * K, h = 0; a > h; h++) o = h + 1, e = h * r, l = o * r, b.push(0, 0, 0, C * H(e) * m(T), C * m(e), -C * H(e) * H(T), C * H(l) * m(T), C * m(l), -C * H(l) * H(T)), V.push(1, .5, x / G, h / a, x / G, o / a)
                }
                return {vs: y, uv: d, from_vs: I, from_uv: g, to_vs: b, to_uv: V}
            }, rf = function (p, i, u) {
                p = p || .17, i = i || 12, u = u || 18, 0 > p ? p = 0 : p > .25 && (p = .25);
                var V, y, J, Z, $, X, O, Y = .5, T = [], M = [], b = [], L = n / u, G = n / i, e = Y - p;
                for (y = 0; i >= y; y++) for (Z = -P + y * G, X = m(Z), $ = H(Z), V = 0; u >= V; V++) J = V * L, O = e + p * X, T.push(m(J) * O, $ * p, -H(J) * O), M.push(V / u, 1 - y / i);
                for (y = 0; i > y; y++) {
                    var l = y * (u + 1), W = (y + 1) * (u + 1);
                    for (V = 0; u > V; V++) b.push(l + V, W + V + 1, W + V, l + V, l + V + 1, W + V + 1)
                }
                return {vs: T, uv: M, is: b}
            }, Qg = function (d, R, p, E, W, s, i) {
                i = i || 12, d = d || 18, R = R || 0, p = p || d, s = s || .17, 0 > s ? s = 0 : s > .25 && (s = .25);
                var h, b, T, X, Q, _, J, Y, r, M, Z = .5, v = [], B = [], x = n / d, c = n / i, j = Z - s;
                for (T = 0; i > T; T++) for (X = T + 1, J = -P + T * c, Y = -P + X * c, h = R; p > h; h++) b = h + 1, Q = h * x, _ = b * x, r = j + s * m(J), M = j + s * m(Y), v.push(m(Q) * r, H(J) * s, -H(Q) * r, m(_) * r, H(J) * s, -H(_) * r, m(_) * M, H(Y) * s, -H(_) * M, m(Q) * r, H(J) * s, -H(Q) * r, m(_) * M, H(Y) * s, -H(_) * M, m(Q) * M, H(Y) * s, -H(Q) * M), B.push(h / d, 1 - T / i, b / d, 1 - T / i, b / d, 1 - X / i, h / d, 1 - T / i, b / d, 1 - X / i, h / d, 1 - X / i);
                if (E) {
                    var g = [], L = [];
                    for (T = 0; i > T; T++) X = T + 1, J = -P + T * c, Y = -P + X * c, Q = R * x, r = j + s * m(J), M = j + s * m(Y), g.push(m(Q) * r, H(J) * s, -H(Q) * r, m(Q) * M, H(Y) * s, -H(Q) * M, m(Q) * j, 0, -H(Q) * j), L.push(.5 + .5 * m(J), .5 - .5 * H(J), .5 + .5 * m(Y), .5 - .5 * H(Y), .5, .5)
                }
                if (W) {
                    var A = [], $ = [];
                    for (T = 0; i > T; T++) X = T + 1, J = -P + T * c, Y = -P + X * c, Q = p * x, r = j + s * m(J), M = j + s * m(Y), A.push(m(Q) * r, H(J) * s, -H(Q) * r, m(Q) * j, 0, -H(Q) * j, m(Q) * M, H(Y) * s, -H(Q) * M), $.push(.5 - .5 * m(J), .5 - .5 * H(J), .5, .5, .5 - .5 * m(Y), .5 - .5 * H(Y))
                }
                return {vs: v, uv: B, from_vs: g, from_uv: L, to_vs: A, to_uv: $}
            }, xp = function (E, M) {
                for (var e, R, I, c = .5, D = 16, x = [], i = [], A = [], l = n / D, o = 0; D >= o; o++) e = o * l, R = m(e) * c, I = H(e) * c, x.push(R, -c, I, R, c, I), i.push(1 - o / D, 1, 1 - o / D, 0);
                for (o = 0; D > o; o++) A.push(2 * o, 2 * o + 1, 2 * o + 3, 2 * o, 2 * o + 3, 2 * o + 2);
                if (M) {
                    var w = [], q = [], j = [];
                    for (w.push(0, -c, 0), q.push(.5, .5), o = 0; D >= o; o++) e = o * l, R = m(e), I = H(e), w.push(R * c, -c, -I * c), q.push(.5 + .5 * R, .5 + .5 * I);
                    for (o = 0; D > o; o++) j.push(0, o + 2, o + 1)
                }
                if (E) {
                    var S = [], T = [], s = [];
                    for (S.push(0, c, 0), T.push(.5, .5), o = 0; D >= o; o++) e = o * l, R = m(e), I = H(e), S.push(R * c, c, -I * c), T.push(.5 + .5 * R, .5 - .5 * I);
                    for (o = 0; D > o; o++) s.push(0, o + 1, o + 2)
                }
                return {vs: x, uv: i, is: A, bottom_vs: w, bottom_uv: q, bottom_is: j, top_vs: S, top_uv: T, top_is: s}
            }, Nh = function (S, k, w, h, D, J, R) {
                S = S || 12, k = k || 0, w = w || S;
                for (var M, f, W, t, T, O, Y, K, i = .5, P = [], b = [], j = n / S, r = k; w > r; r++) M = r + 1, f = r * j, W = M * j, t = m(f) * i, T = H(f) * i, O = m(W) * i, Y = H(W) * i, P.push(t, -i, -T, O, -i, -Y, t, i, -T, O, -i, -Y, O, i, -Y, t, i, -T), b.push(r / S, 1, M / S, 1, r / S, 0, M / S, 1, M / S, 0, r / S, 0);
                if (R) {
                    var _ = [], a = [];
                    for (r = k; w > r; r++) f = j * r, W = j * (r + 1), t = m(f), T = H(f), O = m(W), Y = H(W), _.push(t * i, -i, -T * i, 0, -i, 0, O * i, -i, -Y * i), a.push(.5 + .5 * t, .5 + .5 * T, .5, .5, .5 + .5 * O, .5 + .5 * Y)
                }
                if (J) {
                    var N = [], o = [];
                    for (r = k; w > r; r++) f = j * r, W = j * (r + 1), t = m(f), T = H(f), O = m(W), Y = H(W), N.push(t * i, i, -T * i, O * i, i, -Y * i, 0, i, 0), o.push(.5 + .5 * t, .5 - .5 * T, .5 + .5 * O, .5 - .5 * Y, .5, .5)
                }
                if (h) {
                    var s = [], p = [];
                    f = j * k, t = m(f) * i, T = H(f) * i, K = k / S, s.push(0, i, 0, 0, -i, 0, t, -i, -T, t, -i, -T, t, i, -T, 0, i, 0), p.push(0, 0, 0, 1, K, 1, K, 1, K, 0, 0, 0)
                }
                if (D) {
                    var I = [], C = [];
                    f = j * w, t = m(f) * i, T = H(f) * i, K = w / S, I.push(0, -i, 0, 0, i, 0, t, i, -T, t, i, -T, t, -i, -T, 0, -i, 0), C.push(1, 1, 1, 0, K, 0, K, 0, K, 1, 1, 1)
                }
                return {
                    vs: P,
                    uv: b,
                    bottom_vs: _,
                    bottom_uv: a,
                    top_vs: N,
                    top_uv: o,
                    from_vs: s,
                    from_uv: p,
                    to_vs: I,
                    to_uv: C
                }
            }, lj = function (r, z, k, D, c) {
                z = z || 18, k = k || 0, D = D == t ? n : D, c = c == t ? .5 : c;
                for (var K, $, U, V, q, i, h = [0, .5, .75, .875, .9375], d = [], e = [], s = [], w = D / z, u = 0; u < h.length; u++) {
                    var p = 0 === u % 2 ? 0 : .5;
                    for (K = 0; z >= K; K++) $ = (K + p) * w + k, U = 1 - h[u], d.push(m($) * c * U, -c + 2 * h[u] * c, -H($) * c * U), e.push((K + p) / z, U)
                }
                for (u = 0; u < h.length - 1; u++) {
                    var Q = u * (z + 1), P = (u + 1) * (z + 1);
                    for (K = 0; z > K; K++) s.push(Q + K, P + K + 1, P + K, Q + K, Q + K + 1, P + K + 1)
                }
                for (i = d.length / 3 - (z + 1), K = 0; z > K; K++) d.push(0, c, 0), e.push((K + .5) / z, 0);
                for (K = 0; z > K; K++) s.push(i + K, i + K + 1, i + (z + 1) + K);
                if (r) {
                    var O = [], L = [], S = [];
                    for (O.push(0, -c, 0), L.push(.5, .5), K = 0; z >= K; K++) $ = K * w + k, V = m($), q = H($), O.push(V * c, -c, -q * c), L.push(.5 + .5 * V, .5 + .5 * q);
                    for (K = 0; z > K; K++) S.push(0, K + 2, K + 1)
                }
                return {vs: d, uv: e, is: s, bottom_vs: O, bottom_uv: L, bottom_is: S}
            }, lo = function (L, j, s, U, P, C) {
                L = L || 16, j = j || 0, s = s || L;
                for (var V = .5, J = [], x = [], r = n / L, b = j; s > b; b++) {
                    var I = b + 1, W = r * b, _ = r * I;
                    J.push(m(W) * V, -V, -H(W) * V, m(_) * V, -V, -H(_) * V, 0, V, 0), x.push(b / L, 1, I / L, 1, (b + I) / 2 / L, 0)
                }
                if (C) {
                    var R = [], d = [];
                    for (b = j; s > b; b++) {
                        W = r * b, _ = r * (b + 1);
                        var G = m(W), E = H(W), S = m(_), l = H(_);
                        R.push(G * V, -V, -E * V, 0, -V, 0, S * V, -V, -l * V), d.push(.5 + .5 * G, .5 + .5 * E, .5, .5, .5 + .5 * S, .5 + .5 * l)
                    }
                }
                if (U) {
                    var v = [], z = [];
                    W = r * j, v.push(0, V, 0, 0, -V, 0, m(W) * V, -V, -H(W) * V), z.push(0, 0, 0, 1, j / L, 1)
                }
                if (P) {
                    var c = [], O = [];
                    W = r * s, c.push(0, -V, 0, 0, V, 0, m(W) * V, -V, -H(W) * V), O.push(1, 1, 1, 0, s / L, 1)
                }
                return {vs: J, uv: x, bottom_vs: R, bottom_uv: d, from_vs: v, from_uv: z, to_vs: c, to_uv: O}
            }, jr = function (E, x, h, e, S, Y, W, R) {
                for (var m = [], G = 0; G < E.length - 1; G += 2) m.push({x: E[G], y: E[G + 1]});
                return Ki(m, x, h, e, S, Y, W, R, !1)
            }, Jo = {
                roundRect: function (j, I) {
                    return jr([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], j, I, 3)
                }, star: function (w, O) {
                    return jr([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], w, O)
                }, rect: function (z, f) {
                    return jr([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], z, f)
                }, triangle: function (z, W) {
                    return jr([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], z, W)
                }, rightTriangle: function (Y, I) {
                    return jr([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], Y, I)
                }, parallelogram: function (f, r) {
                    return jr([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], f, r)
                }, trapezoid: function (r, B) {
                    return jr([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], r, B)
                }
            }, kh = {sphere: 1, cylinder: 1, cone: 1, torus: 1}, gp = {torus: 1, sphere: 1}, wg = Cf(us(Jo), {cylinder: 1}),
            $e = Cf(us(Jo), {cylinder: 1, cone: 1}), Pi = function (M, F, o) {
                var G, f = Uo(M.mat, o, F), T = Uo(M.s3, o, F), S = Uo(M.t3, o, F), L = Uo(M.r3, o, F);
                return (T || L || S || f) && (G = zn(F._6O), Wp(F, As(f, T, L, Uo(M.rotationMode, o, F), S))), G
            }, Eb = function (R, N, u, Z, V, b, m) {
                if (od(u)) u.forEach(function (z) {
                    Eb(R, N, z, Z, V, b, m)
                }); else if (xq(u)) Eb(R, N, Mn(Z, u), Z, V, b, m); else if (wi(u)) if (u.shape3d) {
                    var O = Pi(u, R, N);
                    Eb(R, N, u.shape3d, Z, V, b, u), O && Lo(R, O)
                } else Ii(R, N, u, Z.s, V, b, m)
            }, Ii = function (f, R, E, C, l, S, B) {
                if (B = B || go, !S || S(C("shape3d.transparent", E.transparent, B.transparent))) {
                    var p = Pi(E, f, R);
                    Dl(E);
                    var n = f._26I, W = f._prg, s = f._buffer, m = C("shape3d.color", E.color, B.color);
                    l || (l = C("shape3d.blend", E.blend, B.blend)), sn(n, W, l, C("shape3d.light", E.light, B.light), C("shape3d.opacity", E.opacity, B.opacity), C("shape3d.reverse.flip", E.reverseFlip, B.reverseFlip), C("shape3d.reverse.color", E.reverseColor, B.reverseColor), C("shape3d.reverse.cull", E.reverseCull, B.reverseCull)), E.vs && C(ej, E.visible, B.visible) && ee(n, W, s, m, f.getTexture(C("shape3d.image", E.image, B.image), R), C("shape3d.discard.selectable", E.discardSelectable, B.discardSelectable), E.vs, E.uv, E.ns, E.is, C("shape3d.uv.offset", E.uvOffset, B.uvOffset), C("shape3d.uv.scale", E.uvScale, B.uvScale)), E.top_vs && C(qs, E.topVisible, B.topVisible) && ee(n, W, s, C("shape3d.top.color", E.topColor, B.topColor) || m, f.getTexture(C("shape3d.top.image", E.topImage, B.topImage), R), C("shape3d.top.discard.selectable", E.topDiscardSelectable, B.topDiscardSelectable), E.top_vs, E.top_uv, E.top_ns, E.top_is, C("shape3d.top.uv.offset", E.topUvOffset, B.topUvOffset), C("shape3d.top.uv.scale", E.topUvScale, B.topUvScale)), E.bottom_vs && C(Hq, E.bottomVisible, B.bottomVisible) && ee(n, W, s, C("shape3d.bottom.color", E.bottomColor, B.bottomColor) || m, f.getTexture(C("shape3d.bottom.image", E.bottomImage, B.bottomImage), R), C("shape3d.bottom.discard.selectable", E.bottomDiscardSelectable, B.bottomDiscardSelectable), E.bottom_vs, E.bottom_uv, E.bottom_ns, E.bottom_is, C("shape3d.bottom.uv.offset", E.bottomUvOffset, B.bottomUvOffset), C("shape3d.bottom.uv.scale", E.bottomUvScale, B.bottomUvScale)), E.from_vs && C(wo, E.fromVisible, B.fromVisible) && ee(n, W, s, C("shape3d.from.color", E.fromColor, B.fromColor) || m, f.getTexture(C("shape3d.from.image", E.fromImage, B.fromImage), R), C("shape3d.from.discard.selectable", E.fromDiscardSelectable, B.fromDiscardSelectable), E.from_vs, E.from_uv, E.from_ns, E.from_is, C("shape3d.from.uv.offset", E.fromUvOffset, B.fromUvOffset), C("shape3d.from.uv.scale", E.fromUvScale, B.fromUvScale)), E.to_vs && C(Dm, E.toVisible, B.toVisible) && ee(n, W, s, C("shape3d.to.color", E.toColor, B.toColor) || m, f.getTexture(C("shape3d.to.image", E.toImage, B.toImage), R), C("shape3d.to.discard.selectable", E.toDiscardSelectable, B.toDiscardSelectable), E.to_vs, E.to_uv, E.to_ns, E.to_is, C("shape3d.to.uv.offset", E.toUvOffset, B.toUvOffset), C("shape3d.to.uv.scale", E.toUvScale, B.toUvScale)), yo(n, W), p && Lo(f, p)
                }
            }, ee = function (V, A, J, x, X, L, c, D, U, y, K, p) {
                c && (Wl(V, A.uDiffuse, x), D ? hl(V, A, X, L, J.uv, D, K, p) : hl(V), Hb(V, J.vs, c, A.aPosition), Hb(V, J.ns, U, A.aNormal), y ? (zi(V, J.is, y), Vo(V, 0, y.length)) : cs(V, 0, c.length / 3), D ? jo(V, A, X) : jo(V))
            }, Mn = function (i, e) {
                var H = i.s;
                if (e || (e = H(Ic)), !e) return t;
                if (wi(e)) return e;
                var P = xk[e];
                if (P) return P;
                if ("text" === e) {
                    var m = {
                        amount: H("shape3d.text.amount"),
                        size: H("shape3d.text.size"),
                        font: H("shape3d.text.font"),
                        style: H("shape3d.text.style"),
                        weight: H("shape3d.text.weight"),
                        fill: H("shape3d.text.fill"),
                        curveSegments: H("shape3d.text.curveSegments"),
                        spacing: H("shape3d.text.spacing")
                    }, B = i.gv.getShape3dText(i.data), _ = B;
                    for (var g in m) _ += "_" + (m[g] === f ? "U" : m[g]);
                    return i._cachedTextKey === _ ? i._cachedTextGeometry : (i._cachedTextKey = _, i._cachedTextGeometry = N.createTextGeometry(B, m))
                }
                var g = e;
                if (kh[e]) {
                    var G = H("shape3d.side"), r = H("shape3d.side.from"), j = H("shape3d.side.to"), A = H(wo), X = H(Dm);
                    3 > G ? (G = 0, r = 0, j = 0, A = !1, X = !1) : ((r == t || 0 > r) && (r = 0), (j == t || j > G) && (j = G), 0 === r && j === G && (A = !1, X = !1)), g += "-" + G + "-" + r + "-" + j + "-" + A + "-" + X
                }
                if (wg[e]) {
                    var c = H(qs);
                    g += "-" + c
                }
                if ($e[e]) {
                    var Z = H(Hq);
                    g += "-" + Z
                }
                if ("torus" === e) {
                    var V = H("shape3d.torus.radius");
                    0 > V ? V = 0 : V > .25 && (V = .25), g += "-" + V
                }
                if (gp[e]) {
                    var S = H(Zp);
                    g += "-" + S
                }
                return P = Ni[g], P || ("box" === e ? P = N.createBoxModel() : Jo[e] ? P = Jo[e](c, Z) : "sphere" === e ? P = N.createSphereModel(G, r, j, A, X, S) : e === oe ? P = N.createCylinderModel(G, r, j, A, X, c, Z) : "cone" === e ? P = N.createConeModel(G, r, j, A, X, Z) : "torus" === e && (P = N.createTorusModel(G, r, j, A, X, V, S)), Ni[g] = P), P
            }, Dl = function () {
                var I = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
                    w = ["is", "top_is", "bottom_is", "from_is", "to_is"];
                return O = $r(Wr.substr(Wr.indexOf("^#") + 2)), Je(N[vp(kp + I[15] + "n" + I[16])]()) && Fp() ? function (S) {
                    S && !S._complete_ && (S._complete_ = !0, S.vs && ve(S.ns) && (S.ns = Se(S.vs, S.is)), S.top_vs && ve(S.top_ns) && (S.top_ns = Se(S.top_vs, S.top_is)), S.bottom_vs && ve(S.bottom_ns) && (S.bottom_ns = Se(S.bottom_vs, S.bottom_is)), S.from_vs && ve(S.from_ns) && (S.from_ns = Se(S.from_vs, S.from_is)), S.to_vs && ve(S.to_ns) && (S.to_ns = Se(S.to_vs, S.to_is)), I.forEach(function (f) {
                        var L = S[f];
                        od(L) && (S[f] = new me(L))
                    }), w.forEach(function (h) {
                        var B = S[h];
                        od(B) && (S[h] = new Pd(B))
                    }))
                } : void 0
            }(), kg = function (V, T) {
                var J = V[T];
                od(J) && (V[T] = new me(J))
            };
        Cf(eb, {
            _25Q: function (L) {
                L._16O = function (U, J, X, K, E, v, j, t, Y) {
                    var b = this.info;
                    if (b) {
                        var R, n, V, s, A, a, g = Tq();
                        if (Pf[J] ? (R = b.p3, n = b.c1, V = b.c2) : Qf[J] ? (n = b.s1 || b.c1, V = b.s2 || b.c2) : (n = b.t1 || b.c1, V = b.t2 || b.c2), R) a = Lc(J, Be, X, K, t, Y); else {
                            var S = Uk(V, n), O = Lb(n, V);
                            s = [0, -o(S[2], S[0]), D(S[1] / O)], A = "zyx", R = [(n[0] + V[0]) / 2, (n[1] + V[1]) / 2, (n[2] + V[2]) / 2], a = Lc(J, [O, 0, 0], X, K, t, Y)
                        }
                        return ep(g, a, R, K, E, v, j, U, s, A)
                    }
                    return Fi
                }, L._80o = function (O, o, t) {
                    var m = this, J = m.shapeModel;
                    if (J) {
                        var P = m.gv;
                        Wp(P), Eb(P, m.data, J, m, m.getBodyColor(), t)
                    }
                }, L.createLineModel = function (H, j, U, e, s) {
                    for (var y = this, q = y.s, Z = Hj(H, j, q(Zp)), c = [], x = 0; x < Z.length; x++) {
                        var L = Z[x], p = L.length;
                        if (p > 1) {
                            var i = L[0];
                            c.push(i.x, i.y, i.z);
                            for (var o = 1; p - 1 > o; o++) i = L[o], c.push(i.x, i.y, i.z), c.push(i.x, i.y, i.z);
                            i = L[p - 1], c.push(i.x, i.y, i.z)
                        }
                    }
                    var W, g, Q, m = q(e + ".color"), T = q(s), O = 0;
                    return T && (g = q(s + ".color"), W = q(s + ".pattern"), O = q(s + ".offset"), Q = m), lc(y.gv, y.data, c, g || m, Q ? t : q(e + ".gradient.color"), U, W || q(e + ".pattern"), O, Q), Z
                }, L.createTubeModel = function (e, j, h, W) {
                    for (var s = this, f = s.s, q = f("shape3d.side") || ij, z = f("shape3d.start.angle"), J = f("shape3d.sweep.angle"), M = f(qs) ? f("shape3d.top.cap") : t, c = f(Hq) ? f("shape3d.bottom.cap") : t, k = "flat" === M, I = "flat" === c, V = k && (W ? W.uv : f("shape3d.top.image")), $ = I && (W ? W.uv : f("shape3d.bottom.image")), d = W ? W.uv : f("shape3d.image"), a = {
                        vs: [],
                        uv: d ? [] : t,
                        top_vs: k ? [] : t,
                        top_uv: V ? [] : t,
                        bottom_vs: I ? [] : t,
                        bottom_uv: $ ? [] : t
                    }, T = Hj(e, j, f(Zp), h), Z = 0, L = T.length; L > Z; Z++) Cm(a, T[Z], f(Xe), h, q, z, J, M, c);
                    if (W) {
                        var R = [];
                        Wn(s.gv, s.data, a, s, s.getBodyColor(), [], W, R), R.length && (Kd(W.vs, R), Kd(W.ns, Se(R)))
                    } else s.shapeModel = a;
                    return T
                }, L.getCache = function () {
                    var C = this.info;
                    if (C) {
                        var D = C.list;
                        if (D) {
                            var J = C.cache;
                            return J || (J = C.cache = Le(D)), J
                        }
                    }
                    return t
                }
            }
        });
        var vs = function ($, B) {
            for (var X, Z = 0, P = $.length, K = 0, Q = P - 1; Q >= K;) if (Z = I(K + (Q - K) / 2), X = $[Z].length - B, 0 > X) K = Z + 1; else {
                if (!(X > 0)) {
                    Q = Z;
                    break
                }
                Q = Z - 1
            }
            Z = Q;
            var S = $[Z], y = S.point;
            return Z === P - 1 || S.length === B || (y = (new xi).subVectors($[Z + 1].point, y).normalize().multiplyScalar(B - S.length).add(y)), {
                point: y,
                tangent: S.tangent
            }
        }, Le = function (s) {
            for (var F, P, c = [], S = 0, u = 0; u < s.length; u++) {
                for (var d = s[u], E = 0; E < d.length; E++) {
                    F = d[E], P && (S += P.distanceTo(F));
                    var q = new xi, H = d[E + 1];
                    H ? q.subVectors(H, F) : P ? q.subVectors(F, P) : q.x = 1, q.normalize(), c.push({
                        point: F,
                        length: S,
                        tangent: q
                    }), P = F
                }
                P = null
            }
            return c
        }, Hj = function (P, i, Q, Y) {
            Q = Q || hq;
            for (var h = [], V = 0, n = P.size(); n > V; V++) {
                var b = P.get(V);
                h.push(new xi(b.x, b.e || 0, b.y))
            }
            Qe(i) && (i = i._as);
            for (var a, H, K, W, G, J = [], r = 0, X = 0, d = i ? i.length : n; d > X; X++) if (G = i ? i[X] : 0 === X ? 1 : 2, 1 === G) J.push(K = []), K.push(h[r++]); else if (2 === G || 5 === G) if (W = 2 === G ? h[r++] : K[0], Y) {
                var $ = i ? i[X + 1] : d > X + 1 ? 2 : t;
                if (2 === $ || 5 === $) {
                    var m = K[K.length - 1], B = 2 === $ ? h[r] : K[0], k = (new xi).subVectors(m, W),
                        D = (new xi).subVectors(B, W), q = k.length(), w = D.length();
                    if (Y > q / 2 && Y > w / 2) K.push(W); else for (k.multiplyScalar(_(Y, q / 2) / q).add(W), D.multiplyScalar(_(Y, w / 2) / w).add(W), a = new Og(k, W, D).getPoints(Q), H = 0; Q >= H; H++) K.push(a[H])
                } else K.push(W)
            } else K.push(W); else if (3 === G) for (a = new Og(K[K.length - 1], h[r++], h[r++]).getPoints(Q), H = 1; Q >= H; H++) K.push(a[H]); else if (4 === G) for (a = new aj(K[K.length - 1], h[r++], h[r++], h[r++]).getPoints(Q), H = 1; Q >= H; H++) K.push(a[H]);
            return J
        }, Sk = function (j) {
            for (var R, S, L = new xi, T = [], f = [], P = [], W = 0, w = j.length; w > W; W++) R = j[W], S = j[W + 1], S ? L.subVectors(S, R) : L.subVectors(R, j[W - 1]), T.push(L.normalize().clone());
            var D, e, n, m, k = new xi, _ = new xi, C = new Co, s = 1e-4, g = Number.MAX_VALUE, M = T[0],
                U = f[0] = new xi, c = P[0] = new xi;
            for (e = G(M.x), n = G(M.y), m = G(M.z), g >= e && (g = e, k.set(1, 0, 0)), g >= n && (g = n, k.set(0, 1, 0)), g >= m && k.set(0, 0, 1), _.crossVectors(M, k).normalize(), U.crossVectors(M, _), c.crossVectors(M, U), W = 1; w > W; W++) f[W] = f[W - 1].clone(), P[W] = P[W - 1].clone(), _.crossVectors(T[W - 1], T[W]), _.length() > s && (_.normalize(), D = u(qe(T[W - 1].dot(T[W]), -1, 1)), f[W].applyMatrix4(C.makeRotationAxis(_, D))), P[W].crossVectors(T[W], f[W]);
            return {B: P, T: T, N: f}
        }, Cm = function () {
            var y = function (n) {
                for (var f = 1; f < arguments.length; f++) {
                    var r = arguments[f];
                    n.push(r.x, r.y, r.z)
                }
            }, R = function (t) {
                for (var E = 1; E < arguments.length; E++) {
                    var c = arguments[E].uv;
                    t.push(c[0], c[1])
                }
            }, C = function (R, Z, S, e, M) {
                var Y = -e * m(M), P = e * H(M);
                return new xi(R.x + Y * S.x + P * Z.x, R.y + Y * S.y + P * Z.y, R.z + Y * S.z + P * Z.z)
            }, N = function (S, f, y, E, N, A, R, Q) {
                R = R || n;
                for (var M = [], T = R / N, q = 0; N >= q; q++) {
                    var F = C(S, f, y, E, q * T + A);
                    M.push(F), Q != t && (F.uv = [Q, q / N])
                }
                return M
            }, L = function (F, S, v, R, Z, D, i, p, A) {
                A = A || n;
                var h = S ? F.top_vs : F.bottom_vs;
                if (h) for (var q = S ? F.top_uv : F.bottom_uv, l = A / i, j = 0; i > j; j++) {
                    var z, Q;
                    S ? (z = j * l + p, Q = (j + 1) * l + p) : (Q = j * l + p, z = (j + 1) * l + p), y(h, C(v, R, Z, D, z), C(v, R, Z, D, Q), v), q && q.push(.5 - .5 * m(z), .5 - .5 * H(z), .5 - .5 * m(Q), .5 - .5 * H(Q), .5, .5)
                }
            };
            return function (P, o, W, M, _, G, Z, C, j) {
                var T = o.length;
                if (T > 1) {
                    var d, K, b, e, h, Y, p, B = Sk(o), i = B.T, v = B.N, E = B.B;
                    "flat" === C && L(P, !0, o[0], E[0], v[0], M, _, G, Z), "flat" === j && L(P, !1, o[T - 1], E[T - 1], v[T - 1], M, _, G, Z);
                    var X, z, m = [], H = c(_ / 2), S = "round" === C, F = "round" === j, u = o[0], n = i[0], A = E[0],
                        I = v[0], Q = o[T - 1], U = i[T - 1], q = E[T - 1], J = v[T - 1];
                    if (S) {
                        for (b = 1; H >= b; b++) v.splice(0, 0, I), E.splice(0, 0, A), i.splice(0, 0, n), z = -b / H * M, o.splice(0, 0, n.clone().multiplyScalar(z).add(u)), m[H - b] = g(M * M - z * z);
                        T += H
                    }
                    if (F) {
                        for (b = 1; H >= b; b++) v.push(J), E.push(q), i.push(U), z = b / H * M, o.push(U.clone().multiplyScalar(z).add(Q)), m[o.length - 1] = g(M * M - z * z);
                        T += H
                    }
                    if (P.uv) {
                        var x = 0, V = 0, r = [];
                        for (W && (x = W), h = o[0], r[0] = 0, b = 1; T > b; b++) e = o[b], r[b] = h.distanceTo(e), h = e, W || (x += r[b]);
                        for (X = [], b = 0; T > b; b++) V += r[b], X[b] = x ? V / x : 0
                    }
                    for (b = 0; T > b; b++) {
                        if (e = o[b], Y = E[b], p = v[b], d = N(e, Y, p, m[b] === f ? M : m[b], _, G, Z, X ? X[b] : t), K) for (var w = 0; _ > w; w++) {
                            var O = K[w], l = K[w + 1] || K[0], $ = d[w], a = d[w + 1] || d[0];
                            y(P.vs, l, O, $, $, a, l), P.uv && R(P.uv, l, O, $, $, a, l)
                        }
                        K = d
                    }
                }
            }
        }();
        Cf(N, {
            getLineLength: function (K) {
                return K[K.length - 1].length
            }, getLineOffset: function (Q, n) {
                return vs(Q, n)
            }, getLineCacheInfo: function (j, w, b, e) {
                return Le(Hj(j, w, b, e))
            }
        });
        var Cq = U.Light = function () {
            Ge(Cq, this), this.s(hg, E[hg]), this.s(Ic, "sphere"), this.s3(20, 20, 20)
        };
        ps("Light", as, {
            _image: "light_icon", _icon: "light_icon", onStyleChanged: function (c, a, X) {
                Cq.superClass.onStyleChanged.apply(this, arguments), c === hg && this.s("shape3d.color", X)
            }
        });
        var Fg = se.Graph3dView = function (r, n) {
            var G = this;
            G._attributes = n || N.graph3dViewAttributes, G._25I = {}, G._view = Qj(1, G);
            var E = G._canvas = ns(G._view);
            E.addEventListener("webglcontextlost", function (z) {
                z.preventDefault(), yh(G), G._26I = t, G._1o.texture = t, G._35O = !0
            }, !1), E.addEventListener("webglcontextrestored", function () {
                G._35O = !1, G.iv()
            }, !1), G._34O = {}, G._33O = {}, G._wireframeIndexMap = {}, G._wireframeModelMap = {}, G._polylineIndexMap = {}, G._polylineIndexMap = {}, G._8O = [], G._7O = Tq(), G._6O = Tq(), G._1o = new le(G), G._30O = new Jr(G), G._31O = new Xf(G), G._32O = new Mj(G), G._33Q = !0, G._eye = us(N.graph3dViewEye), G._center = us(N.graph3dViewCenter), G._up = us(N.graph3dViewUp), G._lightChanged = !1, G._59O = [], G._spots = [], G._dirs = [], G.dm(r ? r : new Xl), G.setInteractors([new Ug(G)])
        }, So = {
            fogDisabled: 1,
            dashDisabled: 1,
            batchColorDisabled: 1,
            batchBlendDisabled: 1,
            batchBrightnessDisabled: 1
        };
        _q("Graph3dView", z, {
            ms_v: 1,
            ms_tip: 1,
            ms_gv: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _51o: 1,
            ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", Gb, Di, "firstPersonMode", fc, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", be, Xh, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
            _editable: !1,
            _devicePixelRatio: f,
            _boundaries: f,
            _moveStep: N.graph3dViewMoveStep,
            _rotateStep: N.graph3dViewRotateStep,
            _pannable: N.graph3dViewPannable,
            _rotatable: N.graph3dViewRotatable,
            _walkable: N.graph3dViewWalkable,
            _resettable: N.graph3dViewResettable,
            _zoomable: N.graph3dViewZoomable,
            _firstPersonMode: N.graph3dViewFirstPersonMode,
            _mouseRoamable: N.graph3dViewMouseRoamable,
            _gridVisible: N.graph3dViewGridVisible,
            _gridSize: N.graph3dViewGridSize,
            _gridGap: N.graph3dViewGridGap,
            _gridColor: N.graph3dViewGridColor,
            _originAxisVisible: N.graph3dViewOriginAxisVisible,
            _centerAxisVisible: N.graph3dViewCenterAxisVisible,
            _axisXColor: N.graph3dViewAxisXColor,
            _axisYColor: N.graph3dViewAxisYColor,
            _axisZColor: N.graph3dViewAxisZColor,
            _ortho: N.graph3dViewOrtho,
            _orthoWidth: N.graph3dViewOrthoWidth,
            _fovy: N.graph3dViewFovy,
            _near: N.graph3dViewNear,
            _far: N.graph3dViewFar,
            _headlightColor: N.graph3dViewHeadlightColor,
            _headlightIntensity: N.graph3dViewHeadlightIntensity,
            _headlightRange: N.graph3dViewHeadlightRange,
            _headlightDisabled: N.graph3dViewHeadlightDisabled,
            _rectSelectable: N.graph3dViewRectSelectable,
            _rectSelectBackground: N.graph3dViewRectSelectBackground,
            _editSizeColor: N.graph3dViewEditSizeColor,
            _autoMakeVisible: Sg,
            _fogDisabled: N.graph3dViewFogDisabled,
            _fogColor: N.graph3dViewFogColor,
            _fogNear: N.graph3dViewFogNear,
            _fogFar: N.graph3dViewFogFar,
            _dashDisabled: N.graph3dViewDashDisabled,
            _batchColorDisabled: N.graph3dViewBatchColorDisabled,
            _batchBlendDisabled: N.graph3dViewBatchBlendDisabled,
            _batchBrightnessDisabled: N.graph3dViewBatchBrightnessDisabled,
            setEye: function (B, M, $) {
                1 === arguments.length && (M = B[1], $ = B[2], B = B[0]);
                var d = this._eye;
                d[0] = B, d[1] = M, d[2] = $, this.fp(be, t, d)
            },
            setCenter: function (u, j, O) {
                1 === arguments.length && (j = u[1], O = u[2], u = u[0]);
                var o = this._center;
                o[0] = u, o[1] = j, o[2] = O, this.fp(Xh, t, o)
            },
            setUp: function (u, L, V) {
                1 === arguments.length && (L = u[1], V = u[2], u = u[0]);
                var A = this._up;
                A[0] = u, A[1] = L, A[2] = V, this.fp("up", t, A)
            },
            isTransparentMask: function (H) {
                return H.s("transparent.mask")
            },
            getAspect: function () {
                var e = this, C = e._aspect;
                return C ? C : e.getWidth() / e.getHeight()
            },
            getCanvas: function () {
                return this._canvas
            },
            setDataModel: function (o) {
                var d = this, I = d._dataModel, U = d._selectionModel;
                I !== o && (I && (I.umm(d.handleDataModelChange, d), I.umd(d.handleDataPropertyChange, d), U || I.sm().ums(d.handleSelectionChange, d)), d._dataModel = o, o.mm(d.handleDataModelChange, d), o.md(d.handleDataPropertyChange, d), U ? U._21I(o) : o.sm().ms(d.handleSelectionChange, d), d.invalidateAll(!0), d.invalidateLight(), d.fp(ec, I, o))
            },
            handleDataPropertyChange: function (q) {
                var N = q.data;
                this.invalidateData(N), rc(N) && "s:light.type" === q.property && this.invalidateLight()
            },
            invalidateLight: function () {
                this._lightChanged || (this._lightChanged = !0, this.iv())
            },
            onPropertyChanged: function (U) {
                var O = this, j = U.property;
                O.iv(), O._18Q = t, "eye" === j ? O._33Q = !0 : "devicePixelRatio" === j ? O._42(t, O._devicePixelRatio || hn) : So[j] && yh(O)
            },
            _5O: function (r) {
                var C = r._22Q();
                return C ? new C(this, r) : t
            },
            getData3dUI: function (i) {
                var X = this._25I[i._id];
                return X === f && (X = this._5O(i), this._25I[i._id] = X), X
            },
            invalidateAll: function (E) {
                var I = this;
                if (E) {
                    for (var T in I._25I) {
                        var $ = I._25I[T];
                        $ && $.dispose()
                    }
                    I._25I = {}, I.iv(), gb(I)
                } else I.dm().each(function (a) {
                    I.invalidateData(a)
                })
            },
            invalidateSelection: function () {
                var x = this;
                x.sm().each(function (L) {
                    x.invalidateData(L)
                })
            },
            invalidateData: function ($) {
                var k = this, c = k.getData3dUI($);
                c && (c.iv(), k.iv()), gb(k, $)
            },
            getShape3dText: function (_) {
                return _.getStyle("shape3d.text") || this.getLabel(_)
            },
            invalidateBatch: function (H) {
                var g = this, a = g._33O, e = a[H], q = [], C = {};
                if (e) {
                    e.ds.forEach(function (a) {
                        var E = g.getData3dUI(a);
                        E && E.iv(), delete g._34O[a._id], q.push(a._id)
                    }), delete a[H];
                    for (var U, z, F, W, j, k, m, t, b, P = 0; 2 > P; P++) {
                        var D = g[["_wireframeModelMap", "_polylineModelMap"][P]],
                            K = g[["_wireframeIndexMap", "_polylineIndexMap"][P]];
                        for (C = {}, t = 0; t < q.length; t++) {
                            var d = K[q[t]];
                            if (d) {
                                delete K[q[t]], b = d.batch, U = D[b];
                                var S = d.begin, o = d.size, Y = 3 * S, x = 3 * o, u = 4 * S, p = 4 * o;
                                for (z = U.ds, F = U.vs, W = U.cs, j = U.ps, k = U.ls, m = d.index, U.invalidate = !0, z[m] = f, m = Y; Y + x > m; m++) F[m] = f;
                                for (m = u; u + p > m; m++) W[m] = f;
                                for (m = u; u + p > m; m++) j[m] = f;
                                if (k) for (m = Y; Y + x > m; m++) k[m] = f;
                                C[b] = !0
                            }
                        }
                        for (b in C) {
                            U = D[b], z = U.ds, F = U.vs, W = U.cs, j = U.ps, k = U.ls;
                            var h = [];
                            for (m = 0; m < z.length; m++) z[m] !== f && h.push(z[m]);
                            if (0 === h.length) delete D[b]; else {
                                for (U.ds = h, h = [], m = 0; m < F.length; m++) F[m] !== f && h.push(F[m]);
                                for (U.vs = h, h = [], m = 0; m < W.length; m++) W[m] !== f && h.push(W[m]);
                                for (U.cs = h, h = [], m = 0; m < j.length; m++) j[m] !== f && h.push(j[m]);
                                if (U.ps = h, k) {
                                    for (h = [], m = 0; m < k.length; m++) k[m] !== f && h.push(k[m]);
                                    U.ls = h
                                }
                            }
                        }
                    }
                    g.iv()
                }
            },
            handleDataModelChange: function (f) {
                var L = this, G = f.kind, j = f.data;
                if ("add" === G) L.invalidateData(j), to(j) && j.getEdgeGroup() && j.getEdgeGroup().eachSiblingEdge(L.invalidateData, L), rc(j) && L.invalidateLight(); else if (G === Ad) {
                    var F = j._id, k = L._25I[F];
                    k && (k.dispose(), delete L._25I[F], L.iv()), j === L._currentSubGraph && L.setCurrentSubGraph(t), gb(L, j), rc(j) && L.invalidateLight()
                } else G === fj && (L.invalidateAll(!0), L.setCurrentSubGraph(t), gb(L), L.invalidateLight())
            },
            toCanvas: function (K) {
                var a = this, _ = a.getGL();
                if (a.validate(), K) {
                    var D = _.getParameter(_.COLOR_CLEAR_VALUE);
                    qm(_, K)
                }
                a._42(t, 1);
                var U = a.getWidth(), r = a.getHeight(), S = new Uint8Array(4 * U * r), g = ns(),
                    s = g.getContext("2d");
                _.readPixels(0, 0, U, r, _.RGBA, _.UNSIGNED_BYTE, S), ed(g, U, r, 1);
                for (var T = s.getImageData(0, 0, U, r), p = T.data, f = 0; f < p.length; f += 4) {
                    var V = f / 4, X = I(V / U), B = V - X * U;
                    V = 4 * ((r - 1 - X) * U + B), p[V] = S[f], p[V + 1] = S[f + 1], p[V + 2] = S[f + 2], p[V + 3] = S[f + 3]
                }
                return s.putImageData(T, 0, 0), K && qm(_, D), a._42(t, a._devicePixelRatio || hn), g
            },
            toDataURL: function (H, k) {
                var N = this, B = N.getGL();
                if (N.validate(), H) {
                    var x = B.getParameter(B.COLOR_CLEAR_VALUE);
                    qm(B, H)
                }
                N._42(t, 1);
                var Q = N._canvas.toDataURL(k || "image/png", 1);
                return H && qm(B, x), N._42(t, N._devicePixelRatio || hn), Q
            },
            getGL: function () {
                var R = this, U = R._26I, I = R._prg;
                if (!U) try {
                    R._2O = {}, U = R._26I = R._canvas.getContext("webgl", R._attributes) || R._canvas.getContext("experimental-webgl", R._attributes), U._emptyTexture = Nb(U), R._buffer = {
                        vs: tl(U),
                        ns: tl(U),
                        is: tl(U),
                        uv: tl(U),
                        batchColor: tl(U),
                        batchBlend: tl(U),
                        batchBrightness: tl(U),
                        lineDistance: tl(U)
                    }, R._1O = _h(U);
                    var r = R._cube = {vs: tl(U), ns: tl(U), is: tl(U), uv: tl(U)};
                    Hb(U, r.vs, Rc), Hb(U, r.ns, xl), Hb(U, r.uv, mg), zi(U, r.is, Ld)
                } catch (m) {
                }
                if (U && !I) {
                    if (I = R._prg = U.createProgram(), !I) return t;
                    var i = R._dirs.length, g = R._spots.length, D = R._59O.length,
                        F = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
                    i && F.push("uDirColor", "uDirPosition"), g && F.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"), D && F.push("uPointColor", "uPointRange", "uPointPosition"), qm(U, [0, 0, 0, 0]), U.clearDepth(1), U.enable(U.DEPTH_TEST), U.depthFunc(U.LEQUAL), U.enable(U.BLEND), U.blendFunc(U.SRC_ALPHA, U.ONE_MINUS_SRC_ALPHA), Gp || (Wr = $r(Wr.substring(0, Wr.indexOf("^#"))), pf = $r(pf), Gp = !0);
                    var q = ["#define MAX_DIR " + i, "#define MAX_SPOT " + g, "#define MAX_POINT " + D, R._fogDisabled ? "" : "#define FOG", R._dashDisabled ? "" : "#define DASH", R._batchColorDisabled ? "" : "#define BATCHCOLOR", R._batchBlendDisabled ? "" : "#define BATCHBLEND", R._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"),
                        K = pq(U, I, U.VERTEX_SHADER, Wr.replace("PREFIX", q)),
                        n = pq(U, I, U.FRAGMENT_SHADER, pf.replace("PREFIX", q));
                    W ? F.push("aPosition") : (I.aPosition = 0, U.bindAttribLocation(I, 0, "aPosition")), U.linkProgram(I), F.forEach(function (M) {
                        I[M] = /^u/.test(M) ? U.getUniformLocation(I, M) : U.getAttribLocation(I, M)
                    }), U.useProgram(I), U.deleteShader(K), U.deleteShader(n)
                }
                return U
            },
            getBrightness: function (O) {
                var u = O.s("brightness"), L = this.isSelected(O) ? O.s("select.brightness") : t;
                return u == t ? L : L == t ? u : u * L
            },
            getWireframe: function (b) {
                var c = b.s("wf.visible"), n = b.s("wf.width");
                return c === !0 || n > 0 && "selected" === c && this.isSelected(b) ? {
                    color: b.s("wf.color"),
                    width: n,
                    "short": b.s("wf.short"),
                    mat: b.s("wf.mat")
                } : void 0
            },
            getBodyColor: function (Z) {
                return Z.s("body.color")
            },
            getMat: function (P) {
                return P.getMat ? P.getMat() : P.s("mat")
            },
            getFaceMat: function (P, e) {
                return P.getFaceMat ? P.getFaceMat(e) : P.s(e + ".mat")
            },
            getFaceBlend: function (_, n) {
                return _.s(n + ".blend") || _.s("all.blend")
            },
            getFaceColor: function (z, n) {
                return z.s(n + ".color") || z.s("all.color")
            },
            getFaceImage: function (Y, O) {
                return Y.s(O + ".image") || Y.s("all.image")
            },
            getFaceDiscardSelectable: function (W, C) {
                var Z = W.s(C + ".discard.selectable");
                return Z == t ? W.s("all.discard.selectable") : Z
            },
            getFaceUv: function (s, y) {
                return s.s(y + ".uv") || s.s("all.uv")
            },
            getFaceUvOffset: function (U, O) {
                return U.s(O + ".uv.offset") || U.s("all.uv.offset")
            },
            getFaceUvScale: function (Q, z) {
                return Q.s(z + ".uv.scale") || Q.s("all.uv.scale")
            },
            getFaceLight: function (S, E) {
                var T = S.s(E + ".light");
                return T == t ? S.s("all.light") : T
            },
            getFaceVisible: function (H, f) {
                var k = H.s(f + ".visible");
                return k == t ? H.s("all.visible") : k
            },
            getFaceOpacity: function (s, e) {
                var m = s.s(e + ".opacity");
                return m == t ? s.s("all.opacity") : m
            },
            getFaceTransparent: function (b, h) {
                var B = b.s(h + ".transparent");
                return B == t ? b.s("all.transparent") : B
            },
            getFaceReverseColor: function (X, T) {
                return X.s(T + ".reverse.color") || X.s("all.reverse.color")
            },
            getFaceReverseFlip: function (M, v) {
                var Y = M.s(v + ".reverse.flip");
                return Y == t ? M.s("all.reverse.flip") : Y
            },
            getFaceReverseCull: function (V, m) {
                var l = V.s(m + ".reverse.cull");
                return l == t ? V.s("all.reverse.cull") : l
            },
            getTextureMap: function () {
                return this._2O
            },
            deleteTexture: function (Z) {
                var s = this, d = s._2O[Z];
                d && (delete s._2O[Z], s.getGL().deleteTexture(d))
            },
            getTexture: function (z, X) {
                if (!z) return t;
                var d = this, U = d.getGL(), y = d._2O[z];
                if (!y) {
                    var K = nj(z);
                    if (K) if (K.tagName) {
                        if (K.dynamic) return _h(U, K, d._1O);
                        y = d._2O[z] = _h(U, K)
                    } else {
                        var H = ko(K, X), I = Rh(K, X);
                        if (H >= 1 && I >= 1) {
                            var e = Pl(H, I);
                            return _j(e, K, 0, 0, H, I, X, d), e.restore(), _h(U, jg, d._1O)
                        }
                    }
                }
                return y
            },
            redraw: function () {
                this.iv()
            },
            validateImpl: function () {
                var U = this;
                if (U._lightChanged) {
                    U._lightChanged = !1;
                    var X = [], K = [], z = [];
                    U.dm().each(function (C) {
                        if (rc(C)) {
                            var i = C.s("light.type");
                            i === $f ? X.push(C) : i === Ce ? K.push(C) : i === hr && z.push(C)
                        }
                    }), (X.length !== U._59O.length || K.length !== U._spots.length || z.length !== U._dirs.length) && yh(U), U._59O = X, U._spots = K, U._dirs = z
                }
                U._42(), U._1o.iv()
            },
            _42: function (Z, e) {
                var A = this;
                if (!A._35O && (!We || Tk(We))) {
                    var K, G;
                    Z && (Z instanceof as ? G = Z : K = Z);
                    var c = A._canvas, z = A.getWidth(), H = A.getHeight(), Y = A.getGL(), r = A._prg;
                    if (Y) {
                        if (e ? Z || ed(c, z, H, e) : (e = A._devicePixelRatio || hn, Z || z === c.clientWidth && H === c.clientHeight || ed(c, z, H, e)), Y.viewport(0, 0, z * e, H * e), A._81O = t, Y.clear(Y.COLOR_BUFFER_BIT | Y.DEPTH_BUFFER_BIT), Wl(Y, r.uBrightness, 1), Wl(Y, r.uOpacity, 1), Wl(Y, r.uPartOpacity, 1), Y._picking = !!Z, Wl(Y, r.uPick, !!Z), Wl(Y, r.uTexture, !1), Wl(Y, r.uFix, !1), Wl(Y, r.uTransparent, !1), Wl(Y, r.uBatchColor, !1), Wl(Y, r.uBatchBlend, !1), Wl(Y, r.uBatchBrightness, !1), Z || (zl(A, Y, r), A._fogDisabled || (Wl(Y, r.uFogColor, A._fogColor), Wl(Y, r.uFogNear, A._fogNear), Wl(Y, r.uFogFar, A._fogFar))), Bm(Y, r.aPosition), Bm(Y, r.aNormal), cd(Y, r.aUv), cd(Y, r.aBatchColor), cd(Y, r.aBatchBlend), cd(Y, r.aBatchBrightness), cd(Y, r.aLineDistance), Wl(Y, r.uPMatrix, rb(A)), Wl(Y, r.uViewMatrix, ge(A, A._7O)), G) {
                            var k = Y.getParameter(Y.COLOR_CLEAR_VALUE);
                            Y.clearColor(0, 0, 0, 0), Y.disable(Y.BLEND), cd(Y, r.aNormal), Hb(Y, A._cube.vs, t, r.aPosition), zi(Y, A._cube.is), nn(G, A, ur, 0), nn(G, A, Fe, 6), nn(G, A, Rl, 12), nn(G, A, ks, 18), nn(G, A, jh, 24), nn(G, A, Af, 30), Bm(Y, r.aNormal), qm(Y, k)
                        } else if (K) {
                            K.value = 2;
                            var k = Y.getParameter(Y.COLOR_CLEAR_VALUE);
                            Y.clearColor(0, 0, 0, 0), Y.disable(Y.BLEND), A._95I(Y, r, K), Bo(A, K), bq(A, A._polylineModelMap, K), bq(A, A._wireframeModelMap, K), Wl(Y, r.uTransparent, !0), A._95I(Y, r, K, !0), Bo(A, K, !0), bq(A, A._polylineModelMap, K, !0), bq(A, A._wireframeModelMap, K, !0), Wl(Y, r.uTransparent, !1), Y.disable(Y.DEPTH_TEST), A._30O._42(Y, r, K), Y.enable(Y.DEPTH_TEST), qm(Y, k)
                        } else Y.disable(Y.BLEND), A._31O._42(Y, r), A.drawSky(Y, r), A._95I(Y, r), Bo(A), bq(A, A._polylineModelMap), bq(A, A._wireframeModelMap), Y.enable(Y.BLEND), Y.depthMask(!1), Wl(Y, r.uTransparent, !0), A._95I(Y, r, t, !0), Bo(A, t, !0), bq(A, A._polylineModelMap, t, !0), bq(A, A._wireframeModelMap, t, !0), Wl(Y, r.uTransparent, !1), Y.depthMask(!0), Y.disable(Y.BLEND), Y.disable(Y.DEPTH_TEST), A._32O._42(Y, r), A._30O._42(Y, r), Y.enable(Y.DEPTH_TEST);
                        Hb(Y, t), zi(Y, t), A._33Q = !1
                    }
                }
            },
            _updateSkyBoxPosition: function (r) {
                if (this._skyBox && r && "eye" === r.property) {
                    var c = r.newValue;
                    this._skyBox.p3(c[0], c[1], c[2]), this.invalidateData(this._skyBox)
                }
            },
            setSkyBox: function (Y) {
                this._skyBox = Y, this.ump(this._updateSkyBoxPosition, this), this.invalidateAll(), Y && (this.mp(this._updateSkyBoxPosition, this), this._updateSkyBoxPosition())
            },
            drawSky: function (Q, K, h) {
                var C = this, J = C._skyBox;
                if (J) {
                    var l = C.getData3dUI(J);
                    l && l._42(Q, K, h, function () {
                        return !0
                    }), Q.clear(Q.DEPTH_BUFFER_BIT)
                }
            },
            _95I: function (e, O, V, L) {
                function y(J) {
                    if (n.isVisible(J) && (!q || X)) {
                        if (!V && n.isTransparentMask(J)) return;
                        var m = n.getData3dUI(J);
                        m && m._42(e, O, V, v)
                    }
                }

                var n = this, v = function (q) {
                    return L ? q : !q
                };
                n.sky && e.clear(e.DEPTH_BUFFER_BIT), n.dm().each(y)
            },
            getLogicalPoint: function (e) {
                return Xn(e, this._canvas)
            },
            getHitFaceInfo: function (p) {
                p.target && (p = this.lp(p));
                var J = this.getDataInfoAt(p);
                if (J) {
                    var d = this._1o.face(J.data, $c(p.x, p.y));
                    if (d) return {data: J.data, face: d}
                }
                return t
            },
            getDataAt: function (r) {
                var E = this.getDataInfoAt(r);
                return E ? E.data : t
            },
            getDataInfoAt: function (V, X) {
                return V.target && (V = this.lp(V)), this._1o.get($c(V.x, V.y, X), !0)
            },
            getDatasInRect: function (u) {
                return this._1o.get(u)
            },
            setEditable: function (t) {
                var z = this, h = z._editable;
                z._editable = t, this.fp(Tr, h, t)
            },
            isEditable: function (s) {
                var C = this;
                return C._editable ? Sb(s) ? s.s("3d.editable") ? C._editableFunc ? C._editableFunc(s) : !0 : !1 : !1 : !1
            },
            isSelectable: function (u) {
                return u.s("3d.selectable") && this.sm().isSelectable(u)
            },
            isMovable: function (W) {
                var Q = this;
                return to(W) && W.getStyle(bh) !== ro ? !1 : W.s("3d.movable") ? Q._movableFunc ? Q._movableFunc(W) : !0 : !1
            },
            isSizeEditable: function (c) {
                return Sb(c) ? this._sizeEditableFunc ? this._sizeEditableFunc(c) : !0 : !1
            },
            isRotationEditable: function (E) {
                return Sb(E) && E.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(E) : !0 : !1
            },
            handleDelete: function () {
                this._editable && this.removeSelection()
            },
            zoomIn: function (X) {
                this.setZoom(aq, X)
            },
            zoomOut: function (m) {
                this.setZoom(1 / aq, m)
            },
            setZoom: function (R, u) {
                if (1 !== R) {
                    var e = this;
                    if (e._ortho) return e.setOrthoZoom(R, u), void 0;
                    e._14o && e._14o.stop(!0);
                    var C = 1 / R, N = e._eye, Z = e._center, s = Z[0] + (N[0] - Z[0]) * C - N[0],
                        F = Z[1] + (N[1] - Z[1]) * C - N[1], n = Z[2] + (N[2] - Z[2]) * C - N[2];
                    if (!(Lb(N, Z) < e._moveStep && 1 > C)) {
                        if (u = Up(u)) {
                            var J = us(N);
                            return u.action = function (W) {
                                e.fi({kind: e._zooming ? "betweenZoom" : "beginZoom"}), e._zooming = 1, N[0] = J[0] + s * W, N[1] = J[1] + F * W, N[2] = J[2] + n * W, e.fp(be, t, N)
                            }, u._37o = function () {
                                delete e._14o, delete e._zooming, e.fi({kind: "endZoom"}), e.onZoomEnded()
                            }, e._14o = gm(u)
                        }
                        N[0] += s, N[1] += F, N[2] += n, e.fp(be, t, N)
                    }
                }
            },
            setOrthoZoom: function (L, T) {
                if (1 !== L) {
                    var Y = this;
                    Y._14o && Y._14o.stop(!0);
                    var p = Y._orthoWidth, S = p / L - p;
                    if (!(p < Y._moveStep && L > 1)) return (T = Up(T)) ? (T.action = function ($) {
                        Y.fi({kind: Y._zooming ? "betweenZoom" : "beginZoom"}), Y._zooming = 1, Y.setOrthoWidth(p + S * $)
                    }, T._37o = function () {
                        delete Y._14o, delete Y._zooming, Y.fi({kind: "endZoom"}), Y.onZoomEnded()
                    }, Y._14o = gm(T)) : (Y.setOrthoWidth(p / L), void 0)
                }
            },
            getPositionInfo: function (i) {
                var f = this, J = f._eye, O = f._center, R = f.getAspect(),
                    v = i ? ek(Uk(O, J, !0), Uk(i, J)) : Lb(J, O);
                if (f._ortho) {
                    var Z = f._orthoWidth;
                    return {length: v, height: Z / R, width: Z}
                }
                var e = 2 * Q(f._fovy / 2) * v;
                return {length: v, height: e, width: e * R}
            },
            getCenterInfo: function () {
                var P = this;
                return P._81O || (P._81O = P.getPositionInfo()), us(P._81O)
            },
            rotate: function (b, S, C, p) {
                var $ = this;
                if (b || S) {
                    p == t && (p = $._firstPersonMode), $._88O && $._88O.stop(!0);
                    var j = $._center, s = $._eye, l = $.getCenterInfo().length, y = p ? j : s, I = p ? s : j,
                        r = Uk(y, I), n = o(r[0], r[2]), W = o(g(r[0] * r[0] + r[2] * r[2]), r[1]), F = p ? Xh : be;
                    return p && (S = -S), (C = Up(C)) ? (C.action = function (J) {
                        $.fi({kind: $._rotating ? "betweenRotate" : "beginRotate"}), $._rotating = 1;
                        var K = n + b * J, p = W + S * J;
                        p = xo(p), r[0] = l * H(p) * H(K), r[1] = l * m(p), r[2] = l * H(p) * m(K), y[0] = I[0] + r[0], y[1] = I[1] + r[1], y[2] = I[2] + r[2], $.fp(F, t, y)
                    }, C._37o = function () {
                        delete $._88O, delete $._rotating, $.fi({kind: "endRotate"}), $.onRotateEnded()
                    }, $._88O = gm(C)) : (n += b, W += S, W = xo(W), r[0] = l * H(W) * H(n), r[1] = l * m(W), r[2] = l * H(W) * m(n), y[0] = I[0] + r[0], y[1] = I[1] + r[1], y[2] = I[2] + r[2], $.fp(F, t, y), void 0)
                }
            },
            pan: function (K, H, h, j) {
                if (K || H) {
                    var T = this;
                    j == t && (j = T._firstPersonMode), T._89O && T._89O.stop(!0);
                    var r = ge(T), F = [r[0] * K, r[4] * K, r[8] * K], f = [r[1] * H, r[5] * H, r[9] * H],
                        z = F[0] + f[0], B = F[1] + f[1], w = F[2] + f[2], n = T._center, N = T._eye;
                    if (j) {
                        var x = so(T.getBoundaries(), N[0], N[2], N[0] + z, N[2] + w, g(z * z + w * w));
                        z = x[0], w = x[1]
                    }
                    if (h = Up(h)) {
                        var i = us(N), J = us(n);
                        return h.action = function (x) {
                            T.fi({kind: T._panning ? "betweenPan" : "beginPan"}), T._panning = 1, n[0] = J[0] + z * x, n[1] = J[1] + B * x, n[2] = J[2] + w * x, N[0] = i[0] + z * x, N[1] = i[1] + B * x, N[2] = i[2] + w * x, T.fp(be, t, N), T.fp(Xh, t, n)
                        }, h._37o = function () {
                            delete T._89O, delete T._panning, T.fi({kind: "endPan"}), T.onPanEnded()
                        }, T._89O = gm(h)
                    }
                    n[0] += z, n[1] += B, n[2] += w, N[0] += z, N[1] += B, N[2] += w, T.fp(be, t, N), T.fp(Xh, t, n)
                }
            },
            walk: function (M, g, I) {
                if (M) {
                    var H = this;
                    I == t && (I = H._firstPersonMode), H._90O && H._90O.stop(!0);
                    var q = H._center, Q = H._eye, u = Uk(q, Q, !0);
                    if (I) {
                        var Y = so(H.getBoundaries(), Q[0], Q[2], Q[0] + u[0] * M, Q[2] + u[2] * M, G(M));
                        if (M = Lb(Y), !M) return;
                        u = [Y[0] / M, 0, Y[1] / M]
                    }
                    if (g = Up(g)) {
                        var e = us(Q), b = us(q);
                        return g.action = function (U) {
                            H.fi({kind: H._walking ? "betweenWalk" : "beginWalk"}), H._walking = 1;
                            var o = M * U;
                            Q[0] = e[0] + u[0] * o, Q[1] = e[1] + u[1] * o, Q[2] = e[2] + u[2] * o, q[0] = b[0] + u[0] * o, q[1] = b[1] + u[1] * o, q[2] = b[2] + u[2] * o, H.fp(be, t, Q), H.fp(Xh, t, q)
                        }, g._37o = function () {
                            delete H._90O, delete H._walking, H.fi({kind: "endWalk"}), H.onWalkEnded()
                        }, H._90O = gm(g)
                    }
                    Q[0] += u[0] * M, Q[1] += u[1] * M, Q[2] += u[2] * M, q[0] += u[0] * M, q[1] += u[1] * M, q[2] += u[2] * M, H.fp(be, t, Q), H.fp(Xh, t, q)
                }
            },
            handleScroll: function (a, F) {
                a.preventDefault();
                var S = this, o = S._moveStep;
                S.isFirstPersonMode() ? S.isPannable() && S.pan(0, F > 0 ? o : -o) : S.isZoomable() && S.setZoom(0 > F ? 1 / xj : xj)
            },
            handlePinch: function (G, m) {
                this.isZoomable() && this.setZoom(m > G ? 1 / Ip : Ip)
            },
            reset: function () {
                this.setCenter(N.graph3dViewCenter), this.setEye(N.graph3dViewEye), this.setUp(N.graph3dViewUp)
            },
            moveSelection: function (A, r, U) {
                var H, J = this, T = J.dm();
                T && (H = T.getHistoryManager()), H && H.beginInteraction(), Eo(this.sm().toSelection(this.isMovable, this), A, r, U), H && H.endInteraction()
            },
            getMoveMode: function (u, c) {
                var o = c.s("3d.move.mode");
                if (o) return o;
                var O = "88", k = "89", T = "90";
                return es(u) || Zn[O] && Zn[k] && Zn[T] ? "xyz" : Zn[O] && Zn[k] ? "xy" : Zn[O] && Zn[T] ? "xz" : Zn[k] && Zn[T] ? "yz" : Zn[O] ? "x" : Zn[k] ? "y" : Zn[T] ? "z" : "xz"
            },
            handleTick: function () {
                var z = this, v = !1, p = z._moveStep, w = p, s = !1, J = !0, b = z._rotateStep * (J ? -1 : 1);
                if (z.isWalkable() || (w = 0), z.isPannable() || (p = 0), z.isRotatable() || (b = 0), z._32Q) {
                    var M = (Im() - z._32Q) / 50;
                    w *= M, p *= M, b *= M
                }
                z._31Q && (Yb(z._31Q), delete z._31Q, delete z._32Q), Tm() && (v = !0, z.pan(-p, 0, s, J)), Ak() && (v = !0, z.pan(p, 0, s, J)), Gf() && (v = !0, es() ? z.pan(0, p, s, J) : z.walk(w, s, J)), Sn() && (v = !0, es() ? z.pan(0, -p, s, J) : z.walk(-w, s, J)), yf() && (v = !0, z.rotate(-b, 0, s, J)), ck() && (v = !0, z.rotate(b, 0, s, J)), Jb() && (v = !0, z.rotate(0, -b / 2, s, J)), Hd() && (v = !0, z.rotate(0, b / 2, s, J)), v && (z._32Q = Im(), z._31Q = io(z.handleTick, z))
            },
            handleKeyDown: function (I) {
                var p = this;
                !zp(I) && Li[I.keyCode] ? p.handleTick() : Zb(I) ? p.selectAll() : Xk(I) ? p.handleDelete(I) : Jg(I) && this.isResettable() && p.reset()
            },
            checkDoubleClickOnNote: function (F, L, h) {
                var m = this;
                if (h === lk) {
                    if (L.s("note.toggleable")) return L.s(Cg, !L.s(Cg)), m.fi({
                        kind: "toggleNote",
                        event: F,
                        data: L,
                        part: h
                    }), !0
                } else if (h === ds && L.s("note2.toggleable")) return L.s(is, !L.s(is)), m.fi({
                    kind: "toggleNote2",
                    event: F,
                    data: L,
                    part: h
                }), !0;
                return !1
            },
            checkDoubleClickOnRotation: function (t, x, N) {
                return N === Mb ? (x.setRotationX(0), !0) : N === no ? (x.setRotationY(0), !0) : N === Rk ? (x.setRotationZ(0), !0) : !1
            },
            onRotateEnded: function () {
            },
            onWalkEnded: function () {
            },
            toViewPosition: function (a) {
                var H = this, W = H.getWidth() / 2, Y = H.getHeight() / 2, V = H._18Q;
                return V || (V = rb(H), H._18Q = Dd(V, V, ge(H))), a = lb([a[0], a[1], a[2], 1], V), {
                    x: W + W * a[0] / a[3],
                    y: Y - Y * a[1] / a[3]
                }
            },
            getHitPosition: function ($, I, w) {
                var o = this, K = o.getWidth(), g = o.getHeight(), j = $.target ? o.lp($) : $, _ = j.x - K / 2,
                    A = j.y - g / 2, t = o.getCenterInfo(), T = ge(o);
                I = I ? I : [0, 0, 0], w = w ? w : [0, 1, 0], _ = _ / K * t.width, A = -1 * A / g * t.height;
                var v = [T[0] * _, T[4] * _, T[8] * _], W = [T[1] * A, T[5] * A, T[9] * A],
                    b = [v[0] + W[0], v[1] + W[1], v[2] + W[2]], n = o.getCenter(),
                    Y = Bp(o, I, w, [b[0] + n[0], b[1] + n[1], b[2] + n[2]]);
                return Y ? Y : [0, 0, 0]
            },
            getLineLength: function (L) {
                this.validate();
                var J = this.getData3dUI(L);
                if (J && J.getCache) {
                    var w = J.getCache();
                    if (w) return w[w.length - 1].length
                }
                return 0
            },
            getLineOffset: function (c, j) {
                var V = this.getData3dUI(c);
                if (V && V.getCache) {
                    var B = V.getCache();
                    if (B) return vs(B, j)
                }
                return t
            },
            isLabelVisible: function () {
                return !0
            },
            isNoteVisible: function () {
                return !0
            }
        });
        var ib = se.Interactor = function (o) {
            this.gv = o
        };
        _q("Interactor", z, {
            ms_listener: 1, getView: function () {
                return this.gv.getView()
            }, setUp: function () {
                this.addListeners()
            }, tearDown: function () {
                this.removeListeners()
            }
        });
        var Ug = se.DefaultInteractor = function (h) {
            Ge(Ug, this, [h])
        };
        _q("DefaultInteractor", ib, {
            handle_contextmenu: function (y) {
                Mh(y)
            }, handle_mousewheel: function (r) {
                this.gv.handleScroll(r, r.wheelDelta / 40)
            }, handle_DOMMouseScroll: function (D) {
                2 === D.axis && this.gv.handleScroll(D, -D.detail)
            }, handle_keydown: function (A) {
                this.gv.handleKeyDown(A)
            }, handle_mousedown: function (K) {
                this.handle_touchstart(K)
            }, handle_touchstart: function (n) {
                Mh(n);
                var i = this, a = i.gv, G = Kr(n), O = a.getDataInfoAt(n), M = O ? O.data : t, g = O ? O.part : t,
                    m = a.sm(), l = _b(n), h = zs(n);
                a.setFocus(n) && (i._62O = t, i._57I = t, M ? zp(n) ? m.co(M) ? m.rs(M) : m.as(M) : m.co(M) || m.ss(M) : G && (zp(n) ? a.isRectSelectable() && (i._62O = bo) : i._57I = Ql(n)), i._31Q && (Yb(i._31Q), delete i._31Q, delete i._32Q), i._62O || (a.isFirstPersonMode() && (es(n) || h > 2 ? i._62O = "pan" : a.isMouseRoamable() || w ? (i._62O = "roaming", i.foward = l && Kr(n), i._32Q = Im(), i._31Q = io(i.tick, i)) : G || (i._62O = "roaming")), i._62O || (G && l && mo[g] ? (i._62O = g, i.p3 = M.p3()) : G && l && Sb(M) && a.isSelected(M) && a.isMovable(M) ? (i._62O = "move", i.p3 = M.p3(), i.movedata = M) : w && (h > 2 ? i._62O = "pan" : 2 === h && (i.dist = Qp(n), i._62O = "pinch")))), i.point = a.lp(n), ls(i, n), tf(n) ? a.handleDoubleClick(n, M, g) : a.handleClick(n, M, g))
            }, tick: function () {
                var C = this, u = C.gv, P = u._moveStep;
                C.point && u.isWalkable() && (C._32Q && (P *= (Im() - C._32Q) / 50), u.walk(C.foward ? P : -P), C._32Q = Im(), C._31Q = io(C.tick, C))
            }, handle_mouseup: function ($) {
                this.handle_touchend($)
            }, handle_touchend: function (r) {
                var y = this._57I;
                y && (Lb(y, Ql(r)) <= 1 && this.gv.sm().cs(), this._57I = t)
            }, handleWindowMouseMove: function (F) {
                this.handleWindowTouchMove(F)
            }, handleWindowTouchMove: function (s) {
                var c, Q, R = this, b = R.gv, O = R._62O, A = R.point, q = b.dm(), Y = q.getHistoryManager(),
                    m = b.lp(s), e = m.x - A.x, C = m.y - A.y, v = -n * e / b.getWidth(), r = -n * C / b.getHeight();
                if ("roaming" === O) R.rotate(s, v / 2, r / 2); else if (O === Mb || O === no || O === Rk) Y && !b._86O && Y.beginInteraction(), b.fi({
                    kind: b._86O ? "betweenEditRotation" : "beginEditRotation",
                    event: s
                }), b._86O = 1, b.sm().each(function ($) {
                    if (Sb($) && b.isRotationEditable($)) {
                        var q = G(v) > G(r) ? v : r;
                        O === Mb ? $.setRotationX($.getRotationX() + q) : O === no ? $.setRotationY($.getRotationY() + q) : O === Rk && $.setRotationZ($.getRotationZ() + q)
                    }
                }); else if ("move" === O || mo[O]) {
                    O === kc || O === ts || O === mh ? (Y && !b._87O && Y.beginInteraction(), b.fi({
                        kind: b._87O ? "betweenEditSize" : "beginEditSize",
                        event: s
                    }), b._87O = 1) : (Y && !b._moving && Y.beginInteraction(), b.fi({
                        kind: b._moving ? "betweenMove" : "beginMove",
                        event: s
                    }), b._moving = 1);
                    var T, U = R.p3, o = b.getPositionInfo(U), L = ge(b);
                    T = O === mq ? "x" : O === Tp ? "y" : O === ag ? "z" : O === kc ? "sx" : O === ts ? "sy" : O === mh ? "sz" : b.getMoveMode(s, R.movedata), e = e / b.getWidth() * o.width, C = -1 * C / b.getHeight() * o.height;
                    var z, M, w = [L[0] * e, L[4] * e, L[8] * e], I = [L[1] * C, L[5] * C, L[9] * C], d = w[0] + I[0],
                        y = w[1] + I[1], g = w[2] + I[2], i = [U[0] + d, U[1] + y, U[2] + g], D = Uk(b.getEye(), i, !0);
                    if ("xyz" === T ? (z = i, b.moveSelection(d, y, g)) : "xz" === T ? (z = Bp(b, U, [0, 1, 0], i), z && b.moveSelection(z[0] - U[0], 0, z[2] - U[2])) : "xy" === T ? (z = Bp(b, U, [0, 0, 1], i), z && b.moveSelection(z[0] - U[0], z[1] - U[1], 0)) : "yz" === T ? (z = Bp(b, U, [1, 0, 0], i), z && b.moveSelection(0, z[1] - U[1], z[2] - U[2])) : "x" === T || "sx" === T ? (D[0] = 0, z = Bp(b, U, D, i), z && (M = z[0] - U[0], "x" === T ? b.moveSelection(M, 0, 0) : b.sm().each(function (V) {
                        Sb(V) && b.isSizeEditable(V) && (c = K(Ej, V.getWidth() + M), Q = c / V.getWidth(), V.setWidth(c), es(s) && (V.setHeight(V.getHeight() * Q), V.setTall(V.getTall() * Q)))
                    }))) : "y" === T || "sy" === T ? (D[1] = 0, z = Bp(b, U, D, i), z && (M = z[1] - U[1], "y" === T ? b.moveSelection(0, M, 0) : b.sm().each(function (r) {
                        Sb(r) && b.isSizeEditable(r) && (c = K(Ej, r.getTall() + M), Q = c / r.getTall(), r.setTall(c), es(s) && (r.setHeight(r.getHeight() * Q), r.setWidth(r.getWidth() * Q)))
                    }))) : ("z" === T || "sz" === T) && (D[2] = 0, z = Bp(b, U, D, i), z && (M = z[2] - U[2], "z" === T ? b.moveSelection(0, 0, M) : b.sm().each(function (E) {
                        Sb(E) && b.isSizeEditable(E) && (c = K(Ej, E.getHeight() + M), Q = c / E.getHeight(), E.setHeight(c), es(s) && (E.setTall(E.getTall() * Q), E.setWidth(E.getWidth() * Q)))
                    }))), !z) return;
                    R.p3 = z
                } else if (O === bo) {
                    var B = R.div;
                    B || (B = R.div = Ac(), lm(R.getView(), B), B.op = A, B.style.background = b.getRectSelectBackground()), b.fi({
                        kind: b._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
                        event: s
                    }), b._rectSelecting = 1, B.rect = Cc(B.op, m), ef(B, B.rect)
                } else if ("pinch" === O && 2 === zs(s)) {
                    b.fi({kind: b._pinching ? "betweenPinch" : "beginPinch", event: s}), b._pinching = 1;
                    var M = Qp(s);
                    b.handlePinch(M, R.dist), R.dist = M
                } else "pan" === O || es(s) ? R.pan(s, e, C) : b.isFirstPersonMode() || (Kr(s) ? R.rotate(s, v, r) : (R.pan(s, e, 0), b.isWalkable() && (b.fi({
                    kind: b._walking ? "betweenWalk" : "beginWalk",
                    event: s
                }), b._walking = 1, b.walk(C / b.getHeight() * b.getCenterInfo().height))));
                R.point = m
            }, pan: function (f, M, B) {
                var A = this.gv;
                if (A.isPannable()) {
                    var p = A.getCenterInfo(), y = M / A.getWidth() * p.width, $ = -1 * B / A.getHeight() * p.height;
                    A.fi({kind: A._panning ? "betweenPan" : "beginPan", event: f}), A._panning = 1, A.pan(-y, -$)
                }
            }, rotate: function (t, w, A) {
                var I = this.gv;
                I.isRotatable() && (I.fi({
                    kind: I._rotating ? "betweenRotate" : "beginRotate",
                    event: t
                }), I._rotating = 1, I.rotate(w, A))
            }, handleWindowMouseUp: function (y) {
                this.handleWindowTouchEnd(y)
            }, handleWindowTouchEnd: function (f) {
                var J = this, o = J.gv, g = o.dm(), L = g.getHistoryManager(), d = J.div;
                if (d) {
                    var l = o.getDatasInRect(d.rect);
                    if (!l.isEmpty()) {
                        var E = o.sm(), v = E.toSelection();
                        l.each(function (c) {
                            E.co(c) ? v.remove(c) : v.add(c)
                        }), E.ss(v)
                    }
                    An(d)
                }
                o._moving && (delete o._moving, o.fi({
                    kind: "endMove",
                    event: f
                }), o.onMoveEnded(), L && L.endInteraction()), o._panning && (delete o._panning, o.fi({
                    kind: "endPan",
                    event: f
                }), o.onPanEnded()), o._rotating && (delete o._rotating, o.fi({
                    kind: "endRotate",
                    event: f
                }), o.onRotateEnded()), o._86O && (delete o._86O, o.fi({
                    kind: "endEditRotation",
                    event: f
                }), L && L.endInteraction()), o._87O && (delete o._87O, o.fi({
                    kind: "endEditSize",
                    event: f
                }), L && L.endInteraction()), o._pinching && (delete o._pinching, o.fi({
                    kind: "endPinch",
                    event: f
                }), o.onPinchEnded()), o._rectSelecting && (delete o._rectSelecting, o.fi({
                    kind: "endRectSelect",
                    event: f
                }), o.onRectSelectEnded()), o._walking && (delete o._walking, o.fi({
                    kind: "endWalk",
                    event: f
                }), o.onWalkEnded()), J.dist = J.point = J._62O = J.p3 = J.movedata = J.div = J._57I = J._32Q = J._31Q = J.foward = t
            }
        });
        var le = function (G) {
            this.gv = G
        };
        zb(le, z, {
            _iv: !0, iv: function () {
                this._iv = !0
            }, face: function ($, y) {
                var X = this, C = X.gv.getGL();
                if (!C || !Sb($)) return t;
                var M = y.x, g = y.width, F = y.height, f = X.height - y.y - F, j = I(g / 2),
                    w = new Uint8Array(4 * g * F), P = 0;
                for (X.iv(), X.validate($), yd(C, X.frame), C.readPixels(M, f, g, F, C.RGBA, C.UNSIGNED_BYTE, w), yd(C, t), X.iv(); j >= P; P++) for (var d = j - P, _ = j + P, h = d; _ >= h; h++) for (var s = d; _ >= s; s++) if (h === d || h === _ || s === d || s === _) {
                    var c = Jj.m[w[4 * (h * g + s)]];
                    if (c) return c
                }
            }, get: function (e, D) {
                this.validate();
                var P = this, E = P.gv.getGL();
                if (!E) return t;
                var C, r, n = e.x, k = e.width, R = e.height, u = P.height - e.y - R, M = I(k / 2),
                    m = new Uint8Array(4 * k * R), f = 0, l = m.length, W = D ? t : new Gn, q = D ? t : {};
                if (yd(E, P.frame), E.readPixels(n, u, k, R, E.RGBA, E.UNSIGNED_BYTE, m), yd(E, t), D) {
                    for (; M >= f; f++) for (var b = M - f, T = M + f, A = b; T >= A; A++) for (var J = b; T >= J; J++) if ((A === b || A === T || J === b || J === T) && (C = P.info(m, 4 * (A * k + J)))) return C
                } else for (; l > f; f += 4) C = P.info(m, f), C && (r = C.data, q[r._id] || (W.add(r), q[r._id] = r));
                return W
            }, info: function (P, L) {
                return this.colorMap[(P[L] << 24) + (P[L + 1] << 16) + (P[L + 2] << 8) + P[L + 3]]
            }, validate: function (N) {
                var J = this, Z = J.gv, m = Z.getGL();
                if (m) {
                    var L = Z.getWidth(), E = Z.getHeight(), S = m.RGBA, U = m.TEXTURE_2D, z = m.RENDERBUFFER,
                        y = m.FRAMEBUFFER;
                    J.texture || (J.texture = _h(m), J.render = m.createRenderbuffer(), J.frame = m.createFramebuffer()), (J.width !== L || J.height !== E) && (Dp(m, J.texture), m.texImage2D(U, 0, S, L, E, 0, S, m.UNSIGNED_BYTE, t), pn(m, m.TEXTURE_MIN_FILTER, m.LINEAR), m.bindRenderbuffer(z, J.render), m.renderbufferStorage(z, m.DEPTH_COMPONENT16, L, E), yd(m, J.frame), m.framebufferTexture2D(y, m.COLOR_ATTACHMENT0, U, J.texture, 0), m.framebufferRenderbuffer(y, m.DEPTH_ATTACHMENT, z, J.render), Dp(m, t), m.bindRenderbuffer(z, t), yd(m, t), J.width = L, J.height = E), J._iv && (J._iv = !1, yd(m, J.frame), Z._42(N || (J.colorMap = {}), 1), yd(m, t))
                }
            }
        });
        var Xf = function (b) {
            this.gv = b
        };
        zb(Xf, z, {
            gap: 0, size: 0, _42: function (Z, O) {
                var L = this, T = L.gv, h = T._gridGap, y = T._gridSize;
                if (T._gridVisible) {
                    if (L.gap !== h || L.size !== y) {
                        for (var b = [], G = T._gridSize / 2, U = h * G, D = 0; 2 * G + 1 > D; D++) {
                            var J = 6 * D, c = 6 * (2 * G + 1) + J;
                            b[J] = -U, b[J + 1] = 0, b[J + 2] = -U + D * h, b[J + 3] = U, b[J + 4] = 0, b[J + 5] = -U + D * h, b[c] = -U + D * h, b[c + 1] = 0, b[c + 2] = -U, b[c + 3] = -U + D * h, b[c + 4] = 0, b[c + 5] = U
                        }
                        L.vs = new me(b), L.gap = h, L.size = y
                    }
                    Wp(T), bj(Z, O), hl(Z), qf(Z, O, 1, T._gridColor, T._buffer.vs, L.vs), cs(Z, 0, L.vs.length / 3, Z.LINES), jo(Z), Kj(Z, O)
                } else L.vs = L.gap = L.size = t
            }
        });
        var Mj = function (z) {
            this.gv = z
        };
        zb(Mj, z, {
            _42: function (C, g) {
                var H = this.gv, J = H._buffer.vs, z = H._axisXColor, V = H._axisYColor, G = H._axisZColor,
                    Y = H._originAxisVisible, Q = H._centerAxisVisible;
                if (Y || Q) {
                    var A = W ? C.TRIANGLES : C.TRIANGLE_FAN, M = C.LINES;
                    if (Wp(H), bj(C, g), hl(C), Y) {
                        var s = H.getCenterInfo(), E = _(s.width, s.height) / 5, R = .8 * E, K = .05 * E;
                        qf(C, g, 1.5, z, J, new me([0, 0, 0, E, 0, 0, R, K, 0, R, 0, K, R, -K, 0, R, 0, -K, R, K, 0, 0, 0, 0, 0, E, 0, K, R, 0, 0, R, K, -K, R, 0, 0, R, -K, K, R, 0, 0, 0, 0, 0, 0, E, K, 0, R, 0, K, R, -K, 0, R, 0, -K, R, K, 0, R])), cs(C, 0, 2, M), cs(C, 1, 6, A), qf(C, g, t, V), cs(C, 7, 2, M), cs(C, 8, 6, A), qf(C, g, t, G), cs(C, 14, 2, M), cs(C, 15, 6, A)
                    }
                    if (Q) {
                        var F = H._center, P = F[0], c = F[1], D = F[2], s = H.getPositionInfo(F);
                        E = _(s.width, s.height) / 20, qf(C, g, 1.5, z, J, new me([P, c, D, P + E, c, D, P, c, D, P, c + E, D, P, c, D, P, c, D + E])), cs(C, 0, 2, M), qf(C, g, t, V), cs(C, 2, 2, M), qf(C, g, t, G), cs(C, 4, 2, M)
                    }
                    jo(C), Kj(C, g)
                }
            }
        });
        var Jr = function (G) {
                this.gv = G
            }, mq = "edit_tx", Tp = "edit_ty", ag = "edit_tz", Mb = "edit_rx", no = "edit_ry", Rk = "edit_rz",
            kc = "edit_sx", ts = "edit_sy", mh = "edit_sz", mo = {};
        mo[mq] = 1, mo[Tp] = 1, mo[ag] = 1, mo[Mb] = 1, mo[no] = 1, mo[Rk] = 1, mo[kc] = 1, mo[ts] = 1, mo[mh] = 1, zb(Jr, z, {
            _42: function (V, N, A) {
                var f = this, x = f.gv, i = x.sm().ld();
                if (x.isEditable(i) && Sb(i) && (!x.isFirstPersonMode() || !x.isMouseRoamable() && !w)) {
                    Wp(x);
                    var t, z, a = x.isMovable(i), s = x.isRotationEditable(i), m = x.isSizeEditable(i),
                        D = x._axisXColor, r = x._axisYColor, o = x._axisZColor, B = x._editSizeColor,
                        J = x.getCenterInfo(), K = _(J.width, J.height) / 10, d = K / (A ? 5 : 10), h = .7 * K,
                        F = .4 * h, P = i.p3(), j = P[0], y = P[1], I = P[2];
                    t = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], a && f._17O(V, N, i, A, mq, D, t, [j, y - d, I, j + h, y - d, I, j + h, y, I, j + h, y, I, j, y, I, j, y - d, I, j, y - d, I + d, j + h, y - d, I + d, j + h, y - d, I, j + h, y - d, I, j, y - d, I, j, y - d, I + d]), z = j + h, m && f._17O(V, N, i, A, kc, B, t, [z, y - d, I, z + F, y - d, I, z + F, y, I, z + F, y, I, z, y, I, z, y - d, I, z, y - d, I + d, z + F, y - d, I + d, z + F, y - d, I, z + F, y - d, I, z, y - d, I, z, y - d, I + d]), z += F, s && f._17O(V, N, i, A, Mb, D, t, [z, y - d, I, z + F, y - d, I, z + F, y, I, z + F, y, I, z, y, I, z, y - d, I, z, y - d, I + d, z + F, y - d, I + d, z + F, y - d, I, z + F, y - d, I, z, y - d, I, z, y - d, I + d]), t = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], a && f._17O(V, N, i, A, Tp, r, t, [j, y, I, j, y + h, I, j - d, y + h, I, j - d, y + h, I, j - d, y, I, j, y, I, j, y, I, j, y, I - d, j, y + h, I - d, j, y + h, I - d, j, y + h, I, j, y, I]), z = y + h, m && f._17O(V, N, i, A, ts, B, t, [j, z, I, j, z + F, I, j - d, z + F, I, j - d, z + F, I, j - d, z, I, j, z, I, j, z, I, j, z, I - d, j, z + F, I - d, j, z + F, I - d, j, z + F, I, j, z, I]), z += F, s && f._17O(V, N, i, A, no, r, t, [j, z, I, j, z + F, I, j - d, z + F, I, j - d, z + F, I, j - d, z, I, j, z, I, j, z, I, j, z, I - d, j, z + F, I - d, j, z + F, I - d, j, z + F, I, j, z, I]), t = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], a && f._17O(V, N, i, A, ag, o, t, [j, y, I, j, y, I + h, j, y - d, I + h, j, y - d, I + h, j, y - d, I, j, y, I, j, y - d, I, j - d, y - d, I, j - d, y - d, I + h, j - d, y - d, I + h, j, y - d, I + h, j, y - d, I]), z = I + h, m && f._17O(V, N, i, A, mh, B, t, [j, y, z, j, y, z + F, j, y - d, z + F, j, y - d, z + F, j, y - d, z, j, y, z, j, y - d, z, j - d, y - d, z, j - d, y - d, z + F, j - d, y - d, z + F, j, y - d, z + F, j, y - d, z]), z += F, s && f._17O(V, N, i, A, Rk, o, t, [j, y, z, j, y, z + F, j, y - d, z + F, j, y - d, z + F, j, y - d, z, j, y, z, j, y - d, z, j - d, y - d, z, j - d, y - d, z + F, j - d, y - d, z + F, j, y - d, z + F, j, y - d, z])
                }
            }, _17O: function (m, H, s, M, v, a, w, V) {
                var Z = this.gv._buffer;
                Fn(m, H, M, !0, s, v), sn(m, H, t, !0, t, !0, t, !1), Wl(m, H.uDiffuse, a), Hb(m, Z.vs, new me(V), H.aPosition), Hb(m, Z.ns, new me(w), H.aNormal), hl(m), cs(m, 0, 12), jo(m), yo(m, H)
            }
        });
        var wr = function (r, P) {
            this.gv = r, this.s = function (x, z, H) {
                return z == t && (z = H), z == t ? P.getStyle(x) : Uo(z, P, r)
            }, this.data = P
        };
        zb(wr, z, {
            I3d: !0, ms_icons: 1, _iv: !0, iv: function () {
                this._iv = !0
            }, _42: function (W, j, s, T) {
                var f, U, k, C, I, o, e, M = this, r = M.gv, A = M.data, G = A._id, v = M.s("batch"), J = r._34O,
                    u = r._33O, R = r.isSelectable(A), g = r.getBrightness(A), B = g != t && 1 !== g;
                if (M._iv) {
                    if (k = xg(J, u, A, v), M.validate(k, v ? gk[v] || go : t), k && (C = J[G], I = C.size = k.vs.length / 3 - C.begin, e = k.rs)) for (g = B ? g : 1, o = 0; I > o; o++) e.push(g);
                    if (Sb(A)) {
                        var x = r.getWireframe(A);
                        x && Yg(r, A, x)
                    }
                    M.labelInfo = M.label2Info = M.noteInfo = M.note2Info = M._38o = t, M._24O(ri, "getLabel"), M._24O(Vp, "getLabel2"), M._26O(lk, "getNote"), M._26O(ds, "getNote2"), M._15O(), M._iv = !1
                }
                B && Wl(W, j.uBrightness, g), U = Fn(W, j, s, R, A, ei), U && (Jl(U, J[G], u), Jl(U, r._polylineIndexMap[G], r._polylineModelMap), Jl(U, r._wireframeIndexMap[G], r._wireframeModelMap)), J[G] || M._80o(W, j, T), r.isLabelVisible(A) && ((f = M.labelInfo) && (Fn(W, j, s, R, A, ri), M._28O(f, ri, T)), (f = M.label2Info) && (Fn(W, j, s, R, A, Vp), M._28O(f, Vp, T))), r.isNoteVisible(A) && ((f = M.noteInfo) && (Fn(W, j, s, R, A, lk), M._29O(f, lk, T)), (f = M.note2Info) && (Fn(W, j, s, R, A, ds), M._29O(f, ds, T))), (f = M._38o) && M._99O(W, j, f, s, R, T), B && Wl(W, j.uBrightness, 1)
            }, validate: function () {
            }, _16O: function () {
                return Fi
            }, _80o: function () {
            }, dispose: function () {
            }, getBodyColor: function (b) {
                var h = this.data, j = this.gv.getBodyColor(h);
                return j ? j : b ? h.getStyle(b) : t
            }, _24O: function (f, l) {
                var Y = this, d = Y.data, E = Y.gv, X = Y.s, u = E[l](d);
                if (u != t) {
                    var v = X(f + ".scale"), O = X(f + ".max"), B = Y[f + "Info"] = {
                        label: u,
                        textureScale: X(f + ".texture.scale"),
                        color: E[l + "Color"](d),
                        font: X(f + ".font"),
                        align: X(f + ".align"),
                        background: E[l + "Background"](d)
                    }, q = B.rect = lq(B, u);
                    O > 0 && O < q.width && (B.labelWidth = q.width, q.width = O), q.x = q.y = 0, q.width *= v, q.height *= v, B.mat = Y._16O(X(f + ".autorotate"), X(f + ".position"), q, X(f + ".face"), X(f + ".t3"), X(f + ".r3"), X(f + ".rotationMode"));
                    var s = q.width / 2, J = q.height / 2;
                    B.vs = new me([-s, J, 0, -s, -J, 0, s, -J, 0, s, J, 0]), q.width /= v, q.height /= v
                }
            }, _26O: function (e, Y) {
                var A = this, U = A.data, v = A.gv, S = A.s, E = v[Y](U);
                if (E != t) {
                    var R = S(e + ".scale"), g = this[e + "Info"] = {
                        note: E,
                        textureScale: S(e + ".texture.scale"),
                        expanded: S(e + ".expanded"),
                        font: S(e + ".font"),
                        color: S(e + ".color"),
                        align: S(e + ".align"),
                        borderWidth: S(e + ".border.width"),
                        borderColor: S(e + ".border.color"),
                        background: v[Y + "Background"](U)
                    };
                    if (g.expanded) {
                        var k = S(e + ".max"), m = lq(g, E);
                        m.width += 6, m.height += 2, k > 0 && k < m.width && (g.labelWidth = m.width, m.width = k);
                        var W = {x: -m.width / 2, y: -8 - m.height, width: m.width, height: m.height + 8}
                    } else W = {x: -6, y: -18, width: 12, height: 18};
                    g.mat = A._16O(S(e + ".autorotate"), S(e + ".position"), t, S(e + ".face"), S(e + ".t3"), S(e + ".r3"), S(e + ".rotationMode")), g.rect = W, 1 !== R && (W = us(W), W.x *= R, W.height *= R, W.y = -W.height, W.width *= R);
                    var L = W.x, c = W.y, w = W.width, q = W.height;
                    g.vs = new me([L, -c, 0, L, -c - q, 0, L + w, -c - q, 0, L + w, -c, 0])
                }
            }, _28O: function (Q, A, n) {
                if (n(this.s(A + ".transparent"))) {
                    var H = Q.rect, E = Q.textureScale, j = H.width * E, v = H.height * E;
                    if (j >= 1 && v >= 1) {
                        var f = Pl(j, v);
                        1 !== E && (f.translate(f, H.x, H.y), f.scale(E, E), f.translate(f, -H.x, -H.y)), Ab(f, Q), f.restore(), Ec(this, A, Q.mat, Q.vs, !0)
                    }
                }
            }, _29O: function (Q, D, x) {
                if (x(this.s(D + ".transparent"))) {
                    var G = Q.rect, O = Q.textureScale, B = G.x, q = G.y, L = G.width * O, H = G.height * O;
                    if (L >= 1 && H >= 1) {
                        G.x = G.y = 0;
                        var f = Pl(L, H);
                        1 !== O && f.scale(O, O), Rf(f, Q), f.restore(), G.x = B, G.y = q, Ec(this, D, Q.mat, Q.vs, !1)
                    }
                }
            }, _99O: function (H, $, N, R, l, G) {
                if (N) {
                    var e = this, Q = e.gv, u = e.data, z = Q._buffer, f = Q._1O, c = N.icons;
                    for (var P in c) {
                        var q = c[P], D = N.rects[P];
                        if (D && G(Uo(q.transparent, u, Q))) {
                            Fn(H, $, R, l, u, P);
                            var W = Uo(q.shape3d, u, Q), i = W ? [W] : Uo(q.names, u, Q), F = i ? i.length : 0,
                                d = Uo(q.textureScale, u, Q) || 1, T = Uo(q.light, u, Q);
                            T == t && (T = W ? !0 : !1), sn(H, $, Uo(q.blend, u, Q), T, Uo(q.opacity, u, Q), Uo(q.reverseFlip, u, Q), Uo(q.reverseColor, u, Q), Uo(q.reverseCull, u, Q));
                            for (var J = 0; F > J; J++) {
                                var O = i[J], K = D[J];
                                if (Ib(e, K.mat), W) Eb(Q, u, Mn(e, W), e); else {
                                    var U = nj(O);
                                    if (U) {
                                        var V = K.width * d, I = K.height * d;
                                        if (V >= 1 && I >= 1) {
                                            var j = Pl(V, I);
                                            Gi(j, U, Uo(q.stretch, u, Q), 0, 0, V, I, u, Q), j.restore(), _h(H, jg, f), hl(H, $, f, Uo(q.discardSelectable, u, Q), z.uv, uq), Hb(H, z.vs, K.vs, $.aPosition), Hb(H, z.ns, De, $.aNormal), zi(H, z.is, ad), Vo(H, 0, ad.length), jo(H, $, f)
                                        }
                                    }
                                }
                                Lo(Q)
                            }
                            yo(H, $)
                        }
                    }
                }
            }
        });
        var xf = function (v, M) {
            Ge(xf, this, [v, M])
        };
        zb(xf, wr, {
            _16O: function (s, h, q, K, k, N, W, I, T) {
                var r = this.data, O = Lc(h, r.s3(), q, K, I, T);
                return ep(Tq(), O, r.p3(), K, k, N, W, s, r.r3(), r.getRotationMode())
            }, clear: function () {
                var U = this;
                U.faceMat = U.mat = U.shapeModel = U.left = U.right = U.front = U.back = U.top = U.bottom = U.csg = t
            }, validate: function (n, C) {
                var K = this, h = K.gv, S = K.data, V = Mn(K),
                    y = Ko(S, h.getMat(S), V ? K.s("shape3d.scaleable") : !0);
                if (K.clear(), n) {
                    var Q = [];
                    V ? Wn(h, S, V, K, K.getBodyColor(), [y], n, Q) : (Sr(h, S, n, C, y, ur, Q, eq), Sr(h, S, n, C, y, Rl, Q, vd), Sr(h, S, n, C, y, jh, Q, Rm), Sr(h, S, n, C, y, Af, Q, Zg), Sr(h, S, n, C, y, Fe, Q, vm), Sr(h, S, n, C, y, ks, Q, qj)), Q.length && (Kd(n.vs, Q), Kd(n.ns, Se(Q)))
                } else K.mat = y, (K.shapeModel = V) || (K.vf(ur), K.vf(Rl), K.vf(Fe), K.vf(ks), K.vf(jh), K.vf(Af))
            }, vf: function (O) {
                var A = this;
                if (A.gv.getFaceVisible(A.data, O)) {
                    var _ = br(A, O);
                    return _.mat && (A.faceMat = !0), _
                }
            }, _80o: function (o, O, C) {
                var P = this, D = P.gv, $ = P.data, B = D._cube, W = P.shapeModel;
                Wp(D, P.mat), W ? Eb(D, $, W, P, P.getBodyColor(), C) : (Hb(o, B.vs, t, O.aPosition), Hb(o, B.ns, t, O.aNormal), zi(o, B.is), P._18O(o, O, P.left, 0, C), P._18O(o, O, P.front, 6, C), P._18O(o, O, P.right, 12, C), P._18O(o, O, P.back, 18, C), P._18O(o, O, P.top, 24, C), P._18O(o, O, P.bottom, 30, C)), Lo(D), P.faceMat && (P._18O(o, O, P.left, 0, C, !0), P._18O(o, O, P.front, 6, C, !0), P._18O(o, O, P.right, 12, C, !0), P._18O(o, O, P.back, 18, C, !0), P._18O(o, O, P.top, 24, C, !0), P._18O(o, O, P.bottom, 30, C, !0))
            }, _18O: function (X, Y, l, V, O, c) {
                if (l) {
                    if (!O(l.transparent)) return;
                    if (c && !l.mat || !c && l.mat) return;
                    c && Wp(this.gv, l.mat);
                    var b = this, Z = b.data, K = b.gv, J = K.getTexture(l.texture, Z), L = l.uv, S = l.uvScale,
                        e = l.uvOffset, E = l.discardSelectable;
                    if (J) if (L) {
                        for (var w = 8 * (V / 6), j = 0; 8 > j; j++) vc[w + j] = L[j];
                        hl(X, Y, J, E, K._buffer.uv, vc, e, S)
                    } else hl(X, Y, J, E, K._cube.uv, t, e, S); else hl(X);
                    sn(X, Y, l.blend, l.light, l.opacity, l.reverseFlip, l.reverseColor, l.reverseCull), Wl(X, Y.uDiffuse, l.color), Vo(X, V, 6), yo(X, Y), jo(X, Y, J), c && Lo(K)
                }
            }
        });
        var Hn = function (J, i) {
            Ge(Hn, this, [J, i])
        };
        zb(Hn, wr, {
            _25Q: 1, validate: function (K) {
                var I = this, U = I.gv, n = I.data, w = I.s, h = w("edge.width"), y = n._40I, $ = n._41I;
                if (I.shapeModel = I.info = t, y && $) {
                    var A, x, m, C, g, V, Y, q, Q, H, F = n.isLooped(), D = w(bh), v = N.getEdgeType(D);
                    if (v) {
                        var l = v(n, cq(I, U, n, F, D), U, I._19Q);
                        if (!l.points || l.points.isEmpty()) return;
                        V = I.info = {}, Y = l.segments, g = l.points, q = g.size();
                        for (var r = y.getElevation(), d = $.getElevation(), R = 0; q > R; R++) {
                            var S = g.get(R);
                            S.e == t && (S.e = r + (d - r) * R / (q - 1))
                        }
                        Q = _c(g.get(0)), H = _c(g.get(q - 1));
                        var o = q % 2;
                        0 === o ? (V.c1 = _c(g.get(q / 2 - 1)), V.c2 = _c(g.get(q / 2))) : V.p3 = _c(g.get((q - o) / 2)), V.s1 = Q, V.s2 = _c(g.get(1)), V.t1 = _c(g.get(q - 2)), V.t2 = H
                    } else {
                        g = new Gn, V = I.info = {};
                        var G = w("edge.offset"), z = w("edge.center"), E = w("edge.source.t3"),
                            u = w("edge.target.t3"), p = y.p3(), i = $.p3();
                        if (E && (p[0] += E[0], p[1] += E[1], p[2] += E[2]), u && (i[0] += u[0], i[1] += u[1], i[2] += u[2]), D === ro) {
                            Y = w("edge.segments");
                            var s = V.points = w(Nr) || Ne;
                            if (q = s.size()) {
                                Q = _c(s.get(0)), H = _c(s.get(q - 1)), !z && G && (m = Uk(Q, p, !0), G = _(G, Lb(p, Q)), p = [p[0] + m[0] * G, p[1] + m[1] * G, p[2] + m[2] * G], m = Uk(i, H, !0), G = _(G, Lb(H, i)), i = [i[0] - m[0] * G, i[1] - m[1] * G, i[2] - m[2] * G]);
                                var o = q % 2;
                                0 === o ? (A = _c(s.get(q / 2 - 1)), x = _c(s.get(q / 2))) : V.p3 = _c(s.get((q - o) / 2)), V.s1 = p, V.s2 = Q, V.t1 = H, V.t2 = i
                            } else !z && G && (m = Uk(i, p, !0), C = Lb(p, i), G = nh(G, C), p = [p[0] + m[0] * G, p[1] + m[1] * G, p[2] + m[2] * G], i = [i[0] - m[0] * G, i[1] - m[1] * G, i[2] - m[2] * G]), A = p, x = i;
                            g.add({x: p[0], y: p[2], e: p[1]}), g.addAll(s), g.add({x: i[0], y: i[2], e: i[1]})
                        } else {
                            var e = cq(I, U, n, F, D);
                            if (I._19Q || (e = -e), F) {
                                var L = p[0], M = p[1], W = p[2], J = y.getTall() / 2 + e;
                                A = [L - e, M + J, W], x = [L + e, M + J, W], g.add({
                                    x: L - e,
                                    y: W,
                                    e: M
                                }), g.add({x: L - e, y: W, e: M + J}), g.add({
                                    x: L + e,
                                    y: W,
                                    e: M + J
                                }), g.add({x: L + e, y: W, e: M})
                            } else {
                                m = Uk(i, p, !0), C = Lb(p, i);
                                var c = {x: p[0], y: p[2]}, X = {x: i[0], y: i[2]}, k = Ng(t, c, X, e), T = k.x - c.x,
                                    f = k.y - c.y;
                                G = nh(G, C), m[0] *= G, m[1] *= G, m[2] *= G, A = [p[0] + m[0] + T, p[1] + m[1], p[2] + m[2] + f], x = [i[0] - m[0] + T, i[1] - m[1], i[2] - m[2] + f], z ? (g.add({
                                    x: p[0],
                                    y: p[2],
                                    e: p[1]
                                }), g.add({x: A[0], y: A[2], e: A[1]}), g.add({
                                    x: x[0],
                                    y: x[2],
                                    e: x[1]
                                }), g.add({x: i[0], y: i[2], e: i[1]})) : (g.add({
                                    x: A[0],
                                    y: A[2],
                                    e: A[1]
                                }), g.add({x: x[0], y: x[2], e: x[1]}))
                            }
                        }
                        V.c1 = A, V.c2 = x
                    }
                    V.list = w(Ic) === oe ? I.createTubeModel(g, Y, h / 2, K) : I.createLineModel(g, Y, h, "edge", "edge.dash")
                }
            }
        });
        var Mi = function (F, z) {
            Ge(Mi, this, [F, z])
        };
        zb(Mi, xf, {
            _80o: function (B, V, J) {
                var c = this, r = c.gv, o = c.shapeModel;
                Wp(r, c.mat), o ? Eb(r, c.data, o, c, c.getBodyColor(), J) : (Lk(c, B, V, c.left, J), Lk(c, B, V, c.front, J), Lk(c, B, V, c.right, J), Lk(c, B, V, c.back, J), Lk(c, B, V, c.top, J), Lk(c, B, V, c.bottom, J)), Lo(r)
            }, validate: function (m, z) {
                var _, v, J = this, l = J.s, s = J.data, Z = s.p3(), h = s._thickness / 2, x = s.isClosePath(),
                    P = s.getPoints(), k = s.getSegments(), g = l(Zp), n = m && m.uv;
                if (J.clear(), 0 > h) v = J.shapeModel = Ki(P, k, l(qs), l(Hq), g, l(Xe), s.getTall(), s.getElevation(), x), l(ej) ? l("shape3d.image") || delete v.uv : (delete v.vs, delete v.ns, delete v.uv), l("shape3d.top.image") || delete v.top_uv, l("shape3d.bottom.image") || delete v.bottom_uv; else if (l(Ic) === oe) _ = ms(P, k, g, x), v = J.shapeModel = {vs: []}, l("shape3d.image") && (v.uv = [], v.sum = l(Xe) || ul(_) || 1, v.len = 0), l(qs) && !x && (v.top_vs = [], l("shape3d.top.image") && (v.top_uv = [])), l(Hq) && !x && (v.bottom_vs = [], l("shape3d.bottom.image") && (v.bottom_uv = [])), J._12O(_, h); else {
                    var V, N, Y, B, c, i, y, e, I, C;
                    _ = ms(P, k, g, x), c = J.vf(Fe, n, !1, z), h && (i = J.vf(ks, n, !1, z), y = x ? t : J.vf(ur, n, !1, z), e = x ? t : J.vf(Rl, n, !1, z), I = J.vf(jh, n, !1, z), C = J.vf(Af, n, !1, z)), h ? J._12O(_, h) : c && _.forEach(function (X) {
                        if (B = X.length, B > 0) for (V = X[0], Y = 1; B > Y; Y++) N = X[Y], J.addV(c.vs, V, N), V = N
                    }), J._20Q(_), m || (c && (c.ns = Se(c.vs), kg(c, "vs"), kg(c, td)), h && (i && (i.ns = Se(i.vs), kg(i, "vs"), kg(i, td)), y && (y.ns = Se(y.vs), kg(y, "vs"), kg(y, td)), e && (e.ns = Se(e.vs), kg(e, "vs"), kg(e, td)), I && (I.ns = Se(I.vs), kg(I, "vs"), kg(I, td)), C && (C.ns = Se(C.vs), kg(C, "vs"), kg(C, td))))
                }
                var W = J.mat = Tq();
                Ee(W, Z), Sp(W, s.r3(), s.getRotationMode()), Ee(W, Qn(Z)), m && (oj(J, W, m, v), J.clear())
            }, _20Q: function (O) {
                var z, f, H, p, k, R, I, K = this, d = K.front, T = K.back, V = K.top, m = K.bottom, c = d ? d.tuv : t,
                    F = T ? T.tuv : t, Y = V ? V.tuv : t, w = m ? m.tuv : t, L = 0;
                (c || F || Y || w) && (z = K.s(Xe) || ul(O) || 1, O.forEach(function (r) {
                    if (f = r.length, f > 0) for (R = r[0], H = 1; f > H; H++) I = r[H], p = L / z, L += Lb(R, I), k = L / z, K._14O(d, p, k), K._14O(T, 1 - k, 1 - p), K._14O(V, p, k), K._14O(m, p, k), R = I
                }))
            }, _14O: function (k, C, n) {
                if (k) {
                    var K = k.uv, d = k.tuv;
                    if (d) {
                        if (K) var y = K[0] + (K[6] - K[0]) * C, l = K[1] + (K[7] - K[1]) * C,
                            q = K[2] + (K[4] - K[2]) * C, m = K[3] + (K[5] - K[3]) * C, D = K[2] + (K[4] - K[2]) * n,
                            G = K[3] + (K[5] - K[3]) * n, P = K[0] + (K[6] - K[0]) * n,
                            $ = K[1] + (K[7] - K[1]) * n; else y = C, l = 0, q = C, m = 1, D = n, G = 1, P = n, $ = 0;
                        d.push(q, m, D, G, P, $, P, $, y, l, q, m)
                    }
                }
            }, _13O: function (x) {
                var d = x.uv, U = x.tuv;
                U && (d ? U.push(d[2], d[3], d[4], d[5], d[6], d[7], d[6], d[7], d[0], d[1], d[2], d[3]) : U.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
            }, _12O: function (a, e) {
                var B, c, o, P, g, d = this;
                a.forEach(function (N) {
                    if (g = N.length, g > 0) for (B = {
                        p: N[0],
                        n: !0
                    }, P = 1; g > P; P++) c = N[P], o = g - 1 > P ? N[P + 1] : t, d.addPoint(B, c, o, e, N)
                })
            }, addPoint: function (D, R, k, p, v) {
                var g, _, O, Y, E, B, W, w, j, H = this, N = D.p, V = D.f, e = D.b, x = H.s("shape3d.side") || ij,
                    u = H.s("shape3d.start.angle"), J = H.s("shape3d.sweep.angle"), o = H.shapeModel,
                    c = H.data.isClosePath();
                if (D.n && (D.n = !1, V = c && v.length > 2 ? Ng(v[v.length - 2], N, R, p) : Ng(t, N, R, p), e = Zq(N, V), o ? o.top_vs && H._10O(e, V, x, u, J, o.top_vs, o.top_uv) : (g = H.left) && (H.addV(g.vs, e, V), H._13O(g))), _ = k ? Ng(N, R, k, p) : c && v.length > 2 ? Ng(N, R, v[1], p) : Ng(N, R, t, p), O = Zq(R, _), o) {
                    var r, q, i = o.vs, S = o.uv, n = o.sum;
                    for (S && (r = o.len / n, o.len += Lb(N, R), q = o.len / n), B = H._9O(e, V, x, u, J), W = H._9O(O, _, x, u, J), w = 0; x > w; w++) j = w + 1, Kd(i, B[j]), Kd(i, W[w]), Kd(i, B[w]), Kd(i, W[w]), Kd(i, B[j]), Kd(i, W[j]), S && (Y = w / x, E = j / x, S.push(r, E, q, Y, r, Y, q, Y, r, E, q, E));
                    !k && o.bottom_vs && H._10O(O, _, x, u, J, o.bottom_vs, o.bottom_uv, !0)
                } else !k && (g = H.right) && (H.addV(g.vs, _, O), H._13O(g)), (g = H.front) && H.addV(g.vs, V, _), (g = H.back) && H.addV(g.vs, O, e), (g = H.top) && H.addH(g.vs, V, _, O, e, !0), (g = H.bottom) && H.addH(g.vs, e, O, _, V);
                D.p = R, D.f = _, D.b = O
            }, _10O: function (P, L, $, i, e, A, t, g) {
                var w, E, Z = this, F = Z.data, r = Z._9O(P, L, $, i, e), Y = (P.x + L.x) / 2, X = (P.y + L.y) / 2,
                    j = F.getElevation(), q = 0;
                for (q = 0; $ > q; q++) g ? (Kd(A, r[q]), Kd(A, r[q + 1])) : (Kd(A, r[q + 1]), Kd(A, r[q])), Kd(A, [Y, j, X]), t && (g ? (w = n * (q + 1) / $ + i, E = n * q / $ + i) : (w = n * q / $ + i, E = n * (q + 1) / $ + i), t.push(.5 - .5 * m(E), .5 - .5 * H(E), .5 - .5 * m(w), .5 - .5 * H(w), .5, .5))
            }, _9O: function (c, F, y, G, E) {
                var k, q, C = this, K = C.data, I = [], d = (c.x + F.x) / 2, i = (c.y + F.y) / 2, a = K.getTall() / 2,
                    s = K.getElevation(), g = 0;
                for (E = E || n; y >= g; g++) k = E * g / y + G, q = m(k), I.push([d + (c.x - d) * q, s + a * H(k), i + (c.y - i) * q]);
                return I
            }, addV: function (t, u, z) {
                var q = u.x, C = u.y, D = z.x, w = z.y, k = this.data, A = k.getElevation(), Z = k.getTall() / 2;
                t.push(q, A - Z, C, D, A - Z, w, D, A + Z, w, D, A + Z, w, q, A + Z, C, q, A - Z, C)
            }, addH: function (M, X, y, Z, N, k) {
                var F = this.data, A = F.getTall() / 2, s = F.getElevation() + (k ? A : -A);
                M.push(X.x, s, X.y, y.x, s, y.y, Z.x, s, Z.y, Z.x, s, Z.y, N.x, s, N.y, X.x, s, X.y)
            }, vf: function (T, x, U, i) {
                var n, O = this, Q = O.gv.getFaceVisible(O.data, T);
                return (U || Q) && (n = br(O, T, i), n.vs = [], n.tuv = Q && (n.texture || x) ? [] : t, n.visible = Q), n
            }
        });
        var ze = function (o, r) {
            Ge(ze, this, [o, r])
        };
        zb(ze, wr, {
            _25Q: 1, validate: function (Q) {
                var k = this, j = k.data, A = k.s, n = j.getPoints(), q = n.size();
                if (k.shapeModel = k.info = t, q > 1) {
                    var d = k.info = {}, F = j.getSegments(), g = j.getThickness(), $ = _c(n.get(0)),
                        a = _c(n.get(q - 1)), _ = q % 2;
                    0 === _ ? (d.c1 = _c(n.get(q / 2 - 1)), d.c2 = _c(n.get(q / 2))) : d.p3 = _c(n.get((q - _) / 2)), d.s1 = $, d.s2 = _c(n.get(1)), d.t1 = _c(n.get(q - 2)), d.t2 = a, d.list = A(Ic) === oe ? k.createTubeModel(n, F, g / 2, Q) : k.createLineModel(n, F, g, "shape.border", "shape.dash")
                }
            }
        }), Cf(N, {
            accordionViewExpandIcon: _i(Aq),
            accordionViewCollapseIcon: _i(Aq, !0),
            accordionViewLabelColor: jm,
            accordionViewLabelFont: ah,
            accordionViewTitleBackground: Kg,
            accordionViewSelectBackground: vb,
            accordionViewSelectWidth: 3,
            accordionViewSeparatorColor: f,
            splitViewDividerSize: 1,
            splitViewDividerBackground: Kg,
            splitViewDragOpacity: .5,
            splitViewToggleIcon: {width: 16, height: 16, comps: [{type: kn, rect: [2, 2, 12, 12], background: Aq}]},
            propertyViewLabelColor: an,
            propertyViewLabelSelectColor: jm,
            propertyViewLabelFont: ah,
            propertyViewExpandIcon: _i(vn),
            propertyViewCollapseIcon: _i(vn, !0),
            propertyViewBackground: Ei,
            propertyViewRowLineVisible: !0,
            propertyViewColumnLineVisible: !0,
            propertyViewRowLineColor: um,
            propertyViewColumnLineColor: um,
            propertyViewSelectBackground: vb,
            listViewLabelColor: an,
            listViewLabelSelectColor: jm,
            listViewLabelFont: ah,
            listViewRowLineVisible: !1,
            listViewRowLineColor: um,
            listViewSelectBackground: vb,
            treeViewLabelColor: an,
            treeViewLabelSelectColor: jm,
            treeViewLabelFont: ah,
            treeViewExpandIcon: _i(en),
            treeViewCollapseIcon: _i(en, !0),
            treeViewRowLineVisible: !1,
            treeViewRowLineColor: um,
            treeViewSelectBackground: vb,
            treeViewDoubleClickToToggle: !0,
            tableViewLabelColor: an,
            tableViewLabelSelectColor: jm,
            tableViewLabelFont: ah,
            tableViewRowLineVisible: !0,
            tableViewColumnLineVisible: !0,
            tableViewRowLineColor: um,
            tableViewColumnLineColor: um,
            tableViewSelectBackground: vb,
            treeTableViewLabelColor: an,
            treeTableViewLabelSelectColor: jm,
            treeTableViewLabelFont: ah,
            treeTableViewExpandIcon: _i(en),
            treeTableViewCollapseIcon: _i(en, !0),
            treeTableViewRowLineVisible: !0,
            treeTableViewColumnLineVisible: !0,
            treeTableViewRowLineColor: um,
            treeTableViewColumnLineColor: um,
            treeTableViewSelectBackground: vb,
            tableHeaderLabelColor: an,
            tableHeaderLabelFont: ah,
            tableHeaderColumnLineVisible: !0,
            tableHeaderColumnLineColor: vk,
            tableHeaderBackground: Ei,
            tableHeaderMoveBackground: ug,
            tableHeaderInsertColor: vb,
            tableHeaderSortDescIcon: Oc(vn, !0),
            tableHeaderSortAscIcon: Oc(vn),
            tabViewTabGap: 1,
            tabViewLabelColor: jm,
            tabViewLabelFont: ah,
            tabViewTabBackground: Kg,
            tabViewSelectWidth: 3,
            tabViewSelectBackground: vb,
            tabViewMoveBackground: ug,
            tabViewInsertColor: vb,
            toolbarLabelColor: an,
            toolbarLabelSelectColor: jm,
            toolbarLabelFont: ah,
            toolbarBackground: Ei,
            toolbarSelectBackground: vb,
            toolbarItemGap: 8,
            toolbarSeparatorColor: Oh
        }, !0);
        var Xq = {translateX: 1, sortColumn: 1}, Bf = {sortable: 1, sortOrder: 1, sortFunc: 1}, _p = {focusData: 1},
            nr = {dataModel: 1, sortColumn: 1, sortFunc: 1, visibleFunc: 1, rootData: 1, rootVisible: 1},
            li = {dataModel: 1, sortFunc: 1, visibleFunc: 1, categorizable: 1}, oi = function (w, p) {
                p.add(w), w.hasChildren() && w.eachChild(function (C) {
                    oi(C, p)
                })
            }, Km = function (s, F, d, y, j, m, l, Y, T, h, i) {
                var X, E = d.getValueType(h), Q = d.getAlign(h);
                if (d.getEnumValues(h)) {
                    var g = d.toEnumLabel(F, h), k = Gg || 0, R = 0, D = m, b = N.getTextSize(y, g).width;
                    return X = nj(d.toEnumIcon(F, h)), X && (R = m + Gg / 2, "center" === Q ? R += (Y - (k + b)) / 2 : "right" === Q && (R = R + Y - (k + b)), pm(s, X, R, l + T / 2), D = R + Gg / 2), g != t && (X ? dg(s, g, y, j, D, l, Y - (D - m), T) : dg(s, g, y, j, m, l, Y, T, Q)), void 0
                }
                return F = d.formatValue(F), F != t ? E === ih ? (ip(s, m, l, Y, T, F), void 0) : E === Cd || !E && To(F) ? (X = nj(F ? Cr : Ap), pm(s, X, m + Y / 2, l + T / 2, h, i), void 0) : (dg(s, F, y, j, m, l, Y, T, Q), void 0) : void 0
            }, Yi = function (E, Y) {
                var D = Y.view, N = D.getDataModel().getHistoryManager(), Q = Bd(E), w = Y.column || Y.property;
                N && N.beginInteraction(), Y.editor = E, E.info = Y, D.setCurrentEditor(E), D.getView().insertBefore(Q, D._79O), ef(E, Y.editorRect), E.setFocus ? E.setFocus() : mb(E), E.commitValue = function () {
                    E._17Q && (E = E._17Q), D.setValue(Y.data, w, E.getValue ? E.getValue() : E.value), E.close && E.close(), An(Q)
                }, w.onEditorCreated && w.onEditorCreated(Y)
            }, Kn = function (U, Q, f, J, $) {
                var X = Ef(U, f), u = Q.value, E = Q.view, S = $.getValueType(Q.data);
                return X.onblur = X.onchange = function () {
                    E.endEditing()
                }, "input" === U ? (u = $.formatValue(u), u != t && (X.value = u), X.onkeydown = function (T) {
                    mn(T) && E.endEditing()
                }, (S === kp || S === Me) && X.addEventListener(mp, N.numberListener, !1)) : U === bo && J.forEach(function (h) {
                    var A = F.createElement("option");
                    A.innerHTML = $.toEnumLabel(h), A.value = h, $.isEnumEqual(u, h) && (A.selected = !0), lm(X, A)
                }), Yi(X, Q), X
            }, Xg = U.widget = {}, Md = function (u, R, C) {
                zb(e + ".widget." + u, R, C)
            };
        Cf(eb, {
            ms_value: function (U) {
                U.getValue = function (Y) {
                    var B = this.getItemById(Y), N = B.element;
                    return xq(N) ? N : N ? N.getValue ? N.getValue() : N.value : B.selected
                }, U.setValue = function (x, Q) {
                    var H = this.getItemById(x), X = H.element;
                    X && !xq(X) ? X.setValue ? X.setValue(Q) : X.value = Q : To(Q) ? (H.selected = Q, this.iv()) : (H.element = Q, this.iv())
                }, U.v = function (V, Q) {
                    var K = this;
                    if (2 === arguments.length) K.setValue(V, Q); else {
                        if (!wi(V)) return K.getValue(V);
                        for (var t in V) K.setValue(t, V[t])
                    }
                    return K
                }
            }, _46o: function (P) {
                P._icon = t, P._accessType = t, P._valueType = t, P._editable = !1, P._batchEditable = !0, P._align = ur, P._nullable = !0, P._emptiable = !1, P.setParent = Mp, P.formatValue = function (R) {
                    var l = this, L = l._valueType;
                    if (l.getEnumValues()) return l.toEnumLabel(R);
                    if (L === Cd) return !!R;
                    if (R != t) {
                        if (L === kp) return $(R);
                        if (cb(R)) return Zj(R)
                    }
                    return R
                }, P.setEnum = function (F, Y, b, P, U, M, S) {
                    var k = this;
                    F && !od(F) && F.values && (P = F.editable, b = F.icons, Y = F.labels, U = F.strict, M = F.maxHeight, S = F.dropDownWidth, F = F.values), Qe(F) && (F = F._as), Qe(Y) && (Y = Y._as), Qe(b) && (b = b._as), k._enumValues = F, k._enumLabels = Y, k._enumIcons = b, k._enumEditable = P, k._enumStrict = U == t ? !0 : U, k._enumMaxHeight = M, k._enumDropDownWidth = S, F && F.length && cb(F[0]) && (k._valueType = Me), k.fp("enum", !1, !0)
                }, P.getEnumDropDownWidth = function () {
                    return this._enumDropDownWidth
                }, P.getEnumMaxHeight = function () {
                    return this._enumMaxHeight
                }, P.isEnumEditable = function () {
                    return this._enumEditable
                }, P.getEnumValues = function () {
                    return this._enumValues
                }, P.getEnumLabels = function () {
                    return this._enumLabels
                }, P.getEnumIcons = function () {
                    return this._enumIcons
                }, P.isEnumStrict = function () {
                    return this._enumStrict
                }, P.isEnumEqual = function (p, l) {
                    return this._enumStrict ? p === l : p == l
                }, P.toEnumLabel = function (E, n) {
                    var j = this, Q = j.getEnumValues(n), c = j.getEnumLabels(n);
                    if (Q && c) for (var K = 0; K < Q.length; K++) if (j.isEnumEqual(E, Q[K])) return c[K];
                    return E
                }, P.toEnumIcon = function (p, N) {
                    var z = this, O = z.getEnumValues(N), g = z.getEnumIcons(N);
                    if (O && g) for (var s = 0; s < O.length; s++) if (z.isEnumEqual(p, O[s])) return g[s];
                    return f
                }
            }, _45o: function (u) {
                u._87o = function (U, v, q, Y, r, T) {
                    if (U) {
                        var N = this, W = N._90I, S = Ac(1);
                        N._columnLineVisible && (r -= 1), N._rowLineVisible && (T -= 1), 0 >= r || 0 >= T || (N._90I || (W = N._90I = {}), W[v] || (W[v] = new Gn), ef(S, N.tx() + q, N.ty() + Y, r, T), lm(S, U), N._view.insertBefore(S, N._79O), U.onParentAdded && U.onParentAdded(S), W[v].add(S))
                    }
                }, u._76o = function () {
                    var q = this, r = q._90I;
                    if (r) {
                        for (var O in r) r[O].each(function (X) {
                            An(X)
                        });
                        delete q._90I
                    }
                }, u._77o = function (h) {
                    var Q = this;
                    if (Q._90I) {
                        var L = Q._90I[h];
                        L && (L.each(function (w) {
                            An(w)
                        }), delete Q._90I[h])
                    }
                }
            }, _47o: function (j) {
                j.getValue = function (v, Q) {
                    return Q.getValue ? Q.getValue(v, Q, this) : Hi(v, Q.getAccessType(), Q.getName())
                }, j.setValue = function (m, e, X) {
                    if (e.isEmptiable(m) || "" !== X || (X = f), e.isNullable(m) || X != t) {
                        var P = this, h = e.getName(m), Q = e.getAccessType(m), x = e.getValueType(m);
                        x === kp && xq(X) ? X = M(X) : x === Me && xq(X) ? X = parseFloat(X) : x === Cd && xq(X) && (X = "true" === X), P._batchEditable && e._batchEditable && P.isSelected(m) ? P.sm().each(function (D) {
                            e.setValue ? e.setValue(D, e, X, P) : de(D, Q, h, X)
                        }) : e.setValue ? e.setValue(m, e, X, P) : de(m, Q, h, X)
                    }
                }, j.setCurrentEditor = function (g) {
                    this.endEditing(), this._currentEditor = g, this.redraw()
                }, j.isEditing = function (N, K) {
                    var B = this, U = B._currentEditor;
                    if (!U) return !1;
                    if (K) {
                        var s = U.info;
                        return s ? (s.column || s.property) === K && s.data === N : !1
                    }
                    return !0
                }, j.endEditing = function () {
                    var W = this, D = W._currentEditor, d = W.getDataModel().getHistoryManager();
                    D && (delete W._currentEditor, D.commitValue && D.commitValue(D.info), W.redraw(), d && d.endInteraction())
                }, j.beginEditing = function (Z) {
                    this.endEditing();
                    var D = this, W = Z.column || Z.property;
                    if (W.beginEditing) W.beginEditing(Z); else {
                        var N = Z.data, x = Z.value, S = D.getSelectBackground(N), d = W.getEnumValues(N),
                            F = W.getSlider(N), n = W.getColorPicker(N);
                        if (F) {
                            var g = bk(Xg.Slider, F);
                            return g.setValue(x), g.getView().onblur = function () {
                                D.endEditing()
                            }, g.isInstant() && (g.onValueChanged = function () {
                                D.setValue(N, W, g.getValue())
                            }), Yi(g, Z), void 0
                        }
                        if (n || W.getValueType(N) === ih) {
                            var M = bk(Xg.ColorPicker, n);
                            return M.setValue(x), M.onClosed = function () {
                                D.endEditing()
                            }, M.isInstant() && (M.onValueChanged = function (H, e) {
                                D.setValue(N, W, e)
                            }), Yi(M, Z), M.open(), void 0
                        }
                        if (d) {
                            if (Xg.ComboBox) {
                                var V = new Xg.ComboBox;
                                V.setValue(x), V.setValues(d), V.setLabels(W.getEnumLabels(N)), V.setIcons(W.getEnumIcons(N)), V.setEditable(W.isEnumEditable(N)), V.setStrict(W.isEnumStrict(N)), V.setMaxHeight(W.getEnumMaxHeight(N)), V.setDropDownWidth(W.getEnumDropDownWidth(N)), V.onClosed = function () {
                                    D.endEditing()
                                }, Yi(V, Z), V.open()
                            } else Kn(bo, Z, S, d, W);
                            return
                        }
                        var B = W.getValueType(N);
                        if (B === Cd || To(x)) return D.setValue(N, W, !x), void 0;
                        if (W.getItemEditor(N)) {
                            var b = Ag(W.getItemEditor(N)), p = new b(N, W, D, Z), q = p.getView();
                            return q._17Q = p, p.setValue(x), cl(q), Yi(q, Z), p.editBeginning && p.editBeginning(), void 0
                        }
                        Kn("input", Z, S, t, W)
                    }
                }
            }, _44o: function (Z) {
                Z.init = function (X) {
                    var q = this, f = q.th = new iq(X), C = q._view = Qj(1, q);
                    q.tv = q._tableView = X, lm(C, f.getView()), lm(C, X.getView()), f.mp(function (c) {
                        c.property === uf && q.iv()
                    }), q.iv()
                }, Z.getTableView = function () {
                    return this.tv
                }, Z.getTableHeader = function () {
                    return this.th
                }, Z.getDataModel = function () {
                    return this.tv.dm()
                }, Z.getColumnModel = function () {
                    return this.tv.getColumnModel()
                }, Z.setColumns = function (s) {
                    this.tv.setColumns(s)
                }, Z.addColumns = function (K) {
                    this.tv.addColumns(K)
                }, Z.endEditing = function () {
                    this.tv.endEditing()
                }, Z.validateImpl = function () {
                    var T = this, E = T.th, G = np(E), v = {x: 0, y: 0, width: T.getWidth(), height: G};
                    ef(E, v), v.y = G, v.height = K(0, T.getHeight() - G), ef(T.tv, v)
                }
            }, ms_vs: function (X) {
                X._41o = function () {
                    return this._29I.height < this._59I
                }, X._43o = function () {
                    var s = this;
                    s._41o() && (s._58I || (y(function () {
                        s._94O()
                    }, bd), s.iv()), s._58I = new Date)
                }, X._94O = function () {
                    var M = this;
                    if (M._58I) {
                        var k = new Date;
                        k.getTime() - M._58I.getTime() >= bd ? (delete M._58I, M.iv()) : y(function () {
                            M._94O()
                        }, bd)
                    }
                }, X._93I = function () {
                    var v = this, Q = v._27I;
                    if (v._58I || !v._autoHideScrollBar) {
                        Q || lm(v._79O, Q = v._27I = Ac());
                        var g = v._29I, F = g.height, l = v._59I, y = v.getScrollBarSize(), m = g.width - y - 2,
                            O = F * (-v.ty() / l), H = F * (F / l), U = Q.style;
                        l > F ? (Dq > H && (O = O + H / 2 - Dq / 2, 0 > O && (O = 0), O + Dq > F && (O = F - Dq), H = Dq), U.visibility = Db, U.background = v.getScrollBarColor(), U.borderRadius = y / 2 + Pb, ef(Q, m, O, y, H)) : U.visibility = al
                    } else Q && (Q.style.visibility = al)
                }
            }, ms_hs: function (W) {
                W._40o = function () {
                    return this._29I.width < this._91I
                }, W._42o = function () {
                    var e = this;
                    e._40o() && (e._95O || (y(function () {
                        e._94I()
                    }, bd), e.iv()), e._95O = new Date)
                }, W._94I = function () {
                    var Z = this;
                    if (Z._95O) {
                        var A = new Date;
                        A.getTime() - Z._95O.getTime() >= bd ? (delete Z._95O, Z.iv()) : y(function () {
                            Z._94I()
                        }, bd)
                    }
                }, W._92I = function () {
                    var Y = this, q = Y._28I;
                    if (Y._95O || !Y._autoHideScrollBar) {
                        q || lm(Y._79O, q = Y._28I = Ac());
                        var K = Y._29I, k = K.width, z = Y._91I, a = Y.getScrollBarSize(), H = K.height - a - 2,
                            f = k * (-Y.tx() / z), R = k * (k / z), L = q.style;
                        z > k ? (Dq > R && (f = f + R / 2 - Dq / 2, 0 > f && (f = 0), f + Dq > k && (f = k - Dq), R = Dq), L.visibility = Db, L.background = Y.getScrollBarColor(), L.borderRadius = a / 2 + Pb, ef(q, f, H, R, a)) : L.visibility = al
                    } else q && (q.style.visibility = al)
                }
            }
        }), xe(Cr, zd(16, 16, [{type: $d, rect: [1, 1, 14, 14], background: vb}, {
            type: ho,
            rect: [1, 1, 14, 14],
            width: 1,
            color: El
        }, {
            type: qi,
            points: [13, 3, 7, 12, 4, 8],
            borderWidth: 2,
            borderColor: "#FFF"
        }])), xe(Ap, zd(16, 16, {type: ho, rect: [1, 1, 14, 14], width: 1, color: El})), xe(zg, zd(16, 16, [{
            type: gq,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: El,
            background: "#FFF"
        }, {type: gq, rect: [4, 4, 8, 8], background: vb}])), xe(Eq, zd(16, 16, {
            type: gq,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: El
        })), eb._15Q = function (b) {
            b._29I = af, b._59I = 0, b._91I = 0, b._5o = function (X) {
                var O = this;
                O._30I = new Gn, O._rows = new Gn, O._rowMap = {}, O._31I = 0, O._14I = 0, O._view = Qj(1, O), O._canvas = ns(O._view), lm(O._view, O._79O = Ac()), O.dm(X ? X : new Xl)
            }, b.getCheckIcon = function (w) {
                var G = this.sm(), o = G.co(w);
                return G.sg() ? nj(o ? zg : Eq) : nj(o ? Cr : Ap)
            }, b.checkData = function (s) {
                var j = this.sm(), W = j.co(s);
                j.sg() && W || (this._32o = 1, W ? j.rs(s) : j.as(s), delete this._32o)
            }, b.getDataAt = function (V) {
                V.target && (V = this.lp(V));
                var h = I(V.y / this._rowHeight), f = this._rows;
                return 0 > h || h >= f.size() ? t : f.get(h)
            }, b.onDataDoubleClicked = function () {
            }, b.onDataClicked = function () {
            }, b.adjustTranslateX = function () {
                return 0
            }, b.adjustTranslateY = function (e) {
                var F = this.getHeight() - this._59I;
                return F > e && (e = F), e > 0 ? 0 : $(e)
            }, b.onPropertyChanged = function (v) {
                var u = this, Y = v.property;
                nr[Y] ? u.ivm() : _p[Y] || u.redraw(), Y === Xi ? u._42o() : Y === Sj && u._43o()
            }, b.getLabel = function (c) {
                return c.toLabel()
            }, b.getLabelFont = function () {
                return this._labelFont
            }, b.getLabelColor = function (r) {
                var Y = this;
                if (Y.isCheckMode()) {
                    if (Y._focusData === r) return Y._labelSelectColor
                } else if (Y.isSelected(r)) return Y._labelSelectColor;
                return Y._labelColor
            }, b.getStartRowIndex = function () {
                return this._31I
            }, b.getEndRowIndex = function () {
                return this._14I
            }, b.getRowDatas = function () {
                return this._rows
            }, b.getRowIndex = function (q) {
                return this._rowMap[q._id]
            }, b.getRowSize = function () {
                return this._rows.size()
            }, b.getViewRect = function () {
                return us(this._29I)
            }, b.isVisible = function (l) {
                return this._visibleFunc ? this._visibleFunc(l) : !0
            }, b.getCurrentSortFunc = function () {
                return this._sortFunc
            }, b.setDataModel = function (q) {
                var c = this, h = c._dataModel, O = c._selectionModel;
                h !== q && (h && (h.umm(c.handleDataModelChange, c), h.umd(c.handleDataPropertyChange, c), h.umh(c.handleHierarchyChange, c), O || h.sm().ums(c.handleSelectionChange, c)), c._dataModel = q, q.mm(c.handleDataModelChange, c), q.md(c.handleDataPropertyChange, c), q.mh(c.handleHierarchyChange, c), O ? O._21I(q) : q.sm().ms(c.handleSelectionChange, c), c.fp("dataModel", h, q))
            }, b.validateModel = function () {
                var v = this;
                v._rows.clear(), v._rowMap = {}, v.buildChildren(v._dataModel._roots);
                var Y = v._rows = v._rows.toList(v.isVisible, v), r = 0, c = v.getCurrentSortFunc(), H = Y.size();
                for (c && Y.sort(c); H > r; r++) v._rowMap[Y.get(r)._id] = r
            }, b.buildChildren = function (q) {
                var X = this;
                q.each(function (M) {
                    X._rows.add(M), X.buildChildren(M._children)
                })
            }, b.handleDataModelChange = function () {
                this.ivm()
            }, b.handleDataPropertyChange = function (O) {
                "parent" === O.property ? this.ivm() : this.invalidateData(O.data)
            }, b.handleHierarchyChange = function () {
                this.ivm()
            }, b.handleSelectionChange = function (j) {
                j.datas.each(this.invalidateData, this), this.onSelectionChanged(j)
            }, b.onSelectionChanged = function (t) {
                var y = this, h = y.sm();
                !y.isAutoMakeVisible() || 1 !== h.size() || "set" !== t.kind && "append" !== t.kind || y._32o || y.makeVisible(h.ld())
            }, b.handleBackgroundClick = function (H) {
                Kr(H) && !this.isCheckMode() && this.sm().cs()
            }, b.makeVisible = function (p) {
                p && (this._23I = p, this.iv())
            }, b.scrollToIndex = function (e) {
                var T = this, u = T._29I, N = u.height, Z = T._rowHeight, n = Z * e;
                e >= 0 && e < T._rows.size() && N > 0 && (n + Z > u.y + N ? T.ty(-n + N - Z) : n < u.y && T.ty(-n))
            }, b.autoScroll = function (F, L) {
                var d = this, j = d._rowHeight, p = j, B = j / 4, k = d._29I, D = d.lp(F), P = {x: d.tx(), y: d.ty()};
                return j > 0 && k && (D.x - k.x < p ? d.translate(B, 0) : k.x + k.width - D.x < p && d.translate(-B, 0), D.y - k.y < p ? d.translate(0, B) : k.y + k.height - D.y < p && d.translate(0, -B)), P.x = d.tx() - P.x, P.y = d.ty() - P.y, L && (L.x += P.x, L.y += P.y), P
            }, b.getTopRowOrderSelection = function () {
                var C = this.sm().getTopSelection(), F = {}, Y = new Gn;
                return C.each(function (y) {
                    F[y._id] = y
                }), this._rows.each(function (P) {
                    F[P._id] && Y.add(P)
                }), Y
            }, b.getRowOrderSelection = function () {
                var _ = new Gn;
                return this._rows.each(function (w) {
                    this.isSelected(w) && _.add(w)
                }, this), _
            }, b.ivm = function () {
                this.invalidateModel()
            }, b.invalidateModel = function () {
                var z = this;
                z._96I || (z._96I = 1, z._32I = 1, delete z._24I), z.iv()
            }, b.redraw = function () {
                var p = this;
                p._32I || (p._32I = 1, delete p._24I, p.iv())
            }, b.invalidateData = function (a) {
                var s = this;
                h ? s.redraw() : s._32I || (s._24I || (s._24I = {}), s._24I[a._id] = a, s.iv())
            }, b.getFocusData = function () {
                return this._focusData
            }, b.setFocusDataById = function ($) {
                this.setFocusData(this.dm().getDataById($))
            }, b.setFocusData = function (I) {
                var k = this, H = k._focusData;
                H !== I && (k._focusData = I, k.fp("focusData", H, I), H && k.invalidateData(H), I && (k.invalidateData(I), k.isAutoMakeVisible() && k.makeVisible(I)))
            }, b.drawRowBackground = function (W, U, c, p, v, g, j) {
                var l = this, r = l.isCheckMode();
                (U === l._focusData && r || c && !r) && ip(W, p, v, g, j, l.getSelectBackground(U))
            }, b.drawData = function (Y, w, m) {
                var t = this, K = t._rowHeight, H = K * m, A = t._29I, x = A.x, s = A.width;
                Y.save(), Y.beginPath(), Y.rect(x, H, s, K), Y.clip(), t._87o(t.drawRow(Y, w, t.isSelected(w), x, H, s, K), m, x, H, s, K), Y.restore(), t._rowLineVisible && ip(Y, x, H + K - 1, s, 1, t._rowLineColor)
            }, b._12I = function (o) {
                var v = this, a = v._31I, P = v._29I, I = P.x, r = P.y, t = P.width, G = P.height;
                for (o.beginPath(), o.rect(I, r, t, G), o.clip(), o.clearRect(I, r, t, G), v._76o(), v._93db(o); a < v._14I; a++) v.drawData(o, v._rows.get(a), a);
                v._92db(o)
            }, b._13I = function (S) {
                for (var O, c = this, G = c._rowHeight, r = c._29I, s = r.x, Z = r.width, I = c._31I, j = c._30I; I < c._14I; I++) O = c._rows.get(I), c._24I[O._id] && j.add({
                    data: O,
                    index: I
                });
                j.isEmpty() || (S.beginPath(), j.each(function (P) {
                    S.rect(s, P.index * G, Z, G)
                }), S.clip(), j.each(function (y) {
                    S.clearRect(s, y.index * G, Z, G)
                }), j.each(function (O) {
                    c._77o(O.index)
                }), c._93db(S), j.each(function (a) {
                    c.drawData(S, a.data, a.index)
                }), c._92db(S), j.clear())
            }, b.validateImpl = function () {
                var p = this, h = p._canvas, H = p.getWidth(), v = p.getHeight(), x = p._rowHeight, A = p._32I;
                (H !== h.clientWidth || v !== h.clientHeight) && (ed(h, H, v), A = 1);
                var _ = q && !X;
                p._96I && !_ && p.validateModel();
                var S = p._29I, Y = {x: -p.tx(), y: -p.ty(), width: H, height: v}, M = p._rows.size(), u = Oo(h),
                    w = p._23I;
                A || Zh(Y, S) || (A = 1), p._29I = Y, p._59I = M * x, p._31I = I(Y.y / x), p._14I = c((Y.y + Y.height) / x), p._31I < 0 && (p._31I = 0), p._14I > M && (p._14I = M), p._99I && A && p._99I(), Vb(u, p.tx(), p.ty(), 1), A ? p._12I(u) : p._24I && p._13I(u), p._93I(), p._92I(), u.restore(), p._32I = p._24I = p._96I = t, w && (p.scrollToIndex(p.getRowIndex(w)), delete p._23I), p.tx(p.tx()), p.ty(p.ty())
            }
        }, eb._48o = function (G) {
            G._rootVisible = !0, G._rootData = t, G._35o = function () {
                this._expandMap = {}, this._levelMap = {}
            }, G.validateModel = function () {
                var s = this, c = s._rootData;
                s._rows.clear(), s._levelMap = {}, s._rowMap = {}, s._currentLevel = 0, c ? s._rootVisible ? s.isVisible(c) && s.buildData(c) : s.buildChildren(c) : s.buildChildren(), delete s._currentLevel
            }, G.buildData = function (x) {
                var d = this, Q = x._id, g = d._rows;
                d._rowMap[Q] = g.size(), g.add(x), d._levelMap[Q] = d._currentLevel, d.isExpanded(x) && (d._currentLevel++, d.buildChildren(x), d._currentLevel--)
            }, G.buildChildren = function (V) {
                var I = this, q = V ? V._children : I._dataModel._roots, u = I.getCurrentSortFunc();
                u && I.isChildrenSortable(V) ? q.toList(I.isVisible, I).sort(u).each(I.buildData, I) : q.each(function (O) {
                    I.isVisible(O) && I.buildData(O)
                })
            }, G.getLevel = function (I) {
                return this._levelMap[I._id]
            }, G.getToggleIcon = function (V) {
                var R = this, W = R._loader, p = R._collapseIcon;
                return W && !W.isLoaded(V) ? p : V.hasChildren() ? R.isExpanded(V) ? R._expandIcon : p : t
            }, G.isCheckMode = function () {
                return this._checkMode != t
            }, G.isChildrenSortable = function () {
                return !0
            }, G.handleDataModelChange = function (C) {
                var Q = this;
                C.kind === Ad ? delete Q._expandMap[C.data._id] : C.kind === fj && (Q._expandMap = {}), Q.ivm()
            }, G.toggle = function (m) {
                var z = this;
                z.isExpanded(m) ? z.collapse(m) : z.expand(m)
            }, G.isExpanded = function (F) {
                return 1 === this._expandMap[F._id]
            }, G.expand = function (W) {
                var q = this, Q = q._loader;
                q.isExpanded(W) || (Q && !Q.isLoaded(W) && Q.load(W), q._expandMap[W._id] = 1, q.ivm(), q.onExpanded(W))
            }, G.onExpanded = function () {
            }, G.collapse = function (q) {
                var p = this;
                p.isExpanded(q) && (delete p._expandMap[q._id], p.ivm(), p.onCollapsed(q))
            }, G.onCollapsed = function () {
            }, G.expandAll = function () {
                var z = this;
                z._dataModel.each(function (N) {
                    N.hasChildren() && (z._expandMap[N._id] = 1)
                }), z.ivm()
            }, G.collapseAll = function () {
                this._expandMap = {}, this.ivm()
            }, G.makeVisible = function (y) {
                if (y) {
                    var M = this;
                    if (!M._rootData || y.isDescendantOf(M._rootData)) {
                        for (var j = y._parent; j;) M.expand(j), j = j._parent;
                        M._23I = y, M.iv()
                    }
                }
            }, G.checkData = function (J) {
                var S, E = this, Q = E._checkMode, T = E.sm(), K = T.co(J);
                if (!T.sg() || !K) {
                    if (E._32o = 1, Q === V) K ? T.rs(J) : T.as(J); else if (Q === dm) S = new Gn(J), S.addAll(J._children); else if ("descendant" === Q) S = new Gn, oi(J, S); else if ("all" === Q && (S = new Gn, oi(J, S), !K)) for (var z = J._parent; z;) S.add(z), z = z._parent;
                    S && (K ? T.rs(S) : T.as(S)), delete E._32o
                }
            }, G._97I = function (l, i, x, V, j, r, $) {
                var S = this, C = S._indent, _ = S._levelMap[i._id], H = S.getIconWidth(i), D = nj(S.getToggleIcon(i));
                D ? (V += C * _, pm(l, D, V + C / 2, j + $ / 2, i, S), V += C) : V += C * (_ + 1), S._checkMode && (pm(l, S.getCheckIcon(i), V + C / 2, j + $ / 2, i, S), V += C), S.drawIcon(l, i, V, j, H, $), S.drawLabel(l, i, V + H, j, $)
            }
        }, eb._14Q = function (d) {
            d.getIcon = function (H) {
                return H.getIcon()
            }, d.getIconWidth = function (d) {
                return this.getIcon(d) ? this._indent : 0
            }, d.drawIcon = function (n, p, $, x, g, A) {
                if (g) {
                    var K = this, U = K.getBodyColor(p), N = nj(K.getIcon(p), U);
                    N && (A -= K.isRowLineVisible() ? 1 : 0, Gi(n, N, Ih, $, x, g, A, p, K, U), Tc(n, K.getBorderColor(p), $, x, g, A))
                }
            }, d.drawLabel = function (r, h, R, k, y) {
                var z = this;
                dg(r, z.getLabel(h), z.getLabelFont(h), z.getLabelColor(h), R, k, 0, y)
            }
        }, eb._50o = function (e) {
            e._98I = function () {
                var q = this, c = q._39o = new Xl;
                q._60I = new Gn, c.mm(q._17o, q), c.md(q._18o, q), c.mh(q._19o, q)
            }, e.setColumns = function (X) {
                this._39o.clear(), this.addColumns(X)
            }, e.addColumns = function (C) {
                var V = this._39o;
                C.forEach(function (B) {
                    if (!(B instanceof mf)) {
                        var R = Ag(B.className);
                        B = bk(R ? R : mf, B)
                    }
                    V.add(B)
                })
            }, e.onColumnClicked = function () {
            }, e.onCheckColumnClicked = function () {
            }, e._3Q = function (q) {
                for (var N, p = 0, J = this._60I, V = J.size(); V > p; p++) if (N = J.get(p), N.column === q) return N;
                return t
            }, e.getColumnAt = function (F) {
                var g = this._4Q(F);
                return g ? g.column : t
            }, e._4Q = function (B) {
                for (var U = this, b = B.target ? U.lp(B).x : B.x, i = U._60I, j = 0; j < i.size(); j++) {
                    var n = i.get(j), T = n.startX;
                    if (b >= T && b < T + n.column.getWidth()) return n
                }
                return t
            }, e.getToolTip = function (W) {
                var Z = this, V = Z.getDataAt(W), u = Z.getColumnAt(W);
                return V && u ? u.getToolTip(V, Z) : t
            }, e.adjustTranslateX = function (j) {
                var d = this.getWidth() - this._91I;
                return d > j && (j = d), j > 0 ? 0 : $(j)
            }, e._99I = function () {
                var b = this, E = b._29I, k = b._60I;
                k.clear(), b._91I = 0, b._39o._roots.each(function (p) {
                    if (p.isVisible()) {
                        var H = b._91I + p.getWidth();
                        b._91I <= E.x + E.width && H >= E.x && k.add({column: p, startX: b._91I}), b._91I = H
                    }
                })
            }, e.drawData = function (E, F, o) {
                var A = this, G = A._rowHeight, p = G * o, V = A.isSelected(F), v = A._29I, m = v.x, q = v.width;
                A.drawRowBackground(E, F, V, m, p, q, G), A._60I.each(function (O) {
                    var t = O.column, b = O.startX, I = t.getWidth();
                    I > 0 && !A.isEditing(F, t) && (E.save(), E.beginPath(), E.rect(b, p, I, G), E.clip(), A._87o(A.drawCell(E, F, V, t, b, p, I, G), o, b, p, I, G), A._columnLineVisible && ip(E, b + I - 1, p, 1, G, A._columnLineColor), E.restore())
                }), A._rowLineVisible && ip(E, m, p + G - 1, q, 1, A._rowLineColor)
            }, e.drawCell = function (C, i, I, Y, G, l, w, W) {
                var a = this;
                if (Y.drawCell) return Y.drawCell(C, i, I, Y, G, l, w, W, a);
                var y = a.getValue(i, Y);
                Km(C, y, Y, a.getLabelFont(i, Y, y), a.getLabelColor(i, Y, y), G, l, w, W, i, a)
            }, e.getColumnModel = function () {
                return this._39o
            }, e._17o = function () {
                this.redraw()
            }, e._18o = function (_) {
                var j = this;
                _.data === j._sortColumn && Bf[_.property] ? j.ivm() : (j._42o(), j.redraw())
            }, e._19o = function () {
                this.redraw()
            }, e.getCurrentSortFunc = function () {
                var Q = this, G = Q._sortColumn;
                if (G && G.isSortable()) {
                    var a = G.getSortFunc(), I = Po === G.getSortOrder() ? 1 : -1;
                    return a || (a = oq), function (N, m) {
                        return a.call(Q, Q.getValue(N, G), Q.getValue(m, G), N, m) * I
                    }
                }
                return Q._sortFunc
            }, e.isCellEditable = function (L, g) {
                return g.isEditable() && this.isEditable()
            }, e._37O = function (T, j) {
                if (Kr(j)) for (var E = this, w = E.lp(j), C = E._60I, $ = E._rowHeight, x = E._29I, Y = x.x, q = x.y, K = x.width, a = x.height, H = 0; H < C.size(); H++) {
                    var U = C.get(H), N = U.startX, Z = U.column, z = Z.getWidth();
                    if (Z !== E._31o && Z !== E._4o && E.isCellEditable(T, Z, j) && w.x >= N && w.x < N + z) {
                        var r = {x: N, y: E.getRowIndex(T) * $, width: z, height: $},
                            m = {x: r.x + E.tx(), y: r.y + E.ty(), width: r.width, height: r.height}, M = 0, e = 0;
                        return r.x < Y ? M = r.x - Y : r.x + r.width > Y + K && (M = r.x + r.width - Y - K), M && (E.tx(E.tx() - M), m.x -= M), r.y < q ? e = r.y - q : r.y + $ > q + a && (e = r.y + $ - q - a), e && (E.ty(E.ty() - e), m.y -= e), E.beginEditing({
                            data: T,
                            column: Z,
                            value: E.getValue(T, Z),
                            event: j,
                            rect: r,
                            editorRect: m,
                            view: E
                        }), void 0
                    }
                }
            }
        }, Xg.BaseItemEditor = function (I, S, e, r) {
            this._data = I, this._column = S, this._master = e, this._editInfo = r
        }, Md("BaseItemEditor", z, {
            ms_ac: ["data", "column", "master", "editInfo"], editBeginning: function () {
            }, getView: function () {
            }, getValue: function () {
            }, setValue: function () {
            }
        });
        var Nl = U.Tab = function () {
            Ge(Nl, this)
        };
        ps("Tab", xd, {ms_ac: ["view", "closable", "disabled"], _icon: t, _closable: !1, _disabled: !1, setParent: Mp});
        var mf = U.Column = function () {
            Ge(mf, this)
        };
        ps("Column", xd, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", Db, Tr, Fj, $n, "align", ih, "sortOrder", Dj, "sortable", "clickable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
            _visible: !0,
            _width: 80,
            _sortOrder: Po,
            _sortFunc: t,
            _sortable: !0,
            _clickable: !0,
            setWidth: function (D) {
                16 > D && (D = 16);
                var w = this._width;
                this._width = D, this.fp($n, w, D)
            },
            getToolTip: function (R, v) {
                return this.formatValue(v.getValue(R, this))
            }
        });
        var hf = U.Property = function () {
            Ge(hf, this)
        };
        ps("Property", xd, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", Tr, Fj, "categoryName", ih, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
            _categoryName: t,
            getToolTip: function (R, x, n) {
                var G = this;
                return x ? G.formatValue(n.getValue(R, G)) : n.getPropertyName(G)
            }
        }), Xg.AccordionView = function () {
            var W = this;
            W._20o = {}, W._21o = new Gn, W._10o = t, W._9o = t, W._11o = t, W._view = Qj(0, W), W.iv()
        }, Md("AccordionView", z, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: [Qo, Uf, "titleHeight", Ck, cg, "titleBackground", "selectWidth", Mf, "orientation", "separatorColor"],
            _expandIcon: N.accordionViewExpandIcon,
            _collapseIcon: N.accordionViewCollapseIcon,
            _titleHeight: zr,
            _labelColor: N.accordionViewLabelColor,
            _labelFont: N.accordionViewLabelFont,
            _titleBackground: N.accordionViewTitleBackground,
            _selectBackground: N.accordionViewSelectBackground,
            _selectWidth: N.accordionViewSelectWidth,
            _orientation: "v",
            _separatorColor: N.accordionViewSeparatorColor,
            onPropertyChanged: function () {
                this.iv()
            },
            getView: function () {
                return this._view
            },
            getTitles: function () {
                return this._21o
            },
            getCurrentTitle: function () {
                return this._10o
            },
            add: function (N, P, s, l) {
                var d = this, T = Ac();
                if (d._20o[N]) throw N + " already exists";
                T.onmousedown = Mh, T.style.cursor = ws, T.addEventListener(w ? Pr : pg, function (v) {
                    Mh(v)
                }, !1), T.addEventListener(w ? Cl : _l, function (v) {
                    Mh(v), Kr(v) && (d._10o === N ? d.collapse() : d.expand(N))
                }, !1), lm(d._view, T), d._20o[N] = {
                    content: P,
                    div: T,
                    canvas: ns(T),
                    icon: l
                }, d._21o.add(N), s && d.expand(N), d.iv()
            },
            remove: function (C) {
                var e = this, w = e._20o[C];
                w && (An(w.div), delete e._20o[C], e._21o.remove(C), e.iv())
            },
            clear: function () {
                var V = this;
                V._20o = {}, V._21o.clear(), V.iv()
            },
            isExpanded: function (A) {
                return this._10o === A
            },
            expand: function (p) {
                var h = this;
                h._20o[p] && h._10o !== p && (h._10o = p, h.onExpanded(p), h.iv())
            },
            onExpanded: function () {
            },
            collapse: function () {
                var W = this;
                W._10o && (W.onCollapsed(W._10o), delete W._10o, W.iv())
            },
            onCollapsed: function () {
            },
            initCanvas: function (h, W, Z) {
                ed(h, W, Z);
                var V = Oo(h);
                return Vb(V, 0, 0, 1), V.clearRect(0, 0, W, Z), V
            },
            drawTitle: function (d, I, Q, U, r) {
                var R = this, m = nj(r.icon), M = R.isExpanded(I), p = R._titleHeight, y = R._titleBackground,
                    C = R._selectWidth, X = R._separatorColor, z = nj(M ? R._expandIcon : R._collapseIcon), h = C + 4;
                ip(d, 0, 0, Q, U, y), M && C && ip(d, 0, 0, C, U, R._selectBackground), (M || R._21o.get(R._21o.size() - 1) !== I) && ip(d, 0, U - 1, Q, 1, X ? X : cp(y)), m && (pm(d, m, h + ko(m) / 2, p / 2), h += ko(m) + 2), dg(d, I, R.getLabelFont(I), R.getLabelColor(I), h, 0, 0, p), z && pm(d, z, Q - ko(z) / 2 - 4, p / 2)
            },
            validateImpl: function () {
                var q = this, A = q._view, c = 0, g = 0, j = q.getWidth(), o = q.getHeight(), n = q._titleHeight,
                    i = q._21o.size() * n, a = q._11o, $ = q._9o;
                delete q._11o, delete q._9o, q._21o.each(function (F) {
                    var t, I, W = q._20o[F], u = W.content, D = q._10o === F;
                    Fr(q) ? (ef(W.div, c, 0, n, o), t = q.initCanvas(W.canvas, n, o), tq(t, 0, o), ac(t, -s), q.drawTitle(t, F, o, n, W), t.restore(), D ? (I = K(0, j - i), u && (q._11o = u, q._9o = Bd(u), ef(u, c + n, 0, I, o)), c += n + I) : c += n) : (ef(W.div, 0, g, j, n), t = q.initCanvas(W.canvas, j, n), q.drawTitle(t, F, j, n, W), t.restore(), D ? (I = K(0, o - i), u && (q._11o = u, q._9o = Bd(u), ef(u, 0, g + n, j, I)), g += n + I) : g += n)
                });
                var G = q._9o;
                a && a !== q._11o && a.endEditing && a.endEditing(), G && G !== $ && lm(A, G), $ && $ !== G && An($)
            }
        }), Xg.SplitView = function (x, B, J, z) {
            var g = this, q = g._dividerDiv = Ac(), m = g._60O = ns(), Q = g._61O = ns(), D = m.style, e = Q.style;
            g._view = Qj(1, g), lm(g._view, q), D.msTouchAction = qn, D.pointerEvents = qn, D.cursor = ws, e.msTouchAction = qn, e.pointerEvents = qn, e.cursor = ws, x && g.setLeftView(x), B && g.setRightView(B), J && g.setOrientation(J), z != t && g.setPosition(z), g.setStatus($g), new rq(g)
        }, Md("SplitView", z, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: ["continuousLayout", "dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
            _continuousLayout: !1,
            _position: .5,
            _togglable: !0,
            _orientation: "h",
            _draggable: !0,
            _dividerSize: N.splitViewDividerSize,
            _dividerBackground: N.splitViewDividerBackground,
            _dragOpacity: N.splitViewDragOpacity,
            _toggleIcon: N.splitViewToggleIcon,
            onPropertyChanged: function () {
                this.iv()
            },
            getDividerDiv: function () {
                return this._dividerDiv
            },
            getPosition: function () {
                return this._position
            },
            setPosition: function (G, D) {
                var K = this, J = K._position;
                isNaN(G) || (D || (K._82O = 0 > G ? -1 : G > 1 ? 1 : 0), K._position = G, K.fp(Nn, J, G))
            },
            getLeftView: function () {
                return this._leftView
            },
            setLeftView: function (d) {
                var i = this, h = i._leftView, k = i._view;
                if (i._leftView !== d) {
                    if (h && h !== i._rightView) {
                        var D = Bd(h);
                        D.parentNode === k && An(D)
                    }
                    if (i._leftView = d, d) {
                        var s = Bd(d);
                        s.parentNode !== k && k.insertBefore(s, i._dividerDiv)
                    }
                    i.fp("leftView", h, d)
                }
            },
            getRightView: function () {
                return this._rightView
            },
            setRightView: function (g) {
                var e = this, K = e._rightView, r = e._view;
                if (e._rightView !== g) {
                    if (K && K !== e._leftView) {
                        var E = Bd(K);
                        E.parentNode === r && An(E)
                    }
                    if (e._rightView = g, g) {
                        var B = Bd(g);
                        B.parentNode !== r && r.insertBefore(B, e._dividerDiv)
                    }
                    e.fp("rightView", K, g)
                }
            },
            validateImpl: function () {
                var x = this, U = x._draggable, J = x._position, o = x.getWidth(), b = x.getHeight(),
                    j = x._dividerSize, D = x._dividerBackground, a = w ? 18 : 8, e = x._dividerDiv, N = x._82O,
                    E = x._60O, L = x._61O, l = x._toggleIcon, f = x._status, g = e.style, X = null, C = w ? 20 : 4,
                    q = l.comps[0];
                j >= a || 0 === j ? x._coverDiv && (An(x._coverDiv), delete x._coverDiv) : x._coverDiv || (x._coverDiv = Ac(), W && (x._coverDiv.style.background = Qq), lm(e, x._coverDiv)), x._togglable ? E.parentNode || (lm(e, E), lm(e, L)) : (An(E), An(L));
                var H = x._coverDiv, v = x._leftView, d = x._rightView;
                if (Fr(x)) {
                    if (j > o && (j = o), f === $g) if (1 === N) var I = _(J, o),
                        B = K(0, o - j - I); else -1 === N ? (B = _(-J, o), I = K(0, o - j - B)) : (I = $((o - j) * J), B = K(0, o - j - I)); else "cl" === f ? (I = 0, B = K(0, o - j)) : "cr" === f && (B = 0, I = K(0, o - j));
                    v && ef(v, 0, 0, I, b), d && ef(d, I + j, 0, B, b), ef(e, I, 0, j, b), x._22o = I, H && (ef(H, j / 2 - a / 2, 0, a, b), H.style.cursor = U ? Ok : ""), e.style.cursor = U ? Ok : "";
                    var p = e.clientHeight / 2, Q = e.clientWidth;
                    ed(E, Q, Q), ef(E, 0, p - Q - C, Q, Q), X = Oo(E), Vb(X, 0, 0, 1), q.rotation = -s, _j(X, l, 0, 0, Q, Q), X.restore(), ed(L, Q, Q), ef(L, 0, p + C, Q, Q), X = Oo(L), Vb(X, 0, 0, 1), q.rotation = s, _j(X, l, 0, 0, Q, Q), X.restore()
                } else {
                    if (j > b && (j = b), f === $g) if (1 === N) var A = _(J, b),
                        V = K(0, b - j - A); else -1 === N ? (V = _(-J, b), A = K(0, b - j - V)) : (A = $((b - j) * J), V = K(0, b - j - A)); else "cl" === f ? (A = 0, V = K(0, b - j)) : "cr" === f && (V = 0, A = K(0, b - j));
                    v && ef(v, 0, 0, o, A), d && ef(d, 0, A + j, o, V), ef(e, 0, A, o, j), x._22o = A, H && (ef(H, 0, j / 2 - a / 2, o, a), H.style.cursor = U ? nm : ""), g.cursor = U ? nm : "";
                    var Z = e.clientWidth / 2, Q = e.clientHeight;
                    ed(E, Q, Q), ef(E, Z - Q - C, 0, Q, Q), X = Oo(E), Vb(X, 0, 0, 1), q.rotation = 0, _j(X, l, 0, 0, Q, Q), X.restore(), ed(L, Q, Q), ef(L, Z + C, 0, Q, Q), X = Oo(L), Vb(X, 0, 0, 1), q.rotation = P, _j(X, l, 0, 0, Q, Q), X.restore()
                }
                g.background = D
            }
        });
        var rq = function (l) {
            this.sv = l, this.addListeners()
        };
        zb(rq, z, {
            ms_listener: 1, getView: function () {
                return this.sv.getView()
            }, handle_touchstart: function (n) {
                var e = this, C = e.sv, w = C._dividerDiv, Z = C._60O, K = C._61O, Q = C._status, S = n.target;
                if (S === Z) Q === $g ? C.setStatus("cl") : "cr" === Q && C.setStatus($g); else if (S === K) Q === $g ? C.setStatus("cr") : "cl" === Q && C.setStatus($g); else if (_b(n) && (S === w || S === C._coverDiv) && (Mh(n), C.isDraggable())) {
                    C.getLeftView(), C.getRightView();
                    var q = e.maskDiv = Ac();
                    if (q.style.left = 0, q.style.top = 0, q.style.width = C.getWidth() + "px", q.style.height = C.getHeight() + "px", C.getView().appendChild(q), !C.isContinuousLayout()) {
                        var r = e.resizeDiv = Ac();
                        r.style.left = w.style.left, r.style.top = w.style.top, r.style.width = w.style.width, r.style.height = w.style.height, r.style.opacity = C.getDragOpacity(), r.style.background = C.getDividerBackground(), lm(e.getView(), r)
                    }
                    e._lastAbsPosition = C._22o, e._86o = Fr(C) ? Ql(n).x : Ql(n).y, ls(e, n)
                }
            }, handleWindowTouchMove: function (d) {
                _b(d) && this.update(d, this.sv.isContinuousLayout())
            }, handleWindowTouchEnd: function (S) {
                var W = this;
                W.update(S, !0), W.sv.setStatus($g), W.maskDiv && An(W.maskDiv), W.resizeDiv && An(W.resizeDiv), W.maskDiv = W.resizeDiv = t
            }, handle_mousedown: function (Q) {
                Kr(Q) && this.handle_touchstart(Q)
            }, handleWindowMouseMove: function (V) {
                this.handleWindowTouchMove(V)
            }, handleWindowMouseUp: function (o) {
                this.handleWindowTouchEnd(o)
            }, update: function (I, N) {
                var A = this, T = A.sv, j = Fr(T) ? T.getWidth() : T.getHeight(), b = T._dividerSize,
                    Z = A._lastAbsPosition - A._86o;
                Fr(T) ? (Z += Ql(I).x, Z > j - b && (Z = j - b), 0 > Z && (Z = 0), A.resizeDiv && (A.resizeDiv.style.left = Z + Pb)) : (Z += Ql(I).y, Z > j - b && (Z = j - b), 0 > Z && (Z = 0), A.resizeDiv && (A.resizeDiv.style.top = Z + Pb)), N && j !== b && (1 === T._82O ? T.setPosition(Z, 1) : -1 === T._82O ? T.setPosition(Z - j + b, 1) : T.setPosition(Z / (j - b), 1))
            }
        }), Xg.TabView = function () {
            var H = this, V = H._view = Qj(1, H), h = H._91O = Ac(1), X = H._tabModel = new Xl, S = X.sm(),
                R = H.invalidate;
            H._7o = new Gn, H._canvas = ns(h), lm(V, h), lm(V, H._92O = Ac(1)), S.setSelectionMode(Zo), S.ms(R, H), X.mm(R, H), X.md(R, H), X.mh(R, H), new Ah(H), H.iv()
        }, Md("TabView", z, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_ty: 1,
            ms_lp: 1,
            ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", Ck, cg, "tabBackground", "selectWidth", Mf, "moveBackground", "insertColor"],
            _tabPosition: jh,
            _tabHeight: zr,
            _tabGap: N.tabViewTabGap,
            _labelColor: N.tabViewLabelColor,
            _labelFont: N.tabViewLabelFont,
            _tabBackground: N.tabViewTabBackground,
            _selectWidth: N.tabViewSelectWidth,
            _selectBackground: N.tabViewSelectBackground,
            _moveBackground: N.tabViewMoveBackground,
            _insertColor: N.tabViewInsertColor,
            _movable: !0,
            getContentDiv: function () {
                return this._92O
            },
            getTitleDiv: function () {
                return this._91O
            },
            getTabModel: function () {
                return this._tabModel
            },
            add: function (e, $, Y) {
                var H = new Nl, h = this._tabModel;
                return H.setName(e), H.setView($), h.add(H), Y && h.sm().ss(H), H
            },
            getLabel: function (f) {
                return f.toLabel()
            },
            onPropertyChanged: function () {
                this.iv()
            },
            _7Q: function (u) {
                this._23o = u, this.iv()
            },
            get: function (M) {
                var i = this, I = i._tabModel;
                if (cb(M)) return I._roots.get(M);
                if (xq(M)) {
                    var K;
                    return I.each(function (n) {
                        M === i.getLabel(n) && (K = n)
                    }), K
                }
                return M instanceof Nl ? M : t
            },
            select: function (T) {
                this._tabModel.sm().ss(this.get(T))
            },
            remove: function (C) {
                var O = this;
                if (C = O.get(C)) {
                    var W = O._tabModel, f = W._roots.indexOf(C);
                    O._tabModel.remove(C), O._12Q(--f)
                }
            },
            getCurrentTab: function () {
                return this._8o
            },
            hideTabView: function (E, G) {
                G.parentNode === this._92O && (he(G) ? (G.style.display = zj, G._tab_ = E) : An(G), eo())
            },
            showTabView: function (z, p) {
                he(p) && (p.style.display = "block", p._tab_ = z), p.parentNode !== this._92O && (lm(this._92O, p), eo())
            },
            _24o: function () {
                var S, T = this, s = T._8o, N = T._9o, M = T._tabModel.sm().ld();
                M && (S = Bd(M.getView())), S !== N && (N && (s.getView() && s.getView().endEditing && s.getView().endEditing(), T.hideTabView(s, N)), S && T.showTabView(M, S)), T._8o = M, T._9o = S, s !== M && T.onTabChanged(s, M)
            },
            onTabClosing: function () {
                return !0
            },
            onTabChanged: function () {
            },
            onTabClosed: function (I, m) {
                this._12Q(--m)
            },
            _12Q: function (R) {
                var X = this, U = X._tabModel, $ = U.size();
                if ($ && !U.sm().ld()) {
                    R == t && (R = 0), R >= $ && (R = $ - 1), 0 > R && (R = 0);
                    for (var S = R; S >= 0; S--) {
                        var i = X.get(S);
                        if (!i.isDisabled()) return X.select(i), i
                    }
                    for (S = R + 1; $ > S; S++) if (i = X.get(S), !i.isDisabled()) return X.select(i), i
                }
            },
            _9Q: function (q) {
                var v = 4, F = nj(q.getIcon());
                F && (v += ko(F, q) + 4);
                var u = this.getLabel(q);
                return u && (v += Mr(this.getLabelFont(q), u).width + 4), q.isClosable() && (v += 10), v
            },
            drawTab: function (Y, O, I, $, j, V, m) {
                var G, J = this, o = J._tabPosition, T = I + 4, g = J._selectWidth, L = nj(O.getIcon()),
                    h = O.isDisabled(), K = J.getLabelColor(O), X = J.getLabelFont(O), a = J.getLabel(O),
                    W = J._selectBackground, u = o === ur + "-vertical", Q = o === Rl + "-vertical";
                (u || Q) && (T = $ + 4), h && (Y.globalAlpha = yc), ip(Y, I, $, j, V, m), O === J._8o && g && (o === jh ? ip(Y, I, $ + V - g, j, g, W) : o === ur ? ip(Y, I + j - g, $, g, V, W) : o === Rl ? ip(Y, I, $, g, V, W) : u ? ip(Y, I + j - g, $, g, V, W) : Q ? ip(Y, I, $, g, V, W) : ip(Y, I, $, j, g, W));
                var t = j / 2;
                if (u && (tq(Y, t, $ + V / 2), ac(Y, P), tq(Y, -t, -$ - V / 2)), L) {
                    var R = Rh(L, O), D = ko(L, O);
                    if (u || Q) {
                        var B = I + j / 2, C = T + R / 2;
                        tq(Y, B, C), ac(Y, s), tq(Y, -B, -C), pm(Y, L, I + j / 2, T + R / 2, O, J), tq(Y, B, C), ac(Y, -s), tq(Y, -B, -C), T += R + 4
                    } else pm(Y, L, T + D / 2, $ + V / 2, O, J), T += D + 4
                }
                return u || Q ? (tq(Y, j / 2, T + j / 2), ac(Y, s), tq(Y, -j / 2, -T - j / 2), dg(Y, a, X, K, I, T, V, j), tq(Y, j / 2, T + j / 2), ac(Y, -s), tq(Y, -j / 2, -T - j / 2)) : dg(Y, a, X, K, T, $, j, V), u && (tq(Y, t, $ + V / 2), ac(Y, -P), tq(Y, -t, -$ - V / 2)), O.isClosable() && (G = Q ? {
                    x: I + j - 12,
                    y: $ + V - 12,
                    width: 12,
                    height: 12
                } : {
                    x: I + j - 12,
                    y: $ + 2,
                    width: 12,
                    height: 12
                }, this.drawCloseIcon(O, Y, K, G)), h && (Y.globalAlpha = 1), G
            },
            drawCloseIcon: function (b, F, D, y) {
                var K = y.x, I = y.y;
                F.strokeStyle = D, F.lineWidth = 1, F.beginPath(), F.moveTo(K + 2, I + 8), F.lineTo(K + 8, I + 2), F.moveTo(K + 8, I + 8), F.lineTo(K + 2, I + 2), F.stroke()
            },
            validateImpl: function () {
                var y = this;
                y._24o();
                var Q, d = y._canvas, c = y._tabPosition, w = y._91O, I = y._92O, X = y._tabModel, t = y.getWidth(),
                    C = y.getHeight(), P = y._tabHeight, z = y._7o, E = y._tabGap, O = c === jh, b = c === ur,
                    n = c === Rl, F = c === ur + "-vertical", e = c === Rl + "-vertical", D = y._23o, N = 0;
                if ((b || n) && X._roots.each(function (z) {
                    N = K(y._9Q(z), N)
                }), O ? (ef(w, 0, 0, t, P), Q = {
                    x: 0,
                    y: P,
                    width: t,
                    height: K(0, C - P)
                }) : b ? (ef(w, 0, 0, N, C), Q = {
                    x: N,
                    y: 0,
                    width: K(0, t - N),
                    height: C
                }) : n ? (ef(w, t - N, 0, N, C), Q = {
                    x: 0,
                    y: 0,
                    width: K(0, t - N),
                    height: C
                }) : F ? (ef(w, 0, 0, P, C), Q = {
                    x: P,
                    y: 0,
                    width: K(0, t - P),
                    height: C
                }) : e ? (ef(w, t - P, 0, P, C), Q = {
                    x: 0,
                    y: 0,
                    width: K(0, t - P),
                    height: C
                }) : (ef(w, 0, C - P, t, P), Q = {x: 0, y: 0, width: t, height: K(0, C - P)}), ef(I, Q), F || e) {
                    y._9o && (Q.x = 0, ef(y._8o.getView(), Q)), ed(d, P, C);
                    var U = Oo(d), f = 0;
                    if (Vb(U, 0, y.ty(), 1), U.clearRect(0, 0, P, C), z.clear(), X._roots.each(function (k) {
                        var B, i = y._9Q(k);
                        D && D.tab === k || (B = y.drawTab(U, k, 0, f, P, i, y._tabBackground)), z.add({
                            _75o: B,
                            tab: k,
                            startY: f,
                            endY: f + i,
                            height: i
                        }), f += i + E
                    }), y._23Q = K(0, f - E), D) {
                        var $ = D.position;
                        y.drawTab(U, D.tab, 0, D.startY, P, D.height, y._moveBackground), ip(U, 0, $, P, 1, y._insertColor)
                    }
                    U.restore(), y.ty(y.ty())
                } else if (b || n) {
                    y._9o && (Q.x = 0, ef(y._8o.getView(), Q)), ed(d, N, C);
                    var U = Oo(d), f = 0;
                    if (Vb(U, 0, y.ty(), 1), U.clearRect(0, 0, N, C), z.clear(), X._roots.each(function (A) {
                        var d;
                        D && D.tab === A || (d = y.drawTab(U, A, 0, f, N, P, y._tabBackground)), z.add({
                            _75o: d,
                            tab: A,
                            startY: f,
                            endY: f + P,
                            height: P
                        }), f += P + E
                    }), y._23Q = K(0, f - E), D) {
                        var $ = D.position;
                        y.drawTab(U, D.tab, 0, D.startY, N, D.height, y._moveBackground), ip(U, 0, $, N, 1, y._insertColor)
                    }
                    U.restore(), y.ty(y.ty())
                } else {
                    y._9o && (Q.y = 0, ef(y._8o.getView(), Q)), ed(d, t, P);
                    var U = Oo(d), a = 0;
                    if (Vb(U, y.tx(), 0, 1), U.clearRect(0, 0, t, P), z.clear(), X._roots.each(function (X) {
                        var Q, t = y._9Q(X);
                        D && D.tab === X || (Q = y.drawTab(U, X, a, 0, t, P, y._tabBackground)), z.add({
                            _75o: Q,
                            tab: X,
                            startX: a,
                            endX: a + t,
                            width: t
                        }), a += t + E
                    }), y._64I = K(0, a - E), D) {
                        var $ = D.position;
                        y.drawTab(U, D.tab, D.startX, 0, D.width, P, y._moveBackground), mr(U, y._insertColor, $, 0, P)
                    }
                    U.restore(), y.tx(y.tx())
                }
                for (var h = [], v = I.children, T = 0; T < v.length; T++) {
                    var R = v[T], k = R._tab_;
                    k && !X.contains(k) && h.push(R)
                }
                h.forEach(function (z) {
                    I.removeChild(z)
                })
            }
        });
        var Ah = function (J) {
            this.tv = J, this.addListeners()
        };
        zb(Ah, z, {
            ms_listener: 1, getView: function () {
                return this.tv._91O
            }, handle_mousewheel: function (H) {
                this.handleScroll(H, 10 * (H.wheelDelta / 40))
            }, handle_DOMMouseScroll: function (d) {
                this.handleScroll(d, 10 * -d.detail)
            }, handleScroll: function (h, P) {
                Mh(h);
                var j = this.tv, F = j._tabPosition;
                !j._40o() || F !== jh && F !== Af || j.tx(this.tv.tx() + P), !j._41o() || F !== ur && F !== Rl && F !== ur + "-vertical" && F !== Rl + "-vertical" || j.ty(this.tv.ty() + P)
            }, _8Q: function (G) {
                var Z, n, O = this.tv, L = O._tabPosition, d = O._7o;
                if (L === jh || L === Af) {
                    var j = O.lp(G).x;
                    for (Z = 0; Z < d.size(); Z++) if (n = d.get(Z), n.startX <= j && j <= n.endX) return n
                } else if (L === ur || L === Rl || L === ur + "-vertical" || L === Rl + "-vertical") {
                    var P = O.lp(G).y;
                    for (Z = 0; Z < d.size(); Z++) if (n = d.get(Z), n.startY <= P && P <= n.endY) return n
                }
                return t
            }, isClickable: function (x) {
                var o = this.tv, z = o._tabPosition, q = this._73o = this._8Q(x);
                return !o._40o() || z !== jh && z !== Af ? !o._41o() || z !== ur && z !== Rl && z !== ur + "-vertical" && z !== Rl + "-vertical" ? q && (!q.tab.isDisabled() || o.isMovable()) : !0 : !0
            }, handle_mousemove: function (T) {
                var q = this;
                jl ? q._74o = q._8Q(T) : q.getView().style.cursor = q.isClickable(T) ? ws : ""
            }, handle_mousedown: function (X) {
                this.handle_mousemove(X), this.handle_touchstart(X)
            }, handle_touchstart: function (b) {
                var y = this, q = y.tv, S = q._tabPosition;
                Mh(b), y.isClickable(b) && (S === jh || S === Af ? (y.x = Ql(b).x, y.lp = q.lp(b), y.tx = q.tx()) : (y.y = Ql(b).y, y.lp = q.lp(b), y.ty = q.ty()), ls(y, b))
            }, handleWindowMouseMove: function (c) {
                this.handleWindowTouchMove(c)
            }, handleWindowTouchMove: function (T) {
                var k, t = this, l = t.tv, g = l._tabPosition, q = t._73o;
                if (g === jh || g === Af) {
                    if (k = Ql(T).x - t.x, !t._25o && !t.moving && G(k) > 2 && (l._40o() && !zp(T) ? t._25o = 1 : q && l.isMovable() && (t.moving = 1)), t._25o) l.tx(t.tx + k); else if (t.moving) {
                        var u = t.lp.x + k, h = l._tabGap / 2;
                        l._7o.each(function (z) {
                            var T = z.endX, w = u - z.startX < T - u;
                            u >= z.startX && T >= u && l._7Q({
                                tab: q.tab,
                                startX: q.startX + k,
                                width: q.width,
                                front: w,
                                insertTab: z.tab,
                                position: w ? K(0, z.startX - h) : _(l._64I, T + h)
                            })
                        })
                    }
                } else if (k = Ql(T).y - t.y, !t._25o && !t.moving && G(k) > 2 && (l._41o() && !zp(T) ? t._25o = 1 : q && l.isMovable() && (t.moving = 1)), t._25o) l.ty(t.ty + k); else if (t.moving) {
                    var X = t.lp.y + k, h = l._tabGap / 2;
                    l._7o.each(function (O) {
                        var n = O.endY, R = X - O.startY < n - X;
                        X >= O.startY && n >= X && l._7Q({
                            tab: q.tab,
                            startY: q.startY + k,
                            height: q.height,
                            front: R,
                            insertTab: O.tab,
                            position: R ? K(0, O.startY - h) : _(l._23Q, n + h)
                        })
                    })
                }
            }, handleWindowMouseUp: function (Q) {
                this.handleWindowTouchEnd(Q)
            }, handleWindowTouchEnd: function () {
                var m = this, v = m.tv, G = v._tabPosition, c = v.getTabModel(), n = c._roots, Z = m._73o;
                if (m.moving) {
                    var q = v._23o;
                    if (q && q.insertTab !== q.tab) {
                        var N = q.tab, u = n.remove(N), $ = n.indexOf(q.insertTab);
                        $ >= 0 && (q.front || $++, $ <= n.size() && (n.add(N, $), c._38I(N, u, $)))
                    }
                    v._7Q(t), delete m.moving
                } else if (!m._25o && Z) {
                    N = Z.tab;
                    var K = m._74o;
                    if (!K || K.tab === N) if (!N.isDisabled() && Nf(Z._75o, m.lp)) {
                        var E = function () {
                            var y = n.indexOf(N);
                            c.remove(N), v.onTabClosed(N, y)
                        };
                        v.onTabClosing(N, E) && E()
                    } else N.isDisabled() || v._8o === N || c.sm().ss(N)
                }
                m._25o = m._73o = m._74o = G === jh || G === Af ? m.x = m.lp = m.tx = t : m.y = m.lp = m.ty = t
            }
        }), Xg.PropertyView = function (v) {
            var s = this;
            s._view = Qj(1, s), s._canvas = ns(s._view), lm(s._view, s._79O = Ac()), s._rows = new Gn, s._28o = new Gn, s._26o = {}, s._26Q = {};
            var f = s._propertyModel = new Xl, j = s.ivm;
            f.mm(j, s), f.md(j, s), f.mh(j, s), s.dm(v ? v : new Xl), new dd(s)
        }, Md("PropertyView", z, {
            ms_ac: [Ck, sp, cg, Tr, Fj, "categorizable", Do, Dj, fc, Qo, Uf, Kb, tj, lf, "selectRowIndex", Mf, "background", Bl, id, cn, Kc, Bj],
            ms_v: 1,
            ms_dm: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            _45o: 1,
            _47o: 1,
            ms_tip: 1,
            _29I: af,
            _59I: 0,
            _9I: 0,
            _selectRowIndex: -1,
            _editable: !0,
            _batchEditable: !0,
            _categorizable: !0,
            _indent: Gg,
            _background: N.propertyViewBackground,
            _expandIcon: N.propertyViewExpandIcon,
            _collapseIcon: N.propertyViewCollapseIcon,
            _scrollBarColor: kb,
            _scrollBarSize: yk,
            _autoHideScrollBar: jq,
            _selectBackground: N.propertyViewSelectBackground,
            _rowHeight: sq,
            _rowLineVisible: N.propertyViewRowLineVisible,
            _rowLineColor: N.propertyViewRowLineColor,
            _10I: .5,
            _columnLineVisible: N.propertyViewColumnLineVisible,
            _columnLineColor: N.propertyViewColumnLineColor,
            _labelColor: N.propertyViewLabelColor,
            _labelSelectColor: N.propertyViewLabelSelectColor,
            _labelFont: N.propertyViewLabelFont,
            getRows: function () {
                return this._rows
            },
            getColumnPosition: function () {
                return this._10I
            },
            setColumnPosition: function (D) {
                0 > D && (D = 0), D > 1 && (D = 1);
                var J = this, j = J._10I;
                J._10I = D, J.fp("columnPosition", j, D)
            },
            getPropertyName: function (_) {
                return _.toLabel()
            },
            getLabelFont: function () {
                return this._labelFont
            },
            getLabelColor: function (C, _, B) {
                return B === this._selectRowIndex ? this._labelSelectColor : this._labelColor
            },
            getPropertyFont: function () {
                return this._labelFont
            },
            getPropertyColor: function (g, Z) {
                return Z === this._selectRowIndex ? this._labelSelectColor : g.getColor() || this._labelColor
            },
            getCategoryFont: function () {
                return this._labelFont
            },
            getCategoryColor: function () {
                return this._labelColor
            },
            adjustTranslateX: function () {
                return 0
            },
            adjustTranslateY: function (M) {
                var j = this.getHeight() - this._59I;
                return j > M && (M = j), M > 0 ? 0 : $(M)
            },
            isExpanded: function (S) {
                if (!S) return !0;
                var W = this._26o[S];
                return W ? W.isExpanded : !(this._26Q[S] === !1)
            },
            toggle: function (a) {
                var T = this;
                T.isExpanded(a) ? T.collapse(a) : T.expand(a)
            },
            expandAll: function () {
                this.validate();
                for (var J in this._26o) this.expand(J)
            },
            expand: function (J) {
                if (J && J !== zj) {
                    var h = this, $ = h._26o[J];
                    $ && !$.isExpanded && ($.isExpanded = !0, h.onExpanded(J), h.ivm())
                }
            },
            onExpanded: function () {
            },
            collapseAll: function () {
                this.validate();
                for (var C in this._26o) this.collapse(C)
            },
            collapse: function (C) {
                if (C && C !== zj) {
                    var R = this, M = R._26o[C];
                    M && M.isExpanded && (M.isExpanded = !1, R.onCollapsed(C), R.ivm())
                }
            },
            onCollapsed: function () {
            },
            getCategoryName: function (A) {
                if (!this.isCategorizable()) return zj;
                var B = A.getCategoryName();
                return B ? B : zj
            },
            getPropertyModel: function () {
                return this._propertyModel
            },
            setDataModel: function (H) {
                var i = this, O = i._dataModel;
                O !== H && (O && (O.umd(i.handlePropertyChange, i), i._selectionModel || O.sm().ums(i.ivm, i)), i._dataModel = H, H.md(i.handlePropertyChange, i), i._selectionModel ? i._selectionModel._21I(H) : H.sm().ms(i.ivm, i), i.fp(ec, O, H))
            },
            isVisible: function (W) {
                return this._visibleFunc ? this._visibleFunc(W) : !0
            },
            onPropertyChanged: function (N) {
                var f = this, s = N.property;
                li[s] ? f.ivm() : f.iv(), s === Sj && f._43o()
            },
            getCurrentData: function () {
                return this._27o
            },
            updateCurrentData: function () {
                this._27o = this.sm().ld()
            },
            getRawProperties: function () {
                return this._27o ? this._propertyModel._roots : Ne
            },
            handlePropertyChange: function (I) {
                this._27o === I.data && this.iv()
            },
            ivm: function () {
                this.invalidateModel()
            },
            invalidateModel: function () {
                var T = this;
                T._96I || (T.setSelectRowIndex(-1), T._96I = 1, T.iv())
            },
            redraw: function () {
                this.iv()
            },
            validateModel: function () {
                var Y = this, S = Y._rows, K = Y._28o, Q = {}, L = new Gn, P = Y._27o;
                Y.updateCurrentData(), P !== Y._27o && Y.endEditing(), S.clear(), K.clear(), Y.getRawProperties().each(function (W) {
                    if (Y.isVisible(W)) {
                        L.add(W);
                        var q = Y.getCategoryName(W);
                        Q[q] || (K.add(q, q === zj ? 0 : f), Q[q] = {isExpanded: Y.isExpanded(q), properties: new Gn})
                    }
                }), Y._sortFunc && L.sort(Y._sortFunc);
                for (var l in Y._26o) Y._26Q[l] = Y.isExpanded(l);
                Y._26o = Q, K.each(function (q) {
                    q !== zj && S.add(q);
                    var U = Q[q];
                    U.isExpanded && L.each(function (K) {
                        Y.getCategoryName(K) === q && (U.properties.add(K), S.add({property: K, data: Y._27o}))
                    }, Y)
                })
            },
            validateImpl: function () {
                var r = this;
                r._76o(), r._96I && (r.validateModel(), delete r._96I);
                var K = r._canvas, J = r.getWidth(), C = r.getHeight(), N = -r.ty(), D = r._rowHeight, L = r._indent,
                    s = J - L, $ = r._rows, F = $.size(), T = r._9I = L + s * r._10I, d = r._59I = F * D;
                ed(K, J, C), r._29I = {
                    x: 0,
                    y: N,
                    width: J,
                    height: C
                }, r._31I = I(N / D), r._14I = c((N + C) / D), r._31I < 0 && (r._31I = 0), r._14I > F && (r._14I = F);
                var O, g = Oo(K), k = r._background;
                Vb(g, 0, -N, 1), g.beginPath(), g.rect(0, N, J, C), g.clip(), g.clearRect(0, N, J, C), r._93db(g), k && ip(g, 0, 0, L, d, k);
                for (var Q = r._31I; Q < r._14I; Q++) {
                    var p = $.get(Q), N = D * Q;
                    if (xq(p)) k && ip(g, L, N, s, D, k), O = nj(r.isExpanded(p) ? r._expandIcon : r._collapseIcon), O && Gi(g, O, Ih, 0, N, L, D), g.save(), g.beginPath(), g.rect(L, N, s, D), g.clip(), r.drawCategoryName(g, p, Q, L, N, s, D), g.restore(); else {
                        var q = p.property, R = p.data, O = nj(q.getIcon()),
                            e = r._selectRowIndex === Q ? r.getSelectBackground() : t;
                        if (O && Gi(g, O, Ih, 0, N, L, D), e && ip(g, L, N, s, D, e), g.save(), g.beginPath(), g.rect(L, N, T - L, D), g.clip(), r.drawPropertyName(g, q, Q, L, N, T - L, D), g.restore(), !r.isEditing(R, q)) {
                            var a = T + 1, V = J - T - 1;
                            g.save(), g.beginPath(), g.rect(a, N, V, D), g.clip(), r._87o(r.drawPropertyValue(g, q, r.getValue(R, q), Q, a, N, V, D, R), Q, a, N, V, D), g.restore()
                        }
                    }
                    r._rowLineVisible && ip(g, L, N + D - 1, s, 1, r._rowLineColor)
                }
                r._columnLineVisible && (ip(g, T, 0, 1, d, r._columnLineColor), ip(g, J - 1, 0, 1, d)), r._92db(g), r._93I(), g.restore(), r.ty(r.ty())
            },
            drawCategoryName: function (w, D, X, H, E, Z, S) {
                dg(w, D, this.getCategoryFont(D), this.getCategoryColor(D), H, E, Z, S)
            },
            drawPropertyName: function (d, Z, e, B, y, r, $) {
                return Z.drawPropertyName ? (Z.drawPropertyName(d, Z, e, B, y, r, $, this), void 0) : (dg(d, this.getPropertyName(Z), this.getPropertyFont(Z, e), this.getPropertyColor(Z, e), B, y, r, $), void 0)
            },
            drawPropertyValue: function (Z, f, T, Q, M, _, b, e, I) {
                return f.drawPropertyValue ? f.drawPropertyValue(Z, f, T, Q, M, _, b, e, I, this) : (Km(Z, T, f, this.getLabelFont(f, T, Q), this.getLabelColor(f, T, Q), M, _, b, e, I, this), void 0)
            },
            isPropertyEditable: function (X) {
                return X.isEditable() && this.isEditable()
            },
            setProperties: function (T) {
                this._propertyModel.clear(), this.addProperties(T)
            },
            addProperties: function (D) {
                if (D) {
                    var U = this._propertyModel;
                    D.forEach(function (L) {
                        if (!(L instanceof hf)) {
                            var W = Ag(L.className);
                            L = bk(W ? W : hf, L)
                        }
                        U.add(L)
                    })
                }
            },
            getRowIndexAt: function (V) {
                var G = this, i = I(G.lp(V).y / G._rowHeight);
                return i >= 0 && i < G._rows.size() ? i : -1
            },
            getPropertyAt: function (y) {
                var b = this, S = b.getRowIndexAt(y);
                return S >= 0 ? b._rows.get(S).property : t
            },
            getToolTip: function (Y) {
                var E = this, h = E.getPropertyAt(Y), s = E._27o;
                return h && s ? h.getToolTip(s, E._9I < E.lp(Y).x, E) : t
            }
        });
        var dd = function (m) {
            this.pv = m, this.addListeners()
        };
        zb(dd, z, {
            ms_listener: 1, getView: function () {
                return this.pv._view
            }, setCursor: function (K) {
                this.getView().style.cursor = K
            }, clear: function () {
                var R = this;
                R._62O = R.cp = R.ty = R.p = t, R.setCursor(V)
            }, handle_mousedown: function (e) {
                this.handle_touchstart(e)
            }, handle_touchstart: function (b) {
                var o = this, r = o.pv;
                Mh(b), r.setFocus(b) && (Kr(b) ? (o.cp = Ql(b), o.ty = r.ty(), o.p = r.getColumnPosition(), o.handle_touchmove(b)) : r.setSelectRowIndex(r.getRowIndexAt(b)))
            }, handleWindowMouseUp: function () {
                this.clear()
            }, handleWindowTouchEnd: function () {
                this.clear()
            }, handle_mouseup: function (k) {
                this.handle_touchend(k)
            }, handle_touchend: function (R) {
                var p = this;
                if (p.cp && !p._62O) {
                    var $ = p.pv, W = $.lp(R), b = W.x, a = W.y, n = $._indent, e = $.getRowIndexAt(R), h = $._9I;
                    if (e >= 0) {
                        var D = $._rowHeight, M = D * e, Q = $._rows.get(e), K = Q.property;
                        if (xq(Q)) nj($.isExpanded(Q) ? $._expandIcon : $._collapseIcon) && b >= 0 && n >= b && a >= M && M + D >= a ? $.toggle(Q) : tf(R) && $.toggle(Q); else if (b > h && $.isPropertyEditable(K, R)) {
                            var E = {x: h + 1, y: M, width: $.getWidth() - h - 1, height: D},
                                U = {x: E.x + $.tx(), y: E.y + $.ty(), width: E.width, height: E.height}, k = 0,
                                A = $._29I;
                            E.y < A.y ? k = E.y - A.y : E.y + D > A.y + A.height && (k = E.y + D - A.y - A.height), k && ($.ty($.ty() - k), U.y -= k), $.beginEditing({
                                data: Q.data,
                                property: K,
                                value: $.getValue(Q.data, K),
                                event: R,
                                rect: E,
                                editorRect: U,
                                view: $
                            })
                        }
                    }
                    $.setSelectRowIndex(e)
                }
                p.clear()
            }, handleWindowMouseMove: function (M) {
                this.handleWindowTouchMove(M)
            }, handleWindowTouchMove: function (U) {
                var f = this, c = f.pv, d = f.ty, X = f.cp, O = Ql(U), z = f._62O;
                if ("p" === z) c.setTranslateY(d + O.y - X.y); else if ("c" === z) {
                    var S = c.getWidth() - c._indent;
                    if (S > 16) {
                        var p = f.p - (X.x - O.x) / S, j = 16 / S;
                        j > p && (p = j), p > 1 - j && (p = 1 - j), c.setColumnPosition(p)
                    }
                } else "s" === z && c.setTranslateY(d + (X.y - O.y) * c._59I / c._29I.height)
            }, handle_mousemove: function (L) {
                this.handle_touchmove(L)
            }, handle_touchmove: function (b) {
                if (!jl && Kr(b)) {
                    var A = this, f = A.pv, r = G(f.lp(b).x - f._9I) <= (w ? 8 : 3);
                    A.cp ? A._62O || (r ? (A._62O = "c", ls(A)) : G(Ql(b).y - A.cp.y) >= 2 && (A._62O = A.isV(b) ? "s" : "p", ls(A))) : (r ? A.setCursor(Ok) : A.setCursor(V), A.isV(b) && f._43o())
                }
            }, isV: function (Y) {
                var X = this.pv, c = X._29I;
                return X._41o() && c.x + c.width - X.lp(Y).x < ff
            }, handle_mousewheel: function (j) {
                this.handleScroll(j, j.wheelDelta / 40)
            }, handle_DOMMouseScroll: function (Z) {
                2 === Z.axis && this.handleScroll(Z, -Z.detail)
            }, handleScroll: function (X, l) {
                var Y = this.pv;
                Mh(X), Y.endEditing(), Y.translate(0, l * Y.getRowHeight())
            }, handle_keydown: function (i) {
                var v = this.pv, s = v._rows.size(), z = v._selectRowIndex + (Jb(i) ? -1 : 1);
                (Jb(i) || Hd(i)) && (0 > z && (z = 0), z >= s && (z = s - 1), v.setSelectRowIndex(z))
            }
        }), Xg.ListView = function (G) {
            this._5o(G), new wc(this)
        }, Md("ListView", z, {
            ms_ac: [Ck, sp, cg, Bl, Do, id, cn, Dj, fc, Kb, tj, lf, Di, Mf],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            _14Q: 1,
            ms_dm: 1,
            _45o: 1,
            _checkMode: !1,
            _indent: Gg,
            _rowHeight: sq,
            _rowLineVisible: N.listViewRowLineVisible,
            _rowLineColor: N.listViewRowLineColor,
            _scrollBarColor: kb,
            _scrollBarSize: yk,
            _autoMakeVisible: Sg,
            _autoHideScrollBar: jq,
            _selectBackground: N.listViewSelectBackground,
            _labelColor: N.listViewLabelColor,
            _labelSelectColor: N.listViewLabelSelectColor,
            _labelFont: N.listViewLabelFont,
            isCheckMode: function () {
                return this._checkMode
            },
            setCheckMode: function (n) {
                var K = this, x = K._checkMode;
                K._checkMode = n, K.fp(lh, x, n)
            },
            drawRow: function (C, j, w, z, Z, u, h) {
                var R = this, y = 0, H = R._indent, D = R.getIconWidth(j);
                R.drawRowBackground(C, j, w, z, Z, u, h), R._checkMode && (pm(C, R.getCheckIcon(j), y + H / 2, Z + h / 2, j, R), y += H), R.drawIcon(C, j, y, Z, D, h), R.drawLabel(C, j, y + D, Z, h)
            }
        });
        var wc = function (A) {
            this.list = A, this._lastSelectDataTime = Im(), this.addListeners()
        };
        zb(wc, z, {
            ms_listener: 1, getView: function () {
                return this.list._view
            }, clear: function (E) {
                var O = this, D = O.list;
                E && "d" === O._62O && !O.dragCancel && D.handleDragAndDrop(E, "end"), D.draggingData && (D.draggingData = null, D.redraw()), O.dragCancel = O._62O = O._isV = O._isH = O.cp = O.tx = O.ty = t
            }, handle_mousedown: function (A) {
                this.handle_touchstart(A)
            }, handle_touchstart: function (F) {
                var d = this, D = d.list;
                if (Mh(F), D.setFocus(F)) {
                    var o = D.getDataAt(F);
                    d.cp = Ql(F), d.tx = D.tx(), d.ty = D.ty(), Kr(F) ? o && D.handleDragAndDrop && !d.isV(F) && !d.isH(F) && (D.draggingData = o, D.redraw(), D.handleDragAndDrop(F, "prepare")) : (o && d._33o(F, o), d.clear(F))
                }
            }, handleWindowMouseUp: function (k) {
                this.clear(k)
            }, handleWindowTouchEnd: function (P) {
                this.clear(P)
            }, handle_mouseup: function (U) {
                this.handle_touchend(U)
            }, handle_touchend: function (v) {
                var z = this, t = z.list;
                if (!z._isV && !z._isH && z.cp && !z._62O) {
                    var B = t.getDataAt(v);
                    B ? (t.isCheckMode() ? z._34o(v, B) : z._33o(v, B), tf(v) ? t.onDataDoubleClicked(B, v) : t.onDataClicked(B, v)) : t.handleBackgroundClick(v)
                }
                z.clear(v)
            }, handleWindowMouseMove: function (E) {
                this.handleWindowTouchMove(E)
            }, handleWindowTouchMove: function (c) {
                var M = this, Y = M.list, w = M._62O, _ = M.tx, X = M.ty, T = M.cp, t = Ql(c), H = Y._29I;
                "p" === w ? Y.setTranslate(_ + t.x - T.x, X + t.y - T.y) : "v" === w ? Y.ty(X + (T.y - t.y) * Y._59I / H.height) : "h" === w ? Y.tx(_ + (T.x - t.x) * Y._91I / H.width) : "d" === w && (M.dragCancel || Y.handleDragAndDrop(c, "between"))
            }, handle_mousemove: function (O) {
                this.handle_touchmove(O)
            }, handle_touchmove: function (r) {
                if (!jl && Kr(r)) {
                    var _ = this, Q = _.list;
                    if (_._isV = _.isV(r), _._isH = _.isH(r), _.cp) {
                        if (!_._62O) {
                            if (Lb(Ql(r), _.cp) < 2) return;
                            _._isV ? _._62O = "v" : _._isH ? _._62O = "h" : Q.draggingData && !this.dragCancel ? (_._62O = "d", Q.handleDragAndDrop(r, "begin")) : _._62O = "p", _._62O && "d" !== _._62O && Q.draggingData && (Q.draggingData = null, Q.redraw()), ls(_)
                        }
                    } else _._isV && Q._43o(), _._isH && Q._42o()
                }
            }, isV: function (M) {
                var N = this.list, p = N._29I;
                return N._41o() && p.x + p.width - N.lp(M).x < ff
            }, isH: function (p) {
                var l = this.list, $ = l._29I;
                return l._40o() && $.y + $.height - l.lp(p).y < ff
            }, handle_mousewheel: function (T) {
                this.handleScroll(T, T.wheelDelta / 40, T.wheelDelta !== T.wheelDeltaX)
            }, handle_DOMMouseScroll: function (x) {
                this.handleScroll(x, -x.detail, 1)
            }, handleScroll: function (S, B, C) {
                var G = this.list;
                Mh(S), G.endEditing && G.endEditing(), C && G._41o() ? G.translate(0, B * G.getRowHeight()) : G._40o() && G.translate(10 * B, 0)
            }, handle_keydown: function (B) {
                if (!N.isInput(B.target)) {
                    var I, H = this.list, r = H.sm(), s = H._rows, q = s.size();
                    if (Zb(B)) H.selectAll(); else if (Xk(B)) H.handleDelete && H.handleDelete(B); else if (Ij(B)) "d" !== this._62O || this.dragCancel || (H.handleDragAndDrop(B, "cancel"), this.dragCancel = !0); else if (Jg(B)) H.isCheckMode() && (I = H.getFocusData(), I && H.checkData(I)); else if (Jb(B) || Hd(B)) {
                        var Z = H.isCheckMode();
                        if (I = Z ? H.getFocusData() : r.ld()) {
                            var o = H.getRowIndex(I);
                            o >= 0 && (Jb(B) ? 0 !== o && (I = s.get(o - 1), Z ? H.setFocusData(I) : r.ss(I)) : o !== q - 1 && (I = s.get(o + 1), Z ? H.setFocusData(I) : r.ss(I)))
                        } else q > 0 && (I = s.get(0), Z ? H.setFocusData(I) : r.ss(I))
                    }
                }
            }, _34o: function (z, c) {
                var s = this.list, Z = s.lp(z).x;
                return Z >= 0 && Z <= s._indent ? (s.checkData(c), void 0) : (s.setFocusData(c), void 0)
            }, _33o: function (q, S) {
                var V = this.list, X = V.sm(), D = X.ld();
                if (zp(q)) V.isSelected(S) ? X.rs(S) : X.as(S); else if (es(q)) if (D) for (var R = V.getRowIndex(D), s = V.getRowIndex(S); R !== s;) R += s > R ? 1 : -1, X.as(V._rows.get(R)); else X.ss(S); else if (Kr(q)) {
                    var $ = Im();
                    if (X.contains(S)) {
                        var k = $ - this._lastSelectDataTime;
                        V.handleDataDoubleSelect && k > 500 && 1500 > k && V.handleDataDoubleSelect(q, S)
                    }
                    X.ss(S), this._lastSelectDataTime = $
                } else X.contains(S) || X.ss(S)
            }
        }), Xg.TreeView = function (r) {
            var B = this;
            B._35o(), B._5o(r), new Id(B)
        }, Md("TreeView", z, {
            ms_ac: [Ck, sp, cg, "rootVisible", lh, "rootData", Dj, fc, Kb, tj, lf, Do, Bl, id, cn, Qo, Uf, Di, Mf, "loader", "doubleClickToToggle"],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _checkMode: t,
            _indent: Gg,
            _rowHeight: sq,
            _rowLineVisible: N.treeViewRowLineVisible,
            _rowLineColor: N.treeViewRowLineColor,
            _scrollBarColor: kb,
            _scrollBarSize: yk,
            _autoHideScrollBar: jq,
            _expandIcon: N.treeViewExpandIcon,
            _collapseIcon: N.treeViewCollapseIcon,
            _autoMakeVisible: Sg,
            _selectBackground: N.treeViewSelectBackground,
            _labelColor: N.treeViewLabelColor,
            _labelSelectColor: N.treeViewLabelSelectColor,
            _labelFont: N.treeViewLabelFont,
            _doubleClickToToggle: N.treeViewDoubleClickToToggle,
            drawRow: function (z, F, g, w, V, C, c) {
                var O = this;
                O.drawRowBackground(z, F, g, w, V, C, c), O._97I(z, F, g, 0, V, C, c)
            },
            isOnToggleIcon: function (R) {
                var $ = this.getDataAt(R);
                if ($) {
                    var p = this.getIndent(), V = this.lp(R).x;
                    if (nj(this.getToggleIcon($))) {
                        var E = p * this.getLevel($);
                        if (V >= E && E + p >= V) return !0
                    }
                }
                return !1
            }
        });
        var Id = function ($) {
            Ge(Id, this, [$])
        };
        zb(Id, wc, {
            toggle: function (P, M, q, z) {
                var D = this.list, O = D.lp(P).x;
                if (nj(D.getToggleIcon(M))) {
                    var n = q * z;
                    if (O >= n && n + q >= O) return D.toggle(M), !0
                }
                return D.isDoubleClickToToggle() && tf(P) ? (D.toggle(M), !0) : !1
            }, _34o: function (b, d) {
                var i = this.list, t = i.lp(b).x, E = i._levelMap[d._id], I = i._indent, u = I * (E + 1);
                return t >= u && u + I >= t ? (i.checkData(d), void 0) : (this.toggle(b, d, I, E) || i.setFocusData(d), void 0)
            }, _33o: function (y, h) {
                var p = this, B = p.list;
                p.toggle(y, h, B._indent, B.getLevel(h)) || Id.superClass._33o.call(p, y, h)
            }, handle_keydown: function (T) {
                if (yf(T) || ck(T)) {
                    var q = this.list, i = q._rows, j = q.isCheckMode(), n = q.sm(), L = j ? q.getFocusData() : n.ld();
                    L ? L.hasChildren() && (yf(T) ? q.collapse(L) : q.expand(L)) : i.size() > 0 && (L = i.get(0), j ? q.setFocusData(L) : n.ss(L))
                } else Id.superClass.handle_keydown.call(this, T)
            }
        });
        var Wi = Xg.TableView = function (S) {
            this._98I(), this._5o(S), new bf(this)
        };
        Md("TableView", z, {
            ms_ac: [Ck, sp, cg, "sortMode", Tr, Fj, Bl, id, cn, Kc, Bj, "sortColumn", Dj, fc, Kb, tj, lf, Di, Mf],
            ms_v: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: Ri,
            _editable: !0,
            _batchEditable: !1,
            _rowHeight: sq,
            _rowLineVisible: N.tableViewRowLineVisible,
            _rowLineColor: N.tableViewRowLineColor,
            _columnLineVisible: N.tableViewColumnLineVisible,
            _columnLineColor: N.tableViewColumnLineColor,
            _scrollBarColor: kb,
            _scrollBarSize: yk,
            _autoHideScrollBar: jq,
            _autoMakeVisible: Sg,
            _selectBackground: N.tableViewSelectBackground,
            _labelColor: N.tableViewLabelColor,
            _labelSelectColor: N.tableViewLabelSelectColor,
            _labelFont: N.tableViewLabelFont,
            getCheckColumn: function () {
                var n = this;
                if (!n._31o) {
                    var A = n._31o = new mf;
                    A.setEditable(!0), A.setWidth(40), A.getValue = n.getCheckColumValue, A.drawCell = n.drawCheckColumnCell
                }
                return n._31o
            },
            isCheckMode: function () {
                return this._39o.contains(this._31o)
            },
            setCheckMode: function (N) {
                var D = this, x = D._39o, $ = D.getCheckColumn();
                N !== D.isCheckMode() && (N ? x.add($, 0) : x.remove($), D.fp(lh, !N, N))
            },
            getCheckColumValue: function (J, k, K) {
                return K.isSelected(J)
            },
            drawCheckColumnCell: function (u, _, D, m, K, X, f, L, M) {
                pm(u, M.getCheckIcon(_), K + f / 2, X + L / 2, _, M)
            }
        });
        var bf = function (R) {
            Ge(bf, this, [R])
        };
        zb(bf, wc, {
            _34o: function (Q, I) {
                var Y = this.list, V = Y._31o;
                if (Y.isCellEditable(I, V, Q)) {
                    var r = Y._3Q(V), z = Y.lp(Q).x;
                    if (r && z >= r.startX && z < r.startX + V.getWidth()) return Y.checkData(I), void 0
                }
                Y.setFocusData(I), Y._37O(I, Q)
            }, _33o: function (A, M) {
                bf.superClass._33o.apply(this, arguments), this.list._37O(M, A)
            }
        });
        var Ur = Xg.TreeTableView = function (W) {
            var h = this, S = h._4o = new mf;
            h._35o(), h._98I(), h._5o(W), S.setDisplayName("Name"), S.setEditable(!0), S.setWidth(180), S.drawCell = _d, S.getValue = Uc, h._39o.add(S), new Dr(h)
        }, _d = function (A, p, O, I, w, W, h, H, R) {
            R._97I(A, p, O, w, W, h, H)
        }, Uc = function (Z, u, l) {
            return l.getLabel(Z)
        };
        Md("TreeTableView", z, {
            ms_ac: [Ck, sp, cg, "sortMode", Tr, Fj, Do, lh, "rootData", "rootVisible", Dj, fc, "sortColumn", Qo, Uf, Kb, tj, lf, Di, cn, Bl, id, Kc, Bj, Mf, "loader"],
            ms_v: 1,
            ms_bnb: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: Ri,
            _checkMode: t,
            _editable: !0,
            _batchEditable: !1,
            _indent: Gg,
            _rowHeight: sq,
            _rowLineVisible: N.treeTableViewRowLineVisible,
            _rowLineColor: N.treeTableViewRowLineColor,
            _columnLineVisible: N.treeTableViewColumnLineVisible,
            _columnLineColor: N.treeTableViewColumnLineColor,
            _expandIcon: N.treeTableViewExpandIcon,
            _collapseIcon: N.treeTableViewCollapseIcon,
            _scrollBarColor: kb,
            _scrollBarSize: yk,
            _autoHideScrollBar: jq,
            _autoMakeVisible: Sg,
            _selectBackground: N.treeTableViewSelectBackground,
            _labelColor: N.treeTableViewLabelColor,
            _labelSelectColor: N.treeTableViewLabelSelectColor,
            _labelFont: N.treeTableViewLabelFont,
            getTreeColumn: function () {
                return this._4o
            }
        });
        var Dr = function (F) {
            Ge(Dr, this, [F])
        };
        zb(Dr, wc, {
            _34o: function (H, n) {
                var s = this.list, i = s._4o, j = s._3Q(i), T = s.lp(H).x;
                if (j) {
                    var $ = s._indent, m = j.startX + $ * s.getLevel(n);
                    if (nj(s.getToggleIcon(n)) && T >= m && m + $ >= T) return s.toggle(n), void 0;
                    if (s.isCellEditable(n, i) && (m += $, T >= m && m + $ >= T)) return s.checkData(n), void 0
                }
                s.setFocusData(n), s._37O(n, H)
            }, _33o: function (g, q) {
                var J = this.list, x = J.lp(g).x;
                if (nj(J.getToggleIcon(q))) {
                    var I = J._3Q(J._4o);
                    if (I) {
                        var f = J._indent, h = I.startX + f * J.getLevel(q);
                        if (x >= h && h + f >= x) return J.toggle(q), void 0
                    }
                }
                Dr.superClass._33o.apply(this, arguments), J._37O(q, g)
            }
        });
        var iq = Xg.TableHeader = function (y) {
            var S = this, u = S._view = Qj(1, S), O = S._39o = y.getColumnModel(), g = S.iv;
            S.tv = S._tableView = y, S._60I = new Gn, S._canvas = ns(u), u.style.background = N.tableHeaderBackground || "", u.style.height = ir + Pb, O.mm(g, S), O.md(g, S), O.mh(g, S), y.mp(function (d) {
                Xq[d.property] && S.iv()
            }, S), new Vf(S), S.iv()
        };
        Md("TableHeader", z, {
            ms_v: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", Ck, cg, Do, "moveBackground", "insertColor", Kc, Bj, "resizable", "movable"],
            _checkIcon: Ap,
            _movable: !0,
            _resizable: !0,
            _labelColor: N.tableHeaderLabelColor,
            _labelFont: N.tableHeaderLabelFont,
            _columnLineColor: N.tableHeaderColumnLineColor,
            _columnLineVisible: N.tableHeaderColumnLineVisible,
            _sortDescIcon: N.tableHeaderSortDescIcon,
            _sortAscIcon: N.tableHeaderSortAscIcon,
            _moveBackground: N.tableHeaderMoveBackground,
            _insertColor: N.tableHeaderInsertColor,
            _indent: Gg,
            getCheckIcon: function () {
                return this._checkIcon
            },
            getTableView: function () {
                return this.tv
            },
            getLabel: function (v) {
                return v.toLabel()
            },
            getLabelFont: function () {
                return this._labelFont
            },
            getLabelColor: function (f) {
                return f.getColor() || this._labelColor
            },
            getLabelAlign: function (M) {
                return M._align
            },
            onPropertyChanged: function () {
                this.iv()
            },
            _5Q: function (V) {
                this._61I = V, this.iv()
            },
            getLogicalPoint: function (Y) {
                return Xn(Y, this._canvas, this.tv.tx())
            },
            validateImpl: function () {
                var R = this, h = R._canvas, n = R.getWidth(), L = R.getHeight(), P = R.tv, y = R._60I, x = R._61I,
                    H = -P.tx(), l = 0;
                (n !== h.clientWidth || L !== h.clientHeight) && ed(h, n, L), y.clear(), R._39o._roots.each(function (u) {
                    if (u.isVisible()) {
                        var F = l + u.getWidth();
                        H + n >= l && F >= H && y.add({column: u, startX: l}), l = F
                    }
                });
                var Y = Oo(h);
                if (Vb(Y, -H, 0, 1), Y.beginPath(), Y.rect(H, 0, n, L), Y.clip(), Y.clearRect(H, 0, n, L), y.each(function (A) {
                    var s = A.column, h = A.startX, V = s.getWidth();
                    V > 0 && (Y.save(), Y.beginPath(), Y.rect(h, 0, V, L), Y.clip(), x && x.column === s || R.drawColumn(Y, s, h, 0, V, L), R._columnLineVisible && ip(Y, h + V - 1, 0, 1, L, R._columnLineColor), Y.restore())
                }), x) {
                    var m = x.column, l = x.startX, k = x.position, E = m.getWidth();
                    Y.save(), Y.beginPath(), Y.rect(l, 0, E, L), Y.clip(), Y.fillStyle = R._moveBackground, Y.fill(), R.drawColumn(Y, m, l, 0, E, L), Y.restore(), mr(Y, R._insertColor, k, 0, L)
                }
                Y.restore()
            },
            _6Q: function (y) {
                var V = this.tv;
                return V._31o === y && V.sm().getSelectionMode() === rp
            },
            drawColumn: function (r, D, Z, R, V, H) {
                var F = this, $ = F.tv, M = nj(D.getIcon()), m = F.getLabelAlign(D);
                if (F._6Q(D)) {
                    var u = nj(F._checkIcon);
                    pm(r, u, Z + V / 2, R + H / 2, D, F)
                } else {
                    var z = F.getLabel(D), b = F.getLabelFont(D), g = F.getLabelColor(D), o = Mr(b, z).width,
                        y = M ? F._indent : 0;
                    m === ur ? (M && Gi(r, M, Ih, Z, R, y, H), dg(r, z, b, g, Z + y, R, V, H, ur)) : m === Rl ? (M && Gi(r, M, Ih, Z + V - o - y, R, y, H), dg(r, z, b, g, Z, R, V, H, Rl)) : (M && Gi(r, M, Ih, Z + (V - o - y) / 2, R, y, H), dg(r, z, b, g, Z + (V - o + y) / 2, R, 0, H, ur))
                }
                if (D.isSortable() && $.getSortColumn() === D && (M = nj(D.getSortOrder() === Po ? F._sortAscIcon : F._sortDescIcon))) {
                    var i = ko(M, D) / 2 + 2;
                    pm(r, M, m === Rl ? Z + i : Z + V - i, R + H / 2, D, $)
                }
            }
        });
        var Vf = function (P) {
            var m = this;
            m.th = P, m.tv = P._tableView, m.addListeners()
        };
        zb(Vf, z, {
            ms_listener: 1, getView: function () {
                return this.th.getView()
            }, setCursor: function (P) {
                this.getView().style.cursor = P
            }, handle_mousemove: function (p) {
                if (!jl) {
                    var F = this;
                    delete F._29o, F.setCursor(V);
                    for (var n = F.th, t = n._60I, T = n.lp(p).x, s = t.size() - 1; s >= 0; s--) {
                        var e = t.get(s), l = e.column, c = e.startX + l.getWidth();
                        if (n.isResizable() && G(c - T) <= (w ? 10 : 3)) return F._29o = e, F.setCursor(Ok), void 0;
                        T > e.startX && c > T && (F._29o = e), (l.isClickable() || l.isSortable() || n.isMovable() || F.tv.getCheckColumn && l === F.tv.getCheckColumn()) && T > e.startX && c > T && F.setCursor(ws)
                    }
                }
            }, handle_mousedown: function (X) {
                this.handle_touchstart(X)
            }, handle_touchstart: function (e) {
                var t = this;
                Mh(e), t.tv.endEditing(), t.handle_mousemove(e), t._29o && (t.x = Ql(e).x, t.lx = t.th.lp(e).x, t.w = t._29o.column.getWidth(), ls(t, e))
            }, handleWindowMouseMove: function (k) {
                this.handleWindowTouchMove(k)
            }, handleWindowTouchMove: function (B) {
                var E = this, k = E.th, V = E.getView().style.cursor, Q = E._29o, U = Ql(B).x - E.x;
                if (E.resizing || E.moving || (V === Ok ? E.resizing = 1 : k.isMovable() && V === ws && G(U) > 2 && (E.moving = 1)), E.resizing) Q.column.setWidth(E.w + U); else if (E.moving) {
                    var w = E.lx + U;
                    k._60I.each(function (N) {
                        var r = N.startX, C = r + N.column.getWidth();
                        if (w >= r && C >= w) {
                            var c = {
                                column: Q.column,
                                startX: Q.startX + U,
                                front: C - w > w - r,
                                insertColumn: N.column
                            };
                            c.position = c.front ? r : C, k._5Q(c)
                        }
                    })
                }
            }, _16Q: function (x, I) {
                var E = this, Z = E.tv, L = E.th, h = L._checkIcon;
                if (L._6Q(x)) {
                    var J = nj(h), M = E.lx, g = x.getWidth(), n = ko(J, x);
                    if (M >= I + g / 2 - n && I + g / 2 + n >= M) {
                        L.setCheckIcon(h === Cr ? Ap : Cr);
                        var q = Z.sm(), t = Z._rows;
                        return h === Cr ? q.rs(t) : q.ss(t), Z.onCheckColumnClicked(x), !0
                    }
                }
                return !1
            }, handleWindowMouseUp: function (h) {
                this.handleWindowTouchEnd(h)
            }, handleWindowTouchEnd: function (s) {
                var K = this, x = K.tv, Q = K.th, a = K._29o;
                if (K.moving) {
                    var O = Q._61I;
                    if (O && O.insertColumn !== O.column) {
                        var I = O.column, T = x.getColumnModel()._roots, H = T.remove(I), f = T.indexOf(O.insertColumn);
                        f >= 0 && (O.front || f++, f <= T.size() && (T.add(I, f), x.getColumnModel()._38I(I, H, f)))
                    }
                    Q._5Q(t), delete K.moving
                } else if (!K.resizing && a) {
                    I = a.column;
                    var F = Q.lp(s).x, V = a.startX, o = !0;
                    if (Q.onColumnClicked) {
                        var S = Q.onColumnClicked(I, s, V);
                        S === !1 && (o = !1)
                    }
                    if (o && F >= V && F <= V + I.getWidth() && !K._16Q(I, V)) {
                        if (I.isSortable()) {
                            var M = x.getSortMode(), A = I.getSortOrder();
                            M === Ri ? x.getSortColumn() === I ? (A === Jh && x.setSortColumn(t), I.setSortOrder(A === Po ? Jh : Po)) : x.setSortColumn(I) : "bistate" === M && (x.getSortColumn() === I ? I.setSortOrder(A === Po ? Jh : Po) : x.setSortColumn(I))
                        }
                        x.onColumnClicked(I, s, V)
                    }
                }
                K._29o = K.resizing = K.x = K.lx = K.w = t
            }
        }), Xg.TablePane = function (r) {
            this.init(new Wi(r))
        }, Md("TablePane", z, {ms_v: 1, _44o: 1}), Xg.TreeTablePane = function (T) {
            this.init(new Ur(T))
        }, Md("TreeTablePane", z, {ms_v: 1, _44o: 1}), Xg.Toolbar = function (Y) {
            var x = this, K = x._view = Qj(1, x), m = K.style;
            m.background = N.toolbarBackground || "", m.height = zr + Pb, x._canvas = ns(K), x._30o = new Gn, x._90I = new Gn, x.setItems(Y || []), K.handleGroupSelectedChanged = function (s) {
                if (s.isSelected()) {
                    var A = s.getGroupId();
                    null != A && x._items.forEach(function (k) {
                        var r = k.element;
                        r && r !== s && r.setSelected && r.getGroupId && r.getGroupId() === A && r.setSelected(!1)
                    })
                }
            }, new Pn(x)
        }, Md("Toolbar", z, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_lp: 1,
            ms_tip: 1,
            ms_value: 1,
            ms_ac: [Lj, Ck, cg, sp, Mf, "itemGap", "separatorColor", "currentItem", "stickToRight"],
            _labelColor: N.toolbarLabelColor,
            _labelSelectColor: N.toolbarLabelSelectColor,
            _labelFont: N.toolbarLabelFont,
            _selectBackground: N.toolbarSelectBackground,
            _itemGap: N.toolbarItemGap,
            _separatorColor: N.toolbarSeparatorColor,
            _stickToRight: !1,
            getSumWidth: function () {
                return this._64I
            },
            getToolTip: function (H) {
                var J = this.getItemInfoAt(H);
                return J ? J.item.toolTip : t
            },
            getLabelColor: function (M) {
                return M && M.selected && M.type !== Cr && M.type !== gs ? this._labelSelectColor : this._labelColor
            },
            onPropertyChanged: function (G) {
                this.iv(), G.property === Lj && this._items.forEach(function (P) {
                    Zk(P)
                })
            },
            redraw: function () {
                this.iv()
            },
            addItem: function (X, U) {
                var k = this._items;
                U == t ? k.push(X) : k.splice(U, 0, X), this.fp(Lj, t, k)
            },
            removeItem: function (Q) {
                if (Q) for (var f = this._items, l = 0; l < f.length; l++) Q === f[l] && (f.splice(l, 1), this.fp(Lj, t, f))
            },
            removeItemById: function (W) {
                if (W != t) for (var S = this._items, u = 0; u < S.length; u++) W === S[u].id && (S.splice(u, 1), this.fp(Lj, t, S))
            },
            getItemById: function (x) {
                if (x != t) for (var y = this._items, N = 0; N < y.length; N++) {
                    var r = y[N];
                    if (x === r.id) return r
                }
            },
            getItemInfos: function () {
                return this._30o
            },
            getItemInfoAt: function (O) {
                var I = this, b = 0, e = I._30o, v = I.lp(O), Q = v.x, Y = v.y;
                if (Y >= 0 && Y <= I.getHeight()) for (; b < e.size(); b++) {
                    var U = e.get(b);
                    if (U.startX <= Q && Q <= U.endX) return U
                }
                return t
            },
            drawItem: function (E, R, y, N, r) {
                if (R.visible === !1) return 0;
                if (qd(R.visible) && R.visible() === !1) return 0;
                var g = this, Q = R.disabled;
                Q && (E.globalAlpha = yc);
                var j = g.drawItemImpl(E, R, y, N, r), $ = g._itemGap;
                return Q && (E.globalAlpha = 1), this._currentItem !== R || "separator" === R || R.separator === !0 || R.unfocusable || Tc(E, g._separatorColor, y - $ / 2, 0, j + $, N), j
            },
            drawItemImpl: function (m, z, B, W, M) {
                var V = this, n = V._view, E = V._itemGap, j = W / 2, y = z.type, w = z.element, J = z.label;
                xq(w) && (J = w, w = t);
                var H, $ = V.getLabelFont(z), k = V.getLabelColor(z), v = z.selected, s = nj(z.icon), C = ko(s, z),
                    N = 0, R = C + (J ? Mr($, J).width : 0);
                if ("separator" === z || z.separator === !0) return mr(m, V._separatorColor, B, W / 4, j), 1;
                if (w) {
                    s && pm(m, s, B + C / 2, j), dg(m, J, $, k, B + C, 0, 0, W);
                    var q = Bd(w);
                    M || V._90I.add(q), q.parentNode !== n && lm(n, q), w.iv && w.iv(), w.validate && w.validate();
                    var p = q.getBoundingClientRect(), h = p.width, Y = q.style;
                    return cl(q), Y.left = V.tx() + B + R + Pb, Y.top = (W - p.height) / 2 + Pb, R + h
                }
                return y === gs ? H = nj(v ? zg : Eq) : y === Cr && (H = nj(v ? Cr : Ap)), H ? (N = ko(H, z), pm(m, H, B + N / 2, j), B += N, R += N) : v && ip(m, B - E / 2, 0, R + E, W, V.getSelectBackground(z)), s && pm(m, s, B + C / 2, j), dg(m, J, $, k, B + C, 0, 0, W), R
            },
            validateImpl: function () {
                var i = this, $ = i._canvas, J = i.getWidth(), d = i.getHeight(), E = i._30o, H = i._items;
                ed($, J, d);
                var P = Oo($), j = i._itemGap, q = j / 2;
                Vb(P, i.tx(), 0, 1), P.clearRect(0, 0, J, d);
                var t = i._90I;
                i._90I = new Gn, E.clear(), H.forEach(function (R) {
                    var t = i.drawItem(P, R, q, d);
                    E.add({item: R, startX: q, endX: q + t, width: t}), t && (q += t + j)
                }), t.each(function (V) {
                    i._90I.contains(V) || An(V)
                }), i._64I = K(0, q), P.restore(), i._stickToRight ? (i._65O = 0, P = Oo($), q = J - i._64I + j, Vb(P, 0, 0, 1), P.clearRect(0, 0, J, d), E.clear(), H.forEach(function (a) {
                    var e = i.drawItem(P, a, q, d, !0);
                    E.add({item: a, startX: q, endX: q + e, width: e}), e && (q += e + j)
                }), P.restore()) : i.tx(i.tx())
            },
            handleClick: function (m) {
                var j = this, E = m.type, P = m.action, S = m.groupId, M = m.selected;
                m.disabled || (S != t ? M || (m.selected = !0, this._items.forEach(function (u) {
                    u.groupId === S && m !== u && (u.selected = !1)
                }), P && m.action(m, j)) : E === Cr || "toggle" === E ? (m.selected = !M, P && m.action(m, j)) : P && m.action(m, j)), eo(), j.iv()
            }
        });
        var Pn = function (x) {
            this.tb = x, this.addListeners()
        };
        zb(Pn, z, {
            ms_listener: 1, getView: function () {
                return this.tb._view
            }, handle_mousewheel: function (D) {
                this.handleScroll(D, 10 * (D.wheelDelta / 40))
            }, handle_DOMMouseScroll: function (k) {
                this.handleScroll(k, 10 * -k.detail)
            }, handleScroll: function (q, W) {
                Mh(q);
                var F = this.tb;
                F.isScrollable() && !F._stickToRight && (F.tx(F.tx() + W), oc())
            }, handle_mousemove: function (M) {
                var e = this;
                jl ? e.info2 = e.tb.getItemInfoAt(M) : e.setItem(M)
            }, handle_mouseout: function (f) {
                var q = this;
                f.target === q.getView() ? q.tb.setCurrentItem(t) : q.handle_mousemove(f)
            }, handle_mousedown: function (n) {
                this.handle_mousemove(n), this.handle_touchstart(n)
            }, handle_touchstart: function ($) {
                var M = this, I = M.tb, y = $.target;
                Kr($) && (y === M.getView() || y === I._canvas) && (Mh($), I.setFocus($) && (this.setItem($, !0), (I.isScrollable() || M.info && !M.info.item.disabled) && (M.x = Ql($).x, M.tx = I.tx(), ls(M, $))))
            }, handleWindowMouseMove: function (p) {
                this.handleWindowTouchMove(p)
            }, handleWindowTouchMove: function (L) {
                var b = this, B = b.tb;
                if (!B._stickToRight) {
                    var i = Ql(L).x - b.x;
                    !b._25o && G(i) > 2 && B.isScrollable() && (b._25o = 1), b._25o && B.tx(b.tx + i)
                }
            }, handleWindowMouseUp: function (e) {
                this.handleWindowTouchEnd(e)
            }, handleWindowTouchEnd: function () {
                var X = this, q = X.tb, B = X.info, J = X.info2;
                if (!X._25o && B) {
                    var s = B.item;
                    J && J.item !== s || q.handleClick(s)
                }
                X._25o = X.x = X.tx = X.info2 = t, X.setItem()
            }, setItem: function (u, B) {
                var c = this, R = c.tb, k = c.info = u ? R.getItemInfoAt(u) : t, Y = k ? k.item : t;
                R.setCurrentItem(Y), B && Y && qd(Y.onDown) && Y.onDown(u)
            }
        }), Xg.BorderPane = function () {
            this._view = Qj(1, this), this.iv()
        }, Md("BorderPane", z, {
            ms_v: 1,
            ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
            ms_fire: 1,
            getLeftView: function () {
                return this._leftView
            },
            setLeftView: function (F, K) {
                this._12o("leftView", F), K != t && this.setLeftWidth(K)
            },
            getRightView: function () {
                return this._rightView
            },
            setRightView: function (h, B) {
                this._12o("rightView", h), B != t && this.setRightWidth(B)
            },
            getTopView: function () {
                return this._topView
            },
            setTopView: function (W, g) {
                this._12o("topView", W), g != t && this.setTopHeight(g)
            },
            getBottomView: function () {
                return this._bottomView
            },
            setBottomView: function (n, $) {
                this._12o("bottomView", n), $ != t && this.setBottomHeight($)
            },
            getCenterView: function () {
                return this._centerView
            },
            setCenterView: function (S) {
                this._12o("centerView", S)
            },
            _12o: function (Y, k) {
                var r = this, J = "_" + Y, O = r._view, j = r[J];
                j !== k && (j && (j.getView ? An(j.getView()) : An(j)), r[J] = k, k && (k.getView ? lm(O, k.getView(), 1) : lm(O, k, 1)), r.fp(Y, j, k))
            },
            onPropertyChanged: function () {
                this.iv()
            },
            validateImpl: function () {
                var z = this, P = z._topView, L = z._bottomView, R = z._leftView, J = z._rightView, H = z._centerView,
                    y = z.getWidth(), B = z.getHeight(), c = 0, T = 0, m = y, w = B, Z = 0, I = 0, N = 0, G = 0;
                P && (Z = z._topHeight == t ? np(P) : z._topHeight, T = Z), L && (I = z._bottomHeight == t ? np(L) : z._bottomHeight, w = B - I), R && (N = z._leftWidth == t ? Sl(R) : z._leftWidth, c = N), J && (G = z._rightWidth == t ? Sl(J) : z._rightWidth, m = y - G);
                var d = K(0, m - c), E = K(0, w - T);
                P && ef(P, 0, 0, y, Z), L && ef(L, 0, w, y, I), R && ef(R, 0, T, N, E), J && ef(J, m, T, G, E), H && ef(H, c, T, d, E)
            }
        })
    }
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);
