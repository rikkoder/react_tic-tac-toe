(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,r){},8:function(t,e,r){"use strict";r.r(e);var s=r(3),n=r(4),a=r(6),i=r(5),c=r(1),o=r.n(c),u=r(7),l=r.n(u),h=(r(13),r(0));function v(t){return Object(h.jsx)("button",{className:"square "+t.className,onClick:t.onClick,children:t.value})}var f=function(t){Object(a.a)(r,t);var e=Object(i.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(t,e,r){var s=this;return Object(h.jsx)(v,{className:r,value:this.props.sqrs[t],onClick:function(){return s.props.onClick(t)}},e)}},{key:"render",value:function(){for(var t=[],e=0;e<3;e++){for(var r=[],s=0;s<3;s++)r.push(this.renderSquare(3*e+s,s,this.props.wins[3*e+s]?"win-box":""));t.push(Object(h.jsx)("div",{className:"board-row",children:r},e))}return Object(h.jsx)("div",{children:t})}}]),r}(o.a.Component),j=function(t){Object(a.a)(r,t);var e=Object(i.a)(r);function r(t){var n;return Object(s.a)(this,r),(n=e.call(this,t)).state={history:[{squares:Array(9).fill(null)}],moveNo:0,xTurn:!0,ascOrd:!0,wins:Array(9).fill(!1)},n}return Object(n.a)(r,[{key:"handleClick",value:function(t){var e=this.state.history.slice(0,this.state.moveNo+1),r=e[e.length-1].squares.slice(),s=Array(9).fill(null);d(r,s)||r[t]||(r[t]=this.state.xTurn?"X":"O",d(r,s),this.setState({history:e.concat({squares:r}),moveNo:e.length,xTurn:!this.state.xTurn,wins:s}))}},{key:"jumpTo",value:function(t){this.setState({moveNo:t,xTurn:t%2===0})}},{key:"render",value:function(){for(var t=this,e="Player: "+(this.state.xTurn?"X":"O"),r=this.state.history[this.state.moveNo].squares,s=!0,n=0;n<9;n++)if(null===r[n]){s=!1;break}s&&(e="Game Draw");var a=d(r,this.state.wins.slice());a&&(e="Winner: "+a);var i=this.state.history.map((function(e,r,s){var n=r?function(){for(var t=0;t<9&&s[r-1].squares[t]===e.squares[t];t++);var n=Math.floor(t/3),a=t%3;return"(".concat(n,", ").concat(a,")")}():"Go to beginning";return Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:r===t.state.moveNo?"selected-li":"",onClick:function(){return t.jumpTo(r)},children:n})},r)}));return Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(f,{wins:this.state.wins,sqrs:this.state.history[this.state.moveNo].squares,onClick:function(e){return t.handleClick(e)}})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{children:e}),Object(h.jsx)("button",{onClick:function(){return t.setState({ascOrd:!t.state.ascOrd})},children:this.state.ascOrd?"^":"v"}),Object(h.jsx)("ol",{reversed:!this.state.ascOrd,children:this.state.ascOrd?i:i.reverse()})]})]})}}]),r}(o.a.Component);function d(t,e){for(var r=[],s=0;s<3;s++){r.push([]);for(var n=0;n<3;n++)r[s].push(t[3*s+n])}for(var a=0;a<3;a++){if(r[a][0]&&r[a][0]===r[a][1]&&r[a][0]===r[a][2]){for(var i=0;i<3;i++)e[3*a+i]=!0;return r[a][0]}if(r[0][a]&&r[0][a]===r[1][a]&&r[0][a]===r[2][a]){for(var c=0;c<3;c++)e[3*c+a]=!0;return r[0][a]}}if(r[0][0]&&r[0][0]===r[1][1]&&r[0][0]===r[2][2]){for(var o=0;o<3;o++)e[3*o+o]=!0;return r[0][0]}if(r[0][2]&&r[0][2]===r[1][1]&&r[0][2]===r[2][0]){for(var u=0;u<3;u++)e[3*u+(2-u)]=!0;return r[0][2]}return null}l.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.787db9e9.chunk.js.map