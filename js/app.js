(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            o = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var i,
                s = "LazyLoad::Initialized",
                n = new e(t);
              try {
                i = new CustomEvent(s, { detail: { instance: n } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: n },
                );
              }
              window.dispatchEvent(i);
            },
            d = "src",
            c = "srcset",
            u = "sizes",
            p = "poster",
            f = "llOriginalAttrs",
            m = "data",
            h = "loading",
            v = "loaded",
            g = "applied",
            w = "error",
            b = "native",
            y = "data-",
            S = "ll-status",
            T = function (e, t) {
              return e.getAttribute(y + t);
            },
            E = function (e) {
              return T(e, S);
            },
            x = function (e, t) {
              return (function (e, t, i) {
                var s = "data-ll-status";
                null !== i ? e.setAttribute(s, i) : e.removeAttribute(s);
              })(e, 0, t);
            },
            M = function (e) {
              return x(e, null);
            },
            C = function (e) {
              return null === E(e);
            },
            P = function (e) {
              return E(e) === b;
            },
            _ = [h, v, g, w],
            L = function (e, t, i, s) {
              e &&
                (void 0 === s ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, s));
            },
            k = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            A = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            G = function (e, t) {
              e && (e.toLoadCount = t);
            },
            D = function (e) {
              for (var t, i = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            B = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && D(i).forEach(t);
            },
            N = function (e, t) {
              D(e).forEach(t);
            },
            V = [d],
            F = [d, p],
            H = [d, c, u],
            j = [m],
            $ = function (e) {
              return !!e[f];
            },
            q = function (e) {
              return e[f];
            },
            R = function (e) {
              return delete e[f];
            },
            W = function (e, t) {
              if (!$(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[f] = i);
              }
            },
            Y = function (e, t) {
              if ($(e)) {
                var i = q(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            X = function (e, t, i) {
              k(e, t.class_applied),
                x(e, g),
                i &&
                  (t.unobserve_completed && O(e, t),
                  L(t.callback_applied, e, i));
            },
            U = function (e, t, i) {
              k(e, t.class_loading),
                x(e, h),
                i && (z(i, 1), L(t.callback_loading, e, i));
            },
            Q = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            K = function (e, t) {
              Q(e, u, T(e, t.data_sizes)),
                Q(e, c, T(e, t.data_srcset)),
                Q(e, d, T(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                B(e, function (e) {
                  W(e, H), K(e, t);
                }),
                  W(e, H),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                W(e, V), Q(e, d, T(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  W(e, V), Q(e, d, T(e, t.data_src));
                }),
                  W(e, F),
                  Q(e, p, T(e, t.data_poster)),
                  Q(e, d, T(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                W(e, j), Q(e, m, T(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var s = t[i];
                  ie(e, i, s);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                A(e, t.class_loading),
                t.unobserve_completed && O(e, i);
            },
            ae = function (e, t, i) {
              var s = I(e) || e;
              se(s) ||
                (function (e, t, i) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", i);
                })(
                  s,
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = P(t);
                      re(t, i, s),
                        k(t, i.class_loaded),
                        x(t, v),
                        L(i.callback_loaded, t, s),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  },
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = P(t);
                      re(t, i, s),
                        k(t, i.class_error),
                        x(t, w),
                        L(i.callback_error, t, s),
                        i.restore_on_error && Y(t, H),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  },
                );
            },
            oe = function (e, t, i) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, i),
                      (function (e) {
                        $(e) ||
                          (e[f] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var s = T(e, t.data_bg),
                          n = T(e, t.data_bg_hidpi),
                          a = r && n ? n : s;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          I(e).setAttribute(d, a),
                          U(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = T(e, t.data_bg_multi),
                          n = T(e, t.data_bg_multi_hidpi),
                          a = r && n ? n : s;
                        a && ((e.style.backgroundImage = a), X(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = T(e, t.data_bg_set);
                        if (s) {
                          var n = s.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            X(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    ae(e, t, i),
                      (function (e, t, i) {
                        var s = J[e.tagName];
                        s && (s(e, t), U(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            le = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(u);
            },
            de = function (e) {
              B(e, function (e) {
                Y(e, H);
              }),
                Y(e, H);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                Y(e, V);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  Y(e, V);
                }),
                  Y(e, F),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, j);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if ($(e)) {
                        var t = q(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  C(e) ||
                    P(e) ||
                    (A(e, t.class_entered),
                    A(e, t.class_exited),
                    A(e, t.class_applied),
                    A(e, t.class_loading),
                    A(e, t.class_loaded),
                    A(e, t.class_error));
                })(e, t),
                M(e),
                R(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            fe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            me = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, s) {
                      var n = (function (e) {
                        return _.indexOf(E(e)) >= 0;
                      })(e);
                      x(e, "entered"),
                        k(e, i.class_entered),
                        A(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && O(e, i);
                        })(e, i, s),
                        L(i.callback_enter, e, t, s),
                        n || oe(e, i, s);
                    })(e.target, e, t, i)
                  : (function (e, t, i, s) {
                      C(e) ||
                        (k(e, i.class_exited),
                        (function (e, t, i, s) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return E(e) === h;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              B(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            de(e),
                            A(e, i.class_loading),
                            z(s, -1),
                            M(e),
                            L(i.callback_cancel, e, t, s));
                        })(e, t, i, s),
                        L(i.callback_exit, e, t, s));
                    })(e.target, e, t, i);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            ve = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ge = function (e) {
              return (function (e) {
                return E(e) === w;
              })(e);
            },
            we = function (e, t) {
              return (function (e) {
                return he(e).filter(C);
              })(e || ve(t));
            },
            be = function (e, i) {
              var n = o(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !fe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        me(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(n, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = ve(e)), he(i).filter(ge)).forEach(function (t) {
                          A(t, e.class_error), M(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(n, this),
                this.update(i);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  a = we(e, r);
                G(this, a.length),
                  !i && s
                    ? fe(r)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, i),
                                  (function (e, t) {
                                    var i = J[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  x(e, b);
                              })(e, t, i);
                          }),
                            G(i, 0);
                        })(a, r, this)
                      : ((n = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ve(this._settings).forEach(function (e) {
                    R(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                we(e, i).forEach(function (e) {
                  O(e, t), oe(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ve(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var i = o(t);
              oe(e, i);
            }),
            (be.resetStatus = function (e) {
              M(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, s = 0; (i = t[s]); s += 1) l(e, i);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, i), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          i = t.dataset.da.trim().split(","),
          s = {};
        (s.element = t),
          (s.parent = t.parentNode),
          (s.destination = document.querySelector(i[0].trim())),
          (s.breakpoint = i[1] ? i[1].trim() : "767"),
          (s.place = i[2] ? i[2].trim() : "last"),
          (s.index = this.indexInParent(s.parent, s.element)),
          this.оbjects.push(s);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, i) {
            return Array.prototype.indexOf.call(i, e) === t;
          },
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const i = this.mediaQueries[t],
          s = String.prototype.split.call(i, ","),
          n = window.matchMedia(s[0]),
          r = s[1],
          a = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        n.addListener(function () {
          e.mediaHandler(n, a);
        }),
          this.mediaHandler(n, a);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            (i.index = this.indexInParent(i.parent, i.element)),
              this.moveTo(i.place, i.element, i.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const i = t[e];
            i.element.classList.contains(this.daClassname) &&
              this.moveBack(i.parent, i.element, i.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, i) {
        t.classList.add(this.daClassname),
          "last" === e || e >= i.children.length
            ? i.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? i.children[e].insertAdjacentElement("beforebegin", t)
            : i.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, i) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[i]
            ? e.children[i].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const i = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(i, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    let t = (e, t = 500, i = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = i ? `${i}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !i),
              !i && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !i && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      s = (e, t = 500, i = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            i && e.style.removeProperty("height");
          let s = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = i ? `${i}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = s + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      n = !0,
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      };
    function o(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function l(e, t) {
      const i = Array.from(e).filter(function (e, i, s) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (i.length) {
        const e = [];
        i.forEach((i) => {
          const s = {},
            n = i.dataset[t].split(",");
          (s.value = n[0]),
            (s.type = n[1] ? n[1].trim() : "max"),
            (s.item = i),
            e.push(s);
        });
        let s = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        s = (function (e) {
          return e.filter(function (e, t, i) {
            return i.indexOf(e) === t;
          });
        })(s);
        const n = [];
        if (s.length)
          return (
            s.forEach((t) => {
              const i = t.split(","),
                s = i[1],
                r = i[2],
                a = window.matchMedia(i[0]),
                o = e.filter(function (e) {
                  if (e.value === s && e.type === r) return !0;
                });
              n.push({ itemsArray: o, matchMedia: a });
            }),
            n
          );
      }
    }
    let d = (e, t = !1, i = 500, s = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let a = "",
          l = 0;
        t &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: i,
          header: a,
          offset: s,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (r(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", d);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        o(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    function c(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function u(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : c(t[i]) &&
              c(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              u(e[i], t[i]);
        });
    }
    const p = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function f() {
      const e = "undefined" != typeof document ? document : {};
      return u(e, p), e;
    }
    const m = {
      document: p,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function h() {
      const e = "undefined" != typeof window ? window : {};
      return u(e, m), e;
    }
    function v(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function g() {
      return Date.now();
    }
    function w(e, t) {
      void 0 === t && (t = "x");
      const i = h();
      let s, n, r;
      const a = (function (e) {
        const t = h();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((n = a.transform || a.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = r.toString().split(","))),
        "x" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    }
    function b(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function y() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (
          null != n &&
          ((i = n),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const i = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = i.length; t < s; t += 1) {
            const s = i[t],
              r = Object.getOwnPropertyDescriptor(n, s);
            void 0 !== r &&
              r.enumerable &&
              (b(e[s]) && b(n[s])
                ? n[s].__swiper__
                  ? (e[s] = n[s])
                  : y(e[s], n[s])
                : !b(e[s]) && b(n[s])
                ? ((e[s] = {}), n[s].__swiper__ ? (e[s] = n[s]) : y(e[s], n[s]))
                : (e[s] = n[s]));
          }
        }
      }
      var i;
      return e;
    }
    function S(e, t, i) {
      e.style.setProperty(t, i);
    }
    function T(e) {
      let { swiper: t, targetPosition: i, side: s } = e;
      const n = h(),
        r = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const d = i > r ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + d * (i - r);
          if ((c(p, i) && (p = i), t.wrapperEl.scrollTo({ [s]: p }), c(p, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: p });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    function E(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function x(e, t) {
      void 0 === t && (t = []);
      const i = document.createElement(e);
      return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
    }
    function M(e, t) {
      return h().getComputedStyle(e, null).getPropertyValue(t);
    }
    function C(e) {
      let t,
        i = e;
      if (i) {
        for (t = 0; null !== (i = i.previousSibling); )
          1 === i.nodeType && (t += 1);
        return t;
      }
    }
    function P(e, t, i) {
      const s = h();
      return i
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    let _, L, k;
    function A() {
      return (
        _ ||
          (_ = (function () {
            const e = h(),
              t = f();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        _
      );
    }
    function I(e) {
      return (
        void 0 === e && (e = {}),
        L ||
          (L = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = A(),
              s = h(),
              n = s.navigator.platform,
              r = t || s.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = s.screen.width,
              l = s.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === n;
            let m = "MacIntel" === n;
            return (
              !c &&
                m &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${l}`) >= 0 &&
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (m = !1)),
              d && !f && ((a.os = "android"), (a.android = !0)),
              (c || p || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        L
      );
    }
    function O() {
      return (
        k ||
          (k = (function () {
            const e = h();
            let t = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const i = String(e.navigator.userAgent);
              if (i.includes("Version/")) {
                const [e, s] = i
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && s < 2);
              }
            }
            return {
              isSafari: t || i(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
            };
          })()),
        k
      );
    }
    var z = {
      on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const n = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][n](t);
          }),
          s
        );
      },
      once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function n() {
          s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
            r[a] = arguments[a];
          t.apply(s, r);
        }
        return (n.__emitterProxy = t), s.on(e, n, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const s = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((s, n) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(n, 1);
                  });
            }),
            i)
          : i;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, i, s;
        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
          : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
          i.unshift(s);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(s, [t, ...i]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(s, i);
                });
          }),
          e
        );
      },
    };
    const G = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const i = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (i) {
          const t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      },
      D = (e, t) => {
        if (!e.slides[t]) return;
        const i = e.slides[t].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading");
      },
      B = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const i = e.slides.length;
        if (!i || !t || t < 0) return;
        t = Math.min(t, i);
        const s =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          n = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const i = n,
            r = [i - t];
          return (
            r.push(...Array.from({ length: t }).map((e, t) => i + s + t)),
            void e.slides.forEach((t, i) => {
              r.includes(t.column) && D(e, i);
            })
          );
        }
        const r = n + s - 1;
        if (e.params.rewind || e.params.loop)
          for (let s = n - t; s <= r + t; s += 1) {
            const t = ((s % i) + i) % i;
            (t < n || t > r) && D(e, t);
          }
        else
          for (let s = Math.max(n - t, 0); s <= Math.min(r + t, i - 1); s += 1)
            s !== n && (s > r || s < n) && D(e, s);
      };
    var N = {
      updateSize: function () {
        const e = this;
        let t, i;
        const s = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s.clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(M(s, "padding-left") || 0, 10) -
              parseInt(M(s, "padding-right") || 0, 10)),
            (i =
              i -
              parseInt(M(s, "padding-top") || 0, 10) -
              parseInt(M(s, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: n,
            slidesEl: r,
            size: a,
            rtlTranslate: o,
            wrongRTL: l,
          } = e,
          d = e.virtual && s.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          u = E(r, `.${e.params.slideClass}, swiper-slide`),
          p = d ? e.virtual.slides.length : u.length;
        let f = [];
        const m = [],
          h = [];
        let v = s.slidesOffsetBefore;
        "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
        let g = s.slidesOffsetAfter;
        "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
        const w = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = s.spaceBetween,
          T = -v,
          x = 0,
          C = 0;
        if (void 0 === a) return;
        "string" == typeof y && y.indexOf("%") >= 0
          ? (y = (parseFloat(y.replace("%", "")) / 100) * a)
          : "string" == typeof y && (y = parseFloat(y)),
          (e.virtualSize = -y),
          u.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          s.centeredSlides &&
            s.cssMode &&
            (S(n, "--swiper-centered-offset-before", ""),
            S(n, "--swiper-centered-offset-after", ""));
        const _ = s.grid && s.grid.rows > 1 && e.grid;
        let L;
        _ && e.grid.initSlides(p);
        const k =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let n = 0; n < p; n += 1) {
          let r;
          if (
            ((L = 0),
            u[n] && (r = u[n]),
            _ && e.grid.updateSlide(n, r, p, t),
            !u[n] || "none" !== M(r, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              k && (u[n].style[t("width")] = "");
              const a = getComputedStyle(r),
                o = r.style.transform,
                l = r.style.webkitTransform;
              if (
                (o && (r.style.transform = "none"),
                l && (r.style.webkitTransform = "none"),
                s.roundLengths)
              )
                L = e.isHorizontal() ? P(r, "width", !0) : P(r, "height", !0);
              else {
                const e = i(a, "width"),
                  t = i(a, "padding-left"),
                  s = i(a, "padding-right"),
                  n = i(a, "margin-left"),
                  o = i(a, "margin-right"),
                  l = a.getPropertyValue("box-sizing");
                if (l && "border-box" === l) L = e + n + o;
                else {
                  const { clientWidth: i, offsetWidth: a } = r;
                  L = e + t + s + n + o + (a - i);
                }
              }
              o && (r.style.transform = o),
                l && (r.style.webkitTransform = l),
                s.roundLengths && (L = Math.floor(L));
            } else
              (L = (a - (s.slidesPerView - 1) * y) / s.slidesPerView),
                s.roundLengths && (L = Math.floor(L)),
                u[n] && (u[n].style[t("width")] = `${L}px`);
            u[n] && (u[n].swiperSlideSize = L),
              h.push(L),
              s.centeredSlides
                ? ((T = T + L / 2 + x / 2 + y),
                  0 === x && 0 !== n && (T = T - a / 2 - y),
                  0 === n && (T = T - a / 2 - y),
                  Math.abs(T) < 0.001 && (T = 0),
                  s.roundLengths && (T = Math.floor(T)),
                  C % s.slidesPerGroup == 0 && f.push(T),
                  m.push(T))
                : (s.roundLengths && (T = Math.floor(T)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && f.push(T),
                  m.push(T),
                  (T = T + L + y)),
              (e.virtualSize += L + y),
              (x = L),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + g),
          o &&
            l &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (n.style.width = `${e.virtualSize + y}px`),
          s.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + y}px`),
          _ && e.grid.updateWrapperSize(L, f, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < f.length; i += 1) {
            let n = f[i];
            s.roundLengths && (n = Math.floor(n)),
              f[i] <= e.virtualSize - a && t.push(n);
          }
          (f = t),
            Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 &&
              f.push(e.virtualSize - a);
        }
        if (d && s.loop) {
          const t = h[0] + y;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup,
              ),
              n = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + n);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === s.slidesPerGroup && f.push(f[f.length - 1] + t),
              m.push(m[m.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === f.length && (f = [0]), 0 !== y)) {
          const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== u.length - 1,
          ).forEach((e) => {
            e.style[i] = `${y}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (y || 0);
          }),
            (e -= y);
          const t = e - a;
          f = f.map((e) => (e <= 0 ? -v : e > t ? t + g : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (y || 0);
            }),
            (e -= y),
            e < a)
          ) {
            const t = (a - e) / 2;
            f.forEach((e, i) => {
              f[i] = e - t;
            }),
              m.forEach((e, i) => {
                m[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: f,
            slidesGrid: m,
            slidesSizesGrid: h,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          S(n, "--swiper-centered-offset-before", -f[0] + "px"),
            S(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (p !== c && e.emit("slidesLengthChange"),
          f.length !== w &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          m.length !== b && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          p <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          s = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) => (s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              i.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !s) break;
              i.push(a(e));
            }
        else i.push(a(t.activeIndex));
        for (n = 0; n < i.length; n += 1)
          if (void 0 !== i[n]) {
            const e = i[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          i = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset =
            (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
            i -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          i = t.params,
          { slides: s, rtlTranslate: n, snapGrid: r } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        n && (a = e),
          s.forEach((e) => {
            e.classList.remove(i.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let o = i.spaceBetween;
        "string" == typeof o && o.indexOf("%") >= 0
          ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
          : "string" == typeof o && (o = parseFloat(o));
        for (let e = 0; e < s.length; e += 1) {
          const l = s[e];
          let d = l.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
          const c =
              (a + (i.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + o),
            u =
              (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + o),
            p = -(a - d),
            f = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (f > 1 && f <= t.size) ||
            (p <= 0 && f >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            s[e].classList.add(i.slideVisibleClass)),
            (l.progress = n ? -c : c),
            (l.originalProgress = n ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: a, progressLoop: o } = t;
        const l = r,
          d = a;
        if (0 === s) (n = 0), (r = !0), (a = !0);
        else {
          n = (e - t.minTranslate()) / s;
          const i = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (r = i || n <= 0), (a = o || n >= 1), i && (n = 0), o && (n = 1);
        }
        if (i.loop) {
          const i = t.getSlideIndexByData(0),
            s = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[i],
            r = t.slidesGrid[s],
            a = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (o = l >= n ? (l - n) / a : (l + a - r) / a), o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: o,
          isBeginning: r,
          isEnd: a,
        }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          a && !d && t.emit("reachEnd toEdge"),
          ((l && !r) || (d && !a)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: i, slidesEl: s, activeIndex: n } = e,
          r = e.virtual && i.virtual.enabled,
          a = (e) => E(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
        let o;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              i.slideActiveClass,
              i.slideNextClass,
              i.slidePrevClass,
            );
          }),
          r)
        )
          if (i.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = a(`[data-swiper-slide-index="${t}"]`));
          } else o = a(`[data-swiper-slide-index="${n}"]`);
        else o = t[n];
        if (o) {
          o.classList.add(i.slideActiveClass);
          let e = (function (e, t) {
            const i = [];
            for (; e.nextElementSibling; ) {
              const s = e.nextElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(o, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
          let s = (function (e, t) {
            const i = [];
            for (; e.previousElementSibling; ) {
              const s = e.previousElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(o, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && 0 === !s && (s = t[t.length - 1]),
            s && s.classList.add(i.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: s,
            params: n,
            activeIndex: r,
            realIndex: a,
            snapIndex: o,
          } = t;
        let l,
          d = e;
        const c = (e) => {
          let i = e - t.virtual.slidesBefore;
          return (
            i < 0 && (i = t.virtual.slides.length + i),
            i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
            i
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: i } = e,
                s = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : s >= t[e] && s < t[e + 1] && (n = e + 1)
                  : s >= t[e] && (n = e);
              return (
                i.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          s.indexOf(i) >= 0)
        )
          l = s.indexOf(i);
        else {
          const e = Math.min(n.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / n.slidesPerGroup);
        }
        if ((l >= s.length && (l = s.length - 1), d === r))
          return (
            l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = c(d))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? c(d)
            : t.slides[d]
            ? parseInt(
                t.slides[d].getAttribute("data-swiper-slide-index") || d,
                10,
              )
            : d),
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: r,
            activeIndex: d,
          }),
          t.initialized && B(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          s = e.closest(`.${i.slideClass}, swiper-slide`);
        let n,
          r = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (r = !0), (n = e);
              break;
            }
        if (!s || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                s.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (t.clickedIndex = n),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    var V = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: i, translate: s, wrapperEl: n } = this;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        let r = w(n, e);
        return (r += this.cssOverflowAdjustment()), i && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          { rtlTranslate: s, params: n, wrapperEl: r, progress: a } = i;
        let o,
          l = 0,
          d = 0;
        i.isHorizontal() ? (l = s ? -e : e) : (d = e),
          n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? l : d),
          n.cssMode
            ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -l : -d)
            : n.virtualTranslate ||
              (i.isHorizontal()
                ? (l -= i.cssOverflowAdjustment())
                : (d -= i.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
        const c = i.maxTranslate() - i.minTranslate();
        (o = 0 === c ? 0 : (e - i.minTranslate()) / c),
          o !== a && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === s && (s = !0);
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = s && e > l ? l : s && e < d ? d : e),
          r.updateProgress(c),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                T({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              i &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              i &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd,
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      i && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function F(e) {
      let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = s;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${n}`),
        i && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === o
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    var H = {
      slideTo: function (e, t, i, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: m,
        } = r;
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!m && !s && !n)
        )
          return !1;
        const h = Math.min(r.params.slidesPerGroupSkip, a);
        let v = h + Math.floor((a - h) / r.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1);
        const g = -l[v];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * g),
              i = Math.floor(100 * d[e]),
              s = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= i && t < s - (s - i) / 2
                ? (a = e)
                : t >= i && t < s && (a = e + 1)
              : t >= i && (a = e);
          }
        if (r.initialized && a !== u) {
          if (
            !r.allowSlideNext &&
            (p
              ? g > r.translate && g > r.minTranslate()
              : g < r.translate && g < r.minTranslate())
          )
            return !1;
          if (
            !r.allowSlidePrev &&
            g > r.translate &&
            g > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let w;
        if (
          (a !== (c || 0) && i && r.emit("beforeSlideChangeStart"),
          r.updateProgress(g),
          (w = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -g === r.translate) || (!p && g === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(g),
            "reset" !== w && (r.transitionStart(i, w), r.transitionEnd(i, w)),
            !1
          );
        if (o.cssMode) {
          const e = r.isHorizontal(),
            i = p ? g : -g;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    f[e ? "scrollLeft" : "scrollTop"] = i;
                  }))
                : (f[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                T({ swiper: r, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(g),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, s),
          r.transitionStart(i, w),
          0 === t
            ? r.transitionEnd(i, w)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd,
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(i, w));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, i, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const n = this;
        let r = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (r += n.virtual.slidesBefore)
              : (r = n.getSlideIndexByData(r))),
          n.slideTo(r, t, i, s)
        );
      },
      slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          { enabled: n, params: r, animating: a } = s;
        if (!n) return s;
        let o = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
          d = s.virtual && r.virtual.enabled;
        if (r.loop) {
          if (a && !d && r.loopPreventsSliding) return !1;
          s.loopFix({ direction: "next" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        return r.rewind && s.isEnd
          ? s.slideTo(0, e, t, i)
          : s.slideTo(s.activeIndex + l, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          {
            params: n,
            snapGrid: r,
            slidesGrid: a,
            rtlTranslate: o,
            enabled: l,
            animating: d,
          } = s;
        if (!l) return s;
        const c = s.virtual && n.virtual.enabled;
        if (n.loop) {
          if (d && !c && n.loopPreventsSliding) return !1;
          s.loopFix({ direction: "prev" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(o ? s.translate : -s.translate),
          f = r.map((e) => u(e));
        let m = r[f.indexOf(p) - 1];
        if (void 0 === m && n.cssMode) {
          let e;
          r.forEach((t, i) => {
            p >= t && (e = i);
          }),
            void 0 !== e && (m = r[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== m &&
            ((h = a.indexOf(m)),
            h < 0 && (h = s.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((h = h - s.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          n.rewind && s.isBeginning)
        ) {
          const n =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(n, e, t, i);
        }
        return s.slideTo(h, e, t, i);
      },
      slideReset: function (e, t, i) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, i)
        );
      },
      slideToClosest: function (e, t, i, s) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === s && (s = 0.5);
        const n = this;
        let r = n.activeIndex;
        const a = Math.min(n.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          l - e > (n.snapGrid[o + 1] - e) * s && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[o - 1];
          l - e <= (n.snapGrid[o] - e) * s && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: i } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? r < e.loopedSlides - s / 2 ||
                r > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    E(i, `${a}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  v(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - s
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  E(i, `${a}[data-swiper-slide-index="${n}"]`)[0],
                )),
                v(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    var j = {
      loopCreate: function (e) {
        const t = this,
          { params: i, slidesEl: s } = t;
        if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
        E(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: i.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: i = !0,
          direction: s,
          setTranslate: n,
          activeSlideIndex: r,
          byController: a,
          byMousewheel: o,
        } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
          slides: d,
          allowSlidePrev: c,
          allowSlideNext: u,
          slidesEl: p,
          params: f,
        } = l;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && f.virtual.enabled)
        )
          return (
            i &&
              (f.centeredSlides || 0 !== l.snapIndex
                ? f.centeredSlides && l.snapIndex < f.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = c),
            (l.allowSlideNext = u),
            void l.emit("loopFix")
          );
        const m =
          "auto" === f.slidesPerView
            ? l.slidesPerViewDynamic()
            : Math.ceil(parseFloat(f.slidesPerView, 10));
        let h = f.loopedSlides || m;
        h % f.slidesPerGroup != 0 &&
          (h += f.slidesPerGroup - (h % f.slidesPerGroup)),
          (l.loopedSlides = h);
        const v = [],
          g = [];
        let w = l.activeIndex;
        void 0 === r
          ? (r = l.getSlideIndex(
              l.slides.filter((e) =>
                e.classList.contains(f.slideActiveClass),
              )[0],
            ))
          : (w = r);
        const b = "next" === s || !s,
          y = "prev" === s || !s;
        let S = 0,
          T = 0;
        if (r < h) {
          S = Math.max(h - r, f.slidesPerGroup);
          for (let e = 0; e < h - r; e += 1) {
            const t = e - Math.floor(e / d.length) * d.length;
            v.push(d.length - t - 1);
          }
        } else if (r > l.slides.length - 2 * h) {
          T = Math.max(r - (l.slides.length - 2 * h), f.slidesPerGroup);
          for (let e = 0; e < T; e += 1) {
            const t = e - Math.floor(e / d.length) * d.length;
            g.push(t);
          }
        }
        if (
          (y &&
            v.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.prepend(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          b &&
            g.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.append(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === f.slidesPerView && l.updateSlides(),
          f.watchSlidesProgress && l.updateSlidesOffset(),
          i)
        )
          if (v.length > 0 && y)
            if (void 0 === t) {
              const e = l.slidesGrid[w],
                t = l.slidesGrid[w + S] - e;
              o
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(w + S, 0, !1, !0),
                  n &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else n && l.slideToLoop(t, 0, !1, !0);
          else if (g.length > 0 && b)
            if (void 0 === t) {
              const e = l.slidesGrid[w],
                t = l.slidesGrid[w - T] - e;
              o
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(w - T, 0, !1, !0),
                  n &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else l.slideToLoop(t, 0, !1, !0);
        if (
          ((l.allowSlidePrev = c),
          (l.allowSlideNext = u),
          l.controller && l.controller.control && !a)
        ) {
          const e = {
            slideRealIndex: t,
            slideTo: !1,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((t) => {
                !t.destroyed && t.params.loop && t.loopFix(e);
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix(e);
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: i } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const s = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          s[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          s.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function $(e) {
      const t = this,
        i = f(),
        s = h(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = l.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(d)) return;
      if ("which" in l && 3 === l.which) return;
      if ("button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const c = !!r.noSwipingClass && "" !== r.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      c && l.target && l.target.shadowRoot && u && (d = u[0]);
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        m = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (m
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === f() || i === h()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const s = i.closest(e);
                  return s || i.getRootNode
                    ? s || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(p, d)
          : d.closest(p))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
      (a.currentX = l.pageX), (a.currentY = l.pageY);
      const v = a.currentX,
        w = a.currentY,
        b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (b && (v <= y || v >= s.innerWidth - y)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (a.startX = v),
        (a.startY = w),
        (n.touchStartTime = g()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1);
      let S = !0;
      d.matches(n.focusableElements) &&
        ((S = !1), "SELECT" === d.nodeName && (n.isTouched = !1)),
        i.activeElement &&
          i.activeElement.matches(n.focusableElements) &&
          i.activeElement !== d &&
          i.activeElement.blur();
      const T = S && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !T) ||
        d.isContentEditable ||
        l.preventDefault(),
        r.freeMode &&
          r.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function q(e) {
      const t = f(),
        i = this,
        s = i.touchEventsData,
        { params: n, touches: r, rtlTranslate: a, enabled: o } = i;
      if (!o) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          i.emit("touchMoveOpposite", l)
        );
      const d = s.evCache.findIndex((e) => e.pointerId === l.pointerId);
      d >= 0 && (s.evCache[d] = l);
      const c = s.evCache.length > 1 ? s.evCache[0] : l,
        u = c.pageX,
        p = c.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!i.allowTouchMove)
        return (
          l.target.matches(s.focusableElements) || (i.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              prevX: i.touches.currentX,
              prevY: i.touches.currentY,
              currentX: u,
              currentY: p,
            }),
            (s.touchStartTime = g()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (i.isVertical()) {
          if (
            (p < r.startY && i.translate <= i.maxTranslate()) ||
            (p > r.startY && i.translate >= i.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (u < r.startX && i.translate <= i.maxTranslate()) ||
          (u > r.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(s.focusableElements)
      )
        return (s.isMoved = !0), void (i.allowClick = !1);
      if (
        (s.allowTouchCallbacks && i.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const m = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (i.params.threshold && Math.sqrt(m ** 2 + h ** 2) < i.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (i.isHorizontal() && r.currentY === r.startY) ||
        (i.isVertical() && r.currentX === r.startX)
          ? (s.isScrolling = !1)
          : m * m + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(m))) / Math.PI),
            (s.isScrolling = i.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (s.isScrolling && i.emit("touchMoveOpposite", l),
        void 0 === s.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (s.startMoving = !0)),
        s.isScrolling ||
          (i.zoom &&
            i.params.zoom &&
            i.params.zoom.enabled &&
            s.evCache.length > 1))
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (i.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
      let v = i.isHorizontal() ? m : h,
        w = i.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      n.oneWayMovement &&
        ((v = Math.abs(v) * (a ? 1 : -1)), (w = Math.abs(w) * (a ? 1 : -1))),
        (r.diff = v),
        (v *= n.touchRatio),
        a && ((v = -v), (w = -w));
      const b = i.touchesDirection;
      (i.swipeDirection = v > 0 ? "prev" : "next"),
        (i.touchesDirection = w > 0 ? "prev" : "next");
      const y = i.params.loop && !n.cssMode;
      if (!s.isMoved) {
        if (
          (y && i.loopFix({ direction: i.swipeDirection }),
          (s.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          i.wrapperEl.dispatchEvent(e);
        }
        (s.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", l);
      }
      let S;
      s.isMoved &&
        b !== i.touchesDirection &&
        y &&
        Math.abs(v) >= 1 &&
        (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }),
        (S = !0)),
        i.emit("sliderMove", l),
        (s.isMoved = !0),
        (s.currentTranslate = v + s.startTranslate);
      let T = !0,
        E = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (E = 0),
        v > 0
          ? (y &&
              !S &&
              s.currentTranslate >
                (n.centeredSlides
                  ? i.minTranslate() - i.size / 2
                  : i.minTranslate()) &&
              i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            s.currentTranslate > i.minTranslate() &&
              ((T = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + v) ** E)))
          : v < 0 &&
            (y &&
              !S &&
              s.currentTranslate <
                (n.centeredSlides
                  ? i.maxTranslate() + i.size / 2
                  : i.maxTranslate()) &&
              i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  i.slides.length -
                  ("auto" === n.slidesPerView
                    ? i.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            s.currentTranslate < i.maxTranslate() &&
              ((T = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - v) ** E))),
        T && (l.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(v) > n.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            void (r.diff = i.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
          n.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        n.freeMode &&
          n.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate));
    }
    function R(e) {
      const t = this,
        i = t.touchEventsData,
        s = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (s >= 0 && i.evCache.splice(s, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      ) {
        if (
          !(
            "pointercancel" === e.type &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: n,
        touches: r,
        rtlTranslate: a,
        slidesGrid: o,
        enabled: l,
      } = t;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", d),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = g(),
        u = c - i.touchStartTime;
      if (t.allowClick) {
        const e = d.path || (d.composedPath && d.composedPath());
        t.updateClickedSlide((e && e[0]) || d.target),
          t.emit("tap click", d),
          u < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d);
      }
      if (
        ((i.lastClickTime = g()),
        v(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let p;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (p = n.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (n.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let f = 0,
        m = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? p >= o[e] && p < o[e + t] && ((f = e), (m = o[e + t] - o[e]))
          : p >= o[e] && ((f = e), (m = o[o.length - 1] - o[o.length - 2]));
      }
      let h = null,
        w = null;
      n.rewind &&
        (t.isBeginning
          ? (w =
              n.virtual && n.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const b = (p - o[f]) / m,
        y = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (b >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? h : f + y)
            : t.slideTo(f)),
          "prev" === t.swipeDirection &&
            (b > 1 - n.longSwipesRatio
              ? t.slideTo(f + y)
              : null !== w && b < 0 && Math.abs(b) > n.longSwipesRatio
              ? t.slideTo(w)
              : t.slideTo(f));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
          ? d.target === t.navigation.nextEl
            ? t.slideTo(f + y)
            : t.slideTo(f)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : f + y),
            "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
      }
    }
    function W() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e,
        a = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = a && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !a
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function Y(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function X() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function U(e) {
      const t = this;
      G(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let Q = !1;
    function K() {}
    const J = (e, t) => {
      const i = f(),
        { params: s, el: n, wrapperEl: r, device: a } = e,
        o = !!s.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
        i[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (s.preventClicks || s.preventClicksPropagation) &&
          n[l]("click", e.onClick, !0),
        s.cssMode && r[l]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[d](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              W,
              !0,
            )
          : e[d]("observerUpdate", W, !0),
        n[l]("load", e.onLoad, { capture: !0 });
    };
    const Z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var ee = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function te(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0],
          n = i[s];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in n
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                y(t, i))
              : y(t, i))
          : y(t, i);
      };
    }
    const ie = {
        eventsEmitter: z,
        update: N,
        translate: V,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode ||
              (i.wrapperEl.style.transitionDuration = `${e}ms`),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              F({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                F({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: H,
        loop: j,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = f(),
              { params: i } = e;
            (e.onTouchStart = $.bind(e)),
              (e.onTouchMove = q.bind(e)),
              (e.onTouchEnd = R.bind(e)),
              i.cssMode && (e.onScroll = X.bind(e)),
              (e.onClick = Y.bind(e)),
              (e.onLoad = U.bind(e)),
              Q || (t.addEventListener("touchstart", K), (Q = !0)),
              J(e, "on");
          },
          detachEvents: function () {
            J(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: i, params: s, el: n } = e,
              r = s.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const o = (a in r ? r[a] : void 0) || e.originalParams,
              l = Z(e, s),
              d = Z(e, o),
              c = s.enabled;
            l && !d
              ? (n.classList.remove(
                  `${s.containerModifierClass}grid`,
                  `${s.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (n.classList.add(`${s.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === s.grid.fill)) &&
                  n.classList.add(`${s.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === o[t]) return;
                const i = s[t] && s[t].enabled,
                  n = o[t] && o[t].enabled;
                i && !n && e[t].disable(), !i && n && e[t].enable();
              });
            const u = o.direction && o.direction !== s.direction,
              p = s.loop && (o.slidesPerView !== s.slidesPerView || u);
            u && i && e.changeDirection(), y(e.params, o);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !f ? e.disable() : !c && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", o),
              p && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t, i) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !i))
            )
              return;
            let s = !1;
            const n = h(),
              r = "window" === t ? n.innerHeight : i.clientHeight,
              a = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              const { point: r, value: o } = a[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${o}px)`).matches && (s = r)
                : o <= i.clientWidth && (s = r);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: i, rtl: s, el: n, device: r } = e,
              a = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && i.push(t + s);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  i.direction,
                  { "free-mode": e.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: s },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    "grid-column":
                      i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                  { "watch-progress": i.watchSlidesProgress },
                ],
                i.containerModifierClass,
              );
            t.push(...a), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      se = {};
    class ne {
      constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
          s[n] = arguments[n];
        1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
          t || (t = {}),
          (t = y({}, t)),
          e && !t.el && (t.el = e);
        const r = f();
        if (
          t.el &&
          "string" == typeof t.el &&
          r.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            r.querySelectorAll(t.el).forEach((i) => {
              const s = y({}, t, { el: i });
              e.push(new ne(s));
            }),
            e
          );
        }
        const a = this;
        (a.__swiper__ = !0),
          (a.support = A()),
          (a.device = I({ userAgent: t.userAgent })),
          (a.browser = O()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const o = {};
        a.modules.forEach((e) => {
          e({
            params: t,
            swiper: a,
            extendParams: te(t, o),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const l = y({}, ee, o);
        return (
          (a.params = y({}, l, se, t)),
          (a.originalParams = y({}, a.params)),
          (a.passedParams = y({}, t)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: i } = this,
          s = C(E(t, `.${i.slideClass}, swiper-slide`)[0]);
        return C(e) - s;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = E(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
          n = (i.maxTranslate() - s) * e + s;
        i.translateTo(n, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: s,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = s[o] ? s[o].swiperSlideSize : 0;
          for (let i = o + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let i = o - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < s.length; e += 1) {
            (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            n[o] - n[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        if (
          (i.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && G(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          i.freeMode && i.freeMode.enabled && !i.cssMode)
        )
          s(), i.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
            e.isEnd &&
            !i.centeredSlides
          ) {
            const t =
              e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
            n = e.slideTo(t.length - 1, 0, !1, !0);
          } else n = e.slideTo(e.activeIndex, 0, !1, !0);
          n || s();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (("string" == typeof i && (i = document.querySelector(i)), !i))
          return !1;
        (i.swiper = t), i.parentNode && i.parentNode.host && (t.isElement = !0);
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (i && i.shadowRoot && i.shadowRoot.querySelector) {
            return i.shadowRoot.querySelector(s());
          }
          return E(i, s())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = x("div", t.params.wrapperClass)),
            i.append(n),
            E(i, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: i,
            wrapperEl: n,
            slidesEl: t.isElement ? i.parentNode.host : n,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === M(i, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === i.dir.toLowerCase() || "rtl" === M(i, "direction")),
            wrongRTL: "-webkit-box" === M(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? G(t, e)
                : e.addEventListener("load", (e) => {
                    G(t, e.target);
                  });
            }),
            B(t),
            (t.initialized = !0),
            B(t),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: s, el: n, wrapperEl: r, slides: a } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              n.removeAttribute("style"),
              r.removeAttribute("style"),
              a &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        y(se, e);
      }
      static get extendedDefaults() {
        return se;
      }
      static get defaults() {
        return ee;
      }
      static installModule(e) {
        ne.prototype.__modules__ || (ne.prototype.__modules__ = []);
        const t = ne.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ne.installModule(e)), ne)
          : (ne.installModule(e), ne);
      }
    }
    function re(e) {
      let { swiper: t, extendParams: i, on: s, emit: n } = e;
      i({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function a(e) {
        let i;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((i = t.el.querySelector(e)), i)
          ? i
          : (e &&
              ("string" == typeof e && (i = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (i = t.el.querySelector(e))),
            e && !i ? e : i);
      }
      function o(e, i) {
        const s = t.params.navigation;
        (e = r(e)).forEach((e) => {
          e &&
            (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = i),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass));
        });
      }
      function l() {
        const { nextEl: e, prevEl: i } = t.navigation;
        if (t.params.loop) return o(i, !1), void o(e, !1);
        o(i, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function d(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), n("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), n("navigationNext"));
      }
      function u() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = (function (e, t, i, s) {
            return (
              e.params.createElements &&
                Object.keys(s).forEach((n) => {
                  if (!i[n] && !0 === i.auto) {
                    let r = E(e.el, `.${s[n]}`)[0];
                    r ||
                      ((r = x("div", s[n])),
                      (r.className = s[n]),
                      e.el.append(r)),
                      (i[n] = r),
                      (t[n] = r);
                  }
                }),
              i
            );
          })(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          })),
          !e.nextEl && !e.prevEl)
        )
          return;
        let i = a(e.nextEl),
          s = a(e.prevEl);
        Object.assign(t.navigation, { nextEl: i, prevEl: s }),
          (i = r(i)),
          (s = r(s));
        const n = (i, s) => {
          i && i.addEventListener("click", "next" === s ? c : d),
            !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
        };
        i.forEach((e) => n(e, "next")), s.forEach((e) => n(e, "prev"));
      }
      function p() {
        let { nextEl: e, prevEl: i } = t.navigation;
        (e = r(e)), (i = r(i));
        const s = (e, i) => {
          e.removeEventListener("click", "next" === i ? c : d),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => s(e, "next")), i.forEach((e) => s(e, "prev"));
      }
      s("init", () => {
        !1 === t.params.navigation.enabled ? f() : (u(), l());
      }),
        s("toEdge fromEdge lock unlock", () => {
          l();
        }),
        s("destroy", () => {
          p();
        }),
        s("enable disable", () => {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = r(e)),
            (i = r(i)),
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.navigation.lockClass,
                ),
              );
        }),
        s("click", (e, i) => {
          let { nextEl: s, prevEl: a } = t.navigation;
          (s = r(s)), (a = r(a));
          const o = i.target;
          if (
            t.params.navigation.hideOnClick &&
            !a.includes(o) &&
            !s.includes(o)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            s.length
              ? (e = s[0].classList.contains(t.params.navigation.hiddenClass))
              : a.length &&
                (e = a[0].classList.contains(t.params.navigation.hiddenClass)),
              n(!0 === e ? "navigationShow" : "navigationHide"),
              [...s, ...a]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                );
          }
        });
      const f = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            u(),
            l();
        },
        disable: f,
        update: l,
        init: u,
        destroy: p,
      });
    }
    function ae(e) {
      let t,
        i,
        { swiper: s, extendParams: n, on: r, emit: a, params: o } = e;
      (s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let l,
        d,
        c,
        u,
        p,
        m,
        h,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        g = o && o.autoplay ? o.autoplay.delay : 3e3,
        w = new Date().getTime;
      function b(e) {
        s &&
          !s.destroyed &&
          s.wrapperEl &&
          e.target === s.wrapperEl &&
          (s.wrapperEl.removeEventListener("transitionend", b), M());
      }
      const y = () => {
          if (s.destroyed || !s.autoplay.running) return;
          s.autoplay.paused ? (d = !0) : d && ((g = l), (d = !1));
          const e = s.autoplay.paused ? l : w + g - new Date().getTime();
          (s.autoplay.timeLeft = e),
            a("autoplayTimeLeft", e, e / v),
            (i = requestAnimationFrame(() => {
              y();
            }));
        },
        S = (e) => {
          if (s.destroyed || !s.autoplay.running) return;
          cancelAnimationFrame(i), y();
          let n = void 0 === e ? s.params.autoplay.delay : e;
          (v = s.params.autoplay.delay), (g = s.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                s.virtual && s.params.virtual.enabled
                  ? s.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                  : s.slides[s.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((n = r), (v = r), (g = r)),
            (l = n);
          const o = s.params.speed,
            d = () => {
              s &&
                !s.destroyed &&
                (s.params.autoplay.reverseDirection
                  ? !s.isBeginning || s.params.loop || s.params.rewind
                    ? (s.slidePrev(o, !0, !0), a("autoplay"))
                    : s.params.autoplay.stopOnLastSlide ||
                      (s.slideTo(s.slides.length - 1, o, !0, !0), a("autoplay"))
                  : !s.isEnd || s.params.loop || s.params.rewind
                  ? (s.slideNext(o, !0, !0), a("autoplay"))
                  : s.params.autoplay.stopOnLastSlide ||
                    (s.slideTo(0, o, !0, !0), a("autoplay")),
                s.params.cssMode &&
                  ((w = new Date().getTime()),
                  requestAnimationFrame(() => {
                    S();
                  })));
            };
          return (
            n > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  d();
                }, n)))
              : requestAnimationFrame(() => {
                  d();
                }),
            n
          );
        },
        T = () => {
          (s.autoplay.running = !0), S(), a("autoplayStart");
        },
        E = () => {
          (s.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(i),
            a("autoplayStop");
        },
        x = (e, i) => {
          if (s.destroyed || !s.autoplay.running) return;
          clearTimeout(t), e || (h = !0);
          const n = () => {
            a("autoplayPause"),
              s.params.autoplay.waitForTransition
                ? s.wrapperEl.addEventListener("transitionend", b)
                : M();
          };
          if (((s.autoplay.paused = !0), i))
            return m && (l = s.params.autoplay.delay), (m = !1), void n();
          const r = l || s.params.autoplay.delay;
          (l = r - (new Date().getTime() - w)),
            (s.isEnd && l < 0 && !s.params.loop) || (l < 0 && (l = 0), n());
        },
        M = () => {
          (s.isEnd && l < 0 && !s.params.loop) ||
            s.destroyed ||
            !s.autoplay.running ||
            ((w = new Date().getTime()),
            h ? ((h = !1), S(l)) : S(),
            (s.autoplay.paused = !1),
            a("autoplayResume"));
        },
        C = () => {
          if (s.destroyed || !s.autoplay.running) return;
          const e = f();
          "hidden" === e.visibilityState && ((h = !0), x(!0)),
            "visible" === e.visibilityState && M();
        },
        P = (e) => {
          "mouse" === e.pointerType && ((h = !0), x(!0));
        },
        _ = (e) => {
          "mouse" === e.pointerType && s.autoplay.paused && M();
        };
      r("init", () => {
        s.params.autoplay.enabled &&
          (s.params.autoplay.pauseOnMouseEnter &&
            (s.el.addEventListener("pointerenter", P),
            s.el.addEventListener("pointerleave", _)),
          f().addEventListener("visibilitychange", C),
          (w = new Date().getTime()),
          T());
      }),
        r("destroy", () => {
          s.el.removeEventListener("pointerenter", P),
            s.el.removeEventListener("pointerleave", _),
            f().removeEventListener("visibilitychange", C),
            s.autoplay.running && E();
        }),
        r("beforeTransitionStart", (e, t, i) => {
          !s.destroyed &&
            s.autoplay.running &&
            (i || !s.params.autoplay.disableOnInteraction ? x(!0, !0) : E());
        }),
        r("sliderFirstMove", () => {
          !s.destroyed &&
            s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction
              ? E()
              : ((c = !0),
                (u = !1),
                (h = !1),
                (p = setTimeout(() => {
                  (h = !0), (u = !0), x(!0);
                }, 200))));
        }),
        r("touchEnd", () => {
          if (!s.destroyed && s.autoplay.running && c) {
            if (
              (clearTimeout(p),
              clearTimeout(t),
              s.params.autoplay.disableOnInteraction)
            )
              return (u = !1), void (c = !1);
            u && s.params.cssMode && M(), (u = !1), (c = !1);
          }
        }),
        r("slideChange", () => {
          !s.destroyed && s.autoplay.running && (m = !0);
        }),
        Object.assign(s.autoplay, { start: T, stop: E, pause: x, resume: M });
    }
    function oe(e) {
      let t,
        i,
        s,
        { swiper: n, extendParams: r } = e;
      r({ grid: { rows: 1, fill: "column" } });
      const a = () => {
        let e = n.params.spaceBetween;
        return (
          "string" == typeof e && e.indexOf("%") >= 0
            ? (e = (parseFloat(e.replace("%", "")) / 100) * n.size)
            : "string" == typeof e && (e = parseFloat(e)),
          e
        );
      };
      n.grid = {
        initSlides: (e) => {
          const { slidesPerView: r } = n.params,
            { rows: a, fill: o } = n.params.grid;
          (s = Math.floor(e / a)),
            (t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a),
            "auto" !== r && "row" === o && (t = Math.max(t, r * a)),
            (i = t / a);
        },
        updateSlide: (e, r, o, l) => {
          const { slidesPerGroup: d } = n.params,
            c = a(),
            { rows: u, fill: p } = n.params.grid;
          let f, m, h;
          if ("row" === p && d > 1) {
            const i = Math.floor(e / (d * u)),
              s = e - u * d * i,
              n = 0 === i ? d : Math.min(Math.ceil((o - i * u * d) / u), d);
            (h = Math.floor(s / n)),
              (m = s - h * n + i * d),
              (f = m + (h * t) / u),
              (r.style.order = f);
          } else
            "column" === p
              ? ((m = Math.floor(e / u)),
                (h = e - m * u),
                (m > s || (m === s && h === u - 1)) &&
                  ((h += 1), h >= u && ((h = 0), (m += 1))))
              : ((h = Math.floor(e / i)), (m = e - h * i));
          (r.row = h),
            (r.column = m),
            (r.style[l("margin-top")] = 0 !== h ? c && `${c}px` : "");
        },
        updateWrapperSize: (e, i, s) => {
          const { centeredSlides: r, roundLengths: o } = n.params,
            l = a(),
            { rows: d } = n.params.grid;
          if (
            ((n.virtualSize = (e + l) * t),
            (n.virtualSize = Math.ceil(n.virtualSize / d) - l),
            (n.wrapperEl.style[s("width")] = `${n.virtualSize + l}px`),
            r)
          ) {
            const e = [];
            for (let t = 0; t < i.length; t += 1) {
              let s = i[t];
              o && (s = Math.floor(s)),
                i[t] < n.virtualSize + i[0] && e.push(s);
            }
            i.splice(0, i.length), i.push(...e);
          }
        },
      };
    }
    function le() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(ie).forEach((e) => {
      Object.keys(ie[e]).forEach((t) => {
        ne.prototype[t] = ie[e][t];
      });
    }),
      ne.use([
        function (e) {
          let { swiper: t, on: i, emit: s } = e;
          const n = h();
          let r = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = n.requestAnimationFrame(() => {
                    const { width: i, height: s } = t;
                    let n = i,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: s, target: a } = e;
                      (a && a !== t.el) ||
                        ((n = s ? s.width : (i[0] || i).inlineSize),
                        (r = s ? s.height : (i[0] || i).blockSize));
                    }),
                      (n === i && r === s) || o();
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", o),
                n.addEventListener("orientationchange", l));
          }),
            i("destroy", () => {
              a && n.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", o),
                n.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: n } = e;
          const r = [],
            a = h(),
            o = function (e, i) {
              void 0 === i && (i = {});
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const i = function () {
                    n("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(i)
                    : a.setTimeout(i, 0);
                },
              );
              s.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData,
              }),
                r.push(s);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = (function (e, t) {
                    const i = [];
                    let s = e.parentElement;
                    for (; s; )
                      t ? s.matches(t) && i.push(s) : i.push(s),
                        (s = s.parentElement);
                    return i;
                  })(t.el);
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.el, { childList: t.params.observeSlideChildren }),
                  o(t.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]),
      window.addEventListener("load", function (e) {
        le(),
          document.querySelector(".swiper") &&
            (new ne(".row-header__slider", {
              modules: [ae],
              autoplay: {
                delay: 5e3,
                disableOnInteraction: !1,
                pauseOnMouseEnter: !0,
              },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 30,
              autoHeight: !1,
              speed: 800,
              on: {},
            }),
            new ne(".cofee-choose__slider", {
              modules: [re, oe],
              observer: !0,
              observeParents: !0,
              autoHeight: !1,
              speed: 600,
              rewind: !0,
              navigation: { nextEl: ".cofee-choose__btn-next-slide" },
              breakpoints: {
                320: { slidesPerView: 1.2, spaceBetween: 10 },
                375: { slidesPerView: 1.4, spaceBetween: 10 },
                480: { slidesPerView: 1.7, spaceBetween: 30 },
                575: { slidesPerView: 2.2, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                992: { slidesPerView: 2, grid: { fill: "row", rows: 2 } },
                1200: {
                  slidesPerView: 2.2,
                  spaceBetween: 30,
                  grid: { fill: "row", rows: 2 },
                },
              },
            }),
            new ne(".combo__slider", {
              modules: [re],
              observer: !0,
              observeParents: !0,
              autoHeight: !1,
              speed: 600,
              centeredSlides: !0,
              centeredSlidesBounds: !0,
              rewind: !0,
              navigation: { nextEl: ".combo__btn-next-slide" },
              breakpoints: {
                320: { slidesPerView: 1.2, spaceBetween: 10 },
                375: { slidesPerView: 1.4, spaceBetween: 10 },
                480: { slidesPerView: 1.7, spaceBetween: 30 },
                575: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 2.6, spaceBetween: 30 },
                992: { slidesPerView: 3.33, spaceBetween: 30 },
              },
            }));
      });
    new (i(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let de = !1;
    setTimeout(() => {
      if (de) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            n &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? r(e)
                  : a(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let i = [];
        if (e.length > 0) {
          const t = location.hash.replace("#", "");
          t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
            e.forEach((e, t) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", r),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-titles]>*"),
                    s = e.querySelectorAll("[data-tabs-body]>*"),
                    n = e.dataset.tabsIndex,
                    r = i[0] == n;
                  if (r) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active",
                    ).classList.remove("_tab-active");
                  }
                  s.length > 0 &&
                    s.forEach((e, s) => {
                      t[s].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        r && s == i[1] && t[s].classList.add("_tab-active"),
                        (e.hidden = !t[s].classList.contains("_tab-active"));
                    });
                })(e);
            });
          let s = l(e, "tabs");
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              }),
                n(e.itemsArray, e.matchMedia);
            });
        }
        function n(e, t) {
          e.forEach((e) => {
            const i = (e = e.item).querySelector("[data-tabs-titles]"),
              s = e.querySelectorAll("[data-tabs-title]"),
              n = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((r, a) => {
              t.matches
                ? (n.append(s[a]), n.append(r), e.classList.add("_tab-spoller"))
                : (i.append(s[a]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function r(e) {
          const i = e.target;
          if (i.closest("[data-tabs-title]")) {
            const n = i.closest("[data-tabs-title]"),
              r = n.closest("[data-tabs]");
            if (
              !n.classList.contains("_tab-active") &&
              !r.querySelectorAll("._slide").length
            ) {
              const e = r.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                n.classList.add("_tab-active"),
                (function (e) {
                  const i = e.querySelectorAll("[data-tabs-title]"),
                    n = e.querySelectorAll("[data-tabs-item]"),
                    r = e.dataset.tabsIndex,
                    a = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  n.length > 0 &&
                    n.forEach((e, n) => {
                      i[n].classList.contains("_tab-active")
                        ? (a ? s(e, a) : (e.hidden = !1),
                          e.closest(".popup") ||
                            (location.hash = `tab-${r}-${n}`))
                        : a
                        ? t(e, a)
                        : (e.hidden = !0);
                    });
                })(r);
            }
            e.preventDefault();
          }
        }
      })(),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const i = t.closest("[data-goto]"),
                s = i.dataset.goto ? i.dataset.goto : "",
                n = !!i.hasAttribute("data-goto-header"),
                r = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
              d(s, n, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              i = t.target;
            if ("navigator" === i.dataset.watch) {
              const e = i.id,
                s =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="#${e}"]`));
              t.isIntersecting
                ? s && s.classList.add("_navigator-active")
                : s && s.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
