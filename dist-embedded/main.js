!(function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: r,
        })
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 21))
})([
  function(e, t, n) {
    'use strict'
    ;(function(e) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.__spread = t.unstable_renderSubtreeIntoContainer = t.PureComponent = t.Component = t.unmountComponentAtNode = t.findDOMNode = t.isValidElement = t.cloneElement = t.createElement = t.createFactory = t.createClass = t.render = t.Children = t.PropTypes = t.DOM = t.version = void 0)
      var r,
        o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              },
        i = n(1),
        a = (r = i) && r.__esModule ? r : { default: r },
        s = n(28)
      var l = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(
          ' '
        ),
        u =
          ('undefined' != typeof Symbol &&
            Symbol.for &&
            Symbol.for('react.element')) ||
          60103,
        c =
          'undefined' != typeof Symbol && Symbol.for
            ? Symbol.for('__preactCompatWrapper')
            : '__preactCompatWrapper',
        d = {
          constructor: 1,
          render: 1,
          shouldComponentUpdate: 1,
          componentWillReceiveProps: 1,
          componentWillUpdate: 1,
          componentDidUpdate: 1,
          componentWillMount: 1,
          componentDidMount: 1,
          componentWillUnmount: 1,
          componentDidUnmount: 1,
        },
        f = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
        p = {},
        h =
          void 0 === e ||
          !Object({
            NODE_ENV: 'production',
            EMBEDDED: 'true',
            WIDGET_NAME: 'wc2018-tournament-overview-widget',
          }) ||
          !1
      function b() {
        return null
      }
      var m = (0, s.h)('a', null).constructor
      ;(m.prototype.$$typeof = u),
        (m.prototype.preactCompatUpgraded = !1),
        (m.prototype.preactCompatNormalized = !1),
        Object.defineProperty(m.prototype, 'type', {
          get: function() {
            return this.nodeName
          },
          set: function(e) {
            this.nodeName = e
          },
          configurable: !0,
        }),
        Object.defineProperty(m.prototype, 'props', {
          get: function() {
            return this.attributes
          },
          set: function(e) {
            this.attributes = e
          },
          configurable: !0,
        })
      var y = s.options.event
      s.options.event = function(e) {
        return y && (e = y(e)), (e.persist = Object), (e.nativeEvent = e), e
      }
      var v = s.options.vnode
      function g(e, t, n) {
        var r = t && t._preactCompatRendered && t._preactCompatRendered.base
        r && r.parentNode !== t && (r = null),
          !r && t && (r = t.firstElementChild)
        for (var o = t.childNodes.length; o--; )
          t.childNodes[o] !== r && t.removeChild(t.childNodes[o])
        var i = (0, s.render)(e, t, r)
        return (
          t && (t._preactCompatRendered = i && (i._component || { base: i })),
          'function' == typeof n && n(),
          (i && i._component) || i
        )
      }
      s.options.vnode = function(e) {
        if (!e.preactCompatUpgraded) {
          e.preactCompatUpgraded = !0
          var t = e.nodeName,
            n = (e.attributes = j({}, e.attributes))
          'function' == typeof t
            ? (!0 === t[c] ||
                (t.prototype && 'isReactComponent' in t.prototype)) &&
              (e.children && '' === String(e.children) && (e.children = void 0),
              e.children && (n.children = e.children),
              e.preactCompatNormalized || M(e),
              (function(e) {
                var t = e.nodeName,
                  n = e.attributes
                ;(e.attributes = {}),
                  t.defaultProps && j(e.attributes, t.defaultProps)
                n && j(e.attributes, n)
              })(e))
            : (e.children && '' === String(e.children) && (e.children = void 0),
              e.children && (n.children = e.children),
              n.defaultValue &&
                (n.value || 0 === n.value || (n.value = n.defaultValue),
                delete n.defaultValue),
              (function(e, t) {
                var n, r, o
                if (t) {
                  for (o in t) if ((n = f.test(o))) break
                  if (n)
                    for (o in ((r = e.attributes = {}), t))
                      t.hasOwnProperty(o) &&
                        (r[
                          f.test(o)
                            ? o.replace(/([A-Z0-9])/, '-$1').toLowerCase()
                            : o
                        ] =
                          t[o])
                }
              })(e, n))
        }
        v && v(e)
      }
      var _ = function() {}
      function A(e, t, n, r) {
        var o = g((0, s.h)(_, { context: e.context }, t), n),
          i = o._component || o.base
        return r && r.call(i, o), i
      }
      function w(e) {
        var t = e._preactCompatRendered && e._preactCompatRendered.base
        return (
          !(!t || t.parentNode !== e) && ((0, s.render)((0, s.h)(b), e, t), !0)
        )
      }
      ;(_.prototype.getChildContext = function() {
        return this.props.context
      }),
        (_.prototype.render = function(e) {
          return e.children[0]
        })
      var E,
        k = [],
        O = {
          map: function(e, t, n) {
            return null == e
              ? null
              : ((e = O.toArray(e)), n && n !== e && (t = t.bind(n)), e.map(t))
          },
          forEach: function(e, t, n) {
            if (null == e) return null
            ;(e = O.toArray(e)), n && n !== e && (t = t.bind(n)), e.forEach(t)
          },
          count: function(e) {
            return (e && e.length) || 0
          },
          only: function(e) {
            if (1 !== (e = O.toArray(e)).length)
              throw new Error('Children.only() expects only one child.')
            return e[0]
          },
          toArray: function(e) {
            return null == e ? [] : k.concat(e)
          },
        }
      function x(e) {
        return N.bind(null, e)
      }
      for (var T = {}, S = l.length; S--; ) T[l[S]] = x(l[S])
      function C(e) {
        var t,
          n = e[c]
        return n
          ? !0 === n
            ? e
            : n
          : ((n = W({
              displayName: (t = e).displayName || t.name,
              render: function() {
                return t(this.props, this.context)
              },
            })),
            Object.defineProperty(n, c, { configurable: !0, value: !0 }),
            (n.displayName = e.displayName),
            (n.propTypes = e.propTypes),
            (n.defaultProps = e.defaultProps),
            Object.defineProperty(e, c, { configurable: !0, value: n }),
            n)
      }
      function N() {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
        return (
          (function e(t, n) {
            for (var r = n || 0; r < t.length; r++) {
              var i = t[r]
              Array.isArray(i)
                ? e(i)
                : i &&
                  'object' === (void 0 === i ? 'undefined' : o(i)) &&
                  !I(i) &&
                  ((i.props && i.type) ||
                    (i.attributes && i.nodeName) ||
                    i.children) &&
                  (t[r] = N(
                    i.type || i.nodeName,
                    i.props || i.attributes,
                    i.children
                  ))
            }
          })(e, 2),
          M(s.h.apply(void 0, e))
        )
      }
      function M(e) {
        var t
        ;(e.preactCompatNormalized = !0),
          (function(e) {
            var t = e.attributes || (e.attributes = {})
            ;(L.enumerable = 'className' in t),
              t.className && (t.class = t.className)
            Object.defineProperty(t, 'className', L)
          })(e),
          'function' != typeof (t = e.nodeName) ||
            (t.prototype && t.prototype.render) ||
            (e.nodeName = C(e.nodeName))
        var n,
          r,
          i = e.attributes.ref,
          a = i && (void 0 === i ? 'undefined' : o(i))
        return (
          !E ||
            ('string' !== a && 'number' !== a) ||
            (e.attributes.ref = ((n = i),
            (r = E)._refProxies[n] ||
              (r._refProxies[n] = function(e) {
                r &&
                  r.refs &&
                  ((r.refs[n] = e),
                  null === e && (delete r._refProxies[n], (r = null)))
              }))),
          (function(e) {
            var t = e.nodeName,
              n = e.attributes
            if (!n || 'string' != typeof t) return
            var r = {}
            for (var o in n) r[o.toLowerCase()] = o
            r.ondoubleclick &&
              ((n.ondblclick = n[r.ondoubleclick]), delete n[r.ondoubleclick])
            if (
              r.onchange &&
              ('textarea' === t ||
                ('input' === t.toLowerCase() && !/^fil|che|rad/i.test(n.type)))
            ) {
              var i = r.oninput || 'oninput'
              n[i] || ((n[i] = F([n[i], n[r.onchange]])), delete n[r.onchange])
            }
          })(e),
          e
        )
      }
      function P(e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0; )
          n[r] = arguments[r + 2]
        if (!I(e)) return e
        var o = e.attributes || e.props,
          i = [
            (0, s.h)(
              e.nodeName || e.type,
              j({}, o),
              e.children || (o && o.children)
            ),
            t,
          ]
        return (
          n && n.length ? i.push(n) : t && t.children && i.push(t.children),
          M(s.cloneElement.apply(void 0, i))
        )
      }
      function I(e) {
        return e && (e instanceof m || e.$$typeof === u)
      }
      var L = {
        configurable: !0,
        get: function() {
          return this.class
        },
        set: function(e) {
          this.class = e
        },
      }
      function j(e, t) {
        for (var n = arguments, r = 1, o = void 0; r < arguments.length; r++)
          if ((o = n[r])) for (var i in o) o.hasOwnProperty(i) && (e[i] = o[i])
        return e
      }
      function D(e, t) {
        for (var n in e) if (!(n in t)) return !0
        for (var r in t) if (e[r] !== t[r]) return !0
        return !1
      }
      function R(e) {
        return (e && e.base) || e
      }
      function B() {}
      function W(e) {
        function t(e, t) {
          !(function(e) {
            for (var t in e) {
              var n = e[t]
              'function' != typeof n ||
                n.__bound ||
                d.hasOwnProperty(t) ||
                ((e[t] = n.bind(e)).__bound = !0)
            }
          })(this),
            G.call(this, e, t, p),
            H.call(this, e, t)
        }
        return (
          (e = j({ constructor: t }, e)).mixins &&
            (function(e, t) {
              for (var n in t)
                t.hasOwnProperty(n) &&
                  (e[n] = F(
                    t[n].concat(e[n] || k),
                    'getDefaultProps' === n ||
                      'getInitialState' === n ||
                      'getChildContext' === n
                  ))
            })(
              e,
              (function(e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                  var r = e[n]
                  for (var o in r)
                    r.hasOwnProperty(o) &&
                      'function' == typeof r[o] &&
                      (t[o] || (t[o] = [])).push(r[o])
                }
                return t
              })(e.mixins)
            ),
          e.statics && j(t, e.statics),
          e.propTypes && (t.propTypes = e.propTypes),
          e.defaultProps && (t.defaultProps = e.defaultProps),
          e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(t)),
          (B.prototype = G.prototype),
          (t.prototype = j(new B(), e)),
          (t.displayName = e.displayName || 'Component'),
          t
        )
      }
      function U(e, t, n) {
        if (
          ('string' == typeof t && (t = e.constructor.prototype[t]),
          'function' == typeof t)
        )
          return t.apply(e, n)
      }
      function F(e, t) {
        return function() {
          for (var n, r = arguments, o = 0; o < e.length; o++) {
            var i = U(this, e[o], r)
            if (t && null != i)
              for (var a in (n || (n = {}), i))
                i.hasOwnProperty(a) && (n[a] = i[a])
            else void 0 !== i && (n = i)
          }
          return n
        }
      }
      function H(e, t) {
        V.call(this, e, t),
          (this.componentWillReceiveProps = F([
            V,
            this.componentWillReceiveProps || 'componentWillReceiveProps',
          ])),
          (this.render = F([V, J, this.render || 'render', z]))
      }
      function V(e, t) {
        if (e) {
          var n = e.children
          if (
            (n &&
              Array.isArray(n) &&
              1 === n.length &&
              ('string' == typeof n[0] ||
                'function' == typeof n[0] ||
                n[0] instanceof m) &&
              ((e.children = n[0]),
              e.children &&
                'object' === o(e.children) &&
                ((e.children.length = 1), (e.children[0] = e.children))),
            h)
          ) {
            var r = 'function' == typeof this ? this : this.constructor,
              i = this.propTypes || r.propTypes,
              s = this.displayName || r.name
            i && a.default.checkPropTypes(i, e, 'prop', s)
          }
        }
      }
      function J(e) {
        E = this
      }
      function z() {
        E === this && (E = null)
      }
      function G(e, t, n) {
        s.Component.call(this, e, t),
          (this.state = this.getInitialState ? this.getInitialState() : {}),
          (this.refs = {}),
          (this._refProxies = {}),
          n !== p && H.call(this, e, t)
      }
      function q(e, t) {
        G.call(this, e, t)
      }
      j((G.prototype = new s.Component()), {
        constructor: G,
        isReactComponent: {},
        replaceState: function(e, t) {
          for (var n in (this.setState(e, t), this.state))
            n in e || delete this.state[n]
        },
        getDOMNode: function() {
          return this.base
        },
        isMounted: function() {
          return !!this.base
        },
      }),
        (B.prototype = G.prototype),
        (q.prototype = new B()),
        (q.prototype.isPureReactComponent = !0),
        (q.prototype.shouldComponentUpdate = function(e, t) {
          return D(this.props, e) || D(this.state, t)
        })
      var K = {
        version: '15.1.0',
        DOM: T,
        PropTypes: a.default,
        Children: O,
        render: g,
        createClass: W,
        createFactory: x,
        createElement: N,
        cloneElement: P,
        isValidElement: I,
        findDOMNode: R,
        unmountComponentAtNode: w,
        Component: G,
        PureComponent: q,
        unstable_renderSubtreeIntoContainer: A,
        __spread: j,
      }
      ;(t.version = '15.1.0'),
        (t.DOM = T),
        (t.PropTypes = a.default),
        (t.Children = O),
        (t.render = g),
        (t.createClass = W),
        (t.createFactory = x),
        (t.createElement = N),
        (t.cloneElement = P),
        (t.isValidElement = I),
        (t.findDOMNode = R),
        (t.unmountComponentAtNode = w),
        (t.Component = G),
        (t.PureComponent = q),
        (t.unstable_renderSubtreeIntoContainer = A),
        (t.__spread = j),
        (t.default = K)
    }.call(t, n(10)))
  },
  function(e, t, n) {
    'use strict'
    'function' == typeof Symbol && Symbol.iterator
    e.exports = n(24)()
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      var t = []
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || '',
                r = e[3]
              if (!r) return n
              if (t && 'function' == typeof btoa) {
                var o = ((a = r),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                    ' */'),
                  i = r.sources.map(function(e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */'
                  })
                return [n]
                  .concat(i)
                  .concat([o])
                  .join('\n')
              }
              var a
              return [n].join('\n')
            })(t, e)
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n
          }).join('')
        }),
        (t.i = function(e, n) {
          'string' == typeof e && (e = [[null, e, '']])
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0]
            'number' == typeof i && (r[i] = !0)
          }
          for (o = 0; o < e.length; o++) {
            var a = e[o]
            ;('number' == typeof a[0] && r[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
              t.push(a))
          }
        }),
        t
      )
    }
  },
  function(e, t, n) {
    var r,
      o,
      i = {},
      a = ((r = function() {
        return window && document && document.all && !window.atob
      }),
      function() {
        return void 0 === o && (o = r.apply(this, arguments)), o
      }),
      s = (function(e) {
        var t = {}
        return function(e) {
          if ('function' == typeof e) return e()
          if (void 0 === t[e]) {
            var n = function(e) {
              return document.querySelector(e)
            }.call(this, e)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (e) {
                n = null
              }
            t[e] = n
          }
          return t[e]
        }
      })(),
      l = null,
      u = 0,
      c = [],
      d = n(57)
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = i[r.id]
        if (o) {
          o.refs++
          for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a])
          for (; a < r.parts.length; a++) o.parts.push(v(r.parts[a], t))
        } else {
          var s = []
          for (a = 0; a < r.parts.length; a++) s.push(v(r.parts[a], t))
          i[r.id] = { id: r.id, refs: 1, parts: s }
        }
      }
    }
    function p(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] }
        r[a] ? r[a].parts.push(s) : n.push((r[a] = { id: a, parts: [s] }))
      }
      return n
    }
    function h(e, t) {
      var n = s(e.insertInto)
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        )
      var r = c[c.length - 1]
      if ('top' === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          c.push(t)
      else if ('bottom' === e.insertAt) n.appendChild(t)
      else {
        if ('object' != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          )
        var o = s(e.insertInto + ' ' + e.insertAt.before)
        n.insertBefore(t, o)
      }
    }
    function b(e) {
      if (null === e.parentNode) return !1
      e.parentNode.removeChild(e)
      var t = c.indexOf(e)
      t >= 0 && c.splice(t, 1)
    }
    function m(e) {
      var t = document.createElement('style')
      return (e.attrs.type = 'text/css'), y(t, e.attrs), h(e, t), t
    }
    function y(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n])
      })
    }
    function v(e, t) {
      var n, r, o, i
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function() {}
        e.css = i
      }
      if (t.singleton) {
        var a = u++
        ;(n = l || (l = m(t))),
          (r = A.bind(null, n, a, !1)),
          (o = A.bind(null, n, a, !0))
      } else
        e.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement('link')
              return (
                (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                y(t, e.attrs),
                h(e, t),
                t
              )
            })(t)),
            (r = function(e, t, n) {
              var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o
              ;(t.convertToAbsoluteUrls || i) && (r = d(r))
              o &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */')
              var a = new Blob([r], { type: 'text/css' }),
                s = e.href
              ;(e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s)
            }.bind(null, n, t)),
            (o = function() {
              b(n), n.href && URL.revokeObjectURL(n.href)
            }))
          : ((n = m(t)),
            (r = function(e, t) {
              var n = t.css,
                r = t.media
              r && e.setAttribute('media', r)
              if (e.styleSheet) e.styleSheet.cssText = n
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild)
                e.appendChild(document.createTextNode(n))
              }
            }.bind(null, n)),
            (o = function() {
              b(n)
            }))
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return
            r((e = t))
          } else o()
        }
      )
    }
    e.exports = function(e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        )
      ;((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = a()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom')
      var n = p(e, t)
      return (
        f(n, t),
        function(e) {
          for (var r = [], o = 0; o < n.length; o++) {
            var a = n[o]
            ;(s = i[a.id]).refs--, r.push(s)
          }
          e && f(p(e, t), t)
          for (o = 0; o < r.length; o++) {
            var s
            if (0 === (s = r[o]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]()
              delete i[s.id]
            }
          }
        }
      )
    }
    var g,
      _ = ((g = []),
      function(e, t) {
        return (g[e] = t), g.filter(Boolean).join('\n')
      })
    function A(e, t, n, r) {
      var o = n ? '' : r.css
      if (e.styleSheet) e.styleSheet.cssText = _(t, o)
      else {
        var i = document.createTextNode(o),
          a = e.childNodes
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
      }
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.updatesModule = t.eventsModule = t.widgetModule = t.utilModule = t.translationModule = t.statisticsModule = t.offeringModule = t.coreLibrary = void 0),
      n(29)
    var r = d(n(5)),
      o = d(n(8)),
      i = d(n(11)),
      a = d(n(12)),
      s = d(n(6)),
      l = d(n(13)),
      u = d(n(14)),
      c = d(n(15))
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    null != window &&
      (window.WidgetCoreLibrary = {
        coreLibrary: r.default,
        offeringModule: o.default,
        statisticsModule: i.default,
        translationModule: a.default,
        utilModule: s.default,
        widgetModule: l.default,
        eventsModule: u.default,
        updatesModule: c.default,
      }),
      (t.coreLibrary = r.default),
      (t.offeringModule = o.default),
      (t.statisticsModule = i.default),
      (t.translationModule = a.default),
      (t.utilModule = s.default),
      (t.widgetModule = l.default),
      (t.eventsModule = u.default),
      (t.updatesModule = c.default),
      (window.gmWidgetsI18n = window.gmWidgetsI18n ? window.gmWidgetsI18n : {}),
      (window.gmWidgetsI18n['wc2018-tournament-overview-widget'] = {
        bg_BG: {
          Live: 'На Живо',
          'Right Now': 'Сега',
          month0: 'Януари',
          month1: 'Февруари',
          month2: 'Март',
          month3: 'Април',
          month4: 'Май',
          month5: 'Юни',
          month6: 'Юли',
          month7: 'Август',
          month8: 'Септември',
          month9: 'Октомври',
          month10: 'Ноември',
          month11: 'Декември',
          month0Abbr: 'Ян.',
          month1Abbr: 'Февр.',
          month2Abbr: 'Март',
          month3Abbr: 'Апр.',
          month4Abbr: 'Май',
          month5Abbr: 'Юни',
          month6Abbr: 'Юли',
          month7Abbr: 'Авг.',
          month8Abbr: 'Септ.',
          month9Abbr: 'Окт.',
          month10Abbr: 'Ноем.',
          month11Abbr: 'Дек.',
          day1: 'Понеделник',
          day2: 'Вторник',
          day3: 'Сряда',
          day4: 'Четвъртък',
          day5: 'Петък',
          day6: 'Събота',
          day7: 'Неделя',
          day1Abbr: 'пн',
          day2Abbr: 'вт',
          day3Abbr: 'ср',
          day4Abbr: 'чт',
          day5Abbr: 'пт',
          day6Abbr: 'сб',
          day7Abbr: 'нд',
          today: 'Днес',
          tomorrow: 'Утре',
          wc2018: 'Световно Първенство 2018',
          russia: 'Русия',
          showAllParticipants: 'Покажи всички {0} участници',
        },
        da_DK: {
          Live: 'Live',
          'Right Now': 'Lige nu',
          month0: 'Januar',
          month1: 'Februar',
          month2: 'Marts',
          month3: 'April',
          month4: 'Maj',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'August',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'December',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mar',
          month3Abbr: 'Apr',
          month4Abbr: 'Maj',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dec',
          day1: 'Mandag',
          day2: 'Tirsdag',
          day3: 'Onsdag',
          day4: 'Torsdag',
          day5: 'Fredag',
          day6: 'Lørdag',
          day7: 'Søndag',
          day1Abbr: 'Man',
          day2Abbr: 'Tir',
          day3Abbr: 'Ons',
          day4Abbr: 'Tor',
          day5Abbr: 'Fre',
          day6Abbr: 'Lør',
          day7Abbr: 'Søn',
          today: 'I dag',
          tomorrow: 'I morgen',
          wc2018: 'VM 2018',
          russia: 'Rusland',
          showAllParticipants: 'Vis alle {0} deltagere',
        },
        de_AU: {
          Live: 'Live',
          'Right Now': 'Gerade jetzt',
          month0: 'Januar',
          month1: 'Februar',
          month2: 'März',
          month3: 'April',
          month4: 'Mai',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'August',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'Dezember',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mär',
          month3Abbr: 'Apr',
          month4Abbr: 'Mai',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dez',
          day1: 'Montag',
          day2: 'Dienstag',
          day3: 'Mittwoch',
          day4: 'Donnerstag',
          day5: 'Freitag',
          day6: 'Samstag',
          day7: 'Sonntag',
          day1Abbr: 'Mo',
          day2Abbr: 'Di',
          day3Abbr: 'Mi',
          day4Abbr: 'Do',
          day5Abbr: 'Fr',
          day6Abbr: 'Sa',
          day7Abbr: 'So',
          today: 'Heute',
          tomorrow: 'Morgen',
          wc2018: 'Weltmeisterschaft 2018',
          russia: 'Russland',
          showAllParticipants: 'Alle {0} Teilnehmer anzeigen',
        },
        de_CH: {
          Live: 'Live',
          'Right Now': 'Gerade jetzt',
          month0: 'Januar',
          month1: 'Februar',
          month2: 'März',
          month3: 'April',
          month4: 'Mai',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'August',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'Dezember',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mär',
          month3Abbr: 'Apr',
          month4Abbr: 'Mai',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dez',
          day1: 'Montag',
          day2: 'Dienstag',
          day3: 'Mittwoch',
          day4: 'Donnerstag',
          day5: 'Freitag',
          day6: 'Samstag',
          day7: 'Sonntag',
          day1Abbr: 'Mo',
          day2Abbr: 'Di',
          day3Abbr: 'Mi',
          day4Abbr: 'Do',
          day5Abbr: 'Fr',
          day6Abbr: 'Sa',
          day7Abbr: 'So',
          today: 'Heute',
          tomorrow: 'Morgen',
          wc2018: 'Weltmeisterschaft 2018',
          russia: 'Russland',
          showAllParticipants: 'Alle {0} Teilnehmer anzeigen',
        },
        de_DE: {
          Live: 'Live',
          'Right Now': 'Gerade jetzt',
          month0: 'Januar',
          month1: 'Februar',
          month2: 'März',
          month3: 'April',
          month4: 'Mai',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'August',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'Dezember',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mär',
          month3Abbr: 'Apr',
          month4Abbr: 'Mai',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dez',
          day1: 'Montag',
          day2: 'Dienstag',
          day3: 'Mittwoch',
          day4: 'Donnerstag',
          day5: 'Freitag',
          day6: 'Samstag',
          day7: 'Sonntag',
          day1Abbr: 'Mo',
          day2Abbr: 'Di',
          day3Abbr: 'Mi',
          day4Abbr: 'Do',
          day5Abbr: 'Fr',
          day6Abbr: 'Sa',
          day7Abbr: 'So',
          today: 'Heute',
          tomorrow: 'Morgen',
          wc2018: 'Weltmeisterschaft 2018',
          russia: 'Russland',
          showAllParticipants: 'Alle {0} Teilnehmer anzeigen',
        },
        el_GR: {
          Live: 'Live',
          'Right Now': 'Τώρα',
          month0: 'Ιανούαριος',
          month1: 'Φεβρουάριος',
          month2: 'Μάρτιος',
          month3: 'Απρίλιος',
          month4: 'Μάϊος',
          month5: 'Ιούνιος',
          month6: 'Ιούλιος',
          month7: 'Αύγουστος',
          month8: 'Σεπτέμβιος',
          month9: 'Οκτώβριος',
          month10: 'Νοέμβριος',
          month11: 'Δεκέμβριος',
          month0Abbr: 'Iαν.',
          month1Abbr: 'Φεβ.',
          month2Abbr: 'Μαρ.',
          month3Abbr: 'Απρ.',
          month4Abbr: 'Mαϊ',
          month5Abbr: 'Ιουν.',
          month6Abbr: 'Ιουλ.',
          month7Abbr: 'Αυγ.',
          month8Abbr: 'Σεπ.',
          month9Abbr: 'Οκτ.',
          month10Abbr: 'Νοεμ.',
          month11Abbr: 'Δεκ.',
          day1: 'Δευτέρα',
          day2: 'Τρίτη',
          day3: 'Τετάρτη',
          day4: 'Πέμπτη',
          day5: 'Παρασκευή',
          day6: 'Σάββατο',
          day7: 'Κυριακή',
          day1Abbr: 'Δευτ.',
          day2Abbr: 'Tρ.',
          day3Abbr: 'Τετάρτη',
          day4Abbr: 'Πέμπτη',
          day5Abbr: 'Παρασκευή',
          day6Abbr: 'Σάββατο',
          day7Abbr: 'Κυριακή',
          today: 'Σήμερα',
          tomorrow: 'Αύριο',
          wc2018: 'Παγκόσμιο Κύπελλο 2018',
          russia: 'Ρωσία',
          showAllParticipants: 'Δείξτε όλους τους {0} συμμετέχοντες',
        },
        en_AU: {
          Live: 'Live',
          'Right Now': 'Right Now',
          month0: 'January',
          month1: 'February',
          month2: 'March',
          month3: 'April',
          month4: 'May',
          month5: 'June',
          month6: 'July',
          month7: 'August',
          month8: 'September',
          month9: 'October',
          month10: 'November',
          month11: 'December',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mar',
          month3Abbr: 'Apr',
          month4Abbr: 'May',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Oct',
          month10Abbr: 'Nov',
          month11Abbr: 'Dec',
          day1: 'Monday',
          day2: 'Tuesday',
          day3: 'Wednesday',
          day4: 'Thursday',
          day5: 'Friday',
          day6: 'Saturday',
          day7: 'Sunday',
          day1Abbr: 'Mon',
          day2Abbr: 'Tue',
          day3Abbr: 'Wed',
          day4Abbr: 'Thu',
          day5Abbr: 'Fri',
          day6Abbr: 'Sat',
          day7Abbr: 'Sun',
          today: 'Today',
          tomorrow: 'Tomorrow',
          wc2018: 'World Cup 2018',
          russia: 'Russia',
          showAllParticipants: 'Show all {0} participants',
        },
        en_GB: {
          Live: 'Live',
          'Right Now': 'Right Now',
          month0: 'January',
          month1: 'February',
          month2: 'March',
          month3: 'April',
          month4: 'May',
          month5: 'June',
          month6: 'July',
          month7: 'August',
          month8: 'September',
          month9: 'October',
          month10: 'November',
          month11: 'December',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mar',
          month3Abbr: 'Apr',
          month4Abbr: 'May',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Oct',
          month10Abbr: 'Nov',
          month11Abbr: 'Dec',
          day1: 'Monday',
          day2: 'Tuesday',
          day3: 'Wednesday',
          day4: 'Thursday',
          day5: 'Friday',
          day6: 'Saturday',
          day7: 'Sunday',
          day1Abbr: 'Mon',
          day2Abbr: 'Tue',
          day3Abbr: 'Wed',
          day4Abbr: 'Thu',
          day5Abbr: 'Fri',
          day6Abbr: 'Sat',
          day7Abbr: 'Sun',
          today: 'Today',
          tomorrow: 'Tomorrow',
          wc2018: 'World Cup 2018',
          russia: 'Russia',
          showAllParticipants: 'Show all {0} participants',
        },
        es_CO: {
          Live: 'En directo',
          'Right Now': 'Ahora mismo',
          month0: 'Enero',
          month1: 'Febrero',
          month2: 'Marzo',
          month3: 'Abril',
          month4: 'Mayo',
          month5: 'Junio',
          month6: 'Julio',
          month7: 'Agosto',
          month8: 'Septiembre',
          month9: 'Octubre',
          month10: 'Noviembre',
          month11: 'Diciembre',
          month0Abbr: 'Enero',
          month1Abbr: 'Feb.',
          month2Abbr: 'Marzo',
          month3Abbr: 'Abr.',
          month4Abbr: 'Mayo',
          month5Abbr: 'Jun.',
          month6Abbr: 'Jul.',
          month7Abbr: 'Agosto',
          month8Abbr: 'Set.',
          month9Abbr: 'Oct.',
          month10Abbr: 'Nov.',
          month11Abbr: 'Dic.',
          day1: 'Lunes',
          day2: 'Marte',
          day3: 'Miércoles',
          day4: 'Jueves',
          day5: 'Viernes',
          day6: 'Sábado',
          day7: 'Domingo',
          day1Abbr: 'L',
          day2Abbr: 'Ma',
          day3Abbr: 'Mi',
          day4Abbr: 'J',
          day5Abbr: 'V',
          day6Abbr: 'S',
          day7Abbr: 'D',
          today: 'Hoy',
          tomorrow: 'Mañana',
          wc2018: 'Copa del Mundo 2018',
          russia: 'Rusia',
          showAllParticipants: 'Mostrar los {0} participantes',
        },
        es_ES: {
          Live: 'En directo',
          'Right Now': 'Ahora mismo',
          month0: 'Enero',
          month1: 'Febrero',
          month2: 'Marzo',
          month3: 'Abril',
          month4: 'Mayo',
          month5: 'Junio',
          month6: 'Julio',
          month7: 'Agosto',
          month8: 'Septiembre',
          month9: 'Octubre',
          month10: 'Noviembre',
          month11: 'Diciembre',
          month0Abbr: 'I',
          month1Abbr: 'II',
          month2Abbr: 'III',
          month3Abbr: 'IV',
          month4Abbr: 'V',
          month5Abbr: 'VI',
          month6Abbr: 'VII',
          month7Abbr: 'VIII',
          month8Abbr: 'IX',
          month9Abbr: 'X',
          month10Abbr: 'XI',
          month11Abbr: 'XII',
          day1: 'Lunes',
          day2: 'Marte',
          day3: 'Miércoles',
          day4: 'Jueves',
          day5: 'Viernes',
          day6: 'Sábado',
          day7: 'Domingo',
          day1Abbr: 'L',
          day2Abbr: 'Ma',
          day3Abbr: 'Mi',
          day4Abbr: 'J',
          day5Abbr: 'V',
          day6Abbr: 'S',
          day7Abbr: 'D',
          today: 'Hoy',
          tomorrow: 'Mañana',
          wc2018: 'Copa del Mundo 2018',
          russia: 'Rusia',
          showAllParticipants: 'Mostrar los {0} participantes',
        },
        et_EE: {
          Live: 'Live',
          'Right Now': 'Praegu',
          month0: 'Jaanuar',
          month1: 'Veebruar',
          month2: 'Märts',
          month3: 'Aprill',
          month4: 'Mai',
          month5: 'Juuni',
          month6: 'Juuli',
          month7: 'August',
          month8: 'September',
          month9: 'Oktoober',
          month10: 'November',
          month11: 'Detsember',
          month0Abbr: 'Jan',
          month1Abbr: 'Veeb',
          month2Abbr: 'Märts',
          month3Abbr: 'Aprill',
          month4Abbr: 'Mai',
          month5Abbr: 'Juuni',
          month6Abbr: 'Juuli',
          month7Abbr: 'Aug',
          month8Abbr: 'Sept',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dets',
          day1: 'Esmaspäev',
          day2: 'Teisipäev',
          day3: 'Kolmapäev',
          day4: 'Neljapäev',
          day5: 'Reede',
          day6: 'Laupäev',
          day7: 'Pühapäev',
          day1Abbr: 'E',
          day2Abbr: 'T',
          day3Abbr: 'K',
          day4Abbr: 'N',
          day5Abbr: 'R',
          day6Abbr: 'L',
          day7Abbr: 'P',
          today: 'Täna',
          tomorrow: 'Homme',
          wc2018: 'World Cup 2018',
          russia: 'Venemaa',
          showAllParticipants: 'Kuva kõik {0} osalejat',
        },
        fi_FI: {
          Live: 'Live',
          'Right Now': 'Juuri nyt',
          month0: 'Tammikuu',
          month1: 'Helmikuu',
          month2: 'Maaliskuu',
          month3: 'Huhtikuu',
          month4: 'Toukokuu',
          month5: 'Kesäkuu',
          month6: 'Heinäkuu',
          month7: 'Elokuu',
          month8: 'Syyskuu',
          month9: 'Lokakuu',
          month10: 'Marraskuu',
          month11: 'Joulukuu',
          month0Abbr: 'Tammi',
          month1Abbr: 'Helmi',
          month2Abbr: 'Maalis',
          month3Abbr: 'Huhti',
          month4Abbr: 'Touko',
          month5Abbr: 'Kesä',
          month6Abbr: 'Heinä',
          month7Abbr: 'Elo',
          month8Abbr: 'Syys',
          month9Abbr: 'Loka',
          month10Abbr: 'Marras',
          month11Abbr: 'Joulu',
          day1: 'Maanantai',
          day2: 'Tiistai',
          day3: 'Keskiviikko',
          day4: 'Torstai',
          day5: 'Perjantai',
          day6: 'Lauantai',
          day7: 'Sunnuntai',
          day1Abbr: 'Ma',
          day2Abbr: 'Ti',
          day3Abbr: 'Ke',
          day4Abbr: 'To',
          day5Abbr: 'Pe',
          day6Abbr: 'La',
          day7Abbr: 'Su',
          today: 'Tänään',
          tomorrow: 'Huomenna',
          wc2018: 'MM 2018',
          russia: 'Venäjä',
          showAllParticipants: 'Näytä kaikki {0} osallistujaa',
        },
        fr_BE: {
          Live: 'Direct',
          'Right Now': 'Maintenant',
          month0: 'Janvier',
          month1: 'Février',
          month2: 'Mars',
          month3: 'Avril',
          month4: 'Mai',
          month5: 'Juin',
          month6: 'Juillet',
          month7: 'Août',
          month8: 'Septembre',
          month9: 'Octobre',
          month10: 'Novembre',
          month11: 'Décembre',
          month0Abbr: 'Jan',
          month1Abbr: 'Fév',
          month2Abbr: 'Mar',
          month3Abbr: 'Avr',
          month4Abbr: 'Mai',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aoû',
          month8Abbr: 'Sep',
          month9Abbr: 'Oct',
          month10Abbr: 'Nov',
          month11Abbr: 'Déc',
          day1: 'Lundi',
          day2: 'Mardi',
          day3: 'Mercredi',
          day4: 'Jeudi',
          day5: 'Vendredi',
          day6: 'Samedi',
          day7: 'Dimanche',
          day1Abbr: 'Lun',
          day2Abbr: 'Mar',
          day3Abbr: 'Mer',
          day4Abbr: 'Jeu',
          day5Abbr: 'Ven',
          day6Abbr: 'Sam',
          day7Abbr: 'Dim',
          today: 'Aujourd’hui',
          tomorrow: 'Demain',
          wc2018: 'Coupe du Monde 2018',
          russia: 'Russie',
          showAllParticipants: 'Afficher tous les {0} participants',
        },
        fr_CH: {
          Live: 'Direct',
          'Right Now': 'Maintenant',
          month0: 'Janvier',
          month1: 'Février',
          month2: 'Mars',
          month3: 'Avril',
          month4: 'Mai',
          month5: 'Juin',
          month6: 'Juillet',
          month7: 'Août',
          month8: 'Septembre',
          month9: 'Octobre',
          month10: 'Novembre',
          month11: 'Décembre',
          month0Abbr: 'Jan',
          month1Abbr: 'Fév',
          month2Abbr: 'Mar',
          month3Abbr: 'Avr',
          month4Abbr: 'Mai',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aoû',
          month8Abbr: 'Sep',
          month9Abbr: 'Oct',
          month10Abbr: 'Nov',
          month11Abbr: 'Déc',
          day1: 'Lundi',
          day2: 'Mardi',
          day3: 'Mercredi',
          day4: 'Jeudi',
          day5: 'Vendredi',
          day6: 'Samedi',
          day7: 'Dimanche',
          day1Abbr: 'Lun',
          day2Abbr: 'Mar',
          day3Abbr: 'Mer',
          day4Abbr: 'Jeu',
          day5Abbr: 'Ven',
          day6Abbr: 'Sam',
          day7Abbr: 'Dim',
          today: 'Aujourd’hui',
          tomorrow: 'Demain',
          wc2018: 'Coupe du Monde 2018',
          russia: 'Russie',
          showAllParticipants: 'Afficher tous les {0} participants',
        },
        fr_FR: {
          Live: 'Direct',
          'Right Now': 'Maintenant',
          month0: 'Janvier',
          month1: 'Février',
          month2: 'Mars',
          month3: 'Avril',
          month4: 'Mai',
          month5: 'Juin',
          month6: 'Juillet',
          month7: 'Août',
          month8: 'Septembre',
          month9: 'Octobre',
          month10: 'Novembre',
          month11: 'Décembre',
          month0Abbr: 'Jan',
          month1Abbr: 'Fév',
          month2Abbr: 'Mar',
          month3Abbr: 'Avr',
          month4Abbr: 'Mai',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aoû',
          month8Abbr: 'Sep',
          month9Abbr: 'Oct',
          month10Abbr: 'Nov',
          month11Abbr: 'Déc',
          day1: 'Lundi',
          day2: 'Mardi',
          day3: 'Mercredi',
          day4: 'Jeudi',
          day5: 'Vendredi',
          day6: 'Samedi',
          day7: 'Dimanche',
          day1Abbr: 'Lun',
          day2Abbr: 'Mar',
          day3Abbr: 'Mer',
          day4Abbr: 'Jeu',
          day5Abbr: 'Ven',
          day6Abbr: 'Sam',
          day7Abbr: 'Dim',
          today: 'Aujourd’hui',
          tomorrow: 'Demain',
          wc2018: 'Coupe du Monde 2018',
          russia: 'Russie',
          showAllParticipants: 'Afficher tous les {0} participants',
        },
        hu_HU: {
          Live: 'Élő',
          'Right Now': 'Épp most',
          month0: 'Január',
          month1: 'Február',
          month2: 'Március',
          month3: 'Április',
          month4: 'Május',
          month5: 'Június',
          month6: 'Július',
          month7: 'Augusztus',
          month8: 'Szeptember',
          month9: 'Október',
          month10: 'November',
          month11: 'December',
          month0Abbr: 'Jan.',
          month1Abbr: 'Febr.',
          month2Abbr: 'Márc.',
          month3Abbr: 'Ápr.',
          month4Abbr: 'Máj.',
          month5Abbr: 'Jún.',
          month6Abbr: 'Júl.',
          month7Abbr: 'Aug.',
          month8Abbr: 'Szept.',
          month9Abbr: 'Okt.',
          month10Abbr: 'Nov.',
          month11Abbr: 'Dec.',
          day1: 'Hétfő',
          day2: 'Kedd',
          day3: 'Szerda',
          day4: 'Csütörtök',
          day5: 'Péntek',
          day6: 'Szombat',
          day7: 'Vasárnap',
          day1Abbr: 'Hé',
          day2Abbr: 'Ke',
          day3Abbr: 'Szer',
          day4Abbr: 'Csüt',
          day5Abbr: 'Pén',
          day6Abbr: 'Szo',
          day7Abbr: 'Vas',
          today: 'Ma',
          tomorrow: 'Holnap',
          wc2018: '2018-as labdarúgó világbajnokság',
          russia: 'Oroszország',
          showAllParticipants: 'Mind a(z) {0} résztvevő megjelenítése',
        },
        it_IT: {
          Live: 'Live',
          'Right Now': 'Adesso',
          month0: 'Gennaio',
          month1: 'Febbraio',
          month2: 'Marzo',
          month3: 'Aprile',
          month4: 'Maggio',
          month5: 'Giugno',
          month6: 'Luglio',
          month7: 'Agosto',
          month8: 'Settembre',
          month9: 'Ottobre',
          month10: 'Novembre',
          month11: 'Dicembre',
          month0Abbr: 'Gen',
          month1Abbr: 'Feb',
          month2Abbr: 'Mar',
          month3Abbr: 'Apr',
          month4Abbr: 'Mag',
          month5Abbr: 'Giu',
          month6Abbr: 'Lug',
          month7Abbr: 'Ago',
          month8Abbr: 'Set',
          month9Abbr: 'Ott',
          month10Abbr: 'Nov',
          month11Abbr: 'Dic',
          day1: 'Lunedì',
          day2: 'Martedì',
          day3: 'Mercoledì',
          day4: 'Giovedì',
          day5: 'Venerdì',
          day6: 'Sabato',
          day7: 'Domenica',
          day1Abbr: 'Lun',
          day2Abbr: 'Mar',
          day3Abbr: 'Mer',
          day4Abbr: 'Gio',
          day5Abbr: 'Ven',
          day6Abbr: 'Sab',
          day7Abbr: 'Dom',
          today: 'Oggi',
          tomorrow: 'Domani',
          wc2018: 'Coppa del mondo 2018',
          russia: 'Russia',
          showAllParticipants: 'Mostra tutti {0} i partecipanti',
        },
        lt_LT: {
          Live: 'Tiesiogiai',
          'Right Now': 'Šiuo metu',
          month0: 'sausis',
          month1: 'vasaris',
          month2: 'kovas',
          month3: 'balandis',
          month4: 'gegužė',
          month5: 'birželis',
          month6: 'liepa',
          month7: 'rugpjūtis',
          month8: 'rugsėjis',
          month9: 'spalis',
          month10: 'lapkritis',
          month11: 'gruodis',
          month0Abbr: 'saus.',
          month1Abbr: 'vasar.',
          month2Abbr: 'kov.',
          month3Abbr: 'baland.',
          month4Abbr: 'geguž.',
          month5Abbr: 'birž.',
          month6Abbr: 'liep.',
          month7Abbr: 'rugpj.',
          month8Abbr: 'rugs.',
          month9Abbr: 'spal.',
          month10Abbr: 'lapkr.',
          month11Abbr: 'gruod.',
          day1: 'pirmadienis',
          day2: 'antradienis',
          day3: 'trečiadienis',
          day4: 'ketvirtadienis',
          day5: 'penktadienis',
          day6: 'šeštadienis',
          day7: 'sekmadienis',
          day1Abbr: 'pirmad.',
          day2Abbr: 'antrad.',
          day3Abbr: 'trečiad.',
          day4Abbr: 'ketvirtad.',
          day5Abbr: 'penktad.',
          day6Abbr: 'šeštad.',
          day7Abbr: 'sekm.',
          today: 'Šiandien',
          tomorrow: 'Rytoj',
          wc2018: '2018 m. pasaulio taurė',
          russia: 'Rusija',
          showAllParticipants: 'Rodytis visus {0} dalyvius',
        },
        lv_LV: {
          Live: 'Tiešraide',
          'Right Now': 'Šobrīd',
          month0: 'janvāris',
          month1: 'februāris',
          month2: 'marts',
          month3: 'aprīlis',
          month4: 'maijs',
          month5: 'jūnijs',
          month6: 'jūlijs',
          month7: 'augusts',
          month8: 'septembris',
          month9: 'oktobris',
          month10: 'novembris',
          month11: 'decembris',
          month0Abbr: 'janv.',
          month1Abbr: 'febr.',
          month2Abbr: 'mar.',
          month3Abbr: 'apr.',
          month4Abbr: 'maijs',
          month5Abbr: 'jūn.',
          month6Abbr: 'jūl.',
          month7Abbr: 'aug.',
          month8Abbr: 'sep.',
          month9Abbr: 'okt.',
          month10Abbr: 'nov.',
          month11Abbr: 'dec.',
          day1: 'pirmdiena',
          day2: 'otrdiena',
          day3: 'trešdiena',
          day4: 'ceturtdiena',
          day5: 'piektdiena',
          day6: 'sestdiena',
          day7: 'svētdiena',
          day1Abbr: 'Pr',
          day2Abbr: 'O',
          day3Abbr: 'T',
          day4Abbr: 'C',
          day5Abbr: 'Pk',
          day6Abbr: 'S',
          day7Abbr: 'Sv',
          today: 'šodiena',
          tomorrow: 'rītdiena',
          wc2018: '2018.gada Pasaules kauss',
          russia: 'Krievija',
          showAllParticipants: 'Parādīt visus {0} dalībniekus',
        },
        nl_BE: {
          Live: 'Live',
          'Right Now': 'Nu',
          month0: 'Januari',
          month1: 'Februari',
          month2: 'Maart',
          month3: 'April',
          month4: 'Mei',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'Augustus',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'December',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mrt',
          month3Abbr: 'Apr',
          month4Abbr: 'Mei',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dec',
          day1: 'Maandag',
          day2: 'Dinsdag',
          day3: 'Woensdag',
          day4: 'Donderdag',
          day5: 'Vrijdag',
          day6: 'Zaterdag',
          day7: 'Zondag',
          day1Abbr: 'Ma',
          day2Abbr: 'Di',
          day3Abbr: 'Wo',
          day4Abbr: 'Do',
          day5Abbr: 'Vr',
          day6Abbr: 'Za',
          day7Abbr: 'Zo',
          today: 'Vandaag',
          tomorrow: 'Morgen',
          wc2018: 'WK 2018',
          russia: 'Rusland',
          showAllParticipants: 'Alle {0} deelnemers tonen',
        },
        nl_NL: {
          Live: 'Live',
          'Right Now': 'Nu',
          month0: 'Januari',
          month1: 'Februari',
          month2: 'Maart',
          month3: 'April',
          month4: 'Mei',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'Augustus',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'December',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mrt',
          month3Abbr: 'Apr',
          month4Abbr: 'Mei',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dec',
          day1: 'Maandag',
          day2: 'Dinsdag',
          day3: 'Woensdag',
          day4: 'Donderdag',
          day5: 'Vrijdag',
          day6: 'Zaterdag',
          day7: 'Zondag',
          day1Abbr: 'Ma',
          day2Abbr: 'Di',
          day3Abbr: 'Wo',
          day4Abbr: 'Do',
          day5Abbr: 'Vr',
          day6Abbr: 'Za',
          day7Abbr: 'Zo',
          today: 'Vandaag',
          tomorrow: 'Morgen',
          wc2018: 'WK 2018',
          russia: 'Rusland',
          showAllParticipants: 'Alle {0} deelnemers tonen',
        },
        no_NO: {
          Live: 'Live',
          'Right Now': 'Akkurat nå',
          month0: 'Januar',
          month1: 'Februar',
          month2: 'Mars',
          month3: 'April',
          month4: 'Mai',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'August',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'Desember',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mar',
          month3Abbr: 'Apr',
          month4Abbr: 'Mai',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Des',
          day1: 'Mandag',
          day2: 'Tirsdag',
          day3: 'Onsdag',
          day4: 'Torsdag',
          day5: 'Fredag',
          day6: 'Lørdag',
          day7: 'Søndag',
          day1Abbr: 'Man',
          day2Abbr: 'Tirs',
          day3Abbr: 'Ons',
          day4Abbr: 'Tors',
          day5Abbr: 'Fre',
          day6Abbr: 'Lør',
          day7Abbr: 'Søn',
          today: 'I dag',
          tomorrow: 'I morgen',
          wc2018: 'Verdensmesterskapet i fotball 2018',
          russia: 'Russland',
          showAllParticipants: 'Vis alle {0} deltakere',
        },
        pl_PL: {
          Live: 'Na żywo',
          'Right Now': 'Teraz',
          month0: 'Styczeń',
          month1: 'Luty',
          month2: 'Marzec',
          month3: 'Kwiecień',
          month4: 'Maj',
          month5: 'Czerwiec',
          month6: 'Lipiec',
          month7: 'Sierpień',
          month8: 'Wrzesień',
          month9: 'Październik',
          month10: 'Listopad',
          month11: 'Grudzień',
          month0Abbr: 'Sty',
          month1Abbr: 'Lut',
          month2Abbr: 'Mar',
          month3Abbr: 'Kwi',
          month4Abbr: 'Maj',
          month5Abbr: 'Cze',
          month6Abbr: 'Lip',
          month7Abbr: 'Sie',
          month8Abbr: 'Wrz',
          month9Abbr: 'Paź',
          month10Abbr: 'Lis',
          month11Abbr: 'Gru',
          day1: 'Poniedziałek',
          day2: 'Wtorek',
          day3: 'Środa',
          day4: 'Czwartek',
          day5: 'Piątek',
          day6: 'Sobota',
          day7: 'Niedziela',
          day1Abbr: 'Pon',
          day2Abbr: 'Wt',
          day3Abbr: 'Śr',
          day4Abbr: 'Czw',
          day5Abbr: 'Pt',
          day6Abbr: 'Sob',
          day7Abbr: 'Nie',
          today: 'Dziś',
          tomorrow: 'Jutro',
          wc2018: 'Puchar Świata 2018',
          russia: 'Rosja',
          showAllParticipants: 'Pokaż wszystkich uczestników: {0}',
        },
        pt_BR: {
          Live: 'Ao Vivo',
          'Right Now': 'Agora Mesmo',
          month0: 'Janeiro',
          month1: 'Fevereiro',
          month2: 'Março',
          month3: 'Abril',
          month4: 'Maio',
          month5: 'Junho',
          month6: 'Julho',
          month7: 'Agosto',
          month8: 'Setembro',
          month9: 'Outubro',
          month10: 'Novembro',
          month11: 'Dezembro',
          month0Abbr: 'Jan',
          month1Abbr: 'Fev',
          month2Abbr: 'Mar',
          month3Abbr: 'Abr',
          month4Abbr: 'Maio',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Ago',
          month8Abbr: 'Set',
          month9Abbr: 'Out',
          month10Abbr: 'Nov',
          month11Abbr: 'Dez',
          day1: 'Segunda-Feira',
          day2: 'Terça-Feira',
          day3: 'Quarta-Feira',
          day4: 'Quinta-Feira',
          day5: 'Sexta-Feira',
          day6: 'Sábado',
          day7: 'Domingo',
          day1Abbr: 'Seg',
          day2Abbr: 'Ter',
          day3Abbr: 'Qua',
          day4Abbr: 'Qui',
          day5Abbr: 'Sex',
          day6Abbr: 'Sáb',
          day7Abbr: 'Dom',
          today: 'Hoje',
          tomorrow: 'Amanhã',
          wc2018: 'Campeonato do Mundo de 2018',
          russia: 'Rússia',
          showAllParticipants: 'Mostrar todos os {0} participantes',
        },
        pt_PT: {
          Live: 'Ao Vivo',
          'Right Now': 'Agora Mesmo',
          month0: 'Janeiro',
          month1: 'Fevereiro',
          month2: 'Março',
          month3: 'Abril',
          month4: 'Maio',
          month5: 'Junho',
          month6: 'Julho',
          month7: 'Agosto',
          month8: 'Setembro',
          month9: 'Outubro',
          month10: 'Novembro',
          month11: 'Dezembro',
          month0Abbr: 'Jan',
          month1Abbr: 'Fev',
          month2Abbr: 'Mar',
          month3Abbr: 'Abr',
          month4Abbr: 'Maio',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Ago',
          month8Abbr: 'Set',
          month9Abbr: 'Out',
          month10Abbr: 'Nov',
          month11Abbr: 'Dez',
          day1: 'Segunda-Feira',
          day2: 'Terça-Feira',
          day3: 'Quarta-Feira',
          day4: 'Quinta-Feira',
          day5: 'Sexta-Feira',
          day6: 'Sábado',
          day7: 'Domingo',
          day1Abbr: 'Seg',
          day2Abbr: 'Ter',
          day3Abbr: 'Qua',
          day4Abbr: 'Qui',
          day5Abbr: 'Sex',
          day6Abbr: 'Sáb',
          day7Abbr: 'Dom',
          today: 'Hoje',
          tomorrow: 'Amanhã',
          wc2018: 'Campeonato do Mundo de 2018',
          russia: 'Rússia',
          showAllParticipants: 'Mostrar todos os {0} participantes',
        },
        ro_RO: {
          Live: 'Live',
          'Right Now': 'Chiar Acum',
          month0: 'Ianuarie',
          month1: 'Februarie',
          month2: 'Martie',
          month3: 'Aprilie',
          month4: 'Mai',
          month5: 'Iunie',
          month6: 'Iulie',
          month7: 'August',
          month8: 'Septembrie',
          month9: 'Octombrie',
          month10: 'Noiembrie',
          month11: 'Decemberie',
          month0Abbr: 'Ian',
          month1Abbr: 'Feb',
          month2Abbr: 'Mart',
          month3Abbr: 'Apr',
          month4Abbr: 'Mai',
          month5Abbr: 'Iun',
          month6Abbr: 'Iul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sept',
          month9Abbr: 'Oct',
          month10Abbr: 'Nov',
          month11Abbr: 'Dec',
          day1: 'Luni',
          day2: 'Marți',
          day3: 'Miercuri',
          day4: 'Joi',
          day5: 'Vineri',
          day6: 'Sâmbătă',
          day7: 'Duminică',
          day1Abbr: 'Lu',
          day2Abbr: 'Ma',
          day3Abbr: 'Mi',
          day4Abbr: 'Jo',
          day5Abbr: 'Vi',
          day6Abbr: 'Sâ',
          day7Abbr: 'Du',
          today: 'Astăzi',
          tomorrow: 'Mâine',
          wc2018: 'Cupa Mondială 2018',
          russia: 'Rusia',
          showAllParticipants: 'Afișează toți cei {0} participanți',
        },
        ru_RU: {
          Live: 'Live',
          'Right Now': 'Сейчас',
          month0: 'Январь',
          month1: 'Февраль',
          month2: 'Март',
          month3: 'Апрель',
          month4: 'Май',
          month5: 'Июнь',
          month6: 'Июль',
          month7: 'Август',
          month8: 'Сентябрь',
          month9: 'Октябрь',
          month10: 'Ноябрь',
          month11: 'Декабрь',
          month0Abbr: 'Янв',
          month1Abbr: 'Фев',
          month2Abbr: 'Мар',
          month3Abbr: 'Апр',
          month4Abbr: 'Май',
          month5Abbr: 'Июн',
          month6Abbr: 'Июл',
          month7Abbr: 'Авг',
          month8Abbr: 'Сен',
          month9Abbr: 'Окт',
          month10Abbr: 'Ноя',
          month11Abbr: 'Дек',
          day1: 'Понедельник',
          day2: 'Вторник',
          day3: 'Среда',
          day4: 'Четверг',
          day5: 'Пятница',
          day6: 'Суббота',
          day7: 'Воскресенье',
          day1Abbr: 'Пн',
          day2Abbr: 'Вт',
          day3Abbr: 'Ср',
          day4Abbr: 'Чт',
          day5Abbr: 'Пт',
          day6Abbr: 'Сб',
          day7Abbr: 'Вс',
          today: 'Сегодня',
          tomorrow: 'Завтра',
          wc2018: 'Чемпионат мира 2018',
          russia: 'Россия',
          showAllParticipants: 'Показать всех {0} участников',
        },
        sv_SE: {
          Live: 'Direkt',
          'Right Now': 'Just nu',
          month0: 'Januari',
          month1: 'Februari',
          month2: 'Mars',
          month3: 'April',
          month4: 'Maj',
          month5: 'Juni',
          month6: 'Juli',
          month7: 'Augusti',
          month8: 'September',
          month9: 'Oktober',
          month10: 'November',
          month11: 'December',
          month0Abbr: 'Jan',
          month1Abbr: 'Feb',
          month2Abbr: 'Mar',
          month3Abbr: 'Apr',
          month4Abbr: 'Maj',
          month5Abbr: 'Jun',
          month6Abbr: 'Jul',
          month7Abbr: 'Aug',
          month8Abbr: 'Sep',
          month9Abbr: 'Okt',
          month10Abbr: 'Nov',
          month11Abbr: 'Dec',
          day1: 'Måndag',
          day2: 'Tisdag',
          day3: 'Onsdag',
          day4: 'Torsdag',
          day5: 'Fredag',
          day6: 'Lördag',
          day7: 'Söndag',
          day1Abbr: 'Mån',
          day2Abbr: 'Tis',
          day3Abbr: 'Ons',
          day4Abbr: 'Tor',
          day5Abbr: 'Fre',
          day6Abbr: 'Lör',
          day7Abbr: 'Sön',
          today: 'Idag',
          tomorrow: 'Imorgon',
          wc2018: 'VM 2018',
          russia: 'Ryssland',
          showAllParticipants: 'Visa alla {0} deltagare',
        },
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    l(n(8)), l(n(11)), l(n(12))
    var r = l(n(6)),
      o = l(n(13)),
      i = l(n(15)),
      a = l(n(53)),
      s = (l(n(54)), l(n(55)))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function u(e) {
      if (e.status >= 200 && e.status < 300) return e
      var t = new Error(e.statusText)
      throw ((t.response = e), t)
    }
    function c() {
      var e = window.navigator.userAgent,
        t = function(t) {
          var n = e.match(t)
          return (n && n.length > 1 && n[1]) || ''
        },
        n = t(/version\/(\d+(\.\d+)?)/i)
      return /android/i.test(e)
        ? { browser: 'android', browserVersion: n }
        : /(ipod|iphone|ipad)/i.test(e)
          ? {
              browser: 'ios',
              browserVersion: t(/(?:mxios)[\s/](\d+(?:\.\d+)+)/i),
            }
          : /msie|trident/i.test(e)
            ? {
                browser: 'internet-explorer',
                browserVersion: t(/(?:msie |rv:)(\d+(\.\d+)?)/i),
              }
            : /chrome|crios|crmo/i.test(e)
              ? {
                  browser: 'chrome',
                  browserVersion: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
                }
              : /safari|applewebkit/i.test(e)
                ? { browser: 'safari', browserVersion: n }
                : /chrome.+? edge/i.test(e)
                  ? {
                      browser: 'microsoft-edge',
                      browserVersion: t(/edge\/(\d+(\.\d+)?)/i),
                    }
                  : /firefox|iceweasel|fxios/i.test(e)
                    ? {
                        browser: 'firefox',
                        browserVersion: t(
                          /(?:firefox|iceweasel|fxios)[ /](\d+(\.\d+)?)/i
                        ),
                      }
                    : void 0
    }
    function d(e) {
      return new Promise(function(t, n) {
        var r = new XMLHttpRequest()
        r.open('GET', e, !0),
          (r.onload = function() {
            var e = {
              status: r.status,
              statusText: r.statusText,
              body: 'response' in r ? r.response : r.responseText,
            }
            t(e)
          }),
          (r.onerror = function() {
            return n(new TypeError('Network request failed'))
          }),
          (r.ontimeout = function() {
            return n(new TypeError('Network request failed'))
          }),
          r.send()
      })
    }
    t.default = {
      initialized: !1,
      browser: c().browser,
      browserVersion: c().browserVersion,
      kambiDefaultClasses: [
        'KambiWidget-card-text-color',
        'KambiWidget-card-background-color',
        'KambiWidget-font',
      ],
      _config: {
        apiBaseUrl: '',
        apiBaseUrls: {},
        apiStatisticsBaseUrl: '',
        auth: !1,
        channelId: 1,
        currency: 'EUR',
        customer: '',
        device: 'desktop',
        locale: 'en_GB',
        market: 'GB',
        oddsFormat: 'decimal',
        offering: '',
        routeRoot: '',
        streamingAllowedForPlayer: !0,
        client_id: 2,
        version: 'v2',
      },
      get config() {
        return this._config
      },
      set config(e) {
        for (var t in e)
          e.hasOwnProperty(t) &&
            this._config.hasOwnProperty(t) &&
            (this._config[t] = e[t])
        null == this._config.routeRoot
          ? (this._config.routeRoot = '')
          : this._config.routeRoot.length > 0 &&
            '/' !== this._config.routeRoot.slice(-1) &&
            (this._config.routeRoot += '/')
      },
      _oddsFormat: null,
      set oddsFormat(e) {
        this._oddsFormat = e
      },
      get oddsFormat() {
        return this._oddsFormat
      },
      _defaultArgs: {},
      get defaultArgs() {
        return this._defaultArgs
      },
      set defaultArgs(e) {
        this._defaultArgs = Object.assign(e, {
          onHeightChange: function() {},
          onWidgetRemoved: function() {},
          onWidgetLoaded: function() {},
        })
      },
      _args: null,
      get args() {
        return this._args
      },
      set args(e) {
        var t = this
        null != (e = Object.assign({}, this.defaultArgs, e)).conditionalArgs &&
          e.conditionalArgs.forEach(function(n) {
            var r = !0
            null != n.clientConfig &&
              Object.keys(n.clientConfig).forEach(function(e) {
                t.config[e] !== n.clientConfig[e] && (r = !1)
              }),
              null != n.pageInfo &&
                Object.keys(n.pageInfo).forEach(function(e) {
                  t.pageInfo[e] !== n.pageInfo[e] && (r = !1)
                }),
              r && (e = Object.assign(e, n.args))
          }),
          (this._args = e)
      },
      _pageInfo: {
        leaguePaths: [],
        pageParam: '',
        pageTrackingPath: '',
        pageType: '',
      },
      get pageInfo() {
        return this._pageInfo
      },
      set pageInfo(e) {
        'filter' === e.pageType &&
          '/' !== e.pageParam.substr(-1) &&
          (e.pageParam += '/'),
          (this._pageInfo = e)
      },
      rootElement: null,
      embeddedElement: null,
      _apiVersions: { client: '', libs: '', wapi: '' },
      get apiVersions() {
        return this._apiVersions
      },
      set apiVersions(e) {
        this._apiVersions = e
      },
      _widgetTrackingName: null,
      set widgetTrackingName(e) {
        null == e && (e = null), (this._widgetTrackingName = e)
      },
      get widgetTrackingName() {
        return this._widgetTrackingName
      },
      cssLoadedPromise: null,
      widgetApi: null,
      embeddedMethods: { removeWidget: o.default.removeWidget.bind(o.default) },
      init: function(e) {
        var t = this
        this.defaultArgs = e
        return new Promise(function(e, n) {
          var r = function(n) {
            ;(t.oddsFormat = n.clientConfig.oddsFormat),
              (t.config = n.clientConfig),
              (t.pageInfo = n.pageInfo),
              (t.apiVersions = n.versions),
              (t.args = n.arguments),
              t.injectCustomCss(
                t.args.customCssUrl,
                t.args.customCssUrlFallback
              ),
              (t.widgetTrackingName = t.args.widgetTrackingName),
              (t.initialized = !0),
              e()
          }
          window.gmWidgets || (window.gmWidgets = {}),
            (window.gmWidgets['wc2018-tournament-overview-widget'] = function(
              e,
              n,
              a,
              l
            ) {
              if (null == e)
                throw new Error(
                  'Container not provided. Please send a HTMLElement'
                )
              if (null == n)
                throw new Error(
                  'Wapi not provided. Please send a reference to the Kambi Widget API'
                )
              if (null == a)
                throw new Error(
                  'clientConfig not provided. Please send an object with client config data'
                )
              ;(t.widgetApi = n),
                (t.embeddedElement = e),
                (t.rootElement = document.createElement('div')),
                (t.rootElement.className +=
                  ' ' + [s.default.rootElement].join(' ')),
                (t.embeddedElement.className +=
                  ' ' + [s.default.rootElementEmbedded].join(' ')),
                t.embeddedElement.appendChild(t.rootElement),
                null == window.KambiWidget.receiveResponse &&
                  (window.KambiWidget.receiveResponse = function() {})
              var u = window.KambiWidget.receiveResponse
              return (
                (window.KambiWidget.receiveResponse = function(e, t) {
                  u(e, t),
                    o.default.handleResponse(e),
                    i.default.handleResponse(e)
                }),
                o.default.requestBetslipOutcomes(),
                r({
                  clientConfig: Object.assign({}, a),
                  arguments: Object.assign({}, l),
                  pageInfo: {},
                  versions: {},
                }),
                t.embeddedMethods
              )
            })
        })
      },
      createStyleTag: function(e, t) {
        var n = document.createElement('link')
        return (
          n.setAttribute('id', e),
          n.setAttribute('rel', 'stylesheet'),
          n.setAttribute('type', 'text/css'),
          n.setAttribute('href', t),
          n
        )
      },
      injectOperatorCss: function(e, t) {
        var n =
            '//c3-static.kambi.com/sb-mobileclient/widget-api/' +
            a.default.widgetCssVersion +
            '/resources/css/' +
            e +
            '/' +
            t +
            '/widgets.css',
          r = this.createStyleTag('operator-css', n),
          o = document.head
        o.insertBefore(r, o.firstChild)
      },
      injectCustomCss: function(e, t) {
        var n = this
        if (null != e) {
          null == t && (t = ''),
            (e = r.default.replaceConfigParameters(e)),
            (t = r.default.replaceConfigParameters(t))
          var o = function(e) {
            var t = n.createStyleTag('custom-css', e)
            document.head.insertBefore(t, null)
          }
          return this.getFile(e)
            .then(function(t) {
              return o(e), t
            })
            .catch(function(e) {
              if ('' === t) return e
              o(t)
            })
        }
      },
      getData: function(e) {
        return d(e)
          .then(u)
          .then(function(e) {
            return JSON.parse(e.body)
          })
          .catch(function(e) {
            throw e
          })
      },
      getFile: function(e) {
        return d(e)
          .then(u)
          .then(function(e) {
            return e.body
          })
          .catch(function(e) {
            throw e
          })
      },
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r,
      o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      i = n(5),
      a = (r = i) && r.__esModule ? r : { default: r }
    var s = {
      draw: {
        cs_CZ: 'Remíza',
        da_DK: 'Uafgjort',
        de_AT: 'Unentschieden',
        de_CH: 'Unentschieden',
        de_DE: 'Unentschieden',
        el_GR: 'Ισοπαλία',
        en_AU: 'Draw',
        en_GB: 'Draw',
        es_ES: 'Empate',
        et_EE: 'Viik',
        fi_FI: 'Tasapeli',
        fr_BE: 'Nul',
        fr_CH: 'Nul',
        fr_FR: 'Nul',
        hu_HU: 'Döntetlen',
        it_IT: 'Pareggio',
        lt_LT: 'Lygiosios',
        lv_LV: 'Neizšķirts',
        nl_BE: 'Gelijkspel',
        nl_NL: 'Gelijkspel',
        no_NO: 'Uavgjort',
        pl_PL: 'Remis',
        pt_BR: 'Empate',
        pt_PT: 'Empate',
        ro_RO: 'Egalitate',
        ru_RU: 'Ничья',
        sv_SE: 'Oavgjort',
        tr_TR: 'Draw',
      },
    }
    t.default = {
      diffArray: function(e, t) {
        for (var n = {}, r = [], o = t.length; o--; ) n[t[o]] = null
        for (o = e.length; o--; ) n.hasOwnProperty(e[o]) || r.push(e[o])
        return r
      },
      equals: function(e, t) {
        if (e === t) return !0
        if (!(e instanceof Object && t instanceof Object)) return !1
        if (e.constructor !== t.constructor) return !1
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            if (!t.hasOwnProperty(n)) return !1
            if (e[n] !== t[n]) {
              if ('object' !== o(e[n])) return !1
              if (!this.equals(e[n], t[n])) return !1
            }
          }
        for (n in t) if (t.hasOwnProperty(n) && !e.hasOwnProperty(n)) return !1
        return !0
      },
      clone: function(e) {
        return JSON.parse(JSON.stringify(e))
      },
      replaceConfigParameters: function(e) {
        if (null == e) return e
        var t = a.default.config
        return (
          Object.keys(t).forEach(function(n) {
            var r = new RegExp('{' + n + '}', 'g'),
              o = t[n]
            e = e.replace(r, o)
          }),
          e
        )
      },
      getOddsDecimalValue: function(e) {
        return e < 100 ? e.toFixed(2) : e < 1e3 ? e.toFixed(1) : e.toFixed(0)
      },
      getOutcomeLabel: function(e, t) {
        switch (e.type) {
          case 'OT_ONE':
            return t.homeName
          case 'OT_CROSS':
            return s.draw[a.default.config.locale]
          case 'OT_TWO':
            return t.awayName
          case 'OT_OVER':
          case 'OT_UNDER':
            return e.label + ' ' + e.line / 1e3
          default:
            return e.label
        }
      },
    }
  },
  function(e, t, n) {
    'use strict'
    var r = n(42)()
    e.exports = function(e) {
      return e !== r && null !== e
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r,
      o = n(5),
      i = (r = o) && r.__esModule ? r : { default: r }
    t.default = {
      getGroupEvents: function(e) {
        var t = '/event/group/' + e + '.json'
        return this.doRequest(t)
      },
      getGroup: function(e) {
        var t = '/group/' + e + '.json'
        return this.doRequest(t)
      },
      getEventsByFilter: function(e, t) {
        var n = '/listView/' + (e = e.replace(/^#?\/?/, ''))
        return this.doRequest(n, t, 'v3')
      },
      adaptV2BetOffer: function(e) {
        !0 === e.suspended && (e.open = !1)
      },
      adaptV2LiveData: function(e) {
        if (null != e && null != e.statistics) {
          var t = e.statistics
          null != t.sets && ((t.setBasedStats = t.sets), delete t.sets),
            null != t.football &&
              ((t.footballStats = t.football), delete t.football)
        }
      },
      adaptV2Event: function(e) {},
      getLiveEventData: function(e) {
        var t = this,
          n = '/event/' + e + '/livedata.json'
        return this.doRequest(n, null, null, !0).then(function(e) {
          return t.adaptV2LiveData(e), e
        })
      },
      getLiveEvents: function() {
        var e = this
        return this.doRequest('/event/live/open.json', null, null, !0).then(
          function(t) {
            if (null != t.error) return t
            var n = t.liveEvents
            return (
              (t.events = n),
              t.events.forEach(e.adaptV2Event),
              delete t.liveEvents,
              delete t.group,
              n.forEach(function(t) {
                ;(t.betOffers = []),
                  null != t.mainBetOffer &&
                    (e.adaptV2BetOffer(t.mainBetOffer),
                    t.betOffers.push(t.mainBetOffer),
                    delete t.mainBetOffer),
                  e.adaptV2LiveData(t.liveData)
              }),
              t
            )
          }
        )
      },
      getLiveEvent: function(e) {
        var t = this,
          n = '/betoffer/live/event/' + e + '.json'
        return this.doRequest(n, null, null, !0).then(function(e) {
          return (
            (e.betOffers = e.betoffers),
            delete e.betoffers,
            e.betOffers.forEach(t.adaptV2BetOffer),
            (e.event = e.events[0]),
            t.adaptV2Event(e.event),
            delete e.events,
            e
          )
        })
      },
      getLiveEventsByFilter: function(e) {
        var t = (e = e.replace(/\/$/, '')).split('/')
        t = t.slice(0, 3)
        return this.doRequest(
          '/listView/all/all/all/all/in-play/',
          null,
          'v3'
        ).then(function(e) {
          for (var n = { events: [] }, r = 0, o = e.events.length; r < o; ++r) {
            var i = 0,
              a = e.events[r].event.path.length,
              s = !0
            for (a > t.length && (a = t.length); i < a; ++i)
              'all' !== t[i] &&
                e.events[r].event.path[i].termKey !== t[i] &&
                (s = !1)
            s && n.events.push(e.events[r])
          }
          return n
        })
      },
      getEvent: function(e) {
        var t = this
        return this.doRequest('/betoffer/event/' + e + '.json').then(function(
          e
        ) {
          return (
            (e.betOffers = e.betoffers),
            delete e.betoffers,
            e.betOffers.forEach(t.adaptV2BetOffer),
            (e.event = e.events[0]),
            t.adaptV2Event(e.event),
            delete e.events,
            e
          )
        })
      },
      getHighlight: function() {
        return this.doRequest('/group/highlight.json').then(function(e) {
          return (
            Array.isArray(e.groups) &&
              e.groups.sort(function(e, t) {
                return parseInt(e.sortOrder, 10) > parseInt(t.sortOrder, 10)
                  ? 1
                  : parseInt(e.sortOrder, 10) < parseInt(t.sortOrder, 10)
                    ? -1
                    : 0
              }),
            e
          )
        })
      },
      doRequest: function(e, t, n, r) {
        var o = i.default.config
        if (null == o.offering)
          return Promise.reject(
            new Error(
              'The offering has not been set, is the right widget api version loaded?'
            )
          )
        var a =
            o.apiBaseUrl.replace('{apiVersion}', null != n ? n : o.version) +
            o.offering +
            e,
          s = t || {},
          l = {
            lang: s.locale || o.locale,
            market: s.market || o.market,
            client_id: s.client_id || o.client_id,
            include: s.include || '',
            betOffers: s.betOffers || 'COMBINED',
            categoryGroup: s.categoryGroup || 'COMBINED',
            displayDefault: s.displayDefault || !0,
          }
        return (
          !0 === r && (l.nocache = Date.now()),
          (a +=
            '?' +
            Object.keys(l)
              .map(function(e) {
                return encodeURIComponent(e) + '=' + encodeURIComponent(l[e])
              })
              .join('&')),
          i.default.getData(a)
        )
      },
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = n(59)
    Object.defineProperty(t, 'OutcomeButton', {
      enumerable: !0,
      get: function() {
        return h(r).default
      },
    })
    var o = n(17)
    Object.defineProperty(t, 'OutcomeButtonUI', {
      enumerable: !0,
      get: function() {
        return h(o).default
      },
    })
    var i = n(62)
    Object.defineProperty(t, 'TabPagination', {
      enumerable: !0,
      get: function() {
        return h(i).default
      },
    })
    var a = n(70)
    Object.defineProperty(t, 'FixedList', {
      enumerable: !0,
      get: function() {
        return h(a).default
      },
    })
    var s = n(18)
    Object.defineProperty(t, 'ScrolledList', {
      enumerable: !0,
      get: function() {
        return h(s).default
      },
    })
    var l = n(73)
    Object.defineProperty(t, 'DropdownButton', {
      enumerable: !0,
      get: function() {
        return h(l).default
      },
    })
    var u = n(76)
    Object.defineProperty(t, 'Header', {
      enumerable: !0,
      get: function() {
        return h(u).default
      },
    })
    var c = n(79)
    Object.defineProperty(t, 'ActionButton', {
      enumerable: !0,
      get: function() {
        return h(c).default
      },
    })
    var d = n(82)
    Object.defineProperty(t, 'IconHeader', {
      enumerable: !0,
      get: function() {
        return h(d).default
      },
    })
    var f = n(85)
    Object.defineProperty(t, 'Carousel', {
      enumerable: !0,
      get: function() {
        return h(f).default
      },
    })
    var p = n(92)
    function h(e) {
      return e && e.__esModule ? e : { default: e }
    }
    Object.defineProperty(t, 'BlendedBackground', {
      enumerable: !0,
      get: function() {
        return h(p).default
      },
    })
  },
  function(e, t, n) {
    'use strict'
    var r,
      o,
      i = (e.exports = {})
    function a() {
      throw new Error('setTimeout has not been defined')
    }
    function s() {
      throw new Error('clearTimeout has not been defined')
    }
    function l(e) {
      if (r === setTimeout) return setTimeout(e, 0)
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0)
      try {
        return r(e, 0)
      } catch (t) {
        try {
          return r.call(null, e, 0)
        } catch (t) {
          return r.call(this, e, 0)
        }
      }
    }
    !(function() {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : a
      } catch (e) {
        r = a
      }
      try {
        o = 'function' == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        o = s
      }
    })()
    var u,
      c = [],
      d = !1,
      f = -1
    function p() {
      d &&
        u &&
        ((d = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && h())
    }
    function h() {
      if (!d) {
        var e = l(p)
        d = !0
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++f < t; ) u && u[f].run()
          ;(f = -1), (t = c.length)
        }
        ;(u = null),
          (d = !1),
          (function(e) {
            if (o === clearTimeout) return clearTimeout(e)
            if ((o === s || !o) && clearTimeout)
              return (o = clearTimeout), clearTimeout(e)
            try {
              o(e)
            } catch (t) {
              try {
                return o.call(null, e)
              } catch (t) {
                return o.call(this, e)
              }
            }
          })(e)
      }
    }
    function b(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function m() {}
    ;(i.nextTick = function(e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      c.push(new b(e, t)), 1 !== c.length || d || l(h)
    }),
      (b.prototype.run = function() {
        this.fun.apply(null, this.array)
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function(e) {
        return []
      }),
      (i.binding = function(e) {
        throw new Error('process.binding is not supported')
      }),
      (i.cwd = function() {
        return '/'
      }),
      (i.chdir = function(e) {
        throw new Error('process.chdir is not supported')
      }),
      (i.umask = function() {
        return 0
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r,
      o = n(5),
      i = (r = o) && r.__esModule ? r : { default: r }
    t.default = {
      getLeagueTableStatistics: function(e) {
        return (
          '/' === (e = e.match(/[^?]*/)[0])[e.length - 1] &&
            (e = e.slice(0, -1)),
          '/' === e[0] && (e = e.slice(1)),
          this.doRequest('/leaguetable/' + e + '.json')
        )
      },
      getHeadToHeadStatistics: function(e) {
        return this.doRequest('/h2h/event/' + e + '.json')
      },
      getTeamPerformanceStatistics: function(e) {
        return this.doRequest('/tpi/event/' + e + '.json')
      },
      doRequest: function(e) {
        return (
          '/' !== e.charAt(0) && (e += '/'),
          i.default.getData(
            i.default.config.apiStatisticsBaseUrl +
              i.default.config.offering +
              e +
              '?lang=' +
              i.default.config.locale +
              '&market=' +
              i.default.config.market
          )
        )
      },
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r,
      o = n(5),
      i = (r = o) && r.__esModule ? r : { default: r }
    t.default = {
      getTranslation: function(e) {
        var t = i.default.config.locale,
          n = window.gmWidgetsI18n['wc2018-tournament-overview-widget']
        if (null == n || null == t || 5 != t.length) return e
        var r = null
        if (null == n[t]) {
          var o = t.split('_')[0]
          if (2 !== o.length) return e
          if ('en' === o && null != n.en_GB) r = n.en_GB
          else
            for (var a = Object.keys(n).sort(), s = 0; s < a.length; s++)
              if (a[s].split('_')[0] === o) {
                r = n[a[s]]
                break
              }
        } else r = n[t]
        if (null == r) {
          if (null == n.en_GB) return e
          r = n.en_GB
        }
        var l = r[e]
        if (null == l) return e
        for (
          var u = arguments.length, c = Array(u > 1 ? u - 1 : 0), d = 1;
          d < u;
          d++
        )
          c[d - 1] = arguments[d]
        for (var f = 0; f < c.length; f++) {
          var p = c[f] || ''
          l = l.replace('{' + f + '}', p)
        }
        return l
      },
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = a(n(6)),
      o = a(n(5)),
      i = a(n(14))
    function a(e) {
      return e && e.__esModule ? e : { default: e }
    }
    t.default = {
      get api() {
        return o.default.widgetApi
      },
      events: i.default,
      betslipIds: [],
      handleResponse: function(e) {
        switch (e.type) {
          case this.api.WIDGET_HEIGHT:
            i.default.publish('WIDGET:HEIGHT', e.data)
            break
          case this.api.BETSLIP_OUTCOMES:
            for (var t = 0, n = e.data.outcomes.length, a = []; t < n; ++t)
              a.push(e.data.outcomes[t].id)
            var s = r.default.diffArray(this.betslipIds, a),
              l = r.default.diffArray(a, this.betslipIds)
            for (this.betslipIds = a, t = 0, n = s.length; t < n; ++t)
              i.default.publish('OUTCOME:REMOVED:' + s[t])
            for (t = 0, n = l.length; t < n; ++t)
              i.default.publish('OUTCOME:ADDED:' + l[t])
            i.default.publish('OUTCOMES:UPDATE', e.data)
            break
          case this.api.WIDGET_ARGS:
            ;(o.default.args = e.data), i.default.publish('WIDGET:ARGS', e.data)
            break
          case this.api.PAGE_INFO:
            o.default.setPageInfo(e.data),
              i.default.publish('PAGE:INFO', e.data)
            break
          case this.api.CLIENT_ODDS_FORMAT:
            ;(o.default.oddsFormat = e.data),
              i.default.publish('ODDS:FORMAT', e.data)
            break
          case this.api.CLIENT_CONFIG:
            ;(o.default.config = e.data),
              i.default.publish('CLIENT:CONFIG', e.data)
            break
          case this.api.USER_LOGGED_IN:
            i.default.publish('USER:LOGGED_IN', e.data)
            break
          case 'Setup':
            i.default.publish('Setup response', e.data)
        }
      },
      createUrl: function(e, t) {
        return this.api.createUrl(e, t)
      },
      createFilterUrl: function(e) {
        var t = o.default.config.routeRoot,
          n = e
            .filter(function(e) {
              return 0 === e.indexOf('/')
            })
            .sort()
            .reduce(function(e, t) {
              var n = []
              return (
                t
                  .replace(/\/+$/, '')
                  .split('/')
                  .slice(1)
                  .forEach(function(t, r) {
                    r in e || (e[r] = [])
                    var o = e[r]
                    r > 0 &&
                      n.forEach(function(e) {
                        for (var t = 0; t <= e; t++)
                          null == o[t] && o.push(t === e ? [] : 'all')
                        o = o[e]
                      }),
                      -1 === o.indexOf(t) && o.push(t),
                      (n[r] = o.length - 1)
                  }),
                e
              )
            }, []),
          r = '#' + t.replace(/.*?#/, '').replace(/^\//, '')
        r += n
          .reduce(function(e, t) {
            return e + '/' + JSON.stringify(t).slice(1, -1)
          }, '')
          .replace(/"/g, '')
          .replace(/(,all)+(\/|]|$)/g, '$2')
        for (var i = 0; i <= n.length; i++) r = r.replace(/\[([^,\]]*)]/g, '$1')
        var a = e
          .filter(function(e) {
            return 0 !== e.indexOf('/')
          })
          .join(',')
        if (a) {
          for (var s = 0; s < 4 - n.length; s++) r += '/all'
          r += '/' + a
        }
        return r.match(/filter$/) ? r + '/all' : r
      },
      getPageType: function() {
        if (!o.default.pageInfo.pageType) return ''
        var e = o.default.pageInfo.pageType
        switch (e) {
          case 'event':
            return ''
          case 'event-live':
            return 'live/'
        }
      },
      requestSetup: function(e) {
        this.api.requestSetup(e)
      },
      requestWidgetHeight: function() {
        this.api.request(this.api.WIDGET_HEIGHT)
      },
      setWidgetHeight: function(e) {
        return (
          (o.default.embeddedElement.style.height = e + 'px'),
          void o.default.args.onHeightChange(e)
        )
      },
      adaptWidgetHeight: function() {
        o.default
        var e = window.getComputedStyle(o.default.rootElement).height
        return (
          (o.default.embeddedElement.style.height = e),
          void o.default.args.onHeightChange(e)
        )
      },
      enableWidgetTransition: function(e) {
        e
          ? this.api.set(this.api.WIDGET_ENABLE_TRANSITION)
          : this.api.set(this.api.WIDGET_DISABLE_TRANSITION)
      },
      removeWidget: function(e) {
        o.default.args.onWidgetRemoved(e)
        for (var t = o.default.rootElement; t.firstChild; )
          t.removeChild(t.firstChild)
        o.default.embeddedElement.style.display = 'none'
      },
      navigateToLiveEvent: function(e) {
        this.navigateClient('event/live/' + e)
      },
      navigateToEvent: function(e) {
        this.navigateClient('event/' + e)
      },
      navigateToFilter: function(e) {
        'string' == typeof e &&
          -1 === e.indexOf('filter/') &&
          (e = 'filter/' + e),
          this.navigateClient(e)
      },
      navigateToLiveEvents: function() {
        this.navigateClient(['in-play'])
      },
      addOutcomeToBetslip: function(e, t, n, r) {
        var i = []
        Array.isArray(e) ? (i = e) : i.push(e)
        var a = { outcomes: i }
        null != t && (Array.isArray(t) ? (a.stakes = t) : (a.stakes = [t])),
          (a.couponType =
            1 === i.length
              ? this.api.BETSLIP_OUTCOMES_ARGS.TYPE_SINGLE
              : this.api.BETSLIP_OUTCOMES_ARGS.TYPE_COMBINATION),
          (a.updateMode =
            'replace' !== n
              ? this.api.BETSLIP_OUTCOMES_ARGS.UPDATE_APPEND
              : this.api.BETSLIP_OUTCOMES_ARGS.UPDATE_REPLACE),
          null != r && (a.source = r),
          null != o.default.widgetTrackingName &&
            (a.name = o.default.widgetTrackingName),
          this.api.set(this.api.BETSLIP_OUTCOMES, a)
      },
      removeOutcomeFromBetslip: function(e) {
        var t = []
        Array.isArray(e) ? (t = e) : t.push(e)
        var n = { outcomes: t }
        null != o.default.widgetTrackingName &&
          (n.name = o.default.widgetTrackingName),
          this.api.set(this.api.BETSLIP_OUTCOMES_REMOVE, n)
      },
      requestBetslipOutcomes: function() {
        this.api.request(this.api.BETSLIP_OUTCOMES)
      },
      requestPageInfo: function() {
        this.api.request(this.api.PAGE_INFO)
      },
      requestWidgetArgs: function() {
        this.api.request(this.api.WIDGET_ARGS)
      },
      requestClientConfig: function() {
        this.api.request(this.api.CLIENT_CONFIG)
      },
      requestOddsFormat: function() {
        this.api.request(this.api.CLIENT_ODDS_FORMAT)
      },
      requestOddsAsAmerican: function(e) {
        var t = this
        return new Promise(function(n) {
          t.api.requestOddsAsAmerican(e, function(e) {
            n(e)
          })
        })
      },
      requestOddsAsFractional: function(e) {
        var t = this
        return new Promise(function(n) {
          t.api.requestOddsAsFractional(e, function(e) {
            n(e)
          })
        })
      },
      navigateClient: function(e) {
        var t = ''
        'string' == typeof e
          ? (t = '#' + o.default.config.routeRoot + e)
          : Array.isArray(e) &&
            (t = this.api.createFilterUrl(e, o.default.config.routeRoot)),
          o.default.args.onWidgetNavigateClient(
            t,
            null != o.default.widgetTrackingName
              ? o.default.widgetTrackingName
              : null
          )
      },
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r,
      o = n(51),
      i = (r = o) && r.__esModule ? r : { default: r }
    var a = {},
      s = {
        set liveEventPollingInterval(e) {
          if ('number' != typeof e) throw new Error('Invalid number: ' + e)
          i.default.pollingInterval = e
        },
        subscribe: function(e, t) {
          a.hasOwnProperty(e)
            ? a[e].push(t)
            : ((a[e] = [t]), i.default.subscribe(e, this.publish.bind(this)))
        },
        unsubscribe: function(e, t) {
          if (a.hasOwnProperty(e)) {
            if (t) {
              var n = a[e].indexOf(t)
              n > -1 && a[e].splice(n, 1)
            } else a[e] = []
            0 == a[e].length && (delete a[e], i.default.unsubscribe(e))
          }
        },
        publish: function(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r]
          a.hasOwnProperty(e) &&
            a[e].forEach(function(e) {
              return e.apply(void 0, n)
            })
        },
      }
    t.default = s
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r,
      o = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(r = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                ;(o = !0), (i = e)
              } finally {
                try {
                  !r && s.return && s.return()
                } finally {
                  if (o) throw i
                }
              }
              return n
            })(e, t)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          )
        }
      })(),
      i = n(5),
      a = (r = i) && r.__esModule ? r : { default: r }
    var s = {
      get api() {
        return a.default.widgetApi
      },
      callbacks: {},
      _getCallbackType: function(e, t, n) {
        return e === this.api.EVENT_INFO_TYPES.BET_OFFERS
          ? e + '-' + t + '-' + (n ? 'MAIN' : 'ALL')
          : e
      },
      handleResponse: function(e) {
        var t = e.data
        if (e.type === this.api.BETSLIP_OUTCOMES)
          return (
            null == this.callbacks[this.api.BETSLIP_OUTCOMES] &&
              (this.callbacks[this.api.BETSLIP_OUTCOMES] = []),
            void this.callbacks[this.api.BETSLIP_OUTCOMES].forEach(function(e) {
              e(t)
            })
          )
        if (e.type === this.api.CLIENT_ODDS_FORMAT)
          return (
            null == this.callbacks[this.api.CLIENT_ODDS_FORMAT] &&
              (this.callbacks[this.api.CLIENT_ODDS_FORMAT] = []),
            void this.callbacks[this.api.CLIENT_ODDS_FORMAT].forEach(function(
              e
            ) {
              e(t)
            })
          )
        if (e.type === this.api.EVENT_INFO) {
          var n = this.callbacks[
            this._getCallbackType(t.info, t.context, t.mainOnly)
          ]
          null != n &&
            null != n[t.id] &&
            n[t.id].forEach(function(e) {
              e(t)
            })
        }
      },
      _addCallback: function(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          i = s.callbacks
        null != n &&
          null != t &&
          null != e &&
          ((null != r &&
            r !== this.api.EVENT_INFO_CONTEXT.LIVE &&
            r !== this.api.EVENT_INFO_CONTEXT.PRE_MATCH) ||
            (null == i[(e = this._getCallbackType(e, r, o))] && (i[e] = {}),
            null == i[e][t] && (i[e][t] = []),
            i[e][t].push(n)))
      },
      subscribe: {
        get api() {
          return a.default.widgetApi
        },
        _isIE11: function() {
          return -1 !== navigator.appName.indexOf('Trident')
        },
        betslipOutcomes: function(e) {
          var t = s.callbacks
          null == t[this.api.BETSLIP_OUTCOMES] &&
            (t[this.api.BETSLIP_OUTCOMES] = []),
            t[this.api.BETSLIP_OUTCOMES].push(e)
        },
        oddsFormat: function(e) {
          var t = s.callbacks
          null == t[this.api.CLIENT_ODDS_FORMAT] &&
            (t[this.api.CLIENT_ODDS_FORMAT] = []),
            t[this.api.CLIENT_ODDS_FORMAT].push(e),
            (this.oddsFormatSubscribedTo = !0)
        },
        basicInfo: function(e, t) {
          if (!this._isIE11()) {
            var n = this.api.EVENT_INFO_TYPES.BASIC
            this.api.request(this.api.EVENT_INFO, { id: e, info: n }),
              s._addCallback(n, e, t)
          }
        },
        score: function(e, t) {
          if (!this._isIE11()) {
            var n = this.api.EVENT_INFO_TYPES.SCORE
            this.api.request(this.api.EVENT_INFO, { id: e, info: n }),
              s._addCallback(n, e, t)
          }
        },
        allPreMatchBetoffers: function(e, t) {
          if (!this._isIE11()) {
            var n = this.api.EVENT_INFO_TYPES.BET_OFFERS,
              r = this.api.EVENT_INFO_CONTEXT.PRE_MATCH
            this.api.request(this.api.EVENT_INFO, {
              id: e,
              info: n,
              context: r,
            }),
              s._addCallback(n, e, t, r, !1)
          }
        },
        allLiveBetoffers: function(e, t) {
          if (!this._isIE11()) {
            var n = this.api.EVENT_INFO_TYPES.BET_OFFERS,
              r = this.api.EVENT_INFO_CONTEXT.LIVE
            this.api.request(this.api.EVENT_INFO, {
              id: e,
              info: n,
              context: r,
            }),
              s._addCallback(n, e, t, r, !1)
          }
        },
        mainPreMatchBetoffers: function(e, t) {
          if (!this._isIE11()) {
            var n = this.api.EVENT_INFO_TYPES.BET_OFFERS,
              r = this.api.EVENT_INFO_CONTEXT.PRE_MATCH
            this.api.request(this.api.EVENT_INFO, {
              id: e,
              info: n,
              context: r,
              mainOnly: !0,
            }),
              s._addCallback(n, e, t, r, !0)
          }
        },
        mainLiveBetoffers: function(e, t) {
          if (!this._isIE11()) {
            var n = this.api.EVENT_INFO_TYPES.BET_OFFERS,
              r = this.api.EVENT_INFO_CONTEXT.LIVE
            this.api.request(this.api.EVENT_INFO, {
              id: e,
              info: n,
              context: r,
              mainOnly: !0,
            }),
              s._addCallback(n, e, t, r, !0)
          }
        },
      },
      unsubscribe: function(e) {
        var t = this,
          n = !1,
          r = s.callbacks
        return (
          Object.keys(r).forEach(function(i) {
            if (Array.isArray(r[i])) {
              var a = r[i].indexOf(e)
              ;-1 !== a && (r[i].splice(a, 1), (n = !0))
            } else
              Object.keys(r[i]).forEach(function(a) {
                var s = r[i][a].indexOf(e)
                if (
                  (-1 !== s && (r[i][a].splice(s, 1), (n = !0)),
                  0 === r[i][a].length)
                ) {
                  var l = i.split('-'),
                    u = o(l, 3),
                    c = (u[0], u[1]),
                    d = 'MAIN' === u[2],
                    f = { id: a, info: i }
                  null != c && (f.context = c),
                    d && (f.mainOnly = !0),
                    t.api.request(t.api.EVENT_INFO_UNSUBSCRIBE, f),
                    delete r[i][a]
                }
              })
          }),
          n
        )
      },
    }
    t.default = s
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getMatchEvents = void 0)
    var r = n(4)
    t.getMatchEvents = function(e) {
      return r.offeringModule
        .getEventsByFilter(e)
        .then(function(t) {
          if (null == t)
            throw new Error(
              'No tournament data available for supplied filters: ' +
                e +
                ', ' +
                e +
                '/all/all/competitions'
            )
          return Promise.resolve({ events: t.events })
        })
        .catch(function(e) {
          return Promise.reject(e)
        })
    }
    t.default = {
      getEvents: function(e, t, n) {
        var o = [
          r.offeringModule.getEventsByFilter(e),
          r.offeringModule.getEventsByFilter(e + '/all/all/competitions'),
        ]
        return Promise.all(o)
          .then(function(r) {
            if (null == r)
              throw new Error(
                'No tournament data available for supplied filters: ' +
                  e +
                  ', ' +
                  e +
                  '/all/all/competitions'
              )
            var o = r[0].events,
              i = void 0,
              a = void 0
            return (
              r[1].events.forEach(function(e) {
                e.betOffers.forEach(function(r) {
                  e.event.id !== t.eventId
                    ? e.event.id !== n.eventId ||
                      (r.criterion.id === n.criterionId && (a = e))
                    : r.criterion.id === t.criterionId && (i = e)
                })
              }),
              Promise.resolve({
                events: o,
                competitions: { leftWidget: i, rightWidget: a },
              })
            )
          })
          .catch(function(e) {
            return Promise.reject(e)
          })
      },
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = s(o),
      a = (s(n(1)), s(n(60)))
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.label,
                n = e.odds,
                r = e.suspended,
                o = e.selected,
                s = e.onClick,
                l = e.outlineStyle,
                u =
                  'KambiBC-mod-outcome KambiWidget-outcome ' + a.default.general
              if (
                (l &&
                  (u = u + ' KambiWidget-primary-color ' + a.default.outline),
                r
                  ? (u += ' KambiWidget-outcome--suspended')
                  : o &&
                    (u =
                      'KambiWidget-outcome ' +
                      a.default.general +
                      ' KambiWidget-outcome--selected ' +
                      a.default['outline--selected']),
                null === n && null === t)
              )
                throw new Error('Both odds and label cannot be set to null')
              return i.default.createElement(
                'button',
                {
                  type: 'button',
                  role: 'button',
                  className: u,
                  disabled: r,
                  onClick: s,
                },
                null !== n &&
                  null !== t &&
                  i.default.createElement(
                    'div',
                    { className: 'KambiWidget-outcome__flexwrap' },
                    i.default.createElement(
                      'div',
                      {
                        className:
                          'KambiWidget-outcome__label-wrapper ' +
                          (l ? a.default['outline__label-wrapper'] : ''),
                      },
                      i.default.createElement(
                        'span',
                        { className: 'KambiWidget-outcome__label' },
                        t
                      ),
                      i.default.createElement('span', {
                        className: 'KambiWidget-outcome__line',
                      })
                    ),
                    i.default.createElement(
                      'div',
                      { className: 'KambiWidget-outcome__odds-wrapper' },
                      i.default.createElement(
                        'span',
                        {
                          className:
                            'KambiWidget-outcome__odds ' +
                            (l ? a.default.outline__odds : ''),
                        },
                        n
                      )
                    )
                  ),
                null !== n &&
                  null === t &&
                  i.default.createElement(
                    'div',
                    { className: 'KambiWidget-outcome__odds-wrapper' },
                    i.default.createElement(
                      'span',
                      {
                        className:
                          'KambiWidget-outcome__odds ' +
                          (l ? a.default.outline__odds : ''),
                      },
                      n
                    )
                  ),
                null === n &&
                  null !== t &&
                  i.default.createElement(
                    'div',
                    {
                      className:
                        'KambiWidget-outcome__label-wrapper ' +
                        a.default.label +
                        ' ' +
                        (l ? a.default['outline__label-wrapper'] : ''),
                    },
                    i.default.createElement(
                      'span',
                      { className: 'KambiWidget-outcome__label' },
                      t
                    )
                  )
              )
            },
          },
        ]),
        t
      )
    })()
    ;(l.defaultProps = {
      odds: null,
      label: null,
      suspended: !1,
      selected: !1,
    }),
      (t.default = l)
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      i = n(0),
      a = c(i),
      s = (c(n(1)), c(n(63))),
      l = c(n(65)),
      u = c(n(19))
    function c(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var d = {
        LEFT: 'flex-start',
        RIGHT: 'flex-end',
        CENTER: 'center',
        SPACE_AROUND: 'space-around',
        SPACE_BETWEEN: 'space-between',
      },
      f = { TO_LEFT: 'to-left', CENTER: 'center' },
      p = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.state = { item: e.selected }),
            (n.itemWidths = []),
            (n.prevPage = n.prevPage.bind(n)),
            (n.nextPage = n.nextPage.bind(n)),
            (n.enqueueUpdate = n.enqueueUpdate.bind(n)),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, i.Component),
          o(t, [
            {
              key: 'componentDidMount',
              value: function() {
                window.addEventListener('resize', this.enqueueUpdate),
                  this.scrollToItem(this.state.item),
                  this.updateItemsAlignment()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                window.removeEventListener('resize', this.enqueueUpdate)
              },
            },
            {
              key: 'onItemClick',
              value: function(e) {
                this.props.onItemClick && this.props.onItemClick(e),
                  this.setState({ item: e })
              },
            },
            {
              key: 'setItemWidth',
              value: function(e, t) {
                'number' == typeof t &&
                  this.itemWidths[e] !== t &&
                  ((this.itemWidths[e] = t), this.enqueueUpdate())
              },
            },
            {
              key: 'enqueueUpdate',
              value: function() {
                var e = this
                this.updateTimeout && clearTimeout(this.updateTimeout),
                  (this.updateTimeout = setTimeout(function() {
                    e.updateItemsAlignment(),
                      e.scrollToItem(e.state.item),
                      e.forceUpdate()
                  }, 150))
              },
            },
            {
              key: 'updateItemsAlignment',
              value: function() {
                this.bar &&
                  (this.computeItemsWidth(
                    0,
                    i.Children.count(this.props.children) - 1
                  ) < this.eyeshotWidth
                    ? (this.bar.style.justifyContent = this.props.alignItems)
                    : (this.bar.style.justifyContent = ''))
              },
            },
            {
              key: 'scrollTo',
              value: function(e) {
                var t = this
                if (this.maxScrollLeft && this.eyeshot) {
                  var n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c =
                      (e = Math.round(e)) > this.maxScrollLeft
                        ? this.maxScrollLeft
                        : e
                  if ((c = c < 0 ? 0 : c) != this.currentScrollLeft)
                    ((n = this.eyeshot),
                    (r = 'scrollLeft'),
                    (o = c),
                    (i = 300),
                    (a =
                      window.requestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      function(e) {
                        var t = Date.now()
                        ;(a = function(e) {
                          return e(t + i)
                        }),
                          e(t)
                      }),
                    (s = null),
                    (l = n[r]),
                    (u = o - l),
                    new Promise(function(e) {
                      a(function t(o) {
                        s || (s = o)
                        var c = (o - s) / i
                        c > 1 && (c = 1),
                          (n[r] = -u * c * (c - 2) + l),
                          c >= 1 ? e() : a(t)
                      })
                    })).then(function() {
                      return t.forceUpdate()
                    })
                }
              },
            },
            {
              key: 'scrollToItem',
              value: function(e) {
                switch (this.props.scrollToItemMode) {
                  case f.TO_LEFT:
                    this.scrollTo(e ? this.computeItemsWidth(0, e - 1) : 0)
                    break
                  case f.CENTER:
                  default:
                    this.scrollTo(
                      (e ? this.computeItemsWidth(0, e - 1) : 0) -
                        (this.eyeshotWidth - this.computeItemsWidth(e)) / 2
                    )
                }
              },
            },
            {
              key: 'computeItemsWidth',
              value: function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e
                return this.itemWidths.slice(e, t + 1).reduce(function(e, t) {
                  return e + (t || 0)
                }, 0)
              },
            },
            {
              key: 'prevPage',
              value: function() {
                this.scrollTo(
                  this.currentScrollLeft -
                    this.props.step * this.averageItemWidth
                )
              },
            },
            {
              key: 'nextPage',
              value: function() {
                this.scrollTo(
                  this.currentScrollLeft +
                    this.props.step * this.averageItemWidth
                )
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = [
                    s.default.container,
                    this.props.showControls ? '' : s.default['no-controls'],
                    'ontouchstart' in window ? s.default.touch : '',
                  ]
                    .join(' ')
                    .trim(),
                  n = !1,
                  r = this.computeItemsWidth(
                    0,
                    i.Children.count(this.props.children) - 1
                  )
                return (
                  r < this.eyeshotWidth && (n = !0),
                  a.default.createElement(
                    'div',
                    {
                      className: t,
                      style: { opacity: 0 === r ? 0 : 1 },
                      ref: function(t) {
                        return (e.container = t)
                      },
                    },
                    a.default.createElement(
                      'div',
                      {
                        className: s.default.eyeshot,
                        ref: function(t) {
                          return (e.eyeshot = t)
                        },
                      },
                      a.default.createElement(
                        'div',
                        {
                          className: s.default.bar,
                          ref: function(t) {
                            return (e.bar = t)
                          },
                        },
                        i.Children.map(this.props.children, function(t, r) {
                          return (
                            n &&
                              (t = a.default.cloneElement(t, {
                                scrolledListHasHorizontalSpaceLeft: n,
                              })),
                            e.props.renderItemContainer({
                              key: r,
                              selected: e.state.item == r,
                              onClick: e.onItemClick.bind(e, r),
                              onWidth: e.setItemWidth.bind(e, r),
                              children: t,
                            })
                          )
                        })
                      )
                    ),
                    this.props.showControls &&
                      this.props.renderPrevButton({
                        onClick: this.prevPage,
                        disabled: !this.showPrevButton,
                      }),
                    this.props.showControls &&
                      this.props.renderNextButton({
                        onClick: this.nextPage,
                        disabled: !this.showNextButton,
                      })
                  )
                )
              },
            },
            {
              key: 'currentScrollLeft',
              get: function() {
                return this.eyeshot ? this.eyeshot.scrollLeft : 0
              },
            },
            {
              key: 'eyeshotWidth',
              get: function() {
                return this.eyeshot ? this.eyeshot.offsetWidth : null
              },
            },
            {
              key: 'maxScrollLeft',
              get: function() {
                return this.eyeshotWidth
                  ? this.computeItemsWidth(
                      0,
                      i.Children.count(this.props.children) - 1
                    ) - this.eyeshotWidth
                  : null
              },
            },
            {
              key: 'showPrevButton',
              get: function() {
                return this.currentScrollLeft > 0
              },
            },
            {
              key: 'showNextButton',
              get: function() {
                return this.currentScrollLeft < this.maxScrollLeft
              },
            },
            {
              key: 'averageItemWidth',
              get: function() {
                return (
                  this.computeItemsWidth(
                    0,
                    i.Children.count(this.props.children) - 1
                  ) / i.Children.count(this.props.children)
                )
              },
            },
          ]),
          t
        )
      })()
    ;(p.ALIGN_ITEMS = d),
      (p.SCROLL_TO_ITEM_MODE = f),
      (p.defaultProps = {
        selected: 0,
        step: 2,
        alignItems: d.CENTER,
        scrollToItemMode: f.CENTER,
        renderPrevButton: function(e) {
          return a.default.createElement(l.default, r({ type: 'left' }, e))
        },
        renderNextButton: function(e) {
          return a.default.createElement(l.default, r({ type: 'right' }, e))
        },
        renderItemContainer: function(e) {
          return a.default.createElement(u.default, e, e.children)
        },
        showControls: !0,
      }),
      (t.default = p)
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = s(o),
      a = (s(n(1)), s(n(68)))
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        return (n.onResize = n.onResize.bind(n)), n
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'componentDidMount',
            value: function() {
              window.addEventListener('resize', this.onResize)
            },
          },
          {
            key: 'componentWillUnmount',
            value: function() {
              window.removeEventListener('resize', this.onResize)
            },
          },
          {
            key: 'onResize',
            value: function() {
              null !== this.width &&
                this.props.onWidth &&
                this.props.onWidth(this.width)
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this
              return i.default.createElement(
                'div',
                {
                  className: [
                    a.default.item,
                    this.props.selected ? a.default.selected : '',
                  ].join(' '),
                  onClick: this.props.onClick,
                  ref: function(t) {
                    return (e.element = t)
                  },
                },
                this.props.children,
                i.default.createElement('i', {
                  className: [
                    'KambiWidget-primary-background-color',
                    a.default.border,
                  ].join(' '),
                })
              )
            },
          },
          {
            key: 'element',
            set: function(e) {
              ;(this.el = e),
                null !== this.width &&
                  this.props.onWidth &&
                  this.props.onWidth(this.width)
            },
          },
          {
            key: 'width',
            get: function() {
              return this.el ? this.el.offsetWidth : null
            },
          },
        ]),
        t
      )
    })()
    t.default = l
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    t.default = function() {
      return (
        document.body.offsetWidth <= 768 &&
        'ontouchstart' in window &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
    }
  },
  function(e, t, n) {
    'use strict'
    n(22), n(23)
  },
  function(e, t) {
    e.exports =
      '<!doctype html>\n<html>\n<head>\n   <title>Match Schedule Widget</title>\n   <meta charset="UTF-8">\n   <meta name="apple-mobile-web-app-title" content="Kambi">\n   <meta name="description" content="Match Schedule Widget">\n   <meta name="HandheldFriendly" content="True">\n   <meta name="MobileOptimized" content="320">\n   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n\n   <meta name="fragment" content="!"/>\n\n   <meta name="mobile-web-app-capable" content="yes">\n   <meta name="apple-mobile-web-app-capable" content="yes">\n   <meta name="apple-mobile-web-app-status-bar-style" content="black">\n   <meta name="apple-mobile-web-app-title" content="">\n</head>\n<body>\n   <div id="root"></div>\n</body>\n</html>\n'
  },
  function(e, t, n) {
    'use strict'
    var r = l(n(0)),
      o = l(n(0)),
      i = n(4),
      a = l(n(16)),
      s = l(n(58))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    i.coreLibrary
      .init({
        widgetTrackingName: 'wc2018-tournament-overview',
        filter: '/football/world_cup_2018',
        iconUrl:
          'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/world_cup_2018.svg',
        flagBaseUrl:
          'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/',
        backgroundUrl:
          'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-desktop.jpg',
        rightWidgetInput: { eventId: 1004514530, criterionId: 1001868386 },
        leftWidgetInput: { eventId: 1002163009, criterionId: 1004240929 },
      })
      .then(function() {
        var e = i.coreLibrary.args,
          t = e.filter,
          n = e.leftWidgetInput,
          r = e.rightWidgetInput
        return a.default.getEvents(t, n, r)
      })
      .then(function(e) {
        var t = e.events,
          n = e.competitions,
          a = i.coreLibrary.args,
          l = a.filter,
          u = a.iconUrl,
          c = a.flagBaseUrl,
          d = a.backgroundUrl
        o.default.render(
          r.default.createElement(s.default, {
            competitions: n,
            events: t,
            iconUrl: u,
            flagBaseUrl: c,
            backgroundUrl: d,
            filter: l,
          }),
          i.coreLibrary.rootElement
        )
        var f = i.coreLibrary.args.onWidgetRemoved
        ;(i.coreLibrary.args.onWidgetRemoved = function() {
          o.default.unmountComponentAtNode(i.coreLibrary.rootElement), f()
        }),
          i.coreLibrary.args.onWidgetLoaded()
      })
      .catch(function(e) {
        i.widgetModule.removeWidget(e)
      })
  },
  function(e, t, n) {
    'use strict'
    var r = n(25),
      o = n(26),
      i = n(27)
    e.exports = function() {
      function e(e, t, n, r, a, s) {
        s !== i &&
          o(
            !1,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          )
      }
      function t() {
        return e
      }
      e.isRequired = e
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
      }
      return (n.checkPropTypes = r), (n.PropTypes = n), n
    }
  },
  function(e, t, n) {
    'use strict'
    function r(e) {
      return function() {
        return e
      }
    }
    var o = function() {}
    ;(o.thatReturns = r),
      (o.thatReturnsFalse = r(!1)),
      (o.thatReturnsTrue = r(!0)),
      (o.thatReturnsNull = r(null)),
      (o.thatReturnsThis = function() {
        return this
      }),
      (o.thatReturnsArgument = function(e) {
        return e
      }),
      (e.exports = o)
  },
  function(e, t, n) {
    'use strict'
    var r = function(e) {}
    e.exports = function(e, t, n, o, i, a, s, l) {
      if ((r(t), !e)) {
        var u
        if (void 0 === t)
          u = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          )
        else {
          var c = [n, o, i, a, s, l],
            d = 0
          ;(u = new Error(
            t.replace(/%s/g, function() {
              return c[d++]
            })
          )).name =
            'Invariant Violation'
        }
        throw ((u.framesToPop = 1), u)
      }
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }
    var o = {},
      i = [],
      a = []
    function s(e, t) {
      var n,
        r,
        s,
        l,
        u = a
      for (l = arguments.length; l-- > 2; ) i.push(arguments[l])
      for (
        t &&
        null != t.children &&
        (i.length || i.push(t.children), delete t.children);
        i.length;

      )
        if ((r = i.pop()) && void 0 !== r.pop)
          for (l = r.length; l--; ) i.push(r[l])
        else
          'boolean' == typeof r && (r = null),
            (s = 'function' != typeof e) &&
              (null == r
                ? (r = '')
                : 'number' == typeof r
                  ? (r = String(r))
                  : 'string' != typeof r && (s = !1)),
            s && n ? (u[u.length - 1] += r) : u === a ? (u = [r]) : u.push(r),
            (n = s)
      var c = new function() {}()
      return (
        (c.nodeName = e),
        (c.children = u),
        (c.attributes = null == t ? void 0 : t),
        (c.key = null == t ? void 0 : t.key),
        void 0 !== o.vnode && o.vnode(c),
        c
      )
    }
    function l(e, t) {
      for (var n in t) e[n] = t[n]
      return e
    }
    var u =
      'function' == typeof Promise
        ? Promise.resolve().then.bind(Promise.resolve())
        : setTimeout
    function c(e, t) {
      return s(
        e.nodeName,
        l(l({}, e.attributes), t),
        arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
      )
    }
    var d = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      f = []
    function p(e) {
      !e._dirty &&
        (e._dirty = !0) &&
        1 == f.push(e) &&
        (o.debounceRendering || u)(h)
    }
    function h() {
      var e,
        t = f
      for (f = []; (e = t.pop()); ) e._dirty && I(e)
    }
    function b(e, t) {
      return (
        e.normalizedNodeName === t ||
        e.nodeName.toLowerCase() === t.toLowerCase()
      )
    }
    function m(e) {
      var t = l({}, e.attributes)
      t.children = e.children
      var n = e.nodeName.defaultProps
      if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r])
      return t
    }
    function y(e) {
      var t = e.parentNode
      t && t.removeChild(e)
    }
    function v(e, t, n, o, i) {
      if (('className' === t && (t = 'class'), 'key' === t));
      else if ('ref' === t) n && n(null), o && o(e)
      else if ('class' !== t || i)
        if ('style' === t) {
          if (
            ((o && 'string' != typeof o && 'string' != typeof n) ||
              (e.style.cssText = o || ''),
            o && 'object' === (void 0 === o ? 'undefined' : r(o)))
          ) {
            if ('string' != typeof n)
              for (var a in n) a in o || (e.style[a] = '')
            for (var a in o)
              e.style[a] =
                'number' == typeof o[a] && !1 === d.test(a) ? o[a] + 'px' : o[a]
          }
        } else if ('dangerouslySetInnerHTML' === t)
          o && (e.innerHTML = o.__html || '')
        else if ('o' == t[0] && 'n' == t[1]) {
          var s = t !== (t = t.replace(/Capture$/, ''))
          ;(t = t.toLowerCase().substring(2)),
            o
              ? n || e.addEventListener(t, g, s)
              : e.removeEventListener(t, g, s),
            ((e._listeners || (e._listeners = {}))[t] = o)
        } else if ('list' !== t && 'type' !== t && !i && t in e)
          !(function(e, t, n) {
            try {
              e[t] = n
            } catch (e) {}
          })(e, t, null == o ? '' : o),
            (null != o && !1 !== o) || e.removeAttribute(t)
        else {
          var l = i && t !== (t = t.replace(/^xlink:?/, ''))
          null == o || !1 === o
            ? l
              ? e.removeAttributeNS(
                  'http://www.w3.org/1999/xlink',
                  t.toLowerCase()
                )
              : e.removeAttribute(t)
            : 'function' != typeof o &&
              (l
                ? e.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    t.toLowerCase(),
                    o
                  )
                : e.setAttribute(t, o))
        }
      else e.className = o || ''
    }
    function g(e) {
      return this._listeners[e.type]((o.event && o.event(e)) || e)
    }
    var _ = [],
      A = 0,
      w = !1,
      E = !1
    function k() {
      for (var e; (e = _.pop()); )
        o.afterMount && o.afterMount(e),
          e.componentDidMount && e.componentDidMount()
    }
    function O(e, t, n, r, o, i) {
      A++ ||
        ((w = null != o && void 0 !== o.ownerSVGElement),
        (E = null != e && !('__preactattr_' in e)))
      var a = x(e, t, n, r, i)
      return (
        o && a.parentNode !== o && o.appendChild(a),
        --A || ((E = !1), i || k()),
        a
      )
    }
    function x(e, t, n, r, o) {
      var i = e,
        a = w
      if (
        ((null != t && 'boolean' != typeof t) || (t = ''),
        'string' == typeof t || 'number' == typeof t)
      )
        return (
          e && void 0 !== e.splitText && e.parentNode && (!e._component || o)
            ? e.nodeValue != t && (e.nodeValue = t)
            : ((i = document.createTextNode(t)),
              e && (e.parentNode && e.parentNode.replaceChild(i, e), T(e, !0))),
          (i.__preactattr_ = !0),
          i
        )
      var s,
        l,
        u = t.nodeName
      if ('function' == typeof u)
        return (function(e, t, n, r) {
          var o = e && e._component,
            i = o,
            a = e,
            s = o && e._componentConstructor === t.nodeName,
            l = s,
            u = m(t)
          for (; o && !l && (o = o._parentComponent); )
            l = o.constructor === t.nodeName
          o && l && (!r || o._component)
            ? (P(o, u, 3, n, r), (e = o.base))
            : (i && !s && (L(i), (e = a = null)),
              (o = N(t.nodeName, u, n)),
              e && !o.nextBase && ((o.nextBase = e), (a = null)),
              P(o, u, 1, n, r),
              (e = o.base),
              a && e !== a && ((a._component = null), T(a, !1)))
          return e
        })(e, t, n, r)
      if (
        ((w = 'svg' === u || ('foreignObject' !== u && w)),
        (u = String(u)),
        (!e || !b(e, u)) &&
          ((s = u),
          ((l = w
            ? document.createElementNS('http://www.w3.org/2000/svg', s)
            : document.createElement(s)).normalizedNodeName = s),
          (i = l),
          e))
      ) {
        for (; e.firstChild; ) i.appendChild(e.firstChild)
        e.parentNode && e.parentNode.replaceChild(i, e), T(e, !0)
      }
      var c = i.firstChild,
        d = i.__preactattr_,
        f = t.children
      if (null == d) {
        d = i.__preactattr_ = {}
        for (var p = i.attributes, h = p.length; h--; )
          d[p[h].name] = p[h].value
      }
      return (
        !E &&
        f &&
        1 === f.length &&
        'string' == typeof f[0] &&
        null != c &&
        void 0 !== c.splitText &&
        null == c.nextSibling
          ? c.nodeValue != f[0] && (c.nodeValue = f[0])
          : ((f && f.length) || null != c) &&
            (function(e, t, n, r, o) {
              var i,
                a,
                s,
                l,
                u,
                c = e.childNodes,
                d = [],
                f = {},
                p = 0,
                h = 0,
                m = c.length,
                v = 0,
                g = t ? t.length : 0
              if (0 !== m)
                for (var _ = 0; _ < m; _++) {
                  var A = c[_],
                    w = A.__preactattr_,
                    E =
                      g && w
                        ? A._component
                          ? A._component.__key
                          : w.key
                        : null
                  null != E
                    ? (p++, (f[E] = A))
                    : (w ||
                        (void 0 !== A.splitText
                          ? !o || A.nodeValue.trim()
                          : o)) &&
                      (d[v++] = A)
                }
              if (0 !== g)
                for (var _ = 0; _ < g; _++) {
                  ;(l = t[_]), (u = null)
                  var E = l.key
                  if (null != E)
                    p && void 0 !== f[E] && ((u = f[E]), (f[E] = void 0), p--)
                  else if (!u && h < v)
                    for (i = h; i < v; i++)
                      if (
                        void 0 !== d[i] &&
                        ((k = a = d[i]),
                        (S = o),
                        'string' == typeof (O = l) || 'number' == typeof O
                          ? void 0 !== k.splitText
                          : 'string' == typeof O.nodeName
                            ? !k._componentConstructor && b(k, O.nodeName)
                            : S || k._componentConstructor === O.nodeName)
                      ) {
                        ;(u = a),
                          (d[i] = void 0),
                          i === v - 1 && v--,
                          i === h && h++
                        break
                      }
                  ;(u = x(u, l, n, r)),
                    (s = c[_]),
                    u &&
                      u !== e &&
                      u !== s &&
                      (null == s
                        ? e.appendChild(u)
                        : u === s.nextSibling
                          ? y(s)
                          : e.insertBefore(u, s))
                }
              var k, O, S
              if (p) for (var _ in f) void 0 !== f[_] && T(f[_], !1)
              for (; h <= v; ) void 0 !== (u = d[v--]) && T(u, !1)
            })(i, f, n, r, E || null != d.dangerouslySetInnerHTML),
        (function(e, t, n) {
          var r
          for (r in n)
            (t && null != t[r]) ||
              null == n[r] ||
              v(e, r, n[r], (n[r] = void 0), w)
          for (r in t)
            'children' === r ||
              'innerHTML' === r ||
              (r in n &&
                t[r] === ('value' === r || 'checked' === r ? e[r] : n[r])) ||
              v(e, r, n[r], (n[r] = t[r]), w)
        })(i, t.attributes, d),
        (w = a),
        i
      )
    }
    function T(e, t) {
      var n = e._component
      n
        ? L(n)
        : (null != e.__preactattr_ &&
            e.__preactattr_.ref &&
            e.__preactattr_.ref(null),
          (!1 !== t && null != e.__preactattr_) || y(e),
          S(e))
    }
    function S(e) {
      for (e = e.lastChild; e; ) {
        var t = e.previousSibling
        T(e, !0), (e = t)
      }
    }
    var C = {}
    function N(e, t, n) {
      var r,
        o = C[e.name]
      if (
        (e.prototype && e.prototype.render
          ? ((r = new e(t, n)), j.call(r, t, n))
          : (((r = new j(t, n)).constructor = e), (r.render = M)),
        o)
      )
        for (var i = o.length; i--; )
          if (o[i].constructor === e) {
            ;(r.nextBase = o[i].nextBase), o.splice(i, 1)
            break
          }
      return r
    }
    function M(e, t, n) {
      return this.constructor(e, n)
    }
    function P(e, t, n, r, i) {
      e._disable ||
        ((e._disable = !0),
        (e.__ref = t.ref) && delete t.ref,
        (e.__key = t.key) && delete t.key,
        !e.base || i
          ? e.componentWillMount && e.componentWillMount()
          : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r),
        r &&
          r !== e.context &&
          (e.prevContext || (e.prevContext = e.context), (e.context = r)),
        e.prevProps || (e.prevProps = e.props),
        (e.props = t),
        (e._disable = !1),
        0 !== n &&
          (1 !== n && !1 === o.syncComponentUpdates && e.base
            ? p(e)
            : I(e, 1, i)),
        e.__ref && e.__ref(e))
    }
    function I(e, t, n, r) {
      if (!e._disable) {
        var i,
          a,
          s,
          u = e.props,
          c = e.state,
          d = e.context,
          f = e.prevProps || u,
          p = e.prevState || c,
          h = e.prevContext || d,
          b = e.base,
          y = e.nextBase,
          v = b || y,
          g = e._component,
          w = !1
        if (
          (b &&
            ((e.props = f),
            (e.state = p),
            (e.context = h),
            2 !== t &&
            e.shouldComponentUpdate &&
            !1 === e.shouldComponentUpdate(u, c, d)
              ? (w = !0)
              : e.componentWillUpdate && e.componentWillUpdate(u, c, d),
            (e.props = u),
            (e.state = c),
            (e.context = d)),
          (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
          (e._dirty = !1),
          !w)
        ) {
          ;(i = e.render(u, c, d)),
            e.getChildContext && (d = l(l({}, d), e.getChildContext()))
          var E,
            x,
            S = i && i.nodeName
          if ('function' == typeof S) {
            var C = m(i)
            ;(a = g) && a.constructor === S && C.key == a.__key
              ? P(a, C, 1, d, !1)
              : ((E = a),
                (e._component = a = N(S, C, d)),
                (a.nextBase = a.nextBase || y),
                (a._parentComponent = e),
                P(a, C, 0, d, !1),
                I(a, 1, n, !0)),
              (x = a.base)
          } else
            (s = v),
              (E = g) && (s = e._component = null),
              (v || 1 === t) &&
                (s && (s._component = null),
                (x = O(s, i, d, n || !b, v && v.parentNode, !0)))
          if (v && x !== v && a !== g) {
            var M = v.parentNode
            M &&
              x !== M &&
              (M.replaceChild(x, v), E || ((v._component = null), T(v, !1)))
          }
          if ((E && L(E), (e.base = x), x && !r)) {
            for (var j = e, D = e; (D = D._parentComponent); ) (j = D).base = x
            ;(x._component = j), (x._componentConstructor = j.constructor)
          }
        }
        if (
          (!b || n
            ? _.unshift(e)
            : w ||
              (e.componentDidUpdate && e.componentDidUpdate(f, p, h),
              o.afterUpdate && o.afterUpdate(e)),
          null != e._renderCallbacks)
        )
          for (; e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e)
        A || r || k()
      }
    }
    function L(e) {
      o.beforeUnmount && o.beforeUnmount(e)
      var t = e.base
      ;(e._disable = !0),
        e.componentWillUnmount && e.componentWillUnmount(),
        (e.base = null)
      var n = e._component
      n
        ? L(n)
        : t &&
          (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null),
          (e.nextBase = t),
          y(t),
          (function(e) {
            var t = e.constructor.name
            ;(C[t] || (C[t] = [])).push(e)
          })(e),
          S(t)),
        e.__ref && e.__ref(null)
    }
    function j(e, t) {
      ;(this._dirty = !0),
        (this.context = t),
        (this.props = e),
        (this.state = this.state || {})
    }
    function D(e, t, n) {
      return O(n, e, {}, !1, t, !1)
    }
    l(j.prototype, {
      setState: function(e, t) {
        var n = this.state
        this.prevState || (this.prevState = l({}, n)),
          l(n, 'function' == typeof e ? e(n, this.props) : e),
          t && (this._renderCallbacks = this._renderCallbacks || []).push(t),
          p(this)
      },
      forceUpdate: function(e) {
        e && (this._renderCallbacks = this._renderCallbacks || []).push(e),
          I(this, 2)
      },
      render: function() {},
    })
    var R = {
      h: s,
      createElement: s,
      cloneElement: c,
      Component: j,
      render: D,
      rerender: h,
      options: o,
    }
    ;(t.default = R),
      (t.h = s),
      (t.createElement = s),
      (t.cloneElement = c),
      (t.Component = j),
      (t.render = D),
      (t.rerender = h),
      (t.options = o)
  },
  function(e, t, n) {
    'use strict'
    var r = i(n(30)),
      o = i(n(32))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    null == window.Symbol && (window.Symbol = o.default),
      Array.prototype[o.default.iterator] ||
        Object.defineProperty(Array.prototype, o.default.iterator, {
          enumerable: !1,
          value: function() {
            var e = 0,
              t = this
            return {
              next: function() {
                return e < t.length ? { value: t[e++], done: !1 } : { done: !0 }
              },
            }
          },
        }),
      r.default.polyfill(),
      'function' != typeof Object.assign &&
        (Object.assign = function(e) {
          if (void 0 === e || null === e)
            throw new TypeError('Cannot convert undefined or null to object')
          for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n]
            if (void 0 !== r && null !== r)
              for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
          }
          return t
        }),
      Array.prototype.find ||
        Object.defineProperty(Array.prototype, 'find', {
          enumerable: !1,
          value: function(e) {
            if (null == this)
              throw new TypeError(
                'Array.prototype.find called on null or undefined'
              )
            if ('function' != typeof e)
              throw new TypeError('predicate must be a function')
            for (
              var t,
                n = Object(this),
                r = n.length >>> 0,
                o = arguments[1],
                i = 0;
              i < r;
              i++
            )
              if (((t = n[i]), e.call(o, t, i, n))) return t
          },
        }),
      Array.prototype.findIndex ||
        Object.defineProperty(Array.prototype, 'findIndex', {
          enumerable: !1,
          value: function(e) {
            if (null == this)
              throw new TypeError(
                'Array.prototype.find called on null or undefined'
              )
            var t = Object(this),
              n = t.length >>> 0
            if ('function' != typeof e)
              throw new TypeError('predicate must be a function')
            for (var r = arguments[1], o = 0; o < n; ) {
              var i = t[o]
              if (e.call(r, i, o, t)) return o
              o++
            }
            return -1
          },
        }),
      (Number.isNaN =
        Number.isNaN ||
        function(e) {
          return 'number' == typeof e && isNaN(e)
        }),
      Array.prototype.includes ||
        Object.defineProperty(Array.prototype, 'includes', {
          enumerable: !1,
          value: function(e, t) {
            if (null == this)
              throw new TypeError('"this" is null or not defined')
            var n = Object(this),
              r = n.length >>> 0
            if (0 === r) return !1
            var o,
              i,
              a = 0 | t,
              s = Math.max(a >= 0 ? a : r - Math.abs(a), 0)
            for (; s < r; ) {
              if (
                (o = n[s]) === (i = e) ||
                ('number' == typeof o &&
                  'number' == typeof i &&
                  isNaN(o) &&
                  isNaN(i))
              )
                return !0
              s++
            }
            return !1
          },
        })
  },
  function(e, t, n) {
    'use strict'
    ;(function(r, o) {
      var i,
        a,
        s,
        l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }
      /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
      ;(s = function() {
        function e(e) {
          return 'function' == typeof e
        }
        var t = Array.isArray
            ? Array.isArray
            : function(e) {
                return '[object Array]' === Object.prototype.toString.call(e)
              },
          n = 0,
          i = void 0,
          a = void 0,
          s = function(e, t) {
            ;(b[n] = e), (b[n + 1] = t), 2 === (n += 2) && (a ? a(m) : A())
          }
        var u = 'undefined' != typeof window ? window : void 0,
          c = u || {},
          d = c.MutationObserver || c.WebKitMutationObserver,
          f =
            'undefined' == typeof self &&
            void 0 !== r &&
            '[object process]' === {}.toString.call(r),
          p =
            'undefined' != typeof Uint8ClampedArray &&
            'undefined' != typeof importScripts &&
            'undefined' != typeof MessageChannel
        function h() {
          var e = setTimeout
          return function() {
            return e(m, 1)
          }
        }
        var b = new Array(1e3)
        function m() {
          for (var e = 0; e < n; e += 2) {
            ;(0, b[e])(b[e + 1]), (b[e] = void 0), (b[e + 1] = void 0)
          }
          n = 0
        }
        var y,
          v,
          g,
          _,
          A = void 0
        function w(e, t) {
          var n = this,
            r = new this.constructor(O)
          void 0 === r[k] && U(r)
          var o = n._state
          if (o) {
            var i = arguments[o - 1]
            s(function() {
              return B(o, r, i, n._result)
            })
          } else D(n, r, e, t)
          return r
        }
        function E(e) {
          if (
            e &&
            'object' === (void 0 === e ? 'undefined' : l(e)) &&
            e.constructor === this
          )
            return e
          var t = new this(O)
          return P(t, e), t
        }
        f
          ? (A = function() {
              return r.nextTick(m)
            })
          : d
            ? ((v = 0),
              (g = new d(m)),
              (_ = document.createTextNode('')),
              g.observe(_, { characterData: !0 }),
              (A = function() {
                _.data = v = ++v % 2
              }))
            : p
              ? (((y = new MessageChannel()).port1.onmessage = m),
                (A = function() {
                  return y.port2.postMessage(0)
                }))
              : (A =
                  void 0 === u
                    ? (function() {
                        try {
                          var e = Function('return this')().require('vertx')
                          return void 0 !== (i = e.runOnLoop || e.runOnContext)
                            ? function() {
                                i(m)
                              }
                            : h()
                        } catch (e) {
                          return h()
                        }
                      })()
                    : h())
        var k = Math.random()
          .toString(36)
          .substring(2)
        function O() {}
        var x = void 0,
          T = 1,
          S = 2,
          C = { error: null }
        function N(e) {
          try {
            return e.then
          } catch (e) {
            return (C.error = e), C
          }
        }
        function M(t, n, r) {
          n.constructor === t.constructor &&
          r === w &&
          n.constructor.resolve === E
            ? (function(e, t) {
                t._state === T
                  ? L(e, t._result)
                  : t._state === S
                    ? j(e, t._result)
                    : D(
                        t,
                        void 0,
                        function(t) {
                          return P(e, t)
                        },
                        function(t) {
                          return j(e, t)
                        }
                      )
              })(t, n)
            : r === C
              ? (j(t, C.error), (C.error = null))
              : void 0 === r
                ? L(t, n)
                : e(r)
                  ? (function(e, t, n) {
                      s(function(e) {
                        var r = !1,
                          o = (function(e, t, n, r) {
                            try {
                              e.call(t, n, r)
                            } catch (e) {
                              return e
                            }
                          })(
                            n,
                            t,
                            function(n) {
                              r || ((r = !0), t !== n ? P(e, n) : L(e, n))
                            },
                            function(t) {
                              r || ((r = !0), j(e, t))
                            },
                            e._label
                          )
                        !r && o && ((r = !0), j(e, o))
                      }, e)
                    })(t, n, r)
                  : L(t, n)
        }
        function P(e, t) {
          var n, r
          e === t
            ? j(e, new TypeError('You cannot resolve a promise with itself'))
            : ((r = void 0 === (n = t) ? 'undefined' : l(n)),
              null === n || ('object' !== r && 'function' !== r)
                ? L(e, t)
                : M(e, t, N(t)))
        }
        function I(e) {
          e._onerror && e._onerror(e._result), R(e)
        }
        function L(e, t) {
          e._state === x &&
            ((e._result = t),
            (e._state = T),
            0 !== e._subscribers.length && s(R, e))
        }
        function j(e, t) {
          e._state === x && ((e._state = S), (e._result = t), s(I, e))
        }
        function D(e, t, n, r) {
          var o = e._subscribers,
            i = o.length
          ;(e._onerror = null),
            (o[i] = t),
            (o[i + T] = n),
            (o[i + S] = r),
            0 === i && e._state && s(R, e)
        }
        function R(e) {
          var t = e._subscribers,
            n = e._state
          if (0 !== t.length) {
            for (
              var r = void 0, o = void 0, i = e._result, a = 0;
              a < t.length;
              a += 3
            )
              (r = t[a]), (o = t[a + n]), r ? B(n, r, o, i) : o(i)
            e._subscribers.length = 0
          }
        }
        function B(t, n, r, o) {
          var i = e(r),
            a = void 0,
            s = void 0,
            l = void 0,
            u = void 0
          if (i) {
            if (
              ((a = (function(e, t) {
                try {
                  return e(t)
                } catch (e) {
                  return (C.error = e), C
                }
              })(r, o)) === C
                ? ((u = !0), (s = a.error), (a.error = null))
                : (l = !0),
              n === a)
            )
              return void j(
                n,
                new TypeError(
                  'A promises callback cannot return that same promise.'
                )
              )
          } else (a = o), (l = !0)
          n._state !== x ||
            (i && l
              ? P(n, a)
              : u
                ? j(n, s)
                : t === T
                  ? L(n, a)
                  : t === S && j(n, a))
        }
        var W = 0
        function U(e) {
          ;(e[k] = W++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = [])
        }
        var F = (function() {
          function e(e, n) {
            ;(this._instanceConstructor = e),
              (this.promise = new e(O)),
              this.promise[k] || U(this.promise),
              t(n)
                ? ((this.length = n.length),
                  (this._remaining = n.length),
                  (this._result = new Array(this.length)),
                  0 === this.length
                    ? L(this.promise, this._result)
                    : ((this.length = this.length || 0),
                      this._enumerate(n),
                      0 === this._remaining && L(this.promise, this._result)))
                : j(
                    this.promise,
                    new Error('Array Methods must be provided an Array')
                  )
          }
          return (
            (e.prototype._enumerate = function(e) {
              for (var t = 0; this._state === x && t < e.length; t++)
                this._eachEntry(e[t], t)
            }),
            (e.prototype._eachEntry = function(e, t) {
              var n = this._instanceConstructor,
                r = n.resolve
              if (r === E) {
                var o = N(e)
                if (o === w && e._state !== x)
                  this._settledAt(e._state, t, e._result)
                else if ('function' != typeof o)
                  this._remaining--, (this._result[t] = e)
                else if (n === H) {
                  var i = new n(O)
                  M(i, e, o), this._willSettleAt(i, t)
                } else
                  this._willSettleAt(
                    new n(function(t) {
                      return t(e)
                    }),
                    t
                  )
              } else this._willSettleAt(r(e), t)
            }),
            (e.prototype._settledAt = function(e, t, n) {
              var r = this.promise
              r._state === x &&
                (this._remaining--, e === S ? j(r, n) : (this._result[t] = n)),
                0 === this._remaining && L(r, this._result)
            }),
            (e.prototype._willSettleAt = function(e, t) {
              var n = this
              D(
                e,
                void 0,
                function(e) {
                  return n._settledAt(T, t, e)
                },
                function(e) {
                  return n._settledAt(S, t, e)
                }
              )
            }),
            e
          )
        })()
        var H = (function() {
          function e(t) {
            ;(this[k] = W++),
              (this._result = this._state = void 0),
              (this._subscribers = []),
              O !== t &&
                ('function' != typeof t &&
                  (function() {
                    throw new TypeError(
                      'You must pass a resolver function as the first argument to the promise constructor'
                    )
                  })(),
                this instanceof e
                  ? (function(e, t) {
                      try {
                        t(
                          function(t) {
                            P(e, t)
                          },
                          function(t) {
                            j(e, t)
                          }
                        )
                      } catch (t) {
                        j(e, t)
                      }
                    })(this, t)
                  : (function() {
                      throw new TypeError(
                        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                      )
                    })())
          }
          return (
            (e.prototype.catch = function(e) {
              return this.then(null, e)
            }),
            (e.prototype.finally = function(e) {
              var t = this.constructor
              return this.then(
                function(n) {
                  return t.resolve(e()).then(function() {
                    return n
                  })
                },
                function(n) {
                  return t.resolve(e()).then(function() {
                    throw n
                  })
                }
              )
            }),
            e
          )
        })()
        return (
          (H.prototype.then = w),
          (H.all = function(e) {
            return new F(this, e).promise
          }),
          (H.race = function(e) {
            var n = this
            return t(e)
              ? new n(function(t, r) {
                  for (var o = e.length, i = 0; i < o; i++)
                    n.resolve(e[i]).then(t, r)
                })
              : new n(function(e, t) {
                  return t(new TypeError('You must pass an array to race.'))
                })
          }),
          (H.resolve = E),
          (H.reject = function(e) {
            var t = new this(O)
            return j(t, e), t
          }),
          (H._setScheduler = function(e) {
            a = e
          }),
          (H._setAsap = function(e) {
            s = e
          }),
          (H._asap = s),
          (H.polyfill = function() {
            var e = void 0
            if (void 0 !== o) e = o
            else if ('undefined' != typeof self) e = self
            else
              try {
                e = Function('return this')()
              } catch (e) {
                throw new Error(
                  'polyfill failed because global object is unavailable in this environment'
                )
              }
            var t = e.Promise
            if (t) {
              var n = null
              try {
                n = Object.prototype.toString.call(t.resolve())
              } catch (e) {}
              if ('[object Promise]' === n && !t.cast) return
            }
            e.Promise = H
          }),
          (H.Promise = H),
          H
        )
      }),
        'object' === l(t) && void 0 !== e
          ? (e.exports = s())
          : void 0 ===
              (a = 'function' == typeof (i = s) ? i.call(t, n, t, e) : i) ||
            (e.exports = a)
    }.call(t, n(10), n(31)))
  },
  function(e, t, n) {
    'use strict'
    var r,
      o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    r = (function() {
      return this
    })()
    try {
      r = r || Function('return this')() || (0, eval)('this')
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : o(window)) &&
        (r = window)
    }
    e.exports = r
  },
  function(e, t, n) {
    'use strict'
    e.exports = n(33)() ? Symbol : n(34)
  },
  function(e, t, n) {
    'use strict'
    var r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      o = { object: !0, symbol: !0 }
    e.exports = function() {
      var e
      if ('function' != typeof Symbol) return !1
      e = Symbol('test symbol')
      try {
        String(e)
      } catch (e) {
        return !1
      }
      return (
        !!o[r(Symbol.iterator)] &&
        (!!o[r(Symbol.toPrimitive)] && !!o[r(Symbol.toStringTag)])
      )
    }
  },
  function(e, t, n) {
    'use strict'
    var r,
      o,
      i,
      a,
      s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      l = n(35),
      u = n(49),
      c = Object.create,
      d = Object.defineProperties,
      f = Object.defineProperty,
      p = Object.prototype,
      h = c(null)
    if ('function' == typeof Symbol) {
      r = Symbol
      try {
        String(r()), (a = !0)
      } catch (e) {}
    }
    var b,
      m = ((b = c(null)),
      function(e) {
        for (var t, n, r = 0; b[e + (r || '')]; ) ++r
        return (
          (b[(e += r || '')] = !0),
          f(
            p,
            (t = '@@' + e),
            l.gs(null, function(e) {
              n || ((n = !0), f(this, t, l(e)), (n = !1))
            })
          ),
          t
        )
      })
    ;(i = function(e) {
      if (this instanceof i) throw new TypeError('Symbol is not a constructor')
      return o(e)
    }),
      (e.exports = o = function e(t) {
        var n
        if (this instanceof e)
          throw new TypeError('Symbol is not a constructor')
        return a
          ? r(t)
          : ((n = c(i.prototype)),
            (t = void 0 === t ? '' : String(t)),
            d(n, { __description__: l('', t), __name__: l('', m(t)) }))
      }),
      d(o, {
        for: l(function(e) {
          return h[e] ? h[e] : (h[e] = o(String(e)))
        }),
        keyFor: l(function(e) {
          var t
          for (t in (u(e), h)) if (h[t] === e) return t
        }),
        hasInstance: l('', (r && r.hasInstance) || o('hasInstance')),
        isConcatSpreadable: l(
          '',
          (r && r.isConcatSpreadable) || o('isConcatSpreadable')
        ),
        iterator: l('', (r && r.iterator) || o('iterator')),
        match: l('', (r && r.match) || o('match')),
        replace: l('', (r && r.replace) || o('replace')),
        search: l('', (r && r.search) || o('search')),
        species: l('', (r && r.species) || o('species')),
        split: l('', (r && r.split) || o('split')),
        toPrimitive: l('', (r && r.toPrimitive) || o('toPrimitive')),
        toStringTag: l('', (r && r.toStringTag) || o('toStringTag')),
        unscopables: l('', (r && r.unscopables) || o('unscopables')),
      }),
      d(i.prototype, {
        constructor: l(o),
        toString: l('', function() {
          return this.__name__
        }),
      }),
      d(o.prototype, {
        toString: l(function() {
          return 'Symbol (' + u(this).__description__ + ')'
        }),
        valueOf: l(function() {
          return u(this)
        }),
      }),
      f(
        o.prototype,
        o.toPrimitive,
        l('', function() {
          var e = u(this)
          return 'symbol' === (void 0 === e ? 'undefined' : s(e))
            ? e
            : e.toString()
        })
      ),
      f(o.prototype, o.toStringTag, l('c', 'Symbol')),
      f(i.prototype, o.toStringTag, l('c', o.prototype[o.toStringTag])),
      f(i.prototype, o.toPrimitive, l('c', o.prototype[o.toPrimitive]))
  },
  function(e, t, n) {
    'use strict'
    var r = n(36),
      o = n(44),
      i = n(45),
      a = n(46)
    ;(e.exports = function(e, t) {
      var n, i, s, l, u
      return (
        arguments.length < 2 || 'string' != typeof e
          ? ((l = t), (t = e), (e = null))
          : (l = arguments[2]),
        null == e
          ? ((n = s = !0), (i = !1))
          : ((n = a.call(e, 'c')), (i = a.call(e, 'e')), (s = a.call(e, 'w'))),
        (u = { value: t, configurable: n, enumerable: i, writable: s }),
        l ? r(o(l), u) : u
      )
    }).gs = function(e, t, n) {
      var s, l, u, c
      return (
        'string' != typeof e
          ? ((u = n), (n = t), (t = e), (e = null))
          : (u = arguments[3]),
        null == t
          ? (t = void 0)
          : i(t)
            ? null == n
              ? (n = void 0)
              : i(n) || ((u = n), (n = void 0))
            : ((u = t), (t = n = void 0)),
        null == e
          ? ((s = !0), (l = !1))
          : ((s = a.call(e, 'c')), (l = a.call(e, 'e'))),
        (c = { get: t, set: n, configurable: s, enumerable: l }),
        u ? r(o(u), c) : c
      )
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = n(37)() ? Object.assign : n(38)
  },
  function(e, t, n) {
    'use strict'
    e.exports = function() {
      var e,
        t = Object.assign
      return (
        'function' == typeof t &&
        (t((e = { foo: 'raz' }), { bar: 'dwa' }, { trzy: 'trzy' }),
        e.foo + e.bar + e.trzy === 'razdwatrzy')
      )
    }
  },
  function(e, t, n) {
    'use strict'
    var r = n(39),
      o = n(43),
      i = Math.max
    e.exports = function(e, t) {
      var n,
        a,
        s,
        l = i(arguments.length, 2)
      for (
        e = Object(o(e)),
          s = function(r) {
            try {
              e[r] = t[r]
            } catch (e) {
              n || (n = e)
            }
          },
          a = 1;
        a < l;
        ++a
      )
        (t = arguments[a]), r(t).forEach(s)
      if (void 0 !== n) throw n
      return e
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = n(40)() ? Object.keys : n(41)
  },
  function(e, t, n) {
    'use strict'
    e.exports = function() {
      try {
        return Object.keys('primitive'), !0
      } catch (e) {
        return !1
      }
    }
  },
  function(e, t, n) {
    'use strict'
    var r = n(7),
      o = Object.keys
    e.exports = function(e) {
      return o(r(e) ? Object(e) : e)
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = function() {}
  },
  function(e, t, n) {
    'use strict'
    var r = n(7)
    e.exports = function(e) {
      if (!r(e)) throw new TypeError('Cannot use null or undefined')
      return e
    }
  },
  function(e, t, n) {
    'use strict'
    var r = n(7),
      o = Array.prototype.forEach,
      i = Object.create
    e.exports = function(e) {
      var t = i(null)
      return (
        o.call(arguments, function(e) {
          r(e) &&
            (function(e, t) {
              var n
              for (n in e) t[n] = e[n]
            })(Object(e), t)
        }),
        t
      )
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      return 'function' == typeof e
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = n(47)() ? String.prototype.contains : n(48)
  },
  function(e, t, n) {
    'use strict'
    var r = 'razdwatrzy'
    e.exports = function() {
      return (
        'function' == typeof r.contains &&
        (!0 === r.contains('dwa') && !1 === r.contains('foo'))
      )
    }
  },
  function(e, t, n) {
    'use strict'
    var r = String.prototype.indexOf
    e.exports = function(e) {
      return r.call(this, e, arguments[1]) > -1
    }
  },
  function(e, t, n) {
    'use strict'
    var r = n(50)
    e.exports = function(e) {
      if (!r(e)) throw new TypeError(e + ' is not a symbol')
      return e
    }
  },
  function(e, t, n) {
    'use strict'
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }
    e.exports = function(e) {
      return (
        !!e &&
        ('symbol' === (void 0 === e ? 'undefined' : r(e)) ||
          (!!e.constructor &&
            ('Symbol' === e.constructor.name &&
              'Symbol' === e[e.constructor.toStringTag])))
      )
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = i(n(8)),
      o = i(n(52))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    t.default = {
      pollingInterval: 3e4,
      subscribe: function(e, t) {
        var n = void 0
        ;(n = e.match(/^LIVE:EVENT:([0-9]+)$/))
          ? function(e, t) {
              var n = 'LIVE:EVENT:' + e
              o.default.periodically(
                n,
                function() {
                  return r.default.getLiveEvent(e).catch(function(r) {
                    throw (t('LIVE:EVENT:' + e + ':REMOVED'),
                    o.default.stop(n),
                    r)
                  })
                },
                t.bind(null, n),
                { interval: this.pollingInterval, checkEquality: !0 }
              )
            }.call(this, n[1], t)
          : (n = e.match(/^LIVE:EVENTDATA:([0-9]+)$/))
            ? function(e, t) {
                var n = 'LIVE:EVENTDATA:' + e
                o.default.periodically(
                  n,
                  function() {
                    return r.default.getLiveEventData(e).catch(function(r) {
                      throw (t('LIVE:EVENTDATA:' + e + ':REMOVED'),
                      o.default.stop(n),
                      r)
                    })
                  },
                  t.bind(null, n),
                  { interval: this.pollingInterval, checkEquality: !0 }
                )
              }.call(this, n[1], t)
            : 'LIVE:EVENTS' === e
              ? function(e) {
                  o.default.periodically(
                    'LIVE:EVENTS',
                    function() {
                      return r.default.getLiveEvents()
                    },
                    e.bind(null, 'LIVE:EVENTS'),
                    { interval: this.pollingInterval, checkEquality: !1 }
                  )
                }.call(this, t)
              : (n = e.match(/^LIVE:EVENT:([0-9]+):ADDED$/)) &&
                function(e, t) {
                  var n = 'LIVE:EVENT:' + e + ':ADDED'
                  o.default.periodically(
                    n,
                    function() {
                      return r.default.getLiveEvent(e).then(function(e) {
                        return o.default.stop(n), e
                      })
                    },
                    t.bind(null, n),
                    { interval: this.pollingInterval, checkEquality: !1 }
                  )
                }.call(this, n[1], t)
      },
      unsubscribe: function(e) {
        ;/^LIVE:EVENT:[0-9]+$/.test(e)
          ? o.default.stop(e)
          : /^LIVE:EVENTDATA:[0-9]+$/.test(e)
            ? o.default.stop(e)
            : 'LIVE:EVENTS' === e
              ? o.default.stop(e)
              : /^LIVE:EVENT:([0-9]+):ADDED$/.test(e) && o.default.stop(e)
      },
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r,
      o = n(6),
      i = (r = o) && r.__esModule ? r : { default: r }
    var a = {
      tasks: {},
      periodically: function(e, t, n, r) {
        var o = this,
          a = r.interval,
          s = r.checkEquality
        this.tasks.hasOwnProperty(e) ||
          (this.tasks[e] = {
            interval: setInterval(function() {
              var r = o.tasks[e]
              t()
                .then(function(e) {
                  ;(s && i.default.equals(r.lastResult, e)) || n(e),
                    s && (r.lastResult = i.default.clone(e))
                })
                .catch(function(e) {})
            }, a),
            lastResult: null,
          })
      },
      stop: function(e) {
        this.tasks.hasOwnProperty(e) &&
          (clearInterval(this.tasks[e].interval), delete this.tasks[e])
      },
    }
    t.default = a
  },
  function(e, t, n) {
    'use strict'
    e.exports = { widgetCssVersion: '1.0.0.58' }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        requestSetup: function() {},
        request: function() {},
        set: function() {},
        remove: function() {},
        createUrl: function() {},
        navigateClient: function() {},
        requestOddsAsAmerican: function(e, t) {
          t(e)
        },
        requestOddsAsFractional: function(e, t) {
          t(e)
        },
        BETSLIP_OUTCOMES_ARGS: {
          UPDATE_REPLACE: 'replace',
          UPDATE_APPEND: 'append',
          TYPE_SINGLE: 'single',
          TYPE_COMBINATION: 'combination',
          TYPE_SYSTEM: 'system',
          TYPE_PATENT: 'patent',
          TYPE_TRIXIE: 'trixie',
          TYPE_YANKEE: 'yankee',
          TYPE_CANADIAN: 'canadian',
          TYPE_HEINZ: 'heinz',
          TYPE_SUPERHEINZ: 'superheinz',
        },
        PLACE_BET_STATE_VALUE: {
          PLACING: 'placing',
          SUCCEEDED: 'succeeded',
          FAILED: 'failed',
        },
        BET_TYPE: {
          SINGLE: 'RCT_SINGLE',
          COMBINATION: 'RCT_COMBINATION',
          SYSTEM: 'RCT_SYSTEM',
        },
        BETSLIP_STAKE_UPDATED_TYPES: {
          STAKE_UPDATE_TYPE_SINGLE: 'Single',
          STAKE_UPDATE_TYPE_COMBINATION: 'Combination',
          STAKE_UPDATE_TYPE_SYSTEM: 'System',
        },
        EVENT_INFO_TYPES: {
          BASIC: 'BASIC',
          BET_OFFERS: 'BET_OFFERS',
          SCORE: 'SCORE',
        },
        EVENT_INFO_CONTEXT: { LIVE: 'LIVE', PRE_MATCH: 'PRE-MATCH' },
        FETCH_COUPON_STATUS: {
          PENDING: 'SCF_PENDING',
          SETTLED: 'SCF_SETTLED',
          WON: 'SCF_WON',
          LOST: 'SCF_LOST',
          VOID: 'SCF_VOID',
          CASH_IN: 'SCF_CASHIN',
          ALL: '',
        },
        IFRAME_READY: 'iframeReady',
        REMOVE: 'remove',
        NAVIGATE: 'navigate',
        BET_HISTORY: 'BetHistory',
        BETSLIP_OUTCOMES_REMOVE: 'BetslipOutcomesRemove',
        BETSLIP_OUTCOMES: 'BetslipOutcomes',
        BETSLIP_MAXIMIZED: 'BetslipMaximize',
        BETSLIP_MAXIMIZED_CHANGE: 'BetslipMaximizedChange',
        BETSLIP_STAKE_UPDATED: 'BetslipStakeUpdated',
        BETSLIP_UPDATE_STAKE: 'BetslipUpdateStake',
        EVENT_INFO: 'EventInfo',
        EVENT_INFO_UNSUBSCRIBE: 'EventInfoUnSubscribe',
        PLACE_BET: 'BetslipPlaceBet',
        CLIENT_ODDS_FORMAT: 'ClientOddsFormat',
        PLACE_BET_STATE: 'PlaceBetState',
        PAGE_INFO: 'PageInfo',
        USER_LOGGED_IN: 'UserLoggedIn',
        CLIENT_CONFIG: 'ClientConfig',
        VERSIONS: 'Versions',
        ODDS_FRACTIONAL: 'OddsAsFractional',
        ODDS_AMERICAN: 'OddsAsAmerican',
        LIBS: 'Libs',
        WIDGET_ARGS: 'Args',
        WIDGET_HEIGHT: 'Height',
        WIDGET_ENABLE_TRANSITION: 'EnableTransition',
        WIDGET_DISABLE_TRANSITION: 'DisableTransition',
        WIDGET_SETUP: 'Setup',
        LOGIN: 'Login',
        LOGOUT: 'Logout',
        CLIENT_HIDE: 'ClientHide',
        CLIENT_SHOW: 'ClientShow',
        TRACK_EXTERNAL_INTERACTION: 'TrackExternalInteraction',
        BETSLIP_HIDE: 'BetslipHide',
        BETSLIP_SHOW: 'BetslipShow',
      })
  },
  function(e, t, n) {
    var r = n(56)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      "._2hcJylitpquDQvD0Lb6DBS {\n  position: relative; }\n  ._2hcJylitpquDQvD0Lb6DBS * {\n    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: 100%;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    -webkit-user-select: none; }\n  ._2hcJylitpquDQvD0Lb6DBS *,\n  ._2hcJylitpquDQvD0Lb6DBS *::after,\n  ._2hcJylitpquDQvD0Lb6DBS *::before {\n    box-sizing: border-box; }\n  ._2hcJylitpquDQvD0Lb6DBS a {\n    text-decoration: none; }\n  ._2hcJylitpquDQvD0Lb6DBS strong {\n    font-weight: bold; }\n  ._1JvrYji0vjGa12TouTBbSW {\n    box-sizing: border-box;\n    height: 0;\n    overflow-y: hidden; }\n  ._2hcJylitpquDQvD0Lb6DBS ._2YI36ilz5u-6wDsRQUJ57o {\n    -webkit-transform: none !important;\n            transform: none !important; }\n  ._2hcJylitpquDQvD0Lb6DBS input:matches([type='button'], [type='submit'], [type='reset']),\n  ._2hcJylitpquDQvD0Lb6DBS input[type='file']::-webkit-file-upload-button,\n  ._2hcJylitpquDQvD0Lb6DBS button {\n    margin: initial; }\n\nhtml._1VyVCMbiJm5VAKxJApyMv3 {\n  min-width: 100%;\n  width: 1px;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  html._1VyVCMbiJm5VAKxJApyMv3 body {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n",
      '',
    ]),
      (t.locals = {
        rootElement: '_2hcJylitpquDQvD0Lb6DBS',
        rootElementEmbedded: '_1JvrYji0vjGa12TouTBbSW',
        'KambiWidget-outcome__odds-wrapper': '_2YI36ilz5u-6wDsRQUJ57o',
        notEmbedded: '_1VyVCMbiJm5VAKxJApyMv3',
      })
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      var t = 'undefined' != typeof window && window.location
      if (!t) throw new Error('fixUrls requires window.location')
      if (!e || 'string' != typeof e) return e
      var n = t.protocol + '//' + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, '/')
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var o,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t
              })
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? e
            : ((o =
                0 === i.indexOf('//')
                  ? i
                  : 0 === i.indexOf('/')
                    ? n + i
                    : r + i.replace(/^\.\//, '')),
              'url(' + JSON.stringify(o) + ')')
        }
      )
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      i = n(0),
      a = y(i),
      s = (y(n(1)), n(9)),
      l = y(n(20)),
      u = (y(n(16)), y(n(95))),
      c = n(4),
      d = y(n(97)),
      f = y(n(100)),
      p = y(n(104)),
      h = y(n(107)),
      b = y(n(110)),
      m = y(n(113))
    function y(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var v = 350,
      g = 150,
      _ =
        'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-desktop.jpg',
      A = c.translationModule.getTranslation.bind(c.translationModule),
      w = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.state = {
              events: e.events,
              selected: 0,
              mobile: (0, l.default)(),
              widgetHeight: (0, l.default)() ? g : v,
              usingDefaultBackground: e.backgroundUrl === _,
            }),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, i.Component),
          o(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this
                ;(0, l.default)() &&
                  setTimeout(function() {
                    return e.setState({ selected: 1 })
                  }, 2e3),
                  c.widgetModule.setWidgetHeight(this.state.widgetHeight)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                c.widgetModule.setWidgetHeight(this.state.widgetHeight)
              },
            },
            {
              key: 'generateCountryFlagUrl',
              value: function(e) {
                var t = e.toLowerCase().replace(/\s/g, '_')
                return '' + this.props.flagBaseUrl + t + '.svg'
              },
            },
            {
              key: 'navigateToEvent',
              value: function(e) {
                e.event.liveBetOffers
                  ? c.widgetModule.navigateToLiveEvent(e.event.id)
                  : c.widgetModule.navigateToEvent(e.event.id)
              },
            },
            {
              key: 'generateWidgetItemTitle',
              value: function(e) {
                return e.group + ' - ' + e.name.split('(')[0].trim()
              },
            },
            {
              key: 'sortOutcomesByLowestOdds',
              value: function(e) {
                return e.sort(function(e, t) {
                  return e.odds < t.odds
                    ? -1
                    : e.odds === t.odds
                      ? e.label < t.label
                        ? -1
                        : 1
                      : e.odds > t.odds
                        ? 1
                        : void 0
                })
              },
            },
            {
              key: 'renderTopEvent',
              value: function(e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 3
                return a.default.createElement(
                  b.default,
                  {
                    title: this.generateWidgetItemTitle(e.event),
                    handleClick: function() {
                      return t.navigateToEvent(e)
                    },
                    showNavLink: e.betOffers[0].outcomes.length > n,
                    navText: A(
                      'showAllParticipants',
                      e.betOffers[0].outcomes.length
                    ),
                  },
                  this.sortOutcomesByLowestOdds(e.betOffers[0].outcomes, n)
                    .slice(0, n)
                    .map(function(n) {
                      var r = null,
                        o = n.label.split('(')[0],
                        i = n.englishLabel.split('(')
                      return (
                        i && i.length > 1 && 2000075007 === e.event.groupId
                          ? (r = t.generateCountryFlagUrl(
                              i[1].slice(0, i[1].length - 1)
                            ))
                          : 2000075007 === e.event.groupId &&
                            (r = t.generateCountryFlagUrl(i[0])),
                        a.default.createElement(m.default, {
                          key: n.id,
                          participant: o,
                          flagUrl: r,
                          fallbackFlagUrl: '../../assets/world_cup_2018.svg',
                          outcome: n,
                          event: e.event,
                        })
                      )
                    })
                )
              },
            },
            {
              key: 'renderMatchEvents',
              value: function() {
                var e = this
                return this.state.events
                  .filter(function(e) {
                    return e.betOffers.length > 0
                  })
                  .map(function(t) {
                    var n = t.event.englishName.split(' - '),
                      r = 2000075007 === t.event.groupId
                    return a.default.createElement(d.default, {
                      key: t.event.id,
                      event: t.event,
                      liveData: t.liveData,
                      outcomes: t.betOffers[0].outcomes,
                      homeFlag: r ? e.generateCountryFlagUrl(n[0]) : null,
                      awayFlag: r ? e.generateCountryFlagUrl(n[1]) : null,
                    })
                  })
              },
            },
            {
              key: 'renderScrolledListItems',
              value: function() {
                var e = [this.renderMatchEvents()]
                return (
                  (0, l.default)() &&
                    e.unshift(
                      a.default.createElement(h.default, {
                        logoUrl: this.props.iconUrl,
                        key: 'tournamentLogo',
                      })
                    ),
                  e.map(function(e) {
                    return e
                  })
                )
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.props.competitions,
                  t = e.leftWidget,
                  n = e.rightWidget
                return a.default.createElement(
                  'div',
                  { className: u.default.widget },
                  a.default.createElement(s.BlendedBackground, {
                    backgroundUrl: this.props.backgroundUrl,
                    blendWithOperatorColor: this.state.usingDefaultBackground,
                  }),
                  !(0, l.default)() &&
                    a.default.createElement(
                      'div',
                      { className: u.default.topArea },
                      this.renderTopEvent(t),
                      a.default.createElement(h.default, {
                        logoUrl: this.props.iconUrl,
                      }),
                      this.renderTopEvent(n)
                    ),
                  a.default.createElement(
                    s.ScrolledList,
                    {
                      renderPrevButton: function(e) {
                        return a.default.createElement(
                          f.default,
                          r({ type: 'left' }, e)
                        )
                      },
                      renderNextButton: function(e) {
                        return a.default.createElement(
                          f.default,
                          r({ type: 'right' }, e)
                        )
                      },
                      renderItemContainer: function(e) {
                        return a.default.createElement(p.default, e)
                      },
                      selected: this.state.selected,
                      scrollToItemMode:
                        s.ScrolledList.SCROLL_TO_ITEM_MODE.TO_LEFT,
                      showControls: !(0, l.default)(),
                    },
                    this.renderScrolledListItems()
                  )
                )
              },
            },
          ]),
          t
        )
      })()
    t.default = w
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = l(o),
      a = (l(n(1)), n(4)),
      s = l(n(17))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = function(e) {
        return {
          selected: -1 !== a.widgetModule.betslipIds.indexOf(e.id),
          currentOutcomeInfo: c(e),
        }
      },
      c = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return {
          odds: e.odds,
          oddsAmerican: e.oddsAmerican,
          oddsFractional: e.oddsFractional,
          label: e.label,
          suspended: t,
        }
      },
      d = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.toggleOutcome = n.toggleOutcome.bind(n)),
            (n.state = u(n.props.outcome)),
            (n.oddsFormatChangedHandler = function() {
              return n.forceUpdate()
            }),
            (n.betoffersUpdatedHandler = n.betoffersUpdatedHandler.bind(n)),
            (n.betslipUpdatedHandler = n.betslipUpdatedHandler.bind(n)),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, o.Component),
          r(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.subscribeToEvents(this.props.event, this.props.outcome)
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function(e) {
                this.unsubscribeFromEvents(this.props.outcome),
                  this.subscribeToEvents(e.event, e.outcome),
                  this.setState(u(e.outcome))
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.unsubscribeFromEvents(this.props.outcome)
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function(e, t) {
                var n = this
                return (
                  this.state.selected !== t.selected ||
                  !Object.keys(this.state.currentOutcomeInfo).reduce(function(
                    e,
                    r
                  ) {
                    return (
                      !0 === e ||
                      t.currentOutcomeInfo[r] === n.state.currentOutcomeInfo[r]
                    )
                  },
                  !0)
                )
              },
            },
            {
              key: 'componentDidUpdate',
              value: function(e, t) {
                t.selected !== this.state.selected &&
                  null != this.props.onSelection &&
                  this.props.onSelection(this.state.selected)
              },
            },
            {
              key: 'betslipUpdatedHandler',
              value: function(e) {
                for (var t = !1, n = 0; n < e.outcomes.length; n++) {
                  e.outcomes[n].id === this.props.outcome.id && (t = !0)
                }
                this.setState({ selected: t })
              },
            },
            {
              key: 'betoffersUpdatedHandler',
              value: function(e) {
                var t = this.props.outcome.betOfferId,
                  n = null
                if (null != e.betoffers) {
                  for (var r = 0; r < e.betoffers.length; r++) {
                    var o = e.betoffers[r]
                    if (o.id === t) {
                      n = o
                      break
                    }
                  }
                  if (null != n) {
                    for (var i = null, a = 0; a < n.outcomes.length; a++) {
                      var s = n.outcomes[a]
                      if (s.id === this.props.outcome.id) {
                        i = s
                        break
                      }
                    }
                    if (null != i) {
                      var l = this.state.currentOutcomeInfo,
                        u = c(i, n.suspended),
                        d = !1
                      Object.keys(l).forEach(function(e) {
                        l[e] !== u[e] && (d = !0)
                      }),
                        d && this.setState({ currentOutcomeInfo: u })
                    } else this.setState({ currentOutcomeInfo: null })
                  }
                }
              },
            },
            {
              key: 'subscribeToEvents',
              value: function(e, t) {
                a.updatesModule.subscribe.betslipOutcomes(
                  this.betslipUpdatedHandler
                ),
                  a.updatesModule.subscribe.oddsFormat(
                    this.oddsFormatChangedHandler
                  ),
                  !0 === this.props.updateOdds &&
                    (e.openForLiveBetting
                      ? a.updatesModule.subscribe.allLiveBetoffers(
                          e.id,
                          this.betoffersUpdatedHandler
                        )
                      : a.updatesModule.subscribe.allPreMatchBetoffers(
                          e.id,
                          this.betoffersUpdatedHandler
                        ))
              },
            },
            {
              key: 'unsubscribeFromEvents',
              value: function(e) {
                a.updatesModule.unsubscribe(this.oddsFormatChangedHandler),
                  a.updatesModule.unsubscribe(this.betslipUpdatedHandler),
                  !0 === this.props.updateOdds &&
                    a.updatesModule.unsubscribe(this.betoffersUpdatedHandler)
              },
            },
            {
              key: 'toggleOutcome',
              value: function() {
                this.state.selected
                  ? a.widgetModule.removeOutcomeFromBetslip(
                      this.props.outcome.id
                    )
                  : a.widgetModule.addOutcomeToBetslip(
                      this.props.outcome.id,
                      this.props.betslipDefaultStake,
                      this.props.betslipUpdateMode,
                      this.props.betslipTrackingName
                    )
              },
            },
            {
              key: 'render',
              value: function() {
                return null == this.state.currentOutcomeInfo ||
                  this.state.currentOutcomeInfo.odds <= 1e3
                  ? i.default.createElement('div', {
                      style: { display: 'none' },
                    })
                  : i.default.createElement(s.default, {
                      label: this.label,
                      odds: this.oddsFormatted,
                      suspended: this.state.currentOutcomeInfo.suspended,
                      selected: this.state.selected,
                      onClick: this.toggleOutcome,
                      outlineStyle: this.props.outlineStyle,
                    })
              },
            },
            {
              key: 'oddsFormatted',
              get: function() {
                switch (a.coreLibrary.oddsFormat) {
                  case 'fractional':
                    return this.state.currentOutcomeInfo.oddsFractional
                  case 'american':
                    var e = this.state.currentOutcomeInfo.oddsAmerican
                    return parseFloat(e, 10) >= 0 && (e = '+' + e), e
                  default:
                    return a.utilModule.getOddsDecimalValue(
                      this.state.currentOutcomeInfo.odds / 1e3
                    )
                }
              },
            },
            {
              key: 'label',
              get: function() {
                return 'string' == typeof this.props.label
                  ? this.props.label
                  : !1 === this.props.label
                    ? null
                    : this.props.event
                      ? a.utilModule.getOutcomeLabel(
                          this.props.outcome,
                          this.props.event
                        )
                      : this.state.currentOutcomeInfo.label
              },
            },
          ]),
          t
        )
      })()
    ;(d.defaultProps = {
      label: !0,
      outlineStyle: !1,
      updateOdds: !1,
      betslipUpdateMode: null,
      betslipDefaultStake: null,
      betslipTrackingName: null,
      onSelection: null,
    }),
      (t.default = d)
  },
  function(e, t, n) {
    var r = n(61)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._2GxrYIfL4ocwDMDXG5B9cK {\n  -webkit-justify-content: center;\n          justify-content: center; }\n\n._3VhzVuKZldCtRv5J2EPsSY {\n  cursor: pointer;\n  -webkit-flex: 1;\n          flex: 1; }\n\n._36gaLfm0Sxe4U5UBHL5LTg {\n  background: transparent;\n  border: 1.2px solid rgba(255, 255, 255, 0.8);\n  box-sizing: border-box;\n  padding: -1.2px; }\n  ._36gaLfm0Sxe4U5UBHL5LTg:hover {\n    background: rgba(255, 255, 255, 0.1);\n    border: 1.2px solid #fff;\n    padding: -1.2px; }\n\n._3M1vm3-9jtF-ZlIhbIwbXx {\n  border: 1.2px solid transparent; }\n\n.cGrk0ZoW6r5-VurKZ4tt_ {\n  color: #fff; }\n\n._3OE9fGMCbjRRmtJ-sFtQCZ {\n  color: #fff;\n  opacity: .85; }\n',
      '',
    ]),
      (t.locals = {
        label: '_2GxrYIfL4ocwDMDXG5B9cK',
        general: '_3VhzVuKZldCtRv5J2EPsSY',
        outline: '_36gaLfm0Sxe4U5UBHL5LTg',
        'outline--selected': '_3M1vm3-9jtF-ZlIhbIwbXx',
        outline__odds: 'cGrk0ZoW6r5-VurKZ4tt_',
        'outline__label-wrapper': '_3OE9fGMCbjRRmtJ-sFtQCZ',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = s(o),
      a = (s(n(1)), s(n(18)))
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        return (
          (n.state = { selected: n.props.selected }),
          (n.switchTab = n.switchTab.bind(n)),
          n
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'switchTab',
            value: function(e) {
              var t = this
              this.setState({ selected: e }),
                setTimeout(function() {
                  return t.props.onTabChange && t.props.onTabChange(e)
                }, 0)
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = o.Children.toArray(this.props.children)
              return i.default.createElement(
                'div',
                null,
                this.props.renderTabList({
                  selected: this.state.selected,
                  onItemClick: this.switchTab,
                  children: t.map(function(t, n) {
                    return e.props.renderTab(n)
                  }),
                }),
                i.default.createElement('div', null, t[this.state.selected])
              )
            },
          },
        ]),
        t
      )
    })()
    ;(l.defaultProps = {
      renderTab: function(e) {
        return i.default.createElement(
          'div',
          { key: e, style: { padding: 16 } },
          i.default.createElement('strong', null, e)
        )
      },
      renderTabList: function(e) {
        return i.default.createElement(a.default, e, e.children)
      },
      selected: 0,
    }),
      (t.default = l)
  },
  function(e, t, n) {
    var r = n(64)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._3ckHxuwM96lfZZnJgbsgH0 {\n  position: relative;\n  padding: 0 16px; }\n  ._3ckHxuwM96lfZZnJgbsgH0._3_P7MBZxlZAZHbQ-F6_W9N {\n    padding: 0; }\n\n._3tKoj0RObqZkwOpujMEGIN {\n  overflow-x: hidden; }\n  ._3YNAwWC3WBAEwTiUYFXNA1 ._3tKoj0RObqZkwOpujMEGIN {\n    -webkit-overflow-scrolling: touch;\n    overflow-x: scroll; }\n\n._3Ja5nsZNXVRSBY5FSetfAi {\n  display: -webkit-flex;\n  display: flex;\n  margin: 0;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s; }\n  ._3Ja5nsZNXVRSBY5FSetfAi > * {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto; }\n',
      '',
    ]),
      (t.locals = {
        container: '_3ckHxuwM96lfZZnJgbsgH0',
        'no-controls': '_3_P7MBZxlZAZHbQ-F6_W9N',
        eyeshot: '_3tKoj0RObqZkwOpujMEGIN',
        touch: '_3YNAwWC3WBAEwTiUYFXNA1',
        bar: '_3Ja5nsZNXVRSBY5FSetfAi',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = i(n(0)),
      o = (i(n(1)), i(n(66)))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var a = function(e) {
      var t = e.type,
        n = e.disabled,
        i = e.onClick,
        a = e.backgroundColor
      a ||
        (a =
          'function' != typeof window.getComputedStyle
            ? '#fff'
            : window
                .getComputedStyle(document.body)
                .getPropertyValue('background-color'))
      var s = {
        background:
          'linear-gradient(' +
          ('left' === t ? 90 : 270) +
          'deg, ' +
          a +
          ' 50%, rgba(255, 255, 255, 0))',
      }
      return r.default.createElement(
        'button',
        { className: o.default[t], style: s, onClick: i, disabled: n },
        r.default.createElement(
          'svg',
          {
            className: o.default.icon,
            width: '10px',
            height: '17px',
            viewBox: '0 860 420 500',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          r.default.createElement('path', {
            id: 'arrowLeft',
            transform: 'scale(1, -1) translate(0, -1500)',
            d:
              'M358.286 640q0-7.429-5.714-13.143l-224.571-224.571 224.571-224.571q5.714-5.714 5.714-13.143t-5.714-13.143l-28.571-28.571q-5.714-5.714-13.143-5.714t-13.143 5.714l-266.286 266.286q-5.714 5.714-5.714 13.143t5.714 13.143l266.286 266.286q5.714 5.714 13.143 5.714t13.143-5.714l28.571-28.571q5.714-5.714 5.714-13.143z',
          })
        )
      )
    }
    ;(a.defaultProps = { disabled: !1, backgroundColor: null }), (t.default = a)
  },
  function(e, t, n) {
    var r = n(67)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '.tQoAD6bkpCnN9_janZ8sD,\n._3dhh-SHcxz_6NJCv-JgQvH {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 35px;\n  border: none;\n  background: none;\n  font-size: 15px;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center; }\n  .tQoAD6bkpCnN9_janZ8sD[disabled],\n  ._3dhh-SHcxz_6NJCv-JgQvH[disabled] {\n    display: none; }\n  .tQoAD6bkpCnN9_janZ8sD ._1kpoEP19rWgjycT60XuWv_,\n  ._3dhh-SHcxz_6NJCv-JgQvH ._1kpoEP19rWgjycT60XuWv_ {\n    fill: #000;\n    opacity: .3;\n    transition: opacity .3s; }\n  .tQoAD6bkpCnN9_janZ8sD:hover ._1kpoEP19rWgjycT60XuWv_,\n  ._3dhh-SHcxz_6NJCv-JgQvH:hover ._1kpoEP19rWgjycT60XuWv_ {\n    opacity: 1; }\n\n.tQoAD6bkpCnN9_janZ8sD {\n  left: 16px; }\n\n._3dhh-SHcxz_6NJCv-JgQvH {\n  right: 16px; }\n  ._3dhh-SHcxz_6NJCv-JgQvH ._1kpoEP19rWgjycT60XuWv_ {\n    -webkit-transform: scale(-1, 1);\n            transform: scale(-1, 1);\n    margin-left: 25px; }\n',
      '',
    ]),
      (t.locals = {
        left: 'tQoAD6bkpCnN9_janZ8sD',
        right: '_3dhh-SHcxz_6NJCv-JgQvH',
        icon: '_1kpoEP19rWgjycT60XuWv_',
      })
  },
  function(e, t, n) {
    var r = n(69)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '.NaLs4rYr1BcYZHAdNnDSi {\n  cursor: pointer;\n  position: relative;\n  transition: background-color .5s;\n  padding-bottom: 3px;\n  width: 17.86%;\n  height: 44px;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-flex;\n  display: flex; }\n  .NaLs4rYr1BcYZHAdNnDSi:hover {\n    background-color: #f0f0f0; }\n  .NaLs4rYr1BcYZHAdNnDSi .ZYhBSbEUYy2VHTRU-4RPp {\n    position: absolute;\n    bottom: 0;\n    height: 3px;\n    left: 0;\n    right: 0;\n    visibility: hidden; }\n  .NaLs4rYr1BcYZHAdNnDSi._3QoSLu76faChrjjvX8VqzL {\n    font-weight: bold; }\n    .NaLs4rYr1BcYZHAdNnDSi._3QoSLu76faChrjjvX8VqzL .ZYhBSbEUYy2VHTRU-4RPp {\n      visibility: visible; }\n',
      '',
    ]),
      (t.locals = {
        item: 'NaLs4rYr1BcYZHAdNnDSi',
        border: 'ZYhBSbEUYy2VHTRU-4RPp',
        selected: '_3QoSLu76faChrjjvX8VqzL',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = l(o),
      a = (l(n(1)), l(n(71))),
      s = l(n(19))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        return (n.state = { selected: e.selected }), n
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'onItemClick',
            value: function(e) {
              this.props.onItemClick && this.props.onItemClick(e),
                this.setState({ selected: e })
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this
              return i.default.createElement(
                'div',
                { className: a.default.bar },
                o.Children.map(this.props.children, function(t, n) {
                  return e.props.renderItemContainer({
                    key: n,
                    selected: e.state.selected == n,
                    onClick: e.onItemClick.bind(e, n),
                    children: t,
                  })
                })
              )
            },
          },
        ]),
        t
      )
    })()
    ;(u.defaultProps = {
      selected: 0,
      renderItemContainer: function(e) {
        return i.default.createElement(s.default, e, e.children)
      },
    }),
      (t.default = u)
  },
  function(e, t, n) {
    var r = n(72)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '.GejRRPuO4rHUaArwkYCeC {\n  display: -webkit-flex;\n  display: flex; }\n  .GejRRPuO4rHUaArwkYCeC > * {\n    -webkit-flex: 1;\n            flex: 1; }\n',
      '',
    ]),
      (t.locals = { bar: 'GejRRPuO4rHUaArwkYCeC' })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = s(o),
      a = (s(n(1)), s(n(74)))
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        return (
          (n.state = { selected: n.props.selected, dropDown: !1 }),
          (n.buttonElement = null),
          (n.onBackgroundClick = n.onBackgroundClick.bind(n)),
          (n.onButtonClick = n.onButtonClick.bind(n)),
          n
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'onBackgroundClick',
            value: function(e) {
              this.setState({ dropDown: !1 }),
                window.document.documentElement.removeEventListener(
                  'click',
                  this.onBackgroundClick,
                  !0
                )
              var t = e.target.getAttribute('data-kw-dropdown-button-index')
              null != t &&
                ((t = parseInt(t, 10)),
                this.state.selected !== t &&
                  (this.setState({ selected: t }), this.props.onChange(t)))
            },
          },
          {
            key: 'onButtonClick',
            value: function(e) {
              e.stopPropagation(),
                this.setState({ dropDown: !0 }),
                window.document.documentElement.addEventListener(
                  'click',
                  this.onBackgroundClick,
                  !0
                )
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = {}
              if (this.state.dropDown && this.buttonElement) {
                var n = this.buttonElement.getBoundingClientRect(),
                  r = n.top,
                  o = n.bottom
                ;(t = { top: r, bottom: 'auto' }),
                  'bottom' === this.props.verticalAlignment &&
                    (t = {
                      top: 'auto',
                      bottom:
                        Math.max(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        ) - o,
                    })
              }
              var s = a.default.leftAlign
              'right' === this.props.horizontalAlignment &&
                (s = a.default.rightAlign)
              var l = a.default.topAlign
              return (
                'bottom' === this.props.verticalAlignment &&
                  (l = a.default.bottomAlign),
                i.default.createElement(
                  'div',
                  { className: a.default.general },
                  i.default.createElement(
                    'button',
                    {
                      ref: function(t) {
                        e.buttonElement = t
                      },
                      className:
                        'KambiWidget-card-support-text-color ' +
                        a.default.button,
                      onClick: this.onButtonClick,
                    },
                    this.props.options[this.state.selected],
                    i.default.createElement('i', null)
                  ),
                  this.state.dropDown &&
                    i.default.createElement(
                      'ul',
                      {
                        style: t,
                        className: a.default.dropDown + '  ' + s + ' ' + l,
                      },
                      this.props.options.map(function(t, n) {
                        var r = [
                          'KambiWidget-card-background-color',
                          'KambiWidget-card-background-color--hoverable',
                          'KambiWidget-card-background-color--clickable',
                        ]
                        return (
                          e.state.selected === n
                            ? r.push('KambiWidget-primary-color')
                            : r.push('KambiWidget-card-text-color'),
                          i.default.createElement(
                            'li',
                            {
                              key: t,
                              'data-kw-dropdown-button-index': n,
                              className: r.join(' '),
                            },
                            t
                          )
                        )
                      })
                    )
                )
              )
            },
          },
        ]),
        t
      )
    })()
    ;(l.defaultProps = {
      selected: 0,
      horizontalAlignment: 'right',
      verticalAlignment: 'top',
    }),
      (t.default = l)
  },
  function(e, t, n) {
    var r = n(75)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._2S0ijU841xZjaTMN-ScnkA {\n  display: inline-block;\n  position: relative; }\n\n._3cNS8fSyjZI9_uV8H_iej9 {\n  background: none;\n  border: none;\n  outline: none;\n  padding: 7px 7px 7px 7px;\n  position: relative;\n  white-space: nowrap; }\n  ._3cNS8fSyjZI9_uV8H_iej9 i {\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 6px solid;\n    border-color-top: #999;\n    border-color-top: currentColor;\n    display: inline-block;\n    margin-left: 5px;\n    margin-bottom: 1px; }\n\n._1b2B001JsVUtLNOEVZUNCj {\n  position: absolute;\n  z-index: 1;\n  list-style: none;\n  margin: 4px;\n  padding: 0;\n  border-radius: 2px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n  min-width: 280px;\n  text-align: left; }\n  ._1b2B001JsVUtLNOEVZUNCj li {\n    font-size: 16px;\n    padding: 17px 16px;\n    line-height: 20px;\n    cursor: pointer;\n    white-space: nowrap; }\n\n@media (max-width: 925px) {\n  ._2S0ijU841xZjaTMN-ScnkA {\n    position: initial; }\n  ._1b2B001JsVUtLNOEVZUNCj {\n    left: 0;\n    right: 0;\n    /* vw means viewport width (iframe width)\n      we need to use it here because of the parent div position: relative\n      vw support is pretty good: http://caniuse.com/#feat=viewport-units\n      but we have a fallback just in case */\n    width: 280px;\n    width: 100vw;\n    width: calc(100vw - 8px); } }\n\n@media (min-width: 925px) {\n  ._2gXbynwwkKJTtIq60hDhgH {\n    right: auto !important;\n    left: 0 !important; }\n  ._1DmAQyxCjJtoE4xXupSBDm {\n    right: 0 !important;\n    left: auto !important; }\n  .kB6L4IyIpr1e6EKOSl4eo {\n    top: 0 !important;\n    bottom: auto !important; }\n  ._2XBnRzOW7_LM7CwUKCISFy {\n    top: auto !important;\n    bottom: 0 !important; } }\n',
      '',
    ]),
      (t.locals = {
        general: '_2S0ijU841xZjaTMN-ScnkA',
        button: '_3cNS8fSyjZI9_uV8H_iej9',
        dropDown: '_1b2B001JsVUtLNOEVZUNCj',
        leftAlign: '_2gXbynwwkKJTtIq60hDhgH',
        rightAlign: '_1DmAQyxCjJtoE4xXupSBDm',
        topAlign: 'kB6L4IyIpr1e6EKOSl4eo',
        bottomAlign: '_2XBnRzOW7_LM7CwUKCISFy',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = l(o),
      a = (l(n(1)), n(4)),
      s = l(n(77))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        return (
          (n.state = {
            hidden: n.props.hidden,
            isHome: 'home' === a.coreLibrary.pageInfo.pageType,
          }),
          (n.toggleHeader = n.toggleHeader.bind(n)),
          n
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'componentDidMount',
            value: function() {
              this.state.hidden &&
                a.widgetModule.setWidgetHeight(this.headerHeight)
            },
          },
          {
            key: 'toggleHeader',
            value: function() {
              ;(!0 === this.props.collapsable ||
                (null == this.props.collapsable && !this.state.isHome)) &&
                (this.setState({ hidden: !this.state.hidden }),
                this.state.hidden
                  ? (a.widgetModule.adaptWidgetHeight(),
                    this.props.onExpand && this.props.onExpand())
                  : (a.widgetModule.setWidgetHeight(this.headerHeight),
                    this.props.onCollapse && this.props.onCollapse()))
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t =
                  s.default.general +
                  ' KambiWidget-card-support-text-color KambiWidget-card-header-border'
              return (
                'string' == typeof this.props.customClasses
                  ? (t = this.props.customClasses)
                  : this.state.isHome ||
                    (t += ' KambiWidget-header ' + s.default.kwNotHome),
                i.default.createElement(
                  'header',
                  {
                    ref: function(t) {
                      e.headerElement = t
                    },
                    className: t,
                    onClick: this.toggleHeader,
                  },
                  this.props.children
                )
              )
            },
          },
          {
            key: 'headerHeight',
            get: function() {
              return this.headerElement
                ? this.headerElement.offsetHeight
                : this.props.collapsable
                  ? 40
                  : 37
            },
          },
        ]),
        t
      )
    })()
    t.default = u
  },
  function(e, t, n) {
    var r = n(78)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._3a_1D8R_ViarZtyR3EQOFX {\n  display: -webkit-flex;\n  display: flex;\n  padding: 6px 16px; }\n\n._358kK82Ay4n_giHi7q6bJe {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n',
      '',
    ]),
      (t.locals = {
        general: '_3a_1D8R_ViarZtyR3EQOFX',
        kwNotHome: '_358kK82Ay4n_giHi7q6bJe',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = a(n(0)),
      i = (a(n(1)), a(n(80)))
    function a(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var s = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.default.Component),
        r(t, [
          {
            key: 'render',
            value: function() {
              var e = i.default.button + ' ',
                t = i.default.buttonText + ' '
              return (
                'primary' === this.props.type
                  ? ((e += 'KambiWidget-primary-color'),
                    (t += 'KambiWidget-primary-color'))
                  : ((e += 'KambiWidget-card-text-color'),
                    (t += 'KambiWidget-card-text-color')),
                o.default.createElement(
                  'div',
                  { className: i.default.container },
                  o.default.createElement('button', {
                    disabled: this.props.disabled,
                    className: e,
                    onClick: this.props.action,
                  }),
                  o.default.createElement(
                    'div',
                    {
                      className: t,
                      style: this.props.disabled
                        ? { opacity: 0.4 }
                        : { opacity: 1 },
                    },
                    this.props.children
                  )
                )
              )
            },
          },
        ]),
        t
      )
    })()
    ;(s.defaultProps = { disabled: !1, type: 'primary' }), (t.default = s)
  },
  function(e, t, n) {
    var r = n(81)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._2nPosas3_NukqgArIFdqQw {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 36px;\n  padding: 0 10px; }\n\n.t_U07d_YDIdalSCglAu-M {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  border: none;\n  background-color: currentColor;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out, color 0.2s ease-out; }\n  .t_U07d_YDIdalSCglAu-M:hover {\n    opacity: 0.12; }\n  .t_U07d_YDIdalSCglAu-M:active {\n    opacity: 0.4; }\n  .t_U07d_YDIdalSCglAu-M:focus {\n    outline: 0 !important; }\n  .t_U07d_YDIdalSCglAu-M[disabled]:hover, .t_U07d_YDIdalSCglAu-M[disabled]:active {\n    opacity: 0;\n    cursor: not-allowed; }\n\n._3oRBeNTOX3WNEd4IPFgJOB {\n  font-weight: bold;\n  background-color: transparent;\n  pointer-events: none;\n  font-size: 14px;\n  text-align: left; }\n',
      '',
    ]),
      (t.locals = {
        container: '_2nPosas3_NukqgArIFdqQw',
        button: 't_U07d_YDIdalSCglAu-M',
        buttonText: '_3oRBeNTOX3WNEd4IPFgJOB',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = i(n(0)),
      o = (i(n(1)), i(n(83)))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    t.default = function(e) {
      var t = e.title,
        n = e.subtitle,
        i = e.children,
        a = e.localStyles,
        s = void 0 === a ? [] : a,
        l = [o.default.icon]
      return (
        s.length > 0 &&
          s.forEach(function(e) {
            return l.push(e)
          }),
        r.default.createElement(
          'header',
          {
            className:
              'KambiWidget-card-text-color KambiWidget-card-border-color KambiWidget-font ' +
              o.default.header,
          },
          r.default.createElement('div', { className: l.join(' ') }, i),
          r.default.createElement(
            'div',
            { className: o.default.container },
            r.default.createElement(
              'div',
              { className: o.default.title, title: t },
              t
            ),
            r.default.createElement(
              'div',
              { className: o.default.subtitle, title: n },
              n
            )
          )
        )
      )
    }
  },
  function(e, t, n) {
    var r = n(84)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '.EUZnbEcG3SnWYh8hqERrI {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  font-size: 12px;\n  line-height: 36px;\n  height: 64px;\n  overflow: hidden;\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  padding-left: 16px;\n  -webkit-align-items: center;\n          align-items: center;\n  background-color: #fff; }\n\n._1SixNuIj9fVsdWVyJERGuu {\n  height: 32px;\n  margin-right: 12px;\n  width: 32px; }\n\n._3Mq-ch_mN0CXINdygMO_Tt {\n  max-width: calc(100% - 62px); }\n\n.FFRZeCnPg2utVvv6y28cu {\n  line-height: 16px;\n  max-height: 16px;\n  min-height: 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n._39nixHWSE1OTk1nFLBMRm- {\n  line-height: 16px;\n  max-height: 16px;\n  min-height: 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n',
      '',
    ]),
      (t.locals = {
        header: 'EUZnbEcG3SnWYh8hqERrI',
        icon: '_1SixNuIj9fVsdWVyJERGuu',
        container: '_3Mq-ch_mN0CXINdygMO_Tt',
        title: 'FFRZeCnPg2utVvv6y28cu',
        subtitle: '_39nixHWSE1OTk1nFLBMRm-',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      i = n(0),
      a = d(i),
      s = (d(n(1)), d(n(86))),
      l = n(88),
      u = d(n(90)),
      c = d(n(91))
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function f(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      )
    }
    function p(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
        return n
      }
      return Array.from(e)
    }
    var h = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        return (
          (n.cloneItems = function(e) {
            var t = e.slice(0, 1),
              n = e.slice(e.length - 1)
            return [].concat(p(n), p(e), p(t))
          }),
          (n.decrement = function() {
            n.moveTo(n.state.currentPosition - 1)
          }),
          (n.increment = function() {
            n.moveTo(n.state.currentPosition + 1)
          }),
          (n.moveTo = function(e) {
            var t = n.state,
              r = t.itemWidth,
              o = t.isMouseEntered,
              i = (t.carouselItems, t.disabled, (e + 1) * r)
            n.setState(
              {
                disabled: !0,
                currentPosition: e,
                translate3d: -i,
                cssAnimation: {
                  transition:
                    'transform ' +
                    n.props.transitionDuration +
                    'ms ' +
                    n.props.cssEase,
                },
              },
              n.recalculateChecker
            ),
              n.props.autoPlay && !o && n.resetAutoPlay()
          }),
          (n.recalculateChecker = function() {
            var e = n.state,
              t = e.currentPosition,
              r = e.carouselItems,
              o = t < 0 || t >= r.length
            window.clearTimeout(),
              window.setTimeout(function() {
                o ? n.calculateSliderPos() : n.onSlideChange()
              }, n.props.transitionDuration)
          }),
          (n.onSlideChange = function() {
            n.props.onCarouselChange(n.state.selectedItem),
              n.setState(r({}, n.state, { disabled: !1 }))
          }),
          (n.changeItem = function(e) {
            var t = e.target.value
            n.moveTo(t)
          }),
          (n.renderCarouselItems = function(e, t) {
            var r = n.state.carouselItems,
              o = t < 1 || t > r.length + 1 - 1,
              i = [
                s.default['carousel-item'],
                o && !1 === n.props.infinite
                  ? s.default['carousel-item--cloned']
                  : '',
              ].join(' ')
            return a.default.createElement(
              'li',
              {
                key: 'item-' + t,
                className: i,
                id: 'item-' + t,
                ref: function(e) {
                  return (n['item' + t] = e)
                },
                style: n.itemStyles(t),
                onClick: function() {
                  return n.props.onCarouselItemClick(t)
                },
                onKeyPress: function(e) {},
              },
              e
            )
          }),
          (n.onIndicatorMouseEnter = function(e) {
            var t = e.target.value
            n.setState({ selectedIndicator: t })
          }),
          (n.onIndicatorMouseLeave = function(e) {
            n.setState({ selectedIndicator: null })
          }),
          (n.onArrowMouseEnter = function(e, t) {
            var r = t + 'ArrowHover'
            n.setState(f({}, r, !0))
          }),
          (n.onArrowMouseLeave = function(e, t) {
            var r = t + 'ArrowHover'
            n.setState(f({}, r, !1))
          }),
          (n.renderArrows = function(e) {
            var t = 'previous' === e,
              r = n.state[e + 'ArrowHover'],
              o = {
                button: {
                  background:
                    'linear-gradient(\n               ' +
                    (t ? 'to right' : 'to left') +
                    ',\n               rgba(0, 0, 0, 0.2),\n               rgba(0, 0, 0, 0)\n            )',
                },
                icon: {
                  transition: 'transform 0.3s ease',
                  opacity: r ? 1 : 0.4,
                  transform: r
                    ? 'scale(1.2) translateZ(0)'
                    : 'scale(1) translateZ(0)',
                  backfaceVisibility: 'hidden',
                  mixBlendMode: 'normal',
                },
              }
            return a.default.createElement(
              'button',
              {
                type: 'button',
                className: [s.default.arrow, s.default['arrow--' + e]].join(
                  ' '
                ),
                onClick: t ? n.decrement : n.increment,
                style: o.button,
                disabled: n.state.disabled,
                onMouseEnter: function(t) {
                  return n.onArrowMouseEnter(t, e)
                },
                onMouseLeave: function(t) {
                  return n.onArrowMouseLeave(t, e)
                },
              },
              a.default.createElement(
                'div',
                { height: '44px', width: '44px', style: o.icon },
                'previous' === e ? (0, u.default)() : (0, c.default)()
              )
            )
          }),
          (n.autoPlayTimer = null),
          (n.changeTimer = null),
          (n.state = {
            isMouseEntered: !1,
            currentPosition: e.selectedItem,
            lastPosition: null,
            carouselItems: [],
            cssAnimation: {},
            translate3d: null,
            initialized: !1,
            fromChildren: !1,
            disabled: !1,
            previousArrowHover: !1,
            nextArrowHover: !1,
            selectedIndicator: null,
          }),
          n
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, i.Component),
        o(t, [
          {
            key: 'componentDidMount',
            value: function() {
              var e = this,
                t = this.props,
                n = t.children,
                r = t.autoPlay
              if (null == n || 0 === n.length) return null
              this.setupCarousel(),
                l.resize.add(function() {
                  return e.setupCarousel()
                }),
                r && this.setupAutoPlay()
            },
          },
          {
            key: 'componentDidUpdate',
            value: function() {
              this.state.initialized || this.setupCarousel(),
                this.props.autoPlay && this.resetAutoPlay()
            },
          },
          {
            key: 'componentWillUnmount',
            value: function() {
              clearTimeout(this.changeTimer)
            },
          },
          {
            key: 'setupCarousel',
            value: function() {
              var e = this,
                t = this.props.children,
                n = this.state.currentPosition,
                r = this.sliderNode.getBoundingClientRect().width,
                o = Math.min(n ? Math.abs(Math.ceil(n)) : 0, t.length - 1)
              this.setState(
                {
                  currentPosition: o,
                  initialized: !0,
                  carouselItems: t,
                  clones: this.cloneItems(t),
                  translate3d: -r * (1 + o),
                  itemWidth: r,
                },
                function() {
                  return e.props.initializedCarousel(!0)
                }
              )
            },
          },
          {
            key: 'setupCarouselItems',
            value: function() {
              var e = this.props.children
              this.setState({
                lastPosition: e.length,
                carouselItems: e,
                fromChildren: !0,
              })
            },
          },
          {
            key: 'setupAutoPlay',
            value: function() {
              var e = this
              this.autoPlay()
              var t = this.carouselWrapper
              this.props.stopOnHover &&
                t &&
                ((function() {
                  try {
                    return document.createEvent('TouchEvent'), !0
                  } catch (e) {
                    return !1
                  }
                })() ||
                  (t.addEventListener(
                    'mouseenter',
                    function(t) {
                      e.stopOnHover()
                    },
                    !1
                  ),
                  t.addEventListener('mouseleave', function(t) {
                    e.startOnHoverLeave()
                  })))
            },
          },
          {
            key: 'autoPlay',
            value: function() {
              var e = this
              this.autoPlayTimer = setTimeout(function() {
                e.increment()
              }, this.props.intervalDuration)
            },
          },
          {
            key: 'clearAutoPlay',
            value: function() {
              clearTimeout(this.autoPlayTimer),
                clearTimeout(this.calcCheckTimer),
                clearTimeout(this.changeTimer)
            },
          },
          {
            key: 'resetAutoPlay',
            value: function() {
              this.clearAutoPlay(), this.autoPlay()
            },
          },
          {
            key: 'stopOnHover',
            value: function() {
              this.setState({ isMouseEntered: !0 }),
                this.props.onCarouselMouseEnter(
                  Date.now(),
                  this.state.carouselItems[this.state.currentPosition].itemId
                ),
                this.props.autoPlay && this.clearAutoPlay()
            },
          },
          {
            key: 'startOnHoverLeave',
            value: function() {
              this.setState({ isMouseEntered: !1 }),
                this.props.onCarouselMouseLeave(
                  Date.now(),
                  this.state.carouselItems[this.state.currentPosition].itemId
                ),
                this.props.autoPlay && this.autoPlay()
            },
          },
          {
            key: 'calculateSliderPos',
            value: function() {
              var e = this.state,
                t = e.currentPosition,
                n = e.carouselItems,
                r = e.itemWidth,
                o = t < 0 ? n.length - 1 : 0
              this.setState(
                {
                  currentPosition: o,
                  translate3d: -r * (0 === o ? 1 : n.length),
                  disabled: !1,
                  cssAnimation: {
                    transition: 'transform 0ms ' + this.props.cssEase,
                  },
                },
                this.onSlideChange
              )
            },
          },
          {
            key: 'setSliderStyles',
            value: function() {
              var e = this,
                t = 100 * -this.state.currentPosition + '%',
                n = {}
              'slide' === this.props.animationType
                ? ((n = {
                    transform: 'translate3d(' + t + ', 0, 0)',
                    transition:
                      this.props.transitionDuration +
                      'ms ' +
                      this.props.cssEase,
                  }),
                  this.setState({ cssAnimation: n }, function() {
                    return e.props.onCarouselChange(e.state.currentPosition)
                  }),
                  this.state.currentPosition === this.state.lastPosition &&
                    (clearTimeout(this.endTimer),
                    (this.endTimer = setTimeout(function() {
                      e.setState({
                        cssAnimation: {
                          transform: 'translate3d(0px, 0, 0)',
                          transition: 'none',
                        },
                      })
                    }, this.props.transitionDuration))))
                : 'fade' === this.props.animationType &&
                  (this.changeTimer = setTimeout(function() {
                    e.props.onCarouselChange(e.state.currentPosition)
                  }, this.props.transitionDuration))
            },
          },
          {
            key: 'itemStyles',
            value: function(e) {
              var t = this.state,
                n = t.itemWidth,
                r = t.currentPosition,
                o = { width: n + 'px' }
              return (
                'fade' === this.props.animationType &&
                  ((o = {
                    left: -e * n + 'px',
                    opacity: 0,
                    zIndex: -1,
                    transition:
                      'opacity ' +
                      this.props.transitionDuration +
                      'ms ' +
                      this.props.cssEase,
                  }),
                  r === e &&
                    (o = Object.assign({}, o, { opacity: 1, zIndex: 1 }))),
                o
              )
            },
          },
          {
            key: 'getActiveDotIndex',
            value: function() {
              var e = this.state,
                t = e.carouselItems,
                n = e.currentPosition + 1,
                r = t.length
              return n < 1 ? r - 1 : n > r ? 0 : n - 1
            },
          },
          {
            key: 'renderIndicators',
            value: function() {
              var e = this,
                t = this.state.carouselItems
              return this.props.showIndicators
                ? a.default.createElement(
                    'ul',
                    {
                      className: s.default['control-dots'],
                      style: this.props.indicatorUlStyles,
                    },
                    t.map(function(t, n) {
                      var r =
                          e.getActiveDotIndex() !== n
                            ? s.default.dot
                            : [s.default.dot, s.default['dot-selected']].join(
                                ' '
                              ),
                        o =
                          e.state.selectedIndicator === n
                            ? {
                                opacity: 1,
                                transform: 'scale(1.2) translateZ(0)',
                                backfaceVisibility: 'hidden',
                                mixBlendMode: 'normal',
                              }
                            : {}
                      return a.default.createElement('li', {
                        className: r,
                        onClick: e.changeItem,
                        onMouseEnter: e.onIndicatorMouseEnter,
                        onMouseLeave: e.onIndicatorMouseLeave,
                        value: n,
                        key: n,
                        style: Object.assign({}, o, e.props.indicatorLiStyles),
                      })
                    })
                  )
                : null
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.showArrows,
                o = t.showIndicators,
                i = t.height,
                l = this.state,
                u = l.carouselItems,
                c = l.cssAnimation,
                d = l.clones,
                f = l.translate3d,
                p = d || u,
                h = void 0
              return (
                (h =
                  'fade' === this.props.animationType
                    ? { transform: 'translate3d(0px, 0, 0)' }
                    : r({}, c, {
                        transform: 'translate3d(' + f + 'px, 0, 0)',
                      })),
                a.default.createElement(
                  'div',
                  {
                    className: s.default['glomo-carousel'],
                    ref: function(t) {
                      return (e.carouselWrapper = t)
                    },
                    style: { height: i },
                  },
                  a.default.createElement(
                    'div',
                    {
                      className: s.default['carousel-wrapper'],
                      style: { height: i },
                    },
                    a.default.createElement(
                      'div',
                      { className: s.default['slider-wrapper'] },
                      a.default.createElement(
                        'ul',
                        {
                          className: s.default.slider,
                          style: r({}, h, { height: '100%' }),
                          ref: function(t) {
                            return (e.sliderNode = t)
                          },
                        },
                        p.map(this.renderCarouselItems)
                      )
                    )
                  ),
                  n && this.renderArrows('previous'),
                  n && this.renderArrows('next'),
                  o && this.renderIndicators()
                )
              )
            },
          },
        ]),
        t
      )
    })()
    ;(h.defaultProps = {
      showIndicators: !0,
      infinite: !0,
      showArrows: !0,
      infiniteLoop: !0,
      legendClassName: null,
      wrapperClassName: null,
      cssEase: 'ease',
      animationType: 'slide',
      selectedItem: 0,
      height: '0px',
      autoPlay: !1,
      stopOnHover: !1,
      intervalDuration: 3500,
      transitionDuration: 800,
      redirectCallback: null,
      indicatorLiStyles: {},
      indicatorUlStyles: {},
      onCarouselChange: function() {},
      onCarouselMouseEnter: function() {},
      onCarouselMouseLeave: function() {},
      onCarouselItemClick: function() {},
      initializedCarousel: function() {},
      imageLoaded: function() {},
    }),
      (t.default = h)
  },
  function(e, t, n) {
    var r = n(87)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      "._1B3cHygWEyRJaBrS8MpMWN {\n  position: relative; }\n  ._1B3cHygWEyRJaBrS8MpMWN * {\n    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: 100%;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    -webkit-user-select: none; }\n  ._1B3cHygWEyRJaBrS8MpMWN *,\n  ._1B3cHygWEyRJaBrS8MpMWN *::after,\n  ._1B3cHygWEyRJaBrS8MpMWN *::before {\n    box-sizing: border-box; }\n  ._1B3cHygWEyRJaBrS8MpMWN a {\n    text-decoration: none; }\n  ._1B3cHygWEyRJaBrS8MpMWN strong {\n    font-weight: bold; }\n  ._2W7l5HfuUWlHptInBRLUOw {\n    box-sizing: border-box;\n    height: 0;\n    overflow-y: hidden; }\n  ._1B3cHygWEyRJaBrS8MpMWN ._2ObtyaTad5SzLYqKpsgOQw {\n    -webkit-transform: none !important;\n            transform: none !important; }\n  ._1B3cHygWEyRJaBrS8MpMWN input:matches([type='button'], [type='submit'], [type='reset']),\n  ._1B3cHygWEyRJaBrS8MpMWN input[type='file']::-webkit-file-upload-button,\n  ._1B3cHygWEyRJaBrS8MpMWN button {\n    margin: initial; }\n\nhtml._1eIDp8M1W2atFhhZmeuWkh {\n  min-width: 100%;\n  width: 1px;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  html._1eIDp8M1W2atFhhZmeuWkh body {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n\n._3Qy_MdIFqbE2GJNq89sNSg {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  margin: auto;\n  overflow: hidden; }\n\n._1ype_WNvtf5xQkgBkOW_GF {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden; }\n  ._1ype_WNvtf5xQkgBkOW_GF ._2zso6ezwkYRp5TBnBClnRu {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    width: 100%;\n    transition: height 0.15s ease-in;\n    height: 100%;\n    position: relative;\n    white-space: nowrap; }\n    ._1ype_WNvtf5xQkgBkOW_GF ._2zso6ezwkYRp5TBnBClnRu a {\n      display: block;\n      height: 100%;\n      width: 100%; }\n    ._1ype_WNvtf5xQkgBkOW_GF ._2zso6ezwkYRp5TBnBClnRu .aZX8_XKtzgwclBcKo9vUh {\n      height: 100%;\n      width: 100%;\n      cursor: pointer; }\n    ._1ype_WNvtf5xQkgBkOW_GF ._2zso6ezwkYRp5TBnBClnRu ._1k4T6G3W10jNNnU86adawP {\n      background-size: cover;\n      vertical-align: top;\n      display: inline-block;\n      pointer-events: none; }\n    ._1ype_WNvtf5xQkgBkOW_GF ._2zso6ezwkYRp5TBnBClnRu img {\n      height: 100%; }\n\n._2tMYiQ1j_rME6gCzatZ-Rk {\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  list-style: none;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n  ._2tMYiQ1j_rME6gCzatZ-Rk ._2L-v8ypCTFdR7sYt2H3JVw {\n    -webkit-flex: 1 100%;\n            flex: 1 100%;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-flex-flow: column;\n            flex-flow: column;\n    position: relative;\n    min-width: 100%;\n    height: 100%; }\n    ._2tMYiQ1j_rME6gCzatZ-Rk .FNjxalzy-6da6yy3qPdI9 {\n      opacity: 0;\n      visibility: hidden; }\n\n._2jGmCAPs6sih8le1Rxf-yg {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n          justify-content: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  height: auto; }\n  ._2jGmCAPs6sih8le1Rxf-yg ._3dF0ILa0ZR_UuhUzY153UF {\n    font-size: 1.2rem;\n    font-weight: 800; }\n  ._2jGmCAPs6sih8le1Rxf-yg button {\n    max-width: 33.33%; }\n\n._3ceE94COlriC5BG91Z3GqA {\n  position: absolute;\n  bottom: 0;\n  margin: 44px 0;\n  text-align: center;\n  width: 100%;\n  padding: 0; }\n\n._3S3xJifWqsp2fuqVkVlPGK {\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);\n  background-color: #fff;\n  mix-blend-mode: difference;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 12px;\n  opacity: 0.6;\n  transition: all 0.2s ease; }\n  ._3F3cHiqpREc3qmrkc4VFmf, ._3F3cHiqpREc3qmrkc4VFmf:hover {\n    opacity: 1;\n    -webkit-transform: scale(1.4) translateZ(0);\n            transform: scale(1.4) translateZ(0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    mix-blend-mode: normal; }\n\n._2wc-UCmlyvYQC7gKDRO-fp {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  width: 5%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.3s ease-in;\n  border: none;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n  /* Remove excess padding and border in Firefox 4+ */ }\n  ._1q32fWJUeqRbpyoNKJ647W {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    left: 0%; }\n  ._3IVGoFFoT2SQ8yeUMqH-JV {\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    right: 0%; }\n  ._2wc-UCmlyvYQC7gKDRO-fp:focus {\n    outline: 0; }\n  ._2wc-UCmlyvYQC7gKDRO-fp::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n",
      '',
    ]),
      (t.locals = {
        rootElement: '_1B3cHygWEyRJaBrS8MpMWN',
        rootElementEmbedded: '_2W7l5HfuUWlHptInBRLUOw',
        'KambiWidget-outcome__odds-wrapper': '_2ObtyaTad5SzLYqKpsgOQw',
        notEmbedded: '_1eIDp8M1W2atFhhZmeuWkh',
        'glomo-carousel': '_3Qy_MdIFqbE2GJNq89sNSg',
        'carousel-wrapper': '_1ype_WNvtf5xQkgBkOW_GF',
        'slider-wrapper': '_2zso6ezwkYRp5TBnBClnRu',
        'pseudo-anchor': 'aZX8_XKtzgwclBcKo9vUh',
        img: '_1k4T6G3W10jNNnU86adawP',
        slider: '_2tMYiQ1j_rME6gCzatZ-Rk',
        'carousel-item': '_2L-v8ypCTFdR7sYt2H3JVw',
        'carousel-item--cloned': 'FNjxalzy-6da6yy3qPdI9',
        'carousel-legend-wrapper': '_2jGmCAPs6sih8le1Rxf-yg',
        'carousel-legend': '_3dF0ILa0ZR_UuhUzY153UF',
        'control-dots': '_3ceE94COlriC5BG91Z3GqA',
        dot: '_3S3xJifWqsp2fuqVkVlPGK',
        'dot-selected': '_3F3cHiqpREc3qmrkc4VFmf',
        arrow: '_2wc-UCmlyvYQC7gKDRO-fp',
        'arrow--previous': '_1q32fWJUeqRbpyoNKJ647W',
        'arrow--next': '_3IVGoFFoT2SQ8yeUMqH-JV',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = n(89)
    Object.defineProperty(t, 'resize', {
      enumerable: !0,
      get: function() {
        return ((e = r), e && e.__esModule ? e : { default: e }).default
        var e
      },
    })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
      var e = [],
        t = !1,
        n = function() {
          t ||
            ((t = !0),
            window.requestAnimationFrame
              ? window.requestAnimationFrame(r)
              : setTimeout(function() {
                  return r()
                }, 66))
        },
        r = function() {
          e.forEach(function(e) {
            e()
          }),
            (t = !1)
        }
      return {
        add: function(t) {
          e.length || window.addEventListener('resize', n),
            (function(t) {
              t && e.push(t)
            })(t)
        },
      }
    })()
    t.default = r
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function() {
        return i.default.createElement(
          'svg',
          {
            fill: '#fff',
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          i.default.createElement('path', {
            d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
          }),
          i.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
        )
      })
    var r,
      o = n(0),
      i = (r = o) && r.__esModule ? r : { default: r }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function() {
        return i.default.createElement(
          'svg',
          {
            fill: '#fff',
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          i.default.createElement('path', {
            d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
          }),
          i.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
        )
      })
    var r,
      o = n(0),
      i = (r = o) && r.__esModule ? r : { default: r }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = l(o),
      a = (l(n(1)), l(n(93))),
      s = n(4)
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'cssRender',
            value: function() {
              var e = this.props.blendWithOperatorColor
                ? { backgroundColor: 'currentColor' }
                : {}
              return i.default.createElement(
                'div',
                {
                  className:
                    a.default.backgroundContainer +
                    ' KambiWidget-primary-color',
                  style: e,
                },
                i.default.createElement('div', {
                  className: a.default.background,
                  style: {
                    backgroundImage: 'url(' + this.props.backgroundUrl + ')',
                    backgroundRepeat: 'no-repeat',
                    mixBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  },
                })
              )
            },
          },
          {
            key: 'svgRender',
            value: function() {
              return i.default.createElement(
                'div',
                { className: a.default.backgroundContainer },
                i.default.createElement(
                  'svg',
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    xmlnsXlink: 'http://www.w3.org/1999/xlink',
                    className: a.default.background,
                  },
                  i.default.createElement(
                    'defs',
                    null,
                    i.default.createElement(
                      'filter',
                      { id: 'filter' },
                      i.default.createElement('feImage', {
                        result: 'slide2',
                        x: '0',
                        y: '0',
                        width: '100%',
                        preserveAspectRatio: 'xMidYMid slice',
                        xlinkHref: this.props.backgroundUrl,
                      }),
                      this.props.blendWithOperatorColor
                        ? i.default.createElement('feBlend', {
                            in2: 'SourceGraphic',
                            in: 'slide2',
                            mode: 'multiply',
                          })
                        : null
                    )
                  ),
                  i.default.createElement('rect', {
                    className:
                      'KambiWidget-primary-color ' + a.default.blendRect,
                    x: '0',
                    y: '0',
                    filter: 'url(#filter)',
                    width: '100%',
                    height: '100%',
                  })
                )
              )
            },
          },
          {
            key: 'render',
            value: function() {
              return 'firefox' === s.coreLibrary.browser
                ? this.cssRender()
                : this.svgRender()
            },
          },
        ]),
        t
      )
    })()
    ;(u.defaultProps = { blendWithOperatorColor: !0 }), (t.default = u)
  },
  function(e, t, n) {
    var r = n(94)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._2xVxZSZcdiV2WUogNg49aM {\n  -webkit-filter: brightness(90%);\n          filter: brightness(90%);\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  -moz-transform: translateZ(1px); }\n\n.wto13_fUR0PgAXUIk9Wc9 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  overflow: hidden; }\n\n._1aW_d0nomTmxb3uuA0_hfL {\n  fill: currentColor; }\n',
      '',
    ]),
      (t.locals = {
        backgroundContainer: '_2xVxZSZcdiV2WUogNg49aM',
        background: 'wto13_fUR0PgAXUIk9Wc9',
        blendRect: '_1aW_d0nomTmxb3uuA0_hfL',
      })
  },
  function(e, t, n) {
    var r = n(96)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._3FbLxDaeily_PZYHSb37qy {\n  color: white;\n  position: relative;\n  padding: 12px 0; }\n\n._2fRFC_Wtu7ggU_YN2DTX1c {\n  display: -webkit-flex;\n  display: flex;\n  max-width: 850px;\n  min-width: 650px;\n  margin: 0 auto 1rem auto;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0 2rem; }\n',
      '',
    ]),
      (t.locals = {
        widget: '_3FbLxDaeily_PZYHSb37qy',
        topArea: '_2fRFC_Wtu7ggU_YN2DTX1c',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = u(o),
      a = (u(n(1)), n(4)),
      s = n(9),
      l = u(n(98))
    function u(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var c = a.translationModule.getTranslation.bind(a.translationModule),
      d = function(e) {
        return e < 10 ? '0' + e : e
      },
      f = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (n.onClick = n.onClick.bind(n)), n
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, o.Component),
          r(t, [
            {
              key: 'onClick',
              value: function() {
                !0 === this.props.event.openForLiveBetting
                  ? a.widgetModule.navigateToLiveEvent(this.props.event.id)
                  : a.widgetModule.navigateToEvent(this.props.event.id)
              },
            },
            {
              key: 'handleBrokenUrl',
              value: function(e) {
                this[e].style.display = 'none'
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this
                return i.default.createElement(
                  'div',
                  { className: l.default.general },
                  i.default.createElement(
                    'div',
                    { className: l.default.header, onClick: this.onClick },
                    i.default.createElement(
                      'div',
                      { className: l.default.start },
                      this.startDate,
                      ' '
                    )
                  ),
                  i.default.createElement(
                    'div',
                    { className: l.default.teams, onClick: this.onClick },
                    i.default.createElement(
                      'div',
                      { className: [l.default.team, l.default.home].join(' ') },
                      this.props.homeFlag &&
                        i.default.createElement('img', {
                          className: l.default.flag,
                          src: this.props.homeFlag,
                          alt: '',
                          ref: function(t) {
                            e.imgHome = t
                          },
                          onError: function() {
                            return e.handleBrokenUrl('imgHome')
                          },
                        }),
                      i.default.createElement(
                        'span',
                        { className: l.default.name },
                        this.props.event.homeName
                      )
                    ),
                    this.props.liveData &&
                      i.default.createElement(
                        'div',
                        { className: l.default.score },
                        this.props.liveData.score.home,
                        i.default.createElement('small', null, '-'),
                        this.props.liveData.score.away
                      ),
                    i.default.createElement(
                      'div',
                      { className: [l.default.team, l.default.away].join(' ') },
                      i.default.createElement(
                        'span',
                        { className: l.default.name },
                        this.props.event.awayName
                      ),
                      this.props.awayFlag &&
                        i.default.createElement('img', {
                          className: l.default.flag,
                          src: this.props.awayFlag,
                          alt: '',
                          ref: function(t) {
                            e.imgAway = t
                          },
                          onError: function() {
                            return e.handleBrokenUrl('imgAway')
                          },
                        })
                    )
                  ),
                  i.default.createElement(
                    'div',
                    { className: '' + l.default.outcomes },
                    !this.props.liveData &&
                      this.props.outcomes.map(function(t) {
                        return i.default.createElement(s.OutcomeButton, {
                          key: t.id,
                          outcome: t,
                          event: e.props.event,
                          outlineStyle: !0,
                          updateOdds: !1,
                        })
                      }),
                    this.props.liveData &&
                      i.default.createElement(s.OutcomeButtonUI, {
                        event: this.props.event,
                        label: i.default.createElement(
                          'span',
                          { className: l.default.liveLabel },
                          i.default.createElement('em', null, c('Live')),
                          c('Right Now')
                        ),
                        onClick: this.onClick,
                        outlineStyle: !0,
                      })
                  )
                )
              },
            },
            {
              key: 'startDate',
              get: function() {
                var e,
                  t = new Date(),
                  n = new Date(this.props.event.start)
                return (
                  (t.getDate() === n.getDate()
                    ? c('today')
                    : t.getDate() === n.getDate() - 1
                      ? c('tomorrow')
                      : '') +
                  ' ' +
                  d(n.getDate()) +
                  ' ' +
                  ((e = c('month' + n.getMonth()).slice(0, 3))
                    .charAt(0)
                    .toUpperCase() +
                    e.slice(1)) +
                  ' ' +
                  d(n.getHours()) +
                  ':' +
                  d(n.getMinutes())
                )
              },
            },
          ]),
          t
        )
      })()
    ;(f.defaultProps = {
      outcomes: [],
      liveData: null,
      flagBaseUrl: 'assets/icons/',
    }),
      (t.default = f)
  },
  function(e, t, n) {
    var r = n(99)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      "._2TRWRdgPI9dJ0WW4OMezAT {\n  position: relative; }\n  ._2TRWRdgPI9dJ0WW4OMezAT * {\n    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: 100%;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    -webkit-user-select: none; }\n  ._2TRWRdgPI9dJ0WW4OMezAT *,\n  ._2TRWRdgPI9dJ0WW4OMezAT *::after,\n  ._2TRWRdgPI9dJ0WW4OMezAT *::before {\n    box-sizing: border-box; }\n  ._2TRWRdgPI9dJ0WW4OMezAT a {\n    text-decoration: none; }\n  ._2TRWRdgPI9dJ0WW4OMezAT strong {\n    font-weight: bold; }\n  ._20SS28B3wlntnJzONVodJ0 {\n    box-sizing: border-box;\n    height: 0;\n    overflow-y: hidden; }\n  ._2TRWRdgPI9dJ0WW4OMezAT ._3hCDxQ7KGWjWACV_5FLrSW {\n    -webkit-transform: none !important;\n            transform: none !important; }\n  ._2TRWRdgPI9dJ0WW4OMezAT input:matches([type='button'], [type='submit'], [type='reset']),\n  ._2TRWRdgPI9dJ0WW4OMezAT input[type='file']::-webkit-file-upload-button,\n  ._2TRWRdgPI9dJ0WW4OMezAT button {\n    margin: initial; }\n\nhtml._29lD-LA1i0H3IaKTLbgRvH {\n  min-width: 100%;\n  width: 1px;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  html._29lD-LA1i0H3IaKTLbgRvH body {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n\n*:last-child > ._3-odHunguDZIT9dHmFF29U {\n  border-right: 0; }\n\n._3-odHunguDZIT9dHmFF29U {\n  border-right: 1px dotted rgba(255, 255, 255, 0.4);\n  margin-top: 6px;\n  max-width: 350px;\n  width: 350px;\n  height: 120px; }\n  @media (max-width: 320px) {\n    ._3-odHunguDZIT9dHmFF29U {\n      max-width: 267px;\n      width: 267px;\n      -webkit-flex: 1 0 267px;\n              flex: 1 0 267px; } }\n  @media (min-width: 321px) and (max-width: 480px) {\n    ._3-odHunguDZIT9dHmFF29U {\n      max-width: 300px;\n      width: 300px;\n      -webkit-flex: 1 0 300px;\n              flex: 1 0 300px; } }\n  @media (min-width: 481px) and (max-width: 568px) {\n    ._3-odHunguDZIT9dHmFF29U {\n      max-width: 334px;\n      width: 334px;\n      -webkit-flex: 1 0 334px;\n              flex: 1 0 334px; } }\n\n.DC7dFScaZtIUxM27dKnaT {\n  display: -webkit-flex;\n  display: flex;\n  padding-top: 6px;\n  opacity: .9;\n  font-size: 12px;\n  line-height: 24px; }\n  .DC7dFScaZtIUxM27dKnaT ._2u-vzJa294rE4akQDb2Lvp {\n    -webkit-flex: 1;\n            flex: 1;\n    padding-left: 16px;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-align-items: center;\n            align-items: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\n._2ZGrkQkADN6UCnHD2zeyBV {\n  padding: 6px 16px 12px 16px;\n  -webkit-flex: 1;\n          flex: 1;\n  display: -webkit-flex;\n  display: flex; }\n  ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU {\n    -webkit-flex: 1 1 auto;\n            flex: 1 1 auto;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    line-height: 24px;\n    overflow: hidden; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU ._2XYs7xPaAkd3R13TG5JmhU {\n      width: 24px;\n      height: 24px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU ._3cgZi1U0EBvX4OE-J-pLgQ {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      line-height: 24px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._3QLR5_N8Xmm9fMcPQQtCWS {\n      -webkit-justify-content: flex-start;\n              justify-content: flex-start;\n      margin-right: 6px; }\n      ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._3QLR5_N8Xmm9fMcPQQtCWS ._2XYs7xPaAkd3R13TG5JmhU {\n        margin-right: 12px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._1FbptNEDPo-XN4vFgTHBlD {\n      -webkit-justify-content: flex-end;\n              justify-content: flex-end;\n      margin-left: 6px; }\n      ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._1FbptNEDPo-XN4vFgTHBlD ._2XYs7xPaAkd3R13TG5JmhU {\n        margin-left: 12px; }\n  ._2ZGrkQkADN6UCnHD2zeyBV .JxGfh5nVOlonjTs7h9TFH {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    line-height: 24px;\n    font-size: 24px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV .JxGfh5nVOlonjTs7h9TFH small {\n      font-size: 14px;\n      padding: 0 6px;\n      vertical-align: top; }\n\n._2RLG4Me5TbicXjfYUxBfH2 {\n  display: -webkit-flex;\n  display: flex;\n  margin-left: 16px;\n  margin-right: 16px; }\n  ._2RLG4Me5TbicXjfYUxBfH2 > * {\n    margin-left: 3px;\n    -webkit-flex: 1;\n            flex: 1; }\n    ._2RLG4Me5TbicXjfYUxBfH2 > *:first-child {\n      margin-left: 0; }\n  ._2RLG4Me5TbicXjfYUxBfH2 ._3Fk-e8i32ASMw-NrXPAtBA {\n    text-transform: uppercase; }\n    ._2RLG4Me5TbicXjfYUxBfH2 ._3Fk-e8i32ASMw-NrXPAtBA em {\n      color: red;\n      padding-right: 6px; }\n",
      '',
    ]),
      (t.locals = {
        rootElement: '_2TRWRdgPI9dJ0WW4OMezAT',
        rootElementEmbedded: '_20SS28B3wlntnJzONVodJ0',
        'KambiWidget-outcome__odds-wrapper': '_3hCDxQ7KGWjWACV_5FLrSW',
        notEmbedded: '_29lD-LA1i0H3IaKTLbgRvH',
        general: '_3-odHunguDZIT9dHmFF29U',
        header: 'DC7dFScaZtIUxM27dKnaT',
        start: '_2u-vzJa294rE4akQDb2Lvp',
        teams: '_2ZGrkQkADN6UCnHD2zeyBV',
        team: '_29A9JKLUCvdCZgU1LA_YsU',
        flag: '_2XYs7xPaAkd3R13TG5JmhU',
        name: '_3cgZi1U0EBvX4OE-J-pLgQ',
        home: '_3QLR5_N8Xmm9fMcPQQtCWS',
        away: '_1FbptNEDPo-XN4vFgTHBlD',
        score: 'JxGfh5nVOlonjTs7h9TFH',
        outcomes: '_2RLG4Me5TbicXjfYUxBfH2',
        liveLabel: '_3Fk-e8i32ASMw-NrXPAtBA',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = l(o),
      a = (l(n(1)), l(n(101))),
      s = l(n(103))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function u(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
    }
    var c = (function(e) {
      function t() {
        var e, n, r
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
          i[a] = arguments[a]
        return (
          (n = r = u(
            this,
            (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              e,
              [this].concat(i)
            )
          )),
          (r.state = { isHovered: !1 }),
          (r.updateHoveredState = function(e) {
            r.setState({ isHovered: e })
          }),
          u(r, n)
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.disabled,
                r = t.onClick,
                o = t.type,
                l = [a.default.icon],
                u = [a.default.shadow]
              return (
                this.state.isHovered && l.push(a.default.iconHover),
                n || u.push(a.default.shadowHover),
                i.default.createElement(
                  'div',
                  { className: a.default[o] },
                  i.default.createElement('div', { className: u.join(' ') }),
                  i.default.createElement('button', {
                    className: l.join(' '),
                    disabled: n,
                    onClick: r,
                    style: { backgroundImage: 'url(' + s.default + ')' },
                    onMouseEnter: function() {
                      return e.updateHoveredState(!0)
                    },
                    onMouseLeave: function() {
                      return e.updateHoveredState(!1)
                    },
                  })
                )
              )
            },
          },
        ]),
        t
      )
    })()
    ;(c.defaultProps = { disabled: !1 }), (t.default = c)
  },
  function(e, t, n) {
    var r = n(102)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._2BGlvm1kLFck9O2GFU4ylE,\n._24d6f3pjhfa71-59bfd2pl {\n  position: absolute;\n  bottom: 50%;\n  width: 22px;\n  height: 36px; }\n  ._2BGlvm1kLFck9O2GFU4ylE ._2qHBrX_10eszn1kY7ZQlrc,\n  ._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc {\n    width: 22px;\n    height: 36px;\n    transition: opacity 0.3s;\n    background-size: contain;\n    background-color: transparent;\n    opacity: 0.5;\n    margin: 0 12px;\n    border: none;\n    outline: none !important;\n    cursor: pointer; }\n    ._2BGlvm1kLFck9O2GFU4ylE ._3W2YIhSeKbRO_TPVEBd0uZ,\n    ._24d6f3pjhfa71-59bfd2pl ._3W2YIhSeKbRO_TPVEBd0uZ {\n      opacity: 1; }\n    ._2BGlvm1kLFck9O2GFU4ylE ._2qHBrX_10eszn1kY7ZQlrc[disabled],\n    ._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc[disabled] {\n      opacity: 0;\n      cursor: default; }\n  ._2BGlvm1kLFck9O2GFU4ylE :focus,\n  ._24d6f3pjhfa71-59bfd2pl :focus {\n    outline: 0; }\n  ._2BGlvm1kLFck9O2GFU4ylE ._2H3-ctXxk6ebsY51K5KFfE,\n  ._24d6f3pjhfa71-59bfd2pl ._2H3-ctXxk6ebsY51K5KFfE {\n    position: absolute;\n    z-index: 0;\n    width: 200px;\n    pointer-events: none;\n    height: 150px;\n    opacity: 0; }\n    ._2BGlvm1kLFck9O2GFU4ylE ._2Ab9NRn620baTk2u6lLl_T,\n    ._24d6f3pjhfa71-59bfd2pl ._2Ab9NRn620baTk2u6lLl_T {\n      opacity: 1; }\n\n._2BGlvm1kLFck9O2GFU4ylE {\n  left: 0;\n  text-align: left; }\n  ._2BGlvm1kLFck9O2GFU4ylE ._2H3-ctXxk6ebsY51K5KFfE {\n    background-image: radial-gradient(ellipse 200px 135px at 0px 130px, #000, rgba(0, 0, 0, 0));\n    left: -20px; }\n\n._24d6f3pjhfa71-59bfd2pl {\n  right: 24px; }\n  ._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  ._24d6f3pjhfa71-59bfd2pl ._2H3-ctXxk6ebsY51K5KFfE {\n    background-image: radial-gradient(ellipse 200px 135px at 200px 130px, #000, rgba(0, 0, 0, 0));\n    right: -20px; }\n',
      '',
    ]),
      (t.locals = {
        left: '_2BGlvm1kLFck9O2GFU4ylE',
        right: '_24d6f3pjhfa71-59bfd2pl',
        icon: '_2qHBrX_10eszn1kY7ZQlrc',
        iconHover: '_3W2YIhSeKbRO_TPVEBd0uZ',
        shadow: '_2H3-ctXxk6ebsY51K5KFfE',
        shadowHover: '_2Ab9NRn620baTk2u6lLl_T',
      })
  },
  function(e, t, n) {
    e.exports = n.p + 'assets/media/arrow.53728860.svg'
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = i(n(0)),
      o = (i(n(1)), i(n(105)))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    t.default = function(e) {
      var t = e.children,
        n = (e.selected, e.onClick, e.onWidth)
      return r.default.createElement(
        'div',
        {
          className: o.default.item,
          ref: n
            ? function(e) {
                return n(
                  (function(e) {
                    return e ? e.offsetWidth : null
                  })(e)
                )
              }
            : void 0,
        },
        t
      )
    }
  },
  function(e, t, n) {
    var r = n(106)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._2LrNf_NvtrBLjlIOAsdrUx {\n  cursor: pointer; }\n',
      '',
    ]),
      (t.locals = { item: '_2LrNf_NvtrBLjlIOAsdrUx' })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = s(n(0)),
      o = (s(n(1)), n(4)),
      i = s(n(108)),
      a = s(n(20))
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = o.translationModule.getTranslation.bind(o.translationModule),
      u = function(e) {
        var t = e.logoUrl,
          n = e.scrolledListHasHorizontalSpaceLeft,
          o = i.default.general
        return (
          n
            ? (o = o + ' ' + i.default.scrolledListHasHorizontalSpaceLeft)
            : (0, a.default)() || (o = o + ' ' + i.default.desktop),
          r.default.createElement(
            'div',
            { className: o },
            r.default.createElement('i', {
              className: 'kw-custom-logo-large-type',
              style: { backgroundImage: 'url("' + t + '")' },
            }),
            r.default.createElement(
              'div',
              { className: i.default.tournament },
              r.default.createElement('p', null, l('wc2018').toUpperCase()),
              r.default.createElement('p', null, l('russia').toUpperCase())
            )
          )
        )
      }
    ;(u.defaultProps = { logoName: 'football' }), (t.default = u)
  },
  function(e, t, n) {
    var r = n(109)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '._1_MkP3PA1jHXnmX_bn5HQL {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 120px;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  overflow: visible;\n  z-index: 1;\n  max-width: 150px; }\n  ._1_MkP3PA1jHXnmX_bn5HQL i {\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center;\n    height: 80px;\n    width: 80px;\n    min-width: 80px;\n    -webkit-flex-basis: 100%;\n            flex-basis: 100%; }\n  ._1_MkP3PA1jHXnmX_bn5HQL._27uBOUWcyrddEFzxleqpmJ {\n    width: 0;\n    max-width: 0;\n    direction: rtl; }\n  ._1_MkP3PA1jHXnmX_bn5HQL._31OPsGzjcgB0sq77SYh-KS {\n    height: 100%;\n    -webkit-align-self: center;\n            align-self: center;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    text-align: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    min-width: 180px;\n    max-width: 180px; }\n    ._1_MkP3PA1jHXnmX_bn5HQL._31OPsGzjcgB0sq77SYh-KS i {\n      -webkit-flex-basis: 100%;\n              flex-basis: 100%; }\n  ._1_MkP3PA1jHXnmX_bn5HQL ._2b6V_BcVeKd3eVt4yj0zdl {\n    -webkit-flex-basis: 100%;\n            flex-basis: 100%;\n    text-align: center; }\n    ._1_MkP3PA1jHXnmX_bn5HQL ._2b6V_BcVeKd3eVt4yj0zdl p {\n      margin: 0;\n      line-height: 1.4; }\n      ._1_MkP3PA1jHXnmX_bn5HQL ._2b6V_BcVeKd3eVt4yj0zdl p:first-child {\n        font-weight: 600;\n        font-size: 1.2rem;\n        margin-top: 0.5rem;\n        letter-spacing: 0.7px; }\n',
      '',
    ]),
      (t.locals = {
        general: '_1_MkP3PA1jHXnmX_bn5HQL',
        scrolledListHasHorizontalSpaceLeft: '_27uBOUWcyrddEFzxleqpmJ',
        desktop: '_31OPsGzjcgB0sq77SYh-KS',
        tournament: '_2b6V_BcVeKd3eVt4yj0zdl',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = i(n(0)),
      o = (i(n(1)), i(n(111)))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    t.default = function(e) {
      var t = e.children,
        n = e.title,
        i = e.navText,
        a = e.showNavLink,
        s = void 0 !== a && a,
        l = e.handleClick
      return r.default.createElement(
        'div',
        { className: o.default.general },
        r.default.createElement('h6', { className: o.default.title }, n),
        r.default.createElement('ul', null, t),
        s &&
          r.default.createElement(
            'p',
            { className: o.default.nav, onClick: l },
            i
          )
      )
    }
  },
  function(e, t, n) {
    var r = n(112)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '.wDvL50TME26qYqnWOAgPk {\n  width: 240px;\n  padding: 0 .5rem;\n  -webkit-animation: _2bDeUOSoClUr5yixEra70k ease-in 1;\n          animation: _2bDeUOSoClUr5yixEra70k ease-in 1;\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  .wDvL50TME26qYqnWOAgPk ul {\n    padding: 0;\n    margin-bottom: 0; }\n\n@-webkit-keyframes _2bDeUOSoClUr5yixEra70k {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes _2bDeUOSoClUr5yixEra70k {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n._1kJBs82w7ChLgA0ApKeKEt {\n  margin: 0;\n  letter-spacing: .7px; }\n\n._3aGEDRiR4QaCmsbQ4OU419 {\n  text-decoration: underline;\n  opacity: .8;\n  cursor: pointer;\n  margin-top: .8rem; }\n  ._3aGEDRiR4QaCmsbQ4OU419:hover {\n    opacity: 1; }\n',
      '',
    ]),
      (t.locals = {
        general: 'wDvL50TME26qYqnWOAgPk',
        fadeIn: '_2bDeUOSoClUr5yixEra70k',
        title: '_1kJBs82w7ChLgA0ApKeKEt',
        nav: '_3aGEDRiR4QaCmsbQ4OU419',
      })
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      o = n(0),
      i = l(o),
      a = (l(n(1)), n(9)),
      s = l(n(114))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, o.Component),
        r(t, [
          {
            key: 'handleBrokenUrl',
            value: function() {
              this.img.style.display = 'none'
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.participant,
                r = t.flagUrl,
                o = t.outcome,
                l = t.event
              return i.default.createElement(
                'div',
                null,
                i.default.createElement(
                  'li',
                  { className: s.default.row },
                  r
                    ? i.default.createElement(
                        'div',
                        {
                          className: s.default.flag,
                          ref: function(t) {
                            e.img = t
                          },
                        },
                        i.default.createElement('img', {
                          role: 'presentation',
                          src: r,
                          onError: function() {
                            return e.handleBrokenUrl()
                          },
                        })
                      )
                    : null,
                  i.default.createElement(
                    'span',
                    { className: s.default.participant },
                    n
                  ),
                  i.default.createElement(
                    'div',
                    { className: s.default.button },
                    i.default.createElement(a.OutcomeButton, {
                      outcome: o,
                      label: !1,
                      outlineStyle: !0,
                      event: l,
                    })
                  )
                )
              )
            },
          },
        ]),
        t
      )
    })()
    t.default = u
  },
  function(e, t, n) {
    var r = n(115)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(3)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(t = e.exports = n(2)(!1)).push([
      e.i,
      '.HlyS56wv8KW5NlPoBKAwu {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 40px;\n  cursor: pointer;\n  list-style: none;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n  .HlyS56wv8KW5NlPoBKAwu .pYcYH5HN3wupsADHT366i {\n    line-height: 1;\n    padding-right: 12px;\n    -webkit-flex-grow: 0;\n            flex-grow: 0;\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0;\n    -webkit-flex-basis: 36px;\n            flex-basis: 36px; }\n    .HlyS56wv8KW5NlPoBKAwu .pYcYH5HN3wupsADHT366i img {\n      width: 24px;\n      height: 24px; }\n  .HlyS56wv8KW5NlPoBKAwu ._3G9o31X5qir5V8IlatdsnH {\n    font-size: 14px;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0;\n    -webkit-flex-basis: auto;\n            flex-basis: auto;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    display: block;\n    max-width: 110px;\n    padding-right: 2px; }\n    @media screen and (min-width: 768px) {\n      .HlyS56wv8KW5NlPoBKAwu ._3G9o31X5qir5V8IlatdsnH {\n        max-width: 140px; } }\n  .HlyS56wv8KW5NlPoBKAwu ._3suVQfSdqoWgYy9YOP-Sdo {\n    -webkit-flex-grow: 0;\n            flex-grow: 0;\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0;\n    -webkit-flex-basis: 60px;\n            flex-basis: 60px;\n    display: -webkit-flex;\n    display: flex;\n    height: 36px; }\n',
      '',
    ]),
      (t.locals = {
        row: 'HlyS56wv8KW5NlPoBKAwu',
        flag: 'pYcYH5HN3wupsADHT366i',
        participant: '_3G9o31X5qir5V8IlatdsnH',
        button: '_3suVQfSdqoWgYy9YOP-Sdo',
      })
  },
])
