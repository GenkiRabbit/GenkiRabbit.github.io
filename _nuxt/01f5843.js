(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{186:function(t,r,e){"use strict";var n=e(2),o=e(88),l=e(30),c=e(9),_=e(19),h=e(89),m=e(57),d=e(42),y=e(14),v=d("splice"),f=y("splice",{ACCESSORS:!0,0:0,1:2}),C=Math.max,x=Math.min;n({target:"Array",proto:!0,forced:!v||!f},{splice:function(t,r){var e,n,d,y,v,f,w=_(this),S=c(w.length),O=o(t,S),j=arguments.length;if(0===j?e=n=0:1===j?(e=0,n=S-O):(e=j-2,n=x(C(l(r),0),S-O)),S+e-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(d=h(w,n),y=0;y<n;y++)(v=O+y)in w&&m(d,y,w[v]);if(d.length=n,e<n){for(y=O;y<S-n;y++)f=y+e,(v=y+n)in w?w[f]=w[v]:delete w[f];for(y=S;y>S-n+e;y--)delete w[y-1]}else if(e>n)for(y=S-n;y>O;y--)f=y+e-1,(v=y+n-1)in w?w[f]=w[v]:delete w[f];for(y=0;y<e;y++)w[y+O]=arguments[y+2];return w.length=S-n+e,d}})},187:function(t,r,e){"use strict";e.r(r);e(31),e(186),e(11),e(58);var n=e(85);var o=e(128);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c={props:{title:{type:String,required:!0},icon:{type:String,required:!0}}},_=e(23),h=Object(_.a)(c,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"column"},[r("div",{staticClass:"card"},[r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title has-text-grey"},[this._v("\n        "+this._s(this.title)+"\n      ")])]),this._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"content has-text-centered"},[r("b-icon",{attrs:{icon:this.icon,size:"is-large",type:"is-primary"}})],1)]),this._v(" "),r("footer",{staticClass:"card-footer"},[r("div",{staticClass:"card-footer-item"},[r("span",[this._t("default")],2)])])])])}),[],!1,null,null,null).exports,m={props:{title:{type:String,required:!0}},data:function(){return{styleObject:{padding:"20px",margin:"20px"}}}},d={name:"HomePage",components:{Card:h,Numbertile:Object(_.a)(m,(function(){var t=this.$createElement,r=this._self._c||t;return r("b-button",{style:this.styleObject,attrs:{type:""}},[r("span",{staticClass:"is-size-1"},[this._v("\n    "+this._s(this.title)+"\n  ")])])}),[],!1,null,null,null).exports},data:function(){for(var t=[],i=0;i<100;i++)t.push({number:i,value:!0,color:"is-primary"});return{game_over:!1,next_number:"Start!",next_random:0,drop_number:0,color_array_100:t,array_100:l(Array(100).keys()).map((function(i){return++i})),dammy1:"dammy1 dayo",status_color:"is-primary",dammy_value:!0}},methods:{greet:function(){this.status_color="is-warning"},color_change:function(i,t,r){r=1!=r,this.color_array_100[10*(i-1)+t-1].value=r,1==this.color_array_100[10*(i-1)+t-1].value?this.color_array_100[10*(i-1)+t-1].color="is-primary":this.color_array_100[10*(i-1)+t-1].color="is-warning"},number_change:function(){this.array_100.length<1?this.game_over=!0:(this.drop_number=Math.floor(Math.random()*this.array_100.length),this.next_random=this.array_100[this.drop_number]-1,this.next_number=this.color_array_100[this.next_random].number+1,this.color_array_100[this.next_random].value=!1,this.color_array_100[this.next_random].color="is-warning",this.array_100.splice(this.drop_number,1))}}},y=Object(_.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticStyle:{"padding-top":"20px"}},[t.game_over?e("section",{staticClass:"hero is-link is-fullheight-with-navbar"},[t._m(0)]):t._e(),t._v(" "),t.game_over?t._e():e("div",{staticClass:"columns is-multiline is-mobile"},[e("div",{staticClass:"column"},t._l(10,(function(i){return e("div",{key:i,staticClass:"columns is-multiline is-mobile"},t._l(10,(function(r){return e("div",{key:r,staticClass:"column is-1"},[e("b-button",{attrs:{type:t.color_array_100[10*(i-1)+r-1].color},on:{click:function(e){t.color_change(i,r,t.color_array_100[10*(i-1)+r-1].value)}}},[t._v("\n         "+t._s(t.color_array_100[10*(i-1)+r-1].number+1)+"\n         ")])],1)})),0)})),0),t._v(" "),e("div",{staticClass:"column is-3"},[e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"column"},[e("b-button",{staticStyle:{"font-size":"70px"},on:{click:function(r){return t.number_change()}}},[t._v("\n          "+t._s(t.next_number)+"\n        ")])],1),t._v(" "),e("div",{staticClass:"column is-7"})])]),t._v(" "),e("div",{staticClass:"column is-2"})])])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("p",{staticClass:"title",staticStyle:{"font-size":"250px"}},[this._v("\n            GAME OVER!\n          ")])])])}],!1,null,null,null);r.default=y.exports}}]);