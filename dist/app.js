!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){window.onload=function(){n=document.getElementById("canvas"),o=n.getContext("2d"),l=n.width/10,void 0===localStorage._scoreResetSept2018&&(localStorage._hscore=a=0,localStorage._scoreResetSept2018=!0),function(){clearInterval(e),clearInterval(t);try{document.removeEventListener("keydown",Q),document.removeEventListener("keyup",Q),document.removeEventListener("mousedown",I)}catch(e){console.error(e)}!0,document.addEventListener("keydown",Q),document.addEventListener("keyup",Q),document.addEventListener("mousedown",I),document.addEventListener("mousemove",T);try{g=JSON.parse(localStorage._end)}catch(e){console.error(e),g=!1}try{!function(){try{if(g)return a=JSON.parse(localStorage._hscore),i=F(n.width/l,n.height/l).slice(0),M(),void(g=!1)}catch(e){console.error(e),a=0}try{null!=localStorage._arena&&"undefined"!=localStorage._arena&&(i=JSON.parse(localStorage._arena))}catch(e){console.error(e)}finally{null==i&&(i=F(n.width/l,n.height/l))}try{null==localStorage._hscore||"undefined"==localStorage._hscore?highScore=localStorage._hscore=0:highScore=JSON.parse(localStorage._hscore),u=null==localStorage._score||"undefined"==localStorage._score?localStorage._score=0:JSON.parse(localStorage._score),Y=JSON.parse(localStorage._player)}catch(e){console.error(e)}}()}catch(e){console.error(e)}(s=new Image).src="../images/restart.png",(f=new Image).src="../images/pause.png",(c=new Image).src="../images/play.png";var e=setInterval(G,1e3/x),t=setInterval(K,1e3/p);null==Y&&M();requestAnimationFrame(k)}()};const r=[null,"#FF0D72","#0DC2FF","#0DFF72","#F538FF","#FF8E0D","#FFE138","#3877FF"];shapes=[[[1,1,1],[0,1,0],[0,0,0]],[[2,2],[2,2]],[[0,0,3,0],[0,0,3,0],[0,0,3,0],[0,0,3,0]],[[0,4,0],[0,4,0],[0,4,4]],[[0,5,0],[0,5,0],[5,5,0]],[[0,6,6],[6,6,0],[0,0,0]],[[7,7,0],[0,7,7],[0,0,0]]],speed=7;let o,n,l,i,a,s,f,c,h,u=0,g=!1,d=localStorage.mouse?JSON.parse(localStorage.mouse):{x:0,y:0},y=!1,S=!1,p=12,x=20,v=1,m=0;let w=0,_=0,b=0,O=50*speed;function k(e=0){if(g&&function(){let e="You hit the limit!",t=.05*l;o.font=l+"px Arial",o.fillStyle="#ff5b5b",o.fillText(e,n.width/2-o.measureText(e).width/2+t,8*l+t);let r="Press any key to restart";o.font=.7*l+"px Arial",o.fillStyle="#ff5b5b",o.fillText(r,n.width/2-o.measureText(r).width/2+t,9*l+t),o.font=l+"px Arial",o.fillStyle="red",o.fillText(e,n.width/2-o.measureText(e).width/2,8*l),o.font=.7*l+"px Arial",o.fillStyle="red",o.fillText(r,n.width/2-o.measureText(r).width/2,9*l)}(),o.fillStyle="black",o.fillRect(0,0,n.width,n.height),o.fillStyle="red",o.fillRect(0,3*l-v,n.width,v),z(i,{x:0,y:0}),z(Y.shape,{x:Y.x,y:Y.y}),N(),w=e-_,_=e,(b+=w)>O&&!g&&!S&&(L(),b=0),null==a)try{a=localStorage._hscore}catch(e){console.error(e)}null==a&&(a=0),o.font=2*l+"px Arial",o.fillStyle="#fff",o.fillText(u,n.width/2-o.measureText(u).width/2,2.5*l),o.font=.5*l+"px Arial",o.fillStyle="#fff",o.fillText("High score: "+a,n.width/2-o.measureText("High score: "+a).width/2,3.5*l),function(){this.offset=1,this.hoverSize=l/5,d.x>l*this.offset-this.hoverSize&&d.x<l*this.offset+l+2*this.hoverSize&&d.y>l*this.offset-this.hoverSize&&d.y<l*this.offset+l+2*this.hoverSize?(y=!0,o.fillStyle="#3a3a3a",o.fillRect(l*this.offset-this.hoverSize,l*this.offset-this.hoverSize,l+2*this.hoverSize,l+2*this.hoverSize)):y=!1;o.drawImage(s,l*this.offset,l*this.offset,l,l)}(),function(){this.offsetX=8,this.offsetY=1,this.hoverSize=l/5,d.x>l*this.offsetX-this.hoverSize&&d.x<l*this.offsetX+l+offsetX&&d.y>l*this.offsetY-this.hoverSize&&d.y<l*this.offsetY+l+offsetY?(h=!0,o.fillStyle="#3a3a3a",o.fillRect(l*this.offsetX-this.hoverSize,l*this.offsetY-this.hoverSize,l+2*this.hoverSize,l+2*this.hoverSize)):h=!1;const e=S?c:f;o.drawImage(e,l*this.offsetX,l*this.offsetY,l,l)}(),function(){for(let e=i.length-1;e>=0;e--)i[e].every(e=>e>0)&&(i.splice(e,1),i.splice(0,0,new Array(i[1].length).fill(0)),u+=m,m*=2)}(),requestAnimationFrame(k)}function F(e,t){let r=[];for(;t--;)r.push(new Array(e).fill(0));return r}function z(e,t){for(let n=0;n<e.length;n++)for(let i=0;i<e[n].length;i++)0!==e[n][i]&&(o.fillStyle=r[e[n][i]],o.fillRect((t.x+i)*l,(t.y+n)*l,l,l))}function J(e,t){for(let t=0;t<e.length;++t)for(let r=0;r<t;++r)[e[r][t],e[t][r]]=[e[t][r],e[r][t]];t>0?e.forEach(e=>e.reverse()):e.reverse()}function N(){try{u>a&&(a=u,localStorage._hscore=JSON.stringify(a)),localStorage._end=JSON.stringify(g),localStorage._score=JSON.stringify(u),localStorage._arena=JSON.stringify(i),localStorage._player=JSON.stringify(Y)}catch(e){}}function T(e){const t=window.getComputedStyle(n),r=parseInt(t.width),o=parseInt(t.height),l=n.width/r,i=n.height/o;let a=n.getBoundingClientRect();d.x=(e.clientX-a.left)*l,d.y=(e.clientY-a.top)*i,localStorage.setItem("mouse",JSON.stringify(d))}function I(e){y?D(!0):h&&(S=!S,up=B=q=H=!1)}var E=1,A=10,R=75,Y={start_x:5,x:5,y:0,shape:[]};function j(){let e=Y.shape;for(let t=0;t<e.length;t++)for(let r=0;r<e[t].length;r++)if(0!==e[t][r]&&i[Y.y+t]&&0!==i[Y.y+t][Y.x+r])return!0;return!1}function L(){if(b=0,Y.y+Y.shape.length-1-X(Y.shape)<0&&(Y.x=Y.start_x),Y.x+Y.shape.length-1-C(Y.shape)>i[0].length-1&&(Y.x=i[0].length-Y.shape.length+C(Y.shape)),Y.x+P(Y.shape)<0&&(Y.x=0-P(Y.shape)),Y.y++,j()||Y.y>i.length-Y.shape.length+X(Y.shape)){if(u+=A,Y.y--,function(e,t){const r=e.shape;for(let o=0;o<r.length;o++)for(let n=0;n<r.length;n++)if(r[o][n]&&0!==r[o][n])try{t[e.y+o][e.x+n]=r[o][n]}catch(e){console.error(e)}}(Y,i),function(e){let t=0;return e.forEach(e=>{t+=e}),t}(i[2])>0)return z(i,{x:0,y:0}),g=!0,void D(!1);M()}}function M(){Y.shape=shapes[Math.round(Math.random()*(shapes.length-1))],Y.y=-Y.shape.length+X(Y.shape),Y.x=5-Math.round(Y.shape.length/2),Y.start_x=Y.x,m=R}function X(e){let t=0;for(let r=e.length-1;r>=0;r--){for(let o=0;o<e[r].length;o++)if(0!==e[r][o])return t;t++}return t}function C(e){let t=0;for(let r=e.length-1;r>=0;r--){for(let o=0;o<e.length;o++)if(0!==e[o][r])return t;t++}return t}function P(e){let t=0;for(let r=0;r<e.length;r++){for(let o=0;o<e.length;o++)if(0!==e[o][r])return t;t++}return t}function D(e){q=B=H=!1,N(),g=!0,localStorage._end=JSON.stringify(g),localStorage._arena=JSON.stringify(F(n.width/l,n.height/l).slice(0)),e&&location.reload()}var q=!1,B=!1,H=!1;function G(){B&&!S&&(u+=E,L())}function K(){q&&!S?(Y.x--,j()&&Y.x++):H&&!S&&(Y.x++,j()&&Y.x--)}function Q(e){if(g)D(!0);else{if(S)return;if("keydown"==e.type)switch(e.keyCode){case 87:case 38:!function(e){const t=Y.x;let r=1;for(J(Y.shape,e);j();)if(Y.x+=r,(r=-(r+(r>0?1:-1)))>Y.shape[0].length)return J(Y.shape,-e),void(Y.x=t)}(1);break;case 65:case 37:if(Y.y+Y.shape.length-X(Y.shape)<0)break;q=!0;break;case 83:case 40:B=!0;break;case 68:case 39:if(Y.y+Y.shape.length-X(Y.shape)<0)break;H=!0;break;case 27:localStorage.mouse=JSON.stringify({x:-10,y:-10})}else if("keyup"==e.type)switch(e.keyCode){case 65:case 37:q=!1;break;case 83:case 40:B=!1;break;case 68:case 39:H=!1}}}}]);