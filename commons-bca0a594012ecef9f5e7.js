(self.webpackChunkamaechler_github_io=self.webpackChunkamaechler_github_io||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,d;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(d=e.entries();!(c=d.next()).done;)if(!a.has(c.value[0]))return!1;for(d=e.entries();!(c=d.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(d=e.entries();!(c=d.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5414:function(e,t,r){"use strict";r.d(t,{q:function(){return me}});var n,o,i,a,s=r(5697),c=r.n(s),l=r(4839),d=r.n(l),p=r(2993),u=r.n(p),f=r(7294),g=r(6494),m=r.n(g),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),S="cssText",w="href",k="http-equiv",C="innerHTML",x="itemprop",A="name",R="property",O="rel",L="src",E="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",B="encodeSpecialCharacters",z="onChangeClientState",W="titleTemplate",M=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],N="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(e){var t=Q(e,v.TITLE),r=Q(e,W);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,P);return t||n||void 0},X=function(e){return Q(e,z)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||r===O&&"canonical"===e[r].toLowerCase()||c===O&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==C&&s!==S&&s!==x||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=m()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,p=e.title,u=e.titleAttributes;ce(v.BODY,n),ce(v.HTML,o),se(p,u);var f={baseTag:le(v.BASE,r),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,s),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,d)},g={},m={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(g[e]=r),n.length&&(m[e]=f[e].oldTags)})),t&&t(),c(e,g,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(v.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(N),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var d=i.indexOf(c);-1!==d&&i.splice(d,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(N):r.getAttribute(N)!==a.join(",")&&r.setAttribute(N,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(N,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[N]=!0,o=pe(r,n),[f.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=de(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+_(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case y:return{toComponent:function(){return pe(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[N]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===C||r===S){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),f.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===S)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+_(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,d=e.title,p=void 0===d?"":d,u=e.titleAttributes;return{base:ue(v.BASE,t,n),bodyAttributes:ue(h,r,n),htmlAttributes:ue(y,o,n),link:ue(v.LINK,i,n),meta:ue(v.META,a,n),noscript:ue(v.NOSCRIPT,s,n),script:ue(v.SCRIPT,c,n),style:ue(v.STYLE,l,n),title:ue(v.TITLE,{title:p,titleAttributes:u},n)}},ge=d()((function(e){return{baseTag:V([w,E],e),bodyAttributes:K(h,e),defer:Q(e,I),encode:Q(e,B),htmlAttributes:K(y,e),linkTags:$(v.LINK,[O,w],e),metaTags:$(v.META,[A,T,k,R,x],e),noscriptTags:$(v.NOSCRIPT,[C],e),onChangeClientState:X(e),scriptTags:$(v.SCRIPT,[L,C],e),styleTags:$(v.STYLE,[S],e),title:q(e),titleAttributes:K(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),me=(o=ge,a=i=function(e){function t(){return Y(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!u()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return D({},n,((t={})[r.type]=[].concat(n[r.type]||[],[D({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return D({},o,((t={})[n.type]=a,t.titleAttributes=D({},i),t));case v.BODY:return D({},o,{bodyAttributes:D({},i)});case v.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((r={})[n.type]=D({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=D({},t);return Object.keys(e).forEach((function(t){var n;r=D({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return f.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=D({},r);return t&&(n=this.mapChildrenToProps(t,n)),f.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(f.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function d(){c=e(l.map((function(e){return e.props}))),p.canUseDOM?t(c):r&&(c=r(c))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),d()},a.componentDidUpdate=function(){d()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",s),p}}},7963:function(e,t,r){"use strict";r.d(t,{kC:function(){return Se}});var n=r(6771),o=r(7825),i=r(7548);var a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=r(6494),l=r.n(c),d=function(e,t){var r=l()({},e,t);for(var n in e){var o;e[n]&&"object"==typeof t[n]&&l()(r,((o={})[n]=l()(e[n],t[n]),o))}return r},p={breakpoints:[40,52,64].map((function(e){return e+"em"}))},u=function(e){return"@media screen and (min-width: "+e+")"},f=function(e,t){return g(t,e,e)},g=function(e,t,r,n,o){for(t=t&&t.split?t.split("."):[t],n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e},m=function e(t){var r={},n=function(e){var n,o,i={},a=!1,s=e.theme&&e.theme.disableStyledSystemCache;for(var c in e)if(t[c]){var f=t[c],m=e[c],b=g(e.theme,f.scale,f.defaults);if("object"!=typeof m)l()(i,f(m,b,e));else{if(r.breakpoints=!s&&r.breakpoints||g(e.theme,"breakpoints",p.breakpoints),Array.isArray(m)){r.media=!s&&r.media||[null].concat(r.breakpoints.map(u)),i=d(i,h(r.media,f,b,m,e));continue}null!==m&&(i=d(i,y(r.breakpoints,f,b,m,e)),a=!0)}}return a&&(n=i,o={},Object.keys(n).sort((function(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){o[e]=n[e]})),i=o),i};n.config=t,n.propNames=Object.keys(t),n.cache=r;var o=Object.keys(t).filter((function(e){return"config"!==e}));return o.length>1&&o.forEach((function(r){var o;n[r]=e(((o={})[r]=t[r],o))})),n},h=function(e,t,r,n,o){var i={};return n.slice(0,e.length).forEach((function(n,a){var s,c=e[a],d=t(n,r,o);c?l()(i,((s={})[c]=l()({},i[c],d),s)):l()(i,d)})),i},y=function(e,t,r,n,o){var i={};for(var a in n){var s=e[a],c=t(n[a],r,o);if(s){var d,p=u(s);l()(i,((d={})[p]=l()({},i[p],c),d))}else l()(i,c)}return i},b=function(e){var t=e.properties,r=e.property,n=e.scale,o=e.transform,i=void 0===o?f:o,a=e.defaultScale;t=t||[r];var s=function(e,r,n){var o={},a=i(e,r,n);if(null!==a)return t.forEach((function(e){o[e]=a})),o};return s.scale=n,s.defaults=a,s},v=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(r){var n=e[r];t[r]=!0!==n?"function"!=typeof n?b(n):n:b({property:r,scale:r})})),m(t)},T=function(){for(var e={},t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];r.forEach((function(t){t&&t.config&&l()(e,t.config)}));var o=m(e);return o},S=v({width:{property:"width",scale:"sizes",transform:function(e,t){return g(t,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),w=S,k={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};k.bg=k.backgroundColor;var C=v(k),x=C,A=v({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),R=A,O=v({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),L=O,E={space:[0,4,8,16,32,64,128,256,512]},j=v({gridGap:{property:"gridGap",scale:"space",defaultScale:E.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:E.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:E.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),P=j,I={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};I.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},I.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},I.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},I.borderBottomColor={property:"borderBottomColor",scale:"colors"},I.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},I.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},I.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},I.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},I.borderLeftColor={property:"borderLeftColor",scale:"colors"},I.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},I.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},I.borderRightColor={property:"borderRightColor",scale:"colors"},I.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var B=v(I),z=B,W={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};W.bgImage=W.backgroundImage,W.bgSize=W.backgroundSize,W.bgPosition=W.backgroundPosition,W.bgRepeat=W.backgroundRepeat;var M=v(W),H=M,N={space:[0,4,8,16,32,64,128,256,512]},Z=v({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:N.space},right:{property:"right",scale:"space",defaultScale:N.space},bottom:{property:"bottom",scale:"space",defaultScale:N.space},left:{property:"left",scale:"space",defaultScale:N.space}}),Y=Z,F={space:[0,4,8,16,32,64,128,256,512]},D=function(e){return"number"==typeof e&&!isNaN(e)},U=function(e,t){if(!D(e))return g(t,e,e);var r=e<0,n=Math.abs(e),o=g(t,n,n);return D(o)?o*(r?-1:1):r?"-"+o:o},G={};G.margin={margin:{property:"margin",scale:"space",transform:U,defaultScale:F.space},marginTop:{property:"marginTop",scale:"space",transform:U,defaultScale:F.space},marginRight:{property:"marginRight",scale:"space",transform:U,defaultScale:F.space},marginBottom:{property:"marginBottom",scale:"space",transform:U,defaultScale:F.space},marginLeft:{property:"marginLeft",scale:"space",transform:U,defaultScale:F.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:U,defaultScale:F.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:U,defaultScale:F.space}},G.margin.m=G.margin.margin,G.margin.mt=G.margin.marginTop,G.margin.mr=G.margin.marginRight,G.margin.mb=G.margin.marginBottom,G.margin.ml=G.margin.marginLeft,G.margin.mx=G.margin.marginX,G.margin.my=G.margin.marginY,G.padding={padding:{property:"padding",scale:"space",defaultScale:F.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:F.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:F.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:F.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:F.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:F.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:F.space}},G.padding.p=G.padding.padding,G.padding.pt=G.padding.paddingTop,G.padding.pr=G.padding.paddingRight,G.padding.pb=G.padding.paddingBottom,G.padding.pl=G.padding.paddingLeft,G.padding.px=G.padding.paddingX,G.padding.py=G.padding.paddingY;var _=T(v(G.margin),v(G.padding)),q=_,X=v({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var V=function(e,t,r,n,o){for(t=t&&t.split?t.split("."):[t],n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e},$=[40,52,64].map((function(e){return e+"em"})),Q={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},J={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},ee={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},te={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},re=function(e,t){if("number"!=typeof t||t>=0)return V(e,t,t);var r=Math.abs(t),n=V(e,r,r);return"string"==typeof n?"-"+n:-1*n},ne=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return K({},e,((r={})[t]=re,r))}),{}),oe=function e(t){return function(r){void 0===r&&(r={});var n=K({},Q,{},r.theme||r),o={},i=function(e){return function(t){var r={},n=V(t,"breakpoints",$),o=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var a="function"==typeof e[i]?e[i](t):e[i];if(null!=a)if(Array.isArray(a))for(var s=0;s<a.slice(0,o.length).length;s++){var c=o[s];c?(r[c]=r[c]||{},null!=a[s]&&(r[c][i]=a[s])):r[i]=a[s]}else r[i]=a}return r}}("function"==typeof t?t(n):t)(n);for(var a in i){var s=i[a],c="function"==typeof s?s(n):s;if("variant"!==a)if(c&&"object"==typeof c)o[a]=e(c)(n);else{var l=V(J,a,a),d=V(te,l),p=V(n,d,V(n,l,{})),u=V(ne,l,V)(p,c,c);if(ee[l])for(var f=ee[l],g=0;g<f.length;g++)o[f[g]]=u;else o[l]=u}else o=K({},o,{},e(V(n,c))(n))}return o}},ie=function(e){var t,r,n=e.scale,o=e.prop,i=void 0===o?"variant":o,a=e.variants,s=void 0===a?{}:a,c=e.key;(r=Object.keys(s).length?function(e,t,r){return oe(g(t,e,null))(r.theme)}:function(e,t){return g(t,e,null)}).scale=n||c,r.defaults=s;var l=((t={})[i]=r,t);return m(l)},ae=ie({key:"buttons"}),se=ie({key:"textStyles",prop:"textStyle"}),ce=ie({key:"colorStyles",prop:"colors"}),le=(w.width,w.height,w.minWidth,w.minHeight,w.maxWidth,w.maxHeight,w.size,w.verticalAlign,w.display,w.overflow,w.overflowX,w.overflowY,x.opacity,R.fontSize,R.fontFamily,R.fontWeight,R.lineHeight,R.textAlign,R.fontStyle,R.letterSpacing,L.alignItems,L.alignContent,L.justifyItems,L.justifyContent,L.flexWrap,L.flexDirection,L.flex,L.flexGrow,L.flexShrink,L.flexBasis,L.justifySelf,L.alignSelf,L.order,P.gridGap,P.gridColumnGap,P.gridRowGap,P.gridColumn,P.gridRow,P.gridAutoFlow,P.gridAutoColumns,P.gridAutoRows,P.gridTemplateColumns,P.gridTemplateRows,P.gridTemplateAreas,P.gridArea,z.borderWidth,z.borderStyle,z.borderColor,z.borderTop,z.borderRight,z.borderBottom,z.borderLeft,z.borderRadius,H.backgroundImage,H.backgroundSize,H.backgroundPosition,H.backgroundRepeat,Y.zIndex,Y.top,Y.right,Y.bottom,Y.left,function(e){var t=new RegExp("^("+e.join("|")+")$");return(0,i.Z)((function(e){return s(e)&&!t.test(e)}))}),de=(le(T(_,A,C,S,O,B,M,Z,j,X,ae,se,ce).propNames),r(7294)),pe=r(3431);function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e){return function(e){if(Array.isArray(e))return ue(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ue(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ge=[].concat(fe(q.propNames),fe(x.propNames)),me=function(e){return ge.includes(e)},he=le(ge),ye=function(e){return(0,o.iv)(e.sx)(e.theme)},be=function(e){return(0,o.iv)(e.__css)(e.theme)},ve=function(e){var t=e.theme,r=e.variant,n=e.__themeKey,i=void 0===n?"variants":n;return(0,o.iv)((0,o.U2)(t,i+"."+r,(0,o.U2)(t,r)))},Te=(0,n.Z)("div",{shouldForwardProp:he,target:"e1f4mtpc1"})("box-sizing:border-box;margin:0;min-width:0;",be,ve,q,x,ye,(function(e){return e.css}),"");Te.displayName="Box";var Se=(0,n.Z)(Te,{target:"e1f4mtpc0"})({name:"zjik7",styles:"display:flex"});function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}Se.displayName="Flex";var Ce=function(e){var t=e.size,r=void 0===t?24:t,n=ke(e,["size"]);return de.createElement(Te,we({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r+"",height:r+"",viewBox:"0 0 24 24",fill:"currentcolor"},n))};Ce.displayName="SVG";var xe=function(e){return function(t){var r={};for(var n in t)e(n||"")&&(r[n]=t[n]);return r}},Ae=/^m[trblxy]?$/;xe((function(e){return Ae.test(e)})),xe((function(e){return!Ae.test(e)})),(0,pe.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),xe(me),xe((function(e){return!me(e)}))},6900:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),o=r(5444),i=r(9285),a=r(7963),s=r(7825),c=r(2877),l=r(1679),d=r(3431);function p(){return(0,d.tZ)(n.Fragment,null,"Words by ",(0,d.tZ)(l.RQ.a,{href:"https://amaechler.com/"},"Andreas Maechler"),".",(0,d.tZ)("br",null),"Change me. This is all quite default.")}var u="3308536712",f=function(){var e=(0,o.K2)(u),t=e.site.siteMetadata.author,r=e.avatar;return(0,d.tZ)(a.kC,{css:(0,s.iv)({mb:4,alignItems:"center"})},r?(0,d.tZ)(i.G,{image:r.childImageSharp.gatsbyImageData,alt:t,css:(0,s.iv)({mr:2,mb:0,width:48,minWidth:48,borderRadius:99999})}):(0,d.tZ)("div",{css:(0,s.iv)({mr:2,mb:0,width:48,minWidth:48,borderRadius:99999}),role:"presentation"}),(0,d.tZ)(c.Ge.div,null,(0,d.tZ)(p,null)))}},6795:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return T}});var o=r(7294),i=r(5414),a=r(2877),s=r(7825);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var d="reach-skip-nav",p=(0,o.forwardRef)((function(e,t){var r=e.as,n=void 0===r?"a":r,i=e.children,a=void 0===i?"Skip to content":i,s=e.contentId,p=l(e,["as","children","contentId"]),u=s||d;return(0,o.createElement)(n,c({},p,{ref:t,href:"#"+u,"data-reach-skip-link":"","data-reach-skip-nav-link":""}),a)}));var u=(0,o.forwardRef)((function(e,t){var r=e.as,n=void 0===r?"div":r,i=e.id,a=l(e,["as","id"]),s=i||d;return(0,o.createElement)(n,c({},a,{ref:t,id:s,"data-reach-skip-nav-content":""}))}));var f=r(5444),g=r(8811),m=r(6900),h=function(e){var t=e.children;return"/"===e.location.pathname?(0,g.tZ)(a.Ge.h1,{css:(0,s.iv)({my:0,fontSize:4})},(0,g.tZ)(a.Ge.a,{as:f.rU,css:(0,s.iv)({color:"inherit",boxShadow:"none",textDecoration:"none"}),to:"/"},t)):(0,g.tZ)(a.Ge.h3,{as:"p",css:(0,s.iv)({my:0})},(0,g.tZ)(a.Ge.a,{as:f.rU,css:(0,s.iv)({boxShadow:"none",textDecoration:"none",color:"primary"}),to:"/"},t))},y=function(e){var t=e.children,r=e.title,o=n(e,["children","title"]);return(0,g.tZ)("header",null,(0,g.tZ)(p,{sx:{variant:"styles.a"}}),(0,g.tZ)("div",{css:(0,s.iv)({maxWidth:"container",mx:"auto",px:3,pt:4})},(0,g.tZ)("div",{css:(0,s.iv)({display:"flex",justifyContent:"space-between",alignItems:"center",mb:4})},(0,g.tZ)(h,o,r),t),"/"===o.location.pathname&&(0,g.tZ)(m.Z,null)))},b=function(){return(0,f.K2)("3090755652").blogThemeConfig},v=r(3431),T=function(e){var t=e.children,r=n(e,["children"]),o=b().webfontURL;return(0,v.tZ)(a.Ge.root,null,(0,v.tZ)(i.q,null,(0,v.tZ)("link",{rel:"stylesheet",href:o})),(0,v.tZ)(y,r),(0,v.tZ)(u,null),(0,v.tZ)("div",null,(0,v.tZ)("div",{css:(0,s.iv)({maxWidth:"container",mx:"auto",px:3,py:4})},t)))}},3739:function(e,t,r){"use strict";r(7294);var n=r(5414),o=r(5444),i=r(3431);function a(e){var t=e.description,r=e.lang,a=e.meta,s=e.title,c=e.imageSource,l=e.imageAlt,d=(0,o.K2)("764694655").site,p=t||d.siteMetadata.description,u=c?""+d.siteMetadata.siteUrl+c:null,f=l||p;return(0,i.tZ)(n.q,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:s},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:p}].concat(c?[{name:"og:image",content:u},{name:"og:image:alt",content:f},{name:"twitter:image",content:u},{name:"twitter:image:alt",content:f},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(a)})}a.defaultProps={lang:"en",meta:[]},t.Z=a}}]);
//# sourceMappingURL=commons-bca0a594012ecef9f5e7.js.map