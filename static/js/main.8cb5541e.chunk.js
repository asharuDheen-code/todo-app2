(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(1),s=a(2),l=a(4),u=a(3),m=a(7),h=(a(13),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={input:"",items:[]},e.handleChange=function(t){e.setState({input:t.target.value})},e.storeItem=function(t){t.preventDefault();var a=e.state.input;e.setState({items:[].concat(Object(m.a)(e.state.items),[a]),input:""})},e.deletItem=function(t){var a=e.state.items;a.splice(t,1),e.setState({items:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.input,n=t.items;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"h1Tag"},"ToDo List"),c.a.createElement("div",{className:"input-section"},c.a.createElement("input",{value:a,onChange:this.handleChange,className:"inputBox",placeholder:"Add ToDo List...",type:"text"}),c.a.createElement("button",{className:"todoButton",onClick:this.storeItem},"Add List\u2714\ufe0f")),c.a.createElement("br",null),c.a.createElement("ul",null,n.map((function(t,a){return c.a.createElement("li",{key:a},t,c.a.createElement("i",{id:"iconpencil",class:"fas fa-pencil-alt"}),c.a.createElement("i",{id:"iconTrash",className:"fas fa-trash-alt",onClick:function(){return e.deletItem(a)}})," ")}))))}}]),a}(n.Component)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))}}]),a}(n.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8cb5541e.chunk.js.map