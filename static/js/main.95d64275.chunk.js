(this.webpackJsonpnoticias=this.webpackJsonpnoticias||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),s=(a(16),a(17),a(6)),o=a.n(s),l=a(9),u=a(1),m=a(2),d=a(4),h=a(3),p=a(5),b=(a(19),function(){return c.a.createElement("nav",{className:"navbar navbar-dark bg-primary justify-content-center"},c.a.createElement("h1",{className:"text-light"},"Noticias desde API"))}),f=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.categoria;return c.a.createElement("option",null,e)}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={selected:""},a.handleChange=function(e){a.setState({selected:e.target.value})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.selected!==t.state?e.consultarNoticia(t.selected):null}},{key:"render",value:function(){var e=this.props,t=e.categoriaNoticias,a=e.selected;return c.a.createElement("form",null,c.a.createElement("div",{className:"form-row justify-content-center"},c.a.createElement("div",{className:"form-group col-md-4"},c.a.createElement("select",{id:"id-categoria",className:"form-control",onChange:this.handleChange,value:a},t.map((function(e,t){return c.a.createElement(f,{key:t,categoria:e})}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{selected:t.selected}}}]),t}(n.Component),g=a(10),N=a.n(g),E=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.noticia,t=e.title,a=e.description,n=e.urlToImage,r=e.url;return c.a.createElement("div",{className:"card",style:{maxWidth:"18em"}},null===n?c.a.createElement("img",{className:"card-img-top",src:N.a,alt:"logo"}):c.a.createElement("img",{className:"card-img-top",src:n,alt:t}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t),c.a.createElement("p",{className:"card-text"},a)),c.a.createElement("div",{className:"card-footer"},c.a.createElement("a",{href:r,className:"btn btn-primary btn-lg active"},"Ver noticia")))}}]),t}(n.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.listaNoticias;return c.a.createElement("div",{className:"card-columns text-center"},e.map((function(e,t){return c.a.createElement(E,{key:t,noticia:e})})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).consultarNoticia=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://newsapi.org/v2/top-headlines?country=mx&category=".concat(t,"&apiKey=004381c512694d56be0d01dabee2b450"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,a.setState({listaNoticias:r.articles});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={listaNoticias:[],categoriaNoticias:["business","entertainment","general","health","science","sports","technology"],selected:"business"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.consultarNoticia(this.state.selected)}},{key:"render",value:function(){var e=this.state,t=e.categoriaNoticias,a=e.listaNoticias;return c.a.createElement("div",{className:"bg-dark"},c.a.createElement(b,null),c.a.createElement("section",{className:"container bg-light"},c.a.createElement("br",null),c.a.createElement("h4",{className:"text-center"},"Encuentra noticias por categorias"),c.a.createElement("br",null),c.a.createElement(v,{categoriaNoticias:t,consultarNoticia:this.consultarNoticia}),c.a.createElement("br",null),c.a.createElement(j,{listaNoticias:a})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.95d64275.chunk.js.map