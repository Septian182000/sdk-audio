!(function (e) {
  var t = {};
  function r(a) {
    if (t[a]) return t[a].exports;
    var n = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
    r((r.s = 3));
})([
  function (e, t, r) {
    "use strict";
    var a = r(1);
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
            var a = 0,
              n = 0;
            for (a = 0; a < r && !(e < t[n]); a++) n++;
            return a;
          },
          r = function (r, a) {
            var n = 0,
              i = 0,
              o = 0,
              u = 0,
              s = 0;
            return (
              (i = t((n = r > 0 ? r : 8191 & -r), e, 15) - 6),
              (o = i + ((a >> 6) & 15) - 13),
              (u =
                ((0 === n ? 32 : i >= 0 ? n >> i : n << -i) *
                  (a & parseInt("077", 8)) +
                  48) >>
                4),
              (s = o >= 0 ? (u << o) & 32767 : u >> -o),
              (r ^ a) < 0 ? -s : s
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
              a = 0;
            for (a = r(e.zp[0] >> 2, e.dq[0]), t = 1; t < 6; t++)
              a += r(e.zp[t] >> 2, e.dq[t]);
            return a;
          }),
          (this.predictorPole = function (e) {
            return r(e.pp[1] >> 2, e.sr[1]) + r(e.pp[0] >> 2, e.sr[0]);
          }),
          (this.stepSize = function (e) {
            var t = 0,
              r = 0,
              a = 0;
            return e.ppp >= 256
              ? e.yu
              : ((t = e.yl >> 6),
                (r = e.yu - t),
                (a = e.ppp >> 2),
                r > 0 ? (t += (r * a) >> 6) : r < 0 && (t += (r * a + 63) >> 6),
                t);
          }),
          (this.quantize = function (r, a, n, i) {
            var o = 0,
              u = 0,
              s = 0;
            return (
              (o = Math.abs(r)),
              (u = t(o >> 1, e, 15)),
              (s = t((u << 7) + (((o << 7) >> u) & 127) - (a >> 2), n, i)),
              r < 0 ? 1 + (i << 1) - s : 0 === s ? 1 + (i << 1) : s
            );
          }),
          (this.reconstruct = function (e, t, r) {
            var a = 0,
              n = 0;
            return (a = t + (r >> 2)) < 0
              ? e
                ? -32768
                : 0
              : ((n = ((128 + (127 & a)) << 7) >> (14 - ((a >> 7) & 15))),
                e ? n - 32768 : n);
          }),
          (this.update = function (r, a, n, i, o, u, s, f) {
            var l = 0,
              c = 0,
              p = 0,
              d = 0,
              m = 0,
              _ = 0,
              h = 0,
              g = 0,
              v = 0,
              y = 0,
              b = 0,
              D = 0,
              S = 0,
              w = 0;
            if (
              ((w = s < 0 ? 1 : 0),
              (c = 32767 & o),
              (v = f.yl >> 15),
              (D = (f.yl >> 10) & 31),
              (S = (32 + D) << v),
              (b = ((y = v > 9 ? 31744 : S) + (y >> 1)) >> 1),
              (g = 0 === f.td ? 0 : c <= b ? 0 : 1),
              (f.yu = a + ((n - a) >> 5)),
              f.yu < 544 ? (f.yu = 544) : f.yu > 5120 && (f.yu = 5120),
              (f.yl += f.yu + (-f.yl >> 6)),
              1 === g)
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
                _ = w ^ f.pk[0],
                  d = f.pp[1] - (f.pp[1] >> 7),
                  0 !== s &&
                    ((h = _ ? f.pp[0] : -f.pp[0]) < -8191
                      ? (d -= 256)
                      : (d += h > 8191 ? 255 : h >> 5),
                    w ^ f.pk[1]
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
                  0 !== s && (0 === _ ? (f.pp[0] += 192) : (f.pp[0] -= 192)),
                  m = 15360 - d,
                  f.pp[0] < -m ? (f.pp[0] = -m) : f.pp[0] > m && (f.pp[0] = m),
                  l = 0;
                l < 6;
                l++
              )
                (f.zp[l] -= 5 === r ? f.zp[l] >> 9 : f.zp[l] >> 8),
                  32767 & o &&
                    ((o ^ f.dq[l]) >= 0 ? (f.zp[l] += 128) : (f.zp[l] -= 128));
            for (l = 5; l > 0; l--) f.dq[l] = f.dq[l - 1];
            return (
              0 === c
                ? (f.dq[0] = o >= 0 ? 32 : 64544)
                : ((p = t(c, e, 15)),
                  (f.dq[0] =
                    o >= 0
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
              (f.pk[0] = w),
              (f.td = 1 === g ? 0 : d < -11776 ? 1 : 0),
              (f.dms += (i - f.dms) >> 5),
              (f.dml += ((i << 2) - f.dml) >> 7),
              1 === g
                ? (f.ppp = 256)
                : a < 1536
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
        function a() {
          (e = 360),
            (t = 240),
            (r = null),
            (this._length = 0),
            (this.head = null),
            (this.tail = null),
            (this.curIdx = 0);
        }
        return (
          (a.prototype = {
            push: function (e, a, n, i, o, u) {
              var s = new VideoBufferNode(e, a, n, i, o, u);
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
                a = 1;
              if (0 === r || e <= 0 || null === t)
                throw new Error("Failure: non-existent node in this list.");
              for (
                ;
                null !== t &&
                (t.timeStamp.timestamp !== e.timestamp ||
                  t.timeStamp.timestamp_usec !== e.timestamp_usec);

              )
                (t = t.next), a++;
              return r < a ? (t = null) : (this.curIdx = a), t;
            },
            findIFrame: function (e) {
              var t = this.head,
                r = this._length,
                a = 1;
              if (0 === r)
                throw new Error("Failure: non-existent node in this list.");
              for (; a < this.curIdx; ) (t = t.next), a++;
              if (!0 === e) for (; "I" !== t.frameType; ) (t = t.next), a++;
              else for (; "I" !== t.frameType; ) (t = t.previous), a--;
              return r < a ? (t = null) : (this.curIdx = a), t;
            },
          }),
          new a()
        );
      }),
      (t.debug = void 0),
      (t.formAuthorizationResponse = function (e, t, r, a, n, i) {
        var u = null,
          s = null;
        return (
          (u = (0, o.default)(e + ":" + a + ":" + t).toLowerCase()),
          (s = (0, o.default)(i + ":" + r).toLowerCase()),
          (0, o.default)(u + ":" + n + ":" + s).toLowerCase()
        );
      }),
      (t.stringToUint8Array = function (e) {
        for (
          var t = e.length, r = new Uint8Array(new ArrayBuffer(t)), a = 0;
          a < t;
          a++
        )
          r[a] = e.charCodeAt(a);
        return r;
      });
    var n = a(r(5)),
      i = a(r(6)),
      o = a(r(7)),
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
            var r = document.getElementById(t), a = "", n = r.firstChild;
            n;

          )
            3 === n.nodeType && (a += n.textContent), (n = n.nextSibling);
          var i = new e();
          return (i.type = r.type), (i.source = a), i;
        }),
        (e.createFromSource = function (t, r) {
          var a = new e();
          return (a.type = t), (a.source = r), a;
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
          bind: function (t, r, a) {
            var n = this.gl;
            e || (e = [n.TEXTURE0, n.TEXTURE1, n.TEXTURE2]),
              n.activeTexture(e[t]),
              n.bindTexture(n.TEXTURE_2D, this.texture),
              n.uniform1i(n.getUniformLocation(r.program, a), t);
          },
        }),
        t
      );
    })();
    t.Texture = c;
    var p = (function () {
      function e() {
        (0, n.default)(this, e), (this.first = null), (this.size = 0);
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
  function (e, t) {
    (e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var a = function () {
      this.map = {};
    };
    a.prototype = {
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
    var n = a;
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    var a = r(1),
      n = a(r(4)),
      i = a(r(11)),
      o = a(r(13)),
      u = a(r(15)),
      s = r(0);
    importScripts("/module/libDecodeSDK.js"),
      addEventListener(
        "message",
        function (e) {
          var t = e.data;
          switch (((b = e.data.channelId), t.type)) {
            case "sdpInfo":
              (l = t.data),
                0,
                (function (e) {
                  (f = []), (m = !1);
                  for (var t = 0; t < e.sdpInfo.length; t++)
                    (c = null),
                      (p = e.decodeMode),
                      "H264" === e.sdpInfo[t].codecName ||
                      ("RAW" === e.sdpInfo[t].codecName &&
                        e.mp4Codec &&
                        "H264" === e.mp4Codec.VideoCodec)
                        ? (null === h && (h = (0, n.default)()),
                          (c = h).init(e.decodeMode),
                          c.setFramerate(e.sdpInfo[t].Framerate),
                          c.setGovLength(e.govLength),
                          c.setCheckDelay(e.checkDelay),
                          c.setLessRate(e.lessRateCanvas))
                        : "H265" === e.sdpInfo[t].codecName ||
                          ("RAW" === e.sdpInfo[t].codecName &&
                            e.mp4Codec &&
                            "H265" === e.mp4Codec.VideoCodec)
                        ? (null === g && (g = (0, i.default)()),
                          (c = g).init(),
                          c.setFramerate(e.sdpInfo[t].Framerate),
                          c.setGovLength(e.govLength),
                          c.setCheckDelay(e.checkDelay))
                        : "JPEG" === e.sdpInfo[t].codecName
                        ? (null === v && (v = (0, o.default)()),
                          (c = v).init(),
                          c.setFramerate(e.sdpInfo[t].Framerate))
                        : "stream-assist-frame" === e.sdpInfo[t].codecName &&
                          (s.debug.log(e.sdpInfo[t]),
                          null === y && (y = (0, u.default)()),
                          (c = y).init()),
                      "undefined" !== typeof e.sdpInfo[t].Framerate &&
                        e.sdpInfo[t].Framerate,
                      null !== c &&
                        (c.setBufferfullCallback(S),
                        c.setReturnCallback(w),
                        (_ = e.sdpInfo[t].RtpInterlevedID),
                        (f[_] = c));
                })(l);
              break;
            case "MediaData":
              if (!0 === m) {
                !(function (e) {
                  (_ = e.data.rtspInterleave[1]),
                    "undefined" !== typeof f[_] &&
                      f[_].bufferingRtpData(
                        e.data.rtspInterleave,
                        e.data.header,
                        e.data.payload
                      );
                })(t);
                break;
              }
              (_ = t.data.rtspInterleave[1]),
                "undefined" !== typeof f[_] &&
                  f[_].parseRTPData(
                    t.data.rtspInterleave,
                    t.data.payload,
                    d,
                    D,
                    t.info,
                    t.channel
                  );
              break;
            case "initStartTime":
              f[_].initStartTime();
              break;
            case "end":
              T("end");
          }
        },
        !1
      ),
      (Module.onRuntimeInitialized = function () {
        Module._DECODE_Init(), T("WorkerReady");
      });
    var f = [],
      l = null,
      c = null,
      p = "",
      d = !1,
      m = !1,
      _ = -1,
      h = null,
      g = null,
      v = null,
      y = null,
      b = null,
      D = 1;
    function S() {
      f[_].findCurrent(), T("stepPlay", "BufferFull");
    }
    function w(e) {
      var t = null;
      if (null === e || "undefined" === typeof e) return (t = null), void null;
      if (
        ("undefined" !== typeof e.error
          ? (T("error", e.error), (t = e.decodedData))
          : ((t = e.decodedData),
            null !== e.decodeMode &&
              "undefined" !== typeof e.decodeMode &&
              ((p = e.decodeMode), T("setVideoTagMode", e.decodeMode))),
        null != e.decodeStart &&
          (T("DecodeStart", e.decodeStart), (p = e.decodeStart.decodeMode)),
        null !== t && "undefined" !== typeof t)
      )
        if (void 0 !== t.frameData && null !== t.frameData && "canvas" === p) {
          !0 === t.frameData.firstFrame &&
            T("firstFrame", t.frameData.firstFrame);
          var r = {
            bufferIdx: t.frameData.bufferIdx,
            width: t.frameData.width,
            height: t.frameData.height,
            codecType: t.frameData.codecType,
            frameType: t.frameData.frameType,
            timeStamp: null,
            frameIndex: t.frameData.frameIndex,
          };
          null !== t.timeStamp &&
            "undefined" !== typeof t.timeStamp &&
            (r.timeStamp = t.timeStamp),
            T("videoInfo", r),
            "undefined" !== typeof t.frameData.data &&
              null !== t.frameData.data &&
              T("canvasRender", t.frameData.data, t.frameData.option);
        } else if (null !== t.frameData && "video" === p) {
          null !== t.initSegmentData &&
            (T("codecInfo", t.codecInfo), T("initSegment", t.initSegmentData));
          r = {
            codecType: t.frameData.codecType,
            frameIndex: t.frameData.frameIndex,
          };
          "undefined" !== typeof t.frameData.width &&
            ((r.width = t.frameData.width), (r.height = t.frameData.height)),
            T("videoInfo", r),
            T("videoTimeStamp", t.timeStamp),
            t.frameData.length > 0 &&
              (T("mediaSample", t.mediaSample), T("videoRender", t.frameData));
        } else T("drop", e.decodedData);
      null != e.resolution && T("MSEResolutionChanged", e.resolution),
        null != e.ivsDraw && T("ivsDraw", e);
    }
    function T(e, t, r) {
      var a = { type: e, data: t, channelId: b, option: r };
      "canvasRender" === e ? postMessage(a, [t.buffer]) : postMessage(a);
    }
  },
  function (e, t, r) {
    "use strict";
    var a = r(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = r(0),
      i = a(r(9)),
      o = a(r(10)),
      u = a(r(2));
    function s() {
      var e = 7,
        t = 7,
        r = 2,
        a = 3,
        n = 4,
        i = 5,
        o = 8,
        s = 16,
        f = 32,
        l = 255,
        c = 0,
        p = null;
      function d() {
        (c = 0), (p = new u.default());
      }
      function m(r, n) {
        var i = n,
          o = (c + i) >> a;
        return (i = (c + n) & e), (r[o] >> (t - (i & t))) & 1;
      }
      function _(e, t) {
        var r = c >> a,
          n = 8 * (r + 1) - c;
        if (n < 8)
          for (var i = 0; i < 3; i++) {
            var o = e[r + i];
            (o =
              0 == i
                ? (o >> n) << n
                : 2 == i
                ? (o & (255 >> (8 - n))) | (1 << n)
                : 0),
              e.set([o], r + i);
          }
        else e.set([0], r), e.set([1], r + 1);
      }
      function h(e, t) {
        var r = 0;
        if (1 === t) r = m(e, 0);
        else for (var a = 0; a < t; a++) r = (r << 1) + m(e, a);
        return (c += t), r;
      }
      function g(e, t) {
        for (var a = 0, n = 0, i = t; c + i < 8 * e.length && !m(e, i++); ) a++;
        if (0 === a) return (c += 1), 0;
        n = 1 << a;
        for (var o = a - 1; o >= 0; o--, i++) n |= m(e, i) << o;
        return (c += a * r + 1), n - 1;
      }
      function v(e, t) {
        var a = g(e, t);
        return 1 & a ? (a + 1) / r : -a / r;
      }
      function y(e) {
        p.put("cpb_cnt_minus1", g(e, 0)),
          p.put("bit_rate_scale", h(e, n)),
          p.put("cpb_size_scale", h(e, n));
        for (
          var t = p.get("cpb_cnt_minus1"),
            r = new Array(t),
            a = new Array(t),
            o = new Array(t),
            u = 0;
          u <= t;
          u++
        )
          (r[u] = g(e, 0)), (a[u] = g(e, 0)), (o[u] = h(e, 1));
        p.put("bit_rate_value_minus1", r),
          p.put("cpb_size_value_minus1", a),
          p.put("cbr_flag", o),
          p.put("initial_cpb_removal_delay_length_minus1", h(e, i)),
          p.put("cpb_removal_delay_length_minus1", h(e, i)),
          p.put("dpb_output_delay_length_minus1", h(e, i)),
          p.put("time_offset_length", h(e, i));
      }
      return (
        (d.prototype = {
          parse: function (e) {
            (c = 0),
              p.clear(),
              p.put("forbidden_zero_bit", h(e, 1)),
              p.put("nal_ref_idc", h(e, r)),
              p.put("nal_unit_type", h(e, i)),
              p.put("profile_idc", h(e, o)),
              p.put("profile_compatibility", h(e, o)),
              p.put("level_idc", h(e, o)),
              p.put("seq_parameter_set_id", g(e, 0));
            var t = p.get("profile_idc");
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
              (p.put("chroma_format_idc", g(e, 0)),
              p.get("chroma_format_idc") === a &&
                p.put("separate_colour_plane_flag", h(e, 1)),
              p.put("bit_depth_luma_minus8", g(e, 0)),
              p.put("bit_depth_chroma_minus8", g(e, 0)),
              p.put("qpprime_y_zero_transform_bypass_flag", h(e, 1)),
              p.put("seq_scaling_matrix_present_flag", h(e, 1)),
              p.get("seq_scaling_matrix_present_flag"))
            ) {
              for (
                var n = p.get("chroma_format_idc") !== a ? o : 12,
                  u = new Array(n),
                  d = 0;
                d < n;
                d++
              )
                if (((u[d] = h(e, 1)), u[d]))
                  for (var m = d < 6 ? s : 64, b = 8, D = 8, S = 0; S < m; S++)
                    D && (D = (b + v(e, 0) + 256) % 256), (b = 0 === D ? b : D);
              p.put("seq_scaling_list_present_flag", u);
            }
            if (
              (p.put("log2_max_frame_num_minus4", g(e, 0)),
              p.put("pic_order_cnt_type", g(e, 0)),
              0 === p.get("pic_order_cnt_type"))
            )
              p.put("log2_max_pic_order_cnt_lsb_minus4", g(e, 0));
            else if (1 === p.get("pic_order_cnt_type")) {
              p.put("delta_pic_order_always_zero_flag", h(e, 1)),
                p.put("offset_for_non_ref_pic", v(e, 0)),
                p.put("offset_for_top_to_bottom_field", v(e, 0)),
                p.put("num_ref_frames_in_pic_order_cnt_cycle", g(e, 0));
              for (
                var w = 0;
                w < p.get("num_ref_frames_in_pic_order_cnt_cycle");
                w++
              )
                p.put("num_ref_frames_in_pic_order_cnt_cycle", v(e, 0));
            }
            return (
              p.put("num_ref_frames", g(e, 0)),
              p.put("gaps_in_frame_num_value_allowed_flag", h(e, 1)),
              p.put("pic_width_in_mbs_minus1", g(e, 0)),
              p.put("pic_height_in_map_units_minus1", g(e, 0)),
              p.put("frame_mbs_only_flag", h(e, 1)),
              0 === p.get("frame_mbs_only_flag") &&
                p.put("mb_adaptive_frame_field_flag", h(e, 1)),
              p.put("direct_8x8_interence_flag", h(e, 1)),
              p.put("frame_cropping_flag", h(e, 1)),
              1 === p.get("frame_cropping_flag") &&
                (p.put("frame_cropping_rect_left_offset", g(e, 0)),
                p.put("frame_cropping_rect_right_offset", g(e, 0)),
                p.put("frame_cropping_rect_top_offset", g(e, 0)),
                p.put("frame_cropping_rect_bottom_offset", g(e, 0))),
              p.put("vui_parameters_present_flag", h(e, 1)),
              p.get("vui_parameters_present_flag") &&
                (function (e) {
                  p.put("aspect_ratio_info_present_flag", h(e, 1)),
                    p.get("aspect_ratio_info_present_flag") &&
                      (p.put("aspect_ratio_idc", h(e, o)),
                      p.get("aspect_ratio_idc") === l &&
                        (_(e),
                        p.put("sar_width", h(e, s)),
                        _(e),
                        p.put("sar_height", h(e, s)))),
                    p.put("overscan_info_present_flag", h(e, 1)),
                    p.get("overscan_info_present_flag") &&
                      p.put("overscan_appropriate_flag", h(e, 1)),
                    p.put("video_signal_type_present_flag", h(e, 1)),
                    p.get("video_signal_type_present_flag") &&
                      (p.put("video_format", h(e, a)),
                      p.put("video_full_range_flag", h(e, 1)),
                      p.put("colour_description_present_flag", h(e, 1)),
                      p.get("colour_description_present_flag") &&
                        (p.put("colour_primaries", h(e, o)),
                        p.put("transfer_characteristics", h(e, o)),
                        p.put("matrix_coefficients", h(e, o)))),
                    p.put("chroma_loc_info_present_flag", h(e, 1)),
                    p.get("chroma_loc_info_present_flag") &&
                      (p.put("chroma_sample_loc_type_top_field", g(e, 0)),
                      p.put("chroma_sample_loc_type_bottom_field", g(e, 0))),
                    p.put("timing_info_present_flag", h(e, 1)),
                    p.get("timing_info_present_flag") &&
                      (p.put("num_units_in_tick", h(e, f)),
                      p.put("time_scale", h(e, f)),
                      p.put("fixed_frame_rate_flag", h(e, 1))),
                    p.put("nal_hrd_parameters_present_flag", h(e, 1)),
                    p.get("nal_hrd_parameters_present_flag") && y(e),
                    p.put("vcl_hrd_parameters_present_flag", h(e, 1)),
                    p.get("vcl_hrd_parameters_present_flag") && y(e),
                    (p.get("nal_hrd_parameters_present_flag") ||
                      p.get("vcl_hrd_parameters_present_flag")) &&
                      p.put("low_delay_hrd_flag", h(e, 1)),
                    p.put("pic_struct_present_flag", h(e, 1)),
                    p.put("bitstream_restriction_flag", h(e, 1)),
                    p.get("bitstream_restriction_flag") &&
                      (p.put(
                        "motion_vectors_over_pic_boundaries_flag",
                        h(e, 1)
                      ),
                      p.put("max_bytes_per_pic_denom", g(e, 0)),
                      p.put("max_bits_per_mb_denom", g(e, 0)));
                })(e),
              !0
            );
          },
          getSizeInfo: function () {
            var e = 0,
              t = 0;
            0 === p.get("chroma_format_idc")
              ? (e = t = 0)
              : 1 === p.get("chroma_format_idc")
              ? (e = t = r)
              : p.get("chroma_format_idc") === r
              ? ((e = r), (t = 1))
              : p.get("chroma_format_idc") === a &&
                (0 === p.get("separate_colour_plane_flag")
                  ? (e = t = 1)
                  : 1 === p.get("separate_colour_plane_flag") && (e = t = 0));
            var n = p.get("pic_width_in_mbs_minus1") + 1,
              i = p.get("pic_height_in_map_units_minus1") + 1,
              o = (r - p.get("frame_mbs_only_flag")) * i,
              u = 0,
              f = 0,
              l = 0,
              c = 0;
            1 === p.get("frame_cropping_flag") &&
              ((u = p.get("frame_cropping_rect_left_offset")),
              (f = p.get("frame_cropping_rect_right_offset")),
              (l = p.get("frame_cropping_rect_top_offset")),
              (c = p.get("frame_cropping_rect_bottom_offset")));
            var d = n * s * (o * s);
            return {
              width: n * s - e * (u + f),
              height: o * s - t * (r - p.get("frame_mbs_only_flag")) * (l + c),
              decodeSize: d,
            };
          },
          getSpsValue: function (e) {
            return p.get(e);
          },
          getCodecInfo: function () {
            return (
              p.get("profile_idc").toString(s) +
              (p.get("profile_compatibility") < 15
                ? "0" + p.get("profile_compatibility").toString(s)
                : p.get("profile_compatibility").toString(s)) +
              p.get("level_idc").toString(s)
            );
          },
        }),
        new d()
      );
    }
    var f = function () {
      var e = 0,
        t = 0,
        r = !1,
        a =
          (new Uint8Array(1048576),
          new Uint8Array(["0x00", "0x00", "0x00", "0x01"]),
          new s()),
        u = 0,
        f = null,
        l = null,
        c = 0,
        p = !1,
        d = 0,
        m = {
          frameData: null,
          timeStamp: null,
          initSegmentData: null,
          mediaSample: null,
          dropPercent: 0,
          dropCount: 0,
          codecInfo: "",
          playback: !1,
        },
        _ = { timestamp: null, timezone: null },
        h = {},
        g = null,
        v = null,
        y = !1,
        b = !1,
        D = 0,
        S = 0,
        w = 0,
        T = 0,
        C = !1,
        I = 0,
        M = null,
        x = null,
        A = "",
        F = null,
        k = 0,
        E = 0,
        P = { width: 0, height: 0 },
        U = null,
        L = !1;
      function O(e) {
        e !== A &&
          ("video" === e
            ? (A = "video")
            : ((A = "canvas"),
              (p = !0),
              (d = 0),
              (m.frameData.firstFrame = !0)));
      }
      function B(e, t, r) {
        var a = "";
        return (
          e * t > 921600 && !1 === r
            ? ((a = "video"), L && k > 0 && k <= 3 && (a = "canvas"))
            : (a = "canvas"),
          a
        );
      }
      function R() {
        (this.decoder = new i.default()),
          (this.firstDiffTime = 0),
          (this.firstTime = 0),
          (this.lastMSW = 0);
      }
      return (
        (R.prototype = {
          setReturnCallback: function (e) {
            this.rtpReturnCallback = e;
          },
          setBufferfullCallback: function (e) {
            null !== this.videoBufferList &&
              this.videoBufferList.setBufferFullCallback(e);
          },
          getVideoBuffer: function (e) {
            if (null !== this.videoBufferList)
              return this.videoBufferList.searchNodeAt(e);
          },
          clearBuffer: function () {
            null !== this.videoBufferList && this.videoBufferList.clear();
          },
          findCurrent: function () {
            null !== this.videoBufferList &&
              this.videoBufferList.searchTimestamp(this.getTimeStamp());
          },
          setTimeStamp: function (e) {
            this.timeData = e;
          },
          getTimeStamp: function () {
            return this.timeData;
          },
          ntohl: function (e) {
            return ((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) >>> 0;
          },
          appendBuffer: function (e, t, r) {
            if (r + t.length >= e.length) {
              var a = new Uint8Array(e.length + 1048576);
              a.set(e, 0), (e = a);
            }
            return e.set(t, r), e;
          },
          getFramerate: function () {
            return k;
          },
          setGovLength: function (e) {
            F = e;
          },
          getGovLength: function () {
            return F;
          },
          setDecodingTime: function (e) {
            this.decodingTime = e;
          },
          getDropPercent: function () {
            return 0;
          },
          getDropCount: function () {
            return 0;
          },
          initStartTime: function () {
            (this.firstDiffTime = 0), (this.calcGov = 0);
          },
          setCheckDelay: function (e) {
            this.checkDelay = e;
          },
          init: function (e) {
            (y = !1),
              (r = !1),
              (A = e),
              this.decoder.setIsFirstFrame(!1),
              (this.videoBufferList = new n.VideoBufferList()),
              (this.firstDiffTime = 0),
              (this.checkDelay = !0),
              (this.timeData = null);
          },
          setFramerate: function (e) {
            0 < e &&
              "undefined" !== typeof e &&
              ((k = e),
              null !== this.videoBufferList &&
                (this.videoBufferList.setMaxLength(6 * k),
                this.videoBufferList.setBUFFERING(4 * k)));
          },
          parseRTPData: function (i, s, F, k, L) {
            var R,
              z = null,
              j = {},
              N = ((s[19] << 24) + (s[18] << 16) + (s[17] << 8) + s[16]) >>> 0;
            R = N >> 26 === 0 ? "2000" : "20" + (N >> 26);
            var H =
              Date.UTC(
                R,
                ((N >> 22) & 15) - 1,
                (N >> 17) & 31,
                (N >> 12) & 31,
                (N >> 6) & 63,
                63 & N
              ) / 1e3;
            if (
              (L.timeStampmsw,
              (H += (new Date().getTimezoneOffset() / 60) * 3600),
              A ||
                253 !== s[4] ||
                ((U = 0 !== s[5]), (A = B(L.width, L.height, U))),
              "" !== A)
            ) {
              if (0 == this.firstTime)
                (this.firstTime = H),
                  (this.lastMSW = 0),
                  (x = (s[21] << 8) + s[20]),
                  (_ = { timestamp: this.firstTime, timestamp_usec: 0 });
              else {
                var G,
                  V = (s[21] << 8) + s[20];
                (G = V > x ? V - x : V + 65535 - x),
                  (this.lastMSW += G),
                  H > this.firstTime && (this.lastMSW -= 1e3),
                  (this.firstTime = H),
                  (_ = { timestamp: H, timestamp_usec: this.lastMSW }),
                  (x = V);
              }
              (0 !== this.getFramerate() &&
                "undefined" !== typeof this.getFramerate()) ||
                "undefined" === typeof this.getTimeStamp() ||
                (this.setFramerate(
                  Math.round(
                    1e3 /
                      ((_.timestamp - this.getTimeStamp().timestamp === 0
                        ? 0
                        : 1e3) +
                        (_.timestamp_usec - this.getTimeStamp().timestamp_usec))
                  )
                ),
                n.debug.log(
                  "setFramerate" +
                    Math.round(
                      1e3 /
                        ((_.timestamp - this.getTimeStamp().timestamp === 0
                          ? 0
                          : 1e3) +
                          (_.timestamp_usec -
                            this.getTimeStamp().timestamp_usec))
                    )
                )),
                this.setTimeStamp(_);
              for (
                var W = s[22],
                  X = s.subarray(24 + W, s.length - 8),
                  q = s.subarray(s.length - 8, s.length),
                  J = (q[7], q[6], q[5], q[4], []),
                  Y = 0;
                Y <= X.length;

              )
                if (0 == X[Y])
                  if (0 == X[Y + 1])
                    if (1 == X[Y + 2]) {
                      if (
                        (J.push(Y), 5 == (31 & X[(Y += 3)]) || 1 == (31 & X[Y]))
                      )
                        break;
                    } else 0 == X[Y + 2] ? Y++ : (Y += 3);
                  else Y += 2;
                else Y += 1;
              var Z = "P";
              e = (s[21] << 8) + s[20];
              var K = 0;
              for (Y = 0; Y < J.length; Y++)
                switch (
                  ((z = X.subarray(J[Y] + 3, J[Y + 1])), 31 & X[J[Y] + 3])
                ) {
                  default:
                    break;
                  case 1:
                    (Z = "P"), (K = J[Y] - 1);
                    break;
                  case 5:
                    (Z = "I"), (K = J[Y] - 1);
                    break;
                  case 28:
                    break;
                  case 7:
                    a.parse(z);
                    var Q = L;
                    (u = a.getSizeInfo().decodeSize),
                      (null !== f &&
                        null !== l &&
                        f.width === Q.width &&
                        f.height === Q.height &&
                        l === a.getCodecInfo()) ||
                        ((y = !1),
                        (f = Q),
                        (l = a.getCodecInfo()),
                        this.decoder.setIsFirstFrame(!1)),
                      (w = D = Q.width),
                      (T = S = Q.height),
                      (g = z),
                      (P.width == Q.width && P.height == Q.height) ||
                        (0 != P.width
                          ? ((P.width = Q.width),
                            (P.height = Q.height),
                            (j.resolution = P),
                            (j.resolution.decodeMode = B(P.width, P.height, U)),
                            (j.resolution.encodeMode = "h264"))
                          : ((P.width = Q.width),
                            (P.height = Q.height),
                            (j.decodeStart = P),
                            (j.decodeStart.decodeMode = A),
                            (j.decodeStart.encodeMode = "h264")));
                    break;
                  case 8:
                    v = z;
                    break;
                  case 6:
                  case 9:
                }
              if (
                (F &&
                  !1 === p &&
                  ((j.backupData = {
                    stream: new Uint8Array(X),
                    frameType: Z,
                    width: w,
                    height: T,
                    codecType: "h264",
                  }),
                  null !== _.timestamp && "undefined" !== typeof _.timestamp
                    ? (j.backupData.timestamp_usec = _.timestamp_usec)
                    : (j.backupData.timestamp = (e / 90).toFixed(0))),
                "canvas" === A)
              ) {
                var $ = 1e3 * _.timestamp + _.timestamp_usec;
                if (
                  (0 == this.firstDiffTime
                    ? ((c = 0),
                      (this.firstDiffTime = Date.now() - $),
                      n.debug.log("firstDiff: " + E))
                    : ($ - M < 0 &&
                        (this.firstDiffTime = c + (Date.now() - $).toFixed(0)),
                      (c = Date.now() - $ - this.firstDiffTime) < 0 &&
                        ((this.firstDiffTime = 0), (c = 0)),
                      c > 8e3 &&
                        ((j.error = { errorCode: 101 }),
                        this.rtpReturnCallback(j))),
                  (M = $),
                  t !== u &&
                    (this.decoder.free(),
                    (t = u),
                    this.decoder.setOutputSize(t)),
                  !0 === p && "P" === Z)
                )
                  return;
                !0 === p && (p = !1),
                  "I" === Z && d < 2 && d++,
                  (m.frameData = null),
                  (!0 === F && !0 === r) ||
                    (m.frameData = this.decoder.decode(s)),
                  (m.timeStamp = null),
                  (_ = null === _.timestamp ? this.getTimeStamp() : _),
                  (m.timeStamp = _);
              } else {
                var ee = null;
                if (
                  (y
                    ? (m.initSegmentData = null)
                    : ((y = !0),
                      (L = {
                        id: 1,
                        width: D,
                        height: S,
                        type: "video",
                        profileIdc: a.getSpsValue("profile_idc"),
                        profileCompatibility: 0,
                        levelIdc: a.getSpsValue("level_idc"),
                        sps: [g],
                        pps: [v],
                        timescale: 1e3,
                        fps: this.getFramerate(),
                      }),
                      n.debug.log(JSON.stringify(L)),
                      (m.initSegmentData = o.default.initSegment(L)),
                      (m.codecInfo = a.getCodecInfo())),
                  K || n.debug.log("11111111111111111111111111111111111111111"),
                  "I" === Z)
                ) {
                  var te = K;
                  ee = X.subarray(te, X.length);
                } else ee = X.subarray(K, X.length);
                var re = ee.length - 4;
                (ee[0] = (4278190080 & re) >>> 24),
                  (ee[1] = (16711680 & re) >>> 16),
                  (ee[2] = (65280 & re) >>> 8),
                  (ee[3] = 255 & re);
                var ae = this.getFramerate(),
                  ne = {
                    duration: Math.round((1 / ae) * 1e3),
                    size: ee.length,
                    frame_time_stamp: null,
                    frameDuration: null,
                  };
                if (r)
                  (ne.frame_time_stamp = e),
                    (m.frameData = new Uint8Array(ee)),
                    (m.mediaSample = ne);
                else {
                  if (!1 === F) {
                    if (
                      ((ne.frame_time_stamp =
                        1e3 * _.timestamp + _.timestamp_usec - E),
                      !1 === b)
                    )
                      (ne.frame_time_stamp = 0),
                        (E = 1e3 * _.timestamp + _.timestamp_usec),
                        (ne.frameDuration = 0),
                        (h = ne),
                        (b = !0);
                    else {
                      var ie = h.frame_time_stamp,
                        oe = ne.frame_time_stamp;
                      (ne.frameDuration = Math.abs(oe - ie)),
                        ne.frameDuration > 3e3 && (ne.frameDuration = 0),
                        (h = ne);
                    }
                    (m.frameData = new Uint8Array(ee)), (m.mediaSample = ne);
                  }
                  (_ = null === _.timestamp ? this.getTimeStamp() : _),
                    (m.timeStamp = _);
                }
              }
              var ue = w * T;
              if (
                (!0 === r &&
                  (NaN.toFixed(0),
                  ue > 786432
                    ? (O("video"), (j.decodeMode = "video"))
                    : (O("canvas"), (j.decodeMode = "canvas"))),
                (m.playback = r),
                (m.frameData.frameIndex = L.frameIndex),
                (j.decodedData = m),
                !0 === C)
              )
                return (
                  "I" === Z && I++,
                  2 === I && ((I = 0), (C = !1)),
                  void n.debug.info("H264Session::stop")
                );
              this.rtpReturnCallback(j);
            }
          },
          findIFrame: function () {
            if (null !== this.videoBufferList) {
              var e = this.videoBufferList.findIFrame();
              if (null === e || "undefined" === typeof e) return !1;
              var t = {};
              return (
                this.setTimeStamp(e.timeStamp),
                (t.frameData = this.decoder.decode(e.buffer)),
                (t.timeStamp = e.timeStamp),
                t
              );
            }
          },
          setInitSegment: function () {
            (y = !1), (f = null), (l = null);
          },
          setLessRate: function (e) {
            L = e;
          },
        }),
        new R()
      );
    };
    t.default = f;
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
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    (e.exports = function (e, t, a) {
      return (
        t && r(e.prototype, t),
        a && r(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    var a = r(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = a(r(8));
    if ("undefined" == typeof i) var i = {};
    i.MD5 = function (e) {
      function t(e) {
        var t = (e >>> 0).toString(16);
        return "00000000".substr(0, 8 - t.length) + t;
      }
      function r(e, t, r) {
        return (e & t) | (~e & r);
      }
      function a(e, t, r) {
        return (r & e) | (~r & t);
      }
      function i(e, t, r) {
        return e ^ t ^ r;
      }
      function o(e, t, r) {
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
              var a = encodeURIComponent(e.charAt(r)).substr(1).split("%"),
                n = 0;
              n < a.length;
              n++
            )
              t.push(parseInt(a[n], 16));
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
            : (c = (0, n.default)(e[0]))
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
            : (c = (0, n.default)(e))
          : (c = (0, n.default)(e)),
        c && alert("MD5 type mismatch, cannot process " + c),
        (function () {
          function e(e, t, r, a) {
            var n,
              i,
              o = y;
            (y = v),
              (v = g),
              (g = p(
                g,
                (((n = p(h, p(e, p(t, r)))) << (i = a)) & 4294967295) |
                  (n >>> (32 - i))
              )),
              (h = o);
          }
          var n = l.length;
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
            })(8 * n)
          );
          var c = 1732584193,
            d = 4023233417,
            m = 2562383102,
            _ = 271733878,
            h = 0,
            g = 0,
            v = 0,
            y = 0;
          for (f = 0; f < l.length / 64; f++) {
            h = c;
            var b = 64 * f;
            e(r((g = d), (v = m), (y = _)), 3614090360, u(l, b), 7),
              e(r(g, v, y), 3905402710, u(l, b + 4), 12),
              e(r(g, v, y), 606105819, u(l, b + 8), 17),
              e(r(g, v, y), 3250441966, u(l, b + 12), 22),
              e(r(g, v, y), 4118548399, u(l, b + 16), 7),
              e(r(g, v, y), 1200080426, u(l, b + 20), 12),
              e(r(g, v, y), 2821735955, u(l, b + 24), 17),
              e(r(g, v, y), 4249261313, u(l, b + 28), 22),
              e(r(g, v, y), 1770035416, u(l, b + 32), 7),
              e(r(g, v, y), 2336552879, u(l, b + 36), 12),
              e(r(g, v, y), 4294925233, u(l, b + 40), 17),
              e(r(g, v, y), 2304563134, u(l, b + 44), 22),
              e(r(g, v, y), 1804603682, u(l, b + 48), 7),
              e(r(g, v, y), 4254626195, u(l, b + 52), 12),
              e(r(g, v, y), 2792965006, u(l, b + 56), 17),
              e(r(g, v, y), 1236535329, u(l, b + 60), 22),
              e(a(g, v, y), 4129170786, u(l, b + 4), 5),
              e(a(g, v, y), 3225465664, u(l, b + 24), 9),
              e(a(g, v, y), 643717713, u(l, b + 44), 14),
              e(a(g, v, y), 3921069994, u(l, b), 20),
              e(a(g, v, y), 3593408605, u(l, b + 20), 5),
              e(a(g, v, y), 38016083, u(l, b + 40), 9),
              e(a(g, v, y), 3634488961, u(l, b + 60), 14),
              e(a(g, v, y), 3889429448, u(l, b + 16), 20),
              e(a(g, v, y), 568446438, u(l, b + 36), 5),
              e(a(g, v, y), 3275163606, u(l, b + 56), 9),
              e(a(g, v, y), 4107603335, u(l, b + 12), 14),
              e(a(g, v, y), 1163531501, u(l, b + 32), 20),
              e(a(g, v, y), 2850285829, u(l, b + 52), 5),
              e(a(g, v, y), 4243563512, u(l, b + 8), 9),
              e(a(g, v, y), 1735328473, u(l, b + 28), 14),
              e(a(g, v, y), 2368359562, u(l, b + 48), 20),
              e(i(g, v, y), 4294588738, u(l, b + 20), 4),
              e(i(g, v, y), 2272392833, u(l, b + 32), 11),
              e(i(g, v, y), 1839030562, u(l, b + 44), 16),
              e(i(g, v, y), 4259657740, u(l, b + 56), 23),
              e(i(g, v, y), 2763975236, u(l, b + 4), 4),
              e(i(g, v, y), 1272893353, u(l, b + 16), 11),
              e(i(g, v, y), 4139469664, u(l, b + 28), 16),
              e(i(g, v, y), 3200236656, u(l, b + 40), 23),
              e(i(g, v, y), 681279174, u(l, b + 52), 4),
              e(i(g, v, y), 3936430074, u(l, b), 11),
              e(i(g, v, y), 3572445317, u(l, b + 12), 16),
              e(i(g, v, y), 76029189, u(l, b + 24), 23),
              e(i(g, v, y), 3654602809, u(l, b + 36), 4),
              e(i(g, v, y), 3873151461, u(l, b + 48), 11),
              e(i(g, v, y), 530742520, u(l, b + 60), 16),
              e(i(g, v, y), 3299628645, u(l, b + 8), 23),
              e(o(g, v, y), 4096336452, u(l, b), 6),
              e(o(g, v, y), 1126891415, u(l, b + 28), 10),
              e(o(g, v, y), 2878612391, u(l, b + 56), 15),
              e(o(g, v, y), 4237533241, u(l, b + 20), 21),
              e(o(g, v, y), 1700485571, u(l, b + 48), 6),
              e(o(g, v, y), 2399980690, u(l, b + 12), 10),
              e(o(g, v, y), 4293915773, u(l, b + 40), 15),
              e(o(g, v, y), 2240044497, u(l, b + 4), 21),
              e(o(g, v, y), 1873313359, u(l, b + 32), 6),
              e(o(g, v, y), 4264355552, u(l, b + 60), 10),
              e(o(g, v, y), 2734768916, u(l, b + 24), 15),
              e(o(g, v, y), 1309151649, u(l, b + 52), 21),
              e(o(g, v, y), 4149444226, u(l, b + 16), 6),
              e(o(g, v, y), 3174756917, u(l, b + 44), 10),
              e(o(g, v, y), 718787259, u(l, b + 8), 15),
              e(o(g, v, y), 3951481745, u(l, b + 36), 21),
              (c = p(c, h)),
              (d = p(d, g)),
              (m = p(m, v)),
              (_ = p(_, y));
          }
          return (function (e, r, a, n) {
            for (var i = "", o = 0, u = 0, s = 3; s >= 0; s--)
              (o = 255 & (u = arguments[s])),
                (o <<= 8),
                (o |= 255 & (u >>>= 8)),
                (o <<= 8),
                (o |= 255 & (u >>>= 8)),
                (o <<= 8),
                (i += t((o |= u >>>= 8)));
            return i;
          })(_, m, d, c).toUpperCase();
        })()
      );
    };
    var o = function (e) {
      return i.MD5(e);
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
    var a = r(0);
    var n = function () {
      var e,
        t,
        r,
        n,
        i,
        o,
        u,
        s,
        f,
        l,
        c,
        p,
        d,
        m,
        _,
        h = !1,
        g = 0;
      function v() {
        v.prototype.setIsFirstFrame(!1);
      }
      return (
        (v.prototype = {
          init: function () {
            a.debug.log("H264 Decoder init");
          },
          setOutputSize: function (e) {
            if (i !== 2 * e) {
              i = 2 * e;
              var t = Module._malloc(1),
                r = new Uint8Array(Module.HEAPU8.buffer, t, 1);
              Module._DECODE_GetFreePort(r.byteOffset),
                (g = r[0]),
                (r = null),
                Module._free(t),
                Module._DECODE_Init(g),
                (o = Module._malloc(5242880)),
                (u = new Uint8Array(Module.HEAPU8.buffer, o, 5242880));
              var a = 2 * e;
              (s = Module._malloc(a)),
                (f = new Uint8Array(Module.HEAPU8.buffer, s, a)),
                (l = Module._malloc(4)),
                (c = new Uint8Array(Module.HEAPU8.buffer, l, 4)),
                (p = Module._malloc(40)),
                (d = new Uint8Array(Module.HEAPU8.buffer, p, 40));
            }
          },
          decode: function (a, i) {
            (e = Date.now()),
              u.set(a),
              Module._DECODE_InputOneFrame(
                g,
                u.byteOffset,
                a.length,
                f.byteOffset,
                c.byteOffset,
                d.byteOffset
              ),
              (n = d[16] + (d[17] << 8)),
              (r = d[18] + (d[19] << 8));
            var o = (n * r * 3) / 2;
            return (
              (_ = null),
              (m = null),
              (_ = new ArrayBuffer(o)),
              (m = new Uint8Array(_)).set(
                Module.HEAPU8.subarray(f.byteOffset, f.byteOffset + o)
              ),
              (t = Date.now() - e),
              v.prototype.isFirstFrame()
                ? n > 0 && r > 0
                  ? ((e = Date.now()),
                    {
                      data: m,
                      option: { ylen: n, height: r, beforeDecoding: e },
                      width: n,
                      height: r,
                      codecType: "h264",
                      decodingTime: t,
                      frameType: i,
                    })
                  : void 0
                : (v.prototype.setIsFirstFrame(!0), { firstFrame: !0 })
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
              (f = null),
              Module._free(s),
              (c = null),
              Module._free(l),
              (d = null),
              Module._free(p),
              (_ = null),
              (m = null);
          },
        }),
        new v()
      );
    };
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var a = r(0),
      n = new (function () {
        var e = [],
          t = {};
        function r() {
          for (var r in e)
            e[r] = [
              r.charCodeAt(0),
              r.charCodeAt(1),
              r.charCodeAt(2),
              r.charCodeAt(3),
            ];
          (t.FTYP = new Uint8Array([
            105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49,
          ])),
            (t.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1])),
            (t.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (t.STSC = t.STCO = t.STTS),
            (t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (t.HDLR_VIDEO = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101,
              114, 0,
            ])),
            (t.HDLR_AUDIO = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101,
              114, 0,
            ])),
            (t.DREF = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0,
              1,
            ])),
            (t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
        }
        e = {
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
          mvex: [],
          mvhd: [],
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
          smhd: [],
        };
        var n = function (e) {
            for (
              var t = 8, r = Array.prototype.slice.call(arguments, 1), a = 0;
              a < r.length;
              a++
            )
              t += r[a].byteLength;
            var n = new Uint8Array(t),
              i = 0;
            for (
              n[i++] = (t >>> 24) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 8) & 255,
                n[i++] = 255 & t,
                n.set(e, i),
                i += 4,
                a = 0;
              a < r.length;
              a++
            )
              n.set(r[a], i), (i += r[a].byteLength);
            return n;
          },
          i = function (t) {
            return n(
              e.mp4a,
              new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                (65280 & t.channelcount) >> 8,
                255 & t.channelcount,
                (65280 & t.samplesize) >> 8,
                255 & t.samplesize,
                0,
                0,
                0,
                0,
                (65280 & t.samplerate) >> 8,
                255 & t.samplerate,
                0,
                0,
              ]),
              (function (t) {
                var r = t.config,
                  a = r.length,
                  i = new Uint8Array(
                    [
                      0,
                      0,
                      0,
                      0,
                      3,
                      23 + a,
                      0,
                      1,
                      0,
                      4,
                      15 + a,
                      64,
                      21,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      5,
                    ]
                      .concat([a])
                      .concat(r)
                      .concat([6, 1, 2])
                  );
                return n(e.esds, i);
              })(t)
            );
          },
          o = function (r) {
            return "audio" === r.type
              ? n(e.stsd, t.STSD_PREFIX, i(r))
              : n(
                  e.stsd,
                  t.STSD_PREFIX,
                  (function (t) {
                    var r = t.sps || [],
                      a = t.pps || [],
                      i = [],
                      o = [],
                      u = 0;
                    for (u = 0; u < r.length; u++)
                      i.push((65280 & r[u].byteLength) >>> 8),
                        i.push(255 & r[u].byteLength),
                        (i = i.concat(Array.prototype.slice.call(r[u])));
                    for (u = 0; u < a.length; u++)
                      o.push((65280 & a[u].byteLength) >>> 8),
                        o.push(255 & a[u].byteLength),
                        (o = o.concat(Array.prototype.slice.call(a[u])));
                    return n(
                      e.avc1,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        (65280 & t.width) >> 8,
                        255 & t.width,
                        (65280 & t.height) >> 8,
                        255 & t.height,
                        0,
                        72,
                        0,
                        0,
                        0,
                        72,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        19,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        24,
                        17,
                        17,
                      ]),
                      n(
                        e.avcC,
                        new Uint8Array(
                          [
                            1,
                            t.profileIdc,
                            t.profileCompatibility,
                            t.levelIdc,
                            255,
                          ]
                            .concat([r.length])
                            .concat(i)
                            .concat([a.length])
                            .concat(o)
                        )
                      )
                    );
                  })(r)
                );
          },
          u = function (r) {
            var a = null;
            return (
              (a = "audio" === r.type ? n(e.smhd, t.SMHD) : n(e.vmhd, t.VMHD)),
              n(
                e.minf,
                a,
                n(e.dinf, n(e.dref, t.DREF)),
                (function (r) {
                  return n(
                    e.stbl,
                    o(r),
                    n(e.stts, t.STTS),
                    n(e.stsc, t.STSC),
                    n(e.stsz, t.STSZ),
                    n(e.stco, t.STCO)
                  );
                })(r)
              )
            );
          },
          s = function (r) {
            return n(
              e.mdia,
              (function (t) {
                var r = t.timescale,
                  a = t.duration;
                return n(
                  e.mdhd,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (r >>> 24) & 255,
                    (r >>> 16) & 255,
                    (r >>> 8) & 255,
                    255 & r,
                    (a >>> 24) & 255,
                    (a >>> 16) & 255,
                    (a >>> 8) & 255,
                    255 & a,
                    85,
                    196,
                    0,
                    0,
                  ])
                );
              })(r),
              (function (r) {
                var a = null;
                return (
                  (a = "audio" === r.type ? t.HDLR_AUDIO : t.HDLR_VIDEO),
                  n(e.hdlr, a)
                );
              })(r),
              u(r)
            );
          },
          f = function (t) {
            return n(
              e.trak,
              (function (t) {
                var r = t.id,
                  a = t.duration,
                  i = t.width,
                  o = t.height;
                return n(
                  e.tkhd,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    7,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (r >>> 24) & 255,
                    (r >>> 16) & 255,
                    (r >>> 8) & 255,
                    255 & r,
                    0,
                    0,
                    0,
                    0,
                    (a >>> 24) & 255,
                    (a >>> 16) & 255,
                    (a >>> 8) & 255,
                    255 & a,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    (i >>> 8) & 255,
                    255 & i,
                    0,
                    0,
                    (o >>> 8) & 255,
                    255 & o,
                    0,
                    0,
                  ])
                );
              })(t),
              s(t)
            );
          },
          l = function (t) {
            return n(
              e.mvex,
              (function (t) {
                var r = t.id,
                  a = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    (r >>> 24) & 255,
                    (r >>> 16) & 255,
                    (r >>> 8) & 255,
                    255 & r,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                  ]);
                return n(e.trex, a);
              })(t)
            );
          },
          c = function (t) {
            var r,
              i,
              o =
                ((r = t.timescale),
                (i = t.duration),
                a.debug.log("mvhd:  timescale: " + r + "  duration: " + i),
                n(
                  e.mvhd,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (r >>> 24) & 255,
                    (r >>> 16) & 255,
                    (r >>> 8) & 255,
                    255 & r,
                    (i >>> 24) & 255,
                    (i >>> 16) & 255,
                    (i >>> 8) & 255,
                    255 & i,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                  ])
                )),
              u = f(t),
              s = l(t);
            return n(e.moov, o, u, s);
          },
          p = function (t, r) {
            return "audio" === t.type
              ? audioTrun(t, r)
              : (function (t, r) {
                  var a,
                    i = null,
                    o = null,
                    u = 0,
                    s = r;
                  if (null === (a = t.samples || [])[0].frameDuration)
                    for (
                      s += 24 + 4 * a.length, i = trunHeader(a, s), u = 0;
                      u < a.length;
                      u++
                    )
                      (o = a[u]),
                        (i = i.concat([
                          (4278190080 & o.size) >>> 24,
                          (16711680 & o.size) >>> 16,
                          (65280 & o.size) >>> 8,
                          255 & o.size,
                        ]));
                  else
                    for (
                      i = (function (e, t) {
                        return [
                          0,
                          0,
                          3,
                          5,
                          (4278190080 & e.length) >>> 24,
                          (16711680 & e.length) >>> 16,
                          (65280 & e.length) >>> 8,
                          255 & e.length,
                          (4278190080 & t) >>> 24,
                          (16711680 & t) >>> 16,
                          (65280 & t) >>> 8,
                          255 & t,
                          0,
                          0,
                          0,
                          0,
                        ];
                      })(a, (s += 24 + 4 * a.length + 4 * a.length)),
                        u = 0;
                      u < a.length;
                      u++
                    )
                      (o = a[u]),
                        (i = i.concat([
                          (4278190080 & o.frameDuration) >>> 24,
                          (16711680 & o.frameDuration) >>> 16,
                          (65280 & o.frameDuration) >>> 8,
                          255 & o.frameDuration,
                          (4278190080 & o.size) >>> 24,
                          (16711680 & o.size) >>> 16,
                          (65280 & o.size) >>> 8,
                          255 & o.size,
                        ]));
                  return n(e.trun, new Uint8Array(i));
                })(t, r);
          },
          d = function (t, r) {
            return n(
              e.moof,
              (function (t) {
                var r = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  (t >>> 24) & 255,
                  (t >>> 16) & 255,
                  (t >>> 8) & 255,
                  255 & t,
                ]);
                return n(e.mfhd, r);
              })(t),
              (function (t) {
                var r, a, i;
                return (
                  (r = n(e.tfhd, new Uint8Array([0, 2, 0, 0, 0, 0, 0, 1]))),
                  (a = n(
                    e.tfdt,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      (t.baseMediaDecodeTime >>> 24) & 255,
                      (t.baseMediaDecodeTime >>> 16) & 255,
                      (t.baseMediaDecodeTime >>> 8) & 255,
                      255 & t.baseMediaDecodeTime,
                    ])
                  )),
                  (i = p(t, 72)),
                  n(e.traf, r, a, i)
                );
              })(r)
            );
          };
        return (
          (r.prototype = {
            initSegment: function (r) {
              var i = n(e.ftyp, t.FTYP);
              a.debug.log(r);
              var o = c(r),
                u = new Uint8Array(i.byteLength + o.byteLength);
              return u.set(i, 0), u.set(o, i.byteLength), u;
            },
            mediaSegment: function (t, r, a, i) {
              var o = d(t, r),
                u = (function (t) {
                  return n(e.mdat, t);
                })(a),
                s = null;
              return (
                (s = new Uint8Array(o.byteLength + u.byteLength)).set(o),
                s.set(u, o.byteLength),
                s
              );
            },
          }),
          new r()
        );
      })();
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    var a = r(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = r(0),
      i = a(r(12)),
      o = a(r(2));
    function u() {
      var e = null,
        t = null,
        r = 0,
        a = 0,
        n = 0,
        i = 0,
        u = 0;
      function s() {
        0, (e = new o.default());
      }
      function f() {
        return (
          0 == n &&
            ((i = (function () {
              if (a >= r) return 0;
              var e = t[a++];
              return (
                0 == e
                  ? (u++, a < r && 2 == u && 3 == t[a] && (a++, (u = 0)))
                  : (u = 0),
                e
              );
            })()),
            (n = 8)),
          (i >> --n) & 1
        );
      }
      function l(e, t) {
        for (var r = 0; t > 0; ) (r <<= 1), (r |= f()), t--;
        return r;
      }
      function c(e, t) {
        for (var n = 0; a < r && 0 == f(); ) n++;
        return l(0, n) + ((1 << n) - 1);
      }
      return (
        (s.prototype = {
          parse: function (t) {
            t,
              0,
              e.clear(),
              e.put("forbidden_zero_bit", l(0, 1)),
              e.put("nal_unit_type", l(0, 6)),
              e.put("nuh_layer_id", l(0, 6)),
              e.put("nuh_temporal_id_plus1", l(0, 3)),
              e.put("sps_video_parameter_set_id", l(0, 4)),
              0 === e.get("nuh_layer_id")
                ? e.put("sps_max_sub_layers_minus1", l(0, 3))
                : e.put("sps_ext_or_max_sub_layers_minus1", l(0, 3));
            var r =
              0 !== e.get("nuh_layer_id") &&
              7 === e.get("sps_ext_or_max_sub_layers_minus1");
            return (
              r ||
                (e.put("sps_max_sub_layers_minus1", l(0, 1)),
                (function (t, r) {
                  if (t) {
                    e.put("general_profile_space", l(0, 2)),
                      e.put("general_tier_flag", l(0, 1)),
                      e.put("general_profile_idc", l(0, 5));
                    for (var a = new Array(32), n = 0; n < 32; n++)
                      a[n] = l(0, 1);
                    e.put("general_progressive_source_flag", l(0, 1)),
                      e.put("general_interlaced_source_flag", l(0, 1)),
                      e.put("general_non_packed_constraint_flag", l(0, 1)),
                      e.put("general_frame_only_constraint_flag", l(0, 1));
                    var i = e.get("general_profile_idc");
                    4 === i ||
                    a[4] ||
                    5 === i ||
                    a[5] ||
                    6 === i ||
                    a[6] ||
                    7 === i ||
                    a[7] ||
                    8 === i ||
                    a[8] ||
                    9 === i ||
                    a[9] ||
                    10 === i ||
                    a[10]
                      ? (e.put("general_max_12bit_constraint_flag", l(0, 1)),
                        e.put("general_max_10bit_constraint_flag", l(0, 1)),
                        e.put("general_max_8bit_constraint_flag", l(0, 1)),
                        e.put("general_max_422chroma_constraint_flag", l(0, 1)),
                        e.put("general_max_420chroma_constraint_flag", l(0, 1)),
                        e.put(
                          "general_max_monochrome_constraint_flag",
                          l(0, 1)
                        ),
                        e.put("general_intra_constraint_flag", l(0, 1)),
                        e.put(
                          "general_one_picture_only_constraint_flag",
                          l(0, 1)
                        ),
                        e.put(
                          "general_lower_bit_rate_constraint_flag",
                          l(0, 1)
                        ),
                        5 === i || a[5] || 9 === i || a[9] || 10 === i || a[10]
                          ? (e.put(
                              "general_max_14bit_constraint_flag",
                              l(0, 1)
                            ),
                            e.put("general_reserved_zero_33bits", l(0, 33)))
                          : e.put("general_reserved_zero_34bits", l(0, 34)))
                      : e.put("general_reserved_zero_43bits", l(0, 43)),
                      (i >= 1 && i <= 5) ||
                      a[1] ||
                      a[2] ||
                      a[3] ||
                      a[4] ||
                      a[5] ||
                      a[9]
                        ? e.put("general_inbld_flag", l(0, 1))
                        : e.put("general_reserved_zero_bit", l(0, 1));
                  }
                  e.put("general_level_idc", l(0, 8));
                  var o = new Array(r),
                    u = new Array(r);
                  for (_ = 0; _ < r; _++) (o[_] = l(0, 1)), (u[_] = l(0, 1));
                  var s = new Array(8),
                    f = new Array(r),
                    c = new Array(r),
                    p = new Array(r),
                    d = [],
                    m = new Array(r);
                  if (r > 0) for (var _ = r; _ < 8; _++) s[_] = l(0, 2);
                  for (_ = 0; _ < r; _++) {
                    if (o[_]) {
                      for (
                        c[_] = l(0, 2), p[_] = l(0, 1), f[_] = l(0, 5), n = 0;
                        n < 32;
                        n++
                      )
                        d[_][n] = l(0, 1);
                      e.put("sub_layer_progressive_source_flag", l(0, 1)),
                        e.put("sub_layer_interlaced_source_flag", l(0, 1)),
                        e.put("sub_layer_non_packed_constraint_flag", l(0, 1)),
                        e.put("sub_layer_frame_only_constraint_flag", l(0, 1)),
                        4 === f[_] ||
                        d[_][4] ||
                        5 === f[_] ||
                        d[_][5] ||
                        6 === f[_] ||
                        d[_][6] ||
                        7 === f[_] ||
                        d[_][7] ||
                        8 === f[_] ||
                        d[_][8] ||
                        9 === f[_] ||
                        d[_][9] ||
                        10 === f[_] ||
                        d[_][10]
                          ? (e.put(
                              "sub_layer_max_12bit_constraint_flag",
                              l(0, 1)
                            ),
                            e.put(
                              "sub_layer_max_10bit_constraint_flag",
                              l(0, 1)
                            ),
                            e.put(
                              "sub_layer_max_8bit_constraint_flag",
                              l(0, 1)
                            ),
                            e.put(
                              "sub_layer_max_422chroma_constraint_flag",
                              l(0, 1)
                            ),
                            e.put(
                              "sub_layer_max_420chroma_constraint_flag",
                              l(0, 1)
                            ),
                            e.put(
                              "sub_layer_max_monochrome_constraint_flag",
                              l(0, 1)
                            ),
                            e.put("sub_layer_intra_constraint_flag", l(0, 1)),
                            e.put(
                              "sub_layer_one_picture_only_constraint_flag",
                              l(0, 1)
                            ),
                            e.put(
                              "sub_layer_lower_bit_rate_constraint_flag",
                              l(0, 1)
                            ),
                            5 === f[_] || d[_][5]
                              ? (e.put(
                                  "sub_layer_max_14bit_constraint_flag",
                                  l(0, 1)
                                ),
                                e.put(
                                  "sub_layer_lower_bit_rate_constraint_flag",
                                  l(0, 1)
                                ),
                                (m[_] = l(0, 33)))
                              : (m[_] = l(0, 34)))
                          : e.put("sub_layer_reserved_zero_43bits", l(0, 43)),
                        (f[_] >= 1 && f[_] <= 5) ||
                        9 == f[_] ||
                        d[1] ||
                        d[2] ||
                        d[3] ||
                        d[4] ||
                        d[5] ||
                        d[9]
                          ? e.put("sub_layer_inbld_flag", l(0, 1))
                          : e.put("sub_layer_reserved_zero_bit", l(0, 1));
                    }
                    u[_] && e.put("sub_layer_level_idc", l(0, 8));
                  }
                })(1, e.get("sps_max_sub_layers_minus1"))),
              l(0, 84),
              e.put("sps_seq_parameter_set_id", c()),
              r
                ? (e.put("update_rep_format_flag", l(0, 1)),
                  e.get("update_rep_format_flag") &&
                    e.put("sps_rep_format_idx", l(0, 8)))
                : (e.put("chroma_format_idc", c()),
                  3 === e.get("chroma_format_idc") &&
                    e.put("separate_colour_plane_flag", l(0, 1)),
                  e.put("pic_width_in_luma_samples", c()),
                  e.put("pic_height_in_luma_samples", c()),
                  e.put("conformance_window_flag", l(0, 1)),
                  e.get("conformance_window_flag") &&
                    (e.put("conf_win_left_offset", c()),
                    e.put("conf_win_right_offset", c()),
                    e.put("conf_win_top_offset", c()),
                    e.put("conf_win_bottom_offset", c()))),
              !0
            );
          },
          parse2: function (o) {
            var s = o.length;
            if (
              (o,
              (t = o),
              (r = o.length),
              (a = 0),
              (n = 0),
              (i = 0),
              (u = 0),
              0,
              e.clear(),
              s < 20)
            )
              return !1;
            l(0, 16), l(0, 4);
            var f = l(0, 3);
            if ((e.put("sps_max_sub_layers_minus1", f), f > 6)) return !1;
            l(0, 1), l(0, 2), l(0, 1);
            l(0, 5);
            l(0, 32),
              l(0, 1),
              l(0, 1),
              l(0, 1),
              l(0, 1),
              l(0, 43),
              l(0, 1),
              e.put("general_level_idc", l(0, 8));
            for (var p = [], d = [], m = 0; m < f; m++)
              (p[m] = l(0, 1)), (d[m] = l(0, 1));
            if (f > 0) for (m = f; m < 8; m++) l(0, 2);
            for (m = 0; m < f; m++)
              p[m] &&
                (l(0, 2),
                l(0, 1),
                l(0, 5),
                l(0, 32),
                l(0, 1),
                l(0, 1),
                l(0, 1),
                l(0, 1),
                l(0, 44)),
                d[m] && l(0, 8);
            var _ = c();
            if ((e.put("sps_seq_parameter_set_id", _), _ > 15)) return !1;
            var h = c();
            return (
              e.put("chroma_format_idc", h),
              !(_ > 3) &&
                (3 == h && l(0, 1),
                e.put("pic_width_in_luma_samples", c()),
                e.put("pic_height_in_luma_samples", c()),
                l(0, 1) && (c(), c(), c(), c()),
                c() == c())
            );
          },
          getSizeInfo: function () {
            var t = e.get("pic_width_in_luma_samples"),
              r = e.get("pic_height_in_luma_samples");
            if (e.get("conformance_window_flag")) {
              var a = e.get("chroma_format_idc"),
                n = e.get("separate_colour_plane_flag");
              "undefined" === typeof n && (n = 0);
              var i = (1 !== a && 2 !== a) || 0 !== n ? 1 : 2,
                o = 1 === a && 0 === n ? 2 : 1;
              (t -=
                i * e.get("conf_win_right_offset") +
                i * e.get("conf_win_left_offset")),
                (r -=
                  o * e.get("conf_win_bottom_offset") +
                  o * e.get("conf_win_top_offset"));
            }
            return { width: t, height: r, decodeSize: t * r };
          },
          getSpsValue: function (t) {
            return e.get(t);
          },
        }),
        new s()
      );
    }
    var s = function () {
      var e,
        t = 0,
        r = 0,
        a = 0,
        o = 0,
        s = new u(),
        f = { frameData: null, timeStamp: null },
        l = { timestamp: null, timezone: null },
        c = 0,
        p = 0,
        d = null,
        m = 0,
        _ = { width: 0, height: 0 },
        h = 0,
        g = 0;
      function v() {
        (this.decoder = (0, i.default)()),
          (this.firstTime = 0),
          (this.lastMSW = 0);
      }
      return (
        (v.prototype = {
          setReturnCallback: function (e) {
            this.rtpReturnCallback = e;
          },
          setBufferfullCallback: function (e) {
            null !== this.videoBufferList &&
              this.videoBufferList.setBufferFullCallback(e);
          },
          getVideoBuffer: function (e) {
            if (null !== this.videoBufferList)
              return this.videoBufferList.searchNodeAt(e);
          },
          clearBuffer: function () {
            null !== this.videoBufferList && this.videoBufferList.clear();
          },
          findCurrent: function () {
            null !== this.videoBufferList &&
              this.videoBufferList.searchTimestamp(this.getTimeStamp());
          },
          ntohl: function (e) {
            return ((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) >>> 0;
          },
          appendBuffer: function (e, t, r) {
            if (r + t.length >= e.length) {
              var a = new Uint8Array(e.length + 1048576);
              a.set(e, 0), (e = a);
            }
            return e.set(t, r), e;
          },
          setGovLength: function (e) {
            d = e;
          },
          getGovLength: function () {
            return d;
          },
          setDecodingTime: function (e) {
            this.decodingTime = e;
          },
          getDropPercent: function () {
            return 0;
          },
          getDropCount: function () {
            return 0;
          },
          initStartTime: function () {
            (this.firstDiffTime = 0), (this.calcGov = 0);
          },
          setCheckDelay: function (e) {
            this.checkDelay = e;
          },
          init: function () {
            this.decoder.setIsFirstFrame(!1),
              (this.videoBufferList = new n.VideoBufferList()),
              (this.firstDiffTime = 0),
              (this.checkDelay = !0),
              (this.timeData = null);
          },
          parseRTPData: function (i, u, d, m, v) {
            var y,
              b = null,
              D = {},
              S = ((u[19] << 24) + (u[18] << 16) + (u[17] << 8) + u[16]) >>> 0;
            y = S >>> 26 === 0 ? "2000" : "20" + (S >>> 26);
            var w =
              Date.UTC(
                y,
                ((S >>> 22) & 15) - 1,
                (S >>> 17) & 31,
                (S >>> 12) & 31,
                (S >>> 6) & 63,
                63 & S
              ) / 1e3;
            if (
              ((w += (new Date().getTimezoneOffset() / 60) * 3600),
              0 === this.firstTime)
            )
              (this.firstTime = w),
                (this.lastMSW = 0),
                (r = (u[21] << 8) + u[20]),
                (l = { timestamp: this.firstTime, timestamp_usec: 0 });
            else {
              var T,
                C = (u[21] << 8) + u[20];
              (T = C > r ? C - r : C + 65535 - r),
                (this.lastMSW += T),
                w > this.firstTime && (this.lastMSW -= 1e3),
                (this.firstTime = w),
                (l = { timestamp: w, timestamp_usec: this.lastMSW }),
                (r = C);
            }
            (0 !== this.getFramerate() &&
              "undefined" !== typeof this.getFramerate()) ||
              "undefined" === typeof this.getTimeStamp() ||
              (this.setFramerate(
                Math.round(
                  1e3 /
                    ((l.timestamp - this.getTimeStamp().timestamp === 0
                      ? 0
                      : 1e3) +
                      (l.timestamp_usec - this.getTimeStamp().timestamp_usec))
                )
              ),
              n.debug.log(
                "setFramerate" +
                  Math.round(
                    1e3 /
                      ((l.timestamp - this.getTimeStamp().timestamp === 0
                        ? 0
                        : 1e3) +
                        (l.timestamp_usec - this.getTimeStamp().timestamp_usec))
                  )
              )),
              this.setTimeStamp(l);
            var I = u[22];
            (e = u.subarray(24 + I, u.length - 8)), (t = (u[21] << 8) + u[20]);
            for (var M = [], x = 0; x <= e.length; )
              if (0 == e[x])
                if (0 == e[x + 1])
                  if (1 == e[x + 2]) {
                    if (
                      (M.push(x), 5 == (31 & e[(x += 3)]) || 1 == (31 & e[x]))
                    )
                      break;
                  } else 0 == e[x + 2] ? x++ : (x += 3);
                else x += 2;
              else x += 1;
            var A = "P";
            for (x = 0; x < M.length; x++)
              switch (
                ((b = e.subarray(M[x] + 3, M[x + 1])), (e[M[x] + 3] >> 1) & 63)
              ) {
                default:
                  break;
                case 33:
                  (A = "I"), s.parse2(b);
                  var F = v;
                  (o = s.getSizeInfo().decodeSize),
                    (c = F.width),
                    (p = F.height),
                    (_.width == F.width && _.height == F.height) ||
                      (0 != _.width
                        ? ((_.width = F.width),
                          (_.height = F.height),
                          (D.resolution = _),
                          (D.resolution.decodeMode = "canvas"),
                          (D.resolution.encodeMode = "h265"))
                        : ((_.width = F.width),
                          (_.height = F.height),
                          (D.decodeStart = _),
                          (D.decodeStart.decodeMode = "canvas"),
                          (D.decodeStart.encodeMode = "h265")));
              }
            var k = 1e3 * l.timestamp + l.timestamp_usec;
            0 == this.firstDiffTime
              ? ((h = 0),
                (this.firstDiffTime = Date.now() - k),
                n.debug.log("firstDiff: 0"))
              : (k - g < 0 &&
                  (this.firstDiffTime = h + (Date.now() - k).toFixed(0)),
                (h = Date.now() - k - this.firstDiffTime) < 0 &&
                  ((this.firstDiffTime = 0), (h = 0)),
                h > 8e3 &&
                  ((D.error = { errorCode: 101 }), this.rtpReturnCallback(D))),
              (g = k),
              (f.frameData = null),
              a !== o &&
                (this.decoder.free(), (a = o), this.decoder.setOutputSize(a)),
              (f.frameData = this.decoder.decode(u)),
              (f.frameData.frameType = A),
              (f.frameData.frameIndex = v.frameIndex),
              (f.timeStamp = null),
              (l = null === l.timestamp ? this.getTimeStamp() : l),
              (f.timeStamp = l),
              d &&
                ((D.backupData = {
                  stream: e,
                  frameType: A,
                  width: c,
                  height: p,
                  codecType: "h265",
                }),
                null !== l.timestamp && "undefined" !== typeof l.timestamp
                  ? (D.backupData.timestamp_usec = l.timestamp_usec)
                  : (D.backupData.timestamp = (t / 90).toFixed(0))),
              (D.decodedData = f),
              this.rtpReturnCallback(D);
          },
          findIFrame: function () {
            if (null !== this.videoBufferList) {
              var e = this.videoBufferList.findIFrame();
              if (null === e || "undefined" === typeof e) return !1;
              var t = {};
              return (
                this.setTimeStamp(e.timeStamp),
                (t.frameData = this.decoder.decode(e.buffer)),
                (t.timeStamp = e.timeStamp),
                t
              );
            }
          },
          getFramerate: function () {
            return m;
          },
          setFramerate: function (e) {
            0 < e &&
              "undefined" !== typeof e &&
              ((m = e),
              null !== this.videoBufferList &&
                (this.videoBufferList.setMaxLength(6 * m),
                this.videoBufferList.setBUFFERING(4 * m)));
          },
          getTimeStamp: function () {
            return this.timeData;
          },
          setTimeStamp: function (e) {
            this.timeData = e;
          },
        }),
        new v()
      );
    };
    t.default = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var a = r(0);
    var n = function () {
      var e,
        t,
        r,
        n,
        i,
        o,
        u,
        s,
        f,
        l,
        c,
        p,
        d,
        m,
        _,
        h = !1,
        g = 0;
      function v() {
        v.prototype.setIsFirstFrame(!1);
      }
      return (
        (v.prototype = {
          init: function () {
            a.debug.log("H265 Decoder init");
          },
          setOutputSize: function (e) {
            if (i !== 2 * e) {
              i = 2 * e;
              var t = Module._malloc(1),
                r = new Uint8Array(Module.HEAPU8.buffer, t, 1);
              Module._DECODE_GetFreePort(r.byteOffset),
                (g = r[0]),
                (r = null),
                Module._free(t),
                Module._DECODE_Init(g),
                (o = Module._malloc(5242880)),
                (u = new Uint8Array(Module.HEAPU8.buffer, o, 5242880));
              var a = 2 * e;
              (s = Module._malloc(a)),
                (f = new Uint8Array(Module.HEAPU8.buffer, s, a)),
                (l = Module._malloc(4)),
                (c = new Uint8Array(Module.HEAPU8.buffer, l, 4)),
                (p = Module._malloc(40)),
                (d = new Uint8Array(Module.HEAPU8.buffer, p, 40));
            }
          },
          decode: function (a, i) {
            (e = Date.now()),
              u.set(a),
              Module._DECODE_InputOneFrame(
                g,
                u.byteOffset,
                a.length,
                f.byteOffset,
                c.byteOffset,
                d.byteOffset
              ),
              (n = d[16] + (d[17] << 8)),
              (r = d[18] + (d[19] << 8));
            var o = (n * r * 3) / 2;
            return (
              (_ = null),
              (m = null),
              (_ = new ArrayBuffer(o)),
              (m = new Uint8Array(_)).set(
                Module.HEAPU8.subarray(f.byteOffset, f.byteOffset + o)
              ),
              (t = Date.now() - e),
              v.prototype.isFirstFrame()
                ? n > 0 && r > 0
                  ? ((e = Date.now()),
                    {
                      data: m,
                      option: { ylen: n, height: r, beforeDecoding: e },
                      width: n,
                      height: r,
                      codecType: "h265",
                      decodingTime: t,
                      frameType: i,
                    })
                  : void 0
                : (v.prototype.setIsFirstFrame(!0), { firstFrame: !0 })
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
              (f = null),
              Module._free(s),
              (c = null),
              Module._free(l),
              (d = null),
              Module._free(p),
              (_ = null),
              (m = null);
          },
        }),
        new v()
      );
    };
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    var a = r(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = r(0),
      i = a(r(14)),
      o = function () {
        var e = 0,
          t = 0,
          r = { frameData: null, timeStamp: null },
          a = { timestamp: null, timezone: null };
        var o = 0,
          u = 0,
          s = 0,
          f = 0,
          l = null,
          c = null,
          p = null,
          d = 0,
          m = 0,
          _ = 0,
          h = { width: 0, height: 0 };
        function g() {
          (this.decoder = new i.default()),
            (this.firstTime = 0),
            (this.lastMSW = 0);
        }
        return (
          (g.prototype = {
            init: function () {
              this.decoder.setIsFirstFrame(!1),
                (this.videoBufferList = new n.VideoBufferList()),
                (this.timeData = null);
            },
            parseRTPData: function (i, p, d, g, v) {
              var y,
                b = new Uint8Array(1048576);
              (e = v.width), (t = v.height), (l = {});
              var D = p[22],
                S = p.subarray(24 + D, p.length - 8);
              c = S.length;
              var w =
                ((p[19] << 24) + (p[18] << 16) + (p[17] << 8) + p[16]) >>> 0;
              y = w >> 26 === 0 ? "2000" : "20" + (w >> 26);
              var T =
                Date.UTC(
                  y,
                  ((w >> 22) & 15) - 1,
                  (w >> 17) & 31,
                  (w >> 12) & 31,
                  (w >> 6) & 63,
                  63 & w
                ) / 1e3;
              if (((T -= 28800), 0 === this.firstTime))
                (this.firstTime = T),
                  (this.lastMSW = 0),
                  (f = (p[21] << 8) + p[20]),
                  (a = { timestamp: this.firstTime, timestamp_usec: 0 });
              else {
                var C,
                  I = (p[21] << 8) + p[20];
                (C = I > f ? I - f : I + 65535 - f),
                  (this.lastMSW += C),
                  T > this.firstTime && (this.lastMSW -= 1e3),
                  (this.firstTime = T),
                  (a = { timestamp: T, timestamp_usec: this.lastMSW }),
                  (f = I);
              }
              (0 !== this.getFramerate() &&
                "undefined" !== typeof this.getFramerate()) ||
                "undefined" === typeof this.getTimeStamp() ||
                this.setFramerate(
                  Math.round(
                    1e3 /
                      ((a.timestamp - this.getTimeStamp().timestamp === 0
                        ? 0
                        : 1e3) +
                        (a.timestamp_usec - this.getTimeStamp().timestamp_usec))
                  )
                ),
                this.setTimeStamp(a),
                (s = (p[21] << 8) + p[20]),
                (u = c),
                ((b = this.appendBuffer(b, S, o))[(o += c) + u - 2] = 255),
                (b[o + u - 1] = 217),
                (h.width == e && h.height == t) ||
                  (0 != h.width
                    ? ((h.width = e),
                      (h.height = t),
                      (l.resolution = h),
                      (l.resolution.decodeMode = "canvas"),
                      (l.resolution.encodeMode = "mjpeg"))
                    : ((h.width = e),
                      (h.height = t),
                      (l.decodeStart = h),
                      (l.decodeStart.decodeMode = "canvas"),
                      (l.decodeStart.encodeMode = "mjpeg")));
              var M = 1e3 * a.timestamp + a.timestamp_usec;
              0 == this.firstDiffTime
                ? ((m = 0),
                  (this.firstDiffTime = Date.now() - M),
                  n.debug.log("firstDiff: " + this.firstTime))
                : (M - _ < 0 &&
                    (this.firstDiffTime = m + (Date.now() - M).toFixed(0)),
                  (m = Date.now() - M - this.firstDiffTime) < 0 &&
                    ((this.firstDiffTime = 0), (m = 0)),
                  m > 8e3 &&
                    ((l.error = { errorCode: 101 }),
                    this.rtpReturnCallback(l))),
                (_ = M),
                (r.frameData = null),
                this.decoder.setResolution(e, t),
                (r.frameData = this.decoder.decode(b.subarray(0, o))),
                (r.timeStamp = null),
                (a = null === a.timestamp ? this.getTimeStamp() : a),
                (r.timeStamp = a),
                !0 === d &&
                  ((l.backupData = {
                    stream: b.subarray(0, o),
                    width: e,
                    height: t,
                    codecType: "mjpeg",
                  }),
                  null !== a.timestamp && "undefined" !== typeof a.timestamp
                    ? (l.backupData.timestamp_usec = a.timestamp_usec)
                    : (l.backupData.timestamp = (s / 90).toFixed(0))),
                (o = 0),
                (r.playback = !1),
                (l.decodedData = r),
                this.rtpReturnCallback(l);
            },
            getVideoBuffer: function (e) {
              if (null !== this.videoBufferList)
                return this.videoBufferList.searchNodeAt(e);
            },
            clearBuffer: function () {
              null !== this.videoBufferList && this.videoBufferList.clear();
            },
            findCurrent: function () {
              null !== this.videoBufferList &&
                this.videoBufferList.searchTimestamp(this.getTimeStamp());
            },
            findIFrame: function () {
              null !== this.videoBufferList &&
                this.videoBufferList.findIFrame();
            },
            SetRtpInterlevedID: function (e) {
              this.interleavedID = e;
            },
            setTimeStamp: function (e) {
              this.timeData = e;
            },
            getTimeStamp: function () {
              return this.timeData;
            },
            getRTPPacket: function (e, t) {},
            calculatePacketTime: function (e) {},
            ntohl: function (e) {
              return ((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) >>> 0;
            },
            appendBuffer: function (e, t, r) {
              if (r + t.length >= e.length) {
                var a = new Uint8Array(e.length + 1048576);
                a.set(e, 0), (e = a);
              }
              return e.set(t, r), e;
            },
            setFramerate: function (e) {
              0 < e &&
                "undefined" !== typeof e &&
                ((d = e),
                null !== this.videoBufferList &&
                  (this.videoBufferList.setMaxLength(6 * d),
                  this.videoBufferList.setBUFFERING(4 * d)));
            },
            getFramerate: function () {
              return d;
            },
            setReturnCallback: function (e) {
              this.rtpReturnCallback = e;
            },
            setBufferfullCallback: function (e) {
              null !== this.videoBufferList &&
                this.videoBufferList.setBufferFullCallback(e);
            },
            setGovLength: function (e) {
              p = e;
            },
            getGovLength: function () {
              return p;
            },
            setDecodingTime: function (e) {
              this.decodingTime = e;
            },
            getDropPercent: function () {
              return 0;
            },
            getDropCount: function () {
              return 0;
            },
            initStartTime: function () {
              (this.firstDiffTime = 0), (this.calcGov = 0);
            },
            setCheckDelay: function (e) {
              this.checkDelay = e;
            },
          }),
          new g()
        );
      };
    t.default = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var a = r(0);
    var n = function () {
      var e,
        t,
        r = !1;
      function n() {
        a.debug.log("MJPEG Decoder");
      }
      return (
        (n.prototype = {
          setIsFirstFrame: function (e) {
            r = e;
          },
          isFirstFrame: function () {
            return r;
          },
          setResolution: function (r, a) {
            (e = r), (t = a);
          },
          decode: function (r, a) {
            return n.prototype.isFirstFrame()
              ? { data: r, width: e, height: t, codecType: "mjpeg" }
              : (n.prototype.setIsFirstFrame(!0), { firstFrame: !0 });
          },
        }),
        new n()
      );
    };
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var a = r(0),
      n = function () {
        var e,
          t = null,
          r = {
            0: "",
            1: "VideoSynopsis",
            2: "TrafficGate",
            3: "ElectronicPolice",
            4: "SinglePtzParking",
            5: "PtzParking",
            6: "Traffic",
            7: "Normal",
            8: "none",
            9: "ATM",
            10: "MetroIVS",
            11: "FaceDetection",
            12: "FaceRecognition",
            13: "NumberStat",
            14: "HeatMap",
            15: "VideoDiagnosis",
            16: "VideoEnhance",
            17: "SmokeFireDetect",
            18: "VehicleAnalyse",
            19: "PersonFeature",
            20: "SDFaceDetect",
            21: "HeatMapPlan",
            22: "ATMFD",
            23: "SCR",
            24: "NumberStatPlan",
            25: "CourseRecord",
            26: "Highway",
            27: "City",
            28: "LeTrack",
            29: "ObjectStruct",
            30: "Stereo",
            31: "StereoPc",
            32: "HumanDetect",
            33: "SDPedestrain",
            34: "FaceAnalysis",
            35: "FaceAttribute",
            36: "FacePicAnalyse",
            37: "SDEP",
            38: "XRayDetect",
            39: "ObjectDetect",
            40: "CrowdDistriMap",
            41: "StereoBehavior",
          };
        function n() {
          (this.firstTime = 0), (this.lastMSW = 0);
        }
        function i(e) {
          for (var t = [].slice.call(e), r = "", a = 0; a < t.length; a++)
            r += String.fromCharCode(t[a]);
          return decodeURIComponent(escape(r));
        }
        function o(e) {
          var t = { result: !0, type: 0 };
          return (t.params = JSON.parse(i(e))), t;
        }
        function u(e) {
          var t = { result: !1 },
            a = 0,
            n = (e[a + 1] << 8) + e[a];
          if (1 !== n && 2 !== n) return t;
          (t.result = !0), (t.type = 5), (t.params = null);
          var i = e[(a += 2)];
          if (0 === i) return t;
          var o = e[(a += 1)];
          (a += 1),
            (t.params = {}),
            (t.params.coordinate = 128 & o ? 8192 : 1024),
            (t.params.isTrack = !!(127 & o)),
            (t.params.object = []);
          for (var u = 0; u < i; u++) {
            var s = {};
            (s.objectId =
              (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a]),
              (a += 4),
              (s.operateType = e[a]);
            var f = e[(a += 1)];
            (a += 1), (s.objectType = e[a]);
            var l = e[(a += 1)];
            (a += 1),
              (a += 1),
              (a += 1),
              (s.classID = r[e[a]]),
              (a += 1),
              (s.subType = e[a]),
              (a += 1),
              l > 0 && (s.fatherId = []);
            for (var c = 0; c < l; c++)
              s.fatherId.push(
                (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a]
              ),
                (a += 4);
            f > 0 && (s.track = []);
            for (var p = 0; p < f; p++) {
              var d = (e[a + 1] << 8) + e[a],
                m = (e[(a += 2) + 1] << 8) + e[a],
                _ = (e[(a += 2) + 1] << 8) + e[a],
                h = (e[(a += 2) + 1] << 8) + e[a];
              (a += 2), s.track.push([d - _, m - h, d + _, m + h]);
            }
            t.params.object.push(s);
          }
          return t;
        }
        function s(e) {
          for (
            var t = { result: !1, type: 20, params: [] },
              r = (e[0], e.length),
              a = 0,
              n = e.slice(4),
              o = function () {
                var e = {};
                (e.objectId =
                  (n[a + 3] << 24) +
                  (n[a + 2] << 16) +
                  (n[a + 1] << 8) +
                  (n[a + 0] << 0)),
                  (a += 4),
                  (e.result = !0),
                  (e.params = {}),
                  (e.custom = (n[a + 1] << 8) + n[a]),
                  (a += 2),
                  (e.objectStatus = n[a]);
                var t = n[(a += 1)];
                (a += 1), (e.params.object = []);
                for (var r = null, o = 0; o < t; o++) {
                  switch (n[a]) {
                    case 1:
                      r = c(n.slice(a));
                      break;
                    case 2:
                      r = l(n.slice(a));
                      break;
                    case 3:
                      r = f(n.slice(a));
                      break;
                    case 4:
                      r = p(n.slice(a));
                  }
                  e.params.object.push(r.info), (a += r.offset);
                }
                (1 != e.objectStatus && 3 != e.objectStatus) ||
                  (e.params = null),
                  0 == t && (e.params = null);
                var u = (n[a + 1] << 8) + n[a];
                a += 2;
                var s = i(n.slice(a, a + u));
                return (
                  (e.appendInfo = String.fromCharCode.apply(
                    null,
                    n.slice(a, a + u)
                  )),
                  (a += u),
                  (e.appendInfo = s),
                  e
                );
              };
            a < r - 4;

          )
            t.params.push(o());
          return t;
        }
        function f(e) {
          var t = 0,
            r = { type: e[0] };
          (t += 1),
            (r.pointCount = e[t]),
            (t += 1),
            (r.lineWidth = e[t]),
            (t += 1),
            (r.strokeStyle = e[t]),
            (t += 1),
            (r.borderColor = [e[t + 1], e[t + 2], e[t + 3], e[t]]),
            (r.borderColorType = "RGBA"),
            (t += 4),
            (r.fillColor = [e[t + 1], e[t + 2], e[t + 3], e[t]]),
            (r.fillColorType = "RGBA"),
            (t += 4),
            (r.coordinate = []);
          for (var a = 0; a < r.pointCount; a++) {
            var n = (e[t + 1] << 8) + e[t],
              i = (e[(t += 2) + 1] << 8) + e[t];
            (t += 2), r.coordinate.push([n, i]);
          }
          return { info: r, offset: t };
        }
        function l(e) {
          var t = 0,
            r = { type: e[0] };
          (t += 1),
            (r.pointCount = e[t]),
            (t += 1),
            (r.lineWidth = e[t]),
            (t += 1),
            (r.strokeStyle = e[t]),
            (t += 1),
            (r.lineColor = [e[t + 1], e[t + 2], e[t + 3], e[t]]),
            (r.lineColorType = "RGBA"),
            (t += 4),
            (r.coordinate = []);
          for (var a = 0; a < r.pointCount; a++) {
            var n = (e[t + 1] << 8) + e[t],
              i = (e[(t += 2) + 1] << 8) + e[t];
            (t += 2), r.coordinate.push([n, i]);
          }
          return { info: r, offset: t };
        }
        function c(e) {
          var t = 0,
            r = { type: e[0] };
          (t += 1),
            (r.lineWidth = e[t]),
            (t += 1),
            (r.strokeStyle = e[t]),
            (t += 1),
            (t += 1),
            (r.radius = (e[t + 1] << 8) + e[t]),
            (t += 2);
          var a = (e[(t += 2) + 1] << 8) + e[t],
            n = (e[(t += 2) + 1] << 8) + e[t];
          return (
            (t += 2),
            (r.coordinate = [a, n]),
            (r.borderColor = [e[t + 1], e[t + 2], e[t + 3], e[t]]),
            (r.borderColorType = "RGBA"),
            (t += 4),
            (r.fillColor = [e[t + 1], e[t + 2], e[t + 3], e[t]]),
            (r.fillColorType = "RGBA"),
            { info: r, offset: (t += 4) }
          );
        }
        function p(e) {
          var t = 0,
            r = { type: e[0] };
          (t += 1), (r.encodeType = e[t]), (t += 1);
          var a = (e[(t += 2) + 1] << 8) + e[t],
            n = (e[(t += 2) + 1] << 8) + e[t];
          (t += 2),
            (r.coordinate = [a, n]),
            (r.fontColor = [e[t + 1], e[t + 2], e[t + 3], e[t]]),
            (t += 4),
            (r.colorType = "RGBA"),
            (r.fontSize = e[t]),
            (t += 1),
            (r.textAlign = e[t]),
            (t += 1),
            (r.textBaseline = "top"),
            (r.textLength = (e[t + 1] << 8) + e[t]),
            (t += 2);
          for (
            var o = e.slice(t, t + r.textLength), u = 0;
            u < r.textLength;
            u++
          )
            if (0 === o[u]) {
              o = o.slice(0, u);
              break;
            }
          try {
            r.content = i(o);
          } catch (e) {
            r.content = "";
          }
          return { info: r, offset: (t += r.textLength) };
        }
        function d(e, t) {
          t.hasOwnProperty("attribute80") || (t.attribute80 = []);
          var r = 1,
            a = e[r];
          r += 1;
          var n = { color: {} };
          (n.color.valid = e[r]),
            (r += 1),
            (n.carModel = e[r]),
            (r += 1),
            (n.color.red = e[r]),
            (r += 1),
            (n.color.green = e[r]),
            (r += 1),
            (n.color.blue = e[r]),
            (r += 1),
            (n.color.alpha = e[r]),
            (r += 1),
            (n.brand = (e[r + 1] << 8) + e[r]),
            (r += 2),
            (n.subBrand = (e[r + 1] << 8) + e[r]),
            (r += 2),
            (n.year = (e[r + 1] << 8) + e[r]),
            (r += 2),
            (n.reliability = e[r]),
            (r += 1);
          var i = (e[(r += 1) + 1] << 8) + e[r],
            o = (e[(r += 2) + 1] << 8) + e[r],
            u = (e[(r += 2) + 1] << 8) + e[r],
            s = (e[(r += 2) + 1] << 8) + e[r];
          return (
            (r += 2),
            (n.windowPosition = [i - u, o - s, i + u, o + s]),
            t.attribute80.push(n),
            a
          );
        }
        function m(e, t) {
          t.hasOwnProperty("attribute81") || (t.attribute81 = []);
          var r = {},
            a = 1,
            n = e[a],
            i = (e[(a += 1) + 1] << 8) + e[a],
            o = (e[(a += 2) + 1] << 8) + e[a],
            u = (e[(a += 2) + 1] << 8) + e[a],
            s = (e[(a += 2) + 1] << 8) + e[a];
          return (
            (a += 2),
            (r.mainPosition = [i - u, o - s, i + u, o + s]),
            (i = (e[a + 1] << 8) + e[a]),
            (o = (e[(a += 2) + 1] << 8) + e[a]),
            (u = (e[(a += 2) + 1] << 8) + e[a]),
            (s = (e[(a += 2) + 1] << 8) + e[a]),
            (a += 2),
            (r.coPosition = [i - u, o - s, i + u, o + s]),
            (r.mainSafetyBelt = (e[a] >> 2) & 3),
            (r.coSafetyBelt = 3 & e[a]),
            (a += 1),
            (r.mainSunvisor = (e[a] >> 2) & 3),
            (r.coSunvisor = 3 & e[a]),
            (a += 1),
            t.attribute81.push(r),
            n
          );
        }
        function _(e, t) {
          t.hasOwnProperty("attribute82") || (t.attribute82 = []);
          var r = {},
            a = 1,
            n = e[a];
          return (
            (a += 1),
            (r.plateEncode = e[a]),
            (a += 1),
            (r.plateInfoLen = e[a]),
            (a += 1),
            (r.plateInfo = e.subarray(a, a + r.plateInfoLen)),
            t.attribute82.push(r),
            n
          );
        }
        function h(e, t) {
          t.hasOwnProperty("attribute83") || (t.attribute83 = []);
          var r = {},
            a = 1,
            n = e[a];
          return (
            (a += 1),
            (r.color = {}),
            (r.color.valid = e[a]),
            (a += 1),
            (r.color.red = e[a]),
            (a += 1),
            (r.color.green = e[a]),
            (a += 1),
            (r.color.blue = e[a]),
            (a += 1),
            (r.color.alpha = e[a]),
            (a += 1),
            (r.country = String.fromCharCode.apply(null, e.subarray(a, a + 4))),
            (a += 4),
            (r.plateType = (e[a + 1] << 8) + e[a]),
            (a += 2),
            (a += 1),
            (r.plateWidth = (e[a + 1] << 8) + e[a]),
            t.attribute83.push(r),
            n
          );
        }
        function g(e, t) {
          t.hasOwnProperty("attribute84") || (t.attribute84 = []);
          var r = {},
            a = 1,
            n = e[a];
          (a += 1),
            (r.fatherCount = e[a]),
            (a += 1),
            (r.trackCount = e[a]),
            (a += 1),
            (r.trackType = e[a]),
            (a += 1),
            (a += 3),
            r.fatherCount > 0 && (r.fatherID = []);
          for (var i = 0; i < r.fatherCount; i++)
            r.fatherID.push(
              (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a]
            ),
              (a += 4);
          r.trackCount > 0 && (r.track = []);
          for (var o = 0; o < r.trackCount; o++) {
            var u = (e[a + 1] << 8) + e[a],
              s = (e[(a += 2) + 1] << 8) + e[a],
              f = (e[(a += 2) + 1] << 8) + e[a],
              l = (e[(a += 2) + 1] << 8) + e[a];
            (a += 2), r.track.push([u - f, s - l, u + f, s + l]);
          }
          return t.attribute84.push(r), n;
        }
        function v(e, t) {
          t.hasOwnProperty("attribute85") || (t.attribute85 = []);
          var r = {},
            a = 1,
            n = e[a];
          (a += 1),
            (r.colorSpace = e[a]),
            (a += 1),
            (r.mainColorCount = e[a]),
            (a += 1),
            r.mainColorCount > 0 && (r.mainColorInfo = []);
          for (var i = 0; i < r.mainColorCount; i++) {
            var o = {},
              u = (e[a + 1] << 8) + e[a],
              s = (e[(a += 2) + 1] << 8) + e[a],
              f = (e[(a += 2) + 1] << 8) + e[a],
              l = (e[(a += 2) + 1] << 8) + e[a];
            (a += 2),
              (o.rect = [u - f, s - l, u + f, s + l]),
              (o.color =
                (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a]),
              (a += 4),
              r.mainColorInfo.push(o);
          }
          return t.attribute85.push(r), n;
        }
        function y(e, t) {
          t.hasOwnProperty("attribute86") || (t.attribute86 = []);
          var r = {},
            a = 1,
            n = e[a];
          return (
            (a += 1),
            (a += 1),
            (r.speedType = e[a]),
            (a += 1),
            (r.speed = e[a + 1] << (8 + e[a])),
            (a += 2),
            (r.speedX = e[a + 1] << (8 + e[a])),
            (a += 2),
            (r.speedY = (e[a + 1] << 8) + e[a]),
            t.attribute86.push(r),
            n
          );
        }
        function b(e, t) {
          t.hasOwnProperty("attribute87") || (t.attribute87 = []);
          var r = {},
            a = 1,
            n = e[a];
          a += 1;
          var i = (e[(a += 2) + 1] << 8) + e[a],
            o = (e[(a += 2) + 1] << 8) + e[a],
            u = (e[(a += 2) + 1] << 8) + e[a],
            s = (e[(a += 2) + 1] << 8) + e[a];
          return (
            (r.track = [[i - u, o - s, i + u, o + s]]), t.attribute87.push(r), n
          );
        }
        function D(e, t) {
          t.hasOwnProperty("attribute88") || (t.attribute88 = []);
          var r = {},
            a = 1,
            n = e[a];
          return (
            (a += 1),
            (r.age = e[a]),
            (a += 1),
            (r.sex = e[a]),
            (a += 1),
            (r.face = e[a]),
            (a += 1),
            (r.glass = e[a]),
            (a += 1),
            (r.hat = e[a]),
            (a += 1),
            (r.call = e[a]),
            (a += 1),
            (r.backpack = e[a]),
            (a += 1),
            (r.umbrella = e[a]),
            (a += 1),
            (r.height = e[a]),
            (a += 1),
            (r.mask = (e[a] >> 2) & 3),
            (r.beard = 3 & e[a]),
            t.attribute88.push(r),
            n
          );
        }
        function S(e, t) {
          t.hasOwnProperty("attribute89") || (t.attribute89 = []);
          var r = {},
            a = 1,
            n = e[a];
          (a += 1),
            (r.yawAngle = parseInt((e[a + 1] << 8) + e[a])),
            (a += 2),
            (r.rollAngle = parseInt((e[a + 1] << 8) + e[a])),
            (a += 2),
            (r.pitchAngle = parseInt((e[a + 1] << 8) + e[a]));
          var i = (e[(a += 2) + 1] << 8) + e[a],
            o = (e[(a += 2) + 1] << 8) + e[a];
          (a += 2),
            (r.lEyePos = [i, o]),
            (i = (e[a + 1] << 8) + e[a]),
            (o = (e[(a += 2) + 1] << 8) + e[a]),
            (a += 2),
            (r.rEyePos = [i, o]),
            (i = (e[a + 1] << 8) + e[a]),
            (o = (e[(a += 2) + 1] << 8) + e[a]),
            (a += 2),
            (r.nosePos = [i, o]),
            (i = (e[a + 1] << 8) + e[a]),
            (o = (e[(a += 2) + 1] << 8) + e[a]),
            (a += 2),
            (r.lMouthPos = [i, o]),
            (i = (e[a + 1] << 8) + e[a]),
            (o = (e[(a += 2) + 1] << 8) + e[a]),
            (a += 2),
            (r.rMouthPos = [i, o]);
          var u = e[a];
          (a += 3), u > 0 && (r.featurePos = []);
          for (var s = 0; s < u; s++)
            (i = (e[a + 1] << 8) + e[a]),
              (o = (e[(a += 2) + 1] << 8) + e[a]),
              (a += 2),
              r.featurePos.push([i, o]);
          return t.attribute89.push(r), n;
        }
        function w(e, t) {
          t.hasOwnProperty("attribute8C") || (t.attribute8C = []);
          var r = {},
            a = 1,
            n = e[a];
          (a += 1),
            (r.hangingCount = e[a]),
            (a += 1),
            (r.tissueCount = e[a]),
            (a += 1),
            (r.sunVisorCount = e[a]),
            (a += 1),
            (r.annualInspectionCount = e[a]),
            (a += 1),
            (a += 6),
            r.hangingCount > 0 && (r.hangingCount = []);
          for (var i = 0; i < r.hangingCount; i++) {
            var o = (e[a + 1] << 8) + e[a],
              u = (e[(a += 2) + 1] << 8) + e[a],
              s = (e[(a += 2) + 1] << 8) + e[a],
              f = (e[(a += 2) + 1] << 8) + e[a];
            (a += 2), r.hangingPos.push([o - s, u - f, o + s, u + f]);
          }
          for (
            r.tissueCount > 0 && (r.tissueCount = []), i = 0;
            i < r.tissueCount;
            i++
          )
            (o = (e[a + 1] << 8) + e[a]),
              (u = (e[(a += 2) + 1] << 8) + e[a]),
              (s = (e[(a += 2) + 1] << 8) + e[a]),
              (f = (e[(a += 2) + 1] << 8) + e[a]),
              (a += 2),
              r.tissueCount.push([o - s, u - f, o + s, u + f]);
          for (
            r.sunVisorCount > 0 && (r.sunVisorCount = []), i = 0;
            i < r.tissueCount;
            i++
          )
            (o = (e[a + 1] << 8) + e[a]),
              (u = (e[(a += 2) + 1] << 8) + e[a]),
              (s = (e[(a += 2) + 1] << 8) + e[a]),
              (f = (e[(a += 2) + 1] << 8) + e[a]),
              (a += 2),
              r.sunVisorCount.push([o - s, u - f, o + s, u + f]);
          for (
            r.annualInspectionCount > 0 && (r.annualInspectionCount = []),
              i = 0;
            i < r.tissueCount;
            i++
          )
            (o = (e[a + 1] << 8) + e[a]),
              (u = (e[(a += 2) + 1] << 8) + e[a]),
              (s = (e[(a += 2) + 1] << 8) + e[a]),
              (f = (e[(a += 2) + 1] << 8) + e[a]),
              (a += 2),
              r.annualInspectionCount.push([o - s, u - f, o + s, u + f]);
          return t.attribute8C.push(r), n;
        }
        function T(e, t) {
          t.hasOwnProperty("attribute8E") || (t.attribute8E = []);
          var r = {},
            a = 1,
            n = e[a];
          (a += 1), (r.nameCodecFormat = e[a]);
          var i = e[(a += 1)];
          return (
            (a += 1),
            (r.name = String.fromCharCode.apply(null, e.subarray(a, i))),
            t.attribute8E.push(r),
            n
          );
        }
        function C(e, t) {
          for (
            var r = {
                128: d,
                129: m,
                130: _,
                131: h,
                132: g,
                133: v,
                134: y,
                135: b,
                136: D,
                137: S,
                140: w,
                142: T,
              },
              a = 0,
              n = e[a];
            a < e.length;

          ) {
            var i = e.subarray(a, e.length);
            a += r[n].call(null, i, t);
          }
        }
        function I(e, t) {
          t.hasOwnProperty("vehicleObject") || (t.vehicleObject = []);
          var r = {},
            a = 0;
          (r.type = e[a]), (a += 1);
          var n = (e[(a += 1) + 1] << 8) + e[a];
          (a += 2),
            (r.objectId =
              (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a]);
          var i = (e[(a += 4) + 1] << 8) + e[a],
            o = (e[(a += 2) + 1] << 8) + e[a],
            u = (e[(a += 2) + 1] << 8) + e[a],
            s = (e[(a += 2) + 1] << 8) + e[a];
          return (
            (a += 2),
            (r.track = [[i - u, o - s, i + u, o + s]]),
            (r.valid = e[a]),
            (a += 1),
            (r.operateType = e[a]),
            (a += 1),
            (a += 2),
            C(e.subarray(a, n), r),
            t.vehicleObject.push(r),
            n
          );
        }
        function M(e, t) {
          t.hasOwnProperty("faceObject") || (t.faceObject = []);
          var r = {},
            a = 0;
          (r.type = e[a]), (a += 1);
          var n = (e[(a += 1) + 1] << 8) + e[a];
          return n < 12
            ? 0
            : ((a += 2),
              (r.objectId =
                (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a]),
              (a += 4),
              (r.version = e[a]),
              (a += 1),
              (a += 3),
              (r.faceData = e.subarray(a, n)),
              t.faceObject.push(r),
              n);
        }
        function x(e, t) {
          t.hasOwnProperty("commonObject") || (t.commonObject = []);
          var r = {},
            a = 0;
          (r.type = e[a]), (a += 1);
          var n = (e[(a += 1) + 1] << 8) + e[a];
          return (
            (a += 2),
            (r.objectId =
              (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a]),
            (a += 4),
            (r.operateType = e[a]),
            (a += 1),
            (a += 3),
            C(e.subarray(a, n), r),
            t.commonObject.push(r),
            n
          );
        }
        function A(e, t, r) {
          var a = 0,
            n = (e[a + 3] << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a],
            i = e[(a += 4)];
          if (((a += 1), (a += 3), 0 == i)) return a;
          (t.groupId = n), (t.object = {});
          for (var o = 0; o < i; o++) {
            var u = e[a],
              s = e.subarray(a, e.length),
              f = 0;
            switch (u) {
              case 2:
              case 5:
                f = I(s, t.object);
                break;
              case 15:
                f = M(s, t.object);
                break;
              default:
                f = x(s, t.object);
            }
            if (0 == f) return 0;
            a += f;
          }
          return r(t), a;
        }
        function F(e, t, r) {
          var a = { coordinate: 8192 };
          if (t.length < 32) return !1;
          var n = 4;
          a.classID = e;
          var i = t[n];
          if (0 == i) return !0;
          (a.groupCount = i), (n += 1), (n += 7), (a.cameral = []);
          for (var o = 0; o < 20; o++) a.cameral.push(t[n + o]);
          n += 20;
          for (var u = 0; u < a.groupCount; u++) {
            var s = A(
              t.subarray(n, t.length),
              JSON.parse(JSON.stringify(a)),
              r
            );
            if (s <= 0) break;
            n += s;
          }
        }
        return (
          (n.prototype = {
            init: function () {
              a.debug.log("init");
            },
            parseRTPData: function (a, n, i, f, l, c) {
              var p,
                d =
                  ((n[19] << 24) + (n[18] << 16) + (n[17] << 8) + n[16]) >>> 0;
              p = d >> 26 === 0 ? "2000" : "20" + (d >> 26);
              var m =
                Date.UTC(
                  p,
                  ((d >> 22) & 15) - 1,
                  (d >> 17) & 31,
                  (d >> 12) & 31,
                  (d >> 6) & 63,
                  63 & d
                ) / 1e3;
              if (((m -= 28800), 0 === this.firstTime))
                (this.firstTime = m),
                  (this.lastMSW = 0),
                  (t = (n[21] << 8) + n[20]),
                  (e = { timestamp: this.firstTime, timestamp_usec: 0 });
              else {
                var _,
                  h = (n[21] << 8) + n[20];
                (_ = h >= t ? h - t : h + 65535 - t),
                  (this.lastMSW += _),
                  m > this.firstTime && (this.lastMSW -= 1e3),
                  (this.firstTime = m),
                  (e = { timestamp: m, timestamp_usec: this.lastMSW }),
                  (t = h);
              }
              !(function (t, a, n, i) {
                var f = a[22],
                  l = a.subarray(24 + f, a.length - 8);
                switch (t) {
                  case 0:
                    n({ ivsDraw: o(l), timeStamp: e, channel: i });
                    break;
                  case 5:
                    n({ ivsDraw: u(l), timeStamp: e, channel: i });
                    break;
                  case 6:
                    break;
                  case 14:
                    var c = [];
                    if (
                      ((function (e, t) {
                        for (var a = e.length, n = 0; n + 4 < a; ) {
                          var i = e[n],
                            o = (e[n + 1], (e[n + 3] << 8) + e[n + 2]),
                            u = e.subarray(n, o);
                          if (((n += o), 161 !== i && !F(r[i - 64], u, t)))
                            break;
                        }
                      })(l, function (e) {
                        c.push(e);
                      }),
                      c.length)
                    ) {
                      var p = { result: !1, type: 14, params: c };
                      n({ ivsDraw: p, timeStamp: e, channel: i });
                    }
                    break;
                  case 20:
                    n({ ivsDraw: s(l), timeStamp: e, channel: i });
                }
              })(n[5], n, this.rtpReturnCallback, c);
            },
            setBufferfullCallback: function () {},
            setReturnCallback: function (e) {
              this.rtpReturnCallback = e;
            },
          }),
          new n()
        );
      };
    t.default = n;
  },
]);
