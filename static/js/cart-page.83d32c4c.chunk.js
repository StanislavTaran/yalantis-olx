(this["webpackJsonpyalantis-olx"]=this["webpackJsonpyalantis-olx"]||[]).push([[0],{224:function(t,e,n){t.exports={container:"ProductCardBig_container__3TTZS",link:"ProductCardBig_link__1YHPA"}},225:function(t,e,n){t.exports={button:"CountButton_button__3cvVv"}},226:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var c=n(0),r=n.n(c),a=n(101),o=n(102),u=n(8),i=n(92),l=n(40),d=n(55),s=n(6),m=n(30),C=n(224),b=n.n(C),f=n(132),E=n(225),P=n.n(E);function h(t){var e=t.onClick,n=t.children,c=t.overStyle;return r.a.createElement("button",{onClick:e,className:c||P.a.button},n)}h.defaultProps={onClick:function(){return null}};var p=n(93),v=n(46);function O(t){var e=t.product,n=t.children,c=t.isInCart,a=t.quantity,o=t.handleProductIncrement,u=t.handleProductDecrement,i=t.handleAddProductToCart,l=t.handleRemoveProductFromCart,d=t.handleEditClick,s=t.isOwnProduct,m=t.withCountButtons,C=t.totalPrice;return r.a.createElement("div",{className:b.a.container},r.a.createElement("div",null,r.a.createElement(f.a,{product:e}),n,s?r.a.createElement(v.a,{onClick:d},"Edit Product"):r.a.createElement("div",null,c?r.a.createElement(r.a.Fragment,null,m?r.a.createElement("div",null,"Quantity in cart : ",r.a.createElement(h,{onClick:u},"-")," ",a," ",r.a.createElement(h,{onClick:o},"+"),r.a.createElement(p.a,{text:"Price for ".concat(a," units : ").concat(C)})):null,r.a.createElement(v.a,{onClick:l},"Remove from cart")):r.a.createElement(v.a,{onClick:i,type:"submit"},"Add to cart"))))}O.defaultProps={withCountButtons:!1,isInCart:!1};function _(t){var e=t.product,n=t.withCountButtons,c=t.children,C=Object(u.useSelector)(i.b),b=Object(u.useSelector)(i.a),f=Object(u.useDispatch)(),E=Object(a.a)(e.id,C),P=b[e.id]&&b[e.id].quantity||0,h=Object(u.useSelector)(Object(l.c)(e)),p=b[e.id]&&function(t){return Object(o.a)(Object(a.b)(0,t))}(b[e.id]);return r.a.createElement(O,{product:e,isInCart:E,quantity:P,handleProductIncrement:function(){return f(Object(d.c)(e.id))},handleProductDecrement:function(){return f(Object(d.b)(e.id))},handleAddProductToCart:function(){return f(Object(d.a)(e))},handleRemoveProductFromCart:function(){return f(Object(d.d)(e.id))},handleEditClick:function(){f(Object(s.s)(e)),f(Object(m.d)(!0))},isOwnProduct:h,totalPrice:p,withCountButtons:n,children:c})}},227:function(t,e,n){t.exports={list:"ProductListCart_list__2oeNS",item:"ProductListCart_item__184Nc",container:"ProductListCart_container__3I0GF"}},229:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var c=n(0),r=n.n(c),a=n(92),o=n(8),u=n(227),i=n.n(u),l=n(226),d=n(46);function s(t){var e=t.products,n=t.totalPrice;return r.a.createElement("div",{className:i.a.container},r.a.createElement("ul",{className:i.a.list},e.map((function(t){return r.a.createElement("li",{className:i.a.item,key:t.id},r.a.createElement(l.a,{product:t,withCountButtons:!0}))}))),n>0?r.a.createElement(d.a,{type:"submit"},"Place your order ".concat(n)," "):r.a.createElement("h2",null,"Your cart is empty now..."))}function m(){var t=Object(o.useSelector)(a.c),e=Object(o.useSelector)(a.d);return r.a.createElement(s,{products:t,totalPrice:e})}function C(){return r.a.createElement("section",null,r.a.createElement(m,null))}}}]);
//# sourceMappingURL=cart-page.83d32c4c.chunk.js.map