_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    '8OQS': function (e, t) {
      ;(e.exports = function (e, t) {
        if (null == e) return {}
        var a,
          n,
          r = {},
          c = Object.keys(e)
        for (n = 0; n < c.length; n++)
          (a = c[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
        return r
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    MPSb: function (e, t, a) {
      'use strict'
      var n = a('pVnL'),
        r = a.n(n),
        c = a('TSYQ'),
        i = a.n(c),
        l = (a('17x9'), a('q1tI')),
        s = a.n(l),
        o = a('ICNK'),
        d = a('Y53p'),
        u = a('H+2d'),
        p = a('ZeOK'),
        b = a('MZgk')
      function m(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('header', a),
          l = Object(o.a)(m, e),
          p = Object(d.a)(m, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(m.handledProps = ['as', 'children', 'className', 'content']),
        (m.propTypes = {}),
        (m.create = Object(b.d)(m, function (e) {
          return { content: e }
        }))
      var f = m
      function O(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('description', a),
          l = Object(o.a)(O, e),
          p = Object(d.a)(O, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(O.handledProps = ['as', 'children', 'className', 'content']),
        (O.propTypes = {}),
        (O.create = Object(b.d)(O, function (e) {
          return { content: e }
        }))
      var j = O
      function v(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('extra', a),
          l = Object(o.a)(v, e),
          p = Object(d.a)(v, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(v.handledProps = ['as', 'children', 'className', 'content']),
        (v.propTypes = {}),
        (v.create = Object(b.d)(v, function (e) {
          return { content: e }
        }))
      var h = v
      function N(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('meta', a),
          l = Object(o.a)(N, e),
          p = Object(d.a)(N, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(N.handledProps = ['as', 'children', 'className', 'content']),
        (N.propTypes = {}),
        (N.create = Object(b.d)(N, function (e) {
          return { content: e }
        }))
      var g = N
      function y(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          l = e.extra,
          b = e.header,
          m = e.meta,
          O = e.verticalAlign,
          v = i()(Object(p.f)(O), 'content', a),
          N = Object(o.a)(y, e),
          x = Object(d.a)(y, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              x,
              r()({}, N, { className: v }),
              f.create(b, { autoGenerateKey: !1 }),
              g.create(m, { autoGenerateKey: !1 }),
              j.create(c, { autoGenerateKey: !1 }),
              h.create(l, { autoGenerateKey: !1 }),
              n
            )
          : s.a.createElement(x, r()({}, N, { className: v }), t)
      }
      ;(y.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'meta',
        'verticalAlign',
      ]),
        (y.propTypes = {})
      var x = y,
        P = a('QILm'),
        w = a.n(P),
        E = a('3WF5'),
        k = a.n(E)
      function T(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.divided,
          l = e.items,
          b = e.link,
          m = e.relaxed,
          f = e.unstackable,
          O = i()(
            'ui',
            Object(p.a)(c, 'divided'),
            Object(p.a)(b, 'link'),
            Object(p.a)(f, 'unstackable'),
            Object(p.b)(m, 'relaxed'),
            'items',
            a
          ),
          j = Object(o.a)(T, e),
          v = Object(d.a)(T, e)
        if (!u.b.isNil(t))
          return s.a.createElement(v, r()({}, j, { className: O }), t)
        if (!u.b.isNil(n))
          return s.a.createElement(v, r()({}, j, { className: O }), n)
        var h = k()(l, function (e) {
          var t = e.childKey,
            a = w()(e, ['childKey']),
            n = t || [a.content, a.description, a.header, a.meta].join('-')
          return s.a.createElement(K, r()({}, a, { key: n }))
        })
        return s.a.createElement(v, r()({}, j, { className: O }), h)
      }
      ;(T.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'divided',
        'items',
        'link',
        'relaxed',
        'unstackable',
      ]),
        (T.propTypes = {})
      var A = T,
        C = a('5XkN')
      function S(e) {
        var t = e.size,
          a = Object(o.a)(S, e)
        return s.a.createElement(
          C.a,
          r()({}, a, { size: t, ui: !!t, wrapped: !0 })
        )
      }
      ;(S.handledProps = ['size']),
        (S.propTypes = {}),
        (S.create = Object(b.d)(S, function (e) {
          return { src: e }
        }))
      var I = S
      function _(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          l = e.extra,
          p = e.header,
          b = e.image,
          m = e.meta,
          f = i()('item', a),
          O = Object(o.a)(_, e),
          j = Object(d.a)(_, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              j,
              r()({}, O, { className: f }),
              I.create(b, { autoGenerateKey: !1 }),
              s.a.createElement(x, {
                content: n,
                description: c,
                extra: l,
                header: p,
                meta: m,
              })
            )
          : s.a.createElement(j, r()({}, O, { className: f }), t)
      }
      ;(_.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'image',
        'meta',
      ]),
        (_.Content = x),
        (_.Description = j),
        (_.Extra = h),
        (_.Group = A),
        (_.Header = f),
        (_.Image = I),
        (_.Meta = g),
        (_.propTypes = {})
      var K = (t.a = _)
    },
    Mt1y: function (e, t, a) {
      'use strict'
      var n = a('pVnL'),
        r = a.n(n),
        c = a('TSYQ'),
        i = a.n(c),
        l = (a('17x9'), a('q1tI')),
        s = a.n(l),
        o = a('ZeOK'),
        d = a('ICNK'),
        u = a('Y53p'),
        p = a('H+2d')
      function b(e) {
        var t = e.children,
          a = e.className,
          n = e.clearing,
          c = e.content,
          l = e.fitted,
          m = e.hidden,
          f = e.horizontal,
          O = e.inverted,
          j = e.section,
          v = e.vertical,
          h = i()(
            'ui',
            Object(o.a)(n, 'clearing'),
            Object(o.a)(l, 'fitted'),
            Object(o.a)(m, 'hidden'),
            Object(o.a)(f, 'horizontal'),
            Object(o.a)(O, 'inverted'),
            Object(o.a)(j, 'section'),
            Object(o.a)(v, 'vertical'),
            'divider',
            a
          ),
          N = Object(d.a)(b, e),
          g = Object(u.a)(b, e)
        return s.a.createElement(
          g,
          r()({}, N, { className: h }),
          p.b.isNil(t) ? c : t
        )
      }
      ;(b.handledProps = [
        'as',
        'children',
        'className',
        'clearing',
        'content',
        'fitted',
        'hidden',
        'horizontal',
        'inverted',
        'section',
        'vertical',
      ]),
        (b.propTypes = {}),
        (t.a = b)
    },
    QILm: function (e, t, a) {
      var n = a('8OQS')
      ;(e.exports = function (e, t) {
        if (null == e) return {}
        var a,
          r,
          c = n(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (a = i[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (c[a] = e[a]))
        }
        return c
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    SqSx: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/product/[id]',
        function () {
          return a('nt2N')
        },
      ])
    },
    nt2N: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, '__N_SSG', function () {
          return Ce
        })
      var n = a('q1tI'),
        r = a.n(n),
        c = a('pdCo'),
        i = a('MPSb'),
        l = a('MqQV'),
        s = a('o0o1'),
        o = a.n(s)
      function d(e, t, a, n, r, c, i) {
        try {
          var l = e[c](i),
            s = l.value
        } catch (o) {
          return void a(o)
        }
        l.done ? t(s) : Promise.resolve(s).then(n, r)
      }
      var u = a('pVnL'),
        p = a.n(u),
        b = a('J4zp'),
        m = a.n(b),
        f = a('MVZn'),
        O = a.n(f),
        j = a('lwsE'),
        v = a.n(j),
        h = a('W8MJ'),
        N = a.n(h),
        g = a('a1gu'),
        y = a.n(g),
        x = a('Nsbk'),
        P = a.n(x),
        w = a('PJYZ'),
        E = a.n(w),
        k = a('7W2i'),
        T = a.n(k),
        A = a('lSNA'),
        C = a.n(A),
        S = a('ijCd'),
        I = a.n(S),
        _ = a('3WF5'),
        K = a.n(_),
        R = a('Og4/'),
        z = a.n(R),
        M = a('mwIZ'),
        G = a.n(M),
        Q = a('J2iB'),
        Z = a.n(Q),
        H = a('Z4ph'),
        L = a('TSYQ'),
        Y = a.n(L),
        J = (a('17x9'), a('ICNK')),
        W = a('526f'),
        q = a('ZeOK'),
        F = a('Y53p'),
        B = a('H+2d'),
        D = a('MZgk'),
        V = a('QetY'),
        X = a('D1pA'),
        U = (function (e) {
          function t() {
            var e, a
            v()(this, t)
            for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++)
              c[i] = arguments[i]
            return (
              (a = y()(this, (e = P()(t)).call.apply(e, [this].concat(c)))),
              C()(E()(a), 'inputRef', Object(n.createRef)()),
              C()(E()(a), 'computeIcon', function () {
                var e = a.props,
                  t = e.loading,
                  n = e.icon
                return Z()(n) ? (t ? 'spinner' : void 0) : n
              }),
              C()(E()(a), 'computeTabIndex', function () {
                var e = a.props,
                  t = e.disabled,
                  n = e.tabIndex
                return Z()(n) ? (t ? -1 : void 0) : n
              }),
              C()(E()(a), 'focus', function () {
                return a.inputRef.current.focus()
              }),
              C()(E()(a), 'select', function () {
                return a.inputRef.current.select()
              }),
              C()(E()(a), 'handleChange', function (e) {
                var t = G()(e, 'target.value')
                z()(a.props, 'onChange', e, O()({}, a.props, { value: t }))
              }),
              C()(E()(a), 'handleChildOverrides', function (e, t) {
                return O()({}, t, e.props, {
                  ref: function (t) {
                    Object(H.a)(e.ref, t), (a.inputRef.current = t)
                  },
                })
              }),
              C()(E()(a), 'partitionProps', function () {
                var e = a.props,
                  n = e.disabled,
                  r = e.type,
                  c = a.computeTabIndex(),
                  i = Object(J.a)(t, a.props),
                  l = Object(W.b)(i),
                  s = m()(l, 2),
                  o = s[0],
                  d = s[1]
                return [
                  O()({}, o, {
                    disabled: n,
                    type: r,
                    tabIndex: c,
                    onChange: a.handleChange,
                    ref: a.inputRef,
                  }),
                  d,
                ]
              }),
              a
            )
          }
          return (
            T()(t, e),
            N()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    a = this.props,
                    c = a.action,
                    i = a.actionPosition,
                    s = a.children,
                    o = a.className,
                    d = a.disabled,
                    u = a.error,
                    b = a.fluid,
                    f = a.focus,
                    O = a.icon,
                    j = a.iconPosition,
                    v = a.input,
                    h = a.inverted,
                    N = a.label,
                    g = a.labelPosition,
                    y = a.loading,
                    x = a.size,
                    P = a.transparent,
                    w = a.type,
                    E = Y()(
                      'ui',
                      x,
                      Object(q.a)(d, 'disabled'),
                      Object(q.a)(u, 'error'),
                      Object(q.a)(b, 'fluid'),
                      Object(q.a)(f, 'focus'),
                      Object(q.a)(h, 'inverted'),
                      Object(q.a)(y, 'loading'),
                      Object(q.a)(P, 'transparent'),
                      Object(q.e)(i, 'action') || Object(q.a)(c, 'action'),
                      Object(q.e)(j, 'icon') || Object(q.a)(O || y, 'icon'),
                      Object(q.e)(g, 'labeled') || Object(q.a)(N, 'labeled'),
                      'input',
                      o
                    ),
                    k = Object(F.a)(t, this.props),
                    T = this.partitionProps(),
                    A = m()(T, 2),
                    C = A[0],
                    S = A[1]
                  if (!B.b.isNil(s)) {
                    var _ = K()(n.Children.toArray(s), function (t) {
                      return 'input' !== t.type
                        ? t
                        : Object(n.cloneElement)(
                            t,
                            e.handleChildOverrides(t, C)
                          )
                    })
                    return r.a.createElement(k, p()({}, S, { className: E }), _)
                  }
                  var R = V.a.create(c, { autoGenerateKey: !1 }),
                    z = l.a.create(N, {
                      defaultProps: {
                        className: Y()('label', I()(g, 'corner') && g),
                      },
                      autoGenerateKey: !1,
                    })
                  return r.a.createElement(
                    k,
                    p()({}, S, { className: E }),
                    'left' === i && R,
                    'right' !== g && z,
                    Object(D.a)(v || w, {
                      defaultProps: C,
                      autoGenerateKey: !1,
                    }),
                    X.a.create(this.computeIcon(), { autoGenerateKey: !1 }),
                    'left' !== i && R,
                    'right' === g && z
                  )
                },
              },
            ]),
            t
          )
        })(n.Component)
      C()(U, 'defaultProps', { type: 'text' }),
        C()(U, 'handledProps', [
          'action',
          'actionPosition',
          'as',
          'children',
          'className',
          'disabled',
          'error',
          'fluid',
          'focus',
          'icon',
          'iconPosition',
          'input',
          'inverted',
          'label',
          'labelPosition',
          'loading',
          'onChange',
          'size',
          'tabIndex',
          'transparent',
          'type',
        ]),
        (U.propTypes = {}),
        (U.create = Object(D.d)(U, function (e) {
          return { type: e }
        }))
      var $ = U,
        ee = a('+lUf'),
        te = a('laJZ'),
        ae = r.a.createElement,
        ne = function (e) {
          var t = ''
          return e < 1 && (t = "Can't be blank"), t
        },
        re = function (e) {
          var t = e.product,
            a = Object(n.useState)(!1),
            c = a[0],
            i = a[1],
            l = Object(n.useState)(''),
            s = l[0],
            u = l[1],
            p = Object(n.useState)(1),
            b = p[0],
            m = p[1],
            f = Object(n.useState)(!1),
            O = f[0],
            j = f[1],
            v = Object(te.c)().addToCart,
            h = (function () {
              var e,
                a =
                  ((e = o.a.mark(function e() {
                    var a
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(a = ne(b)),
                              u(a),
                              a ||
                                (i(!0),
                                new Promise(function (e, t) {
                                  window.setTimeout(e, 600)
                                })
                                  .then(function () {
                                    v(t, b),
                                      i(!1),
                                      m(b),
                                      j(!0),
                                      setTimeout(function () {
                                        j(!1)
                                      }, 1e3)
                                  })
                                  .catch(function (e) {
                                    u('Error: '.concat(e) || !1), i(!1)
                                  }))
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })),
                  function () {
                    var t = this,
                      a = arguments
                    return new Promise(function (n, r) {
                      var c = e.apply(t, a)
                      function i(e) {
                        d(c, n, r, i, l, 'next', e)
                      }
                      function l(e) {
                        d(c, n, r, i, l, 'throw', e)
                      }
                      i(void 0)
                    })
                  })
              return function () {
                return a.apply(this, arguments)
              }
            })()
          return ae(
            r.a.Fragment,
            null,
            ae($, {
              type: 'number',
              placeholder: 'Quantity',
              value: b,
              min: 1,
              step: 1,
              error: !!s,
              onChange: function (e) {
                var t = e.target
                return m(parseInt(t.value, 10))
              },
              action: {
                color: 'green',
                content: 'Add to Cart',
                icon: 'plus cart',
                onClick: h,
                loading: c,
                disabled: c,
              },
            }),
            s &&
              ae('div', { style: { color: 'red', position: 'absolute' } }, s),
            ae(
              ee.a,
              { duration: { hide: 500, show: 500 }, visible: O },
              ae(
                'div',
                { style: { color: 'green', position: 'absolute' } },
                ae(X.a, { name: 'check' }),
                'Added to cart'
              )
            )
          )
        },
        ce = a('Ff2n'),
        ie = a('MX0m'),
        le = a.n(ie),
        se = a('aQu0'),
        oe = a('Mt1y')
      a('Wt1U')
      function de(e) {
        var t = e.children,
          a = e.className,
          n = Y()(a),
          c = Object(J.a)(de, e),
          i = Object(F.a)(de, e)
        return r.a.createElement(i, p()({}, c, { className: n }), t)
      }
      ;(de.handledProps = ['as', 'children', 'className']),
        (de.defaultProps = { as: 'tbody' }),
        (de.propTypes = {})
      var ue = de
      function pe(e) {
        var t = e.active,
          a = e.children,
          n = e.className,
          c = e.collapsing,
          i = e.content,
          l = e.disabled,
          s = e.error,
          o = e.icon,
          d = e.negative,
          u = e.positive,
          b = e.selectable,
          m = e.singleLine,
          f = e.textAlign,
          O = e.verticalAlign,
          j = e.warning,
          v = e.width,
          h = Y()(
            Object(q.a)(t, 'active'),
            Object(q.a)(c, 'collapsing'),
            Object(q.a)(l, 'disabled'),
            Object(q.a)(s, 'error'),
            Object(q.a)(d, 'negative'),
            Object(q.a)(u, 'positive'),
            Object(q.a)(b, 'selectable'),
            Object(q.a)(m, 'single line'),
            Object(q.a)(j, 'warning'),
            Object(q.d)(f),
            Object(q.f)(O),
            Object(q.g)(v, 'wide'),
            n
          ),
          N = Object(J.a)(pe, e),
          g = Object(F.a)(pe, e)
        return B.b.isNil(a)
          ? r.a.createElement(g, p()({}, N, { className: h }), X.a.create(o), i)
          : r.a.createElement(g, p()({}, N, { className: h }), a)
      }
      ;(pe.handledProps = [
        'active',
        'as',
        'children',
        'className',
        'collapsing',
        'content',
        'disabled',
        'error',
        'icon',
        'negative',
        'positive',
        'selectable',
        'singleLine',
        'textAlign',
        'verticalAlign',
        'warning',
        'width',
      ]),
        (pe.defaultProps = { as: 'td' }),
        (pe.propTypes = {}),
        (pe.create = Object(D.d)(pe, function (e) {
          return { content: e }
        }))
      var be = pe
      function me(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.fullWidth,
          i = Y()(Object(q.a)(c, 'full-width'), a),
          l = Object(J.a)(me, e),
          s = Object(F.a)(me, e)
        return r.a.createElement(
          s,
          p()({}, l, { className: i }),
          B.b.isNil(t) ? n : t
        )
      }
      ;(me.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'fullWidth',
      ]),
        (me.defaultProps = { as: 'thead' }),
        (me.propTypes = {})
      var fe = me
      function Oe(e) {
        var t = e.as,
          a = Object(J.a)(Oe, e)
        return r.a.createElement(fe, p()({}, a, { as: t }))
      }
      ;(Oe.handledProps = ['as']),
        (Oe.propTypes = {}),
        (Oe.defaultProps = { as: 'tfoot' })
      var je = Oe
      function ve(e) {
        var t = e.as,
          a = e.className,
          n = e.sorted,
          c = Y()(Object(q.e)(n, 'sorted'), a),
          i = Object(J.a)(ve, e)
        return r.a.createElement(be, p()({}, i, { as: t, className: c }))
      }
      ;(ve.handledProps = ['as', 'className', 'sorted']),
        (ve.propTypes = {}),
        (ve.defaultProps = { as: 'th' })
      var he = ve
      function Ne(e) {
        var t = e.active,
          a = e.cellAs,
          n = e.cells,
          c = e.children,
          i = e.className,
          l = e.disabled,
          s = e.error,
          o = e.negative,
          d = e.positive,
          u = e.textAlign,
          b = e.verticalAlign,
          m = e.warning,
          f = Y()(
            Object(q.a)(t, 'active'),
            Object(q.a)(l, 'disabled'),
            Object(q.a)(s, 'error'),
            Object(q.a)(o, 'negative'),
            Object(q.a)(d, 'positive'),
            Object(q.a)(m, 'warning'),
            Object(q.d)(u),
            Object(q.f)(b),
            i
          ),
          O = Object(J.a)(Ne, e),
          j = Object(F.a)(Ne, e)
        return B.b.isNil(c)
          ? r.a.createElement(
              j,
              p()({}, O, { className: f }),
              K()(n, function (e) {
                return be.create(e, { defaultProps: { as: a } })
              })
            )
          : r.a.createElement(j, p()({}, O, { className: f }), c)
      }
      ;(Ne.handledProps = [
        'active',
        'as',
        'cellAs',
        'cells',
        'children',
        'className',
        'disabled',
        'error',
        'negative',
        'positive',
        'textAlign',
        'verticalAlign',
        'warning',
      ]),
        (Ne.defaultProps = { as: 'tr', cellAs: 'td' }),
        (Ne.propTypes = {}),
        (Ne.create = Object(D.d)(Ne, function (e) {
          return { cells: e }
        }))
      var ge = Ne
      function ye(e) {
        var t = e.attached,
          a = e.basic,
          n = e.celled,
          c = e.children,
          i = e.className,
          l = e.collapsing,
          s = e.color,
          o = e.columns,
          d = e.compact,
          u = e.definition,
          b = e.fixed,
          m = e.footerRow,
          f = e.headerRow,
          O = e.headerRows,
          j = e.inverted,
          v = e.padded,
          h = e.renderBodyRow,
          N = e.selectable,
          g = e.singleLine,
          y = e.size,
          x = e.sortable,
          P = e.stackable,
          w = e.striped,
          E = e.structured,
          k = e.tableData,
          T = e.textAlign,
          A = e.unstackable,
          C = e.verticalAlign,
          S = Y()(
            'ui',
            s,
            y,
            Object(q.a)(n, 'celled'),
            Object(q.a)(l, 'collapsing'),
            Object(q.a)(u, 'definition'),
            Object(q.a)(b, 'fixed'),
            Object(q.a)(j, 'inverted'),
            Object(q.a)(N, 'selectable'),
            Object(q.a)(g, 'single line'),
            Object(q.a)(x, 'sortable'),
            Object(q.a)(P, 'stackable'),
            Object(q.a)(w, 'striped'),
            Object(q.a)(E, 'structured'),
            Object(q.a)(A, 'unstackable'),
            Object(q.b)(t, 'attached'),
            Object(q.b)(a, 'basic'),
            Object(q.b)(d, 'compact'),
            Object(q.b)(v, 'padded'),
            Object(q.d)(T),
            Object(q.f)(C),
            Object(q.g)(o, 'column'),
            'table',
            i
          ),
          I = Object(J.a)(ye, e),
          _ = Object(F.a)(ye, e)
        if (!B.b.isNil(c))
          return r.a.createElement(_, p()({}, I, { className: S }), c)
        var R = { defaultProps: { cellAs: 'th' } },
          z =
            (f || O) &&
            r.a.createElement(
              fe,
              null,
              ge.create(f, R),
              K()(O, function (e) {
                return ge.create(e, R)
              })
            )
        return r.a.createElement(
          _,
          p()({}, I, { className: S }),
          z,
          r.a.createElement(
            ue,
            null,
            h &&
              K()(k, function (e, t) {
                return ge.create(h(e, t))
              })
          ),
          m && r.a.createElement(je, null, ge.create(m))
        )
      }
      ;(ye.handledProps = [
        'as',
        'attached',
        'basic',
        'celled',
        'children',
        'className',
        'collapsing',
        'color',
        'columns',
        'compact',
        'definition',
        'fixed',
        'footerRow',
        'headerRow',
        'headerRows',
        'inverted',
        'padded',
        'renderBodyRow',
        'selectable',
        'singleLine',
        'size',
        'sortable',
        'stackable',
        'striped',
        'structured',
        'tableData',
        'textAlign',
        'unstackable',
        'verticalAlign',
      ]),
        (ye.defaultProps = { as: 'table' }),
        (ye.propTypes = {}),
        (ye.Body = ue),
        (ye.Cell = be),
        (ye.Footer = je),
        (ye.Header = fe),
        (ye.HeaderCell = he),
        (ye.Row = ge)
      var xe = ye,
        Pe = ['description'],
        we = r.a.createElement,
        Ee = function (e) {
          var t = e.description,
            a = Object(ce.a)(e, Pe)
          return we(
            'section',
            { className: 'jsx-4249965129 container' },
            we(se.a, { as: 'h3' }, 'About this avocado'),
            we('p', { className: 'jsx-4249965129' }, t),
            we(oe.a, null),
            we(
              xe,
              { celled: !0 },
              we(
                xe.Header,
                null,
                we(
                  xe.Row,
                  null,
                  we(xe.HeaderCell, { colSpan: '2' }, 'Attributes')
                )
              ),
              we(
                xe.Body,
                null,
                Object.keys(a).map(function (e) {
                  return we(
                    xe.Row,
                    { key: e },
                    we(xe.Cell, { className: 'attr-name' }, e),
                    we(xe.Cell, null, a[e])
                  )
                })
              )
            ),
            we(le.a, { id: '4249965129' }, [
              '.container.jsx-4249965129 .attr-name{text-transform:capitalize;}',
            ])
          )
        },
        ke = r.a.createElement,
        Te = function (e) {
          var t = e.product
          return ke(
            r.a.Fragment,
            null,
            ke(
              i.a.Group,
              { as: 'section' },
              ke(
                i.a,
                { style: { alignItems: 'center' } },
                ke(
                  i.a.Image,
                  { size: 'medium' },
                  ke('img', { src: t.image, alt: t.name })
                ),
                ke(
                  i.a.Content,
                  null,
                  ke(i.a.Header, { as: 'h1' }, t.name),
                  ke(
                    i.a.Description,
                    null,
                    ke('p', null, t.price),
                    ke(l.a, null, 'SKU: '.concat(t.sku))
                  ),
                  ke(i.a.Extra, null, ke(re, { product: t }))
                )
              )
            ),
            ke(Ee, t.attributes)
          )
        },
        Ae = r.a.createElement,
        Ce = !0
      t.default = function (e) {
        var t = e.product
        return Ae(c.a, null, null == t ? null : Ae(Te, { product: t }))
      }
    },
    o0o1: function (e, t, a) {
      e.exports = a('ls82')
    },
  },
  [['SqSx', 0, 2, 1, 3, 4]],
])
