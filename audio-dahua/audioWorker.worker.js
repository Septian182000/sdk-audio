!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
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
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
              o = 0;
            for (n = 0; n < r && !(e < t[o]); n++) o++;
            return n;
          },
          r = function (r, n) {
            var o = 0,
              i = 0,
              a = 0,
              u = 0,
              s = 0;
            return (
              (i = t((o = r > 0 ? r : 8191 & -r), e, 15) - 6),
              (a = i + ((n >> 6) & 15) - 13),
              (u =
                ((0 === o ? 32 : i >= 0 ? o >> i : o << -i) *
                  (n & parseInt("077", 8)) +
                  48) >>
                4),
              (s = a >= 0 ? (u << a) & 32767 : u >> -a),
              (r ^ n) < 0 ? -s : s
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
          (this.quantize = function (r, n, o, i) {
            var a = 0,
              u = 0,
              s = 0;
            return (
              (a = Math.abs(r)),
              (u = t(a >> 1, e, 15)),
              (s = t((u << 7) + (((a << 7) >> u) & 127) - (n >> 2), o, i)),
              r < 0 ? 1 + (i << 1) - s : 0 === s ? 1 + (i << 1) : s
            );
          }),
          (this.reconstruct = function (e, t, r) {
            var n = 0,
              o = 0;
            return (n = t + (r >> 2)) < 0
              ? e
                ? -32768
                : 0
              : ((o = ((128 + (127 & n)) << 7) >> (14 - ((n >> 7) & 15))),
                e ? o - 32768 : o);
          }),
          (this.update = function (r, n, o, i, a, u, s, f) {
            var l = 0,
              c = 0,
              p = 0,
              d = 0,
              h = 0,
              y = 0,
              m = 0,
              v = 0,
              g = 0,
              _ = 0,
              E = 0,
              x = 0,
              b = 0,
              T = 0;
            if (
              ((T = s < 0 ? 1 : 0),
              (c = 32767 & a),
              (g = f.yl >> 15),
              (x = (f.yl >> 10) & 31),
              (b = (32 + x) << g),
              (E = ((_ = g > 9 ? 31744 : b) + (_ >> 1)) >> 1),
              (v = 0 === f.td ? 0 : c <= E ? 0 : 1),
              (f.yu = n + ((o - n) >> 5)),
              f.yu < 544 ? (f.yu = 544) : f.yu > 5120 && (f.yu = 5120),
              (f.yl += f.yu + (-f.yl >> 6)),
              1 === v)
            )
              (f.pp[0] = 0),
                (f.pp[1] = 0),
                (f.zp[0] = 0),
                (f.zp[1] = 0),
                (f.zp[2] = 0),
                (f.zp[3] = 0),
                (f.zp[4] = 0),
                (f.zp[5] = 0),
                (d = 0);
            else
              for (
                y = T ^ f.pk[0],
                  d = f.pp[1] - (f.pp[1] >> 7),
                  0 !== s &&
                    ((m = y ? f.pp[0] : -f.pp[0]) < -8191
                      ? (d -= 256)
                      : (d += m > 8191 ? 255 : m >> 5),
                    T ^ f.pk[1]
                      ? d <= -12160
                        ? (d = -12288)
                        : d >= 12416
                        ? (d = 12288)
                        : (d -= 128)
                      : d <= -12416
                      ? (d = -12288)
                      : d >= 12160
                      ? (d = 12288)
                      : (d += 128)),
                  f.pp[1] = d,
                  f.pp[0] -= f.pp[0] >> 8,
                  0 !== s && (0 === y ? (f.pp[0] += 192) : (f.pp[0] -= 192)),
                  h = 15360 - d,
                  f.pp[0] < -h ? (f.pp[0] = -h) : f.pp[0] > h && (f.pp[0] = h),
                  l = 0;
                l < 6;
                l++
              )
                (f.zp[l] -= 5 === r ? f.zp[l] >> 9 : f.zp[l] >> 8),
                  32767 & a &&
                    ((a ^ f.dq[l]) >= 0 ? (f.zp[l] += 128) : (f.zp[l] -= 128));
            for (l = 5; l > 0; l--) f.dq[l] = f.dq[l - 1];
            return (
              0 === c
                ? (f.dq[0] = a >= 0 ? 32 : 64544)
                : ((p = t(c, e, 15)),
                  (f.dq[0] =
                    a >= 0
                      ? (p << 6) + ((c << 6) >> p)
                      : (p << 6) + ((c << 6) >> p) - 1024)),
              (f.sr[1] = f.sr[0]),
              0 === u
                ? (f.sr[0] = 32)
                : u > 0
                ? ((p = t(u, e, 15)), (f.sr[0] = (p << 6) + ((u << 6) >> p)))
                : u > -32768
                ? ((p = t((c = -u), e, 15)),
                  (f.sr[0] = (p << 6) + ((c << 6) >> p) - 1024))
                : (f.sr[0] = 64544),
              (f.pk[1] = f.pk[0]),
              (f.pk[0] = T),
              (f.td = 1 === v ? 0 : d < -11776 ? 1 : 0),
              (f.dms += (i - f.dms) >> 5),
              (f.dml += ((i << 2) - f.dml) >> 7),
              1 === v
                ? (f.ppp = 256)
                : n < 1536
                ? (f.ppp += (512 - f.ppp) >> 4)
                : 1 === f.td
                ? (f.ppp += (512 - f.ppp) >> 4)
                : Math.abs((f.dms << 2) - f.dml) >= f.dml >> 3
                ? (f.ppp += (512 - f.ppp) >> 4)
                : (f.ppp += -f.ppp >> 4),
              f
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
            push: function (e, n, o, i, a, u) {
              var s = new VideoBufferNode(e, n, o, i, a, u);
              return (
                this._length > 0
                  ? ((this.tail.next = s),
                    (s.previous = this.tail),
                    (this.tail = s))
                  : ((this.head = s), (this.tail = s)),
                (this._length += 1),
                null !== r && this._length >= t && r(),
                s
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
      (t.formAuthorizationResponse = function (e, t, r, n, o, i) {
        var u = null,
          s = null;
        return (
          (u = (0, a.default)(e + ":" + n + ":" + t).toLowerCase()),
          (s = (0, a.default)(i + ":" + r).toLowerCase()),
          (0, a.default)(u + ":" + o + ":" + s).toLowerCase()
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
    var o = n(r(4)),
      i = n(r(5)),
      a = n(r(6)),
      u = {
        log: function () {},
        error: function () {},
        count: function () {},
        info: function () {},
      };
    t.debug = u;
    var s = (function () {
      function e() {}
      return (
        (e.createFromElementId = function (t) {
          for (
            var r = document.getElementById(t), n = "", o = r.firstChild;
            o;

          )
            3 === o.nodeType && (n += o.textContent), (o = o.nextSibling);
          var i = new e();
          return (i.type = r.type), (i.source = n), i;
        }),
        (e.createFromSource = function (t, r) {
          var n = new e();
          return (n.type = t), (n.source = r), n;
        }),
        e
      );
    })();
    t.Script = s;
    var f = (function () {
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
    t.Shader = f;
    var l = (function () {
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
    t.Program = l;
    var c = (function () {
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
            var o = this.gl;
            e || (e = [o.TEXTURE0, o.TEXTURE1, o.TEXTURE2]),
              o.activeTexture(e[t]),
              o.bindTexture(o.TEXTURE_2D, this.texture),
              o.uniform1i(o.getUniformLocation(r.program, n), t);
          },
        }),
        t
      );
    })();
    t.Texture = c;
    var p = (function () {
      function e() {
        (0, o.default)(this, e), (this.first = null), (this.size = 0);
      }
      return (
        (0, i.default)(e, [
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
    t.Queue = p;
  },
  function (e, t, r) {
    "use strict";
    var n = r(0)(r(3));
    importScripts("/module/libDecodeSDK.js"),
      addEventListener(
        "message",
        function (e) {
          var t = e.data;
          switch (t.type) {
            case "sdpInfo":
              i = t.data.sdpInfo;
              t.data.aacCodecInfo;
              !(function (e, t) {
                for (var r = e, i = 0; i < e.length; i++)
                  if (
                    -1 === r[i].trackID.search("trackID=t") &&
                    ((a = null), "recvonly" === r[i].TalkTransType)
                  ) {
                    switch (r[i].codecName) {
                      case "G.726-16":
                      case "G.726-24":
                      case "G.726-32":
                      case "G.726-40":
                      case "mpeg4-generic":
                      case "G.723":
                      case "G.729":
                      case "mpeg2":
                      case "G.722.1":
                      case "PCM":
                      case "G.711A":
                      case "G.711Mu":
                        (a = new n.default(r[i].codecName)).setCodecInfo(r[i]);
                    }
                    var u = r[i].RtpInterlevedID;
                    if (((o[u] = a), null != a)) return;
                  }
              })(i, 0, t.data.mp4Codec);
              break;
            case "MediaData":
              var r = t.data.rtspInterleave[1];
              if ("undefined" !== typeof o[r]) {
                var f = t.data,
                  l = o[r].parseRTPData(f.rtspInterleave, f.payload, u, t.info);
                null !== l &&
                  "undefined" !== typeof l &&
                  null !== l.streamData &&
                  "undefined" !== typeof l.streamData &&
                  (l.streamData = null),
                  s("render", l);
              }
          }
        },
        !1
      ),
      (Module.onRuntimeInitialized = function () {
        Module._DECODE_Init(), s("WorkerReady");
      });
    var o = [],
      i = null,
      a = null,
      u = !1;
    function s(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = {
          type: e,
          codec: t.codec,
          audio_type: t.audio_type,
          data: t.bufferData,
          rtpTimeStamp: t.rtpTimeStamp,
          samplingRate: t.samplingRate || 8e3,
        };
      if ("render" === e) postMessage(r, [t.bufferData.buffer]);
      else if ("backup" === e) {
        postMessage({ type: e, data: t });
      } else postMessage(r);
    }
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var o = r(1),
      i = n(r(8)),
      a = function (e, t) {
        var r = null,
          n = null,
          a = 0,
          u = (new Uint8Array(7), { seconds: null, useconds: null });
        function s() {
          (this.decoder = new i.default()),
            this.decoder.init(1048576),
            (this.firstTime = 0),
            (this.lastMSW = 0);
        }
        return (
          (s.prototype = {
            parseRTPData: function (e, t, n, o) {
              var i,
                s = t[22];
              t[21],
                t[20],
                t.length,
                t.subarray(24 + s, t.length - 8).subarray(0, 2);
              var f =
                ((t[19] << 24) + (t[18] << 16) + (t[17] << 8) + t[16]) >>> 0;
              i = f >>> 26 === 0 ? "2000" : "20" + (f >> 26);
              var l =
                Date.UTC(
                  i,
                  ((f >> 22) & 15) - 1,
                  (f >> 17) & 31,
                  (f >> 12) & 31,
                  (f >> 6) & 63,
                  63 & f
                ) / 1e3;
              if (((l -= 28800), 0 === this.firstTime))
                (this.firstTime = l),
                  (this.lastMSW = 0),
                  (a = (t[21] << 8) + t[20]),
                  (u.seconds = l),
                  (u.useconds = 0);
              else {
                var c,
                  p = (t[21] << 8) + t[20];
                (c = p > a ? p - a : p + 65535 - a),
                  (this.lastMSW += c),
                  l > this.firstTime && (this.lastMSW -= 1e3),
                  (this.firstTime = l),
                  (u.seconds = l),
                  (u.useconds = this.lastMSW),
                  (a = p);
              }
              var d = this.decoder.decode(t);
              return (
                (r = d.samplingRate),
                {
                  codec: "AAC",
                  audio_type: o.audio_type,
                  bufferData: d.bufferData,
                  rtpTimeStamp: 1e3 * u.seconds + u.useconds,
                  samplingRate: r,
                }
              );
            },
            setCodecInfo: function (e) {
              o.debug.log("Set codec info. for AAC"),
                e.config,
                (n = e.bitrate),
                (r = e.ClockFreq);
            },
            getCodecInfo: function () {
              return { bitrate: n, clockFreq: r };
            },
          }),
          new s()
        );
      };
    t.default = a;
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
    var o = n(r(7));
    if ("undefined" == typeof i) var i = {};
    i.MD5 = function (e) {
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
      function i(e, t, r) {
        return e ^ t ^ r;
      }
      function a(e, t, r) {
        return t ^ (e | ~r);
      }
      function u(e, t) {
        return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
      }
      function s(e) {
        for (var t = [], r = 0; r < e.length; r++)
          if (e.charCodeAt(r) <= 127) t.push(e.charCodeAt(r));
          else
            for (
              var n = encodeURIComponent(e.charAt(r)).substr(1).split("%"),
                o = 0;
              o < n.length;
              o++
            )
              t.push(parseInt(n[o], 16));
        return t;
      }
      function f(e) {
        for (var t = new Array(e.length), r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      var l = null,
        c = null;
      function p(e, t) {
        return 4294967295 & (e + t);
      }
      return (
        "string" == typeof e
          ? (l = s(e))
          : e.constructor == Array
          ? 0 === e.length
            ? (l = e)
            : "string" == typeof e[0]
            ? (l = (function (e) {
                for (var t = [], r = 0; r < e.length; r++)
                  t = t.concat(s(e[r]));
                return t;
              })(e))
            : "number" == typeof e[0]
            ? (l = e)
            : (c = (0, o.default)(e[0]))
          : "undefined" != typeof ArrayBuffer
          ? e instanceof ArrayBuffer
            ? (l = f(new Uint8Array(e)))
            : e instanceof Uint8Array || e instanceof Int8Array
            ? (l = f(e))
            : e instanceof Uint32Array ||
              e instanceof Int32Array ||
              e instanceof Uint16Array ||
              e instanceof Int16Array ||
              e instanceof Float32Array ||
              e instanceof Float64Array
            ? (l = f(new Uint8Array(e.buffer)))
            : (c = (0, o.default)(e))
          : (c = (0, o.default)(e)),
        c && alert("MD5 type mismatch, cannot process " + c),
        (function () {
          function e(e, t, r, n) {
            var o,
              i,
              a = _;
            (_ = g),
              (g = v),
              (v = p(
                v,
                (((o = p(m, p(e, p(t, r)))) << (i = n)) & 4294967295) |
                  (o >>> (32 - i))
              )),
              (m = a);
          }
          var o = l.length;
          l.push(128);
          var s = l.length % 64;
          if (s > 56) {
            for (var f = 0; f < 64 - s; f++) l.push(0);
            s = l.length % 64;
          }
          for (f = 0; f < 56 - s; f++) l.push(0);
          l = l.concat(
            (function (e) {
              for (var t = [], r = 0; r < 8; r++) t.push(255 & e), (e >>>= 8);
              return t;
            })(8 * o)
          );
          var c = 1732584193,
            d = 4023233417,
            h = 2562383102,
            y = 271733878,
            m = 0,
            v = 0,
            g = 0,
            _ = 0;
          for (f = 0; f < l.length / 64; f++) {
            m = c;
            var E = 64 * f;
            e(r((v = d), (g = h), (_ = y)), 3614090360, u(l, E), 7),
              e(r(v, g, _), 3905402710, u(l, E + 4), 12),
              e(r(v, g, _), 606105819, u(l, E + 8), 17),
              e(r(v, g, _), 3250441966, u(l, E + 12), 22),
              e(r(v, g, _), 4118548399, u(l, E + 16), 7),
              e(r(v, g, _), 1200080426, u(l, E + 20), 12),
              e(r(v, g, _), 2821735955, u(l, E + 24), 17),
              e(r(v, g, _), 4249261313, u(l, E + 28), 22),
              e(r(v, g, _), 1770035416, u(l, E + 32), 7),
              e(r(v, g, _), 2336552879, u(l, E + 36), 12),
              e(r(v, g, _), 4294925233, u(l, E + 40), 17),
              e(r(v, g, _), 2304563134, u(l, E + 44), 22),
              e(r(v, g, _), 1804603682, u(l, E + 48), 7),
              e(r(v, g, _), 4254626195, u(l, E + 52), 12),
              e(r(v, g, _), 2792965006, u(l, E + 56), 17),
              e(r(v, g, _), 1236535329, u(l, E + 60), 22),
              e(n(v, g, _), 4129170786, u(l, E + 4), 5),
              e(n(v, g, _), 3225465664, u(l, E + 24), 9),
              e(n(v, g, _), 643717713, u(l, E + 44), 14),
              e(n(v, g, _), 3921069994, u(l, E), 20),
              e(n(v, g, _), 3593408605, u(l, E + 20), 5),
              e(n(v, g, _), 38016083, u(l, E + 40), 9),
              e(n(v, g, _), 3634488961, u(l, E + 60), 14),
              e(n(v, g, _), 3889429448, u(l, E + 16), 20),
              e(n(v, g, _), 568446438, u(l, E + 36), 5),
              e(n(v, g, _), 3275163606, u(l, E + 56), 9),
              e(n(v, g, _), 4107603335, u(l, E + 12), 14),
              e(n(v, g, _), 1163531501, u(l, E + 32), 20),
              e(n(v, g, _), 2850285829, u(l, E + 52), 5),
              e(n(v, g, _), 4243563512, u(l, E + 8), 9),
              e(n(v, g, _), 1735328473, u(l, E + 28), 14),
              e(n(v, g, _), 2368359562, u(l, E + 48), 20),
              e(i(v, g, _), 4294588738, u(l, E + 20), 4),
              e(i(v, g, _), 2272392833, u(l, E + 32), 11),
              e(i(v, g, _), 1839030562, u(l, E + 44), 16),
              e(i(v, g, _), 4259657740, u(l, E + 56), 23),
              e(i(v, g, _), 2763975236, u(l, E + 4), 4),
              e(i(v, g, _), 1272893353, u(l, E + 16), 11),
              e(i(v, g, _), 4139469664, u(l, E + 28), 16),
              e(i(v, g, _), 3200236656, u(l, E + 40), 23),
              e(i(v, g, _), 681279174, u(l, E + 52), 4),
              e(i(v, g, _), 3936430074, u(l, E), 11),
              e(i(v, g, _), 3572445317, u(l, E + 12), 16),
              e(i(v, g, _), 76029189, u(l, E + 24), 23),
              e(i(v, g, _), 3654602809, u(l, E + 36), 4),
              e(i(v, g, _), 3873151461, u(l, E + 48), 11),
              e(i(v, g, _), 530742520, u(l, E + 60), 16),
              e(i(v, g, _), 3299628645, u(l, E + 8), 23),
              e(a(v, g, _), 4096336452, u(l, E), 6),
              e(a(v, g, _), 1126891415, u(l, E + 28), 10),
              e(a(v, g, _), 2878612391, u(l, E + 56), 15),
              e(a(v, g, _), 4237533241, u(l, E + 20), 21),
              e(a(v, g, _), 1700485571, u(l, E + 48), 6),
              e(a(v, g, _), 2399980690, u(l, E + 12), 10),
              e(a(v, g, _), 4293915773, u(l, E + 40), 15),
              e(a(v, g, _), 2240044497, u(l, E + 4), 21),
              e(a(v, g, _), 1873313359, u(l, E + 32), 6),
              e(a(v, g, _), 4264355552, u(l, E + 60), 10),
              e(a(v, g, _), 2734768916, u(l, E + 24), 15),
              e(a(v, g, _), 1309151649, u(l, E + 52), 21),
              e(a(v, g, _), 4149444226, u(l, E + 16), 6),
              e(a(v, g, _), 3174756917, u(l, E + 44), 10),
              e(a(v, g, _), 718787259, u(l, E + 8), 15),
              e(a(v, g, _), 3951481745, u(l, E + 36), 21),
              (c = p(c, m)),
              (d = p(d, v)),
              (h = p(h, g)),
              (y = p(y, _));
          }
          return (function (e, r, n, o) {
            for (var i = "", a = 0, u = 0, s = 3; s >= 0; s--)
              (a = 255 & (u = arguments[s])),
                (a <<= 8),
                (a |= 255 & (u >>>= 8)),
                (a <<= 8),
                (a |= 255 & (u >>>= 8)),
                (a <<= 8),
                (i += t((a |= u >>>= 8)));
            return i;
          })(y, h, d, c).toUpperCase();
        })()
      );
    };
    var a = function (e) {
      return i.MD5(e);
    };
    t.default = a;
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
    var n = r(1);
    var o = function () {
      var e,
        t,
        r,
        o,
        i,
        a,
        u,
        s,
        f = !1,
        l = 0,
        c = null,
        p = null,
        d = null;
      function h() {
        h.prototype.setIsFirstFrame(!1);
      }
      return (
        (h.prototype = {
          init: function (f) {
            n.debug.log("audio Decoder init");
            var c = Module._malloc(1),
              p = new Uint8Array(Module.HEAPU8.buffer, c, 1);
            Module._DECODE_GetFreePort(p.byteOffset),
              (l = p[0]),
              (p = null),
              Module._free(c),
              Module._DECODE_Init(l),
              (e = Module._malloc(1048576)),
              (t = new Uint8Array(Module.HEAPU8.buffer, e, 1048576));
            var d = 2 * f;
            (r = Module._malloc(d)),
              (o = new Uint8Array(Module.HEAPU8.buffer, r, d)),
              (i = Module._malloc(4)),
              (a = new Uint8Array(Module.HEAPU8.buffer, i, 4)),
              (u = Module._malloc(40)),
              (s = new Uint8Array(Module.HEAPU8.buffer, u, 40));
          },
          decode: function (e) {
            if (
              null != t &&
              (t.set(e),
              !(
                Module._DECODE_InputOneFrame(
                  l,
                  t.byteOffset,
                  e.length,
                  o.byteOffset,
                  a.byteOffset,
                  s.byteOffset
                ) <= 0
              ))
            ) {
              s[4],
                s[5],
                s[6],
                s[7],
                s[30],
                s[31],
                s[32],
                s[33],
                s[34],
                s[35],
                s[36];
              var r = a[0] + (a[1] << 8) + (a[2] << 16) + (a[3] << 24),
                n = s[24] + (s[25] << 8) + (s[26] << 16) + (s[27] << 24);
              s[28],
                s[29],
                d != r &&
                  ((d = r),
                  (c = null),
                  (p = null),
                  (c = new ArrayBuffer(r)),
                  (p = new Uint8Array(c))),
                p.set(Module.HEAPU8.subarray(o.byteOffset, o.byteOffset + r));
              for (
                var i = new Int16Array(
                    p.buffer,
                    p.byteOffset,
                    p.byteLength / Int16Array.BYTES_PER_ELEMENT
                  ),
                  u = new Float32Array(i.length),
                  f = 0;
                f < i.length;
                f++
              )
                u[f] = i[f] / Math.pow(2, 15);
              var h = {};
              return (h.bufferData = u), (h.samplingRate = n), h;
            }
          },
          setIsFirstFrame: function (e) {
            f = e;
          },
          isFirstFrame: function () {
            return f;
          },
          free: function () {
            Module._DECODE_Stop(l),
              (t = null),
              Module._free(e),
              (o = null),
              Module._free(r),
              (a = null),
              Module._free(i),
              (s = null),
              Module._free(u),
              (jsBuf = null),
              (jsYuvData = null);
          },
        }),
        new h()
      );
    };
    t.default = o;
  },
]);
