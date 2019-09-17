!function(m,W){"use strict";var d="ht",Y=m[d],D="innerHTML",$="className",t=null,g="px",G=Y.Default,o=G.getInternal(),v="0",C=function(){return document},s=function(r){return C().createElement(r)},Q=function(){return s("canvas")},O=function(M,w,V){M.style.setProperty(w,V,t)},N=function(f,n,j){G.def(Y.widget[f],n,j)},S=function(X,P){X.appendChild(P)},j=function(Y,I){Y.removeChild(I)},U=o.addEventListener,I=o.removeEventListener,P=G.isTouchable;o.addMethod(G,{menuLabelFont:(P?"16":"13")+"px arial, sans-serif",menuLabelColor:"#000",menuBackground:"#F0EFEE",menuHoverBackground:"#648BFE",menuHoverLabelColor:"#fff",menuSeparatorWidth:1,menuSeparatorColor:"#999"},!0),Y.widget.Menu=function(y){var H=this,l=H._view=o.createView(null,H),g=H.$1g=new Y.widget.ContextMenu,h=s("ul");g._r=!0,g._view[$]+=" ht-widget-dropdownmenu",l[$]="ht-widget-menu",h[$]="header",O(l,"margin",v),O(l,"padding",v),O(l,"background",G.menuBackground),O(l,"-webkit-user-select","none"),O(l,"-moz-user-select","none"),O(l,"user-select","none"),O(l,"text-align","left"),O(l,"border-bottom",G.menuSeparatorWidth+"px solid "+G.menuSeparatorColor),O(l,"cursor","default"),O(l,"overflow","auto"),O(l,"white-space","nowrap"),O(l,"font",G.menuLabelFont),O(l,"color",G.menuLabelColor),O(l,"box-sizing","border-box"),O(l,"-moz-box-sizing","border-box"),O(h,"list-style","none"),O(h,"margin",v),O(h,"padding",v),O(h,"display","inline-block"),S(l,h),H.setItems(y),H.$2g=function($){H.$3g($)},H.$4g=function(Z){H.$5g(Z)},H.$6g=function(a){H.$7g(a)},H.$8g=function(B){H.$9g(B)},H.$9b=function(M){H.$10g(M)},H._autoShow=!0,H.setAutoShow(!1),g.afterHide=function(){H.$11g()},g.afterShow=function(){H.$12g()},I(C(),"keydown",g.$3b),H.$3b=function(U){H.$13g(U)},H.invalidate()},N("Menu",W,{_items:t,$14g:G.menuHoverBackground,$15g:G.menuHoverLabelColor,$16g:{},_enableGlobalKey:!1,ms_v:1,$21g:"smallicons",$22g:0,$23g:0,$24g:"left",getDropDownMenu:function(){return this.$1g},setLayout:function(j){var P=this;if(P.$21g=j,P.setItems(P._items),"largeicons"===j){for(var n=P._view.querySelectorAll(".header-item"),M=0,k=0;k<n.length;k++){var c=n[k];M=Math.max(M,c.clientWidth)}for(var k=0;k<n.length;k++){var c=n[k];O(c,"min-width",M+g)}}this.invalidate()},getLayout:function(){return this.$21g},setHeaderItemHGap:function(b){this.$22g=b;for(var W=this._view.querySelectorAll(".header-item"),d=0;d<W.length;d++){var H=W[d];O(H,"margin-left",b+g),O(H,"margin-right",b+g)}},getHeaderItemHGap:function(){return this.$22g},setHeaderItemVGap:function(K){this.$23g=K;for(var M=this._view.querySelectorAll(".header-item"),c=0;c<M.length;c++){var V=M[c];O(V,"margin-top",K+g),O(V,"margin-bottom",K+g)}},getHeaderItemVGap:function(){return this.$24g},setHeaderItemAlign:function(E){this.$24g=E,O(this._view,"text-align",E)},getHeaderItemAlign:function(){return this.$23g},enableGlobalKey:function(){var Q=this,x=Q._enableGlobalKey;x===!1&&(U(C(),"keydown",Q.$3b),Q._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,I(C(),"keydown",this.$3b)},setHoverBackground:function(C){this.$14g=C},setHoverColor:function(J){this.$15g=J},setItems:function(f){var q=this,u=q._view,N=q.$21g;if(q._items=f,u.children[0][D]="",q.$16g={},f&&f.length){for(var P=u.children[0],z=0,t=C().createDocumentFragment();z<f.length;z++){var g=f[z],G=s("li"),p=s("span");if(g.icon){var B=Q();B[$]="menu-item-icon","smallicons"===N?(O(B,"height","1.2em"),O(B,"width","1.2em"),O(B,"vertical-align","middle")):(O(B,"height","32px"),O(B,"width","32px"),O(B,"display","block"),O(B,"margin","0 auto")),B.$20g=g.icon,S(G,B)}G[$]="header-item",O(G,"display","inline-block"),O(G,"vertical-align","top"),O(G,"padding","0 1.2em"),O(G,"line-height","1.8em"),"largeicons"===N&&O(G,"text-align","center"),O(G,"background-color","rgba(0,0,0,0)"),G.setAttribute("data-index",z),q.$16g[z]=g.items,p[D]=g.label,"iconsonly"!==N&&S(G,p),S(t,G)}S(P,t)}},showDropdownMenu:function(X){var D=this,A=D.$16g[X],S=D.$1g,O=D._view.children[0].children[X],j=D.$17g;if(O&&O!==j){j&&D.hideDropdownMenu();var r=O.getBoundingClientRect(),Y=G.getWindowInfo();D.$17g=O,S.setItems(A),S.show(r.left+Y.left,r.top+r.height+Y.top,!1)}},hideDropdownMenu:function(){this.$1g.hide()},getItemByProperty:function(y,r){var J=this,G=J._items;return G&&0!==G.length?J.$1g.getItemByProperty(y,r,G):t},$12g:function(){var F=this,c=F.$17g;c.style.background=F.$14g,c.style.color=F.$15g,F._autoShow||U(C(),P?"touchstart":"mousedown",F.$9b)},$11g:function(){var L=this,W=L.$17g;W&&(W.style.background="",W.style.color="",L.$17g=t),I(C(),P?"touchstart":"mousedown",L.$9b)},$10g:function(f){var g=this,G=g._view,h=g.$1g,V=G.children[0];!C().body.contains(G)||V.contains(f.target)||h._view.contains(f.target)||g.hideDropdownMenu()},$13g:function(T){var J=this,p=J.$1g;C().body.contains(J._view)&&p.$13b.$4b.call(p.$13b,T,J._items)},setAutoShow:function(p){var M=this,z=M.$1g,c=M._view;M._autoShow!==p&&(M._autoShow?(I(c,"mouseover",M.$2g),I(c,"mouseout",M.$4g),I(z._view,"mouseout",M.$4g),P||(U(c,"mouseover",M.$8g),U(c,"mouseout",M.$8g)),U(c,P?"touchstart":"mousedown",M.$6g)):(I(c,"mouseover",M.$8g),I(c,"mouseout",M.$8g),I(c,P?"touchstart":"mousedown",M.$6g),I(C(),P?"touchstart":"mousedown",M.$9b),P||(U(c,"mouseover",M.$2g),U(c,"mouseout",M.$4g),U(z._view,"mouseout",M.$4g))),M._autoShow=p)},$3g:function(q){var o=this,I=o._view.children[0],u=q.target;if(I!==u&&I.contains(u)){for(;"header-item"!==u[$];)u=u.parentNode;o.showDropdownMenu(u.getAttribute("data-index"))}},$5g:function(h){var n=this,w=n._view.children[0],S=n.$1g,i=h.target,I=h.relatedTarget;!w.contains(i)&&!S._view.contains(i)||w.contains(I)||S._view.contains(I)||n.hideDropdownMenu()},$7g:function(C){C.preventDefault();var m=this,o=m._view.children[0],T=m.$1g,W=C.target;if(G.isLeftButton(C)&&o!==W&&o.contains(W))if(P){for(;"header-item"!==W[$];)W=W.parentNode;var v=W.getAttribute("data-index"),T=m.$1g,X=m._view.children[0].children[v],u=m.$17g;T.isShowing()&&m.hideDropdownMenu(),X!==u&&m.showDropdownMenu(v)}else if(T.isShowing())m.hideDropdownMenu();else{for(;"header-item"!==W[$];)W=W.parentNode;m.showDropdownMenu(W.getAttribute("data-index"))}},$9g:function(E){var g=this,z=g._view,D=g.$1g,M=E.target;if(z.contains(M)){for(var v=z.querySelectorAll(".header-item"),B=t,K=0;K<v.length;K++){var J=v[K];J.style.background="",J.style.color="","mouseover"===E.type?J.contains(M)&&(B=J):"mouseout"===E.type&&D.isShowing()&&g.$17g===J&&(B=J)}D.isShowing()&&(B||(B=g.$17g),g.showDropdownMenu(B.getAttribute("data-index"))),B&&(B.style.background=g.$14g,B.style.color=g.$15g)}},getShowingMenuIndex:function(){var S=this.$17g;return S?S.getAttribute("data-index"):-1},addTo:function(d){var n=this,c=n._view;S(d,c),n.invalidate()},dispose:function(){var $=this,V=$._view,x=$.$1g;V&&($._autoShow?(I(V,"mouseover",$.$2g),I(V,"mouseout",$.$4g),I(x._view,"mouseout",$.$4g)):(I(V,"mouseover",$.$8g),I(V,"mouseout",$.$8g),I(V,P?"touchstart":"mousedown",$.$6g),I(C(),P?"touchstart":"mousedown",$.$9b)),I(C(),"keydown",$.$3b),x.dispose(),V.parentNode&&j(V.parentNode,V),$._view=$.$1g=$.$16g=$._items=$.$17g=$.$2g=$.$4g=$.$6g=$.$8g=$.$9b=$.$3b=t)},$19g:function(q,d,l,v){var Z=o.initContext(q);o.translateAndScale(Z,0,0,1),Z.clearRect(0,0,l,v),G.drawStretchImage(Z,G.getImage(d),"fill",0,0,l,v),Z.restore()},validateImpl:function(){var x,t,f,E=this,g=E._view,W=g.querySelectorAll(".menu-item-icon");for(f=0;f<W.length;f++){var w=W[f];x=w.clientWidth,t=w.clientHeight,x&&t&&(o.setCanvas(w,x,t),E.$19g(w,G.getImage(w.$20g),x,t))}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);