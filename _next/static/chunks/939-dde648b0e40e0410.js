(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{37870:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),r=n(67294);function i({id:e,host:t,repo:i,repoId:a,category:l,categoryId:p,mapping:s,term:c,strict:u,reactionsEnabled:h,emitMetadata:d,inputPosition:f,theme:g,lang:m,loading:v}){let[y,k]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{y||(n.e(891).then(n.bind(n,32891)),k(!0))},[]),y?(0,o.jsx)("giscus-widget",{id:e,host:t,repo:i,repoid:a,category:l,categoryid:p,mapping:s,term:c,strict:u,reactionsenabled:h,emitmetadata:d,inputposition:f,theme:g,lang:m,loading:v}):null}},8450:function(e,t,n){"use strict";n.d(t,{Z:function(){return X}});var o,r,i=n(87462),a=n(4942),l=n(15671),p=n(43144),s=n(97326),c=n(32531),u=n(73568),h=n(94184),d=n.n(h),f=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function g(e,t){return!!(e===t||f(e)&&f(t))}function m(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!g(e[n],t[n]))return!1;return!0}var v=n(64019),y=n(67294),k=n(71002),G=n(48555),b=n(98423),E=n(53124),w=n(74902),x=n(75164);function T(){return function(e,t,n){var o=n.value,r=!1;return{configurable:!0,get:function(){if(r||this===e.prototype||this.hasOwnProperty(t))return o;var n,i,a,l=(n=o.bind(this),(a=function(){if(null==i){for(var e,t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];i=(0,x.Z)(function(){i=null,n.apply(void 0,(0,w.Z)(o))})}}).cancel=function(){x.Z.cancel(i),i=null},a);return r=!0,Object.defineProperty(this,t,{value:l,configurable:!0,writable:!0}),r=!1,l}}}}function C(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function O(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function P(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var N=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],L=[];function A(e,t){if(e){var n=L.find(function(t){return t.target===e});n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},L.push(n),N.forEach(function(t){n.eventHandlers[t]=(0,v.Z)(e,t,function(){n.affixList.forEach(function(e){e.lazyUpdatePosition()})})}))}}function S(e){var t=L.find(function(t){var n=t.affixList.some(function(t){return t===e});return n&&(t.affixList=t.affixList.filter(function(t){return t!==e})),n});t&&0===t.affixList.length&&(L=L.filter(function(e){return e!==t}),N.forEach(function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()}))}var Z=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if(("undefined"==typeof Reflect?"undefined":(0,k.Z)(Reflect))==="object"&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function _(){return"undefined"!=typeof window?window:null}(o=r||(r={}))[o.None=0]="None",o[o.Prepare=1]="Prepare";var I=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,l.Z)(this,n),e=t.apply(this,arguments),e.state={status:r.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,n=t.offsetBottom,o=t.offsetTop;return void 0===n&&void 0===o?0:o},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,o=t.lastAffix,i=e.props.onChange,a=e.getTargetFunc();if(n===r.Prepare&&e.fixedNode&&e.placeholderNode&&a){var l=e.getOffsetTop(),p=e.getOffsetBottom(),s=a();if(s){var c={status:r.None},u=C(s),h=C(e.placeholderNode),d=O(h,u,l),f=P(h,u,p);void 0!==d?(c.affixStyle={position:"fixed",top:d,width:h.width,height:h.height},c.placeholderStyle={width:h.width,height:h.height}):void 0!==f&&(c.affixStyle={position:"fixed",bottom:f,width:h.width,height:h.height},c.placeholderStyle={width:h.width,height:h.height}),c.lastAffix=!!c.affixStyle,i&&o!==c.lastAffix&&i(c.lastAffix),e.setState(c)}}},e.prepareMeasure=function(){e.setState({status:r.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e}return(0,p.Z)(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:null!=e?e:_}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout(function(){A(t(),e),e.updatePosition()}))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),o=(null==n?void 0:n())||null;t!==o&&(S(this),o&&(A(o,this),this.updatePosition()),this.setState({prevTarget:o})),(e.offsetTop!==this.props.offsetTop||e.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),S(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),o=this.getOffsetBottom(),r=e();if(r&&this.placeholderNode){var i=C(r),a=C(this.placeholderNode),l=O(a,i,n),p=P(a,i,o);if(void 0!==l&&t.top===l||void 0!==p&&t.bottom===p)return}}this.prepareMeasure()}},{key:"render",value:function(){var e=this,t=this.state,n=t.affixStyle,o=t.placeholderStyle,r=this.props,l=r.affixPrefixCls,p=r.children,s=d()((0,a.Z)({},l,!!n)),c=(0,b.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return y.createElement(G.Z,{onResize:function(){e.updatePosition()}},y.createElement("div",(0,i.Z)({},c,{ref:this.savePlaceholderNode}),n&&y.createElement("div",{style:o,"aria-hidden":"true"}),y.createElement("div",{className:s,ref:this.saveFixedNode,style:n},y.createElement(G.Z,{onResize:function(){e.updatePosition()}},p))))}}]),n}(y.Component);I.contextType=E.E_,Z([T()],I.prototype,"updatePosition",null),Z([T()],I.prototype,"lazyUpdatePosition",null);var H=y.forwardRef(function(e,t){var n=e.prefixCls,o=(0,y.useContext(E.E_).getPrefixCls)("affix",n),r=(0,i.Z)((0,i.Z)({},e),{affixPrefixCls:o});return y.createElement(I,(0,i.Z)({},r,{ref:t}))});function D(e){return null!=e&&e===e.window}function W(e,t){if("undefined"==typeof window)return 0;var n,o,r=t?"scrollTop":"scrollLeft",i=0;return D(e)?i=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?i=e.documentElement[r]:e instanceof HTMLElement?i=e[r]:e&&(i=e[r]),e&&!D(e)&&"number"!=typeof i&&(i=null===(o=(null!==(n=e.ownerDocument)&&void 0!==n?n:e).documentElement)||void 0===o?void 0:o[r]),i}var M=y.createContext(null);function R(){return window}function V(e,t){if(!e.getClientRects().length)return 0;var n=e.getBoundingClientRect();return n.width||n.height?t===window?(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top-t.getBoundingClientRect().top:(0,n.top)}var B=/#([\S ]+)$/,F=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,l.Z)(this,n),e=t.apply(this,arguments),e.state={activeLink:null},e.wrapperRef=y.createRef(),e.links=[],e.registerLink=function(t){e.links.includes(t)||e.links.push(t)},e.unregisterLink=function(t){var n=e.links.indexOf(t);-1!==n&&e.links.splice(n,1)},e.getContainer=function(){var t,n=e.context.getTargetContainer,o=e.props.getContainer;return(null!==(t=null!=o?o:n)&&void 0!==t?t:R)()},e.handleScrollTo=function(t){var n=e.props,o=n.offsetTop,r=n.targetOffset;e.setCurrentActiveLink(t);var i=e.getContainer(),a=W(i,!0),l=B.exec(t);if(l){var p=document.getElementById(l[1]);if(p){var s=V(p,i),c=a+s;c-=void 0!==r?r:o||0,e.animating=!0,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getContainer,o=t.callback,r=t.duration,i=void 0===r?450:r,a=(void 0===n?function(){return window}:n)(),l=W(a,!0),p=Date.now(),s=function t(){var n,r,s,c,u,h=Date.now()-p,d=(n=h>i?i:h,u=e-l,(n/=i/2)<1?u/2*n*n*n+l:u/2*((n-=2)*n*n+2)+l);D(a)?a.scrollTo(window.pageXOffset,d):a instanceof HTMLDocument||"HTMLDocument"===a.constructor.name?a.documentElement.scrollTop=d:a.scrollTop=d,h<i?(0,x.Z)(t):"function"==typeof o&&o()};(0,x.Z)(s)}(c,{callback:function(){e.animating=!1},getContainer:e.getContainer})}}},e.saveInkNode=function(t){e.inkNode=t},e.setCurrentActiveLink=function(t){var n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],o=e.state.activeLink,r=e.props,i=r.onChange,a=r.getCurrentAnchor;o!==t&&(e.setState({activeLink:"function"==typeof a?a(t):t}),n&&(null==i||i(t)))},e.handleScroll=function(){if(!e.animating){var t=e.props,n=t.offsetTop,o=t.bounds,r=t.targetOffset,i=e.getCurrentAnchor(void 0!==r?r:n||0,o);e.setCurrentActiveLink(i)}},e.updateInk=function(){var t=(0,s.Z)(e),n=t.prefixCls,o=t.wrapperRef.current,r=null==o?void 0:o.getElementsByClassName("".concat(n,"-link-title-active"))[0];r&&(e.inkNode.style.top="".concat(r.offsetTop+r.clientHeight/2-4.5,"px"))},e.getMemoizedContextValue=function(e,t){void 0===t&&(t=m);var n=null;function o(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];if(n&&n.lastThis===this&&t(o,n.lastArgs))return n.lastResult;var i=e.apply(this,o);return n={lastResult:i,lastArgs:o,lastThis:this},i}return o.clear=function(){n=null},o}(function(t,n){return{registerLink:e.registerLink,unregisterLink:e.unregisterLink,scrollTo:e.handleScrollTo,activeLink:t,onClick:n}}),e}return(0,p.Z)(n,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=(0,v.Z)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){var e=this.props.getCurrentAnchor,t=this.state.activeLink;if(this.scrollEvent){var n=this.getContainer();this.scrollContainer!==n&&(this.scrollContainer=n,this.scrollEvent.remove(),this.scrollEvent=(0,v.Z)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}"function"==typeof e&&this.setCurrentActiveLink(e(t||""),!1),this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=[],o=this.getContainer();return(this.links.forEach(function(r){var i=B.exec(r.toString());if(i){var a=document.getElementById(i[1]);if(a){var l=V(a,o);l<e+t&&n.push({link:r,top:l})}}}),n.length)?n.reduce(function(e,t){return t.top>e.top?t:e}).link:""}},{key:"render",value:function(){var e=this.context.direction,t=this.props,n=t.anchorPrefixCls,o=t.className,r=t.style,l=t.offsetTop,p=t.affix,s=t.showInkInFixed,c=t.children,u=t.onClick,h=this.state.activeLink;this.prefixCls=n;var f=d()("".concat(n,"-ink-ball"),{visible:h}),g=d()("".concat(n,"-wrapper"),(0,a.Z)({},"".concat(n,"-rtl"),"rtl"===e),void 0===o?"":o),m=d()(n,(0,a.Z)({},"".concat(n,"-fixed"),!p&&!s)),v=(0,i.Z)({maxHeight:l?"calc(100vh - ".concat(l,"px)"):"100vh"},r),k=y.createElement("div",{ref:this.wrapperRef,className:g,style:v},y.createElement("div",{className:m},y.createElement("div",{className:"".concat(n,"-ink")},y.createElement("span",{className:f,ref:this.saveInkNode})),c)),G=this.getMemoizedContextValue(h,u);return y.createElement(M.Provider,{value:G},p?y.createElement(H,{offsetTop:l,target:this.getContainer},k):k)}}]),n}(y.Component);F.defaultProps={affix:!0,showInkInFixed:!1},F.contextType=E.E_;var U=y.forwardRef(function(e,t){var n=e.prefixCls,o=(0,y.useContext(E.E_).getPrefixCls)("anchor",n),r=(0,i.Z)((0,i.Z)({},e),{anchorPrefixCls:o});return y.createElement(F,(0,i.Z)({},r,{ref:t}))}),z=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,l.Z)(this,n),e=t.apply(this,arguments),e.handleClick=function(t){var n=e.context,o=n.scrollTo,r=n.onClick,i=e.props,a=i.href,l=i.title;null==r||r(t,{title:l,href:a}),o(a)},e.renderAnchorLink=function(t){var n=t.getPrefixCls,o=e.props,r=o.prefixCls,i=o.href,l=o.title,p=o.children,s=o.className,c=o.target,u=n("anchor",r),h=e.context.activeLink===i,f=d()("".concat(u,"-link"),(0,a.Z)({},"".concat(u,"-link-active"),h),s),g=d()("".concat(u,"-link-title"),(0,a.Z)({},"".concat(u,"-link-title-active"),h));return y.createElement("div",{className:f},y.createElement("a",{className:g,href:i,title:"string"==typeof l?l:"",target:c,onClick:e.handleClick},l),p)},e}return(0,p.Z)(n,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(e){var t=e.href,n=this.props.href;t!==n&&(this.context.unregisterLink(t),this.context.registerLink(n))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return y.createElement(E.C,null,this.renderAnchorLink)}}]),n}(y.Component);z.defaultProps={href:"#"},z.contextType=M;var j=U;j.Link=z;var X=j},2962:function(e,t,n){"use strict";n.d(t,{PB:function(){return u}});var o=n(9008),r=n.n(o),i=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},s=function(e,t,n){void 0===t&&(t=[]);var o=void 0===n?{}:n,r=o.defaultWidth,a=o.defaultHeight;return t.reduce(function(t,n,o){return t.push(i.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:n.url})),n.alt&&t.push(i.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(i.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(i.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(i.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.width.toString()})):r&&t.push(i.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:r.toString()})),n.height?t.push(i.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:n.height.toString()})):a&&t.push(i.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:a.toString()})),t},[])},c=function(e){var t,n,o,r,l,c=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var u="";e.title?(u=e.title,p.templateTitle&&(u=p.templateTitle.replace(/%s/g,function(){return u}))):e.defaultTitle&&(u=e.defaultTitle),u&&c.push(i.createElement("title",{key:"title"},u));var h=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,d=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,f=e.disableGooglebot||p.disableGooglebot||e.dangerouslyDisableGooglebot,g="";if(e.robotsProps){var m=e.robotsProps,v=m.nosnippet,y=m.maxSnippet,k=m.maxImagePreview,G=m.maxVideoPreview,b=m.noarchive,E=m.noimageindex,w=m.notranslate,x=m.unavailableAfter;g=(v?",nosnippet":"")+(y?",max-snippet:"+y:"")+(k?",max-image-preview:"+k:"")+(b?",noarchive":"")+(x?",unavailable_after:"+x:"")+(E?",noimageindex":"")+(G?",max-video-preview:"+G:"")+(w?",notranslate":"")}if(e.dangerouslyDisableGooglebot&&(p.disableGooglebot=!0),h||d?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),c.push(i.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(d?"nofollow":"follow")+g})),f||c.push(i.createElement("meta",{key:"googlebot",name:"googlebot",content:(h?"noindex":"index")+","+(d?"nofollow":"follow")+g}))):(c.push(i.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),f||c.push(i.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+g}))),e.description&&c.push(i.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&c.push(i.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){c.push(i.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&c.push(i.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&c.push(i.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&c.push(i.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&c.push(i.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||e.title)&&c.push(i.createElement("meta",{key:"og:title",property:"og:title",content:(null==(r=e.openGraph)?void 0:r.title)||u})),(null!=(n=e.openGraph)&&n.description||e.description)&&c.push(i.createElement("meta",{key:"og:description",property:"og:description",content:(null==(l=e.openGraph)?void 0:l.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&c.push(i.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();c.push(i.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&c.push(i.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&c.push(i.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&c.push(i.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&c.push(i.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){c.push(i.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&c.push(i.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&c.push(i.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){c.push(i.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&c.push(i.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&c.push(i.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&c.push(i.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){c.push(i.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&c.push(i.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){c.push(i.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&c.push(i.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&c.push(i.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){c.push(i.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){c.push(i.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&c.push(i.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&c.push(i.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){c.push(i.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&c.push(i.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&c.push.apply(c,s("image",e.openGraph.images,{defaultWidth:p.defaultOpenGraphImageWidth,defaultHeight:p.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&c.push.apply(c,s("video",e.openGraph.videos,{defaultWidth:p.defaultOpenGraphVideoWidth,defaultHeight:p.defaultOpenGraphVideoHeight})),e.openGraph.locale&&c.push(i.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&c.push(i.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&c.push(i.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,n,o;c.push(i.createElement("meta",a({key:"meta:"+(null!=(t=null!=(n=null!=(o=e.keyOverride)?o:e.name)?n:e.property)?t:e.httpEquiv)},e)))}),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach(function(e){var t;c.push(i.createElement("link",a({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),c};!function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,o=e.defaultTitle,a=e.dangerouslyDisableGooglebot,l=e.dangerouslySetAllPagesToNoIndex,p=e.dangerouslySetAllPagesToNoFollow,s=e.description,u=e.canonical,h=e.facebook,d=e.openGraph,f=e.additionalMetaTags,g=e.twitter,m=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,k=e.defaultOpenGraphVideoHeight,G=e.mobileAlternate,b=e.languageAlternates,E=e.additionalLinkTags;return i.createElement(r(),null,c({title:t,titleTemplate:n,defaultTitle:o,dangerouslySetAllPagesToNoIndex:void 0!==l&&l,dangerouslySetAllPagesToNoFollow:void 0!==p&&p,description:s,canonical:u,facebook:h,openGraph:d,additionalMetaTags:f,twitter:g,defaultOpenGraphImageWidth:m,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:k,mobileAlternate:G,languageAlternates:b,additionalLinkTags:E,dangerouslyDisableGooglebot:void 0!==a&&a}))},t}(i.Component);var u=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,o=e.nofollow,a=e.robotsProps,l=e.description,p=e.canonical,s=e.openGraph,u=e.facebook,h=e.twitter,d=e.additionalMetaTags,f=e.titleTemplate,g=e.mobileAlternate,m=e.languageAlternates,v=e.additionalLinkTags,y=e.disableGooglebot;return i.createElement(r(),null,c({title:t,noindex:void 0!==n&&n,nofollow:o,robotsProps:a,description:l,canonical:p,facebook:u,openGraph:s,additionalMetaTags:d,twitter:h,titleTemplate:f,mobileAlternate:g,languageAlternates:m,additionalLinkTags:v,disableGooglebot:y}))},t}(i.Component)},4298:function(e,t,n){e.exports=n(20699)}}]);