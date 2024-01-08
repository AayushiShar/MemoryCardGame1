import './polyfills.server.mjs';
import{E,F as A,G as N,J as V,N as L,Q as b,R as T,a as x,b as d,c as C,d as v,e as M,f as S,g as s,h as D,i as h,j as R,k as _,l as o,m as a,n as k,o as y,p as u,q as O,r as z,s as c,t as p,u as w,v as P,w as I}from"./chunk-LEGH2ANY.mjs";var m=(()=>{let e=class e{constructor(){this.flipped=!1,this.isHidden=!1,this.cardClicked=new D}flipCard(){this.flipped=!this.flipped,this.cardClicked.emit(this.flipped?this.backImage:this.frontImage)}resetCard(){this.flipped=!1}hideCard(){this.isHidden=!0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-card"]],inputs:{frontImage:"frontImage",backImage:"backImage"},outputs:{cardClicked:"cardClicked"},decls:6,vars:6,consts:[[1,"card",3,"click"],[1,"card-inner"],[1,"card-front"],["alt","Front Image",3,"src"],[1,"card-back"],["alt","Back Image",3,"src"]],template:function(t,i){t&1&&(o(0,"div",0),u("click",function(){return i.flipCard()}),o(1,"div",1)(2,"div",2),k(3,"img",3),a(),o(4,"div",4),k(5,"img",5),a()()()),t&2&&(R("flipped",i.flipped)("hidden",i.isHidden),s(3),z("src",i.frontImage,S),s(2),z("src",i.backImage,S))},styles:[".card[_ngcontent-%COMP%]{width:100px;height:150px;perspective:1000px;cursor:pointer;margin:10px}.card-inner[_ngcontent-%COMP%]{width:100%;height:100%;transform-style:preserve-3d;transition:transform .5s}.card.flipped[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}.card-front[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;backface-visibility:hidden}.card-front[_ngcontent-%COMP%]{transform:rotateY(0)}.card-back[_ngcontent-%COMP%]{transform:rotateY(180deg)}img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card-row[_ngcontent-%COMP%]{height:200px}.card-col[_ngcontent-%COMP%]{width:50%;padding:10px;text-align:center}.hidden[_ngcontent-%COMP%]{display:none}"]});let n=e;return n})();function $(n,e){if(n&1){let l=y();o(0,"app-card",5),u("cardClicked",function(t){v(l);let i=O();return M(i.onCardClicked(t))}),a()}if(n&2){let l=e.$implicit;h("frontImage","./assets/face1.jpg")("backImage",l.backImage)}}var H=(()=>{let e=class e{constructor(){this.cardObjects=[{backImage:"./assets/image1.jpg"},{backImage:"./assets/image2.png"},{backImage:"./assets/image1.jpg"},{backImage:"./assets/image3.png"},{backImage:"./assets/image3.png"},{backImage:"./assets/image2.png"}],this.moves=0,this.misses=0,this.correctMoves=0,this.clickedCards=[]}ngAfterViewInit(){this.cards.changes.subscribe(r=>{})}onCardClicked(r){r!=="./assets/face1.jpg"&&(this.clickedCards.push(r),this.clickedCards.length===2&&(this.moves++,this.clickedCards[0]===this.clickedCards[1]?(this.correctMoves++,setTimeout(()=>{this.cards.forEach(t=>{t.backImage===this.clickedCards[0]&&t.hideCard()}),this.clickedCards=[]},1e3)):(this.misses++,setTimeout(()=>{this.cards.forEach(t=>t.resetCard()),this.clickedCards=[]},1e3))))}getAccuracy(){return this.moves===0?0:this.correctMoves/this.moves*100}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-sixcards"]],viewQuery:function(t,i){if(t&1&&P(m,5),t&2){let f;w(f=I())&&(i.cards=f)}},decls:15,vars:4,consts:[[1,"card-container"],[1,"row"],[3,"frontImage","backImage","cardClicked",4,"ngFor","ngForOf"],[1,"scoreboard"],["routerLink","/",1,"zoom-btn"],[3,"frontImage","backImage","cardClicked"]],template:function(t,i){t&1&&(o(0,"header"),c(1,` Six Cards Memory Game
`),a(),o(2,"div",0)(3,"div",1),_(4,$,1,2,"app-card",2),a()(),o(5,"div",3)(6,"p"),c(7),a(),o(8,"p"),c(9),a(),o(10,"p"),c(11),a()(),o(12,"div")(13,"button",4),c(14,"Exit"),a()()),t&2&&(s(4),h("ngForOf",i.cardObjects),s(3),p("Moves: ",i.moves,""),s(2),p("Misses: ",i.misses,""),s(2),p("Accuracy: ",i.getAccuracy(),"%"))},dependencies:[E,b,m],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Times New Roman,Times,serif;border:black dotted}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap;width:80%;margin:20px auto;border-radius:20%}.row[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%]{margin:10px;flex-basis:calc(32.666% - 40px);box-sizing:border-box;border:black;border-radius:10%}app-card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #ae1087f2;margin-left:70px;padding-left:80px}header[_ngcontent-%COMP%]{background-color:#08a782;color:#ecf0f1;text-align:center;padding:20px;font-size:24px;font-weight:700;text-transform:uppercase;text-decoration:underline wavy;letter-spacing:2px;border-bottom:2px solid #2980b9;text-decoration:wavy;text-decoration-color:#2980b9;border:black dotted;border-radius:30%}.card-container[_ngcontent-%COMP%]{display:flex;flex:50%;justify-content:center;align-items:center;height:70vh;background-color:pink;border:black dotted;border-radius:20%}.scoreboard[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:50px}.scoreboard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;margin:0 10px;font-size:16px;color:#2c3e50}.zoom-btn[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;font-size:16px;cursor:pointer;transition:transform .3s ease}.zoom-btn[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.zoom-btn[_ngcontent-%COMP%]:active{transform:scale(.8)}"]});let n=e;return n})();function J(n,e){if(n&1){let l=y();o(0,"app-card",5),u("cardClicked",function(t){v(l);let i=O();return M(i.onCardClicked(t))}),a()}if(n&2){let l=e.$implicit;h("frontImage","./assets/face1.jpg")("backImage",l.backImage)}}var G=(()=>{let e=class e{constructor(){this.cardObjects=[{backImage:"./assets/image1.jpg"},{backImage:"./assets/image2.png"},{backImage:"./assets/image1.jpg"},{backImage:"./assets/image3.png"},{backImage:"./assets/image2.png"},{backImage:"./assets/image5.png"},{backImage:"./assets/image3.png"},{backImage:"./assets/image4.jpg"},{backImage:"./assets/image6.jpg"},{backImage:"./assets/image4.jpg"},{backImage:"./assets/image5.png"},{backImage:"./assets/image6.jpg"}],this.moves=0,this.misses=0,this.correctMoves=0,this.clickedCards=[]}ngAfterViewInit(){this.cards.changes.subscribe(r=>{})}onCardClicked(r){r!=="./assets/face1.jpg"&&(this.clickedCards.push(r),this.clickedCards.length===2&&(this.moves++,this.clickedCards[0]===this.clickedCards[1]?(this.correctMoves++,setTimeout(()=>{this.cards.forEach(t=>{t.backImage===this.clickedCards[0]&&t.hideCard()}),this.clickedCards=[]},1e3)):(this.misses++,setTimeout(()=>{this.cards.forEach(t=>t.resetCard()),this.clickedCards=[]},1e3))))}getAccuracy(){return this.moves===0?0:this.correctMoves/this.moves*100}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-twelvecards"]],viewQuery:function(t,i){if(t&1&&P(m,5),t&2){let f;w(f=I())&&(i.cards=f)}},decls:15,vars:4,consts:[[1,"card-container"],[1,"row"],[3,"frontImage","backImage","cardClicked",4,"ngFor","ngForOf"],[1,"scoreboard"],["routerLink","/",1,"zoom-btn"],[3,"frontImage","backImage","cardClicked"]],template:function(t,i){t&1&&(o(0,"header"),c(1,` Twelve Cards Memory Game
`),a(),o(2,"div",0)(3,"div",1),_(4,J,1,2,"app-card",2),a()(),o(5,"div",3)(6,"p"),c(7),a(),o(8,"p"),c(9),a(),o(10,"p"),c(11),a()(),o(12,"div")(13,"button",4),c(14,"Exit"),a()()),t&2&&(s(4),h("ngForOf",i.cardObjects),s(3),p("Moves: ",i.moves,""),s(2),p("Misses: ",i.misses,""),s(2),p("Accuracy: ",i.getAccuracy(),"%"))},dependencies:[E,b,m],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Times New Roman,Times,serif;border:black dotted}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap;width:80%;margin:20px auto;border:balck dotted 2px;border-radius:20%}.row[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%]{margin:10px;flex-basis:calc(16.666% - 20px);box-sizing:border-box;border:black;border-radius:10%}app-card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #ae1087f2;padding-left:10px}header[_ngcontent-%COMP%]{background-color:#08a782;color:#ecf0f1;text-align:center;padding:20px;font-size:24px;font-weight:700;text-transform:uppercase;letter-spacing:2px;border-bottom:2px solid #2980b9;text-decoration:wavy;text-decoration-color:#2980b9;border:black dotted;border-radius:30%}.card-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:70vh;background-color:pink;border:black dotted;border-radius:20%}.scoreboard[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.scoreboard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;margin:0 10px;font-size:16px;color:#2c3e50}.zoom-btn[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;font-size:16px;cursor:pointer;transition:transform .3s ease}.zoom-btn[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.zoom-btn[_ngcontent-%COMP%]:active{transform:scale(.8)}"]});let n=e;return n})();var Y=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-home"]],decls:14,vars:0,consts:[[1,"memory-game-container"],["routerLink","/"],[1,"six"],["routerLink","/6cards"],[1,"info1"],[1,"twelve"],["routerLink","/12cards"],[1,"info2"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"nav")(2,"h1"),c(3,"MEMORY GAME"),a(),o(4,"a",1),c(5,"Home"),a()(),o(6,"div",2)(7,"a",3)(8,"div",4),c(9,"6 CARDS"),a()()(),o(10,"div",5)(11,"a",6)(12,"div",7),c(13,"12 CARDS"),a()()()())},dependencies:[b],styles:["nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;text-align:center;margin:20px;background-color:green;padding:10px 20px}h1[_ngcontent-%COMP%]{margin-left:500px;color:#ecf0f1}a[_ngcontent-%COMP%]{text-decoration:none;color:#ecf0f1;font-size:18px;margin-left:20px;transition:color .3s}a[_ngcontent-%COMP%]:hover{color:#2ecc71}.six[_ngcontent-%COMP%]{display:inline-block;margin-top:100px;margin-left:150px;text-align:center;width:300px;height:100px}.twelve[_ngcontent-%COMP%]{display:inline-block;margin-top:100px;margin-left:290px;text-align:center;width:300px;height:100px}.six[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .twelve[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#ecf0f1;font-size:14px;transition:background-color .3s,transform .3s;display:block;padding:10px;background-color:#000;border-radius:10px;box-shadow:0 4px 8px #0000001a}.six[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .twelve[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:green;transform:scale(1.05)}.info1[_ngcontent-%COMP%], .info2[_ngcontent-%COMP%]{display:inline-block;font-size:30px}"]});let n=e;return n})();var K=[{path:"6cards",component:H},{path:"12cards",component:G},{path:"**",component:Y}],q=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e}),e.\u0275inj=x({imports:[T.forRoot(K),T]});let n=e;return n})();var j=(()=>{let e=class e{constructor(){this.title="MemoryGameImplementation"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&k(0,"router-outlet")},dependencies:[L],styles:["nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;text-align:center;margin:20px;background-color:#05090c;padding:10px 20px}h1[_ngcontent-%COMP%]{margin-left:500px;color:#ecf0f1}a[_ngcontent-%COMP%]{text-decoration:none;color:#ecf0f1;font-size:18px;margin-left:20px;transition:color .3s}a[_ngcontent-%COMP%]:hover{color:#2ecc71}.six[_ngcontent-%COMP%]{display:inline-block;margin-top:100px;margin-left:150px;text-align:center;width:300px;height:100px}.twelve[_ngcontent-%COMP%]{display:inline-block;margin-top:100px;margin-left:290px;text-align:center;width:300px;height:100px}.six[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .twelve[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#ecf0f1;font-size:14px;transition:background-color .3s,transform .3s;display:block;padding:10px;background-color:#3498db;border-radius:10px;box-shadow:0 4px 8px #0000001a}.six[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .twelve[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:#2980b9;transform:scale(1.05)}.info1[_ngcontent-%COMP%], .info2[_ngcontent-%COMP%]{display:inline-block;font-size:30px}"]});let n=e;return n})();var B=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e,bootstrap:[j]}),e.\u0275inj=x({providers:[N()],imports:[A,q]});let n=e;return n})();var W=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e,bootstrap:[j]}),e.\u0275inj=x({imports:[B,V]});let n=e;return n})();export{W as a};
