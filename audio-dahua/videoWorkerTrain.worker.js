!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 2));
})([
  function (e, t) {
    (e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BrowserDetect = function () {
        var e = navigator.userAgent.toLowerCase(),
          t = navigator.appName,
          r = null;
        "Microsoft Internet Explorer" === t ||
        e.indexOf("trident") > -1 ||
        e.indexOf("edge/") > -1
          ? ((r = "ie"),
            "Microsoft Internet Explorer" === t
              ? ((e = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(e)),
                (r += parseInt(e[1])))
              : e.indexOf("trident") > -1
              ? (r += 11)
              : e.indexOf("edge/") > -1 && (r = "edge"))
          : e.indexOf("safari") > -1
          ? (r = e.indexOf("chrome") > -1 ? "chrome" : "safari")
          : e.indexOf("firefox") > -1 && (r = "firefox");
        return r;
      }),
      (t.CommonAudioUtil = function () {
        var e = [
            1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192,
            16384,
          ],
          t = function (e, t, r) {
            var n = 0,
              i = 0;
            for (n = 0; n < r && !(e < t[i]); n++) i++;
            return n;
          },
          r = function (r, n) {
            var i = 0,
              a = 0,
              o = 0,
              u = 0,
              f = 0;
            return (
              (a = t((i = r > 0 ? r : 8191 & -r), e, 15) - 6),
              (o = a + ((n >> 6) & 15) - 13),
              (u =
                ((0 === i ? 32 : a >= 0 ? i >> a : i << -a) *
                  (n & parseInt("077", 8)) +
                  48) >>
                4),
              (f = o >= 0 ? (u << o) & 32767 : u >> -o),
              (r ^ n) < 0 ? -f : f
            );
          };
        (this.g726InitState = function () {
          var e = {},
            t = 0;
          for (
            e.pp = new Array(2),
              e.zp = new Array(6),
              e.pk = new Array(2),
              e.dq = new Array(6),
              e.sr = new Array(2),
              e.yl = 34816,
              e.yu = 544,
              e.dms = 0,
              e.dml = 0,
              e.ppp = 0,
              t = 0;
            t < 2;
            t++
          )
            (e.pp[t] = 0), (e.pk[t] = 0), (e.sr[t] = 32);
          for (t = 0; t < 6; t++) (e.zp[t] = 0), (e.dq[t] = 32);
          return (e.td = 0), e;
        }),
          (this.predictorZero = function (e) {
            var t = 0,
              n = 0;
            for (n = r(e.zp[0] >> 2, e.dq[0]), t = 1; t < 6; t++)
              n += r(e.zp[t] >> 2, e.dq[t]);
            return n;
          }),
          (this.predictorPole = function (e) {
            return r(e.pp[1] >> 2, e.sr[1]) + r(e.pp[0] >> 2, e.sr[0]);
          }),
          (this.stepSize = function (e) {
            var t = 0,
              r = 0,
              n = 0;
            return e.ppp >= 256
              ? e.yu
              : ((t = e.yl >> 6),
                (r = e.yu - t),
                (n = e.ppp >> 2),
                r > 0 ? (t += (r * n) >> 6) : r < 0 && (t += (r * n + 63) >> 6),
                t);
          }),
          (this.quantize = function (r, n, i, a) {
            var o = 0,
              u = 0,
              f = 0;
            return (
              (o = Math.abs(r)),
              (u = t(o >> 1, e, 15)),
              (f = t((u << 7) + (((o << 7) >> u) & 127) - (n >> 2), i, a)),
              r < 0 ? 1 + (a << 1) - f : 0 === f ? 1 + (a << 1) : f
            );
          }),
          (this.reconstruct = function (e, t, r) {
            var n = 0,
              i = 0;
            return (n = t + (r >> 2)) < 0
              ? e
                ? -32768
                : 0
              : ((i = ((128 + (127 & n)) << 7) >> (14 - ((n >> 7) & 15))),
                e ? i - 32768 : i);
          }),
          (this.update = function (r, n, i, a, o, u, f, s) {
            var p = 0,
              l = 0,
              _ = 0,
              c = 0,
              d = 0,
              m = 0,
              h = 0,
              g = 0,
              y = 0,
              v = 0,
              b = 0,
              x = 0,
              E = 0,
              T = 0;
            if (
              ((T = f < 0 ? 1 : 0),
              (l = 32767 & o),
              (y = s.yl >> 15),
              (x = (s.yl >> 10) & 31),
              (E = (32 + x) << y),
              (b = ((v = y > 9 ? 31744 : E) + (v >> 1)) >> 1),
              (g = 0 === s.td ? 0 : l <= b ? 0 : 1),
              (s.yu = n + ((i - n) >> 5)),
              s.yu < 544 ? (s.yu = 544) : s.yu > 5120 && (s.yu = 5120),
              (s.yl += s.yu + (-s.yl >> 6)),
              1 === g)
            )
              (s.pp[0] = 0),
                (s.pp[1] = 0),
                (s.zp[0] = 0),
                (s.zp[1] = 0),
                (s.zp[2] = 0),
                (s.zp[3] = 0),
                (s.zp[4] = 0),
                (s.zp[5] = 0),
                (c = 0);
            else
              for (
                m = T ^ s.pk[0],
                  c = s.pp[1] - (s.pp[1] >> 7),
                  0 !== f &&
                    ((h = m ? s.pp[0] : -s.pp[0]) < -8191
                      ? (c -= 256)
                      : (c += h > 8191 ? 255 : h >> 5),
                    T ^ s.pk[1]
                      ? c <= -12160
                        ? (c = -12288)
                        : c >= 12416
                        ? (c = 12288)
                        : (c -= 128)
                      : c <= -12416
                      ? (c = -12288)
                      : c >= 12160
                      ? (c = 12288)
                      : (c += 128)),
                  s.pp[1] = c,
                  s.pp[0] -= s.pp[0] >> 8,
                  0 !== f && (0 === m ? (s.pp[0] += 192) : (s.pp[0] -= 192)),
                  d = 15360 - c,
                  s.pp[0] < -d ? (s.pp[0] = -d) : s.pp[0] > d && (s.pp[0] = d),
                  p = 0;
                p < 6;
                p++
              )
                (s.zp[p] -= 5 === r ? s.zp[p] >> 9 : s.zp[p] >> 8),
                  32767 & o &&
                    ((o ^ s.dq[p]) >= 0 ? (s.zp[p] += 128) : (s.zp[p] -= 128));
            for (p = 5; p > 0; p--) s.dq[p] = s.dq[p - 1];
            return (
              0 === l
                ? (s.dq[0] = o >= 0 ? 32 : 64544)
                : ((_ = t(l, e, 15)),
                  (s.dq[0] =
                    o >= 0
                      ? (_ << 6) + ((l << 6) >> _)
                      : (_ << 6) + ((l << 6) >> _) - 1024)),
              (s.sr[1] = s.sr[0]),
              0 === u
                ? (s.sr[0] = 32)
                : u > 0
                ? ((_ = t(u, e, 15)), (s.sr[0] = (_ << 6) + ((u << 6) >> _)))
                : u > -32768
                ? ((_ = t((l = -u), e, 15)),
                  (s.sr[0] = (_ << 6) + ((l << 6) >> _) - 1024))
                : (s.sr[0] = 64544),
              (s.pk[1] = s.pk[0]),
              (s.pk[0] = T),
              (s.td = 1 === g ? 0 : c < -11776 ? 1 : 0),
              (s.dms += (a - s.dms) >> 5),
              (s.dml += ((a << 2) - s.dml) >> 7),
              1 === g
                ? (s.ppp = 256)
                : n < 1536
                ? (s.ppp += (512 - s.ppp) >> 4)
                : 1 === s.td
                ? (s.ppp += (512 - s.ppp) >> 4)
                : Math.abs((s.dms << 2) - s.dml) >= s.dml >> 3
                ? (s.ppp += (512 - s.ppp) >> 4)
                : (s.ppp += -s.ppp >> 4),
              s
            );
          });
      }),
      (t.Texture = t.Shader = t.Script = t.Queue = t.Program = void 0),
      (t.VideoBufferList = function () {
        var e = 0,
          t = 0,
          r = null;
        function n() {
          (e = 360),
            (t = 240),
            (r = null),
            (this._length = 0),
            (this.head = null),
            (this.tail = null),
            (this.curIdx = 0);
        }
        return (
          (n.prototype = {
            push: function (e, n, i, a, o, u) {
              var f = new VideoBufferNode(e, n, i, a, o, u);
              return (
                this._length > 0
                  ? ((this.tail.next = f),
                    (f.previous = this.tail),
                    (this.tail = f))
                  : ((this.head = f), (this.tail = f)),
                (this._length += 1),
                null !== r && this._length >= t && r(),
                f
              );
            },
            pop: function () {
              var e = null;
              return (
                this._length > 1 &&
                  ((e = this.head),
                  (this.head = this.head.next),
                  null !== this.head
                    ? (this.head.previous = null)
                    : (this.tail = null),
                  (this._length -= 1)),
                e
              );
            },
            setMaxLength: function (t) {
              (e = t) > 360 ? (e = 360) : e < 30 && (e = 30);
            },
            setBUFFERING: function (e) {
              (t = e) > 240 ? (t = 240) : t < 6 && (t = 6);
            },
            setBufferFullCallback: function (e) {
              r = e;
            },
            searchTimestamp: function (e) {
              var t = this.head,
                r = this._length,
                n = 1;
              if (0 === r || e <= 0 || null === t)
                throw new Error("Failure: non-existent node in this list.");
              for (
                ;
                null !== t &&
                (t.timeStamp.timestamp !== e.timestamp ||
                  t.timeStamp.timestamp_usec !== e.timestamp_usec);

              )
                (t = t.next), n++;
              return r < n ? (t = null) : (this.curIdx = n), t;
            },
            findIFrame: function (e) {
              var t = this.head,
                r = this._length,
                n = 1;
              if (0 === r)
                throw new Error("Failure: non-existent node in this list.");
              for (; n < this.curIdx; ) (t = t.next), n++;
              if (!0 === e) for (; "I" !== t.frameType; ) (t = t.next), n++;
              else for (; "I" !== t.frameType; ) (t = t.previous), n--;
              return r < n ? (t = null) : (this.curIdx = n), t;
            },
          }),
          new n()
        );
      }),
      (t.debug = void 0),
      (t.formAuthorizationResponse = function (e, t, r, n, i, a) {
        var u = null,
          f = null;
        return (
          (u = (0, o.default)(e + ":" + n + ":" + t).toLowerCase()),
          (f = (0, o.default)(a + ":" + r).toLowerCase()),
          (0, o.default)(u + ":" + i + ":" + f).toLowerCase()
        );
      }),
      (t.stringToUint8Array = function (e) {
        for (
          var t = e.length, r = new Uint8Array(new ArrayBuffer(t)), n = 0;
          n < t;
          n++
        )
          r[n] = e.charCodeAt(n);
        return r;
      });
    var i = n(r(3)),
      a = n(r(4)),
      o = n(r(5)),
      u = {
        log: function () {},
        error: function () {},
        count: function () {},
        info: function () {},
      };
    t.debug = u;
    var f = (function () {
      function e() {}
      return (
        (e.createFromElementId = function (t) {
          for (
            var r = document.getElementById(t), n = "", i = r.firstChild;
            i;

          )
            3 === i.nodeType && (n += i.textContent), (i = i.nextSibling);
          var a = new e();
          return (a.type = r.type), (a.source = n), a;
        }),
        (e.createFromSource = function (t, r) {
          var n = new e();
          return (n.type = t), (n.source = r), n;
        }),
        e
      );
    })();
    t.Script = f;
    var s = (function () {
      return function (e, t) {
        if ("x-shader/x-fragment" === t.type)
          this.shader = e.createShader(e.FRAGMENT_SHADER);
        else {
          if ("x-shader/x-vertex" !== t.type)
            return void error("Unknown shader type: " + t.type);
          this.shader = e.createShader(e.VERTEX_SHADER);
        }
        e.shaderSource(this.shader, t.source),
          e.compileShader(this.shader),
          e.getShaderParameter(this.shader, e.COMPILE_STATUS) ||
            error(
              "An error occurred compiling the shaders: " +
                e.getShaderInfoLog(this.shader)
            );
      };
    })();
    t.Shader = s;
    var p = (function () {
      function e(e) {
        (this.gl = e), (this.program = this.gl.createProgram());
      }
      return (
        (e.prototype = {
          attach: function (e) {
            this.gl.attachShader(this.program, e.shader);
          },
          link: function () {
            this.gl.linkProgram(this.program);
          },
          use: function () {
            this.gl.useProgram(this.program);
          },
          getAttributeLocation: function (e) {
            return this.gl.getAttribLocation(this.program, e);
          },
          setMatrixUniform: function (e, t) {
            var r = this.gl.getUniformLocation(this.program, e);
            this.gl.uniformMatrix4fv(r, !1, t);
          },
        }),
        e
      );
    })();
    t.Program = p;
    var l = (function () {
      var e = null;
      function t(e, t, r) {
        (this.gl = e),
          (this.size = t),
          (this.texture = e.createTexture()),
          e.bindTexture(e.TEXTURE_2D, this.texture),
          (this.format = r || e.LUMINANCE),
          e.texImage2D(
            e.TEXTURE_2D,
            0,
            this.format,
            t.w,
            t.h,
            0,
            this.format,
            e.UNSIGNED_BYTE,
            null
          ),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
      }
      return (
        (t.prototype = {
          fill: function (e, t) {
            var r = this.gl;
            r.bindTexture(r.TEXTURE_2D, this.texture),
              t
                ? r.texSubImage2D(
                    r.TEXTURE_2D,
                    0,
                    0,
                    0,
                    this.size.w,
                    this.size.h,
                    this.format,
                    r.UNSIGNED_BYTE,
                    e
                  )
                : r.texImage2D(
                    r.TEXTURE_2D,
                    0,
                    this.format,
                    this.size.w,
                    this.size.h,
                    0,
                    this.format,
                    r.UNSIGNED_BYTE,
                    e
                  );
          },
          bind: function (t, r, n) {
            var i = this.gl;
            e || (e = [i.TEXTURE0, i.TEXTURE1, i.TEXTURE2]),
              i.activeTexture(e[t]),
              i.bindTexture(i.TEXTURE_2D, this.texture),
              i.uniform1i(i.getUniformLocation(r.program, n), t);
          },
        }),
        t
      );
    })();
    t.Texture = l;
    var _ = (function () {
      function e() {
        (0, i.default)(this, e), (this.first = null), (this.size = 0);
      }
      return (
        (0, a.default)(e, [
          {
            key: "enqueue",
            value: function (e) {
              if (null === this.first) this.first = e;
              else {
                for (var t = this.first; null !== t.next; ) t = t.next;
                t.next = e;
              }
              this.size += 1;
            },
          },
          {
            key: "dequeue",
            value: function () {
              var e = null;
              return (
                null !== this.first &&
                  ((e = this.first),
                  (this.first = this.first.next),
                  (this.size -= 1)),
                e
              );
            },
          },
          {
            key: "clear",
            value: function () {
              (this.size = 0), (this.first = null);
            },
          },
        ]),
        e
      );
    })();
    t.Queue = _;
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      i = (r(1), n(r(7))),
      a = n(r(8));
    importScripts("/module/ffmpegasm.js"),
      addEventListener(
        "message",
        function (e) {
          var t = e.data;
          switch (((u = e.data.channelId), t.type)) {
            case "MediaData":
              null === o && (o = new s()),
                t.data.rtspInterleave[1],
                o.parseRTPData(t.data.payload);
          }
        },
        !1
      ),
      (Module.onRuntimeInitialized = function () {
        Module._RegisterAll(), f("WorkerReady");
      });
    var o = null,
      u = null;
    function f(e, t, r) {
      var n = { type: e, data: t, channelId: u, option: r };
      "canvasRender" === e ? postMessage(n, [t.buffer]) : postMessage(n);
    }
    var s = function () {
      var e = new p(),
        t = 0,
        r = null;
      function n() {
        this.decoder = new a.default();
      }
      return (
        (n.prototype = {
          init: function (e) {},
          parseRTPData: function (n) {
            for (
              var i = null,
                a = {},
                o = n[22],
                u = ((n[11] << 24) + (n[10] << 16) + (n[9] << 8) + n[8]) >>> 0,
                s = n.subarray(24 + o, n.length - 8),
                p = n.subarray(n.length - 8, n.length),
                l =
                  (p[7],
                  p[6],
                  p[5],
                  p[4],
                  ((n[19] << 24) + (n[18] << 16) + (n[17] << 8) + n[16]) >>> 0),
                _ = [],
                c = 0;
              c <= s.length;

            )
              if (0 == s[c])
                if (0 == s[c + 1])
                  if (1 == s[c + 2]) {
                    if (
                      (_.push(c), 5 == (31 & s[(c += 3)]) || 1 == (31 & s[c]))
                    )
                      break;
                  } else 0 == s[c + 2] ? c++ : (c += 3);
                else c += 2;
              else c += 1;
            for (c = 0; c < _.length; c++)
              switch (
                ((i = s.subarray(_[c] + 3, _[c + 1])), 31 & s[_[c] + 3])
              ) {
                default:
                  break;
                case 1:
                  "P", _[c] - 1;
                  break;
                case 5:
                  "I", _[c] - 1;
                  break;
                case 28:
                  break;
                case 7:
                  e.parse(i), (r = e.getSizeInfo().decodeSize);
                  break;
                case 8:
                case 6:
                case 9:
              }
            t !== r &&
              (this.decoder.free(), (t = r), this.decoder.setOutputSize(t)),
              (a.frameData = null),
              (a.frameData = this.decoder.decode(s)),
              null != a.frameData &&
                null != a.frameData.data &&
                ((a.frameData.option.time = l),
                (a.frameData.option.frameNo = u),
                f("canvasRender", a.frameData.data, a.frameData.option));
          },
        }),
        new n()
      );
    };
    function p() {
      var e = 7,
        t = 7,
        r = 2,
        n = 3,
        a = 4,
        o = 5,
        u = 8,
        f = 16,
        s = 32,
        p = 255,
        l = 0,
        _ = null;
      function c() {
        (l = 0), (_ = new i.default());
      }
      function d(r, i) {
        var a = i,
          o = (l + a) >> n;
        return (a = (l + i) & e), (r[o] >> (t - (a & t))) & 1;
      }
      function m(e, t) {
        var r = l >> n,
          i = 8 * (r + 1) - l;
        if (i < 8)
          for (var a = 0; a < 3; a++) {
            var o = e[r + a];
            (o =
              0 == a
                ? (o >> i) << i
                : 2 == a
                ? (o & (255 >> (8 - i))) | (1 << i)
                : 0),
              e.set([o], r + a);
          }
        else e.set([0], r), e.set([1], r + 1);
      }
      function h(e, t) {
        var r = 0;
        if (1 === t) r = d(e, 0);
        else for (var n = 0; n < t; n++) r = (r << 1) + d(e, n);
        return (l += t), r;
      }
      function g(e, t) {
        for (var n = 0, i = 0, a = t; l + a < 8 * e.length && !d(e, a++); ) n++;
        if (0 === n) return (l += 1), 0;
        i = 1 << n;
        for (var o = n - 1; o >= 0; o--, a++) i |= d(e, a) << o;
        return (l += n * r + 1), i - 1;
      }
      function y(e, t) {
        var n = g(e, t);
        return 1 & n ? (n + 1) / r : -n / r;
      }
      function v(e) {
        _.put("cpb_cnt_minus1", g(e, 0)),
          _.put("bit_rate_scale", h(e, a)),
          _.put("cpb_size_scale", h(e, a));
        for (
          var t = _.get("cpb_cnt_minus1"),
            r = new Array(t),
            n = new Array(t),
            i = new Array(t),
            u = 0;
          u <= t;
          u++
        )
          (r[u] = g(e, 0)), (n[u] = g(e, 0)), (i[u] = h(e, 1));
        _.put("bit_rate_value_minus1", r),
          _.put("cpb_size_value_minus1", n),
          _.put("cbr_flag", i),
          _.put("initial_cpb_removal_delay_length_minus1", h(e, o)),
          _.put("cpb_removal_delay_length_minus1", h(e, o)),
          _.put("dpb_output_delay_length_minus1", h(e, o)),
          _.put("time_offset_length", h(e, o));
      }
      return (
        (c.prototype = {
          parse: function (e) {
            (l = 0),
              _.clear(),
              _.put("forbidden_zero_bit", h(e, 1)),
              _.put("nal_ref_idc", h(e, r)),
              _.put("nal_unit_type", h(e, o)),
              _.put("profile_idc", h(e, u)),
              _.put("profile_compatibility", h(e, u)),
              _.put("level_idc", h(e, u)),
              _.put("seq_parameter_set_id", g(e, 0));
            var t = _.get("profile_idc");
            if (
              (100 === t ||
                110 === t ||
                122 === t ||
                244 === t ||
                44 === t ||
                83 === t ||
                86 === t ||
                118 === t ||
                128 === t ||
                138 === t ||
                139 === t ||
                134 === t) &&
              (_.put("chroma_format_idc", g(e, 0)),
              _.get("chroma_format_idc") === n &&
                _.put("separate_colour_plane_flag", h(e, 1)),
              _.put("bit_depth_luma_minus8", g(e, 0)),
              _.put("bit_depth_chroma_minus8", g(e, 0)),
              _.put("qpprime_y_zero_transform_bypass_flag", h(e, 1)),
              _.put("seq_scaling_matrix_present_flag", h(e, 1)),
              _.get("seq_scaling_matrix_present_flag"))
            ) {
              for (
                var i = _.get("chroma_format_idc") !== n ? u : 12,
                  a = new Array(i),
                  c = 0;
                c < i;
                c++
              )
                if (((a[c] = h(e, 1)), a[c]))
                  for (var d = c < 6 ? f : 64, b = 8, x = 8, E = 0; E < d; E++)
                    x && (x = (b + y(e, 0) + 256) % 256), (b = 0 === x ? b : x);
              _.put("seq_scaling_list_present_flag", a);
            }
            if (
              (_.put("log2_max_frame_num_minus4", g(e, 0)),
              _.put("pic_order_cnt_type", g(e, 0)),
              0 === _.get("pic_order_cnt_type"))
            )
              _.put("log2_max_pic_order_cnt_lsb_minus4", g(e, 0));
            else if (1 === _.get("pic_order_cnt_type")) {
              _.put("delta_pic_order_always_zero_flag", h(e, 1)),
                _.put("offset_for_non_ref_pic", y(e, 0)),
                _.put("offset_for_top_to_bottom_field", y(e, 0)),
                _.put("num_ref_frames_in_pic_order_cnt_cycle", g(e, 0));
              for (
                var T = 0;
                T < _.get("num_ref_frames_in_pic_order_cnt_cycle");
                T++
              )
                _.put("num_ref_frames_in_pic_order_cnt_cycle", y(e, 0));
            }
            return (
              _.put("num_ref_frames", g(e, 0)),
              _.put("gaps_in_frame_num_value_allowed_flag", h(e, 1)),
              _.put("pic_width_in_mbs_minus1", g(e, 0)),
              _.put("pic_height_in_map_units_minus1", g(e, 0)),
              _.put("frame_mbs_only_flag", h(e, 1)),
              0 === _.get("frame_mbs_only_flag") &&
                _.put("mb_adaptive_frame_field_flag", h(e, 1)),
              _.put("direct_8x8_interence_flag", h(e, 1)),
              _.put("frame_cropping_flag", h(e, 1)),
              1 === _.get("frame_cropping_flag") &&
                (_.put("frame_cropping_rect_left_offset", g(e, 0)),
                _.put("frame_cropping_rect_right_offset", g(e, 0)),
                _.put("frame_cropping_rect_top_offset", g(e, 0)),
                _.put("frame_cropping_rect_bottom_offset", g(e, 0))),
              _.put("vui_parameters_present_flag", h(e, 1)),
              _.get("vui_parameters_present_flag") &&
                (function (e) {
                  _.put("aspect_ratio_info_present_flag", h(e, 1)),
                    _.get("aspect_ratio_info_present_flag") &&
                      (_.put("aspect_ratio_idc", h(e, u)),
                      _.get("aspect_ratio_idc") === p &&
                        (m(e),
                        _.put("sar_width", h(e, f)),
                        m(e),
                        _.put("sar_height", h(e, f)))),
                    _.put("overscan_info_present_flag", h(e, 1)),
                    _.get("overscan_info_present_flag") &&
                      _.put("overscan_appropriate_flag", h(e, 1)),
                    _.put("video_signal_type_present_flag", h(e, 1)),
                    _.get("video_signal_type_present_flag") &&
                      (_.put("video_format", h(e, n)),
                      _.put("video_full_range_flag", h(e, 1)),
                      _.put("colour_description_present_flag", h(e, 1)),
                      _.get("colour_description_present_flag") &&
                        (_.put("colour_primaries", h(e, u)),
                        _.put("transfer_characteristics", h(e, u)),
                        _.put("matrix_coefficients", h(e, u)))),
                    _.put("chroma_loc_info_present_flag", h(e, 1)),
                    _.get("chroma_loc_info_present_flag") &&
                      (_.put("chroma_sample_loc_type_top_field", g(e, 0)),
                      _.put("chroma_sample_loc_type_bottom_field", g(e, 0))),
                    _.put("timing_info_present_flag", h(e, 1)),
                    _.get("timing_info_present_flag") &&
                      (_.put("num_units_in_tick", h(e, s)),
                      _.put("time_scale", h(e, s)),
                      _.put("fixed_frame_rate_flag", h(e, 1))),
                    _.put("nal_hrd_parameters_present_flag", h(e, 1)),
                    _.get("nal_hrd_parameters_present_flag") && v(e),
                    _.put("vcl_hrd_parameters_present_flag", h(e, 1)),
                    _.get("vcl_hrd_parameters_present_flag") && v(e),
                    (_.get("nal_hrd_parameters_present_flag") ||
                      _.get("vcl_hrd_parameters_present_flag")) &&
                      _.put("low_delay_hrd_flag", h(e, 1)),
                    _.put("pic_struct_present_flag", h(e, 1)),
                    _.put("bitstream_restriction_flag", h(e, 1)),
                    _.get("bitstream_restriction_flag") &&
                      (_.put(
                        "motion_vectors_over_pic_boundaries_flag",
                        h(e, 1)
                      ),
                      _.put("max_bytes_per_pic_denom", g(e, 0)),
                      _.put("max_bits_per_mb_denom", g(e, 0)));
                })(e),
              !0
            );
          },
          getSizeInfo: function () {
            var e = 0,
              t = 0;
            0 === _.get("chroma_format_idc")
              ? (e = t = 0)
              : 1 === _.get("chroma_format_idc")
              ? (e = t = r)
              : _.get("chroma_format_idc") === r
              ? ((e = r), (t = 1))
              : _.get("chroma_format_idc") === n &&
                (0 === _.get("separate_colour_plane_flag")
                  ? (e = t = 1)
                  : 1 === _.get("separate_colour_plane_flag") && (e = t = 0));
            var i = _.get("pic_width_in_mbs_minus1") + 1,
              a = _.get("pic_height_in_map_units_minus1") + 1,
              o = (r - _.get("frame_mbs_only_flag")) * a,
              u = 0,
              s = 0,
              p = 0,
              l = 0;
            1 === _.get("frame_cropping_flag") &&
              ((u = _.get("frame_cropping_rect_left_offset")),
              (s = _.get("frame_cropping_rect_right_offset")),
              (p = _.get("frame_cropping_rect_top_offset")),
              (l = _.get("frame_cropping_rect_bottom_offset")));
            var c = i * f * (o * f);
            return {
              width: i * f - e * (u + s),
              height: o * f - t * (r - _.get("frame_mbs_only_flag")) * (p + l),
              decodeSize: c,
            };
          },
          getSpsValue: function (e) {
            return _.get(e);
          },
          getCodecInfo: function () {
            return (
              _.get("profile_idc").toString(f) +
              (_.get("profile_compatibility") < 15
                ? "0" + _.get("profile_compatibility").toString(f)
                : _.get("profile_compatibility").toString(f)) +
              _.get("level_idc").toString(f)
            );
          },
        }),
        new c()
      );
    }
  },
  function (e, t) {
    (e.exports = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t) {
    function r(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    (e.exports = function (e, t, n) {
      return (
        t && r(e.prototype, t),
        n && r(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var i = n(r(6));
    if ("undefined" == typeof a) var a = {};
    a.MD5 = function (e) {
      function t(e) {
        var t = (e >>> 0).toString(16);
        return "00000000".substr(0, 8 - t.length) + t;
      }
      function r(e, t, r) {
        return (e & t) | (~e & r);
      }
      function n(e, t, r) {
        return (r & e) | (~r & t);
      }
      function a(e, t, r) {
        return e ^ t ^ r;
      }
      function o(e, t, r) {
        return t ^ (e | ~r);
      }
      function u(e, t) {
        return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
      }
      function f(e) {
        for (var t = [], r = 0; r < e.length; r++)
          if (e.charCodeAt(r) <= 127) t.push(e.charCodeAt(r));
          else
            for (
              var n = encodeURIComponent(e.charAt(r)).substr(1).split("%"),
                i = 0;
              i < n.length;
              i++
            )
              t.push(parseInt(n[i], 16));
        return t;
      }
      function s(e) {
        for (var t = new Array(e.length), r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      var p = null,
        l = null;
      function _(e, t) {
        return 4294967295 & (e + t);
      }
      return (
        "string" == typeof e
          ? (p = f(e))
          : e.constructor == Array
          ? 0 === e.length
            ? (p = e)
            : "string" == typeof e[0]
            ? (p = (function (e) {
                for (var t = [], r = 0; r < e.length; r++)
                  t = t.concat(f(e[r]));
                return t;
              })(e))
            : "number" == typeof e[0]
            ? (p = e)
            : (l = (0, i.default)(e[0]))
          : "undefined" != typeof ArrayBuffer
          ? e instanceof ArrayBuffer
            ? (p = s(new Uint8Array(e)))
            : e instanceof Uint8Array || e instanceof Int8Array
            ? (p = s(e))
            : e instanceof Uint32Array ||
              e instanceof Int32Array ||
              e instanceof Uint16Array ||
              e instanceof Int16Array ||
              e instanceof Float32Array ||
              e instanceof Float64Array
            ? (p = s(new Uint8Array(e.buffer)))
            : (l = (0, i.default)(e))
          : (l = (0, i.default)(e)),
        l && alert("MD5 type mismatch, cannot process " + l),
        (function () {
          function e(e, t, r, n) {
            var i,
              a,
              o = v;
            (v = y),
              (y = g),
              (g = _(
                g,
                (((i = _(h, _(e, _(t, r)))) << (a = n)) & 4294967295) |
                  (i >>> (32 - a))
              )),
              (h = o);
          }
          var i = p.length;
          p.push(128);
          var f = p.length % 64;
          if (f > 56) {
            for (var s = 0; s < 64 - f; s++) p.push(0);
            f = p.length % 64;
          }
          for (s = 0; s < 56 - f; s++) p.push(0);
          p = p.concat(
            (function (e) {
              for (var t = [], r = 0; r < 8; r++) t.push(255 & e), (e >>>= 8);
              return t;
            })(8 * i)
          );
          var l = 1732584193,
            c = 4023233417,
            d = 2562383102,
            m = 271733878,
            h = 0,
            g = 0,
            y = 0,
            v = 0;
          for (s = 0; s < p.length / 64; s++) {
            h = l;
            var b = 64 * s;
            e(r((g = c), (y = d), (v = m)), 3614090360, u(p, b), 7),
              e(r(g, y, v), 3905402710, u(p, b + 4), 12),
              e(r(g, y, v), 606105819, u(p, b + 8), 17),
              e(r(g, y, v), 3250441966, u(p, b + 12), 22),
              e(r(g, y, v), 4118548399, u(p, b + 16), 7),
              e(r(g, y, v), 1200080426, u(p, b + 20), 12),
              e(r(g, y, v), 2821735955, u(p, b + 24), 17),
              e(r(g, y, v), 4249261313, u(p, b + 28), 22),
              e(r(g, y, v), 1770035416, u(p, b + 32), 7),
              e(r(g, y, v), 2336552879, u(p, b + 36), 12),
              e(r(g, y, v), 4294925233, u(p, b + 40), 17),
              e(r(g, y, v), 2304563134, u(p, b + 44), 22),
              e(r(g, y, v), 1804603682, u(p, b + 48), 7),
              e(r(g, y, v), 4254626195, u(p, b + 52), 12),
              e(r(g, y, v), 2792965006, u(p, b + 56), 17),
              e(r(g, y, v), 1236535329, u(p, b + 60), 22),
              e(n(g, y, v), 4129170786, u(p, b + 4), 5),
              e(n(g, y, v), 3225465664, u(p, b + 24), 9),
              e(n(g, y, v), 643717713, u(p, b + 44), 14),
              e(n(g, y, v), 3921069994, u(p, b), 20),
              e(n(g, y, v), 3593408605, u(p, b + 20), 5),
              e(n(g, y, v), 38016083, u(p, b + 40), 9),
              e(n(g, y, v), 3634488961, u(p, b + 60), 14),
              e(n(g, y, v), 3889429448, u(p, b + 16), 20),
              e(n(g, y, v), 568446438, u(p, b + 36), 5),
              e(n(g, y, v), 3275163606, u(p, b + 56), 9),
              e(n(g, y, v), 4107603335, u(p, b + 12), 14),
              e(n(g, y, v), 1163531501, u(p, b + 32), 20),
              e(n(g, y, v), 2850285829, u(p, b + 52), 5),
              e(n(g, y, v), 4243563512, u(p, b + 8), 9),
              e(n(g, y, v), 1735328473, u(p, b + 28), 14),
              e(n(g, y, v), 2368359562, u(p, b + 48), 20),
              e(a(g, y, v), 4294588738, u(p, b + 20), 4),
              e(a(g, y, v), 2272392833, u(p, b + 32), 11),
              e(a(g, y, v), 1839030562, u(p, b + 44), 16),
              e(a(g, y, v), 4259657740, u(p, b + 56), 23),
              e(a(g, y, v), 2763975236, u(p, b + 4), 4),
              e(a(g, y, v), 1272893353, u(p, b + 16), 11),
              e(a(g, y, v), 4139469664, u(p, b + 28), 16),
              e(a(g, y, v), 3200236656, u(p, b + 40), 23),
              e(a(g, y, v), 681279174, u(p, b + 52), 4),
              e(a(g, y, v), 3936430074, u(p, b), 11),
              e(a(g, y, v), 3572445317, u(p, b + 12), 16),
              e(a(g, y, v), 76029189, u(p, b + 24), 23),
              e(a(g, y, v), 3654602809, u(p, b + 36), 4),
              e(a(g, y, v), 3873151461, u(p, b + 48), 11),
              e(a(g, y, v), 530742520, u(p, b + 60), 16),
              e(a(g, y, v), 3299628645, u(p, b + 8), 23),
              e(o(g, y, v), 4096336452, u(p, b), 6),
              e(o(g, y, v), 1126891415, u(p, b + 28), 10),
              e(o(g, y, v), 2878612391, u(p, b + 56), 15),
              e(o(g, y, v), 4237533241, u(p, b + 20), 21),
              e(o(g, y, v), 1700485571, u(p, b + 48), 6),
              e(o(g, y, v), 2399980690, u(p, b + 12), 10),
              e(o(g, y, v), 4293915773, u(p, b + 40), 15),
              e(o(g, y, v), 2240044497, u(p, b + 4), 21),
              e(o(g, y, v), 1873313359, u(p, b + 32), 6),
              e(o(g, y, v), 4264355552, u(p, b + 60), 10),
              e(o(g, y, v), 2734768916, u(p, b + 24), 15),
              e(o(g, y, v), 1309151649, u(p, b + 52), 21),
              e(o(g, y, v), 4149444226, u(p, b + 16), 6),
              e(o(g, y, v), 3174756917, u(p, b + 44), 10),
              e(o(g, y, v), 718787259, u(p, b + 8), 15),
              e(o(g, y, v), 3951481745, u(p, b + 36), 21),
              (l = _(l, h)),
              (c = _(c, g)),
              (d = _(d, y)),
              (m = _(m, v));
          }
          return (function (e, r, n, i) {
            for (var a = "", o = 0, u = 0, f = 3; f >= 0; f--)
              (o = 255 & (u = arguments[f])),
                (o <<= 8),
                (o |= 255 & (u >>>= 8)),
                (o <<= 8),
                (o |= 255 & (u >>>= 8)),
                (o <<= 8),
                (a += t((o |= u >>>= 8)));
            return a;
          })(m, d, c, l).toUpperCase();
        })()
      );
    };
    var o = function (e) {
      return a.MD5(e);
    };
    t.default = o;
  },
  function (e, t) {
    function r(t) {
      return (
        (e.exports = r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        r(t)
      );
    }
    (e.exports = r),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = function () {
      this.map = {};
    };
    n.prototype = {
      put: function (e, t) {
        this.map[e] = t;
      },
      get: function (e) {
        return this.map[e];
      },
      containsKey: function (e) {
        return e in this.map;
      },
      containsValue: function (e) {
        for (var t in this.map) if (this.map[t] === e) return !0;
        return !1;
      },
      isEmpty: function (e) {
        return 0 === this.size();
      },
      clear: function () {
        for (var e in this.map) delete this.map[e];
      },
      remove: function (e) {
        delete this.map[e];
      },
      keys: function () {
        var e = new Array();
        for (var t in this.map) e.push(t);
        return e;
      },
      values: function () {
        var e = new Array();
        for (var t in this.map) e.push(this.map[t]);
        return e;
      },
      size: function () {
        var e = 0;
        for (var t in this.map) e++;
        return e;
      },
    };
    var i = n;
    t.default = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = r(1);
    var i = function () {
      var e,
        t,
        r,
        i,
        a,
        o,
        u,
        f,
        s,
        p,
        l,
        _,
        c,
        d,
        m,
        h = !1,
        g = 0;
      function y() {
        y.prototype.setIsFirstFrame(!1);
      }
      return (
        (y.prototype = {
          init: function () {
            n.debug.log("H264 Decoder init");
          },
          setOutputSize: function (e) {
            if (a !== 2 * e) {
              a = 2 * e;
              var t = Module._malloc(1),
                r = new Uint8Array(Module.HEAPU8.buffer, t, 1);
              Module._DECODE_GetFreePort(r.byteOffset),
                (g = r[0]),
                (r = null),
                Module._free(t),
                Module._DECODE_Init(g),
                (o = Module._malloc(5242880)),
                (u = new Uint8Array(Module.HEAPU8.buffer, o, 5242880));
              var n = 2 * e;
              (f = Module._malloc(n)),
                (s = new Uint8Array(Module.HEAPU8.buffer, f, n)),
                (p = Module._malloc(4)),
                (l = new Uint8Array(Module.HEAPU8.buffer, p, 4)),
                (_ = Module._malloc(40)),
                (c = new Uint8Array(Module.HEAPU8.buffer, _, 40));
            }
          },
          decode: function (n, a) {
            (e = Date.now()),
              u.set(n),
              Module._DECODE_InputOneFrame(
                g,
                u.byteOffset,
                n.length,
                s.byteOffset,
                l.byteOffset,
                c.byteOffset
              ),
              (i = c[16] + (c[17] << 8)),
              (r = c[18] + (c[19] << 8));
            var o = (i * r * 3) / 2;
            return (
              (m = null),
              (d = null),
              (m = new ArrayBuffer(o)),
              (d = new Uint8Array(m)).set(
                Module.HEAPU8.subarray(s.byteOffset, s.byteOffset + o)
              ),
              (t = Date.now() - e),
              y.prototype.isFirstFrame()
                ? i > 0 && r > 0
                  ? ((e = Date.now()),
                    {
                      data: d,
                      option: { ylen: i, height: r, beforeDecoding: e },
                      width: i,
                      height: r,
                      codecType: "h264",
                      decodingTime: t,
                      frameType: a,
                    })
                  : void 0
                : (y.prototype.setIsFirstFrame(!0), { firstFrame: !0 })
            );
          },
          setIsFirstFrame: function (e) {
            h = e;
          },
          isFirstFrame: function () {
            return h;
          },
          free: function () {
            Module._DECODE_Stop(g),
              (u = null),
              Module._free(o),
              (s = null),
              Module._free(f),
              (l = null),
              Module._free(p),
              (c = null),
              Module._free(_),
              (m = null),
              (d = null);
          },
        }),
        new y()
      );
    };
    t.default = i;
  },
]);
