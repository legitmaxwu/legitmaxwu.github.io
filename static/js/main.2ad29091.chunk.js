(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{199:function(e,t,n){e.exports=n(424)},204:function(e,t,n){},205:function(e,t,n){},217:function(e,t,n){},233:function(e,t){},235:function(e,t){},265:function(e,t){},266:function(e,t){},331:function(e,t){},424:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(68),i=n.n(c),o=(n(204),n(16)),l=n(17),u=n(19),s=n(18),m=n(20),b=n(40),h=n(45),f=n(1),d=(n(205),n(2)),p=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},v="@media (max-width: 1000px)",g="@media (max-width: 700px)",j="@media (min-width: 701px)",O="#008080",E="black",y="white",x={heading:"Quicksand",body:"Nunito"},w={heading:"Alegreya",body:"Alegreya"};function k(){var e=Object(f.a)(["\n              font-family: ",";\n              font-size: 72px;\n              text-align: center;\n              margin: 80px;\n              "," {\n                font-size: 60px;\n                margin: 80px 40px;\n              }\n            "]);return k=function(){return e},e}var N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(e){var t=Array.from(document.querySelectorAll(".parallax-layer")),n=window.pageYOffset;t.forEach((function(e){var t=e.getAttribute("data-speed"),a=-n*t/100;e.style.transform="translateY(".concat(a,"px)")}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Parallax",ref:function(t){return e.container=t}},r.a.createElement("div",{className:"parallax-layer",id:"layer-0","data-speed":"40"},r.a.createElement("div",{className:Object(d.a)(k(),w.heading,g)},"The Story of Max Wu")),r.a.createElement("div",{className:"parallax-layer",id:"layer-1","data-speed":"100"}))}}]),t}(r.a.Component),S=n(24),C=n(5),I=n(70);function D(){var e=Object(f.a)(["\n          position: -webkit-sticky;\n          width: 100%;\n          position: sticky;\n          top: 0;\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          font-family: ",";\n          pointer-events: auto;\n          z-index: 100;\n          overflow: scroll;\n          ","\n        "]);return D=function(){return e},e}function R(){var e=Object(f.a)(["\n  width: 10px;\n"]);return R=function(){return e},e}function L(){var e=Object(f.a)(["\n        display: flex;\n        text-decoration: none;\n        align-items: center;\n        padding: 20px 25px;\n        text-decoration: none;\n        ","\n        &:hover {\n          ",";\n        }\n      "]);return L=function(){return e},e}I.scroller.scrollTo("bottomNavbar",{smooth:"easeInQuart"});var M=function(e){var t=e.itemStyle,n=e.itemHoverStyle,r=e.to;return a.createElement(b.b,{to:r,className:Object(d.a)(L(),t&&Object(S.a)({},t),n&&Object(S.a)({},n))},e.children)},z=function(e){var t=e.itemStyle,n=e.itemHoverStyle,r=e.to;return e.scroll?a.createElement(I.Link,{activeClass:"active",to:"bottomNavbar",spy:!0,smooth:!0,duration:2e3,ignoreCancelEvents:!0},a.createElement(M,{itemStyle:t,itemHoverStyle:n,to:r,children:e.children})):a.createElement(M,{itemStyle:t,itemHoverStyle:n,to:r,children:e.children})},A=Object(C.a)("div")(R()),F=function(e){var t=Object(h.f)().url,n=e.itemStyle,r=e.itemHoverStyle,c=e.scroll,i=e.style;return a.createElement(a.Fragment,null,a.createElement("nav",{className:Object(d.a)(D(),x.heading,i&&Object(S.a)({},i))},a.createElement(A,null),a.createElement(z,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"/",scroll:c},"go back"),a.createElement(z,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t),scroll:c},"home"),a.createElement(z,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t,"/art"),scroll:c},"art"),a.createElement(z,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t,"/photography"),scroll:c},"photography"),a.createElement(z,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t,"/friends"),scroll:c},"friends' stories")))},H=n(123),T=n.n(H),W=(n(217),n(53)),_=n.n(W);function P(){var e=Object(f.a)(["\n  "," {\n    display: none;\n  }\n"]);return P=function(){return e},e}function V(){var e=Object(f.a)(["\n  "," {\n    display: none;\n  }\n"]);return V=function(){return e},e}var B=Object(C.a)("div")(V(),g),G=Object(C.a)("div")(P(),j),Y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sheetsData:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sheetId;_.a.init({key:t,callback:function(t){e.setState({sheetsData:t})},simpleSheet:!0})}},{key:"getAutoResponsiveProps",value:function(){return{itemMargin:10,containerWidth:10,itemClassName:"item",gridWidth:100,transitionDuration:".5"}}},{key:"render",value:function(){var e=this,t=this.props.columns;return r.a.createElement("div",null,r.a.createElement(G,null,r.a.createElement(T.a,{breakpointCols:1,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},this.state.sheetsData&&this.state.sheetsData.map((function(t){return r.a.createElement(e.props.cardComponent,{value:t})})))),r.a.createElement(B,null,r.a.createElement(T.a,{breakpointCols:t,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},this.state.sheetsData&&this.state.sheetsData.map((function(t){return r.a.createElement(e.props.cardComponent,{value:t})})))))}}]),t}(r.a.Component),U=n(34);function Q(){var e=Object(f.a)(["\n            /* margin: 5px; */\n            padding: 15px;\n            background-color: ",";\n            font-style: ",";\n          "]);return Q=function(){return e},e}function J(){var e=Object(f.a)(["\n          height: auto;\n          width: 100%;\n          box-shadow: 5px 5px 5px black;\n        "]);return J=function(){return e},e}var K=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:Object(d.a)(J())},a.createElement("div",{className:Object(d.a)(Q(),y,w.body)},this.props.children))}}]),t}(a.Component);function X(){var e=Object(f.a)(["\n              font-size: 20px;\n              margin: 10px;\n              color: ",";\n              text-align: center;\n            "]);return X=function(){return e},e}function Z(){var e=Object(f.a)(["\n            height: 100%;\n            width: 100%;\n          "]);return Z=function(){return e},e}function q(){var e=Object(f.a)(["\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return q=function(){return e},e}function $(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  height: auto;\n  position: relative;\n"]);return $=function(){return e},e}function ee(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  height: auto;\n"]);return ee=function(){return e},e}var te=Object(C.a)("img")(ee()),ne=Object(C.a)("div")($()),ae=(Object(C.a)("div")(q(),O),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showModal:!1},n.setModalVisibility=n.setModalVisibility.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setModalVisibility",value:function(e){this.setState({showModal:e})}},{key:"render",value:function(){var e=this.props.value,t=e.caption,n=e.imageURL,r=e.imageAlt;return a.createElement(K,null,a.createElement("div",{className:Object(d.a)(Z())},a.createElement(ne,null,a.createElement(te,{src:n,alt:r})),a.createElement("div",{className:Object(d.a)(X(),E)},t)))}}]),t}(a.Component));function re(){var e=Object(f.a)(["\n        width: 90%;\n        margin: 0 auto;\n      "]);return re=function(){return e},e}var ce=function(){return r.a.createElement("div",{className:Object(d.a)(re())},r.a.createElement(Y,{sheetId:"1EwIwb7Vf8hwD80Bj4fW9OlBi-TjNZ7XXRVHx_Ow7lQo",columns:3,cardComponent:ae}))};function ie(){var e=Object(f.a)(["\n        text-align: center;\n        line-height: 400px;\n      "]);return ie=function(){return e},e}var oe=function(){return r.a.createElement("div",{className:Object(d.a)(ie())},"coming soon")};function le(){var e=Object(f.a)(["\n            height: 100%;\n            width: 100%;\n          "]);return le=function(){return e},e}function ue(){var e=Object(f.a)(["\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(f.a)(["\n  width: 100%;\n  height: auto;\n  position: relative;\n"]);return se=function(){return e},e}function me(){var e=Object(f.a)(["\n  width: 100%;\n  height: auto;\n"]);return me=function(){return e},e}var be=Object(C.a)("img")(me()),he=Object(C.a)("div")(se()),fe=(Object(C.a)("div")(ue(),O),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showModal:!1},n.setModalVisibility=n.setModalVisibility.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setModalVisibility",value:function(e){this.setState({showModal:e})}},{key:"render",value:function(){var e=this.props.value,t=e.imageURL,n=e.imageAlt;return a.createElement(K,null,a.createElement("div",{className:Object(d.a)(le())},a.createElement(he,null,a.createElement(be,{src:t,alt:n}))))}}]),t}(a.Component));function de(){var e=Object(f.a)(["\n        width: 90%;\n        margin: 0 auto;\n      "]);return de=function(){return e},e}var pe=function(){return r.a.createElement("div",{className:Object(d.a)(de())},r.a.createElement(Y,{sheetId:"1Ku9E9p1u52nVzTF71DNqSOCuecB2UK8Odyi8paDw9PI",columns:4,cardComponent:fe}))};function ve(){var e=Object(f.a)([""]);return ve=function(){return e},e}function ge(){var e=Object(f.a)([""]);return ge=function(){return e},e}function je(){var e=Object(f.a)(["\n        width: 90%;\n        margin: 0 auto;\n      "]);return je=function(){return e},e}function Oe(){var e=Object(f.a)(["\n  display: flex;\n  text-decoration: none;\n  text-align: center;\n  color: white;\n  align-items: center;\n  padding: 20px 25px;\n  text-decoration: none;\n  &:hover {\n    /* font-weight: 700; */\n    text-shadow: 0px 0px 10px white;\n  }\n"]);return Oe=function(){return e},e}var Ee=Object(C.a)(b.b)(Oe()),ye=function(){return r.a.createElement("div",{className:Object(d.a)(je())},r.a.createElement(Ee,{to:"/emir",className:Object(d.a)(ge())},"Emir's Food Ratings"),r.a.createElement(Ee,{to:"/patrick",className:Object(d.a)(ve())},"Patrick's Book Ratings"))};function xe(){var e=Object(f.a)(["\n          height: 100px;\n          width: 100%;\n          background-image: linear-gradient(",", #010220);\n          z-index: 10;\n          color: white;\n\n          line-height: 100px;\n          text-align: center;\n        "]);return xe=function(){return e},e}function we(){var e=Object(f.a)(["\n                text-align: center;\n                line-height: 400px;\n              "]);return we=function(){return e},e}function ke(){var e=Object(f.a)(["\n          min-height: 100vh;\n          width: 100%;\n          background-color: ",";\n          z-index: 10;\n          color: white;\n        "]);return ke=function(){return e},e}function Ne(){var e=Object(f.a)(["\n          height: 15vh;\n          width: 100%;\n          background-image: linear-gradient(#010220, ",");\n          color: white;\n          margin-top: -50px;\n          border-top: 50px solid #010220;\n          /* outline: 300px solid #010220; */\n          /* z-index: -200 !important; */\n        "]);return Ne=function(){return e},e}var Se=function(){var e=Object(h.f)().path;return r.a.createElement("div",null,r.a.createElement(F,{style:{position:"absolute",backgroundColor:"transparent"},itemStyle:{color:E,fontWeight:"bold"},itemHoverStyle:{color:y},scroll:!0}),r.a.createElement(N,null),r.a.createElement(I.Element,{name:"bottomNavbar"}),r.a.createElement(F,{style:{backgroundColor:"rgba(1, 2, 32, 0.7)"},itemStyle:{color:y},itemHoverStyle:{textShadow:"-0.06ex 0 white, 0.06ex 0 white;",backgroundColor:"rgba(255, 255, 255, 0.1)",transition:"0.3s"}}),r.a.createElement("div",{className:Object(d.a)(Ne(),"#003366")}),r.a.createElement("div",{className:Object(d.a)(ke(),"#003366")},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:e},r.a.createElement("div",{className:Object(d.a)(we())},"Thanks so much for stopping by! ^_^ This is still a WIP but stay tuned for more content heh. (hint: click 'art' or 'photography')")),r.a.createElement(h.a,{path:"".concat(e,"/projects")},r.a.createElement(oe,null)),r.a.createElement(h.a,{path:"".concat(e,"/art")},r.a.createElement(ce,null)),r.a.createElement(h.a,{path:"".concat(e,"/photography")},r.a.createElement(pe,null)),r.a.createElement(h.a,{path:"".concat(e,"/friends")},r.a.createElement(ye,null)))),r.a.createElement("div",{className:Object(d.a)(xe(),"#003366")},"hi this is a footer"))},Ce=n(197),Ie=n.n(Ce);function De(){var e=Object(f.a)(["\n                        color: ",";\n                        text-decoration: none;\n                        &:hover {\n                          filter: brightness(140%);\n                        }\n                      "]);return De=function(){return e},e}function Re(){var e=Object(f.a)(["\n                        font-weight: bold;\n                      "]);return Re=function(){return e},e}function Le(){var e=Object(f.a)(["\n                        font-weight: bold;\n                      "]);return Le=function(){return e},e}function Me(){var e=Object(f.a)(["\n                        font-weight: bold;\n                      "]);return Me=function(){return e},e}function ze(){var e=Object(f.a)(["\n                        font-weight: bold;\n                      "]);return ze=function(){return e},e}function Ae(){var e=Object(f.a)(["\n                        font-weight: bold;\n                      "]);return Ae=function(){return e},e}function Fe(){var e=Object(f.a)(["\n                        color: #089ed1;\n                        font-weight: bold;\n                      "]);return Fe=function(){return e},e}function He(){var e=Object(f.a)(["\n                  display: flex;\n                  flex-direction: row;\n                  align-items: center;\n                  font-size: 20px;\n                  padding: 20px;\n                  "," {\n                    padding: 10px;\n                  }\n                  border: 3px solid black;\n                  border-radius: 20px;\n                "]);return He=function(){return e},e}function Te(){var e=Object(f.a)(["\n            width: 65%;\n            height: auto;\n            "," {\n              width: 80%;\n            }\n            min-width: 300px;\n            font-family: ",";\n          "]);return Te=function(){return e},e}function We(){var e=Object(f.a)(["\n  margin: 20px;\n  "," {\n    margin: 16px;\n  }\n  font-family: ",";\n"]);return We=function(){return e},e}function _e(){var e=Object(f.a)(["\n  margin: 20px;\n  "," {\n    margin: 16px;\n  }\n"]);return _e=function(){return e},e}function Pe(){var e=Object(f.a)(["\n  height: 200px;\n  width: 200px;\n  margin: 15px;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 1px dotted gray;\n  "," {\n    display: none;\n  }\n"]);return Pe=function(){return e},e}function Ve(){var e=Object(f.a)(["\n  color: ",";\n  text-decoration: none;\n  &:hover {\n    filter: brightness(140%);\n  }\n"]);return Ve=function(){return e},e}function Be(){var e=Object(f.a)(["\n  height: auto;\n  width: calc(100% - 220px);\n  "," {\n    width: 100%;\n  }\n  "," {\n    font-size: 14px;\n  }\n"]);return Be=function(){return e},e}function Ge(){var e=Object(f.a)(["\n  background-color: white;\n\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ge=function(){return e},e}var Ye={LinkColor:O},Ue=Object(C.a)("div")(Ge()),Qe=Object(C.a)("div")(Be(),v,g),Je=Object(C.a)("a")(Ve(),Ye.LinkColor),Ke=Object(C.a)("img")(Pe(),v),Xe=Object(C.a)("p")(_e(),g),Ze=Object(C.a)("h1")(We(),g,x.heading),qe=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Ue,null,r.a.createElement("div",{className:Object(d.a)(Te(),g,x.body)},r.a.createElement(Ie.a,{className:"Tilt",options:{reverse:!0,scale:1.02,max:13,perspective:1e3,speed:2e4,reset:!0},style:{height:"auto",width:"100%"}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("div",{className:Object(d.a)(He(),g)},r.a.createElement(Ke,{src:"https://i.imgur.com/wSasxPZ.jpg"}),r.a.createElement(Qe,null,r.a.createElement(Ze,null,"Hello :)"),r.a.createElement(Xe,null,"Welcome to my site! ",r.a.createElement(p,{label:"wave",symbol:"\ud83d\udc4b"})," I'm a second-year student at UCLA. I strive to"," ",r.a.createElement("span",{className:Object(d.a)(Fe())},"make waves")," ",r.a.createElement(p,{label:"wave",symbol:"\ud83c\udf0a"})," in interesting ways."),r.a.createElement(Xe,null,"Right now, I'm most invested in building"," ",r.a.createElement(Je,{className:Object(d.a)(Ae()),href:"http://novaforgood.org/",target:"_blank"},"Nova ",r.a.createElement(p,{label:"stars",symbol:"\u2728"})),", where we connect college students with nonprofits through pro-bono collaborations. I also lead the External Sites team at the"," ",r.a.createElement(Je,{className:Object(d.a)(ze()),href:"https://dailybruin.com/about/",target:"_blank"},"Daily Bruin ",r.a.createElement(p,{label:"memo",symbol:"\ud83d\udcdd"})),", where we use multimedia to tell stories like the"," ",r.a.createElement(Je,{href:"http://dailytrojan.dailybruin.com/",target:"_blank"},"this"),","," ",r.a.createElement(Je,{href:"https://features.dailybruin.com/2019/beyondthereports/",target:"_blank"},"this"),", and"," ",r.a.createElement(Je,{href:"https://features.dailybruin.com/2019/wasted-opportunity/",target:"_blank"},"this"),"."),r.a.createElement(Xe,null,"Check out my"," ",r.a.createElement(Je,{href:"https://maxcwu.home.blog/",target:"_blank",className:Object(d.a)(Me())},"blog ",r.a.createElement(p,{label:"pencil",symbol:"\u270f\ufe0f"}))," ","and my"," ",r.a.createElement(Je,{href:"https://github.com/legitmaxwu",target:"_blank",className:Object(d.a)(Le())},"GitHub ",r.a.createElement(p,{label:"computer",symbol:"\ud83d\udda5\ufe0f"})),". Also, here's my"," ",r.a.createElement(Je,{href:"https://www.linkedin.com/in/maxcwu/",target:"_blank",className:Object(d.a)(Re())},"LinkedIn ",r.a.createElement(p,{label:"handshake",symbol:"\ud83e\udd1d"})),". I put some of my interests there, so connect with me and let's talk!"),r.a.createElement(Xe,null,"- Max"),r.a.createElement(Xe,null,"PS: my real website is"," ",r.a.createElement(b.b,{to:"/story",className:Object(d.a)(De(),Ye.LinkColor)},"here")," ",":P (I'd love for you to check it out!)")))))))}}]),t}(r.a.Component);function $e(){var e=Object(f.a)(["\n        height: 100%;\n        color: black;\n      "]);return $e=function(){return e},e}function et(){var e=Object(f.a)(["\n                    transition: 0.3s;\n                    max-height: ",";\n                    object-fit: cover;\n                    width: 300px;\n                  "]);return et=function(){return e},e}function tt(){var e=Object(f.a)(["\n                      height: 20px;\n                      background-color: hsl(",", 70%, 50%);\n                      width: ","%;\n                    "]);return tt=function(){return e},e}function nt(){var e=Object(f.a)([""]);return nt=function(){return e},e}function at(){var e=Object(f.a)(["\n                  background-color: ",";\n                "]);return at=function(){return e},e}function rt(){var e=Object(f.a)(["\n              position: sticky;\n              top: 0;\n              background-color: lightcoral;\n              padding: 10px;\n              border-bottom: 5px solid black;\n            "]);return rt=function(){return e},e}function ct(){var e=Object(f.a)([""]);return ct=function(){return e},e}function it(){var e=Object(f.a)(["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-x: scroll;\n"]);return it=function(){return e},e}function ot(){var e=Object(f.a)(["\n  width: 300px;\n"]);return ot=function(){return e},e}function lt(){var e=Object(f.a)(["\n  width: 100px;\n"]);return lt=function(){return e},e}function ut(){var e=Object(f.a)(["\n  width: 300px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]);return ut=function(){return e},e}function st(){var e=Object(f.a)(["\n  width: 200px;\n"]);return st=function(){return e},e}function mt(){var e=Object(f.a)(["\n  width: 200px;\n"]);return mt=function(){return e},e}var bt=Object(C.a)("div")(mt()),ht=Object(C.a)("div")(st()),ft=Object(C.a)("div")(ut()),dt=Object(C.a)("div")(lt()),pt=Object(C.a)("div")(ot()),vt=Object(C.a)("div")(it()),gt=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sheetsData:[],showImages:!0},n.sort=n.sort.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sheetId;_.a.init({key:t,callback:function(t){e.setState({sheetsData:t})},simpleSheet:!0})}},{key:"sort",value:function(e,t){var n=t?1:-1;this.setState({sheetsData:this.state.sheetsData.sort((function(t,a){var r=parseFloat(t[e]),c=parseFloat(a[e]);return r>c?n:r==c?0:-n}))})}},{key:"toggleImages",value:function(){this.setState({showImages:!this.state.showImages})}},{key:"render",value:function(){var e=this,t=(this.props.sheetId,this.state.sheetsData);return 0==t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Object(d.a)(ct())},r.a.createElement("div",{className:Object(d.a)(rt())},r.a.createElement("h3",null,"Emir's Food Ratings (WIP)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!1)}},"Rating (high to low)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!0)}},"Rating (low to high)"),r.a.createElement("button",{onClick:function(){return e.toggleImages()}},"Toggle Showing Images")),t.map((function(t,n){var a=parseFloat(t.Rating)/10*100;return r.a.createElement(vt,{className:Object(d.a)(at(),n%2==0?"rgba(0,0,0,0.1)":"white")},r.a.createElement(bt,null,t.Food),r.a.createElement(ht,null,t.Place),r.a.createElement(ft,{className:Object(d.a)(nt())},r.a.createElement("div",{className:Object(d.a)(tt(),a+10,.9*a)})),r.a.createElement(dt,null,t.Rating," / 10"),r.a.createElement(pt,null,t.Description),r.a.createElement("img",{src:t.imageURL,className:Object(d.a)(et(),e.state.showImages?"150px":0)}))}))))}}]),t}(r.a.Component),jt=function(){return r.a.createElement("div",{className:Object(d.a)($e())},r.a.createElement(gt,{sheetId:"1aoWRD5c43OAZpBvhxSLx6r00zhunzVTdBf3Wfr9DKy8"}))},Ot=n(198);function Et(){var e=Object(f.a)(["\n        height: 100%;\n        color: black;\n      "]);return Et=function(){return e},e}function yt(){var e=Object(f.a)(["\n                    transition: 0.3s;\n                    max-height: ",";\n                    object-fit: cover;\n                    width: 300px;\n                  "]);return yt=function(){return e},e}function xt(){var e=Object(f.a)(["\n                      display: inline-block;\n                      font-size: 12;\n                      font-family: Times; // make sure \u2605 appears correctly\n                      line-height: 1;\n                      letter-spacing: 3px;\n                      background: linear-gradient(\n                        90deg,\n                        #fc0 ","%,\n                        #fff ","%\n                      );\n                      /* background-color: red; */\n                      -webkit-background-clip: text;\n                      -webkit-text-fill-color: transparent;\n                    "]);return xt=function(){return e},e}function wt(){var e=Object(f.a)([""]);return wt=function(){return e},e}function kt(){var e=Object(f.a)(["\n                  background-color: ",";\n                "]);return kt=function(){return e},e}function Nt(){var e=Object(f.a)(["\n              position: sticky;\n              top: 0;\n              background-color: lightcyan;\n              padding: 10px;\n              border-bottom: 5px solid black;\n            "]);return Nt=function(){return e},e}function St(){var e=Object(f.a)([""]);return St=function(){return e},e}function Ct(){var e=Object(f.a)(["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-x: scroll;\n"]);return Ct=function(){return e},e}function It(){var e=Object(f.a)(["\n  width: 500px;\n"]);return It=function(){return e},e}function Dt(){var e=Object(f.a)(["\n  width: 100px;\n"]);return Dt=function(){return e},e}function Rt(){var e=Object(f.a)(["\n  width: 150px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]);return Rt=function(){return e},e}function Lt(){var e=Object(f.a)(["\n  width: 60px;\n  margin-right: 20px;\n"]);return Lt=function(){return e},e}function Mt(){var e=Object(f.a)(["\n  width: 140px;\n  margin-right: 20px;\n"]);return Mt=function(){return e},e}function zt(){var e=Object(f.a)(["\n  width: 140px;\n  margin-right: 20px;\n"]);return zt=function(){return e},e}function At(){var e=Object(f.a)(["\n  width: 200px;\n  margin-right: 20px;\n"]);return At=function(){return e},e}var Ft=Object(C.a)("div")(At()),Ht=Object(C.a)("div")(zt()),Tt=Object(C.a)("div")(Mt()),Wt=Object(C.a)("div")(Lt()),_t=Object(C.a)("div")(Rt()),Pt=Object(C.a)("div")(Dt()),Vt=Object(C.a)("div")(It()),Bt=Object(C.a)("div")(Ct()),Gt=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sheetsData:[],showImages:!0,genres:[],selectedGenre:"All"},n.sort=n.sort.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sheetId;_.a.init({key:t,callback:function(t){var n=["All"].concat(Object(Ot.a)(t.map((function(e){return e.Genre})).filter((function(e,t,n){return n.indexOf(e)===t}))));e.setState({sheetsData:t,genres:n})},simpleSheet:!0})}},{key:"sort",value:function(e,t){var n=t?1:-1;this.setState({sheetsData:this.state.sheetsData.sort((function(t,a){var r=parseFloat(t[e]),c=parseFloat(a[e]);return r>c?n:r==c?0:-n}))})}},{key:"toggleImages",value:function(){this.setState({showImages:!this.state.showImages})}},{key:"render",value:function(){var e=this,t=this.state,n=t.genres,a=t.selectedGenre;if(0==this.state.sheetsData.length)return r.a.createElement(r.a.Fragment,null);var c=this.state.sheetsData;return"All"!=a&&(c=c.filter((function(e){return e.Genre==a}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Object(d.a)(St())},r.a.createElement("div",{className:Object(d.a)(Nt())},r.a.createElement("h3",null,"Patrick's Book Ratings (WIP)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!1)}},"Rating \u2193"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!0)}},"Rating \u2191"),r.a.createElement("button",{onClick:function(){return e.sort("Length",!1)}},"Length \u2193"),r.a.createElement("button",{onClick:function(){return e.sort("Length",!0)}},"Length \u2191"),r.a.createElement("button",{onClick:function(){return e.sort("Year",!1)}},"Year \u2193"),r.a.createElement("button",{onClick:function(){return e.sort("Year",!0)}},"Year \u2191"),r.a.createElement("select",{id:"genres",onChange:function(t){e.setState({selectedGenre:t.target.value})}},n.map((function(e){return r.a.createElement("option",null,e)})))),c.map((function(t,n){var a=parseFloat(t.Rating)/5*100;return r.a.createElement(Bt,{className:Object(d.a)(kt(),n%2==0?"rgba(0,0,0,0.3)":"rgba(0, 0, 0, 0.2)")},r.a.createElement(Ft,null,t.Title),r.a.createElement(Ht,null,t.Author),r.a.createElement(Tt,null,t.Genre),r.a.createElement(Wt,null,t.Length),r.a.createElement(Wt,null,t.Year),r.a.createElement(_t,{className:Object(d.a)(wt())},r.a.createElement("div",{className:Object(d.a)(xt(),a,a)},"\u2605\u2605\u2605\u2605\u2605")),r.a.createElement(Pt,null,t.Rating),r.a.createElement(Vt,null,t.Thoughts),r.a.createElement("img",{src:t.imageURL,className:Object(d.a)(yt(),e.state.showImages?"150px":0)}))}))))}}]),t}(r.a.Component),Yt=function(){return r.a.createElement("div",{className:Object(d.a)(Et())},r.a.createElement(Gt,{sheetId:"1mVLLG9JurON2fcSdVu6Xr3Bbx_Tn5niQ3trRl67OeCQ"}))},Ut=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/story",component:Se}),r.a.createElement(h.a,{exact:!0,path:"/",component:qe}),r.a.createElement(h.a,{path:"/emir",component:jt}),r.a.createElement(h.a,{path:"/patrick",component:Yt}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[199,1,2]]]);
//# sourceMappingURL=main.2ad29091.chunk.js.map