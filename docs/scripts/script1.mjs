function et(T) {
  var P = new Error(T);
  return P.source = "ulid", P;
}
var Ni = "0123456789ABCDEFGHJKMNPQRSTVWXYZ", ir = Ni.length, ls = Math.pow(2, 48) - 1, lg = 10, ug = 16;
function dg(T) {
  var P = Math.floor(T() * ir);
  return P === ir && (P = ir - 1), Ni.charAt(P);
}
function fg(T, P) {
  if (isNaN(T))
    throw new Error(T + " must be a number");
  if (T > ls)
    throw et("cannot encode time greater than " + ls);
  if (T < 0)
    throw et("time must be positive");
  if (Number.isInteger(T) === !1)
    throw et("time must be an integer");
  for (var s = void 0, F = ""; P > 0; P--)
    s = T % ir, F = Ni.charAt(s) + F, T = (T - s) / ir;
  return F;
}
function hg(T, P) {
  for (var s = ""; T > 0; T--)
    s = dg(P) + s;
  return s;
}
function pg() {
  var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, P = arguments[1];
  P || (P = typeof window < "u" ? window : null);
  var s = P && (P.crypto || P.msCrypto);
  if (s)
    return function() {
      var K = new Uint8Array(1);
      return s.getRandomValues(K), K[0] / 255;
    };
  try {
    var F = require("crypto");
    return function() {
      return F.randomBytes(1).readUInt8() / 255;
    };
  } catch {
  }
  if (T) {
    try {
      console.error("secure crypto unusable, falling back to insecure Math.random()!");
    } catch {
    }
    return function() {
      return Math.random();
    };
  }
  throw et("secure crypto unusable, insecure Math.random not allowed");
}
function gg(T) {
  return T || (T = pg()), function(s) {
    return isNaN(s) && (s = Date.now()), fg(s, lg) + hg(ug, T);
  };
}
var Eg = gg(), tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _g(T) {
  return T && T.__esModule && Object.prototype.hasOwnProperty.call(T, "default") ? T.default : T;
}
var rt = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
rt.exports;
(function(T, P) {
  (function() {
    var s, F = "4.17.21", K = 200, re = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", rn = "Expected a function", tt = "Invalid `variable` option passed into `_.template`", it = "__lodash_hash_undefined__", fs = 500, ar = "__lodash_placeholder__", $n = 1, Li = 2, fe = 4, he = 1, or = 2, mn = 1, pe = 2, yi = 4, kn = 8, je = 16, Pn = 32, ke = 64, Mn = 128, Pe = 256, at = 512, hs = 30, ps = "...", gs = 800, Es = 16, bi = 1, _s = 2, Cs = 3, sr = 1 / 0, ge = 9007199254740991, As = 17976931348623157e292, cr = NaN, yn = 4294967295, Is = yn - 1, vs = yn >>> 1, ms = [
      ["ary", Mn],
      ["bind", mn],
      ["bindKey", pe],
      ["curry", kn],
      ["curryRight", je],
      ["flip", at],
      ["partial", Pn],
      ["partialRight", ke],
      ["rearg", Pe]
    ], Ee = "[object Arguments]", lr = "[object Array]", Ts = "[object AsyncFunction]", Me = "[object Boolean]", xe = "[object Date]", Ss = "[object DOMException]", ur = "[object Error]", dr = "[object Function]", Di = "[object GeneratorFunction]", Tn = "[object Map]", Ge = "[object Number]", Os = "[object Null]", xn = "[object Object]", ji = "[object Promise]", Rs = "[object Proxy]", Ue = "[object RegExp]", Sn = "[object Set]", we = "[object String]", fr = "[object Symbol]", Ns = "[object Undefined]", Fe = "[object WeakMap]", Ls = "[object WeakSet]", Be = "[object ArrayBuffer]", _e = "[object DataView]", ot = "[object Float32Array]", st = "[object Float64Array]", ct = "[object Int8Array]", lt = "[object Int16Array]", ut = "[object Int32Array]", dt = "[object Uint8Array]", ft = "[object Uint8ClampedArray]", ht = "[object Uint16Array]", pt = "[object Uint32Array]", ys = /\b__p \+= '';/g, bs = /\b(__p \+=) '' \+/g, Ds = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ki = /&(?:amp|lt|gt|quot|#39);/g, Pi = /[&<>"']/g, js = RegExp(ki.source), ks = RegExp(Pi.source), Ps = /<%-([\s\S]+?)%>/g, Ms = /<%([\s\S]+?)%>/g, Mi = /<%=([\s\S]+?)%>/g, xs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gs = /^\w*$/, Us = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gt = /[\\^$.*+?()[\]{}|]/g, ws = RegExp(gt.source), Et = /^\s+/, Fs = /\s/, Bs = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Vs = /\{\n\/\* \[wrapped with (.+)\] \*/, Ys = /,? & /, Ws = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Hs = /[()=,{}\[\]\/\s]/, $s = /\\(\\)?/g, Ks = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, xi = /\w*$/, Qs = /^[-+]0x[0-9a-f]+$/i, Js = /^0b[01]+$/i, qs = /^\[object .+?Constructor\]$/, Xs = /^0o[0-7]+$/i, zs = /^(?:0|[1-9]\d*)$/, Zs = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, hr = /($^)/, nc = /['\n\r\u2028\u2029\\]/g, pr = "\\ud800-\\udfff", ec = "\\u0300-\\u036f", rc = "\\ufe20-\\ufe2f", tc = "\\u20d0-\\u20ff", Gi = ec + rc + tc, Ui = "\\u2700-\\u27bf", wi = "a-z\\xdf-\\xf6\\xf8-\\xff", ic = "\\xac\\xb1\\xd7\\xf7", ac = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", oc = "\\u2000-\\u206f", sc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fi = "A-Z\\xc0-\\xd6\\xd8-\\xde", Bi = "\\ufe0e\\ufe0f", Vi = ic + ac + oc + sc, _t = "['’]", cc = "[" + pr + "]", Yi = "[" + Vi + "]", gr = "[" + Gi + "]", Wi = "\\d+", lc = "[" + Ui + "]", Hi = "[" + wi + "]", $i = "[^" + pr + Vi + Wi + Ui + wi + Fi + "]", Ct = "\\ud83c[\\udffb-\\udfff]", uc = "(?:" + gr + "|" + Ct + ")", Ki = "[^" + pr + "]", At = "(?:\\ud83c[\\udde6-\\uddff]){2}", It = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ce = "[" + Fi + "]", Qi = "\\u200d", Ji = "(?:" + Hi + "|" + $i + ")", dc = "(?:" + Ce + "|" + $i + ")", qi = "(?:" + _t + "(?:d|ll|m|re|s|t|ve))?", Xi = "(?:" + _t + "(?:D|LL|M|RE|S|T|VE))?", zi = uc + "?", Zi = "[" + Bi + "]?", fc = "(?:" + Qi + "(?:" + [Ki, At, It].join("|") + ")" + Zi + zi + ")*", hc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", pc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", na = Zi + zi + fc, gc = "(?:" + [lc, At, It].join("|") + ")" + na, Ec = "(?:" + [Ki + gr + "?", gr, At, It, cc].join("|") + ")", _c = RegExp(_t, "g"), Cc = RegExp(gr, "g"), vt = RegExp(Ct + "(?=" + Ct + ")|" + Ec + na, "g"), Ac = RegExp([
      Ce + "?" + Hi + "+" + qi + "(?=" + [Yi, Ce, "$"].join("|") + ")",
      dc + "+" + Xi + "(?=" + [Yi, Ce + Ji, "$"].join("|") + ")",
      Ce + "?" + Ji + "+" + qi,
      Ce + "+" + Xi,
      pc,
      hc,
      Wi,
      gc
    ].join("|"), "g"), Ic = RegExp("[" + Qi + pr + Gi + Bi + "]"), vc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, mc = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Tc = -1, U = {};
    U[ot] = U[st] = U[ct] = U[lt] = U[ut] = U[dt] = U[ft] = U[ht] = U[pt] = !0, U[Ee] = U[lr] = U[Be] = U[Me] = U[_e] = U[xe] = U[ur] = U[dr] = U[Tn] = U[Ge] = U[xn] = U[Ue] = U[Sn] = U[we] = U[Fe] = !1;
    var G = {};
    G[Ee] = G[lr] = G[Be] = G[_e] = G[Me] = G[xe] = G[ot] = G[st] = G[ct] = G[lt] = G[ut] = G[Tn] = G[Ge] = G[xn] = G[Ue] = G[Sn] = G[we] = G[fr] = G[dt] = G[ft] = G[ht] = G[pt] = !0, G[ur] = G[dr] = G[Fe] = !1;
    var Sc = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Oc = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Rc = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Nc = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Lc = parseFloat, yc = parseInt, ea = typeof tr == "object" && tr && tr.Object === Object && tr, bc = typeof self == "object" && self && self.Object === Object && self, J = ea || bc || Function("return this")(), mt = P && !P.nodeType && P, te = mt && !0 && T && !T.nodeType && T, ra = te && te.exports === mt, Tt = ra && ea.process, pn = function() {
      try {
        var u = te && te.require && te.require("util").types;
        return u || Tt && Tt.binding && Tt.binding("util");
      } catch {
      }
    }(), ta = pn && pn.isArrayBuffer, ia = pn && pn.isDate, aa = pn && pn.isMap, oa = pn && pn.isRegExp, sa = pn && pn.isSet, ca = pn && pn.isTypedArray;
    function cn(u, h, f) {
      switch (f.length) {
        case 0:
          return u.call(h);
        case 1:
          return u.call(h, f[0]);
        case 2:
          return u.call(h, f[0], f[1]);
        case 3:
          return u.call(h, f[0], f[1], f[2]);
      }
      return u.apply(h, f);
    }
    function Dc(u, h, f, C) {
      for (var S = -1, j = u == null ? 0 : u.length; ++S < j; ) {
        var H = u[S];
        h(C, H, f(H), u);
      }
      return C;
    }
    function gn(u, h) {
      for (var f = -1, C = u == null ? 0 : u.length; ++f < C && h(u[f], f, u) !== !1; )
        ;
      return u;
    }
    function jc(u, h) {
      for (var f = u == null ? 0 : u.length; f-- && h(u[f], f, u) !== !1; )
        ;
      return u;
    }
    function la(u, h) {
      for (var f = -1, C = u == null ? 0 : u.length; ++f < C; )
        if (!h(u[f], f, u))
          return !1;
      return !0;
    }
    function Kn(u, h) {
      for (var f = -1, C = u == null ? 0 : u.length, S = 0, j = []; ++f < C; ) {
        var H = u[f];
        h(H, f, u) && (j[S++] = H);
      }
      return j;
    }
    function Er(u, h) {
      var f = u == null ? 0 : u.length;
      return !!f && Ae(u, h, 0) > -1;
    }
    function St(u, h, f) {
      for (var C = -1, S = u == null ? 0 : u.length; ++C < S; )
        if (f(h, u[C]))
          return !0;
      return !1;
    }
    function w(u, h) {
      for (var f = -1, C = u == null ? 0 : u.length, S = Array(C); ++f < C; )
        S[f] = h(u[f], f, u);
      return S;
    }
    function Qn(u, h) {
      for (var f = -1, C = h.length, S = u.length; ++f < C; )
        u[S + f] = h[f];
      return u;
    }
    function Ot(u, h, f, C) {
      var S = -1, j = u == null ? 0 : u.length;
      for (C && j && (f = u[++S]); ++S < j; )
        f = h(f, u[S], S, u);
      return f;
    }
    function kc(u, h, f, C) {
      var S = u == null ? 0 : u.length;
      for (C && S && (f = u[--S]); S--; )
        f = h(f, u[S], S, u);
      return f;
    }
    function Rt(u, h) {
      for (var f = -1, C = u == null ? 0 : u.length; ++f < C; )
        if (h(u[f], f, u))
          return !0;
      return !1;
    }
    var Pc = Nt("length");
    function Mc(u) {
      return u.split("");
    }
    function xc(u) {
      return u.match(Ws) || [];
    }
    function ua(u, h, f) {
      var C;
      return f(u, function(S, j, H) {
        if (h(S, j, H))
          return C = j, !1;
      }), C;
    }
    function _r(u, h, f, C) {
      for (var S = u.length, j = f + (C ? 1 : -1); C ? j-- : ++j < S; )
        if (h(u[j], j, u))
          return j;
      return -1;
    }
    function Ae(u, h, f) {
      return h === h ? Qc(u, h, f) : _r(u, da, f);
    }
    function Gc(u, h, f, C) {
      for (var S = f - 1, j = u.length; ++S < j; )
        if (C(u[S], h))
          return S;
      return -1;
    }
    function da(u) {
      return u !== u;
    }
    function fa(u, h) {
      var f = u == null ? 0 : u.length;
      return f ? yt(u, h) / f : cr;
    }
    function Nt(u) {
      return function(h) {
        return h == null ? s : h[u];
      };
    }
    function Lt(u) {
      return function(h) {
        return u == null ? s : u[h];
      };
    }
    function ha(u, h, f, C, S) {
      return S(u, function(j, H, x) {
        f = C ? (C = !1, j) : h(f, j, H, x);
      }), f;
    }
    function Uc(u, h) {
      var f = u.length;
      for (u.sort(h); f--; )
        u[f] = u[f].value;
      return u;
    }
    function yt(u, h) {
      for (var f, C = -1, S = u.length; ++C < S; ) {
        var j = h(u[C]);
        j !== s && (f = f === s ? j : f + j);
      }
      return f;
    }
    function bt(u, h) {
      for (var f = -1, C = Array(u); ++f < u; )
        C[f] = h(f);
      return C;
    }
    function wc(u, h) {
      return w(h, function(f) {
        return [f, u[f]];
      });
    }
    function pa(u) {
      return u && u.slice(0, Ca(u) + 1).replace(Et, "");
    }
    function ln(u) {
      return function(h) {
        return u(h);
      };
    }
    function Dt(u, h) {
      return w(h, function(f) {
        return u[f];
      });
    }
    function Ve(u, h) {
      return u.has(h);
    }
    function ga(u, h) {
      for (var f = -1, C = u.length; ++f < C && Ae(h, u[f], 0) > -1; )
        ;
      return f;
    }
    function Ea(u, h) {
      for (var f = u.length; f-- && Ae(h, u[f], 0) > -1; )
        ;
      return f;
    }
    function Fc(u, h) {
      for (var f = u.length, C = 0; f--; )
        u[f] === h && ++C;
      return C;
    }
    var Bc = Lt(Sc), Vc = Lt(Oc);
    function Yc(u) {
      return "\\" + Nc[u];
    }
    function Wc(u, h) {
      return u == null ? s : u[h];
    }
    function Ie(u) {
      return Ic.test(u);
    }
    function Hc(u) {
      return vc.test(u);
    }
    function $c(u) {
      for (var h, f = []; !(h = u.next()).done; )
        f.push(h.value);
      return f;
    }
    function jt(u) {
      var h = -1, f = Array(u.size);
      return u.forEach(function(C, S) {
        f[++h] = [S, C];
      }), f;
    }
    function _a(u, h) {
      return function(f) {
        return u(h(f));
      };
    }
    function Jn(u, h) {
      for (var f = -1, C = u.length, S = 0, j = []; ++f < C; ) {
        var H = u[f];
        (H === h || H === ar) && (u[f] = ar, j[S++] = f);
      }
      return j;
    }
    function Cr(u) {
      var h = -1, f = Array(u.size);
      return u.forEach(function(C) {
        f[++h] = C;
      }), f;
    }
    function Kc(u) {
      var h = -1, f = Array(u.size);
      return u.forEach(function(C) {
        f[++h] = [C, C];
      }), f;
    }
    function Qc(u, h, f) {
      for (var C = f - 1, S = u.length; ++C < S; )
        if (u[C] === h)
          return C;
      return -1;
    }
    function Jc(u, h, f) {
      for (var C = f + 1; C--; )
        if (u[C] === h)
          return C;
      return C;
    }
    function ve(u) {
      return Ie(u) ? Xc(u) : Pc(u);
    }
    function On(u) {
      return Ie(u) ? zc(u) : Mc(u);
    }
    function Ca(u) {
      for (var h = u.length; h-- && Fs.test(u.charAt(h)); )
        ;
      return h;
    }
    var qc = Lt(Rc);
    function Xc(u) {
      for (var h = vt.lastIndex = 0; vt.test(u); )
        ++h;
      return h;
    }
    function zc(u) {
      return u.match(vt) || [];
    }
    function Zc(u) {
      return u.match(Ac) || [];
    }
    var nl = function u(h) {
      h = h == null ? J : me.defaults(J.Object(), h, me.pick(J, mc));
      var f = h.Array, C = h.Date, S = h.Error, j = h.Function, H = h.Math, x = h.Object, kt = h.RegExp, el = h.String, En = h.TypeError, Ar = f.prototype, rl = j.prototype, Te = x.prototype, Ir = h["__core-js_shared__"], vr = rl.toString, M = Te.hasOwnProperty, tl = 0, Aa = function() {
        var n = /[^.]+$/.exec(Ir && Ir.keys && Ir.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), mr = Te.toString, il = vr.call(x), al = J._, ol = kt(
        "^" + vr.call(M).replace(gt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Tr = ra ? h.Buffer : s, qn = h.Symbol, Sr = h.Uint8Array, Ia = Tr ? Tr.allocUnsafe : s, Or = _a(x.getPrototypeOf, x), va = x.create, ma = Te.propertyIsEnumerable, Rr = Ar.splice, Ta = qn ? qn.isConcatSpreadable : s, Ye = qn ? qn.iterator : s, ie = qn ? qn.toStringTag : s, Nr = function() {
        try {
          var n = le(x, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), sl = h.clearTimeout !== J.clearTimeout && h.clearTimeout, cl = C && C.now !== J.Date.now && C.now, ll = h.setTimeout !== J.setTimeout && h.setTimeout, Lr = H.ceil, yr = H.floor, Pt = x.getOwnPropertySymbols, ul = Tr ? Tr.isBuffer : s, Sa = h.isFinite, dl = Ar.join, fl = _a(x.keys, x), $ = H.max, X = H.min, hl = C.now, pl = h.parseInt, Oa = H.random, gl = Ar.reverse, Mt = le(h, "DataView"), We = le(h, "Map"), xt = le(h, "Promise"), Se = le(h, "Set"), He = le(h, "WeakMap"), $e = le(x, "create"), br = He && new He(), Oe = {}, El = ue(Mt), _l = ue(We), Cl = ue(xt), Al = ue(Se), Il = ue(He), Dr = qn ? qn.prototype : s, Ke = Dr ? Dr.valueOf : s, Ra = Dr ? Dr.toString : s;
      function a(n) {
        if (V(n) && !O(n) && !(n instanceof b)) {
          if (n instanceof _n)
            return n;
          if (M.call(n, "__wrapped__"))
            return Lo(n);
        }
        return new _n(n);
      }
      var Re = /* @__PURE__ */ function() {
        function n() {
        }
        return function(e) {
          if (!B(e))
            return {};
          if (va)
            return va(e);
          n.prototype = e;
          var r = new n();
          return n.prototype = s, r;
        };
      }();
      function jr() {
      }
      function _n(n, e) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = s;
      }
      a.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Ps,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ms,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Mi,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: a
        }
      }, a.prototype = jr.prototype, a.prototype.constructor = a, _n.prototype = Re(jr.prototype), _n.prototype.constructor = _n;
      function b(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = yn, this.__views__ = [];
      }
      function vl() {
        var n = new b(this.__wrapped__);
        return n.__actions__ = tn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = tn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = tn(this.__views__), n;
      }
      function ml() {
        if (this.__filtered__) {
          var n = new b(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Tl() {
        var n = this.__wrapped__.value(), e = this.__dir__, r = O(n), t = e < 0, i = r ? n.length : 0, o = Mu(0, i, this.__views__), c = o.start, l = o.end, d = l - c, p = t ? l : c - 1, g = this.__iteratees__, E = g.length, _ = 0, A = X(d, this.__takeCount__);
        if (!r || !t && i == d && A == d)
          return qa(n, this.__actions__);
        var v = [];
        n:
          for (; d-- && _ < A; ) {
            p += e;
            for (var N = -1, m = n[p]; ++N < E; ) {
              var y = g[N], D = y.iteratee, fn = y.type, en = D(m);
              if (fn == _s)
                m = en;
              else if (!en) {
                if (fn == bi)
                  continue n;
                break n;
              }
            }
            v[_++] = m;
          }
        return v;
      }
      b.prototype = Re(jr.prototype), b.prototype.constructor = b;
      function ae(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.clear(); ++e < r; ) {
          var t = n[e];
          this.set(t[0], t[1]);
        }
      }
      function Sl() {
        this.__data__ = $e ? $e(null) : {}, this.size = 0;
      }
      function Ol(n) {
        var e = this.has(n) && delete this.__data__[n];
        return this.size -= e ? 1 : 0, e;
      }
      function Rl(n) {
        var e = this.__data__;
        if ($e) {
          var r = e[n];
          return r === it ? s : r;
        }
        return M.call(e, n) ? e[n] : s;
      }
      function Nl(n) {
        var e = this.__data__;
        return $e ? e[n] !== s : M.call(e, n);
      }
      function Ll(n, e) {
        var r = this.__data__;
        return this.size += this.has(n) ? 0 : 1, r[n] = $e && e === s ? it : e, this;
      }
      ae.prototype.clear = Sl, ae.prototype.delete = Ol, ae.prototype.get = Rl, ae.prototype.has = Nl, ae.prototype.set = Ll;
      function Gn(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.clear(); ++e < r; ) {
          var t = n[e];
          this.set(t[0], t[1]);
        }
      }
      function yl() {
        this.__data__ = [], this.size = 0;
      }
      function bl(n) {
        var e = this.__data__, r = kr(e, n);
        if (r < 0)
          return !1;
        var t = e.length - 1;
        return r == t ? e.pop() : Rr.call(e, r, 1), --this.size, !0;
      }
      function Dl(n) {
        var e = this.__data__, r = kr(e, n);
        return r < 0 ? s : e[r][1];
      }
      function jl(n) {
        return kr(this.__data__, n) > -1;
      }
      function kl(n, e) {
        var r = this.__data__, t = kr(r, n);
        return t < 0 ? (++this.size, r.push([n, e])) : r[t][1] = e, this;
      }
      Gn.prototype.clear = yl, Gn.prototype.delete = bl, Gn.prototype.get = Dl, Gn.prototype.has = jl, Gn.prototype.set = kl;
      function Un(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.clear(); ++e < r; ) {
          var t = n[e];
          this.set(t[0], t[1]);
        }
      }
      function Pl() {
        this.size = 0, this.__data__ = {
          hash: new ae(),
          map: new (We || Gn)(),
          string: new ae()
        };
      }
      function Ml(n) {
        var e = Hr(this, n).delete(n);
        return this.size -= e ? 1 : 0, e;
      }
      function xl(n) {
        return Hr(this, n).get(n);
      }
      function Gl(n) {
        return Hr(this, n).has(n);
      }
      function Ul(n, e) {
        var r = Hr(this, n), t = r.size;
        return r.set(n, e), this.size += r.size == t ? 0 : 1, this;
      }
      Un.prototype.clear = Pl, Un.prototype.delete = Ml, Un.prototype.get = xl, Un.prototype.has = Gl, Un.prototype.set = Ul;
      function oe(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.__data__ = new Un(); ++e < r; )
          this.add(n[e]);
      }
      function wl(n) {
        return this.__data__.set(n, it), this;
      }
      function Fl(n) {
        return this.__data__.has(n);
      }
      oe.prototype.add = oe.prototype.push = wl, oe.prototype.has = Fl;
      function Rn(n) {
        var e = this.__data__ = new Gn(n);
        this.size = e.size;
      }
      function Bl() {
        this.__data__ = new Gn(), this.size = 0;
      }
      function Vl(n) {
        var e = this.__data__, r = e.delete(n);
        return this.size = e.size, r;
      }
      function Yl(n) {
        return this.__data__.get(n);
      }
      function Wl(n) {
        return this.__data__.has(n);
      }
      function Hl(n, e) {
        var r = this.__data__;
        if (r instanceof Gn) {
          var t = r.__data__;
          if (!We || t.length < K - 1)
            return t.push([n, e]), this.size = ++r.size, this;
          r = this.__data__ = new Un(t);
        }
        return r.set(n, e), this.size = r.size, this;
      }
      Rn.prototype.clear = Bl, Rn.prototype.delete = Vl, Rn.prototype.get = Yl, Rn.prototype.has = Wl, Rn.prototype.set = Hl;
      function Na(n, e) {
        var r = O(n), t = !r && de(n), i = !r && !t && ee(n), o = !r && !t && !i && be(n), c = r || t || i || o, l = c ? bt(n.length, el) : [], d = l.length;
        for (var p in n)
          (e || M.call(n, p)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
          (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
          Vn(p, d))) && l.push(p);
        return l;
      }
      function La(n) {
        var e = n.length;
        return e ? n[Kt(0, e - 1)] : s;
      }
      function $l(n, e) {
        return $r(tn(n), se(e, 0, n.length));
      }
      function Kl(n) {
        return $r(tn(n));
      }
      function Gt(n, e, r) {
        (r !== s && !Nn(n[e], r) || r === s && !(e in n)) && wn(n, e, r);
      }
      function Qe(n, e, r) {
        var t = n[e];
        (!(M.call(n, e) && Nn(t, r)) || r === s && !(e in n)) && wn(n, e, r);
      }
      function kr(n, e) {
        for (var r = n.length; r--; )
          if (Nn(n[r][0], e))
            return r;
        return -1;
      }
      function Ql(n, e, r, t) {
        return Xn(n, function(i, o, c) {
          e(t, i, r(i), c);
        }), t;
      }
      function ya(n, e) {
        return n && Dn(e, Q(e), n);
      }
      function Jl(n, e) {
        return n && Dn(e, on(e), n);
      }
      function wn(n, e, r) {
        e == "__proto__" && Nr ? Nr(n, e, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : n[e] = r;
      }
      function Ut(n, e) {
        for (var r = -1, t = e.length, i = f(t), o = n == null; ++r < t; )
          i[r] = o ? s : Ci(n, e[r]);
        return i;
      }
      function se(n, e, r) {
        return n === n && (r !== s && (n = n <= r ? n : r), e !== s && (n = n >= e ? n : e)), n;
      }
      function Cn(n, e, r, t, i, o) {
        var c, l = e & $n, d = e & Li, p = e & fe;
        if (r && (c = i ? r(n, t, i, o) : r(n)), c !== s)
          return c;
        if (!B(n))
          return n;
        var g = O(n);
        if (g) {
          if (c = Gu(n), !l)
            return tn(n, c);
        } else {
          var E = z(n), _ = E == dr || E == Di;
          if (ee(n))
            return Za(n, l);
          if (E == xn || E == Ee || _ && !i) {
            if (c = d || _ ? {} : Ao(n), !l)
              return d ? Ru(n, Jl(c, n)) : Ou(n, ya(c, n));
          } else {
            if (!G[E])
              return i ? n : {};
            c = Uu(n, E, l);
          }
        }
        o || (o = new Rn());
        var A = o.get(n);
        if (A)
          return A;
        o.set(n, c), Qo(n) ? n.forEach(function(m) {
          c.add(Cn(m, e, r, m, n, o));
        }) : $o(n) && n.forEach(function(m, y) {
          c.set(y, Cn(m, e, r, y, n, o));
        });
        var v = p ? d ? ii : ti : d ? on : Q, N = g ? s : v(n);
        return gn(N || n, function(m, y) {
          N && (y = m, m = n[y]), Qe(c, y, Cn(m, e, r, y, n, o));
        }), c;
      }
      function ql(n) {
        var e = Q(n);
        return function(r) {
          return ba(r, n, e);
        };
      }
      function ba(n, e, r) {
        var t = r.length;
        if (n == null)
          return !t;
        for (n = x(n); t--; ) {
          var i = r[t], o = e[i], c = n[i];
          if (c === s && !(i in n) || !o(c))
            return !1;
        }
        return !0;
      }
      function Da(n, e, r) {
        if (typeof n != "function")
          throw new En(rn);
        return er(function() {
          n.apply(s, r);
        }, e);
      }
      function Je(n, e, r, t) {
        var i = -1, o = Er, c = !0, l = n.length, d = [], p = e.length;
        if (!l)
          return d;
        r && (e = w(e, ln(r))), t ? (o = St, c = !1) : e.length >= K && (o = Ve, c = !1, e = new oe(e));
        n:
          for (; ++i < l; ) {
            var g = n[i], E = r == null ? g : r(g);
            if (g = t || g !== 0 ? g : 0, c && E === E) {
              for (var _ = p; _--; )
                if (e[_] === E)
                  continue n;
              d.push(g);
            } else o(e, E, t) || d.push(g);
          }
        return d;
      }
      var Xn = io(bn), ja = io(Ft, !0);
      function Xl(n, e) {
        var r = !0;
        return Xn(n, function(t, i, o) {
          return r = !!e(t, i, o), r;
        }), r;
      }
      function Pr(n, e, r) {
        for (var t = -1, i = n.length; ++t < i; ) {
          var o = n[t], c = e(o);
          if (c != null && (l === s ? c === c && !dn(c) : r(c, l)))
            var l = c, d = o;
        }
        return d;
      }
      function zl(n, e, r, t) {
        var i = n.length;
        for (r = R(r), r < 0 && (r = -r > i ? 0 : i + r), t = t === s || t > i ? i : R(t), t < 0 && (t += i), t = r > t ? 0 : qo(t); r < t; )
          n[r++] = e;
        return n;
      }
      function ka(n, e) {
        var r = [];
        return Xn(n, function(t, i, o) {
          e(t, i, o) && r.push(t);
        }), r;
      }
      function q(n, e, r, t, i) {
        var o = -1, c = n.length;
        for (r || (r = Fu), i || (i = []); ++o < c; ) {
          var l = n[o];
          e > 0 && r(l) ? e > 1 ? q(l, e - 1, r, t, i) : Qn(i, l) : t || (i[i.length] = l);
        }
        return i;
      }
      var wt = ao(), Pa = ao(!0);
      function bn(n, e) {
        return n && wt(n, e, Q);
      }
      function Ft(n, e) {
        return n && Pa(n, e, Q);
      }
      function Mr(n, e) {
        return Kn(e, function(r) {
          return Yn(n[r]);
        });
      }
      function ce(n, e) {
        e = Zn(e, n);
        for (var r = 0, t = e.length; n != null && r < t; )
          n = n[jn(e[r++])];
        return r && r == t ? n : s;
      }
      function Ma(n, e, r) {
        var t = e(n);
        return O(n) ? t : Qn(t, r(n));
      }
      function Z(n) {
        return n == null ? n === s ? Ns : Os : ie && ie in x(n) ? Pu(n) : Ku(n);
      }
      function Bt(n, e) {
        return n > e;
      }
      function Zl(n, e) {
        return n != null && M.call(n, e);
      }
      function nu(n, e) {
        return n != null && e in x(n);
      }
      function eu(n, e, r) {
        return n >= X(e, r) && n < $(e, r);
      }
      function Vt(n, e, r) {
        for (var t = r ? St : Er, i = n[0].length, o = n.length, c = o, l = f(o), d = 1 / 0, p = []; c--; ) {
          var g = n[c];
          c && e && (g = w(g, ln(e))), d = X(g.length, d), l[c] = !r && (e || i >= 120 && g.length >= 120) ? new oe(c && g) : s;
        }
        g = n[0];
        var E = -1, _ = l[0];
        n:
          for (; ++E < i && p.length < d; ) {
            var A = g[E], v = e ? e(A) : A;
            if (A = r || A !== 0 ? A : 0, !(_ ? Ve(_, v) : t(p, v, r))) {
              for (c = o; --c; ) {
                var N = l[c];
                if (!(N ? Ve(N, v) : t(n[c], v, r)))
                  continue n;
              }
              _ && _.push(v), p.push(A);
            }
          }
        return p;
      }
      function ru(n, e, r, t) {
        return bn(n, function(i, o, c) {
          e(t, r(i), o, c);
        }), t;
      }
      function qe(n, e, r) {
        e = Zn(e, n), n = To(n, e);
        var t = n == null ? n : n[jn(In(e))];
        return t == null ? s : cn(t, n, r);
      }
      function xa(n) {
        return V(n) && Z(n) == Ee;
      }
      function tu(n) {
        return V(n) && Z(n) == Be;
      }
      function iu(n) {
        return V(n) && Z(n) == xe;
      }
      function Xe(n, e, r, t, i) {
        return n === e ? !0 : n == null || e == null || !V(n) && !V(e) ? n !== n && e !== e : au(n, e, r, t, Xe, i);
      }
      function au(n, e, r, t, i, o) {
        var c = O(n), l = O(e), d = c ? lr : z(n), p = l ? lr : z(e);
        d = d == Ee ? xn : d, p = p == Ee ? xn : p;
        var g = d == xn, E = p == xn, _ = d == p;
        if (_ && ee(n)) {
          if (!ee(e))
            return !1;
          c = !0, g = !1;
        }
        if (_ && !g)
          return o || (o = new Rn()), c || be(n) ? Eo(n, e, r, t, i, o) : ju(n, e, d, r, t, i, o);
        if (!(r & he)) {
          var A = g && M.call(n, "__wrapped__"), v = E && M.call(e, "__wrapped__");
          if (A || v) {
            var N = A ? n.value() : n, m = v ? e.value() : e;
            return o || (o = new Rn()), i(N, m, r, t, o);
          }
        }
        return _ ? (o || (o = new Rn()), ku(n, e, r, t, i, o)) : !1;
      }
      function ou(n) {
        return V(n) && z(n) == Tn;
      }
      function Yt(n, e, r, t) {
        var i = r.length, o = i, c = !t;
        if (n == null)
          return !o;
        for (n = x(n); i--; ) {
          var l = r[i];
          if (c && l[2] ? l[1] !== n[l[0]] : !(l[0] in n))
            return !1;
        }
        for (; ++i < o; ) {
          l = r[i];
          var d = l[0], p = n[d], g = l[1];
          if (c && l[2]) {
            if (p === s && !(d in n))
              return !1;
          } else {
            var E = new Rn();
            if (t)
              var _ = t(p, g, d, n, e, E);
            if (!(_ === s ? Xe(g, p, he | or, t, E) : _))
              return !1;
          }
        }
        return !0;
      }
      function Ga(n) {
        if (!B(n) || Vu(n))
          return !1;
        var e = Yn(n) ? ol : qs;
        return e.test(ue(n));
      }
      function su(n) {
        return V(n) && Z(n) == Ue;
      }
      function cu(n) {
        return V(n) && z(n) == Sn;
      }
      function lu(n) {
        return V(n) && zr(n.length) && !!U[Z(n)];
      }
      function Ua(n) {
        return typeof n == "function" ? n : n == null ? sn : typeof n == "object" ? O(n) ? Ba(n[0], n[1]) : Fa(n) : ss(n);
      }
      function Wt(n) {
        if (!nr(n))
          return fl(n);
        var e = [];
        for (var r in x(n))
          M.call(n, r) && r != "constructor" && e.push(r);
        return e;
      }
      function uu(n) {
        if (!B(n))
          return $u(n);
        var e = nr(n), r = [];
        for (var t in n)
          t == "constructor" && (e || !M.call(n, t)) || r.push(t);
        return r;
      }
      function Ht(n, e) {
        return n < e;
      }
      function wa(n, e) {
        var r = -1, t = an(n) ? f(n.length) : [];
        return Xn(n, function(i, o, c) {
          t[++r] = e(i, o, c);
        }), t;
      }
      function Fa(n) {
        var e = oi(n);
        return e.length == 1 && e[0][2] ? vo(e[0][0], e[0][1]) : function(r) {
          return r === n || Yt(r, n, e);
        };
      }
      function Ba(n, e) {
        return ci(n) && Io(e) ? vo(jn(n), e) : function(r) {
          var t = Ci(r, n);
          return t === s && t === e ? Ai(r, n) : Xe(e, t, he | or);
        };
      }
      function xr(n, e, r, t, i) {
        n !== e && wt(e, function(o, c) {
          if (i || (i = new Rn()), B(o))
            du(n, e, c, r, xr, t, i);
          else {
            var l = t ? t(ui(n, c), o, c + "", n, e, i) : s;
            l === s && (l = o), Gt(n, c, l);
          }
        }, on);
      }
      function du(n, e, r, t, i, o, c) {
        var l = ui(n, r), d = ui(e, r), p = c.get(d);
        if (p) {
          Gt(n, r, p);
          return;
        }
        var g = o ? o(l, d, r + "", n, e, c) : s, E = g === s;
        if (E) {
          var _ = O(d), A = !_ && ee(d), v = !_ && !A && be(d);
          g = d, _ || A || v ? O(l) ? g = l : Y(l) ? g = tn(l) : A ? (E = !1, g = Za(d, !0)) : v ? (E = !1, g = no(d, !0)) : g = [] : rr(d) || de(d) ? (g = l, de(l) ? g = Xo(l) : (!B(l) || Yn(l)) && (g = Ao(d))) : E = !1;
        }
        E && (c.set(d, g), i(g, d, t, o, c), c.delete(d)), Gt(n, r, g);
      }
      function Va(n, e) {
        var r = n.length;
        if (r)
          return e += e < 0 ? r : 0, Vn(e, r) ? n[e] : s;
      }
      function Ya(n, e, r) {
        e.length ? e = w(e, function(o) {
          return O(o) ? function(c) {
            return ce(c, o.length === 1 ? o[0] : o);
          } : o;
        }) : e = [sn];
        var t = -1;
        e = w(e, ln(I()));
        var i = wa(n, function(o, c, l) {
          var d = w(e, function(p) {
            return p(o);
          });
          return { criteria: d, index: ++t, value: o };
        });
        return Uc(i, function(o, c) {
          return Su(o, c, r);
        });
      }
      function fu(n, e) {
        return Wa(n, e, function(r, t) {
          return Ai(n, t);
        });
      }
      function Wa(n, e, r) {
        for (var t = -1, i = e.length, o = {}; ++t < i; ) {
          var c = e[t], l = ce(n, c);
          r(l, c) && ze(o, Zn(c, n), l);
        }
        return o;
      }
      function hu(n) {
        return function(e) {
          return ce(e, n);
        };
      }
      function $t(n, e, r, t) {
        var i = t ? Gc : Ae, o = -1, c = e.length, l = n;
        for (n === e && (e = tn(e)), r && (l = w(n, ln(r))); ++o < c; )
          for (var d = 0, p = e[o], g = r ? r(p) : p; (d = i(l, g, d, t)) > -1; )
            l !== n && Rr.call(l, d, 1), Rr.call(n, d, 1);
        return n;
      }
      function Ha(n, e) {
        for (var r = n ? e.length : 0, t = r - 1; r--; ) {
          var i = e[r];
          if (r == t || i !== o) {
            var o = i;
            Vn(i) ? Rr.call(n, i, 1) : qt(n, i);
          }
        }
        return n;
      }
      function Kt(n, e) {
        return n + yr(Oa() * (e - n + 1));
      }
      function pu(n, e, r, t) {
        for (var i = -1, o = $(Lr((e - n) / (r || 1)), 0), c = f(o); o--; )
          c[t ? o : ++i] = n, n += r;
        return c;
      }
      function Qt(n, e) {
        var r = "";
        if (!n || e < 1 || e > ge)
          return r;
        do
          e % 2 && (r += n), e = yr(e / 2), e && (n += n);
        while (e);
        return r;
      }
      function L(n, e) {
        return di(mo(n, e, sn), n + "");
      }
      function gu(n) {
        return La(De(n));
      }
      function Eu(n, e) {
        var r = De(n);
        return $r(r, se(e, 0, r.length));
      }
      function ze(n, e, r, t) {
        if (!B(n))
          return n;
        e = Zn(e, n);
        for (var i = -1, o = e.length, c = o - 1, l = n; l != null && ++i < o; ) {
          var d = jn(e[i]), p = r;
          if (d === "__proto__" || d === "constructor" || d === "prototype")
            return n;
          if (i != c) {
            var g = l[d];
            p = t ? t(g, d, l) : s, p === s && (p = B(g) ? g : Vn(e[i + 1]) ? [] : {});
          }
          Qe(l, d, p), l = l[d];
        }
        return n;
      }
      var $a = br ? function(n, e) {
        return br.set(n, e), n;
      } : sn, _u = Nr ? function(n, e) {
        return Nr(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: vi(e),
          writable: !0
        });
      } : sn;
      function Cu(n) {
        return $r(De(n));
      }
      function An(n, e, r) {
        var t = -1, i = n.length;
        e < 0 && (e = -e > i ? 0 : i + e), r = r > i ? i : r, r < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;
        for (var o = f(i); ++t < i; )
          o[t] = n[t + e];
        return o;
      }
      function Au(n, e) {
        var r;
        return Xn(n, function(t, i, o) {
          return r = e(t, i, o), !r;
        }), !!r;
      }
      function Gr(n, e, r) {
        var t = 0, i = n == null ? t : n.length;
        if (typeof e == "number" && e === e && i <= vs) {
          for (; t < i; ) {
            var o = t + i >>> 1, c = n[o];
            c !== null && !dn(c) && (r ? c <= e : c < e) ? t = o + 1 : i = o;
          }
          return i;
        }
        return Jt(n, e, sn, r);
      }
      function Jt(n, e, r, t) {
        var i = 0, o = n == null ? 0 : n.length;
        if (o === 0)
          return 0;
        e = r(e);
        for (var c = e !== e, l = e === null, d = dn(e), p = e === s; i < o; ) {
          var g = yr((i + o) / 2), E = r(n[g]), _ = E !== s, A = E === null, v = E === E, N = dn(E);
          if (c)
            var m = t || v;
          else p ? m = v && (t || _) : l ? m = v && _ && (t || !A) : d ? m = v && _ && !A && (t || !N) : A || N ? m = !1 : m = t ? E <= e : E < e;
          m ? i = g + 1 : o = g;
        }
        return X(o, Is);
      }
      function Ka(n, e) {
        for (var r = -1, t = n.length, i = 0, o = []; ++r < t; ) {
          var c = n[r], l = e ? e(c) : c;
          if (!r || !Nn(l, d)) {
            var d = l;
            o[i++] = c === 0 ? 0 : c;
          }
        }
        return o;
      }
      function Qa(n) {
        return typeof n == "number" ? n : dn(n) ? cr : +n;
      }
      function un(n) {
        if (typeof n == "string")
          return n;
        if (O(n))
          return w(n, un) + "";
        if (dn(n))
          return Ra ? Ra.call(n) : "";
        var e = n + "";
        return e == "0" && 1 / n == -1 / 0 ? "-0" : e;
      }
      function zn(n, e, r) {
        var t = -1, i = Er, o = n.length, c = !0, l = [], d = l;
        if (r)
          c = !1, i = St;
        else if (o >= K) {
          var p = e ? null : bu(n);
          if (p)
            return Cr(p);
          c = !1, i = Ve, d = new oe();
        } else
          d = e ? [] : l;
        n:
          for (; ++t < o; ) {
            var g = n[t], E = e ? e(g) : g;
            if (g = r || g !== 0 ? g : 0, c && E === E) {
              for (var _ = d.length; _--; )
                if (d[_] === E)
                  continue n;
              e && d.push(E), l.push(g);
            } else i(d, E, r) || (d !== l && d.push(E), l.push(g));
          }
        return l;
      }
      function qt(n, e) {
        return e = Zn(e, n), n = To(n, e), n == null || delete n[jn(In(e))];
      }
      function Ja(n, e, r, t) {
        return ze(n, e, r(ce(n, e)), t);
      }
      function Ur(n, e, r, t) {
        for (var i = n.length, o = t ? i : -1; (t ? o-- : ++o < i) && e(n[o], o, n); )
          ;
        return r ? An(n, t ? 0 : o, t ? o + 1 : i) : An(n, t ? o + 1 : 0, t ? i : o);
      }
      function qa(n, e) {
        var r = n;
        return r instanceof b && (r = r.value()), Ot(e, function(t, i) {
          return i.func.apply(i.thisArg, Qn([t], i.args));
        }, r);
      }
      function Xt(n, e, r) {
        var t = n.length;
        if (t < 2)
          return t ? zn(n[0]) : [];
        for (var i = -1, o = f(t); ++i < t; )
          for (var c = n[i], l = -1; ++l < t; )
            l != i && (o[i] = Je(o[i] || c, n[l], e, r));
        return zn(q(o, 1), e, r);
      }
      function Xa(n, e, r) {
        for (var t = -1, i = n.length, o = e.length, c = {}; ++t < i; ) {
          var l = t < o ? e[t] : s;
          r(c, n[t], l);
        }
        return c;
      }
      function zt(n) {
        return Y(n) ? n : [];
      }
      function Zt(n) {
        return typeof n == "function" ? n : sn;
      }
      function Zn(n, e) {
        return O(n) ? n : ci(n, e) ? [n] : No(k(n));
      }
      var Iu = L;
      function ne(n, e, r) {
        var t = n.length;
        return r = r === s ? t : r, !e && r >= t ? n : An(n, e, r);
      }
      var za = sl || function(n) {
        return J.clearTimeout(n);
      };
      function Za(n, e) {
        if (e)
          return n.slice();
        var r = n.length, t = Ia ? Ia(r) : new n.constructor(r);
        return n.copy(t), t;
      }
      function ni(n) {
        var e = new n.constructor(n.byteLength);
        return new Sr(e).set(new Sr(n)), e;
      }
      function vu(n, e) {
        var r = e ? ni(n.buffer) : n.buffer;
        return new n.constructor(r, n.byteOffset, n.byteLength);
      }
      function mu(n) {
        var e = new n.constructor(n.source, xi.exec(n));
        return e.lastIndex = n.lastIndex, e;
      }
      function Tu(n) {
        return Ke ? x(Ke.call(n)) : {};
      }
      function no(n, e) {
        var r = e ? ni(n.buffer) : n.buffer;
        return new n.constructor(r, n.byteOffset, n.length);
      }
      function eo(n, e) {
        if (n !== e) {
          var r = n !== s, t = n === null, i = n === n, o = dn(n), c = e !== s, l = e === null, d = e === e, p = dn(e);
          if (!l && !p && !o && n > e || o && c && d && !l && !p || t && c && d || !r && d || !i)
            return 1;
          if (!t && !o && !p && n < e || p && r && i && !t && !o || l && r && i || !c && i || !d)
            return -1;
        }
        return 0;
      }
      function Su(n, e, r) {
        for (var t = -1, i = n.criteria, o = e.criteria, c = i.length, l = r.length; ++t < c; ) {
          var d = eo(i[t], o[t]);
          if (d) {
            if (t >= l)
              return d;
            var p = r[t];
            return d * (p == "desc" ? -1 : 1);
          }
        }
        return n.index - e.index;
      }
      function ro(n, e, r, t) {
        for (var i = -1, o = n.length, c = r.length, l = -1, d = e.length, p = $(o - c, 0), g = f(d + p), E = !t; ++l < d; )
          g[l] = e[l];
        for (; ++i < c; )
          (E || i < o) && (g[r[i]] = n[i]);
        for (; p--; )
          g[l++] = n[i++];
        return g;
      }
      function to(n, e, r, t) {
        for (var i = -1, o = n.length, c = -1, l = r.length, d = -1, p = e.length, g = $(o - l, 0), E = f(g + p), _ = !t; ++i < g; )
          E[i] = n[i];
        for (var A = i; ++d < p; )
          E[A + d] = e[d];
        for (; ++c < l; )
          (_ || i < o) && (E[A + r[c]] = n[i++]);
        return E;
      }
      function tn(n, e) {
        var r = -1, t = n.length;
        for (e || (e = f(t)); ++r < t; )
          e[r] = n[r];
        return e;
      }
      function Dn(n, e, r, t) {
        var i = !r;
        r || (r = {});
        for (var o = -1, c = e.length; ++o < c; ) {
          var l = e[o], d = t ? t(r[l], n[l], l, r, n) : s;
          d === s && (d = n[l]), i ? wn(r, l, d) : Qe(r, l, d);
        }
        return r;
      }
      function Ou(n, e) {
        return Dn(n, si(n), e);
      }
      function Ru(n, e) {
        return Dn(n, _o(n), e);
      }
      function wr(n, e) {
        return function(r, t) {
          var i = O(r) ? Dc : Ql, o = e ? e() : {};
          return i(r, n, I(t, 2), o);
        };
      }
      function Ne(n) {
        return L(function(e, r) {
          var t = -1, i = r.length, o = i > 1 ? r[i - 1] : s, c = i > 2 ? r[2] : s;
          for (o = n.length > 3 && typeof o == "function" ? (i--, o) : s, c && nn(r[0], r[1], c) && (o = i < 3 ? s : o, i = 1), e = x(e); ++t < i; ) {
            var l = r[t];
            l && n(e, l, t, o);
          }
          return e;
        });
      }
      function io(n, e) {
        return function(r, t) {
          if (r == null)
            return r;
          if (!an(r))
            return n(r, t);
          for (var i = r.length, o = e ? i : -1, c = x(r); (e ? o-- : ++o < i) && t(c[o], o, c) !== !1; )
            ;
          return r;
        };
      }
      function ao(n) {
        return function(e, r, t) {
          for (var i = -1, o = x(e), c = t(e), l = c.length; l--; ) {
            var d = c[n ? l : ++i];
            if (r(o[d], d, o) === !1)
              break;
          }
          return e;
        };
      }
      function Nu(n, e, r) {
        var t = e & mn, i = Ze(n);
        function o() {
          var c = this && this !== J && this instanceof o ? i : n;
          return c.apply(t ? r : this, arguments);
        }
        return o;
      }
      function oo(n) {
        return function(e) {
          e = k(e);
          var r = Ie(e) ? On(e) : s, t = r ? r[0] : e.charAt(0), i = r ? ne(r, 1).join("") : e.slice(1);
          return t[n]() + i;
        };
      }
      function Le(n) {
        return function(e) {
          return Ot(as(is(e).replace(_c, "")), n, "");
        };
      }
      function Ze(n) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new n();
            case 1:
              return new n(e[0]);
            case 2:
              return new n(e[0], e[1]);
            case 3:
              return new n(e[0], e[1], e[2]);
            case 4:
              return new n(e[0], e[1], e[2], e[3]);
            case 5:
              return new n(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var r = Re(n.prototype), t = n.apply(r, e);
          return B(t) ? t : r;
        };
      }
      function Lu(n, e, r) {
        var t = Ze(n);
        function i() {
          for (var o = arguments.length, c = f(o), l = o, d = ye(i); l--; )
            c[l] = arguments[l];
          var p = o < 3 && c[0] !== d && c[o - 1] !== d ? [] : Jn(c, d);
          if (o -= p.length, o < r)
            return fo(
              n,
              e,
              Fr,
              i.placeholder,
              s,
              c,
              p,
              s,
              s,
              r - o
            );
          var g = this && this !== J && this instanceof i ? t : n;
          return cn(g, this, c);
        }
        return i;
      }
      function so(n) {
        return function(e, r, t) {
          var i = x(e);
          if (!an(e)) {
            var o = I(r, 3);
            e = Q(e), r = function(l) {
              return o(i[l], l, i);
            };
          }
          var c = n(e, r, t);
          return c > -1 ? i[o ? e[c] : c] : s;
        };
      }
      function co(n) {
        return Bn(function(e) {
          var r = e.length, t = r, i = _n.prototype.thru;
          for (n && e.reverse(); t--; ) {
            var o = e[t];
            if (typeof o != "function")
              throw new En(rn);
            if (i && !c && Wr(o) == "wrapper")
              var c = new _n([], !0);
          }
          for (t = c ? t : r; ++t < r; ) {
            o = e[t];
            var l = Wr(o), d = l == "wrapper" ? ai(o) : s;
            d && li(d[0]) && d[1] == (Mn | kn | Pn | Pe) && !d[4].length && d[9] == 1 ? c = c[Wr(d[0])].apply(c, d[3]) : c = o.length == 1 && li(o) ? c[l]() : c.thru(o);
          }
          return function() {
            var p = arguments, g = p[0];
            if (c && p.length == 1 && O(g))
              return c.plant(g).value();
            for (var E = 0, _ = r ? e[E].apply(this, p) : g; ++E < r; )
              _ = e[E].call(this, _);
            return _;
          };
        });
      }
      function Fr(n, e, r, t, i, o, c, l, d, p) {
        var g = e & Mn, E = e & mn, _ = e & pe, A = e & (kn | je), v = e & at, N = _ ? s : Ze(n);
        function m() {
          for (var y = arguments.length, D = f(y), fn = y; fn--; )
            D[fn] = arguments[fn];
          if (A)
            var en = ye(m), hn = Fc(D, en);
          if (t && (D = ro(D, t, i, A)), o && (D = to(D, o, c, A)), y -= hn, A && y < p) {
            var W = Jn(D, en);
            return fo(
              n,
              e,
              Fr,
              m.placeholder,
              r,
              D,
              W,
              l,
              d,
              p - y
            );
          }
          var Ln = E ? r : this, Hn = _ ? Ln[n] : n;
          return y = D.length, l ? D = Qu(D, l) : v && y > 1 && D.reverse(), g && d < y && (D.length = d), this && this !== J && this instanceof m && (Hn = N || Ze(Hn)), Hn.apply(Ln, D);
        }
        return m;
      }
      function lo(n, e) {
        return function(r, t) {
          return ru(r, n, e(t), {});
        };
      }
      function Br(n, e) {
        return function(r, t) {
          var i;
          if (r === s && t === s)
            return e;
          if (r !== s && (i = r), t !== s) {
            if (i === s)
              return t;
            typeof r == "string" || typeof t == "string" ? (r = un(r), t = un(t)) : (r = Qa(r), t = Qa(t)), i = n(r, t);
          }
          return i;
        };
      }
      function ei(n) {
        return Bn(function(e) {
          return e = w(e, ln(I())), L(function(r) {
            var t = this;
            return n(e, function(i) {
              return cn(i, t, r);
            });
          });
        });
      }
      function Vr(n, e) {
        e = e === s ? " " : un(e);
        var r = e.length;
        if (r < 2)
          return r ? Qt(e, n) : e;
        var t = Qt(e, Lr(n / ve(e)));
        return Ie(e) ? ne(On(t), 0, n).join("") : t.slice(0, n);
      }
      function yu(n, e, r, t) {
        var i = e & mn, o = Ze(n);
        function c() {
          for (var l = -1, d = arguments.length, p = -1, g = t.length, E = f(g + d), _ = this && this !== J && this instanceof c ? o : n; ++p < g; )
            E[p] = t[p];
          for (; d--; )
            E[p++] = arguments[++l];
          return cn(_, i ? r : this, E);
        }
        return c;
      }
      function uo(n) {
        return function(e, r, t) {
          return t && typeof t != "number" && nn(e, r, t) && (r = t = s), e = Wn(e), r === s ? (r = e, e = 0) : r = Wn(r), t = t === s ? e < r ? 1 : -1 : Wn(t), pu(e, r, t, n);
        };
      }
      function Yr(n) {
        return function(e, r) {
          return typeof e == "string" && typeof r == "string" || (e = vn(e), r = vn(r)), n(e, r);
        };
      }
      function fo(n, e, r, t, i, o, c, l, d, p) {
        var g = e & kn, E = g ? c : s, _ = g ? s : c, A = g ? o : s, v = g ? s : o;
        e |= g ? Pn : ke, e &= ~(g ? ke : Pn), e & yi || (e &= -4);
        var N = [
          n,
          e,
          i,
          A,
          E,
          v,
          _,
          l,
          d,
          p
        ], m = r.apply(s, N);
        return li(n) && So(m, N), m.placeholder = t, Oo(m, n, e);
      }
      function ri(n) {
        var e = H[n];
        return function(r, t) {
          if (r = vn(r), t = t == null ? 0 : X(R(t), 292), t && Sa(r)) {
            var i = (k(r) + "e").split("e"), o = e(i[0] + "e" + (+i[1] + t));
            return i = (k(o) + "e").split("e"), +(i[0] + "e" + (+i[1] - t));
          }
          return e(r);
        };
      }
      var bu = Se && 1 / Cr(new Se([, -0]))[1] == sr ? function(n) {
        return new Se(n);
      } : Si;
      function ho(n) {
        return function(e) {
          var r = z(e);
          return r == Tn ? jt(e) : r == Sn ? Kc(e) : wc(e, n(e));
        };
      }
      function Fn(n, e, r, t, i, o, c, l) {
        var d = e & pe;
        if (!d && typeof n != "function")
          throw new En(rn);
        var p = t ? t.length : 0;
        if (p || (e &= -97, t = i = s), c = c === s ? c : $(R(c), 0), l = l === s ? l : R(l), p -= i ? i.length : 0, e & ke) {
          var g = t, E = i;
          t = i = s;
        }
        var _ = d ? s : ai(n), A = [
          n,
          e,
          r,
          t,
          i,
          g,
          E,
          o,
          c,
          l
        ];
        if (_ && Hu(A, _), n = A[0], e = A[1], r = A[2], t = A[3], i = A[4], l = A[9] = A[9] === s ? d ? 0 : n.length : $(A[9] - p, 0), !l && e & (kn | je) && (e &= -25), !e || e == mn)
          var v = Nu(n, e, r);
        else e == kn || e == je ? v = Lu(n, e, l) : (e == Pn || e == (mn | Pn)) && !i.length ? v = yu(n, e, r, t) : v = Fr.apply(s, A);
        var N = _ ? $a : So;
        return Oo(N(v, A), n, e);
      }
      function po(n, e, r, t) {
        return n === s || Nn(n, Te[r]) && !M.call(t, r) ? e : n;
      }
      function go(n, e, r, t, i, o) {
        return B(n) && B(e) && (o.set(e, n), xr(n, e, s, go, o), o.delete(e)), n;
      }
      function Du(n) {
        return rr(n) ? s : n;
      }
      function Eo(n, e, r, t, i, o) {
        var c = r & he, l = n.length, d = e.length;
        if (l != d && !(c && d > l))
          return !1;
        var p = o.get(n), g = o.get(e);
        if (p && g)
          return p == e && g == n;
        var E = -1, _ = !0, A = r & or ? new oe() : s;
        for (o.set(n, e), o.set(e, n); ++E < l; ) {
          var v = n[E], N = e[E];
          if (t)
            var m = c ? t(N, v, E, e, n, o) : t(v, N, E, n, e, o);
          if (m !== s) {
            if (m)
              continue;
            _ = !1;
            break;
          }
          if (A) {
            if (!Rt(e, function(y, D) {
              if (!Ve(A, D) && (v === y || i(v, y, r, t, o)))
                return A.push(D);
            })) {
              _ = !1;
              break;
            }
          } else if (!(v === N || i(v, N, r, t, o))) {
            _ = !1;
            break;
          }
        }
        return o.delete(n), o.delete(e), _;
      }
      function ju(n, e, r, t, i, o, c) {
        switch (r) {
          case _e:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
              return !1;
            n = n.buffer, e = e.buffer;
          case Be:
            return !(n.byteLength != e.byteLength || !o(new Sr(n), new Sr(e)));
          case Me:
          case xe:
          case Ge:
            return Nn(+n, +e);
          case ur:
            return n.name == e.name && n.message == e.message;
          case Ue:
          case we:
            return n == e + "";
          case Tn:
            var l = jt;
          case Sn:
            var d = t & he;
            if (l || (l = Cr), n.size != e.size && !d)
              return !1;
            var p = c.get(n);
            if (p)
              return p == e;
            t |= or, c.set(n, e);
            var g = Eo(l(n), l(e), t, i, o, c);
            return c.delete(n), g;
          case fr:
            if (Ke)
              return Ke.call(n) == Ke.call(e);
        }
        return !1;
      }
      function ku(n, e, r, t, i, o) {
        var c = r & he, l = ti(n), d = l.length, p = ti(e), g = p.length;
        if (d != g && !c)
          return !1;
        for (var E = d; E--; ) {
          var _ = l[E];
          if (!(c ? _ in e : M.call(e, _)))
            return !1;
        }
        var A = o.get(n), v = o.get(e);
        if (A && v)
          return A == e && v == n;
        var N = !0;
        o.set(n, e), o.set(e, n);
        for (var m = c; ++E < d; ) {
          _ = l[E];
          var y = n[_], D = e[_];
          if (t)
            var fn = c ? t(D, y, _, e, n, o) : t(y, D, _, n, e, o);
          if (!(fn === s ? y === D || i(y, D, r, t, o) : fn)) {
            N = !1;
            break;
          }
          m || (m = _ == "constructor");
        }
        if (N && !m) {
          var en = n.constructor, hn = e.constructor;
          en != hn && "constructor" in n && "constructor" in e && !(typeof en == "function" && en instanceof en && typeof hn == "function" && hn instanceof hn) && (N = !1);
        }
        return o.delete(n), o.delete(e), N;
      }
      function Bn(n) {
        return di(mo(n, s, Do), n + "");
      }
      function ti(n) {
        return Ma(n, Q, si);
      }
      function ii(n) {
        return Ma(n, on, _o);
      }
      var ai = br ? function(n) {
        return br.get(n);
      } : Si;
      function Wr(n) {
        for (var e = n.name + "", r = Oe[e], t = M.call(Oe, e) ? r.length : 0; t--; ) {
          var i = r[t], o = i.func;
          if (o == null || o == n)
            return i.name;
        }
        return e;
      }
      function ye(n) {
        var e = M.call(a, "placeholder") ? a : n;
        return e.placeholder;
      }
      function I() {
        var n = a.iteratee || mi;
        return n = n === mi ? Ua : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Hr(n, e) {
        var r = n.__data__;
        return Bu(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
      }
      function oi(n) {
        for (var e = Q(n), r = e.length; r--; ) {
          var t = e[r], i = n[t];
          e[r] = [t, i, Io(i)];
        }
        return e;
      }
      function le(n, e) {
        var r = Wc(n, e);
        return Ga(r) ? r : s;
      }
      function Pu(n) {
        var e = M.call(n, ie), r = n[ie];
        try {
          n[ie] = s;
          var t = !0;
        } catch {
        }
        var i = mr.call(n);
        return t && (e ? n[ie] = r : delete n[ie]), i;
      }
      var si = Pt ? function(n) {
        return n == null ? [] : (n = x(n), Kn(Pt(n), function(e) {
          return ma.call(n, e);
        }));
      } : Oi, _o = Pt ? function(n) {
        for (var e = []; n; )
          Qn(e, si(n)), n = Or(n);
        return e;
      } : Oi, z = Z;
      (Mt && z(new Mt(new ArrayBuffer(1))) != _e || We && z(new We()) != Tn || xt && z(xt.resolve()) != ji || Se && z(new Se()) != Sn || He && z(new He()) != Fe) && (z = function(n) {
        var e = Z(n), r = e == xn ? n.constructor : s, t = r ? ue(r) : "";
        if (t)
          switch (t) {
            case El:
              return _e;
            case _l:
              return Tn;
            case Cl:
              return ji;
            case Al:
              return Sn;
            case Il:
              return Fe;
          }
        return e;
      });
      function Mu(n, e, r) {
        for (var t = -1, i = r.length; ++t < i; ) {
          var o = r[t], c = o.size;
          switch (o.type) {
            case "drop":
              n += c;
              break;
            case "dropRight":
              e -= c;
              break;
            case "take":
              e = X(e, n + c);
              break;
            case "takeRight":
              n = $(n, e - c);
              break;
          }
        }
        return { start: n, end: e };
      }
      function xu(n) {
        var e = n.match(Vs);
        return e ? e[1].split(Ys) : [];
      }
      function Co(n, e, r) {
        e = Zn(e, n);
        for (var t = -1, i = e.length, o = !1; ++t < i; ) {
          var c = jn(e[t]);
          if (!(o = n != null && r(n, c)))
            break;
          n = n[c];
        }
        return o || ++t != i ? o : (i = n == null ? 0 : n.length, !!i && zr(i) && Vn(c, i) && (O(n) || de(n)));
      }
      function Gu(n) {
        var e = n.length, r = new n.constructor(e);
        return e && typeof n[0] == "string" && M.call(n, "index") && (r.index = n.index, r.input = n.input), r;
      }
      function Ao(n) {
        return typeof n.constructor == "function" && !nr(n) ? Re(Or(n)) : {};
      }
      function Uu(n, e, r) {
        var t = n.constructor;
        switch (e) {
          case Be:
            return ni(n);
          case Me:
          case xe:
            return new t(+n);
          case _e:
            return vu(n, r);
          case ot:
          case st:
          case ct:
          case lt:
          case ut:
          case dt:
          case ft:
          case ht:
          case pt:
            return no(n, r);
          case Tn:
            return new t();
          case Ge:
          case we:
            return new t(n);
          case Ue:
            return mu(n);
          case Sn:
            return new t();
          case fr:
            return Tu(n);
        }
      }
      function wu(n, e) {
        var r = e.length;
        if (!r)
          return n;
        var t = r - 1;
        return e[t] = (r > 1 ? "& " : "") + e[t], e = e.join(r > 2 ? ", " : " "), n.replace(Bs, `{
/* [wrapped with ` + e + `] */
`);
      }
      function Fu(n) {
        return O(n) || de(n) || !!(Ta && n && n[Ta]);
      }
      function Vn(n, e) {
        var r = typeof n;
        return e = e ?? ge, !!e && (r == "number" || r != "symbol" && zs.test(n)) && n > -1 && n % 1 == 0 && n < e;
      }
      function nn(n, e, r) {
        if (!B(r))
          return !1;
        var t = typeof e;
        return (t == "number" ? an(r) && Vn(e, r.length) : t == "string" && e in r) ? Nn(r[e], n) : !1;
      }
      function ci(n, e) {
        if (O(n))
          return !1;
        var r = typeof n;
        return r == "number" || r == "symbol" || r == "boolean" || n == null || dn(n) ? !0 : Gs.test(n) || !xs.test(n) || e != null && n in x(e);
      }
      function Bu(n) {
        var e = typeof n;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
      }
      function li(n) {
        var e = Wr(n), r = a[e];
        if (typeof r != "function" || !(e in b.prototype))
          return !1;
        if (n === r)
          return !0;
        var t = ai(r);
        return !!t && n === t[0];
      }
      function Vu(n) {
        return !!Aa && Aa in n;
      }
      var Yu = Ir ? Yn : Ri;
      function nr(n) {
        var e = n && n.constructor, r = typeof e == "function" && e.prototype || Te;
        return n === r;
      }
      function Io(n) {
        return n === n && !B(n);
      }
      function vo(n, e) {
        return function(r) {
          return r == null ? !1 : r[n] === e && (e !== s || n in x(r));
        };
      }
      function Wu(n) {
        var e = qr(n, function(t) {
          return r.size === fs && r.clear(), t;
        }), r = e.cache;
        return e;
      }
      function Hu(n, e) {
        var r = n[1], t = e[1], i = r | t, o = i < (mn | pe | Mn), c = t == Mn && r == kn || t == Mn && r == Pe && n[7].length <= e[8] || t == (Mn | Pe) && e[7].length <= e[8] && r == kn;
        if (!(o || c))
          return n;
        t & mn && (n[2] = e[2], i |= r & mn ? 0 : yi);
        var l = e[3];
        if (l) {
          var d = n[3];
          n[3] = d ? ro(d, l, e[4]) : l, n[4] = d ? Jn(n[3], ar) : e[4];
        }
        return l = e[5], l && (d = n[5], n[5] = d ? to(d, l, e[6]) : l, n[6] = d ? Jn(n[5], ar) : e[6]), l = e[7], l && (n[7] = l), t & Mn && (n[8] = n[8] == null ? e[8] : X(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
      }
      function $u(n) {
        var e = [];
        if (n != null)
          for (var r in x(n))
            e.push(r);
        return e;
      }
      function Ku(n) {
        return mr.call(n);
      }
      function mo(n, e, r) {
        return e = $(e === s ? n.length - 1 : e, 0), function() {
          for (var t = arguments, i = -1, o = $(t.length - e, 0), c = f(o); ++i < o; )
            c[i] = t[e + i];
          i = -1;
          for (var l = f(e + 1); ++i < e; )
            l[i] = t[i];
          return l[e] = r(c), cn(n, this, l);
        };
      }
      function To(n, e) {
        return e.length < 2 ? n : ce(n, An(e, 0, -1));
      }
      function Qu(n, e) {
        for (var r = n.length, t = X(e.length, r), i = tn(n); t--; ) {
          var o = e[t];
          n[t] = Vn(o, r) ? i[o] : s;
        }
        return n;
      }
      function ui(n, e) {
        if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
          return n[e];
      }
      var So = Ro($a), er = ll || function(n, e) {
        return J.setTimeout(n, e);
      }, di = Ro(_u);
      function Oo(n, e, r) {
        var t = e + "";
        return di(n, wu(t, Ju(xu(t), r)));
      }
      function Ro(n) {
        var e = 0, r = 0;
        return function() {
          var t = hl(), i = Es - (t - r);
          if (r = t, i > 0) {
            if (++e >= gs)
              return arguments[0];
          } else
            e = 0;
          return n.apply(s, arguments);
        };
      }
      function $r(n, e) {
        var r = -1, t = n.length, i = t - 1;
        for (e = e === s ? t : e; ++r < e; ) {
          var o = Kt(r, i), c = n[o];
          n[o] = n[r], n[r] = c;
        }
        return n.length = e, n;
      }
      var No = Wu(function(n) {
        var e = [];
        return n.charCodeAt(0) === 46 && e.push(""), n.replace(Us, function(r, t, i, o) {
          e.push(i ? o.replace($s, "$1") : t || r);
        }), e;
      });
      function jn(n) {
        if (typeof n == "string" || dn(n))
          return n;
        var e = n + "";
        return e == "0" && 1 / n == -1 / 0 ? "-0" : e;
      }
      function ue(n) {
        if (n != null) {
          try {
            return vr.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Ju(n, e) {
        return gn(ms, function(r) {
          var t = "_." + r[0];
          e & r[1] && !Er(n, t) && n.push(t);
        }), n.sort();
      }
      function Lo(n) {
        if (n instanceof b)
          return n.clone();
        var e = new _n(n.__wrapped__, n.__chain__);
        return e.__actions__ = tn(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
      }
      function qu(n, e, r) {
        (r ? nn(n, e, r) : e === s) ? e = 1 : e = $(R(e), 0);
        var t = n == null ? 0 : n.length;
        if (!t || e < 1)
          return [];
        for (var i = 0, o = 0, c = f(Lr(t / e)); i < t; )
          c[o++] = An(n, i, i += e);
        return c;
      }
      function Xu(n) {
        for (var e = -1, r = n == null ? 0 : n.length, t = 0, i = []; ++e < r; ) {
          var o = n[e];
          o && (i[t++] = o);
        }
        return i;
      }
      function zu() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var e = f(n - 1), r = arguments[0], t = n; t--; )
          e[t - 1] = arguments[t];
        return Qn(O(r) ? tn(r) : [r], q(e, 1));
      }
      var Zu = L(function(n, e) {
        return Y(n) ? Je(n, q(e, 1, Y, !0)) : [];
      }), nd = L(function(n, e) {
        var r = In(e);
        return Y(r) && (r = s), Y(n) ? Je(n, q(e, 1, Y, !0), I(r, 2)) : [];
      }), ed = L(function(n, e) {
        var r = In(e);
        return Y(r) && (r = s), Y(n) ? Je(n, q(e, 1, Y, !0), s, r) : [];
      });
      function rd(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (e = r || e === s ? 1 : R(e), An(n, e < 0 ? 0 : e, t)) : [];
      }
      function td(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (e = r || e === s ? 1 : R(e), e = t - e, An(n, 0, e < 0 ? 0 : e)) : [];
      }
      function id(n, e) {
        return n && n.length ? Ur(n, I(e, 3), !0, !0) : [];
      }
      function ad(n, e) {
        return n && n.length ? Ur(n, I(e, 3), !0) : [];
      }
      function od(n, e, r, t) {
        var i = n == null ? 0 : n.length;
        return i ? (r && typeof r != "number" && nn(n, e, r) && (r = 0, t = i), zl(n, e, r, t)) : [];
      }
      function yo(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = r == null ? 0 : R(r);
        return i < 0 && (i = $(t + i, 0)), _r(n, I(e, 3), i);
      }
      function bo(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = t - 1;
        return r !== s && (i = R(r), i = r < 0 ? $(t + i, 0) : X(i, t - 1)), _r(n, I(e, 3), i, !0);
      }
      function Do(n) {
        var e = n == null ? 0 : n.length;
        return e ? q(n, 1) : [];
      }
      function sd(n) {
        var e = n == null ? 0 : n.length;
        return e ? q(n, sr) : [];
      }
      function cd(n, e) {
        var r = n == null ? 0 : n.length;
        return r ? (e = e === s ? 1 : R(e), q(n, e)) : [];
      }
      function ld(n) {
        for (var e = -1, r = n == null ? 0 : n.length, t = {}; ++e < r; ) {
          var i = n[e];
          t[i[0]] = i[1];
        }
        return t;
      }
      function jo(n) {
        return n && n.length ? n[0] : s;
      }
      function ud(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = r == null ? 0 : R(r);
        return i < 0 && (i = $(t + i, 0)), Ae(n, e, i);
      }
      function dd(n) {
        var e = n == null ? 0 : n.length;
        return e ? An(n, 0, -1) : [];
      }
      var fd = L(function(n) {
        var e = w(n, zt);
        return e.length && e[0] === n[0] ? Vt(e) : [];
      }), hd = L(function(n) {
        var e = In(n), r = w(n, zt);
        return e === In(r) ? e = s : r.pop(), r.length && r[0] === n[0] ? Vt(r, I(e, 2)) : [];
      }), pd = L(function(n) {
        var e = In(n), r = w(n, zt);
        return e = typeof e == "function" ? e : s, e && r.pop(), r.length && r[0] === n[0] ? Vt(r, s, e) : [];
      });
      function gd(n, e) {
        return n == null ? "" : dl.call(n, e);
      }
      function In(n) {
        var e = n == null ? 0 : n.length;
        return e ? n[e - 1] : s;
      }
      function Ed(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = t;
        return r !== s && (i = R(r), i = i < 0 ? $(t + i, 0) : X(i, t - 1)), e === e ? Jc(n, e, i) : _r(n, da, i, !0);
      }
      function _d(n, e) {
        return n && n.length ? Va(n, R(e)) : s;
      }
      var Cd = L(ko);
      function ko(n, e) {
        return n && n.length && e && e.length ? $t(n, e) : n;
      }
      function Ad(n, e, r) {
        return n && n.length && e && e.length ? $t(n, e, I(r, 2)) : n;
      }
      function Id(n, e, r) {
        return n && n.length && e && e.length ? $t(n, e, s, r) : n;
      }
      var vd = Bn(function(n, e) {
        var r = n == null ? 0 : n.length, t = Ut(n, e);
        return Ha(n, w(e, function(i) {
          return Vn(i, r) ? +i : i;
        }).sort(eo)), t;
      });
      function md(n, e) {
        var r = [];
        if (!(n && n.length))
          return r;
        var t = -1, i = [], o = n.length;
        for (e = I(e, 3); ++t < o; ) {
          var c = n[t];
          e(c, t, n) && (r.push(c), i.push(t));
        }
        return Ha(n, i), r;
      }
      function fi(n) {
        return n == null ? n : gl.call(n);
      }
      function Td(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (r && typeof r != "number" && nn(n, e, r) ? (e = 0, r = t) : (e = e == null ? 0 : R(e), r = r === s ? t : R(r)), An(n, e, r)) : [];
      }
      function Sd(n, e) {
        return Gr(n, e);
      }
      function Od(n, e, r) {
        return Jt(n, e, I(r, 2));
      }
      function Rd(n, e) {
        var r = n == null ? 0 : n.length;
        if (r) {
          var t = Gr(n, e);
          if (t < r && Nn(n[t], e))
            return t;
        }
        return -1;
      }
      function Nd(n, e) {
        return Gr(n, e, !0);
      }
      function Ld(n, e, r) {
        return Jt(n, e, I(r, 2), !0);
      }
      function yd(n, e) {
        var r = n == null ? 0 : n.length;
        if (r) {
          var t = Gr(n, e, !0) - 1;
          if (Nn(n[t], e))
            return t;
        }
        return -1;
      }
      function bd(n) {
        return n && n.length ? Ka(n) : [];
      }
      function Dd(n, e) {
        return n && n.length ? Ka(n, I(e, 2)) : [];
      }
      function jd(n) {
        var e = n == null ? 0 : n.length;
        return e ? An(n, 1, e) : [];
      }
      function kd(n, e, r) {
        return n && n.length ? (e = r || e === s ? 1 : R(e), An(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Pd(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (e = r || e === s ? 1 : R(e), e = t - e, An(n, e < 0 ? 0 : e, t)) : [];
      }
      function Md(n, e) {
        return n && n.length ? Ur(n, I(e, 3), !1, !0) : [];
      }
      function xd(n, e) {
        return n && n.length ? Ur(n, I(e, 3)) : [];
      }
      var Gd = L(function(n) {
        return zn(q(n, 1, Y, !0));
      }), Ud = L(function(n) {
        var e = In(n);
        return Y(e) && (e = s), zn(q(n, 1, Y, !0), I(e, 2));
      }), wd = L(function(n) {
        var e = In(n);
        return e = typeof e == "function" ? e : s, zn(q(n, 1, Y, !0), s, e);
      });
      function Fd(n) {
        return n && n.length ? zn(n) : [];
      }
      function Bd(n, e) {
        return n && n.length ? zn(n, I(e, 2)) : [];
      }
      function Vd(n, e) {
        return e = typeof e == "function" ? e : s, n && n.length ? zn(n, s, e) : [];
      }
      function hi(n) {
        if (!(n && n.length))
          return [];
        var e = 0;
        return n = Kn(n, function(r) {
          if (Y(r))
            return e = $(r.length, e), !0;
        }), bt(e, function(r) {
          return w(n, Nt(r));
        });
      }
      function Po(n, e) {
        if (!(n && n.length))
          return [];
        var r = hi(n);
        return e == null ? r : w(r, function(t) {
          return cn(e, s, t);
        });
      }
      var Yd = L(function(n, e) {
        return Y(n) ? Je(n, e) : [];
      }), Wd = L(function(n) {
        return Xt(Kn(n, Y));
      }), Hd = L(function(n) {
        var e = In(n);
        return Y(e) && (e = s), Xt(Kn(n, Y), I(e, 2));
      }), $d = L(function(n) {
        var e = In(n);
        return e = typeof e == "function" ? e : s, Xt(Kn(n, Y), s, e);
      }), Kd = L(hi);
      function Qd(n, e) {
        return Xa(n || [], e || [], Qe);
      }
      function Jd(n, e) {
        return Xa(n || [], e || [], ze);
      }
      var qd = L(function(n) {
        var e = n.length, r = e > 1 ? n[e - 1] : s;
        return r = typeof r == "function" ? (n.pop(), r) : s, Po(n, r);
      });
      function Mo(n) {
        var e = a(n);
        return e.__chain__ = !0, e;
      }
      function Xd(n, e) {
        return e(n), n;
      }
      function Kr(n, e) {
        return e(n);
      }
      var zd = Bn(function(n) {
        var e = n.length, r = e ? n[0] : 0, t = this.__wrapped__, i = function(o) {
          return Ut(o, n);
        };
        return e > 1 || this.__actions__.length || !(t instanceof b) || !Vn(r) ? this.thru(i) : (t = t.slice(r, +r + (e ? 1 : 0)), t.__actions__.push({
          func: Kr,
          args: [i],
          thisArg: s
        }), new _n(t, this.__chain__).thru(function(o) {
          return e && !o.length && o.push(s), o;
        }));
      });
      function Zd() {
        return Mo(this);
      }
      function nf() {
        return new _n(this.value(), this.__chain__);
      }
      function ef() {
        this.__values__ === s && (this.__values__ = Jo(this.value()));
        var n = this.__index__ >= this.__values__.length, e = n ? s : this.__values__[this.__index__++];
        return { done: n, value: e };
      }
      function rf() {
        return this;
      }
      function tf(n) {
        for (var e, r = this; r instanceof jr; ) {
          var t = Lo(r);
          t.__index__ = 0, t.__values__ = s, e ? i.__wrapped__ = t : e = t;
          var i = t;
          r = r.__wrapped__;
        }
        return i.__wrapped__ = n, e;
      }
      function af() {
        var n = this.__wrapped__;
        if (n instanceof b) {
          var e = n;
          return this.__actions__.length && (e = new b(this)), e = e.reverse(), e.__actions__.push({
            func: Kr,
            args: [fi],
            thisArg: s
          }), new _n(e, this.__chain__);
        }
        return this.thru(fi);
      }
      function of() {
        return qa(this.__wrapped__, this.__actions__);
      }
      var sf = wr(function(n, e, r) {
        M.call(n, r) ? ++n[r] : wn(n, r, 1);
      });
      function cf(n, e, r) {
        var t = O(n) ? la : Xl;
        return r && nn(n, e, r) && (e = s), t(n, I(e, 3));
      }
      function lf(n, e) {
        var r = O(n) ? Kn : ka;
        return r(n, I(e, 3));
      }
      var uf = so(yo), df = so(bo);
      function ff(n, e) {
        return q(Qr(n, e), 1);
      }
      function hf(n, e) {
        return q(Qr(n, e), sr);
      }
      function pf(n, e, r) {
        return r = r === s ? 1 : R(r), q(Qr(n, e), r);
      }
      function xo(n, e) {
        var r = O(n) ? gn : Xn;
        return r(n, I(e, 3));
      }
      function Go(n, e) {
        var r = O(n) ? jc : ja;
        return r(n, I(e, 3));
      }
      var gf = wr(function(n, e, r) {
        M.call(n, r) ? n[r].push(e) : wn(n, r, [e]);
      });
      function Ef(n, e, r, t) {
        n = an(n) ? n : De(n), r = r && !t ? R(r) : 0;
        var i = n.length;
        return r < 0 && (r = $(i + r, 0)), Zr(n) ? r <= i && n.indexOf(e, r) > -1 : !!i && Ae(n, e, r) > -1;
      }
      var _f = L(function(n, e, r) {
        var t = -1, i = typeof e == "function", o = an(n) ? f(n.length) : [];
        return Xn(n, function(c) {
          o[++t] = i ? cn(e, c, r) : qe(c, e, r);
        }), o;
      }), Cf = wr(function(n, e, r) {
        wn(n, r, e);
      });
      function Qr(n, e) {
        var r = O(n) ? w : wa;
        return r(n, I(e, 3));
      }
      function Af(n, e, r, t) {
        return n == null ? [] : (O(e) || (e = e == null ? [] : [e]), r = t ? s : r, O(r) || (r = r == null ? [] : [r]), Ya(n, e, r));
      }
      var If = wr(function(n, e, r) {
        n[r ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function vf(n, e, r) {
        var t = O(n) ? Ot : ha, i = arguments.length < 3;
        return t(n, I(e, 4), r, i, Xn);
      }
      function mf(n, e, r) {
        var t = O(n) ? kc : ha, i = arguments.length < 3;
        return t(n, I(e, 4), r, i, ja);
      }
      function Tf(n, e) {
        var r = O(n) ? Kn : ka;
        return r(n, Xr(I(e, 3)));
      }
      function Sf(n) {
        var e = O(n) ? La : gu;
        return e(n);
      }
      function Of(n, e, r) {
        (r ? nn(n, e, r) : e === s) ? e = 1 : e = R(e);
        var t = O(n) ? $l : Eu;
        return t(n, e);
      }
      function Rf(n) {
        var e = O(n) ? Kl : Cu;
        return e(n);
      }
      function Nf(n) {
        if (n == null)
          return 0;
        if (an(n))
          return Zr(n) ? ve(n) : n.length;
        var e = z(n);
        return e == Tn || e == Sn ? n.size : Wt(n).length;
      }
      function Lf(n, e, r) {
        var t = O(n) ? Rt : Au;
        return r && nn(n, e, r) && (e = s), t(n, I(e, 3));
      }
      var yf = L(function(n, e) {
        if (n == null)
          return [];
        var r = e.length;
        return r > 1 && nn(n, e[0], e[1]) ? e = [] : r > 2 && nn(e[0], e[1], e[2]) && (e = [e[0]]), Ya(n, q(e, 1), []);
      }), Jr = cl || function() {
        return J.Date.now();
      };
      function bf(n, e) {
        if (typeof e != "function")
          throw new En(rn);
        return n = R(n), function() {
          if (--n < 1)
            return e.apply(this, arguments);
        };
      }
      function Uo(n, e, r) {
        return e = r ? s : e, e = n && e == null ? n.length : e, Fn(n, Mn, s, s, s, s, e);
      }
      function wo(n, e) {
        var r;
        if (typeof e != "function")
          throw new En(rn);
        return n = R(n), function() {
          return --n > 0 && (r = e.apply(this, arguments)), n <= 1 && (e = s), r;
        };
      }
      var pi = L(function(n, e, r) {
        var t = mn;
        if (r.length) {
          var i = Jn(r, ye(pi));
          t |= Pn;
        }
        return Fn(n, t, e, r, i);
      }), Fo = L(function(n, e, r) {
        var t = mn | pe;
        if (r.length) {
          var i = Jn(r, ye(Fo));
          t |= Pn;
        }
        return Fn(e, t, n, r, i);
      });
      function Bo(n, e, r) {
        e = r ? s : e;
        var t = Fn(n, kn, s, s, s, s, s, e);
        return t.placeholder = Bo.placeholder, t;
      }
      function Vo(n, e, r) {
        e = r ? s : e;
        var t = Fn(n, je, s, s, s, s, s, e);
        return t.placeholder = Vo.placeholder, t;
      }
      function Yo(n, e, r) {
        var t, i, o, c, l, d, p = 0, g = !1, E = !1, _ = !0;
        if (typeof n != "function")
          throw new En(rn);
        e = vn(e) || 0, B(r) && (g = !!r.leading, E = "maxWait" in r, o = E ? $(vn(r.maxWait) || 0, e) : o, _ = "trailing" in r ? !!r.trailing : _);
        function A(W) {
          var Ln = t, Hn = i;
          return t = i = s, p = W, c = n.apply(Hn, Ln), c;
        }
        function v(W) {
          return p = W, l = er(y, e), g ? A(W) : c;
        }
        function N(W) {
          var Ln = W - d, Hn = W - p, cs = e - Ln;
          return E ? X(cs, o - Hn) : cs;
        }
        function m(W) {
          var Ln = W - d, Hn = W - p;
          return d === s || Ln >= e || Ln < 0 || E && Hn >= o;
        }
        function y() {
          var W = Jr();
          if (m(W))
            return D(W);
          l = er(y, N(W));
        }
        function D(W) {
          return l = s, _ && t ? A(W) : (t = i = s, c);
        }
        function fn() {
          l !== s && za(l), p = 0, t = d = i = l = s;
        }
        function en() {
          return l === s ? c : D(Jr());
        }
        function hn() {
          var W = Jr(), Ln = m(W);
          if (t = arguments, i = this, d = W, Ln) {
            if (l === s)
              return v(d);
            if (E)
              return za(l), l = er(y, e), A(d);
          }
          return l === s && (l = er(y, e)), c;
        }
        return hn.cancel = fn, hn.flush = en, hn;
      }
      var Df = L(function(n, e) {
        return Da(n, 1, e);
      }), jf = L(function(n, e, r) {
        return Da(n, vn(e) || 0, r);
      });
      function kf(n) {
        return Fn(n, at);
      }
      function qr(n, e) {
        if (typeof n != "function" || e != null && typeof e != "function")
          throw new En(rn);
        var r = function() {
          var t = arguments, i = e ? e.apply(this, t) : t[0], o = r.cache;
          if (o.has(i))
            return o.get(i);
          var c = n.apply(this, t);
          return r.cache = o.set(i, c) || o, c;
        };
        return r.cache = new (qr.Cache || Un)(), r;
      }
      qr.Cache = Un;
      function Xr(n) {
        if (typeof n != "function")
          throw new En(rn);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, e[0]);
            case 2:
              return !n.call(this, e[0], e[1]);
            case 3:
              return !n.call(this, e[0], e[1], e[2]);
          }
          return !n.apply(this, e);
        };
      }
      function Pf(n) {
        return wo(2, n);
      }
      var Mf = Iu(function(n, e) {
        e = e.length == 1 && O(e[0]) ? w(e[0], ln(I())) : w(q(e, 1), ln(I()));
        var r = e.length;
        return L(function(t) {
          for (var i = -1, o = X(t.length, r); ++i < o; )
            t[i] = e[i].call(this, t[i]);
          return cn(n, this, t);
        });
      }), gi = L(function(n, e) {
        var r = Jn(e, ye(gi));
        return Fn(n, Pn, s, e, r);
      }), Wo = L(function(n, e) {
        var r = Jn(e, ye(Wo));
        return Fn(n, ke, s, e, r);
      }), xf = Bn(function(n, e) {
        return Fn(n, Pe, s, s, s, e);
      });
      function Gf(n, e) {
        if (typeof n != "function")
          throw new En(rn);
        return e = e === s ? e : R(e), L(n, e);
      }
      function Uf(n, e) {
        if (typeof n != "function")
          throw new En(rn);
        return e = e == null ? 0 : $(R(e), 0), L(function(r) {
          var t = r[e], i = ne(r, 0, e);
          return t && Qn(i, t), cn(n, this, i);
        });
      }
      function wf(n, e, r) {
        var t = !0, i = !0;
        if (typeof n != "function")
          throw new En(rn);
        return B(r) && (t = "leading" in r ? !!r.leading : t, i = "trailing" in r ? !!r.trailing : i), Yo(n, e, {
          leading: t,
          maxWait: e,
          trailing: i
        });
      }
      function Ff(n) {
        return Uo(n, 1);
      }
      function Bf(n, e) {
        return gi(Zt(e), n);
      }
      function Vf() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return O(n) ? n : [n];
      }
      function Yf(n) {
        return Cn(n, fe);
      }
      function Wf(n, e) {
        return e = typeof e == "function" ? e : s, Cn(n, fe, e);
      }
      function Hf(n) {
        return Cn(n, $n | fe);
      }
      function $f(n, e) {
        return e = typeof e == "function" ? e : s, Cn(n, $n | fe, e);
      }
      function Kf(n, e) {
        return e == null || ba(n, e, Q(e));
      }
      function Nn(n, e) {
        return n === e || n !== n && e !== e;
      }
      var Qf = Yr(Bt), Jf = Yr(function(n, e) {
        return n >= e;
      }), de = xa(/* @__PURE__ */ function() {
        return arguments;
      }()) ? xa : function(n) {
        return V(n) && M.call(n, "callee") && !ma.call(n, "callee");
      }, O = f.isArray, qf = ta ? ln(ta) : tu;
      function an(n) {
        return n != null && zr(n.length) && !Yn(n);
      }
      function Y(n) {
        return V(n) && an(n);
      }
      function Xf(n) {
        return n === !0 || n === !1 || V(n) && Z(n) == Me;
      }
      var ee = ul || Ri, zf = ia ? ln(ia) : iu;
      function Zf(n) {
        return V(n) && n.nodeType === 1 && !rr(n);
      }
      function nh(n) {
        if (n == null)
          return !0;
        if (an(n) && (O(n) || typeof n == "string" || typeof n.splice == "function" || ee(n) || be(n) || de(n)))
          return !n.length;
        var e = z(n);
        if (e == Tn || e == Sn)
          return !n.size;
        if (nr(n))
          return !Wt(n).length;
        for (var r in n)
          if (M.call(n, r))
            return !1;
        return !0;
      }
      function eh(n, e) {
        return Xe(n, e);
      }
      function rh(n, e, r) {
        r = typeof r == "function" ? r : s;
        var t = r ? r(n, e) : s;
        return t === s ? Xe(n, e, s, r) : !!t;
      }
      function Ei(n) {
        if (!V(n))
          return !1;
        var e = Z(n);
        return e == ur || e == Ss || typeof n.message == "string" && typeof n.name == "string" && !rr(n);
      }
      function th(n) {
        return typeof n == "number" && Sa(n);
      }
      function Yn(n) {
        if (!B(n))
          return !1;
        var e = Z(n);
        return e == dr || e == Di || e == Ts || e == Rs;
      }
      function Ho(n) {
        return typeof n == "number" && n == R(n);
      }
      function zr(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ge;
      }
      function B(n) {
        var e = typeof n;
        return n != null && (e == "object" || e == "function");
      }
      function V(n) {
        return n != null && typeof n == "object";
      }
      var $o = aa ? ln(aa) : ou;
      function ih(n, e) {
        return n === e || Yt(n, e, oi(e));
      }
      function ah(n, e, r) {
        return r = typeof r == "function" ? r : s, Yt(n, e, oi(e), r);
      }
      function oh(n) {
        return Ko(n) && n != +n;
      }
      function sh(n) {
        if (Yu(n))
          throw new S(re);
        return Ga(n);
      }
      function ch(n) {
        return n === null;
      }
      function lh(n) {
        return n == null;
      }
      function Ko(n) {
        return typeof n == "number" || V(n) && Z(n) == Ge;
      }
      function rr(n) {
        if (!V(n) || Z(n) != xn)
          return !1;
        var e = Or(n);
        if (e === null)
          return !0;
        var r = M.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && vr.call(r) == il;
      }
      var _i = oa ? ln(oa) : su;
      function uh(n) {
        return Ho(n) && n >= -9007199254740991 && n <= ge;
      }
      var Qo = sa ? ln(sa) : cu;
      function Zr(n) {
        return typeof n == "string" || !O(n) && V(n) && Z(n) == we;
      }
      function dn(n) {
        return typeof n == "symbol" || V(n) && Z(n) == fr;
      }
      var be = ca ? ln(ca) : lu;
      function dh(n) {
        return n === s;
      }
      function fh(n) {
        return V(n) && z(n) == Fe;
      }
      function hh(n) {
        return V(n) && Z(n) == Ls;
      }
      var ph = Yr(Ht), gh = Yr(function(n, e) {
        return n <= e;
      });
      function Jo(n) {
        if (!n)
          return [];
        if (an(n))
          return Zr(n) ? On(n) : tn(n);
        if (Ye && n[Ye])
          return $c(n[Ye]());
        var e = z(n), r = e == Tn ? jt : e == Sn ? Cr : De;
        return r(n);
      }
      function Wn(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = vn(n), n === sr || n === -1 / 0) {
          var e = n < 0 ? -1 : 1;
          return e * As;
        }
        return n === n ? n : 0;
      }
      function R(n) {
        var e = Wn(n), r = e % 1;
        return e === e ? r ? e - r : e : 0;
      }
      function qo(n) {
        return n ? se(R(n), 0, yn) : 0;
      }
      function vn(n) {
        if (typeof n == "number")
          return n;
        if (dn(n))
          return cr;
        if (B(n)) {
          var e = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = B(e) ? e + "" : e;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = pa(n);
        var r = Js.test(n);
        return r || Xs.test(n) ? yc(n.slice(2), r ? 2 : 8) : Qs.test(n) ? cr : +n;
      }
      function Xo(n) {
        return Dn(n, on(n));
      }
      function Eh(n) {
        return n ? se(R(n), -9007199254740991, ge) : n === 0 ? n : 0;
      }
      function k(n) {
        return n == null ? "" : un(n);
      }
      var _h = Ne(function(n, e) {
        if (nr(e) || an(e)) {
          Dn(e, Q(e), n);
          return;
        }
        for (var r in e)
          M.call(e, r) && Qe(n, r, e[r]);
      }), zo = Ne(function(n, e) {
        Dn(e, on(e), n);
      }), nt = Ne(function(n, e, r, t) {
        Dn(e, on(e), n, t);
      }), Ch = Ne(function(n, e, r, t) {
        Dn(e, Q(e), n, t);
      }), Ah = Bn(Ut);
      function Ih(n, e) {
        var r = Re(n);
        return e == null ? r : ya(r, e);
      }
      var vh = L(function(n, e) {
        n = x(n);
        var r = -1, t = e.length, i = t > 2 ? e[2] : s;
        for (i && nn(e[0], e[1], i) && (t = 1); ++r < t; )
          for (var o = e[r], c = on(o), l = -1, d = c.length; ++l < d; ) {
            var p = c[l], g = n[p];
            (g === s || Nn(g, Te[p]) && !M.call(n, p)) && (n[p] = o[p]);
          }
        return n;
      }), mh = L(function(n) {
        return n.push(s, go), cn(Zo, s, n);
      });
      function Th(n, e) {
        return ua(n, I(e, 3), bn);
      }
      function Sh(n, e) {
        return ua(n, I(e, 3), Ft);
      }
      function Oh(n, e) {
        return n == null ? n : wt(n, I(e, 3), on);
      }
      function Rh(n, e) {
        return n == null ? n : Pa(n, I(e, 3), on);
      }
      function Nh(n, e) {
        return n && bn(n, I(e, 3));
      }
      function Lh(n, e) {
        return n && Ft(n, I(e, 3));
      }
      function yh(n) {
        return n == null ? [] : Mr(n, Q(n));
      }
      function bh(n) {
        return n == null ? [] : Mr(n, on(n));
      }
      function Ci(n, e, r) {
        var t = n == null ? s : ce(n, e);
        return t === s ? r : t;
      }
      function Dh(n, e) {
        return n != null && Co(n, e, Zl);
      }
      function Ai(n, e) {
        return n != null && Co(n, e, nu);
      }
      var jh = lo(function(n, e, r) {
        e != null && typeof e.toString != "function" && (e = mr.call(e)), n[e] = r;
      }, vi(sn)), kh = lo(function(n, e, r) {
        e != null && typeof e.toString != "function" && (e = mr.call(e)), M.call(n, e) ? n[e].push(r) : n[e] = [r];
      }, I), Ph = L(qe);
      function Q(n) {
        return an(n) ? Na(n) : Wt(n);
      }
      function on(n) {
        return an(n) ? Na(n, !0) : uu(n);
      }
      function Mh(n, e) {
        var r = {};
        return e = I(e, 3), bn(n, function(t, i, o) {
          wn(r, e(t, i, o), t);
        }), r;
      }
      function xh(n, e) {
        var r = {};
        return e = I(e, 3), bn(n, function(t, i, o) {
          wn(r, i, e(t, i, o));
        }), r;
      }
      var Gh = Ne(function(n, e, r) {
        xr(n, e, r);
      }), Zo = Ne(function(n, e, r, t) {
        xr(n, e, r, t);
      }), Uh = Bn(function(n, e) {
        var r = {};
        if (n == null)
          return r;
        var t = !1;
        e = w(e, function(o) {
          return o = Zn(o, n), t || (t = o.length > 1), o;
        }), Dn(n, ii(n), r), t && (r = Cn(r, $n | Li | fe, Du));
        for (var i = e.length; i--; )
          qt(r, e[i]);
        return r;
      });
      function wh(n, e) {
        return ns(n, Xr(I(e)));
      }
      var Fh = Bn(function(n, e) {
        return n == null ? {} : fu(n, e);
      });
      function ns(n, e) {
        if (n == null)
          return {};
        var r = w(ii(n), function(t) {
          return [t];
        });
        return e = I(e), Wa(n, r, function(t, i) {
          return e(t, i[0]);
        });
      }
      function Bh(n, e, r) {
        e = Zn(e, n);
        var t = -1, i = e.length;
        for (i || (i = 1, n = s); ++t < i; ) {
          var o = n == null ? s : n[jn(e[t])];
          o === s && (t = i, o = r), n = Yn(o) ? o.call(n) : o;
        }
        return n;
      }
      function Vh(n, e, r) {
        return n == null ? n : ze(n, e, r);
      }
      function Yh(n, e, r, t) {
        return t = typeof t == "function" ? t : s, n == null ? n : ze(n, e, r, t);
      }
      var es = ho(Q), rs = ho(on);
      function Wh(n, e, r) {
        var t = O(n), i = t || ee(n) || be(n);
        if (e = I(e, 4), r == null) {
          var o = n && n.constructor;
          i ? r = t ? new o() : [] : B(n) ? r = Yn(o) ? Re(Or(n)) : {} : r = {};
        }
        return (i ? gn : bn)(n, function(c, l, d) {
          return e(r, c, l, d);
        }), r;
      }
      function Hh(n, e) {
        return n == null ? !0 : qt(n, e);
      }
      function $h(n, e, r) {
        return n == null ? n : Ja(n, e, Zt(r));
      }
      function Kh(n, e, r, t) {
        return t = typeof t == "function" ? t : s, n == null ? n : Ja(n, e, Zt(r), t);
      }
      function De(n) {
        return n == null ? [] : Dt(n, Q(n));
      }
      function Qh(n) {
        return n == null ? [] : Dt(n, on(n));
      }
      function Jh(n, e, r) {
        return r === s && (r = e, e = s), r !== s && (r = vn(r), r = r === r ? r : 0), e !== s && (e = vn(e), e = e === e ? e : 0), se(vn(n), e, r);
      }
      function qh(n, e, r) {
        return e = Wn(e), r === s ? (r = e, e = 0) : r = Wn(r), n = vn(n), eu(n, e, r);
      }
      function Xh(n, e, r) {
        if (r && typeof r != "boolean" && nn(n, e, r) && (e = r = s), r === s && (typeof e == "boolean" ? (r = e, e = s) : typeof n == "boolean" && (r = n, n = s)), n === s && e === s ? (n = 0, e = 1) : (n = Wn(n), e === s ? (e = n, n = 0) : e = Wn(e)), n > e) {
          var t = n;
          n = e, e = t;
        }
        if (r || n % 1 || e % 1) {
          var i = Oa();
          return X(n + i * (e - n + Lc("1e-" + ((i + "").length - 1))), e);
        }
        return Kt(n, e);
      }
      var zh = Le(function(n, e, r) {
        return e = e.toLowerCase(), n + (r ? ts(e) : e);
      });
      function ts(n) {
        return Ii(k(n).toLowerCase());
      }
      function is(n) {
        return n = k(n), n && n.replace(Zs, Bc).replace(Cc, "");
      }
      function Zh(n, e, r) {
        n = k(n), e = un(e);
        var t = n.length;
        r = r === s ? t : se(R(r), 0, t);
        var i = r;
        return r -= e.length, r >= 0 && n.slice(r, i) == e;
      }
      function np(n) {
        return n = k(n), n && ks.test(n) ? n.replace(Pi, Vc) : n;
      }
      function ep(n) {
        return n = k(n), n && ws.test(n) ? n.replace(gt, "\\$&") : n;
      }
      var rp = Le(function(n, e, r) {
        return n + (r ? "-" : "") + e.toLowerCase();
      }), tp = Le(function(n, e, r) {
        return n + (r ? " " : "") + e.toLowerCase();
      }), ip = oo("toLowerCase");
      function ap(n, e, r) {
        n = k(n), e = R(e);
        var t = e ? ve(n) : 0;
        if (!e || t >= e)
          return n;
        var i = (e - t) / 2;
        return Vr(yr(i), r) + n + Vr(Lr(i), r);
      }
      function op(n, e, r) {
        n = k(n), e = R(e);
        var t = e ? ve(n) : 0;
        return e && t < e ? n + Vr(e - t, r) : n;
      }
      function sp(n, e, r) {
        n = k(n), e = R(e);
        var t = e ? ve(n) : 0;
        return e && t < e ? Vr(e - t, r) + n : n;
      }
      function cp(n, e, r) {
        return r || e == null ? e = 0 : e && (e = +e), pl(k(n).replace(Et, ""), e || 0);
      }
      function lp(n, e, r) {
        return (r ? nn(n, e, r) : e === s) ? e = 1 : e = R(e), Qt(k(n), e);
      }
      function up() {
        var n = arguments, e = k(n[0]);
        return n.length < 3 ? e : e.replace(n[1], n[2]);
      }
      var dp = Le(function(n, e, r) {
        return n + (r ? "_" : "") + e.toLowerCase();
      });
      function fp(n, e, r) {
        return r && typeof r != "number" && nn(n, e, r) && (e = r = s), r = r === s ? yn : r >>> 0, r ? (n = k(n), n && (typeof e == "string" || e != null && !_i(e)) && (e = un(e), !e && Ie(n)) ? ne(On(n), 0, r) : n.split(e, r)) : [];
      }
      var hp = Le(function(n, e, r) {
        return n + (r ? " " : "") + Ii(e);
      });
      function pp(n, e, r) {
        return n = k(n), r = r == null ? 0 : se(R(r), 0, n.length), e = un(e), n.slice(r, r + e.length) == e;
      }
      function gp(n, e, r) {
        var t = a.templateSettings;
        r && nn(n, e, r) && (e = s), n = k(n), e = nt({}, e, t, po);
        var i = nt({}, e.imports, t.imports, po), o = Q(i), c = Dt(i, o), l, d, p = 0, g = e.interpolate || hr, E = "__p += '", _ = kt(
          (e.escape || hr).source + "|" + g.source + "|" + (g === Mi ? Ks : hr).source + "|" + (e.evaluate || hr).source + "|$",
          "g"
        ), A = "//# sourceURL=" + (M.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Tc + "]") + `
`;
        n.replace(_, function(m, y, D, fn, en, hn) {
          return D || (D = fn), E += n.slice(p, hn).replace(nc, Yc), y && (l = !0, E += `' +
__e(` + y + `) +
'`), en && (d = !0, E += `';
` + en + `;
__p += '`), D && (E += `' +
((__t = (` + D + `)) == null ? '' : __t) +
'`), p = hn + m.length, m;
        }), E += `';
`;
        var v = M.call(e, "variable") && e.variable;
        if (!v)
          E = `with (obj) {
` + E + `
}
`;
        else if (Hs.test(v))
          throw new S(tt);
        E = (d ? E.replace(ys, "") : E).replace(bs, "$1").replace(Ds, "$1;"), E = "function(" + (v || "obj") + `) {
` + (v ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (d ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + E + `return __p
}`;
        var N = os(function() {
          return j(o, A + "return " + E).apply(s, c);
        });
        if (N.source = E, Ei(N))
          throw N;
        return N;
      }
      function Ep(n) {
        return k(n).toLowerCase();
      }
      function _p(n) {
        return k(n).toUpperCase();
      }
      function Cp(n, e, r) {
        if (n = k(n), n && (r || e === s))
          return pa(n);
        if (!n || !(e = un(e)))
          return n;
        var t = On(n), i = On(e), o = ga(t, i), c = Ea(t, i) + 1;
        return ne(t, o, c).join("");
      }
      function Ap(n, e, r) {
        if (n = k(n), n && (r || e === s))
          return n.slice(0, Ca(n) + 1);
        if (!n || !(e = un(e)))
          return n;
        var t = On(n), i = Ea(t, On(e)) + 1;
        return ne(t, 0, i).join("");
      }
      function Ip(n, e, r) {
        if (n = k(n), n && (r || e === s))
          return n.replace(Et, "");
        if (!n || !(e = un(e)))
          return n;
        var t = On(n), i = ga(t, On(e));
        return ne(t, i).join("");
      }
      function vp(n, e) {
        var r = hs, t = ps;
        if (B(e)) {
          var i = "separator" in e ? e.separator : i;
          r = "length" in e ? R(e.length) : r, t = "omission" in e ? un(e.omission) : t;
        }
        n = k(n);
        var o = n.length;
        if (Ie(n)) {
          var c = On(n);
          o = c.length;
        }
        if (r >= o)
          return n;
        var l = r - ve(t);
        if (l < 1)
          return t;
        var d = c ? ne(c, 0, l).join("") : n.slice(0, l);
        if (i === s)
          return d + t;
        if (c && (l += d.length - l), _i(i)) {
          if (n.slice(l).search(i)) {
            var p, g = d;
            for (i.global || (i = kt(i.source, k(xi.exec(i)) + "g")), i.lastIndex = 0; p = i.exec(g); )
              var E = p.index;
            d = d.slice(0, E === s ? l : E);
          }
        } else if (n.indexOf(un(i), l) != l) {
          var _ = d.lastIndexOf(i);
          _ > -1 && (d = d.slice(0, _));
        }
        return d + t;
      }
      function mp(n) {
        return n = k(n), n && js.test(n) ? n.replace(ki, qc) : n;
      }
      var Tp = Le(function(n, e, r) {
        return n + (r ? " " : "") + e.toUpperCase();
      }), Ii = oo("toUpperCase");
      function as(n, e, r) {
        return n = k(n), e = r ? s : e, e === s ? Hc(n) ? Zc(n) : xc(n) : n.match(e) || [];
      }
      var os = L(function(n, e) {
        try {
          return cn(n, s, e);
        } catch (r) {
          return Ei(r) ? r : new S(r);
        }
      }), Sp = Bn(function(n, e) {
        return gn(e, function(r) {
          r = jn(r), wn(n, r, pi(n[r], n));
        }), n;
      });
      function Op(n) {
        var e = n == null ? 0 : n.length, r = I();
        return n = e ? w(n, function(t) {
          if (typeof t[1] != "function")
            throw new En(rn);
          return [r(t[0]), t[1]];
        }) : [], L(function(t) {
          for (var i = -1; ++i < e; ) {
            var o = n[i];
            if (cn(o[0], this, t))
              return cn(o[1], this, t);
          }
        });
      }
      function Rp(n) {
        return ql(Cn(n, $n));
      }
      function vi(n) {
        return function() {
          return n;
        };
      }
      function Np(n, e) {
        return n == null || n !== n ? e : n;
      }
      var Lp = co(), yp = co(!0);
      function sn(n) {
        return n;
      }
      function mi(n) {
        return Ua(typeof n == "function" ? n : Cn(n, $n));
      }
      function bp(n) {
        return Fa(Cn(n, $n));
      }
      function Dp(n, e) {
        return Ba(n, Cn(e, $n));
      }
      var jp = L(function(n, e) {
        return function(r) {
          return qe(r, n, e);
        };
      }), kp = L(function(n, e) {
        return function(r) {
          return qe(n, r, e);
        };
      });
      function Ti(n, e, r) {
        var t = Q(e), i = Mr(e, t);
        r == null && !(B(e) && (i.length || !t.length)) && (r = e, e = n, n = this, i = Mr(e, Q(e)));
        var o = !(B(r) && "chain" in r) || !!r.chain, c = Yn(n);
        return gn(i, function(l) {
          var d = e[l];
          n[l] = d, c && (n.prototype[l] = function() {
            var p = this.__chain__;
            if (o || p) {
              var g = n(this.__wrapped__), E = g.__actions__ = tn(this.__actions__);
              return E.push({ func: d, args: arguments, thisArg: n }), g.__chain__ = p, g;
            }
            return d.apply(n, Qn([this.value()], arguments));
          });
        }), n;
      }
      function Pp() {
        return J._ === this && (J._ = al), this;
      }
      function Si() {
      }
      function Mp(n) {
        return n = R(n), L(function(e) {
          return Va(e, n);
        });
      }
      var xp = ei(w), Gp = ei(la), Up = ei(Rt);
      function ss(n) {
        return ci(n) ? Nt(jn(n)) : hu(n);
      }
      function wp(n) {
        return function(e) {
          return n == null ? s : ce(n, e);
        };
      }
      var Fp = uo(), Bp = uo(!0);
      function Oi() {
        return [];
      }
      function Ri() {
        return !1;
      }
      function Vp() {
        return {};
      }
      function Yp() {
        return "";
      }
      function Wp() {
        return !0;
      }
      function Hp(n, e) {
        if (n = R(n), n < 1 || n > ge)
          return [];
        var r = yn, t = X(n, yn);
        e = I(e), n -= yn;
        for (var i = bt(t, e); ++r < n; )
          e(r);
        return i;
      }
      function $p(n) {
        return O(n) ? w(n, jn) : dn(n) ? [n] : tn(No(k(n)));
      }
      function Kp(n) {
        var e = ++tl;
        return k(n) + e;
      }
      var Qp = Br(function(n, e) {
        return n + e;
      }, 0), Jp = ri("ceil"), qp = Br(function(n, e) {
        return n / e;
      }, 1), Xp = ri("floor");
      function zp(n) {
        return n && n.length ? Pr(n, sn, Bt) : s;
      }
      function Zp(n, e) {
        return n && n.length ? Pr(n, I(e, 2), Bt) : s;
      }
      function ng(n) {
        return fa(n, sn);
      }
      function eg(n, e) {
        return fa(n, I(e, 2));
      }
      function rg(n) {
        return n && n.length ? Pr(n, sn, Ht) : s;
      }
      function tg(n, e) {
        return n && n.length ? Pr(n, I(e, 2), Ht) : s;
      }
      var ig = Br(function(n, e) {
        return n * e;
      }, 1), ag = ri("round"), og = Br(function(n, e) {
        return n - e;
      }, 0);
      function sg(n) {
        return n && n.length ? yt(n, sn) : 0;
      }
      function cg(n, e) {
        return n && n.length ? yt(n, I(e, 2)) : 0;
      }
      return a.after = bf, a.ary = Uo, a.assign = _h, a.assignIn = zo, a.assignInWith = nt, a.assignWith = Ch, a.at = Ah, a.before = wo, a.bind = pi, a.bindAll = Sp, a.bindKey = Fo, a.castArray = Vf, a.chain = Mo, a.chunk = qu, a.compact = Xu, a.concat = zu, a.cond = Op, a.conforms = Rp, a.constant = vi, a.countBy = sf, a.create = Ih, a.curry = Bo, a.curryRight = Vo, a.debounce = Yo, a.defaults = vh, a.defaultsDeep = mh, a.defer = Df, a.delay = jf, a.difference = Zu, a.differenceBy = nd, a.differenceWith = ed, a.drop = rd, a.dropRight = td, a.dropRightWhile = id, a.dropWhile = ad, a.fill = od, a.filter = lf, a.flatMap = ff, a.flatMapDeep = hf, a.flatMapDepth = pf, a.flatten = Do, a.flattenDeep = sd, a.flattenDepth = cd, a.flip = kf, a.flow = Lp, a.flowRight = yp, a.fromPairs = ld, a.functions = yh, a.functionsIn = bh, a.groupBy = gf, a.initial = dd, a.intersection = fd, a.intersectionBy = hd, a.intersectionWith = pd, a.invert = jh, a.invertBy = kh, a.invokeMap = _f, a.iteratee = mi, a.keyBy = Cf, a.keys = Q, a.keysIn = on, a.map = Qr, a.mapKeys = Mh, a.mapValues = xh, a.matches = bp, a.matchesProperty = Dp, a.memoize = qr, a.merge = Gh, a.mergeWith = Zo, a.method = jp, a.methodOf = kp, a.mixin = Ti, a.negate = Xr, a.nthArg = Mp, a.omit = Uh, a.omitBy = wh, a.once = Pf, a.orderBy = Af, a.over = xp, a.overArgs = Mf, a.overEvery = Gp, a.overSome = Up, a.partial = gi, a.partialRight = Wo, a.partition = If, a.pick = Fh, a.pickBy = ns, a.property = ss, a.propertyOf = wp, a.pull = Cd, a.pullAll = ko, a.pullAllBy = Ad, a.pullAllWith = Id, a.pullAt = vd, a.range = Fp, a.rangeRight = Bp, a.rearg = xf, a.reject = Tf, a.remove = md, a.rest = Gf, a.reverse = fi, a.sampleSize = Of, a.set = Vh, a.setWith = Yh, a.shuffle = Rf, a.slice = Td, a.sortBy = yf, a.sortedUniq = bd, a.sortedUniqBy = Dd, a.split = fp, a.spread = Uf, a.tail = jd, a.take = kd, a.takeRight = Pd, a.takeRightWhile = Md, a.takeWhile = xd, a.tap = Xd, a.throttle = wf, a.thru = Kr, a.toArray = Jo, a.toPairs = es, a.toPairsIn = rs, a.toPath = $p, a.toPlainObject = Xo, a.transform = Wh, a.unary = Ff, a.union = Gd, a.unionBy = Ud, a.unionWith = wd, a.uniq = Fd, a.uniqBy = Bd, a.uniqWith = Vd, a.unset = Hh, a.unzip = hi, a.unzipWith = Po, a.update = $h, a.updateWith = Kh, a.values = De, a.valuesIn = Qh, a.without = Yd, a.words = as, a.wrap = Bf, a.xor = Wd, a.xorBy = Hd, a.xorWith = $d, a.zip = Kd, a.zipObject = Qd, a.zipObjectDeep = Jd, a.zipWith = qd, a.entries = es, a.entriesIn = rs, a.extend = zo, a.extendWith = nt, Ti(a, a), a.add = Qp, a.attempt = os, a.camelCase = zh, a.capitalize = ts, a.ceil = Jp, a.clamp = Jh, a.clone = Yf, a.cloneDeep = Hf, a.cloneDeepWith = $f, a.cloneWith = Wf, a.conformsTo = Kf, a.deburr = is, a.defaultTo = Np, a.divide = qp, a.endsWith = Zh, a.eq = Nn, a.escape = np, a.escapeRegExp = ep, a.every = cf, a.find = uf, a.findIndex = yo, a.findKey = Th, a.findLast = df, a.findLastIndex = bo, a.findLastKey = Sh, a.floor = Xp, a.forEach = xo, a.forEachRight = Go, a.forIn = Oh, a.forInRight = Rh, a.forOwn = Nh, a.forOwnRight = Lh, a.get = Ci, a.gt = Qf, a.gte = Jf, a.has = Dh, a.hasIn = Ai, a.head = jo, a.identity = sn, a.includes = Ef, a.indexOf = ud, a.inRange = qh, a.invoke = Ph, a.isArguments = de, a.isArray = O, a.isArrayBuffer = qf, a.isArrayLike = an, a.isArrayLikeObject = Y, a.isBoolean = Xf, a.isBuffer = ee, a.isDate = zf, a.isElement = Zf, a.isEmpty = nh, a.isEqual = eh, a.isEqualWith = rh, a.isError = Ei, a.isFinite = th, a.isFunction = Yn, a.isInteger = Ho, a.isLength = zr, a.isMap = $o, a.isMatch = ih, a.isMatchWith = ah, a.isNaN = oh, a.isNative = sh, a.isNil = lh, a.isNull = ch, a.isNumber = Ko, a.isObject = B, a.isObjectLike = V, a.isPlainObject = rr, a.isRegExp = _i, a.isSafeInteger = uh, a.isSet = Qo, a.isString = Zr, a.isSymbol = dn, a.isTypedArray = be, a.isUndefined = dh, a.isWeakMap = fh, a.isWeakSet = hh, a.join = gd, a.kebabCase = rp, a.last = In, a.lastIndexOf = Ed, a.lowerCase = tp, a.lowerFirst = ip, a.lt = ph, a.lte = gh, a.max = zp, a.maxBy = Zp, a.mean = ng, a.meanBy = eg, a.min = rg, a.minBy = tg, a.stubArray = Oi, a.stubFalse = Ri, a.stubObject = Vp, a.stubString = Yp, a.stubTrue = Wp, a.multiply = ig, a.nth = _d, a.noConflict = Pp, a.noop = Si, a.now = Jr, a.pad = ap, a.padEnd = op, a.padStart = sp, a.parseInt = cp, a.random = Xh, a.reduce = vf, a.reduceRight = mf, a.repeat = lp, a.replace = up, a.result = Bh, a.round = ag, a.runInContext = u, a.sample = Sf, a.size = Nf, a.snakeCase = dp, a.some = Lf, a.sortedIndex = Sd, a.sortedIndexBy = Od, a.sortedIndexOf = Rd, a.sortedLastIndex = Nd, a.sortedLastIndexBy = Ld, a.sortedLastIndexOf = yd, a.startCase = hp, a.startsWith = pp, a.subtract = og, a.sum = sg, a.sumBy = cg, a.template = gp, a.times = Hp, a.toFinite = Wn, a.toInteger = R, a.toLength = qo, a.toLower = Ep, a.toNumber = vn, a.toSafeInteger = Eh, a.toString = k, a.toUpper = _p, a.trim = Cp, a.trimEnd = Ap, a.trimStart = Ip, a.truncate = vp, a.unescape = mp, a.uniqueId = Kp, a.upperCase = Tp, a.upperFirst = Ii, a.each = xo, a.eachRight = Go, a.first = jo, Ti(a, function() {
        var n = {};
        return bn(a, function(e, r) {
          M.call(a.prototype, r) || (n[r] = e);
        }), n;
      }(), { chain: !1 }), a.VERSION = F, gn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        a[n].placeholder = a;
      }), gn(["drop", "take"], function(n, e) {
        b.prototype[n] = function(r) {
          r = r === s ? 1 : $(R(r), 0);
          var t = this.__filtered__ && !e ? new b(this) : this.clone();
          return t.__filtered__ ? t.__takeCount__ = X(r, t.__takeCount__) : t.__views__.push({
            size: X(r, yn),
            type: n + (t.__dir__ < 0 ? "Right" : "")
          }), t;
        }, b.prototype[n + "Right"] = function(r) {
          return this.reverse()[n](r).reverse();
        };
      }), gn(["filter", "map", "takeWhile"], function(n, e) {
        var r = e + 1, t = r == bi || r == Cs;
        b.prototype[n] = function(i) {
          var o = this.clone();
          return o.__iteratees__.push({
            iteratee: I(i, 3),
            type: r
          }), o.__filtered__ = o.__filtered__ || t, o;
        };
      }), gn(["head", "last"], function(n, e) {
        var r = "take" + (e ? "Right" : "");
        b.prototype[n] = function() {
          return this[r](1).value()[0];
        };
      }), gn(["initial", "tail"], function(n, e) {
        var r = "drop" + (e ? "" : "Right");
        b.prototype[n] = function() {
          return this.__filtered__ ? new b(this) : this[r](1);
        };
      }), b.prototype.compact = function() {
        return this.filter(sn);
      }, b.prototype.find = function(n) {
        return this.filter(n).head();
      }, b.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, b.prototype.invokeMap = L(function(n, e) {
        return typeof n == "function" ? new b(this) : this.map(function(r) {
          return qe(r, n, e);
        });
      }), b.prototype.reject = function(n) {
        return this.filter(Xr(I(n)));
      }, b.prototype.slice = function(n, e) {
        n = R(n);
        var r = this;
        return r.__filtered__ && (n > 0 || e < 0) ? new b(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), e !== s && (e = R(e), r = e < 0 ? r.dropRight(-e) : r.take(e - n)), r);
      }, b.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, b.prototype.toArray = function() {
        return this.take(yn);
      }, bn(b.prototype, function(n, e) {
        var r = /^(?:filter|find|map|reject)|While$/.test(e), t = /^(?:head|last)$/.test(e), i = a[t ? "take" + (e == "last" ? "Right" : "") : e], o = t || /^find/.test(e);
        i && (a.prototype[e] = function() {
          var c = this.__wrapped__, l = t ? [1] : arguments, d = c instanceof b, p = l[0], g = d || O(c), E = function(y) {
            var D = i.apply(a, Qn([y], l));
            return t && _ ? D[0] : D;
          };
          g && r && typeof p == "function" && p.length != 1 && (d = g = !1);
          var _ = this.__chain__, A = !!this.__actions__.length, v = o && !_, N = d && !A;
          if (!o && g) {
            c = N ? c : new b(this);
            var m = n.apply(c, l);
            return m.__actions__.push({ func: Kr, args: [E], thisArg: s }), new _n(m, _);
          }
          return v && N ? n.apply(this, l) : (m = this.thru(E), v ? t ? m.value()[0] : m.value() : m);
        });
      }), gn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var e = Ar[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", t = /^(?:pop|shift)$/.test(n);
        a.prototype[n] = function() {
          var i = arguments;
          if (t && !this.__chain__) {
            var o = this.value();
            return e.apply(O(o) ? o : [], i);
          }
          return this[r](function(c) {
            return e.apply(O(c) ? c : [], i);
          });
        };
      }), bn(b.prototype, function(n, e) {
        var r = a[e];
        if (r) {
          var t = r.name + "";
          M.call(Oe, t) || (Oe[t] = []), Oe[t].push({ name: e, func: r });
        }
      }), Oe[Fr(s, pe).name] = [{
        name: "wrapper",
        func: s
      }], b.prototype.clone = vl, b.prototype.reverse = ml, b.prototype.value = Tl, a.prototype.at = zd, a.prototype.chain = Zd, a.prototype.commit = nf, a.prototype.next = ef, a.prototype.plant = tf, a.prototype.reverse = af, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = of, a.prototype.first = a.prototype.head, Ye && (a.prototype[Ye] = rf), a;
    }, me = nl();
    te ? ((te.exports = me)._ = me, mt._ = me) : J._ = me;
  }).call(tr);
})(rt, rt.exports);
var Cg = rt.exports;
const Ag = /* @__PURE__ */ _g(Cg);
function Ig() {
  return {
    bridgeId: Eg(),
    forceStopTime: 0,
    injects: [],
    onlyRunSingle: !0,
    params: {},
    script: "",
    stopPrevIfOnlyRunSingle: !0,
    languageVersion: 200,
    optimizationLevel: -1,
    printScript: !1,
    scriptId: void 0
  };
}
function vg(T) {
  return Ag.merge({}, Ig(), T);
}
var us = { "fanfanlo/javajs/v1/a11y/a11yUtils": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get Types(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Types;
            }
            ,
            get Action(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Action;
            }
            ,
            get Wait(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Wait;
            }
            }){
            \r
\r
function checkIsPackageActivities(pn, activities){\r
    let packageName = a11yModel.lastFullScreenPackage;\r
    let activityName = a11yModel.lastFullScreenActivity;\r
    let pnMatched = pn == packageName;\r
    let anMatched = activities.some(an=>an==activityName);\r
    console.log("aaaaaaaaaaaaaapppppppppp", pnMatched, anMatched)\r
    return pnMatched && anMatched;\r
}\r
\r
function checkNodesOnShow(pn, conditions, checkList, callback){\r
    function cb(nodes){\r
        if(!isScriptRunnable)return;\r
        if(!nodes){\r
            callback(undefined, false, undefined, undefined)\r
            return;\r
        }\r
        if(!checkList){\r
            callback(nodes, true, undefined, undefined)\r
            return;\r
        }\r
        for (let i = 0; i < checkList.length; i++) {\r
            let list = checkList[i];\r
            let isOk = list.every((data)=>nodes[data.index] != null);\r
            if(isOk){\r
                callback(nodes, isOk, undefined, list);\r
                return;\r
            }\r
        }\r
        callback(nodes, false, undefined, undefined)\r
    }\r
    function onError(err){\r
        callback(undefined, false, err, undefined)\r
    }\r
    let proxy = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SfProxy();\r
    let job = proxy.find(a11yModel, pn, conditions, cb, onError);\r
    return job;\r
}\r
function conditionJsonToData(data){\r
    let s = JSON.stringify(data);\r
    // return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfRoot(s)\r
    return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfCond(s)\r
}\r
function createCheckNodesOnShow(data, callback, logger){\r
    if(logger) logger = logger.createSub(\`checkNodesOnShowFn-\${data.name}\`)\r
    let nodeConditions = JSON.parse(JSON.stringify(data.nodeConditions))\r
    let conditions = nodeConditions.map(cond=>{\r
        let root = cond;\r
        while(cond){\r
            cond.type = Types[cond.type];\r
            if(cond.action){\r
                cond.action.type = Action[cond.action.type]\r
            }\r
            if(cond.wait){\r
                cond.wait.type = Wait[cond.wait.type]\r
            }\r
            cond = cond.next;\r
        }\r
        return conditionJsonToData(root)\r
    })\r
    data.conditions = conditions;\r
    let lastCheckNodesIntervalTime = 0;\r
    let lastJob = undefined;\r
    function check(){\r
        let now = Date.now();\r
        if(lastJob){\r
            let checkNodesCancelPrevJobMaxIntervalTime = data.checkNodesCancelPrevJobMaxIntervalTime || 1000 * 1;\r
            let diff = now - lastCheckNodesIntervalTime;\r
            if(diff < checkNodesCancelPrevJobMaxIntervalTime){\r
                lastJob.cancel();\r
            }\r
        }\r
        function cb(nodes, isOk, err, matchedCheckList){\r
            logger.log("1on1 cb", isOk, err)\r
            if(!isOk){\r
                logger.log(\`1on1 cb not ok\`, conditions)\r
            }\r
            lastCheckNodesIntervalTime = now;\r
            callback(nodes, isOk, err, matchedCheckList);\r
        }\r
        lastJob = checkNodesOnShow(data.packageName, conditions, data.nodeCheckList, cb)\r
        return lastJob;\r
    }\r
    return {check}\r
}\r
\r
function keyboardIsOpen(){\r
    return com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.checkKeyboardIsOpened(a11yModel.service);\r
}\r
let prevGlobalBackKeyTime = 0;\r
let globalBackKeyInterval = 100 * 25;\r
// 如果ime已经打开则会尝试关闭ime并返回true\r
// 否则返回false\r
function hideIme(){\r
    // if(!checkCanGlobalActionBack())return false;\r
    let isIme = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.checkKeyboardIsOpened(a11yModel.service);\r
    console.log("iiiiiiiiiiiis ime", isIme);\r
    if(isIme){\r
        let bl = com.fanfanlo.lib.utils.KeyboardUtils.hideKeyboard();\r
        console.log("hide ime222", bl);\r
        return bl\r
    }\r
    return false;\r
}\r
\r
function globalActionBack(globalBackActionIntervalTime){\r
    console.log("globalActionBack1")\r
    if(!checkCanGlobalActionBack(globalBackActionIntervalTime))return false;\r
    let bl = a11yModel.globalActionBack();\r
    if(bl){\r
        prevGlobalBackKeyTime = Date.now();\r
    }\r
    console.log("globalActionBack2", bl)\r
    return bl;\r
}\r
function checkCanGlobalActionBack(globalBackActionIntervalTime){\r
    let now = Date.now();\r
    let diff = now - prevGlobalBackKeyTime;\r
    let time = globalBackActionIntervalTime == undefined || globalBackActionIntervalTime <= 0 ? globalBackKeyInterval : globalBackActionIntervalTime\r
    let bl =  diff > time;\r
    console.log("1checkCanGlobalActionBack1 back", bl, diff, now, prevGlobalBackKeyTime);\r
    return bl;\r
}\r
// 如果package已经打开并且ime也是open，则会尝试关闭ime，返回true\r
// 否则返回false\r
function hideImeIfPackageOpened(pn){\r
    let win = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.getWindowByPackageName(a11yModel.service, pn, false, -1);\r
    console.log("hideImeIfPackageOpened1 win!=null", win != null, pn)\r
    if(!win)return false;\r
    return hideIme();\r
}\r
\r
function createNodeAction(actionConf){\r
    let type = actionConf.type;\r
    let nodeAction;\r
    switch (type){\r
        case "Click":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Click();\r
            break;\r
        case "LongClick":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.LongClick();\r
            break;\r
        case "TryClick":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryClick();\r
            break;\r
        case "TryLongClick":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryLongClick();\r
            break;\r
        case "SetText":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SetText(actionConf.value);\r
            break;\r
        default:\r
            let msg = \`no action matched, \${type}\`\r
            console.log(\`createNodeAction1\`, actionConf)\r
            throw new Error(msg)\r
    }\r
    return nodeAction\r
}\r
return {checkIsPackageActivities, checkNodesOnShow, createCheckNodesOnShow, hideIme, hideImeIfPackageOpened, checkCanGlobalActionBack, globalActionBack, keyboardIsOpen, createNodeAction}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/a11y/a11yUtils.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/a11y/node/ICondition", properties: ["Types", " Action", " Wait"] }] }, "fanfanlo/javajs/v1/event/createEventDispatcher": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
function createEventDispatcher(){\r
    return new com.fanfanlo.lib.event.EventDispatcher()\r
}\r
\r
return {createEventDispatcher}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/event/createEventDispatcher.java.js", e);
    }
    })()
    `, dependencies: [] }, "fanfanlo/javajs/v1/permission/permission": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({}){
            let PermissionGroup = {\r
\r
    ACTIVITY_RECOGNITION : "android.permission-group.ACTIVITY_RECOGNITION",\r
    CALENDAR : "android.permission-group.CALENDAR",\r
    CALL_LOG : "android.permission-group.CALL_LOG",\r
    CAMERA : "android.permission-group.CAMERA",\r
    CONTACTS : "android.permission-group.CONTACTS",\r
    LOCATION : "android.permission-group.LOCATION",\r
    MICROPHONE : "android.permission-group.MICROPHONE",\r
    NEARBY_DEVICES : "android.permission-group.NEARBY_DEVICES",\r
    NOTIFICATIONS : "android.permission-group.NOTIFICATIONS",\r
    PHONE : "android.permission-group.PHONE",\r
    READ_MEDIA_AURAL : "android.permission-group.READ_MEDIA_AURAL",\r
    READ_MEDIA_VISUAL : "android.permission-group.READ_MEDIA_VISUAL",\r
    SENSORS : "android.permission-group.SENSORS",\r
    SMS : "android.permission-group.SMS",\r
    STORAGE : "android.permission-group.STORAGE",\r
}\r
\r
let Permission = {\r
\r
    ACCEPT_HANDOVER : "android.permission.ACCEPT_HANDOVER",\r
    ACCESS_BACKGROUND_LOCATION : "android.permission.ACCESS_BACKGROUND_LOCATION",\r
    ACCESS_BLOBS_ACROSS_USERS : "android.permission.ACCESS_BLOBS_ACROSS_USERS",\r
    ACCESS_CHECKIN_PROPERTIES : "android.permission.ACCESS_CHECKIN_PROPERTIES",\r
    ACCESS_COARSE_LOCATION : "android.permission.ACCESS_COARSE_LOCATION",\r
    ACCESS_FINE_LOCATION : "android.permission.ACCESS_FINE_LOCATION",\r
    ACCESS_LOCATION_EXTRA_COMMANDS : "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS",\r
    ACCESS_MEDIA_LOCATION : "android.permission.ACCESS_MEDIA_LOCATION",\r
    ACCESS_NETWORK_STATE : "android.permission.ACCESS_NETWORK_STATE",\r
    ACCESS_NOTIFICATION_POLICY : "android.permission.ACCESS_NOTIFICATION_POLICY",\r
    ACCESS_WIFI_STATE : "android.permission.ACCESS_WIFI_STATE",\r
    ACCOUNT_MANAGER : "android.permission.ACCOUNT_MANAGER",\r
    ACTIVITY_RECOGNITION : "android.permission.ACTIVITY_RECOGNITION",\r
    ADD_VOICEMAIL : "com.android.voicemail.permission.ADD_VOICEMAIL",\r
    ANSWER_PHONE_CALLS : "android.permission.ANSWER_PHONE_CALLS",\r
    BATTERY_STATS : "android.permission.BATTERY_STATS",\r
    BIND_ACCESSIBILITY_SERVICE : "android.permission.BIND_ACCESSIBILITY_SERVICE",\r
    BIND_APPWIDGET : "android.permission.BIND_APPWIDGET",\r
    BIND_AUTOFILL_SERVICE : "android.permission.BIND_AUTOFILL_SERVICE",\r
    BIND_CALL_REDIRECTION_SERVICE : "android.permission.BIND_CALL_REDIRECTION_SERVICE",\r
    BIND_CARRIER_MESSAGING_CLIENT_SERVICE : "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE",\r
    /** @deprecated */\r
\r
    BIND_CARRIER_MESSAGING_SERVICE : "android.permission.BIND_CARRIER_MESSAGING_SERVICE",\r
    BIND_CARRIER_SERVICES : "android.permission.BIND_CARRIER_SERVICES",\r
    /** @deprecated */\r
\r
    BIND_CHOOSER_TARGET_SERVICE : "android.permission.BIND_CHOOSER_TARGET_SERVICE",\r
    BIND_COMPANION_DEVICE_SERVICE : "android.permission.BIND_COMPANION_DEVICE_SERVICE",\r
    BIND_CONDITION_PROVIDER_SERVICE : "android.permission.BIND_CONDITION_PROVIDER_SERVICE",\r
    BIND_CONTROLS : "android.permission.BIND_CONTROLS",\r
    BIND_CREDENTIAL_PROVIDER_SERVICE : "android.permission.BIND_CREDENTIAL_PROVIDER_SERVICE",\r
    BIND_DEVICE_ADMIN : "android.permission.BIND_DEVICE_ADMIN",\r
    BIND_DREAM_SERVICE : "android.permission.BIND_DREAM_SERVICE",\r
    BIND_INCALL_SERVICE : "android.permission.BIND_INCALL_SERVICE",\r
    BIND_INPUT_METHOD : "android.permission.BIND_INPUT_METHOD",\r
    BIND_MIDI_DEVICE_SERVICE : "android.permission.BIND_MIDI_DEVICE_SERVICE",\r
    BIND_NFC_SERVICE : "android.permission.BIND_NFC_SERVICE",\r
    BIND_NOTIFICATION_LISTENER_SERVICE : "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE",\r
    BIND_PRINT_SERVICE : "android.permission.BIND_PRINT_SERVICE",\r
    BIND_QUICK_ACCESS_WALLET_SERVICE : "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE",\r
    BIND_QUICK_SETTINGS_TILE : "android.permission.BIND_QUICK_SETTINGS_TILE",\r
    BIND_REMOTEVIEWS : "android.permission.BIND_REMOTEVIEWS",\r
    BIND_SCREENING_SERVICE : "android.permission.BIND_SCREENING_SERVICE",\r
    BIND_TELECOM_CONNECTION_SERVICE : "android.permission.BIND_TELECOM_CONNECTION_SERVICE",\r
    BIND_TEXT_SERVICE : "android.permission.BIND_TEXT_SERVICE",\r
    BIND_TV_INPUT : "android.permission.BIND_TV_INPUT",\r
    BIND_TV_INTERACTIVE_APP : "android.permission.BIND_TV_INTERACTIVE_APP",\r
    BIND_VISUAL_VOICEMAIL_SERVICE : "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE",\r
    BIND_VOICE_INTERACTION : "android.permission.BIND_VOICE_INTERACTION",\r
    BIND_VPN_SERVICE : "android.permission.BIND_VPN_SERVICE",\r
    BIND_VR_LISTENER_SERVICE : "android.permission.BIND_VR_LISTENER_SERVICE",\r
    BIND_WALLPAPER : "android.permission.BIND_WALLPAPER",\r
    BLUETOOTH : "android.permission.BLUETOOTH",\r
    BLUETOOTH_ADMIN : "android.permission.BLUETOOTH_ADMIN",\r
    BLUETOOTH_ADVERTISE : "android.permission.BLUETOOTH_ADVERTISE",\r
    BLUETOOTH_CONNECT : "android.permission.BLUETOOTH_CONNECT",\r
    BLUETOOTH_PRIVILEGED : "android.permission.BLUETOOTH_PRIVILEGED",\r
    BLUETOOTH_SCAN : "android.permission.BLUETOOTH_SCAN",\r
    BODY_SENSORS : "android.permission.BODY_SENSORS",\r
    BODY_SENSORS_BACKGROUND : "android.permission.BODY_SENSORS_BACKGROUND",\r
    BROADCAST_PACKAGE_REMOVED : "android.permission.BROADCAST_PACKAGE_REMOVED",\r
    BROADCAST_SMS : "android.permission.BROADCAST_SMS",\r
    BROADCAST_STICKY : "android.permission.BROADCAST_STICKY",\r
    BROADCAST_WAP_PUSH : "android.permission.BROADCAST_WAP_PUSH",\r
    CALL_COMPANION_APP : "android.permission.CALL_COMPANION_APP",\r
    CALL_PHONE : "android.permission.CALL_PHONE",\r
    CALL_PRIVILEGED : "android.permission.CALL_PRIVILEGED",\r
    CAMERA : "android.permission.CAMERA",\r
    CAPTURE_AUDIO_OUTPUT : "android.permission.CAPTURE_AUDIO_OUTPUT",\r
    CHANGE_COMPONENT_ENABLED_STATE : "android.permission.CHANGE_COMPONENT_ENABLED_STATE",\r
    CHANGE_CONFIGURATION : "android.permission.CHANGE_CONFIGURATION",\r
    CHANGE_NETWORK_STATE : "android.permission.CHANGE_NETWORK_STATE",\r
    CHANGE_WIFI_MULTICAST_STATE : "android.permission.CHANGE_WIFI_MULTICAST_STATE",\r
    CHANGE_WIFI_STATE : "android.permission.CHANGE_WIFI_STATE",\r
    CLEAR_APP_CACHE : "android.permission.CLEAR_APP_CACHE",\r
    CONFIGURE_WIFI_DISPLAY : "android.permission.CONFIGURE_WIFI_DISPLAY",\r
    CONTROL_LOCATION_UPDATES : "android.permission.CONTROL_LOCATION_UPDATES",\r
    CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS : "android.permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS",\r
    CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS : "android.permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS",\r
    CREDENTIAL_MANAGER_SET_ORIGIN : "android.permission.CREDENTIAL_MANAGER_SET_ORIGIN",\r
    DELETE_CACHE_FILES : "android.permission.DELETE_CACHE_FILES",\r
    DELETE_PACKAGES : "android.permission.DELETE_PACKAGES",\r
    DELIVER_COMPANION_MESSAGES : "android.permission.DELIVER_COMPANION_MESSAGES",\r
    DETECT_SCREEN_CAPTURE : "android.permission.DETECT_SCREEN_CAPTURE",\r
    DIAGNOSTIC : "android.permission.DIAGNOSTIC",\r
    DISABLE_KEYGUARD : "android.permission.DISABLE_KEYGUARD",\r
    DUMP : "android.permission.DUMP",\r
    ENFORCE_UPDATE_OWNERSHIP : "android.permission.ENFORCE_UPDATE_OWNERSHIP",\r
    EXECUTE_APP_ACTION : "android.permission.EXECUTE_APP_ACTION",\r
    EXPAND_STATUS_BAR : "android.permission.EXPAND_STATUS_BAR",\r
    FACTORY_TEST : "android.permission.FACTORY_TEST",\r
    FOREGROUND_SERVICE : "android.permission.FOREGROUND_SERVICE",\r
    FOREGROUND_SERVICE_CAMERA : "android.permission.FOREGROUND_SERVICE_CAMERA",\r
    FOREGROUND_SERVICE_CONNECTED_DEVICE : "android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE",\r
    FOREGROUND_SERVICE_DATA_SYNC : "android.permission.FOREGROUND_SERVICE_DATA_SYNC",\r
    FOREGROUND_SERVICE_HEALTH : "android.permission.FOREGROUND_SERVICE_HEALTH",\r
    FOREGROUND_SERVICE_LOCATION : "android.permission.FOREGROUND_SERVICE_LOCATION",\r
    FOREGROUND_SERVICE_MEDIA_PLAYBACK : "android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK",\r
    FOREGROUND_SERVICE_MEDIA_PROJECTION : "android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION",\r
    FOREGROUND_SERVICE_MICROPHONE : "android.permission.FOREGROUND_SERVICE_MICROPHONE",\r
    FOREGROUND_SERVICE_PHONE_CALL : "android.permission.FOREGROUND_SERVICE_PHONE_CALL",\r
    FOREGROUND_SERVICE_REMOTE_MESSAGING : "android.permission.FOREGROUND_SERVICE_REMOTE_MESSAGING",\r
    FOREGROUND_SERVICE_SPECIAL_USE : "android.permission.FOREGROUND_SERVICE_SPECIAL_USE",\r
    FOREGROUND_SERVICE_SYSTEM_EXEMPTED : "android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED",\r
    GET_ACCOUNTS : "android.permission.GET_ACCOUNTS",\r
    GET_ACCOUNTS_PRIVILEGED : "android.permission.GET_ACCOUNTS_PRIVILEGED",\r
    GET_PACKAGE_SIZE : "android.permission.GET_PACKAGE_SIZE",\r
    /** @deprecated */\r
\r
    GET_TASKS : "android.permission.GET_TASKS",\r
    GLOBAL_SEARCH : "android.permission.GLOBAL_SEARCH",\r
    HIDE_OVERLAY_WINDOWS : "android.permission.HIDE_OVERLAY_WINDOWS",\r
    HIGH_SAMPLING_RATE_SENSORS : "android.permission.HIGH_SAMPLING_RATE_SENSORS",\r
    INSTALL_LOCATION_PROVIDER : "android.permission.INSTALL_LOCATION_PROVIDER",\r
    INSTALL_PACKAGES : "android.permission.INSTALL_PACKAGES",\r
    INSTALL_SHORTCUT : "com.android.launcher.permission.INSTALL_SHORTCUT",\r
    INSTANT_APP_FOREGROUND_SERVICE : "android.permission.INSTANT_APP_FOREGROUND_SERVICE",\r
    INTERACT_ACROSS_PROFILES : "android.permission.INTERACT_ACROSS_PROFILES",\r
    INTERNET : "android.permission.INTERNET",\r
    KILL_BACKGROUND_PROCESSES : "android.permission.KILL_BACKGROUND_PROCESSES",\r
    LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE : "android.permission.LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE",\r
    LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK : "android.permission.LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK",\r
    LOADER_USAGE_STATS : "android.permission.LOADER_USAGE_STATS",\r
    LOCATION_HARDWARE : "android.permission.LOCATION_HARDWARE",\r
    MANAGE_DEVICE_LOCK_STATE : "android.permission.MANAGE_DEVICE_LOCK_STATE",\r
    MANAGE_DEVICE_POLICY_ACCESSIBILITY : "android.permission.MANAGE_DEVICE_POLICY_ACCESSIBILITY",\r
    MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT : "android.permission.MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT",\r
    MANAGE_DEVICE_POLICY_ACROSS_USERS : "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS",\r
    MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL : "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL",\r
    MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL : "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL",\r
    MANAGE_DEVICE_POLICY_AIRPLANE_MODE : "android.permission.MANAGE_DEVICE_POLICY_AIRPLANE_MODE",\r
    MANAGE_DEVICE_POLICY_APPS_CONTROL : "android.permission.MANAGE_DEVICE_POLICY_APPS_CONTROL",\r
    MANAGE_DEVICE_POLICY_APP_RESTRICTIONS : "android.permission.MANAGE_DEVICE_POLICY_APP_RESTRICTIONS",\r
    MANAGE_DEVICE_POLICY_APP_USER_DATA : "android.permission.MANAGE_DEVICE_POLICY_APP_USER_DATA",\r
    MANAGE_DEVICE_POLICY_AUDIO_OUTPUT : "android.permission.MANAGE_DEVICE_POLICY_AUDIO_OUTPUT",\r
    MANAGE_DEVICE_POLICY_AUTOFILL : "android.permission.MANAGE_DEVICE_POLICY_AUTOFILL",\r
    MANAGE_DEVICE_POLICY_BACKUP_SERVICE : "android.permission.MANAGE_DEVICE_POLICY_BACKUP_SERVICE",\r
    MANAGE_DEVICE_POLICY_BLUETOOTH : "android.permission.MANAGE_DEVICE_POLICY_BLUETOOTH",\r
    MANAGE_DEVICE_POLICY_BUGREPORT : "android.permission.MANAGE_DEVICE_POLICY_BUGREPORT",\r
    MANAGE_DEVICE_POLICY_CALLS : "android.permission.MANAGE_DEVICE_POLICY_CALLS",\r
    MANAGE_DEVICE_POLICY_CAMERA : "android.permission.MANAGE_DEVICE_POLICY_CAMERA",\r
    MANAGE_DEVICE_POLICY_CERTIFICATES : "android.permission.MANAGE_DEVICE_POLICY_CERTIFICATES",\r
    MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE : "android.permission.MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE",\r
    MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES : "android.permission.MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES",\r
    MANAGE_DEVICE_POLICY_DEFAULT_SMS : "android.permission.MANAGE_DEVICE_POLICY_DEFAULT_SMS",\r
    MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS : "android.permission.MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS",\r
    MANAGE_DEVICE_POLICY_DISPLAY : "android.permission.MANAGE_DEVICE_POLICY_DISPLAY",\r
    MANAGE_DEVICE_POLICY_FACTORY_RESET : "android.permission.MANAGE_DEVICE_POLICY_FACTORY_RESET",\r
    MANAGE_DEVICE_POLICY_FUN : "android.permission.MANAGE_DEVICE_POLICY_FUN",\r
    MANAGE_DEVICE_POLICY_INPUT_METHODS : "android.permission.MANAGE_DEVICE_POLICY_INPUT_METHODS",\r
    MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES : "android.permission.MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES",\r
    MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES : "android.permission.MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES",\r
    MANAGE_DEVICE_POLICY_KEYGUARD : "android.permission.MANAGE_DEVICE_POLICY_KEYGUARD",\r
    MANAGE_DEVICE_POLICY_LOCALE : "android.permission.MANAGE_DEVICE_POLICY_LOCALE",\r
    MANAGE_DEVICE_POLICY_LOCATION : "android.permission.MANAGE_DEVICE_POLICY_LOCATION",\r
    MANAGE_DEVICE_POLICY_LOCK : "android.permission.MANAGE_DEVICE_POLICY_LOCK",\r
    MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS : "android.permission.MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS",\r
    MANAGE_DEVICE_POLICY_LOCK_TASK : "android.permission.MANAGE_DEVICE_POLICY_LOCK_TASK",\r
    MANAGE_DEVICE_POLICY_METERED_DATA : "android.permission.MANAGE_DEVICE_POLICY_METERED_DATA",\r
    MANAGE_DEVICE_POLICY_MICROPHONE : "android.permission.MANAGE_DEVICE_POLICY_MICROPHONE",\r
    MANAGE_DEVICE_POLICY_MOBILE_NETWORK : "android.permission.MANAGE_DEVICE_POLICY_MOBILE_NETWORK",\r
    MANAGE_DEVICE_POLICY_MODIFY_USERS : "android.permission.MANAGE_DEVICE_POLICY_MODIFY_USERS",\r
    MANAGE_DEVICE_POLICY_MTE : "android.permission.MANAGE_DEVICE_POLICY_MTE",\r
    MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION : "android.permission.MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION",\r
    MANAGE_DEVICE_POLICY_NETWORK_LOGGING : "android.permission.MANAGE_DEVICE_POLICY_NETWORK_LOGGING",\r
    MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY : "android.permission.MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY",\r
    MANAGE_DEVICE_POLICY_OVERRIDE_APN : "android.permission.MANAGE_DEVICE_POLICY_OVERRIDE_APN",\r
    MANAGE_DEVICE_POLICY_PACKAGE_STATE : "android.permission.MANAGE_DEVICE_POLICY_PACKAGE_STATE",\r
    MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA : "android.permission.MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA",\r
    MANAGE_DEVICE_POLICY_PRINTING : "android.permission.MANAGE_DEVICE_POLICY_PRINTING",\r
    MANAGE_DEVICE_POLICY_PRIVATE_DNS : "android.permission.MANAGE_DEVICE_POLICY_PRIVATE_DNS",\r
    MANAGE_DEVICE_POLICY_PROFILES : "android.permission.MANAGE_DEVICE_POLICY_PROFILES",\r
    MANAGE_DEVICE_POLICY_PROFILE_INTERACTION : "android.permission.MANAGE_DEVICE_POLICY_PROFILE_INTERACTION",\r
    MANAGE_DEVICE_POLICY_PROXY : "android.permission.MANAGE_DEVICE_POLICY_PROXY",\r
    MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES : "android.permission.MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES",\r
    MANAGE_DEVICE_POLICY_RESET_PASSWORD : "android.permission.MANAGE_DEVICE_POLICY_RESET_PASSWORD",\r
    MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS : "android.permission.MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS",\r
    MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS : "android.permission.MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS",\r
    MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND : "android.permission.MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND",\r
    MANAGE_DEVICE_POLICY_SAFE_BOOT : "android.permission.MANAGE_DEVICE_POLICY_SAFE_BOOT",\r
    MANAGE_DEVICE_POLICY_SCREEN_CAPTURE : "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CAPTURE",\r
    MANAGE_DEVICE_POLICY_SCREEN_CONTENT : "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CONTENT",\r
    MANAGE_DEVICE_POLICY_SECURITY_LOGGING : "android.permission.MANAGE_DEVICE_POLICY_SECURITY_LOGGING",\r
    MANAGE_DEVICE_POLICY_SETTINGS : "android.permission.MANAGE_DEVICE_POLICY_SETTINGS",\r
    MANAGE_DEVICE_POLICY_SMS : "android.permission.MANAGE_DEVICE_POLICY_SMS",\r
    MANAGE_DEVICE_POLICY_STATUS_BAR : "android.permission.MANAGE_DEVICE_POLICY_STATUS_BAR",\r
    MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE : "android.permission.MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE",\r
    MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS : "android.permission.MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS",\r
    MANAGE_DEVICE_POLICY_SYSTEM_APPS : "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_APPS",\r
    MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS : "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS",\r
    MANAGE_DEVICE_POLICY_SYSTEM_UPDATES : "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_UPDATES",\r
    MANAGE_DEVICE_POLICY_TIME : "android.permission.MANAGE_DEVICE_POLICY_TIME",\r
    MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING : "android.permission.MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING",\r
    MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER : "android.permission.MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER",\r
    MANAGE_DEVICE_POLICY_USERS : "android.permission.MANAGE_DEVICE_POLICY_USERS",\r
    MANAGE_DEVICE_POLICY_VPN : "android.permission.MANAGE_DEVICE_POLICY_VPN",\r
    MANAGE_DEVICE_POLICY_WALLPAPER : "android.permission.MANAGE_DEVICE_POLICY_WALLPAPER",\r
    MANAGE_DEVICE_POLICY_WIFI : "android.permission.MANAGE_DEVICE_POLICY_WIFI",\r
    MANAGE_DEVICE_POLICY_WINDOWS : "android.permission.MANAGE_DEVICE_POLICY_WINDOWS",\r
    MANAGE_DEVICE_POLICY_WIPE_DATA : "android.permission.MANAGE_DEVICE_POLICY_WIPE_DATA",\r
    MANAGE_DOCUMENTS : "android.permission.MANAGE_DOCUMENTS",\r
    MANAGE_EXTERNAL_STORAGE : "android.permission.MANAGE_EXTERNAL_STORAGE",\r
    MANAGE_MEDIA : "android.permission.MANAGE_MEDIA",\r
    MANAGE_ONGOING_CALLS : "android.permission.MANAGE_ONGOING_CALLS",\r
    MANAGE_OWN_CALLS : "android.permission.MANAGE_OWN_CALLS",\r
    MANAGE_WIFI_INTERFACES : "android.permission.MANAGE_WIFI_INTERFACES",\r
    MANAGE_WIFI_NETWORK_SELECTION : "android.permission.MANAGE_WIFI_NETWORK_SELECTION",\r
    MASTER_CLEAR : "android.permission.MASTER_CLEAR",\r
    MEDIA_CONTENT_CONTROL : "android.permission.MEDIA_CONTENT_CONTROL",\r
    MODIFY_AUDIO_SETTINGS : "android.permission.MODIFY_AUDIO_SETTINGS",\r
    MODIFY_PHONE_STATE : "android.permission.MODIFY_PHONE_STATE",\r
    MOUNT_FORMAT_FILESYSTEMS : "android.permission.MOUNT_FORMAT_FILESYSTEMS",\r
    MOUNT_UNMOUNT_FILESYSTEMS : "android.permission.MOUNT_UNMOUNT_FILESYSTEMS",\r
    NEARBY_WIFI_DEVICES : "android.permission.NEARBY_WIFI_DEVICES",\r
    NFC : "android.permission.NFC",\r
    NFC_PREFERRED_PAYMENT_INFO : "android.permission.NFC_PREFERRED_PAYMENT_INFO",\r
    NFC_TRANSACTION_EVENT : "android.permission.NFC_TRANSACTION_EVENT",\r
    OVERRIDE_WIFI_CONFIG : "android.permission.OVERRIDE_WIFI_CONFIG",\r
    PACKAGE_USAGE_STATS : "android.permission.PACKAGE_USAGE_STATS",\r
    /** @deprecated */\r
\r
    PERSISTENT_ACTIVITY : "android.permission.PERSISTENT_ACTIVITY",\r
    POST_NOTIFICATIONS : "android.permission.POST_NOTIFICATIONS",\r
    /** @deprecated */\r
\r
    PROCESS_OUTGOING_CALLS : "android.permission.PROCESS_OUTGOING_CALLS",\r
    PROVIDE_OWN_AUTOFILL_SUGGESTIONS : "android.permission.PROVIDE_OWN_AUTOFILL_SUGGESTIONS",\r
    PROVIDE_REMOTE_CREDENTIALS : "android.permission.PROVIDE_REMOTE_CREDENTIALS",\r
    QUERY_ALL_PACKAGES : "android.permission.QUERY_ALL_PACKAGES",\r
    READ_ASSISTANT_APP_SEARCH_DATA : "android.permission.READ_ASSISTANT_APP_SEARCH_DATA",\r
    READ_BASIC_PHONE_STATE : "android.permission.READ_BASIC_PHONE_STATE",\r
    READ_CALENDAR : "android.permission.READ_CALENDAR",\r
    READ_CALL_LOG : "android.permission.READ_CALL_LOG",\r
    READ_CONTACTS : "android.permission.READ_CONTACTS",\r
    READ_EXTERNAL_STORAGE : "android.permission.READ_EXTERNAL_STORAGE",\r
    READ_HOME_APP_SEARCH_DATA : "android.permission.READ_HOME_APP_SEARCH_DATA",\r
    /** @deprecated */\r
\r
    READ_INPUT_STATE : "android.permission.READ_INPUT_STATE",\r
    READ_LOGS : "android.permission.READ_LOGS",\r
    READ_MEDIA_AUDIO : "android.permission.READ_MEDIA_AUDIO",\r
    READ_MEDIA_IMAGES : "android.permission.READ_MEDIA_IMAGES",\r
    READ_MEDIA_VIDEO : "android.permission.READ_MEDIA_VIDEO",\r
    READ_MEDIA_VISUAL_USER_SELECTED : "android.permission.READ_MEDIA_VISUAL_USER_SELECTED",\r
    READ_NEARBY_STREAMING_POLICY : "android.permission.READ_NEARBY_STREAMING_POLICY",\r
    READ_PHONE_NUMBERS : "android.permission.READ_PHONE_NUMBERS",\r
    READ_PHONE_STATE : "android.permission.READ_PHONE_STATE",\r
    READ_PRECISE_PHONE_STATE : "android.permission.READ_PRECISE_PHONE_STATE",\r
    READ_SMS : "android.permission.READ_SMS",\r
    READ_SYNC_SETTINGS : "android.permission.READ_SYNC_SETTINGS",\r
    READ_SYNC_STATS : "android.permission.READ_SYNC_STATS",\r
    READ_VOICEMAIL : "com.android.voicemail.permission.READ_VOICEMAIL",\r
    REBOOT : "android.permission.REBOOT",\r
    RECEIVE_BOOT_COMPLETED : "android.permission.RECEIVE_BOOT_COMPLETED",\r
    RECEIVE_MMS : "android.permission.RECEIVE_MMS",\r
    RECEIVE_SMS : "android.permission.RECEIVE_SMS",\r
    RECEIVE_WAP_PUSH : "android.permission.RECEIVE_WAP_PUSH",\r
    RECORD_AUDIO : "android.permission.RECORD_AUDIO",\r
    REORDER_TASKS : "android.permission.REORDER_TASKS",\r
    REQUEST_COMPANION_PROFILE_APP_STREAMING : "android.permission.REQUEST_COMPANION_PROFILE_APP_STREAMING",\r
    REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION : "android.permission.REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION",\r
    REQUEST_COMPANION_PROFILE_COMPUTER : "android.permission.REQUEST_COMPANION_PROFILE_COMPUTER",\r
    REQUEST_COMPANION_PROFILE_GLASSES : "android.permission.REQUEST_COMPANION_PROFILE_GLASSES",\r
    REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING : "android.permission.REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING",\r
    REQUEST_COMPANION_PROFILE_WATCH : "android.permission.REQUEST_COMPANION_PROFILE_WATCH",\r
    REQUEST_COMPANION_RUN_IN_BACKGROUND : "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND",\r
    REQUEST_COMPANION_SELF_MANAGED : "android.permission.REQUEST_COMPANION_SELF_MANAGED",\r
    REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND : "android.permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND",\r
    REQUEST_COMPANION_USE_DATA_IN_BACKGROUND : "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND",\r
    REQUEST_DELETE_PACKAGES : "android.permission.REQUEST_DELETE_PACKAGES",\r
    REQUEST_IGNORE_BATTERY_OPTIMIZATIONS : "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",\r
    REQUEST_INSTALL_PACKAGES : "android.permission.REQUEST_INSTALL_PACKAGES",\r
    REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE : "android.permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE",\r
    REQUEST_PASSWORD_COMPLEXITY : "android.permission.REQUEST_PASSWORD_COMPLEXITY",\r
    /** @deprecated */\r
\r
    RESTART_PACKAGES : "android.permission.RESTART_PACKAGES",\r
    RUN_USER_INITIATED_JOBS : "android.permission.RUN_USER_INITIATED_JOBS",\r
    SCHEDULE_EXACT_ALARM : "android.permission.SCHEDULE_EXACT_ALARM",\r
    SEND_RESPOND_VIA_MESSAGE : "android.permission.SEND_RESPOND_VIA_MESSAGE",\r
    SEND_SMS : "android.permission.SEND_SMS",\r
    SET_ALARM : "com.android.alarm.permission.SET_ALARM",\r
    SET_ALWAYS_FINISH : "android.permission.SET_ALWAYS_FINISH",\r
    SET_ANIMATION_SCALE : "android.permission.SET_ANIMATION_SCALE",\r
    SET_DEBUG_APP : "android.permission.SET_DEBUG_APP",\r
    /** @deprecated */\r
\r
    SET_PREFERRED_APPLICATIONS : "android.permission.SET_PREFERRED_APPLICATIONS",\r
    SET_PROCESS_LIMIT : "android.permission.SET_PROCESS_LIMIT",\r
    SET_TIME : "android.permission.SET_TIME",\r
    SET_TIME_ZONE : "android.permission.SET_TIME_ZONE",\r
    SET_WALLPAPER : "android.permission.SET_WALLPAPER",\r
    SET_WALLPAPER_HINTS : "android.permission.SET_WALLPAPER_HINTS",\r
    SIGNAL_PERSISTENT_PROCESSES : "android.permission.SIGNAL_PERSISTENT_PROCESSES",\r
    /** @deprecated */\r
\r
    SMS_FINANCIAL_TRANSACTIONS : "android.permission.SMS_FINANCIAL_TRANSACTIONS",\r
    START_FOREGROUND_SERVICES_FROM_BACKGROUND : "android.permission.START_FOREGROUND_SERVICES_FROM_BACKGROUND",\r
    START_VIEW_APP_FEATURES : "android.permission.START_VIEW_APP_FEATURES",\r
    START_VIEW_PERMISSION_USAGE : "android.permission.START_VIEW_PERMISSION_USAGE",\r
    STATUS_BAR : "android.permission.STATUS_BAR",\r
    SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE : "android.permission.SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE",\r
    // 浮窗\r
    SYSTEM_ALERT_WINDOW : "android.permission.SYSTEM_ALERT_WINDOW",\r
    TRANSMIT_IR : "android.permission.TRANSMIT_IR",\r
    TURN_SCREEN_ON : "android.permission.TURN_SCREEN_ON",\r
    UNINSTALL_SHORTCUT : "com.android.launcher.permission.UNINSTALL_SHORTCUT",\r
    UPDATE_DEVICE_STATS : "android.permission.UPDATE_DEVICE_STATS",\r
    UPDATE_PACKAGES_WITHOUT_USER_ACTION : "android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION",\r
    USE_BIOMETRIC : "android.permission.USE_BIOMETRIC",\r
    USE_EXACT_ALARM : "android.permission.USE_EXACT_ALARM",\r
    /** @deprecated */\r
\r
    USE_FINGERPRINT : "android.permission.USE_FINGERPRINT",\r
    USE_FULL_SCREEN_INTENT : "android.permission.USE_FULL_SCREEN_INTENT",\r
    USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER : "android.permission.USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER",\r
    USE_SIP : "android.permission.USE_SIP",\r
    UWB_RANGING : "android.permission.UWB_RANGING",\r
    VIBRATE : "android.permission.VIBRATE",\r
    WAKE_LOCK : "android.permission.WAKE_LOCK",\r
    WRITE_APN_SETTINGS : "android.permission.WRITE_APN_SETTINGS",\r
    WRITE_CALENDAR : "android.permission.WRITE_CALENDAR",\r
    WRITE_CALL_LOG : "android.permission.WRITE_CALL_LOG",\r
    WRITE_CONTACTS : "android.permission.WRITE_CONTACTS",\r
    WRITE_EXTERNAL_STORAGE : "android.permission.WRITE_EXTERNAL_STORAGE",\r
    WRITE_GSERVICES : "android.permission.WRITE_GSERVICES",\r
    WRITE_SECURE_SETTINGS : "android.permission.WRITE_SECURE_SETTINGS",\r
    WRITE_SETTINGS : "android.permission.WRITE_SETTINGS",\r
    WRITE_SYNC_SETTINGS : "android.permission.WRITE_SYNC_SETTINGS",\r
    WRITE_VOICEMAIL : "com.android.voicemail.permission.WRITE_VOICEMAIL",\r
}\r
\r
let permissions = {};\r
let groups = {};\r
\r
function addP(obj, permission, description, successText, faildText){\r
    obj[permission] = {permission, description, successText, faildText}\r
}\r
function addPermission(permission, description, successText, faildText){\r
    addP(permissions, permission, description, successText, faildText);\r
}\r
function addPermissionGroup(permission, description, successText, faildText){\r
    addP(groups, permission, description, successText, faildText);\r
}\r
\r
function checkPermission(){\r
\r
}\r
return {Permission, PermissionGroup, addPermission, addPermissionGroup, checkPermission}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/permission/permission.java.js", e);
    }
    })()
    `, dependencies: [] }, "fanfanlo/javajs/v1/project/store": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({}){
            let projectMap={\r
\r
    },\r
    taskMap={\r
\r
    },\r
    actionMap={\r
        "fanfanlo/javajs/v1/project/components/action/app/openApp":{\r
            type:"fanfanlo/javajs/v1/project/components/action/app/openApp",\r
            attach:undefined\r
        }\r
    },\r
    triggerMap={\r
        "fanfanlo/javajs/v1/project/components/trigger/time/later":{\r
            type:"fanfanlo/javajs/v1/project/components/trigger/time/later",\r
            attach:undefined\r
        }\r
    }\r
function getFromMap(map, type, mapName){\r
    if(map[type] == undefined){\r
        throw new Error(mapName + " no type registered " + type )\r
    }\r
    return map[type];\r
}\r
\r
function getProject(type){\r
    return getFromMap(projectMap, type, "project")\r
}\r
function getTask(type){\r
    return getFromMap(taskMap, type, "task")\r
}\r
function getAction(type){\r
    return getFromMap(actionMap, type, "action")\r
}\r
function getTrigger(type){\r
    return getFromMap(triggerMap, type, "trigger")\r
}\r
function regProject(type, attach){\r
    regToMap(projectMap, type, attach, "project")\r
}\r
function regTask(type, attach){\r
    regToMap(taskMap, type, attach, "task")\r
}\r
function regAction(type, attach){\r
    regToMap(actionMap, type, attach, "action")\r
}\r
function regTrigger(type, attach){\r
    regToMap(triggerMap, type, attach, "trigger")\r
}\r
function regToMap(map, type, attach, mapName){\r
    // if(map[type] != undefined){\r
    //     throw new Error(mapName + \` type already registerd, type is \` + type)\r
    // }\r
    // if(!type || type.length == 0){\r
    //     throw new Error(mapName + \` type is undefined or empty \` + type);\r
    // }\r
    map[type] = {\r
        type, attach\r
    }\r
    projectStoreLogger.log(\`store register \${type}\`)\r
}\r
return {projectMap, taskMap, actionMap, triggerMap,\r
    regProject, regTask,  regAction, regTrigger,\r
    getProject, getTask, getAction, getTrigger\r
}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/store.java.js", e);
    }
    })()
    `, dependencies: [] }, "fanfanlo/javajs/v1/utils/createGetterSetter": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
function createGetterSetter(that, key, value, conf, dispatcher, setFn, getFn){\r
    Object.defineProperty(that, key, {\r
        get(){\r
            let v = getFn ? getFn(value, that, key) : value;\r
            if(conf & conf.setter){\r
                let s = conf.setter;\r
                if(s.logger){\r
                    s.logger(that, key).log(v);\r
                }\r
                if(s.stack){\r
                    try {\r
                        throw new Error(key);\r
                    }catch (e) {\r
                        console.log(v, e.stack)\r
                    }\r
                }\r
            }\r
            return v;\r
        },\r
        set(v){\r
            if(conf.readonly){\r
                return;\r
            }\r
            let old = value;\r
            value = setFn ? setFn(v, that, key) : v;\r
            if(conf & conf.getter){\r
                let s = conf.getter;\r
                if(s.logger){\r
                    s.logger(that, key).log(v)\r
                }\r
                if(s.stack){\r
                    try {\r
                        throw new Error(key);\r
                    }catch (e) {\r
                        let log = s.logger ? s.logger(that, key).log : console.log;\r
                        log(key, "setter old value is", old);\r
                        log(key, "setter now value is", value)\r
                        log(key, "setter", e.stack)\r
                    }\r
                }\r
            }\r
\r
            if(dispatcher){\r
                dispatcher.dispatchData(\`\${key}Changed\`,{old, now:value})\r
            }\r
        }\r
    })\r
}\r
\r
return {createGetterSetter}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/createGetterSetter.java.js", e);
    }
    })()
    `, dependencies: [] }, "fanfanlo/javajs/v1/utils/ExitHandler": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
function createExitHandler(exitOrCompleteDispatcher, dispatchers, logger){\r
    if(logger)logger = logger.createSub("exitHandler");\r
    let eventDispatchers = dispatchers || [];\r
    let cleanList = [];\r
    let domain = {};\r
    function onScriptCallExit(){\r
        if(logger) logger.log("onScriptCallExit1");\r
        onExit();\r
    }\r
    addScriptExitListener(onScriptCallExit);\r
    exitOrCompleteDispatcher.listenData(eventTypeExit, onExit);\r
    exitOrCompleteDispatcher.listenData(eventTypeComplete, onExit);\r
    function onExit(e){\r
        if(logger) logger.log("onExit1");\r
        clean();\r
    }\r
    function clean(){\r
        if(logger) logger.log("clean1");\r
        eventDispatchers.forEach(dispatcher=>{\r
            if(!dispatcher)return;\r
            dispatcher.removeDomain(domain);\r
        })\r
        cleanList.forEach(fn=>fn())\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
    function addExitFn(fn){\r
        let index = cleanList.indexOf(fn);\r
        if(index > -1)return;\r
        cleanList.push(fn);\r
    }\r
    function removeExitFn(fn){\r
        let index = cleanList.indexOf(fn);\r
        if(index == -1)return;\r
        cleanList.splice(index, 1);\r
    }\r
    function addEventDispatcher(dispatcher){\r
        eventDispatchers.push(dispatcher);\r
    }\r
\r
    return {domain, addEventDispatcher, addExitFn, removeExitFn, logger}\r
}\r
\r
return {createExitHandler}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/ExitHandler.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeComplete", " eventTypeExit"] }] }, "fanfanlo/javajs/v1/utils/IntervalCheck": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get clearTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].clearTimeout;
            }
            }){
            \r
\r
function createIntervalChecker(interval, fn, logger){\r
    if(logger)logger = logger.createSub("intervalChecker")\r
    let last = 0;\r
    let timeoutId = undefined;\r
    let exited = false;\r
    function checkCanRun(){\r
        let now = Date.now();\r
        let diff = now - last;\r
        let canRun = diff > interval;\r
        return canRun;\r
    }\r
    function exit(){\r
        exited = true;\r
        clearTimeoutId();\r
    }\r
    function callLater(){\r
        if(timeoutId != undefined)return;\r
        timeoutId = setTimeout(laterRun, interval);\r
        return timeoutId;\r
    }\r
    function clearTimeoutId(){\r
        let id = timeoutId;\r
        if(!id)return;\r
        timeoutId = undefined;\r
        clearTimeout(id);\r
    }\r
    function checkRun(){\r
        if(exited)return;\r
        let canRun = checkCanRun();\r
        if(!canRun){\r
            callLater();\r
            return false;\r
        }\r
        run();\r
        return true;\r
    }\r
    function setNow(){\r
        last = Date.now();\r
    }\r
    function laterRun(){\r
        timeoutId = undefined;\r
        run();\r
    }\r
    function run(){\r
        if(exited)return;\r
        setNow();\r
        if(fn != undefined)fn();\r
    }\r
    return {checkRun, exit, check: checkCanRun, setNow, clearTimeoutId};\r
}\r
\r
return {createIntervalChecker}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/IntervalCheck.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/utils/setTimeout", properties: ["setTimeout", " clearTimeout"] }] }, "fanfanlo/javajs/v1/utils/setTimeout": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
\r
function setTimeout(fn, delay){\r
    var conf = com.fanfanlo.lib.utils.coroutine.CoroutineUtils.Companion.later(delay, fn);\r
    return conf;\r
}\r
\r
function clearTimeout(conf){\r
    // console.log("clearTimeout1", 1)\r
    if(!conf)return;\r
    // console.log("clearTimeout1", 2)\r
    var job = conf.job || conf.deferred\r
    // console.log("clearTimeout1", 3)\r
    if(!job)return;\r
    // console.log("clearTimeout1", 4)\r
    if(job.isCancelled || job.isCompleted)return;\r
    // console.log("clearTimeout1", 5)\r
    job.cancel();\r
    console.log("clearTimeout1", 6)\r
}\r
\r
function setInterval(fn, delay, times){\r
    if(!times){\r
        times = 1000000000000\r
    }\r
    var conf = com.fanfanlo.lib.utils.coroutine.CoroutineUtils.Companion.repeat(times, delay, fn);\r
    return conf;\r
}\r
\r
function clearInterval(conf){\r
    clearTimeout(conf)\r
}\r
return {setTimeout, clearTimeout, setInterval, clearInterval}\r
;
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/setTimeout.java.js", e);
    }
    })()
    `, dependencies: [] }, "fanfanlo/javajs/v1/a11y/node/ICondition": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
let path = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx."\r
let Types = {\r
    get Id(){\r
        return \`\${path}Id\`;\r
    },\r
    get Text(){\r
        return \`\${path}Text\`;\r
    },\r
    get MatchText(){\r
        return \`\${path}MatchText\`;\r
    },\r
    get Desc(){\r
        return \`\${path}Desc\`;\r
    },\r
    get Clickable(){\r
        return \`\${path}Clickable\`;\r
    },\r
    get Type(){\r
        return \`\${path}Type\`;\r
    },\r
    get Ids(){\r
        return \`\${path}Ids\`;\r
    },\r
    get Descs(){\r
        return \`\${path}Descs\`;\r
    },\r
    get Texts(){\r
        return \`\${path}Texts\`;\r
    },\r
    get Root(){\r
        return \`\${path}SFRoot\`;\r
    },\r
\r
}\r
\r
let Action = {\r
    get Focus(){\r
        return \`\${path}Focus\`;\r
    },\r
    get ClearFocus(){\r
        return \`\${path}ClearFocus\`;\r
    },\r
    get Click(){\r
        return \`\${path}Click\`;\r
    },\r
    get TryClick(){\r
        return \`\${path}TryClick\`;\r
    },\r
    get LongClick(){\r
        return \`\${path}LongClick\`;\r
    },\r
    get GlobalClick(){\r
        return \`\${path}GlobalClick\`;\r
    },\r
    get SetText(){\r
        return \`\${path}SetText\`;\r
    },\r
}\r
\r
let Wait = {\r
    get Wait(){\r
        return \`\${path}SFWait\`;\r
    },\r
}\r
\r
let Data = {\r
    get Data(){\r
        return \`\${path}SFData\`;\r
    },\r
}\r
\r
return {Types, Action, Wait, Data}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/a11y/node/ICondition.java.js", e);
    }
    })()
    `, dependencies: [] }, "fanfanlo/javajs/v1/project/base/base": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get createEventDispatcher(){
                return javaLib["fanfanlo/javajs/v1/event/createEventDispatcher"].createEventDispatcher;
            }
            }){
            \r
\r
\r
\r
let eventTypeComplete = "complete";\r
let eventTypeFailed = "failed";\r
let eventTypeSuccess = "success";\r
let eventTypeError = "error"\r
let eventTypeTrigger = "trigger"\r
let eventTypeDataAttached = "dataAttached";\r
let classTypeAction = "action";\r
let classTypeTrigger = "trigger";\r
let classTypeTask = "task";\r
let classTypeProject = "project";\r
\r
let projectInitData;\r
function callProjectMemberListExit(list){\r
    for (let i = 0; i < list.length; i++) {\r
        try{\r
            list[i].exit();\r
        }catch(e){\r
            console.log("java error callProjectMemberListExit, fanfanlo/javajs/v1/project/base/base ", e.message);\r
        }\r
    }\r
}\r
\r
function createCommonBase(that, name, type){\r
    try{\r
        that = that || {};\r
        function setData(data){\r
            projectFlowLogger.log("setData1", data);\r
            this.data = data\r
        }\r
        function run(owner){\r
            this.owner = owner;\r
            if(!this.getIsRunnable()){\r
                return;\r
            }\r
            this.isRuning = true;\r
            this.onRun()\r
        }\r
        function onRun(){\r
            // override this function\r
        }\r
        function exit(){\r
            if(this.isExited)return;\r
            this.setIsExited(true);\r
            this.dispatcher.removeAllListeners();\r
            this.onExit();\r
        }\r
        function onExit(){\r
\r
        }\r
        function getIsRunning(){\r
            return this.isRunning;\r
        }\r
        function setIsRunning(isRunning){\r
            this.isRunning = isRunning;\r
        }\r
        function getIsTerminated(){\r
            // 自己被终止或者调用者被终止都会停止执行.\r
            return this.isTerminated || this.owner ? this.owner.getIsTerminated() : false;\r
        }\r
        function setIsTerminated(isTerminated){\r
            this.isTerminated = isTerminated;\r
        }\r
\r
        function getIsRunnable(){\r
            return !(this.isExited || this.getIsTerminated()) && this.owner ? this.owner.getIsRunnable() : true;\r
        }\r
\r
        function getIsExited(){\r
            return this.isExited;\r
        }\r
        function setIsExited(isExited){\r
            this.isExited = isExited;\r
            projectFlowLogger.log("setIsExited1", isExited, this.name || this.type);\r
        }\r
        that.name = name || type;\r
        that.type = type;\r
        that.owner = undefined;\r
        that.data = undefined;\r
\r
        that.isRunning = false;\r
        that.setIsRunning = setIsRunning.bind(that);\r
        that.getIsRunning = getIsRunning.bind(that);\r
\r
        that.isTerminated = false;\r
        that.setIsTerminated = setIsTerminated.bind(that);\r
        that.getIsTerminated = getIsTerminated.bind(that);\r
\r
        that.isExited = false;\r
        that.getIsExited = getIsExited.bind(that);\r
        that.setIsExited = setIsExited.bind(that);\r
\r
        that.dispatcher = createEventDispatcher();\r
\r
        that.setData = setData.bind(that);\r
        that.run = run.bind(that);\r
        that.onRun = onRun.bind(that);\r
        that.exit = exit.bind(that);\r
        that.onExit = onExit.bind(that);\r
        that.getIsRunnable = getIsRunnable.bind(that);\r
        // that.setAttachData = setAttachData.bind(that);\r
\r
        return that;\r
    }catch(e){\r
        console.log("java error createCommonBase, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
\r
function attachAbstractAct(that){\r
    try{\r
        let superRun = that.run;\r
        function dispatchSuccess(){\r
            this.isSuccess = true;\r
            projectEventLogger.log("dispatchSuccess1", this.name)\r
            this.dispatcher.dispatchData(eventTypeSuccess, {target:this});\r
            this.dispatchComplete();\r
        }\r
        function dispatchComplete(){\r
            projectEventLogger.log("dispatchComplete1", this.name)\r
            this.isRuning = false;\r
            this.dispatcher.dispatchData(eventTypeComplete, {target:this})\r
        }\r
        function dispatchFailed(data){\r
            this.isSuccess = false;\r
            projectFailedLogger.log("dispatchFailed1", this.name)\r
            this.dispatcher.dispatchData(eventTypeFailed, {target:this, data:data});\r
            this.dispatchComplete()\r
        }\r
        function run(parent){\r
            this.isSuccess = false;\r
            superRun(parent);\r
        }\r
        that.isSuccess = false;\r
        that.dispatchSuccess = dispatchSuccess.bind(that);\r
        that.dispatchComplete = dispatchComplete.bind(that);\r
        that.dispatchFailed = dispatchFailed.bind(that);\r
        that.run = run.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error attachAbstractAct, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function attachAbstractParent(that){\r
    try{\r
        that.children = [];\r
        let oldOnExit = that.onExit;\r
        function onExit(){\r
            callProjectMemberListExit(this.children);\r
            oldOnExit();\r
        }\r
        that.onExit = onExit.bind(that);\r
    }catch(e){\r
        console.log("java error attachAbstractParent, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function attachAction(that){\r
    try{\r
        let superRun = that.run;\r
        let superOnExit = that.onExit;\r
        that.triggers = [];\r
        function run(parent){\r
            this.runTriggers();\r
            superRun(parent);\r
        }\r
        function onTrigger(event){\r
            projectEventLogger.log("onTrigger1")\r
            this.doAction(event ? event.data : undefined);\r
        }\r
        function doAction(data){\r
            // override this method\r
        }\r
        function runTriggers(){\r
            for (let i = 0; i < this.triggers.length; i++) {\r
                let trigger = this.triggers[i];\r
                trigger.dispatcher.listenDomainData(eventTypeTrigger, this, this.onTrigger);\r
                trigger.run(this);\r
            }\r
        }\r
        function onExit(){\r
            callProjectMemberListExit(this.triggers);\r
            superOnExit();\r
        }\r
        that.run = run.bind(that);\r
        that.onTrigger = onTrigger.bind(that);\r
        that.doAction = doAction.bind(that);\r
        that.runTriggers = runTriggers.bind(that);\r
        that.onExit = onExit.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error attachAction, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function attachConcurrentGroup(that){\r
    try{\r
        attachAbstractAct(that);\r
        attachAbstractParent(that);\r
        that.completeConditions = [\r
            // 数组内的是children的index，index标记的是必须完成的。\r
            // [0]\r
            // [1,3]\r
        ];\r
        function checkIsSuccess(){\r
            if(this.completeConditions.length == 0){\r
                projectFlowLogger.log("checkIsSuccess1 completeConditions.length is zero");\r
                return true;\r
            }\r
            for (let i = 0; i < this.completeConditions.length; i++) {\r
                let list = this.completeConditions[i];\r
                let hasFailed = false;\r
                for (let j = 0; j < list.length; j++) {\r
                    let action = this.children[list[j]];\r
                    if(action.isSuccess == false){\r
                        projectFailedLogger.log("checkIsSuccess1 hasFailed");\r
                        hasFailed = true;\r
                        break;\r
                    }\r
                }\r
                if(!hasFailed){\r
                    projectFlowLogger.log("checkIsSuccess1 !hasFailed")\r
                    return true;\r
                }\r
            }\r
            return false;\r
        }\r
\r
        function checkSuccess(){\r
            // 已经完成过了就不需要再次派发事件了\r
            if(this.isSuccess)return;\r
            if(!this.checkIsSuccess())return;\r
            this.dispatchSuccess();\r
        }\r
\r
        function checkComplete(){\r
            // 每当child完成后就检测一下是否本组已完成，如果条件检测已完成则视为已完成，不在管打酱油的是否还在执行。\r
            // 如果有酱油动作在其具备条件时想完成需要覆写这些方法重构检测条件。\r
            if(this.isSuccess)return;\r
            for (let i = 0; i < this.children.length; i++) {\r
                let action = this.children[i];\r
                if(!action.isExited)return;\r
            }\r
            this.dispatchComplete();\r
        }\r
        function onChildSuccess(event){\r
            projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
            this.checkSuccess();\r
        }\r
        function onChildFailed(event){\r
            projectFailedLogger.log("onChildFailed1 child failed", this.name, event.target.name);\r
            this.checkSuccess();\r
        }\r
        function onChildComplete(event){\r
            projectEventLogger.log("onChildComplete1 child complete", this.name, event.target.name);\r
            this.checkComplete();\r
        }\r
\r
        function onRun(){\r
            for(let i = 0; i < this.children.length; i ++){\r
                let child = this.children[i];\r
                child.dispatcher.listenData(eventTypeComplete, this.onChildComplete)\r
                child.dispatcher.listenData(eventTypeFailed, this.onChildFailed)\r
                child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess)\r
                child.run(this);\r
            }\r
        }\r
        let oldOnExit = that.onExit;\r
        function onExit(){\r
            callProjectMemberListExit(this.children);\r
            oldOnExit();\r
        }\r
        that.checkIsSuccess = checkIsSuccess.bind(that);\r
        that.onChildSuccess = onChildSuccess.bind(that);\r
        that.onChildFailed = onChildFailed.bind(that);\r
        that.onChildComplete = onChildComplete.bind(that);\r
        that.checkSuccess = checkSuccess.bind(that);\r
        that.checkComplete = checkComplete.bind(that);\r
        that.onRun = onRun.bind(that);\r
    }catch(e){\r
        console.log("java error attachConcurrentGroup, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function attachQueueGroup(that){\r
    try{\r
        attachAbstractAct(that);\r
        attachAbstractParent(that);\r
        that.childIndex = 0;\r
        that.children = [];\r
        function onChildSuccess(event){\r
            projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
            this.checkDoNextOrComplete();\r
        }\r
\r
        function checkDoNextOrComplete(){\r
            projectEventLogger.log("checkDoNextOrComplete1 child check do next or complete", this.name)\r
            if(this.childIndex < this.children.length - 1){\r
                this.childIndex ++\r
                this.checkRunIndex()\r
            }else{\r
                this.dispatchSuccess();\r
            }\r
        }\r
        function onChildFailed(event){\r
            projectFailedLogger.log("onChildFailed child failed", this.name, event.target.name)\r
            // if data == children[n]\r
            // 判断是否是必须执行完毕的，如果是必须执行的则提示人工干预或者放弃继续执行\r
            // 如果是非必须执行的则忽略跳过\r
            this.dispatchFailed({target:this, data:event.data})\r
        }\r
        function onChildComplete(event){\r
            projectEventLogger.log("child complete", this.name, event.target.name)\r
            this.dispatchComplete();\r
        }\r
        let oldOnRun = that.onRun;\r
        function onRun(){\r
            projectFlowLogger.log("onRun", this.name)\r
            this.checkRunIndex();\r
            oldOnRun();\r
        }\r
\r
        function checkRunIndex(){\r
            let child = this.children[this.childIndex];\r
            if(child == undefined){\r
                projectFlowLogger.log("checkRunIndex is  undefined", this.childIndex)\r
                this.dispatchFailed({err:new Error("check run index child is undefined"), index:this.childIndex});\r
                return\r
            }\r
            child.dispatcher.listenData(eventTypeComplete, this.onChildComplete)\r
            child.dispatcher.listenData(eventTypeFailed, this.onChildFailed)\r
            child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess)\r
            child.run(this);\r
        }\r
\r
        that.onChildSuccess = onChildSuccess.bind(that);\r
        that.checkDoNextOrComplete = checkDoNextOrComplete.bind(that);\r
        that.onChildFailed = onChildFailed.bind(that);\r
        that.onChildComplete = onChildComplete.bind(that);\r
        that.onRun = onRun.bind(that);\r
        that.checkRunIndex = checkRunIndex.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error attachQueueGroup, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function createTrigger(that, type, name){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        function dispatchTrigger(data){\r
            if(!this.getIsRunnable()){\r
                return;\r
            }\r
            this.dispatcher.dispatchData(eventTypeTrigger, {target:this, data:data});\r
        }\r
        that.dispatchTrigger = dispatchTrigger.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createTrigger, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function createAction(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachAbstractAct(that)\r
        attachAction(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createAction, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function createConcurrentActionGroup(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachConcurrentGroup(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createConcurrentActionGroup, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function createTask(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachQueueGroup(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createTask, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function createProject(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachQueueGroup(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createProject, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildTrigger(initData){\r
    try{\r
        let trigger = createTrigger({}, initData.name, initData.type);\r
        trigger.setData(initData.data);\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getTrigger(initData.type).attach(trigger);\r
        }\r
        return trigger;\r
    }catch(e){\r
        console.log("java error buildTrigger, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function buildActionList(children){\r
    try{\r
        let list = [];\r
        for (let i = 0; i < children.length; i++) {\r
            let initData = children[i];\r
            let action = buildAction(initData);\r
            list.push(action);\r
        }\r
        return list;\r
    }catch(e){\r
        console.log("java error buildActionList, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildAction(initData){\r
    try{\r
        let action = {};\r
        if(initData.children){\r
            action = createConcurrentActionGroup(action, initData.name, initData.type);\r
            action.children = buildActionList(initData.children);\r
        }else{\r
            action = createAction(action, initData.n, initData.type);\r
        }\r
        action.setData(initData.data);\r
        if(initData.triggers){\r
            action.triggers = action.triggers || [];\r
            for (let i = 0; i < initData.triggers.length; i++) {\r
                let trigger = buildTrigger(initData.triggers[i])\r
                action.triggers.push(trigger);\r
            }\r
        }\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getAction(initData.type).attach(action);\r
        }\r
        return action;\r
    }catch(e){\r
        console.log("java error buildAction, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildTask(initData){\r
    try{\r
        let task = createTask({}, initData.name, initData.type);\r
        task.children = buildActionList(initData.children);\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getTask(initData.type).attach(task);\r
        }\r
        task.setData(initData.data);\r
        return task;\r
    }catch(e){\r
        console.log("java error buildTask, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildProject(initData){\r
    try{\r
        let project = createProject({}, initData.name, initData.type);\r
        project.children = [];\r
        for (let i = 0; i < initData.children.length; i++) {\r
            let taskInitData = initData.children[i];\r
            let task = buildTask(taskInitData);\r
            project.children.push(task);\r
        }\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getProject(initData.type).attach(project);\r
        }\r
        project.setData(initData.data);\r
        return project;\r
    }catch(e){\r
        console.log("java error buildProject2, fanfanlo/javajs/v1/project/base/base ", e.message, e.stack);\r
    }\r
}\r
function projectBuilder(initData){\r
    try{\r
        projectInitData = initData.projectInitData;\r
        let project = buildProject(projectInitData);\r
        project.run();\r
    }catch(e){\r
        console.log("java error projectBuilder3, fanfanlo/javajs/v1/project/base/base ", e.message, e.stack);\r
    }\r
}\r
\r
return {projectBuilder}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/base/base.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/event/createEventDispatcher", properties: ["createEventDispatcher"] }] }, "fanfanlo/javajs/v1/project/base/projectMembers": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get createEventDispatcher(){
                return javaLib["fanfanlo/javajs/v1/event/createEventDispatcher"].createEventDispatcher;
            }
            ,
            get createGetterSetter(){
                return javaLib["fanfanlo/javajs/v1/utils/createGetterSetter"].createGetterSetter;
            }
            }){
            \r
\r
let eventTypeComplete = "eventTypeComplete";\r
let eventTypeFailed = "eventTypeFailed";\r
let eventTypeSuccess = "eventTypeSuccess";\r
let eventTypeError = "eventTypeError"\r
let eventTypeExit = "eventTypeExit";\r
let eventTypeTriggerCondistionsOn = "eventTypeTriggerCondistionsOn"\r
let eventTypeTriggerCondistionsOff = "eventTypeTriggerCondistionsOff"\r
let baseType = {\r
    trigger:"trigger",\r
    action:"action",\r
    task:"task",\r
    project:"project"\r
};\r
let eventTypeDataAttached = "dataAttached";\r
let classTypeAction = "action";\r
let classTypeTrigger = "trigger";\r
let classTypeTask = "task";\r
let classTypeProject = "project";\r
\r
let baseInternalIndex = 0\r
let projectInitData;\r
\r
function callProjectMemberListExit(list){\r
    for (let i = 0; i < list.length; i++) {\r
        try{\r
            list[i].exit();\r
        }catch(e){\r
            console.log("java error callProjectMemberListExit, fanfanlo/javajs/v1/project/base/base ", e.message);\r
        }\r
    }\r
}\r
function createCommonBase(that, name, type, baseType){\r
\r
    baseInternalIndex++\r
    that = that || {};\r
    let dispatcher = createEventDispatcher();\r
    let loggerName = name || baseType || type;\r
    let logger = console.createSubLogger(\`\${loggerName}:\${baseInternalIndex}\`);\r
    // let logger = com.fanfanlo.lib.utils.Logger.Companion.create(\`\${loggerName}:\${baseInternalIndex}\`);\r
    logger.log(\`test111.name=\${name},baseType=\${baseType}\`);\r
    createGetterSetter(that, "logger", logger, {readonly:true});\r
    // createGetterSetter(that, "log", log, {readonly:true});\r
    createGetterSetter(that, "dispatcher", dispatcher, {readonly:true}, undefined, undefined, undefined)\r
    createGetterSetter(that, "baseType", baseType, {readonly:true}, that.dispatcher);\r
    createGetterSetter(that, "isRunnable", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        let bl = isScriptRunnable && (that.project? that.project.isRunnable : true) &&\r
            (that.owner ? that.owner.isRunnable : true) && (!that.isExited && !that.isTerminated)\r
        // logger.log("settgett isScriptRunnable", isScriptRunnable, \`has project=\${that.project != undefined}\`, \`project.isRunnable=\${that.project?that.project.isRunnable:undefined}\`,\r
        //     \`has owner=\${that.owner != undefined}\`, \`owner.isRunnable=\${that.owner?that.owner.isRunnable : undefined}\`, \`isExited=\${that.isExited}\`, \`isTerminated=\${that.isTerminated}\`, \`name is \${that.name}\`, \`type is \${that.type}\`, \`bl=\${bl}\`)\r
        return bl;\r
    });\r
    createGetterSetter(that, "baseMsg", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        return \`base msg|baseInternalIndex is \${that.baseInternalIndex}, baseType is \${that.baseType}, name is \${that.name}, type is \${that.type}\`\r
    });\r
    createGetterSetter(that, "data", undefined, {}, dispatcher)\r
    createGetterSetter(that, "buildData", undefined, {}, dispatcher)\r
    createGetterSetter(that, "owner", undefined, {}, dispatcher)\r
    createGetterSetter(that, "isRunning", false, {}, dispatcher)\r
    createGetterSetter(that, "isExited", false, {}, dispatcher)\r
    createGetterSetter(that, "isTerminated", false, {}, dispatcher)\r
    createGetterSetter(that, "name", name || type, {}, dispatcher)\r
    createGetterSetter(that, "type", type, {}, dispatcher)\r
    createGetterSetter(that, "baseInternalIndex", baseInternalIndex, {readonly:true}, dispatcher)\r
    createGetterSetter(that, "project", undefined, {}, dispatcher)\r
    createGetterSetter(that, "task", undefined, {}, dispatcher);\r
\r
    function run(owner){\r
        this.owner = owner;\r
        if(!this.isRunnable){\r
            return;\r
        }\r
        this.isRunning = true;\r
        this.onRun()\r
    }\r
    function onRun(){}\r
    function exit(){\r
        this.logger.log("exit", this.type)\r
        if(this.isExited)return;\r
        this.isExited = true;\r
        this.dispatcher.dispatch(eventTypeExit)\r
        this.dispatcher.removeAllListeners();\r
        this.onExit();\r
    }\r
    function onExit(){}\r
    that.run = run.bind(that);\r
    that.onRun = onRun.bind(that);\r
    that.exit = exit.bind(that);\r
    that.onExit = onExit.bind(that);\r
    return that;\r
}\r
\r
function createTriggerListener(that){\r
    createGetterSetter(that, "conditionOnTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "conditionOffTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "isConditionOk", false, {}, that.dispatcher)\r
    function onConditionsOn(event){\r
        this.isConditionOk = true;\r
    }\r
    function onConditionsOff(event){\r
        this.isConditionOk = false;\r
    }\r
    that.onConditionsOn = onConditionsOn.bind(that);\r
    that.onConditionsOff = onConditionsOff.bind(that);\r
}\r
function createTrigger(that, name, type){\r
\r
    that = createCommonBase(that, name, type, baseType.t);\r
    createGetterSetter(that, "action", undefined, {}, that.dispatcher);\r
    createTriggerListener(that)\r
    function dispatchConditionsOn(data){\r
        if(!this.isRunnable)return;\r
        this.dispatcher.dispatchData(eventTypeTriggerCondistionsOn, {target:this, data:data});\r
    }\r
    function dispatchConditionsOff(data){\r
        if(!this.isRunnable)return;\r
        this.dispatcher.dispatchData(eventTypeTriggerCondistionsOff, {target:this, data:data});\r
    }\r
    that.dispatchConditionsOn = dispatchConditionsOn.bind(that);\r
    that.dispatchConditionsOff = dispatchConditionsOff.bind(that);\r
    return that;\r
}\r
\r
function attachAbstractAct(that){\r
    let dispatcher = that.dispatcher;\r
    createGetterSetter(that, "isSuccess", false, {}, dispatcher);\r
    createGetterSetter(that, "isFailed", false, {}, dispatcher);\r
    createGetterSetter(that, "isCompleted", false, {}, dispatcher);\r
    function dispatchSuccess(){\r
        projectEventLogger.log("dispatch success1", this.baseMsg);\r
        if(this.isSuccess)return;\r
        this.isSuccess = true;\r
        this.isFailed = false;\r
        projectEventLogger.log("dispatchSuccess1", this.baseMsg)\r
        this.dispatcher.dispatchData(eventTypeSuccess, {target:this});\r
        this.dispatchComplete();\r
    }\r
    function dispatchComplete(){\r
        projectEventLogger.log("dispatch complete1", this.baseMsg);\r
        if(!this.isRunning)return;\r
        projectEventLogger.log("dispatchComplete1", this.baseMsg);\r
        this.isRunning = false;\r
        this.isCompleted = true;\r
        this.dispatcher.dispatchData(eventTypeComplete, {target:this})\r
    }\r
    function dispatchFailed(data){\r
        if(!this.isFailed)return;\r
        this.isSuccess = false;\r
        this.isFailed = true;\r
        projectFailedLogger.log("dispatchFailed1", this.baseMsg)\r
        this.dispatcher.dispatchData(eventTypeFailed, {target:this, data:data});\r
        this.dispatchComplete()\r
    }\r
    let superRun = that.run;\r
    function run(owner){\r
        this.isSuccess = false;\r
        this.isFailed = false;\r
        superRun(owner);\r
    }\r
    that.dispatchSuccess = dispatchSuccess.bind(that);\r
    that.dispatchComplete = dispatchComplete.bind(that);\r
    that.dispatchFailed = dispatchFailed.bind(that);\r
    that.run = run.bind(that);\r
    return that;\r
}\r
function attachAbstractParent(that){\r
    createGetterSetter(that, "children", [], {}, that.dispatcher)\r
    let superOnExit = that.onExit;\r
    function onExit(){\r
        callProjectMemberListExit(this.children);\r
        superOnExit();\r
    }\r
    that.onExit = onExit.bind(that);\r
}\r
\r
\r
function createBaseAction(that, name, type){\r
    createCommonBase(that, name, type, baseType.action);\r
    return that;\r
}\r
function attachAction(that){\r
\r
    let superRun = that.run;\r
    let superOnExit = that.onExit;\r
    createGetterSetter(that, "conditionOnTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "conditionOffTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "onTriggerData", undefined, {}, that.dispatcher)\r
\r
    function run(parent){\r
        this.runTriggers();\r
        superRun(parent);\r
    }\r
    function checkDoAction(data){\r
        if(!this.isRunnable)return;\r
        this.onTriggerData = data;\r
        this.doAction();\r
    }\r
    function doAction(data){}\r
    function runTriggers(){\r
        if(!that.conditionOnTriggers || that.conditionOnTriggers.length == 0){\r
            that.checkDoAction(undefined)\r
        }else{\r
            that.conditionOnTriggers.forEach((trigger)=>{\r
                this.runTrigger(trigger, eventTypeTriggerCondistionsOn, this.onConditionsOn)\r
            })\r
        }\r
        if(that.conditionOffTriggers){\r
            that.conditionOffTriggers.forEach((trigger)=>{\r
                this.runTrigger(trigger, eventTypeTriggerCondistionsOff, this.onConditionsOff)\r
            });\r
        }\r
    }\r
    function runTrigger(trigger, eventType, cb){\r
        trigger.dispatcher.listenDomainData(eventType, this, cb);\r
        setChildProjectTaskAction(this, trigger);\r
        trigger.run(this);\r
    }\r
    function onConditionsOn(event){\r
        // console.log("onConditionsOnonConditionsOn event is", Object.keys(event))\r
        this.checkDoAction(event && event.data ? event.data : event)\r
    }\r
    function onConditionsOff(event){\r
    }\r
    function onExit(){\r
        this.exitTriggers();\r
        superOnExit();\r
    }\r
    function exitTriggers(){\r
        callProjectMemberListExit(this.conditionOnTriggers);\r
        callProjectMemberListExit(this.conditionOffTriggers);\r
    }\r
    that.run = run.bind(that);\r
    that.checkDoAction = checkDoAction.bind(that);\r
    that.doAction = doAction.bind(that);\r
    that.runTriggers = runTriggers.bind(that);\r
    that.runTrigger = runTrigger.bind(that);\r
    that.onExit = onExit.bind(that);\r
    that.exitTriggers = exitTriggers.bind(that);\r
    that.onConditionsOn = onConditionsOn.bind(that);\r
    that.onConditionsOff = onConditionsOff.bind(that);\r
    return that;\r
}\r
function attachConcurrentGroup(that){\r
\r
    attachAbstractAct(that);\r
    attachAbstractParent(that);\r
    createGetterSetter(that, "completeConditions", [], {}, that.dispatcher)\r
    // that.completeConditions = [\r
    //     // 数组内的是children的index，index标记的是必须完成的。\r
    //     // [0]\r
    //     // [1,3]\r
    // ];\r
    function checkIsSuccess(){\r
        if(this.completeConditions.length == 0){\r
            projectFlowLogger.log("checkIsSuccess1 completeConditions.length is zero");\r
            return true;\r
        }\r
        for (let i = 0; i < this.completeConditions.length; i++) {\r
            let list = this.completeConditions[i];\r
            let hasFailed = false;\r
            for (let j = 0; j < list.length; j++) {\r
                let action = this.children[list[j]];\r
                if(action.isSuccess == false){\r
                    projectFailedLogger.log("checkIsSuccess1 hasFailed");\r
                    hasFailed = true;\r
                    break;\r
                }\r
            }\r
            if(!hasFailed){\r
                projectFlowLogger.log("checkIsSuccess1 !hasFailed")\r
                return true;\r
            }\r
        }\r
        return false;\r
    }\r
\r
    function checkSuccess(){\r
        // 已经完成过了就不需要再次派发事件了\r
        if(this.isSuccess)return;\r
        if(!this.checkIsSuccess())return;\r
        this.dispatchSuccess();\r
    }\r
\r
    function checkComplete(){\r
        // 每当child完成后就检测一下是否本组已完成，如果条件检测已完成则视为已完成，不在管打酱油的是否还在执行。\r
        // 如果有酱油动作在其具备条件时想完成需要覆写这些方法重构检测条件。\r
        if(this.isSuccess)return;\r
        for (let i = 0; i < this.children.length; i++) {\r
            let action = this.children[i];\r
            if(!action.isExited)return;\r
        }\r
        this.dispatchComplete();\r
    }\r
    function onChildSuccess(event){\r
        projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
        this.checkSuccess();\r
    }\r
    function onChildFailed(event){\r
        projectFailedLogger.log("onChildFailed1 child failed", this.name, event.target.name);\r
        this.checkSuccess();\r
    }\r
    function onChildComplete(event){\r
        projectEventLogger.log("onChildComplete1 child complete", this.name, event.target.name);\r
        this.checkComplete();\r
    }\r
\r
    function onRun(){\r
        for(let i = 0; i < this.children.length; i ++){\r
            let child = this.children[i];\r
            child.dispatcher.listenData(eventTypeComplete, this.onChildComplete)\r
            child.dispatcher.listenData(eventTypeFailed, this.onChildFailed)\r
            child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess)\r
            setChildProjectTaskAction(this, child);\r
            child.run(this);\r
        }\r
    }\r
    let superOnExit = that.onExit;\r
    function onExit(){\r
        callProjectMemberListExit(this.children);\r
        superOnExit();\r
    }\r
    that.checkIsSuccess = checkIsSuccess.bind(that);\r
    that.onChildSuccess = onChildSuccess.bind(that);\r
    that.onChildFailed = onChildFailed.bind(that);\r
    that.onChildComplete = onChildComplete.bind(that);\r
    that.checkSuccess = checkSuccess.bind(that);\r
    that.checkComplete = checkComplete.bind(that);\r
    that.onRun = onRun.bind(that);\r
}\r
\r
function attachQueueGroup(that){\r
\r
    attachAbstractAct(that);\r
    attachAbstractParent(that);\r
    createGetterSetter(that, "childIndex", 0, {}, that.dispatcher);\r
    function onChildSuccess(event){\r
        projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
        this.checkDoNextOrComplete();\r
    }\r
\r
    function checkDoNextOrComplete(){\r
        if(!this.isRunnable)return;\r
        projectEventLogger.log("attachQueueGroup heckDoNextOrComplete1 child check do next or complete", this.name, this.childIndex , this.children.length - 1)\r
        if(this.childIndex < this.children.length - 1){\r
            this.childIndex ++\r
            this.checkRunIndex()\r
        }else{\r
            this.dispatchSuccess();\r
        }\r
    }\r
    function onChildFailed(event){\r
        projectFailedLogger.log("onChildFailed child failed", this.name, event.target.name)\r
        // if data == children[n]\r
        // 判断是否是必须执行完毕的，如果是必须执行的则提示人工干预或者放弃继续执行\r
        // 如果是非必须执行的则忽略跳过\r
        this.dispatchFailed({target:this, data:event.data})\r
    }\r
    function onChildComplete(event){\r
        projectEventLogger.log("child complete", this.name, event.target.name)\r
        // this.dispatchComplete();\r
    }\r
    let superOnRun = that.onRun;\r
    function onRun(){\r
        projectFlowLogger.log("onRun", this.name)\r
        this.checkRunIndex();\r
        superOnRun();\r
    }\r
\r
    function checkRunIndex(){\r
        let child = this.children[this.childIndex];\r
        if(child == undefined){\r
            projectFlowLogger.log("checkRunIndex is  undefined", this.childIndex)\r
            this.dispatchFailed({err:new Error("check run index child is undefined"), index:this.childIndex});\r
            return\r
        }\r
        child.dispatcher.listenData(eventTypeComplete, this.onChildComplete);\r
        child.dispatcher.listenData(eventTypeFailed, this.onChildFailed);\r
        child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess);\r
        setChildProjectTaskAction(this, child);\r
        child.run(this);\r
    }\r
\r
    that.onChildSuccess = onChildSuccess.bind(that);\r
    that.checkDoNextOrComplete = checkDoNextOrComplete.bind(that);\r
    that.onChildFailed = onChildFailed.bind(that);\r
    that.onChildComplete = onChildComplete.bind(that);\r
    that.onRun = onRun.bind(that);\r
    that.checkRunIndex = checkRunIndex.bind(that);\r
    return that;\r
}\r
function setChildProjectTaskAction(that, child){\r
    let project = that.baseType == baseType.project ? that : that.project;\r
    child.project = project;\r
    if(child.baseType == baseType.action || child.baseType == baseType.trigger){\r
        // that有可能是task，也可能是actionGroup\r
        child.task = that.baseType == baseType.task ? that : that.task;\r
    }\r
    if(child.baseType == baseType.trigger){\r
        // 如果that是trigger则返回that的action\r
        child.action = that.baseType == baseType.action ? that : that.action\r
    }\r
    if(!that.baseType){\r
        throw new Error(\`setChildProjectTaskAction that no base type \${that.type}, \${that.name}\`)\r
    }\r
}\r
function createSingleAction(that, name, type){\r
\r
    that = createBaseAction(that, name, type);\r
    attachAbstractAct(that)\r
    attachAction(that);\r
    return that;\r
}\r
function createConcurrentActionGroup(that, name, type){\r
\r
    that = createBaseAction(that, name, type);\r
    attachConcurrentGroup(that);\r
    return that;\r
}\r
function createTask(that, name, type){\r
\r
    that = createCommonBase(that, name, type, baseType.task);\r
    attachQueueGroup(that);\r
    return that;\r
}\r
function createProject(that, name, type){\r
    that = createCommonBase(that, name, type, baseType.project);\r
    attachQueueGroup(that);\r
    function terminate(){\r
        console.log("project call terminate")\r
        that.isTerminated = true;\r
        that.exit();\r
    }\r
    that.terminate = terminate.bind(that);\r
    return that;\r
}\r
function buildTrigger(initData, action){\r
    let trigger = createTrigger({}, initData.name, initData.type);\r
    trigger.data = initData.data;\r
    trigger.action = action;\r
    trigger.task = action.task;\r
    trigger.project = action.project;\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getTrigger(initData.type).attach(trigger);\r
    }\r
    return trigger;\r
}\r
\r
function buildActionList(children, task){\r
    let list = [];\r
    for (let i = 0; i < children.length; i++) {\r
        let initData = children[i];\r
        let action = buildAction(initData, task);\r
        list.push(action);\r
    }\r
    return list;\r
}\r
\r
function buildTriggerList(dest, source, action){\r
    dest = dest || [];\r
    if(!source)return  dest;\r
    source.forEach((data)=>{\r
        dest.push(buildTrigger(data, action))\r
    });\r
    return dest;\r
}\r
function buildAction(initData, task){\r
    let action = {};\r
    if(initData.children){\r
        action = createConcurrentActionGroup(action, initData.name, initData.type);\r
        action.children = buildActionList(initData.children);\r
    }else{\r
        action = createSingleAction(action, initData.name, initData.type);\r
    }\r
    action.task = task;\r
    action.project = task.project;\r
    action.data = initData.data;\r
    action.conditionOnTriggers = buildTriggerList(action.conditionOnTriggers, initData.conditionOnTriggers, action);\r
    action.conditionOffTriggers = buildTriggerList(action.conditionOffTriggers, initData.conditionOffTriggers, action);\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getAction(initData.type).attach(action);\r
    }\r
    return action;\r
}\r
function buildTask(initData){\r
    let task = createTask({}, initData.name, initData.type);\r
    task.children = buildActionList(initData.children, task);\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getTask(initData.type).attach(task);\r
    }\r
    task.data = initData.data;\r
    return task;\r
}\r
function buildProject(initData){\r
    let project = createProject({}, initData.name, initData.type);\r
    for (let i = 0; i < initData.children.length; i++) {\r
        let taskInitData = initData.children[i];\r
        let task = buildTask(taskInitData);\r
        task.project = project;\r
        project.children.push(task);\r
    }\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getProject(initData.type).attach(project);\r
    }\r
    project.data = initData.data;\r
    return project;\r
}\r
function projectBuilder(initData){\r
    try{\r
        projectInitData = initData.projectInitData;\r
        let project = buildProject(projectInitData);\r
        function onScriptCallExit(){\r
            // project.terminate();\r
            if(project.isTerminated || project.isExited || project.isSuccess || project.isFailed)return;\r
            project.isTerminated = true;\r
            project.exit();\r
            project.dispatchComplete();\r
        }\r
        addScriptExitListener(onScriptCallExit);\r
        project.dispatcher.listenData(eventTypeComplete,(event)=>{\r
            console.log("ppppppppppproject complete");\r
            project.exit();\r
            console.log("ppppppppppproject completed")\r
        })\r
        project.dispatcher.listenData(eventTypeFailed,(event)=>{\r
            console.log("ppppppppppproject eventTypeFailed");\r
            project.exit();\r
            console.log("ppppppppppproject eventTypeFailed2")\r
        })\r
        project.dispatcher.listenData(eventTypeExit,(event)=>{\r
            jsCallComplete();\r
        });\r
        project.run();\r
    }catch(e){\r
        console.log("java error projectBuilder3, fanfanlo/javajs/v1/project/base/projectMembers ", e.message, e.stack, e.stack);\r
    }\r
}\r
\r
return {projectBuilder, eventTypeTriggerCondistionsOn, eventTypeTriggerCondistionsOff,\r
eventTypeDataAttached, eventTypeComplete, eventTypeError,\r
    eventTypeExit, eventTypeFailed, eventTypeSuccess,\r
    baseType}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/base/projectMembers.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/event/createEventDispatcher", properties: ["createEventDispatcher"] }, { path: "fanfanlo/javajs/v1/utils/createGetterSetter", properties: ["createGetterSetter"] }] }, "fanfanlo/javajs/v1/project/base/projectRunner": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get createEventDispatcher(){
                return javaLib["fanfanlo/javajs/v1/event/createEventDispatcher"].createEventDispatcher;
            }
            ,
            get createGetterSetter(){
                return javaLib["fanfanlo/javajs/v1/utils/createGetterSetter"].createGetterSetter;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
let eventTypeComplete = "eventTypeComplete";\r
let eventTypeFailed = "eventTypeFailed";\r
let eventTypeSuccess = "eventTypeSuccess";\r
let eventTypeError = "eventTypeError"\r
let eventTypeExit = "eventTypeExit";\r
let eventTypeTriggerCondistionsOn = "eventTypeTriggerCondistionsOn"\r
let eventTypeTriggerCondistionsOff = "eventTypeTriggerCondistionsOff"\r
let baseType = {\r
    trigger:"trigger",\r
    action:"action",\r
    task:"task",\r
    project:"project"\r
};\r
function callProjectMemberListExit(list){\r
    for (let i = 0; i < list.length; i++) {\r
        try{\r
            list[i].exit();\r
        }catch(e){\r
            console.log("java error callProjectMemberListExit, fanfanlo/javajs/v1/project/base/base ", e.message);\r
        }\r
    }\r
}\r
function createCommonBase(that, name, type, baseType){\r
\r
    baseInternalIndex++\r
    that = that || {};\r
    let dispatcher = createEventDispatcher();\r
    let loggerName = name || baseType || type;\r
    let logger = console.createSubLogger(\`\${loggerName}:\${baseInternalIndex}\`);\r
    // let logger = com.fanfanlo.lib.utils.Logger.Companion.create(\`\${loggerName}:\${baseInternalIndex}\`);\r
    logger.log(\`test111.name=\${name},baseType=\${baseType}\`);\r
    createGetterSetter(that, "logger", logger, {readonly:true});\r
    // createGetterSetter(that, "log", log, {readonly:true});\r
    createGetterSetter(that, "dispatcher", dispatcher, {readonly:true}, undefined, undefined, undefined)\r
    createGetterSetter(that, "baseType", baseType, {readonly:true}, that.dispatcher);\r
    createGetterSetter(that, "isRunnable", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        let bl = isScriptRunnable && (that.project? that.project.isRunnable : true) &&\r
            (that.owner ? that.owner.isRunnable : true) && (!that.isExited && !that.isTerminated)\r
        // logger.log("settgett isScriptRunnable", isScriptRunnable, \`has project=\${that.project != undefined}\`, \`project.isRunnable=\${that.project?that.project.isRunnable:undefined}\`,\r
        //     \`has owner=\${that.owner != undefined}\`, \`owner.isRunnable=\${that.owner?that.owner.isRunnable : undefined}\`, \`isExited=\${that.isExited}\`, \`isTerminated=\${that.isTerminated}\`, \`name is \${that.name}\`, \`type is \${that.type}\`, \`bl=\${bl}\`)\r
        return bl;\r
    });\r
    createGetterSetter(that, "baseMsg", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        return \`base msg|baseInternalIndex is \${that.baseInternalIndex}, baseType is \${that.baseType}, name is \${that.name}, type is \${that.type}\`\r
    });\r
    createGetterSetter(that, "data", undefined, {}, dispatcher)\r
    createGetterSetter(that, "buildData", undefined, {}, dispatcher)\r
    createGetterSetter(that, "owner", undefined, {}, dispatcher)\r
    createGetterSetter(that, "isRunning", false, {}, dispatcher)\r
    createGetterSetter(that, "isExited", false, {}, dispatcher)\r
    createGetterSetter(that, "isTerminated", false, {}, dispatcher)\r
    createGetterSetter(that, "name", name || type, {}, dispatcher)\r
    createGetterSetter(that, "type", type, {}, dispatcher)\r
    createGetterSetter(that, "baseInternalIndex", baseInternalIndex, {readonly:true}, dispatcher)\r
    createGetterSetter(that, "project", undefined, {}, dispatcher)\r
    createGetterSetter(that, "task", undefined, {}, dispatcher);\r
\r
    function run(owner){\r
        this.owner = owner;\r
        if(!this.isRunnable){\r
            return;\r
        }\r
        this.isRunning = true;\r
        this.onRun()\r
    }\r
    function onRun(){}\r
    function exit(){\r
        this.logger.log("exit", this.type)\r
        if(this.isExited)return;\r
        this.isExited = true;\r
        this.dispatcher.dispatch(eventTypeExit)\r
        this.dispatcher.removeAllListeners();\r
        this.onExit();\r
    }\r
    function onExit(){}\r
    that.run = run.bind(that);\r
    that.onRun = onRun.bind(that);\r
    that.exit = exit.bind(that);\r
    that.onExit = onExit.bind(that);\r
    return that;\r
}\r
\r
function runProject(project){\r
    let triggerActionGroup = project.triggerActionGroup;\r
    let triggerActionGroupList = triggerActionGroup.list;\r
    for (let i = 0; i < triggerActionGroupList.length; i++) {\r
        runTriggerActionGroup(triggerActionGroupList[i]);\r
    }\r
    function runTriggerActionGroup(triggerActionGroup){\r
        let triggerGroup = triggerActionGroup.triggerGroup;\r
        let triggerGroupList = triggerGroup.list;\r
        let isSequential = triggerGroup.isSequential;\r
        isSequential ? triggerGroupRunSequential() : triggerGroupRunConcurrent();\r
        function triggerGroupRunConcurrent(){\r
            for (let j = 0; j < triggerGroupList.length; j++) {\r
                let trigger = triggerGroupList[j];\r
                trigger.run();\r
            }\r
        }\r
        let triggerGroupRunIndex = 0;\r
        function triggerGroupRunSequential(){\r
            let trigger = triggerGroupList[triggerGroupRunIndex];\r
            trigger.listen(onTriggerCompleted);\r
            trigger.run();\r
            function onTriggerCompleted(){\r
                if(triggerGroupRunIndex == triggerGroupList.length - 1){\r
                    checkTriggerGroupComplete();\r
                }else{\r
                    triggerGroupRunIndex ++;\r
                    triggerGroupRunSequential();\r
                }\r
            }\r
        }\r
        function checkTriggerGroupComplete() {\r
            isSequential ? checkTriggerGroupCompleteSequential() : checkTriggerGroupCompleteConcurrent();\r
        }\r
        function checkTriggerGroupCompleteSequential() {\r
\r
        }\r
        function checkTriggerGroupCompleteConcurrent() {\r
\r
        }\r
        function runActionGroup(){\r
\r
        }\r
    }\r
}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/base/projectRunner.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/event/createEventDispatcher", properties: ["createEventDispatcher"] }, { path: "fanfanlo/javajs/v1/utils/createGetterSetter", properties: ["createGetterSetter"] }, { path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeExit"] }] }, "fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get runNodeOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator"].runNodeOperator;
            }
            }){
            \r
\r
/**\r
 *\r
 * @param operateConf\r
 * @param logger\r
 * @param that that is project's action, has properties and methods [dispatchSuccess, isRunnable] will be used.\r
 * @returns {{createOperator: createOperator, runOperator: runOperator}}\r
 */\r
function createA11yOperator(operateConf, l, that){\r
    let logger = l.createSubLogger(\`createA11yOperatorFn\`);\r
    logger.log("hiiiiiiiiiiiiiii")\r
    let nodesChecker;\r
\r
    function createA11yOperator(operateConf){\r
        // nodesChecker = createNodeChecker(operateConf, logger, that)\r
        nodesChecker = runNodeOperator(operateConf, logger, that)\r
    }\r
    function createNodeOperator(operateConf){\r
        // nodesChecker =  createNodeChecker(operateConf, logger, that);\r
        nodesChecker =  runNodeOperator(operateConf, logger, that);\r
    }\r
    function createOperator(operateConf){\r
        switch (operateConf.type){\r
            case "node":\r
                createNodeOperator(operateConf);\r
                break;\r
            case "a11y":\r
                createA11yOperator(operateConf);\r
                break;\r
            default:\r
                throw new Error("no operate conf")\r
        }\r
    }\r
    function runOperator(){\r
        createOperator(operateConf);\r
        try {\r
            nodesChecker.doAction();\r
        }catch (e) {\r
            logger.log(\`runOperatoreeeeeeeeror\`, e.message, e.stack)\r
        }\r
    }\r
    return {createOperator, runOperator}\r
}\r
\r
return {createA11yOperator}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator", properties: ["runNodeOperator"] }] }, "fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get createExitHandler(){
                return javaLib["fanfanlo/javajs/v1/utils/ExitHandler"].createExitHandler;
            }
            ,
            get createCheckNodesOnShow(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createCheckNodesOnShow;
            }
            ,
            get createNodeAction(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createNodeAction;
            }
            ,
            get globalActionBack(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].globalActionBack;
            }
            ,
            get hideIme(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideIme;
            }
            ,
            get keyboardIsOpen(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].keyboardIsOpen;
            }
            ,
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get clearTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].clearTimeout;
            }
            ,
            get createIntervalChecker(){
                return javaLib["fanfanlo/javajs/v1/utils/IntervalCheck"].createIntervalChecker;
            }
            ,
            get createA11yOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator"].createA11yOperator;
            }
            }){
            \r
\r
\r
let runningConf = undefined;\r
function runNodeOperator(operateConf, logger, that){\r
    runningConf = operateConf;\r
    let shortMsg = \`operateConf short info \${operateConf.name ? operateConf.name : JSON.stringify(operateConf)}\`\r
    let backToPnAn = !!operateConf.backToPackageActivity\r
    logger.log("iiiiiiiiiimmmmmmmmmmmmmm logger")\r
    let l  = logger.createSubLogger(\`runNodeOperatorFn22\`);\r
    l.log("iiiiiiiiiiimmmmmmmmmmm l")\r
    logger = l\r
    logger.log(\`operateConfIs1\`, shortMsg, operateConf);\r
    let exitHandler = createExitHandler(that.dispatcher, [a11yModel], logger);\r
    exitHandler.addExitFn(onExit);\r
    let domain = exitHandler.domain;\r
    let isComplete = false;\r
    function setComplete(){\r
        if(isComplete)return;\r
        let l = logger.createSubLogger(\`setCompleteFn-\${operateConf.name}\`);\r
        l.log(\`complete11 operate conf\`, operateConf);\r
        isComplete = true;\r
        onExit();\r
    }\r
    function onExit() {\r
        let l = logger.createSubLogger(\`onExitFn-\${operateConf.name}\`);\r
        l.log(\`onExit1245\`, operateConf);\r
        removeListener();\r
    }\r
    function removeListener(){\r
        tryRemoveContentChangeListener();\r
        tryRemovePackageActivityChangeListener()\r
        tryClearLastCheckNodesChanceTimer();\r
    }\r
    let contentChangeListenData = undefined;\r
    function tryRemoveContentChangeListener() {\r
        let data = contentChangeListenData;\r
        contentChangeListenData = undefined;\r
        if (data == undefined) return;\r
        a11yModel.removeListener(data);\r
    }\r
    let packageActivityChangeData = undefined;\r
    function tryRemovePackageActivityChangeListener(){\r
        let data = packageActivityChangeData;\r
        packageActivityChangeData = undefined;\r
        if(data == undefined)return;\r
        a11yModel.removeListener(data);\r
    }\r
\r
    let nodesCheckCompleted = false;\r
    function canRun(){\r
        return !isComplete && !nodesCheckCompleted && runningConf == operateConf;\r
    }\r
    function listenPnAn(){\r
        let l = logger.createSubLogger(\`listenPnAnFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
        if (packageActivityChangeData == undefined) {\r
            packageActivityChangeData = a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenPackageActivityChanged, domain, onPackageOrActivityChange);\r
        }\r
    }\r
    function onPackageOrActivityChange(e){\r
        checkPnAnLater();\r
    }\r
    let intervalCheckPnAn = undefined;\r
    function checkPnAnLater(){\r
        if(intervalCheckPnAn == undefined){\r
            intervalCheckPnAn = createIntervalChecker(operateConf.globalBackActionConf.interval, checkPnAn, logger);\r
        }\r
        intervalCheckPnAn.checkRun();\r
    }\r
    let laterCheckNodesCheckTimeOver;\r
    let prevActivity = undefined\r
    function listenPnAnAndCheckLater(){\r
        listenPnAn();\r
        checkPnAnLater();\r
    }\r
    function checkPnAn(){\r
        let l = logger.createSubLogger(\`checkPnAnFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
\r
        let pn = a11yModel.lastFullScreenPackage;\r
        if (pn != operateConf.packageName) {\r
            l.log(\`error error a11yModel.lastFullScreenPackage != operateConf.packageName, a11yModel.lastFullScreenPackage: \${a11yModel.lastFullScreenPackage}, operateConf.packageName:\${operateConf.packageName}\`);\r
            // 如果package不同就停止侦听node更新\r
            tryRemoveContentChangeListener();\r
            dispatchFailed({reason:\`package not match\`, keyboardIsOpen:keyboardIsOpen()})\r
            return;\r
        }\r
        let nowActivity = a11yModel.lastFullScreenActivity;\r
        let isActivityMatch = operateConf.activities.some(an => an == nowActivity);\r
        l.log("isMathActivity22", isActivityMatch, nowActivity, keyboardIsOpen())\r
\r
        if(!isActivityMatch){\r
            tryRemoveContentChangeListener();\r
            if(!operateConf.globalBackActionConf){\r
                dispatchFailed({nowActivity,activities:operateConf.activities, reason:"activity not match"});\r
                return;\r
            }\r
            let interval = operateConf.globalBackActionConf.interval;\r
            if(keyboardIsOpen()){\r
                interval = 10;\r
            }else if(prevActivity != nowActivity){\r
                interval = 10;\r
            }\r
            prevActivity = nowActivity\r
            let bl = globalActionBack(interval);\r
            l.log(\`global2 action back \${bl}\`);\r
            listenPnAnAndCheckLater();\r
            return;\r
        }\r
        if(operateConf.nodeConditions){\r
            tryRemovePackageActivityChangeListener();\r
            checkNodesLater();\r
        }else{\r
            dispatchSuccess({from:"checkPnAn"});\r
        }\r
    }\r
    function runLaterCheckNodesCheckTimeOver(){\r
        if(laterCheckNodesCheckTimeOver != undefined)return;\r
        laterCheckNodesCheckTimeOver = setTimeout(onLaterCheckNodesCheckTimeOver, operateConf.nodesLastCheckTime)\r
    }\r
    function tryClearLastCheckNodesChanceTimer(){\r
        let id = laterCheckNodesCheckTimeOver;\r
        laterCheckNodesCheckTimeOver = undefined;\r
        clearTimeout(id);\r
    }\r
    function onLaterCheckNodesCheckTimeOver(){\r
        dispatchFailed({reason:\`nodesLastCheckTime time over \${operateConf.nodesLastCheckTime}\`})\r
    }\r
    let intervalCheckLaterCheckNodes = undefined;\r
    function checkNodesLater(){\r
        let l = logger.createSubLogger(\`checkNodesLaterFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
        // runLaterCheckNodes();\r
        if(intervalCheckLaterCheckNodes == undefined){\r
            intervalCheckLaterCheckNodes = createIntervalChecker(operateConf.nodesCheckInterval, checkNodes, l);\r
        }\r
        l.log(\`run2 intervalCheckLaterCheckNodes.checkRun\`);\r
        intervalCheckLaterCheckNodes.checkRun();\r
    }\r
    let nodesChecker = undefined;\r
    function checkNodes(){\r
        let l = logger.createSubLogger(\`checkNodesFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
        runLaterCheckNodesCheckTimeOver();\r
        if(nodesChecker == undefined){\r
            nodesChecker = createCheckNodesOnShow(operateConf, onCheckNodesBack, l)\r
        }\r
        l.log(\`nodesChecker.check22\`);\r
        nodesChecker.check();\r
    }\r
    function onCheckNodesBack(nodes, isOk, err, matchedCheckList){\r
        let l = logger.createSubLogger(\`onCheckNodesBack2-\${operateConf.name}\`);\r
        l.log(\`1onCheckNodesBack isRunnable=\${that.isRunnable}, canrun=\${canRun()}\`)\r
        if (!that.isRunnable || !canRun()) return;\r
        if(isOk){\r
            setComplete();\r
        }\r
        l.log("1params", nodes ? nodes.size() : "no nodes result", isOk, err)\r
        l.log('1matchedCheckList', matchedCheckList)\r
        l.log('1conditions', operateConf.conditions)\r
        l.log('1Nodeconditions', operateConf.nodeConditions)\r
        if (isOk) {\r
            nodesCheckCompleted = true;\r
            removeListener();\r
            checkNodesAction(nodes, matchedCheckList);\r
        }else{\r
            l.log(\`bbbbbbbbbbbbbbbackonCheckNodesBack isRunnable \${that.isRunnable}, canrun \${canRun()}\`)\r
            onNodesNotMatch();\r
        }\r
    }\r
\r
    function onNodesNotMatch(){\r
        if(isInPnAn()){\r
            listenContentChange();\r
        }else if(keyboardIsOpen()){\r
            // hideIme();\r
            globalActionBack(operateConf.globalBackActionConf.interval)\r
            // 这里预期是在pn an时打开了ime，关闭ime后必然是pn an，所以下一步是执行checkNodesLater，但是这里似乎做一个很小的延时就好了.\r
            setTimeout(checkNodesLater, 100 * 10);\r
        }else{\r
            checkPnAn();\r
        }\r
    }\r
    function isInPnAn(){\r
        let pn = a11yModel.lastFullScreenPackage;\r
        if(pn != operateConf.packageName)return false;\r
        let activity = a11yModel.lastFullScreenActivity;\r
        let bl = operateConf.activities.some(an => an == activity);\r
        return bl;\r
    }\r
    function listenContentChange() {\r
        if (!that.isRunnable || !canRun()) return;\r
        if(contentChangeListenData != undefined)return;\r
        tryRemoveContentChangeListener();\r
        let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r
        let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r
        contentChangeListenData = a11yModel.listenDomainData(type, domain, onContentChange)\r
        checkNodes();\r
    }\r
\r
    function onContentChange(e) {\r
        if (!that.isRunnable || !canRun()) return;\r
        checkNodes();\r
    }\r
\r
    function checkNodesAction(nodes, matchedCheckList){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesAction-\${operateConf.name}\`);\r
        l.log(\`2node size \${nodes.size()}\`)\r
        l.log(\`2matchedCheckList \${matchedCheckList}\`)\r
        if((!nodes || nodes.size() == 0) && (!matchedCheckList || matchedCheckList.length == 0)){\r
            dispatchFailed({reason:\`no nodes=\${(!nodes || nodes.size() == 0)}, no matchedCheckList=\${(!matchedCheckList || matchedCheckList.length == 0)}\`})\r
            return;\r
        }\r
        let nodeConditions = operateConf.nodeConditions;\r
        for (let i = 0; i < matchedCheckList.length; i++) {\r
            let matchConf = matchedCheckList[i];\r
            l.log("doaction1", matchConf)\r
            if(!matchConf.doAction)continue;\r
            let nodeConf = nodeConditions[matchedCheckList[i].index];\r
            l.log(\`1nodeConf is\`, nodeConf);\r
            let node = nodes[matchedCheckList[i].index];\r
            let actionConf = nodeConf.action;\r
            l.log(\`1actionConf1\`, actionConf)\r
            let nodeAction = createNodeAction(actionConf);\r
            let beforeActionDelay = 1;\r
            let afterActionDelay = 1;\r
            if(nodeAction.type == "SetText"){\r
                beforeActionDelay = actionConf.beforeSetTextDelay || 100 * 1;\r
                afterActionDelay = actionConf.afterSetTextDelay || 100 * 2;\r
                l.log("beforeSetTextDelay333", beforeActionDelay, afterActionDelay)\r
            }\r
            setTimeout(()=>{\r
                l.log(\`nodeAction1\`, nodeAction.type)\r
                l.log(\`nodeAction2\`, nodeAction)\r
                let bl = a11yModel.doAction(node, nodeAction);\r
                l.log("1bbbbbbbbbbbbbbbbbbbbbb2234", bl, nodeAction.type, "bltypeis",typeof bl);\r
                if(bl){\r
                    setTimeout(()=>{\r
                        l.log("bbbbbbbbbbbllllllll")\r
                        checkNodesActionNext(actionConf)\r
                    }, afterActionDelay)\r
                    return;\r
                }else{\r
                    // 去掉当前这match的node和checklist的index数据后再次调用该方法\r
                }\r
            }, beforeActionDelay)\r
            return\r
        }\r
        l.log("dddddddddddddispach success")\r
        // success without actionConf.doAction\r
        dispatchSuccess({checkNodesAction:"no action need to do"});\r
    }\r
    function checkNodesActionNext(actionConf){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesActionNext-\${operateConf.name}\`);\r
        l.log('actionConf1is', actionConf)\r
        if(!actionConf.nextOperateConf){\r
            l.log('dispatchSuccess23')\r
            dispatchSuccess({checkNodesActionNext:"all operator complete"});\r
        }else{\r
            l.log('5createa11yoperator5')\r
            createA11yOperator(actionConf.nextOperateConf, l, that).runOperator();\r
        }\r
    }\r
    function dispatchSuccess(data){\r
        let l = logger.createSubLogger(\`dispatchSuccessFn-\${operateConf.name}\`);\r
        if(!canRun())return;\r
        setComplete();\r
        l.log(\`success2 data\`, data);\r
        if(operateConf.dispatchSuccess){\r
            l.log('nodeOperator.dispatchSuccess2')\r
            that.dispatchSuccess();\r
        }\r
    }\r
    function dispatchFailed(data){\r
        let l = logger.createSubLogger(\`dispatchFailedFn-\${operateConf.name}\`);\r
        if(!canRun())return;\r
        setComplete();\r
        l.log(\`failed reason\`, data);\r
        if(operateConf.dispatchFailed){\r
            l.log('nodeOperator.dispatchFailed2')\r
            that.dispatchFailed(data);\r
        }\r
    }\r
    function checkOvertime() {\r
        let l = logger.createSubLogger(\`checkOvertime-\${operateConf.name}\`);\r
        let overtime = operateConf.overtime;\r
        l.log(\`1overtime1 is \${overtime}\`);\r
        if (overtime == undefined || overtime <= 0) return;\r
        setTimeout(() => {\r
            l.log(\`isRunnable is \${that.isRunnable}, canrun is \${canRun()}\`);\r
            if (that.isRunnable && !isComplete) {\r
                l.log(\`call project terminate msg=\${operateConf.terminateMsg}\`, operateConf);\r
                that.project.terminate();\r
            }\r
        }, overtime)\r
    }\r
    function doAction(){\r
        checkOvertime();\r
        checkPnAn();\r
    }\r
    return {doAction}\r
}\r
\r
return {runNodeOperator}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/utils/ExitHandler", properties: ["createExitHandler"] }, { path: "fanfanlo/javajs/v1/a11y/a11yUtils", properties: ["createCheckNodesOnShow", `\r
    createNodeAction`, `\r
    globalActionBack`, " hideIme", " keyboardIsOpen"] }, { path: "fanfanlo/javajs/v1/utils/setTimeout", properties: ["setTimeout", " clearTimeout"] }, { path: "fanfanlo/javajs/v1/utils/IntervalCheck", properties: ["createIntervalChecker"] }, { path: "fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator", properties: ["createA11yOperator"] }] }, "fanfanlo/javajs/v1/project/components/action/a11y/NodesChecker": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get createCheckNodesOnShow(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createCheckNodesOnShow;
            }
            ,
            get createNodeAction(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createNodeAction;
            }
            ,
            get globalActionBack(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].globalActionBack;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            ,
            get keyboardIsOpen(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].keyboardIsOpen;
            }
            ,
            get createIntervalChecker(){
                return javaLib["fanfanlo/javajs/v1/utils/IntervalCheck"].createIntervalChecker;
            }
            ,
            get createExitHandler(){
                return javaLib["fanfanlo/javajs/v1/utils/ExitHandler"].createExitHandler;
            }
            ,
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get clearTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].clearTimeout;
            }
            ,
            get createA11yOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator"].createA11yOperator;
            }
            }){
            \r
\r
let runningOerateConf = undefined;\r
//@permission android.permission.BIND_ACCESSIBILITY_SERVICE\r
function createNodeChecker(operateConf, logger, that) {\r
    runningOerateConf = operateConf;\r
    logger = logger.createSub("createNodeChecker");\r
    logger.log('createNodeCheckeroperateConf', operateConf)\r
    let exitHandler = createExitHandler(that.dispatcher, [a11yModel], logger);\r
    exitHandler.addExitFn(onExit);\r
    let domain = exitHandler.domain;\r
    let isComplete = false;\r
    function setComplete(){\r
        isComplete = true;\r
        onExit();\r
    }\r
    let nodeDelayChecker = createIntervalChecker(operateConf.nodesCheckInterval, nodesCheckerCheck, logger)\r
    let checkFnChecker = createIntervalChecker(operateConf.nodesCheckInterval, check, logger);\r
\r
    let isCheckNodesLastChance = false;\r
    let checkNodesLastSetTimeoutID = undefined;\r
\r
    function resetCheckNodesLastChance(){\r
        isCheckNodesLastChance = false;\r
        clearCheckNodesLastSetTimeout();\r
    }\r
    function clearCheckNodesLastSetTimeout(){\r
        let id = checkNodesLastSetTimeoutID;\r
        checkNodesLastSetTimeoutID = undefined;\r
        if(!id)return;\r
        clearTimeout(id)\r
    }\r
    function runCheckNodesLastSetTimeout(){\r
        if(checkNodesLastSetTimeoutID != undefined)return;\r
        let delay = operateConf.nodesLastCheckTime == undefined || operateConf.nodesLastCheckTime <=0 ? 100 * 15 : operateConf.nodesLastCheckTime\r
        checkNodesLastSetTimeoutID = setTimeout(runNodesLastCheck, delay)\r
    }\r
    function runNodesLastCheck(){\r
        let l = logger.createSubLogger(\`runNodesLastCheck\`);\r
        l.log("1lastNodesCheck")\r
        clearCheckNodesLastSetTimeout();\r
        isCheckNodesLastChance = true;\r
        nodesCheckerCheck();\r
\r
    }\r
    let checkDoActionCount = 0;\r
    let nodesCheckCompleted = false;\r
    function canRun(){\r
        return !nodesCheckCompleted &&  !isComplete && operateConf == runningOerateConf;\r
    }\r
    function onExit() {\r
        let l = logger.createSubLogger(\`onExit\`);\r
        l.log('eeeeeeeeeeeeexit NodesChecker', operateConf);\r
        checkFnChecker.exit();\r
        nodeDelayChecker.exit();\r
        removeListener();\r
    }\r
    function removeListener(){\r
        tryRemoveContentChangeListener();\r
        tryRemovePackageActivityChangeListener()\r
    }\r
    function checkDoAction() {\r
        let l = logger.createSubLogger(\`checkDoAction\`);\r
        if (keyboardIsOpen()) {\r
            l.log(\`keyboard is open\`);\r
            // 收起ime会调用返回键\r
            // 所以需要配置了可以使用全局快捷键才会执行\r
            if(!operateConf.globalBackActionConf){\r
                l.log(\`globalbackactionconf not set\`, operateConf)\r
                that.dispatchFailed({msg:"ime is open, globalBackActionConf not set"});\r
                return;\r
            }\r
            if (++checkDoActionCount > 5) {\r
                l.log(\`checkDoActionCount more then 5\`)\r
                that.dispatchFailed({msg:"checkDoActionCount more then 5"});\r
                return;\r
            }\r
            let bl = hideImeIfPackageOpened(operateConf.packageName);\r
            l.log(\`hideImeIfPackageOpened return bl = \${bl}\`);\r
            if (bl) {\r
                listenPackageActivity();\r
            }\r
\r
            l.log(\`hideImeIfPackageOpened wait settimeout\`);\r
            setTimeout(() => {\r
                l.log(\`hideImeIfPackageOpened settimeout checkDoAction\`);\r
                checkDoAction();\r
            }, 100 * 15)\r
        } else {\r
            act();\r
        }\r
    }\r
\r
    function doAction() {\r
        logger.log("doaction")\r
        checkOvertime();\r
        // that.exitTriggers();\r
        checkDoAction();\r
\r
    }\r
\r
\r
    that.doAction = doAction.bind(that);\r
\r
    let contentChangeListenData = undefined;\r
\r
    function tryRemoveContentChangeListener() {\r
        let data = contentChangeListenData;\r
        contentChangeListenData = undefined;\r
        if (data == undefined) return;\r
        a11yModel.removeListener(data);\r
    }\r
\r
    function act() {\r
        logger.log(\`act1\`);\r
        listenPackageActivity();\r
        checkFnChecker.checkRun();\r
    }\r
\r
    let packageActivityChangeData = undefined;\r
\r
    function tryRemovePackageActivityChangeListener(){\r
        let data = packageActivityChangeData;\r
        packageActivityChangeData = undefined;\r
        if(data == undefined)return;\r
        a11yModel.removeListener(data);\r
    }\r
    function listenPackageActivity() {\r
        let l = logger.createSubLogger(\`listenPackageActivity\`);\r
        // l.log("listenpackageactivity1")\r
        if (!that.isRunnable || !canRun()) return;\r
        if (packageActivityChangeData == undefined) {\r
            l.log("listenpackageactivity1 create")\r
            packageActivityChangeData = a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenPackageActivityChanged, domain, onPackageOrActivityChange);\r
        }\r
        listenContentChange();\r
    }\r
\r
    function onPackageOrActivityChange(e) {\r
        if (!that.isRunnable || !canRun()) return;\r
        resetCheckNodesLastChance();\r
        checkFnChecker.checkRun();\r
    }\r
\r
    function check() {\r
        if (!that.isRunnable || !canRun()) return;\r
        let l = logger.createSubLogger(\`1check\`);\r
        if (a11yModel.lastFullScreenPackage != operateConf.packageName) {\r
            l.log(\`error error a11yModel.lastFullScreenPackage != operateConf.packageName, a11yModel.lastFullScreenPackage: \${a11yModel.lastFullScreenPackage}, operateConf.packageName:\${operateConf.packageName}\`);\r
            tryRemoveContentChangeListener();\r
            //这种情况可能需要人工干预了，不行的话可能得放弃任务\r
            return;\r
        }\r
        let nowActivity = a11yModel.lastFullScreenActivity;\r
        let isMathActivity = operateConf.activities.some(an => an == nowActivity);\r
        l.log("isMathActivity", isMathActivity, nowActivity)\r
        if (!isMathActivity && operateConf.globalBackActionConf) {\r
            l.log(\`isMatchActivity=false\`);\r
            let bl = globalActionBack(operateConf.globalBackActionConf.interval);\r
            checkFnChecker.checkRun();\r
        } else if (operateConf.nodeConditions) {\r
            l.log(\`has nodeConditions1\`);\r
            checkNodes();\r
        } else {\r
            l.log(\`dispatchSuccess2\`);\r
            that.dispatchSuccess();\r
        }\r
    }\r
\r
    function listenContentChange() {\r
        if (!that.isRunnable || !canRun()) return;\r
        tryRemoveContentChangeListener();\r
        let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r
        let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r
        contentChangeListenData = a11yModel.listenDomainData(type, domain, onContentChange)\r
    }\r
\r
    function onContentChange(e) {\r
        let l = logger.createSubLogger(\`onContentChange\`);\r
        // l.log(\`ccccccccccontentchange isRunnable \${that.isRunnable}, canrun is  \${canRun()}\`)\r
        if (!that.isRunnable || !canRun()) return;\r
        runCheckNodesLastSetTimeout()\r
        checkFnChecker.checkRun();\r
    }\r
\r
    let nodesChecker = undefined;\r
\r
    function checkNodes() {\r
        let l = logger.createSubLogger(\`checkNodes\`);\r
        // l.log("tttttt isRunnable, canRun", that.isRunnable, canRun());\r
        if (!that.isRunnable || !canRun()) return;\r
        nodeDelayChecker.checkRun();\r
    }\r
\r
    function nodesCheckerCheck() {\r
        if (!that.isRunnable || !canRun()) return;\r
        let l = logger.createSubLogger(\`1nodesCheckerCheck\`);\r
        // l.log(\`nnnnnnnnodesCheckerCheck isRunnable=\${that.isRunnable}, canrun=\${canRun()}\`)\r
        if (!nodesChecker) {\r
            l.log('create nodesChecker')\r
            nodesChecker = createCheckNodesOnShow(operateConf, onCheckNodesBack, logger)\r
        }\r
        // l.log(\`run nodesChecker.check223 \${that.isRunnable}, \${canRun()}\`)\r
        nodesChecker.check();\r
    }\r
\r
    function onCheckNodesBack(nodes, isOk, err, matchedCheckList) {\r
        let l = logger.createSubLogger(\`onCheckNodesBack\`);\r
        l.log(\`ccccccccconCheckNodesBack isRunnable=\${that.isRunnable}, canrun=\${canRun()}\`)\r
        if (!that.isRunnable || !canRun()) return;\r
        if(isOk){\r
            setComplete();\r
        }\r
        l.log("1params", nodes ? nodes.size() : "no nodes result", isOk, err)\r
        l.log('1matchedCheckList is', matchedCheckList)\r
        l.log('1conditions are', operateConf.conditions)\r
        l.log('1Nodeconditions are', operateConf.nodeConditions)\r
        if (isOk) {\r
            resetCheckNodesLastChance();\r
            nodesCheckCompleted = true;\r
            removeListener();\r
            checkNodesAction(nodes, matchedCheckList);\r
        } else if(!isComplete && isCheckNodesLastChance && !nodesCheckCompleted && operateConf.globalBackActionConf) {\r
            l.log(\`1isCheckNodesLastChance=\${isCheckNodesLastChance}, 1nodesCheckCompleted=\${nodesCheckCompleted}\`)\r
            resetCheckNodesLastChance();\r
            let bl = globalActionBack(operateConf.globalBackActionConf.interval);\r
            l.log(\`12globalActionback2 bl=\${bl}\`, operateConf);\r
        }else{\r
            l.log(\`bbbbbbbbbbbbbbbackonCheckNodesBack isRunnable \${that.isRunnable}, canrun \${canRun()}\`)\r
            nodesCheckerCheck();\r
        }\r
    }\r
\r
    function checkNodesAction(nodes, matchedCheckList){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesAction\`);\r
        l.log(\`2node size \${nodes.size()}\`)\r
        l.log(\`2matchedCheckList \${matchedCheckList}\`)\r
        if((!nodes || nodes.size() == 0) && (!matchedCheckList || matchedCheckList.length == 0))return;\r
        let nodeConditions = operateConf.nodeConditions;\r
        for (let i = 0; i < matchedCheckList.length; i++) {\r
            let matchConf = matchedCheckList[i];\r
            l.log("doaction1", matchConf.doAction)\r
            if(!matchConf.doAction)continue;\r
            let nodeConf = nodeConditions[matchedCheckList[i].index];\r
            l.log(\`1nodeConf is\`, nodeConf);\r
            let node = nodes[matchedCheckList[i].index];\r
            let actionConf = nodeConf.action;\r
            l.log(\`1actionConf1\`, actionConf)\r
            let nodeAction = createNodeAction(actionConf);\r
            l.log(\`nodeAction1\`, nodeAction.type)\r
            l.log(\`nodeAction2\`, nodeAction)\r
            let bl = a11yModel.doAction(node, nodeAction);\r
            l.log("1bbbbbbbbbbbbbbbbbbbbbb2234", bl, nodeAction.type, "bltypeis",typeof bl);\r
            if(bl){\r
                l.log("bbbbbbbbbbbllllllll")\r
                checkNodesActionNext(actionConf)\r
                return;\r
            }\r
        }\r
        l.log("dddddddddddddispach success")\r
        // success without actionConf.doAction\r
        that.dispatchSuccess();\r
    }\r
    function checkNodesActionNext(actionConf){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesActionNext\`);\r
        l.log('actionConf1is', actionConf)\r
        if(!actionConf.nextOperateConf){\r
            l.log('dispatchSuccess23')\r
            that.dispatchSuccess();\r
        }else{\r
            l.log('5createa11yoperator5')\r
            createA11yOperator(actionConf.nextOperateConf, logger, that).runOperator();\r
        }\r
    }\r
    function checkOvertime() {\r
        let l = logger.createSubLogger(\`checkOvertime\`);\r
        let overtime = operateConf.overtime;\r
        l.log(\`1overtime1 is \${overtime}\`);\r
        if (overtime == undefined || overtime <= 0) return;\r
        setTimeout(() => {\r
            l.log(\`isRunnable is \${that.isRunnable}, canrun is \${canRun()}\`);\r
            if (that.isRunnable && !isComplete) {\r
                l.log(\`call project terminate msg=\${operateConf.terminateMsg}\`, operateConf);\r
                that.project.terminate();\r
            }\r
        }, overtime)\r
    }\r
    return {doAction}\r
}\r
\r
\r
\r
return {createNodeChecker}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/NodesChecker.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/a11y/a11yUtils", properties: ["createCheckNodesOnShow", " createNodeAction", `\r
    globalActionBack`, " hideImeIfPackageOpened", `\r
    keyboardIsOpen`] }, { path: "fanfanlo/javajs/v1/utils/IntervalCheck", properties: ["createIntervalChecker"] }, { path: "fanfanlo/javajs/v1/utils/ExitHandler", properties: ["createExitHandler"] }, { path: "fanfanlo/javajs/v1/utils/setTimeout", properties: ["setTimeout", " clearTimeout"] }, { path: "fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator", properties: ["createA11yOperator"] }] }, "fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get regAction(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regAction;
            }
            ,
            get createCheckNodesOnShow(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createCheckNodesOnShow;
            }
            ,
            get globalActionBack(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].globalActionBack;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            ,
            get keyboardIsOpen(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].keyboardIsOpen;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            ,
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get createIntervalChecker(){
                return javaLib["fanfanlo/javajs/v1/utils/IntervalCheck"].createIntervalChecker;
            }
            ,
            get createExitHandler(){
                return javaLib["fanfanlo/javajs/v1/utils/ExitHandler"].createExitHandler;
            }
            ,
            get createA11yOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator"].createA11yOperator;
            }
            }){
            \r
\r
let type = "fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain"\r
\r
onLibReady(()=>{\r
    regAction(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain.java.js\`);\r
\r
function attach(that){\r
    let superDoAction = that.doAction;\r
    let logger = that.logger.createSub("TryBackToMainClazz");\r
    console.log("tyr back to main running")\r
    function doAction(){\r
        superDoAction();\r
        that.exitTriggers();\r
        createA11yOperator(that.data, logger, that).runOperator();\r
        checkOvertime();\r
    }\r
    function checkOvertime(){\r
        let l = logger.createSubLogger(\`TryBackToMainClazz.checkOvertimeFn\`);\r
        let overtime = that.data.overtime;\r
        l.log(\`try back to main overtime is \${overtime}\`);\r
        if(overtime == undefined || overtime <=0)return;\r
        setTimeout(()=>{\r
            l.log(\`isRunnable is \${that.isRunnable}\`);\r
            if(that.isRunnable){\r
                l.log(\`call project terminate\`);\r
                that.project.terminate();\r
            }\r
        }, overtime)\r
    }\r
    that.doAction = doAction.bind(that);\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/store", properties: ["regAction"] }, { path: "fanfanlo/javajs/v1/a11y/a11yUtils", properties: ["createCheckNodesOnShow", `\r
    globalActionBack`, " hideImeIfPackageOpened", `\r
    keyboardIsOpen`] }, { path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeComplete", " eventTypeExit"] }, { path: "fanfanlo/javajs/v1/utils/setTimeout", properties: ["setTimeout"] }, { path: "fanfanlo/javajs/v1/utils/IntervalCheck", properties: ["createIntervalChecker"] }, { path: "fanfanlo/javajs/v1/utils/ExitHandler", properties: ["createExitHandler"] }, { path: "fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator", properties: ["createA11yOperator"] }] }, "fanfanlo/javajs/v1/project/components/action/app/openApp": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get regAction(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regAction;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
let type = "fanfanlo/javajs/v1/project/components/action/app/openApp";\r
onLibReady(()=>{\r
    regAction(type, attach)\r
}, \`src.droid.java_js.fanfanlo.javajs.v1.project.components.action.app.openApp.java.js\`)\r
function attach(that){\r
    let superDoAction = that.doAction;\r
    let logger = that.logger;\r
    let domain = {};\r
    function onScriptCallExit(){\r
        logger.log("onScriptCallExit", that.baseMsg)\r
        onExit();\r
    }\r
    addScriptExitListener(onScriptCallExit);\r
    that.dispatcher.listenData(eventTypeExit, onExit);\r
    that.dispatcher.listenData(eventTypeComplete, onExit);\r
    function onExit(e){\r
        logger.log("OpenAppOnExit")\r
        clean();\r
    }\r
    function clean(){\r
        a11yModel.removeDomain(domain)\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
\r
    that.doAction = doAction.bind(that);\r
    function doAction() {\r
        superDoAction();\r
        check();\r
    }\r
\r
    function check(){\r
        if(trySuccess())return;\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, domain, onPackageChange);\r
        com.fanfanlo.lib.intent.Funcs.openApp(that.data.packageName);\r
    }\r
    function onPackageChange(e){\r
        console.log("iiiiiiiiiiiiiii222i")\r
        trySuccess();\r
    }\r
    function trySuccess(){\r
        console.log("a11yModel.lastFullScreenPackage != that.data.packageName222", a11yModel.lastFullScreenPackage != that.data.packageName, a11yModel.lastFullScreenPackage, that.data.packageName)\r
        if(a11yModel.lastFullScreenPackage != that.data.packageName)return;\r
        that.dispatchSuccess();\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/app/openApp.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/store", properties: ["regAction"] }, { path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeComplete", " eventTypeExit"] }] }, "fanfanlo/javajs/v1/project/components/trigger/a11y/ActivityInOut": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
let type = "fanfanlo/javajs/v1/project/components/trigger/a11y/activityInOut";\r
\r
let data = {\r
    packageName:"packageA", // *\r
    activities:["activityA", "activityB"], // *\r
    hideIme:true,\r
}\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/activityInOut.js\`)\r
\r
\r
function attach(that){\r
    let domain = {};\r
    function clean(){\r
        a11yModel.removeDomain(that);\r
        that.removeDomain(domain)\r
    }\r
    function onExitComplete(e){\r
        clean();\r
    }\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        superOnRun();\r
        addListener();\r
    }\r
    function addListener(){\r
        that.dispatcher.listenDomain(eventTypeExit, domain, onExitComplete);\r
        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitComplete);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageOrActivityChange);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastActivityInfoChanged, this, onPackageOrActivityChange);\r
    }\r
    let isOn = false;\r
    function onPackageOrActivityChange(event){\r
        check();\r
    }\r
    function check(){\r
        if(!that.isRunnable){\r
            clean();\r
            return;\r
        }\r
        let pn = that.data.packageName;\r
        if(that.data.hideIme && hideImeIfPackageOpened(pn)){\r
            return;\r
        }\r
        let packageName = a11yModel.lastFullScreenPackage;\r
        let activityName = a11yModel.lastFullScreenActivity;\r
        let data = {packageName, activityName}\r
        let activities = that.data.activities;\r
        if(activities.indexOf(activityName) == -1){\r
            return triggerOff(data);\r
        }\r
        triggerOn(data);\r
    }\r
    function triggerOff(data){\r
        if(!isOn)return;\r
        isOn = false;\r
        that.dispatchConditionsOff({data})\r
    }\r
    function triggerOn(data){\r
        if(isOn)return;\r
        isOn = true;\r
        that.dispatchConditionsOn({data})\r
    }\r
    let superOnExit = that.onExit;\r
\r
    function onExit(){\r
        superOnExit();\r
        a11yModel.removeDomain(this);\r
    }\r
    that.onExit = onExit.bind(that);\r
\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/ActivityInOut.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/store", properties: ["regTrigger"] }, { path: "fanfanlo/javajs/v1/a11y/a11yUtils", properties: ["hideImeIfPackageOpened"] }, { path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeComplete", " eventTypeExit"] }] }, "fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get Types(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Types;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
let type = "fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut";\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut.java.js\`)\r
function attach(that){\r
    let logger = console.createSubLogger(\`\${Date.now()}\`)\r
    function onScriptCallExit(){\r
        onExit();\r
    }\r
    addScriptExitListener(onScriptCallExit);\r
    that.dispatcher.listenData(eventTypeExit, onExit);\r
    function onExit(e){\r
        tryRemoveContentChangeListener();\r
        a11yModeRemoveThis()\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
\r
    function a11yModeRemoveThis(){\r
        a11yModel.removeDomain(that);\r
    }\r
\r
    var pnAnMatched = false;\r
    var lastJob = undefined;\r
    var contentChangeListener = undefined;\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        prepareConditions()\r
        superOnRun();\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageOrActivityChange);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastActivityInfoChanged, this, onPackageOrActivityChange);\r
        check();\r
    }\r
    function prepareConditions(){\r
        // nodeCondition是SFRoot，不是SFData\r
        that.data.conditions = that.data.nodeConditions.map((cond)=>{\r
            let root = {\r
                type:"Root",\r
                next:cond\r
            }\r
            cond = root;\r
            while(cond){\r
                cond.type = Types[cond.type];\r
                cond = cond.next;\r
            }\r
            let data = conditionJsonToData(root);\r
            return data.next;\r
        })\r
    }\r
    function conditionJsonToData(data){\r
        let s = JSON.stringify(data);\r
        return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfRoot(s)\r
    }\r
    let isOn = false;\r
    function onPackageOrActivityChange(event){\r
        if(!isScriptRunnable){\r
            return a11yModeRemoveThis();\r
        }\r
        check();\r
    }\r
    function check(){\r
        var checkDomain = {}\r
        let packageName = a11yModel.lastFullScreenPackage;\r
        let activityName = a11yModel.lastFullScreenActivity;\r
        let data = {packageName, activityName, nodes:undefined}\r
        if(!checkIsPackageActivity()){\r
            tryRemoveContentChangeListener()\r
            return triggerOff(data)\r
        }\r
        if(!pnAnMatched){\r
            pnAnMatched = true;\r
            listenContentChange();\r
        }\r
        checkNodes();\r
        function checkIsPackageActivity(){\r
            return packageName == that.data.packageName && that.data.activities.some(name=>name==activityName);\r
          return packageName == that.data.packageName && that.data.activities.indexOf(activityName) > -1\r
        }\r
\r
        function listenContentChange(){\r
            tryRemoveContentChangeListener();\r
            let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r
            let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r
            contentChangeListener = a11yModel.listenData(type, onContentChange)\r
        }\r
        function onContentChange(e){\r
            if(isScriptExited())return;\r
            if(!pnAnMatched){\r
                tryRemoveContentChangeListener();\r
                return;\r
            }\r
            checkNodes()\r
        }\r
        var job = undefined;\r
        function checkNodes(){\r
            if(lastJob && (!job || job == lastJob)){\r
                tryCancelJob(lastJob);\r
                lastJob = undefined;\r
            }\r
            let proxy = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SfProxy();\r
           job = lastJob = proxy.find(a11yModel, packageName, that.data.conditions, callback, onError);\r
        }\r
        function callback(nodes){\r
            if(isScriptExited())return;\r
            if(job != lastJob)return;\r
            if(!nodes){\r
                // java里model.getRootByPackageName(pn)返回的是null，这个得观察一下怎么回事\r
                // console.log("cccccccccno nodes is null")\r
                return;\r
            }\r
            for (let i = 0; i < that.data.nodeCheckList.length; i++) {\r
                let list = that.data.nodeCheckList[i];\r
                let isOk = list.every((index)=>nodes[index] != null);\r
                if(isOk){\r
                    data.nodes = nodes\r
                    triggerOn(data)\r
                    return;\r
                }\r
            }\r
        }\r
        function onError(err){\r
            console.log("cccccccccno on error", err)\r
            if(isScriptExited())return;\r
            if(job != lastJob)return;\r
        }\r
        function triggerOff(data){\r
            if(pnAnMatched){\r
                pnAnMatched = false;\r
            }\r
            if(!isOn)return;\r
            isOn = false;\r
            that.dispatchConditionsOff({data})\r
        }\r
        function triggerOn(data){\r
            if(isOn)return;\r
            isOn = true;\r
            console.log("triggerOntriggerOn", data);\r
            that.dispatchConditionsOn(data)\r
        }\r
        function tryCancelJob(job){\r
            if(job && !job.isCompleted && !job.isCancelled){\r
                job.cancel();\r
            }\r
        }\r
        function checkComplete(){\r
            a11yModel.removeDomain(checkDomain);\r
            tryCancelJob(job);\r
        }\r
\r
        function isScriptExited(){\r
            if(isScriptRunnable)return false;\r
            tryRemoveContentChangeListener();\r
            a11yModeRemoveThis();\r
            return true;\r
        }\r
    }\r
\r
    function tryRemoveContentChangeListener(){\r
        if(!contentChangeListener)return;\r
        a11yModel.removeListener(contentChangeListener);\r
        contentChangeListener = undefined;\r
    }\r
    let superOnExit = that.onExit;\r
\r
    function onExit(){\r
        superOnExit();\r
        a11yModel.removeDomain(this);\r
    }\r
    that.onExit = onExit.bind(that);\r
\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/store", properties: ["regTrigger"] }, { path: "fanfanlo/javajs/v1/a11y/node/ICondition", properties: ["Types"] }, { path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeExit"] }] }, "fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            }){
            \r
\r
let type = \`fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn\`;\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn.java.js\`)\r
\r
function attach(that){\r
    let domain = {};\r
    let logger = that.logger;\r
    addScriptExitListener(onScriptCallExit);\r
    function onScriptCallExit(){\r
        logger.log("script call PackageIn exit", that.baseMsg)\r
        onExit();\r
    }\r
    function onExit(e){\r
        clean();\r
    }\r
    function clean(){\r
        removeListener();\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
    function onExitOrComplete(e){\r
        clean();\r
    }\r
\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        superOnRun();\r
        addListener();\r
        check();\r
    }\r
    function addListener(){\r
        that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\r
        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, domain, onChange);\r
    }\r
    function removeListener(){\r
        a11yModel.removeDomain(domain);\r
        that.dispatcher.removeDomain(domain)\r
    }\r
    function onChange(event){\r
        check();\r
    }\r
\r
\r
    function check(){\r
        if(!that.isRunnable){\r
            clean();\r
            return;\r
        }\r
        let isOk = a11yModel.lastFullScreenPackage == that.data.packageName\r
        logger.log(\`equals lastpackage \${isOk}, lastFullScreenPackage=\${a11yModel.lastFullScreenPackage}, packageName=\${that.data.packageName}\`);\r
        if(isOk){\r
            logger.log(\`check isok dispatch conditions on\`);\r
            that.dispatchConditionsOn({target:that})\r
        }else if(that.data.hideIme){\r
            logger.log(\`check isnotok hide ime\`);\r
            hideImeIfPackageOpened(that.data.packageName);\r
        }\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/store", properties: ["regTrigger"] }, { path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeComplete", " eventTypeExit"] }, { path: "fanfanlo/javajs/v1/a11y/a11yUtils", properties: ["hideImeIfPackageOpened"] }] }, "fanfanlo/javajs/v1/project/components/trigger/a11y/PackageInOut": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            }){
            \r
let type = "fanfanlo/javajs/v1/project/components/trigger/a11y/PackageInOut";\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/packageInOut.js\`)\r
function attach(that){\r
    let domain = {};\r
    function clean(){\r
        a11yModel.removeDomain(that);\r
        that.removeDomain(domain)\r
    }\r
    function onExitOrComplete(e){\r
        clean();\r
    }\r
\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        superOnRun();\r
        addListener();\r
        check();\r
    }\r
    function addListener(){\r
        that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\r
        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageChange);\r
    }\r
    function onPackageChange(event){\r
        check();\r
    }\r
\r
    function check(){\r
        console.log("triiiiiiiiiiiiii", that.isRunnable)\r
        if(!that.isRunnable){\r
            clean();\r
            return;\r
        }\r
        let pn = that.data.packageName;\r
        if(that.data.hideIme && hideImeIfPackageOpened(pn)){\r
            return;\r
        }\r
        if(a11yModel.lastFullScreenPackage == that.data.packageName){\r
            that.dispatchConditionsOn({packageName:a11yModel.lastFullScreenPackage})\r
        }else{\r
            that.dispatchConditionsOff({packageName:a11yModel.lastFullScreenPackage})\r
        }\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/PackageInOut.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/project/store", properties: ["regTrigger"] }, { path: "fanfanlo/javajs/v1/project/base/projectMembers", properties: ["eventTypeComplete", " eventTypeExit"] }, { path: "fanfanlo/javajs/v1/a11y/a11yUtils", properties: ["hideImeIfPackageOpened"] }] }, "fanfanlo/javajs/v1/project/components/trigger/time/later": { content: `
    (()=>{
    try{
        // @ts-ignore
        with({
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            }){
            \r
\r
\r
let type = "fanfanlo/javajs/v1/project/components/trigger/time/later";\r
\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/time/later.java.js\`)\r
function attach(that){\r
    let old = that.onRun;\r
    that.onRun = onRun.bind(that);\r
\r
    function onRun() {\r
        setTimeout(()=>{\r
            old();\r
            that.dispatchConditionsOn({data:that.data});\r
        }, that.data.time)\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/time/later.java.js", e);
    }
    })()
    `, dependencies: [{ path: "fanfanlo/javajs/v1/utils/setTimeout", properties: ["setTimeout"] }, { path: "fanfanlo/javajs/v1/project/store", properties: ["regTrigger"] }] } };
const mg = `
console.paused = false;
let javaLibInitLogger = console.createSubLogger("lib9");
let projectStoreLogger = javaLibInitLogger.createSubLogger("store9");
let projectEventLogger = console.createSubLogger("event9");
let projectFailedLogger = console.createSubLogger("failed9");
let projectFlowLogger = console.createSubLogger("flow9");
projectFlowLogger.paused = false;
projectStoreLogger.paused = false;


`, Tg = `
;
const onLibReadyInitFuncs = [];
function onLibReady(f, info){
    console.log('reg onLiReady', info);
    onLibReadyInitFuncs.push({f, info});
}
;
`, Sg = `
;
for(let i = 0; i < onLibReadyInitFuncs.length; i++){
    let data = onLibReadyInitFuncs[i];
    try{
        data.f();
    }catch(e){
        console.log("on lib ready init fun error", data.info, e);
    }
}
;
`;
function ds(T, P = /* @__PURE__ */ new Set(), s = []) {
  for (let F = 0; F < T.length; F++) {
    let K = T[F];
    if (P.has(K)) continue;
    let re = us[K];
    if (!re)
      throw console.log("error script runner prepare dependencies error, path is", K), console.log("--------------------"), console.log(K), console.log("============== java lib"), console.log(us), console.log("================== java lib end"), console.log(T), console.log("-------------------dependencies"), new Error(`no path in javaLib, path is ${K}`);
    if (P.add(K), s.push(`"${K}":${re.content}`), re.dependencies && re.dependencies.length > 0) {
      let rn = re.dependencies.map((tt) => tt.path);
      ds(rn, P, s);
    }
  }
  return s;
}
function Og(T) {
  return `let javaLib = {
        ${ds(T).join(",")}
        }`;
}
function Rg(T, P, s) {
  try {
    let F = vg(T), K = Og(P);
    return F.script = `
    ${mg}
    ;
    ${s}
    ;
    ${Tg}
    ;
    ${K}
    ;
    ${Sg}
    ;
    ${F.script}
    ;
    `, F;
  } catch (F) {
    throw console.log("runJavaLibScript catch error", F == null ? void 0 : F.message, F == null ? void 0 : F.stack), console.log("-------------------"), console.log(T), console.log("====================="), console.log(s), F;
  }
}
function Ng(T) {
  console.log(T), console.log("=====================");
}
export {
  Rg as buildScript,
  Ng as printScript1
};
