(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146),l=a(160),c=a(171),o=a.n(c),u=a(193),s=a.n(u),m=a(3786),d=a.n(m),p=a(194),f=a.n(p),E=a(3788),h=a.n(E),g=function(e){var t=e.children,a=e.title,n=e.subheader,i=e.avatar,l=e.action,c=e.style,o=void 0===c?{}:c;return r.a.createElement(s.a,{style:o},r.a.createElement(d.a,{avatar:i||null,title:a,subheader:n||null}),r.a.createElement(f.a,null,t),r.a.createElement(h.a,{style:{float:"right"}},l))},y=a(169),v=a(172),k=a.n(v),x=a(7),b=a.n(x),w=a(3800),S=a.n(w),M=a(174),q=a.n(M),B=a(157),C=a.n(B),P=a(3790),T=a.n(P),L=a(201),R=a.n(L),j=a(3796),A=Object(j.autoPlay)(T.a),G=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeStep:0},t.handleNext=function(){t.setState(function(e){return{activeStep:e.activeStep+1}})},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1}})},t.handleStepChange=function(e){t.setState({activeStep:e})},t}return b()(t,e),t.prototype.render=function(){var e=this.state.activeStep,t=this.props.items,a=t.length;return r.a.createElement(q.a,{elevation:0},r.a.createElement("div",null,r.a.createElement(C.a,null,t[e].title),r.a.createElement(A,{axis:"x",index:e,onChangeIndex:this.handleStepChange,enableMouseEvents:!0},t.map(function(t,a){var n=t.node,l=n.excerpt,c=n.frontmatter,o=c.path,u=c.title,m=c.image;return r.a.createElement("div",{key:a},Math.abs(e-a)<=2?r.a.createElement(s.a,null,r.a.createElement(R.a,{style:{height:"200px"},image:Object(i.withPrefix)(m)}),r.a.createElement(f.a,null,r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement(i.Link,{to:o},u)),r.a.createElement(C.a,{component:"p"},l))):null)})),r.a.createElement(S.a,{steps:a,position:"static",activeStep:e,nextButton:r.a.createElement(k.a,{size:"small",onClick:this.handleNext,disabled:e===a-1},"Next"),backButton:r.a.createElement(k.a,{size:"small",onClick:this.handleBack,disabled:0===e},"Back")})))},t}(r.a.Component),I=a(176),F=a.n(I),Q=a(161);a.d(t,"query",function(){return U});var U="1045343806";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.data.allFeaturesJson.edges;return r.a.createElement(y.a,{title:"Gatsby Material UI Business Starter"},r.a.createElement(l.a,{title:"Home"},r.a.createElement("meta",{name:"description",content:"Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."})),r.a.createElement(o.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},r.a.createElement(o.a,{item:!0,xs:12,md:8},r.a.createElement(g,{title:"Our Products",avatar:r.a.createElement(F.a,null,r.a.createElement(Q.b,null)),action:r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"contained",color:"secondary"},r.a.createElement(i.Link,{to:"/products"},"View All Products")))},r.a.createElement(G,{items:t}))),r.a.createElement(o.a,{item:!0,xs:12,md:6},r.a.createElement(g,{title:"Features",avatar:r.a.createElement(F.a,null,r.a.createElement(Q.d,null))},a.map(function(e){return r.a.createElement("div",{key:e.node.id},e.node.image&&r.a.createElement("img",{src:Object(i.withPrefix)(e.node.image),alt:""}),r.a.createElement("h3",null,e.node.title),e.node.description)})))))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(147),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(158),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},158:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},160:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),l=a(178),c=a.n(l),o=a(146),u=function(e){return i.a.createElement(o.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return i.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(53),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},166:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e,t,a){},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(160),l=a(159),c=a(146),o=(a(162),a(163),a(166)),u=a(172),s=a.n(u),m=function(e){var t=e.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(c.Link,{key:e.name,to:e.link},r.a.createElement(s.a,{style:{color:"#fff"}},e.name))}))},d=function(e){return r.a.createElement(c.StaticQuery,{query:"240237662",render:function(e){return r.a.createElement(m,{data:e})},data:o})},p=a(7),f=a.n(p),E=a(167),h=a(184),g=a.n(h),y=a(185),v=a.n(y),k=a(183),x=a.n(k),b=a(175),w=a.n(b),S=a(161),M=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState(function(e){return{menuActive:!e.menuActive}})},a.state={menuActive:!1},a}return f()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{onClick:this.toggleMenu},r.a.createElement(S.a,{style:{color:"#efefef"}})),r.a.createElement(x.a,{onClickAway:this.toggleMenu},r.a.createElement(g.a,{open:this.state.menuActive,onClose:this.toggleMenu},e.map(function(e){return r.a.createElement(c.Link,{key:e.name,to:e.link},r.a.createElement(v.a,null,e.name))}))))},t}(r.a.Component),q=function(e){return r.a.createElement(c.StaticQuery,{query:"709782962",render:function(t){return r.a.createElement(M,{active:e.active,data:t})},data:E})},B=a(189),C=a.n(B),P=a(171),T=a.n(P),L=a(187),R=a.n(L),j=a(186),A=a.n(j),G=a(157),I=a.n(G),F=a(188),Q=a.n(F),U=a(176),O=a.n(U),z=function(e){return r.a.createElement(A.a,{id:"appBar"},r.a.createElement(R.a,null,r.a.createElement(T.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},r.a.createElement(T.a,{item:!0},r.a.createElement(Q.a,{id:"logo",variant:"outlined",avatar:r.a.createElement(O.a,{id:"logoIcon"},r.a.createElement(S.c,null)),label:r.a.createElement(c.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),r.a.createElement(T.a,{item:!0},r.a.createElement(C.a,{smDown:!0},r.a.createElement(I.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},r.a.createElement(d,null))))),r.a.createElement(T.a,{item:!0},r.a.createElement(C.a,{mdUp:!0},r.a.createElement(q,null)))))},N=function(e){return r.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(z,{data:e})},data:l})},J=a(190),D=a.n(J),V=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,i=n.email,l=n.phone;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{style:{marginTop:"48px",marginBottom:"24px"}}),r.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},r.a.createElement("span",null,r.a.createElement(I.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",i," – ",l))))},H=function(e){return r.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(V,{data:e})},data:l})},W=a(192),Y=a.n(W),K=a(191),X=a(177),Z=(a(168),Object(X.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0}}));t.a=function(e){return r.a.createElement(X.MuiThemeProvider,{theme:Z},r.a.createElement(Y.a,null),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement(i.a,null),r.a.createElement(N,null),r.a.createElement(K.Grid,{style:{marginTop:"94px"}},r.a.createElement(K.Row,null,r.a.createElement(K.Col,{xs:12},e.title?r.a.createElement(I.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},e.title):null,e.children,r.a.createElement(H,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-97a13385294dcec2022b.js.map